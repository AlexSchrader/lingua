# The teach bar

**What every vocab card must carry, and the check that enforces each rule.**

Written 2026-10-17, after a retrofit that repaired **7,472 one-sentence cards, 3,670
cards that marked correct answers wrong, and ~3,970 cards with no hint** across nine
shipped languages. None of that was a bug. Every one of those cards validated clean,
passed lint, passed the browser smoke, and shipped. **They were never checked for
whether they teach.**

This file exists so that cannot happen again.

---

## 1. The bar

| rule | what it costs a learner when it is broken | enforced by | debt today |
|---|---|---|---|
| **A `drill` that is NOT the `example`, nor a clause trimmed off it** | `practice = item.drill ?? item.example`, and *both* the fill-the-blank card and the build-the-sentence card read it, while the teach card shows `example`. Break it and the learner meets that word in **one sentence, shown three times** — re-reading, not transfer. | `teach-quality.test.mjs` one-sentence ratchet · `drill-corpus.test.mjs` | **998**, of which ~450 are declared floors (below) |
| **`accept[]` yields at least 3 DISTINCT answers** — not three entries | `checkMeaning` grades a typed answer against `meaning` plus every `accept`, **after `normalizeMeaning` folds them**. A thin list **marks correct recall WRONG** — the punishing feedback `CLAUDE.md` says to design out for ND learners. ⚠️ **Entries are not answers.** `meaning: "an epidemic"` with `accept: ["epidemic", "the epidemic"]` is three entries and **one** accepted answer, because a leading `a`/`an`/`the` and a leading `to ` are stripped. The honest measure is `new Set(meaningVariants(item)).size`. | `teach-quality.test.mjs` — `DISTINCT_UNDER_TWO` and `DISTINCT_UNDER_THREE` ratchets are the real bar; the entry-count ratchets remain as cheap floors | **137 cards accept ONE answer, all `fr`** · **1,151 under three answers** (fr 661 · pt 256 · ja 43 · es 40 · id 14) · **entry-count debt 0 in every language** · `hi` `no` `de` `ru` are at **0 on all four axes** |
| **A `hint`** | Pronunciation plus one thing to hang the word on. The scaffolding an ND learner leans on; without it they get a word and nothing else. | `teach-quality.test.mjs` hint ratchet | **0** |
| **Drill is 3–8 tokens and contains the `front` verbatim** | Outside that, the blank-filling and sentence-building cards **silently do not route** — nothing goes red, the learner just gets fewer ways to practise. | `ship-gate.mjs` | 0 |
| **No two cards in a language share a displayed `meaning`** | The produce card shows the gloss and accepts one front, so two cards under one gloss make **one of them unanswerable**. | `ship-gate.mjs` 6b · `lint.js` | 0 |
| **Every card has a clip, and the clip is in the manifest** | `hasAudio` reads the generated manifest, not the filesystem. A clip on disk but absent from the manifest is **paid audio the engine treats as silent**. | `ship-gate.mjs` 2 and 2b | 0 |

⚠️ **THREE ENTRIES IS NOT THREE ANSWERS, and the ratchet counts entries.**
`normalizeMeaning` strips a leading `a/an/the` and a leading `to `, so
`"epidemic"`, `"an epidemic"` and `"the epidemic"` are **one** accepted string —
a card can sit at three entries and still mark every synonym wrong. Measured
2026-10-17 over cards with fewer than 2 DISTINCT variants: **pt 19 · id 3 ·
ja 2 → 0 each** (closed in `content/id-pt-ja-polish`), and still open elsewhere:
**de 417 · no 247 · ru 35 · fr 137**. Nothing checks it. Whoever writes that
check should count `meaningVariants(item)` (`src/store/answer.js`), not
`item.accept.length`.

### Declared floors — these are not debt, do not drive them to zero

- **ja one-sentence ≈ 20.** A drill is *forbidden* on a `type: "kanji"` item (the routing functions all require `type === "vocab"`), and a one-character front can never fill a blank (needs ≥2 chars) nor open a Japanese sentence. Two seats verified this item by item and each refused to force a card that would quiz the wrong morpheme.
- **fr 215 and es 211 one-sentence.** Deliberate scope boundaries at 7%, matching each other and trailing only de (4%) and no (3%). Both languages are at zero on every axis they were given.

---

## 2. The five process rules — each one is a failure that actually happened

**1. A rule with no check is not a rule.**
`CONTENT.md` listed `drill` and `accept[]` as **optional** while the standard said required, and carried a paragraph reading *"Optional, and staying optional"* three lines under the new REQUIRED rules. **7,472 cards drifted.** Every rule in §1 now names its check, and a rule arrives with its check or not at all.

**2. The check measures exactly what the doc says — verified by reading both together.**
**This rule has now failed TWICE on the same field.**
The doc said **3** accepts. The ratchet measured **fewer than 2**. So a language could report "0 thin-accept" with hundreds of cards sitting at exactly two — and **two languages were reported FINISHED on that basis.** A crew caught it, not the gate.
Then, with the ratchet corrected to 3, it still counted **entries** where the grader counts
**folds** — so `fr` read 0 and had **137 cards accepting a single answer.** A second language
I had reported FINISHED. Caught by a crew again, independently by two of them. The lesson is
narrower than "measure what the doc says": **measure with the engine's own function**, here
`meaningVariants`, rather than any proxy for it.

**3. When a standard lands, every existing language is measured against it the same day.**
Japanese was authored first, before any of these rules existed, and **nobody ever went back and measured it.** It graded **D on build, D− on teach** — the weakest content in the app, in its flagship language. Standards applied only to new work are how one language silently becomes the worst one.

**4. A new language starts at zero debt.**
Already enforced: the ratchet walks every language in the corpus and **any language absent from its ceiling table gets a ceiling of 0.** Italian, Dutch and English are held to this file from their first card.

**5. Never quote a count. Re-run it.**
`CLAUDE.md` already says this and I broke it three times in one week — the test-file count, the suite runtime, and the accept bar — each time by relaying a figure from a report instead of running the command. **A number in a doc is a measurement with a timestamp.**

---

## 3. How the bar is checked

```
node --test --test-concurrency=1 tests/unit/teach-quality.test.mjs   # the three ratchets
node --test tests/unit/drill-corpus.test.mjs                        # a drill must not cost a card
node scripts/qa/ship-gate.mjs [lang]                                # 19 structural checks
npm run lint:curriculum | grep "is the prompt for"                  # must be 0
```

⚠️ **`--test-concurrency=1`.** The default fan-out and `--test-concurrency=3` both wedge
at exactly 200 tests on this machine. Concurrency 1 is the clean run.

⚠️ **The ratchets are ceilings, and they may only be LOWERED.** A ceiling that is not
tightened as the debt shrinks stops being a ratchet and becomes a licence to regress
back up to it. Whoever merges a paydown lowers them in the same commit.

---

## 4. What a card edit costs

**Nothing, in audio, as long as `id`, `front`, `reading` and `meaning` are untouched.**
Clips are keyed by `item.id` and the text sent to the voice API resolves to `item.front`,
so drills, hints and accepts are free to change. Five separate crews proved this by
diffing every changed line pair rather than asserting it — do the same.

Changing a `meaning` risks a shared prompt. Changing an `id` wipes that item's mastery.
Prefer additive edits.
