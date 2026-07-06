import { KANJIVG } from "../data/kanjivg.js";
import { AUDIO_IDS } from "../data/audioManifest.js";

// Share of eligible (rung ≤ 1, has-audio) reviews that present as a listening
// card instead of a plain choice — a tuning knob, not structure. Kept here so
// interleave feel is one number, next to the routing it drives.
export const LISTEN_SHARE = 0.5;

// True when the item has a pronunciation clip (per the generated manifest), so a
// listening card is never routed for a silent item.
export function hasAudio(item) {
  return !!item && AUDIO_IDS.has(item.id);
}

// Deterministic 0..1 from the item id — stable within a session and trivially
// testable (no Math.random, so the coverage fixture reliably hits listen:choice).
function hash01(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return (h % 1000) / 1000;
}

// Should this review present as a listening card? Only when it has audio AND
// falls in the interleaved share — otherwise the runner uses the plain choice.
export function shouldListen(item) {
  return hasAudio(item) && hash01(item.id) < LISTEN_SHARE;
}

// --- typed production (English → Japanese, Japanese → rōmaji) -----------------

export const PRODUCE_SHARE = 0.5; // share of rung-3 vocab that TYPE the word (else build)
export const READING_SHARE = 0.5; // share of rung-2 vocab that TYPE the rōmaji (else meaning)

// English → Japanese: at rung 3, sometimes type the word (rōmaji `neko` or kana
// ねこ both accepted) instead of assembling it from tiles. Vocab only — kana/kanji
// produce by tracing.
export function shouldTypeProduce(item) {
  return item?.type === "vocab" && hash01(item.id) < PRODUCE_SHARE;
}

// Japanese → rōmaji: at rung 2, sometimes type the reading instead of the meaning.
// Vocab only — a kana's meaning card is already "type the rōmaji".
export function shouldTypeReading(item) {
  return item?.type === "vocab" && hash01(item.id) < READING_SHARE;
}

// --- dictation (hear it → type the reading) ----------------------------------
// listen:type is the ear-path sibling of type:reading. To avoid cannibalizing
// the visual reading card (which takes the hash < READING_SHARE band), dictation
// takes a DISTINCT band just above it — so an item is at most one of the two.
export const LISTEN_TYPE_SHARE = 0.25;
export function shouldListenType(item) {
  const h = hash01(item?.id ?? "");
  return hasAudio(item) && h >= READING_SHARE && h < READING_SHARE + LISTEN_TYPE_SHARE;
}

// --- cloze (fill the word into its own sentence) -----------------------------
// Contextual recall at rung 2. Takes the TOP hash band [1 - CLOZE_SHARE, 1) so it
// never overlaps type:reading (< READING_SHARE) or dictation ([READING_SHARE,
// READING_SHARE + LISTEN_TYPE_SHARE)) — an item routes to at most one rung-2 variant.
export const CLOZE_SHARE = 0.25;

// The blank token dropped into the sentence in place of the target word.
export const CLOZE_BLANK = "＿＿";

// Cloze-eligible only when the target word can actually be located and blanked in
// its own example: a vocab word (≥2 chars, so a stray 1-kana match inside another
// word can't mis-blank) that appears verbatim in example.jp. Kanji/kana and
// conjugated examples where the dictionary front isn't a substring degrade safely
// to the plain card — same as a silent item never listening.
export function canCloze(item) {
  return (
    !!item &&
    item.type === "vocab" &&
    [...(item.front ?? "")].length >= 2 &&
    !!item.example?.jp &&
    item.example.jp.includes(item.front)
  );
}

// example.jp with the FIRST occurrence of the target word replaced by the blank.
// Pure string op — never touches state. Returns the sentence unchanged if the
// front isn't present (guarded by canCloze upstream).
export function blankExample(item) {
  const jp = item?.example?.jp ?? "";
  const front = item?.front ?? "";
  const i = front ? jp.indexOf(front) : -1;
  return i < 0 ? jp : jp.slice(0, i) + CLOZE_BLANK + jp.slice(i + front.length);
}

// Should this rung-2 review present as a cloze? Eligible AND in the top interleave
// band; else the runner uses another rung-2 card. Deterministic (no Math.random).
export function shouldCloze(item) {
  return canCloze(item) && hash01(item.id) >= 1 - CLOZE_SHARE;
}

// --- spoken production (say it aloud) ----------------------------------------
// The SPEAK card is vocab-only: STT on isolated single kana is unreliable (the
// Brief-C C.0 de-risk showed 0/3), and a kana's sound is already trained by the
// listen card. Multi-mora words transcribe well enough for a lenient grade.
export function shouldSpeak(item) {
  return item?.type === "vocab";
}

// A character is "traceable" when it's a single glyph that has KanjiVG stroke
// data: every base kana and every kanji. Yōon digraphs (きゃ, しゃ…) are two kana
// and carry no single stroke entry, so they fall back to a typed recall instead
// of an empty trace pad. Used by both the lesson and review runners so kana and
// kanji are written by hand wherever a character is practiced.
export function isTraceable(item) {
  return (
    (item.type === "kana" || item.type === "kanji") &&
    [...item.front].length === 1 &&
    !!KANJIVG[item.front]
  );
}
