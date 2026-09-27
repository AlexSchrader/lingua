// The language catalog — FLAT and order-agnostic. There is no starter language, no
// tier, and no "featured" set: entries are listed alphabetically by name so the file
// itself expresses no preference. Which languages a learner can pick is DERIVED —
// `isLive()` (does it have playable content?) plus `canAddLanguage()` (the earn-A1
// rule) — never encoded here. Ordering used to put the authored languages (ja, es,
// fr) at the top, which read as a recommended path and was really just a record of
// which crews had shipped; a learner has no reason to care. `target` is the goal CEFR
// (all B2 per LANGUAGES.md). Adding a language = one entry; it shows as "planned"
// until its first unit ships, then flips live automatically.

// Display name for a language id. Falls back to the id itself — NEVER to a language
// name. A missing entry is a bug in the catalog, and printing "Japanese" for an
// unknown id hid exactly that while telling the learner something false.
export const langName = (id) =>
  LANGUAGES.find((l) => l.id === id)?.name ?? id ?? "";

// An entry is {id, name, flag, target} and nothing else — enforced by contract.js
// and tests/unit/languages.test.mjs. Entries used to also carry `unlock: {lang,
// level}` and `unlocked: boolean` from the retired ja→es→fr cascade. Both were dead
// by the time the catalog went order-agnostic — nothing in the app ever read either
// one — and they were actively misleading: `unlocked: true` on ja implied a hardcoded
// starting language, when what actually decides availability is `isLive` (derived
// from content) plus `canAddLanguage` (the earn-A1 rule). Removed rather than left at
// null, so there is no dead cascade shape for the next language to be modelled on.
//
// FLAGS: the convention is the language's origin country where one is uncontested
// (Portuguese 🇵🇹 not 🇧🇷, Spanish 🇪🇸 not 🇲🇽, English 🇬🇧). Pan-regional languages take
// 🌍 rather than misrepresent themselves with one country's flag — a display choice
// to revisit deliberately, never a fact about the language.
export const LANGUAGES = [
  { id: "nl", name: "Dutch", flag: "🇳🇱", target: "B2" },
  { id: "en", name: "English", flag: "🇬🇧", target: "B2" },
  { id: "fr", name: "French", flag: "🇫🇷", target: "B2" },
  { id: "de", name: "German", flag: "🇩🇪", target: "B2" },
  // The only creole with an ISO 639-1 code, which the 2-char id convention requires
  // (CONTENT.md → Language). Jamaican Patois (jam), Louisiana Creole (lou) and
  // Mauritian (mfe) would each need that rule waived first.
  { id: "ht", name: "Haitian Creole", flag: "🇭🇹", target: "B2" },
  { id: "ha", name: "Hausa", flag: "🌍", target: "B2" },
  { id: "hi", name: "Hindi", flag: "🇮🇳", target: "B2" },
  { id: "id", name: "Indonesian", flag: "🇮🇩", target: "B2" },
  { id: "it", name: "Italian", flag: "🇮🇹", target: "B2" },
  { id: "ja", name: "Japanese", flag: "🇯🇵", target: "B2" },
  { id: "ko", name: "Korean", flag: "🇰🇷", target: "B2" },
  { id: "zh", name: "Mandarin", flag: "🇨🇳", target: "B2" },
  { id: "no", name: "Norwegian", flag: "🇳🇴", target: "B2" },
  { id: "pl", name: "Polish", flag: "🇵🇱", target: "B2" },
  { id: "pt", name: "Portuguese", flag: "🇵🇹", target: "B2" },
  { id: "ru", name: "Russian", flag: "🇷🇺", target: "B2" },
  { id: "es", name: "Spanish", flag: "🇪🇸", target: "B2" },
  { id: "sw", name: "Swahili", flag: "🌍", target: "B2" },
  { id: "sv", name: "Swedish", flag: "🇸🇪", target: "B2" },
  { id: "tr", name: "Turkish", flag: "🇹🇷", target: "B2" },
  { id: "tw", name: "Twi", flag: "🌍", target: "B2" },
  { id: "vi", name: "Vietnamese", flag: "🇻🇳", target: "B2" },
  { id: "yo", name: "Yoruba", flag: "🌍", target: "B2" },
];

// --- band labels -------------------------------------------------------------
// A CEFR band has a NAME the engine reasons with and a NAME the learner reads, and
// for Japanese they are not the same word. Alex, 2026-09-27: *"jlpt n5"*.
//
// **Japanese bands are named by JLPT level, not CEFR: A1→N5, A2→N4, B1→N3, B2→N2.**
// (N1 has no CEFR twin and we do not claim one; there is likewise no JLPT level
// below N5, so ja's pre-A1 kana foundation reads "Before N5" rather than mixing a
// CEFR term into a JLPT spine.) Every other language keeps its CEFR label.
//
// THIS IS A LABELLING RULE AND NOTHING ELSE. `lesson.cefr` is untouched, milestone
// IDS are untouched (`level-A1-verified` stays byte-identical — it is persisted and
// earned-once), `PERSIST_VERSION` is untouched, and exams/levels/milestones still
// reason in CEFR bands from end to end. Only the string on screen changes.
//
// WHY: ja's A1-tagged lessons genuinely span u1–u87 (43 units, 1252 items), so a
// faithful cumulative A1 exam draws words most people would call A2 — のんびり
// (u63), そろそろ (u68), けいかん (u83). That is not an exam bug; the exam uses the
// same cumulative `lesson.cefr` rule milestones.js already uses. The two ways out
// were to retag those late lessons or to say what Japanese A1 actually IS. Alex
// chose the second: Japanese A1 *means* JLPT N5, so it says N5. No content moved.
//
// EVERY display site calls bandLabel(). A `lang === "ja"` branch in a screen is the
// content-bleeding-into-engine hardcoding CLAUDE.md's architecture spine forbids —
// this table is the one place that knows, and the next language with its own
// certification ladder (Korean → TOPIK) is one entry here and no JSX at all.
const JLPT = { "PRE-A1": "Before N5", A1: "N5", A2: "N4", B1: "N3", B2: "N2" };
const CEFR_LABELS = { "PRE-A1": "Pre-A1", A1: "A1", A2: "A2", B1: "B1", B2: "B2" };
const BAND_LABELS = { ja: JLPT };

// Display label for a band in a language. Accepts either spelling the app uses —
// the CEFR band ("A1", from lesson.cefr / exam papers / cefrLevelReached) and the
// lowercase unit stage ("a1", "pre-a1", from unit.stage) — because both reach the
// same screens and a helper that only took one of them would guarantee a second
// hardcoded table. Unknown bands pass through unchanged rather than blanking the UI.
export function bandLabel(lang, band) {
  if (band == null || band === "") return "";
  const key = String(band).toUpperCase();
  return BAND_LABELS[lang]?.[key] ?? CEFR_LABELS[key] ?? String(band);
}
