// NO Unit 58 — Abstrakte begreper ("Abstract ideas") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Abstract ideas"; retitled per CLAUDE.md → "No front
// language". Conventions: unit1.js §1–§9 (language) + unit51.js B1–B8 (band).
//
// ⚠ A2's u50 "Vanlige begreper" ALREADY TOOK the everyday abstract nouns — en
// måte, ei sak, et tilfelle, en hensikt, en sammenheng, en tanke, en forskjell,
// ei betydning, en verdi, en mulighet, ei erfaring, kunnskap, en teori. So u58
// goes one storey up: the vocabulary for talking about IDEAS AS OBJECTS (l1),
// the MIND that holds them (l2), the NECESSITY that constrains them (l3), and
// the line between what is REAL and what merely looks real (l4).
//
// ⚠ THREE DERIVATIONS WERE REJECTED HERE under unit51.js B2 and are named so the
// next seat does not re-propose them: `ei sannsynlighet` (← sannsynlig, u54),
// `ei nødvendighet` (← nødvendig, taught) and `ei tolkning` (← å tolke, taught).
// All three are transparent: a learner who owns the base already owns them.
//
// ⚠ `en skjebne`, `en innsikt` and `en framgang` (u59) are marked MASCULINE, not
// ei, even though Bokmål permits the feminine. unit1.js §1 marks ei as a PROMISE
// that the definite ends in -a, and for these three the -en form is overwhelmingly
// what is written and said — skjebnen, innsikten. Marking ei would make the
// promise on a form the learner will almost never meet. The -ing/-ning class is
// different and stays ei, because there the -a form is genuinely current.
//
// FIRST FEMININE of the unit is `ei evne` (l2) and it carries the en-/ei-
// recognition note unit51.js B4 requires.
//
// ø IN `reading` IS HAND-FOLDED TO o (unit1.js §3): en drøm → "endrom".
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT58 = {
  id: "no-u58",
  lang: "no",
  title: "Abstrakte begreper",
  order: 58,
  stage: "b1",
  lessons: [
    // Lesson 1: an idea as a thing you can pick up and turn over. en idé is the
    // one word in the whole Norwegian course that NEEDS its é, so it is taught
    // here rather than left to a hint.
    {
      id: "no-u58l1",
      unit: 58,
      lesson: 1,
      title: "Ideer og begreper",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle an idea as a thing — name a concept and an idea, state the principle behind it, point at its core and its content, and say what it covers.",
      items: [
        { id: "no-u58l1-etbegrep", type: "vocab", front: "et begrep", reading: "etbegrep", meaning: "concept", example: { jp: "Et begrep er en tanke du kan bruke.", en: "A concept is a thought you can use." }, drill: { jp: "Dette er et begrep vi bruker", en: "This is a concept we use" }, accept: ["a term", "a notion", "an idea", "a concept"], hint: "be-GREP. Neuter: definite begrepet, plural begreper. Å gripe is to grasp, and be-grep is what you have grasped. Å ha begrep om noe is to have a grasp of it." },
        { id: "no-u58l1-enide", type: "vocab", front: "en idé", reading: "enide", meaning: "idea", example: { jp: "Han fikk en idé under en lang tur.", en: "He got an idea during a long walk." }, drill: { jp: "Hun fikk en idé i går", en: "She got an idea yesterday" }, accept: ["a notion", "a thought", "a plan", "an idea"], hint: "i-DE — the é carries the stress, which is exactly what that accent is for. Masculine: definite idéen, plural idéer. ⚠ One of the very few Norwegian words that genuinely needs é: without it, ide would be read EE-de." },
        { id: "no-u58l1-etprinsipp", type: "vocab", front: "et prinsipp", reading: "etprinsipp", meaning: "principle", example: { jp: "Et prinsipp er viktigere enn en regel.", en: "A principle is more important than a rule." }, drill: { jp: "Dette er et prinsipp vi følger", en: "This is a principle we follow" }, accept: ["a tenet", "a rule of conduct", "a principle"], hint: "prin-SIPP. Neuter: definite prinsippet, plural prinsipper. ⚠ I prinsippet means \"in principle\", i.e. in theory only — and av prinsipp means you are doing it because it is right, not because it works." },
        { id: "no-u58l1-enkjerne", type: "vocab", front: "en kjerne", reading: "enkjerne", meaning: "core", example: { jp: "En kjerne i saka er penger.", en: "A core issue in the matter is money." }, drill: { jp: "En kjerne i saka er tid", en: "A core issue in the matter is time" }, accept: ["the heart of it", "a kernel", "the nucleus", "a core"], hint: "HYER-ne — kj is the thin hiss, as in å kjøpe. Masculine: definite kjernen, plural kjerner. Literally the pit of a fruit or the kernel of a nut, and used for the heart of a problem just as English uses \"core\"." },
        { id: "no-u58l1-etinnhold", type: "vocab", front: "et innhold", reading: "etinnhold", meaning: "content", example: { jp: "Et innhold er viktigere enn en form.", en: "Content matters more than form." }, drill: { jp: "Et innhold er viktig her", en: "Content matters here" }, accept: ["contents", "substance", "what is inside", "the content"], hint: "INN-hold. Neuter: definite innholdet, and no plural. Inn plus hold, holding — what is held inside. It covers the contents of a bag, a book and an argument alike." },
        { id: "no-u58l1-aomfatte", type: "vocab", front: "å omfatte", reading: "aomfatte", meaning: "to comprise", example: { jp: "Kurset omfatter alt du trenger.", en: "The course comprises everything you need." }, drill: { jp: "Det pleier å omfatte alt", en: "It usually comprises everything" }, accept: ["include", "to cover", "to encompass", "comprise"], hint: "OM-fat-te. Om plus fatte, to grasp — to take it all in around. Present omfatter, past omfattet. Formal and very common in writing: prisen omfatter frokost, the price includes breakfast." },
      ],
    },
    // Lesson 2: the mind that holds the ideas. bevisst and oppmerksom are adjacent
    // because English covers both with "aware" and Norwegian does not — one is a
    // state you are in, the other is attention you are paying.
    {
      id: "no-u58l2",
      unit: 58,
      lesson: 2,
      title: "Tanke og fornuft",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the mind — name reason and ability, say you are conscious of something or paying close attention, and speak about a dream and a soul.",
      items: [
        { id: "no-u58l2-enfornuft", type: "vocab", front: "en fornuft", reading: "enfornuft", meaning: "reason", example: { jp: "Fornuften sier at vi må vente litt.", en: "Reason says that we have to wait a bit." }, drill: { jp: "En fornuft er ikke nok her", en: "Reason is not enough here" }, accept: ["sense", "rationality", "common sense", "good judgement"], hint: "for-NUFT. Masculine: definite fornuften, and no plural. Fornuftig is the adjective — sensible, which in Norwegian is real praise. Sunn fornuft is common sense, literally \"healthy reason\"." },
        { id: "no-u58l2-bevisst", type: "vocab", front: "bevisst", reading: "bevisst", meaning: "conscious", example: { jp: "Hun er bevisst på hva hun spiser.", en: "She is conscious of what she eats." }, drill: { jp: "Han er bevisst på hva han sier", en: "He is conscious of what he says" }, accept: ["aware", "deliberate", "conscious of", "knowing"], hint: "be-VISST. Two senses in one word: aware (bevisst PÅ noe) and deliberate (et bevisst valg). Ubevisst is the opposite. It never takes an ending." },
        { id: "no-u58l2-oppmerksom", type: "vocab", front: "oppmerksom", reading: "oppmerksom", meaning: "attentive", example: { jp: "Vær oppmerksom på trafikken her.", en: "Be attentive to the traffic here." }, drill: { jp: "Du må være oppmerksom på trafikken", en: "You have to pay attention to the traffic" }, accept: ["alert", "paying attention", "observant", "mindful"], hint: "OPP-mer-ksom. Opp plus merke, to notice, plus -som. Neuter oppmerksomt, plural oppmerksomme. ⚠ Å gjøre noen oppmerksom på noe is the polite Norwegian way to point something out, and oppmerksomhet is attention." },
        { id: "no-u58l2-eievne", type: "vocab", front: "ei evne", reading: "eievne", meaning: "ability", example: { jp: "Hun har ei evne til å forklare alt godt.", en: "She has an ability to explain everything well." }, drill: { jp: "Han har ei evne vi trenger", en: "He has an ability we need" }, accept: ["a capacity", "an aptitude", "a talent", "an ability"], hint: "EV-ne. Feminine: definite evna, plural evner. You will also see ei evne written en evne / evnen — Bokmål allows both and print uses the en- form a lot; this course writes ei because ei is what tells you the definite ends in -a. ⚠ Always ei evne TIL å gjøre noe." },
        { id: "no-u58l2-endrom", type: "vocab", front: "en drøm", reading: "endrom", meaning: "dream", example: { jp: "Han hadde en drøm om et stort hus.", en: "He had a dream about a big house." }, drill: { jp: "Hun hadde en drøm i natt", en: "She had a dream last night" }, accept: ["an aspiration", "a vision", "a dream"], hint: "DRURM. Masculine: definite drømmen, plural drømmer — ⚠ the m doubles. Å drømme is the verb and drømmejobben is the dream job. One word for the kind you have asleep and the kind you work towards." },
        { id: "no-u58l2-eisjel", type: "vocab", front: "ei sjel", reading: "eisjel", meaning: "soul", example: { jp: "Han spiller musikk med hele sjela.", en: "He plays music with his whole soul." }, drill: { jp: "Ei sjel er ikke en kropp", en: "A soul is not a body" }, accept: ["a spirit", "one's inner self", "a soul"], hint: "SHEL — sj is the broad hush. Feminine: definite sjela, plural sjeler. Ikke ei sjel means \"not a soul\", exactly as in English, and med liv og sjel is with heart and soul." },
      ],
    },
    // Lesson 3: what must be and what may be. umulig is placed against
    // tilstrekkelig deliberately — the two ends of what a plan can demand.
    {
      id: "no-u58l3",
      unit: 58,
      lesson: 3,
      title: "Frihet og nødvendighet",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Weigh what must be against what may be — name freedom and fate, state a condition, call something impossible or quite sufficient, and rule an option out.",
      items: [
        { id: "no-u58l3-enfrihet", type: "vocab", front: "en frihet", reading: "enfrihet", meaning: "freedom", example: { jp: "En frihet for alle er et viktig mål.", en: "Freedom for everyone is an important goal." }, drill: { jp: "En frihet for alle er viktig", en: "Freedom for everyone is important" }, accept: ["liberty", "independence", "freedom"], hint: "FRI-het. Masculine: definite friheten, plural friheter. ⚠ -het is always masculine — there is no *friheta. Fri is the adjective. Ytringsfrihet, which you met in u55, is built on this word." },
        { id: "no-u58l3-enskjebne", type: "vocab", front: "en skjebne", reading: "enskjebne", meaning: "fate", example: { jp: "En skjebne som hans er ikke vanlig.", en: "A fate like his is not common." }, drill: { jp: "En skjebne kan være hard", en: "A fate can be hard" }, accept: ["destiny", "one's lot", "how it turned out", "fate"], hint: "SHEB-ne — skj is the broad hush again. Masculine: definite skjebnen, plural skjebner. It carries the weight English gives \"fate\": en felles skjebne, a shared fate." },
        { id: "no-u58l3-etvilkar", type: "vocab", front: "et vilkår", reading: "etvilkar", meaning: "condition", example: { jp: "Et vilkår i kontrakten er at du jobber her.", en: "One condition in the contract is that you work here." }, drill: { jp: "Et vilkår i kontrakten er viktig", en: "One condition in the contract is important" }, accept: ["a term", "a stipulation", "a requirement", "a condition"], hint: "VIL-kawr. Neuter: definite vilkåret, plural vilkår — no ending. Vil plus kår, circumstances. ⚠ Usually plural in real life: vilkårene are the terms and conditions of a contract." },
        { id: "no-u58l3-umulig", type: "vocab", front: "umulig", reading: "umulig", meaning: "impossible", example: { jp: "Det er umulig å rekke toget nå.", en: "It is impossible to catch the train now." }, drill: { jp: "Det er umulig å svare her", en: "It is impossible to answer here" }, accept: ["not possible", "out of the question", "undoable", "hopeless"], hint: "u-MU-li — silent g. The u- flips mulig over, the same u- you met in uenig and usikker. Neuter umulig, plural umulige. Et umulig menneske is an impossible person, in exactly the English sense." },
        { id: "no-u58l3-tilstrekkelig", type: "vocab", front: "tilstrekkelig", reading: "tilstrekkelig", meaning: "sufficient", example: { jp: "En time er tilstrekkelig for denne oppgaven.", en: "An hour is sufficient for this assignment." }, drill: { jp: "En time er tilstrekkelig her", en: "An hour is sufficient here" }, accept: ["enough", "adequate", "ample", "sufficiently"], hint: "til-STREK-ke-li — silent g. Til plus strekke, to stretch: it stretches far enough. The formal cousin of nok — nok in speech, tilstrekkelig in writing." },
        { id: "no-u58l3-autelukke", type: "vocab", front: "å utelukke", reading: "autelukke", meaning: "to rule out", example: { jp: "Vi kan ikke utelukke at han tar feil.", en: "We cannot rule out that he is wrong." }, drill: { jp: "Det er lett å utelukke en grunn", en: "It is easy to rule out a reason" }, accept: ["rule out", "to exclude", "exclude", "to preclude"], hint: "U-te-luk-ke. Ute plus lukke, to shut — you shut it out. Present utelukker, past utelukket. ⚠ Utelukkende is the adverb and means \"exclusively\", which is a different job entirely." },
      ],
    },
    // Lesson 4: real versus apparent — the payoff of u54's evidentiality lesson.
    // en virkelighet is built on å virke, the verb the learner met there meaning
    // "to seem", and its hint says so: Norwegian gets from seeming to being in two
    // steps and the learner can watch it happen.
    {
      id: "no-u58l4",
      unit: 58,
      lesson: 4,
      title: "Virkelighet og inntrykk",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Tell what is real from what only looks real — name reality and a fact, describe an insight, ask for something concrete, call a common belief a myth, and say you sense something without knowing it.",
      items: [
        { id: "no-u58l4-envirkelighet", type: "vocab", front: "en virkelighet", reading: "envirkelighet", meaning: "reality", example: { jp: "En virkelighet er ofte verre enn en drøm.", en: "Reality is often worse than a dream." }, drill: { jp: "En virkelighet er ofte hard", en: "Reality is often hard" }, accept: ["real life", "actuality", "the real world", "reality"], hint: "VIR-ke-li-het. Masculine: definite virkeligheten, plural virkeligheter. ⚠ -het is always masculine. Built on virkelig, real, which is built on å virke — the verb you met in u54 meaning \"to seem\". Norwegian gets from seeming to being in two steps." },
        { id: "no-u58l4-etfaktum", type: "vocab", front: "et faktum", reading: "etfaktum", meaning: "fact", example: { jp: "Et faktum kan ingen ta fra deg.", en: "Nobody can take a fact away from you." }, drill: { jp: "Dette er et faktum vi kjenner", en: "This is a fact we know" }, accept: ["a given", "something established", "a fact"], hint: "FAK-tum. Neuter: definite faktumet — and ⚠ the plural is the Latin one, fakta. Norwegians use fakta far more than faktum and treat it as a plural: faktaene er klare." },
        { id: "no-u58l4-eninnsikt", type: "vocab", front: "en innsikt", reading: "eninnsikt", meaning: "insight", example: { jp: "En innsikt kommer ofte etter lang tid.", en: "An insight often comes after a long time." }, drill: { jp: "En innsikt kommer ofte sent", en: "An insight often comes late" }, accept: ["understanding", "perception", "a realisation", "insight"], hint: "INN-sikt. Masculine: definite innsikten, plural innsikter. Inn plus sikt, sight — seeing into a thing. ⚠ Å ha innsikt i noe is to understand it from the inside, not merely to know about it." },
        { id: "no-u58l4-konkret", type: "vocab", front: "konkret", reading: "konkret", meaning: "concrete", example: { jp: "Gi meg et konkret eksempel.", en: "Give me a concrete example." }, drill: { jp: "Han ga et konkret eksempel", en: "He gave a concrete example" }, accept: ["specific", "tangible", "definite", "actual"], hint: "kon-KRET. Neuter konkret, plural konkrete. The opposite of abstrakt. ⚠ In a Norwegian meeting it is a request, not a description: vær konkret means \"give me something I can actually act on\"." },
        { id: "no-u58l4-enmyte", type: "vocab", front: "en myte", reading: "enmyte", meaning: "myth", example: { jp: "En myte om Norge er at alle går på ski.", en: "A myth about Norway is that everyone skis." }, drill: { jp: "Dette er en myte mange tror", en: "This is a myth many people believe" }, accept: ["a popular belief", "an old story", "a misconception", "a myth"], hint: "MUE-te. Masculine: definite myten, plural myter. Both senses, exactly as in English: an old story about gods, and a widely believed falsehood." },
        { id: "no-u58l4-aane", type: "vocab", front: "å ane", reading: "aane", meaning: "to sense", example: { jp: "Jeg aner ikke hva han mener.", en: "I have no idea what he means." }, drill: { jp: "Det er lett å ane et problem", en: "It is easy to sense a problem" }, accept: ["suspect", "to have an inkling", "to have a clue", "sense"], hint: "A-ne. Present aner, past ante. ⚠ You will hear it far more often in the negative: jeg aner ikke is the everyday \"I have no idea\". Ei anelse is a hunch, and ikke den fjerneste anelse is \"not the faintest\"." },
      ],
    },
  ],
};
