# TEST-STORIES.md — what to try, and who has to try it

**Alex, 2026-09-17:** *"i cant test this all my self i dont even know where to start half the time i bet theres still bugs in the app i havent discovered."*

He is right that there are. Every bug found on 2026-09-17 — onboarding appending a language, reset stranding the learner, a silent audio gate — lived in a path **no test exercised**. This file exists so that is a list instead of a feeling.

**The rule this file enforces: Alex only runs what a machine cannot.** If a story can be automated it belongs in Part B and it is CC's job, not his. A story that reaches Part A has to justify why — a real device, a real ear, a real mic, a real account, or a judgement call.

- **Part A** — Alex's list. Short on purpose. Ranked.
- **Part B** — CC's list: real gaps in the automated suite, ranked by what they would have caught.
- **Part C** — admin / operator stories: the app from the side, not the front.
- Pure *feel* questions ("does this pacing feel harsh?") live in `FEEL-CHECKS.md`, not here. This file is "does it work".

**How to use Part A:** one story per sitting is fine. Write the date and what happened in the last column. **A story with no note has not been run — an unrun story is not a passing one.**

---

## Part A — only Alex can run these

Ranked. **A1–A5 first** — they are the paths with the least automated cover and the most to lose.

| # | Story | Steps | It works if | It's broken if | Ran |
|---|---|---|---|---|---|
| **A1** | **A brand-new learner gets in.** Nothing in the automated suite runs onboarding — 16 smoke fixtures boot straight past it, which is exactly why a bug lived there for weeks. | New private window → sign up with a fresh email → pick a language → finish the flow → do lesson 1. | You land in the app studying the language you picked, with that companion, and lesson 1 runs to the end. | Any other language appears · a second language appears · Continue looks dead · you land on a blank screen. | |
| **A2** | **Your account follows you to a second device.** No test has ever run against a real Supabase. | Sign in on your phone, do a lesson. Sign in on a laptop (or another browser). | The laptop shows the progress you just made. | Progress missing · progress from the *other* direction wipes what you did · you are asked to onboard again. | |
| **A3** | **Reset, then keep going.** Changed 2026-09-17: reset now returns you to the language pick. | Settings → Reset all progress → Reset everything → pick a language → do a lesson → close the app fully → reopen. | You pick once, study, and the reset sticks after reopening. | Old progress returns · you cannot start any language · the app opens on a language you did not pick. | |
| **A4** | **Speak a card with your real voice.** The mic is unreachable from any test. | Any lesson, a speak card — normal room, normal volume. | Saying it recognisably right passes. | It marks you wrong when you said it right — **especially on a single letter** (é, ø, ä), which scored **0/3** when this repo measured it. | |
| **A5** | **Sound is right for the language you're studying.** Audio is off entirely under test — a green run says nothing about it. **The whole corpus is now voiced: 17,497 / 17,497**, German and Norwegian B1 included (measured against `audioManifest.js`, 2026-09-17). So silence anywhere is a defect, not missing content. | One lesson each in Japanese and in German. | Every clip says the thing on the card, in that language's voice. | Silence · a clip that says something else · a clip that is the *wrong* word. Byte size cannot tell a one-phoneme clip from a silent one — **25 clips once came back silent at exactly 3805 bytes with a 200 OK**, so ears are the only check. | |
| **A6** | **The app as an installed app, offline.** Service worker + PWA shell, untested. | Install to your home screen → open it → airplane mode → do a lesson → back online. | It opens and a lesson runs with no network; progress is there when you reconnect. | White screen offline · progress lost on reconnect · a stale version that never updates. | |
| **A7** | **Every Settings toggle does what it says.** Only reduce-motion is covered by a test. | Flip each: sound, auto-play, romaji, furigana, reduce motion, no speed pressure, theme, text size. Reload after each. | The change is visible immediately and survives the reload. | A toggle flips back · nothing visibly changes · the setting applies to the wrong screen. | |
| **A8** | **The daily reminder actually arrives.** Permission-gated, so untestable here. | Settings → Reminders → set a time a few minutes out → background the app. | A notification arrives at that time. | Nothing arrives · wrong time · permission is never requested. | |
| **A9** | **Forgot my password.** `Auth.jsx` / `SetPassword.jsx` never render under test. | Sign out → forgot password → use the emailed link → set a new one → sign in. | You get back in and your progress is intact. | The link dead-ends · you land in onboarding · progress is gone. | |
| **A10** | **Talk to your companion.** Lazy route, needs the server running. | Jonas/Haruki tab → a short conversation. | It answers in character, in your language, and never mentions being an AI or the build. | It breaks character · it references app internals · it uses words far beyond what you have been taught. | |

---

## Part B — CC automates these (NOT Alex's job)

Real gaps, measured against `tests/smoke.spec.js` (44 tests) and `tests/unit/` (432). Ranked by what each would have caught.

| # | Gap | Why it is a gap | Status |
|---|---|---|---|
| **B1** | **Onboarding is never run.** Fixtures seed a profile and boot past it; `AUTH_ENABLED` is false under test, so `App.jsx` never renders `<Onboarding/>`. | This is where the four-languages bug lived, undetected, behind 44 green tests. | [ ] |
| **B2** | **Nothing covers `stopLanguage` in the browser.** Unit-tested only. | It is the only non-destructive exit from a language you did not choose. | [ ] |
| **B3** | **Cloud sync has no end-to-end test at all.** No Supabase in CI. | Last-write-wins, the empty-profile guard and the reset receipt are the guards on *losing real progress*. | [ ] |
| **B4** | **Settings toggles: only reduce-motion is asserted.** Eight others are not. | A silently dead toggle is invisible — nothing errors. | [ ] |
| **B5** | **Destructive paths assert too little.** The reset test passed while the app was stranded — "no page errors + progress is zero" is also what a broken app looks like. | ✅ Fixed 2026-09-17: it now asserts a route back, verified by re-breaking the guard. | [x] |
| **B6** | **The audio Continue gate is structurally uncoverable** — `useItemAudio` short-circuits on `IS_WEBDRIVER`. | Mitigated by `reinforcePlan` unit tests, but the wiring itself is only ever exercised by a human. | partial |
| **B7** | **Achievements and Stats have thin coverage.** One test each. | Both read progress in ways a content change can break silently. | [ ] |
| **B8** | **No test opens the app with a corrupt or half-written localStorage blob.** | A torn write on a phone is ordinary; the store would be reading garbage. | [ ] |

---

## Part C — admin / operator stories

The app from the side. CC's unless marked **(Alex)**.

| # | Story | It works if | It's broken if |
|---|---|---|---|
| **C1** | **Dev Mode preview loads the language you selected.** Pick a language at the top of the panel → "Preview the app as a … learner". | The whole app loads as that learner — their units, their companion, their flag — and *stays*. | It reverts to Japanese · the companion name flips back · real progress changes. **(Alex — reported broken once and fixed; not confirmed fixed on his device.)** |
| **C2** | **Preview never touches the real deck.** Enter preview, study, exit. | The real profile is unchanged afterwards, and the preview deck is deleted on exit. | Any real item changes · preview state reaches the cloud. |
| **C3** | **Replay onboarding is honest about what it does.** | It replaces your started list and says so; an A1 you earned still lets you re-add what you dropped. | It silently adds a language · a language with progress becomes unreachable. |
| **C4** | **A shipped language is fully voiced before it reaches a learner.** `npm run generate:audio` then `generate:manifest`. | Clip count equals item count for that language; no clip is ≤ 3805 bytes (the silent payload the API returns with a 200). | Any silent clip — it has happened 25 times in one corpus. **(Alex — paid run.)** |
| **C5** | **The gate refuses to run on a broken environment.** `tests/preflight.js`. | A slow or unusable dev server fails loudly, naming the cause, instead of producing 17 fake test failures. | The suite runs anyway and blames the code. |
| **C6** | **Prod and `main` do not drift.** Vercel CLI deploys run ahead of git while GitHub is suspended. | `main` contains everything prod is serving. | A git-triggered deploy rolls prod backwards. |
| **C7** | **A content change cannot ship an unplayable lesson.** `validate:content` → `lint:curriculum` → `test:unit`. | Every item routes to at least one card kind, and every card kind has content that reaches it. | A card kind with one blank always-correct button — which shipped once, past five green gates. |

---

## What this file is not

- **Not a release checklist.** Nothing here blocks a merge; the gate does that.
- **Not a place for opinions about feel** — that is `FEEL-CHECKS.md`.
- **An empty "Ran" column is the honest state.** Do not pre-tick anything, and never record "probably fine".
