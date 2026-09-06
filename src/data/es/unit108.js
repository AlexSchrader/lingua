// ES Unit 108 — El hilo del discurso ("Discourse: cohesion and hedging") — B2 (slot: discourse)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: this unit is the MOVES.
// Picking the thread back up (l1), qualifying and softening (l2), insisting (l3),
// attributing and summing up (l4). Every front here names something a writer DOES.
// The connector inventory (u125) and the fixed high-register locutions (u126) are NOT
// this unit's: no card here is a connector word or a set phrase, which is why the
// hedging lesson is built from verbs (atenuar, suavizar, acotar) rather than from
// markers like "en cierto modo" or "hasta cierto punto" — those are u126's to place.
// Rejected as the same lexeme: matizar (~u76 el matiz — and nuance is u91's theme),
// abundar (~u53 abundante). Rejected as already taught: recoger (u41).
export const ES_UNIT108 = {
  id: "es-u108",
  lang: "es",
  title: "El hilo del discurso",
  order: 108,
  stage: "b2",
  lessons: [
    {
      id: "es-u108l1",
      unit: 108,
      lesson: 1,
      title: "Retomar el hilo",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Pick a subject back up after leaving it, point back at something without naming it, and mark an aside as an aside.",
      items: [
        { id: "es-u108l1-retomar", type: "vocab", front: "retomar", reading: "retomar", meaning: "to take up again (a subject)", example: { jp: "Vamos a retomar el punto que dejamos antes.", en: "Let's take up again the point we left earlier." }, accept: ["to take up again", "to return to", "to resume", "to pick up again"], hint: "The move of coming back to a topic you interrupted. Retomar el hilo = to pick up the thread, which is where this unit gets its name." },
        { id: "es-u108l1-reanudar", type: "vocab", front: "reanudar", reading: "reanudar", meaning: "to resume (after a break)", example: { jp: "La reunión se reanudó una hora más tarde.", en: "The meeting resumed an hour later." }, accept: ["to resume", "to restart", "to begin again", "resume"], hint: "For an activity that stopped, not a subject: reanudar una reunión, reanudar el trabajo. Retomar is for the argument, reanudar for the clock." },
        { id: "es-u108l1-aludir", type: "vocab", front: "aludir", reading: "aludir", meaning: "to allude to / refer to", example: { jp: "El autor alude a un problema que nunca dice cuál es.", en: "The author alludes to a problem he never names." }, accept: ["to allude to", "to refer to", "to hint at", "allude"], hint: "Always with a. It names something without naming it — which is why it is a move and not just a mention." },
        { id: "es-u108l1-alusion", type: "vocab", front: "la alusión", reading: "laalusion", meaning: "allusion / reference", example: { jp: "Hizo una alusión clara a la carta del jefe.", en: "He made a clear allusion to the boss's letter." }, accept: ["allusion", "reference", "hint"], hint: "Hacer alusión a is the standard pattern. Darse por aludido means to take something as being about you." },
        { id: "es-u108l1-inciso", type: "vocab", front: "el inciso", reading: "elinciso", meaning: "aside / parenthetical remark", example: { jp: "Permítanme un inciso antes de seguir.", en: "Allow me an aside before I go on." }, accept: ["aside", "parenthesis", "digression", "parenthetical remark"], hint: "A short break in your own sentence, announced as such. Un inciso is deliberate and brief; una digresión wanders." },
        { id: "es-u108l1-digresion", type: "vocab", front: "la digresión", reading: "ladigresion", meaning: "digression", example: { jp: "Después de una larga digresión, volvió al asunto.", en: "After a long digression, he came back to the matter." }, accept: ["digression", "detour", "tangent"], hint: "Leaving the subject for long enough that someone notices. Naming your own is a way of asking to be forgiven for it." },
      ],
    },
    {
      id: "es-u108l2",
      unit: 108,
      lesson: 2,
      title: "Precisar y atenuar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Soften or narrow a claim you have just made, without taking it back.",
      items: [
        { id: "es-u108l2-puntualizar", type: "vocab", front: "puntualizar", reading: "puntualizar", meaning: "to clarify a point", example: { jp: "Quiero puntualizar que nadie dijo eso.", en: "I want to make it clear that nobody said that." }, accept: ["to clarify", "to make clear", "to point out", "clarify"], hint: "Correcting a detail in what was understood, not the whole claim. From el punto (u45): you are fixing one point of it." },
        { id: "es-u108l2-precisar", type: "vocab", front: "precisar", reading: "precisar", meaning: "to specify / state precisely", example: { jp: "El informe no precisa de dónde salen los datos.", en: "The report does not specify where the data comes from." }, accept: ["to specify", "to state precisely", "to pin down", "specify"], hint: "To make vague wording exact. It has a second, unrelated sense — to need: precisa ayuda — which context always separates." },
        { id: "es-u108l2-relativizar", type: "vocab", front: "relativizar", reading: "relativizar", meaning: "to play down / put in perspective", example: { jp: "No hay que relativizar un problema tan grande.", en: "You should not play down a problem this big." }, accept: ["to play down", "to put in perspective", "to downplay", "to relativise"], hint: "Making something look smaller by setting it beside something else. Often an accusation: relativizar is what you do to a fact you cannot deny." },
        { id: "es-u108l2-atenuar", type: "vocab", front: "atenuar", reading: "atenuar", meaning: "to soften / tone down", example: { jp: "Cambió dos palabras para atenuar la frase.", en: "He changed two words to soften the sentence." }, accept: ["to soften", "to tone down", "to mitigate", "soften"], hint: "The technical word for hedging: atenuar una afirmación. In law, una circunstancia atenuante is what makes a sentence lighter." },
        { id: "es-u108l2-suavizar", type: "vocab", front: "suavizar", reading: "suavizar", meaning: "to soften (tone)", example: { jp: "Suavizó sus palabras cuando vio que nadie estaba contento.", en: "She softened her words when she saw nobody was happy." }, drill: { jp: "Quiso suavizar sus palabras", en: "He wanted to soften his words" }, accept: ["to soften", "to tone down", "to smooth over", "soften"], hint: "About manner more than content — from suave. Atenuar weakens the claim; suavizar only changes how it lands." },
        { id: "es-u108l2-acotar", type: "vocab", front: "acotar", reading: "acotar", meaning: "to narrow down / delimit", example: { jp: "Hay que acotar el asunto antes de hablar de él.", en: "We need to narrow the matter down before discussing it." }, accept: ["to narrow down", "to delimit", "to limit", "to define the scope of"], hint: "Drawing a boundary around what you are and are not claiming. From la cota, a boundary marker — you are fencing the argument in." },
      ],
    },
    {
      id: "es-u108l3",
      unit: 108,
      lesson: 3,
      title: "Insistir y subrayar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give a point more weight than the sentence around it: stress it, repeat it deliberately, and say you are doing so.",
      items: [
        { id: "es-u108l3-recalcar", type: "vocab", front: "recalcar", reading: "recalcar", meaning: "to stress / emphasise", example: { jp: "Recalcó que la decisión no era de él.", en: "He stressed that the decision was not his." }, drill: { jp: "Quiso recalcar ese punto", en: "He wanted to stress that point" }, accept: ["to stress", "to emphasise", "to emphasize", "to underline"], hint: "Saying something with extra weight, often because it was missed the first time. Slightly insistent in tone." },
        { id: "es-u108l3-subrayar", type: "vocab", front: "subrayar", reading: "subrayar", meaning: "to underline / highlight", example: { jp: "El informe subraya la falta de dinero.", en: "The report highlights the lack of money." }, accept: ["to underline", "to highlight", "to stress", "underline"], hint: "Literally to draw a line under. The commonest of these verbs in written Spanish, and the most neutral." },
        { id: "es-u108l3-reiterar", type: "vocab", front: "reiterar", reading: "reiterar", meaning: "to reiterate", example: { jp: "El director reiteró su respuesta sin cambiar nada.", en: "The director reiterated his answer without changing anything." }, accept: ["to reiterate", "to repeat", "to restate", "reiterate"], hint: "Formal repetition, on purpose and on the record. Repetir is neutral; reiterar says you are aware you are repeating." },
        { id: "es-u108l3-enfatizar", type: "vocab", front: "enfatizar", reading: "enfatizar", meaning: "to emphasise", example: { jp: "Quiso enfatizar la parte buena de la noticia.", en: "She wanted to emphasise the good part of the news." }, accept: ["to emphasise", "to emphasize", "to stress", "emphasise"], hint: "The most transparent of the group, and the one that works in speech as well as writing." },
        { id: "es-u108l3-incidir", type: "vocab", front: "incidir", reading: "incidir", meaning: "to dwell on / bear on", example: { jp: "El autor incide en el mismo punto todo el rato.", en: "The author dwells on the same point the whole time." }, drill: { jp: "El autor va a incidir mucho", en: "The author is going to dwell on it a lot" }, accept: ["to dwell on", "to focus on", "to bear on", "to affect"], hint: "Incidir en means to keep coming back to a point; with a different object it means to have an effect on something." },
        { id: "es-u108l3-enfasis", type: "vocab", front: "el énfasis", reading: "elenfasis", meaning: "emphasis", example: { jp: "Puso mucho énfasis en la parte final.", en: "She put a lot of emphasis on the final part." }, accept: ["emphasis", "stress"], hint: "Poner énfasis en is the standard phrase. Same form in the plural — los énfasis — because it ends in s already." },
      ],
    },
    {
      id: "es-u108l4",
      unit: 108,
      lesson: 4,
      title: "Atribuir y sintetizar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say whose claim you are reporting, put it in your own words, and close a long passage by drawing it together.",
      items: [
        { id: "es-u108l4-atribuir", type: "vocab", front: "atribuir", reading: "atribuir", meaning: "to attribute", example: { jp: "No hay que atribuir al autor una idea que no es de él.", en: "You should not attribute to the author an idea that is not his." }, accept: ["to attribute", "to ascribe", "to credit", "attribute"], hint: "Atribuir algo a alguien. The move that makes a report honest — and the one that goes wrong most often." },
        { id: "es-u108l4-parafrasear", type: "vocab", front: "parafrasear", reading: "parafrasear", meaning: "to paraphrase", example: { jp: "Voy a parafrasear la carta porque es muy larga.", en: "I'm going to paraphrase the letter because it is very long." }, accept: ["to paraphrase", "to reword", "to put in other words", "paraphrase"], hint: "Restating someone else's words as your own sentence while keeping the sense — and still owing them the attribution." },
        { id: "es-u108l4-apuntar", type: "vocab", front: "apuntar", reading: "apuntar", meaning: "to point out / suggest", example: { jp: "El estudio apunta a una causa distinta.", en: "The study points to a different cause." }, accept: ["to point out", "to point to", "to suggest", "to note"], hint: "Apuntar a algo says the evidence leans a way without claiming to prove it — a hedged attribution. It also means to write something down." },
        { id: "es-u108l4-remitirse", type: "vocab", front: "remitirse", reading: "remitirse", meaning: "to refer (the reader) to", example: { jp: "Me remito a lo que dije en la reunión.", en: "I refer you to what I said at the meeting." }, accept: ["to refer to", "to refer the reader to", "to stand by", "refer to"], hint: "Me remito a is how you point at something already on the record instead of arguing again. Remitirse a los hechos = to let the facts speak." },
        { id: "es-u108l4-resumir", type: "vocab", front: "resumir", reading: "resumir", meaning: "to summarise", example: { jp: "Es difícil resumir un informe tan largo.", en: "It is difficult to summarise such a long report." }, accept: ["to summarise", "to summarize", "to sum up", "summarise"], hint: "To make shorter while keeping everything that matters. En resumen opens the summary itself." },
        { id: "es-u108l4-sintetizar", type: "vocab", front: "sintetizar", reading: "sintetizar", meaning: "to synthesise / draw together", example: { jp: "El punto final sintetiza todo el informe.", en: "The final point draws the whole report together." }, accept: ["to synthesise", "to synthesize", "to draw together", "to bring together"], hint: "More than resumir: you are combining several things into one statement, not just shortening one thing." },
      ],
    },
  ],
};
