// FR Unit 101 — Les sciences et la technologie (slot: science and technology) — B2
// B1 taught la recherche, l'expérience, l'hypothèse (u61), le climat. B2 stays at
// the ADVANCED register: the scientific method (l'observation, l'analyse,
// expérimental, l'échantillon, la percée), scientific RIGOUR (empirique, la
// rigueur, quantifier, la corrélation, reproductible, la variable), advanced tech
// (l'algorithme, l'automatisation, le capteur, la simulation, l'interface) and
// innovation (l'innovation, le brevet, le prototype, la synthèse, le déploiement).
// Basic school words (biologie, physique, atome, logiciel…) are deliberately NOT
// taught here — they are A2/B1 band, below B2. Fronts checked against the 2,168
// live fr fronts. Conventions: fr/unit1.js.
export const FR_UNIT101 = {
  id: "fr-u101",
  lang: "fr",
  title: "Les sciences et la technologie",
  order: 101,
  stage: "b2",
  lessons: [
    {
      id: "fr-u101l1",
      unit: 101,
      lesson: 1,
      title: "The scientific method",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how science works: l'observation, l'analyse, expérimental, un échantillon.",
      items: [
        { id: "fr-u101l1-lobservation", type: "vocab", front: "l'observation", reading: "lobservation", meaning: "the observation", example: { jp: "Cette observation a duré plusieurs mois.", en: "This observation lasted several months." }, accept: ["observation", "the watching"], hint: "Careful watching, or a remark — from observer." },
        { id: "fr-u101l1-lanalyse", type: "vocab", front: "l'analyse", reading: "lanalyse", meaning: "the analysis", example: { jp: "L'analyse des résultats a pris beaucoup de temps.", en: "The analysis of the results took a lot of time." }, accept: ["analysis", "the study"], hint: "A breaking-down to understand — l'analyse des données. From analyser." },
        { id: "fr-u101l1-experimental", type: "vocab", front: "expérimental", reading: "experimental", meaning: "experimental", example: { jp: "Ce projet est encore expérimental.", en: "This project is still experimental." }, accept: ["experimental", "trial"], hint: "At the testing stage — un traitement expérimental. From l'expérience (experiment)." },
        { id: "fr-u101l1-concevoir", type: "vocab", front: "concevoir", reading: "concevoir", meaning: "to design", example: { jp: "Ils ont conçu ce nouveau modèle très vite.", en: "They designed this new model very quickly." }, accept: ["to design", "to conceive", "to devise"], hint: "To design / think up — concevoir un projet. From concept. Also to conceive a child." },
        { id: "fr-u101l1-lechantillon", type: "vocab", front: "l'échantillon", reading: "lechantillon", meaning: "the sample", example: { jp: "Cet échantillon est trop petit pour en être sûr.", en: "This sample is too small to be sure." }, accept: ["sample", "the specimen"], hint: "A small part studied to judge the whole — un échantillon représentatif. Also a free sample." },
        { id: "fr-u101l1-lapercee", type: "vocab", front: "la percée", reading: "lapercee", meaning: "the breakthrough", example: { jp: "Cette recherche a mené à une vraie percée.", en: "This research led to a real breakthrough." }, accept: ["breakthrough", "the advance"], hint: "A breakthrough / decisive advance — une percée scientifique. From percer, to break through." },
      ],
    },
    {
      id: "fr-u101l2",
      unit: 101,
      lesson: 2,
      title: "Scientific rigour",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about doing science properly: empirique, la rigueur, quantifier, une corrélation.",
      items: [
        { id: "fr-u101l2-empirique", type: "vocab", front: "empirique", reading: "empirique", meaning: "empirical", example: { jp: "Une preuve empirique vaut mieux qu'une simple idée.", en: "Empirical evidence is worth more than a mere idea." }, accept: ["empirical", "evidence-based"], hint: "Based on observation and experiment, not theory — une démarche empirique." },
        { id: "fr-u101l2-larigueur", type: "vocab", front: "la rigueur", reading: "larigueur", meaning: "the rigour", example: { jp: "Ce travail demande beaucoup de rigueur.", en: "This work demands a lot of rigour." }, accept: ["rigour", "the precision", "the strictness"], hint: "Exactness and discipline — travailler avec rigueur. à la rigueur = at a pinch." },
        { id: "fr-u101l2-quantifier", type: "vocab", front: "quantifier", reading: "quantifier", meaning: "to quantify", example: { jp: "Ce changement est difficile à quantifier.", en: "This change is hard to quantify." }, accept: ["to quantify", "to measure"], hint: "To put a number on something — quantifier un effet. From la quantité." },
        { id: "fr-u101l2-lacorrelation", type: "vocab", front: "la corrélation", reading: "lacorrelation", meaning: "the correlation", example: { jp: "Il y a une corrélation claire entre ces deux faits.", en: "There's a clear correlation between these two facts." }, accept: ["correlation", "the link"], hint: "A statistical link between two things — corrélation n'est pas causalité." },
        { id: "fr-u101l2-reproductible", type: "vocab", front: "reproductible", reading: "reproductible", meaning: "reproducible", example: { jp: "Une bonne expérience doit être reproductible.", en: "A good experiment must be reproducible." }, accept: ["reproducible", "repeatable"], hint: "Able to be repeated with the same result — a test of good science. From reproduire." },
        { id: "fr-u101l2-lavariable", type: "vocab", front: "la variable", reading: "lavariable", meaning: "the variable", example: { jp: "Une seule variable peut changer le résultat.", en: "A single variable can change the result." }, accept: ["variable", "the factor"], hint: "A factor that can change — contrôler les variables. Also 'variable' (adj)." },
      ],
    },
    {
      id: "fr-u101l3",
      unit: 101,
      lesson: 3,
      title: "Technology",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about advanced tech: un algorithme, l'automatisation, un capteur, une simulation.",
      items: [
        { id: "fr-u101l3-lalgorithme", type: "vocab", front: "l'algorithme", reading: "lalgorithme", meaning: "the algorithm", example: { jp: "Un algorithme décide ce qu'on voit sur internet.", en: "An algorithm decides what you see on the internet." }, accept: ["algorithm"], hint: "A set of steps a computer follows — l'algorithme d'un réseau social." },
        { id: "fr-u101l3-lautomatisation", type: "vocab", front: "l'automatisation", reading: "lautomatisation", meaning: "automation", example: { jp: "L'automatisation change beaucoup le monde du travail.", en: "Automation is changing the world of work a lot." }, accept: ["automation"], hint: "Replacing human work by machines — from automatique." },
        { id: "fr-u101l3-lecapteur", type: "vocab", front: "le capteur", reading: "lecapteur", meaning: "the sensor", example: { jp: "Ce capteur ouvre la porte tout seul.", en: "This sensor opens the door on its own." }, accept: ["sensor", "the detector"], hint: "A device that detects something — un capteur de mouvement. From capter, to pick up." },
        { id: "fr-u101l3-ledispositif", type: "vocab", front: "le dispositif", reading: "ledispositif", meaning: "the device", example: { jp: "Ce dispositif surveille la maison jour et nuit.", en: "This device watches the house day and night." }, accept: ["device", "the system", "the setup"], hint: "A device or arrangement set up for a purpose — un dispositif de sécurité." },
        { id: "fr-u101l3-lasimulation", type: "vocab", front: "la simulation", reading: "lasimulation", meaning: "the simulation", example: { jp: "Une simulation aide à prévoir les problèmes.", en: "A simulation helps to foresee problems." }, accept: ["simulation"], hint: "A computer model of a real situation — une simulation numérique. From simuler." },
        { id: "fr-u101l3-linterface", type: "vocab", front: "l'interface", reading: "linterface", meaning: "the interface", example: { jp: "Cette nouvelle interface est simple et claire.", en: "This new interface is simple and clear." }, accept: ["interface"], hint: "Where a user and a machine meet — une interface intuitive. Feminine: une interface." },
      ],
    },
    {
      id: "fr-u101l4",
      unit: 101,
      lesson: 4,
      title: "Innovation",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about invention and rollout: l'innovation, un brevet, un prototype, le déploiement.",
      items: [
        { id: "fr-u101l4-linnovation", type: "vocab", front: "l'innovation", reading: "linnovation", meaning: "the innovation", example: { jp: "Cette innovation a beaucoup changé notre vie.", en: "This innovation changed our lives a lot." }, accept: ["innovation"], hint: "A new idea or product — l'innovation technologique. From innover." },
        { id: "fr-u101l4-lebrevet", type: "vocab", front: "le brevet", reading: "lebrevet", meaning: "the patent", example: { jp: "Ils ont pris un brevet pour cette idée.", en: "They took out a patent for this idea." }, accept: ["patent"], hint: "Legal protection for an invention — déposer un brevet. From breveter." },
        { id: "fr-u101l4-leprototype", type: "vocab", front: "le prototype", reading: "leprototype", meaning: "the prototype", example: { jp: "Ils ont enfin montré leur nouveau prototype.", en: "They finally showed their new prototype." }, accept: ["prototype"], hint: "The first working model of something — tester un prototype." },
        { id: "fr-u101l4-lasynthese", type: "vocab", front: "la synthèse", reading: "lasynthese", meaning: "the synthesis", example: { jp: "Elle a fait une synthèse claire de la situation.", en: "She gave a clear synthesis of the situation." }, accept: ["synthesis", "the summary", "the overview"], hint: "Combining parts into a whole, or a summary — faire la synthèse de. Also chemical synthesis." },
        { id: "fr-u101l4-ledeploiement", type: "vocab", front: "le déploiement", reading: "ledeploiement", meaning: "the rollout", example: { jp: "Le déploiement du nouveau système a pris des mois.", en: "The rollout of the new system took months." }, accept: ["rollout", "the deployment", "the roll-out"], hint: "Putting something into service widely — le déploiement d'un réseau. From déployer." },
        { id: "fr-u101l4-laparticule", type: "vocab", front: "la particule", reading: "laparticule", meaning: "the particle", example: { jp: "Une particule est trop petite pour être vue.", en: "A particle is too small to be seen." }, accept: ["particle"], hint: "A tiny piece of matter — une particule de poussière. Also a grammar particle." },
      ],
    },
  ],
};
