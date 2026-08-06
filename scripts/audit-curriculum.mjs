// Curriculum data audit — counts items per unit (by type), checks lesson
// numbering + global id uniqueness, and totals. Reads whatever unitN.js files are
// on disk (independent of index.js), so it reports the real data, not claims.
//
//   npm run audit          → every authored language
//   npm run audit -- es    → just Spanish
//
// This used to hardcode `src/data/ja`, which made it a NO-OP for any other
// language while still printing a reassuring "ISSUES: none". RUNBOOK §5 lists it
// as one of five gates, so a Spanish or French block could report "audit ✅" on a
// run that never opened one of its files. Caught on the es block-1 hand-back,
// 2026-08-05.
import { readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const dataDir = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "data");
// Anything passed on the command line is a FILTER, and a filter that silently
// doesn't apply is the same reassuring-green failure this rewrite exists to kill:
// `npm run audit -- spanish` must not quietly audit everything while printing a
// confident language list. So bad arguments are a hard error, not a shrug.
const args = process.argv.slice(2);
const bad = args.filter((a) => !/^[a-z]{2}$/.test(a));
if (bad.length) {
  console.error(`audit: not a 2-letter language code: ${bad.join(", ")} — expected e.g. "es", "ja"`);
  process.exit(2);
}
const langs = (args.length
  ? args
  : readdirSync(dataDir).filter((d) => /^[a-z]{2}$/.test(d) && statSync(join(dataDir, d)).isDirectory())
).filter((l) => {
  if (existsSync(join(dataDir, l))) return true;
  console.error(`audit: no such language directory: src/data/${l}`);
  process.exitCode = 1;
  return false;
});

// [{ lang, dir, file }] across every language, so id-uniqueness is still checked
// GLOBALLY (an id collision between two languages is exactly the kind of thing a
// per-language audit would miss).
const files = langs.flatMap((lang) => {
  const dir = join(dataDir, lang);
  return readdirSync(dir)
    .filter((f) => /^unit\d+\.js$/.test(f))
    .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10))
    .map((f) => ({ lang, dir, file: f }));
});

const allIds = new Map();
const dups = [];
const issues = [];
const rows = [];
const tot = { lessons: 0, items: 0, kana: 0, vocab: 0, kanji: 0 };
const perLang = {};

for (const { lang, dir, file: f } of files) {
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
      if (allIds.has(it.id)) dups.push(`${it.id} (in ${lang}/${f} AND ${allIds.get(it.id)})`);
      else allIds.set(it.id, `${lang}/${f}`);
      if (!it.reading) issues.push(`${it.id}: missing reading`);
    }
  }
  // lesson numbering 1..N contiguous
  const sorted = [...lessonNums].sort((a, b) => a - b);
  sorted.forEach((n, i) => { if (n !== i + 1) issues.push(`${u.id}: lesson numbers not 1..N (${sorted.join(",")})`); });

  rows.push({ lang, file: f, id: u.id, order: u.order, stage: u.stage, lessons, items, kana: by.kana, vocab: by.vocab, kanji: by.kanji, title: u.title });
  perLang[lang] ??= { units: 0, lessons: 0, items: 0 };
  perLang[lang].units++; perLang[lang].lessons += lessons; perLang[lang].items += items;
  tot.lessons += lessons; tot.items += items; tot.kana += by.kana; tot.vocab += by.vocab; tot.kanji += by.kanji;
}

console.table(rows);
// Per-language totals first: the single number a crew actually wants, and the one
// that makes a no-op run obvious (a language with 0 units can no longer hide
// behind a green "ISSUES: none").
console.log("LANGUAGES AUDITED:", langs.join(", ") || "(none)");
console.table(perLang);
console.log("TOTALS:", tot, "| unique item ids:", allIds.size);
console.log("DUPLICATE IDS:", dups.length ? dups : "none");
console.log("ISSUES:", issues.length ? issues : "none");
// A language that was listed as audited but contributed nothing is the exact
// no-op this rewrite exists to kill, so it has to fail per-language — not only
// when EVERY language is empty. `mkdir src/data/de && npm run audit` used to
// print "LANGUAGES AUDITED: de, fr, ja" and exit 0 with no `de` row at all.
const empty = langs.filter((l) => !perLang[l]);
if (empty.length) {
  console.error(`audit: audited nothing for: ${empty.join(", ")} — no unit files, or none with items.`);
  process.exitCode = 1;
}
if (!files.length) {
  console.error("audit: no unit files found — nothing was actually checked.");
  process.exitCode = 1;
}
// RUNBOOK §5 lists this as a gate, and a gate that prints its findings and then
// exits 0 cannot fail anything — a crew reads "green" and moves on. Findings now
// set the exit code. (Two halves of the same defect: the script used to be a
// no-op for non-ja languages AND unable to fail. The rewrite closed the first;
// this closes the second.)
if (dups.length || issues.length) {
  console.error(`audit: FAILED — ${dups.length} duplicate id(s), ${issues.length} issue(s).`);
  process.exitCode = 1;
}
