# Build Brief — Mastery by repetition, not by calendar

**Lane:** Feature CC (engine + store + persist + a new session surface) — schema/persist/mastery touch, so **draft PR, Alex merges**; multi-PR.
**Status:** 🟡 DESIGN — Alex's model, settled 2026-09-03. Numbers below are measured, not estimated. Not greenlit to build yet.
**Origin:** Alex, after noticing the mastery meter fills fast: *"the master meter shouldn't go up by day but by how often the card's been seen by the user and if they've gotten it right… to master it you have to have done each card type on it 15 times, and that comes from review (daily) and a practice limited to 3 runs/day that count towards mastery — so a total of 4 possible per day."*

---

## 1. The model in one line

**A word is mastered when the learner has answered it correctly 15 times on EVERY card type that word can route to.** Counted passes come from the daily scheduled review (1/day) plus a practice mode capped at 3 runs/day — **4 counted passes per item per day, maximum**. No calendar term anywhere in the meter.

### What this replaces

| | today | after |
|---|---|---|
| Meter | `sqrt(stability / 45 days)` — FSRS retention, a calendar quantity | correct passes / required passes |
| Fills | at 11 days' stability the bar reads **50%** | only by answering correctly |
| "Mastered" on Ladder | `isMastered()` = stability ≥ 45d, **no speaking required** | one definition, shared |
| "Mastered" on Stats | `rungCounts[5]` = the rung ladder, **speaking required** | one definition, shared |
| Evidence behind it | 5 correct answers, ever — one per rung | 60–135 correct answers across every skill |

The two surfaces disagree today: the same word can be mastered on the Ladder and not on Stats. That is the incoherence this brief closes.

---

## 2. Why this is not "just lower the number"

Spaced repetition deliberately **minimises** repetitions — each success buys a longer interval. Reviewing an item exactly when due, every answer correct (measured against the real scheduler, `ts-fsrs`, not estimated):

| correct reps | calendar time to get there |
|---|---|
| 3 | 12 days |
| 5 | 7 months |
| 7 | **5.5 years** |
| 10 | **73 years** |
| 15 | **547 years** |

So 15 passes **cannot** come from the review queue. That is the whole reason the practice surface exists: it is the only way to supply repetition volume without the scheduler's intervals gating it.

**This is why practice must not touch the SRS card** (§4). If drilling rescheduled the item, drilling would destroy the retention model it sits beside.

---

## 3. The numbers, measured on the real corpus

Required passes = 15 × the item's **eligible** card kinds. Eligible is per item, not a fixed list — kana cannot `speak`, Latin-script has no `trace`, only tagged verbs `conjugate`.

Measured three ways, because the definition of "eligible" changes the answer by 60%:

| eligibility rule | ja | fr | es |
|---|---|---|---|
| by hash (today's gates) | 6.5 kinds → 97 passes → 25 days | 5.2 → 78 → 20 days | 5.1 → 77 → 20 days |
| **by well-posedness (§4.6)** | **9.0 → 135 → 34 days** | **8.1 → 122 → 31 days** | **8.0 → 120 → 30 days** |
| well-posedness + universal drills + `build`/`type:reading` counterparts | ~10 → ~150 → ~38 days | ~10 → ~150 → ~38 days | ~10 → ~150 → ~38 days |

So `bonjour` is **~120 correct passes, ~31 days** of daily drilling today, heading to ~150 / ~38
days once drills and the two Latin counterparts land. That is the honest price of "every card
type actually means every card type".

That is the intended feel: mastery is something you go and **do** to a word, not a state words drift into.

**Corpus-wide mastery is not the goal and is not reachable** (10,200 items × ~85 passes ≈ 870,000 answers). Mastery is per word, pursued deliberately. The Ladder already shows it per item. Say this out loud in the UI copy so nobody reads a 3%-mastered corpus as failure.

---

## 3b. Card types are UNIVERSAL and adapt per language (Alex, 2026-09-03)

*"Card types are supposed to be universal and adjust per language… really all words should
have sentences, all cards if possible."* Correct, and of the 15 live kinds only **one** is
genuinely script-bound. Eligibility below is by **well-posedness**, not hash (§4.6).

| card | universal? | what adapts, or what is missing |
|---|---|---|
| `choice` · `choice:reverse` · `type:meaning` · `listen:choice` · `listen:type` · `speak` | ✅ already | — |
| `cloze:choice` | ✅ | needs the front inside the sentence → **`drill` makes it universal** |
| `sentence:build` | ✅ | needs 3–8 clean tokens → **`drill` makes it universal** |
| `particle:choice` | ✅ in principle | ja particles / Latin prepositions. Starved at **9%** for Latin: examples rarely place a preposition right after the front. A drill can be written to |
| `conjugate` | ✅ now (Latin engine shipped) | **0% until Curriculum tags verbs** with `group` + `conjForm` |
| `build` | ❌ ja-only — **fixable, net-new** | the concept is "assemble from pieces". ja assembles kana→rōmaji; Latin has no script change, so it needs **letter tiles**. A new card, not a gate change |
| `type:reading` | ❌ ja-only — fixable | a Latin front and its reading differ only by accents, so the card would display its own answer. The Latin counterpart is *type it **with** the accents* from an unaccented prompt — a real es/fr skill |
| `trace` | ❌ ja-only, **and it should stay that way** | `CONTENT.md` script policy: do not build a traceable a–z. Tracing kana/kanji is the production skill; tracing "b" is busywork |

**End state: 12 of 15 universal**, `trace` deliberately ja-only, `build` and `type:reading`
gaining Latin counterparts as separate work.

### When `speak` is introduced — today, and after

**Today: rung 4, identically in all three languages.** `shouldSpeak` is one line
(`item.type === "vocab"`) and the runner shows it at rung ≥ 4 — the **5th correct answer on
that word**, whether it is u1 or u126. No unit gate, no CEFR gate, no setting, no per-language
difference. Kana and kanji never speak.

**After: speak is a required type from the start**, so it is met early and often rather than
at the end of a word's life. If speak must be *earned* rather than available immediately, that
is a separate gate and needs stating — it is not there now.

## 4. The engineering constraints, in priority order

1. **Practice must not write `srs`.** It increments mastery counters and nothing else. A practice answer never reschedules, never changes `due`, never changes FSRS `stability`. Otherwise drilling a word 4×/day collapses its interval and the retention model with it.
2. **Cards must rotate within a stage.** `reviewStepFor(item, rung)` is deterministic today — same item, same rung, same card, forever. That is why lifetime variety averages ~4 kinds: exactly one per rung. **Without rotation, "15 of each type" is unreachable by construction** — the item would only ever show one type per stage. Rotation is a prerequisite, not a nice-to-have.
3. **Required set is relative to eligible kinds.** A fixed list makes half the corpus unmasterable — the exact defect class cleared in `fix/latin-card-variety` (items that could not reach a card kind at all).
4. **Eligibility is WELL-POSEDNESS, never the hash.** Two different questions share one gate today: *can this card be a fair question for this word* (`canCloze`, `canSentence`, `hasAudio`, `canBuildReading` — a content question) and *should it show today* (`shouldCloze` et al — a hash share, for interleaving variety). If the requirement set uses the hash, **a coin flip on the item id decides whether mastering a word includes spelling it**: `type:produce` covers only 50% of fr items by hash, and 100% by well-posedness. Mastery requirements use `can*`; the daily review keeps using `should*` for variety. This is the single change that makes Alex's "all cards" ask real.
5. **The daily review still owns `rung` and `srs`.** Rung stays the qualitative stage and keeps driving which card family is appropriate; mastery becomes the quantitative axis beside it. They are different questions and should stay different fields.
6. **Only correct answers count.** A wrong answer in practice does not decrement mastery and does not touch rung — practice is safe to attempt. (Wrong answers in the *scheduled review* keep their existing rung/FSRS consequences.)

---

## 5. What changes

**Store / persist (the gated part — Alex's call, persist version bump):**
- Per item: `passes: { [cardKind]: number }`. Sparse — only kinds actually passed.
- Per item: `lastCountedDay: { [source]: "YYYY-MM-DD" }` or a small counter, to enforce the 4/day cap across sessions and survive a reload.
- `partialize` / `SYNC_KEYS` must carry both, or mastery resets on a new device. Keep `slimItems` slim: counters only for touched items.
- **Migration:** existing learners have `rung` + `srs` and no counters. Derive a starting `passes` from rung so nobody's bar visibly drops — e.g. seed each rung's stage kind with a fraction of 15 proportional to rung reached. Decide the exact map before shipping; a visible regression in mastery is the one outcome that will read as data loss.

**Mastery (`src/store/mastery.js`):**
- `requiredPasses(item)` → 15 × eligible kinds; `masteryPct(item)` → counted / required; `isMastered(item)` → pct ≥ 1.
- Delete `MASTERY_FULL_DAYS` and the sqrt curve. Keep the concave *display* only if it is still wanted — but it is what made the bar read 50% at a quarter of the work, so default is linear.

**Routing (`src/store/reviewStep.js`):**
- Rotate within a stage: pick the eligible kind for this rung with the FEWEST passes, so drilling naturally fills the thinnest skill first. Deterministic tie-break by hash so it stays stable and testable.

**New surface — practice:**
- 3 runs/day, each run a short session over items the learner picks (or the current unit).
- Writes only mastery counters. Reuses the existing card components unchanged.
- The existing "Low on energy? Just a few (3)" micro-session is a *review* path — do not conflate them; practice is a separate, non-scheduling surface.

**UI:**
- Ladder meter and Stats tile read the same `isMastered`.
- Show `12/15` per card type on the item detail — the learner should see which skill is behind.

---

## 6. Open decisions (recommendation first)

1. **Uneven requirements.** A ja item with 9 eligible kinds needs 135 passes; one with 4 needs 60. *Rec: keep it eligible-relative and let it be uneven* — a word with more ways to be tested genuinely has more to prove. Alternative is a cap (e.g. required = 15 × min(eligible, 6)).
2. **Does `speak` count toward mastery when the mic is unavailable?** Today SpeakCard degrades to *"say it out loud anyway"* with a Continue that grades `good` — a free pass. If speak is one of the 15-count types, that free pass becomes a mastery hole. *Rec: an ungraded speak does not increment the counter; it stays bonus practice and says so.*
3. **Is a practice "run" one pass per item, or several?** *Rec: one counted pass per item per run* — that is what makes 3 runs + 1 review = exactly 4.
4. **15 for every kind, or per stage?** *Rec: per kind as Alex specified.* Note it means the recognition stage (3 kinds) needs 45 passes while `speak` (1 kind) needs 15.
5. **Does mastery ever decay?** *Rec: no.* Decay is what `srs`/rung already model; a mastered word that lapses drops rung and comes back in review, which is the honest signal.

---

## 7. Non-goals

- Corpus-wide mastery. Not reachable, not the point.
- Changing FSRS, `LEARN_OPTS`, or the daily review's obligation half.
- Making practice count toward the daily goal or the streak — practice is capability work, not activity to be rewarded (`CLAUDE.md` anti-gamification).

---

## 8. Gates

`npm run test:unit` · `validate:content` · `lint:curriculum` · `audit` · `build` · Playwright dev **and** `SMOKE_MODE=preview`.

Plus, specific to this brief:
- A test that an item's required set equals its eligible kinds, for a sampled item in each language, and that **no item's required set is empty or unreachable**.
- A test that the 4/day cap holds across a simulated day, including a reload mid-day.
- A test that a practice answer leaves `srs` **byte-identical** — this is the constraint that protects the retention model, so it needs an assertion, not a comment.
- A migration test: an existing learner's mastery does not drop.
