# Build Brief — More Sound Effects (expanding the synthesized SFX palette)

**Status:** design doc / not started. Authored by **Idea CC** (2026-07-05); for **Feature CC + Alex** to sharpen before code. **Lane: Feature CC** (`src/store/sfx.js` + call sites + Settings = engine/UX, draft PR, Alex merges).
**Goal in one line:** add a small set of new synthesized sounds that make **learning progress and feedback nuance audible** — without tipping the app into slot-machine dopamine.

> Design doc, not an implementation plan. Grounded in the repo on 2026-07-05, but the repo is source of truth — read `sfx.js` before building.

---

## The one principle that keeps this on-mission

The anti-burnout spine says **motivation is structural, never a dopamine trick** (CLAUDE.md: "no gamification, streaks, XP… mechanics over dopamine"). More sound effects are exactly where an app *drifts* into Duolingo's slot-machine feel. So the gate for every new sound is:

> **A sound may only be added if it carries *information* the learner can't get at a glance — that something changed (a rung climbed, content unlocked, the answer was *close* not wrong). It may never exist purely to *reward*.**

Informational, not congratulatory. That single rule decides every open question below.

## What already exists (ground truth — verified 2026-07-05)

`src/store/sfx.js` — synthesized via Web Audio API, **no files, no network**, every function fire-and-forget and gated through `safe()` (silent when `settings.sfx` is off). Five sounds:

| Fn | Sound | Fires on | Call sites |
|----|-------|----------|-----------|
| `sfxClick` | barely-there 900 Hz tick | button tap | `TeachCard` (continue), `BuildCard` (tile) |
| `sfxCorrect` | warm C5→E5→G5 chime | correct answer | Choice / Cloze / Type / Trace / Build / Speak |
| `sfxWrong` | gentle 320→160 Hz slide (not a buzzer) | wrong answer | Choice / Cloze / Type / Trace / Speak |
| `sfxFanfare` | C5-E5-G5-C6 triangle arpeggio | lesson complete | `Celebration.jsx` |

- **Palette is coherent** — sine/triangle, warm, soft attacks, tuned ND-friendly. New sounds must join *this* family.
- **Gating is centralized** — everything routes through `safe()` → `sfxOn()` reads `settings.sfx` live. New sounds inherit the toggle for free.
- **Settings already has the surface** — `settings = { sfx, autoplayAudio, showRomaji, theme, textSize }`. No new persist key needed for v1.

## The gap: nothing sounds for *progress* or *feedback nuance*

### A. Progression events (the learning ladder is currently silent)

| New sound | Fires when | Why it's informational (not dopamine) |
|-----------|-----------|----------------------------------------|
| **`sfxRungUp`** (subtle two-note rise) | an item climbs a rung | tells you *this item is sticking* — feedback you otherwise only see in Stats |
| **`sfxMastered`** (warmer, distinct resolve) | an item reaches **MASTERED** (rung 5) | the one genuine "done" moment per item |
| **`sfxUnlock`** (soft open) | a new lesson/unit unlocks | signals *new content is available*; pairs with the `lingua-unit-unlock` mascot clip |
| **`sfxReviewsCleared`** (light close, distinct from `sfxFanfare`) | the daily review session finishes | closes the *daily habit* loop |

### B. Feedback nuance (grading has more states than the sounds do)

The grader speaks `again / hard / good / easy`, but the SFX collapse to correct/wrong. A near-miss sounds identical to a total miss:

| New sound | Fires when | Why |
|-----------|-----------|-----|
| **`sfxAlmost`** (gentler, *rising* tone — "so close", not the descending "oops") | grade is `hard` (correct but slow / one-sound off) | distinguishes *almost* from *wrong*; **pairs with pitch R2 (near-miss diff)** — sound + visual land together |

**Recommended priority:** `sfxAlmost` (B) and `sfxRungUp`/`sfxMastered` (A) first (highest info-per-sound); `sfxUnlock`/`sfxReviewsCleared` a fast follow.

## ND-friendly design (non-negotiable)

- **Subtle and short** — new sounds sit *under* the pronunciation clips; never startling.
- **One coherent family** — same oscillators/soft-attack envelope; reuse the C5/E5/G5/C6 set so the app has a recognizable sonic identity.
- **Frequency matters more than loudness** — a rung-up fires often, so it must be *barely-there* (closer to `sfxClick`); rare events (`sfxMastered`) can be richer.
- **Respect the toggle, always** — every new sound goes through `safe()`.
- **Consider a "reduce sounds" middle setting (open decision)** — `sfx: full | essential | off` is the ND-generous version if the palette grows; don't build it unless warranted.

## Adjacent channel (note, not scope): haptics

A parallel `navigator.vibrate()` on correct/wrong/almost serves muted-study learners. Out of scope here (different mechanism, own toggle); log as a companion pitch.

## What this does NOT touch

- ❌ No audio files / no network — stays synthesized in `sfx.js`.
- ❌ No FSRS/mastery *logic* change — new sounds fire from **existing** transitions; a rung-up sound needs a *hook* at the promotion point (confirm `gradeItem`/`mastery.js` exposes "rung advanced" — don't recompute in a component).
- ❌ No new persist key for v1 (single `sfx` toggle governs all) — unless the `essential` middle-setting is chosen.
- ❌ No new dependency.

## Forcing-function checklist

1. Add the `sfx*` export in `sfx.js`, routed through `safe()`, in the existing timbre family.
2. Find/confirm the **trigger hook** (rung-up + mastered need a promotion signal; unlock needs the cascade event; reviews-cleared is the Review "done" state).
3. Wire the call at that one site — no logic in the component beyond firing the sound.
4. Balance by ear against a real pronunciation clip playing (content audio stays dominant).
5. Confirm the `sfx` toggle silences every new sound (inherited via `safe()`).
6. Full green: `test:unit` → Playwright smoke → `build` (SFX are fire-and-forget with swallowed errors; confirm nothing throws when `AudioContext` is absent in CI).

## Open decisions

1. **Which sounds ship in v1?** Recommend `sfxAlmost` + `sfxRungUp` + `sfxMastered`; unlock/reviews-cleared as a fast follow.
2. **`sfxRungUp` frequency** — every rung, or only RECALLED+? It fires often; err toward barely-there or selective.
3. **Does reviews-cleared already play `sfxFanfare`?** *(As of 2026-07-05 it now does — PR #56 added `Celebration` to the reviews-done screen. So `sfxReviewsCleared` should be a lighter, distinct close, or is redundant — confirm.)*
4. **One toggle or `full | essential | off`?** Default to one; add the middle only if the palette feels heavy in the feel-check.
5. **`sfxAlmost` trigger** — depends on each card passing `hard` through rather than collapsing to correct/wrong.

## Suggested build phases

- **S.0** — `sfxAlmost` + wire to the `hard` grade across cards (pairs with R2). Smallest, most-felt.
- **S.1** — `sfxRungUp` + `sfxMastered` behind a confirmed promotion hook; tune by ear.
- **S.2** — `sfxUnlock` (+ `sfxReviewsCleared` if still wanted after PR #56).
- **S.3** — Alex device feel-check (informs vs nags? competes with clips? coherent family?), then merge.

**DoD:** progression and near-miss moments carry a subtle, on-family sound that tells the learner *what changed*; everything gated by the `sfx` toggle, under content audio, never a reward-jackpot. No files, no FSRS-logic change, CI green.

---

## Relationship to other work

- **Pairs with pitch R2 (near-miss diff feedback)** — `sfxAlmost` is the audio half of "distinguish *close* from *wrong*."
- **Pairs with R4 (reduce-motion / sensory Settings)** — the `full | essential | off` middle-setting, if it lands, lives next to reduce-motion.
- **Complements the mascot clips** — `sfxUnlock` alongside `lingua-unit-unlock`; keep them in sync.
- **Note (2026-07-05):** the *lesson* victory sound + confetti already exists (`Celebration.jsx`), and PR #56 extended it to *reviews-cleared*. This brief is about the *finer-grained* progression/feedback sounds beyond those two celebration moments.
