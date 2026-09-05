import { newCard } from "./srs.js";

// Persisted-state version. Bumped from the implicit v0 (old toy scheduler) to
// v1 when item.srs became an FSRS Card. Increment + extend migrateState for
// future shape changes.
export const PERSIST_VERSION = 1;

// One-time migration run by Zustand's persist on rehydrate. Any item whose srs
// predates FSRS (no stability/difficulty fields) gets a fresh FSRS card, while
// rung and every other piece of progress is preserved. Never throws on missing
// or partial state.
// Mastery counts card-kind passes, which no existing save has — it was a calendar
// quantity before this. A learner who reloads into an all-zero bar has, from where
// they sit, LOST progress, and that is the one outcome that reads as data loss rather
// than a change. So an existing item is credited from the rung it already climbed.
//
// Stored as a single number, not as invented per-kind counts: nobody knows WHICH
// skills were demonstrated, and writing a guess into `passes` would be a lie the UI
// then reports back as fact ("12/15 on listening"). `seeded` is counted toward the
// total and toward nothing else.
//
// Deliberately conservative — a rung is one correct answer — so this is a floor, not
// a reconstruction. Runs once: an item that already has passes or seeded is skipped.
const PASSES_PER_RUNG = 2;

function seedFromRung(item) {
  const rung = Number(item?.rung) || 0;
  if (rung < 1) return item;
  return { ...item, seeded: rung * PASSES_PER_RUNG };
}

export function migrateState(persisted, _version) {
  if (!persisted || !persisted.items) return persisted;
  const items = {};
  for (const [id, it] of Object.entries(persisted.items)) {
    const hasCard =
      it?.srs && it.srs.stability != null && it.srs.difficulty != null;
    const withCard = hasCard ? it : { ...it, srs: newCard() };
    items[id] = it?.passes || it?.seeded != null ? withCard : seedFromRung(withCard);
  }
  return { ...persisted, items };
}
