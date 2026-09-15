// STRICT vocabulary-scope check for German examples and drills.
//
// Why this exists alongside lint:curriculum. lint's scope check excuses a token
// via isInflection(): if the token shares a 3-character prefix with a taught word
// and differs by at most 3 characters, it is waved through as an inflection
// (src/data/lint.js:226). That bound is what stops "par" vouching for "parlons",
// but it has a consequence nobody intended: ANY SHORT FUNCTION WORD THAT HAPPENS
// TO PREFIX A LONGER TAUGHT WORD IS INVISIBLE TO THE CHECK, in every language.
// Norwegian found `som` excused this way and never taught in its 480 cards.
// German's candidates are the same shape: der/derselbe, ein/einmal, im/immer,
// an/andere, so/sobald, ob/obwohl, um/umsteigen.
//
// This check applies NO inflection excuse. It knows only:
//   - taught fronts, and the words inside a multi-word front
//   - regular German verb morphology derived from a taught infinitive
//   - the strong-verb table (shared with check-drills-de.mjs)
//   - regular noun plurals
//   - the // FREE: declarations
// Everything else is reported. It will over-report; that is the point. Read it.
//
//   node scripts/scope-strict-de.mjs            whole corpus
//   node scripts/scope-strict-de.mjs 21 30      one block
//   node scripts/scope-strict-de.mjs --short    only tokens of 3 chars or fewer,
//                                               i.e. exactly lint's blind spot
//   node scripts/scope-strict-de.mjs --selftest prove the check can fail
import { buildScope } from "./de-vocab-scope.mjs";

const root = process.cwd();
const argv = process.argv.slice(2);
const shortOnly = argv.includes("--short");
const selftest = argv.includes("--selftest");
const nums = argv.filter((a) => /^\d+$/.test(a)).map(Number);

// The taught-word oracle and German morphology are SHARED with
// check-drills-de.mjs, in de-vocab-scope.mjs. What is NOT shared, and what makes
// this script different, is that nothing here applies an inflection EXCUSE: a
// token is licensed only if a taught front derives it by a stated rule.
const { outOfScope, lastUnit: LAST, units } = await buildScope(root);
const check = (text, order) => outOfScope(text, order);

// --- selftest: a rule you cannot see fail is a rule you cannot trust -----------
if (selftest) {
  let ok = true;
  const must = (label, cond) => { console.log(`  ${cond ? "PASS" : "FAIL"}  ${label}`); if (!cond) ok = false; };
  must("a word taught nowhere is reported", check("Das Krokodil ist hier", 30).includes("krokodil"));
  must("a taught front is not reported", check("Die Familie ist hier", 30).length === 0);
  must("a taught word is NOT excused before its unit", check("Die Familie ist hier", 2).includes("familie"));
  must("a strong-verb form of a taught infinitive is excused", !check("Er weiß es", 30).includes("weiss"));
  must("a short function word is NOT excused by prefixing a longer taught word",
       check("Ich bin som hier", 30).includes("som"));
  // The next two are REGRESSION cases: each was a live bug that failed correct
  // content, and each was invisible because no test exercised it. A checker that
  // cannot fail on the cases you never ran is the failure mode this crew pays for.
  must("a finite form of an umlauted modal is excused (IRREG keys must be folded)",
       !check("Leider kann ich heute kommen", 30).includes("kann"));
  must("a form of an -ern verb is excused (dauern ends -rn, not -en)",
       !check("Der Ausflug dauert drei Stunden", 30).includes("dauert"));
  console.log(ok ? "\nselftest: the check can fail" : "\nselftest: BROKEN — do not trust its output");
  process.exit(ok ? 0 : 1);
}

const from = nums[0] ?? 1, to = nums[1] ?? LAST;
const hits = new Map();
for (const unit of units) {
  if (unit.order < from || unit.order > to) continue;
  for (const l of unit.lessons) for (const it of l.items ?? []) {
    for (const [kind, src] of [["example", it.example], ["drill", it.drill]]) {
      if (!src?.jp) continue;
      for (const w of check(src.jp, unit.order)) {
        if (shortOnly && w.length > 3) continue;
        if (!hits.has(w)) hits.set(w, []);
        hits.get(w).push(`${it.id} ${kind}`);
      }
    }
  }
}
const rows = [...hits.entries()].sort((a, b) => b[1].length - a[1].length);
console.log(`de u${from}-u${to}: ${rows.length} distinct out-of-scope token(s)${shortOnly ? " (3 chars or fewer)" : ""}`);
for (const [w, where] of rows) console.log(`  ${w.padEnd(16)} ${where.length}x   ${where.slice(0, 3).join(", ")}${where.length > 3 ? " …" : ""}`);
