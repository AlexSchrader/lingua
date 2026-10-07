// Is this GLOSS already taken in <lang>, once the GRADER normalises it? — the
// probe unit61.js §B4 cites.
//
//   node scripts/qa/gloss-taken.mjs "<gloss>" ["<gloss>" ...]
//
// Reimplements `normalizeMeaning` (src/store/answer.js) — lowercase, NFD-strip
// marks, drop `(...)`, drop a leading a/an/the, drop a leading "to " — and reports
// which front already owns the result, checking both `meaning` and every `accept`.
// WHY IT EXISTS: `glossCollisionWarnings` in src/data/lint.js compares the EXACT
// lowercased string, so a parenthetical or an article silences it while the grader
// still accepts one typed answer for two cards. **MEASURED on B1 block 1's first
// draft: 39 of 312 glosses collided and lint flagged NONE of them.** It also
// caught दुगना, which `front-taken.mjs` passed because दुगुना (u45) is spelled
// differently — one lexeme, two spellings, and only the gloss saw it.

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
  console.error(`usage: node scripts/qa/gloss-taken.mjs <lang> "<gloss>" ["<gloss>" ...]`);
  console.error(`  known: ${LANGS.join(" ")}`);
  process.exit(2);
}
const LANG_UNITS = UNITS.filter((u) => u.lang === LANG);
const nm = (s="") => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")
  .replace(/\(.*?\)/g," ").replace(/\s+/g," ").trim()
  .replace(/^(?:a|an|the)\s+/,"").replace(/^to\s+/,"");
const m=new Map();
for (const u of LANG_UNITS) for (const l of (u.lessons||[])) for (const it of (l.items||[]))
  for (const g of [it.meaning, ...(it.accept||[])]) {
    if (!g) continue; const k=nm(g);
    if (!m.has(k)) m.set(k,[]); m.get(k).push(`${it.front}@u${u.order}`);
  }
const out=[];
for (const g of process.argv.slice(3)) { const k=nm(g);
  if (m.has(k)) out.push(`COLLIDE "${g}" -> ${[...new Set(m.get(k))].join(" ")}`); }
console.log(out.length?out.join("\n"):"all glosses free");
