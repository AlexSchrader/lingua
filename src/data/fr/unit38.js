// FR Unit 38 — Personality and character (slot: personality) — A2
// The first A2 thematic unit of block 2. SCOPE BOUNDARY (deliberate): A1 Unit 24
// already taught eight trait adjectives (gentil, sympa, drôle, timide, sérieux,
// intelligent, méchant, fort), and the A2 "feelings and states" slot (Unit 29,
// block 1) owns transient emotion. So this unit stays on STABLE CHARACTER: the
// traits themselves, their opposites, the language for describing a person
// (avoir l'air, ressembler à, connaître), and for getting on with them.
// Conventions: see fr/unit1.js. Every example uses A1 vocab (Units 1–27) only —
// block 1's Units 28–37 are authored in parallel and are NOT assumed here.
//
// SCOPE RULE THIS BLOCK APPLIES (Units 38–47), stated once here: a word is in
// scope for an example if its LEXEME is taught at or before that unit. Regular
// inflections of a taught verb or adjective therefore count — les défauts from
// le défaut, elle parle from je parle, ils dorment from je dors — because A1
// already authors this way ("Le film commence" in Unit 23, with only je commence
// taught). A NEW lexeme never counts. The two irregular feminines the block
// leans on that A1 never showed (beau → belle, long → longue) are glossed by
// hint at first use, per the Unit 1 convention for function words.
export const FR_UNIT38 = {
  id: "fr-u38",
  lang: "fr",
  title: "Le caractère",
  order: 38,
  stage: "a2",
  lessons: [
    {
      id: "fr-u38l1",
      unit: 38,
      lesson: 1,
      title: "Good qualities",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what someone is like as a person: généreux, honnête, patient, poli, curieux.",
      items: [
        { id: "fr-u38l1-lecaractere", type: "vocab", front: "le caractère", reading: "lecaractere", meaning: "character (personality)", example: { jp: "Marie a un caractère très fort.", en: "Marie has a very strong character." }, accept: ["temperament", "character", "the character", "nature"], hint: "Le caractère is what a person is LIKE. (It has a second, unrelated life as a typed character — 8 caractères minimum on a password field.)" },
        { id: "fr-u38l1-genereux", type: "vocab", front: "généreux", reading: "genereux", meaning: "generous", example: { jp: "Mon père est généreux avec tout le monde.", en: "My father is generous with everyone." }, accept: ["giving", "big-hearted"], hint: "For a woman: généreuse. Most -eux adjectives swap to -euse." },
        { id: "fr-u38l1-honnete", type: "vocab", front: "honnête", reading: "honnete", meaning: "honest", example: { jp: "C'est un homme honnête.", en: "He's an honest man." }, accept: ["truthful", "sincere", "fair"], hint: "The h is silent, so un homme honnête runs together — the n links straight into the vowel." },
        { id: "fr-u38l1-patient", type: "vocab", front: "patient", reading: "patient", meaning: "patient", example: { jp: "Le professeur est très patient avec les enfants.", en: "The teacher is very patient with the children." }, accept: ["calm", "tolerant"] },
        { id: "fr-u38l1-poli", type: "vocab", front: "poli", reading: "poli", meaning: "polite", example: { jp: "Il est toujours poli avec les clients.", en: "He is always polite with the customers." }, accept: ["courteous", "well mannered", "well-mannered"] },
        { id: "fr-u38l1-curieux", type: "vocab", front: "curieux", reading: "curieux", meaning: "curious", example: { jp: "Les enfants sont curieux de tout.", en: "Children are curious about everything." }, accept: ["inquisitive", "nosy", "interested"] },
      ],
    },
    {
      id: "fr-u38l2",
      unit: 38,
      lesson: 2,
      title: "Faults and failings",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name someone's faults as well as their good points: un défaut, paresseux, égoïste, bavard, jaloux.",
      items: [
        { id: "fr-u38l2-ledefaut", type: "vocab", front: "le défaut", reading: "ledefaut", meaning: "flaw", example: { jp: "Tout le monde a des défauts.", en: "Everyone has flaws." }, accept: ["fault", "weakness", "shortcoming", "the flaw"] },
        { id: "fr-u38l2-laqualite", type: "vocab", front: "la qualité", reading: "laqualite", meaning: "good point", example: { jp: "Mon frère a beaucoup de qualités.", en: "My brother has a lot of good points." }, accept: ["quality", "strength", "virtue", "the quality"], hint: "Les qualités of a person are their GOOD points — the exact opposite of les défauts." },
        { id: "fr-u38l2-paresseux", type: "vocab", front: "paresseux", reading: "paresseux", meaning: "lazy", example: { jp: "Le dimanche, je suis un peu paresseux.", en: "On Sundays I'm a bit lazy." }, accept: ["idle", "work-shy"] },
        { id: "fr-u38l2-egoiste", type: "vocab", front: "égoïste", reading: "egoiste", meaning: "selfish", example: { jp: "Il est égoïste : il ne donne jamais rien.", en: "He's selfish: he never gives anything." }, accept: ["self-centred", "self-centered", "self centred"], hint: "One form for both genders — un garçon égoïste, une fille égoïste." },
        { id: "fr-u38l2-bavard", type: "vocab", front: "bavard", reading: "bavard", meaning: "talkative", example: { jp: "Ma sœur est très bavarde ; elle parle beaucoup.", en: "My sister is very talkative; she talks a lot." }, accept: ["chatty", "talkative (person)"] },
        { id: "fr-u38l2-jaloux", type: "vocab", front: "jaloux", reading: "jaloux", meaning: "jealous", example: { jp: "Mon frère est jaloux de mon nouveau vélo.", en: "My brother is jealous of my new bike." }, accept: ["envious"], hint: "jaloux → jalouse. And you are jaloux DE something, never \"jaloux pour\"." },
      ],
    },
    {
      id: "fr-u38l3",
      unit: 38,
      lesson: 3,
      title: "Describing a person",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe someone from the outside in: tu as l'air fatigué, je ressemble à ma mère, je connais ta sœur.",
      items: [
        { id: "fr-u38l3-avoirlair", type: "vocab", front: "avoir l'air", reading: "avoirlair", meaning: "to seem", example: { jp: "Tu as l'air fatigué aujourd'hui.", en: "You seem tired today." }, accept: ["to look", "to look like", "to appear", "to seem to be"], hint: "Literally \"to have the air\". It works like avoir: j'ai l'air, tu as l'air, il a l'air." },
        { id: "fr-u38l3-jeressemblea", type: "vocab", front: "je ressemble à", reading: "jeressemblea", meaning: "I look like", example: { jp: "Je ressemble à ma mère.", en: "I look like my mother." }, accept: ["i resemble", "i take after", "i look like (someone)"], hint: "Always with à: je ressemble à mon père. Never \"je ressemble mon père\"." },
        { id: "fr-u38l3-jeconnais", type: "vocab", front: "je connais", reading: "jeconnais", meaning: "I know (a person)", example: { jp: "Je connais très bien ta sœur.", en: "I know your sister very well." }, accept: ["i am familiar with", "i know", "i'm acquainted with"], hint: "French has two verbs for \"know\": je sais a FACT, je connais a PERSON or a place." },
        { id: "fr-u38l3-lapersonnalite", type: "vocab", front: "la personnalité", reading: "lapersonnalite", meaning: "personality", example: { jp: "Elle a une personnalité très forte.", en: "She has a very strong personality." }, accept: ["character", "the personality"] },
        { id: "fr-u38l3-courageux", type: "vocab", front: "courageux", reading: "courageux", meaning: "brave", example: { jp: "Ma mère est très courageuse.", en: "My mother is very brave." }, accept: ["courageous", "bold", "gutsy"] },
        { id: "fr-u38l3-sage", type: "vocab", front: "sage", reading: "sage", meaning: "well-behaved", example: { jp: "Les enfants sont sages aujourd'hui.", en: "The children are well-behaved today." }, accept: ["good", "well behaved", "wise", "good (child)"], hint: "Of a child it means well-behaved; of an adult, wise." },
      ],
    },
    {
      id: "fr-u38l4",
      unit: 38,
      lesson: 4,
      title: "Getting along",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the people around you: je m'entends bien avec mon voisin, c'est une personne agréable.",
      items: [
        { id: "fr-u38l4-jementendsbienavec", type: "vocab", front: "je m'entends bien avec", reading: "jementendsbienavec", meaning: "I get along well with", example: { jp: "Je m'entends bien avec mes parents.", en: "I get along well with my parents." }, accept: ["i get on well with", "i get along with", "i get on with"], hint: "Literally \"I hear myself well with\" — the everyday way to say you get on with someone." },
        { id: "fr-u38l4-lerespect", type: "vocab", front: "le respect", reading: "lerespect", meaning: "respect", example: { jp: "Le respect est important dans une famille.", en: "Respect is important in a family." }, accept: ["the respect", "regard"], hint: "Goes with la confiance below — the two things a good relationship runs on." },
        { id: "fr-u38l4-lapersonne", type: "vocab", front: "la personne", reading: "lapersonne", meaning: "the person", example: { jp: "Il y a trois personnes dans le magasin.", en: "There are three people in the shop." }, accept: ["person", "individual", "the person"], hint: "Careful: la personne = a person, but personne on its own (Unit 21) means nobody." },
        { id: "fr-u38l4-agreable", type: "vocab", front: "agréable", reading: "agreable", meaning: "pleasant", example: { jp: "Cette personne est très agréable.", en: "This person is very pleasant." }, accept: ["nice", "enjoyable", "likeable"] },
        { id: "fr-u38l4-penible", type: "vocab", front: "pénible", reading: "penible", meaning: "tiresome", example: { jp: "Ce garçon est très pénible.", en: "That boy is very tiresome." }, accept: ["annoying", "a pain", "difficult", "hard going"], hint: "Said of a person, pénible is the polite-ish way to call them a pain." },
        { id: "fr-u38l4-laconfiance", type: "vocab", front: "la confiance", reading: "laconfiance", meaning: "trust", example: { jp: "J'ai confiance en toi.", en: "I trust you." }, accept: ["confidence", "faith", "the trust"], hint: "avoir confiance EN quelqu'un = to trust someone. The noun does the work English does with a verb." },
      ],
    },
  ],
};
