import { test } from "node:test";
import assert from "node:assert/strict";
import { seedItems, UNITS } from "../../src/data/index.js";
import { MASTERY_FULL_DAYS } from "../../src/store/mastery.js";
import {
  milestoneCatalog,
  earnedMilestones,
  nextMilestone,
  milestoneSummary,
  milestonesFor,
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

test("level milestones are per-language — a new language never moves another's goalposts", () => {
  const levels = milestoneCatalog().filter((m) => m.family === "level");
  // ja keeps its ORIGINAL un-suffixed ids (persisted earned ids must survive),
  // and its A1 denominator counts only ja items.
  const jaA1 = levels.find((m) => m.id === "level-A1");
  assert.ok(jaA1, "legacy level-A1 id exists");
  assert.equal(jaA1.label, "Japanese A1 complete");
  // fr items must NOT be in ja's denominator. cefr lives on the LESSON (seedItems
  // stamps stage, not cefr), so count from UNITS directly.
  const countBand = (lang, band) => {
    let n = 0;
    for (const u of UNITS)
      if (u.lang === lang)
        for (const l of u.lessons) if (Array.isArray(l.items) && l.cefr === band) n += l.items.length;
    return n;
  };
  const frDefs = Object.values(SEED).filter((d) => d.lang === "fr");
  assert.ok(frDefs.length > 0, "fr content is live");
  assert.equal(jaA1.progress({}).need, countBand("ja", "A1"), "ja A1 counts only ja items");
  const frA1 = levels.find((m) => m.id === "level-A1-fr");
  assert.ok(frA1, "French gets its own suffixed level id");
  assert.equal(frA1.progress({}).need, frDefs.length);
  // Recognizing every ja A1 item earns ja's A1 WITHOUT touching French.
  const m = {};
  for (const d of Object.values(SEED)) {
    if (d.lang === "ja") m[d.id] = { ...d, rung: 1 };
  }
  // only the A1-band ja items matter for level-A1; ranging all ja is a superset
  assert.ok(earnedMilestones(m).includes("level-A1"), "ja A1 earned with zero French progress");
  assert.ok(!earnedMilestones(m).includes("level-A1-fr"));
});

// Regression: shipping French must not move a Japanese-only learner's denominator
// or show them a locked badge for a track they never opted into.
test("milestonesFor scopes level milestones to started languages", () => {
  const jaOnly = milestonesFor(["ja"]);
  const both = milestonesFor(["ja", "fr"]);
  const ids = (list) => list.map((m) => m.id);

  assert.ok(ids(jaOnly).includes("level-A1"), "ja learner keeps their own level milestones");
  assert.ok(!ids(jaOnly).includes("level-A1-fr"), "ja-only learner sees no French badge");
  assert.ok(ids(both).includes("level-A1-fr"), "a French learner does see it");

  // Cross-language capability counts are visible to everyone, by design.
  for (const id of ["read-first", "vocab-first", "read-100"]) {
    assert.ok(ids(jaOnly).includes(id), `${id} is cross-language and stays visible`);
  }

  // The denominator a ja-only learner sees is unchanged by French existing.
  const frLevels = milestoneCatalog().filter((m) => m.lang === "fr");
  assert.ok(frLevels.length > 0, "French level milestones exist in the full catalog");
  assert.equal(both.length, jaOnly.length + frLevels.length);
});

test("milestonesFor([]) still shows the cross-language milestones only", () => {
  const none = milestonesFor([]);
  assert.ok(none.length > 0);
  assert.ok(none.every((m) => !m.lang), "no per-language milestone leaks through");
});
