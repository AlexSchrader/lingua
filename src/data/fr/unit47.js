// FR Unit 47 — Vocabulary 1 (A2) (slot: coverage-a2-1) — A2
// The first of the A2 coverage units (Strand D): not a theme, but a frequency
// pass over what the thematic units left out.
//
// Lesson 1 is the most important thing in the block. OBJECT PRONOUNS (le, la,
// les, lui, leur, y) are top-50 frequency in French and no slot in the pathway
// owns them — the A2 grammar slots are clauses (Unit 43) and conditionals /
// comparison (Unit 44). They are taught here as verb-chunks rather than as a
// bare pronoun list for a hard schema reason as well as a pedagogical one: the
// fronts le / la / les are already taught as articles in A1 Units 2 and 26, and
// a word front gets exactly one home (contract.js). Chunking also teaches the
// thing that actually trips learners up — the pronoun goes BEFORE the verb.
// Conventions: see fr/unit1.js. Examples use A1 vocab plus Units 38–46.
export const FR_UNIT47 = {
  id: "fr-u47",
  lang: "fr",
  title: "Les petits mots",
  order: 47,
  stage: "a2",
  lessons: [
    {
      id: "fr-u47l1",
      unit: 47,
      lesson: 1,
      title: "Saying it without saying it",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Replace a noun you've already named: je le vois, je la connais, je lui parle, j'y vais.",
      items: [
        { id: "fr-u47l1-jelevois", type: "vocab", front: "je le vois", reading: "jelevois", meaning: "I see him", example: { jp: "Mon frère ? Je le vois demain.", en: "My brother? I'm seeing him tomorrow." }, drill: { jp: "Je le vois demain matin", en: "I see him tomorrow morning" }, accept: ["i see it", "i'm seeing him", "i see him"], hint: "The pronoun goes BEFORE the verb — je le vois, never \"je vois le\". le = him/it, la = her/it, les = them." },
        { id: "fr-u47l1-jelaconnais", type: "vocab", front: "je la connais", reading: "jelaconnais", meaning: "I know her", example: { jp: "Cette femme ? Je la connais bien.", en: "That woman? I know her well." }, accept: ["i know it", "i know her"] },
        { id: "fr-u47l1-jelesprends", type: "vocab", front: "je les prends", reading: "jelesprends", meaning: "I'll take them", example: { jp: "Ces pommes ? Je les prends.", en: "These apples? I'll take them." }, accept: ["i take them", "i'm taking them"], hint: "The everyday way to buy something: point, then je les prends." },
        { id: "fr-u47l1-jeluiparle", type: "vocab", front: "je lui parle", reading: "jeluiparle", meaning: "I speak to him", example: { jp: "Je lui parle tous les jours.", en: "I speak to him every day." }, accept: ["i talk to him", "i speak to her", "i'm talking to him"], hint: "lui = TO him or TO her. When the verb already needs à (parler à, répondre à), you use lui, not le/la." },
        { id: "fr-u47l1-jeleurdonne", type: "vocab", front: "je leur donne", reading: "jeleurdonne", meaning: "I give them", example: { jp: "Je leur donne le livre.", en: "I give them the book." }, accept: ["i give to them", "i'm giving them"], hint: "leur is the plural of lui — to them. Nothing to do with leur meaning \"their\" (Unit 26)." },
        { id: "fr-u47l1-jyvais", type: "vocab", front: "j'y vais", reading: "jyvais", meaning: "I'm going there", example: { jp: "Le marché ? J'y vais demain.", en: "The market? I'm going there tomorrow." }, accept: ["i go there", "i'm off there", "i'm going"], hint: "y stands in for a place already mentioned. On y va ! is how everyone says \"let's go\"." },
      ],
    },
    {
      id: "fr-u47l2",
      unit: 47,
      lesson: 2,
      title: "Verbs you need every day",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle the small moments: j'attends le bus, je demande le prix, j'essaie de parler français.",
      items: [
        { id: "fr-u47l2-jattends", type: "vocab", front: "j'attends", reading: "jattends", meaning: "I wait", example: { jp: "J'attends mon frère devant la gare.", en: "I'm waiting for my brother in front of the station." }, accept: ["i'm waiting", "i wait for", "i'm waiting for"], hint: "No preposition: j'attends le bus. French never says \"attendre pour\"." },
        { id: "fr-u47l2-jedemande", type: "vocab", front: "je demande", reading: "jedemande", meaning: "I ask", example: { jp: "Je demande le prix.", en: "I ask the price." }, accept: ["i'm asking", "i request", "i ask for"], hint: "False friend: demander is to ASK. It never means to demand." },
        { id: "fr-u47l2-jexplique", type: "vocab", front: "j'explique", reading: "jexplique", meaning: "I explain", example: { jp: "J'explique la règle à mes amis.", en: "I explain the rule to my friends." }, accept: ["i'm explaining", "i explain to"] },
        { id: "fr-u47l2-jessaie", type: "vocab", front: "j'essaie", reading: "jessaie", meaning: "I try", example: { jp: "J'essaie de parler français.", en: "I try to speak French." }, accept: ["i'm trying", "i attempt"], hint: "essayer DE + verb: j'essaie de comprendre." },
        { id: "fr-u47l2-jechange", type: "vocab", front: "je change", reading: "jechange", meaning: "I change", example: { jp: "Je change de train à Paris.", en: "I change trains in Paris." }, accept: ["i'm changing", "i swap"], hint: "changer DE + noun when you swap one for another: je change de train, je change d'avis." },
        { id: "fr-u47l2-joublie", type: "vocab", front: "j'oublie", reading: "joublie", meaning: "I forget", example: { jp: "J'oublie toujours mon mot de passe.", en: "I always forget my password." }, accept: ["i'm forgetting", "i forget about"] },
      ],
    },
    {
      id: "fr-u47l3",
      unit: 47,
      lesson: 3,
      title: "Words that fit anywhere",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Reach for the all-purpose nouns: beaucoup de choses, au début, à la fin, de ce côté.",
      items: [
        { id: "fr-u47l3-lachose", type: "vocab", front: "la chose", reading: "lachose", meaning: "the thing", example: { jp: "J'ai beaucoup de choses à faire.", en: "I have a lot of things to do." }, accept: ["thing", "stuff", "the thing"], hint: "quelque chose = something — literally \"some thing\"." },
        { id: "fr-u47l3-lapartie", type: "vocab", front: "la partie", reading: "lapartie", meaning: "the part", example: { jp: "Cette partie du film est longue.", en: "This part of the film is long." }, drill: { jp: "La partie est très longue", en: "The part is very long" }, accept: ["part", "portion", "section"], hint: "longue is the feminine of long (Unit 16) — the u keeps the g hard." },
        { id: "fr-u47l3-ledebut", type: "vocab", front: "le début", reading: "ledebut", meaning: "the beginning", example: { jp: "Au début, c'était difficile.", en: "At the beginning it was difficult." }, accept: ["start", "the start", "beginning"], hint: "au début = at first — one of the most useful two-word phrases in French." },
        { id: "fr-u47l3-lafin", type: "vocab", front: "la fin", reading: "lafin", meaning: "the end", example: { jp: "À la fin de la semaine, je pars.", en: "At the end of the week, I leave." }, accept: ["end", "ending", "the ending"], hint: "Careful: la fin (the end) and la faim (hunger, Unit 9) sound exactly alike." },
        { id: "fr-u47l3-lecote", type: "vocab", front: "le côté", reading: "lecote", meaning: "the side", example: { jp: "Ma chambre est de ce côté.", en: "My room is on this side." }, drill: { jp: "Le côté est très grand", en: "The side is very big" }, accept: ["side", "way", "the side"], hint: "à côté de = next to — literally \"at the side of\"." },
        { id: "fr-u47l3-lefait", type: "vocab", front: "le fait", reading: "lefait", meaning: "the fact", example: { jp: "Ce n'est pas une idée, c'est un fait.", en: "It's not an idea, it's a fact." }, accept: ["fact", "the fact"], hint: "en fait (Unit 36) is \"in fact\" — same little word doing the same job." },
      ],
    },
    {
      id: "fr-u47l4",
      unit: 47,
      lesson: 4,
      title: "Possible, useful, necessary",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Judge whether something works: ce n'est pas possible, ce site est très utile, tu es sûr ?",
      items: [
        { id: "fr-u47l4-possible", type: "vocab", front: "possible", reading: "possible", meaning: "possible", example: { jp: "Ce n'est pas possible aujourd'hui.", en: "That's not possible today." }, accept: ["feasible", "doable"] },
        { id: "fr-u47l4-impossible", type: "vocab", front: "impossible", reading: "impossible", meaning: "impossible", example: { jp: "C'est impossible pour moi.", en: "That's impossible for me." }, accept: ["not possible", "undoable"] },
        { id: "fr-u47l4-utile", type: "vocab", front: "utile", reading: "utile", meaning: "useful", example: { jp: "Ce site est très utile.", en: "This website is very useful." }, accept: ["helpful", "handy", "of use"] },
        { id: "fr-u47l4-necessaire", type: "vocab", front: "nécessaire", reading: "necessaire", meaning: "necessary", example: { jp: "Il n'est pas nécessaire de partir.", en: "It isn't necessary to leave." }, accept: ["needed", "required", "essential"], hint: "Pairs with il faut (Unit 36): il est nécessaire de partir says the same thing as il faut partir." },
        { id: "fr-u47l4-simple", type: "vocab", front: "simple", reading: "simple", meaning: "simple", example: { jp: "La règle est très simple.", en: "The rule is very simple." }, accept: ["easy", "straightforward", "plain"] },
        { id: "fr-u47l4-sur", type: "vocab", front: "sûr", reading: "sur", meaning: "sure", example: { jp: "Tu es sûr ?", en: "Are you sure?" }, accept: ["certain", "safe", "positive"], hint: "Watch the hat: sûr (sure/safe) vs sur (on, Unit 17). It's the sûr inside bien sûr (Unit 10) — \"well, sure\"." },
      ],
    },
  ],
};
