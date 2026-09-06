// FR Unit 63 — Le travail et la carrière (slot: work and process) — B1
// SCOPE BOUNDARY: A2 already owns the everyday workplace nouns (le travail, le
// bureau, l'entreprise, le collègue, le patron, le salaire, la réunion, le
// métier, le client, le service). This unit is the register above: the career
// path (la carrière, le stage, postuler, l'entretien), hiring and managing
// (embaucher, licencier, diriger, gérer), the team, and the work itself as
// projects and skills. Fronts checked against the live 1,287 A1+A2 fronts and
// the sibling B1 blocks. Conventions: fr/unit1.js.
export const FR_UNIT63 = {
  id: "fr-u63",
  lang: "fr",
  title: "Le travail et la carrière",
  order: 63,
  stage: "b1",
  lessons: [
    {
      id: "fr-u63l1",
      unit: 63,
      lesson: 1,
      title: "The career path",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about finding work: une carrière, un poste, un stage, postuler, un entretien.",
      items: [
        { id: "fr-u63l1-lacarriere", type: "vocab", front: "la carrière", reading: "lacarriere", meaning: "the career", example: { jp: "Elle a fait toute sa carrière dans la même entreprise.", en: "She spent her whole career at the same company." }, accept: ["career", "the working life"], hint: "A working life or profession — faire carrière = to build a career." },
        { id: "fr-u63l1-leposte", type: "vocab", front: "le poste", reading: "leposte", meaning: "the position", example: { jp: "Il a trouvé un poste dans une grande entreprise.", en: "He found a position in a big company." }, drill: { jp: "Le poste est très important", en: "The position is very important" }, accept: ["position", "the job", "the post"], hint: "A job position — un poste de professeur. La poste (feminine) is the post office." },
        { id: "fr-u63l1-lestage", type: "vocab", front: "le stage", reading: "lestage", meaning: "the internship", example: { jp: "Elle a fait un stage de six mois dans cette entreprise.", en: "She did a six-month internship at this company." }, accept: ["internship", "the placement", "the training course"], hint: "False friend! Not 'a stage' — it means an internship or a training placement." },
        { id: "fr-u63l1-laformation", type: "vocab", front: "la formation", reading: "laformation", meaning: "the training", example: { jp: "Cette formation dure une année et coûte assez cher.", en: "This training lasts a year and costs quite a lot." }, accept: ["training", "the education", "the course"], hint: "Training or education for a job — la formation professionnelle. From former, to train." },
        { id: "fr-u63l1-postuler", type: "vocab", front: "postuler", reading: "postuler", meaning: "to apply", example: { jp: "Il veut postuler pour ce poste avant vendredi.", en: "He wants to apply for this position before Friday." }, accept: ["to apply"], hint: "postuler à/pour un emploi = to apply for a job. The application is la candidature." },
        { id: "fr-u63l1-lentretien", type: "vocab", front: "l'entretien", reading: "lentretien", meaning: "the interview", example: { jp: "Elle a un entretien important demain matin.", en: "She has an important interview tomorrow morning." }, drill: { jp: "L'entretien est demain matin", en: "The interview is tomorrow morning" }, accept: ["interview", "the meeting", "the maintenance"], hint: "A job interview — un entretien d'embauche. Also 'upkeep': l'entretien de la maison." },
      ],
    },
    {
      id: "fr-u63l2",
      unit: 63,
      lesson: 2,
      title: "Hiring and managing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe running a workplace: embaucher, licencier, diriger, gérer.",
      items: [
        { id: "fr-u63l2-embaucher", type: "vocab", front: "embaucher", reading: "embaucher", meaning: "to hire", example: { jp: "L'entreprise va embaucher dix personnes cette année.", en: "The company is going to hire ten people this year." }, accept: ["to hire", "to take on", "to employ"], hint: "To take someone on. The opposite is licencier." },
        { id: "fr-u63l2-licencier", type: "vocab", front: "licencier", reading: "licencier", meaning: "to lay off", example: { jp: "Ils ont dû licencier plusieurs employés à cause de la crise.", en: "They had to lay off several employees because of the crisis." }, drill: { jp: "Ils vont licencier plusieurs employés", en: "They are going to lay off several employees" }, accept: ["to lay off", "to make redundant", "to fire"], hint: "To let staff go for economic reasons — le licenciement. Not 'to license'!" },
        { id: "fr-u63l2-demissionner", type: "vocab", front: "démissionner", reading: "demissionner", meaning: "to resign", example: { jp: "Après ce scandale, le ministre a décidé de démissionner.", en: "After this scandal, the minister decided to resign." }, drill: { jp: "Le ministre va démissionner demain", en: "The minister is going to resign tomorrow" }, accept: ["to resign", "to quit", "to step down"], hint: "To quit a job by your own choice. The noun is la démission." },
        { id: "fr-u63l2-lechef", type: "vocab", front: "le chef", reading: "lechef", meaning: "the boss", example: { jp: "Le chef nous a demandé de finir avant ce soir.", en: "The boss asked us to finish before this evening." }, accept: ["boss", "the head", "the chief", "the leader"], hint: "The boss or head — le chef d'entreprise. Also a chef in a kitchen." },
        { id: "fr-u63l2-diriger", type: "vocab", front: "diriger", reading: "diriger", meaning: "to run", example: { jp: "Elle dirige une petite entreprise depuis cinq ans.", en: "She has been running a small company for five years." }, accept: ["to run", "to lead", "to manage", "to direct"], hint: "To run or lead — diriger une équipe. Also to steer: diriger une voiture." },
        { id: "fr-u63l2-gerer", type: "vocab", front: "gérer", reading: "gerer", meaning: "to manage", example: { jp: "Il sait bien gérer son temps et son argent.", en: "He knows how to manage his time and money well." }, accept: ["to manage", "to handle", "to run"], hint: "To manage or handle — gérer un budget, gérer une crise. From la gestion." },
      ],
    },
    {
      id: "fr-u63l3",
      unit: 63,
      lesson: 3,
      title: "The team",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name people and roles at work: une équipe, un employé, un responsable, un syndicat.",
      items: [
        { id: "fr-u63l3-lequipe", type: "vocab", front: "l'équipe", reading: "lequipe", meaning: "the team", example: { jp: "Toute l'équipe a travaillé tard pour finir le projet.", en: "The whole team worked late to finish the project." }, accept: ["team", "the crew"], hint: "A team — un travail d'équipe. Also a sports team." },
        { id: "fr-u63l3-lemploye", type: "vocab", front: "l'employé", reading: "lemploye", meaning: "the employee", example: { jp: "Les employés de ce magasin sont très gentils.", en: "The employees of this shop are very nice." }, drill: { jp: "L'employé est très gentil", en: "The employee is very nice" }, accept: ["employee", "the worker", "the staff member"], hint: "An employee — l'employé, l'employée. The one who employs is l'employeur." },
        { id: "fr-u63l3-leresponsable", type: "vocab", front: "le responsable", reading: "leresponsable", meaning: "the person in charge", example: { jp: "Je voudrais parler au responsable du magasin.", en: "I'd like to speak to the person in charge of the shop." }, accept: ["the person in charge", "the manager", "the head"], hint: "The person in charge — le responsable des ventes. Also an adjective: être responsable de." },
        { id: "fr-u63l3-lecollaborateur", type: "vocab", front: "le collaborateur", reading: "lecollaborateur", meaning: "the co-worker", example: { jp: "C'est un collaborateur sérieux et très gentil.", en: "He's a serious and very nice co-worker." }, accept: ["co-worker", "the colleague", "the associate"], hint: "A co-worker or associate — a more formal collègue. From collaborer, to work together." },
        { id: "fr-u63l3-lamission", type: "vocab", front: "la mission", reading: "lamission", meaning: "the assignment", example: { jp: "Sa mission est de trouver de nouveaux clients.", en: "His assignment is to find new clients." }, accept: ["mission", "the assignment", "the task"], hint: "A task or assignment given to you — partir en mission." },
        { id: "fr-u63l3-lesyndicat", type: "vocab", front: "le syndicat", reading: "lesyndicat", meaning: "the trade union", example: { jp: "Le syndicat a demandé une réunion avec le patron.", en: "The union asked for a meeting with the boss." }, accept: ["trade union", "the union", "the labour union"], hint: "A trade union. se syndiquer = to join a union." },
      ],
    },
    {
      id: "fr-u63l4",
      unit: 63,
      lesson: 4,
      title: "The work itself",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the work you do: un projet, un contrat, réaliser, une compétence.",
      items: [
        { id: "fr-u63l4-leprojet", type: "vocab", front: "le projet", reading: "leprojet", meaning: "the project", example: { jp: "Ce projet va prendre plusieurs mois de travail.", en: "This project is going to take several months of work." }, drill: { jp: "Le projet est très difficile", en: "The project is very difficult" }, accept: ["project", "the plan"], hint: "A project or plan — avoir des projets = to have plans. un projet de loi = a bill." },
        { id: "fr-u63l4-lecontrat", type: "vocab", front: "le contrat", reading: "lecontrat", meaning: "the contract", example: { jp: "Le contrat commence au mois de mars.", en: "The contract starts in March." }, accept: ["contract", "the agreement"], hint: "A contract — signer un contrat. un contrat de travail = an employment contract." },
        { id: "fr-u63l4-realiser", type: "vocab", front: "réaliser", reading: "realiser", meaning: "to carry out", example: { jp: "Ils ont réalisé un beau projet ensemble.", en: "They carried out a fine project together." }, accept: ["to carry out", "to achieve", "to make", "to realise"], hint: "To carry out or achieve — réaliser un rêve. Also 'to realise / become aware'." },
        { id: "fr-u63l4-effectuer", type: "vocab", front: "effectuer", reading: "effectuer", meaning: "to carry out", example: { jp: "Le médecin va effectuer quelques examens.", en: "The doctor is going to carry out a few tests." }, accept: ["to carry out", "to perform", "to do", "to make"], hint: "A formal 'to carry out / perform' — effectuer un paiement. More formal than faire." },
        { id: "fr-u63l4-lacompetence", type: "vocab", front: "la compétence", reading: "lacompetence", meaning: "the skill", example: { jp: "Ce travail demande beaucoup de compétences.", en: "This job requires a lot of skills." }, accept: ["skill", "the competence", "the ability"], hint: "A skill or competence — les compétences professionnelles." },
        { id: "fr-u63l4-lapromotion", type: "vocab", front: "la promotion", reading: "lapromotion", meaning: "the promotion", example: { jp: "Après cinq ans, il a enfin eu une promotion.", en: "After five years, he finally got a promotion." }, drill: { jp: "La promotion est très importante", en: "The promotion is very important" }, accept: ["promotion", "the raise", "the special offer"], hint: "A promotion at work. Also a special offer: en promotion = on sale." },
      ],
    },
  ],
};
