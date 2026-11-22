> **Copied from desktop-buddy** (`docs/STUDYBOT.md` at `48929e4`, 22 Nov 2026), where the
> contract is owned (the Doodle mind session). Do not change the contract here; propose changes
> there. The one edit: the design-doc link points at desktop-buddy. **Lingua's side — how this
> repo implements it — is the last section, "Lingua's implementation".**

# StudyBot: the test hook Doodle studies through

Version: **1.0**. One small contract that every app Doodle studies in puts on `window.StudyBot`.
His window (`StudyPage`, desktop-buddy) drives the app only through this hook, the way his flight
sim bot drives the trainer through SimBot. It never reaches into the app's own code. The design is
in desktop-buddy's `docs/STUDY-APPS-DESIGN.md`.

A 1.x only adds fields and options. A bot written for 1.0 keeps working on any 1.x, so check the
major number (`Math.floor(Number(version)) === 1`), not the exact one.

Apps that carry it:
- **Lingua** (`C:\dev\lingua`): behind a build flag that is off in production. Runs **signed out**
  in his window (no Supabase settings, so no accounts exist). The tutor is text only.
- **Clear-Prop study page** (`assets/clear-prop/study.html` in desktop-buddy): a small web page
  reading Clear-Prop's own content JSON (`C:\dev\clear-prop-trainer\ClearProp\Resources\Content\`).

## Rules for the app

1. **Never present the answer before he has answered.** `state()` and `actions()` show what a learner
   sees on screen, nothing more. The answer only arrives in the `feedback` event, after his answer,
   exactly as the app shows it to a learner. (He learns only what the app teaches him: that is the
   whole point.)
2. **No real user data.** `hello().testAccount` is `true` only when no real account can load
   (signed out, or a sandbox). His window refuses to run otherwise.
3. **Everything a tap would do, `act` does, and nothing more.** No skipping, no unlocking, no
   writing progress directly.
4. Text in every field is plain text (no HTML), under 2000 characters.

## Calls

```js
StudyBot.version            // '1.0'
StudyBot.hello()
// { app: 'lingua' | 'clearprop', version: '1.0', appVersion: '…', testAccount: true,
//   subjects: ['japanese'] | ['radio', 'written'] }

StudyBot.state()
// { screen: 'home' | 'lesson' | 'question' | 'feedback' | 'done' | 'tutor' | 'error' | string,
//   item: null | {
//     itemId: 'ja:u12:neko',        // stable across runs: the same card always has the same id
//     subject: 'japanese' | 'radio' | 'written',
//     kind: 'word' | 'kana' | 'kanji' | 'grammar' | 'readback' | 'scenario' | 'listening'
//           | 'written' | string,     // radio readbacks: the call's kind, see below
//     prompt: '猫',                 // what is asked, as shown
//     choices?: [{ id: 'c0', text: 'cat' }, …],   // a multiple-choice question
//     input?: 'text',               // a typed answer instead (a readback, a translation)
//   },
//   progress: { done: 3, total: 10 } | null }

StudyBot.actions()
// [{ id: 'next', label: 'Next', kind: 'button' | 'choice' | 'field' | 'tab',
//    rect: { x, y, w, h } }]        // page pixels in the 390x844 window: where his finger lands

await StudyBot.act(id, value?)       // a tap on action `id`; `value` is the text for a field
// { ok: true } | { ok: false, error: 'no such action' | '…' }
// Answering: act(choiceId) for a choice; act(fieldId, 'the text') then act('submit') for typing.

StudyBot.on(name, handler)           // '*' for every event; handler(data, name)
StudyBot.take()                      // every event since the last take(), oldest first, then clears
// [{ name, data, at }]              // (his window polls this; it is the same events as on())
```

## Events

| Event | Data |
|---|---|
| `feedback` | `{ itemId, right: boolean, answer: 'cat', given: 'dog', note?: '…' }`. `answer` is the correct answer **as the app shows it** (for a choice, its text, not its id). Sent once per answered item. |
| `screen` | `{ from, to }` when the screen changes. |
| `error` | `{ message, source: 'throw' \| 'console' \| 'request', url?, status? }`. Thrown errors, console errors, failed requests (status 400+ or no answer). |
| `done` | `{ done, right, total }` at the end of a lesson or round. |
| `tutor` | (Lingua) `{ from: 'tutor' \| 'you', text }`, each line of the tutor chat. |

His window adds `stuck` itself (nothing changed within 4 s of an `act`), so the app needs no
watchdog.

## Radio kinds (Clear-Prop)

A readback item's `kind` names the call, so his flight sim radio learns from the same cards
(`radioMastery(kind)` in `src/main/mind/study.ts`). Use the flight sim's own intent names
(`KNOWN_INTENTS` in `src/main/flightSim/readback.ts`), so a card and a sim call match exactly:
`taxi`, `holdShort`, `lineUpAndWait`, `clearedForTakeoff`, `clearedTouchAndGo`, `extendDownwind`,
`clearedForOption`, `clearedToLand`, `goAround`, `makeTraffic`, `exitAndContact`, `contact`,
`holdPosition`, `requestTaxi`, `reportReady`, `reportFullStop`, `requestTaxiToRamp`. A call with
none of these is `kind: 'radio'` (studied, but it feeds no sim call). Calls that only ask him to
understand (no readback) are `kind: 'listening'`.

## Versions

| Version | What it added |
|---|---|
| 1.0 | hello, state, actions, act, on, take; feedback, screen, error, done, tutor events. |

---

## Lingua's implementation

Code: `src/studybot/` (`flag.js` the build flag, `core.js` the pure rules, `bus.js` what screens
publish, `hook.js` `window.StudyBot`). Cards publish what is on screen with `useBotSurface` and emit
`feedback` from the handler that reveals the answer. Tests: `tests/unit/studybot-core.test.mjs`,
`tests/unit/tutor-text.test.mjs`, `tests/studybot.spec.js` (drives a whole lesson through StudyBot),
`tests/no-studybot.spec.js` + `scripts/check-no-studybot.mjs` (production has none).

### Building it

```powershell
npm run build:studybot
```

- Writes `dist-studybot/`: plain static files. Serve it at the origin root (`https://lingua.invalid/`).
- **SPA fallback needed:** routes like `/lesson/ja-u1l1` are client-side. Any path that is not a file
  must be answered with `index.html` (only matters on a reload or a deep link).
- **Only in this build:** `window.StudyBot`; Supabase keys blanked (no account can exist, progress
  lives only in the window's own `localStorage`); no service worker; the text tutor instead of the
  voice tutor. A normal `npm run build` has none of it — `npm run check:no-studybot` proves it.
- **Tutor address + secret:** set at build time, e.g. in `.env.studybot.local` (gitignored):
  - `VITE_STUDYBOT_API` — the preview deployment's origin (https, no path). Unset = the tutor screen
    says it is not connected and makes no request.
  - `VITE_STUDYBOT_TUTOR_TOKEN` — the same value as the deployment's `TUTOR_TEXT_TOKEN`.
  - `VITE_STUDYBOT_API_BYPASS` — needed: Lingua's preview deployments are behind Vercel
    Authentication (checked 22 Nov 2026: 401 "Protected deployment", preflight included). A
    "Protection Bypass for Automation" secret. It opens every protected preview of the project, so it
    stays in this local build only (`dist-studybot/` is gitignored and vercelignored).
- Smoke: `SMOKE_MODE=studybot npx playwright test` builds it and runs `tests/studybot.spec.js`.
  **It rebuilds `dist-studybot/`**, and with a `.env.studybot.local` present the tutor test fails (it
  expects "not connected"). Run it without that file, then rebuild Doodle's copy.

### Screens

| `screen` | When | `item` |
|---|---|---|
| `onboarding` | first run: Lingua's language pick (`lang-ja`, then `continue`) | null |
| `onboarding:profile` | first run, step 2 (`start-learning`; name/reminder optional) | null |
| `home` | Today | null |
| `lesson` | a lesson's intro (`begin`) | null |
| `teach` | a teach card — **shows the answer**, which is what teaching is | with `shown` |
| `question` | a card waiting for an answer | yes |
| `feedback` | the card after an answer (`continue`) | yes |
| `done` | a lesson's or a review's end screen | null |
| `review` | the review runner between cards | null |
| `tutor` | the tutor chat | null |
| `error` | the crash screen | null |
| `ladder`, `stats`, `settings`, `achievements`, `dev` | the other tabs/pages | null |

### `kind` and `card`

- `kind` (the item): `kana`, `kanji`, `word` (vocab), `letter` (Latin-script letters, other
  languages), plus `conjugate` (a verb form), `grammar` (a particle), `sentence` (sentence build).
- `card` (added field: the card type, as in `LIVE_CARD_KINDS`, plus `trace:free` for a trace drawn
  from memory): `teach`, `choice`, `choice:reverse`,
  `listen:choice`, `listen:type`, `type:meaning`, `type:reading`, `type:produce`, `cloze:choice`,
  `particle:choice`, `build`, `sentence:build`, `conjugate`, `trace`, `trace:free`, `speak`.

### Item ids

`itemId` is Lingua's content id, e.g. `ja-u1l1-a` (あ), `ja-u1l1-ohayou`. Stable across runs (an id
only changes in a flagged renumber, which also resets learner progress). Cards that drill something
other than the item add a suffix: `<id>:<conjForm>` (conjugate), `<id>:particle`, `<id>:sentence`.

### Fields Lingua adds (1.x additions, proposed to the contract)

- `item.card` — the card type (above).
- `item.ask` — the instruction line printed above the prompt ("Type the meaning").
- `item.note` — a message the card is showing now ("Not quite — try once more", the trace card's
  "Stroke 1 of 3 — now trace it", "Speaking is not checked here").
- `item.audio: true` — the card plays a sound. On hear-it cards the sound IS the prompt, so `prompt`
  is `""`, and Doodle (who can't hear) uses `show` ("Can't hear it? Show it") to reveal the word, as
  a learner can. On a speak card the word is printed too, so `prompt` carries it.
- `item.guide` — on a trace card, the stroke the pad is showing now (see Trace below).
- `act('trace', path)` — `value` for a `draw` action is a path, not text.
- `item.shown` — on `teach` only: `{ meaning?, reading?, example?, hint? }`, exactly what is printed.
- Event **`teach`** `{ itemId, prompt, answer, reading?, note? }` — once per teach card. In Lingua the
  first time an answer is shown is the teach card, before any question, so this is where a memory
  card should start (`answer` is the meaning, or the reading for a kana).

### Actions

- Ids: `data-bot` where set (`answer` + `submit` on typed cards, `show`, `trace`, `message` + `submit`
  in the tutor, `lang-<id>` in onboarding), `c0…c3` for choices (same order as `item.choices`),
  `t<n>` for build tiles (n = the tile's place in the tray: stable, a used tile just drops out), otherwise the label slugged (`got-it`, `continue`, `begin`, `close-lesson`).
- `kind`: `button`, `choice`, `field`, `tab`, `tile`, and **`draw`** (the trace pad; listed only while
  it takes a stroke). `act('trace', path)` draws one finger stroke along `path`: 2–64 `[x, y]` points
  in 0..1 of the pad. Without a path it draws a straight line across the middle.
- Only visible, enabled controls are listed. **Continue waits for the word's clip** after an answer,
  so it appears a second or two after `feedback`.
- `act()` refuses a control a finger would miss: covered, off screen (it scrolls it into view first),
  or behind a new card's ~220 ms entrance guard — `{ ok: false, error: 'not reachable …' }`; try again.
- Rects are CSS pixels of the 390x844 window, as `getBoundingClientRect` gives them (checked in the
  spec: the centre of each on-screen rect hits the control with that label). Right for a window at
  zoom 1; Lingua's own text-size setting is applied inside the page, so it is already included.

### What Doodle meets in a lesson

- **Hear-it cards** (`listen:choice`, `listen:type`): no prompt text; `show` reveals it.
- **Trace** (kana, kanji), one `act('trace', path)` per stroke:
  - **guided** (`card: 'trace'`, in lessons): the pad shows the stroke as a faded guide, and so does
    `item.guide` (points in 0..1 of the pad). Any stroke counts. This is where the stroke is taught.
  - **free** (`card: 'trace:free'`, in reviews from rung 3): meant to be written from memory. No
    `item.guide` — it is the answer. (The pad itself draws a faint outline of the whole character,
    which StudyBot does not pass on: Doodle gets less than a learner sees here, never more.) A stroke that doesn't match fails (`note` "Not quite — try that stroke again");
    after two misses the card flashes the stroke for a second, and `item.guide` appears for exactly
    that second. The card never offers a skip: `close-lesson` is the only other way out.
- **Speak**: his window refuses the microphone, so the card falls back to an ungraded `continue`.
  No `feedback` for it.
- **Typed cards** (and conjugate) give one free retry: a first wrong `submit` stays on `question`
  with a `note` ("Not quite — try once more" / "Not quite — one more try."); the second sends
  `feedback`.
- Sentence/reading builds never show the right answer after a miss; their `feedback` then has
  `answer: ""` and a `note` saying so.

### Events, Lingua's details

- `done`: in a lesson `done` = cards answered (re-asked cards count again), `right` = passed
  (a speak fallback and a finished trace count as passed), `total` = `done`. In a review `total` is
  the review's length. So `right` is not the count of `feedback.right` events.
- `screen` is sampled every 200 ms and after each `act()`, so a screen shown for less than that can
  be skipped. `state()` is always current.
- `teach` fires each time a teach card mounts, so going back with `previous-card` re-sends it.

### The tutor (text only)

- The voice tutor's ElevenLabs account is gone. In this build the tutor tab is a text chat:
  `act('message', text)` then `act('submit')`; each line is a `tutor` event.
- Server: `api/tutor-text.js` on a Vercel **preview** deployment. **Off** unless that deployment has
  `TUTOR_TEXT_ON=1`, `TUTOR_TEXT_TOKEN` (24+ random characters) and `ANTHROPIC_API_KEY` (Preview
  environment, set in the Vercel dashboard — never the CLI). Model `claude-opus-5-5` (`TUTOR_MODEL`
  overrides).
- **The lock is the token.** Every call must carry `x-tutor-token` = `TUTOR_TEXT_TOKEN`, or it is
  refused (401; 403 first if the Origin is wrong) and spends nothing. CORS and the Origin check (only `https://lingua.invalid`;
  `TUTOR_ALLOWED_ORIGINS` overrides) only stop other web pages — any script can fake an Origin, and
  this repo is public. The token is baked into `dist-studybot/`; if that folder ever leaves the
  machine, change `TUTOR_TEXT_TOKEN` on the deployment and rebuild Doodle's copy.
- **There is no global daily cap on the server.** `TUTOR_DAILY_CAP` (default 10) counts per
  serverless instance; parallel calls start more instances and every preview deployment has its own.
  Lingua has no shared store to count in. The real 10-a-day cap is Doodle's own; a server-side one
  needs a shared store (e.g. Vercel KV).
- Per call: at most 20 turns of history, 2000 characters a line, up to 4000 output tokens (thinking
  included; the reply is asked to be 1–3 sentences).
