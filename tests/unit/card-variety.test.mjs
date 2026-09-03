// How many DIFFERENT ways can each word be drilled?
//
// A word the engine can only ever present one way is barely taught: the learner
// meets the same card shape every time it comes up, so recall is bound to that
// one presentation. This file measures per-item card-kind variety and RATCHETS
// it, so the number can only improve.
//
// THE FINDING THIS ENCODES (2026-08-29). 172 French and 134 Spanish items route
// to exactly ONE kind — `speak`. They are pronounced and never recognised,
// produced, or heard. It is not bad luck: the share gates carve a single
// UNSALTED hash01(item.id) into mutually exclusive bands —
//
//     < 0.50           listen:choice + type:produce
//     [0.50, 0.75)     listen:type
//     >= 0.75          cloze / sentence:build / particle:choice
//
// — so an item's band decides which gates it may pass at all. The top band's
// three kinds are all CONTENT-dependent (cloze needs the front inside the
// example, sentence:build needs 3–8 clean tokens, particle:choice needs a
// function word right after the front). When an example satisfies none of them
// the item has nothing left, because the lower bands already excluded it.
// Every speak-only French item sits in hash band 0.7–0.9, while items overall
// are spread evenly across all ten bands.
//
// Japanese never falls through: `build` (every item), `trace` (kana/kanji) and
// `type:reading` backstop the top band. Latin script has no backstop, so the
// defect is invisible in the language that was built first.
//
// TWO WAYS TO FIX, for whoever picks this up:
//   1. Salt each gate independently — shouldReverseChoice already does
//      (`hash01(item.id + ":rev")`). Bands stop being mutually exclusive.
//   2. Guarantee a floor: any item that ends with < 2 kinds falls back into the
//      listen/produce band regardless of hash.
// (2) is the safer one — it cannot shift the global mix.
//
// TARGET IS ZERO for every language. Lower the ceilings below as they improve;
// never raise them.
import { test } from "node:test";
import assert from "node:assert/strict";
import { UNITS } from "../../src/data/index.js";
import * as R from "../../src/store/cardRouting.js";
import { reviewStepFor } from "../../src/store/reviewStep.js";

const GATES = {
  "listen:choice": R.shouldListen,
  "choice:reverse": R.shouldReverseChoice,
  "type:produce": R.shouldTypeProduce,
  "type:reading": R.shouldTypeReading,
  "listen:type": R.shouldListenType,
  "cloze:choice": R.shouldCloze,
  "particle:choice": R.shouldParticleCloze,
  "sentence:build": R.shouldSentence,
  conjugate: R.shouldConjugate,
  build: R.canBuildReading,
  trace: R.isTraceable,
  speak: R.shouldSpeak,
};

// The routing reads item.lang and DEFAULTS IT TO "ja" (cardRouting.js: isLatin).
// Flattening lessons without stamping lang therefore reports every French item as
// Japanese and silently inverts this whole measurement. Stamp it.
function itemsFor(lang) {
  return UNITS.filter((u) => u.lang === lang).flatMap((u) =>
    (u.lessons ?? []).flatMap((l) => (l.items ?? []).map((i) => ({ ...i, lang: u.lang })))
  );
}

function kindsFor(item) {
  const out = [];
  for (const [name, gate] of Object.entries(GATES)) {
    try {
      if (gate(item)) out.push(name);
    } catch {
      /* a gate that throws on an item simply doesn't route it */
    }
  }
  return out;
}

// Ceilings = the counts measured when this test was written. Ratchet down only.
//
// 2026-08-30, fix/latin-card-variety: ALL THREE ARE NOW ZERO. The cause was structural,
// not content. The hash bands were calibrated for the Japanese card set, and the 0.75
// ceiling on dictation was reserving the top quartile for cloze · sentence:build ·
// particle:choice — cards that are PRIORITY-ORDERED ahead of dictation at rung 2 and
// gated on the item's own content anyway. So the reservation protected nothing and cost
// everything that could not use it. Dictation now runs to the top of the range in every
// language; cloze and particle card counts are byte-identical before and after.
// es 219 -> 0, fr 172 -> 0, and ja's 12 yōon kana fell out with them.
const SINGLE_KIND_CEILING = { ja: 0, fr: 0, es: 0 };

for (const [lang, ceiling] of Object.entries(SINGLE_KIND_CEILING)) {
  test(`${lang}: items with only ONE card kind must not increase (target 0)`, () => {
    const stuck = itemsFor(lang).filter((i) => kindsFor(i).length === 1);
    assert.ok(
      stuck.length <= ceiling,
      `${lang}: ${stuck.length} items route to a single card kind (ceiling ${ceiling}). ` +
        `First few: ${stuck.slice(0, 5).map((i) => i.id).join(", ")}`
    );
  });
}

// THE PROPERTY THAT ACTUALLY CAUGHT THIS, and the one worth guarding from here.
//
// Read the gate functions and you learn which cards an item MAY route to. Read the
// runner and you learn which one it DOES. They are not the same question: three
// branches in reviewStepFor have no gate behind them at all, and two cards can both
// pass their gate while priority order means only one is ever shown. An item can
// therefore satisfy shouldListenType for its whole life and never once be heard,
// because a cloze wins ahead of it every time — which is exactly what was happening,
// and no gate-based assertion could see it.
//
// So this one runs the real dispatcher across every rung an item will ever hold. Zero
// is the standard, not a ceiling: the corpus is fully voiced, and rung 4 grades the
// learner SAYING the word aloud. Being asked to produce a word the app has never once
// pronounced is a defect, not a tuning preference.
const stepKind = (s) => (s.mode ? `${s.kind}:${s.mode}` : s.kind);
const EAR = new Set(["listen:choice", "listen:type"]);
const lifetimeKinds = (item) =>
  [...new Set([1, 2, 3, 4].map((rung) => stepKind(reviewStepFor({ ...item, rung }))))];

for (const lang of Object.keys(SINGLE_KIND_CEILING)) {
  test(`${lang}: no item with audio goes its whole life without being heard`, () => {
    const deaf = itemsFor(lang).filter(
      (i) => R.hasAudio(i) && !lifetimeKinds(i).some((k) => EAR.has(k))
    );
    assert.deepEqual(
      deaf.slice(0, 5).map((i) => i.id),
      [],
      `${lang}: ${deaf.length} items own a clip that no card ever plays`
    );
  });
}

test("every vocab item routes to at least one card kind", () => {
  for (const lang of Object.keys(SINGLE_KIND_CEILING)) {
    const dead = itemsFor(lang).filter((i) => i.type === "vocab" && kindsFor(i).length === 0);
    assert.equal(dead.length, 0, `${lang}: ${dead.length} vocab items route to NO card at all`);
  }
});

test("no language regresses below the ja variety floor by more than half", () => {
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
