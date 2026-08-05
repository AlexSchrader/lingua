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
      canDo: "Handle a present from both ends: give it, receive it, send it, give it back — and name a gift or a parcel.",
      items: [
        { id: "fr-u54l1-offrir", type: "vocab", front: "offrir", reading: "offrir", meaning: "to give (a gift)", example: { jp: "Je vais offrir un cadeau.", en: "I'm going to give a gift." }, accept: ["give", "offer", "give as a present"], hint: "donner is handing anything over; offrir is giving a present or standing someone a drink." },
        { id: "fr-u54l1-recevoir", type: "vocab", front: "recevoir", reading: "recevoir", meaning: "to receive", example: { jp: "Je vais recevoir une lettre.", en: "I'm going to receive a letter." }, accept: ["get", "receive"] },
        { id: "fr-u54l1-envoyer", type: "vocab", front: "envoyer", reading: "envoyer", meaning: "to send", example: { jp: "Je veux envoyer une carte.", en: "I want to send a card." }, accept: ["send", "post", "mail"] },
        { id: "fr-u54l1-rendre", type: "vocab", front: "rendre", reading: "rendre", meaning: "to give back", example: { jp: "Je vais rendre le livre.", en: "I'm going to give the book back." }, accept: ["return", "hand back", "give back"] },
        { id: "fr-u54l1-lecadeau", type: "vocab", front: "le cadeau", reading: "lecadeau", meaning: "gift", example: { jp: "C'est un beau cadeau.", en: "It's a lovely gift." }, accept: ["the gift", "present"] },
        { id: "fr-u54l1-lepaquet", type: "vocab", front: "le paquet", reading: "lepaquet", meaning: "parcel", example: { jp: "Il y a un paquet pour toi.", en: "There's a parcel for you." }, accept: ["package", "the parcel", "pack", "packet"] },
      ],
    },
    {
      id: "fr-u54l2",
      unit: 54,
      lesson: 2,
      title: "Lending and sharing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Move a thing between people: lend it, borrow it, share it, swap it, bring it or take it away.",
      items: [
        { id: "fr-u54l2-preter", type: "vocab", front: "prêter", reading: "preter", meaning: "to lend", example: { jp: "Je peux prêter mon stylo.", en: "I can lend my pen." }, accept: ["lend", "loan"] },
        { id: "fr-u54l2-emprunter", type: "vocab", front: "emprunter", reading: "emprunter", meaning: "to borrow", example: { jp: "Je veux emprunter ce livre.", en: "I want to borrow this book." }, accept: ["borrow"], hint: "The pair to prêter: you prête to someone, you empruntes from someone." },
        { id: "fr-u54l2-partager", type: "vocab", front: "partager", reading: "partager", meaning: "to share", example: { jp: "Je vais partager le gâteau.", en: "I'm going to share the cake." }, accept: ["share", "split", "divide"] },
        { id: "fr-u54l2-echanger", type: "vocab", front: "échanger", reading: "echanger", meaning: "to exchange", example: { jp: "Je veux échanger ma veste.", en: "I want to exchange my jacket." }, accept: ["swap", "trade", "exchange"] },
        { id: "fr-u54l2-apporter", type: "vocab", front: "apporter", reading: "apporter", meaning: "to bring", example: { jp: "Je vais apporter du pain.", en: "I'm going to bring some bread." }, accept: ["bring", "bring along", "bring over"] },
        { id: "fr-u54l2-emporter", type: "vocab", front: "emporter", reading: "emporter", meaning: "to take away", example: { jp: "Je vais emporter mon manteau.", en: "I'm going to take my coat with me." }, accept: ["carry off", "take with you", "take along"], hint: "apporter brings it HERE, emporter takes it AWAY. On a café sign, « à emporter » means takeaway." },
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
        { id: "fr-u54l3-tenir", type: "vocab", front: "tenir", reading: "tenir", meaning: "to hold", example: { jp: "Je peux tenir ton sac.", en: "I can hold your bag." }, accept: ["hold", "keep hold of", "hold on to"] },
        { id: "fr-u54l3-poser", type: "vocab", front: "poser", reading: "poser", meaning: "to put down", example: { jp: "Je vais poser le verre ici.", en: "I'm going to put the glass down here." }, accept: ["set down", "put", "lay down"], hint: "Also how you ask a question: poser une question — French \"poses\" a question rather than asking it." },
        { id: "fr-u54l3-ramasser", type: "vocab", front: "ramasser", reading: "ramasser", meaning: "to pick up", example: { jp: "Je vais ramasser le papier.", en: "I'm going to pick up the paper." }, accept: ["pick up", "gather", "collect"] },
        { id: "fr-u54l3-jeter", type: "vocab", front: "jeter", reading: "jeter", meaning: "to throw away", example: { jp: "Je vais jeter la bouteille.", en: "I'm going to throw the bottle away." }, accept: ["throw", "throw out", "chuck", "bin"] },
        { id: "fr-u54l3-attraper", type: "vocab", front: "attraper", reading: "attraper", meaning: "to catch", example: { jp: "Je peux attraper le bus.", en: "I can catch the bus." }, accept: ["catch", "grab", "get"] },
        { id: "fr-u54l3-lacher", type: "vocab", front: "lâcher", reading: "lacher", meaning: "to let go of", example: { jp: "Je ne veux pas lâcher ta main.", en: "I don't want to let go of your hand." }, accept: ["let go", "drop", "release"] },
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
        { id: "fr-u54l4-rencontrer", type: "vocab", front: "rencontrer", reading: "rencontrer", meaning: "to meet", example: { jp: "Je vais rencontrer mes amis.", en: "I'm going to meet my friends." }, accept: ["meet", "run into", "come across"] },
        { id: "fr-u54l4-aider", type: "vocab", front: "aider", reading: "aider", meaning: "to help", example: { jp: "Je veux aider ma mère.", en: "I want to help my mother." }, accept: ["help", "assist", "give a hand"] },
        { id: "fr-u54l4-accompagner", type: "vocab", front: "accompagner", reading: "accompagner", meaning: "to go with", example: { jp: "Je vais accompagner mon frère.", en: "I'm going to go with my brother." }, accept: ["accompany", "come along with", "go along with"] },
        { id: "fr-u54l4-attendre", type: "vocab", front: "attendre", reading: "attendre", meaning: "to wait", example: { jp: "Je vais attendre ici.", en: "I'm going to wait here." }, accept: ["wait for", "await", "hold on"], hint: "No preposition: on attend le bus — you wait the bus, not \"for\" it." },
        { id: "fr-u54l4-suivre", type: "vocab", front: "suivre", reading: "suivre", meaning: "to follow", example: { jp: "Je vais suivre mon frère.", en: "I'm going to follow my brother." }, accept: ["follow", "come after", "take (a course)"] },
        { id: "fr-u54l4-presenter", type: "vocab", front: "présenter", reading: "presenter", meaning: "to introduce", example: { jp: "Je vais présenter ma sœur.", en: "I'm going to introduce my sister." }, accept: ["introduce", "present", "show"], hint: "This is the verb behind enchanté — the word you say once someone has been présenté." },
      ],
    },
  ],
};
