// One-off analysis: which of the 15 LIVE_CARD_KINDS does the current curriculum
// actually exercise, how often, and in which units/lessons? Pure simulation —
// replays the real routing (Lesson first-teach flow + reviewStepFor) over every
// seeded item at every rung. Deterministic: the routing is hash(id)-banded, so an
// item's card at a given rung is fixed, not random.

import { seedItems, UNITS } from "../src/data/index.js";
import {
  isTraceable, shouldListen, shouldReverseChoice, shouldListenType,
  shouldTypeReading, shouldTypeProduce, shouldSpeak, shouldCloze,
  shouldParticleCloze, shouldSentence, shouldConjugate,
} from "../src/store/cardRouting.js";
import { LIVE_CARD_KINDS } from "../src/data/contract.js";

// Mirror of Review.jsx reviewStepFor() — kept in lockstep by eye.
function reviewKind(item, rung) {
  if (rung <= 1) {
    if (shouldListen(item)) return "listen:choice";
    if (shouldReverseChoice(item)) return "choice:reverse";
    return "choice";
  }
  if (rung === 2) {
    if (shouldParticleCloze(item)) return "particle:choice";
    if (shouldCloze(item)) return "cloze:choice";
    if (shouldListenType(item)) return "listen:type";
    return shouldTypeReading(item) ? "type:reading" : "type:meaning";
  }
  if (rung === 3) {
    if (shouldConjugate(item)) return "conjugate";
    if (isTraceable(item)) return "trace";
    if (shouldSentence(item)) return "sentence:build";
    return shouldTypeProduce(item) ? "type:produce" : "build";
  }
  // rung >= 4 (speak/mastered)
  if (shouldSpeak(item)) return "speak";
  return isTraceable(item) ? "trace" : "build";
}

// Mirror of Lesson.jsx first-teach flow (rung 0): teach -> choice(check1) ->
// trace-if-traceable else type:meaning. recallMode() is hardcoded "meaning".
function lessonKinds(item) {
  const third = isTraceable(item) ? "trace" : "type:meaning";
  return ["teach", "choice", third];
}

const items = Object.values(seedItems());

// total[kind] = how many distinct (item, rung/step) surfaces produce that kind.
const total = Object.fromEntries(LIVE_CARD_KINDS.map((k) => [k, 0]));
// perUnit[unitId][kind] = count
const perUnit = {};
// Which kinds each item can ever produce (for "is this card reachable at all").
const kindItems = Object.fromEntries(LIVE_CARD_KINDS.map((k) => [k, new Set()]));

const unitOf = {}; // itemId -> unit meta
for (const u of UNITS) {
  for (const l of u.lessons ?? []) {
    for (const it of l.items ?? []) unitOf[it.id] = { unit: u, lesson: l };
  }
}

function bump(item, kind) {
  total[kind]++;
  kindItems[kind].add(item.id);
  const meta = unitOf[item.id];
  const uid = meta ? meta.unit.id : "(unknown)";
  perUnit[uid] ??= { title: meta?.unit.title ?? "?", order: meta?.unit.order ?? 0, kinds: {} };
  perUnit[uid].kinds[kind] = (perUnit[uid].kinds[kind] ?? 0) + 1;
}

for (const item of items) {
  // First-teach surfaces (rung 0 lesson flow)
  for (const k of lessonKinds(item)) bump(item, k);
  // Review surfaces at each rung the item passes through (2..5)
  for (const rung of [2, 3, 4, 5]) bump(item, reviewKind(item, rung));
  // rung 0/1 review recognition (choice family) — same as rung<=1 branch
  bump(item, reviewKind(item, 1));
}

// ---- Report -----------------------------------------------------------------
console.log("=== CARD-KIND USAGE ACROSS CURRENT CURRICULUM ===\n");
console.log(`Units: ${UNITS.filter((u) => u.lessons?.some((l) => l.items)).length}   Items: ${items.length}\n`);

console.log("Kind                 surfaces   distinct-items   status");
console.log("-------------------- --------   --------------   ------");
for (const k of LIVE_CARD_KINDS) {
  const n = total[k];
  const di = kindItems[k].size;
  const status = n === 0 ? "❌ NEVER USED" : di < 5 ? "⚠️  rare" : "✓";
  console.log(
    `${k.padEnd(20)} ${String(n).padStart(8)}   ${String(di).padStart(14)}   ${status}`
  );
}

console.log("\n=== DORMANT (never routed by current content) ===");
const dormant = LIVE_CARD_KINDS.filter((k) => total[k] === 0);
console.log(dormant.length ? dormant.join(", ") : "(none — every live kind is exercised)");

// Per-unit breakdown of the CONTEXTUAL/production kinds (the interesting ones —
// choice/teach/trace are near-universal, so we spotlight the grammar cards).
const SPOTLIGHT = ["particle:choice", "cloze:choice", "sentence:build", "conjugate", "listen:type", "type:reading", "type:produce", "speak"];
console.log("\n=== SPOTLIGHT: contextual/production cards by unit ===");
console.log("(counts = distinct items in that unit that route the card at some rung)\n");
const orderedUnits = Object.entries(perUnit).sort((a, b) => (a[1].order) - (b[1].order));
const header = "unit".padEnd(8) + "title".padEnd(24) + SPOTLIGHT.map((k) => k.replace(":choice", ":ch").replace(":build", ":bl").replace("type:", "t:").replace("listen:", "l:").padStart(9)).join("");
console.log(header);
for (const [uid, u] of orderedUnits) {
  const cells = SPOTLIGHT.map((k) => String(u.kinds[k] ?? 0).padStart(9)).join("");
  const anySpot = SPOTLIGHT.some((k) => u.kinds[k]);
  if (!anySpot) continue;
  console.log(uid.replace("ja-", "").padEnd(8) + String(u.title).slice(0, 22).padEnd(24) + cells);
}

// Totals row for spotlight
console.log("\nSPOTLIGHT TOTALS (distinct items):");
for (const k of SPOTLIGHT) console.log(`  ${k.padEnd(18)} ${kindItems[k].size}`);
