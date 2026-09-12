// FR Unit 70 — L'expérience et la mémoire (slot: experience and memory) — B1
// LAST UNIT OF BLOCK 1. SCOPE BOUNDARY: A2 owns se souvenir, la mémoire, oublier,
// retenir, l'expérience, reconnaître, l'enfance; the sibling blocks own
// l'habitude, marquer. le souvenir (noun) shares the taught se souvenir lexeme
// and is deliberately avoided. So this unit is the register above: recalling
// (se rappeler, évoquer, revivre, graver), lived experience (le vécu, le
// parcours, l'empreinte), the past (le passé, ancien, l'époque, lointain) and
// nostalgia (la nostalgie, le regret, par cœur). Fronts checked against the live
// 1,287 and the sibling B1 blocks. Conventions: fr/unit1.js.
export const FR_UNIT70 = {
  id: "fr-u70",
  lang: "fr",
  title: "L'expérience et la mémoire",
  order: 70,
  stage: "b1",
  lessons: [
    {
      id: "fr-u70l1",
      unit: 70,
      lesson: 1,
      title: "Bringing it back",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about recalling the past: se rappeler, rappeler, évoquer, graver.",
      items: [
        { id: "fr-u70l1-serappeler", type: "vocab", front: "se rappeler", reading: "serappeler", meaning: "to recall", example: { jp: "Je me rappelle encore ce beau voyage en Italie.", en: "I still recall that lovely trip to Italy." }, accept: ["to recall", "to remember"], hint: "To recall — je me rappelle. Note: se rappeler quelque chose, but se souvenir DE quelque chose." },
        { id: "fr-u70l1-rappeler", type: "vocab", front: "rappeler", reading: "rappeler", meaning: "to remind", example: { jp: "Cette chanson me rappelle de bons moments.", en: "This song reminds me of good times." }, drill: { jp: "Cette chanson va me rappeler Paris", en: "This song is going to remind me of Paris" }, accept: ["to remind", "to call back"], hint: "To remind — rappeler quelque chose à quelqu'un. Also to call someone back." },
        { id: "fr-u70l1-evoquer", type: "vocab", front: "évoquer", reading: "evoquer", meaning: "to evoke", example: { jp: "Ce vieux film évoque une époque très différente.", en: "This old film evokes a very different era." }, drill: { jp: "Ce film va évoquer une époque", en: "This film is going to evoke an era" }, accept: ["to evoke", "to bring to mind", "to mention"], hint: "To evoke, bring to mind, or mention — évoquer un souvenir, évoquer un problème." },
        { id: "fr-u70l1-revivre", type: "vocab", front: "revivre", reading: "revivre", meaning: "to relive", example: { jp: "Ces vieilles chansons font revivre le passé.", en: "These old songs bring the past back to life." }, accept: ["to relive", "to live again", "to come alive again"], hint: "To relive, live again — revivre un moment. From vivre, to live." },
        { id: "fr-u70l1-remonter", type: "vocab", front: "remonter", reading: "remonter", meaning: "to date back", example: { jp: "Ce problème remonte à plusieurs années.", en: "This problem dates back several years." }, accept: ["to date back", "to go back", "to go back up"], hint: "To go back in time — remonter à = to date back to. Also to climb back up." },
        { id: "fr-u70l1-graver", type: "vocab", front: "graver", reading: "graver", meaning: "to etch", example: { jp: "Ce moment restera gravé dans ma mémoire.", en: "This moment will stay etched in my memory." }, drill: { jp: "Je vais graver mon nom ici", en: "I am going to etch my name here" }, accept: ["to etch", "to engrave", "to fix in memory"], hint: "To engrave, or to fix in memory — gravé dans la mémoire. Also to burn a disc." },
      ],
    },
    {
      id: "fr-u70l2",
      unit: 70,
      lesson: 2,
      title: "What you've lived",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about lived experience: le vécu, le parcours, familier, une empreinte.",
      items: [
        { id: "fr-u70l2-levecu", type: "vocab", front: "le vécu", reading: "levecu", meaning: "lived experience", example: { jp: "Son vécu l'aide à comprendre les autres.", en: "His lived experience helps him understand others." }, accept: ["lived experience", "the experience", "what one has been through"], hint: "Lived experience, what one has been through — from vivre. Le vécu de chacun est différent." },
        { id: "fr-u70l2-leparcours", type: "vocab", front: "le parcours", reading: "leparcours", meaning: "the path", example: { jp: "Son parcours n'a pas toujours été facile.", en: "His path hasn't always been easy." }, accept: ["path", "the journey", "the route", "the career"], hint: "A path or journey through life or a career — un parcours professionnel. Also a route." },
        { id: "fr-u70l2-familier", type: "vocab", front: "familier", reading: "familier", meaning: "familiar", example: { jp: "Ce nom me semble familier.", en: "This name seems familiar to me." }, accept: ["familiar"], hint: "Familiar — un visage familier. The opposite is étranger, unfamiliar." },
        { id: "fr-u70l2-lepassage", type: "vocab", front: "le passage", reading: "lepassage", meaning: "the passage", example: { jp: "Ce passage de sa vie a été très difficile.", en: "This passage of his life was very hard." }, accept: ["passage", "the moment", "the phase"], hint: "A passage — of a text, of time, or a period in life. Also a passageway." },
        { id: "fr-u70l2-lanecdote", type: "vocab", front: "l'anecdote", reading: "lanecdote", meaning: "the anecdote", example: { jp: "Il connaît beaucoup d'anecdotes sur cette vieille ville.", en: "He knows a lot of anecdotes about this old town." }, accept: ["anecdote", "the story"], hint: "A short, telling story — raconter une anecdote." },
        { id: "fr-u70l2-lempreinte", type: "vocab", front: "l'empreinte", reading: "lempreinte", meaning: "the imprint", example: { jp: "Son enfance a laissé une forte empreinte sur lui.", en: "His childhood left a strong imprint on him." }, drill: { jp: "L'empreinte est très forte", en: "The imprint is very strong" }, accept: ["imprint", "the mark", "the print"], hint: "A lasting mark — l'empreinte du passé. Also a footprint or fingerprint." },
      ],
    },
    {
      id: "fr-u70l3",
      unit: 70,
      lesson: 3,
      title: "The past",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place things in the past: le passé, ancien, une époque, lointain.",
      items: [
        { id: "fr-u70l3-lepasse", type: "vocab", front: "le passé", reading: "lepasse", meaning: "the past", example: { jp: "Il vaut mieux oublier le passé et penser à demain.", en: "It's better to forget the past and think about tomorrow." }, accept: ["the past"], hint: "The past — from the verb passer. Also the past tense. The opposite is l'avenir." },
        { id: "fr-u70l3-ancien", type: "vocab", front: "ancien", reading: "ancien", meaning: "former", example: { jp: "C'est un ancien collègue que je connais bien.", en: "He's a former colleague I know well." }, accept: ["former", "old", "ancient", "ex-"], hint: "Former (before a noun: un ancien élève) or old/ancient (after: un livre ancien)." },
        { id: "fr-u70l3-lepoque", type: "vocab", front: "l'époque", reading: "lepoque", meaning: "the era", example: { jp: "À cette époque, il n'y avait pas d'internet.", en: "At that time, there was no internet." }, accept: ["era", "the time", "the period", "the age"], hint: "An era or period — à l'époque = back then. à l'époque de = in the time of." },
        { id: "fr-u70l3-precedent", type: "vocab", front: "précédent", reading: "precedent", meaning: "previous", example: { jp: "Le mois précédent, il faisait encore chaud.", en: "The previous month, it was still warm." }, accept: ["previous", "preceding", "the one before"], hint: "Previous, preceding — le jour précédent. The opposite is suivant." },
        { id: "fr-u70l3-lointain", type: "vocab", front: "lointain", reading: "lointain", meaning: "distant", example: { jp: "Elle pense souvent à ce pays lointain.", en: "She often thinks about that distant country." }, accept: ["distant", "faraway", "remote"], hint: "Distant, faraway — un pays lointain, un passé lointain. From loin, far." },
        { id: "fr-u70l3-lajeunesse", type: "vocab", front: "la jeunesse", reading: "lajeunesse", meaning: "youth", example: { jp: "Il a passé sa jeunesse à la campagne.", en: "He spent his youth in the countryside." }, accept: ["youth", "the young years", "young people"], hint: "Youth, the young years — dans ma jeunesse = when I was young. Also young people." },
      ],
    },
    {
      id: "fr-u70l4",
      unit: 70,
      lesson: 4,
      title: "Looking back with feeling",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about longing and habit: la nostalgie, le regret, habituel, par cœur.",
      items: [
        { id: "fr-u70l4-lanostalgie", type: "vocab", front: "la nostalgie", reading: "lanostalgie", meaning: "nostalgia", example: { jp: "Il parle de son pays avec beaucoup de nostalgie.", en: "He talks about his country with a lot of nostalgia." }, accept: ["nostalgia", "the longing"], hint: "Nostalgia, longing for the past — avoir la nostalgie de. From the Greek 'return home'." },
        { id: "fr-u70l4-nostalgique", type: "vocab", front: "nostalgique", reading: "nostalgique", meaning: "nostalgic", example: { jp: "Elle est nostalgique de sa vie d'avant.", en: "She's nostalgic for her old life." }, accept: ["nostalgic", "wistful"], hint: "Nostalgic, wistful — être nostalgique de quelque chose. From la nostalgie." },
        { id: "fr-u70l4-leregret", type: "vocab", front: "le regret", reading: "leregret", meaning: "the regret", example: { jp: "Elle est partie sans aucun regret.", en: "She left without any regret." }, accept: ["regret"], hint: "Regret — avoir des regrets. à mon grand regret = to my great regret." },
        { id: "fr-u70l4-regretter", type: "vocab", front: "regretter", reading: "regretter", meaning: "to regret", example: { jp: "Elle regrette son ancienne vie à la campagne.", en: "She misses her old life in the countryside." }, accept: ["to regret", "to miss", "to be sorry"], hint: "To regret, or to miss — je regrette mon erreur; je regrette cette époque = I miss that time." },
        { id: "fr-u70l4-habituel", type: "vocab", front: "habituel", reading: "habituel", meaning: "usual", example: { jp: "À l'heure habituelle, le magasin était déjà fermé.", en: "At the usual time, the shop was already closed." }, accept: ["usual", "customary", "regular"], hint: "Usual, customary — mon trajet habituel. From l'habitude. The opposite is inhabituel." },
        { id: "fr-u70l4-parcoeur", type: "vocab", front: "par cœur", reading: "parcoeur", meaning: "by heart", example: { jp: "Elle connaît cette chanson par cœur.", en: "She knows this song by heart." }, accept: ["by heart", "from memory"], hint: "By heart — apprendre par cœur = to learn by heart. Literally 'by heart', as in English." },
      ],
    },
  ],
};
