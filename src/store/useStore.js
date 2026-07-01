import { create } from "zustand";
import { persist } from "zustand/middleware";
import { seedItems, LANGUAGES, UNITS } from "../data/index.js";
import { newCard, schedule, isDue } from "./srs.js";
import { nextRung, isReviewable } from "./mastery.js";
import { migrateState, PERSIST_VERSION } from "./migrate.js";
import { matchesDevCode } from "./dev.js";

// Seed every item with a fresh FSRS card attached as its srs. Card attachment
// lives here (not in the data loader) per Brief 2.
function freshSeed() {
  const seed = seedItems();
  const out = {};
  for (const [id, it] of Object.entries(seed)) out[id] = { ...it, srs: newCard() };
  return out;
}

// ISO date string (YYYY-MM-DD) in local time, used for streak/daily bookkeeping.
function todayISO() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

function yesterdayISO() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

const XP_BY_GRADE = { again: 2, hard: 5, good: 10, easy: 15 };

const CEFR_ORDER = { A1: 0, A2: 1, B1: 2, B2: 3 };

// Lazy cache: itemId → { cefr, lang } — built once from UNITS on first access.
let _itemMeta = null;
function itemMetaMap() {
  if (_itemMeta) return _itemMeta;
  _itemMeta = {};
  for (const unit of UNITS)
    for (const lesson of unit.lessons)
      if (lesson.cefr && lesson.items)
        for (const def of lesson.items)
          _itemMeta[def.id] = { cefr: lesson.cefr, lang: unit.lang };
  return _itemMeta;
}

// True when every item at CEFR ≤ targetLevel for langId is at rung ≥ 1.
function isLevelComplete(langId, targetLevel, items) {
  const maxIdx = CEFR_ORDER[targetLevel] ?? 0;
  const defs = UNITS.filter((u) => u.lang === langId)
    .flatMap((u) => u.lessons.filter((l) => l.items && (CEFR_ORDER[l.cefr] ?? 0) <= maxIdx))
    .flatMap((l) => l.items);
  if (defs.length === 0) return false;
  return defs.every((def) => (items[def.id]?.rung ?? 0) >= 1);
}

// Default language progress state, derived from the static LANGUAGES table.
function initialLanguages() {
  const out = {};
  for (const lang of LANGUAGES) {
    out[lang.id] = { ...lang, level: "pre-A1", xp: 0 };
  }
  return out;
}

export const useStore = create(
  persist(
    (set, get) => ({
      items: {},
      languages: initialLanguages(),
      streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
      stats: { xpTotal: 0 },
      daily: { date: null, reviewsCleared: false, lessonDone: false },
      devMode: false,
      // User preferences. `sfx` = synthesized answer chimes/clicks; `autoplayAudio`
      // = auto-play the pronunciation clip when a Teach card appears (the speaker
      // button always plays regardless). Both default on; persisted. Old persisted
      // state without this key keeps these defaults via persist's shallow merge.
      settings: { sfx: true, autoplayAudio: true, showRomaji: true, theme: "system", textSize: "default" },
      ui: {},

      // Cloud sync (Supabase). `lastModified` is persisted and drives the
      // push-vs-pull decision on sign-in (src/store/sync.js). `auth` is transient
      // (never persisted). The signIn*/signOut actions are no-ops until
      // cloudSync.initCloudSync wires the real Supabase calls in — that keeps the
      // SDK out of the main bundle and out of the store module.
      lastModified: 0,
      // `ready` flips true once Supabase resolves the initial session (or when
      // unconfigured), so the auth gate can render without a flash. The auth
      // actions are no-ops until cloudSync.initCloudSync wires the real Supabase
      // calls in — keeping the SDK out of the main bundle and the store module.
      auth: { configured: false, ready: false, user: null, status: "idle", error: null, recovery: false },
      signUp: async () => ({ error: "Auth isn't configured." }),
      signIn: async () => ({ error: "Auth isn't configured." }),
      requestPasswordReset: async () => ({ error: "Auth isn't configured." }),
      updatePassword: async () => ({ error: "Auth isn't configured." }),
      signOut: async () => {},

      // Onboarding profile (persisted + synced via the progress blob). `onboarded`
      // gates the flow. `languages` = the ordered list the learner has STARTED
      // (user-chosen, not a hardcoded chain); `activeLang` = the one in focus.
      profile: { onboarded: false, displayName: null, reason: null, reminderTime: null, languages: [], activeLang: null },
      completeOnboarding: (answers) =>
        set((s) => ({ profile: { ...s.profile, ...answers, onboarded: true } })),

      // Begin a language (onboarding pick or the "add a language" flow) and make
      // it the active one. Idempotent — re-picking a started language just focuses it.
      startLanguage: (id) =>
        set((s) => {
          const languages = s.profile.languages.includes(id)
            ? s.profile.languages
            : [...s.profile.languages, id];
          return { profile: { ...s.profile, languages, activeLang: id } };
        }),

      // Switch focus among languages already started.
      setActiveLang: (id) =>
        set((s) => (s.profile.languages.includes(id) ? { profile: { ...s.profile, activeLang: id } } : s)),

      // Dev/testing: re-show the onboarding flow (language pick + profile) without
      // touching any progress — just flips the flag so the gate runs it again.
      replayOnboarding: () => set((s) => ({ profile: { ...s.profile, onboarded: false } })),

      setSetting: (key, value) =>
        set((s) => ({ settings: { ...s.settings, [key]: value } })),

      setAuth: (partial) => set((s) => ({ auth: { ...s.auth, ...partial } })),
      bumpModified: () => set({ lastModified: Date.now() }),

      // Apply a cloud progress blob. MERGES over the current item set so items
      // added in a newer app version (absent from an older cloud blob) still
      // exist at rung 0 — a pull never makes a unit disappear. Cloud item ids no
      // longer in the curriculum are simply ignored.
      hydrateFromCloud: (blob) =>
        set((s) => {
          const base = Object.keys(s.items).length ? s.items : freshSeed();
          const items = { ...base };
          for (const [id, it] of Object.entries(blob.items ?? {})) {
            if (items[id]) items[id] = it;
          }
          const next = { items, lastModified: Date.now() };
          for (const k of ["languages", "streak", "stats", "daily", "devMode", "settings", "profile"]) {
            if (blob[k] !== undefined) next[k] = blob[k];
          }
          return next;
        }),

      // Reconcile the deck against the current curriculum on every run:
      //  - NEW items (units shipped since last seed) get added at rung 0,
      //  - existing items keep their progress (rung + FSRS srs) but take the
      //    latest CONTENT (so reading/meaning fixes propagate),
      //  - items no longer in the curriculum are dropped.
      // This replaces the old "seed only when empty" rule, which left existing
      // learners stuck at whatever item count was present on their first run.
      seedOnce: () => {
        set((s) => {
          const seed = freshSeed();
          const prev = s.items || {};
          const items = {};
          for (const [id, fresh] of Object.entries(seed)) {
            const p = prev[id];
            items[id] = p ? { ...fresh, rung: p.rung ?? 0, srs: p.srs ?? fresh.srs } : fresh;
          }
          let daily = s.daily;
          if (daily.date !== todayISO()) {
            daily = { date: todayISO(), reviewsCleared: false, lessonDone: false };
          }
          // Backfill any language progress entries added since last persist.
          const languages = { ...initialLanguages(), ...s.languages };
          // Migration: an existing learner (already onboarded, or with real
          // progress) from before language-selection defaults to Japanese as
          // their started + active language, so nothing they've done resets.
          let profile = s.profile;
          if (!profile.languages || profile.languages.length === 0) {
            const hasProgress = Object.values(items).some((it) => (it.rung ?? 0) >= 1);
            if (profile.onboarded || hasProgress) {
              profile = { ...profile, languages: ["ja"], activeLang: "ja" };
            }
          }
          return { items, daily, languages, profile };
        });
      },

      // Selector: items whose FSRS card is due AND that have climbed at least to
      // RECOGNIZED. Fresh items (rung 0) are not "due" — they enter via a lesson.
      dueItems: () => {
        return Object.values(get().items).filter(
          (it) => isReviewable(it) && it.srs && isDue(it.srs)
        );
      },

      // Derived: reviews are locked (blocking a new lesson) while there is
      // review debt that hasn't been cleared today.
      reviewsLocked: () => {
        const { daily } = get();
        return get().dueItems().length > 0 && !daily.reviewsCleared;
      },

      // Grade a single item: reschedule via SRS, advance/hold/drop its rung,
      // and award XP. Persisted.
      gradeItem: (id, grade) => {
        set((s) => {
          const item = s.items[id];
          if (!item) return s;
          const srs = schedule(item.srs, grade);
          const rung = nextRung(item, grade);
          const gain = XP_BY_GRADE[grade] ?? 0;

          const items = { ...s.items, [id]: { ...item, srs, rung } };
          const stats = { ...s.stats, xpTotal: s.stats.xpTotal + gain };
          const lang = s.languages[item.lang];
          const languages = lang
            ? { ...s.languages, [item.lang]: { ...lang, xp: lang.xp + gain } }
            : s.languages;
          return { items, stats, languages };
        });
      },

      completeReviews: () => {
        set((s) => ({ daily: { ...s.daily, date: todayISO(), reviewsCleared: true } }));
      },

      // Graduate a freshly-learned item out of the in-session learning steps into
      // FSRS spaced review (Brief A.1). Fires exactly once per item: first real
      // FSRS schedule, rung → RECOGNIZED, XP once. `grade` reflects how the
      // learning steps went (`good` clean, `hard` if any retry).
      graduateItem: (id, grade) => {
        set((s) => {
          const item = s.items[id];
          if (!item || (item.rung ?? 0) >= 1) return s; // already graduated
          const srs = schedule(item.srs, grade);
          const gain = XP_BY_GRADE[grade] ?? 0;
          const items = { ...s.items, [id]: { ...item, srs, rung: 1 } };
          const stats = { ...s.stats, xpTotal: s.stats.xpTotal + gain };
          const lang = s.languages[item.lang];
          const languages = lang
            ? { ...s.languages, [item.lang]: { ...lang, xp: lang.xp + gain } }
            : s.languages;
          return { items, stats, languages };
        });
      },

      // Mark the day's lesson done. Graduation of new items is now per-item via
      // graduateItem (Brief A.1) — this no longer blanket-graduates anything.
      completeLesson: () => {
        set((s) => ({ daily: { ...s.daily, date: todayISO(), lessonDone: true } }));
        get().checkCascade();
      },

      // Daily goal: reviews are mandatory; lesson is optional bonus.
      // Streak triggers when reviews are cleared, OR when there are no reviews
      // due today and the lesson was done (new learner, early days).
      rollDailyGoal: () => {
        const { daily } = get();
        const nothingDue = get().dueItems().length === 0;
        const met = daily.reviewsCleared || (nothingDue && daily.lessonDone);
        if (!met) return false;
        get().bumpStreak();
        get().checkCascade();
        return true;
      },

      // Streak bookkeeping. Idempotent for a given day (no double-count).
      bumpStreak: () => {
        set((s) => {
          const today = todayISO();
          const st = s.streak;
          if (st.lastActive === today) return s; // already counted today

          let current;
          let freezes = st.freezes;
          if (st.lastActive === yesterdayISO()) {
            current = st.current + 1;
          } else if (st.lastActive == null) {
            current = 1;
          } else {
            // Missed one or more days: spend a freeze to preserve the streak,
            // otherwise it resets and today starts a fresh streak of 1.
            if (freezes > 0) {
              freezes -= 1;
              current = st.current + 1;
            } else {
              current = 1;
            }
          }
          const longest = Math.max(st.longest, current);
          return { streak: { current, longest, freezes, lastActive: today } };
        });
      },

      // Cascade: promote each language's CEFR level from actual item completion.
      // Unlocking the NEXT language is no longer automatic/hardcoded — the learner
      // chooses it (startLanguage) once their current language reaches A1 (see
      // canAddLanguage). This only advances levels.
      checkCascade: () => {
        set((s) => {
          const newLangs = { ...s.languages };
          let changed = false;
          for (const langDef of LANGUAGES) {
            const st = newLangs[langDef.id];
            if (!st || st.level !== "pre-A1") continue;
            if (isLevelComplete(langDef.id, "A1", s.items)) {
              newLangs[langDef.id] = { ...st, level: "A1" };
              changed = true;
            }
          }
          return changed ? { languages: newLangs } : s;
        });
      },

      // Can the learner start another language yet? True once any language they've
      // already started has reached at least A1 (the "lock till A1" rule).
      canAddLanguage: () => {
        const { profile, languages } = get();
        return (profile.languages ?? []).some(
          (id) => (CEFR_ORDER[languages[id]?.level] ?? -1) >= CEFR_ORDER.A1
        );
      },

      // Selector: items the learner has touched for `lang`, scoped to CEFR ≤
      // maxLevel and rung ≤ maxRung. Used by Haruki to know what the learner
      // actually knows before generating practice prompts.
      inventoryFor: ({ lang, maxLevel = "A1", maxRung = Infinity }) => {
        const maxIdx = CEFR_ORDER[maxLevel] ?? 0;
        const meta = itemMetaMap();
        return Object.values(get().items).filter((it) => {
          if (it.lang !== lang) return false;
          if ((it.rung ?? 0) > maxRung) return false;
          const m = meta[it.id];
          return m && (CEFR_ORDER[m.cefr] ?? 0) <= maxIdx;
        });
      },

      // Dev Mode unlock (Settings → code field). Convenience for solo
      // playtesting, NOT security — the code lives in the bundle. Persisted so it
      // survives reloads; `disableDevMode` turns it back off.
      unlockDevMode: (code) => {
        if (!matchesDevCode(code)) return false;
        set({ devMode: true });
        return true;
      },
      disableDevMode: () => set({ devMode: false }),

      // Dev/testing helper: wipe all persisted progress back to seed.
      resetAll: () => {
        set({
          items: freshSeed(),
          languages: initialLanguages(),
          streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
          stats: { xpTotal: 0 },
          daily: { date: todayISO(), reviewsCleared: false, lessonDone: false },
          ui: {},
        });
      },

      // Dev-only playtest helper (wired behind import.meta.env.DEV in the UI):
      // make every item due now across a spread of rungs so a single session
      // shows all the active-recall card types. Kana cap at RECALLED (no awkward
      // typed-kana production); vocab spread up to PRODUCED (Build).
      devSeedReviews: () => {
        set((s) => {
          const items = { ...s.items };
          const duePast = new Date(Date.now() - 1000);
          Object.keys(items).forEach((id, i) => {
            const it = items[id];
            const maxR = it.type === "kana" ? 2 : 3;
            const rung = 1 + (i % maxR);
            items[id] = { ...it, rung, srs: { ...it.srs, due: duePast } };
          });
          return { items, daily: { ...s.daily, reviewsCleared: false } };
        });
      },
    }),
    {
      name: "lingua-v1",
      version: PERSIST_VERSION,
      // One-time, on rehydrate: replace any pre-FSRS srs with a fresh card,
      // preserving rung and all other progress (don't crash old v0.1 state).
      migrate: migrateState,
      partialize: (s) => ({
        items: s.items,
        languages: s.languages,
        streak: s.streak,
        stats: s.stats,
        daily: s.daily,
        devMode: s.devMode,
        settings: s.settings,
        profile: s.profile,
        lastModified: s.lastModified,
        // ui + auth (and the signIn*/signOut fns) are transient; not persisted.
      }),
    }
  )
);
