# BUILD-BRIEF — Sentence builder v2: the granular tokenizer

**Author:** Idea CC (2026-07-12) · **Lane:** Feature CC (engine/routing) · **Status:** brief — awaiting Alex greenlight
**Pitches subsumed:** Batch 2 **R11** (sentence builder — SHIPPED v1), **R12** (EN→JA production — SHIPPED implicitly by v1), and the **shared tokenizer keystone**.
**Depends on / touches:** `src/store/cardRouting.js`, `src/components/games/SentenceCard.jsx`, `tests/unit/cloze.test.mjs`. **No schema change. No new `LIVE_CARD_KINDS` entry.** Reuses the shipped `sentence:build` card.

---

## TL;DR

The flagship sentence builder **already shipped** — but in a coarse v1 form that the code itself flags as provisional (`cardRouting.js:171–172`: *"Covers the [N は/が/を … V] beginner sentence shape; a granular multi-clause tokenizer is a future upgrade."*). This brief is that upgrade: replace the `[word][particle][rest-blob]` split with a **greedy longest-match tokenizer** over the known-vocab fronts + the closed particle set, so multi-word sentences break into real word + particle tiles and the card actually tests **word order and particle placement** — the thing the R11 pitch promised. It's a **near-pure `cardRouting.js` change** (the card component barely moves), it subsumes R12's "distractor-word pool," and it degrades safely on anything it can't tokenize.

---

## Ground truth — what's already built (read before starting)

Two lanes' worth of the Batch-2 checklist are **stale**; verified against the tree 2026-07-12:

| Pitch | Checklist says | Reality |
|-------|----------------|---------|
| **R10** particle cloze | untouched | **SHIPPED** — `particle:choice` in `LIVE_CARD_KINDS`; `ClozeCard particle` mode; `shouldParticleCloze`/`particleChoices`/`blankParticle` in `cardRouting.js`; routed at rung 2. |
| **R11** sentence builder | untouched (flagship, brief first) | **SHIPPED v1** — `sentence:build` in `LIVE_CARD_KINDS`; `SentenceCard.jsx`; `sentenceTokens`/`canSentence`/`sentenceTiles`/`shouldSentence` in `cardRouting.js`; routed at rung 3 (`Review.jsx:59`). |
| **R12** EN→JA production | untouched | **SHIPPED implicitly** — `SentenceCard.jsx:61` shows *only* `item.example.en`; the JA is hidden and assembled from tiles. That IS production-from-meaning. The only piece R12 adds beyond v1 is a **distractor-word pool** (v1 adds one distractor *particle* only) — folded into this brief. |
| **R13** conjugate | needs new content data | **SHIPPED** — `conjugate` in `LIVE_CARD_KINDS`; `ConjugateCard.jsx`; `shouldConjugate` + `conjugate.js` engine; routes whenever a verb carries `group`+`conjForm`. |

**Net:** the only genuinely-open work in Batch 2 is the tokenizer upgrade below. (Checklist correction is applied in the same edit that adds this brief pointer.)

### The v1 limitation, concretely

`sentenceTiles(item)` (`cardRouting.js:175–197`) does:

1. `sentenceTokens` requires the example to **start with the item's own front**, followed immediately by a single core particle (です-guarded), followed by a non-empty remainder.
2. It returns exactly `[front, particle, rest]` — where **`rest` is the entire tail as one string**.
3. `sentenceTiles` adds **one** distractor particle and shuffles → 4 tiles total.

So `すしをたべます` → tiles `[すし, を, たべます, +1 distractor particle]`. Fine. But `わたしはこうえんでほんをよみます` → `[わたし, は, こうえんでほんをよみます, +particle]` — a **3-tile trivial drag**; the entire predicate clause is one blob, and the three internal particles (で/を) and word order are never tested. For the grammar units (U19–21) this is the difference between "recognises a topic marker" and "can build a sentence."

---

## Goal

Split a space-less kana/kanji example sentence into its **word + particle tokens**, so the builder presents one tile per real token and tests genuine ordering + multi-particle choice — while never mis-splitting a word and always degrading safely.

Non-goals: full morphological parsing, conjugation splitting, multi-clause/subordinate handling, or a new rung/card kind. This is a tokenizer swap behind the existing card.

---

## Design

### 1. The tokenizer — greedy longest-match with a glued tail

Build a **dictionary** once (module-level, memoized) from real content:

```
KNOWN_FRONTS  = every vocab item's `front`, from seedItems(), length-desc.
                (globally unique — the vocab-front uniqueness validator guarantees
                 no ambiguous overlap, so longest-match is deterministic.)
PARTICLES     = CORE_PARTICLES (は が を に へ で と も の) + か  (sentence-final Q)
COPULA        = です です* / でした / じゃないです / ではありません …  (closed list;
                treat as single trailing predicate tokens, never split their で)
```

`tokenize(jp)` — strip trailing punctuation, then scan left→right:

- At each position, try to match (a) the **longest** `KNOWN_FRONTS` entry that is a prefix here, else (b) a **copula** form, else (c) a single **particle**.
- Emit the matched span as one token; advance.
- **Glued-tail fallback:** the moment nothing matches at the cursor (a conjugated verb, an adjective+copula, a counter, an un-taught span), **stop tokenizing and emit the entire remainder as one final tile.** Return the tokens so far + that tail.

This is the crux and the safety valve. Clean beginner sentences (`N は N を V-known`) tokenize fully; anything with an unparsable predicate still splits its **leading** noun-phrase-and-particle structure and blobs only the verb — strictly better than v1, never worse, and it can **never mis-split a word** (longest-match over unique fronts + a hard stop on the first miss).

Expose:
- `tokenizeSentence(jp) → string[]` — pure, the tokens (with glued tail if any).
- `canBuildSentence(item)` — eligible when tokenization yields **≥ 4 tiles** *and* at least one is a particle (so trivial 2–3 tile sentences fall through to v1's behaviour or another rung-3 card — no regression, and we don't dignify a 3-tile drag as "sentence building"). Tunable threshold constant `MIN_SENTENCE_TILES`.

### 2. Tiles + distractors (folds in R12)

`buildSentenceTiles(item, allItems)`:
- `answer` = the ordered token list.
- **Distractor particle** (keep v1's): one core particle not in `answer`.
- **Distractor word** (NEW — R12's ask): one plausible same-type peer front pulled via the existing `buildOptions(item, allItems, …, "front")` machinery (or a light same-`type` sibling pick), excluded if it already appears in `answer`. Gated by a constant so it can be turned off: `SENTENCE_WORD_DISTRACTOR = true`.
- Shuffle `[...answer, distractorParticle, distractorWord]`.

Grading is unchanged: correct assembly → `deriveGrade({kind:"typed", …})`, wrong → `again` (Reset re-tries free). The distractors make a wrong tile a *real* choice, so `again` stays fair.

### 3. Card component — minimal change

`SentenceCard.jsx` already renders `spec.answer` / `spec.tiles` generically and has the `window.__sentence.solve()` CI hook. Point `spec` at `buildSentenceTiles` (via a renamed/extended `sentenceTiles`) and it works as-is. Optional polish: with more tiles, ensure the assembled row + tray wrap gracefully on a phone viewport (they already `flexWrap`). Consider a **tap-to-undo on the assembled row** (parity with `BuildCard.jsx:68–90`, which the current SentenceCard lacks) — small ND win now that there are more tiles to misplace.

### 4. Routing — unchanged surface

`shouldSentence` stays the rung-3 hash-band gate (`SENTENCE_SHARE`), just keyed to the new `canBuildSentence`. `reviewStepFor` (`Review.jsx:59`) is untouched. No `LIVE_CARD_KINDS` edit, no coverage-fixture change (the fixture item `ja-u1l3-sakana`… — confirm it still tokenizes ≥4 tiles or pick a fixture sentence that does; see Phase 3).

---

## Open decisions (for Alex)

1. **`MIN_SENTENCE_TILES` = 4?** Below this the card is barely different from cloze/build; 4 = at least `N は N を V` shape. Feel-tunable. *(Recommend 4.)*
2. **Distractor word on by default?** It makes the card meaningfully harder (R12's whole point) but raises failure rate; pairs with the fair-grading work (R22). *(Recommend on, but ship behind `SENTENCE_WORD_DISTRACTOR` so you can A/B by feel.)*
3. **Glued-tail tiles — show or suppress?** A blob tail like `よみます` as one tile is honest but slightly odd next to clean single-word tiles. Alternative: only offer the granular card when tokenization is **complete** (no glued tail), else fall to v1. *(Recommend: allow the tail — partial structure still teaches, and "complete-only" would exclude almost every sentence with a conjugated verb, which is most of them.)*
4. **Include `か` and copula as tiles?** Sentence-final か and です/でした as their own trailing tiles let question/copula sentences build too. *(Recommend yes — cheap, and copula sentences are half of U19.)*

---

## Phases (ship in this order; each independently green)

- **Phase 1 — tokenizer + tests (pure, no UI).** Add `tokenizeSentence`, `canBuildSentence`, extend `sentenceTiles`→`buildSentenceTiles` in `cardRouting.js`; build the memoized `KNOWN_FRONTS` dictionary from `seedItems()`. Unit tests in `cloze.test.mjs` (mirror the existing `sentenceTokens` block): full tokenization of `N は N を V`, glued-tail on a conjugated predicate, longest-match beats a shorter prefix, `MIN_SENTENCE_TILES` gate, distractor invariants (exactly one extra particle + one extra word, both absent from the answer). **This is the whole risk surface — land it first, all pure.**
- **Phase 2 — wire the card.** Point `SentenceCard` at the new tiles; optional tap-to-undo. No new kind.
- **Phase 3 — coverage + smoke.** Confirm the `sentence:build` coverage-fixture item tokenizes to ≥4 tiles (swap the fixture example sentence if not); re-run the Playwright `sentence:build` step (dev + `SMOKE_MODE=preview`). The `window.__sentence.solve()` hook already assembles by matching tokens, so it survives more tiles unchanged.
- **Phase 4 (optional) — turn on the word distractor** once Alex has feel-checked Phase 2 without it.

## Definition of done

- `N は N を V` beginner sentences present one tile per word/particle (not a 3-tile blob); word order + ≥1 particle choice is genuinely tested.
- No sentence is ever mis-split (longest-match over unique fronts + hard-stop tail); ineligible sentences fall through cleanly (no crash, no empty tray — `SentenceCard` already `return null`s on no-spec).
- Full gate green: `validate:content` → `lint:curriculum` → `test:unit` (new tokenizer tests) → Playwright smoke (dev **and** preview) → `build`.
- `BUILD-CHECKLIST.md` Batch-2 corrected (R10/R11/R13 marked shipped; R12 folded here) as part of the PR.

---

## Why this is the right shape (mission check)

- **Understanding over memorization:** a true word-order builder is the first card that tests *production grammar*, not recognition — exactly where U19–21 (copula, particles, ～ます, conjugation) should land. v1 under-delivers that.
- **ND-safe:** tile assembly, not a blank page; Reset-to-retry-free is preserved; more tiles ⇒ add tap-to-undo so a misplacement isn't a punish-moment. Governed by the same fair-grading (R22) and card-breath work already in the tree.
- **Structural, not instructional:** the tokenizer reads only the curriculum's own data (unique fronts + closed particle set) and degrades safely — no per-sentence tagging, no content burden, engine stays content-agnostic.
- **Cheap:** one pure module change + tests; the card, routing, rung, schema, and coverage surfaces are already in place from v1.
