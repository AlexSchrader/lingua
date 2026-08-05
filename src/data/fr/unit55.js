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
      canDo: "Judge whether something can or may be done: doable, essential, forbidden, allowed, useless, compulsory.",
      items: [
        { id: "fr-u55l1-faisable", type: "vocab", front: "faisable", reading: "faisable", meaning: "doable", example: { jp: "Ce n'est pas faisable.", en: "That's not doable." }, accept: ["feasible", "manageable", "can be done"], hint: "Built straight off faire: fais- + -able, \"able to be done\"." },
        { id: "fr-u55l1-indispensable", type: "vocab", front: "indispensable", reading: "indispensable", meaning: "essential", example: { jp: "Cette clé est indispensable.", en: "This key is essential." }, accept: ["vital", "must-have", "absolutely necessary"] },
        { id: "fr-u55l1-interdit", type: "vocab", front: "interdit", reading: "interdit", meaning: "forbidden", example: { jp: "C'est interdit ici.", en: "It's forbidden here." }, accept: ["banned", "not allowed", "prohibited"], hint: "The word on every French sign that stops you doing something: « Interdit »." },
        { id: "fr-u55l1-autorise", type: "vocab", front: "autorisé", reading: "autorise", meaning: "allowed", example: { jp: "Ce n'est pas autorisé.", en: "That's not allowed." }, accept: ["permitted", "authorised", "okay to do"] },
        { id: "fr-u55l1-inutile", type: "vocab", front: "inutile", reading: "inutile", meaning: "useless", example: { jp: "Cet objet est inutile.", en: "This object is useless." }, accept: ["pointless", "no use", "not useful"], hint: "in- flips a word in French the way un- does in English." },
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
      canDo: "Say how clear something is: logical, complicated, clear, obvious, exact, precise.",
      items: [
        { id: "fr-u55l2-logique", type: "vocab", front: "logique", reading: "logique", meaning: "logical", example: { jp: "Ce n'est pas logique.", en: "That's not logical." }, accept: ["makes sense", "reasonable", "logic"] },
        { id: "fr-u55l2-complique", type: "vocab", front: "compliqué", reading: "complique", meaning: "complicated", example: { jp: "Ce n'est pas compliqué.", en: "It's not complicated." }, accept: ["complex", "tricky", "involved"] },
        { id: "fr-u55l2-clair", type: "vocab", front: "clair", reading: "clair", meaning: "clear", example: { jp: "Le sens est clair.", en: "The meaning is clear." }, accept: ["bright", "plain to see"], hint: "Also \"light\" for a colour: bleu clair = light blue." },
        { id: "fr-u55l2-evident", type: "vocab", front: "évident", reading: "evident", meaning: "obvious", example: { jp: "Ce n'est pas évident.", en: "It's not obvious." }, accept: ["self-evident", "goes without saying"], hint: "« Ce n'est pas évident » is also the everyday way of saying \"it's not easy\"." },
        { id: "fr-u55l2-exact", type: "vocab", front: "exact", reading: "exact", meaning: "accurate", example: { jp: "Le nombre exact est vingt.", en: "The exact number is twenty." }, accept: ["exact", "correct", "right"], hint: "On its own, « Exact ! » is how a native says \"That's right!\"" },
        { id: "fr-u55l2-precis", type: "vocab", front: "précis", reading: "precis", meaning: "precise", example: { jp: "Ce n'est pas assez précis.", en: "That's not precise enough." }, accept: ["specific", "exact", "spot on"] },
      ],
    },
    {
      id: "fr-u55l3",
      unit: 55,
      lesson: 3,
      title: "The same or different",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Compare two things without numbers: alike, identical, different, separate, shared — and give each one its own.",
      items: [
        { id: "fr-u55l3-pareil", type: "vocab", front: "pareil", reading: "pareil", meaning: "alike", example: { jp: "C'est pareil pour moi.", en: "It's the same for me." }, accept: ["the same", "same", "similar", "just the same"], hint: "pareil stands on its own (c'est pareil). For the SAME sense, même needs le/la before a noun (le même prix) — même has other jobs too." },
        { id: "fr-u55l3-different", type: "vocab", front: "différent", reading: "different", meaning: "not the same", example: { jp: "Ce livre est différent.", en: "This book is different." }, accept: ["different", "unlike", "other"], hint: "Spelled almost like English but said « dee-fay-RON » — the final t is silent." },
        { id: "fr-u55l3-identique", type: "vocab", front: "identique", reading: "identique", meaning: "identical", example: { jp: "Ces deux livres sont identiques.", en: "These two books are identical." }, accept: ["exactly the same", "indistinguishable"], hint: "Stronger than pareil: pareil is \"much the same\", identique is not one detail apart." },
        { id: "fr-u55l3-separe", type: "vocab", front: "séparé", reading: "separe", meaning: "separate", example: { jp: "Le jardin est séparé.", en: "The garden is separate." }, accept: ["apart", "divided", "set apart"] },
        { id: "fr-u55l3-commun", type: "vocab", front: "commun", reading: "commun", meaning: "shared", example: { jp: "Nous avons un ami commun.", en: "We have a mutual friend." }, accept: ["common", "mutual", "joint"] },
        { id: "fr-u55l3-chacun", type: "vocab", front: "chacun", reading: "chacun", meaning: "each one", example: { jp: "Chacun a sa chambre.", en: "Each one has their own bedroom." }, accept: ["everyone", "each person", "every one of them"], hint: "chaque goes before a noun (chaque jour); chacun stands alone (chacun a sa chambre)." },
      ],
    },
    {
      id: "fr-u55l4",
      unit: 55,
      lesson: 4,
      title: "Pleasant or dangerous",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "React to a place or a thing: dangerous, quiet, noisy, awful, delicious, perfect.",
      items: [
        { id: "fr-u55l4-dangereux", type: "vocab", front: "dangereux", reading: "dangereux", meaning: "dangerous", example: { jp: "Ce chien est dangereux.", en: "This dog is dangerous." }, accept: ["unsafe", "risky"] },
        { id: "fr-u55l4-calme", type: "vocab", front: "calme", reading: "calme", meaning: "quiet", example: { jp: "Le parc est calme.", en: "The park is quiet." }, accept: ["calm", "peaceful", "still"] },
        { id: "fr-u55l4-bruyant", type: "vocab", front: "bruyant", reading: "bruyant", meaning: "noisy", example: { jp: "Le restaurant est bruyant.", en: "The restaurant is noisy." }, accept: ["loud"] },
        { id: "fr-u55l4-affreux", type: "vocab", front: "affreux", reading: "affreux", meaning: "awful", example: { jp: "Ce film est affreux.", en: "This film is awful." }, accept: ["dreadful", "horrible", "hideous"] },
        { id: "fr-u55l4-delicieux", type: "vocab", front: "délicieux", reading: "delicieux", meaning: "delicious", example: { jp: "Ce gâteau est délicieux.", en: "This cake is delicious." }, accept: ["tasty", "lovely", "yummy"] },
        { id: "fr-u55l4-parfait", type: "vocab", front: "parfait", reading: "parfait", meaning: "perfect", example: { jp: "Ce livre est parfait.", en: "This book is perfect." }, accept: ["ideal", "just right"], hint: "On its own, « Parfait ! » is how you say \"Great!\" when a plan is agreed." },
      ],
    },
  ],
};
