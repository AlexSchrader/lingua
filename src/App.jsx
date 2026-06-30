import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./components/AppShell.jsx";
import Today from "./screens/Today.jsx";
import Ladder from "./screens/Ladder.jsx";
import Stats from "./screens/Stats.jsx";
import Settings from "./screens/Settings.jsx";
import DevPanel from "./screens/DevPanel.jsx";
import Lesson from "./screens/Lesson.jsx";
import Review from "./screens/Review.jsx";
import Auth from "./screens/Auth.jsx";
import Onboarding from "./screens/Onboarding.jsx";
import { useStore } from "./store/useStore.js";
import { C, F } from "./theme.js";

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
    <div style={{ minHeight: "100dvh", background: C.washi, color: C.inkSoft, fontFamily: F.body, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src="/mascot/lingua-think.png" alt="Loading" style={{ width: 96, height: "auto", opacity: 0.8 }} />
    </div>
  );
}

export default function App() {
  const auth = useStore((s) => s.auth);
  const onboarded = useStore((s) => s.profile?.onboarded);

  // Auth gate: log in → onboarding → app. Only when this build has Supabase
  // configured; otherwise fall straight through to the app (local-only mode).
  if (AUTH_ENABLED) {
    if (!auth.ready) return <Splash />;
    if (!auth.user) return <Auth />;
    if (!onboarded) return <Onboarding />;
  }

  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Today />} />
        <Route path="ladder" element={<Ladder />} />
        <Route path="haruki" element={<Suspense fallback={null}><Haruki /></Suspense>} />
        <Route path="stats" element={<Stats />} />
        <Route path="settings" element={<Settings />} />
        <Route path="dev" element={<DevPanel />} />
      </Route>
      <Route path="review" element={<Review />} />
      <Route path="lesson/:lessonId" element={<Lesson />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
