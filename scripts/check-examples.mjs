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
function buildBorn(rows, m) {
  const b = new Map();
  const put = (w, s) => { if (!w) return; const prev = b.get(w); if (prev === undefined || s < prev) b.set(w, s); };
  for (const i of rows) m.surfaces(i.front, i.u * 100 + i.l, put);
  return b;
}
const WORD = /[\p{L}]+/gu;
// The whole rule, in one place, so --selftest exercises the real thing and not a
// paraphrase of it. Returns [] for an item in scope.
function violations(text, item, b, free) {
  const bad = [];
  for (const w of String(text).toLowerCase().match(WORD) || []) {
    if (free.has(w) || w.length < 2) continue;
    const at = b.get(w);
    // RUNBOOK §4 is "at or before that UNIT". Slots are u*100+lesson, so the
    // (u+1)*100 ceiling admits every lesson of unit u and nothing beyond it —
    // a word first taught in the NEXT unit is a violation. The comment here
    // used to claim the opposite; --selftest caught the claim, not the code.
    if (at === undefined) bad.push(`"${w}" is taught NOWHERE`);
    else if (at > (item.u + 1) * 100) bad.push(`"${w}" first taught u${Math.floor(at / 100)}, used at u${item.u}`);
  }
  return bad;
}

const born = buildBorn(items, morph);

// --- an authoring query: where does this word enter the course? ---
const taught = flag("--taught");
if (taught !== null) {
  for (const w of taught.split(/[ ,]+/).filter(Boolean)) {
    const lw = w.toLowerCase(); const at = born.get(lw);
    console.log(lw.padEnd(16), FREE.has(lw) ? "FREE" : at === undefined ? "— untaught" : `u${Math.floor(at / 100)}l${at % 100}`);
  }
  process.exit(0);
}

// --- --selftest -------------------------------------------------------------
//
// Two halves, and the second is the one that matters.
//
// CATCHES: sentences that MUST be flagged. These prove the checker fires at all.
// A checker that reports clean because it silently matched nothing is the failure
// mode I have hit twice on this project — a \b written inside a template literal
// became a backspace character and ran clean over 192 drills, and a \1 written
// through a shell heredoc became a 0x01 byte and ran clean over the whole corpus.
//
// ALLOWS: sentences that must NOT be flagged, one per documented resolver gap in
// morph/<lang>.mjs. Asserting these pass is nearly worthless on its own — a
// fixture that never had the word in it also passes. So each ALLOW is re-run
// against the GENERIC resolver, which indexes no inflections whatsoever, and MUST
// be flagged there. That is the proof the case is load-bearing: it passes because
// the resolver earns it, not because the fixture is empty.
if (argv.includes("--selftest")) {
  if (lang !== "no") { console.error("--selftest fixtures are Norwegian; run with --lang no"); process.exit(2); }
  const generic = await import(url(join(HERE, "morph/_generic.mjs")));
  const at = (u, l) => ({ u, l });

  // A miniature course. Only the fronts matter; the slot is where each is taught.
  const CORPUS = [
    { front: "å si", u: 12, l: 1 }, { front: "et hjerte", u: 25, l: 2 },
    { front: "et sykehjem", u: 25, l: 4 }, { front: "å skynde seg", u: 17, l: 3 },
    { front: "usikker", u: 22, l: 2 }, { front: "min", u: 4, l: 4 },
    { front: "å huske", u: 17, l: 3 }, { front: "sulten", u: 6, l: 3 },
    { front: "hvilken", u: 12, l: 3 }, { front: "ei rot", u: 34, l: 1 },
    { front: "en lege", u: 11, l: 2 }, { front: "å hoste", u: 25, l: 1 },
    { front: "å være", u: 1, l: 1 }, { front: "å høre", u: 11, l: 4 },
    { front: "å ha", u: 3, l: 3 }, { front: "var", u: 14, l: 2 },
    { front: "ut", u: 13, l: 3 },
    { front: "sår", u: 25, l: 1 },
    { front: "en operasjon", u: 30, l: 1 },
    { front: "en nøkkel", u: 16, l: 1 },
  ];
  const B = buildBorn(CORPUS, morph);
  const G = buildBorn(CORPUS, generic);
  const FR = new Set(["oslo"]);

  const CATCH = [
    ["a word no front can produce", "Legen sier farlig", at(25, 1)],
    ["a word taught two units later", "Legen sier operasjon", at(25, 1)],
    // GAP 12, opposite polarity to every ALLOWS case below. `var` is a taught
    // bare front (past of å være) and the resolver used to hand it noun endings,
    // inventing vare/varen/varer — real Norwegian the course does not teach. The
    // generic-resolver proof is meaningless for this one, since generic flags
    // everything; the case earns its place by failing if NOT_NOMINAL loses a
    // member, which is a silent false negative and the expensive direction.
    ["over-generation from a verb form", "Legen sier varer", at(25, 1)],
  ];
  // label -> [sentence, item, the gap it guards]
  const ALLOW = [
    ["gap 1  strong past",        "Legen sa hoste",        at(25, 2)],
    ["gap 2  e-final neuter def", "Hjertet hoster",        at(25, 2)],
    ["gap 3  compound doubling",  "Sykehjemmet hoster",    at(25, 4)],
    ["gap 4  multiword verb head","Legen skynder",         at(25, 2)],
    ["gap 5  -er adjective",      "Legen er usikre",       at(25, 2)],
    ["gap 6  possessive",         "Legen er mi",           at(25, 2)],
    ["gap 7  imperative",         "Husk legen",            at(25, 2)],
    ["gap 8  -en adjective",      "Legen er sultne",       at(25, 2)],
    ["gap 9  determiner",         "Hvilket hjerte hoster", at(25, 2)],
    ["gap 10 irregular plural",   "Røttene hoster",        at(35, 1)],
    ["gap 11 weak participle",    "Legen har hørt",        at(25, 2)],
    ["gap 12b locative pair",     "Legen hoster ute",      at(25, 2)],
    ["gap 13 -el plural syncope", "Nøklene hoster",        at(25, 2)],
    ["FREE list",                 "Oslo hoster",           at(25, 2)],
    ["later LESSON, same unit",   "Legen hoster",          at(25, 1)],
  ];

  let failed = 0;
  for (const [label, text, item] of CATCH) {
    const got = violations(text, item, B, FR);
    const ok = got.length > 0;
    if (!ok) failed++;
    console.log(`  ${ok ? "ok  " : "FAIL"} catches ${label.padEnd(30)} ${ok ? got[0] : "reported clean — the checker did not fire"}`);
  }
  for (const [label, text, item] of ALLOW) {
    const got = violations(text, item, B, FR);
    // Load-bearing? The FREE and boundary cases are not resolver gaps, so they
    // are exempt from the generic-resolver proof.
    const isGap = label.startsWith("gap");
    const underGeneric = isGap ? violations(text, item, G, FR) : ["n/a"];
    const ok = got.length === 0 && underGeneric.length > 0;
    if (!ok) failed++;
    const why = got.length ? `flagged: ${got[0]}` : "VACUOUS — passes even with no resolver at all";
    console.log(`  ${ok ? "ok  " : "FAIL"} allows  ${label.padEnd(30)} ${ok ? "" : why}`);
  }
  console.log(`\nselftest: ${CATCH.length + ALLOW.length - failed} passed, ${failed} failed`);
  process.exit(failed ? 1 : 0);
}

const problems = [];
for (const item of items) {
  const text = String((field === "drill" ? item.drill?.jp : item.example?.jp) ?? "");
  if (!text) continue;
  const bad = violations(text, item, born, FREE);
  if (bad.length) problems.push(`  ✗ ${item.id.padEnd(24)} ${bad.join(" | ")}   «${text}»`);
}

if (problems.length) console.log(problems.join("\n"));
console.log(`\n${lang} ${field}s: ${items.length - problems.length} in scope · ${problems.length} out of scope${PARTIAL ? "  [PARTIAL — generic resolver, expect false positives]" : ""}`);
process.exit(problems.length ? 1 : 0);
