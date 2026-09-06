// FR Unit 57 — Quelqu'un et quelque chose ("Someone and something") — A2
// Strand D, coverage unit 11 of 11 (block 3) — the last unit of French A2.
// Slot: coverage-a2-11 (generic "Vocabulary 11 (A2)"); given a real theme so the
// four lessons cohere — the slot NUMBER is kept, only the name deviates. See
// unit48.js for the block-3 rules.
// The indefinites (someone, something, anyone) plus the abstract nouns that hold a
// conversation together when you don't have the specific word: a moment, a problem,
// a way, a name, the rest. The last thing an A2 learner needs to stop stalling.
export const FR_UNIT57 = {
  id: "fr-u57",
  lang: "fr",
  title: "Quelqu'un et quelque chose",
  order: 57,
  stage: "a2",
  lessons: [
    {
      id: "fr-u57l1",
      unit: 57,
      lesson: 1,
      title: "Someone and something",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about people and things you can't or won't name: someone, something, anything, anyone, the others, nobody else.",
      items: [
        { id: "fr-u57l1-quelquun", type: "vocab", front: "quelqu'un", reading: "quelquun", meaning: "someone", example: { jp: "Il y a quelqu'un à la porte.", en: "There's someone at the door." }, accept: ["somebody"], hint: "In a plain statement it's SOMEone, not \"anyone\" — anyone-at-all is n'importe qui, later in this lesson." },
        { id: "fr-u57l1-quelquechose", type: "vocab", front: "quelque chose", reading: "quelquechose", meaning: "something", example: { jp: "Je veux manger quelque chose.", en: "I want to eat something." }, accept: ["some thing"], hint: "The pair of rien: quelque chose / rien, quelqu'un / personne." },
        { id: "fr-u57l1-nimportequoi", type: "vocab", front: "n'importe quoi", reading: "nimportequoi", meaning: "anything at all", example: { jp: "Je ne veux pas manger n'importe quoi.", en: "I don't want to eat just anything." }, accept: ["whatever", "any old thing", "nonsense"], hint: "Also the everyday way to call something nonsense: « c'est n'importe quoi ! »" },
        { id: "fr-u57l1-nimportequi", type: "vocab", front: "n'importe qui", reading: "nimportequi", meaning: "anyone at all", example: { jp: "Ce n'est pas pour n'importe qui.", en: "It's not for just anyone." }, accept: ["anybody", "whoever", "just anyone"] },
        { id: "fr-u57l1-lesautres", type: "vocab", front: "les autres", reading: "lesautres", meaning: "the others", example: { jp: "Les autres sont déjà là.", en: "The others are already there." }, accept: ["the rest of them", "other people", "everyone else"] },
        { id: "fr-u57l1-personnedautre", type: "vocab", front: "personne d'autre", reading: "personnedautre", meaning: "nobody else", example: { jp: "Il n'y a personne d'autre ici.", en: "There's nobody else here." }, accept: ["no one else", "nobody but"] },
      ],
    },
    {
      id: "fr-u57l2",
      unit: 57,
      lesson: 2,
      title: "Life and moments",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about time on the big scale: childhood, the future, death, a birthday, age — and count how many times something happened.",
      items: [
        { id: "fr-u57l2-lenfance", type: "vocab", front: "l'enfance", reading: "lenfance", meaning: "childhood", example: { jp: "Je pense à mon enfance.", en: "I think about my childhood." }, drill: { jp: "L'enfance est très importante", en: "Childhood is very important" }, accept: ["the childhood", "early years"], hint: "Feminine, from l'enfant — une enfance heureuse." },
        { id: "fr-u57l2-lamort", type: "vocab", front: "la mort", reading: "lamort", meaning: "death", example: { jp: "C'est une question de vie ou de mort.", en: "It's a question of life or death." }, accept: ["the death", "dying"] },
        { id: "fr-u57l2-lanniversaire", type: "vocab", front: "l'anniversaire", reading: "lanniversaire", meaning: "birthday", example: { jp: "L'anniversaire de Marie est en mai.", en: "Marie's birthday is in May." }, accept: ["the birthday", "anniversary"], hint: "Masculine — un anniversaire. It covers both a birthday and a wedding anniversary; you'll hear « Joyeux anniversaire ! »" },
        { id: "fr-u57l2-lage", type: "vocab", front: "l'âge", reading: "lage", meaning: "age", example: { jp: "L'âge n'est pas important.", en: "Age isn't important." }, accept: ["the age"] },
        { id: "fr-u57l2-lavenir", type: "vocab", front: "l'avenir", reading: "lavenir", meaning: "the future", example: { jp: "L'avenir est important.", en: "The future is important." }, accept: ["future", "years ahead"], hint: "Masculine — un avenir. Literally « à venir », what is still to come." },
        { id: "fr-u57l2-lafois", type: "vocab", front: "la fois", reading: "lafois", meaning: "time (occasion)", example: { jp: "Je vais essayer encore une fois.", en: "I'm going to try one more time." }, accept: ["occasion", "the time", "instance"], hint: "Three French words for \"time\": la fois counts occasions, l'heure is clock time, and le temps is time in general." },
      ],
    },
    {
      id: "fr-u57l3",
      unit: 57,
      lesson: 3,
      title: "Problems and solutions",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe a situation you're stuck in and what you're aiming at: a difficulty, a goal, a case, a way, a means.",
      items: [
        { id: "fr-u57l3-ladifficulte", type: "vocab", front: "la difficulté", reading: "ladifficulte", meaning: "difficulty", example: { jp: "Il y a une difficulté.", en: "There's a difficulty." }, drill: { jp: "La difficulté est très grande", en: "The difficulty is very great" }, accept: ["the difficulty", "snag", "hurdle"] },
        { id: "fr-u57l3-lebut", type: "vocab", front: "le but", reading: "lebut", meaning: "the goal", example: { jp: "Quel est le but ?", en: "What's the goal?" }, accept: ["aim", "purpose", "objective"], hint: "Also the goal you score in football — same word." },
        { id: "fr-u57l3-lecas", type: "vocab", front: "le cas", reading: "lecas", meaning: "case", example: { jp: "Ce n'est pas le cas.", en: "That's not the case." }, accept: ["the case", "instance"], hint: "« Ce n'est pas le cas » — that's not how it is. The s is silent." },
        { id: "fr-u57l3-lasituation", type: "vocab", front: "la situation", reading: "lasituation", meaning: "situation", example: { jp: "La situation est difficile.", en: "The situation is difficult." }, accept: ["the situation", "circumstances", "state of things"] },
        { id: "fr-u57l3-lafacon", type: "vocab", front: "la façon", reading: "lafacon", meaning: "way", example: { jp: "C'est une bonne façon de faire.", en: "That's a good way of doing it." }, drill: { jp: "La façon est très simple", en: "The way is very simple" }, accept: ["the way", "manner", "method"] },
        { id: "fr-u57l3-lemoyen", type: "vocab", front: "le moyen", reading: "lemoyen", meaning: "means", example: { jp: "Le train est un bon moyen de transport.", en: "The train is a good means of transport." }, accept: ["the means", "method", "resource"], hint: "Rarely stands alone — un moyen de transport, un moyen de payer. la façon is the MANNER of doing it; le moyen is the tool you do it WITH." },
      ],
    },
    {
      id: "fr-u57l4",
      unit: 57,
      lesson: 4,
      title: "Names and stories",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Refer back to something already mentioned: its name, a first name, its title, one small detail, the rest, what comes next.",
      items: [
        { id: "fr-u57l4-lenom", type: "vocab", front: "le nom", reading: "lenom", meaning: "name", example: { jp: "Quel est le nom de la rue ?", en: "What's the name of the street?" }, accept: ["the name", "surname", "last name"] },
        { id: "fr-u57l4-leprenom", type: "vocab", front: "le prénom", reading: "leprenom", meaning: "first name", example: { jp: "Mon prénom est Paul.", en: "My first name is Paul." }, drill: { jp: "Le prénom est très joli", en: "The first name is very pretty" }, accept: ["the first name", "given name", "forename"], hint: "pré- (before) + nom: the name that comes before the family name." },
        { id: "fr-u57l4-letitre", type: "vocab", front: "le titre", reading: "letitre", meaning: "title", example: { jp: "Quel est le titre du livre ?", en: "What's the title of the book?" }, accept: ["the title", "heading", "headline"] },
        { id: "fr-u57l4-ledetail", type: "vocab", front: "le détail", reading: "ledetail", meaning: "detail", example: { jp: "C'est un petit détail.", en: "It's a small detail." }, accept: ["the detail", "particular", "small point"] },
        { id: "fr-u57l4-lereste", type: "vocab", front: "le reste", reading: "lereste", meaning: "the rest", example: { jp: "Je vais manger le reste.", en: "I'm going to eat the rest." }, accept: ["remainder", "what's left", "leftovers"] },
        { id: "fr-u57l4-lasuite", type: "vocab", front: "la suite", reading: "lasuite", meaning: "what comes next", example: { jp: "Je veux connaître la suite.", en: "I want to know what comes next." }, accept: ["the sequel", "continuation", "follow-up"], hint: "la suite is what FOLLOWS; le reste is what's LEFT OVER. Different halves of the same story." },
      ],
    },
  ],
};
