// The climb order a learner is actually served. Today used to walk UNITS in barrel
// (file) order while LABELLING each lesson from its unit's `order`, and French is
// the language where those two disagree: fr-u27 ("Les sons") is deliberately given
// `order: 1`, which shifts every fr A1 unit's order one above its id number. The
// visible result was a French learner opened on "Salutations" printed as "Unit 2",
// with unit 1 queued behind 26 others. These tests pin the invariant, not the fix.
import { test } from "node:test";
import assert from "node:assert/strict";
import { UNITS, orderedUnits, playableLessons } from "../../src/data/index.js";
import { nextMilestone } from "../../src/data/milestones.js";
import { seedItems } from "../../src/data/index.js";

const LANGS = [...new Set(UNITS.map((u) => u.lang))];

test("orderedUnits sorts every language by `order`, contiguously from 1", () => {
  for (const lang of LANGS) {
    const orders = orderedUnits(lang).map((u) => u.order);
    assert.deepEqual(orders, [...orders].sort((a, b) => a - b), `${lang} is not order-sorted`);
    assert.equal(orders[0], 1, `${lang} does not start at order 1`);
    assert.equal(new Set(orders).size, orders.length, `${lang} has duplicate orders`);
  }
});

test("French opens on unit 1 lesson 1 — 'Les sons', not 'Salutations'", () => {
  const first = playableLessons("fr")[0];
  assert.equal(first.id, "fr-u27l1");
  const unit = orderedUnits("fr")[0];
  assert.equal(unit.order, 1);
  assert.equal(unit.title, "Les sons");
  assert.ok(unit.lessons.some((l) => l.id === first.id), "first lesson is not in the order-1 unit");
});

test("REGRESSION GUARD: fr barrel order and climb order genuinely differ", () => {
  // If this ever stops being true the two tests above would pass without the sort,
  // and the defect could come back unnoticed. 27 fr A1 units carry order = id + 1.
  const barrelFirst = UNITS.filter((u) => u.lang === "fr")[0];
  assert.equal(barrelFirst.id, "fr-u1");
  assert.equal(barrelFirst.order, 2, "fr-u1 is expected to sit at order 2, behind Les sons");
  const shifted = UNITS.filter((u) => u.lang === "fr" && +u.id.match(/u(\d+)/)[1] !== u.order);
  assert.equal(shifted.length, 27);
});

test("every lesson is served in its unit's climb order, for every language", () => {
  for (const lang of LANGS) {
    const seq = orderedUnits(lang).flatMap((u) => u.lessons.filter((l) => Array.isArray(l.items)).map(() => u.order));
    assert.deepEqual(seq, [...seq].sort((a, b) => a - b), `${lang} serves lessons out of climb order`);
    // and lessons stay in their authored sequence inside a unit
    for (const u of orderedUnits(lang)) {
      const ns = u.lessons.filter((l) => Array.isArray(l.items)).map((l) => l.lesson);
      assert.deepEqual(ns, [...ns].sort((a, b) => a - b), `${u.id} lessons out of sequence`);
    }
  }
});

test("a French learner is never offered a Japanese milestone as their next goal", () => {
  const seed = seedItems();
  const fresh = {};
  for (const [id, it] of Object.entries(seed)) fresh[id] = { ...it, rung: 0, srs: { stability: 0 } };
  const next = nextMilestone(fresh, ["fr"]);
  assert.ok(next, "a French learner should still have a next goal");
  assert.ok(!/kanji|hiragana|katakana|yōon/i.test(next.label), `got Japanese goal: ${next.label}`);
  assert.ok(!/^Japanese /.test(next.label), `got Japanese goal: ${next.label}`);
});
