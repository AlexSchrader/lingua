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
//   FREE: María, Pablo | problema
//   (Only proper names and transparent cognates, per the checker's contract.
//   Conjugated forms of a verb this block teaches — voy, puedo, cuesta — are
//   deliberately NOT listed: they are the headword convention, and declaring
//   them free would hide a genuinely untaught form later.)
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
        // `ayer` is taught HERE because this unit is its earliest user — seven of the
        // unit's examples lean on it and no earlier block claimed it, so under the
        // runbook's ownership rule the earliest user has to be the teacher.
        { id: "es-u14l1-ayer", type: "vocab", front: "ayer", reading: "ayer", meaning: "yesterday", example: { jp: "Ayer comí en casa.", en: "Yesterday I ate at home." }, drill: { jp: "Ayer comí en casa", en: "Yesterday I ate at home" }, accept: ["the day before"], hint: "The word that switches a sentence into the past: hoy hablo, ayer hablé. Spanish usually puts it right at the front." },
        { id: "es-u14l1-hable", type: "vocab", front: "hablé", reading: "hable", meaning: "I spoke", example: { jp: "Ayer hablé con Pablo.", en: "Yesterday I spoke with Pablo." }, drill: { jp: "Ayer hablé con mi madre", en: "Yesterday I spoke with my mother" }, accept: ["i talked", "i did speak"], hint: "The past \"I\" of an -ar verb is a stressed -é on the end: hablar -> hablé, trabajar -> trabajé, comprar -> compré." },
        { id: "es-u14l1-trabaje", type: "vocab", front: "trabajé", reading: "trabaje", meaning: "I worked", example: { jp: "Trabajé en la tienda.", en: "I worked at the shop." }, drill: { jp: "Ayer trabajé en el museo", en: "Yesterday I worked at the museum" }, accept: ["i did work"] },
        { id: "es-u14l1-comi", type: "vocab", front: "comí", reading: "comi", meaning: "I ate", example: { jp: "Comí pan en casa.", en: "I ate bread at home." }, drill: { jp: "Ayer comí con mi familia", en: "Yesterday I ate with my family" }, accept: ["i did eat"], hint: "-er and -ir verbs take -í instead: comer -> comí, escribir -> escribí, vivir -> viví." },
        { id: "es-u14l1-escribi", type: "vocab", front: "escribí", reading: "escribi", meaning: "I wrote", example: { jp: "Escribí a María ayer.", en: "I wrote to María yesterday." }, drill: { jp: "Ayer escribí mi nombre", en: "Yesterday I wrote my name" }, accept: ["i did write"] },
        { id: "es-u14l1-fui", type: "vocab", front: "fui", reading: "fui", meaning: "I went", example: { jp: "Fui a la escuela ayer.", en: "I went to school yesterday." }, drill: { jp: "Ayer fui al mercado", en: "Yesterday I went to the market" }, accept: ["i was"], hint: "fui is the past of BOTH ir and ser — \"I went\" and \"I was\" are the same word. Context decides, and it nearly always means \"went\"." },
        { id: "es-u14l1-tuve", type: "vocab", front: "tuve", reading: "tuve", meaning: "I had", example: { jp: "Tuve un problema ayer.", en: "I had a problem yesterday." }, drill: { jp: "Ayer tuve mucho trabajo", en: "Yesterday I had a lot of work" }, accept: ["i did have"] },
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
        { id: "es-u14l2-hablo", type: "vocab", front: "habló", reading: "hablo", meaning: "he spoke", example: { jp: "María habló con el médico.", en: "María spoke with the doctor." }, drill: { jp: "Mi padre habló con el médico", en: "My father spoke with the doctor" }, accept: ["she spoke", "he talked", "she talked"], hint: "The past \"he/she\" of an -ar verb is a stressed -ó. Watch the accent: hablo = I speak, habló = he spoke. It is the only thing telling them apart." },
        { id: "es-u14l2-trabajo", type: "vocab", front: "trabajó", reading: "trabajo", meaning: "he worked", example: { jp: "Pablo trabajó mucho ayer.", en: "Pablo worked a lot yesterday." }, drill: { jp: "Mi hermano trabajó en la tienda", en: "My brother worked in the shop" }, accept: ["she worked"] },
        { id: "es-u14l2-comio", type: "vocab", front: "comió", reading: "comio", meaning: "he ate", example: { jp: "Ella comió en el parque.", en: "She ate in the park." }, drill: { jp: "Mi hija comió una manzana", en: "My daughter ate an apple" }, accept: ["she ate"], hint: "-er and -ir verbs take -ió: comió, escribió, vivió." },
        { id: "es-u14l2-escribio", type: "vocab", front: "escribió", reading: "escribio", meaning: "he wrote", example: { jp: "Él escribió a Pablo ayer.", en: "He wrote to Pablo yesterday." }, drill: { jp: "Mi amigo escribió su nombre", en: "My friend wrote his name" }, accept: ["she wrote"] },
        { id: "es-u14l2-fue", type: "vocab", front: "fue", reading: "fue", meaning: "he went", example: { jp: "Ella fue a la ciudad el lunes.", en: "She went to the city on Monday." }, drill: { jp: "Mi tío fue a la ciudad", en: "My uncle went to the city" }, accept: ["she went", "he was", "it was"], hint: "Like fui, it doubles as \"was\": fue muy bueno = it was very good." },
        { id: "es-u14l2-estuvo", type: "vocab", front: "estuvo", reading: "estuvo", meaning: "he was (somewhere)", example: { jp: "Pablo estuvo en casa ayer.", en: "Pablo was at home yesterday." }, drill: { jp: "Mi madre estuvo en el hospital", en: "My mother was in the hospital" }, accept: ["she was", "it was"], hint: "The past of está — where somebody was, not what they are." },
      ],
    },
    {
      id: "es-u14l3",
      unit: 14,
      lesson: 3,
      title: "Tu, su, nuestro",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say whose something is beyond your own: tu hermano, su madre, nuestra casa — and the plurals tus, sus.",
      items: [
        { id: "es-u14l3-tu", type: "vocab", front: "tu", reading: "tu", meaning: "your", example: { jp: "¿Dónde está tu hermano?", en: "Where's your brother?" }, drill: { jp: "Tu casa es muy bonita", en: "Your house is very pretty" }, accept: ["yours"], hint: "tu without an accent = your. tú with one = you (Unit 12). The accent is doing all the work." },
        { id: "es-u14l3-su", type: "vocab", front: "su", reading: "su", meaning: "his", example: { jp: "Su casa es muy grande.", en: "His house is very big." }, drill: { jp: "Su padre es médico", en: "His father is a doctor" }, accept: ["her", "their", "your (polite)"], hint: "su is the busiest word here: his, her, their, and polite your — all one word. The sentence around it decides." },
        { id: "es-u14l3-tus", type: "vocab", front: "tus", reading: "tus", meaning: "your (with more than one)", example: { jp: "¿Y tus hermanos?", en: "And your brothers?" }, drill: { jp: "Tus amigos son de México", en: "Your friends are from Mexico" }, accept: ["your"], hint: "The possessive agrees with the THING owned, not the owner: tu hermano -> tus hermanos." },
        { id: "es-u14l3-nuestro", type: "vocab", front: "nuestro", reading: "nuestro", meaning: "our (masculine)", example: { jp: "Nuestro coche es pequeño.", en: "Our car is small." }, drill: { jp: "Nuestro coche es viejo", en: "Our car is old" }, accept: ["ours", "our"], hint: "The one possessive that DOES change for gender: nuestro piso, nuestra casa, nuestros amigos, nuestras manos. mi, tu and su never do." },
        { id: "es-u14l3-sus", type: "vocab", front: "sus", reading: "sus", meaning: "his / her (with more than one)", example: { jp: "Sus hijos están en la escuela.", en: "Her children are at school." }, drill: { jp: "Sus hijos están en la escuela", en: "Her children are at school" }, accept: ["their", "her", "his"] },
        { id: "es-u14l3-nuestra", type: "vocab", front: "nuestra", reading: "nuestra", meaning: "our (feminine)", example: { jp: "Nuestra casa está en el pueblo.", en: "Our house is in the town." }, drill: { jp: "Nuestra casa está cerca", en: "Our house is nearby" }, accept: ["ours", "our"], hint: "The other half of nuestro, and the proof of the rule above: nuestro coche, nuestra casa." },
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
        { id: "es-u14l4-otro", type: "vocab", front: "otro", reading: "otro", meaning: "another (masculine)", example: { jp: "Quiero otro café, por favor.", en: "I'd like another coffee, please." }, drill: { jp: "Quiero otro café", en: "I want another coffee" }, accept: ["other", "another"], hint: "This is the whole agreement rule in one word: -o with a masculine noun, -a with a feminine one. Note there is no un before otro — \"otro café\", never \"un otro café\"." },
        { id: "es-u14l4-otra", type: "vocab", front: "otra", reading: "otra", meaning: "another (feminine)", example: { jp: "Hay otra tienda en la calle.", en: "There's another shop on the street." }, drill: { jp: "Quiero otra manzana", en: "I want another apple" }, accept: ["other", "another"] },
        { id: "es-u14l4-todo", type: "vocab", front: "todo", reading: "todo", meaning: "all (masculine)", example: { jp: "Todo el pan es para María.", en: "All the bread is for María." }, drill: { jp: "Todo el pan es para hoy", en: "All the bread is for today" }, accept: ["every", "the whole", "everything"], hint: "todo goes BEFORE the article, not after: todo el pan, toda la comida." },
        { id: "es-u14l4-toda", type: "vocab", front: "toda", reading: "toda", meaning: "all (feminine)", example: { jp: "Toda la comida está en la casa.", en: "All the food is in the house." }, drill: { jp: "Toda la familia está aquí", en: "The whole family is here" }, accept: ["every", "the whole"] },
        { id: "es-u14l4-mismo", type: "vocab", front: "mismo", reading: "mismo", meaning: "same (masculine)", example: { jp: "Es el mismo médico.", en: "It's the same doctor." }, drill: { jp: "El mismo tren de ayer", en: "The same train as yesterday" }, accept: ["the same"] },
        { id: "es-u14l4-misma", type: "vocab", front: "misma", reading: "misma", meaning: "same (feminine)", example: { jp: "Es la misma escuela.", en: "It's the same school." }, drill: { jp: "La misma calle de ayer", en: "The same street as yesterday" }, accept: ["the same"] },
      ],
    },
  ],
};
