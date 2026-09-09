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

const RX = /front:\s*"([^"]*)"[\s\S]*?meaning:\s*"([^"]*)"/g;

const rows = [];
const add = (src, unit, owner) => {
  for (const m of src.matchAll(RX)) rows.push({ front: m[1], mean: m[2], unit, owner });
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
