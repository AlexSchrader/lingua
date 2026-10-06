// Does a hint still name the RIGHT unit for a word it cross-references?
//
//   node scripts/qa/hint-unit-refs.mjs <lang> [front ...]
//
// With fronts listed it reports only citations of THOSE words — which is how to
// use it after a dedupe or any move. With no fronts it reports every mismatch in
// the language, which is noisy (see the limit below).
//
// WHY IT EXISTS. A hint is the only place the course says "not X (unit N)", and
// those parentheses are a CLAIM about where N is taught. Nothing checks them:
// `validate:content` never reads a hint, `lint:curriculum` never reads a hint,
// and the number is wrong the moment the word moves. The B1 cross-block dedupe
// moved 41 Hindi fronts on 2026-10-06 and left FOUR hints pointing at the old
// unit — त्वचा (u84) and धारा (u85) both called आपदा "the आपदा class (unit 75)"
// after आपदा had gone to u70, विवरण (u93) put विवेक at unit 90 when it is u68,
// and पारदर्शी (u95) put गोपनीय at unit 93 when it is u65. All four read as live
// instruction to a learner and all four were invisible to the whole gate.
//
// ⚠️ LIMIT, AND IT MATTERS: this matches the NEAREST front-looking string before
// a "(unit N)", so it FALSE-POSITIVES whenever the parenthetical belongs to a
// different word in the same sentence — "अ plus अक्ष … (unit 6)" or
// "…प्रमाणपत्र, पहचानपत्र and प्रपत्र. ⚠️ Not आदेश (unit 71)". Treat every hit as
// a question, not a verdict, and READ THE HINT. Passing the fronts you just moved
// is what makes the output short enough to read.
//
// It also deliberately does NOT look at §-references ("unit 1 §7"), because those
// cite a convention and not a word's home, and they do not rot the same way.

import { UNITS } from "../../src/data/index.js";

const lang = process.argv[2];
if (!lang) {
  console.error("usage: node scripts/qa/hint-unit-refs.mjs <lang> [front ...]");
  process.exit(2);
}
const only = new Set(process.argv.slice(3));
const units = UNITS.filter((u) => u.lang === lang).sort((a, b) => a.order - b.order);
if (!units.length) {
  console.error(`no units for lang "${lang}"`);
  process.exit(2);
}

const home = new Map();
const items = [];
for (const u of units)
  for (const l of u.lessons ?? [])
    for (const it of l.items ?? []) {
      home.set(it.front, u.order);
      items.push({ ...it, unit: u.order });
    }

// A word-looking run of letters, then at most a short gap with no bracket in it,
// then "(unit N". The gap cap is what keeps the match local to one clause.
const CITE = /([\p{L}\p{M}]+)[^()]{0,45}?\(unit\s*(\d+)/gu;

const rows = [];
for (const it of items) {
  const hint = String(it.hint ?? "");
  CITE.lastIndex = 0;
  let m;
  while ((m = CITE.exec(hint))) {
    const word = m[1];
    const cited = Number(m[2]);
    if (!home.has(word)) continue; // not a taught front — nothing to check
    if (only.size && !only.has(word)) continue;
    const real = home.get(word);
    if (real === cited) continue;
    rows.push({ unit: it.unit, id: it.id, word, cited, real });
  }
}

for (const r of rows)
  console.log(`u${r.unit} ${r.id}: cites ${r.word} at unit ${r.cited} — it is u${r.real}`);
console.log(
  rows.length
    ? `\n${rows.length} possible stale citation(s) in ${lang} — READ EACH HINT; see the LIMIT note in this file`
    : `${lang}: no hint cites a wrong unit for a taught front${only.size ? " (of the fronts named)" : ""}`
);
