// ES Unit 21 — La rutina (slot: activities) — A2
// ─────────────────────────────────────────────────────────────────────────────
// FIRST A2 UNIT. Conventions are unchanged from A1 and remain documented in
// es/unit1.js (front/reading split, nouns with their article, the FREE line).
//
// ⚠️ THE A2 CONSTRAINT, and it bites this whole block: Spanish A1 is RICH — 483
// items across 20 units — and it already covers most of the A2 slot names.
// A1 u19 alone teaches levantarse, ducharse, vestirse, desayunar, cocinar,
// cenar, acostarse, dormir, descansar, limpiar, apagar, encender: that IS
// "activities and routine". The generic band template can't know that.
// So an A2 thematic unit goes DEEPER, never over the same ground — the
// blueprint's own words, "A2 is where a language stops being survival phrases."
// Concretely, this unit takes the reflexive routine verbs A1 skipped, the
// sequencing adverbs that let a learner narrate a whole morning rather than name
// its parts, and the leisure verbs that turn free time into something you can
// talk about. Every A1 routine verb is USED here in examples and re-taught
// nowhere.
//   FREE: me, te, se, nos
//     The reflexive clitics. They are not vocabulary items — they are the
//     grammar this unit exists to teach, and they only ever appear attached to
//     a verb the unit itself is teaching (despertarse -> me despierto). Declared
//     so the scope checker stops reporting the unit's own subject matter.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT21 = {
  id: "es-u21",
  lang: "es",
  title: "La rutina",
  order: 21,
  stage: "a2",
  lessons: [
    // Lesson 1: the reflexive morning A1 left out
    {
      id: "es-u21l1",
      unit: 21,
      lesson: 1,
      title: "Getting yourself ready",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Narrate your own morning with the reflexive verbs — me despierto, me lavo, me peino, me afeito, me seco — not just name its parts.",
      items: [
        { id: "es-u21l1-despertarse", type: "vocab", front: "despertarse", reading: "despertarse", meaning: "to wake up", example: { jp: "Me despierto a las seis.", en: "I wake up at six." }, accept: ["wake up", "to awaken"], hint: "Waking is not getting up: me despierto a las seis, me levanto a las siete. A1 taught levantarse; this is the moment before it." },
        { id: "es-u21l1-lavarse", type: "vocab", front: "lavarse", reading: "lavarse", meaning: "to wash yourself", example: { jp: "Me lavo la cara con agua.", en: "I wash my face with water." }, accept: ["to wash", "wash up"], hint: "With a body part Spanish uses the article, not a possessive: me lavo LA cara, never mi cara — the me already says whose." },
        { id: "es-u21l1-peinarse", type: "vocab", front: "peinarse", reading: "peinarse", meaning: "to comb your hair", example: { jp: "Me peino en el baño.", en: "I comb my hair in the bathroom." }, accept: ["to comb", "do your hair"], hint: "From el peine, the comb. Same article rule: me peino el pelo." },
        { id: "es-u21l1-afeitarse", type: "vocab", front: "afeitarse", reading: "afeitarse", meaning: "to shave", example: { jp: "Mi padre se afeita todos los días.", en: "My father shaves every day." }, accept: ["to shave yourself", "have a shave"] },
        { id: "es-u21l1-secarse", type: "vocab", front: "secarse", reading: "secarse", meaning: "to dry yourself", example: { jp: "Me seco el pelo en el baño.", en: "I dry my hair in the bathroom." }, accept: ["to dry", "dry off"], hint: "seco is also the adjective dry — el tiempo está seco." },
        { id: "es-u21l1-larutina", type: "vocab", front: "la rutina", reading: "larutina", meaning: "routine", example: { jp: "Mi rutina de la mañana es siempre la misma.", en: "My morning routine is always the same." }, accept: ["the routine", "daily routine"] },
      ],
    },
    // Lesson 2: sequencing — the words that turn a list into a narrative
    {
      id: "es-u21l2",
      unit: 21,
      lesson: 2,
      title: "First, then, afterwards",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put a whole day in order — primero, luego, después, antes, mientras — instead of listing its pieces one at a time.",
      items: [
        { id: "es-u21l2-primero", type: "vocab", front: "primero", reading: "primero", meaning: "first", example: { jp: "Primero me ducho y luego desayuno.", en: "First I shower and then I have breakfast." }, accept: ["firstly", "at first"], hint: "Also the ordinal: el primero de mayo, the first of May." },
        { id: "es-u21l2-luego", type: "vocab", front: "luego", reading: "luego", meaning: "then", example: { jp: "Estudio y luego descanso un poco.", en: "I study and then I rest a little." }, accept: ["later", "afterwards", "next"], hint: "The same luego you already say in hasta luego — literally \"until then\"." },
        { id: "es-u21l2-despues", type: "vocab", front: "después", reading: "despues", meaning: "afterwards", example: { jp: "Después de cenar, leo un libro.", en: "After dinner, I read a book." }, accept: ["after", "later on"], hint: "Add de to put a noun or a verb after it: después de la clase, después de comer." },
        { id: "es-u21l2-antes", type: "vocab", front: "antes", reading: "antes", meaning: "before", example: { jp: "Antes de dormir, apago la luz.", en: "Before sleeping, I turn off the light." }, accept: ["beforehand", "earlier"], hint: "The mirror of después, and it takes de the same way: antes de acostarse." },
        { id: "es-u21l2-mientras", type: "vocab", front: "mientras", reading: "mientras", meaning: "while", example: { jp: "Escucho música mientras cocino.", en: "I listen to music while I cook." }, accept: ["meanwhile", "as", "whilst"], hint: "Joins two things happening at once — the one connector A1's list was missing." },
        { id: "es-u21l2-elhorario", type: "vocab", front: "el horario", reading: "elhorario", meaning: "schedule", example: { jp: "El horario de la escuela empieza a las ocho.", en: "The school schedule starts at eight." }, accept: ["the timetable", "hours", "opening hours"], hint: "From la hora. On a shop door it means the opening hours." },
      ],
    },
    // Lesson 3: free time you can actually describe
    {
      id: "es-u21l3",
      unit: 21,
      lesson: 3,
      title: "Free time",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you do for fun — pasear, nadar, montar en bicicleta, jugar, practicar un deporte — and not just where you go.",
      items: [
        { id: "es-u21l3-pasear", type: "vocab", front: "pasear", reading: "pasear", meaning: "to go for a walk", example: { jp: "Me gusta pasear por el parque.", en: "I like walking in the park." }, accept: ["to stroll", "to walk", "take a walk"], hint: "Dar un paseo says the same thing with a noun: vamos a dar un paseo." },
        { id: "es-u21l3-nadar", type: "vocab", front: "nadar", reading: "nadar", meaning: "to swim", example: { jp: "Me gusta nadar con mis hermanos.", en: "I like swimming with my brothers and sisters." }, accept: ["swim", "go swimming"] },
        { id: "es-u21l3-montar", type: "vocab", front: "montar", reading: "montar", meaning: "to ride", example: { jp: "Monto en bicicleta con mi hermano.", en: "I ride a bike with my brother." }, accept: ["to get on", "ride"], hint: "Spanish rides IN a bike, not on one: montar EN bicicleta, montar EN moto." },
        { id: "es-u21l3-jugar", type: "vocab", front: "jugar", reading: "jugar", meaning: "to play", example: { jp: "Mis primos juegan en el parque.", en: "My cousins play in the park." }, accept: ["play a game", "to play"], hint: "Playing a game is jugar; playing an instrument is tocar. Two different verbs where English has one." },
        { id: "es-u21l3-practicar", type: "vocab", front: "practicar", reading: "practicar", meaning: "to practise", example: { jp: "Practico español con mi amiga.", en: "I practise Spanish with my friend." }, accept: ["to practice", "do (a sport)"], hint: "Also how you say you DO a sport: practico el fútbol." },
        { id: "es-u21l3-eldeporte", type: "vocab", front: "el deporte", reading: "eldeporte", meaning: "sport", example: { jp: "El deporte es bueno para la salud.", en: "Sport is good for your health." }, accept: ["the sport", "sports", "exercise"] },
      ],
    },
    // Lesson 4: habits, and the small verbs that carry them
    {
      id: "es-u21l4",
      unit: 21,
      lesson: 4,
      title: "Habits",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about what you usually do and where you stay put — la costumbre, quedarse, sentarse, ponerse, quitarse, por fin.",
      items: [
        { id: "es-u21l4-lacostumbre", type: "vocab", front: "la costumbre", reading: "lacostumbre", meaning: "habit", example: { jp: "Es una costumbre de mi familia.", en: "It's a family habit." }, accept: ["the custom", "tradition"], hint: "Both a personal habit and a shared custom — the line English draws between the two isn't drawn here." },
        { id: "es-u21l4-quedarse", type: "vocab", front: "quedarse", reading: "quedarse", meaning: "to stay", example: { jp: "Los domingos me quedo en casa.", en: "On Sundays I stay at home." }, accept: ["to remain", "stay put"], hint: "Without the -se it means something else entirely: quedar is to arrange to meet." },
        { id: "es-u21l4-sentarse", type: "vocab", front: "sentarse", reading: "sentarse", meaning: "to sit down", example: { jp: "Me siento en el sofá para leer.", en: "I sit on the sofa to read." }, accept: ["to sit", "take a seat"], hint: "Me siento is also \"I feel\" (from sentirse) — same form, and only the sentence tells you which." },
        { id: "es-u21l4-ponerse", type: "vocab", front: "ponerse", reading: "ponerse", meaning: "to put on", example: { jp: "Me pongo la chaqueta antes de salir.", en: "I put on my jacket before going out." }, accept: ["to put on (clothes)", "wear"], hint: "poner puts a thing somewhere; ponerse puts it on YOU. A1 taught llevar for wearing it once it's on." },
        { id: "es-u21l4-quitarse", type: "vocab", front: "quitarse", reading: "quitarse", meaning: "to take off", example: { jp: "Me quito los zapatos en casa.", en: "I take my shoes off at home." }, accept: ["to remove", "take off (clothes)"], hint: "The opposite of ponerse, and it works the same way." },
        { id: "es-u21l4-porfin", type: "vocab", front: "por fin", reading: "porfin", meaning: "finally", example: { jp: "Por fin termino el trabajo.", en: "I'm finally finishing the work." }, accept: ["at last", "eventually"], hint: "Carries relief, not just sequence — al final is the neutral \"in the end\"." },
      ],
    },
  ],
};
