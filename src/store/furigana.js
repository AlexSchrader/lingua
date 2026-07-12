// Pure furigana parsing — no React, no store, so it's unit-testable in isolation.
// The <Furigana> component (src/components/Furigana.jsx) renders what these return.

// A CJK-kanji run (incl. the iteration mark 々). Kana and latin are never rubied.
const KANJI = "[一-龯々]";
export const HAS_KANJI = new RegExp(KANJI);

// Inline authoring notation: a kanji run immediately followed by its reading in
// parens — 漢字(かんじ) — full-width or ASCII parens. Curriculum can annotate
// example.jp with it; unannotated strings just render plain (no regression).
const RUBY_RE = new RegExp(`(${KANJI}+)[（(]([^（）()]+)[）)]`, "g");

export function hasKanji(s) {
  return HAS_KANJI.test(s ?? "");
}

export function hasInlineFurigana(s) {
  RUBY_RE.lastIndex = 0;
  return RUBY_RE.test(s ?? "");
}

// Split a string into segments: plain runs and rubied runs. A rubied segment is
// { base, rt }; a plain segment is { base }. Concatenating every `base` reproduces
// the original text with the (readings) stripped — so rendering plain is lossless.
export function parseFurigana(s = "") {
  const out = [];
  let last = 0, m;
  RUBY_RE.lastIndex = 0;
  while ((m = RUBY_RE.exec(s))) {
    if (m.index > last) out.push({ base: s.slice(last, m.index) });
    out.push({ base: m[1], rt: m[2] });
    last = RUBY_RE.lastIndex;
  }
  if (last < s.length) out.push({ base: s.slice(last) });
  return out;
}
