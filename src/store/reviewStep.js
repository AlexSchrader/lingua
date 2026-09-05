// Which card kind a review shows for an item at its current rung.
//
// Extracted from Review.jsx (2026-08-30) so it can be MEASURED. The share gates in
// cardRouting.js only say which gates an item MAY pass; three of the branches below
// have no gate at all (choice, type:meaning, and the type:produce fallback), and two
// cards can both pass their gate while priority order means only one is ever shown.
// So any metric assembled from the gate functions is a proxy, not a measurement --
// which is exactly how a whole hash quartile went uncovered without a test noticing.
// Pure, no React, so a test can run it over the entire corpus.
import {
  isLatin, earCrowdedOut, isTraceable, shouldListen, shouldReverseChoice, shouldListenType, shouldTypeReading, shouldTypeProduce, shouldSpeak, shouldCloze, shouldParticleCloze, shouldSentence, shouldConjugate, canBuildReading } from "./cardRouting.js";

export function reviewStepFor(item) {
  const rung = item.rung ?? 1;
  // A tagged conjugation item is a drill at EVERY rung, not just rung 3. Its front is
  // the INFINITIVE (that is what the engine conjugates from), so the six persons of a
  // tense are six items all reading "être" — identical prompts with different answers,
  // and only the conjugate card shows which form is being asked for. At any other rung
  // they drew choice / type:meaning / speak, which are unanswerable once tagged.
  // ...but ONLY where the front is ambiguous, which is a Latin problem, not a
  // Japanese one. ja/unit45 tags one form per verb, so its 24 items have 24 distinct
  // fronts and the generic cards are perfectly answerable — hoisting there would just
  // strip them of the ear path for nothing (caught by the never-heard ratchet).
  if (rung >= 1 && isLatin(item) && shouldConjugate(item)) return { kind: "conjugate" };
  // Recognition (rung ≤ 1): interleave three same-skill variants — the ear path
  // (listen:choice, audio in), the reverse direction (choice:reverse, English in →
  // pick the Japanese), and the plain eye path (choice, glyph in → pick the meaning).
  if (rung <= 1) {
    if (shouldListen(item)) return { kind: "listen:choice" };
    // This item's only chance to hear the word (see earCrowdedOut): its hash is above
    // the listen band, and at rung 2 a content card wins ahead of dictation. Checked
    // BEFORE the reverse variant deliberately — both are 4-option recognition at this
    // rung, but only one of them ever plays the clip, and rung 4 will grade the learner
    // saying it aloud.
    if (earCrowdedOut(item)) return { kind: "listen:choice" };
    if (shouldReverseChoice(item)) return { kind: "choice:reverse" };
    return { kind: "choice" };
  }
  // Recall (rung 2): three interleaved recall paths on distinct hash bands — fill
  // the word into its own sentence (cloze), recall by ear (dictation), or the
  // visual recall (type the reading, else the meaning).
  if (rung === 2) {
    // In the cloze band, a sentence with a clear particle drills the PARTICLE
    // (the grammar pain point); otherwise fill the WORD into its sentence.
    if (shouldParticleCloze(item)) return { kind: "particle:choice" };
    if (shouldCloze(item)) return { kind: "cloze:choice" };
    if (shouldListenType(item)) return { kind: "listen:type" };
    return shouldTypeReading(item) ? { kind: "type", mode: "reading" } : { kind: "type", mode: "meaning" };
  }
  // Produce (rung 3): single-glyph kana + kanji are produced by stroke tracing;
  // words are produced by TYPING the Japanese from the English — rōmaji is accepted
  // through A1 so no JP keyboard is needed, kana required from A2 (see checkProduce)
  // — interleaved with building the word from tiles.
  if (rung === 3) {
    // Japanese keeps the drill at its production rung: one form per verb means the
    // front identifies the card, so the other rungs stay useful (see the Latin hoist above).
    if (shouldConjugate(item)) return { kind: "conjugate" };
    if (isTraceable(item)) return { kind: "trace" };
    // Reassemble the whole example sentence (production in context) for a share of
    // eligible vocab; else type the Japanese, else build the word from tiles.
    if (shouldSentence(item)) return { kind: "sentence:build" };
    // The tile-build card is a transliteration test, so it only applies where the
    // reading is a different script from the front (see canBuildReading) — a
    // Latin-script item produces by typing the word from its meaning instead.
    return shouldTypeProduce(item) || !canBuildReading(item)
      ? { kind: "type", mode: "produce" }
      : { kind: "build" };
  }
  // Speak (rung ≥ 4, SPOKEN→MASTERED): vocab words are reviewed by saying them
  // aloud — a graded spoken pass is what carries a produced word to MASTERED.
  // Kana/kanji have no reliable isolated-sound grading, so they keep trace/build.
  if (shouldSpeak(item)) return { kind: "speak" };
  return isTraceable(item) ? { kind: "trace" } : { kind: "build" };
}
