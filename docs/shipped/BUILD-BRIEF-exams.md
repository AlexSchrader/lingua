> # ✅ SHIPPED — HISTORICAL RECORD. DO NOT AUTHOR FROM THIS.
>
> **Closed out 2026-09-24**, in the same commit that shipped the work. **The code is the source of truth, not this document** — where they disagree, the code is right and this is stale.
>
> **Evidence it shipped:**
> - `src/store/exams.js` — paper selection, scoring, breakdown (pure, no UI)
> - `src/screens/Exam.jsx` + route `/exam/:examId` in `src/App.jsx`
> - `src/components/games/CardStage.jsx` — the card switch, now shared with `Review.jsx` (no new runner, no new card kind)
> - `buildExamSandbox()` in `src/store/dev.js` — the throwaway deck
> - store key `exams`, actions `recordExam` / `queuePractice` in `src/store/useStore.js`
> - milestone family `verified`, ids `level-<band>-verified[-<lang>]`, in `src/data/milestones.js`
> - Ladder affordance: `ExamLinks` / `CefrRungRow` in `src/screens/Ladder.jsx`
> - tests: `tests/unit/exams.test.mjs` (26 tests, incl. **"a full exam run leaves the real items map byte-identical"**) and two Playwright smokes in `tests/smoke.spec.js`
>
> ## The three blocking decisions, and who settled them
>
> **Settled by the main session on 2026-09-24**, which unblocked this brief after seven weeks:
>
> | | Decision | Built as |
> |---|---|---|
> | **D1** | The exam **does NOT gate** the next band. It certifies; it never blocks. A failed exam locks nothing. | No exam is consulted anywhere in lesson/level gating. A rung reads "not yet verified" and that is all it does. |
> | **D2** | **ADD, don't replace.** `level-<band>` keeps meaning *content covered*; `level-<band>-verified` is the new exam-earned signal. | Both families ship side by side in `milestones.js`. |
> | **D3** | **80%** passes a band exam. A **half-check has no threshold at all** and stores no result beyond a last-taken date. The percentage is shown **only on a pass**. | `EXAM_PASS_PCT = 80`; `scoreExam().passed` is `null` for a check, never `false`; `recordExam` writes `{ lastTaken }` and nothing else for a check. |
>
> ## What the brief got WRONG, corrected in the build
>
> - **"This is a store schema change + persist version bump."** It is not. `useStore`'s `merge` starts from `current` (fresh defaults) and overlays persisted state, so a new `exams` key is simply present for existing saves and overrides nothing. **`PERSIST_VERSION` is unchanged and no migration was added** — an unnecessary bump is pure risk against the only save that has real progress.
> - **Language-free ids** (`exam-a1`, `check-a1.5`) cannot work in a ten-language catalog. Shipped as `exam-<lang>-<band>` / `check-<lang>-<band>.5`.
> - **`trace` was not excluded.** It is now, alongside `speak`: both grade the DEVICE (finger, mic) as much as the learner. See `EXAM_EXCLUDED_KINDS`.

---

# Build brief — Band exams & half-band checks

**Lane:** Feature CC (engine + store + screens). **Status:** proposed 2026-08-02, from Alex:
*"each section A1 A2 B1 B2 should all have exams, also half point exams too but aren't
counted against you, just sees where you are."*
**Not started — three decisions below need Alex's call first, and one of them is a
persist-version bump (a "check in before" item in CLAUDE.md).**

---

## The two things

| | **Band exam** | **Half-band check** |
|---|---|---|
| ids | `exam-a1`, `exam-a2`, `exam-b1`, `exam-b2` | `check-a1.5`, `check-a2.5`, `check-b1.5` |
| question | "Can you actually *do* A1?" | "Where am I right now?" |
| result | pass / not yet + breakdown | **breakdown only — no pass, no fail** |
| recorded | yes (best result + date) | last-taken date only |
| counts against you | **never** (see *Sandboxing*) | **never**, and no result is stored at all |
| retakes | unlimited, no cooldown, no penalty | unlimited |

Alex's phrase — *"aren't counted against you, just sees where you are"* — is the whole
design of the half-check, and it's worth saying out loud that **it applies to the band
exam too.** Nothing in this feature may ever *lower* anything.

## The non-negotiable: sandboxing

**An exam must never write SRS state or mastery rungs.** If exam answers feed FSRS, one
bad day (tired, anxious, on a train) rewrites weeks of scheduling and pushes a pile of
items back down the rungs. That is the exact anti-pattern the app exists to avoid, and
for an ND learner it turns "let's see where I am" into a threat.

The machinery already exists: Dev Mode's sandbox runs (`buildSandboxItems` in
`src/store/dev.js`, `runnerWriters`/`NOOP`) play a full session against a throwaway items
map that never touches real progress. An exam is that, plus a result summary. **No new
runner, no new card kind, no engine fork.**

## Derived, not authored

An exam is a **selection over existing items + existing card kinds** — not new content.

- Sample the band's items (`lesson.cefr` ≤ band, the same cumulative rule
  `milestones.js` already uses for `level-<band>`).
- Weight toward *recall and production*, not recognition — a `choice` card is a weak test
  of "can you do A1". Prefer `type:meaning`, `type:produce`, `cloze:choice`,
  `sentence:build`, and `listen:*` where audio exists.
- Stratify the sample so every unit in the band is represented; don't let a random draw
  test one lesson six times.
- Deterministic per (learner, exam, attempt) so a reload mid-exam resumes the same paper.

**Consequence: A2/B1/B2 exams exist the moment their content ships. French gets its A1
exam for free.** Nothing to author, and the engine stays content-agnostic.

## What the result looks like

Not a percentage in a big font. A capability breakdown:

```
A1 check · French
You're solid on:   greetings · numbers · food · days & time
Shaky on:          the partitive (du/de la) · passé composé with être
Not yet tested:    —
                                    [ Practice the shaky ones ]  [ Done ]
```

The "practice these" button seeds a **normal** targeted session (which *does* write SRS,
because that's real study). That turns a diagnostic into a next action, which is the ND-
friendly move: never leave someone holding a number they don't know what to do with.

## Where it lives

The Ladder spine already draws the CEFR rungs. A band exam belongs **on its rung** — a
small "Take the A1 check" affordance that appears when the band's content is complete;
half-checks sit between rungs. This makes the climb legible without adding a tab.

## ⚠️ Decisions for Alex

**D1 — Does passing the band exam GATE the next band?**
*Recommendation: **no**.* It certifies, it doesn't gate. A failed exam that locks A2 turns
a diagnostic into a wall, and the app's whole stance is that progress comes from mechanics,
not gatekeeping. You'd still see "A1 not yet verified" on the rung — honest, not blocking.
*(If you want it to gate, say so — it's a small change, but it changes the feel a lot.)*

**D2 — Does the exam replace the current "A1 complete" milestone, or add to it?**
Today `level-A1` is earned by having every A1 item at rung ≥ 1 — that's *content covered*,
not *capability proven*, and the README already flags the French one as an over-claim.
*Recommendation: keep `level-A1` as "A1 content complete" and add `level-A1-verified`
earned by the exam.* Two honest signals beat one ambiguous one. **Note:** this is why the
French "A1 complete" label problem in `BUILD-CHECKLIST.md` may resolve itself here.

**D3 — Pass threshold, and does "not yet" get a number at all?**
*Recommendation: 80% for the band exam; the half-check has no threshold whatsoever.* Show
the number on a pass, show only the breakdown on a "not yet" — the number adds nothing
when the answer is "keep going" and it's the part that stings.

**Also needs sign-off (CLAUDE.md "check in before"):** exam results are new persisted
state (`exams: { [id]: { bestPct, lastTaken, attempts } }`), so this is a **store schema
change + persist version bump**. It's additive and safe, but it's your call.

## Scope guardrails

- **No new card kind, no `LIVE_CARD_KINDS` change, no content authoring.** If the design
  starts wanting either, it's grown past this brief.
- **No timer.** A countdown is the single fastest way to make this feel like a test rather
  than a mirror, and it punishes exactly the learners this app is built for.
- **No streak, no XP, no leaderboard, no "you beat your best".** Capability only.
- Exams are **skippable forever**. A learner who never takes one loses nothing but the
  "verified" badge.

## Rough order of work

1. `src/store/exams.js` — paper selection (pure, derived from UNITS + band), scoring, the
   breakdown shape. Unit-testable with zero UI.
2. Sandbox wiring — reuse `buildSandboxItems`/`NOOP` writers so a run can't touch progress.
   **A test must assert an exam leaves `items` byte-identical.**
3. Result screen + Ladder affordance.
4. Store slice + persist bump (D3 sign-off), `level-<band>-verified` milestone (D2).
5. Smoke: take an exam end to end, assert real progress unchanged, assert a half-check
   records no pass/fail.
