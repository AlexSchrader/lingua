// Curriculum data audit — counts items per unit (by type), checks lesson
// numbering + global id uniqueness, and totals. Reads whatever unitN.js files are
// on disk (independent of index.js), so it reports the real data, not claims.
import { readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "data", "ja");
const files = readdirSync(dir)
  .filter((f) => /^unit\d+\.js$/.test(f))
  .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10));

const allIds = new Map();
const dups = [];
const issues = [];
const rows = [];
const tot = { lessons: 0, items: 0, kana: 0, vocab: 0, kanji: 0 };

for (const f of files) {
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

  rows.push({ file: f, id: u.id, order: u.order, stage: u.stage, lessons, items, kana: by.kana, vocab: by.vocab, kanji: by.kanji, title: u.title });
  tot.lessons += lessons; tot.items += items; tot.kana += by.kana; tot.vocab += by.vocab; tot.kanji += by.kanji;
}

console.table(rows);
console.log("TOTALS:", tot, "| unique item ids:", allIds.size);
console.log("DUPLICATE IDS:", dups.length ? dups : "none");
console.log("ISSUES:", issues.length ? issues : "none");
