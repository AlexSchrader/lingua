// Unit 159 — ごい・N3・41 ("N3 vocab 41") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (yūkō) disambiguated via hints.
export const UNIT159 = {
  id: "ja-u159", lang: "ja", title: "ごい・N3・41", order: 159, stage: "b1",
  lessons: [
    {
      id: "ja-u159l1", unit: 159, lesson: 1, title: "N3 vocab 41·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 燃やす (to burn), 模様 (pattern), 文句 (complaint), やがて (before long), 訳 (translation), 訳す (to translate).",
      items: [
        { id: "ja-u159l1-moyasu", type: "vocab", front: "燃やす", reading: "moyasu", meaning: "to burn", example: { jp: "かれはふるいてがみを燃やしました。", en: "He burned the old letters." }, accept: ["to set on fire"] },
        { id: "ja-u159l1-moyo", type: "vocab", front: "模様", reading: "moyō", meaning: "pattern", example: { jp: "このシャツはきれいな模様です。", en: "This shirt has a pretty pattern." }, accept: ["figure", "design"] },
        { id: "ja-u159l1-monku", type: "vocab", front: "文句", reading: "monku", meaning: "complaint", example: { jp: "かれはいつも文句をいいます。", en: "He always makes complaints." }, accept: ["objection", "grumble"], hint: "文句をいう (もんくをいう) = to complain / grumble." },
        { id: "ja-u159l1-yagate", type: "vocab", front: "やがて", reading: "yagate", meaning: "before long", example: { jp: "やがてはるがきます。", en: "Before long, spring will come." }, accept: ["soon", "eventually"] },
        { id: "ja-u159l1-yaku", type: "vocab", front: "訳", reading: "yaku", meaning: "translation", example: { jp: "この訳はとてもわかりやすいです。", en: "This translation is very easy to understand." }, accept: ["a translation"], hint: "訳 (やく) = translation. Read わけ it means 'reason', but here it's やく." },
        { id: "ja-u159l1-yakusu", type: "vocab", front: "訳す", reading: "yakusu", meaning: "to translate", example: { jp: "えいごのてがみを訳しました。", en: "I translated the English letter." }, accept: ["to render"] },
      ],
    },
    {
      id: "ja-u159l2", unit: 159, lesson: 2, title: "N3 vocab 41·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 役割 (role), 家賃 (rent), 厄介 (trouble), 雇う (to employ), 屋根 (roof), 破る (to tear).",
      items: [
        { id: "ja-u159l2-yakuwari", type: "vocab", front: "役割", reading: "yakuwari", meaning: "role", example: { jp: "チームのみんなに役割があります。", en: "Everyone on the team has a role." }, accept: ["part", "duties"] },
        { id: "ja-u159l2-yachin", type: "vocab", front: "家賃", reading: "yachin", meaning: "rent", example: { jp: "まいつき家賃をはらいます。", en: "I pay the rent every month." }, accept: ["house rent"] },
        { id: "ja-u159l2-yakkai", type: "vocab", front: "厄介", reading: "yakkai", meaning: "trouble", example: { jp: "これは厄介なもんだいです。", en: "This is a troublesome problem." }, accept: ["troublesome", "burden"], hint: "厄介な (やっかいな) = troublesome — a な-adjective." },
        { id: "ja-u159l2-yato", type: "vocab", front: "雇う", reading: "yatō", meaning: "to employ", example: { jp: "みせはあたらしいひとを雇いました。", en: "The shop hired a new person." }, accept: ["to hire"] },
        { id: "ja-u159l2-yane", type: "vocab", front: "屋根", reading: "yane", meaning: "roof", example: { jp: "あかい屋根のいえがすきです。", en: "I like the house with the red roof." }, accept: ["rooftop"] },
        { id: "ja-u159l2-yaburu", type: "vocab", front: "破る", reading: "yaburu", meaning: "to tear", example: { jp: "かれはてがみを破りました。", en: "He tore up the letter." }, accept: ["to violate", "to defeat"] },
      ],
    },
    {
      id: "ja-u159l3", unit: 159, lesson: 3, title: "N3 vocab 41·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 破れる (to get torn), 辞める (to quit), やや (a little), 唯一 (only), 勇気 (courage), 友好 (friendship).",
      items: [
        { id: "ja-u159l3-yabureru", type: "vocab", front: "破れる", reading: "yabureru", meaning: "to get torn", example: { jp: "ズボンが破れてしまいました。", en: "My trousers got torn." }, accept: ["to wear out"], hint: "破れる (やぶれる) = it tears (intransitive). Pair: 破る = to tear it." },
        { id: "ja-u159l3-yameru", type: "vocab", front: "辞める", reading: "yameru", meaning: "to quit", example: { jp: "かれはかいしゃを辞めました。", en: "He quit the company." }, accept: ["to resign", "to retire"], hint: "辞める (やめる) = to quit / resign a job or position." },
        { id: "ja-u159l3-yaya", type: "vocab", front: "やや", reading: "yaya", meaning: "a little", example: { jp: "きょうはややさむいです。", en: "Today it's a little cold." }, accept: ["somewhat", "slightly"] },
        { id: "ja-u159l3-yuiitsu", type: "vocab", front: "唯一", reading: "yuiitsu", meaning: "only", example: { jp: "これが唯一のほうほうです。", en: "This is the only way." }, accept: ["sole", "unique"] },
        { id: "ja-u159l3-yuki", type: "vocab", front: "勇気", reading: "yūki", meaning: "courage", example: { jp: "かれは勇気があります。", en: "He has courage." }, accept: ["bravery", "boldness"] },
        { id: "ja-u159l3-yuko", type: "vocab", front: "友好", reading: "yūkō", meaning: "friendship", example: { jp: "ふたつのくにの友好をねがいます。", en: "I hope for friendship between the two countries." }, accept: ["amity", "friendly relations"], hint: "友好 (ゆうこう) = friendly relations between groups or nations. Same reading as 有効 (valid)." },
      ],
    },
    {
      id: "ja-u159l4", unit: 159, lesson: 4, title: "N3 vocab 41·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 有効 (valid), 優秀 (excellent), 優勝 (victory), 友情 (friendship), 友人 (friend), 有能 (able).",
      items: [
        { id: "ja-u159l4-yuko2", type: "vocab", front: "有効", reading: "yūkō", meaning: "valid", example: { jp: "このきっぷは有効です。", en: "This ticket is valid." }, accept: ["effective", "effectual"], hint: "有効 (ゆうこう) = valid / effective. Same reading as 友好 (friendship)." },
        { id: "ja-u159l4-yushu", type: "vocab", front: "優秀", reading: "yūshū", meaning: "excellent", example: { jp: "かれは優秀なせいとです。", en: "He is an excellent student." }, accept: ["superior", "outstanding"], hint: "優秀な (ゆうしゅうな) = excellent — a な-adjective." },
        { id: "ja-u159l4-yusho", type: "vocab", front: "優勝", reading: "yūshō", meaning: "victory", example: { jp: "わたしたちのチームが優勝しました。", en: "Our team won the championship." }, accept: ["championship", "overall win"] },
        { id: "ja-u159l4-yujo", type: "vocab", front: "友情", reading: "yūjō", meaning: "friendship", example: { jp: "ふたりの友情はつよいです。", en: "The friendship between the two is strong." }, accept: ["fellowship"], hint: "友情 (ゆうじょう) = friendship between people (vs 友好, between groups)." },
        { id: "ja-u159l4-yujin", type: "vocab", front: "友人", reading: "yūjin", meaning: "friend", example: { jp: "かれはわたしの友人です。", en: "He is my friend." }, accept: ["a friend"], hint: "友人 (ゆうじん) = friend — more formal than ともだち." },
        { id: "ja-u159l4-yuno", type: "vocab", front: "有能", reading: "yūnō", meaning: "able", example: { jp: "かのじょは有能なリーダーです。", en: "She is a capable leader." }, accept: ["capable", "efficient"] },
      ],
    },
  ],
};
