import { KANJIVG } from "../data/kanjivg.js";
import { AUDIO_IDS } from "../data/audioManifest.js";
import { conjugate } from "./conjugate.js";

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

// Reverse recognition (choice:reverse): show the ENGLISH meaning, pick the correct
// Japanese glyph from four. Same recognition rung as `choice`, mirrored direction —
// recall toward production with far less friction than typing. Vocab-only (kana have
// no English gloss). A salted, independent hash band so it interleaves a share of
// the non-listen recognition reviews; checked AFTER shouldListen (ear path wins).
export const REVERSE_SHARE = 0.4;
export function shouldReverseChoice(item) {
  return item?.type === "vocab" && !!item.meaning && hash01(item.id + ":rev") < REVERSE_SHARE;
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
//
// JAPANESE ONLY, and that's the whole point of the card: it tests transliterating
// a script you can't sound out from its shape (おはよう → ohayō). A Latin-script
// language has no separate reading — the reading IS the spelling (fr front
// "bonjour" / reading "bonjour"), so the card degenerates into copying the prompt
// straight off the screen: all 86 French items that used to route here graded
// correct by typing back exactly what was displayed. They now fall through to
// type:meaning, which actually tests recall.
export function shouldTypeReading(item) {
  return item?.type === "vocab" && (item.lang ?? "ja") === "ja" && hash01(item.id) < READING_SHARE;
}

// --- dictation (hear it → type the reading) ----------------------------------
// listen:type is the ear-path sibling of type:reading. To avoid cannibalizing
// the visual reading card (which takes the hash < READING_SHARE band), dictation
// takes a DISTINCT band just above it — so an item is at most one of the two.
//
// THE BANDS WERE CALIBRATED FOR THE JAPANESE CARD SET, and that is the bug this
// ceiling fixes (2026-08-30). One unsalted hash01(id) is carved into bands:
//     < 0.50        listen:choice · type:produce · type:reading
//     [0.50, 0.75)  listen:type
//     >= 0.75       cloze · sentence:build · particle:choice
// The top quartile is fine in Japanese because trace, build and conjugate stand
// behind it. **Latin script has none of those** — and type:reading is ja-only by
// design (a Spanish front and its reading differ only by accents, so the card would
// display its own answer). So for fr/es the top quartile has NO card of its own: a
// quarter of every Latin corpus falls through to the generic meaning card, and the
// three cards that could have claimed it are all content-dependent. Measured on this
// branch: 219 of 3,123 es items and 172 of 3,111 fr sit there, versus 12 of 5,012 ja.
//
// So the ceiling is PER LANGUAGE: the shares have to add to 1.0 for the card set the
// language actually has, not for Japanese's. Latin dictation runs to the top of the
// range. This is additive, not a reshuffle — at rung 2 particle and cloze are both
// tested BEFORE dictation, so every item that already earns a content card keeps it,
// and nothing below READING_SHARE moves at all. What changes is only the item that
// was falling through to type:meaning, which is the definition of the uncovered band.
export const LISTEN_TYPE_SHARE = 0.25;
export function shouldListenType(item) {
  if (!hasAudio(item)) return false;
  const h = hash01(item?.id ?? "");
  const ceiling = isLatin(item) ? 1 : READING_SHARE + LISTEN_TYPE_SHARE;
  return h >= READING_SHARE && h < ceiling;
}

// --- language shape ----------------------------------------------------------
// Japanese is written WITHOUT spaces, so every token guard below has to anchor on
// a known word and stay conservative. Latin-script languages (fr/es) are
// space-delimited and capitalize at sentence start, which changes two things:
// a plain `includes(front)` misses "Bonjour" for front "bonjour", and tokenizing
// is trivially reliable (split on spaces) instead of needing a tokenizer. So the
// guards branch on script shape rather than leaving these cards dark for every
// non-Japanese language. Missing `lang` → "ja" (pre-i18n fixtures/saves).
const isLatin = (item) => (item?.lang ?? "ja") !== "ja";
const isLetter = (ch) => !!ch && /\p{L}/u.test(ch);

// Is this item's `reading` worth SHOWING the learner?
//
// The field does double duty. For a script the learner can't decode yet it's a
// pronunciation crutch ("neko" under ねこ). For a Latin-script language it's the
// ASCII key typed answers are graded against — fr authors `s'il vous plaît` with
// reading `silvousplait` so the checker can fold what the learner types. Showing
// the second kind presents a typing key as if it were pronunciation: French was
// rendering "silvousplait" under "s'il vous plaît", and "cava" under "Ça va".
//
// Settings already gets this right one level up — it hides the Show-romaji toggle
// for a learner with no glyph items (Settings.jsx `hasGlyphScript`), which is
// exactly why this stayed invisible: a French learner can't reach the switch, so
// the `showRomaji: true` default just leaks. This is the same rule applied per
// ITEM rather than per profile, so it stays correct for someone studying a glyph
// language and a Latin one at the same time.
//
// Keyed on the front's SCRIPT, not a lang allowlist, so Hangul / Cyrillic /
// Devanagari show their reading the day they ship with no edit here.
const LATIN_FRONT = /^[\p{Script=Latin}\p{M}\p{P}\p{S}\p{Zs}\p{N}]+$/u;
export function readingIsInformative(item) {
  const front = item?.front ?? "";
  return !!front && !LATIN_FRONT.test(front);
}

// Locate `needle` in `hay` as a WHOLE WORD, case-insensitively — the Latin-script
// counterpart of ja's plain indexOf. Case folding is what lets a front match its
// own sentence-initial form; the letter-boundary check is what stops "un" from
// matching inside "aujourd'hui". Returns { index, length } or null.
function findWholeWord(hay, needle) {
  const H = hay.toLowerCase();
  const N = needle.toLowerCase();
  if (!N) return null;
  for (let from = 0; ; from = H.indexOf(N, from) + 1) {
    const i = H.indexOf(N, from);
    if (i < 0) return null;
    if (!isLetter(hay[i - 1]) && !isLetter(hay[i + N.length]))
      return { index: i, length: needle.length };
  }
}

// Where the item's own front sits inside its example — the anchor every in-context
// card is built on. ja: exact substring. Latin: whole-word, case-insensitive.
export function findFrontInExample(item) {
  const jp = item?.example?.jp ?? "";
  const front = item?.front ?? "";
  if (!jp || !front) return null;
  if (!isLatin(item)) {
    const i = jp.indexOf(front);
    return i < 0 ? null : { index: i, length: front.length };
  }
  return findWholeWord(jp, front);
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
    !!findFrontInExample(item)
  );
}

// example.jp with the FIRST occurrence of the target word replaced by the blank.
// Pure string op — never touches state. Returns the sentence unchanged if the
// front isn't present (guarded by canCloze upstream).
export function blankExample(item) {
  const jp = item?.example?.jp ?? "";
  const found = findFrontInExample(item);
  return !found ? jp : jp.slice(0, found.index) + CLOZE_BLANK + jp.slice(found.index + found.length);
}

// Should this rung-2 review present as a cloze? Eligible AND in the top interleave
// band; else the runner uses another rung-2 card. Deterministic (no Math.random).
export function shouldCloze(item) {
  return canCloze(item) && hash01(item.id) >= 1 - CLOZE_SHARE;
}

// --- particle cloze (fill the missing particle) ------------------------------
// The sibling of word-cloze that blanks the PARTICLE instead of the word — the
// single biggest grammar pain point (は/が/を/に/で…). Shares the cloze band.

// Core single-char particles we blank + offer as options.
const CORE_PARTICLES = ["は", "が", "を", "に", "へ", "で", "と", "も", "の"];

// The Latin-script counterpart: the little grammar words a learner actually gets
// wrong — articles (gender/number) and prepositions. Same drill, same rationale
// as ja particles, and well-posed for the SAME reason: the card shows example.en,
// so the gloss fixes which one is meant ("a coffee WITHOUT milk" → sans, not avec;
// "there's A restaurant" → un, not le). Kept to words the curriculum teaches.
// PREPOSITIONS ONLY — articles are deliberately excluded, and that's a
// correctness fix, not a simplification. The card blanks the word AFTER the item
// and grades the ITEM. A preposition there is governed by the item ("je vais À
// Paris", "il vient DE Paris") — drilling it is exactly right. An ARTICLE there
// belongs to the FOLLOWING NOUN, so "je mange ＿ croissant" made whether the verb
// advances depend on knowing croissant's gender — mis-attributed SRS credit across
// 15 items. Articles were also the whole source of the gloss-ambiguity problem:
// "je travaille ＿ matin" / "I work in the morning" wants `le`, while the English
// "in" points straight at the `à`/`au` options. Gender and article choice deserve
// their own card, not this one.
//
// COORDINATING CONJUNCTIONS are excluded for the same reason, one step further in.
// `et` / `y` ("and") join two things and are governed by NEITHER of them, so they
// fail the "is it owned by the item?" test exactly as articles did: "Le métro est
// bleu ＿＿ blanc" graded the adjective `bleu` on picking "and" out of a list of
// prepositions — no fact about bleu is tested, and the gloss gives it away. That hit
// 4 items (fr-u7l3-lejour, fr-u8l1-bleu, fr-u13l1-ilneige, fr-u13l3-sec), which now
// fall through to a card that tests something. The invariant for this set is simple
// and worth keeping: every member must be a preposition GOVERNED by the word before
// the blank. `tests/unit/fr-cards.test.mjs` locks it against the real corpus.
const FUNCTION_WORDS = {
  fr: ["de", "à", "au", "avec", "sans", "pour", "dans", "sur", "en"],
  es: ["de", "a", "con", "sin", "en", "para", "por"],
};

// The closed option-set for this item's language (ja → particles).
function particleSetFor(item) {
  return isLatin(item) ? FUNCTION_WORDS[item?.lang] ?? [] : CORE_PARTICLES;
}

// True when this item's language uses the word-level function-word drill rather
// than ja's single-character particles. Drives the card's prompt copy.
export function usesFunctionWords(item) {
  return isLatin(item) && (FUNCTION_WORDS[item?.lang]?.length ?? 0) > 0;
}

function shuffleParticles(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// The particle immediately AFTER the target word in its example. Anchoring to the
// known word boundary (front is guaranteed present) is what makes this safe — it
// can't mis-blank a particle-looking kana inside a word (は in はな). Excludes the
// copula です/でした (its で is not the particle で).
export function particleAfterFront(item) {
  const jp = item?.example?.jp ?? "";
  const found = findFrontInExample(item);
  if (!found) return null;
  const i = found.index + found.length;

  // Latin script: the next whitespace-delimited WORD, if it's in the closed set.
  // Anchoring on the known front is what keeps this safe — we never guess where a
  // word starts, so "de" can't be blanked out of the middle of "demain".
  if (isLatin(item)) {
    const m = jp.slice(i).match(/^\s+([^\s]+)/);
    if (!m) return null;
    const word = m[1].replace(/[.,!?;:…]+$/u, ""); // trailing punctuation isn't part of it
    if (!word) return null;
    const set = particleSetFor(item);
    if (!set.includes(word.toLowerCase())) return null;
    if (word.toLowerCase() === String(item.front).toLowerCase()) return null; // never blank the answer itself
    return { particle: word, index: i + m[0].length - m[1].length };
  }

  const ch = jp[i];
  if (!CORE_PARTICLES.includes(ch)) return null;
  if (ch === "で" && /^で[すし]/.test(jp.slice(i))) return null; // copula です/でした, not particle で
  return { particle: ch, index: i };
}

export function canParticleCloze(item) {
  return item?.type === "vocab" && !!particleAfterFront(item);
}

// example.jp with the anchored particle replaced by the blank.
export function blankParticle(item) {
  const jp = item?.example?.jp ?? "";
  const found = particleAfterFront(item);
  if (!found) return jp;
  return jp.slice(0, found.index) + CLOZE_BLANK + jp.slice(found.index + found.particle.length);
}

// Options for the particle card: the correct particle + distractor particles.
export function particleChoices(item, count = 4) {
  const found = particleAfterFront(item);
  if (!found) return [];
  // Distractors come from THIS item's language set — never ja particles on a
  // French card. Compared case-insensitively so a sentence-initial "Le" doesn't
  // also show up as the lowercase distractor "le".
  const correct = found.particle;
  const others = shuffleParticles(
    particleSetFor(item).filter((p) => p.toLowerCase() !== correct.toLowerCase())
  ).slice(0, Math.max(1, count - 1));
  return shuffleParticles([{ text: correct, correct: true }, ...others.map((p) => ({ text: p, correct: false }))]);
}

// Shares the cloze band, checked BEFORE word-cloze so a sentence with a clear
// particle drills the particle; otherwise it word-clozes. Deterministic.
export function shouldParticleCloze(item) {
  return canParticleCloze(item) && hash01(item.id) >= 1 - CLOZE_SHARE;
}

// --- sentence builder (reassemble the example from tiles) --------------------
// A production card: rebuild the item's example sentence from word+particle tiles,
// with a distractor particle so it tests particle CHOICE, not just order. Tokenized
// SAFELY as [word][particle][rest] — the example must START with the target word,
// followed by a clean particle (です-guarded via particleAfterFront), then a
// remainder. That anchors on the known word so we never need a Japanese tokenizer
// and never mis-split a word. Covers the [N は/が/を … V] beginner sentence shape;
// a granular multi-clause tokenizer is a future upgrade.
export const SENTENCE_SHARE = 0.25;

export function sentenceTokens(item) {
  const jp = String(item?.example?.jp ?? "").replace(/\s*[。！？.!?]+\s*$/u, "");
  const front = item?.front ?? "";
  if (!front || !jp) return null;

  // Latin script: the sentence is ALREADY tokenized — split on spaces. No
  // tokenizer needed and no mis-splitting possible, so this covers any sentence
  // shape rather than ja's single [word][particle][rest] pattern. Bounded to
  // 3–8 tiles: below that it isn't a puzzle, above it's a wall of tiles.
  if (isLatin(item)) {
    if (!findWholeWord(jp, front)) return null; // the card must be about THIS item
    // French spaces its punctuation ("Salut, Paul !"), so a naive split turns "!"
    // and the dialogue dash into their own tiles. Anything still carrying
    // sentence-final punctuation or a dash after the trailing strip is a
    // multi-turn exchange ("Merci ! — De rien."), not one buildable sentence —
    // skip it rather than shipping a nonsense puzzle.
    if (/[.!?…—–]/u.test(jp)) return null;
    const toks = jp.split(/\s+/).filter(Boolean);
    if (toks.length < 3 || toks.length > 8) return null;
    if (toks.some((t) => !/\p{L}/u.test(t))) return null; // no punctuation-only tiles
    return toks;
  }

  if (!jp.startsWith(front)) return null;
  const found = particleAfterFront(item);
  if (!found || found.index !== front.length) return null; // particle must sit right after the leading word
  const rest = jp.slice(found.index + found.particle.length);
  if (!rest) return null;
  return [front, found.particle, rest];
}

export function canSentence(item) {
  return item?.type === "vocab" && !!sentenceTokens(item);
}

// { answer: the ordered tokens, tiles: those tokens + one distractor particle,
//   shuffled }. The distractor makes particle choice part of the puzzle.
export function sentenceTiles(item) {
  const answer = sentenceTokens(item);
  if (!answer) return null;
  // One extra function-word tile so the puzzle tests CHOICE, not just ordering.
  // It must not already be in the sentence, or the "wrong" tile would be usable.
  const used = new Set(answer.map((t) => t.toLowerCase()));
  const distractor = shuffleParticles(
    particleSetFor(item).filter((p) => !used.has(p.toLowerCase()))
  )[0];
  return { answer, tiles: shuffleParticles(distractor ? [...answer, distractor] : [...answer]) };
}

// Rung-3 production variant: the top hash band (distinct from type:produce, which
// takes hash < PRODUCE_SHARE), checked before build for eligible sentences.
export function shouldSentence(item) {
  return canSentence(item) && hash01(item.id) >= 1 - SENTENCE_SHARE;
}

// --- conjugation (produce a verb's target form) ------------------------------
// A conjugate item is a verb tagged with BOTH a group (verb class) and a conjForm
// (the form to produce). Unlike the hash-interleaved cards, this isn't a random
// share — a conjForm item's whole purpose IS the conjugation drill, so it always
// routes to the conjugate card. Guarded on the engine actually producing a form,
// so a mistagged verb degrades safely to the normal produce cards instead.
export function shouldConjugate(item) {
  return (
    item?.type === "vocab" &&
    !!item.conjForm &&
    !!item.group &&
    conjugate(item.front, item.group, item.conjForm) != null
  );
}

// --- tile build (assemble the reading from tiles) ----------------------------
// JAPANESE ONLY, for exactly the same reason as type:reading. BuildCard displays
// item.front and asks the learner to assemble item.reading from tiles — a real
// transliteration test when those are different scripts (ねこ shown, n-e-k-o
// assembled), and pure copying when they're the same string: 85 of 185 French
// items have reading === front character-for-character ("bonjour"/"bonjour"), and
// the rest differ only by the accents/spaces/apostrophes normalizeReading strips
// ("ça va" → "cava"). Latin-script items route to type:produce instead, which
// asks for the word from its MEANING — production, not transcription.
//
// A French-appropriate tile builder (letter tiles spelling the real orthography,
// prompted by the meaning) is a genuinely good card, but it's a design decision
// with real edges (accent and space tiles), so it's logged rather than assumed.
export function canBuildReading(item) {
  return (item?.lang ?? "ja") === "ja";
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
