// ES Unit 87 — Matices y conectores ("Nuance and connectors") — B1 COVERAGE (slot: coverage-b1-14)
// The last B1 coverage unit: the discourse markers that structure an argument —
// reality, contrast, consequence, summary. Modelled as function-word vocab whose
// example sentences carry the join (two clauses). Conventions + BLOCK-3 SCOPE: see
// es/unit77.js. These are the highest-collision fronts vs B1 blocks 1–2's grammar/
// connector units (unseen) — expect some merge-day dedup, flagged in §6.
export const ES_UNIT87 = {
  id: "es-u87",
  lang: "es",
  title: "Matices y conectores",
  order: 87,
  stage: "b1",
  lessons: [
    {
      id: "es-u87l1",
      unit: 87,
      lesson: 1,
      title: "En realidad, de hecho, al parecer",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Signal what's really the case: perhaps, in reality, in fact, indeed, apparently.",
      items: [
        { id: "es-u87l1-acaso", type: "vocab", front: "acaso", reading: "acaso", meaning: "perhaps / by any chance", example: { jp: "¿Acaso es un problema?", en: "Is it a problem, by any chance?" }, accept: ["perhaps", "maybe"], hint: "Mostly in questions, adding surprise or challenge: ¿acaso no lo sabes? = don't you know, then? Por si acaso = just in case." },
        { id: "es-u87l1-enrealidad", type: "vocab", front: "en realidad", reading: "enrealidad", meaning: "in reality / actually", example: { jp: "En realidad, no es difícil.", en: "In reality, it's not difficult." }, accept: ["actually", "in fact"], hint: "Corrects a wrong impression: parece caro, pero en realidad… From la realidad." },
        { id: "es-u87l1-dehecho", type: "vocab", front: "de hecho", reading: "dehecho", meaning: "in fact / actually", example: { jp: "De hecho, tienes razón.", en: "In fact, you're right." }, accept: ["as a matter of fact", "actually"], hint: "From el hecho (fact). Strengthens or adds a surprising point: …. De hecho, …" },
        { id: "es-u87l1-enefecto", type: "vocab", front: "en efecto", reading: "enefecto", meaning: "indeed", example: { jp: "En efecto, es verdad.", en: "Indeed, it's true." }, accept: ["indeed", "sure enough"], hint: "Confirms what was just said, more formal than sí. From el efecto." },
        { id: "es-u87l1-alparecer", type: "vocab", front: "al parecer", reading: "alparecer", meaning: "apparently", example: { jp: "Al parecer, va a llover.", en: "Apparently, it's going to rain." }, accept: ["seemingly", "it seems"], hint: "Reports something you're not sure of. From parecer. A close friend of por lo visto." },
        { id: "es-u87l1-porlovisto", type: "vocab", front: "por lo visto", reading: "porlovisto", meaning: "apparently / by the look of it", example: { jp: "Por lo visto, está enfermo.", en: "Apparently, he's ill." }, accept: ["seemingly", "evidently"], hint: "From ver (visto = seen). What the evidence suggests. Same use as al parecer." },
      ],
    },
    {
      id: "es-u87l2",
      unit: 87,
      lesson: 2,
      title: "No obstante, aún, si bien",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Turn or concede a point: however, anyway, on the contrary, that said, still, although.",
      items: [
        { id: "es-u87l2-noobstante", type: "vocab", front: "no obstante", reading: "noobstante", meaning: "however / nevertheless", example: { jp: "Es caro; no obstante, lo compro.", en: "It's expensive; nevertheless, I'm buying it." }, accept: ["nevertheless", "yet", "even so"], hint: "The formal, written cousin of sin embargo. Sits after a semicolon or full stop." },
        { id: "es-u87l2-detodosmodos", type: "vocab", front: "de todos modos", reading: "detodosmodos", meaning: "anyway / in any case", example: { jp: "De todos modos, voy a ir.", en: "Anyway, I'm going to go." }, accept: ["anyway", "in any case", "regardless"], hint: "From el modo. Dismisses what came before: whatever the case, … De todas formas means the same." },
        { id: "es-u87l2-porelcontrario", type: "vocab", front: "por el contrario", reading: "porelcontrario", meaning: "on the contrary", example: { jp: "No es fácil; por el contrario, es muy difícil.", en: "It's not easy; on the contrary, it's very hard." }, accept: ["in contrast", "conversely"], hint: "Flips to the opposite of what was said. Stronger than en cambio." },
        { id: "es-u87l2-ahorabien", type: "vocab", front: "ahora bien", reading: "ahorabien", meaning: "that said / however", example: { jp: "Es buena idea; ahora bien, cuesta mucho.", en: "It's a good idea; that said, it costs a lot." }, accept: ["however", "then again"], hint: "Introduces a qualification or catch: …. Ahora bien, …" },
        { id: "es-u87l2-aun", type: "vocab", front: "aún", reading: "aun", meaning: "still / yet", example: { jp: "Aún tengo tiempo.", en: "I still have time." }, accept: ["still", "yet"], hint: "With the accent, aún = still/yet (= todavía). Without it, aun = even (aun así = even so). The accent changes the word." },
        { id: "es-u87l2-sibien", type: "vocab", front: "si bien", reading: "sibien", meaning: "although / while", example: { jp: "Si bien es caro, es bueno.", en: "Although it's expensive, it's good." }, accept: ["even though", "while"], hint: "A formal aunque, used to open a concession: si bien…, … Common in writing." },
      ],
    },
    {
      id: "es-u87l3",
      unit: 87,
      lesson: 3,
      title: "Por tanto, asimismo, de ahí",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Draw a conclusion or add: therefore, likewise, what's more, so, hence, consequently.",
      items: [
        { id: "es-u87l3-portanto", type: "vocab", front: "por tanto", reading: "portanto", meaning: "therefore", example: { jp: "No hay dinero; por tanto, no compro nada.", en: "There's no money; therefore, I'm not buying anything." }, accept: ["so", "hence", "thus"], hint: "Draws a logical result. The same as por lo tanto. Common in writing." },
        { id: "es-u87l3-asimismo", type: "vocab", front: "asimismo", reading: "asimismo", meaning: "likewise / also", example: { jp: "Es útil; asimismo, es barato.", en: "It's useful; likewise, it's cheap." }, accept: ["furthermore", "in addition"], hint: "Adds another point, formally. A written además. Written as one word." },
        { id: "es-u87l3-esmas", type: "vocab", front: "es más", reading: "esmas", meaning: "what's more", example: { jp: "Es difícil; es más, es imposible.", en: "It's hard; what's more, it's impossible." }, accept: ["moreover", "in fact"], hint: "Adds a stronger point on top: not just X — es más, Y." },
        { id: "es-u87l3-asipues", type: "vocab", front: "así pues", reading: "asipues", meaning: "so / therefore", example: { jp: "No hay tiempo; así pues, hay que correr.", en: "There's no time; so, we have to run." }, accept: ["thus", "hence", "and so"], hint: "Introduces a conclusion, a bit more formal than así que." },
        { id: "es-u87l3-deahi", type: "vocab", front: "de ahí", reading: "deahi", meaning: "hence / that's why", example: { jp: "No estudió; de ahí el problema.", en: "He didn't study; hence the problem." }, accept: ["that's why", "thus"], hint: "Points to a result: de ahí + a noun, or de ahí que + a verb. Literally \"from there\"." },
        { id: "es-u87l3-porconsiguiente", type: "vocab", front: "por consiguiente", reading: "porconsiguiente", meaning: "consequently", example: { jp: "Llueve; por consiguiente, no salimos.", en: "It's raining; consequently, we're not going out." }, accept: ["therefore", "as a result"], hint: "The most formal \"therefore\", for writing and speeches." },
      ],
    },
    {
      id: "es-u87l4",
      unit: 87,
      lesson: 4,
      title: "En definitiva, por último, a la vez",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Sum up and order: in short, lastly, in summary, above all, meanwhile, at the same time.",
      items: [
        { id: "es-u87l4-endefinitiva", type: "vocab", front: "en definitiva", reading: "endefinitiva", meaning: "in short / ultimately", example: { jp: "En definitiva, es una buena idea.", en: "In short, it's a good idea." }, accept: ["in the end", "all in all"], hint: "Wraps up an argument with the bottom line: …. En definitiva, …" },
        { id: "es-u87l4-porultimo", type: "vocab", front: "por último", reading: "porultimo", meaning: "lastly / finally", example: { jp: "Por último, quiero dar las gracias.", en: "Lastly, I want to say thank you." }, accept: ["finally", "last of all"], hint: "The last item in a list: primero…, luego…, por último… From último (last)." },
        { id: "es-u87l4-enresumen", type: "vocab", front: "en resumen", reading: "enresumen", meaning: "in summary / to sum up", example: { jp: "En resumen, todo va bien.", en: "In summary, everything's going well." }, accept: ["in short", "to summarize"], hint: "From el resumen (summary). Introduces a short recap." },
        { id: "es-u87l4-antetodo", type: "vocab", front: "ante todo", reading: "antetodo", meaning: "above all / first of all", example: { jp: "Ante todo, hay que tener calma.", en: "Above all, you have to stay calm." }, accept: ["first and foremost", "most of all"], hint: "Puts the most important thing first: ante todo, … A close friend of sobre todo." },
        { id: "es-u87l4-entretanto", type: "vocab", front: "entretanto", reading: "entretanto", meaning: "meanwhile", example: { jp: "Espera aquí; entretanto, yo voy.", en: "Wait here; meanwhile, I'll go." }, accept: ["in the meantime", "meanwhile"], hint: "Marks something happening in between. The same as mientras tanto." },
        { id: "es-u87l4-alavez", type: "vocab", front: "a la vez", reading: "alavez", meaning: "at the same time", example: { jp: "No puedo hacer dos cosas a la vez.", en: "I can't do two things at the same time." }, accept: ["at once", "simultaneously"], hint: "From la vez. Doing things together in time. A close friend of al mismo tiempo." },
      ],
    },
  ],
};
