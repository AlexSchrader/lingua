// ES Unit 38 — El imperfecto ("The imperfect") — A2 CONJUGATION DRILL (slot: conjugation-1)
// A1 taught ONE past tense, the preterite (hablé, habló — u14), and deliberately
// left the imperfect for A2 (see the scope note in es/unit14.js). This is that
// tense: the past of habit, description and "used to". Like the French drill units
// (fr/unit45.js), each form is taught as its own vocab chunk — there is no Spanish
// conjugation engine, and conjugate.js implements Japanese morphology only.
//
// The imperfect is the EASIEST Spanish tense: two endings, three irregular verbs,
// no stem changes. -ar verbs take -aba; -er/-ir verbs take -ía; only ser, ir and
// ver break the pattern. Lessons 1–2 drill the two endings, Lesson 3 the three
// irregulars, Lesson 4 the everyday verbs so the rule sticks.
//
// Conventions: see es/unit36.js. BLOCK-3 SCOPE: examples use only the A1 corpus
// (u1–u20) plus this block's own fronts. These forms share a lexeme with the A1
// infinitives (hablar→hablaba) — that is the point of a drill unit, the same
// progression as u13 hablar → u14 hablé. FREE: María, Pablo, Ana, Madrid.
export const ES_UNIT38 = {
  id: "es-u38",
  lang: "es",
  title: "El imperfecto",
  order: 38,
  stage: "a2",
  lessons: [
    {
      id: "es-u38l1",
      unit: 38,
      lesson: 1,
      title: "-aba (los verbos en -ar)",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you used to do, -ar verbs: hablaba español, trabajaba en Madrid, estudiaba mucho.",
      items: [
        { id: "es-u38l1-hablaba", type: "vocab", front: "hablaba", reading: "hablaba", meaning: "I used to speak / was speaking", example: { jp: "De niño, hablaba con mi abuela todos los días.", en: "As a child, I used to talk with my grandmother every day." }, accept: ["i was speaking", "i used to talk", "he used to speak", "she was speaking"], hint: "The imperfect of -ar verbs is -aba on the stem: hablar → hablaba. Same form for yo and él/ella — the sentence tells you which. tú adds -s: hablabas." },
        { id: "es-u38l1-trabajaba", type: "vocab", front: "trabajaba", reading: "trabajaba", meaning: "I used to work / was working", example: { jp: "Mi padre trabajaba en un banco.", en: "My father used to work at a bank." }, accept: ["i was working", "he used to work", "she was working"], hint: "trabajar → trabajaba. Perfect for a job you had for a stretch of time in the past." },
        { id: "es-u38l1-estaba", type: "vocab", front: "estaba", reading: "estaba", meaning: "I was / was (somewhere)", example: { jp: "La casa estaba muy sucia.", en: "The house was very dirty." }, accept: ["he was", "she was", "it was", "i was there"], hint: "estar → estaba: a state or a location in the past. estuvo (u14) is a finished event; estaba is the background scene." },
        { id: "es-u38l1-compraba", type: "vocab", front: "compraba", reading: "compraba", meaning: "I used to buy / was buying", example: { jp: "Siempre compraba el pan en esa tienda.", en: "I always used to buy bread at that shop." }, accept: ["i was buying", "he used to buy", "she was buying"], hint: "comprar → compraba. Words like siempre and todos los días almost always pull the imperfect." },
        { id: "es-u38l1-estudiaba", type: "vocab", front: "estudiaba", reading: "estudiaba", meaning: "I used to study / was studying", example: { jp: "Cuando estudiaba, vivía en Madrid.", en: "When I was studying, I lived in Madrid." }, accept: ["i was studying", "he used to study", "she was studying"], hint: "estudiar → estudiaba. Two imperfects together set a whole past scene: cuando estudiaba, vivía…" },
        { id: "es-u38l1-cocinaba", type: "vocab", front: "cocinaba", reading: "cocinaba", meaning: "I used to cook / was cooking", example: { jp: "Mi madre cocinaba muy bien.", en: "My mother used to cook very well." }, accept: ["i was cooking", "he used to cook", "she was cooking"], hint: "cocinar → cocinaba. The imperfect is how you describe what someone was like or usually did." },
      ],
    },
    {
      id: "es-u38l2",
      unit: 38,
      lesson: 2,
      title: "-ía (los verbos en -er / -ir)",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you used to do, -er/-ir verbs: comía en casa, vivía en el pueblo, tenía un perro.",
      items: [
        { id: "es-u38l2-comia", type: "vocab", front: "comía", reading: "comia", meaning: "I used to eat / was eating", example: { jp: "Comía carne todos los días.", en: "I used to eat meat every day." }, accept: ["i was eating", "he used to eat", "she was eating"], hint: "-er and -ir verbs share ONE imperfect ending, -ía: comer → comía, vivir → vivía. Simpler than the present, where they differ." },
        { id: "es-u38l2-vivia", type: "vocab", front: "vivía", reading: "vivia", meaning: "I used to live / was living", example: { jp: "Cuando era niño, vivía en un pueblo pequeño.", en: "When I was a child, I lived in a small town." }, accept: ["i was living", "he used to live", "she was living"], hint: "vivir → vivía. The classic \"where I grew up\" sentence: de niño vivía en…" },
        { id: "es-u38l2-tenia", type: "vocab", front: "tenía", reading: "tenia", meaning: "I used to have / had", example: { jp: "De pequeña, tenía un perro muy grande.", en: "As a little girl, I had a very big dog." }, accept: ["i had", "he used to have", "she had"], hint: "tener → tenía. For describing what there was: tenía el pelo largo, tenía diez años." },
        { id: "es-u38l2-hacia", type: "vocab", front: "hacía", reading: "hacia", meaning: "I used to do / was doing", example: { jp: "Los domingos no hacía nada.", en: "On Sundays I didn't use to do anything." }, accept: ["i was doing", "he used to do", "she was making"], hint: "hacer → hacía. Also for past weather: hacía frío, hacía sol = it was cold / sunny." },
        { id: "es-u38l2-salia", type: "vocab", front: "salía", reading: "salia", meaning: "I used to go out / was leaving", example: { jp: "Salía con mis amigos los sábados.", en: "I used to go out with my friends on Saturdays." }, accept: ["i was going out", "he used to leave", "she was leaving"], hint: "salir → salía. Any -ir verb, however irregular in the present, is regular here: salgo (present) but salía (imperfect)." },
        { id: "es-u38l2-leia", type: "vocab", front: "leía", reading: "leia", meaning: "I used to read / was reading", example: { jp: "Mi padre siempre leía por la mañana.", en: "My father always used to read in the morning." }, accept: ["i was reading", "he used to read", "she was reading"], hint: "leer → leía. The imperfect paints the habitual scene; the preterite (u14) reports the one finished event inside it." },
      ],
    },
    {
      id: "es-u38l3",
      unit: 38,
      lesson: 3,
      title: "Era, iba, veía",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the only three irregular imperfects: era muy joven, iba a la escuela, había mucha gente.",
      items: [
        { id: "es-u38l3-era", type: "vocab", front: "era", reading: "era", meaning: "was / used to be", example: { jp: "Mi abuelo era muy alto.", en: "My grandfather was very tall." }, accept: ["i was", "he was", "she was", "it was"], hint: "ser → era: only THREE Spanish verbs are irregular in the imperfect, and this is the first. For describing what someone/something was: era bonito, era difícil." },
        { id: "es-u38l3-eran", type: "vocab", front: "eran", reading: "eran", meaning: "they were", example: { jp: "Mis abuelos eran de un pueblo pequeño.", en: "My grandparents were from a small town." }, accept: ["they used to be", "you all were"], hint: "The they-form of era. Also for telling past time: eran las tres = it was three o'clock." },
        { id: "es-u38l3-iba", type: "vocab", front: "iba", reading: "iba", meaning: "I used to go / was going", example: { jp: "Todos los días iba a la escuela en autobús.", en: "Every day I used to go to school by bus." }, accept: ["he was going", "she used to go", "i was going"], hint: "ir → iba, the second irregular. iba a + a plain verb also means \"was going to\": iba a comer = I was about to eat." },
        { id: "es-u38l3-iban", type: "vocab", front: "iban", reading: "iban", meaning: "they used to go / were going", example: { jp: "Mis amigos iban al parque los domingos.", en: "My friends used to go to the park on Sundays." }, accept: ["they were going", "you all used to go"], hint: "The they-form of iba." },
        { id: "es-u38l3-veia", type: "vocab", front: "veía", reading: "veia", meaning: "I used to see / was watching", example: { jp: "De niño veía a mis primos todos los días.", en: "As a child I used to see my cousins every day." }, accept: ["he used to see", "she was watching", "i was seeing"], hint: "ver → veía, the third and last irregular. It only counts as irregular because of the extra e (ve-ía)." },
        { id: "es-u38l3-habia", type: "vocab", front: "había", reading: "habia", meaning: "there was / there were", example: { jp: "Había mucha gente en la plaza.", en: "There were a lot of people in the square." }, accept: ["there used to be", "there were"], hint: "The past of hay (u7). One form for singular AND plural: había un coche, había muchos coches. The single most useful imperfect there is." },
      ],
    },
    {
      id: "es-u38l4",
      unit: 38,
      lesson: 4,
      title: "Podía, quería, sabía",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe past ability and wanting: no podía dormir, quería ir, no sabía nada.",
      items: [
        { id: "es-u38l4-podia", type: "vocab", front: "podía", reading: "podia", meaning: "I could / was able to", example: { jp: "No podía dormir bien.", en: "I couldn't sleep well." }, accept: ["he could", "she was able to", "i couldn't"], hint: "poder → podía. \"Could\" as a past state: no podía = I wasn't able to. (For \"would be able to\", that's the conditional podría, u37.)" },
        { id: "es-u38l4-queria", type: "vocab", front: "quería", reading: "queria", meaning: "I wanted", example: { jp: "Quería hablar con María.", en: "I wanted to talk with María." }, accept: ["he wanted", "she wanted", "i'd like"], hint: "querer → quería. Softer and more polite than the blunt quiero: quería un café is a gentle \"I'd like a coffee\"." },
        { id: "es-u38l4-sabia", type: "vocab", front: "sabía", reading: "sabia", meaning: "I knew / used to know", example: { jp: "No sabía nada de eso.", en: "I didn't know anything about that." }, accept: ["he knew", "she knew", "i didn't know"], hint: "saber (u36) → sabía. No lo sabía = I didn't know (that). Watch the accent: sabía = knew, sabia = a wise woman." },
        { id: "es-u38l4-decia", type: "vocab", front: "decía", reading: "decia", meaning: "I used to say / was saying", example: { jp: "Mi madre siempre decía lo mismo.", en: "My mother always used to say the same thing." }, accept: ["he was saying", "she used to say", "i was saying"], hint: "decir (u13) → decía. For reported habit: siempre decía que… = he/she always used to say that…" },
        { id: "es-u38l4-ponia", type: "vocab", front: "ponía", reading: "ponia", meaning: "I used to put / was putting", example: { jp: "Ponía las llaves en la mesa.", en: "I used to put the keys on the table." }, accept: ["he was putting", "she used to put", "i was putting"], hint: "poner (u19) → ponía. Regular in the imperfect, like nearly everything." },
        { id: "es-u38l4-venia", type: "vocab", front: "venía", reading: "venia", meaning: "I used to come / was coming", example: { jp: "Ana venía a casa los domingos.", en: "Ana used to come home on Sundays." }, accept: ["he was coming", "she used to come", "i was coming"], hint: "venir → venía. The everyday partner of iba (going): iba y venía = came and went." },
      ],
    },
  ],
};
