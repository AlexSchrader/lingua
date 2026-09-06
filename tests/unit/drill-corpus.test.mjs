// Every AUTHORED drill in the corpus, asserted as content. tests/unit/drill-routing.test.mjs
// covers the engine seam (practice(), the fallback, gloss/anchor agreement) on synthetic
// items; nothing asserted anything about the 3,875 drills actually in src/data.
//
// A drill is content authored for ONE purpose: to give cloze:choice, particle:choice
// and sentence:build a sentence they can actually take apart, where the item's own
// `example` teaches in a shape they cannot split. That makes it uniquely easy to get
// silently wrong — a drill that passes every lint rule and routes NOTHING costs a
// reviewer's attention and reads in the source as an intentional decision. Nothing
// in validate:content or lint:curriculum can catch it, because the question is not
// "is this well-formed" but "does the router do anything with it".
//
// So these lock the properties that make a drill worth its line in the corpus.
import { test } from "node:test";
import assert from "node:assert/strict";
import { UNITS } from "../../src/data/index.js";
import {
  practice,
  canCloze,
  canParticleCloze,
  canSentence,
  blankExample,
  blankParticle,
  findFrontInExample,
  CLOZE_BLANK,
} from "../../src/store/cardRouting.js";

const items = [];
for (const unit of UNITS)
  for (const lesson of unit.lessons)
    for (const def of lesson.items ?? []) items.push({ ...def, lang: unit.lang });

const drilled = items.filter((i) => i.drill);

// Guards every assertion below: if the corpus or the drills ever stop loading,
// these must fail loudly rather than pass vacuously over an empty array.
test("the corpus and its drills are actually loaded", () => {
  assert.ok(items.length > 10000, `expected the full corpus, got ${items.length} items`);
  assert.ok(drilled.length > 1000, `expected the authored drills, got ${drilled.length}`);
});

// The reason the field exists. A drill that no card can use is dead weight.
test("every authored drill routes at least one in-context card", () => {
  const dead = drilled.filter((i) => !canCloze(i) && !canParticleCloze(i) && !canSentence(i));
  assert.deepEqual(
    dead.map((i) => `${i.id} (front "${i.front}"): ${i.drill.jp}`),
    [],
    "these drills route nothing — remove them or fix the sentence"
  );
});

// A drill REPLACES the example for routing purposes, so a careless one can take a
// card away instead of adding one. That is strictly worse than not authoring it.
test("no drill costs its item a card the example already earned", () => {
  const worse = [];
  for (const i of drilled) {
    const bare = { ...i };
    delete bare.drill;
    const had2 = canParticleCloze(bare) || canCloze(bare);
    const has2 = canParticleCloze(i) || canCloze(i);
    if (had2 && !has2) worse.push(`${i.id}: lost its rung-2 card`);
    if (canSentence(bare) && !canSentence(i)) worse.push(`${i.id}: lost sentence:build`);
  }
  assert.deepEqual(worse, [], "these drills routed AWAY a card the example supported");
});

// Only vocab reaches a drill-consuming card (canCloze/canParticleCloze/canSentence
// all require it), so a drill on a kana or kanji item can never fire. The contract
// rejects it; this is the corpus-level check that none slipped in another way.
test("only vocab items carry a drill", () => {
  const bad = drilled.filter((i) => i.type !== "vocab").map((i) => `${i.id} (${i.type})`);
  assert.deepEqual(bad, []);
});

// The card shows one blank and asks for one word. Two blanks is unanswerable.
test("every cloze built from a drill blanks exactly one span", () => {
  for (const i of drilled.filter(canCloze)) {
    const blanked = blankExample(i);
    assert.equal(
      blanked.split(CLOZE_BLANK).length - 1,
      1,
      `${i.id}: expected exactly one blank, got "${blanked}"`
    );
    assert.notEqual(blanked, i.drill.jp, `${i.id}: nothing was blanked`);
  }
  for (const i of drilled.filter(canParticleCloze)) {
    const blanked = blankParticle(i);
    assert.equal(
      blanked.split(CLOZE_BLANK).length - 1,
      1,
      `${i.id}: expected exactly one particle blank, got "${blanked}"`
    );
  }
});

// The card is ABOUT this item: the front has to be locatable in the sentence the
// card is built from, or the learner is being graded on a word that isn't there.
test("every drill contains its own front where the router can find it", () => {
  const missing = drilled
    .filter((i) => !findFrontInExample(i))
    .map((i) => `${i.id} (front "${i.front}"): ${i.drill.jp}`);
  assert.deepEqual(missing, []);
});

// Both halves of the pair must come from the SAME sentence. ClozeCard and
// SentenceCard render practice(item).en beside a blank/tiles derived from
// practice(item).jp; if a drill supplied only one of them the card would
// show the translation of a different sentence than the one it is asking about.
test("a drill supplies both halves of its sentence", () => {
  const lopsided = drilled
    .filter((i) => !i.drill.jp?.trim() || !i.drill.en?.trim())
    .map((i) => i.id);
  assert.deepEqual(lopsided, []);
});

// The fallback is what keeps every undrilled item routing exactly as it did before
// the field existed. If this ever inverts, ~10,000 items change behaviour silently.
test("practice prefers the drill and falls back to the example", () => {
  const withDrill = drilled[0];
  assert.equal(practice(withDrill), withDrill.drill);

  const withoutDrill = items.find((i) => !i.drill && i.example);
  assert.ok(withoutDrill, "expected at least one undrilled item with an example");
  assert.equal(practice(withoutDrill), withoutDrill.example);

  // practice() is a plain `?? ` chain, so a missing sentence comes back falsy
  // rather than normalised to null. Asserted as it behaves, not as I'd have written it.
  assert.ok(!practice({ example: null }));
  assert.ok(!practice(undefined));
});
