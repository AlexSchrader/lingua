# Build Brief — Companions in Lessons + the Free/Paid Companion Dial

**Lane:** Feature CC (engine + companion infra + serverless) — schema/contract/persist/billing touch, so **draft PRs, Alex merges**; multi-PR.
**Status:** 🟡 DESIGN — figuring out how it works (Alex, 2026-08-22). Two forking decisions locked (below); rest are open. **Not greenlit to build — PARKED until the in-flight fr / es / ja band build-out finishes (Alex, 2026-08-22: "wait till I finish fr es and ja, we'll test it on those, they're almost done").** Companion v1 will be tested on those three once their current bands land. Do not start build step 1 before then.
**Origin:** Alex's flagship note (2026-08-22) — companions woven *into* lessons, used to practice speaking/tone/nuance rather than left as an optional tab; plus the app's first monetization split. Logged as Batch 7 / [R36] in `BUILD-CHECKLIST.md`. Supersedes the memory model where "free = lessons + in-lesson AI" — the real model is below.

---

## 1. The model in one line

**Free users get the entire app — every lesson, card kind, language, milestone — plus the companion *checkpoints* for free. The paywall is a single dial: on-demand / free-form companion time.** Paid tiers raise or remove that cap. No feature is behind the wall; only *volume of open-ended AI conversation* is.

This keeps the anti-burnout spine intact — you gate **access volume**, never manufacture FOMO or activity-pressure to upsell (see `CLAUDE.md` anti-gamification rule, [[project_motivation_model]]).

### Locked decisions (Alex, 2026-08-22)
- **Mechanic = periodic checkpoint.** The companion is NOT every lesson. It's a larger, structural conversation every few lessons / at unit-end.
- **Free limit = in-lesson free, on-demand metered.** The structural checkpoint is always free (it's part of learning). Free-form tutor-tab time is what's rationed daily; paid raises the cap.

---

## 2. The two companion surfaces (the design turns on this distinction)

The map found the companion already exists as **one** surface (the tutor tab) but the feature needs **two**, with opposite economics:

| | **A. Checkpoint (structural)** | **B. Tutor tab (on-demand)** |
|---|---|---|
| What | Scripted, goal-driven conversation using the vocab the learner just accumulated | Free-form chat with the companion, learner-initiated |
| Where | Fires at unit-end (± mid-unit beat) — woven into the path | The existing `Haruki.jsx` route, opened whenever |
| Access | **Free for everyone** — it's part of the lesson | **Metered** — free daily quota, paid scales it |
| "Force it appropriately" | This is the forced surface — but escapable + penalty-free | Not forced; pull, not push |
| Scoping | **Bound to `inventoryFor`** (curriculum bank) | Open (persona-guided) |

This is what resolves Alex's "force it but appropriately" **and** "free everything except limited companions": the *forced* part is free because it's structural; the *open-ended* part is the paid dial.

---

## 3. The checkpoint — how it works (Surface A)

**Trigger.** At a unit boundary (reuse `unitUnlockedBy`, which already reads `UNITS` shape — `Lesson.jsx:38`). Optionally a lighter mid-unit beat. This is the natural home for the **checkpoint design already sketched** (2026-06-30, `BUILD-CHECKLIST.md`).

**Placement (cheap — the map's key finding).** An end-of-lesson/unit beat slots into the lesson-completion branch (`Lesson.jsx:129-180`, the `finished || done` block, beside the Mascot celebration). **It needs no new card kind, no `LIVE_CARD_KINDS` entry, no routing change, no coverage-fixture edit** — *unless* it presents a gradeable card. A standalone checkpoint screen/route is the lighter path. (Contrast: a new interleaved card kind = 4 coordinated edits — `cardKinds.js`, routing, component, smoke fixture.)

**The conversation.**
- Companion opens with a concrete goal: *"Let's use this unit's words — ask me what time it is,"* *"order a coffee from me."* 6–8 turns.
- **Vocab-scoped via `inventoryFor` → ElevenLabs dynamic variables.** `inventoryFor({lang, maxLevel, maxRung})` (`useStore.js:631-640`) returns the learner's touched items filtered to level/rung — it exists but has **zero consumers today**. Wire it into `startSession` (which accepts overrides / dynamic variables — unused today, only `signedUrl` is passed) so the agent is told the target vocab/goal *per checkpoint* without minting new agents. **This is the core net-new "make it teach, not just chat" work.**
- Reuse the existing plumbing: `getCompanion(lang)` + `/api/convai-session?lang=`, the `ConversationProvider`/`useConversation` pattern in `Haruki.jsx`, and `convo.sendUserMessage`/`onMessage` turn loop. Extract that into a shared hook a checkpoint screen can mount.

**Grading — ND-lenient, formative, non-gating (recommended).**
- The checkpoint is **participation, not perfection** — it does *not* block progression. Completing the unit doesn't require "passing" a conversation. (Open decision 5.4.)
- If a spoken turn is scored, reuse `SpeakCard`'s mic → `/api/score-speech` (ElevenLabs Scribe) → `gradeSpoken` flow (`SpeakCard.jsx` — already a full, graceful-degrading implementation, *not* a stub).
- **Escapable + text fallback:** always a "skip for now" and a "type instead" — mic/nerves/quiet-room must never trap the learner. This is the "force appropriately" guardrail; a mandatory speak-to-AI wall is exactly the ND friction the app exists to avoid (`CLAUDE.md`).

**Boundary rule.** The checkpoint receives only the curriculum bank (`inventoryFor`), never the open conversation bank — same structural rule [[project_haruki_next]] / R8 carries.

---

## 4. The metering + tier architecture (Surface B — the paywall)

**This must be server-authoritative. A client-side cap is fake.** The map confirmed both money-spending endpoints — `api/convai-session.js:10-42` (mints the ElevenLabs signed WebSocket URL) and `api/score-speech.js:15-63` (STT) — currently do **no auth and no usage check**; anyone can call them directly or edit localStorage. So:

**At the endpoint choke points (`convai-session` mint + `score-speech`):**
1. **Verify the caller's Supabase JWT** (pass the access token from the client; validate in the handler).
2. **Look up tier** from an authoritative `profiles.tier` column (written only by a billing webhook, never the client).
3. **Atomically read+increment a server-side daily usage counter** (a Supabase `usage` table keyed `user_id`+date, or a Postgres RPC) and **429 at the cap**.

**Checkpoint vs on-demand accounting.**
- On-demand tutor-tab sessions: metered tightly for free (the dial).
- Checkpoints: free for all — but they still cost real money (live ConvAI). Recommend a **separate, generous counter or exemption** so structural learning is never blocked, with a high abuse ceiling. Keeping checkpoints *periodic* (Alex's choice, not every lesson) is what bounds this cost: `checkpoints × users × turns` is the free-tier cost floor.

**Client side (UX only — never source of truth):**
- A `companionUsage: { date, count }` store slice mirroring the existing daily-reset pattern (`todayISO()` `useStore.js:22-33`; `daily` slice reset `:363-366`) and the `REVIEW_CAP` + `reviewsLocked()` shape (`:188`, `:419-422`) — the exact template. Drives "3 of 5 left today," disables the mic at cap, shows an optimistic tier badge. Add to `partialize`/`SYNC_KEYS` if it should follow the user, knowing it's user-editable and advisory only.

**Billing layer (its own sub-project — defer per Alex "go deeper when closer").**
- Stripe (or similar) → webhook → writes `profiles.tier` / `subscription_status` / `current_period_end`. No entitlement, plan, or subscription state exists anywhere today. Tiers themselves (how many, price, exact caps) are **not designed yet** — the dial for now is just *free-cap* vs *paid-higher-cap*.

---

## 5. Blockers & open decisions

### Blockers (net-new work before this is real)
1. **Spanish companion has no `agentId`** (`server/companions.js` — only ja/fr; `getCompanion` falls back to ja). Nacho 404s. **Alex must create the es ConvAI agent** (same as Mathieu) before es checkpoints work.
2. **`inventoryFor` is dead code** — wiring it → `startSession` dynamic variables is the core work that makes the checkpoint *teach*.
3. **No auth on the two endpoints** — JWT + tier + usage metering is the security spine; nothing paid is real until it exists.
4. **No billing/entitlement layer** — Stripe + webhook + `profiles.tier`. Big, separate.
5. **Latency** — signed-URL round-trip + WebSocket connect before the first token. A deliberate *checkpoint screen* absorbs this far better than an interleaved card would — validates the mechanic choice. Preload/warm the session while the completion screen animates.
6. **Session lifecycle** — the ConvAI session ends on component unmount (`Haruki.jsx:70`); a checkpoint must own its own mount and not drop mid-conversation on a re-render.

### Open decisions (recommendation first)
1. **Checkpoint cadence** — *Rec: unit-end only for v1* (simplest, matches `unitUnlockedBy`); add a mid-unit beat later if it feels too sparse.
2. **Voice required, or text-OK?** — *Rec: text-OK always*, voice encouraged. ND-first; voice is also the expensive call.
3. **Are checkpoints capped at all?** — *Rec: exempt from the free dial but behind a generous anti-abuse ceiling.* Confirm cost tolerance.
4. **Does the checkpoint gate progression?** — *Rec: no — formative only.* Never block a unit on a conversation.
5. **Tiers** — deferred. Decide when closer to launch (Alex).
6. **Auth path** — the map found username+password is the *active* sign-in; Google OAuth is scaffolded but not the live path. Confirm which is the launch auth before building JWT verification against it.

---

## 6. Suggested build order (when greenlit)

1. **`inventoryFor` → checkpoint conversation, free, un-metered, ja/fr only.** Prove the *learning* value first with zero billing. (Alex creates the es agent in parallel to unblock Spanish.)
2. **Endpoint auth + server-side usage counter** — JWT + a `usage` table, metering the *tutor tab* only. No Stripe yet: "paid" can be a manually-set `profiles.tier` flag for the free give-away group and Alex's own testing.
3. **Client `companionUsage` slice + UI** — "N left today," cap states, tier badge.
4. **Billing** — Stripe → webhook → `profiles.tier`. Last, and its own brief.

Step 2's "manual tier flag" also covers Alex's **free give-away users**: comp them a higher `profiles.tier` by hand, no billing needed.

---

## 7. Related
- [[project_companions_in_lessons_tiers]] (memory) · Batch 7 / [R36] (`BUILD-CHECKLIST.md`)
- `BUILD-BRIEF-speech-grading.md` — the mic→score→grade path the checkpoint reuses
- R8 Haruki "why?" ([[project_haruki_next]]) — same graded-bank boundary
- R7 mascots brief — per-language companion assets
