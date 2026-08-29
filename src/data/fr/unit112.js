// FR Unit 112 — Les émotions nuancées (slot: emotion-subtle) — B2
// B1 (u29, u64, u70) already taught the basic affect layer: content/triste/inquiet,
// la joie/la peur/la colère, and the ravi/vexé/soulagé/ému band, plus la nostalgie
// and le regret. This B2 unit goes ONE LEVEL ABOVE: the fine-resolution register of
// SUBTLE, MIXED, HEDGED feeling — ambivalence, resignation, unease, lingering
// bitterness, wistful melancholy and the serenity that answers it. Emotions shown
// in a two-clause, hedged context, not as a single label.
// Every front checked against the 2,168 live fr fronts + block1 (u95-96).
export const FR_UNIT112 = {
  id: "fr-u112",
  lang: "fr",
  title: "Les émotions nuancées",
  order: 112,
  stage: "b2",
  lessons: [
    {
      id: "fr-u112l1",
      unit: 112,
      lesson: 1,
      title: "Torn and ambivalent",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a mixed or conflicted feeling instead of a plain 'happy' or 'sad'.",
      items: [
        { id: "fr-u112l1-ambivalence", type: "vocab", front: "l'ambivalence", reading: "lambivalence", meaning: "ambivalence", example: { jp: "Je sens une certaine ambivalence : je veux ce poste, et pourtant l'idée de partir me fait peur.", en: "I feel a certain ambivalence: I want this job, and yet the idea of leaving scares me." }, accept: ["ambivalence", "the ambivalence"], hint: "l'ambivalence (f.) = holding two opposite feelings at once. The abstract noun behind se sentir partagé." },
        { id: "fr-u112l1-mitige", type: "vocab", front: "mitigé", reading: "mitige", meaning: "mixed", example: { jp: "Les critiques sont mitigées : certains spectateurs sont ravis, d'autres très déçus.", en: "The reviews are mixed: some viewers are delighted, others very disappointed." }, accept: ["mixed", "lukewarm", "qualified"], hint: "mitigé = mixed, lukewarm (un accueil mitigé, des sentiments mitigés). False friend: NOT 'mitigated'." },
        { id: "fr-u112l1-partage", type: "vocab", front: "se sentir partagé", reading: "sesentirpartage", meaning: "to feel torn", example: { jp: "Je me sens partagé : une partie de moi veut accepter, l'autre préfère attendre.", en: "I feel torn: one part of me wants to accept, the other prefers to wait." }, accept: ["to feel torn", "feel torn", "to feel conflicted", "feel conflicted", "to feel divided"], hint: "se sentir partagé = to feel torn between two options. partagé here = 'divided', from partager (Unit 54)." },
        { id: "fr-u112l1-malaise", type: "vocab", front: "le malaise", reading: "lemalaise", meaning: "unease", example: { jp: "Un malaise s'est installé dans la pièce quand il a posé cette question.", en: "An unease settled over the room when he asked that question." }, accept: ["unease", "the unease", "discomfort", "uneasiness", "malaise"], hint: "le malaise = social/moral discomfort, unease. Also physical: 'avoir un malaise' = to feel faint." },
        { id: "fr-u112l1-embarras", type: "vocab", front: "l'embarras", reading: "lembarras", meaning: "embarrassment", example: { jp: "Sa question m'a mis dans l'embarras, car je ne voulais pas y répondre.", en: "His question put me in an awkward spot, because I didn't want to answer it." }, accept: ["embarrassment", "the embarrassment", "awkwardness", "predicament"], hint: "l'embarras (m.) = embarrassment or an awkward predicament. 'mettre qqn dans l'embarras' = to put someone on the spot." },
        { id: "fr-u112l1-gene", type: "vocab", front: "la gêne", reading: "lagene", meaning: "awkwardness", example: { jp: "Il y avait une gêne entre les deux amis depuis la dispute, même s'ils faisaient semblant que tout allait bien.", en: "There was an awkwardness between the two friends after the argument, even though they pretended everything was fine." }, accept: ["awkwardness", "the awkwardness", "embarrassment", "unease"], hint: "la gêne = awkwardness, unease; the noun of gêné (Unit 64, 'embarrassed'). 'sans-gêne' = brazen, pushy." },
      ],
    },
    {
      id: "fr-u112l2",
      unit: 112,
      lesson: 2,
      title: "Resignation and letting go",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about accepting, or giving up on, something you can't change.",
      items: [
        { id: "fr-u112l2-resignation", type: "vocab", front: "la résignation", reading: "laresignation", meaning: "resignation", example: { jp: "Il a accepté la nouvelle avec une résignation triste, comme s'il n'attendait plus rien de la vie.", en: "He took the news with a sad resignation, as if he no longer expected anything from life." }, accept: ["resignation", "the resignation"], hint: "la résignation = passive acceptance of something bad you can't change. Emotional sense, NOT quitting a job (that's démissionner, Unit 63)." },
        { id: "fr-u112l2-lassitude", type: "vocab", front: "la lassitude", reading: "lalassitude", meaning: "weariness", example: { jp: "Elle sentait une grande lassitude : le même travail depuis vingt ans, sans jamais rien changer.", en: "She felt a deep weariness: the same job for twenty years, without ever changing anything." }, accept: ["weariness", "the weariness", "world-weariness"], hint: "la lassitude = mental weariness, a tired-of-it-all feeling. Deeper and more lasting than la fatigue." },
        { id: "fr-u112l2-blase", type: "vocab", front: "blasé", reading: "blase", meaning: "jaded", example: { jp: "À force de tout obtenir sans effort, il est devenu blasé : plus rien ne lui fait envie.", en: "From getting everything effortlessly, he's become jaded: nothing appeals to him anymore." }, accept: ["jaded", "blase", "world-weary", "indifferent"], hint: "blasé = jaded, indifferent from overexposure. In French it's real world-weariness, stronger than the casual English 'blasé'." },
        { id: "fr-u112l2-renoncement", type: "vocab", front: "le renoncement", reading: "lerenoncement", meaning: "giving up", example: { jp: "Après tant d'échecs, il a choisi le renoncement plutôt que de continuer à résister.", en: "After so many failures, he chose to give up rather than keep resisting." }, accept: ["giving up", "renunciation", "the renunciation", "self-denial"], hint: "le renoncement = the act of giving up / renouncing; noun of renoncer (Unit 91). More reflective and deliberate than baisser les bras." },
        { id: "fr-u112l2-faireraison", type: "vocab", front: "se faire une raison", reading: "sefaireuneraison", meaning: "to come to terms with it", example: { jp: "Elle aurait voulu rester, mais elle a fini par se faire une raison et accepter le départ.", en: "She would have liked to stay, but she eventually came to terms with it and accepted the departure." }, accept: ["to come to terms with it", "come to terms with it", "to resign oneself", "resign oneself", "to accept it"], hint: "se faire une raison = to resign oneself, to accept what can't be changed. Fixed idiom, always with une raison." },
        { id: "fr-u112l2-baisserbras", type: "vocab", front: "baisser les bras", reading: "baisserlesbras", meaning: "to give up", example: { jp: "Le projet était difficile, mais l'équipe a refusé de baisser les bras.", en: "The project was hard, but the team refused to give up." }, accept: ["to give up", "give up", "to throw in the towel", "throw in the towel"], hint: "baisser les bras = to give up, throw in the towel (idiom, literally 'lower the arms'). Everyday register." },
      ],
    },
    {
      id: "fr-u112l3",
      unit: 112,
      lesson: 3,
      title: "Bitterness and lingering hurt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a resentful or wistful feeling that stays with you.",
      items: [
        { id: "fr-u112l3-amertume", type: "vocab", front: "l'amertume", reading: "lamertume", meaning: "bitterness", example: { jp: "Il parle de son ancien métier avec amertume : il pense qu'on l'a oublié trop vite.", en: "He speaks of his former job with bitterness: he thinks he was forgotten too quickly." }, accept: ["bitterness", "the bitterness"], hint: "l'amertume (f.) = emotional, lingering bitterness; noun of amer (Unit 85, 'bitter'). 'avec amertume'." },
        { id: "fr-u112l3-depit", type: "vocab", front: "le dépit", reading: "ledepit", meaning: "pique", example: { jp: "Elle est partie de la fête de dépit, vexée de ne pas avoir été invitée à danser.", en: "She left the party out of pique, hurt at not having been asked to dance." }, accept: ["pique", "spite", "the pique", "resentment", "chagrin"], hint: "le dépit = pique, spiteful disappointment from wounded pride. 'de dépit' = out of spite. Don't confuse with 'en dépit de' = despite." },
        { id: "fr-u112l3-ressentiment", type: "vocab", front: "le ressentiment", reading: "leressentiment", meaning: "resentment", example: { jp: "Des années après, il gardait encore du ressentiment contre son frère.", en: "Years later, he still harbored resentment toward his brother." }, accept: ["resentment", "the resentment"], hint: "le ressentiment = long-held resentment. Not to be confused with le pressentiment (Unit 61, 'premonition') — different word." },
        { id: "fr-u112l3-morose", type: "vocab", front: "morose", reading: "morose", meaning: "gloomy", example: { jp: "Depuis l'automne, il se sent morose et ne sort presque plus.", en: "Since autumn, he's felt gloomy and hardly goes out anymore." }, accept: ["gloomy", "morose", "sullen", "glum", "dejected"], hint: "morose = gloomy, sullen, low-spirited. Describes a dull, joyless mood rather than sharp grief." },
        { id: "fr-u112l3-rancune", type: "vocab", front: "la rancune", reading: "larancune", meaning: "grudge", example: { jp: "Il ne garde aucune rancune contre moi, malgré notre dispute.", en: "He holds no grudge against me, despite our argument." }, accept: ["grudge", "the grudge", "resentment", "rancor", "rancour"], hint: "la rancune = a grudge held against a person. 'sans rancune' = no hard feelings." },
        { id: "fr-u112l3-pincement", type: "vocab", front: "un pincement au cœur", reading: "unpincementaucoeur", meaning: "a pang", example: { jp: "En retrouvant son ancienne école, elle a eu un pincement au cœur.", en: "On seeing her old school again, she felt a pang in her heart." }, accept: ["a pang", "pang", "a twinge", "twinge", "a pang in the heart", "a heartache"], hint: "un pincement au cœur = a pang, a sudden twinge of feeling (nostalgia, sadness). Literally 'a pinch at the heart', from pincer (Unit 84)." },
      ],
    },
    {
      id: "fr-u112l4",
      unit: 112,
      lesson: 4,
      title: "Apprehension and serenity",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Contrast the unease before something with the calm that comes after.",
      items: [
        { id: "fr-u112l4-apprehension", type: "vocab", front: "l'appréhension", reading: "lapprehension", meaning: "apprehension", example: { jp: "Avant l'examen, une légère appréhension l'empêchait de dormir.", en: "Before the exam, a slight apprehension kept him from sleeping." }, accept: ["apprehension", "the apprehension", "misgiving"], hint: "l'appréhension (f.) = anxious anticipation of something ahead. More specific and milder than la peur (Unit 29)." },
        { id: "fr-u112l4-serenite", type: "vocab", front: "la sérénité", reading: "laserenite", meaning: "serenity", example: { jp: "Après des années difficiles, elle a enfin retrouvé une certaine sérénité.", en: "After hard years, she has finally found a certain serenity again." }, accept: ["serenity", "the serenity", "calm", "peace of mind"], hint: "la sérénité = serenity, settled calm. The positive counterweight to l'anxiété and l'appréhension." },
        { id: "fr-u112l4-melancolie", type: "vocab", front: "la mélancolie", reading: "lamelancolie", meaning: "melancholy", example: { jp: "Ses vieilles photos lui donnent une douce mélancolie, entre le regret et la tendresse.", en: "Her old photos give her a gentle melancholy, between regret and tenderness." }, accept: ["melancholy", "the melancholy", "wistfulness"], hint: "la mélancolie = wistful, bittersweet sadness. Softer and more reflective than la tristesse." },
        { id: "fr-u112l4-reconfort", type: "vocab", front: "le réconfort", reading: "lereconfort", meaning: "comfort", example: { jp: "Ses quelques mots gentils m'ont apporté un vrai réconfort dans ce moment difficile.", en: "Her few kind words brought me real comfort in that hard moment." }, accept: ["comfort", "the comfort", "solace", "reassurance"], hint: "le réconfort = comfort, solace, emotional support. 'apporter du réconfort à qqn'." },
        { id: "fr-u112l4-apaisant", type: "vocab", front: "apaisant", reading: "apaisant", meaning: "soothing", example: { jp: "Le silence de la campagne est apaisant après le bruit de la ville.", en: "The silence of the countryside is soothing after the noise of the city." }, accept: ["soothing", "calming", "comforting"], hint: "apaisant = soothing, calming (adjective). 'une voix apaisante', 'un climat apaisant'." },
        { id: "fr-u112l4-trouble", type: "vocab", front: "le trouble", reading: "letrouble", meaning: "inner turmoil", example: { jp: "En la retrouvant, il sentit un trouble qu'il ne savait pas expliquer.", en: "Seeing her again, he felt an inner turmoil he couldn't explain." }, accept: ["inner turmoil", "turmoil", "the turmoil", "disquiet", "confusion", "agitation"], hint: "le trouble = inner turmoil, a confused stir of feeling. False friend: English 'trouble' (a problem) = un problème (Unit 39)." },
      ],
    },
  ],
};
