import { seedItems } from "../../src/data/index.js";
const all = Object.values(seedItems()).filter((i) => i.lang === "ru");
const m = new Map(all.map((i) => [i.front, `u${i.unit}l${i.lesson} "${i.meaning}"`]));
for (const f of process.argv.slice(2)) console.log(`${f}\t${m.get(f) ?? "NOT TAUGHT"}`);
