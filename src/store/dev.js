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
import { shouldListen, shouldListenType, shouldTypeReading, shouldTypeProduce, isTraceable, shouldSpeak, shouldCloze, shouldParticleCloze, canParticleCloze, shouldSentence } from "./cardRouting.js";

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

  const lesson = getLesson(lessonId);
  if (!lesson?.items) return items;

  const ov = PREVIEW_OVERRIDES[previewState] ?? PREVIEW_OVERRIDES.fresh;
  const duePast = new Date(Date.now() - 1000);
  for (const def of lesson.items) {
    const it = items[def.id];
    if (!it) continue;
    items[def.id] = {
      ...it,
      rung: ov.rung,
      srs: { ...it.srs, stability: ov.stability, due: duePast },
    };
  }
  return items;
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
    case "choice":        return { rung: 1, pick: (it) => it.type === "vocab" && !shouldListen(it) };
    case "particle:choice": return { rung: 2, pick: (it) => shouldParticleCloze(it) };
    case "cloze:choice":  return { rung: 2, pick: (it) => shouldCloze(it) && !canParticleCloze(it) };
    case "listen:type":   return { rung: 2, pick: (it) => shouldListenType(it) };
    case "type:reading":  return { rung: 2, pick: (it) => shouldTypeReading(it) };
    case "type:meaning":  return { rung: 2, pick: (it) => it.type === "vocab" && !shouldParticleCloze(it) && !shouldCloze(it) && !shouldListenType(it) && !shouldTypeReading(it) };
    case "type:produce":  return { rung: 3, pick: (it) => shouldTypeProduce(it) };
    case "sentence:build": return { rung: 3, pick: (it) => shouldSentence(it) };
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
    items[p.id] = { ...items[p.id], rung: spec.rung, srs: { ...items[p.id].srs, stability: 8, due } };
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
