// PRONUNCIATION SCORING — "how close was that to café?" instead of "what did they say?"
//
// Alex, 2026-09-23: "why does duolingo work then?" Two reasons, and this module is
// the second one. Duolingo does not transcribe you; it scores your audio against
// text it already knows. That is a closed question with one right answer, where
// transcription is an open question with infinitely many. ElevenLabs exposes it as
// /v1/forced-alignment: audio + expected text in, per-word timings and a LOSS out.
//
// THE NUMBERS BELOW ARE MEASURED, not guessed. An earlier draft of this file
// guessed GOOD at 0.5; the first real response came back at 0.99 for a PERFECT
// match, so every guessed threshold was wrong. These are from real clips:
//
//   WORDS (fr, 7 clips each aligned to its own text and to another word's)
//     correct    0.574  0.658  0.664  0.710  0.721  0.814  1.127
//     wrong      1.219  1.328  1.357  1.727  1.965  2.209  2.343
//   -> clean separation. Nothing correct scored above 1.127; nothing wrong below 1.219.
//
//   SINGLE LETTERS (fr, same method)
//     correct    0.948  0.992  1.048  1.171  1.399  1.978  2.666
//     wrong      0.942  1.133  1.520  1.540  2.024  2.273  2.453
//   -> TOTAL OVERLAP. A correct û scored 2.666, the worst of all sixteen; a WRONG
//      è-against-ï scored 0.942, the best. No threshold exists.
//
// So this module scores WORDS and refuses LETTERS. Alignment loss on one character
// is not a pronunciation score — it is a timing residual on a signal too short to
// carry one. Grading a letter on it would be a confidently wrong verdict dressed up
// in a number, which is the failure mode this repo keeps rediscovering.
//
// A letter still needs the "speak" leg of Alex's unit-1 standard (hear, speak,
// type). The measured route for that is a CARRIER WORD — say "le bébé", not "é" —
// which is the other half of why Duolingo works, and which the data above supports
// directly. Tracked in BUILD-CHECKLIST.md; until then letters fall back to the
// measured-transcript key in src/store/speechTargets.js.

// Shortest expected text that was actually measured to separate ("allô", 4 chars).
// Anything shorter is a letter card by construction and is not scored here.
export const MIN_SCORABLE_LEN = 4;

// THE THRESHOLDS ABOVE ARE CALIBRATED ON LATIN SCRIPT AND DO NOT TRANSFER.
//
// Measured on Japanese the same way - 8 short words (2-3 kana), each clip aligned
// to its own text and to another word's:
//
//   correct   0.881  0.935  0.980  1.033  1.111  1.238  1.329  1.361
//   wrong     1.358  1.405  1.669  1.887  2.328  2.746  2.812  3.400
//
// The ranges TOUCH: the worst correct (1.361) is above the best wrong (1.358). And
// HARD_LOSS = 1.18, calibrated on French, would fail THREE of those eight correct
// words (1.238, 1.329, 1.361). A threshold that marks a correctly said word wrong is the one error this
// card must not make, so Japanese is not scored here.
//
// It loses nothing by being excluded. Japanese already has the strongest transcript
// path in the app - Scribe returns kana for kana, so gradeSpoken's exact
// foldKana match does the job, which is exactly what the accent letters could not
// rely on. Alignment is an upgrade for scripts whose transcripts are unreliable,
// and Japanese is not one of them.
//
// Character count is also the wrong unit across scripts: "はい" is 2 characters and
// 2 morae, where "allô" is 4 characters and 2 syllables. Rather than invent a
// mora-counting rule that no measurement supports, this gates on script and leaves
// Japanese to the path that already works. Re-measure with a real sample before
// turning it on.
// ⚠️ DEVANAGARI WAS MISSING AND THE GAP WAS SILENT. The ranges above stop at U+08FF;
// Devanagari is U+0900-U+097F, exactly one block past. So isScorableText("नमस्ते", "hi")
// returned TRUE while the identical Cyrillic case returned false. Nothing failed, because
// Hindi had no content until 2026-09-28 -- the bug was waiting for the language.
//
// Left alone, the first Hindi audio run would have generated speech carriers for all 58
// letter cards, routed `speak` on every one, and graded them with an aligner that has
// NEVER been measured on Devanagari -- precisely what the Cyrillic exclusion above exists
// to prevent. Fixed BEFORE voicing on purpose: afterwards, switching it off removes a card
// kind from 58 items and card-variety.test.mjs is the ratchet that notices.
//
// Found by the Hindi block-1 seat, which checked the claim in its own kickoff brief
// instead of trusting it. The brief was mine and it was wrong.
//
// Same standing instruction as the rest of this guard: re-measure with a real sample
// before turning any script on. Hindi, Korean and Mandarin are all in languages.js.
const NON_LATIN = /[぀-ヿ一-龯가-힯Ѐ-ӿ֐-ࣿऀ-ॿ]/;

// LANGUAGES WHOSE SCRIPT HAS BEEN MEASURED, not assumed.
//
// The script guard below was a GUESS — "non-Latin has not been measured, so refuse
// it" — and for Hindi the guess was wrong. Measured 2026-10-17, 24 Hindi words each
// aligned to its own text and to another word's:
//
//     correct  0.51 .. 1.04      wrong  1.01 .. 2.73
//     at a Hindi threshold of 1.05: ZERO correct failed, 1 of 24 wrong accepted
//
// That is better than French, which has shipped with speaking enabled throughout.
// So Devanagari is allowed, and 58 Hindi letter cards get the speaking leg of the
// unit-1 standard they never had.
//
// Everything still unmeasured stays refused. Russian is the next candidate and
// looked good on a small sample (1 of 20 wrong accepted), but a small sample is
// exactly what produced the wrong answer about Hindi the first time — it measured
// 4 of 20 at n=6, and 1 of 24 once the sample was big enough. Measure it properly
// before adding `ru` here.
const MEASURED_SCRIPTS = new Set(["hi"]);

// Is this item's expected text something alignment was measured to score?
//
// Japanese is refused explicitly as well as by script: its own measurement showed
// correct and wrong answers OVERLAPPING (correct 0.881-1.361, wrong 1.358-3.400),
// so no threshold exists for it and it keeps the transcript path — which for kana
// is the strongest in the app anyway.
export function isScorableText(text, lang) {
  const t = String(text ?? "").trim();
  if (t.length < MIN_SCORABLE_LEN) return false;
  if (lang === "ja") return false;
  if (MEASURED_SCRIPTS.has(lang)) return true;
  if (NON_LATIN.test(t)) return false;
  return true;
}

// Pull the loss out of the response. Real shape, confirmed against the live API:
//   { characters: [{text,start,end}], words: [{text,start,end,loss}], loss: number }
// The per-word fallback stays because a multi-word phrase may report only per-word
// losses. Anything unrecognised returns null, and null means "could not score" —
// never a pass and never a fail.
export function alignmentLoss(payload) {
  if (!payload || typeof payload !== "object") return null;
  if (typeof payload.loss === "number" && Number.isFinite(payload.loss)) return payload.loss;
  for (const key of ["words", "characters", "segments"]) {
    const rows = payload[key];
    if (!Array.isArray(rows) || !rows.length) continue;
    const losses = rows.map((r) => r?.loss).filter((n) => typeof n === "number" && Number.isFinite(n));
    if (losses.length) return losses.reduce((a, b) => a + b, 0) / losses.length;
  }
  return null;
}

// ONE THRESHOLD DOES NOT FIT SIX LANGUAGES, AND THE SHIPPED ONE WAS FAILING
// NORWEGIAN LEARNERS.
//
// 1.18 was calibrated on French alone. Re-measured 2026-10-17 across every live
// language — 20 words each, every clip aligned to its own text and to another
// word's — that single number does this:
//
//     lang   correct answers FAILED   wrong answers accepted
//     fr            0 / 20                   1 / 20
//     es            0 / 20                   1 / 20
//     de            0 / 20                   1 / 20
//     pt            0 / 20                   2 / 20
//     no            2 / 20                   0 / 20   <- marking correct answers WRONG
//
// Norwegian needs MORE slack, not less: its correct answers score higher than
// French's, so the French number was failing one in ten people who said the word
// right. That is the expensive error — retries are unlimited and unpenalised, so a
// wrongly-accepted answer costs one undeserved tick, while a wrongly-REJECTED one
// tells a learner they cannot pronounce something they just pronounced.
//
// So each language gets the lowest threshold that fails ZERO correct answers in its
// own sample. Chosen by that rule, not by taste:
//
//     fr 1.13 (1 wrong accepted)   es 0.93 (0)   de 1.14 (1)
//     pt 1.06 (0)                  no 1.60 (2)   hi 1.05 (1)
//
// Every one of those is as good as or better than what shipped, and Norwegian stops
// failing correct answers. A language with no entry falls back to the French
// numbers, which is the old behaviour — safe, and loud enough to notice because it
// is written down here rather than implied.
//
// RE-MEASURE WHEN A VOICE CHANGES. These are properties of the TTS voice and the
// aligner, not of the language, so a new companion voice invalidates the row.
const DEFAULT_HARD = 1.18;
const HARD_BY_LANG = { fr: 1.13, es: 0.93, de: 1.14, pt: 1.06, no: 1.60, hi: 1.05 };

// GOOD only separates "good" from "hard" — BOTH pass — so it is far less
// load-bearing than HARD and stays a single number. Clamped below HARD so the two
// can never cross for a language whose HARD sits under 0.9 (Spanish does).
export const GOOD_LOSS = 0.9;
export const HARD_LOSS = DEFAULT_HARD;

export function hardLossFor(lang) {
  return HARD_BY_LANG[lang] ?? DEFAULT_HARD;
}
export function goodLossFor(lang) {
  return Math.min(GOOD_LOSS, hardLossFor(lang) - 0.02);
}

// null = could not score; the caller falls back. Never a verdict.
export function gradeAlignment(payload, lang) {
  const loss = alignmentLoss(payload);
  if (loss === null) return null;
  if (loss <= goodLossFor(lang)) return "good";
  if (loss <= hardLossFor(lang)) return "hard";
  return "again";
}
