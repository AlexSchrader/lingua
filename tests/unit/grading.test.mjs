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

test("typed: fast first-try → easy; slower-but-correct → good (never hard for slowness)", () => {
  const target = "hi"; // TIMING.typed = 1500 + 350*2 = 2200ms
  const t = TIMING.typed(target);
  assert.equal(deriveGrade({ kind: "typed", correct: true, elapsedMs: t * 0.5, target }), "easy");
  assert.equal(deriveGrade({ kind: "typed", correct: true, elapsedMs: t, target }), "good");
  // Being thoughtful is not a struggle — a slow first-try stays "good", not "hard".
  assert.equal(deriveGrade({ kind: "typed", correct: true, elapsedMs: t * 5, target }), "good");
});

test("typed: noSpeed ignores timing — correct first try is always good", () => {
  const target = "hi";
  const t = TIMING.typed(target);
  assert.equal(deriveGrade({ kind: "typed", correct: true, elapsedMs: t * 0.1, target, noSpeed: true }), "good");
  assert.equal(deriveGrade({ kind: "typed", correct: true, elapsedMs: t * 5, target, noSpeed: true }), "good");
  // a retry is still "hard" (a genuine struggle), speed pressure or not
  assert.equal(deriveGrade({ kind: "typed", correct: true, retried: true, target, noSpeed: true }), "hard");
});

test("timing target scales with answer length", () => {
  assert.ok(TIMING.typed("a longer answer") > TIMING.typed("hi"));
});
