# Lingua

A Japanese-first, phone-first PWA for learning languages through deep understanding
rather than memorization. The daily loop is tight: **clear reviews → lesson → prove it**,
scheduled by FSRS spaced repetition and judged by the app (no self-grading).

Built around the **Polyglot Ladder**: one gated track where Japanese is the deep climb
(goal B2) and side languages (es, fr) unlock at A1 of their predecessor. Motivation comes
from mechanics and structure — text-first, no character art, no streaks or XP. An
anti-burnout design, built with neurodivergent learners in mind.

---

## Status

- **A1 is content-complete** — 21 units · 93 lessons · 729 items (kana scripts + yōon, A1 thematic vocab, 106 N5 kanji, and core A1 grammar). Green on all local gates.
- **Shipped to `main`:** Units 1–10 (kana scripts + A1 thematic vocab).
- **Built locally, awaiting GitHub resume:** Units 11–21 (kanji stack + yōon + grammar) — validated and tested, not yet pushed.
- **Blockers:** PR #46 (Unit 13) is held by a GitHub account suspension (see [Known issues](#known-issues)); and A1's "N5 verified" claim is gated on a batched native-speaker review of the kanji + grammar examples.

---

## Known issues

- **GitHub account suspended** — pushes, PRs, and CI are blocked, which also halts the normal `main` → Vercel deploy. Units 11–21 (including PR #46, Unit 13) are authored, validated, and green locally but can't land on `main` until access returns. The current production build was shipped directly via the Vercel CLI, so **production is ahead of `main`**; once GitHub resumes, the local work must be pushed and reconciled into `main` *before* any git-triggered deploy, or production would roll back.

Full running list and detail: **`BUILD-CHECKLIST.md`** — readers shouldn't have to infer hidden problems.

---

## What's built today

**Curriculum — A1 content-complete · 21 units · 93 lessons · 729 items** (`npm run audit` for the live breakdown):

- **Full hiragana** あ–ん (Units 1–3) and **full katakana** including dakuten/handakuten (Units 4–6).
- **Yōon** — 33 combination kana (きょ・しゃ・ぎょ…), Unit 16.
- **First A1 thematic vocab** — numbers/time, family, food + ～ます verbs, town/places, colors/weather (Units 7–10, 12).
- **106 kanji ≈ JLPT N5 complete** — recognition by meaning, production by stroke tracing (Units 11, 13–15, 17–18).
- **Core A1 grammar** — the copula sentence (Xは Yです / か / の / と / も / question words), verbs + particles (を/が/に/で/へ/から/まで), invitations & requests (ませんか/ましょう/ください), and past tense + い/な-adjective conjugation (Units 19–21).
- Sectioned by CEFR stage (`pre-a1` / `a1` / …) with JLPT tags on the Ladder.
- **A1 is content-complete across scripts, vocab, kanji, and grammar.** The remaining gate before any "JLPT N5 verified" claim is a **batched native-speaker review** of the kanji + grammar examples (naturalness/register — the one thing no validator can check).

**Engine & app:**

- **FSRS spaced repetition** (`ts-fsrs`) — app-judged recall, FSRS grade derived from correctness + response speed.
- **Mastery rungs** per item; card kind is chosen by rung (teach → choice → type → build, with characters traced stroke-by-stroke).
- **Accounts + cross-device sync** — Supabase auth (Google sign-in), per-user progress with row-level security, last-write-wins with fresh-device safety.
- **Haruki** — an in-app text + voice tutor (ElevenLabs conversational agent on Claude Haiku 4.5, native-JP voice, serverless signed-URL auth so the key stays server-side).
- **Real audio** — ElevenLabs Haruki-voice clips per item, played from the teach card.
- **Ladder** — full-climb view, collapsible sections (writing system / yōon / kanji / units), optional romaji under each glyph.
- **Settings** — SFX toggle, auto-play pronunciation, show-romaji toggle, and a hidden **Dev Mode** (unlocked with a code in Settings) that launches any unit or lesson — bypassing the normal review/unlock gating — in a throwaway sandbox run that never touches real progress, FSRS state, or the streak.
- **PWA** — installable, offline precache, `autoUpdate` (no stale builds after deploy).

**Card kinds** (`LIVE_CARD_KINDS` in `src/data/contract.js`):

| kind | description | status |
|------|-------------|--------|
| `teach` | presentation card, no testing | live |
| `choice` | 4-option multiple choice | live |
| `type:meaning` | type the English meaning | live |
| `type:produce` | type the rōmaji / kana | built, not routed (production is via `trace` / `build`) |
| `build` | assemble the reading from tiles | live |
| `trace` | KanjiVG touch-to-trace — every kana and kanji | live |
| `speak` | Whisper speech recognition | dormant (Brief C) |

---

## Stack

- **Vite 5 + React 19**, PWA via `vite-plugin-pwa` (installable, offline precache, auto-update)
- **`ts-fsrs`** — open-source FSRS scheduler
- **Zustand + `persist` → localStorage** (isolated behind `store/`, swappable to IndexedDB)
- **Supabase** — auth + Postgres + RLS for accounts and progress sync
- **`react-router-dom`** (`App.jsx` holds routes only)
- Inline style tokens from `theme.js`; fluid layout, no device breakpoints
- **Deploy: Vercel** — `main` = production, every other branch = preview

---

## Run

```bash
npm install
npm run dev               # http://localhost:5173
npm run build             # production build
npm run preview           # serve the build
npm run validate:content  # content schema gate (hard errors + warnings)
npm run lint:curriculum   # authoring-rule gate (readings, gojūon order, density, kanji rules)
npm run audit             # per-unit counts + duplicate-id check
```

Accounts need `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env.local` (the
anon key is public-by-design; RLS protects the data). Audio generation needs
`ELEVENLABS_API_KEY`. Both files are gitignored.

---

## Tests

```bash
npx playwright install chromium   # one-time setup
npm run test:unit                 # unit tests (FSRS, SRS logic, content schema, lint)
npm test                          # Playwright smoke tests (dev)
SMOKE_MODE=preview npm test       # same tests against the production build
```

`tests/smoke.spec.js` asserts: the app mounts clean, all tabs navigate, the daily loop
runs end-to-end (teach → choice → typed recall → build → graduate), grades persist across
reload, and every `LIVE_CARD_KIND` is exercised in a single session.

CI (GitHub Actions) runs `validate:content` → `lint:curriculum` → unit tests → Playwright
smoke (dev + preview) → build, in that order.

---

## Architecture

The spine: **content is pure, schema-validated data; the engine is content-agnostic.**
Lesson 47 runs the same code as lesson 1 — no lesson- or item-specific branching in engine files.

- `src/store/useStore.js` — app state + actions (seed/reconcile, grade, daily loop, streak, cascade).
- `src/store/learnQueue.js` — in-session teach → check1 → check2 → graduate loop (`LEARN_OPTS`).
- `src/store/srs.js` / `fsrs.js` — FSRS scheduling via `ts-fsrs`.
- `src/store/grading.js` — derives the FSRS grade from correctness + response speed (`TIMING`).
- `src/store/answer.js` — typed-answer checking with romaji normalization.
- `src/store/mastery.js` — mastery `RUNGS`.
- `src/store/sync.js` / `cloudSync.js`, `src/lib/supabase.js` — accounts + cloud progress sync.
- `src/data/contract.js` — `LIVE_CARD_KINDS` + `validateContent()` (hard rules + warnings; item key allowlist).
- `src/data/lint.js` — `lintCurriculum()` authoring gate (mechanical rules, layered on the contract).
- `src/data/index.js` — imports all units, seeds/reconciles items into the store.
- `src/data/ja/*.js` — the units; `languages.js` holds the cascade (`target`/`unlock`/`unlocked`).
- `src/screens/` — Today, Ladder, Haruki, Stats, Lesson (session runner).
- `src/components/games/` — TeachCard, ChoiceCard, TypeCard, BuildCard (Trace/Speak dormant).
- `server/companions.js` — companion config, server-side only (voice ids ok, keys are env secrets).

### Workflow

- **Three lanes.** **Feature CC** (app/engine/UX), **Curriculum CC** (content units), **QA CC** (tests + reports findings). Alex reviews, feel-checks, and merges everything. Full detail in `CLAUDE.md` → "Roles."
- **Curriculum is autonomous.** Curriculum CC authors units and **self-merges** them once the full gate is green: `lint:curriculum` → `validate:content` → unit tests → smoke → build.
- **Schema and engine changes stay as draft PRs** for Alex to review before merge — the structural pieces (contract, store, card runner) keep a human gate.
- **QA never merges** — it runs the full gate + manual checks and files a prioritized findings list in `BUILD-CHECKLIST.md`, routing each fix to the Feature or Curriculum lane.
- **Why it matters:** content ships fast and stays fresh, while the parts that can break everything still get a deliberate review.

---

## Content

Content lives in `src/data/ja/`. Each unit file exports an object matching the schema in
**`CONTENT.md`**. Run `npm run validate:content` **and** `npm run lint:curriculum` after any
content change — together they enforce id patterns, CEFR/stage fields, kana-no-duplicates,
reading normalizability, the item key allowlist, gojūon order, romaji style, card density,
and the kanji rules. Neither can read *meaning* — particle choice, register, and naturalness
are the **batched native-speaker review** gate, required before any "JLPT-aligned" claim.

---

## Docs

- **`CLAUDE.md`** — standing conventions, **roles**, and guardrails for Claude Code on this repo (**read first**).
- **`BUILD-CHECKLIST.md`** — single source of truth for project state (what's done, what's next); holds the Feature CC backlog + QA findings.
- **`CONTENT.md`** — content schema reference for authoring units.
- **`BUILD-BRIEF-*.md`** — design briefs (accounts/sync, curriculum lint, speech grading).

**Roles** (full detail in `CLAUDE.md`): work runs in three Claude Code lanes — **Feature CC** (app/engine/UX, draft PRs), **Curriculum CC** (content units, self-merges on green), and **QA CC** (tests + reports findings, builds nothing, never merges). Alex reviews, feel-checks, and merges everything.

---

## Not yet built

A2 (JLPT N4) curriculum · Whisper speech grading (Brief C, the one dormant card kind) ·
Apple sign-in · side languages (es, fr).

*(A1 grammar is **authored** — Units 19–21 — pending only the batched native-speaker review, not further building.)*

*(KanjiVG tracing is **live**, not pending — it shipped PR #19 and kanji production reuses it.)*
