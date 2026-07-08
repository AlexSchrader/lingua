import test from "node:test";
import assert from "node:assert/strict";
import { buildOptions, confusableGlyphs } from "../../src/store/distractors.js";

test("confusableGlyphs maps the classic look-alikes, symmetric, empty for unknown", () => {
  const shi = confusableGlyphs("シ");
  assert.ok(shi.has("ツ") && shi.has("ソ") && shi.has("ン"));
  assert.ok(confusableGlyphs("ツ").has("シ")); // symmetric within a group
  assert.ok(!confusableGlyphs("シ").has("シ")); // never itself
  assert.equal(confusableGlyphs("A").size, 0); // unknown glyph → no look-alikes
});

test("buildOptions front-loads confusable kana as the wrong options", () => {
  const items = [
    { id: "s",  type: "kana", front: "シ", reading: "shi", unit: 1 },
    { id: "t",  type: "kana", front: "ツ", reading: "tsu", unit: 1 },
    { id: "so", type: "kana", front: "ソ", reading: "so",  unit: 1 },
    { id: "n",  type: "kana", front: "ン", reading: "n",   unit: 1 },
    { id: "ka", type: "kana", front: "カ", reading: "ka",  unit: 1 }, // non-look-alike
    { id: "ki", type: "kana", front: "キ", reading: "ki",  unit: 1 }, // non-look-alike
  ];
  const opts = buildOptions(items[0], items, 4);
  const wrong = opts.filter((o) => !o.correct).map((o) => o.text).sort();
  assert.deepEqual(wrong, ["n", "so", "tsu"]); // the look-alikes, not ka/ki
  assert.equal(opts.find((o) => o.correct).text, "shi");
});

test("buildOptions still works for a kana with no listed look-alikes", () => {
  const items = [
    { id: "u",  type: "kana", front: "う", reading: "u",  unit: 1 },
    { id: "ka", type: "kana", front: "か", reading: "ka", unit: 1 },
    { id: "ki", type: "kana", front: "き", reading: "ki", unit: 1 },
    { id: "ku", type: "kana", front: "く", reading: "ku", unit: 1 },
  ];
  const opts = buildOptions(items[0], items, 4);
  assert.equal(opts.length, 4);
  assert.equal(opts.filter((o) => o.correct).length, 1);
});
