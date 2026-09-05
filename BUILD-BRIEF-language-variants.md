# Build Brief — Language variants (one corpus, several voices)

**Lane:** Feature CC (engine + server config + persist + the audio pipeline) — persist and schema touch, so **draft PR, Alex merges**; multi-PR.
**Status:** 🟡 DESIGN — settled shape, not greenlit to build. Numbers below are measured against the shipped corpus, not estimated.
**Origin:** Alex, 2026-09-04. English should offer American, British and Australian companions, the learner picks one, *"the whole language would be taught in that voice while the others are hidden."*

---

## 1. The model in one line

**A variant changes the VOICE, never the corpus.** One set of items, several audio sets and several companions; the learner picks a variant when they start the language and never sees the others. Portuguese is the first consumer (**pt-BR / pt-PT**), English the second.

### Why this is scoped to voice, and why that matters

Alex settled the expensive question on 2026-09-04: variants differ in voice, not content. The alternative — showing *"lift"* vs *"elevator"*, *"boot"* vs *"trunk"* — is **three parallel corpora** with a variant axis running through every card, every `accept[]`, and every teach-before-use check. This brief does not build that and should not be quietly grown into it.

### Why Portuguese first, not English

1. **English cannot ship as a track at all yet.** Every `meaning`, `accept` and `example.en` in the corpus IS English, so an English course asks the learner to translate English into English. `LANGUAGES.md` documents this; it needs a source-language concept first. Building the variant machinery English-first means building it for the one language that cannot launch.
2. **pt-BR vs pt-PT is a wider real split than en-US vs en-GB** — pronunciation, second-person address (*você* / *tu*), and gerund vs infinitive — and Portuguese has crews starting now.
3. **Portuguese has no spelling problem** (§5). English does, and it is the only wrinkle that survives "voice only". Solving the mechanism on the clean case first keeps the two apart.

---

## 2. What it costs, measured

Current corpus: **10,200 clips / 180 MB** (ja 5,012 · fr 3,104 · es 2,084, ~18 KB each).

| | server | per learner |
|---|---|---|
| a language voiced once | ~55 MB (fr-sized) | ~55 MB over time |
| the same voiced **three** ways | **~165 MB** | **still ~55 MB** |

**The 3× is server-side only.** Clips are fetched on demand — the service-worker precache is ~5 MB and does not include audio — so a learner only ever pulls their own variant. The real costs are deploy weight, and one paid ElevenLabs generation run per variant.

Two variants (pt) is +55 MB. Three (en) is +110 MB over a single voicing.

---

## 3. What it touches

| piece | today | change |
|---|---|---|
| clip path | `/audio/${lang}/${id}.mp3` (`itemAudio.js`) | variant enters the path: `/audio/${lang}-${variant}/${id}.mp3` |
| manifest | `AUDIO_IDS`, a flat Set of item ids; `hasAudio(item)` keys on the id **alone** | must become variant-aware, or a learner on a variant with a missing clip gets `hasAudio → true` and a silent card |
| companions | `server/companions.js`, keyed by language (`COMPANIONS[lang]`), each with `voiceId` + `agentId` + `persona` + `locale` | keyed by language **+ variant**; each variant is its own ElevenLabs ConvAI agent and voice, and **Alex must create them** — that is the human step, as it was for Mathieu |
| companion names | `src/data/companions.js` — client-safe names only, personas stay server-side | same rule, one name per variant |
| the learner's pick | — | a persisted **and synced** setting; goes in `partialize` + `SYNC_KEYS` or it resets on a second device |
| generation | `generate-audio.mjs`, `--lang=fr`, voice from `COMPANIONS[lang].voiceId` | gains `--variant=`, and the voice comes from the variant entry |
| catalog | `LANGUAGES[]` = `{ id, name, flag, target }` | needs a variants list per language — see §4 |

---

## 4. The decision this rests on: is a variant a language, or a setting?

**Recommendation: a SETTING on one language.** `pt` stays one catalog entry, one corpus, one Ladder, one set of progress; the variant is a preference attached to it.

The alternative — `pt-BR` and `pt-PT` as separate `LANGUAGES[]` rows — looks tidy and is a trap:
- item ids are prefixed by language (`fr-u1l1-bonjour`), so two rows means **two id spaces over identical content**, and the front-uniqueness check would not see them as duplicates;
- a learner who switches variant would lose all progress, because progress is keyed per language;
- `canAddLanguage` would count a variant switch as a second language;
- every per-language number in the app (milestones, the Ladder, `authoringProgress`) would double-count one corpus.

As a setting, switching variant is what Alex described — the same course, a different voice — and progress is untouched by definition.

---

## 5. The one content wrinkle, and it is English-only

"Voice, not content" holds for accent. It does **not** hold for **spelling**: *colour/color*, *realise/realize*, *travelled/traveled* are orthography.

A shared corpus must pick one `front` and carry the other in `accept[]`, or a British learner is marked wrong for writing British. The machinery already exists (`accept[]` is checked on every typed answer), but it has to be **decided per item at authoring time**, not discovered by a learner. It belongs in the English authoring conventions before a crew writes a unit.

Portuguese and Spanish variants do not have this problem, which is the third reason to build on pt first.

---

## 6. Build order

1. **The variant axis, on `pt` with a single variant.** Path, manifest, setting, companion lookup — no second voice generated yet, so nothing can regress and the diff is provable against existing behaviour.
2. **Second Portuguese voice.** Alex creates the pt-PT agent; `generate:audio --lang=pt --variant=pt` runs; the picker appears at language start.
3. **Switching**, including what happens mid-course (it should be free — same corpus, same progress).
4. **English**, once the source-language work lands, inheriting all of the above plus the spelling convention.

---

## 7. Non-goals

- Per-variant **content**. If it ever becomes wanted, that is a different brief and a much larger one.
- Variant-specific curriculum, ordering, or milestones.
- Auto-detecting the learner's variant from locale — offer a default, never a silent choice about how they will be taught.

---

## 8. Gates

`test:unit` · `validate:content` · `lint:curriculum` · `audit` · `build` · Playwright dev **and** `SMOKE_MODE=preview`.

Specific to this brief:
- **A missing clip in one variant must not report `hasAudio → true`.** That is the failure this design is most likely to ship: the manifest keys on the item id today, so a variant gap would route a listening card to silence. Assert it directly.
- The learner's variant survives a reload **and a second device** (it is in `SYNC_KEYS`).
- Switching variant leaves `items` — rung and srs — byte-identical.
- Corpus is unmoved: a variant adds no items, so `audit` counts must not change.
