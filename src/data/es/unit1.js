// ES Unit 1 — Sounds and spelling (slot: sounds) — A1
// ─────────────────────────────────────────────────────────────────────────────
// First contact with Spanish. Latin-script languages collapse Strand A to ONE
// unit (BUILD-BRIEF-language-blueprint.md §1): not letter drills, but the
// sound-to-spelling map an English reader gets wrong — the five constant vowels,
// silent h, throaty j/g, ñ, ll/y, soft c/z vs hard c/qu, and the rolled rr.
// Every rule is taught THROUGH a real word the learner keeps, never through a
// bare letter.
//
// AUTHORING CONVENTIONS FOR SPANISH (all es units):
//   - `front` is real orthography (accents, ñ, spaces); `reading` is its ASCII
//     fold (the contract requires [a-z]+) — normalizeReading() strips diacritics
//     via NFD and drops spaces, so "el año" folds to "elano" and a learner may
//     type either form.
//     The fold is an ANSWER KEY, never a pronunciation guide, so it must never be
//     displayed. ✅ Satisfied since 2026-08-13: `readingIsInformative()` gates it
//     on the front's script, and this branch now contains that fix (db5e45c) plus
//     the two surfaces it originally missed — the Ladder word-bank row and
//     GlyphDetail, the modal that row opens. Measured before/after: on the old
//     base 17 of 24 Spanish lessons displayed a fold; with the fix, 0 of 24.
//     Any future language must be scaffolded from a base at or after the last
//     shipped fix affecting card rendering — that, not "check for db5e45c", is
//     the durable rule.
//   - `example.jp` holds the SPANISH sentence (the field name is historical —
//     "jp" = target language); `example.en` the English gloss.
//   - Nouns are taught WITH their article (el/la) so gender is learned as part of
//     the word, never as an afterthought. Plurals get los/las.
//   - Examples stay inside vocab taught at or before this unit, plus the free
//     list declared below. Inflected forms of a listed cognate count as the same
//     word (moderno → moderna), as do regular plurals of any taught NOUN
//     (la silla → sillas). Machine-checked by `node scripts/check-lang-scope.mjs
//     es`, which parses the FREE lines directly — so these declarations are the
//     single source of truth and the checker can never allow more than they list.
//     ANY unit may add its own `// FREE:` line and the checker reads them all, so
//     a block declares what IT relies on instead of editing block 1's file.
//     WARNING: blocks 2 and 3 currently declare nothing machine-readable —
//     es/unit7.js names its naturalized borrowings (taxi, cafe, clase, fiesta,
//     festival, concierto, examen) in PROSE only, which is exactly why a checker
//     run reported two of them, clase and examen, as violations. Each of those
//     units should add its own FREE line; the line below is block 1's own words
//     plus the proper names the whole language shares.
//   FREE: Ana, María, Pablo, Carlos, España, México, América, Madrid, Barcelona, Sevilla, Mayor | moderno, moderna, elegante, famoso, enorme, romántico, romántica, fantástico, fantástica, tranquilo, tranquila, histórico, importante, rápido, perfecto, humano, favorito, persona, personas, taxi, música, problema, clase, examen, fiesta, festival, concierto | 2000
//     Extended 2026-08-13 (merge prep). Two additions, both mechanical, no content
//     changed: (a) the FEMININE and plural forms of adjectives already declared
//     free — the checker compares whole tokens and cannot fold moderno→moderna, so
//     "La casa es moderna" was reported against a word this line already allowed;
//     (b) the naturalized borrowings blocks 2 and 3 use, which until now were named
//     only in PROSE in es/unit7.js (this file's own WARNING above predicted the
//     result: clase and examen were reported as violations). The checker reads
//     FREE from unit1.js ONLY, so a per-unit line would not have been read.
//   - DELIBERATE A1 SIMPLIFICATIONS (revisit at A2): (a) only the present tense,
//     and verbs are taught as person-marked chunks (soy, hablo, tengo) rather
//     than infinitives — the infinitive belongs with the grammar units; (b) the
//     ser/estar contrast is not OPENED here: ser is the only copula taught and
//     analysed (es/soy/eres/son), and the grammar block owns the actual contrast.
//     estar is present but unanalysed — `cómo estás` is taught in u2l3 as a fixed
//     greeting chunk, so its 2sg form appears in that lesson's examples and canDo,
//     and `está` appears once inside a hint showing the polite variant (¿cómo está
//     usted?). No hint anywhere misclaims a form of estar as ser, and no
//     estar-obligatory adjective (contento, cansado, enfermo, abierto…) appears in
//     any of the 145 examples — every copular adjective used sits in ser's
//     territory. BLOCK 2/3: do not read this as "estar is untouched";
//     (c) `por` + time of day ("por la mañana") is deferred to the grammar block,
//     so Unit 5 uses "de noche" and plain adverbs instead.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT1 = {
  id: "es-u1",
  lang: "es",
  title: "Los sonidos",
  order: 1,
  stage: "a1",
  lessons: [
    // Lesson 1: the five vowels — the single biggest win in Spanish pronunciation
    {
      id: "es-u1l1",
      unit: 1,
      lesson: 1,
      title: "Five vowels, five sounds",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the five Spanish vowels exactly as they are written — a, e, i, o, u never change — and say what something is: la casa es moderna.",
      items: [
        { id: "es-u1l1-lacasa", type: "vocab", front: "la casa", reading: "lacasa", meaning: "house", example: { jp: "La casa es moderna.", en: "The house is modern." }, accept: ["the house", "home"], hint: "Spanish a is always the open \"ah\" of father — CA-sa, never the a of cat." },
        { id: "es-u1l1-lamesa", type: "vocab", front: "la mesa", reading: "lamesa", meaning: "table", example: { jp: "La mesa es elegante.", en: "The table is elegant." }, accept: ["the table", "desk"], hint: "e is always the short \"eh\" of bed — ME-sa, never may-sa." },
        { id: "es-u1l1-ellibro", type: "vocab", front: "el libro", reading: "ellibro", meaning: "book", example: { jp: "El libro es famoso.", en: "The book is famous." }, accept: ["the book"], hint: "i is always \"ee\" and o stays a clean \"oh\" right to the end: LEE-bro, never LEE-bruh." },
        { id: "es-u1l1-laluna", type: "vocab", front: "la luna", reading: "laluna", meaning: "moon", example: { jp: "¡La luna es romántica!", en: "The moon is romantic!" }, accept: ["the moon"], hint: "u is always \"oo\" — LOO-na." },
        { id: "es-u1l1-elmuseo", type: "vocab", front: "el museo", reading: "elmuseo", meaning: "museum", example: { jp: "El museo es enorme.", en: "The museum is enormous." }, accept: ["the museum"], hint: "Three vowels in a row, every one of them said: mu-SE-o. Spanish never swallows a vowel the way English does." },
        { id: "es-u1l1-es", type: "vocab", front: "es", reading: "es", meaning: "is", example: { jp: "Ana es fantástica.", en: "Ana is fantastic." }, accept: ["it is", "he is", "she is", "it's"], hint: "The link word: X es Y. Watch the adjective change ending to match — fantástico for a man, fantástica for a woman." },
        { id: "es-u1l1-de", type: "vocab", front: "de", reading: "de", meaning: "of", example: { jp: "La casa de Ana es enorme.", en: "Ana's house is enormous." }, accept: ["from", "belonging to"], hint: "Spanish has no apostrophe-s. \"Ana's house\" is la casa de Ana — the house OF Ana." },
      ],
    },
    // Lesson 2: the letters that lie — silent h, throaty j and g
    {
      id: "es-u1l2",
      unit: 1,
      lesson: 2,
      title: "Silent h, throaty j",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the two letters that mislead an English reader: h is never pronounced, and j (plus g before e or i) is a rasp at the back of the throat.",
      items: [
        { id: "es-u1l2-lahora", type: "vocab", front: "la hora", reading: "lahora", meaning: "hour", example: { jp: "¡Es la hora!", en: "It's time!" }, accept: ["the hour", "time", "o'clock"], hint: "The h is silent, so it sounds exactly like ora: OH-ra." },
        { id: "es-u1l2-hay", type: "vocab", front: "hay", reading: "hay", meaning: "there is", example: { jp: "Hay gente.", en: "There are people." }, accept: ["there are", "there's"], hint: "One word for both \"there is\" and \"there are\". Silent h again — it sounds like the English word \"eye\"." },
        { id: "es-u1l2-elhombre", type: "vocab", front: "el hombre", reading: "elhombre", meaning: "man", example: { jp: "El hombre es famoso.", en: "The man is famous." }, accept: ["the man", "guy"], hint: "OM-bre. Spanish h is the only letter that is always silent — you write it and never say it." },
        { id: "es-u1l2-lamujer", type: "vocab", front: "la mujer", reading: "lamujer", meaning: "woman", example: { jp: "La mujer es elegante.", en: "The woman is elegant." }, accept: ["the woman", "lady", "wife"], hint: "That j is a rasp at the back of the mouth, like clearing your throat: moo-HER." },
        { id: "es-u1l2-elojo", type: "vocab", front: "el ojo", reading: "elojo", meaning: "eye", example: { jp: "El ojo humano es perfecto.", en: "The human eye is perfect." }, accept: ["the eye"], hint: "OH-ho, with the same rasp. On its own, ¡Ojo! means \"watch out!\"" },
        { id: "es-u1l2-lagente", type: "vocab", front: "la gente", reading: "lagente", meaning: "people", example: { jp: "La gente de México es fantástica.", en: "The people of Mexico are fantastic." }, accept: ["people", "the people", "folk"], hint: "g before e or i takes that same throaty sound: HEN-te. Before a, o, u it is the hard g of \"go\"." },
      ],
    },
    // Lesson 3: the three letters English does not have
    {
      id: "es-u1l3",
      unit: 1,
      lesson: 3,
      title: "ñ, ll and y",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the three letters English does not have: ñ, the double ll, and y — the last two built on the same y sound.",
      items: [
        { id: "es-u1l3-elano", type: "vocab", front: "el año", reading: "elano", meaning: "year", example: { jp: "El año 2000 es histórico.", en: "The year 2000 is historic." }, accept: ["the year"], hint: "ñ is n with a y glued on: A-nyo. The tilde is not decoration — año is a year, ano is not." },
        { id: "es-u1l3-lamanana", type: "vocab", front: "la mañana", reading: "lamanana", meaning: "morning", example: { jp: "La mañana es tranquila.", en: "The morning is calm." }, accept: ["tomorrow", "the morning"], hint: "ma-NYA-na. With la it is the morning; on its own, mañana means tomorrow." },
        { id: "es-u1l3-elsenor", type: "vocab", front: "el señor", reading: "elsenor", meaning: "sir", example: { jp: "El señor es elegante.", en: "The gentleman is elegant." }, accept: ["mister", "mr", "gentleman", "the gentleman"], hint: "se-NYOR — Mr. or sir. Abbreviated Sr. in writing." },
        { id: "es-u1l3-lallave", type: "vocab", front: "la llave", reading: "lallave", meaning: "key", example: { jp: "Es la llave de la casa.", en: "It's the house key." }, accept: ["the key"], hint: "ll is one letter's worth of sound, the y of \"yes\": YA-ve." },
        { id: "es-u1l3-lasilla", type: "vocab", front: "la silla", reading: "lasilla", meaning: "chair", example: { jp: "La silla es elegante.", en: "The chair is elegant." }, accept: ["the chair", "seat"], hint: "SEE-ya. The same ll, this time in the middle of the word." },
        { id: "es-u1l3-y", type: "vocab", front: "y", reading: "y", meaning: "and", example: { jp: "La casa y el museo.", en: "The house and the museum." }, accept: ["plus"], hint: "One letter, one word. Alone it is just the vowel i — \"ee\". Before a vowel it turns into the ll sound: yo (I)." },
      ],
    },
    // Lesson 4: the consonants that shift — c, z, qu, and the two r's
    {
      id: "es-u1l4",
      unit: 1,
      lesson: 4,
      title: "Hard c, soft c, and the rolled rr",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the consonants that shift with the next letter — hard c and qu, soft c and z — and hear the rolled rr that separates perro from pero.",
      items: [
        { id: "es-u1l4-elcoche", type: "vocab", front: "el coche", reading: "elcoche", meaning: "car", example: { jp: "El coche de Ana es rápido.", en: "Ana's car is fast." }, accept: ["the car", "automobile"], hint: "c before a, o, u is a hard k: KO-che. And ch is a single sound, the ch of \"church\". Spain says coche; much of Latin America says carro or auto." },
        { id: "es-u1l4-elcielo", type: "vocab", front: "el cielo", reading: "elcielo", meaning: "sky", example: { jp: "El cielo de la mañana es tranquilo.", en: "The morning sky is calm." }, accept: ["the sky", "heaven"], hint: "But c before e or i goes soft: SYE-lo in Latin America, THYE-lo in most of Spain." },
        { id: "es-u1l4-ellapiz", type: "vocab", front: "el lápiz", reading: "ellapiz", meaning: "pencil", example: { jp: "El lápiz es de Ana.", en: "The pencil is Ana's." }, accept: ["the pencil"], hint: "z is that same soft sound. The accent tells you where to hit: LÁ-piz. With no accent, stress lands on the last syllable — or the second-to-last if the word ends in a vowel, n or s." },
        { id: "es-u1l4-que", type: "vocab", front: "qué", reading: "que", meaning: "what", example: { jp: "¿Qué es?", en: "What is it?" }, accept: ["which"], hint: "qu is a plain k — the u is silent: KE. Questions open with an upside-down ¿ so you know from the first character that a question is coming." },
        { id: "es-u1l4-elperro", type: "vocab", front: "el perro", reading: "elperro", meaning: "dog", example: { jp: "El perro de Ana es enorme.", en: "Ana's dog is enormous." }, accept: ["the dog"], hint: "rr is the rolled r — trill the tip of your tongue. Worth practising: it is the one sound that changes the word." },
        { id: "es-u1l4-pero", type: "vocab", front: "pero", reading: "pero", meaning: "but", example: { jp: "El museo es enorme, pero es tranquilo.", en: "The museum is enormous, but it's quiet." }, accept: ["however", "though"], hint: "One r, one light tap: PE-ro. The classic trap — perro is a dog, pero is \"but\"." },
      ],
    },
  ],
};
