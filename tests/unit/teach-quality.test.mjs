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

const ONE_SENTENCE_CEILING = { ru: 323, fr: 215, es: 211, de: 123, no: 106, ja: 20, hi: 0, id: 0, pt: 0 };
const THIN_ACCEPT_CEILING = { no: 460, de: 212, ru: 22, es: 0, fr: 0, hi: 0, id: 0, ja: 0, pt: 0 };
// THE DOCUMENTED STANDARD IS THREE, NOT TWO, and the table above was measuring the wrong
// bar. CONTENT.md says `accept[]` carries **at least 3**; this suite only ever checked
// `< 2`, so a language could read "0 thin-accept" here while hundreds of its cards sat at
// exactly two. Caught 2026-10-12 by the es seat, which noticed its brief's "369 thin"
// was the `< 2` figure while the stated target was 3 — the real job was **1,552 cards**.
// Measured the moment it was pointed out: hi and fr were the ONLY languages meeting the
// published standard, while pt (325) and id (552) had both been reported as finished.
// HINT COVERAGE, ratcheted at ZERO FOR EVERY LANGUAGE because that is where the retrofit
// left it — ~3,970 hints were written across ja (2,805) and fr (1,039) and the rest. It is
// the one rule in TEACH-BAR.md that had no check at all until now: coverage was perfect and
// nothing stopped it rotting. A hint is pronunciation plus one memory hook, and CLAUDE.md is
// explicit that this app is built for ND learners — a card with no hint gives them nothing.
const NO_HINT_CEILING = { ja: 0, fr: 0, es: 0, de: 0, no: 0, pt: 0, id: 0, ru: 0, hi: 0 };
const UNDER_THREE_CEILING = { no: 1844, de: 720, id: 552, pt: 325, ru: 238, ja: 1, es: 0, fr: 0, hi: 0 };

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
// CEILINGS LOWERED 2026-10-12, SEVENTH PAYDOWN. The 2026-10-09 baseline was
//   one-sentence  ja 3602  pt 1659  hi 656  id 577  ru 323  fr 215  es 211  de 123  no 106
//   thin-accept   hi 1432  ja 620  no 460  fr 434  es 369  de 212  pt 99  id 22  ru 22
//
// **FIVE LANGUAGES ARE FINISHED: pt, hi, fr, id and ja.**
//   pt  0 / 0 / 0      hi  0 / 0 / 0      id  0 / 0 / 0      fr  215 one-sentence / 0 / 0
//   ja  3602 -> 20 one-sentence, 620 -> 0 thin, 2805 -> 0 missing hints
//
// ja's 20 IS ITS FLOOR, NOT REMAINING DEBT, and two seats verified it item by item: a
// drill is FORBIDDEN on a `type: "kanji"` item (canCloze / canParticleCloze / canSentence
// all require type === "vocab"), and a ONE-CHARACTER vocab front can never cloze (canCloze
// needs >=2 chars) nor open a ja sentence. The u1-u37 seat left 12 such fronts, the
// u87-u143 seat 4 (だ た ね よ), each refusing to force a particle card that would quiz the
// wrong morpheme. **Do not drive ja to 0; 20 is the honest end state.**
//
// fr's 215 one-sentence was never in its brief — at 7% it matches es and trails only de
// (4%) and no (3%). It is a deliberate scope boundary, not an oversight.
//
// REMAINING against the <2 floor: no 460 · de 212 · ru 22. Against the DOCUMENTED bar of 3:
// no 1844 · de 720 · id 552 · pt 325 · ru 238 · ja 1. **es is now 0 on every axis it was
// given** — thin-accept 369 -> 0, under-three 1552 -> 0, missing hints 140 -> 0 — and its
// 211 one-sentence is the same deliberate boundary as fr's 215, not debt.
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

// The documented standard, ratcheted separately from the `< 2` floor. Two accepts is a
// card that can still be answered; three is what CONTENT.md promises an author will write.
for (const lang of allLangs) {
  const ceiling = ceilingOf(UNDER_THREE_CEILING, lang);
  test(`${lang}: cards with fewer than 3 accepts must not increase (ceiling ${ceiling})`, () => {
    const items = BY[lang] ?? [];
    const under = items.filter((i) => (i.accept ?? []).length < 3);
    assert.ok(
      under.length <= ceiling,
      `${lang}: ${under.length} cards have fewer than 3 accept[] entries (ceiling ${ceiling}). ` +
        `CONTENT.md requires at least 3 — checkMeaning grades against meaning + accept, and two ` +
        `is the floor at which a card is answerable rather than the standard. ` +
        `First few: ${under.slice(0, 5).map((i) => i.id).join(", ")}`,
    );
  });
}

// Hint coverage. Zero for every language, and a new language inherits 0 by default.
for (const lang of allLangs) {
  const ceiling = ceilingOf(NO_HINT_CEILING, lang);
  test(`${lang}: vocab cards with no hint must not increase (ceiling ${ceiling})`, () => {
    const items = BY[lang] ?? [];
    const bare = items.filter((i) => !String(i.hint ?? "").trim());
    assert.ok(
      bare.length <= ceiling,
      `${lang}: ${bare.length} vocab cards have no hint (ceiling ${ceiling}). ` +
        `TEACH-BAR.md requires one on every vocab card — pronunciation plus one memory hook. ` +
        `First few: ${bare.slice(0, 5).map((i) => i.id).join(", ")}`,
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
