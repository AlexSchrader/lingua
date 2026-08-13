// ES Unit 19 — El día a día ("Day to day") — A1 COVERAGE (slot: coverage-5)
// Strand D, unit 5 of 6. The routine unit, and the one place A1 Spanish has to meet
// the REFLEXIVE verbs: you cannot describe a morning without me levanto / me ducho /
// me visto. They're headworded in the dictionary form that carries the -se
// (levantarse), with the me/te/se pattern taught in the hints and shown in every
// example — the same "grammar rides in the examples" modelling as the Strand C units.
// Conventions and the assumed block 1–2 vocabulary: see es/unit12.js.
export const ES_UNIT19 = {
  id: "es-u19",
  lang: "es",
  title: "El día a día",
  order: 19,
  stage: "a1",
  lessons: [
    {
      id: "es-u19l1",
      unit: 19,
      lesson: 1,
      title: "Por la mañana",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe your morning in order: me levanto, me ducho, me visto, desayuno.",
      items: [
        { id: "es-u19l1-levantarse", type: "vocab", front: "levantarse", reading: "levantarse", meaning: "to get up", example: { jp: "Me levanto a las siete.", en: "I get up at seven." }, accept: ["get up", "stand up", "rise"], hint: "The -se on the end means the action comes back to you. Swap it for me / te / se in front: me levanto, te levantas, se levanta." },
        { id: "es-u19l1-ducharse", type: "vocab", front: "ducharse", reading: "ducharse", meaning: "to have a shower", example: { jp: "Me ducho por la mañana.", en: "I shower in the morning." }, accept: ["shower", "take a shower", "to shower"] },
        { id: "es-u19l1-vestirse", type: "vocab", front: "vestirse", reading: "vestirse", meaning: "to get dressed", example: { jp: "Me visto en el dormitorio.", en: "I get dressed in the bedroom." }, accept: ["dress", "get dressed", "put clothes on"], hint: "Same family as el vestido, the dress — and the e becomes i when stressed: me visto." },
        { id: "es-u19l1-desayunar", type: "vocab", front: "desayunar", reading: "desayunar", meaning: "to have breakfast", example: { jp: "Desayuno pan y café.", en: "I have bread and coffee for breakfast." }, accept: ["eat breakfast", "have breakfast", "breakfast"], hint: "Not reflexive, and it takes the food straight after it: desayuno pan — literally \"I breakfast bread\"." },
        { id: "es-u19l1-cocinar", type: "vocab", front: "cocinar", reading: "cocinar", meaning: "to cook", example: { jp: "Cocino para mis amigos.", en: "I cook for my friends." }, accept: ["cook", "cooks", "make food"] },
        { id: "es-u19l1-limpiar", type: "vocab", front: "limpiar", reading: "limpiar", meaning: "to clean", example: { jp: "Limpio la cocina los sábados.", en: "I clean the kitchen on Saturdays." }, accept: ["clean", "tidy", "wipe"], hint: "los sábados with the plural article means \"on Saturdays\", every week — no word for \"on\" needed." },
      ],
    },
    {
      id: "es-u19l2",
      unit: 19,
      lesson: 2,
      title: "Por la noche",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe your evening: ceno, descanso en el sofá, apago la luz y me acuesto.",
      items: [
        { id: "es-u19l2-cenar", type: "vocab", front: "cenar", reading: "cenar", meaning: "to have dinner", example: { jp: "Ceno a las nueve.", en: "I have dinner at nine." }, accept: ["dine", "have dinner", "eat dinner"], hint: "Spain eats late — cenar a las nueve o las diez is completely normal." },
        { id: "es-u19l2-acostarse", type: "vocab", front: "acostarse", reading: "acostarse", meaning: "to go to bed", example: { jp: "Me acuesto a las diez.", en: "I go to bed at ten." }, accept: ["lie down", "go to bed"], hint: "Reflexive like levantarse, and the o becomes ue: me acuesto, te acuestas, se acuesta." },
        { id: "es-u19l2-dormir", type: "vocab", front: "dormir", reading: "dormir", meaning: "to sleep", example: { jp: "Duermo ocho horas.", en: "I sleep eight hours." }, accept: ["sleep", "sleeps", "be asleep"], hint: "o becomes ue again: duermo, duermes, duerme. Same family as el dormitorio." },
        { id: "es-u19l2-descansar", type: "vocab", front: "descansar", reading: "descansar", meaning: "to rest", example: { jp: "Descanso en el sofá.", en: "I rest on the sofa." }, accept: ["rest", "relax", "take a break"] },
        { id: "es-u19l2-apagar", type: "vocab", front: "apagar", reading: "apagar", meaning: "to turn off", example: { jp: "Apago la luz.", en: "I turn off the light." }, accept: ["switch off", "put out", "turn off"] },
        { id: "es-u19l2-encender", type: "vocab", front: "encender", reading: "encender", meaning: "to turn on", example: { jp: "Enciendo la lámpara.", en: "I turn on the lamp." }, accept: ["switch on", "light", "turn on"], hint: "e becomes ie when stressed: enciendo, enciendes, enciende." },
      ],
    },
    {
      id: "es-u19l3",
      unit: 19,
      lesson: 3,
      title: "¿Con qué frecuencia?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how often you do something: casi siempre, a veces, nunca, otra vez.",
      items: [
        { id: "es-u19l3-nunca", type: "vocab", front: "nunca", reading: "nunca", meaning: "never", example: { jp: "Nunca como carne.", en: "I never eat meat." }, accept: ["not ever", "never"], hint: "Put it before the verb and you need nothing else: nunca como carne. Put it after and Spanish doubles up: no como carne nunca." },
        { id: "es-u19l3-aveces", type: "vocab", front: "a veces", reading: "aveces", meaning: "sometimes", example: { jp: "A veces voy en bicicleta.", en: "Sometimes I go by bike." }, accept: ["now and then", "occasionally", "sometimes"] },
        { id: "es-u19l3-casi", type: "vocab", front: "casi", reading: "casi", meaning: "almost", example: { jp: "Casi siempre trabajo en la oficina.", en: "I almost always work in the office." }, accept: ["nearly", "almost"] },
        { id: "es-u19l3-otravez", type: "vocab", front: "otra vez", reading: "otravez", meaning: "again", example: { jp: "Escribo la palabra otra vez.", en: "I write the word again." }, accept: ["one more time", "once more", "again"], hint: "Literally \"another time\" — otra from Unit 14." },
        { id: "es-u19l3-ya", type: "vocab", front: "ya", reading: "ya", meaning: "already", example: { jp: "Ya terminé el examen.", en: "I've already finished the exam." }, accept: ["now", "yet", "already"], hint: "Tiny and everywhere. With a past verb it means already; on its own, \"¡Ya!\" means \"right now!\"." },
      ],
    },
    {
      id: "es-u19l4",
      unit: 19,
      lesson: 4,
      title: "Más verbos del día",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use six verbs that turn up in every conversation: poner, dar, decir, llamar, dejar, volver.",
      items: [
        { id: "es-u19l4-poner", type: "vocab", front: "poner", reading: "poner", meaning: "to put", example: { jp: "Pongo la ropa en el armario.", en: "I put the clothes in the wardrobe." }, accept: ["place", "set", "put"], hint: "The yo form is odd: pongo, not \"pono\". Same shape as tengo and salgo." },
        { id: "es-u19l4-dar", type: "vocab", front: "dar", reading: "dar", meaning: "to give", example: { jp: "Doy un libro a María.", en: "I give a book to María." }, accept: ["hand", "give", "gives"], hint: "doy, das, da — one of the shortest verbs in the language, and irregular in the yo form like voy." },
        { id: "es-u19l4-decir", type: "vocab", front: "decir", reading: "decir", meaning: "to say", example: { jp: "Digo mi nombre.", en: "I say my name." }, accept: ["tell", "say", "says"], hint: "digo, dices, dice — the stem e turns into i, and the c hardens to a g in the yo form." },
        { id: "es-u19l4-llamar", type: "vocab", front: "llamar", reading: "llamar", meaning: "to call", example: { jp: "Llamo a mi madre por la tarde.", en: "I call my mother in the afternoon." }, accept: ["phone", "ring", "call"], hint: "Add -se and it becomes what you're called: me llamo María." },
        { id: "es-u19l4-dejar", type: "vocab", front: "dejar", reading: "dejar", meaning: "to leave (behind)", example: { jp: "Dejo las llaves en la cocina.", en: "I leave the keys in the kitchen." }, accept: ["let", "leave behind", "leave"], hint: "dejar leaves a THING somewhere; salir leaves a PLACE. Dejo el bolso en casa, salgo de casa." },
        { id: "es-u19l4-volver", type: "vocab", front: "volver", reading: "volver", meaning: "to come back", example: { jp: "Vuelvo a casa a las seis.", en: "I come back home at six." }, accept: ["go back", "return", "come back"], hint: "o becomes ue: vuelvo, vuelves, vuelve." },
      ],
    },
  ],
};
