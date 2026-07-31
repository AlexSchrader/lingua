import { test } from "node:test";
import assert from "node:assert/strict";
import { canCloze, blankExample, shouldCloze, CLOZE_BLANK, CLOZE_SHARE } from "../../src/store/cardRouting.js";
import { particleAfterFront, canParticleCloze, blankParticle, particleChoices } from "../../src/store/cardRouting.js";
import { sentenceTokens, canSentence, sentenceTiles, shouldTypeReading } from "../../src/store/cardRouting.js";

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

// --- Latin-script (French) in-context cards ---------------------------------
// Same three cards as ja, different script shape: space-delimited and
// sentence-capitalized. These lock the behavior that made them route at all.

const bonjour = {
  id: "fr-u1l1-bonjour", type: "vocab", front: "bonjour", lang: "fr",
  example: { jp: "Bonjour, Marie !", en: "Hello, Marie!" },
};
const lepere = {
  id: "fr-u3l1-lepere", type: "vocab", front: "le père", lang: "fr",
  example: { jp: "C'est le père de Marie.", en: "That's Marie's father." },
};
const jevais = {
  id: "fr-u6l2-jevais", type: "vocab", front: "je vais", lang: "fr",
  example: { jp: "Je vais à la gare", en: "I'm going to the station" },
};

test("fr cloze: the front matches its own sentence-initial capital", () => {
  // The bug this guards: `includes("bonjour")` misses "Bonjour, Marie !".
  assert.equal(canCloze(bonjour), true);
  assert.equal(blankExample(bonjour), `${CLOZE_BLANK}, Marie !`);
  // Whole-word only — "un" must not blank inside "aujourd'hui".
  const un = { id: "fr-x", type: "vocab", front: "un", lang: "fr", example: { jp: "Aujourd'hui, ça va", en: "" } };
  assert.equal(canCloze(un), false);
});

test("fr particle cloze: blanks the article/preposition after the word, options are French", () => {
  assert.equal(canParticleCloze(lepere), true);
  assert.equal(particleAfterFront(lepere).particle, "de");
  assert.equal(blankParticle(lepere), `C'est le père ${CLOZE_BLANK} Marie.`);
  const opts = particleChoices(lepere, 4);
  assert.equal(opts.length, 4);
  assert.equal(opts.filter((o) => o.correct).length, 1);
  assert.equal(opts.find((o) => o.correct).text, "de");
  // No Japanese particles may ever appear on a French card.
  for (const o of opts) assert.ok(!/[぀-ヿ]/u.test(o.text), `ja particle leaked: ${o.text}`);
});

test("fr sentence build: splits on spaces, no punctuation-only tiles, skips multi-turn", () => {
  assert.equal(canSentence(jevais), true);
  assert.deepEqual(sentenceTokens(jevais), ["Je", "vais", "à", "la", "gare"]);
  const spec = sentenceTiles(jevais);
  assert.equal(spec.tiles.length, spec.answer.length + 1, "one distractor tile");
  // Every answer token is available among the tiles, and assembling them in order
  // reproduces the sentence — the exact comparison SentenceCard grades on.
  const pool = [...spec.tiles];
  for (const tok of spec.answer) {
    const i = pool.indexOf(tok);
    assert.ok(i >= 0, `answer token "${tok}" is missing from the tiles`);
    pool.splice(i, 1);
  }
  assert.equal(pool.length, 1, "exactly one tile is left over: the distractor");
  assert.ok(!spec.answer.includes(pool[0]), `distractor "${pool[0]}" must not be a correct token`);
  assert.equal(spec.answer.join(""), sentenceTokens(jevais).join(""));
  // A two-turn exchange is not one buildable sentence.
  const derien = { id: "fr-d", type: "vocab", front: "de rien", lang: "fr", example: { jp: "Merci ! — De rien.", en: "" } };
  assert.equal(canSentence(derien), false);
  // Too short to be a puzzle.
  const short = { id: "fr-s", type: "vocab", front: "salut", lang: "fr", example: { jp: "Salut Paul", en: "" } };
  assert.equal(sentenceTokens(short), null);
});

test("ja in-context cards are unchanged by the Latin path", () => {
  // Regression guard: the ja branch must not pick up word-boundary/case rules.
  assert.equal(canCloze(tamago), true);
  assert.equal(blankExample(tamago), `${CLOZE_BLANK}をたべます。`);
  const kasa = { id: "ja-k", type: "vocab", front: "かさ", example: { jp: "かさをかいます。", en: "" } };
  assert.equal(particleAfterFront(kasa).particle, "を");
  for (const o of particleChoices(kasa, 4)) assert.ok(/[぀-ヿ]/u.test(o.text), "ja options stay kana");
});

test("type:reading is Japanese-only — it would be a copy task in a Latin script", () => {
  // ja: front and reading are different scripts, so typing the reading is a real
  // transliteration test.
  const ja = { id: "ja-u1l1-ohayou", type: "vocab", front: "おはよう", reading: "ohayō", lang: "ja" };
  // fr: reading is just the ASCII fold of the front, so the prompt IS the answer.
  const fr = { id: "fr-u1l1-salut", type: "vocab", front: "salut", reading: "salut", lang: "fr" };
  assert.equal(shouldTypeReading(fr), false, "a French item must never route type:reading");
  // Whatever the hash band does for this particular ja id, the language gate must
  // not be what blocks it — prove the gate is language, not id, by checking a
  // lang-less fixture behaves like ja.
  const bare = { id: ja.id, type: "vocab", front: ja.front, reading: ja.reading };
  assert.equal(shouldTypeReading(bare), shouldTypeReading(ja), "missing lang is treated as ja");
});
