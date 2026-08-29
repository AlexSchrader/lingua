# RUNBOOK — Running the Language Production Team

**For CC:** you were pointed here because you're on a language crew. **Follow this file from §1 top to bottom. Do not ask Alex what to do next — every decision you'd want to ask about is answered below.** Genuinely blocked? §7 says what to do instead of asking.

**For Alex:** §0 is your whole job — assign, then check and test. Everything else runs without you.

---

## 0. Running the team

### The crew

**One language = 4 sessions.** Three author in parallel, one assembles.

| Seat | Does | Runs |
|---|---|---|
| **A1 / A2 / A3** | authors one block each | in parallel, from the start |
| **Merge** | assembles the three blocks, runs audio, hands you one thing to test | after all three hand back |

**Block map** (same for every language — blocks are contiguous in `order` so vocab dependencies flow forward):

| Block | Covers | Roughly |
|---|---|---|
| 1 | **Strand A** (script/sounds) + first half of **Strand B** (thematic vocab) | Latin: 1 sounds unit + 5 topic units · own-script: 6–7 script units + 5 topic units |
| 2 | rest of **Strand B**, plus interleaved Strand A character units (own-script only) | ~5 topic units (+ ~6 character units) |
| 3 | **Strand C** (grammar) + **Strand D** (coverage pass) | 3 grammar units + ~6 coverage units |

Blocks 1 and 2 run cleanly in parallel. **Block 3 draws on vocab that blocks 1–2 introduce** — start it last if convenient; if it runs fully parallel, expect it to revise some examples after the merge. That's normal, not a failure.

### Kicking off — copy-paste

**Authoring seat** (open a fresh CC session, paste, walk away):

> **You're on the Spanish crew, block 2. Follow `RUNBOOK-new-language.md` from §1 start to finish. Don't ask me questions — log anything blocked and keep going. Hand back in the §6 format when green.**

**Merge seat** (once all three have handed back):

> **You're the merge seat for Spanish. Follow `RUNBOOK-new-language.md` §6 "Merge day". Blocks 1–3 are green on their branches. Don't ask me questions — hand back the §6 format plus what to playtest.**

Swap language and block number; nothing else changes, ever.

### Running several languages at once

The crew shape repeats per language — Spanish crew, German crew, Italian crew, each with its own 4 seats and its own worktrees. Two hard limits:

1. **Merge seats run one at a time, across all languages.** They touch `src/data/index.js`, the audio manifest, and `BUILD-CHECKLIST.md` — shared files. Authoring seats never do, so those can all run at once.
2. **Your playtest is the real ceiling.** Each finished language is a Dev-Mode session you have to actually sit through. Three languages in flight is fine; three languages landing the same evening is not.

Practical shape: **2 languages in flight, staggered** — one in authoring, one in merge/playtest.

### Your part, start to finish

1. Open 3 sessions, paste the kickoff, set the language and block. *(~2 min)*
2. Wait. Sessions self-report in the §6 format when green — five lines each.
3. Open the merge seat, paste. *(~1 min)*
4. **Playtest in Dev Mode**, merge if it feels right.

You are not in the loop between steps 1 and 2. If a session comes back with a question instead of work, that's a runbook bug — tell it to re-read §7, and tell me so I can close the hole.

### Tracking what's in flight

`BUILD-CHECKLIST.md` → **"Language crew board"** is the one place to look: a row per in-flight block with its status. The merge seat updates it; you read it.

---

## 1. Preflight — HARD STOP if this fails

Run this before touching anything:

```bash
npm run validate:content && npm run lint:curriculum && npm run test:unit
```

Then confirm **all three** prerequisites from `BUILD-BRIEF-language-blueprint.md` §3 are present in **your** branch's history. They shipped on `feat/language-prereqs`; if your base predates that merge you must not author on it.

1. **Word-front uniqueness is scoped per-language.** In `src/data/contract.js` and `src/data/lint.js`, the front-uniqueness `Map` key **must** include the language — the key is built from the language and the front joined by a separator. **What matters is that the language is in the key at all**; the separator itself is an implementation detail and you should not check for a specific one. If either file still keys on bare `item.front`, **STOP**.
2. **Per-language barrels exist** — `src/data/ja/index.js` and `src/data/fr/index.js` export `JA_UNITS` / `FR_UNITS`, and the root `src/data/index.js` imports one line per language rather than one per unit.
3. **`npm run scaffold:lang` exists** in `package.json`.

Fast check — all three at once:

```bash
grep -qE '\$\{lang\}.{0,12}\$\{(item\.)?front\}' src/data/contract.js \
  && grep -qE '\$\{unitLang\}.{0,12}\$\{item\.front\}' src/data/lint.js \
  && test -f src/data/ja/index.js && grep -q 'scaffold:lang' package.json \
  && echo PREREQS OK || echo PREREQS MISSING — STOP
```

*(The check matches the language variable next to the front variable, deliberately **without** pinning the separator between them. It used to grep for the exact key string, which made it a tripwire on an implementation detail rather than on the property that matters: changing the separator from a literal NUL byte to its unicode-escape form — same runtime value, no behaviour change at all — turned this into `PREREQS MISSING` and would have hard-stopped every crew on a green tree.)*

**If any is missing, stop and tell Alex exactly which one, then do nothing else.** Authoring into the old global-front rule produces a block that is green alone and fails CI the moment it merges with another Latin-script language — you won't see it, and neither will the other two sessions. This is not a "flag it and proceed" situation; the point of the runbook is that a block passing locally also passes on merge.

---

## 2. Set up your worktree

Never author in the main checkout — parallel sessions there overwrite each other's work on every branch switch.

**If your worktree already exists** (Alex may have set the crew up in advance — check `C:\dev\lingua-<lang><block>`), just `cd` into it and skip to §3.

Otherwise, branching **off the scaffold branch**, never off the trunk:

```powershell
git worktree prune
git worktree add C:\dev\lingua-<lang><block> -b content/<lang>-a1-block<block> content/<lang>-scaffold
cd C:\dev\lingua-<lang><block>
npm install
copy C:\Users\acssc\OneDrive\Programming-Projects\lingua\.env.local .
```

- **`C:\dev`, never inside OneDrive** — sync + `node_modules` is a known source of flakiness here.
- `.env.local` is gitignored, so it must be copied by hand or the build ships with Supabase and ElevenLabs silently off.
- Use a distinct dev port (`npm run dev -- --port 517<block>`) so parallel sessions don't collide.

**Check the board BEFORE you claim it. If your block already has a row, STOP.**
Someone is already authoring it. Do not rename yourself "block 1b", do not start a
parallel take, do not author "just the units they haven't reached" — post one line
to Alex saying the block is taken, and stop. This is not a judgement call and §7's
"finish under an assumption" rule does not apply, because the cost is not yours to
absorb: a second seat did exactly this on Japanese B1 and re-authored all 19 units
of block 1 from scratch. Both takes were complete, both passed lint, both hit
6.0 cards/lesson — and one of them had to be thrown away. Whole-block duplicate
work is the single most expensive mistake available to a seat, and it is invisible
until merge day.

**Then claim your row on the board.** Add a line to `BUILD-CHECKLIST.md` → "Language crew board" with your language, block, `authoring`, branch, and worktree path — committed on **your** branch. That's how Alex sees the production line without opening sessions. Update it to `gating` at §5 and `handed back` at §6.

---

## 3. Read exactly these, in order

1. `CLAUDE.md` — you are **Curriculum CC**. Its rules bind you.
2. `BUILD-BRIEF-language-blueprint.md` §1 — **the strand model and band template. This is your assignment.**
3. `CONTENT.md` — the item schema.
4. **`src/data/ja/unit22.js` onward — the structural reference.** Japanese is the model: 4 lessons × 6 cards, three strands per band. Match this shape. **Do not model on `ja/unit1.js`–`unit10.js`** (47–55 cards/unit, pre-lint drift).
5. **`src/data/fr/unit1.js` — Latin-script *conventions* only** (the `front`/`reading` split, articles-with-nouns, accent folding). Its header comment is authoritative for how a Latin language encodes items; ja stays authoritative for how a language is *structured*.

**Do NOT run `scaffold:lang` yourself.** Scaffolding happens **once**, before any crew starts, on a shared base branch (`content/<lang>-scaffold`) that all three blocks branch from — it creates `src/data/<lang>/` *and* wires the root `src/data/index.js`, so three seats each running it is a guaranteed three-way conflict on the one shared file the per-language barrel exists to avoid. Your worktree already has the stubs. **You fill in `items` only.**

*(If the scaffold branch genuinely doesn't exist yet, you're the first seat: create it — `git checkout -b content/<lang>-scaffold`, `npm run scaffold:lang -- <lang>`, commit, and have the other blocks branch from it. Then continue.)*

---

## 4. Author your block — the rules

These are not guidelines; the lint enforces most of them and the gate rejects the rest.

- **Before you author a single card, run `npm run taught -- <lang>` and keep the output open.** It lists every word the language already teaches, with the unit that owns it. A duplicate front is a hard `validate:content` failure, so this is a gate input, not a nicety. Use `--max <unit>` to see only the frozen base you are allowed to draw on (a B1 crew: `npm run taught -- es --max 50`).
- **The scaffold seat generates that list ON THE SCAFFOLD BRANCH, before any crew is kicked off.** Not on a block branch afterwards — a list written after authoring reaches nobody. This is the fix for the single most expensive failure this project has had: three Spanish B1 crews authored 888 cards for 37 units using only **729 distinct words**, because roughly ten themes were built twice over (`u56 Trabajo y proceso` vs `u84 Trabajo y economía`; `u67 La salud y el bienestar` vs `u85 Salud y enfermedad`). Deduping cost **159 cards** and left 36 of 37 units under the 24-card standard until a fourth seat refilled them. No crew did anything wrong — they simply could not see what the others had claimed.

- **4 lessons per unit × 6 cards per lesson = 24 cards.** The mature ja shape (every unit from u22 on). Band is 5–8 cards/lesson; aim 6.
- **Teach the script in chunks that get used immediately.** ja's Unit 1 is 25 kana *and* 29 real words — never a run of bare characters before the first word. For a Latin language this means the sounds unit uses real vocabulary, not letter drills.
- **Grammar goes in its own units, in ja's order:** basic sentence/copula → verbs & particles/cases → past tense & adjective agreement.
- **Every lesson gets a `canDo`** — one plain-English sentence naming a real thing the learner can now do. Not "learn the days of the week"; "Say what day it is and make plans for a specific day."
- **Rewrite the unit `title` in the target language.** The scaffold writes an English *working* title ("Greetings", "Grammar 4 — compound and linked clauses", "Vocabulary 1 (A2)"). It marks the **slot**, which is fixed; the wording is yours and is meant to be replaced. Titles render on the Ladder, so an unreplaced one ships to the learner in the wrong language. Match the language's existing house style — ja `かず・じかん`, fr `Les nombres`, es `Los números y la hora` — and continue the `· 2` / `· 3` numbering when a unit extends an earlier one (`Les verbes` → `Les verbes · 2`). Name the unit after what it actually teaches: check the fronts before titling, so a "Colors and weather" slot that really carries both becomes `Los colores y el tiempo`, not just `Los colores`. *(This rule lived only in a comment inside `scripts/scaffold-language.mjs`, which no authoring seat opens — so three of the first nine blocks shipped 21 units with English titles while their sibling blocks localized. It is written here now because here is where seats actually read.)*
- **Every example sentence uses only vocab introduced at or before that unit.** Proper names and transparent cognates are free. This is the rule most likely to bite you in block 2 or 3 — check the earlier blocks' fronts before writing an example, not after.
  - `lint:curriculum` now **reports this as warnings** (not errors). Read every one; most are real. It is advisory rather than a gate on purpose: measured against shipped French A1, a strict check flags a third of all examples, almost all of it morphology, elision and cognates rather than defects. With those exemptions it settles near 5%, which is a good review list and still too noisy to fail a build on. **A warning here is a question, not a verdict** — confirm the word really is untaught before rewriting.
  - **It goes quiet on your branch, by design.** The check skips every unit sitting behind an unauthored stub, because the vocabulary an later unit legitimately depends on is not in the tree yet — block 3 measured 89.9% "unknown" purely because blocks 1–2 were still stubs. **So it can only do its real work at merge, once the blocks are combined.** Expect a fresh crop of warnings there; that is the check finally being able to see, not a regression you introduced.
  - **Japanese is not checked at all** — no word boundaries to tokenise. A real ja check needs a morphological analyser; until then the rule stays honour-system there.
- **Word ownership: lower slot number wins.** If your block wants a word an earlier block already teaches, you don't teach it — you use it in examples. If a *later* block wants one of yours, it defers to you. Never coordinate with the other sessions; the rule decides.
  - **Compare LEXEMES, not strings.** Front-uniqueness is enforced on the exact `front`, so `ておきます` and `ておく` both validate — while being one word with two mastery tracks and no new learning for the learner. **A green validator is not evidence that a front is new.** The ja B1 block-3 seat checked all 456 of its fronts against the corpus, got zero collisions, and had still re-taught **36 words**; the content gate caught it, and 12 of them were an entire pair of lessons that had to be re-authored. Before committing to a front, check its inflectional relatives: for ja that means ます⇄辞書形 (both verb classes, plus the いらっしゃる-class `い`-drop), noun⇄noun+する/します, and X⇄Xです; for a Latin language, the infinitive against the conjugated form. **This is the merge seat's blind spot too** — §6 step 3 dedupes duplicate fronts, and a dedupe that only compares exact strings leaves every lexeme duplicate in place.
- **`front` is real orthography** (accents, apostrophes, spaces); **`reading` is its ASCII fold** — the contract requires `[a-z]+`. The checker folds typed accents back, so learners can type either.
- **Nouns are taught with their article/gender marker** in `front`, where the language has one. Gender is learned as part of the word or it isn't learned.
- **Grammar has no item type.** Model it as function-word/suffix vocab whose example sentences carry the pattern.
- **`accept[]` on every vocab item** — any multi-word meaning needs synonyms or the typed check rejects reasonable answers.
- **Write as if a native reviews it.** There is no human native reviewer; you are the proxy. "Slightly awkward but comprehensible" is survivable; a genuine error is not.
- **Stay inside `src/data/<lang>/`.** No engine, no schema, no other language, no `LEARN_OPTS`. Spotted an app bug? §7.

---

## 5. Gate — all five, in this order, all green

```bash
npm run lint:curriculum
npm run validate:content
npm run test:unit
npm run audit
npm run build
```

Then run the `content-auditor` agent on your block as the naturalness gate, then `fact-checker` + `truth-agent` per `CLAUDE.md` → Agent Fleet.

**Never weaken a validator, test, or assertion to get green.** If a check fails, the content is wrong — fix the content. A loosened check is worse than an unshipped block.

---

## 6. Hand back to Alex — the only thing he reads

Post exactly this, nothing longer:

```
<Language> block <n> — units <slots>, <N> cards.
Gate: lint ✅ validate ✅ unit ✅ audit ✅ build ✅
content-auditor: <verdict> · truth layer: <verdict>
Branch: content/<lang>-a1-block<n> (worktree C:\dev\lingua-<lang><n>)
Playtest: Dev Mode → <lang> → unit <first slot>
Unresolved: <list, or "none">
```

Then **stop.** Do not merge. Update your row on the crew board (§0) to `handed back`.

### Merge day — the merge seat only

Runs once, when all three blocks are green. **One session does this, never three.**

0. **Dry-run every block merge BEFORE booking the seat** — `git merge-tree --write-tree main <block>` per block, plus `npm run taught -- <lang>` on the combined result. This costs minutes and tells you which of the two jobs below you are actually walking into. Do it while the crews are still running, not on merge day.
1. `git merge` each block branch **in block order** (1 → 2 → 3). Conflicts should be near-zero: authoring seats only ever touch `src/data/<lang>/`.
2. Re-run the **full gate** on the combined result. A block can be green alone and red combined — that's the whole reason this seat exists. Fix in the merged tree.
3. **Duplicate fronts are the expected red, and they are YOURS to resolve — do not escalate them.** Two blocks independently teaching the same word is the normal outcome of parallel authoring, not a failure or a decision for Alex. The Spanish pilot produced 33 across 21 lessons; every one resolved mechanically. Work it in this order:
   - **Ownership: lower unit `order` wins, always.** No exceptions and no negotiation — that is what makes this resolvable by one seat with no cross-session coordination. Delete the item from the **higher**-order unit; the word stays available to that unit's example sentences, which is all it needed.
   - **Count the duplicates first — the rule above assumes they are INCIDENTAL.** Lower-order-wins is right when blocks overlap on scattered words (the Spanish A1 pilot: 33). It breaks when the blocks duplicated whole THEMES: Spanish B1 hit **159 duplicates across 84 unit pairs**, and applying lower-order-wins mechanically would have cut `u78 "Cambio y acción"` from 24 cards to **6**, with 11 units left under 18. The same 159 cards die either way — the only question the rule answers is *where the holes land*. Above roughly 50 duplicates, or whenever two unit TITLES describe the same theme, assign each duplicated word to whichever owning unit has fewest cards so far. That is safe by construction: every candidate unit is one whose own crew wrote that card for that unit. Then expect a refill pass — say so in the hand-back, because the band is not closed until someone authors the shortfall.
   - **A sounds/script unit owning ordinary words is correct, not a bug.** ja Unit 1 is 25 kana *and* 29 real words; a Latin sounds unit works the same way. Don't "fix" it by reassigning the word to the thematic unit that feels more natural — that reopens the tie the rule exists to close.
   - **The validator only finds the EXACT-STRING duplicates. Run `npm run check:lexemes` too.** `validateContent` keys on the literal `front`, so `ておきます` and `ておく` are two clean cards and one word — a red gate is not the full list. The ja B1 block-3 seat shipped **36** of these past a fully green validator; the content gate found them, and half a register unit had to be re-authored. `npm run check:lexemes -- <fronts…>` probes the inflectional relatives (ます⇄辞書形, noun⇄する/します, X⇄です). It over-generates on short fronts, so read every hit — but a duplicate it names is a duplicate the validator will never show you. See §4 "Compare LEXEMES, not strings".
   - **Then repair the holes deletion leaves.** Every lesson that drops below **5 cards** needs backfilling to 5–6 with genuinely new words that are in scope at that unit. In the pilot, 10 of 21 lessons fell under the floor and two fell to 3 — so budget this as real authoring, not cleanup. Re-run the gate after backfilling; the vocab-scope lint will catch a backfill word used before it is taught.
4. Run audio **once**: `npm run generate:audio` then `npm run generate:manifest`. **Never in parallel with another language's merge** — one shared manifest.
5. Update `BUILD-CHECKLIST.md` per its marking protocol, and clear the language's rows off the crew board.
6. Hand Alex the §6 block for the whole language, plus one line: which unit to open first in Dev Mode.
7. `git worktree remove` the three authoring worktrees.

Then stop. Alex playtests and merges to `main`.

---

## 7. When you're stuck — do this, don't ask

| Situation | What you do |
|---|---|
| A word you need is owned by an earlier block | Use it in examples; don't re-teach. Move on. |
| A slot's theme doesn't fit this language | Author the nearest honest equivalent, note the deviation in the unit header comment, keep the slot number. |
| You find an app/engine bug | Log a `[ ]` item in `BUILD-CHECKLIST.md` → "Feature CC backlog". Do not fix it. Keep authoring. |
| Lint fails on something you think is wrong | Fix the content. If you're confident the *rule* is wrong, log it and work around it — never edit the rule. |
| A gate agent BLOCKs you | Fix and re-run. Max 2 loops, then hand it to Alex as an unresolved conflict in §6. |
| Genuinely ambiguous, nothing above applies | Pick the option most consistent with `src/data/fr/`, state the assumption in §6 under "Unresolved", and keep going. |

The standing rule: **finish the block.** A complete block with three flagged assumptions beats a half-block with three questions.
