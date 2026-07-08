# Build Brief — Language Catalog (data-driven, un-hardcode the path)

**Status:** design doc / not started. Authored by **Idea CC** (2026-07-05) off Alex's brainstorm; scope decided by Alex (**neaten + generalize**, **data-driven catalog**). For **Feature CC + Alex**. **Lane: Feature CC** (data model + cascade + multi-screen render). ⚠️ Touches the language/gating model + the content validator → **check-in items** flagged below.
**Goal in one line:** stop the languages UI being hardcoded to Alex's personal `ja→es→fr` plan — make the catalog data-driven, show only what's real neatly, and collapse the "coming soon" clutter.

> Design doc, not an implementation plan. Grounded in the repo 2026-07-05; repo is source of truth.

---

## The core insight: catalog ≠ path

Today one hardcoded array conflates two separate things:

1. **The catalog** — which languages exist / are planned (a roadmap).
2. **Alex's personal path** — the `ja→es→fr` climb order, baked into the `unlock` cascade.

Separating them un-hardcodes everything. A language has a **build status** (derived, see below); the display groups by that status instead of by one person's ordering.

## What exists (ground truth — verified 2026-07-05)

- **`src/data/ja/languages.js`** (note: lives in the `ja/` folder despite being cross-language):
  ```js
  export const LANGUAGES = [
    { id:"ja", name:"Japanese", flag:"🇯🇵", target:"B2", unlock:null,                 unlocked:true  },
    { id:"es", name:"Spanish",  flag:"🇪🇸", target:"B1", unlock:{lang:"ja",level:"A1"}, unlocked:false },
    { id:"fr", name:"French",   flag:"🇫🇷", target:"B1", unlock:{lang:"es",level:"A1"}, unlocked:false },
  ];
  ```
- **Only `ja` has content** — every entry in `UNITS` is Japanese. `es`/`fr` are pure placeholders; their "Lessons coming soon." rows advertise nothing playable.
- **The cascade logic is already generic** — `checkCascade` (`useStore.js`) reads `unlock:{lang,level}` and `isLevelComplete`; it doesn't hardcode ids. Good — the *engine* generalizes; only the *data + display* are Alex-shaped.
- **Rendered in 4 screens** — `Stats.jsx` (the Languages panel + the JP/ES/FR/All Mastery tabs — both show zero-data es/fr), `Ladder.jsx`, `Today.jsx`, `Onboarding.jsx`. `Stats.jsx` already computes `activeLang = LANGUAGES.find(l => languages[l.id]?.unlocked)` — keep that.
- **The content validator checks the language shape** (`contract.js`, from Phase 1: `id/target/unlock/unlocked`). ⚠️ Any new field must be added to its allowlist or validation fails — a **contract change (own PR / check-in)**.

## The design (v1 — neaten + generalize, no user path-selection yet)

### 1. Data-driven catalog
- **Move** `languages.js` out of `ja/` to `src/data/languages.js` (it's cross-language). Update imports (`src/data/index.js` re-exports it, so likely one hop).
- **Adding a language = one catalog entry.** Keep `{ id, name, flag, target, unlock }`; add `order` (roadmap sort) if needed.
- **Derive `live` vs `planned` from content, don't store it** — `isLive(langId) = UNITS.some(u => u.lang === langId)`. A language flips to "live" automatically the moment its first unit ships; nothing to hand-maintain. `planned` = in the catalog but no content yet. *(This is the "data-driven, any language" Alex picked.)*
- The `unlock` cascade stays for gating but no longer drives the *display order* — status does.

### 2. Neat display (Stats Languages panel)
- **Live languages expanded** (today just Japanese) — flag, name, per-stage progress bars (Pre-A1 / A1 …). Unchanged from now.
- **Planned languages collapsed** into a single compact expander — `▸ More languages · N planned` — that opens to show each as a one-line row with a muted **Planned** tag. **Kills the per-row "Lessons coming soon."** No fake progress bars.
- **Mastery tabs**: show only **live** languages + **All** (drop the zero-data ES/FR tabs). They come back automatically when those languages go live (same `isLive` derivation).

### 3. What v1 does NOT include (per Alex's scope choice)
- No user path-selection / "queue next" picker yet (that's the parked **[R-next]** below) — moot until a 2nd language has content.
- No change to onboarding's language flow beyond reading the generalized catalog.

## ⚠️ Check-in items (CLAUDE.md guardrails — get Alex's ok before touching)
- **Content validator** — adding any catalog field (`order`) touches `contract.js`'s language validation → schema change, own scoped PR.
- **The cascade/gating model** — even though v1 doesn't change unlock *logic*, moving the file + deriving status sits next to gating. Keep the `unlock`/`checkCascade` behavior identical; only the display grouping changes.
- **File move** — `src/data/ja/languages.js` → `src/data/languages.js` is an import change; grep all `languages.js` importers first.

## Open decisions
1. **`order` field or derive order?** Recommend a small explicit `order` for the planned-list roadmap sort; live-vs-planned is derived.
2. **Mastery tabs for planned languages** — hide entirely (recommended) vs show disabled/greyed.
3. **Where does the planned catalog live editorially?** — es/fr already modeled; adding more is just catalog entries (Alex curates).
4. **Onboarding** — does it need to *name* the active language, or stay ja-first for now? (v1: read the catalog, keep ja as the sole live default.)

## Build phases
- **L.0** — move `languages.js` to `src/data/`, fix imports, add `isLive(langId)` helper (derives from `UNITS`). No visual change yet; tests + build green.
- **L.1** — Stats Languages panel: live expanded + planned collapsed dropdown (remove "Lessons coming soon." rows).
- **L.2** — Mastery tabs: live + All only.
- **L.3** — sweep Ladder/Today/Onboarding to read the generalized catalog + `isLive`; confirm no hardcoded id assumptions.
- **L.4** — Alex feel-check, then merge.

**DoD:** the languages UI is driven entirely by the catalog + a derived live/planned status; Japanese shows expanded with real progress, planned languages sit in one neat dropdown (no fake "coming soon" rows), mastery tabs show only playable languages, and adding a future language is a single catalog entry. No cascade-logic change; validator still green.

---

## Parked follow-up (Alex's "queue next" idea — future)
**[R-next] User-chosen language path.** A "Up next" picker + primary-language choice so the climb order is the *user's*, not `ja→es→fr`. Deferred because it delivers nothing until a 2nd language has content — but it's the real generalization (see memory `project_language_path.md`: order must be user-selectable; Alex wants French next, France 2028). Revisit when es/fr content is real. Logged as a pitch.
