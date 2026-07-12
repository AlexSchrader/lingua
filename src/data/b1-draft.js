// B1 DRAFT REGISTRY — the preview-only handle for the unactivated B1 units.
// ─────────────────────────────────────────────────────────────────────────────
// These units are NOT in `UNITS` (src/data/index.js), so they are NOT seeded, NOT
// on the Ladder, and invisible to the live app. This module is imported ONLY by the
// Dev-Mode preview (mirrors a2-draft.js) so Alex can feel B1 cards in the throwaway
// sandbox before B1 is activated. B1 ships only after A2 is live AND B1 clears its
// own native-speaker review; the activation step is then: import these in index.js
// and append them to UNITS — then delete this file.
//
// Numbering continues after the A2 drafts (22–30): B1 starts at unit 31, so the
// union live(1–21) + A2(22–30) + B1(31…) stays contiguous for validateContent.
// See CURRICULUM-B1-SKELETON.md for the target this is built toward.
// ─────────────────────────────────────────────────────────────────────────────
import { UNIT31 } from "./ja/unit31.js";

// All B1 draft units, in order. Same shape as `UNITS`, so the existing Dev-Mode
// sandbox launcher can run any of their lessons with zero new card wiring (every
// B1 item so far is a `vocab` item → teach / choice / type / build already handle it).
export const B1_DRAFT_UNITS = [
  UNIT31,
];

// A curated "lil snippets" set — one representative lesson per unit, for a quick
// cross-section feel of B1 without running every lesson.
export const B1_SAMPLER_LESSON_IDS = [
  "ja-u31l1", // keigo — respectful verbs (尊敬語)
];
