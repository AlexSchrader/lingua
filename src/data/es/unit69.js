// ES Unit 69 — Un poco de gramática · 4 (slot: grammar-6 — linked and subordinate clauses) — B1
// Grammar has no item type: every subordinator is function-word vocab whose example
// carries the pattern (CLAUDE.md), as in A2 u36/u37.
//
// THE SUBJUNCTIVE is the real content of this unit, and — unlike A2 u36, which
// deliberately kept out of it — B1 owns it. It is taught the way A2 taught the
// past: as a FIXED PAIRING (this conjunction ⇒ this verb shape), with the rule
// shown in the examples and stated in the hints, never as a paradigm to memorise.
//
// SCOPE BOUNDARY: A2 u36 already owns the everyday relatives (que, quien, lo que,
// el que, cuyo, donde, el cual, lo cual, a pesar de, hasta que) and the connectors
// (ya que, así que, por lo que). Block 1's u51 opinion / u52 cause-effect will hold
// the sentence-adverb connectors. So this unit takes only what neither owns: the
// SUBJUNCTIVE-TRIGGERING subordinators (l1-l2), the PREPOSITIONAL relatives A2
// left out (l3: a quien, del que, al que…), and the clause-openers (l4). Every
// front checked against the live A1+A2 corpus.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT69 = {
  id: "es-u69",
  lang: "es",
  title: "Un poco de gramática · 4",
  order: 69,
  stage: "b1",
  lessons: [
    {
      id: "es-u69l1",
      unit: 69,
      lesson: 1,
      title: "Granting a point",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Concede something and still disagree — a pesar de que, por más que, aun cuando, si bien, el hecho de que, a no ser que.",
      items: [
        { id: "es-u69l1-apesardeque", type: "vocab", front: "a pesar de que", reading: "apesardeque", meaning: "in spite of the fact that", example: { jp: "A pesar de que llueve, salimos a la calle igual que siempre.", en: "In spite of the fact that it's raining, we go out just as always." }, accept: ["although", "even though", "despite the fact that"], hint: "a pesar de (u36) takes a noun; a pesar de que takes a whole clause. Indicative for a fact, subjunctive for a maybe." },
        { id: "es-u69l1-pormasque", type: "vocab", front: "por más que", reading: "pormasque", meaning: "however much", example: { jp: "Por más que lo intento, no consigo entender este problema.", en: "However much I try, I can't manage to understand this problem." }, accept: ["no matter how much", "try as I might"], hint: "+ indicative for a real, repeated effort; + subjunctive for a hypothetical. With a noun: por más dinero que tenga." },
        { id: "es-u69l1-auncuando", type: "vocab", front: "aun cuando", reading: "auncuando", meaning: "even though", example: { jp: "Aun cuando sea difícil, hay que intentarlo hasta el final.", en: "Even though it's hard, you have to try until the end." }, accept: ["even if", "even when"], hint: "Stronger than aunque — it stresses that the two things are true at once. + subjunctive (sea) for a hypothetical." },
        { id: "es-u69l1-sibien", type: "vocab", front: "si bien", reading: "sibien", meaning: "although", example: { jp: "Si bien la idea es buena, no tenemos dinero para hacerla realidad.", en: "Although the idea is good, we don't have the money to make it happen." }, accept: ["while", "albeit"], hint: "A formal 'although', always indicative — common in writing. Not to be confused with si (if) plus bien." },
        { id: "es-u69l1-elhechodeque", type: "vocab", front: "el hecho de que", reading: "elhechodeque", meaning: "the fact that", example: { jp: "El hecho de que nadie haya respondido ya es una respuesta en sí misma.", en: "The fact that nobody has replied is already an answer in itself." }, accept: ["the very fact that", "that fact that"], hint: "Turns a whole clause into a noun so it can be the subject. Usually + subjunctive: el hecho de que sea así." },
        { id: "es-u69l1-anoserque", type: "vocab", front: "a no ser que", reading: "anoserque", meaning: "unless", example: { jp: "No iré a la fiesta, a no ser que vengas tú también.", en: "I won't go to the party, unless you come too." }, accept: ["except if", "save that"], hint: "= a menos que (next lesson). Always + subjunctive: a no ser que venga." },
      ],
    },
    {
      id: "es-u69l2",
      unit: 69,
      lesson: 2,
      title: "Clauses that need the subjunctive",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the subjunctive triggers — para que, antes de que, sin que, a menos que, con tal de que, en caso de que.",
      items: [
        { id: "es-u69l2-paraque", type: "vocab", front: "para que", reading: "paraque", meaning: "so that", example: { jp: "Hablo despacio para que todos me entiendan bien.", en: "I speak slowly so that everyone understands me well." }, accept: ["in order that", "so as to"], hint: "The purpose 'so that', with a NEW subject and always the subjunctive: para que entiendan, never 'entienden'. para + infinitive keeps one subject." },
        { id: "es-u69l2-antesdeque", type: "vocab", front: "antes de que", reading: "antesdeque", meaning: "before", example: { jp: "Salgamos antes de que empiece a llover, que el cielo está muy oscuro.", en: "Let's leave before it starts to rain, because the sky is very dark." }, accept: ["before (something happens)", "prior to"], hint: "antes de (u21) + verb keeps one subject; antes de que + subjunctive when the subject changes: antes de que empiece." },
        { id: "es-u69l2-sinque", type: "vocab", front: "sin que", reading: "sinque", meaning: "without", example: { jp: "No puedo salir de casa sin que mi madre lo sepa.", en: "I can't leave the house without my mother knowing." }, accept: ["without (someone doing)", "with nobody"], hint: "sin (A1) + verb when the subject is the same (sin hablar); sin que + subjunctive when it changes: sin que lo sepa." },
        { id: "es-u69l2-amenosque", type: "vocab", front: "a menos que", reading: "amenosque", meaning: "unless", example: { jp: "Saldremos a las ocho, a menos que haya algún problema con el tren.", en: "We'll leave at eight, unless there's some problem with the train." }, accept: ["unless", "except if"], hint: "The twin of a no ser que (lesson 1). Always + subjunctive: a menos que haya." },
        { id: "es-u69l2-contaldeque", type: "vocab", front: "con tal de que", reading: "contaldeque", meaning: "provided that", example: { jp: "Te dejo el coche con tal de que lo cuides bien.", en: "I'll lend you the car provided that you look after it well." }, accept: ["as long as", "so long as"], hint: "A condition, + subjunctive. con tal de + infinitive with one subject: con tal de ayudar." },
        { id: "es-u69l2-encasodeque", type: "vocab", front: "en caso de que", reading: "encasodeque", meaning: "in case", example: { jp: "Lleva algo de dinero en caso de que quieras comprar un recuerdo.", en: "Take some money in case you want to buy a souvenir." }, accept: ["should it happen that", "in the event that"], hint: "+ subjunctive. en caso de + noun otherwise: en caso de duda, in case of doubt." },
      ],
    },
    {
      id: "es-u69l3",
      unit: 69,
      lesson: 3,
      title: "Relatives after a preposition",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Attach a clause after a preposition — a quien, del que, al que, en el que, con quien, por el que.",
      items: [
        { id: "es-u69l3-aquien", type: "vocab", front: "a quien", reading: "aquien", meaning: "to whom", example: { jp: "La persona a quien llamé ayer no estaba en casa.", en: "The person I called yesterday wasn't at home." }, accept: ["whom", "the one to whom"], hint: "a + quien, only for people, when the verb takes a: la persona a quien ayudo. For things, use al que." },
        { id: "es-u69l3-delque", type: "vocab", front: "del que", reading: "delque", meaning: "of which", example: { jp: "Ese es el tema del que te hablé el otro día.", en: "That's the topic I told you about the other day." }, accept: ["about which", "from which"], hint: "de + el que. Agrees with the noun: de la que, de los que, de las que." },
        { id: "es-u69l3-alque", type: "vocab", front: "al que", reading: "alque", meaning: "to which", example: { jp: "El país al que quiero viajar está muy lejos de aquí.", en: "The country I want to travel to is very far from here." }, accept: ["to which", "the one to which"], hint: "a + el que. El equipo al que apoyo — the team I support." },
        { id: "es-u69l3-enelque", type: "vocab", front: "en el que", reading: "enelque", meaning: "in which", example: { jp: "La casa en la que vivo ahora es mucho más grande que la anterior.", en: "The house I live in now is much bigger than the previous one." }, accept: ["where", "in which"], hint: "en + el que. Interchangeable with donde for places: la casa en la que vivo = la casa donde vivo (u36)." },
        { id: "es-u69l3-conquien", type: "vocab", front: "con quien", reading: "conquien", meaning: "with whom", example: { jp: "La persona con quien vivo trabaja en el mismo sitio que yo.", en: "The person I live with works in the same place as me." }, accept: ["with whom", "the one with whom"], hint: "con + quien, for people. For things: con el que — el bolígrafo con el que escribo." },
        { id: "es-u69l3-porelque", type: "vocab", front: "por el que", reading: "porelque", meaning: "for which", example: { jp: "Esa es la razón por la que no vine a la reunión de ayer.", en: "That's the reason why I didn't come to yesterday's meeting." }, accept: ["the reason why", "on account of which"], hint: "por + el que. la razón por la que = the reason why, a very common fixed phrase." },
      ],
    },
    {
      id: "es-u69l4",
      unit: 69,
      lesson: 4,
      title: "Starting from the clause",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Open a sentence with a clause — es verdad que, puede que, es una pena que, más vale que, lo que importa, de ahí que.",
      items: [
        { id: "es-u69l4-esverdadque", type: "vocab", front: "es verdad que", reading: "esverdadque", meaning: "it's true that", example: { jp: "Es verdad que el precio ha subido, pero la calidad también es mejor.", en: "It's true that the price has gone up, but the quality is also better." }, accept: ["admittedly", "granted that"], hint: "Concede a point before turning it round with pero. Indicative: es verdad que es así." },
        { id: "es-u69l4-puedeque", type: "vocab", front: "puede que", reading: "puedeque", meaning: "it may be that", example: { jp: "Puede que llueva mañana, así que llévate el abrigo por si acaso.", en: "It may rain tomorrow, so take your coat just in case." }, accept: ["maybe", "it might be that", "perhaps"], hint: "Always + subjunctive: puede que sea, puede que venga. Heavier than quizás (u40)." },
        { id: "es-u69l4-esunapenaque", type: "vocab", front: "es una pena que", reading: "esunapenaque", meaning: "it's a shame that", example: { jp: "Es una pena que no vengas a la fiesta, porque todos quieren verte.", en: "It's a shame you're not coming to the party, because everyone wants to see you." }, accept: ["it's a pity that", "too bad that"], hint: "+ subjunctive: es una pena que sea así. Una pena is a shame or a sorrow." },
        { id: "es-u69l4-masvaleque", type: "vocab", front: "más vale que", reading: "masvaleque", meaning: "you'd better", example: { jp: "Más vale que salgas ya, porque el tren no va a esperarte.", en: "You'd better leave now, because the train isn't going to wait for you." }, accept: ["it's better that", "it's best that"], hint: "Advice, + subjunctive: más vale que vengas. From valer, to be worth." },
        { id: "es-u69l4-loqueimporta", type: "vocab", front: "lo que importa", reading: "loqueimporta", meaning: "what matters", example: { jp: "Lo que importa es intentarlo, y no ganar siempre.", en: "What matters is to try, and not to win every time." }, accept: ["the thing that matters", "what counts"], hint: "Built on lo que (u36). Note the es that answers it: lo que importa ES…" },
        { id: "es-u69l4-deahique", type: "vocab", front: "de ahí que", reading: "deahique", meaning: "hence", example: { jp: "Trabaja demasiado, de ahí que esté siempre cansado y de mal humor.", en: "He works too much, which is why he's always tired and in a bad mood." }, accept: ["which is why", "therefore", "that's why"], hint: "A formal 'that's why', and + subjunctive: de ahí que esté, not 'está'." },
      ],
    },
  ],
};
