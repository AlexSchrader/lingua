// FR Unit 45 — Conjugation drill 1 (slot: conjugation-1) — A2 · THE FUTURE
// A1 could only reach forward with je vais + verb (Unit 23). This unit drills the
// futur simple: first the two verbs everything else leans on (être, avoir), then
// the irregular stems, then the regular rule, then the rest of the persons.
//
// AUTHORING NOTE — why no group/conjForm tags here. ja's drill units (ja/unit45)
// tag each verb with group + conjForm so it routes to the conjugate card. Those
// fields are JAPANESE: contract.js accepts only godan/ichidan/irregular, and
// src/store/conjugate.js implements Japanese morphology. A French verb has no
// honest value to put there, so these units teach each form as its own vocab
// chunk — exactly how A1 Unit 23 taught j'ai mangé and je suis allé. Wiring the
// conjugate card for French would be an engine change, not a content one.
// Conventions: see fr/unit1.js. Examples use A1 vocab plus Units 38–44.
export const FR_UNIT45 = {
  id: "fr-u45",
  lang: "fr",
  title: "Conjugation drill 1",
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
        { id: "fr-u45l1-jeserai", type: "vocab", front: "je serai", reading: "jeserai", meaning: "I will be", example: { jp: "Demain, je serai à Paris.", en: "Tomorrow I'll be in Paris." }, accept: ["i'll be", "i shall be"], hint: "The future endings are the same for EVERY French verb: -ai, -as, -a, -ons, -ez, -ont. Only the stem changes." },
        { id: "fr-u45l1-tuseras", type: "vocab", front: "tu seras", reading: "tuseras", meaning: "you will be", example: { jp: "Tu seras là à midi ?", en: "Will you be there at noon?" }, accept: ["you'll be", "you are going to be"] },
        { id: "fr-u45l1-ilsera", type: "vocab", front: "il sera", reading: "ilsera", meaning: "he will be", example: { jp: "Il sera content.", en: "He'll be happy." }, accept: ["she will be", "it will be", "he'll be"] },
        { id: "fr-u45l1-nousserons", type: "vocab", front: "nous serons", reading: "nousserons", meaning: "we will be", example: { jp: "Nous serons à la gare à huit heures.", en: "We'll be at the station at eight." }, accept: ["we'll be"] },
        { id: "fr-u45l1-jaurai", type: "vocab", front: "j'aurai", reading: "jaurai", meaning: "I will have", example: { jp: "J'aurai une nouvelle voiture.", en: "I'll have a new car." }, accept: ["i'll have", "i shall have"], hint: "être → ser-, avoir → aur-. The two commonest verbs have the two strangest stems." },
        { id: "fr-u45l1-ilaura", type: "vocab", front: "il aura", reading: "ilaura", meaning: "he will have", example: { jp: "Il aura faim ce soir.", en: "He'll be hungry this evening." }, accept: ["she will have", "it will have", "he'll have"] },
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
        { id: "fr-u45l2-jeferai", type: "vocab", front: "je ferai", reading: "jeferai", meaning: "I will do", example: { jp: "Je ferai les courses demain.", en: "I'll do the shopping tomorrow." }, accept: ["i'll do", "i will make", "i'll make"], hint: "faire → fer-. The irregular futures change the stem and never the ending." },
        { id: "fr-u45l2-jirai", type: "vocab", front: "j'irai", reading: "jirai", meaning: "I will go", example: { jp: "J'irai au marché samedi.", en: "I'll go to the market on Saturday." }, accept: ["i'll go", "i shall go"], hint: "aller → ir-. Nothing of aller survives — this one you simply learn." },
        { id: "fr-u45l2-jeviendrai", type: "vocab", front: "je viendrai", reading: "jeviendrai", meaning: "I will come", example: { jp: "Je viendrai avec ma sœur.", en: "I'll come with my sister." }, accept: ["i'll come"] },
        { id: "fr-u45l2-jepourrai", type: "vocab", front: "je pourrai", reading: "jepourrai", meaning: "I will be able to", example: { jp: "Je pourrai partir à cinq heures.", en: "I'll be able to leave at five." }, accept: ["i'll be able to", "i will be able"], hint: "One letter from je pourrais (Unit 44): pourrai = will be able, pourrais = would be able. They sound the same — context decides." },
        { id: "fr-u45l2-jeverrai", type: "vocab", front: "je verrai", reading: "jeverrai", meaning: "I will see", example: { jp: "Je verrai le médecin lundi.", en: "I'll see the doctor on Monday." }, accept: ["i'll see"] },
        { id: "fr-u45l2-jesaurai", type: "vocab", front: "je saurai", reading: "jesaurai", meaning: "I will know", example: { jp: "Demain, je saurai le prix.", en: "Tomorrow I'll know the price." }, accept: ["i'll know", "i will find out"] },
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
        { id: "fr-u45l3-jeparlerai", type: "vocab", front: "je parlerai", reading: "jeparlerai", meaning: "I will speak", example: { jp: "Je parlerai avec le professeur.", en: "I'll speak with the teacher." }, accept: ["i'll speak", "i will talk", "i'll talk"], hint: "The regular future keeps the WHOLE infinitive and adds the ending: parler + ai → je parlerai. Nothing is removed." },
        { id: "fr-u45l3-jemangerai", type: "vocab", front: "je mangerai", reading: "jemangerai", meaning: "I will eat", example: { jp: "Je mangerai à midi.", en: "I'll eat at noon." }, accept: ["i'll eat"] },
        { id: "fr-u45l3-jetravaillerai", type: "vocab", front: "je travaillerai", reading: "jetravaillerai", meaning: "I will work", example: { jp: "Je travaillerai samedi.", en: "I'll work on Saturday." }, accept: ["i'll work"] },
        { id: "fr-u45l3-jefinirai", type: "vocab", front: "je finirai", reading: "jefinirai", meaning: "I will finish", example: { jp: "Je finirai ce soir.", en: "I'll finish this evening." }, accept: ["i'll finish", "i will end", "i'll end"], hint: "-ir verbs work the same way: finir + ai → je finirai." },
        { id: "fr-u45l3-jepartirai", type: "vocab", front: "je partirai", reading: "jepartirai", meaning: "I will leave", example: { jp: "Je partirai très tôt.", en: "I'll leave very early." }, accept: ["i'll leave", "i'll go"] },
        { id: "fr-u45l3-jeprendrai", type: "vocab", front: "je prendrai", reading: "jeprendrai", meaning: "I will take", example: { jp: "Je prendrai le train.", en: "I'll take the train." }, accept: ["i'll take", "i'll have"], hint: "A regular -re verb drops only its final e: prendre → prendr + ai. (faire and être are -re verbs that go their own way — fer-, ser-, from lesson 1.)" },
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
        { id: "fr-u45l4-tuferas", type: "vocab", front: "tu feras", reading: "tuferas", meaning: "you will do", example: { jp: "Qu'est-ce que tu feras demain ?", en: "What will you do tomorrow?" }, accept: ["you'll do", "you will make", "you'll make"] },
        { id: "fr-u45l4-nousparlerons", type: "vocab", front: "nous parlerons", reading: "nousparlerons", meaning: "we will speak", example: { jp: "Nous parlerons français à Paris.", en: "We'll speak French in Paris." }, accept: ["we'll speak", "we will talk", "we'll talk"], hint: "Same six endings on every verb, every time: -ai, -as, -a, -ons, -ez, -ont." },
        { id: "fr-u45l4-vousaurez", type: "vocab", front: "vous aurez", reading: "vousaurez", meaning: "you will have", example: { jp: "Vous aurez une grande chambre.", en: "You'll have a big room." }, accept: ["you'll have"] },
        { id: "fr-u45l4-ilsseront", type: "vocab", front: "ils seront", reading: "ilsseront", meaning: "they will be", example: { jp: "Mes parents seront là dimanche.", en: "My parents will be there on Sunday." }, accept: ["they'll be"] },
        { id: "fr-u45l4-elleviendra", type: "vocab", front: "elle viendra", reading: "elleviendra", meaning: "she will come", example: { jp: "Elle viendra avec ses amis.", en: "She'll come with her friends." }, accept: ["he will come", "she'll come"] },
        { id: "fr-u45l4-onverra", type: "vocab", front: "on verra", reading: "onverra", meaning: "we'll see", example: { jp: "Peut-être demain — on verra.", en: "Maybe tomorrow — we'll see." }, accept: ["we will see", "we shall see", "one will see"], hint: "On verra is a complete answer on its own — the French \"we'll see\"." },
      ],
    },
  ],
};
