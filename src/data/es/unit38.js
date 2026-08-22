// ES Unit 38 — Los verbos · 2 (slot: conjugation-1) — A2 · THE FUTURE
// A1 could only reach forward with voy a + verb (the near future). This unit drills
// the futuro simple: first the two verbs everything else leans on (ser, tener),
// then the irregular stems, then the regular rule, then the rest of the persons.
//
// AUTHORING NOTE — why no group/conjForm tags here. ja's drill units tag each verb
// with group + conjForm so it routes to the conjugate card. Those fields are
// JAPANESE: contract.js accepts only godan/ichidan/irregular and src/store/
// conjugate.js implements Japanese morphology. A Spanish verb has no honest value
// to put there, so these units teach each form as its own vocab chunk — exactly how
// A1 taught hablé and fui. Wiring the conjugate card for Spanish is an engine
// change, not a content one. Examples use A1 vocab plus this block.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT38 = {
  id: "es-u38",
  lang: "es",
  title: "Los verbos · 2",
  order: 38,
  stage: "a2",
  lessons: [
    {
      id: "es-u38l1",
      unit: 38,
      lesson: 1,
      title: "Will be, will have",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what will be — seré médico, será difícil, seremos muchos, tendré más tiempo, habrá una fiesta.",
      items: [
        { id: "es-u38l1-sere", type: "vocab", front: "seré", reading: "sere", meaning: "I will be", example: { jp: "Un día seré médico.", en: "One day I'll be a doctor." }, accept: ["i'll be", "i shall be"], hint: "The future endings are the same for EVERY Spanish verb: -é, -ás, -á, -emos, -éis, -án. Only the stem changes — here it's ser-." },
        { id: "es-u38l1-sera", type: "vocab", front: "será", reading: "sera", meaning: "he will be", example: { jp: "El examen será difícil.", en: "The exam will be difficult." }, accept: ["she will be", "it will be", "he'll be"], hint: "será, from ser. Also for guessing: ¿Qué hora será? — I wonder what time it is." },
        { id: "es-u38l1-seremos", type: "vocab", front: "seremos", reading: "seremos", meaning: "we will be", example: { jp: "Seremos muchos en la fiesta.", en: "There'll be a lot of us at the party." }, accept: ["we'll be"], hint: "The nosotros future ends -emos: seremos, tendremos, hablaremos." },
        { id: "es-u38l1-tendre", type: "vocab", front: "tendré", reading: "tendre", meaning: "I will have", example: { jp: "Mañana tendré más tiempo.", en: "Tomorrow I'll have more time." }, accept: ["i'll have"], hint: "tener → tendr-. A d appears from nowhere: tendré, not \"teneré\"." },
        { id: "es-u38l1-tendra", type: "vocab", front: "tendrá", reading: "tendra", meaning: "he will have", example: { jp: "El hotel tendrá un jardín.", en: "The hotel will have a garden." }, accept: ["she will have", "it will have"], hint: "Same odd tendr- stem, third person: tendrá." },
        { id: "es-u38l1-habra", type: "vocab", front: "habrá", reading: "habra", meaning: "there will be", example: { jp: "Mañana habrá una fiesta.", en: "Tomorrow there'll be a party." }, accept: ["there is going to be", "there'll be"], hint: "The future of hay (A1, there is). Habrá mucha gente — there'll be lots of people." },
      ],
    },
    {
      id: "es-u38l2",
      unit: 38,
      lesson: 2,
      title: "The irregular stems",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the future of the everyday irregulars — haré, podré, saldré, pondré, vendré, diré.",
      items: [
        { id: "es-u38l2-hare", type: "vocab", front: "haré", reading: "hare", meaning: "I will do", example: { jp: "Mañana haré la comida.", en: "Tomorrow I'll make the food." }, accept: ["i'll do", "i will make", "i'll make"], hint: "hacer → har-. The irregular futures change the stem and never the ending." },
        { id: "es-u38l2-podre", type: "vocab", front: "podré", reading: "podre", meaning: "I will be able to", example: { jp: "Podré salir a las cinco.", en: "I'll be able to leave at five." }, accept: ["i'll be able to", "i will be able"], hint: "poder → podr-. Podré verte mañana — I'll be able to see you tomorrow." },
        { id: "es-u38l2-saldre", type: "vocab", front: "saldré", reading: "saldre", meaning: "I will leave", example: { jp: "Saldré de casa a las ocho.", en: "I'll leave home at eight." }, accept: ["i'll go out", "i'll leave"], hint: "salir → saldr-. An -ir verb that grows a d: saldré." },
        { id: "es-u38l2-pondre", type: "vocab", front: "pondré", reading: "pondre", meaning: "I will put", example: { jp: "Pondré los libros en la mesa.", en: "I'll put the books on the table." }, accept: ["i'll set", "i'll place"], hint: "poner → pondr-. The same d as tener and salir." },
        { id: "es-u38l2-vendre", type: "vocab", front: "vendré", reading: "vendre", meaning: "I will come", example: { jp: "Vendré a tu casa el sábado.", en: "I'll come to your house on Saturday." }, accept: ["i'll come"], hint: "venir → vendr-. Careful: vendré is \"I'll come\"; venderé (from vender) is \"I'll sell\"." },
        { id: "es-u38l2-dire", type: "vocab", front: "diré", reading: "dire", meaning: "I will say", example: { jp: "No diré nada.", en: "I won't say anything." }, accept: ["i'll tell", "i will tell"], hint: "decir → dir-. The shortest future stem in Spanish." },
      ],
    },
    {
      id: "es-u38l3",
      unit: 38,
      lesson: 3,
      title: "The regular rule",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Build the future of any regular verb — hablaré, comeré, viviré, trabajaré, aprenderé, escribiré.",
      items: [
        { id: "es-u38l3-hablare", type: "vocab", front: "hablaré", reading: "hablare", meaning: "I will speak", example: { jp: "Mañana hablaré con el jefe.", en: "Tomorrow I'll speak with the boss." }, accept: ["i'll talk", "i'll speak", "i will talk"], hint: "The regular future keeps the WHOLE infinitive and adds the ending: hablar + é → hablaré. Nothing is removed." },
        { id: "es-u38l3-comere", type: "vocab", front: "comeré", reading: "comere", meaning: "I will eat", example: { jp: "Comeré en casa hoy.", en: "I'll eat at home today." }, accept: ["i'll eat"], hint: "-er verbs work the same: comer + é → comeré." },
        { id: "es-u38l3-vivire", type: "vocab", front: "viviré", reading: "vivire", meaning: "I will live", example: { jp: "Un día viviré en España.", en: "One day I'll live in Spain." }, accept: ["i'll live"], hint: "-ir verbs too: vivir + é → viviré. All three verb types share one rule." },
        { id: "es-u38l3-trabajare", type: "vocab", front: "trabajaré", reading: "trabajare", meaning: "I will work", example: { jp: "Trabajaré el fin de semana.", en: "I'll work at the weekend." }, accept: ["i'll work"], hint: "trabajar + é. A long word, a simple rule." },
        { id: "es-u38l3-aprendere", type: "vocab", front: "aprenderé", reading: "aprendere", meaning: "I will learn", example: { jp: "Aprenderé a cocinar bien.", en: "I'll learn to cook well." }, accept: ["i'll learn"], hint: "aprender + é → aprenderé." },
        { id: "es-u38l3-escribire", type: "vocab", front: "escribiré", reading: "escribire", meaning: "I will write", example: { jp: "Te escribiré un correo.", en: "I'll write you an email." }, accept: ["i'll write"], hint: "escribir + é → escribiré." },
      ],
    },
    {
      id: "es-u38l4",
      unit: 38,
      lesson: 4,
      title: "Everyone else, in the future",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Take the future through the other persons — serás, hablaremos, tendrán, serán, vendrá, veremos.",
      items: [
        { id: "es-u38l4-seras", type: "vocab", front: "serás", reading: "seras", meaning: "you will be", example: { jp: "Serás un buen médico.", en: "You'll be a good doctor." }, accept: ["you'll be"], hint: "The tú future ends -ás, always with an accent: serás, tendrás, hablarás." },
        { id: "es-u38l4-hablaremos", type: "vocab", front: "hablaremos", reading: "hablaremos", meaning: "we will speak", example: { jp: "Hablaremos mañana por la mañana.", en: "We'll talk tomorrow morning." }, accept: ["we'll talk", "we'll speak", "we will talk"], hint: "Same six endings on every verb: -é, -ás, -á, -emos, -éis, -án." },
        { id: "es-u38l4-tendran", type: "vocab", front: "tendrán", reading: "tendran", meaning: "they will have", example: { jp: "Mis hijos tendrán una casa grande.", en: "My children will have a big house." }, accept: ["they'll have"], hint: "The ellos future ends -án: tendrán, serán, hablarán." },
        { id: "es-u38l4-seran", type: "vocab", front: "serán", reading: "seran", meaning: "they will be", example: { jp: "Serán las tres cuando llego.", en: "It'll be three o'clock when I arrive." }, accept: ["they'll be", "it will be"], hint: "Also used to guess a time: serán las tres — it must be about three." },
        { id: "es-u38l4-vendra", type: "vocab", front: "vendrá", reading: "vendra", meaning: "she will come", example: { jp: "Mi hermana vendrá el domingo.", en: "My sister will come on Sunday." }, accept: ["he will come", "she'll come"], hint: "venir → vendr-, third person vendrá." },
        { id: "es-u38l4-veremos", type: "vocab", front: "veremos", reading: "veremos", meaning: "we will see", example: { jp: "Mañana lo veremos todo.", en: "Tomorrow we'll see everything." }, accept: ["we'll see"], hint: "ver → ver- (regular here): veremos. Ya veremos — we'll see, a whole answer on its own." },
      ],
    },
  ],
};
