// The language catalog — order-agnostic. There is NO prescribed path between
// languages: a learner starts any one, and once a started language reaches A1 they
// may add another (any of them), in any order — the "one at a time, earn the next"
// rule lives in canAddLanguage (useStore), not in a hardcoded es-after-ja cascade.
// `unlocked` just marks which are already available/started; `target` is the goal
// CEFR for the deep climb. Add a language = one entry here.
export const LANGUAGES = [
  { id: "ja", name: "Japanese", flag: "🇯🇵", target: "B2", unlock: null, unlocked: true },
  { id: "es", name: "Spanish", flag: "🇪🇸", target: "B1", unlock: null, unlocked: false },
  { id: "fr", name: "French", flag: "🇫🇷", target: "B1", unlock: null, unlocked: false },
];
