// MEASURE A THEME'S HOLE BEFORE ALLOCATING A SLOT TO IT — the probe unit98.js §C6
// cites, and the one that made B2's allocation cost 41 re-authored cards at B1
// instead of A2's 104.
//
//   node scripts/qa/theme-holes.mjs [candidates.txt]
//
// Default file: scripts/qa/theme-holes-hi.txt, which is the ACTUAL B2 allocation
// evidence — 40 probed themes, each line `slot|title|w1 w2 ...`. Output is one
// block per theme, sorted least-spent first: `taken/probed`, the owning unit of
// every taken word, and the FREE remainder.
//
// ⚠️ LIMIT 1, AND IT IS THE SAME ONE front-taken.mjs HAS: **it compares STRINGS,
// so it cannot see an inflection.** कड़ी is the feminine of कड़ा (u19), लड़ी the
// feminine perfective of लड़ना (u48), मानो the imperative of मानना (u26) — all
// three come back FREE. Check every candidate against the -ा/-ी/-े/-ो paradigm of
// every taught verb and -आ adjective by hand as well.
// ⚠️ LIMIT 2: **IT IS HINDI-ONLY.** It imports HI_UNITS directly, exactly as
// front-taken.mjs and gloss-taken.mjs do. It is not a cross-language tool and
// nothing should cite it as one.
// ⚠️ LIMIT 3: a theme list proves the FIELD is open, NOT that 24 cards exist in
// it. u98's first draft lost दावा and तर्कसंगत to `front-taken.mjs` after both had
// passed this probe, because this probe never contained them.
//
// ✅ WHAT IT DOES THAT front-taken.mjs DOES NOT: it flags a PRECOMPOSED NUKTA.
// The hi corpus is decomposed (ज + ़, U+091C U+093C), so a precomposed ज़ (U+095B)
// is a different string and comes back "free" when the word is already taught.
// One precomposed word made scope-hi report a taught word untaught in six
// sentences while validate:content stayed green.
import { readFileSync } from "node:fs";
import { HI_UNITS } from "../../src/data/hi/index.js";
const byFront = new Map();
for (const u of HI_UNITS) for (const l of (u.lessons || [])) for (const it of (l.items || []))
  if (!byFront.has(it.front)) byFront.set(it.front, `u${u.order}`);
const PRE = /[\u0929\u0931\u0934\u0958-\u095F]/;
const lines = readFileSync(process.argv[2] ?? "scripts/qa/theme-holes-hi.txt", "utf8").trim().split(/\r?\n/).filter((l) => l && !l.startsWith("#"));
const rows = [];
for (const line of lines) {
  const [slot, title, words] = line.split("|");
  const ws = words.trim().split(/\s+/);
  const taken = [], free = [], bad = [];
  for (const w of ws) {
    if (PRE.test(w)) bad.push(w);
    const o = byFront.get(w);
    if (o) taken.push(`${w}(${o})`); else free.push(w);
  }
  rows.push({ slot, title, n: ws.length, t: taken.length, taken, free, bad });
}
rows.sort((a, b) => a.t / a.n - b.t / b.n);
for (const r of rows) {
  console.log(`\n${r.slot.padEnd(6)} ${r.title}   ${r.t}/${r.n} taken`);
  if (r.bad.length) console.log(`   PRECOMPOSED NUKTA: ${r.bad.join(" ")}`);
  if (r.taken.length) console.log(`   TAKEN: ${r.taken.join(" ")}`);
  console.log(`   FREE(${r.free.length}): ${r.free.join(" ")}`);
}
