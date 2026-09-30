import { seedItems } from "../../src/data/index.js";
const all = Object.values(seedItems()).filter((i) => i.lang === "ru");
const lo = Number(process.argv[2] ?? 1), hi = Number(process.argv[3] ?? 60);
const m = new Map();
for (const i of all) {
  if (i.unit < lo || i.unit > hi) continue;
  const k = `u${i.unit}`;
  if (!m.has(k)) m.set(k, []);
  m.get(k).push(`${i.front}=${i.meaning}`);
}
for (const [k, v] of [...m.entries()].sort((a, b) => Number(a[0].slice(1)) - Number(b[0].slice(1)))) console.log(`${k}: ${v.join(" · ")}`);
