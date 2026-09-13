> # ✅ SHIPPED — HISTORICAL RECORD. DO NOT AUTHOR FROM THIS.
>
> **Closed out 2026-09-13.** The feature described below is built and live. **The code is the source of truth, not this document** — where they disagree, the code is right and this is stale.
>
> **Evidence it shipped:** `speak` is in `LIVE_CARD_KINDS`; `src/components/games/SpeakCard.jsx` + `api/score-speech.js` ship it. Phases C.0–C.3 are all done; only C.4 (Alex's device feel-check) remained, and that is tracked in `FEEL-CHECKS.md`, not by holding this brief open.

> ⚠️ **This brief's own status line said "design doc / not started" while the feature was already live.** That is how a shipped brief gets built twice. The status line is not evidence; the code is.
>
> Kept because the reasoning and the rejected alternatives are worth having. Read it as history — never as an instruction.

---

# Build Brief — Speech Grading (Brief C, Phase 7)

**Status:** design doc / not started. For Alex + Claude to sharpen before any code.
**Goal in one line:** the learner says a word out loud, the app *detects* what they said and *grades* it, and a correct spoken answer is the only way an item climbs to the **SPOKEN** rung.

> This is a **design** doc, not an implementation plan yet. It exists to settle the forks below. Per the repo rule, exact endpoints / SDK shapes / pricing must be **verified against current vendor docs at implementation time** — don't build from the numbers here, build from the decisions.

---

## Where this sits

Phase 7 — Brief C — in `BUILD-CHECKLIST.md`. It was parked as "BLOCKED ON: Phase 6 (backend foundation)". **Phase 6 is now partly unblocked:** PR #29 shipped the first Vercel serverless function (`api/convai-session.js`) with the ElevenLabs key held server-side. So the backend *pattern* a scoring endpoint needs already exists.

## What already exists in the repo (ground truth — verified 2026-06-27)

- **`src/components/games/SpeakCard.jsx`** — exists but is a **visual stub**. Tapping the mic just flips a local `recorded` flag; there is no capture, no upload, no scoring. Carries `// TODO: real Whisper speech scoring`. Not routed into any session.
- **`SPOKEN` rung exists** — `RUNGS = ["NEW","RECOGNIZED","RECALLED","PRODUCED","SPOKEN","MASTERED"]` (rung 4) in `src/store/mastery.js`. Graded speaking is meant to be the *only* path to it.
- **`speak` is dormant** — deliberately **not** in `LIVE_CARD_KINDS` (`src/data/contract.js`), and its smoke coverage test is `test.skip` (`tests/smoke.spec.js:318`). `VALID_DOMINANT_MODE` already lists `"speak"`.
- **Serverless template** — `api/convai-session.js` (Vercel fn, ESM `export default handler(req,res)`, ElevenLabs key from env, never reaches the browser). A scoring endpoint follows the same shape.
- **The forcing function** (CLAUDE.md): `speak` ships only when it's in `LIVE_CARD_KINDS` **AND** exercised by the coverage fixture. Both, or it doesn't ship.

So the skeleton is real: a card component, a rung, a backend pattern, a dormant-kind slot. The missing middle is **capture → score → grade**.

---

## The core fork: what does "grade the pronunciation" actually mean?

Two philosophies. This is the decision everything else hangs on.

### A. Transcript match ("did they say the right word?")
STT the audio → compare the transcript to the target reading → pass if it matches.
- **Pro:** simple, one vendor, cheap, deterministic, fits the engine's structural-grading spine.
- **Con:** tells you *what* word, not whether it was said *well*. A heavy mispronunciation that still transcribes to the right word passes. On a **single isolated word**, STT is also shakier than on a sentence (the same trap that bit our isolated-kana **TTS** — context is what makes these models accurate).

### B. Phoneme-level pronunciation scoring ("did they say it *correctly*?")
A pronunciation-assessment model returns accuracy/fluency scores per sound.
- **Pro:** actually measures pronunciation quality — the real promise of a *speaking* rung.
- **Con:** different vendor + more infra; and for Japanese specifically the tooling is weaker (see below).

**Recommendation:** **start with A (transcript match), design the grade boundary so B can slot in later.** Rationale: A is reachable now on infra we already have, and for *beginner kana/vocab* "did you produce the right sounds at all" is already a meaningful bar. B is the right long-term answer but shouldn't block shipping a speaking card. Treat the grader as a pluggable scoring function behind one interface so we can upgrade A→B without touching the card or the runner.

---

## Provider options (verified at the capability level — re-verify specifics before building)

| Option | What it gives | Japanese | Infra fit | Notes |
|---|---|---|---|---|
| **ElevenLabs Scribe** (STT) | Transcript + word/char timestamps | "Excellent", WER ≤ 5%; 90+ langs; realtime variant ~150ms | **Best** — we already hold the key + serverless pattern; one vendor for TTS+STT+agent | Path **A**. Official TS/Python SDKs. |
| **OpenAI Whisper** (STT) | Transcript | Supported; weaker on very short/isolated utterances | New vendor + key + endpoint | Path **A**. The name in the old checklist ("Brief C — Whisper"), but no longer the obvious pick now that we're an ElevenLabs shop. |
| **Azure Pronunciation Assessment** | Per-phoneme **accuracy scores**, fluency, completeness | Scores **work** for Japanese; phoneme **names** return empty (scores still present) | New vendor + key + endpoint | Path **B** — the only one here that truly scores *pronunciation*. The upgrade target. |

**Leaning:** **ElevenLabs Scribe for v1 (path A)** — lowest friction, one vendor, strong Japanese. Hold **Azure** as the documented path-B upgrade when we want real pronunciation scoring.

---

## Second fork: live Haruki agent vs. discrete SpeakCard

You said *"Haruki detects and grades."* Two readings:

- **Discrete SpeakCard (recommended for the graded path).** A per-item card: show かさ → record → score → grade → FSRS. Deterministic, isolated, fits the engine; the grade is structural, not a model's vibe. This is what climbs the SPOKEN rung.
- **Live Haruki agent listens.** The conversational agent (already live, Phase 6.5) hears you and reacts socially. Lovely for *practice/exploration*, but it's non-deterministic and lives in the conversation bank — per the two-bank architecture, the **graded** path must not depend on the free-chat agent. 

**Recommendation:** the **graded** SPOKEN rung uses the **discrete SpeakCard + scoring endpoint**. Haruki can *also* invite you to say things in conversation (encouraging, ungraded) — but that's the conversation bank, and it never writes to the SRS without an explicit promotion. Keep grading structural.

---

## Proposed architecture (path A, v1)

```
SpeakCard (rung 4 review)
  → mic capture (MediaRecorder, ~1–3s clip)
  → POST audio blob to /api/score-speech  (Vercel fn, ELEVENLABS_API_KEY server-side)
       → ElevenLabs Scribe STT (language_code: "ja")
       → normalize transcript + target reading (reuse src/store/answer.js normalizeReading)
       → score: match / near-match / miss
  ← { grade: "good" | "hard" | "again", transcript }
  → onGraded(grade)  → existing gradeItem(id, grade)  → FSRS + rung
```

- ⚠️ **TYPED AND SPOKEN ARE NOT THE SAME RULE. Reversed 2026-09-13 — this bullet used to say they were.**
  It read: *"the same `normalizeReading` / matching logic that grades typed answers grades the transcript. One notion of 'correct reading,' typed or spoken."* That is now wrong in both directions, and unifying them again would re-introduce two shipped bugs:
  - **Typing is STRICTER than the shared fold.** Alex, 2026-09-13: *"If i type e and its é thats wrong dude."* `foldWouldEraseAnswer()` in `answer.js` requires the exact character when the whole front is a single character the diacritic fold would erase. Typing `e` for `é` fails. Ordinary words keep the leniency (`cafe` still passes for `café`).
  - **Speech is MORE LENIENT than the shared fold.** `gradeSpoken()` folds accents and grades the sound.
  - **The reason for the asymmetry, and it is the thing to preserve:** when a learner TYPES the bare letter, they chose the wrong key — that is a real mistake. When they SAY it, the **spelling is the transcriber's choice, not theirs**. Marking someone down for how a speech model spelled their correct pronunciation is a confidently wrong grade, and a confidently wrong grade is worse than no grade. This is the same principle as "ND-friendly grading" below, applied to the transcript rather than to the accent.
  - **Still share `normalizeReading` itself** — one fold, two policies on top of it. What must not be shared is the *decision*.
  - ⚠️ **`gradeSpoken` must stay gated on the target actually being Japanese script.** `foldKana` passes Latin text through unchanged, so before 2026-09-13 the kana branch claimed every fr/es/pt/de/no card and graded it by **edit distance against the spelling** — a perfectly pronounced `café` transcribed as `cafe` scored `hard` at one edit and never reached the romaji branch that would have passed it. That was every Latin-language speak card in the corpus.
  - ⚠️ **`language_code: "ja"` in the flow above is Japanese-only.** Scribe must be called with the item's own language, or every Latin card is transcribed as if it were Japanese.
- **Grade mapping:** clean match → `good`; close (one-sound slip / accepted variant) → `hard`; no match → `again`. Same `again/hard/good/easy` vocabulary the runner already speaks.
- **Endpoint mirrors `convai-session.js`** — ESM handler, key from env, returns only the verdict (never the key, never raw vendor payload).

## ND-friendly grading (non-negotiable design constraint)

The anti-burnout principle applies hard here — a mic that punishes an accent is exactly the kind of harsh feedback we avoid. (Consistent with the asymmetry above: the fold stays ON for speech precisely so a regional accent or a transcriber's spelling never costs the learner a grade.)

⚠️ **Known limit, measured in this repo: STT on an ISOLATED SINGLE GLYPH is unreliable — the Brief-C C.0 de-risk scored 0/3.** That matters now because Alex's accent standard (2026-09-12) adds a speak card for single characters. His design mitigates it — the companion says the letter and the letter is shown on screen immediately before the learner repeats it, so it is shadowing rather than recall — but the transcriber is still the weak link. **Do not treat the accent speak card as proven until it is playtested on a real device.** `shouldSpeak()` is vocab-only today for exactly this reason; the glyph item type must not silently inherit a card kind that was measured failing.

- **Lenient by default.** Pass on "recognizably the right word," not "native-perfect." Beginners get the benefit of the doubt.
- **Never a hard fail wall.** A miss is `again` (re-teach/re-try), framed warmly — not a red X.
- **Retry without penalty.** Let them tap to re-record before committing.
- **Graceful degradation.** No mic permission / offline / endpoint down → fall back to a non-graded "say it" prompt (like today's stub) so the session never blocks. Speaking is a *bonus depth*, not a gate on daily reviews.
- **Tuning is constants.** The pass threshold lives next to `TIMING`/`LEARN_OPTS` as a lever, not buried in logic.

## Privacy / consent (must address before ship)

Sending voice audio to a third party is new for this app. Need: a clear first-use mic-permission moment, a one-line "audio is sent to [vendor] to score pronunciation, not stored by us" note, and confirmation we don't persist clips. Worth a sentence in Settings.

---

## Forcing-function checklist (how `speak` actually goes live)

1. Build the scoring endpoint + capture, wire `SpeakCard` into the **review** runner at rung 4 (kana and/or vocab — decide scope).
2. Add `"speak"` to `LIVE_CARD_KINDS`.
3. Un-skip the `speak` coverage stub in `tests/smoke.spec.js` and add a fixture that drives it (mock the endpoint in CI — no real mic/network in Playwright).
4. Confirm `SPOKEN` rung climbs only via a graded spoken pass.
5. Unit test the grade-mapping + transcript-normalization purely (no network).

## New surface area → explicit check-in items (CLAUDE.md guardrails)

- **New dependency** (ElevenLabs STT SDK or a raw `fetch` to the API) — pause/confirm.
- **New backend endpoint** + a (possibly) **new vendor key** in Vercel env.
- **Touches the engine** (runner routing + a new graded path) — gets its own scoped PR, separate from any content PR.
- Schema: does a `speak` card need any new item field? Likely **no** (reading + front already exist) — confirm so this stays out of `contract.js`.

---

## Open decisions (what we need to lock before building)

1. **Path A vs B for v1** — recommend **A (transcript match, ElevenLabs Scribe)** with a pluggable grader so B (Azure phoneme scores) can drop in later. ✅ your call.
2. **Provider** — ElevenLabs Scribe (recommended) vs OpenAI Whisper vs go straight to Azure.
3. **Scope of speakable items** — kana only? vocab only? both? (Single-kana STT is the least reliable; vocab/words score better — may argue for *vocab-first*.)
4. **Capture UX** — push-to-hold vs tap-to-start/stop; auto-stop on silence?
5. **Where in the ladder** — SPOKEN is rung 4. Confirm: an item must already be PRODUCED (rung 3, Build card) before it can be spoken-graded.
6. **Realtime vs upload** — batch upload a short clip (simpler) vs realtime stream (fancier, more infra). Recommend **upload** for v1.

## Suggested build phases (once decisions land)

- **C.0** — `/api/score-speech` endpoint + a tiny test harness (curl a wav, get a verdict). Prove Japanese transcription quality on isolated words **by ear/data before** touching the UI (de-risk the isolated-word concern early — same lesson as the TTS saga).
- **C.1** — real capture in `SpeakCard` + wire into the review runner behind a flag.
- **C.2** — grade mapping → FSRS, ND leniency tuning, fallback paths.
- **C.3** — `speak` into `LIVE_CARD_KINDS`, un-skip coverage, fixtures, CI green.
- **C.4** — Alex device feel-check (real mic, real accent, does it feel fair?), then merge.

**DoD:** a learner can speak a target word, get a fair grade, and climb the SPOKEN rung — with graceful fallback when mic/network/permission isn't available, and zero harshness. CI green incl. a mocked `speak` coverage path.

---

## Sources (capability verification, 2026-06-27)

- [ElevenLabs — Speech to Text capabilities](https://elevenlabs.io/docs/overview/capabilities/speech-to-text)
- [ElevenLabs — Japanese Speech to Text](https://elevenlabs.io/speech-to-text/japanese)
- [ElevenLabs — Scribe v2 Realtime](https://elevenlabs.io/realtime-speech-to-text)
- [Azure — Use pronunciation assessment](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-pronunciation-assessment)
- [Azure — Japanese phoneme field empty (scores still returned)](https://learn.microsoft.com/en-us/answers/questions/1659203/pronunciation-assessment-results-in-japanese-have)
- [Azure — Language learning with pronunciation assessment](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-learning-with-pronunciation-assessment)
