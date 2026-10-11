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
        { id: "ja-u133l1-tairyoku", type: "vocab", front: "たいりょく", reading: "tairyoku", meaning: "stamina", example: { jp: "としをとってたいりょくがおちたので、まいにちあるくことにしました。", en: "My stamina has dropped with age, so I've taken to walking every day." }, drill: { jp: "たいりょくがおちました。", en: "My stamina dropped." }, accept: ["physical strength", "fitness", "endurance"], hint: "tai-RYO-ku — three beats. たい is the body and りょく is strength, so it is how much the body can keep doing. ちから is force in one moment; たいりょく is how long it lasts." },
        { id: "ja-u133l1-kinniku", type: "vocab", front: "きんにく", reading: "kinniku", meaning: "muscle", example: { jp: "きのううんどうしたので、きょうはきんにくがいたいです。", en: "I exercised yesterday, so my muscles hurt today." }, drill: { jp: "きんにくをつけたいです。", en: "I want to build muscle." }, accept: ["muscles", "muscle tissue", "a muscle"], hint: "kin-NI-ku — three beats, the ん held. きん is a sinew and にく is flesh. ⚠️ にく on its own is MEAT, so the word reads literally as sinew-meat — which is accurate." },
        { id: "ja-u133l1-shinzo", type: "vocab", front: "しんぞう", reading: "shinzō", meaning: "heart (organ)", example: { jp: "はしったあとはしんぞうがはやくうごいて、すこしこわくなります。", en: "After running my heart beats fast, and it frightens me a little." }, drill: { jp: "しんぞうがはやくうごいています。", en: "My heart is beating fast." }, accept: ["the heart", "one's heart", "the heart organ"], hint: "shin-ZŌ — the ん is held and the last beat is long. しん is the heart and ぞう is an organ. ⚠️ こころ is the heart as feelings; しんぞう is only the pump in your chest." },
        { id: "ja-u133l1-kokyu", type: "vocab", front: "こきゅう", reading: "kokyū", meaning: "breathing", example: { jp: "ゆっくりこきゅうをすれば、きもちがおちつきます。", en: "If you breathe slowly, you calm down." }, drill: { jp: "こきゅうをします。", en: "I take a breath." }, accept: ["breath", "respiration", "one's breathing"], hint: "ko-KYŪ — the second beat is long, きゅ is ONE beat. こ is to breathe out and きゅう is to breathe in, so the word holds both halves. It takes する, not ある." },
        { id: "ja-u133l1-ketsuatsu", type: "vocab", front: "けつあつ", reading: "ketsuatsu", meaning: "blood pressure", example: { jp: "けつあつがたかいので、しおをすくなくしています。", en: "My blood pressure is high, so I'm keeping salt low." }, drill: { jp: "けつあつがさがりました。", en: "My blood pressure has come down." }, accept: ["BP", "one's blood pressure", "arterial pressure"], hint: "ke-tsu-A-tsu — four beats. けつ is blood and あつ is pressure. Japan watches it closely because of a salty diet, so けつあつ comes up in ordinary conversation." },
        { id: "ja-u133l1-taiju", type: "vocab", front: "たいじゅう", reading: "taijū", meaning: "body weight", example: { jp: "たいじゅうはかわらないのに、ふくがきつくなりました。", en: "My weight hasn't changed, but my clothes have got tight." }, drill: { jp: "たいじゅうがふえました。", en: "My weight has gone up." }, accept: ["weight", "one's weight", "bodyweight"], hint: "tai-JŪ — the second beat is long. たい is the body and じゅう is heaviness. おもさ is the weight of any object; たいじゅう is only a body's." },
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
        { id: "ja-u133l2-itami", type: "vocab", front: "いたみ", reading: "itami", meaning: "pain (an ache felt)", example: { jp: "あさはいたみがつよいですが、ひるにはらくになります。", en: "The pain is strong in the morning, but it eases by midday." }, drill: { jp: "いたみがきえました。", en: "The pain has gone." }, accept: ["ache", "soreness", "the pain"], hint: "i-TA-mi — three beats. The noun of いたい, so it is the ache as a thing you can describe. ⚠️ Also used of food going off: 「くだものの いたみ」." },
        { id: "ja-u133l2-kayui", type: "vocab", front: "かゆい", reading: "kayui", meaning: "itchy", example: { jp: "せなかがかゆくて、よるよくねられませんでした。", en: "My back was itchy, and I couldn't sleep well at night." }, drill: { jp: "せなかがかゆい。", en: "My back is itchy." }, accept: ["itching", "scratchy", "irritated"], hint: "ka-YU-i — three beats. What itches takes が: 「せなかが かゆい」. ⚠️ 「かゆい ところ」 means the exact spot that needs attention, used figuratively of good service." },
        { id: "ja-u133l2-hiro", type: "vocab", front: "ひろう", reading: "hirō", meaning: "fatigue", example: { jp: "ひろうがたまっていたので、いちにちねていました。", en: "Fatigue had built up, so I stayed in bed for a day." }, drill: { jp: "ひろうがとれません。", en: "The fatigue will not shift." }, accept: ["exhaustion", "tiredness", "weariness"], hint: "hi-RŌ — the second beat is long. ひ is to tire and ろう is labour, so it is tiredness from effort. つかれ is the everyday word; ひろう is what a doctor writes." },
        { id: "ja-u133l2-fumin", type: "vocab", front: "ふみん", reading: "fumin", meaning: "sleeplessness", example: { jp: "しごとのことでふみんがつづいたので、びょういんへいきました。", en: "Sleeplessness continued because of work, so I went to the hospital." }, drill: { jp: "ふみんでくるしいです。", en: "I am suffering from sleeplessness." }, accept: ["insomnia", "not sleeping", "sleepless nights"], hint: "fu-MIN — two beats, the ん held. ふ is not and みん is sleep, the same みん as in すいみん. The ふ～ prefix negates many words: ふべん, ふあん, ふまん." },
        { id: "ja-u133l2-kanja", type: "vocab", front: "かんじゃ", reading: "kanja", meaning: "patient", example: { jp: "かんじゃがおおいので、ごぜんちゅうはとてもいそがしいです。", en: "There are many patients, so the mornings are very busy." }, drill: { jp: "かんじゃをみています。", en: "He is seeing patients." }, accept: ["the patient", "patients", "a sick person"], hint: "KAN-ja — two beats, the ん held, じゃ is ONE beat. かん is to suffer and ～じゃ marks the person. The same ～じゃ gives ひがいしゃ and きしゃ — one suffix, many roles." },
        { id: "ja-u133l2-shindan", type: "vocab", front: "しんだん", reading: "shindan", meaning: "diagnosis", example: { jp: "しんだんのけっかがよかったので、とてもあんしんしました。", en: "The result of the diagnosis was good, so I was very relieved." }, drill: { jp: "しんだんをうけました。", en: "I had a diagnosis." }, accept: ["medical assessment", "check-up finding", "a diagnosis"], hint: "shin-DAN — two beats, the ん held. しん is to examine and だん is to judge, so it is the doctor's verdict. A routine check is けんしん; しんだん names what is wrong." },
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
        { id: "ja-u133l3-shoho", type: "vocab", front: "しょほう", reading: "shohō", meaning: "prescription", example: { jp: "しょほうのくすりをのんだら、つぎのあさにはよくなりました。", en: "I took the prescribed medicine, and by next morning I was better." }, drill: { jp: "しょほうをもらいました。", en: "I got a prescription." }, accept: ["prescribing", "a prescription", "the prescribed medicine"], hint: "sho-HŌ — the second beat is long. しょ is to deal with and ほう is a method, so it is the method prescribed. The paper is しょほうせん, taken to a やっきょく." },
        { id: "ja-u133l3-kaifuku", type: "vocab", front: "かいふく", reading: "kaifuku", meaning: "recovery", example: { jp: "かいふくにじかんがかかったので、しごとをながくやすみました。", en: "Recovery took time, so I was off work for a long while." }, drill: { jp: "かいふくをいのっています。", en: "I am praying for your recovery." }, accept: ["getting better", "convalescence", "recuperation"], hint: "kai-FU-ku — three beats. かい is to return and ふく is to restore, so you come back to how you were. なおる is simply to get better; かいふく is the whole process." },
        { id: "ja-u133l3-kyuyo", type: "vocab", front: "きゅうよう", reading: "kyūyō", meaning: "rest (recuperation)", example: { jp: "いしゃにきゅうようをすすめられたので、しごとをやすみます。", en: "The doctor recommended rest, so I'm taking time off work." }, drill: { jp: "きゅうようがひつようです。", en: "Rest is necessary." }, accept: ["taking it easy", "recuperation", "a rest"], hint: "kyū-YŌ — two long beats, きゅ is ONE beat. きゅう is rest and よう is to nourish, so it is rest that rebuilds you. やすみ is a day off; きゅうよう is rest on doctor's orders." },
        { id: "ja-u133l3-suimin", type: "vocab", front: "すいみん", reading: "suimin", meaning: "sleep (the sleep one gets)", example: { jp: "すいみんがたりないと、あたまがはたらきません。", en: "If you don't get enough sleep, your head doesn't work." }, drill: { jp: "すいみんをたいせつにしています。", en: "I take sleep seriously." }, accept: ["slumber", "getting sleep", "one's sleep"], hint: "sui-MIN — two beats, the ん held. すい is to doze and みん is sleep. ねる is the act of going to bed; すいみん is the quantity and quality you actually got." },
        { id: "ja-u133l3-kanbyo", type: "vocab", front: "かんびょう", reading: "kanbyō", meaning: "nursing someone", example: { jp: "はははそぼのかんびょうでつかれていますが、なにもいいません。", en: "My mother is tired from nursing my grandmother, but she says nothing." }, drill: { jp: "かんびょうでつかれています。", en: "I am tired from nursing." }, accept: ["caring for the sick", "looking after a patient", "sickbed care"], hint: "kan-BYŌ — the ん is held and the last beat is long. かん is to watch over and びょう is illness. It is a family member's work; a nurse's profession is かんご." },
        { id: "ja-u133l3-seiketsu", type: "vocab", front: "せいけつ", reading: "seiketsu", meaning: "hygienic", example: { jp: "だいどころをせいけつにしておけば、びょうきになりにくいです。", en: "If you keep the kitchen hygienic, you're less likely to get ill." }, drill: { jp: "せいけつにしておきます。", en: "I keep it hygienic." }, accept: ["clean", "sanitary", "cleanliness"], hint: "sei-KE-tsu — three beats, sei said as written. せい is pure and けつ is clean, so nothing unwanted is left. きれい can mean merely pretty; せいけつ is only ever hygienic." },
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
        { id: "ja-u133l4-sutoresu", type: "vocab", front: "ストレス", reading: "sutoresu", meaning: "stress", example: { jp: "しごとのストレスがつよいので、よるはおんがくをききます。", en: "Work stress is heavy, so I listen to music in the evening." }, drill: { jp: "ストレスがたまっています。", en: "Stress is building up." }, accept: ["pressure", "strain", "mental pressure"], hint: "su-to-RE-su — four beats. Borrowed whole and now fully naturalised. It pairs with たまる, to accumulate, and with はっさん, to let off — 「ストレスはっさん」." },
        { id: "ja-u133l4-seishin", type: "vocab", front: "せいしん", reading: "seishin", meaning: "the mind", example: { jp: "からだのけんこうばかりきにしていて、せいしんのけんこうをわすれていました。", en: "I was minding only my physical health, and forgot about my mental health." }, drill: { jp: "せいしんのけんこうがたいせつです。", en: "Mental health matters." }, accept: ["spirit", "mental (health)", "psyche"], hint: "sei-SHIN — two beats, the ん held. せい is spirit and しん is heart. It is the mind as the counterpart of からだ, so a Japanese health leaflet names both halves." },
        { id: "ja-u133l4-rirakkusu", type: "vocab", front: "リラックス", reading: "rirakkusu", meaning: "relaxing", example: { jp: "おふろにはいるとリラックスできるので、まいばんはいります。", en: "I can relax when I get in the bath, so I get in every night." }, drill: { jp: "リラックスできました。", en: "I managed to relax." }, accept: ["relax", "unwinding", "taking it easy"], hint: "ri-RAK-ku-su — small pause after ra. Borrowed, and it takes する. おちつく is calming down from agitation; リラックス is simply letting the shoulders drop." },
        { id: "ja-u133l4-eiyo", type: "vocab", front: "えいよう", reading: "eiyō", meaning: "nutrition", example: { jp: "やさいはえいようがおおいので、まいにちたべています。", en: "Vegetables have a lot of nutrition, so I eat them every day." }, drill: { jp: "えいようがおおいです。", en: "It has a lot of nutrition." }, accept: ["nutrients", "nourishment", "food value"], hint: "ei-YŌ — two beats, the second long. えい is to nourish and よう is to feed, so it is the goodness in the food. えいようし is a dietitian, a real profession in Japanese schools." },
        { id: "ja-u133l4-taiso", type: "vocab", front: "たいそう", reading: "taisō", meaning: "exercises", example: { jp: "あさのたいそうをすると、いちにちがらくになります。", en: "If you do the morning exercises, the whole day is easier." }, drill: { jp: "たいそうをはじめました。", en: "I have started doing exercises." }, accept: ["calisthenics", "gymnastics", "a work-out"], hint: "tai-SŌ — the second beat is long. たい is the body and そう is to handle. Japan has ラジオたいそう, a radio exercise routine broadcast every morning since 1928." },
        { id: "ja-u133l4-daietto", type: "vocab", front: "ダイエット", reading: "daietto", meaning: "dieting", example: { jp: "ダイエットをはじめましたが、あまいものはやめられません。", en: "I started dieting, but I can't give up sweet things." }, drill: { jp: "ダイエットがつづきません。", en: "I cannot keep the diet up." }, accept: ["a diet", "slimming", "losing weight"], hint: "da-i-ET-to — small pause before the last to. ⚠️ Narrower than English: in Japanese ダイエット means slimming specifically, never simply what you eat." },
      ],
    },
  ],
};
