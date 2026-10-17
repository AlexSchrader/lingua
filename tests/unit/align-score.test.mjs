import test from "node:test";
import assert from "node:assert/strict";
import {
  alignmentLoss, gradeAlignment, isScorableText,
  GOOD_LOSS, HARD_LOSS, MIN_SCORABLE_LEN,
} from "../../src/store/alignScore.js";

// WHY THIS FILE EXISTS.
//
// Alex asked why Duolingo's speech grading works and ours didn't. The answer was
// the question being asked: we transcribed ("what did they say?") where Duolingo
// scores ("how close was that to café?"). ElevenLabs forced alignment does the
// second. These tests pin the thresholds — which are MEASURED, and were wrong when
// they were guessed.
//
// THE GUESS THAT WAS WRONG, kept as the reason this file asserts real numbers: the
// first version of alignScore.js guessed GOOD at 0.5. The first real response from
// the API returned 0.9918 for a PERFECT match — so the guessed scale was not merely
// mis-tuned, it was inverted in practice: every correct answer would have failed.

// Real losses, from aligning each clip to its own text and to another item's.
// fr, 7 words and 7 letters. Kept as data so a threshold change has to face them.
const WORDS_CORRECT = [0.574, 0.658, 0.664, 0.710, 0.721, 0.814, 1.127];
const WORDS_WRONG = [1.219, 1.328, 1.357, 1.727, 1.965, 2.209, 2.343];
const LETTERS_CORRECT = [0.948, 0.992, 1.048, 1.171, 1.399, 1.978, 2.666];
const LETTERS_WRONG = [0.942, 1.133, 1.520, 1.540, 2.024, 2.273, 2.453];

test("every correctly-said WORD passes — no correct answer is failed", () => {
  for (const loss of WORDS_CORRECT) {
    const g = gradeAlignment({ loss });
    assert.notEqual(g, "again", `${loss} is a correct pronunciation and must not be marked wrong`);
  }
});

test("every wrongly-said WORD fails — no wrong answer is passed", () => {
  for (const loss of WORDS_WRONG) {
    assert.equal(gradeAlignment({ loss }), "again", `${loss} is a wrong word and must not pass`);
  }
});

test("the thresholds sit inside the measured gap, with room on both sides", () => {
  const worstCorrect = Math.max(...WORDS_CORRECT);
  const bestWrong = Math.min(...WORDS_WRONG);
  assert.ok(worstCorrect < bestWrong, "the measurement itself must separate, or none of this is valid");
  assert.ok(HARD_LOSS >= worstCorrect, `HARD (${HARD_LOSS}) must not fail the worst correct word (${worstCorrect})`);
  assert.ok(HARD_LOSS < bestWrong, `HARD (${HARD_LOSS}) must not pass the best wrong word (${bestWrong})`);
  assert.ok(GOOD_LOSS < HARD_LOSS);
});

test("LETTERS ARE NOT SCORABLE, and the code refuses rather than guesses", () => {
  // The measurement that settles it: correct and wrong letters overlap completely,
  // so no threshold can exist. This asserts the OVERLAP, so that if someone later
  // points alignment at letters the reason it was refused is still on record.
  assert.ok(Math.min(...LETTERS_WRONG) < Math.max(...LETTERS_CORRECT),
    "letters overlap — a correct û scored 2.666, a wrong è-vs-ï scored 0.942");
  for (const text of ["é", "è", "ô", "gn", "eau", "ill"]) {
    assert.equal(isScorableText(text), false, `"${text}" is a letter card and must not be scored`);
  }
});

test("words ARE scorable, down to the shortest one measured", () => {
  for (const text of ["allô", "le bébé", "la crème", "l'œil"]) {
    assert.equal(isScorableText(text), true);
  }
  assert.equal(MIN_SCORABLE_LEN, 4, "4 = 'allô', the shortest word in the measurement");
});

// --- the thresholds are LATIN-CALIBRATED and must not be applied elsewhere ----
//
// Measured on Japanese the same way, 8 short words:
//   correct  0.881 0.935 0.980 1.033 1.111 1.238 1.329 1.361
//   wrong    1.358 1.405 1.669 1.887 2.328 2.746 2.812 3.400
// The ranges TOUCH, and HARD_LOSS (1.18, from French) fails THREE of the eight
// CORRECT words (1.238, 1.329, 1.361). Marking a correctly said word wrong is the one error this card
// must not make, so Japanese is refused and keeps its transcript path - which is
// the strongest in the app, because Scribe returns kana for kana.
const JA_CORRECT = [0.881, 0.935, 0.980, 1.033, 1.111, 1.238, 1.329, 1.361];
const JA_WRONG = [1.358, 1.405, 1.669, 1.887, 2.328, 2.746, 2.812, 3.400];

test("JAPANESE IS NOT SCORED — the Latin thresholds would fail correct words", () => {
  const wouldFail = JA_CORRECT.filter((loss) => gradeAlignment({ loss }) === "again");
  assert.deepEqual(wouldFail, [1.238, 1.329, 1.361], "the exact correct words French thresholds would fail - re-measure if this changes");
  assert.ok(Math.min(...JA_WRONG) < Math.max(...JA_CORRECT), "the ja ranges touch, so no clean threshold exists");
  for (const word of ["はい", "こども", "さかな", "たべます", "ともだち"]) {
    assert.equal(isScorableText(word, "ja"), false, `${word} must take the transcript path`);
    assert.equal(isScorableText(word), false, `${word} must be refused on script alone, without a lang hint`);
  }
});

test("other non-Latin scripts are refused too, not just ja", () => {
  // Korean, Cyrillic and Hebrew are in the catalog's future; none has been
  // measured, so none is scored. Refusing by script means a new language cannot
  // silently inherit French's numbers.
  for (const text of ["안녕하세요", "здравствуйте", "שלום עליכם"]) {
    assert.equal(isScorableText(text), false);
  }
});

test("the Latin languages that WERE measured still score", () => {
  for (const [text, lang] of [["le bébé", "fr"], ["la casa", "es"], ["die Katze", "de"], ["takk", "no"], ["obrigado", "pt"]]) {
    assert.equal(isScorableText(text, lang), true, `${text} (${lang}) should be scored`);
  }
});

// --- parsing ----------------------------------------------------------------

test("reads the loss from the real response shape", () => {
  // Confirmed against the live API, 2026-09-23.
  const real = {
    characters: [{ text: "é", start: 0.12, end: 0.22 }],
    words: [{ text: "é", start: 0.12, end: 0.22, loss: 0.9918022155761719 }],
    loss: 0.9918022155761719,
  };
  assert.equal(alignmentLoss(real), 0.9918022155761719);
});

test("falls back to averaging per-word losses when there is no top-level one", () => {
  assert.equal(alignmentLoss({ words: [{ loss: 0.4 }, { loss: 0.6 }] }), 0.5);
});

test("AN UNRECOGNISED PAYLOAD SCORES NOTHING — never a pass, never a fail", () => {
  // The whole safety property. A scorer that invents a number from a shape it does
  // not understand is how a confidently wrong grade ships.
  for (const junk of [null, undefined, {}, { loss: "0.5" }, { loss: NaN }, { words: [] }, "nope", 42]) {
    assert.equal(gradeAlignment(junk), null, `${JSON.stringify(junk)} must not produce a verdict`);
    }
});

test("a null score means the caller falls back, so it must be distinguishable from a fail", () => {
  assert.notEqual(gradeAlignment({}), "again");
  assert.equal(gradeAlignment({}), null);
});

// --- one threshold does not fit six languages --------------------------------
//
// 1.18 was calibrated on French alone. Re-measured 2026-10-17 across every live
// language, 20 words each (24 for Hindi), every clip aligned to its own text and to
// another word's, that single number does this:
//
//     lang   correct answers FAILED   wrong accepted
//     fr            0 / 20                 1 / 20
//     es            0 / 20                 1 / 20
//     de            0 / 20                 1 / 20
//     pt            0 / 20                 2 / 20
//     no            2 / 20                 0 / 20   <- marking CORRECT answers wrong
//
// Norwegian needs MORE slack, not less — its correct answers score higher than
// French's, so the French number was failing one in ten learners who said the word
// right. Retries are unlimited and unpenalised, so a wrongly-accepted answer costs
// one undeserved tick while a wrongly-rejected one tells someone they cannot
// pronounce a word they just pronounced.
import { hardLossFor, goodLossFor } from "../../src/store/alignScore.js";

// The lowest threshold that failed ZERO correct answers in each language's sample.
const MEASURED = { fr: 1.13, es: 0.93, de: 1.14, pt: 1.06, no: 1.60, hi: 1.05 };

test("NORWEGIAN STOPS FAILING CORRECT ANSWERS", () => {
  // The two Norwegian correct answers the French threshold rejected both scored
  // above 1.18. Anything at or under the Norwegian threshold must now pass.
  for (const loss of [1.2, 1.35, 1.5, 1.59]) {
    assert.notEqual(gradeAlignment({ loss }, "no"), "again", `${loss} is a correct Norwegian answer`);
    assert.equal(gradeAlignment({ loss }, "fr"), "again", `${loss} would still fail under the French number`);
  }
});

test("every measured language uses its own threshold", () => {
  for (const [lang, hard] of Object.entries(MEASURED)) {
    assert.equal(hardLossFor(lang), hard, `${lang} must use its measured threshold`);
  }
});

test("an UNMEASURED language falls back to the old behaviour, not to a guess", () => {
  // Russian is the next candidate and is deliberately not in the table yet.
  assert.equal(hardLossFor("ru"), 1.18);
  assert.equal(hardLossFor(undefined), 1.18);
});

test("GOOD can never cross HARD, even where HARD is below 0.9", () => {
  // Spanish measured at 0.93, under the global GOOD of 0.9 — close enough that an
  // unclamped pair would invert for a slightly lower measurement later.
  for (const lang of [...Object.keys(MEASURED), "ru", undefined]) {
    assert.ok(goodLossFor(lang) < hardLossFor(lang), `${lang}: good must sit below hard`);
  }
});

test("HINDI IS SCORABLE NOW — the script guard was a guess, and it was wrong", () => {
  // Measured: correct 0.51-1.04, wrong 1.01-2.73; at 1.05, zero correct failed and
  // 1 of 24 wrong accepted — better than French, which has shipped all along.
  assert.equal(isScorableText("नमस्ते", "hi"), true);
  assert.equal(isScorableText("आदमी", "hi"), true);
});

test("everything still unmeasured stays refused", () => {
  // Russian looked good at n=20 but Hindi measured 4-in-20 at n=6 and 1-in-24 once
  // the sample was big enough. Small samples are how this gets answered wrongly.
  assert.equal(isScorableText("здравствуйте", "ru"), false);
  assert.equal(isScorableText("안녕하세요", "ko"), false);
  assert.equal(isScorableText("こんにちは", "ja"), false);
});
