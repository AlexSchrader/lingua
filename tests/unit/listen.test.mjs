import { test } from "node:test";
import assert from "node:assert/strict";
import { hasAudio, shouldListen, LISTEN_SHARE } from "../../src/store/cardRouting.js";
import { AUDIO_IDS } from "../../src/data/audioManifest.js";

// The listening card must NEVER be routed for an item without a clip, and the
// interleave must be deterministic (no Math.random) so coverage is reliable.

test("hasAudio reflects the generated manifest", () => {
  const withClip = [...AUDIO_IDS][0];
  assert.equal(hasAudio({ id: withClip }), true);
  assert.equal(hasAudio({ id: "definitely-not-a-real-id" }), false);
  assert.equal(hasAudio(null), false);
});

test("shouldListen is false for any item with no clip (the guard)", () => {
  assert.equal(shouldListen({ id: "no-such-item-xyz" }), false);
});

test("shouldListen only fires inside the interleave share, deterministically", () => {
  const withClip = [...AUDIO_IDS];
  const listens = withClip.filter((id) => shouldListen({ id }));
  // Deterministic (same result twice) …
  assert.deepEqual(
    listens,
    withClip.filter((id) => shouldListen({ id }))
  );
  // … and roughly the configured share, never all-or-nothing.
  const ratio = listens.length / withClip.length;
  assert.ok(ratio > 0 && ratio < 1, `expected a partial share, got ${ratio}`);
  assert.ok(Math.abs(ratio - LISTEN_SHARE) < 0.15, `share ${ratio} far from ${LISTEN_SHARE}`);
});
