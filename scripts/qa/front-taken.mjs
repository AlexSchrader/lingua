// Is this FRONT already taught in Hindi? — the probe unit61.js §B4 cites.
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

import { UNITS } from "../../src/data/index.js";
const LANG = process.argv[2];
if (!LANG) { console.error("usage: node scripts/qa/front-taken.mjs <lang> <front> [front ...]"); process.exit(2); }
const units = UNITS.filter((u) => u.lang === LANG);
if (!units.length) { console.error(`no units for language "${LANG}"`); process.exit(2); }
const byFront=new Map();
for (const u of units) for (const l of (u.lessons||[])) for (const it of (l.items||[]))
  byFront.set(it.front, `u${u.order}`);
const out=[];
for (const w of process.argv.slice(3)) {
  const h=byFront.get(w);
  if (h) out.push(`X${w}(${h})`);
}
console.log(out.length?("TAKEN: "+out.join(" ")):"all free");
