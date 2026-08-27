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
        { id: "es-u70l1-fueconstruido", type: "vocab", front: "fue construido", reading: "fueconstruido", meaning: "was built", example: { jp: "El puente fue construido en solo un año, aunque muchos lo veían muy difícil.", en: "The bridge was built in only a year, although many saw it as very difficult." }, accept: ["was constructed", "got built"], hint: "The passive with ser + participle, and the participle agrees: fue construido, fue construida, fueron construidos." },
        { id: "es-u70l1-fuevendido", type: "vocab", front: "fue vendido", reading: "fuevendido", meaning: "was sold", example: { jp: "La casa fue vendida en una semana, aunque el precio era muy alto.", en: "The house was sold in a week, although the price was very high." }, accept: ["has been sold", "got sold"], hint: "Past passive: fue + participle. In speech Spanish prefers the passive-se (se vendió); ser-passive belongs to writing." },
        { id: "es-u70l1-estafabricado", type: "vocab", front: "está fabricado", reading: "estafabricado", meaning: "is made", example: { jp: "Este reloj está fabricado en Suiza, por eso es tan caro.", en: "This watch is made in Switzerland, which is why it's so expensive." }, accept: ["is manufactured", "is produced"], hint: "estar + participle describes a state / result; ser + participle an action. está hecho a mano — it's handmade." },
        { id: "es-u70l1-serconocido", type: "vocab", front: "ser conocido", reading: "serconocido", meaning: "to be known", example: { jp: "Esta región es conocida por sus vinos, y por eso vienen muchos turistas.", en: "This region is known for its wines, and that's why many tourists come." }, accept: ["to be famous", "to be well known"], hint: "ser conocido POR algo — known for. From conocer (u40)." },
        { id: "es-u70l1-estaprohibido", type: "vocab", front: "está prohibido", reading: "estaprohibido", meaning: "it's forbidden", example: { jp: "Está prohibido usar el móvil en clase, así que lo dejo en la mochila.", en: "Using your phone in class is forbidden, so I leave it in my bag." }, accept: ["is not allowed", "is banned"], hint: "estar + prohibido. The opposite is está permitido. From prohibir, to forbid." },
        { id: "es-u70l1-estapermitido", type: "vocab", front: "está permitido", reading: "estapermitido", meaning: "it's allowed", example: { jp: "No está permitido comer aquí, pero sí se puede beber agua.", en: "Eating here isn't allowed, but you can drink water." }, accept: ["is permitted", "is OK"], hint: "The opposite of está prohibido, from permitir, to allow." },
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
        { id: "es-u70l2-hacerque", type: "vocab", front: "hacer que", reading: "hacerque", meaning: "to make (someone do)", example: { jp: "La música hace que me sienta mejor, sobre todo cuando estoy triste.", en: "Music makes me feel better, especially when I'm sad." }, accept: ["to cause to", "to have (sb) do", "to get to"], hint: "hacer que + subjunctive = to make someone do something: hace que venga, hace que me sienta." },
        { id: "es-u70l2-mandar", type: "vocab", front: "mandar", reading: "mandar", meaning: "to have done", example: { jp: "Mi madre me mandó comprar el pan de camino a casa.", en: "My mother sent me to buy the bread on the way home." }, accept: ["to order", "to send", "to have (sth) done"], hint: "mandar + infinitive = to have something done, or order someone to do it: mandar hacer una copia." },
        { id: "es-u70l2-dejarque", type: "vocab", front: "dejar que", reading: "dejarque", meaning: "to let", example: { jp: "Mis padres no me dejan que salga de noche entre semana.", en: "My parents don't let me go out at night during the week." }, accept: ["to allow", "to let someone"], hint: "dejar que + subjunctive = to let someone do something: deja que venga. dejar (A1) alone is to leave behind." },
        { id: "es-u70l2-obligar", type: "vocab", front: "obligar", reading: "obligar", meaning: "to force", example: { jp: "La lluvia nos obligó a volver antes de lo que queríamos.", en: "The rain forced us to go back earlier than we wanted." }, accept: ["to compel", "to make"], hint: "obligar A alguien A hacer. Its passive is estar obligado a (u37's related idea)." },
        { id: "es-u70l2-impedir", type: "vocab", front: "impedir", reading: "impedir", meaning: "to prevent", example: { jp: "Su trabajo le impide pasar tiempo con sus hijos entre semana.", en: "His job prevents him from spending time with his children during the week." }, accept: ["to stop", "to hinder"], hint: "impedir que + subjunctive: impide que salga. The opposite of permitir." },
        { id: "es-u70l2-provocar", type: "vocab", front: "provocar", reading: "provocar", meaning: "to cause", example: { jp: "El error provocó muchos problemas, así que tuvimos que empezar de nuevo.", en: "The mistake caused a lot of problems, so we had to start again." }, accept: ["to provoke", "to bring about", "to trigger"], hint: "provocar = to cause, often something bad or sudden. The noun is la provocación." },
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
        { id: "es-u70l3-sedice", type: "vocab", front: "se dice", reading: "sedice", meaning: "people say", example: { jp: "Se dice que este restaurante es el mejor de la ciudad, pero nunca he ido.", en: "People say this restaurant is the best in the city, but I've never been." }, accept: ["it is said", "they say"], hint: "Spanish reaches for se + verb where English uses a passive: se dice, se cree, se sabe. The commonest 'passive' of all." },
        { id: "es-u70l3-sehace", type: "vocab", front: "se hace", reading: "sehace", meaning: "that's done", example: { jp: "Llegar tarde a casa de alguien no se hace en España, aunque cambia según la región.", en: "Turning up late at someone's house isn't done in Spain, although it varies by region." }, accept: ["it's the custom", "people do that"], hint: "Usually heard in the negative — no se hace is a rule of manners, not of grammar." },
        { id: "es-u70l3-setratade", type: "vocab", front: "se trata de", reading: "setratade", meaning: "it's about", example: { jp: "En este reportaje se trata del calentamiento y de sus efectos en la costa.", en: "This report is about global warming and its effects on the coast." }, accept: ["it is a matter of", "it concerns"], hint: "Impersonal only — the subject is never a person. ¿De qué se trata? = What's it about?" },
        { id: "es-u70l3-seencuentra", type: "vocab", front: "se encuentra", reading: "seencuentra", meaning: "is located", example: { jp: "El museo se encuentra en el centro, muy cerca de la plaza mayor.", en: "The museum is located in the centre, very close to the main square." }, accept: ["is situated", "is found"], hint: "Where Spanish says se encuentra, English often just says 'is'. Also se encuentra bien = he feels well." },
        { id: "es-u70l3-suponeque", type: "vocab", front: "se supone que", reading: "suponeque", meaning: "it's supposed that", example: { jp: "Se supone que el tren llega a las ocho, pero casi siempre viene tarde.", en: "The train is supposed to arrive at eight, but it almost always comes late." }, accept: ["supposedly", "one assumes"], hint: "se supone que = it's supposed to. From suponer, to suppose." },
        { id: "es-u70l3-senecesita", type: "vocab", front: "se necesita", reading: "senecesita", meaning: "is needed", example: { jp: "Se necesita más tiempo para hacerlo bien, así que no llegaremos hoy.", en: "More time is needed to do it well, so we won't get there today." }, accept: ["one needs", "is required"], hint: "The impersonal se again: se necesita ayuda = help is needed. Plural agrees: se necesitan voluntarios." },
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
        { id: "es-u70l4-alparecer", type: "vocab", front: "al parecer", reading: "alparecer", meaning: "apparently", example: { jp: "Al parecer, el examen será difícil, según lo que dice el profesor.", en: "Apparently, the exam will be hard, going by what the teacher says." }, accept: ["it seems", "by all accounts"], hint: "Marks hearsay: you pass on what you heard without vouching for it. = por lo visto." },
        { id: "es-u70l4-porlovisto", type: "vocab", front: "por lo visto", reading: "porlovisto", meaning: "evidently", example: { jp: "Por lo visto, el jefe está enfermo, de ahí que no haya venido hoy.", en: "Evidently the boss is ill, which is why he hasn't come in today." }, accept: ["apparently", "by the looks of it"], hint: "The same job as al parecer, a touch more colloquial — literally 'by what is seen'." },
        { id: "es-u70l4-supuestamente", type: "vocab", front: "supuestamente", reading: "supuestamente", meaning: "supposedly", example: { jp: "Supuestamente, este método es el mejor, pero yo no lo veo tan claro.", en: "Supposedly this method is the best, but I don't see it so clearly." }, accept: ["allegedly", "purportedly"], hint: "Carries doubt — you're signalling you don't fully believe it. From suponer." },
        { id: "es-u70l4-darporhecho", type: "vocab", front: "dar por hecho", reading: "darporhecho", meaning: "to take for granted", example: { jp: "Di por hecho que vendrías, así que te compré una entrada para el concierto.", en: "I took it for granted that you'd come, so I bought you a ticket for the concert." }, accept: ["to assume", "to take as given"], hint: "To treat something as certain without checking — often a mistake. dar algo por hecho." },
        { id: "es-u70l4-resultaque", type: "vocab", front: "resulta que", reading: "resultaque", meaning: "it turns out that", example: { jp: "Creía que no lo conocía, pero resulta que fuimos juntos a la escuela.", en: "I thought I didn't know him, but it turns out we went to school together." }, accept: ["as it turns out", "it emerges that"], hint: "Introduces a surprising fact. From resultar, to turn out." },
        { id: "es-u70l4-serumoreaque", type: "vocab", front: "se rumorea que", reading: "serumoreaque", meaning: "rumour has it", example: { jp: "Se rumorea que habrá cambios en la empresa, así que todos están nerviosos.", en: "Rumour has it there'll be changes at the company, so everyone is nervous." }, accept: ["it's rumoured that", "people are saying"], hint: "From el rumor, the rumour. The strongest 'I can't vouch for this' marker." },
      ],
    },
  ],
};
