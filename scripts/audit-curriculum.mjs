// Curriculum data audit — counts items per unit (by type), checks lesson
// numbering + global id uniqueness, and totals. Reads whatever unitN.js files are
// on disk (independent of index.js), so it reports the real data, not claims.
import { readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// LANGUAGE SCOPE. This used to hardcode src/data/ja, which made it useless the
// moment a second language shipped: RUNBOOK-new-language.md §5 lists `npm run
// audit` as gate step 4 for EVERY language crew, so a French or Spanish seat ran
// it, saw "ISSUES: none", and reported a green gate for a step that had read zero
// bytes of its own work. It now walks every language directory by default.
//   npm run audit           # every language
//   npm run audit -- fr     # one language
// Nothing was silently unchecked while it was ja-only (its four checks are a
// subset of validate:content, which always covered every language) — but a gate
// step that cannot fail on your work is worse than no gate step, because it
// reads as verification.
const dataRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "data");
const only = process.argv.slice(2).filter((a) => /^[a-z]{2}$/.test(a));
const langs = (
  only.length
    ? only
    : readdirSync(dataRoot, { withFileTypes: true })
        .filter((d) => d.isDirectory() && /^[a-z]{2}$/.test(d.name))
        .map((d) => d.name)
).sort();

const unitFiles = (lang) => {
  const dir = join(dataRoot, lang);
  return readdirSync(dir)
    .filter((f) => /^unit\d+\.js$/.test(f))
    .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10))
    .map((f) => ({ f, dir, lang }));
};

const files = langs.flatMap(unitFiles);
if (!files.length) {
  console.error(`no unit files found for: ${langs.join(", ") || "(no language dirs)"}`);
  process.exit(1);
}

const allIds = new Map();
const dups = [];
const issues = [];
const rows = [];
const tot = { lessons: 0, items: 0, kana: 0, vocab: 0, kanji: 0 };
const perLang = new Map();

for (const { f, dir, lang } of files) {
  const mod = await import(pathToFileURL(join(dir, f)).href);
  const u = Object.values(mod)[0];
  const by = { kana: 0, vocab: 0, kanji: 0 };
  let lessons = 0;
  let items = 0;
  const lessonNums = [];
  for (const l of u.lessons || []) {
    if (!Array.isArray(l.items)) continue;
    lessons++;
    lessonNums.push(l.lesson);
    if (l.items.length < 1) issues.push(`${l.id}: empty lesson`);
    for (const it of l.items) {
      items++;
      by[it.type] = (by[it.type] || 0) + 1;
      if (allIds.has(it.id)) dups.push(`${it.id} (in ${f} AND ${allIds.get(it.id)})`);
      else allIds.set(it.id, f);
      if (!it.reading) issues.push(`${it.id}: missing reading`);
    }
  }
  // lesson numbering 1..N contiguous
  const sorted = [...lessonNums].sort((a, b) => a - b);
  sorted.forEach((n, i) => { if (n !== i + 1) issues.push(`${u.id}: lesson numbers not 1..N (${sorted.join(",")})`); });

  rows.push({ lang, file: f, id: u.id, order: u.order, stage: u.stage, lessons, items, kana: by.kana, vocab: by.vocab, kanji: by.kanji, title: u.title });
  tot.lessons += lessons; tot.items += items; tot.kana += by.kana; tot.vocab += by.vocab; tot.kanji += by.kanji;
  if (!perLang.has(lang)) perLang.set(lang, { units: 0, lessons: 0, items: 0 });
  const pl = perLang.get(lang);
  pl.units++; pl.lessons += lessons; pl.items += items;
}

console.table(rows);
for (const [lang, s] of [...perLang].sort())
  console.log(`  ${lang}: ${s.units} units, ${s.lessons} lessons, ${s.items} items`);
console.log("TOTALS:", tot, "| unique item ids:", allIds.size);
console.log("DUPLICATE IDS:", dups.length ? dups : "none");
console.log("ISSUES:", issues.length ? issues : "none");
