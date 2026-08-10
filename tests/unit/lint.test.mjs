import test from "node:test";
import assert from "node:assert/strict";
import { lintCurriculum } from "../../src/data/lint.js";
import { UNITS } from "../../src/data/index.js";

// A minimal valid kana-script unit, used as a base the rejection tests mutate.
function kanaUnit(overrides = {}) {
  return {
    id: "ja-u1", lang: "ja", order: 1, stage: "pre-a1", title: "T",
    lessons: [
      {
        id: "ja-u1l1", unit: 1, lesson: 1, title: "L", dominantMode: "recall", canDo: "c", cefr: "A1",
        items: [
          { id: "ja-u1l1-a", type: "kana", front: "あ", reading: "a", meaning: null, example: null },
          { id: "ja-u1l1-i", type: "kana", front: "い", reading: "i", meaning: null, example: null },
          { id: "ja-u1l1-v1", type: "vocab", front: "ねこ", reading: "neko", meaning: "cat", example: { jp: "ねこ。", en: "Cat." }, accept: [] },
          { id: "ja-u1l1-v2", type: "vocab", front: "いぬ", reading: "inu", meaning: "dog", example: { jp: "いぬ。", en: "Dog." }, accept: [] },
          { id: "ja-u1l1-v3", type: "vocab", front: "すし", reading: "sushi", meaning: "sushi", example: { jp: "すし。", en: "Sushi." }, accept: [] },
          { id: "ja-u1l1-v4", type: "vocab", front: "みず", reading: "mizu", meaning: "water", example: { jp: "みず。", en: "Water." }, accept: [] },
          { id: "ja-u1l1-v5", type: "vocab", front: "やま", reading: "yama", meaning: "mountain", example: { jp: "やま。", en: "Mountain." }, accept: [] },
        ],
      },
    ],
    ...overrides,
  };
}

test("real curriculum passes the lint with no errors", () => {
  const { errors } = lintCurriculum(UNITS);
  assert.deepEqual(errors, [], `Real content fails the lint:\n${errors.join("\n")}`);
});

test("flags a reading that spells a long vowel as ou/oo/uu instead of a macron", () => {
  const u = kanaUnit();
  u.lessons[0].items[2].reading = "nekou"; // contrived ou
  const { errors } = lintCurriculum([u]);
  assert.ok(errors.find((e) => e.includes("macron")), `expected a macron error, got:\n${errors.join("\n")}`);
});

test("flags a stray key on a kana item (e.g. accept)", () => {
  const u = kanaUnit();
  u.lessons[0].items[0].accept = []; // accept is not allowed on kana
  const { errors } = lintCurriculum([u]);
  assert.ok(errors.find((e) => e.includes("ja-u1l1-a") && e.includes("accept")), `got:\n${errors.join("\n")}`);
});

test("requires を to read \"wo\"", () => {
  const u = kanaUnit();
  u.lessons[0].items[1] = { id: "ja-u1l1-wo", type: "kana", front: "を", reading: "o", meaning: null, example: null };
  const { errors } = lintCurriculum([u]);
  assert.ok(errors.find((e) => e.includes("wo")), `got:\n${errors.join("\n")}`);
});

test("flags kana out of gojūon order within a unit", () => {
  const u = kanaUnit();
  // か (rank 5) before あ (rank 0) → out of order
  u.lessons[0].items[0] = { id: "ja-u1l1-ka", type: "kana", front: "か", reading: "ka", meaning: null, example: null };
  u.lessons[0].items[1] = { id: "ja-u1l1-a", type: "kana", front: "あ", reading: "a", meaning: null, example: null };
  const { errors } = lintCurriculum([u]);
  assert.ok(errors.find((e) => e.includes("gojūon")), `got:\n${errors.join("\n")}`);
});

test("flags a kanji item in a pre-a1 unit (kanji is a1+ only)", () => {
  const u = {
    id: "ja-u1", lang: "ja", order: 1, stage: "pre-a1", title: "T",
    lessons: [
      {
        id: "ja-u1l1", unit: 1, lesson: 1, title: "L", dominantMode: "recall", canDo: "c", cefr: "A1",
        items: [
          { id: "ja-u1l1-k", type: "kanji", front: "一", reading: "ichi", meaning: "one", example: { jp: "一。", en: "One." }, accept: [] },
          { id: "ja-u1l1-v1", type: "vocab", front: "ねこ", reading: "neko", meaning: "cat", example: { jp: "ねこ。", en: "Cat." }, accept: [] },
          { id: "ja-u1l1-v2", type: "vocab", front: "いぬ", reading: "inu", meaning: "dog", example: { jp: "いぬ。", en: "Dog." }, accept: [] },
          { id: "ja-u1l1-v3", type: "vocab", front: "すし", reading: "sushi", meaning: "sushi", example: { jp: "すし。", en: "Sushi." }, accept: [] },
          { id: "ja-u1l1-v4", type: "vocab", front: "みず", reading: "mizu", meaning: "water", example: { jp: "みず。", en: "Water." }, accept: [] },
        ],
      },
    ],
  };
  const { errors } = lintCurriculum([u]);
  assert.ok(errors.find((e) => e.includes("kanji") && e.includes("a1+")), `got:\n${errors.join("\n")}`);
});

test("accepts yōon digraph kana (no stroke/scope/order errors; counts for density)", () => {
  const u = {
    id: "ja-u1", lang: "ja", order: 1, stage: "pre-a1", title: "Yōon",
    lessons: [
      {
        id: "ja-u1l1", unit: 1, lesson: 1, title: "L", dominantMode: "recall", canDo: "c", cefr: "A1",
        items: [
          { id: "ja-u1l1-kya", type: "kana", front: "きゃ", reading: "kya", meaning: null, example: null },
          { id: "ja-u1l1-kyu", type: "kana", front: "きゅ", reading: "kyu", meaning: null, example: null },
          { id: "ja-u1l1-kyo", type: "kana", front: "きょ", reading: "kyo", meaning: null, example: null },
          { id: "ja-u1l1-sha", type: "kana", front: "しゃ", reading: "sha", meaning: null, example: null },
          { id: "ja-u1l1-sho", type: "kana", front: "しょ", reading: "sho", meaning: null, example: null },
        ],
      },
    ],
  };
  const { errors, warnings } = lintCurriculum([u]);
  assert.deepEqual(errors, [], `yōon digraphs should lint clean, got:\n${errors.join("\n")}`);
  // 5 yōon = 5 "cards" → no density warning
  assert.ok(!warnings.find((x) => x.includes("ja-u1l1") && x.includes("card")), `unexpected density warning: ${warnings.join("\n")}`);
});

test("flags a word front taught twice", () => {
  const u = kanaUnit();
  u.lessons[0].items[3].front = "ねこ"; // duplicate of items[2]
  u.lessons[0].items[3].reading = "neko";
  const { errors } = lintCurriculum([u]);
  assert.ok(errors.find((e) => e.includes("already taught")), `got:\n${errors.join("\n")}`);
});

// --- teach-before-use for multi-word chunks -------------------------------------
// Regression cover for the defect class that got French BLOCKED twice: example
// sentences using vocabulary the learner has not met yet. Before this rule, the
// lint's teach-before-use tracking was kana/kanji-glyph only, so a Latin-script
// language had no such check at all.

// Two French-shaped lessons: the chunk under test is taught in lesson 2.
function frUnits({ earlyExample, earlyHint, chunkStage = "a1" } = {}) {
  const item = (n, front, example, hint) => ({
    id: `fr-u1l1-w${n}`, type: "vocab", front, reading: front.replace(/[^a-z]/g, ""),
    meaning: `m${n}`, example, accept: [], ...(hint ? { hint } : {}),
  });
  const filler = (lesson, n) => ({
    id: `fr-u1l${lesson}-f${n}`, type: "vocab", front: `filler${lesson}${n}`,
    reading: `filler${lesson}${n}`, meaning: `f${n}`,
    example: { jp: `Filler${lesson}${n}.`, en: "Filler." }, accept: [],
  });
  return [{
    id: "fr-u1", lang: "fr", order: 1, stage: chunkStage, title: "T",
    lessons: [
      {
        id: "fr-u1l1", unit: 1, lesson: 1, title: "L1", dominantMode: "recall", canDo: "c", cefr: "A1",
        items: [item(1, "le pain", earlyExample, earlyHint), ...[2, 3, 4, 5].map((n) => filler(1, n))],
      },
      {
        id: "fr-u1l2", unit: 1, lesson: 2, title: "L2", dominantMode: "recall", canDo: "c", cefr: "A1",
        items: [
          { id: "fr-u1l2-chunk", type: "vocab", front: "j'ai mal", reading: "jaimal", meaning: "it hurts",
            example: { jp: "J'ai mal.", en: "It hurts." }, accept: [] },
          ...[2, 3, 4, 5].map((n) => filler(2, n)),
        ],
      },
    ],
  }];
}

const chunkErrors = (units) =>
  lintCurriculum(units).errors.filter((e) => e.includes("is not taught until"));

test("lint flags a multi-word chunk used before the lesson that teaches it", () => {
  const errors = chunkErrors(frUnits({ earlyExample: { jp: "J'ai mal au pain.", en: "x" } }));
  assert.equal(errors.length, 1);
  assert.match(errors[0], /fr-u1l1-w1/);
  assert.match(errors[0], /j'ai mal/);
  assert.match(errors[0], /fr-u1l2/);
});

test("a hint glossing the chunk is the documented escape hatch", () => {
  const errors = chunkErrors(
    frUnits({ earlyExample: { jp: "J'ai mal au pain.", en: "x" }, earlyHint: "mal = pain, ache." })
  );
  assert.deepEqual(errors, []);
});

test("pre-a1 units are exempt — their examples are script specimens", () => {
  const errors = chunkErrors(
    frUnits({ earlyExample: { jp: "J'ai mal au pain.", en: "x" }, chunkStage: "pre-a1" })
  );
  assert.deepEqual(errors, []);
});

test("an example that does not use the later chunk is clean", () => {
  const errors = chunkErrors(frUnits({ earlyExample: { jp: "Le pain est bon.", en: "x" } }));
  assert.deepEqual(errors, []);
});

test("the shipped curriculum is free of chunk teach-before-use errors", () => {
  assert.deepEqual(chunkErrors(UNITS), []);
});
