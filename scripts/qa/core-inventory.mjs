// DOES THE COURSE TEACH THE CORE OF THE LANGUAGE? A coverage matrix.
//
//   node scripts/qa/core-inventory.mjs           matrix + per-language gap list
//   node scripts/qa/core-inventory.mjs ru        one language, verbose
//
// METHOD, STATED SO IT CAN BE ARGUED WITH. The concept list below is a hand-built
// inventory of what any course claiming A1->B2 must contain: body, family, food
// staples, weather, greetings, the high-frequency verbs, question words, numbers,
// time, colour, place. It is JUDGEMENT, not a frequency corpus, and it is
// deliberately small and uncontroversial — every entry is a word a tourist needs
// in week one or a B1 learner cannot paraphrase around.
//
// The MEASUREMENT against the corpus is exact: a concept counts as taught when a
// vocab card's English gloss contains it as a whole word. That over-counts rather
// than under-counts (a gloss "to hand over" matches "hand"), so a reported gap is
// a strong claim and a reported hit is a weak one. Spot-check hits before trusting.
import { pathToFileURL } from "node:url";
import { join } from "node:path";
const { UNITS } = await import(pathToFileURL(join(process.cwd(), "src/data/index.js")).href);
const LANGS = ["ja", "fr", "es", "de", "no", "pt", "ru", "hi", "id"];

const CORE = {
  "greetings & social": ["hello", "goodbye", "please", "thank", "sorry", "yes", "no", "excuse"],
  "people & family": ["mother", "father", "child", "son", "daughter", "friend", "man", "woman", "person", "name"],
  "body": ["head", "hand", "foot", "eye", "mouth", "heart", "hair", "body", "blood", "skin"],
  "food & drink": ["water", "bread", "milk", "meat", "fish", "egg", "rice", "salt", "coffee", "tea", "eat", "drink"],
  "home & objects": ["house", "door", "window", "table", "chair", "bed", "key", "clothes", "shoe", "knife", "money"],
  "weather & nature": ["rain", "snow", "sun", "wind", "hot", "cold", "tree", "sky", "sea", "animal", "dog", "cat"],
  "time": ["day", "night", "week", "month", "year", "hour", "today", "tomorrow", "yesterday", "now", "morning", "time"],
  "core verbs": ["be", "have", "go", "come", "do", "say", "see", "know", "want", "can", "give", "take", "make", "think", "speak", "work", "live", "sleep", "buy", "walk", "read", "write", "open", "close", "wait", "help", "find", "put"],
  "question & function": ["who", "what", "where", "when", "why", "how", "which", "and", "but", "because", "if", "not", "very", "all", "some", "more", "with", "without", "here", "there"],
  "number & size": ["one", "two", "three", "ten", "hundred", "first", "many", "few", "big", "small", "long", "short", "new", "old", "good", "bad"],
  "colour": ["red", "blue", "green", "black", "white", "yellow", "colour"],
  "place & travel": ["city", "country", "street", "shop", "school", "work", "car", "train", "bus", "road", "left", "right", "near", "far"],
  "B1/B2 abstractions": ["government", "freedom", "society", "economy", "history", "science", "law", "war", "peace", "health", "education", "future", "reason", "problem", "change", "power", "right", "truth"],
};

const glossesFor = (L) => {
  const out = [];
  for (const u of UNITS.filter((x) => x.lang === L))
    for (const l of u.lessons ?? []) for (const it of l.items ?? [])
      if (it.type === "vocab") out.push({ g: String(it.meaning ?? "").toLowerCase(), front: it.front, u: u.order });
  return out;
};
const cache = new Map();
// MATCHING, AND WHY IT IS NOT A WORD-BOUNDARY TEST.
//
// The first version of this file matched /(^|[^a-z])word([^a-z]|$)/ and was wrong
// in both directions. It MISSED every inflected and compounded gloss — ja くつ
// "shoes", de regnet "it rains", hi रोटी "flatbread", es la infancia "childhood" —
// and reported four languages as lacking a concept they teach. A trailing-letters
// probe then over-corrected and matched "able" inside "vegetables", which is how
// Russian briefly looked like it taught "can" via стол "a table".
//
// So: a concept matches when it appears at a WORD START followed by any letters
// (shoe -> shoes, rain -> rains, child -> childhood), OR, for concepts of five
// characters or more only, anywhere as a substring (bread -> flatbread). The
// five-character floor is what keeps short concepts from matching inside unrelated
// words; it was measured, not guessed — at four it readmits able/vegetables.
const has = (L, w) => {
  if (!cache.has(L)) cache.set(L, glossesFor(L));
  const prefix = new RegExp(`(^|[^a-z])${w}[a-z]*`, "i");
  const list = cache.get(L);
  const hit = list.find((x) => prefix.test(x.g));
  if (hit) return hit;
  if (w.length >= 5) return list.find((x) => x.g.includes(w)) ?? null;
  return null;
};

const only = process.argv[2];
if (only) {
  console.log(`=== ${only} — core inventory, verbose\n`);
  for (const [cat, words] of Object.entries(CORE)) {
    const miss = words.filter((w) => !has(only, w));
    console.log(`${cat}: ${words.length - miss.length}/${words.length}${miss.length ? "   MISSING: " + miss.join(" · ") : ""}`);
  }
  process.exit(0);
}

const total = Object.values(CORE).flat().length;
console.log(`core inventory: ${total} concepts in ${Object.keys(CORE).length} categories\n`);
const pad = (s, n) => String(s).padEnd(n);
console.log(pad("category", 22) + LANGS.map((L) => pad(L, 6)).join(""));
const gaps = new Map(LANGS.map((L) => [L, []]));
for (const [cat, words] of Object.entries(CORE)) {
  let row = pad(cat, 22);
  for (const L of LANGS) {
    const miss = words.filter((w) => !has(L, w));
    gaps.get(L).push(...miss.map((w) => `${cat}:${w}`));
    row += pad(`${words.length - miss.length}/${words.length}`, 6);
  }
  console.log(row);
}
console.log("\n" + pad("TOTAL", 22) + LANGS.map((L) => pad(`${total - gaps.get(L).length}/${total}`, 6)).join(""));
console.log("\n=== MISSING CORE CONCEPTS, per language");
for (const L of LANGS) {
  const g = gaps.get(L);
  console.log(`\n${L} — ${g.length} of ${total} missing`);
  if (g.length) console.log("   " + g.map((x) => x.split(":")[1]).join(" · "));
}
