# Lingua

A Japanese-first, phone-first PWA for learning languages through deep understanding
rather than memorization. The daily loop is tight: **clear reviews → lesson → prove it**,
scheduled by FSRS spaced repetition and judged by the app (no self-grading).

Built around the **Polyglot Ladder**: one gated track where Japanese is the deep climb
(goal B2) and side languages (es, fr) unlock at A1 of their predecessor. Motivation comes
from mechanics and structure — text-first, no character art, no streaks or XP. An
anti-burnout design, built with neurodivergent learners in mind.

---

## What's built today

**Curriculum — 21 units · 82 lessons · 604 items** (`npm run audit` for the live breakdown):

- **Full hiragana** あ–ん (Units 1–3) and **full katakana** including dakuten/handakuten (Units 4–6).
- **Yōon** — 33 combination kana (きょ・しゃ・ぎょ…), Unit 16.
- **First A1 thematic vocab** — numbers/time, family, food + ～ます verbs, town/places, colors/weather (Units 7–10, 12).
- **106 kanji ≈ JLPT N5 complete** — recognition by meaning, production by stroke tracing (Units 11, 13–15, 17–21).
- Sectioned by CEFR stage (`pre-a1` / `a1` / …) with JLPT tags on the Ladder.
- **Grammar/particles are the remaining A1 piece and are intentionally gated** behind a batched native-speaker review of the kanji units.

**Engine & app:**

- **FSRS spaced repetition** (`ts-fsrs`) — app-judged recall, FSRS grade derived from correctness + response speed.
- **Mastery rungs** per item; card kind is chosen by rung (teach → choice → type → build).
- **Accounts + cross-device sync** — Supabase auth (Google sign-in), per-user progress with row-level security, last-write-wins with fresh-device safety.
- **Haruki** — an in-app text + voice tutor (ElevenLabs conversational agent on Claude Haiku 4.5, native-JP voice, serverless signed-URL auth so the key stays server-side).
- **Real audio** — ElevenLabs Haruki-voice clips per item, played from the teach card.
- **Ladder** — full-climb view, collapsible sections (writing system / yōon / kanji / units), optional romaji under each glyph.
- **Settings** — SFX toggle, auto-play pronunciation, show-romaji toggle, and a hidden **Dev Mode** playtest panel (launch any unit/lesson in an isolated sandbox run).
- **PWA** — installable, offline precache, `autoUpdate` (no stale builds after deploy).

**Card kinds** (`LIVE_CARD_KINDS` in `src/data/contract.js`):

| kind | description | status |
|------|-------------|--------|
| `teach` | presentation card, no testing | live |
| `choice` | 4-option multiple choice | live |
| `type:meaning` | type the English meaning | live |
| `type:produce` | type the rōmaji / kana | live |
| `build` | assemble the reading from tiles | live |
| `trace` | KanjiVG touch-to-trace | dormant (Brief 3) |
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

- **`BUILD-CHECKLIST.md`** — single source of truth for project state (what's done, what's next).
- **`CLAUDE.md`** — standing conventions and guardrails for Claude Code on this repo.
- **`CONTENT.md`** — content schema reference for authoring units.
- **`BUILD-BRIEF-*.md`** — design briefs (accounts/sync, curriculum lint, speech grading).

---

## Not yet built

Particles & grammar (gated on native review) · Whisper speech grading (Brief C) · KanjiVG
tracing card (Brief 3) · Apple sign-in · side languages (es, fr).
