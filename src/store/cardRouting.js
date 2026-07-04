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
