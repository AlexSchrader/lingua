import test from "node:test";
import assert from "node:assert/strict";
import {
  normalizeReading,
  normalizeText,
  checkReading,
  checkMeaning,
  checkProduce,
  looksRomaji,
  foldKana,
  gradeSpoken,
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

test("vowel folding is Japanese-only: it stays off for other languages", () => {
  // Default (and explicit "ja") folds long vowels — Japanese rōmaji behavior.
  assert.equal(normalizeReading("sensei"), "sense");
  assert.equal(normalizeReading("sensei", "ja"), "sense");
  // A Latin-script language must NOT fold vowel sequences, or real words break:
  // Spanish "leer" (to read) would collapse to "ler", "creer" to "crer".
  assert.equal(normalizeReading("leer", "es"), "leer");
  assert.equal(normalizeReading("creer", "es"), "creer");
  assert.equal(normalizeReading("Idée", "fr"), "idée"); // casefold/trim only, no folding
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

test("checkProduce: A2+ (or no stage) requires Japanese script, rejects rōmaji", () => {
  const item = { front: "おはよう", reading: "ohayō", meaning: "good morning", stage: "a2" };
  assert.ok(checkProduce("おはよう", item));       // kana always counts
  assert.ok(checkProduce("おはよう。", item));     // trailing punctuation tolerated
  assert.ok(!checkProduce("ohayou", item));         // A2+: rōmaji is not production
  assert.ok(!checkProduce("こんにちは", item));     // wrong word
  assert.ok(!checkProduce("", item));
});

test("checkProduce: through A1 the rōmaji on-ramp is accepted (no JP keyboard needed)", () => {
  const item = { front: "ねこ", reading: "neko", meaning: "cat", stage: "a1" };
  assert.ok(checkProduce("ねこ", item));                        // kana still counts
  assert.ok(checkProduce("neko", item));                        // rōmaji accepted ≤ A1
  assert.ok(checkProduce("neko。", item));                      // trailing punctuation tolerated
  assert.ok(checkProduce("neko", { ...item, stage: "pre-a1" })); // pre-a1 too
  assert.ok(!checkProduce("inu", item));                        // wrong reading still fails
  assert.ok(!checkProduce("neko", { ...item, stage: "a2" }));   // but rejected at A2
});

test("checkProduce accepts an optional kana spelling for a kanji-front word (A2, kana required)", () => {
  const item = { front: "猫", kana: "ねこ", reading: "neko", meaning: "cat", stage: "a2" };
  assert.ok(checkProduce("猫", item));    // the kanji front (once learned)
  assert.ok(checkProduce("ねこ", item));  // kana baseline before kanji is learned
  assert.ok(!checkProduce("neko", item)); // rōmaji rejected at A2
});

test("looksRomaji flags Latin-letter input only", () => {
  assert.ok(looksRomaji("neko"));
  assert.ok(!looksRomaji("ねこ"));
  assert.ok(!looksRomaji("猫"));
});

test("foldKana normalizes katakana / long-vowel / small-tsu / punctuation", () => {
  assert.equal(foldKana("カッサ。"), "かさ"); // katakana→hiragana, drop っ and 。
  assert.equal(foldKana("せんせー！"), "せんせ"); // drop ー and ！
  assert.equal(foldKana(" あ り が と う "), "ありがとう"); // drop spaces
});

test("gradeSpoken: lenient reading match (speaking is bonus, never harsh)", () => {
  const kasa = { front: "かさ", reading: "kasa" };
  assert.equal(gradeSpoken("かさ", kasa), "good");     // exact
  assert.equal(gradeSpoken("カサ", kasa), "good");     // STT chose katakana → folds
  assert.equal(gradeSpoken("カッサ。", kasa), "good"); // geminate + punctuation tolerated
  assert.equal(gradeSpoken("かた", kasa), "hard");     // one-sound slip → benefit of the doubt
  assert.equal(gradeSpoken("すし", kasa), "again");    // different word
  assert.equal(gradeSpoken("", kasa), "again");        // nothing heard
});

test("gradeSpoken: accepts romaji + English-homophone transcripts (STT script drift)", () => {
  const ohayou = { front: "おはよう", reading: "ohayō" };
  assert.equal(gradeSpoken("ohayou", ohayou), "good"); // clean romaji reading
  assert.equal(gradeSpoken("Ohio", ohayou), "hard");   // STT heard the English homophone of a correctly-said word
  assert.equal(gradeSpoken("banana", ohayou), "again"); // genuinely wrong
});

test("gradeSpoken: uses optional kana spelling for a kanji-front word", () => {
  const neko = { front: "猫", kana: "ねこ", reading: "neko" };
  assert.equal(gradeSpoken("ねこ", neko), "good");
  assert.equal(gradeSpoken("いぬ", neko), "again");
});
