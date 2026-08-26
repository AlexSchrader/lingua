// FR Unit 129 — Révéler et reprocher ("Revealing and reproaching") — B2
// Strand D, coverage unit 12 of 13 (block 3, units 121-133). Generic slot
// "Vocabulary 12 (B2)"; given a real theme — DEVIATION FROM THE SLOT NAME ONLY.
//
// ONE LEVEL ABOVE THE SLOT: A2+B1 teach the basic speech verbs (dire, parler,
// demander, répondre, expliquer, raconter, annoncer, avouer, avertir) and B1
// units 86/89 add manner-of-speaking (murmurer, chuchoter, bafouiller) and
// argument verbs (affirmer, nier, contester). The sibling B2 block owns
// sous-entendre, souligner, insister, prôner, insinuer, démentir. This unit
// authors the REPORTING verbs left — how you introduce, disclose, and object.
// Every front checked against the 2,168 fronts and the sibling B2 blocks.
// Conventions: see fr/unit1.js.
export const FR_UNIT129 = {
  id: "fr-u129",
  lang: "fr",
  title: "Révéler et reprocher",
  order: 129,
  stage: "b2",
  lessons: [
    {
      id: "fr-u129l1",
      unit: 129,
      lesson: 1,
      title: "Bringing it up",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Introduce and shape what you say: aborder, signaler, préciser, formuler, énoncer, suggérer.",
      items: [
        { id: "fr-u129l1-aborder", type: "vocab", front: "aborder", reading: "aborder", meaning: "to bring up", example: { jp: "Il n'a pas osé aborder ce sujet devant ses parents.", en: "He didn't dare bring up this subject in front of his parents." }, accept: ["to bring up", "to broach", "to tackle", "to approach"], hint: "To start dealing with a topic. Also to approach a person, or reach a shore." },
        { id: "fr-u129l1-signaler", type: "vocab", front: "signaler", reading: "signaler", meaning: "to point out", example: { jp: "Je vous signale que le magasin ferme dans dix minutes.", en: "I'm pointing out to you that the shop closes in ten minutes." }, accept: ["to point out", "to report", "to flag", "to notify"], hint: "To draw attention to a fact. From le signal." },
        { id: "fr-u129l1-preciser", type: "vocab", front: "préciser", reading: "preciser", meaning: "to specify", example: { jp: "Il a précisé qu'il ne serait pas là avant midi.", en: "He specified that he wouldn't be there before noon." }, accept: ["to specify", "to clarify", "to make clear", "to state precisely"], hint: "From précis. To add exact detail. Noun: la précision." },
        { id: "fr-u129l1-formuler", type: "vocab", front: "formuler", reading: "formuler", meaning: "to put into words", example: { jp: "Il a du mal à formuler ce qu'il ressent.", en: "He finds it hard to put into words what he feels." }, accept: ["to put into words", "to formulate", "to express", "to word"], hint: "To give something a clear form in words. From la formule." },
        { id: "fr-u129l1-enoncer", type: "vocab", front: "énoncer", reading: "enoncer", meaning: "to state", example: { jp: "Le professeur énonce la règle, puis donne un exemple.", en: "The teacher states the rule, then gives an example." }, accept: ["to state", "to set out", "to express", "to spell out"], hint: "To say plainly and formally — a rule, a principle. Noun: l'énoncé." },
        { id: "fr-u129l1-suggerer", type: "vocab", front: "suggérer", reading: "suggerer", meaning: "to suggest", example: { jp: "Je suggère qu'on remette la réunion à demain.", en: "I suggest that we put the meeting off until tomorrow." }, accept: ["to suggest", "to propose", "to hint", "to recommend"], hint: "To put an idea forward gently. Noun: la suggestion." },
      ],
    },
    {
      id: "fr-u129l2",
      unit: 129,
      lesson: 2,
      title: "Telling and revealing",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Disclose or proclaim: révéler, dévoiler, confier, déclarer, proclamer, relater.",
      items: [
        { id: "fr-u129l2-reveler", type: "vocab", front: "révéler", reading: "reveler", meaning: "to reveal", example: { jp: "L'enquête a révélé des faits que personne ne soupçonnait.", en: "The investigation revealed facts that nobody suspected." }, accept: ["to reveal", "to disclose", "to uncover", "to show"], hint: "To make a hidden thing known. se révéler = to turn out to be." },
        { id: "fr-u129l2-devoiler", type: "vocab", front: "dévoiler", reading: "devoiler", meaning: "to unveil", example: { jp: "La marque a dévoilé son nouveau modèle hier soir.", en: "The brand unveiled its new model last night." }, accept: ["to unveil", "to reveal", "to disclose"], hint: "Literally to lift the veil (le voile) from something." },
        { id: "fr-u129l2-confier", type: "vocab", front: "confier", reading: "confier", meaning: "to confide", example: { jp: "Elle m'a confié un secret que je n'ai dit à personne.", en: "She confided a secret to me that I've told to no one." }, accept: ["to confide", "to entrust", "to tell in confidence"], hint: "confier quelque chose à quelqu'un. Also to entrust something to someone's care." },
        { id: "fr-u129l2-declarer", type: "vocab", front: "déclarer", reading: "declarer", meaning: "to declare", example: { jp: "Le président a déclaré que la crise était terminée.", en: "The president declared that the crisis was over." }, accept: ["to declare", "to state", "to announce"], hint: "To state officially or firmly. Also to declare goods at customs." },
        { id: "fr-u129l2-proclamer", type: "vocab", front: "proclamer", reading: "proclamer", meaning: "to proclaim", example: { jp: "La foule a proclamé sa victoire avant même les résultats.", en: "The crowd proclaimed his victory even before the results." }, accept: ["to proclaim", "to declare loudly", "to announce"], hint: "To announce loudly and publicly. proclamer les résultats." },
        { id: "fr-u129l2-relater", type: "vocab", front: "relater", reading: "relater", meaning: "to recount", example: { jp: "Le journaliste relate les faits sans jamais donner son avis.", en: "The journalist recounts the facts without ever giving his opinion." }, accept: ["to recount", "to relate", "to report", "to narrate"], hint: "To tell how events happened, in order. More formal than raconter." },
      ],
    },
    {
      id: "fr-u129l3",
      unit: 129,
      lesson: 3,
      title: "Reporting and claiming",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Report and lay claim: rapporter, témoigner, réclamer, revendiquer, prétexter, s'exclamer.",
      items: [
        { id: "fr-u129l3-rapporter", type: "vocab", front: "rapporter", reading: "rapporter", meaning: "to report", example: { jp: "Les témoins rapportent tous la même version des faits.", en: "The witnesses all report the same version of the facts." }, accept: ["to report", "to bring back", "to relay", "to tell"], hint: "To bring back news or an object. Also to bring in money: ça rapporte." },
        { id: "fr-u129l3-temoigner", type: "vocab", front: "témoigner", reading: "temoigner", meaning: "to testify", example: { jp: "Elle a accepté de témoigner, même si elle avait peur.", en: "She agreed to testify, even though she was afraid." }, accept: ["to testify", "to bear witness", "to give evidence"], hint: "From le témoin. To give an account of what you saw, often in court." },
        { id: "fr-u129l3-reclamer", type: "vocab", front: "réclamer", reading: "reclamer", meaning: "to demand", example: { jp: "Les habitants réclament une solution depuis des mois.", en: "The residents have been demanding a solution for months." }, accept: ["to demand", "to call for", "to claim", "to ask for"], hint: "To ask insistently for something you feel owed. Noun: la réclamation." },
        { id: "fr-u129l3-revendiquer", type: "vocab", front: "revendiquer", reading: "revendiquer", meaning: "to lay claim to", example: { jp: "Un groupe inconnu a revendiqué cette action.", en: "An unknown group laid claim to this action." }, accept: ["to lay claim to", "to claim responsibility for", "to demand"], hint: "To claim something as one's right or one's doing. Noun: la revendication." },
        { id: "fr-u129l3-pretexter", type: "vocab", front: "prétexter", reading: "pretexter", meaning: "to use as a pretext", example: { jp: "Il a prétexté un rendez-vous pour partir plus tôt.", en: "He used a meeting as a pretext to leave earlier." }, accept: ["to use as a pretext", "to give as an excuse", "to plead"], hint: "From le prétexte. To give a false reason as a cover." },
        { id: "fr-u129l3-sexclamer", type: "vocab", front: "s'exclamer", reading: "sexclamer", meaning: "to exclaim", example: { jp: "« Enfin ! » s'est-elle exclamée en le voyant arriver.", en: "\"At last!\" she exclaimed on seeing him arrive." }, accept: ["to exclaim", "to cry out", "to burst out"], hint: "To say something suddenly and loudly, out of emotion. Reflexive." },
      ],
    },
    {
      id: "fr-u129l4",
      unit: 129,
      lesson: 4,
      title: "Objecting and reproaching",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Push back and blame: reprocher, déplorer, objecter, rétorquer, riposter, contredire.",
      items: [
        { id: "fr-u129l4-reprocher", type: "vocab", front: "reprocher", reading: "reprocher", meaning: "to reproach", example: { jp: "Elle lui reproche de ne jamais écouter les autres.", en: "She reproaches him for never listening to others." }, accept: ["to reproach", "to blame", "to hold against"], hint: "reprocher quelque chose à quelqu'un. Noun: le reproche." },
        { id: "fr-u129l4-deplorer", type: "vocab", front: "déplorer", reading: "deplorer", meaning: "to deplore", example: { jp: "Tout le monde déplore le manque de moyens dans les hôpitaux.", en: "Everyone deplores the lack of resources in hospitals." }, accept: ["to deplore", "to regret", "to lament", "to bemoan"], hint: "To express strong regret about something. Formal." },
        { id: "fr-u129l4-objecter", type: "vocab", front: "objecter", reading: "objecter", meaning: "to object", example: { jp: "On lui a proposé de partir, mais il a objecté qu'il avait trop de travail.", en: "They suggested he leave, but he objected that he had too much work." }, accept: ["to object", "to raise an objection", "to counter"], hint: "To give a reason against. Noun: l'objection." },
        { id: "fr-u129l4-retorquer", type: "vocab", front: "rétorquer", reading: "retorquer", meaning: "to retort", example: { jp: "Quand on l'a critiqué, il a rétorqué que les autres faisaient pire.", en: "When he was criticised, he retorted that others did worse." }, accept: ["to retort", "to reply sharply", "to shoot back", "to counter"], hint: "To answer back at once, turning the point around." },
        { id: "fr-u129l4-riposter", type: "vocab", front: "riposter", reading: "riposter", meaning: "to hit back", example: { jp: "Attaquée sur ce point, elle a riposté avec calme.", en: "Attacked on this point, she hit back calmly." }, accept: ["to hit back", "to retaliate", "to respond", "to counter-attack"], hint: "To strike back — in an argument, a fight, or a game. Noun: la riposte." },
        { id: "fr-u129l4-contredire", type: "vocab", front: "contredire", reading: "contredire", meaning: "to contradict", example: { jp: "Je n'aime pas le contredire, mais là, il se trompe.", en: "I don't like to contradict him, but this time, he's wrong." }, accept: ["to contradict", "to gainsay", "to go against"], hint: "From contre + dire. se contredire = to contradict oneself." },
      ],
    },
  ],
};
