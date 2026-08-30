// ES Unit 115 — Character and temperament (slot: temperament) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: The literary register of character — reserve, arrogance, tenacity, candour,
//         obstinacy as nouns and rarer adjectives.
//   NOT:  The B1 character adjectives (u80: sincero, leal, humilde, valiente,
//         prudente). Do not restate them one register up.
//
// Deliberately avoided as relatives of u80: "la reserva" (reservado u80) and
// "testarudo" itself — this unit teaches tozudo and la obstinación instead, which are
// different lexemes rather than the same word one register up.
export const ES_UNIT115 = {
  id: "es-u115",
  lang: "es",
  title: "El carácter y el temple",
  order: 115,
  stage: "b2",
  lessons: [
    {
      id: "es-u115l1",
      unit: 115,
      lesson: 1,
      title: "La reserva y la franqueza",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how open or closed somebody is: call a person withdrawn, talkative, gruff or warm, and praise plain speaking.",
      items: [
        { id: "es-u115l1-lafranqueza", type: "vocab", front: "la franqueza", reading: "lafranqueza", meaning: "the candour / frankness", example: { jp: "Habló con una franqueza que sorprendió a todos.", en: "He spoke with a candour that surprised everyone." }, accept: ["the candour", "the candor", "the frankness", "the openness"], hint: "Con franqueza = frankly. A virtue here, unlike its English cousin, which can sound blunt." },
        { id: "es-u115l1-retraido", type: "vocab", front: "retraído", reading: "retraido", meaning: "withdrawn", example: { jp: "Es una persona retraída, pero con sus amigos habla sin parar.", en: "She is a withdrawn person, but with her friends she talks non-stop." }, accept: ["withdrawn", "shy", "retiring"], hint: "Pulled back from other people, by temperament rather than by mood." },
        { id: "es-u115l1-taciturno", type: "vocab", front: "taciturno", reading: "taciturno", meaning: "taciturn / silent by nature", example: { jp: "Su padre era un hombre taciturno que casi nunca contaba nada.", en: "His father was a taciturn man who almost never told you anything." }, accept: ["taciturn", "silent", "uncommunicative"], hint: "Silent as a permanent quality. A literary word — you meet it in novels more than in the street." },
        { id: "es-u115l1-locuaz", type: "vocab", front: "locuaz", reading: "locuaz", meaning: "talkative / voluble", example: { jp: "Después de dos vasos de vino se puso muy locuaz.", en: "After two glasses of wine he became very talkative." }, accept: ["talkative", "voluble", "loquacious"], hint: "The formal opposite of taciturno. One ending for both genders: un hombre locuaz, una mujer locuaz." },
        { id: "es-u115l1-adusto", type: "vocab", front: "adusto", reading: "adusto", meaning: "stern / gruff", example: { jp: "Tiene un carácter adusto, aunque en el fondo es buena persona.", en: "He has a stern manner, though deep down he is a good person." }, accept: ["stern", "gruff", "severe", "dour"], hint: "Severity you can see on the face. Not cruelty — an adusto person is simply not warm." },
        { id: "es-u115l1-afable", type: "vocab", front: "afable", reading: "afable", meaning: "affable / genial", example: { jp: "El nuevo director es afable con todo el mundo.", en: "The new director is affable with everybody." }, accept: ["affable", "genial", "warm", "amiable"], hint: "Easy to talk to, and pleased to be. The exact counterweight to adusto." },
      ],
    },
    {
      id: "es-u115l2",
      unit: 115,
      lesson: 2,
      title: "La soberbia y la modestia",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the varieties of pride and their opposite: tell haughtiness from vanity, and describe someone who looks down on others.",
      items: [
        { id: "es-u115l2-lasoberbia", type: "vocab", front: "la soberbia", reading: "lasoberbia", meaning: "the arrogance / hubris", example: { jp: "Su soberbia le costó el trabajo y los amigos.", en: "His arrogance cost him his job and his friends." }, accept: ["the arrogance", "the hubris", "the pride"], hint: "The oldest and heaviest of these words — one of the seven capital sins. Stronger than el orgullo, which can be a virtue." },
        { id: "es-u115l2-laaltivez", type: "vocab", front: "la altivez", reading: "laaltivez", meaning: "the haughtiness", example: { jp: "Nos habló con altivez y no explicó nada.", en: "She spoke to us haughtily and explained nothing." }, accept: ["the haughtiness", "the loftiness", "the disdain"], hint: "From alto: pride you can read in how a person stands and looks. Con altivez is the usual phrase." },
        { id: "es-u115l2-lavanidad", type: "vocab", front: "la vanidad", reading: "lavanidad", meaning: "the vanity", example: { jp: "Por vanidad no quiso pedir ayuda a nadie.", en: "Out of vanity he refused to ask anyone for help." }, accept: ["the vanity", "the conceit"], hint: "Concerned with how one is seen. Soberbia looks down on others; vanidad only looks at itself." },
        { id: "es-u115l2-lamodestia", type: "vocab", front: "la modestia", reading: "lamodestia", meaning: "the modesty", example: { jp: "Con toda modestia, dijo que el mérito era del equipo.", en: "With all modesty, he said the credit belonged to the team." }, accept: ["the modesty", "the humility"], hint: "The quality; B1's humilde (u80) is the person. Falsa modestia is the standard criticism of it." },
        { id: "es-u115l2-engreido", type: "vocab", front: "engreído", reading: "engreido", meaning: "big-headed / conceited", example: { jp: "Desde que ganó el premio está insoportable, muy engreído.", en: "Since he won the prize he has been unbearable, very big-headed." }, accept: ["conceited", "big-headed", "stuck-up"], hint: "Pride that grew recently, usually after some success. Colloquial in tone but standard in writing." },
        { id: "es-u115l2-displicente", type: "vocab", front: "displicente", reading: "displicente", meaning: "offhand / dismissive", example: { jp: "Contestó con un gesto displicente y siguió leyendo.", en: "He answered with a dismissive gesture and went on reading." }, accept: ["dismissive", "offhand", "disdainful"], hint: "Coldness expressed as indifference: not anger, just the sense that you are not worth the trouble." },
      ],
    },
    {
      id: "es-u115l3",
      unit: 115,
      lesson: 3,
      title: "La tenacidad y la obstinación",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say whether somebody's refusal to give way is a strength or a fault, and describe someone easily led.",
      items: [
        { id: "es-u115l3-latenacidad", type: "vocab", front: "la tenacidad", reading: "latenacidad", meaning: "the tenacity", example: { jp: "Consiguió el puesto por su tenacidad, no por suerte.", en: "She got the post through her tenacity, not through luck." }, accept: ["the tenacity", "the persistence", "the doggedness"], hint: "Always positive: holding on because the aim is worth it." },
        { id: "es-u115l3-lafirmeza", type: "vocab", front: "la firmeza", reading: "lafirmeza", meaning: "the firmness / resolve", example: { jp: "Respondió con firmeza que no pensaba cambiar de opinión.", en: "He replied firmly that he did not intend to change his mind." }, accept: ["the firmness", "the resolve", "the steadfastness"], hint: "Con firmeza = firmly. It describes how a position is held, not how long." },
        { id: "es-u115l3-laobstinacion", type: "vocab", front: "la obstinación", reading: "laobstinacion", meaning: "the obstinacy", example: { jp: "Su obstinación en seguir solo acabó con el proyecto.", en: "His obstinacy in going on alone finished off the project." }, accept: ["the obstinacy", "the stubbornness"], hint: "Obstinación EN + infinitive. The same holding-on as tenacidad, but now judged a mistake." },
        { id: "es-u115l3-tozudo", type: "vocab", front: "tozudo", reading: "tozudo", meaning: "pig-headed", example: { jp: "Es tan tozudo que prefiere perder antes que seguir un consejo.", en: "He is so pig-headed that he would rather lose than follow advice." }, accept: ["pig-headed", "stubborn", "mulish"], hint: "Warmer and more familiar than testarudo (u80) — the word a family uses about its own." },
        { id: "es-u115l3-docil", type: "vocab", front: "dócil", reading: "docil", meaning: "docile / biddable", example: { jp: "Admitió todas las condiciones, dócil como siempre.", en: "He accepted every condition, docile as ever." }, accept: ["docile", "biddable", "compliant", "meek"], hint: "The far end from tozudo. Neutral about an animal, faintly critical about an adult." },
        { id: "es-u115l3-laaudacia", type: "vocab", front: "la audacia", reading: "laaudacia", meaning: "the audacity / boldness", example: { jp: "Tuvo la audacia de presentarse sin avisar a nadie.", en: "He had the audacity to turn up without warning anybody." }, accept: ["the audacity", "the boldness", "the daring", "the nerve"], hint: "Tener la audacia de + infinitive. Admiring or scandalised depending entirely on the tone." },
      ],
    },
    {
      id: "es-u115l4",
      unit: 115,
      lesson: 4,
      title: "El temple y la índole",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a person's underlying make-up: their composure, their restraint, their unflappability and their cast of mind.",
      items: [
        { id: "es-u115l4-eltemple", type: "vocab", front: "el temple", reading: "eltemple", meaning: "the composure / mettle", example: { jp: "Hace falta mucho temple para hablar así delante del tribunal.", en: "It takes real mettle to speak like that in front of the court." }, accept: ["the composure", "the mettle", "the nerve", "the steadiness"], hint: "From tempering steel: the quality that holds under heat. Tener temple = to keep your head." },
        { id: "es-u115l4-lamesura", type: "vocab", front: "la mesura", reading: "lamesura", meaning: "the restraint / measure", example: { jp: "Habló con mesura, sin acusar a nadie.", en: "He spoke with restraint, without accusing anyone." }, accept: ["the restraint", "the moderation", "the measure"], hint: "Doing and saying neither too much nor too little. Sin mesura is the standard criticism." },
        { id: "es-u115l4-laflema", type: "vocab", front: "la flema", reading: "laflema", meaning: "the phlegm / unflappability", example: { jp: "Escuchó las malas noticias con una flema que nadie esperaba.", en: "He heard the bad news with an unflappability nobody expected." }, accept: ["the phlegm", "the unflappability", "the composure", "the coolness"], hint: "Calm so complete it looks like indifference. La flema británica is the stock phrase; el temple is the same calm under pressure." },
        { id: "es-u115l4-eltalante", type: "vocab", front: "el talante", reading: "eltalante", meaning: "the disposition / spirit", example: { jp: "Llegó de buen talante y aprobó todas las propuestas.", en: "He arrived in good spirits and approved every proposal." }, accept: ["the disposition", "the mood", "the spirit", "the temper"], hint: "De buen / mal talante. Closer to how someone is on the day than la índole, which is permanent." },
        { id: "es-u115l4-meticuloso", type: "vocab", front: "meticuloso", reading: "meticuloso", meaning: "meticulous", example: { jp: "Es meticuloso hasta con los detalles que nadie va a ver.", en: "He is meticulous even about the details nobody will ever see." }, accept: ["meticulous", "painstaking", "thorough"], hint: "Care as a trait of character, not of a single piece of work." },
        { id: "es-u115l4-eltemperamento", type: "vocab", front: "el temperamento", reading: "eltemperamento", meaning: "the temperament", example: { jp: "Tiene un temperamento difícil pero es buena persona.", en: "He has a difficult temperament but he's a good person." }, accept: ["the temperament", "the disposition", "the nature"], hint: "What you were born with, where el talante is how you carry yourself and el temple is how you hold up under strain." },
      ],
    },
  ],
};
