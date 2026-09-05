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
  isLatin, earCrowdedOut, isTraceable, shouldListen, shouldReverseChoice, shouldListenType,
  shouldTypeReading, shouldTypeProduce, shouldSpeak, shouldCloze, shouldParticleCloze,
  shouldSentence, shouldConjugate, canBuildReading, eligibleKinds,
} from "./cardRouting.js";

// --- rotation within a stage ------------------------------------------------
// The dispatcher below is DETERMINISTIC: same item, same rung, same card, forever.
// That was fine when variety came from climbing rungs, and it is fatal to mastery,
// which needs 15 correct passes on EVERY eligible kind — an item that only ever shows
// one card per stage can never finish the others. So each stage now offers its
// candidates and the item takes the one it has practised LEAST.
//
// Thinnest-skill-first, not random: drilling a word fills the gap you actually have,
// and the order is stable for a given pass count, so it is testable. Ties fall back to
// the stage's own priority order, which is why the candidate lists below are written in
// the same order the old if-chain used — behaviour for an item with no passes yet is
// unchanged.
function leastPractised(item, candidates) {
  if (!candidates.length) return null;
  const passes = item?.passes ?? {};
  const count = (k) => Number(passes[k]) || 0;
  const min = Math.min(...candidates.map(count));
  const tied = candidates.filter((k) => count(k) === min);
  // ALL TIED means no evidence yet — almost always a fresh item, since every kind
  // starts at zero. Rotation has nothing to go on there, and picking the first
  // candidate would make one card kind the only one the whole corpus ever shows until
  // it has been practised (that is how choice:reverse and listen:choice each vanished
  // from the coverage smoke in turn). So we hand back null and let the legacy
  // hash-gated chain decide, exactly as it did before rotation existed.
  //
  // Rotation takes over the moment the counts differ — which is as soon as the learner
  // answers anything, and is the only state where "least practised" means something.
  if (tied.length === candidates.length) return null;
  return tied[0];
}

// Which of a stage's cards this item can actually be asked, in priority order.
function stageCandidates(item, rung) {
  const can = new Set(eligibleKinds(item));
  const keep = (...ks) => ks.filter((k) => can.has(k));
  if (rung <= 1) return keep("listen:choice", "choice:reverse", "choice");
  if (rung === 2) return keep("particle:choice", "cloze:choice", "listen:type", "type:reading", "type:meaning");
  if (rung === 3) return keep("conjugate", "trace", "sentence:build", "type:produce", "build");
  return keep("speak", "trace", "build");
}

// Kinds are named as the mastery counter names them; the runner speaks {kind, mode}.
function asStep(kind) {
  if (kind === "type:meaning") return { kind: "type", mode: "meaning" };
  if (kind === "type:reading") return { kind: "type", mode: "reading" };
  if (kind === "type:produce") return { kind: "type", mode: "produce" };
  return { kind };
}

export function reviewStepFor(item) {
  const rung = item.rung ?? 1;
  // A tagged Latin conjugation item is a drill at every rung: its front is the shared
  // infinitive, so the generic cards cannot say which form is being asked for.
  if (rung >= 1 && isLatin(item) && shouldConjugate(item)) return { kind: "conjugate" };

  // Rotation. The old dispatcher was deterministic per (item, rung) — one card per
  // stage, forever — which mastery cannot finish, because it needs passes on EVERY
  // eligible kind. Each stage now offers its candidates and the item takes the one it
  // has practised least. With no passes yet, ties resolve to the stage's own priority
  // order, so a fresh item routes exactly as it did before.
  const pick = leastPractised(item, stageCandidates(item, rung));
  if (pick) return asStep(pick);

  // No evidence to rotate on yet — the original hash-gated chain, unchanged. It is what
  // gives a fresh item its interleaved variety, so nothing about a learner's first pass
  // through a word has changed.
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
