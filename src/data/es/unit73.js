// ES Unit 73 — La cortesía (slot: register-2 — softening and formality) — B1
// The second half of the register strand. Unit 72 was WHICH register; this one is
// how to soften inside it — the moves that make a request askable, a refusal
// survivable, and bad news deliverable. This is the part of politeness that is not
// vocabulary but padding: Spanish says the same thing as English at greater length,
// and a learner who is too direct reads as rude without knowing why.
//
// Modelled as function-phrase vocab, examples carrying the contrast (CLAUDE.md).
// The softening is often in the trailing clause (lo entiendo si no es fácil, pero
// puedo equivocarme) — so the two-clause B1 example is doing double duty here.
// Every front checked against the live A1+A2 corpus.
//   FREE: posible, curso
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT73 = {
  id: "es-u73",
  lang: "es",
  title: "La cortesía",
  order: 73,
  stage: "b1",
  lessons: [
    {
      id: "es-u73l1",
      unit: 73,
      lesson: 1,
      title: "Asking without imposing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Make a request easy to refuse — me permito, me preguntaba si, sería posible, le importaría, no dude en, le agradecería.",
      items: [
        { id: "es-u73l1-mepermito", type: "vocab", front: "me permito", reading: "mepermito", meaning: "I take the liberty of", example: { jp: "Me permito recordarle que la reunión es mañana a las diez.", en: "I'm taking the liberty of reminding you that the meeting is tomorrow at ten." }, drill: { jp: "Me permito escribirle hoy", en: "I take the liberty of writing to you today" }, accept: ["may I", "if I may", "I take the liberty"], hint: "The standard opening of a polite, unsolicited message. From permitirse, to allow oneself." },
        { id: "es-u73l1-mepreguntabasi", type: "vocab", front: "me preguntaba si", reading: "mepreguntabasi", meaning: "I was wondering whether", example: { jp: "Me preguntaba si podría ayudarme con una cosa cuando tenga un momento.", en: "I was wondering whether you could help me with something when you have a moment." }, drill: { jp: "Me preguntaba si tiene tiempo hoy", en: "I was wondering whether you have time today" }, accept: ["I wondered if", "I was wondering if"], hint: "The imperfect does the softening — me pregunto si is a real question, me preguntaba si is a polite approach." },
        { id: "es-u73l1-seriaposible", type: "vocab", front: "sería posible", reading: "seriaposible", meaning: "would it be possible", example: { jp: "¿Sería posible cambiar la fecha? Lo entiendo perfectamente si no es fácil.", en: "Would it be possible to change the date? I completely understand if it isn't easy." }, drill: { jp: "No sé si sería posible cambiar", en: "I don't know whether it would be possible to change" }, accept: ["could we", "is there any chance"], hint: "Softening the ask with lo entiendo si no es fácil — acknowledging it might not be simple — is the polite move." },
        { id: "es-u73l1-leimportaria", type: "vocab", front: "le importaría", reading: "leimportaria", meaning: "would you mind", example: { jp: "¿Le importaría bajar un poco la música? Es que ya es un poco tarde.", en: "Would you mind turning the music down a bit? It's just that it's a little late now." }, drill: { jp: "No sé si le importaría esperar", en: "I don't know whether you'd mind waiting" }, accept: ["do you mind", "would it bother you"], hint: "importar = to matter/mind. ¿Le importaría? asks a favour very gently — literally 'would it matter to you?'" },
        { id: "es-u73l1-nodudeen", type: "vocab", front: "no dude en", reading: "nodudeen", meaning: "feel free to", example: { jp: "No dude en escribirme si le surge cualquier pregunta más adelante.", en: "Feel free to write to me if any question comes up later." }, drill: { jp: "No dude en llamar mañana", en: "Feel free to call tomorrow" }, accept: ["don't hesitate to", "do feel free to"], hint: "Closes almost every formal message. From dudar, to doubt — literally 'don't hesitate to'." },
        { id: "es-u73l1-leagradeceria", type: "vocab", front: "le agradecería", reading: "leagradeceria", meaning: "I would be grateful", example: { jp: "Le agradecería que me respondiera antes del viernes, si es posible.", en: "I would be grateful if you would reply to me before Friday, if possible." }, drill: { jp: "Le agradecería una respuesta pronto", en: "I would be grateful for a reply soon" }, accept: ["I'd be grateful", "I would appreciate it"], hint: "The heaviest polite request in normal use. le agradecería que + imperfect subjunctive: que me respondiera." },
      ],
    },
    {
      id: "es-u73l2",
      unit: 73,
      lesson: 2,
      title: "Bad news, gently",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Deliver a refusal or a correction without offence — me temo que, me parece que, si no me equivoco, lamentar, reconocer, dar la impresión.",
      items: [
        { id: "es-u73l2-metemoque", type: "vocab", front: "me temo que", reading: "metemoque", meaning: "I'm afraid that", example: { jp: "Me temo que no será posible esta semana, lo siento de verdad.", en: "I'm afraid it won't be possible this week, I'm really sorry." }, drill: { jp: "Me temo que llueve mañana", en: "I'm afraid it will rain tomorrow" }, accept: ["I fear that", "unfortunately", "I'm afraid"], hint: "Softens bad news. temerse is heavier than a plain no — me temo que no." },
        { id: "es-u73l2-mepareceque", type: "vocab", front: "me parece que", reading: "mepareceque", meaning: "it seems to me that", example: { jp: "Me parece que la fecha no es la mejor, pero puedo equivocarme.", en: "It seems to me that the date isn't the best, but I may be wrong." }, drill: { jp: "Me parece que está cansado", en: "It seems to me that he's tired" }, accept: ["I think that", "to my mind", "I believe"], hint: "How you correct someone without saying they're wrong. The trailing pero puedo equivocarme is part of the move." },
        { id: "es-u73l2-sinomeequivoco", type: "vocab", front: "si no me equivoco", reading: "sinomeequivoco", meaning: "if I'm not mistaken", example: { jp: "Si no me equivoco, la reunión era a las cuatro, no a las cinco.", en: "If I'm not mistaken, the meeting was at four, not five." }, drill: { jp: "Si no me equivoco llega hoy", en: "If I'm not mistaken he arrives today" }, accept: ["unless I'm mistaken", "correct me if I'm wrong"], hint: "Lets you raise a problem while leaving the other person a way out. From equivocarse, to be wrong." },
        { id: "es-u73l2-lamentar", type: "vocab", front: "lamentar", reading: "lamentar", meaning: "to regret", example: { jp: "Lamento mucho lo que ha pasado, y espero que todo mejore pronto.", en: "I'm very sorry about what has happened, and I hope everything gets better soon." }, drill: { jp: "Lamentar el error no es bastante", en: "Regretting the mistake is not enough" }, accept: ["to be sorry about", "to regret"], hint: "More formal than sentir. Lamento comunicarle que… opens a letter that says no." },
        { id: "es-u73l2-darlaimpresion", type: "vocab", front: "dar la impresión", reading: "darlaimpresion", meaning: "to give the impression", example: { jp: "Da la impresión de que está enfadado, aunque él diga que no.", en: "He gives the impression of being angry, although he says he isn't." }, drill: { jp: "Dar la impresión de calma es importante", en: "Giving an impression of calm is important" }, accept: ["to seem", "to come across as"], hint: "dar la impresión de que + a clause. Softer than saying it outright — you report how it looks, not what is." },
        { id: "es-u73l2-disculparse", type: "vocab", front: "disculparse", reading: "disculparse", meaning: "to apologize", example: { jp: "Se disculpó por llegar tarde a la reunión.", en: "He apologized for arriving late to the meeting." }, drill: { jp: "Disculparse a tiempo es importante", en: "Apologizing in time is important" }, accept: ["to apologize", "to say sorry", "to excuse oneself"], hint: "Reflexive: disculparse POR algo, CON alguien. Disculpe is the polite form you already use." },
      ],
    },
    {
      id: "es-u73l3",
      unit: 73,
      lesson: 3,
      title: "Saying yes warmly",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Accept an offer with the right warmth — con gusto, será un placer, faltaría más, cuente conmigo, cómo no, desde luego.",
      items: [
        { id: "es-u73l3-congusto", type: "vocab", front: "con gusto", reading: "congusto", meaning: "gladly", example: { jp: "—¿Me ayudas con esto? —Con gusto, dime qué necesitas.", en: "—Will you help me with this? —Gladly, tell me what you need." }, drill: { jp: "Con gusto le ayudo mañana", en: "I'll gladly help you tomorrow" }, accept: ["with pleasure", "happy to"], hint: "The warm yes to a request. con mucho gusto is warmer still. A plain sí can sound flat." },
        { id: "es-u73l3-seraunplacer", type: "vocab", front: "será un placer", reading: "seraunplacer", meaning: "it'll be a pleasure", example: { jp: "Será un placer trabajar con usted en este proyecto durante el año.", en: "It'll be a pleasure to work with you on this project over the year." }, drill: { jp: "Será un placer trabajar con usted", en: "It will be a pleasure to work with you" }, accept: ["my pleasure", "gladly", "delighted to"], hint: "A warm, slightly formal acceptance. Es un placer = it's a pleasure (right now)." },
        { id: "es-u73l3-faltariamas", type: "vocab", front: "faltaría más", reading: "faltariamas", meaning: "of course", example: { jp: "Claro que te ayudo con la mudanza, ¡faltaría más!", en: "Of course I'll help you with the move, it goes without saying!" }, drill: { jp: "Faltaría más le ayudo enseguida", en: "Of course I'll help you right away" }, accept: ["by all means", "but of course", "don't mention it"], hint: "An emphatic, warm 'of course' — it would be unthinkable to refuse. ¡Faltaría más!" },
        { id: "es-u73l3-cuenteconmigo", type: "vocab", front: "cuente conmigo", reading: "cuenteconmigo", meaning: "count on me", example: { jp: "Para lo que necesite, cuente conmigo; estaré encantado de ayudar.", en: "For whatever you need, count on me; I'll be delighted to help." }, drill: { jp: "Cuente conmigo para el proyecto", en: "Count on me for the project" }, accept: ["you can rely on me", "I'm here for you"], hint: "The formal usted form; to a friend, cuenta conmigo. From contar con, to count on (u35)." },
        { id: "es-u73l3-comono", type: "vocab", front: "cómo no", reading: "comono", meaning: "of course", example: { jp: "—¿Puedo hacerle una pregunta? —Cómo no, dígame.", en: "—May I ask you a question? —Of course, go ahead." }, drill: { jp: "Cómo no le acompaño ahora", en: "Of course I'll go with you now" }, accept: ["certainly", "sure", "by all means"], hint: "A polite, ready 'of course'. Literally 'how not?' — how could I say no?" },
        { id: "es-u73l3-desdeluego", type: "vocab", front: "desde luego", reading: "desdeluego", meaning: "of course", example: { jp: "Desde luego, tienes toda la razón en eso; no hay nada que discutir.", en: "Of course, you're completely right about that; there's nothing to argue about." }, drill: { jp: "Desde luego es la mejor solución", en: "Of course it's the best solution" }, accept: ["certainly", "definitely", "without doubt"], hint: "A firm 'of course / certainly'. Also reassuring agreement: desde luego que sí." },
      ],
    },
    {
      id: "es-u73l4",
      unit: 73,
      lesson: 4,
      title: "Interrupting and filling a pause",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Interrupt someone properly and buy yourself time — perdone que le moleste, molestar, vaya, venga, a ver, dígame.",
      items: [
        { id: "es-u73l4-perdonequelemoleste", type: "vocab", front: "perdone que le moleste", reading: "perdonequelemoleste", meaning: "sorry to bother you", example: { jp: "Perdone que le moleste, ¿podría ayudarme con una cosa un momento?", en: "Sorry to bother you, could you help me with something for a moment?" }, drill: { jp: "Perdone que le moleste un momento", en: "Sorry to bother you for a moment" }, accept: ["sorry to disturb you", "pardon the interruption"], hint: "The full formal opening. From molestar (next). Dropping le moleste makes it a plain excuse-me." },
        { id: "es-u73l4-vaya", type: "vocab", front: "vaya", reading: "vaya", meaning: "oh dear", example: { jp: "Vaya, no sabía que estabas enfermo; espero que te mejores pronto.", en: "Oh dear, I didn't know you were ill; I hope you get better soon." }, drill: { jp: "Vaya qué mala suerte", en: "Oh dear what bad luck" }, accept: ["well", "wow", "what a shame"], hint: "An all-purpose reaction — surprise, sympathy or mild dismay: ¡vaya! Also 'what a…': ¡vaya día!" },
        { id: "es-u73l4-venga", type: "vocab", front: "venga", reading: "venga", meaning: "come on", example: { jp: "Venga, vámonos ya, que si no llegamos tarde otra vez.", en: "Come on, let's get going, or we'll be late again." }, drill: { jp: "Venga vamos al parque", en: "Come on let's go to the park" }, accept: ["come on", "all right then", "let's go"], hint: "A Spain-wide nudge: ¡venga, vamos! Also a warm goodbye — venga, hasta luego. Literally 'come' (subjunctive of venir)." },
        { id: "es-u73l4-aver", type: "vocab", front: "a ver", reading: "aver", meaning: "let's see", example: { jp: "A ver, cuéntame bien qué te ha pasado, que no entiendo nada.", en: "Now then, tell me properly what happened to you, because I don't understand at all." }, drill: { jp: "A ver qué dice el médico", en: "Let's see what the doctor says" }, accept: ["right", "now then", "let me see"], hint: "Opens a turn while you think, or when you're about to look into something: a ver, ¿qué tenemos aquí?" },
        { id: "es-u73l4-digame", type: "vocab", front: "dígame", reading: "digame", meaning: "tell me", example: { jp: "Dígame, ¿en qué puedo ayudarle hoy?", en: "Tell me, how can I help you today?" }, drill: { jp: "Dígame qué necesita ahora", en: "Tell me what you need now" }, accept: ["go ahead", "how can I help", "yes?"], hint: "What a shopkeeper or an official says to open. Also 'hello?' when answering the phone in Spain." },
        { id: "es-u73l4-simepermite", type: "vocab", front: "si me permite", reading: "simepermite", meaning: "if I may", example: { jp: "Si me permite, quisiera decir una cosa más.", en: "If I may, I'd like to say one more thing." }, drill: { jp: "Si me permite quiero decir algo", en: "If I may I want to say something" }, accept: ["if I may", "if you'll allow me", "if you don't mind"], hint: "The usted opener for interrupting or adding something without stepping on anyone." },
      ],
    },
  ],
};
