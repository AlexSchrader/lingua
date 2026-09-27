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
> - store keys `exams` + `missedPool`, actions `recordExam` / `queuePractice` / `creditExamAnswer` / `recordCheckpointMiss` in `src/store/useStore.js`
> - tests: `tests/unit/exams.test.mjs` (**49 tests** as of 2026-09-27 — the original "a full exam run leaves the real items map byte-identical" is now the narrowed **"a wrong exam answer changes nothing"**, see D4) and two Playwright smokes in `tests/smoke.spec.js`
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
> ## ⚠️ THREE OF THIS BRIEF'S RULES WERE SUPERSEDED OR REFINED BY ALEX (2026-09-25, 2026-09-26)
>
> The original text of both survives below, unedited, because it is the historical record. **Where it disagrees with this block, this block is right and the code is righter still.**
>
> **D4 — "An exam must never write SRS state or mastery rungs" is REPLACED by an ASYMMETRIC write.** Alex: *"the exams should be helping the user build"*. The sandboxed version threw away twenty successful retrievals — among the strongest learning mechanisms there is — in order to stay safe, and that was the wrong trade.
> - a **correct** answer (`hard`/`good`/`easy`) credits the item as an ordinary correct review, so SRS and mastery advance;
> - a **wrong** answer (`again`) writes **NOTHING** — no rung drop, no interval reset, no lapse, no mistake-log penalty, no record of the miss;
> - a correct answer is always credited as **`good`, never `easy`** (`EXAM_CREDIT_GRADE`) — an exam is not the place to earn a long interval and a lucky guess must not push an item weeks out;
> - an item at **rung 0** is skipped entirely: an exam samples the whole band, and promoting an untaught word would slip it into the review queue without a lesson.
>
> **The brief's actual invariant is preserved and is now positive: AN EXAM CAN ONLY EVER MOVE AN ITEM FORWARD.** It is achieved by writing only upward rather than by writing nothing. `forwardOnlySrs` exists because FSRS is *not* monotonic on an early review — answering a card due in 60 days correctly today can return a 40-day interval and pull `due` forward — so every field that can regress is clamped.
> - built as: `creditExamAnswer` in `src/store/useStore.js`; `examCreditGrade` + `forwardOnlySrs` + `EXAM_CREDIT_GRADE` in `src/store/exams.js`
> - the brief's *"a test must assert an exam leaves `items` byte-identical"* is now **three** tests, not one: **`a wrong exam answer changes nothing`** (the original assertion, narrowed to the all-wrong case it was really protecting), **`a correct exam answer can only move an item forward`**, and **`an exam cannot lower anything, on any mix of answers`**.
>
> **D5 — THE THREE HALF-BAND CHECKS ARE RETIRED, replaced by a CHECKPOINT every 6 units.** Alex's concern: seven touchpoints across 126 units means a learner can climb ~30 units without knowing where they stand — and two different flavours of "this doesn't count" was confusing on its own.
> - `CHECKPOINT_EVERY = 6`, `CHECKPOINT_SIZE = 8`, `CHECKPOINT_OLDER = 2` — plain exported constants, tunable in one line
> - **~21 checkpoints per Latin language (22 for fr), 34 for ja**, derived from the corpus with nothing to author
> - ids are `cp-<lang>-u<from>-u<to>` (e.g. `cp-ja-u7-u12`), round-tripping through `parseExamId`
> - **6 questions from the block just finished + 2 from EARLIER material** — the older pair is the point, or it only measures what was just crammed. The very first checkpoint has nothing earlier and falls back to 8 recent, which the paper reports (`olderActual`)
> - same contract as the half-check: no pass, no fail, no threshold, no stored result beyond a last-taken date
> - `parseExamId` still READS a legacy `check-<lang>-<band>.5` id and a paper still builds for one, so a persisted record or an old bookmark cannot crash. Nothing generates one any more.
> - the Ladder surfaces exactly **one** checkpoint — the most recent completed block — below the unit progress bar. **No tab, and not 21 affordances.**
>
> **D6 — A FAILED EXAM NAMES THE LESSONS TO GO BACK TO, AND CHECKPOINTS NOW REMEMBER WHAT WAS MISSED.** Alex, 2026-09-26: *"So what happens when they get to the end exam and fail? I think it should tell the user to review x section(s) x lesson(s) the ones they did poor in since at that point user can go back to any section they learned and checkpoints just keep track of missed questions and use them in the end point but modified so its the same question everytime have a pool"*.
>
> **THIS REFINES D3's "a checkpoint stores no result" — it does not repeal it, and the original rule is preserved above, not deleted.** Alex's founding rule for a checkpoint (*"aren't counted against you, just sees where you are"*, 2026-08-02) still holds exactly: **no pass, no fail, no percentage, no threshold**, and its `exams` record is still `{ lastTaken }` and nothing else. What changed is that the checkpoint now also records **which items** were missed, into a separate, unscored slice. Nothing is penalised — no rung drop, no interval reset, no lapse, no mistake-log entry. It changes only **what gets asked later**, which is the mechanism the app is supposed to run on.
>
> **Part 1 — the result screen names section AND lesson.** A unit title is something you read; a lesson is somewhere you can go.
> - `scoreExam()` returns `shakyAreas` (`[{ unitId, unitTitle, unitOrder, lessons: [{ id, title, no, label }] }]`, climb order) and the flat `shakyLessonIds`; steps now carry `lessonId` / `lessonTitle` / `lessonNo` / `unitOrder`. `label` is what the learner reads — `"u7 l2"`.
> - The panel is titled **"GO BACK TO THESE"** (no shame copy — never "you failed"), every lesson is a tappable chip routing to `/lesson/<id>`, capped at **4** with the remainder counted rather than listed.
> - **Two distinct actions**, because they answer different questions: **"Review these lessons"** (be taught it again) and the pre-existing **"Practice the words"** (drill the exact words — `queuePractice` → `/review?fix=1`). The second was renamed from "Practice the shaky ones" and is otherwise untouched.
> - **A PASS GETS THE BREAKDOWN TOO.** Alex only asked about failing; a 90% pass with two shaky items still says which two.
> - Nothing is unlocked by any of this — every band a learner is examined on is already learned, so it is ordinary navigation.
>
> **Part 2 — the missed pool.**
> - Store key **`missedPool: { [lang]: { [itemId]: { kinds, lastMissed } } }`**. `kinds` accumulates *every* card kind the item has been missed with; `lastMissed` is the eviction key and the draw order. **No count, no score, no percentage anywhere in it.**
> - **Only a checkpoint adds** (`recordCheckpointMiss`, called from `Exam.jsx` guarded on `paper.kind === "checkpoint"`). Deliberately NOT inside `creditExamAnswer`, so that writer stays literally empty on a wrong answer — which is what D4's tests pin.
> - **Any correct answer anywhere removes** — a later checkpoint or band exam (`creditExamAnswer`) *and* an ordinary review (`gradeItem`). `hard` clears it too: `isCorrectGrade` defines a correct answer as anything but `again` everywhere else in the module.
> - **A band exam draws up to `EXAM_POOL_MAX = 8`** of its 20 from the pool, the rest stratified fresh. Fewer in the pool → take what there is. **Empty pool → byte-identical to the previous behaviour**, because the pool draw consumes no randomness when it finds nothing. A checkpoint never draws from the pool; it is the thing that fills it.
> - 🚨 **A pooled item is re-asked in a card kind it was NOT missed with** — `pickKind(item, rnd, avoid)`. That is the whole point: it tests the word, not a memorised prompt. **Measured 2026-09-26: 0 of 20,483 authored items across all six languages have fewer than 3 eligible exam kinds** (minimum 3, mode 8), so the "only one eligible kind, ask it anyway" fallback is a guard for future content, not a live compromise.
> - **Capped at `MISSED_POOL_CAP = 60` per language, oldest-missed evicted first**, so a three-month-old mistake can never crowd out this week's.
> - **`PERSIST_VERSION` is UNCHANGED and no migration was added** — same reasoning as `exams`: `merge` starts from `current`, so an existing save picks up the default. The key is in `partialize` and is cleared by `resetProgress`.
> - built as: `addMiss` / `clearMiss` / `missedEntries` / `drawFromMissed` / `lessonLabel` in `src/store/exams.js`; `missedPool` + `recordCheckpointMiss` in `src/store/useStore.js`; `LessonChip` + the "GO BACK TO THESE" panel in `src/screens/Exam.jsx`.
> - **The intro copy was corrected, not appended to.** A checkpoint used to promise *"No result is saved either — just the date"*; that stopped being true, so it now says *"No score is saved — just the date, plus which words you missed, so a later check can come back to them a different way."*
> - tests: **seven** added in `tests/unit/exams.test.mjs` (46 total), the load-bearing one being **"A POOLED ITEM IS NEVER RE-ASKED WITH THE KIND IT WAS MISSED WITH"**, swept over every band of every authored language. Plus **two** Playwright smokes (45 dev / 43 preview): *"a not-yet-verified exam names the SECTION AND LESSON to go back to, and the lesson opens"* and *"the band exam really spends the missed pool"*. The existing band-exam smoke plays a CLEAN paper — `playCard` answers correctly by construction — so a new `missCard` helper grades wrong on purpose; without it the fail screen and the pool would both have been untested in the browser.
>
> **D7 — JAPANESE BANDS ARE NAMED BY JLPT LEVEL, NOT CEFR.** Alex, 2026-09-27: *"jlpt n5"*.
>
> **THIS REFINES D2 AND D3's LABELS ONLY. It repeals nothing above, and it is not a content change.** `lesson.cefr` is exactly as authored, no lesson was retagged, the cumulative band rule is untouched, `PERSIST_VERSION` is unchanged, and **every milestone id stays byte-identical** — `level-A1`, `level-A1-verified`, `level-B2-verified-fr`. D2's two-honest-signals rule still stands; both signals just say the band in the learner's own vocabulary.
>
> **WHY IT CAME UP.** A Japanese A1 exam paper drew `のんびり` (u63), `そろそろ` (u68) and `けいかん` (u83) — words most people would call A2. **That is not an exam bug.** The exam uses the same cumulative `lesson.cefr` rule `milestones.js` already uses, and **ja's A1-tagged lessons genuinely span u1–u87 (43 units, 1252 items)**. So the paper was faithful and the *label* was the thing that was wrong.
>
> Two ways out were put to Alex: retag those late lessons to A2, or decide that Japanese A1 **means** JLPT N5 and say so. **He chose the second.** No content moved.
>
> | CEFR band (what the engine reasons with) | Japanese label | Every other language |
> |---|---|---|
> | `pre-A1` / `pre-a1` | **Before N5** | Pre-A1 |
> | `A1` | **N5** | A1 |
> | `A2` | **N4** | A2 |
> | `B1` | **N3** | B1 |
> | `B2` | **N2** | B2 |
>
> N1 has no CEFR twin and we do not claim one. There is likewise no JLPT level below N5, so ja's kana foundation reads **"Before N5"** rather than dropping a CEFR word into a JLPT spine — a judgement call, one table entry to revert.
>
> **Built as ONE exported helper, called by every display site.** `bandLabel(lang, band)` in **`src/data/languages.js`**, beside `langName` — it is a display-name helper, and that module has zero imports so anything can read it. It accepts **both spellings the app uses** (the CEFR band `"A1"` from `lesson.cefr` / exam papers / `cefrLevelReached`, and the lowercase unit stage `"a1"` / `"pre-a1"` from `unit.stage`), because both reach the same screens and a helper that took only one of them would guarantee a second hardcoded table. Unknown band or language falls through unchanged rather than blanking the UI.
>
> **There is no `lang === "ja"` branch in any screen** — CLAUDE.md's architecture spine forbids it, and the next language with its own certification ladder (Korean → TOPIK) is one entry in that table and no JSX at all.
>
> **Call sites — all of them:**
> - `src/screens/Exam.jsx` — one `bandName` const feeds the `PhaseShell` title, both intro paragraphs and the result headline. **`N5 verified` / `N5 — not yet verified`.**
> - `src/data/milestones.js` — the `level-<band>` **label and blurb** and the `level-<band>-verified` **label and blurb**. *Japanese N5 complete* sits next to *Japanese N5 verified*; a learner never sees "N5 verified" against "A1 complete" for one band. **The ids were not touched.**
> - `src/screens/Ladder.jsx` — six sites: the rung spine (`CefrRungRow`), the "‹band› progress" heading, "Lessons for ‹band› coming soon", the Units-tab stage groups, the `level → target goal` line, and the band-exam affordance (`✓ N5 verified` / `Take the N5 check →`). **This file's own `STAGE_LABEL` + `JLPT_BY_STAGE` pair is deleted** — it rendered ja as `"A1 · N5"`, two names for one band, and was the only place in the app that knew about JLPT at all.
> - `src/screens/Today.jsx` — the header's `level → target goal` line.
> - `src/screens/Stats.jsx` — the per-language level chip and the per-stage progress rows. Its private copy of `STAGE_LABEL` is deleted.
> - `src/screens/Settings.jsx` — the About → Learning row, and the glyph-script typing copy (*"Through N5 you can answer in rōmaji … from N4 you'll type the kana"*).
> - `src/screens/DevPanel.jsx` — stage section titles and the two add-a-language notes. Its private copy of `STAGE_LABEL` is deleted.
>
> **Test hooks stayed CEFR on purpose.** `data-testid="take-exam-A1"` and `verified-A1` are built from the exam id, not the label; they are machine handles, and moving them would have coupled a rename of *copy* to a rename of *contract*.
>
> **`src/screens/Onboarding.jsx`** said *"You'll unlock the next once you reach A1"* on the language-**pick** screen, where no language is chosen yet and so no correct band name exists. Rewritten band-agnostically: *"once you finish its first level"*.
>
> **tests: five added, one widened.**
> - `tests/unit/languages.test.mjs` — four: ja returns N5/N4/N3/N2 and never leaks the CEFR name; **every other language in `LANGUAGES`** returns A1/A2/B1/B2 across all four bands; both spellings plus `pre-a1`; junk input.
> - `tests/unit/exams.test.mjs` — three: a ja exam paper's display label matches `/^N[0-9]$/` and never contains the CEFR band (while `paper.band` is still CEFR); a fr paper still reads A1; and **"THE JLPT LABEL DID NOT MOVE ANY MILESTONE ID"** — the test that stops someone "fixing" the id to match the label later and silently un-earning every badge on disk. It also asserts no catalog id anywhere contains an `N1`–`N5`.
> - **Widened, not weakened:** *"level-‹band›-verified is a SEPARATE milestone"* asserted `/ (A1|A2|B1|B2) verified$/`. It now derives the expected band from the **id** and pins **one exact string per milestone** (`${langName} ${bandLabel} verified`) — strictly tighter than accepting any of four.
> - smoke: the existing fail-screen assertion is now **`toHaveText("N5 — not yet verified")`** plus *"the string `A1` appears nowhere on the screen"*, and the Ladder button asserts `Take the N5 check →`. That is the proof the label reached the real rendered DOM and not just the unit tests.
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

> ⚠️ **SUPERSEDED 2026-09-25 — see D4 in the stamp at the top of this file.** The rule below is the ORIGINAL and is kept as the record. It is now asymmetric: a correct answer is credited, a wrong answer writes nothing, and the invariant is *an exam can only ever move an item FORWARD*.

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
   *(Superseded 2026-09-25 — D4. The cards still read a throwaway deck, but the store
   writer is now asymmetric, and the byte-identical assertion applies to the ALL-WRONG
   case only. Two further tests cover the forward-only property.)*
3. Result screen + Ladder affordance.
4. Store slice + persist bump (D3 sign-off), `level-<band>-verified` milestone (D2).
5. Smoke: take an exam end to end, assert real progress unchanged, assert a half-check
   records no pass/fail.
