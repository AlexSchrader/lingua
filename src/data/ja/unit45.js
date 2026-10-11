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
        { id: "ja-u45l1-tsutaemasu", type: "vocab", front: "つたえます", reading: "tsutaemasu", meaning: "to convey", example: { jp: "きもちをつたえます。", en: "I convey my feelings." }, drill: { jp: "ともだちにありがとうとつたえます。", en: "I pass on a thank-you to my friend." }, accept: ["to tell","to communicate","to pass on","to get across"], hint: "tsutaemasu — つたえる passes something along to another person: a message, a feeling, the news. Ichidan, so the stem is つたえ and the て-form is つたえて. Drilled here in the て-form.", group: "ichidan", conjForm: "te" },
        { id: "ja-u45l1-okuremasu", type: "vocab", front: "おくれます", reading: "okuremasu", meaning: "to be late", example: { jp: "でんしゃにおくれます。", en: "I am late for the train." }, drill: { jp: "しごとにおくれます。", en: "I am late for work." }, accept: ["to fall behind","to be delayed","to run late","to arrive late"], hint: "okuremasu — おくれる is being behind where you should be: late for a train, or a clock running slow. The thing you are late for takes に. Ichidan; drilled in the ない-form.", group: "ichidan", conjForm: "nai" },
        { id: "ja-u45l1-kimemasu", type: "vocab", front: "きめます", reading: "kimemasu", meaning: "to decide", example: { jp: "よていをきめます。", en: "I decide the plan." }, drill: { jp: "ばんごはんのメニューをきめます。", en: "I decide the dinner menu." }, accept: ["to choose","to settle on","to fix","to determine"], hint: "kimemasu — きめる lands on one option and closes the question, so it takes を. Ichidan, stem きめ, past きめた. Drilled in the past た-form.", group: "ichidan", conjForm: "ta" },
        { id: "ja-u45l1-hakobimasu", type: "vocab", front: "はこびます", reading: "hakobimasu", meaning: "to carry (polite form)", example: { jp: "にもつをはこびます。", en: "I carry the luggage." }, drill: { jp: "みずをだいどころにはこびます。", en: "I carry the water to the kitchen." }, accept: ["to transport","to move","to haul","to carry over"], hint: "hakobimasu — はこぶ is moving a thing from here to there, not merely holding it. Godan: the stem ends in び, so the て-form is はこんで. Drilled in the て-form.", group: "godan", conjForm: "te" },
        { id: "ja-u45l1-hiroimasu", type: "vocab", front: "ひろいます", reading: "hiroimasu", meaning: "to pick up", example: { jp: "ごみをひろいます。", en: "I pick up the trash." }, drill: { jp: "こうえんでかさをひろいます。", en: "I pick up an umbrella in the park." }, accept: ["to gather","to find","to collect","to pick off the ground"], hint: "hiroimasu — ひろう picks something up off the ground; it is the opposite of すてる, to throw away. Godan, past ひろった. Drilled in the past た-form.", group: "godan", conjForm: "ta" },
        { id: "ja-u45l1-sasoimasu", type: "vocab", front: "さそいます", reading: "sasoimasu", meaning: "to invite", example: { jp: "ともだちをさそいます。", en: "I invite a friend." }, drill: { jp: "かぞくをえいがにさそいます。", en: "I invite my family to a movie." }, accept: ["to ask along","to invite out","to ask to come","to invite over"], hint: "sasoimasu — さそう asks someone to come along with you: the person takes を, the outing takes に. Godan; drilled in the ない-form (さそわない).", group: "godan", conjForm: "nai" },
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
        { id: "ja-u45l2-watashimasu", type: "vocab", front: "わたします", reading: "watashimasu", meaning: "to hand over", example: { jp: "てがみをわたします。", en: "I hand over the letter." }, drill: { jp: "せんせいにしゅくだいをわたします。", en: "I hand my homework to the teacher." }, accept: ["to give","to pass","to hand in","to deliver"], hint: "watashimasu — わたす puts the thing straight into the other person's hands, so the receiver takes に. Godan, て-form わたして. Drilled in the て-form.", group: "godan", conjForm: "te" },
        { id: "ja-u45l2-migakimasu", type: "vocab", front: "みがきます", reading: "migakimasu", meaning: "to polish / brush", example: { jp: "はをみがきます。", en: "I brush my teeth." }, drill: { jp: "くつをみがきます。", en: "I polish my shoes." }, accept: ["to brush","to shine","to scrub","to buff"], hint: "migakimasu — みがく rubs something until it shines: teeth, shoes, a window. One verb covers brushing and polishing. Godan; drilled in the potential form (みがける).", group: "godan", conjForm: "potential" },
        { id: "ja-u45l2-susumimasu", type: "vocab", front: "すすみます", reading: "susumimasu", meaning: "to proceed", example: { jp: "まえにすすみます。", en: "I proceed forward." }, drill: { jp: "べんきょうがすすみます。", en: "My studies are moving along." }, accept: ["to advance","to go forward","to progress","to move ahead"], hint: "susumimasu — すすむ moves forward on its own, so it takes が: a queue, your studies, a clock running fast. Godan; drilled in the volitional form (すすもう).", group: "godan", conjForm: "volitional" },
        { id: "ja-u45l2-kaemasu", type: "vocab", front: "かえます", reading: "kaemasu", meaning: "to change", example: { jp: "よていをかえます。", en: "I change the plan." }, drill: { jp: "ネクタイをかえます。", en: "I change my tie." }, accept: ["to alter","to switch","to swap","to replace"], hint: "kaemasu — かえる changes a thing and takes を. Do not confuse it with かえります, to go home, which sounds almost the same. Ichidan; drilled in the potential form (かえられる).", group: "ichidan", conjForm: "potential" },
        { id: "ja-u45l2-sawarimasu", type: "vocab", front: "さわります", reading: "sawarimasu", meaning: "to touch", example: { jp: "えにさわります。", en: "I touch the painting." }, drill: { jp: "はなにさわります。", en: "I touch the flower." }, accept: ["to feel","to touch on","to put a hand on","to make contact with"], hint: "sawarimasu — さわる takes に, not を: えにさわる, touch the painting. That particle is the thing learners get wrong. Godan; drilled in the たら-form (さわったら).", group: "godan", conjForm: "tara" },
        { id: "ja-u45l2-mamorimasu", type: "vocab", front: "まもります", reading: "mamorimasu", meaning: "to protect", example: { jp: "やくそくをまもります。", en: "I keep the promise." }, drill: { jp: "ルールをまもります。", en: "I follow the rules." }, accept: ["to keep","to defend","to obey","to abide by"], hint: "mamorimasu — まもる guards a thing and keeps a rule; both senses are the same verb, so ルールをまもる is to obey. Godan; drilled in the ば-form (まもれば).", group: "godan", conjForm: "ba" },
      ],
    },
  ],
};
