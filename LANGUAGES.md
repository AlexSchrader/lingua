# Lingua — Language Roadmap

**Every language targets B2.** **Japanese, Spanish and French are live** (all three authored through B2); every other entry is **planned** and shows as "coming soon" until its first unit ships. There is **no starter language** — a learner picks any live language, and `canAddLanguage` (earn A1 first) governs adding a second. Adding a language is one catalog entry in `src/data/languages.js`.

Tiers below are Alex's planning groups (from the original conversation). The **honest build-lift** is noted separately — a couple of languages sit in a tier by history, not by difficulty.

**Total: 22 languages · all target B2 · 3 live (Japanese, Spanish, French), 19 planned.**

---

## Tier 1 — original plan · Latin script (prioritized first)
Same actual lift as Tier 4; first only because it was the original plan.

| Lang | Flag | Script | Target | Lift | Status |
|------|------|--------|--------|------|--------|
| Spanish | 🇪🇸 | Latin | B2 | low | **LIVE** — A1+A2+B1 authored |
| French | 🇫🇷 | Latin | B2 | low | **LIVE** — complete through B2 (France 2028) |
| German | 🇩🇪 | Latin | B2 | low | planned |
| Italian | 🇮🇹 | Latin | B2 | low | planned |
| Portuguese | 🇵🇹 | Latin | B2 | low | planned |
| Norwegian | 🇳🇴 | Latin | B2 | low | planned |
| Swedish | 🇸🇪 | Latin | B2 | low | planned |

## Tier 4 — lowest lift · Latin script
No script-build cost, solid TTS — the lowest lift of everything on the list.

| Lang | Flag | Script | Target | Lift | Status |
|------|------|--------|--------|------|--------|
| Dutch | 🇳🇱 | Latin | B2 | lowest | planned |
| Polish | 🇵🇱 | Latin | B2 | lowest | planned |
| Turkish | 🇹🇷 | Latin | B2 | lowest | planned |
| Indonesian | 🇮🇩 | Latin | B2 | lowest | planned |
| Vietnamese | 🇻🇳 | Latin | B2 | lowest | planned |
| Haitian Creole | 🇭🇹 | Latin | B2 | lowest | planned — added 2026-08-28 |
| English | 🌍 | Latin | B2 | lowest *script*, **blocked on content** | planned — added 2026-08-28, see the note below |

## Tier 2 — mixed
| Lang | Flag | Script | Target | Lift | Status |
|------|------|--------|--------|------|--------|
| Korean | 🇰🇷 | **Hangul** (own script) | B2 | medium — real script-teaching build | planned |
| Russian | 🇷🇺 | **Cyrillic** (own script) | B2 | medium — real script-teaching build | planned |
| Swahili | (regional — flag TBD) | Latin | B2 | low (grouped here by history, not difficulty) | planned |
| Yoruba | (regional — flag TBD) | Latin | B2 | low (grouped here by history, not difficulty) | planned |
| Twi | (regional — flag TBD) | Latin | B2 | low (grouped here by history, not difficulty) | planned |

⚠️ **Hausa vs Twi.** This table listed **Hausa**; `src/data/languages.js` ships **Twi** (`tw`). The
code is the live catalog, so the row is corrected to Twi — but the two are different languages and
nobody recorded the swap. **Alex's call whether Hausa should also be an entry.**

## Tier 3 — highest lift · non-Latin / logographic
Deepest content-design work; **native review is non-negotiable before shipping** (especially kanji).

| Lang | Flag | Script | Target | Lift | Status |
|------|------|--------|--------|------|--------|
| Japanese | 🇯🇵 | kana + **kanji** (logographic) | B2 | highest — the deep climb | **LIVE** (kanji depth ongoing) |
| Mandarin | 🇨🇳 | **hanzi** (logographic) | B2 | highest | planned |
| Hindi | 🇮🇳 | **Devanagari** | B2 | highest | planned |

---

## Honest build-lift order (low → high)
1. **Lowest — all Latin-script languages:** Tier 1, Tier 4, and Tier 2's Swahili / Yoruba / Twi, plus Haitian Creole. No script cost, solid TTS.
2. **+ Script teaching:** Korean (Hangul), Russian (Cyrillic) — add a real script-build.
3. **Highest:** Japanese kanji depth, Mandarin (hanzi), Hindi (Devanagari) — deepest design + a hard native-review gate.

*Notes:* Swahili/Yoruba/Twi — and English — are pan-regional — a single country flag misrepresents them; pick a flag/label deliberately later. Flags for languages spanning many countries (Spanish, Portuguese, German, Arabic-adjacent, etc.) are a display choice, not a fact — revisit at build time.


---

## ⚠️ English needs a source language before it can be authored

The catalog entry is harmless — English shows as planned like any other. Its **content** is not:

- Every `meaning`, `accept` synonym and `example.en` in the corpus is **English**, and the cards ask
  "what does this mean?" *in* English. The app has **no source-language concept** — English is assumed
  to be what the learner already speaks.
- So an English track would ask a learner to translate English into English. Authoring one requires the
  gloss language to become a learner setting first (a Feature-lane change, not a content one).
- Haitian Creole has no such problem — it is a normal Latin-script target and can be scaffolded today
  with `npm run scaffold:lang`.