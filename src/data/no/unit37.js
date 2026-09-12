// NO Unit 37 — Grammatikk 5: ønsker og sammenligning ("Grammar 5 — conditionals, ability, comparison") — A2
// Conventions per no/unit1.js §1-§8. Grammar as function-word vocab; drill stays simple.
//
// TWO NEW SYSTEMS. (1) The conditional: Norwegian has no separate 'would' form — it
// uses the PRETERITE of the modal (ville, skulle, kunne, burde, måtte) plus an
// infinitive, often a bare past participle (jeg ville reist). These are taught as
// chunks, the way A1 taught kjøpte and gikk, with the hint naming the å-infinitive
// each comes from. (2) Comparison: A1 gave stor and god but no way to compare them;
// this unit supplies the comparative (-ere / irregular større, bedre) and the
// superlative (størst, best) — absent from the corpus until now.
//
// SCOPE: enn (than) is A1 and is used, not re-taught. The modal preterites are the
// conditional forms of A1's å ville / å kunne / å skulle / å burde / å måtte — a new
// grammatical form of a known word, not a re-teach; u38/u39 drill LEXICAL verbs and
// deliberately leave the modals here.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT37 = {
  id: "no-u37",
  lang: "no",
  title: "Grammatikk 5: ønsker og sammenligning",
  order: 37,
  stage: "a2",
  lessons: [
    {
      id: "no-u37l1",
      unit: 37,
      lesson: 1,
      title: "What I would do",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you would, could or should do — ville, skulle, kunne, burde, måtte — and ask politely with gjerne.",
      items: [
        { id: "no-u37l1-ville", type: "vocab", front: "ville", reading: "ville", meaning: "would", example: { jp: "Jeg ville reist mer hvis jeg hadde bedre tid.", en: "I would travel more if I had more time." }, accept: ["would (want to)"], drill: { jp: "Jeg ville gjort det", en: "I would do it" }, hint: "The preterite of å ville (A1, to want), used for the conditional 'would'. Add a verb: jeg ville reist, I would travel." },
        { id: "no-u37l1-skulle", type: "vocab", front: "skulle", meaning: "should", reading: "skulle", example: { jp: "Jeg skulle gjerne blitt lenger, men jeg må dra nå.", en: "I would love to have stayed longer, but I have to leave now." }, accept: ["would", "was going to"], drill: { jp: "Jeg skulle sagt det", en: "I should have said it" }, hint: "The preterite of å skulle (A1, shall). skulle gjerne = would love to; jeg skulle sagt = I should have said." },
        { id: "no-u37l1-kunne", type: "vocab", front: "kunne", reading: "kunne", meaning: "could", example: { jp: "Kunne du hjulpet meg med leksene i kveld?", en: "Could you help me with the homework tonight?" }, accept: ["would be able to", "might"], drill: { jp: "Jeg kunne gjort det", en: "I could do it" }, hint: "The preterite of å kunne (A1). Kunne du...? is the polite way to ask a favour." },
        { id: "no-u37l1-burde", type: "vocab", front: "burde", reading: "burde", meaning: "ought to", example: { jp: "Du burde sovet mer, for du ser sliten ut.", en: "You should have slept more, because you look tired." }, accept: ["should", "had better"], drill: { jp: "Du burde spurt læreren", en: "You should have asked the teacher" }, hint: "The preterite of å burde (A1, should). Softer than må: a piece of advice, not an order." },
        { id: "no-u37l1-matte", type: "vocab", front: "måtte", reading: "matte", meaning: "would have to", example: { jp: "Hvis det regnet, måtte vi blitt inne hele dagen.", en: "If it rained, we would have to stay in all day." }, accept: ["had to", "would need to"], drill: { jp: "Da måtte jeg gå", en: "Then I would have to go" }, hint: "The preterite of å måtte (A1, must). In a hypothetical it is 'would have to'; about the real past, simply 'had to'." },
        { id: "no-u37l1-gjerne", type: "vocab", front: "gjerne", reading: "gjerne", meaning: "gladly", example: { jp: "Jeg vil gjerne ha en kopp kaffe, takk.", en: "I'd like a cup of coffee, please." }, accept: ["with pleasure", "would like to"], drill: { jp: "Jeg vil gjerne hjelpe", en: "I'd gladly help" }, hint: "gj is a y sound: YAER-ne. It turns vil into a polite request — vil gjerne = would like. The natural answer to an offer, too: 'Ja, gjerne!'" },
      ],
    },
    {
      id: "no-u37l2",
      unit: 37,
      lesson: 2,
      title: "Bigger, better, worse",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Compare two things — større, bedre, verre, mindre, mer, eldre — using enn for 'than'.",
      items: [
        { id: "no-u37l2-storre", type: "vocab", front: "større", reading: "storre", meaning: "bigger", example: { jp: "Oslo er mye større enn byen jeg bor i.", en: "Oslo is much bigger than the town I live in." }, accept: ["larger"], drill: { jp: "Huset er større enn før", en: "The house is bigger than before" }, hint: "The comparative of stor (A1). Irregular — the vowel changes, like English big/bigger. 'Than' is enn (A1)." },
        { id: "no-u37l2-bedre", type: "vocab", front: "bedre", reading: "bedre", meaning: "better", example: { jp: "Denne boka er bedre enn filmen, synes jeg.", en: "This book is better than the film, I think." }, accept: ["improved"], drill: { jp: "I dag er været bedre", en: "Today the weather is better" }, hint: "The comparative of god (A1) — never 'godere'. good → better, exactly like English. The superlative is best." },
        { id: "no-u37l2-verre", type: "vocab", front: "verre", reading: "verre", meaning: "worse", example: { jp: "Trafikken er verre om morgenen enn om kvelden.", en: "The traffic is worse in the morning than in the evening." }, accept: ["more badly"], drill: { jp: "Været blir verre", en: "The weather is getting worse" }, hint: "The comparative of vond / dårlig — never 'dårligere' in this sense. bad → worse. Superlative verst." },
        { id: "no-u37l2-mindre", type: "vocab", front: "mindre", reading: "mindre", meaning: "smaller", example: { jp: "Leiligheten min er mindre enn din, men den er billigere.", en: "My flat is smaller than yours, but it's cheaper." }, accept: ["less", "littler"], drill: { jp: "Denne er mindre enn den", en: "This one is smaller than that" }, hint: "The comparative of liten (A1, small) and of lite (little). You met it inside med mindre, 'unless' (u36)." },
        { id: "no-u37l2-mer", type: "vocab", front: "mer", reading: "mer", meaning: "more", example: { jp: "Jeg trenger mer tid enn jeg trodde for å bli ferdig.", en: "I need more time than I thought to get finished." }, accept: ["more of"], drill: { jp: "Jeg vil ha mer kaffe", en: "I want more coffee" }, hint: "The comparative of mye (A1, much). For countables use flere (more, in number): flere bøker, more books." },
        { id: "no-u37l2-eldre", type: "vocab", front: "eldre", reading: "eldre", meaning: "older", example: { jp: "Broren min er tre år eldre enn meg.", en: "My brother is three years older than me." }, accept: ["elder"], drill: { jp: "Hun er eldre enn han", en: "She is older than him" }, hint: "The comparative of gammel (A1). Irregular: the vowel changes and the -mm- drops. Superlative eldst." },
      ],
    },
    {
      id: "no-u37l3",
      unit: 37,
      lesson: 3,
      title: "The most and the least",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Pick out the top and the bottom — størst, best, verst, minst, mest, flest.",
      items: [
        { id: "no-u37l3-storst", type: "vocab", front: "størst", reading: "storst", meaning: "biggest", example: { jp: "Dette er den største byen i landet.", en: "This is the biggest city in the country." }, accept: ["largest"], drill: { jp: "Det er det største huset", en: "It's the biggest house" }, hint: "The superlative of stor. With 'the', it takes -e and an article: den største byen, the biggest city." },
        { id: "no-u37l3-best", type: "vocab", front: "best", reading: "best", meaning: "best", example: { jp: "Han er den beste læreren jeg har hatt.", en: "He is the best teacher I've had." }, accept: ["the best"], drill: { jp: "Dette er den beste boka", en: "This is the best book" }, hint: "The superlative of god — never 'godest'. good → better → best, exactly like English." },
        { id: "no-u37l3-verst", type: "vocab", front: "verst", reading: "verst", meaning: "worst", example: { jp: "Mandag er den verste dagen i uka for meg.", en: "Monday is the worst day of the week for me." }, accept: ["the worst"], drill: { jp: "Det var det verste", en: "That was the worst" }, hint: "The superlative of vond / dårlig. bad → worse → worst: verre, verst." },
        { id: "no-u37l3-minst", type: "vocab", front: "minst", reading: "minst", meaning: "smallest", example: { jp: "Hun er den minste i klassen, men også den raskeste.", en: "She is the smallest in the class, but also the fastest." }, accept: ["least", "at least"], drill: { jp: "Det er det minste rommet", en: "It's the smallest room" }, hint: "The superlative of liten. Also 'at least': minst ti stykker, at least ten." },
        { id: "no-u37l3-mest", type: "vocab", front: "mest", reading: "mest", meaning: "most", example: { jp: "Det er dette jeg liker mest av alt.", en: "This is what I like most of all." }, accept: ["the most"], drill: { jp: "Hun jobber mest", en: "She works the most" }, hint: "The superlative of mye. Also builds the superlative of long adjectives: mest interessant, most interesting." },
        { id: "no-u37l3-flest", type: "vocab", front: "flest", reading: "flest", meaning: "most (in number)", example: { jp: "De fleste barna liker å leke ute.", en: "Most of the children like to play outside." }, accept: ["the most", "most people"], drill: { jp: "De fleste liker det", en: "Most people like it" }, hint: "The superlative of mange (A1, many) — for countable things. de fleste = most people. Comparative flere." },
      ],
    },
    {
      id: "no-u37l4",
      unit: 37,
      lesson: 4,
      title: "How much, roughly",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Grade a statement — altfor, ganske, nesten, omtrent, i hvert fall, heller.",
      items: [
        { id: "no-u37l4-altfor", type: "vocab", front: "altfor", reading: "altfor", meaning: "far too", example: { jp: "Det er altfor dyrt, så jeg kjøper det ikke.", en: "It's far too expensive, so I'm not buying it." }, accept: ["much too", "way too"], drill: { jp: "Det er altfor varmt", en: "It's far too warm" }, hint: "alt + for — 'all too'. Stronger than for alone: for dyrt is 'too expensive', altfor dyrt is 'way too expensive'." },
        { id: "no-u37l4-ganske", type: "vocab", front: "ganske", reading: "ganske", meaning: "quite", example: { jp: "Filmen var ganske god, men litt for lang.", en: "The film was quite good, but a bit too long." }, accept: ["fairly", "rather", "pretty"], drill: { jp: "Det er ganske kaldt", en: "It's quite cold" }, hint: "ganske = fairly / pretty. Weaker than veldig (A1, very): ganske god is 'pretty good', not 'very good'." },
        { id: "no-u37l4-nesten", type: "vocab", front: "nesten", reading: "nesten", meaning: "almost", example: { jp: "Jeg er nesten ferdig, så vent litt til.", en: "I'm almost finished, so wait a little longer." }, accept: ["nearly", "practically"], drill: { jp: "Klokka er nesten fem", en: "It's almost five o'clock" }, hint: "nesten = almost. nesten aldri, almost never; nesten alltid, almost always." },
        { id: "no-u37l4-omtrent", type: "vocab", front: "omtrent", reading: "omtrent", meaning: "about", example: { jp: "Det tar omtrent en time å gå dit.", en: "It takes about an hour to walk there." }, accept: ["approximately", "roughly", "around"], drill: { jp: "Det er omtrent ti", en: "It's about ten" }, hint: "omtrent = roughly, with a number. A synonym is cirka, often written ca." },
        { id: "no-u37l4-ihvertfall", type: "vocab", front: "i hvert fall", reading: "ihvertfall", meaning: "at any rate", example: { jp: "Jeg kommer, i hvert fall hvis været er greit.", en: "I'm coming, at any rate if the weather is okay." }, accept: ["at least", "anyway", "in any case"], drill: { jp: "Jeg prøver i hvert fall", en: "I'll try at any rate" }, hint: "From hvert (every) + fall (case). Also spelled iallfall. Means 'at least / in any case'." },
        { id: "no-u37l4-heller", type: "vocab", front: "heller", reading: "heller", meaning: "rather", example: { jp: "Jeg vil heller gå enn å ta bussen i dag.", en: "I'd rather walk than take the bus today." }, accept: ["instead", "sooner"], drill: { jp: "Jeg tar heller te", en: "I'd rather have tea" }, hint: "vil heller = would rather; heller enn = rather than. In a negative it means 'either': ikke jeg heller, me neither." },
      ],
    },
  ],
};
