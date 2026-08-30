// Every word a language already teaches, so a crew can't teach it twice.
//
// WHY THIS EXISTS. Spanish B1 was built by three crews in parallel off one
// scaffold. Between them they authored 888 cards for 37 units using only 729
// DISTINCT words: roughly ten themes were written twice over (u56 "Trabajo y
// proceso" vs u84 "Trabajo y economia", u67 "La salud y el bienestar" vs u85
// "Salud y enfermedad", and more). Deduping cost 159 cards and left 36 of 37
// units below the 24-card standard until a fourth seat refilled them.
//
// None of the crews did anything wrong. They had no way to see what the others
// had claimed, because the list did not exist until after the damage. RUNBOOK
// section 4 now requires generating it ON THE SCAFFOLD BRANCH, BEFORE crews
// start - not on a block branch afterwards, where it reaches nobody.
//
//   npm run taught -- es              every word es already teaches
//   npm run taught -- es --max 50     only units up to 50 (the frozen base a
//                                     B1 crew may draw on)
//
// A duplicate front is a HARD validate:content failure, so this is a gate
// input, not a nicety.
import { UNITS } from "../src/data/index.js";

const args = process.argv.slice(2);
const lang = args.find((a) => !a.startsWith("--"));
const maxIdx = args.indexOf("--max");
const max = maxIdx === -1 ? Infinity : Number(args[maxIdx + 1]);

if (!lang) {
  console.error("usage: npm run taught -- <lang> [--max <unit>]");
  process.exit(1);
}

const rows = [];
for (const unit of UNITS.filter((u) => u.lang === lang)) {
  for (const lesson of unit.lessons ?? []) {
    for (const item of lesson.items ?? []) {
      if (item.type !== "vocab") continue;
      const n = Number((item.id.match(/-u(\d+)l/) ?? [])[1]);
      if (n > max) continue;
      rows.push([item.front, n]);
    }
  }
}

if (!rows.length) {
  console.error(`No vocab found for lang "${lang}". Check the id.`);
  process.exit(1);
}

rows.sort((a, b) => a[0].localeCompare(b[0], lang));
console.log(`# ${lang} — EVERY WORD ALREADY TAUGHT (${rows.length})${max === Infinity ? "" : ` in units <= ${max}`}.`);
console.log(`# Do NOT author any of these again. A duplicate front fails validate:content.`);
for (const [front, n] of rows) console.log(`${front}\tu${n}`);
