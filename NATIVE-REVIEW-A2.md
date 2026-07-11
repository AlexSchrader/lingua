# A2 / N4 draft — scan result + native-review packet

## Objective scan: PASS ✅ (meets the standard)

The 18 A2 draft units (u22–u39, **72 lessons · 434 items** — 240 vocab, 194 kanji) were run through the full content contract + curriculum lint (combined with A1 so prerequisites resolve) **and** a 4-reviewer interim correctness pass. Result:

- **0** contract/lint errors · **0** warnings · **0** duplicate ids
- **0** front collisions across all 39 units (A1 + A2)
- **0** A2 kanji missing KanjiVG stroke data (all 194 present)
- **0 objective correctness defects** — no wrong particle, gloss, reading, JP/EN mismatch, wrong glyph, or A1↔A2 kanji collision anywhere.

So A2 clears the **same objective bar A1 met**. Everything below is **subjective naturalness** (needs a native's ear) or **minor in-house polish** — none of it blocks activation.

---

## Priority native-review questions (medium-severity naturalness)

1. **u25 しらべます — 「ちずをしらべます。」("look up the map")** — weak collocation? A native would 地図を**見る** rather than 調べる a map. Is the English "look up the map" also off?
2. **u29 やっと — 「やっとつきます。」("I finally arrive")** — やっと implies a *realized* event; does the non-past read wrong here vs. the past form (やっとつきました)?
3. **u30 そのため — 「…。そのため、やすみます。」** — そのため is formal/written; does it clash with the casual conclusion in a spoken A2 weather sentence? (だから more natural?)
4. **u32 県 (prefecture) — the HINT** illustrates 県 with **大阪府 / 京都府**, which are 府, not 県 — the mnemonic contradicts the kanji. *(This one is in-house fixable — see below.)*

---

## Full naturalness flag list (for the native sweep)

**Vocab (u22–30, u39):**
- u25l3 しらべます — ちずをしらべます (調べる+map collocation; 見る more natural)
- u24l2 みやげ — おみやげ far more common than bare みやげ
- u22l3 てつだいます — ともだちを手伝います (手伝う marks the *task*, not the person)
- u24l2 かんこう — にほんを観光します (観光に行く / で観光する more idiomatic)
- u29l4 やっと — やっとつきます (see Q2)
- u30l1 そのため — register (see Q3)
- u30l2 しかし — しかし is written/formal between two casual です statements; でも fits better
- u29l2 たまに — たまにはしります is parse-ambiguous in kana (たまに+走ります vs たまには+知ります)
- u30l1 つまり — 「つまり、だいじょうぶです」reads abrupt with no antecedent clause to summarize
- u26l2 けが — けがをします as a bare present is slightly unnatural in isolation
- u37l1 短い — 「この道は短いです」(近い more idiomatic for a road)
- u38l3 太陽 — 「たいようはあかいです」(sun-is-red reads oddly as a bare statement)

---

## In-house polish → Curriculum CC (fixable without a native)

- **u32l2 県 hint** — rewrite the mnemonic to use actual 県 examples (e.g. 大阪府 → a real 県 like 奈良県/千葉県), since 府 contradicts the kanji being taught. *(med — factually misleading)*
- **u34l3 身** — example 中身をみます uses the 中身="contents" sense, not 身="body"; pick an example that reinforces "body."
- **u31l3 運** — glossed "carry / luck" (two unrelated senses) with example 運動します that shows neither; consider splitting the gloss or a clearer example.
- **Reading house-style** — u35l4 拾 reads `hiroimasu` and u37l3 追 reads `oimasu` (masu-form), while every sibling kun-verb kanji uses the plain dictionary form (mamoru, noru, ueru…). Normalize to `hirou` / `ou`. *(cosmetic — kanji readings aren't graded)*
- **Duplicate example sentences** — u38l1 仕 shares 「しごとをします」verbatim with u35l3 仕; u38l3 予 shares 「よていをきめます」with u37l2 定. Vary one of each for review freshness.

## Downstream → Feature CC (engine, not content)
- Several A2 kanji share an English gloss with an A1 kanji (路/道 "road", 事/物 "thing", 対/反 "opposite", 究/調 "research-ish"). Individually correct, but the **choice-card distractor pool** could surface two same-gloss options as ambiguous. Worth a distractor-pool guard when A2 activates.

---

*Bottom line: A2 draft is structurally sound and objectively correct — ready for reconciliation/activation on the objective bar. The list above is naturalness polish, batched for the native review + a short Curriculum-CC touch-up.*
