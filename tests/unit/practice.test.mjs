import test from "node:test";
import assert from "node:assert/strict";
import { useStore, PASSES_PER_DAY, PRACTICE_RUNS_PER_DAY } from "../../src/store/useStore.js";

// Practice exists because spaced repetition deliberately MINIMISES repetitions: the
// review queue alone would take years to supply 15 passes on every card kind (measured
// against ts-fsrs: 7 correct reps is 5.5 years, 15 is centuries). So practice supplies
// the volume — and must do it without touching the schedule that sits beside it.

const ID = "fr-u1l1-test";
const srs = () => ({
  due: new Date(Date.now() + 9e8).toISOString(), stability: 7, difficulty: 5,
  elapsed_days: 1, scheduled_days: 10, reps: 3, lapses: 0, learning_steps: 0,
  state: 2, last_review: new Date(Date.now() - 8.64e7).toISOString(),
});

function seed() {
  const s = useStore.getState();
  s.setAuth?.({});
  useStore.setState({
    items: { [ID]: { id: ID, type: "vocab", lang: "fr", rung: 2, srs: srs() } },
    daily: { date: null },
  });
}

test("a practice answer records a pass on the kind that was shown", () => {
  seed();
  useStore.getState().practiceItem(ID, "listen:type", "good");
  assert.equal(useStore.getState().items[ID].passes["listen:type"], 1);
});

test("THE LOAD-BEARING ONE: practice leaves srs and rung byte-identical", () => {
  // If a practice answer rescheduled the card, drilling a word four times a day would
  // collapse its FSRS interval and destroy the retention model. This is the assertion
  // that keeps the two systems independent.
  seed();
  const before = JSON.stringify(useStore.getState().items[ID].srs);
  const rung = useStore.getState().items[ID].rung;
  for (const k of ["choice", "type:meaning", "listen:type"]) {
    useStore.getState().practiceItem(ID, k, "good");
  }
  const after = useStore.getState().items[ID];
  assert.equal(JSON.stringify(after.srs), before, "srs must not move");
  assert.equal(after.rung, rung, "rung must not move");
});

test("only correct answers count — a miss is safe to attempt", () => {
  seed();
  useStore.getState().practiceItem(ID, "choice", "again");
  useStore.getState().practiceItem(ID, "choice", "hard");
  assert.equal(useStore.getState().items[ID].passes, undefined, "no pass recorded");
});

test("an item takes at most PASSES_PER_DAY counted passes a day", () => {
  // One scheduled review plus three practice runs. This is the cap that stops a word
  // being drilled to mastery in a single sitting.
  seed();
  for (let i = 0; i < 10; i++) useStore.getState().practiceItem(ID, "choice", "good");
  const passes = useStore.getState().items[ID].passes;
  assert.equal(passes.choice, PASSES_PER_DAY, `capped at ${PASSES_PER_DAY}, got ${passes.choice}`);
});

test("the daily cap survives a reload — it is stored, not in memory", () => {
  seed();
  for (let i = 0; i < 4; i++) useStore.getState().practiceItem(ID, "choice", "good");
  const persisted = useStore.getState().items[ID];
  assert.ok(persisted.passLog?.date, "the day is recorded on the item");
  assert.equal(persisted.passLog.n, PASSES_PER_DAY);
  // Simulate tomorrow: the log's date no longer matches, so the budget refreshes.
  useStore.setState({ items: { [ID]: { ...persisted, passLog: { date: "1999-01-01", n: 4 } } } });
  useStore.getState().practiceItem(ID, "choice", "good");
  assert.equal(useStore.getState().items[ID].passes.choice, PASSES_PER_DAY + 1);
});

test("three practice runs a day, and an abandoned run still counts", () => {
  useStore.setState({ daily: { date: null } });
  assert.equal(useStore.getState().practiceRunsLeft(), PRACTICE_RUNS_PER_DAY);
  for (let i = 0; i < PRACTICE_RUNS_PER_DAY; i++) useStore.getState().startPracticeRun();
  assert.equal(useStore.getState().practiceRunsLeft(), 0);
  // Spent at START, not on completion — otherwise quitting halfway would refund it and
  // a learner could restart forever.
  useStore.getState().startPracticeRun();
  assert.equal(useStore.getState().practiceRunsLeft(), 0, "cannot go negative or refund");
});
