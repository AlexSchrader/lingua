import test from "node:test";
import assert from "node:assert/strict";
import { nextRung, isReviewable, MAX_RUNG, masteryPct, isMastered, MASTERY_FULL_DAYS } from "../../src/store/mastery.js";

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

// R25 — concave (sqrt) mastery bar. Endpoints fixed, front-loaded in between.
test("masteryPct: sqrt map, endpoints 0->0 and full-days->1, clamped", () => {
  assert.equal(masteryPct({ srs: { stability: 0 } }), 0);
  assert.equal(masteryPct({ srs: { stability: MASTERY_FULL_DAYS } }), 1); // sqrt(1) === 1 exactly
  assert.ok(masteryPct({ srs: { stability: MASTERY_FULL_DAYS - 1 } }) < 1);
  assert.equal(masteryPct({ srs: { stability: 999 } }), 1); // clamped
  assert.equal(masteryPct({}), 0); // no srs → 0
  // front-loaded: early stability reads ABOVE the old linear ratio
  const s = 5;
  assert.ok(masteryPct({ srs: { stability: s } }) > s / MASTERY_FULL_DAYS);
});

test("isMastered: trips at exactly MASTERY_FULL_DAYS stability, not a day before", () => {
  assert.equal(isMastered({ srs: { stability: MASTERY_FULL_DAYS - 1 } }), false);
  assert.equal(isMastered({ srs: { stability: MASTERY_FULL_DAYS } }), true);
  assert.equal(isMastered({ srs: { stability: MASTERY_FULL_DAYS + 20 } }), true);
  assert.equal(isMastered({}), false);
});
