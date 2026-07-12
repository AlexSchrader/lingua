// Dev Mode — pure logic for the hidden playtest panel (Settings → unlock code).
// Everything here is store-agnostic and side-effect-free so it can be unit-tested
// and, critically, so a Dev-Mode lesson run can be proven NOT to touch real state.
//
// This is an unlock *convenience* for solo playtesting, NOT security: the code
// below ships in the client bundle. Nothing sensitive is gated behind it.

import { seedItems, UNITS } from "../data/index.js";
import { getLesson } from "../data/index.js";
import { KANJIVG } from "../data/kanjivg.js";
import { newCard } from "./srs.js";
import { shouldListen, shouldReverseChoice, shouldListenType, shouldTypeReading, shouldTypeProduce, isTraceable, shouldSpeak, shouldCloze, shouldParticleCloze, canParticleCloze, shouldSentence } from "./cardRouting.js";
// A2 draft is preview-only. Importing it HERE (a dev-only module) is safe — it
// never reaches index.js / seedItems / the Ladder, so the live app stays 21 units.
import { A2_DRAFT_UNITS, A2_SAMPLER_LESSON_IDS } from "../data/a2-draft.js";
// B1 draft — same preview-only contract as A2 (never in UNITS/seed/Ladder).
import { B1_DRAFT_UNITS, B1_SAMPLER_LESSON_IDS } from "../data/b1-draft.js";

// The unlock code. Intentionally in the bundle — see note above.
export const DEV_CODE = "L071201";

export function matchesDevCode(input) {
  return String(input ?? "").trim().toUpperCase() === DEV_CODE;
}

// Preview states: launch a lesson's items directly at any rung depth, so EVERY
// card family is one tap from any lesson — no grinding to build up state. Each
// maps to the card the review runner shows at that rung:
//   fresh(0)     → teach flow (first-teach lesson)
//   recognize(1) → choice / listen:choice   (the rung that was un-previewable)
//   mid(2)       → type:meaning
//   produce(3)   → trace (kana/kanji) / build (words)
//   mastered(5)  → produce cards, fully-filled mastery bars
export const PREVIEW_STATES = ["fresh", "recognize", "mid", "produce", "mastered"];

export const PREVIEW_LABEL = {
  fresh: "Fresh · teach",
  recognize: "Recognize · choice/listen",
  mid: "Recall · type",
  produce: "Produce · trace/build",
  mastered: "Mastered",
};

// Rung + FSRS-stability overrides applied to the target lesson's items for each
// preview state. `fresh` leaves items at rung 0 (a real first-teach lesson);
// the rest lift them into the review track at the matching depth so the review
// runner surfaces that rung's card UI.
const PREVIEW_OVERRIDES = {
  fresh: { rung: 0, stability: 0 },
  recognize: { rung: 1, stability: 4 },
  mid: { rung: 2, stability: 8 },
  produce: { rung: 3, stability: 20 },
  mastered: { rung: 5, stability: 60 },
};

// Build a THROWAWAY items map for an isolated Dev-Mode run. Starts from a clean
// seed (every item rung 0 / fresh FSRS card) and applies the preview override to
// the target lesson's items only. Pure: never reads or writes the persisted
// store, so the run is fully sandboxed by construction.
export function buildSandboxItems(lessonId, previewState = "fresh") {
  const seed = seedItems();
  const items = {};
  for (const [id, it] of Object.entries(seed)) items[id] = { ...it, srs: newCard() };

  const lesson = getPreviewLesson(lessonId);
  if (!lesson?.items) return items;

  const ov = PREVIEW_OVERRIDES[previewState] ?? PREVIEW_OVERRIDES.fresh;
  const duePast = new Date(Date.now() - 1000);
  for (const def of lesson.items) {
    // Live items are already in `seed`; A2 draft (and sampler) items are not —
    // materialize them here, in the throwaway map only, so they never enter seed.
    const base = items[def.id] ?? materializeItem(def, lesson);
    items[def.id] = {
      ...base,
      rung: ov.rung,
      srs: { ...(base.srs ?? newCard()), stability: ov.stability, due: duePast },
    };
  }
  return items;
}

// Shape a raw lesson-def item into the seeded item shape (mirrors seedItems in
// index.js) — used for A2 draft items, which aren't in the live seed.
function materializeItem(def, lesson) {
  return {
    ...def,
    lang: lesson.lang ?? "ja",
    unit: lesson.unit,
    lesson: lesson.lesson,
    meaning: def.meaning ?? null,
    example: def.example ?? null,
    accept: def.accept ?? [],
    rung: 0,
    srs: newCard(),
  };
}

// --- A2 draft preview --------------------------------------------------------
// A2 is drafted but NOT activated (not in UNITS, not seeded, not on the Ladder).
// These helpers let Dev Mode run A2 lessons in the SAME throwaway sandbox as live
// units so Alex can feel the content before it ships — preview only, zero leakage
// to the live daily loop.
export const A2_SAMPLER_ID = "ja-a2-sampler";
export const B1_SAMPLER_ID = "ja-b1-sampler";
const A2_SAMPLE_PER_LESSON = 2; // items pulled per sampler lesson for the one-tap cross-section

// Draft-side twin of getLesson: find a draft lesson (with items) by id across ALL
// unactivated draft sets (A2 + B1). Both are preview-only; live getLesson stays
// UNITS-only.
function getDraftLesson(lessonId) {
  for (const unit of [...A2_DRAFT_UNITS, ...B1_DRAFT_UNITS]) {
    for (const lesson of unit.lessons) {
      if (lesson.id === lessonId) return { ...lesson, lang: unit.lang };
    }
  }
  return null;
}

// A synthetic "sampler" lesson — a short cross-section: the first couple of items
// from each curated sampler lesson, so one tap tastes every theme in a draft band.
function samplerLesson(samplerIds, id, title, cefr) {
  const items = [];
  for (const lid of samplerIds) {
    const lesson = getDraftLesson(lid);
    if (lesson?.items) items.push(...lesson.items.slice(0, A2_SAMPLE_PER_LESSON));
  }
  return { id, title, unit: 0, lesson: 0, lang: "ja", cefr, items };
}

// Draft-aware lesson lookup for the PREVIEW path only: live units first, then the
// draft sets (A2 + B1), plus the synthetic samplers. Live getLesson() stays UNITS-only.
export function getPreviewLesson(lessonId) {
  if (lessonId === A2_SAMPLER_ID) return samplerLesson(A2_SAMPLER_LESSON_IDS, A2_SAMPLER_ID, "A2 sampler (draft)", "A2");
  if (lessonId === B1_SAMPLER_ID) return samplerLesson(B1_SAMPLER_LESSON_IDS, B1_SAMPLER_ID, "B1 sampler (draft)", "B1");
  return getLesson(lessonId) ?? getDraftLesson(lessonId);
}

// Flat metadata for a Dev-Mode draft browser (units → lessons). No live leakage.
function previewUnits(draftUnits, fallbackStage, fallbackCefr) {
  return draftUnits.map((u) => ({
    id: u.id,
    title: u.title,
    stage: u.stage ?? fallbackStage,
    lessons: u.lessons
      .filter((l) => Array.isArray(l.items))
      .map((l) => ({ id: l.id, title: l.title, cefr: l.cefr ?? fallbackCefr, itemCount: l.items.length })),
  }));
}

export function a2PreviewUnits() {
  return previewUnits(A2_DRAFT_UNITS, "a2", "A2");
}

export function b1PreviewUnits() {
  return previewUnits(B1_DRAFT_UNITS, "b1", "B1");
}

// --- Quick card preview ------------------------------------------------------
// "Show me THIS card right now" — seed a handful of items at the rung that
// produces that card, so one tap runs a short session of examples (not a single
// card — you want a few reps to feel it). teach is lesson-only → via the route.
export const QUICK_CARD_COUNT = 3; // examples seeded per Quick-card kind

// For a card kind: the rung to seed at + which items yield it.
function kindSpec(kind) {
  switch (kind) {
    case "listen:choice": return { rung: 1, pick: (it) => it.type === "vocab" && shouldListen(it) };
    case "choice:reverse": return { rung: 1, pick: (it) => it.type === "vocab" && !shouldListen(it) && shouldReverseChoice(it) };
    case "choice":        return { rung: 1, pick: (it) => it.type === "vocab" && !shouldListen(it) && !shouldReverseChoice(it) };
    case "particle:choice": return { rung: 2, pick: (it) => shouldParticleCloze(it) };
    case "cloze:choice":  return { rung: 2, pick: (it) => shouldCloze(it) && !canParticleCloze(it) };
    case "listen:type":   return { rung: 2, pick: (it) => shouldListenType(it) };
    case "type:reading":  return { rung: 2, pick: (it) => shouldTypeReading(it) };
    case "type:meaning":  return { rung: 2, pick: (it) => it.type === "vocab" && !shouldParticleCloze(it) && !shouldCloze(it) && !shouldListenType(it) && !shouldTypeReading(it) };
    case "type:produce":  return { rung: 3, pick: (it) => shouldTypeProduce(it) };
    case "sentence:build": return { rung: 3, pick: (it) => shouldSentence(it) };
    case "conjugate":     return { rung: 3, pick: (it) => it.type === "vocab" && !!it.group };
    case "build":         return { rung: 3, pick: (it) => it.type === "vocab" && !shouldTypeProduce(it) && !shouldSentence(it) };
    case "trace":         return { rung: 3, pick: (it) => isTraceable(it) };
    case "speak":         return { rung: 4, pick: (it) => shouldSpeak(it) };
    default:              return null;
  }
}

// Throwaway items map with a few items seeded to yield the given card kind, so the
// Quick-card preview runs QUICK_CARD_COUNT examples of it (isolated, no real state).
export function buildCardPreviewItems(kind) {
  const seed = seedItems();
  const items = {};
  for (const [id, it] of Object.entries(seed)) items[id] = { ...it, srs: newCard() };
  const spec = kindSpec(kind);
  if (!spec) return items;
  const picks = Object.values(seed).filter(spec.pick).slice(0, QUICK_CARD_COUNT);
  const due = new Date(Date.now() - 1000);
  for (const p of picks) {
    items[p.id] = {
      ...items[p.id],
      rung: spec.rung,
      srs: { ...items[p.id].srs, stability: 8, due },
      // The conjugate preview needs a target form; synthesize the て-form on the
      // group-tagged verb so it routes to the conjugate card in the sandbox.
      ...(kind === "conjugate" ? { conjForm: "te" } : {}),
    };
  }
  return items;
}

// First playable lesson id — the target for a fresh "teach" quick-launch.
export function firstLessonId() {
  for (const u of UNITS) {
    const l = u.lessons.find((x) => Array.isArray(x.items));
    if (l) return l.id;
  }
  return null;
}

// Route for a one-tap card preview. teach runs a fresh lesson; the rest run an
// isolated review seeded (via ?card) to surface exactly that card kind.
export function cardPreviewRoute(kind) {
  if (kind === "teach") return `/lesson/${firstLessonId()}?sandbox=1&state=fresh`;
  return `/review?sandbox=1&card=${encodeURIComponent(kind)}`;
}

// The isolation contract, made explicit and testable. A runner asks for the
// store writers it would call; in sandbox mode every one is swapped for a no-op,
// guaranteeing a Dev-Mode run leaves persisted state byte-identical. Real mode
// returns the genuine writers untouched.
export const NOOP = () => {};

export function runnerWriters(sandbox, real) {
  if (!sandbox) return real;
  const out = {};
  for (const key of Object.keys(real)) out[key] = NOOP;
  return out;
}

// Diagnostics readout — the "is the new unit wired right" check. Pure: reads the
// static UNITS data + KanjiVG table, no store. Flags any kana missing stroke data.
export function devDiagnostics() {
  const items = Object.values(seedItems());
  // kana + kanji are both stroke-traced glyphs, so both need KanjiVG entries.
  const kana = items.filter((it) => it.type === "kana" || it.type === "kanji");
  const kanaMissing = kana.filter((it) => !KANJIVG[it.front]).map((it) => it.front);

  const units = UNITS.map((u) => {
    const lessons = u.lessons.filter((l) => l.items);
    return {
      id: u.id,
      title: u.title,
      order: u.order ?? null,
      lessonCount: lessons.length,
      itemCount: lessons.reduce((n, l) => n + l.items.length, 0),
    };
  });

  return {
    unitCount: UNITS.length,
    lessonCount: units.reduce((n, u) => n + u.lessonCount, 0),
    itemCount: items.length,
    kanaTotal: kana.length,
    kanaWithStroke: kana.length - kanaMissing.length,
    kanaMissing,
    units,
  };
}

// Build the route for an isolated run of a lesson in a given preview state.
// Fresh runs the teach flow (a real first-teach); mid/mastered run the review
// flow at the matching depth. Both carry sandbox=1 so the runners isolate.
export function sandboxRoute(lessonId, previewState) {
  if (previewState === "fresh") {
    return `/lesson/${lessonId}?sandbox=1&state=fresh`;
  }
  return `/review?sandbox=1&state=${previewState}&lesson=${lessonId}`;
}

// --- Session launchers (isolated) --------------------------------------------
// Run each SESSION SHAPE against the throwaway sandbox so the whole flow can be
// felt without grinding real due items / misses. All isolated — no real state.
export function reviewSandboxRoute() {
  return sandboxRoute(firstLessonId(), "mid"); // a mixed review over the first lesson
}
export function fixupSandboxRoute() {
  // The mistake-review UI over the sandbox set (fix=1 → "Fix-up" framing).
  return `${sandboxRoute(firstLessonId(), "produce")}&fix=1`;
}
export function microSandboxRoute() {
  // "Just a few" — a lesson capped to 3 new items.
  return `/lesson/${firstLessonId()}?sandbox=1&state=fresh&few=3`;
}
