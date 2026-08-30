// Which card kind a review shows for an item at its current rung.
//
// Extracted from Review.jsx (2026-08-29) so it can be MEASURED. It is the real
// answer to "how many different ways can this word be drilled" — the share gates in
// cardRouting.js only say which gates an item may pass, and three of the branches
// below (choice, type:meaning, and the type:produce fallback) have no gate at all.
// A variety metric built from the gate functions therefore misses them and reports
// items as far more stuck than they are; tests/unit/card-variety.test.mjs records
// what that cost. Pure, no React, so a test can call it over the whole corpus.
import {
  lacksVarietyCard, needsEarAtRecognition, isTraceable, shouldListen, shouldReverseChoice, shouldListenType,
  shouldTypeReading, shouldTypeProduce, shouldSpeak, shouldCloze, shouldParticleCloze,
  shouldSentence, shouldConjugate, canBuildReading,
} from "./cardRouting.js";

export function reviewStepFor(item) {
  const rung = item.rung ?? 1;
  // Recognition (rung ≤ 1): interleave three same-skill variants — the ear path
  // (listen:choice, audio in), the reverse direction (choice:reverse, English in →
  // pick the Japanese), and the plain eye path (choice, glyph in → pick the meaning).
  if (rung <= 1) {
    if (shouldListen(item)) return { kind: "listen:choice" };
    // VARIETY FLOOR, half two. This item's hash band locks it out of both listening
    // cards, but it earns a content card at rung 2 — so dictation there would only
    // move the hole. It takes its ear here instead, where the alternative is plain
    // `choice`: the same recognition skill at the same rung, one sense better.
    if (needsEarAtRecognition(item)) return { kind: "listen:choice" };
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
    // VARIETY FLOOR (cardRouting.lacksVarietyCard). This item's hash band excludes it
    // from the ear path AND its example supports no content card, so without this it
    // spends its whole life on recognise / type / speak and its audio clip is never
    // played. Dictation is the card it is missing, so it gets it here rather than a
    // third meaning-shaped review. Applied at the ASSEMBLY point, not inside a gate,
    // so LISTEN_SHARE still means what it says.
    if (lacksVarietyCard(item)) return { kind: "listen:type" };
    return shouldTypeReading(item) ? { kind: "type", mode: "reading" } : { kind: "type", mode: "meaning" };
  }
  // Produce (rung 3): single-glyph kana + kanji are produced by stroke tracing;
  // words are produced by TYPING the Japanese from the English — rōmaji is accepted
  // through A1 so no JP keyboard is needed, kana required from A2 (see checkProduce)
  // — interleaved with building the word from tiles.
  if (rung === 3) {
    // A tagged verb with a target form is a conjugation drill — always conjugate.
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
