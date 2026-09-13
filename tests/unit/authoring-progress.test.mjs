import test from "node:test";
import assert from "node:assert/strict";
import { authoringProgress } from "../../src/store/levels.js";

// The Ladder's "planned" badge is DERIVED from the corpus, so it updates as a crew's
// blocks land without anyone remembering to move a number. Three states, and the two
// interesting ones are unreachable against today's corpus — all six languages are
// fully authored, so a regression here stays invisible until the next `scaffold:lang`
// and then ships a wrong badge on a brand-new language. Hence injectable units.
//
// The bug this pins: a freshly scaffolded language has its full complement of LOCKED
// STUB units and zero authored, so authoringProgress returns a TRUTHY { done: 0 },
// and PlannedLanguages' `p ? ... : "planned"` rendered "0/20 UNITS" for a language
// nobody had touched. Guard on `p.done`, never on `p`.

const stub = (lang, order) => ({
  id: `${lang}-u${order}`, lang, order,
  lessons: [{ id: `${lang}-u${order}l1`, locked: true }],
});

const authored = (lang, order) => ({
  id: `${lang}-u${order}`, lang, order,
  lessons: [{ id: `${lang}-u${order}l1`, items: [{ id: `${lang}-u${order}l1-a` }, { id: `${lang}-u${order}l1-b` }] }],
});

test("a language with no units at all returns null", () => {
  assert.equal(authoringProgress("zz", [stub("de", 1)]), null);
});

test("a freshly scaffolded language reports done:0 — the caller must not read it as progress", () => {
  const units = [stub("zz", 1), stub("zz", 2), stub("zz", 3)];
  const p = authoringProgress("zz", units);
  assert.equal(p.done, 0);
  assert.equal(p.total, 3);
  assert.equal(p.complete, false);
  // The trap: p is truthy. Anything rendering a badge must test p.done.
  assert.ok(p, "returns an object, not null — this is why `p ? ...` was wrong");
  assert.equal(Boolean(p.done), false);
});

test("partway through a band reports units done, not items", () => {
  const p = authoringProgress("zz", [authored("zz", 1), stub("zz", 2), stub("zz", 3)]);
  assert.equal(p.done, 1);
  assert.equal(p.total, 3);
  assert.equal(p.complete, false);
  assert.equal(p.items, 2);
});

test("a finished band is complete, and carries the item count", () => {
  const p = authoringProgress("zz", [authored("zz", 1), authored("zz", 2)]);
  assert.equal(p.done, 2);
  assert.equal(p.total, 2);
  assert.equal(p.complete, true);
  assert.equal(p.items, 4);
});

test("units of other languages never leak into the count", () => {
  const p = authoringProgress("zz", [authored("zz", 1), authored("de", 1), stub("no", 1)]);
  assert.equal(p.done, 1);
  assert.equal(p.total, 1);
  assert.equal(p.complete, true);
});
