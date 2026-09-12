// FR Unit 58 — L'opinion et l'argumentation (slot: opinion) — B1 — block 1
// FIRST UNIT OF FRENCH B1. Two things about how B1 is authored (see
// BUILD-BRIEF-language-blueprint.md §"B1 and B2"): the canDo names a DISCOURSE
// MOVE, not an errand, and EXAMPLES ARE TWO CLAUSES joined by the thing taught —
// the sentence is the lesson.
//
// SCOPE BOUNDARY: the slot title "opinion and agreement" is already taught by
// French A2 (à mon avis, je pense, je crois, je suis d'accord, selon, plutôt que
// are all live in u38+). So this unit authors ONE LEVEL ABOVE it — the register
// of ARGUMENT: making a claim, conceding a point, rebutting, and convincing. Per
// the fr B1 board note, every front was checked against the live 1,287 A1+A2
// fronts before writing (reconnaître, avoir tort, à mon avis, quand même are
// taken and deliberately avoided). Conventions: see fr/unit1.js.
export const FR_UNIT58 = {
  id: "fr-u58",
  lang: "fr",
  title: "L'opinion et l'argumentation",
  order: 58,
  stage: "b1",
  lessons: [
    {
      id: "fr-u58l1",
      unit: 58,
      lesson: 1,
      title: "Making a claim",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Put forward and defend an idea: un argument, soutenir, affirmer, un point de vue.",
      items: [
        { id: "fr-u58l1-largument", type: "vocab", front: "l'argument", reading: "largument", meaning: "the argument", example: { jp: "Son argument est simple, mais personne ne peut vraiment y répondre.", en: "Their argument is simple, but nobody can really answer it." }, accept: ["argument", "point", "the argument", "case"], hint: "A reason you give in a debate — not a quarrel, which is une dispute." },
        { id: "fr-u58l1-soutenir", type: "vocab", front: "soutenir", reading: "soutenir", meaning: "to maintain", example: { jp: "Il soutient que le film est très bon, tandis que tout le monde le trouve long.", en: "He maintains that the film is very good, whereas everyone finds it long." }, accept: ["to maintain", "to argue", "to support", "to hold"], hint: "Also to hold up physically — soutenir un mur. In a debate: to stand by a claim." },
        { id: "fr-u58l1-affirmer", type: "vocab", front: "affirmer", reading: "affirmer", meaning: "to assert", example: { jp: "Elle affirme que c'est vrai, mais elle ne donne jamais de raison.", en: "She asserts that it's true, but she never gives a reason." }, accept: ["to assert", "to state", "to claim", "to affirm"], hint: "Stronger than dire — to state as certain. The opposite of nier." },
        { id: "fr-u58l1-pretendre", type: "vocab", front: "prétendre", reading: "pretendre", meaning: "to claim", example: { jp: "Il prétend qu'il parle cinq langues, mais je ne le crois pas.", en: "He claims he speaks five languages, but I don't believe him." }, accept: ["to claim", "to allege", "to profess"], hint: "False friend! Not 'to pretend' (= faire semblant) — it means to assert something that may be untrue." },
        { id: "fr-u58l1-lepointdevue", type: "vocab", front: "le point de vue", reading: "lepointdevue", meaning: "the point of view", example: { jp: "Je comprends ton point de vue, mais je ne suis pas d'accord avec toi.", en: "I understand your point of view, but I don't agree with you." }, drill: { jp: "Je comprends le point de vue", en: "I understand the point of view" }, accept: ["point of view", "viewpoint", "perspective", "standpoint"], hint: "Literally 'point of sight'. De mon point de vue = from where I stand." },
        { id: "fr-u58l1-lathese", type: "vocab", front: "la thèse", reading: "lathese", meaning: "the argument", example: { jp: "Sa thèse est intéressante, car elle explique beaucoup de choses.", en: "Their thesis is interesting, because it explains a lot of things." }, accept: ["thesis", "the argument", "stance", "the theory"], hint: "The central claim of an essay or a talk — also a doctoral thesis." },
      ],
    },
    {
      id: "fr-u58l2",
      unit: 58,
      lesson: 2,
      title: "Conceding a point",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Grant a point before pushing back: certes, admettre, néanmoins, cependant.",
      items: [
        { id: "fr-u58l2-certes", type: "vocab", front: "certes", reading: "certes", meaning: "admittedly", example: { jp: "Certes, c'est cher, mais la qualité est vraiment bonne.", en: "Admittedly, it's expensive, but the quality is really good." }, drill: { jp: "Certes le prix est cher", en: "Admittedly the price is expensive" }, accept: ["admittedly", "certainly", "of course", "granted"], hint: "Concedes a point you're about to push back on: certes… mais…" },
        { id: "fr-u58l2-admettre", type: "vocab", front: "admettre", reading: "admettre", meaning: "to admit", example: { jp: "Je dois admettre que tu avais raison depuis le début.", en: "I have to admit that you were right from the start." }, drill: { jp: "Je dois admettre mon erreur", en: "I must admit my mistake" }, accept: ["to admit", "to concede", "to acknowledge"], hint: "Also 'to let in' — admettre quelqu'un dans un club." },
        { id: "fr-u58l2-neanmoins", type: "vocab", front: "néanmoins", reading: "neanmoins", meaning: "nevertheless", example: { jp: "Le voyage était long ; néanmoins, tout le monde est resté content.", en: "The journey was long; nevertheless, everyone stayed happy." }, accept: ["nevertheless", "nonetheless", "even so"], hint: "A formal cousin of quand même — signals a contrast despite what came before." },
        { id: "fr-u58l2-cependant", type: "vocab", front: "cependant", reading: "cependant", meaning: "however", example: { jp: "Il travaille beaucoup ; cependant, il n'est jamais fatigué.", en: "He works a lot; however, he's never tired." }, accept: ["however", "yet", "nevertheless"], hint: "The everyday written 'however'. Opens the second clause." },
        { id: "fr-u58l2-toutefois", type: "vocab", front: "toutefois", reading: "toutefois", meaning: "however", example: { jp: "La chambre est petite ; toutefois, elle est très claire.", en: "The room is small; however, it's very bright." }, accept: ["however", "nevertheless", "that said"], hint: "A near-synonym of cependant, a touch more formal — a softer 'however'." },
        { id: "fr-u58l2-conceder", type: "vocab", front: "concéder", reading: "conceder", meaning: "to concede", example: { jp: "Je vous concède ce point, mais je ne change pas d'avis.", en: "I grant you that point, but I'm not changing my mind." }, accept: ["to concede", "to grant", "to admit"], hint: "To grant your opponent a point: je te concède que…" },
      ],
    },
    {
      id: "fr-u58l3",
      unit: 58,
      lesson: 3,
      title: "Pushing back",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Mark disagreement and stand your ground: en revanche, contester, nier, s'opposer.",
      items: [
        { id: "fr-u58l3-enrevanche", type: "vocab", front: "en revanche", reading: "enrevanche", meaning: "on the other hand", example: { jp: "J'aime beaucoup ce livre ; en revanche, je n'aime pas du tout le film.", en: "I really like this book; on the other hand, I don't like the film at all." }, accept: ["on the other hand", "by contrast", "however"], hint: "Marks a clean contrast between two things — not 'revenge', despite the look." },
        { id: "fr-u58l3-contester", type: "vocab", front: "contester", reading: "contester", meaning: "to dispute", example: { jp: "Beaucoup de personnes contestent ce choix, parce qu'elles le trouvent dangereux.", en: "A lot of people dispute this choice, because they find it dangerous." }, accept: ["to dispute", "to contest", "to challenge", "to question"], hint: "To publicly challenge a decision or a result — stronger than ne pas être d'accord." },
        { id: "fr-u58l3-nier", type: "vocab", front: "nier", reading: "nier", meaning: "to deny", example: { jp: "Il nie avoir dit ça, pourtant tout le monde l'a bien compris.", en: "He denies having said that, yet everyone understood it perfectly well." }, accept: ["to deny", "to refute", "to disown"], hint: "To say something isn't true — the opposite of admettre." },
        { id: "fr-u58l3-sopposer", type: "vocab", front: "s'opposer", reading: "sopposer", meaning: "to oppose", example: { jp: "Elle s'oppose à cette idée, parce qu'elle la trouve dangereuse.", en: "She opposes this idea, because she finds it dangerous." }, accept: ["to oppose", "to be against", "to object"], hint: "s'opposer à quelque chose = to be against it. Reflexive, always with à." },
        { id: "fr-u58l3-aucontraire", type: "vocab", front: "au contraire", reading: "aucontraire", meaning: "on the contrary", example: { jp: "Ce n'est pas difficile ; au contraire, c'est très facile.", en: "It's not difficult; on the contrary, it's very easy." }, accept: ["on the contrary", "quite the opposite", "conversely"], hint: "Flatly rejects what was just said and asserts the opposite." },
        { id: "fr-u58l3-refuter", type: "vocab", front: "réfuter", reading: "refuter", meaning: "to refute", example: { jp: "Le professeur a réfuté cette idée avec un seul exemple.", en: "The teacher refuted that idea with a single example." }, accept: ["to refute", "to disprove", "to rebut"], hint: "To prove a claim wrong — stronger than contester, which only challenges it." },
      ],
    },
    {
      id: "fr-u58l4",
      unit: 58,
      lesson: 4,
      title: "Winning them over",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Convince, or settle a question: convaincre, une preuve, démontrer, juger.",
      items: [
        { id: "fr-u58l4-convaincre", type: "vocab", front: "convaincre", reading: "convaincre", meaning: "to convince", example: { jp: "Ses arguments m'ont convaincu, si bien que j'ai changé d'avis.", en: "His arguments convinced me, so I changed my mind." }, accept: ["to convince", "to persuade"], hint: "convaincre quelqu'un de faire = to convince someone to do. Past participle: convaincu." },
        { id: "fr-u58l4-persuader", type: "vocab", front: "persuader", reading: "persuader", meaning: "to persuade", example: { jp: "Elle a persuadé ses parents de la laisser partir.", en: "She persuaded her parents to let her go." }, accept: ["to persuade", "to convince", "to talk into"], hint: "A near-twin of convaincre — persuader quelqu'un de faire quelque chose." },
        { id: "fr-u58l4-lapreuve", type: "vocab", front: "la preuve", reading: "lapreuve", meaning: "the proof", example: { jp: "Sans preuve, on ne peut convaincre personne.", en: "Without proof, you can't convince anyone." }, accept: ["proof", "evidence", "the sign"], hint: "Une preuve is a single piece of evidence. faire ses preuves = to prove oneself." },
        { id: "fr-u58l4-demontrer", type: "vocab", front: "démontrer", reading: "demontrer", meaning: "to demonstrate", example: { jp: "Cette recherche démontre que le climat change vite.", en: "This research demonstrates that the climate is changing fast." }, accept: ["to demonstrate", "to prove", "to show"], hint: "To prove by reasoning or evidence — more formal than montrer." },
        { id: "fr-u58l4-leraisonnement", type: "vocab", front: "le raisonnement", reading: "leraisonnement", meaning: "the reasoning", example: { jp: "Ton raisonnement est clair, mais il oublie un détail important.", en: "Your reasoning is clear, but it forgets an important detail." }, accept: ["reasoning", "the argument", "line of thought"], hint: "The chain of logic itself, from la raison. Un raisonnement, not une raison." },
        { id: "fr-u58l4-juger", type: "vocab", front: "juger", reading: "juger", meaning: "to judge", example: { jp: "Il est difficile de juger une situation qu'on ne connaît pas.", en: "It's hard to judge a situation you don't know." }, accept: ["to judge", "to assess", "to deem"], hint: "To form an opinion or a verdict — also what un juge does in court." },
      ],
    },
  ],
};
