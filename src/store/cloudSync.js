// Cloud sync orchestration — the side-effecting layer that ties the Supabase
// client, the store, and the pure decision logic (sync.js) together. Imported
// dynamically at startup (main.jsx) so the Supabase SDK stays out of the initial
// render path. The push-vs-pull decision lives in sync.js (unit-tested); this
// file is the plumbing: auth listener, fetch/upload, debounced uploads.
import { supabase, isCloudConfigured } from "../lib/supabase.js";
import { useStore } from "./useStore.js";
import { PERSIST_VERSION, migrateState } from "./migrate.js";
import { chooseSource, extractProgress, hasMeaningfulProgress } from "./sync.js";

const DEBOUNCE_MS = 1500;

let currentUser = null;
let lastSerialized = null;
let applyingCloud = false; // guards the pull → setState → subscription loop
let uploadTimer = null;
// Whether the cloud row is known to hold real progress. Seeded from the fetch at
// sign-in and kept current on every push/pull. It's the safety interlock that stops
// a transient EMPTY local (a hot-reload reset, a mid-boot fresh seed, a torn tab)
// from being uploaded over a real profile — chooseSource only runs at sign-in, so
// the debounced upload path needs its own guard. See uploadNow / pullFromCloud.
let cloudHasProgress = false;
// The reset receipt this session has already accounted for. Seeded at sign-in from
// whatever the device already carried, so only a reset performed AFTER that — a
// live "Reset everything" tap — can unlock the empty-upload guard below. A stale
// receipt sitting in a restored blob is therefore inert, which is what keeps the
// guard as strong as it was against torn/fresh states.
let seenResetAt = 0;

function blobNow() {
  return extractProgress(useStore.getState());
}

async function fetchCloud(userId) {
  const { data, error } = await supabase
    .from("progress")
    .select("data, version, updated_at")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;
  return { updatedAt: Date.parse(data.updated_at), blob: data.data ?? {}, version: data.version ?? 1 };
}

async function uploadNow() {
  if (!currentUser) return;
  const blob = blobNow();
  // SAFETY INTERLOCK: never overwrite a cloud that holds real progress with an
  // empty/torn local state. This path fires debounced on ANY store change — a
  // hot-reload reset, a fresh seed before the sign-in pull lands, a cleared tab —
  // and chooseSource only guards sign-in, so without this a transient empty local
  // silently WIPES the learner's cloud save (which is exactly what happened once).
  // A genuinely new user (cloud empty → cloudHasProgress false) still pushes fine.
  // ...UNLESS the learner emptied it on purpose. A reset is a real edit that
  // happens to be empty, and refusing it is why "Reset everything" never survived a
  // reopen: the wipe stayed on the device, and the next sign-in pulled the old
  // profile back down. One-shot by construction — the receipt must be NEWER than
  // the one this session started with, so only a live reset opens the gate.
  const resetAt = Number(blob?.resetAt) || 0;
  const deliberate = resetAt > seenResetAt;
  if (!hasMeaningfulProgress(blob) && cloudHasProgress && !deliberate) {
    console.warn("[sync] refused to upload an empty profile over a cloud with real progress");
    useStore.getState().setAuth({ status: "synced", error: null });
    useStore.getState().resolveSyncNotice(false, "protected save");
    return;
  }
  lastSerialized = JSON.stringify(blob);
  const { error } = await supabase.from("progress").upsert({
    user_id: currentUser.id,
    data: blob,
    version: PERSIST_VERSION,
    updated_at: new Date().toISOString(),
  });
  if (!error) {
    cloudHasProgress = hasMeaningfulProgress(blob);
    seenResetAt = Math.max(seenResetAt, resetAt); // receipt spent
  }
  useStore.getState().setAuth(
    error ? { status: "error", error: error.message } : { status: "synced", error: null }
  );
  // Tell the learner, but only if they were owed an answer (markImportantChange).
  useStore.getState().resolveSyncNotice(!error, error?.message);
}

function scheduleUpload() {
  if (!currentUser) return;
  useStore.getState().setAuth({ status: "syncing" });
  clearTimeout(uploadTimer);
  uploadTimer = setTimeout(() => uploadNow().catch(() => {}), DEBOUNCE_MS);
}

// Fires on every store change; uploads (debounced) when the synced slice really
// changed and we're signed in. Ignores changes we caused by applying a pull.
function onStoreChange() {
  if (!currentUser || applyingCloud) return;
  const ser = JSON.stringify(blobNow());
  if (ser === lastSerialized) return;
  lastSerialized = ser;
  useStore.getState().bumpModified();
  scheduleUpload();
}

async function onSignIn(u) {
  if (currentUser && currentUser.id === u.id) return; // already handled (e.g. token refresh)
  currentUser = u;
  const st = useStore.getState();
  st.setAuth({ user: { id: u.id, email: u.email ?? null }, status: "syncing", error: null });
  // Best-effort: pull the chosen username so the UI can greet by handle.
  try {
    const { data: prof } = await supabase
      .from("profiles")
      .select("username")
      .eq("id", u.id)
      .maybeSingle();
    if (prof?.username)
      useStore.getState().setAuth({ user: { id: u.id, email: u.email ?? null, username: prof.username } });
  } catch {
    /* non-fatal — greeting just falls back to the display name */
  }
  try {
    const cloud = await fetchCloud(u.id);
    // Seed the safety interlock from the real cloud state BEFORE any local write can
    // fire an upload — this is what protects a real cloud from a torn local.
    cloudHasProgress = hasMeaningfulProgress(cloud?.blob);
    // Anything the device already carried is history as far as the upload guard is
    // concerned; only a reset performed from here on counts as live intent.
    seenResetAt = Number(useStore.getState().resetAt) || 0;
    const local = { updatedAt: useStore.getState().lastModified ?? 0, blob: blobNow() };
    const decision = chooseSource(local, cloud);
    if (decision === "pull" && cloud) {
      let blob = cloud.blob;
      if ((cloud.version ?? 1) < PERSIST_VERSION) blob = migrateState({ ...blob }, cloud.version);
      applyingCloud = true;
      useStore.getState().hydrateFromCloud(blob);
      lastSerialized = JSON.stringify(blobNow());
      applyingCloud = false;
      cloudHasProgress = hasMeaningfulProgress(blob);
      useStore.getState().setAuth({ status: "synced" });
    } else {
      await uploadNow(); // push — also creates the row on first sign-in
    }
  } catch (e) {
    useStore.getState().setAuth({ status: "error", error: String(e?.message ?? e) });
  } finally {
    // The initial post-sign-in pull is now resolved (pulled, pushed, or errored).
    // Release the onboarding gate: a returning user's `onboarded` has landed, and
    // any later "syncing" is just a debounced upload — which must NOT splash-unmount
    // the onboarding flow (that was the "Continue does nothing" trap). See App.jsx.
    useStore.getState().setAuth({ initialSyncDone: true });
  }
}

// Active pull: fetch the cloud blob and apply it IF it's strictly newer than the
// local copy (another device saved more recently). Guarded by the same
// last-write-wins timestamp check as sign-in, and by `applyingCloud` so it never
// fights its own subscription. Best-effort — a failed pull is silently ignored.
async function pullFromCloud() {
  if (!currentUser || applyingCloud) return;
  try {
    const cloud = await fetchCloud(currentUser.id);
    if (!cloud || cloud.blob == null) return;
    const localAt = Number(useStore.getState().lastModified) || 0;
    const cloudAt = Number(cloud.updatedAt) || 0;
    if (cloudAt <= localAt) return; // local is same-or-newer — nothing to pull
    // SAFETY INTERLOCK: never pull an empty cloud over a local that has real
    // progress, even when the cloud row is newer (an empty profile pushed from a
    // torn session carries a fresh timestamp). Protects this device from a remote
    // wipe — the mirror of the uploadNow guard.
    // ...unless that empty cloud is another device's deliberate reset, newer than
    // anything this device has done. Same asymmetry as the upload guard, same test:
    // an explicit, timestamped receipt beats a merely-empty state, and nothing else does.
    const remoteReset = Number(cloud.blob?.resetAt) || 0;
    const deliberateRemote = remoteReset > (Number(useStore.getState().resetAt) || 0) && remoteReset > localAt;
    if (!hasMeaningfulProgress(cloud.blob) && hasMeaningfulProgress(blobNow()) && !deliberateRemote) {
      console.warn("[sync] refused to pull an empty cloud over local real progress");
      return;
    }
    let blob = cloud.blob;
    if ((cloud.version ?? 1) < PERSIST_VERSION) blob = migrateState({ ...blob }, cloud.version);
    applyingCloud = true;
    useStore.getState().hydrateFromCloud(blob);
    lastSerialized = JSON.stringify(blobNow());
    applyingCloud = false;
    cloudHasProgress = hasMeaningfulProgress(blob);
    useStore.getState().setAuth({ status: "synced" });
  } catch {
    /* offline / transient — try again on the next focus */
  }
}

function onSignOut() {
  currentUser = null;
  clearTimeout(uploadTimer);
  cloudHasProgress = false; // re-seeded from the fetch on the next sign-in
  seenResetAt = 0; // re-seeded on the next sign-in, from that device's own receipt
  // Local progress stays as the offline cache; next sign-in re-syncs it. Reset
  // initialSyncDone so the next sign-in waits out ITS first pull before the
  // onboarding gate decides anything.
  useStore.getState().setAuth({ user: null, status: "idle", error: null, initialSyncDone: false });
}

// --- auth actions (username + email + password) ------------------------------
// All return { ok: true } or { error: "<message>" } so the UI can show a line
// without importing the Supabase SDK. The onAuthStateChange listener handles the
// resulting session (sync + greeting); these just kick it off.

// Sign up needs all three. Supabase auth is keyed on the real email (so reset
// works); the username lives in `profiles` for login-by-handle.
async function signUp({ username, email, password }) {
  const uname = (username ?? "").trim();
  const mail = (email ?? "").trim();
  try {
    const { data: free, error: rpcErr } = await supabase.rpc("username_available", { p_username: uname });
    if (rpcErr) return { error: rpcErr.message };
    if (!free) return { error: "That username is taken." };

    const { data, error } = await supabase.auth.signUp({ email: mail, password });
    if (error) return { error: error.message };
    if (!data.session) {
      // "Confirm email" is still ON in Supabase — the user can't log straight in.
      return { error: "Check your email to confirm your account, then log in." };
    }
    const { error: pErr } = await supabase
      .from("profiles")
      .insert({ id: data.user.id, username: uname, email: mail });
    if (pErr) return { error: pErr.message };
    return { ok: true }; // onAuthStateChange → onSignIn fires next
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
}

// Log in with username + password: resolve the handle to its email, then auth.
async function signIn({ username, password }) {
  const uname = (username ?? "").trim();
  try {
    const { data: email, error: rpcErr } = await supabase.rpc("email_for_username", { p_username: uname });
    if (rpcErr) return { error: rpcErr.message };
    if (!email) return { error: "No account with that username." };
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: "Wrong username or password." };
    return { ok: true };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
}

// Password reset goes to the real email on file (Supabase sends the link).
async function requestPasswordReset(email) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail((email ?? "").trim(), {
      redirectTo: window.location.origin,
    });
    return error ? { error: error.message } : { ok: true };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
}

// Set a new password (used from the recovery screen after the email link, or a
// signed-in user changing it). Clears the recovery flag on success.
async function updatePassword(password) {
  try {
    const { error } = await supabase.auth.updateUser({ password });
    if (error) return { error: error.message };
    useStore.getState().setAuth({ recovery: false });
    return { ok: true };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
}

// Call once at startup. When Supabase isn't configured (no env, e.g. CI/local),
// mark auth ready+unconfigured so the gate falls through to the app.
export function initCloudSync() {
  if (!isCloudConfigured) {
    useStore.getState().setAuth({ configured: false, ready: true });
    return;
  }
  useStore.getState().setAuth({ configured: true });

  // Expose auth actions through the store so the UI never imports the SDK.
  useStore.setState({
    signUp,
    signIn,
    requestPasswordReset,
    updatePassword,
    signOut: () => supabase.auth.signOut(),
  });

  // INITIAL_SESSION / SIGNED_IN / TOKEN_REFRESHED all arrive here. The first
  // event (session or not) means auth is resolved → the gate can render.
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "PASSWORD_RECOVERY") {
      // Landed via the reset-email link: hold the app and show "set new password".
      useStore.getState().setAuth({
        ready: true,
        recovery: true,
        user: session?.user ? { id: session.user.id, email: session.user.email ?? null } : null,
      });
      return;
    }
    if (session?.user) onSignIn(session.user);
    else onSignOut();
    if (!useStore.getState().auth.ready) useStore.getState().setAuth({ ready: true });
  });

  // Upload local changes (debounced) while signed in.
  useStore.subscribe(onStoreChange);

  // Active pull: when the app returns to the foreground, check for newer progress
  // from another device and apply it. Throttled so a burst of focus/visibility
  // events can't hammer the API. This is what makes sync feel live across devices
  // — without it, a second device only pulls on sign-in or a token refresh.
  let lastPull = 0;
  const maybePull = () => {
    if (!currentUser || document.visibilityState === "hidden") return;
    const now = Date.now();
    if (now - lastPull < 10000) return; // at most once per 10s
    lastPull = now;
    pullFromCloud();
  };
  document.addEventListener("visibilitychange", maybePull);
  window.addEventListener("focus", maybePull);
}
