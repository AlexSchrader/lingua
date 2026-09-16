import test from "node:test";
import assert from "node:assert/strict";
import {
  buildLearnQueue,
  initLearn,
  currentStep,
  answerStep,
  LEARN_OPTS,
} from "../../src/store/learnQueue.js";

const idsOf = (q) => q.map((s) => `${s.id}:${s.step}`);

test("queue: teach < check1 < check2 per item, and no echo", () => {
  const q = buildLearnQueue(["a", "b", "c"]);
  assert.equal(q.length, 9, "3 steps per item");
  for (const id of ["a", "b", "c"]) {
    const t = q.findIndex((s) => s.id === id && s.step === "teach");
    const c1 = q.findIndex((s) => s.id === id && s.step === "check1");
    const c2 = q.findIndex((s) => s.id === id && s.step === "check2");
    assert.ok(t < c1 && c1 < c2, `${id}: teach<check1<check2 (${t},${c1},${c2})`);
    assert.ok(c1 - t >= 2, `${id}: check1 not echoed right after teach (gap ${c1 - t})`);
  }
});

test("queue: clamps past-end offsets to the tail (never drops steps)", () => {
  const q = buildLearnQueue(["a", "b"], { ...LEARN_OPTS, off1: 50, off2: 99 });
  assert.equal(q.length, 6);
  // both teaches come first, checks appended after
  assert.deepEqual(idsOf(q).slice(0, 2), ["a:teach", "b:teach"]);
});

// Drive a session by always passing cleanly → graduates `good`.
test("clean run graduates each item once as good", () => {
  let st = initLearn(["a", "b"]);
  const grads = [];
  let guard = 0;
  while (currentStep(st) && guard++ < 50) {
    const step = currentStep(st);
    const result = step.step === "teach" ? null : { pass: true, clean: true };
    const r = answerStep(st, result);
    if (r.graduated) grads.push(r.graduated);
    st = r.state;
  }
  assert.deepEqual(
    grads.sort((x, y) => x.id.localeCompare(y.id)),
    [{ id: "a", grade: "good" }, { id: "b", grade: "good" }]
  );
});

test("a miss re-queues the step and downgrades graduation to hard", () => {
  let st = initLearn(["a"]);
  let firstCheckMissed = false;
  let grad = null;
  let guard = 0;
  while (currentStep(st) && guard++ < 50) {
    const step = currentStep(st);
    let result = null;
    if (step.step !== "teach") {
      // miss the very first check once, pass everything else
      if (!firstCheckMissed) {
        firstCheckMissed = true;
        result = { pass: false, clean: false };
      } else {
        result = { pass: true, clean: true };
      }
    }
    const r = answerStep(st, result);
    if (r.graduated) grad = r.graduated;
    st = r.state;
  }
  assert.deepEqual(grad, { id: "a", grade: "hard" }, "miss → graduates hard, still graduates");
});

test("missing a step maxMisses times force-graduates (no infinite loop)", () => {
  let st = initLearn(["a"]);
  let grad = null;
  let guard = 0;
  while (currentStep(st) && guard++ < 100) {
    const step = currentStep(st);
    // always miss checks; teaches just advance
    const result = step.step === "teach" ? null : { pass: false, clean: false };
    const r = answerStep(st, result);
    if (r.graduated) grad = r.graduated;
    st = r.state;
  }
  assert.ok(guard < 100, "terminated — no infinite re-queue");
  assert.deepEqual(grad, { id: "a", grade: "hard" });
});

// A LETTER runs more checks than a word, and a letter you DRAW runs more than a
// letter you only type. Alex, 2026-09-16: "Ja check 3 is type and check 4 is say
// it - ja has more cuz of trace, just like Mandarin and Hindi will have."
test("check count is per item: 2 for a word, 3 for a typed letter, 4 for a drawn one", () => {
  const n = { word: 2, typed: 3, drawn: 4 };
  const q = buildLearnQueue(["word", "typed", "drawn"], LEARN_OPTS, (id) => n[id]);

  const steps = (id) => q.filter((s) => s.id === id).map((s) => s.step);
  assert.deepEqual(steps("word"), ["teach", "check1", "check2"]);
  assert.deepEqual(steps("typed"), ["teach", "check1", "check2", "check3"]);
  assert.deepEqual(steps("drawn"), ["teach", "check1", "check2", "check3", "check4"]);

  // Teaches still all come first — you never get checked on an item you have not met.
  const firstCheck = q.findIndex((s) => s.step !== "teach");
  assert.ok(q.slice(0, firstCheck).every((s) => s.step === "teach"));
  assert.equal(firstCheck, 3);
  assert.equal(q.length, 3 + 2 + 3 + 4);
});

test("an item only graduates once EVERY check it runs has passed", () => {
  const drawn = () => 4;
  let st = initLearn(["k"], LEARN_OPTS, drawn);
  st = answerStep(st, null).state; // the teach card first — it grades nothing
  let grads = 0;
  for (let i = 0; i < 4; i++) {
    const r = answerStep(st, { pass: true, clean: true });
    st = r.state;
    if (r.graduated) grads++;
    if (i < 3) assert.equal(r.graduated, null, `graduated after only ${i + 1} of 4 checks`);
  }
  assert.equal(grads, 1, "graduates exactly once, on the last check");

  // A two-check word is untouched by any of this.
  let w = initLearn(["w"], LEARN_OPTS);
  w = answerStep(w, null).state; // teach
  const a = answerStep(w, { pass: true, clean: true });
  assert.equal(a.graduated, null);
  const b = answerStep(a.state, { pass: true, clean: true });
  assert.deepEqual(b.graduated, { id: "w", grade: "good" });
});
