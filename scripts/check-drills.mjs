// Drill verifier — does each item's drill actually BUILD the cards it enables?
//
//   npm run check:drills                 every language
//   npm run check:drills -- no           one language
//   npm run check:drills -- pt 51-87     one language, one unit range
//   npm run check:drills -- no -v        list every item, not just the failures
//
// WHY THIS EXISTS, AND WHY IT IS IN THE GATE.
//
// A `drill` must contain its item's `front` as a whole word. If it does not,
// `canCloze` and `canSentence` both go false and that item SILENTLY loses the
// cloze and sentence-build card kinds. No error, nothing red — the card simply
// stops being offered two of its kinds, and the learner never produces that word
// in a sentence. `validate:content` checks the drill's SHAPE and `lint:curriculum`
// does not model the rule at all, so all five gate steps stay green while a band
// quietly loses cards. Two languages paid for that independently in one week:
// Norwegian found and fixed it in `content/no-a2-block2` (205052f1, 2026-09-12),
// and Portuguese broke three drills in an assembly pass the next day.
//
// IT IMPORTS THE REAL ENGINE PREDICATES — it does not reimplement them. A checker
// that approximates the rule drifts from it, and then passes drills the engine
// rejects. This replaces two hardcoded per-language copies (check-drills.mjs for
// `no`, check-drills-de.mjs for `de`); three copies of one rule was itself the bug.
import { canCloze, canSentence, sentenceTokens, findFrontInExample } from "../src/store/cardRouting.js";
import { UNITS } from "../src/data/index.js";

const argv = process.argv.slice(2);
const verbose = argv.includes("-v") || argv.includes("--verbose");
const positional = argv.filter((a) => !a.startsWith("-"));
const langArg = positional[0] ?? null;
const rangeArg = positional[1] ?? null;

let lo = -Infinity, hi = Infinity;
if (rangeArg) {
  const m = /^(\d+)-(\d+)$/.exec(rangeArg);
  if (!m) {
    console.error(`bad range "${rangeArg}" — expected e.g. 51-87`);
    process.exit(2);
  }
  lo = Number(m[1]);
  hi = Number(m[2]);
}

const langs = langArg ? [langArg] : [...new Set(UNITS.map((u) => u.lang))].sort();

let hardFailures = 0;
let totalChecked = 0;

for (const lang of langs) {
  const units = UNITS
    .filter((u) => u.lang === lang && (u.order ?? 0) >= lo && (u.order ?? 0) <= hi)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const rows = [];
  for (const u of units) {
    for (const l of u.lessons ?? []) {
      for (const it of l.items ?? []) {
        if (it.type !== "vocab") continue;
        if (!it.drill) continue; // a missing drill is the curriculum lint's business, not ours
        totalChecked++;
        const cloze = canCloze(it);
        const sentence = canSentence(it);
        // A front of one character can NEVER cloze — canCloze requires >= 2 chars,
        // deliberately (a one-letter blank is not a question). So for glyph-style
        // items only `sentence` is in scope; reporting their cloze as broken is
        // crying wolf, and a checker that cries wolf gets ignored and then removed.
        const clozePossible = [...(it.front ?? "")].length >= 2;
        if ((cloze || !clozePossible) && sentence) {
          if (verbose) rows.push({ id: it.id, ok: true, note: `${sentenceTokens(it)?.length ?? 0} tokens` });
          continue;
        }
        // Say WHICH half failed and why — "broken" with no cause costs the author
        // a debugging session per card.
        const found = findFrontInExample(it);
        const why = !found
          ? `drill does not contain the front "${it.front}" as a whole word`
          : !sentence
            ? "drill is not tokenisable into 3-8 clean tokens (punctuation, or too few/many words)"
            : "cloze unavailable";
        rows.push({
          id: it.id, ok: false, cloze: clozePossible ? cloze : "n/a", sentence, why,
          drill: it.drill?.jp ?? "",
        });
      }
    }
  }

  const bad = rows.filter((r) => !r.ok);
  hardFailures += bad.length;

  if (bad.length || verbose) {
    console.log(`\n=== ${lang} ${rangeArg ? `(units ${rangeArg}) ` : ""}===`);
    for (const r of rows) {
      if (r.ok) { console.log(`  ok   ${r.id}  ${r.note}`); continue; }
      console.log(`  FAIL ${r.id}`);
      console.log(`       cloze=${r.cloze} sentence=${r.sentence} — ${r.why}`);
      if (r.drill) console.log(`       drill: ${r.drill}`);
    }
  }
}

console.log(
  `\nDrills checked: ${totalChecked} across ${langs.length} language(s) — ` +
  (hardFailures ? `${hardFailures} BROKEN` : "0 broken")
);

if (hardFailures) {
  console.log(
    "\nA broken drill costs its item the cloze and sentence-build cards, silently.\n" +
    "Fix: make the drill contain the item's front as a whole word, in 3-8 tokens,\n" +
    "with no sentence-internal punctuation. Case does not matter — a drill that\n" +
    "starts with the front is allowed to capitalise it."
  );
  process.exit(1);
}
