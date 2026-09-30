# Lingua — Language Roadmap

**Every language targets B2.** **Nine are live** — Japanese, French, Spanish, German, Portuguese, Norwegian, Russian, Hindi and Indonesian. The other 14 entries in `src/data/languages.js` are **planned**.

⚠️ **RE-DERIVED 2026-09-30.** This file said "three are live" and marked German, Portuguese, Norwegian, Russian, Hindi and Indonesian as `planned` — six live languages, three of them complete through B2 and fully voiced. Every count below is measured from the corpus, not carried forward. Re-derive with `npm run validate:content` and a clip count against `public/audio/<lang>/`; a number here is a measurement with a timestamp.

| Live | Units | Items | Bands | Audio |
|------|-------|-------|-------|-------|
| Japanese 🇯🇵 | 208 | 5,045 | pre-A1 → **B2** | 4,078 / 4,078 voiceable (Haruki) |
| French 🇫🇷 | 133 | 3,127 | A1 → **B2** | 3,127 / 3,127 (Mathieu) |
| Spanish 🇪🇸 | 126 | 3,137 | A1 → **B2** | 3,137 / 3,137 (Ignacio) |
| German 🇩🇪 | 126 | 3,092 | A1 → **B2** | 3,092 / 3,092 (Jonas) |
| Portuguese 🇵🇹 | 126 | 3,042 | A1 → **B2** | 3,042 / 3,042 (Tiago) |
| Norwegian 🇳🇴 | 126 | 3,040 | A1 → **B2** | 3,040 / 3,040 (Erling) |
| Russian 🇷🇺 | 60 | 1,440 | A1 → **A2** | 720 / 1,440 — **u31–u60 unvoiced** (Dmitri) |
| Hindi 🇮🇳 | 60 | 1,440 | A1 → **A2** | 720 / 1,440 — **u31–u60 unvoiced** (Karan) |
| Indonesian 🇮🇩 | 50 | 1,200 | A1 → **A2** | 480 / 1,200 — **u21–u50 unvoiced** |

**Corpus total: 24,563 items · 23,596 voiceable · 21,436 clips · 2,160 awaiting one paid run.**
Japanese items exceed its voiceable count because kanji `trace` items carry no clip by design.

Spanish B2 is the one remaining band in a live language. See `BUILD-CHECKLIST.md` for what is in flight. Adding a language is one catalog entry once the catalog is data-driven — see `BUILD-BRIEF-languages-catalog.md` (pitch R15).

Tiers below are Alex's planning groups (from the original conversation). The **honest build-lift** is noted separately — a couple of languages sit in a tier by history, not by difficulty.

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
| Spanish | 🇪🇸 | Latin | B2 | low | ✅ **LIVE** — A1→**B2**, 126 units, 3,137 items, fully voiced |
| French | 🇫🇷 | Latin | B2 | low | ✅ **LIVE** — A1→B2, 133 units, 3,127 items, fully voiced |
| German | 🇩🇪 | Latin | B2 | low | ✅ **LIVE** — A1→**B2**, 126 units, 3,092 items, fully voiced |
| Italian | 🇮🇹 | Latin | B2 | low | planned |
| Portuguese | 🇵🇹 | Latin | B2 | low | ✅ **LIVE** — A1→**B2**, 126 units, 3,042 items, fully voiced |
| Norwegian | 🇳🇴 | Latin | B2 | low | ✅ **LIVE** — A1→**B2**, 126 units, 3,040 items, fully voiced |
| Swedish | 🇸🇪 | Latin | B2 | low | planned |

## Tier 4 — lowest lift · Latin script
No script-build cost, solid TTS — the lowest lift of everything on the list.

| Lang | Flag | Script | Target | Lift | Status |
|------|------|--------|--------|------|--------|
| Dutch | 🇳🇱 | Latin | B2 | lowest | planned |
| Polish | 🇵🇱 | Latin | B2 | lowest | planned |
| Turkish | 🇹🇷 | Latin | B2 | lowest | planned |
| Indonesian | 🇮🇩 | Latin | B2 | lowest | ✅ **LIVE** — A1→**A2**, 50 units, 1,200 items; u21–u50 unvoiced |
| Vietnamese | 🇻🇳 | Latin | B2 | lowest | planned |

## Tier 2 — mixed
| Lang | Flag | Script | Target | Lift | Status |
|------|------|--------|--------|------|--------|
| Korean | 🇰🇷 | **Hangul** (own script) | B2 | medium — real script-teaching build | planned |
| Russian | 🇷🇺 | **Cyrillic** (own script) | B2 | medium — real script-teaching build | ✅ **LIVE** — A1→**A2**, 60 units, 1,440 items; u31–u60 unvoiced |
| Swahili | (regional — flag TBD) | Latin | B2 | low (grouped here by history, not difficulty) | planned |
| Yoruba | (regional — flag TBD) | Latin | B2 | low (grouped here by history, not difficulty) | planned |
| Hausa | (regional — flag TBD) | Latin | B2 | low (grouped here by history, not difficulty) | planned |

## Tier 3 — highest lift · non-Latin / logographic
Deepest content-design work; **native review is non-negotiable before shipping** (especially kanji).

| Lang | Flag | Script | Target | Lift | Status |
|------|------|--------|--------|------|--------|
| Japanese | 🇯🇵 | kana + **kanji** (logographic) | B2 | highest — the deep climb | **LIVE** (kanji depth ongoing) |
| Mandarin | 🇨🇳 | **hanzi** (logographic) | B2 | highest | planned |
| Hindi | 🇮🇳 | **Devanagari** | B2 | highest | ✅ **LIVE** — A1→**A2**, 60 units, 1,440 items; u31–u60 unvoiced |

---

## Honest build-lift order (low → high)
1. **Lowest — all Latin-script languages:** Tier 1, Tier 4, and Tier 2's Swahili / Yoruba / Hausa. No script cost, solid TTS.
2. **+ Script teaching:** Korean (Hangul), Russian (Cyrillic) — add a real script-build.
3. **Highest:** Japanese kanji depth, Mandarin (hanzi), Hindi (Devanagari) — deepest design + a hard native-review gate.

*Notes:* Swahili/Yoruba/Hausa are pan-regional — a single country flag misrepresents them; pick a flag/label deliberately later. Flags for languages spanning many countries (Spanish, Portuguese, German, Arabic-adjacent, etc.) are a display choice, not a fact — revisit at build time.
