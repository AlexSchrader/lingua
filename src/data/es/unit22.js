// ES Unit 22 — Los sentimientos (slot: feelings) — A2
// ─────────────────────────────────────────────────────────────────────────────
// A1 gives the learner four states and all of them are physical: tengo hambre,
// tengo sed, tengo frío, tengo calor, plus cansado and enfermo. There is no way
// to say you are happy, worried, or in a bad mood — which is most of what people
// actually report about themselves.
//
// So this unit is the emotional vocabulary A1 has no room for, and the grammar
// that carries it: emotions take ESTAR, not ser, because they are states rather
// than traits. estoy contento is how you feel today; soy contento would claim it
// is your character. A1 taught estar (u12) and the ser/estar contrast was
// deliberately left closed there; this is where it starts paying off, so every
// adjective here is shown with estar and the hints say why.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT22 = {
  id: "es-u22",
  lang: "es",
  title: "Los sentimientos",
  order: 22,
  stage: "a2",
  lessons: [
    // Lesson 1: the good ones
    {
      id: "es-u22l1",
      unit: 22,
      lesson: 1,
      title: "Feeling good",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how you feel when things are going well — estoy contento, feliz, tranquilo — and why it is estar and not ser.",
      items: [
        { id: "es-u22l1-contento", type: "vocab", front: "contento", reading: "contento", meaning: "happy", example: { jp: "Estoy contento con mi trabajo.", en: "I'm happy with my job." }, accept: ["pleased", "glad", "content"], hint: "Always with estar: estoy contento is how you are today. Soy contento would claim it is your permanent character, and no native says it." },
        { id: "es-u22l1-feliz", type: "vocab", front: "feliz", reading: "feliz", meaning: "happy", example: { jp: "Mi hermana está muy feliz hoy.", en: "My sister is very happy today." }, accept: ["joyful", "glad"], hint: "Deeper and more lasting than contento — feliz is happiness, contento is being pleased. One form for both genders: feliz." },
        { id: "es-u22l1-tranquilo", type: "vocab", front: "tranquilo", reading: "tranquilo", meaning: "calm", example: { jp: "Estoy tranquilo, no hay problema.", en: "I'm calm, there's no problem." }, accept: ["relaxed", "quiet", "peaceful"], hint: "Also said to someone else as reassurance — ¡tranquilo! means \"relax, it's fine\"." },
        { id: "es-u22l1-laalegria", type: "vocab", front: "la alegría", reading: "laalegria", meaning: "joy", example: { jp: "La alegría de mi madre es grande.", en: "My mother's joy is great." }, accept: ["the joy", "happiness", "cheer"], hint: "The noun behind alegre, cheerful. Qué alegría! is what you say at good news." },
        { id: "es-u22l1-sentirse", type: "vocab", front: "sentirse", reading: "sentirse", meaning: "to feel", example: { jp: "Me siento bien hoy.", en: "I feel well today." }, accept: ["feel", "to feel yourself"], hint: "me siento bien / mal — the verb that carries every state in this unit. Careful: me siento is also \"I sit down\", from sentarse in u21." },
        { id: "es-u22l1-elanimo", type: "vocab", front: "el ánimo", reading: "elanimo", meaning: "mood", example: { jp: "Hoy tengo el ánimo bueno.", en: "I'm in a good mood today." }, accept: ["the mood", "spirits", "cheer"], hint: "¡Ánimo! on its own is \"cheer up\" or \"you can do it\" — the thing you say to someone struggling." },
      ],
    },
    // Lesson 2: the difficult ones
    {
      id: "es-u22l2",
      unit: 22,
      lesson: 2,
      title: "Feeling bad",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say when something is wrong — estoy triste, preocupado, enfadado, nervioso — instead of only estoy mal.",
      items: [
        { id: "es-u22l2-triste", type: "vocab", front: "triste", reading: "triste", meaning: "sad", example: { jp: "Estoy triste porque mi amigo no está.", en: "I'm sad because my friend isn't here." }, accept: ["unhappy", "sorrowful"], hint: "One form for both genders, like feliz: un hombre triste, una mujer triste." },
        { id: "es-u22l2-preocupado", type: "vocab", front: "preocupado", reading: "preocupado", meaning: "worried", example: { jp: "Mi padre está preocupado por el dinero.", en: "My father is worried about money." }, accept: ["concerned", "anxious"], hint: "Worried ABOUT something is preocupado POR — not de." },
        { id: "es-u22l2-enfadado", type: "vocab", front: "enfadado", reading: "enfadado", meaning: "angry", example: { jp: "Está enfadado con su hermano.", en: "He's angry with his brother." }, accept: ["cross", "annoyed", "mad"], hint: "Angry WITH a person is enfadado CON. Much of Latin America says enojado instead — both are understood everywhere." },
        { id: "es-u22l2-nervioso", type: "vocab", front: "nervioso", reading: "nervioso", meaning: "nervous", example: { jp: "Estoy nervioso antes del examen.", en: "I'm nervous before the exam." }, accept: ["anxious", "on edge", "jumpy"] },
        { id: "es-u22l2-elmiedo", type: "vocab", front: "el miedo", reading: "elmiedo", meaning: "fear", example: { jp: "Mi hermana tiene miedo de los perros.", en: "My sister is afraid of dogs." }, accept: ["the fear", "fright"], hint: "Spanish HAS fear rather than being afraid: tengo miedo, like tengo hambre. Afraid OF is miedo DE." },
        { id: "es-u22l2-aburrido", type: "vocab", front: "aburrido", reading: "aburrido", meaning: "bored", example: { jp: "Estoy aburrido en casa.", en: "I'm bored at home." }, accept: ["boring", "dull"], hint: "The one word where ser and estar change the meaning outright: estoy aburrido = I'm bored, soy aburrido = I'm boring." },
      ],
    },
    // Lesson 3: reacting, and the verbs of changing state
    {
      id: "es-u22l3",
      unit: 22,
      lesson: 3,
      title: "Reacting",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe a change of mood, not just a mood — me alegro, me preocupo, me enfado — and say you miss someone.",
      items: [
        { id: "es-u22l3-alegrarse", type: "vocab", front: "alegrarse", reading: "alegrarse", meaning: "to be glad", example: { jp: "Me alegro de ver a mi amiga.", en: "I'm glad to see my friend." }, accept: ["cheer up", "be happy about"], hint: "Me alegro de verte is the standard warm greeting when you run into someone." },
        { id: "es-u22l3-preocuparse", type: "vocab", front: "preocuparse", reading: "preocuparse", meaning: "to worry", example: { jp: "No te preocupes por eso.", en: "Don't worry about that." }, accept: ["get worried", "be concerned"], hint: "No te preocupes is one of the most useful sentences in the language — \"don't worry about it\"." },
        { id: "es-u22l3-enfadarse", type: "vocab", front: "enfadarse", reading: "enfadarse", meaning: "to get angry", example: { jp: "Mi jefe se enfada mucho.", en: "My boss gets angry a lot." }, accept: ["get cross", "get mad"], hint: "The verb is the CHANGE, the adjective is the state: me enfado (I get angry) then estoy enfadado (I am angry)." },
        { id: "es-u22l3-echardemenos", type: "vocab", front: "echar de menos", reading: "echardemenos", meaning: "to miss", example: { jp: "Echo de menos a mi familia.", en: "I miss my family." }, accept: ["miss someone", "long for"], hint: "Three words, one verb. Latin America says extrañar instead. Missing a PERSON takes a: echo de menos A mi madre." },
        { id: "es-u22l3-reirse", type: "vocab", front: "reírse", reading: "reirse", meaning: "to laugh", example: { jp: "Nos reímos mucho en la fiesta.", en: "We laughed a lot at the party." }, accept: ["laugh", "have a laugh"], hint: "Laughing AT something is reírse DE — and it usually means mocking, so be careful with it." },
        { id: "es-u22l3-llorar", type: "vocab", front: "llorar", reading: "llorar", meaning: "to cry", example: { jp: "El bebé llora por la noche.", en: "The baby cries at night." }, accept: ["weep", "cry"], hint: "Those ll's are the y sound you met in u1: YO-rar." },
      ],
    },
    // Lesson 4: strength of feeling
    {
      id: "es-u22l4",
      unit: 22,
      lesson: 4,
      title: "How much you mean it",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Grade a feeling instead of stating it flat — un poco, bastante, tan, sobre todo — and say what you feel like doing.",
      items: [
        { id: "es-u22l4-tan", type: "vocab", front: "tan", reading: "tan", meaning: "so", example: { jp: "Estoy tan cansado hoy.", en: "I'm so tired today." }, accept: ["such", "that (much)"], hint: "tan goes with adjectives, tanto with verbs and nouns: tan triste, but trabajo tanto." },
        { id: "es-u22l4-sobretodo", type: "vocab", front: "sobre todo", reading: "sobretodo", meaning: "especially", example: { jp: "Me gusta el verano, sobre todo el mar.", en: "I like summer, especially the sea." }, accept: ["above all", "mainly", "particularly"] },
        { id: "es-u22l4-elverano", type: "vocab", front: "el verano", reading: "elverano", meaning: "summer", example: { jp: "En verano estoy más contento.", en: "In summer I'm happier." }, accept: ["the summer", "summertime"], hint: "A1 taught the months but never the seasons. The others: la primavera, el otoño, el invierno." },
        { id: "es-u22l4-elmar", type: "vocab", front: "el mar", reading: "elmar", meaning: "sea", example: { jp: "El mar está tranquilo hoy.", en: "The sea is calm today." }, accept: ["the sea", "ocean"], hint: "Usually masculine, but sailors and poets say la mar — one of the few nouns that takes either." },
        { id: "es-u22l4-tenerganas", type: "vocab", front: "tener ganas", reading: "tenerganas", meaning: "to feel like", example: { jp: "Tengo ganas de ir al mar.", en: "I feel like going to the sea." }, accept: ["want to", "be up for", "fancy"], hint: "Another thing Spanish HAS rather than IS. Add de plus a verb: tengo ganas de dormir." },
        { id: "es-u22l4-daigual", type: "vocab", front: "da igual", reading: "daigual", meaning: "it doesn't matter", example: { jp: "¿Café o té? Da igual.", en: "Coffee or tea? It doesn't matter." }, accept: ["never mind", "either way", "whatever"], hint: "Literally \"it gives equal\". The everyday shrug — no pasa nada is its close cousin." },
      ],
    },
  ],
};
