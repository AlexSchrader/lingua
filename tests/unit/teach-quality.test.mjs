// TWO TEACH-QUALITY RATCHETS. Neither property was checked anywhere before
// 2026-10-09, and both are per-language ceilings set to the value measured that
// day: nothing can get worse, and the numbers may only be LOWERED.
//
// Why a ratchet and not a plain assertion: both properties are violated by
// thousands of cards of already-shipped, already-voiced content, so a hard rule
// would leave the gate permanently red and useless. A ceiling blocks the
// regression today and turns the debt into a number somebody can pay down.
// Same pattern, and the same reasoning, as SINGLE_KIND_CEILING in card-variety.
//
// ───────────────────────────── 1. THE SECOND SENTENCE ─────────────────────────
// `practice = (item) => item?.drill ?? item?.example` (cardRouting.js:243), and
// BOTH `canCloze`/`blankExample` and `sentenceTokens` read `practice(item)`. The
// teach card shows `example`. So when a card has no `drill`, or its drill is its
// example (or a clause trimmed off it), the learner meets that word in exactly ONE
// sentence across the teach card, the cloze card and the sentence-build card. The
// extra exposures are re-reading, not transfer.
//
// MEASURED 2026-10-09 over 28,939 vocab cards: **7,472 (26%) are one-sentence.**
//   ja 88% (3,602 — 3,600 of them have NO drill at all)   pt 55% (1,659)
//   hi 20% (656)   id 19% (577)   ru 10% (323)   fr 7%   es 7%   de 4%   no 3%
//
// Nothing asked: `drill` is listed OPTIONAL in lint.js's field spec, contract.js
// validates only its SHAPE when present, and ship-gate.mjs checks the token bound
// and front-verbatim only for drills that already exist.
//
// ⚠️ ja AND pt ARE TWO DIFFERENT CAUSES OF ONE DEFECT. Japanese simply has no
// drills (12% coverage, and 3% in the pre-A1 band); Portuguese has one on every
// card and 55% of them repeat the example. Any fix has to name which it is.
//
// ───────────────────────────── 2. THIN accept[] ───────────────────────────────
// `checkMeaning` grades a typed answer against `meaning` plus every `accept`, so
// the accept list IS the margin for a learner who knows the word but picks another
// English synonym. A card with 0 or 1 accepts marks correct recall wrong.
//
// contract.js requires `accept` to be non-empty only when the meaning contains a
// space (contract.js:357). There is no minimum count anywhere, and the house
// standard every recent crew was briefed on — three accepts — is enforced by
// nothing.
//
// MEASURED 2026-10-09, cards with FEWER THAN 2 accepts:
//   hi 1,432 (45% of its vocab, mean 1.72 accepts)   ja 620   no 460   fr 434
//   es 369   de 212   pt 99   id 22   ru 22
// Hindi is the outlier and it is the harshest place to be thin: a learner working
// in Devanagari gets one accepted English answer per card in nearly half the course.
import { test } from "node:test";
import assert from "node:assert/strict";
import { UNITS } from "../../src/data/index.js";

const ONE_SENTENCE_CEILING = { ja: 3602, pt: 207, hi: 174, id: 577, ru: 323, fr: 215, es: 211, de: 123, no: 106 };
const THIN_ACCEPT_CEILING = { hi: 763, ja: 620, no: 460, fr: 434, es: 369, de: 212, pt: 0, id: 22, ru: 22 };

const flat = (x) => String(x ?? "").toLowerCase().replace(/[^\p{L}\s]/gu, "").replace(/\s+/g, " ").trim();

function vocabByLang() {
  const out = {};
  for (const u of UNITS) for (const l of u.lessons ?? []) for (const it of l.items ?? []) {
    if (it.type !== "vocab") continue;
    (out[u.lang] ??= []).push(it);
  }
  return out;
}
const BY = vocabByLang();

test("the corpus is loaded, so nothing below passes vacuously", () => {
  const n = Object.values(BY).reduce((a, v) => a + v.length, 0);
  assert.ok(n > 25000, `expected the real corpus, got ${n} vocab items`);
});

function oneSentence(items) {
  return items.filter((i) => {
    if (!i.example?.jp) return false;
    if (!i.drill?.jp) return true;
    const fd = flat(i.drill.jp), fe = flat(i.example.jp);
    return fd === fe || fe.startsWith(fd + " ") || fd.startsWith(fe + " ");
  });
}

// EVERY LANGUAGE IN THE CORPUS IS CHECKED, AND ONE WITHOUT AN ENTRY GETS A CEILING
// OF ZERO. That is the point: the nine shipped languages carry measured debt, but
// Italian, Dutch and English have 0 cards today, so they are held to the standard
// from their first card instead of earning a retrofit later. Japanese needed this
// and did not have it — it was authored first, before the standards existed, and
// graded D/D- four years later. A new language with no entry below cannot add a
// single drill-less or thin-accept card without this suite going red.
// CEILINGS LOWERED 2026-10-10 for pt and hi — first paydown. The 2026-10-09 baseline was
//   one-sentence  ja 3602  pt 1659  hi 656  id 577  ru 323  fr 215  es 211  de 123  no 106
//   thin-accept   hi 1432  ja 620  no 460  fr 434  es 369  de 212  pt 99  id 22  ru 22
// Two retrofit crews brought **pt 1659 -> 207 one-sentence and 99 -> 0 thin-accept**, and
// **hi 656 -> 174 and 1432 -> 763**. Portuguese is now at 7% one-sentence, level with fr/es
// and within reach of de (4%) and no (3%). Lowered rather than left high: a ceiling that is
// not tightened as the debt shrinks stops being a ratchet and becomes a licence to regress.
//
// ja IS DELIBERATELY UNCHANGED at 3602/620 even though its crews repaired ~200 cards,
// because that work is HELD, not shipped. Its drills regressed 88 items — see
// tests/unit/drill-corpus.test.mjs, which caught it: `practice()` prefers the drill, so a
// drill that fails sentenceTokens DELETES a sentence:build card the example had earned.
const allLangs = Object.keys(BY).sort();
const ceilingOf = (table, lang) => table[lang] ?? 0;

for (const lang of allLangs) {
  const ceiling = ceilingOf(ONE_SENTENCE_CEILING, lang);
  test(`${lang}: one-sentence cards must not increase (ceiling ${ceiling})`, () => {
    const items = BY[lang] ?? [];
    const bad = oneSentence(items);
    assert.ok(
      bad.length <= ceiling,
      `${lang}: ${bad.length} cards give the learner only one sentence (ceiling ${ceiling}). ` +
        `A card needs a drill that is NOT its example — cloze and sentence:build both read drill ?? example. ` +
        `First few: ${bad.slice(0, 5).map((i) => i.id).join(", ")}`,
    );
  });
}

for (const lang of allLangs) {
  const ceiling = ceilingOf(THIN_ACCEPT_CEILING, lang);
  test(`${lang}: cards with fewer than 2 accepts must not increase (ceiling ${ceiling})`, () => {
    const items = BY[lang] ?? [];
    const thin = items.filter((i) => (i.accept ?? []).length < 2);
    assert.ok(
      thin.length <= ceiling,
      `${lang}: ${thin.length} cards have fewer than 2 accept[] entries (ceiling ${ceiling}). ` +
        `checkMeaning grades against meaning + accept, so a thin list marks correct recall wrong. ` +
        `First few: ${thin.slice(0, 5).map((i) => i.id).join(", ")}`,
    );
  });
}

// A ceiling nobody can see is a ceiling nobody pays down, so print the table.
test("report the current debt", () => {
  const rows = allLangs
    .map((L) => {
      const v = BY[L] ?? [];
      return { L, voc: v.length, one: oneSentence(v).length, thin: v.filter((i) => (i.accept ?? []).length < 2).length };
    })
    .sort((a, b) => b.one / b.voc - a.one / a.voc);
  const lines = rows.map(
    (r) => `  ${r.L}  vocab ${String(r.voc).padStart(5)}  one-sentence ${String(r.one).padStart(5)} (${String(Math.round((r.one / r.voc) * 100)).padStart(2)}%)  thin-accept ${String(r.thin).padStart(5)}`,
  );
  console.log(`\nteach-quality debt, measured now:\n${lines.join("\n")}`);
  assert.ok(rows.length >= 9, `expected at least the nine live languages, got ${rows.length}`);
});
