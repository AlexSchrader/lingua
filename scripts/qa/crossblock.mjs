// Cross-block verification for one language's unit range. Untracked probe.
//   node scripts/tmp/crossblock.mjs <lang> <from> <to>
import { UNITS, seedItems } from "../../src/data/index.js";
import { normalizeReading } from "../../src/store/answer.js";
import { canCloze, canSentence, canBuildReading, eligibleKinds, shouldSpeak } from "../../src/store/cardRouting.js";

const [lang, from, to] = [process.argv[2], +process.argv[3], +process.argv[4]];
const units = UNITS.filter((u) => u.lang === lang).sort((a, b) => a.order - b.order);
const all = [];
for (const u of units) for (const l of u.lessons ?? []) for (const it of l.items ?? []) all.push({ ...it, lang, unit: u.order, lesson: l.id });
const range = all.filter((it) => it.unit >= from && it.unit <= to);

console.log(`## ${lang} — ${units.length} units, ${all.length} cards total; range u${from}-u${to} = ${range.length} cards`);

// 1. per-unit shape
const bad = [];
for (const u of units) {
  if (u.order < from || u.order > to) continue;
  const per = (u.lessons ?? []).map((l) => (l.items ?? []).length);
  const n = per.reduce((a, b) => a + b, 0);
  if (n !== 24 || per.some((p) => p !== 6)) bad.push(`u${u.order} ${n} cards [${per}] "${u.title}"`);
}
console.log(`1. unit shape (4x6=24): ${bad.length ? "OFF-SHAPE:\n   " + bad.join("\n   ") : "all " + (to - from + 1) + " units exactly 4x6"}`);

// 2. duplicate fronts within the language
const byFront = new Map();
for (const it of all) (byFront.get(String(it.front).toLowerCase()) ?? byFront.set(String(it.front).toLowerCase(), []).get(String(it.front).toLowerCase())).push(it);
const dupFronts = [...byFront.entries()].filter(([, v]) => v.length > 1);
console.log(`2. duplicate fronts (lang-wide): ${dupFronts.length}`);
for (const [f, v] of dupFronts.slice(0, 25)) console.log(`   ${f} -> ${v.map((x) => `u${x.unit}:${x.id}`).join(" ")}`);

// 3. reading-fold collisions
const byFold = new Map();
for (const it of all) {
  const k = normalizeReading(String(it.front), lang);
  if (!byFold.has(k)) byFold.set(k, []);
  byFold.get(k).push(it);
}
const foldCol = [...byFold.entries()].filter(([, v]) => new Set(v.map((x) => String(x.front).toLowerCase())).size > 1);
console.log(`3. reading-fold collisions (distinct spellings): ${foldCol.length}`);
for (const [f, v] of foldCol.slice(0, 25)) console.log(`   "${f}" -> ${v.map((x) => `${x.front}(u${x.unit})`).join(" ")}`);

// 4. gloss collisions inside one lesson, and inside one unit
const norm = (m) => String(m ?? "").toLowerCase().replace(/\(.*?\)/g, "").replace(/^(a|an|the)\s+/, "").replace(/^to\s+/, "").trim();
for (const [scope, key] of [["lesson", (x) => x.lesson], ["unit", (x) => x.unit]]) {
  const m = new Map();
  for (const it of range) {
    const k = `${key(it)}|${norm(it.meaning)}`;
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(it);
  }
  const col = [...m.entries()].filter(([, v]) => v.length > 1);
  console.log(`4${scope === "lesson" ? "a" : "b"}. same-${scope} gloss collisions in range: ${col.length}`);
  for (const [k, v] of col.slice(0, 20)) console.log(`   ${k} -> ${v.map((x) => x.front).join(" / ")}`);
}

// 5. routing coverage over the range
seedItems();
const vocab = range.filter((it) => it.type === "vocab");
const cnt = (f) => vocab.filter(f).length;
console.log(`5. routing over ${vocab.length} vocab in range:`);
console.log(`   canCloze ${cnt(canCloze)}  canSentence ${cnt(canSentence)}  canBuildReading ${cnt(canBuildReading)}  shouldSpeak ${cnt(shouldSpeak)}`);
const noKinds = vocab.filter((it) => eligibleKinds(it).length === 0);
console.log(`   vocab with ZERO eligible kinds: ${noKinds.length}${noKinds.length ? " -> " + noKinds.slice(0, 10).map((x) => x.id).join(" ") : ""}`);
const thin = vocab.filter((it) => eligibleKinds(it).length < 3);
console.log(`   vocab with <3 eligible kinds: ${thin.length}${thin.length ? " -> " + thin.slice(0, 10).map((x) => `${x.id}(${eligibleKinds(x).join(",")})`).join(" ") : ""}`);

// 6. missing fields
const miss = range.filter((it) => !it.front || !it.meaning || (it.type === "vocab" && !it.example));
console.log(`6. items missing front/meaning/example: ${miss.length}${miss.length ? " -> " + miss.slice(0, 10).map((x) => x.id).join(" ") : ""}`);
