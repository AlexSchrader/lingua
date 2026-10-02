import { UNITS } from "../../src/data/index.js";
const L = process.argv[2];
const units = UNITS.filter((u) => u.lang === L);
const title = new Map(units.map((u) => [u.order, u.title]));
const all = [];
for (const u of units) for (const l of u.lessons ?? []) for (const it of l.items ?? []) if (it.type === "vocab") all.push({ ...it, unit: u.order });
const m = new Map();
for (const it of all) { const k = String(it.front).toLowerCase(); if (!m.has(k)) m.set(k, []); m.get(k).push(it); }
const rows = [...m.values()].filter((v) => v.length > 1).sort((a, b) => a[0].unit - b[0].unit || a[1].unit - b[1].unit);
for (const v of rows) {
  const [a, b] = v.sort((x, y) => x.unit - y.unit);
  console.log(`${a.front} | "${a.meaning}" vs "${b.meaning}" | u${a.unit} ${title.get(a.unit)} <${a.id}> | u${b.unit} ${title.get(b.unit)} <${b.id}>`);
}
console.log(`\n${rows.length} pairs`);
const byPair = new Map();
for (const v of rows) { const k = `u${v[0].unit}->u${v[1].unit}`; byPair.set(k, (byPair.get(k)||0)+1); }
console.log([...byPair.entries()].sort((a,b)=>b[1]-a[1]).map(([k,n])=>`${k}:${n}`).join("  "));
