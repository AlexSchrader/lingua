// DOES THE COURSE TEACH THE CORE OF THE LANGUAGE? A coverage matrix.
//
//   node scripts/qa/core-inventory.mjs           matrix + per-language gap list
//   node scripts/qa/core-inventory.mjs ru        one language, verbose
//
// ⚠️ THE LIST GREW FROM 178 TO 243 ON 2026-10-07, AND THE REASON MATTERS. Two B2
// crew leads independently found that NONE of north/south/east/west is taught in
// Hindi (u48 teaches दिशा, "direction", and not one of the four) and that only юг
// is taught in Russian. This probe reported Hindi at 162/178 and never saw it,
// because compass directions were not in the list. Auditing for what else was
// absent turned up 65 concepts, including BROTHER, SISTER, WIFE, HUSBAND, ARM,
// LEG, EAR, NOSE and TOOTH. An inventory that omits "brother" cannot answer "is
// the course missing common words", which is the question it exists for.
// If you find a gap this list does not contain, ADD IT HERE rather than reporting
// it once — that is the whole difference between a probe and an anecdote.
//
// ⚠️ KNOWN BLEED IN THE VERIFICATION STEP, not in this file. When you re-check a
// reported gap by hand with SYNONYMS, loose ones give a false clear: "born" matches
// *birthday* (fr l'anniversaire, de der Geburtstag, no en bursdag — none of which
// teaches "to be born"), and "fly" matches *flight* (fr le vol, es el vuelo — a
// noun, not the verb). A gap this file reports is a gap in the GLOSS; clearing it
// needs a word that teaches the concept, not one that contains the letters.
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
  "greetings & social": ["hello", "goodbye", "please", "thank", "sorry", "yes", "no", "excuse", "happy", "sad", "tired", "hungry", "thirsty", "sick", "ready"],
  "people & family": ["mother", "father", "child", "son", "daughter", "friend", "man", "woman", "person", "name", "brother", "sister", "wife", "husband"],
  "body": ["head", "hand", "foot", "eye", "mouth", "heart", "hair", "body", "blood", "skin", "arm", "leg", "ear", "nose", "tooth", "back"],
  "food & drink": ["water", "bread", "milk", "meat", "fish", "egg", "rice", "salt", "coffee", "tea", "eat", "drink"],
  "home & objects": ["house", "door", "window", "table", "chair", "bed", "key", "clothes", "shoe", "knife", "money"],
  "weather & nature": ["rain", "snow", "sun", "wind", "hot", "cold", "tree", "sky", "sea", "animal", "dog", "cat"],
  "time": ["day", "night", "week", "month", "year", "hour", "today", "tomorrow", "yesterday", "now", "morning", "time", "minute", "evening", "afternoon", "always", "never", "often", "sometimes"],
  "core verbs": ["be", "have", "go", "come", "do", "say", "see", "know", "want", "can", "give", "take", "make", "think", "speak", "work", "live", "sleep", "buy", "walk", "read", "write", "open", "close", "wait", "help", "find", "put", "listen", "hear", "run", "stand", "sit", "play", "learn", "teach", "start", "stop", "remember", "forget", "understand", "believe", "feel", "need", "try", "change", "break", "build", "carry", "send", "pay", "sell"],
  "question & function": ["who", "what", "where", "when", "why", "how", "which", "and", "but", "because", "if", "not", "very", "all", "some", "more", "with", "without", "here", "there"],
  "number & size": ["one", "two", "three", "four", "five", "ten", "twenty", "hundred", "thousand", "first", "many", "few", "big", "small", "long", "short", "tall", "heavy", "new", "old", "good", "bad", "easy", "difficult", "clean", "dirty", "young"],
  // ADDED 2026-10-07, THE THIRD EXPANSION. An Indonesian B1 seat found that
  // `terbang` ("to fly") is taught nowhere in 1,464 id cards although `pesawat`,
  // `burung` and `sayap` all are — and "fly" was not in this list, so the probe
  // reported id at 235/241 and never looked. Auditing for what else was absent
  // turned up fifty more everyday verbs. That is the third time a seat has found a
  // core concept this file lacked (compass directions, then brother/sister/arm/leg,
  // now the action verbs), which is itself the finding: THE LIST IS THE WEAK PART,
  // not the corpus. Add here, do not report once.
  "everyday actions": ["fly", "swim", "jump", "climb", "push", "pull", "throw", "catch", "cut", "wash", "cook", "burn", "grow", "die", "born", "kill", "win", "lose", "begin", "end", "wear", "laugh", "cry", "smile", "sing", "dance", "count", "measure", "weigh", "fill", "empty", "lift", "carry", "hide", "follow", "meet", "visit", "invite", "answer", "ask", "tell", "show", "explain", "promise", "decide", "choose", "agree", "refuse", "allow", "thank"],
  "colour": ["red", "blue", "green", "black", "white", "yellow", "colour"],
  "place & travel": ["city", "country", "street", "shop", "school", "work", "car", "train", "bus", "road", "left", "right", "near", "far", "north", "south", "east", "west"],
  "B1/B2 abstractions": ["government", "freedom", "society", "economy", "history", "science", "law", "war", "peace", "health", "education", "future", "reason", "problem", "change", "power", "right", "truth"],
};

const glossesFor = (L) => {
  const out = [];
  for (const u of UNITS.filter((x) => x.lang === L))
    for (const l of u.lessons ?? []) for (const it of l.items ?? [])
      if (it.type === "vocab")
        out.push({
          g: String(it.meaning ?? "").toLowerCase(),
          a: (it.accept ?? []).join(" | ").toLowerCase(),
          front: it.front,
          u: u.order,
        });
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
// TWO TIERS, because "no card's gloss names it" is not the same as "the course does
// not teach it". The gap-fill seat proved it on two of my twelve: fr la fille
// already carries accept:["the girl","daughter"] AND a hint saying so, and no
// ei historie accepts "history" with a hint naming both senses. The front is taken
// by the same lexeme in each case, so re-carding is impossible and accept+hint IS
// the remedy CLAUDE.md prescribes. Reporting those as gaps sends a seat to do
// nothing.
//   "gloss"  — a card's primary meaning names it. Fully taught.
//   "accept" — only accept[] or the hint names it. Covered, usually deliberately,
//              and usually because the front is a homograph of a taught word.
//   null     — nothing in the language mentions it. The real gap.
// A VERB CONCEPT NEEDS A VERB GLOSS, AND THIS DID NOT CHECK THAT.
//
// Measured 2026-10-08: with Indonesian B2 merged this file reported `id — 0 of 291
// missing`, while `terbang`, the verb "to fly", is taught NOWHERE in 3,025 id
// cards. Three cards satisfied it and not one teaches flying:
//   lalat@u85          meaning "a fly"                         — the INSECT
//   antariksawan@u116  meaning "a person trained for spaceflight"
//   memercik@u117      accept  "to fly up in drops"            — a splash
// The matcher looked for the stem anywhere in a gloss or accept, with no idea the
// concept was a verb. That is the same shape as every other defect found this
// week: the check ran, returned confidently, and never reached the question.
//
// It is also the THIRD time this file has been wrong about `terbang` specifically.
// First the word was absent from the list. Then it was added, and the header above
// records that — but adding it did not help, because the matcher then answered yes
// on the insect. A list entry is not a check.
//
// So for the two verb categories the gloss must BE a verb: `meaning` has to start
// with "to " AND contain the stem. "to be born" passes for `born`; "a fly" fails
// for `fly`; "to splash" fails for `fly`.
// AND VERBS DO NOT FALL BACK TO accept[]. `memercik`'s accept really does read
// "to fly up in drops", so the accept tier cannot separate flying from splashing
// here. A false MISSING costs a seat one lookup; a false COVERED cost us `terbang`
// three times over.
const VERB_CATS = new Set(["core verbs", "everyday actions"]);
const VERB_WORDS = new Set(Object.entries(CORE).filter(([c]) => VERB_CATS.has(c)).flatMap(([, w]) => w));

const has = (L, w) => {
  if (!cache.has(L)) cache.set(L, glossesFor(L));
  const prefix = new RegExp(`(^|[^a-z])${w}[a-z]*`, "i");
  const list = cache.get(L);
  const sub = (f) => w.length >= 5 && f.includes(w);
  if (VERB_WORDS.has(w)) {
    // A verbal gloss is a real hit. Anything else is reported as NOT-AS-VERB rather
    // than as either a pass or a gap, because both verdicts would be wrong often
    // enough to matter: `terima kasih` glossed "thank you" genuinely IS how
    // Indonesian thanks somebody, so calling "thank" a gap is false; `lalat`
    // glossed "a fly" is NOT how it flies, so calling "fly" covered is false. The
    // part of speech is the whole question and only a human can settle it, so the
    // tool separates the two buckets instead of guessing.
    const verbal = (g) => /^to\s/i.test(String(g).trim()) && prefix.test(g);
    const vhit = list.find((x) => verbal(x.g));
    if (vhit) return { ...vhit, tier: "gloss" };
    const loose = list.find((x) => prefix.test(x.g) || sub(x.g) || prefix.test(x.a) || sub(x.a));
    return loose ? { ...loose, tier: "NOT-AS-VERB" } : null;
  }
  let hit = list.find((x) => prefix.test(x.g) || sub(x.g));
  if (hit) return { ...hit, tier: "gloss" };
  // accept[] ONLY — NOT the hint. A hint mentions a word in passing all the time
  // and that is not teaching it: searching hints had Norwegian "covered" for coffee
  // via the hints of ei kake "cake" and en kopp "cup", Spanish for salt via
  // la ensalada and saltar "to jump", and Portuguese for animal via o peixe. The
  // two real accept[]-covered cases (fr la fille → daughter, no ei historie →
  // history) both carry it in accept[], which is what makes them answerable.
  hit = list.find((x) => prefix.test(x.a) || sub(x.a));
  if (hit) return { ...hit, tier: "accept" };
  return null;
};
const hard = (L, w) => has(L, w) === null;

const only = process.argv[2];
if (only) {
  console.log(`=== ${only} — core inventory, verbose\n`);
  for (const [cat, words] of Object.entries(CORE)) {
    const miss = words.filter((w) => hard(only, w));
    const notVerb = words.filter((w) => has(only, w)?.tier === "NOT-AS-VERB");
    console.log(
      `${cat}: ${words.length - miss.length}/${words.length}` +
        (miss.length ? "   MISSING: " + miss.join(" · ") : "") +
        (notVerb.length ? `   NOT-AS-VERB (check by hand): ${notVerb.map((w) => `${w}->${has(only, w).front}`).join(" · ")}` : ""),
    );
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
    const miss = words.filter((w) => hard(L, w));
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
