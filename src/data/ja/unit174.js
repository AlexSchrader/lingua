// Unit 174 — きけんと ふかくじつさ — B2 / JLPT N2
// Strand B. Risk and uncertainty: saying how likely something is, weighing risk and
// caution, naming an uneasy or unclear feeling, and committing to a careful decision.
// B2 examples run to two clauses joined by the item being taught. Stance words lean on
// kana where the kanji is out of scope, as ja does throughout (おそらく, まさか).
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT174 = {
  id: "ja-u174",
  lang: "ja",
  title: "きけんと ふかくじつさ",
  order: 174,
  stage: "b2",
  lessons: [
    {
      id: "ja-u174l1",
      unit: 174,
      lesson: 1,
      title: "How likely is it?",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how likely or how certain something is: 確実 可能性 確率 予測 確信 保証.",
      items: [
        { id: "ja-u174l1-kakujitsu", type: "vocab", front: "確実", reading: "kakujitsu", meaning: "certain", example: { jp: "確実な じょうほうが ないので、いまは まだ 決められません。", en: "There's no reliable information, so I can't decide yet." }, accept: ["reliable", "sure", "definite"], hint: "確実 = solid enough to count on. たしか is 'I'm fairly sure'; 確実 is 'it is certain', with evidence behind it." },
        { id: "ja-u174l1-kanosei", type: "vocab", front: "可能性", reading: "kanōsei", meaning: "possibility", example: { jp: "この 計画が せいこうする 可能性は、かなり 高いと 思います。", en: "I think the possibility of this plan succeeding is fairly high." }, accept: ["a chance", "likelihood", "potential"], hint: "可能性 = 可能 (possible) + 性 (-ness). 可能性が高い/低い = the chances are high/low." },
        { id: "ja-u174l1-kakuritsu", type: "vocab", front: "確率", reading: "kakuritsu", meaning: "probability", example: { jp: "てんきよほうでは、あした 雨が ふる 確率は 六十パーセントです。", en: "According to the forecast, the chance of rain tomorrow is sixty percent." }, accept: ["odds", "the chance", "likelihood"], hint: "確率 = 確 (certain) + 率 (rate) — the rate of certainty, the word for a numeric probability." },
        { id: "ja-u174l1-yosoku", type: "vocab", front: "予測", reading: "yosoku", meaning: "to forecast", example: { jp: "せんもんかでも、じしんが いつ おきるか 予測する ことは できません。", en: "Even experts cannot predict when an earthquake will strike." }, accept: ["a prediction", "to predict", "a forecast"], hint: "予測 = measuring ahead (予 + 測). 予想 is a guess; 予測 leans on data and calculation." },
        { id: "ja-u174l1-kakushin", type: "vocab", front: "確信", reading: "kakushin", meaning: "conviction", example: { jp: "かれは 自分の やり方が 正しいと 確信して います。", en: "He is convinced that his own way is right." }, accept: ["to be certain", "firm belief", "confidence"], hint: "確信 = 確 (certain) + 信 (belief) — a belief you hold as certain. 確信する = to be convinced." },
        { id: "ja-u174l1-hosho", type: "vocab", front: "保証", reading: "hoshō", meaning: "a guarantee", example: { jp: "この きかいが 一年間 こわれない ことを 保証します。", en: "We guarantee that this machine will not break for one year." }, accept: ["assurance", "a warranty", "to guarantee"], hint: "保証 = 保 (keep) + 証 (proof) — a promise you'll stand behind. 保証書 = a warranty card, 保証人 = a guarantor." },
      ],
    },
    {
      id: "ja-u174l2",
      unit: 174,
      lesson: 2,
      title: "Risk and caution",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about risk and how to guard against it: リスク 用心 油断 防ぐ 確かめる 備える.",
      items: [
        { id: "ja-u174l2-risuku", type: "vocab", front: "リスク", reading: "risuku", meaning: "risk", example: { jp: "新しい ことを 始める ときは、いつも いくらかの リスクが あります。", en: "Whenever you start something new, there is always some risk." }, accept: ["a danger", "a hazard"], hint: "リスク is the everyday loanword; 危険 is the heavier native word for real danger." },
        { id: "ja-u174l2-yojin", type: "vocab", front: "用心", reading: "yōjin", meaning: "caution", example: { jp: "よるの 道は くらいので、用心して あるいて ください。", en: "The road is dark at night, so please walk carefully." }, accept: ["care", "vigilance", "being on guard"], hint: "用心する = to stay on guard against something that might happen. 火の用心 = 'beware of fire'." },
        { id: "ja-u174l2-yudan", type: "vocab", front: "油断", reading: "yudan", meaning: "carelessness", example: { jp: "もう 少しだからと 油断しないで、さいごまで 気を つけましょう。", en: "Don't get careless just because you're nearly there — stay alert to the end." }, accept: ["letting your guard down", "negligence"], hint: "油断 = the guard dropping precisely when things look safe. 油断大敵 = 'carelessness is the great enemy'." },
        { id: "ja-u174l2-fusegu", type: "vocab", front: "防ぐ", reading: "fusegu", meaning: "to prevent", example: { jp: "事故を 防ぐ ために、みんなで ルールを まもりましょう。", en: "To prevent accidents, let's all follow the rules." }, accept: ["to guard against", "to protect from", "prevent"], hint: "防ぐ (fusegu) = to keep something bad from happening. Related nouns built on 防: 予防 (prevention), 防止 (stopping something in advance)." },
        { id: "ja-u174l2-tashikameru", type: "vocab", front: "確かめる", reading: "tashikameru", meaning: "to make sure", example: { jp: "出かける 前に、まどを しめたか もう いちど 確かめます。", en: "Before going out, I check once more whether I closed the window." }, accept: ["to confirm", "to check", "make sure"], hint: "確かめる = to check so you can be 確か. The verb behind 確認 (confirmation)." },
        { id: "ja-u174l2-sonaeru", type: "vocab", front: "備える", reading: "sonaeru", meaning: "to prepare against", example: { jp: "じしんに 備えて、水と 食べものを 家に 用意して おきます。", en: "In preparation for an earthquake, I keep water and food ready at home." }, accept: ["to provide for", "to be ready for", "prepare"], hint: "備える = to make ready in advance for something that may come. ～に備えて = in preparation for." },
      ],
    },
    {
      id: "ja-u174l3",
      unit: 174,
      lesson: 3,
      title: "An uneasy feeling",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe an expectation, a risk, or an uneasy feeling: 予想 想像 不安 おそれ 心細い うたがい.",
      items: [
        { id: "ja-u174l3-yoso", type: "vocab", front: "予想", reading: "yosō", meaning: "prediction", example: { jp: "けっかは 私の 予想と 大きく ちがいました。", en: "The result was very different from my prediction." }, accept: ["expectation", "a guess", "forecast"], hint: "予想 = a guess made 予 (in advance). 予想外 = unexpected, 予想どおり = just as expected." },
        { id: "ja-u174l3-sozo", type: "vocab", front: "想像", reading: "sōzō", meaning: "to imagine", example: { jp: "そんな ことが ほんとうに おきるとは、想像も できませんでした。", en: "I couldn't even imagine that such a thing would really happen." }, accept: ["imagination", "picturing"], hint: "想像 = forming a picture in the mind. 想 (thought) + 像 (image). 想像力 = imagination." },
        { id: "ja-u174l3-fuan", type: "vocab", front: "不安", reading: "fuan", meaning: "anxiety", example: { jp: "はじめての しごとなので、少し 不安を かんじて います。", en: "It's my first time at this job, so I feel a little anxious." }, accept: ["uneasy", "worry", "insecurity"], hint: "不安 = 不 (not) + 安 (at ease) — literally not at ease. The opposite is 安心 (relief)." },
        { id: "ja-u174l3-osore", type: "vocab", front: "おそれ", reading: "osore", meaning: "the risk that", example: { jp: "大雨で 川の 水が あふれる おそれが あります。", en: "There is a risk that the river will overflow because of the heavy rain." }, accept: ["a danger", "a fear", "the possibility (of something bad)"], hint: "おそれ (恐れ) names a feared possibility: ～する おそれが ある = there's a risk that… Reserved for bad outcomes." },
        { id: "ja-u174l3-kokorobosoi", type: "vocab", front: "心細い", reading: "kokorobosoi", meaning: "uneasy", example: { jp: "はじめての 町で 一人に なって、とても 心細く なりました。", en: "Alone in an unfamiliar town, I felt very forlorn." }, accept: ["forlorn", "helpless", "lonely and anxious"], hint: "心細い = 心 (heart) + 細い (thin) — the heart worn thin when you feel alone and unsupported. The opposite is 心強い." },
        { id: "ja-u174l3-utagai", type: "vocab", front: "うたがい", reading: "utagai", meaning: "doubt", example: { jp: "その 話には、まだ 少し うたがいが のこって います。", en: "Some doubt still remains about that story." }, accept: ["suspicion", "a misgiving"], hint: "うたがい (疑い) = doubt or suspicion. 疑問 (ぎもん) is a question in your mind; うたがい leans toward suspecting something is wrong." },
      ],
    },
    {
      id: "ja-u174l4",
      unit: 174,
      lesson: 4,
      title: "A careful decision",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Weigh a difficult choice and commit to a careful decision: 判断 見直す 決断 迷い しんちょう かくご.",
      items: [
        { id: "ja-u174l4-handan", type: "vocab", front: "判断", reading: "handan", meaning: "judgement", example: { jp: "その ばで 正しく 判断する ことは、思ったより むずかしいです。", en: "Judging correctly on the spot is harder than you'd think." }, accept: ["to judge", "a decision", "assessment"], hint: "判断 = weighing a situation and deciding. 判断力 = the power of judgement, 自分で判断する = to decide for yourself." },
        { id: "ja-u174l4-minaosu", type: "vocab", front: "見直す", reading: "minaosu", meaning: "to reconsider", example: { jp: "もう いちど 計画を ぜんぶ 見直して から、さいごに 決めましょう。", en: "Let's review the whole plan once more, then decide at the end." }, accept: ["to review", "to look at again", "to reassess"], hint: "見直す = 見る (look) + 直す (redo) — to take another, more careful look. It also means to think better of someone." },
        { id: "ja-u174l4-ketsudan", type: "vocab", front: "決断", reading: "ketsudan", meaning: "a decision", example: { jp: "かれは まよった すえに、さいごに 大きな 決断を しました。", en: "After much hesitation, he finally made a big decision." }, accept: ["resolve", "determination", "a firm decision"], hint: "決断 = a hard decision made firmly. 決める is everyday; 決断 is the weighty, hard-to-take kind." },
        { id: "ja-u174l4-mayoi", type: "vocab", front: "迷い", reading: "mayoi", meaning: "hesitation", example: { jp: "どちらを えらぶべきか、いまも 心の 中に 迷いが あります。", en: "I still have hesitation in my heart about which to choose." }, accept: ["being unsure", "wavering", "doubt"], hint: "迷い (mayoi) = the state of not being able to decide. From 迷う (to be lost / to waver)." },
        { id: "ja-u174l4-shincho", type: "vocab", front: "しんちょう", reading: "shinchō", meaning: "careful", example: { jp: "大きな 買いものは、しんちょうに 決めた ほうが いいです。", en: "Big purchases are better decided carefully." }, accept: ["cautious", "prudent", "deliberate"], hint: "しんちょう (慎重) = careful and unhurried before acting. The opposite stance to 油断." },
        { id: "ja-u174l4-kakugo", type: "vocab", front: "かくご", reading: "kakugo", meaning: "resolve", example: { jp: "しっぱいする かくごで、おもいきって やって みます。", en: "Prepared to fail, I'll take the plunge and give it a try." }, accept: ["preparedness", "readiness", "being ready for the worst"], hint: "かくご (覚悟) = bracing yourself to accept a hard outcome before you act. かくごを決める = to steel yourself." },
      ],
    },
  ],
};
