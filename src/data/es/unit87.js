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
        { id: "es-u87l1-acaso", type: "vocab", front: "acaso", reading: "acaso", meaning: "perhaps / by any chance", example: { jp: "¿Acaso es un problema?", en: "Is it a problem, by any chance?" }, drill: { jp: "Acaso tiene razón el jefe", en: "Perhaps the boss is right" }, accept: ["perhaps", "maybe"], hint: "Mostly in questions, adding surprise or challenge: ¿acaso no lo sabes? = don't you know, then? Por si acaso = just in case." },
        { id: "es-u87l1-enrealidad", type: "vocab", front: "en realidad", reading: "enrealidad", meaning: "in reality / actually", example: { jp: "En realidad, no es difícil.", en: "In reality, it's not difficult." }, drill: { jp: "En realidad el problema es otro", en: "Actually the problem is a different one" }, accept: ["actually", "in fact"], hint: "Corrects a wrong impression: parece caro, pero en realidad… From la realidad." },
        { id: "es-u87l1-enefecto", type: "vocab", front: "en efecto", reading: "enefecto", meaning: "indeed", example: { jp: "En efecto, es verdad.", en: "Indeed, it's true." }, drill: { jp: "En efecto el tren llega tarde", en: "Indeed the train arrives late" }, accept: ["indeed", "sure enough"], hint: "Confirms what was just said, more formal than sí. From el efecto." },
        { id: "es-u87l1-lociertoesque", type: "vocab", front: "lo cierto es que", reading: "lociertoesque", meaning: "the truth is that", example: { jp: "Lo cierto es que nadie sabía qué hacer en ese momento.", en: "The truth is that nobody knew what to do at that moment." }, drill: { jp: "Lo cierto es que llueve mucho", en: "The truth is that it's raining a lot" }, accept: ["the truth is that", "the fact is that", "in truth"], hint: "Sets the real state of things against whatever was just claimed." },
        { id: "es-u87l1-adecirverdad", type: "vocab", front: "a decir verdad", reading: "adecirverdad", meaning: "to tell the truth", example: { jp: "A decir verdad, no me gustó nada la película.", en: "To tell the truth, I didn't like the film at all." }, drill: { jp: "A decir verdad estoy cansado", en: "To tell the truth I'm tired" }, accept: ["to tell the truth", "truth be told", "frankly"], hint: "Opens a frank admission — usually a mild one you were holding back." },
        { id: "es-u87l1-segunparece", type: "vocab", front: "según parece", reading: "segunparece", meaning: "apparently / by the looks of it", example: { jp: "Según parece, van a cambiar la fecha otra vez.", en: "Apparently they're going to change the date again." }, drill: { jp: "Según parece el hotel está lleno", en: "By the looks of it the hotel is full" }, accept: ["apparently", "by the looks of it", "from what I hear"], hint: "Does the same job as al parecer, and leaves the source just as vague." },
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
        { id: "es-u87l2-noobstante", type: "vocab", front: "no obstante", reading: "noobstante", meaning: "however / nevertheless", example: { jp: "Es caro; no obstante, lo compro.", en: "It's expensive; nevertheless, I'm buying it." }, drill: { jp: "Llueve no obstante voy al parque", en: "It's raining nevertheless I'm going to the park" }, accept: ["nevertheless", "yet", "even so"], hint: "The formal, written cousin of sin embargo. Sits after a semicolon or full stop." },
        { id: "es-u87l2-detodosmodos", type: "vocab", front: "de todos modos", reading: "detodosmodos", meaning: "anyway / in any case", example: { jp: "De todos modos, voy a ir.", en: "Anyway, I'm going to go." }, drill: { jp: "De todos modos voy mañana", en: "In any case I'm going tomorrow" }, accept: ["anyway", "in any case", "regardless"], hint: "From el modo. Dismisses what came before: whatever the case, … De todas formas means the same." },
        { id: "es-u87l2-porelcontrario", type: "vocab", front: "por el contrario", reading: "porelcontrario", meaning: "on the contrary", example: { jp: "No es fácil; por el contrario, es muy difícil.", en: "It's not easy; on the contrary, it's very hard." }, drill: { jp: "Por el contrario el precio baja", en: "On the contrary the price is going down" }, accept: ["in contrast", "conversely"], hint: "Flips to the opposite of what was said. Stronger than en cambio." },
        { id: "es-u87l2-ahorabien", type: "vocab", front: "ahora bien", reading: "ahorabien", meaning: "that said / however", example: { jp: "Es buena idea; ahora bien, cuesta mucho.", en: "It's a good idea; that said, it costs a lot." }, drill: { jp: "Ahora bien el plazo es corto", en: "That said the deadline is short" }, accept: ["however", "then again"], hint: "Introduces a qualification or catch: …. Ahora bien, …" },
        { id: "es-u87l2-aun", type: "vocab", front: "aún", reading: "aun", meaning: "still / yet", example: { jp: "Aún tengo tiempo.", en: "I still have time." }, drill: { jp: "Aún estoy en la oficina", en: "I'm still at the office" }, accept: ["still", "yet"], hint: "With the accent, aún = still/yet (= todavía). Without it, aun = even (aun así = even so). The accent changes the word." },
        { id: "es-u87l2-sibien", type: "vocab", front: "si bien", reading: "sibien", meaning: "although / while", example: { jp: "Si bien es caro, es bueno.", en: "Although it's expensive, it's good." }, drill: { jp: "Si bien llueve el viaje sigue", en: "Although it's raining the trip goes ahead" }, accept: ["even though", "while"], hint: "A formal aunque, used to open a concession: si bien…, … Common in writing." },
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
        { id: "es-u87l3-portanto", type: "vocab", front: "por tanto", reading: "portanto", meaning: "therefore", example: { jp: "No hay dinero; por tanto, no compro nada.", en: "There's no money; therefore, I'm not buying anything." }, drill: { jp: "Llueve por tanto voy en taxi", en: "It's raining therefore I'm going by taxi" }, accept: ["so", "hence", "thus"], hint: "Draws a logical result. The same as por lo tanto. Common in writing." },
        { id: "es-u87l3-asimismo", type: "vocab", front: "asimismo", reading: "asimismo", meaning: "likewise / also", example: { jp: "Es útil; asimismo, es barato.", en: "It's useful; likewise, it's cheap." }, drill: { jp: "Asimismo el precio sube este año", en: "Likewise the price is going up this year" }, accept: ["furthermore", "in addition"], hint: "Adds another point, formally. A written además. Written as one word." },
        { id: "es-u87l3-esmas", type: "vocab", front: "es más", reading: "esmas", meaning: "what's more", example: { jp: "Es difícil; es más, es imposible.", en: "It's hard; what's more, it's impossible." }, drill: { jp: "Es más el hotel está lleno", en: "What's more the hotel is full" }, accept: ["moreover", "in fact"], hint: "Adds a stronger point on top: not just X — es más, Y." },
        { id: "es-u87l3-asipues", type: "vocab", front: "así pues", reading: "asipues", meaning: "so / therefore", example: { jp: "No hay tiempo; así pues, hay que correr.", en: "There's no time; so, we have to run." }, drill: { jp: "Así pues el plan sigue igual", en: "So the plan stays the same" }, accept: ["thus", "hence", "and so"], hint: "Introduces a conclusion, a bit more formal than así que." },
        { id: "es-u87l3-porconsiguiente", type: "vocab", front: "por consiguiente", reading: "porconsiguiente", meaning: "consequently", example: { jp: "Llueve; por consiguiente, no salimos.", en: "It's raining; consequently, we're not going out." }, drill: { jp: "Llueve por consiguiente no salimos", en: "It's raining consequently we're not going out" }, accept: ["therefore", "as a result"], hint: "The most formal \"therefore\", for writing and speeches." },
        { id: "es-u87l3-enconsecuencia", type: "vocab", front: "en consecuencia", reading: "enconsecuencia", meaning: "consequently", example: { jp: "No llegó a tiempo y, en consecuencia, perdió el tren.", en: "He didn't arrive in time and, consequently, missed the train." }, drill: { jp: "En consecuencia el precio sube", en: "Consequently the price goes up" }, accept: ["consequently", "as a result", "therefore"], hint: "Formal conclusion marker. Between commas, or opening the sentence." },
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
        { id: "es-u87l4-endefinitiva", type: "vocab", front: "en definitiva", reading: "endefinitiva", meaning: "in short / ultimately", example: { jp: "En definitiva, es una buena idea.", en: "In short, it's a good idea." }, drill: { jp: "En definitiva el plan funciona", en: "Ultimately the plan works" }, accept: ["in the end", "all in all"], hint: "Wraps up an argument with the bottom line: …. En definitiva, …" },
        { id: "es-u87l4-porultimo", type: "vocab", front: "por último", reading: "porultimo", meaning: "lastly / finally", example: { jp: "Por último, quiero dar las gracias.", en: "Lastly, I want to say thank you." }, drill: { jp: "Por último quiero agradecer su ayuda", en: "Lastly I want to thank you for your help" }, accept: ["finally", "last of all"], hint: "The last item in a list: primero…, luego…, por último… From último (last)." },
        { id: "es-u87l4-enresumen", type: "vocab", front: "en resumen", reading: "enresumen", meaning: "in summary / to sum up", example: { jp: "En resumen, todo va bien.", en: "In summary, everything's going well." }, drill: { jp: "En resumen el año es bueno", en: "In summary the year is a good one" }, accept: ["in short", "to summarize"], hint: "From el resumen (summary). Introduces a short recap." },
        { id: "es-u87l4-antetodo", type: "vocab", front: "ante todo", reading: "antetodo", meaning: "above all / first of all", example: { jp: "Ante todo, hay que tener calma.", en: "Above all, you have to stay calm." }, drill: { jp: "Ante todo la salud es lo primero", en: "Above all health comes first" }, accept: ["first and foremost", "most of all"], hint: "Puts the most important thing first: ante todo, … A close friend of sobre todo." },
        { id: "es-u87l4-alavez", type: "vocab", front: "a la vez", reading: "alavez", meaning: "at the same time", example: { jp: "No puedo hacer dos cosas a la vez.", en: "I can't do two things at the same time." }, drill: { jp: "Trabajo y estudio a la vez", en: "I work and study at the same time" }, accept: ["at once", "simultaneously"], hint: "From la vez. Doing things together in time. A close friend of al mismo tiempo." },
        { id: "es-u87l4-afindecuentas", type: "vocab", front: "a fin de cuentas", reading: "afindecuentas", meaning: "at the end of the day", example: { jp: "A fin de cuentas, lo importante es que todos están bien.", en: "At the end of the day, what matters is that everyone is well." }, drill: { jp: "A fin de cuentas todo sale bien", en: "At the end of the day everything works out" }, accept: ["at the end of the day", "after all", "when all is said and done"], hint: "Sums up by putting the small stuff aside. Spoken, where en definitiva is written." },
      ],
    },
  ],
};
