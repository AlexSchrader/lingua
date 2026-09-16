// NO Unit 1 — Lyder og bokstaver ("Sounds and letters") — A1
// ─────────────────────────────────────────────────────────────────────────────
// First contact with Norwegian. Latin-script languages collapse Strand A to ONE
// unit (BUILD-BRIEF-language-blueprint.md §1): not letter drills, but the
// sound-to-spelling map an English reader gets wrong — æ ø å, the kj/skj/sj hush
// sounds, the letters you write and never say (hv-, final -d, the g in og/jeg),
// the silent g in -ig, and -eg said "ay". EVERY LESSON IS A SOUND FAMILY: its
// letters first, then the words of this unit that carry them — see §9 for the
// shape and for why the all-glyph first lesson it replaced was wrong. (Modelled on
// src/data/es/unit1.js and on src/data/fr/unit1.js, which was rebuilt to this
// shape first. Do NOT model a sounds unit on a lesson of bare letters.)
//
// BOKMÅL, not Nynorsk. Norway has two written standards and both are official;
// Bokmål is what roughly 85–90% of Norwegians write, what Oslo speaks, and what
// every learner resource teaches. Erling is from Oslo. This is a corpus decision:
// it sets the spelling and the forms every card is written in (boka not boki,
// ikke not ikkje, jeg not eg, hva not kva). If a card would be Nynorsk, it is
// wrong here.
//
// ─────────────────────────────────────────────────────────────────────────────
// AUTHORING CONVENTIONS FOR NORWEGIAN — binding on ALL no units, every block.
// ─────────────────────────────────────────────────────────────────────────────
//
// 1. THE NOUN FRONT IS THE INDEFINITE FORM: article + noun. **en / ei / et.**
//    Norwegian's definite article is a SUFFIX (bok → boka), so the house rule
//    "nouns carry their article in the front" cannot be applied literally — there
//    is no free-standing definite article to carry. The indefinite article is
//    what carries the gender, so that is what the front carries, exactly as es
//    does with el/la and fr with le/la:
//        en bil    (masculine)   →  definite bilen
//        ei bok    (feminine)    →  definite boka
//        et hus    (neuter)      →  definite huset
//    All three genders are marked. Feminine is marked **ei**, never "en", even
//    though moderate Bokmål permits "en bok": marking ei is what makes the
//    definite form PREDICTABLE (ei → -a, en → -en, et → -et), which is the whole
//    reason gender is taught at all. The definite form goes in the `hint`, never
//    in a second card — boka and en bok are one word with one mastery track.
//    ⚠️ TELL THE LEARNER THE OTHER FORM EXISTS. Marking `ei` makes PRODUCTION
//    predictable and says nothing about RECOGNITION: a learner drilled only on
//    `boka`/`klokka` meets `boken`/`klokken` in any newspaper with no hook for it,
//    and moderate Bokmål uses the en- form heavily. Block 1 says so on `ei øy`
//    (the first feminine the learner ever sees) and again on `ei klokke` (where
//    `klokken` is unavoidable in print). BLOCKS 2 AND 3: put the same one-clause
//    note on the first feminine noun in each of your units. It costs a clause and
//    it is the difference between a learner who can read Norwegian and one who can
//    only read this course.
//    TWO documented exceptions, both because the indefinite singular does not
//    exist for the word:
//      (a) PLURAL-ONLY nouns are taught bare — `penger` (money), and for later
//          blocks `klær`, `foreldre`. Gender/definite named in the hint.
//      (b) MASS nouns are taught bare — `vann`, `melk`. "et vann" is a lake, not
//          a glass of water; writing an indefinite article on a mass noun is an
//          error, not a convention. Gender named in the hint (vannet, melka).
//    ⚠️ THE REAL TEST IS NOT COUNTABILITY — an earlier version of this said
//    "anything countable takes en/ei/et, no third option", and that is false.
//    The predicate is: IS THE INDEFINITE SINGULAR IDIOMATIC FOR THE SENSE YOU ARE
//    TEACHING? That is a judgement, and block 1 already made two of them silently:
//    `et brød` is mass AND countable, and was taught as the countable loaf; `vann`
//    went the other way on the same kind of call. Blocks 2 and 3 will hit this
//    constantly — `en øl` and `en kaffe` ARE the ordinary café usage even though
//    both are mass, while `vær`, `snø`, `regn`, `hår`, `blod`, `tid`, `arbeid`,
//    `musikk` are not, and `briller` and `sokker` join `penger` as plural-only.
//    `bukser` does NOT: unlike English "trousers", Norwegian has an ordinary
//    singular for one pair — `ei bukse`, definite `buksa` — so teach it like any
//    other count noun. Decide by the sense you are teaching, say which sense in
//    the hint, and do not expect the rule to decide for you.
//
// 2. VERBS ARE HEADWORDED IN THE INFINITIVE, WITH ITS MARKER: `å snakke`.
//    The parallel to rule 1 — the noun carries its gender marker, the verb
//    carries its infinitive marker. It is the dictionary citation form, and it
//    pays for itself immediately: Norwegian present tense is infinitive + -r for
//    EVERY person (å snakke → jeg/du/han/vi/de snakker), so one taught form is
//    the whole present tense. The -r form appears in examples, never as a card.
//
//    ⚠️ TWO DELIBERATE EXCEPTIONS, 2026-09-15, Alex's call. 245 of 247 verbs
//    follow the rule. These two do not, because their infinitive is a form the
//    learner never meets and never produces:
//        `heter`  (u3l1), not `å hete`  — "å hete" has no natural use in any
//                 register; the learner only ever says "jeg heter" / "hva heter du".
//        `bør`    (u13l2), not `å burde` — Norwegian modals take the BARE
//                 infinitive, so even a modal frame drops the å. "å burde" is
//                 close to unusable in a sentence.
//    The cost of keeping the citation form was concrete, not theoretical: a card
//    whose front never appears in a natural sentence cannot carry a `drill` (the
//    drill must contain its own front verbatim), and its own example never shows
//    the string the card asks the learner to produce.
//    DO NOT "FIX" THESE BACK. If a third case appears, apply the same test:
//    is the infinitive a form the learner will ever say? If yes, keep `å`.
//
// 3. `reading` IS THE ASCII ANSWER KEY, AND ø MUST BE FOLDED BY HAND.
//    The contract requires [a-z]+. normalizeReading() folds å→a via NFD and
//    æ→ae via an EXPLICIT replace at answer.js:47 (not NFD — æ has no
//    decomposition either; it is special-cased, and ø is the case nobody added).
//    So "å være" → "avaere" and "et språk" → "etsprak" for free.
//    **ø HAS NO DECOMPOSITION AND DOES NOT FOLD** — "brød" normalizes to "brød"
//    and fails the contract. Verified, not theoretical. Write those readings by
//    hand, ø→o:  et brød → "etbrod",  å kjøpe → "akjope",  ei søster → "eisoster",
//    en sjø → "ensjo",  høyre → "hoyre". The learner is not penalised: checkReading
//    accepts the raw front VERBATIM — the whole front, so "et brød" passes as
//    well as "etbrod". A bare "brød" does not; the raw branch compares against the
//    entire front string, article included.
//
//    ⚠️ AND THAT IS NOT GOOD ENOUGH — READ THIS BEFORE YOU AUTHOR A ø CARD.
//    An earlier version of this header claimed "the learner is not penalised".
//    That was wrong, and it was wrong in the way that matters. MEASURED against
//    the real checkReading, for the 12 ø cards in this block:
//        "et brød"  PASS      "Et brød"  FAIL   ← a sentence-initial capital
//        "etbrod"   PASS      "etbrød"   FAIL   ← the same word, no space
//        "et brod"  PASS  ← the MISSPELLING passes while the correct spelling
//                            with a capital does not.
//    The control cards behave properly: "Å VÆRE", "åvære" and "Å være" all pass,
//    because for them the normalize branch is alive. For a ø card that branch is
//    DEAD — normalizeReading("etbrød") is "etbrød", which never equals "etbrod" —
//    so only the exact literal string survives, and case/space tolerance is lost
//    on precisely the cards that need it most.
//    THE FIX IS ONE LINE OF ENGINE, NOT A CONTENT CONVENTION: add ø→o beside the
//    æ→ae replace in `normalizeReading` (src/store/answer.js:47). Verified safe —
//    ø appears in ZERO es/fr readings, so the blast radius is Norwegian only, and
//    there is precedent: that same function had ligature folding ADDED for French.
//    Filed in BUILD-CHECKLIST.md → Feature CC backlog. It is out of the curriculum
//    lane (RUNBOOK §7), so block 1 logged it rather than fixing it.
//    BLOCKS 2 AND 3: this is a DEPENDENCY, not a footnote. ø is far denser in your
//    slots than in mine — rød, grønn, søndag, å høre, å spørre, et øye, et øre,
//    først. Keep hand-folding ø→o so the corpus stays consistent and the engine
//    fix is a no-op when it lands — but CHASE THE TICKET, because every ø card
//    authored before it lands carries this defect.
//    The fold is an ANSWER KEY, never a pronunciation guide, and is never
//    displayed — readingIsInformative() gates display on the front's script and
//    every Norwegian front is Latin.
//
// 4. NORWEGIAN IS V2 — THE VERB IS SECOND IN A MAIN CLAUSE, ALWAYS.
//    It is the shape of every sentence, not a topic to save up, so it is MODELLED
//    in examples from Unit 2 onward. Whenever anything other than the subject
//    opens the clause, the subject moves behind the verb: "I dag går jeg på
//    skolen", never "I dag jeg går". Also modelled: `ikke` after the finite verb
//    ("Jeg er ikke norsk"), and yes/no questions by inversion ("Kjenner du
//    Erling?").
//    ⚠️ BUT MODELLING IS NOT TEACHING, AND BLOCK 1 DID NOT DELIVER ENOUGH OF IT.
//    An earlier version of this paragraph told later blocks that V2 is "not a
//    grammar-unit topic". That was wrong on both counts. It was addressed to the
//    seat that owns u12 "Grammar 1 — basic sentence" (BLOCK 2, not 3), and the
//    exposure it assumed is not there. Counted honestly in this block's 168
//    examples: 19 of the V2 instances are QUESTIONS, which an English speaker
//    already inverts and learns nothing new from; of the fronted-XP declaratives
//    — the pattern English does NOT have and learners actually get wrong — there
//    are four, two are `Her ...` which English also licenses, and one is
//    `Kanskje er Erling norsk`, whose own hint concedes the other order is equally
//    correct. That leaves ONE clean demonstration: "Snart ser vi Erling."
//    So: u12 SHOULD state the V2 rule explicitly. Block 1 gives you a corpus the
//    learner has seen the pattern in, not a corpus that has taught it.
//
// 5. `example.jp` holds the NORWEGIAN sentence — the key is literally "jp" (the
//    field name is historical: "jp" = target language); `example.en` the English
//    gloss. Do not rename it.
//    ⚠️ YOUR EXAMPLE DECIDES WHETHER THE PRODUCTION CARD EXISTS AT ALL, AND
//    NOTHING WARNS YOU. `sentence:build` — the only card that makes a learner
//    PRODUCE a word order, and therefore the only one that actually tests V2 —
//    is built by `sentenceTokens` (cardRouting.js:390). For a Latin language it
//    silently returns null, and the card never appears, unless ALL of:
//      • the item's `front` appears in the example as a WHOLE WORD (contiguous:
//        an adjective between article and noun, "ei god mor", breaks "ei mor");
//      • the example carries NO interior . ! ? … — – (a trailing one is stripped
//        first, so "Hvor er en kafé?" is fine but "Unnskyld! Hvor er en kafé?"
//        is not — a two-sentence example kills the card);
//      • it splits into 3–8 space-separated tiles.
//    MEASURED on block 1 after fixing the four punctuation cases: 125 of 168 items
//    (74%) can reach it. Of the 43 that cannot, 29 are å-verbs — unavoidable,
//    because §2 headwords the infinitive while the example shows the -r present,
//    so the front is never literally in the sentence — and 10 are nouns whose
//    article an adjective splits. THAT IS THE REAL COST OF THE §2 CONVENTION and
//    it is worth knowing before you write 144 more cards: a verb card in this
//    language gets teach/choice/type but not the sentence builder.
//    ⚠️ AND DO NOT CHASE IT WITH A MODAL — an earlier version of this paragraph
//    said the infinitive comes back "after a modal or another verb", and the
//    modal half is FLATLY WRONG. Norwegian DROPS the å after kan/vil/skal/må/bør,
//    so the front is not in the sentence at all. Measured with sentenceTokens:
//        unreachable  front "å lære"   "Jeg kan lære norsk."
//        unreachable  front "å snakke"  "Jeg vil snakke norsk."
//        unreachable  front "å betale"  "Vi må betale nå."
//    The trap is nastier than it looks: the ONLY way to make a modal example route
//    is to write "Jeg kan å lære norsk", which DOES tokenise — and is not
//    Norwegian. A seat chasing reachability through modals writes either dead
//    cards or ungrammatical ones. Caught by the block 2 seat; block 1 had it wrong.
//    ONLY THE Å-TAKING FRAMES WORK — and a frame is only usable if ITS OWN VERB
//    IS TAUGHT AT OR BEFORE YOUR UNIT. An earlier version of this list named
//    prøve and pleie; **neither is a front anywhere in the corpus**, so a seat
//    using them would have got a reachable card, a grammatical sentence, and an
//    UNTAUGHT VERB in an example — a §6 violation that lint reports only as an
//    advisory warning. Caught by the block 2 seat. It is the modal trap one turn
//    further out: those frames were verified against the TOKENISER and never
//    against the TAUGHT CORPUS, so they looked correct by the only test that had
//    been run. CHECK A FRAME AGAINST BOTH.
//    The four frames that are safe as the corpus stands (336 fronts, blocks 1+2).
//    TWO SLOTS PER ROW, and they are not the same number — FRAME is where the
//    frame word is taught, SENTENCE is the earliest unit the whole illustration
//    is in scope, which is set by its OTHER words:
//        frame           FRAME   SENTENCE  illustration                     tiles
//        viktig å        u1l5    u1l5      "Det er viktig å lære norsk."      6
//        å like å        u3l4    u6l3      "Jeg liker å lage kake."          5
//        å begynne å     u5l4    u6l2      "Vi begynner å spise nå."        5
//        noe å           u10l1   u12l3     "Jeg har noe å si."              5
//    ⚠️ SO DO NOT COPY AN ILLUSTRATION VERBATIM INTO AN EARLIER UNIT. Having the
//    frame available does not make the sample sentence available — `å si` is
//    u12l3, so "Jeg har noe å si" is out of scope anywhere before it even though
//    the `noe å` frame opens at u10l1. Take the SHAPE, write your own words.
//    (The like-frame row previously read "Jeg liker å lage mat" — and `mat` is a
//    front NOWHERE in the corpus, so the sentence illustrating a safe frame was
//    itself a §6 violation. Third instance of the same class, caught by block 2,
//    and it happened inside the paragraph that says CHECK A FRAME AGAINST BOTH.
//    That is the argument for the habit, not against it: the list keeps going
//    stale, the check does not.)
//    Want prøve or pleie? Teach the frame verb first — that is allowed, it just
//    has to be a card before it is an example. And the modals are fine to USE in
//    examples — block 2 teaches SIX, all at u13l2: å kunne, å ville, å skulle,
//    å måtte, å burde, å få. They simply never restore reachability, because
//    Norwegian drops the å after them. "Do not chase modals for the router" is
//    not "do not use modals".
//    BUT REACHABILITY IS NOT THE GOAL AND DO NOT REWRITE GOOD SENTENCES FOR IT.
//    The present tense is what an A1 learner actually produces and is the entire
//    payoff of §2, the card is hash-gated to a 25% share, and block 2 measured the
//    real return: converting three of its examples would buy under one card that
//    actually routes, at the cost of the sentences that teach. Block 2 left all 25
//    of its å-verb examples alone on purpose and I agree with that call. Use an
//    å-frame when it is the natural sentence anyway; never to game the router.
//    Filed as a Feature CC ticket — the engine, not the content, is what should
//    match a verb front to its own example.
//
// 6. Examples stay inside vocab taught at or before that unit, plus the FREE list
//    below. Inflected forms of a TAUGHT word count as that word — the definite
//    (broren, klokka), the plural (venner, timer), the present (snakker) and the
//    imperative (gi) are all the taught headword, and the definite forms are used
//    on purpose: they are where the learner SEES the suffixed article that rule 1
//    describes. Machine-checked by `node scripts/check-lang-scope.mjs no`, which
//    parses the FREE lines directly — so these declarations are the single source
//    of truth. ANY unit may add its own `// FREE:` line and the checker reads them
//    all, so blocks 2 and 3 declare what THEY rely on instead of editing this file.
//   FREE: Erling, Kari, Anna, Jonas, Oslo, Bergen, Norge, Europa, Bokmål | kafé, kaffe, taxi, pizza, telefon, restaurant, museum, hotell, bank, park, sjokolade, problem, person | 2000
//
// 7. FIXED GREETING FORMULAS ARE SINGLE LEXICAL ITEMS. `god morgen` and
//    `god kveld` (u2) are taught as whole phrases even though `god` is taught
//    alone here. They are frozen formulas — one thing in the learner's mouth,
//    not a re-teach of the adjective — and the same licence covers `vær så snill`
//    and `ha det`. This is the ONLY place a taught word may reappear inside
//    another front. Blocks 2 and 3: do not extend it to ordinary compounds.
//    ⚠️ WITH ONE PRE-AUTHORISED EXCEPTION, ENUMERATED HERE BECAUSE BLOCK 1 IS THE
//    ONLY SEAT THAT CAN GRANT IT. The time adverbials `i dag`, `i morgen`,
//    `i går` and `i kveld` are frozen formulas under this same licence, and block
//    2 may teach them at u9 (days and months) as whole fronts. Block 1 deferred
//    them but did NOT resolve them, which would have exported an unresolvable
//    problem across a block boundary: `i morgen` contains `morgen`, which §7
//    froze inside `god morgen` WITHOUT ever teaching it as a word; `i dag`
//    contains `dag`, which IS taught (u5l3) but as `en dag`, so the compound
//    carries a taught noun stripped of the article §1 requires; and `i går`
//    collides with `går`, the present of `å gå` (u1l3). All four are single
//    lexical items in the learner's mouth and none is a re-teach. This list is
//    CLOSED — four fronts, no others.
//
// 8. DELIBERATE A1 SIMPLIFICATIONS (revisit at A2):
//    (a) present tense only; the past (-te/-et) belongs to the grammar block.
//    (b) adjective agreement is never something the learner must DERIVE. Neuter
//        subjects do appear ("Et eple er billig.", "Det er viktig å lære norsk.",
//        "Det er sent nå.") and so does an attributive neuter ("et hyggelig sted")
//        — but every one of them is either an -ig adjective, which is invariant in
//        the neuter, or is already given in its -t form as the card's own front
//        (`sent`). No card asks the learner to build a -t or -e ending. Block 3's
//        agreement unit — u14, which is BLOCK 2, not block 3 — owns the actual
//        contrast. One thing HAS pre-empted it, and block 2 should know before it
//        writes u14: no-u6l3-asmake's hint already states the adverbial rule
//        outright ("Note godt, not god — after smaker the adjective is working as
//        an adverb and takes -t"). That is licensed as an inflection under §6, so
//        it is not a scope violation, but it is not nothing either.
//    (c) prepositions arrive where they are first needed, not all at once:
//        `i` in u3 (bo i Oslo), `fra` in u3, `til` and `på` in u7 (directions).
//        Units 1–6 are written to need no other preposition.
//
// 9. ⚠️⚠️ THE SHAPE OF THIS UNIT — EVERY LESSON IS A SOUND FAMILY, LETTERS FIRST,
//    THEN THE WORDS OF THIS UNIT THAT CARRY THEM. Read this before moving any card.
//    ⚠️ THE 2026-09-14 "LETTERS IN THEIR OWN LESSON" SPLIT IS REVERSED, and §9 used
//    to argue FOR it. Do not author from that argument; it is kept here only so
//    nobody re-derives it a third time. What it said: the glyph cards (2026-09-13)
//    had been dropped at the head of whichever lesson already owned each sound,
//    which pushed no-u1l1 to 10 items = 30 screens against ~18 for a normal lesson,
//    so the fix was to give the seven letters a lesson of their own and run four
//    word-only lessons after them.
//    ⚠️ THAT FIX TRADED ONE DEFECT FOR A WORSE ONE, and the cost nobody costed is
//    this: a learner's FIRST SESSION ENDED HAVING LEARNED NO WORDS AT ALL. Seven
//    bare letters, then goodbye. BUILD-BRIEF-language-blueprint.md:15 is explicit
//    that this is not the model — "each unit teaches a chunk of script and
//    immediately uses it for real words… never 46 characters in a row. The learner
//    is reading actual words in unit 1." ⚠️ AND CITE JAPANESE PRECISELY — an earlier
//    draft of this paragraph said "ja has ZERO script-only lessons", which is FALSE
//    and was caught by the fact-checker: ja has 48 of them. What is true, measured,
//    is that none is in a KANA unit — ja u1–u6 run ~5 kana + 5–6 words in EVERY
//    lesson (u1 is 25 kana / 29 words) and have zero script-only lessons between
//    them. The 48 sit in the kanji and yōon units (u11, u13–18, u31–42), hundreds of
//    cards later, for a learner who already reads — the pattern the blueprint calls
//    "woven between vocab units", not the pattern for unit 1.
//    French was rebuilt the right way first (src/data/fr/unit1.js); Norwegian and
//    German followed on 2026-09-14, branch content/de-no-u1-align, and Spanish and
//    Portuguese the same morning on main (03c14bb6). No all-glyph lesson survives
//    outside ja.
//    ✅ THE SHAPE NOW. The learner meets a letter one CARD before the word that
//    needs it, never one LESSON before, and finishes lesson 1 owning four words:
//        l1  æ · ø · å · é   + å være, å lære, ei øy, å gå            (8 items)
//        l2  — (an absence)  + hva, det, hvor, god, og, jeg           (6, UNTOUCHED)
//        l3  kj             + å kjøpe, å kjenne, et kjøkken, å gi     (5)
//        l4  skj · sj       + ei skje, ei skjorte, en sjø, et språk   (6)
//        l5  — (none needed) + norsk, hyggelig, viktig, billig, meg, deg (6)
//    Nothing was deleted and no front changed: 31 items before, 31 after, every
//    lesson inside the lint's 5–8 band (src/data/lint.js:444-447, which counts
//    glyph cards too).
//    ✅ THE INVARIANT WORTH PROTECTING: **NO WORD IN THIS UNIT PRECEDES ITS OWN
//    LETTER.** Checked card by card — kjøpe's and kjøkken's ø is l1, språk's and
//    gå's å is l1, sjø's ø is l1 and its sj is its own lesson, kjøkken's kj is the
//    card it follows. Every letter reference a hint makes points BACKWARD or at the
//    card above it. Move a card and you must re-check this by hand; no lint rule
//    covers it.
//    ⚠️ l2 IS UNTOUCHED ON PURPOSE — same six words, same order, same six ids, same
//    title, same canDo. It teaches an ABSENCE (hv- you do not say, the final -d you
//    do not say, the g of og and jeg you do not say), and an absence has no
//    character to type, so it has NO glyph cards and must never be given any. It is
//    the Norwegian analogue of fr-u1l3, glyph-free for the same reason.
//    ⚠️ l5 HAS NO GLYPH CARDS EITHER, and that is a fact about its words rather than
//    an omission: norsk, hyggelig, viktig, billig, meg and deg contain not one æ, ø,
//    å, é, kj, skj or sj between them. There is no letter left for them to need,
//    which is exactly why the unit can end there.
//    ⚠️ é IS THE ONE GLYPH WITH NO WORD ANYWHERE IN THE UNIT. It sits in l1 because
//    its card IS the contrast with the three beside it — æ ø å are the 27th, 28th
//    and 29th letters; é is not a letter at all and only rides on loanwords. Next to
//    them that means something; anywhere else it is a bare mark. The nearest it comes
//    to a word here is kafé, a FREE cognate (§6) seen in god's example and hyggelig's
//    drill — seen, never taught, and no word was invented to give it a card.
//    ⚠️ THE REGROUPING CHANGED IDS. A lesson number is part of an item id, so every
//    card that changed lesson changed its id — which wipes that item's mastery
//    (accepted by Alex, once, pre-users) and would have orphaned its audio clip,
//    because clip filenames ARE item ids. Only 8 of this unit's 31 ids changed
//    (å være, å lære, å gå and ei øy into l1; kj into l3; et kjøkken into l3; skj and
//    sj into l4); those clips under public/audio/no were `git mv`-ed with their items
//    in this same change and src/data/audioManifest.js was regenerated, so nothing
//    here went silent. All 31 ids resolve to a clip, before and after. DO NOT REGROUP
//    AGAIN — the mastery cost has been paid once and it is not free a second time.
//    ⚠️ Reordering INSIDE a unit adds no lint scope warnings: the teach-before-use
//    check introduces a whole unit's vocabulary before checking that unit's examples
//    (src/data/lint.js — "A unit may use its own new words"). It does have a
//    PEDAGOGICAL cost and it is worth naming rather than hiding: l2 is frozen at
//    position 2 while some of the words it leans on sit behind it, so it still
//    previews later cards (et språk and ei skjorte from l4; et kjøkken, kjenner and
//    kjøper from l3; billig and norsk from l5).
//    ⚠️ COUNTED PROPERLY, because a first draft of this line said "four of its six
//    examples/drills" and that was wrong in both directions: l2 has SIX items and
//    TWELVE example/drill slots, and the right measurement is per slot. Measured with
//    the same script on both trees: **9 of 12 slots preview a later lesson here,
//    against 12 of 12 on main** — three slots better, not two, and all six items are
//    still touched, before and after. The gain is å være: moving it to l1 put `er`
//    behind l2 instead of in front of it, which is four of l2's own sentences fixed
//    at a stroke. The alternative was moving l2 down the unit, which would
//    have changed its six ids and wiped the mastery this shape deliberately preserves.
//    Glyph hints also name words the learner has not met yet; that is deliberate — a
//    hint is a preview, not a card.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT1 = {
  id: "no-u1",
  lang: "no",
  title: "Lyder og bokstaver",
  order: 1,
  stage: "a1",
  lessons: [
    // Lesson 1: the four letters English does not have, and the first words that
    // carry them. æ in å være and å lære, ø in ei øy, å in å gå — and in the
    // infinitive marker itself, which the learner now meets three times in a row.
    // å være leads the word cards because everything else in the unit leans on er.
    // ⚠️ é IS THE ONE GLYPH WITH NO WORD OF ITS OWN, ANYWHERE IN THE UNIT, and it is
    // here on purpose rather than for want of a home: its whole card is the contrast
    // with the three letters beside it — æ, ø and å are the 27th, 28th and 29th letters
    // of the alphabet, é is not a letter at all and only rides on loanwords (kafé,
    // idé). Next to æ ø å that means something; anywhere else it is a bare mark with
    // nothing to be measured against. The nearest é comes to a word in this unit is
    // kafé, which is a FREE cognate (§6) appearing in god's example in l2 and in
    // hyggelig's drill in l5 — seen, never taught, and no card was invented for it.
    // ⚠️ æ, ø and å are graded STRICTLY on their own cards: answer.js
    // foldWouldEraseAnswer() fires on a single-character front whose fold changes it,
    // so here the learner must actually find the key. Inside a whole word (å være)
    // the fold still applies and "avaere" passes.
    {
      id: "no-u1l1",
      unit: 1,
      lesson: 1,
      title: "Æ, ø, å, é — og de første ordene",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Hear, say and type the four letters English does not have — æ, ø, å and é — then use three of them in your first Norwegian words: å være, å lære, ei øy, å gå.",
      items: [
        { id: "no-u1l1-glyphae", type: "glyph", front: "\u00e6", reading: "ae", meaning: null, example: null, hint: "The a of \"cat\", held long. The alphabet ends \u00e6, \u00f8, \u00e5 \u2014 this is the first of the three. \nPhone: hold A, then tap æ\nNorwegian keyboard: two keys right of L (after ø)" },
        { id: "no-u1l1-glyphoe", type: "glyph", front: "\u00f8", reading: "o", meaning: null, example: null, hint: "The \"er\" of \"her\", said with rounded lips. \nPhone: hold O, then tap ø\nNorwegian keyboard: the key right of L" },
        { id: "no-u1l1-glyphaa", type: "glyph", front: "\u00e5", reading: "a", meaning: null, example: null, hint: "A rounded \"aw\", like the vowel in \"more\". Sorts LAST in the alphabet. \nPhone: hold A, then tap å\nNorwegian keyboard: the key right of P" },
        { id: "no-u1l1-glypheacute", type: "glyph", front: "\u00e9", reading: "e", meaning: null, example: null, hint: "Said \"ay\". NOT one of the 29 letters \u2014 it only rides on loanwords like kaf\u00e9 and id\u00e9, marking the stressed final e. Hold E on a phone." },
        { id: "no-u1l1-avaere", type: "vocab", front: "å være", reading: "avaere", meaning: "to be", example: { jp: "Erling er norsk.", en: "Erling is Norwegian." }, accept: ["be", "to exist"], drill: { jp: "Det er viktig å være hyggelig", en: "It is important to be nice" }, hint: "æ is the a of \"cat\", and it is the rarest of the three extra letters. Present tense is er for EVERY person: jeg er, du er, vi er — one form, no endings to learn." },
        { id: "no-u1l1-alaere", type: "vocab", front: "å lære", reading: "alaere", meaning: "to learn", example: { jp: "Erling lærer norsk.", en: "Erling is learning Norwegian." }, accept: ["learn", "to teach", "to study"], drill: { jp: "Det er viktig å lære norsk", en: "It is important to learn Norwegian" }, hint: "The å in front is the infinitive marker — Norwegian's \"to\". Every verb card carries it, so you meet å on every single verb you learn." },
        { id: "no-u1l1-eioy", type: "vocab", front: "ei øy", reading: "eioy", meaning: "island", example: { jp: "Er Norge ei øy?", en: "Is Norway an island?" }, accept: ["an island", "isle"], drill: { jp: "Det er ei øy", en: "That is an island" }, hint: "ø is the \"er\" of \"her\" said with rounded lips. ei marks a FEMININE noun and the definite is øya. You will also meet these written en øy / øyen — Bokmål allows both, and plenty of print uses the en form. This course always writes ei, because ei tells you the definite ends in -a and en does not tell you anything." },
        { id: "no-u1l1-aga", type: "vocab", front: "å gå", reading: "aga", meaning: "to go", example: { jp: "Erling går.", en: "Erling is leaving." }, accept: ["go", "to walk", "walk", "to leave"], drill: { jp: "Det er godt å gå", en: "It is good to walk" }, hint: "Two å's, both long: aw-GAW. It covers walking and leaving on foot — and it is the verb inside hvordan går det, \"how's it going\"." },
      ],
    },
    // Lesson 2: UNTOUCHED — same six words, same order, same six ids, same title and
    // canDo. See header §9. This lesson teaches an ABSENCE (the letters you write and
    // never say: hv-, the final -d, the g of og and jeg), and an absence has no
    // character to type, so it gets NO GLYPH CARDS and must never be given any. It is
    // the Norwegian analogue of fr-u1l3, which is glyph-free for the same reason.
    {
      id: "no-u1l2",
      unit: 1,
      lesson: 2,
      title: "Bokstaver du skriver, men aldri sier",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask what and where, and read the silent letters that hide in the commonest words — hv-, final -d, and the g of og and jeg.",
      items: [
        { id: "no-u1l2-hva", type: "vocab", front: "hva", reading: "hva", meaning: "what", example: { jp: "Hva er det?", en: "What is that?" }, accept: ["what?"], drill: { jp: "Hva er et språk", en: "What is a language" }, hint: "Say VA. Every question word starting hv- drops the h — hva, hvor, hvem, hvordan all begin with a plain v sound." },
        { id: "no-u1l2-det", type: "vocab", front: "det", reading: "det", meaning: "it", example: { jp: "Det er norsk.", en: "That is Norwegian." }, accept: ["that", "this", "there"], drill: { jp: "Det er et språk", en: "That is a language" }, hint: "The t is silent and the vowel is long: DEH. It is the workhorse word — it, that, and the \"it\" in \"it is raining\"." },
        { id: "no-u1l2-hvor", type: "vocab", front: "hvor", reading: "hvor", meaning: "where", example: { jp: "Hvor er Erling?", en: "Where is Erling?" }, accept: ["where?", "how"], drill: { jp: "Hvor er et kjøkken", en: "Where is a kitchen" }, hint: "VOR — silent h again. With an adjective it means \"how\": hvor gammel, how old." },
        { id: "no-u1l2-god", type: "vocab", front: "god", reading: "god", meaning: "good", example: { jp: "Det er en god kafé.", en: "That is a good café." }, accept: ["nice", "fine"], drill: { jp: "En kafé er god og billig", en: "A café is good and cheap" }, hint: "The d is silent and the o is a long oo: GOO. A final d is silent in most short words — god, med, ved." },
        { id: "no-u1l2-og", type: "vocab", front: "og", reading: "og", meaning: "and", example: { jp: "Erling og jeg lærer norsk.", en: "Erling and I are learning Norwegian." }, accept: ["plus", "as well as"], drill: { jp: "Jeg kjenner Erling og Kari", en: "I know Erling and Kari" }, hint: "The g is silent — it sounds exactly like å. Two letters, one of them decorative." },
        { id: "no-u1l2-jeg", type: "vocab", front: "jeg", reading: "jeg", meaning: "I", example: { jp: "Jeg lærer norsk.", en: "I am learning Norwegian." }, accept: [], drill: { jp: "Jeg kjøper ei skjorte i Oslo", en: "I am buying a shirt in Oslo" }, hint: "Said YAY — the j is a y sound and the g is silent. Norwegian j is always the y of \"yes\", never the j of \"jam\"." },
      ],
    },
    // Lesson 3: kj, the thin hiss — and all three of the unit's kj words behind it:
    // å kjøpe, å kjenne, et kjøkken. å gi closes the lesson because it is the SAME
    // RULE running through a different letter: k before i or y softens to kj (kino),
    // and g before i or y softens to a y sound (gi, gift) — one front-vowel rule, two
    // consonants, and the kj card's own hint names the k half of it.
    // The ø in kjøpe and kjøkken was taught in l1; the letter always comes first.
    {
      id: "no-u1l3",
      unit: 1,
      lesson: 3,
      title: "Kj — den tynne hvislelyden",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Make the thin kj-hiss — the h of \"huge\", never a k — in å kjøpe, å kjenne and et kjøkken, and hear the same softening turn g into a y in å gi.",
      items: [
        { id: "no-u1l3-glyphkj", type: "glyph", front: "kj", reading: "kj", meaning: null, example: null, hint: "A thin, breathy hiss \u2014 the h of \"huge\", never a k. k does the same before i and y: kino is HYEE-no." },
        { id: "no-u1l3-akjope", type: "vocab", front: "å kjøpe", reading: "akjope", meaning: "to buy", example: { jp: "Jeg kjøper ei skje.", en: "I am buying a spoon." }, accept: ["buy", "to purchase", "purchase"], drill: { jp: "Det er billig å kjøpe ei skje", en: "It is cheap to buy a spoon" }, hint: "kj is a thin, breathy hiss — the h of \"huge\", not \"k\". Say HYUR-pe. k before i or y does the same: kino sounds like HYEE-no." },
        { id: "no-u1l3-akjenne", type: "vocab", front: "å kjenne", reading: "akjenne", meaning: "to know", example: { jp: "Jeg kjenner Erling.", en: "I know Erling." }, accept: ["know", "to know a person", "to feel", "to recognize"], drill: { jp: "Det er hyggelig å kjenne Erling", en: "It is nice to know Erling" }, hint: "For knowing PEOPLE and places you have met. Same thin kj: HYEN-ne." },
        { id: "no-u1l3-etkjokken", type: "vocab", front: "et kjøkken", reading: "etkjokken", meaning: "kitchen", example: { jp: "Det er et kjøkken.", en: "That is a kitchen." }, accept: ["a kitchen"], drill: { jp: "Et kjøkken er hyggelig", en: "A kitchen is nice" }, hint: "HYUR-ken. Neuter, so the definite is kjøkkenet — the kitchen." },
        { id: "no-u1l3-agi", type: "vocab", front: "å gi", reading: "agi", meaning: "to give", example: { jp: "Jeg gir Erling ei skje.", en: "I give Erling a spoon." }, accept: ["give", "to hand", "hand over"], drill: { jp: "Det er godt å gi", en: "It is good to give" }, hint: "g before i or y turns into a y sound: YEE. Same in gi, gift, gynge — but hard before a, o, u and å: god is GOO." },
      ],
    },
    // Lesson 4: the BROAD hush — one sound, two spellings. skj first with the two
    // words that carry it (ei skje, ei skjorte), then sj with en sjø, which is the
    // pair every learner mixes up with the thin kj of l3. et språk closes on the å
    // from l1. All four are nouns and all three genders are here — en, ei, ei, et —
    // so the article that decides the definite ending (en → -en, ei → -a, et → -et)
    // is still side by side, which was the point of the old all-nouns lesson.
    {
      id: "no-u1l4",
      unit: 1,
      lesson: 4,
      title: "Skj og sj — den brede hvislelyden",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say the broad hush — one sound, two spellings — in ei skje, ei skjorte and en sjø, and read en, ei and et as the gender that tells you the definite form: ei skje → skjea.",
      items: [
        { id: "no-u1l4-glyphskj", type: "glyph", front: "skj", reading: "skj", meaning: null, example: null, hint: "The BROAD hush, plain English \"sh\". Against the thin kj this is the pair every learner mixes up." },
        { id: "no-u1l4-glyphsj", type: "glyph", front: "sj", reading: "sj", meaning: null, example: null, hint: "The same broad \"sh\" as skj. Two spellings, one sound." },
        { id: "no-u1l4-eiskje", type: "vocab", front: "ei skje", reading: "eiskje", meaning: "spoon", example: { jp: "Hvor er ei skje?", en: "Where is a spoon?" }, accept: ["a spoon", "spoonful"], drill: { jp: "Det er ei skje", en: "That is a spoon" }, hint: "skj is the BROAD hush — plain English \"sh\": SHEH. Feminine: definite skjea." },
        { id: "no-u1l4-eiskjorte", type: "vocab", front: "ei skjorte", reading: "eiskjorte", meaning: "shirt", example: { jp: "Jeg kjøper ei skjorte.", en: "I am buying a shirt." }, accept: ["a shirt", "blouse"], drill: { jp: "Erling kjøper ei skjorte", en: "Erling is buying a shirt" }, hint: "SHOR-te. Feminine: definite skjorta." },
        { id: "no-u1l4-ensjo", type: "vocab", front: "en sjø", reading: "ensjo", meaning: "lake", example: { jp: "Er det en sjø?", en: "Is that a lake?" }, accept: ["sea", "a lake", "the sea"], drill: { jp: "Det er en sjø", en: "That is a lake" }, hint: "sj is the same broad sh as skj: SHUR. Inland it is a lake, at the coast it is the sea." },
        { id: "no-u1l4-etsprak", type: "vocab", front: "et språk", reading: "etsprak", meaning: "language", example: { jp: "Erling lærer et språk.", en: "Erling is learning a language." }, accept: ["a language", "speech"], drill: { jp: "Norsk er et språk", en: "Norwegian is a language" }, hint: "å is a rounded \"aw\", like the vowel in \"more\" — sprawk. It is a letter in its own right and sorts LAST in the alphabet, after æ and ø." },
      ],
    },
    // Lesson 5: UNTOUCHED apart from its canDo — same six words, same order, same six
    // ids. It gets NO GLYPH CARDS and needs none, and that is a fact about the words
    // rather than a shortage of letters: norsk, hyggelig, viktig, billig, meg and deg
    // contain not one æ, ø, å, é, kj, skj or sj between them. Every letter they need
    // the learner already owns, which is why the unit can END here. What they DO
    // carry is two spelling habits taught in words because that is where they live:
    // the silent g of -ig (hyggelig, viktig, billig — learn the ending, not the three
    // words) and the -eg said "ay" (meg, deg, the same trick as jeg in l2).
    {
      id: "no-u1l5",
      unit: 1,
      lesson: 5,
      title: "Ord som beskriver — og meg og deg",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe someone or something — norsk, hyggelig, viktig, billig — and say me and you: Erling kjenner meg og deg. Every letter these six words need, you already own.",
      items: [
        { id: "no-u1l5-norsk", type: "vocab", front: "norsk", reading: "norsk", meaning: "Norwegian", example: { jp: "Norsk er et språk.", en: "Norwegian is a language." }, accept: ["the norwegian language", "in norwegian"], drill: { jp: "Erling og jeg lærer norsk", en: "Erling and I are learning Norwegian" }, hint: "One word for the language and the adjective. Languages are lowercase in Norwegian — norsk, never Norsk." },
        { id: "no-u1l5-hyggelig", type: "vocab", front: "hyggelig", reading: "hyggelig", meaning: "nice", example: { jp: "Erling er hyggelig.", en: "Erling is nice." }, accept: ["pleasant", "friendly", "cosy", "lovely"], drill: { jp: "En kafé i Oslo er hyggelig", en: "A café in Oslo is nice" }, hint: "The g of -ig is silent: HUEG-ge-li. The single most Norwegian compliment there is — warm, easy, good company." },
        { id: "no-u1l5-viktig", type: "vocab", front: "viktig", reading: "viktig", meaning: "important", example: { jp: "Det er viktig å lære norsk.", en: "It is important to learn Norwegian." }, accept: ["significant", "of importance"], drill: { jp: "Norsk er viktig", en: "Norwegian is important" }, hint: "VIK-ti — silent g again. Note how å lære keeps its å here: after an adjective, the infinitive marker stays." },
        { id: "no-u1l5-billig", type: "vocab", front: "billig", reading: "billig", meaning: "cheap", example: { jp: "Ei skjorte er billig.", en: "A shirt is cheap." }, accept: ["inexpensive", "low-priced"], drill: { jp: "Kaffe er billig", en: "Coffee is cheap" }, hint: "BIL-li. Three -ig words, three silent g's — the ending is everywhere, so learn the ending, not the words." },
        { id: "no-u1l5-meg", type: "vocab", front: "meg", reading: "meg", meaning: "me", example: { jp: "Erling kjenner meg.", en: "Erling knows me." }, accept: ["myself"], drill: { jp: "Kari kjenner meg og deg", en: "Kari knows me and you" }, hint: "Spelled -eg, said MY. The same trick as jeg: -eg is pronounced \"ay\", never as written." },
        { id: "no-u1l5-deg", type: "vocab", front: "deg", reading: "deg", meaning: "you (object form)", example: { jp: "Jeg kjenner deg.", en: "I know you." }, accept: ["you", "yourself"], drill: { jp: "Erling gir deg ei skje", en: "Erling gives you a spoon" }, hint: "DYE, rhyming with meg. jeg/meg and du/deg — subject and object, same -eg spelling, same \"ay\" sound." },
      ],
    },
  ],
};
