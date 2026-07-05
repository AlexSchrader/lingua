import { test } from "node:test";
import assert from "node:assert/strict";
import { charDiff } from "../../src/store/answer.js";

test("charDiff flags the differing characters, aligned by position", () => {
  const d = charDiff("tamako", "tamago");
  assert.equal(d.typed.map((c) => c.ch).join(""), "tamako");
  assert.equal(d.answer.map((c) => c.ch).join(""), "tamago");
  // only index 4 differs (k vs g)
  assert.deepEqual(d.typed.map((c) => c.diff), [false, false, false, false, true, false]);
  assert.deepEqual(d.answer.map((c) => c.diff), [false, false, false, false, true, false]);
  assert.equal(d.close, true); // a one-char slip
});

test("charDiff: identical → no diffs, not 'close' (nothing to soften)", () => {
  const d = charDiff("neko", "neko");
  assert.ok(d.typed.every((c) => !c.diff));
  assert.equal(d.close, false);
});

test("charDiff: length mismatch marks the extra tail as differing", () => {
  const d = charDiff("ne", "neko");
  assert.deepEqual(d.answer.map((c) => c.diff), [false, false, true, true]);
});

test("charDiff: wildly different is not 'close'", () => {
  assert.equal(charDiff("xyz", "abc").close, false);
});
