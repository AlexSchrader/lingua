import { create } from "zustand";
import { persist } from "zustand/middleware";
import { seedItems, LANGUAGES, UNITS, isLive } from "../data/index.js";
import { newCard, schedule, isDue, startOfTomorrow } from "./srs.js";
import { nextRung, isReviewable } from "./mastery.js";
import { migrateState, PERSIST_VERSION } from "./migrate.js";
import { matchesDevCode } from "./dev.js";
import { earnedMilestones, milestoneCatalog } from "../data/milestones.js";
import { CEFR_ORDER, cefrLevelReached, levelRank } from "./levels.js";
import { persistKey } from "./preview.js";
import { slimItems } from "./sync.js";

// Seed every item with a fresh FSRS card attached as its srs. Card attachment
// lives here (not in the data loader) per Brief 2.
function freshSeed() {
  const seed = seedItems();
  const out = {};
  for (const [id, it] of Object.entries(seed)) out[id] = { ...it, srs: newCard() };
  return out;
}

// Rebuild the FULL item deck (content from the current curriculum) from a persisted
// or cloud PROGRESS OVERLAY — the slim `{ id: { rung, srs } }` map that slimItems()
// writes. Untouched items come straight from the fresh seed. This is the read-side
// mirror of slimItems: storage holds only progress, the store always holds the full
// deck, so nothing downstream sees a slimmed item. Tolerates a legacy FULL-item
// overlay too (old blobs carried every field) — it just reads rung/srs and takes the
// latest content from the seed, exactly like seedOnce does.
export function reconstructItems(overlay = {}) {
  const seed = freshSeed();
  const out = {};
  for (const [id, fresh] of Object.entries(seed)) {
    const p = overlay?.[id];
    out[id] = p
      ? { ...fresh, rung: p.rung ?? 0, srs: p.srs ?? fresh.srs, passes: p.passes, passLog: p.passLog }
      : fresh;
  }
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

// True when a language has at least one authored unit. A "started" language with
// no content can't have been legitimately climbed — it's stale seeding.
// PLAYABLE content, not merely "a unit exists" — scaffolded languages carry the
// whole band template as locked stubs while a crew authors them, and a stub-only
// language must stay invisible to this migration (its "no content" signature is
// what identifies a stale pre-language-choice save). Shared with the UI's isLive
// so the picker and the migration can never disagree about what's real.
const langHasContent = isLive;

// Prune a profile's STARTED languages down to the ones actually being learned,
// and repoint activeLang if it landed on a pruned one. Pure (both predicates
// injected) so it's unit-testable. Returns the same profile when nothing changes.
//
// "Has content" alone is NOT sufficient, and relying on it was a latent bug: this
// migration exists to strip stale seeding from the old auto-cascade (ja→es→fr)
// that pre-dated user language choice, and it worked only because es/fr had no
// content. The moment a cascade language ships content (French, 2026-07-31) it
// survives the prune, so an old save silently gains it as a STARTED language —
// bypassing canAddLanguage entirely. So a language must also be the active one or
// show real progress. Trade-off: a language deliberately added but never touched
// is dropped and must be re-added (one tap, and canAddLanguage still allows it) —
// much cheaper than silently starting a language the learner never chose.
// The exact triple the retired ja→es→fr auto-cascade wrote into every profile
// before language selection existed. Matched in order, as one specific historical
// shape rather than as a set.
//
// ⚠️ This is NOT a collision-free signature and must not be described as one. A
// learner who genuinely started all three — in that order, which is the order the
// retired unlock chain encouraged — produces an identical array. For a save
// written BEFORE `languagesChosen` existed the two are indistinguishable, because
// the distinguishing fact was never recorded. So there is a real, bounded cost:
//
//   pre-flag save + exactly ["ja","es","fr"] + a language deliberately started
//   but sitting at zero rung≥1 progress and not currently active
//     → that language is dropped, and must be re-added (one tap; canAddLanguage
//       still allows it).
//
// That is the same shape as the regression the code-auditor blocked on
// 2026-07-31, knowingly re-accepted for one narrow input class, and pinned by a
// test below so it stays a decision rather than a surprise. The trade is against
// the opposite failure — silently ACQUIRING two unchosen languages, which
// bypasses canAddLanguage, puts them in the Ladder switcher, and merges them into
// one capped review queue. Losing a re-addable empty language is the cheaper
// error, but it is an error, not a construction-level guarantee.
//
// The exposed population only shrinks: everything that adds a language stamps the
// flag, and the branch below stamps it on the way out, so any given save is
// classified at most once, ever.
const LEGACY_CASCADE = ["ja", "es", "fr"];
const isLegacyCascadeSeeding = (langs) =>
  Array.isArray(langs) &&
  langs.length === LEGACY_CASCADE.length &&
  LEGACY_CASCADE.every((id, i) => langs[i] === id);

export function pruneStartedLanguages(profile, hasContent = langHasContent, hasProgress = () => true) {
  if (!profile || !Array.isArray(profile.languages) || !profile.languages.length) return profile;

  // Is this profile the retired auto-cascade seeding rather than a real choice?
  //
  // This used to be inferred from CONTENT — "a language with no units could never
  // have been chosen deliberately, so a content-less entry proves the save is
  // stale." That heuristic had a fuse on it: it could only work while some
  // cascade language was still unauthored. French shipping (2026-07-31) burned
  // half of it, and Spanish shipping (2026-08-04) burned the rest — with ja, es
  // and fr all live, `some(id => !hasContent(id))` is false for the very profile
  // it exists to catch, nothing is pruned, and the learner silently gains TWO
  // started languages they never picked. Found by the es block-1 crew when
  // authoring Spanish turned prune-languages.test.mjs red.
  //
  // So the signal is no longer derived, it is RECORDED. Two independent marks,
  // either of which settles it without consulting content:
  //   1. `languagesChosen` — stamped by startLanguage (the onboarding pick and
  //      the add-a-language flow both route through it). Any profile that has
  //      ever been through the picker carries it and is taken at face value.
  //   2. For saves written before that flag existed: the exact shape the retired
  //      ja→es→fr cascade seeded — see the caveat on LEGACY_CASCADE above, which
  //      is where the residual risk lives. Anything else pre-flag is taken at
  //      face value.
  // Neither mark consults content, so the STALENESS TEST cannot decay again as
  // the remaining languages ship. (Note the narrower claim: the `kept` filter
  // below still consults `hasContent` — see the early return.)

  // A recorded choice is final. Two consequences, both deliberate:
  //   - the legacy fingerprint is never consulted for a profile that has been
  //     through the picker, so its collision risk applies only to pre-flag saves
  //     and drains away over time;
  //   - a started language is never dropped because its CONTENT went away.
  //     `hasContent` is `isLive`, so a band pulled back to stubs — a crew
  //     reworking it, a release held — would otherwise silently delete itself out
  //     of every profile that had started it. That is a live risk right now: the
  //     Spanish tree is red combined, and holding `es` back is one plausible
  //     response. Content is evidence about the corpus, never about intent.
  if (profile.languagesChosen === true) return profile;

  const stale = isLegacyCascadeSeeding(profile.languages);
  const kept = profile.languages.filter(
    (id) => hasContent(id) && (!stale || id === profile.activeLang || hasProgress(id))
  );
  // Nothing to decide and nothing to drop — hand back the same object. This runs
  // on every boot (seedOnce), so identity matters.
  if (!stale && kept.length === profile.languages.length) return profile;
  const activeLang = kept.includes(profile.activeLang) ? profile.activeLang : (kept[0] ?? null);
  // Record the verdict, so a pre-flag save is classified exactly ONCE. Without
  // this the fingerprint re-fires on every boot and a learner who re-adds a
  // language it took would lose it again on the next reload — which is precisely
  // how the 2026-07-31 regression became erosive rather than one-off.
  return { ...profile, languages: kept, activeLang, languagesChosen: true };
}

// --- mastery passes ---------------------------------------------------------
// A pass is one CORRECT answer on one card kind. Mastery counts these; nothing else
// does. Two rules keep them honest:
//
//   ONLY CORRECT ANSWERS COUNT. A wrong answer has its own consequences (rung, FSRS)
//   and does not decrement — practice must be safe to attempt.
//
//   AT MOST FOUR A DAY PER ITEM. One scheduled review plus three practice runs. That
//   is Alex's cap and it is what stops a word being drilled to mastery in one sitting.
//   Tracked per item per day, so it survives a reload — an in-memory counter would
//   reset and hand out unlimited passes.
export const PASSES_PER_DAY = 4;

// Three practice runs a day, plus the one scheduled review, is Alex's cap. The runs
// counter is what the UI gates on; the per-item PASSES_PER_DAY above is the harder
// guarantee underneath it, so even an unbounded run cannot over-drill one word.
export const PRACTICE_RUNS_PER_DAY = 3;

function recordPass(item, kind, day) {
  if (!kind) return item;
  const log = item.passLog?.date === day ? item.passLog : { date: day, n: 0 };
  if (log.n >= PASSES_PER_DAY) return item; // capped for today
  return {
    ...item,
    passes: { ...(item.passes ?? {}), [kind]: (item.passes?.[kind] ?? 0) + 1 },
    passLog: { date: day, n: log.n + 1 },
  };
}

const XP_BY_GRADE = { again: 2, hard: 5, good: 10, easy: 15 };

// Cap on the "fix these" mistake list — most recent misses, older ones drop off.
const MISTAKES_CAP = 30;

// Anti-burnout bound: the most reviews a single daily session surfaces (oldest-due
// first). Miss a day or two and 40–60 cards can come due at once — the Anki
// death-spiral — so we serve REVIEW_CAP and let the rest return next session, no
// penalty. Shared by the Review runner (the session queue) and Today (the count it
// shows), so the learner never faces the full wall. A tuning knob, not structure.
//
// THE CAP IS PER-LANGUAGE; THE DAILY OBLIGATION IS NOT. (2026-08-14.) Those are two
// different jobs REVIEW_CAP used to do at once, and multi-language forces them apart:
//
//   - What you are SHOWN is per-language. dueItems() is scoped to the active
//     language, so a Japanese learner never sees French cards, and each language's
//     queue is bounded by REVIEW_CAP on its own, so no language competes with another
//     for slots and no screen shows a 60-card pile.
//   - What you OWE is global and once-a-day. `daily.reviewsCleared` is a single flag
//     for the whole profile: finish a review session in ANY language and the day's
//     review duty is met, so lessons unlock in EVERY language.
//   - WHICH language you reviewed is recorded separately (`daily.clearedLangs`), so
//     the UI can tell "capped today, come back tomorrow" apart from "never opened".
//     Without that third fact the closure signal is wrong for one of the two.
//
// That split is the anti-burnout guarantee under N languages. The wall is the
// OBLIGATION, not the availability — capping per language without this would give a
// three-language learner three separate 20-card duties before they could take any
// lesson, which is precisely the death-spiral REVIEW_CAP exists to prevent. Here,
// adding a language never adds a required card: it adds an optional queue you may
// visit.
//
// THE ACCEPTED COST, stated at full strength rather than its mildest form: a learner
// who always reviews Japanese can leave French due indefinitely — and, because the
// duty is global and any non-empty session discharges it, a learner with one French
// card due can clear that and unlock Japanese lessons over a 40-card Japanese
// backlog. Forcing either review would mean forcing a second wall, which is the
// worse failure, so this is deliberate. But do NOT describe it as "nothing is lost
// but time": a deck left long enough comes back at low retrievability, grades
// `again`, and `nextRung` drops a rung per lapse, so mastery genuinely decays. The
// honest claim is that the app never coerces the fix and never hides the debt — the
// queue is always reachable from Today for the active language, and two taps away
// (Ladder → switch) for any other. Cross-language debt is NOT surfaced anywhere yet;
// that gap is logged in BUILD-CHECKLIST.md, not solved here.
export const REVIEW_CAP = 20;

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

// Item ids restricted to one language, in registration order. `lang: null` means
// "every language" — the pre-scoping behaviour, kept for callers that don't scope.
// Items are stamped with `lang` at build time (src/data/index.js), so this needs no
// id-prefix parsing.
export function langScopedIds(items, lang = null) {
  const ids = Object.keys(items);
  return lang ? ids.filter((id) => items[id]?.lang === lang) : ids;
}

// The first language that actually has content, in catalog order. Derived, never a
// literal — the catalog is flat and alphabetical, so "first" carries no endorsement.
export const firstLiveLang = () => LANGUAGES.find((l) => isLive(l.id))?.id ?? LANGUAGES[0]?.id ?? null;

// The language everything on Today/Review is scoped to. `activeLang` can point at a
// language the learner is no longer started in (pruned save, cleared profile), so it
// is only honoured when it's actually in the started list — same fallback the screens
// apply, exported so the store and the screens can never disagree about which language
// the learner is in. Falls back to the first STARTED language, then to the first live
// one.
//
// It used to fall back to the literal "ja". With 23 catalog entries and no starter
// language that was not a safety net but a silent reassignment: every profile the
// function could not resolve became a Japanese learner, which is how a French learner
// was offered kanji milestones. A hardcoded id can only ever be right for one
// learner — derive it.
export function activeLangId(profile) {
  const started = profile?.languages?.length ? profile.languages : [];
  if (profile?.activeLang && started.includes(profile.activeLang)) return profile.activeLang;
  return started[0] ?? firstLiveLang();
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
      daily: { date: null, reviewsCleared: false, lessonDone: false, clearedLangs: [] },
      // "Fix these" — item ids missed (graded `again`) and not yet re-passed, most
      // recent last. A miss adds; a clean pass clears. Powers the mistake-review.
      mistakes: [],
      // Capability milestones the learner has REACHED — earned-once, never revoked
      // (forgetting a word later must never take a milestone back). Grows via
      // reconcileMilestones; persisted so it survives a lapse. See data/milestones.js.
      milestonesEarned: [],
      // Transient (never persisted): the most-recent newly-earned milestone, shown
      // as a one-time toast then cleared.
      milestoneToast: null,
      devMode: false,
      // User preferences. `sfx` = synthesized answer chimes/clicks; `autoplayAudio`
      // = auto-play the pronunciation clip when a Teach card appears (the speaker
      // button always plays regardless). Both default on; persisted. Old persisted
      // state without this key keeps these defaults via persist's shallow merge.
      settings: { sfx: true, autoplayAudio: true, showRomaji: true, furigana: true, theme: "system", textSize: "default", reduceMotion: false, noSpeedPressure: false },
      ui: {},

      // Cloud sync (Supabase). `lastModified` is persisted and drives the
      // push-vs-pull decision on sign-in (src/store/sync.js). `auth` is transient
      // (never persisted). The signIn*/signOut actions are no-ops until
      // cloudSync.initCloudSync wires the real Supabase calls in — that keeps the
      // SDK out of the main bundle and out of the store module.
      lastModified: 0,
      // Receipt for a DELIBERATE wipe: the moment the learner tapped "Reset
      // everything". Synced, because the sync guards (sync.js) cannot otherwise
      // tell an intentional empty state from a torn one — and used to resolve that
      // in the cloud's favour, which silently undid every reset. 0 = never reset.
      resetAt: 0,
      // Sync confirmation, both ephemeral (never persisted, never synced):
      //   pendingSyncLabel — a big change is in flight and the learner is owed an
      //                      answer about it ("Progress reset", "Lesson complete").
      //   syncNotice       — the answer to show: { text, tone: "ok" | "warn" }.
      pendingSyncLabel: null,
      syncNotice: null,
      // `ready` flips true once Supabase resolves the initial session (or when
      // unconfigured), so the auth gate can render without a flash. The auth
      // actions are no-ops until cloudSync.initCloudSync wires the real Supabase
      // calls in — keeping the SDK out of the main bundle and the store module.
      // `initialSyncDone` flips true once the FIRST post-sign-in cloud pull resolves.
      // The onboarding gate waits on THIS, not on `status: "syncing"` — because a
      // debounced upload (e.g. the one that fires the instant onboarding writes a
      // synced slice) also sets status "syncing", and gating onboarding on that
      // unmounts the flow mid-step. See App.jsx's onboarding gate.
      auth: { configured: false, ready: false, user: null, status: "idle", error: null, recovery: false, initialSyncDone: false },
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
          // Record that this list is a real choice, so pruneStartedLanguages
          // never has to infer it. Everything that adds a language routes through
          // here (the onboarding pick and the add-a-language flow), so from this
          // point on the legacy-cascade fingerprint is only ever consulted for
          // saves written before this flag existed.
          return { profile: { ...s.profile, languages, activeLang: id, languagesChosen: true } };
        }),

      // Switch focus among languages already started.
      setActiveLang: (id) =>
        set((s) => (s.profile.languages.includes(id) ? { profile: { ...s.profile, activeLang: id } } : s)),

      // Dev/testing: re-show the onboarding flow (language pick + profile) without
      // touching any progress — just flips the flag so the gate runs it again.
      replayOnboarding: () => set((s) => ({ profile: { ...s.profile, onboarded: false } })),

      // Daily-reminder time ("HH:MM", or null = off). Lives on profile (persisted +
      // synced); the notification scheduling itself is a client-side side effect in
      // src/lib/reminders.js, wired from Settings + App boot.
      setReminderTime: (time) => set((s) => ({ profile: { ...s.profile, reminderTime: time || null } })),

      setSetting: (key, value) =>
        set((s) => ({ settings: { ...s.settings, [key]: value } })),

      setAuth: (partial) => set((s) => ({ auth: { ...s.auth, ...partial } })),
      bumpModified: () => set({ lastModified: Date.now() }),

      // "This change is big enough that the learner should be told when it is
      // actually safe." Call it from the action itself, not the screen, so every
      // route into the change is covered. With no cloud account there is nothing to
      // wait for, so answer immediately and honestly rather than promising a sync
      // that will never happen.
      markImportantChange: (label) => {
        const { auth } = get();
        if (!auth?.user) {
          set({ pendingSyncLabel: null, syncNotice: { text: `${label} — saved on this device`, tone: "ok", at: Date.now() } });
          return;
        }
        set({ pendingSyncLabel: label, syncNotice: null });
      },

      // Called by the sync layer when an upload settles. Only speaks if a big
      // change was actually waiting on it — a routine debounced upload stays silent.
      resolveSyncNotice: (ok, detail) => {
        const label = get().pendingSyncLabel;
        if (!label) return;
        set({
          pendingSyncLabel: ok ? null : label, // a failure stays pending: the retry can still succeed
          syncNotice: ok
            ? { text: `${label} — saved to your account`, tone: "ok", at: Date.now() }
            : { text: detail ? `${label} — not saved yet (${detail})` : `${label} — not saved yet, still trying`, tone: "warn", at: Date.now() },
        });
      },

      dismissSyncNotice: () => set({ syncNotice: null }),

      // Apply a cloud progress blob. MERGES over the current item set so items
      // added in a newer app version (absent from an older cloud blob) still
      // exist at rung 0 — a pull never makes a unit disappear. Cloud item ids no
      // longer in the curriculum are simply ignored.
      hydrateFromCloud: (blob) => {
        set((s) => {
          // A blob carrying a RESET newer than anything local is a wipe, not an
          // overlay: start from a fresh seed so the reset actually propagates. The
          // normal path merges onto the existing deck (keeping current curriculum
          // content), which would otherwise leave every touched item's rung in place
          // and quietly ignore the reset another device performed.
          const wiped = (Number(blob?.resetAt) || 0) > (Number(s.resetAt) || 0);
          const base = wiped ? freshSeed() : (Object.keys(s.items).length ? s.items : freshSeed());
          const items = { ...base };
          // The cloud blob carries only the progress overlay ({ rung, srs }); apply
          // it onto the content-bearing base rather than replacing the item, so the
          // learner keeps the latest curriculum content. Backward-compatible with a
          // legacy full-item blob (rung/srs are still read; extra fields ignored).
          for (const [id, it] of Object.entries(blob.items ?? {})) {
            if (items[id]) items[id] = { ...items[id], rung: it.rung ?? items[id].rung, srs: it.srs ?? items[id].srs };
          }
          const next = { items, lastModified: Date.now(), resetAt: Number(blob?.resetAt) || s.resetAt || 0 };
          for (const k of ["languages", "streak", "stats", "daily", "devMode", "settings", "profile", "milestonesEarned"]) {
            if (blob[k] !== undefined) next[k] = blob[k];
          }
          // `profile` is replaced wholesale, so a blob written by an older build
          // (or an un-updated tab on another device) carries no `languagesChosen`
          // and would re-expose this profile to the legacy-cascade fingerprint on
          // the next boot. The flag is monotonic — a choice, once made, cannot be
          // un-made — so carry it across a pull rather than letting an old blob
          // erase it. Without this, sync is a path back into the bug.
          if (next.profile && s.profile?.languagesChosen === true && next.profile.languagesChosen !== true) {
            next.profile = { ...next.profile, languagesChosen: true };
          }
          return next;
        });
        // Backfill silently — a sync must never fire a flood of milestone toasts.
        get().reconcileMilestones({ toast: false });
      },

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
            items[id] = p
              ? { ...fresh, rung: p.rung ?? 0, srs: p.srs ?? fresh.srs, passes: p.passes, passLog: p.passLog }
              : fresh;
          }
          let daily = s.daily;
          if (daily.date !== todayISO()) {
            daily = { date: todayISO(), reviewsCleared: false, lessonDone: false, clearedLangs: [] };
          }
          // Backfill any language progress entries added since last persist.
          const languages = { ...initialLanguages(), ...s.languages };
          // Migration: prune STARTED languages that have no authored content —
          // stale seeding from the old auto-cascade (ja→es→fr) that pre-dated
          // user language choice. (Repoints activeLang if it was pruned.)
          let profile = pruneStartedLanguages(s.profile, langHasContent, (id) =>
            Object.values(items).some((it) => it.lang === id && (it.rung ?? 0) >= 1)
          );
          // Migration: a learner from before language-selection existed has no
          // started list. Their language is DERIVED from where their progress
          // actually is — this used to assign ["ja"] flat, which was true only
          // because Japanese was the only language that had shipped. Falls back to
          // the first live language when there is no progress to read.
          if (!profile.languages || profile.languages.length === 0) {
            const progressed = [
              ...new Set(
                Object.values(items)
                  .filter((it) => (it.rung ?? 0) >= 1)
                  .map((it) => it.lang)
              ),
            ].filter(Boolean);
            if (profile.onboarded || progressed.length) {
              // A save with real progress in several languages keeps all of them —
              // canAddLanguage governs ADDING one, and silently deleting work the
              // learner already did would be the worse error.
              const langs = progressed.length ? progressed : [firstLiveLang()].filter(Boolean);
              if (langs.length) profile = { ...profile, languages: langs, activeLang: langs[0] };
            }
          }
          return { items, daily, languages, profile };
        });
        // Backfill the earned-milestone set from existing progress on boot — SILENT,
        // so a returning learner isn't greeted by a wall of milestone toasts.
        get().reconcileMilestones({ toast: false });
      },

      // Selector: items whose FSRS card is due AND that have climbed at least to
      // RECOGNIZED. Fresh items (rung 0) are not "due" — they enter via a lesson.
      //
      // SCOPED TO ONE LANGUAGE. Default is the active language: a learner studying
      // Japanese must never be served French cards, and before this was scoped every
      // language's debt landed in one shared queue under one shared cap, so two
      // languages blocked lessons in both and starved each other for slots. Pass an
      // explicit `lang` to ask about another language, or `null` for every language
      // (what cross-language callers like stats want) — `null` is the old behaviour
      // and has to be asked for, so a new caller can't get it by forgetting.
      dueItems: (lang = undefined) => {
        const scope = lang === undefined ? activeLangId(get().profile) : lang;
        return Object.values(get().items).filter(
          (it) =>
            (scope === null || it.lang === scope) &&
            isReviewable(it) &&
            it.srs &&
            isDue(it.srs)
        );
      },

      // Derived: reviews are locked (blocking a new lesson) while THIS language has
      // review debt and the day's review duty hasn't been met.
      //
      // The debt is per-language; the duty is not. `reviewsCleared` is one flag for
      // the whole profile, so finishing a session in any language unlocks lessons in
      // all of them — see the REVIEW_CAP note for why the obligation stays global
      // even though the queue doesn't.
      reviewsLocked: (lang = undefined) => {
        const { daily } = get();
        return get().dueItems(lang).length > 0 && !daily.reviewsCleared;
      },

      // Did THIS language have a review session today? Distinct from
      // `daily.reviewsCleared`, which answers "was the day's duty met anywhere".
      // Screens use this for closure signals ("Cleared", and whether to offer the
      // queue again): a language capped today has been honoured and must go quiet,
      // while a language merely unlocked by another language's session has not.
      languageCleared: (lang = undefined) => {
        const { daily, profile } = get();
        const scope = lang === undefined ? activeLangId(profile) : lang;
        return (daily.clearedLangs ?? []).includes(scope);
      },

      // Grade a single item: reschedule via SRS, advance/hold/drop its rung,
      // and award XP. Persisted.
      // `kind` is the card that was shown — the runner passes it so mastery can
      // credit the right skill. Optional so older callers keep working.
      gradeItem: (id, grade, kind = null) => {
        set((s) => {
          let item = s.items[id];
          if (!item) return s;
          if (grade === "good" || grade === "easy") item = recordPass(item, kind, todayISO());
          const srs = schedule(item.srs, grade);
          const rung = nextRung(item, grade);
          const gain = XP_BY_GRADE[grade] ?? 0;

          const items = { ...s.items, [id]: { ...item, srs, rung } };
          const stats = { ...s.stats, xpTotal: s.stats.xpTotal + gain };
          const lang = s.languages[item.lang];
          const languages = lang
            ? { ...s.languages, [item.lang]: { ...lang, xp: lang.xp + gain } }
            : s.languages;
          // Mistake list: a miss adds the item (moved to the front of "most recent");
          // a clean pass clears it. `hard` leaves it as-is (still shaky).
          let mistakes = s.mistakes ?? [];
          if (grade === "again") {
            mistakes = [...mistakes.filter((m) => m !== id), id].slice(-MISTAKES_CAP);
          } else if (grade === "good" || grade === "easy") {
            if (mistakes.includes(id)) mistakes = mistakes.filter((m) => m !== id);
          }
          return { items, stats, languages, mistakes };
        });
        get().reconcileMilestones({ toast: true });
      },

      // Reconcile the earned-milestone set against current mastery. Unions any newly
      // satisfied milestones (earned-once, never revoked). With { toast:true } (a
      // grade just happened) the newest unlock is surfaced as a one-time toast; on
      // boot/sync we backfill SILENTLY so existing progress never floods the screen.
      reconcileMilestones: ({ toast = false } = {}) => {
        set((s) => {
          const earned = earnedMilestones(s.items);
          const prev = new Set(s.milestonesEarned ?? []);
          const fresh = earned.filter((id) => !prev.has(id));
          if (fresh.length === 0) return s;
          const next = { milestonesEarned: [...(s.milestonesEarned ?? []), ...fresh] };
          if (toast) {
            const m = milestoneCatalog().find((x) => x.id === fresh[fresh.length - 1]);
            if (m) next.milestoneToast = { id: m.id, label: m.label };
          }
          return next;
        });
      },
      dismissMilestoneToast: () => set({ milestoneToast: null }),

      // A review session finished. Two records, because one boolean cannot answer
      // both questions the UI asks:
      //   - `reviewsCleared` (global) — the day's review DUTY is met, so lessons
      //     unlock in every language. One session a day, one wall. See REVIEW_CAP.
      //   - `clearedLangs` (per-language) — WHICH language was reviewed today, so a
      //     screen can tell "you capped this language today, come back tomorrow"
      //     apart from "you have never opened this language". Those are opposite
      //     situations and the global flag alone showed them identically: a
      //     Japanese-only learner who cleared 20 of a 60-card backlog was told
      //     "20 due" with an invitation back, which is precisely the wall the cap
      //     exists to hide.
      // `clearedLangs` is reset with the rest of `daily` on a date change and reads
      // as absent (falsy) on older saves — additive, so no persist bump.
      completeReviews: (lang = undefined) => {
        const scope = lang === undefined ? activeLangId(get().profile) : lang;
        set((s) => {
          const prev = s.daily.clearedLangs ?? [];
          return {
            daily: {
              ...s.daily,
              date: todayISO(),
              reviewsCleared: true,
              clearedLangs: scope && !prev.includes(scope) ? [...prev, scope] : prev,
            },
          };
        });
        get().markImportantChange("Reviews cleared");
      },

      // Graduate a freshly-learned item out of the in-session learning steps into
      // FSRS spaced review (Brief A.1). Fires exactly once per item: first real
      // FSRS schedule, rung → RECOGNIZED, XP once. `grade` reflects how the
      // learning steps went (`good` clean, `hard` if any retry).
      graduateItem: (id, grade) => {
        set((s) => {
          const item = s.items[id];
          if (!item || (item.rung ?? 0) >= 1) return s; // already graduated
          const scheduled = schedule(item.srs, grade);
          // First review is never the SAME day — floor to tomorrow so a freshly
          // learned item is spaced, not massed. Without this a `hard` graduation
          // (short FSRS interval) could resurface minutes later, defeating spacing
          // (startOfTomorrow was exported for exactly this but never wired). [R24]
          const due = new Date(scheduled.due) < startOfTomorrow() ? startOfTomorrow() : scheduled.due;
          const srs = { ...scheduled, due };
          const gain = XP_BY_GRADE[grade] ?? 0;
          const items = { ...s.items, [id]: { ...item, srs, rung: 1 } };
          const stats = { ...s.stats, xpTotal: s.stats.xpTotal + gain };
          const lang = s.languages[item.lang];
          const languages = lang
            ? { ...s.languages, [item.lang]: { ...lang, xp: lang.xp + gain } }
            : s.languages;
          return { items, stats, languages };
        });
        get().reconcileMilestones({ toast: true });
      },

      // Mark the day's lesson done. Graduation of new items is now per-item via
      // graduateItem (Brief A.1) — this no longer blanket-graduates anything.
      completeLesson: () => {
        set((s) => ({ daily: { ...s.daily, date: todayISO(), lessonDone: true } }));
        get().checkCascade();
        get().markImportantChange("Lesson complete");
      },

      // Daily goal: reviews are mandatory; lesson is optional bonus.
      // Streak triggers when reviews are cleared, OR when there are no reviews
      // due today and the lesson was done (new learner, early days).
      rollDailyGoal: () => {
        const { daily } = get();
        // EXPLICITLY CROSS-LANGUAGE. The daily goal is the obligation half of the
        // review design, and the obligation is global (see REVIEW_CAP) — so "was
        // there nothing to review today?" has to ask about the whole profile, not
        // just the language open right now. Scoping this to the active language
        // would hand out the streak for a French lesson while 30 Japanese cards sat
        // overdue. `null` is the deliberate opt-in to every language; it is the one
        // caller in the store that wants the unscoped answer.
        const nothingDue = get().dueItems(null).length === 0;
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
            if (!st) continue;
            // Advance to the highest CEFR band the learner has fully completed —
            // pre-A1 → A1 → A2 → B1 → B2 as content is finished. Promote ONLY (never
            // demote): shipping new, not-yet-done content mustn't drop a level the
            // learner already earned.
            const reached = cefrLevelReached(langDef.id, s.items);
            if (levelRank(reached) > levelRank(st.level)) {
              newLangs[langDef.id] = { ...st, level: reached };
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
      // PRACTICE. Counts toward mastery and touches NOTHING else — no srs, no rung,
      // no daily goal, no streak. That is the load-bearing property: a word drilled
      // four times a day would otherwise have its FSRS interval collapse, destroying
      // the retention model that sits beside this one. The 4/day cap is shared with
      // the scheduled review, so practice can supply at most three of them.
      // How many practice runs are left today. Resets by date, persisted with the
      // rest of `daily`, so it survives a reload — the cap is meaningless otherwise.
      practiceRunsLeft: () => {
        const d = get().daily ?? {};
        const used = d.date === todayISO() ? (d.practiceRuns ?? 0) : 0;
        return Math.max(0, PRACTICE_RUNS_PER_DAY - used);
      },

      // Spend one. Called when a practice run STARTS, not when it finishes: a run
      // abandoned halfway still consumed the attempt, and counting on completion would
      // let a learner restart forever.
      startPracticeRun: () => {
        set((s) => {
          const d = s.daily ?? {};
          const used = d.date === todayISO() ? (d.practiceRuns ?? 0) : 0;
          if (used >= PRACTICE_RUNS_PER_DAY) return s;
          return { daily: { ...d, date: todayISO(), practiceRuns: used + 1 } };
        });
      },

      practiceItem: (id, kind, grade) => {
        if (grade !== "good" && grade !== "easy") return;
        set((s) => {
          const item = s.items[id];
          if (!item) return s;
          const next = recordPass(item, kind, todayISO());
          if (next === item) return s; // capped today — nothing to write
          return { items: { ...s.items, [id]: next }, lastModified: Date.now() };
        });
      },

      resetAll: () => {
        // resetAt + lastModified are what make this survive a reopen. Without the
        // receipt the sync guards read the wiped device as a fresh/torn one and pull
        // the old progress straight back down (see sync.js isDeliberateReset).
        set({
          resetAt: Date.now(),
          lastModified: Date.now(),
          items: freshSeed(),
          languages: initialLanguages(),
          streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
          stats: { xpTotal: 0 },
          daily: { date: todayISO(), reviewsCleared: false, lessonDone: false, clearedLangs: [] },
          mistakes: [],
          milestonesEarned: [],
          milestoneToast: null,
          ui: {},
        });
        get().markImportantChange("Progress reset");
      },

      // Dev-only playtest helper (wired behind import.meta.env.DEV in the UI):
      // make every item due now across a spread of rungs so a single session
      // shows all the active-recall card types. Kana cap at RECALLED (no awkward
      // typed-kana production); vocab spread up to PRODUCED (Build).
      devSeedReviews: (lang = null) => {
        set((s) => {
          const items = { ...s.items };
          const duePast = new Date(Date.now() - 1000);
          langScopedIds(items, lang).forEach((id, i) => {
            const it = items[id];
            const maxR = it.type === "kana" ? 2 : 3;
            const rung = 1 + (i % maxR);
            items[id] = { ...it, rung, srs: { ...it.srs, due: duePast } };
          });
          return { items, daily: { ...s.daily, reviewsCleared: false } };
        });
      },

      // --- Dev progress seeders (touch REAL state; labelled in the panel; Reset
      // restores). For eyeballing progress-dependent screens — Word bank, Ladder,
      // Stats, the mistake-review — without grinding.
      //
      // Every seeder takes the panel's selected `lang`. Without it they walked
      // `Object.keys(items)` in registration order — which is ja-first — so
      // "Learn 20" on the French panel seeded twenty Japanese items. These write
      // REAL progress, unlike the rest of the panel, so the wrong language here
      // is wrong deck state, not a wrong preview. `lang: null` keeps the old
      // all-languages behaviour for any caller that doesn't scope.
      // Mark the first `n` not-yet-learned items as RECOGNIZED (rung 1).
      devLearnItems: (n = 20, lang = null) => {
        set((s) => {
          const items = { ...s.items };
          let c = 0;
          for (const id of langScopedIds(items, lang)) {
            if (c >= n) break;
            if ((items[id].rung ?? 0) < 1) { items[id] = { ...items[id], rung: 1 }; c++; }
          }
          return { items };
        });
        get().reconcileMilestones({ toast: true });
      },
      // Push the first `n` items to MASTERED (rung 5 + stability past MASTERY_FULL_DAYS).
      devMasterItems: (n = 10, lang = null) => {
        set((s) => {
          const items = { ...s.items };
          let c = 0;
          for (const id of langScopedIds(items, lang)) {
            if (c >= n) break;
            items[id] = { ...items[id], rung: 5, srs: { ...items[id].srs, stability: 60 } };
            c++;
          }
          return { items };
        });
        get().reconcileMilestones({ toast: true });
      },
      // Add `n` items to the mistake list (learning them first so they're reviewable).
      devSeedMistakes: (n = 5, lang = null) => {
        set((s) => {
          const items = { ...s.items };
          const ids = langScopedIds(items, lang).slice(0, n);
          for (const id of ids) if ((items[id].rung ?? 0) < 1) items[id] = { ...items[id], rung: 1 };
          const mistakes = [...new Set([...(s.mistakes ?? []), ...ids])].slice(-30);
          return { items, mistakes };
        });
      },
    }),
    {
      // Bound ONCE, here, at store creation — which is exactly what makes Preview
      // Mode safe. Isolation by storage key rather than by a flag every writer has
      // to remember means no action can leak preview progress into the real deck.
      // See src/store/preview.js.
      name: persistKey(),
      version: PERSIST_VERSION,
      // One-time, on rehydrate: replace any pre-FSRS srs with a fresh card,
      // preserving rung and all other progress (don't crash old v0.1 state).
      migrate: migrateState,
      // On rehydrate, rebuild the full item deck from the slim progress overlay we
      // persist (see partialize). Runs on EVERY load (unlike migrate), so the store
      // holds full items from the very first render — nothing ever sees a slimmed
      // item. Mirrors Zustand's default shallow merge, then overrides items.
      merge: (persisted, current) => {
        const p = persisted ?? {};
        return { ...current, ...p, items: reconstructItems(p.items) };
      },
      partialize: (s) => ({
        // ONLY the progress overlay (rung + srs of touched items) is written — not
        // the full 5,500+-item deck with all its content. That deck was ~MBs and
        // overran mobile Safari's ~5MB localStorage quota, crashing on boot
        // (QuotaExceededError in seedOnce). reconstructItems (via `merge`) rebuilds
        // the full deck from the curriculum seed on load.
        items: slimItems(s.items),
        languages: s.languages,
        streak: s.streak,
        stats: s.stats,
        daily: s.daily,
        mistakes: s.mistakes,
        milestonesEarned: s.milestonesEarned,
        devMode: s.devMode,
        settings: s.settings,
        profile: s.profile,
        lastModified: s.lastModified,
        resetAt: s.resetAt,
        // ui + auth (and the signIn*/signOut fns) are transient; not persisted.
      }),
    }
  )
);
