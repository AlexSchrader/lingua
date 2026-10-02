// Capability milestones — honest structural progress, NOT an engagement scoreboard.
// See BUILD-BRIEF-milestones.md. The one rule this whole file hangs on:
//
//   A milestone rewards CAPABILITY ("can read all hiragana", "100 words mastered"),
//   never ACTIVITY (streaks, XP, cards-answered, login days).
//
// Everything here is a PURE derivation from mastery state — no event logging, no
// per-lesson branching. `earnedMilestones(items)` is a snapshot of what's satisfied
// right now; "earned once, never revoked" is the STORE's job (union the snapshot
// into a persisted earned-set), so this selector may legitimately report a
// previously-earned "all X" milestone as unsatisfied once new content ships. The
// engine reads this catalog generically; adding a milestone is one entry.

import { UNITS } from "./index.js";
import { langName } from "./languages.js";
import { isMastered, isReviewable } from "../store/mastery.js";

const CEFR_ORDER = { A1: 0, A2: 1, B1: 2, B2: 3 };

// Script classification by the glyph itself (Unicode block), so it needs no extra
// content field. A base kana is a single hiragana/katakana code unit; yōon (きゃ …)
// are two code units and are counted as their own family.
const HIRAGANA = /^[぀-ゟ]$/;
const KATAKANA = /^[゠-ヿ]$/;
const isHiraBase = (f = "") => f.length === 1 && HIRAGANA.test(f);
const isKataBase = (f = "") => f.length === 1 && KATAKANA.test(f);
const isYoon = (f = "") => f.length === 2; // 2-glyph kana (both hira & kata yōon)

// Flatten the live curriculum to a def list once (pure over static UNITS).
let _defs = null;
function curriculumDefs() {
  if (_defs) return _defs;
  const out = [];
  for (const u of UNITS)
    for (const l of u.lessons)
      if (Array.isArray(l.items))
        for (const d of l.items) out.push({ ...d, lang: u.lang, cefr: l.cefr });
  _defs = out;
  return out;
}

// The distinct CEFR bands present in a def list, low→high. A "{band} complete"
// milestone is generated per band so A2 etc. light up automatically when their
// units go live — no hardcoded level list.
function cefrBands(defs) {
  const seen = new Set();
  for (const d of defs) if (d.cefr) seen.add(d.cefr);
  return [...seen].sort((a, b) => (CEFR_ORDER[a] ?? 99) - (CEFR_ORDER[b] ?? 99));
}

// State lookups over the live items map (id → { rung, srs, … }).
const canRead = (items, id) => isReviewable(items?.[id] ?? {}); // rung ≥ 1 (RECOGNIZED)
const mastered = (items, id) => isMastered(items?.[id] ?? {});

const countRead = (items, defs) => defs.filter((d) => canRead(items, d.id)).length;
const countMastered = (items, defs) => defs.filter((d) => mastered(items, d.id)).length;

// A milestone is defined by a `progress(items) → { have, need }`; it's earned when
// have ≥ need. `label` is the capability statement shown on unlock; `family` groups
// the display; `blurb` is the gentle next-goal noun ("words mastered"). `image` is a
// per-milestone badge (public/milestones/<id>.png) — the celebration banner hides it
// gracefully until the asset exists, so this convention is data-ready, not required.
const badgeFor = (id) => `/milestones/${id}.png`;
// `lang` is the language a milestone belongs to, or null for the deliberately
// cross-language ones (word counts — "100 words mastered" is an honest capability
// whatever the language). It exists so the DISPLAY can be scoped: a French-only
// learner should never be shown "You can read all of hiragana" or "You can read 50
// kanji" greyed out forever. Awarding is never filtered — see the note on
// milestonesForLangs.
function threshold({ id, family, label, blurb, need, count, lang = null }) {
  return { id, family, label, blurb, lang, image: badgeFor(id), progress: (items) => ({ have: count(items), need }) };
}
function completeAll({ id, family, label, blurb, defs, lang = null }) {
  return { id, family, label, blurb, lang, image: badgeFor(id), progress: (items) => ({ have: countRead(items, defs), need: defs.length }) };
}

// The single language a def list belongs to, or null if it spans several.
const langOf = (defs) => {
  const langs = new Set(defs.map((d) => d.lang));
  return langs.size === 1 ? [...langs][0] : null;
};

// Build the catalog from the live curriculum. A function (not a bare const) so it
// re-derives if UNITS ever changes under test; memoized for the common case.
let _catalog = null;
export function milestoneCatalog() {
  if (_catalog) return _catalog;
  const defs = curriculumDefs();
  const hira = defs.filter((d) => d.type === "kana" && isHiraBase(d.front));
  const kata = defs.filter((d) => d.type === "kana" && isKataBase(d.front));
  const yoon = defs.filter((d) => d.type === "kana" && isYoon(d.front));
  const kanji = defs.filter((d) => d.type === "kanji");
  const vocab = defs.filter((d) => d.type === "vocab");

  const list = [];

  // --- Script: can you READ the writing system (recognition) ---
  // Script and kanji milestones are inherently per-language — the filters above only
  // ever match Japanese items today, and a Hangul or Cyrillic language would produce
  // its own. Tagged from the defs rather than hardcoded "ja" so that stays true.
  if (hira.length) list.push(completeAll({ id: "script-hiragana", family: "script", label: "You can read all of hiragana", blurb: "hiragana read", defs: hira, lang: langOf(hira) }));
  if (kata.length) list.push(completeAll({ id: "script-katakana", family: "script", label: "You can read all of katakana", blurb: "katakana read", defs: kata, lang: langOf(kata) }));
  if (yoon.length) list.push(completeAll({ id: "script-yoon", family: "script", label: "You've got the small combined kana (yōon)", blurb: "yōon read", defs: yoon, lang: langOf(yoon) }));

  // --- Kanji: read your first, then the whole live set ---
  if (kanji.length) {
    const kanjiLang = langOf(kanji);
    list.push(threshold({ id: "kanji-first", family: "kanji", label: "You learned your first kanji", blurb: "kanji read", need: 1, count: (i) => countRead(i, kanji), lang: kanjiLang }));
    for (const n of [25, 50, 100, 150, 200]) if (kanji.length >= n)
      list.push(threshold({ id: `kanji-${n}`, family: "kanji", label: `You can read ${n} kanji`, blurb: "kanji read", need: n, count: (i) => countRead(i, kanji), lang: kanjiLang }));
    list.push(completeAll({ id: "kanji-all", family: "kanji", label: "You can read every kanji so far", blurb: "kanji read", defs: kanji, lang: kanjiLang }));
  }

  // --- Vocab breadth: words you can READ (recognition) — the earlier, faster wins ---
  list.push(threshold({ id: "read-first", family: "vocab", label: "You learned your first word", blurb: "words learned", need: 1, count: (i) => countRead(i, vocab) }));
  for (const n of [50, 100, 250, 500, 1000]) if (vocab.length >= n)
    list.push(threshold({ id: `read-${n}`, family: "vocab", label: `${n} words learned`, blurb: "words learned", need: n, count: (i) => countRead(i, vocab) }));

  // --- Vocab depth: words carried all the way to MASTERED (retention, not reps) ---
  list.push(threshold({ id: "vocab-first", family: "vocab", label: "You mastered your first word", blurb: "words mastered", need: 1, count: (i) => countMastered(i, vocab) }));
  for (const n of [10, 50, 100, 250, 500]) if (vocab.length >= n)
    list.push(threshold({ id: `vocab-${n}`, family: "vocab", label: `${n} words mastered`, blurb: "words mastered", need: n, count: (i) => countMastered(i, vocab) }));

  // --- Level: a whole CEFR band recognized (cumulative, like the app's own gate),
  // PER LANGUAGE — a new language's units shipping must never move an existing
  // learner's "A1 complete" goalposts (registering fr once inflated ja's A1
  // denominator 1252→1437 and made the milestone unearnable without French).
  // The FIRST language (ja) keeps the original un-suffixed ids ("level-A1") so
  // persisted earned ids survive; every later language gets "level-A1-fr" style
  // ids. NOTE the deliberate contrast: the vocab read-N/vocab-N counts above stay
  // cross-language on purpose — "100 words mastered" is an honest capability
  // count whatever the language — while "level complete" is inherently per-track.
  const LEGACY_LEVEL_LANG = "ja";
  for (const lang of [...new Set(defs.map((d) => d.lang))]) {
    const langDefs = defs.filter((d) => d.lang === lang);
    for (const band of cefrBands(langDefs)) {
      const bandDefs = langDefs.filter((d) => (CEFR_ORDER[d.cefr] ?? 99) <= (CEFR_ORDER[band] ?? 99));
      if (bandDefs.length)
        list.push(
          completeAll({
            id: lang === LEGACY_LEVEL_LANG ? `level-${band}` : `level-${band}-${lang}`,
            family: "level",
            label: `${langName(lang)} ${band} complete`,
            blurb: `${band} items`,
            defs: bandDefs,
            lang,
          })
        );
    }
  }

  _catalog = list;
  return list;
}

// The catalog scoped to the languages a learner has actually STARTED, plus every
// cross-language milestone (`lang: null`). This is a DISPLAY filter only.
//
// Without it the Achievements screen listed the entire catalog, so a French-only
// learner scrolled past "You can read all of hiragana", "You can read 200 kanji" and
// "Japanese A2 complete" — permanently locked, for a language they never chose — and
// the "X of Y unlocked" counter measured them against it. That reads as "this app is
// really for someone else", which is exactly wrong now that more than one language
// ships.
//
// Awarding (earnedMilestones) is deliberately NOT filtered: a milestone is earned
// from the items you've actually done, and an earned id must never be revoked
// because the display scope changed. Passing an empty/missing list means "no scoping"
// — the whole catalog — so a caller that doesn't know the learner's languages
// degrades to the old behaviour instead of silently showing nothing.
export function milestonesForLangs(langs) {
  const catalog = milestoneCatalog();
  if (!Array.isArray(langs) || langs.length === 0) return catalog;
  const set = new Set(langs);
  return catalog.filter((m) => m.lang === null || set.has(m.lang));
}

// The set of milestone ids currently satisfied by the given items map. Pure.
export function earnedMilestones(items) {
  return milestoneCatalog()
    .filter((m) => {
      const { have, need } = m.progress(items);
      return need > 0 && have >= need;
    })
    .map((m) => m.id);
}

// The single next-reachable milestone — the gentle goal shown on the home/Stats
// screen ("3 more words to 100 mastered"). Among the unearned, pick the one CLOSEST
// to completion by remaining count, so the suggested goal is always the nearest win.
// Returns { id, label, blurb, have, need, remaining } or null when all are earned.
// `langs` scopes the suggestion to what the learner is actually studying — otherwise
// the gentle next goal offered to a French learner could be "1 more to your first
// kanji", which they can never reach.
export function nextMilestone(items, langs) {
  let best = null;
  for (const m of milestonesForLangs(langs)) {
    const { have, need } = m.progress(items);
    if (need <= 0 || have >= need) continue;
    const remaining = need - have;
    if (!best || remaining < best.remaining)
      best = { id: m.id, label: m.label, blurb: m.blurb, have, need, remaining };
  }
  return best;
}

// Resolve a persisted set of earned ids to their catalog entries (label + family),
// in catalog order. Used by the display so "earned once, never revoked" reads from
// the stored set — a milestone stays shown even if a later lapse would un-derive it.
export function milestonesFromIds(ids = []) {
  const set = new Set(ids);
  return milestoneCatalog()
    .filter((m) => set.has(m.id))
    .map((m) => ({ id: m.id, label: m.label, family: m.family, image: m.image }));
}

// Convenience for the display: earned + next in one pass, each with progress.
export function milestoneSummary(items) {
  const earnedSet = new Set(earnedMilestones(items));
  const earned = milestoneCatalog()
    .filter((m) => earnedSet.has(m.id))
    .map((m) => ({ id: m.id, label: m.label, family: m.family, image: m.image }));
  return { earned, next: nextMilestone(items), total: milestoneCatalog().length };
}
