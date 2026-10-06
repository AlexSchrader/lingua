// CROSS-LANGUAGE CONCEPT COVERAGE — what one language teaches and another does not.
//
//   node scripts/qa/concept-coverage.mjs            full report
//   node scripts/qa/concept-coverage.mjs ru         gaps for one language
//
// WHY THIS AND NOT A FREQUENCY LIST. "Is the course missing common words" needs a
// yardstick. Asserting one from memory is unverifiable, so this uses the corpus as
// its own control: every card carries an English gloss, so a concept taught in
// SEVEN languages and absent from an eighth is a measured gap, not an opinion.
// It cannot see a word missing from ALL of them — §2 of the report covers that
// separately with an explicit hand-built core inventory.
import { pathToFileURL } from "node:url";
import { join } from "node:path";
const { UNITS } = await import(pathToFileURL(join(process.cwd(), "src/data/index.js")).href);

const LANGS = ["ja", "fr", "es", "de", "no", "pt", "ru", "hi", "id"];
// Normalise a gloss to a CONCEPT key: lowercase, drop the parenthetical
// disambiguator, drop a leading article and "to ", split multi-sense glosses.
const senses = (gloss) =>
  String(gloss ?? "")
    .toLowerCase()
    .replace(/\(.*?\)/g, " ")
    .split(/\s*(?:[/,;]|\bor\b)\s*/)
    .map((s) => s.replace(/\s+/g, " ").trim().replace(/^(?:a|an|the)\s+/, "").replace(/^to\s+/, ""))
    .filter((s) => s && s.length > 1);

const taught = new Map(); // concept -> Set(lang)
const perLang = new Map(); // lang -> Set(concept)
for (const L of LANGS) perLang.set(L, new Set());
for (const u of UNITS) {
  if (!LANGS.includes(u.lang)) continue;
  for (const l of u.lessons ?? []) for (const it of l.items ?? []) {
    if (it.type !== "vocab") continue;
    for (const s of senses(it.meaning)) {
      if (!taught.has(s)) taught.set(s, new Set());
      taught.get(s).add(u.lang);
      perLang.get(u.lang).add(s);
    }
  }
}

const only = process.argv[2];
const COMPLETE = ["ja", "fr", "es", "de", "no", "pt"]; // the six through B2 — the control group
console.log(`concepts seen across the corpus: ${taught.size}`);
console.log(`per language: ${LANGS.map((L) => `${L} ${perLang.get(L).size}`).join(" · ")}\n`);

for (const L of only ? [only] : LANGS) {
  // a gap = taught by at least `thresh` of the OTHER complete languages, absent here
  const others = COMPLETE.filter((x) => x !== L);
  const rows = [];
  for (const [c, set] of taught) {
    if (set.has(L)) continue;
    const n = others.filter((x) => set.has(x)).length;
    if (n >= Math.ceil(others.length * 0.8)) rows.push({ c, n });
  }
  rows.sort((a, b) => b.n - a.n || a.c.localeCompare(b.c));
  console.log(`=== ${L}: ${rows.length} concepts taught by >=80% of the other complete languages but NOT here`);
  console.log(rows.slice(0, 60).map((r) => `${r.c}(${r.n})`).join(" · ") || "   none");
  console.log();
}
