// ru-a2-block3 probe: check candidate fronts + glosses against the live ru corpus.
import { seedItems } from "../../src/data/index.js";
const all = Object.values(seedItems()).filter((i) => i.lang === "ru");
const normText = (s) => String(s).normalize("NFKC").toLowerCase().replace(/[’']/g, "'").trim();
const nm = (s = "") => normText(s).replace(/\(.*?\)/g, " ").replace(/\s+/g, " ").trim().replace(/^(?:a|an|the)\s+/, "").replace(/^to\s+/, "");
const fold = (s) => s.toLowerCase().replace(/ё/g, "е").replace(/й/g, "и");
const fronts = new Map(), folds = new Map(), glosses = new Map(), readings = new Map();
for (const i of all) {
  fronts.set(i.front, i.id);
  folds.set(fold(i.front), i.id);
  if (i.meaning) { const k = nm(i.meaning); if (!glosses.has(k)) glosses.set(k, []); glosses.get(k).push(i.id + "=" + i.meaning); }
  for (const a of i.accept ?? []) { const k = nm(a); if (!glosses.has(k)) glosses.set(k, []); glosses.get(k).push(i.id + "~" + a); }
  const rk = (i.type === "glyph" ? "glyph:" : "word:") + i.reading;
  if (!readings.has(rk)) readings.set(rk, []); readings.get(rk).push(i.id);
}
const args = process.argv.slice(2);
if (args[0] === "--gloss") {
  for (const g of args.slice(1)) {
    const k = nm(g); const hit = glosses.get(k);
    console.log(`${hit ? "TAKEN " : "free  "} gloss "${g}" -> "${k}"${hit ? "  :: " + hit.join(" | ") : ""}`);
  }
} else if (args[0] === "--reading") {
  for (const r of args.slice(1)) { const hit = readings.get("word:" + r); console.log(`${hit ? "TAKEN " : "free  "} reading ${r}${hit ? " :: " + hit.join(", ") : ""}`); }
} else if (args[0] === "--dump-fronts") {
  console.log([...fronts.keys()].join("\n"));
} else if (args[0] === "--dump-glosses") {
  console.log([...glosses.keys()].sort().join("\n"));
} else if (args[0] === "--stem") {
  for (const w of args.slice(1)) {
    const pre = w.slice(0, Math.min(4, w.length)).toLowerCase();
    const hits = [...fronts.entries()].filter(([f]) => f.toLowerCase().startsWith(pre));
    console.log(`${w}: ${hits.length ? hits.map(([f, id]) => f + "(" + id + ")").join(", ") : "no stem neighbours"}`);
  }
} else {
  for (const f of args) {
    const t = fronts.get(f); const fo = folds.get(fold(f));
    console.log(`${t ? "TAKEN " : (fo ? "FOLD  " : "free  ")} ${f}${t ? " :: " + t : (fo ? " :: folds onto " + fo : "")}`);
  }
}
