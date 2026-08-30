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
