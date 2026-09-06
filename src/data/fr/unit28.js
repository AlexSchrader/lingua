// FR Unit 28 — Les activités ("Activities and routine") — A2
// FIRST UNIT OF FRENCH A2. Conventions are fr/unit1.js's (front = real
// orthography, reading = its ASCII fold, example.jp = the French sentence,
// nouns taught with their article). Two A2-specific decisions, applied across
// blocks 28-37 and documented here once:
//   1. NEW ORDINARY VERBS ARE TAUGHT AS INFINITIVES (nettoyer, jouer, courir).
//      This CONTINUES an A1 convention rather than starting an A2 one: u23l1
//      already teaches five bare infinitives as items (manger, partir, voir,
//      faire, boire) alongside "je vais manger". What A1 left undone was doing it
//      systematically. Examples put every new infinitive in an A1-taught modal
//      frame (je vais / je veux / je peux / je voudrais / j'aime + infinitive),
//      so an A2 verb costs no untaught grammar.
//   2. REFLEXIVE ROUTINE VERBS STAY je-FORMS (je me lave). The reason is
//      GRAMMATICAL, not stylistic, and matters if you are tempted to "tidy" the
//      inconsistency: a reflexive infinitive cannot enter the modal frame that
//      makes decision 1 free, because the pronoun has to agree — je vais me
//      laver, not je vais se laver. Teaching se laver and then modelling it would
//      require pronoun agreement the learner has not met. So the frame trick does
//      NOT transfer, and the je-form set A1 opened at u12l3 (je me lève / je me
//      couche) is extended instead. Do not convert these to infinitives.
//   Note on u45/u46: these infinitives are the natural input for the planned
//   conjugation-drill units, but that is a hope, not a delivery — the conjugate
//   card is Japanese-only today (cardRouting's shouldConjugate needs item.group,
//   which src/data/index.js stamps only from the ja verb-group table). French
//   conjugation needs Feature-lane work that is already logged in
//   BUILD-CHECKLIST.md. Nothing in this block depends on it.
// Examples use only vocab introduced at or before this unit (A1 = u1-u27), plus
// proper names and transparent cognates, plus regular inflections of taught words
// (plural -s, feminine -e) — A1 teaches both rules explicitly (u26l3 le pluriel,
// u5l1 bon/bonne) and its own examples already rely on them. Verbs are the strict
// part: a third-person or other-person form is used ONLY where A1 taught that
// exact chunk (il est / il a / il y a / il fait / il pleut / il neige / il va /
// il vient / ils sont / ils ont / nous sommes / nous avons / nous allons /
// vous êtes / vous avez / tu es / tu as / tu vas), though those chunks are freely
// used with a lexical subject in place of the pronoun (mon père est agriculteur).
// The A1 corpus holds that line and this block holds it too.
// NOT TAUGHT HERE, deliberately: au. The front is already owned by the sounds
// unit (fr-u27l2, where au is the spelling that sounds like "oh"), and one word
// gets one home. The contraction à + le = au is instead glossed by a hint on
// le cinéma below — which is exactly the treatment fr/unit1.js's header already
// records for au as a high-frequency function word met before it is formalised.
// lang/unit/lesson are stamped in index.js.
export const FR_UNIT28 = {
  id: "fr-u28",
  lang: "fr",
  title: "Les activités",
  order: 28,
  stage: "a2",
  lessons: [
    {
      id: "fr-u28l1",
      unit: 28,
      lesson: 1,
      title: "My morning routine",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Walk someone through your morning: wake up, wash, shower, get dressed, brush your teeth — and say when you're hurrying.",
      items: [
        { id: "fr-u28l1-jemereveille", type: "vocab", front: "je me réveille", reading: "jemereveille", meaning: "I wake up", example: { jp: "Je me réveille à sept heures.", en: "I wake up at seven o'clock." }, accept: ["i wake", "wake up", "i awake"], hint: "Two different moments: je me réveille is opening your eyes, je me lève is getting out of bed." },
        { id: "fr-u28l1-jemelave", type: "vocab", front: "je me lave", reading: "jemelave", meaning: "I wash (myself)", example: { jp: "Je me lave les mains dans la salle de bain.", en: "I wash my hands in the bathroom." }, accept: ["i wash", "i wash myself", "i get washed"] },
        { id: "fr-u28l1-jemedouche", type: "vocab", front: "je me douche", reading: "jemedouche", meaning: "I take a shower", example: { jp: "Le matin, je me douche vite.", en: "In the morning I shower quickly." }, accept: ["i shower", "i have a shower", "i take a shower"] },
        { id: "fr-u28l1-jemhabille", type: "vocab", front: "je m'habille", reading: "jemhabille", meaning: "I get dressed", example: { jp: "Je m'habille dans ma chambre.", en: "I get dressed in my bedroom." }, accept: ["i dress", "i put my clothes on", "i am getting dressed"] },
        { id: "fr-u28l1-jemebrosselesdents", type: "vocab", front: "je me brosse les dents", reading: "jemebrosselesdents", meaning: "I brush my teeth", example: { jp: "Je me brosse les dents le matin et le soir.", en: "I brush my teeth morning and evening." }, accept: ["brush my teeth", "i clean my teeth", "i am brushing my teeth"] },
        { id: "fr-u28l1-jemedepeche", type: "vocab", front: "je me dépêche", reading: "jemedepeche", meaning: "I hurry", example: { jp: "Je me dépêche, le bus est là !", en: "I'm hurrying, the bus is here!" }, accept: ["i hurry", "i hurry up", "i rush"] },
      ],
    },
    {
      id: "fr-u28l2",
      unit: 28,
      lesson: 2,
      title: "Chores",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say which chores you do and when — the housework, the dishes, the laundry — and what you're going to clean or tidy.",
      items: [
        { id: "fr-u28l2-lemenage", type: "vocab", front: "le ménage", reading: "lemenage", meaning: "the housework", example: { jp: "Je fais le ménage le samedi.", en: "I do the housework on Saturdays." }, accept: ["housework", "the cleaning", "cleaning"] },
        { id: "fr-u28l2-lavaisselle", type: "vocab", front: "la vaisselle", reading: "lavaisselle", meaning: "the dishes", example: { jp: "Je ne fais pas la vaisselle aujourd'hui.", en: "I'm not doing the dishes today." }, accept: ["the washing-up", "washing up", "dishes"] },
        { id: "fr-u28l2-lalessive", type: "vocab", front: "la lessive", reading: "lalessive", meaning: "the laundry", example: { jp: "Le dimanche, je fais la lessive.", en: "On Sundays I do the laundry." }, accept: ["the washing", "laundry"] },
        { id: "fr-u28l2-nettoyer", type: "vocab", front: "nettoyer", reading: "nettoyer", meaning: "to clean", example: { jp: "Je vais nettoyer la cuisine.", en: "I'm going to clean the kitchen." }, accept: ["clean", "to clean up"], hint: "An A2 first: verbs now arrive in their dictionary form. Slot one straight after je vais, je veux, je peux or j'aime — je vais nettoyer." },
        { id: "fr-u28l2-ranger", type: "vocab", front: "ranger", reading: "ranger", meaning: "to tidy up", example: { jp: "Je vais ranger ma chambre.", en: "I'm going to tidy my bedroom." }, accept: ["tidy", "to put away", "to tidy"] },
        { id: "fr-u28l2-laver", type: "vocab", front: "laver", reading: "laver", meaning: "to wash (something)", example: { jp: "Je veux laver la voiture.", en: "I want to wash the car." }, accept: ["wash", "to wash"], hint: "laver is washing a thing; je me lave (with me) is washing yourself." },
      ],
    },
    {
      id: "fr-u28l3",
      unit: 28,
      lesson: 3,
      title: "Free time",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you like doing in your free time — play, swim, run, dance, sing.",
      items: [
        { id: "fr-u28l3-letempslibre", type: "vocab", front: "le temps libre", reading: "letempslibre", meaning: "free time", example: { jp: "Le week-end, j'ai du temps libre.", en: "At the weekend I have some free time." }, accept: ["spare time", "time off", "free time"] },
        { id: "fr-u28l3-jouer", type: "vocab", front: "jouer", reading: "jouer", meaning: "to play", example: { jp: "J'aime jouer avec mon chien.", en: "I like playing with my dog." }, accept: ["play", "to have fun"] },
        { id: "fr-u28l3-nager", type: "vocab", front: "nager", reading: "nager", meaning: "to swim", example: { jp: "En été, j'aime nager dans la mer.", en: "In summer I like swimming in the sea." }, accept: ["swim", "to go swimming"] },
        { id: "fr-u28l3-courir", type: "vocab", front: "courir", reading: "courir", meaning: "to run", example: { jp: "Je vais courir dans le parc.", en: "I'm going to run in the park." }, accept: ["run", "to go running"] },
        { id: "fr-u28l3-danser", type: "vocab", front: "danser", reading: "danser", meaning: "to dance", example: { jp: "J'aime danser avec mes amis.", en: "I like dancing with my friends." }, accept: ["dance", "to go dancing"] },
        { id: "fr-u28l3-chanter", type: "vocab", front: "chanter", reading: "chanter", meaning: "to sing", example: { jp: "J'aime chanter dans la voiture.", en: "I like singing in the car." }, accept: ["sing", "to sing a song"] },
      ],
    },
    {
      id: "fr-u28l4",
      unit: 28,
      lesson: 4,
      title: "Going out",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what you do for fun — sport, games, a party, the cinema — and say you're going out at the weekend.",
      items: [
        { id: "fr-u28l4-lesport", type: "vocab", front: "le sport", reading: "lesport", meaning: "sport", example: { jp: "Je fais du sport tous les jours.", en: "I do sport every day." }, accept: ["exercise", "sports"] },
        { id: "fr-u28l4-lejeu", type: "vocab", front: "le jeu", reading: "lejeu", meaning: "game", example: { jp: "C'est un jeu facile.", en: "It's an easy game." }, drill: { jp: "Le jeu est très facile", en: "The game is very easy" }, accept: ["a game", "the game"] },
        { id: "fr-u28l4-lafete", type: "vocab", front: "la fête", reading: "lafete", meaning: "party", example: { jp: "Samedi, il y a une fête à l'école.", en: "On Saturday there's a party at the school." }, accept: ["a party", "celebration", "festival"] },
        { id: "fr-u28l4-lecinema", type: "vocab", front: "le cinéma", reading: "lecinema", meaning: "cinema", example: { jp: "Je vais au cinéma avec Paul.", en: "I'm going to the cinema with Paul." }, accept: ["the movies", "movie theatre", "the cinema"], hint: "Watch the little word: à + le squeeze together into au. Je vais au cinéma, but je vais à la gare — a feminine word changes nothing." },
        { id: "fr-u28l4-sortir", type: "vocab", front: "sortir", reading: "sortir", meaning: "to go out", example: { jp: "Le samedi, j'aime sortir avec mes amis.", en: "On Saturdays I like going out with my friends." }, accept: ["go out", "to head out"], hint: "The dictionary form of je sors." },
        { id: "fr-u28l4-lapromenade", type: "vocab", front: "la promenade", reading: "lapromenade", meaning: "a walk", example: { jp: "Le dimanche, je fais une promenade dans le parc.", en: "On Sundays I go for a walk in the park." }, accept: ["a stroll", "walk", "the walk"] },
      ],
    },
  ],
};
