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

// THE AUTH GATE IS OFF IN PREVIEW MODE. Pure, and exported, so it can be tested —
// the gate itself cannot be, because `AUTH_ENABLED` is false under WebDriver and
// every smoke run therefore skips the whole block.
//
// THE LOCKOUT THIS FIXES (Alex, 2026-09-17, on his phone). On a build that HAS
// Supabase keys, entering preview showed the LOGIN screen reading "Auth isn't
// configured.", with no way back:
//
//   1. `initCloudSync()` returns early when isPreview() — deliberately, so the real
//      cloud profile cannot land on top of the throwaway deck. It therefore never
//      installs the real `signIn`/`signOut`, leaving the store's stubs, whose error
//      string is literally "Auth isn't configured."
//   2. `AUTH_ENABLED` in App.jsx read only the env vars, so it stayed TRUE.
//   3. No session was ever established, so `auth.user` was null → `<Auth />`.
//   4. Settings → Exit preview sits INSIDE AppShell, below the gate. Unreachable.
//
// Preview is the local-only configuration by definition — a throwaway deck that is
// never synced and never signed in. App.jsx's own comment already says an
// unconfigured build should "fall straight through to the app"; preview simply is
// one, and now says so.
export function authGateEnabled({ hasUrl, hasKey, isWebdriver, preview }) {
  return !!hasUrl && !!hasKey && !isWebdriver && !preview;
}

// A preview deck with nothing locked. Written directly to the preview key BEFORE
// the reload, so the store rehydrates into it rather than seeding an empty profile
// and making you click through onboarding to look at a layout.
//
// `languages` levels are set to B2 purely to open the gates — this deck is never
// read as an achievement, and it is never synced (cloud sync reads the real key).
// `activeLang` is which language the preview learner is STUDYING — the one whose
// units the Ladder shows, whose companion greets you, whose flag is in the corner.
// It defaulted to langs[0], which is always Japanese because that is the catalog
// order, so "preview the app" answered "what does JAPANESE feel like" no matter
// which language you had selected. Falls back to langs[0] when unspecified, so the
// Settings entry point is unchanged.
export function buildPreviewState({ langs, catalog, version, activeLang }) {
  const languages = {};
  // Chosen language first — see the activeLang note below.
  if (activeLang && langs.includes(activeLang)) {
    langs = [activeLang, ...langs.filter((l) => l !== activeLang)];
  }
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
        // Put the chosen language FIRST in the started list too, not just in
        // activeLang: several surfaces (the Ladder's started rows, the companion
        // tab) read the list order rather than activeLang, so a mismatch shows
        // French units under a Japanese companion.
        activeLang: (activeLang && langs.includes(activeLang) ? activeLang : langs[0]) ?? null,
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
