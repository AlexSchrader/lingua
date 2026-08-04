// ES Unit 8 — Colors and weather (slot: colors-weather) — A1
// Block 2. Conventions: see the header of src/data/es/unit7.js (authoritative for
// all es units — front/reading split, nouns-with-article, the allowed function-word
// set, and why block 2 uses no verbs).
// Colors are taught in the masculine singular citation form (rojo, not roja); the
// -o/-a agreement is glossed in hints here and formally taught in unit 14.
// Weather is taught the way Spanish actually builds it — hacer for most of it
// (hace calor / hace frío / hace sol), estar for cloudy, and a bare verb for rain
// (llueve). Those are lexical phrases at A1, not conjugation practice.
export const ES_UNIT8 = {
  id: "es-u8",
  lang: "es",
  title: "Colors and weather",
  order: 8,
  stage: "a1",
  lessons: [
    {
      id: "es-u8l1",
      unit: 8,
      lesson: 1,
      title: "The first colors",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the six basic colors — rojo, azul, verde, amarillo, negro, blanco — and use one to pick out a thing.",
      items: [
        { id: "es-u8l1-rojo", type: "vocab", front: "rojo", reading: "rojo", meaning: "red", example: { jp: "El coche rojo está en la calle.", en: "The red car is in the street." }, accept: ["red colour", "red color"], hint: "Colors come AFTER the noun in Spanish: el coche rojo, never el rojo coche." },
        { id: "es-u8l1-azul", type: "vocab", front: "azul", reading: "azul", meaning: "blue", example: { jp: "El autobús azul está en la parada.", en: "The blue bus is at the stop." }, accept: ["blue colour", "blue color"], hint: "Ends in -l, not -o, so it doesn't change for gender: el coche azul, la calle azul." },
        { id: "es-u8l1-verde", type: "vocab", front: "verde", reading: "verde", meaning: "green", example: { jp: "El parque es muy verde.", en: "The park is very green." }, accept: ["green colour", "green color"], hint: "Same root as \"verdant\". Ends in -e, so it also never changes for gender." },
        { id: "es-u8l1-amarillo", type: "vocab", front: "amarillo", reading: "amarillo", meaning: "yellow", example: { jp: "Hay un taxi amarillo en la plaza.", en: "There's a yellow taxi in the square." }, accept: ["yellow colour", "yellow color"], hint: "The double l again sounds like y: a-ma-RI-yo." },
        { id: "es-u8l1-negro", type: "vocab", front: "negro", reading: "negro", meaning: "black", example: { jp: "El café es negro.", en: "The coffee is black." }, accept: ["black colour", "black color"] },
        { id: "es-u8l1-blanco", type: "vocab", front: "blanco", reading: "blanco", meaning: "white", example: { jp: "El museo blanco está en el centro.", en: "The white museum is in the centre." }, accept: ["white colour", "white color"], hint: "An -o color agrees with what it describes: el museo blanco, la iglesia blanca." },
      ],
    },
    {
      id: "es-u8l2",
      unit: 8,
      lesson: 2,
      title: "More colors",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask what colour something is and answer with gris, marrón, naranja, rosa or morado.",
      items: [
        { id: "es-u8l2-color", type: "vocab", front: "el color", reading: "elcolor", meaning: "colour", example: { jp: "¿De qué color es el autobús?", en: "What colour is the bus?" }, accept: ["color", "the colour", "the color"], hint: "The question is literally \"of what colour is it?\" — ¿De qué color es…?" },
        { id: "es-u8l2-gris", type: "vocab", front: "gris", reading: "gris", meaning: "grey", example: { jp: "El coche gris está en la calle.", en: "The grey car is in the street." }, accept: ["gray", "grey colour", "gray color"] },
        { id: "es-u8l2-marron", type: "vocab", front: "marrón", reading: "marron", meaning: "brown", example: { jp: "El banco marrón está en el parque.", en: "The brown bench is in the park." }, accept: ["brown colour", "brown color"], hint: "Double r, and the stress on the end: ma-RRÓN. Remember el banco is a bench as well as a bank." },
        { id: "es-u8l2-naranja", type: "vocab", front: "naranja", reading: "naranja", meaning: "orange", example: { jp: "La tienda naranja está en la calle Mayor.", en: "The orange shop is on Calle Mayor." }, accept: ["orange colour", "orange color"], hint: "It's the fruit and the colour, exactly like English — and as a colour it never changes: un coche naranja, una tienda naranja." },
        { id: "es-u8l2-rosa", type: "vocab", front: "rosa", reading: "rosa", meaning: "pink", example: { jp: "El hotel rosa está en la plaza.", en: "The pink hotel is in the square." }, accept: ["pink colour", "pink color"], hint: "The flower gives the colour its name, and like naranja it never changes form." },
        { id: "es-u8l2-morado", type: "vocab", front: "morado", reading: "morado", meaning: "purple", example: { jp: "El tren morado está en la estación.", en: "The purple train is at the station." }, accept: ["violet", "purple colour", "purple color"] },
      ],
    },
    {
      id: "es-u8l3",
      unit: 8,
      lesson: 3,
      title: "The sky",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what's overhead: el cielo, el sol, la nube, la lluvia, el viento.",
      items: [
        { id: "es-u8l3-cielo", type: "vocab", front: "el cielo", reading: "elcielo", meaning: "sky", example: { jp: "El cielo está azul.", en: "The sky is blue." }, accept: ["the sky"], hint: "Also \"heaven\" — same word, same root as \"celestial\"." },
        { id: "es-u8l3-sol", type: "vocab", front: "el sol", reading: "elsol", meaning: "sun", example: { jp: "El sol está en el cielo.", en: "The sun is in the sky." }, accept: ["the sun", "sunshine"], hint: "Spanish uses it for sunshine too: hace sol = it's sunny." },
        { id: "es-u8l3-nube", type: "vocab", front: "la nube", reading: "lanube", meaning: "cloud", example: { jp: "Hay una nube blanca en el cielo.", en: "There's a white cloud in the sky." }, accept: ["the cloud"], hint: "The root of \"nebula\" — and of nublado, cloudy, in the next lesson." },
        { id: "es-u8l3-lluvia", type: "vocab", front: "la lluvia", reading: "lalluvia", meaning: "rain", example: { jp: "Hay lluvia en Madrid.", en: "There's rain in Madrid." }, accept: ["the rain", "rainfall"], hint: "Double l again: YU-via." },
        { id: "es-u8l3-viento", type: "vocab", front: "el viento", reading: "elviento", meaning: "wind", example: { jp: "En el pueblo hay viento.", en: "It's windy in the town." }, accept: ["the wind"], hint: "Same root as \"ventilate\"." },
      ],
    },
    {
      id: "es-u8l4",
      unit: 8,
      lesson: 4,
      title: "What the weather is doing",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask and answer what it's like out: el tiempo, hace calor, hace frío, hace sol, está nublado, llueve, la nieve.",
      items: [
        { id: "es-u8l4-tiempo", type: "vocab", front: "el tiempo", reading: "eltiempo", meaning: "weather", example: { jp: "¿Qué tiempo hace?", en: "What's the weather like?" }, accept: ["the weather"], hint: "El tiempo means both the weather and time — this unit wants the weather. ¿Qué tiempo hace? is the standard \"what's it like out?\" — and the three cards after this one are how you answer it." },
        { id: "es-u8l4-hacecalor", type: "vocab", front: "hace calor", reading: "hacecalor", meaning: "it's hot", example: { jp: "En Sevilla hace calor.", en: "It's hot in Seville." }, accept: ["it is hot", "hot weather", "the weather is hot"], hint: "Spanish \"makes\" weather: hace calor, hace frío, hace sol. Learn the whole phrase, not the verb." },
        { id: "es-u8l4-hacefrio", type: "vocab", front: "hace frío", reading: "hacefrio", meaning: "it's cold", example: { jp: "Hace frío en el pueblo.", en: "It's cold in the town." }, accept: ["it is cold", "cold weather", "the weather is cold"] },
        { id: "es-u8l4-hacesol", type: "vocab", front: "hace sol", reading: "hacesol", meaning: "it's sunny", example: { jp: "Hace sol en la plaza.", en: "It's sunny in the square." }, accept: ["it is sunny", "sunny", "the sun is out"], hint: "Built straight from el sol — Spanish says the weather \"makes sun\"." },
        { id: "es-u8l4-estanublado", type: "vocab", front: "está nublado", reading: "estanublado", meaning: "it's cloudy", example: { jp: "Está nublado en Madrid.", en: "It's cloudy in Madrid." }, accept: ["it is cloudy", "cloudy", "overcast"], hint: "Cloudy is the odd one out — it uses estar, not hacer. From la nube." },
        { id: "es-u8l4-llueve", type: "vocab", front: "llueve", reading: "llueve", meaning: "it's raining", example: { jp: "Llueve en Barcelona.", en: "It's raining in Barcelona." }, accept: ["it rains", "it is raining", "raining"], hint: "One word is the whole sentence — no \"it\" needed. Llueve is to la lluvia what \"rains\" is to \"rain\"." },
        { id: "es-u8l4-nieve", type: "vocab", front: "la nieve", reading: "lanieve", meaning: "snow", example: { jp: "Hay nieve en el pueblo.", en: "There's snow in the town." }, accept: ["the snow"], hint: "And nieva means it's snowing — the same pair as lluvia / llueve." },
      ],
    },
  ],
};
