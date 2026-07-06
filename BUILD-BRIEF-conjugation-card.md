# BUILD BRIEF — Conjugation Card (the N4 grammar unlock)

**For:** Feature CC (engine/UX) + a contract change (Alex's call)
**From:** Curriculum CC
**Priority:** This is the **critical path to N4 compliance.** N4's core is verb/adjective
conjugation; the current card kinds teach *words*, not *transformations*, so N4 grammar
(て-form, plain form, potential, conditional, …) **cannot be taught** without this. Kanji
and vocab can proceed in parallel, but the curriculum is *not N4-compliant* until this ships.

---

## Goal
A card kind that drills **conjugation as a rule**, not as memorized phrases: given a verb
in its dictionary/ます form, the learner **produces** a target conjugated form, and the
engine checks it against the rule (so it generalizes to *any* verb, not a fixed list).

## Why the item model can't do it today
Grammar-as-vocab worked for particles/connectives because they're *words*. て-form is a
*transformation*: たべます→たべて, のみます→のんで, いきます→いって. Teaching it as items
either memorizes single conjugated forms (doesn't generalize) or fakes the skill. N4 needs
the learner to conjugate a verb they've never drilled — that requires engine rules.

## What it does (user-facing)
Prompt shows the base verb + the target form; learner types (or tile-builds) the answer:

```
のみます  →  ～て form?     [ のんで ]   ✓
```

Rung-appropriate, same as other cards: introduce the rule on a teach card, recognize it
(choice: "which is the て-form of いきます?"), then produce it (this card).

## The three pieces

1. **New card kind `conjugate`** — add to `LIVE_CARD_KINDS` (`src/data/contract.js`) AND
   exercise it in the smoke coverage fixture (the forcing function). Its own scoped PR.

2. **Contract change — verb items get a `group` field** (Alex's call, schema PR):
   `"godan" | "ichidan" | "irregular"`. Conjugation rules key off the group. (Curriculum CC
   will tag every verb — that's content once the field exists.)

3. **Engine — a conjugation module** (`src/store/conjugate.js`): pure functions
   `conjugate(baseMasu, group, form)` for the N4 forms:
   `te` · `nai` (neg-plain) · `ta` (past-plain) · `dict` (plain non-past) · `potential` ·
   `volitional` · `ba`/`tara` (conditional). Plus い/な-adjective forms. The checker
   normalizes the learner's answer (reuse `normalizeReading`) and accepts the rule-correct
   form; a small `accept[]` on the item can allow known alternates.

## Content side (Curriculum CC owns, once the field + card exist)
- Tag all verbs (A1 U9/U20 + A2 U22/24/25/26/27/28) with `group`.
- Author the N4 grammar units as **conjugation drills**: a て-form unit, plain-form unit,
  potential, conditional, giving/receiving (あげる・くれる・もらう), etc. — each teaches the
  rule + drills production via this card.

## Guardrails
- **Engine stays content-agnostic** — conjugation rules live in the engine, keyed by
  `group`; no per-verb branching. Irregular verbs (きます・します) are the only explicit cases.
- **New card kind ships only when in `LIVE_CARD_KINDS` AND covered by the smoke fixture.**
- Never weaken the checker to force green — if a rule output is wrong, fix the rule.

## Out of scope
- Causative / passive-causative / keigo (N3+). Stick to the N4 form set above.
- Speech/handwriting for conjugation (recognition + typed production is enough for N4).

## Definition of done
- `conjugate` card kind live + smoke-covered; `group` field in the contract + validated.
- `conjugate(base, group, form)` correct for the N4 form set (unit-tested per form × group).
- A verb tagged `godan`/`ichidan`/`irregular` drills its て/ない/た/potential/etc. correctly.
- Draft PR → Alex. Then Curriculum CC tags verbs + authors the N4 grammar units.

## Lanes
- **Feature CC:** the card, the conjugation engine, the contract `group` field.
- **Curriculum CC:** tag verbs, author the conjugation-drill grammar units on top of it.
- **Alex:** approves the contract change; native review of the resulting grammar.
