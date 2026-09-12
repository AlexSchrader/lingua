// No typed card may be answerable by typing its own prompt back.
//
// THE FAILURE. A typed card shows one side and grades the other. When the two are
// the same string — or the same after the grader's folding — the learner reads the
// prompt, types it, and is marked correct without recalling anything. Measured on
// the live corpus before this guard: 43 items where typing `meaning` satisfied
// checkProduce, 31 where typing `front` satisfied checkMeaning. 74 free cards across
// fr/es/no.
//
// THREE CAUSES, all real content, none of them authoring mistakes:
//   * identical cognates — fr "important"/"important", "possible"/"possible";
//   * the ACCENT FOLD — checkReading strips diacritics, so "zero" is accepted for
//     "zéro" and "legal" for "légal". The accent is the entire lesson in those
//     items and it is not enforced;
//   * fr-u27 "Les sons", where the meaning restates the front and explains it
//     ("œ — o and e fused"). The prompt contains the answer in plain sight, and
//     type:meaning asked the learner to TYPE A DEFINITION rather than a word.
//
// This is the same shape as type:reading, which was disabled for Latin script once
// it was found to be a copy task. The item is never dropped — it routes to a card
// that still tests something (dictation, cloze, speak, sentence-build).
import { test } from "node:test";
import assert from "node:assert/strict";
import { UNITS } from "../../src/data/index.js";
import { reviewStepFor } from "../../src/store/reviewStep.js";
import { checkProduce, checkMeaning } from "../../src/store/answer.js";

const kind = (s) => (s.mode ? `${s.kind}:${s.mode}` : s.kind);

function itemsWithLang() {
  return UNITS.flatMap((u) =>
    (u.lessons ?? []).flatMap((l) => (l.items ?? []).map((i) => ({ ...i, lang: u.lang })))
  );
}

const ALL = itemsWithLang();

test("the corpus is loaded, so nothing below passes vacuously", () => {
  assert.ok(ALL.length > 5000, `expected the real corpus, got ${ALL.length} items`);
});

test("no type:produce card is answerable by typing its own prompt", () => {
  const free = ALL.filter((i) => {
    if (!i.meaning) return false;
    if (kind(reviewStepFor({ ...i, rung: 3 })) !== "type:produce") return false;
    try { return checkProduce(String(i.meaning), i) === true; } catch { return false; }
  });
  assert.deepEqual(
    free.slice(0, 8).map((i) => `${i.id} "${i.meaning}" -> "${i.front}"`),
    [],
    `${free.length} produce cards grade correct for typing the prompt back`
  );
});

test("no type:meaning card is answerable by typing its own prompt", () => {
  const free = ALL.filter((i) => {
    if (!i.front) return false;
    if (kind(reviewStepFor({ ...i, rung: 2 })) !== "type:meaning") return false;
    try { return checkMeaning(String(i.front), i) === true; } catch { return false; }
  });
  assert.deepEqual(
    free.slice(0, 8).map((i) => `${i.id} "${i.front}" -> "${i.meaning}"`),
    [],
    `${free.length} meaning cards grade correct for typing the prompt back`
  );
});

test("a freed item still gets a card — it is rerouted, never dropped", () => {
  const degenerate = ALL.filter((i) => {
    try {
      return (i.meaning && checkProduce(String(i.meaning), i)) || (i.front && checkMeaning(String(i.front), i));
    } catch { return false; }
  });
  assert.ok(degenerate.length > 0, "expected some degenerate items to exist in the corpus");
  for (const i of degenerate) {
    for (const rung of [2, 3]) {
      const step = reviewStepFor({ ...i, rung });
      assert.ok(step && step.kind, `${i.id} at rung ${rung} produced no card`);
    }
  }
});

// fr-u27 is the unit that motivated this: its meanings restate the front and then
// describe the sound, so BOTH typed variants were degenerate there.
test("fr-u27 'Les sons' no longer asks the learner to type a definition", () => {
  const sons = ALL.filter((i) => i.id.startsWith("fr-u27"));
  assert.ok(sons.length > 0, "fr-u27 should exist");
  for (const i of sons) {
    for (const rung of [2, 3]) {
      const k = kind(reviewStepFor({ ...i, rung }));
      if (k !== "type:meaning") continue;
      assert.ok(
        !checkMeaning(String(i.front), i),
        `${i.id} still types its own definition: "${i.meaning}"`
      );
    }
  }
});
