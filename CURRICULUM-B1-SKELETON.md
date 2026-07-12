# Curriculum Skeleton — Japanese B1

**Owner:** Curriculum CC. **Status:** planning skeleton / design draft. **No B1 lessons authored yet** — this is the *target on paper* that B1 units get built toward, in the exact shape A1/A2 already use. Curriculum correctness ≠ schema correctness: anything authored from this still needs Alex's line-by-line review and the native-speaker gate before any "certified / JLPT-aligned" claim.

**Scope:** the **Japanese** B1 band (the deep-climb track, goal **B2** — so B1 is the *near-top* band, not the finish line). Side languages (es/fr) cap at B1; the structure here is reusable, the content is Japanese-specific.

---

## 0. Where this sits (current reality, 2026-07-12)

Grounded against `main`, not memory:

- **A1 is content-complete** — 21 live units / 729 items in `UNITS`.
- **A2 is drafted, preview-only** — 9 units (22–30) / 36 lessons / 216 items in `src/data/a2-draft.js`, **not** in `UNITS` (not seeded, not on the Ladder). Awaiting the native-speaker review + a `validate:content`/`lint:curriculum` pass, then activation (import into `UNITS`, delete the draft file).
- **The engine is fully ready.** Item types `kana` / `vocab` / `kanji` all exist (kanji is live — 106 items + `kanjiCategories.js` + KanjiVG strokes). Every card kind is live, **including `speak`** (Brief C speech-grading shipped) and **`conjugate`** (wired; `verb-groups.js` + a `conjForm` field drive it), plus `cloze` / `particle` / `sentence:build`.
- **No B1 exists yet** — nothing in the tree is `cefr: "B1"`.

**So the framing has changed from a naïve "B1 is a cliff above A1":** A2 already bridges it, and the engine already routes conjugation, particles, sentences, kanji, and speech. **B1 is primarily a *content* effort in the established pattern — not an engine build.** That's the key finding of this pass.

**Recommended workflow (mirror how A2 was done):** draft B1 as a **preview-only registry** (`src/data/b1-draft.js`, same shape as `a2-draft.js`, unit numbering continues at **31+**), browsable in Dev Mode's sandbox, **never in `UNITS`** until A2 is live and B1 clears its own review gate. This lets Alex feel B1 cards early with zero risk to real state — exactly the A2 harness that already exists.

---

## 1. What B1 means (CEFR, grounded)

CEFR B1 = **"intermediate" / independent user (threshold)**. Official global descriptor, applied to Japanese:

- **Listening/Reading:** understand the main points of clear, standard input on familiar matters (work, school, leisure, daily life); read everyday concrete texts.
- **Speaking:** connect phrases to describe experiences, events, hopes, ambitions; give brief reasons for opinions/plans; narrate a story or retell a plot.
- **Writing:** simple connected text on familiar/personal topics; a personal letter describing experiences and impressions.
- **Interaction:** handle most situations while travelling; enter unprepared into conversation on familiar topics.

**JLPT alignment (approximate):** B1 ≈ **JLPT N3**. As of Dec 2025 JLPT reports carry a CEFR reference — but that mapping is **reception-only** (reading + listening), **not** speaking/writing/interaction. So N3 lists anchor the *reception* backbone, while **production/interaction must be authored deliberately** — exactly where the app's "deep understanding, not memorization" promise beats a test-prep list. (Ties into the backlog **JLPT dual-tag**: tag JA items `jlpt: "N3"` alongside `cefr: "B1"` as they're authored — cheap now, costly to retrofit.)

---

## 2. B1 can-do statements (→ each B1 lesson's `canDo`)

Learner-facing promises; each B1 lesson's `canDo` ladders to one. Written concrete + Japanese-flavored so they're testable, matching the existing `canDo` style (e.g. A2's *"Do the housework: そうじします せんたくします…"*).

**Everyday & practical**
- Describe past experiences and daily routine in connected sentences, switching plain/polite.
- Handle a clinic/pharmacy visit: describe symptoms, follow basic instructions.
- Resolve travel friction: change a booking, report a problem, follow directions given at natural speed.
- Compare and choose with preferences ("the cheaper one", "the one that…", "I'd rather…").

**Social & opinion**
- Give and justify an opinion with a reason (～と思う / ～から / ～ので).
- Agree/disagree politely; hedge and soften (～かもしれない / ～んじゃない / ～と思う).
- Talk about plans, hopes, intentions (～つもり / ～ようと思う / ～たい / ～予定).
- Narrate an event or retell a story/film in sequence.

**Register & interaction**
- Switch plain ↔ polい appropriately; recognize casual speech.
- Recognize + use *basic* keigo (お/ご + set service phrases) — **recognition-first**, light production.

---

## 3. Grammar backbone (B1 ≈ N3), building on A2

A2 already delivers the foundation (て-form basics, plain past, い/な-adjectives, basic verb groups via `verb-groups.js`/`conjForm`). B1 extends it. Clustered so units build theme-by-theme; every pattern gets a *why-it-works* memory hook (like kana `hint`s), per the deep-understanding bar.

| Cluster | Core patterns | Card fit (all already live) |
|---|---|---|
| **て-form extensions** | ～ておく、～てしまう、～てみる、giving/receiving ～てくれる/あげる/もらう | `conjugate` + `sentence:build` |
| **Conditionals (the big B1 knot)** | ～と / ～ば / ～たら / ～なら + when each is natural | `cloze` / `sentence:build` — deep-understanding opportunity |
| **Modality / evidentiality** | ～そう / ～よう / ～みたい / ～らしい / ～かもしれない / ～はず / ～べき | `cloze:choice` |
| **Volition / intent** | ～つもり / ～ようと思う / ～予定 | `sentence:build` (maps to can-do) |
| **Potential / passive / causative** | 可能形・受身・使役（・使役受身 upper-B1） | `conjugate` (`conjForm` targets) |
| **Complex sentences** | noun-modifying (relative) clauses; ～のに / ～ので / ～ために / ～場合 / ～とき | `sentence:build` — the leap past A2's simple sentences |
| **Nominalization** | ～こと / ～の / ～ところ / ～という | `cloze` / `type` |
| **Keigo (intro)** | 尊敬語・謙譲語 set phrases; お/ご honorifics | **recognition-first** (`choice` / `listen:choice`) |

**Engine note:** every cluster maps to a card kind that already ships. The one open question (§6) is whether a *dedicated grammar-pattern item* reads better than encoding patterns on `vocab`/`conjForm` — to decide by trying a lesson, not by adding a type speculatively.

---

## 4. Vocabulary & thematic domains

Organized by **communicative domain** (same as A2's theme-per-unit: かつどう / getting around / chores / free time / feelings…), so each unit has real can-do payoff. Volume ≈ N3 cumulative (§5). B1 themes pick up where A2 stops:

- Work & study (tasks, meetings, deadlines, responsibilities)
- Health & body (symptoms, clinic, wellbeing)
- Travel & problems (booking changes, directions, mishaps)
- Food & dining (ordering, preferences, cooking)
- Money & shopping (comparing, returning, budgeting)
- Feelings & opinions (reactions, agreeing, hedging) — extends A2's emotion adjectives
- Society & relationships (community, basic current-events vocab)
- Plans, hopes & hypotheticals (goals, intentions, "what if")

Each theme reinforces its paired grammar cluster (CLAUDE.md content bar: examples must *reinforce* the target, not merely contain it).

---

## 5. Kanji scope

B1/N3 sits around **~650 cumulative kanji** (community-reconstructed estimate, **not** an official JLPT list — planning figure only). **Kanji is already a live item type** (`type: "kanji"`, meaning + on/kun, KanjiVG strokes, `kanjiCategories.js`), so B1 just keeps introducing kanji **in words** (not isolated glyphs), tagged by JLPT level, riding the existing pipeline. No new engine work — a content continuation.

---

## 6. How this maps to the app (mostly "reuse what's there")

| Need | Status |
|---|---|
| kana / vocab / kanji items | ✅ live |
| verb conjugation (`conjForm`, `verb-groups.js`, `conjugate` card) | ✅ live — B1 adds potential/passive/causative *forms/targets*, not new machinery |
| particles / cloze / sentence assembly | ✅ live (`particle:choice`, `cloze:choice`, `sentence:build`) |
| spoken production (`speak`) | ✅ live (Brief C shipped) |
| `cefr: "B1"` band, `canDo`, `dominantMode`, FSRS rungs, mastery | ✅ already support a new band |
| **draft-preview harness** | ✅ reuse the A2 pattern — a `b1-draft.js` registry + the Dev-Mode sandbox browser |
| **possible** new `type: "grammar"` for standalone patterns | ⚠️ **open** — decide by authoring a trial lesson; if patterns encode fine on `vocab`/`conjForm`, don't add a type. If added, it's a `contract.js` change → **its own scoped PR, never bundled into content** |

**Bottom line:** B1 is authored content in the established shape + a preview registry. The only thing that could touch the schema is a dedicated grammar-pattern type — and that's a "prove the need first" decision, not an assumption.

---

## 7. Sequencing & prerequisites

1. **A2 activation comes first** — gated on the native-speaker review + `validate:content`/`lint:curriculum` on the 9 draft units, then import into `UNITS`. (Already the stated next gate.)
2. **B1 drafting can run in parallel** as **preview-only** — exactly how A2 was drafted while A1 was still under review. No dependency on A2 being *live*, only on A2's *shape* being settled (it is).
3. **Author order within B1:** grammar cluster → paired vocab domain → kanji-in-words for that theme, mirroring how A1/A2 units are built.

---

## 8. Principles (carry the app's DNA)

- **Deep understanding, not memorization** — B1's conditionals, transitivity, giving/receiving, and keigo are where rote fails; each pattern gets a *why* hook.
- **Authored skeleton + generated practice** — this is the fixed spine; later Haruki-generated practice scales on top, drawing graded practice only from the curriculum bank (two-bank wall).
- **No burnout mechanics** — motivation stays structural (can-do progress, the Ladder), never streak/XP bait, even under B1's heavier load.
- **Interleave, don't cram** — lean on the existing FSRS + rung engine; B1 volume makes spacing matter more.

---

## 9. Open decisions (next session)

1. **Draft B1 as a preview registry now** (`b1-draft.js`, units 31+), in parallel with A2 activation? *(Rec: yes — proven, zero-risk, matches A2.)*
2. **Grammar as its own `type` vs. `vocab`/`conjForm`?** Decide by authoring one trial B1 grammar lesson and seeing which reads cleaner. *(Rec: try existing types first; add `grammar` only if it genuinely doesn't fit — and then as its own contract PR.)*
3. **Keigo depth at B1** — recognition-only or light production? *(Rec: recognition-first.)*
4. **JLPT dual-tag now?** *(Rec: add `jlpt: "N3"` as B1 items are authored — cheap now.)*
5. **Unit count / theme split** — how many B1 units, and the domain→unit mapping (§4). *(Curriculum CC to propose, Alex approves.)*

## 10. Handoff (the trail for desktop CC)

- **This branch/PR:** the B1 target on paper (this doc). No code, no content, no `UNITS` change.
- **Next (Curriculum CC):** pick decision #1; if yes, scaffold `src/data/b1-draft.js` + `src/data/ja/unit31…` in the A2 draft shape, wire into the existing Dev-Mode draft-preview browser (the A2 harness already exists — likely just extend its source set), and author unit 31 as the trial lesson that answers decision #2.
- **Guardrail:** B1 content stays **out of `UNITS`** (preview-only) until A2 is live and B1 clears its own native review. Any schema change (a `grammar` type) is a **separate** PR from content.
- **Alex:** confirm the assumption (Japanese B1) + the §9 decisions.

---

## Sources (grounding, verified 2026-07-12)

- [Council of Europe — CEFR descriptors (official)](https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors)
- [JLPT — CEFR level reference (official)](https://www.jlpt.jp/e/about/cefr_reference.html)
- [Japan Foundation — CEFR added to JLPT score reports (Dec 2025)](https://www.jpf.go.jp/e/project/japanese/teach/tsushin/news/202601.html)
- *Repo state (A1 live / A2 draft / item types / card kinds) read directly from `main` @ `57f896f`, not memory.*
- *Kanji/vocab volume figures (N3≈650 kanji) are community estimates, not official JLPT lists — planning use only.*
