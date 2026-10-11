// WHICH PAIRS OF WORDS SOUND THE SAME? — a question the engine cannot answer.
//
// WHY THIS EXISTS. A listening card plays a clip of `front` and offers MEANINGS.
// If two items sound alike, both meanings are right answers to "what did you
// hear", the learner picks one, and a wrong pick drops a rung (mastery.js). The
// engine can exclude such a pair from each other's options — but only once it is
// told WHICH pairs those are.
//
// THE ENGINE CANNOT DECIDE THIS ALONE, and that is the whole reason this file is a
// report and not a fix. `reading` is an ORTHOGRAPHIC FOLD, not a pronunciation, and
// as a sound-alike test it is wrong in both directions:
//
//   says SAME, actually different   de schön/schon, würde/wurde, hätte/hatte
//                                   no måle/male, humør/humor
//                                   es hablo/habló, trabajo/trabajó
//   says DIFFERENT, actually same   any homophone the two spellings do not share
//                                   a fold for
//
// Excluding every fold match would delete exactly the ö/o and stress contrasts
// those languages most need to drill. So this lists CANDIDATES for review.
//
// WHO REVIEWS IT. The first version of this header said "only a human can finish"
// this, and Curriculum CC corrected it the same day: there IS no human ear on this
// project. CLAUDE.md makes the LLM native-speaker proxy the accepted naturalness
// gate precisely because Alex has no native reviewer (2026-07-12). So a Curriculum
// seat's verdict IS the answer, not a placeholder for one — with the caveat that it
// is one correlated signal, strongest on orthographic-accent pairs and on whichever
// language that seat has been authoring.
//
// Japanese is excluded: there the reading IS the pronunciation, so its collisions
// are decided in code, not here.
//
// ANSWERED 2026-10-10 for fr/es/de/no/pt: 12 SAME, 20 DIFFERENT, 1 borderline
// (pt às/as — DIFFERENT in European Portuguese, SAME in Brazilian; the corpus is
// EP). Re-run this when new units land; the verdicts live in the engine's
// separability data, not in this file.
//
// WHAT TO DO WITH THE OUTPUT: for each group, say whether the words genuinely sound
// identical to a learner. Same sound -> they must never be offered against each
// other. Audibly different -> they are GOOD distractors and should be left alone.
//
//   node scripts/qa/homophone-candidates.mjs fr
//   node scripts/qa/homophone-candidates.mjs fr es de no pt
//
// An unknown or missing language EXITS NON-ZERO rather than defaulting to one, per
// CLAUDE.md — five probes in this directory were silently hardcoded to Hindi and
// answered confidently about the wrong language for weeks.
import { UNITS } from "../../src/data/index.js";
import { normalizeReading } from "../../src/store/answer.js";

const KNOWN = [...new Set(UNITS.map((u) => u.lang))];
const args = process.argv.slice(2).filter((a) => !a.startsWith("-"));

if (!args.length) {
  console.error(`usage: node scripts/qa/homophone-candidates.mjs <lang>...\nknown: ${KNOWN.join(" ")}`);
  process.exit(2);
}
const unknown = args.filter((a) => !KNOWN.includes(a));
if (unknown.length) {
  console.error(`unknown language(s): ${unknown.join(" ")}\nknown: ${KNOWN.join(" ")}`);
  process.exit(2);
}
if (args.includes("ja")) {
  console.error("ja is excluded on purpose: its reading IS its pronunciation, so same-reading\nitems are decided in the engine rather than reviewed here.");
  process.exit(2);
}

let groupCount = 0;
let itemCount = 0;

for (const lang of args) {
  const byFold = new Map();
  for (const u of UNITS) {
    if (u.lang !== lang) continue;
    for (const l of u.lessons ?? []) {
      for (const it of l.items ?? []) {
        if (it.type !== "vocab" && it.type !== "kanji") continue;
        const fold = normalizeReading(it.reading ?? it.front, lang);
        if (!fold) continue;
        const row = { front: it.front, meaning: it.meaning, unit: u.order, id: it.id, conj: it.conjForm ?? null };
        const g = byFold.get(fold) ?? [];
        g.push(row);
        byFold.set(fold, g);
      }
    }
  }

  const groups = [...byFold.entries()]
    // SAME FRONT IS A DIFFERENT BUG AND NOT YOURS. Five items with front "faire"
    // (to do / I will do / you will do ...) are conjugation drills: correct by
    // design, and unanswerable only on cards that hide the tense. That is a card
    // ROUTING defect, owned by Feature CC. Filtering them out here keeps this
    // report to the question curriculum can actually answer.
    .map(([fold, rows]) => [fold, rows, new Set(rows.map((r) => r.front)).size])
    .filter(([, rows, distinctFronts]) => rows.length > 1 && distinctFronts > 1)
    // Identical displayed meaning is already handled: buildOptions de-duplicates on
    // the displayed string, so "fish"/"fish" can never both appear.
    .filter(([, rows]) => new Set(rows.map((r) => String(r.meaning ?? "").toLowerCase().trim())).size > 1)
    .sort((a, b) => a[0].localeCompare(b[0]));

  console.log(`\n=== ${lang} — ${groups.length} candidate group(s) ===`);
  for (const [fold, rows] of groups) {
    groupCount++;
    itemCount += rows.length;
    const sameUnit = new Set(rows.map((r) => r.unit)).size < rows.length;
    console.log(`\n  sounds like "${fold}"${sameUnit ? "   [SAME UNIT — most likely to be offered together]" : ""}`);
    for (const r of rows) console.log(`      ${r.front.padEnd(18)} ${r.meaning}   (u${r.unit})`);
  }
}

console.log(`\n${groupCount} group(s), ${itemCount} item(s) to review.`);
console.log(`For each: SAME SOUND -> never offer against each other. DIFFERENT -> good distractor, leave it.`);
