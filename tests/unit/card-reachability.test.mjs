import test from "node:test";
import assert from "node:assert/strict";
import { reviewStepFor } from "../../src/store/reviewStep.js";
import { seedItems } from "../../src/data/index.js";
import { LIVE_CARD_KINDS } from "../../src/data/contract.js";

// THE FORCING FUNCTION, MEASURED.
//
// CLAUDE.md: "a card kind ships only when it's in LIVE_CARD_KINDS AND exercised by the
// smoke coverage fixture." That fixture is a ~20-card browser session over a handful of
// hand-picked items, so it answers "did these particular items happen to show this kind
// within the budget" — which is a proxy for "is this kind reachable", and the proxy has
// now failed twice in the same place:
//
//   1. the mastery rotation (271d7282) spread kinds across pass-counts, so the session's
//      fixed composition stopped covering them;
//   2. the free-pass guard (bcc26f5f) diverted the `build` exemplar すし to `speak`,
//      because its meaning "sushi" IS its reading.
//
// Both times the KIND was fine — 1,399 ja items still route build — and both times the
// smoke test went red for a reason that had nothing to do with the kind being dead. The
// second time it was "fixed" by driving build from a sandbox, which quietly removed the
// only assertion that build was reachable at all. That is the failure mode this file
// exists to make impossible: it re-measures every kind against the WHOLE corpus, so a
// dead kind fails with a count of 0 and a stale exemplar fails by name.

const ITEMS = Object.values(seedItems());
const RUNGS = [1, 2, 3, 4, 5];
const key = (s) => (s.mode ? `${s.kind}:${s.mode}` : s.kind);

// Every (item, rung) the router can be asked about, tallied once.
const routed = new Map();
for (const item of ITEMS) {
  for (const rung of RUNGS) {
    const k = key(reviewStepFor({ ...item, rung }));
    if (!routed.has(k)) routed.set(k, []);
    routed.get(k).push(`${item.id}@r${rung}`);
  }
}

// `teach` is the lesson card for a rung-0 item — the one live kind the REVIEW router
// never returns. Excluded here by name and asserted below, rather than silently missing.
const LESSON_ONLY = new Set(["teach"]);

test("every live card kind is reachable by real routing over the real corpus", () => {
  const dead = [];
  for (const kind of LIVE_CARD_KINDS) {
    if (LESSON_ONLY.has(kind)) continue;
    const hits = routed.get(kind) ?? [];
    if (!hits.length) dead.push(kind);
  }
  assert.deepEqual(
    dead,
    [],
    `shipped in LIVE_CARD_KINDS but NO item at any rung routes to it: ${dead.join(", ")}`
  );
});

test("teach is lesson-only — it is live, and the review router never returns it", () => {
  assert.ok(LIVE_CARD_KINDS.includes("teach"), "teach is a live kind");
  assert.equal(routed.has("teach"), false, "teach must not come back from reviewStepFor");
});

test("nothing routes to a kind that was never declared live", () => {
  // The reverse direction. A kind reachable but absent from LIVE_CARD_KINDS is a card
  // the contract does not know ships — it would skip the coverage rule entirely.
  const undeclared = [...routed.keys()].filter((k) => !LIVE_CARD_KINDS.includes(k));
  assert.deepEqual(undeclared, [], `routed but not in LIVE_CARD_KINDS: ${undeclared.join(", ")}`);
});

// --- the pins that stop the browser fixture rotting silently -----------------
// These ids and kinds are the exemplars kindFixtureState() in tests/smoke.spec.js seeds.
// If routing moves one of them, THIS fails in about a second and names the item, instead
// of the smoke suite going red 40 seconds in with "kind X not seen".
const FIXTURE_EXEMPLARS = [
  ["ja-u1l1-hai", 1, "listen:choice"],
  ["ja-u1l3-sakana", 1, "choice:reverse"],
  ["ja-u1l1-sayounara", 2, "type:reading"],
  ["ja-u1l2-konbanwa", 2, "listen:type"],
  ["ja-u1l2-kasa", 2, "particle:choice"],
  ["ja-u1l3-shizuka", 2, "cloze:choice"],
  ["ja-u1l1-konnichiwa", 3, "type:produce"],
  ["ja-u1l5-inu", 3, "build"],
  ["ja-u1l2-arigatou", 3, "sentence:build"],
  ["ja-u1l4-tegami", 3, "sentence:build"],
  ["ja-u1l1-iie", 4, "speak"],
];

test("every smoke-fixture exemplar still routes the kind the fixture claims", () => {
  const seed = seedItems();
  const wrong = [];
  for (const [id, rung, expected] of FIXTURE_EXEMPLARS) {
    const item = seed[id];
    if (!item) {
      wrong.push(`${id} — NOT IN THE CORPUS (renamed or deleted by a content PR)`);
      continue;
    }
    const got = key(reviewStepFor({ ...item, rung }));
    if (got !== expected) wrong.push(`${id}@r${rung}: fixture expects ${expected}, routes ${got}`);
  }
  assert.deepEqual(wrong, [], `smoke fixture exemplars are stale:\n  ${wrong.join("\n  ")}`);
});

test("the fixture's exemplars cover every kind its review sessions must show", () => {
  // The fixture also covers teach/choice/trace/type:meaning from the LESSON session
  // (rung-0 items), and conjugate from its sandbox — those are not review-routed here.
  const FROM_LESSON_OR_SANDBOX = new Set(["teach", "choice", "trace", "type:meaning", "conjugate"]);
  const covered = new Set(FIXTURE_EXEMPLARS.map(([, , k]) => k));
  const missing = LIVE_CARD_KINDS.filter(
    (k) => !covered.has(k) && !FROM_LESSON_OR_SANDBOX.has(k)
  );
  assert.deepEqual(missing, [], `no fixture exemplar seeds these review kinds: ${missing.join(", ")}`);
});

test("build is not one lucky item — the kind has real corpus behind it", () => {
  // The regression that started this: build looked dead because ONE exemplar moved.
  // Asserting a floor makes the difference between "the exemplar drifted" and "the kind
  // died" visible in the failure itself.
  const hits = routed.get("build") ?? [];
  assert.ok(hits.length > 100, `only ${hits.length} routes reach build — the kind is dying`);
});
