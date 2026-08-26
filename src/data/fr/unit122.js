// FR Unit 122 — Le caractère et le tempérament ("Character and temperament") — B2
// Strand D, coverage unit 5 of 13 (block 3, units 121-133). Generic slot
// "Vocabulary 5 (B2)"; given a real theme so the four lessons cohere — DEVIATION
// FROM THE SLOT NAME ONLY, slot number kept.
//
// ONE LEVEL ABOVE THE SLOT: A2+B1 already teach the everyday adjectives (gentil,
// sévère, timide, curieux) and la volonté, l'ambition, la sagesse. This unit
// authors the ABSTRACT TRAIT NOUNS a B2 speaker uses to sum up a character —
// la générosité, l'orgueil, la méfiance. Every front checked against the 2,168
// A1+A2+B1 fronts and the sibling B2 blocks. Conventions: see fr/unit1.js.
export const FR_UNIT122 = {
  id: "fr-u122",
  lang: "fr",
  title: "Le caractère et le tempérament",
  order: 122,
  stage: "b2",
  lessons: [
    {
      id: "fr-u122l1",
      unit: 122,
      lesson: 1,
      title: "Qualities you admire",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Praise a character: la générosité, la franchise, l'honnêteté, la loyauté, la sincérité, la bonté.",
      items: [
        { id: "fr-u122l1-lagenerosite", type: "vocab", front: "la générosité", reading: "lagenerosite", meaning: "generosity", example: { jp: "Sa générosité est connue de tous, car il aide toujours ceux qui en ont besoin.", en: "His generosity is known to all, because he always helps those in need." }, accept: ["generosity", "the generosity"], hint: "From généreux. The willingness to give — of money, time, or attention." },
        { id: "fr-u122l1-lafranchise", type: "vocab", front: "la franchise", reading: "lafranchise", meaning: "frankness", example: { jp: "J'apprécie sa franchise, même quand la vérité n'est pas facile à entendre.", en: "I appreciate his frankness, even when the truth isn't easy to hear." }, accept: ["frankness", "the frankness", "candour", "openness"], hint: "Speaking plainly. en toute franchise = quite honestly." },
        { id: "fr-u122l1-lhonnetete", type: "vocab", front: "l'honnêteté", reading: "lhonnetete", meaning: "honesty", example: { jp: "Son honnêteté l'empêche de mentir, même pour se protéger.", en: "His honesty stops him from lying, even to protect himself." }, accept: ["honesty", "the honesty"], hint: "From honnête. Note the circumflex: honnêteté." },
        { id: "fr-u122l1-laloyaute", type: "vocab", front: "la loyauté", reading: "laloyaute", meaning: "loyalty", example: { jp: "La loyauté d'un ami se voit dans les moments difficiles, pas dans les bons jours.", en: "A friend's loyalty shows in hard times, not on good days." }, accept: ["loyalty", "the loyalty", "faithfulness"], hint: "From loyal. Staying true to someone or something." },
        { id: "fr-u122l1-lasincerite", type: "vocab", front: "la sincérité", reading: "lasincerite", meaning: "sincerity", example: { jp: "Je ne doute pas de sa sincérité, car ses actes suivent toujours ses paroles.", en: "I don't doubt his sincerity, because his actions always follow his words." }, accept: ["sincerity", "the sincerity"], hint: "Meaning what you say. From sincère." },
        { id: "fr-u122l1-labonte", type: "vocab", front: "la bonté", reading: "labonte", meaning: "goodness", example: { jp: "Sa bonté touche tout le monde, surtout les plus faibles.", en: "His kindness touches everyone, especially the weakest." }, accept: ["kindness", "the kindness", "goodness"], hint: "From bon. A deep, gentle goodness — warmer than la gentillesse." },
      ],
    },
    {
      id: "fr-u122l2",
      unit: 122,
      lesson: 2,
      title: "Flaws",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a fault: l'orgueil, la lâcheté, l'égoïsme, la vanité, la cruauté, l'entêtement.",
      items: [
        { id: "fr-u122l2-lorgueil", type: "vocab", front: "l'orgueil", reading: "lorgueil", meaning: "arrogance", example: { jp: "Son orgueil l'empêche de demander de l'aide, même quand il en a vraiment besoin.", en: "His pride stops him from asking for help, even when he really needs it." }, accept: ["pride", "the pride", "arrogance"], hint: "The bad kind of pride, from orgueilleux. La fierté is the good kind." },
        { id: "fr-u122l2-lalachete", type: "vocab", front: "la lâcheté", reading: "lalachete", meaning: "cowardice", example: { jp: "Par lâcheté, il n'a rien dit, alors qu'il connaissait la vérité.", en: "Out of cowardice, he said nothing, even though he knew the truth." }, accept: ["cowardice", "the cowardice"], hint: "From lâche. The opposite of le courage." },
        { id: "fr-u122l2-legoisme", type: "vocab", front: "l'égoïsme", reading: "legoisme", meaning: "selfishness", example: { jp: "Son égoïsme dérange tout le monde, car il ne pense jamais aux autres.", en: "His selfishness bothers everyone, because he never thinks of others." }, accept: ["selfishness", "the selfishness", "egoism"], hint: "From égoïste. Note the diaeresis: égoïsme." },
        { id: "fr-u122l2-lavanite", type: "vocab", front: "la vanité", reading: "lavanite", meaning: "vanity", example: { jp: "Sa vanité agace ses amis, car il se croit meilleur que tout le monde.", en: "His vanity annoys his friends, because he thinks he's better than everyone." }, accept: ["vanity", "the vanity", "conceit"], hint: "Excessive pride in oneself. From vaniteux." },
        { id: "fr-u122l2-lacruaute", type: "vocab", front: "la cruauté", reading: "lacruaute", meaning: "cruelty", example: { jp: "Personne ne comprend sa cruauté, car ces gens ne lui ont rien fait.", en: "Nobody understands his cruelty, because those people did nothing to him." }, accept: ["cruelty", "the cruelty"], hint: "From cruel. The wish to cause suffering." },
        { id: "fr-u122l2-lentetement", type: "vocab", front: "l'entêtement", reading: "lentetement", meaning: "stubbornness", example: { jp: "Son entêtement l'empêche de changer d'avis, même face aux preuves.", en: "His stubbornness stops him from changing his mind, even faced with evidence." }, accept: ["stubbornness", "the stubbornness", "obstinacy"], hint: "From têtu (via s'entêter). Literally 'digging one's head in'." },
      ],
    },
    {
      id: "fr-u122l3",
      unit: 122,
      lesson: 3,
      title: "Temperament",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a nature: la timidité, la douceur, la gentillesse, la patience, la curiosité, la sévérité.",
      items: [
        { id: "fr-u122l3-latimidite", type: "vocab", front: "la timidité", reading: "latimidite", meaning: "shyness", example: { jp: "Sa timidité l'empêche de parler en public, même s'il connaît bien le sujet.", en: "His shyness stops him from speaking in public, even if he knows the subject well." }, accept: ["shyness", "the shyness", "timidity"], hint: "From timide. Being uneasy in front of others." },
        { id: "fr-u122l3-ladouceur", type: "vocab", front: "la douceur", reading: "ladouceur", meaning: "gentleness", example: { jp: "Elle traite les enfants avec douceur, si bien qu'ils l'adorent.", en: "She treats the children with gentleness, so much so that they adore her." }, accept: ["gentleness", "the gentleness", "softness", "mildness"], hint: "From doux. Softness of manner — also of weather or taste." },
        { id: "fr-u122l3-lagentillesse", type: "vocab", front: "la gentillesse", reading: "lagentillesse", meaning: "kindness", example: { jp: "Sa gentillesse met tout le monde à l'aise dès la première rencontre.", en: "His kindness puts everyone at ease from the very first meeting." }, accept: ["kindness", "the kindness", "niceness"], hint: "From gentil. Everyday kindness; la bonté runs deeper." },
        { id: "fr-u122l3-lapatience", type: "vocab", front: "la patience", reading: "lapatience", meaning: "patience", example: { jp: "Il faut de la patience pour apprendre une langue, car les progrès sont lents.", en: "You need patience to learn a language, because progress is slow." }, accept: ["patience", "the patience"], hint: "From patient. prendre son mal en patience = to grin and bear it." },
        { id: "fr-u122l3-lacuriosite", type: "vocab", front: "la curiosité", reading: "lacuriosite", meaning: "curiosity", example: { jp: "Sa curiosité le pousse à poser mille questions sur tout.", en: "His curiosity drives him to ask a thousand questions about everything." }, accept: ["curiosity", "the curiosity"], hint: "From curieux. Also une curiosité = a sight worth seeing." },
        { id: "fr-u122l3-laseverite", type: "vocab", front: "la sévérité", reading: "laseverite", meaning: "strictness", example: { jp: "La sévérité du professeur surprend au début, mais les élèves finissent par l'apprécier.", en: "The teacher's strictness is surprising at first, but the students come to appreciate it." }, accept: ["strictness", "the strictness", "severity", "harshness"], hint: "From sévère. Being demanding and hard to please." },
      ],
    },
    {
      id: "fr-u122l4",
      unit: 122,
      lesson: 4,
      title: "Bold or guarded",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how someone faces the world: la méfiance, la ruse, l'audace, la fierté, la modestie, la maladresse.",
      items: [
        { id: "fr-u122l4-lamefiance", type: "vocab", front: "la méfiance", reading: "lamefiance", meaning: "distrust", example: { jp: "Sa méfiance l'empêche de faire confiance, même à ses proches.", en: "His distrust stops him from trusting, even his close ones." }, accept: ["distrust", "the distrust", "mistrust", "suspicion"], hint: "From se méfier. The opposite of la confiance." },
        { id: "fr-u122l4-laruse", type: "vocab", front: "la ruse", reading: "laruse", meaning: "cunning", example: { jp: "Il a obtenu ce qu'il voulait par la ruse, pas par le travail.", en: "He got what he wanted by cunning, not by hard work." }, accept: ["cunning", "the cunning", "trickery", "the trick"], hint: "Cleverness used to deceive. rusé comme un renard = sly as a fox." },
        { id: "fr-u122l4-laudace", type: "vocab", front: "l'audace", reading: "laudace", meaning: "boldness", example: { jp: "Il a eu l'audace de dire non au directeur devant tout le monde.", en: "He had the boldness to say no to the director in front of everyone." }, accept: ["boldness", "the boldness", "audacity", "nerve", "daring"], hint: "From audacieux. avoir l'audace de = to have the nerve to." },
        { id: "fr-u122l4-lafierte", type: "vocab", front: "la fierté", reading: "lafierte", meaning: "pride", example: { jp: "Elle regarde son travail avec fierté, car elle y a mis tout son cœur.", en: "She looks at her work with pride, because she put her whole heart into it." }, accept: ["pride", "the pride"], hint: "The GOOD pride, from fier — satisfaction in a real achievement. L'orgueil is the bad kind." },
        { id: "fr-u122l4-lamodestie", type: "vocab", front: "la modestie", reading: "lamodestie", meaning: "modesty", example: { jp: "Malgré son succès, il garde une grande modestie et n'en parle presque jamais.", en: "Despite his success, he keeps a great modesty and hardly ever talks about it." }, accept: ["modesty", "the modesty", "humility"], hint: "From modeste. The opposite of la vanité." },
        { id: "fr-u122l4-lamaladresse", type: "vocab", front: "la maladresse", reading: "lamaladresse", meaning: "clumsiness", example: { jp: "Par maladresse, il a cassé le vase, mais personne ne lui en a voulu.", en: "Out of clumsiness, he broke the vase, but nobody held it against him." }, accept: ["clumsiness", "the clumsiness", "awkwardness", "the blunder"], hint: "From maladroit. Of the hands, or of words — une maladresse = a tactless slip." },
      ],
    },
  ],
};
