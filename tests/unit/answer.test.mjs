import test from "node:test";
import assert from "node:assert/strict";
import {
  normalizeReading,
  normalizeText,
  checkReading,
  checkMeaning,
  checkProduce,
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

test("checkProduce accepts the kana or its reading", () => {
  const item = { front: "おはよう", reading: "ohayō", meaning: "good morning" };
  assert.ok(checkProduce("おはよう", item));
  assert.ok(checkProduce("ohayou", item)); // romaji of the reading
  assert.ok(!checkProduce("こんにちは", item));
});
