// FR Unit 45 — Conjugation drill 1 (slot: conjugation-1) — A2 · THE FUTURE
// A1 could only reach forward with je vais + verb (Unit 23). This unit drills the
// futur simple: first the two verbs everything else leans on (être, avoir), then
// the irregular stems, then the regular rule, then the rest of the persons.
//
export const FR_UNIT45 = {
  id: "fr-u45",
  lang: "fr",
  title: "Les verbes · 3",
  order: 45,
  stage: "a2",
  lessons: [
    {
      id: "fr-u45l1",
      unit: 45,
      lesson: 1,
      title: "Will be, will have",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what will be: je serai à Paris, tu seras là, nous serons à la gare, j'aurai une voiture.",
      items: [
        { id: "fr-u45l1-etrefut1s", type: "vocab", front: "être", reading: "etre", meaning: "I will be", conjForm: "fut-1s", example: { jp: "Demain, je serai à Paris.", en: "Tomorrow I'll be in Paris." }, accept: ["i'll be", "i shall be", "i am going to be"], hint: "The future endings are the same for EVERY French verb: -ai, -as, -a, -ons, -ez, -ont. Only the stem changes." },
        { id: "fr-u45l1-etrefut2s", type: "vocab", front: "être", reading: "etre", meaning: "you will be", conjForm: "fut-2s", example: { jp: "Tu seras là à midi ?", en: "Will you be there at noon?" }, accept: ["you'll be", "you are going to be", "you shall be"], hint: "tu seras, \"tew suh-RAH\" — the ser- stem plus -as, and that s is silent. Every French verb takes these same future endings; only the stem changes." },
        { id: "fr-u45l1-etrefut3s", type: "vocab", front: "être", reading: "etre", meaning: "he will be", conjForm: "fut-3s", example: { jp: "Il sera content.", en: "He'll be happy." }, accept: ["she will be", "it will be", "he'll be"], hint: "il sera, \"eel suh-RAH\" — ser- plus -a. One form covers il, elle and on: il sera, elle sera, on sera." },
        { id: "fr-u45l1-etrefut1p", type: "vocab", front: "être", reading: "etre", meaning: "we will be", conjForm: "fut-1p", example: { jp: "Nous serons à la gare à huit heures.", en: "We'll be at the station at eight." }, accept: ["we'll be", "we shall be", "we are going to be"], hint: "nous serons, \"noo suh-RON\" — ser- plus the nasal -ons. Compare nous sommes in the present: the ser- stem belongs to the future alone." },
        { id: "fr-u45l1-avoirfut1s", type: "vocab", front: "avoir", reading: "avoir", meaning: "I will have", conjForm: "fut-1s", example: { jp: "J'aurai une nouvelle voiture.", en: "I'll have a new car." }, accept: ["i'll have", "i shall have", "i am going to have"], hint: "être → ser-, avoir → aur-. The two commonest verbs have the two strangest stems." },
        { id: "fr-u45l1-avoirfut3s", type: "vocab", front: "avoir", reading: "avoir", meaning: "he will have", conjForm: "fut-3s", example: { jp: "Il aura faim ce soir.", en: "He'll be hungry this evening." }, accept: ["she will have", "it will have", "he'll have"], hint: "il aura, \"eel o-RAH\" — the aur- stem sounds like \"or\", and the l of il links straight onto it." },
      ],
    },
    {
      id: "fr-u45l2",
      unit: 45,
      lesson: 2,
      title: "The irregular stems",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the future of the everyday irregulars: je ferai, j'irai, je viendrai, je pourrai, je verrai.",
      items: [
        { id: "fr-u45l2-fairefut1s", type: "vocab", front: "faire", reading: "faire", meaning: "I will do", conjForm: "fut-1s", example: { jp: "Je ferai les courses demain.", en: "I'll do the shopping tomorrow." }, accept: ["i'll do", "i will make", "i'll make"], hint: "faire → fer-. The irregular futures change the stem and never the ending." },
        { id: "fr-u45l2-allerfut1s", type: "vocab", front: "aller", reading: "aller", meaning: "I will go", conjForm: "fut-1s", example: { jp: "J'irai au marché samedi.", en: "I'll go to the market on Saturday." }, accept: ["i'll go", "i shall go", "i am going to go"], hint: "aller → ir-. Nothing of aller survives — this one you simply learn." },
        { id: "fr-u45l2-venirfut1s", type: "vocab", front: "venir", reading: "venir", meaning: "I will come", conjForm: "fut-1s", example: { jp: "Je viendrai avec ma sœur.", en: "I'll come with my sister." }, accept: ["i'll come", "i shall come", "i am going to come"], hint: "je viendrai, \"zhuh vyan-DRAY\" — ie is one glide, -ien is nasal, -ai is the closed \"ay\". The viendr- stem also serves tenir: je tiendrai." },
        { id: "fr-u45l2-pouvoirfut1s", type: "vocab", front: "pouvoir", reading: "pouvoir", meaning: "I will be able to", conjForm: "fut-1s", example: { jp: "Je pourrai partir à cinq heures.", en: "I'll be able to leave at five." }, accept: ["i'll be able to", "i will be able", "i shall be able to"], hint: "One letter from je pourrais (Unit 44): pourrai = will be able, pourrais = would be able. They sound the same — context decides." },
        { id: "fr-u45l2-voirfut1s", type: "vocab", front: "voir", reading: "voir", meaning: "I will see", conjForm: "fut-1s", example: { jp: "Je verrai le médecin lundi.", en: "I'll see the doctor on Monday." }, accept: ["i'll see", "i shall see", "i am going to see"], hint: "je verrai, \"zhuh vay-RAY\" — the double r is one r. The stem verr- looks nothing like voir, so learn it whole." },
        { id: "fr-u45l2-savoirfut1s", type: "vocab", front: "savoir", reading: "savoir", meaning: "I will know", conjForm: "fut-1s", example: { jp: "Demain, je saurai le prix.", en: "Tomorrow I'll know the price." }, accept: ["i'll know", "i will find out", "i shall know"], hint: "je saurai, \"zhuh so-RAY\" — the saur- stem is \"sor\". Keep it apart from avoir's aur-: j'aurai versus je saurai." },
      ],
    },
    {
      id: "fr-u45l3",
      unit: 45,
      lesson: 3,
      title: "The regular rule",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Build the future of any regular verb: je parlerai, je mangerai, je finirai, je prendrai.",
      items: [
        { id: "fr-u45l3-parlerfut1s", type: "vocab", front: "parler", reading: "parler", meaning: "I will speak", conjForm: "fut-1s", example: { jp: "Je parlerai avec le professeur.", en: "I'll speak with the teacher." }, accept: ["i'll speak", "i will talk", "i'll talk"], hint: "The regular future keeps the WHOLE infinitive and adds the ending: parler + ai → je parlerai. Nothing is removed." },
        { id: "fr-u45l3-mangerfut1s", type: "vocab", front: "manger", reading: "manger", meaning: "I will eat", conjForm: "fut-1s", example: { jp: "Je mangerai à midi.", en: "I'll eat at noon." }, accept: ["i'll eat", "i shall eat", "i am going to eat"], hint: "je mangerai, \"zhuh monzh-RAY\" — the middle e nearly vanishes in speech. This is the regular rule: the whole infinitive plus -ai." },
        { id: "fr-u45l3-travaillerfut1s", type: "vocab", front: "travailler", reading: "travailler", meaning: "I will work", conjForm: "fut-1s", example: { jp: "Je travaillerai samedi.", en: "I'll work on Saturday." }, accept: ["i'll work", "i shall work", "i am going to work"], hint: "je travaillerai, \"zhuh tra-vye-RAY\" — ill is the \"ee-y\" glide and the e before -rai is swallowed. The infinitive, whole, plus the ending." },
        { id: "fr-u45l3-finirfut1s", type: "vocab", front: "finir", reading: "finir", meaning: "I will finish", conjForm: "fut-1s", example: { jp: "Je finirai ce soir.", en: "I'll finish this evening." }, accept: ["i'll finish", "i will end", "i'll end"], hint: "-ir verbs work the same way: finir + ai → je finirai." },
        { id: "fr-u45l3-partirfut1s", type: "vocab", front: "partir", reading: "partir", meaning: "I will leave", conjForm: "fut-1s", example: { jp: "Je partirai très tôt.", en: "I'll leave very early." }, accept: ["i'll leave", "i'll go", "i shall leave"], hint: "je partirai, \"zhuh par-tee-RAY\" — an -ir verb needs no change at all: partir + ai, and the infinitive's r is what you hear." },
        { id: "fr-u45l3-prendrefut1s", type: "vocab", front: "prendre", reading: "prendre", meaning: "I will take", conjForm: "fut-1s", example: { jp: "Je prendrai le train.", en: "I'll take the train." }, accept: ["i'll take", "i'll have", "i shall take"], hint: "A regular -re verb drops only its final e: prendre → prendr + ai. (faire and être are -re verbs that go their own way — fer-, ser-, from lesson 1.)" },
      ],
    },
    {
      id: "fr-u45l4",
      unit: 45,
      lesson: 4,
      title: "Everyone else, in the future",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Take the future through the other persons: tu feras, nous parlerons, vous aurez, ils seront, on verra.",
      items: [
        { id: "fr-u45l4-fairefut2s", type: "vocab", front: "faire", reading: "faire", meaning: "you will do", conjForm: "fut-2s", example: { jp: "Qu'est-ce que tu feras demain ?", en: "What will you do tomorrow?" }, accept: ["you'll do", "you will make", "you'll make"], hint: "tu feras, \"tew fuh-RAH\" — the stem is fer-, not fair-, so the first syllable is a weak \"fuh\". Faire and être are the two -re verbs that go their own way." },
        { id: "fr-u45l4-parlerfut1p", type: "vocab", front: "parler", reading: "parler", meaning: "we will speak", conjForm: "fut-1p", example: { jp: "Nous parlerons français à Paris.", en: "We'll speak French in Paris." }, accept: ["we'll speak", "we will talk", "we'll talk"], hint: "Same six endings on every verb, every time: -ai, -as, -a, -ons, -ez, -ont." },
        { id: "fr-u45l4-avoirfut2p", type: "vocab", front: "avoir", reading: "avoir", meaning: "you will have", conjForm: "fut-2p", example: { jp: "Vous aurez une grande chambre.", en: "You'll have a big room." }, accept: ["you'll have", "you shall have", "you are going to have"], hint: "vous aurez, \"voo zo-RAY\" — the s of vous links as a z onto the aur- stem, and -ez is the closed \"ay\"." },
        { id: "fr-u45l4-etrefut3p", type: "vocab", front: "être", reading: "etre", meaning: "they will be", conjForm: "fut-3p", example: { jp: "Mes parents seront là dimanche.", en: "My parents will be there on Sunday." }, accept: ["they'll be", "they shall be", "they are going to be"], hint: "ils seront, \"eel suh-RON\" — ser- plus the nasal -ont. Note ils seront, they WILL be, against ils sont, they are." },
        { id: "fr-u45l4-venirfut3s", type: "vocab", front: "venir", reading: "venir", meaning: "she will come", conjForm: "fut-3s", example: { jp: "Elle viendra avec ses amis.", en: "She'll come with her friends." }, accept: ["he will come", "she'll come", "he'll come"], hint: "elle viendra, \"el vyan-DRAH\" — the viendr- stem plus -a. One form for il, elle and on alike." },
        { id: "fr-u45l4-voirfut3s", type: "vocab", front: "voir", reading: "voir", meaning: "we'll see", conjForm: "fut-3s", example: { jp: "Peut-être demain — on verra.", en: "Maybe tomorrow — we'll see." }, accept: ["we will see", "we shall see", "one will see"], hint: "On verra is a complete answer on its own — the French \"we'll see\"." },
      ],
    },
  ],
};
