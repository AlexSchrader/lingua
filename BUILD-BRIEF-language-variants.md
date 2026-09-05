# Build Brief — Three English voices (one corpus, one picker)

**Lane:** Feature CC (engine + server config + persist + the audio pipeline) — persist and schema touch, so **draft PR, Alex merges**; multi-PR.
**Status:** 🟡 DESIGN — settled shape, not greenlit to build. Numbers below are measured against the shipped corpus, not estimated.
**Origin:** Alex, 2026-09-04. English should offer American, British and Australian companions, the learner picks one, *"the whole language would be taught in that voice while the others are hidden."*

---

## 1. The model in one line

**English is taught by one of three companions — American, British or Australian — and the learner picks which.** One set of items, three audio sets, three companions; the whole course runs in the chosen voice and the other two are hidden.

**This is an English feature.** Every other language has one companion and therefore no picker — nothing to choose, nothing shown. The mechanism should not hardcode `"en"` (a language simply has a list of voices, and a list of one means no picker), but English is the only language getting more than one, and this brief is not a general variant system.

### Why this is scoped to voice, and why that matters

Alex settled the expensive question on 2026-09-04: variants differ in voice, not content. The alternative — showing *"lift"* vs *"elevator"*, *"boot"* vs *"trunk"* — is **three parallel corpora** with a variant axis running through every card, every `accept[]`, and every teach-before-use check. This brief does not build that and should not be quietly grown into it.

### Two Englishes, stated apart once so they stop being confused

The app's **gloss English** is the language it explains *in* (`meaning`, `accept`, `example.en`). **Taught English** is the course this brief gives three voices to. They are different things; the gloss question is logged in `LANGUAGES.md` and has nothing to do with voices.

**The only place it touches this brief is scheduling:** the picker cannot be exercised end to end until English has authored content to hear. That is a fact about when this can be tested, not an argument about whether to build it — the build order in §6 starts with the pieces that are provable without content.

---

## 2. What it costs, measured

Current corpus: **10,200 clips / 180 MB** (ja 5,012 · fr 3,104 · es 2,084, ~18 KB each).

| | server | per learner |
|---|---|---|
| a language voiced once | ~55 MB (fr-sized) | ~55 MB over time |
| the same voiced **three** ways | **~165 MB** | **still ~55 MB** |

**The 3× is server-side only.** Clips are fetched on demand — the service-worker precache is ~5 MB and does not include audio — so a learner only ever pulls their own variant. The real costs are deploy weight, and one paid ElevenLabs generation run per variant.

English is the only language paying this: **+110 MB** over a single voicing. Nothing else in the catalog changes.

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

## 4. The decision this rests on: is a voice a language, or a setting?

**Recommendation: a SETTING on one language.** `en` stays one catalog entry, one corpus, one Ladder, one set of progress; the voice is a preference attached to it.

The alternative — `en-US`, `en-GB` and `en-AU` as three `LANGUAGES[]` rows — looks tidy and is a trap:
- item ids are prefixed by language (`fr-u1l1-bonjour`), so three rows means **three id spaces over identical content**, and the front-uniqueness check would not see them as duplicates;
- a learner who switched voice would lose all progress, because progress is keyed per language;
- `canAddLanguage` would count a voice switch as starting a second language;
- every per-language number in the app (milestones, the Ladder, `authoringProgress`) would triple-count one corpus;
- and the catalog would show three Englishes to someone who wants to learn English once.

As a setting, switching is what Alex described — the same course, a different voice — and progress is untouched by definition.

---

## 5. The one content wrinkle

"Voice, not content" holds for accent. It does **not** hold for **spelling**: *colour/color*, *realise/realize*, *travelled/traveled* are orthography.

A shared corpus must pick one `front` and carry the other in `accept[]`, or a British learner is marked wrong for writing British. The machinery already exists (`accept[]` is checked on every typed answer), but it has to be **decided per item at authoring time**, not discovered by a learner. It belongs in the English authoring conventions before a crew writes a unit.

This is orthography, so it is the one part of "voice, not content" that is not free. It belongs in the English authoring conventions before a crew writes a unit — decided per item, never discovered by a learner.

---

## 6. Build order

1. **The voice axis, with every language still at one voice.** Path, manifest, setting, companion lookup. Nothing visibly changes and no picker appears, so the diff is provable against existing behaviour on the corpus that exists today — this is the part that does not wait for English content.
2. **The three English companions.** Alex creates the three ElevenLabs ConvAI agents (the human step, as it was for Mathieu); `server/companions.js` gains the three entries.
3. **The picker**, shown only for a language with more than one voice — so English only, automatically, with no `"en"` in the condition.
4. **Audio generation per voice** once there is English content to voice: `generate:audio --lang=en --voice=<variant>`, three runs.
5. **Switching mid-course** — free by construction, since it is the same corpus and the same progress.

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
