// ES Unit 75 — Adjetivos · 3 (slot: coverage-b1-2) — B1
// The second coverage unit, continuing the A2 series (Adjetivos · 1/· 2) and
// reaching past the adjectives A2 already owns (capaz, ancho, ligero, propio…).
// High-frequency B1 adjectives for capacity, texture, sufficiency and time.
// Examples are two clauses. Every front checked against the live A1+A2 corpus.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT75 = {
  id: "es-u75",
  lang: "es",
  title: "Adjetivos · 3",
  order: 75,
  stage: "b1",
  lessons: [
    {
      id: "es-u75l1",
      unit: 75,
      lesson: 1,
      title: "Able and willing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe someone's readiness — hábil, dispuesto, consciente, harto, atento, torpe.",
      items: [
        { id: "es-u75l1-habil", type: "vocab", front: "hábil", reading: "habil", meaning: "skilful", example: { jp: "Es muy hábil en la cocina, así que en casa siempre cocina él.", en: "He's very skilful in the kitchen, so at home he always does the cooking." }, accept: ["skilled", "clever", "good at"], hint: "hábil para/en algo. The noun is la habilidad, skill. The opposite is torpe (this lesson)." },
        { id: "es-u75l1-dispuesto", type: "vocab", front: "dispuesto", reading: "dispuesto", meaning: "willing", example: { jp: "Estoy dispuesto a ayudar, siempre que me avisen con tiempo.", en: "I'm willing to help, provided they let me know in advance." }, accept: ["ready", "prepared"], hint: "estar dispuesto A hacer algo — willing to. From disponer." },
        { id: "es-u75l1-consciente", type: "vocab", front: "consciente", reading: "consciente", meaning: "aware", example: { jp: "Soy consciente del problema, pero por ahora no puedo hacer nada.", en: "I'm aware of the problem, but for now I can't do anything." }, accept: ["conscious", "mindful"], hint: "ser consciente DE algo. The opposite is inconsciente, unaware or reckless." },
        { id: "es-u75l1-harto", type: "vocab", front: "harto", reading: "harto", meaning: "fed up", example: { jp: "Está harto de esperar, así que se va a buscar otra solución.", en: "He's fed up with waiting, so he's going to look for another solution." }, accept: ["sick of", "tired of"], hint: "estar harto DE algo. Strong and informal — ¡estoy harto! = I've had enough!" },
        { id: "es-u75l1-atento", type: "vocab", front: "atento", reading: "atento", meaning: "attentive", example: { jp: "Es muy atento con sus abuelos, de ahí que lo quieran tanto.", en: "He's very attentive to his grandparents, which is why they love him so much." }, accept: ["thoughtful", "considerate", "alert"], hint: "Both paying attention and being considerate. estar atento = to be alert; ser atento = to be considerate." },
        { id: "es-u75l1-torpe", type: "vocab", front: "torpe", reading: "torpe", meaning: "clumsy", example: { jp: "Soy muy torpe con las manos, así que nunca arreglo nada en casa.", en: "I'm very clumsy with my hands, so I never fix anything at home." }, accept: ["awkward", "slow"], hint: "Physically clumsy, or slow to understand. The opposite is hábil (this lesson)." },
      ],
    },
    {
      id: "es-u75l2",
      unit: 75,
      lesson: 2,
      title: "Shape and texture",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe an object physically — grueso, fino, liso, áspero, curvo, apretado.",
      items: [
        { id: "es-u75l2-grueso", type: "vocab", front: "grueso", reading: "grueso", meaning: "thick", example: { jp: "Se puso un abrigo grueso, ya que hacía mucho frío fuera.", en: "He put on a thick coat, since it was very cold outside." }, accept: ["heavy (fabric)", "bulky"], hint: "Thick of an object; el grosor is the thickness. The opposite is fino." },
        { id: "es-u75l2-fino", type: "vocab", front: "fino", reading: "fino", meaning: "fine", example: { jp: "Es un vino muy fino, aunque no sea nada caro.", en: "It's a very fine wine, although it isn't at all expensive." }, accept: ["thin", "delicate", "refined"], hint: "Thin and delicate (opposite of grueso), and refined: modales finos, fine manners." },
        { id: "es-u75l2-liso", type: "vocab", front: "liso", reading: "liso", meaning: "smooth", example: { jp: "Tiene el pelo liso y largo, mientras que su hermana lo tiene rizado.", en: "She has smooth, long hair, whereas her sister's is curly." }, accept: ["straight", "flat", "plain"], hint: "Smooth to the touch, straight (of hair), and plain (a fabric with no pattern)." },
        { id: "es-u75l2-aspero", type: "vocab", front: "áspero", reading: "aspero", meaning: "rough", example: { jp: "Tiene un carácter áspero, aunque en el fondo es buena persona.", en: "He has a rough manner, although deep down he's a good person." }, accept: ["coarse", "harsh"], hint: "Rough to the touch, and harsh of manner. The opposite is suave, smooth/soft." },
        { id: "es-u75l2-curvo", type: "vocab", front: "curvo", reading: "curvo", meaning: "curved", example: { jp: "La carretera es muy curva, de modo que hay que conducir despacio.", en: "The road is very winding, so you have to drive slowly." }, accept: ["bent", "winding"], hint: "The opposite of recto, straight. Una curva is a bend in the road." },
        { id: "es-u75l2-apretado", type: "vocab", front: "apretado", reading: "apretado", meaning: "tight", example: { jp: "El pantalón me queda muy apretado, así que voy a cambiarlo por otro.", en: "The trousers are very tight on me, so I'm going to change them for another pair." }, accept: ["snug", "packed"], hint: "Tight clothes, and a packed schedule: una agenda apretada. From apretar, to squeeze." },
      ],
    },
    {
      id: "es-u75l3",
      unit: 75,
      lesson: 3,
      title: "Enough and fitting",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Judge whether something is right — escaso, conveniente, razonable, imprescindible, llamativo, dudoso.",
      items: [
        { id: "es-u75l3-escaso", type: "vocab", front: "escaso", reading: "escaso", meaning: "scarce", example: { jp: "El agua es escasa en esta región, de ahí que se cuide tanto.", en: "Water is scarce in this region, which is why it's looked after so carefully." }, accept: ["limited", "in short supply", "meagre"], hint: "In short supply. La escasez is the shortage." },
        { id: "es-u75l3-conveniente", type: "vocab", front: "conveniente", reading: "conveniente", meaning: "advisable", example: { jp: "No es conveniente salir con esta tormenta, mejor esperamos a mañana.", en: "It's not advisable to go out in this storm, we'd better wait until tomorrow." }, accept: ["suitable", "wise", "convenient"], hint: "Es conveniente que + subjunctive. From convenir, to suit. Also 'convenient'." },
        { id: "es-u75l3-razonable", type: "vocab", front: "razonable", reading: "razonable", meaning: "reasonable", example: { jp: "Pide un precio razonable, así que se lo compro sin discutir.", en: "He's asking a reasonable price, so I'll buy it from him without arguing." }, accept: ["fair", "sensible"], hint: "From la razón (u40). A reasonable person, a reasonable price." },
        { id: "es-u75l3-imprescindible", type: "vocab", front: "imprescindible", reading: "imprescindible", meaning: "essential", example: { jp: "El pasaporte es imprescindible para viajar, así que no lo olvides.", en: "The passport is essential for travelling, so don't forget it." }, accept: ["indispensable", "a must", "vital"], hint: "Something you cannot do without. A long word, but very common in Spain." },
        { id: "es-u75l3-llamativo", type: "vocab", front: "llamativo", reading: "llamativo", meaning: "striking", example: { jp: "Lleva un abrigo muy llamativo, de esos que se ven desde lejos.", en: "She's wearing a very striking coat, the kind you can see from far away." }, accept: ["eye-catching", "flashy", "showy"], hint: "From llamar (A1) — something that 'calls' your attention. un color llamativo, a loud colour." },
        { id: "es-u75l3-dudoso", type: "vocab", front: "dudoso", reading: "dudoso", meaning: "doubtful", example: { jp: "Es dudoso que lleguen a tiempo, porque salieron muy tarde.", en: "It's doubtful they'll arrive on time, because they left very late." }, accept: ["uncertain", "questionable"], hint: "es dudoso que + subjunctive (lleguen). From la duda, doubt." },
      ],
    },
    {
      id: "es-u75l4",
      unit: 75,
      lesson: 4,
      title: "Time and belonging",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place something in time or ownership — actual, reciente, previo, cotidiano, ajeno, duradero.",
      items: [
        { id: "es-u75l4-previo", type: "vocab", front: "previo", reading: "previo", meaning: "previous", example: { jp: "Sin experiencia previa es difícil encontrar trabajo, lo cual no es justo.", en: "Without previous experience it's hard to find work, which isn't fair." }, accept: ["prior", "earlier"], hint: "Comes before the noun or after: un aviso previo, sin previo aviso — without prior warning." },
        { id: "es-u75l4-cotidiano", type: "vocab", front: "cotidiano", reading: "cotidiano", meaning: "everyday", example: { jp: "Forma parte de la vida cotidiana, así que ya nadie se fija en ello.", en: "It's part of everyday life, so nobody notices it anymore." }, accept: ["daily", "day-to-day"], hint: "la vida cotidiana = everyday life, the phrase it lives in. From the Latin for 'each day'." },
        { id: "es-u75l4-ajeno", type: "vocab", front: "ajeno", reading: "ajeno", meaning: "someone else's", example: { jp: "No debemos meternos en la vida ajena, aunque nos preocupe.", en: "We shouldn't get involved in other people's lives, even if it worries us." }, accept: ["of others", "foreign to"], hint: "Belonging to someone else — lo ajeno, what is not yours. The opposite of propio." },
        { id: "es-u75l4-duradero", type: "vocab", front: "duradero", reading: "duradero", meaning: "lasting", example: { jp: "Es una amistad duradera, de esas que duran toda la vida.", en: "It's a lasting friendship, the kind that lasts a whole lifetime." }, accept: ["long-lasting", "durable", "enduring"], hint: "From durar, to last. la paz duradera, lasting peace." },
        { id: "es-u75l4-vigente", type: "vocab", front: "vigente", reading: "vigente", meaning: "in force / current", example: { jp: "Esa norma sigue vigente desde hace veinte años.", en: "That rule has been in force for twenty years." }, accept: ["in force", "current", "valid"], hint: "Of laws, contracts and rules that still apply: la ley vigente. Its opposite is derogado." },
        { id: "es-u75l4-pasajero", type: "vocab", front: "pasajero", reading: "pasajero", meaning: "passing / temporary", example: { jp: "Fue una moda pasajera que duró un verano.", en: "It was a passing fashion that lasted one summer." }, accept: ["passing", "temporary", "fleeting"], hint: "From pasar: it goes by. As a noun, el pasajero is a passenger." },
      ],
    },
  ],
};
