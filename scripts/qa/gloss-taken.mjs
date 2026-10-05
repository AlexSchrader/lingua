// Is this GLOSS already taken in Hindi, once the GRADER normalises it? — the
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

import { HI_UNITS } from "../../src/data/hi/index.js";
const nm = (s="") => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")
  .replace(/\(.*?\)/g," ").replace(/\s+/g," ").trim()
  .replace(/^(?:a|an|the)\s+/,"").replace(/^to\s+/,"");
const m=new Map();
for (const u of HI_UNITS) for (const l of (u.lessons||[])) for (const it of (l.items||[]))
  for (const g of [it.meaning, ...(it.accept||[])]) {
    if (!g) continue; const k=nm(g);
    if (!m.has(k)) m.set(k,[]); m.get(k).push(`${it.front}@u${u.order}`);
  }
const out=[];
for (const g of process.argv.slice(2)) { const k=nm(g);
  if (m.has(k)) out.push(`COLLIDE "${g}" -> ${[...new Set(m.get(k))].join(" ")}`); }
console.log(out.length?out.join("\n"):"all glosses free");
