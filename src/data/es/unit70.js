// ES Unit 70 — Un poco de gramática · 5 (slot: grammar-7 — passive, causative, indirect) — B1
// The three ways Spanish avoids naming who did something — and the reason a B1
// learner suddenly cannot read a news report or a sign, despite knowing the words.
// None of this exists below B1 in the pathway.
//
// AUTHORING NOTE: the passive is taught as CHUNKS (fue construido, está fabricado)
// rather than as a rule, for the same reason A1 taught hablé instead of "the
// preterite": the learner already owns ser/estar and the participles, so these
// land as recognisable pieces and the pattern is shown before it is stated. The
// hints state the rule under each chunk. The impersonal/passive se (l3) is the
// structure Spanish actually prefers to the ser-passive, so it gets its own lesson.
// SCOPE BOUNDARY: no overlap with A2 or block 1 — none is about voice or impersonal
// structures. Every front checked against the live corpus.
//   FREE: Suiza, turista, restaurante, método, científico
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT70 = {
  id: "es-u70",
  lang: "es",
  title: "Un poco de gramática · 5",
  order: 70,
  stage: "b1",
  lessons: [
    {
      id: "es-u70l1",
      unit: 70,
      lesson: 1,
      title: "When the doer disappears",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read a passive sentence — fue construido, fue vendido, está fabricado, ser conocido, está prohibido, está permitido.",
      items: [
        { id: "es-u70l1-fueconstruido", type: "vocab", front: "fue construido", reading: "fueconstruido", meaning: "was built", example: { jp: "El puente fue construido en solo un año, aunque muchos lo veían muy difícil.", en: "The bridge was built in only a year, although many saw it as very difficult." }, drill: { jp: "El puente fue construido hace años", en: "The bridge was built years ago" }, accept: ["was constructed", "got built"], hint: "The passive with ser + participle, and the participle agrees: fue construido, fue construida, fueron construidos." },
        { id: "es-u70l1-fuevendido", type: "vocab", front: "fue vendido", reading: "fuevendido", meaning: "was sold", example: { jp: "La casa fue vendida en una semana, aunque el precio era muy alto.", en: "The house was sold in a week, although the price was very high." }, drill: { jp: "El piso fue vendido en marzo", en: "The flat was sold in March" }, accept: ["has been sold", "got sold"], hint: "Past passive: fue + participle. In speech Spanish prefers the passive-se (se vendió); ser-passive belongs to writing." },
        { id: "es-u70l1-estafabricado", type: "vocab", front: "está fabricado", reading: "estafabricado", meaning: "is made", example: { jp: "Este reloj está fabricado en Suiza, por eso es tan caro.", en: "This watch is made in Switzerland, which is why it's so expensive." }, drill: { jp: "El coche está fabricado en España", en: "The car is made in Spain" }, accept: ["is manufactured", "is produced"], hint: "estar + participle describes a state / result; ser + participle an action. está hecho a mano — it's handmade." },
        { id: "es-u70l1-serconocido", type: "vocab", front: "ser conocido", reading: "serconocido", meaning: "to be known", example: { jp: "Esta región es conocida por sus vinos, y por eso vienen muchos turistas.", en: "This region is known for its wines, and that's why many tourists come." }, drill: { jp: "Ser conocido no es fácil", en: "Being well known is not easy" }, accept: ["to be famous", "to be well known"], hint: "ser conocido POR algo — known for. From conocer (u40)." },
        { id: "es-u70l1-estaprohibido", type: "vocab", front: "está prohibido", reading: "estaprohibido", meaning: "it's forbidden", example: { jp: "Está prohibido usar el móvil en clase, así que lo dejo en la mochila.", en: "Using your phone in class is forbidden, so I leave it in my bag." }, drill: { jp: "Está prohibido fumar en el tren", en: "Smoking is forbidden on the train" }, accept: ["is not allowed", "is banned"], hint: "estar + prohibido. The opposite is está permitido. From prohibir, to forbid." },
        { id: "es-u70l1-estapermitido", type: "vocab", front: "está permitido", reading: "estapermitido", meaning: "it's allowed", example: { jp: "No está permitido comer aquí, pero sí se puede beber agua.", en: "Eating here isn't allowed, but you can drink water." }, drill: { jp: "Está permitido comer en el parque", en: "Eating in the park is allowed" }, accept: ["is permitted", "is OK"], hint: "The opposite of está prohibido, from permitir, to allow." },
      ],
    },
    {
      id: "es-u70l2",
      unit: 70,
      lesson: 2,
      title: "Making it happen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say you caused something rather than did it — hacer que, mandar, dejar que, obligar, impedir, provocar.",
      items: [
        { id: "es-u70l2-hacerque", type: "vocab", front: "hacer que", reading: "hacerque", meaning: "to make (someone do)", example: { jp: "La música hace que me sienta mejor, sobre todo cuando estoy triste.", en: "Music makes me feel better, especially when I'm sad." }, drill: { jp: "Quiero hacer que funcione", en: "I want to make it work" }, accept: ["to cause to", "to have (sb) do", "to get to"], hint: "hacer que + subjunctive = to make someone do something: hace que venga, hace que me sienta." },
        { id: "es-u70l2-mandar", type: "vocab", front: "mandar", reading: "mandar", meaning: "to have done", example: { jp: "Mi madre me mandó comprar el pan de camino a casa.", en: "My mother sent me to buy the bread on the way home." }, drill: { jp: "Quiero mandar arreglar el coche", en: "I want to have the car fixed" }, accept: ["to order", "to send", "to have (sth) done"], hint: "mandar + infinitive = to have something done, or order someone to do it: mandar hacer una copia." },
        { id: "es-u70l2-dejarque", type: "vocab", front: "dejar que", reading: "dejarque", meaning: "to let", example: { jp: "Mis padres no me dejan que salga de noche entre semana.", en: "My parents don't let me go out at night during the week." }, drill: { jp: "Quiero dejar que mi hija decida", en: "I want to let my daughter decide" }, accept: ["to allow", "to let someone"], hint: "dejar que + subjunctive = to let someone do something: deja que venga. dejar (A1) alone is to leave behind." },
        { id: "es-u70l2-conseguirque", type: "vocab", front: "conseguir que", reading: "conseguirque", meaning: "to get someone to / manage to make", example: { jp: "Conseguí que me cambiaran la fecha de la reunión.", en: "I got them to change the date of the meeting." }, drill: { jp: "Quiero conseguir que mi hijo estudie", en: "I want to get my son to study" }, accept: ["to get someone to", "to manage to make", "to succeed in getting"], hint: "conseguir que + subjunctive. You did not do the thing yourself — you caused it, with effort." },
        { id: "es-u70l2-lograrque", type: "vocab", front: "lograr que", reading: "lograrque", meaning: "to manage to get (someone) to", example: { jp: "Logramos que el jefe aceptara la idea.", en: "We managed to get the boss to accept the idea." }, drill: { jp: "Quiero lograr que todo funcione", en: "I want to manage to get it all working" }, accept: ["to manage to get", "to succeed in getting", "to bring it about that"], hint: "Same shape as conseguir que + subjunctive; lograr sounds a shade more formal." },
        { id: "es-u70l2-permitirque", type: "vocab", front: "permitir que", reading: "permitirque", meaning: "to allow (someone) to", example: { jp: "No permiten que los niños entren solos.", en: "They don't allow children to go in on their own." }, drill: { jp: "Quiero permitir que salgan temprano", en: "I want to allow them to leave early" }, accept: ["to allow to", "to let", "to permit"], hint: "permitir que + subjunctive. The mirror image of impedir que." },
      ],
    },
    {
      id: "es-u70l3",
      unit: 70,
      lesson: 3,
      title: "It does itself",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the impersonal se, which Spanish prefers to the real passive — se dice, se hace, se trata de, se encuentra, se supone que, se necesita.",
      items: [
        { id: "es-u70l3-sedice", type: "vocab", front: "se dice", reading: "sedice", meaning: "people say", example: { jp: "Se dice que este restaurante es el mejor de la ciudad, pero nunca he ido.", en: "People say this restaurant is the best in the city, but I've never been." }, drill: { jp: "Se dice que el tren llega tarde", en: "People say the train arrives late" }, accept: ["it is said", "they say"], hint: "Spanish reaches for se + verb where English uses a passive: se dice, se cree, se sabe. The commonest 'passive' of all." },
        { id: "es-u70l3-sehace", type: "vocab", front: "se hace", reading: "sehace", meaning: "that's done", example: { jp: "Llegar tarde a casa de alguien no se hace en España, aunque cambia según la región.", en: "Turning up late at someone's house isn't done in Spain, although it varies by region." }, drill: { jp: "Aquí se hace un café excelente", en: "They make an excellent coffee here" }, accept: ["it's the custom", "people do that"], hint: "Usually heard in the negative — no se hace is a rule of manners, not of grammar." },
        { id: "es-u70l3-setratade", type: "vocab", front: "se trata de", reading: "setratade", meaning: "it's about", example: { jp: "En este reportaje se trata del calentamiento y de sus efectos en la costa.", en: "This report is about global warming and its effects on the coast." }, drill: { jp: "Se trata de un problema serio", en: "It's about a serious problem" }, accept: ["it is a matter of", "it concerns"], hint: "Impersonal only — the subject is never a person. ¿De qué se trata? = What's it about?" },
        { id: "es-u70l3-seencuentra", type: "vocab", front: "se encuentra", reading: "seencuentra", meaning: "is located", example: { jp: "El museo se encuentra en el centro, muy cerca de la plaza mayor.", en: "The museum is located in the centre, very close to the main square." }, drill: { jp: "El hotel se encuentra en el centro", en: "The hotel is located in the centre" }, accept: ["is situated", "is found"], hint: "Where Spanish says se encuentra, English often just says 'is'. Also se encuentra bien = he feels well." },
        { id: "es-u70l3-sesuponeque", type: "vocab", front: "se supone que", reading: "sesuponeque", meaning: "it's supposed that", example: { jp: "Se supone que el tren llega a las ocho, pero casi siempre viene tarde.", en: "The train is supposed to arrive at eight, but it almost always comes late." }, drill: { jp: "Se supone que llueve mañana", en: "It's supposed to rain tomorrow" }, accept: ["supposedly", "one assumes"], hint: "se supone que = it's supposed to. From suponer, to suppose." },
        { id: "es-u70l3-senecesita", type: "vocab", front: "se necesita", reading: "senecesita", meaning: "is needed", example: { jp: "Se necesita más tiempo para hacerlo bien, así que no llegaremos hoy.", en: "More time is needed to do it well, so we won't get there today." }, drill: { jp: "Se necesita más tiempo", en: "More time is needed" }, accept: ["one needs", "is required"], hint: "The impersonal se again: se necesita ayuda = help is needed. Plural agrees: se necesitan voluntarios." },
      ],
    },
    {
      id: "es-u70l4",
      unit: 70,
      lesson: 4,
      title: "Reporting without a source",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report something you can't vouch for — al parecer, por lo visto, supuestamente, dar por hecho, resulta que, se rumorea que.",
      items: [
        { id: "es-u70l4-supuestamente", type: "vocab", front: "supuestamente", reading: "supuestamente", meaning: "supposedly", example: { jp: "Supuestamente, este método es el mejor, pero yo no lo veo tan claro.", en: "Supposedly this method is the best, but I don't see it so clearly." }, drill: { jp: "Supuestamente el tren llega pronto", en: "Supposedly the train arrives soon" }, accept: ["allegedly", "purportedly"], hint: "Carries doubt — you're signalling you don't fully believe it. From suponer." },
        { id: "es-u70l4-resultaque", type: "vocab", front: "resulta que", reading: "resultaque", meaning: "it turns out that", example: { jp: "Creía que no lo conocía, pero resulta que fuimos juntos a la escuela.", en: "I thought I didn't know him, but it turns out we went to school together." }, drill: { jp: "Resulta que el hotel está lleno", en: "It turns out the hotel is full" }, accept: ["as it turns out", "it emerges that"], hint: "Introduces a surprising fact. From resultar, to turn out." },
        { id: "es-u70l4-serumoreaque", type: "vocab", front: "se rumorea que", reading: "serumoreaque", meaning: "rumour has it", example: { jp: "Se rumorea que habrá cambios en la empresa, así que todos están nerviosos.", en: "Rumour has it there'll be changes at the company, so everyone is nervous." }, drill: { jp: "Se rumorea que el jefe se va", en: "Rumour has it the boss is leaving" }, accept: ["it's rumoured that", "people are saying"], hint: "From el rumor, the rumour. The strongest 'I can't vouch for this' marker." },
        { id: "es-u70l4-secreeque", type: "vocab", front: "se cree que", reading: "secreeque", meaning: "it is believed that", example: { jp: "Se cree que la decisión se tomó hace semanas.", en: "It is believed that the decision was taken weeks ago." }, drill: { jp: "Se cree que el dato es falso", en: "It is believed the figure is false" }, accept: ["it is believed that", "people believe that", "it is thought that"], hint: "Impersonal se: nobody is named as doing the believing, which is exactly the point." },
        { id: "es-u70l4-todoapuntaaque", type: "vocab", front: "todo apunta a que", reading: "todoapuntaaque", meaning: "everything suggests that", example: { jp: "Todo apunta a que el precio va a subir otra vez.", en: "Everything suggests the price is going to go up again." }, drill: { jp: "Todo apunta a que llueve mañana", en: "Everything suggests it will rain tomorrow" }, accept: ["everything suggests that", "all the signs are that", "it looks like"], hint: "Apuntar is to point. The evidence points somewhere — but you are not signing for it." },
        { id: "es-u70l4-presuntamente", type: "vocab", front: "presuntamente", reading: "presuntamente", meaning: "allegedly", example: { jp: "Presuntamente, la empresa conocía el problema desde hace meses.", en: "The company allegedly knew about the problem months ago." }, drill: { jp: "El dato es presuntamente falso", en: "The figure is allegedly false" }, accept: ["allegedly", "supposedly", "reportedly"], hint: "The word the press uses before a court has decided anything: el presunto autor, presuntamente." },
      ],
    },
  ],
};
