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
  assert.equal(normalizeReading("ohayō", "ja"), normalizeReading("ohayou", "ja"));
  assert.equal(normalizeReading("ohayō", "ja"), normalizeReading("ohayoo", "ja"));
  assert.equal(normalizeReading("sayōnara", "ja"), normalizeReading("sayounara", "ja"));
  assert.equal(normalizeReading("sensei", "ja"), normalizeReading("sensē", "ja"));
});

test("a genuine reading miss still fails", () => {
  assert.notEqual(normalizeReading("ohayou", "ja"), normalizeReading("konnichiwa", "ja"));
});

test("vowel folding is Japanese-only: it stays off for other languages", () => {
  // Explicit "ja" folds long vowels — Japanese rōmaji behavior. Omitting the language
  // no longer means Japanese: it means "no language-specific folding", so a caller that
  // forgets cannot silently apply one language's rules to another's reading.
  assert.equal(normalizeReading("sensei", "ja"), "sense");
  assert.equal(normalizeReading("sensei"), "sensei", "no language → no Japanese folding");
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

test("Norwegian ø folds to o, like æ and å", () => {
  // ø is a base letter, not a diacritic: NFD does not decompose it, so without an
  // explicit rule it survived the fold and every ø reading lost the case- and
  // space-tolerance every other card gets. å folds via NFD and æ has its own rule;
  // ø now has one too. 39 Norwegian fronts carry it; zero es/fr/ja items do.
  assert.equal(normalizeReading("et brød", "no"), "etbrod");
  assert.equal(normalizeReading("Et brød", "no"), "etbrod");
  assert.equal(normalizeReading("etbrød", "no"), "etbrod");
  assert.equal(normalizeReading("ei øy", "no"), "eioy");
  // å and æ keep working beside it.
  assert.equal(normalizeReading("en båt", "no"), "enbat");
  assert.equal(normalizeReading("nær", "no"), "naer");
});

test("checkReading (no): a ø card accepts the real spelling and the ASCII one", () => {
  const item = { front: "et brød", reading: "etbrod", lang: "no" };
  assert.ok(checkReading("et brød", item));
  assert.ok(checkReading("Et brød", item), "sentence-initial capital must pass");
  assert.ok(checkReading("etbrød", item), "spacing must be optional, as elsewhere");
  assert.ok(checkReading("etbrod", item));
  assert.ok(!checkReading("en bil", item));
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
  const item = { lang: "ja", front: "おはよう", reading: "ohayō" };
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

test("normalizeText folds curly/smart apostrophes to a straight ASCII '", () => {
  // Phone keyboards insert U+2019 by default — it must not fail an otherwise-correct answer.
  assert.equal(normalizeText("you’re welcome"), "you're welcome");
  assert.equal(normalizeText("you’re welcome"), normalizeText("you're welcome"));
  assert.equal(normalizeText("it’s nothing"), "it's nothing");
});

test("checkMeaning accepts a smart-apostrophe answer (de rien playtest bug)", () => {
  const item = { meaning: "you're welcome", accept: ["it's nothing", "no problem"] };
  assert.ok(checkMeaning("you’re welcome", item), "curly apostrophe must match the straight-quote answer");
  assert.ok(checkMeaning("it’s nothing", item), "curly apostrophe must match an accept[] entry");
  assert.ok(checkMeaning("you're welcome", item));
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
  const ohayou = { lang: "ja", front: "おはよう", reading: "ohayō" };
  assert.equal(gradeSpoken("ohayou", ohayou), "good"); // clean romaji reading
  assert.equal(gradeSpoken("Ohio", ohayou), "hard");   // STT heard the English homophone of a correctly-said word
  assert.equal(gradeSpoken("banana", ohayou), "again"); // genuinely wrong
});

test("gradeSpoken: uses optional kana spelling for a kanji-front word", () => {
  const neko = { front: "猫", kana: "ねこ", reading: "neko" };
  assert.equal(gradeSpoken("ねこ", neko), "good");
  assert.equal(gradeSpoken("いぬ", neko), "again");
});
