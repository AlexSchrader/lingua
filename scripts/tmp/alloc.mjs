import { pathToFileURL } from "node:url";
import { join } from "node:path";
const { UNITS } = await import(pathToFileURL(join(process.cwd(), "src/data/index.js")).href);
const blockOf = (o) => (o <= 73 ? 1 : o <= 86 ? 2 : 3);
const all = [];
for (const u of UNITS.filter((u) => u.lang === "ru" && u.order >= 61))
  for (const l of u.lessons ?? []) for (const it of l.items ?? [])
    if (it.type === "vocab") all.push({ ...it, u: u.order, b: blockOf(u.order), title: u.title });
const m = new Map();
for (const it of all) { const k = it.front.toLowerCase(); if (!m.has(k)) m.set(k, []); m.get(k).push(it); }
const rows = [...m.values()].filter((v) => v.length > 1);
// POLICY: block 3's themes were centrally allocated -> block 3 keeps vs block 2.
//         block 1 is earlier and its rethemes were accepted -> block 1 keeps vs block 2.
//         block 1 vs block 3 -> lower slot wins (block 1).
const keepRank = { 1: 0, 3: 1, 2: 2 }; // lower = keeps
const loseByUnit = new Map();
let n = 0;
for (const v of rows) {
  const sorted = [...v].sort((a, b) => keepRank[a.b] - keepRank[b.b] || a.u - b.u);
  const keep = sorted[0];
  for (const lose of sorted.slice(1)) {
    n++;
    if (!loseByUnit.has(lose.u)) loseByUnit.set(lose.u, []);
    loseByUnit.get(lose.u).push({ front: lose.front, id: lose.id, keepAt: keep.u, keepTitle: keep.title });
  }
}
console.log(`collisions: ${rows.length} fronts, ${n} cards to replace\n`);
const byBlock = {};
for (const [u, ls] of loseByUnit) { const b = blockOf(u); byBlock[b] = (byBlock[b] || 0) + ls.length; }
console.log("replacements by block:", JSON.stringify(byBlock), "\n");
for (const u of [...loseByUnit.keys()].sort((a, b) => a - b)) {
  const ls = loseByUnit.get(u);
  console.log(`u${u} (block ${blockOf(u)}) — ${ls.length} to replace`);
  for (const x of ls) console.log(`    ${x.front.padEnd(16)} ${x.id.padEnd(26)} -> keeps at u${x.keepAt} "${x.keepTitle}"`);
}
