import test from "node:test";
import assert from "node:assert/strict";
import { newCard, schedule, isDue, startOfTomorrow } from "../../src/store/srs.js";

// R24 — first review is floored to next-day so a fresh item isn't massed.
test("startOfTomorrow: next local midnight, strictly in the future", () => {
  const t = startOfTomorrow();
  assert.ok(t.getTime() > Date.now(), "is in the future");
  assert.equal(t.getHours(), 0);
  assert.equal(t.getMinutes(), 0);
  assert.equal(t.getSeconds(), 0);
  const expected = new Date();
  expected.setHours(0, 0, 0, 0);
  expected.setDate(expected.getDate() + 1);
  assert.equal(t.getTime(), expected.getTime());
});

test("a fresh card graded 'good' schedules a future due", () => {
  const now = new Date();
  const card = schedule(newCard(), "good", now);
  assert.ok(
    new Date(card.due).getTime() > now.getTime(),
    "due should be in the future after 'good'"
  );
  assert.ok(!isDue(card, now.getTime()), "should not be due immediately after 'good'");
});

test("'again' keeps the card due ~now (short relearn step)", () => {
  const now = new Date();
  const card = schedule(newCard(), "again", now);
  const minutes = (new Date(card.due).getTime() - now.getTime()) / 60000;
  assert.ok(
    minutes >= 0 && minutes < 60,
    `'again' should keep it due within the hour, got ${minutes} min`
  );
});

test("three consecutive 'good's produce increasing intervals", () => {
  let card = newCard();
  let reviewAt = new Date();
  const intervals = [];
  for (let i = 0; i < 3; i++) {
    const next = schedule(card, "good", reviewAt);
    intervals.push(new Date(next.due).getTime() - reviewAt.getTime());
    card = next;
    reviewAt = new Date(next.due); // review again exactly when it comes due
  }
  assert.ok(
    intervals[0] < intervals[1] && intervals[1] < intervals[2],
    `intervals should grow across reps: ${intervals.map((m) => Math.round(m / 86400000) + "d")}`
  );
});
