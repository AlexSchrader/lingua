# BUILD BRIEF — Kanji Audio (voice the reading, not the glyph)

**For:** Feature CC (the audio script is tooling) + a tiny content field (Curriculum CC)
**Priority:** Low/medium — kanji are learned visually, so this isn't blocking; it's the
clean way to give the 194 A2 kanji (and the A1 kanji) *correct* pronunciation audio.

---

## The bug
`scripts/generate-audio.mjs` voices `item.front`. For **vocab** that's a full kana word
(あるきます) → TTS reads it correctly. For **kanji** the front is a lone glyph (使) → TTS
picks *its own* reading (usually the on-yomi, し) instead of the one we teach (つかう).
Same class as は→"wa". So bare-glyph kanji audio is systematically wrong; I skipped it in
the last audio pass rather than generate ~194 mismatches.

## The fix
For kanji items, voice the **kana reading**, not the glyph. A Japanese TTS reads kana
unambiguously, so the clip matches the taught reading.

**Why not just romaji→kana in the script?** Long vowels are lossy: `tōru` could be とおる
(通る) or とうる — romaji alone can't tell. So the kana must be provided, not inferred.

### Recommended: a `yomi` kana field on kanji items
1. **Contract (Feature CC, small):** allow an optional `yomi` string on `kanji` items —
   the kana reading (e.g. `使` → `yomi: "つかう"`). Validate it's kana + normalizes to the
   same romaji as `reading` (a free consistency check).
2. **Audio script (Feature CC):** `const text = item.yomi ?? item.front;` — kanji voice
   their `yomi`; everything else is unchanged.
3. **Content (Curriculum CC):** I add `yomi` to all 194 A2 kanji (and the 106 A1 kanji).
   I already hold every reading, so this is mechanical — I can generate the kana from the
   taught reading + the kanji, cross-checked.

### Fallback (if not worth the field)
Skip kanji audio entirely — kanji are learned by sight + the meaning/reading on screen, so
no-audio is acceptable. (This is the current state: kanji have no clips, vocab do.)

## Definition of done
- Kanji items carry `yomi`; the audio script voices it; a spot-check of 使/始/通/etc.
  says the taught reading, not the on-yomi.
- Re-run `npm run generate:audio --force` for kanji only → correct clips first time.

## Lanes
- **Feature CC:** the optional `yomi` contract field + the one-line script change.
- **Curriculum CC:** populate `yomi` on the kanji items (I'll do all 300 once the field exists).
