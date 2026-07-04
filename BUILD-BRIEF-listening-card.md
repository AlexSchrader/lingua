# Build Brief — Listening Card ("hear it → pick / type it")

**Status:** design doc / not started. Authored by **QA CC** off the Pre-A1/A1 review (2026-07-04); for **Feature CC + Alex** to sharpen before any code. **Lane: Feature CC** (new card kind = engine/schema, draft PR, Alex merges).
**Goal in one line:** the learner *hears* a word/kana clip with the glyph hidden, and proves they recognized it — the first card in the app that trains the **ear**, not the eye.

> This is a **design** doc, not an implementation plan. It exists to settle the forks below. Per the repo rule, read the actual files before building — the ground-truth notes here were verified 2026-07-04 but the repo is the source of truth.

---

## Why now

Every card the app ships today (`teach`, `choice`, `type:meaning`, `build`, `trace`) **shows the character**. The learner's ear is never tested — they can pass all of A1 without once mapping a *sound* to a meaning. For a spoken language that's a real gap, and it's the natural complement to the (dormant) `speak` card: `speak` = say it, `listen` = hear it.

**It just got unblocked.** As of 2026-07-04 **every item (729/729) has an audio clip** (`public/audio/ja/{id}.mp3`). A listening card was impossible while 79% of items were silent; now it's cheap.

## The one decision that keeps this simple: it's a *variant*, not a new rung

**Do NOT add a rung to `RUNGS`.** The mastery ladder (`src/store/mastery.js`) is `["NEW","RECOGNIZED","RECALLED","PRODUCED","SPOKEN","MASTERED"]`, and `SPOKEN` (rung 4) is already reserved for the graded speak path. Adding a "HEARD" rung would reshape the ladder, force a persist-schema/mastery change, and drag this into the tread-carefully zone (FSRS/mastery/persist = "check in before").

Instead: **listening is an alternate *presentation* of the recognition/recall checks the app already does.** Hearing かさ and picking "umbrella" is the same *skill* as seeing かさ and picking "umbrella" — just sound-in instead of glyph-in. So it slots into the existing review rungs as a substitute for `choice` / `type:meaning`, and needs **zero** changes to rungs, FSRS, mastery, or the item schema.

This is what makes it a contained Feature-CC PR rather than an engine epic.

---

## What already exists in the repo (ground truth — verified 2026-07-04)

- **Audio playback is done.** `src/store/itemAudio.js` → `useItemAudio(item)` plays `/audio/{item.lang}/{item.id}.mp3`, autoplays on mount (respects the `autoplayAudio` setting), exposes `{ play, active }`, and **degrades to silence** on a missing/failed clip (no robot fallback). The listening card reuses this hook verbatim.
- **Audio coverage is 100%** (729/729) — but there is **no guarantee future items get a clip** (the "run `generate:audio` when a unit ships" step has slipped before — that's how A1 ended up silent). A listen card with no clip is **unanswerable**, so routing MUST be guarded (see below).
- **The rung → card map lives in `src/screens/Review.jsx`** (`reviewStepFor`, ~lines 22–28):
  ```
  rung <= 1 → choice            (RECOGNIZED — recognize meaning)
  rung === 2 → type:meaning     (RECALLED — recall meaning)
  rung === 3 → trace | build    (PRODUCED — write / assemble)
  ```
  Lesson checks are separate (`src/screens/Lesson.jsx`): teach → `choice` (check1) → `trace`/`type:meaning` (check2).
- **`ChoiceCard`** (`src/components/games/ChoiceCard.jsx`) renders `item.front` big, builds 4 options from same-type peers, grades correct→`good` / wrong→`again` via `onGraded`. A listen:choice card is **this card with the front hidden and a Play button in its place.**
- **`TypeCard`** grades typed input via `src/store/answer.js` (`checkReading`/`checkMeaning`). A listen:type card reuses `checkReading` on what the learner types.
- **The forcing function** (CLAUDE.md + `assertLiveKind` in both runners): a card kind ships **only** when it's in `LIVE_CARD_KINDS` (`src/data/contract.js`) **AND** exercised by the coverage fixture (`tests/smoke.spec.js` → `kindFixtureState` / the "every LIVE_CARD_KIND appears" test). Both, or the runner throws at runtime.
- **`LIVE_CARD_KINDS`** today: `["teach","choice","type:meaning","build","trace"]`. Card-kind keys use the `family:mode` shape (`type:meaning`), so `listen:choice` / `listen:type` fit the existing convention and the `assertLiveKind` string-keying.

---

## Two flavors (ship one first)

| Kind | Prompt | Answer | Grades via | Skill | Slots at |
|------|--------|--------|-----------|-------|----------|
| **`listen:choice`** (v1) | 🔊 clip, glyph hidden | pick 1 of 4 (glyph **or** meaning) | ChoiceCard logic (correct→good / wrong→again) | sound → recognition | rung 1 |
| **`listen:type`** (later) | 🔊 clip, glyph hidden | type the reading (rōmaji/kana) | `checkReading` (`answer.js`) | sound → dictation | rung 2 |

**Recommend `listen:choice` for v1** — no typing, lowest friction, and it's almost entirely the existing ChoiceCard. `listen:type` (true dictation) is a fast follow once the routing + guard are proven.

**Options-content sub-fork for `listen:choice`:** the 4 options can be **glyphs** (hear かさ → pick かさ / かぎ / かさ… — tests sound→script) or **meanings** (hear かさ → pick "umbrella" — tests sound→meaning). Recommend **meanings** for vocab (more useful, and the glyph stays hidden so it's genuinely ear-driven) and **glyphs** for kana (there's no meaning). ChoiceCard already special-cases kana vs vocab option-building, so this falls out naturally.

---

## Proposed architecture (v1, `listen:choice`)

```
Review runner, rung 1, item HAS a clip
  → reviewStepFor() returns { kind: "listen:choice" }   (interleaved with plain "choice")
  → <ListenCard item mode="choice" allItems onGraded />
       • foreground a big Play button; auto-play once on mount via useItemAudio
       • glyph hidden; render the 4 options exactly as ChoiceCard does
       • a "Show it" escape reveals the glyph (accessibility / muted context) — see ND
  → learner picks → same grade mapping as choice (good / again)
  → onGraded(grade) → existing gradeItem → FSRS + rung   (UNCHANGED)
```

**Build it as a thin wrapper, not a fork.** Cleanest: add an `audioFirst`/`hideFront` prop to `ChoiceCard` (it already owns option-building + grading) and let `ListenCard` be a small shell that supplies the Play button + escape hatch. Avoid copy-pasting ChoiceCard — that's the kind of duplication `/simplify` would flag.

### The routing guard (the one piece that needs care)

A `listen` card must **never** be served for an item with no clip. Two options:

1. **Generated audio manifest (recommended).** A build step writes `src/data/audioManifest.js` (or `.json`) — the list of ids that have an `.mp3`. `reviewStepFor` only returns a `listen` kind when `audioManifest.has(item.id)`; otherwise it falls back to plain `choice`. Deterministic, no network, testable.
2. **CI coverage rule.** Add a `validate`/`lint` check that **every live item has an audio file**, so silence can't regress — then routing can assume coverage. This is worth doing *regardless* (it's the forcing function the A1-silence gap needed), but on its own it doesn't protect a user whose clip 404s at runtime, so pair it with (1)'s graceful fallback.

**Recommend both:** manifest for runtime routing + a coverage rule so the manifest can't quietly shrink.

### Interleaving (don't replace `choice`, alternate with it)

Keep the eye-path too — a learner still needs to read. At rung 1, alternate `choice` and `listen:choice` (e.g. by review parity or an item-id hash; `Math.random` is available in the app, only banned in workflow scripts). Decision point below.

---

## ND-friendly design (non-negotiable, per the anti-burnout spine)

- **Play must be obvious and repeatable.** Big Play button, unlimited replays, `active` state feedback (the hook already exposes `active`). Do **not** rely on autoplay alone — browsers block autoplay audio before a user gesture, so the *first* card after a fresh page load may be silent until tapped. Foreground the button.
- **A "Show it" escape, always.** A deaf / hard-of-hearing learner, a muted phone, a noisy room — none should hit a wall. One tap reveals the glyph and turns the card into a normal `choice`. Listening is *bonus depth*, never a gate on daily reviews (same principle as the speak card's graceful degradation).
- **No new harshness.** Wrong → `again` (gentle re-try), not a red X. Same grade vocabulary the runner already speaks.
- **Respect `autoplayAudio`.** If the user turned autoplay off in Settings, don't auto-fire — they tap Play. The hook already honors this.
- **Tuning is constants.** Any interleave ratio / rung placement lives as a named constant next to `LEARN_OPTS`, not buried in `reviewStepFor`.

---

## What this does NOT touch (keep it contained)

- ❌ **No new rung** — `RUNGS` / `mastery.js` untouched.
- ❌ **No FSRS / grading-logic change** — reuses `gradeItem`, `checkReading`, ChoiceCard grading.
- ❌ **No item-schema change** — audio is keyed by existing `id`; nothing new in `contract.js`'s item fields. *(The only `contract.js` edit is adding the kind to `LIVE_CARD_KINDS` — plus, optionally, the audio-coverage validator rule.)*
- ❌ **No persist / localStorage migration.**

That's what makes this a small, reviewable Feature-CC PR rather than an engine epic.

---

## Forcing-function checklist (how `listen:choice` actually goes live)

1. `ListenCard` (or `ChoiceCard audioFirst`) component + the "Show it" escape.
2. Audio manifest generator + `reviewStepFor` guard (serve `listen` only when a clip exists; else fall back to `choice`).
3. Wire into the **review** runner at rung 1, interleaved with `choice`.
4. Add `"listen:choice"` to `LIVE_CARD_KINDS`.
5. Extend `kindFixtureState` + the "every LIVE_CARD_KIND appears" coverage test so `listen:choice` is exercised (the fixture item needs a clip present in the test env, or a mocked manifest).
6. Unit-test the guard (no clip → falls back to choice) and the grade mapping, purely (no audio/network).
7. Full green: `validate:content` → `lint:curriculum` → `test:unit` → Playwright smoke (dev **and** preview) → `build`.

## Open decisions (lock before building)

1. **v1 scope** — `listen:choice` only (recommended), or `listen:type` too?
2. **Options content** — meanings for vocab + glyphs for kana (recommended), or always glyphs?
3. **Interleave rule** — how often does rung-1 become a listen card vs a plain choice? (e.g. every other review; or ~40%.) A tuning constant.
4. **Guard mechanism** — generated manifest (recommended) vs assume-100%-coverage-via-CI-rule vs both.
5. **Also in the lesson?** — first-teach could add a listen check, or keep listening review-only for v1 (recommended: review-only, simpler).
6. **Add the audio-coverage validator now?** — recommend yes regardless; it closes the "units ship silent" gap that this brief exists downstream of.

## Suggested build phases

- **L.0** — manifest generator + `reviewStepFor` guard + unit tests (no UI). Prove routing never serves a silent card.
- **L.1** — `ListenCard` UI (Play + hidden glyph + Show-it escape), wired into review behind the guard, interleaved at rung 1.
- **L.2** — `listen:choice` into `LIVE_CARD_KINDS`, extend the coverage fixture, CI green.
- **L.3** — Alex device feel-check (does the audio fire on the first card? is the escape discoverable? does it feel like a *different* card or just choice-with-a-speaker?), then merge.
- **L.4 (optional follow)** — `listen:type` dictation at rung 2.

**DoD:** in a review session, a rung-1 item sometimes presents as audio-first with the glyph hidden; the learner hears it, picks the right answer, and it grades exactly like a choice card — with a Play-any-time button, a "Show it" escape, and a guaranteed fallback to a normal choice when an item has no clip. No rung/FSRS/schema change. CI green including a `listen:choice` coverage path.

---

## Relationship to other work

- **Pairs with `speak` (`BUILD-BRIEF-speech-grading.md`).** Hear ↔ say are the two halves of the audio channel; both reuse `useItemAudio` / the answer-checking spine. `listen` is far cheaper (no capture, no vendor, no backend) and can ship first as the "ear" half while `speak` waits on Whisper/Scribe.
- **Depends on audio staying at 100%.** The audio-coverage validator (decision 6) is the insurance; without it, a future silent unit would silently disable listening for its items (the guard fails them over to `choice`, so no breakage — but the ear-training quietly vanishes for that unit, which a CI rule would catch).
