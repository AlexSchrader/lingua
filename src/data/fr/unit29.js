// FR Unit 29 — Les sentiments ("Feelings and states") — A2
// A1 gave the learner three feeling words (fatigué, content, malade) and two
// avoir-idioms (j'ai faim / j'ai soif). This unit is the emotional vocabulary a
// real conversation needs. Deliberately kept to FEELINGS AND STATES — lasting
// character traits (gentil, timide, sérieux…) belong to u24 and to u38, not here.
// NOTE on "happy": A1 already owns content = happy, so heureux is NOT taught here
// as a second word for the same gloss — a choice card offering both would have two
// right answers. The positive side is carried by la joie and by mieux / en forme.
// Conventions + the A2 infinitive decision: see the header of fr/unit28.js.
export const FR_UNIT29 = {
  id: "fr-u29",
  lang: "fr",
  title: "Les sentiments",
  order: 29,
  stage: "a2",
  lessons: [
    {
      id: "fr-u29l1",
      unit: 29,
      lesson: 1,
      title: "How I feel",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how you feel beyond fine or tired: sad, worried, surprised, disappointed, proud, angry.",
      items: [
        { id: "fr-u29l1-triste", type: "vocab", front: "triste", reading: "triste", meaning: "sad", example: { jp: "Je suis triste aujourd'hui.", en: "I'm sad today." }, accept: ["unhappy", "down"], drill: { jp: "Mon ami est triste ce matin", en: "My friend is sad this morning" } },
        { id: "fr-u29l1-inquiet", type: "vocab", front: "inquiet", reading: "inquiet", meaning: "worried", example: { jp: "Je suis inquiet pour mon frère.", en: "I'm worried about my brother." }, accept: ["anxious", "concerned"], drill: { jp: "Je suis inquiet pour ma sœur", en: "I am worried about my sister" }, hint: "For a woman it becomes inquiète — that extra -e is what makes the final t sound." },
        { id: "fr-u29l1-surpris", type: "vocab", front: "surpris", reading: "surpris", meaning: "surprised", example: { jp: "Je suis surpris ! Merci beaucoup.", en: "I'm surprised! Thank you very much." }, drill: { jp: "Je suis très surpris", en: "I am very surprised" }, accept: ["astonished", "taken aback"] },
        { id: "fr-u29l1-decu", type: "vocab", front: "déçu", reading: "decu", meaning: "disappointed", example: { jp: "Je suis déçu : il pleut.", en: "I'm disappointed: it's raining." }, accept: ["let down", "disappointed with"], drill: { jp: "Mon père est très déçu aujourd'hui", en: "My father is very disappointed today" } },
        { id: "fr-u29l1-fier", type: "vocab", front: "fier", reading: "fier", meaning: "proud", example: { jp: "Je suis fier de mon travail.", en: "I'm proud of my work." }, accept: ["proud of"], drill: { jp: "Je suis fier de mes enfants", en: "I am proud of my children" } },
        { id: "fr-u29l1-encolere", type: "vocab", front: "en colère", reading: "encolere", meaning: "angry", example: { jp: "Mon père est en colère parce que ma chambre est sale.", en: "My father is angry because my bedroom is dirty." }, accept: ["cross", "furious", "mad"], drill: { jp: "Ma mère est en colère aujourd'hui", en: "My mother is angry today" }, hint: "French puts you IN the anger: je suis en colère." },
      ],
    },
    {
      id: "fr-u29l2",
      unit: 29,
      lesson: 2,
      title: "What I have",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the feelings French builds with avoir — j'ai peur, j'ai envie, j'ai besoin, j'ai raison — instead of saying I am.",
      items: [
        { id: "fr-u29l2-jaipeur", type: "vocab", front: "j'ai peur", reading: "jaipeur", meaning: "I'm afraid", example: { jp: "J'ai peur ! Il y a une souris.", en: "I'm scared! There's a mouse." }, drill: { jp: "J'ai peur du chien", en: "I'm afraid of the dog" }, accept: ["i am afraid", "i am scared", "im scared"], hint: "French HAS the feeling instead of being it — same shape as j'ai faim and j'ai soif." },
        { id: "fr-u29l2-jaienvie", type: "vocab", front: "j'ai envie", reading: "jaienvie", meaning: "I feel like", example: { jp: "J'ai envie d'un chocolat chaud.", en: "I feel like a hot chocolate." }, accept: ["i fancy", "i feel like it"], drill: { jp: "J'ai envie de danser ce soir", en: "I feel like dancing tonight" } },
        { id: "fr-u29l2-jaibesoin", type: "vocab", front: "j'ai besoin", reading: "jaibesoin", meaning: "I need", example: { jp: "J'ai besoin de ton stylo.", en: "I need your pen." }, accept: ["i need it", "i have need of"], drill: { jp: "J'ai besoin d'un nouveau livre", en: "I need a new book" }, hint: "Always followed by de: j'ai besoin de temps." },
        { id: "fr-u29l2-jairaison", type: "vocab", front: "j'ai raison", reading: "jairaison", meaning: "I'm right", example: { jp: "Je pense que j'ai raison.", en: "I think I'm right." }, accept: ["i am right", "im right"], drill: { jp: "Tu vois que j'ai raison", en: "You see that I am right" } },
        { id: "fr-u29l2-jaitort", type: "vocab", front: "j'ai tort", reading: "jaitort", meaning: "I'm wrong", example: { jp: "Non, j'ai tort : ce n'est pas lundi.", en: "No, I'm wrong: it isn't Monday." }, accept: ["i am wrong", "im wrong", "i am mistaken"], drill: { jp: "Je crois que j'ai tort", en: "I think I am wrong" } },
        { id: "fr-u29l2-jaisommeil", type: "vocab", front: "j'ai sommeil", reading: "jaisommeil", meaning: "I'm sleepy", example: { jp: "Il est minuit, j'ai sommeil.", en: "It's midnight, I'm sleepy." }, accept: ["i am sleepy", "im sleepy", "i feel sleepy"], drill: { jp: "Le soir j'ai sommeil très tôt", en: "In the evening I am sleepy very early" } },
      ],
    },
    {
      id: "fr-u29l3",
      unit: 29,
      lesson: 3,
      title: "Joy, fear and love",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the emotions themselves — joy, fear, love — and say whether you're laughing, crying or smiling.",
      items: [
        { id: "fr-u29l3-lajoie", type: "vocab", front: "la joie", reading: "lajoie", meaning: "joy", example: { jp: "C'est une grande joie pour ma famille.", en: "It's a great joy for my family." }, accept: ["delight", "the joy"], drill: { jp: "La joie des enfants est belle", en: "The children's joy is beautiful" } },
        { id: "fr-u29l3-lapeur", type: "vocab", front: "la peur", reading: "lapeur", meaning: "fear", example: { jp: "La peur, c'est normal.", en: "Fear is normal." }, accept: ["fright", "the fear"], drill: { jp: "La peur arrive souvent la nuit", en: "Fear often comes at night" } },
        { id: "fr-u29l3-lamour", type: "vocab", front: "l'amour", reading: "lamour", meaning: "love", example: { jp: "L'amour, c'est important.", en: "Love is important." }, accept: ["the love"], drill: { jp: "L'amour de ma famille est important", en: "My family's love is important" }, hint: "Masculine, despite the look of it: un grand amour. The apostrophe hides le, not la." },
        { id: "fr-u29l3-rire", type: "vocab", front: "rire", reading: "rire", meaning: "to laugh", example: { jp: "J'aime rire avec mes amis.", en: "I like laughing with my friends." }, accept: ["laugh", "to have a laugh"], drill: { jp: "Je veux rire avec toi", en: "I want to laugh with you" } },
        { id: "fr-u29l3-pleurer", type: "vocab", front: "pleurer", reading: "pleurer", meaning: "to cry", example: { jp: "Je ne veux pas pleurer.", en: "I don't want to cry." }, accept: ["cry", "to weep"], drill: { jp: "Le bébé va pleurer cette nuit", en: "The baby is going to cry tonight" } },
        { id: "fr-u29l3-sourire", type: "vocab", front: "sourire", reading: "sourire", meaning: "to smile", example: { jp: "Je vais sourire pour la photo.", en: "I'm going to smile for the photo." }, accept: ["smile", "to give a smile"], drill: { jp: "Je veux sourire pour mes amis", en: "I want to smile for my friends" }, hint: "Look inside it: sous + rire — the laugh underneath." },
      ],
    },
    {
      id: "fr-u29l4",
      unit: 29,
      lesson: 4,
      title: "Feeling better",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how you're doing overall — alone, together, calm, stressed, on form — and that today things are better.",
      items: [
        { id: "fr-u29l4-seul", type: "vocab", front: "seul", reading: "seul", meaning: "alone", example: { jp: "Je suis seul à la maison.", en: "I'm alone at home." }, accept: ["on my own", "by myself", "lonely"], drill: { jp: "Mon frère travaille seul ce soir", en: "My brother works alone tonight" } },
        { id: "fr-u29l4-ensemble", type: "vocab", front: "ensemble", reading: "ensemble", meaning: "together", example: { jp: "Nous allons au cinéma ensemble.", en: "We're going to the cinema together." }, accept: ["with each other", "all together"], drill: { jp: "Nous allons ensemble au cinéma", en: "We go to the cinema together" } },
        { id: "fr-u29l4-tranquille", type: "vocab", front: "tranquille", reading: "tranquille", meaning: "quiet", example: { jp: "La rue est tranquille le dimanche.", en: "The street is quiet on Sundays." }, accept: ["calm", "peaceful", "still"], drill: { jp: "Le parc est tranquille le matin", en: "The park is quiet in the morning" } },
        { id: "fr-u29l4-mieux", type: "vocab", front: "mieux", reading: "mieux", meaning: "better", example: { jp: "Aujourd'hui, ça va mieux.", en: "Today things are better." }, accept: ["much better", "improved"], drill: { jp: "Mon frère va mieux aujourd'hui", en: "My brother is doing better today" }, hint: "plus is more; mieux is better. It is to bien what better is to well." },
        { id: "fr-u29l4-enforme", type: "vocab", front: "en forme", reading: "enforme", meaning: "in good shape", example: { jp: "Je fais du sport, je suis en forme.", en: "I do sport, I'm in good shape." }, accept: ["fit", "on form", "feeling good"], drill: { jp: "Ma mère est en forme aujourd'hui", en: "My mother is in good shape today" } },
        { id: "fr-u29l4-stresse", type: "vocab", front: "stressé", reading: "stresse", meaning: "stressed", example: { jp: "Le lundi, je suis stressé.", en: "On Mondays I'm stressed." }, accept: ["stressed out", "under stress"], drill: { jp: "Je suis très stressé ce matin", en: "I am very stressed this morning" } },
      ],
    },
  ],
};
