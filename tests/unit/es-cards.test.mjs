// Spanish card-routing invariants, asserted against the REAL corpus.
//
// The mirror of tests/unit/fr-cards.test.mjs, and it exists because French had this
// enforcement and Spanish did not. That asymmetry was the actual risk: the particle
// card's "governed preposition" rule was locked in one Latin language and honour-system
// in the other, so any widening of the Spanish function-word list would have landed
// unchecked. Written 2026-08-29 alongside that widening question — and it is what makes
// the widening safe to do LATER, with corpus evidence, rather than now on faith.
//
// The rule these encode: the blanked word must be a preposition GOVERNED by the word
// before the blank. A conjunction joins two things and belongs to neither; an article
// belongs to the noun that FOLLOWS it. Blanking either grades the learner on a fact
// about the item that the sentence never tested.
import { test } from "node:test";
import assert from "node:assert/strict";
import { UNITS } from "../../src/data/index.js";
import { canParticleCloze, particleAfterFront, blankParticle, particleChoices, CLOZE_BLANK } from "../../src/store/cardRouting.js";

const esItems = [];
for (const unit of UNITS)
  if (unit.lang === "es")
    for (const lesson of unit.lessons)
      for (const def of lesson.items ?? []) esItems.push({ ...def, lang: "es" });

// Guards every assertion below: if Spanish ever stops loading, these must fail loudly
// rather than pass vacuously over an empty array.
test("the Spanish corpus is actually loaded", () => {
  assert.ok(esItems.length > 500, `expected the full Spanish corpus, got ${esItems.length} items`);
});

// --- particle card: the blank must be GOVERNED by the item ---------------------

// Coordinating conjunctions (y/e/o/u, pero, sino) join two things and belong to
// neither. Articles and the contractions del/al belong to the noun that follows.
const NOT_GOVERNED = [
  "y", "e", "o", "u", "pero", "sino", "ni", "que",
  "el", "la", "los", "las", "un", "una", "unos", "unas", "lo", "del", "al",
];

test("no Spanish particle card blanks a word the item doesn't govern", () => {
  const routing = esItems.filter(canParticleCloze);
  assert.ok(routing.length > 20, `expected a real particle-card population, got ${routing.length}`);

  const bad = routing
    .map((it) => ({ id: it.id, front: it.front, blank: particleAfterFront(it).particle.toLowerCase() }))
    .filter((r) => NOT_GOVERNED.includes(r.blank));

  assert.deepEqual(
    bad,
    [],
    `these blank a word not governed by the item:\n${bad.map((b) => `  ${b.id} (front "${b.front}") blanks "${b.blank}"`).join("\n")}`
  );
});

test("every Spanish particle card blanks exactly one word and offers the answer among its options", () => {
  for (const it of esItems.filter(canParticleCloze)) {
    const blanked = blankParticle(it);
    const hits = blanked.split(CLOZE_BLANK).length - 1;
    assert.equal(hits, 1, `${it.id}: expected exactly one blank, got ${hits} — "${blanked}"`);

    // Options are { text, correct } objects (particleChoices), not bare strings.
    const answer = particleAfterFront(it).particle;
    const options = particleChoices(it);
    const correct = options.filter((o) => o.correct);
    assert.equal(correct.length, 1, `${it.id}: expected exactly 1 correct option`);
    assert.equal(
      correct[0].text.toLowerCase(),
      answer.toLowerCase(),
      `${it.id}: the option marked correct is not the blanked word`
    );
    const texts = options.map((o) => o.text.toLowerCase());
    assert.equal(new Set(texts).size, texts.length, `${it.id}: duplicate options ${texts.join(", ")}`);
  }
});

test("a Spanish particle card never blanks the item's own front", () => {
  for (const it of esItems.filter(canParticleCloze)) {
    const answer = particleAfterFront(it).particle.toLowerCase();
    assert.notEqual(
      answer,
      String(it.front).toLowerCase(),
      `${it.id}: the blank IS the item — the prompt would be its own answer`
    );
  }
});
