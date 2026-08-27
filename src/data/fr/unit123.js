// FR Unit 123 — Les émotions fortes ("Strong emotions") — B2
// Strand D, coverage unit 6 of 13 (block 3, units 121-133). Generic slot
// "Vocabulary 6 (B2)"; given a real theme — DEVIATION FROM THE SLOT NAME ONLY.
//
// ONE LEVEL ABOVE THE SLOT: A2+B1 already teach the everyday feelings (la joie,
// la peur, la colère, la tristesse, la honte, le soulagement, la crainte,
// l'angoisse). This unit authors the INTENSE / FINER-GRAINED emotions a B2
// speaker reaches for — l'euphorie, l'effroi, la fureur, le désespoir. Every
// front checked against the 2,168 A1+A2+B1 fronts and the sibling B2 blocks.
// Conventions: see fr/unit1.js.
export const FR_UNIT123 = {
  id: "fr-u123",
  lang: "fr",
  title: "Les émotions fortes",
  order: 123,
  stage: "b2",
  lessons: [
    {
      id: "fr-u123l1",
      unit: 123,
      lesson: 1,
      title: "Joy and wonder",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name high spirits: l'euphorie, l'enthousiasme, l'émerveillement, l'exaltation, l'admiration, la sérénité.",
      items: [
        { id: "fr-u123l1-leuphorie", type: "vocab", front: "l'euphorie", reading: "leuphorie", meaning: "euphoria", example: { jp: "Après la victoire, l'euphorie de la foule a duré toute la nuit.", en: "After the victory, the crowd's euphoria lasted all night." }, accept: ["euphoria", "the euphoria", "elation"], hint: "A wave of intense joy, often shared by a group." },
        { id: "fr-u123l1-lenthousiasme", type: "vocab", front: "l'enthousiasme", reading: "lenthousiasme", meaning: "enthusiasm", example: { jp: "Elle a accepté avec enthousiasme, car le projet lui plaisait vraiment.", en: "She accepted with enthusiasm, because she really liked the project." }, accept: ["enthusiasm", "the enthusiasm", "eagerness"], hint: "Warm, eager excitement. From enthousiaste." },
        { id: "fr-u123l1-lemerveillement", type: "vocab", front: "l'émerveillement", reading: "lemerveillement", meaning: "wonder", example: { jp: "Les enfants regardaient le feu d'artifice avec émerveillement.", en: "The children watched the fireworks with wonder." }, accept: ["wonder", "the wonder", "amazement"], hint: "From merveille. The delighted awe of seeing something beautiful." },
        { id: "fr-u123l1-lexaltation", type: "vocab", front: "l'exaltation", reading: "lexaltation", meaning: "elation", example: { jp: "Dans son exaltation, il a promis bien plus qu'il ne pouvait tenir.", en: "In his elation, he promised far more than he could deliver." }, accept: ["elation", "the elation", "exaltation", "fervour"], hint: "A feverish high that can cloud judgement." },
        { id: "fr-u123l1-ladmiration", type: "vocab", front: "l'admiration", reading: "ladmiration", meaning: "admiration", example: { jp: "Son courage force l'admiration, même de ceux qui ne l'aiment pas.", en: "His courage compels admiration, even from those who don't like him." }, accept: ["admiration", "the admiration"], hint: "From admirer. forcer l'admiration = to command admiration." },
        { id: "fr-u123l1-leravissement", type: "vocab", front: "le ravissement", reading: "leravissement", meaning: "delight", example: { jp: "Elle a regardé le spectacle avec ravissement, sans dire un mot.", en: "She watched the show with delight, without saying a word." }, accept: ["delight", "the delight", "rapture", "bliss"], hint: "From ravir, to enrapture. A joy so strong it carries you away." },
      ],
    },
    {
      id: "fr-u123l2",
      unit: 123,
      lesson: 2,
      title: "Fear and unease",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name dread: l'effroi, la terreur, l'appréhension, le trouble, la jalousie, le désarroi.",
      items: [
        { id: "fr-u123l2-leffroi", type: "vocab", front: "l'effroi", reading: "leffroi", meaning: "dread", example: { jp: "Un cri a rempli la maison d'effroi au milieu de la nuit.", en: "A scream filled the house with dread in the middle of the night." }, accept: ["dread", "the dread", "terror", "horror"], hint: "Sudden, freezing fear. More literary than la peur." },
        { id: "fr-u123l2-laterreur", type: "vocab", front: "la terreur", reading: "laterreur", meaning: "terror", example: { jp: "La terreur l'a paralysé, si bien qu'il n'a pas pu bouger.", en: "Terror paralysed him, so much so that he couldn't move." }, accept: ["terror", "the terror"], hint: "The most extreme fear. From terrible." },
        { id: "fr-u123l2-lafrayeur", type: "vocab", front: "la frayeur", reading: "lafrayeur", meaning: "fright", example: { jp: "Un bruit soudain lui a causé une frayeur, mais ce n'était rien.", en: "A sudden noise gave him a fright, but it was nothing." }, accept: ["fright", "the fright", "fear", "scare"], hint: "A sharp, sudden fear. From effrayer, to frighten." },
        { id: "fr-u123l2-lemoi", type: "vocab", front: "l'émoi", reading: "lemoi", meaning: "the commotion", example: { jp: "L'annonce a provoqué un grand émoi dans tout le village.", en: "The announcement caused a great commotion in the whole village." }, accept: ["commotion", "the commotion", "agitation", "the stir", "flutter"], hint: "A stir of strong feeling — excitement or worry. Literary." },
        { id: "fr-u123l2-lajalousie", type: "vocab", front: "la jalousie", reading: "lajalousie", meaning: "jealousy", example: { jp: "Sa jalousie gâchait tout, car il ne supportait pas de la voir heureuse avec d'autres.", en: "His jealousy spoiled everything, because he couldn't bear to see her happy with others." }, accept: ["jealousy", "the jealousy", "envy"], hint: "From jaloux. Also la jalousie = a slatted blind." },
        { id: "fr-u123l2-ledesarroi", type: "vocab", front: "le désarroi", reading: "ledesarroi", meaning: "distress", example: { jp: "Devant tant de mauvaises nouvelles, son désarroi se lisait sur son visage.", en: "Faced with so much bad news, her distress could be read on her face." }, accept: ["distress", "the distress", "dismay", "confusion"], hint: "The helpless confusion of not knowing what to do." },
      ],
    },
    {
      id: "fr-u123l3",
      unit: 123,
      lesson: 3,
      title: "Anger and contempt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name hot feelings: la rage, la fureur, le mépris, le ressentiment, le dégoût, l'amertume.",
      items: [
        { id: "fr-u123l3-larage", type: "vocab", front: "la rage", reading: "larage", meaning: "rage", example: { jp: "Fou de rage, il a claqué la porte sans un mot.", en: "Wild with rage, he slammed the door without a word." }, accept: ["rage", "the rage", "fury"], hint: "Violent, boiling anger. Also la rage = rabies." },
        { id: "fr-u123l3-lafureur", type: "vocab", front: "la fureur", reading: "lafureur", meaning: "fury", example: { jp: "Sa fureur est retombée aussi vite qu'elle était montée.", en: "His fury died down as fast as it had risen." }, accept: ["fury", "the fury", "rage"], hint: "From furieux. faire fureur = to be all the rage." },
        { id: "fr-u123l3-lemepris", type: "vocab", front: "le mépris", reading: "lemepris", meaning: "contempt", example: { jp: "Il a regardé leur offre avec mépris, comme si elle ne valait rien.", en: "He looked at their offer with contempt, as if it were worth nothing." }, accept: ["contempt", "the contempt", "scorn", "disdain"], hint: "From mépriser. Looking down on someone or something." },
        { id: "fr-u123l3-lanimosite", type: "vocab", front: "l'animosité", reading: "lanimosite", meaning: "animosity", example: { jp: "Il y a entre eux une animosité que rien ne semble pouvoir calmer.", en: "There is an animosity between them that nothing seems able to calm." }, accept: ["animosity", "the animosity", "hostility", "ill feeling"], hint: "Open, lasting hostility towards someone." },
        { id: "fr-u123l3-ledegout", type: "vocab", front: "le dégoût", reading: "ledegout", meaning: "disgust", example: { jp: "Le dégoût se lisait sur son visage devant un tel spectacle.", en: "Disgust could be read on her face at such a sight." }, accept: ["disgust", "the disgust", "revulsion"], hint: "From dégoûter — the opposite of le goût, taste. Physical or moral." },
        { id: "fr-u123l3-larancoeur", type: "vocab", front: "la rancœur", reading: "larancoeur", meaning: "rancour", example: { jp: "Elle parle de cette époque avec rancœur, car elle en garde un très mauvais souvenir.", en: "She speaks of that time with rancour, because she keeps a very bad memory of it." }, accept: ["rancour", "the rancour", "rancor", "bitterness", "resentment"], hint: "Bitter, long-held resentment. Close to la rancune, a touch more literary." },
      ],
    },
    {
      id: "fr-u123l4",
      unit: 123,
      lesson: 4,
      title: "Sorrow and pity",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name low feelings: le désespoir, la déception, la compassion, la pitié, le remords, la lassitude.",
      items: [
        { id: "fr-u123l4-ledesespoir", type: "vocab", front: "le désespoir", reading: "ledesespoir", meaning: "despair", example: { jp: "Dans son désespoir, elle ne voyait plus aucune solution.", en: "In her despair, she could no longer see any solution." }, accept: ["despair", "the despair", "hopelessness"], hint: "The total loss of hope. From espoir, with the dé- of undoing." },
        { id: "fr-u123l4-ladeception", type: "vocab", front: "la déception", reading: "ladeception", meaning: "disappointment", example: { jp: "Quelle déception : le film était bien moins bon que le livre.", en: "What a disappointment: the film was far less good than the book." }, accept: ["disappointment", "the disappointment", "let-down"], hint: "False friend! Not 'deception' — that's la tromperie. This is being let down." },
        { id: "fr-u123l4-lacompassion", type: "vocab", front: "la compassion", reading: "lacompassion", meaning: "compassion", example: { jp: "Elle a écouté leur histoire avec compassion, sans jamais les juger.", en: "She listened to their story with compassion, never judging them." }, accept: ["compassion", "the compassion", "sympathy"], hint: "Sharing another's suffering. Warmer than la pitié." },
        { id: "fr-u123l4-lapitie", type: "vocab", front: "la pitié", reading: "lapitie", meaning: "pity", example: { jp: "Je n'ai pas besoin de ta pitié, seulement d'un peu d'aide.", en: "I don't need your pity, only a little help." }, accept: ["pity", "the pity", "mercy"], hint: "avoir pitié de = to take pity on. Can feel condescending." },
        { id: "fr-u123l4-lerepentir", type: "vocab", front: "le repentir", reading: "lerepentir", meaning: "repentance", example: { jp: "Son repentir semblait sincère, mais il était déjà trop tard.", en: "His repentance seemed sincere, but it was already too late." }, accept: ["repentance", "the repentance", "remorse", "contrition"], hint: "Deep regret for a wrong done. From se repentir." },
        { id: "fr-u123l4-labattement", type: "vocab", front: "l'abattement", reading: "labattement", meaning: "dejection", example: { jp: "Après l'échec, il est tombé dans un profond abattement.", en: "After the failure, he fell into deep dejection." }, accept: ["dejection", "the dejection", "despondency", "low spirits", "gloom"], hint: "From abattre, to knock down. A heavy, worn-down low mood." },
      ],
    },
  ],
};
