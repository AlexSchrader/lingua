import test from "node:test";
import assert from "node:assert/strict";
import {
  normalizeReading,
  normalizeText,
  checkReading,
  checkMeaning,
  meaningVariants,
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
  assert.equal(normalizeReading("Idée", "fr"), "idee"); // accents fold to ASCII (readings are [a-z])
});

test("Latin-script normalization: accents, ligatures, apostrophes fold to the ASCII reading", () => {
  // Authored readings are plain [a-z] (contract rule) — typed real orthography
  // must converge on them, so "Ça va" matches reading "cava" etc.
  assert.equal(normalizeReading("Ça va", "fr"), "cava");
  assert.equal(normalizeReading("s'il vous plaît", "fr"), "silvousplait");
  assert.equal(normalizeReading("sœur", "fr"), "soeur");
  assert.equal(normalizeReading("très", "fr"), "tres");
  assert.equal(normalizeReading("aujourd'hui", "fr"), "aujourdhui");
  assert.equal(normalizeReading("le week-end", "fr"), "leweekend");
  // And the plain-ASCII typed form matches too (accents optional for the learner).
  assert.equal(normalizeReading("ca va", "fr"), "cava");
});

test("checkReading (fr): real orthography, ASCII, or the exact front all pass", () => {
  const item = { front: "ça va", reading: "cava", lang: "fr" };
  assert.ok(checkReading("ça va", item));
  assert.ok(checkReading("Ça va", item));
  assert.ok(checkReading("ca va", item));
  assert.ok(checkReading("cava", item));
  assert.ok(!checkReading("bonjour", item));
});

test("checkProduce (fr): typed letters always count — the kana on-ramp is ja-only", () => {
  // A Latin-script item accepts typed production at ANY stage; the a1-only
  // rōmaji window applies to Japanese script, not to languages written in letters.
  const a1 = { front: "merci", reading: "merci", lang: "fr", stage: "a1" };
  const a2 = { front: "merci", reading: "merci", lang: "fr", stage: "a2" };
  assert.ok(checkProduce("merci", a1));
  assert.ok(checkProduce("Merci", a2), "fr production must not demand a 'kana' answer at A2");
  // ja behavior unchanged: a2 rejects romaji.
  const ja2 = { front: "ねこ", reading: "neko", lang: "ja", stage: "a2" };
  assert.ok(!checkProduce("neko", ja2));
  assert.ok(checkProduce("ねこ", ja2));
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

test("checkMeaning: a multi-sense gloss accepts EITHER sense (rice/meal)", () => {
  const gohan = { meaning: "rice/meal", accept: [] };
  assert.ok(checkMeaning("rice", gohan), "typed 'rice' should pass");
  assert.ok(checkMeaning("meal", gohan), "typed 'meal' should pass");
  assert.ok(checkMeaning("rice/meal", gohan), "the whole gloss still passes");
  assert.ok(!checkMeaning("bread", gohan));
  // comma- and "or"-separated senses split too.
  const kuru = { meaning: "to come, to arrive", accept: [] };
  assert.ok(checkMeaning("come", kuru), "leading 'to' stripped + comma split");
  assert.ok(checkMeaning("arrive", kuru));
  const iku = { meaning: "come or go", accept: [] };
  assert.ok(checkMeaning("go", iku));
  // articles + parentheticals are forgiven.
  const genki = { meaning: "well (healthy)", accept: ["fine"] };
  assert.ok(checkMeaning("the well", genki) || checkMeaning("well", genki));
  assert.ok(checkMeaning("a fine", genki) || checkMeaning("fine", genki));
});

test("meaningVariants: distinct senses, deduped", () => {
  const v = meaningVariants({ meaning: "rice/meal", accept: ["cooked rice", "meal"] });
  assert.ok(v.includes("rice") && v.includes("meal") && v.includes("cooked rice"));
  assert.equal(new Set(v).size, v.length, "no duplicates");
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

// --- dictation "Can't hear it? Show it" escape ----------------------------------
// The kana path reveals the FRONT and still demands the reading, which is only safe
// because the shown script and the typed script differ. These assertions lock that
// premise, because it silently stops holding for a Latin-script language — where
// revealing the front hands over the answer (TypeCard.jsx reveals the MEANING there
// instead). If either of these flips, the reveal logic needs revisiting.
test("dictation reveal: the kana front is NOT a typeable answer (ja guard holds)", () => {
  const ja = { front: "ねこ", reading: "neko", lang: "ja", meaning: "cat" };
  // rōmaji is required, and the kana front isn't rōmaji — so copying it back fails.
  assert.equal(looksRomaji(ja.front), false);
});

test("dictation reveal: a Latin front IS a typeable answer — so it must not be shown", () => {
  const fr = { front: "le café", reading: "lecafe", lang: "fr", meaning: "coffee" };
  assert.equal(looksRomaji(fr.front), true, "the rōmaji guard is vacuous for Latin script");
  assert.equal(checkReading(fr.front, fr), true, "typing the front verbatim would grade correct");
  // The meaning, which is what the Latin path reveals instead, is not an answer.
  assert.equal(checkReading(fr.meaning, fr), false);
  // The learner still has to produce the French, accents optional.
  assert.equal(checkReading("le cafe", fr), true);
});
