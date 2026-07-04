# Build Brief — Cloze Card ("fill the word into its own sentence")

**Status:** design doc / not started. Authored by **Idea CC** off Batch-1 brainstorm (2026-07-04, pitch **R1**); for **Feature CC + Alex** to sharpen before any code. **Lane: Feature CC** (new card kind = engine/schema, draft PR, Alex merges).
**Goal in one line:** the learner sees a real example sentence with the target word blanked out and supplies it — the first card that tests a word **in context** instead of in isolation.

> This is a **design** doc, not an implementation plan. It exists to settle the forks below. Per the repo rule, read the actual files before building — the ground-truth notes here were verified against the repo on 2026-07-04, but the repo is the source of truth.

---

## Why now

Every card the app ships today (`teach`, `choice`, `listen:choice`, `type:meaning`, `build`, `trace`) tests an item **in isolation** — one glyph, one word, one reading. But the whole promise of Lingua is *deep understanding, not memorization*, and understanding is a word **doing work inside a sentence**: carrying meaning, sitting next to its particle, agreeing with its verb. A learner can currently pass all of A1 without once choosing the right word *for a sentence*.

**The data already exists.** Every `vocab` and `kanji` item carries a validated `example: { jp, en }` (`contract.js` hard-requires it — kana are `example: null`). Those sentences are authored, native-review-gated, and currently used **only** as passive reference on the teach card. A cloze card turns that dormant data into an active comprehension exercise for **~554 items** (448 vocab + 106 kanji) at near-zero content cost.

**This is R1** in the Idea-CC Batch-1 pitches — the single biggest lever on "understanding over memorization" we're missing, and it interleaves vocab + particles + grammar in one card.

## The one decision that keeps this simple: it's a *variant*, not a new rung

**Do NOT add a rung to `RUNGS`.** The mastery ladder (`src/store/mastery.js`) is `["NEW","RECOGNIZED","RECALLED","PRODUCED","SPOKEN","MASTERED"]`. A cloze is not a new *skill tier* — it's an alternate **presentation** of the recognition/recall the app already grades, moved from isolation into context. Picking たまご to complete `＿＿をたべます ("I eat an egg")` is the same graded skill as picking "egg" for たまご — just context-in instead of glyph-in.

So cloze slots into an existing review rung as an interleaved substitute for `choice` / `type:meaning`, exactly as `listen:choice` did — and needs **zero** change to rungs, FSRS, mastery, persist, or the item schema. That's what makes it a contained Feature-CC PR, not an engine epic. (The listening card is the proof-of-pattern: it shipped as a pure variant.)

---

## What already exists in the repo (ground truth — verified 2026-07-04)

- **The example data is there and validated.** `contract.js` requires every `vocab` and `kanji` item to have `example: { jp, en }` with non-empty `jp` and `en` (lines ~177–195); `kana` must have `example: null`. Real shape (`src/data/ja/unit9.js`):
  ```js
  { id:"ja-u9l1-tamago", type:"vocab", front:"たまご", reading:"tamago", meaning:"egg",
    example:{ jp:"たまごをたべます。", en:"I eat an egg." }, accept:["eggs"] }
  ```
  The target `front` (`たまご`) appears **verbatim** in `example.jp` in the common case — that substring is what gets blanked.
- **Option-building is done and already supports JA-word options.** `src/store/distractors.js` → `buildOptions(item, allItems, 4, fieldOverride)`. The listening card passes `"front"` as the override to get **glyph/word** options instead of meaning options — cloze wants exactly that (the blank lives in a JA sentence, so the 4 choices must be JA words). Same-type peers → for a food sentence the distractors are other foods, all grammatically plausible, which is what makes the card test *comprehension* not *grammar-shape*.
- **Grading is done.** `src/store/grading.js` → `deriveGrade({ kind:"mc", correct })` for a pick, `deriveGrade({ kind:"typed", correct, elapsedMs, target })` for typed. Cloze reuses these verbatim — correct → `good`, wrong → `again`, no self-grade buttons (Phase-0 rule).
- **Answer-checking for the typed flavor is done.** `src/store/answer.js` → `checkReading(input, item)` (accepts kana or folded romaji). `cloze:type` reuses it unchanged.
- **The routing-guard pattern is established.** `src/store/cardRouting.js` already does exactly this shape for listening: a `hasAudio(item)` manifest check + a `LISTEN_SHARE` interleave constant + a deterministic `hash01(id)` so the coverage fixture reliably hits the kind (no `Math.random` in routing). Cloze copies this pattern with `canCloze(item)` + `CLOZE_SHARE`.
- **The rung → card map lives in `reviewStepFor` (`src/screens/Review.jsx`, ~lines 22–31):**
  ```
  rung ≤ 1 → shouldListen ? listen:choice : choice   (RECOGNIZED)
  rung === 2 → type:meaning                          (RECALLED)
  rung ≥ 3 → trace | build                           (PRODUCED)
  ```
  Cloze is inserted here as one more interleave branch (which rung is an open decision below).
- **The forcing function** (CLAUDE.md + `assertLiveKind` in `Review.jsx`/`Lesson.jsx`): a card kind ships **only** when it's in `LIVE_CARD_KINDS` (`src/data/contract.js`, currently `["teach","choice","listen:choice","type:meaning","build","trace"]`) **AND** exercised by the coverage fixture (`tests/smoke.spec.js` → `kindFixtureState` / the "every LIVE_CARD_KIND appears" test). The `family:mode` key shape means `cloze:choice` / `cloze:type` fit `assertLiveKind` and the convention.

---

## Two flavors (ship one first)

| Kind | Prompt | Answer | Grades via | Skill | Slots at |
|------|--------|--------|-----------|-------|----------|
| **`cloze:choice`** (v1) | English gloss + JA sentence with the target blanked | pick 1 of 4 JA words | `buildOptions(…, "front")` + `deriveGrade({kind:"mc"})` | meaning → word-in-context | rung 1–2 |
| **`cloze:type`** (later) | English gloss + JA sentence with the target blanked | type the missing word (kana/rōmaji) | `checkReading` (`answer.js`) | recall → production-in-context | rung 2–3 |

**Recommend `cloze:choice` for v1** — no typing, lowest friction, almost entirely existing helpers (`buildOptions` + `deriveGrade`). `cloze:type` (true productive recall in context) is a fast follow once routing + the blanking guard are proven.

### The prompt design (this is the pedagogy — get it right)

```
   "I eat an egg."          ← example.en, shown as the comprehension clue
   ＿＿ を たべます 。        ← example.jp with item.front blanked
   [ たまご ] [ やさい ] [ にく ] [ おちゃ ]   ← 4 JA-word options (front + 3 same-type peers)
```

**Show the English gloss.** Without it, `＿＿をたべます` is ambiguous — egg, meat, and vegetables all complete it grammatically. The English pins the intended answer AND makes the card a genuine *comprehension* exercise (read the meaning → choose the word that belongs in the real sentence), reinforcing JA↔EN mapping in context rather than pattern-matching a particle. This is the difference between a cloze that teaches understanding and one that's a lucky guess. **Strongly recommended; it's the core of the pitch.**

---

## Proposed architecture (v1, `cloze:choice`)

```
Review runner, item is cloze-eligible (has a blank-able example), in the chosen rung band
  → reviewStepFor() returns { kind:"cloze:choice" }   (interleaved with choice / type:meaning)
  → <ClozeCard item allItems onGraded />
       • render example.en as the clue
       • render example.jp with the FIRST occurrence of item.front replaced by a blank
       • 4 options via buildOptions(item, allItems, 4, "front")   (JA words)
       • pick → deriveGrade({ kind:"mc", correct })   → good / again
  → onGraded(grade) → existing gradeItem → FSRS + rung   (UNCHANGED)
```

**Dedicated `ClozeCard` component, reusing the shared helpers.** `ChoiceCard` already carries an `audioFirst` branch; folding a sentence-prompt + English-gloss + blanking mode into it too would overload one component (a `/simplify` smell). Cleaner: a small `ClozeCard` that imports the *same* `buildOptions` / `deriveGrade` / `sfx` and owns only the sentence rendering + blank. No grading logic is duplicated — only the presentation differs.

### The blanking + routing guard (the one piece that needs care)

A cloze card is unanswerable if the target word can't be located in its sentence. Mirror the listening guard:

- **`canCloze(item)` in `cardRouting.js`:** true only when `item.example?.jp?.includes(item.front)`. `reviewStepFor` returns a `cloze:*` kind only when `canCloze(item)` (and the interleave share hits); otherwise it falls back to the plain `choice`/`type` for that rung. Deterministic `hash01(item.id) < CLOZE_SHARE` (reuse the existing helper) so the coverage fixture reliably hits it.
- **Blanking:** replace the **first** occurrence of `item.front` in `example.jp` with a fixed blank token (e.g. `＿＿`). Keep it a pure string op in one tested helper (`blankExample(item)`), not inline in the card.
- **Edge cases to lock (open decision 5):** (a) a 1-kana vocab `front` that appears incidentally *inside* another word in the sentence — restrict v1 to fronts of length ≥ 2, or require the front to sit on a token boundary; (b) `front` appearing more than once — blank only the first; (c) conjugated/inflected examples where the dictionary `front` isn't a verbatim substring — `canCloze` returns false and the item simply never clozes (safe degradation, same as a silent item never listening).

### Interleaving (don't replace the eye/meaning path — alternate with it)

Keep `choice`/`type:meaning` too; cloze is *added depth*, not a replacement. At the chosen rung, alternate the isolated card with the cloze via `CLOZE_SHARE` (a tuning constant next to `LISTEN_SHARE`). Interleaving isolated + in-context recall is itself good learning science.

---

## ND-friendly design (non-negotiable, per the anti-burnout spine)

- **Never a guessing wall** — the English gloss guarantees the answer is *derivable*, not a coin-flip. That's the whole reason to show it.
- **Short sentences only** — A1 examples are one short clause; no wall of text. If a future example is long, that's a content signal, not a card problem.
- **No new harshness** — wrong → `again` (gentle re-try), same grade vocabulary the runner already speaks. No red X, no self-grade buttons.
- **The blank is obvious** — clear, high-contrast blank token; the learner never wonders *where* the gap is.
- **Tuning is constants** — `CLOZE_SHARE` and the rung placement are named constants next to `LEARN_OPTS`/`LISTEN_SHARE`, not magic numbers buried in `reviewStepFor`.
- **Respects reduce-motion** — no animation dependency (pairs cleanly with the R4 reduce-motion pitch).

---

## What this does NOT touch (keep it contained)

- ❌ **No new rung** — `RUNGS` / `mastery.js` untouched.
- ❌ **No FSRS / grading-logic change** — reuses `gradeItem`, `deriveGrade`, `checkReading`, `buildOptions`.
- ❌ **No item-schema change** — `example` already exists and is validated; nothing new in `contract.js`'s item fields. *(The only `contract.js` edit is adding the kind to `LIVE_CARD_KINDS`.)*
- ❌ **No persist / localStorage migration.**
- ❌ **No content authoring** — uses the examples already written. (Curriculum CC involvement is nil for v1; see the grammar-cloze follow-up for a possible future content assist.)

---

## Forcing-function checklist (how `cloze:choice` actually goes live)

1. `blankExample(item)` + `canCloze(item)` helpers in `cardRouting.js` + `CLOZE_SHARE` constant, with unit tests (blank the right token; false when front absent / too short).
2. `ClozeCard` component (English gloss + blanked sentence + 4 `buildOptions("front")` options + `deriveGrade` mapping).
3. Wire into the **review** runner at the chosen rung, interleaved (fall back to `choice`/`type` when `!canCloze`).
4. Add `"cloze:choice"` to `LIVE_CARD_KINDS`.
5. Extend `kindFixtureState` + the "every LIVE_CARD_KIND appears" coverage test so `cloze:choice` is exercised (fixture item needs a blank-able example).
6. Unit-test the guard (front-absent → falls back) and the grade mapping, purely (no DOM/network).
7. Full green: `validate:content` → `lint:curriculum` → `test:unit` → Playwright smoke (dev **and** preview) → `build`.

## Open decisions (lock before building)

1. **v1 scope** — `cloze:choice` only (recommended), or `cloze:type` too?
2. **Show the English gloss?** — recommended **yes** (resolves ambiguity + is the comprehension point). The alternative (JA-only) makes multiple options valid.
3. **Which rung / interleave with what** — `cloze:choice` at rung 1–2 interleaved with `choice`/`type:meaning`? Recommend **rung 2** (recall-in-context) so it deepens rather than duplicates rung-1 recognition. A tuning constant.
4. **Options field** — JA `front` words via `buildOptions(…, "front")` (recommended). Confirm same-type peers read as plausible fills for the blank.
5. **Blanking edge cases** — front length ≥ 2 only? token-boundary check? (see guard section). Lock the rule so a cloze never blanks the wrong characters.
6. **Dedicated `ClozeCard` vs extend `ChoiceCard`** — recommend a dedicated component reusing the shared helpers (avoid overloading ChoiceCard, which already branches on `audioFirst`).
7. **Also in the lesson, or review-only?** — recommend **review-only** for v1 (simpler; first-teach already shows the example passively on the teach card).
8. **Kanji clozes** — kanji items also have `example`; include them in v1 or vocab-first? (Kanji examples embed the glyph, so `canCloze` works; the option words would be kanji.) Recommend vocab-first, kanji as an immediate follow once the blanking guard is proven on vocab.

## Suggested build phases

- **C.0** — `blankExample` + `canCloze` + `CLOZE_SHARE` + unit tests (no UI). Prove the blank is always correct and eligibility never serves an unfillable sentence.
- **C.1** — `ClozeCard` UI (gloss + blanked sentence + options), wired into review behind the guard, interleaved at the chosen rung.
- **C.2** — `cloze:choice` into `LIVE_CARD_KINDS`, extend the coverage fixture, CI green.
- **C.3** — Alex device feel-check (does the English clue make it derivable? does it *feel* like understanding vs a reskinned choice? are the distractors plausible-but-clearly-wrong given the gloss?), then merge.
- **C.4 (optional follow)** — `cloze:type` (type the missing word) at rung 2–3; kanji clozes.

**DoD:** in a review session, an eligible item sometimes presents as its own example sentence with the target word blanked and an English clue above it; the learner picks (or types) the word that belongs, and it grades exactly like a choice/type card — gentle `again` on a miss, guaranteed fallback to the isolated card when an item has no blank-able example. No rung/FSRS/schema change. CI green including a `cloze:choice` coverage path.

---

## Relationship to other work

- **Uses the listening card's proven pattern.** `cloze` is the third pure *variant* (after `listen:choice`) that reuses `buildOptions` + `deriveGrade` + the `cardRouting.js` manifest/share/hash guard shape. If listening shipped clean, cloze rides the same rails — the routing and coverage-fixture work is a known quantity.
- **Grammar-cloze is the natural follow-up (future brief).** Blanking the **particle** instead of the content word (`たまご＿たべます` → pick を/が/に/で) is a powerful grammar drill and directly serves the same "understanding" goal — but particles repeat and are ambiguous, so it needs its own design pass (and possibly a small Curriculum data assist to mark the target particle). Log as a follow-up, not v1.
- **Pairs with R2 (softer type feedback).** When `cloze:type` lands, the near-miss diff feedback makes an in-context typo a teaching moment rather than a flat miss.
