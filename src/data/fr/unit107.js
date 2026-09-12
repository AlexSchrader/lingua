// FR Unit 107 — La carrière et les organisations (slot: career and organisations) — B2
// LAST UNIT OF FR B2 BLOCK 1. B1 u63 taught the workplace (la carrière, le poste,
// embaucher, diriger, gérer, l'équipe, le projet, la compétence). B2 adds the
// organisational register: hierarchy (la hiérarchie, le dirigeant, subordonné,
// l'échelon), managing people (déléguer, superviser, coordonner, encadrer), the
// structure of a firm (le département, l'effectif, l'associé, le recrutement) and
// the career path (gravir, l'ascension, muter, la reconversion). Fronts checked
// against the 2,168 live fr fronts (la gestion, la direction avoided as diriger/
// gérer lexemes). Conventions: fr/unit1.js.
export const FR_UNIT107 = {
  id: "fr-u107",
  lang: "fr",
  title: "La carrière et les organisations",
  order: 107,
  stage: "b2",
  lessons: [
    {
      id: "fr-u107l1",
      unit: 107,
      lesson: 1,
      title: "Who reports to whom",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe an organisation's ranks: la hiérarchie, le dirigeant, un subordonné, un échelon.",
      items: [
        { id: "fr-u107l1-lahierarchie", type: "vocab", front: "la hiérarchie", reading: "lahierarchie", meaning: "the hierarchy", example: { jp: "Dans cette équipe, la hiérarchie est claire.", en: "In this team, the hierarchy is clear." }, accept: ["hierarchy", "the chain of command"], hint: "The ranked levels of authority — respecter la hiérarchie. The adjective is hiérarchique." },
        { id: "fr-u107l1-ledirigeant", type: "vocab", front: "le dirigeant", reading: "ledirigeant", meaning: "the leader", example: { jp: "Le dirigeant de l'entreprise a démissionné hier.", en: "The company's leader resigned yesterday." }, accept: ["leader", "the executive", "the manager"], hint: "The person who runs an organisation — les dirigeants d'un pays. From diriger." },
        { id: "fr-u107l1-subordonne", type: "vocab", front: "subordonné", reading: "subordonne", meaning: "the subordinate", example: { jp: "Un bon chef écoute ses subordonnés.", en: "A good boss listens to his subordinates." }, accept: ["subordinate", "the junior"], hint: "Someone lower in the hierarchy — the opposite of le supérieur. Also 'subordinate' (adj)." },
        { id: "fr-u107l1-lorganigramme", type: "vocab", front: "l'organigramme", reading: "lorganigramme", meaning: "the org chart", example: { jp: "L'organigramme montre qui dirige chaque équipe.", en: "The org chart shows who runs each team." }, accept: ["org chart", "the organisation chart"], hint: "The diagram of who reports to whom — from organisation + -gramme." },
        { id: "fr-u107l1-lechelon", type: "vocab", front: "l'échelon", reading: "lechelon", meaning: "the rung", example: { jp: "Il est passé à l'échelon supérieur cette année.", en: "He moved up to the higher rung this year." }, accept: ["rung", "the level", "the grade"], hint: "A step on the ladder — gravir les échelons. Literally a rung of a ladder." },
        { id: "fr-u107l1-lepdg", type: "vocab", front: "le PDG", reading: "lepdg", meaning: "the CEO", example: { jp: "Le PDG a annoncé de bons résultats.", en: "The CEO announced good results." }, accept: ["the CEO", "the chairman", "the managing director"], hint: "Président-Directeur Général — the top boss of a French company." },
      ],
    },
    {
      id: "fr-u107l2",
      unit: 107,
      lesson: 2,
      title: "Managing people",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about leading a team: déléguer, superviser, coordonner, encadrer.",
      items: [
        { id: "fr-u107l2-deleguer", type: "vocab", front: "déléguer", reading: "deleguer", meaning: "to delegate", example: { jp: "Un bon chef sait déléguer le travail.", en: "A good boss knows how to delegate the work." }, accept: ["to delegate", "to hand over"], hint: "To hand a task to someone else — déléguer une tâche. From délégué, a delegate." },
        { id: "fr-u107l2-superviser", type: "vocab", front: "superviser", reading: "superviser", meaning: "to supervise", example: { jp: "Elle supervise le travail de toute l'équipe.", en: "She supervises the whole team's work." }, drill: { jp: "Elle va superviser le travail", en: "She is going to supervise the work" }, accept: ["to supervise", "to oversee"], hint: "To oversee the work of others — superviser un projet." },
        { id: "fr-u107l2-coordonner", type: "vocab", front: "coordonner", reading: "coordonner", meaning: "to coordinate", example: { jp: "Son travail est de coordonner les équipes.", en: "Her job is to coordinate the teams." }, accept: ["to coordinate"], hint: "To make different parts work together — coordonner les efforts." },
        { id: "fr-u107l2-encadrer", type: "vocab", front: "encadrer", reading: "encadrer", meaning: "to manage", example: { jp: "Elle encadre les nouveaux employés.", en: "She manages the new employees." }, accept: ["to manage", "to supervise", "to mentor"], hint: "To lead and guide a team — encadrer des stagiaires. Also to frame a picture." },
        { id: "fr-u107l2-piloter", type: "vocab", front: "piloter", reading: "piloter", meaning: "to steer", example: { jp: "Il pilote ce projet depuis le début.", en: "He has been steering this project from the start." }, accept: ["to steer", "to lead", "to run"], hint: "To steer a project or plane — piloter un projet. From le pilote." },
        { id: "fr-u107l2-lagouvernance", type: "vocab", front: "la gouvernance", reading: "lagouvernance", meaning: "the governance", example: { jp: "La bonne gouvernance d'une entreprise est essentielle.", en: "Good governance of a company is essential." }, accept: ["governance"], hint: "How an organisation is run and controlled — la bonne gouvernance." },
      ],
    },
    {
      id: "fr-u107l3",
      unit: 107,
      lesson: 3,
      title: "The shape of the firm",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a company is organised: un département, l'effectif, un associé, le recrutement.",
      items: [
        { id: "fr-u107l3-ledepartement", type: "vocab", front: "le département", reading: "ledepartement", meaning: "the department", example: { jp: "Ce département compte vingt employés.", en: "This department has twenty employees." }, accept: ["department", "the division"], hint: "A section of a company or a French administrative area — le département des ventes." },
        { id: "fr-u107l3-leffectif", type: "vocab", front: "l'effectif", reading: "leffectif", meaning: "the headcount", example: { jp: "L'entreprise a augmenté son effectif cette année.", en: "The company increased its headcount this year." }, accept: ["headcount", "the workforce", "the staff numbers"], hint: "The number of people on the staff — réduire l'effectif. Usually singular." },
        { id: "fr-u107l3-lassocie", type: "vocab", front: "l'associé", reading: "lassocie", meaning: "the partner", example: { jp: "Elle dirige l'entreprise avec son associé.", en: "She runs the company with her partner." }, drill: { jp: "L'associé dirige toute l'entreprise", en: "The partner runs the whole company" }, accept: ["business partner", "the associate", "the partner"], hint: "A co-owner of a business — from associer. Not le partenaire (a trading partner)." },
        { id: "fr-u107l3-lerecrutement", type: "vocab", front: "le recrutement", reading: "lerecrutement", meaning: "the recruitment", example: { jp: "Le recrutement de nouveaux employés a commencé.", en: "The recruitment of new employees has started." }, accept: ["recruitment", "the hiring"], hint: "The process of hiring — from recruter. un cabinet de recrutement = a hiring firm." },
        { id: "fr-u107l3-restructurer", type: "vocab", front: "restructurer", reading: "restructurer", meaning: "to restructure", example: { jp: "Ils ont décidé de restructurer toute l'entreprise.", en: "They decided to restructure the whole company." }, accept: ["to restructure", "to reorganise"], hint: "To reorganise deeply, often with job cuts — restructurer une entreprise." },
        { id: "fr-u107l3-polyvalent", type: "vocab", front: "polyvalent", reading: "polyvalent", meaning: "versatile", example: { jp: "C'est un employé polyvalent et très sérieux.", en: "He's a versatile and very serious employee." }, accept: ["versatile", "multi-skilled", "all-round"], hint: "Able to do many roles — un profil polyvalent. From poly- (many) + valent." },
      ],
    },
    {
      id: "fr-u107l4",
      unit: 107,
      lesson: 4,
      title: "Climbing and changing",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a career path: gravir, l'ascension, muter, la reconversion.",
      items: [
        { id: "fr-u107l4-gravir", type: "vocab", front: "gravir", reading: "gravir", meaning: "to climb", example: { jp: "Elle a gravi tous les échelons de l'entreprise.", en: "She climbed all the rungs of the company." }, accept: ["to climb", "to work one's way up"], hint: "To climb — gravir les échelons = to rise through the ranks. Also to climb a mountain." },
        { id: "fr-u107l4-lascension", type: "vocab", front: "l'ascension", reading: "lascension", meaning: "the rise", example: { jp: "Son ascension dans l'entreprise a été rapide.", en: "His rise within the company was rapid." }, accept: ["rise", "the ascent", "the climb"], hint: "A rise to a higher position — une ascension rapide. From monter." },
        { id: "fr-u107l4-muter", type: "vocab", front: "muter", reading: "muter", meaning: "to transfer", example: { jp: "Il a été muté dans une autre ville.", en: "He was transferred to another city." }, accept: ["to transfer", "to relocate", "to reassign"], hint: "To move an employee to another post/place — être muté. The noun is une mutation." },
        { id: "fr-u107l4-lareconversion", type: "vocab", front: "la reconversion", reading: "lareconversion", meaning: "the career change", example: { jp: "Après vingt ans de travail, elle pense à une reconversion.", en: "After twenty years of work, she's thinking about a career change." }, drill: { jp: "La reconversion est très difficile", en: "The career change is very difficult" }, accept: ["career change", "the retraining", "the switch"], hint: "Switching to a new line of work — une reconversion professionnelle." },
        { id: "fr-u107l4-lementor", type: "vocab", front: "le mentor", reading: "lementor", meaning: "the mentor", example: { jp: "Elle a eu la chance d'avoir un bon mentor.", en: "She was lucky to have a good mentor." }, accept: ["mentor"], hint: "An experienced guide for a younger person — from the name Mentor in the Odyssey." },
        { id: "fr-u107l4-operationnel", type: "vocab", front: "opérationnel", reading: "operationnel", meaning: "operational", example: { jp: "La nouvelle équipe est déjà opérationnelle.", en: "The new team is already operational." }, accept: ["operational", "up and running", "ready"], hint: "Ready to work / up and running — le système est opérationnel. From opération." },
      ],
    },
  ],
};
