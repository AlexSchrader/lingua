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
// Examples stay in the indicative on purpose: the subjunctive triggers (para que,
// a menos que) are left out so A2 examples use only verb forms the learner has met.
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
        { id: "es-u36l1-que", type: "vocab", front: "que", reading: "que", meaning: "that (relative)", example: { jp: "El libro que leo es muy bueno.", en: "The book that I'm reading is very good." }, accept: ["which", "who", "that"], hint: "The workhorse relative — one word for that, which and who: el hombre que habla, la casa que veo. No accent — qué with one is the question word." },
        { id: "es-u36l1-quien", type: "vocab", front: "quien", reading: "quien", meaning: "who(m) (relative)", example: { jp: "La mujer con quien hablo es mi jefa.", en: "The woman I'm speaking with is my boss." }, accept: ["whom", "the one who"], hint: "Only for people, and mostly after a preposition: con quien, para quien. Elsewhere que does the job. No accent." },
        { id: "es-u36l1-loque", type: "vocab", front: "lo que", reading: "loque", meaning: "what", example: { jp: "Hago lo que quiero.", en: "I do what I want." }, accept: ["that which", "the thing that"], hint: "\"What\" in the middle of a sentence, never qué: lo que quiero es café — what I want is coffee." },
        { id: "es-u36l1-elque", type: "vocab", front: "el que", reading: "elque", meaning: "the one that", example: { jp: "Mi coche es el que está allí.", en: "My car is the one that's over there." }, accept: ["the one which", "the one who"], hint: "Agrees with the noun: el que, la que, los que, las que. La que habla es mi madre." },
        { id: "es-u36l1-cuyo", type: "vocab", front: "cuyo", reading: "cuyo", meaning: "whose", example: { jp: "El autor, cuyo libro leo, es español.", en: "The author, whose book I'm reading, is Spanish." }, accept: ["of whom", "of which"], hint: "Agrees with the thing owned, not the owner: el hombre cuya casa… (casa is feminine → cuya). Common in writing, rare in speech." },
        { id: "es-u36l1-donde", type: "vocab", front: "donde", reading: "donde", meaning: "where (relative)", example: { jp: "Esta es la casa donde vivo.", en: "This is the house where I live." }, accept: ["in which", "at which"], hint: "The relative \"where\", no accent — la ciudad donde trabajo. Dónde with an accent asks a question." },
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
        { id: "es-u36l2-mientrasque", type: "vocab", front: "mientras que", reading: "mientrasque", meaning: "whereas", example: { jp: "Yo trabajo, mientras que él descansa.", en: "I work, whereas he rests." }, accept: ["while", "whereas"], hint: "Marks a contrast between two people or things. Block 1's mientras (u21) is \"while\" in time; add que and it turns to \"whereas\"." },
        { id: "es-u36l2-hastaque", type: "vocab", front: "hasta que", reading: "hastaque", meaning: "until", example: { jp: "Esperé aquí hasta que llegaste.", en: "I waited here until you arrived." }, accept: ["till", "up until"], hint: "hasta = up to; hasta que joins a clause — I wait UNTIL you arrive." },
        { id: "es-u36l2-desdeque", type: "vocab", front: "desde que", reading: "desdeque", meaning: "since (time)", example: { jp: "Estudio español desde que vivo en España.", en: "I've studied Spanish ever since I've lived in Spain." }, accept: ["ever since", "from when"], hint: "Counts from a moment in time — desde = since; desde que joins a clause. For a reason, use ya que (u36 lesson 3)." },
        { id: "es-u36l2-encuanto", type: "vocab", front: "en cuanto", reading: "encuanto", meaning: "as soon as", example: { jp: "En cuanto llego a casa, como algo.", en: "As soon as I get home, I eat something." }, accept: ["the moment", "right after"], hint: "The fast \"as soon as\" — en cuanto llego, the moment I arrive." },
        { id: "es-u36l2-cadavezque", type: "vocab", front: "cada vez que", reading: "cadavezque", meaning: "every time", example: { jp: "Cada vez que llueve, no salgo.", en: "Every time it rains, I don't go out." }, accept: ["whenever", "each time"], hint: "cada vez que = every single time. La vez (A1) is the one occasion; this makes it a rule." },
        { id: "es-u36l2-unavezque", type: "vocab", front: "una vez que", reading: "unavezque", meaning: "once", example: { jp: "Una vez que termino, descanso.", en: "Once I finish, I rest." }, accept: ["once that", "after"], hint: "Marks the point after which something else happens — once I finish, I rest." },
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
        { id: "es-u36l3-yaque", type: "vocab", front: "ya que", reading: "yaque", meaning: "since (reason)", example: { jp: "No salgo, ya que llueve.", en: "I'm not going out, since it's raining." }, accept: ["seeing as", "as", "given that"], hint: "A reason the listener already knows — ya que llueve, since it's raining (as we can both see). Softer than porque." },
        { id: "es-u36l3-asique", type: "vocab", front: "así que", reading: "asique", meaning: "so", example: { jp: "Llueve, así que no salgo.", en: "It's raining, so I'm not going out." }, accept: ["therefore", "and so"], hint: "The everyday \"so\" that introduces a result — the spoken por lo tanto." },
        { id: "es-u36l3-demodoque", type: "vocab", front: "de modo que", reading: "demodoque", meaning: "so that", example: { jp: "Guardo el dinero, de modo que tengo bastante.", en: "I save the money, so that I have enough." }, accept: ["in such a way that", "so"], hint: "States the result of how something is done — a step more formal than así que. de manera que means the same." },
        { id: "es-u36l3-porloque", type: "vocab", front: "por lo que", reading: "porloque", meaning: "which is why", example: { jp: "No come carne, por lo que cocina pescado.", en: "He doesn't eat meat, which is why he cooks fish." }, accept: ["for which reason", "so"], hint: "Joins a result to the whole idea before it — literally \"for which\"." },
        { id: "es-u36l3-dadoque", type: "vocab", front: "dado que", reading: "dadoque", meaning: "given that", example: { jp: "Dado que es tarde, vuelvo a casa.", en: "Given that it's late, I'm going home." }, accept: ["seeing that", "since"], hint: "A slightly formal \"given that\" — dado = given. Common at the start of a sentence." },
        { id: "es-u36l3-puestoque", type: "vocab", front: "puesto que", reading: "puestoque", meaning: "since", example: { jp: "Puesto que no tengo dinero, no compro nada.", en: "Since I have no money, I'm not buying anything." }, accept: ["as", "seeing as", "given that"], hint: "Another formal \"since\", the twin of ya que — you'll see puesto que mostly in writing." },
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
        { id: "es-u36l4-apesarde", type: "vocab", front: "a pesar de", reading: "apesarde", meaning: "despite", example: { jp: "Salgo a pesar de la lluvia.", en: "I'm going out despite the rain." }, accept: ["in spite of", "regardless of"], hint: "a pesar de + a noun or an infinitive: a pesar de la lluvia, a pesar de estar cansado. From pesar, to weigh." },
        { id: "es-u36l4-elcual", type: "vocab", front: "el cual", reading: "elcual", meaning: "which", example: { jp: "El museo, el cual es muy grande, está en el centro.", en: "The museum, which is very big, is in the centre." }, accept: ["the which", "which"], hint: "A more formal el que, used after a comma or a preposition: la razón por la cual… Agrees: el cual, la cual, los cuales." },
        { id: "es-u36l4-locual", type: "vocab", front: "lo cual", reading: "locual", meaning: "which (whole idea)", example: { jp: "Llueve mucho, lo cual no me gusta.", en: "It's raining a lot, which I don't like." }, accept: ["a fact which", "and this"], hint: "Refers back to the WHOLE previous clause, not one noun. lo que points forward; lo cual points back." },
        { id: "es-u36l4-tantoque", type: "vocab", front: "tanto que", reading: "tantoque", meaning: "so much that", example: { jp: "Trabaja tanto que está siempre cansado.", en: "He works so much that he's always tired." }, accept: ["so much so that", "to the point that"], hint: "tanto … que shows a result caused by an amount: come tanto que… — he eats so much that…" },
        { id: "es-u36l4-sino", type: "vocab", front: "sino", reading: "sino", meaning: "but (rather)", example: { jp: "No quiero té, sino café.", en: "I don't want tea, but rather coffee." }, accept: ["but rather", "instead", "but"], hint: "The \"but\" that corrects a negative — no A, sino B. Pero (A1) simply adds; sino replaces." },
        { id: "es-u36l4-ni", type: "vocab", front: "ni", reading: "ni", meaning: "nor", example: { jp: "No tengo té ni café.", en: "I have neither tea nor coffee." }, accept: ["neither", "not even", "or"], hint: "no … ni … = neither … nor. Ni tú ni yo — neither you nor I." },
      ],
    },
  ],
};
