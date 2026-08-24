// ES Unit 25 — La salud (slot: health-body) — A2
// ─────────────────────────────────────────────────────────────────────────────
// A1 gives the body (cabeza, cara, ojo, nariz, boca, brazo, mano, dedo, pie,
// pierna, espalda, cuerpo, pelo), the places (el hospital, la farmacia, el
// médico, la medicina), one verb of pain (me duele), and one adjective (enfermo).
// It cannot describe a symptom, book an appointment, read a prescription, or
// name an organ. So A2 turns "el hospital" into being ill and getting better:
// the symptoms you report, the visit to the médico, the organs A1 skipped, and
// the vocabulary of keeping well.
//   States of the body take ESTAR — estoy resfriado, estoy perdido (u23) — the
//   same rule the feelings unit (u22) established; the hints hold the line.
//   me/te/se are the FREE reflexive clitics declared in u21.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT25 = {
  id: "es-u25",
  lang: "es",
  title: "La salud",
  order: 25,
  stage: "a2",
  lessons: [
    // Lesson 1: what's wrong with you
    {
      id: "es-u25l1",
      unit: 25,
      lesson: 1,
      title: "Symptoms",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what's wrong — tengo dolor, tengo fiebre, tengo tos, estoy resfriado — instead of only estoy enfermo.",
      items: [
        { id: "es-u25l1-eldolor", type: "vocab", front: "el dolor", reading: "eldolor", meaning: "pain", example: { jp: "Tengo dolor de cabeza.", en: "I have a headache." }, accept: ["the pain", "ache"], hint: "The noun behind me duele (A1). Dolor de cabeza / de espalda — an ache OF a body part." },
        { id: "es-u25l1-lafiebre", type: "vocab", front: "la fiebre", reading: "lafiebre", meaning: "fever", example: { jp: "Tengo fiebre y estoy en la cama.", en: "I have a fever and I'm in bed." }, accept: ["the fever", "temperature"], hint: "Like hunger and thirst, Spanish HAS it: tener fiebre, tener tos." },
        { id: "es-u25l1-latos", type: "vocab", front: "la tos", reading: "latos", meaning: "cough", example: { jp: "Tengo tos por la noche.", en: "I have a cough at night." }, accept: ["the cough"], hint: "The verb is toser. La tos rhymes with dos — it doesn't sound English." },
        { id: "es-u25l1-elresfriado", type: "vocab", front: "el resfriado", reading: "elresfriado", meaning: "cold", example: { jp: "Tengo un resfriado y mucha tos.", en: "I have a cold and a bad cough." }, accept: ["a cold", "chill"], hint: "As an adjective it's a state with estar: estoy resfriado, I've got a cold." },
        { id: "es-u25l1-lagripe", type: "vocab", front: "la gripe", reading: "lagripe", meaning: "flu", example: { jp: "Estoy en casa con gripe.", en: "I'm at home with the flu." }, accept: ["the flu", "influenza"], hint: "Worse than a resfriado. La gripe knocks you into bed; a resfriado just runs your nose." },
        { id: "es-u25l1-marearse", type: "vocab", front: "marearse", reading: "marearse", meaning: "to feel dizzy", example: { jp: "Me mareo en el barco.", en: "I get dizzy on the boat." }, accept: ["get dizzy", "feel sick", "be seasick"], hint: "Straight from el mar (u22): what the sea does to you. Also plain dizziness on land." },
      ],
    },
    // Lesson 2: the visit to the doctor
    {
      id: "es-u25l2",
      unit: 25,
      lesson: 2,
      title: "At the doctor",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle a doctor's visit — pedir una cita, una receta, una pastilla — and say when you feel sano.",
      items: [
        { id: "es-u25l2-lacita", type: "vocab", front: "la cita", reading: "lacita", meaning: "appointment", example: { jp: "Tengo una cita con el médico a las cuatro.", en: "I have an appointment with the doctor at four." }, accept: ["the appointment", "date"], hint: "A formal appointment — and also a romantic date. Pedir cita is to make one." },
        { id: "es-u25l2-lareceta", type: "vocab", front: "la receta", reading: "lareceta", meaning: "prescription", example: { jp: "El médico me da una receta.", en: "The doctor gives me a prescription." }, accept: ["the prescription", "recipe"], hint: "The same word for a doctor's prescription and a cooking recipe — both are instructions to follow." },
        { id: "es-u25l2-lapastilla", type: "vocab", front: "la pastilla", reading: "lapastilla", meaning: "pill", example: { jp: "Necesito una pastilla para el dolor.", en: "I need a pill for the pain." }, accept: ["the pill", "tablet"], hint: "A small tablet. La medicina (A1) is the medicine in general; la pastilla is the one you swallow." },
        { id: "es-u25l2-lasangre", type: "vocab", front: "la sangre", reading: "lasangre", meaning: "blood", example: { jp: "La sangre es roja.", en: "Blood is red." }, accept: ["the blood"], hint: "Feminine, and a hard g as in gato: SAN-gre. An analysis of it is un análisis de sangre." },
        { id: "es-u25l2-sano", type: "vocab", front: "sano", reading: "sano", meaning: "healthy", example: { jp: "Como mucha fruta para estar sano.", en: "I eat a lot of fruit to be healthy." }, accept: ["well", "in good health", "fit"], hint: "Sano is a healthy person; saludable a healthy thing, like food. Estar sano is being well now; ser sano, being well by nature." },
        { id: "es-u25l2-curar", type: "vocab", front: "curar", reading: "curar", meaning: "to cure", example: { jp: "Esta medicina cura la gripe.", en: "This medicine cures the flu." }, accept: ["heal", "to treat"], hint: "Curarse, with -se, is to get better: ya me curo." },
      ],
    },
    // Lesson 3: the organs A1 left out
    {
      id: "es-u25l3",
      unit: 25,
      lesson: 3,
      title: "Inside the body",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the parts A1 skipped — el corazón, la garganta, el estómago, la piel, los dientes.",
      items: [
        { id: "es-u25l3-elcorazon", type: "vocab", front: "el corazón", reading: "elcorazon", meaning: "heart", example: { jp: "El corazón está a la izquierda.", en: "The heart is on the left." }, accept: ["the heart"], hint: "Also the term of affection — mi corazón, like English \"sweetheart\"." },
        { id: "es-u25l3-lagarganta", type: "vocab", front: "la garganta", reading: "lagarganta", meaning: "throat", example: { jp: "Me duele la garganta.", en: "My throat hurts." }, accept: ["the throat"], hint: "The classic winter complaint: me duele la garganta, with the article, not \"mi garganta\"." },
        { id: "es-u25l3-elestomago", type: "vocab", front: "el estómago", reading: "elestomago", meaning: "stomach", example: { jp: "Me duele el estómago después de comer.", en: "My stomach hurts after eating." }, accept: ["the stomach", "belly"], hint: "Stress on the first syllable: esTÓmago. Dolor de estómago is a stomach ache." },
        { id: "es-u25l3-lapiel", type: "vocab", front: "la piel", reading: "lapiel", meaning: "skin", example: { jp: "El sol es malo para la piel.", en: "The sun is bad for your skin." }, accept: ["the skin", "hide", "leather"], hint: "Feminine: LA piel. Also leather — un bolso de piel, a leather bag." },
        { id: "es-u25l3-elhueso", type: "vocab", front: "el hueso", reading: "elhueso", meaning: "bone", example: { jp: "El perro come un hueso en el jardín.", en: "The dog eats a bone in the garden." }, accept: ["the bone", "stone (of fruit)"], hint: "That silent h and the ue: WEH-so. Also the stone in the middle of a peach." },
        { id: "es-u25l3-eldiente", type: "vocab", front: "el diente", reading: "eldiente", meaning: "tooth", example: { jp: "Me lavo los dientes por la mañana.", en: "I brush my teeth in the morning." }, accept: ["the tooth"], hint: "Brushing them is lavarse los dientes (u21) — literally washing them. El dentista looks after them." },
      ],
    },
    // Lesson 4: keeping well
    {
      id: "es-u25l4",
      unit: 25,
      lesson: 4,
      title: "Staying healthy",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about keeping well — cuidarse, hacer ejercicio, ser fuerte, recuperarse de una gripe.",
      items: [
        { id: "es-u25l4-cuidarse", type: "vocab", front: "cuidarse", reading: "cuidarse", meaning: "to take care of yourself", example: { jp: "Me cuido mucho en el trabajo.", en: "I take good care of myself at work." }, accept: ["look after yourself", "take care"], hint: "¡Cuídate! is how you sign off warmly — \"take care of yourself\". Cuidar someone else drops the -se." },
        { id: "es-u25l4-elejercicio", type: "vocab", front: "el ejercicio", reading: "elejercicio", meaning: "exercise", example: { jp: "Hago ejercicio todos los días.", en: "I exercise every day." }, accept: ["the exercise", "workout"], hint: "Hacer ejercicio is the verb — Spanish makes exercise, it doesn't \"exercise\". Also a practice exercise in a book." },
        { id: "es-u25l4-fuerte", type: "vocab", front: "fuerte", reading: "fuerte", meaning: "strong", example: { jp: "Mi hermano es muy fuerte.", en: "My brother is very strong." }, accept: ["powerful", "loud", "intense"], hint: "One form for both genders. Also loud — habla muy fuerte, he speaks very loudly." },
        { id: "es-u25l4-debil", type: "vocab", front: "débil", reading: "debil", meaning: "weak", example: { jp: "Estoy débil después de la gripe.", en: "I'm weak after the flu." }, accept: ["feeble", "faint"], hint: "The opposite of fuerte, and like it, one form for both genders." },
        { id: "es-u25l4-cansarse", type: "vocab", front: "cansarse", reading: "cansarse", meaning: "to get tired", example: { jp: "Me canso cuando corro mucho.", en: "I get tired when I run a lot." }, accept: ["tire", "wear yourself out"], hint: "The verb behind cansado (A1): the change, me canso, then the state, estoy cansado." },
        { id: "es-u25l4-recuperarse", type: "vocab", front: "recuperarse", reading: "recuperarse", meaning: "to recover", example: { jp: "Me recupero de la gripe poco a poco.", en: "I'm recovering from the flu bit by bit." }, accept: ["get better", "recover from"], hint: "Recuperarse DE an illness. Poco a poco — bit by bit — is how recovery is always described." },
      ],
    },
  ],
};
