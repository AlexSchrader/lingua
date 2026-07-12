// Computed FSRS grade — derived from how the learner actually answered, never
// self-rated. Thresholds live here so they're tunable in one place.

export const TIMING = {
  mc: 3000, // ms (informational; MC can never beat `good`)
  typed: (answer = "") => 1500 + 350 * String(answer).length, // scales with length
};

// deriveGrade({ kind, correct, retried, elapsedMs, target, noSpeed }) -> grade
//   kind: "mc" | "typed"
// - Multiple choice is a 25% guess → capped at `good`, never `easy`; wrong → `again`.
// - Typed/produce: wrong → `again`; correct-after-retry → `hard`.
// - A FIRST-TRY correct answer is never `hard`: a thoughtful, slow-but-right answer
//   isn't a struggle, so it stays `good` (fast earns the `easy` bonus). Punishing
//   slowness with `hard` just over-drills a deliberate/ND learner — `hard` now means
//   "needed a retry", not "took your time".
// - noSpeed (the "No speed pressure" preference): ignore timing entirely — a correct
//   first try is always `good` (no `easy` bonus, no clock at all).
export function deriveGrade({ kind, correct, retried = false, elapsedMs = 0, target = "", noSpeed = false }) {
  if (!correct) return "again";
  if (kind === "mc") return "good";
  if (retried) return "hard";
  if (noSpeed) return "good";
  return elapsedMs < TIMING.typed(target) * 0.6 ? "easy" : "good";
}
