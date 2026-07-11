# A2 reconciliation recipe — closing out A2 (U40–44 authored + verified)

**Status:** A2 content is **complete and proven green** as a consolidated set (A1 + U22–44,
542 A2 items, 108 conjugation drills, 0 errors). The pieces are fragmented across three
branches; this is the merge to bring them onto one line. Owner: **Alex (Feature-lane merge).**

## What's where

| Branch (worktree) | Carries |
|---|---|
| `content/a2-draft` (`C:/Users/Owner/lingua-a2`) | U22–39 unit files + registry, **94-verb** `verb-groups.js`, A2 audio, kanji-skip in `generate-audio.mjs`. Uses the OLD contract. |
| `content/a2-conjugation` (`C:/Users/Owner/lingua-a2c`, off main) | **U40–44** unit files, contract **front-uniqueness exemption**, **lint.js** group/conjForm fix. Uses main's conjForm contract. |
| `origin/main` | conjugate card + `conjugate.js` engine, `conjForm`/`group` contract fields, は→ハ audio fix, `groupFor` helper, partial 16-verb `verb-groups.js`. |

## Merge order + conflict resolutions

Merge `origin/main` into `content/a2-draft`, then layer `content/a2-conjugation`. Conflicts:

- **`verb-groups.js`** — take **content/a2-draft's 94-verb** `VERB_GROUPS`, and **keep main's
  `export const groupFor`** helper (a2-draft's version lacks it; the seed stamps groups through
  it). Optionally add `"します": "irregular",` so the base する vocab (U9) tags for routing —
  the engine already conjugates it, this is only the seed-stamp path.
- **`generate-audio.mjs`** — union: main's `KANA_SOUND_FIX` (は→ハ/へ→ヘ) **and** a2-draft's
  `.filter((it) => it.type !== "kanji")` kanji-skip. Both fix different bugs.
- **`contract.js`** — take **content/a2-conjugation's** version (main's conjForm support + the
  `if (item.conjForm) continue;` front-uniqueness exemption). main lacks the exemption.
- **`lint.js`** — take **content/a2-conjugation's** version (adds `group`/`conjForm` to vocab
  allowlist + skips conjForm items in front-uniqueness). **main lacks both** — without this,
  `lint:curriculum` fails on every drill item.
- **`ja-u30l4-*.mp3`** — add/add on identical bytes; take either side.

## Register U40–44 in `src/data/a2-draft.js` (on the consolidated branch, which has all files)

```js
import { UNIT40 } from "./ja/unit40.js";
import { UNIT41 } from "./ja/unit41.js";
import { UNIT42 } from "./ja/unit42.js";
import { UNIT43 } from "./ja/unit43.js";
import { UNIT44 } from "./ja/unit44.js";

export const A2_DRAFT_UNITS = [
  UNIT22, UNIT23, UNIT24, UNIT25, UNIT26, UNIT27, UNIT28, UNIT29, UNIT30,
  UNIT31, UNIT32, UNIT33, UNIT34, UNIT35, UNIT36, UNIT37, UNIT38, UNIT39,
  UNIT40, UNIT41, UNIT42, UNIT43, UNIT44,
];

// add to A2_SAMPLER_LESSON_IDS:
"ja-u40l1", "ja-u41l1", "ja-u42l1", "ja-u43l1", "ja-u44l1",
```

## Verify

`npm run validate:a2-draft` (which runs validateContent + lintCurriculum over UNITS + A2_DRAFT_UNITS)
must print **0 errors**. Then Playwright smoke + build. A standalone cross-worktree gate already
proved this green (`scripts/validate-consolidated.mjs` on content/a2-conjugation — delete after merge).

## The four units (all follow U40's single-form, euphonic-family design)

- **U40** ぶんぽう・てform — て-form (24 items) — *already present*
- **U41** ぶんぽう・ないform — plain negative (24)
- **U42** ぶんぽう・たform — plain past, mirrors て's sound-changes (24)
- **U43** ぶんぽう・かのうform — potential / can ~, incl. する→できる (18)
- **U44** ぶんぽう・いこうform — volitional / let's ~ (18)

Sample engine output (what the card checks): かく→かいて・かかない・かいた・かける・かこう;
する→して・しない・した・できる・しよう; いく→いった・いこう; くる→こない・きた・こられる・こよう.
