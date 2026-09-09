// Vocabulary-scope gate over every example sentence in a language.
//
//   node scripts/check-examples.mjs --lang no
//   node scripts/check-examples.mjs --lang no --field drill
//   node scripts/check-examples.mjs --lang no --taught "om,hver,selv"
//   node scripts/check-examples.mjs --lang no --root C:/dev/lingua-no-a2-b3 \\
//                                   --merge C:/dev/lingua-no-a2,C:/dev/lingua-no-a2-b2
//
// WHY THIS EXISTS, given lint:curriculum already warns on scope.
//
// lint decides whether a word is taught with a prefix heuristic — lint.js:226
// isInflection excuses any token sharing three leading characters with a taught
// word and differing by three or fewer. That excuses `som` because `sommer` is
// taught, `der` because of `deres`, and `for` because of `fordi`. The exemption
// surface GROWS with the corpus: every unit landed makes lint blinder. And in the
// other direction it has no morphology at all, so it warns on every ordinary
// inflection of a front it has itself indexed. The result on Norwegian A2 was
// roughly 200 warning lines with 20 real violations inside them, which is the
// same as no signal.
//
// This checks scope against an explicit surface-form table built from the fronts
// themselves (scripts/morph/<lang>.mjs). A word is taught if some taught front
// can actually produce it. No prefix guessing in either direction.
//
// On Norwegian A2 the first run flagged 43 examples. Closing six gaps in the
// resolver took that to 20 — and all 20 were genuine, including om, hver, mens,
// selv, sin and for, every one of which lint structurally cannot see. The six
// gaps are documented in scripts/morph/no.mjs; read them before porting.
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the morphology modules next to THIS FILE, not next to --root: the
// point of --root is to check a sibling worktree that does not have them.
const HERE = dirname(fileURLToPath(import.meta.url));

const argv = process.argv.slice(2);
const flag = (name, fallback = null) => {
  const i = argv.indexOf(name);
  return i < 0 ? fallback : argv[i + 1] ?? fallback;
};
const lang = flag("--lang");
const field = flag("--field", "example");
if (!lang) {
  console.error("usage: node scripts/check-examples.mjs --lang <code> [--field example|drill] [--taught w1,w2]");
  process.exit(2);
}

const root = flag("--root", process.cwd());
// --merge: extra worktrees whose units join the taught table AND get checked.
// Sibling branches are invisible from here — git shows nothing until they land —
// so a scope check run from one seat alone silently treats the other two blocks'
// vocabulary as untaught, and their examples as somebody else's problem.
const roots = [root, ...(flag("--merge", "") || "").split(",").map((s) => s.trim()).filter(Boolean)];
const url = (p) => `file:///${p.replace(/\\/g, "/")}`;

const seen = new Set();
const UNITS = [];
const dirs = [];
for (const r of roots) {
  const d = join(r, "src/data", lang);
  if (!existsSync(d)) { console.error(`no such language: ${d}`); process.exit(2); }
  dirs.push(d);
  const m = await import(url(join(d, "index.js")));
  for (const u of (Object.values(m).find(Array.isArray) ?? [])) {
    if (!u.lessons?.some((l) => l.items)) continue;
    // Lower slot wins, and the first root listed wins a tie — so put your own
    // worktree first and the check reports what YOU would have to change.
    if (seen.has(u.order)) continue;
    seen.add(u.order); UNITS.push(u);
  }
}
UNITS.sort((a, b) => a.order - b.order);
const dir = dirs[0];
const items = UNITS.flatMap((u) => u.lessons.flatMap((l) => (l.items || []).map((i) => ({ ...i, u: u.order, l: l.lesson }))));

// --- morphology: the language's own module, or the honest-but-weak fallback ---
const morphPath = join(HERE, "morph", `${lang}.mjs`);
const morph = await import(url(existsSync(morphPath) ? morphPath : join(HERE, "morph/_generic.mjs")));
const PARTIAL = !!morph.PARTIAL;
if (PARTIAL && !argv.includes("--generic")) {
  console.error(`No scripts/morph/${lang}.mjs — the generic resolver indexes no inflections at all, so`);
  console.error(`every taught word's inflected forms would be reported as violations. Write the module`);
  console.error(`first (start from scripts/morph/no.mjs and its list of six gaps), or pass --generic to`);
  console.error(`see the raw output anyway, understanding that most of it will be noise.`);
  process.exit(2);
}

// --- FREE list, parsed from the unit headers exactly as check-lang-scope does ---
const FREE = new Set();
for (const n of UNITS.map((u) => u.order)) {
  let src = "";
  for (const d of dirs) { try { src = readFileSync(join(d, `unit${n}.js`), "utf8"); break; } catch { /* next root */ } }
  const m = src.match(/^\/\/\s*FREE:\s*(.+)$/m);
  if (!m) continue;
  for (const w of m[1].split(/[|,]/).map((s) => s.trim()).filter(Boolean)) {
    const lw = w.toLowerCase(); FREE.add(lw);
    // a FREE word inflects too: kafé -> kafeen, kafeer. The accent drops first.
    const stem = lw.normalize("NFD").replace(/[̀-ͯ]/g, "");
    for (const suf of morph.FREE_SUFFIXES ?? []) { FREE.add(lw + suf); FREE.add(stem + suf); }
  }
}

// --- surface form -> earliest slot that teaches it ---
const born = new Map();
const add = (w, s) => { if (!w) return; const p = born.get(w); if (p === undefined || s < p) born.set(w, s); };
for (const i of items) morph.surfaces(i.front, i.u * 100 + i.l, add);

// --- an authoring query: where does this word enter the course? ---
const taught = flag("--taught");
if (taught !== null) {
  for (const w of taught.split(/[ ,]+/).filter(Boolean)) {
    const lw = w.toLowerCase(); const at = born.get(lw);
    console.log(lw.padEnd(16), FREE.has(lw) ? "FREE" : at === undefined ? "— untaught" : `u${Math.floor(at / 100)}l${at % 100}`);
  }
  process.exit(0);
}

const WORD = /[\p{L}]+/gu;
const problems = [];
for (const item of items) {
  const text = String((field === "drill" ? item.drill?.jp : item.example?.jp) ?? "");
  if (!text) continue;
  const bad = [];
  for (const w of text.toLowerCase().match(WORD) || []) {
    if (FREE.has(w) || w.length < 2) continue;
    const at = born.get(w);
    // The documented rule (RUNBOOK §4) is "at or before that UNIT", so a word
    // first taught in the very next unit is the boundary, not a violation.
    if (at === undefined) bad.push(`"${w}" is taught NOWHERE`);
    else if (at > (item.u + 1) * 100) bad.push(`"${w}" first taught u${Math.floor(at / 100)}, used at u${item.u}`);
  }
  if (bad.length) problems.push(`  ✗ ${item.id.padEnd(24)} ${bad.join(" | ")}   «${text}»`);
}

if (problems.length) console.log(problems.join("\n"));
console.log(`\n${lang} ${field}s: ${items.length - problems.length} in scope · ${problems.length} out of scope${PARTIAL ? "  [PARTIAL — generic resolver, expect false positives]" : ""}`);
process.exit(problems.length ? 1 : 0);
