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
  assert.equal(first.id, "fr-u1l1");
  const unit = orderedUnits("fr")[0];
  assert.equal(unit.order, 1);
  assert.equal(unit.title, "Les sons");
  assert.ok(unit.lessons.some((l) => l.id === first.id), "first lesson is not in the order-1 unit");
});

test("every unit's id number matches its order, in every language", () => {
  // This replaced a guard that asserted the OPPOSITE for French. fr-u27 "Les sons"
  // was authored last but given order: 1, so 27 fr A1 units carried order = id + 1
  // and the id you read in a file, a commit or a crew message was not the unit the
  // learner met. Alex called that out directly ("why does it say fr u27, this is
  // unit 1 stuff"), so fr-u27 was renumbered to fr-u1 and u1-u26 shifted up one.
  // The two numbers now agree for every unit in every language — keep it that way:
  // a new unit goes at the end, or everything after it renumbers with it.
  const shifted = UNITS.filter((u) => +u.id.match(/u(\d+)/)[1] !== u.order);
  assert.deepEqual(
    shifted.map((u) => `${u.id} sits at order ${u.order}`),
    [],
    "a unit's id number no longer matches the order the learner meets it in"
  );
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
