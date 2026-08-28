// ES Unit 54 — Matización e incertidumbre (slot: hedging) — B1
// ─────────────────────────────────────────────────────────────────────────────
// A2 gave the learner a few hedges — quizás, tal vez, a lo mejor, seguro, sin
// duda, dudar, probablemente. B1 makes hedging a real skill: softening a claim,
// grading how likely something is, guessing out loud, and being deliberately
// vague. This is a register move as much as a vocabulary one — a B1 speaker
// rarely states things flat, and the words here are how you avoid it.
// Examples avoid the SUBJUNCTIVE: Spanish hedging pulls hard toward the subjunctive
// (es probable que SEA, dudo que VENGA), but that mood is taught in u69-71, so
// every example here is framed to need only the indicative — "es muy probable"
// with no clause, "lo más probable es un retraso" with a noun.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT54 = {
  id: "es-u54",
  lang: "es",
  title: "Matización e incertidumbre",
  order: 54,
  stage: "b1",
  lessons: [
    {
      id: "es-u54l1",
      unit: 54,
      lesson: 1,
      title: "Softening a claim",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say it without saying it flat — al parecer, la impresión, la sensación, en principio, en cierto modo, hasta cierto punto.",
      items: [
        { id: "es-u54l1-alparecer", type: "vocab", front: "al parecer", reading: "alparecer", meaning: "apparently", example: { jp: "Al parecer, el tren llega tarde otra vez.", en: "Apparently, the train's late again." }, accept: ["it seems", "by the looks of it"], hint: "From parecer (A2). Reports what seems to be the case — near por lo visto (u52)." },
        { id: "es-u54l1-laimpresion", type: "vocab", front: "la impresión", reading: "laimpresion", meaning: "impression", example: { jp: "Tengo la impresión de que algo va mal.", en: "I get the impression that something's wrong." }, accept: ["the feeling", "sense"], hint: "tener la impresión de que… = to get the impression that… A soft way to state a hunch." },
        { id: "es-u54l1-enprincipio", type: "vocab", front: "en principio", reading: "enprincipio", meaning: "in theory", example: { jp: "En principio, el plan sigue igual, pero puede cambiar.", en: "In theory, the plan stays the same, but it could change." }, accept: ["in principle", "supposedly"], hint: "Marks a plan that holds \"for now\" but isn't guaranteed. NOT \"at the beginning\" — that's al principio." },
        { id: "es-u54l1-enteoria", type: "vocab", front: "en teoría", reading: "enteoria", meaning: "in theory", example: { jp: "En teoría el plan es bueno, pero nadie lo ha probado todavía.", en: "In theory the plan is good, but nobody has tried it yet." }, accept: ["in theory", "supposedly", "on paper"], hint: "Sets up a but: en teoría… , en la práctica… . Softens a claim you are not ready to defend." },
        { id: "es-u54l1-aparentemente", type: "vocab", front: "aparentemente", reading: "aparentemente", meaning: "apparently", example: { jp: "Aparentemente todo salió bien, aunque nadie lo ha confirmado.", en: "Apparently everything went well, although nobody has confirmed it." }, accept: ["apparently", "seemingly", "by the looks of it"], hint: "Close to al parecer, the first card here; aparentemente leans on how something looks from outside." },
        { id: "es-u54l1-porasidecirlo", type: "vocab", front: "por así decirlo", reading: "porasidecirlo", meaning: "so to speak", example: { jp: "Es, por así decirlo, el jefe de la familia.", en: "He is, so to speak, the head of the family." }, accept: ["so to speak", "as it were", "in a manner of speaking"], hint: "Flags your own words as approximate. Drops into the middle of the sentence, between commas." },
      ],
    },
    {
      id: "es-u54l2",
      unit: 54,
      lesson: 2,
      title: "How likely",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Grade the odds — la posibilidad, probable, dudoso, incierto, prever, aproximadamente.",
      items: [
        { id: "es-u54l2-laposibilidad", type: "vocab", front: "la posibilidad", reading: "laposibilidad", meaning: "possibility", example: { jp: "Existe la posibilidad de un cambio de planes.", en: "There's a possibility of a change of plans." }, accept: ["the chance", "option"], hint: "From posible (A2). Hay una posibilidad de… = there's a chance of…" },
        { id: "es-u54l2-probable", type: "vocab", front: "probable", reading: "probable", meaning: "likely", example: { jp: "Lo más probable es un retraso de una hora.", en: "The most likely thing is an hour's delay." }, accept: ["probable"], hint: "The adjective behind probablemente (A2). Lo más probable es… frames your best guess." },
        { id: "es-u54l2-incierto", type: "vocab", front: "incierto", reading: "incierto", meaning: "uncertain", example: { jp: "El futuro de la empresa es muy incierto ahora.", en: "The company's future is very uncertain now." }, accept: ["unclear", "unsure"], hint: "in- (un-) + cierto (A2). What you can't be sure about." },
        { id: "es-u54l2-prever", type: "vocab", front: "prever", reading: "prever", meaning: "to foresee", example: { jp: "Es muy difícil prever el resultado final.", en: "It's very hard to foresee the final result." }, accept: ["to predict", "to anticipate"], hint: "pre- (before) + ver (A1) — to see ahead. La previsión is the forecast." },
        { id: "es-u54l2-aproximadamente", type: "vocab", front: "aproximadamente", reading: "aproximadamente", meaning: "approximately", example: { jp: "Había aproximadamente veinte personas en la sala.", en: "There were approximately twenty people in the room." }, accept: ["roughly", "about"], hint: "A precise \"about\". In speech, unos veinte or veinte y pico do the same job more casually." },
        { id: "es-u54l2-laprobabilidad", type: "vocab", front: "la probabilidad", reading: "laprobabilidad", meaning: "the probability / likelihood", example: { jp: "Hay pocas probabilidades de que llueva mañana.", en: "There is little chance of rain tomorrow." }, accept: ["probability", "likelihood", "chance"], hint: "The noun of probable in this lesson. Often plural: hay muchas probabilidades de que + subjunctive." },
      ],
    },
    {
      id: "es-u54l3",
      unit: 54,
      lesson: 3,
      title: "Guessing out loud",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Float a guess — sospechar, la sospecha, adivinar, dar por hecho, el rumor, quién sabe.",
      items: [
        { id: "es-u54l3-lasospecha", type: "vocab", front: "la sospecha", reading: "lasospecha", meaning: "suspicion", example: { jp: "Solo es una sospecha, no tengo ninguna prueba.", en: "It's just a suspicion, I have no proof." }, accept: ["the hunch"], hint: "The noun from sospechar. Pairs with la prueba (u51) — a suspicion is what you have before proof." },
        { id: "es-u54l3-adivinar", type: "vocab", front: "adivinar", reading: "adivinar", meaning: "to guess", example: { jp: "A ver si adivinas cuántos años tengo.", en: "See if you can guess how old I am." }, accept: ["to figure out"], hint: "To guess right. ¡Adivina! = Guess! Not the same as suponer (a reasoned assumption)." },
        { id: "es-u54l3-darporhecho", type: "vocab", front: "dar por hecho", reading: "darporhecho", meaning: "to take for granted", example: { jp: "Doy por hecho que vienes a la fiesta.", en: "I'm taking it for granted that you're coming to the party." }, accept: ["to assume", "to take as given"], hint: "dar (A1) + por + hecho (from hacer): to treat something as already settled." },
        { id: "es-u54l3-elrumor", type: "vocab", front: "el rumor", reading: "elrumor", meaning: "rumour", example: { jp: "Corre el rumor de que la tienda va a cerrar.", en: "There's a rumour going around that the shop is going to close." }, accept: ["the gossip"], hint: "correr un rumor = for a rumour to go around. Also a low murmur of sound." },
        { id: "es-u54l3-quiensabe", type: "vocab", front: "quién sabe", reading: "quiensabe", meaning: "who knows", example: { jp: "¿Va a mejorar? Quién sabe.", en: "Is it going to get better? Who knows." }, accept: ["no telling", "hard to say"], hint: "From quién + saber (A1). A shrug in two words — total uncertainty." },
        { id: "es-u54l3-intuir", type: "vocab", front: "intuir", reading: "intuir", meaning: "to sense / have a hunch", example: { jp: "Intuyo que algo va a cambiar muy pronto.", en: "I have a feeling something is going to change very soon." }, accept: ["to sense", "to have a feeling", "to guess"], hint: "Knowing without proof: weaker than saber, more serious than adivinar. La intuición is the noun." },
      ],
    },
    {
      id: "es-u54l4",
      unit: 54,
      lesson: 4,
      title: "Being vague",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Leave it loose on purpose — una especie de, algo así, un tanto, por lo general, vago, ni idea.",
      items: [
        { id: "es-u54l4-unaespeciede", type: "vocab", front: "una especie de", reading: "unaespeciede", meaning: "a kind of", example: { jp: "Es una especie de juego, pero más serio.", en: "It's a kind of game, but more serious." }, accept: ["a sort of", "a type of"], hint: "From la especie (u34). Names something you can't name exactly. serio is new but transparent." },
        { id: "es-u54l4-algoasi", type: "vocab", front: "algo así", reading: "algoasi", meaning: "something like that", example: { jp: "Cuesta veinte euros o algo así.", en: "It costs twenty euros or something like that." }, accept: ["or so", "thereabouts"], hint: "algo (A1) + así (A2). o algo así softens a number or a claim you're not sure of." },
        { id: "es-u54l4-untanto", type: "vocab", front: "un tanto", reading: "untanto", meaning: "somewhat", example: { jp: "Su respuesta me pareció un tanto rara.", en: "His answer seemed somewhat odd to me." }, accept: ["a bit", "rather"], hint: "A slightly formal \"a bit\", before an adjective: un tanto extraño. rara is new but from raro." },
        { id: "es-u54l4-porlogeneral", type: "vocab", front: "por lo general", reading: "porlogeneral", meaning: "generally", example: { jp: "Por lo general, como en casa durante la semana.", en: "Generally, I eat at home during the week." }, accept: ["usually", "as a rule"], hint: "From general (A2). Near normalmente (A2) but frames a broad pattern with exceptions." },
        { id: "es-u54l4-vago", type: "vocab", front: "vago", reading: "vago", meaning: "vague", example: { jp: "Me dio una respuesta muy vaga, sin detalles.", en: "He gave me a very vague answer, with no details." }, accept: ["unclear", "lazy"], hint: "Vague, imprecise — and also \"lazy\" for a person: es un vago. The context tells you which." },
        { id: "es-u54l4-niidea", type: "vocab", front: "ni idea", reading: "niidea", meaning: "no idea", example: { jp: "¿Qué hora es? Ni idea, no llevo reloj.", en: "What time is it? No idea, I'm not wearing a watch." }, accept: ["no clue", "not a clue"], hint: "From ni (A2) + la idea (A2). A casual \"I have no idea\" — the full form is no tengo ni idea." },
      ],
    },
  ],
};
