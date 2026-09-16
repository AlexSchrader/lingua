// FR Unit 54 — Donner et recevoir ("Giving and receiving") — A2
// Strand D, coverage unit 8 of 11 (block 3). Slot: coverage-a2-8 (generic
// "Vocabulary 8 (A2)"); given a real theme so the four lessons cohere — the slot
// NUMBER is kept, only the name deviates. See unit48.js for the block-3 rules.
// Verbs where something passes between two people or two hands: give, lend, hold,
// meet, help. Cross-cutting by design — the social occasions themselves belong to
// the thematic units.
export const FR_UNIT54 = {
  id: "fr-u54",
  lang: "fr",
  title: "Donner et recevoir",
  order: 54,
  stage: "a2",
  lessons: [
    {
      id: "fr-u54l1",
      unit: 54,
      lesson: 1,
      title: "Giving and receiving",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle a present from both ends: give it, receive it, send it, have it delivered — and name a gift or a parcel.",
      items: [
        { id: "fr-u54l1-offrir", type: "vocab", front: "offrir", reading: "offrir", meaning: "to give (a gift)", example: { jp: "Je vais offrir un cadeau.", en: "I'm going to give a gift." }, accept: ["give", "offer", "give as a present"], drill: { jp: "Je dois offrir un cadeau à Marie", en: "I must give Marie a gift" }, hint: "donner is handing anything over; offrir is giving a present or standing someone a drink." },
        { id: "fr-u54l1-recevoir", type: "vocab", front: "recevoir", reading: "recevoir", meaning: "to receive", example: { jp: "Je vais recevoir une lettre.", en: "I'm going to receive a letter." }, accept: ["get", "receive"], drill: { jp: "Il faut recevoir le paquet demain", en: "You have to receive the parcel tomorrow" } },
        { id: "fr-u54l1-envoyer", type: "vocab", front: "envoyer", reading: "envoyer", meaning: "to send", example: { jp: "Je veux envoyer une carte.", en: "I want to send a card." }, accept: ["send", "post", "mail"], drill: { jp: "Je peux envoyer cette lettre demain", en: "I can send this letter tomorrow" } },
        { id: "fr-u54l1-livrer", type: "vocab", front: "livrer", reading: "livrer", meaning: "to deliver", example: { jp: "Je vais livrer le paquet.", en: "I'm going to deliver the parcel." }, accept: ["deliver", "drop off", "hand over"], drill: { jp: "Le vendeur va livrer le frigo", en: "The shop assistant is going to deliver the fridge" }, hint: "Nothing to do with le livre (a book) — livrer is what the delivery driver does." },
        { id: "fr-u54l1-lecadeau", type: "vocab", front: "le cadeau", reading: "lecadeau", meaning: "gift", example: { jp: "C'est un beau cadeau.", en: "It's a lovely gift." }, accept: ["the gift", "present"], drill: { jp: "Le cadeau est dans la boîte", en: "The gift is in the box" } },
        { id: "fr-u54l1-lepaquet", type: "vocab", front: "le paquet", reading: "lepaquet", meaning: "parcel", example: { jp: "Il y a un paquet pour toi.", en: "There's a parcel for you." }, accept: ["package", "the parcel", "pack", "packet"], drill: { jp: "Le paquet est très lourd", en: "The parcel is very heavy" } },
      ],
    },
    {
      id: "fr-u54l2",
      unit: 54,
      lesson: 2,
      title: "Lending and sharing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Move a thing between people: share it, swap it, hand it out, get it back, bring it or take it away.",
      items: [
        { id: "fr-u54l2-recuperer", type: "vocab", front: "récupérer", reading: "recuperer", meaning: "to get back", example: { jp: "Je vais récupérer mon sac.", en: "I'm going to get my bag back." }, accept: ["retrieve", "collect", "recover", "fetch"], drill: { jp: "J'aimerais récupérer mes clés", en: "I would like to get my keys back" } },
        { id: "fr-u54l2-distribuer", type: "vocab", front: "distribuer", reading: "distribuer", meaning: "to hand out", example: { jp: "Je vais distribuer les papiers.", en: "I'm going to hand out the papers." }, accept: ["distribute", "give out", "pass around"], drill: { jp: "Le professeur va distribuer les livres", en: "The teacher is going to hand out the books" } },
        { id: "fr-u54l2-partager", type: "vocab", front: "partager", reading: "partager", meaning: "to share", example: { jp: "Je vais partager le gâteau.", en: "I'm going to share the cake." }, accept: ["share", "split", "divide"], drill: { jp: "On peut partager ce gâteau", en: "We can share this cake" } },
        { id: "fr-u54l2-echanger", type: "vocab", front: "échanger", reading: "echanger", meaning: "to exchange", example: { jp: "Je veux échanger ma veste.", en: "I want to exchange my jacket." }, accept: ["swap", "trade", "exchange"], drill: { jp: "Je peux échanger cette chemise", en: "I can exchange this shirt" } },
        { id: "fr-u54l2-apporter", type: "vocab", front: "apporter", reading: "apporter", meaning: "to bring", example: { jp: "Je vais apporter du pain.", en: "I'm going to bring some bread." }, accept: ["bring", "bring along", "bring over"], drill: { jp: "Tu peux apporter du pain", en: "You can bring some bread" } },
        { id: "fr-u54l2-emporter", type: "vocab", front: "emporter", reading: "emporter", meaning: "to take away", example: { jp: "Je vais emporter mon manteau.", en: "I'm going to take my coat with me." }, accept: ["carry off", "take with you", "take along"], drill: { jp: "Il faut emporter un manteau", en: "You have to take a coat with you" }, hint: "apporter brings it HERE, emporter takes it AWAY. On a café sign, « à emporter » means takeaway." },
      ],
    },
    {
      id: "fr-u54l3",
      unit: 54,
      lesson: 3,
      title: "Holding and dropping",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what your hands are doing: hold, put down, pick up, throw away, catch, let go.",
      items: [
        { id: "fr-u54l3-tenir", type: "vocab", front: "tenir", reading: "tenir", meaning: "to hold", example: { jp: "Je peux tenir ton sac.", en: "I can hold your bag." }, accept: ["hold", "keep hold of", "hold on to"], drill: { jp: "Je vais tenir la porte", en: "I am going to hold the door" } },
        { id: "fr-u54l3-poser", type: "vocab", front: "poser", reading: "poser", meaning: "to put down", example: { jp: "Je vais poser le verre ici.", en: "I'm going to put the glass down here." }, accept: ["set down", "put", "lay down"], drill: { jp: "Je dois poser la boîte ici", en: "I must put the box down here" }, hint: "Also how you ask a question: poser une question — French \"poses\" a question rather than asking it." },
        { id: "fr-u54l3-ramasser", type: "vocab", front: "ramasser", reading: "ramasser", meaning: "to pick up", example: { jp: "Je vais ramasser le papier.", en: "I'm going to pick up the paper." }, accept: ["pick up", "gather", "collect"], drill: { jp: "Il faut ramasser les papiers", en: "You have to pick up the papers" } },
        { id: "fr-u54l3-jeter", type: "vocab", front: "jeter", reading: "jeter", meaning: "to throw away", example: { jp: "Je vais jeter la bouteille.", en: "I'm going to throw the bottle away." }, accept: ["throw", "throw out", "chuck", "bin"], drill: { jp: "Je vais jeter ces vieux journaux", en: "I am going to throw away these old newspapers" } },
        { id: "fr-u54l3-attraper", type: "vocab", front: "attraper", reading: "attraper", meaning: "to catch", example: { jp: "Je peux attraper le bus.", en: "I can catch the bus." }, accept: ["catch", "grab", "get"], drill: { jp: "Il vaut mieux attraper le train", en: "It is better to catch the train" } },
        { id: "fr-u54l3-lacher", type: "vocab", front: "lâcher", reading: "lacher", meaning: "to let go of", example: { jp: "Je ne veux pas lâcher ta main.", en: "I don't want to let go of your hand." }, accept: ["let go", "drop", "release"], drill: { jp: "Tu peux lâcher la porte maintenant", en: "You can let go of the door now" } },
      ],
    },
    {
      id: "fr-u54l4",
      unit: 54,
      lesson: 4,
      title: "Meeting and helping",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Deal with other people: meet them, help them, go with them, wait for them, follow them, introduce them.",
      items: [
        { id: "fr-u54l4-rencontrer", type: "vocab", front: "rencontrer", reading: "rencontrer", meaning: "to meet", example: { jp: "Je vais rencontrer mes amis.", en: "I'm going to meet my friends." }, accept: ["meet", "run into", "come across"], drill: { jp: "Je vais rencontrer le patron demain", en: "I am going to meet the boss tomorrow" } },
        { id: "fr-u54l4-aider", type: "vocab", front: "aider", reading: "aider", meaning: "to help", example: { jp: "Je veux aider ma mère.", en: "I want to help my mother." }, accept: ["help", "assist", "give a hand"], drill: { jp: "J'aimerais aider ma mère", en: "I would like to help my mother" } },
        { id: "fr-u54l4-accompagner", type: "vocab", front: "accompagner", reading: "accompagner", meaning: "to go with", example: { jp: "Je vais accompagner mon frère.", en: "I'm going to go with my brother." }, accept: ["accompany", "come along with", "go along with"], drill: { jp: "Je peux accompagner ma sœur", en: "I can go with my sister" } },
        { id: "fr-u54l4-attendre", type: "vocab", front: "attendre", reading: "attendre", meaning: "to wait", example: { jp: "Je vais attendre ici.", en: "I'm going to wait here." }, accept: ["wait for", "await", "hold on"], drill: { jp: "Il faut attendre le bus ici", en: "You have to wait for the bus here" }, hint: "No preposition: on attend le bus — you wait the bus, not \"for\" it." },
        { id: "fr-u54l4-suivre", type: "vocab", front: "suivre", reading: "suivre", meaning: "to follow", example: { jp: "Je vais suivre mon frère.", en: "I'm going to follow my brother." }, accept: ["follow", "come after", "take (a course)"], drill: { jp: "Nous allons suivre le chemin", en: "We are going to follow the path" } },
        { id: "fr-u54l4-presenter", type: "vocab", front: "présenter", reading: "presenter", meaning: "to introduce", example: { jp: "Je vais présenter ma sœur.", en: "I'm going to introduce my sister." }, accept: ["introduce", "present", "show"], drill: { jp: "J'aimerais présenter mes parents", en: "I would like to introduce my parents" }, hint: "This is the verb behind enchanté — the word you say once someone has been présenté." },
      ],
    },
  ],
};
