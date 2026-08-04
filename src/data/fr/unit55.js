// FR Unit 55 — Utile ou inutile ("Useful or useless") — A2
// Strand D, coverage unit 9 of 11 (block 3). Slot: coverage-a2-9 (generic
// "Vocabulary 9 (A2)"); given a real theme so the four lessons cohere — the slot
// NUMBER is kept, only the name deviates. See unit48.js for the block-3 rules.
// The judgement adjectives — the ones you reach for about ANY noun (possible,
// necessary, simple, the same, dangerous). Adjectives about people's character
// belong to the personality unit; these are about things and situations.
export const FR_UNIT55 = {
  id: "fr-u55",
  lang: "fr",
  title: "Utile ou inutile",
  order: 55,
  stage: "a2",
  lessons: [
    {
      id: "fr-u55l1",
      unit: 55,
      lesson: 1,
      title: "Possible and necessary",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Judge whether something can or must be done: possible, impossible, necessary, useful, useless, compulsory.",
      items: [
        { id: "fr-u55l1-possible", type: "vocab", front: "possible", reading: "possible", meaning: "possible", example: { jp: "Ce n'est pas possible.", en: "That's not possible." }, accept: ["doable", "feasible"] },
        { id: "fr-u55l1-impossible", type: "vocab", front: "impossible", reading: "impossible", meaning: "impossible", example: { jp: "C'est impossible pour moi.", en: "It's impossible for me." }, accept: ["not possible", "out of the question"] },
        { id: "fr-u55l1-necessaire", type: "vocab", front: "nécessaire", reading: "necessaire", meaning: "necessary", example: { jp: "Ce n'est pas nécessaire.", en: "That's not necessary." }, accept: ["needed", "required"] },
        { id: "fr-u55l1-utile", type: "vocab", front: "utile", reading: "utile", meaning: "useful", example: { jp: "Ce livre est très utile.", en: "This book is very useful." }, accept: ["helpful", "handy"] },
        { id: "fr-u55l1-inutile", type: "vocab", front: "inutile", reading: "inutile", meaning: "useless", example: { jp: "Cet objet est inutile.", en: "This object is useless." }, accept: ["pointless", "no use", "not useful"], hint: "in- flips the word, exactly like possible → impossible." },
        { id: "fr-u55l1-obligatoire", type: "vocab", front: "obligatoire", reading: "obligatoire", meaning: "compulsory", example: { jp: "Le billet est obligatoire.", en: "The ticket is compulsory." }, accept: ["mandatory", "required", "obligatory"] },
      ],
    },
    {
      id: "fr-u55l2",
      unit: 55,
      lesson: 2,
      title: "Simple or complicated",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how clear something is: simple, complicated, clear, obvious, exact, precise.",
      items: [
        { id: "fr-u55l2-simple", type: "vocab", front: "simple", reading: "simple", meaning: "simple", example: { jp: "C'est très simple.", en: "It's very simple." }, accept: ["easy", "straightforward", "plain"] },
        { id: "fr-u55l2-complique", type: "vocab", front: "compliqué", reading: "complique", meaning: "complicated", example: { jp: "Ce n'est pas compliqué.", en: "It's not complicated." }, accept: ["complex", "tricky", "difficult"] },
        { id: "fr-u55l2-clair", type: "vocab", front: "clair", reading: "clair", meaning: "clear", example: { jp: "Le sens est clair.", en: "The meaning is clear." }, accept: ["obvious", "light", "bright"], hint: "Also \"light\" for a colour: bleu clair = light blue." },
        { id: "fr-u55l2-evident", type: "vocab", front: "évident", reading: "evident", meaning: "obvious", example: { jp: "Ce n'est pas évident.", en: "It's not obvious." }, accept: ["clear", "self-evident", "plain"], hint: "« Ce n'est pas évident » is also the everyday way of saying \"it's not easy\"." },
        { id: "fr-u55l2-exact", type: "vocab", front: "exact", reading: "exact", meaning: "exact", example: { jp: "Le nombre exact est vingt.", en: "The exact number is twenty." }, accept: ["correct", "right", "accurate"] },
        { id: "fr-u55l2-precis", type: "vocab", front: "précis", reading: "precis", meaning: "precise", example: { jp: "Ce n'est pas assez précis.", en: "That's not precise enough." }, accept: ["specific", "accurate", "exact"] },
      ],
    },
    {
      id: "fr-u55l3",
      unit: 55,
      lesson: 3,
      title: "The same or different",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Compare two things without numbers: the same, different, alone, together, shared — and give each one its own.",
      items: [
        { id: "fr-u55l3-pareil", type: "vocab", front: "pareil", reading: "pareil", meaning: "the same", example: { jp: "C'est pareil pour moi.", en: "It's the same for me." }, accept: ["alike", "similar", "same"] },
        { id: "fr-u55l3-different", type: "vocab", front: "différent", reading: "different", meaning: "different", example: { jp: "Ce livre est différent.", en: "This book is different." }, accept: ["not the same", "unlike", "other"] },
        { id: "fr-u55l3-seul", type: "vocab", front: "seul", reading: "seul", meaning: "alone", example: { jp: "Je suis seul ici.", en: "I'm alone here." }, accept: ["on my own", "only", "single", "lonely"] },
        { id: "fr-u55l3-ensemble", type: "vocab", front: "ensemble", reading: "ensemble", meaning: "together", example: { jp: "Nous allons manger ensemble.", en: "We're going to eat together." }, accept: ["with each other", "as a group"] },
        { id: "fr-u55l3-commun", type: "vocab", front: "commun", reading: "commun", meaning: "shared", example: { jp: "Nous avons un ami commun.", en: "We have a mutual friend." }, accept: ["common", "mutual", "joint"] },
        { id: "fr-u55l3-chacun", type: "vocab", front: "chacun", reading: "chacun", meaning: "each one", example: { jp: "Chacun a sa chambre.", en: "Each one has their own bedroom." }, accept: ["everyone", "each", "each person"], hint: "chaque goes before a noun (chaque jour); chacun stands alone (chacun a sa chambre)." },
      ],
    },
    {
      id: "fr-u55l4",
      unit: 55,
      lesson: 4,
      title: "Pleasant or dangerous",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "React to a place or a thing: dangerous, calm, noisy, pleasant, delicious, perfect.",
      items: [
        { id: "fr-u55l4-dangereux", type: "vocab", front: "dangereux", reading: "dangereux", meaning: "dangerous", example: { jp: "Ce chien est dangereux.", en: "This dog is dangerous." }, accept: ["unsafe", "risky"] },
        { id: "fr-u55l4-calme", type: "vocab", front: "calme", reading: "calme", meaning: "quiet", example: { jp: "Le parc est calme.", en: "The park is quiet." }, accept: ["calm", "peaceful", "still"] },
        { id: "fr-u55l4-bruyant", type: "vocab", front: "bruyant", reading: "bruyant", meaning: "noisy", example: { jp: "Le restaurant est bruyant.", en: "The restaurant is noisy." }, accept: ["loud"] },
        { id: "fr-u55l4-agreable", type: "vocab", front: "agréable", reading: "agreable", meaning: "pleasant", example: { jp: "C'est un endroit agréable.", en: "It's a pleasant place." }, accept: ["nice", "lovely", "enjoyable"] },
        { id: "fr-u55l4-delicieux", type: "vocab", front: "délicieux", reading: "delicieux", meaning: "delicious", example: { jp: "Ce gâteau est délicieux.", en: "This cake is delicious." }, accept: ["tasty", "lovely", "yummy"] },
        { id: "fr-u55l4-parfait", type: "vocab", front: "parfait", reading: "parfait", meaning: "perfect", example: { jp: "Ce jour est parfait.", en: "This day is perfect." }, accept: ["ideal", "just right"], hint: "On its own, « Parfait ! » is how you say \"Great!\" when a plan is agreed." },
      ],
    },
  ],
};
