# Build brief — French sounds & accents ("Les sons")

**Lane:** Curriculum CC (content) + Feature CC (the glyph item type, the typed check, the Ladder section).
**Status:** shipped as `fr-u27` (order 1) 2026-09-05 — then **superseded in part by Alex's accent standard, 2026-09-12.** Lessons 1–3 are being rebuilt; the sections below marked ⚠️ are what changed.
**Policy it implements:** `CONTENT.md` → "Accent items" and "Script policy".
**Applies to all five Latin languages, not just French** — es, pt, de and no each have the same unit-1 sounds lesson. `RUNBOOK-new-language.md` §4 carries the per-language table.

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

## Hard dependency: audio

✅ **RESOLVED 2026-09-13** — `main` generated the missing clips (de 480 · no 480 · pt A2 720 · fr 14). **Unit 1 lessons 1–3 are now fully voiced in every language except one card** (`pt-u1l1-econj`, front `e`). The table below is the state that prompted the run, kept as the record of what was missing.

**Previously:** French now has 3,049 clips. But
**`fr-u27` lessons 1 and 2 have 0 of 14**, because the audio for those ids was deleted when
the unit was re-authored and never regenerated. Corpus-wide, the sounds lessons of three
languages are still silent:

| lang | u1 l1–l3 silent |
|---|---|
| fr | **14** (l1 + l2) |
| de | **18** (all three) |
| no | **18** (all three) |
| pt | 1 |
| es | 0 |

**51 items.** A pronunciation unit without audio is close to useless — it teaches a
sound-spelling map in silence, and under Alex's standard it is worse than useless: the
companion has nothing to say, so the listening step does not exist and the speak card
arms the mic for a character the learner has never heard. **Run `generate:audio` +
`generate:manifest` for those 51 before authoring.** Generation is contended across crews
— sequence it with the merge seat.

Once audio exists, `listen:choice` and `listen:type` start routing for French
automatically — they're gated only on `hasAudio` — which is precisely the card set this
unit needs.

## Content scope

Three lessons, ~7 items each.

⚠️ **CHANGED 2026-09-12 — these are glyph items, not vocab.** The original brief said
"all `type: "vocab"` (no new item type needed)" and put the sound-effect in `meaning`
("é — closed 'ay'"). That is what shipped, and it is what Alex rejected: a `vocab` item
always carries a meaning, so the engine kept asking **"what does é mean"**, which is not
a question about French. They become **glyph items** (`meaning: null`, front = the
character) — the shape `type: "kana"` already has, being generalised for this and for the
non-Latin languages ahead.

**L1 — Les accents.** The accented characters themselves:
`é` · `è` · `ê` · `à` · `ç` · `ô` · `ù` · `œ`. The `front` is the character and there is no
meaning. The sound-effect note ("closed 'ay'") moves to `hint`, where it is shown while
teaching and never becomes a question.

⚠️ **What shipped instead, and must be replaced:** l1 currently teaches whole words —
`le bébé`, `la crème`, `la crêpe`, `la leçon`. Alex, 2026-09-12: *"doing le bébé for fr
isn't it."* A learner who masters `le bébé` has demonstrated nothing about finding é on
a keyboard, which is the skill.

⚠️ **`à` is not free** — `fr-u6l2-a` already teaches it (and `pt-u12l3-a`, and pt teaches
`é` as `pt-u1l1-e`, the copula). Fronts are unique per language, so l1 cannot simply
claim it; see the merge note in `RUNBOOK` §4.

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

⚠️ **REWRITTEN 2026-09-12.** The original brief said *"No `type:produce` — producing an
accent is a keyboard problem, not a knowledge problem."* Alex's standard says the
opposite, and he is right: **the keyboard problem IS the skill.** A learner who cannot
type é cannot write French.

**Alex's sequence, verbatim:** *"first cards are listening cards, companion just says the
accent, user hits continue till all are heard, then we go into mixing typing and
speaking."* And: *"if the companion says é i type é, and if the screen shows é i say é."*
The speak card *"will say the letter, the user repeats, but also shows the letter too."*

That maps onto three card kinds that **already exist** — nothing new to build:

| step | card | what happens |
|---|---|---|
| hear them all first | `teach` | companion says the character, Continue |
| companion says it → you type it | `listen:type` | dictation: Play button in place of the glyph |
| screen shows it → you say it | `speak` | plays the clip, shows the character, then opens the mic |

The lesson runner already runs every `teach` before any check (`learnQueue.js`), so
"heard them all, then mix" is the existing flow, not a new one.

**No trace** (the learner already writes Latin letters). **No meaning card, no reverse
card** — those are what the glyph item type removes.

## Feature CC assist — a Ladder section

Parallel to the kana grid: a **"Sounds & accents"** panel on the Ladder for Latin-script
languages, showing coverage of the accents and sound-spellings this unit teaches. Reuses
the `KanaChip`/sub-group pattern; no schema change (the items are ordinary vocab, so
coverage is derived by filtering on the unit).

## ✅ RESOLVED — where it goes in the order (option 1 was taken)

**Settled: the unit sits at `order: 1`, first in French.** ⚠️ **The file is still named
`src/data/fr/unit27.js`** — the name is historical and the unit carries `order: 1`. Edit
by unit `order`, never by filename; this has already caught one seat out.

Note for anyone reordering *lessons* now: **lesson ids embed the lesson number**, so
moving a card between lessons changes its id and wipes that item's mastery. French is
also the only one of the five with **three** lessons rather than four — there is no fr l4
to move anything into. The original text of this decision follows.

### Original decision text

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

## ⚠️ Note — typing the accent: REVERSED 2026-09-13, and already fixed

This section used to read: *"That leniency is deliberate (no French keyboard required)
and should **stay**. It does mean this unit teaches accent recognition, not accent
production."*

Alex, 2026-09-13: *"If i type e and its é thats wrong dude."* He is right, and it was not
only a missed feature — it was grading wrong answers as correct in shipped content.
`pt-u1l1-e` teaches `é` ("is") directly against `e` ("and") and `fr-u6l2-a` teaches `à`
against `a`; the fold accepted either for both, so the contrast those cards exist to
teach could not be failed.

**Fixed in `answer.js` (`foldWouldEraseAnswer`).** When the whole front is a single
character the fold would erase, the exact character is required — `e` no longer passes
for `é`, and `è`/`ê` no longer pass for each other. Case still folds (`É` is the same
character). **Ordinary words keep the old leniency on purpose**: `cafe` still passes for
`café`, because there the accent is incidental to a word the learner knows, and no French
keyboard should be required to pass a vocabulary card. `TypeCard` says *"the accent
counts"* on the strict cards and *"accents optional"* on the rest.

**Speaking is the deliberate opposite, and was fixed at the same time.** When you *type*
`e` for `é` you chose the wrong key. When you *speak*, the spelling is the transcriber's
choice, not yours — so `gradeSpoken` folds accents and passes the sound. It was not doing
that: the Japanese comparison path claimed every Latin card and graded on edit distance
against the spelling, so a perfectly pronounced `café` transcribed as `cafe` scored
`hard`. **That affected every fr/es/pt/de/no speak card, not just the accent ones.**

**The one honest caveat:** this repo's Brief-C de-risk measured STT on an isolated single
glyph at **0/3**. Alex's design mitigates it — the learner hears the model and sees the
character immediately before speaking, so it is shadowing rather than recall — but the
transcriber is still the weak link. Listening and typing are solid; **speaking needs a
playtest before anyone calls it done.**
