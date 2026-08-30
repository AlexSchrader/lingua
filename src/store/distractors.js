// Build multiple-choice options: the correct answer plus plausible distractors
// drawn from other items of the SAME type (other meanings / other readings),
// preferring the same unit. Falls back gracefully on sparse types and never
// crashes — if there aren't enough distractors it simply returns fewer options
// (down to 2, or 1 in the degenerate case of a lone item).

import { itemLang } from "./itemLang.js";
import { normalizeText } from "./answer.js";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const norm = (s) => String(s ?? "").trim().toLowerCase();

// Visually-confusable kana groups — the exact look-alikes the kana units invest
// hints in disambiguating. Used to bias the recognition card's WRONG options
// toward these confusions (see buildOptions), so the card actually drills what
// the hints teach instead of picking generic peers. Mutually confusable within a
// group; the lookup below is symmetric.
const CONFUSABLE_GROUPS = [
  // hiragana
  ["あ", "お"], ["き", "さ"], ["は", "ほ", "ま"], ["ね", "れ", "わ"],
  ["る", "ろ"], ["い", "り"], ["ぬ", "め"], ["く", "へ"],
  // katakana
  ["シ", "ツ", "ソ", "ン"], ["ク", "ケ", "タ"], ["ロ", "コ", "ユ"],
  ["ヌ", "メ", "ス"], ["ウ", "ワ", "フ"], ["ア", "マ"], ["チ", "テ"],
  ["レ", "ル"], ["ノ", "ソ", "ン"], ["ナ", "メ"],
];

// glyph → Set of its look-alikes (excluding itself).
const CONFUSABLE = (() => {
  const m = new Map();
  for (const g of CONFUSABLE_GROUPS) {
    for (const ch of g) {
      const set = m.get(ch) ?? new Set();
      for (const other of g) if (other !== ch) set.add(other);
      m.set(ch, set);
    }
  }
  return m;
})();

// The look-alike glyphs for a kana front (empty set if none). Exported for tests.
export function confusableGlyphs(front) {
  return CONFUSABLE.get(front) ?? new Set();
}

// item: the item being tested. allItems: the store's items map (or array).
// Returns an array of { text, correct } of length 2..count (1 if truly alone).
export function buildOptions(item, allItems, count = 4, fieldOverride = null) {
  // Which field the options show: readings for kana, meanings for vocab — unless
  // overridden (a listening kana card offers glyphs, `front`, since the glyph is
  // the hidden answer). Distractors are drawn from the same field.
  const field = fieldOverride ?? (item.type === "kana" ? "reading" : "meaning");
  const correctVal = item[field];
  const list = Array.isArray(allItems) ? allItems : Object.values(allItems || {});

  // Same LANGUAGE only — with multiple live languages in the store, a French
  // card must never offer Japanese options (or vice versa). This is a GROUPING key,
  // not a language decision: items with no stamped lang (unit-test fixtures, pre-i18n
  // saves) group with each other under null rather than being filed as Japanese.
  const sameType = list.filter(
    (it) =>
      it &&
      it.id !== item.id &&
      it.type === item.type &&
      it[field] != null &&
      itemLang(it) === itemLang(item)
  );
  // Prefer same-unit distractors, then pad from other units.
  const sameUnit = sameType.filter((it) => it.unit === item.unit);
  const otherUnit = sameType.filter((it) => it.unit !== item.unit);
  let pool = [...shuffle(sameUnit), ...shuffle(otherUnit)];

  // Kana: front-load visually-confusable peers so the recognition card DRILLS the
  // シ/ツ, ソ/ン, ね/わ… look-alikes the hints teach, instead of generic peers.
  // (Front-loaded, then the loop fills any remaining slots from the normal pool.)
  if (item.type === "kana") {
    const conf = confusableGlyphs(item.front);
    if (conf.size) {
      const lookalikes = sameType.filter((it) => conf.has(it.front));
      pool = [...shuffle(lookalikes), ...pool];
    }
  }

  // NO OPTION MAY BE A CORRECT ANSWER EXCEPT THE CORRECT ONE.
  //
  // De-duplicating on the DISPLAYED field is not enough on the REVERSE card,
  // where the prompt is item.meaning and the options are fronts. A peer with a
  // different front whose own accept[] contains the prompt string passes the
  // display-level check and is offered as "wrong" — while being a right answer.
  // Grading is a plain identity flag that never consults accept[], so the learner
  // is marked wrong for knowing more. Measured, not theorised: 25 same-unit
  // French pairs, firing in 8-15% of builds (prompt "personality" offering
  // le caractère beside la personnalité).
  //
  // The test is deliberately NARROW: is the prompt, as displayed, one of the
  // senses this candidate claims? Comparing whole sense-sets instead would delete
  // the corpus's best distractors — un "a (masculine)" and une "a (feminine)"
  // share the sense "a", but the displayed parenthetical is exactly what makes
  // that card answerable, and the pair is the gender contrast French most needs
  // to drill. So the comparison PRESERVES parentheticals, where the grader's
  // normalizeMeaning() strips them. Same reason le/la and il est/elle est survive.
  const senseKey = (s) =>
    normalizeText(String(s ?? ""))
      .replace(/\s+/g, " ")
      .trim()
      .replace(/^(?:a|an|the)\s+/, "")
      .replace(/^to\s+/, "");
  // Senses a candidate claims: its gloss plus accept[], split the way the typed
  // grader splits them ("rice/meal" → rice, meal).
  const claimedSenses = (cand) => {
    const out = new Set();
    for (const gloss of [cand?.meaning, ...(cand?.accept || [])].filter(Boolean))
      for (const part of String(gloss).split(/\s*(?:[/,;]|\bor\b)\s*/)) {
        const k = senseKey(part);
        if (k) out.add(k);
      }
    return out;
  };
  // REVERSE / listening card (options are fronts, prompt is item.meaning): a
  // front is also-correct if the CANDIDATE item would be graded right for the
  // prompt meaning — its accept[] claims that sense.
  //
  // FORWARD card (options ARE the meanings, prompt is item.front): the front is
  // unique, but the OPTIONS are meanings, and a peer's displayed meaning can be a
  // sense THIS item already claims via its own accept[]. Grading is an identity
  // flag, so picking that peer is marked wrong — while the typed grader on the
  // very next card would accept it: the same "punished for knowing more" harm the
  // reverse card was fixed for. So on the forward card, drop any option whose
  // displayed sense the prompt item itself claims. Same parenthetical-preserving
  // senseKey both directions, so un "a (masculine)" / une "a (feminine)" and
  // le/la survive as distractors (their displayed senses differ).
  const promptIsMeaning = field !== "meaning";
  const promptSense = promptIsMeaning ? senseKey(item.meaning) : null;
  const itemSenses = promptIsMeaning ? null : claimedSenses(item);
  // Senses the DISPLAYED option value maps to, split the way the grader splits.
  const shownSenses = (cand) => {
    const out = new Set();
    for (const part of String(cand?.[field] ?? "").split(/\s*(?:[/,;]|\bor\b)\s*/)) {
      const k = senseKey(part);
      if (k) out.add(k);
    }
    return out;
  };
  const alsoCorrect = (cand) => {
    if (promptIsMeaning) return !!promptSense && claimedSenses(cand).has(promptSense);
    for (const s of shownSenses(cand)) if (itemSenses.has(s)) return true;
    return false;
  };

  const seen = new Set([norm(correctVal)]);
  const distractors = [];
  for (const it of pool) {
    const v = it[field];
    if (seen.has(norm(v))) continue;
    if (alsoCorrect(it)) continue;
    seen.add(norm(v));
    distractors.push(v);
    if (distractors.length >= count - 1) break;
  }

  return shuffle([
    { text: correctVal, correct: true },
    ...distractors.map((d) => ({ text: d, correct: false })),
  ]);
}
