// Unit 181 — いりょう・かいご (Health systems and care) — B2 / JLPT N2
// Block-2 house rules are documented in unit174.js.
//
// B1's health unit (u133) taught the BODY — たいりょく, いたみ, すいみん. This one is
// the system around it: who provides care, how you get seen, and the words for a
// condition's shape over time. Deliberately avoids the corpus's existing
// しんさつ・しんだん・けんさ・にゅういん・たいいん・しゅじゅつ・ほけん.
export const UNIT181 = {
  id: "ja-u181",
  lang: "ja",
  title: "いりょう・かいご",
  order: 181,
  stage: "b2",
  lessons: [
    {
      id: "ja-u181l1",
      unit: 181,
      lesson: 1,
      title: "Who provides the care",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the parts of a health system and who works in them: いりょう かんご かいご きゅうきゅう びょうしつ せんもんい.",
      items: [
        { id: "ja-u181l1-iryo", type: "vocab", front: "いりょう", reading: "iryō", meaning: "medical care", example: { jp: "この 地方の いりょうは、少ない 人数で 支えられて います。", en: "Medical care in this region is held up by a small number of people." }, accept: ["healthcare", "medicine (as a field)", "treatment"] },
        { id: "ja-u181l1-kango", type: "vocab", front: "かんご", reading: "kango", meaning: "nursing", example: { jp: "かんごの 仕事は 体も 心も 使う 仕事です。", en: "Nursing is work that uses both body and mind." }, accept: ["nursing care", "looking after the sick"] },
        { id: "ja-u181l1-kaigo", type: "vocab", front: "かいご", reading: "kaigo", meaning: "long-term care", example: { jp: "母の かいごの ために、仕事の 時間を みじかく しました。", en: "For my mother's care I shortened my working hours." }, accept: ["caregiving", "elder care", "looking after someone"], hint: "かんご is medical, done by trained staff for illness; かいご is daily living support — eating, moving, washing — and is as often family as professional." },
        { id: "ja-u181l1-kyukyu", type: "vocab", front: "きゅうきゅう", reading: "kyūkyū", meaning: "emergency care", example: { jp: "きゅうきゅうの 車が 来るまで、そばに いて あげて ください。", en: "Please stay beside them until the ambulance arrives." }, accept: ["first aid", "emergency", "A&E"] },
        { id: "ja-u181l1-byoshitsu", type: "vocab", front: "びょうしつ", reading: "byōshitsu", meaning: "a hospital room", example: { jp: "びょうしつの まどから 山が 見えて、気分が 明るく なりました。", en: "The mountains were visible from the hospital room window, and it lifted my mood." }, accept: ["ward", "sickroom", "patient's room"] },
        { id: "ja-u181l1-senmoni", type: "vocab", front: "せんもんい", reading: "senmoni", meaning: "a specialist doctor", example: { jp: "せんもんいを しょうかいされるまで、三か月 かかりました。", en: "It took three months to be referred to a specialist." }, accept: ["consultant", "specialist"] },
      ],
    },
    {
      id: "ja-u181l2",
      unit: 181,
      lesson: 2,
      title: "Getting seen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the route through a health system, from check-up to treatment: けんしん じゅしん つういん しょち ないか げか.",
      items: [
        { id: "ja-u181l2-kenshin", type: "vocab", front: "けんしん", reading: "kenshin", meaning: "a health screening", example: { jp: "会社の けんしんで、はじめて けつあつの 高さを 知りました。", en: "It was at the company screening that I first learned my blood pressure was high." }, accept: ["medical check-up", "screening"] },
        { id: "ja-u181l2-jushin", type: "vocab", front: "じゅしん", reading: "jushin", meaning: "seeing a doctor", example: { jp: "早く じゅしんして いれば、ここまで 悪く なりませんでした。", en: "If I'd seen a doctor sooner, it wouldn't have got this bad." }, accept: ["consulting a physician", "attending an appointment"] },
        { id: "ja-u181l2-tsuin", type: "vocab", front: "つういん", reading: "tsūin", meaning: "attending as an outpatient", example: { jp: "月に 二回の つういんが、もう 一年 続いて います。", en: "Twice-a-month outpatient visits have gone on for a year now." }, accept: ["going in regularly", "outpatient visits"] },
        { id: "ja-u181l2-shochi", type: "vocab", front: "しょち", reading: "shochi", meaning: "a medical procedure", example: { jp: "その 場で かんたんな しょちを して もらいました。", en: "They performed a simple procedure on the spot." }, accept: ["treatment given", "dealing with it", "intervention"] },
        { id: "ja-u181l2-naika", type: "vocab", front: "ないか", reading: "naika", meaning: "internal medicine", example: { jp: "ねつが 続くので、ないかへ 行く ことに しました。", en: "The fever kept on, so I decided to go to internal medicine." }, accept: ["general medicine", "physician's department"] },
        { id: "ja-u181l2-geka", type: "vocab", front: "げか", reading: "geka", meaning: "surgery (department)", example: { jp: "げかの 先生に 見て もらってから、方しんが 決まりました。", en: "The plan was settled after a surgeon looked at it." }, accept: ["surgical department", "the surgeons"] },
      ],
    },
    {
      id: "ja-u181l3",
      unit: 181,
      lesson: 3,
      title: "How an illness behaves",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the shape of an illness over time, not just its symptoms: まんせい きゅうせい かんせん めんえき とうつう びょうれき.",
      items: [
        { id: "ja-u181l3-mansei", type: "vocab", front: "まんせい", reading: "mansei", meaning: "chronic", example: { jp: "まんせいの いたみは、なおすより うまく つきあう ものだと 言われました。", en: "I was told chronic pain is something you manage rather than cure." }, accept: ["long-standing", "persistent"] },
        { id: "ja-u181l3-kyusei", type: "vocab", front: "きゅうせい", reading: "kyūsei", meaning: "acute", example: { jp: "きゅうせいの ものなので、すぐ 手を うつ ひつようが あります。", en: "It's an acute case, so it needs to be acted on at once." }, accept: ["sudden-onset", "sharp", "rapid"], hint: "まんせい stays for months and is managed; きゅうせい arrives fast and is treated fast. The pair is how a doctor sorts a case in one word." },
        { id: "ja-u181l3-kansen", type: "vocab", front: "かんせん", reading: "kansen", meaning: "infection", example: { jp: "手を あらう ことで、かんせんは かなり ふせげます。", en: "Washing your hands prevents a good deal of infection." }, accept: ["catching something", "contagion", "being infected"] },
        { id: "ja-u181l3-meneki", type: "vocab", front: "めんえき", reading: "meneki", meaning: "immunity", example: { jp: "よく ねる ことが、めんえきを 高める いちばんの 方ほうです。", en: "Sleeping well is the best way to raise your immunity." }, accept: ["immune response", "resistance to illness"] },
        { id: "ja-u181l3-totsu", type: "vocab", front: "とうつう", reading: "tōtsū", meaning: "pain (clinical)", example: { jp: "とうつうの 強さを 十だんかいで 答えて くださいと 言われました。", en: "I was asked to rate the strength of the pain on a ten-point scale." }, accept: ["ache reported to a doctor", "the pain"], hint: "いたみ is what you say to a friend; とうつう is the word on the form. Same feeling, different register." },
        { id: "ja-u181l3-byoreki", type: "vocab", front: "びょうれき", reading: "byōreki", meaning: "medical history", example: { jp: "びょうれきを 書く 紙が 長くて、思い出すのに 時間が かかりました。", en: "The medical history form was long, and it took time to remember it all." }, accept: ["past illnesses", "case history"] },
      ],
    },
    {
      id: "ja-u181l4",
      unit: 181,
      lesson: 4,
      title: "Care and its cost",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what care costs a society and a lifetime: いりょうひ じゅみょう えいせい いやくひん てんてき りんしょう.",
      items: [
        { id: "ja-u181l4-iryohi", type: "vocab", front: "いりょうひ", reading: "iryōhi", meaning: "medical costs", example: { jp: "年を とるほど いりょうひは かかりますが、国が 半分 出します。", en: "Medical costs rise with age, but the state pays half." }, accept: ["healthcare spending", "medical bills"] },
        { id: "ja-u181l4-jumyo", type: "vocab", front: "じゅみょう", reading: "jumyō", meaning: "lifespan", example: { jp: "じゅみょうが のびた ぶん、はたらく 年も 長く なりました。", en: "As lifespans lengthened, so did working years." }, accept: ["life expectancy", "how long one lives"] },
        { id: "ja-u181l4-eisei", type: "vocab", front: "えいせい", reading: "eisei", meaning: "public hygiene", example: { jp: "水と えいせいが よく なって、子どもの 死が 大きく へりました。", en: "Water and hygiene improved, and child deaths fell sharply." }, accept: ["sanitation", "health standards"] },
        { id: "ja-u181l4-iyakuhin", type: "vocab", front: "いやくひん", reading: "iyakuhin", meaning: "pharmaceuticals", example: { jp: "その いやくひんは 高いので、安い ものと くらべて います。", en: "That drug is expensive, so we're comparing it with cheaper ones." }, accept: ["medicines", "drugs (formal)"] },
        { id: "ja-u181l4-tenteki", type: "vocab", front: "てんてき", reading: "tenteki", meaning: "an intravenous drip", example: { jp: "食べられなかったので、てんてきで 水分を 入れました。", en: "I couldn't eat, so fluids were given by drip." }, accept: ["IV", "infusion"] },
        { id: "ja-u181l4-rinsho", type: "vocab", front: "りんしょう", reading: "rinshō", meaning: "clinical practice", example: { jp: "本で 学んだ ことと、りんしょうで 見る ことは ちがいます。", en: "What you learn in books and what you see in clinical practice differ." }, accept: ["at the bedside", "clinical work"] },
      ],
    },
  ],
};
