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
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
// The reading check MUST use the same normalizer the app and the contract use.
// A local NFD-only fold silently disagrees with it on any base letter that is not
// a diacritic — German ss is the case that surfaced it: NFD leaves ss standing, so
// this script demanded a reading that validate:content rejects as non-latin, and no
// value could satisfy both checkers at once.
import { normalizeReading } from "../src/store/answer.js";

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

// The free list is READ FROM the content, never hardcoded, so a run can never
// allow more than the content declares. A unit declares its own with a line:
//   //   FREE: Ana, España, México | moderno, elegante, … | 2000
// (proper names | cognate lemmas | literal tokens such as numerals)
//
// ⚠️ This used to read ONLY unit1.js, which was a real defect with a badly
// misleading signature: unit1 belongs to block 1, so the tool scored block 1's
// units at 0 and every other block's in the hundreds. That reads as a quality
// difference between crews and is nothing of the sort — it is just whose file the
// declaration happened to sit in. Blocks 2 and 3 HAD declared their free words,
// in prose no machine could see (es/unit7.js names "naturalized English
// borrowings — taxi, café, clase, fiesta, festival, concierto, examen"), and I
// then reported two of those, `clase` and `examen`, as real violations. Every
// unit may now declare; units that declare nothing are listed at the end so the
// gap is visible instead of silently inflating the count. Caught by the
// truth-agent, 2026-08-13.
const langDir = join(root, "src", "data", lang);
const unitFiles = readdirSync(langDir).filter((f) => /^unit\d+\.js$/.test(f));
const FREE_RAW = [];
const declaring = [];
for (const f of unitFiles) {
  const m = readFileSync(join(langDir, f), "utf8").match(/^\/\/\s*FREE:\s*(.+)$/m);
  if (!m) continue;
  declaring.push(f);
  FREE_RAW.push(...m[1].split(/[|,]/).map((s) => s.trim()).filter(Boolean));
}
if (!FREE_RAW.length) {
  console.error(`no "// FREE:" declaration in any src/data/${lang}/unit*.js — add one before running this.`);
  process.exit(2);
}

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
    // A cognate is declared by lemma; its regular inflections count (moderno →
    // moderna/modernos/modernas). This is a real inflection test, NOT a prefix
    // match: an earlier version compared leading substrings, so `España`
    // licensed `espantoso` and `moderno` licensed anything starting `modern`.
    // Flagged by the content-auditor as a false-negative risk at scale.
    for (const f of FREE) {
      const stem = f.replace(/[oaei]s?$/, "");
      if (stem.length < 4) continue;
      if (/^(o|a|os|as|es|s)?$/.test(w.slice(stem.length)) && w.startsWith(stem)) return true;
    }
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
          if (!licensed(w, u.order))
            // Key on the ACCENT-FOLDED word so the two passes agree on identity.
            // Keying on the raw string double-counted every accented token
            // (está/esta, maría/maria) and inflated the total by 36.
            bad.push({ key: `${it.id}|${foldAccents(w)}`, line: `${it.id} (u${u.order}): "${w}" not taught at or before unit ${u.order} — «${jp}»` });
      }
  return { bad, examples };
}

const blind = run({ accentBlind: true });
const strict = run({ accentBlind: false });
const cards = authored.reduce((n, u) => n + u.lessons.reduce((m, l) => m + (l.items?.length ?? 0), 0), 0);

const seenKey = new Map();
for (const b of [...blind.bad, ...strict.bad]) if (!seenKey.has(b.key)) seenKey.set(b.key, b.line);
for (const line of seenKey.values()) console.log("  ✗ " + line);

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
      const expect = normalizeReading(it.front, lang);
      if (normalizeReading(it.reading, lang) !== expect)
        problems.push(`${it.id}: reading "${it.reading}" does not normalize onto "${it.front}" (front normalizes to "${expect}")`);
    }
  }
for (const p of problems) console.log("  ✗ " + p);

const total = seenKey.size + problems.length;
console.log(
  `\n${lang}: ${authored.length} authored unit(s), ${cards} cards, ${strict.examples} examples — ` +
    `${total} problem(s) [${seenKey.size} distinct scope hit(s); passes: blind ${blind.bad.length}, strict ${strict.bad.length}]`
);
process.exit(total ? 1 : 0);
