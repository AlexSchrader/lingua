// FR Unit 43 — Grammar 4 — compound and linked clauses (slot: grammar-4) — A2
// A1 taught single clauses; this unit joins two of them. Grammar has no item
// type here either (CLAUDE.md) — every linker is authored as function-word vocab
// whose example sentence carries the pattern, exactly as Units 21/23/26 did.
//
// SCOPE BOUNDARY (deliberate): block 1's Unit 36 is "connecting words", so this
// unit deliberately takes the SUBORDINATORS — the words that hang one clause off
// another (pendant que, dès que, car, puisque, ce que, dont) — and leaves the
// simple sentence-adverb connectors (pourtant, cependant, enfin, puis) to 36.
// The two sets overlap at the edges; see the block hand-back note.
//
// Fronts qui / que / où / si / quand / parce que / donc / alors are NOT re-taught:
// A1 owns them (Units 2, 21, 24, 10, 21), and a word gets one home. Their CLAUSE
// uses are shown in the examples here instead.
// Conventions: see fr/unit1.js. Examples use A1 vocab plus Units 38–42.
export const FR_UNIT43 = {
  id: "fr-u43",
  lang: "fr",
  title: "Grammar 4 — compound and linked clauses",
  order: 43,
  stage: "a2",
  lessons: [
    {
      id: "fr-u43l1",
      unit: 43,
      lesson: 1,
      title: "The one that…",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Point at something without repeating its name: celui de Marie, ce que je veux, le film dont je parle.",
      items: [
        { id: "fr-u43l1-celui", type: "vocab", front: "celui", reading: "celui", meaning: "the one (masculine)", example: { jp: "Quel livre ? Celui de Marie.", en: "Which book? Marie's." }, accept: ["that one", "this one", "the one"], hint: "celui stands in for a masculine noun you've already named — celui de Marie, celui de mon frère." },
        { id: "fr-u43l1-celle", type: "vocab", front: "celle", reading: "celle", meaning: "the one (feminine)", example: { jp: "Quelle voiture ? Celle de mon père.", en: "Which car? My father's." }, accept: ["that one", "this one", "the one"] },
        { id: "fr-u43l1-ceux", type: "vocab", front: "ceux", reading: "ceux", meaning: "the ones", example: { jp: "Ceux de mon frère sont ici.", en: "My brother's are here." }, accept: ["those", "those ones", "the ones"], hint: "The plural of celui. For feminine things: celles." },
        { id: "fr-u43l1-ceque", type: "vocab", front: "ce que", reading: "ceque", meaning: "what (as object)", example: { jp: "C'est ce que je veux.", en: "That's what I want." }, accept: ["that which", "the thing that", "what"], hint: "\"What\" inside a sentence is ce que — never quoi. Je sais ce que tu veux." },
        { id: "fr-u43l1-cequi", type: "vocab", front: "ce qui", reading: "cequi", meaning: "what (as subject)", example: { jp: "Ce qui est important, c'est la famille.", en: "What matters is family." }, accept: ["that which", "the thing that", "what"], hint: "ce qui when the next word is the verb; ce que when a subject comes first. ce qui est important / ce que je veux." },
        { id: "fr-u43l1-dont", type: "vocab", front: "dont", reading: "dont", meaning: "whose", example: { jp: "C'est le film dont je parle.", en: "That's the film I'm talking about." }, accept: ["of which", "about which", "that about"], hint: "dont replaces de + noun. je parle DE ce film → le film DONT je parle." },
      ],
    },
    {
      id: "fr-u43l2",
      unit: 43,
      lesson: 2,
      title: "Two things at once",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put two clauses in time order: pendant que je travaille, avant de partir, dès que j'arrive.",
      items: [
        { id: "fr-u43l2-pendantque", type: "vocab", front: "pendant que", reading: "pendantque", meaning: "while", example: { jp: "Je travaille pendant que les enfants dorment.", en: "I work while the children sleep." }, accept: ["whilst", "as", "while"], hint: "pendant QUE links two clauses. Without que, pendant just takes a noun." },
        { id: "fr-u43l2-depuisque", type: "vocab", front: "depuis que", reading: "depuisque", meaning: "since", example: { jp: "Depuis que j'habite ici, je suis content.", en: "Since I've lived here, I've been happy." }, accept: ["ever since", "from the time", "since"] },
        { id: "fr-u43l2-avantde", type: "vocab", front: "avant de", reading: "avantde", meaning: "before (doing)", example: { jp: "Je regarde mes mails avant de partir.", en: "I check my emails before leaving." }, accept: ["prior to", "before"], hint: "avant de + the plain verb: avant de manger, avant de partir." },
        { id: "fr-u43l2-apresavoir", type: "vocab", front: "après avoir", reading: "apresavoir", meaning: "after (doing)", example: { jp: "Après avoir mangé, je pars.", en: "After eating, I leave." }, accept: ["after having", "having", "after"], hint: "Not the mirror of avant de: it's après + AVOIR + the participle. après avoir mangé." },
        { id: "fr-u43l2-desque", type: "vocab", front: "dès que", reading: "desque", meaning: "as soon as", example: { jp: "Dès que j'arrive, je vais manger.", en: "As soon as I arrive, I'm going to eat." }, accept: ["the moment", "once", "as soon as"] },
        { id: "fr-u43l2-lorsque", type: "vocab", front: "lorsque", reading: "lorsque", meaning: "when", example: { jp: "Lorsque je suis fatigué, je ne travaille pas.", en: "When I'm tired, I don't work." }, accept: ["whenever", "at the time when", "when"], hint: "Exactly quand's meaning, one step more formal — commoner in writing than in speech." },
      ],
    },
    {
      id: "fr-u43l3",
      unit: 43,
      lesson: 3,
      title: "Why and what for",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give a reason or a purpose: car je suis malade, grâce à mon professeur, à cause de la pluie, afin de partir tôt.",
      items: [
        { id: "fr-u43l3-car", type: "vocab", front: "car", reading: "car", meaning: "because", example: { jp: "Je reste à la maison, car je suis malade.", en: "I'm staying home, because I'm ill." }, accept: ["for", "since", "as"], hint: "car and parce que both mean because — but car never starts a sentence, and only parce que can answer pourquoi ?" },
        { id: "fr-u43l3-puisque", type: "vocab", front: "puisque", reading: "puisque", meaning: "since (as we know)", example: { jp: "Puisque tu es là, on va manger.", en: "Since you're here, we'll eat." }, accept: ["as", "seeing that", "given that", "since"], hint: "puisque gives a reason you both already know; parce que gives news." },
        { id: "fr-u43l3-gracea", type: "vocab", front: "grâce à", reading: "gracea", meaning: "thanks to", example: { jp: "Grâce à mon professeur, je parle français.", en: "Thanks to my teacher, I speak French." }, accept: ["owing to", "thanks to", "on the strength of"], hint: "grâce à is for a GOOD outcome, à cause de for a bad one. French makes you pick a side." },
        { id: "fr-u43l3-acausede", type: "vocab", front: "à cause de", reading: "acausede", meaning: "because of", example: { jp: "Je ne sors pas à cause de la pluie.", en: "I'm not going out because of the rain." }, accept: ["owing to", "due to", "on account of"] },
        { id: "fr-u43l3-afinde", type: "vocab", front: "afin de", reading: "afinde", meaning: "in order to", example: { jp: "Je pars tôt afin de voir ma mère.", en: "I leave early in order to see my mother." }, accept: ["so as to", "in order that", "to"], hint: "The formal twin of pour + verb: afin de partir = pour partir." },
        { id: "fr-u43l3-cestpourquoi", type: "vocab", front: "c'est pourquoi", reading: "cestpourquoi", meaning: "that's why", example: { jp: "Il pleut ; c'est pourquoi je reste ici.", en: "It's raining; that's why I'm staying here." }, accept: ["which is why", "that is why", "so"] },
      ],
    },
    {
      id: "fr-u43l4",
      unit: 43,
      lesson: 4,
      title: "Saying what someone said",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Report what other people say: il dit que c'est bon, il demande si tu es là, selon mon père…",
      items: [
        { id: "fr-u43l4-ilditque", type: "vocab", front: "il dit que", reading: "ilditque", meaning: "he says that", example: { jp: "Il dit que le film est bon.", en: "He says the film is good." }, accept: ["she says that", "he says", "he tells"], hint: "French can never drop the que. English says \"he says it's good\"; French must say il dit QUE c'est bon." },
        { id: "fr-u43l4-ildemandesi", type: "vocab", front: "il demande si", reading: "ildemandesi", meaning: "he asks whether", example: { jp: "Il demande si tu es là.", en: "He's asking whether you're there." }, accept: ["he asks if", "she asks whether", "he wants to know if"], hint: "Inside a reported question, a yes/no question becomes si — never est-ce que." },
        { id: "fr-u43l4-ilrepondque", type: "vocab", front: "il répond que", reading: "ilrepondque", meaning: "he answers that", example: { jp: "Elle répond qu'elle est fatiguée.", en: "She answers that she's tired." }, accept: ["he replies that", "she answers that", "he says in reply"], hint: "que shrinks to qu' before a vowel: elle répond qu'elle est fatiguée." },
        { id: "fr-u43l4-selon", type: "vocab", front: "selon", reading: "selon", meaning: "according to", example: { jp: "Selon mon père, ce restaurant est très bon.", en: "According to my father, this restaurant is very good." }, accept: ["in the opinion of", "as stated by", "per"], hint: "selon moi = in my opinion — the short version of à mon avis (Unit 24)." },
        { id: "fr-u43l4-aulieude", type: "vocab", front: "au lieu de", reading: "aulieude", meaning: "instead of", example: { jp: "Au lieu de travailler, je regarde un film.", en: "Instead of working, I'm watching a film." }, accept: ["rather than", "in place of", "instead of"] },
        { id: "fr-u43l4-memesi", type: "vocab", front: "même si", reading: "memesi", meaning: "even if", example: { jp: "Je sors même s'il pleut.", en: "I'm going out even if it rains." }, accept: ["even though", "although", "even when"], hint: "si + il always shrinks to s'il — même s'il pleut, never \"même si il\"." },
      ],
    },
  ],
};
