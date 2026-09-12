// ES Unit 107 — La prosa formal ("Formal written structures") — B2 (slot: formal-writing)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: the SYNTAX of written
// Spanish. Impersonal statement (l1), nominal style and reference back (l2), formal
// subordination (l3), the reporting passive (l4).
// Nominalization and the passive at B1 (u70, u71) and the connector inventory (u125) are
// not this unit's. The institutional VOICE — notices, rulings, terms — is u110's, and the
// candidates that belong there (estipular, figurar, ser objeto de, previa, habida cuenta
// de) were held back for it rather than taught here.
// Rejected as already taught: el cual, cuyo, quienes (u36), resulta que (u70),
// el hecho de que (u69). Rejected as the same lexeme: una vez (~u20 la vez), obrar
// (~u35 la obra), constar (~u59 constante), conviene (~u75 conveniente), and — caught in
// the hand lexeme sweep, after validate:content had passed it — el mismo, which is u14's
// mismo with an article in front. Replaced by el consabido.
export const ES_UNIT107 = {
  id: "es-u107",
  lang: "es",
  title: "La prosa formal",
  order: 107,
  stage: "b2",
  lessons: [
    {
      id: "es-u107l1",
      unit: 107,
      lesson: 1,
      title: "La afirmación impersonal",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Make a statement in writing without saying who is making it: it should be noted, it is fitting to, suffice it to say.",
      items: [
        { id: "es-u107l1-cabe", type: "vocab", front: "cabe", reading: "cabe", meaning: "it is worth (doing) / one may", example: { jp: "Cabe señalar que el informe no dice nada de eso.", en: "It is worth noting that the report says nothing about that." }, accept: ["it is worth", "one may", "it is possible to", "it should be"], hint: "Cabe + infinitive is the standard opener of a formal paragraph: cabe señalar, cabe recordar, cabe preguntarse. From caber, to fit." },
        { id: "es-u107l1-procede", type: "vocab", front: "procede", reading: "procede", meaning: "it is appropriate to", example: { jp: "No procede hablar de dinero en este punto.", en: "It is not appropriate to discuss money at this point." }, accept: ["it is appropriate to", "it is fitting to", "it is in order to", "it is proper to"], hint: "The verb of official propriety: no procede is how a chair rules a question out of order. From proceder." },
        { id: "es-u107l1-baste", type: "vocab", front: "baste", reading: "baste", meaning: "suffice it (to say)", example: { jp: "Baste decir que nadie quedó contento.", en: "Suffice it to say that nobody was happy." }, accept: ["suffice it to say", "let it be enough", "it is enough to say"], hint: "A subjunctive used on its own, from bastar. Baste decir que closes a subject by refusing to go into it." },
        { id: "es-u107l1-huelgadecir", type: "vocab", front: "huelga decir", reading: "huelgadecir", meaning: "needless to say", example: { jp: "Huelga decir que el problema sigue ahí.", en: "Needless to say, the problem is still there." }, accept: ["needless to say", "it goes without saying", "obviously"], hint: "From holgar, to be unnecessary — unrelated to la huelga, a strike, despite the identical form. Written register only." },
        { id: "es-u107l1-asaber", type: "vocab", front: "a saber", reading: "asaber", meaning: "namely", example: { jp: "Faltan dos cosas, a saber: el dinero y el tiempo.", en: "Two things are missing, namely: the money and the time." }, accept: ["namely", "that is to say", "specifically", "to wit"], hint: "Introduces the list that spells out what you just named in general. Always followed by a colon or a pause." },
        { id: "es-u107l1-acaecer", type: "vocab", front: "acaecer", reading: "acaecer", meaning: "to occur (formal)", example: { jp: "Los hechos acaecieron en la noche del martes.", en: "The events occurred on the night of Tuesday." }, accept: ["to occur", "to take place", "to happen", "occur"], hint: "The most formal of the happen verbs, used almost only in the third person about events. Pasar (u40) is the everyday word." },
      ],
    },
    {
      id: "es-u107l2",
      unit: 107,
      lesson: 2,
      title: "Referencia atrás y estilo nominal",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Refer back to something already named without repeating it: the said, the aforementioned, the usual, this, by means of.",
      items: [
        { id: "es-u107l2-dicho", type: "vocab", front: "dicho", reading: "dicho", meaning: "the said / aforementioned", example: { jp: "Dicho informe llegó una semana tarde.", en: "The said report arrived a week late." }, accept: ["the said", "aforementioned", "that", "the aforesaid"], hint: "Placed before the noun and with no article: dicho informe, dicha norma. It replaces a repeated name in formal prose." },
        { id: "es-u107l2-susodicho", type: "vocab", front: "el susodicho", reading: "elsusodicho", meaning: "the aforementioned (person)", example: { jp: "El susodicho no dijo nada en la reunión.", en: "The aforementioned person said nothing at the meeting." }, accept: ["the aforementioned", "the aforesaid", "the said person"], hint: "Used of people, and now nearly always with a touch of irony outside legal writing. Dicho covers things without that flavour." },
        { id: "es-u107l2-consabido", type: "vocab", front: "el consabido", reading: "elconsabido", meaning: "the usual / the well-known", example: { jp: "Llegó con el consabido informe de siempre.", en: "He turned up with the same old report as ever." }, accept: ["the usual", "the well-known", "the same old", "the familiar"], hint: "Points back at something the reader is assumed to know already, usually with a touch of weariness: el consabido problema. A lexicalised adjective, not a form of saber." },
        { id: "es-u107l2-sendos", type: "vocab", front: "sendos", reading: "sendos", meaning: "one each", example: { jp: "Los dos partidos presentaron sendos planes.", en: "The two parties each presented a plan of their own." }, accept: ["one each", "each of them a", "respective", "their respective"], hint: "Not two, and not both: sendos means one apiece. Sendas cartas = a letter each. It is often misused by natives, which is why writing it correctly reads as careful." },
        { id: "es-u107l2-ello", type: "vocab", front: "ello", reading: "ello", meaning: "this / that (neuter pronoun)", example: { jp: "Nadie dijo nada, y ello creó más problemas.", en: "Nobody said anything, and this created more problems." }, accept: ["this", "that", "it"], hint: "Refers to a whole idea rather than a noun, so it has no gender. Por ello = for that reason; todo ello = all of this." },
        { id: "es-u107l2-mediante", type: "vocab", front: "mediante", reading: "mediante", meaning: "by means of / through", example: { jp: "El cambio se hizo mediante una norma nueva.", en: "The change was made by means of a new rule." }, accept: ["by means of", "through", "via", "by way of"], hint: "A preposition, so no que and no article after it. It lets a formal sentence name a method without a verb: mediante el pago de una cantidad." },
      ],
    },
    {
      id: "es-u107l3",
      unit: 107,
      lesson: 3,
      title: "La subordinación formal",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Open a section of a formal text on a given topic, and tie a claim to the extent or the moment that justifies it.",
      items: [
        { id: "es-u107l3-enloquerespectaa", type: "vocab", front: "en lo que respecta a", reading: "enloquerespectaa", meaning: "as regards / with respect to", example: { jp: "En lo que respecta al dinero, el informe no dice nada.", en: "As regards the money, the report says nothing." }, accept: ["as regards", "with respect to", "as far as", "regarding"], hint: "Opens a new topic in a long text. The heaviest of this group, and it earns its weight only at the start of a section." },
        { id: "es-u107l3-porloqueserefierea", type: "vocab", front: "por lo que se refiere a", reading: "porloqueserefierea", meaning: "as far as ... is concerned", example: { jp: "Por lo que se refiere al tiempo, no hay ningún problema.", en: "As far as time is concerned, there is no problem at all." }, drill: { jp: "Por lo que se refiere a la fecha", en: "As far as the date is concerned" }, accept: ["as far as is concerned", "as regards", "with regard to", "concerning"], hint: "The same move as en lo que respecta a, built on referirse. Alternating the two is what keeps a long report from sounding mechanical." },
        { id: "es-u107l3-respectoa", type: "vocab", front: "respecto a", reading: "respectoa", meaning: "regarding", example: { jp: "Respecto a su carta, tenemos poco que decir.", en: "Regarding your letter, we have little to say." }, accept: ["regarding", "with regard to", "about", "concerning"], hint: "The short, usable one — con respecto a and respecto de are equally correct. Use this one in a letter and the longer forms in a report." },
        { id: "es-u107l3-encuantoa", type: "vocab", front: "en cuanto a", reading: "encuantoa", meaning: "as for", example: { jp: "En cuanto a los datos, hay que ver de dónde salen.", en: "As for the data, we need to see where it comes from." }, accept: ["as for", "as to", "regarding", "when it comes to"], hint: "Lighter than the others and fine in speech. Do not confuse it with en cuanto on its own, which means as soon as." },
        { id: "es-u107l3-enlamedidaenque", type: "vocab", front: "en la medida en que", reading: "enlamedidaenque", meaning: "insofar as / to the extent that", example: { jp: "El plan sirve en la medida en que haya dinero.", en: "The plan works insofar as there is money." }, accept: ["insofar as", "to the extent that", "inasmuch as", "in so far as"], hint: "Makes a claim true only as far as something else holds. Built on la medida (u65); the second en is part of the phrase." },
        { id: "es-u107l3-todavezque", type: "vocab", front: "toda vez que", reading: "todavezque", meaning: "given that / since", example: { jp: "No procede el pago, toda vez que falta un papel.", en: "The payment is not in order, given that a document is missing." }, accept: ["given that", "since", "inasmuch as", "seeing that"], hint: "A legal-register because. It states a reason already established rather than arguing for one — which is why rulings are full of it." },
      ],
    },
    {
      id: "es-u107l4",
      unit: 107,
      lesson: 4,
      title: "La pasiva del informe",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Report what a document shows, where a problem lies and what something amounts to, without naming an agent.",
      items: [
        { id: "es-u107l4-desprenderse", type: "vocab", front: "desprenderse", reading: "desprenderse", meaning: "to follow / emerge (from evidence)", example: { jp: "De los datos se desprende que el problema es más grande.", en: "It follows from the data that the problem is bigger than thought." }, accept: ["to follow", "to emerge", "to be clear from", "to be inferred"], hint: "De X se desprende que is the standard way a report states a conclusion nobody has to own. Literally, it comes loose from the evidence." },
        { id: "es-u107l4-hallarse", type: "vocab", front: "hallarse", reading: "hallarse", meaning: "to be (located/in a state)", example: { jp: "El edificio se halla en muy mal estado.", en: "The building is in very poor condition." }, accept: ["to be", "to be located", "to find oneself", "to be situated"], hint: "The formal estar. A notice says el expediente se halla a su disposición where speech would just say está." },
        { id: "es-u107l4-revestir", type: "vocab", front: "revestir", reading: "revestir", meaning: "to be of (importance/gravity)", example: { jp: "El caso reviste mucha importancia para el país.", en: "The case is of great importance for the country." }, accept: ["to be of", "to carry", "to have", "to be marked by"], hint: "Almost only with importancia, gravedad or interés. Revestir importancia is what a report says instead of ser importante." },
        { id: "es-u107l4-radicar", type: "vocab", front: "radicar", reading: "radicar", meaning: "to lie (in) / consist in", example: { jp: "El problema radica en la falta de dinero.", en: "The problem lies in the lack of money." }, drill: { jp: "El problema puede radicar aquí", en: "The problem can lie here" }, accept: ["to lie in", "to consist in", "to be rooted in", "lie"], hint: "Radicar en points at where something really comes from — the root, as la raíz suggests. Never used of physical location in this sense." },
        { id: "es-u107l4-estribar", type: "vocab", front: "estribar", reading: "estribar", meaning: "to rest on / hinge on", example: { jp: "La diferencia estriba en el modo de pagar.", en: "The difference rests on the method of payment." }, accept: ["to rest on", "to hinge on", "to lie in", "to consist in"], hint: "A near-twin of radicar en, and rarer, so it reads as deliberately literate. From el estribo, the stirrup you rest your weight on." },
        { id: "es-u107l4-obedecer", type: "vocab", front: "obedecer", reading: "obedecer", meaning: "to be due to (a cause)", example: { jp: "El cambio obedece a motivos que nadie quiso decir.", en: "The change is due to reasons nobody was willing to state." }, accept: ["to be due to", "to stem from", "to respond to", "to obey"], hint: "With a, and a cause rather than a person, this is the formal way to say something has a reason. The plain sense — to obey an order — is the same verb." },
      ],
    },
  ],
};
