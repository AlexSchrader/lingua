// HINDI example/drill vocabulary scope — the check no gate runs.
//
// WHY THIS FILE EXISTS. `src/data/lint.js` gates example scope behind
// `isLatinLang()`, which needs >50% Latin fronts. Every Hindi front is
// Devanagari, so `exampleScopeWarnings` returns SILENTLY for hi: the rule RUNBOOK
// §4 calls "the one most likely to bite you in block 2 or 3" is unchecked for this
// language. Measured on the block-1 branch 2026-09-27: `npm run lint:curriculum`
// reports **zero** warnings against any hi item while flagging 6,319 elsewhere.
// Russian hit the identical hole and shipped 108 out-of-scope sentences before
// anyone noticed; `scripts/scope-ru.mjs` is this file's sibling and its model.
//
// HOW IT CHECKS. A token is in scope when it is, or derives from, a front taught
// at or before its unit. Hindi inflects at the edges rather than fusing, so
// derivation is generative and precise rather than a blind suffix-stripper:
//   -ना infinitive → -ता/-ती/-ते (habitual), -कर (conjunctive), -िए (polite
//                    imperative), -ो/-े/-ा/-ी, -ूँगा/-ेगा (future)
//   -आ noun/adj    → -ी (feminine), -े (plural and oblique)
//   -ी noun        → -ियाँ (plural)
//   any noun       → -एँ (feminine plural: भाषा → भाषाएँ, ऋतु → ऋतुएँ)
// IRREGULAR below carries what generation cannot reach (मैं → मुझे, नया → नई).
//
// THE SCRIPT BAND IS REPORTED SEPARATELY, AND THAT IS NOT LENIENCY. unit1.js §8
// makes u1–u6 sentence-exempt for a mechanical reason: a unit whose whole
// vocabulary is कम, मन, हम, अगर, अब, बस cannot produce a sentence out of six
// words, so the band's examples draw on the wider A1 vocabulary the way Russian's
// u1 does. They are read TO the learner. From u7 the ordinary rule applies in
// full, so THE A1 NUMBER IS THE ONE THAT MUST BE ZERO.
//
// ESCAPE HATCH. A unit file may declare words it deliberately uses without
// teaching them, with a line of the form
//     // FREE: का | के | की | करन
// A FREE word is in scope for that unit and every later one. Declaring one is a
// CLAIM: "a learner meets this word in a sentence and is never asked to produce
// it." Hindi's postpositions and pronoun obliques live there — they are closed-class
// grammar taught as a paradigm in u23, not vocabulary any unit teaches.
//
//   node scripts/scope-hi.mjs            every authored hi unit
//   node scripts/scope-hi.mjs 7,8,9,10   only those units
//   node scripts/scope-hi.mjs --a1       skip the u1–u6 script band entirely
import { readFileSync } from "node:fs";
import { HI_UNITS } from "../src/data/hi/index.js";

const BAND_MAX = 6; // u1–u6 is the pre-A1 script band (unit1.js §8)

function derive(front) {
  const out = new Set([front]);
  if (front.endsWith("ना") && front.length > 2) {
    const st = front.slice(0, -2);
    for (const suf of ["ता", "ती", "ते", "कर", "िए", "े", "ो", "ा", "ी", "ूँगा", "ेगा", "तें"]) out.add(st + suf);
  }
  if (front.endsWith("ा")) {
    out.add(front.slice(0, -1) + "ी");
    out.add(front.slice(0, -1) + "े");
  }
  if (front.endsWith("ी")) out.add(front.slice(0, -1) + "ियाँ");
  out.add(front + "एँ");
  return out;
}

// What generation cannot reach: pronoun obliques and the handful of irregular
// adjectives. Each key is a taught front; its values belong to the same lexeme.
const IRREGULAR = {
  "नया": ["नई", "नए"],
  "मैं": ["मुझे", "मुझ", "मुझको"],
  "तुम": ["तुम्हें", "तुम्हारा", "तुम्हारी", "तुम्हारे"],
  "तू": ["तुझे", "तेरा", "तेरी", "तेरे"],
  "हम": ["हमें", "हमारा", "हमारे", "हमारी"],
  "आप": ["आपको"],
  "यह": ["ये"],
  "वह": ["वे"],
  "दो": ["दोनों"],
  "तीन": ["तीनों"],
  "बूढ़ा": ["बूढ़े", "बूढ़ी"],
};

const items = [];
for (const u of HI_UNITS)
  for (const l of u.lessons ?? [])
    for (const it of l.items ?? []) items.push({ ...it, u: u.order, l: l.lesson });

// surface → earliest unit that licenses it
const born = new Map();
const remember = (w, unit) => {
  const prev = born.get(w);
  if (prev === undefined || unit < prev) born.set(w, unit);
};
for (const it of items) {
  if (typeof it.front !== "string") continue;
  remember(it.front, it.u); // a multi-word front is one token nowhere, but register it anyway
  for (const piece of it.front.split(/\s+/).filter(Boolean)) {
    for (const d of derive(piece)) remember(d, it.u);
    for (const d of IRREGULAR[piece] ?? []) remember(d, it.u);
  }
}

// FREE declarations, parsed out of the unit files.
for (const u of HI_UNITS) {
  let src = "";
  try {
    src = readFileSync(`src/data/hi/unit${u.order}.js`, "utf8");
  } catch {
    continue;
  }
  for (const m of src.matchAll(/^\/\/\s*FREE:\s*(.+)$/gm))
    for (const w of m[1].split("|").map((s) => s.trim()).filter(Boolean)) remember(w, u.order);
}

const tokenize = (s) => String(s ?? "").split(/[^\p{L}\p{M}-]+/u).filter(Boolean);
const args = process.argv.slice(2);
const a1Only = args.includes("--a1");
const list = args.find((a) => /^[\d,]+$/.test(a));
const only = list ? new Set(list.split(",").map(Number)) : null;

let checked = 0;
const hits = { band: [], a1: [] };
for (const it of items) {
  if (only && !only.has(it.u)) continue;
  if (a1Only && it.u <= BAND_MAX) continue;
  for (const [kind, text] of [["example", it.example?.jp], ["drill", it.drill?.jp]]) {
    if (!text) continue;
    checked += 1;
    const miss = [];
    for (const raw of tokenize(text)) {
      const at = born.get(raw);
      if (at !== undefined && at <= it.u) continue;
      miss.push(raw);
    }
    if (miss.length)
      (it.u <= BAND_MAX ? hits.band : hits.a1).push(
        `u${it.u}l${it.l} ${it.id} ${kind}: ${[...new Set(miss)].join(", ")}   « ${text}`
      );
  }
}

if (!a1Only) {
  console.log(`--- script band u1-u${BAND_MAX}: ${hits.band.length} sentence(s) using vocabulary the band has not taught`);
  console.log(`    (expected and allowed — see unit1.js §8; listed for review, not as failures)`);
  for (const h of hits.band) console.log("  " + h);
}
console.log(`\n=== A1 u${BAND_MAX + 1}+: ${hits.a1.length} out-of-scope sentence(s) — THIS NUMBER MUST BE ZERO`);
for (const h of hits.a1) console.log("  " + h);
console.log(`\n${checked} sentence(s) checked.`);
process.exitCode = hits.a1.length ? 1 : 0;
