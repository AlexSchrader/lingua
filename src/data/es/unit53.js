// ES Unit 53 — Comparación y grado (slot: comparison-degree) — B1
// ─────────────────────────────────────────────────────────────────────────────
// A2 (u37) taught the comparison MACHINERY — más/menos que, tan/tanto como, el
// más, mejor, peor, igual que. B1 adds the vocabulary that comparison runs on:
// the verbs (comparar, distinguir, destacar), the finer relations (superior,
// inferior, el doble, escaso, abundante), and a set of degree adverbs that grade
// a claim precisely instead of reaching for muy again. Examples build on the A2
// comparatives and avoid the subjunctive.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT53 = {
  id: "es-u53",
  lang: "es",
  title: "Comparación y grado",
  order: 53,
  stage: "b1",
  lessons: [
    {
      id: "es-u53l1",
      unit: 53,
      lesson: 1,
      title: "Comparing things",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Set two things side by side — comparar, la comparación, semejante, la semejanza, a diferencia de, distinguir.",
      items: [
        { id: "es-u53l1-comparar", type: "vocab", front: "comparar", reading: "comparar", meaning: "to compare", example: { jp: "Si comparas los dos coches, el nuevo es mejor.", en: "If you compare the two cars, the new one is better." }, drill: { jp: "Comparar los dos hoteles es fácil", en: "Comparing the two hotels is easy" }, accept: ["to contrast"], hint: "comparar A con B. The A2 comparatives (más que, mejor) are what you say once you've compared." },
        { id: "es-u53l1-lacomparacion", type: "vocab", front: "la comparación", reading: "lacomparacion", meaning: "comparison", example: { jp: "En comparación con el año pasado, hoy vivimos mejor.", en: "Compared with last year, we live better today." }, drill: { jp: "La comparación entre ambos es difícil", en: "The comparison between the two is difficult" }, accept: ["the contrast"], hint: "en comparación con = compared with — the phrase that frames a whole comparison." },
        { id: "es-u53l1-semejante", type: "vocab", front: "semejante", reading: "semejante", meaning: "similar", example: { jp: "Los dos casos son muy semejantes, casi iguales.", en: "The two cases are very similar, almost identical." }, drill: { jp: "El caso es semejante al otro", en: "The case is similar to the other one" }, accept: ["alike", "such"], hint: "Near parecido (A2) but a touch more formal. One form for both genders." },
        { id: "es-u53l1-lasemejanza", type: "vocab", front: "la semejanza", reading: "lasemejanza", meaning: "similarity", example: { jp: "Los dos idiomas tienen una clara semejanza.", en: "The two languages have a clear similarity." }, drill: { jp: "La semejanza entre ambos es enorme", en: "The similarity between the two is enormous" }, accept: ["the resemblance", "likeness"], hint: "The noun from semejante — the opposite of la diferencia (A2)." },
        { id: "es-u53l1-adiferenciade", type: "vocab", front: "a diferencia de", reading: "adiferenciade", meaning: "unlike", example: { jp: "A diferencia de su hermano, ella estudia mucho.", en: "Unlike his brother, she studies a lot." }, drill: { jp: "A diferencia de ayer hoy hace sol", en: "Unlike yesterday today it's sunny" }, accept: ["in contrast to", "as opposed to"], hint: "From la diferencia (A2). Opens a contrast at the start of a sentence." },
        { id: "es-u53l1-distinguir", type: "vocab", front: "distinguir", reading: "distinguir", meaning: "to tell apart", example: { jp: "Es difícil distinguir una cosa de la otra.", en: "It's hard to tell one thing from the other." }, drill: { jp: "Distinguir los dos colores es difícil", en: "Telling the two colours apart is difficult" }, accept: ["to distinguish", "to make out"], hint: "distinguir A de B. From distinto (A2). Distingo in the yo form — the u is silent, just marking the hard g." },
      ],
    },
    {
      id: "es-u53l2",
      unit: 53,
      lesson: 2,
      title: "More, less, and how much",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Grade the relation finely — superior, inferior, el doble, escaso, abundante, la minoría.",
      items: [
        { id: "es-u53l2-superior", type: "vocab", front: "superior", reading: "superior", meaning: "higher", example: { jp: "Este modelo es superior al otro en casi todo.", en: "This model is superior to the other in almost everything." }, drill: { jp: "El nivel superior es más difícil", en: "The higher level is more difficult" }, accept: ["superior", "upper"], hint: "superior A algo (not \"que\"). Also physically upper: la parte superior. el modelo is a clear cognate." },
        { id: "es-u53l2-inferior", type: "vocab", front: "inferior", reading: "inferior", meaning: "lower", example: { jp: "El resultado es inferior al del año pasado.", en: "The result is lower than last year's." }, drill: { jp: "El precio inferior es del tren", en: "The lower price is the train's" }, accept: ["inferior", "under"], hint: "The mirror of superior, and it takes a (not que) too: inferior a algo." },
        { id: "es-u53l2-eldoble", type: "vocab", front: "el doble", reading: "eldoble", meaning: "double", example: { jp: "Este piso cuesta el doble que el otro.", en: "This flat costs double what the other does." }, drill: { jp: "El doble de dinero es mucho", en: "Double the money is a lot" }, accept: ["twice as much", "the double"], hint: "el doble que = twice as much as. La mitad (A2) is its opposite, half." },
        { id: "es-u53l2-abundante", type: "vocab", front: "abundante", reading: "abundante", meaning: "plentiful", example: { jp: "La comida fue abundante y muy buena.", en: "The food was plentiful and very good." }, drill: { jp: "La comida es abundante aquí", en: "The food is plentiful here" }, accept: ["abundant", "ample"], hint: "The opposite of escaso — more than enough." },
        { id: "es-u53l2-laminoria", type: "vocab", front: "la minoría", reading: "laminoria", meaning: "minority", example: { jp: "Solo una minoría está en contra del plan.", en: "Only a minority is against the plan." }, drill: { jp: "La minoría está en contra", en: "The minority is against it" }, accept: ["the minority"], hint: "The opposite of la mayoría (A2). En contra (u51), del plan — all in scope." },
        { id: "es-u53l2-eltriple", type: "vocab", front: "el triple", reading: "eltriple", meaning: "three times as much", example: { jp: "Ahora gana el triple que hace diez años.", en: "He now earns three times as much as ten years ago." }, drill: { jp: "El triple de trabajo es imposible", en: "Three times the work is impossible" }, accept: ["triple", "three times as much", "three times as many"], hint: "Same family as el doble in this lesson: el doble, el triple. El triple QUE for the comparison." },
      ],
    },
    {
      id: "es-u53l3",
      unit: 53,
      lesson: 3,
      title: "Standing out",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what sets something apart — destacar, sobresalir, notable, excepcional, el rasgo, la característica.",
      items: [
        { id: "es-u53l3-sobresalir", type: "vocab", front: "sobresalir", reading: "sobresalir", meaning: "to excel", example: { jp: "Sobresale en matemáticas más que nadie de la clase.", en: "She excels in maths more than anyone in the class." }, drill: { jp: "Sobresalir en el trabajo es difícil", en: "Excelling at work is difficult" }, accept: ["to stand out", "to shine"], hint: "sobre (A2) + salir (A1) — to \"come out above\". Stronger than destacar; it means being the best." },
        { id: "es-u53l3-excepcional", type: "vocab", front: "excepcional", reading: "excepcional", meaning: "exceptional", example: { jp: "Es un caso excepcional, no hay otro igual.", en: "It's an exceptional case, there's no other like it." }, drill: { jp: "El resultado es excepcional este año", en: "The result is exceptional this year" }, accept: ["outstanding", "rare"], hint: "Out of the ordinary, in a good way. La excepción is the exception it comes from." },
        { id: "es-u53l3-lacaracteristica", type: "vocab", front: "la característica", reading: "lacaracteristica", meaning: "characteristic", example: { jp: "La principal característica del coche es el precio.", en: "The main characteristic of the car is the price." }, drill: { jp: "La característica principal es el color", en: "The main characteristic is the colour" }, accept: ["the feature", "trait"], hint: "A defining quality. Near el rasgo but more neutral/technical. From el carácter (A2)." },
        { id: "es-u53l3-resaltar", type: "vocab", front: "resaltar", reading: "resaltar", meaning: "to highlight / stand out", example: { jp: "El profesor resalta la importancia de este cambio.", en: "The teacher highlights the importance of this change." }, drill: { jp: "Quiero resaltar un dato importante", en: "I want to highlight an important figure" }, accept: ["to highlight", "to emphasize", "to stand out"], hint: "Two directions: resaltar algo = make it stand out; resaltar = to stand out itself." },
        { id: "es-u53l3-singular", type: "vocab", front: "singular", reading: "singular", meaning: "unique / one of a kind", example: { jp: "Es un caso singular en la historia del país.", en: "It's a unique case in the country's history." }, drill: { jp: "El caso es realmente singular", en: "The case is really one of a kind" }, accept: ["unique", "remarkable", "singular"], hint: "Not 'single'. Un talento singular = a one-of-a-kind talent." },
        { id: "es-u53l3-peculiar", type: "vocab", front: "peculiar", reading: "peculiar", meaning: "distinctive / peculiar", example: { jp: "Tiene una forma peculiar de hablar con la gente.", en: "He has a distinctive way of talking to people." }, drill: { jp: "El estilo de la casa es peculiar", en: "The style of the house is distinctive" }, accept: ["distinctive", "characteristic", "odd"], hint: "More neutral than English 'peculiar': it marks what is characteristic of that one thing." },
      ],
    },
    {
      id: "es-u53l4",
      unit: 53,
      lesson: 4,
      title: "To what degree",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Grade a statement precisely — ligeramente, enormemente, sumamente, del todo, en absoluto, relativamente.",
      items: [
        { id: "es-u53l4-ligeramente", type: "vocab", front: "ligeramente", reading: "ligeramente", meaning: "slightly", example: { jp: "Hoy estoy ligeramente mejor que ayer.", en: "Today I'm slightly better than yesterday." }, drill: { jp: "El precio es ligeramente superior", en: "The price is slightly higher" }, accept: ["a little", "marginally"], hint: "From ligero (A2), light. A small degree — less than un poco, and more precise." },
        { id: "es-u53l4-enormemente", type: "vocab", front: "enormemente", reading: "enormemente", meaning: "enormously", example: { jp: "El proyecto mejoró enormemente este año.", en: "The project improved enormously this year." }, drill: { jp: "El acuerdo ayuda enormemente a todos", en: "The agreement helps everyone enormously" }, accept: ["hugely", "greatly"], hint: "From enorme. A large degree — stronger than mucho for emphasis." },
        { id: "es-u53l4-sumamente", type: "vocab", front: "sumamente", reading: "sumamente", meaning: "extremely", example: { jp: "Es un tema sumamente importante para todos.", en: "It's an extremely important issue for everyone." }, drill: { jp: "El tema es sumamente importante", en: "The topic is extremely important" }, accept: ["highly", "exceedingly"], hint: "A formal, strong \"very\" before an adjective. sumamente difícil = extremely difficult." },
        { id: "es-u53l4-deltodo", type: "vocab", front: "del todo", reading: "deltodo", meaning: "entirely", example: { jp: "No estoy del todo seguro de esto.", en: "I'm not entirely sure about this." }, drill: { jp: "No estoy del todo conforme", en: "I'm not entirely happy with it" }, accept: ["completely", "fully"], hint: "From todo (A1). Almost always with a negative: no del todo = not entirely." },
        { id: "es-u53l4-enabsoluto", type: "vocab", front: "en absoluto", reading: "enabsoluto", meaning: "at all", example: { jp: "No me importa en absoluto, de verdad.", en: "It doesn't matter to me at all, really." }, drill: { jp: "No estoy de acuerdo en absoluto", en: "I don't agree at all" }, accept: ["not in the least", "absolutely not"], hint: "A strong \"not at all\" after a negative. On its own, ¿Te importa? — En absoluto = Not at all." },
        { id: "es-u53l4-relativamente", type: "vocab", front: "relativamente", reading: "relativamente", meaning: "relatively", example: { jp: "El examen fue relativamente fácil este año.", en: "The exam was relatively easy this year." }, drill: { jp: "El curso es relativamente fácil", en: "The course is relatively easy" }, accept: ["comparatively", "fairly"], hint: "\"Compared with what you'd expect.\" A hedge — relativamente barato = fairly cheap." },
      ],
    },
  ],
};
