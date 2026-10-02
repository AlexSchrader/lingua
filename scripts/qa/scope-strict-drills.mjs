// STRICT scope check — examples AND DRILLS, no inflection or cognate excuses.
//
//   node scripts/qa/scope-strict-drills.mjs <lang> [from] [to]
//   node scripts/qa/scope-strict-drills.mjs id 41 50
//
// WHY THIS EXISTS: `lint:curriculum` reads only `example.jp`, so NOTHING in the
// shipped toolchain scope-checks `drill.jp`. Written for the Indonesian A2 crew,
// where it found 15 real violations in drafts plus one piece of collateral (a
// u44 example leaning on a word a retheme had removed).
//
// It was hardcoded to `id` with the range defaulted to 41-50, which meant running
// it for any other language printed "0 out-of-scope sentences" while checking
// Indonesian. The lang is now REQUIRED and the range defaults to the whole
// language, so it cannot quietly report a pass for content it never read.
// ⚠️ LIMIT — IT HAS NO MORPHOLOGY, SO IT OVER-FLAGS INFLECTED LANGUAGES.
// Measured 2026-10-02 running it language-wide:
//     id  16 out-of-scope over u1-u50      <- usable signal, worth reading
//     hi  1,206                            }  noise: every declined or conjugated
//     ru  2,250                            }  form counts as an unknown word
// Indonesian barely inflects, which is why it worked there. For Russian and Hindi
// use `scripts/scope-ru.mjs` / `scripts/scope-hi.mjs`, which carry real paradigm
// tables; for de/no/pt/es/fr expect heavy over-flagging too. A big number here is
// a property of the language, NOT a defect count — triage by hand before acting.

import { UNITS } from "../../src/data/index.js";
const LANG = process.argv[2];
if (!LANG) {
  console.error("usage: node scripts/qa/scope-strict-drills.mjs <lang> [from] [to]");
  process.exit(2);
}
const orders = UNITS.filter((u) => u.lang === LANG).map((u) => u.order);
if (!orders.length) {
  console.error(`no units for language "${LANG}"`);
  process.exit(2);
}
const [from, to] = [+(process.argv[3] ?? Math.min(...orders)), +(process.argv[4] ?? Math.max(...orders))];
const lower = (s) => (s || "").toLowerCase().replace(/[’']/g, "'");
const pieces = (s) => lower(s).split(/[^\p{L}'-]+/u).filter(Boolean);
const units = UNITS.filter((u) => u.lang === LANG).sort((a, b) => a.order - b.order);

// proper-name whitelist: capitalised non-initially in any id example/drill
const proper = new Set();
for (const u of units)
  for (const l of u.lessons ?? [])
    for (const it of l.items ?? [])
      for (const s of [it.example?.jp, it.drill?.jp]) {
        const raw = (s ?? "").split(/[^\p{L}'-]+/u).filter(Boolean);
        raw.forEach((w, i) => { if (i !== 0 && /^\p{Lu}/u.test(w)) proper.add(lower(w)); });
      }

// allow multi-word fronts to contribute each piece
const taught = new Set();
let n = 0;
for (const u of units) {
  const items = (u.lessons ?? []).flatMap((l) => l.items ?? []);
  for (const it of items) for (const p of pieces(it.front)) taught.add(p);
  if (u.order < from || u.order > to) continue;
  for (const it of items) {
    for (const [kind, s] of [["example", it.example?.jp], ["drill", it.drill?.jp]]) {
      if (!s) continue;
      const bad = [...new Set(pieces(s).filter((t) => !taught.has(t) && !proper.has(t)))];
      if (bad.length) { n++; console.log(`u${u.order} ${it.id} ${kind}: ${bad.map((b) => `"${b}"`).join(", ")}  <<${s}>>`); }
    }
  }
}
console.log(`\n${n} out-of-scope ${n === 1 ? "sentence" : "sentences"} in u${from}-u${to}`);
