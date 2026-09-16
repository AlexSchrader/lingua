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
        { id: "fr-u55l1-faisable", type: "vocab", front: "faisable", reading: "faisable", meaning: "doable", example: { jp: "Ce n'est pas faisable.", en: "That's not doable." }, accept: ["feasible", "manageable", "can be done"], drill: { jp: "Ce travail est faisable en deux jours", en: "This work is doable in two days" }, hint: "Built straight off faire: fais- + -able, \"able to be done\"." },
        { id: "fr-u55l1-indispensable", type: "vocab", front: "indispensable", reading: "indispensable", meaning: "essential", example: { jp: "Cette clé est indispensable.", en: "This key is essential." }, accept: ["vital", "must-have", "absolutely necessary"], drill: { jp: "Le portable est indispensable aujourd'hui", en: "The mobile phone is essential today" } },
        { id: "fr-u55l1-interdit", type: "vocab", front: "interdit", reading: "interdit", meaning: "forbidden", example: { jp: "C'est interdit ici.", en: "It's forbidden here." }, accept: ["banned", "not allowed", "prohibited"], drill: { jp: "Le parc est interdit la nuit", en: "The park is off limits at night" }, hint: "The word on every French sign that stops you doing something: « Interdit »." },
        { id: "fr-u55l1-autorise", type: "vocab", front: "autorisé", reading: "autorise", meaning: "allowed", example: { jp: "Ce n'est pas autorisé.", en: "That's not allowed." }, accept: ["permitted", "authorised", "okay to do"], drill: { jp: "Le vélo est autorisé dans le train", en: "Bikes are allowed on the train" } },
        { id: "fr-u55l1-inutile", type: "vocab", front: "inutile", reading: "inutile", meaning: "useless", example: { jp: "Cet objet est inutile.", en: "This object is useless." }, accept: ["pointless", "no use", "not useful"], drill: { jp: "Ce vieux portable est inutile", en: "This old mobile phone is useless" }, hint: "in- flips a word in French the way un- does in English." },
        { id: "fr-u55l1-obligatoire", type: "vocab", front: "obligatoire", reading: "obligatoire", meaning: "compulsory", example: { jp: "Le billet est obligatoire.", en: "The ticket is compulsory." }, accept: ["mandatory", "required", "obligatory"], drill: { jp: "La réservation est obligatoire ici", en: "Booking is compulsory here" } },
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
        { id: "fr-u55l2-logique", type: "vocab", front: "logique", reading: "logique", meaning: "logical", example: { jp: "Ce n'est pas logique.", en: "That's not logical." }, accept: ["makes sense", "reasonable", "logic"], drill: { jp: "Cette solution est très logique", en: "This solution is very logical" } },
        { id: "fr-u55l2-complique", type: "vocab", front: "compliqué", reading: "complique", meaning: "complicated", example: { jp: "Ce n'est pas compliqué.", en: "It's not complicated." }, accept: ["complex", "tricky", "involved"], drill: { jp: "Ce problème est trop compliqué", en: "This problem is too complicated" } },
        { id: "fr-u55l2-clair", type: "vocab", front: "clair", reading: "clair", meaning: "clear", example: { jp: "Le sens est clair.", en: "The meaning is clear." }, accept: ["bright", "plain to see"], drill: { jp: "Le ciel est clair ce matin", en: "The sky is clear this morning" }, hint: "Also \"light\" for a colour: bleu clair = light blue." },
        { id: "fr-u55l2-evident", type: "vocab", front: "évident", reading: "evident", meaning: "obvious", example: { jp: "Ce n'est pas évident.", en: "It's not obvious." }, accept: ["self-evident", "goes without saying"], drill: { jp: "Ce choix est évident pour moi", en: "This choice is obvious to me" }, hint: "« Ce n'est pas évident » is also the everyday way of saying \"it's not easy\"." },
        { id: "fr-u55l2-exact", type: "vocab", front: "exact", reading: "exact", meaning: "accurate", example: { jp: "Le nombre exact est vingt.", en: "The exact number is twenty." }, accept: ["exact", "correct", "right"], drill: { jp: "Le poids exact est important", en: "The exact weight matters" }, hint: "On its own, « Exact ! » is how a native says \"That's right!\"" },
        { id: "fr-u55l2-precis", type: "vocab", front: "précis", reading: "precis", meaning: "precise", example: { jp: "Ce n'est pas assez précis.", en: "That's not precise enough." }, accept: ["specific", "exact", "spot on"], drill: { jp: "Ce plan est très précis", en: "This map is very precise" } },
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
        { id: "fr-u55l3-pareil", type: "vocab", front: "pareil", reading: "pareil", meaning: "alike", example: { jp: "C'est pareil pour moi.", en: "It's the same for me." }, accept: ["the same", "same", "similar", "just the same"], drill: { jp: "Chaque jour est pareil ici", en: "Every day is the same here" }, hint: "pareil stands on its own (c'est pareil). For the SAME sense, même needs le/la before a noun (le même prix) — même has other jobs too." },
        { id: "fr-u55l3-different", type: "vocab", front: "différent", reading: "different", meaning: "not the same", example: { jp: "Ce livre est différent.", en: "This book is different." }, accept: ["different", "unlike", "other"], drill: { jp: "Ce quartier est différent de Paris", en: "This neighbourhood is different from Paris" }, hint: "Spelled almost like English but said « dee-fay-RON » — the final t is silent." },
        { id: "fr-u55l3-identique", type: "vocab", front: "identique", reading: "identique", meaning: "identical", example: { jp: "Ces deux livres sont identiques.", en: "These two books are identical." }, drill: { jp: "Ce livre est identique", en: "This book is identical" }, accept: ["exactly the same", "indistinguishable"], hint: "Stronger than pareil: pareil is \"much the same\", identique is not one detail apart." },
        { id: "fr-u55l3-separe", type: "vocab", front: "séparé", reading: "separe", meaning: "separate", example: { jp: "Le jardin est séparé de la maison.", en: "The garden is separate from the house." }, accept: ["apart", "divided", "set apart"], drill: { jp: "Le garage est séparé de la maison", en: "The garage is separate from the house" }, hint: "Usually wants a complement: séparé DE something." },
        { id: "fr-u55l3-commun", type: "vocab", front: "commun", reading: "commun", meaning: "shared", example: { jp: "Nous avons un ami commun.", en: "We have a mutual friend." }, accept: ["common", "mutual", "joint"], drill: { jp: "Nous avons un métier commun", en: "We have a trade in common" } },
        { id: "fr-u55l3-chacun", type: "vocab", front: "chacun", reading: "chacun", meaning: "each one", example: { jp: "Chacun a sa chambre.", en: "Each one has their own bedroom." }, accept: ["everyone", "each person", "every one of them"], drill: { jp: "Chacun a son mot de passe", en: "Each one has his own password" }, hint: "chaque goes before a noun (chaque jour); chacun stands alone (chacun a sa chambre)." },
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
        { id: "fr-u55l4-dangereux", type: "vocab", front: "dangereux", reading: "dangereux", meaning: "dangerous", example: { jp: "Ce chien est dangereux.", en: "This dog is dangerous." }, accept: ["unsafe", "risky"], drill: { jp: "Ce chemin est dangereux la nuit", en: "This path is dangerous at night" } },
        { id: "fr-u55l4-calme", type: "vocab", front: "calme", reading: "calme", meaning: "quiet", example: { jp: "Le parc est calme.", en: "The park is quiet." }, accept: ["calm", "peaceful", "still"], drill: { jp: "La rue est calme ce soir", en: "The street is quiet tonight" } },
        { id: "fr-u55l4-bruyant", type: "vocab", front: "bruyant", reading: "bruyant", meaning: "noisy", example: { jp: "Le restaurant est bruyant.", en: "The restaurant is noisy." }, accept: ["loud"], drill: { jp: "Le centre-ville est très bruyant", en: "The town centre is very noisy" } },
        { id: "fr-u55l4-affreux", type: "vocab", front: "affreux", reading: "affreux", meaning: "awful", example: { jp: "Ce film est affreux.", en: "This film is awful." }, accept: ["dreadful", "horrible", "hideous"], drill: { jp: "Ce temps est vraiment affreux", en: "This weather is really awful" } },
        { id: "fr-u55l4-delicieux", type: "vocab", front: "délicieux", reading: "delicieux", meaning: "delicious", example: { jp: "Ce gâteau est délicieux.", en: "This cake is delicious." }, accept: ["tasty", "lovely", "yummy"], drill: { jp: "Ce poisson est vraiment délicieux", en: "This fish is really delicious" } },
        { id: "fr-u55l4-parfait", type: "vocab", front: "parfait", reading: "parfait", meaning: "perfect", example: { jp: "Ce livre est parfait.", en: "This book is perfect." }, accept: ["ideal", "just right"], drill: { jp: "Ce moment est parfait pour moi", en: "This moment is perfect for me" }, hint: "On its own, « Parfait ! » is how you say \"Great!\" when a plan is agreed." },
      ],
    },
  ],
};
