import test from "node:test";
import assert from "node:assert/strict";
import { validateContent, frontKey } from "../../src/data/contract.js";
import { lintCurriculum } from "../../src/data/lint.js";
import { LANGUAGES } from "../../src/data/languages.js";

// Word-front uniqueness is what stops three parallel crews teaching one word twice —
// it has already caught 159 cards of duplication in Spanish B1, and it must stay
// exactly as strict for ordinary vocab.
//
// A CONJUGATION DRILL is the one legitimate exception. "être @ fut-1s" and
// "être @ imperf-1s" are two cards teaching two different things, and the learner
// produces a different answer for each. Keying tagged items on lang+front+conjForm
// is what lets es/unit38-39 and fr/unit45-46 be authored as infinitive + form at all:
// their 96 drill cards draw on ~22 infinitives, so 4 in 9 collide with a sibling.
//
// Both gates enforce this rule — validateContent AND lintCurriculum — so every case
// below is asserted against BOTH. A fix to one and not the other would leave the
// units blocked by whichever gate was missed.

const vocab = (id, front, extra = {}) => ({
  id, type: "vocab", front, reading: front.replace(/[^a-z]/gi, "").toLowerCase(),
  meaning: `${front} (meaning)`, example: { jp: `${front} ici`, en: "x here" },
  accept: [], ...extra,
});

function frUnit(items) {
  return {
    id: "fr-u1", lang: "fr", order: 1, stage: "a1", title: "T",
    lessons: [{
      id: "fr-u1l1", unit: 1, lesson: 1, title: "L", cefr: "A1",
      dominantMode: "recall", canDo: "c", items,
    }],
  };
}

const dupErrors = (units) =>
  validateContent(units, LANGUAGES).errors.filter((m) => /already taught/.test(m));
const dupLintErrors = (units) =>
  (lintCurriculum(units).errors ?? []).filter((m) => /already taught/.test(m));

test("untagged duplicate fronts are still a hard error — in BOTH gates", () => {
  const units = [frUnit([vocab("fr-u1l1-a", "être"), vocab("fr-u1l1-b", "être")])];
  assert.equal(dupErrors(units).length, 1, "validateContent must reject the duplicate");
  assert.equal(dupLintErrors(units).length, 1, "lintCurriculum must reject the duplicate");
});

test("the same infinitive at DIFFERENT conjForms is allowed — the paradigm case", () => {
  const units = [frUnit([
    vocab("fr-u1l1-etre-fut1s", "être", { conjForm: "fut-1s" }),
    vocab("fr-u1l1-etre-imp1s", "être", { conjForm: "imperf-1s" }),
    vocab("fr-u1l1-etre-pres1p", "être", { conjForm: "pres-1p" }),
  ])];
  assert.deepEqual(dupErrors(units), [], "validateContent must allow one entry per form");
  assert.deepEqual(dupLintErrors(units), [], "lintCurriculum must allow one entry per form");
});

test("the same infinitive at the SAME conjForm is still a hard error", () => {
  const units = [frUnit([
    vocab("fr-u1l1-etre-a", "être", { conjForm: "fut-1s" }),
    vocab("fr-u1l1-etre-b", "être", { conjForm: "fut-1s" }),
  ])];
  assert.equal(dupErrors(units).length, 1, "validateContent must reject a real duplicate");
  assert.equal(dupLintErrors(units).length, 1, "lintCurriculum must reject a real duplicate");
});

test("a tagged item never collides with an untagged one of the same front", () => {
  // The infinitive taught as ordinary vocab, and the same verb drilled at a form,
  // are different cards. Keys differ, so neither blocks the other.
  const units = [frUnit([
    vocab("fr-u1l1-etre", "être"),
    vocab("fr-u1l1-etre-fut1s", "être", { conjForm: "fut-1s" }),
  ])];
  assert.deepEqual(dupErrors(units), []);
  assert.deepEqual(dupLintErrors(units), []);
});

test("the key is scoped per language, as before", () => {
  assert.notEqual(frontKey("fr", { front: "être" }), frontKey("es", { front: "être" }));
  assert.equal(frontKey("fr", { front: "être" }), frontKey("fr", { front: "être" }));
  // Tagged vs untagged are different keys; same tag is the same key.
  assert.notEqual(frontKey("fr", { front: "être" }), frontKey("fr", { front: "être", conjForm: "fut-1s" }));
  assert.equal(
    frontKey("fr", { front: "être", conjForm: "fut-1s" }),
    frontKey("fr", { front: "être", conjForm: "fut-1s" })
  );
});
