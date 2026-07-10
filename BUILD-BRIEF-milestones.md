# Build Brief — Milestones (capability achievements) + retiring the engagement scoreboard

**Status:** design doc / not started. **Decided 2026-07-10** — Alex chose "structural milestones only" when asked about adding achievements vs keeping streak/XP/freezes. **Lane: Feature CC** (store/screens + a persist change → check-in). Codified in CLAUDE.md's mission the same day.
**Goal in one line:** replace engagement gamification (streak, XP, freezes) with **capability milestones** that mark a real skill the learner now *has* — honest structural progress, not dopamine.

> Design doc, not an implementation plan. Grounded in the repo 2026-07-10; repo is source of truth.

---

## The principle this whole brief hangs on

**A milestone rewards CAPABILITY, never ACTIVITY.** That one line is the filter for every decision below.

- ✅ **Capability** — "can read all hiragana," "100 words mastered," "A1 complete." Marks a real thing the learner can now *do*. This is *structural progress made visible* — which the mission actively wants (ND learners need clear progress signals).
- ❌ **Activity** — streaks, XP totals, "answered 500 cards," "7-day login," freezes. Rewards time/showing-up, not learning. This is the dopamine the mission rejects — and it's what's being removed.

No points, no leaderboards, no social, no collect-'em-all pressure, no decay/loss. A milestone once earned stays earned (it records "you reached here," not a live status — forgetting a few words later must never revoke it; revocation would be exactly the punishment we're removing).

## Two halves

### A. ADD — capability milestones

**Computed from mastery state, not tracked as events.** Everything below derives from existing data (`items` rung/stability, `UNITS`, and existing predicates) — no new event logging, no per-lesson branching:

| Milestone family | Example milestones | Derived from |
|---|---|---|
| **Script** | Can read all hiragana · all katakana · yōon complete | the writing-system grid state (kana items at rung ≥ threshold) |
| **Vocab depth** | 10 · 50 · 100 · 250 words mastered | `isMastered` count over vocab items |
| **Kanji** | First kanji · all N5 kanji (106) | mastered kanji count |
| **Level** | Pre-A1 complete · A1 complete | `isLevelComplete(langId, level, items)` (already exists) |
| **Skill firsts** | First item to MASTERED · first traced · first spoken (when `speak` lands) | rung transitions |

- **A milestone catalog** (`src/data/milestones.js` or similar) defines each: id, label ("You can read all of hiragana"), and a pure predicate over `(items, units)`. Content-agnostic — the engine reads the catalog; adding a milestone is one entry.
- **A pure selector** `earnedMilestones(items, units)` → the set currently satisfied. Earned state persists so unlock fires once (compare against last-known earned set on each grade/session end).
- **Display** — a Milestones view (in Stats, or its own small screen) showing **earned** + the **single next reachable** one as a gentle goal ("3 more words to 100 mastered"). No wall of locked badges to grind.
- **Celebrate on unlock** — wire the existing mascot `"achievement"` reaction context (already defined, `DevPanel.jsx:15`, currently never triggered) to fire when a new milestone is earned. Calm, once, not a jackpot.

### B. REMOVE / DEMOTE — the engagement scoreboard (this is pitch R17)

- **Replace the Today stat trio** (`Today.jsx:259-263`: Flame streak + Zap XP + Snowflake freezes) with milestone/understanding signals: the next milestone, words in active recall / mastered, next-review timing.
- **Retire XP** (`XP_BY_GRADE`, `useStore.js:32`), **freezes** (the `bumpStreak` freeze logic that never regenerates — R18), and **streak-as-pressure**. Per "structural milestones only," lean toward removing the scoreboard entirely; if any habit signal is kept, it's a **non-resetting "days practiced"** count (no loss, no freezes), never a streak that can break.
- ⚠️ **Persist change (check-in item):** streak/XP/freeze fields live in the persisted Zustand store. Removing them must not crash existing users — either leave the fields dormant (stop reading/showing) or a clean persist migration. This is a "check in before touching user state" per CLAUDE.md.

## Guardrails (the spine — do not cross)
- Capability, not activity. If a proposed milestone counts *time/sessions/cards*, it's the wrong kind — reject it.
- No points, leaderboards, social, streaks-with-loss, decay, or FOMO framing.
- Show the *next* milestone as a gentle goal, never a checklist to grind.

## What this touches
- **Add:** a milestone catalog (data) + `earnedMilestones` selector + a Milestones display + mascot-reaction wiring.
- **Remove:** the Today stat trio + XP/freeze/streak-pressure logic.
- ⚠️ **Persist/store schema** change (user state) — scoped, migration-safe, Alex's check-in.
- Content-agnostic: the engine derives earned state generically from the catalog.

## Phases
- **M.0** — milestone catalog + pure `earnedMilestones(items, units)` selector + unit tests (no UI). Prove milestones derive correctly from mastery state.
- **M.1** — Milestones display (earned + next-reachable) + wire the mascot `"achievement"` reaction on unlock.
- **M.2** — replace the Today stat trio with milestone/understanding signals (R17); retire XP/freezes/streak-pressure with a migration-safe persist change.
- **M.3** — Alex feel-check (do milestones feel like honest progress, not a scoreboard? is the "next" goal gentle?), then merge. (Mission doc already updated 2026-07-10.)

**DoD:** the app celebrates real capability milestones computed from mastery (earned-once, never revoked, shown with a single gentle next-goal); the home screen no longer shows streak/XP/freezes; no reward anywhere is based on activity/time; the mission doc and the app agree.

---

## Relationship to other work
- **Confirms R17 GO** (reframe the Today stat trio) and **R18/R30** (freezes, zero-state scoreboard) — this brief is their positive replacement.
- **Uses `isLevelComplete`** (already in `useStore.js`) and the mastery/`isMastered` machinery — no new tracking infrastructure.
- **Wires the dormant mascot `"achievement"` context** — the reaction exists; nothing triggers it today.
- **Pairs with R25** (concave mastery bar) — both make honest progress *visible* instead of dopamine *rewarding*.
