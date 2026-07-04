import { test } from "node:test";
import assert from "node:assert/strict";
import { canCloze, blankExample, shouldCloze, CLOZE_BLANK, CLOZE_SHARE } from "../../src/store/cardRouting.js";

const tamago = {
  id: "ja-u9l1-tamago", type: "vocab", front: "たまご",
  example: { jp: "たまごをたべます。", en: "I eat an egg." },
};

test("canCloze only when the front is a ≥2-char vocab word present in its example", () => {
  assert.equal(canCloze(tamago), true);
  // kana: no example
  assert.equal(canCloze({ id: "k", type: "kana", front: "あ", example: null }), false);
  // front not a substring of the example (e.g. conjugated)
  assert.equal(canCloze({ id: "x", type: "vocab", front: "たべる", example: { jp: "たべます。", en: "eat" } }), false);
  // 1-char front (could mis-blank inside another word)
  assert.equal(canCloze({ id: "y", type: "vocab", front: "め", example: { jp: "めがいたい。", en: "" } }), false);
  assert.equal(canCloze(null), false);
});

test("blankExample replaces the FIRST occurrence of the front with the blank", () => {
  assert.equal(blankExample(tamago), `${CLOZE_BLANK}をたべます。`);
  // unchanged when the front isn't present
  const jp = "たべます。";
  assert.equal(blankExample({ front: "たべる", example: { jp } }), jp);
});

test("shouldCloze is deterministic and a partial share of eligible items", () => {
  assert.equal(shouldCloze(tamago), shouldCloze(tamago)); // stable
  // an ineligible item never clozes regardless of hash
  assert.equal(shouldCloze({ id: "k", type: "kana", front: "あ", example: null }), false);
  assert.ok(CLOZE_SHARE > 0 && CLOZE_SHARE < 1);
});
