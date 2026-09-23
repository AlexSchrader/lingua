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
