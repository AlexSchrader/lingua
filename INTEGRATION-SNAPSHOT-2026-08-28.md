# Integration snapshot — 2026-08-28

Safety record taken BEFORE the "get everything up to date" integration (Alex-directed, all crews stopped). If the merge gets messed up, this reconstructs what each block was so crews can re-fix content.

## Restore point
- **Backup tag: `backup/pre-integration-2026-08-28` = `e1d7829`** (main before any merge).
- Restore: `git reset --hard backup/pre-integration-2026-08-28`
- Canonical repo: `c:/dev/lingua` (off OneDrive). origin/main (deployed prod) = `4539622`, **266 commits behind local main**, last deploy 2026-07-23.

## main BEFORE integration (`e1d7829`)
| lang | units | lessons | items |
|---|---|---|---|
| es | 20 | 80 | 483 (A1 only) |
| fr | 57 | 201 | 1287 |
| ja | 208 | 809 | 5012 (**has B1 + B2 — the most complete ja anywhere**) |
| **TOTAL** | | 1090 | **6782** |

## The divergence (why this is an assembly, not a merge)
Each content crew branched from an older main and advanced ONE language, leaving the others frozen at branch-point. No branch has everything:
- `content/es-a2-merge` (8/25, ahead33/behind178): **es 50u/1193 (A1+A2)** ✅ · fr 27u ⚠️ · ja 155u/2375 ⚠️ (no B2)
- `content/fr-b1-merge` (8/25, ahead41/behind118): **fr 94u/2168 (A1+B1)** ✅ · es 20u ⚠️ · ja 155u/3743 ⚠️ (no B2)
- `content/fr-b2-scaffold` (8/25, ahead42/behind118): fr 133u (B2 = **empty locked stubs, NOT authored**) · ja 155u ⚠️
- `main`: **ja 208u (B1+B2)** ✅ · es A1 only ⚠️ · fr 57u ⚠️

## Integration plan (assemble the best of each language)
Base = main (keeps ja B2). Merge in each language's most-complete AUTHORED source:
1. `content/es-a2-merge` → brings es A1+A2 (20u→50u). ja untouched by branch (3-way keeps main's 208u).
2. `content/fr-b1-merge` → brings fr B1 (57u→94u).
3. **Skip `content/fr-b2-scaffold`** — B2 is empty stubs, not for prod. (Confirm with Alex.)
4. Regenerate `audioManifest.js` (the one shared file both branches touch) after merges.
- Conflict surface (to "smooth out"): `audioManifest.js` (regenerate), `scripts/generate-audio.mjs` (es), `src/store/distractors.js` + `tests/unit/distractors.test.mjs` (fr).
- Expected result: es 50u / fr 94u / ja 208u — nothing regresses. Gate after EACH merge; verify ja stays 208u.

## Full unmerged-branch inventory (ahead of main)
Recent content (relevant): es-a2-merge, es-a2-block1/2/3 (8/24-25), fr-b1-merge, fr-b1-block1/2/3 (8/22-25), fr-b2-scaffold, es-a1-merge/block2/3, ja-b1-block1b, integration/{fr-a2,ja-b1,es-a1-testbase}.
Stale (June–July feature/fix branches, 500+ behind main — NOT merge candidates, superseded): fix/audio-voice-quality, feat/trace-card, feat/unit-2, feat/session-structure, feat/haruki-agent, feat/today-warmup, content/a2-draft, content/b1-draft, feat/a2-consolidated, feat/jlpt-vocab-complete, etc.
Engine (separate, leave for cleanup): `perf/split-kanjivg` (KanjiVG entry-chunk split; ahead1/behind40; trace fix for it is stranded in the OneDrive copy @ 2424cae2).

## Deploy gap
Prod (origin/main) serves 2375 items, last pushed 2026-07-23. Getting the app "up to date" = this integration → push origin/main → Vercel prod deploy (the irreversible step; confirm before pushing).
