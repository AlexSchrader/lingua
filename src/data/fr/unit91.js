// FR Unit 91 — Se comporter ("Behaving") — B1
// Strand D, coverage unit 11 of 14 (block 3). Slot: coverage-b1-11 (generic
// "Vocabulary 11 (B1)"); given a real theme so the lessons cohere — slot number kept.
// How people ACT rather than how they feel: obeying, giving in, coping, pretending,
// and the praise or telling-off that follows. Deliberately not "emotion, finer
// shades" (block 1's u64) nor "relationships" (block 2's u75).
// See unit84.js for the block-3 strategy.
export const FR_UNIT91 = {
  id: "fr-u91",
  lang: "fr",
  title: "Se comporter",
  order: 91,
  stage: "b1",
  lessons: [
    {
      id: "fr-u91l1",
      unit: 91,
      lesson: 1,
      title: "Going along or not",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how someone responded to being told: behave, react, obey, disobey, give in — or give up.",
      items: [
        { id: "fr-u91l1-secomporter", type: "vocab", front: "se comporter", reading: "secomporter", meaning: "to behave", example: { jp: "Il se comporte bien à l'école.", en: "He behaves well at school." }, accept: ["act", "conduct oneself"] },
        { id: "fr-u91l1-reagir", type: "vocab", front: "réagir", reading: "reagir", meaning: "to react", example: { jp: "Je ne sais pas comment réagir.", en: "I don't know how to react." }, accept: ["respond", "act on it"] },
        { id: "fr-u91l1-obeir", type: "vocab", front: "obéir", reading: "obeir", meaning: "to obey", example: { jp: "Le chien obéit à mon frère.", en: "The dog obeys my brother." }, accept: ["do as told", "comply"], hint: "You obey TO someone in French: obéir à quelqu'un." },
        { id: "fr-u91l1-desobeir", type: "vocab", front: "désobéir", reading: "desobeir", meaning: "to disobey", example: { jp: "Il désobéit souvent à ses parents.", en: "He often disobeys his parents." }, accept: ["defy", "not do as told"] },
        { id: "fr-u91l1-ceder", type: "vocab", front: "céder", reading: "ceder", meaning: "to give in", example: { jp: "Je ne veux pas céder cette fois.", en: "I don't want to give in this time." }, accept: ["yield", "back down", "give way"] },
        { id: "fr-u91l1-renoncer", type: "vocab", front: "renoncer", reading: "renoncer", meaning: "to give up on", example: { jp: "Il a renoncé à ce voyage.", en: "He gave up on that trip." }, accept: ["give up", "renounce", "drop", "forgo"], hint: "You give up ON something: renoncer à. Note it's giving up a plan, not quitting an activity — that's arrêter." },
      ],
    },
    {
      id: "fr-u91l2",
      unit: 91,
      lesson: 2,
      title: "Coping and pretending",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe managing a situation: get by, get used to it, take care of it, take it on, pretend — or do it on purpose.",
      items: [
        { id: "fr-u91l2-sedebrouiller", type: "vocab", front: "se débrouiller", reading: "sedebrouiller", meaning: "to get by", example: { jp: "Je me débrouille bien en français.", en: "I get by well in French." }, accept: ["manage", "cope", "sort it out"], hint: "One of the most useful verbs in spoken French. « Débrouille-toi ! » = sort it out yourself." },
        { id: "fr-u91l2-shabituer", type: "vocab", front: "s'habituer", reading: "shabituer", meaning: "to get used to", example: { jp: "Je m'habitue à mon nouveau travail.", en: "I'm getting used to my new job." }, accept: ["grow accustomed", "adjust"], hint: "Takes à: s'habituer à quelque chose." },
        { id: "fr-u91l2-soccuperde", type: "vocab", front: "s'occuper de", reading: "soccuperde", meaning: "to take care of", example: { jp: "Je m'occupe des enfants ce soir.", en: "I'm taking care of the children this evening." }, accept: ["look after", "deal with", "handle"] },
        { id: "fr-u91l2-sechargerde", type: "vocab", front: "se charger de", reading: "sechargerde", meaning: "to take on", example: { jp: "Je me charge de la réservation.", en: "I'll take care of the booking." }, accept: ["undertake", "see to", "take responsibility for"], hint: "A shade more formal than s'occuper de, and more about accepting the job." },
        { id: "fr-u91l2-fairesemblant", type: "vocab", front: "faire semblant", reading: "fairesemblant", meaning: "to pretend", example: { jp: "Il fait semblant de dormir.", en: "He's pretending to sleep." }, accept: ["make believe", "act as if", "fake it"], hint: "Followed by de + infinitive: faire semblant de dormir." },
        { id: "fr-u91l2-expres", type: "vocab", front: "exprès", reading: "expres", meaning: "on purpose", example: { jp: "Je ne l'ai pas fait exprès.", en: "I didn't do it on purpose." }, accept: ["deliberately", "intentionally"], hint: "« Je ne l'ai pas fait exprès » is THE apology for an accident — learn it whole." },
      ],
    },
    {
      id: "fr-u91l3",
      unit: 91,
      lesson: 3,
      title: "Habits and manner",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the pattern in how someone acts: their conduct, their attitude, a gesture, a habit, a reflex, a quirk.",
      items: [
        { id: "fr-u91l3-laconduite", type: "vocab", front: "la conduite", reading: "laconduite", meaning: "conduct", example: { jp: "Sa conduite en classe est parfaite.", en: "Their conduct in class is perfect." }, accept: ["behaviour", "the conduct"], hint: "Also driving — the noun behind the je conduis you already know. « Une leçon de conduite » is a driving lesson." },
        { id: "fr-u91l3-lattitude", type: "vocab", front: "l'attitude", reading: "lattitude", meaning: "attitude", example: { jp: "Je n'aime pas son attitude.", en: "I don't like their attitude." }, accept: ["the attitude", "stance"] },
        { id: "fr-u91l3-legeste", type: "vocab", front: "le geste", reading: "legeste", meaning: "gesture", example: { jp: "C'est un geste très gentil.", en: "That's a very kind gesture." }, accept: ["the gesture", "movement", "act"] },
        { id: "fr-u91l3-lhabitude", type: "vocab", front: "l'habitude", reading: "lhabitude", meaning: "habit", example: { jp: "J'ai l'habitude de me lever tôt.", en: "I'm in the habit of getting up early." }, accept: ["the habit", "custom", "routine"], hint: "The noun behind d'habitude, which you already know." },
        { id: "fr-u91l3-lereflexe", type: "vocab", front: "le réflexe", reading: "lereflexe", meaning: "reflex", example: { jp: "C'est devenu un réflexe.", en: "It's become a reflex." }, accept: ["the reflex", "automatic reaction"] },
        { id: "fr-u91l3-lamanie", type: "vocab", front: "la manie", reading: "lamanie", meaning: "quirk", example: { jp: "Il a la manie de tout ranger.", en: "He has this quirk of tidying everything." }, accept: ["odd habit", "obsession", "the mania"] },
      ],
    },
    {
      id: "fr-u91l4",
      unit: 91,
      lesson: 4,
      title: "Telling off and praising",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "React to how someone behaved: tell them off, punish them, reward them, congratulate them, encourage them — or put them off.",
      items: [
        { id: "fr-u91l4-gronder", type: "vocab", front: "gronder", reading: "gronder", meaning: "to tell off", example: { jp: "Sa mère va le gronder.", en: "His mother is going to tell him off." }, accept: ["scold", "give a telling-off", "rebuke"] },
        { id: "fr-u91l4-punir", type: "vocab", front: "punir", reading: "punir", meaning: "to punish", example: { jp: "Le professeur ne veut pas punir la classe.", en: "The teacher doesn't want to punish the class." }, accept: ["penalize", "discipline"] },
        { id: "fr-u91l4-recompenser", type: "vocab", front: "récompenser", reading: "recompenser", meaning: "to reward", example: { jp: "Il faut récompenser les élèves.", en: "You have to reward the pupils." }, accept: ["give a reward"] },
        { id: "fr-u91l4-feliciter", type: "vocab", front: "féliciter", reading: "feliciter", meaning: "to congratulate", example: { jp: "Je veux féliciter mon collègue.", en: "I want to congratulate my colleague." }, accept: ["praise", "compliment"], hint: "« Félicitations ! » is the word on every congratulations card." },
        { id: "fr-u91l4-encourager", type: "vocab", front: "encourager", reading: "encourager", meaning: "to encourage", example: { jp: "Mes parents m'encouragent beaucoup.", en: "My parents encourage me a lot." }, accept: ["cheer on", "spur on", "support"] },
        { id: "fr-u91l4-decourager", type: "vocab", front: "décourager", reading: "decourager", meaning: "to discourage", example: { jp: "Ce résultat peut décourager les élèves.", en: "This result can discourage the pupils." }, accept: ["put off", "dishearten", "demoralize"] },
      ],
    },
  ],
};
