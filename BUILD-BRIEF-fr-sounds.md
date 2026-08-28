# Build brief — French sounds & accents ("Les sons")

**Lane:** Curriculum CC (content) + small Feature CC assist (Ladder section).
**Status:** ✅ SHIPPED (unit `fr-u27`, `order: 1`, 3 lessons / 21 items). French audio has since been generated (100% coverage, 2026-08-22), so the audio dependency below is **satisfied** — `listen:choice` / `listen:type` route for this unit.
**Policy it implements:** `CONTENT.md` → "Script policy — which languages get a glyph section (and trace)".

---

## The problem

A French learner meets `s'il vous plaît` in unit 1, `août` in unit 14 and `l'œuf` in
unit 20 with **no idea what sound comes out**. Nothing in the corpus teaches the
sound-to-spelling map, because French's writing system was treated as "already known"
— true of the *letters*, false of the *spellings*.

This is the Latin-script equivalent of what Japanese gets from its kana units. Japanese
learners can't read at all on day one and are taught the script explicitly. French
learners can read immediately — and be wrong immediately.

## What this is NOT

- **Not a `pre-a1` band.** `pre-a1` is the script band; giving French an empty or
  synthetic one caused a real ship-stopper (dead Pre-A1 rung, fixed 2026-07-31). This
  unit lives at the **start of A1**.
- **Not trace, and not a traceable a–z.** The learner already writes Latin letters.
  Tracing them would be busywork and the same "routes but doesn't teach" defect class as
  the `type:reading` and `build` copy-tasks found on 2026-07-31.

## Hard dependency: audio — ✅ SATISFIED (2026-08-22)

*(Historical: this section originally blocked authoring on the paid audio run.)* French
audio has since shipped at **100% coverage** (Mathieu's voice), so `AUDIO_IDS` now holds
every French id and `listen:choice` / `listen:type` route for this unit automatically —
they're gated only on `hasAudio`, which is precisely the card set this pronunciation unit
needs. No dependency remains.

## Content scope

Three lessons, ~7 items each, all `type: "vocab"` (no new item type needed).

**L1 — Les accents.** The accented characters and what they do to the sound:
`é` (closed e) · `è` / `ê` (open e) · `à` · `ç` (s not k) · `ô` · `ù` · `œ`.
Each item's `front` is the character; `meaning` states its sound-effect in plain English
("é — closed 'ay'"); the example is a taught word that contains it (`café`, `très`,
`ça va`, `l'hôtel`, `où`, `la sœur`).

**L2 — Les sons.** The multi-letter spellings that are one sound:
`ou` ("oo") · `eau` / `au` ("oh") · `ai` ("eh") · `oi` ("wah") · `on` / `an` / `in`
(nasals) · `gn` ("ny") · `ill` ("ee-y").
Examples all drawn from already-taught vocabulary — `bonjour`, `l'eau`, `la maison`,
`trois`, `le pain`, `la montagne`, `la fille`.

**L3 — Ce qu'on ne dit pas.** The silent half of French:
silent final consonants (`petit`, `grand`, `beaucoup`) · silent `-ent` on verbs ·
silent `h` (`l'homme`, `l'heure`) · **liaison** (`vous_avez`, `les_amis`) ·
the elision rule the learner has met 40 times but never had named (`je + ai → j'ai`).

## Card kinds

`teach` (present the pattern + play the clip) · `listen:choice` (hear it → pick the
spelling) · `listen:type` (dictation — the real test of the map) · `choice` (spelling →
which sound). **No trace.** No `type:produce` — producing an accent is a keyboard
problem, not a knowledge problem (see the accents note below).

## Feature CC assist — a Ladder section

Parallel to the kana grid: a **"Sounds & accents"** panel on the Ladder for Latin-script
languages, showing coverage of the accents and sound-spellings this unit teaches. Reuses
the `KanaChip`/sub-group pattern; no schema change (the items are ordinary vocab, so
coverage is derived by filtering on the unit).

## ⚠️ Open decision for Alex — where it goes in the order

Unit `order` must be **contiguous per language** (validated). So placing this at the
*start* of French means renumbering `fr-u1 … fr-u26` → `fr-u2 … fr-u27`, which changes
**every French item id** and therefore wipes all French mastery.

**Right now that costs nothing** — French has never shipped to a user. The same logic
applied to the `fr-u24l1-lemedecin2` id fix on 2026-07-31: free today, progress-wiping
the moment anyone learns it. Two options:

1. **Renumber now, put sounds first (recommended).** Pedagogically correct — the sound
   map should precede the vocabulary that uses it. Free today, expensive after launch.
2. **Append as `fr-u27`.** Zero risk, but the learner meets 545 words before being told
   how to pronounce any of them, and the Ladder will show it last.

If Alex isn't ready to decide, option 2 is reversible into option 1 only until French
ships. **This decision has an expiry date.**

## Note — accents are currently optional to type

`normalizeReading` strips diacritics for non-`ja` languages, so `cafe` is graded correct
for `café` and a learner never has to produce `é` vs `è` to pass. That leniency is
deliberate (no French keyboard required) and should **stay**. It does mean this unit
teaches accent *recognition*, not accent *production* — if production is ever wanted,
it needs its own opt-in card or setting, not a change to the checker.
