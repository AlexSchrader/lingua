import test from "node:test";
import assert from "node:assert/strict";
import { languageGate } from "../../src/store/useStore.js";

// The progression rule: start any 1 → A1 unlocks a 2nd → A2 (in any started
// language) unlocks a 3rd+. `isComplete(id, level)` is injected, so these tests
// are pure — no store, no curriculum.
const complete = (map) => (id, level) => !!map[`${id}:${level}`];

test("no language started yet → first pick is always allowed", () => {
  assert.deepEqual(languageGate([], complete({})), { level: null, met: true });
  assert.deepEqual(languageGate(undefined, complete({})), { level: null, met: true });
});

test("one language started → a 2nd unlocks only once A1 is complete", () => {
  assert.deepEqual(languageGate(["ja"], complete({})), { level: "A1", met: false });
  assert.deepEqual(languageGate(["ja"], complete({ "ja:A1": true })), { level: "A1", met: true });
});

test("two+ started → a 3rd unlocks only once A2 is mastered in ANY of them", () => {
  // A1 done in both but no A2 yet → still locked; the gate is A2 now, not A1.
  assert.deepEqual(
    languageGate(["ja", "fr"], complete({ "ja:A1": true, "fr:A1": true })),
    { level: "A2", met: false }
  );
  // A2 in one of them → unlocked.
  assert.deepEqual(
    languageGate(["ja", "fr"], complete({ "fr:A2": true })),
    { level: "A2", met: true }
  );
  // Still the A2 gate at three languages.
  assert.equal(languageGate(["ja", "fr", "es"], complete({})).level, "A2");
});
