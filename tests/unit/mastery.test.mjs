import test from "node:test";
import assert from "node:assert/strict";
import { nextRung, isReviewable, MAX_RUNG } from "../../src/store/mastery.js";

test("good/easy climbs one rung", () => {
  assert.equal(nextRung({ rung: 1 }, "good"), 2);
  assert.equal(nextRung({ rung: 2 }, "easy"), 3);
});

test("hard holds the rung", () => {
  assert.equal(nextRung({ rung: 3 }, "hard"), 3);
});

test("again drops one rung", () => {
  assert.equal(nextRung({ rung: 3 }, "again"), 2);
  assert.equal(nextRung({ rung: 2 }, "again"), 1);
});

test("a graduated item never falls back to NEW on a lapse (regression: mastery ejection)", () => {
  // A freshly-graduated item sits at rung 1 (RECOGNIZED). Failing its first
  // review must NOT drop it to rung 0, or isReviewable (rung >= 1) would eject
  // it from spaced review permanently.
  const lapsed = nextRung({ rung: 1 }, "again");
  assert.equal(lapsed, 1, "rung-1 + again must hold at 1, not drop to 0");
  assert.equal(isReviewable({ rung: lapsed }), true, "lapsed item stays reviewable");
});

test("clamps within [0, MAX_RUNG]", () => {
  assert.equal(nextRung({ rung: MAX_RUNG }, "good"), MAX_RUNG);
  assert.equal(nextRung({ rung: 0 }, "again"), 0); // ungraduated stays NEW
});

test("isReviewable requires at least RECOGNIZED", () => {
  assert.equal(isReviewable({ rung: 0 }), false);
  assert.equal(isReviewable({ rung: 1 }), true);
  assert.equal(isReviewable({}), false);
});
