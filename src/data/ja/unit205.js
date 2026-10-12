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
        { id: "ja-u205l1-sumei", type: "vocab", front: "すうめい", reading: "sūmei", meaning: "several people", example: { jp: "きのうの 会には すうめいしか 来ませんでした。", en: "Only a few people came to yesterday's meeting." }, drill: { jp: "すうめいで 行きました。", en: "We went as a group of several." }, accept: ["a few people", "some (persons)", "a handful of people"], hint: "数 + a counter means 'several' — すうにち, すうかげつ, すうじゅう. Vaguer than a number and more precise than 少し." },
        { id: "ja-u205l1-sunen", type: "vocab", front: "すうねん", reading: "sūnen", meaning: "several years", example: { jp: "すうねん 前から、この 町に 住んで います。", en: "I've lived in this town for several years now." }, drill: { jp: "すうねんで かわりました。", en: "It changed over several years." }, accept: ["a few years", "some years", "a handful of years"], hint: "sūnen — 数 (number) + 年 (years): an unspecified few. That 数 prefix works on any counter — すうめい, すうかい, すうにち, all in this lesson — and it means roughly three to five, never one or two." },
        { id: "ja-u205l1-sukai", type: "vocab", front: "すうかい", reading: "sūkai", meaning: "several times", example: { jp: "すうかい 会っただけですが、いい 人でした。", en: "I only met him a few times, but he was a good person." }, drill: { jp: "すうかい 会いました。", en: "I met him several times." }, accept: ["a few times", "on several occasions", "a handful of times"], hint: "sūkai — 数 + 回 (times). Vaguer than なんかい, which ASKS how many; すうかい asserts a few without committing to a figure, which is why writing prefers it to a guess." },
        { id: "ja-u205l1-hitoketa", type: "vocab", front: "ひとけた", reading: "hitoketa", meaning: "single figures", example: { jp: "今日の 気温は ひとけたまで 下がりました。", en: "Today's temperature dropped into single figures." }, drill: { jp: "ひとけたまで 下がりました。", en: "It dropped into single figures." }, accept: ["one digit", "under ten", "below ten"], hint: "けた was B1's u150. ひとけた and ふたけた are how Japanese reports temperatures, growth and prices without giving the number." },
        { id: "ja-u205l1-futaketa", type: "vocab", front: "ふたけた", reading: "futaketa", meaning: "double figures", example: { jp: "その 店の 売り上げは ふたけた のびました。", en: "That shop's sales grew by double figures." }, drill: { jp: "ふたけた のびました。", en: "It grew by double figures." }, accept: ["two digits", "ten or more", "in the tens"], hint: "futaketa — ふた (two) + けた (digit), the けた taught earlier as an order of magnitude. Business Japanese says ふたけた to mean ten per cent or more without naming the number." },
                { id: "ja-u205l1-sunichi", type: "vocab", front: "すうにち", reading: "sūnichi", meaning: "a few days", example: { jp: "すうにち 前に 手紙が とどきました。", en: "A letter arrived a few days ago." }, drill: { jp: "すうにちが たちました。", en: "A few days passed." }, accept: ["several days", "some days", "a handful of days"], hint: "sūnichi — 数 + 日 (days). Watch the reading: にち here, not か, so it is すうにち and never すうか. A few days, left deliberately vague." },
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
                { id: "ja-u205l2-ohaba", type: "vocab", front: "おおはば", reading: "ōhaba", meaning: "by a wide margin, substantially", example: { jp: "ねだんが おおはばに 下がりました。", en: "The price came down substantially." }, drill: { jp: "おおはばに 下がりました。", en: "It came down substantially." }, accept: ["sharply", "by a lot", "drastically"], hint: "はば (B1 u150) is width; おおはば is a wide one. It measures the SIZE of a change, and news and business writing lean on it." },
        { id: "ja-u205l2-daibubun", type: "vocab", front: "だいぶぶん", reading: "daibubun", meaning: "most of, the greater part", example: { jp: "お金の だいぶぶんは 本に 使いました。", en: "I spent most of the money on books." }, drill: { jp: "だいぶぶんが おわりました。", en: "Most of it is finished." }, accept: ["the bulk", "nearly all", "most of it"], hint: "daibubun — 大 (big) + ぶぶん (part): the greater part, usually well over half. ほとんど is almost all of it; だいぶぶん leaves a real remainder, which is why a report prefers it." },
                { id: "ja-u205l2-zentaiteki", type: "vocab", front: "ぜんたいてき", reading: "zentaiteki", meaning: "overall, taken as a whole", example: { jp: "ぜんたいてきに 見ると、よく できて います。", en: "Looked at overall, it is well done." }, drill: { jp: "ぜんたいてきに 見ます。", en: "We look at it overall." }, accept: ["on the whole", "in general terms", "taken all together"], hint: "ぜんたい (the whole) + てき from u203. ぜんたいてきに opens a summing-up, where だいぶぶん counts a portion." },
        { id: "ja-u205l2-gokuichibu", type: "vocab", front: "ごくいちぶ", reading: "gokuichibu", meaning: "only a tiny fraction", example: { jp: "ごくいちぶの 意見に すぎません。", en: "It's no more than a tiny minority view." }, drill: { jp: "ごくいちぶの 意見です。", en: "It is a tiny minority view." }, accept: ["a very small part", "a handful", "only a fraction"], hint: "ごく intensifies downward — ごくわずか, ごくまれに. It is how you dismiss something as unrepresentative." },
        { id: "ja-u205l2-kahansu", type: "vocab", front: "かはんすう", reading: "kahansū", meaning: "a majority (over half)", example: { jp: "かはんすうが さんせいしたので、決まりました。", en: "A majority were in favour, so it was decided." }, drill: { jp: "かはんすうが さんせいしました。", en: "A majority were in favour." }, accept: ["more than half", "the majority (count)", "over half the votes"], hint: "kahansū — 過 (exceeding) + 半 (half) + 数 (number): the count that goes past half. It is a COUNT, so かはんすうを こえる is the voting phrase, where だいぶぶん is a loose proportion." },
        { id: "ja-u205l2-heikinten", type: "vocab", front: "へいきんてん", reading: "heikinten", meaning: "average score", example: { jp: "クラスの へいきんてんは 70てんでした。", en: "The class average was seventy." }, drill: { jp: "へいきんてんが 下がりました。", en: "The average score has fallen." }, accept: ["mean score", "average mark", "the mean mark"], hint: "heikinten — 平均 (average) + 点 (points). へいきん attaches to any measure — へいきんじゅみょう, へいきんきおん — and 点 is specifically a mark out of something." },
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
                        { id: "ja-u205l3-saiyushu", type: "vocab", front: "さいゆうしゅう", reading: "saiyūshū", meaning: "the very best, top prize", example: { jp: "その 作品が さいゆうしゅうに えらばれました。", en: "That piece was chosen as the very best." }, drill: { jp: "さいゆうしゅうに えらばれました。", en: "It was chosen as the very best." }, accept: ["first prize", "outstanding", "the top award"], hint: "さい～ superlative again, this time on ゆうしゅう (excellent)." },
                { id: "ja-u205l3-joi", type: "vocab", front: "じょうい", reading: "jōi", meaning: "the upper ranks, high placing", example: { jp: "はじめて じょういに 入る ことが できました。", en: "For the first time I made it into the top places." }, drill: { jp: "じょういに 入りました。", en: "I made it into the top places." }, accept: ["top ranking", "high placed", "the top end of the table"], hint: "Pairs with じゅんい on the next card: じゅんい is your place, じょうい is being near the top of the list." },
        { id: "ja-u205l3-juni", type: "vocab", front: "じゅんい", reading: "juni", meaning: "ranking, placing", example: { jp: "じゅんいが 上がって、よろこんで います。", en: "My ranking has gone up and I'm pleased." }, drill: { jp: "じゅんいが 下がりました。", en: "My ranking has dropped." }, accept: ["rank", "position (in order)", "where one placed"], hint: "jun-i — 順 (order) + 位 (place), the same 位 as in がくい. It is your place in a list, so じゅんいが 上がる is to climb it, while じょうい is the top region of that same list." },
        { id: "ja-u205l3-ikutsumo", type: "vocab", front: "いくつも", reading: "ikutsumo", meaning: "any number of, many", example: { jp: "同じような 店が いくつも あります。", en: "There are any number of similar shops." }, drill: { jp: "いくつも あります。", en: "There are any number of them." }, accept: ["lots of", "several (emphatic)", "plenty of them"], hint: "いくつ (how many) + も makes it 'so many you would not count'. With a negative it flips: いくつも ない, hardly any." },
        { id: "ja-u205l3-ikudomo", type: "vocab", front: "いくども", reading: "ikudomo", meaning: "over and over", example: { jp: "いくども れんしゅうして、やっと できました。", en: "I practised over and over and finally managed it." }, drill: { jp: "いくども れんしゅうしました。", en: "I practised over and over." }, accept: ["repeatedly", "time and again", "over and over again"], hint: "ikudomo — いく (how many) + ど (times) + も: so many that you stop counting. The いく...も pattern builds several of these — いくつも, いくらでも. In speech なんども is commoner." },
        { id: "ja-u205l3-nandomo", type: "vocab", front: "なんども", reading: "nandomo", meaning: "many times", example: { jp: "なんども 読みましたが、まだ 分かりません。", en: "I've read it many times and I still don't understand." }, drill: { jp: "なんども 読みました。", en: "I read it many times." }, accept: ["again and again", "a great many times", "time after time"], hint: "The everyday twin of いくども. なんども is spoken; いくども is a shade more written." },
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
        { id: "ja-u205l4-issai", type: "vocab", front: "いっさい", reading: "issai", meaning: "(not) at all; entirely", example: { jp: "その 件については いっさい 知りません。", en: "I know nothing whatever about that matter." }, drill: { jp: "いっさい 知りません。", en: "I know nothing whatever about it." }, accept: ["not in the least", "wholly", "without exception"], hint: "Strongest with a negative, where it means 'none of it, none at all'. On a notice いっさい means the rule admits no exception." },
        { id: "ja-u205l4-kotogotoku", type: "vocab", front: "ことごとく", reading: "kotogotoku", meaning: "every last one", example: { jp: "考えた ことが ことごとく はずれました。", en: "Every last thing I'd predicted turned out wrong." }, drill: { jp: "ことごとく はずれました。", en: "Every last one was wrong." }, accept: ["all without exception", "one and all", "every single one"], hint: "Written and emphatic, and it usually reports a total defeat or a total success." },
        { id: "ja-u205l4-omune", type: "vocab", front: "おおむね", reading: "ōmune", meaning: "broadly, on the whole", example: { jp: "けいかくは おおむね うまく いって います。", en: "The plan is broadly going well." }, drill: { jp: "おおむね うまく いって います。", en: "It is broadly going well." }, accept: ["generally", "in the main", "by and large"], hint: "The formal だいたい, common in reports. It concedes that the detail may not all hold." },
        { id: "ja-u205l4-hitokuchini", type: "vocab", front: "ひとくちに", reading: "hitokuchini", meaning: "to put it in a word (but…)", example: { jp: "ひとくちに 日本語と 言っても、いろいろな 話し方が あります。", en: "Japanese may be one word, but there are many ways of speaking it." }, drill: { jp: "ひとくちに 言えません。", en: "You cannot put it in a single word." }, accept: ["in a single word", "lumped together", "in one breath"], hint: "Almost always ひとくちに…と 言っても — it sets up the objection that a single label hides real variety." },
        { id: "ja-u205l4-nanra", type: "vocab", front: "なんら", reading: "nanra", meaning: "(not) in any way", example: { jp: "その 話は なんら 問題は ありません。", en: "There is no problem whatsoever with that." }, drill: { jp: "なんら 問題は ありません。", en: "There is no problem whatsoever." }, accept: ["not any", "in no respect", "not in the least"], hint: "Formal, negative-only, and stronger than なにも. It belongs to statements and denials rather than conversation." },
        { id: "ja-u205l4-totei", type: "vocab", front: "とうてい", reading: "tōtei", meaning: "(cannot) possibly", example: { jp: "一日では とうてい 終わりません。", en: "There's no possible way to finish it in a day." }, drill: { jp: "とうてい できません。", en: "There is no possible way I can do it." }, accept: ["by no means", "not conceivably", "not possibly"], hint: "Negative-only. It says the thing is out of reach, not merely difficult — a stronger むり." },
      ],
    },
  ],
};
