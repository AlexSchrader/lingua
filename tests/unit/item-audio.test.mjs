import test from "node:test";
import assert from "node:assert/strict";
import { clipUrls, reinforcePlan } from "../../src/store/itemAudio.js";

// WHY THIS FILE EXISTS.
//
// `useItemAudio` short-circuits on IS_WEBDRIVER, so under Playwright the Continue
// gate never engages at all. The smoke suite is therefore structurally incapable of
// covering it — a green smoke run says nothing about whether the gate is correct.
// `reinforcePlan` is the gate decision extracted as a pure function precisely so it
// CAN be tested. Keep the coverage here.
//
// The defect these tests pin down: the gate used to disable Continue first and only
// discover the clip was missing when the fetch 404'd a second later, so every silent
// item cost a full REINFORCE_DELAY_MS of dead button for audio that was never coming.
// de and no are 100% silent and pt is 60% silent, so that was most of the corpus.

const ON = { enabled: true, isWebdriver: false };

test("an item WITH a clip closes the gate — this is the feature working", () => {
  const { urls, gate } = reinforcePlan({ lang: "fr", id: "fr-u1l1-bonjour", ...ON });
  assert.equal(gate, true);
  assert.deepEqual(urls, ["/audio/fr/fr-u1l1-bonjour.mp3"]);
});

test("an item with NO clip leaves Continue enabled — no silent dead zone", () => {
  for (const [lang, id] of [
    ["de", "de-u1l1-ist"], // de has no clips at all
    ["no", "no-u1l1-avaere"], // nor does no
    ["pt", "pt-u1l1-econj"], // pt is ~60% silent
    ["fr", "fr-u27l1-eaigu"], // and individual items go silent when audio is deleted
  ]) {
    const { urls, gate } = reinforcePlan({ lang, id, ...ON });
    assert.equal(gate, false, `${id} must not gate Continue — it has no clip`);
    assert.deepEqual(urls, [], `${id} must produce no urls`);
  }
});

test("audio turned off never gates, even for an item that has a clip", () => {
  const { urls, gate } = reinforcePlan({
    lang: "ja", id: "ja-u1l1-a", enabled: false, isWebdriver: false,
  });
  assert.equal(gate, false);
  assert.deepEqual(urls, []);
});

test("under WebDriver nothing gates — the smoke suite must never block on audio", () => {
  const { gate } = reinforcePlan({ lang: "ja", id: "ja-u1l1-a", enabled: true, isWebdriver: true });
  assert.equal(gate, false);
});

test("a chained clip (the particle's sound) is appended in order", () => {
  const { urls, gate } = reinforcePlan({
    lang: "ja", id: "ja-u1l1-a", then: ["ja-u1l1-i"], ...ON,
  });
  assert.equal(gate, true);
  assert.deepEqual(urls, ["/audio/ja/ja-u1l1-a.mp3", "/audio/ja/ja-u1l1-i.mp3"]);
});

test("a missing id in a chain is dropped, and the rest still plays", () => {
  const { urls, gate } = reinforcePlan({
    lang: "ja", id: "ja-u1l1-a", then: ["ja-nope-not-a-real-id"], ...ON,
  });
  assert.equal(gate, true);
  assert.deepEqual(urls, ["/audio/ja/ja-u1l1-a.mp3"]);
});

test("a chain where EVERY id is missing does not gate", () => {
  const { gate } = reinforcePlan({
    lang: "de", id: "de-u1l1-ist", then: ["de-u1l1-das"], ...ON,
  });
  assert.equal(gate, false);
});

test("clipUrls filters against the manifest and preserves order", () => {
  assert.deepEqual(
    clipUrls("ja", ["ja-u1l1-a", "ja-not-real", "ja-u1l1-i"]),
    ["/audio/ja/ja-u1l1-a.mp3", "/audio/ja/ja-u1l1-i.mp3"],
  );
  assert.deepEqual(clipUrls("de", ["de-u1l1-ist"]), []);
});
