// NO Unit 1 — Lyder og bokstaver ("Sounds and letters") — A1
// ─────────────────────────────────────────────────────────────────────────────
// First contact with Norwegian. Latin-script languages collapse Strand A to ONE
// unit (BUILD-BRIEF-language-blueprint.md §1): not letter drills, but the
// sound-to-spelling map an English reader gets wrong — æ ø å, the kj/skj/sj hush
// sounds, the letters you write and never say (hv-, final -d, the g in og/jeg),
// the silent g in -ig, and -eg said "ay". Every rule is taught THROUGH a real
// word the learner keeps, never through a bare letter. (Modelled on
// src/data/es/unit1.js. Do NOT model a sounds unit on fr/unit4 — French's sounds
// unit drifted toward bare-letter cards and is the counter-example.)
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
//    `musikk` are not, and `briller`, `bukser`, `sokker` join `penger` as
//    plural-only. Decide by the sense you are teaching, say which sense in the
//    hint, and do not expect the rule to decide for you.
//
// 2. VERBS ARE HEADWORDED IN THE INFINITIVE, WITH ITS MARKER: `å snakke`.
//    The parallel to rule 1 — the noun carries its gender marker, the verb
//    carries its infinitive marker. It is the dictionary citation form, and it
//    pays for itself immediately: Norwegian present tense is infinitive + -r for
//    EVERY person (å snakke → jeg/du/han/vi/de snakker), so one taught form is
//    the whole present tense. The -r form appears in examples, never as a card.
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
//        viktig å        u1l4    u1l4      "Det er viktig å lære norsk."      6
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
//    collides with `går`, the present of `å gå` (u1l1). All four are single
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
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT1 = {
  id: "no-u1",
  lang: "no",
  title: "Lyder og bokstaver",
  order: 1,
  stage: "a1",
  lessons: [
    // Lesson 1: the three letters that come after z — æ, ø, å.
    {
      id: "no-u1l1",
      unit: 1,
      lesson: 1,
      title: "Æ, ø and å",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the three letters English does not have — æ, ø, å — and say what something is: Erling er norsk.",
      items: [
        { id: "no-u1l1-avaere", type: "vocab", front: "å være", reading: "avaere", meaning: "to be", example: { jp: "Erling er norsk.", en: "Erling is Norwegian." }, accept: ["be", "to exist"], hint: "æ is the a of \"cat\", and it is the rarest of the three extra letters. Present tense is er for EVERY person: jeg er, du er, vi er — one form, no endings to learn." },
        { id: "no-u1l1-alaere", type: "vocab", front: "å lære", reading: "alaere", meaning: "to learn", example: { jp: "Erling lærer norsk.", en: "Erling is learning Norwegian." }, accept: ["learn", "to teach", "to study"], hint: "The å in front is the infinitive marker — Norwegian's \"to\". Every verb card carries it, so you meet å on every single verb you learn." },
        { id: "no-u1l1-norsk", type: "vocab", front: "norsk", reading: "norsk", meaning: "Norwegian", example: { jp: "Norsk er et språk.", en: "Norwegian is a language." }, accept: ["the norwegian language", "in norwegian"], hint: "One word for the language and the adjective. Languages are lowercase in Norwegian — norsk, never Norsk." },
        { id: "no-u1l1-etsprak", type: "vocab", front: "et språk", reading: "etsprak", meaning: "language", example: { jp: "Erling lærer et språk.", en: "Erling is learning a language." }, accept: ["a language", "speech"], hint: "å is a rounded \"aw\", like the vowel in \"more\" — sprawk. It is a letter in its own right and sorts LAST in the alphabet, after æ and ø." },
        { id: "no-u1l1-eioy", type: "vocab", front: "ei øy", reading: "eioy", meaning: "island", example: { jp: "Er Norge ei øy?", en: "Is Norway an island?" }, accept: ["an island", "isle"], hint: "ø is the \"er\" of \"her\" said with rounded lips. ei marks a FEMININE noun and the definite is øya. You will also meet these written en øy / øyen — Bokmål allows both, and plenty of print uses the en form. This course always writes ei, because ei tells you the definite ends in -a and en does not tell you anything." },
        { id: "no-u1l1-aga", type: "vocab", front: "å gå", reading: "aga", meaning: "to go", example: { jp: "Erling går.", en: "Erling is leaving." }, accept: ["go", "to walk", "walk", "to leave"], hint: "Two å's, both long: aw-GAW. It covers walking and leaving on foot — and it is the verb inside hvordan går det, \"how's it going\"." },
      ],
    },
    // Lesson 2: the letters you write and never say — hv-, final -d, the g in og/jeg.
    {
      id: "no-u1l2",
      unit: 1,
      lesson: 2,
      title: "Letters you write but never say",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask what and where, and read the silent letters that hide in the commonest words — hv-, final -d, and the g of og and jeg.",
      items: [
        { id: "no-u1l2-hva", type: "vocab", front: "hva", reading: "hva", meaning: "what", example: { jp: "Hva er det?", en: "What is that?" }, accept: ["what?"], hint: "Say VA. Every question word starting hv- drops the h — hva, hvor, hvem, hvordan all begin with a plain v sound." },
        { id: "no-u1l2-det", type: "vocab", front: "det", reading: "det", meaning: "it", example: { jp: "Det er norsk.", en: "That is Norwegian." }, accept: ["that", "this", "there"], hint: "The t is silent and the vowel is long: DEH. It is the workhorse word — it, that, and the \"it\" in \"it is raining\"." },
        { id: "no-u1l2-hvor", type: "vocab", front: "hvor", reading: "hvor", meaning: "where", example: { jp: "Hvor er Erling?", en: "Where is Erling?" }, accept: ["where?", "how"], hint: "VOR — silent h again. With an adjective it means \"how\": hvor gammel, how old." },
        { id: "no-u1l2-god", type: "vocab", front: "god", reading: "god", meaning: "good", example: { jp: "Det er en god kafé.", en: "That is a good café." }, accept: ["nice", "fine"], hint: "The d is silent and the o is a long oo: GOO. A final d is silent in most short words — god, med, ved." },
        { id: "no-u1l2-og", type: "vocab", front: "og", reading: "og", meaning: "and", example: { jp: "Erling og jeg lærer norsk.", en: "Erling and I are learning Norwegian." }, accept: ["plus", "as well as"], hint: "The g is silent — it sounds exactly like å. Two letters, one of them decorative." },
        { id: "no-u1l2-jeg", type: "vocab", front: "jeg", reading: "jeg", meaning: "I", example: { jp: "Jeg lærer norsk.", en: "I am learning Norwegian." }, accept: [], hint: "Said YAY — the j is a y sound and the g is silent. Norwegian j is always the y of \"yes\", never the j of \"jam\"." },
      ],
    },
    // Lesson 3: the hush sounds — kj, skj, sj.
    {
      id: "no-u1l3",
      unit: 1,
      lesson: 3,
      title: "kj, skj and sj",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Tell apart the two hushing sounds that no English spelling prepares you for — the thin kj and the broad skj/sj — and buy something.",
      items: [
        { id: "no-u1l3-akjope", type: "vocab", front: "å kjøpe", reading: "akjope", meaning: "to buy", example: { jp: "Jeg kjøper ei skje.", en: "I am buying a spoon." }, accept: ["buy", "to purchase", "purchase"], hint: "kj is a thin, breathy hiss — the h of \"huge\", not \"k\". Say HYUR-pe. k before i or y does the same: kino sounds like HYEE-no." },
        { id: "no-u1l3-etkjokken", type: "vocab", front: "et kjøkken", reading: "etkjokken", meaning: "kitchen", example: { jp: "Det er et kjøkken.", en: "That is a kitchen." }, accept: ["a kitchen"], hint: "HYUR-ken. Neuter, so the definite is kjøkkenet — the kitchen." },
        { id: "no-u1l3-akjenne", type: "vocab", front: "å kjenne", reading: "akjenne", meaning: "to know", example: { jp: "Jeg kjenner Erling.", en: "I know Erling." }, accept: ["know", "to know a person", "to feel", "to recognize"], hint: "For knowing PEOPLE and places you have met. Same thin kj: HYEN-ne." },
        { id: "no-u1l3-eiskje", type: "vocab", front: "ei skje", reading: "eiskje", meaning: "spoon", example: { jp: "Hvor er ei skje?", en: "Where is a spoon?" }, accept: ["a spoon", "spoonful"], hint: "skj is the BROAD hush — plain English \"sh\": SHEH. Feminine: definite skjea." },
        { id: "no-u1l3-eiskjorte", type: "vocab", front: "ei skjorte", reading: "eiskjorte", meaning: "shirt", example: { jp: "Jeg kjøper ei skjorte.", en: "I am buying a shirt." }, accept: ["a shirt", "blouse"], hint: "SHOR-te. Feminine: definite skjorta." },
        { id: "no-u1l3-ensjo", type: "vocab", front: "en sjø", reading: "ensjo", meaning: "lake", example: { jp: "Er det en sjø?", en: "Is that a lake?" }, accept: ["sea", "a lake", "the sea"], hint: "sj is the same broad sh as skj: SHUR. Inland it is a lake, at the coast it is the sea." },
      ],
    },
    // Lesson 4: the g that vanishes (-ig), the -eg that says "ay", and the g that turns into j.
    {
      id: "no-u1l4",
      unit: 1,
      lesson: 4,
      title: "Silent g in -ig, and -eg said \"ay\"",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the -ig ending that so many Norwegian adjectives take, say me and you, and describe someone: Erling er veldig hyggelig.",
      items: [
        { id: "no-u1l4-hyggelig", type: "vocab", front: "hyggelig", reading: "hyggelig", meaning: "nice", example: { jp: "Erling er hyggelig.", en: "Erling is nice." }, accept: ["pleasant", "friendly", "cosy", "lovely"], hint: "The g of -ig is silent: HUEG-ge-li. The single most Norwegian compliment there is — warm, easy, good company." },
        { id: "no-u1l4-viktig", type: "vocab", front: "viktig", reading: "viktig", meaning: "important", example: { jp: "Det er viktig å lære norsk.", en: "It is important to learn Norwegian." }, accept: ["significant", "of importance"], hint: "VIK-ti — silent g again. Note how å lære keeps its å here: after an adjective, the infinitive marker stays." },
        { id: "no-u1l4-billig", type: "vocab", front: "billig", reading: "billig", meaning: "cheap", example: { jp: "Ei skjorte er billig.", en: "A shirt is cheap." }, accept: ["inexpensive", "low-priced"], hint: "BIL-li. Three -ig words, three silent g's — the ending is everywhere, so learn the ending, not the words." },
        { id: "no-u1l4-meg", type: "vocab", front: "meg", reading: "meg", meaning: "me", example: { jp: "Erling kjenner meg.", en: "Erling knows me." }, accept: ["myself"], hint: "Spelled -eg, said MY. The same trick as jeg: -eg is pronounced \"ay\", never as written." },
        { id: "no-u1l4-deg", type: "vocab", front: "deg", reading: "deg", meaning: "you (object form)", example: { jp: "Jeg kjenner deg.", en: "I know you." }, accept: ["you", "yourself"], hint: "DYE, rhyming with meg. jeg/meg and du/deg — subject and object, same -eg spelling, same \"ay\" sound." },
        { id: "no-u1l4-agi", type: "vocab", front: "å gi", reading: "agi", meaning: "to give", example: { jp: "Jeg gir Erling ei skje.", en: "I give Erling a spoon." }, accept: ["give", "to hand", "hand over"], hint: "g before i or y turns into a y sound: YEE. Same in gi, gift, gynge — but hard before a, o, u and å: god is GOO." },
      ],
    },
  ],
};
