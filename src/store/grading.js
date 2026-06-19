// Computed FSRS grade — derived from how the learner actually answered, never
// self-rated. Thresholds live here so they're tunable in one place.

export const TIMING = {
  mc: 3000, // ms (informational; MC can never beat `good`)
  typed: (answer = "") => 1500 + 350 * String(answer).length, // scales with length
};

// deriveGrade({ kind, correct, retried, elapsedMs, target }) -> grade
//   kind: "mc" | "typed"
// - Multiple choice is a 25% guess → capped at `good`, never `easy`; wrong → `again`.
// - Typed/produce: wrong → `again`; correct-after-retry → `hard`; first-try
//   correct graded by speed vs a length-scaled target.
export function deriveGrade({ kind, correct, retried = false, elapsedMs = 0, target = "" }) {
  if (!correct) return "again";
  if (kind === "mc") return "good";
  if (retried) return "hard";
  const t = TIMING.typed(target);
  if (elapsedMs < t * 0.6) return "easy";
  if (elapsedMs <= t * 1.4) return "good";
  return "hard";
}
