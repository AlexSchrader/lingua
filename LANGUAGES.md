# Lingua — Language Roadmap

**Every language targets B2.** **Nine are live** — Japanese, French, Spanish, German, Portuguese, Norwegian, Russian, Hindi and Indonesian. Italian and Dutch are **scaffolded but unauthored** (20 stub units each, 0 cards). The remaining entries in `src/data/languages.js` are **planned**.

⚠️ **RE-DERIVED 2026-10-07, AND EVERY ROW BELOW HAD MOVED.** The previous table still showed Russian and Hindi at **pre-A1 → A2, 60 units, 1,440 items** and Indonesian at **A1 → A2, 50 units** — all three have since shipped B1, two of them B2. Japanese's audio cell read **4,078 / 4,078**; the real figure is **5,046**, because the voiceable filter that excluded `kana` and `kanji` was corrected in the total line below and never in the row. And the closing line said *"Spanish B2 is the one remaining band in a live language"*, which has shipped. Re-derive with `npm run validate:content` plus a clip count against `public/audio/<lang>/`; **a number in this file is a measurement with a timestamp, and this file is the one that rots fastest.**

| Live | Units | Items | Bands | Audio |
|------|-------|-------|-------|-------|
| Japanese 🇯🇵 | 208 | 5,046 | pre-A1 → **B2** | 5,046 / 5,046 (Haruki) |
| Spanish 🇪🇸 | 126 | 3,141 | A1 → **B2** | 3,141 / 3,141 (Ignacio) |
| Russian 🇷🇺 | 136 | 3,264 | pre-A1 → **B2** | 3,264 / 3,264 (Dmitri) |
| Hindi 🇮🇳 | 136 | 3,264 | pre-A1 → **B2** | **2,401 / 3,264 — B2 run in flight** (Karan) |
| French 🇫🇷 | 133 | 3,127 | A1 → **B2** | 3,127 / 3,127 (Mathieu) |
| German 🇩🇪 | 126 | 3,092 | A1 → **B2** | 3,092 / 3,092 (Jonas) |
| Portuguese 🇵🇹 | 126 | 3,045 | A1 → **B2** | 3,045 / 3,045 (Tiago) |
| Norwegian 🇳🇴 | 126 | 3,045 | A1 → **B2** | 3,045 / 3,045 (Erling) |
| Indonesian 🇮🇩 | 87 | 2,088 | A1 → **B1** | 2,088 / 2,088 |

**Corpus total: 1,204 live units · 29,112 items** (plus 40 stub units in it/nl, which is why `validate:content` reports **1,244**).

**Eight of the nine are complete through B2.** Indonesian is the exception — B1 is done and voiced, **B2 is not yet scaffolded**, and that is the last gap before Italian. Build queue after it: **Italian → English → Dutch**.

⚠️ **English has an unresolved premise, and it is not a scheduling question.** Every card glosses into English and `checkMeaning` grades against those glosses, so an English ladder asks an English speaker to translate English into English. It is either ESL — which needs a base-language layer the engine does not have — or vocabulary-building for English speakers. Those are two different products and the choice is Alex's.


Spanish B2 **has shipped** — this line claimed it was "the one remaining band in a live language". See `BUILD-CHECKLIST.md` for what is in flight. Adding a language is one catalog entry once the catalog is data-driven — see `BUILD-BRIEF-languages-catalog.md` (pitch R15).

Tiers below are Alex's planning groups (from the original conversation). The **honest build-lift** is noted separately — a couple of languages sit in a tier by history, not by difficulty.

## THE BUILD QUEUE — Alex, 2026-10-06

**In flight:** Russian and Hindi to **B2** (B1 complete and voiced as of 2026-10-06; B2 scaffolded, u98–u136, 39 units each). Indonesian still needs **B1 and B2** — it is the only live language below B1.

**Next, in this order: Italian → English → Dutch.**

| lang | state today | what it needs |
|---|---|---|
| 🇮🇹 Italian | 20 units scaffolded, **0 cards** | the whole ladder, A1→B2 |
| 🇬🇧 English | **0 units** — only a `languages.js` entry for the companion's regional voices | see the open question below |
| 🇳🇱 Dutch | 20 units scaffolded, **0 cards** | the whole ladder, A1→B2 |

⚠️ **ENGLISH HAS AN UNRESOLVED PREMISE, and it is the one thing in this queue that is not just work.** Every card in this corpus glosses the target word *into English* — `meaning`, `accept[]` and the hints are all English, and `checkMeaning` grades against them. So an English ladder would ask an English speaker to translate English into English, and the whole grading path collapses. Two readings, two different products:

- **ESL** — English for speakers of other languages. Needs a base-language layer the engine does not have: glosses, accepts and hints in the learner's language, and a base-language setting. That is an engine project, not a curriculum one.
- **English-as-content** — vocabulary building for existing English speakers (register, idiom, academic word list). Works with the engine as it stands, but it is a different product from the other 22 ladders.

Italian and Dutch need neither decision; they are ordinary Latin-script builds on the existing scaffold. **Recommend building those two first and settling English's premise while they run** — which is also the order Alex gave.

**Total: 23 entries in `src/data/languages.js` · all target B2 · 9 live, 14 planned.** (English is an entry for the companion's regional voices, not a learnable ladder.)

---

> **Picking the next one.** ⚠️ **RE-MEASURED 2026-09-30 — the engine fact this note was built on is no longer true.** It said `conjugate` is Japanese-only and that German is therefore the worst pick. `src/store/conjugate-latin.js` now ships and `LATIN_LANGS` is `["es","fr","no"]`, French and Spanish each route **48** conjugate cards, and German is **complete through B2 and fully voiced**. Re-derived state of the card:
>
> | | engine supports conjugate | verbs tagged `conjForm` | conjugate cards routing |
> |---|---|---|---|
> | ja · fr · es | yes | 24 · 48 · 48 | **24 · 48 · 48** |
> | **no** | **yes** (`irregular` only) | **0** | **0 — pure content gap, the engine is ready** |
> | de · pt · ru · hi · id | **no** — absent from `LATIN_VERB_GROUPS` | 0 | **0 — engine gap** |
>
> So `conjugate` is dark for **6 of the 9 live languages**, for two different reasons that need two different fixes. Norwegian needs its verbs tagged (Curriculum); the other five need a conjugator entry (Feature, `src/store/conjugate-latin.js` + `VALID_VERB_GROUPS` in `src/data/contract.js`). Filed in `BUILD-CHECKLIST.md` → QA findings. **The remaining live tier-order advice below is about build lift, not about this card.**

## Tier 1 — original plan · Latin script (prioritized first)
Same actual lift as Tier 4; first only because it was the original plan.

| Lang | Flag | Script | Target | Lift | Status |
|------|------|--------|--------|------|--------|
| Spanish | 🇪🇸 | Latin | B2 | low | ✅ **LIVE** — A1→**B2**, 126 units, 3,141 items, fully voiced |
| French | 🇫🇷 | Latin | B2 | low | ✅ **LIVE** — A1→B2, 133 units, 3,127 items, fully voiced |
| German | 🇩🇪 | Latin | B2 | low | ✅ **LIVE** — A1→**B2**, 126 units, 3,092 items, fully voiced |
| Italian | 🇮🇹 | Latin | B2 | low | planned |
| Portuguese | 🇵🇹 | Latin | B2 | low | ✅ **LIVE** — A1→**B2**, 126 units, 3,045 items, fully voiced |
| Norwegian | 🇳🇴 | Latin | B2 | low | ✅ **LIVE** — A1→**B2**, 126 units, 3,045 items, fully voiced |
| Swedish | 🇸🇪 | Latin | B2 | low | planned |

## Tier 4 — lowest lift · Latin script
No script-build cost, solid TTS — the lowest lift of everything on the list.

| Lang | Flag | Script | Target | Lift | Status |
|------|------|--------|--------|------|--------|
| Dutch | 🇳🇱 | Latin | B2 | lowest | planned |
| Polish | 🇵🇱 | Latin | B2 | lowest | planned |
| Turkish | 🇹🇷 | Latin | B2 | lowest | planned |
| Indonesian | 🇮🇩 | Latin | B2 | lowest | ✅ **LIVE** — A1→**B1**, 87 units, 2,088 items, fully voiced; **B2 not yet scaffolded — the last gap before Italian** |
| Vietnamese | 🇻🇳 | Latin | B2 | lowest | planned |

## Tier 2 — mixed
| Lang | Flag | Script | Target | Lift | Status |
|------|------|--------|--------|------|--------|
| Korean | 🇰🇷 | **Hangul** (own script) | B2 | medium — real script-teaching build | planned |
| Russian | 🇷🇺 | **Cyrillic** (own script) | B2 | medium — real script-teaching build | ✅ **LIVE** — pre-A1→**B2**, 136 units, 3,264 items, fully voiced — **complete** |
| Swahili | (regional — flag TBD) | Latin | B2 | low (grouped here by history, not difficulty) | planned |
| Yoruba | (regional — flag TBD) | Latin | B2 | low (grouped here by history, not difficulty) | planned |
| Hausa | (regional — flag TBD) | Latin | B2 | low (grouped here by history, not difficulty) | planned |

## Tier 3 — highest lift · non-Latin / logographic
Deepest content-design work; **native review is non-negotiable before shipping** (especially kanji).

| Lang | Flag | Script | Target | Lift | Status |
|------|------|--------|--------|------|--------|
| Japanese | 🇯🇵 | kana + **kanji** (logographic) | B2 | highest — the deep climb | **LIVE** (kanji depth ongoing) |
| Mandarin | 🇨🇳 | **hanzi** (logographic) | B2 | highest | planned |
| Hindi | 🇮🇳 | **Devanagari** | B2 | highest | ✅ **LIVE** — pre-A1→**B2**, 136 units, 3,264 items, 2,405 / 3,264 voiced (B2 run in flight) |

---

## Honest build-lift order (low → high)
1. **Lowest — all Latin-script languages:** Tier 1, Tier 4, and Tier 2's Swahili / Yoruba / Hausa. No script cost, solid TTS.
2. **+ Script teaching:** Korean (Hangul), Russian (Cyrillic) — add a real script-build.
3. **Highest:** Japanese kanji depth, Mandarin (hanzi), Hindi (Devanagari) — deepest design + a hard native-review gate.

*Notes:* Swahili/Yoruba/Hausa are pan-regional — a single country flag misrepresents them; pick a flag/label deliberately later. Flags for languages spanning many countries (Spanish, Portuguese, German, Arabic-adjacent, etc.) are a display choice, not a fact — revisit at build time.
