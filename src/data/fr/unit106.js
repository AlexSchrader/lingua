// FR Unit 106 — L'identité et la société (slot: identity and society) — B2
// A2/B1 taught la société, l'égalité, la sécurité (u62), la norme (u68), la
// génération, la classe, le milieu, le préjugé. B2 adds the sociology register:
// identity (l'identité, la communauté, la citoyenneté, l'individu), diversity (la
// mixité, la minorité, le stéréotype, le racisme), living together (la cohésion,
// l'entraide, collectif, l'individualisme) and social norms (le tabou,
// conformiste, les mœurs, la mobilité). Fronts checked against the 2,168 live fr
// fronts. Conventions: fr/unit1.js.
export const FR_UNIT106 = {
  id: "fr-u106",
  lang: "fr",
  title: "L'identité et la société",
  order: 106,
  stage: "b2",
  lessons: [
    {
      id: "fr-u106l1",
      unit: 106,
      lesson: 1,
      title: "Who we are",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about belonging and identity: l'identité, la communauté, la citoyenneté, l'individu.",
      items: [
        { id: "fr-u106l1-lidentite", type: "vocab", front: "l'identité", reading: "lidentite", meaning: "the identity", example: { jp: "La langue fait partie de l'identité d'un peuple.", en: "Language is part of a people's identity." }, accept: ["identity"], hint: "Who someone is — l'identité culturelle. Also a carte d'identité (ID card)." },
        { id: "fr-u106l1-lacommunaute", type: "vocab", front: "la communauté", reading: "lacommunaute", meaning: "the community", example: { jp: "Cette communauté existe depuis très longtemps.", en: "This community has existed for a very long time." }, accept: ["community"], hint: "A group sharing something in common — la communauté locale." },
        { id: "fr-u106l1-lacitoyennete", type: "vocab", front: "la citoyenneté", reading: "lacitoyennete", meaning: "the citizenship", example: { jp: "La citoyenneté donne le droit de voter.", en: "Citizenship gives the right to vote." }, accept: ["citizenship"], hint: "Being a citizen, with its rights and duties — from citoyen." },
        { id: "fr-u106l1-lindividu", type: "vocab", front: "l'individu", reading: "lindividu", meaning: "the individual", example: { jp: "Chaque individu a le droit de choisir sa vie.", en: "Each individual has the right to choose their life." }, accept: ["individual", "the person"], hint: "A single person — l'individu et la société. From individuel." },
        { id: "fr-u106l1-lentourage", type: "vocab", front: "l'entourage", reading: "lentourage", meaning: "those around one", example: { jp: "Son entourage l'aide beaucoup dans la vie.", en: "Those around him help him a lot in life." }, accept: ["those around one", "the circle", "the inner circle"], hint: "The people around you — son entourage proche. From entourer, to surround." },
        { id: "fr-u106l1-culturel", type: "vocab", front: "culturel", reading: "culturel", meaning: "cultural", example: { jp: "Ces différences culturelles sont intéressantes.", en: "These cultural differences are interesting." }, accept: ["cultural"], hint: "To do with culture — un choc culturel, un événement culturel. From la culture." },
      ],
    },
    {
      id: "fr-u106l2",
      unit: 106,
      lesson: 2,
      title: "Difference and division",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about diversity and its problems: la mixité, la minorité, le stéréotype, le racisme.",
      items: [
        { id: "fr-u106l2-lamixite", type: "vocab", front: "la mixité", reading: "lamixite", meaning: "the mix", example: { jp: "Cette école favorise la mixité entre les élèves.", en: "This school encourages mixing among the pupils." }, accept: ["the mix", "the diversity", "the mixing"], hint: "People of different kinds together — la mixité sociale. From mixte." },
        { id: "fr-u106l2-laminorite", type: "vocab", front: "la minorité", reading: "laminorite", meaning: "the minority", example: { jp: "Seule une minorité n'est pas d'accord.", en: "Only a minority disagrees." }, accept: ["minority"], hint: "A small part of a group — une minorité de gens. The opposite of la majorité." },
        { id: "fr-u106l2-lestereotype", type: "vocab", front: "le stéréotype", reading: "lestereotype", meaning: "the stereotype", example: { jp: "Il faut dépasser ces vieux stéréotypes.", en: "We have to get past these old stereotypes." }, accept: ["stereotype", "the cliché"], hint: "A fixed, oversimplified image of a group — les stéréotypes sur les femmes." },
        { id: "fr-u106l2-marginaliser", type: "vocab", front: "marginaliser", reading: "marginaliser", meaning: "to marginalise", example: { jp: "Ce système marginalise les plus pauvres.", en: "This system marginalises the poorest." }, accept: ["to marginalise", "to sideline", "to exclude"], hint: "To push to the edge of society — from marginal." },
        { id: "fr-u106l2-lexclusion", type: "vocab", front: "l'exclusion", reading: "lexclusion", meaning: "the exclusion", example: { jp: "La pauvreté mène souvent à l'exclusion.", en: "Poverty often leads to exclusion." }, accept: ["exclusion"], hint: "Being shut out of society — l'exclusion sociale. The opposite of l'inclusion." },
        { id: "fr-u106l2-leracisme", type: "vocab", front: "le racisme", reading: "leracisme", meaning: "racism", example: { jp: "Le racisme reste un vrai problème dans la société.", en: "Racism remains a real problem in society." }, accept: ["racism"], hint: "Prejudice based on race — lutter contre le racisme." },
      ],
    },
    {
      id: "fr-u106l3",
      unit: 106,
      lesson: 3,
      title: "Living together",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about social bonds: la cohésion, l'entraide, collectif, un clivage.",
      items: [
        { id: "fr-u106l3-lacohesion", type: "vocab", front: "la cohésion", reading: "lacohesion", meaning: "the cohesion", example: { jp: "Le sport aide à la cohésion de l'équipe.", en: "Sport helps the cohesion of the team." }, accept: ["cohesion", "the unity", "the togetherness"], hint: "How well a group holds together — la cohésion sociale. From cohérent." },
        { id: "fr-u106l3-lentraide", type: "vocab", front: "l'entraide", reading: "lentraide", meaning: "mutual aid", example: { jp: "L'entraide entre amis compte beaucoup ici.", en: "Mutual help between friends matters a lot here." }, accept: ["mutual aid", "the helping each other", "solidarity"], hint: "People helping each other — from s'entraider (entre + aider)." },
        { id: "fr-u106l3-collectif", type: "vocab", front: "collectif", reading: "collectif", meaning: "collective", example: { jp: "Il faut trouver une solution collective.", en: "We have to find a collective solution." }, accept: ["collective", "joint", "shared"], hint: "Shared by a group — un effort collectif. The opposite of individuel." },
        { id: "fr-u106l3-lindividualisme", type: "vocab", front: "l'individualisme", reading: "lindividualisme", meaning: "individualism", example: { jp: "L'individualisme est de plus en plus fort.", en: "Individualism is getting stronger and stronger." }, accept: ["individualism"], hint: "Putting the individual before the group — the opposite of the collectif spirit." },
        { id: "fr-u106l3-leclivage", type: "vocab", front: "le clivage", reading: "leclivage", meaning: "the divide", example: { jp: "Il y a un vrai clivage entre les générations.", en: "There's a real divide between the generations." }, accept: ["the divide", "the split", "the rift"], hint: "A deep dividing line in society — un clivage politique." },
        { id: "fr-u106l3-lefosse", type: "vocab", front: "le fossé", reading: "lefosse", meaning: "the gap", example: { jp: "Le fossé entre riches et pauvres augmente.", en: "The gap between rich and poor is growing." }, accept: ["the gap", "the gulf", "the ditch"], hint: "A widening gap — le fossé des générations. Literally a ditch." },
      ],
    },
    {
      id: "fr-u106l4",
      unit: 106,
      lesson: 4,
      title: "Social norms",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what society expects: un tabou, conformiste, les mœurs, la mobilité.",
      items: [
        { id: "fr-u106l4-letabou", type: "vocab", front: "le tabou", reading: "letabou", meaning: "the taboo", example: { jp: "L'argent reste un tabou dans cette famille.", en: "Money is still a taboo in this family." }, accept: ["taboo"], hint: "A subject you're not supposed to raise — un sujet tabou (also used as an adj)." },
        { id: "fr-u106l4-conformiste", type: "vocab", front: "conformiste", reading: "conformiste", meaning: "conformist", example: { jp: "Elle trouve cette société trop conformiste.", en: "She finds this society too conformist." }, accept: ["conformist"], hint: "Following the norm without question — from se conformer." },
        { id: "fr-u106l4-lesmoeurs", type: "vocab", front: "les mœurs", reading: "lesmoeurs", meaning: "the customs", example: { jp: "Les mœurs ont beaucoup changé avec le temps.", en: "Customs have changed a lot over time." }, accept: ["customs", "the morals", "the ways"], hint: "The customs and moral habits of a society — l'évolution des mœurs. Final -s is silent." },
        { id: "fr-u106l4-lamobilite", type: "vocab", front: "la mobilité", reading: "lamobilite", meaning: "the mobility", example: { jp: "La mobilité entre les classes reste difficile.", en: "Mobility between classes remains difficult." }, accept: ["mobility"], hint: "The ability to move — la mobilité sociale (between classes) or physical mobility." },
        { id: "fr-u106l4-lanonymat", type: "vocab", front: "l'anonymat", reading: "lanonymat", meaning: "the anonymity", example: { jp: "Il préfère rester dans l'anonymat.", en: "He prefers to stay anonymous." }, accept: ["anonymity"], hint: "Being unknown / unnamed — garder l'anonymat. From anonyme." },
        { id: "fr-u106l4-saffirmer", type: "vocab", front: "s'affirmer", reading: "saffirmer", meaning: "to assert oneself", example: { jp: "Elle apprend peu à peu à s'affirmer.", en: "She's gradually learning to assert herself." }, accept: ["to assert oneself", "to stand up for oneself"], hint: "To grow confident and stand up for oneself — s'affirmer face aux autres. From affirmer." },
      ],
    },
  ],
};
