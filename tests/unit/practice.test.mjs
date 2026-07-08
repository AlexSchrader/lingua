import test from "node:test";
import assert from "node:assert/strict";
import { useStore } from "../../src/store/useStore.js";
import { seedItems, UNITS } from "../../src/data/index.js";
import { newCard } from "../../src/store/srs.js";

// A clean, fully-fresh items map (every item rung 0, fresh FSRS card) — mirrors
// the store's own freshSeed. We setState this directly per test so the shared
// store singleton can't leak learned state between cases (seedOnce would carry
// rung forward, which would inflate the practice pool).
function freshItems() {
  const out = {};
  for (const [id, it] of Object.entries(seedItems())) out[id] = { ...it, srs: newCard() };
  return out;
}

function reset(items = freshItems()) {
  useStore.setState({
    items,
    profile: { onboarded: false, displayName: null, reason: null, reminderTime: null, languages: [], activeLang: null },
  });
  return useStore.getState();
}

test("practicePool/practiceItems: empty when nothing is learned", () => {
  const s = reset();
  assert.equal(s.practicePool(), 0);
  assert.deepEqual(s.practiceItems(20), []);
});

test("practiceItems: only learned items, capped to n, weakest mastery first", () => {
  const items = freshItems();
  const jaIds = Object.values(items).filter((it) => it.lang === "ja").slice(0, 4).map((it) => it.id);
  // Three learned with distinct stabilities; one left fresh (rung 0).
  items[jaIds[0]] = { ...items[jaIds[0]], rung: 2, srs: { ...items[jaIds[0]].srs, stability: 30, reps: 5 } };
  items[jaIds[1]] = { ...items[jaIds[1]], rung: 2, srs: { ...items[jaIds[1]].srs, stability: 2, reps: 1 } };
  items[jaIds[2]] = { ...items[jaIds[2]], rung: 1, srs: { ...items[jaIds[2]].srs, stability: 10, reps: 3 } };
  items[jaIds[3]] = { ...items[jaIds[3]], rung: 0 };
  const s = reset(items);

  assert.equal(s.practicePool(), 3, "3 learned items in the pool");

  const picks = s.practiceItems(2);
  assert.equal(picks.length, 2, "capped to n=2");
  assert.equal(picks[0].id, jaIds[1], "weakest (stability 2) first");
  assert.equal(picks[1].id, jaIds[2], "next weakest (stability 10) second");

  const allIds = s.practiceItems(50).map((it) => it.id);
  assert.ok(!allIds.includes(jaIds[3]), "a rung-0 item is never offered for practice");
});

test("speakingUnlocked: gated until the Pre-A1 kana foundation is complete", () => {
  const preA1Ids = UNITS
    .filter((u) => u.lang === "ja" && (u.stage ?? "a1") === "pre-a1")
    .flatMap((u) => u.lessons.filter((l) => Array.isArray(l.items)).flatMap((l) => l.items))
    .map((d) => d.id);
  assert.ok(preA1Ids.length > 0, "ja has a pre-a1 foundation to gate on");

  // Fresh: nothing learned → locked.
  assert.equal(reset().speakingUnlocked(), false, "fresh account → locked");

  // Learn all but one pre-a1 item → still locked.
  const items = freshItems();
  for (const id of preA1Ids.slice(0, -1)) items[id] = { ...items[id], rung: 1 };
  assert.equal(reset(items).speakingUnlocked(), false, "one kana short → still locked");

  // Learn the last → unlocked.
  const last = preA1Ids[preA1Ids.length - 1];
  items[last] = { ...items[last], rung: 1 };
  assert.equal(reset(items).speakingUnlocked(), true, "whole foundation learned → unlocked");
});
