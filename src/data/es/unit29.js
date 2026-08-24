// ES Unit 29 — Las palabras de enlace (slot: connecting-words) — A2
// ─────────────────────────────────────────────────────────────────────────────
// This is a GRAMMAR unit dressed as vocabulary — the connectors that turn strings
// of short sentences into real speech. A1 gives only the simplest joins: y, o,
// pero, porque, si, cuando, aunque, también, como, entonces, mientras (u21).
//
// The centrepiece is unaccented `que`. A1 teaches only accented qué, the question
// word ("¿qué es?"). But unaccented que — the relative ("el libro QUE leo") and
// the complementiser ("creo QUE", "tengo QUE") — is the single most frequent word
// in Spanish and is taught NOWHERE in A1 or in blocks 21–28. Unit 23's header
// flagged this and routed its examples around it; this unit is where the debt is
// paid. Lesson 1 teaches que and the verbs and constructions that require it
// (tener que, hay que, creer que, lo que); the rest of the unit adds cause,
// contrast and the relative words donde/quien — each the unaccented partner of an
// A1 question word (dónde, quién). Every A1 connector is used and re-taught nowhere.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT29 = {
  id: "es-u29",
  lang: "es",
  title: "Las palabras de enlace",
  order: 29,
  stage: "a2",
  lessons: [
    // Lesson 1: que — the word that joins everything
    {
      id: "es-u29l1",
      unit: 29,
      lesson: 1,
      title: "The word 'que'",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the word Spanish can't drop — que — to link clauses: el libro que leo, tengo que, creo que, lo que quiero.",
      items: [
        { id: "es-u29l1-que", type: "vocab", front: "que", reading: "que", meaning: "that", example: { jp: "El libro que leo es muy bueno.", en: "The book that I'm reading is very good." }, accept: ["which", "who", "that (relative)"], hint: "Unaccented que joins two clauses — the book THAT I read. Accented qué (A1) asks a question. This que is the commonest word in the language." },
        { id: "es-u29l1-tenerque", type: "vocab", front: "tener que", reading: "tenerque", meaning: "to have to", example: { jp: "Tengo que estudiar hoy.", en: "I have to study today." }, accept: ["must", "have got to", "need to"], hint: "tener (A1) + que + a verb = obligation you feel: tengo que trabajar. The single most useful que there is." },
        { id: "es-u29l1-hayque", type: "vocab", front: "hay que", reading: "hayque", meaning: "one must", example: { jp: "Hay que comer bien.", en: "One must eat well." }, accept: ["you have to", "it's necessary to", "one has to"], hint: "hay (A1) + que = a general rule for everyone: hay que estudiar. tener que is personal, hay que is for all." },
        { id: "es-u29l1-creer", type: "vocab", front: "creer", reading: "creer", meaning: "to believe", example: { jp: "Creo que hoy llueve.", en: "I think it's raining today." }, accept: ["to think", "reckon"], hint: "creo que — I think that. Spanish can't drop the que the way English drops \"that\". Creo que sí — I think so." },
        { id: "es-u29l1-loque", type: "vocab", front: "lo que", reading: "loque", meaning: "what", example: { jp: "Lo que quiero es un café.", en: "What I want is a coffee." }, accept: ["that which", "the thing that"], hint: "lo que = \"the thing that\", not a question. No entiendo lo que dices — I don't get what you're saying. Question \"what\" is qué (A1)." },
        { id: "es-u29l1-pensar", type: "vocab", front: "pensar", reading: "pensar", meaning: "to think", example: { jp: "Pienso que mañana hace sol.", en: "I think it'll be sunny tomorrow." }, accept: ["plan", "intend"], hint: "pensar que — think that; pensar en — think about someone. Careful: pienso, piensas — the e becomes ie." },
      ],
    },
    // Lesson 2: cause and result
    {
      id: "es-u29l2",
      unit: 29,
      lesson: 2,
      title: "Cause and result",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Link a cause to its result — así que, ya que, por eso, gracias a, por lo tanto.",
      items: [
        { id: "es-u29l2-asique", type: "vocab", front: "así que", reading: "asique", meaning: "so", example: { jp: "Llueve, así que no salgo.", en: "It's raining, so I'm not going out." }, accept: ["therefore", "and so"], hint: "Puts the result after the cause: cause, así que result. así on its own means \"like this\"." },
        { id: "es-u29l2-yaque", type: "vocab", front: "ya que", reading: "yaque", meaning: "since", example: { jp: "Ya que no trabajas hoy, descansamos.", en: "Since you're not working today, let's rest." }, accept: ["given that", "seeing as", "as"], hint: "A reason both speakers already know — like porque but usually at the start. From ya (A1), already." },
        { id: "es-u29l2-poreso", type: "vocab", front: "por eso", reading: "poreso", meaning: "that's why", example: { jp: "Estoy cansado; por eso no salgo.", en: "I'm tired; that's why I'm not going out." }, accept: ["for that reason", "hence"], hint: "por (A1) + eso (A1, that): literally \"for that\". Points back at the cause you just gave." },
        { id: "es-u29l2-graciasa", type: "vocab", front: "gracias a", reading: "graciasa", meaning: "thanks to", example: { jp: "Gracias a mi amigo, tengo trabajo.", en: "Thanks to my friend, I have a job." }, accept: ["owing to", "because of (positive)"], hint: "For a cause you're glad of. From gracias (A1). The negative version is por culpa de — because of (someone's fault)." },
        { id: "es-u29l2-pues", type: "vocab", front: "pues", reading: "pues", meaning: "well", example: { jp: "Tengo hambre, pues como algo.", en: "I'm hungry, so I'll eat something." }, accept: ["then", "so", "since"], hint: "A soft filler — \"well…\", \"then\" — and a casual \"because\". You'll hear it start half the sentences in Spain." },
        { id: "es-u29l2-porlotanto", type: "vocab", front: "por lo tanto", reading: "porlotanto", meaning: "therefore", example: { jp: "No hay dinero; por lo tanto, no compro nada.", en: "There's no money; therefore, I'm not buying anything." }, accept: ["consequently", "so"], hint: "The formal cousin of así que — the one you'd write, not shout. Weighs the result more heavily." },
      ],
    },
    // Lesson 3: adding and contrasting
    {
      id: "es-u29l3",
      unit: 29,
      lesson: 3,
      title: "Adding and contrasting",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Add to and push against an idea — además, sin embargo, ni, sino, tampoco.",
      items: [
        { id: "es-u29l3-ademas", type: "vocab", front: "además", reading: "ademas", meaning: "besides", example: { jp: "Es caro. Además, no me gusta.", en: "It's expensive. Besides, I don't like it." }, accept: ["moreover", "what's more", "also"], hint: "Piles on another reason. además de + noun = in addition to: además del precio…" },
        { id: "es-u29l3-sinembargo", type: "vocab", front: "sin embargo", reading: "sinembargo", meaning: "however", example: { jp: "Es caro; sin embargo, me gusta.", en: "It's expensive; however, I like it." }, accept: ["nevertheless", "even so", "yet"], hint: "A stronger, more written pero (A1). sin (A1) here doesn't mean \"without\" — take the phrase whole." },
        { id: "es-u29l3-ni", type: "vocab", front: "ni", reading: "ni", meaning: "nor", example: { jp: "No tengo tiempo ni dinero.", en: "I have neither time nor money." }, accept: ["not even", "neither"], hint: "The negative of y (A1). no… ni… = not… nor…; ni… ni… = neither… nor…" },
        { id: "es-u29l3-sino", type: "vocab", front: "sino", reading: "sino", meaning: "but rather", example: { jp: "No quiero té, sino café.", en: "I don't want tea, but rather coffee." }, accept: ["but instead", "rather"], hint: "Corrects after a negative: not X, sino Y. pero (A1) just adds; sino replaces. One word — don't confuse it with si no, \"if not\"." },
        { id: "es-u29l3-tampoco", type: "vocab", front: "tampoco", reading: "tampoco", meaning: "neither", example: { jp: "Yo no como carne. Tú tampoco.", en: "I don't eat meat. Neither do you." }, accept: ["not either", "nor"], hint: "The negative of también (A1): \"me neither\" is yo tampoco. También for the positive, tampoco for the negative." },
        { id: "es-u29l3-mientrasque", type: "vocab", front: "mientras que", reading: "mientrasque", meaning: "whereas", example: { jp: "Yo trabajo, mientras que tú descansas.", en: "I work, whereas you rest." }, accept: ["while (contrast)", "on the other hand"], hint: "mientras (u21) is \"while\" in time; mientras que draws a contrast between two things. The que changes the job." },
      ],
    },
    // Lesson 4: conditions and the relative words
    {
      id: "es-u29l4",
      unit: 29,
      lesson: 4,
      title: "Relative words",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Connect with precision — donde, quien, en cuanto, a pesar de, es decir.",
      items: [
        { id: "es-u29l4-donde", type: "vocab", front: "donde", reading: "donde", meaning: "where", example: { jp: "La ciudad donde vivo es pequeña.", en: "The city where I live is small." }, accept: ["in which", "the place where"], hint: "Unaccented donde joins clauses — the city WHERE I live. Accented dónde (A1) asks the question. Same split as que/qué." },
        { id: "es-u29l4-quien", type: "vocab", front: "quien", reading: "quien", meaning: "who", example: { jp: "Es el amigo con quien vivo.", en: "He's the friend I live with." }, accept: ["whom", "the one who"], hint: "Unaccented quien, the relative — con quien, with whom. Accented quién (A1) asks \"who?\". In speech people often just use que." },
        { id: "es-u29l4-encuanto", type: "vocab", front: "en cuanto", reading: "encuanto", meaning: "as soon as", example: { jp: "En cuanto llego a casa, descanso.", en: "As soon as I get home, I rest." }, accept: ["the moment that", "once"], hint: "Marks the very next moment. Don't confuse it with en cuanto a, \"as for / regarding\"." },
        { id: "es-u29l4-apesarde", type: "vocab", front: "a pesar de", reading: "apesarde", meaning: "in spite of", example: { jp: "A pesar de la lluvia, salgo.", en: "In spite of the rain, I'm going out." }, accept: ["despite", "even with"], hint: "a pesar de + a noun. From pesar, to weigh — \"weighing against\" the obstacle." },
        { id: "es-u29l4-esdecir", type: "vocab", front: "es decir", reading: "esdecir", meaning: "that is", example: { jp: "Trabajo poco, es decir, tres horas.", en: "I work little, that is, three hours." }, accept: ["in other words", "I mean", "namely"], hint: "es (A1) + decir (A1): \"that is to say\". You use it to restate yourself more clearly. o sea does the same job." },
        { id: "es-u29l4-porsiacaso", type: "vocab", front: "por si acaso", reading: "porsiacaso", meaning: "just in case", example: { jp: "Llevo un abrigo por si acaso.", en: "I'm taking a coat just in case." }, accept: ["in case", "to be safe"], hint: "Built on si (A1), if. Often shortened to just por si: llevo agua por si." },
      ],
    },
  ],
};
