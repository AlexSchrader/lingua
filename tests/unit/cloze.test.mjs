import { test } from "node:test";
import assert from "node:assert/strict";
import { canCloze, blankExample, shouldCloze, CLOZE_BLANK, CLOZE_SHARE } from "../../src/store/cardRouting.js";
import { particleAfterFront, canParticleCloze, blankParticle, particleChoices } from "../../src/store/cardRouting.js";
import { sentenceTokens, canSentence, sentenceTiles } from "../../src/store/cardRouting.js";

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

// --- particle cloze ---------------------------------------------------------

const kasa = { id: "ja-u1l2-kasa", type: "vocab", front: "かさ", example: { jp: "かさをどうぞ。", en: "Please take an umbrella." } };
const sora = { id: "s", type: "vocab", front: "そら", example: { jp: "そらはあおいです。", en: "The sky is blue." } };
const shizuka = { id: "z", type: "vocab", front: "しずか", example: { jp: "ここはしずかです。", en: "It is quiet here." } };

test("particleAfterFront anchors on the word boundary and skips the copula です", () => {
  assert.deepEqual(particleAfterFront(kasa), { particle: "を", index: 2 });   // かさ|を
  assert.equal(particleAfterFront(sora).particle, "は");                       // そら|は (topic)
  assert.equal(particleAfterFront(shizuka), null);                            // しずか|です → で is copula, not particle
  assert.equal(particleAfterFront({ type: "vocab", front: "ねこ", example: { jp: "ねこ。" } }), null); // no particle after
  assert.equal(particleAfterFront(null), null);
});

test("canParticleCloze / blankParticle blank exactly the anchored particle", () => {
  assert.equal(canParticleCloze(kasa), true);
  assert.equal(canParticleCloze(shizuka), false);
  assert.equal(blankParticle(kasa), `かさ${CLOZE_BLANK}どうぞ。`);
  assert.equal(blankParticle(sora), `そら${CLOZE_BLANK}あおいです。`);
});

test("particleChoices returns the correct particle + distractor particles", () => {
  const opts = particleChoices(kasa, 4);
  assert.equal(opts.length, 4);
  assert.equal(opts.filter((o) => o.correct).length, 1);
  assert.equal(opts.find((o) => o.correct).text, "を");
  // every option is a single-kana core particle, all distinct
  const texts = opts.map((o) => o.text);
  assert.equal(new Set(texts).size, texts.length);
  assert.ok(opts.every((o) => "はがをにへでともの".includes(o.text)));
});

// --- sentence builder -------------------------------------------------------

test("sentenceTokens splits [word][particle][rest] only when the word leads", () => {
  assert.deepEqual(sentenceTokens({ type: "vocab", front: "すし", example: { jp: "すしをたべます。" } }), ["すし", "を", "たべます"]);
  assert.deepEqual(sentenceTokens({ type: "vocab", front: "そら", example: { jp: "そらはあおいです。" } }), ["そら", "は", "あおいです"]);
  assert.equal(sentenceTokens({ type: "vocab", front: "しずか", example: { jp: "ここはしずかです。" } }), null); // word not at start
  assert.equal(sentenceTokens({ type: "vocab", front: "すし", example: { jp: "すしです。" } }), null); // で is the copula, not a particle
  assert.equal(sentenceTokens({ type: "vocab", front: "かさ", example: { jp: "かさ。" } }), null); // no remainder
  assert.ok(canSentence({ type: "vocab", front: "すし", example: { jp: "すしをたべます。" } }));
  assert.ok(!canSentence({ type: "kana", front: "あ", example: null }));
});

test("sentenceTiles = ordered answer + exactly one distractor particle", () => {
  const { answer, tiles } = sentenceTiles({ type: "vocab", front: "すし", example: { jp: "すしをたべます。" } });
  assert.deepEqual(answer, ["すし", "を", "たべます"]);
  assert.equal(tiles.length, 4);
  for (const tok of answer) assert.ok(tiles.includes(tok));
  const extra = [...tiles];
  for (const tok of answer) extra.splice(extra.indexOf(tok), 1);
  assert.equal(extra.length, 1);
  assert.ok("はがをにへでともの".includes(extra[0]) && extra[0] !== "を"); // a particle, not the correct one
});
