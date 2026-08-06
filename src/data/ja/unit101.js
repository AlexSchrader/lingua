// Unit 101 — げんいん・けっか (Cause and consequence) — B1 / JLPT N3
// Strand B. The connectives that tie two events together: blame and credit
// (せいで／おかげで), consequence (したがって／そこで), condition (かぎり／たとえ／さえ),
// and the verbs of influence (あたえる／まねく／いたる).
// げんいん, けっか, りゆう and から／ので are already taught below A2 — this unit adds the
// B1 layer on top of them, so they appear in examples but are not re-taught.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT101 = {
  id: "ja-u101",
  lang: "ja",
  title: "げんいん・けっか",
  order: 101,
  stage: "b1",
  lessons: [
    {
      id: "ja-u101l1",
      unit: 101,
      lesson: 1,
      title: "Naming the cause",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what caused something, and whether you blame it or thank it: せいで おかげで きっかけ はいけい ひきおこす つながる.",
      items: [
        { id: "ja-u101l1-seide", type: "vocab", front: "せいで", reading: "seide", meaning: "because of (blame)", example: { jp: "あめの せいで でんしゃが とまりましたから、やくそくの じかんに おくれました。", en: "Because of the rain the trains stopped, so I was late for my appointment." }, accept: ["due to", "thanks to (negative)", "on account of"], hint: "せいで and おかげで are the same grammar with opposite feeling: せいで blames, おかげで thanks. Choosing the wrong one is heard as sarcasm." },
        { id: "ja-u101l1-okagede", type: "vocab", front: "おかげで", reading: "okagede", meaning: "thanks to", example: { jp: "ともだちが てつだって くれた おかげで、しごとが はやく おわりました。", en: "Thanks to my friend helping, the work finished early." }, accept: ["because of (positive)", "owing to"] },
        { id: "ja-u101l1-kikkake", type: "vocab", front: "きっかけ", reading: "kikkake", meaning: "the thing that started it", example: { jp: "この ほんを よんだ ことが きっかけで、にほんごの べんきょうを はじめました。", en: "Reading this book is what got me started studying Japanese." }, accept: ["trigger", "opportunity", "what started it"] },
        { id: "ja-u101l1-haikei", type: "vocab", front: "はいけい", reading: "haikei", meaning: "background", example: { jp: "その もんだいの はいけいを しらべてから、みんなで はなしました。", en: "We looked into the background of that problem, then discussed it together." }, accept: ["context", "circumstances", "backdrop"] },
        { id: "ja-u101l1-hikiokosu", type: "vocab", front: "ひきおこす", reading: "hikiokosu", meaning: "to bring about", example: { jp: "つよい かぜが おおきな じこを ひきおこしました。", en: "The strong wind brought about a serious accident." }, accept: ["to cause", "to give rise to", "to trigger"], hint: "ひきおこす takes a bad outcome as its object — じこ, もんだい, びょうき. You never ひきおこす good news." },
        { id: "ja-u101l1-tsunagaru", type: "vocab", front: "つながる", reading: "tsunagaru", meaning: "to lead to", example: { jp: "まいにちの れんしゅうが しあいの けっかに つながります。", en: "Daily practice leads to the result in the match." }, accept: ["to connect", "to result in", "to be linked"] },
      ],
    },
    {
      id: "ja-u101l2",
      unit: 101,
      lesson: 2,
      title: "Stating the consequence",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Carry a first sentence through to its result: えいきょう けっきょく ついに したがって そこで そのために.",
      items: [
        { id: "ja-u101l2-eikyo", type: "vocab", front: "えいきょう", reading: "eikyō", meaning: "influence", example: { jp: "てんきの えいきょうで、やさいの ねだんが たかく なりました。", en: "Under the influence of the weather, vegetable prices have gone up." }, accept: ["effect", "impact"] },
        { id: "ja-u101l2-kekkyoku", type: "vocab", front: "けっきょく", reading: "kekkyoku", meaning: "in the end", example: { jp: "いろいろ かんがえましたが、けっきょく いきませんでした。", en: "I thought about it a lot, but in the end I didn't go." }, accept: ["after all", "ultimately", "eventually"], hint: "けっきょく reports how a long back-and-forth actually finished — often against what you first intended." },
        { id: "ja-u101l2-tsuini", type: "vocab", front: "ついに", reading: "tsuini", meaning: "finally", example: { jp: "ながい あいだ まちましたが、ついに でんしゃが きました。", en: "We waited a long time, and the train finally came." }, accept: ["at last", "in the end"] },
        { id: "ja-u101l2-shitagatte", type: "vocab", front: "したがって", reading: "shitagatte", meaning: "therefore", example: { jp: "きょうは やすみです。したがって、みせは あいて いません。", en: "Today is a holiday. Therefore the shop is not open." }, accept: ["consequently", "accordingly", "thus"], hint: "したがって is written/formal — notices, reports, and news. In conversation people say だから." },
        { id: "ja-u101l2-sokode", type: "vocab", front: "そこで", reading: "sokode", meaning: "and so", example: { jp: "あめが ふって きました。そこで、タクシーで かえる ことに しました。", en: "It started raining. And so I decided to go home by taxi." }, accept: ["so", "at that point", "thereupon"] },
        { id: "ja-u101l2-sonotameni", type: "vocab", front: "そのために", reading: "sonotameni", meaning: "for that reason", example: { jp: "らいしゅう しけんが あります。そのために、まいにち べんきょうして います。", en: "There's an exam next week. For that reason I'm studying every day." }, accept: ["because of that", "to that end", "so"] },
      ],
    },
    {
      id: "ja-u101l3",
      unit: 101,
      lesson: 3,
      title: "Conditions",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Put a condition on what you say: かぎり それなら たとえ かりに さえ かわりに.",
      items: [
        { id: "ja-u101l3-kagiri", type: "vocab", front: "かぎり", reading: "kagiri", meaning: "as far as", example: { jp: "わたしが しって いる かぎり、あの みせは にちようびも あいて います。", en: "As far as I know, that shop is open on Sundays too." }, accept: ["as long as", "to the extent that", "limit"], hint: "しって いる かぎり = as far as I know — it fences your claim to what you can actually vouch for." },
        { id: "ja-u101l3-sorenara", type: "vocab", front: "それなら", reading: "sorenara", meaning: "in that case", example: { jp: "あしたは いそがしいですか。それなら、あさっての ほうが いいですね。", en: "Are you busy tomorrow? In that case the day after would be better." }, accept: ["then", "if so", "if that's true"] },
        { id: "ja-u101l3-tatoe", type: "vocab", front: "たとえ", reading: "tatoe", meaning: "even if", example: { jp: "たとえ あめが ふっても、しあいは やります。", en: "Even if it rains, the match goes ahead." }, accept: ["even though", "supposing"], hint: "たとえ always pairs with ～ても later in the sentence. Hearing たとえ, wait for the ても." },
        { id: "ja-u101l3-karini", type: "vocab", front: "かりに", reading: "karini", meaning: "supposing", example: { jp: "かりに この けいかくが だめでも、ほかの ほうほうが あります。", en: "Supposing this plan fails, there are other methods." }, accept: ["hypothetically", "for the sake of argument", "if"] },
        { id: "ja-u101l3-sae", type: "vocab", front: "さえ", reading: "sae", meaning: "if only", example: { jp: "じかんさえ あれば、わたしも てつだいます。", en: "If only there's time, I'll help too." }, accept: ["even", "just", "as long as"], hint: "さえ attaches straight to the noun — じかんさえ, これさえ. With ～ば it means \"that alone is enough\"." },
        { id: "ja-u101l3-kawarini", type: "vocab", front: "かわりに", reading: "kawarini", meaning: "instead", example: { jp: "きょうは あにが いないので、わたしが かわりに いきます。", en: "My older brother isn't here today, so I'll go instead." }, accept: ["in place of", "in return", "on behalf of"] },
      ],
    },
    {
      id: "ja-u101l4",
      unit: 101,
      lesson: 4,
      title: "Effects and reactions",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how one thing acts on another: あたえる まねく しめす いたる はんのう によって.",
      items: [
        { id: "ja-u101l4-ataeru", type: "vocab", front: "あたえる", reading: "ataeru", meaning: "to give", example: { jp: "その ニュースは まちの ひとに おおきな えいきょうを あたえました。", en: "That news had a big effect on the people of the town." }, accept: ["to grant", "to have (an effect)", "to provide"], hint: "えいきょうを あたえる is the set phrase for \"to affect\" — あげます is for handing someone a present, あたえる for abstract things." },
        { id: "ja-u101l4-maneku", type: "vocab", front: "まねく", reading: "maneku", meaning: "to invite (a result)", example: { jp: "じゅんびが たりないと、しっぱいを まねきます。", en: "If preparation is lacking, it invites failure." }, accept: ["to bring on", "to cause", "to invite"] },
        { id: "ja-u101l4-shimesu", type: "vocab", front: "しめす", reading: "shimesu", meaning: "to indicate", example: { jp: "この ちずは えきまでの みちを しめして います。", en: "This map indicates the route to the station." }, accept: ["to show", "to point out", "to demonstrate"] },
        { id: "ja-u101l4-itaru", type: "vocab", front: "いたる", reading: "itaru", meaning: "to reach", example: { jp: "ながい かいぎの あと、みんなが なっとくする けっかに いたりました。", en: "After a long meeting, we reached a result everyone accepted." }, accept: ["to arrive at", "to lead to", "to culminate in"] },
        { id: "ja-u101l4-hanno", type: "vocab", front: "はんのう", reading: "hannō", meaning: "reaction", example: { jp: "その ニュースを きいた ひとたちの はんのうは とても つよかったです。", en: "The reaction of the people who heard that news was very strong." }, accept: ["response", "reception"] },
        { id: "ja-u101l4-niyotte", type: "vocab", front: "によって", reading: "niyotte", meaning: "depending on", example: { jp: "ひとによって かんがえかたが ちがいますから、よく はなす ことが たいせつです。", en: "Ways of thinking differ depending on the person, so talking it through matters." }, accept: ["by", "according to", "through"], hint: "Two jobs: ひとによって = varies by person; かぜによって = caused by. The noun in front tells you which." },
      ],
    },
  ],
};
