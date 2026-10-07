// RU B2 BLOCK 3 (u124–u136) — the probe the unit headers cite, committed so the
// citation still resolves once the worktree is gone. Two modes:
//
//   node scripts/selfcheck-ru-b2-block3.mjs                  # the 7 checks, u124..u136
//   node scripts/selfcheck-ru-b2-block3.mjs 124 136          # the 7 checks, a range
//   node scripts/selfcheck-ru-b2-block3.mjs --probe <word>…  # is this front/reading free?
//
// WHY IT EXISTS, check by check. Each one caught a real defect in this block and
// none of them is run by `validate:content`, `lint:curriculum` or `test:unit`:
//
//  1. SHAPE — 4 lessons x 6 items. Nothing in the gate requires it.
//  2. READING UNIQUENESS. `contract.js` enforces FRONT uniqueness and not
//     reading uniqueness, but unit1.js §2 makes one-reading-per-front the basis
//     of the dictation and glyph cards. ru was 2,328 cards -> 2,327 distinct
//     readings before B2 (the one collision is `я` the u3 glyph beside `я` the
//     u3 pronoun, and it predates this band); that 1:1 must survive B2.
//     ⚠️ `scripts/qa/reading-taken.mjs` CANNOT CHECK THIS FOR RUSSIAN — it
//     imports HI_UNITS and is hardcoded to Hindi. Measured 2026-10-06.
//  3. FRONT UNIQUENESS, language-wide.
//  4. GLOSS COLLISIONS once the GRADER normalises. `glossCollisionWarnings` in
//     src/data/lint.js compares the exact lowercased string, so an article or a
//     parenthetical silences it while `normalizeMeaning` still accepts one typed
//     answer for two cards. It caught `каркас` "a frame" against `кадр` (u74)
//     and `балка` "a beam" against `сиять` (u80) in this block's first draft.
//  5. FREE PASSES — a gloss that normalises to the card's OWN reading, which is
//     unit1.js §9's `produceIsFreePass`. This is why `пилот` · `порт` · `астероид`
//     are glossed the long way round.
//  6. ROUTING, through `src/store/cardRouting.js` itself rather than by hand.
//     ⚠️ MEASURED, and it reverses what a hand-check suggests: `findFrontInExample`
//     uses `findWholeWord` for every NON-JAPANESE item, so a sentence-initial
//     capital is FINE (`Космос очень большой` clozes against front `космос`)
//     and an INFLECTED front is not. The brief's rule — the drill must carry the
//     bare citation form — is the real constraint; case is not.
//  7. Multi-word meaning with an empty accept[], which `validate:content` only
//     warns about.
//
// It is read-only and prints counts, so it can front a hand-back.
import { UNITS } from "../src/data/index.js";
import { normalizeReading } from "../src/store/answer.js";
import * as C from "../src/store/cardRouting.js";

const units = UNITS.filter((u) => u.lang === "ru").sort((a, b) => a.order - b.order);
const all = [];
for (const u of units) for (const l of u.lessons ?? []) for (const it of l.items ?? []) all.push({ ...it, unit: u.order, lesson: l.id });

// Transliteration per unit1.js §1, so a candidate's READING can be derived
// before the card exists. ь and ъ drop; there is no apostrophe.
const T = { а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts", ч: "ch", ш: "sh", щ: "shch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya" };
const tr = (w) => [...String(w).toLowerCase()].map((c) => (c in T ? T[c] : c === " " ? "" : c)).join("");

const argv = process.argv.slice(2);

if (argv[0] === "--probe") {
  const byFront = new Map(all.map((i) => [i.front.toLowerCase(), i]));
  const byReading = new Map();
  for (const i of all) { if (!i.reading) continue; (byReading.get(i.reading) ?? byReading.set(i.reading, []).get(i.reading)).push(i); }
  // A CONTROL front read out of the corpus itself: if it does not report TAKEN,
  // the probe is broken and every "free" below is worthless.
  const ctl = units.find((u) => u.order === 1).lessons.find((l) => l.items).items[0].front;
  console.log(`corpus: ${units.length} units · ${all.length} cards · ${byReading.size} distinct readings`);
  console.log(`control "${ctl}": ${byFront.has(ctl.toLowerCase()) ? "TAKEN (probe live)" : "!!! PROBE BROKEN"}`);
  for (const w of argv.slice(1)) {
    const lw = w.toLowerCase(), r = tr(w);
    const hit = byFront.get(lw);
    const rhit = (byReading.get(r) ?? []).filter((i) => i.front.toLowerCase() !== lw);
    // Cheap Cyrillic lexeme probe: a shared 5-character prefix. It OVER-reports
    // on purpose — `check-front.mjs`'s stemmer strips GERMAN suffixes and is
    // blind to Cyrillic morphology, so every LEXEME verdict for Russian is a
    // human judgement (unit1.js §D), and this only decides what to look at.
    const stem = lw.slice(0, 5);
    const lex = lw.length >= 5 ? all.filter((i) => i.front.toLowerCase() !== lw && i.front.toLowerCase().startsWith(stem)) : [];
    const parts = [];
    if (hit) parts.push(`FRONT TAKEN u${hit.unit} "${hit.meaning}"`);
    if (rhit.length) parts.push(`READING "${r}" TAKEN by ${rhit.map((i) => `${i.front} u${i.unit}`).join(", ")}`);
    if (lex.length) parts.push(`stem~ ${lex.map((i) => `${i.front} u${i.unit}`).join(", ")}`);
    console.log(`${parts.length ? "  ⚠ " : "  free "} ${w.padEnd(16)} [${r}] ${parts.join(" | ")}`);
  }
  process.exit(0);
}

const from = +(argv[0] ?? 124), to = +(argv[1] ?? 136);
const mine = all.filter((i) => i.unit >= from && i.unit <= to);
let fails = 0;
console.log(`ru: ${units.length} units · ${all.length} cards · range u${from}-u${to} = ${mine.length} cards`);

let shapeBad = 0;
for (const u of units.filter((u) => u.order >= from && u.order <= to)) {
  const per = (u.lessons ?? []).map((l) => (l.items ?? []).length);
  const n = per.reduce((a, b) => a + b, 0);
  if (!(n === 24 && per.length === 4 && per.every((p) => p === 6))) { shapeBad++; console.log(`  SHAPE u${u.order} "${u.title}" ${n} [${per}]`); }
}
console.log(`1. shape 4x6=24: ${shapeBad} unit(s) off`);
fails += shapeBad;

const byR = new Map();
for (const i of all) { if (!i.reading) continue; (byR.get(i.reading) ?? byR.set(i.reading, []).get(i.reading)).push(`${i.front}@u${i.unit}`); }
const dupR = [...byR.entries()].filter(([, v]) => v.length > 1);
console.log(`2. readings: ${all.length} cards -> ${byR.size} distinct; ${dupR.length} collision(s) (1 expected: я@u3 glyph + pronoun)`);
for (const [r, v] of dupR) console.log(`   DUP "${r}" ${v.join(" ")}`);
fails += Math.max(0, dupR.length - 1);

const byF = new Map();
for (const i of all) { const k = i.front.toLowerCase(); (byF.get(k) ?? byF.set(k, []).get(k)).push(`u${i.unit}`); }
const dupF = [...byF.entries()].filter(([, v]) => v.length > 1);
console.log(`3. fronts: ${byF.size} distinct; ${dupF.length} duplicate(s) (1 expected: я@u3)`);
for (const [f, v] of dupF) console.log(`   DUP ${f} ${v.join(" ")}`);
fails += Math.max(0, dupF.length - 1);

const nm = (s = "") => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/\(.*?\)/g, " ").replace(/\s+/g, " ").trim().replace(/^(?:a|an|the)\s+/, "").replace(/^to\s+/, "");
const gm = new Map();
for (const i of all) for (const g of [i.meaning, ...(i.accept ?? [])]) { const k = nm(g); if (!k) continue; (gm.get(k) ?? gm.set(k, []).get(k)).push(`${i.front}@u${i.unit}`); }
let gBad = 0;
for (const i of mine) for (const g of [i.meaning, ...(i.accept ?? [])]) {
  const others = (gm.get(nm(g)) ?? []).filter((x) => x !== `${i.front}@u${i.unit}`);
  if (others.length) { gBad++; console.log(`   GLOSS "${g}" -> "${nm(g)}"  ${i.front}@u${i.unit} vs ${others.join(" ")}`); }
}
console.log(`4. gloss collisions touching the range: ${gBad}`);
fails += gBad;

let fp = 0;
for (const i of mine) {
  const r = normalizeReading(i.reading, "ru");
  for (const g of [i.meaning, ...(i.accept ?? [])]) if (nm(g) === r) { fp++; console.log(`   FREEPASS ${i.front}@u${i.unit} reading="${r}" gloss="${g}"`); }
}
console.log(`5. free passes (a gloss that normalises to the card's own reading): ${fp}`);
fails += fp;

let rBad = 0;
for (const i of mine) {
  if (!i.drill) { rBad++; console.log(`   NODRILL ${i.front}@u${i.unit}`); continue; }
  if (!C.canCloze(i)) { rBad++; console.log(`   NOCLOZE ${i.front}@u${i.unit} « ${i.drill.jp}`); }
  if (!C.canSentence(i)) { rBad++; console.log(`   NOSENTENCE ${i.front}@u${i.unit} « ${i.drill.jp}`); }
}
console.log(`6. routing failures (no drill / cannot cloze / cannot sentence): ${rBad}`);
fails += rBad;

let noAcc = 0;
for (const i of mine) if (String(i.meaning).trim().includes(" ") && !(i.accept ?? []).length) { noAcc++; console.log(`   NOACCEPT ${i.front}@u${i.unit}`); }
console.log(`7. multi-word meanings with an empty accept[]: ${noAcc}`);
fails += noAcc;

// 8. STRAY SCRIPT. Authoring these files by hand leaked a CJK character into
// u127's `ствол` example and a Hangul syllable into u129's `плен` hint, and
// NOTHING in the gate noticed: `validate:content` checks shapes and
// `lint:curriculum` is gated on `isLatinLang()`, so it returns silently for
// Cyrillic. Any letter that is neither Cyrillic nor Latin in a ru field is a typo.
// \p{Script=Latin} rather than [A-Za-z], so a legitimate accented loan in a
// hint (détente at u130l4) is not a finding while CJK and Hangul still are.
const CYR = /\p{Script=Cyrillic}/u, LAT = /\p{Script=Latin}/u;
let stray = 0;
for (const i of mine) {
  const fields = [["front", i.front], ["reading", i.reading], ["meaning", i.meaning], ["hint", i.hint ?? ""],
    ["example.jp", i.example?.jp ?? ""], ["example.en", i.example?.en ?? ""],
    ["drill.jp", i.drill?.jp ?? ""], ["drill.en", i.drill?.en ?? ""],
    ...(i.accept ?? []).map((a, n) => [`accept[${n}]`, a])];
  for (const [field, val] of fields) {
    for (const ch of String(val)) {
      if (/\p{L}/u.test(ch) && !CYR.test(ch) && !LAT.test(ch)) {
        stray++;
        console.log(`   STRAY ${i.front}@u${i.unit} ${field}: U+${ch.codePointAt(0).toString(16).toUpperCase()}`);
        break;
      }
    }
  }
}
console.log(`8. stray non-Cyrillic non-Latin letters in a card field: ${stray}`);
fails += stray;

// 9. MIXED-SCRIPT WORD. Check 8 allows both scripts in a field, because a hint
// is written in English about Russian — so it cannot see a single WORD built
// from both. That is always a typo and it is invisible on screen: u132l4's hint
// had `плaster`, Cyrillic п-л plus Latin a-s-t-e-r, and it rendered perfectly.
let mixed = 0;
for (const i of mine) {
  for (const [field, val] of [["meaning", i.meaning], ["hint", i.hint ?? ""],
    ["example.jp", i.example?.jp ?? ""], ["example.en", i.example?.en ?? ""],
    ["drill.jp", i.drill?.jp ?? ""], ["drill.en", i.drill?.en ?? ""],
    ...(i.accept ?? []).map((a, n) => [`accept[${n}]`, a])]) {
    for (const w of String(val).split(/[^\p{L}]+/u)) {
      if (w.length > 1 && /\p{Script=Cyrillic}/u.test(w) && /\p{Script=Latin}/u.test(w)) {
        mixed++; console.log(`   MIXED ${i.front}@u${i.unit} ${field}: "${w}"`);
      }
    }
  }
}
console.log(`9. words built from both Cyrillic and Latin letters: ${mixed}`);
fails += mixed;

console.log(`\n${fails === 0 ? "PASS" : `FAIL — ${fails} finding(s)`}`);
process.exit(fails === 0 ? 0 : 1);
