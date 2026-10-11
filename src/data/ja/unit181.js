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
        { id: "ja-u181l1-iryo", type: "vocab", front: "いりょう", reading: "iryō", meaning: "medical care", example: { jp: "この 地方の いりょうは、少ない 人数で 支えられて います。", en: "Medical care in this region is held up by a small number of people." }, drill: { jp: "いりょうが たいせつです。", en: "Medical care is important." }, accept: ["healthcare", "medicine (as a field)", "treatment"], hint: "iryō — 医 (medicine) + 療 (to treat): medical care as a SYSTEM, with its hospitals, staff and funding. びょうき is the illness; いりょう is the apparatus that deals with it." },
        { id: "ja-u181l1-kango", type: "vocab", front: "かんご", reading: "kango", meaning: "nursing", example: { jp: "かんごの 仕事は 体も 心も 使う 仕事です。", en: "Nursing is work that uses both body and mind." }, drill: { jp: "かんごの 仕事です。", en: "It is nursing work." }, accept: ["nursing care", "looking after the sick", "care of the sick"], hint: "kango — 看 (watch over) + 護 (protect): watching and protecting, and かんごし is the nurse. かいご with 介 instead is care for the elderly or disabled — a separate profession in Japan." },
        { id: "ja-u181l1-kaigo", type: "vocab", front: "かいご", reading: "kaigo", meaning: "long-term care", example: { jp: "母の かいごの ために、仕事の 時間を みじかく しました。", en: "For my mother's care I shortened my working hours." }, drill: { jp: "かいごを して います。", en: "I am giving long-term care." }, accept: ["caregiving", "elder care", "looking after someone"], hint: "かんご is medical, done by trained staff for illness; かいご is daily living support — eating, moving, washing — and is as often family as professional." },
        { id: "ja-u181l1-kyukyu", type: "vocab", front: "きゅうきゅう", reading: "kyūkyū", meaning: "emergency care", example: { jp: "きゅうきゅうの 車が 来るまで、そばに いて あげて ください。", en: "Please stay beside them until the ambulance arrives." }, drill: { jp: "きゅうきゅうの 車を よびました。", en: "We called an ambulance." }, accept: ["first aid", "emergency", "A&E"], hint: "kyūkyū — 救 (rescue) + 急 (urgent): rescue in a hurry. きゅうきゅうしゃ is the ambulance and きゅうきゅうきゅうめいし the paramedic. In Japan you dial 119, not 911." },
        { id: "ja-u181l1-byoshitsu", type: "vocab", front: "びょうしつ", reading: "byōshitsu", meaning: "a hospital room", example: { jp: "びょうしつの まどから 山が 見えて、気分が 明るく なりました。", en: "The mountains were visible from the hospital room window, and it lifted my mood." }, drill: { jp: "びょうしつに 入りました。", en: "I went into the hospital room." }, accept: ["ward", "sickroom", "patient's room"], hint: "byōshitsu — 病 (illness) + 室 (room): the room a patient is in, with the same 室 ending as じっけんしつ. びょういん is the whole hospital." },
        { id: "ja-u181l1-senmoni", type: "vocab", front: "せんもんい", reading: "senmoni", meaning: "a specialist doctor", example: { jp: "せんもんいを しょうかいされるまで、三か月 かかりました。", en: "It took three months to be referred to a specialist." }, drill: { jp: "せんもんいを しょうかいされました。", en: "I was referred to a specialist." }, accept: ["consultant", "specialist", "a specialist doctor"], hint: "senmon-i — 専門 (speciality) + 医 (doctor). That 医 ending names doctors — ないか医, しか医. In Japan you often need a referral letter, しょうかいじょう, to reach one." },
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
        { id: "ja-u181l2-kenshin", type: "vocab", front: "けんしん", reading: "kenshin", meaning: "a health screening", example: { jp: "会社の けんしんで、はじめて けつあつの 高さを 知りました。", en: "It was at the company screening that I first learned my blood pressure was high." }, drill: { jp: "けんしんを 受けました。", en: "I had a health screening." }, accept: ["medical check-up", "screening", "a health check"], hint: "kenshin — 検 (examine) + 診 (diagnose): a routine check on a HEALTHY person, which Japanese employers must offer yearly. じゅしん is going because something is already wrong." },
        { id: "ja-u181l2-jushin", type: "vocab", front: "じゅしん", reading: "jushin", meaning: "seeing a doctor", example: { jp: "早く じゅしんして いれば、ここまで 悪く なりませんでした。", en: "If I'd seen a doctor sooner, it wouldn't have got this bad." }, drill: { jp: "じゅしんを すすめられました。", en: "I was advised to see a doctor." }, accept: ["consulting a physician", "attending an appointment", "seeing a doctor"], hint: "jushin — 受 (receive) + 診 (diagnosis): receiving an examination. It is the patient's side of the appointment, so じゅしんする is what YOU do and しんさつする is what the doctor does." },
        { id: "ja-u181l2-tsuin", type: "vocab", front: "つういん", reading: "tsūin", meaning: "attending as an outpatient", example: { jp: "月に 二回の つういんが、もう 一年 続いて います。", en: "Twice-a-month outpatient visits have gone on for a year now." }, drill: { jp: "つういんが 続いて います。", en: "The outpatient visits are continuing." }, accept: ["going in regularly", "outpatient visits", "regular hospital visits"], hint: "tsūin — 通 (commute) + 院 (an institution): commuting to the hospital. にゅういん with 入 is being admitted and たいいん with 退 is discharge — all three share that 院." },
        { id: "ja-u181l2-shochi", type: "vocab", front: "しょち", reading: "shochi", meaning: "a medical procedure", example: { jp: "その 場で かんたんな しょちを して もらいました。", en: "They performed a simple procedure on the spot." }, drill: { jp: "しょちを して もらいました。", en: "I had a procedure done." }, accept: ["treatment given", "dealing with it", "intervention"], hint: "shochi — 処 (deal with) + 置 (place): dealing with something on the spot. Smaller than しゅじゅつ, surgery — stitches, a dressing, setting a bone. The same 処 as in しょぶん." },
        { id: "ja-u181l2-naika", type: "vocab", front: "ないか", reading: "naika", meaning: "internal medicine", example: { jp: "ねつが 続くので、ないかへ 行く ことに しました。", en: "The fever kept on, so I decided to go to internal medicine." }, drill: { jp: "ないかへ いきます。", en: "I go to internal medicine." }, accept: ["general medicine", "physician's department", "the internal medicine department"], hint: "naika — 内 (inside) + 科 (a branch of study): the department for what is inside, treated without a knife. げか with 外 is the branch that cuts, and those two words divide Japanese medicine in half." },
        { id: "ja-u181l2-geka", type: "vocab", front: "げか", reading: "geka", meaning: "surgery (department)", example: { jp: "げかの 先生に 見て もらってから、方しんが 決まりました。", en: "The plan was settled after a surgeon looked at it." }, drill: { jp: "げかに 行きました。", en: "I went to surgery." }, accept: ["surgical department", "the surgeons", "the surgery department"], hint: "geka — 外 (outside) + 科 (a branch): historically the branch working from outside the body, hence surgery. ないか is its pair, and neither name makes sense without the other." },
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
        { id: "ja-u181l3-mansei", type: "vocab", front: "まんせい", reading: "mansei", meaning: "chronic", example: { jp: "まんせいの いたみは、なおすより うまく つきあう ものだと 言われました。", en: "I was told chronic pain is something you manage rather than cure." }, drill: { jp: "まんせいに なりました。", en: "It has become chronic." }, accept: ["long-standing", "persistent", "chronic in nature"], hint: "mansei — 慢 (slow, lax) + 性 (nature): slow in nature, hence long-running. きゅうせい is its pair. Both take の before a noun — まんせいの いたみ." },
        { id: "ja-u181l3-kyusei", type: "vocab", front: "きゅうせい", reading: "kyūsei", meaning: "acute", example: { jp: "きゅうせいの ものなので、すぐ 手を うつ ひつようが あります。", en: "It's an acute case, so it needs to be acted on at once." }, drill: { jp: "きゅうせいの ものです。", en: "It is an acute case." }, accept: ["sudden-onset", "sharp", "rapid"], hint: "まんせい stays for months and is managed; きゅうせい arrives fast and is treated fast. The pair is how a doctor sorts a case in one word." },
        { id: "ja-u181l3-kansen", type: "vocab", front: "かんせん", reading: "kansen", meaning: "infection", example: { jp: "手を あらう ことで、かんせんは かなり ふせげます。", en: "Washing your hands prevents a good deal of infection." }, drill: { jp: "かんせんを ふせぎます。", en: "We prevent infection." }, accept: ["catching something", "contagion", "being infected"], hint: "kansen — 感 (to be affected) + 染 (to be dyed): being dyed by something. かんせんしょう is an infectious disease. The 感 here is not emotion but being acted upon." },
        { id: "ja-u181l3-meneki", type: "vocab", front: "めんえき", reading: "meneki", meaning: "immunity", example: { jp: "よく ねる ことが、めんえきを 高める いちばんの 方ほうです。", en: "Sleeping well is the best way to raise your immunity." }, drill: { jp: "めんえきを 高めます。", en: "We raise immunity." }, accept: ["immune response", "resistance to illness", "the immune system"], hint: "men-eki — 免 (exempt) + 疫 (an epidemic): exempted from the plague, the image being a pass that excuses you. めんえきりょく is the everyday form, with that りょく ending again." },
        { id: "ja-u181l3-totsu", type: "vocab", front: "とうつう", reading: "tōtsū", meaning: "pain (clinical)", example: { jp: "とうつうの 強さを 十だんかいで 答えて くださいと 言われました。", en: "I was asked to rate the strength of the pain on a ten-point scale." }, drill: { jp: "とうつうが 強いです。", en: "The pain is strong." }, accept: ["ache reported to a doctor", "the pain", "clinical pain"], hint: "いたみ is what you say to a friend; とうつう is the word on the form. Same feeling, different register." },
        { id: "ja-u181l3-byoreki", type: "vocab", front: "びょうれき", reading: "byōreki", meaning: "medical history", example: { jp: "びょうれきを 書く 紙が 長くて、思い出すのに 時間が かかりました。", en: "The medical history form was long, and it took time to remember it all." }, drill: { jp: "びょうれきを 書きます。", en: "I write out my medical history." }, accept: ["past illnesses", "case history", "your illness record"], hint: "byōreki — 病 (illness) + 歴 (a course of events): the list of illnesses you have had. That 歴 ending once more, as in しょくれき and がくれき." },
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
        { id: "ja-u181l4-iryohi", type: "vocab", front: "いりょうひ", reading: "iryōhi", meaning: "medical costs", example: { jp: "年を とるほど いりょうひは かかりますが、国が 半分 出します。", en: "Medical costs rise with age, but the state pays half." }, drill: { jp: "いりょうひが かかります。", en: "Medical costs are incurred." }, accept: ["healthcare spending", "medical bills", "the cost of care"], hint: "iryōhi — いりょう (medical care) + 費 (expense). The 費 ending names costs throughout — こうつうひ fares, せいかつひ living costs, がくひ tuition." },
        { id: "ja-u181l4-jumyo", type: "vocab", front: "じゅみょう", reading: "jumyō", meaning: "lifespan", example: { jp: "じゅみょうが のびた ぶん、はたらく 年も 長く なりました。", en: "As lifespans lengthened, so did working years." }, drill: { jp: "じゅみょうが のびました。", en: "Lifespans have lengthened." }, accept: ["life expectancy", "how long one lives", "how long it lasts"], hint: "jumyō — 寿 (long life) + 命 (life): the length of a life, and it works on machines too — でんちの じゅみょう. へいきんじゅみょう is average life expectancy." },
        { id: "ja-u181l4-eisei", type: "vocab", front: "えいせい", reading: "eisei", meaning: "public hygiene", example: { jp: "水と えいせいが よく なって、子どもの 死が 大きく へりました。", en: "Water and hygiene improved, and child deaths fell sharply." }, drill: { jp: "えいせいが よく なりました。", en: "Hygiene has improved." }, accept: ["sanitation", "health standards", "hygiene"], hint: "eisei — 衛 (guard) + 生 (life): guarding life. It means public hygiene rather than personal cleanliness, which is せいけつ. Careful — えいせい also spells 衛星, a satellite." },
        { id: "ja-u181l4-iyakuhin", type: "vocab", front: "いやくひん", reading: "iyakuhin", meaning: "pharmaceuticals", example: { jp: "その いやくひんは 高いので、安い ものと くらべて います。", en: "That drug is expensive, so we're comparing it with cheaper ones." }, drill: { jp: "いやくひんが 高いです。", en: "Pharmaceuticals are expensive." }, accept: ["medicines", "drugs (formal)", "medicinal products"], hint: "iyakuhin — 医薬 (medicine) + 品 (goods): medicines as regulated products. くすり is what you take; いやくひん is what is approved and priced. That 品 ending names goods — しょくひん, せいひん." },
        { id: "ja-u181l4-tenteki", type: "vocab", front: "てんてき", reading: "tenteki", meaning: "an intravenous drip", example: { jp: "食べられなかったので、てんてきで 水分を 入れました。", en: "I couldn't eat, so fluids were given by drip." }, drill: { jp: "てんてきを 受けました。", en: "I was put on a drip." }, accept: ["IV", "infusion", "a drip"], hint: "tenteki — 点 (a drop) + 滴 (a droplet): drop by drop, which is literally what you lie there watching. In Japan a てんてき is offered far more readily than in many countries." },
        { id: "ja-u181l4-rinsho", type: "vocab", front: "りんしょう", reading: "rinshō", meaning: "clinical practice", example: { jp: "本で 学んだ ことと、りんしょうで 見る ことは ちがいます。", en: "What you learn in books and what you see in clinical practice differ." }, drill: { jp: "りんしょうで 見ます。", en: "We see it in clinical practice." }, accept: ["at the bedside", "clinical work", "practice with patients"], hint: "rinshō — 臨 (to attend, to face) + 床 (a bed): standing at the bedside. The practice side as against けんきゅう, research. りんしょうしけん is a clinical trial." },
      ],
    },
  ],
};
