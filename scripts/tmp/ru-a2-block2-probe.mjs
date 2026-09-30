// ru-a2-block2 batch front probe. Usage: node scripts/tmp/ru-a2-block2-probe.mjs слово слово …
// Not part of the gate; a measuring tool. See src/data/ru/unit41.js header.
import { seedItems } from "../../src/data/index.js";
const all = Object.values(seedItems()).filter((i) => i.lang === "ru");
const byFront = new Map(all.map((i) => [i.front.toLowerCase(), i]));
const T = { а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"yo",ж:"zh",з:"z",и:"i",й:"y",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"kh",ц:"ts",ч:"ch",ш:"sh",щ:"shch",ъ:"",ы:"y",ь:"",э:"e",ю:"yu",я:"ya" };
const translit = (f) => [...f.toLowerCase()].map((c) => (c === " " || c === "-" ? "" : (T[c] ?? `?${c}?`))).join("");
const normText = (s) => String(s).normalize("NFKC").toLowerCase().replace(/[’']/g, "'").trim();
const normalizeMeaning = (s = "") => normText(s).replace(/\(.*?\)/g, " ").replace(/\s+/g, " ").trim().replace(/^(?:a|an|the)\s+/, "").replace(/^to\s+/, "");
const readings = new Map();
for (const i of all) { const k = (i.type === "glyph" ? "glyph:" : "word:") + i.reading; if (!readings.has(k)) readings.set(k, []); readings.get(k).push(i.id); }
const fold = (s) => s.toLowerCase().replace(/ё/g, "е").replace(/й/g, "и");
const folds = new Map();
for (const i of all) { const k = fold(i.front); if (!folds.has(k)) folds.set(k, []); folds.get(k).push(i.id); }
const glosses = new Map();
for (const i of all) { if (!i.meaning) continue; const k = normalizeMeaning(i.meaning); if (!glosses.has(k)) glosses.set(k, []); glosses.get(k).push(`${i.id}="${i.meaning}"`); }

const args = process.argv.slice(2);
if (args[0] === "--gloss") {
  for (const g of args.slice(1)) {
    const k = normalizeMeaning(g);
    console.log(`${(glosses.get(k) ?? []).length ? "COLLIDES" : "free    "} ${JSON.stringify(g)} -> ${JSON.stringify(k)} ${(glosses.get(k) ?? []).join(", ")}`);
  }
  process.exit(0);
}
for (const w of args) {
  const lw = w.toLowerCase();
  const hit = byFront.get(lw);
  const r = translit(lw);
  const out = [];
  if (hit) out.push(`TAKEN ${hit.id} u${hit.unit}l${hit.lesson} "${hit.meaning}"`);
  const rc = readings.get("word:" + r) ?? [];
  if (rc.length) out.push(`READING-COLLIDES(${r}): ${rc.join(",")}`);
  const fc = folds.get(fold(lw)) ?? [];
  if (fc.length && !hit) out.push(`FOLD-COLLIDES: ${fc.join(",")}`);
  const stem = lw.slice(0, 4);
  const rel = all.filter((i) => i.front.toLowerCase() !== lw && i.front.toLowerCase().startsWith(stem)).map((i) => `${i.front}(u${i.unit})`);
  if (rel.length) out.push(`STEM~ ${rel.join(" ")}`);
  console.log(`${hit ? "TAKEN" : out.length ? "?    " : "FREE "} ${w.padEnd(16)} ${out.join(" | ") || "reading " + r}`);
}
