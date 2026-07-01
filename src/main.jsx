import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { setActiveTheme, resolveTheme, C } from "./theme.js";

// Apply the saved theme BEFORE first render to avoid a light-mode flash. Reads
// the persisted preference straight from localStorage (the store hasn't rehydrated
// yet at this point); App keeps it in sync live thereafter.
try {
  const settings = JSON.parse(localStorage.getItem("lingua-v1"))?.state?.settings ?? {};
  const pref = settings.theme ?? "system";
  const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  setActiveTheme(resolveTheme(pref, systemDark));
  document.documentElement.style.colorScheme = resolveTheme(pref, systemDark);
  document.body.style.background = C.washi;
  const scale = { small: 0.85, default: 1.05, large: 1.2 }[settings.textSize ?? "default"] ?? 1.05;
  document.documentElement.style.setProperty("--app-zoom", String(scale));
  document.documentElement.style.zoom = String(scale);
} catch {
  /* first run / no storage — defaults to light, scale 1 */
}

// Keep the PWA fresh. The default register-only script never checked for new
// deploys, so a cached build stuck until a manual hard-refresh (the stale
// Ladder/audio bug). Here we check for a new service worker on load and reload
// ONCE when it takes control — but only if the page was already controlled (a
// real update), never on first install or in test runs.
if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker
      // updateViaCache:"none" → always fetch sw.js fresh (never from the HTTP
      // cache) when checking for updates, so a cached SW script can't hide a new
      // deploy. This was the recurring "I don't see the changes" cause.
      .register("/sw.js", { scope: "/", updateViaCache: "none" })
      .then((reg) => reg.update())
      .catch(() => {});
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing || !hadController) return; // skip first-install claim
      refreshing = true;
      window.location.reload();
    });
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Cloud progress sync (Supabase) — dynamically imported so the SDK stays out of
// the initial render path. No-ops entirely when Supabase env isn't configured.
import("./store/cloudSync.js")
  .then(({ initCloudSync }) => initCloudSync())
  .catch(() => {});
