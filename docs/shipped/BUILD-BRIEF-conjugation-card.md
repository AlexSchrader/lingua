> # ✅ SHIPPED — HISTORICAL RECORD. DO NOT AUTHOR FROM THIS.
>
> **Closed out 2026-09-13.** The feature described below is built and live. **The code is the source of truth, not this document** — where they disagree, the code is right and this is stale.
>
> **Evidence it shipped:** `conjugate` is in `LIVE_CARD_KINDS`; `src/components/games/ConjugateCard.jsx` ships it.
>
> Kept because the reasoning and the rejected alternatives are worth having. Read it as history — never as an instruction.

---


---

## Integration status (2026-07-05 — engine + card built by Curriculum CC, Alex-authorized)

**Built + verified (isolated, low-collision):**
- `src/store/conjugate.js` — the engine. 17/17 unit tests pass (`tests/unit/conjugate.test.mjs`).
- `src/components/games/ConjugateCard.jsx` — the card UI, matches the {item, onGraded} interface.

**Remaining last-mile wiring (shared files the Feature CC actively edits — do on their branch to avoid conflicts, and it needs `node_modules`/build+smoke to verify, which the feature worktree lacks):**
1. **`contract.js`** — add `"conjugate"` to `LIVE_CARD_KINDS`; allow optional `group`
   (`godan|ichidan|irregular`) and `conjForm` (a `CONJ_FORMS` value) on verb items.
2. **Bulk-tag verbs** — apply `src/data/ja/verb-groups.js` to the ～ます verb items.
3. **Routing** (`Lesson.jsx` / `cardRouting.js`) — route items carrying `conjForm` to
   `<ConjugateCard>`; `assertLiveKind("conjugate")`.
4. **Smoke fixture** — exercise the `conjugate` kind (the forcing function) so CI passes.
5. **Content** — author U40–44 conjugation-drill units (verb + `conjForm` items) per the
   plan above, on `content/a2-draft`.

Order: (1)+(2) contract PR → (3)+(4) wiring PR → (5) content. Then N4 grammar is complete.
