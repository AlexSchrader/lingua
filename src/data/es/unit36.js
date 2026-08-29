// ES Unit 36 — Un poco de gramática · 2 (slot: grammar-4 — compound and linked clauses) — A2
// A1 taught single clauses joined by the plainest links (y, pero, porque, cuando,
// si, aunque, o — all A1). This unit joins two clauses the grown-up way: with
// relative pronouns and with subordinators. Grammar has no item type (CLAUDE.md);
// every linker is authored as function-word vocab whose example carries the pattern.
//
// SCOPE BOUNDARY with block 1's Unit 29 "Connecting words": that unit owns the
// sentence-adverb connectors (además, sin embargo, por eso, en cambio…). This unit
// deliberately takes only the SUBORDINATORS and RELATIVES — the words that hang one
// clause off another. The French pilot found this boundary does not fully hold and
// some linkers collide at merge; lower slot wins, and any ceded word stays usable
// in the examples here. Fronts A1 already owns (que's cousins qué/porque/aunque,
// cuando, si) are NOT re-taught — their clause uses show up in examples instead.
// Examples stay in the indicative on purpose: subjunctive-obligating subordinators
// (para que, a menos que) are left out, and the temporal linkers here are shown in
// habitual/past frames that legitimately take the indicative — so A2 examples use
// only verb forms the learner has met. (hasta que + a FUTURE event would take the
// subjunctive; its example is deliberately past — esperé… llegaste.)
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT36 = {
  id: "es-u36",
  lang: "es",
  title: "Un poco de gramática · 2",
  order: 36,
  stage: "a2",
  lessons: [
    {
      id: "es-u36l1",
      unit: 36,
      lesson: 1,
      title: "The one that…",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Join two ideas with a relative pronoun — el libro que leo, la mujer con quien hablo, lo que quiero, la casa donde vivo.",
      items: [
        { id: "es-u36l1-elque", type: "vocab", front: "el que", reading: "elque", meaning: "the one that", example: { jp: "Mi coche es el que está allí.", en: "My car is the one that's over there." }, accept: ["the one which", "the one who"], hint: "Agrees with the noun: el que, la que, los que, las que. La que habla es mi madre." },
        { id: "es-u36l1-cuyo", type: "vocab", front: "cuyo", reading: "cuyo", meaning: "whose", example: { jp: "El autor, cuyo libro leo, es español.", en: "The author, whose book I'm reading, is Spanish." }, accept: ["of whom", "of which"], hint: "Agrees with the thing owned, not the owner: el hombre cuya casa… (casa is feminine → cuya). Common in writing, rare in speech." },
        { id: "es-u36l1-quienes", type: "vocab", front: "quienes", reading: "quienes", meaning: "who (plural)", example: { jp: "Son los amigos con quienes vivo.", en: "They're the friends I live with." }, accept: ["whom (plural)", "the ones who"], hint: "The plural of the relative quien (u29): una persona a quien…, but dos personas a quienes…" },
        { id: "es-u36l1-adonde", type: "vocab", front: "adonde", reading: "adonde", meaning: "where (to)", example: { jp: "Es el pueblo adonde voy en verano.", en: "It's the village where I go in summer." }, accept: ["to where", "where to"], hint: "For a place you move TO — unaccented adonde joins clauses; accented adónde (A1) asks the question. Same split as que/qué." },
        { id: "es-u36l1-segun", type: "vocab", front: "según", reading: "segun", meaning: "according to", example: { jp: "Según María, la tienda está cerrada.", en: "According to María, the shop is closed." }, accept: ["as per", "depending on"], hint: "según + a person or source: según el mapa, según el médico. On its own it means \"it depends\"." },
        { id: "es-u36l1-talcomo", type: "vocab", front: "tal como", reading: "talcomo", meaning: "just as / exactly as", example: { jp: "Lo hice tal como me dijiste.", en: "I did it exactly as you told me." }, accept: ["just as", "exactly as", "the way that"], hint: "Joins two clauses by matching them: tal como te dije, tal como está. More exact than como on its own." },
      ],
    },
    {
      id: "es-u36l2",
      unit: 36,
      lesson: 2,
      title: "Clauses in time",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Set two clauses in time — mientras que, hasta que, desde que, en cuanto, cada vez que, una vez que.",
      items: [
        { id: "es-u36l2-hastaque", type: "vocab", front: "hasta que", reading: "hastaque", meaning: "until", example: { jp: "Esperé aquí hasta que llegaste.", en: "I waited here until you arrived." }, accept: ["till", "up until"], hint: "hasta = up to; hasta que joins a clause — I wait UNTIL you arrive." },
        { id: "es-u36l2-desdeque", type: "vocab", front: "desde que", reading: "desdeque", meaning: "since (time)", example: { jp: "Estudio español desde que vivo en España.", en: "I've studied Spanish ever since I've lived in Spain." }, accept: ["ever since", "from when"], hint: "Counts from a moment in time — desde = since; desde que joins a clause. For a reason, use ya que (u36 lesson 3)." },
        { id: "es-u36l2-cadavezque", type: "vocab", front: "cada vez que", reading: "cadavezque", meaning: "every time", example: { jp: "Cada vez que llueve, no salgo.", en: "Every time it rains, I don't go out." }, accept: ["whenever", "each time"], hint: "cada vez que = every single time. La vez (A1) is the one occasion; this makes it a rule." },
        { id: "es-u36l2-unavezque", type: "vocab", front: "una vez que", reading: "unavezque", meaning: "once", example: { jp: "Una vez que termino, descanso.", en: "Once I finish, I rest." }, accept: ["once that", "after"], hint: "Marks the point after which something else happens — once I finish, I rest." },
        { id: "es-u36l2-nadamas", type: "vocab", front: "nada más", reading: "nadamas", meaning: "as soon as", example: { jp: "Nada más llegar a casa, descanso.", en: "As soon as I get home, I rest." }, accept: ["right after", "the moment"], hint: "nada más + an infinitive = the instant that happens: nada más comer, right after eating. (Literally \"nothing more\".)" },
        { id: "es-u36l2-tanprontocomo", type: "vocab", front: "tan pronto como", reading: "tanprontocomo", meaning: "as soon as", example: { jp: "Te llamo tan pronto como llegue a casa.", en: "I'll call you as soon as I get home." }, accept: ["as soon as", "the moment that"], hint: "A time clause: for something still to happen it takes the subjunctive — tan pronto como llegue. Same job as en cuanto." },
      ],
    },
    {
      id: "es-u36l3",
      unit: 36,
      lesson: 3,
      title: "Reason and result",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give a reason or a result across a clause — ya que, así que, de modo que, por lo que, dado que, puesto que.",
      items: [
        { id: "es-u36l3-demodoque", type: "vocab", front: "de modo que", reading: "demodoque", meaning: "so that", example: { jp: "Guardo el dinero, de modo que tengo bastante.", en: "I save the money, so that I have enough." }, accept: ["in such a way that", "so"], hint: "States the result of how something is done — a step more formal than así que. de manera que means the same." },
        { id: "es-u36l3-porloque", type: "vocab", front: "por lo que", reading: "porloque", meaning: "which is why", example: { jp: "No come carne, por lo que cocina pescado.", en: "He doesn't eat meat, which is why he cooks fish." }, accept: ["for which reason", "so"], hint: "Joins a result to the whole idea before it — literally \"for which\"." },
        { id: "es-u36l3-dadoque", type: "vocab", front: "dado que", reading: "dadoque", meaning: "given that", example: { jp: "Dado que es tarde, vuelvo a casa.", en: "Given that it's late, I'm going home." }, accept: ["seeing that", "since"], hint: "A slightly formal \"given that\" — dado = given. Common at the start of a sentence." },
        { id: "es-u36l3-puestoque", type: "vocab", front: "puesto que", reading: "puestoque", meaning: "since", example: { jp: "Puesto que no tengo dinero, no compro nada.", en: "Since I have no money, I'm not buying anything." }, accept: ["as", "seeing as", "given that"], hint: "Another formal \"since\", the twin of ya que — you'll see puesto que mostly in writing." },
        { id: "es-u36l3-debidoa", type: "vocab", front: "debido a", reading: "debidoa", meaning: "due to", example: { jp: "Llego tarde debido a la lluvia.", en: "I'm arriving late due to the rain." }, accept: ["owing to", "because of"], hint: "debido a + a noun (a cause): debido al tráfico. For a whole clause, add que: debido a que llueve." },
        { id: "es-u36l3-acausade", type: "vocab", front: "a causa de", reading: "acausade", meaning: "because of", example: { jp: "No salimos a causa de la lluvia.", en: "We didn't go out because of the rain." }, accept: ["because of", "owing to", "due to"], hint: "Followed by a noun, never a clause: a causa de la lluvia, but porque llueve. Nearly always a bad cause." },
      ],
    },
    {
      id: "es-u36l4",
      unit: 36,
      lesson: 4,
      title: "Contrast and detail",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Add contrast or detail to a clause — a pesar de, el cual, lo cual, tanto que, sino, ni.",
      items: [
        { id: "es-u36l4-elcual", type: "vocab", front: "el cual", reading: "elcual", meaning: "which", example: { jp: "El museo, el cual es muy grande, está en el centro.", en: "The museum, which is very big, is in the centre." }, accept: ["the which", "which"], hint: "A more formal el que, used after a comma or a preposition: la razón por la cual… Agrees: el cual, la cual, los cuales." },
        { id: "es-u36l4-locual", type: "vocab", front: "lo cual", reading: "locual", meaning: "which (whole idea)", example: { jp: "Llueve mucho, lo cual no me gusta.", en: "It's raining a lot, which I don't like." }, accept: ["a fact which", "and this"], hint: "Refers back to the WHOLE previous clause, not one noun. lo que points forward; lo cual points back." },
        { id: "es-u36l4-tantoque", type: "vocab", front: "tanto que", reading: "tantoque", meaning: "so much that", example: { jp: "Trabaja tanto que está siempre cansado.", en: "He works so much that he's always tired." }, accept: ["so much so that", "to the point that"], hint: "tanto … que shows a result caused by an amount: come tanto que… — he eats so much that…" },
        { id: "es-u36l4-encambio", type: "vocab", front: "en cambio", reading: "encambio", meaning: "on the other hand", example: { jp: "Yo como carne; él, en cambio, come pescado.", en: "I eat meat; he, on the other hand, eats fish." }, accept: ["by contrast", "whereas"], hint: "Draws a contrast between two people or ideas. From el cambio (A1) — a change of direction in the argument." },
        { id: "es-u36l4-aunasi", type: "vocab", front: "aun así", reading: "aunasi", meaning: "even so", example: { jp: "Llueve; aun así, salgo a correr.", en: "It's raining; even so, I'm going out to run." }, accept: ["still", "nevertheless"], hint: "Concedes the point and carries on anyway. aun (no accent) = even; aún (with accent) = still — two different words." },
        { id: "es-u36l4-salvo", type: "vocab", front: "salvo", reading: "salvo", meaning: "except / apart from", example: { jp: "Vinieron todos salvo mi hermano.", en: "Everyone came except my brother." }, accept: ["except", "apart from", "other than"], hint: "Interchangeable with excepto: todos salvo uno. Salvo que + subjunctive = unless." },
      ],
    },
  ],
};
