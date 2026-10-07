// Is this READING already used in <lang>? — the probe unit61.js §B4 cites.
//
//   node scripts/qa/reading-taken.mjs <lang> [reading ...]   # named readings
//   node scripts/qa/reading-taken.mjs <lang>                 # every duplicate
//
// ⚠️ IT WAS HARDCODED TO HINDI AND THAT MADE IT A FALSE GREEN FOR EVERY OTHER
// LANGUAGE. It did `import { HI_UNITS }` with no language argument, so a Russian
// seat running it got Hindi's numbers. The coincidence that hid it: Hindi had
// exactly 2,328 cards, which is exactly what Russian had before its B2 band — so
// the output `2328 distinct readings, 0 duplicated` looked like a correct Russian
// result. Passing `ru` was worse: the argument was read as a READING to look up,
// so it printed `free ru`, which reads like a clean bill of health.
// Found by the ru B2 block-3 seat, which measured the invariant with its own
// committed probe instead and reported the tool. The language is REQUIRED now and
// an unknown one exits 2.
//
// WHY IT EXISTS: `contract.js` enforces front uniqueness and NOT reading
// uniqueness, but unit1.js §2 makes a one-reading-per-front invariant the whole
// basis of the dictation and glyph cards — two fronts sharing a reading is one
// card with two right answers. Hindi additionally MERGES retroflex and dental in
// word readings (§1b), so the collisions are not where a speaker expects them.
// **Found by this probe on B1 block 1: दर reads `dar` and so does डर (u27).**
// दर was dropped; §1b's escape hatch says the repair is डर → `ddar`.
// With no arguments it reports the language-wide count — 1,440 fronts to 1,440
// distinct readings before B1, and that invariant must hold after it.

import { UNITS } from "../../src/data/index.js";

const LANG = process.argv[2];
const langs = [...new Set(UNITS.map((u) => u.lang))];
if (!LANG || !langs.includes(LANG)) {
  console.error(`usage: node scripts/qa/reading-taken.mjs <lang> [reading ...]`);
  console.error(`  known: ${langs.join(" ")}`);
  process.exit(2);
}
const byR = new Map();
for (const u of UNITS.filter((x) => x.lang === LANG))
  for (const l of u.lessons || []) for (const it of l.items || []) {
    if (!it.reading) continue;
    if (!byR.has(it.reading)) byR.set(it.reading, []);
    byR.get(it.reading).push(`${it.front}@u${u.order}`);
  }
const args = process.argv.slice(3);
if (args.length) {
  for (const r of args) console.log(byR.has(r) ? `COLLIDE ${LANG} ${r}: ${byR.get(r).join(" ")}` : `free ${LANG} ${r}`);
} else {
  let n = 0;
  for (const [r, v] of byR) if (v.length > 1) { n++; console.log(`DUP ${r}: ${v.join(" ")}`); }
  console.log(`${LANG}: ${byR.size} distinct readings, ${n} duplicated`);
}
