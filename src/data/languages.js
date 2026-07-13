// The language catalog — order-agnostic. There is NO prescribed path between
// languages: a learner starts any one WITH CONTENT, and once a started language
// reaches A1 they may add another, in any order — the "one at a time, earn the
// next" rule lives in canAddLanguage (useStore), not in a hardcoded cascade.
// `unlocked` just marks which are already available/started; `target` is the goal
// CEFR (all target B2 per LANGUAGES.md). Add a language = one entry here; it shows
// as "planned / coming soon" until its first unit ships (isLive is derived from
// UNITS, never stored), then flips live automatically. See LANGUAGES.md.
export const LANGUAGES = [
  // Live — has content today.
  { id: "ja", name: "Japanese", flag: "🇯🇵", target: "B2", unlock: null, unlocked: true },

  // Planned · Latin script (lowest lift — no script-teaching build).
  { id: "es", name: "Spanish", flag: "🇪🇸", target: "B2", unlock: null, unlocked: false },
  { id: "fr", name: "French", flag: "🇫🇷", target: "B2", unlock: null, unlocked: false },
  { id: "de", name: "German", flag: "🇩🇪", target: "B2", unlock: null, unlocked: false },
  { id: "it", name: "Italian", flag: "🇮🇹", target: "B2", unlock: null, unlocked: false },
  { id: "pt", name: "Portuguese", flag: "🇵🇹", target: "B2", unlock: null, unlocked: false },
  { id: "no", name: "Norwegian", flag: "🇳🇴", target: "B2", unlock: null, unlocked: false },
  { id: "sv", name: "Swedish", flag: "🇸🇪", target: "B2", unlock: null, unlocked: false },
  { id: "nl", name: "Dutch", flag: "🇳🇱", target: "B2", unlock: null, unlocked: false },
  { id: "pl", name: "Polish", flag: "🇵🇱", target: "B2", unlock: null, unlocked: false },
  { id: "tr", name: "Turkish", flag: "🇹🇷", target: "B2", unlock: null, unlocked: false },
  { id: "id", name: "Indonesian", flag: "🇮🇩", target: "B2", unlock: null, unlocked: false },
  { id: "vi", name: "Vietnamese", flag: "🇻🇳", target: "B2", unlock: null, unlocked: false },

  // Planned · own script (medium lift — a real script-teaching build).
  { id: "ko", name: "Korean", flag: "🇰🇷", target: "B2", unlock: null, unlocked: false },
  { id: "ru", name: "Russian", flag: "🇷🇺", target: "B2", unlock: null, unlocked: false },

  // Planned · pan-regional (Latin script). Flag is a placeholder — a single country
  // flag misrepresents these, so 🌍 stands in until a deliberate label is chosen.
  { id: "sw", name: "Swahili", flag: "🌍", target: "B2", unlock: null, unlocked: false },
  { id: "yo", name: "Yoruba", flag: "🌍", target: "B2", unlock: null, unlocked: false },
  { id: "tw", name: "Twi", flag: "🌍", target: "B2", unlock: null, unlocked: false },

  // Planned · logographic / non-Latin (highest lift — native review a hard gate).
  { id: "zh", name: "Mandarin", flag: "🇨🇳", target: "B2", unlock: null, unlocked: false },
  { id: "hi", name: "Hindi", flag: "🇮🇳", target: "B2", unlock: null, unlocked: false },
];
