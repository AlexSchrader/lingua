import test from "node:test";
import assert from "node:assert/strict";
import {
  practice, findFrontInExample, canCloze, blankExample, canSentence, sentenceTokens,
  sentenceTiles, canParticleCloze, particleAfterFront, blankParticle, CLOZE_BLANK,
} from "../../src/store/cardRouting.js";

// `example` teaches and may be long, subordinate and B2-complex. `drill` is the short
// second sentence authored so the engine can take it apart. Every card that BLANKS,
// TOKENIZES or ANCHORS INTO a sentence must read the SAME one — and so must the gloss
// the card prints under it, or the learner sees one sentence with a blank in it
// captioned by a different sentence. That mismatch is silent: both fields are non-empty
// strings, so it renders fine and only a reader would catch it.

const base = {
  id: "fr-u1l1-x", type: "vocab", lang: "fr", front: "la comparaison", reading: "lacomparaison",
  meaning: "the comparison", accept: [],
  // Long, punctuated, and doing real teaching work — exactly what must not be shortened.
  example: {
    jp: "La comparaison entre les deux villes est intéressante, même si elle reste incomplète.",
    en: "The comparison between the two cities is interesting, even if it stays incomplete.",
  },
};
const withDrill = {
  ...base,
  drill: { jp: "La comparaison entre les villes", en: "The comparison between the cities" },
};

test("practice() prefers the drill and falls back to the example", () => {
  assert.equal(practice(withDrill).jp, withDrill.drill.jp);
  assert.equal(practice(base).jp, base.example.jp);
  assert.equal(practice(undefined), undefined);
  assert.equal(practice({}), undefined);
});

test("an item WITHOUT a drill behaves exactly as before", () => {
  // The whole corpus is in this state today, so this is the no-regression assertion.
  assert.ok(findFrontInExample(base));
  assert.equal(canCloze(base), true);
  assert.ok(blankExample(base).includes(CLOZE_BLANK));
  assert.ok(blankExample(base).startsWith(CLOZE_BLANK) || blankExample(base).includes("entre"));
  // The example is long and punctuated, so it cannot tile — which is the defect drills exist for.
  assert.equal(canSentence(base), false);
});

test("an item WITH a drill clozes from the DRILL, not the example", () => {
  const blanked = blankExample(withDrill);
  assert.ok(blanked.includes(CLOZE_BLANK), "the drill must be blanked");
  assert.ok(!blanked.includes("intéressante"), "must not fall back to the example");
  assert.ok(blanked.includes("les villes"), `blanked the wrong sentence: ${blanked}`);
  assert.equal(blanked.split(CLOZE_BLANK).length - 1, 1, "exactly one blank");
});

test("a drill makes sentence:build reachable where the example never could", () => {
  assert.equal(canSentence(base), false, "the long example cannot tile");
  assert.equal(canSentence(withDrill), true, "the drill can");
  const toks = sentenceTokens(withDrill);
  assert.ok(toks.length >= 3 && toks.length <= 8, `expected 3-8 tiles, got ${toks.length}`);
  assert.ok(!toks.some((t) => t.includes("intéressante")), "tiles came from the example");
  const tiled = sentenceTiles(withDrill);
  assert.deepEqual(tiled.answer, toks, "the answer is the drill's tokens");
  assert.ok(tiled.tiles.length >= toks.length, "tiles include the answer plus any distractor");
});

// THE REGRESSION THAT WOULD OTHERWISE SHIP SILENTLY.
test("the gloss a card prints comes from the same sentence the router used", () => {
  // The cards render `practice(item)?.en`. Asserting the accessor's two halves stay
  // paired is what stops a blanked drill being captioned by the example's translation.
  for (const item of [base, withDrill]) {
    const sentence = practice(item);
    // The blanked string IS practice().jp with the front swapped for the blank —
    // assert that directly rather than by resemblance.
    const blanked = blankExample(item);
    const rebuilt = blanked.replace(CLOZE_BLANK, item.front);
    assert.equal(
      rebuilt.toLowerCase(),
      sentence.jp.toLowerCase(),
      "the blanked sentence is not practice().jp"
    );
    assert.equal(sentence.en, item.drill ? item.drill.en : item.example.en);
  }
  // And the pairing is the point: gloss and sentence never come from different fields.
  assert.notEqual(practice(withDrill).en, withDrill.example.en);
});

// The particle helpers are NOT inert with respect to this change, despite Japanese
// having no drills: particleAfterFront takes its index from findFrontInExample and
// then slices the sentence itself. If the finder reads the drill while the slice reads
// the example, it cuts the wrong string at the wrong offset — a mis-blanked particle,
// not a no-op. They move together or not at all.
test("the particle anchor and its slice read the same sentence", () => {
  const item = {
    ...base, front: "la comparaison",
    example: { jp: "La comparaison avec les autres est difficile.", en: "x" },
    drill: { jp: "La comparaison entre les villes", en: "y" },
  };
  assert.equal(canParticleCloze(item), true);
  const found = particleAfterFront(item);
  assert.equal(found.particle, "entre", "must anchor in the DRILL, not the example's 'avec'");
  const blanked = blankParticle(item);
  assert.ok(blanked.includes(CLOZE_BLANK));
  assert.ok(!blanked.includes("avec"), "blanked the example instead of the drill");
  assert.ok(blanked.includes("La comparaison"), `wrong sentence: ${blanked}`);
});
