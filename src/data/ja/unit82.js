// Unit 82 — ぶんぽう③ 受身・使役 ("Grammar III — passive, causative, giving/receiving") — B1 / N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The core N3 grammar the earlier B1 pass was missing — taught as function-word/pattern vocab
// (recognition). ⚠️ Passive/causative RECOGNITION here; the interactive transformation DRILL
// still waits on the conjugation-engine extension. HIGHEST naturalness/register risk → native review.
export const UNIT82 = {
  id: "ja-u82", lang: "ja", title: "ぶんぽう③", order: 82, stage: "b1",
  lessons: [
    {
      id: "ja-u82l1", unit: 82, lesson: 1, title: "Passive, causative & aspect", cefr: "B1", dominantMode: "recall",
      canDo: "Recognize core verb grammar: ～られる ～させる ～させられる ～てある ～ておく ～てしまう.",
      items: [
        { id: "ja-u82l1-rareru", type: "vocab", front: "られる", reading: "rareru", meaning: "passive: be ~ed", example: { jp: "先生にほめられます。", en: "I get praised by the teacher." }, accept: ["is done to", "(passive)"], hint: "受身 (passive): Verb + (ら)れる = 'be ~ed'. しかられる = get scolded; 見られる = be seen." },
        { id: "ja-u82l1-saseru", type: "vocab", front: "させる", reading: "saseru", meaning: "causative: make/let ~", example: { jp: "こどもに野菜を食べさせます。", en: "I make the child eat vegetables." }, accept: ["cause to", "(causative)"], hint: "使役 (causative): Verb + (さ)せる = 'make / let someone do'." },
        { id: "ja-u82l1-saserareru", type: "vocab", front: "させられる", reading: "saserareru", meaning: "be made to ~", example: { jp: "野菜を食べさせられます。", en: "I'm made to eat vegetables." }, accept: ["forced to", "(causative-passive)"], hint: "使役受身 (causative-passive): 'be made to ~' — させる + られる combined." },
        { id: "ja-u82l1-tearu", type: "vocab", front: "てある", reading: "tearu", meaning: "has been done (state)", example: { jp: "まどが開けてあります。", en: "The window has been opened (and left open)." }, accept: ["is left done"], hint: "～てある = something was done on purpose and stays in that state. まどが開けてある." },
        { id: "ja-u82l1-teoku", type: "vocab", front: "ておく", reading: "teoku", meaning: "do in advance", example: { jp: "りょこうのよやくをしておきます。", en: "I make the trip reservation in advance." }, accept: ["do beforehand", "leave prepared"], hint: "～ておく = do in advance / leave prepared. Casual: ～とく." },
        { id: "ja-u82l1-teshimau", type: "vocab", front: "てしまう", reading: "teshimau", meaning: "end up / do completely", example: { jp: "宿題を忘れてしまいました。", en: "I ended up forgetting my homework." }, accept: ["finish doing", "unfortunately did"], hint: "～てしまう = do completely, or end up doing (often regret). Casual: ～ちゃう." },
      ],
    },
    {
      id: "ja-u82l2", unit: 82, lesson: 2, title: "Giving & receiving actions", cefr: "B1", dominantMode: "recall",
      canDo: "Recognize favor grammar: ～てあげる ～てくれる ～てもらう ～ていただく ～てくださる さしあげる.",
      items: [
        { id: "ja-u82l2-teageru", type: "vocab", front: "てあげる", reading: "teageru", meaning: "do (for someone)", example: { jp: "友だちに本をかしてあげます。", en: "I lend a book to my friend (for them)." }, accept: ["do a favor for"], hint: "～てあげる = do something for someone (you → them)." },
        { id: "ja-u82l2-tekureru", type: "vocab", front: "てくれる", reading: "tekureru", meaning: "someone does (for me)", example: { jp: "友だちが本をかしてくれます。", en: "My friend lends me a book." }, accept: ["does a favor for me"], hint: "～てくれる = someone does something for me (them → me)." },
        { id: "ja-u82l2-temorau", type: "vocab", front: "てもらう", reading: "temorau", meaning: "have someone do", example: { jp: "友だちに本をかしてもらいます。", en: "I have my friend lend me a book." }, accept: ["get someone to do"], hint: "～てもらう = have / get someone to do something for you." },
        { id: "ja-u82l2-teitadaku", type: "vocab", front: "ていただく", reading: "teitadaku", meaning: "humbly have someone do", example: { jp: "先生におしえていただきます。", en: "I humbly have the teacher teach me." }, accept: ["humbly receive a favor"], hint: "～ていただく = humble form of ～てもらう (for someone above you)." },
        { id: "ja-u82l2-tekudasaru", type: "vocab", front: "てくださる", reading: "tekudasaru", meaning: "honorific: does for me", example: { jp: "先生がおしえてくださいます。", en: "The teacher kindly teaches me." }, accept: ["kindly does for me"], hint: "～てくださる = honorific form of ～てくれる." },
        { id: "ja-u82l2-sashiageru", type: "vocab", front: "さしあげる", reading: "sashiageru", meaning: "humbly give", example: { jp: "先生におみやげをさしあげます。", en: "I humbly give the teacher a souvenir." }, accept: ["give (humble)"], hint: "さしあげる = humble form of あげる (give to someone above you)." },
      ],
    },
    {
      id: "ja-u82l3", unit: 82, lesson: 3, title: "Conditionals", cefr: "B1", dominantMode: "recall",
      canDo: "Recognize conditionals: ～たら ～なら ～たとたん ～ても ～たって ～さえ.",
      items: [
        { id: "ja-u82l3-tara", type: "vocab", front: "たら", reading: "tara", meaning: "if / when (once)", example: { jp: "あめが降ったら、いきません。", en: "If it rains, I won't go." }, accept: ["once ~ then"], hint: "～たら = if / when (once something happens). The most flexible conditional." },
        { id: "ja-u82l3-nara", type: "vocab", front: "なら", reading: "nara", meaning: "if it's the case that", example: { jp: "日本にいくなら、京都がいいです。", en: "If you're going to Japan, Kyoto is good." }, accept: ["given that", "as for"], hint: "～なら = if it's the case that ~ (picks up the topic just raised)." },
        { id: "ja-u82l3-tatotan", type: "vocab", front: "たとたん", reading: "tatotan", meaning: "the moment that ~", example: { jp: "いえを出たとたん、あめが降りました。", en: "The moment I left home, it rained." }, accept: ["just as", "as soon as"], hint: "～たとたん = the moment that ~ (something sudden happens right after)." },
        { id: "ja-u82l3-temo", type: "vocab", front: "ても", reading: "temo", meaning: "even if / even though", example: { jp: "たかくても、かいます。", en: "Even if it's expensive, I'll buy it." }, accept: ["no matter"], hint: "～ても = even if / even though. い-adj: 高くても; verb: 行っても." },
        { id: "ja-u82l3-tatte", type: "vocab", front: "たって", reading: "tatte", meaning: "even if (casual)", example: { jp: "あめが降ったって、いきます。", en: "Even if it rains, I'll go." }, accept: ["even though (casual)"], hint: "～たって = casual version of ～ても ('even if')." },
        { id: "ja-u82l3-sae", type: "vocab", front: "さえ", reading: "sae", meaning: "even / if only", example: { jp: "おかねさえあれば、かえます。", en: "If only I had money, I could buy it." }, accept: ["so much as"], hint: "～さえ = even; with ～ば = 'if only'. お金さえあれば = if only I had money." },
      ],
    },
    {
      id: "ja-u82l4", unit: 82, lesson: 4, title: "Inference & intention", cefr: "B1", dominantMode: "recall",
      canDo: "Recognize modality: ～そうだ ～ようだ ～にちがいない ～べき ～つもり ～まい.",
      items: [
        { id: "ja-u82l4-souda", type: "vocab", front: "そうだ", reading: "sōda", meaning: "I hear that ~ (hearsay)", example: { jp: "よほうでは、あした雨だそうです。", en: "According to the forecast, it'll rain tomorrow." }, accept: ["they say that"], hint: "～そうだ (hearsay) = 'I hear that ~'. Attaches to the plain form: 雨だそうだ, 行くそうだ." },
        { id: "ja-u82l4-youda", type: "vocab", front: "ようだ", reading: "yōda", meaning: "it seems / appears", example: { jp: "かぜをひいたようです。", en: "It seems I've caught a cold." }, accept: ["looks like", "as if"], hint: "～ようだ = it seems / appears (from evidence). Formal cousin of みたい." },
        { id: "ja-u82l4-nichigainai", type: "vocab", front: "にちがいない", reading: "nichigainai", meaning: "must be / no doubt", example: { jp: "かれはつかれているにちがいない。", en: "He must be tired." }, accept: ["surely", "definitely"], hint: "～にちがいない = must be / no doubt (a strong, confident inference)." },
        { id: "ja-u82l4-beki", type: "vocab", front: "べき", reading: "beki", meaning: "should / ought to", example: { jp: "やくそくはまもるべきです。", en: "You should keep your promises." }, accept: ["must", "ought"], hint: "～べき = should / ought to (strong advice or duty). する → すべき / するべき." },
        { id: "ja-u82l4-tsumori", type: "vocab", front: "つもり", reading: "tsumori", meaning: "intend to / plan to", example: { jp: "らいねん日本にいくつもりです。", en: "I intend to go to Japan next year." }, accept: ["intention"], hint: "～つもり = intend to / plan to. Verb-dictionary + つもり." },
        { id: "ja-u82l4-mai", type: "vocab", front: "まい", reading: "mai", meaning: "won't / surely not", example: { jp: "もう二どとおくれまい。", en: "I'll never be late again." }, accept: ["will not", "probably not"], hint: "～まい = won't (negative resolve) / surely not (negative guess). Formal/written." },
      ],
    },
  ],
};
