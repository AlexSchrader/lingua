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
        { id: "fr-u57l1-quelquun", type: "vocab", front: "quelqu'un", reading: "quelquun", meaning: "someone", example: { jp: "Il y a quelqu'un à la porte.", en: "There's someone at the door." }, accept: ["somebody", "anyone", "anybody"] },
        { id: "fr-u57l1-quelquechose", type: "vocab", front: "quelque chose", reading: "quelquechose", meaning: "something", example: { jp: "Je veux manger quelque chose.", en: "I want to eat something." }, accept: ["anything", "a thing"], hint: "The pair of rien: quelque chose / rien, quelqu'un / personne." },
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
      canDo: "Talk about time on the big scale: life, death, a birthday, age, the right moment, and how many times.",
      items: [
        { id: "fr-u57l2-lavie", type: "vocab", front: "la vie", reading: "lavie", meaning: "life", example: { jp: "La vie est belle.", en: "Life is beautiful." }, accept: ["the life", "living"] },
        { id: "fr-u57l2-lamort", type: "vocab", front: "la mort", reading: "lamort", meaning: "death", example: { jp: "C'est une question de vie ou de mort.", en: "It's a question of life or death." }, accept: ["the death", "dying"] },
        { id: "fr-u57l2-lanniversaire", type: "vocab", front: "l'anniversaire", reading: "lanniversaire", meaning: "birthday", example: { jp: "L'anniversaire de Marie est en mai.", en: "Marie's birthday is in May." }, accept: ["the birthday", "anniversary"] },
        { id: "fr-u57l2-lage", type: "vocab", front: "l'âge", reading: "lage", meaning: "age", example: { jp: "L'âge n'est pas important.", en: "Age isn't important." }, accept: ["the age"] },
        { id: "fr-u57l2-lemoment", type: "vocab", front: "le moment", reading: "lemoment", meaning: "moment", example: { jp: "C'est le bon moment.", en: "It's the right moment." }, accept: ["the moment", "time", "point"], hint: "le bon moment = the right time. bon here means \"right\", not \"good\"." },
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
      canDo: "Describe a situation you're stuck in and how to get out of it: a problem, a solution, a case, a way, a means.",
      items: [
        { id: "fr-u57l3-leprobleme", type: "vocab", front: "le problème", reading: "leprobleme", meaning: "problem", example: { jp: "Il n'y a pas de problème.", en: "There's no problem." }, accept: ["the problem", "issue", "trouble"] },
        { id: "fr-u57l3-lasolution", type: "vocab", front: "la solution", reading: "lasolution", meaning: "solution", example: { jp: "Je cherche une solution.", en: "I'm looking for a solution." }, accept: ["the solution", "answer", "fix"] },
        { id: "fr-u57l3-lecas", type: "vocab", front: "le cas", reading: "lecas", meaning: "case", example: { jp: "Ce n'est pas le cas.", en: "That's not the case." }, accept: ["the case", "situation", "instance"] },
        { id: "fr-u57l3-lasituation", type: "vocab", front: "la situation", reading: "lasituation", meaning: "situation", example: { jp: "La situation est difficile.", en: "The situation is difficult." }, accept: ["the situation", "circumstances", "state of things"] },
        { id: "fr-u57l3-lafacon", type: "vocab", front: "la façon", reading: "lafacon", meaning: "way", example: { jp: "C'est une bonne façon de faire.", en: "That's a good way of doing it." }, accept: ["the way", "manner", "method"] },
        { id: "fr-u57l3-lemoyen", type: "vocab", front: "le moyen", reading: "lemoyen", meaning: "means", example: { jp: "Le train est un bon moyen.", en: "The train is a good means." }, accept: ["the means", "way", "method"], hint: "un moyen de transport is the everyday pairing — a means of transport." },
      ],
    },
    {
      id: "fr-u57l4",
      unit: 57,
      lesson: 4,
      title: "Names and stories",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Refer back to something already mentioned: its name, a first name, the story, this part, the rest, what comes next.",
      items: [
        { id: "fr-u57l4-lenom", type: "vocab", front: "le nom", reading: "lenom", meaning: "name", example: { jp: "Quel est le nom de la rue ?", en: "What's the name of the street?" }, accept: ["the name", "surname", "last name"] },
        { id: "fr-u57l4-leprenom", type: "vocab", front: "le prénom", reading: "leprenom", meaning: "first name", example: { jp: "Mon prénom est Paul.", en: "My first name is Paul." }, accept: ["the first name", "given name", "forename"], hint: "pré- (before) + nom: the name that comes before the family name." },
        { id: "fr-u57l4-lhistoire", type: "vocab", front: "l'histoire", reading: "lhistoire", meaning: "story", example: { jp: "C'est une belle histoire.", en: "It's a beautiful story." }, accept: ["the story", "history", "tale"], hint: "One word for both: une histoire is a story, l'histoire is history." },
        { id: "fr-u57l4-lapartie", type: "vocab", front: "la partie", reading: "lapartie", meaning: "part", example: { jp: "Cette partie est difficile.", en: "This part is difficult." }, accept: ["the part", "section", "portion"] },
        { id: "fr-u57l4-lereste", type: "vocab", front: "le reste", reading: "lereste", meaning: "the rest", example: { jp: "Je vais manger le reste.", en: "I'm going to eat the rest." }, accept: ["remainder", "what's left", "leftovers"] },
        { id: "fr-u57l4-lasuite", type: "vocab", front: "la suite", reading: "lasuite", meaning: "what comes next", example: { jp: "Je veux connaître la suite.", en: "I want to know what comes next." }, accept: ["the rest", "the sequel", "continuation", "follow-up"] },
      ],
    },
  ],
};
