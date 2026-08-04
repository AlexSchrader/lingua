// ES Unit 17 — Los viajes ("Travel") — A1 COVERAGE (slot: coverage-3)
// Strand D, unit 3 of 6. Transport, the things you take with you, the street
// furniture you navigate by, and six movement verbs. Buildings in a town
// (la estación, el hospital, el hotel) are block 2's unit 7 and are only used here.
// Conventions and the assumed block 1–2 vocabulary: see es/unit12.js.
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
      canDo: "Say how you get around: voy en coche, en tren, en autobús, en bicicleta.",
      items: [
        { id: "es-u17l1-elcoche", type: "vocab", front: "el coche", reading: "elcoche", meaning: "the car", example: { jp: "Voy en coche a Madrid.", en: "I'm driving to Madrid." }, accept: ["car", "automobile"], hint: "In Spain el coche; in most of Latin America el carro or el auto. All three are understood everywhere." },
        { id: "es-u17l1-eltren", type: "vocab", front: "el tren", reading: "eltren", meaning: "the train", example: { jp: "El tren va a Barcelona.", en: "The train goes to Barcelona." }, accept: ["train"] },
        { id: "es-u17l1-elavion", type: "vocab", front: "el avión", reading: "elavion", meaning: "the plane", example: { jp: "El avión es muy rápido.", en: "The plane is very fast." }, accept: ["aeroplane", "airplane", "plane"] },
        { id: "es-u17l1-elautobus", type: "vocab", front: "el autobús", reading: "elautobus", meaning: "the bus", example: { jp: "Voy en autobús a la escuela.", en: "I take the bus to school." }, accept: ["bus", "coach"] },
        { id: "es-u17l1-labicicleta", type: "vocab", front: "la bicicleta", reading: "labicicleta", meaning: "the bicycle", example: { jp: "María va en bicicleta.", en: "María goes by bike." }, accept: ["bike", "bicycle", "cycle"], hint: "Shortened to la bici in everyday speech, exactly like English \"bike\"." },
        { id: "es-u17l1-lamoto", type: "vocab", front: "la moto", reading: "lamoto", meaning: "the motorbike", example: { jp: "La moto es de Pablo.", en: "The motorbike is Pablo's." }, accept: ["motorcycle", "motorbike", "scooter"], hint: "Feminine despite the -o, like la foto — it's short for la motocicleta." },
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
      canDo: "Say where something is on a street: la parada está en la esquina, el semáforo está en el puente.",
      items: [
        { id: "es-u17l3-lacarretera", type: "vocab", front: "la carretera", reading: "lacarretera", meaning: "the road", example: { jp: "La carretera a Madrid es larga.", en: "The road to Madrid is long." }, accept: ["highway", "main road", "road"], hint: "la carretera runs between towns; la calle (Unit 7) is inside one." },
        { id: "es-u17l3-elcamino", type: "vocab", front: "el camino", reading: "elcamino", meaning: "the way", example: { jp: "Es un camino muy largo.", en: "It's a very long way." }, accept: ["path", "route", "way"] },
        { id: "es-u17l3-laparada", type: "vocab", front: "la parada", reading: "laparada", meaning: "the stop", example: { jp: "La parada del autobús está en la esquina.", en: "The bus stop is on the corner." }, accept: ["bus stop", "stop"] },
        { id: "es-u17l3-laesquina", type: "vocab", front: "la esquina", reading: "laesquina", meaning: "the corner", example: { jp: "La tienda está en la esquina.", en: "The shop is on the corner." }, accept: ["street corner", "corner"] },
        { id: "es-u17l3-elpuente", type: "vocab", front: "el puente", reading: "elpuente", meaning: "the bridge", example: { jp: "El puente es muy largo.", en: "The bridge is very long." }, accept: ["bridge"] },
        { id: "es-u17l3-elsemaforo", type: "vocab", front: "el semáforo", reading: "elsemaforo", meaning: "the traffic light", example: { jp: "El semáforo está en rojo.", en: "The traffic light is red." }, accept: ["traffic lights", "stoplight", "traffic light"], hint: "\"Está en rojo\" — the light IS at red right now, so it takes está, not es." },
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
