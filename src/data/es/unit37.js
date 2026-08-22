// ES Unit 37 — Un poco de gramática · 3 (slot: grammar-5 — conditionals, ability, comparison) — A2
// The three things A1 could not say: what you WOULD do, what you HAVE to do, and
// how two things compare. As in Unit 36, grammar is authored as function-word vocab
// whose examples carry the pattern — no grammar item type.
//
// The conditional is taught as chunks (me gustaría, podría, sería) rather than as a
// paradigm: the learner already owns me gusta and quiero from A1, so these land as
// "more words that end -ía", and the rule can be seen before it is stated. Unit 38
// then drills the future, whose stem is the same.
// Comparatives fill the other A1 gap — A1 had bare más and menos but no pattern to
// hang them on; this unit supplies más … que, tan … como and the superlatives.
//   FREE: Madrid
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT37 = {
  id: "es-u37",
  lang: "es",
  title: "Un poco de gramática · 3",
  order: 37,
  stage: "a2",
  lessons: [
    {
      id: "es-u37l1",
      unit: 37,
      lesson: 1,
      title: "What I would do",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you would like or would do — me gustaría vivir aquí, podría ayudar, sería bueno, debería descansar.",
      items: [
        { id: "es-u37l1-megustaria", type: "vocab", front: "me gustaría", reading: "megustaria", meaning: "I would like", example: { jp: "Me gustaría vivir en España.", en: "I would like to live in Spain." }, accept: ["i'd like", "i would love", "i would like to"], hint: "The polite cousin of me gusta (A1). That -ía ending IS the conditional — you'll see it on every verb in this lesson." },
        { id: "es-u37l1-podria", type: "vocab", front: "podría", reading: "podria", meaning: "I could", example: { jp: "¿Podría abrir la ventana?", en: "Could I open the window?" }, accept: ["could", "would be able to", "he could"], hint: "The soft, polite \"could\", from poder (A1). ¿Podría…? is how you ask a favour." },
        { id: "es-u37l1-seria", type: "vocab", front: "sería", reading: "seria", meaning: "it would be", example: { jp: "Sería muy bueno para todos.", en: "It would be very good for everyone." }, accept: ["that would be", "it'd be", "this would be"], hint: "The conditional of ser. Sería genial — that'd be great." },
        { id: "es-u37l1-deberia", type: "vocab", front: "debería", reading: "deberia", meaning: "I should", example: { jp: "Debería trabajar más hoy.", en: "I should work more today." }, accept: ["i ought to", "i'd better", "he should"], hint: "The gentle \"should\" — debería descansar lands softer than an order. From deber (this unit, lesson 2)." },
        { id: "es-u37l1-tendriaque", type: "vocab", front: "tendría que", reading: "tendriaque", meaning: "I would have to", example: { jp: "Tendría que estudiar más.", en: "I would have to study more." }, accept: ["i'd have to", "he would have to"], hint: "The conditional of tener que — what you'd have to do, in theory rather than now." },
        { id: "es-u37l1-haria", type: "vocab", front: "haría", reading: "haria", meaning: "I would do", example: { jp: "¿Qué harías en mi lugar?", en: "What would you do in my place?" }, accept: ["i'd make", "i would make", "he would do"], hint: "From hacer (A1). ¿Qué harías tú? — What would you do?" },
      ],
    },
    {
      id: "es-u37l2",
      unit: 37,
      lesson: 2,
      title: "Have to, need to, manage to",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what's necessary and what you manage — tener que, hay que, deber, conseguir, intentar, dejar de.",
      items: [
        { id: "es-u37l2-tenerque", type: "vocab", front: "tener que", reading: "tenerque", meaning: "to have to", example: { jp: "Tengo que trabajar mañana.", en: "I have to work tomorrow." }, accept: ["to must", "have got to", "must"], hint: "tener que + verb = have to — the strongest obligation word. Tengo que ir, I have to go." },
        { id: "es-u37l2-hayque", type: "vocab", front: "hay que", reading: "hayque", meaning: "one must", example: { jp: "Hay que estudiar para el examen.", en: "One must study for the exam." }, accept: ["you have to", "it's necessary to", "one has to"], hint: "Impersonal — no subject: hay que trabajar, one has to work. A general rule, not about you in particular." },
        { id: "es-u37l2-deber", type: "vocab", front: "deber", reading: "deber", meaning: "must", example: { jp: "Debo llamar a mi madre.", en: "I must call my mother." }, accept: ["to have to", "ought to", "should"], hint: "An obligation you feel inside — debo = I must/should. Softer than tener que. Its conditional debería (lesson 1) is gentler still." },
        { id: "es-u37l2-conseguir", type: "vocab", front: "conseguir", reading: "conseguir", meaning: "to manage to", example: { jp: "Consigo terminar el trabajo.", en: "I manage to finish the work." }, accept: ["to get", "to achieve", "to manage"], hint: "conseguir + verb = manage to. On its own, to get or obtain: consigo un billete." },
        { id: "es-u37l2-intentar", type: "vocab", front: "intentar", reading: "intentar", meaning: "to try", example: { jp: "Intento hablar español todos los días.", en: "I try to speak Spanish every day." }, accept: ["to attempt", "to try to"], hint: "intentar + verb = try to. A twin of tratar de (u32)." },
        { id: "es-u37l2-dejarde", type: "vocab", front: "dejar de", reading: "dejarde", meaning: "to stop (doing)", example: { jp: "Dejo de trabajar a las seis.", en: "I stop working at six." }, accept: ["to give up", "to quit"], hint: "dejar de + verb = stop doing. dejar (A1) alone is to leave behind; add de and it means to quit." },
      ],
    },
    {
      id: "es-u37l3",
      unit: 37,
      lesson: 3,
      title: "Comparing two things",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Compare two things — más grande que, menos caro que, tan alto como, mejor, peor, igual que.",
      items: [
        { id: "es-u37l3-masque", type: "vocab", front: "más que", reading: "masque", meaning: "more than", example: { jp: "Madrid es más grande que mi ciudad.", en: "Madrid is bigger than my city." }, accept: ["bigger than", "-er than", "more than"], hint: "One pattern for every adjective: más grande que, más caro que. Spanish has no \"-er\" ending — it always uses más." },
        { id: "es-u37l3-menosque", type: "vocab", front: "menos que", reading: "menosque", meaning: "less than", example: { jp: "El tren es menos caro que el avión.", en: "The train is less expensive than the plane." }, accept: ["fewer than", "not as as", "less than"], hint: "The mirror of más que — menos … que." },
        { id: "es-u37l3-tancomo", type: "vocab", front: "tan como", reading: "tancomo", meaning: "as ... as", example: { jp: "Mi hermana es tan alta como yo.", en: "My sister is as tall as me." }, accept: ["just as as", "equally"], hint: "tan + adjective + como: tan alto como, as tall as. Block 1's tan (u22) is \"so\"; add como and it compares." },
        { id: "es-u37l3-mejor", type: "vocab", front: "mejor", reading: "mejor", meaning: "better", example: { jp: "Este café es mejor que el otro.", en: "This coffee is better than the other one." }, accept: ["better"], hint: "Never \"más bueno\" — bueno has its own comparative, mejor, exactly like good → better." },
        { id: "es-u37l3-peor", type: "vocab", front: "peor", reading: "peor", meaning: "worse", example: { jp: "Hoy el tiempo es peor que ayer.", en: "Today the weather is worse than yesterday." }, accept: ["worse"], hint: "And malo's own comparative — never \"más malo\". bad → worse." },
        { id: "es-u37l3-igualque", type: "vocab", front: "igual que", reading: "igualque", meaning: "the same as", example: { jp: "Tu casa es igual que mi casa.", en: "Your house is the same as my house." }, accept: ["just like", "equal to"], hint: "igual que = the same as. Es igual que el mío — it's the same as mine." },
      ],
    },
    {
      id: "es-u37l4",
      unit: 37,
      lesson: 4,
      title: "The most and the least",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Pick out the top and the bottom — el más alto, el menos caro, el mejor, el peor, tanto como, cada vez más.",
      items: [
        { id: "es-u37l4-elmas", type: "vocab", front: "el más", reading: "elmas", meaning: "the most", example: { jp: "Es el más alto de la clase.", en: "He's the tallest in the class." }, accept: ["the most", "the -est"], hint: "The superlative is just el/la/los + más: el más alto. And it's de la clase — Spanish says \"of the class\", not \"in\"." },
        { id: "es-u37l4-elmenos", type: "vocab", front: "el menos", reading: "elmenos", meaning: "the least", example: { jp: "Es el día menos frío del año.", en: "It's the least cold day of the year." }, accept: ["the least"], hint: "el/la + menos — el menos caro, the least expensive." },
        { id: "es-u37l4-elmejor", type: "vocab", front: "el mejor", reading: "elmejor", meaning: "the best", example: { jp: "Es el mejor libro del año.", en: "It's the best book of the year." }, accept: ["the best"], hint: "el mejor, la mejor — the irregular superlative of bueno. Never \"el más bueno\"." },
        { id: "es-u37l4-elpeor", type: "vocab", front: "el peor", reading: "elpeor", meaning: "the worst", example: { jp: "Es el peor día de la semana.", en: "It's the worst day of the week." }, accept: ["the worst"], hint: "el peor, la peor — the superlative of malo." },
        { id: "es-u37l4-tantocomo", type: "vocab", front: "tanto como", reading: "tantocomo", meaning: "as much as", example: { jp: "Trabajo tanto como tú.", en: "I work as much as you." }, accept: ["as much as"], hint: "tanto como compares amounts and verbs; tan … como (lesson 3) compares adjectives. Trabajo tanto como tú." },
        { id: "es-u37l4-cadavezmas", type: "vocab", front: "cada vez más", reading: "cadavezmas", meaning: "more and more", example: { jp: "Hay cada vez más coches en la ciudad.", en: "There are more and more cars in the city." }, accept: ["increasingly", "more and more"], hint: "Literally \"each time more\". Its mirror is cada vez menos, less and less." },
      ],
    },
  ],
};
