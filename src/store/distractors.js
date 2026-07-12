// Build multiple-choice options: the correct answer plus plausible distractors
// drawn from other items of the SAME type (other meanings / other readings),
// preferring the same unit. Falls back gracefully on sparse types and never
// crashes — if there aren't enough distractors it simply returns fewer options
// (down to 2, or 1 in the degenerate case of a lone item).

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

  const sameType = list.filter(
    (it) => it && it.id !== item.id && it.type === item.type && it[field] != null
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

  const seen = new Set([norm(correctVal)]);
  const distractors = [];
  for (const it of pool) {
    const v = it[field];
    if (seen.has(norm(v))) continue;
    seen.add(norm(v));
    distractors.push(v);
    if (distractors.length >= count - 1) break;
  }

  return shuffle([
    { text: correctVal, correct: true },
    ...distractors.map((d) => ({ text: d, correct: false })),
  ]);
}
