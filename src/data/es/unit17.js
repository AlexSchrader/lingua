// ES Unit 17 — Los viajes ("Travel") — A1 COVERAGE (slot: coverage-3)
// Strand D, unit 3 of 6. Transport, the things you take with you, the street
// furniture you navigate by, and six movement verbs. Buildings in a town
// (la estación, el hospital, el hotel) are block 2's unit 7 and are only used here.
// Conventions and the assumed block 1–2 vocabulary: see es/unit12.js.
//   FREE: María, Pablo, Madrid, México | rápido
//   (Only proper names and transparent cognates, per the checker's contract.
//   Conjugated forms of a verb this block teaches — voy, puedo, cuesta — are
//   deliberately NOT listed: they are the headword convention, and declaring
//   them free would hide a genuinely untaught form later.)
export const ES_UNIT17 = {
  id: "es-u17",
  lang: "es",
  title: "Los viajes",
  order: 17,
  stage: "a1",
  lessons: [
    {
      id: "es-u17l1",
      unit: 17,
      lesson: 1,
      title: "El transporte",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Round out how you travel, beyond the car and the bus: en avión, en barco, en bicicleta, en moto — and what a camión is.",
      items: [
        { id: "es-u17l1-elavion", type: "vocab", front: "el avión", reading: "elavion", meaning: "the plane", example: { jp: "El avión es muy rápido.", en: "The plane is very fast." }, accept: ["aeroplane", "airplane", "plane"] },
        { id: "es-u17l1-elbarco", type: "vocab", front: "el barco", reading: "elbarco", meaning: "the boat", example: { jp: "Voy a México en barco.", en: "I'm going to Mexico by boat." }, accept: ["ship", "ferry", "boat"], hint: "Anything that floats, from a rowing boat to a liner. Note the pattern for every vehicle: en barco, en avión, en coche — en, never con." },
        { id: "es-u17l1-elcamion", type: "vocab", front: "el camión", reading: "elcamion", meaning: "the lorry", example: { jp: "El camión es muy grande.", en: "The lorry is very big." }, accept: ["camion", "truck", "lorry"], hint: "A truck in Spain — but in Mexico el camión is the everyday word for a bus, so listen to where you are." },
        { id: "es-u17l1-labicicleta", type: "vocab", front: "la bicicleta", reading: "labicicleta", meaning: "the bicycle", example: { jp: "María va en bicicleta.", en: "María goes by bike." }, accept: ["bike", "bicycle", "cycle"], hint: "Shortened to la bici in everyday speech, exactly like English \"bike\"." },
        { id: "es-u17l1-lamoto", type: "vocab", front: "la moto", reading: "lamoto", meaning: "the motorbike", example: { jp: "La moto es de Pablo.", en: "The motorbike is Pablo's." }, accept: ["motorcycle", "motorbike", "scooter"], hint: "Feminine despite the -o, like la foto — it's short for la motocicleta." },
        { id: "es-u17l1-eltaxi", type: "vocab", front: "el taxi", reading: "eltaxi", meaning: "the taxi", example: { jp: "Voy al aeropuerto en taxi.", en: "I'm going to the airport by taxi." }, accept: ["taxi", "cab"], hint: "The same word almost everywhere. Note the pattern in this lesson: en taxi, en barco, en bicicleta — en, never a preposition like English \"by\"." },
      ],
    },
    {
      id: "es-u17l2",
      unit: 17,
      lesson: 2,
      title: "De viaje",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Get ready for a trip: comprar el billete, hacer la maleta, llevar el pasaporte, buscar la salida.",
      items: [
        { id: "es-u17l2-elviaje", type: "vocab", front: "el viaje", reading: "elviaje", meaning: "the trip", example: { jp: "El viaje a Madrid es largo.", en: "The trip to Madrid is long." }, accept: ["journey", "voyage", "trip"], hint: "\"¡Buen viaje!\" is what you say to someone leaving — have a good trip." },
        { id: "es-u17l2-elbillete", type: "vocab", front: "el billete", reading: "elbillete", meaning: "the ticket", example: { jp: "Compro un billete de tren.", en: "I'm buying a train ticket." }, accept: ["fare", "ticket"], hint: "el billete in Spain, el boleto in Latin America. It also means a banknote." },
        { id: "es-u17l2-lamaleta", type: "vocab", front: "la maleta", reading: "lamaleta", meaning: "the suitcase", example: { jp: "La ropa está en la maleta.", en: "The clothes are in the suitcase." }, accept: ["case", "luggage", "suitcase"] },
        { id: "es-u17l2-elpasaporte", type: "vocab", front: "el pasaporte", reading: "elpasaporte", meaning: "the passport", example: { jp: "Necesito mi pasaporte para el avión.", en: "I need my passport for the plane." }, accept: ["passport"] },
        { id: "es-u17l2-elmapa", type: "vocab", front: "el mapa", reading: "elmapa", meaning: "the map", example: { jp: "El mapa está en la maleta.", en: "The map is in the suitcase." }, accept: ["map", "chart"], hint: "Masculine even though it ends in -a: EL mapa. A small group of Greek-derived words do this (el problema too)." },
        { id: "es-u17l2-lasalida", type: "vocab", front: "la salida", reading: "lasalida", meaning: "the exit", example: { jp: "¿Dónde está la salida?", en: "Where's the exit?" }, accept: ["way out", "departure", "exit"], hint: "From salir, to leave — the sign over every door out, and the word for a departure time." },
      ],
    },
    {
      id: "es-u17l3",
      unit: 17,
      lesson: 3,
      title: "Por la calle",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where something is on a street: la tienda está en la esquina, el semáforo está en el puente.",
      items: [
        { id: "es-u17l3-lacarretera", type: "vocab", front: "la carretera", reading: "lacarretera", meaning: "the road", example: { jp: "La carretera a Madrid es larga.", en: "The road to Madrid is long." }, accept: ["highway", "main road", "road"], hint: "la carretera runs between towns; la calle (Unit 7) is inside one." },
        { id: "es-u17l3-elcamino", type: "vocab", front: "el camino", reading: "elcamino", meaning: "the way", example: { jp: "Es un camino muy largo.", en: "It's a very long way." }, accept: ["path", "route", "way"] },
        { id: "es-u17l3-laesquina", type: "vocab", front: "la esquina", reading: "laesquina", meaning: "the corner", example: { jp: "La tienda está en la esquina.", en: "The shop is on the corner." }, accept: ["street corner", "corner"] },
        { id: "es-u17l3-elpuente", type: "vocab", front: "el puente", reading: "elpuente", meaning: "the bridge", example: { jp: "El puente es muy largo.", en: "The bridge is very long." }, accept: ["bridge"] },
        { id: "es-u17l3-elsemaforo", type: "vocab", front: "el semáforo", reading: "elsemaforo", meaning: "the traffic light", example: { jp: "El semáforo está en rojo.", en: "The traffic light is red." }, accept: ["traffic lights", "stoplight", "traffic light"], hint: "\"Está en rojo\" — the light IS at red right now, so it takes está, not es." },
        { id: "es-u17l3-laacera", type: "vocab", front: "la acera", reading: "laacera", meaning: "the pavement", example: { jp: "La acera de la calle Mayor es muy larga.", en: "The pavement on Calle Mayor is very long." }, accept: ["sidewalk", "the pavement", "footpath"], hint: "La acera in Spain; la vereda or la banqueta in much of Latin America." },
      ],
    },
    {
      id: "es-u17l4",
      unit: 17,
      lesson: 4,
      title: "Verbos de viaje",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Move through a journey end to end: salir, esperar, subir, viajar, bajar, llegar.",
      items: [
        { id: "es-u17l4-viajar", type: "vocab", front: "viajar", reading: "viajar", meaning: "to travel", example: { jp: "Viajo a México en avión.", en: "I'm travelling to Mexico by plane." }, accept: ["travel", "travels"] },
        { id: "es-u17l4-llegar", type: "vocab", front: "llegar", reading: "llegar", meaning: "to arrive", example: { jp: "El tren llega a las seis.", en: "The train arrives at six." }, accept: ["arrive", "get there", "arrives"], hint: "llegar A a place, always: llego a Madrid, never \"llego Madrid\"." },
        { id: "es-u17l4-salir", type: "vocab", front: "salir", reading: "salir", meaning: "to leave", example: { jp: "Salgo de casa por la mañana.", en: "I leave home in the morning." }, accept: ["go out", "depart", "leave"], hint: "salir DE a place: salgo de casa. The yo form is irregular — salgo, not \"salo\"." },
        { id: "es-u17l4-esperar", type: "vocab", front: "esperar", reading: "esperar", meaning: "to wait", example: { jp: "Espero el autobús en la parada.", en: "I wait for the bus at the stop." }, accept: ["wait for", "hope", "to wait for"], hint: "It also means \"to hope\" — espero que sí, I hope so." },
        { id: "es-u17l4-subir", type: "vocab", front: "subir", reading: "subir", meaning: "to get on", example: { jp: "Subo al tren.", en: "I get on the train." }, accept: ["go up", "climb", "get in"], hint: "subir a = get on / go up; bajar de = get off / go down. The pair covers stairs and vehicles alike." },
        { id: "es-u17l4-bajar", type: "vocab", front: "bajar", reading: "bajar", meaning: "to get off", example: { jp: "Bajo del autobús en la esquina.", en: "I get off the bus at the corner." }, accept: ["go down", "get down", "come down"] },
      ],
    },
  ],
};
