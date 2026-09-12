// ES Unit 23 — El viaje (slot: travel) — A2
// ─────────────────────────────────────────────────────────────────────────────
// A1 u17 already owns the transport NOUNS — el avión, el barco, el camión, la
// bicicleta, la moto, el taxi, el viaje, el billete, la maleta, el pasaporte, el
// mapa, la carretera — and the basic motion verbs viajar, llegar, salir, subir,
// bajar, esperar. Naming vehicles again would be a wasted unit.
//
// What A1 cannot do is TRANSACT. A learner can say el hotel and el billete but
// cannot book one, ask which platform, say the train is late, or hand over a
// reservation. So this unit is the travel a person actually performs: booking
// and arriving, the words on signs and announcements, and the vocabulary of
// things going wrong. Every A1 travel noun is used in the examples and re-taught
// nowhere.
// NOTE for u29 (Connecting words, this block): unaccented `que` — the relative
// and the complementiser in tienes QUE, creo QUE — is used everywhere in Spanish
// and is taught nowhere. A1 teaches only accented qué, the question word. u29
// should teach it; until then examples here route around it.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT23 = {
  id: "es-u23",
  lang: "es",
  title: "El viaje",
  order: 23,
  stage: "a2",
  lessons: [
    // Lesson 1: booking and paying for the trip
    {
      id: "es-u23l1",
      unit: 23,
      lesson: 1,
      title: "Booking it",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Arrange a trip rather than name its parts — reservar una habitación, un billete de ida y vuelta, el equipaje.",
      items: [
        { id: "es-u23l1-reservar", type: "vocab", front: "reservar", reading: "reservar", meaning: "to book", example: { jp: "Quiero reservar una habitación.", en: "I want to book a room." }, drill: { jp: "Quiero reservar una habitación", en: "I want to book a room" }, accept: ["reserve", "to reserve"], hint: "The noun is la reserva — tengo una reserva is what you say at the desk." },
        { id: "es-u23l1-lahabitacion", type: "vocab", front: "la habitación", reading: "lahabitacion", meaning: "room", example: { jp: "La habitación del hotel no es grande.", en: "The hotel room isn't big." }, drill: { jp: "La habitación del hotel es pequeña", en: "The hotel room is small" }, accept: ["the room", "hotel room"], hint: "A hotel room, not a room in a house — that is la sala or el cuarto." },
        { id: "es-u23l1-laida", type: "vocab", front: "la ida", reading: "laida", meaning: "outward journey", example: { jp: "Un billete de ida, por favor.", en: "A one-way ticket, please." }, drill: { jp: "La ida es el viernes", en: "The outward journey is on Friday" }, accept: ["one way", "the way there", "outbound"], hint: "From ir. De ida is one-way; de ida y vuelta is a return." },
        { id: "es-u23l1-lavuelta", type: "vocab", front: "la vuelta", reading: "lavuelta", meaning: "return", example: { jp: "Quiero un billete de ida y vuelta.", en: "I'd like a return ticket." }, drill: { jp: "La vuelta es el domingo", en: "The return is on Sunday" }, accept: ["the return", "round trip", "way back"], hint: "Also your change in a shop — ¿me da la vuelta? — and a lap or a stroll: dar una vuelta." },
        { id: "es-u23l1-elequipaje", type: "vocab", front: "el equipaje", reading: "elequipaje", meaning: "luggage", example: { jp: "Mi equipaje está en el coche.", en: "My luggage is in the car." }, drill: { jp: "El equipaje está en el coche", en: "The luggage is in the car" }, accept: ["the luggage", "baggage"], hint: "Singular where English is plural — el equipaje covers all your bags at once." },
        { id: "es-u23l1-elasiento", type: "vocab", front: "el asiento", reading: "elasiento", meaning: "seat", example: { jp: "Mi asiento está cerca de la ventana.", en: "My seat is near the window." }, drill: { jp: "El asiento del avión es pequeño", en: "The plane seat is small" }, accept: ["the seat", "place"], hint: "From sentarse in u21 — the thing you sit in." },
      ],
    },
    // Lesson 2: the words on signs and announcements
    {
      id: "es-u23l2",
      unit: 23,
      lesson: 2,
      title: "Signs and announcements",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read a station or airport — la llegada, la salida, el andén, la puerta, el horario, la escala.",
      items: [
        { id: "es-u23l2-lallegada", type: "vocab", front: "la llegada", reading: "lallegada", meaning: "arrival", example: { jp: "La llegada del tren es a las ocho.", en: "The train's arrival is at eight." }, drill: { jp: "La llegada del tren es a las ocho", en: "The train's arrival is at eight" }, accept: ["the arrival", "arrivals"], hint: "The noun from llegar, which A1 taught. On the board it is llegadas, plural." },
        { id: "es-u23l2-elanden", type: "vocab", front: "el andén", reading: "elanden", meaning: "platform", example: { jp: "El tren sale del andén tres.", en: "The train leaves from platform three." }, drill: { jp: "El andén está a la derecha", en: "The platform is on the right" }, accept: ["the platform", "track"], hint: "For a train. In an airport it is la puerta, the gate." },
        { id: "es-u23l2-lapuerta", type: "vocab", front: "la puerta de embarque", reading: "lapuertadeembarque", meaning: "boarding gate", example: { jp: "La puerta de embarque está cerca.", en: "The boarding gate is nearby." }, drill: { jp: "La puerta de embarque está allí", en: "The boarding gate is over there" }, accept: ["the gate", "boarding gate"], hint: "A1 taught la puerta, a door. At an airport the full phrase is what is written on the sign." },
        { id: "es-u23l2-laescala", type: "vocab", front: "la escala", reading: "laescala", meaning: "stopover", example: { jp: "El avión tiene una escala en Madrid.", en: "The plane has a stopover in Madrid." }, drill: { jp: "La escala en Madrid es larga", en: "The stopover in Madrid is long" }, accept: ["the stopover", "layover", "stop"], hint: "Hacer escala is to stop over. A direct flight is un vuelo directo." },
        { id: "es-u23l2-elvuelo", type: "vocab", front: "el vuelo", reading: "elvuelo", meaning: "flight", example: { jp: "Mi vuelo sale a las seis de la mañana.", en: "My flight leaves at six in the morning." }, drill: { jp: "El vuelo a México es largo", en: "The flight to Mexico is long" }, accept: ["the flight"], hint: "From volar, to fly. The plane itself is el avión, which A1 taught." },
        { id: "es-u23l2-elretraso", type: "vocab", front: "el retraso", reading: "elretraso", meaning: "delay", example: { jp: "El tren tiene un retraso de una hora.", en: "The train has an hour's delay." }, drill: { jp: "El retraso del vuelo es enorme", en: "The flight delay is enormous" }, accept: ["the delay", "lateness"], hint: "Con retraso is \"late\" for transport. A person who is late is tarde, not con retraso." },
      ],
    },
    // Lesson 3: getting around once you are there
    {
      id: "es-u23l3",
      unit: 23,
      lesson: 3,
      title: "Finding your way",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Ask for and follow directions — seguir, girar, cruzar, a la derecha, a la izquierda, recto.",
      items: [
        { id: "es-u23l3-seguir", type: "vocab", front: "seguir", reading: "seguir", meaning: "to carry on", example: { jp: "Sigue por esta calle hasta la plaza.", en: "Carry on along this street to the square." }, drill: { jp: "Quiero seguir recto", en: "I want to carry straight on" }, accept: ["to follow", "continue", "keep going"], hint: "Both to follow and to keep going. Sigue recto is the single most common direction you will be given." },
        { id: "es-u23l3-girar", type: "vocab", front: "girar", reading: "girar", meaning: "to turn", example: { jp: "Voy a girar en la esquina.", en: "I'm going to turn at the corner." }, drill: { jp: "Quiero girar a la derecha", en: "I want to turn right" }, accept: ["turn", "to turn off"], hint: "Doblar means the same thing and is more common in Latin America." },
        { id: "es-u23l3-cruzar", type: "vocab", front: "cruzar", reading: "cruzar", meaning: "to cross", example: { jp: "Cruzo el puente todos los días.", en: "I cross the bridge every day." }, drill: { jp: "Quiero cruzar el puente", en: "I want to cross the bridge" }, accept: ["cross", "go across"], hint: "A1 taught el puente and la acera; this is how you get from one to the other." },
        { id: "es-u23l3-laderecha", type: "vocab", front: "la derecha", reading: "laderecha", meaning: "the right", example: { jp: "La farmacia está a la derecha.", en: "The pharmacy is on the right." }, drill: { jp: "La farmacia está a la derecha", en: "The pharmacy is on the right" }, accept: ["right", "right-hand side"], hint: "Always with a: a la derecha. Careful — derecho, without the a, means straight on." },
        { id: "es-u23l3-laizquierda", type: "vocab", front: "la izquierda", reading: "laizquierda", meaning: "the left", example: { jp: "El banco está a la izquierda del mercado.", en: "The bank is to the left of the market." }, drill: { jp: "El banco está a la izquierda", en: "The bank is on the left" }, accept: ["left", "left-hand side"], hint: "One of the very few Spanish words that is not Latin — it came from Basque." },
        { id: "es-u23l3-recto", type: "vocab", front: "recto", reading: "recto", meaning: "straight on", example: { jp: "Sigue recto y está a la derecha.", en: "Go straight on and it's on the right." }, drill: { jp: "El camino es recto", en: "The way is straight" }, accept: ["straight", "straight ahead"], hint: "todo recto is \"straight ahead\" with emphasis — the answer you will hear most often." },
      ],
    },
    // Lesson 4: when it goes wrong
    {
      id: "es-u23l4",
      unit: 23,
      lesson: 4,
      title: "When it goes wrong",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle a trip that is not going to plan — perder el tren, olvidar el pasaporte, estar perdido, pedir ayuda.",
      items: [
        { id: "es-u23l4-perder", type: "vocab", front: "perder", reading: "perder", meaning: "to miss", example: { jp: "No quiero perder el tren.", en: "I don't want to miss the train." }, drill: { jp: "No quiero perder el tren", en: "I don't want to miss the train" }, accept: ["to lose", "miss (a train)"], hint: "One verb for both losing a thing and missing a train — perder el billete, perder el avión." },
        { id: "es-u23l4-olvidar", type: "vocab", front: "olvidar", reading: "olvidar", meaning: "to forget", example: { jp: "No olvides el pasaporte.", en: "Don't forget your passport." }, drill: { jp: "No quiero olvidar el pasaporte", en: "I don't want to forget the passport" }, accept: ["forget"], hint: "Natives more often say se me olvidó — literally \"it forgot itself to me\", which conveniently removes the blame." },
        { id: "es-u23l4-perdido", type: "vocab", front: "perdido", reading: "perdido", meaning: "lost", example: { jp: "Estoy perdido, ¿dónde está la estación?", en: "I'm lost, where's the station?" }, drill: { jp: "Estoy perdido en la ciudad", en: "I'm lost in the city" }, accept: ["missing", "gone"], hint: "With estar, because being lost is a state — the same rule as the feelings in u22." },
        { id: "es-u23l4-laayuda", type: "vocab", front: "la ayuda", reading: "laayuda", meaning: "help", example: { jp: "Necesito ayuda con mi equipaje.", en: "I need help with my luggage." }, drill: { jp: "La ayuda de mi amigo es importante", en: "My friend's help is important" }, accept: ["the help", "assistance"], hint: "The noun from ayudar, which A1 taught. ¡Ayuda! shouted on its own is the emergency call." },
        { id: "es-u23l4-pedir", type: "vocab", front: "pedir", reading: "pedir", meaning: "to ask for", example: { jp: "Voy a pedir ayuda en la oficina.", en: "I'm going to ask for help at the office." }, drill: { jp: "Quiero pedir un café", en: "I want to order a coffee" }, accept: ["request", "order (food)"], hint: "pedir asks FOR a thing; preguntar asks a question. English blurs them, Spanish never does." },
        { id: "es-u23l4-elseguro", type: "vocab", front: "el seguro", reading: "elseguro", meaning: "insurance", example: { jp: "El seguro del viaje no es caro.", en: "The travel insurance isn't expensive." }, drill: { jp: "El seguro del coche es caro", en: "The car insurance is expensive" }, accept: ["the insurance", "safety"], hint: "As an adjective seguro means safe or sure: estoy seguro, I'm sure." },
      ],
    },
  ],
};
