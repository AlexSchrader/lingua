// FR Unit 19 — Les transports ("Getting around") — A1
// Vehicles, travel words, and the motion verbs that go with them. `le métro` and
// `la gare` came in Unit 6; this unit is the journey itself.
// Conventions: see fr/unit1.js.
export const FR_UNIT19 = {
  id: "fr-u19",
  lang: "fr",
  title: "Les transports",
  order: 19,
  stage: "a1",
  lessons: [
    {
      id: "fr-u19l1",
      unit: 19,
      lesson: 1,
      title: "Vehicles",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name transport: la voiture, le bus, le train, l'avion, le vélo, le bateau, le taxi.",
      items: [
        { id: "fr-u19l1-lavoiture", type: "vocab", front: "la voiture", reading: "lavoiture", meaning: "car", example: { jp: "Ma voiture est devant la maison.", en: "My car is in front of the house." }, accept: ["the car"] },
        { id: "fr-u19l1-lebus", type: "vocab", front: "le bus", reading: "lebus", meaning: "bus", example: { jp: "Je prends le bus tous les jours.", en: "I take the bus every day." }, accept: ["the bus"] },
        { id: "fr-u19l1-letrain", type: "vocab", front: "le train", reading: "letrain", meaning: "train", example: { jp: "Le train arrive à la gare à midi.", en: "The train arrives at the station at noon." }, accept: ["the train"] },
        { id: "fr-u19l1-lavion", type: "vocab", front: "l'avion", reading: "lavion", meaning: "plane", example: { jp: "L'avion est très rapide.", en: "The plane is very fast." }, accept: ["the plane", "aeroplane", "airplane", "aircraft"] },
        { id: "fr-u19l1-levelo", type: "vocab", front: "le vélo", reading: "levelo", meaning: "bicycle", example: { jp: "Je vais à l'école à vélo.", en: "I go to school by bike." }, accept: ["the bike", "bicycle", "cycle"], hint: "à vélo, à pied — but en voiture, en train. Small vehicles take à, ones you sit inside take en." },
        { id: "fr-u19l1-lebateau", type: "vocab", front: "le bateau", reading: "lebateau", meaning: "boat", example: { jp: "Le bateau est sur la mer.", en: "The boat is on the sea." }, accept: ["the boat", "ship"] },
        { id: "fr-u19l1-letaxi", type: "vocab", front: "le taxi", reading: "letaxi", meaning: "taxi", example: { jp: "Je cherche un taxi. C'est loin ?", en: "I'm looking for a taxi. Is it far?" }, accept: ["the taxi", "cab"] },
        { id: "fr-u19l1-rapide", type: "vocab", front: "rapide", reading: "rapide", meaning: "fast", example: { jp: "Le train est rapide, le bus est lent.", en: "The train is fast, the bus is slow." }, accept: ["quick", "speedy"], hint: "lent = slow — the adjective behind lentement (Unit 10)." },
      ],
    },
    {
      id: "fr-u19l2",
      unit: 19,
      lesson: 2,
      title: "The journey",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Travel: le billet, la valise, le voyage, l'aéroport, l'arrêt, le départ, l'arrivée.",
      items: [
        { id: "fr-u19l2-lebillet", type: "vocab", front: "le billet", reading: "lebillet", meaning: "ticket", example: { jp: "Un billet pour Paris, s'il vous plaît.", en: "One ticket to Paris, please." }, accept: ["the ticket", "note", "bill"], hint: "Also a banknote — un billet de vingt euros." },
        { id: "fr-u19l2-lavalise", type: "vocab", front: "la valise", reading: "lavalise", meaning: "suitcase", example: { jp: "Ma valise est trop grande.", en: "My suitcase is too big." }, accept: ["the suitcase", "luggage", "case"] },
        { id: "fr-u19l2-levoyage", type: "vocab", front: "le voyage", reading: "levoyage", meaning: "trip", example: { jp: "Bon voyage !", en: "Have a good trip!" }, accept: ["the trip", "journey", "travel"], hint: "Bon voyage ! is what you say to someone leaving — English borrowed it whole." },
        { id: "fr-u19l2-laeroport", type: "vocab", front: "l'aéroport", reading: "laeroport", meaning: "airport", example: { jp: "L'aéroport est loin de la ville.", en: "The airport is far from the city." }, accept: ["the airport"] },
        { id: "fr-u19l2-larret", type: "vocab", front: "l'arrêt", reading: "larret", meaning: "stop", example: { jp: "L'arrêt de bus est devant l'école.", en: "The bus stop is in front of the school." }, accept: ["the stop", "bus stop"] },
        { id: "fr-u19l2-ledepart", type: "vocab", front: "le départ", reading: "ledepart", meaning: "departure", example: { jp: "Le départ est à neuf heures.", en: "The departure is at nine o'clock." }, accept: ["the departure", "start"] },
        { id: "fr-u19l2-larrivee", type: "vocab", front: "l'arrivée", reading: "larrivee", meaning: "arrival", example: { jp: "L'arrivée est à minuit.", en: "The arrival is at midnight." }, accept: ["the arrival"] },
        { id: "fr-u19l2-pour", type: "vocab", front: "pour", reading: "pour", meaning: "for", example: { jp: "Un billet pour Marie, s'il vous plaît.", en: "A ticket for Marie, please." }, accept: ["to", "in order to"] },
      ],
    },
    {
      id: "fr-u19l3",
      unit: 19,
      lesson: 3,
      title: "On the move",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Move around: je prends, je monte, je descends, je conduis, je marche — vite, lent.",
      items: [
        { id: "fr-u19l3-jeprends", type: "vocab", front: "je prends", reading: "jeprends", meaning: "I take", example: { jp: "Je prends le train à sept heures.", en: "I take the train at seven o'clock." }, accept: ["i'm taking", "i have"], hint: "Very useful verb: je prends le bus, je prends un café." },
        { id: "fr-u19l3-jemonte", type: "vocab", front: "je monte", reading: "jemonte", meaning: "I get on", example: { jp: "Je monte dans le bus.", en: "I get on the bus." }, accept: ["i go up", "i climb", "i get in"] },
        { id: "fr-u19l3-jedescends", type: "vocab", front: "je descends", reading: "jedescends", meaning: "I get off", example: { jp: "Je descends à la gare.", en: "I get off at the station." }, accept: ["i go down", "i get out"] },
        { id: "fr-u19l3-jeconduis", type: "vocab", front: "je conduis", reading: "jeconduis", meaning: "I drive", example: { jp: "Je conduis la voiture de mon père.", en: "I drive my father's car." }, accept: ["i'm driving"] },
        { id: "fr-u19l3-jemarche", type: "vocab", front: "je marche", reading: "jemarche", meaning: "I walk", example: { jp: "Je marche tous les jours.", en: "I walk every day." }, accept: ["i'm walking"] },
        { id: "fr-u19l3-vite", type: "vocab", front: "vite", reading: "vite", meaning: "quickly", example: { jp: "Vite ! Le train part !", en: "Quick! The train is leaving!" }, accept: ["fast", "quick", "hurry"] },
        { id: "fr-u19l3-lent", type: "vocab", front: "lent", reading: "lent", meaning: "slow", example: { jp: "Le bus est lent aujourd'hui.", en: "The bus is slow today." }, accept: ["slowly"] },
      ],
    },
  ],
};
