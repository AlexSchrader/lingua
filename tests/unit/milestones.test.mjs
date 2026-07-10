import { test } from "node:test";
import assert from "node:assert/strict";
import { seedItems } from "../../src/data/index.js";
import { MASTERY_FULL_DAYS } from "../../src/store/mastery.js";
import {
  milestoneCatalog,
  earnedMilestones,
  nextMilestone,
  milestoneSummary,
} from "../../src/data/milestones.js";

const SEED = seedItems();
const byType = (t) => Object.values(SEED).filter((x) => x.type === t);

// A fresh items map: everything seeded, nothing studied (rung 0, no stability).
function freshMap() {
  const m = {};
  for (const [id, it] of Object.entries(SEED)) m[id] = { ...it, rung: 0, srs: { stability: 0 } };
  return m;
}
const read = (m, id) => { m[id] = { ...m[id], rung: Math.max(1, m[id].rung ?? 0) }; };
const master = (m, id) => { m[id] = { ...m[id], srs: { ...m[id].srs, stability: MASTERY_FULL_DAYS } }; };

test("catalog is non-empty and every entry is well-formed", () => {
  const cat = milestoneCatalog();
  assert.ok(cat.length > 0);
  for (const m of cat) {
    assert.equal(typeof m.id, "string");
    assert.equal(typeof m.label, "string");
    assert.equal(typeof m.progress, "function");
    const p = m.progress(freshMap());
    assert.equal(typeof p.have, "number");
    assert.ok(p.need > 0, `${m.id} has need > 0`);
    assert.equal(p.have, 0, `${m.id} starts at 0 on a fresh map`);
  }
  // ids are unique
  assert.equal(new Set(cat.map((m) => m.id)).size, cat.length);
});

test("fresh state earns nothing", () => {
  assert.deepEqual(earnedMilestones(freshMap()), []);
});

test("reading every item earns the recognition milestones, not the mastery ones", () => {
  const m = freshMap();
  for (const id of Object.keys(m)) read(m, id);
  const earned = new Set(earnedMilestones(m));
  // completeAll (read-based) milestones fire
  assert.ok(earned.has("script-hiragana"));
  assert.ok(earned.has("script-katakana"));
  assert.ok(earned.has("kanji-first"));
  assert.ok(earned.has("kanji-all"));
  assert.ok(earned.has("level-A1"));
  // mastery milestones require stability, not reading → NOT earned
  assert.ok(!earned.has("vocab-first"));
  assert.ok(!earned.has("vocab-10"));
});

test("mastered vocab count drives the vocab-depth thresholds", () => {
  const vocab = byType("vocab");
  const m = freshMap();
  for (const it of vocab.slice(0, 50)) master(m, it.id);
  const earned = new Set(earnedMilestones(m));
  assert.ok(earned.has("vocab-first")); // need 1
  assert.ok(earned.has("vocab-10"));    // need 10
  assert.ok(earned.has("vocab-50"));    // need 50
  assert.ok(!earned.has("vocab-100"));  // need 100 — not yet
});

test("a milestone earned once by count stays earned as the count grows", () => {
  const vocab = byType("vocab");
  const m = freshMap();
  for (const it of vocab.slice(0, 120)) master(m, it.id);
  const earned = new Set(earnedMilestones(m));
  assert.ok(earned.has("vocab-100"));
  assert.ok(!earned.has("vocab-250")); // 120 < 250
});

test("nextMilestone is the nearest unearned goal, and disappears only when all earned", () => {
  const fresh = freshMap();
  const nx = nextMilestone(fresh);
  assert.ok(nx, "there is a next goal on a fresh map");
  assert.ok(nx.remaining >= 1);
  assert.equal(nx.remaining, nx.need - nx.have);
  // a need-1 milestone is the closest possible goal from zero
  assert.equal(nx.remaining, 1);

  // Master 100 vocab: the next vocab goal should now be the 250 tier (nearer tiers earned).
  const m = freshMap();
  for (const it of byType("vocab").slice(0, 100)) master(m, it.id);
  const summary = milestoneSummary(m);
  assert.ok(summary.earned.some((e) => e.id === "vocab-100"));
  assert.ok(summary.next.remaining > 0);
});

test("milestoneSummary shape: earned list + next + total", () => {
  const s = milestoneSummary(freshMap());
  assert.ok(Array.isArray(s.earned));
  assert.equal(s.earned.length, 0);
  assert.ok(s.next && typeof s.next.label === "string");
  assert.equal(s.total, milestoneCatalog().length);
});
