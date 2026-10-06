// Is this READING already used in Hindi? — the probe unit61.js §B4 cites.
//
//   node scripts/qa/reading-taken.mjs [reading ...]     # named readings
//   node scripts/qa/reading-taken.mjs                   # every duplicate, language-wide
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

import { HI_UNITS } from "../../src/data/hi/index.js";
const byR=new Map();
for (const u of HI_UNITS) for (const l of (u.lessons||[])) for (const it of (l.items||[])) {
  if (!it.reading) continue;
  if (!byR.has(it.reading)) byR.set(it.reading, []);
  byR.get(it.reading).push(`${it.front}@u${u.order}`);
}
const args=process.argv.slice(2);
if (args.length) { for (const r of args) console.log(byR.has(r)?`COLLIDE ${r}: ${byR.get(r).join(" ")}`:`free ${r}`); }
else { let n=0; for (const [r,v] of byR) if (v.length>1) { n++; console.log(`DUP ${r}: ${v.join(" ")}`);} console.log(`${byR.size} distinct readings, ${n} duplicated`); }
