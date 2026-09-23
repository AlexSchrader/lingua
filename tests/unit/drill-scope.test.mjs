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

// Drills the oracle FLAGS on main. Pinned so the count cannot grow.
//
// ⚠️ THESE ARE NOT ALL DEFECTS, and I shipped this file claiming they were.
// Checked afterwards: every one I sampled is an INFLECTION OF A TAUGHT WORD that
// `derive()` cannot generate -
//     gewinnen u45 -> gewonnen       schmecken u41 -> geschmeckt
//     hören    u1  -> gehört         hoch      u10 -> hoher
//     bei      u14 -> beim (bei + dem)
// so the oracle over-reports past participles (ge- + stem + t/en), inflected
// adjectives, and preposition+article contractions. A German B2 seat measuring
// its own block found the same split: 38 of 144 flags were oracle gaps and 106
// were real, and rewriting the 38 would have churned sound drills.
//
// The ratchet is still worth having - the 106 were real, every gate was green,
// and nothing else in the suite looks at a drill's vocabulary at all. But a
// failure here means GO AND CHECK, not GO AND REWRITE.
//
// ⚠️ THE FREE SET IS GLOBAL, SO THIS LIST GOES STALE IN BOTH DIRECTIONS.
// Measured at the German B2 merge, 2026-09-23: 60 German unit files declare a
// `// FREE:` header, 665 tokens between them, and `buildScope` folds every one
// into a SINGLE corpus-wide set - there is no per-unit scoping. A token declared
// free in u124 is therefore licensed from u1 backwards.
//
// That is not hypothetical. Block 3 declared `beim` free in u124 to cover its own
// past participles, and that silently un-flagged `de-u61l2-dieverantwortung` and
// `de-u76l3-dieurkunde` - two pins on `main`, sixty units earlier, neither of them
// block 3's to touch. They had to be deleted from this list at merge time.
//
// So when several blocks land at once, expect BOTH assertions below to fire: new
// drills appear unpinned, and old pins stop being flagged because somebody else's
// FREE line reached back for them. Correct the LIST; never relax either assertion.
// Note also that a `// FREE:` line and a pin here are two ways to record the SAME
// oracle gap, and the two German B2 blocks each picked a different one - block 3
// declared its participles free (silent, global), block 2 left them flagged
// (visible, pinned). Pinning is the better of the two: it is per-id, it is
// reviewable, and it cannot reach backwards into another block's units.
const ORACLE_FLAGGED = new Set([
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
  // de-u61l2-dieverantwortung and de-u76l3-dieurkunde were pinned here until the
  // German B2 merge (2026-09-23) and are deliberately GONE - see "THE FREE SET IS
  // GLOBAL" below. Both drills read "liegt beim", and u124 now declares `beim`
  // free, which licenses it corpus-wide. The oracle no longer flags them, so the
  // stale-pin assertion below requires their removal.
  "de-u61l4-dieaussage",
  "de-u62l3-dergastgeber",
  "de-u62l4-kurzfristig",
  "de-u62l4-trotz",
  "de-u84l2-zweifellos",
  "de-u84l3-letztlich",

  // ── German B2 block 2 (u101-u113), added by the merge seat 2026-09-23 ─────────
  // These are the 38 the block-2 drill-fix seat deliberately did NOT rewrite: it
  // fixed 106 real out-of-scope drills and left these, because each is an
  // inflection of a word German teaches LONG before the flagging unit. Every
  // lemma below was resolved against the scope map before pinning - none was
  // taken on trust:
  //   gelten    u58 -> gilt         betreffen u52 -> betrifft
  //   halten    u44 -> hielt        fallen    u44 -> fiel
  //   verlieren u45 -> verloren     entstehen u52 -> entstand
  //   steigen   u19 -> stiegen      sinken    u53 -> gesunken
  //   hängen    u44 -> hing         ablaufen  u76 -> abgelaufen
  //   entscheiden u48 -> entschieden  ablehnen u48 -> abgelehnt
  //   antworten u20 -> geantwortet  planen    u48 -> geplant
  //   klären    u10 -> geklärt      wachsen   u26 -> gewachsen
  //   erwarten  u54 -> erwartete    schiefgehen u60 -> schiefgegangen
  //   teuer     u10 -> teurer       früher    u21 -> früheren
  //   solcher   u71 -> solche/-n    Kind      u4  -> Kindern
  //   Nachbar   u32 -> Nachbarin    derselbe  u71 -> dasselbe
  // i.e. past participles, strong preterites/3sg, inflected adjectives, the
  // feminine -in, and a neuter determiner - the four gaps `derive()` has always
  // had, now with a fifth. Rewriting them would churn 38 sound drills.
  "de-u101l1-dasabkommen",
  "de-u101l2-dievorgabe",
  "de-u101l2-diesanktion",
  "de-u101l3-derrohstoff",
  "de-u102l4-betreuen",
  "de-u103l1-derubergang",
  "de-u104l1-serios",
  "de-u104l3-derboulevard",
  "de-u104l4-diereichweite",
  "de-u104l4-dieemporung",
  "de-u104l4-derskandal",
  "de-u105l3-diebeherrschung",
  "de-u105l4-dertrost",
  "de-u106l1-hattefast",
  "de-u106l1-umeinhaar",
  "de-u107l2-imrahmen",
  "de-u107l2-imzuge",
  "de-u107l2-imhinblickauf",
  "de-u107l4-dersachverhalt",
  "de-u108l1-somit",
  "de-u108l1-insbesondere",
  "de-u108l4-imwesentlichen",
  "de-u109l3-wohlgemerkt",
  "de-u110l1-dieverfugung",
  "de-u110l1-dierichtlinie",
  "de-u110l4-diebekanntmachung",
  "de-u111l1-derruckgang",
  "de-u111l1-sprunghaft",
  "de-u111l2-ausbleiben",
  "de-u111l2-vorubergehend",
  "de-u111l4-dauerhaft",
  "de-u112l1-insaugefassen",
  "de-u112l2-zubucheschlagen",
  "de-u113l1-bislang",
  "de-u113l2-unlangst",
  "de-u113l3-etliche",
  "de-u113l3-allesamt",
  "de-u113l4-spatestens",
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

  const novel = [...live].filter(([id]) => !ORACLE_FLAGGED.has(id));
  assert.deepEqual(
    novel.map(([id, miss]) => `${id}: drill uses ${miss.join(", ")} before it is taught`),
    [],
    "a NEW drill uses a token the scope oracle cannot account for. VERIFY BEFORE " +
    "REWRITING: run `npm run taught -- de` on the token's lemma. The oracle does " +
    "NOT generate past participles (ge- + stem + t/en), inflected adjectives, or " +
    "preposition+article contractions (beim, zum, im), so it over-reports those. " +
    "If the lemma IS taught, the drill is fine and the oracle needs extending - " +
    "add the id here with a note. If it is not taught, fix the drill."
  );

  const stale = [...ORACLE_FLAGGED].filter((id) => !live.has(id));
  assert.deepEqual(stale, [],
    "these drills are pinned but the oracle no longer flags them - delete them from " +
    "ORACLE_FLAGGED so the list keeps meaning what it says"
  );

  // The oracle must not go quiet. If buildScope ever returns an empty corpus this
  // test would pass by checking nothing, which is the failure mode the whole file
  // exists to prevent.
  const drills = units.flatMap((u) => (u.lessons ?? []).flatMap((l) => (l.items ?? []).filter((i) => i.drill?.jp)));
  assert.ok(drills.length > 1000, `expected the real German drill corpus, saw ${drills.length}`);
});
