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

// Is this item's expected text long enough for alignment to mean anything?
export function isScorableText(text) {
  return String(text ?? "").trim().length >= MIN_SCORABLE_LEN;
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

// Measured thresholds. GOOD sits above the sixth-worst correct word (0.814) and
// well under the best wrong one; HARD sits in the gap between the worst correct
// (1.127) and the best wrong (1.219), so the one correct outlier still passes as a
// near miss rather than failing. Retries are unlimited and unpenalised, so the
// asymmetry is deliberate: being told you are wrong when you were right is the
// expensive error here.
export const GOOD_LOSS = 0.9;
export const HARD_LOSS = 1.18;

// null = could not score; the caller falls back. Never a verdict.
export function gradeAlignment(payload) {
  const loss = alignmentLoss(payload);
  if (loss === null) return null;
  if (loss <= GOOD_LOSS) return "good";
  if (loss <= HARD_LOSS) return "hard";
  return "again";
}
