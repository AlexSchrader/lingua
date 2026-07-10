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

## Milestone catalog (M.0 — concrete, buildable draft)

Each milestone is a pure predicate over `(items, units)`. Thresholds below are **starting values** (each a one-constant tuning knob). Grounded in the real curriculum: **175 kana = 71 hiragana + 71 katakana + 33 yōon · 448 vocab · 106 N5 kanji.**

**Two honest bars (pick per family — verified in `mastery.js`):**
- **"Learned"** = item at **rung ≥ 1** (introduced + recognized). Matches the Ladder's "learned" count *and* `isLevelComplete`. Used for **coverage / section** milestones.
- **"Mastered"** = `isMastered(item)` = FSRS **stability ≥ 45 days** (deep retention). Used for **depth / count** milestones.
- *Decision:* coverage milestones use **rung ≥ 1** for consistency with the rest of the app; Feature CC can bump a capstone to **rung ≥ 2** ("can recall") in playtest if it feels too easy — one constant.

**Helpers M.0 needs (mostly reuse, all pure):**
- `classifyKana(front)` — **extract/reuse from `Ladder.jsx:247`** (codepoint → `hira` / `hira-voiced` / `kata` / `kata-voiced`; content-agnostic, no hardcoded lists).
- `isYoon(front)` — 2-codepoint kana (reuse the Ladder yōon-table detection).
- `isStageComplete(stage, items, units)` — **new tiny helper:** every item in units of that `stage` at rung ≥ 1 (stages: `pre-a1` / `a1` / `a2`).
- `isMastered` + `isLevelComplete` — **already exist** (`mastery.js`, `useStore.js`).
- `earnedMilestones(items, units)` → `Set<milestoneId>` of currently-satisfied ids. The store persists an `earnedMilestoneIds` set; a newly-satisfied id fires the mascot `"achievement"` reaction **once** and joins the set. **Never removed** — so a later stability dip under 45d, or a count milestone fluctuating, never revokes a badge (this is what delivers "earned-once, never revoked" regardless of the live predicate).

**The catalog:**

| Family | id | Label (learner-facing) | Predicate | Start threshold |
|---|---|---|---|---|
| **Firsts** (warm early wins) | `first-word` | "Your first word" | any `vocab` item rung ≥ 1 | 1 |
| | `first-kanji` | "Your first kanji" | any `kanji` rung ≥ 1 | 1 |
| | `first-recall` | "First word recalled from memory" | any item rung ≥ 2 (RECALLED) | 1 |
| | `first-write` | "First character you can write" | any item rung ≥ 3 (PRODUCED/traced) | 1 |
| | `first-master` | "First item fully mastered" | any `isMastered` | 1 |
| | `first-spoken` | "First word said out loud" | any item rung ≥ 4 ⚠️ *dormant until `speak` ships* | 1 |
| **Script** (coverage, rung ≥ 1) | `hira-base` | "All basic hiragana" | every base (unvoiced) hiragana rung ≥ 1 | 46 |
| | `hira-all` | "All hiragana — dakuten included" | every hiragana (base+voiced) rung ≥ 1 | 71 |
| | `kata-all` | "All katakana" | every katakana rung ≥ 1 | 71 |
| | `yoon-all` | "Every combination kana (yōon)" | every yōon rung ≥ 1 | 33 |
| | `all-kana` | "Every kana — you can read Japanese script" | every kana item rung ≥ 1 | 175 |
| **Vocab depth** (mastered) | `vocab-10` | "10 words mastered" | `isMastered` vocab count ≥ 10 | 10 |
| | `vocab-50` | "50 words mastered" | ≥ 50 | 50 |
| | `vocab-100` | "100 words mastered" | ≥ 100 | 100 |
| | `vocab-250` | "250 words mastered" | ≥ 250 | 250 |
| **Kanji** | `kanji-10` | "10 kanji mastered" | `isMastered` kanji count ≥ 10 | 10 |
| | `kanji-50` | "50 kanji mastered" | ≥ 50 | 50 |
| | `kanji-n5` | "All 106 N5 kanji learned" | every `kanji` rung ≥ 1 (coverage capstone) | 106 |
| **Section / level** | `pre-a1` | "Pre-A1 complete — all kana scripts" | `isStageComplete("pre-a1")` | — |
| | `a1-n5` | "A1 complete — you've reached JLPT N5" | `isLevelComplete("ja","A1")` | — |

**Display / "next goal":** show earned milestones + the **single nearest-to-complete** unearned one as a gentle target ("3 more to 100 words mastered"). Suggested ordering for "what's next": Firsts → Script → Vocab/Kanji depth → Section capstones. No wall of locked badges.

**Not in the catalog (by the capability-not-activity rule):** anything counting *days practiced, sessions, cards answered, or time* — those are activity, and they're exactly what this brief removes. If a proposed milestone measures time/volume rather than skill, reject it.

---

## Relationship to other work
- **Confirms R17 GO** (reframe the Today stat trio) and **R18/R30** (freezes, zero-state scoreboard) — this brief is their positive replacement.
- **Uses `isLevelComplete`** (already in `useStore.js`) and the mastery/`isMastered` machinery — no new tracking infrastructure.
- **Wires the dormant mascot `"achievement"` context** — the reaction exists; nothing triggers it today.
- **Pairs with R25** (concave mastery bar) — both make honest progress *visible* instead of dopamine *rewarding*.
