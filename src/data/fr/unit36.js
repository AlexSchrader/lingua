// FR Unit 36 — Les mots qui relient ("Connecting words") — A2
// A1 could join two clauses with et, mais, ou, parce que, donc and alors. That is
// enough to be understood and not enough to sound like a person. This unit is the
// glue: contrast, illustration, cause, sequence and stance.
// Two deliberate exclusions:
//   - si (if) CANNOT be taught here: the front si is already taken by u21l3's si =
//     "yes, after a negative", and the word-front rule is one home per word. The
//     conditional belongs to the grammar unit u44 anyway; recorded here so the next
//     seat doesn't rediscover it.
//   - cependant and lorsque are left out on purpose — they are near-exact synonyms
//     of pourtant and quand, and a choice card offering both would have two right
//     answers. A2 gets one word per job.
// Conventions + the A2 infinitive decision: see the header of fr/unit28.js.
export const FR_UNIT36 = {
  id: "fr-u36",
  lang: "fr",
  title: "Les mots qui relient",
  order: 36,
  stage: "a2",
  lessons: [
    {
      id: "fr-u36l1",
      unit: 36,
      lesson: 1,
      title: "Adding and contrasting",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Push back on your own sentence: however, on the other hand, what's more, especially, even, all the same.",
      items: [
        { id: "fr-u36l1-pourtant", type: "vocab", front: "pourtant", reading: "pourtant", meaning: "however", example: { jp: "Il fait froid, pourtant j'aime l'hiver.", en: "It's cold, however I like winter." }, accept: ["and yet", "even so", "yet"] },
        { id: "fr-u36l1-parcontre", type: "vocab", front: "par contre", reading: "parcontre", meaning: "on the other hand", example: { jp: "J'aime le thé. Par contre, je n'aime pas le café.", en: "I like tea. On the other hand, I don't like coffee." }, accept: ["then again", "whereas"] },
        { id: "fr-u36l1-enplus", type: "vocab", front: "en plus", reading: "enplus", meaning: "what's more", example: { jp: "Le repas est bon. En plus, ce n'est pas cher.", en: "The meal is good. What's more, it isn't expensive." }, accept: ["besides", "on top of that", "moreover"] },
        { id: "fr-u36l1-surtout", type: "vocab", front: "surtout", reading: "surtout", meaning: "especially", example: { jp: "J'aime les fruits, surtout les pommes.", en: "I like fruit, especially apples." }, accept: ["above all", "particularly", "mainly"] },
        { id: "fr-u36l1-meme", type: "vocab", front: "même", reading: "meme", meaning: "even", example: { jp: "Même le dimanche, je travaille.", en: "Even on Sundays I work." }, accept: ["even so", "same"], hint: "Before a noun it also means same: la même chose, the same thing." },
        { id: "fr-u36l1-quandmeme", type: "vocab", front: "quand même", reading: "quandmeme", meaning: "all the same", example: { jp: "Il pleut, mais je vais quand même à la plage.", en: "It's raining, but I'm going to the beach all the same." }, accept: ["anyway", "nevertheless", "still"] },
      ],
    },
    {
      id: "fr-u36l2",
      unit: 36,
      lesson: 2,
      title: "Explaining yourself",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give a reason and an example: for instance, that is to say, because of, thanks to, in fact, since.",
      items: [
        { id: "fr-u36l2-parexemple", type: "vocab", front: "par exemple", reading: "parexemple", meaning: "for example", example: { jp: "Il y a des magasins, par exemple la boulangerie.", en: "There are shops, for example the bakery." }, accept: ["for instance", "such as", "e.g."] },
        { id: "fr-u36l2-cestadire", type: "vocab", front: "c'est-à-dire", reading: "cestadire", meaning: "that is to say", example: { jp: "Je viens demain, c'est-à-dire mardi.", en: "I'm coming tomorrow, that is to say Tuesday." }, accept: ["in other words", "i.e.", "meaning"] },
        { id: "fr-u36l2-acausede", type: "vocab", front: "à cause de", reading: "acausede", meaning: "because of", example: { jp: "À cause de la pluie, je reste à la maison.", en: "Because of the rain, I'm staying at home." }, accept: ["owing to", "due to"], hint: "For a bad reason. When the cause is good, French switches to grâce à." },
        { id: "fr-u36l2-gracea", type: "vocab", front: "grâce à", reading: "gracea", meaning: "thanks to", example: { jp: "Grâce à toi, je comprends !", en: "Thanks to you, I understand!" }, accept: ["owing to", "with the help of"] },
        { id: "fr-u36l2-enfait", type: "vocab", front: "en fait", reading: "enfait", meaning: "in fact", example: { jp: "En fait, je ne sais pas.", en: "In fact, I don't know." }, accept: ["actually", "as a matter of fact"] },
        { id: "fr-u36l2-puisque", type: "vocab", front: "puisque", reading: "puisque", meaning: "since (a known reason)", example: { jp: "Puisque c'est samedi, je ne travaille pas.", en: "Since it's Saturday, I'm not working." }, accept: ["seeing as", "given that"], hint: "For a reason both of you already know. A brand-new reason takes parce que." },
      ],
    },
    {
      id: "fr-u36l3",
      unit: 36,
      lesson: 3,
      title: "Linking two actions",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Tie one action to another: while, as soon as, as, before doing something, instead of — and say you have neither one nor the other.",
      items: [
        { id: "fr-u36l3-pendantque", type: "vocab", front: "pendant que", reading: "pendantque", meaning: "while", example: { jp: "Pendant que je fais la cuisine, j'écoute de la musique.", en: "While I'm cooking, I listen to music." }, accept: ["at the same time as", "whilst"], hint: "pendant takes a noun (pendant les vacances); pendant que takes a whole sentence." },
        { id: "fr-u36l3-desque", type: "vocab", front: "dès que", reading: "desque", meaning: "as soon as", example: { jp: "Dès que j'arrive, je vais manger.", en: "As soon as I arrive, I'm going to eat." }, accept: ["once", "immediately when"] },
        { id: "fr-u36l3-comme", type: "vocab", front: "comme", reading: "comme", meaning: "as", example: { jp: "Comme il pleut, je reste ici.", en: "As it's raining, I'm staying here." }, accept: ["like"], hint: "Also does the work of like in a comparison: grand comme mon frère." },
        { id: "fr-u36l3-avantde", type: "vocab", front: "avant de", reading: "avantde", meaning: "before (doing)", example: { jp: "Avant de partir, je ferme la fenêtre.", en: "Before leaving, I close the window." }, accept: ["prior to doing", "before"], hint: "avant takes a noun, avant de takes a verb — and that verb stays in its dictionary form." },
        { id: "fr-u36l3-aulieude", type: "vocab", front: "au lieu de", reading: "aulieude", meaning: "instead of", example: { jp: "Au lieu du bus, je prends le vélo.", en: "Instead of the bus, I take my bike." }, accept: ["rather than", "in place of"] },
        { id: "fr-u36l3-nini", type: "vocab", front: "ni … ni", reading: "nini", meaning: "neither … nor", example: { jp: "Je n'ai ni frère ni sœur.", en: "I have neither a brother nor a sister." }, accept: ["not one nor the other", "neither nor"], hint: "Another ne-sandwich: ne on the verb, then ni in front of each thing." },
      ],
    },
    {
      id: "fr-u36l4",
      unit: 36,
      lesson: 4,
      title: "Where you stand",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Take a position: you have to, probably, I agree, that's why, generally, at least.",
      items: [
        { id: "fr-u36l4-ilfaut", type: "vocab", front: "il faut", reading: "ilfaut", meaning: "you have to", example: { jp: "Il faut manger des légumes.", en: "You have to eat vegetables." }, accept: ["one must", "it is necessary", "we need to"], hint: "Never changes and has no real subject — il faut + a dictionary-form verb covers must, should and need to." },
        { id: "fr-u36l4-sansdoute", type: "vocab", front: "sans doute", reading: "sansdoute", meaning: "probably", example: { jp: "Il est sans doute à la maison.", en: "He's probably at home." }, accept: ["no doubt", "most likely"], hint: "A trap: it looks like without doubt but it is weaker than certain — closer to probably." },
        { id: "fr-u36l4-jesuisdaccord", type: "vocab", front: "je suis d'accord", reading: "jesuisdaccord", meaning: "I agree", example: { jp: "Je suis d'accord avec toi.", en: "I agree with you." }, accept: ["i agree with that", "agreed", "i am in agreement"] },
        { id: "fr-u36l4-cestpourquoi", type: "vocab", front: "c'est pourquoi", reading: "cestpourquoi", meaning: "that's why", example: { jp: "Il pleut, c'est pourquoi je reste ici.", en: "It's raining, that's why I'm staying here." }, accept: ["which is why", "for that reason"] },
        { id: "fr-u36l4-engeneral", type: "vocab", front: "en général", reading: "engeneral", meaning: "generally", example: { jp: "En général, je me lève tôt.", en: "Generally I get up early." }, accept: ["in general", "usually", "as a rule"] },
        { id: "fr-u36l4-aumoins", type: "vocab", front: "au moins", reading: "aumoins", meaning: "at least", example: { jp: "Il y a au moins dix euros dans mon sac.", en: "There are at least ten euros in my bag." }, accept: ["a minimum of", "at the very least"] },
      ],
    },
  ],
};
