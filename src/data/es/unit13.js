// ES Unit 13 — Verbos y preposiciones ("Verbs and prepositions") — A1 GRAMMAR (slot: grammar-2)
// Strand C, unit 2 of 3 — ja's "verbs & particles" step. Spanish's equivalent of
// Japanese particles is its preposition set, so Lesson 3 is the particle lesson.
// Verbs are headworded in the INFINITIVE (the dictionary form), exactly as ja
// headwords the ～ます form, and the conjugated forms live in the examples + hints.
//
// DELIBERATE SHAPE DEVIATION: Lesson 3 carries 8 cards, not 6, so the unit is 26
// rather than the blueprint's 24. al and del are not extra vocabulary — they are a
// and de fused with the article, and Spanish never writes them apart, so splitting
// the pair across units would teach half a rule. 8 is inside the 5–8 band the lint
// enforces; every other lesson in this block is 6.
// Conventions and the assumed block 1–2 vocabulary: see es/unit12.js.
//   FREE: María, Madrid | música
//   (Only proper names and transparent cognates, per the checker's contract.
//   Conjugated forms of a verb this block teaches — voy, puedo, cuesta — are
//   deliberately NOT listed: they are the headword convention, and declaring
//   them free would hide a genuinely untaught form later.)
export const ES_UNIT13 = {
  id: "es-u13",
  lang: "es",
  title: "Verbos y preposiciones",
  order: 13,
  stage: "a1",
  lessons: [
    {
      id: "es-u13l1",
      unit: 13,
      lesson: 1,
      title: "Verbos en -ar",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the biggest verb family: hablo español, trabajo en la ciudad, compro pan.",
      items: [
        { id: "es-u13l1-hablar", type: "vocab", front: "hablar", reading: "hablar", meaning: "to speak", example: { jp: "Yo hablo español.", en: "I speak Spanish." }, drill: { jp: "Quiero hablar español", en: "I want to speak Spanish" }, accept: ["speak", "talk", "to talk"], hint: "Most Spanish verbs end in -ar. Swap the -ar for the ending you need: yo hablo, tú hablas, él habla, nosotros hablamos." },
        { id: "es-u13l1-trabajar", type: "vocab", front: "trabajar", reading: "trabajar", meaning: "to work", example: { jp: "María trabaja en la escuela.", en: "María works at the school." }, drill: { jp: "Quiero trabajar en Madrid", en: "I want to work in Madrid" }, accept: ["work", "works"] },
        { id: "es-u13l1-estudiar", type: "vocab", front: "estudiar", reading: "estudiar", meaning: "to study", example: { jp: "Estudio español en casa.", en: "I study Spanish at home." }, drill: { jp: "Quiero estudiar en la biblioteca", en: "I want to study in the library" }, accept: ["study", "studies"] },
        { id: "es-u13l1-escuchar", type: "vocab", front: "escuchar", reading: "escuchar", meaning: "to listen", example: { jp: "Escucho música en casa.", en: "I listen to music at home." }, drill: { jp: "Quiero escuchar la lluvia", en: "I want to listen to the rain" }, accept: ["listen", "listen to", "hear"] },
        { id: "es-u13l1-comprar", type: "vocab", front: "comprar", reading: "comprar", meaning: "to buy", example: { jp: "Compro pan en la tienda.", en: "I buy bread at the shop." }, drill: { jp: "Quiero comprar pan en el mercado", en: "I want to buy bread at the market" }, accept: ["buy", "buys", "purchase"] },
        { id: "es-u13l1-necesitar", type: "vocab", front: "necesitar", reading: "necesitar", meaning: "to need", example: { jp: "Necesito agua.", en: "I need water." }, drill: { jp: "Necesitar medicina es normal", en: "Needing medicine is normal" }, accept: ["need", "needs"] },
      ],
    },
    {
      id: "es-u13l2",
      unit: 13,
      lesson: 2,
      title: "Verbos en -er y -ir",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the other two verb families: vivo en Madrid, aprendo español, la tienda abre hoy.",
      items: [
        { id: "es-u13l2-vivir", type: "vocab", front: "vivir", reading: "vivir", meaning: "to live", example: { jp: "Vivo en Madrid.", en: "I live in Madrid." }, drill: { jp: "Quiero vivir en España", en: "I want to live in Spain" }, accept: ["live", "lives"], hint: "-ir verbs: yo vivo, tú vives, él vive, nosotros vivimos. Almost the same endings as -er." },
        { id: "es-u13l2-leer", type: "vocab", front: "leer", reading: "leer", meaning: "to read", example: { jp: "María lee mucho.", en: "María reads a lot." }, drill: { jp: "Quiero leer este libro", en: "I want to read this book" }, accept: ["read", "reads"] },
        { id: "es-u13l2-escribir", type: "vocab", front: "escribir", reading: "escribir", meaning: "to write", example: { jp: "María escribe muy bien.", en: "María writes very well." }, drill: { jp: "Quiero escribir mi nombre", en: "I want to write my name" }, accept: ["write", "writes"] },
        { id: "es-u13l2-aprender", type: "vocab", front: "aprender", reading: "aprender", meaning: "to learn", example: { jp: "Aprendo español.", en: "I'm learning Spanish." }, drill: { jp: "Quiero aprender español", en: "I want to learn Spanish" }, accept: ["learn", "learns"], hint: "-er verbs: yo aprendo, tú aprendes, él aprende, nosotros aprendemos." },
        { id: "es-u13l2-abrir", type: "vocab", front: "abrir", reading: "abrir", meaning: "to open", example: { jp: "La tienda abre hoy.", en: "The shop opens today." }, drill: { jp: "Quiero abrir la ventana", en: "I want to open the window" }, accept: ["open", "opens"] },
        { id: "es-u13l2-correr", type: "vocab", front: "correr", reading: "correr", meaning: "to run", example: { jp: "Corro en el parque.", en: "I run in the park." }, drill: { jp: "Quiero correr en el parque", en: "I want to run in the park" }, accept: ["run", "runs"] },
      ],
    },
    {
      id: "es-u13l3",
      unit: 13,
      lesson: 3,
      title: "Preposiciones",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Link words with the little words that carry the meaning: sin, para, por — and the two that squash together, al and del.",
      items: [
        { id: "es-u13l3-a", type: "vocab", front: "a", reading: "a", meaning: "to", example: { jp: "Escribo a María.", en: "I'm writing to María." }, drill: { jp: "Voy a la plaza", en: "I'm going to the square" }, accept: ["at"], hint: "a marks the direction or the target — and it also goes before a PERSON who receives the action: escribo a María." },
        { id: "es-u13l3-al", type: "vocab", front: "al", reading: "al", meaning: "to the", example: { jp: "Escucho al médico.", en: "I listen to the doctor." }, drill: { jp: "Voy al mercado", en: "I'm going to the market" }, accept: ["to the (masculine)"], hint: "a + el is never written out — the two always squash into al. But a + la stays a la." },
        { id: "es-u13l3-del", type: "vocab", front: "del", reading: "del", meaning: "of the", example: { jp: "El médico del hospital es muy bueno.", en: "The hospital's doctor is very good." }, drill: { jp: "La puerta del hotel", en: "The door of the hotel" }, accept: ["from the", "of the (masculine)"], hint: "Same squash as al: de + el = del. de + la stays de la." },
        { id: "es-u13l3-sin", type: "vocab", front: "sin", reading: "sin", meaning: "without", example: { jp: "Un café sin leche, por favor.", en: "A coffee without milk, please." }, drill: { jp: "Un café sin leche", en: "A coffee without milk" }, accept: ["with no"] },
        { id: "es-u13l3-para", type: "vocab", front: "para", reading: "para", meaning: "for", example: { jp: "El pan es para María.", en: "The bread is for María." }, drill: { jp: "La medicina es para mi madre", en: "The medicine is for my mother" }, accept: ["in order to", "to"], hint: "para = who or what something is FOR, or the goal: para María, para aprender." },
        { id: "es-u13l3-por", type: "vocab", front: "por", reading: "por", meaning: "for (in exchange for)", example: { jp: "Gracias por el café.", en: "Thanks for the coffee." }, drill: { jp: "Gracias por la fruta", en: "Thanks for the fruit" }, accept: ["by", "through", "because of"], hint: "The hardest pair in A1: por looks BACK at a cause or an exchange (gracias por el café), para looks FORWARD to a purpose (para María)." },
        { id: "es-u13l3-entre", type: "vocab", front: "entre", reading: "entre", meaning: "between / among", example: { jp: "Mi casa está entre el mercado y la escuela.", en: "My house is between the market and the school." }, drill: { jp: "Entre la plaza y el cine", en: "Between the square and the cinema" }, accept: ["between", "among", "amongst"], hint: "Two things (entre A y B) or a group (entre amigos). Unlike English it takes yo and tú, not mí and ti: entre tú y yo." },
      ],
    },
    {
      id: "es-u13l4",
      unit: 13,
      lesson: 4,
      title: "Verbos irregulares",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the six verbs Spanish leans on hardest, all irregular: ir, tener, hacer, querer, poder, ver.",
      items: [
        { id: "es-u13l4-ir", type: "vocab", front: "ir", reading: "ir", meaning: "to go", example: { jp: "Voy a la ciudad con María.", en: "I'm going to the city with María." }, drill: { jp: "Quiero ir al parque", en: "I want to go to the park" }, accept: ["go", "goes"], hint: "Nothing about ir looks like ir: voy, vas, va, vamos, van. Learn them as words, not as endings." },
        { id: "es-u13l4-tener", type: "vocab", front: "tener", reading: "tener", meaning: "to have", example: { jp: "Tengo dos hermanos.", en: "I have two brothers." }, drill: { jp: "Tener hambre es normal", en: "Being hungry is normal" }, accept: ["have", "has"], hint: "tengo, tienes, tiene, tenemos, tienen. Spanish also uses tener where English uses \"be\": tengo frío = I'm cold." },
        { id: "es-u13l4-hacer", type: "vocab", front: "hacer", reading: "hacer", meaning: "to do", example: { jp: "Hago la comida hoy.", en: "I'm making the food today." }, drill: { jp: "Quiero hacer un café", en: "I want to make a coffee" }, accept: ["make", "to make", "does"], hint: "hago, haces, hace. It covers both \"do\" and \"make\" — and the weather: hace calor." },
        { id: "es-u13l4-querer", type: "vocab", front: "querer", reading: "querer", meaning: "to want", example: { jp: "Quiero un café, por favor.", en: "I'd like a coffee, please." }, drill: { jp: "Querer es poder", en: "To want is to be able" }, accept: ["want", "wants", "to love"], hint: "quiero, quieres, quiere. quiero + a noun = I want it; quiero + a plain verb = I want to do it: quiero comer." },
        { id: "es-u13l4-poder", type: "vocab", front: "poder", reading: "poder", meaning: "to be able to", example: { jp: "No puedo trabajar hoy.", en: "I can't work today." }, drill: { jp: "Poder hablar español es fantástico", en: "Being able to speak Spanish is fantastic" }, accept: ["can", "may", "to be able"], hint: "puedo, puedes, puede — always followed by another verb in its plain form: puedo comer, puedes hablar." },
        { id: "es-u13l4-ver", type: "vocab", front: "ver", reading: "ver", meaning: "to see", example: { jp: "Veo a María en la calle.", en: "I see María on the street." }, drill: { jp: "Quiero ver a mi familia", en: "I want to see my family" }, accept: ["see", "sees", "to watch"], hint: "veo, ves, ve. Note the a before a person: veo a María, never veo María." },
        { id: "es-u13l4-venir", type: "vocab", front: "venir", reading: "venir", meaning: "to come", example: { jp: "¿Vienes a mi casa esta tarde?", en: "Are you coming to my house this afternoon?" }, drill: { jp: "Quiero venir a España", en: "I want to come to Spain" }, accept: ["to come", "to come along", "to come over"], hint: "Irregular like tener in this lesson: vengo, vienes, viene, venimos, vienen. Ir goes away from you; venir comes toward you." },
      ],
    },
  ],
};
