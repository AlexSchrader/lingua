import test from "node:test";
import assert from "node:assert/strict";
import { buildOptions, confusableGlyphs } from "../../src/store/distractors.js";
import { seedItems } from "../../src/data/index.js";

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

// --- the reverse card must never offer a second right answer -------------------
// On choice:reverse the prompt is item.meaning and the options are fronts, so a
// peer whose accept[] contains the prompt string is a CORRECT answer being shown
// as a distractor. Grading is an identity flag that never consults accept[], so
// picking it is marked wrong — the app punishing the learner for knowing more.

const senseKey = (s) =>
  String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/\s+/g, " ").trim().replace(/^(?:a|an|the)\s+/, "").replace(/^to\s+/, "");
const claimedSenses = (c) =>
  new Set([c?.meaning, ...(c?.accept || [])].filter(Boolean)
    .flatMap((g) => String(g).split(/\s*(?:[/,;]|or)\s*/))
    .map(senseKey).filter(Boolean));

test("reverse choice never offers an option that also claims the prompt sense", () => {
  const all = Object.values(seedItems());
  const byFront = new Map(all.map((i) => [i.lang + "|" + i.front, i]));
  let offenders = [];
  for (const it of all.filter((i) => i.type === "vocab")) {
    const ps = senseKey(it.meaning);
    if (!ps) continue;
    for (let r = 0; r < 3; r++)
      for (const o of buildOptions(it, all, 4, "front")) {
        if (o.correct) continue;
        const cand = byFront.get(it.lang + "|" + o.text);
        if (cand && claimedSenses(cand).has(ps))
          offenders.push(it.id + " offered " + cand.id + ' for prompt "' + it.meaning + '"');
      }
  }
  assert.deepEqual(offenders.slice(0, 5), [], offenders.length + " ambiguous option(s)");
});

test("...but the gender contrasts SURVIVE — they are the point of the card", () => {
  // un "a (masculine)" / une "a (feminine)" share the sense "a" once parentheses
  // are stripped. The displayed parenthetical is what makes the card answerable,
  // so the ambiguity test keeps parentheses and these stay as distractors. A
  // whole-sense-set comparison would delete the best pairs in the corpus.
  const all = Object.values(seedItems());
  const byId = Object.fromEntries(all.map((i) => [i.id, i]));
  for (const [id, peer] of [["fr-u2l1-un", "une"], ["fr-u2l1-le", "la"]]) {
    const item = byId[id];
    if (!item) continue;
    let seen = 0;
    for (let r = 0; r < 60; r++)
      if (buildOptions(item, all, 4, "front").some((o) => o.text === peer && !o.correct)) seen++;
    assert.ok(seen > 0, id + ': lost "' + peer + '" as a distractor — over-filtering');
  }
});
