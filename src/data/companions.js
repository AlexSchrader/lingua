// Client-safe companion identity per language — NAMES ONLY. Each language's
// tutor is its own person (ja Haruki · es Nacho · fr Mathieu). The personas
// (system prompts) and voice/agent ids live server-side in server/companions.js
// and are deliberately NOT imported here so they never reach the bundle — keep
// the two files' name lists in sync when a language's companion is added.
export const COMPANION_NAMES = { ja: "Haruki", es: "Nacho", fr: "Mathieu" };

export const companionName = (lang) => COMPANION_NAMES[lang] ?? "Haruki";
