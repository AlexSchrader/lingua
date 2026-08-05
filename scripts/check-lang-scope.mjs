// Teach-before-use checker — the one authoring rule no automated gate covers.
//
//   node scripts/check-lang-scope.mjs es
//
// RUNBOOK-new-language.md §4: "Every example sentence uses only vocab introduced
// at or before that unit. Proper names and transparent cognates are free." That
// rule is the one most likely to bite a later block, and neither `validateContent`
// nor `lintCurriculum` can see it — so it was being checked by hand, or not at all.
// This is deliberately committed rather than kept in a scratch dir: a claim of
// "0 scope violations" that nobody downstream can re-run is not evidence.
//
// The allow-list below is not a fudge factor. It must mirror what the language's
// unit1.js header DECLARES as free; anything else is a violation. Two known
// weaknesses, both flagged by the fact-checker on 2026-08-04 and both fixed here:
//   1. Folding away accents makes the checker blind to esta/está, si/sí, el/él,
//      que/qué, como/cómo, tu/tú, mas/más. It now runs BOTH passes — an
//      accent-folded one and an accent-preserving one — and reports each.
//   2. Blind suffix-stripping (`-s`/`-es`) licensed any token whose stem was
//      taught, including untaught verb conjugations (`tienes` from `tiene`).
//      Plural stripping is now restricted to tokens whose stem was taught as a
//      NOUN — i.e. whose front carries an article — which is what the rule
//      actually intends.
import { readFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const lang = (process.argv[2] || "").toLowerCase();
if (!/^[a-z]{2}$/.test(lang)) {
  console.error("usage: node scripts/check-lang-scope.mjs <2-letter lang code>");
  process.exit(2);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const barrel = join(root, "src", "data", lang, "index.js");
const mod = await import(pathToFileURL(barrel).href);
const UNITS = mod[`${lang.toUpperCase()}_UNITS`];
if (!Array.isArray(UNITS)) {
  console.error(`no ${lang.toUpperCase()}_UNITS export in ${barrel}`);
  process.exit(2);
}

// The free list is READ FROM the language's unit1.js header, not hardcoded, so a
// checker run can never silently allow more than the content declares. The header
// must contain a line of the form:
//   //   FREE: Ana, España, México, América | moderno, elegante, … | 2000
// (proper names | cognate lemmas | literal tokens such as numerals)
const header = readFileSync(join(root, "src", "data", lang, "unit1.js"), "utf8");
const freeLine = header.match(/^\/\/\s*FREE:\s*(.+)$/m);
if (!freeLine) {
  console.error(`src/data/${lang}/unit1.js has no "// FREE:" declaration — add one before running this.`);
  process.exit(2);
}
const FREE_RAW = freeLine[1].split(/[|,]/).map((s) => s.trim()).filter(Boolean);

const foldAccents = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const clean = (s) => s.toLowerCase().replace(/['’]/g, "");
const tokens = (s) => clean(s).replace(/[¿?¡!.,—–"“”:;()]/g, " ").split(/\s+/).filter(Boolean);

const authored = [...UNITS]
  .filter((u) => (u.lessons ?? []).some((l) => l.items))
  .sort((a, b) => a.order - b.order);

function run({ accentBlind }) {
  const norm = (s) => (accentBlind ? foldAccents(clean(s)) : clean(s));
  const FREE = new Set(FREE_RAW.map(norm));

  // word -> earliest unit order that teaches it. A front like "la casa" licenses
  // both of its words. `nouns` tracks fronts that carry an article, which are the
  // only ones a plural may be derived from.
  const taught = new Map();
  const nouns = new Set();
  for (const u of authored)
    for (const l of u.lessons ?? [])
      for (const it of l.items ?? []) {
        const ws = norm(it.front).split(/\s+/);
        const articled = ws.length > 1 && /^(el|la|los|las|un|una|le|les|der|die|das)$/.test(ws[0]);
        for (const w of ws) {
          if (!taught.has(w)) taught.set(w, u.order);
          if (articled && w !== ws[0]) nouns.add(w);
        }
      }

  const licensed = (w, order) => {
    if (FREE.has(w)) return true;
    // A cognate is declared by lemma; its inflections count (moderno → moderna).
    for (const f of FREE) if (f.length > 3 && w.length >= f.length - 1 && norm(w).slice(0, f.length - 1) === f.slice(0, f.length - 1)) return true;
    const direct = taught.get(w);
    if (direct !== undefined && direct <= order) return true;
    // Regular plural, but ONLY of something taught as a noun.
    for (const stem of [w.replace(/es$/, ""), w.replace(/s$/, "")])
      if (stem !== w && nouns.has(stem) && taught.get(stem) <= order) return true;
    return false;
  };

  const bad = [];
  let examples = 0;
  for (const u of authored)
    for (const l of u.lessons ?? [])
      for (const it of l.items ?? []) {
        const jp = it.example?.jp ?? "";
        if (!jp) continue;
        examples++;
        for (const w of tokens(norm(jp)))
          if (!licensed(w, u.order)) bad.push(`${it.id} (u${u.order}): "${w}" not taught at or before unit ${u.order} — «${jp}»`);
      }
  return { bad, examples };
}

const blind = run({ accentBlind: true });
const strict = run({ accentBlind: false });
const cards = authored.reduce((n, u) => n + u.lessons.reduce((m, l) => m + (l.items?.length ?? 0), 0), 0);

for (const line of new Set([...blind.bad, ...strict.bad])) console.log("  ✗ " + line);

// Structural checks the contract already enforces, re-asserted here so one command
// answers "is this block sound" for an author mid-write.
const seen = new Map();
const problems = [];
for (const u of authored)
  for (const l of u.lessons ?? []) {
    const n = l.items?.length ?? 0;
    if (n && (n < 5 || n > 8)) problems.push(`${l.id}: ${n} cards (band is 5–8)`);
    for (const it of l.items ?? []) {
      if (seen.has(it.front)) problems.push(`duplicate front "${it.front}": ${it.id} vs ${seen.get(it.front)}`);
      else seen.set(it.front, it.id);
      const expect = foldAccents(clean(it.front)).replace(/\s+/g, "");
      if (it.reading !== expect) problems.push(`${it.id}: reading "${it.reading}" is not the ASCII fold of "${it.front}" (expected "${expect}")`);
    }
  }
for (const p of problems) console.log("  ✗ " + p);

const total = new Set([...blind.bad, ...strict.bad]).size + problems.length;
console.log(
  `\n${lang}: ${authored.length} authored unit(s), ${cards} cards, ${strict.examples} examples — ` +
    `${total} problem(s) [accent-blind pass: ${blind.bad.length}, accent-preserving pass: ${strict.bad.length}]`
);
process.exit(total ? 1 : 0);
