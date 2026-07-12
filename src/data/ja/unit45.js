// Unit 45 — どうし・かつよう (verb conjugation drill → conjugate card) — A2 / JLPT N4
export const UNIT45 = {
  id: "ja-u45",
  lang: "ja",
  title: "どうし・かつよう",
  order: 45,
  stage: "a2",
  lessons: [
    {
      id: "ja-u45l1",
      unit: 45,
      lesson: 1,
      title: "Verb forms 1",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Conjugate N4 verbs: つたえます おくれます きめます はこびます ひろいます さそいます.",
      items: [
        { id: "ja-u45l1-tsutaemasu", type: "vocab", front: "つたえます", reading: "tsutaemasu", meaning: "to convey", example: { jp: "きもちをつたえます。", en: "I convey my feelings." }, accept: ["to tell","to communicate"], hint: "ichidan; drilled in the て-form", group: "ichidan", conjForm: "te" },
        { id: "ja-u45l1-okuremasu", type: "vocab", front: "おくれます", reading: "okuremasu", meaning: "to be late", example: { jp: "でんしゃにおくれます。", en: "I am late for the train." }, accept: ["to fall behind","to be delayed"], hint: "ichidan; drilled in the ない-form", group: "ichidan", conjForm: "nai" },
        { id: "ja-u45l1-kimemasu", type: "vocab", front: "きめます", reading: "kimemasu", meaning: "to decide", example: { jp: "よていをきめます。", en: "I decide the plan." }, accept: ["to choose","to settle on"], hint: "ichidan; drilled in the past た-form", group: "ichidan", conjForm: "ta" },
        { id: "ja-u45l1-hakobimasu", type: "vocab", front: "はこびます", reading: "hakobimasu", meaning: "to carry", example: { jp: "にもつをはこびます。", en: "I carry the luggage." }, accept: ["to transport","to move"], hint: "godan; drilled in the て-form", group: "godan", conjForm: "te" },
        { id: "ja-u45l1-hiroimasu", type: "vocab", front: "ひろいます", reading: "hiroimasu", meaning: "to pick up", example: { jp: "ごみをひろいます。", en: "I pick up the trash." }, accept: ["to gather","to find"], hint: "godan; drilled in the past た-form", group: "godan", conjForm: "ta" },
        { id: "ja-u45l1-sasoimasu", type: "vocab", front: "さそいます", reading: "sasoimasu", meaning: "to invite", example: { jp: "ともだちをさそいます。", en: "I invite a friend." }, accept: ["to ask along","to invite out"], hint: "godan; drilled in the ない-form", group: "godan", conjForm: "nai" },
      ],
    },
    {
      id: "ja-u45l2",
      unit: 45,
      lesson: 2,
      title: "Verb forms 2",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Conjugate N4 verbs: わたします みがきます すすみます かえます さわります まもります.",
      items: [
        { id: "ja-u45l2-watashimasu", type: "vocab", front: "わたします", reading: "watashimasu", meaning: "to hand over", example: { jp: "てがみをわたします。", en: "I hand over the letter." }, accept: ["to give","to pass"], hint: "godan; drilled in the て-form", group: "godan", conjForm: "te" },
        { id: "ja-u45l2-migakimasu", type: "vocab", front: "みがきます", reading: "migakimasu", meaning: "to polish / brush", example: { jp: "はをみがきます。", en: "I brush my teeth." }, accept: ["to brush","to shine"], hint: "godan; drilled in the potential form", group: "godan", conjForm: "potential" },
        { id: "ja-u45l2-susumimasu", type: "vocab", front: "すすみます", reading: "susumimasu", meaning: "to proceed", example: { jp: "まえにすすみます。", en: "I proceed forward." }, accept: ["to advance","to go forward"], hint: "godan; drilled in the volitional form", group: "godan", conjForm: "volitional" },
        { id: "ja-u45l2-kaemasu", type: "vocab", front: "かえます", reading: "kaemasu", meaning: "to change", example: { jp: "よていをかえます。", en: "I change the plan." }, accept: ["to alter","to switch"], hint: "ichidan; drilled in the potential form", group: "ichidan", conjForm: "potential" },
        { id: "ja-u45l2-sawarimasu", type: "vocab", front: "さわります", reading: "sawarimasu", meaning: "to touch", example: { jp: "えにさわります。", en: "I touch the painting." }, accept: ["to feel","to touch on"], hint: "godan; drilled in the たら-form", group: "godan", conjForm: "tara" },
        { id: "ja-u45l2-mamorimasu", type: "vocab", front: "まもります", reading: "mamorimasu", meaning: "to protect", example: { jp: "やくそくをまもります。", en: "I keep the promise." }, accept: ["to keep","to defend"], hint: "godan; drilled in the ば-form", group: "godan", conjForm: "ba" },
      ],
    },
  ],
};
