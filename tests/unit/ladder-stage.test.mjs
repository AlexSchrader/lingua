import { test } from "node:test";
import assert from "node:assert/strict";
import { currentStageFor } from "../../src/store/levels.js";

// REGRESSION (truth-agent B1, 2026-07-31): before this, a language with no
// content in an early stage was pinned to that stage forever, because `complete`
// is `total > 0 && done === total` — which an EMPTY stage can never satisfy. A
// French learner sat on Pre-A1 permanently and their own rung read "Lessons for
// Pre-A1 coming soon." from lesson 1 on, at any level of progress.

const st = (total, done) => ({ total, done, pct: total ? Math.round((done / total) * 100) : 0, complete: total > 0 && done === total });

test("a stage with no content is skipped, not treated as incomplete", () => {
  const stages = ["pre-a1", "a1", "a2", "b1", "b2"];
  // The French shape: no pre-a1 band at all, part-way through a1.
  const stats = {
    "pre-a1": st(0, 0),
    a1: st(185, 40),
    a2: st(0, 0),
    b1: st(0, 0),
    b2: st(0, 0),
  };
  assert.equal(currentStageFor(stages, stats), "a1", "must not pin to the empty pre-a1");
});

test("Japanese behavior is unchanged in every state", () => {
  const stages = ["pre-a1", "a1", "a2", "b1", "b2"];
  const base = { a2: st(1123, 0), b1: st(0, 0), b2: st(0, 0) };
  // brand new
  assert.equal(currentStageFor(stages, { "pre-a1": st(348, 0), a1: st(904, 0), ...base }), "pre-a1");
  // mid pre-a1
  assert.equal(currentStageFor(stages, { "pre-a1": st(348, 100), a1: st(904, 0), ...base }), "pre-a1");
  // pre-a1 done → moves to a1
  assert.equal(currentStageFor(stages, { "pre-a1": st(348, 348), a1: st(904, 0), ...base }), "a1");
  // pre-a1 done, a1 partly done → still a1
  assert.equal(currentStageFor(stages, { "pre-a1": st(348, 348), a1: st(904, 500), ...base }), "a1");
});

test("everything complete falls back to the last stage WITH content, never undefined", () => {
  const stages = ["pre-a1", "a1", "a2", "b1", "b2"];
  const stats = {
    "pre-a1": st(348, 348),
    a1: st(904, 904),
    a2: st(1123, 1123),
    b1: st(0, 0),
    b2: st(0, 0),
  };
  // b1/b2 have no content, so the learner rests on the last real stage rather
  // than being sent to an empty "B2" with a 0-item progress bar.
  assert.equal(currentStageFor(stages, stats), "a2");
});

test("no content anywhere still returns a stage (never undefined)", () => {
  const stages = ["pre-a1", "a1"];
  const out = currentStageFor(stages, { "pre-a1": st(0, 0), a1: st(0, 0) });
  assert.ok(stages.includes(out), `expected a real stage, got ${out}`);
});
