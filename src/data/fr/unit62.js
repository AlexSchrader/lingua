// FR Unit 62 — L'actualité et la société (slot: news and society) — B1
// SCOPE BOUNDARY: A2 already teaches the everyday news nouns (le journal, les
// informations, la nouvelle, l'article, l'événement, la société) AND the basic
// civics (le gouvernement, le citoyen, la loi, la politique, le droit). Block 2's
// Unit 71 takes MEDIA as a craft/industry. So this unit is current affairs and
// CIVIC LIFE one level up: the State and power, political life, civil society and
// the big public issues. Fronts checked against the live 1,287 A1+A2 fronts and
// the sibling B1 blocks. Conventions: fr/unit1.js.
export const FR_UNIT62 = {
  id: "fr-u62",
  lang: "fr",
  title: "L'actualité et la société",
  order: 62,
  stage: "b1",
  lessons: [
    {
      id: "fr-u62l1",
      unit: 62,
      lesson: 1,
      title: "The State and power",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about who runs a country: l'État, le pouvoir, le ministre, la démocratie.",
      items: [
        { id: "fr-u62l1-letat", type: "vocab", front: "l'État", reading: "letat", meaning: "the State", example: { jp: "L'État doit aider tous les citoyens du pays.", en: "The State must help all the citizens of the country." }, accept: ["the State", "the government", "the nation"], hint: "The State (capital É) — the country as an institution. l'État français." },
        { id: "fr-u62l1-lepouvoir", type: "vocab", front: "le pouvoir", reading: "lepouvoir", meaning: "power", example: { jp: "Ce parti est au pouvoir depuis dix ans.", en: "This party has been in power for ten years." }, accept: ["power", "the authorities"], hint: "Political power: être au pouvoir = to be in power. Also the verb pouvoir, 'to be able'." },
        { id: "fr-u62l1-leministre", type: "vocab", front: "le ministre", reading: "leministre", meaning: "the minister", example: { jp: "Le ministre a parlé de la nouvelle loi hier soir.", en: "The minister spoke about the new law last night." }, accept: ["minister", "the secretary"], hint: "A government minister. Le Premier ministre = the Prime Minister." },
        { id: "fr-u62l1-lanation", type: "vocab", front: "la nation", reading: "lanation", meaning: "the nation", example: { jp: "C'est un grand jour pour toute la nation.", en: "It's a big day for the whole nation." }, accept: ["nation", "the country"], hint: "The nation as a people. Les Nations unies = the United Nations." },
        { id: "fr-u62l1-lepeuple", type: "vocab", front: "le peuple", reading: "lepeuple", meaning: "the people", example: { jp: "Le peuple demande plus de justice.", en: "The people are demanding more justice." }, accept: ["the people", "the nation"], hint: "The people, as a nation — le peuple français. Not les gens (separate individuals)." },
        { id: "fr-u62l1-lademocratie", type: "vocab", front: "la démocratie", reading: "lademocratie", meaning: "democracy", example: { jp: "Dans une démocratie, chaque citoyen peut voter.", en: "In a democracy, every citizen can vote." }, accept: ["democracy"], hint: "Rule by the people — from the Greek. La démocratie française." },
      ],
    },
    {
      id: "fr-u62l2",
      unit: 62,
      lesson: 2,
      title: "Political life",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow an election: voter, une élection, un parti, un candidat, une réforme.",
      items: [
        { id: "fr-u62l2-voter", type: "vocab", front: "voter", reading: "voter", meaning: "to vote", example: { jp: "En France, on peut voter à partir de dix-huit ans.", en: "In France, you can vote from the age of eighteen." }, accept: ["to vote"], hint: "voter pour / contre = to vote for / against. Election day: le jour du vote." },
        { id: "fr-u62l2-lelection", type: "vocab", front: "l'élection", reading: "lelection", meaning: "the election", example: { jp: "L'élection est très importante pour le pays.", en: "The election is very important for the country." }, accept: ["election", "the vote"], hint: "The vote to choose leaders. les élections, often plural." },
        { id: "fr-u62l2-leparti", type: "vocab", front: "le parti", reading: "leparti", meaning: "the party", example: { jp: "Ce parti veut changer beaucoup de choses.", en: "This party wants to change a lot of things." }, accept: ["party", "the political party"], hint: "A political party. Don't confuse it with partir (to leave) or la partie (the part)." },
        { id: "fr-u62l2-lemaire", type: "vocab", front: "le maire", reading: "lemaire", meaning: "the mayor", example: { jp: "Le maire de la ville a ouvert la nouvelle école.", en: "The town's mayor opened the new school." }, accept: ["the mayor"], hint: "The mayor of a town. La mairie = the town hall. Sounds like la mer (sea) and la mère (mother)." },
        { id: "fr-u62l2-lecandidat", type: "vocab", front: "le candidat", reading: "lecandidat", meaning: "the candidate", example: { jp: "Il y a cinq candidats pour cette élection.", en: "There are five candidates for this election." }, accept: ["candidate", "the applicant"], hint: "Someone standing for election — or for a job. La candidate for a woman." },
        { id: "fr-u62l2-lareforme", type: "vocab", front: "la réforme", reading: "lareforme", meaning: "the reform", example: { jp: "Cette réforme va changer la vie des étudiants.", en: "This reform is going to change students' lives." }, accept: ["reform", "the overhaul"], hint: "A change to the rules or the system. From réformer, to reform." },
      ],
    },
    {
      id: "fr-u62l3",
      unit: 62,
      lesson: 3,
      title: "Civil society",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how people push back: une manifestation, une grève, protester, un débat.",
      items: [
        { id: "fr-u62l3-lamanifestation", type: "vocab", front: "la manifestation", reading: "lamanifestation", meaning: "the demonstration", example: { jp: "Il y a eu une grande manifestation dans la rue hier.", en: "There was a big demonstration in the street yesterday." }, accept: ["demonstration", "the protest", "the rally"], hint: "A public protest — une manif for short. Also a 'display' of something." },
        { id: "fr-u62l3-lagreve", type: "vocab", front: "la grève", reading: "lagreve", meaning: "the strike", example: { jp: "Il n'y a pas de train aujourd'hui à cause de la grève.", en: "There are no trains today because of the strike." }, accept: ["strike", "the walkout"], hint: "A workers' strike. être en grève = to be on strike; faire grève = to strike." },
        { id: "fr-u62l3-ledebat", type: "vocab", front: "le débat", reading: "ledebat", meaning: "the debate", example: { jp: "Il y a un grand débat sur cette nouvelle loi.", en: "There's a big debate about this new law." }, accept: ["debate", "the discussion"], hint: "A public discussion of two sides. From débattre, to debate." },
        { id: "fr-u62l3-lajustice", type: "vocab", front: "la justice", reading: "lajustice", meaning: "justice", example: { jp: "Tout le monde demande plus de justice dans la société.", en: "Everyone is asking for more justice in society." }, accept: ["justice", "the courts", "the law"], hint: "Justice, and also the court system: passer en justice = to go to court." },
        { id: "fr-u62l3-protester", type: "vocab", front: "protester", reading: "protester", meaning: "to protest", example: { jp: "Beaucoup de personnes protestent contre cette loi.", en: "A lot of people are protesting against this law." }, accept: ["to protest", "to object", "to complain"], hint: "protester contre = to protest against. Stronger than se plaindre." },
        { id: "fr-u62l3-lescandale", type: "vocab", front: "le scandale", reading: "lescandale", meaning: "the scandal", example: { jp: "Ce scandale est dans tous les journaux ce matin.", en: "This scandal is in every newspaper this morning." }, accept: ["scandal", "the outrage"], hint: "A public scandal. faire scandale = to cause an outcry." },
      ],
    },
    {
      id: "fr-u62l4",
      unit: 62,
      lesson: 4,
      title: "The big issues",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the stakes in the news: une crise, l'égalité, la sécurité, la paix.",
      items: [
        { id: "fr-u62l4-lacrise", type: "vocab", front: "la crise", reading: "lacrise", meaning: "the crisis", example: { jp: "Le pays connaît une crise économique depuis deux ans.", en: "The country has been going through an economic crisis for two years." }, accept: ["crisis", "the slump"], hint: "A crisis — economic, political, or personal. la crise économique." },
        { id: "fr-u62l4-legalite", type: "vocab", front: "l'égalité", reading: "legalite", meaning: "equality", example: { jp: "Tout le monde veut plus d'égalité entre les hommes et les femmes.", en: "Everyone wants more equality between men and women." }, accept: ["equality"], hint: "Equality — one of the three French values: liberté, égalité, fraternité." },
        { id: "fr-u62l4-lasecurite", type: "vocab", front: "la sécurité", reading: "lasecurite", meaning: "safety", example: { jp: "La sécurité des enfants est très importante.", en: "Children's safety is very important." }, accept: ["safety", "security"], hint: "Both safety and security. la ceinture de sécurité = seatbelt." },
        { id: "fr-u62l4-laguerre", type: "vocab", front: "la guerre", reading: "laguerre", meaning: "war", example: { jp: "Pendant la guerre, la vie était très difficile.", en: "During the war, life was very hard." }, accept: ["war", "the war"], hint: "War — la Seconde Guerre mondiale. The opposite is la paix." },
        { id: "fr-u62l4-lapaix", type: "vocab", front: "la paix", reading: "lapaix", meaning: "peace", example: { jp: "Après des années de guerre, le pays a enfin la paix.", en: "After years of war, the country finally has peace." }, accept: ["peace"], hint: "Peace. en paix = at peace. laisser en paix = to leave alone." },
        { id: "fr-u62l4-lafrontiere", type: "vocab", front: "la frontière", reading: "lafrontiere", meaning: "the border", example: { jp: "La frontière entre les deux pays est fermée.", en: "The border between the two countries is closed." }, accept: ["border", "the frontier", "the boundary"], hint: "A border between countries. Also a limit: sans frontières = borderless." },
      ],
    },
  ],
};
