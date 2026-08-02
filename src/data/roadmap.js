// Planned units not yet authored — shown as "Coming soon" on the Ladder so the
// climb ahead is visible and the app doesn't feel empty. These are PLACEHOLDERS
// (title + theme only, no content). When a unit is authored it moves into UNITS
// and drops off this list. Keyed by language so the Ladder stays data-driven.
// `stage` matches the unit `stage` enum (contract.js) so the Ladder groups these
// under the same section headers as authored units. (Katakana is fully authored
// in Units 4-6, so it's no longer a roadmap placeholder.)
// Empty on purpose. The one entry that lived here — ja "A2 — N4" — was a placeholder
// for content that has since shipped (55 authored ja units now sit at stage a2), so
// the Ladder was drawing a "Coming soon" row directly beneath the finished thing it
// promised. Per the rule above, an authored unit drops off this list; that never
// happened when A2 was activated. The mechanism stays for the next language that
// needs to show a climb before it's written.
export const ROADMAP = {};

export const roadmapFor = (lang) => ROADMAP[lang] ?? [];
