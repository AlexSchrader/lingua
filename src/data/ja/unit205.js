// Unit 205 — すうりょうひょうげん (quantity, proportion and extent) — B2 / JLPT N2
// Strand D, coverage 13 of 16. B1's u150 taught the measurement nouns; this unit teaches
// the words for talking about HOW MUCH of something there is when you are not measuring —
// a majority, a fraction, most of it, none of it at all. Reports and conversation both run
// on these, and none of them belongs to a topic.
export const UNIT205 = {
  id: "ja-u205",
  lang: "ja",
  title: "すうりょうひょうげん",
  order: 205,
  stage: "b2",
  lessons: [
    {
      id: "ja-u205l1",
      unit: 205,
      lesson: 1,
      title: "Several, a few digits, more or less",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give a vague but useful number: すうめい, すうねん, すうかい, すうにち, ひとけた, ふたけた.",
      items: [
        { id: "ja-u205l1-sumei", type: "vocab", front: "すうめい", reading: "sūmei", meaning: "several people", example: { jp: "きのうの 会には すうめいしか 来ませんでした。", en: "Only a few people came to yesterday's meeting." }, accept: ["a few people", "some (persons)"], hint: "数 + a counter means 'several' — すうにち, すうかげつ, すうじゅう. Vaguer than a number and more precise than 少し." },
        { id: "ja-u205l1-sunen", type: "vocab", front: "すうねん", reading: "sūnen", meaning: "several years", example: { jp: "すうねん 前から、この 町に 住んで います。", en: "I've lived in this town for several years now." }, accept: ["a few years", "some years"] },
        { id: "ja-u205l1-sukai", type: "vocab", front: "すうかい", reading: "sūkai", meaning: "several times", example: { jp: "すうかい 会っただけですが、いい 人でした。", en: "I only met him a few times, but he was a good person." }, accept: ["a few times", "on several occasions"] },
        { id: "ja-u205l1-hitoketa", type: "vocab", front: "ひとけた", reading: "hitoketa", meaning: "single figures", example: { jp: "今日の 気温は ひとけたまで 下がりました。", en: "Today's temperature dropped into single figures." }, accept: ["one digit", "under ten"], hint: "けた was B1's u150. ひとけた and ふたけた are how Japanese reports temperatures, growth and prices without giving the number." },
        { id: "ja-u205l1-futaketa", type: "vocab", front: "ふたけた", reading: "futaketa", meaning: "double figures", example: { jp: "その 店の 売り上げは ふたけた のびました。", en: "That shop's sales grew by double figures." }, accept: ["two digits", "ten or more"] },
                { id: "ja-u205l1-sunichi", type: "vocab", front: "すうにち", reading: "sūnichi", meaning: "a few days", example: { jp: "すうにち 前に 手紙が とどきました。", en: "A letter arrived a few days ago." }, drill: { jp: "すうにちが たちました。", en: "A few days passed." }, accept: ["several days", "some days"] },
      ],
    },
    {
      id: "ja-u205l2",
      unit: 205,
      lesson: 2,
      title: "Most of it, part of it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about proportions of a whole: おおはば, だいぶぶん, ぜんたいてき, ごくいちぶ, かはんすう, へいきんてん.",
      items: [
                { id: "ja-u205l2-ohaba", type: "vocab", front: "おおはば", reading: "ōhaba", meaning: "by a wide margin, substantially", example: { jp: "ねだんが おおはばに 下がりました。", en: "The price came down substantially." }, accept: ["sharply", "by a lot", "drastically"], hint: "はば (B1 u150) is width; おおはば is a wide one. It measures the SIZE of a change, and news and business writing lean on it." },
        { id: "ja-u205l2-daibubun", type: "vocab", front: "だいぶぶん", reading: "daibubun", meaning: "most of, the greater part", example: { jp: "お金の だいぶぶんは 本に 使いました。", en: "I spent most of the money on books." }, drill: { jp: "だいぶぶんが おわりました。", en: "Most of it is finished." }, accept: ["the bulk", "nearly all"] },
                { id: "ja-u205l2-zentaiteki", type: "vocab", front: "ぜんたいてき", reading: "zentaiteki", meaning: "overall, taken as a whole", example: { jp: "ぜんたいてきに 見ると、よく できて います。", en: "Looked at overall, it is well done." }, accept: ["on the whole", "in general terms"], hint: "ぜんたい (the whole) + てき from u203. ぜんたいてきに opens a summing-up, where だいぶぶん counts a portion." },
        { id: "ja-u205l2-gokuichibu", type: "vocab", front: "ごくいちぶ", reading: "gokuichibu", meaning: "only a tiny fraction", example: { jp: "ごくいちぶの 意見に すぎません。", en: "It's no more than a tiny minority view." }, accept: ["a very small part", "a handful"], hint: "ごく intensifies downward — ごくわずか, ごくまれに. It is how you dismiss something as unrepresentative." },
        { id: "ja-u205l2-kahansu", type: "vocab", front: "かはんすう", reading: "kahansū", meaning: "a majority (over half)", example: { jp: "かはんすうが さんせいしたので、決まりました。", en: "A majority were in favour, so it was decided." }, accept: ["more than half", "the majority (count)"] },
        { id: "ja-u205l2-heikinten", type: "vocab", front: "へいきんてん", reading: "heikinten", meaning: "average score", example: { jp: "クラスの へいきんてんは 70てんでした。", en: "The class average was seventy." }, accept: ["mean score", "average mark"] },
      ],
    },
    {
      id: "ja-u205l3",
      unit: 205,
      lesson: 3,
      title: "Top, bottom and how many times",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Rank things and count repetitions: さいゆうしゅう, じょうい, じゅんい, いくつも, いくども, なんども.",
      items: [
                        { id: "ja-u205l3-saiyushu", type: "vocab", front: "さいゆうしゅう", reading: "saiyūshū", meaning: "the very best, top prize", example: { jp: "その 作品が さいゆうしゅうに えらばれました。", en: "That piece was chosen as the very best." }, accept: ["first prize", "outstanding"], hint: "さい～ superlative again, this time on ゆうしゅう (excellent)." },
                { id: "ja-u205l3-joi", type: "vocab", front: "じょうい", reading: "jōi", meaning: "the upper ranks, high placing", example: { jp: "はじめて じょういに 入る ことが できました。", en: "For the first time I made it into the top places." }, accept: ["top ranking", "high placed"], hint: "Pairs with じゅんい on the next card: じゅんい is your place, じょうい is being near the top of the list." },
        { id: "ja-u205l3-juni", type: "vocab", front: "じゅんい", reading: "juni", meaning: "ranking, placing", example: { jp: "じゅんいが 上がって、よろこんで います。", en: "My ranking has gone up and I'm pleased." }, accept: ["rank", "position (in order)"] },
        { id: "ja-u205l3-ikutsumo", type: "vocab", front: "いくつも", reading: "ikutsumo", meaning: "any number of, many", example: { jp: "同じような 店が いくつも あります。", en: "There are any number of similar shops." }, accept: ["lots of", "several (emphatic)"], hint: "いくつ (how many) + も makes it 'so many you would not count'. With a negative it flips: いくつも ない, hardly any." },
        { id: "ja-u205l3-ikudomo", type: "vocab", front: "いくども", reading: "ikudomo", meaning: "over and over", example: { jp: "いくども れんしゅうして、やっと できました。", en: "I practised over and over and finally managed it." }, accept: ["repeatedly", "time and again"] },
        { id: "ja-u205l3-nandomo", type: "vocab", front: "なんども", reading: "nandomo", meaning: "many times", example: { jp: "なんども 読みましたが、まだ 分かりません。", en: "I've read it many times and I still don't understand." }, accept: ["again and again", "over and over"], hint: "The everyday twin of いくども. なんども is spoken; いくども is a shade more written." },
      ],
    },
    {
      id: "ja-u205l4",
      unit: 205,
      lesson: 4,
      title: "All of it, none of it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Cover the extremes of extent: いっさい, ことごとく, おおむね, ひとくちに, なんら, とうてい.",
      items: [
        { id: "ja-u205l4-issai", type: "vocab", front: "いっさい", reading: "issai", meaning: "(not) at all; entirely", example: { jp: "その 件については いっさい 知りません。", en: "I know nothing whatever about that matter." }, accept: ["not in the least", "wholly", "without exception"], hint: "Strongest with a negative, where it means 'none of it, none at all'. On a notice いっさい means the rule admits no exception." },
        { id: "ja-u205l4-kotogotoku", type: "vocab", front: "ことごとく", reading: "kotogotoku", meaning: "every last one", example: { jp: "考えた ことが ことごとく はずれました。", en: "Every last thing I'd predicted turned out wrong." }, accept: ["all without exception", "one and all"], hint: "Written and emphatic, and it usually reports a total defeat or a total success." },
        { id: "ja-u205l4-omune", type: "vocab", front: "おおむね", reading: "ōmune", meaning: "broadly, on the whole", example: { jp: "けいかくは おおむね うまく いって います。", en: "The plan is broadly going well." }, accept: ["generally", "in the main"], hint: "The formal だいたい, common in reports. It concedes that the detail may not all hold." },
        { id: "ja-u205l4-hitokuchini", type: "vocab", front: "ひとくちに", reading: "hitokuchini", meaning: "to put it in a word (but…)", example: { jp: "ひとくちに 日本語と 言っても、いろいろな 話し方が あります。", en: "Japanese may be one word, but there are many ways of speaking it." }, accept: ["in a single word", "lumped together"], hint: "Almost always ひとくちに…と 言っても — it sets up the objection that a single label hides real variety." },
        { id: "ja-u205l4-nanra", type: "vocab", front: "なんら", reading: "nanra", meaning: "(not) in any way", example: { jp: "その 話は なんら 問題は ありません。", en: "There is no problem whatsoever with that." }, accept: ["not any", "in no respect"], hint: "Formal, negative-only, and stronger than なにも. It belongs to statements and denials rather than conversation." },
        { id: "ja-u205l4-totei", type: "vocab", front: "とうてい", reading: "tōtei", meaning: "(cannot) possibly", example: { jp: "一日では とうてい 終わりません。", en: "There's no possible way to finish it in a day." }, accept: ["by no means", "not conceivably"], hint: "Negative-only. It says the thing is out of reach, not merely difficult — a stronger むり." },
      ],
    },
  ],
};
