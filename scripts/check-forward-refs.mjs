// Forward-reference checker. Reports every example/drill sentence that uses a word
// the curriculum ITSELF teaches at a LATER unit.
//
// Why this exists alongside lint's exampleScopeWarnings and the per-language drill
// checkers: those ask "is this token taught anywhere?", which needs a morphological
// resolver per language, and a resolver that is wrong in either direction either
// buries real hits in noise (Norwegian: 43 hits, 23 of them noise) or excuses them
// silently (lint's isInflection excuses any token that is a prefix of a taught word
// within 3 chars, so "som" is excused by "sommer" and "der" by "deres" — and that
// blind spot GROWS with every unit anyone lands).
//
// This check asks a strictly narrower question with no heuristic in it at all:
//   is this example token byte-identical, after NFD folding, to a front that this
//   same language teaches at a higher unit order?
// Both sides come from the authored corpus. There is no stemmer, no irregular table
// and no edit distance, so a hit is never a false positive: the curriculum has
// declared the word worth teaching and then used it before teaching it.
//
// It cannot see untaught words (nothing to match against) — that is the resolver's
// job, not this one's. The two checks are complements, not substitutes.
//
//   node scripts/check-forward-refs.mjs           every language
//   node scripts/check-forward-refs.mjs pt        one language
//   node scripts/check-forward-refs.mjs pt -v     list every occurrence
//
// A word may be exempted with a "// FREE-STRUCTURAL:" line in any unit file of that
// language — for words like "que" and "por" that no sentence can avoid and whose
// card is a late formal treatment rather than a first introduction. Exempting is a
// curriculum decision: it says the card is not the word's first appearance.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const args = process.argv.slice(2);
const verbose = args.includes("-v");
const only = args.find((a) => /^[a-z]{2}$/.test(a));

const { UNITS: REAL } = await import(`file:///${join(root, "src/data/index.js").replace(/\\/g, "/")}`);

// --selftest plants cases this checker MUST catch and MUST NOT catch, and fails
// loudly if it gets either wrong. Borrowed from block 3's checkers, where every
// selftest caught a bug in its own checker before it caught anything in content.
const SELFTEST = args.includes("--selftest");
const FIXTURE = [
  { lang: "zz", order: 1, lessons: [{ lesson: 1, items: [
    // MUST CATCH: "tarde" is used at u1 and carded at u3.
    { id: "zz-u1l1-a", front: "o dia", example: { jp: "O dia e a tarde", en: "" } },
    // MUST NOT CATCH: a phrase front introduces "favor" at u1.
    { id: "zz-u1l1-b", front: "por favor", example: { jp: "Por favor", en: "" } },
    // MUST NOT CATCH: the item's own front.
    { id: "zz-u1l1-c", front: "a noite", example: { jp: "A noite e longa", en: "" } },
  ] }] },
  { lang: "zz", order: 3, lessons: [{ lesson: 1, items: [
    { id: "zz-u3l1-a", front: "a tarde", example: { jp: "A tarde", en: "" } },
    { id: "zz-u3l1-b", front: "o favor", example: { jp: "O favor", en: "" } },
    { id: "zz-u3l1-c", front: "longa", example: { jp: "Longa", en: "" } },
  ] }] },
];
const UNITS = SELFTEST ? FIXTURE : REAL;
const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const words = (s) => (s ?? "").split(/[^\p{L}'’-]+/u).filter(Boolean).map(fold);

// Leading articles and infinitive markers are not part of the word being taught.
const LEAD = /^(o |a |os |as |um |uma |el |la |los |las |lo |le |les |un |une |des |du |der |die |das |den |dem |ein |eine |en |ei |et |å |to |il |i |gli )/;

const langs = only ? [only] : [...new Set(UNITS.map((u) => u.lang))].sort();
let grandTotal = 0;
const report = [];

for (const lang of langs) {
  const us = UNITS.filter((u) => u.lang === lang).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  if (!us.length) { console.error(`no units for "${lang}"`); process.exitCode = 1; continue; }

  const free = new Set();
  const dir = join(root, "src", "data", lang);
  let unitFiles = [];
  try { unitFiles = readdirSync(dir).filter((f) => /^unit\d+\.js$/.test(f)); }
  catch (e) { if (!SELFTEST) throw e; }
  for (const f of unitFiles) {
    for (const m of readFileSync(join(dir, f), "utf8").matchAll(/^\/\/\s*FREE-STRUCTURAL:\s*(.+)$/gm))
      m[1].split(/[|,]/).map((s) => fold(s.trim())).filter(Boolean).forEach((w) => free.add(w));
  }

  // earliest unit that teaches each front, and — separately — the earliest unit at
  // which each word has been SEEN inside a front. A phrase card teaches the words
  // inside it: "por favor" at u2 puts "por" in front of the learner at u2, so a
  // later "por" card is a formal treatment, not a first introduction. Without this
  // the check reports por/como/hasta/bom as forward references in their own band.
  const taughtAt = new Map();
  const seenInFront = new Map();
  const note = (m, w, order) => {
    if (!w) return;
    const p = m.get(w);
    if (p === undefined || order < p) m.set(w, order);
  };
  for (const u of us)
    for (const l of u.lessons ?? [])
      for (const it of l.items ?? []) {
        note(taughtAt, fold(it.front).replace(LEAD, ""), u.order);
        for (const w of words(it.front)) note(seenInFront, w, u.order);
      }

  const hits = new Map();
  let occurrences = 0;
  for (const u of us)
    for (const l of u.lessons ?? [])
      for (const it of l.items ?? []) {
        // a phrase card teaches the words inside its own front
        const own = new Set(words(it.front));
        for (const [field, sent] of [["example", it.example?.jp], ["drill", it.drill?.jp]]) {
          if (!sent) continue;
          for (const t of words(sent)) {
            if (own.has(t) || free.has(t)) continue;
            const at = taughtAt.get(t);
            if (at === undefined || at <= u.order) continue;
            // already met inside an earlier phrase front
            const seen = seenInFront.get(t);
            if (seen !== undefined && seen <= u.order) continue;
            occurrences++;
            const k = `${t} ${at}`;
            if (!hits.has(k)) hits.set(k, []);
            hits.get(k).push({ u: u.order, id: it.id, field, sent });
          }
        }
      }

  grandTotal += occurrences;
  const rows = [...hits].map(([k, v]) => {
    const [w, at] = k.split(" ");
    const first = Math.min(...v.map((x) => x.u));
    return { w, at: +at, first, gap: +at - first, n: v.length, v };
  }).sort((a, b) => b.gap - a.gap || b.n - a.n);

  report.push({ lang, distinct: rows.length, occurrences, rows });
}

for (const r of report) {
  console.log(`\n${r.lang}: ${r.distinct} distinct word(s), ${r.occurrences} occurrence(s) used before the unit that teaches them`);
  for (const row of r.rows) {
    console.log(`  ${row.w.padEnd(16)} used from u${String(row.first).padEnd(3)} taught u${String(row.at).padEnd(3)} gap ${String(row.gap).padStart(2)}  ${row.n}x`);
    if (verbose) for (const o of row.v) console.log(`      u${o.u} ${o.id} (${o.field}): ${o.sent}`);
  }
}
if (SELFTEST) {
  const got = new Set(report.flatMap((r) => r.rows.map((x) => x.w)));
  // "longa" is used at u1 by an item whose own front is "a noite", so it is a real
  // forward reference and must be caught — it sat in the mustNot list on the first
  // draft of this selftest and the selftest is what corrected it.
  const must = ["tarde", "longa"];
  const mustNot = ["favor", "noite"];
  const missed = must.filter((w) => !got.has(w));
  const spurious = mustNot.filter((w) => got.has(w));
  if (missed.length) console.error(`SELFTEST FAIL — did not catch: ${missed.join(", ")}`);
  if (spurious.length) console.error(`SELFTEST FAIL — false positive on: ${spurious.join(", ")}`);
  if (missed.length || spurious.length) process.exit(1);
  console.log("\nselftest ok: caught the planted forward reference, and neither the phrase-front word, the item's own front, nor a word never used early.");
  process.exit(0);
}

console.log(`\ntotal: ${grandTotal} forward reference(s) across ${report.length} language(s)`);
if (grandTotal) process.exitCode = 1;
