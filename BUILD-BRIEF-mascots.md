# Build Brief — Mascots (Lingua the panda) + per-language Haruki + Easter-egg pandas

**Status:** design doc / in progress (Alex generating panda clips via Grok, 2026-07-11). This is **pitch R7**. **Lanes:** asset generation (Grok clips/stills, voice picks) = **Alex/design**; wiring = **Feature CC** (Mascot component is already built); spec = **Idea CC**.
**Goal in one line:** a calm panda companion (Lingua) with transparent animated reactions, a per-language Haruki tutor (name + accent change per language), and a per-language Easter-egg panda still — all data-driven, all gentle (anti-dopamine).

> Design doc. Grounded in the repo 2026-07-11; repo is source of truth.

---

## Aesthetic guardrail (applies to everything below)
The app is deliberately **text-first and anti-dopamine** — Lingua is a *calm companion*, not a hyperactive Duolingo owl. Soft bounces, warm nods, gentle energy; never frantic, never a slot-machine celebration. Cultural touches (Easter-egg outfits) stay **tasteful and respectful — iconic, not caricature.**

---

## Part A — Lingua the panda: animated reactions (the current work)

### The app is already built for this
[`Mascot.jsx:55-58`](src/components/Mascot.jsx#L55) wants **alpha-capable video — WebM VP9 or HEVC `.mov`** and falls back to the (transparent) PNG still until those exist. The current clips are `.mp4`, which **can't hold alpha** — that's why they're white-bg and unusable. **No code change needed: drop correctly-named transparent `.webm` files into `public/mascot/` and they work.** Transparent PNG stills already exist (base, celebrate, cheer, proud, sleepy, think, wave, wistful).

### ⚠️ The key production fact: Grok can't output alpha — use green screen
AI video generators (Grok included) **cannot output a real alpha channel.** Prompting "transparent background" yields a flat white/gray fill — the exact problem we already have. The reliable pipeline:
1. Prompt Grok for a **solid chroma-key green background**.
2. **Key the green out yourself** (one ffmpeg command) → export to WebM-with-alpha.

### Character sheet (paste into EVERY prompt for consistency)
> *A small, round, friendly cartoon giant panda named Lingua — soft matte black-and-white fur, big dark eye-patches, rosy cheeks, a warm gentle smile, chibi proportions (large head, small body), clean flat-shaded 2D children's-book illustration style with soft outlines. Calm, kind, encouraging. No text, no logos.*

AI video struggles with character consistency — reuse this exact wording + style words in every prompt; lock a seed or reference image if Grok allows.

### Base template (every clip)
> `[CHARACTER SHEET]` + `[action]`. Centered, full body with a small margin, facing camera. **Solid uniform chroma-key green background, hex #00FF00, flat even lighting, absolutely no green anywhere on the panda (no green rim-light/reflections).** Smooth gentle motion, soft calm energy. 2D flat animation. ~2–3 seconds.

### Per-reaction prompts → app filename map (from `Mascot.jsx` CONTEXTS)
| Produce this file | Action to append | Context |
|---|---|---|
| `lingua-greeting.webm` | slowly raises one paw in a friendly wave, warm smile, small happy bounce | greeting |
| `lingua-correct-choice.webm` | a small happy hop and a gentle single clap, warm proud smile — brief, calm | correctAnswer |
| `lingua-wrong-choice.webm` | a soft *sympathetic* reaction: tilts head, small encouraging "it's okay" nod — reassuring, never sad/scolding | wrongAnswer |
| `lingua-lesson-complete.webm` | warm celebration: raises both paws up, content happy smile, gentle bounce | lessonComplete |
| `lingua-achievement.webm` | quiet proud pose: one paw to chest, satisfied slow nod — gentle pride | achievement (milestones, R35) |
| `lingua-unit-unlock.webm` | looks up and gestures forward with curious excitement, a new path opening | unitUnlock |
| `lingua-loading.webm` *(loops)* | gentle idle: slow breathing, soft blink, taps chin thoughtfully — **seamless loop** | loading |
| `lingua-error.webm` | mild apologetic shrug with a small sympathetic smile | error |

**Skip `lingua-streak.webm`** — the streak is being removed (see `BUILD-BRIEF-milestones.md`). Once these transparent clips exist, **R35 milestones can use `lingua-achievement` as the celebration** instead of the toast+SFX fallback that the white-bg problem forced (memory `project_mascot_white_bg.md`).

### Post-processing (green → transparent WebM)
```bash
# WebM VP9 with alpha — the primary format the app uses
ffmpeg -i lingua-greeting-green.mp4 \
  -vf "chromakey=0x00FF00:0.30:0.10,despill=type=green,format=yuva420p" \
  -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 0 -crf 30 lingua-greeting.webm
```
- Tune if edges look rough: `0.30` = similarity (higher keys more green), `0.10` = blend/softness; `despill` kills green fringing.
- Safari also wants HEVC `.mov` alpha (macOS): `-c:v hevc_videotoolbox -alpha_quality 0.9 -tag:v hvc1 lingua-greeting.mov`.

---

## Part B — Per-language Haruki (name + accent change per language)

Haruki is the in-app tutor (voice + persona; ElevenLabs Conversational Agent, Phase 6.5). **Per learning language, the tutor changes NAME and ACCENT/voice** to match — a native-feeling guide for each language.

- **Data-driven, keyed by language id** (ties to the language catalog, R15). Extend `server/companions.js` (server-side; voiceIds live here, API keys stay secret) into a per-language map:
  - `ja` → **Haruki**, native Japanese voice (current).
  - `es` → a Spanish name (e.g. Mateo/Diego) + native Spanish-accented voice.
  - `fr` → a French name (e.g. Lucas/Théo) + native French voice.
- **What changes:** the persona *name* + the ElevenLabs *voice* (native accent) + the agent's language config. **What stays:** the persona rules (never identifies as AI; warm, encouraging; separate from the dev build-buddy) and, by default, the *visual* character — localize name+voice, keep one look. *(Open decision: does appearance change per language too, or stay constant? Alex said "name and accent" → keep look constant unless he wants otherwise.)*
- **Each language needs its own native-accent ElevenLabs voice** — Alex picks/authorizes (as with the Haruki JP voice).
- **Depends on 2nd-language content** — moot until es/fr have lessons, so **parked** alongside the user-chosen-path work (memory `project_language_path.md`). Spec now, build when a 2nd language nears.
- If Alex wants an **animated Haruki character** (his earlier idea): that's a separate *human* character (not the panda) — its own character sheet + the same green-screen→WebM pipeline. Flag as a follow-up; not this round.

---

## Part C — Per-language Easter-egg panda (still image, home page) — DEFERRED

Each added language gets an **Easter-egg still**: Lingua the panda **wearing something iconic from that country**, shown subtly on the home page (Today). A small delight that rewards adding a language — structural charm, not gamification.

- **Still image, not animated** — so background removal is trivial (transparent PNG; Grok green-screen→PNG, or any bg-remover).
- **Data-driven, one asset per language id** (e.g. `public/mascot/easter/{langId}.png`), rendered on Today; ties to the language catalog (R15).
- **Outfit ideas (keep tasteful/respectful — iconic, not caricature):** `ja` a subtle hachimaki headband or a maple/sakura sprig; `fr` a beret + Breton striped shirt; `es` a simple flamenco flower or a fan. Alex curates per country; run culturally-sensitive picks by the native-review channel when it's live.
- **Timing: LAST — when the app is closer to completion** (Alex's call). Log now, build later.
- Reuse the exact Lingua character sheet + add the country item, so the Easter-egg panda is unmistakably the same character.

---

## Lanes & dependencies
- **Alex/design:** generate the panda reaction clips (Part A, now) via Grok + ffmpeg; pick per-language Haruki voices (Part B); curate Easter-egg outfits (Part C).
- **Feature CC:** Part A needs *nothing* (drop files in). Part B = per-language companion map in `server/companions.js` + agent language wiring. Part C = a small home-page render keyed off the language catalog. Both B & C ride the data-driven language catalog (R15).
- **Idea CC:** this brief.

## Phases
- **Now** — Part A: panda reaction clips (green-screen prompts + ffmpeg → WebM/mov). Drop into `public/mascot/`. Immediate visual win + revives the milestone celebration.
- **When a 2nd language nears** — Part B: per-language Haruki (name + voice map).
- **App near completion** — Part C: per-language Easter-egg panda stills.

**DoD (Part A, the live piece):** each app moment (greeting/correct/wrong/lesson-complete/achievement/unit-unlock/loading/error) plays a gentle transparent panda clip that overlays cleanly on any background; no white box; streak clip dropped; milestone celebration can use `lingua-achievement`.

---

## Relationship to other work
- **This is pitch R7.** The per-language halves (B, C) extend it and depend on the **language catalog (R15)** being data-driven.
- **Revives the milestone celebration** — once transparent clips exist, R35 can use the mascot `achievement` reaction (memory `project_mascot_white_bg.md` documented the white-bg blocker that forced the toast+SFX fallback).
- **Keeps the anti-dopamine spine** — gentle companion + subtle Easter egg, never a reward-jackpot.
