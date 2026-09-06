// Drill verifier for German. Replicates the REAL canCloze / sentenceTokens logic
// from src/store/cardRouting.js rather than approximating it, so a drill that
// passes here is a drill the engine will actually build a card from.
//
// scripts/check-drills.mjs is Norwegian-only — it hardcodes no/index.js, NO_UNITS,
// the en/ei/et/å articles and a Norwegian irregular-verb table. This is the German
// equivalent. Neither validate:content nor lint:curriculum can do this job: the
// contract only checks that drill is { jp, en } with both non-empty, and says
// nothing about token count, punctuation or whether the front is even present.
//
//   node scripts/check-drills-de.mjs        report
//   node scripts/check-drills-de.mjs -v     list every item that still needs one
//   node scripts/check-drills-de.mjs 1 7    limit to a unit range (a block)
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const args = process.argv.slice(2).filter((a) => a !== "-v");
const verbose = process.argv.includes("-v");
const from = Number(args[0] ?? 1);
const to = Number(args[1] ?? 20);

// Whole-word match, case-insensitive — the same test findFrontInExample uses for
// Latin scripts. A German front carries its article ("die Tür"), and the article
// is part of the phrase, so the whole phrase must appear.
const findWholeWord = (hay, needle) => {
  const esc = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?<!\\p{L})${esc}(?!\\p{L})`, "iu").test(hay);
};

// Returns null if the sentence is buildable, else the reason it is not.
export const drillProblem = (front, raw) => {
  const jp = String(raw ?? "").replace(/\s*[。！？.!?]+\s*$/u, "");
  if (!jp) return "empty";
  if (!findWholeWord(jp, front)) return "front not present as a whole word";
  if (/[.!?…—–]/u.test(jp)) return "sentence-internal . ! ? or dash";
  const t = jp.split(/\s+/).filter(Boolean);
  if (t.length < 3) return `only ${t.length} tokens (min 3)`;
  if (t.length > 8) return `${t.length} tokens (max 8)`;
  if (t.some((x) => !/\p{L}/u.test(x))) return "punctuation-only tile";
  return null;
};

const units = [];
for (let u = from; u <= to; u++) {
  const mod = await import(`file:///${join(root, `src/data/de/unit${u}.js`).replace(/\\/g, "/")}`);
  units.push(Object.values(mod)[0]);
}

let usable = 0;
const need = [];
const reasons = {};
for (const unit of units)
  for (const l of unit.lessons)
    for (const it of l.items ?? []) {
      // practice() is drill ?? example — a drill only has to exist where the
      // example cannot carry the card.
      const src = it.drill ?? it.example;
      const r = drillProblem(it.front, src?.jp);
      if (r) {
        need.push({ id: it.id, front: it.front, jp: src?.jp ?? "", r, hasDrill: !!it.drill });
        reasons[r] = (reasons[r] || 0) + 1;
      } else usable++;
    }

const total = usable + need.length;
const pct = total ? Math.round((usable / total) * 100) : 0;
console.log(`de u${from}-u${to}: ${usable}/${total} items can build an in-context card (${pct}%)`);
console.log(`${need.length} still need a drill`);
for (const [k, v] of Object.entries(reasons).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(3)}  ${k}`);
const broken = need.filter((n) => n.hasDrill);
if (broken.length) {
  console.log(`\n${broken.length} AUTHORED DRILL(S) STILL FAIL — these are defects, not gaps:`);
  for (const b of broken) console.log(`  ✗ ${b.id}  [${b.r}]  «${b.jp}»`);
}
if (verbose) for (const n of need.filter((x) => !x.hasDrill)) console.log(`    ${n.id}  "${n.front}"  [${n.r}]  «${n.jp}»`);
process.exit(broken.length ? 1 : 0);
