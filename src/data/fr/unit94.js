// FR Unit 94 — Tournures courantes ("Everyday turns of phrase") — B1
// Strand D, coverage unit 14 of 14 (block 3) — the last unit of French B1.
// Slot: coverage-b1-14 (generic "Vocabulary 14 (B1)"); given a real theme so the
// lessons cohere — slot number kept.
//
// The fixed expressions a B1 speaker needs to sound like a person rather than a
// textbook. Deliberately NOT discourse connectors — the crew board assigns those to
// block 1's u58-u60 (néanmoins, en revanche, par conséquent, davantage…) and block
// 2 owns grammar-6/7/8 and register-1/2. What's left, and taken here, is the
// verb+noun collocation: expressions that behave like single vocabulary items.
// See unit84.js for the block-3 strategy.
export const FR_UNIT94 = {
  id: "fr-u94",
  lang: "fr",
  title: "Tournures courantes",
  order: 94,
  stage: "b1",
  lessons: [
    {
      id: "fr-u94l1",
      unit: 94,
      lesson: 1,
      title: "Coping and realising",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how you're managing: struggle to do something, realise it, take it into account, do your best — and say it's worth it.",
      items: [
        { id: "fr-u94l1-avoirdumala", type: "vocab", front: "avoir du mal à", reading: "avoirdumala", meaning: "to struggle to", example: { jp: "J'ai du mal à comprendre cet article.", en: "I struggle to understand this article." }, accept: ["find it hard to", "have trouble", "have difficulty"], hint: "Followed by an infinitive: avoir du mal à faire quelque chose." },
        { id: "fr-u94l1-serendrecompte", type: "vocab", front: "se rendre compte", reading: "serendrecompte", meaning: "to realise", example: { jp: "Je me rends compte que c'est difficile.", en: "I realise that it's difficult." }, accept: ["realize", "become aware", "notice"], hint: "Takes que before a clause: se rendre compte que…" },
        { id: "fr-u94l1-tenircomptede", type: "vocab", front: "tenir compte de", reading: "tenircomptede", meaning: "to take into account", example: { jp: "Il faut tenir compte du prix.", en: "You have to take the price into account." }, accept: ["allow for", "bear in mind", "factor in"] },
        { id: "fr-u94l1-fairedesonmieux", type: "vocab", front: "faire de son mieux", reading: "fairedesonmieux", meaning: "to do one's best", example: { jp: "Je fais de mon mieux.", en: "I'm doing my best." }, accept: ["try one's hardest", "do all one can"], hint: "The possessive changes with the person: je fais de MON mieux, tu fais de TON mieux." },
        { id: "fr-u94l1-valoirlapeine", type: "vocab", front: "valoir la peine", reading: "valoirlapeine", meaning: "to be worth it", example: { jp: "Ce voyage en vaut la peine.", en: "This trip is worth it." }, accept: ["be worthwhile", "be worth the trouble"] },
        { id: "fr-u94l1-enavoirmarre", type: "vocab", front: "en avoir marre", reading: "enavoirmarre", meaning: "to be fed up", example: { jp: "J'en ai marre de la pluie.", en: "I'm fed up with the rain." }, accept: ["be sick of", "have had enough"], hint: "Casual but everywhere. Fed up WITH something: en avoir marre de." },
      ],
    },
    {
      id: "fr-u94l2",
      unit: 94,
      lesson: 2,
      title: "Shrugging it off",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Wave something away: it doesn't matter, it's worth a go, to be honest, in any case — and after all.",
      items: [
        { id: "fr-u94l2-peuimporte", type: "vocab", front: "peu importe", reading: "peuimporte", meaning: "it doesn't matter", example: { jp: "Peu importe, on ira demain.", en: "It doesn't matter, we'll go tomorrow." }, accept: ["never mind", "whatever", "no matter"] },
        { id: "fr-u94l2-cavautlecoup", type: "vocab", front: "ça vaut le coup", reading: "cavautlecoup", meaning: "it's worth a go", example: { jp: "Essaie, ça vaut le coup.", en: "Try it, it's worth a go." }, accept: ["it's worth it", "worth a shot"], hint: "The casual cousin of valoir la peine — same idea, more spoken." },
        { id: "fr-u94l2-avraidire", type: "vocab", front: "à vrai dire", reading: "avraidire", meaning: "to be honest", example: { jp: "À vrai dire, je n'aime pas ça.", en: "To be honest, I don't like it." }, accept: ["truth be told", "actually", "to tell the truth"] },
        { id: "fr-u94l2-entoutcas", type: "vocab", front: "en tout cas", reading: "entoutcas", meaning: "in any case", example: { jp: "En tout cas, je serai là.", en: "In any case, I'll be there." }, accept: ["at any rate", "either way"] },
        { id: "fr-u94l2-detoutefacon", type: "vocab", front: "de toute façon", reading: "detoutefacon", meaning: "anyway", example: { jp: "De toute façon, c'est trop tard.", en: "Anyway, it's too late." }, accept: ["regardless", "whatever happens"] },
        { id: "fr-u94l2-apretout", type: "vocab", front: "après tout", reading: "aprestout", meaning: "after all", example: { jp: "Après tout, ce n'est pas grave.", en: "After all, it's not serious." }, accept: ["when all's said and done", "at the end of the day"] },
      ],
    },
    {
      id: "fr-u94l3",
      unit: 94,
      lesson: 3,
      title: "Bit by bit",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how something unfolded over time: gradually, by dint of doing it, all at once, at the same time — or at the time.",
      items: [
        { id: "fr-u94l3-aufuretamesure", type: "vocab", front: "au fur et à mesure", reading: "aufuretamesure", meaning: "as you go along", example: { jp: "Je range au fur et à mesure.", en: "I tidy up as I go along." }, accept: ["progressively", "gradually", "step by step"], hint: "Long but completely fixed — learn it as one word. fur is an old noun that survives only here." },
        { id: "fr-u94l3-aforcede", type: "vocab", front: "à force de", reading: "aforcede", meaning: "by dint of", example: { jp: "À force de travailler, il a réussi.", en: "By dint of working, he succeeded." }, accept: ["through sheer", "by doing it so much", "after enough"] },
        { id: "fr-u94l3-petitapetit", type: "vocab", front: "petit à petit", reading: "petitapetit", meaning: "bit by bit", example: { jp: "Petit à petit, je comprends mieux.", en: "Little by little, I understand better." }, accept: ["little by little", "gradually", "step by step"] },
        { id: "fr-u94l3-dunseulcoup", type: "vocab", front: "d'un seul coup", reading: "dunseulcoup", meaning: "all at once", example: { jp: "Il a tout mangé d'un seul coup.", en: "He ate it all at once." }, accept: ["in one go", "suddenly", "in a single go"] },
        { id: "fr-u94l3-alafois", type: "vocab", front: "à la fois", reading: "alafois", meaning: "at once", example: { jp: "On ne peut pas tout faire à la fois.", en: "You can't do everything at the same time." }, accept: ["at the same time", "both", "simultaneously"] },
        { id: "fr-u94l3-surlecoup", type: "vocab", front: "sur le coup", reading: "surlecoup", meaning: "at the time", example: { jp: "Sur le coup, je n'ai rien dit.", en: "At the time, I didn't say anything." }, accept: ["at first", "in the moment", "there and then"] },
      ],
    },
    {
      id: "fr-u94l4",
      unit: 94,
      lesson: 4,
      title: "Fixed pairings",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the verb+noun pairs French insists on: queue up, take your time, take place, finalise something, do someone a favour — and cause a problem.",
      items: [
        { id: "fr-u94l4-fairelaqueue", type: "vocab", front: "faire la queue", reading: "fairelaqueue", meaning: "to stand in line", example: { jp: "Il faut faire la queue à la caisse.", en: "You have to queue at the till." }, accept: ["queue", "wait in line", "queue up"], hint: "Literally \"to do the tail\" — la queue is an animal's tail as well as a queue." },
        { id: "fr-u94l4-prendresontemps", type: "vocab", front: "prendre son temps", reading: "prendresontemps", meaning: "to take one's time", example: { jp: "Tu peux prendre ton temps.", en: "You can take your time." }, accept: ["not rush", "go slowly"] },
        { id: "fr-u94l4-avoirlieu", type: "vocab", front: "avoir lieu", reading: "avoirlieu", meaning: "to take place", example: { jp: "La réunion aura lieu jeudi.", en: "The meeting will take place on Thursday." }, accept: ["happen", "be held", "occur"] },
        { id: "fr-u94l4-mettreaupoint", type: "vocab", front: "mettre au point", reading: "mettreaupoint", meaning: "to finalise", example: { jp: "Il faut mettre au point les détails.", en: "We need to finalise the details." }, accept: ["sort out", "perfect", "develop"] },
        { id: "fr-u94l4-rendreservice", type: "vocab", front: "rendre service", reading: "rendreservice", meaning: "to do a favour", example: { jp: "Tu m'as rendu service, merci.", en: "You did me a favour, thank you." }, accept: ["help out", "be of service"] },
        { id: "fr-u94l4-poserprobleme", type: "vocab", front: "poser problème", reading: "poserprobleme", meaning: "to cause a problem", example: { jp: "Ce détail peut poser problème.", en: "This detail can cause a problem." }, accept: ["be an issue", "create difficulty"], hint: "No article — poser problème, not « poser un problème », when you mean it in general." },
      ],
    },
  ],
};
