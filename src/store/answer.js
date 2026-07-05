// Answer checking + normalization — one tested place so the session runner and
// cards never reinvent it.

const MACRON = { "ō": "o", "ū": "u", "ā": "a", "ē": "e", "ī": "i" };

// Fold long-vowel length so macron and typed romaji forms converge:
// ohayō == ohayou == ohayoo, sayōnara == sayounara, sensei == sensē.
export function normalizeReading(s = "") {
  let out = String(s).trim().toLowerCase().replace(/\s+/g, "");
  out = out.replace(/[ōūāēī]/g, (c) => MACRON[c] || c);
  out = out
    .replace(/ou/g, "o")
    .replace(/oo/g, "o")
    .replace(/uu/g, "u")
    .replace(/ei/g, "e")
    .replace(/ee/g, "e")
    .replace(/aa/g, "a")
    .replace(/ii/g, "i");
  return out;
}

// Meanings: lowercase, trim, collapse spaces, strip trailing punctuation.
export function normalizeText(s = "") {
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.!?。、！？]+$/u, "");
}

// A reading answer matches if the romaji folds equal, OR the raw kana (front)
// was typed. (Accept either kana or romaji.)
export function checkReading(input, item) {
  const raw = String(input).trim();
  if (raw && raw === item.front) return true;
  return normalizeReading(input) === normalizeReading(item.reading);
}

// A meaning answer matches the canonical meaning or any accepted synonym.
export function checkMeaning(input, item) {
  const a = normalizeText(input);
  if (!a) return false;
  const accepted = [item.meaning, ...(item.accept || [])]
    .filter(Boolean)
    .map(normalizeText);
  return accepted.includes(a);
}

// Detect a romaji (Latin-letter) answer — used to reject it on the PRODUCE card
// and nudge the learner to their Japanese keyboard instead of grading it wrong.
export function looksRomaji(input) {
  return /[A-Za-z]/.test(String(input));
}

// Producing the Japanese (the PRODUCE card, English→JP): the learner must type
// the actual Japanese on a Japanese keyboard — romaji is NOT accepted here
// (that's the reading card's job). Match the canonical front (kana today; kanji
// once the curriculum carries kanji-front words), or an optional `kana` spelling
// so a kanji word can still be answered in kana before its kanji are learned.
export function checkProduce(input, item) {
  const raw = String(input).trim().replace(/[。、！？.!?\s]+$/u, "");
  if (!raw || looksRomaji(raw)) return false;
  return raw === item.front || (item.kana && raw === item.kana);
}

// Character-level diff between what the learner typed and the answer, aligned by
// position, for softer "near-miss" feedback (a one-kana slip should read as
// "almost!" not a flat ✗). Returns each string as [{ ch, diff }] plus `close`
// (few differing positions → worth a warmer line). PRESENTATION ONLY — never
// touches grading; the miss still grades `again`.
export function charDiff(typed, answer) {
  const a = [...String(typed ?? "")];
  const b = [...String(answer ?? "")];
  const n = Math.max(a.length, b.length);
  const typedChars = [];
  const answerChars = [];
  let diffs = 0;
  for (let i = 0; i < n; i++) {
    const d = a[i] !== b[i];
    if (d) diffs += 1;
    if (i < a.length) typedChars.push({ ch: a[i], diff: d });
    if (i < b.length) answerChars.push({ ch: b[i], diff: d });
  }
  return { typed: typedChars, answer: answerChars, close: diffs > 0 && diffs <= 2 };
}
