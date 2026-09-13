# Feel-checks — things only Alex can judge

**What this is:** the one place a "Alex needs to try this on a real device" item lives.

**Why it exists (Alex, 2026-09-13):** *"fuck a feel check i can do that later and we can just create a doc specifically to remind me later that we need to do a feel check on x so we can close the original doc and not have it open cuz it needs a feel check."*

A build brief must **never** stay open because it is waiting on a feel-check. The build is done or it isn't. If the code shipped and the only thing left is Alex's judgement, **close the brief** (`docs/shipped/`) and add a row here.

**Who writes here:** whoever closes the brief — **any lane, as they work.** Alex, 2026-09-13: *"all blocks should be actively reading the docs and taking note and marking things complete as they go."* You do not need permission and you do not wait for the lead. Finished something that only needs Alex's eyes? Add the row, close the brief, keep moving. **Who clears a row:** Alex, or CC on his word. Keep the row when he says it's fine — record the verdict, don't delete the history.

---

## Open

| # | What to try | Where | Why it can't be automated | From |
|---|---|---|---|---|
| 1 | **Speak a word, does the grade feel fair?** Real mic, your own accent. It should pass "recognizably right", not "native-perfect". | any lesson, rung 4 review | Mic + a human ear. No test can tell you whether a grade felt harsh. | `docs/shipped/BUILD-BRIEF-speech-grading.md` phase C.4 |
| 2 | ⚠️ **Speak a single letter** (é, ø, ä) once the accent lessons land. **I expect this one to be the weak link** — speech-to-text on one isolated sound scored **0/3** when this repo tested it. Your design helps (you hear it and see it right before repeating), but tell me if it marks you wrong when you said it right. | accent lessons, once built | Same as #1, and the failure is probabilistic — it won't fail the same way twice. | accent standard, 2026-09-12 |
| 3 | **The Continue button pause after you answer.** It greys out ~1s while the word is pronounced, then lights up. Does that feel like the app teaching you, or like it's broken/slow? | any Choice / Cloze / Type card | Pure feel. It tests green either way — under test the audio is off entirely. | audio gate, 2026-09-12 |
| 4 | **Does a silent card feel different from a voiced one?** German and Norwegian have no audio at all, so Continue never waits there. Is that inconsistency noticeable, or fine? | a German or Norwegian lesson vs a Japanese one | Comparative feel across two languages. | audio gate, 2026-09-12 |
| 5 | **Card "breath" — the anti panic-tap delay.** Draft PR #41, parked by you 2026-06-28 ("dwb it rn"). Whether a new card should refuse taps for a moment so you don't fire an answer by reflex. | any fast lesson | The whole question is whether it feels rushed. | `BUILD-CHECKLIST.md` → Continuous |
| 6 | **The accent lessons end to end**, once built: hear them all → then mixed typing and speaking. Does the run-through feel right, and is the keyboard hint actually enough to find the key? | unit 1 lessons 1–3, once built | It's your design; you're the one who knows whether it landed. | accent standard, 2026-09-12 |

## Closed

| What | Verdict | When |
|---|---|---|
| **Reset / sync on a real signed-in device** — the one item in the 100-commit release no automated environment could reach. | ✅ **Alex: "Reset works."** Not separately confirmed: the double-reset race (reset again without waiting for the toast, force-close within a second). Recorded as unknown rather than assumed. | 2026-09-05 |
