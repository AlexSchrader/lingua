// ES Unit 74 — Verbos de acción · 3 (slot: coverage-b1-1) — B1
// The first coverage unit: not a new theme, but the high-frequency verbs the B1
// thematic and grammar units kept leaning on. Coverage is a mixed bag by design —
// it thickens the language toward its frequency target. Continues the A2 series
// (Verbos de acción · 1/· 2), and deliberately avoids the verbs A2 coverage already
// owns (lograr, evitar, mantener…), reaching one step further out. Examples are two
// clauses. Every front checked against the live A1+A2 corpus.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT74 = {
  id: "es-u74",
  lang: "es",
  title: "Verbos de acción · 3",
  order: 74,
  stage: "b1",
  lessons: [
    {
      id: "es-u74l1",
      unit: 74,
      lesson: 1,
      title: "Deciding and proposing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Move a plan forward — plantear, descartar, rechazar, sugerir, proponer, acordar.",
      items: [
        { id: "es-u74l1-plantear", type: "vocab", front: "plantear", reading: "plantear", meaning: "to raise (a question)", example: { jp: "Planteó una pregunta muy difícil, así que nadie supo qué responder.", en: "He raised a very difficult question, so nobody knew what to answer." }, drill: { jp: "Quiero plantear una cuestión importante", en: "I want to raise an important issue" }, accept: ["to pose", "to put forward", "to bring up"], hint: "To set out a problem or raise a point. The noun is el planteamiento (u71)." },
        { id: "es-u74l1-descartar", type: "vocab", front: "descartar", reading: "descartar", meaning: "to rule out", example: { jp: "Descartaron esa idea porque costaba demasiado dinero.", en: "They ruled out that idea because it cost too much money." }, drill: { jp: "Quiero descartar esa posibilidad", en: "I want to rule out that possibility" }, accept: ["to discard", "to dismiss"], hint: "From carta, card — literally to throw a card out. No descarto nada = I'm not ruling anything out." },
        { id: "es-u74l1-rechazar", type: "vocab", front: "rechazar", reading: "rechazar", meaning: "to reject", example: { jp: "Rechazó la oferta, aunque el sueldo era muy bueno, porque quería seguir estudiando.", en: "She turned down the offer, although the pay was very good, because she wanted to keep studying." }, drill: { jp: "Quiero rechazar la oferta", en: "I want to reject the offer" }, accept: ["to turn down", "to refuse"], hint: "The opposite of aceptar. rechazar una oferta, una idea, a una persona." },
        { id: "es-u74l1-sugerir", type: "vocab", front: "sugerir", reading: "sugerir", meaning: "to suggest", example: { jp: "Te sugiero que vayas pronto, porque luego hay mucha gente.", en: "I suggest you go early, because later there are a lot of people." }, drill: { jp: "Quiero sugerir otra solución", en: "I want to suggest another solution" }, accept: ["to recommend", "to hint at"], hint: "sugerir que + subjunctive: te sugiero que vayas. e → ie: sugiero." },
        { id: "es-u74l1-proponer", type: "vocab", front: "proponer", reading: "proponer", meaning: "to propose", example: { jp: "Propongo que lo dejemos para mañana, ya que hoy estamos muy cansados.", en: "I propose we leave it for tomorrow, since today we're very tired." }, drill: { jp: "Quiero proponer un plan nuevo", en: "I want to propose a new plan" }, accept: ["to suggest", "to put forward"], hint: "proponer que + subjunctive. Like poner: propongo, propuse. Reflexive proponerse = to set oneself a goal." },
        { id: "es-u74l1-acordar", type: "vocab", front: "acordar", reading: "acordar", meaning: "to agree on", example: { jp: "Acordamos vernos el viernes, pero al final nadie pudo.", en: "We agreed to meet on Friday, but in the end nobody could." }, drill: { jp: "Quiero acordar una fecha pronto", en: "I want to agree on a date soon" }, accept: ["to agree", "to decide"], hint: "acordar algo = to agree on it. Careful: acordarse de is a different verb — to remember." },
      ],
    },
    {
      id: "es-u74l2",
      unit: 74,
      lesson: 2,
      title: "More and less",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about change of degree — aportar, reducir, conservar, alcanzar, superar, destacar.",
      items: [
        { id: "es-u74l2-aportar", type: "vocab", front: "aportar", reading: "aportar", meaning: "to contribute", example: { jp: "Cada uno aportó una idea, y así el plan salió mucho mejor.", en: "Everyone contributed an idea, and that way the plan turned out much better." }, drill: { jp: "Quiero aportar algo al proyecto", en: "I want to contribute something to the project" }, accept: ["to bring", "to provide", "to add"], hint: "To contribute something useful. La aportación is the contribution." },
        { id: "es-u74l2-reducir", type: "vocab", front: "reducir", reading: "reducir", meaning: "to reduce", example: { jp: "Han reducido el precio a la mitad, así que ahora sí me lo puedo comprar.", en: "They've cut the price by half, so now I can actually afford it." }, drill: { jp: "Quiero reducir el gasto del mes", en: "I want to reduce the month's spending" }, accept: ["to cut", "to lower", "to bring down"], hint: "The opposite of aumentar (u71). Like conducir: reduzco, reduje." },
        { id: "es-u74l2-conservar", type: "vocab", front: "conservar", reading: "conservar", meaning: "to keep", example: { jp: "Conservamos la casa del abuelo, aunque ya nadie vive en ella.", en: "We keep grandfather's house, although nobody lives in it anymore." }, drill: { jp: "Quiero conservar el piso de mis padres", en: "I want to keep my parents' flat" }, accept: ["to preserve", "to retain", "to hold on to"], hint: "To keep something as it is. conservar la calma = to keep calm." },
        { id: "es-u74l2-superar", type: "vocab", front: "superar", reading: "superar", meaning: "to overcome", example: { jp: "Superó la enfermedad, y desde entonces valora mucho más cada día.", en: "She got over the illness, and since then she appreciates each day much more." }, drill: { jp: "Superar la crisis es difícil", en: "Overcoming the crisis is difficult" }, accept: ["to get over", "to exceed", "to beat"], hint: "To overcome a problem, and to exceed a figure: superar los cien — to go over a hundred." },
        { id: "es-u74l2-destacar", type: "vocab", front: "destacar", reading: "destacar", meaning: "to stand out", example: { jp: "Destaca en matemáticas, mientras que a su hermano se le dan mejor las letras.", en: "He stands out in maths, whereas his brother is better at humanities." }, drill: { jp: "Destacar entre tantos es difícil", en: "Standing out among so many is difficult" }, accept: ["to be outstanding", "to highlight", "to emphasise"], hint: "To stand out, and to point out: hay que destacar que… — it should be stressed that…" },
        { id: "es-u74l2-recortar", type: "vocab", front: "recortar", reading: "recortar", meaning: "to cut / cut back", example: { jp: "El gobierno decidió recortar el gasto durante dos años.", en: "The government decided to cut spending for two years." }, drill: { jp: "La empresa puede recortar el gasto", en: "The company can cut back spending" }, accept: ["to cut", "to cut back", "to reduce"], hint: "For budgets and hours: recortar gastos, recortar personal. Also to cut paper with scissors." },
      ],
    },
    {
      id: "es-u74l3",
      unit: 74,
      lesson: 3,
      title: "Things that happen inside you",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe inner reactions — enterarse, atreverse, quejarse, esforzarse, acostumbrarse, arrepentirse.",
      items: [
        { id: "es-u74l3-enterarse", type: "vocab", front: "enterarse", reading: "enterarse", meaning: "to find out", example: { jp: "Nos enteramos tarde de la reunión, así que al final no fuimos.", en: "We found out about the meeting too late, so in the end we didn't go." }, drill: { jp: "Enterarse de todo es imposible", en: "Finding out everything is impossible" }, accept: ["to hear about", "to realise"], hint: "enterarse DE algo = to find out about. ¿Te has enterado? = Did you hear?" },
        { id: "es-u74l3-atreverse", type: "vocab", front: "atreverse", reading: "atreverse", meaning: "to dare", example: { jp: "No se atreve a hablar en público, aunque sabe muchísimo del tema.", en: "He doesn't dare speak in public, although he knows a great deal about the subject." }, drill: { jp: "Atreverse a hablar es difícil", en: "Daring to speak is difficult" }, accept: ["to have the nerve", "to venture"], hint: "atreverse A hacer algo. ¿Te atreves? = Do you dare?" },
        { id: "es-u74l3-esforzarse", type: "vocab", front: "esforzarse", reading: "esforzarse", meaning: "to make an effort", example: { jp: "Se esfuerza mucho en el trabajo, de ahí que le vaya tan bien.", en: "He works very hard at his job, which is why he's doing so well." }, drill: { jp: "Esforzarse cada día es importante", en: "Making an effort every day is important" }, accept: ["to try hard", "to strive"], hint: "esforzarse EN/POR hacer algo. o → ue: me esfuerzo. From fuerza, strength (u34)." },
        { id: "es-u74l3-acostumbrarse", type: "vocab", front: "acostumbrarse", reading: "acostumbrarse", meaning: "to get used to", example: { jp: "Me costó acostumbrarme al frío, pero ahora ya casi ni lo noto.", en: "It was hard for me to get used to the cold, but now I barely even notice it." }, drill: { jp: "Acostumbrarse a la ciudad es lento", en: "Getting used to the city is slow" }, accept: ["to grow accustomed", "to adjust"], hint: "acostumbrarse A algo. From la costumbre, custom (A2)." },
        { id: "es-u74l3-arrepentirse", type: "vocab", front: "arrepentirse", reading: "arrepentirse", meaning: "to regret", example: { jp: "No me arrepiento de nada, aunque cometí muchos errores.", en: "I don't regret anything, although I made a lot of mistakes." }, drill: { jp: "Arrepentirse del error es normal", en: "Regretting the mistake is normal" }, accept: ["to be sorry", "to repent"], hint: "arrepentirse DE algo — regret a decision. lamentar (u73) regrets a fact; this one regrets your own choice." },
        { id: "es-u74l3-conformarse", type: "vocab", front: "conformarse", reading: "conformarse", meaning: "to settle for / make do", example: { jp: "No se conforma con un resultado normal.", en: "He doesn't settle for an ordinary result." }, drill: { jp: "Conformarse con poco es sano", en: "Making do with little is healthy" }, accept: ["to settle for", "to make do", "to be content with"], hint: "conformarse CON algo: accepting less than you wanted, and stopping there." },
      ],
    },
    {
      id: "es-u74l4",
      unit: 74,
      lesson: 4,
      title: "Everyday actions",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Round out the common verbs — soportar, merecer, asegurar, advertir, fijarse, acudir.",
      items: [
        { id: "es-u74l4-soportar", type: "vocab", front: "soportar", reading: "soportar", meaning: "to put up with", example: { jp: "No soporto el ruido de la calle, de ahí que quiera cambiar de piso.", en: "I can't stand the noise from the street, which is why I want to change flats." }, drill: { jp: "Soportar el calor de agosto es duro", en: "Putting up with August heat is hard" }, accept: ["to bear", "to stand", "to endure"], hint: "Usually negative: no soporto — I can't stand. Also to hold weight, like the English 'support'." },
        { id: "es-u74l4-merecer", type: "vocab", front: "merecer", reading: "merecer", meaning: "to deserve", example: { jp: "Se merece un descanso, ya que ha trabajado sin parar todo el año.", en: "He deserves a rest, since he's worked non-stop all year." }, drill: { jp: "Merecer un premio es difícil", en: "Deserving an award is difficult" }, accept: ["to be worthy of", "to earn"], hint: "merecer la pena = to be worth it. Like conocer: merezco." },
        { id: "es-u74l4-asegurar", type: "vocab", front: "asegurar", reading: "asegurar", meaning: "to assure", example: { jp: "Me aseguró que vendría, pero al final no apareció.", en: "He assured me he'd come, but in the end he didn't show up." }, drill: { jp: "Quiero asegurar el resultado", en: "I want to make sure of the result" }, accept: ["to guarantee", "to make sure", "to insure"], hint: "From seguro (u23). asegurarse de que = to make sure that." },
        { id: "es-u74l4-fijarse", type: "vocab", front: "fijarse", reading: "fijarse", meaning: "to notice", example: { jp: "Fíjate bien en los detalles, que ahí está la diferencia.", en: "Pay close attention to the details, because that's where the difference is." }, drill: { jp: "Fijarse en el detalle es importante", en: "Noticing the detail is important" }, accept: ["to pay attention", "to take note"], hint: "fijarse EN algo. ¡Fíjate! = Look at that! / Would you believe it!" },
        { id: "es-u74l4-acudir", type: "vocab", front: "acudir", reading: "acudir", meaning: "to turn up", example: { jp: "Mucha gente acudió a la fiesta, aunque hacía muy mal tiempo.", en: "A lot of people turned up to the party, although the weather was very bad." }, drill: { jp: "Acudir a la cita es importante", en: "Turning up to the appointment is important" }, accept: ["to attend", "to go", "to come"], hint: "To go somewhere when needed or called — acudir a una cita, acudir a la policía." },
        { id: "es-u74l4-entregar", type: "vocab", front: "entregar", reading: "entregar", meaning: "to hand in / deliver", example: { jp: "Entregó el trabajo dos días antes del plazo.", en: "He handed the work in two days before the deadline." }, drill: { jp: "Quiero entregar el trabajo hoy", en: "I want to hand in the work today" }, accept: ["to hand in", "to deliver", "to hand over"], hint: "entregar algo A alguien. Reflexive entregarse = to give yourself up." },
      ],
    },
  ],
};
