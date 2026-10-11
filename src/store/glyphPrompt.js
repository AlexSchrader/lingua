// THE LETTER CARD'S TYPING PROMPT, WHEN THE FOLD CANNOT NAME ONE LETTER.
//
// QA scan 2026-10-09: TypeCard's produce branch prompts a letter card with
// `item.reading`, which for a glyph is the ASCII fold. Four prompts therefore have
// more than one correct answer and accept only one of them:
//
//     fr  "e" -> é è ê        pt  "a" -> á â ã
//     pt  "o" -> ó ô          es  "u" -> ú ü
//
// A learner shown "e" and asked to type the letter has no way to know which. They
// are not wrong when they are marked wrong — the question was unanswerable, and a
// miss costs a rung (mastery.js). This is the same defect shape as the unanswerable
// ear card in the same scan: A PROMPT LOSSIER THAN ITS ANSWER SPACE.
//
// THE FIX IS A BETTER PROMPT, NOT A LOOSER CHECK. Accepting é, è and ê for "e"
// would make the card impossible to fail and teach nothing — the accent is the
// entire answer on this card (see foldWouldEraseAnswer in answer.js). Instead the
// prompt names the letter the only way that is both unambiguous and not a crib: a
// word that contains it, with the letter blanked out.
//
//     la cr_me   -> è        le b_b_   -> é        la cr_pe  -> ê
//
// The words come from src/data/speechCarriers.js, already generated and already
// chosen to contain exactly that letter and no longer one that swallows it (German
// `ch` rides "das Buch", not "schön"). Nothing new is authored or recorded.
//
// WHY NOT DO THIS FOR EVERY LETTER. A letter whose fold names it uniquely — ç, ñ,
// ß, ø — already has an answerable prompt, and rewriting those too would be
// redesigning cards that work. This fires only where the fold is genuinely
// ambiguous, which is the defect.
import { UNITS } from "../data/index.js";

// Lazily: which (lang, reading) pairs are claimed by more than one letter card.
// Built once from the corpus, like itemMetaMap in useStore — content stays data,
// and the engine learns the fact rather than hardcoding the four known cases,
// which would silently stop covering a fifth the day one is authored.
let _ambiguous = null;
function ambiguousKeys() {
  if (_ambiguous) return _ambiguous;
  const counts = new Map();
  for (const u of UNITS) {
    for (const l of u.lessons ?? []) {
      for (const it of l.items ?? []) {
        if (it.type !== "glyph" || !it.reading) continue;
        const key = `${u.lang}:${String(it.reading).toLowerCase()}`;
        counts.set(key, (counts.get(key) ?? 0) + 1);
      }
    }
  }
  _ambiguous = new Set([...counts].filter(([, n]) => n > 1).map(([k]) => k));
  return _ambiguous;
}

// Does this letter share its fold with another letter in the same language?
export function foldIsAmbiguous(item, lang) {
  if (item?.type !== "glyph" || !item?.reading) return false;
  const l = lang ?? item.lang;
  return ambiguousKeys().has(`${l}:${String(item.reading).toLowerCase()}`);
}

// The carrier word with every occurrence of the letter replaced by a blank, or
// null when there is no carrier to build it from.
//
// EVERY occurrence, not the first: "le bébé" blanked once reads "le b_bé", which
// hands the learner the answer two characters later.
export function blankedCarrier(item, carriers) {
  const text = carriers?.[item?.id]?.text;
  const front = item?.front;
  if (!text || !front) return null;
  const blank = "_".repeat([...front].length);
  const out = text.replace(new RegExp(escapeRe(front), "gi"), blank);
  // If the letter is not actually in the word, the carrier is wrong and a blanked
  // prompt would be a lie. Say nothing rather than something false.
  return out === text ? null : out;
}

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// The prompt to show on a letter's typing card, and whether it is the blanked
// word. null `text` means "use the ordinary reading prompt" — the fold names this
// letter uniquely, or there is no carrier to do better with.
export function glyphProducePrompt(item, carriers, lang) {
  if (!foldIsAmbiguous(item, lang)) return { text: null, blanked: false };
  const text = blankedCarrier(item, carriers);
  return text ? { text, blanked: true } : { text: null, blanked: false };
}
