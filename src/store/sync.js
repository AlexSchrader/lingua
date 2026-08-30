// Cloud-sync decision logic — PURE and dependency-free so it's unit-tested in
// isolation (no Supabase, no network). The actual transport (Supabase client,
// auth, debounced upload) lives in the wiring layer; this module only answers
// the one question that's easy to get dangerously wrong:
//
//   "On sign-in, should this device PUSH its local progress up, or PULL the
//    cloud's progress down?"
//
// Model: last-write-wins by timestamp, with a new-device safety. Each cloud row
// carries an `updatedAt`; the local store carries a `lastModified` (bumped on any
// progress change). Simultaneous edits on two devices are vanishingly rare for a
// solo learner, so a merge engine isn't worth the complexity or the risk — but
// silently clobbering real progress IS the thing to prevent, so:
//
//   - No cloud row yet            → PUSH  (first login = migrate this device up)
//   - Local has no real progress  → PULL  (fresh device must not overwrite cloud)
//   - Cloud newer than local      → PULL
//   - otherwise                   → PUSH

// The persisted slice that travels to/from the cloud. Must mirror `partialize`
// in useStore.js — keep the two in lockstep when either changes.
export const SYNC_KEYS = ["items", "languages", "streak", "stats", "daily", "devMode", "settings", "profile", "milestonesEarned", "resetAt"];

// Slim the item map down to a PROGRESS OVERLAY: only the mutable fields (rung +
// FSRS srs) of items the learner has actually touched (rung > 0). Everything else
// — the front/reading/meaning/example content, and the thousands of untouched
// rung-0 items — is reconstructed from the curriculum seed on load, so it never
// needs to travel to storage or the cloud. This is what keeps the persisted blob
// (and the Supabase row) a few KB instead of multiple MB; the full deck of 5,500+
// items was blowing past mobile Safari's ~5MB localStorage quota (a crash on boot).
export function slimItems(items = {}) {
  const out = {};
  for (const id in items) {
    const it = items[id];
    if ((it?.rung ?? 0) > 0) out[id] = { rung: it.rung, srs: it.srs };
  }
  return out;
}

// Pull just the synced slice out of a full store snapshot. Items are slimmed to the
// progress overlay so the cloud blob stays tiny and can't drift into the localStorage
// quota problem either. hasMeaningfulProgress still works (it keys on rung > 0, which
// is exactly what survives the slim).
export function extractProgress(state = {}) {
  const out = {};
  for (const k of SYNC_KEYS) if (state[k] !== undefined) out[k] = state[k];
  if (out.items) out.items = slimItems(out.items);
  return out;
}

// Does this blob represent a learner who has actually done something? A brand-new
// device (seeded items at rung 0, no streak/stats) has NO meaningful progress, so
// signing in there must PULL the cloud rather than push an empty store over it.
export function hasMeaningfulProgress(blob = {}) {
  const items = blob.items ?? {};
  for (const id in items) {
    if ((items[id]?.rung ?? 0) > 0) return true;
  }
  // The store's streak shape is { current, longest, ... }. This used to read
  // `blob.streak?.count` — a field that never existed — so a streak alone never
  // counted as progress and the guard was weaker than it looked. Kept `count` as a
  // fallback only for paranoia; `current` is the real field.
  if ((blob.streak?.current ?? blob.streak?.count ?? 0) > 0) return true;
  const stats = blob.stats ?? {};
  for (const k in stats) {
    if (Number(stats[k]) > 0) return true;
  }
  return false;
}

// The core decision. `local` / `cloud` are { updatedAt:number|null, blob:object|null }.
// `cloud` is null when no row exists yet. Returns "push" | "pull".
//
// The ONE invariant that matters: real progress is never overwritten by an empty
// state, in EITHER direction, no matter the timestamps. Timestamps only break ties
// between two states that both have progress (or are both empty). A "newer" empty
// blob — e.g. one an earlier torn/hot-reloaded session pushed up — must never win
// over a device that actually has the learner's data. (That asymmetry is exactly
// how a real profile got wiped; see fix/sync-never-overwrite-real-progress.)
// Was this empty local state RESET ON PURPOSE, after the cloud row was written?
// That is the one case where an empty local legitimately beats a cloud that holds
// progress — and it is what separates "the learner tapped Reset everything" from
// the torn/fresh/hot-reloaded empty state the guards above exist to reject.
//
// The `>` against the cloud's own timestamp is what keeps this safe: a STALE reset
// (one from before the cloud was last written) loses, so an old receipt sitting in
// a persisted blob can never resurrect itself and wipe newer work. Only a reset
// that happened after the last cloud write wins.
export function isDeliberateReset(local, cloud) {
  const resetAt = Number(local?.blob?.resetAt) || 0;
  return resetAt > 0 && resetAt > (Number(cloud?.updatedAt) || 0);
}

export function chooseSource(local, cloud) {
  if (!cloud || cloud.blob == null) return "push"; // first login: migrate up
  const localHas = hasMeaningfulProgress(local?.blob);
  const cloudHas = hasMeaningfulProgress(cloud?.blob);
  // An intentional reset is a real edit that happens to be empty. Without this the
  // rule below sends it straight back down: reset, reopen, progress returns — and
  // no amount of waiting helps, because the reset was never the newer state as far
  // as these guards could tell.
  if (!localHas && cloudHas && isDeliberateReset(local, cloud)) return "push";
  if (!localHas && cloudHas) return "pull"; // fresh/empty device must not overwrite real cloud
  if (localHas && !cloudHas) return "push"; // real device must not be overwritten by empty cloud
  const localAt = Number(local?.updatedAt) || 0;
  const cloudAt = Number(cloud?.updatedAt) || 0;
  return cloudAt > localAt ? "pull" : "push";
}
