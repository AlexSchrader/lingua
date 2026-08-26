// PREVIEW MODE — the real app, on a throwaway profile.
//
// Dev Mode's panel is a set of preview *routes*: one lesson, one card kind, one
// sandbox at a time. That answers "does this card render", not "what does French
// feel like to move around in". This does the other thing: you get the whole app,
// every screen, real navigation — but writing to a SEPARATE localStorage key, so
// nothing you do touches the profile you actually study on.
//
// The isolation is a storage key, not a flag the writers check. That distinction
// matters: a flag has to be honoured at every write site, and the first one that
// forgets writes preview progress into a real deck. Zustand's persist middleware
// takes the key ONCE at store creation, so the two decks cannot reach each other
// no matter what any action does — the only cost is that toggling reloads the page.
//
// Every language is started and levelled to B2 in the preview deck, so nothing is
// gated behind progress you'd have to grind: canAddLanguage passes, every language
// is in the picker, every band is reachable.

export const REAL_KEY = "lingua-v1";
export const PREVIEW_KEY = "lingua-preview";
const FLAG = "lingua-preview-on";

// Read at store-creation time (see useStore's persist config). Guarded for SSR and
// for the unit tests, which import the store without a DOM.
export function isPreview() {
  try {
    return globalThis.localStorage?.getItem(FLAG) === "1";
  } catch {
    return false;
  }
}

export function persistKey() {
  return isPreview() ? PREVIEW_KEY : REAL_KEY;
}

// A preview deck with nothing locked. Written directly to the preview key BEFORE
// the reload, so the store rehydrates into it rather than seeding an empty profile
// and making you click through onboarding to look at a layout.
//
// `languages` levels are set to B2 purely to open the gates — this deck is never
// read as an achievement, and it is never synced (cloud sync reads the real key).
export function buildPreviewState({ langs, catalog, version }) {
  const languages = {};
  for (const l of catalog) languages[l.id] = { ...l, level: "B2", xp: 0 };
  return {
    state: {
      items: {},
      languages,
      profile: {
        onboarded: true,
        languagesChosen: true,
        displayName: "Preview",
        reason: null,
        reminderTime: null,
        languages: [...langs],
        activeLang: langs[0] ?? null,
      },
      streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
      stats: { xpTotal: 0 },
      daily: { date: null, reviewsCleared: false, lessonDone: false },
      mistakes: [],
      milestonesEarned: [],
      devMode: true,
      settings: {},
      lastModified: 0,
    },
    version,
  };
}

// A BRAND-NEW-USER preview: an empty, not-onboarded deck, so the real first-run
// flow runs on the throwaway key — onboarding, the language pick, then lesson 1 —
// exactly as a fresh install would. Unlike buildPreviewState (which opens every
// gate to B2 so you can roam), this starts with NOTHING earned, to feel day one.
//
// Faithful to a real fresh boot: `languages` mirrors the store's initialLanguages()
// (every catalog language at pre-A1), profile is not onboarded and has no language
// chosen (languagesChosen is left ABSENT, not false — that's the real new-user
// shape). devMode stays true so the onboarding screen shows its "Exit preview"
// escape. items is empty; the store's seedOnce fills the deck at rung 0 on boot.
export function buildFreshPreviewState({ catalog, version }) {
  const languages = {};
  for (const l of catalog) languages[l.id] = { ...l, level: "pre-A1", xp: 0 };
  return {
    state: {
      items: {},
      languages,
      profile: {
        onboarded: false,
        displayName: null,
        reason: null,
        reminderTime: null,
        languages: [],
        activeLang: null,
      },
      streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
      stats: { xpTotal: 0 },
      daily: { date: null, reviewsCleared: false, lessonDone: false },
      mistakes: [],
      milestonesEarned: [],
      devMode: true,
      settings: {},
      lastModified: 0,
    },
    version,
  };
}

// Enter/exit both reload, because the persist key is bound at store creation.
// exitPreview DELETES the preview deck: it is scratch by definition, and leaving
// it around invites "wait, did I study this or preview it?".
export function enterPreview(state) {
  localStorage.setItem(PREVIEW_KEY, JSON.stringify(state));
  localStorage.setItem(FLAG, "1");
  location.reload();
}

export function exitPreview() {
  localStorage.removeItem(FLAG);
  localStorage.removeItem(PREVIEW_KEY);
  location.reload();
}
