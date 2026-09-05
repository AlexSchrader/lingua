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
        { id: "es-u37l1-megustaria", type: "vocab", front: "me gustaría", reading: "megustaria", meaning: "I would like", example: { jp: "Me gustaría vivir en España.", en: "I would like to live in Spain." }, drill: { jp: "Me gustaría vivir en España", en: "I would like to live in Spain" }, accept: ["i'd like", "i would love", "i would like to"], hint: "The polite cousin of me gusta (A1). That -ía ending IS the conditional — you'll see it on every verb in this lesson." },
        { id: "es-u37l1-podria", type: "vocab", front: "podría", reading: "podria", meaning: "I could", example: { jp: "¿Podría abrir la ventana?", en: "Could I open the window?" }, drill: { jp: "Podría trabajar el sábado", en: "I could work on Saturday" }, accept: ["could", "would be able to", "he could"], hint: "The soft, polite \"could\", from poder (A1). ¿Podría…? is how you ask a favour." },
        { id: "es-u37l1-seria", type: "vocab", front: "sería", reading: "seria", meaning: "it would be", example: { jp: "Sería muy bueno para todos.", en: "It would be very good for everyone." }, drill: { jp: "Sería mejor ir en tren", en: "It would be better to go by train" }, accept: ["that would be", "it'd be", "this would be"], hint: "The conditional of ser. Sería genial — that'd be great." },
        { id: "es-u37l1-deberia", type: "vocab", front: "debería", reading: "deberia", meaning: "I should", example: { jp: "Debería trabajar más hoy.", en: "I should work more today." }, drill: { jp: "Debería estudiar más español", en: "I should study more Spanish" }, accept: ["i ought to", "i'd better", "he should"], hint: "The gentle \"should\" — debería descansar lands softer than an order. From deber (this unit, lesson 2)." },
        { id: "es-u37l1-tendriaque", type: "vocab", front: "tendría que", reading: "tendriaque", meaning: "I would have to", example: { jp: "Tendría que estudiar más.", en: "I would have to study more." }, drill: { jp: "Tendría que salir temprano", en: "I would have to leave early" }, accept: ["i'd have to", "he would have to"], hint: "The conditional of tener que — what you'd have to do, in theory rather than now." },
        { id: "es-u37l1-haria", type: "vocab", front: "haría", reading: "haria", meaning: "I would do", example: { jp: "Yo haría lo mismo en tu lugar.", en: "I would do the same in your place." }, drill: { jp: "Haría el viaje otra vez", en: "I would do the trip again" }, accept: ["i'd make", "i would make", "he would do"], hint: "From hacer (A1). ¿Qué harías tú? — What would you do?" },
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
        { id: "es-u37l2-conseguir", type: "vocab", front: "conseguir", reading: "conseguir", meaning: "to manage to", example: { jp: "Consigo terminar el trabajo.", en: "I manage to finish the work." }, drill: { jp: "Quiero conseguir un trabajo mejor", en: "I want to get a better job" }, accept: ["to get", "to achieve", "to manage"], hint: "conseguir + verb = manage to. On its own, to get or obtain: consigo un billete." },
        { id: "es-u37l2-intentar", type: "vocab", front: "intentar", reading: "intentar", meaning: "to try", example: { jp: "Intento hablar español todos los días.", en: "I try to speak Spanish every day." }, drill: { jp: "Quiero intentar hablar español", en: "I want to try to speak Spanish" }, accept: ["to attempt", "to try to"], hint: "intentar + verb = try to. A twin of tratar de (u32)." },
        { id: "es-u37l2-dejarde", type: "vocab", front: "dejar de", reading: "dejarde", meaning: "to stop (doing)", example: { jp: "Dejo de trabajar a las seis.", en: "I stop working at six." }, drill: { jp: "Quiero dejar de trabajar tarde", en: "I want to stop working late" }, accept: ["to give up", "to quit"], hint: "dejar de + verb = stop doing. dejar (A1) alone is to leave behind; add de and it means to quit." },
        { id: "es-u37l2-hacefalta", type: "vocab", front: "hace falta", reading: "hacefalta", meaning: "it's necessary", example: { jp: "Hace falta estudiar más.", en: "You need to study more." }, drill: { jp: "Hace falta más tiempo", en: "More time is needed" }, accept: ["you need to", "it takes"], hint: "Impersonal, like hay que: hace falta + an infinitive. With a noun it means \"is needed\": hace falta pan." },
        { id: "es-u37l2-necesario", type: "vocab", front: "necesario", reading: "necesario", meaning: "necessary", example: { jp: "Es necesario dormir bien.", en: "It's necessary to sleep well." }, drill: { jp: "Es necesario llegar a tiempo", en: "It's necessary to arrive on time" }, accept: ["needed", "required"], hint: "es necesario + an infinitive. From necesitar (A1). Feminine necesaria." },
        { id: "es-u37l2-sercapazde", type: "vocab", front: "ser capaz de", reading: "sercapazde", meaning: "to be able to / capable of", example: { jp: "No fui capaz de terminar el trabajo a tiempo.", en: "I wasn't able to finish the work on time." }, accept: ["to be able to", "to be capable of", "to manage to"], hint: "ser capaz DE + infinitive. It is about capability, where poder is about permission or possibility." },
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
        { id: "es-u37l3-masque", type: "vocab", front: "más que", reading: "masque", meaning: "more than", example: { jp: "Madrid es más grande que mi ciudad.", en: "Madrid is bigger than my city." }, drill: { jp: "Trabajo más que mi hermano", en: "I work more than my brother" }, accept: ["bigger than", "-er than", "more than"], hint: "One pattern for every adjective: más grande que, más caro que. Spanish has no \"-er\" ending — it always uses más." },
        { id: "es-u37l3-menosque", type: "vocab", front: "menos que", reading: "menosque", meaning: "less than", example: { jp: "El tren es menos caro que el avión.", en: "The train is less expensive than the plane." }, drill: { jp: "Gasto menos que antes", en: "I spend less than before" }, accept: ["fewer than", "not as as", "less than"], hint: "The mirror of más que — menos … que." },
        { id: "es-u37l3-tancomo", type: "vocab", front: "tan como", reading: "tancomo", meaning: "as ... as", example: { jp: "Mi hermana es tan alta como yo.", en: "My sister is as tall as me." }, accept: ["just as as", "equally"], hint: "tan + adjective + como: tan alto como, as tall as. Block 1's tan (u22) is \"so\"; add como and it compares." },
        { id: "es-u37l3-mejor", type: "vocab", front: "mejor", reading: "mejor", meaning: "better", example: { jp: "Este café es mejor que el otro.", en: "This coffee is better than the other one." }, drill: { jp: "Este hotel es mejor que el otro", en: "This hotel is better than the other" }, accept: ["better"], hint: "Never \"más bueno\" — bueno has its own comparative, mejor, exactly like good → better." },
        { id: "es-u37l3-peor", type: "vocab", front: "peor", reading: "peor", meaning: "worse", example: { jp: "Hoy el tiempo es peor que ayer.", en: "Today the weather is worse than yesterday." }, drill: { jp: "El tiempo es peor que ayer", en: "The weather is worse than yesterday" }, accept: ["worse"], hint: "And malo's own comparative — never \"más malo\". bad → worse." },
        { id: "es-u37l3-igualque", type: "vocab", front: "igual que", reading: "igualque", meaning: "the same as", example: { jp: "Tu casa es igual que mi casa.", en: "Your house is the same as my house." }, drill: { jp: "Mi hijo es igual que su padre", en: "My son is just like his father" }, accept: ["just like", "equal to"], hint: "igual que = the same as. Es igual que el mío — it's the same as mine." },
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
        { id: "es-u37l4-elmas", type: "vocab", front: "el más", reading: "elmas", meaning: "the most", example: { jp: "Es el más alto de la clase.", en: "He's the tallest in the class." }, drill: { jp: "El más caro es el hotel", en: "The most expensive one is the hotel" }, accept: ["the most", "the -est"], hint: "The superlative is just el/la/los + más: el más alto. And it's de la clase — Spanish says \"of the class\", not \"in\"." },
        { id: "es-u37l4-elmenos", type: "vocab", front: "el menos", reading: "elmenos", meaning: "the least", example: { jp: "Es el día menos frío del año.", en: "It's the least cold day of the year." }, drill: { jp: "El menos caro es el tren", en: "The least expensive one is the train" }, accept: ["the least"], hint: "el/la + menos — el menos caro, the least expensive." },
        { id: "es-u37l4-elmejor", type: "vocab", front: "el mejor", reading: "elmejor", meaning: "the best", example: { jp: "Es el mejor libro del año.", en: "It's the best book of the year." }, drill: { jp: "El mejor café es el de casa", en: "The best coffee is the one at home" }, accept: ["the best"], hint: "el mejor, la mejor — the irregular superlative of bueno. Never \"el más bueno\"." },
        { id: "es-u37l4-elpeor", type: "vocab", front: "el peor", reading: "elpeor", meaning: "the worst", example: { jp: "Es el peor día de la semana.", en: "It's the worst day of the week." }, drill: { jp: "El peor día es el lunes", en: "The worst day is Monday" }, accept: ["the worst"], hint: "el peor, la peor — the superlative of malo." },
        { id: "es-u37l4-tantocomo", type: "vocab", front: "tanto como", reading: "tantocomo", meaning: "as much as", example: { jp: "Trabajo tanto como tú.", en: "I work as much as you." }, drill: { jp: "Trabajo tanto como mi hermano", en: "I work as much as my brother" }, accept: ["as much as"], hint: "tanto como compares amounts and verbs; tan … como (lesson 3) compares adjectives. Trabajo tanto como tú." },
        { id: "es-u37l4-cadavezmas", type: "vocab", front: "cada vez más", reading: "cadavezmas", meaning: "more and more", example: { jp: "Hay cada vez más coches en la ciudad.", en: "There are more and more cars in the city." }, drill: { jp: "Hace cada vez más frío", en: "It's getting colder and colder" }, accept: ["increasingly", "more and more"], hint: "Literally \"each time more\". Its mirror is cada vez menos, less and less." },
      ],
    },
  ],
};
