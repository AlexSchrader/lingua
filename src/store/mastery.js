import { eligibleKinds } from "./cardRouting.js";
// Mastery rungs: the learner's depth of knowledge for a single item.
// Rung 0 = "NEW" — seeded into the deck but not yet started (NOT "seen"; every
// item, including future lessons, sits here until a lesson graduates it to rung 1).
// These are DISPLAY labels only; all rung logic is by index.
export const RUNGS = ["NEW", "RECOGNIZED", "RECALLED", "PRODUCED", "SPOKEN", "MASTERED"];
export const MAX_RUNG = RUNGS.length - 1; // 5

export function rungName(rung) {
  return RUNGS[Math.max(0, Math.min(MAX_RUNG, rung))];
}

// Advance or hold an item's rung based on a review result.
// A correct answer (good/easy) climbs one rung; "hard" holds; a wrong answer
// (again) drops one rung. Clamped to [0, MAX_RUNG].
export function nextRung(item, grade) {
  const cur = item.rung ?? 0;
  let next = cur;
  if (grade === "again") next = cur - 1;
  else if (grade === "hard") next = cur; // hold
  else if (grade === "good" || grade === "easy") next = cur + 1;
  // A graduated item (already RECOGNIZED) never falls back to NEW on a lapse —
  // rung 0 means "never studied", and once you've studied something a wrong
  // answer shouldn't un-know it. It holds at RECOGNIZED and FSRS's relearning
  // interval resurfaces it soon. Without this floor, failing a freshly-graduated
  // item's first review dropped it to rung 0, and isReviewable (rung >= 1) then
  // ejected it from spaced review permanently.
  const floor = cur >= 1 ? 1 : 0;
  return Math.max(floor, Math.min(MAX_RUNG, next));
}

// Gate check: is an item considered "due"-eligible? Items must have at least
// been RECOGNIZED (rung >= 1) to enter the review queue. Fresh (rung 0) items
// only enter via a lesson.
export function isReviewable(item) {
  return (item.rung ?? 0) >= 1;
}

// --- Mastery (demonstrated skill, 0..1) ------------------------------------
// Distinct from rung (the qualitative stage: recognize -> recall -> produce ...).
// Mastery is what the learner has actually DEMONSTRATED: correct passes on every
// card kind the item can fairly be asked.
//
// IT WAS A CALENDAR QUANTITY AND IS NOT ANY MORE. It used to read
// sqrt(stability / 45 days) — FSRS retention — which had two problems Alex hit in
// playtest: the bar showed 50% at 11 days of stability (a quarter of the target), and
// it disagreed with the Stats tile, which counted rung 5. The same word could be
// mastered on the Ladder and not on Stats. Both now read this.
//
// PASSES_PER_KIND correct answers on EACH eligible kind. Per kind, not in total:
// 15 repeats of the same choice card is not the same evidence as 15 spread across
// recognising, recalling, producing, hearing and saying it.
export const PASSES_PER_KIND = 15;

// Cap each kind's contribution so extra reps of an easy card cannot stand in for a
// kind never attempted. Mastery means every skill, not enough of one.
export function countedPasses(item) {
  const kinds = eligibleKinds(item);
  const passes = item?.passes ?? {};
  let n = 0;
  for (const k of kinds) n += Math.min(PASSES_PER_KIND, Number(passes[k]) || 0);
  // `seeded` is the migration's credit for progress made before mastery counted kinds
  // (migrate.js). It has no kind, so it tops up the TOTAL and never stands in for a
  // specific skill — the cap means seeded alone can never reach mastery.
  // Capped one whole kind short of the total, so a migrated learner can never be
  // MASTERED without demonstrating at least one skill for real. The migration only
  // ever grants rung x 2 anyway; this makes the guarantee structural rather than a
  // property of today's constants.
  const need = PASSES_PER_KIND * kinds.length;
  const ceiling = Math.max(0, need - PASSES_PER_KIND);
  const seeded = Math.min(Math.max(0, Number(item?.seeded) || 0), ceiling);
  return Math.min(n + seeded, need);
}

export function requiredPasses(item) {
  return PASSES_PER_KIND * eligibleKinds(item).length;
}

export function masteryPct(item) {
  const need = requiredPasses(item);
  if (!need) return 0;
  return Math.max(0, Math.min(1, countedPasses(item) / need));
}

export function isMastered(item) {
  return requiredPasses(item) > 0 && masteryPct(item) >= 1;
}

// The thinnest skill first — what the rotation picks, and what the UI shows the
// learner when they ask why a word is not mastered yet.
export function weakestKind(item) {
  const passes = item?.passes ?? {};
  let best = null, bestN = Infinity;
  for (const k of eligibleKinds(item)) {
    const n = Math.min(PASSES_PER_KIND, Number(passes[k]) || 0);
    if (n < bestN) { best = k; bestN = n; }
  }
  return best;
}
