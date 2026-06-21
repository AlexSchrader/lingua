# VocaLingo — Build Checklist & Progress Tracker

Single source of truth for project state. If Alex steps away for a while, opening this
cold should answer "what's done, what's next, where did I leave off" in under a minute.
Lives at repo root; CC commits updates to it as part of every PR.

---

## How to use this doc — READ FIRST

**For Alex (resuming after a break):** read *Status at a glance* below, then jump to the
first `[ ]` item under the current phase. That's your next action. The checked history
above it is what's already shipped.

**For CC (maintaining it):** this file is updated as part of the PR that completes work.
When a task is finished (PR merged to `main`), do ALL of:

1. Change its `[ ]` to `[x]`.
2. Append a stamp: ` — DONE <YYYY-MM-DD HH:MM local>, PR #<n>`.
   Example: `- [x] Add validateContent — DONE 2026-06-21 15:40, PR #11`
3. If the work surfaced follow-ups, add them as new `[ ]` items under the correct phase,
   with a one-line note on why.
4. Update the **Status at a glance** block (current phase, last updated, next action).
5. **Never delete a completed task.** The checked list *is* the project memory. Tasks stay
   in their phase section, checked in place — don't move them to a "done pile."

Mark work that's actively being built (PR open, not merged) as `[~]` with
` — STARTED <date>`. Flip to `[x]` only on merge.

---

## Status at a glance

- **Current phase:** Phase 2 — COMPLETE. Phase 3 (audio) is next.
- **In flight:** nothing. Both PRs merged (#11 + #13).
- **Next action (Alex):** `?dev` feel-check of the 5-lesson progression rhythm — play through
  all 5 lessons, note any timing or pacing that feels off, report back. Phase 3 (audio clips)
  can start in parallel.
- **Last updated:** 2026-06-21

**Legend:** `[ ]` todo — `[~]` in progress (PR open) — `[x]` done (stamped)

---

## Phase 0 — Engine foundation — COMPLETE

The learning engine: scheduling, active recall, in-session learning, self-paced loop, app
shell. This is the "not flashcards" core, and it's live on `main`.

- [x] App scaffold — Vite + React 19 + PWA, routing, Zustand+persist store — DONE PR #1 (pre-tracker)
- [x] FSRS scheduler via ts-fsrs — DONE PR #2 (pre-tracker)
- [x] Active recall — app-judged cards, computed FSRS grade from correctness+speed, no self-grading — DONE PR #5 (pre-tracker)
- [x] Settings screen — DONE PR #6 (pre-tracker)
- [x] Companions config — server-side (`server/companions.js`), Haruki split (in-app persona only) — DONE PR #7 (pre-tracker)
- [x] Brief A.1 — in-session learning steps (teach → recognition → recall → graduate) + self-paced loop, no daily cap — DONE PR #8 (pre-tracker)
- [x] Settings → gear icon (top-right of header), bottom nav back to 4 tabs (Today/Ladder/Haruki/Stats) — DONE PR #9 (2026-06-21)
- [x] Today zero-reviews UX — review step resolves to "done" when nothing due, step rows tappable when active, zero-reviews-due smoke test — DONE PR #10 (2026-06-21)

---

## Phase 1 — Content contract + validator — COMPLETE

The structural lock: content becomes pure schema-validated data; bad content can't ship.
Must land before mass curriculum. Brief: `BUILD-BRIEF-content-contract.md`.

- [x] `src/data/contract.js` — `validateContent()` (11 hard rules) + `LIVE_CARD_KINDS`; `scripts/validate-content.mjs` CLI; `CONTENT.md` schema reference — DONE 2026-06-21, PR #11
- [x] Hard validation rules — global id uniqueness, id patterns, per-type field rules, lesson/unit numbering, kana-no-duplicates invariant, reading normalizability (via `normalizeReading`), item key allowlist — DONE 2026-06-21, PR #11
- [x] Validation warning — distractor sparseness (≥3 same-type peers needed for 4-option choice card) — DONE 2026-06-21, PR #11
- [x] Validation warning — empty `accept[]` on multi-word vocab (typed-meaning check rejects valid paraphrases; advisory only) — DONE 2026-06-21, PR #11
- [x] Add `cefr` field to every existing lesson — `ja-u1l1` is the only playable lesson; `cefr: "A1"` added — DONE 2026-06-21, PR #11
- [x] Validate existing `languages.js` shape (`target`/`unlock`/`unlocked`/`id`) — checked in `validateContent`; no migration needed — DONE 2026-06-21, PR #11
- [x] `inventoryFor({lang, maxLevel, maxRung})` selector — on-topic curriculum filter for future Haruki — DONE 2026-06-21, PR #13
- [x] Card-kind coverage matrix — `kindFixtureState` fixture in smoke tests exercises every `LIVE_CARD_KINDS` entry; runner asserts with `assertLiveKind`; `test.skip` stubs for `trace`/`speak` — DONE 2026-06-21, PR #11
- [x] CI wiring — `validate:content` first, then `test:unit` (30 tests, `node --test` glob), broken-fixture coverage in `contract.test.mjs` — DONE 2026-06-21, PR #11
- [x] App fix included in PR #11: React 19 / Zustand `useSyncExternalStore` ordering bug in `Lesson.jsx` (`setLearn` before `graduateItem`) — this was the root cause of lesson sessions getting stuck at `type:produce` — DONE 2026-06-21, PR #11
- [ ] Alex `?dev` phone feel-check of A.1 reinforcement rhythm + timing fairness (can run in parallel with Phase 3; report vibe → tune constants if off)

---

## Phase 2 — Curriculum (Units 2–5) — COMPLETE

Turns the one-lesson demo into a real daily-usable app. Has the contract to validate
against and the gate fields to compute the real cascade.

- [x] Author Unit 1 lessons 2–5 as contract-valid data — か/さ/た/な rows (5 kana + 6 vocab each, 44 new items); all validate:content clean — DONE 2026-06-21, PR #13
- [x] `cefr: "A1"` band on every new lesson — all 4 new lessons tagged — DONE 2026-06-21, PR #13
- [x] Fill `accept[]` synonym arrays — added to all new vocab items (and retro-fitted to lesson 1 vocab) to reduce typed-answer friction — DONE 2026-06-21, PR #13
- [x] Kana memory hooks — `hint` field on every kana item; displayed on TeachCard as "Memory hook: …" in soft italic box — DONE 2026-06-21, PR #13 (neurodivergent-friendly: visual-association mnemonics for each character)
- [x] Dynamic lesson progression — Today screen advances `currentLesson` to the first lesson with rung-0 items; no hardcoded lesson 1; shows "Lesson N/5 · ~X min" — DONE 2026-06-21, PR #13
- [x] Fix kana learn-step pedagogy — `recallMode()` now returns "meaning" for all items at check2 (kana: show character → type rōmaji); "produce" kana only at rung 3+ in reviews — DONE 2026-06-21, PR #13
- [x] `inventoryFor({lang, maxLevel, maxRung})` selector — on-topic curriculum filter for Haruki; pure store selector, CEFR+rung scoped — DONE 2026-06-21, PR #13
- [x] Validation warning — empty `accept[]` on multi-word vocab — DONE 2026-06-21, PR #11
- [x] Generalize `checkCascade` — now reads `unlock: {lang, level}` from LANGUAGES data; handles ja→es AND es→fr; no hardcoding — DONE 2026-06-21, PR #13
- [x] Define the "A1 complete" predicate — `isLevelComplete(langId, "A1", items)` in useStore.js; fires from `completeLesson` and `rollDailyGoal` — DONE 2026-06-21, PR #13
- [x] Fix `es`/`fr` `target` — changed from `"A1"` to `"B1"` (aspirational side-language goal) — DONE 2026-06-21, PR #13
- [x] Replace Ladder A1% XP placeholder with real progress math — `a1PercentFor(langId, items)` counts rung≥1 items / total A1 items — DONE 2026-06-21, PR #13
- [ ] Alex `?dev` feel-check of 5-lesson progression rhythm (report any timing/pacing that feels off → tune constants)

---

## Phase 3 — Brief B — Audio out (no backend)

The "hear it" joy-hit. Pre-generated pronunciation clips, no server needed.

- [ ] Pre-generate per-item pronunciation clips in Haruki's ElevenLabs voice
- [ ] Wire audio playback into cards (tap to hear; autoplay-on-reveal option)

---

## Phase 4 — Brief 3 — KanjiVG tracing

Real stroke-order scoring; completes the "produce/write" half of the mastery ladder.

- [ ] KanjiVG stroke-order scoring
- [ ] Wire `TraceCard` into the Lesson runner (currently exists in `components/games/` but unrouted)
- [ ] Route rung-appropriate kana to trace instead of typed card
- [ ] Add `trace` to `LIVE_CARD_KINDS`, un-skip its coverage stub, add fixture coverage

---

## Phase 5 — Brief E — Backend foundation

Serverless infra. Required for graded speaking and real Haruki — both core, both staged
last after the no-backend wins. API keys are env secrets, never frontend.

- [ ] Serverless setup (Vercel functions / edge)
- [ ] `/api/speak.js` edge function for per-character TTS
- [ ] Secret/env handling for ElevenLabs + Claude keys

---

## Phase 6 — Brief C — Whisper speech grading

- [ ] Serverless Whisper endpoint for speech accuracy
- [ ] Wire `SpeakCard` into the runner (exists, unrouted)
- [ ] Add `speak` to `LIVE_CARD_KINDS`, un-skip its coverage stub, add fixture coverage
- [ ] SPOKEN rung climbs via graded speaking

---

## Phase 7 — Brief D — Real Haruki

Claude brain + ElevenLabs voice, multi-tutor from `companions.js`. The two-bank memory
architecture from the design sessions.

- [ ] Write the Haruki agent spec doc (persona + memory architecture + tool boundaries + quiz-vs-chat routing)
- [ ] Curriculum memory bank (on-topic) = `inventoryFor` output; the ONLY thing the graded "quiz me" path reads
- [ ] Conversation memory bank (off-topic) = free-text chat context; never passed to graded quizzes
- [ ] Structural separation enforced in CODE (quiz path receives only the curriculum bank), not just prompt instructions
- [ ] Default-scoped / override-explicit (vague "quiz me" → curriculum only; explicit ask opens off-topic bank)
- [ ] Promotion bridge — explicit action moves an explored word into the formal SRS track; nothing leaks automatically
- [ ] Multi-tutor live from day 1 (Haruki/ja, Nacho/es, Mathieu/fr) using `companions.js`
- [ ] Generated cards pass the same `validateContent` item checks before reaching the learner

---

## Phase 8 — Later / optional

- [ ] Leaderboards
- [ ] Commitment mode
- [ ] Money stakes (optional, OFF by default)
- [ ] Additional language content beyond ja/es/fr scaffolding

---

## Continuous (ongoing, not a phase)

- [ ] Tuning from playtests — `LEARN_OPTS` (learnQueue.js), `TIMING` (grading.js), FSRS params. Report a vibe → one-line constant change.
- [ ] Per-phase `?dev` feel-checks before merging anything that changes the learning feel.
- [ ] `accept[]` synonym arrays — fill as typed-answer gaps surface.

---

## Parking lot (loose ends to confirm / decide)

- [ ] Verify the app-icon fix landed (committed skewed-rung icons vs. CC's drifted redraw; canonical logo SVG pinned). Status unconfirmed.
- [ ] GitHub setting: enable auto-delete-head-branches (sandbox git proxy 403 blocks remote branch deletion).
- [ ] Move repo off OneDrive to `C:\dev` eventually (OneDrive causes node flakiness).
- [ ] Repo is currently PUBLIC. Decide whether to keep it public (lets web-Claude read code for precise briefs) or re-private after this work.
