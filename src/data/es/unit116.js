// ES Unit 116 — Intense emotion (slot: strong-emotion) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: Feeling at full volume — elation, dread, fury, grief, awe, in the register of
//         literature and reportage.
//   NOT:  Named emotions at B1 (u57, u82) and ambivalent ones (u105).
//
// Rejected as already taught: la nostalgia (u63). Rejected as relatives of taught
// words: la indignación (indignar u57), la conmoción (conmover u57), el júbilo (a fold
// collision with la jubilación u66 — the unit teaches jubiloso instead).
export const ES_UNIT116 = {
  id: "es-u116",
  lang: "es",
  title: "La emoción desbordada",
  order: 116,
  stage: "b2",
  lessons: [
    {
      id: "es-u116l1",
      unit: 116,
      lesson: 1,
      title: "El júbilo y el arrebato",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe joy that has gone past ordinary happiness — a crowd in euphoria, a fit of enthusiasm, a frenzy.",
      items: [
        { id: "es-u116l1-jubiloso", type: "vocab", front: "jubiloso", reading: "jubiloso", meaning: "jubilant", example: { jp: "La gente salió jubilosa a la calle cuando llegó la noticia.", en: "People came out into the street jubilant when the news arrived." }, accept: ["jubilant", "joyful", "exultant"], hint: "Reserved for public, visible joy — a crowd, a city, a whole country. The noun is el júbilo." },
        { id: "es-u116l1-laeuforia", type: "vocab", front: "la euforia", reading: "laeuforia", meaning: "the euphoria", example: { jp: "La euforia del primer día duró muy poco.", en: "The euphoria of the first day did not last long." }, accept: ["the euphoria", "the elation", "the high"], hint: "Joy so complete that it distorts judgement — the press uses it about markets as much as about people." },
        { id: "es-u116l1-elarrebato", type: "vocab", front: "el arrebato", reading: "elarrebato", meaning: "the fit / outburst (of feeling)", example: { jp: "En un arrebato lo dejó todo y se fue a vivir a otro país.", en: "In a fit of passion he left everything and went to live in another country." }, accept: ["the fit", "the outburst", "the surge of feeling"], hint: "En un arrebato = on a wild impulse. It works for love, anger or generosity — any feeling that carries you off." },
        { id: "es-u116l1-laexaltacion", type: "vocab", front: "la exaltación", reading: "laexaltacion", meaning: "the exaltation / fervour", example: { jp: "Habló con una exaltación que asustó a los demás.", en: "He spoke with a fervour that frightened the others." }, accept: ["the exaltation", "the fervour", "the fervor", "the elation"], hint: "Feeling raised to a pitch, usually in public and usually about a cause." },
        { id: "es-u116l1-enardecer", type: "vocab", front: "enardecer", reading: "enardecer", meaning: "to inflame / fire up", example: { jp: "Sus palabras enardecieron a la multitud.", en: "His words fired up the crowd." }, accept: ["to inflame", "to fire up", "to stir up", "to excite"], hint: "You enardeces other people, not yourself. A speaker's verb — the crowd is always the object." },
        { id: "es-u116l1-elfrenesi", type: "vocab", front: "el frenesí", reading: "elfrenesi", meaning: "the frenzy", example: { jp: "Los últimos días antes del estreno fueron un frenesí.", en: "The last days before the opening were a frenzy." }, accept: ["the frenzy", "the mania", "the wild rush"], hint: "Activity or feeling with no brake left. Con frenesí = frantically." },
      ],
    },
    {
      id: "es-u116l2",
      unit: 116,
      lesson: 2,
      title: "El pavor y el espanto",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Write about fear at its strongest: name dread, horror and the physical shock of it.",
      items: [
        { id: "es-u116l2-elpavor", type: "vocab", front: "el pavor", reading: "elpavor", meaning: "the dread", example: { jp: "Le tiene pavor a hablar delante de la gente.", en: "He has a dread of speaking in front of people." }, accept: ["the dread", "the terror", "the deep fear"], hint: "Tener pavor A algo. Deeper and colder than el miedo — fear you carry, not fear of a moment." },
        { id: "es-u116l2-elespanto", type: "vocab", front: "el espanto", reading: "elespanto", meaning: "the horror / shock", example: { jp: "Vio las fotos con espanto y no dijo nada.", en: "She looked at the photos in horror and said nothing." }, accept: ["the horror", "the shock", "the dismay"], hint: "Fear mixed with disgust at what you are seeing. De espanto also means dreadful: hace un frío de espanto." },
        { id: "es-u116l2-elterror", type: "vocab", front: "el terror", reading: "elterror", meaning: "the terror", example: { jp: "Vivieron durante meses en el terror de perderlo todo.", en: "For months they lived in terror of losing everything." }, accept: ["the terror", "the dread"], hint: "The strongest of the three, and the one that also names a political method and a film genre." },
        { id: "es-u116l2-elsobresalto", type: "vocab", front: "el sobresalto", reading: "elsobresalto", meaning: "the start / jolt of fright", example: { jp: "Se despertó con un sobresalto a las tres de la mañana.", en: "She woke with a start at three in the morning." }, accept: ["the start", "the fright", "the jolt", "the shock"], hint: "One second long. The others last; this one is the jump itself." },
        { id: "es-u116l2-sobrecoger", type: "vocab", front: "sobrecoger", reading: "sobrecoger", meaning: "to overawe / fill with awe", example: { jp: "El silencio de aquel valle sobrecoge a cualquiera.", en: "The silence of that valley overawes anyone." }, accept: ["to overawe", "to fill with awe", "to strike with awe"], hint: "Fear and admiration at once — the reaction to something vast. Not simply to frighten." },
        { id: "es-u116l2-estremecer", type: "vocab", front: "estremecer", reading: "estremecer", meaning: "to make shudder", example: { jp: "La noticia estremeció al país entero.", en: "The news made the whole country shudder." }, accept: ["to make shudder", "to shake", "to send a shiver through"], hint: "The body's answer to horror. Reflexive for the person: me estremecí al oírlo." },
      ],
    },
    {
      id: "es-u116l3",
      unit: 116,
      lesson: 3,
      title: "La cólera y el rencor",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Distinguish anger that explodes from anger that is stored: rage, wrath, animosity and long-held resentment.",
      items: [
        { id: "es-u116l3-lafuria", type: "vocab", front: "la furia", reading: "lafuria", meaning: "the fury", example: { jp: "Rompió la puerta con furia y salió sin decir nada.", en: "He broke the door in fury and left without saying anything." }, accept: ["the fury", "the rage"], hint: "Anger you can see in the body. Also used of storms and of the sea." },
        { id: "es-u116l3-lacolera", type: "vocab", front: "la cólera", reading: "lacolera", meaning: "the wrath", example: { jp: "La cólera del director duró toda la reunión.", en: "The director's wrath lasted the whole meeting." }, accept: ["the wrath", "the anger", "the ire"], hint: "The literary word for anger. Montar en cólera = to fly into a rage. Careful: el cólera, masculine, is the disease." },
        { id: "es-u116l3-laanimadversion", type: "vocab", front: "la animadversión", reading: "laanimadversion", meaning: "the animosity", example: { jp: "No hay animadversión en sus palabras, solo tristeza.", en: "There is no animosity in his words, only sadness." }, accept: ["the animosity", "the antipathy", "the ill will"], hint: "Settled dislike of a person, and it need not have a cause — where el rencor is always owed to a specific wrong. False friend: English animadversion means criticism, not this." },
        { id: "es-u116l3-elrencor", type: "vocab", front: "el rencor", reading: "elrencor", meaning: "the resentment / grudge", example: { jp: "Guardó rencor durante muchos años por aquella carta.", en: "He held a grudge for many years over that letter." }, accept: ["the resentment", "the grudge", "the bitterness"], hint: "Guardar rencor = to hold a grudge. Sin rencor = no hard feelings." },
        { id: "es-u116l3-airado", type: "vocab", front: "airado", reading: "airado", meaning: "irate / angry (formal)", example: { jp: "Respondió con un gesto airado y se levantó de la mesa.", en: "He answered with an angry gesture and got up from the table." }, accept: ["irate", "angry", "wrathful", "indignant"], hint: "The register of reportage: una respuesta airada, una carta airada. You would not say it of yourself." },
        { id: "es-u116l3-lasana", type: "vocab", front: "la saña", reading: "lasana", meaning: "the viciousness", example: { jp: "Rechazaron el proyecto con una saña que nadie esperaba.", en: "They rejected the project with a viciousness nobody expected." }, accept: ["the viciousness", "the cruelty", "the savagery"], hint: "Anger that wants to hurt and takes its time. Con saña is how the courts describe a cruel crime." },
      ],
    },
    {
      id: "es-u116l4",
      unit: 116,
      lesson: 4,
      title: "El duelo y el asombro",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Write about grief and about being struck speechless: name mourning, deep sorrow and astonishment.",
      items: [
        { id: "es-u116l4-elduelo", type: "vocab", front: "el duelo", reading: "elduelo", meaning: "the grief / mourning", example: { jp: "El país guardó tres días de duelo.", en: "The country observed three days of mourning." }, accept: ["the mourning", "the grief", "the bereavement"], hint: "Both the feeling and the public observance of it. Estar de duelo = to be in mourning." },
        { id: "es-u116l4-laafliccion", type: "vocab", front: "la aflicción", reading: "laafliccion", meaning: "the affliction / sorrow", example: { jp: "Nadie supo qué decir ante tanta aflicción.", en: "Nobody knew what to say in the face of such sorrow." }, accept: ["the sorrow", "the affliction", "the distress"], hint: "The verb afligir works like gustar in its reflexive form: se afligió mucho." },
        { id: "es-u116l4-eldesconsuelo", type: "vocab", front: "el desconsuelo", reading: "eldesconsuelo", meaning: "the inconsolable grief", example: { jp: "Lloró con un desconsuelo que duró toda la noche.", en: "She wept with an inconsolable grief that lasted all night." }, accept: ["the inconsolable grief", "the deep distress", "the desolation"], hint: "Built on consuelo, comfort: literally the state where comfort does not reach." },
        { id: "es-u116l4-desgarrador", type: "vocab", front: "desgarrador", reading: "desgarrador", meaning: "heartbreaking / harrowing", example: { jp: "Fue un relato desgarrador y el tribunal lo escuchó en silencio.", en: "It was a harrowing account and the court listened to it in silence." }, accept: ["heartbreaking", "harrowing", "gut-wrenching"], hint: "From desgarrar, to tear. Reserved for testimony, images and cries — not for minor sadness." },
        { id: "es-u116l4-elasombro", type: "vocab", front: "el asombro", reading: "elasombro", meaning: "the astonishment", example: { jp: "Para asombro de todos, el acusado sonrió.", en: "To everyone's astonishment, the defendant smiled." }, accept: ["the astonishment", "the amazement", "the wonder"], hint: "Para asombro de todos is the set frame. Stronger than la sorpresa and more admiring." },
        { id: "es-u116l4-elestupor", type: "vocab", front: "el estupor", reading: "elestupor", meaning: "the stupefaction / stunned disbelief", example: { jp: "La sala escuchó la sentencia con estupor.", en: "The room heard the ruling in stunned disbelief." }, accept: ["the stupefaction", "the stunned disbelief", "the bewilderment"], hint: "Astonishment that stops you dead. Con estupor is almost the only way it appears." },
      ],
    },
  ],
};
