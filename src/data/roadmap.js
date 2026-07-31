// Planned units not yet authored — shown as "Coming soon" on the Ladder so the
// climb ahead is visible and the app doesn't feel empty. These are PLACEHOLDERS
// (title + theme only, no content). When a unit is authored it moves into UNITS
// and drops off this list. Keyed by language so the Ladder stays data-driven.
// `stage` matches the unit `stage` enum (contract.js) so the Ladder groups these
// under the same section headers as authored units. (Katakana is fully authored
// in Units 4-6, so it's no longer a roadmap placeholder.)
export const ROADMAP = {
  ja: [
    { title: "B2 — N2", theme: "Advanced grammar, kanji and vocabulary", cefr: "B2", stage: "b2" },
  ],
};

export const roadmapFor = (lang) => ROADMAP[lang] ?? [];
