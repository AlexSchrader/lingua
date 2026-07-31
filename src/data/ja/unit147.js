// Unit 147 — ごい・N3・29 ("N3 vocab 29") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Same-reading homographs (協力/強力) disambiguated via hints.
export const UNIT147 = {
  id: "ja-u147", lang: "ja", title: "ごい・N3・29", order: 147, stage: "b1",
  lessons: [
    {
      id: "ja-u147l1", unit: 147, lesson: 1, title: "N3 vocab 29·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 共同 (cooperation), 恐怖 (fear), 協力 (cooperation), 強力 (powerful), 許可 (permission), 巨大 (huge).",
      items: [
        { id: "ja-u147l1-kyodo", type: "vocab", front: "共同", reading: "kyōdō", meaning: "cooperation", example: { jp: "このへやをみんなで共同でつかいます。", en: "Everyone uses this room jointly." }, accept: ["association", "collaboration"], hint: "共同 (きょうどう) = doing something jointly / together." },
        { id: "ja-u147l1-kyofu", type: "vocab", front: "恐怖", reading: "kyōfu", meaning: "fear", example: { jp: "くらいみちで恐怖をかんじました。", en: "I felt fear on the dark road." }, accept: ["terror"] },
        { id: "ja-u147l1-kyoryoku", type: "vocab", front: "協力", reading: "kyōryoku", meaning: "cooperation", example: { jp: "みんなで協力してそうじをしました。", en: "We all worked together to clean up." }, accept: ["collaboration"], hint: "協力 (きょうりょく) = cooperation, working together. Same reading as 強力." },
        { id: "ja-u147l1-kyoryoku2", type: "vocab", front: "強力", reading: "kyōryoku", meaning: "powerful", example: { jp: "この強力なくすりはよくききます。", en: "This powerful medicine works well." }, accept: ["strong"], hint: "強力な (きょうりょく) = powerful — a な-adjective. Same reading as 協力." },
        { id: "ja-u147l1-kyoka", type: "vocab", front: "許可", reading: "kyoka", meaning: "permission", example: { jp: "せんせいに許可をもらいました。", en: "I got permission from the teacher." }, accept: ["approval"], hint: "許可する (きょかする) = to permit / approve." },
        { id: "ja-u147l1-kyodai", type: "vocab", front: "巨大", reading: "kyodai", meaning: "huge", example: { jp: "うみで巨大なさかなをみました。", en: "I saw a huge fish in the sea." }, accept: ["gigantic", "enormous"], hint: "巨大な (きょだい) = huge / gigantic — a な-adjective." },
      ],
    },
    {
      id: "ja-u147l2", unit: 147, lesson: 2, title: "N3 vocab 29·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 嫌う (to hate), 霧 (fog), 切れ (cloth), 切れる (to cut well), 記録 (record), 議論 (argument).",
      items: [
        { id: "ja-u147l2-kirau", type: "vocab", front: "嫌う", reading: "kirau", meaning: "to hate", example: { jp: "かれはやさいを嫌っています。", en: "He hates vegetables." }, accept: ["to dislike", "to loathe"] },
        { id: "ja-u147l2-kiri", type: "vocab", front: "霧", reading: "kiri", meaning: "fog", example: { jp: "あさははやく霧がでました。", en: "Fog came in early in the morning." }, accept: ["mist"] },
        { id: "ja-u147l2-kire", type: "vocab", front: "切れ", reading: "kire", meaning: "cloth", example: { jp: "ちいさな切れでにんぎょうをつくりました。", en: "I made a doll from a small piece of cloth." }, accept: ["piece", "cut"], hint: "切れ (きれ) = a piece / scrap of cloth. From 切る (to cut)." },
        { id: "ja-u147l2-kireru", type: "vocab", front: "切れる", reading: "kireru", meaning: "to cut well", example: { jp: "このナイフはよく切れます。", en: "This knife cuts well." }, accept: ["to be sharp", "to break off"], hint: "切れる (きれる) = to cut well / be sharp (intransitive). Pair: 切る = to cut." },
        { id: "ja-u147l2-kiroku", type: "vocab", front: "記録", reading: "kiroku", meaning: "record", example: { jp: "まいにちのてんきを記録します。", en: "I record the weather every day." }, accept: ["minutes", "document"], hint: "記録する (きろくする) = to record / write down." },
        { id: "ja-u147l2-giron", type: "vocab", front: "議論", reading: "giron", meaning: "argument", example: { jp: "そのもんだいについて議論しました。", en: "We discussed that problem." }, accept: ["discussion", "dispute"], hint: "議論する (ぎろんする) = to debate / discuss." },
      ],
    },
    {
      id: "ja-u147l3", unit: 147, lesson: 3, title: "N3 vocab 29·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 禁煙 (no smoking), 金額 (amount of money), 金庫 (safe), 禁止 (prohibition), 金銭 (money), 金属 (metal).",
      items: [
        { id: "ja-u147l3-kinen2", type: "vocab", front: "禁煙", reading: "kinen", meaning: "no smoking", example: { jp: "このレストランは禁煙です。", en: "This restaurant is no-smoking." }, accept: ["non-smoking", "smoking prohibited"], hint: "禁煙 (きんえん) = no smoking; also 'quitting smoking'." },
        { id: "ja-u147l3-kingaku", type: "vocab", front: "金額", reading: "kingaku", meaning: "amount of money", example: { jp: "この金額はたかすぎます。", en: "This amount of money is too high." }, accept: ["sum", "amount"], hint: "金額 (きんがく) = a sum / amount of money." },
        { id: "ja-u147l3-kinko", type: "vocab", front: "金庫", reading: "kinko", meaning: "safe", example: { jp: "おかねを金庫にいれました。", en: "I put the money in the safe." }, accept: ["vault"] },
        { id: "ja-u147l3-kinshi", type: "vocab", front: "禁止", reading: "kinshi", meaning: "prohibition", example: { jp: "ここはしゃしんが禁止です。", en: "Photos are prohibited here." }, accept: ["ban"], hint: "禁止する (きんしする) = to prohibit / ban." },
        { id: "ja-u147l3-kinsen", type: "vocab", front: "金銭", reading: "kinsen", meaning: "money", example: { jp: "金銭のことでこまっています。", en: "I'm troubled over money matters." }, accept: ["cash"], hint: "金銭 (きんせん) = money (as an abstract, formal term)." },
        { id: "ja-u147l3-kinzoku", type: "vocab", front: "金属", reading: "kinzoku", meaning: "metal", example: { jp: "このはこは金属でできています。", en: "This box is made of metal." }, accept: [] },
      ],
    },
    {
      id: "ja-u147l4", unit: 147, lesson: 4, title: "N3 vocab 29·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 近代 (modern times), 緊張 (tension), 筋肉 (muscle), 金融 (finance), 句 (phrase), 食う (to eat).",
      items: [
        { id: "ja-u147l4-kindai", type: "vocab", front: "近代", reading: "kindai", meaning: "modern times", example: { jp: "近代のびじゅつがすきです。", en: "I like modern art." }, accept: ["modern age"], hint: "近代 (きんだい) = modern times / the modern era." },
        { id: "ja-u147l4-kincho", type: "vocab", front: "緊張", reading: "kinchō", meaning: "tension", example: { jp: "テストのまえは緊張します。", en: "I get nervous before a test." }, accept: ["mental strain", "nervousness"], hint: "緊張する (きんちょうする) = to feel tense / nervous." },
        { id: "ja-u147l4-kinniku", type: "vocab", front: "筋肉", reading: "kinniku", meaning: "muscle", example: { jp: "まいにちうんどうして筋肉をつけます。", en: "I exercise every day to build muscle." }, accept: ["sinews"] },
        { id: "ja-u147l4-kinyu2", type: "vocab", front: "金融", reading: "kinyū", meaning: "finance", example: { jp: "金融のしごとはむずかしいです。", en: "Finance work is difficult." }, accept: ["money and banking"], hint: "金融 (きんゆう) = finance / money and banking." },
        { id: "ja-u147l4-ku", type: "vocab", front: "句", reading: "ku", meaning: "phrase", example: { jp: "この句のいみがわかりません。", en: "I don't understand the meaning of this phrase." }, accept: ["expression"], hint: "句 (く) = a phrase / short expression." },
        { id: "ja-u147l4-ku2", type: "vocab", front: "食う", reading: "kū", meaning: "to eat", example: { jp: "おなかがすいたのでたくさん食いました。", en: "I was hungry, so I ate a lot." }, accept: ["to devour"], hint: "食う (くう) = a rough, casual word for 食べる (to eat)." },
      ],
    },
  ],
};
