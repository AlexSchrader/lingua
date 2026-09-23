// DRILL VOCABULARY SCOPE - the rule that was enforced only by a script someone
// had to remember to run, which is exactly how 134 out-of-scope drills shipped
// green on a German B2 branch.
//
// An example sentence may only use vocabulary taught at or before its unit. A
// DRILL is a sentence too, and the same rule applies - but nothing in the gate
// checks it:
//
//   validate:content   checks `drill` is { jp, en }, both non-empty. SHAPE ONLY.
//   lint:curriculum    reads `example.jp`. It never reads `drill`.
//   drill-corpus.test  checks a drill BUILDS a card (canCloze/canSentence).
//                      Buildable is not the same as in scope.
//   check-drills-de    catches it - and is a manual script.
//
// So a block could be 312/312 drills buildable, every gate green, and still be
// teaching its examples out of a vocabulary the learner has not met. A sibling
// block scored 0/312 on the same check purely because its sentence shapes happen
// to exclude finite verbs and declined determiners - the difference was luck of
// house style, not rigour.
//
// GERMAN ONLY, deliberately and visibly. `de-vocab-scope.mjs` is a real oracle -
// it replicates cardRouting's own canCloze/sentenceTokens rather than
// approximating them - and German is the language where the defect was measured.
// Norwegian's check-drills.mjs tests BUILDABILITY, not scope, and pt has no drill
// oracle at all. Adding a language here is one entry in ORACLES once that
// language has an `outOfScope`; until then this test must not pretend to cover it.
import test from "node:test";
import assert from "node:assert/strict";
import { buildScope } from "../../scripts/de-vocab-scope.mjs";

// Drills already out of scope on main. DEBT, NOT PERMISSION. The ratchet fails on
// a 20th, and it ALSO fails if one of these is fixed and left in the list - a
// baseline that drifts out of date stops describing anything.
const KNOWN_OUT_OF_SCOPE = new Set([
  "de-u53l1-erheblich",
  "de-u54l1-offenbar",
  "de-u54l2-zumindest",
  "de-u54l4-jedenfalls",
  "de-u55l2-diepartei",
  "de-u56l4-deraufwand",
  "de-u58l1-dieausnahme",
  "de-u58l1-dievernunft",
  "de-u58l2-dasprinzip",
  "de-u59l4-erneut",
  "de-u61l1-dievorschrift",
  "de-u61l2-dieverantwortung",
  "de-u61l4-dieaussage",
  "de-u62l3-dergastgeber",
  "de-u62l4-kurzfristig",
  "de-u62l4-trotz",
  "de-u76l3-dieurkunde",
  "de-u84l2-zweifellos",
  "de-u84l3-letztlich",
]);

test("GUARD: no NEW drill uses vocabulary its unit has not taught (de)", async () => {
  const { outOfScope, units } = await buildScope(process.cwd());

  const live = new Map(); // id -> the offending tokens
  for (const u of units) {
    for (const l of u.lessons ?? []) {
      for (const it of l.items ?? []) {
        if (!it.drill?.jp) continue;
        const miss = outOfScope(it.drill.jp, u.order);
        if (miss.length) live.set(it.id, miss);
      }
    }
  }

  const novel = [...live].filter(([id]) => !KNOWN_OUT_OF_SCOPE.has(id));
  assert.deepEqual(
    novel.map(([id, miss]) => `${id}: drill uses ${miss.join(", ")} before it is taught`),
    [],
    "a NEW drill teaches its sentence out of vocabulary the learner has not met. " +
    "Fix the drill, not this list. `node scripts/check-drills-de.mjs <from> <to>` " +
    "reports the same thing per block."
  );

  const stale = [...KNOWN_OUT_OF_SCOPE].filter((id) => !live.has(id));
  assert.deepEqual(stale, [],
    "these drills are pinned as known debt but are now in scope - delete them from " +
    "KNOWN_OUT_OF_SCOPE so the list keeps meaning what it says"
  );

  // The oracle must not go quiet. If buildScope ever returns an empty corpus this
  // test would pass by checking nothing, which is the failure mode the whole file
  // exists to prevent.
  const drills = units.flatMap((u) => (u.lessons ?? []).flatMap((l) => (l.items ?? []).filter((i) => i.drill?.jp)));
  assert.ok(drills.length > 1000, `expected the real German drill corpus, saw ${drills.length}`);
});
