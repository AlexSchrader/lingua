import test from "node:test";
import assert from "node:assert/strict";
import { slimItems } from "../../src/store/sync.js";
import { reconstructItems } from "../../src/store/useStore.js";
import { seedItems } from "../../src/data/index.js";

// The persist size fix: storage holds only a slim { rung, srs } overlay of touched
// items; the full deck (content + untouched items) is rebuilt from the curriculum
// seed on load. These tests prove the round-trip is lossless for progress and that
// the reconstructed deck is complete and content-bearing — the property that let the
// change ship without touching how the rest of the app reads items.

test("slim → reconstruct is lossless for touched-item progress", () => {
  const ids = Object.keys(seedItems()).slice(0, 5);
  const [a, b] = ids;
  const srsA = { due: "2026-05-01T00:00:00Z", reps: 7, state: 2, stability: 40 };
  const srsB = { due: "2026-06-01T00:00:00Z", reps: 2, state: 1, stability: 9 };

  // A full in-memory deck with two items progressed.
  const full = reconstructItems({}); // fresh full deck
  full[a] = { ...full[a], rung: 4, srs: srsA };
  full[b] = { ...full[b], rung: 1, srs: srsB };

  const overlay = slimItems(full);
  assert.deepEqual(Object.keys(overlay).sort(), [a, b].sort(), "only touched items persist");

  const rebuilt = reconstructItems(overlay);
  // Progress survives exactly.
  assert.equal(rebuilt[a].rung, 4);
  assert.deepEqual(rebuilt[a].srs, srsA);
  assert.equal(rebuilt[b].rung, 1);
  assert.deepEqual(rebuilt[b].srs, srsB);
});

test("reconstruct yields the COMPLETE deck with content, untouched items fresh", () => {
  const seed = seedItems();
  const rebuilt = reconstructItems({}); // no progress at all
  assert.equal(Object.keys(rebuilt).length, Object.keys(seed).length, "every item is present");
  const anyId = Object.keys(seed)[0];
  assert.equal(rebuilt[anyId].rung, 0, "untouched item is rung 0");
  assert.ok(rebuilt[anyId].front !== undefined, "content is present (rebuilt from seed)");
  assert.ok(rebuilt[anyId].srs, "a fresh srs card is attached");
});

test("reconstruct tolerates a legacy FULL-item overlay (old blobs)", () => {
  // Old blobs stored the whole item, not a slim overlay. Reconstruct must still
  // read rung/srs from it and take the latest content from the seed.
  const id = Object.keys(seedItems())[0];
  const legacy = { [id]: { rung: 3, srs: { reps: 5 }, front: "STALE", meaning: "stale" } };
  const rebuilt = reconstructItems(legacy);
  assert.equal(rebuilt[id].rung, 3, "progress read from the legacy item");
  assert.notEqual(rebuilt[id].front, "STALE", "content comes from the current seed, not the stale blob");
});
