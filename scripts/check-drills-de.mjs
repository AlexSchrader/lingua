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

// --- vocab scope for drills. NOTHING ELSE CHECKS THIS. validate:content only
// asserts drill is { jp, en } with both non-empty; lint:curriculum and
// check-lang-scope read `example` and never look at `drill`. A drill is a
// sentence the learner reads, so it is bound by the same taught-at-or-before
// rule as an example — and without this pass nothing would ever say so.
const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/ß/g, "ss");
const FREE = new Set();
const born = new Map();
const remember = (w, u) => { const p = born.get(w); if (p === undefined || u < p) born.set(w, u); };
for (let u = 1; u <= 20; u++) {
  let src = "";
  try { src = readFileSync(join(root, `src/data/de/unit${u}.js`), "utf8"); } catch { continue; }
  const m = src.match(/^\/\/\s*FREE:\s*(.+)$/m);
  if (m) m[1].split(/[|,]/).map((s) => s.trim()).filter(Boolean).forEach((w) => FREE.add(fold(w)));
  const mod = await import(`file:///${join(root, `src/data/de/unit${u}.js`).replace(/\\/g, "/")}`);
  const unit = Object.values(mod)[0];
  for (const l of unit.lessons)
    for (const it of l.items ?? []) {
      const f = fold(it.front);
      f.split(/\s+/).forEach((w) => remember(w, unit.order));
      const bare = f.replace(/^(der|die|das)\s+/, "");
      remember(bare, unit.order);
      if (/en$/.test(bare)) {                       // infinitive -> its person forms
        const st = bare.replace(/en$/, "");
        ["e", "st", "t", "en", "et", ""].forEach((s) => remember(st + s, unit.order));
      }
      ["e", "en", "er", "n", "s"].forEach((s) => remember(bare + s, unit.order));
    }
}
const outOfScope = (jp, order) =>
  fold(jp).replace(/[.,!?;:]/g, " ").split(/\s+/).filter(Boolean)
    .filter((w) => !FREE.has(w) && !(born.get(w) !== undefined && born.get(w) <= order));

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

// scope pass over every authored drill in range
let scoped = 0;
const scopeBad = [];
for (const unit of units)
  for (const l of unit.lessons)
    for (const it of l.items ?? []) {
      if (!it.drill) continue;
      scoped++;
      const miss = outOfScope(it.drill.jp, unit.order);
      if (miss.length) scopeBad.push({ id: it.id, u: unit.order, miss, jp: it.drill.jp });
    }
console.log(`\n${scoped} authored drill(s) checked for vocab scope — ${scopeBad.length} out of scope`);
for (const s of scopeBad) console.log(`  ✗ ${s.id} (u${s.u}) uses ${s.miss.join(", ")} — «${s.jp}»`);

if (verbose) for (const n of need.filter((x) => !x.hasDrill)) console.log(`    ${n.id}  "${n.front}"  [${n.r}]  «${n.jp}»`);
process.exit(broken.length || scopeBad.length ? 1 : 0);
