// FR Unit 68 — Les règles et les obligations (slot: rules, permission, obligation) — B1
// SCOPE BOUNDARY: A2 owns interdit, autorisé, obligatoire, il faut, je dois,
// obligé de, la loi, le droit, la règle; the sibling blocks own permettre,
// obliger, renoncer. So this unit is the register above: permission and rights
// (avoir le droit de, être censé, tolérer, facultatif), obligation (exiger,
// imposer, la contrainte, la condition), the rules themselves (le règlement, la
// norme, se conformer, enfreindre) and enforcement (appliquer, contrôler, la
// sanction, l'amende). Fronts checked against the live 1,287 and the sibling
// B1 blocks. Conventions: fr/unit1.js.
export const FR_UNIT68 = {
  id: "fr-u68",
  lang: "fr",
  title: "Les règles et les obligations",
  order: 68,
  stage: "b1",
  lessons: [
    {
      id: "fr-u68l1",
      unit: 68,
      lesson: 1,
      title: "Permission and rights",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what's allowed: avoir le droit de, être censé, tolérer, facultatif.",
      items: [
        { id: "fr-u68l1-avoirledroitde", type: "vocab", front: "avoir le droit de", reading: "avoirledroitde", meaning: "to be allowed to", example: { jp: "Les enfants n'ont pas le droit de sortir seuls.", en: "The children aren't allowed to go out alone." }, accept: ["to be allowed to", "to have the right to", "may"], hint: "To have the right / be allowed to — ne pas avoir le droit = to be forbidden." },
        { id: "fr-u68l1-etrecense", type: "vocab", front: "être censé", reading: "etrecense", meaning: "to be supposed to", example: { jp: "Tu es censé finir ce travail avant midi.", en: "You're supposed to finish this work before noon." }, accept: ["to be supposed to", "to be meant to", "to be expected to"], hint: "To be supposed to — être censé faire. Often about what should happen but might not." },
        { id: "fr-u68l1-tolerer", type: "vocab", front: "tolérer", reading: "tolerer", meaning: "to tolerate", example: { jp: "On ne tolère pas les retards dans cette entreprise.", en: "Lateness isn't tolerated in this company." }, accept: ["to tolerate", "to allow", "to put up with"], hint: "To tolerate, put up with — from la tolérance. tolérer une exception." },
        { id: "fr-u68l1-facultatif", type: "vocab", front: "facultatif", reading: "facultatif", meaning: "optional", example: { jp: "Cette question est facultative à l'examen.", en: "This question is optional in the exam." }, accept: ["optional"], hint: "Optional — the opposite of obligatoire. une matière facultative = an optional subject." },
        { id: "fr-u68l1-legal", type: "vocab", front: "légal", reading: "legal", meaning: "legal", example: { jp: "En France, il est légal de voter à dix-huit ans.", en: "In France, it's legal to vote at eighteen." }, accept: ["legal", "lawful"], hint: "Legal, lawful — the opposite is illégal. From la loi." },
        { id: "fr-u68l1-lalimite", type: "vocab", front: "la limite", reading: "lalimite", meaning: "the limit", example: { jp: "Il ne faut pas dépasser cette limite de temps.", en: "You mustn't go over this time limit." }, accept: ["limit", "the boundary", "the deadline"], hint: "A limit, boundary — dépasser les limites. la date limite = the deadline." },
      ],
    },
    {
      id: "fr-u68l2",
      unit: 68,
      lesson: 2,
      title: "Obligation",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what's required: exiger, imposer, une contrainte, une condition.",
      items: [
        { id: "fr-u68l2-exiger", type: "vocab", front: "exiger", reading: "exiger", meaning: "to require", example: { jp: "Le client exige une réponse rapide.", en: "The client demands a quick answer." }, accept: ["to require", "to demand", "to insist on"], hint: "To demand, require — exiger que + subjunctive. Stronger than demander." },
        { id: "fr-u68l2-imposer", type: "vocab", front: "imposer", reading: "imposer", meaning: "to impose", example: { jp: "Le chef impose ses idées à toute l'équipe.", en: "The boss imposes his ideas on the whole team." }, accept: ["to impose", "to force on"], hint: "To impose, force on — imposer une règle. s'imposer = to assert oneself." },
        { id: "fr-u68l2-lacontrainte", type: "vocab", front: "la contrainte", reading: "lacontrainte", meaning: "the constraint", example: { jp: "Ce métier a beaucoup de contraintes.", en: "This job has a lot of constraints." }, accept: ["constraint", "the restriction", "the pressure"], hint: "A constraint, restriction — les contraintes du travail. From contraindre, to force." },
        { id: "fr-u68l2-lacondition", type: "vocab", front: "la condition", reading: "lacondition", meaning: "the condition", example: { jp: "Tu peux sortir, à condition de rentrer tôt.", en: "You can go out, on condition that you come back early." }, accept: ["condition", "the requirement"], hint: "A condition — à condition que + subjunctive = provided that. Also physical shape." },
        { id: "fr-u68l2-strict", type: "vocab", front: "strict", reading: "strict", meaning: "strict", example: { jp: "Les règles sont très strictes dans cette école.", en: "The rules are very strict in this school." }, accept: ["strict", "firm"], hint: "Strict, firm — un professeur strict. The opposite is souple." },
        { id: "fr-u68l2-severe", type: "vocab", front: "sévère", reading: "severe", meaning: "harsh", example: { jp: "Le professeur est sévère mais gentil.", en: "The teacher is strict but kind." }, accept: ["harsh", "strict", "severe"], hint: "Strict, harsh, severe — une punition sévère. Stronger than strict." },
      ],
    },
    {
      id: "fr-u68l3",
      unit: 68,
      lesson: 3,
      title: "The rules themselves",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about rules and standards: le règlement, la norme, se conformer, enfreindre.",
      items: [
        { id: "fr-u68l3-lereglement", type: "vocab", front: "le règlement", reading: "lereglement", meaning: "the regulations", example: { jp: "Il faut lire le règlement avant de commencer.", en: "You have to read the rules before starting." }, accept: ["the regulations", "the rules", "the rulebook"], hint: "The rules/regulations of a place — le règlement intérieur. From régler." },
        { id: "fr-u68l3-lanorme", type: "vocab", front: "la norme", reading: "lanorme", meaning: "the norm", example: { jp: "Aujourd'hui, avoir un téléphone est la norme.", en: "Nowadays, having a phone is the norm." }, accept: ["norm", "the standard"], hint: "A norm or standard — les normes de sécurité. être dans la norme = to be standard." },
        { id: "fr-u68l3-seconformer", type: "vocab", front: "se conformer", reading: "seconformer", meaning: "to comply", example: { jp: "Chacun doit se conformer au règlement de l'école.", en: "Everyone must comply with the school rules." }, accept: ["to comply", "to abide by", "to conform", "to follow"], hint: "se conformer à = to comply with / abide by. From conforme, in line with." },
        { id: "fr-u68l3-enfreindre", type: "vocab", front: "enfreindre", reading: "enfreindre", meaning: "to break", example: { jp: "Personne n'a le droit d'enfreindre la loi.", en: "Nobody has the right to break the law." }, accept: ["to break", "to infringe", "to violate"], hint: "To break / infringe a rule or law — the opposite of obeying it." },
        { id: "fr-u68l3-laconsigne", type: "vocab", front: "la consigne", reading: "laconsigne", meaning: "the instruction", example: { jp: "Lis bien les consignes avant l'examen.", en: "Read the instructions carefully before the exam." }, accept: ["instruction", "the directions", "the orders"], hint: "An instruction or directive — suivre les consignes. Also left-luggage: la consigne." },
        { id: "fr-u68l3-lecritere", type: "vocab", front: "le critère", reading: "lecritere", meaning: "the criterion", example: { jp: "Le prix n'est pas mon seul critère de choix.", en: "Price isn't my only criterion for choosing." }, accept: ["criterion", "the standard", "the factor"], hint: "A criterion — les critères de sélection. Plural: les critères." },
      ],
    },
    {
      id: "fr-u68l4",
      unit: 68,
      lesson: 4,
      title: "Enforcement",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about checking and penalties: appliquer, contrôler, une sanction, une amende.",
      items: [
        { id: "fr-u68l4-appliquer", type: "vocab", front: "appliquer", reading: "appliquer", meaning: "to enforce", example: { jp: "Il faut appliquer la même règle pour tous.", en: "The same rule has to be applied to everyone." }, accept: ["to enforce", "to apply"], hint: "To apply / enforce — appliquer une loi. s'appliquer = to apply oneself, or to apply to." },
        { id: "fr-u68l4-controler", type: "vocab", front: "contrôler", reading: "controler", meaning: "to check", example: { jp: "La police contrôle souvent cette route la nuit.", en: "The police often check this road at night." }, accept: ["to check", "to monitor", "to control", "to inspect"], hint: "To check, monitor, or control — contrôler les billets. Also to control something." },
        { id: "fr-u68l4-surveiller", type: "vocab", front: "surveiller", reading: "surveiller", meaning: "to watch over", example: { jp: "Elle surveille son petit frère ce soir.", en: "She's watching over her little brother this evening." }, drill: { jp: "Elle va surveiller son frère", en: "She is going to watch over her brother" }, accept: ["to watch over", "to keep an eye on", "to supervise"], hint: "To watch over, keep an eye on — surveiller les enfants. Also to invigilate an exam." },
        { id: "fr-u68l4-lasanction", type: "vocab", front: "la sanction", reading: "lasanction", meaning: "the penalty", example: { jp: "Sans respect des règles, il y a une sanction.", en: "Without respect for the rules, there's a penalty." }, accept: ["penalty", "the sanction", "the punishment"], hint: "A penalty, sanction — from sanctionner. Also, formally, an official approval." },
        { id: "fr-u68l4-lamende", type: "vocab", front: "l'amende", reading: "lamende", meaning: "the fine", example: { jp: "Une amende de cent euros, c'est beaucoup !", en: "A fine of a hundred euros is a lot!" }, accept: ["fine", "the penalty"], hint: "A fine — une amende pour excès de vitesse = a speeding fine. mettre une amende = to fine." },
        { id: "fr-u68l4-officiel", type: "vocab", front: "officiel", reading: "officiel", meaning: "official", example: { jp: "Le français est la langue officielle du pays.", en: "French is the official language of the country." }, accept: ["official"], hint: "Official — un document officiel. The opposite is officieux, unofficial." },
      ],
    },
  ],
};
