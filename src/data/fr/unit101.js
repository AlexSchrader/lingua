// FR Unit 101 — Les sciences et la technologie (slot: science and technology) — B2
// B1 taught la recherche, l'expérience, l'hypothèse (u61), le climat. B2 adds the
// scientific method (l'observation, l'analyse, expérimental, l'échantillon), the
// sciences (la biologie, la physique, la molécule, l'atome), technology (le
// logiciel, l'algorithme, numérique, le capteur) and innovation (l'innovation, le
// brevet, le prototype, le laboratoire). Fronts checked against the 2,168 live fr
// fronts (l'expérience, la théorie, la donnée, la découverte avoided). fr/unit1.js.
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
        { id: "fr-u101l1-lapercee", type: "vocab", front: "la percée", reading: "lapercee", meaning: "the breakthrough", example: { jp: "Les chercheurs espèrent une nouvelle percée.", en: "The researchers are hoping for a new breakthrough." }, accept: ["breakthrough", "the advance"], hint: "A breakthrough / decisive advance — une percée scientifique. From percer, to break through." },
      ],
    },
    {
      id: "fr-u101l2",
      unit: 101,
      lesson: 2,
      title: "The sciences",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the sciences and their building blocks: la biologie, la physique, la molécule, l'atome.",
      items: [
        { id: "fr-u101l2-labiologie", type: "vocab", front: "la biologie", reading: "labiologie", meaning: "biology", example: { jp: "Elle est très forte en biologie et en chimie.", en: "She's very good at biology and chemistry." }, accept: ["biology"], hint: "The science of living things — from bio- (life). Un biologiste studies it." },
        { id: "fr-u101l2-laphysique", type: "vocab", front: "la physique", reading: "laphysique", meaning: "physics", example: { jp: "Il trouve la physique difficile mais intéressante.", en: "He finds physics hard but interesting." }, accept: ["physics"], hint: "The science of matter and energy. Also physique (adj) = physical." },
        { id: "fr-u101l2-lachimie", type: "vocab", front: "la chimie", reading: "lachimie", meaning: "chemistry", example: { jp: "En chimie, on étudie les réactions.", en: "In chemistry, you study reactions." }, accept: ["chemistry"], hint: "The science of substances and reactions — un chimiste. Also 'chemistry' between people." },
        { id: "fr-u101l2-lamolecule", type: "vocab", front: "la molécule", reading: "lamolecule", meaning: "the molecule", example: { jp: "L'eau est faite de très petites molécules.", en: "Water is made of very small molecules." }, accept: ["molecule"], hint: "A group of atoms bonded together — une molécule d'eau." },
        { id: "fr-u101l2-lacellule", type: "vocab", front: "la cellule", reading: "lacellule", meaning: "the cell", example: { jp: "Le corps est fait de millions de cellules.", en: "The body is made of millions of cells." }, accept: ["cell"], hint: "The basic unit of life — les cellules du corps. Also a prison cell." },
        { id: "fr-u101l2-latome", type: "vocab", front: "l'atome", reading: "latome", meaning: "the atom", example: { jp: "Un atome est bien trop petit pour être vu.", en: "An atom is far too small to be seen." }, accept: ["atom"], hint: "The smallest particle of an element — l'énergie atomique." },
      ],
    },
    {
      id: "fr-u101l3",
      unit: 101,
      lesson: 3,
      title: "Technology",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about digital tech: un logiciel, un algorithme, numérique, un capteur.",
      items: [
        { id: "fr-u101l3-lelogiciel", type: "vocab", front: "le logiciel", reading: "lelogiciel", meaning: "the software", example: { jp: "Ce logiciel coûte assez cher.", en: "This software is quite expensive." }, accept: ["software", "the program", "the app"], hint: "Software / a program — un logiciel libre = free software. From logique + matériel." },
        { id: "fr-u101l3-lalgorithme", type: "vocab", front: "l'algorithme", reading: "lalgorithme", meaning: "the algorithm", example: { jp: "Un algorithme décide ce qu'on voit sur internet.", en: "An algorithm decides what you see on the internet." }, accept: ["algorithm"], hint: "A set of steps a computer follows — l'algorithme d'un réseau social." },
        { id: "fr-u101l3-numerique", type: "vocab", front: "numérique", reading: "numerique", meaning: "digital", example: { jp: "Aujourd'hui, presque tout devient numérique.", en: "Today, almost everything is going digital." }, accept: ["digital"], hint: "Digital, as opposed to paper/analogue — une photo numérique. From le numéro." },
        { id: "fr-u101l3-ledispositif", type: "vocab", front: "le dispositif", reading: "ledispositif", meaning: "the device", example: { jp: "Ce dispositif surveille la maison jour et nuit.", en: "This device watches the house day and night." }, accept: ["device", "the system", "the setup"], hint: "A device or arrangement set up for a purpose — un dispositif de sécurité." },
        { id: "fr-u101l3-lautomatisation", type: "vocab", front: "l'automatisation", reading: "lautomatisation", meaning: "automation", example: { jp: "L'automatisation change beaucoup le monde du travail.", en: "Automation is changing the world of work a lot." }, accept: ["automation"], hint: "Replacing human work by machines — from automatique." },
        { id: "fr-u101l3-lecapteur", type: "vocab", front: "le capteur", reading: "lecapteur", meaning: "the sensor", example: { jp: "Ce capteur ouvre la porte tout seul.", en: "This sensor opens the door on its own." }, accept: ["sensor", "the detector"], hint: "A device that detects something — un capteur de mouvement. From capter, to pick up." },
      ],
    },
    {
      id: "fr-u101l4",
      unit: 101,
      lesson: 4,
      title: "Innovation",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about invention: l'innovation, un brevet, un prototype, un laboratoire.",
      items: [
        { id: "fr-u101l4-linnovation", type: "vocab", front: "l'innovation", reading: "linnovation", meaning: "the innovation", example: { jp: "Cette innovation a beaucoup changé notre vie.", en: "This innovation changed our lives a lot." }, accept: ["innovation"], hint: "A new idea or product — l'innovation technologique. From innover." },
        { id: "fr-u101l4-lebrevet", type: "vocab", front: "le brevet", reading: "lebrevet", meaning: "the patent", example: { jp: "Ils ont pris un brevet pour cette idée.", en: "They took out a patent for this idea." }, accept: ["patent"], hint: "Legal protection for an invention — déposer un brevet. From breveter." },
        { id: "fr-u101l4-leprototype", type: "vocab", front: "le prototype", reading: "leprototype", meaning: "the prototype", example: { jp: "Ils ont enfin montré leur nouveau prototype.", en: "They finally showed their new prototype." }, accept: ["prototype"], hint: "The first working model of something — tester un prototype." },
        { id: "fr-u101l4-lechercheur", type: "vocab", front: "le chercheur", reading: "lechercheur", meaning: "the researcher", example: { jp: "Les chercheurs travaillent sur ce problème depuis des années.", en: "Researchers have been working on this problem for years." }, accept: ["researcher", "the scientist"], hint: "A researcher — from chercher (to search). Une chercheuse for a woman." },
        { id: "fr-u101l4-lelaboratoire", type: "vocab", front: "le laboratoire", reading: "lelaboratoire", meaning: "the laboratory", example: { jp: "Ces chercheurs travaillent dans un grand laboratoire.", en: "These researchers work in a large laboratory." }, accept: ["laboratory", "the lab"], hint: "A lab — un laboratoire de recherche. Everyone shortens it to le labo." },
        { id: "fr-u101l4-laparticule", type: "vocab", front: "la particule", reading: "laparticule", meaning: "the particle", example: { jp: "Une particule est plus petite qu'un atome.", en: "A particle is smaller than an atom." }, accept: ["particle"], hint: "A tiny piece of matter — une particule de poussière. Also a grammar particle." },
      ],
    },
  ],
};
