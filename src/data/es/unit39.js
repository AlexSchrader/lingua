// ES Unit 39 — Los verbos · 3 (slot: conjugation-2) — A2
// THE IMPERFECT (l1–l3) + THE PRESENT-TENSE PLURALS (l4).
//
// Two gaps, one unit. A1 gave the learner exactly one past — the pretérito (hablé,
// comí, fui) — which cannot say "I used to" or "it was". Lessons 1–3 fill that in
// with the imperfecto, whose endings never vary (-aba / -ía). Lesson 4 closes a
// quieter gap: A1 taught most verbs in the yo and tú forms only (hablo, hablas,
// vivo, vives…), so a learner could not yet say hablamos or viven. The earlier A2
// units used those plural forms in examples naturally; this lesson actually teaches
// them. See es/unit38.js for why no group/conjForm tags appear here.
// Examples use A1 vocab plus this block.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT39 = {
  id: "es-u39",
  lang: "es",
  title: "Los verbos · 3",
  order: 39,
  stage: "a2",
  lessons: [
    {
      id: "es-u39l1",
      unit: 39,
      lesson: 1,
      title: "How things used to be",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe the past as a state — era tímido, había mucha gente, estaba en casa, tenía un perro.",
      items: [
        { id: "es-u39l1-era", type: "vocab", front: "era", reading: "era", meaning: "I was", example: { jp: "Era muy tímido de pequeño.", en: "I was very shy as a child." }, accept: ["he was", "it was", "i used to be"], hint: "The imperfecto: the \"was / used to be\" past. -ar verbs take -aba, -er/-ir take -ía. Ser is irregular: era." },
        { id: "es-u39l1-habia", type: "vocab", front: "había", reading: "habia", meaning: "there was", example: { jp: "Había mucha gente en la fiesta.", en: "There were a lot of people at the party." }, accept: ["there were", "there used to be"], hint: "The past of hay (A1, there is). Había mucha gente — there were a lot of people." },
        { id: "es-u39l1-estaba", type: "vocab", front: "estaba", reading: "estaba", meaning: "I was (state/place)", example: { jp: "Estaba en casa cuando llamó.", en: "I was at home when he called." }, accept: ["he was", "i was (somewhere)"], hint: "The imperfect of estar — a state or place that lasted: estaba cansado, I was tired." },
        { id: "es-u39l1-tenia", type: "vocab", front: "tenía", reading: "tenia", meaning: "I used to have", example: { jp: "De pequeño tenía un perro.", en: "As a child I had a dog." }, accept: ["i had", "he used to have"], hint: "tener in the imperfect — the had-it-for-a-while past. Tenía un perro, I used to have a dog." },
        { id: "es-u39l1-eras", type: "vocab", front: "eras", reading: "eras", meaning: "you were", example: { jp: "Tú eras mi mejor amigo.", en: "You were my best friend." }, accept: ["you used to be"], hint: "era, eras, era — ser's imperfect. Note there's no accent on any of them." },
        { id: "es-u39l1-eramos", type: "vocab", front: "éramos", reading: "eramos", meaning: "we were", example: { jp: "Éramos muy buenos amigos.", en: "We were very good friends." }, accept: ["we used to be"], hint: "The nosotros imperfect of ser: éramos, with the accent on the é." },
      ],
    },
    {
      id: "es-u39l2",
      unit: 39,
      lesson: 2,
      title: "What I used to do",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a past habit — hablaba mucho, comía en casa, vivía en un pueblo, iba al cine.",
      items: [
        { id: "es-u39l2-hablaba", type: "vocab", front: "hablaba", reading: "hablaba", meaning: "I used to speak", example: { jp: "De pequeño hablaba mucho.", en: "As a child I used to talk a lot." }, accept: ["i was speaking", "i spoke", "i used to talk"], hint: "hablar → hablaba. The -aba ending is the imperfect for every -ar verb." },
        { id: "es-u39l2-comia", type: "vocab", front: "comía", reading: "comia", meaning: "I used to eat", example: { jp: "Comía en casa todos los días.", en: "I used to eat at home every day." }, accept: ["i was eating", "i ate"], hint: "-er and -ir verbs take -ía: comía, vivía." },
        { id: "es-u39l2-vivia", type: "vocab", front: "vivía", reading: "vivia", meaning: "I used to live", example: { jp: "Vivía en un pueblo pequeño.", en: "I used to live in a small town." }, accept: ["i was living", "i lived"], hint: "vivir → vivía. Same -ía as comía." },
        { id: "es-u39l2-trabajaba", type: "vocab", front: "trabajaba", reading: "trabajaba", meaning: "he used to work", example: { jp: "Mi padre trabajaba en un banco.", en: "My father used to work in a bank." }, accept: ["i was working", "he worked", "i used to work"], hint: "trabajar → trabajaba. A habit in the past — used to work there." },
        { id: "es-u39l2-estudiaba", type: "vocab", front: "estudiaba", reading: "estudiaba", meaning: "I used to study", example: { jp: "Estudiaba español en la escuela.", en: "I used to study Spanish at school." }, accept: ["i was studying", "i studied"], hint: "estudiar → estudiaba." },
        { id: "es-u39l2-iba", type: "vocab", front: "iba", reading: "iba", meaning: "I used to go", example: { jp: "Iba al cine todas las semanas.", en: "I used to go to the cinema every week." }, accept: ["i was going", "i went"], hint: "ir is irregular in the imperfect: iba, ibas, iba. A very common past — iba a la escuela." },
      ],
    },
    {
      id: "es-u39l3",
      unit: 39,
      lesson: 3,
      title: "I wanted, I could, I knew",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the past of the head-verbs — quería un perro, no podía dormir, no sabía la respuesta, hacía frío.",
      items: [
        { id: "es-u39l3-queria", type: "vocab", front: "quería", reading: "queria", meaning: "I wanted", example: { jp: "De pequeño quería un perro.", en: "As a child I wanted a dog." }, accept: ["i used to want", "he wanted"], hint: "These four — querer, poder, saber, ser — live mostly in the imperfect, because they describe a state, not an event." },
        { id: "es-u39l3-podia", type: "vocab", front: "podía", reading: "podia", meaning: "I could", example: { jp: "No podía dormir por la noche.", en: "I couldn't sleep at night." }, accept: ["i was able to", "i used to be able to"], hint: "poder → podía. No podía is the everyday \"I couldn't\"." },
        { id: "es-u39l3-sabia", type: "vocab", front: "sabía", reading: "sabia", meaning: "I knew", example: { jp: "No sabía la respuesta.", en: "I didn't know the answer." }, accept: ["i used to know", "he knew"], hint: "saber → sabía. No sabía = I didn't know — worth owning as one whole phrase." },
        { id: "es-u39l3-hacia", type: "vocab", front: "hacía", reading: "hacia", meaning: "it was (weather)", example: { jp: "Hacía mucho frío ayer.", en: "It was very cold yesterday." }, accept: ["i used to do", "it was", "he did"], hint: "hacer → hacía. For weather in the past too: hacía frío, it was cold." },
        { id: "es-u39l3-veia", type: "vocab", front: "veía", reading: "veia", meaning: "I used to see", example: { jp: "Desde la ventana veía el jardín.", en: "From the window I could see the garden." }, accept: ["i was seeing", "i saw"], hint: "ver → veía. It keeps the e: veía, not \"vía\"." },
        { id: "es-u39l3-decia", type: "vocab", front: "decía", reading: "decia", meaning: "used to say", example: { jp: "Mi abuela siempre decía eso.", en: "My grandmother always used to say that." }, accept: ["i used to say", "he said"], hint: "decir → decía. Mi madre siempre decía… — my mother always used to say…" },
      ],
    },
    {
      id: "es-u39l4",
      unit: 39,
      lesson: 4,
      title: "All of us, in the present",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Take an everyday verb beyond yo and tú — hablamos, comemos, viven, hacemos, vamos, tienen.",
      items: [
        { id: "es-u39l4-hablamos", type: "vocab", front: "hablamos", reading: "hablamos", meaning: "we speak", example: { jp: "En casa hablamos español.", en: "At home we speak Spanish." }, accept: ["we're speaking", "we talk", "we are talking"], hint: "The nosotros present of -ar verbs ends -amos: hablamos, trabajamos. (It's also the preterite — context tells them apart.)" },
        { id: "es-u39l4-comemos", type: "vocab", front: "comemos", reading: "comemos", meaning: "we eat", example: { jp: "Comemos a las dos.", en: "We eat at two." }, accept: ["we're eating", "we are eating"], hint: "-er verbs: comemos, bebemos — the -emos ending." },
        { id: "es-u39l4-viven", type: "vocab", front: "viven", reading: "viven", meaning: "they live", example: { jp: "Mis padres viven en Madrid.", en: "My parents live in Madrid." }, accept: ["they're living", "they are living"], hint: "The ellos present of -ir/-er verbs ends -en: viven, comen. A1 gave you vivo and vives; this is the rest." },
        { id: "es-u39l4-hacemos", type: "vocab", front: "hacemos", reading: "hacemos", meaning: "we do", example: { jp: "Los domingos no hacemos nada.", en: "On Sundays we do nothing." }, accept: ["we make", "we're doing", "we are making"], hint: "hacer → hacemos. Irregular only in the yo form (hago); the rest is regular." },
        { id: "es-u39l4-vamos", type: "vocab", front: "vamos", reading: "vamos", meaning: "we go", example: { jp: "Vamos al mercado los sábados.", en: "We go to the market on Saturdays." }, accept: ["we're going", "let's go", "we are going"], hint: "ir → vamos. It also means \"let's go!\" — ¡Vamos!" },
        { id: "es-u39l4-tienen", type: "vocab", front: "tienen", reading: "tienen", meaning: "they have", example: { jp: "Mis amigos tienen un coche nuevo.", en: "My friends have a new car." }, accept: ["they've got", "they are having"], hint: "tener → tienen (the e becomes ie). A1 gave you tengo and tiene; tienen is the plural." },
      ],
    },
  ],
};
