// JA Unit 133 — けんこう・からだ (Health and wellbeing) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js.
//
// A1/A2 already teach the sick-day vocabulary (びょうき・くすり・ねつ・いしゃ), so
// this unit deliberately does not repeat it. B1 is the register where you describe
// a body that is working — stamina, sleep, recovery, what you do to stay well —
// rather than only reporting a symptom to a doctor.
export const UNIT133 = {
  id: "ja-u133",
  lang: "ja",
  title: "けんこう・からだ",
  order: 133,
  stage: "b1",
  lessons: [
    {
      id: "ja-u133l1",
      unit: 133,
      lesson: 1,
      title: "How the body is doing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe your body's condition beyond 'well' or 'ill': たいりょく きんにく しんぞう こきゅう けつあつ たいじゅう.",
      items: [
        { id: "ja-u133l1-tairyoku", type: "vocab", front: "たいりょく", reading: "tairyoku", meaning: "stamina", example: { jp: "としをとってたいりょくがおちたので、まいにちあるくことにしました。", en: "My stamina has dropped with age, so I've taken to walking every day." }, drill: { jp: "たいりょくがおちました。", en: "My stamina dropped." }, accept: ["physical strength", "fitness", "endurance"] },
        { id: "ja-u133l1-kinniku", type: "vocab", front: "きんにく", reading: "kinniku", meaning: "muscle", example: { jp: "きのううんどうしたので、きょうはきんにくがいたいです。", en: "I exercised yesterday, so my muscles hurt today." }, accept: ["muscles", "muscle tissue"] },
        { id: "ja-u133l1-shinzo", type: "vocab", front: "しんぞう", reading: "shinzō", meaning: "heart (organ)", example: { jp: "はしったあとはしんぞうがはやくうごいて、すこしこわくなります。", en: "After running my heart beats fast, and it frightens me a little." }, accept: ["the heart"] },
        { id: "ja-u133l1-kokyu", type: "vocab", front: "こきゅう", reading: "kokyū", meaning: "breathing", example: { jp: "ゆっくりこきゅうをすれば、きもちがおちつきます。", en: "If you breathe slowly, you calm down." }, drill: { jp: "こきゅうをします。", en: "I take a breath." }, accept: ["breath", "respiration"] },
        { id: "ja-u133l1-ketsuatsu", type: "vocab", front: "けつあつ", reading: "ketsuatsu", meaning: "blood pressure", example: { jp: "けつあつがたかいので、しおをすくなくしています。", en: "My blood pressure is high, so I'm keeping salt low." }, accept: ["BP", "one's blood pressure"] },
        { id: "ja-u133l1-taiju", type: "vocab", front: "たいじゅう", reading: "taijū", meaning: "body weight", example: { jp: "たいじゅうはかわらないのに、ふくがきつくなりました。", en: "My weight hasn't changed, but my clothes have got tight." }, accept: ["weight", "one's weight"] },
      ],
    },
    {
      id: "ja-u133l2",
      unit: 133,
      lesson: 2,
      title: "When something is wrong",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a symptom precisely enough for a doctor to act on it: いたみ かゆい ひろう ふみん かんじゃ しんだん.",
      items: [
        { id: "ja-u133l2-itami", type: "vocab", front: "いたみ", reading: "itami", meaning: "pain", example: { jp: "あさはいたみがつよいですが、ひるにはらくになります。", en: "The pain is strong in the morning, but it eases by midday." }, accept: ["ache", "soreness", "the pain"] },
        { id: "ja-u133l2-kayui", type: "vocab", front: "かゆい", reading: "kayui", meaning: "itchy", example: { jp: "せなかがかゆくて、よるよくねられませんでした。", en: "My back was itchy, and I couldn't sleep well at night." }, drill: { jp: "せなかがかゆい。", en: "My back is itchy." }, accept: ["itching", "scratchy"] },
        { id: "ja-u133l2-hiro", type: "vocab", front: "ひろう", reading: "hirō", meaning: "fatigue", example: { jp: "ひろうがたまっていたので、いちにちねていました。", en: "Fatigue had built up, so I stayed in bed for a day." }, accept: ["exhaustion", "tiredness", "weariness"] },
        { id: "ja-u133l2-fumin", type: "vocab", front: "ふみん", reading: "fumin", meaning: "sleeplessness", example: { jp: "しごとのことでふみんがつづいたので、びょういんへいきました。", en: "Sleeplessness continued because of work, so I went to the hospital." }, accept: ["insomnia", "not sleeping"] },
        { id: "ja-u133l2-kanja", type: "vocab", front: "かんじゃ", reading: "kanja", meaning: "patient", example: { jp: "かんじゃがおおいので、ごぜんちゅうはとてもいそがしいです。", en: "There are many patients, so the mornings are very busy." }, accept: ["the patient", "patients"] },
        { id: "ja-u133l2-shindan", type: "vocab", front: "しんだん", reading: "shindan", meaning: "diagnosis", example: { jp: "しんだんのけっかがよかったので、とてもあんしんしました。", en: "The result of the diagnosis was good, so I was very relieved." }, accept: ["medical assessment", "check-up finding"] },
      ],
    },
    {
      id: "ja-u133l3",
      unit: 133,
      lesson: 3,
      title: "Treatment and rest",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about getting better and what helps you stay well: しょほう かいふく きゅうよう すいみん かんびょう せいけつ.",
      items: [
        { id: "ja-u133l3-shoho", type: "vocab", front: "しょほう", reading: "shohō", meaning: "prescription", example: { jp: "しょほうのくすりをのんだら、つぎのあさにはよくなりました。", en: "I took the prescribed medicine, and by next morning I was better." }, accept: ["prescribing", "a prescription"] },
        { id: "ja-u133l3-kaifuku", type: "vocab", front: "かいふく", reading: "kaifuku", meaning: "recovery", example: { jp: "かいふくにじかんがかかったので、しごとをながくやすみました。", en: "Recovery took time, so I was off work for a long while." }, accept: ["getting better", "convalescence", "recuperation"] },
        { id: "ja-u133l3-kyuyo", type: "vocab", front: "きゅうよう", reading: "kyūyō", meaning: "rest", example: { jp: "いしゃにきゅうようをすすめられたので、しごとをやすみます。", en: "The doctor recommended rest, so I'm taking time off work." }, drill: { jp: "きゅうようがひつようです。", en: "Rest is necessary." }, accept: ["taking it easy", "recuperation", "a rest"] },
        { id: "ja-u133l3-suimin", type: "vocab", front: "すいみん", reading: "suimin", meaning: "sleep", example: { jp: "すいみんがたりないと、あたまがはたらきません。", en: "If you don't get enough sleep, your head doesn't work." }, accept: ["slumber", "getting sleep"] },
        { id: "ja-u133l3-kanbyo", type: "vocab", front: "かんびょう", reading: "kanbyō", meaning: "nursing someone", example: { jp: "はははそぼのかんびょうでつかれていますが、なにもいいません。", en: "My mother is tired from nursing my grandmother, but she says nothing." }, drill: { jp: "かんびょうでつかれています。", en: "I am tired from nursing." }, accept: ["caring for the sick", "looking after a patient"] },
        { id: "ja-u133l3-seiketsu", type: "vocab", front: "せいけつ", reading: "seiketsu", meaning: "hygienic", example: { jp: "だいどころをせいけつにしておけば、びょうきになりにくいです。", en: "If you keep the kitchen hygienic, you're less likely to get ill." }, drill: { jp: "せいけつにしておきます。", en: "I keep it hygienic." }, accept: ["clean", "sanitary", "cleanliness"] },
      ],
    },
    {
      id: "ja-u133l4",
      unit: 133,
      lesson: 4,
      title: "Mind and lifestyle",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about stress and the habits you use against it: ストレス せいしん リラックス えいよう たいそう ダイエット.",
      items: [
        { id: "ja-u133l4-sutoresu", type: "vocab", front: "ストレス", reading: "sutoresu", meaning: "stress", example: { jp: "しごとのストレスがつよいので、よるはおんがくをききます。", en: "Work stress is heavy, so I listen to music in the evening." }, accept: ["pressure", "strain"] },
        { id: "ja-u133l4-seishin", type: "vocab", front: "せいしん", reading: "seishin", meaning: "the mind", example: { jp: "からだのけんこうばかりきにしていて、せいしんのけんこうをわすれていました。", en: "I was minding only my physical health, and forgot about my mental health." }, accept: ["spirit", "mental (health)", "psyche"] },
        { id: "ja-u133l4-rirakkusu", type: "vocab", front: "リラックス", reading: "rirakkusu", meaning: "relaxing", example: { jp: "おふろにはいるとリラックスできるので、まいばんはいります。", en: "I can relax when I get in the bath, so I get in every night." }, accept: ["relax", "unwinding"] },
        { id: "ja-u133l4-eiyo", type: "vocab", front: "えいよう", reading: "eiyō", meaning: "nutrition", example: { jp: "やさいはえいようがおおいので、まいにちたべています。", en: "Vegetables have a lot of nutrition, so I eat them every day." }, drill: { jp: "えいようがおおいです。", en: "It has a lot of nutrition." }, accept: ["nutrients", "nourishment", "food value"] },
        { id: "ja-u133l4-taiso", type: "vocab", front: "たいそう", reading: "taisō", meaning: "exercises", example: { jp: "あさのたいそうをすると、いちにちがらくになります。", en: "If you do the morning exercises, the whole day is easier." }, accept: ["calisthenics", "gymnastics", "a work-out"] },
        { id: "ja-u133l4-daietto", type: "vocab", front: "ダイエット", reading: "daietto", meaning: "dieting", example: { jp: "ダイエットをはじめましたが、あまいものはやめられません。", en: "I started dieting, but I can't give up sweet things." }, accept: ["a diet", "slimming"] },
      ],
    },
  ],
};
