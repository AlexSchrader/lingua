# Content schema reference

**Owner: Curriculum CC.** The authoring reference for units in `src/data/ja/*.js`. Roles and lanes are defined in `CLAUDE.md` → "Roles"; project state is in `BUILD-CHECKLIST.md`.

Run `npm run validate:content` **and** `npm run lint:curriculum` to check your changes before pushing.
Hard-rule violations exit non-zero; warnings are advisory.

---

## Hierarchy

```
LANGUAGES[]           one entry per supported language
UNIT[]
  └─ LESSON[]
       ├─ (locked stub)   — { id, title, locked: true } only
       └─ (playable)      — full object with items[]
            └─ ITEM[]     — kana, vocab, or kanji
```

---

## Language

| field     | type      | required | notes |
|-----------|-----------|----------|-------|
| id        | string    | ✓        | 2-char ISO 639-1 code (`"ja"`, `"es"`) |
| name      | string    | ✓        |       |
| flag      | string    | ✓        | emoji flag |
| target    | CEFR      | ✓        | learner goal level (`"A1"`–`"B2"`) |

**There is no starter language.** The catalog is a flat list the learner picks from —
`unlock` and `unlocked` were removed with the ja→es→fr cascade, so do not author them.
A language is offered the moment it has playable content (`isLive()` / `hasPlayableContent()`,
derived — never stored); everything else in the catalog shows as *planned*. Nothing in a
content file may assume Japanese, or assume any particular language is first.

---

## Unit

| field    | type     | required | notes |
|----------|----------|----------|-------|
| id       | string   | ✓        | pattern `^[a-z]{2}-u\d+$` — e.g. `"ja-u1"` |
| lang     | string   | ✓        | must match a known language id |
| title    | string   | ✓        | shown in the unit list |
| order    | integer  | ✓        | 1-indexed, contiguous per language (no gaps) |
| stage    | string   | ✓        | CEFR section the unit lives under: `"pre-a1"` `"a1"` `"a2"` `"b1"` `"b2"`. Drives the Ladder's stage grouping. `pre-a1` = the scripts band (kana); Latin-alphabet languages won't have any. |
| lessons  | LESSON[] | ✓        | at least one entry |

---

## Lesson (playable)

| field        | type     | required | notes |
|--------------|----------|----------|-------|
| id           | string   | ✓        | pattern `^[a-z]{2}-u\d+l\d+$` — e.g. `"ja-u1l1"` |
| unit         | integer  | ✓        | must match parent unit's number |
| lesson       | integer  | ✓        | 1-indexed within unit; sequential, no gaps |
| title        | string   | ✓        |       |
| cefr         | CEFR     | ✓        | `"A1"` / `"A2"` / `"B1"` / `"B2"` |
| dominantMode | string   | ✓        | `"recall"` / `"recognize"` / `"produce"` / `"speak"` / `"trace"` |
| canDo        | string   | ✓        | one-sentence learner outcome (shown on lesson card) |
| items        | ITEM[]   | ✓        | at least one item |

## Lesson (locked stub)

Only three fields are allowed — any additional field is a validation error.

```js
{ id: "ja-u1l2", title: "か row", locked: true }
```

---

## Item — kana

| field   | type    | required | notes |
|---------|---------|----------|-------|
| id      | string  | ✓        | pattern `^[a-z]{2}-u\d+l\d+-[a-z0-9]+$` |
| type    | `"kana"` | ✓       |       |
| front   | string  | ✓        | the hiragana/katakana character(s) displayed |
| reading | string  | ✓        | romaji; must be `[a-z]+` after `normalizeReading()` |
| meaning | `null`  | ✓        | must be `null` for kana |
| example | `null`  | ✓        | must be `null` for kana |
| hint    | string (opt) |     | visual/sound mnemonic shown on TeachCard; must be non-empty if present |

Each single-glyph kana **character** (not item) may appear in the corpus at most once.

**Yōon digraphs** (combination kana: きょ, しゃ, ぎょ…) are also `type: "kana"`, but the `front` is
**two glyphs**. They're a combination of already-learned kana, so they're exempt from: the
single-character KanjiVG stroke requirement (no own stroke entry), the one-introduction-per-kana
invariant, and the gojūon-order/teach-front-scope checks. In the engine they teach reading-based
(Teach → Choice → Type), never trace; on the Ladder they appear in their own Yōon table (not the
gojūon grid). They count toward a lesson's card-density.

## Item — vocab

| field   | type              | required | notes |
|---------|-------------------|----------|-------|
| id      | string            | ✓        | same id pattern |
| type    | `"vocab"`         | ✓        |       |
| front   | string            | ✓        | Japanese word/phrase |
| reading | string            | ✓        | romaji; `[a-z]+` after normalization |
| meaning | string            | ✓        | English gloss; non-empty |
| example | `{ jp, en }`      | ✓        | one sentence in each language |
| accept  | string[] (opt)    |          | alternate accepted meanings for typed answers |
| drill   | `{ jp, en }` (opt) |         | **short practice sentence** — see below. 3–8 tokens, no internal punctuation, must contain the `front` |
| hint    | string (opt)      |          | memory hook shown on TeachCard; must be non-empty if present |

### Accent items — unit 1, lessons 1–3 only (the accent standard)

**Alex, 2026-09-12:** accents are taught as **hear → speak → type the character**, never as a meaning. The learner has to find the character on their own keyboard, because a learner who cannot type é cannot write the language.

```js
// ❌ what ships today — teaches a WORD that happens to contain the accent
{ id: "fr-u27l1-eaigu", type: "vocab", front: "le bébé", reading: "lebebe", meaning: "baby", … }

// ✅ intended — the accent IS the card
{ id: "fr-u27l1-eaigu", type: "vocab", front: "é", … }
```

⚠️ **That second line is the INTENT, not a copyable item — it does not validate.** `meaning` is hard-required and non-empty for `vocab`, and `example` must be `{ jp, en }`. What those hold for a bare character is **unresolved**: the obvious fill (`meaning: "the acute accent"`) recreates the meaning card the standard exists to delete.

**The working rule, converged on independently by three crew seats (2026-09-13) — it covers every lesson with no carve-out:**

> **Type the smallest string that cannot be shortened without losing what is being taught.**
> Test: *is every character the learner types load-bearing for the sound?*
> `le bébé` = 7 chars, 1 load-bearing → fails. `é` = 1/1. `eau` = 3/3. `hva` = 3/3.

| the lesson teaches | type | examples |
|---|---|---|
| a single character | the character | `é` `ç` `ü` `ñ` `ø` |
| a digraph / trigraph — **these ARE typeable targets, not exceptions** | the grapheme | `eau` `ai` `oi` `gn` `ill` `ei` `sch` `kj` `ão` `lh` |
| a process (silence, elision, liaison) — no character exists | the minimal word or pair | `petit` `l'homme` `hva` `vous avez` |

**Why the word is right for the process case and wrong for accents — the mechanical reason, not a preference:** the diacritic fold means `bebe` passes for `bébé`, so the accent is optional and the word card teaches nothing. **A silent letter does not fold away** — typing `petit` forces the `t`, `hva` forces the `h`. The word card fails for accents for exactly the reason Alex objected to it, and works for silence for the same reason.

**Scope is literally unit 1, lessons 1–3.** Every other unit keeps teaching sounds through real vocabulary — that rule is unchanged and still correct.

⚠️ **Three fronts are already taken.** **`é` in pt is `pt-u1l1-e`** (the copula, *inside* the lesson in scope — u1l1 pairs it against `e`/"and" deliberately, and re-using it means an id change, which **wipes that item's mastery**); `à` in fr is `fr-u6l2-a`; `à` in pt is `pt-u12l3-a`. Everything else is free. Check with `npm run taught -- <lang>` before committing to a front.

⚠️ **`fr-u27l3` is the worst case in scope and needs replacing, not adjusting.** All seven of its fronts are French grammar **terminology** — `la consonne finale`, `le h muet`, `l'élision`, `la liaison`, `l'accent aigu`, `l'accent grave` — so the learner types *the name of the character* to learn the character. Two of them become straight duplicates in purpose of l1's `é` and `è` once l1 is rewritten.

⚠️ **French's unit 1 has only THREE lessons; the other four languages have four.** So "lessons 1–3" is French's entire unit — there is no l4 to move elision/liaison into without authoring one. And **lesson ids embed the lesson number**, so moving a card between lessons changes its id and wipes that item's mastery — cheap now, expensive after users. Any reorder belongs in the same pass as the rewrite.

⚠️ **Do not author this yet.** Two Feature-lane prerequisites are outstanding and both are Alex's call — `BUILD-BRIEF-language-blueprint.md` §3e has the detail:
1. **Meaning cards cannot be turned off.** `eligibleKinds()` always offers `choice` **and** `type:meaning` **and** `choice:reverse`, and `listen:choice` on a vocab item shows **meaning options** — so even the "hear" card is a meaning card. A flag must gate all of them together. `ITEM_KEYS` is a closed set with no field for it.
2. **"Hear" needs 51 clips that do not exist** — fr 14 · de 18 · no 18 · pt 1 · es 0. **`speak` needs the clip too**: SpeakCard plays it *then* arms the mic, so with none it asks the learner to pronounce a character they have never heard.
3. **A non-folding typed check — the one that decides whether any of this works.** `normalizeReading` strips diacritics, so `checkProduce("e", { front: "é" })` is **true**: the plain letter passes the "type the accent" card, and é/è/ê share reading `"e"` so they accept each other. TypeCard's own prompt says *"accents optional"*. **Without this the standard is a no-op.**
4. **The keyboard popup** Alex asked for. `item.hint` renders only on TeachCard, never on the typing card — there is no surface for it yet.

**Before a bespoke flag is built, look at `type: "kana"`.** It is already this card: `meaning: null`, front = the glyph, `type:meaning` auto-rewritten to "type the character", `listen:choice` showing glyph options instead of meanings. The meaning card suppresses itself, with no new field. It is blocked only by the type being Japanese-named and by the script policy below — which **already flags generalising `kana` → `glyph`** for Korean/Russian/Mandarin/Hindi. Doing it once serves this and the next four languages.

⚠️ **French's unit 1 is `src/data/fr/unit27.js`.** The filename is historical; the unit carries `order: 1`. Edit by unit `order`, never by filename.

---

## Item — kanji

A kanji is a **glyph that carries meaning**: it has stroke data like a kana (single character,
KanjiVG-traced) AND a meaning + example like a vocab. In the engine it teaches like a word —
recognition/recall test the **meaning** (choice + typed), production is **stroke tracing** at high
rungs. Allowed only in `a1`+ stage units. KanjiVG entry required (add the char to
`scripts/fetch-kanjivg.mjs` and regenerate).

| field   | type              | required | notes |
|---------|-------------------|----------|-------|
| id      | string            | ✓        | same id pattern |
| type    | `"kanji"`         | ✓        |       |
| front   | string            | ✓        | a single kanji; must have a KanjiVG stroke entry |
| reading | string            | ✓        | romaji; `[a-z]+` after normalization |
| meaning | string            | ✓        | English gloss; non-empty |
| example | `{ jp, en }`      | ✓        | one sentence in each language |
| accept  | string[] (opt)    |          | alternate accepted meanings |
| drill   | `{ jp, en }` (opt) |         | **short practice sentence** — see below. 3–8 tokens, no internal punctuation, must contain the `front` |
| hint    | string (opt)      |          | memory hook; non-empty if present |

---

## `drill` — the short practice sentence (and why `example` is not enough)

**`example` teaches. `drill` is what the engine can take apart.** They are different jobs
and one sentence cannot do both.

`example` should be as rich as the level deserves — at B1/B2 that means long, subordinate,
idiomatic:

> *"La concertation entre les pays avance lentement, mais elle seule permet d'éviter une crise ouverte."*

That sentence is doing real teaching work and must not be shortened. But two cards need to
manipulate the sentence mechanically, and they both fail on it:

- **`cloze:choice`** blanks the target word out of its sentence — needs the `front` present.
- **`sentence:build`** rebuilds the sentence from tiles — needs **3–8 whitespace tokens and no
  sentence-internal punctuation**, or there are too many tiles to be a question rather than a chore.

Measured against the shipped corpus, that is why those two cards reach only **36–63%** of items:
not a routing bug, just how the examples happened to be written. `drill` fixes it without
touching a single `example`.

**The rules (lint reports each one, so you find out while authoring):**

| rule | why |
|---|---|
| 3–8 whitespace tokens | fewer is not a sentence; more is a tile-sorting chore. Not checked for `ja` — Japanese is written without spaces |
| no `, ; : ! ? …` and no mid-sentence `.` | `sentence:build` rejects punctuation-only tiles |
| must contain the item's `front` | or `cloze:choice` has nothing to blank. Matched accent- and case-insensitively, so `"BONJOUR mon ami"` satisfies front `bonjour` |
| same `{ jp, en }` shape as `example` | the `jp` key is historical — it holds the target language, whatever it is |

**Optional, and staying optional.** An item with no `drill` behaves exactly as today: cloze and
sentence:build route only if its `example` happens to qualify. Add drills as you touch units;
nothing breaks in the gap.

**Use vocab already taught at or before this unit** — the same teach-before-use rule as `example`
(RUNBOOK §4). A drill is a *simplification* of the example's idea, not a new sentence with new
words in it.

---

## Script policy — which languages get a glyph section (and trace)

**The rule: a language gets a glyph section + the `trace` card when its script is NEW to
the learner. A language written in a script the learner already reads does not.**

Decided 2026-07-31 (Alex), when French raised the question. The unit of decision is the
**script**, not the language — so this splits the 20 planned languages into two groups,
not twenty.

### New script → glyph items + trace

Japanese (kana, kanji) today; **Korean** (Hangul), **Russian** (Cyrillic), **Mandarin**
(hanzi), **Hindi** (Devanagari) when they land. These get the full treatment: a Ladder
grid showing glyph coverage, `type: "kana"`-style glyph items, and the `trace` card.

Trace earns its place here because **stroke order is a real, rule-governed system** — it
affects legibility and dictionary lookup, and is taught and enforced natively. Writing
the glyph by hand *is* the production skill.

⚠️ Three things block a new non-Latin script today, all real work:

1. **Stroke data.** `src/data/kanjivg.js` holds 390 entries — every one Japanese, zero
   Latin. KanjiVG is a *Japanese* dataset; Hangul, Cyrillic and Devanagari each need
   their own source.
2. **Item types.** `VALID_ITEM_TYPES` is `["kana", "vocab", "kanji"]` — Japanese names.
   Hangul is neither. This needs a generic `glyph` type (or per-script types) → a
   **contract change, its own scoped PR**.
3. **`isTraceable`** (`src/store/cardRouting.js`) hardcodes those two Japanese types.

### Latin script → a sounds & accents section, never trace

French, Spanish, German, Italian, Portuguese, Dutch, Polish, Turkish, Indonesian,
Vietnamese, Norwegian, Swedish, Swahili, Yoruba, Twi.

**Do not build a traceable a–z.** The learner already writes Latin letters, so tracing
them is busywork — and it is the same defect class as two bugs found on 2026-07-31,
where `type:reading` displayed `salut` and asked the learner to type `salut`, and `build`
displayed the word and asked them to assemble its own spelling. Both *routed*; neither
*taught*. **"Does it route?" is not "does it teach?"** — check every card kind against a
new language for a prompt that is its own answer.

What IS new to the learner in a Latin-script language is the **sound-to-spelling map**:
the accented characters (`é è ê ë à â ç î ï ô ù û œ`) and the multi-letter spellings
(`ou`, `eau`, `ai`, `oi`, `on`, `an`, `in`, `gn`, `ill`), plus silent final consonants and
liaison. A learner meeting `août` or `s'il vous plaît` has no idea what sound comes out.
That deserves its own unit and its own Ladder section — built from `teach`,
`listen:choice`, `listen:type` and `choice`, **not** `trace`. See
`BUILD-BRIEF-fr-sounds.md`. It has a hard dependency on generated audio.

### The `pre-a1` stage is the script band, not a difficulty band

`pre-a1` exists so Japanese can teach kana *before* A1 proper. **A Latin-script language
has no `pre-a1` units at all** — and must not be given an empty one as a placeholder.
An empty stage cannot satisfy `complete` (`total > 0 && done === total`), which pinned
French learners to a dead Pre-A1 rung forever and printed "Lessons for Pre-A1 coming
soon." on their own rung from lesson 1 on. A sounds unit belongs at the **start of A1**,
not in a `pre-a1` band.

---

## CEFR levels

Valid values (in order): `"A1"` `"A2"` `"B1"` `"B2"`.

---

## Card kinds (`LIVE_CARD_KINDS`)

The lesson runner routes items to one of these card types based on the item's
mastery rung. `LIVE_CARD_KINDS` in `src/data/contract.js` is the canonical list.
Adding a new card kind requires updating that list; wiring it without updating
the list will throw at runtime and fail CI smoke.

| kind          | rung         | description |
|---------------|--------------|-------------|
| `teach`       | 0 (learn)    | presentation card; no testing |
| `choice`      | 1 (RECOGNIZED) + learn check1 | 4-option multiple choice |
| `type:meaning`| 2 (RECALLED) + vocab learn check2 | type the English meaning |
| `type:produce`| 3+ kana + kana learn check2 | type the rōmaji / kana |
| `build`       | 3+ vocab (PRODUCED) | assemble the reading from tiles |

Dormant (not yet wired):

| kind    | brief      | description |
|---------|------------|-------------|
| `trace` | Brief 3    | KanjiVG touch-to-trace |
| `speak` | Brief C    | Whisper speech recognition |

---

## Validation rules (hard — exit non-zero)

1. All ids match their respective regex patterns.
2. No duplicate unit, lesson, or item id across the corpus.
3. Unit `order` values are 1-indexed and contiguous per language.
4. Lesson `lesson` numbers are 1-indexed and contiguous per unit.
5. Locked lesson stubs contain only `{ id, title, locked }`.
6. Every playable lesson has a valid `cefr` field.
7. Kana items have `meaning: null` and `example: null`.
8. Vocab items have a non-empty `meaning` and a `{ jp, en }` example.
9. Each `reading` is `[a-z]+` after `normalizeReading()` (no stray kana or spaces).
10. Each kana *character* appears in at most one item across the corpus.
11. Items contain only known fields: `{ id, type, front, reading, meaning, example, accept, hint }`.
    Any unknown key is a hard error. `hint` must be a non-empty string if present.
12. Each **vocab** `front` (word) appears in at most one item — a word gets a single
    home; teaching it twice is a duplicate to dedupe. A vocab front *may* coincide
    with a kana item's front (e.g. the number-word `に`/`ご` is the same character as
    the kana — that kana→word reuse is intentional); only vocab-vs-vocab collisions error.
13. Every unit has a valid `stage` (`pre-a1 | a1 | a2 | b1 | b2`).

## Validation rules (warnings — advisory)

- A choice card needs ≥ 3 same-type distractors at/below the item's CEFR level.
  Fewer options make guessing trivial.
- Multi-word vocab meanings (e.g. `"good morning"`) with an empty or absent `accept[]`
  will reject plausible typed paraphrases (e.g. `"morning"`). Add synonyms to `accept`.

---

## Curriculum lint (`npm run lint:curriculum`)

A second, authoring-focused gate (`src/data/lint.js`, run by `scripts/lint-curriculum.mjs`)
layered on top of `validateContent`. It automates the mechanical rules an author would otherwise
check by hand, so authored units self-certify in CI. Brief: `docs/shipped/BUILD-BRIEF-curriculum-lint.md`.
The CLI runs **both** `validateContent` and `lintCurriculum`, so a green run means every
mechanical rule passed.

**The lint adds (beyond the contract above):**

- **Per-type exact key sets** — a `kana` item may not carry `accept`; a `vocab` item must have
  `accept` (may be empty); required keys per type must be present.
- **Reading style** — lowercase romaji, charset `[a-z]` + macrons `ō ū ā ē ī`; long o/u must be a
  macron (`kōhī`), not `ou`/`oo`/`uu`. Native `ei`/`ii` stay literal (`sensei`, `ōkii`).
- **`を` / `ヲ` must read `"wo"`.**
- **Gojūon order** — within a script (kana) unit, kana appear in dictionary order (rows in order;
  dakuten g/z/d/b/p after the base set).
- **Teach-front scope** — a kana/kanji *teach* front may only use glyphs already introduced (its
  own single new glyph excepted). Vocab and example words are exempt (the reading carries them).
- **Density** — ~5–8 word cards (vocab/kanji) per lesson (warning outside that band; **error at 0**).
- **Kanji rules (live — the `kanji` type shipped)** — stroke data required, fronts globally unique
  (with vocab), allowed only in `a1`+ stages.

**What the lint does NOT check:** language *naturalness* — particle choice, register (です/ます),
idiomatic collocation, whether a sentence is something a native would say. No test can read meaning;
that is the **batched native-speaker review** gate, required before any "professional / certified /
JLPT-aligned" claim or store launch.
