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

test("buildOptions never crosses languages — a French card offers only French options", () => {
  const items = [
    { id: "fr1", type: "vocab", front: "bonjour", meaning: "hello",  lang: "fr", unit: 1 },
    { id: "fr2", type: "vocab", front: "merci",   meaning: "thank you", lang: "fr", unit: 1 },
    { id: "fr3", type: "vocab", front: "oui",     meaning: "yes",    lang: "fr", unit: 1 },
    { id: "fr4", type: "vocab", front: "non",     meaning: "no",     lang: "fr", unit: 1 },
    { id: "ja1", type: "vocab", front: "ねこ",    meaning: "cat",    lang: "ja", unit: 1 },
    { id: "ja2", type: "vocab", front: "いぬ",    meaning: "dog",    lang: "ja", unit: 1 },
  ];
  const opts = buildOptions(items[0], items, 4);
  const texts = opts.map((o) => o.text);
  assert.ok(!texts.includes("cat") && !texts.includes("dog"), "no ja distractors on a fr card");
  assert.equal(opts.length, 4, "fr pool alone fills the card");
  // And fixtures without a stamped lang keep matching ja items (pre-i18n behavior).
  const bare = { id: "x", type: "vocab", front: "み", meaning: "see", unit: 1 };
  const opts2 = buildOptions(bare, items, 4);
  assert.ok(opts2.map((o) => o.text).some((t) => t === "cat" || t === "dog"));
});
