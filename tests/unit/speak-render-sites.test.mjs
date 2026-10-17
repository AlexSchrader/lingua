import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { SPEECH_CARRIERS } from "../../src/data/speechCarriers.js";
import { reviewStepFor } from "../../src/store/reviewStep.js";
import { UNITS } from "../../src/data/index.js";

// WHY THIS FILE EXISTS.
//
// The carrier-word fix (2026-09-27) made a letter's speak card say "le bébé"
// instead of "é", because a bare letter cannot be graded: transcription returns
// "Et" for a perfect é, and alignment loss on one character overlaps completely
// between right and wrong answers.
//
// IT WAS ONLY WIRED INTO LESSONS. Lesson.jsx passed the carrier; Review.jsx never
// did, and nothing failed — the card still rendered, still recorded, still graded.
// It just graded the thing we had measured as ungradeable. Measured 2026-10-17:
// 52 of 80 sampled letters can draw a speak card in review, so half the fix was
// dead for three weeks.
//
// Found while landing the exams branch, by reading what each render site actually
// passes rather than trusting that "the fix shipped".

const SITES = ["src/screens/Lesson.jsx", "src/screens/Review.jsx"];

test("EVERY PLACE THAT RENDERS A SPEAK CARD PASSES THE CARRIER", () => {
  // Deliberately source-level. The defect was never in the rendering — it was a
  // prop one call site simply never had, so a grep is the honest shape of the
  // check. Any NEW render site must be added here; that is the point.
  const missing = [];
  for (const file of SITES) {
    const src = readFileSync(new URL(`../../${file}`, import.meta.url), "utf8");
    if (!src.includes("<SpeakCard")) continue;
    if (!src.includes("carrier=")) missing.push(`${file} renders SpeakCard without a carrier`);
    if (!src.includes("shadow=")) missing.push(`${file} renders SpeakCard without the shadow fallback`);
  }
  assert.deepEqual(missing, []);
});

test("no OTHER file renders a speak card unnoticed", () => {
  // The guard above only covers the files it lists. This catches a third render
  // site appearing somewhere else — which is exactly how the first one was missed.
  const files = ["src/screens/Lesson.jsx", "src/screens/Review.jsx", "src/screens/Exam.jsx", "src/components/games/CardStage.jsx"];
  const rendering = [];
  for (const f of files) {
    let src;
    try { src = readFileSync(new URL(`../../${f}`, import.meta.url), "utf8"); } catch { continue; }
    if (src.includes("<SpeakCard")) rendering.push(f);
  }
  for (const f of rendering) {
    assert.ok(SITES.includes(f), `${f} renders a speak card but is not in SITES — add it and check its props`);
  }
});

test("REVIEW REALLY DOES SERVE LETTERS A SPEAK CARD — the guard is not vacuous", () => {
  const glyphs = UNITS.flatMap((u) =>
    (u.lessons ?? []).flatMap((l) =>
      (l.items ?? []).filter((i) => i.type === "glyph").map((i) => ({ ...i, lang: u.lang, rung: 4, passes: {} }))
    )
  ).slice(0, 60);
  let canSpeak = 0;
  for (const g of glyphs) {
    for (let i = 0; i < 40; i++) if (reviewStepFor(g)?.kind === "speak") { canSpeak++; break; }
  }
  assert.ok(canSpeak > 0, "no letter can draw a speak review card — the carrier guard now protects nothing");
});

test("every letter review can speak has a carrier to speak it through", () => {
  const glyphs = UNITS.flatMap((u) =>
    (u.lessons ?? []).flatMap((l) =>
      (l.items ?? []).filter((i) => i.type === "glyph").map((i) => ({ ...i, lang: u.lang, rung: 4, passes: {} }))
    )
  );
  const speakable = glyphs.filter((g) => {
    for (let i = 0; i < 40; i++) if (reviewStepFor(g)?.kind === "speak") return true;
    return false;
  });
  assert.deepEqual(speakable.filter((g) => !SPEECH_CARRIERS[g.id]).map((g) => `${g.lang} ${g.front}`), []);
});
