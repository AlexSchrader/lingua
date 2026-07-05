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

// --- Spoken grading (SpeakCard) ---------------------------------------------
// STT hands back what it *heard*, in kana — but its script choice is arbitrary
// (かさ can come back カッサ; homophones can surface as kanji). Fold to a stable
// hiragana form before comparing: katakana→hiragana, drop long-vowel ー, small
// tsu っ, and punctuation/space. This is the same "recognizably the right sounds"
// bar the de-risk (Brief C, C.0) showed is the fair one for isolated words.
export function foldKana(s) {
  return String(s ?? "")
    .replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60)) // katakana → hiragana
    .replace(/[ー。、！？!?.\sっッ]/gu, "");
}

// Small edit distance (Levenshtein), capped use — for "one-sound slip" leniency.
function editDistance(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
    }
    prev = cur;
  }
  return prev[n];
}

// Grade a spoken attempt against the target word. LENIENT by design — speaking is
// bonus depth, never a punishing gate: a clean match → `good`; a small slip →
// `hard` (benefit of the doubt, holds the rung); otherwise → `again`. Pure +
// deterministic so it unit-tests with no mic/network.
//
// STT is inconsistent about the SCRIPT it returns for a single word: sometimes
// Japanese (おはよう / カッサ), sometimes romaji, sometimes an English homophone
// (おはよう → "Ohio"). So we grade on BOTH forms and take the better result — a
// correctly-said word must not fail just because Scribe spelled it in English.
export function gradeSpoken(transcript, item) {
  const t = String(transcript ?? "").trim();
  if (!t) return "again";

  // Kana path: Japanese-script transcript vs the folded kana front.
  const targetKana = foldKana(item?.kana ?? item?.front ?? "");
  if (targetKana) {
    const heardKana = foldKana(t);
    if (heardKana === targetKana) return "good";
    if (editDistance(heardKana, targetKana) <= 1) return "hard";
  }
  // Romaji path: Latin-letter transcript (romaji or English homophone) vs the
  // romanized reading. Lossier, so allow a slightly larger slip before it fails.
  if (looksRomaji(t) && item?.reading) {
    const heardR = normalizeReading(t);
    const targetR = normalizeReading(item.reading);
    if (heardR === targetR) return "good";
    if (editDistance(heardR, targetR) <= 2) return "hard";
  }
  return "again";
}
