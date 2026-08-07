# Lingua

A Japanese-first, phone-first PWA for learning languages through deep understanding
rather than memorization. The daily loop is tight: **clear reviews → lesson → prove it**,
scheduled by FSRS spaced repetition and judged by the app (no self-grading).

Built around the **Polyglot Ladder**: every language targets B2, and you earn the right to
start another by reaching A1 in one you've already begun — there's no fixed order between
them. Motivation comes from mechanics and structure: capability milestones, not streaks or
XP. An anti-burnout design, built with neurodivergent learners in mind.

---

## Status

**Two live languages · 125 units · 2,941 items.** `npm run audit` for the live breakdown.

| | units | lessons | items | stages | audio |
|---|---|---|---|---|---|
| 🇯🇵 **Japanese** | 98 | 369 | 2,375 (175 kana · 248 kanji · 1,952 vocab) | pre-A1 → A2 | 2,372 / 2,375 |
| 🇫🇷 **French** | 27 | 81 | 566 (all vocab) | A1 | 0 / 566 |

- **Japanese** — A1/N5 complete (scripts, yōon, thematic vocab, 106 N5 kanji, full core grammar) and the A2/N4 arc authored on top.
- **French** — A1 *core*: greetings through the passé composé, a sounds-and-accents unit that runs first, and a grammar unit covering the partitive, possessives and demonstratives. Not yet A1 exam-complete (see [Known issues](#known-issues)).
- **All 15 card kinds are live** for Japanese. French routes 9 of 15 today — 11 once its audio is generated; `trace` is N/A for a Latin script and `conjugate` needs a contract change (see `CONTENT.md` → Script policy).
- **Remaining quality gate for Japanese:** a batched native-speaker review of the kanji + grammar examples before any "JLPT N5 verified" claim.

---

## Known issues

- **French is A1-core, not A1-complete.** 27 units / 566 items covering greetings through the passé composé, plus a sounds-and-accents unit that runs first. Real gaps remain against a DELF A1 syllabus: object pronouns, the imperative, `il faut` / `je dois`, comparatives, and the alphabet. The in-app milestone currently reads "French A1 complete" — that label is under review.
- **French has no audio yet.** `public/audio/fr/` is empty, so the two listening cards don't route for French and teach cards are silent. Run `npm run generate:audio` then `npm run generate:manifest` to light them up.
- **Mathieu (the French tutor) is wired but untested against the live API.** The ConvAI agent id and voice are configured; the endpoint has only been exercised with a stubbed fetch.

*(Resolved: the June GitHub suspension is over and `main` is the production source of truth again — no CLI-deploy divergence.)*

Full running list and detail: **`BUILD-CHECKLIST.md`** — readers shouldn't have to infer hidden problems.

---

## What's built today

**Japanese** (`src/data/ja/`):

- **Full hiragana and katakana** including dakuten/handakuten, plus the 33 **yōon** digraphs.
- **248 kanji** — recognition by meaning, production by stroke tracing (KanjiVG).
- **A1/N5 grammar complete** — the copula sentence, all core particles, ～ます verbs with past/negative, い/な-adjective conjugation, invitations and requests.
- **A2/N4 arc authored** on top: て-form, conditionals, comparison, passive/causative, plus conjugation drill units that feed the `conjugate` card.

**French** (`src/data/fr/`):

- **Les sons runs first** — the sound-to-spelling map (accents, `eau`/`oi`/`gn`/`ill`, silent finals, liaison, elision). Latin-script languages get this instead of a script-tracing band; see `CONTENT.md` → **Script policy**.
- **A1 core** — greetings, identity, family, numbers to 1000, food and café, town and directions, time, calendar, weather, body, clothes, home, shopping, transport, meals, jobs, opinions, countries, animals.
- **Grammar** — negation (`ne … pas/rien/personne/plus/jamais`), the three question forms, être/avoir/aller across every person, the near future, the passé composé with both auxiliaries, and the partitive/possessives/demonstratives.
- Nouns are taught **with their article** so gender is part of the word.

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

All 15 are live and routed. The rung an item sits on picks the card.

| kind | description | French? |
|------|-------------|---------|
| `teach` | presentation card, no testing | ✅ |
| `choice` | 4-option multiple choice | ✅ |
| `choice:reverse` | English in → pick the target language | ✅ |
| `listen:choice` | hear it → pick it | needs audio |
| `listen:type` | dictation — hear it, type it | needs audio |
| `type:meaning` | type the English meaning | ✅ |
| `type:reading` | type the reading of the glyph shown | ja only — the reading *is* the spelling in a Latin script |
| `type:produce` | produce the word from its meaning | ✅ |
| `cloze:choice` | fill the word into its own example sentence | ✅ |
| `particle:choice` | fill the missing particle / preposition | ✅ |
| `build` | assemble the reading from tiles | ja only — same reason as `type:reading` |
| `sentence:build` | reassemble the example sentence from tiles | ✅ |
| `conjugate` | produce a verb's target form | ja only — needs a contract change for French |
| `trace` | KanjiVG touch-to-trace | N/A — nothing to trace in a Latin script |
| `speak` | say it aloud, graded by STT | ✅ |

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
- `src/data/ja/*.js` and `src/data/fr/*.js` — the units. `src/data/languages.js` is the language catalog (live vs planned is *derived* from which languages have units, never stored).
- `src/store/cardRouting.js` — which card kind an item gets, and the script-shape guards that keep a card from degenerating into copying its own prompt.
- `src/screens/` — Today, Ladder, Haruki, Stats, Lesson (session runner).
- `src/components/games/` — one component per card kind (Teach, Choice, Type, Build, Cloze, Sentence, Conjugate, Trace, Speak).
- `server/companions.js` — per-language tutor config, **server-side only** (personas and voice ids live here; the client gets names only, via `src/data/companions.js`).

### Workflow

- **Four lanes.** **Feature CC** (app/engine/UX), **Curriculum CC** (content units), **QA CC** (tests + findings), **Idea CC** (ranked proposals, builds nothing). Alex reviews, feel-checks, and merges everything. Full detail in `CLAUDE.md` → "Roles."
- **Nothing reaches Alex unverified.** Every deliverable passes its **domain gate** (`code-auditor`, `content-auditor`, `usability-auditor`, `stats-auditor`, `accuracy-auditor`) and then the **Truth Layer** — `fact-checker` (every number traced to the repo) and `truth-agent` (attacks the reasoning). Gates **BLOCK, never rewrite**, and never approve their own department. Spec: `AGENT-FLEET.md`; runnable agents in `.claude/agents/`.
- **Curriculum is autonomous.** Curriculum CC authors units and **self-merges** them once the full gate is green: `lint:curriculum` → `validate:content` → unit tests → smoke → build.
- **Schema and engine changes stay as draft PRs** — the structural pieces (contract, store, card runner) keep a human gate.
- **Why it matters:** content ships fast and stays fresh, while the parts that can break everything get a deliberate review. In practice the gates earn it — they've caught mis-attributed SRS credit, a milestone that silently un-earned itself, and cards that routed without teaching anything.

---

## Content

Content lives in `src/data/<lang>/` — `ja/` and `fr/` today. Each unit file exports an object
matching the schema in **`CONTENT.md`**, which also documents the **script policy**: which
languages get a glyph section and the `trace` card (those whose script is new to the learner)
versus a sounds-and-accents unit (every Latin-script language). Run `npm run validate:content` **and** `npm run lint:curriculum` after any
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

**Roles** (full detail in `CLAUDE.md`): work runs in four Claude Code lanes — **Feature CC** (app/engine/UX, draft PRs), **Curriculum CC** (content units, self-merges on green), **QA CC** (tests + findings, never merges), and **Idea CC** (proposals only). Alex reviews, feel-checks, and merges everything.

---

## Not yet built

**French audio** (generation run pending) · **Spanish** (Nacho's persona is written; no units yet) ·
the remaining 18 planned languages · Apple sign-in · a French `conjugate` card (needs a
contract change — `VALID_VERB_GROUPS` are Japanese verb classes).

*(Speech grading, the A2/N4 curriculum, and KanjiVG tracing are all **live** — an older
version of this file listed them as pending.)*
