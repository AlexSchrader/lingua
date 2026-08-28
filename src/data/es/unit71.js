// ES Unit 71 — Un poco de gramática · 6 (slot: grammar-8 — nuance, evidentiality, nominalization) — B1
// The last of the three grammar units, and the most abstract. Its real subject is
// NOMINALIZATION: turning a verb into a noun (aumentar → el aumento) is what
// separates spoken Spanish from written Spanish, and a learner who cannot do it can
// speak but cannot read a report.
//
// SCOPE BOUNDARY: block 1's u54 is "hedging and uncertainty", so this unit takes NO
// hedges — evidentiality lives in u70 l4 (naming where knowledge came from), and the
// nuance here is DEGREE, not doubt. A2 owns el crecimiento (u66 is this block's, and
// is used, not re-taught). Every front checked against the live corpus. Examples are
// two clauses, in the written register the nominalizations belong to.
//   FREE: turismo, educación, abstracto, práctico, proyecto, simple
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT71 = {
  id: "es-u71",
  lang: "es",
  title: "Un poco de gramática · 6",
  order: 71,
  stage: "b1",
  lessons: [
    {
      id: "es-u71l1",
      unit: 71,
      lesson: 1,
      title: "Turning a verb into a noun",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read written Spanish — el aumento, la disminución, el desarrollo, la desaparición, la construcción, la mejora.",
      items: [
        { id: "es-u71l1-ladisminucion", type: "vocab", front: "la disminución", reading: "ladisminucion", meaning: "the decrease", example: { jp: "La disminución del paro es una buena noticia para la economía.", en: "The decrease in unemployment is good news for the economy." }, accept: ["the fall", "reduction"], hint: "The opposite of el aumento. From disminuir, to decrease." },
        { id: "es-u71l1-ladesaparicion", type: "vocab", front: "la desaparición", reading: "ladesaparicion", meaning: "the disappearance", example: { jp: "La desaparición de estas especies viene del calentamiento y de la contaminación.", en: "The disappearance of these species comes from global warming and pollution." }, accept: ["the loss", "extinction"], hint: "From desaparecer (u65). The opposite is la aparición." },
        { id: "es-u71l1-laconstruccion", type: "vocab", front: "la construcción", reading: "laconstruccion", meaning: "the construction", example: { jp: "La construcción del puente duró cuatro años, y costó muchísimo dinero.", en: "The construction of the bridge took four years, and it cost a great deal of money." }, accept: ["the building"], hint: "From construir. Also a building site or a building under way." },
        { id: "es-u71l1-lacreacion", type: "vocab", front: "la creación", reading: "lacreacion", meaning: "the creation / setting up", example: { jp: "La creación de este parque cambió toda la ciudad.", en: "The creation of this park changed the whole city." }, accept: ["the creation", "the setting up", "the founding"], hint: "From crear. Written Spanish prefers the noun — la creación de… — where speech says se creó…" },
        { id: "es-u71l1-lareduccion", type: "vocab", front: "la reducción", reading: "lareduccion", meaning: "the reduction", example: { jp: "La reducción de gastos afectó a toda la empresa.", en: "The reduction in costs affected the whole company." }, accept: ["the reduction", "the cut", "the decrease"], hint: "From reducir. Same move as la disminución, the first card here: verb turned into a noun." },
        { id: "es-u71l1-laproduccion", type: "vocab", front: "la producción", reading: "laproduccion", meaning: "production / output", example: { jp: "La producción de la fábrica bajó mucho el año pasado.", en: "The factory's output fell a lot last year." }, accept: ["production", "output"], hint: "From producir. La producción nacional; also the making of a film." },
      ],
    },
    {
      id: "es-u71l2",
      unit: 71,
      lesson: 2,
      title: "Naming the abstract",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle ideas as things — la noción, el concepto, el punto de vista, el ámbito, la cuestión, el enfoque.",
      items: [
        { id: "es-u71l2-elpuntodevista", type: "vocab", front: "el punto de vista", reading: "elpuntodevista", meaning: "the point of view", example: { jp: "Desde mi punto de vista, la idea es buena, aunque otros no la vean así.", en: "From my point of view, the idea is good, although others don't see it that way." }, accept: ["the viewpoint", "perspective", "standpoint"], hint: "desde mi punto de vista = from my point of view, a standard way to open an opinion." },
        { id: "es-u71l2-elambito", type: "vocab", front: "el ámbito", reading: "elambito", meaning: "the field", example: { jp: "Trabaja en el ámbito de la educación desde hace más de veinte años.", en: "She has worked in the field of education for more than twenty years." }, accept: ["the area", "sphere", "scope"], hint: "en el ámbito de = in the field of. A more formal el campo (field / area)." },
        { id: "es-u71l2-lacuestion", type: "vocab", front: "la cuestión", reading: "lacuestion", meaning: "the issue", example: { jp: "Esa es otra cuestión, y ahora mismo no tenemos tiempo para tratarla.", en: "That's another matter, and right now we don't have time to deal with it." }, accept: ["the matter", "the question"], hint: "An issue or matter to resolve — not a question you ask (la pregunta, A2). Es cuestión de tiempo." },
        { id: "es-u71l2-elenfoque", type: "vocab", front: "el enfoque", reading: "elenfoque", meaning: "the approach", example: { jp: "Su enfoque del problema es muy práctico, de ahí que tenga tanto éxito.", en: "Her approach to the problem is very practical, which is why it's so successful." }, accept: ["the focus", "angle", "perspective"], hint: "How you approach a problem. From enfocar, to focus." },
        { id: "es-u71l2-laperspectiva", type: "vocab", front: "la perspectiva", reading: "laperspectiva", meaning: "the perspective / outlook", example: { jp: "Desde otra perspectiva, el problema parece mucho más pequeño.", en: "From another perspective, the problem looks much smaller." }, accept: ["the perspective", "the point of view", "the outlook"], hint: "Close to el punto de vista, the first card here. It also means what lies ahead: las perspectivas económicas." },
        { id: "es-u71l2-elmarco", type: "vocab", front: "el marco", reading: "elmarco", meaning: "the framework / context", example: { jp: "Todo esto ocurre en el marco de una crisis larga.", en: "All of this is happening in the context of a long crisis." }, accept: ["the framework", "the context", "the setting"], hint: "Literally a picture frame. En el marco de = within the context of." },
      ],
    },
    {
      id: "es-u71l3",
      unit: 71,
      lesson: 3,
      title: "Almost, hardly, even",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Grade a statement without hedging it — hasta cierto punto, prácticamente, en el fondo, en general, en cierto modo, la verdad es que.",
      items: [
        { id: "es-u71l3-hastaciertopunto", type: "vocab", front: "hasta cierto punto", reading: "hastaciertopunto", meaning: "to some extent", example: { jp: "Tienes razón hasta cierto punto, pero no en todo lo que dices.", en: "You're right to some extent, but not in everything you say." }, accept: ["to a certain extent", "up to a point"], hint: "Grants part of a claim without granting all of it. From punto, point (as in punto de vista)." },
        { id: "es-u71l3-practicamente", type: "vocab", front: "prácticamente", reading: "practicamente", meaning: "practically", example: { jp: "El trabajo está prácticamente terminado, así que pronto podré descansar.", en: "The work is practically finished, so I'll soon be able to rest." }, accept: ["almost", "virtually", "nearly"], hint: "prácticamente = almost, all but. Prácticamente nadie vino — almost nobody came." },
        { id: "es-u71l3-enelfondo", type: "vocab", front: "en el fondo", reading: "enelfondo", meaning: "deep down", example: { jp: "En el fondo es buena persona, aunque a veces parezca antipático.", en: "Deep down he's a good person, although he sometimes seems unpleasant." }, accept: ["at heart", "basically", "when it comes down to it"], hint: "What is really true under the surface. El fondo is the bottom or the background." },
        { id: "es-u71l3-engeneral", type: "vocab", front: "en general", reading: "engeneral", meaning: "in general", example: { jp: "En general, la comida de aquí es muy buena, sobre todo el pescado.", en: "In general, the food here is very good, especially the fish." }, accept: ["broadly", "generally", "on the whole"], hint: "por lo general means the same. The opposite is en particular." },
        { id: "es-u71l3-enciertomodo", type: "vocab", front: "en cierto modo", reading: "enciertomodo", meaning: "in a way", example: { jp: "En cierto modo es el mismo problema, pero en otro ámbito.", en: "In a way it's the same problem, but in another field." }, accept: ["sort of", "in a sense"], hint: "Softens a claim: en cierto modo tienes razón — you're right, in a way." },
        { id: "es-u71l3-laverdadesque", type: "vocab", front: "la verdad es que", reading: "laverdadesque", meaning: "the truth is", example: { jp: "La verdad es que no leí el libro; solo vi la película.", en: "The truth is I didn't read the book; I only saw the film." }, accept: ["to be honest", "actually", "truth be told"], hint: "Introduces an honest admission — a spoken 'to tell the truth'. La verdad, on its own, does the same job." },
      ],
    },
    {
      id: "es-u71l4",
      unit: 71,
      lesson: 4,
      title: "The shape of an argument",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Structure a written point — por un lado, por otro lado, el propósito, el proceso, el planteamiento, en conclusión.",
      items: [
        { id: "es-u71l4-porunlado", type: "vocab", front: "por un lado", reading: "porunlado", meaning: "on the one hand", example: { jp: "Por un lado, el trabajo es interesante; por otro, paga muy poco.", en: "On the one hand, the job is interesting; on the other, it pays very little." }, accept: ["for one thing", "firstly"], hint: "Almost always paired with por otro (lado) — the two carry a two-sided argument." },
        { id: "es-u71l4-porotrolado", type: "vocab", front: "por otro lado", reading: "porotrolado", meaning: "on the other hand", example: { jp: "Me gustaría ir de viaje; por otro lado, ahora mismo no tengo mucho dinero.", en: "I'd like to go on a trip; on the other hand, right now I don't have much money." }, accept: ["then again", "for another thing"], hint: "The other half of por un lado. Also used alone to add a point." },
        { id: "es-u71l4-elplanteamiento", type: "vocab", front: "el planteamiento", reading: "elplanteamiento", meaning: "the approach", example: { jp: "Su planteamiento es interesante, aunque no estoy seguro de que funcione.", en: "His approach is interesting, although I'm not sure it works." }, accept: ["the framing", "the way of putting it"], hint: "From plantear, to pose or set out a problem. How you frame a question." },
        { id: "es-u71l4-enconclusion", type: "vocab", front: "en conclusión", reading: "enconclusion", meaning: "in conclusion", example: { jp: "En conclusión, la idea es buena, pero necesita más tiempo y más dinero.", en: "In conclusion, the idea is good, but it needs more time and more money." }, accept: ["to conclude", "in short"], hint: "Closes a written argument. Also en resumen, in summary." },
        { id: "es-u71l4-enprimerlugar", type: "vocab", front: "en primer lugar", reading: "enprimerlugar", meaning: "firstly / in the first place", example: { jp: "En primer lugar, hay que definir bien el problema.", en: "Firstly, the problem has to be properly defined." }, accept: ["firstly", "in the first place", "to begin with"], hint: "Opens a written list: en primer lugar… , en segundo lugar… , and closes with en conclusión." },
        { id: "es-u71l4-cabedestacar", type: "vocab", front: "cabe destacar", reading: "cabedestacar", meaning: "it is worth highlighting", example: { jp: "Cabe destacar que nadie sabía nada de esto.", en: "It is worth highlighting that nobody knew anything about this." }, accept: ["it is worth noting", "it should be highlighted", "notably"], hint: "A fixed impersonal formula of written Spanish: cabe destacar que… , cabe señalar que…" },
      ],
    },
  ],
};
