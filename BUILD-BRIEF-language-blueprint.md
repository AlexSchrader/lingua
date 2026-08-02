# BUILD-BRIEF — Language Blueprint (the standard pathway)

**Status:** proposed 2026-08-02. §1–2 are the standard (doc only, no code). **§3 is four engine prerequisites needing Alex's sign-off before any mass-authoring starts** — two break CI the moment a second Latin-script language lands, and one blocks five planned languages outright.

**Goal:** adding a language stops being a bespoke project. **Japanese is the model** — it's the only language built all the way through a full band, and its shape is right. This brief turns that shape into a template every other language fills in, parallelizable across several CC sessions.

---

## 1. The Japanese model — what every language copies

ja doesn't teach a flat list of topics. It runs **three strands in parallel within each CEFR band**, then closes the band with a coverage pass. That interleaving is the pedagogy worth standardizing.

### The three strands

**Strand A — Script / sound system.** ja teaches kana in Units 1–6, and critically **each unit teaches a chunk of script and immediately uses it for real words** — 25 kana + 29 vocab per unit, never 46 characters in a row. The learner is reading actual words in unit 1. Later, kanji units (u11, u13–15, u17–18) are woven *between* vocab units rather than dumped in a block at the end.

**Strand B — Thematic vocabulary.** Topic units on the everyday domains: numbers & time, family, food & daily life, town & places, colors & weather.

**Strand C — Grammar, modelled as function-word vocab.** ja's ぶんぽう units (u19, u20, u21) in a deliberate order: **copula sentence → verbs & particles → past tense & adjective conjugation.** There is no grammar item type; the pattern lives in the example sentences of function-word items. Later bands add conjugation drill units (u45, u46).

**Strand D — Coverage pass.** After a band's strands are in, ja thickens vocabulary to a frequency target (u53–u87 for N5, u88–u98 for N4). This is what takes a band from "taught" to "usable."

### The band template

| Band | Strand A (script) | Strand B (thematic) | Strand C (grammar) | Strand D (coverage) |
|---|---|---|---|---|
| **Pre-A1** | own-script: 6–7 units · Latin: **1 unit** (sounds/orthography) | — | — | — |
| **A1** | own-script: ~6 character units, interleaved every 2 vocab units · Latin: none (folded into B) | ~10 topic units | 3 units (sentence → verbs/particles → past & agreement) | ~6 units to the A1 frequency target |
| **A2** | own-script: ~12 character units · Latin: none | ~15 topic units | 2 grammar + 2 conjugation-drill units | ~11 units to the A2 target |
| **B1/B2** | same shape, deeper | | | *not built yet, even in ja — spec when ja gets there* |

**A Latin-script language is the same template with Strand A collapsed to one unit.** That's the entire difference, and it's why a Latin language is ~20 A1 units where ja is ~36. Nothing else about the structure changes.

### Density — the mature ja shape

**4 lessons per unit × 6 cards per lesson = 24 cards.** That's what every ja unit from u22 onward does, and it's the number to author to.

ja's early units (u1–u10) run 5 lessons × ~10 cards = 47–55 cards. **Do not copy those** — they're pre-lint drift, and they're the reason ja's overall spread looks like 3–11 cards/lesson. French independently landed at 3×7=21, which is the same target from the other direction. The band is 5–8 cards per lesson, aim 6.

### Per-unit requirements

- Every lesson carries a **`canDo`** — one plain sentence naming a real thing the learner can now do.
- **Every example uses only vocab introduced at or before that unit.** Proper names and transparent cognates are free.
- **Grammar is never its own item type** — it's function-word/suffix vocab whose examples carry the pattern.
- Nouns are taught **with** their article/gender marker where the language has one.
- `accept[]` on every vocab item; any multi-word meaning needs synonyms.

### One thing NOT to copy from ja

ja's `order` and `stage` fields disagree with each other. Sorted by `order`, the sequence runs pre-a1 → a1 → **pre-a1 again at u16** → a1 → a2 → **a1 again at u53–68** → a2 → **a1 again at u82–87** → a2. That's an artifact of thickening passes being appended with interleaved order values. A new language should keep `order` monotonic within `stage`.

---

## 2. Parallel authoring protocol

Per language, 3 sessions. Blocks are **contiguous in `order`** so vocab dependencies always flow forward — a later block may use an earlier block's words in examples, never the reverse.

| Session | Covers | Branch |
|---|---|---|
| CC-A | Strand A (script/sounds) + first half of Strand B | `content/<lang>-a1-block1` |
| CC-B | rest of Strand B (+ interleaved Strand A units, own-script languages only) | `content/<lang>-a1-block2` |
| CC-C | Strand C (grammar) + Strand D (coverage) | `content/<lang>-a1-block3` |

Rules:
1. **A session only ever writes inside `src/data/<lang>/`.** That's what §3b buys.
2. **Word ownership: lower `order` wins.** Conflicts resolve by rule, never by messaging between sessions.
3. **Block 3 starts last or accepts churn** — grammar and coverage units draw on the vocab blocks 1–2 introduce. If run fully parallel, expect block 3 to revise examples after the merge.
4. **Each session runs the full gate on its own block**; the merger re-runs it on the combination. A block can be green alone and red combined (§3a).
5. **Audio is sequential.** One shared manifest — `generate:audio` + `generate:manifest` run once, after all blocks land.

Operational detail (worktree setup, hand-back format, stuck-rules) lives in **`RUNBOOK-new-language.md`** — that's what a CC session actually follows.

---

## 3. Prerequisites — Alex's call (engine/contract, not content)

### 3a. Word-front uniqueness is global across languages ⚠️

[contract.js:263-272](src/data/contract.js#L263-L272) and [lint.js:120-125](src/data/lint.js#L120-L125) key the "one home per word" map on `item.front` alone, **no language in the key**. Verified directly:

```
validateContent([es-unit, it-unit], LANGUAGES)
→ "item it-u1l1-b: vocab front "no" is already taught in item es-u1l1-a"
```

es `no` + it `no` is a hard CI failure; so are `taxi`, `hotel`, `animal`, and most Romance function-word overlap. Never fired because ja and fr use different scripts. **It fails at merge time** — each parallel session is green alone, the combination is red. Fix: key by `` `${lang} ${front}` ``. This *strengthens* the rule — "one home per word" is a within-language claim.

### 3b. `src/data/index.js` is a merge-conflict funnel

Every unit adds an import line **and** an entry to one shared `UNITS` array ([index.js:136](src/data/index.js#L136)). Three sessions × ~20 units = 60 edits to the same two regions. Fix: a generated per-language barrel (`src/data/<lang>/index.js` exporting `<LANG>_UNITS`), so the root imports one file per language. **Not `import.meta.glob`** — Vite-only, and the `node --test` unit tests import that file directly.

### 3c. No scaffold script

Propose `npm run scaffold:lang -- <code>`: creates `src/data/<lang>/` with every band-template unit stubbed (ids, titles, `order`, `stage`, empty `lessons`) plus the barrel. Authoring becomes filling known blanks.

### 3d. The `reading` field does two jobs — NOT a blocker, but a shipped defect

**Correction (2026-08-02, after testing the actual paths):** an earlier draft of this section claimed five languages "cannot author basic vocabulary today." **That was wrong.** The real picture:

[contract.js:163-165](src/data/contract.js#L163-L165) requires every `reading` to normalize to `^[a-z]+$`; [answer.js:36-40](src/store/answer.js#L36-L40) normalizes by stripping diacritics via NFD, which only removes *combining* marks. So a reading authored in **real orthography** does error out:

```
ø -> ø   ·  ł -> ł  ·  ı -> ı  ·  đ -> đ  ·  ɛ -> ɛ      (contract error)
```

But that isn't how readings are authored. Per the French convention, `reading` **is** the ASCII fold of the front — `s'il vous plaît` → `silvousplait`. Norwegian authors `øl` → `ol` and validates clean. And the learner typing the real word is still accepted, because [checkReading](src/store/answer.js#L54-L58) matches `raw === item.front` before it ever folds. **Verified both paths: nothing is blocked.**

**The real defect was that `reading` is also *displayed* — ✅ FIXED 2026-08-02, branch `fix/romaji-display` (commit `db5e45c`, draft).** [TeachCard.jsx:48-52](src/components/games/TeachCard.jsx#L48-L52) rendered `item.reading` under the front gated only on the global `showRomaji` setting — **not on language** — so French showed **"silvousplait" under "s'il vous plaît"** and "cava" under "Ça va": an ASCII answer key presented as a pronunciation guide, on every Teach card, live. Same read in [SpeakCard.jsx](src/components/games/SpeakCard.jsx) and [TraceCard.jsx](src/components/games/TraceCard.jsx). It hid because Settings already got this right one level up (`hasGlyphScript` hides the Show-romaji toggle for a French learner), so nobody could reach the switch and the `showRomaji: true` default simply leaked. Now gated by `readingIsInformative(item)` in `cardRouting.js`, **keyed on the front's script rather than a language allowlist** — Hangul/Cyrillic/Devanagari work the day they ship, and it stays correct for a learner studying a glyph language and a Latin one at once. Verified across the real corpus: 2,375 ja items still show a reading, 566 fr items no longer do.

Separately, the fold is **lossy where diacritics are phonemic** — deferred until a tonal language is actually scheduled:

```
ma má mà mả mã mạ -> ma ma ma ma ma ma    (6 Vietnamese words, 1 reading)
mā má mǎ mà       -> ma ma ma ma          (Mandarin tones)
ṭhīk -> thik  ·  ṣaṭ -> sat                (Hindi retroflex/dental)
```

Those languages would author fine and ship with tone silently ungraded — for a tonal language, that means not teaching the language.

**Catalog impact:** the 12 Latin-script languages next in line (es, de, it, pt, nl, sv, no, pl, tr, id, sw, vi-partially) are unaffected by anything here except the display bug, which is language-wide and already live. **Crews are not blocked.** The design question — romanization for display vs. ASCII key for grading, currently one field — comes due when the first tonal or own-script language is scheduled.

---

## 4. Status

- ✅ **3a, 3b, 3c — SHIPPED** on `feat/language-prereqs` (commit `aefa82f`, branched off `fix/not-japanese-only-ux`, **draft — Alex merges**). Full gate green: `validate:content`, `lint:curriculum`, 189 unit tests, `audit`, `build`, Playwright dev (27) + preview (25 + 2 skipped).
  - Shipped alongside: **`isLive` now requires *playable* content**, not merely "a unit exists". Caught by `tests/unit/prune-languages.test.mjs` when a scaffolded Spanish flipped live with zero learnable items — which would have put an empty language in the picker and defeated the stale-save migration in `useStore`, whose signature for a pre-language-choice save is precisely "lists a language with no content."
- ⏸ **3d — not blocking.** Downgraded on evidence (see above): a display defect for the Feature lane plus a deferred design question, not a gate on authoring.

**Next: pilot one language end to end** through `RUNBOOK-new-language.md`, fix what the protocol got wrong, *then* go wide. **Spanish** is the right pilot — Latin script, no open contract questions, and the largest downstream reuse (es → it/pt share the most structure).

Don't skip the pilot. Finding the protocol's holes on one language costs a day; finding them on six costs a rewrite.
