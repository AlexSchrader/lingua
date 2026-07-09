# BUILD BRIEF — A2 Dev-Mode Preview ("lil snippets of A2")

**For:** Feature CC (app/engine/UX lane)
**From:** Curriculum CC — the A2 content owner
**Branch note:** the A2 draft units + the registry this brief depends on live on
`content/a2-draft`. Base the demo branch on that (or merge those content files in) so
`src/data/a2-draft.js` and `src/data/ja/unit22–30.js` are present. **Do not register A2
in `UNITS`** — that's the whole point (see Guardrails).

---

## Goal
Let Alex **feel A2 content in Dev Mode** — a few real cards from the drafted A2 units —
**before** A2 is ever added to the live app. A throwaway preview, so we can sanity-check
the word choices, examples, and card feel while A1 is still being native-reviewed.

## Why
A2 is 9 units / 36 lessons / 216 items, drafted but **intentionally not live** (not in
`UNITS`, not seeded, not on the Ladder). Before committing to activate it, Alex should be
able to *play* a slice of it in the real card UI — cheaper to catch "this word's off / this
example is flat" now than after it ships. This is a preview, not a launch.

## What it does (user-facing)
In **Settings → Dev Mode** (already unlocked by code), add an **"A2 preview (draft)"**
section:
1. **Quick sampler** — one tap runs a short curated cross-section (one representative
   lesson per A2 unit → `A2_SAMPLER_LESSON_IDS`), so Alex sees every theme fast.
2. **Browse A2** — list the 9 A2 draft units (title + theme); tapping a unit lists its
   lessons; tapping a lesson launches it. Same drill-down the existing Dev-Mode unit
   launcher already uses — just sourced from the draft set.

Each launch runs in the **existing throwaway sandbox** (the same isolation Dev Mode
already gives live units): real cards (teach → choice → type / build), **zero** effect on
real progress, FSRS, streak, or the Ladder.

## Data source (the key wiring)
Everything you need is in **`src/data/a2-draft.js`** (I authored it):
- `A2_DRAFT_UNITS` — the 9 A2 units, **same shape as `UNITS`**. Feed a lesson from here
  into the existing sandbox lesson-runner exactly like a live unit's lesson.
- `A2_SAMPLER_LESSON_IDS` — the curated "lil snippets" lesson list for the Quick sampler.

**No new card kinds, no schema change.** Every A2 draft item is a `vocab` item, so the
current `teach` / `choice` / `type` / `build` cards render them as-is. If your sandbox
launcher currently looks up lessons via `getLesson()` over `UNITS`, add a draft-aware
lookup that also searches `A2_DRAFT_UNITS` **for the preview path only**.

## Guardrails (do not cross)
- **A2 must never touch the live app.** Do NOT import `A2_DRAFT_UNITS` into `index.js`,
  `seedItems()`, the Ladder, or anything the normal daily loop reads. It's Dev-preview
  only. After your change, the live app must still report **21 units** and an unchanged
  Ladder.
- **Sandbox isolation is non-negotiable** — reuse the existing Dev-Mode throwaway run
  (byte-identical real state before/after). A2 preview cards never write to real
  progress / FSRS / streak.
- **No content edits.** The A2 units are the Curriculum CC's lane — if a word or example
  looks wrong while you're testing, log it as a `[ ]` Curriculum item, don't edit
  `unit22–30.js`.

## Out of scope
- Activating A2 (that's a one-line `UNITS` add later, gated on A1 native review).
- The conjugation-practice card (separate flagged Feature-CC need — A2 grammar beyond
  the word-like connectives waits on it).
- Any Ladder / onboarding surfacing of A2.

## Definition of done
- Dev Mode shows **"A2 preview (draft)"** with a Quick sampler + a browse-and-launch list
  of the 9 units.
- Launching any A2 sampler/lesson runs real cards in the sandbox and returns to Dev Mode
  with real state untouched.
- Live app is provably unaffected: `UNITS.length === 21`, `seedItems()` contains no
  `ja-u2[2-9]`/`ja-u30` ids, Ladder unchanged.
- No new card kind, no schema/contract change. Draft PR → Alex.

## Lanes
- **Feature CC builds** the Dev-Mode UI + the draft-aware sandbox launch.
- **Curriculum CC owns** `a2-draft.js`, the sample selection, and all A2 content.
