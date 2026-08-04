// ES Unit 14 — El pasado y la concordancia ("The past and agreement") — A1 GRAMMAR (slot: grammar-3)
// Strand C, unit 3 of 3 — ja's "past tense & adjective agreement" step. Two halves:
// the preterite (the everyday Spanish past) in Lessons 1–2, then the agreement
// machinery — possessives and the -o/-a pairs — in Lessons 3–4.
//
// SCOPE DECISION: A1 gets the PRETERITE only (hablé, habló). The imperfect
// (hablaba) is a genuinely separate system and belongs at A2; teaching half of the
// preterite/imperfect contrast is worse than teaching one tense properly. Only
// yo and él/ella forms are taught, which is what an A1 learner actually produces.
// Conventions and the assumed block 1–2 vocabulary: see es/unit12.js.
export const ES_UNIT14 = {
  id: "es-u14",
  lang: "es",
  title: "El pasado y la concordancia",
  order: 14,
  stage: "a1",
  lessons: [
    {
      id: "es-u14l1",
      unit: 14,
      lesson: 1,
      title: "Ayer — el pasado (yo)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you did yesterday: ayer hablé con Pablo, comí en casa, fui a la escuela.",
      items: [
        { id: "es-u14l1-hable", type: "vocab", front: "hablé", reading: "hable", meaning: "I spoke", example: { jp: "Ayer hablé con Pablo.", en: "Yesterday I spoke with Pablo." }, accept: ["i talked", "i did speak"], hint: "The past \"I\" of an -ar verb is a stressed -é on the end: hablar -> hablé, trabajar -> trabajé, comprar -> compré." },
        { id: "es-u14l1-trabaje", type: "vocab", front: "trabajé", reading: "trabaje", meaning: "I worked", example: { jp: "Trabajé en la tienda.", en: "I worked at the shop." }, accept: ["i did work"] },
        { id: "es-u14l1-comi", type: "vocab", front: "comí", reading: "comi", meaning: "I ate", example: { jp: "Comí pan en casa.", en: "I ate bread at home." }, accept: ["i did eat"], hint: "-er and -ir verbs take -í instead: comer -> comí, escribir -> escribí, vivir -> viví." },
        { id: "es-u14l1-escribi", type: "vocab", front: "escribí", reading: "escribi", meaning: "I wrote", example: { jp: "Escribí a María ayer.", en: "I wrote to María yesterday." }, accept: ["i did write"] },
        { id: "es-u14l1-fui", type: "vocab", front: "fui", reading: "fui", meaning: "I went", example: { jp: "Fui a la escuela ayer.", en: "I went to school yesterday." }, accept: ["i was"], hint: "fui is the past of BOTH ir and ser — \"I went\" and \"I was\" are the same word. Context decides, and it nearly always means \"went\"." },
        { id: "es-u14l1-tuve", type: "vocab", front: "tuve", reading: "tuve", meaning: "I had", example: { jp: "Tuve un problema ayer.", en: "I had a problem yesterday." }, accept: ["i did have"] },
      ],
    },
    {
      id: "es-u14l2",
      unit: 14,
      lesson: 2,
      title: "Él habló — el pasado (él y ella)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what somebody else did: María habló con el médico, Pablo fue a la ciudad.",
      items: [
        { id: "es-u14l2-hablo", type: "vocab", front: "habló", reading: "hablo", meaning: "he spoke", example: { jp: "María habló con el médico.", en: "María spoke with the doctor." }, accept: ["she spoke", "he talked", "she talked"], hint: "The past \"he/she\" of an -ar verb is a stressed -ó. Watch the accent: hablo = I speak, habló = he spoke. It is the only thing telling them apart." },
        { id: "es-u14l2-trabajo", type: "vocab", front: "trabajó", reading: "trabajo", meaning: "he worked", example: { jp: "Pablo trabajó mucho ayer.", en: "Pablo worked a lot yesterday." }, accept: ["she worked"] },
        { id: "es-u14l2-comio", type: "vocab", front: "comió", reading: "comio", meaning: "he ate", example: { jp: "Ella comió en el parque.", en: "She ate in the park." }, accept: ["she ate"], hint: "-er and -ir verbs take -ió: comió, escribió, vivió." },
        { id: "es-u14l2-escribio", type: "vocab", front: "escribió", reading: "escribio", meaning: "he wrote", example: { jp: "Él escribió a Pablo ayer.", en: "He wrote to Pablo yesterday." }, accept: ["she wrote"] },
        { id: "es-u14l2-fue", type: "vocab", front: "fue", reading: "fue", meaning: "he went", example: { jp: "Ella fue a la ciudad el lunes.", en: "She went to the city on Monday." }, accept: ["she went", "he was", "it was"], hint: "Like fui, it doubles as \"was\": fue muy bueno = it was very good." },
        { id: "es-u14l2-estuvo", type: "vocab", front: "estuvo", reading: "estuvo", meaning: "he was (somewhere)", example: { jp: "Pablo estuvo en casa toda la mañana.", en: "Pablo was at home all morning." }, accept: ["she was", "it was"], hint: "The past of está — where somebody was, not what they are." },
      ],
    },
    {
      id: "es-u14l3",
      unit: 14,
      lesson: 3,
      title: "Mi, tu, su",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say whose something is: mi casa, tu hermano, su madre — and their plurals mis, tus, sus.",
      items: [
        { id: "es-u14l3-mi", type: "vocab", front: "mi", reading: "mi", meaning: "my", example: { jp: "Mi madre está en casa.", en: "My mother is at home." }, accept: ["mine"], hint: "mi never changes for gender — mi padre AND mi madre. Only the plural changes: mis." },
        { id: "es-u14l3-tu", type: "vocab", front: "tu", reading: "tu", meaning: "your", example: { jp: "¿Dónde está tu hermano?", en: "Where's your brother?" }, accept: ["yours"], hint: "tu without an accent = your. tú with one = you (Unit 12). The accent is doing all the work." },
        { id: "es-u14l3-su", type: "vocab", front: "su", reading: "su", meaning: "his", example: { jp: "Su casa es muy grande.", en: "His house is very big." }, accept: ["her", "their", "your (polite)"], hint: "su is the busiest word here: his, her, their, and polite your — all one word. The sentence around it decides." },
        { id: "es-u14l3-mis", type: "vocab", front: "mis", reading: "mis", meaning: "my (with more than one)", example: { jp: "Mis amigos son muy buenos.", en: "My friends are very good." }, accept: ["my"], hint: "The possessive agrees with the THING, not the owner: mi amigo -> mis amigos." },
        { id: "es-u14l3-tus", type: "vocab", front: "tus", reading: "tus", meaning: "your (with more than one)", example: { jp: "¿Y tus hermanos?", en: "And your brothers?" }, accept: ["your"] },
        { id: "es-u14l3-sus", type: "vocab", front: "sus", reading: "sus", meaning: "his / her (with more than one)", example: { jp: "Sus hijos están en la escuela.", en: "Her children are at school." }, accept: ["their", "her", "his"] },
      ],
    },
    {
      id: "es-u14l4",
      unit: 14,
      lesson: 4,
      title: "Otro, otra — la concordancia",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Make a describing word match the noun it sits with: otro café but otra casa, todo el pan but toda la comida.",
      items: [
        { id: "es-u14l4-otro", type: "vocab", front: "otro", reading: "otro", meaning: "another (masculine)", example: { jp: "Quiero otro café, por favor.", en: "I'd like another coffee, please." }, accept: ["other", "another"], hint: "This is the whole agreement rule in one word: -o with a masculine noun, -a with a feminine one. Note there is no un before otro — \"otro café\", never \"un otro café\"." },
        { id: "es-u14l4-otra", type: "vocab", front: "otra", reading: "otra", meaning: "another (feminine)", example: { jp: "Hay otra tienda en la calle.", en: "There's another shop on the street." }, accept: ["other", "another"] },
        { id: "es-u14l4-todo", type: "vocab", front: "todo", reading: "todo", meaning: "all (masculine)", example: { jp: "Todo el pan es para María.", en: "All the bread is for María." }, accept: ["every", "the whole", "everything"], hint: "todo goes BEFORE the article, not after: todo el pan, toda la comida." },
        { id: "es-u14l4-toda", type: "vocab", front: "toda", reading: "toda", meaning: "all (feminine)", example: { jp: "Toda la comida está en la casa.", en: "All the food is in the house." }, accept: ["every", "the whole"] },
        { id: "es-u14l4-mismo", type: "vocab", front: "mismo", reading: "mismo", meaning: "same (masculine)", example: { jp: "Es el mismo médico.", en: "It's the same doctor." }, accept: ["the same"] },
        { id: "es-u14l4-misma", type: "vocab", front: "misma", reading: "misma", meaning: "same (feminine)", example: { jp: "Es la misma escuela.", en: "It's the same school." }, accept: ["the same"] },
      ],
    },
  ],
};
