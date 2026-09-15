// FR Unit 19 — Les transports ("Getting around") — A1
// Vehicles, travel words, and the motion verbs that go with them. `le métro` and
// `la gare` came in Unit 6; this unit is the journey itself.
// Conventions: see fr/unit1.js.
export const FR_UNIT20 = {
  id: "fr-u20",
  lang: "fr",
  title: "Les transports",
  order: 20,
  stage: "a1",
  lessons: [
    {
      id: "fr-u20l1",
      unit: 20,
      lesson: 1,
      title: "Vehicles",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name transport: la voiture, le bus, le train, l'avion, le vélo, le bateau, le taxi.",
      items: [
        { id: "fr-u20l1-lavoiture", type: "vocab", front: "la voiture", reading: "lavoiture", meaning: "car", example: { jp: "Ma voiture est devant la maison.", en: "My car is in front of the house." }, drill: { jp: "La voiture est rouge", en: "The car is red" }, accept: ["the car"] },
        { id: "fr-u20l1-lebus", type: "vocab", front: "le bus", reading: "lebus", meaning: "bus", example: { jp: "Je prends le bus tous les jours.", en: "I take the bus every day." }, drill: { jp: "Le bus arrive à midi", en: "The bus arrives at noon" }, accept: ["the bus"] },
        { id: "fr-u20l1-letrain", type: "vocab", front: "le train", reading: "letrain", meaning: "train", example: { jp: "Le train arrive à la gare à midi.", en: "The train arrives at the station at noon." }, drill: { jp: "Je prends le train demain", en: "I'm taking the train tomorrow" }, accept: ["the train"] },
        { id: "fr-u20l1-lavion", type: "vocab", front: "l'avion", reading: "lavion", meaning: "plane", example: { jp: "L'avion est très rapide.", en: "The plane is very fast." }, drill: { jp: "Je prends l'avion pour Paris", en: "I'm taking the plane to Paris" }, accept: ["the plane", "aeroplane", "airplane", "aircraft"] },
        { id: "fr-u20l1-levelo", type: "vocab", front: "le vélo", reading: "levelo", meaning: "bicycle", example: { jp: "Je vais à l'école à vélo.", en: "I go to school by bike." }, drill: { jp: "Le vélo est devant la maison", en: "The bike is in front of the house" }, accept: ["the bike", "bicycle", "cycle"], hint: "à vélo, à pied — but en voiture, en train. Small vehicles take à, ones you sit inside take en." },
        { id: "fr-u20l1-lebateau", type: "vocab", front: "le bateau", reading: "lebateau", meaning: "boat", example: { jp: "Le bateau est sur la mer.", en: "The boat is on the sea." }, drill: { jp: "Je regarde le bateau", en: "I'm watching the boat" }, accept: ["the boat", "ship"] },
        { id: "fr-u20l1-letaxi", type: "vocab", front: "le taxi", reading: "letaxi", meaning: "taxi", example: { jp: "Je cherche un taxi. C'est loin ?", en: "I'm looking for a taxi. Is it far?" }, drill: { jp: "Le taxi est devant l'hôtel", en: "The taxi is in front of the hotel" }, accept: ["the taxi", "cab"] },
        { id: "fr-u20l1-rapide", type: "vocab", front: "rapide", reading: "rapide", meaning: "fast", example: { jp: "Le train est rapide, le bus est lent.", en: "The train is fast, the bus is slow." }, drill: { jp: "Le vélo est rapide en ville", en: "The bike is fast in town" }, accept: ["quick", "speedy"], hint: "lent = slow — the adjective behind lentement (Unit 10)." },
      ],
    },
    {
      id: "fr-u20l2",
      unit: 20,
      lesson: 2,
      title: "The journey",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Travel: le billet, la valise, le voyage, l'aéroport, l'arrêt, le départ, l'arrivée.",
      items: [
        { id: "fr-u20l2-lebillet", type: "vocab", front: "le billet", reading: "lebillet", meaning: "ticket", example: { jp: "Un billet pour Paris, s'il vous plaît.", en: "One ticket to Paris, please." }, drill: { jp: "Le billet est à dix euros", en: "The ticket is ten euros" }, accept: ["the ticket", "note", "bill"], hint: "Also a banknote — un billet de vingt euros." },
        { id: "fr-u20l2-lavalise", type: "vocab", front: "la valise", reading: "lavalise", meaning: "suitcase", example: { jp: "Ma valise est trop grande.", en: "My suitcase is too big." }, drill: { jp: "La valise est dans la voiture", en: "The suitcase is in the car" }, accept: ["the suitcase", "luggage", "case"] },
        { id: "fr-u20l2-levoyage", type: "vocab", front: "le voyage", reading: "levoyage", meaning: "trip", example: { jp: "Bon voyage !", en: "Have a good trip!" }, drill: { jp: "Le voyage commence demain matin", en: "The trip starts tomorrow morning" }, accept: ["the trip", "journey", "travel"], hint: "Bon voyage ! is what you say to someone leaving — English borrowed it whole." },
        { id: "fr-u20l2-laeroport", type: "vocab", front: "l'aéroport", reading: "laeroport", meaning: "airport", example: { jp: "L'aéroport est loin de la ville.", en: "The airport is far from the city." }, drill: { jp: "Je vais à l'aéroport en taxi", en: "I'm going to the airport by taxi" }, accept: ["the airport"] },
        { id: "fr-u20l2-larret", type: "vocab", front: "l'arrêt", reading: "larret", meaning: "stop", example: { jp: "L'arrêt de bus est devant l'école.", en: "The bus stop is in front of the school." }, drill: { jp: "L'arrêt est près du parc", en: "The stop is near the park" }, accept: ["the stop", "bus stop"] },
        { id: "fr-u20l2-ledepart", type: "vocab", front: "le départ", reading: "ledepart", meaning: "departure", example: { jp: "Le départ est à neuf heures.", en: "The departure is at nine o'clock." }, drill: { jp: "Le départ est demain matin", en: "The departure is tomorrow morning" }, accept: ["the departure", "start"] },
        { id: "fr-u20l2-larrivee", type: "vocab", front: "l'arrivée", reading: "larrivee", meaning: "arrival", example: { jp: "L'arrivée est à minuit.", en: "The arrival is at midnight." }, drill: { jp: "L'arrivée du train est tard", en: "The train's arrival is late" }, accept: ["the arrival"] },
        { id: "fr-u20l2-pour", type: "vocab", front: "pour", reading: "pour", meaning: "for", example: { jp: "Un billet pour Marie, s'il vous plaît.", en: "A ticket for Marie, please." }, drill: { jp: "Le train pour Paris est là", en: "The train for Paris is there" }, accept: ["to", "in order to"] },
      ],
    },
    {
      id: "fr-u20l3",
      unit: 20,
      lesson: 3,
      title: "On the move",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Move around: je prends, je monte, je descends, je conduis, je marche — vite, lent.",
      items: [
        { id: "fr-u20l3-jeprends", type: "vocab", front: "je prends", reading: "jeprends", meaning: "I take", example: { jp: "Je prends le train à sept heures.", en: "I take the train at seven o'clock." }, drill: { jp: "Je prends le bus ce matin", en: "I take the bus this morning" }, accept: ["i'm taking", "i have"], hint: "Very useful verb: je prends le bus, je prends un café." },
        { id: "fr-u20l3-jemonte", type: "vocab", front: "je monte", reading: "jemonte", meaning: "I get on", example: { jp: "Je monte dans le bus.", en: "I get on the bus." }, drill: { jp: "Je monte dans la voiture avec Marie", en: "I get in the car with Marie" }, accept: ["i go up", "i climb", "i get in"] },
        { id: "fr-u20l3-jedescends", type: "vocab", front: "je descends", reading: "jedescends", meaning: "I get off", example: { jp: "Je descends à la gare.", en: "I get off at the station." }, drill: { jp: "Je descends du bus ici", en: "I get off the bus here" }, accept: ["i go down", "i get out"] },
        { id: "fr-u20l3-jeconduis", type: "vocab", front: "je conduis", reading: "jeconduis", meaning: "I drive", example: { jp: "Je conduis la voiture de mon père.", en: "I drive my father's car." }, drill: { jp: "Je conduis lentement en ville", en: "I drive slowly in town" }, accept: ["i'm driving"] },
        { id: "fr-u20l3-jemarche", type: "vocab", front: "je marche", reading: "jemarche", meaning: "I walk", example: { jp: "Je marche tous les jours.", en: "I walk every day." }, drill: { jp: "Je marche dans le parc le soir", en: "I walk in the park in the evening" }, accept: ["i'm walking"] },
        { id: "fr-u20l3-vite", type: "vocab", front: "vite", reading: "vite", meaning: "quickly", example: { jp: "Vite ! Le train est là !", en: "Quick! The train is here!" }, drill: { jp: "Le train arrive très vite", en: "The train arrives very quickly" }, accept: ["fast", "quick", "hurry"] },
        { id: "fr-u20l3-lent", type: "vocab", front: "lent", reading: "lent", meaning: "slow", example: { jp: "Le bus est lent aujourd'hui.", en: "The bus is slow today." }, drill: { jp: "Le train est lent ce matin", en: "The train is slow this morning" }, accept: ["slowly"] },
      ],
    },
  ],
};
