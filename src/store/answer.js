// Answer checking + normalization — one tested place so the session runner and
// cards never reinvent it.

const MACRON = { "ō": "o", "ū": "u", "ā": "a", "ē": "e", "ī": "i" };

// Fold long-vowel length so macron and typed romaji forms converge:
// ohayō == ohayou == ohayoo, sayōnara == sayounara, sensei == sensē.
//
// This vowel-folding is a JAPANESE rōmaji concern and must NOT run for other
// languages — it would mangle legitimate vowel sequences (Spanish "leer"/"creer",
// French "voeen"). So it's gated by `lang`. The default is "ja", so any caller
// that omits lang (or passes an item with no lang stamped) keeps the original
// Japanese behavior; a Latin-script language (es/fr) just casefolds + trims.
export function normalizeReading(s = "", lang = "ja") {
  let out = String(s).trim().toLowerCase().replace(/\s+/g, "");
  if (lang === "ja") {
    out = out.replace(/[ōūāēī]/g, (c) => MACRON[c] || c);
    out = out
      .replace(/ou/g, "o")
      .replace(/oo/g, "o")
      .replace(/uu/g, "u")
      .replace(/ei/g, "e")
      .replace(/ee/g, "e")
      .replace(/aa/g, "a")
      .replace(/ii/g, "i");
  }
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
  return normalizeReading(input, item?.lang) === normalizeReading(item.reading, item?.lang);
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

// Detect a romaji (Latin-letter) answer — used on the PRODUCE card to nudge the
// learner to their Japanese keyboard (only where rōmaji isn't accepted).
export function looksRomaji(input) {
  return /[A-Za-z]/.test(String(input));
}

// Stages where the produce card is a beginner ON-RAMP: rōmaji is accepted so no
// Japanese keyboard is required. From A2 up, production means real Japanese script
// — rōmaji stops counting there (the reading card keeps that job).
const PRODUCE_ROMAJI_STAGES = new Set(["pre-a1", "a1"]);

// Whether this item's stage still accepts rōmaji on the produce card. A missing
// stage is treated as strict (kana only) — the safe default.
export function produceAllowsRomaji(item) {
  return PRODUCE_ROMAJI_STAGES.has(item?.stage);
}

// Producing the Japanese (the PRODUCE card, English→JP). Actual Japanese script
// always counts — the canonical front (kana, or kanji once the curriculum carries
// kanji-front words), or an optional `kana` spelling so a kanji word can be
// answered in kana before its kanji are learned. Through A1 the learner may ALSO
// answer in rōmaji (on-ramp — no Japanese keyboard needed); from A2 up rōmaji is
// rejected, so production means writing the real script.
export function checkProduce(input, item) {
  const raw = String(input).trim().replace(/[。、！？.!?\s]+$/u, "");
  if (!raw) return false;
  if (raw === item.front || (item.kana && raw === item.kana)) return true;
  if (produceAllowsRomaji(item) && looksRomaji(raw)) {
    return normalizeReading(raw, item?.lang) === normalizeReading(item.reading, item?.lang);
  }
  return false;
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
    const heardR = normalizeReading(t, item?.lang);
    const targetR = normalizeReading(item.reading, item?.lang);
    if (heardR === targetR) return "good";
    if (editDistance(heardR, targetR) <= 2) return "hard";
  }
  return "again";
}
