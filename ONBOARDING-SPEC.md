# Lingua — Onboarding + User Profile Spec

A planning spec, not a build brief.

**Status (2026-09-17): the onboarding flow and the one-language rule have SHIPPED** — see
`src/screens/Onboarding.jsx` and the ✅ notes under "The locked one-language rule" below. What
remains unbuilt here is the **content-contract extension for profile templating** (`{displayName}`
tokens, `requires: [...]`), which is the only part still written as an instruction. The original
"do not build until Phase 4 closes and Unit 2 is moving" hold is spent and has been removed, so it
cannot read as a live blocker.

---

## Guiding principles

1. **One language at a time, locked, gated on A1.** The discipline *is* the product —
   Lingua is for people who want to actually learn, not collect words across three languages
   at once. Parallel learning is the casual behavior we deliberately don't build for.
2. **Personalization = turn the user's own facts into lesson content.** Spelling *your* name,
   saying where *you* live. Personally-relevant input beats generic for retention — this is
   pedagogy, not data collection.
3. **Ask little upfront, collect the rest lazily.** 3–4 questions before the first lesson;
   everything else is asked in-context, right before the lesson that needs it — which also
   teaches the concept better because the question now has a reason.

---

## Upfront onboarding (no backend; local profile)

Keep it to ~4 taps. In order:

1. **Pick one language** — `ja` / `es` / `fr`. The other two show locked, labeled
   "Unlock by reaching A1." This sets `activeLanguage`. (More languages added later.)
2. **Display name** — used for personalization and the name-spelling lesson.
3. **Why are you learning?** — travel / heritage / work / for fun. One tap. Flavors companion
   tone and example-sentence selection.
4. **Daily reminder time** (optional, skippable) — fits the streak-as-a-floor philosophy.
   Collect the preference now; actual notification *delivery* is limited on iOS PWA until the
   native wrap (Phase 9), so store it and wire delivery later.

## Lazy-collected (asked in-context, before the lesson that needs it)

- **Location** (city / region / country) — asked when the "where do you live" lesson arrives,
  then templated into that lesson and reused. Falls in whatever unit teaches location grammar.
- **Self-reference for grammar** — framed as *"How should I refer to you in {language}?"*, not
  identity collection. Options include **prefer not to say → neutral phrasing**. Needed for
  gendered agreement (French *content/contente*, Spanish adjectives); Japanese rarely needs it.
  Asked only when the first lesson requiring self-reference appears.

## User profile data shape (local now, sync-ready later)

```js
userProfile = {
  activeLanguage: "ja",        // set once; others locked until A1
  displayName: "Alex",
  reason: "travel" | "heritage" | "work" | "fun" | null,
  reminderTime: "20:00" | null,
  // lazily collected:
  location: { city, region, country } | null,
  selfReference: "masc" | "fem" | "neutral" | null,  // grammar, not identity
  // future (backend, Phase 6): id, email, ...
}
```
Lives in the Zustand persist store (one place), swappable to backend sync later.

## Content-contract extension (small, later)

- **Profile templating:** lesson prompts/examples can reference profile tokens, e.g.
  `{displayName}`, `{location.city}`, resolved at render from `userProfile`. The validator
  must check every token references a known profile field AND that a non-null fallback exists,
  so a lesson can't break if the user skipped a lazy question.
- **Requirement declaration:** a lesson may declare `requires: ["location"]`; if that field is
  null when the lesson is reached, trigger the lazy-ask before starting it.

## The locked one-language rule (structural)

- `activeLanguage` is set once at onboarding. Another language unlocks only when the one you are
  climbing reaches A1. No parallel tracks in v1, **enforced in code, not just UI**.
- ⚠️ **PARTLY BUILT — 2026-09-17, and the gap is a DECISION, not missing work.** What the code
  enforces today is *"earn one A1, then you may carry more than one language"* — `canAddLanguage()`
  in `src/store/useStore.js` asks whether **any** started language has reached A1. So a brand-new
  learner genuinely cannot start two at once, but a learner who has an A1 may then add several.
  - ✅ **Onboarding chooses, it does not add.** `startLanguage(id, { only: true })` replaces the
    started list (`src/screens/Onboarding.jsx`). Appending is the Ladder's job, not the pick's.
    Until this, every re-run of the flow silently appended a language, bypassing the gate — which
    is how four languages reached Alex's Ladder.
  - ✅ **Reset returns you to the pick.** `resetAll()` clears the started list and `onboarded`.
  - ❌ **The strict reading of the rule above — "one at a time, always" — is NOT enforced.** The
    stricter gate (your *newest* language must be at A1) was written and reverted the same day,
    unshipped, once its cost was measured: A1 means rung ≥ 1 on **every** item at or below A1
    (`isLevelComplete`, `src/store/levels.js`) — **1,252 items in Japanese**, 487–582 in the other
    five. It would also have been bypassable, since `stopLanguage` has no gate and keeps progress.
    **Open for Alex's decision**, with the number, in `BUILD-CHECKLIST.md` (2026-09-17). Do not
    implement it off the back of this spec alone.
  - Coverage: `tests/unit/language-gate.test.mjs`, which pins the shipped rule explicitly so the
    stricter one cannot return as a silent refactor.
- ⚠️ The mechanism is **not** the `unlock: {lang, level}` / `unlocked` cascade this spec assumed —
  that was retired with the flat catalog (see "No front language" in `CLAUDE.md`). Gating is one
  function, `canAddLanguage()`, and the catalog carries no per-language unlock field.
- *Possible* future setting: an explicit opt-in "parallel mode." Note as future; do not build.
  Ship the opinionated version first — the opinion is the product.

## Account system — DEFERRED (Phase 6 / pre-App-Store)

Display name + email + password + cross-device sync. Requires the backend, plus real auth
(password hashing, reset flows — use a service like Supabase/Clerk, don't roll your own) and a
privacy policy for App Store submission. The profile shape above gains `id`/`email`. Captured
here so onboarding is designed account-ready; not in the onboarding build sprint.

---

## Sequencing

Phase 4 closes → Unit 2 + curriculum moving → *then* onboarding as a clean feature sprint:
this spec → onboarding build brief + the content-contract templating extension.

## Open questions for Alex

- Reminder delivery is unreliable on iOS PWA until native — OK to collect the preference now
  and deliver later (assumed yes)?
- Any upfront question to add or cut? (Current upfront set: language, name, why, reminder.)
- A "do you already know some?" placement check per language to skip absolute beginners past
  あいうえお — worth a v1, or a later refinement? (Leaning later.)
