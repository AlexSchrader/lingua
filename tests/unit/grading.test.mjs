import test from "node:test";
import assert from "node:assert/strict";
import { deriveGrade, TIMING } from "../../src/store/grading.js";

test("multiple choice: correct → good, never easy", () => {
  assert.equal(deriveGrade({ kind: "mc", correct: true, elapsedMs: 10 }), "good");
});

test("multiple choice: wrong → again (no retry)", () => {
  assert.equal(deriveGrade({ kind: "mc", correct: false }), "again");
});

test("typed: wrong → again", () => {
  assert.equal(deriveGrade({ kind: "typed", correct: false }), "again");
});

test("typed: correct after a retry → hard (no speed bonus)", () => {
  const g = deriveGrade({ kind: "typed", correct: true, retried: true, elapsedMs: 10, target: "hello" });
  assert.equal(g, "hard");
});

test("typed: first-try speed maps to easy / good / hard", () => {
  const target = "hi"; // TIMING.typed = 1500 + 350*2 = 2200ms
  const t = TIMING.typed(target);
  assert.equal(deriveGrade({ kind: "typed", correct: true, elapsedMs: t * 0.5, target }), "easy");
  assert.equal(deriveGrade({ kind: "typed", correct: true, elapsedMs: t, target }), "good");
  assert.equal(deriveGrade({ kind: "typed", correct: true, elapsedMs: t * 2, target }), "hard");
});

test("timing target scales with answer length", () => {
  assert.ok(TIMING.typed("a longer answer") > TIMING.typed("hi"));
});
