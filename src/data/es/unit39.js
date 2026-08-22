// ES Unit 39 — El futuro ("The future") — A2 CONJUGATION DRILL (slot: conjugation-2)
// The second past/future drill. A1 could only reach forward with the present plus a
// time word (mañana trabajo). This unit drills the two ways Spanish really talks
// about the future: the futuro simple (hablaré) and the spoken ir a + infinitive
// (voy a hablar). Each form is a vocab chunk, as in the French drills (fr/unit45.js)
// — there is no Spanish conjugation engine.
//
// The futuro simple is a gift: ONE set of endings for all three verb families,
// stuck on the WHOLE infinitive — -é, -ás, -á, -emos, -án (no vosotros, matching
// the five-form paradigm A1 chose). Only a dozen verbs change the stem. Lessons 1–2
// drill the regular endings, Lesson 3 the irregular stems, Lesson 4 the everyday
// ir a future plus habrá.
//
// Conventions: see es/unit36.js. BLOCK-3 SCOPE: examples use only the A1 corpus
// (u1–u20) plus this block's own fronts. Forms share a lexeme with A1 infinitives
// (hablar→hablaré) — the intended drill progression. FREE: María, Pablo, Ana, Madrid.
export const ES_UNIT39 = {
  id: "es-u39",
  lang: "es",
  title: "El futuro",
  order: 39,
  stage: "a2",
  lessons: [
    {
      id: "es-u39l1",
      unit: 39,
      lesson: 1,
      title: "El futuro: yo",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you will do: mañana hablaré con el jefe, comeré en casa, seré médico.",
      items: [
        { id: "es-u39l1-hablare", type: "vocab", front: "hablaré", reading: "hablare", meaning: "I will speak", example: { jp: "Mañana hablaré con el jefe.", en: "Tomorrow I'll speak with the boss." }, accept: ["i'll speak", "i shall speak", "i'll talk"], hint: "The future endings are the same for EVERY verb and hang on the whole infinitive: hablar + é = hablaré. -ar, -er, -ir all behave. Note the accent on the -é." },
        { id: "es-u39l1-comere", type: "vocab", front: "comeré", reading: "comere", meaning: "I will eat", example: { jp: "Hoy comeré en casa.", en: "Today I'll eat at home." }, accept: ["i'll eat", "i shall eat"], hint: "comer → comeré. The infinitive stays whole, unlike the present (como) or the past (comí)." },
        { id: "es-u39l1-vivire", type: "vocab", front: "viviré", reading: "vivire", meaning: "I will live", example: { jp: "Un día viviré en España.", en: "One day I'll live in Spain." }, accept: ["i'll live", "i shall live"], hint: "vivir → viviré. -er and -ir verbs take exactly the same future ending." },
        { id: "es-u39l1-trabajare", type: "vocab", front: "trabajaré", reading: "trabajare", meaning: "I will work", example: { jp: "El lunes trabajaré todo el día.", en: "On Monday I'll work all day." }, accept: ["i'll work", "i shall work"], hint: "trabajar → trabajaré. tú just adds -s: trabajarás." },
        { id: "es-u39l1-estare", type: "vocab", front: "estaré", reading: "estare", meaning: "I will be (somewhere)", example: { jp: "Esta tarde estaré en la oficina.", en: "This afternoon I'll be at the office." }, accept: ["i'll be", "i shall be"], hint: "estar → estaré: where you'll be, or a temporary state. Use seré for who/what you'll be." },
        { id: "es-u39l1-sere", type: "vocab", front: "seré", reading: "sere", meaning: "I will be", example: { jp: "Un día seré médico.", en: "One day I'll be a doctor." }, accept: ["i'll be", "i shall be"], hint: "ser → seré, and it is regular: it keeps the whole infinitive. For a job or an identity: seré profesor. estaré is for a place." },
      ],
    },
    {
      id: "es-u39l2",
      unit: 39,
      lesson: 2,
      title: "El futuro: otras personas",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what others will do: María será médica, comeremos en casa, mis amigos llegarán tarde.",
      items: [
        { id: "es-u39l2-sera", type: "vocab", front: "será", reading: "sera", meaning: "he/she/it will be", example: { jp: "María será una buena médica.", en: "María will be a good doctor." }, accept: ["he will be", "she will be", "it will be"], hint: "ser → será. Also for a guess about the present: ¿Qué hora es? — Serán las tres = it must be about three." },
        { id: "es-u39l2-estara", type: "vocab", front: "estará", reading: "estara", meaning: "he/she/it will be (somewhere)", example: { jp: "El coche estará en la calle.", en: "The car will be on the street." }, accept: ["he will be", "she will be", "it will be there"], hint: "estar → estará. Like será, it doubles as a guess: estará en casa = he's probably at home." },
        { id: "es-u39l2-hablaremos", type: "vocab", front: "hablaremos", reading: "hablaremos", meaning: "we will speak", example: { jp: "Mañana hablaremos del problema.", en: "Tomorrow we'll talk about the problem." }, accept: ["we'll speak", "we'll talk"], hint: "The we-ending is -emos for every verb: hablaremos, comeremos, viviremos." },
        { id: "es-u39l2-comeremos", type: "vocab", front: "comeremos", reading: "comeremos", meaning: "we will eat", example: { jp: "El domingo comeremos todos en casa.", en: "On Sunday we'll all eat at home." }, accept: ["we'll eat"], hint: "comer → comeremos. The classic plan-making form: ¿comeremos juntos? = shall we eat together?" },
        { id: "es-u39l2-llegaran", type: "vocab", front: "llegarán", reading: "llegaran", meaning: "they will arrive", example: { jp: "Mis amigos llegarán tarde.", en: "My friends will arrive late." }, accept: ["they'll arrive", "they'll get here"], hint: "The they-ending is -án: llegarán, comerán, vivirán. It carries an accent." },
        { id: "es-u39l2-trabajaran", type: "vocab", front: "trabajarán", reading: "trabajaran", meaning: "they will work", example: { jp: "Ellos trabajarán en la nueva empresa.", en: "They'll work at the new company." }, accept: ["they'll work"], hint: "trabajar → trabajarán. Same -án ending as llegarán." },
      ],
    },
    {
      id: "es-u39l3",
      unit: 39,
      lesson: 3,
      title: "Los futuros irregulares",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the futures that change their stem: haré la comida, tendré tiempo, saldré a las ocho, te diré la respuesta.",
      items: [
        { id: "es-u39l3-hare", type: "vocab", front: "haré", reading: "hare", meaning: "I will do / make", example: { jp: "Mañana haré la comida.", en: "Tomorrow I'll make the food." }, accept: ["i'll do", "i'll make", "i shall do"], hint: "hacer → har-. The dozen irregular futures change only the STEM; the endings (-é, -ás, -á…) never change." },
        { id: "es-u39l3-tendre", type: "vocab", front: "tendré", reading: "tendre", meaning: "I will have", example: { jp: "El sábado tendré más tiempo.", en: "On Saturday I'll have more time." }, accept: ["i'll have", "i shall have"], hint: "tener → tendr-. Notice the d that appears: tener, tendré — same trick as poner → pondré and salir → saldré." },
        { id: "es-u39l3-pondre", type: "vocab", front: "pondré", reading: "pondre", meaning: "I will put", example: { jp: "Pondré las llaves en la mesa.", en: "I'll put the keys on the table." }, accept: ["i'll put", "i shall put"], hint: "poner → pondr-. The d-family: poner/tener/salir/venir all slot a d into the stem." },
        { id: "es-u39l3-saldre", type: "vocab", front: "saldré", reading: "saldre", meaning: "I will go out / leave", example: { jp: "Saldré de casa a las ocho.", en: "I'll leave the house at eight." }, accept: ["i'll go out", "i'll leave", "i shall leave"], hint: "salir → saldr-. Another d-family future." },
        { id: "es-u39l3-vendre", type: "vocab", front: "vendré", reading: "vendre", meaning: "I will come", example: { jp: "Vendré a tu casa el domingo.", en: "I'll come to your house on Sunday." }, accept: ["i'll come", "i shall come"], hint: "venir → vendr-. Don't mix it up with vender (to sell), whose future is venderé." },
        { id: "es-u39l3-dire", type: "vocab", front: "diré", reading: "dire", meaning: "I will say / tell", example: { jp: "Mañana te diré la respuesta.", en: "Tomorrow I'll tell you the answer." }, accept: ["i'll say", "i'll tell", "i shall say"], hint: "decir → dir-, the shortest stem of all. Te diré = I'll tell you." },
      ],
    },
    {
      id: "es-u39l4",
      unit: 39,
      lesson: 4,
      title: "El futuro cercano (ir a)",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the everyday spoken future: voy a comer, vamos a ver, mañana habrá una reunión.",
      items: [
        { id: "es-u39l4-voya", type: "vocab", front: "voy a", reading: "voya", meaning: "I'm going to", example: { jp: "Voy a comer ahora.", en: "I'm going to eat now." }, accept: ["i am going to", "i'll"], hint: "The most common spoken future: voy (u13) + a + a plain verb. Just like English \"I'm going to…\". Warmer and nearer than the -é future." },
        { id: "es-u39l4-vasa", type: "vocab", front: "vas a", reading: "vasa", meaning: "you're going to", example: { jp: "¿Qué vas a hacer mañana?", en: "What are you going to do tomorrow?" }, accept: ["you are going to", "you'll"], hint: "vas + a + plain verb. The everyday way to ask about someone's plans: ¿Vas a venir?" },
        { id: "es-u39l4-vaa", type: "vocab", front: "va a", reading: "vaa", meaning: "he/she is going to", example: { jp: "Va a llover esta tarde.", en: "It's going to rain this afternoon." }, accept: ["it is going to", "he is going to", "she's going to"], hint: "va + a + plain verb. Also for what's about to happen: va a llover = it's going to rain." },
        { id: "es-u39l4-vamosa", type: "vocab", front: "vamos a", reading: "vamosa", meaning: "we're going to / let's", example: { jp: "Esta tarde vamos a ver a los abuelos.", en: "This afternoon we're going to see the grandparents." }, accept: ["let's", "we are going to", "we'll"], hint: "Two meanings in one: vamos a comer = \"we're going to eat\" OR \"let's eat\". Tone and context decide." },
        { id: "es-u39l4-vana", type: "vocab", front: "van a", reading: "vana", meaning: "they're going to", example: { jp: "Mis padres van a llegar el lunes.", en: "My parents are going to arrive on Monday." }, accept: ["they are going to", "they'll"], hint: "van + a + plain verb, the last of the set. No vosotros form is taught, matching the rest of the course." },
        { id: "es-u39l4-habra", type: "vocab", front: "habrá", reading: "habra", meaning: "there will be", example: { jp: "Mañana habrá una reunión en la oficina.", en: "Tomorrow there will be a meeting at the office." }, accept: ["there is going to be", "there'll be"], hint: "The future of hay (u7), with the irregular habr- stem. One form for singular and plural: habrá un problema, habrá muchos coches." },
      ],
    },
  ],
};
