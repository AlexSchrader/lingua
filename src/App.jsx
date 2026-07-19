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
import { useStore } from "./store/useStore.js";
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
const IS_WEBDRIVER = typeof navigator !== "undefined" && !!navigator.webdriver;
const AUTH_ENABLED =
  !!import.meta.env.VITE_SUPABASE_URL && !!import.meta.env.VITE_SUPABASE_ANON_KEY && !IS_WEBDRIVER;

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
    // Wait out the first cloud pull before deciding onboarding, so a returning
    // user's synced `onboarded` lands before we'd flash the onboarding screen.
    if (!onboarded && auth.status === "syncing") return <Splash />;
    if (!onboarded) return <Onboarding />;
  }

  return (
    <>
      {/* Global overlay — a milestone can unlock inside Review/Lesson (outside the
          AppShell), so it lives at the App root to cover every screen. */}
      <MilestoneToast />
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
      <Route path="review" element={<Review />} />
      <Route path="lesson/:lessonId" element={<Lesson />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
