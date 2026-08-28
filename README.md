# Lingua

A Japanese-first, phone-first PWA for learning languages through deep understanding
rather than memorization. The daily loop is tight: **clear reviews → lesson → prove it**,
scheduled by FSRS spaced repetition and judged by the app (no self-grading).

Built around the **Polyglot Ladder**: a CEFR climb per language, all targeting B2. There
is **no prescribed order** — you start any language that has content, and once one of
yours reaches A1 you may add another, in any order. Motivation comes from mechanics and
structure — text-first, no character art, no streaks or XP. An anti-burnout design, built
with neurodivergent learners in mind.

---

## Status

**Three languages live · 428 units · 1,454 lessons · 8,949 items.** Run `npm run audit` for the
live breakdown — the numbers below are derived from it, not maintained by hand.

| Language | Units | Lessons | Items | Bands authored |
|---|---|---|---|---|
| 🇯🇵 Japanese | 208 | 809 | 5,012 | Pre-A1 · A1 · A2 · B1 · B2 |
| 🇫🇷 French | 133 | 401 | 2,480 | A1 · A2 · B1 · B2 |
| 🇪🇸 Spanish | 87 | 244 | 1,457 | A1 · A2 · B1 |

- **Japanese runs Pre-A1 → B2** — kana scripts + yōon, thematic vocab, 792 kanji (N5 into
  N3), core + intermediate grammar.
- **French runs A1 → B2; Spanish runs A1 → B1.**
- **The upper bands (B1/B2) and the newest Spanish/French content are freshly authored and
  not yet naturalness-reviewed or voiced** — they validate and lint clean, but the batched
  native-speaker / LLM naturalness pass and the audio run are the open gates. See
  [Known issues](#known-issues).

---

## Known issues

- **French is A1-core, not A1-complete.** 27 units / 566 items covering greetings through the passé composé, plus a sounds-and-accents unit that runs first. Real gaps remain against a DELF A1 syllabus: object pronouns, the imperative, `il faut` / `je dois`, comparatives, and the alphabet. The in-app milestone currently reads "French A1 complete" — that label is under review.
- **French has no audio yet.** `public/audio/fr/` is empty, so the two listening cards don't route for French and teach cards are silent. Run `npm run generate:audio` then `npm run generate:manifest` to light them up.
- **Mathieu (the French tutor) is wired but untested against the live API.** The ConvAI agent id and voice are configured; the endpoint has only been exercised with a stubbed fetch.

Full running list and detail: **`BUILD-CHECKLIST.md`** — readers shouldn't have to infer hidden problems.

---

## What's built today

**Japanese curriculum — Pre-A1 through A2 · 98 units · 369 lessons · 2,375 items** (`npm run audit` for the live breakdown):

- **Full hiragana** あ–ん (Units 1–3) and **full katakana** including dakuten/handakuten (Units 4–6).
- **Yōon** — 33 combination kana (きょ・しゃ・ぎょ…), Unit 16.
- **First A1 thematic vocab** — numbers/time, family, food + ～ます verbs, town/places, colors/weather (Units 7–10, 12).
- **106 kanji ≈ JLPT N5 complete** — recognition by meaning, production by stroke tracing (Units 11, 13–15, 17–18).
- **Core A1 grammar** — the copula sentence (Xは Yです / か / の / と / も / question words), verbs + particles (を/が/に/で/へ/から/まで), invitations & requests (ませんか/ましょう/ください), and past tense + い/な-adjective conjugation (Units 19–21).
- **A2 / N4** — the second band, shipped: more grammar, kanji and vocabulary.
- Sectioned by CEFR stage (`pre-a1` / `a1` / …) with JLPT tags on the Ladder.

**French curriculum — A1 · 27 units · 81 lessons · 566 items.** Greetings through the
passé composé, plus a **sounds-and-accents unit that runs first** — French learners can
read the letters on day one and be wrong on day one, so the sound-to-spelling map is
taught before the vocabulary that uses it. Latin-script languages get that instead of a
glyph-tracing band; `pre-a1` is the *script* band, not a difficulty band.

**Engine & app:**

- **FSRS spaced repetition** (`ts-fsrs`) — app-judged recall, FSRS grade derived from correctness + response speed.
- **Mastery rungs** per item; card kind is chosen by rung (teach → choice → type → build, with characters traced stroke-by-stroke).
- **Accounts + cross-device sync** — Supabase auth (Google sign-in), per-user progress with row-level security, last-write-wins with fresh-device safety.
- **A tutor per language** — an in-app text + voice companion (ElevenLabs conversational agent on Claude Haiku 4.5, native voice, serverless signed-URL auth so the key stays server-side). Haruki for Japanese, Mathieu for French; the tab and bottom-nav label follow the language you're studying.
- **Real audio** — ElevenLabs clips per item in the tutor's voice, played from the teach card. Japanese is fully voiced; French is not generated yet.
- **Ladder** — full-climb view, collapsible sections (writing system / yōon / kanji / units), optional romaji under each glyph.
- **Settings** — SFX toggle, auto-play pronunciation, reduce-motion, and (for languages written in a script new to the learner) romaji + furigana scaffolds. Plus a hidden **Dev Mode** (unlocked with a code in Settings) that launches any unit or lesson — bypassing the normal review/unlock gating — in a throwaway sandbox run that never touches real progress, FSRS state, or the streak.
- **PWA** — installable, offline precache, `autoUpdate` (no stale builds after deploy).

**Card kinds** (`LIVE_CARD_KINDS` in `src/data/contract.js`):

All 15 are live. A card kind ships only when it's in that list **and** exercised by the
smoke coverage fixture — the forcing function that stops a kind from being half-wired.

| kind | description | languages |
|------|-------------|-----------|
| `teach` | presentation card, no testing | all |
| `choice` | 4-option multiple choice | all |
| `choice:reverse` | meaning → word (the harder direction) | all |
| `listen:choice` | hear it, pick it | needs audio |
| `listen:type` | dictation — hear it, type it | needs audio |
| `type:meaning` | type the English meaning | all |
| `type:reading` | type the reading of the word shown | ja only |
| `type:produce` | produce the word from its meaning | all |
| `cloze:choice` | the word blanked out of its own example | all |
| `particle:choice` | the function word after it blanked | all |
| `build` | assemble the reading from tiles | ja only |
| `sentence:build` | rebuild the example from word tiles | all |
| `conjugate` | produce a verb form | ja only |
| `trace` | KanjiVG touch-to-trace | new-script languages only |
| `speak` | speech recognition + scoring | all |

**`ja only` is a correctness constraint, not a gap.** `type:reading` and `build` both show
the word and ask for its reading — a real transliteration test in Japanese (おはよう →
ohayō), but for a Latin script the prompt *is* the answer, so French items would have
graded correct by copying off the screen. They route to cards that test recall instead.
`trace` follows the script policy: a language gets stroke practice when its script is new
to the learner, so the 15 Latin-script languages get a sounds-and-accents unit rather than
a traceable a–z.

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
- `src/components/games/` — one component per card kind: Teach, Choice, Type, Build, Cloze, Sentence, Conjugate, Trace, Speak.
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

Japanese B1/B2 · French A1 completion (object pronouns, the imperative, `il faut` /
`je dois`, comparatives) and French audio · Spanish and the other 17 catalogued languages ·
Apple sign-in · a French `conjugate` card (needs a French conjugator and a contract change,
since the verb-group and form enums are currently Japanese-only).
