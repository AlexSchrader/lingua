import test from "node:test";
import assert from "node:assert/strict";
import {
  normalizeReading,
  normalizeText,
  checkReading,
  checkMeaning,
  checkProduce,
  looksRomaji,
} from "../../src/store/answer.js";

test("macron folding: long-vowel forms converge", () => {
  assert.equal(normalizeReading("ohayō"), normalizeReading("ohayou"));
  assert.equal(normalizeReading("ohayō"), normalizeReading("ohayoo"));
  assert.equal(normalizeReading("sayōnara"), normalizeReading("sayounara"));
  assert.equal(normalizeReading("sensei"), normalizeReading("sensē"));
});

test("a genuine reading miss still fails", () => {
  assert.notEqual(normalizeReading("ohayou"), normalizeReading("konnichiwa"));
});

test("checkReading accepts romaji (folded) or the kana itself", () => {
  const item = { front: "おはよう", reading: "ohayō" };
  assert.ok(checkReading("ohayou", item));
  assert.ok(checkReading("OHAYŌ", item));
  assert.ok(checkReading("おはよう", item)); // typed the kana
  assert.ok(!checkReading("konnichiwa", item));
});

test("normalizeText trims, lowercases, strips trailing punctuation", () => {
  assert.equal(normalizeText("  Hello "), "hello");
  assert.equal(normalizeText("Good morning!"), "good morning");
  assert.equal(normalizeText("hello"), "hello");
});

test("checkMeaning honors canonical + accept[]", () => {
  const item = { meaning: "hello", accept: ["hi"] };
  assert.ok(checkMeaning(" Hello ", item));
  assert.ok(checkMeaning("hi", item));
  assert.ok(!checkMeaning("goodbye", item));
  assert.ok(!checkMeaning("", item));
});

test("checkProduce (Type JP) requires Japanese, rejects romaji", () => {
  const item = { front: "おはよう", reading: "ohayō", meaning: "good morning" };
  assert.ok(checkProduce("おはよう", item));       // typed the kana on a JP keyboard
  assert.ok(checkProduce("おはよう。", item));     // trailing punctuation tolerated
  assert.ok(!checkProduce("ohayou", item));         // romaji is NOT production — reading card's job
  assert.ok(!checkProduce("こんにちは", item));     // wrong word
  assert.ok(!checkProduce("", item));
});

test("checkProduce accepts an optional kana spelling for a kanji-front word", () => {
  const item = { front: "猫", kana: "ねこ", reading: "neko", meaning: "cat" };
  assert.ok(checkProduce("猫", item));   // the kanji front (once learned)
  assert.ok(checkProduce("ねこ", item)); // kana baseline before kanji is learned
  assert.ok(!checkProduce("neko", item));
});

test("looksRomaji flags Latin-letter input only", () => {
  assert.ok(looksRomaji("neko"));
  assert.ok(!looksRomaji("ねこ"));
  assert.ok(!looksRomaji("猫"));
});
