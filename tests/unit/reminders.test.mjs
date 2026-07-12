import { test } from "node:test";
import assert from "node:assert/strict";
import { nextOccurrence } from "../../src/lib/reminders.js";

test("nextOccurrence: a time still ahead today stays today", () => {
  const now = new Date(2026, 6, 11, 8, 0, 0); // 08:00 local
  const t = nextOccurrence("19:00", now);
  assert.equal(t.getDate(), 11);
  assert.equal(t.getHours(), 19);
  assert.equal(t.getMinutes(), 0);
  assert.ok(t.getTime() > now.getTime());
});

test("nextOccurrence: a time already passed rolls to tomorrow", () => {
  const now = new Date(2026, 6, 11, 20, 0, 0); // 20:00 local
  const t = nextOccurrence("19:00", now);
  assert.equal(t.getDate(), 12);
  assert.equal(t.getHours(), 19);
});

test("nextOccurrence: exactly-now rolls to tomorrow (never schedules in the past)", () => {
  const now = new Date(2026, 6, 11, 19, 0, 0);
  const t = nextOccurrence("19:00", now);
  assert.equal(t.getDate(), 12);
  assert.ok(t.getTime() > now.getTime());
});
