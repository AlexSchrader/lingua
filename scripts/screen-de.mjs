// Screen candidate GERMAN fronts against the whole de corpus on this branch:
// EXACT front, READING FOLD (what validate:content actually keys on after
// normalizeReading), ARTICLE-STRIPPED head, STEM overlap (lexeme duplicates the
// validator can never see), and MEANING/gloss overlap.
//
//   node scripts/screen-de.mjs "das Amt" "der Antrag"
//   node scripts/screen-de.mjs --file cand.txt      (one per line, "front|meaning")
//   node scripts/screen-de.mjs --selftest
import { readFileSync } from "node:fs";
import { DE_UNITS } from "../src/data/de/index.js";

const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
  .split("ß").join("ss").replace(/[\s'’]/g, "");
const bare = (s) => s.toLowerCase().replace(/^(der|die|das|sich|ein|eine)\s+/, "").trim();
const SUF = ["ungen", "ung", "heit", "keit", "chen", "lein", "en", "er", "e", "n", "s", "te", "st", "ig", "lich", "bar", "los"];
const stems = (w) => {
  const out = new Set([w]);
  for (const s of SUF) if (w.endsWith(s) && w.length - s.length >= 4) out.add(w.slice(0, -s.length));
  return out;
};

const taught = [];
for (const u of DE_UNITS) for (const l of u.lessons) for (const it of l.items ?? []) {
  if (!it.front) continue;
  taught.push({ front: it.front, unit: u.order, meaning: it.meaning ?? "" });
}
const byFront = new Map(), byFold = new Map(), byBare = new Map(), byStem = new Map(), byMeaning = new Map();
const push = (m, k, v) => { if (!m.has(k)) m.set(k, []); m.get(k).push(v); };
const glosses = (m) => (m || "").toLowerCase().split(/[/,;]/)
  .map((s) => s.replace(/\(.*?\)/g, "").replace(/—.*$/, "").trim().replace(/^(the|a|an|to)\s+/, "").trim())
  .filter((s) => s.length > 2);
for (const t of taught) {
  const tag = `${t.front} (u${t.unit}, ${t.meaning})`;
  push(byFront, t.front, tag);
  push(byFold, fold(t.front), tag);
  push(byBare, fold(bare(t.front)), tag);
  for (const s of stems(fold(bare(t.front)))) push(byStem, s, tag);
  for (const g of glosses(t.meaning)) push(byMeaning, g, tag);
}

const argv = process.argv.slice(2);
if (argv.includes("--selftest")) {
  let ok = true;
  const must = (label, cond) => { console.log(`  ${cond ? "PASS" : "FAIL"}  ${label}`); if (!cond) ok = false; };
  must("a taught front is reported exact", byFront.has("die Familie"));
  must("a fold collision is visible", byFold.has(fold("die Strasse")));
  must("a never-taught front is clean", !byFront.has("das Krokodil") && !byStem.has("krokodil"));
  must("stem catches noun vs verb", stems("anmeldung").has("anmeld"));
  console.log(ok ? "\nselftest: the check can fail" : "\nselftest: BROKEN");
  process.exit(ok ? 0 : 1);
}

let cands = [];
const fi = argv.indexOf("--file");
if (fi >= 0) cands = readFileSync(argv[fi + 1], "utf8").split(/\r?\n/).filter((l) => l.trim() && !l.startsWith("#"));
else cands = argv;

const seen = new Map();
let clean = 0;
for (const raw of cands) {
  const [front, meaning = ""] = raw.split("|").map((s) => s.trim());
  const hits = [];
  if (byFront.has(front)) hits.push(`EXACT: ${byFront.get(front).join(", ")}`);
  const f = fold(front);
  if (byFold.has(f) && !byFront.has(front)) hits.push(`FOLD: ${byFold.get(f).join(", ")}`);
  const b = fold(bare(front));
  if (byBare.has(b) && !byFold.has(f)) hits.push(`HEAD: ${byBare.get(b).join(", ")}`);
  for (const s of stems(b)) if (byStem.has(s) && !byBare.has(b)) hits.push(`STEM(${s}): ${byStem.get(s).join(", ")}`);
  for (const g of glosses(meaning)) if (byMeaning.has(g)) hits.push(`GLOSS(${g}): ${byMeaning.get(g).join(", ")}`);
  if (seen.has(f)) hits.push(`SELF-DUP: also candidate "${seen.get(f)}"`);
  seen.set(f, front);
  if (hits.length) console.log(`✗ ${front}\n    ${[...new Set(hits)].join("\n    ")}`);
  else clean++;
}
console.log(`\n${clean}/${cands.length} candidate front(s) clean.`);
