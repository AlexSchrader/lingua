// How many DIFFERENT ways can each word be drilled?
//
// A word the engine can only ever present one way is barely taught: the learner
// meets the same card shape every time, so recall binds to that one presentation.
// This file measures per-item variety and RATCHETS it, so it can only improve.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE ORIGINAL FINDING (2026-08-29), AND ITS CORRECTION (same day)
//
// As first written, this file reported that 172 French and 134 Spanish items route
// to exactly ONE kind — `speak` — "pronounced and never recognised, produced, or
// heard". That number was an artifact of HOW it measured, not a fact about the app.
//
// It built each item's kind set by calling the exported gate functions. But the
// runner (reviewStepFor) has three branches with NO gate behind them:
//     rung <= 1  →  "choice"        (the else of listen / reverse)
//     rung 2     →  "type:meaning"  (the else of particle / cloze / dictation)
//     rung 3     →  "type:produce"  via `shouldTypeProduce(i) || !canBuildReading(i)`
//                                   — and canBuildReading is FALSE for every
//                                   Latin item, so all of them take this branch
//                                   regardless of what shouldTypeProduce says.
// None of the three is reachable through a gate, so the measurement could not see
// them. Run through the real dispatcher, those same 306 items each get FOUR kinds
// (choice → type:meaning → type:produce → speak) and **no item in any language
// routes to a single kind**. By the honest measure fr and es average 4.00 kinds
// and ja 3.81 — Latin script has slightly MORE per-item variety than Japanese,
// the reverse of what the first version concluded.
//
// The lesson is the one this suite keeps re-learning: a metric assembled from the
// pieces of a system is not a measurement of the system. So these tests now call
// `reviewStepFor` itself (extracted to src/store/reviewStep.js for exactly this).
//
// ─────────────────────────────────────────────────────────────────────────────
// WHAT WAS ACTUALLY WRONG — and it was real
//
// The diagnosis under the bad number was sound. The share gates carve ONE UNSALTED
// hash01(item.id) into MUTUALLY EXCLUSIVE bands —
//     < 0.50           listen:choice + type:produce
//     [0.50, 0.75)     listen:type
//     >= 0.75          cloze / sentence:build / particle:choice
// — so an item's hash decides which gates it may attempt at all. The top band's
// three kinds are all CONTENT-dependent (cloze needs the front inside the example,
// sentence:build needs 3–8 clean tokens, particle:choice needs a function word right
// after the front). A top-band item whose example supports none of them gets none of
// the six interesting kinds. Japanese is cushioned by `build` and `trace`; Latin
// script has no backstop.
//
// The real, measurable cost was not "one kind" — it was **never heard**: 342 ja,
// 280 fr and 122 es items with a perfectly good audio clip in the manifest that no
// card ever plays. `lacksVarietyCard` (cardRouting.js) now admits exactly those to
// the dictation card, applied at the assembly point in reviewStepFor so the share
// constants still mean what they say. That is what the ceilings below ratchet.
//
// TARGET IS ZERO for the never-heard counts. Lower them as they improve; never raise.
import { test } from "node:test";
import assert from "node:assert/strict";
import { UNITS } from "../../src/data/index.js";
import { reviewStepFor } from "../../src/store/reviewStep.js";
import { shouldCloze, shouldParticleCloze, shouldSentence, hasAudio } from "../../src/store/cardRouting.js";

// The routing reads item.lang and DEFAULTS IT TO "ja" (cardRouting.js: isLatin).
// Flattening lessons without stamping lang therefore reports every French item as
// Japanese and silently inverts this whole measurement. Stamp it.
function itemsFor(lang) {
  return UNITS.filter((u) => u.lang === lang).flatMap((u) =>
    (u.lessons ?? []).flatMap((l) => (l.items ?? []).map((i) => ({ ...i, lang: u.lang })))
  );
}

// Every card this item will meet across its whole life, rung 1 → 4. That is the
// only definition of "variety" the learner experiences.
const RUNGS = [1, 2, 3, 4];
// The dispatcher returns { kind: "type", mode } for the three typed cards, so keying
// on `.kind` alone silently merges type:meaning, type:reading and type:produce into
// ONE — three different questions counted as a single way to drill the word. Fold the
// mode back in, or this file under-reports variety exactly like the version it replaced.
const stepKind = (step) => (step.mode ? `${step.kind}:${step.mode}` : step.kind);
function kindsFor(item) {
  return [...new Set(RUNGS.map((rung) => stepKind(reviewStepFor({ ...item, rung }))))];
}

const EAR = new Set(["listen:choice", "listen:type"]);
const isHeard = (item) => kindsFor(item).some((k) => EAR.has(k));
const hasContentCard = (item) => shouldCloze(item) || shouldParticleCloze(item) || shouldSentence(item);

const LANGS = ["ja", "fr", "es"];

test("the corpus is actually loaded for every language", () => {
  for (const lang of LANGS) {
    assert.ok(itemsFor(lang).length > 500, `${lang}: expected a real corpus, got ${itemsFor(lang).length} items`);
  }
});

// Structural, not a ratchet: every rung has an unconditional fallback branch, so a
// single-kind item can only appear if someone removes one. Pinned at 0, not at a
// ceiling, because there is no legitimate reason for it to become non-zero.
test("no item is stuck on a single card kind", () => {
  for (const lang of LANGS) {
    const stuck = itemsFor(lang).filter((i) => kindsFor(i).length === 1);
    assert.deepEqual(
      stuck.map((i) => i.id),
      [],
      `${lang}: ${stuck.length} items route to one kind — a rung fallback has been removed`
    );
  }
});

test("every vocab item routes to at least one card kind", () => {
  for (const lang of LANGS) {
    const dead = itemsFor(lang).filter((i) => i.type === "vocab" && kindsFor(i).length === 0);
    assert.equal(dead.length, 0, `${lang}: ${dead.length} vocab items route to NO card at all`);
  }
});

// THE RATCHET. Items that own an audio clip and are never asked to hear it.
// Measured after the variety floor landed, counting ONLY items that own a clip:
// ja 1229→0, fr 762→0, es 312→0 — the gap is CLOSED, so this is pinned at zero
// rather than left as a ceiling to creep under. (Spanish is smaller here than the raw
// "no ear card" figure because 264 es items have no audio at all — that is an asset
// gap for the audio pipeline, not a routing one, so it is not this ratchet's job.)
const NEVER_HEARD_CEILING = { ja: 0, fr: 0, es: 0 };

for (const [lang, ceiling] of Object.entries(NEVER_HEARD_CEILING)) {
  test(`${lang}: items with audio that no card ever plays must not increase (target 0)`, () => {
    const deaf = itemsFor(lang).filter((i) => hasAudio(i) && !isHeard(i));
    assert.ok(
      deaf.length <= ceiling,
      `${lang}: ${deaf.length} items have audio no card plays (ceiling ${ceiling}). ` +
        `First few: ${deaf.slice(0, 5).map((i) => i.id).join(", ")}`
    );
  });
}

// The second ratchet, and the one the engine cannot fix alone: an item whose own
// example supports no cloze, no sentence build and no function-word blank. Lowering
// this is content work (a richer example), which is why it is tracked separately
// from the ear gap rather than folded into it.
const NO_CONTENT_CARD_CEILING = { ja: 4125, fr: 2622, es: 1236 };

for (const [lang, ceiling] of Object.entries(NO_CONTENT_CARD_CEILING)) {
  test(`${lang}: items whose example supports no content card must not increase`, () => {
    const bare = itemsFor(lang).filter((i) => !hasContentCard(i));
    assert.ok(
      bare.length <= ceiling,
      `${lang}: ${bare.length} items get no content-dependent card (ceiling ${ceiling})`
    );
  });
}

test("no language's per-item variety collapses relative to Japanese", () => {
  const avg = (lang) => {
    const items = itemsFor(lang);
    return items.reduce((a, i) => a + kindsFor(i).length, 0) / items.length;
  };
  const ja = avg("ja");
  for (const lang of ["fr", "es"]) {
    assert.ok(
      avg(lang) >= ja / 2,
      `${lang} averages ${avg(lang).toFixed(2)} kinds/item vs ja ${ja.toFixed(2)} — variety has collapsed`
    );
  }
});
