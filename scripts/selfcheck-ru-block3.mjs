// Block 3 self-check for Russian. Imports the REAL graders and router rather than
// approximating them. Run: node scripts/selfcheck-ru-block3.mjs
import { seedItems } from "../src/data/index.js";
import { normalizeReading, checkMeaning, checkProduce, checkReading, meaningVariants } from "../src/store/answer.js";
import { canCloze, canSentence, practice } from "../src/store/cardRouting.js";

const all = Object.values(seedItems()).filter((i) => i.lang === "ru");
const mine = all.filter((i) => i.unit >= 21);
const fails = {};
const add = (k, msg) => ((fails[k] ??= []).push(msg));

// --- §1 transliteration table -------------------------------------------------
const T = { а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l", м: "m",
  н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts", ч: "ch", ш: "sh", щ: "shch",
  ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya" };
const GLYPH_EXC = { "е": "ye", "ы": "ih", "ь": "myagkiyznak", "ъ": "tverdyyznak" };
const translit = (front) => [...front.toLowerCase()].map((c) => (c === " " || c === "-" ? "" : (T[c] ?? `?${c}?`))).join("");

// normalizeMeaning is not exported from answer.js; this is its exact body.
const normText = (s) => String(s).normalize("NFKC").toLowerCase().replace(/[’']/g, "'").trim();
const normalizeMeaning = (s = "") =>
  normText(s).replace(/\(.*?\)/g, " ").replace(/\s+/g, " ").trim().replace(/^(?:a|an|the)\s+/, "").replace(/^to\s+/, "");

const syllables = (front) => [...front.toLowerCase()].filter((c) => "аеёиоуыэюя".includes(c)).length;

for (const it of mine) {
  const id = it.id;
  const want = GLYPH_EXC[it.front] && it.type === "glyph" ? GLYPH_EXC[it.front] : translit(it.front);
  if (it.reading !== want) add("translit", `${id} front "${it.front}" reading "${it.reading}" != table "${want}"`);
  if (!/^[a-z]+$/.test(it.reading)) add("charset", `${id} reading "${it.reading}"`);
  if (normalizeReading(it.reading, "ru") !== it.reading) add("normReading", `${id} "${it.reading}" -> "${normalizeReading(it.reading, "ru")}"`);
  const strings = [it.front, it.meaning, ...(it.accept ?? []), it.hint, it.example?.jp, it.drill?.jp].filter((s) => typeof s === "string");
  for (const s of strings)
    for (const w of s.split(/[^\p{L}]+/u))
      if (/[Ѐ-ӿ]/.test(w) && /[A-Za-z]/.test(w)) add("mixedScript", `${id}: "${w}"`);
  if (!normalizeMeaning(it.meaning ?? "")) add("emptyMeaning", `${id} meaning "${it.meaning}"`);
  for (const a of it.accept ?? []) if (!normalizeMeaning(a)) add("emptyAccept", `${id} accept "${a}"`);
  if (!checkMeaning(it.meaning, it)) add("checkMeaning", `${id} own gloss rejected`);
  for (const a of it.accept ?? []) if (!checkMeaning(a, it)) add("checkAccept", `${id} accept "${a}" rejected`);
  if (!checkReading(it.reading, it)) add("checkReading", `${id} own reading rejected`);
  if (checkProduce(it.meaning, it)) add("produceFreePass", `${id} meaning "${it.meaning}" IS the answer`);
  for (const a of it.accept ?? []) if (checkProduce(a, it)) add("produceFreePassAccept", `${id} accept "${a}" IS the answer`);
  if (checkMeaning(it.front, it)) add("meaningFreePass", `${id} front doubles as its own gloss`);
  const d = it.drill?.jp;
  if (!d) add("noDrill", id);
  else {
    const toks = d.trim().split(/\s+/).filter(Boolean);
    if (toks.length < 3 || toks.length > 8) add("drillTokens", `${id} ${toks.length}: "${d}"`);
    if (/[,;:!?…]|\.\s|[.!?]$/.test(d)) add("drillPunct", `${id} "${d}"`);
    if (!d.toLowerCase().includes(it.front.toLowerCase())) add("drillFront", `${id} "${d}" lacks "${it.front}"`);
    const ex = (it.example?.jp ?? "").replace(/[.!?…]+$/u, "").trim().toLowerCase();
    const dl = d.trim().toLowerCase();
    if (ex && dl === ex) add("drillEqualsExample", `${id} "${d}"`);
    else if (ex && (ex.startsWith(dl) || dl.startsWith(ex))) add("drillPrefixOfExample", `${id} drill "${d}" vs example "${it.example.jp}"`);
  }
  if (!canCloze(it)) add("noCloze", `${id} practice "${practice(it)?.jp}"`);
  if (!canSentence(it)) add("noSentence", `${id} practice "${practice(it)?.jp}"`);
  if (syllables(it.front) > 1 && !/[A-Z]{2,}/.test(it.hint ?? "")) add("noStressCaps", `${id} "${it.front}"`);
  if (/\(u\d+\)/.test(it.hint ?? "")) add("uNNcitation", `${id}`);
}

// --- corpus-wide over ALL 720 ru cards ---------------------------------------
function bucket(fn) {
  const m = new Map();
  for (const it of all) {
    const k = fn(it);
    if (k == null) continue;
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(it.id);
  }
  return m;
}
const report = (name, m) => { for (const [k, ids] of m) if (ids.length > 1) add(name, `${JSON.stringify(k)}: ${ids.join(", ")}`); };
report("dupFront", bucket((i) => i.front));
report("dupDrill", bucket((i) => i.drill?.jp?.trim().toLowerCase() ?? null));
report("dupExample", bucket((i) => i.example?.jp?.trim().toLowerCase() ?? null));
report("readingCollision", bucket((i) => `${i.type === "glyph" ? "glyph:" : "word:"}${i.reading}`));
report("glossCollision", bucket((i) => (i.meaning ? `m:${normalizeMeaning(i.meaning)}` : null)));
const fold = (s) => s.toLowerCase().replace(/ё/g, "е").replace(/й/g, "и");
report("foldCollision", bucket((i) => `f:${fold(i.front)}`));

const byLesson = new Map();
for (const it of all) {
  const lid = `ru-u${it.unit}l${it.lesson}`;
  if (!byLesson.has(lid)) byLesson.set(lid, []);
  byLesson.get(lid).push(it);
}
for (const [lid, items] of byLesson)
  for (let a = 0; a < items.length; a++)
    for (let b = a + 1; b < items.length; b++) {
      const va = new Set(meaningVariants(items[a]));
      const shared = meaningVariants(items[b]).filter((v) => va.has(v));
      if (shared.length) add("sameLessonSenseOverlap", `${lid}: ${items[a].id} / ${items[b].id} share ${JSON.stringify(shared)}`);
    }

const order = ["translit", "charset", "normReading", "mixedScript", "emptyMeaning", "emptyAccept", "checkMeaning", "checkAccept",
  "checkReading", "produceFreePass", "produceFreePassAccept", "meaningFreePass", "noDrill", "drillTokens", "drillPunct", "drillFront",
  "drillEqualsExample", "drillPrefixOfExample", "noCloze", "noSentence", "noStressCaps", "uNNcitation", "dupFront", "dupDrill",
  "dupExample", "readingCollision", "glossCollision", "foldCollision", "sameLessonSenseOverlap"];
console.log(`ru cards: ${all.length} total, ${mine.length} in u21-u30\n`);
let bad = 0;
for (const k of order) {
  const v = fails[k] ?? [];
  bad += v.length;
  console.log(`${v.length === 0 ? "OK  " : "FAIL"} ${k.padEnd(24)} ${v.length}`);
  for (const m of v.slice(0, 14)) console.log(`       ${m}`);
  if (v.length > 14) console.log(`       ... ${v.length - 14} more`);
}
console.log(`\nTOTAL findings: ${bad}`);
