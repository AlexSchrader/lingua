// Self-check for HINDI A2 block 2 (u41-u50). Modelled on selfcheck-ru-a2-block1.mjs,
// which it keeps the report shape of, and imports the REAL graders and the REAL router
// rather than approximating either.
//
//   node scripts/selfcheck-hi-a2-block2.mjs
//
// WHAT IS HINDI-SPECIFIC HERE, AND WHY EACH CHECK EXISTS
//
// 1. THE MARK-BOUNDARY TRAP — `matraTrap`. `findWholeWord` (src/store/cardRouting.js)
//    tests its boundaries with `\p{L}`, and every Devanagari MĀTRĀ, the anusvāra, the
//    halant and the NUKTA are `\p{M}`. So a front whole-word-matches inside a LONGER
//    orthographic word whenever the character on either side of it is a mark:
//        खुश   matches inside खुशी      (ी is \p{M})
//        दूर   matches inside दूरी
//        कान   matches inside कानून     (ू is \p{M})
//        ताज   matches inside ताज़ा     ← the NUKTA, one block 1 did not have
//        पल    matches inside चप्पल     ← the HALANT
//        स्तर  matches inside बिस्तर
//    `canCloze` then returns true and `blankExample` blanks the wrong span, leaving a
//    stranded mātrā. Block 1 found the mātrā half of this; this file widens the test
//    to `\p{M}` as a class, which covers nukta and halant too. Three pairs exist among
//    block 2's own fronts (डाक/डाकिया, कदम/मुकदमा, ताज/ताज़ा) and this is the check
//    that keeps them out of each other's sentences.
//
// 2. GLOSS COLLISIONS ARE CHECKED THROUGH `normalizeMeaning` AND ACROSS `accept[]`,
//    not just on `meaning`. `glossCollisionWarnings` in src/data/lint.js compares the
//    exact lowercased `meaning` only, so a parenthetical or an accept entry hides a
//    collision from lint while `checkMeaning` still accepts the same typed answer for
//    two different cards. unit1.js §9 is the rule; this is the measurement.
//    ⚠️ `meaningVariants` SPLITS ON "," ";" "/" AND THE WORD "or", so "to break, of a
//    thing" yields the variant "break" — a comma in a gloss is a collision waiting to
//    happen, which is why none of block 2's glosses contains one.
//
// 3. READINGS ARE COMPARED AS `glyph:` / `word:` KEYS, because unit1.js §2 lets a
//    glyph and a word share a string (क ka is a letter; कम kam is a word) but forbids
//    two glyphs or two words sharing one. 960 fronts held 960 distinct readings before
//    this block and the invariant is the one thing dictation depends on.
//
// 4. THE TRANSLITERATION TABLE IS NOT RE-DERIVED HERE. Hindi's reading is a
//    PRONUNCIATION, not a transcription (unit1.js §1: घर is ghar, not ghara), so a
//    front cannot be mechanically translated into its reading the way Russian's can.
//    What IS checked mechanically: the charset, that `normalizeReading` is a no-op,
//    that the reading is unique, and that `checkReading` accepts it.
import { seedItems } from "../src/data/index.js";
import { normalizeReading, checkMeaning, checkProduce, checkReading, meaningVariants } from "../src/store/answer.js";
import { canCloze, canSentence, practice } from "../src/store/cardRouting.js";

const all = Object.values(seedItems()).filter((i) => i.lang === "hi");
const mine = all.filter((i) => i.unit >= 41 && i.unit <= 50);
const fails = {};
const add = (k, msg) => ((fails[k] ??= []).push(msg));

// normalizeMeaning is not exported from answer.js; this is its exact body.
const normText = (s) => String(s).normalize("NFKC").toLowerCase().replace(/[’']/g, "'").trim();
const normalizeMeaning = (s = "") =>
  normText(s).replace(/\(.*?\)/g, " ").replace(/\s+/g, " ").trim().replace(/^(?:a|an|the)\s+/, "").replace(/^to\s+/, "");

// The router's own boundary test, plus the \p{M} widening described in the header.
const isLetter = (ch) => !!ch && /\p{L}/u.test(ch);
const isMark = (ch) => !!ch && /\p{M}/u.test(ch);
function routerFind(hay, needle) {
  const H = String(hay).toLowerCase();
  const N = String(needle).toLowerCase();
  if (!N) return -1;
  for (let from = 0; ; from = H.indexOf(N, from) + 1) {
    const i = H.indexOf(N, from);
    if (i < 0) return -1;
    if (!isLetter(hay[i - 1]) && !isLetter(hay[i + N.length])) return i;
  }
}
// Is the span the router picked actually a whole ORTHOGRAPHIC word, or is it sitting
// inside a longer one with a mark on the seam?
const markBounded = (hay, i, len) => isMark(hay[i - 1]) || isMark(hay[i + len]);

const GLYPH_FRONTS = new Set(all.filter((i) => i.type === "glyph").map((i) => i.front));

for (const it of mine) {
  const id = it.id;
  if (!/^[a-z]+$/.test(it.reading ?? "")) add("charset", `${id} reading "${it.reading}"`);
  if (normalizeReading(it.reading, "hi") !== it.reading)
    add("normReading", `${id} "${it.reading}" -> "${normalizeReading(it.reading, "hi")}"`);
  if (GLYPH_FRONTS.has(it.front)) add("glyphFrontClash", `${id} front "${it.front}" is already a u1-u6 glyph card`);

  const strings = [it.front, it.meaning, ...(it.accept ?? []), it.hint, it.example?.jp, it.drill?.jp].filter(
    (s) => typeof s === "string"
  );
  for (const s of strings)
    for (const w of s.split(/[^\p{L}\p{M}]+/u))
      if (/[ऀ-ॿ]/.test(w) && /[A-Za-z]/.test(w)) add("mixedScript", `${id}: "${w}"`);

  if (!normalizeMeaning(it.meaning ?? "")) add("emptyMeaning", `${id} meaning "${it.meaning}"`);
  for (const a of it.accept ?? []) if (!normalizeMeaning(a)) add("emptyAccept", `${id} accept "${a}"`);
  if (/^\s*\(.*\)\s*$/.test(it.meaning ?? "")) add("parenOnlyGloss", `${id} "${it.meaning}"`);
  if (/[,;]/.test(it.meaning ?? "")) add("glossComma", `${id} "${it.meaning}" — meaningVariants splits on it`);
  for (const a of it.accept ?? []) if (/[,;]/.test(a)) add("acceptComma", `${id} accept "${a}"`);
  if (!checkMeaning(it.meaning, it)) add("checkMeaning", `${id} own gloss rejected`);
  for (const a of it.accept ?? []) if (!checkMeaning(a, it)) add("checkAccept", `${id} accept "${a}" rejected`);
  if (!checkReading(it.reading, it)) add("checkReading", `${id} own reading rejected`);
  if (checkProduce(it.meaning, it)) add("produceFreePass", `${id} meaning "${it.meaning}" IS the answer`);
  for (const a of it.accept ?? [])
    if (checkProduce(a, it)) add("produceFreePassAccept", `${id} accept "${a}" IS the answer`);
  if (checkMeaning(it.front, it)) add("meaningFreePass", `${id} front doubles as its own gloss`);

  const d = it.drill?.jp;
  if (!d) add("noDrill", id);
  else {
    const toks = d.trim().split(/\s+/).filter(Boolean);
    if (toks.length < 3 || toks.length > 8) add("drillTokens", `${id} ${toks.length}: "${d}"`);
    if (/[,;:!?…।]|\.\s|[.!?]$/.test(d)) add("drillPunct", `${id} "${d}"`);
    const at = routerFind(d, it.front);
    if (at < 0) add("drillFront", `${id} "${d}" has no whole-word "${it.front}"`);
    else if (markBounded(d, at, it.front.length))
      add("matraTrap", `${id} "${it.front}" matched at ${at} INSIDE a longer word in "${d}"`);
    const occurrences = d.split(it.front).length - 1;
    if (occurrences > 1) add("drillFrontTwice", `${id} "${it.front}" appears ${occurrences}x in "${d}"`);
    const ex = (it.example?.jp ?? "").replace(/[।.!?…]+$/u, "").trim();
    const dl = d.trim();
    if (ex && dl === ex) add("drillEqualsExample", `${id} "${d}"`);
    else if (ex && (ex.startsWith(dl) || dl.startsWith(ex)))
      add("drillPrefixOfExample", `${id} drill "${d}" vs example "${it.example.jp}"`);
  }
  // The example is what the learner reads; it must also not hide the front inside a
  // longer word, because a later block may move a card's practice sentence.
  const exj = it.example?.jp;
  if (exj) {
    const at = routerFind(exj, it.front);
    if (at >= 0 && markBounded(exj, at, it.front.length))
      add("matraTrapExample", `${id} "${it.front}" sits inside a longer word in "${exj}"`);
  }
  if (!canCloze(it)) add("noCloze", `${id} practice "${practice(it)?.jp}"`);
  if (!canSentence(it)) add("noSentence", `${id} practice "${practice(it)?.jp}"`);
  if (!/[A-Z]{2,}/.test(it.hint ?? "")) add("noHintCaps", `${id} hint has no CAPS transliteration`);
  if (/\(u\d+\)/.test(it.hint ?? "")) add("uNNcitation", `${id} hint carries a (uNN) citation`);
  if (!it.example?.jp || !it.example?.en) add("noExample", id);
}

// --- corpus-wide over ALL hi cards -------------------------------------------
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
const report = (name, m) => {
  for (const [k, ids] of m) if (ids.length > 1) add(name, `${JSON.stringify(k)}: ${ids.join(", ")}`);
};
report("dupFront", bucket((i) => i.front));
report("dupDrill", bucket((i) => i.drill?.jp?.trim() ?? null));
report("dupExample", bucket((i) => i.example?.jp?.trim() ?? null));
report("readingCollision", bucket((i) => `${i.type === "glyph" ? "glyph:" : "word:"}${i.reading}`));
report("glossCollision", bucket((i) => (i.meaning ? `m:${normalizeMeaning(i.meaning)}` : null)));

// Every accept variant too, not only `meaning` — see header note 2.
const variantOwners = new Map();
for (const it of all)
  for (const v of meaningVariants(it)) {
    if (!variantOwners.has(v)) variantOwners.set(v, []);
    variantOwners.get(v).push(it.id);
  }
for (const [v, ids] of variantOwners)
  if (ids.length > 1 && ids.some((id) => mine.some((m) => m.id === id)))
    add("variantCollision", `${JSON.stringify(v)}: ${ids.join(", ")}`);

const byLesson = new Map();
for (const it of all) {
  const lid = `hi-u${it.unit}l${it.lesson}`;
  if (!byLesson.has(lid)) byLesson.set(lid, []);
  byLesson.get(lid).push(it);
}
for (const [lid, items] of byLesson)
  for (let a = 0; a < items.length; a++)
    for (let b = a + 1; b < items.length; b++) {
      const va = new Set(meaningVariants(items[a]));
      const shared = meaningVariants(items[b]).filter((v) => va.has(v));
      if (shared.length)
        add("sameLessonSenseOverlap", `${lid}: ${items[a].id} / ${items[b].id} share ${JSON.stringify(shared)}`);
    }

// Cross-corpus mark-boundary map: which of MY fronts whole-word-match inside a LONGER
// front anywhere in Hindi. Not a failure on its own — it is the list of words that must
// never share a sentence with that front.
// BOTH DIRECTIONS. A block-2 front can be the NEEDLE (डाक inside u28's डाकिया) or the
// HAYSTACK (u40's मीटर inside this block's किलोमीटर) — the first version of this check
// only did the needle direction and missed मीटर/किलोमीटर entirely.
// GLYPH fronts are excluded as needles: a letter card has no example and no drill, so it
// can never mis-blank. canCloze also requires a front of 2+ characters.
const fronts = [...new Set(all.filter((i) => i.type !== "glyph").map((i) => i.front))];
const mineFronts = new Set(mine.map((i) => i.front));
const trapNeedleMine = []; // MY front hides inside a longer word — MY sentences must avoid it
const trapHayMine = []; // an older front hides inside MY front — that older card's sentences must avoid MINE
for (const needle of fronts)
  for (const hay of fronts) {
    if (needle === hay || hay.length <= needle.length) continue;
    if (routerFind(hay, needle) < 0) continue;
    if (mineFronts.has(needle)) trapNeedleMine.push(`${needle} inside ${hay}`);
    else if (mineFronts.has(hay)) trapHayMine.push(`${needle} inside ${hay}`);
  }

const order = [
  "charset", "normReading", "glyphFrontClash", "mixedScript", "emptyMeaning", "emptyAccept", "parenOnlyGloss",
  "glossComma", "acceptComma", "checkMeaning", "checkAccept", "checkReading", "produceFreePass",
  "produceFreePassAccept", "meaningFreePass", "noExample", "noDrill", "drillTokens", "drillPunct", "drillFront",
  "drillFrontTwice", "matraTrap", "matraTrapExample", "drillEqualsExample", "drillPrefixOfExample", "noCloze",
  "noSentence", "noHintCaps", "uNNcitation", "dupFront", "dupDrill", "dupExample", "readingCollision",
  "glossCollision", "variantCollision", "sameLessonSenseOverlap",
];
console.log(`hi cards: ${all.length} total, ${mine.length} in u41-u50`);
console.log(`readings: ${new Set(all.map((i) => `${i.type}:${i.reading}`)).size} distinct of ${all.length}\n`);
let bad = 0;
for (const k of order) {
  const v = fails[k] ?? [];
  bad += v.length;
  console.log(`${v.length === 0 ? "OK  " : "FAIL"} ${k.padEnd(24)} ${v.length}`);
  for (const m of v.slice(0, 14)) console.log(`       ${m}`);
  if (v.length > 14) console.log(`       ... ${v.length - 14} more`);
}
console.log(`\nTOTAL findings: ${bad}`);
// INFORMATIONAL, not failures — `matraTrap` above is the failure test, and it already
// proves no block-2 sentence hides its own front. These two lists say which words must
// stay out of which sentences if a later block moves one.
const uNM = [...new Set(trapNeedleMine)];
const uHM = [...new Set(trapHayMine)];
console.log(`\nmark-boundary: ${uNM.length} pair(s) where a BLOCK-2 front hides inside a longer word`);
for (const p of uNM) console.log(`       ${p}`);
console.log(`mark-boundary: ${uHM.length} pair(s) where an OLDER front hides inside a block-2 front`);
console.log(`       (those cards' sentences predate this block and cannot contain these words)`);
for (const p of uHM.slice(0, 30)) console.log(`       ${p}`);
if (uHM.length > 30) console.log(`       ... ${uHM.length - 30} more`);
process.exitCode = bad ? 1 : 0;
