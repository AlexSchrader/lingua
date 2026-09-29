// HINDI example/drill vocabulary scope — the check no gate runs.
//
// WHY THIS FILE EXISTS. `src/data/lint.js` gates example scope behind
// `isLatinLang()`, which needs >50% Latin fronts. Every Hindi front is
// Devanagari, so `exampleScopeWarnings` returns SILENTLY for hi: the rule RUNBOOK
// §4 calls "the one most likely to bite you in block 2 or 3" is unchecked for this
// language. Measured on the block-1 branch 2026-09-27: `npm run lint:curriculum`
// reports **zero** warnings against any hi item while flagging 6,319 elsewhere.
// Russian hit the identical hole and shipped 108 out-of-scope sentences before
// anyone noticed; `scripts/scope-ru.mjs` is this file's sibling and its model.
//
// HOW IT CHECKS. A token is in scope when it is, or derives from, a front taught
// at or before its unit. Hindi inflects at the edges rather than fusing, so
// derivation is generative and precise rather than a blind suffix-stripper:
//   -ना infinitive → -ता/-ती/-ते (habitual), -कर (conjunctive), -िए (polite
//                    imperative), -ो/-े/-ा/-ी, -ूँगा/-ेगा (future),
//                    -ने (OBLIQUE INFINITIVE — added by block 3, see below)
//   -आ noun/adj    → -ी (feminine), -े (plural and oblique), -ों (oblique plural)
//   -ी noun        → -ियाँ (plural), -ियों (oblique plural)
//   VOWEL-final    → -एँ (feminine plural: भाषा → भाषाएँ, ऋतु → ऋतुएँ)
//   CONSONANT-final→ -ें (feminine plural), -ों (oblique plural)
// IRREGULAR below carries what generation cannot reach (मैं → मुझे, नया → नई).
//
// ⚠️ THE CONSONANT-FINAL PLURAL WAS WRONG AND IS FIXED HERE (block 2, 2026-09-28).
// The rule read "any noun → -एँ", which is right only for a VOWEL-final noun: the
// independent letter एँ can only start a syllable. A consonant-final feminine noun
// takes the MĀTRĀ ें instead — किताब → किताबें, चीज़ → चीज़ें, रात → रातें — and the
// old rule generated the impossible string किताबएँ while flagging the real form as
// out of scope. Same hole for the OBLIQUE PLURAL -ों (घर → घरों, कमरा → कमरों,
// कुर्सी → कुर्सियों), which no rule generated at all, so every natural "in the
// rooms" / "of the shops" sentence flagged.
// ⚠️ THE OBLIQUE INFINITIVE -ने HAD NO RULE EITHER (block 3, 2026-09-28). Every
// natural Hindi sentence with a purpose, an attempt or a permission uses it —
// हिंदी बोलने की कोशिश, पढ़ने के लिए, जाने से पहले — and derive() generated
// -ता/-ती/-ते/-कर/-िए/-ो/-े/-ा/-ी/-ूँगा/-ेगा and stopped. It is the same class as
// the -ों block 2 added: a GENERATED form in the standard verb paradigm, not a
// lexical guess. MEASURED both ways on the merged corpus: the band count is
// **135 before and 135 after** and the A1 count stays 0 — so it overturns no
// existing verdict, and the only strings it licenses are st+"ने" for a front the
// course already teaches. Checked by hand that none of those is an independent
// word needing its own card: खाने/गाने/सोने are the oblique-or-plural of खाना,
// गाना and सोना, which are already fronts.
//
// This WIDENS the check, so each addition is held to one test: it must be a
// GENERATED INFLECTION of the taught front in the standard noun paradigm, never a
// lexical guess. -ें / -ों / -ियों are the plural-and-oblique paradigm, exactly the
// same class as the -े already present. Nothing derivational was added: गरम does
// not generate गरमी, दुकान does not generate दुकानदार, and those stay separate
// fronts that must be taught.
//
// THE SCRIPT BAND IS REPORTED SEPARATELY, AND THAT IS NOT LENIENCY. unit1.js §8
// makes u1–u6 sentence-exempt for a mechanical reason: a unit whose whole
// vocabulary is कम, मन, हम, अगर, अब, बस cannot produce a sentence out of six
// words, so the band's examples draw on the wider A1 vocabulary the way Russian's
// u1 does. They are read TO the learner. From u7 the ordinary rule applies in
// full, so THE A1 NUMBER IS THE ONE THAT MUST BE ZERO.
//
// ESCAPE HATCH. A unit file may declare words it deliberately uses without
// teaching them, with a line of the form
//     // FREE: का | के | की | करन
// A FREE word is in scope for that unit and every later one. Declaring one is a
// CLAIM: "a learner meets this word in a sentence and is never asked to produce
// it." Hindi's postpositions and pronoun obliques live there — they are closed-class
// grammar taught as a paradigm in u23, not vocabulary any unit teaches.
//
//   node scripts/scope-hi.mjs            every authored hi unit
//   node scripts/scope-hi.mjs 7,8,9,10   only those units
//   node scripts/scope-hi.mjs --a1       skip the u1–u6 script band entirely
import { readFileSync } from "node:fs";
import { HI_UNITS } from "../src/data/hi/index.js";

const BAND_MAX = 6; // u1–u6 is the pre-A1 script band (unit1.js §8)

// A stem "ends in a vowel" when its last codepoint is a vowel MĀTRĀ (खा, बुला, पी,
// सो, छू) or an independent vowel letter. Those stems build the perfective with an
// inserted य — खाया, बुलाई, सजाए — where a CONSONANT stem just adds ा/ी/े (देखा,
// पकड़ी, बाँटे). Getting this backwards is what left every -आना verb's past out of
// scope while देखा read as in scope. See unit31.js §A6.
const VOWEL_END = /[ा-ौऄ-औ]$/;

function derive(front) {
  const out = new Set([front]);
  if (front.endsWith("ना") && front.length > 2) {
    const st = front.slice(0, -2);
    // THE BARE STEM. The familiar imperative (बोल, देख) and the base of every
    // compound and of the ability construction unit32.js teaches — without it the
    // first token of "कर सकता हूँ" is out of scope. Generated, not lexical.
    out.add(st);
    for (const suf of ["ता", "ती", "ते", "कर", "िए", "े", "ो", "ा", "ी", "ीं", "ूँगा", "ेगा", "तें", "ने"]) out.add(st + suf);
    // The VOWEL-STEM PERFECTIVE, the same paradigm slot as the ा/ी/े above.
    if (VOWEL_END.test(st)) for (const suf of ["या", "ई", "ए", "ईं"]) out.add(st + suf);
  }
  if (front.endsWith("ा")) {
    out.add(front.slice(0, -1) + "ी");
    out.add(front.slice(0, -1) + "े");
    out.add(front.slice(0, -1) + "ों");
  }
  if (front.endsWith("ी")) {
    out.add(front.slice(0, -1) + "ियाँ");
    out.add(front.slice(0, -1) + "ियों");
  }
  // A consonant-final front ends in a bare consonant LETTER — no mātrā, no
  // anusvāra, no halant. Those take the mātrā plural ें and the oblique ों; a
  // vowel-final front takes the independent एँ. Getting this backwards is what
  // produced किताबएँ.
  // ⚠️ THE TRAILING NUKTA IS OPTIONAL AND MUST BE ALLOWED. In this corpus ज़ is
  // TWO codepoints — ज U+091C plus the combining nukta U+093C — not the precomposed
  // U+095B. Verified on चीज़ (091a 940 91c 93c). Without the ़? this test called
  // चीज़ vowel-final and flagged its real plural चीज़ें.
  if (/[क-हक़-य़]़?$/.test(front)) {
    out.add(front + "ें");
    out.add(front + "ों");
  } else {
    out.add(front + "एँ");
  }
  return out;
}

// What generation cannot reach: pronoun obliques and the handful of irregular
// adjectives. Each key is a taught front; its values belong to the same lexeme.
const IRREGULAR = {
  "नया": ["नई", "नए"],
  "मैं": ["मुझे", "मुझ", "मुझको"],
  "तुम": ["तुम्हें", "तुम्हारा", "तुम्हारी", "तुम्हारे"],
  "तू": ["तुझे", "तेरा", "तेरी", "तेरे"],
  "हम": ["हमें", "हमारा", "हमारे", "हमारी"],
  "आप": ["आपको"],
  "यह": ["ये"],
  "वह": ["वे"],
  // कैसे is block 1's front (u8l4) and it is the ADVERBIAL member of a four-form
  // adjective paradigm. derive() cannot reach the others from a -े front, so
  // "आपकी सेहत कैसी है" — the ordinary polite "how are you" — read as out of scope.
  // Same class as नया → नई: one lexeme, forms no suffix rule generates. (block 2)
  "कैसे": ["कैसा", "कैसी"],
  "दो": ["दोनों"],
  "तीन": ["तीनों"],
  "बूढ़ा": ["बूढ़े", "बूढ़ी"],
  // The six perfectives no rule reaches, plus छूना's, added by A2 block 1 with the
  // ने-ergative (unit31.js §A6). Same class as नया → नई: one lexeme, forms
  // generation cannot produce. A transitive-past unit is unwritable without them.
  "करना": ["किया", "की", "किए", "कीं"],
  "होना": ["हुआ", "हुई", "हुए", "हुईं"],
  "जाना": ["गया", "गई", "गए", "गईं"],
  "लेना": ["लिया", "ली", "लिए", "लीं"],
  "देना": ["दिया", "दी", "दिए", "दीं"],
  "पीना": ["पिया", "पी", "पिए", "पीं"],
  "छूना": ["छुआ", "छुई", "छुए", "छुईं"],
};

const items = [];
for (const u of HI_UNITS)
  for (const l of u.lessons ?? [])
    for (const it of l.items ?? []) items.push({ ...it, u: u.order, l: l.lesson });

// surface → earliest unit that licenses it
const born = new Map();
const remember = (w, unit) => {
  const prev = born.get(w);
  if (prev === undefined || unit < prev) born.set(w, unit);
};

// ⚠️ A WORD THAT IS ITSELF A TAUGHT FRONT IS LICENSED BY ITS OWN UNIT AND BY
// NOTHING EARLIER. Without this, one word's paradigm licenses a DIFFERENT word
// early, and the collisions are real, not hypothetical: कहना (u22) generates
// कहीं, which is its own front at u23l3, and नाना (u10) generates नाई, which is
// its own front at u28l3 — eighteen units early. derive() cannot tell a verb from
// a noun that happens to end in -ना, so the fix belongs here rather than in a
// lexical exception list. This TIGHTENS the check; measured on the merged corpus,
// the band count and the A1 count are both unchanged by it. (A2 block 1)
const explicitFronts = new Set(
  items.filter((it) => typeof it.front === "string").flatMap((it) => it.front.split(/\s+/).filter(Boolean))
);
for (const it of items) {
  if (typeof it.front !== "string") continue;
  remember(it.front, it.u); // a multi-word front is one token nowhere, but register it anyway
  for (const piece of it.front.split(/\s+/).filter(Boolean)) {
    remember(piece, it.u);
    for (const d of [...derive(piece), ...(IRREGULAR[piece] ?? [])]) {
      if (d !== piece && explicitFronts.has(d)) continue; // its own card governs it
      remember(d, it.u);
    }
  }
}

// FREE declarations, parsed out of the unit files.
for (const u of HI_UNITS) {
  let src = "";
  try {
    src = readFileSync(`src/data/hi/unit${u.order}.js`, "utf8");
  } catch {
    continue;
  }
  for (const m of src.matchAll(/^\/\/\s*FREE:\s*(.+)$/gm))
    for (const w of m[1].split("|").map((s) => s.trim()).filter(Boolean)) remember(w, u.order);
}

const tokenize = (s) => String(s ?? "").split(/[^\p{L}\p{M}-]+/u).filter(Boolean);
const args = process.argv.slice(2);
const a1Only = args.includes("--a1");
const list = args.find((a) => /^[\d,]+$/.test(a));
const only = list ? new Set(list.split(",").map(Number)) : null;

let checked = 0;
const hits = { band: [], a1: [] };
for (const it of items) {
  if (only && !only.has(it.u)) continue;
  if (a1Only && it.u <= BAND_MAX) continue;
  for (const [kind, text] of [["example", it.example?.jp], ["drill", it.drill?.jp]]) {
    if (!text) continue;
    checked += 1;
    const miss = [];
    for (const raw of tokenize(text)) {
      const at = born.get(raw);
      if (at !== undefined && at <= it.u) continue;
      miss.push(raw);
    }
    if (miss.length)
      (it.u <= BAND_MAX ? hits.band : hits.a1).push(
        `u${it.u}l${it.l} ${it.id} ${kind}: ${[...new Set(miss)].join(", ")}   « ${text}`
      );
  }
}

if (!a1Only) {
  console.log(`--- script band u1-u${BAND_MAX}: ${hits.band.length} sentence(s) using vocabulary the band has not taught`);
  console.log(`    (expected and allowed — see unit1.js §8; listed for review, not as failures)`);
  for (const h of hits.band) console.log("  " + h);
}
console.log(`\n=== A1 u${BAND_MAX + 1}+: ${hits.a1.length} out-of-scope sentence(s) — THIS NUMBER MUST BE ZERO`);
for (const h of hits.a1) console.log("  " + h);
console.log(`\n${checked} sentence(s) checked.`);
process.exitCode = hits.a1.length ? 1 : 0;
