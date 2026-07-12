# BUILD-BRIEF — Finish A2 to JLPT N4 standard

**Owner:** Curriculum CC (content) + Feature CC (engine). **Greenlit by Alex 2026-07-12:** *"finish A2 so it meets N4 standards"* → **Full N4 coverage** + **build passive/causative engine now** (both chosen via scope question).

This is a **multi-PR program**, not one PR. This brief is the source of truth for its shape, sequencing, and status. Update the status table as phases land.

---

## Goal

A learner who completes A2 in Lingua is **genuinely JLPT N4-ready**: the vocabulary, the ~166 N4 kanji, and the full N4 grammar inventory are all taught and drilled — not a skeleton.

## Where A2 stood at kickoff (origin/main, PR #95 state)

| N4 pillar | Standard (cumulative) | A2 had | Gap |
|---|---|---|---|
| Vocab | ~1,500 words | 216 A2 words (9 units × 24) | thicken toward ~500 A2 |
| Kanji | ~300 (N5 ~106 + **N4 ~166**) | **0 N4 kanji** | whole arc |
| Grammar | ~130 N4 points | **0 grammar/conjugation content** | whole arc |

A2 today = 9 thematic **vocab-only** units (かつどう, きもち, のりもの, しごと, からだ, しぜん, かいもの, じかん, つなぎことば), each a uniform 4 lessons × 24 words. Solid vocab base; missing the kanji and grammar pillars entirely.

## What already exists (the good news)

- **Conjugation engine + card are LIVE and tested, just dormant** — no curriculum content routes to them yet ([smoke.spec.js:540](tests/smoke.spec.js#L540)). Waking them = authoring verb items tagged `group` + `conjForm`.
- **Kanji pipeline is proven** — `type:"kanji"` items, KanjiVG stroke data via `scripts/fetch-kanjivg.mjs` → `src/data/kanjivg.js`, semantic grouping via `src/data/ja/kanjiCategories.js`. A1 has 6 kanji units (U11–U21) as the template.

---

## Phases (sequenced by dependency)

### Phase 1 — Engine: full N4 verb forms ✅ SHIPPED (PR #101, draft → Alex)
Extended `conjugate.js` 8 → 12 forms: **+passive, +causative, +causative_passive, +imperative** across godan/ichidan/irregular (ある defective → null). +9 tests + defective-verb case. `CONJ_FORMS` drives `conjForm` validation, so content can now author these.
**⚠️ Gating dependency:** passive/causative *content* (Phase 2c) must branch off this / wait for #101 to merge, or `validate:content` can't confirm those `conjForm`s.

### Phase 2 — Grammar arc (Curriculum; self-merge on green, except 2c)
Grammar = function-word `vocab` items whose **examples** carry the pattern (the U19–21 model), PLUS **conjugation-drill** units that tag verbs with `group`/`conjForm` to route them to the live conjugate card.

- **2a · Core conjugation drills** *(no #101 dependency — forms already on main)*: dict/nai/ta/te/tara/ba/potential/volitional over godan/ichidan/irregular. ~2 units.
- **2b · Grammar-pattern units** *(no #101 dependency)*: the N4 grammar-point inventory below as vocab+example units. ~4–5 units.
- **2c · Passive & causative drills** *(needs #101 merged)*: passive/causative/imperative sentences + drills. ~1–2 units.

**N4 grammar-point inventory (2b target):**
て-form uses (ています・てください・てもいいです・てはいけません・てから・ておく・てみる・てしまう) · plain form + のです/んです · potential · volitional + とおもう / つもり · ～たい / ～ほしい · conditionals（と・ば・たら・なら）· giving & receiving（あげる・くれる・もらう・てあげる/くれる/もらう）· ～たり～たり · ～ながら · ～ so/because（ので・から・のに）· comparison（より・のほうが・いちばん）· ～すぎる · ～やすい/にくい · ～かた（way of doing）· ～ようになる / ～ことにする / ～ことがある · hearsay & appearance（そうだ・ようだ・らしい・みたい）· transitive/intransitive pairs · たら/と for discovery · quotation と（といいます／とおもいます）.

### Phase 3 — Kanji arc (141 new N4 kanji) (Curriculum; self-merge on green)
**Set pinned 2026-07-12** from the JLPT N4 list (167), deduped against the 26 already taught at N5 (会 新 立 手 目 言 田 作 持 多 安 元 知 道 私 口 少 足 店 待 古 買 週 駅 曜 飲) → **141 new glyphs to author:**

```
同 事 自 社 発 者 地 業 方 場 員 開 力 問 代 明 動 京 通 理 体 主 題 意 不 用 度
強 公 野 以 思 家 世 正 院 心 界 教 文 重 近 考 画 海 売 集 別 物 使 品 計 死 特
始 朝 運 終 台 広 住 無 真 有 町 料 工 建 空 急 止 送 切 転 研 究 楽 起 着 病 質
試 族 銀 早 映 親 験 英 医 仕 去 味 写 字 答 夜 音 注 帰 歌 悪 図 室 歩 風 紙 黒
花 春 赤 青 館 屋 色 走 秋 夏 習 洋 旅 服 夕 借 肉 貸 堂 鳥 飯 勉 冬 昼 茶 弟 牛
魚 兄 犬 妹 姉 漢
```

Steps:
1. Add the 141 glyphs to `fetch-kanjivg.mjs` (grouped by intended unit), run it (network) to regenerate `kanjivg.js` — the KanjiVG 404 check is a built-in per-glyph correctness gate.
2. Categorize every new glyph in `kanjiCategories.js` (each kanji in exactly one list; `categoryOf` null → add it).
3. Author ~9–12 kanji units on the U11–U21 pattern (one coherent semantic set per unit; recall tests meaning, production traces strokes). Ship in themed batches (3–4 units/PR) so each PR stays reviewable — not one 141-glyph mega-PR.

### Phase 4 — Vocab thickening (Curriculum; self-merge on green)
Grow A2 vocab 216 → ~500 toward N4 volume: additive new-id items (never renumber — preserves mastery). Fill N4 semantic domains not yet covered.

---

## Guardrails specific to this program

- **Every example uses only vocab already introduced** (globally, by climb order) and reads as a native would write it. Naturalness is checked by the **`content-auditor` fleet agent** (parallel per-unit-batch review) + Alex's Dev-Mode playtest — the proven substitute for a human native reviewer.
- **Front collisions are global** — check before adding (a homograph blocks a second front; teach via example + hint, never weaken the validator).
- **Additive edits only** where possible — new ids, so existing mastery isn't reset. Flag any id-changing move.
- **Full gate per PR**: `lint:curriculum` → `validate:content` → `test:unit` → Playwright smoke (dev + preview) → `build`. Curriculum self-merges on all-green; engine (Phase 1, any 2c engine touch) stays draft-PR → Alex.

## Status

| Phase | Scope | State | PR |
|---|---|---|---|
| 1 | Engine: passive/causative/imperative | ✅ shipped (draft) | #101 |
| 2a | Conjugation drill unit (U48, 12 verbs → conjugate card) | ✅ authored + gated; engine-verified | grammar PR |
| 2b | Grammar-pattern units (U43–47, 31 patterns) | ✅ authored + gated; 2 reviewers, 2 fixes | grammar PR |
| 2c | Passive/causative drills | ⬜ blocked on #101 merge | — |
| 3 | N4 kanji arc (141 kanji, 12 units U31–U42) | ✅ authored + gated green; 2 reviewers, 3 fixes | this PR |
| 4 | Vocab thickening (216→~500) | ⬜ pending | — |
