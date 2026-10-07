// Is this FRONT already taught in <lang>? — the probe unit61.js §B4 cites.
//
//   node scripts/qa/front-taken.mjs <front> [front ...]
//
// Prints one line per TAKEN front with the unit that owns it, or "all free".
// WHY IT EXISTS: `validate:content` catches a duplicate front only AFTER you have
// written the card, and `npm run taught -- hi` prints 1,440 lines you then have to
// read. This answers the one question an author actually has, for a batch of
// candidates, before a single card is written.
// ⚠️ LIMIT, AND IT IS THE IMPORTANT ONE: **it compares STRINGS, so it cannot see an
// inflection.** B1 block 1 hit three homographs it passed cleanly — कड़ी is the
// feminine of कड़ा (u19), लड़ी the feminine perfective of लड़ना (u48), मानो the
// imperative of मानना (u26). Check your candidate against the -ा/-ी/-े/-ो paradigm
// of every taught verb and -आ adjective by hand as well.

// ⚠️ IT WAS HARDCODED TO HINDI, AND THAT MADE IT A FALSE GREEN FOR EVERY OTHER
// LANGUAGE. It did `import { LANG_UNITS }` with no language argument, so an
// Indonesian seat probing `bebas` and `kebebasan` — both taught, at u50 and u61 —
// got "all free", and a gloss query for "freedom" came back `COLLIDE -> आज़ादी@u32`,
// a HINDI answer to an Indonesian question, stated as fact.
//
// Found by the id B1 crew lead, which had built its own affix-stripping probe
// before it noticed, so no card was authored against the false green. FOURTH
// instance in this directory: `reading-taken.mjs` had it until 2026-10-05 and
// `scope-strict-drills.mjs` before that. **A probe in scripts/qa/ that does not
// take a language argument should be assumed to be lying.**
//
// The language is REQUIRED now and an unknown one exits 2.
import { UNITS } from "../../src/data/index.js";

const LANG = process.argv[2];
const LANGS = [...new Set(UNITS.map((u) => u.lang))];
if (!LANG || !LANGS.includes(LANG)) {
  console.error(`usage: node scripts/qa/front-taken.mjs <lang> <front> [front ...]`);
  console.error(`  known: ${LANGS.join(" ")}`);
  process.exit(2);
}
const LANG_UNITS = UNITS.filter((u) => u.lang === LANG);
const byFront=new Map();
for (const u of LANG_UNITS) for (const l of (u.lessons||[])) for (const it of (l.items||[]))
  byFront.set(it.front, `u${u.order}`);
const out=[];
for (const w of process.argv.slice(3)) {
  const h=byFront.get(w);
  if (h) out.push(`${w}(${h})`);
}
console.log(out.length?("TAKEN: "+out.join(" ")):"all free");
