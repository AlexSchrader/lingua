// CEFR level logic — pure and unit-testable (no store, no persistence). Reasons
// about how far a learner has climbed in a language, from the curriculum + their
// item rungs. Used by the store's cascade + the "add a language" gate.
import { UNITS } from "../data/index.js";

export const CEFR_ORDER = { A1: 0, A2: 1, B1: 2, B2: 3 };
// Climb order. "pre-A1" is the start (before A1), not a completable band.
const CEFR_BANDS = ["A1", "A2", "B1", "B2"];

// True when EVERY item at CEFR ≤ targetLevel for langId is at rung ≥ 1. Cumulative:
// "A2 complete" means all of A1 *and* A2 are recognized. A band with no content
// yet is never "complete" (defs.length === 0 → false), so levels can't skip ahead
// of what's authored.
export function isLevelComplete(langId, targetLevel, items) {
  const maxIdx = CEFR_ORDER[targetLevel] ?? 0;
  const defs = UNITS.filter((u) => u.lang === langId)
    .flatMap((u) => u.lessons.filter((l) => l.items && (CEFR_ORDER[l.cefr] ?? 0) <= maxIdx))
    .flatMap((l) => l.items);
  if (defs.length === 0) return false;
  return defs.every((def) => (items[def.id]?.rung ?? 0) >= 1);
}

// True if the language has any authored content at this exact CEFR band.
function bandHasContent(langId, band) {
  return UNITS.some((u) => u.lang === langId && u.lessons.some((l) => l.items && l.cefr === band));
}

// The highest CEFR band a learner has fully completed for a language ("pre-A1" if
// none). Bands are cumulative, so we stop at the first incomplete one — you can't
// have "reached A2" without A1. CRITICAL: we also stop at the first band with NO
// authored content — otherwise "all items ≤ B2" is vacuously satisfied when only
// A1 content exists, and finishing A1 would wrongly read as B2.
export function cefrLevelReached(langId, items) {
  let reached = "pre-A1";
  for (const band of CEFR_BANDS) {
    if (!bandHasContent(langId, band)) break; // nothing authored here yet → can't reach it
    if (!isLevelComplete(langId, band, items)) break; // this band is still in progress
    reached = band;
  }
  return reached;
}

// Rank a level string for monotonic comparison; "pre-A1" (or anything unknown)
// sorts below A1.
export function levelRank(level) {
  return CEFR_ORDER[level] ?? -1;
}
