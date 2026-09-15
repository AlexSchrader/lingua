// Cross-block collision pass. Reads fronts+meanings by REGEX from files on disk,
// so it works on sibling-branch snapshots exported with `git show`.
//
// It answers the one question no single block can answer for itself: does a front
// or a gloss appear in two different units owned by two different seats. Each seat
// holds a third of the picture, so a collision fixed in one place never reaches
// the third — which is why this runs from the lead's seat, on all three branches.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().split("ß").join("ss");
const bare = (s) => fold(s).replace(/^(der|die|das|sich)\s+/, "");
const STOP = new Set("the a an to of or and be is in on at it".split(" "));
const keys = (m) => m.toLowerCase().split(/[/,;]/)
  .map((s) => s.replace(/\(.*?\)/g, "").replace(/—.*$/, "").trim().replace(/^(the|a|an|to)\s+/, "").trim())
  .filter((s) => s.length > 1 && !STOP.has(s));

// Capture accept[] too. Block 2 established that reading `meaning` alone is not
// what the engine does — see the ENGINE-ACCURATE section below.
const RX = /front:\s*"([^"]*)"[\s\S]*?meaning:\s*"([^"]*)"([\s\S]*?)hint:/g;
const ACC = /accept:\s*\[([^\]]*)\]/;

const rows = [];
const add = (src, unit, owner) => {
  for (const m of src.matchAll(RX)) {
    const a = (m[3].match(ACC)?.[1] ?? "").match(/"([^"]*)"/g) ?? [];
    rows.push({ front: m[1], mean: m[2], accept: a.map((x) => x.slice(1, -1)), unit, owner });
  }
};

// mine: everything on this worktree — A1 (u1-u20) plus my authored block (u21-u30)
const mine = join(process.cwd(), "src/data/de");
for (const f of readdirSync(mine)) {
  const u = Number((f.match(/^unit(\d+)\.js$/) ?? [])[1]);
  if (!Number.isFinite(u)) continue;
  add(readFileSync(join(mine, f), "utf8"), u, u <= 20 ? "A1" : "block1");
}
// siblings: snapshots exported as b<N>-u<NN>.js
const xb = process.argv[2];
for (const f of readdirSync(xb)) {
  const m = f.match(/^b(\d)-u(\d+)\.js$/);
  if (!m) continue;
  add(readFileSync(join(xb, f), "utf8"), Number(m[2]), "block" + m[1]);
}

console.log(`${rows.length} cards across A1 + all three A2 blocks`);
const push = (map, k, v) => { if (!map.has(k)) map.set(k, []); map.get(k).push(v); };
const byBare = new Map(), byMean = new Map();
for (const r of rows) {
  push(byBare, bare(r.front), r);
  for (const k of keys(r.mean)) push(byMean, k, r);
}
const places = (a) => new Set(a.map((r) => r.owner + "/u" + r.unit));

console.log("\n=== EXACT FRONT COLLISIONS ACROSS UNITS ===");
let n = 0;
for (const [b, a] of byBare) {
  if (places(a).size > 1) {
    n++;
    console.log(`  ${b}\n      ${a.map((r) => `${r.owner} u${r.unit} "${r.front}" = ${r.mean}`).join("\n      ")}`);
  }
}
if (!n) console.log("  none");
else console.log(`  ${n} exact front collision(s)`);

console.log("\n=== SHARED-GLOSS COLLISIONS (different word, same meaning field) ===");
let m2 = 0;
for (const [k, a] of byMean) {
  const fronts = new Set(a.map((r) => bare(r.front)));
  if (fronts.size > 1 && places(a).size > 1) {
    m2++;
    console.log(`  "${k}"  ->  ${a.map((r) => `${r.owner} u${r.unit} ${r.front}`).join("  |  ")}`);
  }
}
if (!m2) console.log("  none");
else console.log(`  ${m2} shared-gloss collision(s) — review each`);

// ============================================================================
// ENGINE-ACCURATE GLOSS PASS.
//
// The section above uses a deliberately AGGRESSIVE key: it strips an em-dash
// suffix, so "because - verb to the end" and "because" read as the same field.
// That over-reports on purpose, to surface near-misses a reviewer should look at.
//
// It is not what the app does, and block 2 found the gap. meaningVariants
// (src/store/answer.js:96) folds in accept[] AS WELL as meaning, and splits every
// entry on / , ; AND ON THE LITERAL WORD "or". I read answer.js:101 rather than
// take it on report. Two consequences nobody had accounted for:
//   - a gloss can collide through accept[] while both canonical glosses differ,
//     and re-cutting the gloss CANNOT clear that;
//   - a gloss containing the word "or" silently splits. Block 2's first fix,
//     "temperature - how warm or cold", yielded a bare variant "cold" and
//     collided with A1's kalt. An em dash is safe; the word "or" is not.
//
// So this pass calls the REAL function rather than reimplementing it, and it
// separates two tiers, because they are not the same finding:
//   CANONICAL x CANONICAL - two cards whose printed gloss is the same. A defect.
//   ACCEPT-ONLY           - the printed glosses differ and only a synonym is
//                           shared. Leniency working as designed (answer.js:78);
//                           nobody is misgraded. Informational.
// ============================================================================
const { meaningVariants } = await import(
  "file:///" + join(process.cwd(), "src/store/answer.js").split("\\").join("/")
);
const canon = (r) => meaningVariants({ meaning: r.mean, accept: [] })[0];
const all = (r) => meaningVariants({ meaning: r.mean, accept: r.accept });

const byCanon = new Map(), byVariant = new Map();
for (const r of rows) {
  const c = canon(r);
  if (c) push(byCanon, c, r);
  for (const v of all(r)) push(byVariant, v, r);
}

console.log("\n=== CANONICAL GLOSS COLLISIONS (engine-accurate - these are defects) ===");
let c1 = 0;
for (const [k, a] of byCanon) {
  const fronts = new Set(a.map((r) => bare(r.front)));
  if (fronts.size > 1 && places(a).size > 1) {
    c1++;
    console.log(`  "${k}"  ->  ${a.map((r) => `${r.owner} u${r.unit} ${r.front}`).join("  |  ")}`);
  }
}
if (!c1) console.log("  none");

console.log("\n=== ACCEPT-ONLY OVERLAPS (leniency by design - informational) ===");
let c2 = 0;
const shown = [];
for (const [k, a] of byVariant) {
  const fronts = new Set(a.map((r) => bare(r.front)));
  if (fronts.size > 1 && places(a).size > 1 && !byCanon.has(k)) {
    c2++;
    if (shown.length < 10) shown.push(`  "${k}"  ->  ${a.map((r) => `${r.owner} u${r.unit} ${r.front}`).join("  |  ")}`);
  }
}
console.log(shown.join("\n") || "  none");
if (c2 > shown.length) console.log(`  ... and ${c2 - shown.length} more`);
console.log(`\n${c1} canonical collision(s), ${c2} accept-only overlap(s)`);

// A gloss carrying the word "or" splits into bare variants and will collide with
// whatever those variants name. Report them; an em dash is the safe separator.
const orGloss = rows.filter((r) => /\bor\b/.test(r.mean));
console.log(`\n=== GLOSSES CONTAINING "or" - these SPLIT in the engine (${orGloss.length}) ===`);
for (const r of orGloss.slice(0, 12))
  console.log(`  ${r.owner} u${r.unit} ${r.front} = "${r.mean}"  ->  ${JSON.stringify(meaningVariants({ meaning: r.mean, accept: [] }))}`);
if (!orGloss.length) console.log("  none");
