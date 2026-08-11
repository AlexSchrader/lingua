// Guards the invariant that let a commit titled "sounds unit runs first" ship a
// unit that ran 27th of 27: `unit.order` is only a DISPLAY field. Today.jsx picks
// the next lesson with `UNITS.filter(u => u.lang === id).flatMap(u => u.lessons)`
// — i.e. by ARRAY POSITION — while Ladder.jsx sorts the same units by `order`.
// When the two disagree, the daily loop serves one lesson and the Ladder's
// "You're here" rung points at another, permanently. Nothing else in the repo
// checks this: validateContent only checks that `order` is contiguous.
import test from "node:test";
import assert from "node:assert/strict";
import { UNITS } from "../../src/data/index.js";

const langs = [...new Set(UNITS.map((u) => u.lang))];

test("every language's units sit in the UNITS array in `order` sequence", () => {
  for (const lang of langs) {
    const units = UNITS.filter((u) => u.lang === lang);
    const arrayOrder = units.map((u) => u.id);
    const byOrderField = [...units].sort((a, b) => a.order - b.order).map((u) => u.id);
    assert.deepEqual(
      arrayOrder,
      byOrderField,
      `${lang}: UNITS array position disagrees with the \`order\` field. ` +
        `Today.jsx would serve "${arrayOrder[0]}" while Ladder marks "${byOrderField[0]}". ` +
        `Fix the array literal in src/data/index.js, not the order field.`
    );
  }
});

test("a language's units are contiguous in the UNITS array", () => {
  // Interleaving two languages would make flatMap-based sequencing depend on
  // filter order in ways the `order` field can't express.
  for (const lang of langs) {
    const positions = UNITS.map((u, i) => (u.lang === lang ? i : -1)).filter((i) => i >= 0);
    const span = positions[positions.length - 1] - positions[0] + 1;
    assert.equal(span, positions.length, `${lang}: units are interleaved with another language`);
  }
});

test("French opens on the sounds unit, not on greetings", () => {
  // The specific regression: fr-u27 "Les sons" is the phonics on-ramp and has to
  // precede the 545 words whose spelling it explains.
  const fr = UNITS.filter((u) => u.lang === "fr");
  const firstPlayable = fr.flatMap((u) => u.lessons.filter((l) => Array.isArray(l.items)))[0];
  assert.equal(firstPlayable.id, "fr-u27l1");
});

test("Japanese still opens on unit 1 lesson 1", () => {
  const ja = UNITS.filter((u) => u.lang === "ja");
  const firstPlayable = ja.flatMap((u) => u.lessons.filter((l) => Array.isArray(l.items)))[0];
  assert.equal(firstPlayable.id, "ja-u1l1");
});
