// Dev Mode's Quick-card preview must actually show the card you asked for.
//
// WHY THIS EXISTS. `?card=<kind>` seeds a throwaway deck via kindSpec() in dev.js,
// then the runner decides what to render via reviewStepFor(). Those are two separate
// pieces of logic that have to agree, and nothing checked that they did. They drifted
// four times:
//
//   listen:type    picked on shouldListenType ALONE, but rung 2 resolves
//                  particle -> cloze -> dictation. Every Spanish match also clozed, so
//                  `?card=listen:type&lang=es` rendered a CLOZE card. French worked
//                  only by luck of which items matched first.
//   choice         \  earCrowdedOut was inserted into the rung-1 chain ahead of both
//   choice:reverse /  of these, and neither picker was updated — so both previews
//                     served listening cards instead.
//   type:meaning   picked vocab-only, but in Japanese EVERY vocab item is claimed by
//                  particle/cloze/dictation/reading before it can reach the meaning
//                  card. kana/kanji are what actually route there, so the pick found
//                  nothing and the preview was dead.
//
// Each was invisible because the preview is a human tool: you only find out by opening
// it and squinting at the card. That is exactly the kind of thing a test should own.
//
// The rule: for every LIVE_CARD_KIND, in every live language, the seeded items must
// ALL resolve to the kind that was asked for. Not "mostly" — a preview that shows two
// dictation cards and one cloze is still lying about what it is previewing.
import { test } from "node:test";
import assert from "node:assert/strict";
import { LIVE_CARD_KINDS } from "../../src/data/contract.js";
import { buildCardPreviewItems } from "../../src/store/dev.js";
import { reviewStepFor } from "../../src/store/reviewStep.js";
import { LANGUAGES, isLive } from "../../src/data/index.js";

// reviewStepFor returns { kind, mode } for the three typed cards; fold mode back in or
// type:meaning, type:reading and type:produce all collapse into one name and the test
// stops being able to tell them apart.
const stepKind = (step) => (step.mode ? `${step.kind}:${step.mode}` : step.kind);

// `teach` is not a review card — its route is the lesson sandbox, not `?card=`.
const REVIEW_KINDS = LIVE_CARD_KINDS.filter((k) => k !== "teach");

// Cards that only exist in a script language. type:reading and build both need a
// reading that differs from the front, and trace needs stroke data — in a Latin
// language the front IS the reading, so these correctly seed nothing. Asserting they
// are ABSENT is as much the contract as asserting the others are present.
const SCRIPT_ONLY = new Set(["type:reading", "build", "trace"]);

const LIVE = LANGUAGES.map((l) => l.id).filter((id) => isLive(id));

test("the live-language list is real, so nothing below passes vacuously", () => {
  assert.ok(LIVE.length >= 3, `expected the live languages, got ${JSON.stringify(LIVE)}`);
});

function seededItems(kind, lang) {
  const now = Date.now();
  return Object.values(buildCardPreviewItems(kind, lang)).filter(
    (i) => i.rung > 0 && i.srs && new Date(i.srs.due).getTime() <= now
  );
}

for (const lang of LIVE) {
  const script = lang === "ja";
  for (const kind of REVIEW_KINDS) {
    test(`${lang}: the "${kind}" preview renders ${kind}`, () => {
      const seeded = seededItems(kind, lang);

      if (!script && SCRIPT_ONLY.has(kind)) {
        assert.equal(seeded.length, 0, `${lang}: ${kind} is script-only and must seed nothing`);
        return;
      }

      assert.ok(
        seeded.length > 0,
        `${lang}: the "${kind}" preview seeded NO items — the launcher opens an empty review`
      );

      const kinds = [...new Set(seeded.map((i) => stepKind(reviewStepFor(i))))];
      assert.deepEqual(
        kinds,
        [kind],
        `${lang}: asked for "${kind}", the runner renders ${kinds.map((k) => `"${k}"`).join(" + ")} — ` +
          `kindSpec() and reviewStepFor() disagree about the rung-${seeded[0].rung} branch order`
      );
    });
  }
}
