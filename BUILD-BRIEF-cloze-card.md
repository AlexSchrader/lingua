# Build Brief — Cloze Card ("fill the word into its own sentence")

**Status:** ✅ **SHIPPED** (`cloze:choice` is in `LIVE_CARD_KINDS`, `shouldCloze` in `cardRouting.js`). Authored by **Idea CC** off Batch-1 brainstorm (2026-07-04, pitch **R1**); built by Feature CC. Kept as the design record + the follow-up list (`cloze:type`, particle cloze). **Lane: Feature CC.**
**Goal in one line:** the learner sees a real example sentence with the target word blanked out and supplies it — the first card that tests a word **in context** instead of in isolation.

> Design doc, not an implementation plan. Ground-truth notes verified against the repo 2026-07-04; the repo is source of truth.

---

## Why now

Every card the app shipped before this (`teach`, `choice`, `listen:choice`, `type:*`, `build`, `trace`) tests an item **in isolation** — one glyph, one word, one reading. But the whole promise of Lingua is *deep understanding, not memorization*, and understanding is a word **doing work inside a sentence**: carrying meaning, sitting next to its particle, agreeing with its verb.

**The data already exists.** Every `vocab` and `kanji` item carries a validated `example: { jp, en }` (`contract.js` hard-requires it — kana are `example: null`). Those sentences were authored, native-review-gated, and previously used **only** as passive reference on the teach card. A cloze card turns that dormant data into an active comprehension exercise for **~554 items** at near-zero content cost.

## The one decision that keeps it simple: it's a *variant*, not a new rung

**No new rung.** A cloze is not a new skill tier — it's an alternate **presentation** of the recognition/recall the app already grades, moved from isolation into context. Picking たまご to complete `＿＿をたべます ("I eat an egg")` is the same graded skill as picking "egg" for たまご. So cloze slots into an existing review rung as an interleaved substitute — **zero** change to rungs, FSRS, mastery, persist, or the item schema. That's what made it a contained Feature-CC PR.

## What the repo provides (ground truth — verified 2026-07-04)

- **The example data** — `vocab`/`kanji` items require `example { jp, en }`. Real shape (`src/data/ja/unit9.js`): `{ front:"たまご", example:{ jp:"たまごをたべます。", en:"I eat an egg." } }`. The target `front` appears **verbatim** in `example.jp` in the common case — that substring is what gets blanked.
- **Option-building** — `src/store/distractors.js` → `buildOptions(item, allItems, 4, "front")` returns JA-word options (the listening card already uses the `"front"` override). Cloze wants exactly that (the blank lives in a JA sentence).
- **Grading** — `src/store/grading.js` → `deriveGrade({ kind:"mc", correct })`. Reused verbatim: correct → `good`, wrong → `again`.
- **Routing-guard pattern** — `src/store/cardRouting.js` established `hasAudio`/`LISTEN_SHARE`/`hash01`; cloze copies it as `shouldCloze` + `canCloze`.

## The prompt design (the pedagogy)

```
   "I eat an egg."          ← example.en, the comprehension clue
   ＿＿ を たべます 。        ← example.jp with item.front blanked
   [ たまご ] [ やさい ] [ にく ] [ おちゃ ]   ← 4 JA-word options
```

**Show the English gloss.** Without it, `＿＿をたべます` is ambiguous — egg/meat/vegetables all complete it grammatically. The English pins the answer AND makes it a genuine comprehension exercise (read the meaning → choose the word that belongs). This is the difference between a cloze that teaches understanding and one that's a lucky guess.

## Follow-ups still open (the reason this doc stays)

- **`cloze:type`** — type the missing word (kana/rōmaji) via `checkReading` instead of picking. Productive recall in context; rung 2–3.
- **Particle cloze (`cloze:particle`)** — blank the *particle*, not the content word (`たまご＿たべます` → pick を). Now tracked as **Batch-2 pitch R10**; needs the JA tokenizer or a small content tag on the target token.
- **Kanji clozes** — kanji items also have `example`; confirm the blanking guard works on kanji glyphs.

## What it did NOT touch
No new rung · no FSRS/grading-logic change · no item-schema change (only `LIVE_CARD_KINDS` gained `cloze:choice`) · no persist migration · no content authoring.
