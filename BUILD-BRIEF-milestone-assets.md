# Milestone-banner assets — what to make (Grok)

The milestone **popup banner** (`src/components/MilestoneToast.jsx`) is built and wired.
It shows, on every capability milestone: **Lingua's "achievement" animation** + a
**per-milestone badge image** + the milestone text + a warm chime. It's live *now* with
graceful fallbacks — this doc is the list of art to drop in so it lights up fully.

**Two hard rules the code enforces:**
1. **Transparency is mandatory for the clip.** The app deliberately ignores `.mp4`
   (MP4 can't hold alpha → white box). It loads **alpha WebM (VP9)** and **HEVC `.mov`**
   only, and falls back to the transparent still until those exist. So the animation
   must be exported on a **transparent background**, not white/green baked in.
2. **Filenames are exact.** The banner looks for each asset at a fixed path (below).
   No code change needed — drop the file in and it appears.

---

## Asset A — Lingua "achievement" clip (1 animation, 2 formats)

The celebratory reaction that plays in the banner (and is the same slot the mascot
system already reserves as `context="achievement"`).

| File | Format | Notes |
|---|---|---|
| `public/mascot/lingua-achievement.webm` | **WebM, VP9 with alpha** | primary |
| `public/mascot/lingua-achievement.mov`  | **HEVC/H.265 with alpha** | Safari/iOS fallback |

- **Content:** Lingua doing a short, warm *proud / celebrate* gesture (a nod, a little
  cheer — calm, not a jackpot). One-shot, **~1.5–3 s**, holds the last frame.
- **Background:** fully **transparent** (this is the whole point — see rule 1).
- **Size:** square, **≥ 512×512** (rendered ~60px, so small; keep it crisp).
- **Style:** matches the existing Lingua mascot (same character as `lingua-proud.png` /
  the other `public/mascot/lingua-*` clips you're already reworking).

> ⚠️ Grok Imagine (video) usually can't export alpha directly. Plan: generate on a
> flat key color (or per-frame) and **key out the background** to WebM-VP9 + HEVC-mov
> (e.g. ffmpeg / After Effects), OR animate the transparent still. Until these land,
> the banner shows the transparent **`lingua-proud.png`** still — no white box, no rush.

---

## Asset B — 13 milestone badge images (transparent PNG)

One badge per milestone, dropped in **`public/milestones/<id>.png`** (exact `id` below).
Until a file exists, the banner shows a small Award mark in its place, so partial sets
are fine — add them as you go.

**Shared spec for all badges:**
- **Format:** PNG, **transparent background**.
- **Size:** square, **512×512** (shown ~44px — keep the subject bold and centered with
  a little padding).
- **Style:** one cohesive set. Calm, "washi/paper + matcha" palette to match the app —
  **matcha green `#3F7A55`**, ink `#2B2A24`, washi cream `#F1EDE2`, a touch of AI-blue
  `#3E6DA3`. Flat / soft, rounded, a little hand-made — **not** glossy game-trophy loud.
  Think "quiet achievement medal / stamp," consistent framing across all 13.

| File (`public/milestones/…`) | Milestone | Suggested subject | Grok prompt seed |
|---|---|---|---|
| `script-hiragana.png` | You can read all of hiragana | the あ glyph on a medal | "flat minimalist badge, hiragana あ, matcha-green + cream, transparent bg, rounded stamp" |
| `script-katakana.png` | You can read all of katakana | the ア glyph on a medal | "…katakana ア…" |
| `script-yoon.png` | yōon (small combined kana) | きゃ / small-kana motif | "…combined kana きゃ, small ゃ emphasized…" |
| `kanji-first.png` | first kanji | a single kanji 一 | "…single brush kanji 一, first-stroke feel…" |
| `kanji-25.png` | 25 kanji | "25" + kanji strokes | "…numeral 25 with kanji radicals…" |
| `kanji-50.png` | 50 kanji | "50" + kanji strokes | "…numeral 50…" |
| `kanji-all.png` | every kanji so far | a 木/grid of kanji | "…grid of kanji, 'complete' wreath…" |
| `vocab-first.png` | first word mastered | a speech bubble | "…small speech bubble, sparkle…" |
| `vocab-10.png` | 10 words mastered | "10" badge | "…numeral 10, word-stack…" |
| `vocab-50.png` | 50 words mastered | "50" badge | "…numeral 50…" |
| `vocab-100.png` | 100 words mastered | "100" badge | "…numeral 100, laurel…" |
| `vocab-250.png` | 250 words mastered | "250" badge | "…numeral 250…" |
| `level-A1.png` | A1 complete | an "A1" medal | "…'A1' on a ribboned medal, CEFR level…" |

---

## Future milestones (A2 / B1 / B2 + deeper tiers)

The catalog is **content-derived**, so new milestones appear automatically as content
ships (e.g. an **`level-A2.png`** badge slot opens the moment A2 goes live; more kanji/
vocab open higher tiers). **Naming convention:** every future badge is just
`public/milestones/<milestone-id>.png` — same style set. Likely upcoming ids:
`level-A2`, `level-B1`, `level-B2`, and higher `kanji-*` / `vocab-*` tiers. Keep the set
visually consistent so the wall of earned badges reads as one family.

---

## Where things go (recap)

```
public/
  mascot/
    lingua-achievement.webm   ← Asset A (alpha VP9)
    lingua-achievement.mov    ← Asset A (alpha HEVC)
  milestones/
    script-hiragana.png       ← Asset B ×13 (transparent PNG, 512²)
    script-katakana.png
    … (see table)
    level-A1.png
```

No code changes needed — the banner picks each up by filename and hides the fallback.
