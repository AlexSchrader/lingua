# BUILD-BRIEF — Language Parity (no base language, only a base standard)

**Status:** proposed 2026-08-29 by QA. **§1–3 need Alex's sign-off before the next language is scaffolded.** Everything here is measured against the live corpus (ja 5,012 · fr 3,104 · es 2,084 items) and reproducible from the commands in §6.

**Supersedes one line of [BUILD-BRIEF-language-blueprint.md](BUILD-BRIEF-language-blueprint.md):** *"Japanese is the model — it's the only language built all the way through a full band, and its shape is right."* Its **shape** is right and remains the template. Its **status as the default** is the defect this brief exists to remove.

**Goal:** every language teaches as richly as Japanese, measured and enforced — without any language being the reference implementation the others are diffed against.

---

## 0. The finding

Japanese is not the model. It is the **default**, and every other language is defined by what it is not.

| Where | What it says | Consequence |
|---|---|---|
| [cardRouting.js:84](src/store/cardRouting.js#L84) | `const isLatin = (item) => (item?.lang ?? "ja") !== "ja"` | Every other language is a negation. An item without `lang` **silently becomes Japanese** |
| [languages.js:11](src/data/languages.js#L11) | `langName = (id) => ...?? "Japanese"` | The fallback display name is Japanese |
| all unit files | `example: { jp, en }` — **10,025 items** | The field holding the Spanish sentence is named `jp` |
| [contract.js:5](src/data/contract.js#L5) | `VALID_VERB_GROUPS = ["godan","ichidan","irregular"]` | Latin conjugation was structurally impossible *(Feature CC is fixing this now)* |
| [cardRouting.js:211](src/store/cardRouting.js#L211) | `FUNCTION_WORDS` — 9 fr, 7 es entries | Bolted beside first-class `CORE_PARTICLES`; `particle:choice` starved at ~2% |
| `scripts/audit-curriculum.mjs` | hardcoded `src/data/ja` until 2026-08-05 | Printed `ISSUES: none` for every other language — a no-op that looked green |

None of these is carelessness. They are one bug wearing six hats: **the app has one language and a set of exceptions.**

### What it costs, measured

| | avg card kinds / item | items routing to only ONE kind |
|---|---|---|
| ja | **4.21** | 12 (0.2%) |
| fr | 2.93 | **172 (5.5%)** |
| es | 2.89 | **134 (6.4%)** |

**306 French and Spanish words can only ever be drilled by `speak`** — pronounced, never recognised, never produced, never heard. Root cause in [tests/unit/card-variety.test.mjs](tests/unit/card-variety.test.mjs): the share gates carve one *unsalted* `hash01(item.id)` into mutually exclusive bands, and Japanese's always-on kinds (`build`, `trace`, `type:reading`) backstop the top band. Latin has no backstop, so the defect is **structurally invisible in the language that was built first**.

---

## 1. Each language declares itself

Replace "is it ja?" with a per-language profile. Proposed `src/data/<lang>/profile.js`:

```js
export const ES_PROFILE = {
  id: "es",
  script: null,              // or { strand: "hangul", traceable: true }
  functionWords: [...],      // drives particle:choice — today's FUNCTION_WORDS[lang]
  verbGroups: ["ar", "er", "ir", "irregular"],
  conjForms: ["pres-1s", "pret-3s", "fut-1s", ...],
  cardKinds: [...],          // which of LIVE_CARD_KINDS apply, and why not the rest
  difficulties: ["gender", "conjugation", "ser-estar", "prepositions"],
};
```

Then:

- **`isLatin` is deleted.** Nothing asks "is this Japanese"; things ask the profile what it supports.
- **`item.lang` becomes required.** An unstamped item must **throw**, never default. It silently inverted my own measurements twice while writing this brief — if it can fool a QA pass reading the source, it will fool a crew.
- **`langName` loses its `?? "Japanese"`** — an unknown id is a bug, not a Japanese card.
- Feature CC's in-flight `verbGroupsFor(lang)` / `conjFormsFor(lang)` are exactly this pattern. **Generalise it rather than repeating it per-feature.**

---

## 2. Stop porting Japanese cards. Build cards for each language's own difficulty

This is the substance of the brief. Latin is not "three kinds poorer" — `type:reading` and `build` are *correctly* disabled because in Latin `reading === front`, so both degenerate into copying the prompt. **The defect is that nothing was ever designed to take their slot.**

| language | genuinely hard | card that drills it |
|---|---|---|
| ja | script, particles, verb forms | `trace`, `build`, `particle:choice` ✅ |
| es · fr · pt · it · de | **gender & agreement** | ❌ **nothing** |
| es · fr · pt · it | conjugation | 🔨 in flight |
| es | ser vs estar | ❌ nothing |
| fr | silent letters, liaison | ❌ nothing |
| de | cases | ❌ nothing |
| ko · ru | Hangul / Cyrillic | `trace` applies as-is |

**A Spanish learner is never once asked `el` or `la`.** It is the most common Spanish error there is, and the engine has no card for it.

### Proposed, in value order

1. **`gender:choice`** — pick the article for a noun. Serves es, fr, pt, it, de: **five planned languages, one card.** Highest leverage on this list. Data already exists — gender is recoverable from the article in `front` (`el país`, `la baguette`).
2. **`agreement:build`** — assemble a noun phrase with correct adjective agreement (`las casas blancas`). Latin's analogue of `sentence:build`, drilling the thing word order alone doesn't test.
3. **`spelling:listen`** — hear it, type it, where orthography is not phonetic. French silent endings; also serves en, da, nl.

Each new kind must be added to [`LIVE_CARD_KINDS`](src/data/contract.js#L10) and declared by profile, never inferred from script.

---

## 3. The standard, as a gate

The standard must be **enforced in CI, not held as discipline**. First version already shipped: [tests/unit/card-variety.test.mjs](tests/unit/card-variety.test.mjs) ratchets single-kind counts so they can only improve. Extend it to the full standard:

| # | Threshold | Today | Catches |
|---|---|---|---|
| S1 | Every item routes **≥2** card kinds | ✗ 306 items fail | Words taught one way only |
| S2 | Every item routes **≥3** (target) | ✗ | Thin drilling |
| S3 | Language averages **≥3.5** kinds/item | ja ✓ 4.21 · fr ✗ 2.93 · es ✗ 2.89 | Whole-language thinness |
| S4 | Every **applicable** kind covers **≥5%** of items | ✗ `particle:choice` 2% | Kinds alive on paper, dead in practice |
| S5 | Every language has **≥2 kinds drilling its own `difficulties`** | ✗ es has 0 | **The one that would have caught all of this** |

S5 is the point of the brief. S1–S4 measure *quantity* of variety; only S5 asks whether a language is taught **on its own terms**. A language can pass S1–S4 by inheriting generic cards and still never drill the thing that actually makes it hard.

---

## 4. Enforce at scaffold time, not merge time

`npm run scaffold:lang -- <code>` should emit the profile stub (§1) with `difficulties` **required and empty**, and wire the §3 gate from unit one. A new language should be **unable to be born below standard**.

Today, Portuguese would inherit all six defects in §0 for free. The cost of the Japanese default is paid **once per language**, and 17 are planned.

---

## 5. Sequencing — Alex's call

Fixing this at three live languages is cheap. At six it is a migration.

1. **Finish in flight** — Feature CC's language-aware conjugation; the variety floor and `FUNCTION_WORDS` widening already routed to them.
2. **Kill the `?? "ja"` defaults** (§1) — mechanical, small, high leverage.
3. **Rename `example.jp` → `example.target`** — ~10,025 items, mechanical with a codemod, gated by `validate:content`. The single clearest signal that there is no base language. *Do it while three languages exist, not six.*
4. **Build `gender:choice`** (§2) — biggest single gap, serves five planned languages.
5. **Write §3 as a gate**, extending the ratchet test.
6. **Then scaffold Portuguese** — the first language born under the standard, and the proof it works.

Steps 2–5 are roughly one Feature CC cycle. The blueprint's §3 prerequisites are already closed or closing: 3a (cross-language front collisions) fixed — `contract.js` now keys on `` `${lang}\0${front}` ``; 3b (per-language barrels) and 3c (scaffold script) done; 3d (non-Latin `reading`) is in Feature CC's current diff.

**Ownership:** §1, §2 and §4 are Feature CC. §3 is QA. §2 needs Curriculum to tag content once each card kind exists (gender is derivable from existing articles; `difficulties` per language is a curriculum judgement, not an engine one).

---

## 6. Reproducing every number here

```bash
npm run test:unit                  # card-variety.test.mjs prints per-language variety
npm run audit                      # per-language unit/item/lesson totals
npm run taught -- es               # every word a language teaches
```

Per-kind eligibility and the hash-band proof are derived in the header comment of [tests/unit/card-variety.test.mjs](tests/unit/card-variety.test.mjs).

**One trap when re-measuring:** the routing reads `item.lang` and **defaults it to `"ja"`** ([cardRouting.js:84](src/store/cardRouting.js#L84)). Flattening `unit.lessons` without stamping `lang` reports every French item as Japanese and inverts the entire result. That is the §1 defect biting the measurement of itself.
