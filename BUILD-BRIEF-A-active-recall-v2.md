# VocaLingo — Build Brief A (v2): Active Recall (app-judged)

Supersedes Brief A v1. Incorporates review fixes: teach-before-test, per-type timing, MC grade cap, macron folding, smoke redesign, distractor fallback, synonym field.

## Goal
Kill self-grading. The app **teaches new words**, then **tests** them by checking your answer and **computing the FSRS grade itself** from correctness + speed. Card type scales with the item's mastery rung. Frontend-only — no backend.

## Sequencing (important)
Build this **on top of the merged FSRS work**, not the toy scheduler. Merge `brief2-fsrs` (+ the trace/logo fixes + CI) into `main` first, then branch Brief A off the updated `main`.

## 1. Teach before test (the key fix)
A rung-0 item is a word the learner has **never seen**. Never MC-test it cold.
- **New items appear as a Teach/Present card** during the lesson's new-material phase: show the word + reading + meaning (audio slot reserved for Brief B). No grading. Completing it sets the item to `RECOGNIZED` and schedules its first review.
- **Active testing starts at the first review**, not first sight.
- This maps onto the daily loop already: the **new-lesson phase teaches**, the **reviews phase tests**.

## 2. Card type by stage
| Stage | Card | Grade behavior |
|-------|------|----------------|
| New item (never taught) | **Teach / Present** | Not graded. Sets rung → RECOGNIZED, schedules first review. |
| Review, rung RECOGNIZED | **Multiple choice** | Correct → `good` (capped — never `easy`). Wrong → `again`, no retry. |
| Rung RECALLED | **Type the meaning** | Typed grading. Can earn up to `easy`. |
| Rung PRODUCED | **Produce the Japanese** (build / type) | Typed/Build grading. Can earn up to `easy`. |
| Rung SPOKEN | **Speak** (deferred) | Falls back to the highest available active card. |

Kana items use **reading** where vocab uses meaning. Build remains the rung-PRODUCED producer.

## 3. Computed grade (no grade buttons)
- **Multiple choice:** correct → `good`; wrong → `again` (no retry). Speed does not upgrade MC.
- **Typed:** first wrong → one retry; correct after retry → `hard`; second miss → `again` + reveal. First-try correct graded by speed vs a **per-type, length-scaled target** (`< target×0.6` → easy, within → good, `> target×1.4` → hard).

`TIMING = { mc: 3000, typed: (a) => 1500 + 350*a.length }`.

## 4. Answer checking + the macron rule
`normalizeReading` folds long vowels: `ohayō` == `ohayou` == `ohayoo`, `sayōnara` == `sayounara`, `sensei` == `sensē`; accepts kana or romaji. `normalizeText` for meanings (lowercase, trim, collapse spaces, strip trailing punctuation), compared against `meaning` + optional `accept[]`.

## 5. Smoke test redesign
Deterministic hooks (`data-correct` on the right MC option; `data-answer` for typed) so the suite can answer correctly and complete a session; assert no self-grade buttons; `pageerror` logged before the empty-root assertion.

## 6. Smaller specs
- **Distractor fallback:** same-type/same-unit, pad from other units, reduce option count; never crash.
- **Synonyms:** optional `accept: []` field on items now.

## Definition of done
- Taught, then tested — no cold MC on unseen items.
- Wrong MC → `again` no retry; correct MC → `good` never `easy`.
- Typed honors per-type timing + macron rule.
- Distractors never crash on sparse types.
- Smoke rewritten and green in dev and preview; no self-grade buttons.

## NOT in this brief
Speech grading (backend) · audio out / listening (Brief B) · real Haruki · KanjiVG trace scoring (Brief 3) · curriculum.
