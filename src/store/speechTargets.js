// Grading a spoken LETTER against a measured answer key.
//
// A letter card used to be ungraded on purpose (SpeakCard's `shadow` mode: record,
// play back, you judge), because the transcriber does not return the spelling for
// an isolated letter. Measured on this repo's own reference clips - clean TTS, no
// learner - Scribe returns "Et" for é, "Euh." for è, "Oh!" for eau. Against the
// item's `reading` ("e", "e", "eau") that is three failures on three perfect
// recordings.
//
// So the key is measured, not spelled: scripts/generate-speech-targets.mjs
// transcribes each reference clip and commits the result to
// src/data/speechTargets.js. A learner is right when their clip comes back the way
// the CORRECT SOUND comes back.
//
// WHY NOT JUST WIDEN THE SLACK. Slack loose enough to accept "Et" for reading "e"
// also accepts nearly any vowel noise, so the card would congratulate a learner who
// said nothing like the letter - a confidently wrong grade, which this repo has
// already shipped once and does not want again. A measured key is narrow and right
// at the same time.

// Normalisation shared by the generator and the grader, so the key is compared on
// exactly the terms it was built on. Lowercase, drop punctuation and whitespace.
// ACCENTS ARE KEPT: "é" and "e" are the distinction the whole card is about, and
// folding them here would rebuild the bug the accent standard exists to prevent.
export function normalizeSpeech(text) {
  return String(text ?? "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, "");
}

// The accepted transcripts for an item, or [] when it has no measured key - a
// letter card added since the last generator run, or one whose clip was missing.
// An empty result means "cannot grade this", which the caller must honour by
// falling back to shadowing rather than by guessing.
export function speechTargetsFor(item, table) {
  const t = table?.[item?.id];
  return Array.isArray(t) ? t : [];
}

// Is this spoken attempt one of the measured-correct answers?
export function matchesSpeechTarget(transcript, item, table) {
  const targets = speechTargetsFor(item, table);
  if (!targets.length) return false;
  return targets.includes(normalizeSpeech(transcript));
}

// Can this item be graded on speech at all? Drives SpeakCard's `shadow` prop: a
// letter WITH a measured key is graded; one without is shadowed, exactly as every
// letter was before the key existed. The fallback is the old behaviour, so a
// missing entry degrades to "you judge" instead of to a wrong verdict.
export function canGradeSpeech(item, table) {
  return speechTargetsFor(item, table).length > 0;
}
