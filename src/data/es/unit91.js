// ES Unit 91 — Nuance and degree (slot: degree) — B2
// SCAFFOLD STUB. Replace the locked lessons below with 4 real lessons of
// 5-8 cards each (aim 6). Every lesson needs a canDo. Every example may use only
// vocab introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it. Retitle this unit in Spanish when
// you author it: the English title above marks the SLOT, the wording is yours.
//   OWNS: Calibrating a statement by AMOUNT — magnitude, proportion, intensifiers and
//         downtoners of the formal register.
//   NOT:  Comparison (u53), hedging a claim (u54), and the NOUNS of degree (u113). This
//         unit is adverbs and quantifiers, not nouns.
//
// Spanish already teaches 2,094 words across u1–u87. Check src/data/es/TAUGHT-WORDS.md
// before writing EVERY front — a duplicate front is a hard validate:content failure,
// and the es B1 band lost 159 cards to exactly that.
export const ES_UNIT91 = {
  id: "es-u91",
  lang: "es",
  title: "El matiz y el grado",
  order: 91,
  stage: "b2",
  lessons: [
    {
      id: "es-u91l1",
      unit: 91,
      lesson: 1,
      title: "Cuánto exactamente",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how much something changed without reaching for mucho or poco: considerably, slightly, notably, marginally.",
      items: [
        { id: "es-u91l1-engranmedida", type: "vocab", front: "en gran medida", reading: "engranmedida", meaning: "to a great extent", example: { jp: "El resultado depende en gran medida del tiempo que haga.", en: "The result depends to a great extent on the weather." }, accept: ["to a great extent", "largely", "in large part"], hint: "The workhorse of formal Spanish for 'largely'. Its smaller sibling is en cierta medida." },
        { id: "es-u91l1-considerablemente", type: "vocab", front: "considerablemente", reading: "considerablemente", meaning: "considerably", example: { jp: "Los precios han subido considerablemente este año.", en: "Prices have risen considerably this year." }, accept: ["considerably", "significantly", "substantially"], hint: "Neutral and measurable. Sits above notablemente and well above levemente." },
        { id: "es-u91l1-notablemente", type: "vocab", front: "notablemente", reading: "notablemente", meaning: "notably / markedly", example: { jp: "La calidad ha mejorado notablemente desde entonces.", en: "The quality has improved markedly since then." }, accept: ["notably", "markedly", "noticeably"], hint: "Enough of a change that someone would notice — that is exactly what the word claims." },
        { id: "es-u91l1-levemente", type: "vocab", front: "levemente", reading: "levemente", meaning: "slightly", example: { jp: "La cifra bajó levemente en el último mes.", en: "The figure fell slightly in the last month." }, accept: ["slightly", "marginally", "a little"], hint: "From leve. The formal register's ligeramente, which B1 taught in u53." },
        { id: "es-u91l1-sobremanera", type: "vocab", front: "sobremanera", reading: "sobremanera", meaning: "exceedingly / greatly", example: { jp: "Le preocupa sobremanera la salud de su madre.", en: "He is exceedingly worried about his mother's health." }, accept: ["exceedingly", "greatly", "enormously"], hint: "One word, and always after the verb. Literary; you will read it more often than say it." },
        { id: "es-u91l1-marginalmente", type: "vocab", front: "marginalmente", reading: "marginalmente", meaning: "marginally", example: { jp: "El cambio afecta marginalmente a los usuarios.", en: "The change affects users only marginally." }, accept: ["marginally", "slightly", "only just"], hint: "So small it sits at the margin of what counts. Often paired with sólo." },
      ],
    },
    {
      id: "es-u91l2",
      unit: 91,
      lesson: 2,
      title: "Subir y bajar el tono",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Push a statement up or pull it down: say something is excessive, that a claim is met more than fully, or that it barely holds.",
      items: [
        { id: "es-u91l2-enexceso", type: "vocab", front: "en exceso", reading: "enexceso", meaning: "excessively / too much", example: { jp: "Confía en exceso en sus propios cálculos.", en: "He relies excessively on his own calculations." }, accept: ["excessively", "too much", "overly"], hint: "After the verb, unlike English 'too'. Demasiado is the everyday word; en exceso is the formal one." },
        { id: "es-u91l2-concreces", type: "vocab", front: "con creces", reading: "concreces", meaning: "more than amply", example: { jp: "Cumplió con creces todo lo que había prometido.", en: "He more than delivered on everything he had promised." }, accept: ["more than amply", "by a wide margin", "and then some"], hint: "Only with verbs of meeting or repaying: cumplir, superar, devolver con creces." },
        { id: "es-u91l2-desobra", type: "vocab", front: "de sobra", reading: "desobra", meaning: "more than enough / perfectly well", example: { jp: "Sabes de sobra lo que pienso de eso.", en: "You know perfectly well what I think about that." }, accept: ["more than enough", "perfectly well", "plenty"], hint: "Two uses: tener de sobra (have plenty) and saber de sobra (know full well)." },
        { id: "es-u91l2-aduraspenas", type: "vocab", front: "a duras penas", reading: "aduraspenas", meaning: "barely / with great difficulty", example: { jp: "A duras penas conseguimos terminar a tiempo.", en: "We barely managed to finish on time." }, accept: ["barely", "with great difficulty", "only just"], hint: "It carries the effort with it, where apenas is neutral." },
        { id: "es-u91l2-nidelejos", type: "vocab", front: "ni de lejos", reading: "nidelejos", meaning: "not by a long shot", example: { jp: "Ese no es ni de lejos el peor problema.", en: "That isn't the worst problem by a long shot." }, accept: ["not by a long shot", "nowhere near", "far from it"], hint: "Always negative, and emphatic: ni de lejos se parece = it isn't remotely alike." },
        { id: "es-u91l2-condiferencia", type: "vocab", front: "con diferencia", reading: "condiferencia", meaning: "by far", example: { jp: "Es con diferencia la mejor propuesta que hemos visto.", en: "It's by far the best proposal we've seen." }, accept: ["by far", "by a long way", "easily"], hint: "Sits next to a superlative: el mejor con diferencia, or con diferencia el mejor." },
      ],
    },
    {
      id: "es-u91l3",
      unit: 91,
      lesson: 3,
      title: "Casi y apenas",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Grade something that almost is: say it practically amounts to X, set a ceiling with at most, and use the formal even in a negative sentence.",
      items: [
        { id: "es-u91l3-pocomenosque", type: "vocab", front: "poco menos que", reading: "pocomenosque", meaning: "little short of", example: { jp: "Pedir eso ahora es poco menos que imposible.", en: "Asking for that now is little short of impossible." }, accept: ["little short of", "practically", "all but"], hint: "Softens a strong word without withdrawing it. Followed by an adjective or a noun." },
        { id: "es-u91l3-cuandomenos", type: "vocab", front: "cuando menos", reading: "cuandomenos", meaning: "at the very least", example: { jp: "Es, cuando menos, una decisión discutible.", en: "It is, at the very least, a debatable decision." }, accept: ["at the very least", "to say the least", "at any rate"], hint: "Sets a floor, usually while implying something worse. Not the same as cuando mucho." },
        { id: "es-u91l3-alosumo", type: "vocab", front: "a lo sumo", reading: "alosumo", meaning: "at most", example: { jp: "Habría a lo sumo veinte personas en la sala.", en: "There were at most twenty people in the room." }, accept: ["at most", "at the outside", "no more than"], hint: "Sets a ceiling. Its mirror is como mínimo." },
        { id: "es-u91l3-siquiera", type: "vocab", front: "siquiera", reading: "siquiera", meaning: "even (in negatives) / at least", example: { jp: "No me avisó siquiera de que llegaría tarde.", en: "He didn't even tell me he would be late." }, accept: ["even", "at least", "so much as"], hint: "With a negative it is 'even': ni siquiera. On its own, formal: dame siquiera una razón." },
        { id: "es-u91l3-sensiblemente", type: "vocab", front: "sensiblemente", reading: "sensiblemente", meaning: "appreciably", example: { jp: "El servicio ha empeorado sensiblemente este año.", en: "The service has got appreciably worse this year." }, accept: ["appreciably", "noticeably", "significantly"], hint: "False friend: NOT 'sensibly'. It means by an amount you can perceive." },
        { id: "es-u91l3-ensumayoria", type: "vocab", front: "en su mayoría", reading: "ensumayoria", meaning: "for the most part", example: { jp: "Los asistentes eran en su mayoría estudiantes.", en: "Those attending were for the most part students." }, accept: ["for the most part", "mostly", "predominantly"], hint: "Of a group of people or things, never of a single one. B1's la mayoría (u32) is the noun behind it." },
      ],
    },
    {
      id: "es-u91l4",
      unit: 91,
      lesson: 4,
      title: "Calibrar una afirmación",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Pitch a claim at the right strength: qualify it broadly, speak in general terms, or say what is true strictly speaking.",
      items: [
        { id: "es-u91l4-enciertamedida", type: "vocab", front: "en cierta medida", reading: "enciertamedida", meaning: "to some extent", example: { jp: "En cierta medida todos somos responsables de esto.", en: "To some extent we are all responsible for this." }, accept: ["to some extent", "to a degree", "partly"], hint: "The smaller half of the pair with en gran medida. It concedes without conceding everything." },
        { id: "es-u91l4-enterminosgenerales", type: "vocab", front: "en términos generales", reading: "enterminosgenerales", meaning: "broadly speaking", example: { jp: "En términos generales, el plan ha funcionado bien.", en: "Broadly speaking, the plan has worked well." }, accept: ["broadly speaking", "in general terms", "by and large"], hint: "Opens a sentence and warns the listener that exceptions are coming." },
        { id: "es-u91l4-grossomodo", type: "vocab", front: "grosso modo", reading: "grossomodo", meaning: "roughly / in rough terms", example: { jp: "Grosso modo, el coste sería el doble.", en: "Roughly speaking, the cost would be double." }, accept: ["roughly", "approximately", "in rough terms"], hint: "Latin, and written without an accent or a preposition — never a grosso modo, whatever you hear." },
        { id: "es-u91l4-enrigor", type: "vocab", front: "en rigor", reading: "enrigor", meaning: "strictly speaking", example: { jp: "En rigor, ese dato no demuestra nada.", en: "Strictly speaking, that figure proves nothing." }, accept: ["strictly speaking", "properly speaking", "in fact"], hint: "Signals that you are about to be exact where others were loose. From el rigor, taught in u89." },
        { id: "es-u91l4-agrandesrasgos", type: "vocab", front: "a grandes rasgos", reading: "agrandesrasgos", meaning: "in broad terms", example: { jp: "A grandes rasgos, la idea es buena.", en: "In broad terms, the idea is a good one." }, accept: ["in broad terms", "roughly", "in outline"], hint: "Sketches the shape and skips the detail. Un rasgo is a feature, so this is literally in big features." },
        { id: "es-u91l4-porreglageneral", type: "vocab", front: "por regla general", reading: "porreglageneral", meaning: "as a rule", example: { jp: "Por regla general, no aceptamos cambios a última hora.", en: "As a rule, we don’t accept last-minute changes." }, accept: ["as a rule", "generally", "normally"], hint: "States a habit that allows exceptions — which is why it is safer than siempre." },
      ],
    },
  ],
};
