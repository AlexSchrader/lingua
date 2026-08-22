// ES Unit 36 — Oraciones enlazadas ("Linked clauses") — A2 GRAMMAR (slot: grammar-4)
// Strand C, unit 4 of the grammar strand (A1 taught grammar 1–3 in u12–u14).
// A1 could state a sentence and join two of them with y/o/pero/porque/aunque
// (u20). A2's job is real subordination: relative clauses (que/quien/donde),
// reported thought (creo que…), and the discourse connectors that carry an
// argument across two clauses. Grammar has no item type — every pattern lives in
// the example sentences of function-word (and a few cognition-verb) items.
//
// AUTHORING CONVENTIONS (Latin script — see fr/unit1.js, authoritative):
//   - `front` is real orthography (accents, spaces); `reading` is its ASCII fold,
//     because the contract requires [a-z]+. The checker folds typed accents back.
//   - `example.jp` holds the SPANISH sentence ("jp" = target language, historical);
//     `example.en` is the English gloss.
//
// BLOCK-3 SCOPE NOTE. Authored in parallel with blocks 1–2 (units 21–35), which
// were still stubs in this tree. To be merge-safe regardless of what they teach,
// every example here draws ONLY on the authored A1 corpus (u1–u20) plus fronts
// this block itself teaches. Cognition verbs (pensar/creer/saber/parecer) are
// taught here as the vehicles for the que-clause; if a lower-numbered thematic
// unit claims one, the merge seat deletes the duplicate (lower order wins) and it
// survives as an example word — no learning lost. FREE: proper names María,
// Pablo, Ana, Madrid, España; transparent cognates (el problema, la música).
export const ES_UNIT36 = {
  id: "es-u36",
  lang: "es",
  title: "Oraciones enlazadas",
  order: 36,
  stage: "a2",
  lessons: [
    {
      id: "es-u36l1",
      unit: 36,
      lesson: 1,
      title: "Que, quien, donde",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Join a describing clause onto a noun: el libro que leo, la mujer que habla, la casa donde vivo.",
      items: [
        { id: "es-u36l1-que", type: "vocab", front: "que", reading: "que", meaning: "that / which / who", example: { jp: "El libro que leo es muy bueno.", en: "The book that I'm reading is very good." }, accept: ["which", "who", "whom"], hint: "The workhorse link: one word for \"that\", \"which\" and \"who\". No accent — that is qué, the question word. It just glues a second clause onto a noun: el libro que leo." },
        { id: "es-u36l1-loque", type: "vocab", front: "lo que", meaning: "what (the thing that)", reading: "loque", example: { jp: "Eso es lo que necesito.", en: "That's what I need." }, accept: ["that which", "the thing that"], hint: "Use lo que, not que, when there is no noun to hang it on — \"what\" in the sense of \"the thing that\": lo que necesito, lo que quiero." },
        { id: "es-u36l1-quien", type: "vocab", front: "quien", reading: "quien", meaning: "who (the one who)", example: { jp: "La mujer con quien hablo es mi amiga.", en: "The woman I'm talking to is my friend." }, accept: ["the one who", "whom"], hint: "quien is que's cousin for people, used mostly after a preposition: la persona con quien vivo. No accent — quién with one is the question." },
        { id: "es-u36l1-quienes", type: "vocab", front: "quienes", reading: "quienes", meaning: "who (more than one)", example: { jp: "Los amigos con quienes trabajo son de Madrid.", en: "The friends I work with are from Madrid." }, accept: ["the ones who", "those who"], hint: "The plural of quien, for more than one person: las personas quienes… → con quienes." },
        { id: "es-u36l1-donde", type: "vocab", front: "donde", reading: "donde", meaning: "where (the place that)", example: { jp: "Esta es la casa donde vivo.", en: "This is the house where I live." }, accept: ["in which", "at which"], hint: "The relative \"where\", no accent: la ciudad donde trabajo. dónde with one is the question \"where?\"." },
        { id: "es-u36l1-cuyo", type: "vocab", front: "cuyo", reading: "cuyo", meaning: "whose", example: { jp: "El hombre cuyo perro está en el parque es mi amigo.", en: "The man whose dog is in the park is my friend." }, accept: ["of whom", "whose (masculine)"], hint: "\"whose\" as a link. It agrees with the thing owned, not the owner: el hombre cuyo perro…, la mujer cuya casa…" },
      ],
    },
    {
      id: "es-u36l2",
      unit: 36,
      lesson: 2,
      title: "Creo que…",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Report a thought or claim in a second clause: creo que sí, pienso que es bueno, dice que no puede.",
      items: [
        { id: "es-u36l2-pensar", type: "vocab", front: "pensar", reading: "pensar", meaning: "to think", example: { jp: "Pienso que este libro es bueno.", en: "I think this book is good." }, accept: ["think", "thinks", "to plan"], hint: "pienso, piensas, piensa — the e becomes ie when stressed. Follow it with que to report the thought: pienso que…" },
        { id: "es-u36l2-creer", type: "vocab", front: "creer", reading: "creer", meaning: "to believe", example: { jp: "Creo que hoy llueve.", en: "I think it's going to rain today." }, accept: ["believe", "believes", "to think"], hint: "creo que… is the everyday \"I think that…\", a touch softer than pienso que. Creo que sí = I think so; creo que no = I don't think so." },
        { id: "es-u36l2-saber", type: "vocab", front: "saber", reading: "saber", meaning: "to know (a fact)", example: { jp: "Sé que mañana no trabajas.", en: "I know you don't work tomorrow." }, accept: ["know", "knows", "to know how"], hint: "sé, sabes, sabe. saber is knowing a fact or how to do something; knowing a person is a different verb (u40). No sé = I don't know." },
        { id: "es-u36l2-parecer", type: "vocab", front: "parecer", reading: "parecer", meaning: "to seem", example: { jp: "Parece que hoy hace frío.", en: "It seems cold today." }, accept: ["seem", "seems", "to look like", "to appear"], hint: "parece que… = it seems that… For an opinion Spanish flips it around: me parece bien = it seems good to me / I'm fine with it." },
        { id: "es-u36l2-recordar", type: "vocab", front: "recordar", reading: "recordar", meaning: "to remember", example: { jp: "No recuerdo dónde está la llave.", en: "I don't remember where the key is." }, accept: ["remember", "remembers", "to recall"], hint: "recuerdo, recuerdas, recuerda — o becomes ue when stressed, like poder → puedo." },
        { id: "es-u36l2-olvidar", type: "vocab", front: "olvidar", reading: "olvidar", meaning: "to forget", example: { jp: "Siempre olvido que no tienes coche.", en: "I always forget that you don't have a car." }, accept: ["forget", "forgets"], hint: "The mirror of recordar. Very often reflexive: se me olvidó = I forgot (literally \"it forgot itself on me\")." },
      ],
    },
    {
      id: "es-u36l3",
      unit: 36,
      lesson: 3,
      title: "Así que, por eso",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Show cause and result across two clauses: no hay pan, así que voy a la tienda; llueve, por eso no salgo.",
      items: [
        { id: "es-u36l3-asique", type: "vocab", front: "así que", reading: "asique", meaning: "so / therefore", example: { jp: "No hay leche, así que voy al supermercado.", en: "There's no milk, so I'm going to the supermarket." }, accept: ["and so", "therefore"], hint: "Points forward to the result: cause, así que result. It joins the two halves; entonces (u20) can stand alone at the start of a sentence." },
        { id: "es-u36l3-poreso", type: "vocab", front: "por eso", reading: "poreso", meaning: "that's why", example: { jp: "Llueve mucho, por eso no salgo.", en: "It's raining a lot, that's why I'm not going out." }, accept: ["for that reason", "because of that"], hint: "Literally \"for that\": por (u13) + eso (u12). It looks back at the cause you just gave." },
        { id: "es-u36l3-yaque", type: "vocab", front: "ya que", reading: "yaque", meaning: "since / seeing as", example: { jp: "Ya que estás aquí, ¿puedes ayudarme?", en: "Since you're here, can you help me?" }, accept: ["given that", "as", "now that"], hint: "Gives a reason the listener already knows about — \"seeing as…\". Like porque (u20) but it can open the sentence: ya que…, entonces…" },
        { id: "es-u36l3-porlotanto", type: "vocab", front: "por lo tanto", reading: "porlotanto", meaning: "therefore", example: { jp: "No tengo dinero; por lo tanto, no compro nada.", en: "I have no money; therefore, I'm not buying anything." }, accept: ["so", "consequently", "as a result"], hint: "The formal, written cousin of así que — the one you'd use in an essay or a report." },
        { id: "es-u36l3-esque", type: "vocab", front: "es que", reading: "esque", meaning: "the thing is / it's just that", example: { jp: "No voy al cine. Es que estoy muy cansado.", en: "I'm not going to the cinema. The thing is, I'm very tired." }, accept: ["it's that", "the fact is"], hint: "How Spanish softens an excuse or explanation: es que… = \"the thing is…\". Almost always answers an unspoken \"why?\"." },
        { id: "es-u36l3-osea", type: "vocab", front: "o sea", reading: "osea", meaning: "in other words / I mean", example: { jp: "Llego tarde, o sea, a las nueve.", en: "I'm arriving late, I mean, at nine." }, accept: ["that is", "meaning", "so basically"], hint: "Restates what you just said in plainer terms — \"I mean…\". Extremely common in speech." },
      ],
    },
    {
      id: "es-u36l4",
      unit: 36,
      lesson: 4,
      title: "Sin embargo, además",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Push an argument on: add a point (además), turn it (sin embargo), give an example (por ejemplo).",
      items: [
        { id: "es-u36l4-sinembargo", type: "vocab", front: "sin embargo", reading: "sinembargo", meaning: "however", example: { jp: "Es caro; sin embargo, es muy bueno.", en: "It's expensive; however, it's very good." }, accept: ["nevertheless", "nonetheless", "yet"], hint: "A stronger, more formal pero (u20). It usually sits after a semicolon or a full stop, not mid-clause." },
        { id: "es-u36l4-ademas", type: "vocab", front: "además", reading: "ademas", meaning: "besides / moreover", example: { jp: "No quiero ir. Además, no tengo tiempo.", en: "I don't want to go. Besides, I don't have time." }, accept: ["also", "in addition", "what's more"], hint: "Adds a second, clinching reason on top of the first: …. Además, …" },
        { id: "es-u36l4-encambio", type: "vocab", front: "en cambio", reading: "encambio", meaning: "on the other hand", example: { jp: "María habla mucho; en cambio, Pablo habla poco.", en: "María talks a lot; Pablo, on the other hand, talks little." }, accept: ["whereas", "by contrast", "instead"], hint: "Sets two things side by side to contrast them — \"whereas\". Note: it does not mean \"change\" here, even though cambio does elsewhere." },
        { id: "es-u36l4-esdecir", type: "vocab", front: "es decir", reading: "esdecir", meaning: "that is to say", example: { jp: "Llega mañana, es decir, el lunes.", en: "He arrives tomorrow, that is, on Monday." }, accept: ["in other words", "i.e.", "namely"], hint: "The written, precise version of o sea: it clarifies by restating. es decir = \"that is to say\"." },
        { id: "es-u36l4-porejemplo", type: "vocab", front: "por ejemplo", reading: "porejemplo", meaning: "for example", example: { jp: "Me gustan las frutas, por ejemplo la manzana.", en: "I like fruit, for example apples." }, accept: ["for instance", "such as", "e.g."], hint: "por (u13) + ejemplo (u18). Introduces a case that proves your point." },
        { id: "es-u36l4-sobretodo", type: "vocab", front: "sobre todo", reading: "sobretodo", meaning: "above all / especially", example: { jp: "Me gusta la ciudad, sobre todo el centro.", en: "I like the city, especially the centre." }, accept: ["especially", "most of all", "particularly"], hint: "Singles out the most important case: …, sobre todo … Two words — el sobretodo written as one would be an overcoat." },
      ],
    },
  ],
};
