// ES Unit 72 — Tú o usted (slot: register-1 — polite vs plain) — B1
// THE NEW B1 STRAND, and the one the blueprint is bluntest about: "the same
// sentence said to a friend, a stranger, and a boss is three different sentences,
// and choosing wrong is the mistake that marks a speaker as foreign far more than
// vocabulary does… the strand most likely to be skipped and most worth keeping."
// Alex's brief singled it out for real weight.
//
// So this unit is built as a CONTRAST, not a word list. Every lesson teaches one
// side of the tú/usted divide against the other, and the examples deliberately show
// the SAME act performed twice at different heights. Modelled like grammar:
// function-phrase vocab whose examples carry the pattern.
//
// A1 already owns the neutral middle and the formal pronouns themselves (usted,
// señor, señora, por favor, gracias, perdón); this unit adds what A1 could not risk:
// the verbs of the decision (tutear, tratar de usted), the formal-letter formulas,
// the real casual register a learner will actually hear, and the paired invitation.
// Every front checked against the live A1+A2 corpus.
//   FREE: cliente
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT72 = {
  id: "es-u72",
  lang: "es",
  title: "Tú o usted",
  order: 72,
  stage: "b1",
  lessons: [
    {
      id: "es-u72l1",
      unit: 72,
      lesson: 1,
      title: "The tú/usted decision",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Choose and negotiate the right form of address — tutear, tratar de usted, ¿nos tuteamos?, dirigirse a, disculpe, con permiso.",
      items: [
        { id: "es-u72l1-tutear", type: "vocab", front: "tutear", reading: "tutear", meaning: "to use tú with someone", example: { jp: "A un amigo lo tuteas, pero a un profesor es mejor tratarlo de usted.", en: "You use tú with a friend, but with a teacher it's better to use usted." }, accept: ["to be informal with", "to say tú"], hint: "Spanish has a verb for it, because it's a real decision. tutear a alguien = to be on tú terms with them." },
        { id: "es-u72l1-tratardeusted", type: "vocab", front: "tratar de usted", reading: "tratardeusted", meaning: "to address formally", example: { jp: "Trato de usted a mi jefe, aunque él me tutea a mí.", en: "I use usted with my boss, although he uses tú with me." }, accept: ["to use usted", "to be formal with"], hint: "The opposite of tutear, and the safe default with a stranger or an older person." },
        { id: "es-u72l1-nostuteamos", type: "vocab", front: "nos tuteamos", reading: "nostuteamos", meaning: "shall we use tú?", example: { jp: "¿Nos tuteamos? Será más fácil para trabajar juntos.", en: "Shall we use tú? It'll be easier for working together." }, accept: ["let's use tú", "we can say tú"], hint: "The standard way to propose the switch. Traditionally the older or more senior person offers it first." },
        { id: "es-u72l1-dirigirsea", type: "vocab", front: "dirigirse a", reading: "dirigirsea", meaning: "to address (someone)", example: { jp: "No sabía cómo dirigirse al director, así que al final usó usted.", en: "He didn't know how to address the director, so in the end he used usted." }, accept: ["to speak to", "to turn to"], hint: "dirigirse a alguien = to address them. Also to head toward: dirigirse a la salida." },
        { id: "es-u72l1-disculpe", type: "vocab", front: "disculpe", reading: "disculpe", meaning: "excuse me (formal)", example: { jp: "Disculpe, ¿podría decirme dónde está la estación?", en: "Excuse me, could you tell me where the station is?" }, accept: ["pardon me", "sorry to bother you"], hint: "The formal 'excuse me', from disculpar. To a friend: perdona, or just oye (hey)." },
        { id: "es-u72l1-conpermiso", type: "vocab", front: "con permiso", reading: "conpermiso", meaning: "excuse me (to pass)", example: { jp: "Con permiso, necesito pasar un momento por aquí.", en: "Excuse me, I need to get past here for a moment." }, accept: ["may I", "pardon me"], hint: "Said when you enter a room or squeeze past. The reply is pase, pase — go ahead." },
      ],
    },
    {
      id: "es-u72l2",
      unit: 72,
      lesson: 2,
      title: "Writing to someone official",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Open and close a formal message — estimado, atentamente, un saludo, le escribo para, quedo a la espera, le agradezco.",
      items: [
        { id: "es-u72l2-estimado", type: "vocab", front: "estimado", reading: "estimado", meaning: "Dear (formal)", example: { jp: "Estimado señor: le escribo porque tengo una pregunta sobre el curso.", en: "Dear Sir: I am writing because I have a question about the course." }, accept: ["dear sir", "dear"], hint: "Opens a formal letter, followed by a colon in Spanish, not a comma: Estimado señor:. To someone you know, Querido." },
        { id: "es-u72l2-atentamente", type: "vocab", front: "atentamente", reading: "atentamente", meaning: "yours sincerely", example: { jp: "Atentamente, y muchas gracias de nuevo por su ayuda.", en: "Yours sincerely, and many thanks again for your help." }, accept: ["yours faithfully", "regards"], hint: "The safe formal sign-off. Un cordial saludo is a touch warmer." },
        { id: "es-u72l2-unsaludo", type: "vocab", front: "un saludo", reading: "unsaludo", meaning: "regards", example: { jp: "Un saludo, y espero verte pronto por aquí.", en: "Best wishes, and I hope to see you here soon." }, accept: ["best wishes", "kind regards", "all the best"], hint: "The everyday email sign-off, warmer than atentamente. Un abrazo (lesson 4) is warmer still." },
        { id: "es-u72l2-leescribopara", type: "vocab", front: "le escribo para", reading: "leescribopara", meaning: "I'm writing to", example: { jp: "Le escribo para pedir una cita con el médico lo antes posible.", en: "I'm writing to request an appointment with the doctor as soon as possible." }, accept: ["I am writing in order to", "I write to"], hint: "The standard opening line of a formal message: le escribo para + infinitive." },
        { id: "es-u72l2-quedoalaespera", type: "vocab", front: "quedo a la espera", reading: "quedoalaespera", meaning: "I look forward to hearing", example: { jp: "Quedo a la espera de su respuesta, y le agradezco su tiempo.", en: "I look forward to your reply, and I thank you for your time." }, accept: ["I await your reply", "I remain waiting"], hint: "A fixed formula for a formal letter — quedo a la espera de su respuesta. Learn it whole." },
        { id: "es-u72l2-leagradezco", type: "vocab", front: "le agradezco", reading: "leagradezco", meaning: "I thank you (formal)", example: { jp: "Le agradezco mucho su respuesta tan rápida y su ayuda.", en: "I thank you very much for your quick reply and your help." }, accept: ["thank you", "many thanks", "I am grateful"], hint: "The written 'thank you', from agradecer. In a letter, gracias alone can seem abrupt. Yo form: agradezco." },
      ],
    },
    {
      id: "es-u72l3",
      unit: 72,
      lesson: 3,
      title: "How people actually talk",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Understand casual speech — vale, guay, qué va, mola, o sea, en plan.",
      items: [
        { id: "es-u72l3-vale", type: "vocab", front: "vale", reading: "vale", meaning: "OK", example: { jp: "—¿Quedamos a las cinco? —Vale, nos vemos allí entonces.", en: "—Shall we meet at five? —OK, see you there then." }, accept: ["all right", "fine", "sure"], hint: "The most Spanish word of all — vale = OK. From valer, to be worth." },
        { id: "es-u72l3-guay", type: "vocab", front: "guay", reading: "guay", meaning: "cool", example: { jp: "La fiesta estuvo muy guay, aunque terminó demasiado pronto.", en: "The party was really cool, although it ended too soon." }, accept: ["great", "awesome"], hint: "Spain slang for cool / great. ¡Qué guay! = How cool! Never in a formal setting." },
        { id: "es-u72l3-queva", type: "vocab", front: "qué va", reading: "queva", meaning: "no way", example: { jp: "—¿Estás enfadado conmigo? —¡Qué va! Solo estoy cansado.", en: "—Are you angry with me? —No way! I'm just tired." }, accept: ["of course not", "nah", "not at all"], hint: "A casual, friendly 'no' — closer to 'nah, not at all' than a flat no." },
        { id: "es-u72l3-mola", type: "vocab", front: "mola", reading: "mola", meaning: "it's cool", example: { jp: "Esta canción mola mucho, ¿la conoces?", en: "This song is really cool, do you know it?" }, accept: ["it's great", "I like it", "it rocks"], hint: "Works backwards like gustar: me mola = I like it. Very colloquial, from molar." },
        { id: "es-u72l3-osea", type: "vocab", front: "o sea", reading: "osea", meaning: "I mean", example: { jp: "No puedo ir, o sea, me gustaría, pero tengo mucho trabajo.", en: "I can't go — I mean, I'd like to, but I have a lot of work." }, accept: ["that is", "like", "in other words"], hint: "A spoken filler and a corrector: o sea, que no vienes — so, you're not coming, then." },
        { id: "es-u72l3-enplan", type: "vocab", front: "en plan", reading: "enplan", meaning: "like", example: { jp: "Me habló en plan serio, así que pensé que algo pasaba.", en: "He talked to me in a serious way, so I thought something was up." }, accept: ["sort of", "kind of", "in a ... way"], hint: "Very common young slang, like English 'like': en plan broma, jokingly. Never write it formally." },
      ],
    },
    {
      id: "es-u72l4",
      unit: 72,
      lesson: 4,
      title: "The same invitation, twice",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Pitch the same request at two heights — ¿te apetece? vs ¿le apetecería?, ¿quedamos?, un abrazo, nos vemos, le saluda.",
      items: [
        { id: "es-u72l4-teapetece", type: "vocab", front: "te apetece", reading: "teapetece", meaning: "do you fancy?", example: { jp: "¿Te apetece ir al cine esta noche? Ponen una película nueva.", en: "Do you fancy going to the cinema tonight? There's a new film on." }, accept: ["are you up for it", "do you feel like it"], hint: "The friendly invitation. apetecer works like gustar: me apetece un café." },
        { id: "es-u72l4-leapeteceria", type: "vocab", front: "le apetecería", reading: "leapeteceria", meaning: "would you care to?", example: { jp: "¿Le apetecería venir a comer con nosotros el domingo?", en: "Would you care to come and have lunch with us on Sunday?" }, accept: ["would you like to", "would you fancy"], hint: "The same invitation as te apetece, raised twice: usted instead of tú, and the conditional instead of the present." },
        { id: "es-u72l4-quedamos", type: "vocab", front: "quedamos", reading: "quedamos", meaning: "shall we meet up?", example: { jp: "¿Quedamos mañana? Podemos vernos en el centro sobre las seis.", en: "Shall we meet up tomorrow? We can meet in the centre around six." }, accept: ["let's meet", "want to meet up"], hint: "quedar (without -se) = to arrange to meet. Not quedarse, to stay (A2)." },
        { id: "es-u72l4-unabrazo", type: "vocab", front: "un abrazo", reading: "unabrazo", meaning: "best wishes (a hug)", example: { jp: "Un abrazo muy fuerte, y nos vemos pronto por casa.", en: "A big hug, and see you soon at home." }, accept: ["love", "hugs", "all the best"], hint: "Closes a warm, informal message. Un beso (a kiss) is warmer still, common between friends and family." },
        { id: "es-u72l4-nosvemos", type: "vocab", front: "nos vemos", reading: "nosvemos", meaning: "see you", example: { jp: "Bueno, me voy ya, que es tarde. ¡Nos vemos!", en: "Right, I'm off now, it's late. See you!" }, accept: ["see you later", "bye", "catch you later"], hint: "The everyday goodbye between friends. Nos vemos pronto — see you soon." },
        { id: "es-u72l4-lesaluda", type: "vocab", front: "le saluda", reading: "lesaluda", meaning: "yours faithfully", example: { jp: "Le saluda atentamente, y quedo a la espera de su respuesta.", en: "Yours faithfully, and I look forward to your reply." }, accept: ["yours sincerely", "regards"], hint: "The most formal sign-off, in the third person: le saluda atentamente, [name]. Used in official letters." },
      ],
    },
  ],
};
