import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./components/AppShell.jsx";
import Today from "./screens/Today.jsx";
import Ladder from "./screens/Ladder.jsx";
import Stats from "./screens/Stats.jsx";
import Settings from "./screens/Settings.jsx";
import DevPanel from "./screens/DevPanel.jsx";
import Achievements from "./screens/Achievements.jsx";
import Lesson from "./screens/Lesson.jsx";
import Review from "./screens/Review.jsx";
import Auth from "./screens/Auth.jsx";
import Onboarding from "./screens/Onboarding.jsx";
import SetPassword from "./screens/SetPassword.jsx";
import Mascot from "./components/Mascot.jsx";
import MilestoneToast from "./components/MilestoneToast.jsx";
import SyncToast from "./components/SyncToast.jsx";
import { useStore } from "./store/useStore.js";
import { isPreview, authGateEnabled } from "./store/preview.js";
import { testAuthSeed } from "./store/testAuth.js";
import { scheduleDailyReminder, notificationPermission } from "./lib/reminders.js";
import { C, F, setActiveTheme, resolveTheme } from "./theme.js";

// Lazy-loaded: the ElevenLabs voice SDK is heavy (~500KiB) and only needed on
// the Haruki tab, so keep it out of the main bundle until the user opens it.
const Haruki = lazy(() => import("./screens/Haruki.jsx"));

// Whether cloud auth is even possible in this build. Read synchronously from env
// (not store) so the gate decides without a flash: no Supabase keys → no gate,
// the app runs fully local/offline. Also bypassed under Playwright/WebDriver so
// the smoke suite exercises the learning engine without a real auth round-trip
// (auth itself is verified against a live Supabase, not in the headless smoke).
// ...and OFF IN PREVIEW MODE, which is the same thing: a throwaway deck on its own
// storage key that is never signed in and never synced. Without that term, entering
// preview on a keyed build rendered the login screen over the whole app with no way
// out — see authGateEnabled's note. Read once at module scope, which is correct
// because entering and leaving preview both reload the page.
//
// TEST_AUTH is the DEV-ONLY switch that makes this gate reachable from a browser
// test at all (src/store/testAuth.js — null in every production build, and null in
// dev unless a page explicitly sets the hook). It supplies the two ENV terms and
// neutralises ONLY the WebDriver term: `preview` is still honoured, so "entering
// preview on a keyed build must not render the login screen" is a property a test
// can actually assert. With no hook set, every term below is byte-identical to what
// it was before the switch existed.
const IS_WEBDRIVER = typeof navigator !== "undefined" && !!navigator.webdriver;
const TEST_AUTH = testAuthSeed();
const AUTH_ENABLED = authGateEnabled({
  hasUrl: !!import.meta.env.VITE_SUPABASE_URL || !!TEST_AUTH,
  hasKey: !!import.meta.env.VITE_SUPABASE_ANON_KEY || !!TEST_AUTH,
  isWebdriver: TEST_AUTH ? false : IS_WEBDRIVER,
  preview: isPreview(),
});

function Splash() {
  return (
    <div style={{ minHeight: "calc(100dvh / var(--app-zoom, 1))", background: C.washi, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Mascot context="loading" size={120} />
    </div>
  );
}

// Track the OS colour-scheme so "system" follows it live.
function useSystemDark() {
  const [dark, setDark] = useState(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const on = () => setDark(mq.matches);
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);
  return dark;
}

export default function App() {
  const auth = useStore((s) => s.auth);
  const onboarded = useStore((s) => s.profile?.onboarded);
  const reminderTime = useStore((s) => s.profile?.reminderTime);

  // Roll the daily reminder forward on each app open — the trigger is one-shot, so
  // rescheduling here keeps a daily reminder alive as long as the app is opened
  // periodically. No-op unless supported + permitted (see lib/reminders.js).
  useEffect(() => {
    if (reminderTime && notificationPermission() === "granted") scheduleDailyReminder(reminderTime);
  }, [reminderTime]);

  // Theme: resolve the preference against the OS, set the active palette BEFORE
  // children render (so they read the right colours this pass), and sync the
  // page chrome (scrollbars/overscroll, native controls).
  const themePref = useStore((s) => s.settings?.theme ?? "system");
  const systemDark = useSystemDark();
  const effectiveTheme = resolveTheme(themePref, systemDark);
  setActiveTheme(effectiveTheme);
  useEffect(() => {
    document.documentElement.style.colorScheme = effectiveTheme;
    document.body.style.background = C.washi;
  }, [effectiveTheme]);

  // Text size = a UI scale via `zoom`. The shells key their height off
  // --app-zoom (calc(100dvh / var(--app-zoom))) so they stay exactly one
  // viewport tall at any scale — the pinned top-bar/bottom-nav never break.
  const textSize = useStore((s) => s.settings?.textSize ?? "default");
  useEffect(() => {
    const scale = { small: 0.85, default: 1.05, large: 1.2 }[textSize] ?? 1.05;
    document.documentElement.style.setProperty("--app-zoom", String(scale));
    document.documentElement.style.zoom = String(scale);
  }, [textSize]);

  // Auth gate: log in → onboarding → app. Only when this build has Supabase
  // configured; otherwise fall straight through to the app (local-only mode).
  if (AUTH_ENABLED) {
    if (!auth.ready) return <Splash />;
    if (auth.recovery) return <SetPassword />;
    if (!auth.user) return <Auth />;
    // Wait out ONLY the first cloud pull before deciding onboarding, so a returning
    // user's synced `onboarded` lands before we'd flash the onboarding screen. Gate
    // on `initialSyncDone`, NOT on `status === "syncing"`: onboarding writes a synced
    // slice (startLanguage) which fires a debounced upload → status "syncing" → this
    // used to splash-unmount the onboarding flow mid-step, so Continue appeared dead.
    if (!onboarded && !auth.initialSyncDone) return <Splash />;
    // The language pick gates the app: nothing loads until a language WITH CONTENT has
    // been chosen (the picker simply does not respond to an empty one). This lives
    // inside the auth block because that is the shipped configuration. Hoisting it out
    // — so a local-only or automated build is gated too — is correct but turns 16 smoke
    // fixtures red: they boot with no profile at all and would land on onboarding.
    // Logged for the QA lane rather than left broken.
    if (!onboarded) return <Onboarding />;
  }

  return (
    <>
      {/* Global overlay — a milestone can unlock inside Review/Lesson (outside the
          AppShell), so it lives at the App root to cover every screen. */}
      <MilestoneToast />
      {/* Same reasoning as the milestone toast: a lesson finishes inside Lesson.jsx,
          a reset happens in Settings, and both live outside AppShell — so the "it's
          saved" confirmation is mounted at the root or it would miss its own event. */}
      <SyncToast />
      <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Today />} />
        <Route path="ladder" element={<Ladder />} />
        <Route path="haruki" element={<Suspense fallback={null}><Haruki /></Suspense>} />
        <Route path="stats" element={<Stats />} />
        <Route path="settings" element={<Settings />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="dev" element={<DevPanel />} />
      </Route>
      {/* THE FRONT DOOR, AS A ROUTE.
          The gate above renders <Onboarding /> only when AUTH_ENABLED, which is
          false under WebDriver by default — so for a long time the language pick
          and the profile questions had never once been exercised by a test. Three
          user-facing bugs in one week lived in exactly that code: the pick APPENDED
          a language instead of choosing one, reset left the old list behind, and
          preview locked the app. All three shipped past a green suite.
          Two earlier attempts to make the GATE testable were reverted: hoisting it
          out of the auth block turns 19 fixtures red, and keying it on "is there
          saved data" cannot work because zustand-persist writes a default profile
          before App.jsx can look. A route sidesteps both. It is not a test
          backdoor — it exposes no state and skips no check; it renders the same
          screen the gate renders, so the FLOW (where every one of those bugs was)
          can be driven directly.
          THE GATE ITSELF IS NOW COVERED TOO, through the dev-only TEST_AUTH switch
          above (src/store/testAuth.js): tests/smoke.spec.js drives splash,
          recovery, login, onboarding-behind-the-gate and the preview lockout. Those
          run in DEV ONLY — the switch is tree-shaken out of a production build — so
          this route remains the only way the flow is covered under
          SMOKE_MODE=preview. Keep it.
          Dev Mode's "Replay onboarding" is the in-app entry to the same screen. */}
      <Route path="onboarding" element={<Onboarding />} />
      <Route path="review" element={<Review />} />
      <Route path="lesson/:lessonId" element={<Lesson />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
