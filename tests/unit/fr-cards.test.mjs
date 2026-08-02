// French card-routing invariants, asserted against the REAL corpus.
//
// These exist because the French build-out kept producing cards that *routed* but
// didn't *teach* — type:reading and build showed the answer on screen, the particle
// card blanked a word belonging to the next noun. Every one of those was caught by a
// reviewer reading sentences, never by a test, because the suite asserted that a card
// kind APPEARS, not that it asks something. So these lock the properties that make a
// French card a real question.
import { test } from "node:test";
import assert from "node:assert/strict";
import { UNITS } from "../../src/data/index.js";
import { canParticleCloze, particleAfterFront, blankParticle, particleChoices, CLOZE_BLANK } from "../../src/store/cardRouting.js";
import { langScopedIds } from "../../src/store/useStore.js";

const frItems = [];
for (const unit of UNITS)
  if (unit.lang === "fr")
    for (const lesson of unit.lessons)
      for (const def of lesson.items ?? []) frItems.push({ ...def, lang: "fr" });

// Guards every assertion below: if French ever stops loading, these tests must fail
// loudly rather than pass vacuously over an empty array.
test("the French corpus is actually loaded", () => {
  assert.ok(frItems.length > 500, `expected the full French corpus, got ${frItems.length} items`);
});

// --- particle card: the blank must be GOVERNED by the item ---------------------

// Coordinating conjunctions join two things and belong to neither, so blanking one
// grades the item on a fact about the item that was never tested. Articles have the
// same problem pointing the other way (they belong to the FOLLOWING noun).
const NOT_GOVERNED = ["et", "y", "ou", "mais", "donc", "le", "la", "les", "un", "une", "des", "du"];

test("no French particle card blanks a word the item doesn't govern", () => {
  const routing = frItems.filter(canParticleCloze);
  assert.ok(routing.length > 20, `expected a real particle-card population, got ${routing.length}`);

  const bad = routing
    .map((it) => ({ id: it.id, front: it.front, blank: particleAfterFront(it).particle.toLowerCase() }))
    .filter((r) => NOT_GOVERNED.includes(r.blank));

  assert.deepEqual(
    bad,
    [],
    `these blank a word not governed by the item:\n${bad.map((b) => `  ${b.id} (front "${b.front}") blanks "${b.blank}"`).join("\n")}`
  );
});

test("every French particle card blanks exactly one word and offers the answer among its options", () => {
  for (const it of frItems.filter(canParticleCloze)) {
    const blanked = blankParticle(it);
    assert.equal(
      blanked.split(CLOZE_BLANK).length - 1,
      1,
      `${it.id}: expected exactly one blank, got "${blanked}"`
    );
    // The card must be answerable: the correct option has to be in the option set,
    // and it must not also appear as a distractor.
    const opts = particleChoices(it);
    const correct = opts.filter((o) => o.correct);
    assert.equal(correct.length, 1, `${it.id}: expected exactly 1 correct option`);
    const texts = opts.map((o) => o.text.toLowerCase());
    assert.equal(new Set(texts).size, texts.length, `${it.id}: duplicate options ${texts.join(", ")}`);
  }
});

test("a French particle card never blanks the item's own front", () => {
  for (const it of frItems.filter(canParticleCloze)) {
    const { particle } = particleAfterFront(it);
    assert.notEqual(
      particle.toLowerCase(),
      String(it.front).toLowerCase(),
      `${it.id}: blanks its own front, so the prompt is the answer`
    );
  }
});

// --- dictation reveal: the front must not be the answer for a Latin script -----

// TypeCard's "Can't hear it? Show it" escape reveals `front` and grades against
// `reading`. For Japanese that's a real transliteration (おはよう → ohayō). This test
// documents WHY the same escape had to be made ja-only for French: the fold from
// front to reading is mechanical, so revealing the front hands over the answer.
test("French front→reading is a mechanical fold, so revealing the front reveals the answer", () => {
  const identical = frItems.filter((i) => i.reading === i.front);
  assert.ok(
    identical.length > 100,
    `expected many fr items where reading === front (got ${identical.length}) — this is the premise for the ja-only dictation reveal`
  );
});

// --- dev seeders are language-scoped -------------------------------------------

test("langScopedIds restricts to one language and preserves registration order", () => {
  const items = {
    "ja-a": { lang: "ja" },
    "fr-a": { lang: "fr" },
    "ja-b": { lang: "ja" },
    "fr-b": { lang: "fr" },
  };
  assert.deepEqual(langScopedIds(items, "fr"), ["fr-a", "fr-b"]);
  assert.deepEqual(langScopedIds(items, "ja"), ["ja-a", "ja-b"]);
  // null = every language, the pre-scoping behaviour
  assert.deepEqual(langScopedIds(items, null), ["ja-a", "fr-a", "ja-b", "fr-b"]);
  // an unknown language seeds nothing rather than falling back to everything
  assert.deepEqual(langScopedIds(items, "de"), []);
});

test("the seeders' default order is ja-first, which is why scoping was required", () => {
  // The regression this guards: devLearnItems walked Object.keys(items) and took the
  // first n. Registration is ja-first, so "Learn 20" on the French panel wrote REAL
  // progress against twenty Japanese items.
  const items = {};
  for (const unit of UNITS)
    for (const lesson of unit.lessons)
      for (const def of lesson.items ?? []) items[def.id] = { lang: unit.lang };

  const firstTwenty = langScopedIds(items, null).slice(0, 20);
  assert.ok(
    firstTwenty.every((id) => items[id].lang === "ja"),
    "unscoped seeding starts with Japanese — scoping is what makes the French panel correct"
  );

  const frScoped = langScopedIds(items, "fr").slice(0, 20);
  assert.equal(frScoped.length, 20, "French has enough items to seed 20");
  assert.ok(frScoped.every((id) => items[id].lang === "fr"), "scoped seeding stays in French");
});
