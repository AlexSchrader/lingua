# Agent Fleet — Lingua verification structure (v1)

Adapted from the "Agent Fleet — Corporate Hierarchy" design, **right-sized to Lingua's real lanes**. The full corporate version has 11 departments; Lingua — a solo-built Japanese-learning PWA — has work in only five, so the seven idle departments (marketing, sales, finance, legal, HR/people, ops, support) are intentionally **not staffed**. We keep the *entire verification spine* (Truth Layer, domain gates, gate contract, meta-audit, escalation caps) at a scale that matches the project.

**The principle that survives the resize:** *nothing reaches Alex unverified.* Every deliverable passes its domain gate, then the Truth Layer, then Alex.

---

## Hierarchy

```
Alex (CEO) — final decision, priorities, the merge. Sees only verified work.
  |
  +-- TRUTH LAYER  (mandatory pass-through for ALL upward traffic)   [subagents]
  |     +-- truth-agent    — attacks the REASONING (assumptions, blind spots, confidence)
  |     +-- fact-checker   — verifies the CLAIMS (every number/citation traced; unsourced = BLOCK)
  |     +-- meta-auditor   — audits the auditors (~1-in-5; catches rubber-stamping & over-blocking)
  |
  +-- main CC session = COO + lead + specialist
  |     routes work, does the work (or spawns general-purpose agents for parallel work),
  |     owns the handoff. Never self-approves — routes finished work through the gate.
  |
  +-- feature dept ------- GATE: code-auditor        (engine/screens/store/components/contract, tests)
  +-- curriculum dept ---- GATE: content-auditor     (src/data/ja/*.js content; native review batched)
  +-- design/UX dept ----- GATE: usability-auditor   (UI/flow, a11y, ND-friction, anti-burnout spine)
  +-- data/learn-sci dept- GATE: stats-auditor       (FSRS/mastery/grading/queue + efficacy claims)
  +-- qa dept ------------ GATE: accuracy-auditor     (does it actually work + honest reporting)
```

**Mapping to Claude Code reality.** The departments are *lanes of work*, not (yet) a tree of delegating agents. Alex is the CEO. The main session is the COO/lead/specialist — it does or routes the work. The **gates and the Truth Layer are the runnable subagents** (`.claude/agents/*.md`) and are the only mandatory pass-through. If a lane ever needs its own delegating "lead" agent, promote it then — don't build idle scaffolding now.

---

## Flow — every unit of work

```
specialist (main CC / a spawned agent)
   |
   v
domain gate  (code-/content-/usability-/stats-/accuracy-auditor)
   |   on BLOCK → back to the owner with a NAMED, REPRODUCIBLE defect.
   |             max 2 revision loops, then it goes up as an unresolved conflict.
   v
Truth Layer  (fact-checker + truth-agent; meta-auditor samples ~1 in 5)
   |
   v
Alex (CEO)   — merges, or returns it.
```

**Cost discipline (the design's own advice).** Gates add ~2–3× tokens per deliverable. So **gate the irreversible / high-blast-radius work** — schema/persist/FSRS/mastery changes, new card kinds, anything user-facing that ships — and use lighter review for trivial, reversible edits. Don't gate a one-line copy fix with the full fleet.

---

## Gate contract — identical for every gate

| Verdict | Meaning |
|---|---|
| **PASS** | Sound. Ship it upward. |
| **PASS-WITH-FLAGS** | Ship, but these N items are unverified — **each listed explicitly**. |
| **BLOCK** | A **specific, named, reproducible** defect. Returned to the owner. |

**A gate never:** rewrites the work, softens its own verdict, or approves its own department.
**Two kinds of error, two kinds of check:** FACT errors → `fact-checker`; REASONING errors → `truth-agent`. Never merge these roles.
**Escalation is capped:** max 2 revision loops per gate; the third failure goes to Alex as an *unresolved conflict*, never an infinite loop.

---

## Truth Layer output — what Alex receives

```
VERDICT:     <the recommendation>
CONFIDENCE:  CERTAIN / LIKELY / GUESSING   (rough ratio)
VERIFIED:    <claims traced to sources (file:line / command output)>
UNVERIFIED:  <untraceable claims — ALWAYS listed>
STEELMAN:    <the strongest case AGAINST this>
BLIND SPOT:  <what nobody in the chain checked>
DISSENT:     <any gate overridden after a BLOCK, and why>
```

---

## Gate specialization — what each one hunts (details in each agent file)

| Gate | Hunts for |
|---|---|
| `code-auditor` | Weakened checks (cardinal sin), secrets in client, untested paths / missing coverage-fixture entry, breaking persist/schema/`SYNC_KEYS`, contract-drift bundling, FSRS/`LEARN_OPTS` outside a tuning brief, hook/order traps |
| `content-auditor` | Vocab used before introduced, front-collisions (no validator-weakening), unnaturalness → **native review**, grammar-as-vocab modeling, missing KanjiVG data, id-changing (progress-wiping) edits |
| `usability-auditor` | Gamification / anti-burnout violations (streak/XP/FOMO), ND-friction, a11y (reduce-motion, contrast, keyboard, romaji/furigana), dark patterns, dishonest copy |
| `stats-auditor` | Scheduling/rung correctness, mastery-curve honesty, grading fairness (slow ≠ punished), efficacy claims with no mechanism, memorization creep |
| `accuracy-auditor` | "Builds ≠ works", dishonest reporting, over-promising copy, regressions, silent scope-drops |

---

## Known weaknesses — stated out loud (per the design)

1. The Truth Layer is a **throughput bottleneck by construction** — that's the trade: slower, much harder to fool. Worth it for irreversible work; skip it for trivial edits.
2. Gates cost **~2–3× tokens** per deliverable — gate external-facing / irreversible work, not everything.
3. **1-in-5 meta-audit** catches *systematic* rubber-stamping, not one-off misses. Raise the sample rate if a gate's BLOCK rate nears zero.
4. **Name collisions:** the original design's `architect` / `debugger` / `code-reviewer` labels clash with built-in agent names. This adaptation avoids them — every agent here is a distinct `*-auditor` / Truth-Layer name.
5. This is a **verification** structure, not a productivity multiplier. It makes wrong/hallucinated work expensive to ship; it does not make the work itself faster.
