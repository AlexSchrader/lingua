// Cloud sync orchestration — the side-effecting layer that ties the Supabase
// client, the store, and the pure decision logic (sync.js) together. Imported
// dynamically at startup (main.jsx) so the Supabase SDK stays out of the initial
// render path. The push-vs-pull decision lives in sync.js (unit-tested); this
// file is the plumbing: auth listener, fetch/upload, debounced uploads.
import { supabase, isCloudConfigured } from "../lib/supabase.js";
import { useStore } from "./useStore.js";
import { PERSIST_VERSION, migrateState } from "./migrate.js";
import { chooseSource, extractProgress } from "./sync.js";

const DEBOUNCE_MS = 1500;

let currentUser = null;
let lastSerialized = null;
let applyingCloud = false; // guards the pull → setState → subscription loop
let uploadTimer = null;

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
  lastSerialized = JSON.stringify(blob);
  const { error } = await supabase.from("progress").upsert({
    user_id: currentUser.id,
    data: blob,
    version: PERSIST_VERSION,
    updated_at: new Date().toISOString(),
  });
  useStore.getState().setAuth(
    error ? { status: "error", error: error.message } : { status: "synced", error: null }
  );
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
    const local = { updatedAt: useStore.getState().lastModified ?? 0, blob: blobNow() };
    const decision = chooseSource(local, cloud);
    if (decision === "pull" && cloud) {
      let blob = cloud.blob;
      if ((cloud.version ?? 1) < PERSIST_VERSION) blob = migrateState({ ...blob }, cloud.version);
      applyingCloud = true;
      useStore.getState().hydrateFromCloud(blob);
      lastSerialized = JSON.stringify(blobNow());
      applyingCloud = false;
      useStore.getState().setAuth({ status: "synced" });
    } else {
      await uploadNow(); // push — also creates the row on first sign-in
    }
  } catch (e) {
    useStore.getState().setAuth({ status: "error", error: String(e?.message ?? e) });
  }
}

function onSignOut() {
  currentUser = null;
  clearTimeout(uploadTimer);
  // Local progress stays as the offline cache; next sign-in re-syncs it.
  useStore.getState().setAuth({ user: null, status: "idle", error: null });
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
}
