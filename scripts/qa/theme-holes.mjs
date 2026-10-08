// MEASURE A THEME'S HOLE BEFORE ALLOCATING A SLOT TO IT — the probe unit98.js §C6
// cites, and the one that made B2's allocation cost 41 re-authored cards at B1
// instead of A2's 104.
//
//   node scripts/qa/theme-holes.mjs <lang> [candidates.txt]
//
// Default file: scripts/qa/theme-holes-<lang>.txt. `theme-holes-hi.txt` is the
// ACTUAL hi B2 allocation evidence — 40 probed themes, each line
// `slot|title|w1 w2 ...`. Output is one block per theme, sorted least-spent first:
// `taken/probed`, the owning unit of every taken word, and the FREE remainder.
//
// ⚠️ LIMIT 1, AND IT IS THE SAME ONE front-taken.mjs HAS: **it compares STRINGS,
// so it cannot see an inflection.** कड़ी is the feminine of कड़ा (u19), लड़ी the
// feminine perfective of लड़ना (u48), मानो the imperative of मानना (u26) — all
// three come back FREE. ✅ **`scripts/qa/candidate-check.mjs <lang> <word>...` now
// does that part for you** — it expands the -ा/-ी/-े/-ो paradigm for hi, strips
// affixes for id, and reports whole-word containment both ways. Run it on the FREE
// remainder this probe prints: this one screens a FIELD, that one clears a WORD.
//
// ✅ LIMIT 2 IS FIXED — IT USED TO BE HINDI-ONLY. It imported `HI_UNITS` directly,
// exactly as front-taken.mjs and gloss-taken.mjs did, and unlike those two it at
// least SAID SO right here. It was the fifth instance of that bug found in this
// directory on 2026-10-07: the id B2 crew lead reached for it, got
// `ENOENT: open '<cwd>/id'` because `id` was read as the candidates FILE, and did
// its whole 16-slot allocation with front-taken.mjs instead. `<lang>` is required
// now and comes first, and an unknown one exits 2.
//
// ⚠️ LIMIT 3: a theme list proves the FIELD is open, NOT that 24 cards exist in
// it. u98's first draft lost दावा and तर्कसंगत to `front-taken.mjs` after both had
// passed this probe, because this probe never contained them.
//
// ✅ WHAT IT DOES THAT front-taken.mjs DOES NOT: it flags a PRECOMPOSED NUKTA.
// The hi corpus is decomposed (ज + ़, U+091C U+093C), so a precomposed ज़ (U+095B)
// is a different string and comes back "free" when the word is already taught.
// One precomposed word made scope-hi report a taught word untaught in six
// sentences while validate:content stayed green. The check is codepoint-based, so
// it is a no-op for a language that has no Devanagari.
import { readFileSync, existsSync } from "node:fs";
import { UNITS } from "../../src/data/index.js";

const LANG = process.argv[2];
const LANGS = [...new Set(UNITS.map((u) => u.lang))];
if (!LANG || !LANGS.includes(LANG)) {
  console.error("usage: node scripts/qa/theme-holes.mjs <lang> [candidates.txt]");
  console.error(`  known: ${LANGS.join(" ")}`);
  console.error("  default file: scripts/qa/theme-holes-<lang>.txt");
  process.exit(2);
}

const byFront = new Map();
for (const u of UNITS.filter((x) => x.lang === LANG))
  for (const l of u.lessons || []) for (const it of l.items || [])
    if (!byFront.has(it.front)) byFront.set(it.front, `u${u.order}`);

const PRE = /[ऩऱऴक़-य़]/;
const file = process.argv[3] ?? `scripts/qa/theme-holes-${LANG}.txt`;
if (!existsSync(file)) {
  console.error(`no candidates file at ${file}`);
  console.error(`  pass one: node scripts/qa/theme-holes.mjs ${LANG} <path>`);
  console.error("  format, one theme per line:  slot|title|word word word ...");
  process.exit(2);
}

const lines = readFileSync(file, "utf8").trim().split(/\r?\n/).filter((l) => l && !l.startsWith("#"));
const rows = [];
for (const line of lines) {
  const [slot, title, words] = line.split("|");
  if (!words) { console.error(`skipping malformed line (need slot|title|words): ${line.slice(0, 60)}`); continue; }
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
console.log(`${LANG}: ${rows.length} theme(s) probed against ${byFront.size} taught fronts`);
for (const r of rows) {
  console.log(`\n${String(r.slot).padEnd(6)} ${r.title}   ${r.t}/${r.n} taken`);
  if (r.bad.length) console.log(`   PRECOMPOSED NUKTA: ${r.bad.join(" ")}`);
  if (r.taken.length) console.log(`   TAKEN: ${r.taken.join(" ")}`);
  console.log(`   FREE(${r.free.length}): ${r.free.join(" ")}`);
}
