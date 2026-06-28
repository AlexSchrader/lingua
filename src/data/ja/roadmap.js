// Planned units not yet authored — shown as "Coming soon" on the Ladder so the
// climb ahead is visible and the app doesn't feel empty. These are PLACEHOLDERS
// (title + theme only, no content). When a unit is authored it moves into UNITS
// and drops off this list. Keyed by language so the Ladder stays data-driven.
// `stage` matches the unit `stage` enum (contract.js) so the Ladder groups these
// placeholders under the same section headers as authored units. Katakana is a
// script → pre-a1; kanji + grammar/thematic units are A1 proper.
export const ROADMAP = {
  ja: [
    { title: "カタカナ", theme: "The katakana script", cefr: "A1", stage: "pre-a1" },
    { title: "First kanji", theme: "Numbers, days, everyday kanji", cefr: "A1", stage: "a1" },
    { title: "Particles", theme: "Build sentences — は・が・を・に", cefr: "A1", stage: "a1" },
  ],
};

export const roadmapFor = (lang) => ROADMAP[lang] ?? [];
