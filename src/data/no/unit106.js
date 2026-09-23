// NO Unit 106 — Grammatikk 9: det uvirkelige — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Grammar 9 — conditional nuance and counterfactuals". Retitled
// in Norwegian per CLAUDE.md → "No front language". Conventions are unit1.js §1–§9.
//
// ⚠ READ THIS BEFORE ADDING A CONNECTIVE TO THIS UNIT. The obvious way to build a
// conditional unit is to teach conditional CONJUNCTIONS — and Norwegian has spent
// almost all of them before B2. Measured against the corpus while authoring:
//   hvis (u12) · dersom (u29) · med mindre (u29) · i tilfelle (u36) · så sant (u36)
//   hvis ikke (u36) · uansett (u36) · som om (u36) · selv om (u29) · enten (u29)
//   ellers (u29) · til tross for (u36) · ettersom (u36) · bortsett fra (u36)
// A B2 unit that adds a fifteenth conjunction is a B1 unit with a higher number.
// So this unit teaches the thing those conjunctions cannot express on their own:
// THE UNREAL — the past that did not happen, the wish, and the degrees between
// "yes" and "no". The cards are FORMS and FIXED FRAMES, not more linking words.
//
// WHY THE AUXILIARY COMBINATIONS ARE CARDS. l1 teaches `ville ha`, `kunne ha`,
// `burde ha`, `skulle ha`, `måtte ha` as six separate items. These are modal +
// ha, and each modal is already taught at u13l2. That is deliberate and it has
// this corpus's own precedent: u14 makes `snakket`, `var`, `gikk`, `ble` cards for
// the past tense, u39 makes `har spist`, `har skrevet`, `har fått` cards for the
// perfect, and u70 makes twelve passive forms cards — because Norwegian has no
// conjugation card type (unit12.js), so the ONLY way a grammar unit can teach a
// construction is to make the construction the card. The MEANING of `burde ha`
// is not the sum of burde and ha: it is regret about the past, which neither part
// carries alone. MERGE SEAT / BLOCK 1: do not delete these five as duplicate
// lexemes of the u13 modals. If they go, the band has no counterfactual at all.
//   no-u106l1-villeha · no-u106l1-kunneha · no-u106l1-burdeha ·
//   no-u106l1-skulleha · no-u106l1-matteha
//
// ⚠ THE PARTICIPLES IN THE EXAMPLES ARE ALL TAUGHT ONES, ON PURPOSE. A
// counterfactual needs a perfect participle, and the corpus teaches exactly six as
// fronts (u70l2: betalt, glemt, sendt, valgt, ødelagt, kjent). Every example here
// is built from those. Reaching for an untaught participle — sagt, gjort, vært,
// blitt, visst — is the easy mistake and it breaks §6 silently, because a
// participle looks like an inflection of a verb the learner has.
//
// GENDER: no nouns are taught in this unit at all — it is four lessons of frames
// and adverbials, so §1 does not arise.
//
// SCOPE: frozen base u1–u87 plus u101–u105 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT106 = {
  id: "no-u106",
  lang: "no",
  title: "Grammatikk 9: det uvirkelige",
  order: 106,
  stage: "b2",
  lessons: [
    // Lesson 1: the past that did not happen. Modal + ha + participle, five ways,
    // and each one means something the parts do not.
    {
      id: "no-u106l1",
      unit: 106,
      lesson: 1,
      title: "Det som kunne ha skjedd",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a past that did not happen — what you would have, could have and should have done.",
      items: [
        { id: "no-u106l1-villeha", type: "vocab", front: "ville ha", reading: "villeha", meaning: "would have", example: { jp: "Jeg ville ha valgt et nytt svar.", en: "I would have chosen a new answer." }, accept: ["would've"], drill: { jp: "Han ville ha valgt det samme", en: "He would have chosen the same" }, hint: "⚠ THE RULE OF THIS LESSON: modal + ha + perfect participle builds the unreal past, exactly as English does with would/could/should have. From å ville (u13). In speech the ha is often swallowed — jeg ville valgt — and both are correct." },
        { id: "no-u106l1-kunneha", type: "vocab", front: "kunne ha", reading: "kunneha", meaning: "could have", example: { jp: "Dette kunne ha ødelagt hele avtalen.", en: "This could have destroyed the whole agreement." }, accept: ["might have", "could've"], drill: { jp: "Det kunne ha ødelagt alt", en: "It could have destroyed everything" }, hint: "From å kunne (u13). Two senses, as in English: the ability that was not used (jeg kunne ha hjulpet) and the danger that was avoided (det kunne ha gått galt). The example is the second." },
        { id: "no-u106l1-burdeha", type: "vocab", front: "burde ha", reading: "burdeha", meaning: "ought to have", example: { jp: "Du burde ha sendt brevet i går.", en: "You ought to have sent the letter yesterday." }, accept: ["should have", "should've"], drill: { jp: "Han burde ha sendt svaret", en: "He ought to have sent the answer" }, hint: "⚠ THIS IS THE REGRET ONE. bør is taught bare at u13l2 as a documented exception to §2 (its infinitive å burde is barely usable) — but burde ha is entirely ordinary and is how a Norwegian says \"I should have\"." },
        { id: "no-u106l1-skulleha", type: "vocab", front: "skulle ha", reading: "skulleha", meaning: "was supposed to have", example: { jp: "Vi skulle ha kjent regelen fra før.", en: "We were supposed to have known the rule already." }, accept: ["was meant to have", "ought to have (by arrangement)"], drill: { jp: "Hun skulle ha kjent regelen", en: "She was supposed to have known the rule" }, hint: "From å skulle (u13). ⚠ NOT THE SAME AS burde ha. burde ha is a moral judgement; skulle ha is about a PLAN or an arrangement that did not hold — toget skulle ha gått klokka ni." },
        { id: "no-u106l1-matteha", type: "vocab", front: "måtte ha", reading: "matteha", meaning: "must have (deduction)", example: { jp: "Han måtte ha glemt avtalen.", en: "He must have forgotten the appointment." }, accept: ["must've", "had to have"], drill: { jp: "Hun måtte ha glemt tida", en: "She must have forgotten the time" }, hint: "⚠ A CONCLUSION, NOT AN OBLIGATION. Plain måtte is compulsion (jeg måtte gå); måtte ha is you working out what happened from the evidence. Same split as English \"must\", and the past participle is what marks it." },
        { id: "no-u106l1-ombare", type: "vocab", front: "om bare", reading: "ombare", meaning: "if only", example: { jp: "Om bare han kunne komme i kveld.", en: "If only he could come tonight." }, accept: ["if only it were", "would that"], drill: { jp: "Om bare vi hadde mer tid", en: "If only we had more time" }, hint: "The wish frame, and it takes the PAST tense for a present wish — om bare vi hadde tid means we do not have it now. English does the same thing with \"if only I had\". Also written bare … hadde, with bare after the verb." },
      ],
    },
    // Lesson 2: wanting it to have been otherwise. l1 was the grammar; this is
    // what people actually say with it.
    {
      id: "no-u106l2",
      unit: 106,
      lesson: 2,
      title: "Ønske og anger",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Express a wish and a regret — what you wish were so, and how it looks to you now that it is too late.",
      items: [
        { id: "no-u106l2-skulleonske", type: "vocab", front: "skulle ønske", reading: "skulleonske", meaning: "I wish", example: { jp: "Jeg skulle ønske at du var her.", en: "I wish you were here." }, accept: ["wish that", "would wish"], drill: { jp: "Jeg skulle ønske at du kom", en: "I wish you would come" }, hint: "⚠ THE STANDARD WAY TO SAY \"I WISH\", and it is fixed: always skulle, never vil. From å ønske (u20). The clause after it takes the past tense for a present wish, exactly like om bare in l1. Note the ø fold (§3): skulleonske." },
        { id: "no-u106l2-tenkom", type: "vocab", front: "tenk om", reading: "tenkom", meaning: "imagine if", example: { jp: "Tenk om vi hadde mer tid!", en: "Imagine if we had more time!" }, accept: ["what if", "suppose that"], drill: { jp: "Tenk om han kommer i kveld", en: "Imagine if he comes tonight" }, hint: "An imperative of å tenke (u22) frozen into a frame. Works for the lovely and the dreadful alike — tenk om vi vinner and tenk om det går galt — so tone carries the meaning, not the words." },
        { id: "no-u106l2-omdetikkevarfor", type: "vocab", front: "om det ikke var for", reading: "omdetikkevarfor", meaning: "if it were not for", example: { jp: "Om det ikke var for deg, klarte vi det ikke.", en: "If it were not for you, we would not manage it." }, accept: ["but for", "were it not for"], drill: { jp: "Om det ikke var for deg", en: "If it were not for you" }, hint: "A fixed frame built on var, the past of å være (u1). ⚠ NOTE THE WORD ORDER IN THE MAIN CLAUSE: the whole om-clause counts as the first element, so the verb comes SECOND — … var for deg, KLARTE vi det ikke (§4)." },
        { id: "no-u106l2-iettertid", type: "vocab", front: "i ettertid", reading: "iettertid", meaning: "in hindsight", example: { jp: "I ettertid ser jeg at valget var feil.", en: "In hindsight I see that the choice was wrong." }, accept: ["looking back", "with hindsight", "afterwards"], drill: { jp: "I ettertid var det en feil", en: "In hindsight it was a mistake" }, hint: "etter + tid. ⚠ BOTH EXAMPLES SHOW V2 (§4): the fronted adverbial pushes the subject behind the verb — I ettertid SER jeg, I ettertid VAR det. Getting that wrong is the single most audible learner error in Norwegian." },
        { id: "no-u106l2-annerledes", type: "vocab", front: "annerledes", reading: "annerledes", meaning: "differently", example: { jp: "Jeg ville ha valgt annerledes.", en: "I would have chosen differently." }, accept: ["in another way", "otherwise"], drill: { jp: "Alt ser annerledes ut nå", en: "Everything looks different now" }, hint: "An adverb, and invariant — it never takes an ending. ⚠ ALSO USED AS AN ADJECTIVE after a verb: han er annerledes means he is different, and there is no annerledest or annerledese." },
        { id: "no-u106l2-omsa", type: "vocab", front: "om så", reading: "omsa", meaning: "even if it means", example: { jp: "Jeg skal klare det, om så det tar hele året.", en: "I will manage it, even if it takes the whole year." }, accept: ["even if", "though it cost"], drill: { jp: "Jeg gjør det om så det koster", en: "I will do it even if it costs" }, hint: "Concession pushed to its limit: not merely \"even though\" but \"even at that price\". Compare selv om (u29), which simply grants a fact; om så raises the stakes and dares them." },
      ],
    },
    // Lesson 3: conditions with a hedge built in. The register of a contract, an
    // email from an office, and a careful promise.
    {
      id: "no-u106l3",
      unit: 106,
      lesson: 3,
      title: "Betingelser og forbehold",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Make a conditional promise in a formal register — what you agree to, on what condition, and what happens if it fails.",
      items: [
        { id: "no-u106l3-gittat", type: "vocab", front: "gitt at", reading: "gittat", meaning: "given that", example: { jp: "Gitt at alt går bra, er vi ferdige i mai.", en: "Given that everything goes well, we are finished in May." }, accept: ["assuming that", "granted that"], drill: { jp: "Gitt at vi har tid nok", en: "Given that we have enough time" }, hint: "The participle of å gi (u1) used as a conjunction — the same move English makes with \"given\". ⚠ V2 AGAIN: the gitt at-clause is the first element, so the main clause inverts — Gitt at alt går bra, ER vi ferdige (§4)." },
        { id: "no-u106l3-forutsattat", type: "vocab", front: "forutsatt at", reading: "forutsattat", meaning: "on condition that", example: { jp: "Du får plassen, forutsatt at du svarer i dag.", en: "You get the place, on condition that you answer today." }, accept: ["providing that", "as long as (condition)"], drill: { jp: "Forutsatt at du svarer i dag", en: "On condition that you answer today" }, hint: "for + ut + satt, from å sette (u77) — set out in advance. ⚠ HEAVIER THAN så sant (u36): så sant is conversational, forutsatt at belongs in writing and carries the sense that the condition is binding." },
        { id: "no-u106l3-medforbeholdom", type: "vocab", front: "med forbehold om", reading: "medforbeholdom", meaning: "subject to", example: { jp: "Vi sier ja, med forbehold om at prisen står.", en: "We say yes, subject to the price holding." }, accept: ["with the reservation that", "conditional upon"], drill: { jp: "Vi svarer ja med forbehold om endringer", en: "We answer yes subject to changes" }, hint: "Built on et forbehold (u73). The formal way to agree while keeping a way out — the phrase on a Norwegian offer letter, a building estimate and a weather forecast alike." },
        { id: "no-u106l3-imotsattfall", type: "vocab", front: "i motsatt fall", reading: "imotsattfall", meaning: "failing that", example: { jp: "Send svaret i dag. I motsatt fall taper du plassen.", en: "Send the answer today. Failing that, you lose the place." }, accept: ["otherwise", "if not", "in the opposite case"], drill: { jp: "I motsatt fall må vi vente", en: "Failing that, we have to wait" }, hint: "motsatt (u53) + fall, a case. The formal twin of ellers (u29). ⚠ A WARNING IN OFFICIAL NORWEGIAN — when a letter from an office says i motsatt fall, what follows is the consequence of not doing as asked." },
        { id: "no-u106l3-ibestefall", type: "vocab", front: "i beste fall", reading: "ibestefall", meaning: "at best", example: { jp: "I beste fall blir vi ferdige i mai.", en: "At best we will be finished in May." }, accept: ["optimistically", "at the most"], drill: { jp: "I beste fall tar det ei uke", en: "At best it takes a week" }, hint: "Uses beste, the irregular superlative of god (u53). Paired with i verste fall below — Norwegian uses the two together constantly to bracket a range without committing to a number." },
        { id: "no-u106l3-iverstefall", type: "vocab", front: "i verste fall", reading: "iverstefall", meaning: "at worst", example: { jp: "I verste fall taper vi alt.", en: "At worst we lose everything." }, accept: ["in the worst case", "pessimistically"], drill: { jp: "I verste fall blir det dyrt", en: "At worst it will be expensive" }, hint: "verste is the superlative of vond (u53) — vond, verre, verst. Both this and i beste fall front the sentence and so force V2: I verste fall TAPER vi alt (§4)." },
      ],
    },
    // Lesson 4: the space between yes and no. Not conditions but DEGREES, which is
    // where B2 precision actually lives.
    {
      id: "no-u106l4",
      unit: 106,
      lesson: 4,
      title: "Grader og tilnærminger",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Answer with a degree instead of a yes or no — largely, to an extent, so to speak, or very nearly.",
      items: [
        { id: "no-u106l4-naerveda", type: "vocab", front: "nær ved å", reading: "naerveda", meaning: "on the verge of", example: { jp: "Hun var nær ved å si nei til hele avtalen.", en: "She was on the verge of saying no to the whole agreement." }, accept: ["close to", "about to", "within an ace of"], drill: { jp: "Han var nær ved å gi opp", en: "He was on the verge of giving up" }, hint: "nær (u20) + ved + å. ⚠ ONE OF THE FEW FRAMES THAT KEEPS THE å, which is why it can carry a drill at all — a modal would swallow it (§5). The thing very nearly happened and did not." },
        { id: "no-u106l4-saasi", type: "vocab", front: "så å si", reading: "saasi", meaning: "so to speak", example: { jp: "Arbeidet er så å si ferdig nå.", en: "The work is so to speak finished now." }, accept: ["as good as", "practically", "virtually"], drill: { jp: "Boka er så å si ferdig", en: "The book is as good as finished" }, hint: "Literally \"so to say\". ⚠ TWO SENSES AND NORWEGIAN USES BOTH: hedging a figure of speech (as English does) and meaning \"virtually, all but\" — the example is the second, which is the commoner one." },
        { id: "no-u106l4-langtpavei", type: "vocab", front: "langt på vei", reading: "langtpavei", meaning: "largely", example: { jp: "Jeg er langt på vei enig med deg.", en: "I largely agree with you." }, accept: ["to a great extent", "for the most part"], drill: { jp: "Vi er langt på vei ferdige nå", en: "We are largely finished now" }, hint: "Literally \"far along the road\". The polite Norwegian way to agree without agreeing completely, and it is far more common in speech than stort sett (u54), which is more about frequency than degree." },
        { id: "no-u106l4-tilenvissgrad", type: "vocab", front: "til en viss grad", reading: "tilenvissgrad", meaning: "to a certain extent", example: { jp: "Det stemmer til en viss grad, men ikke helt.", en: "That is true to a certain extent, but not entirely." }, accept: ["up to a point", "partially"], drill: { jp: "Jeg er enig til en viss grad", en: "I agree to a certain extent" }, hint: "viss means \"a certain\" in the sense of unspecified. ⚠ THE SET-UP FOR A BUT: a Norwegian who says til en viss grad is about to disagree with the rest, and the men is coming." },
        { id: "no-u106l4-pasettogvis", type: "vocab", front: "på sett og vis", reading: "pasettogvis", meaning: "in a manner of speaking", example: { jp: "På sett og vis hadde han rett hele tida.", en: "In a manner of speaking he was right all along." }, accept: ["in a way", "sort of"], drill: { jp: "På sett og vis er det sant", en: "In a manner of speaking it is true" }, hint: "sett and vis both mean \"way\", doubled for emphasis — Norwegian is fond of these paired formulas. More considered than på en måte (u73), which is closer to a shrug. Fronting it forces V2: På sett og vis HADDE han rett (§4)." },
        { id: "no-u106l4-forsavidt", type: "vocab", front: "for så vidt", reading: "forsavidt", meaning: "in a sense", example: { jp: "Du har for så vidt rett, men saken er større.", en: "You are right in a sense, but the matter is bigger." }, accept: ["as far as that goes", "admittedly"], drill: { jp: "Det er for så vidt et godt svar", en: "It is in a sense a good answer" }, hint: "⚠ A CONCESSION WITH A RESERVATION INSIDE IT: it grants the point while signalling the speaker is not finished. Very frequent in spoken Norwegian and almost impossible to translate the same way twice." },
      ],
    },
  ],
};
