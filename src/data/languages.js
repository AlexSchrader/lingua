// The language catalog — order-agnostic. There is NO prescribed path between
// languages: a learner starts any one WITH CONTENT, and once a started language
// reaches A1 they may add another, in any order — the "one at a time, earn the
// next" rule lives in canAddLanguage (useStore), not in a hardcoded cascade.
// `target` is the goal CEFR (all target B2 per LANGUAGES.md). Add a language = one
// entry here; it shows as "planned / coming soon" until its first unit ships (isLive
// is derived from UNITS, never stored), then flips live automatically. See LANGUAGES.md.

// Display name for a language id — for card copy that must not hardcode
// "Japanese" now that more than one language can be live ("Type it in French").
export const langName = (id) =>
  LANGUAGES.find((l) => l.id === id)?.name ?? "Japanese";

// An entry is {id, name, flag, target} and nothing else — enforced by contract.js
// and tests/unit/languages.test.mjs. Entries used to also carry `unlock: {lang,
// level}` and `unlocked: boolean` from the retired ja→es→fr cascade. Both were dead
// by the time the catalog went order-agnostic — nothing in the app ever read either
// one — and they were actively misleading: `unlocked: true` on ja implied a hardcoded
// starting language, when what actually decides availability is `isLive` (derived
// from content) plus `canAddLanguage` (the earn-A1 rule). Removed rather than left at
// null, so there is no dead cascade shape for the next language to be modelled on.
export const LANGUAGES = [
  // Live — has content today.
  { id: "ja", name: "Japanese", flag: "🇯🇵", target: "B2" },

  // Planned · Latin script (lowest lift — no script-teaching build).
  { id: "es", name: "Spanish", flag: "🇪🇸", target: "B2" },
  { id: "fr", name: "French", flag: "🇫🇷", target: "B2" },
  { id: "de", name: "German", flag: "🇩🇪", target: "B2" },
  { id: "it", name: "Italian", flag: "🇮🇹", target: "B2" },
  { id: "pt", name: "Portuguese", flag: "🇵🇹", target: "B2" },
  { id: "no", name: "Norwegian", flag: "🇳🇴", target: "B2" },
  { id: "sv", name: "Swedish", flag: "🇸🇪", target: "B2" },
  { id: "nl", name: "Dutch", flag: "🇳🇱", target: "B2" },
  { id: "pl", name: "Polish", flag: "🇵🇱", target: "B2" },
  { id: "tr", name: "Turkish", flag: "🇹🇷", target: "B2" },
  { id: "id", name: "Indonesian", flag: "🇮🇩", target: "B2" },
  { id: "vi", name: "Vietnamese", flag: "🇻🇳", target: "B2" },

  // Planned · own script (medium lift — a real script-teaching build).
  { id: "ko", name: "Korean", flag: "🇰🇷", target: "B2" },
  { id: "ru", name: "Russian", flag: "🇷🇺", target: "B2" },

  // Planned · pan-regional (Latin script). Flag is a placeholder — a single country
  // flag misrepresents these, so 🌍 stands in until a deliberate label is chosen.
  { id: "sw", name: "Swahili", flag: "🌍", target: "B2" },
  { id: "yo", name: "Yoruba", flag: "🌍", target: "B2" },
  { id: "tw", name: "Twi", flag: "🌍", target: "B2" },

  // Planned · logographic / non-Latin (highest lift — native review a hard gate).
  { id: "zh", name: "Mandarin", flag: "🇨🇳", target: "B2" },
  { id: "hi", name: "Hindi", flag: "🇮🇳", target: "B2" },
];
