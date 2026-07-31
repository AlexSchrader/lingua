// Unit 165 — ごい・N3・47 ("N3 vocab 47") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (keiki, keitai, kōkai) disambiguated via hints.
export const UNIT165 = {
  id: "ja-u165", lang: "ja", title: "ごい・N3・47", order: 165, stage: "b1",
  lessons: [
    {
      id: "ja-u165l1", unit: 165, lesson: 1, title: "N3 vocab 47·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 築く (to build), 規制 (regulation), 丘陵 (hill), 協議 (conference), 享受 (enjoyment), 協調 (co-operation).",
      items: [
        { id: "ja-u165l1-kizuku2", type: "vocab", front: "築く", reading: "kizuku", meaning: "to build", example: { jp: "かぞくとよいかんけいを築きます。", en: "I build a good relationship with my family." }, accept: ["to establish"] },
        { id: "ja-u165l1-kisei", type: "vocab", front: "規制", reading: "kisei", meaning: "regulation", example: { jp: "あたらしい規制ができました。", en: "A new regulation was made." }, accept: ["rule", "control"] },
        { id: "ja-u165l1-kyuryo2", type: "vocab", front: "丘陵", reading: "kyūryō", meaning: "hill", example: { jp: "丘陵にいえがたくさんあります。", en: "There are many houses on the hill." }, accept: ["hills"] },
        { id: "ja-u165l1-kyogi2", type: "vocab", front: "協議", reading: "kyōgi", meaning: "conference", example: { jp: "みんなで協議しました。", en: "We discussed it all together." }, accept: ["discussion", "negotiation"] },
        { id: "ja-u165l1-kyoju2", type: "vocab", front: "享受", reading: "kyōju", meaning: "enjoyment", example: { jp: "じゆうを享受します。", en: "We enjoy our freedom." }, accept: ["enjoying"] },
        { id: "ja-u165l1-kyocho2", type: "vocab", front: "協調", reading: "kyōchō", meaning: "co-operation", example: { jp: "チームと協調します。", en: "I cooperate with the team." }, accept: ["conciliation", "harmony"] },
      ],
    },
    {
      id: "ja-u165l2", unit: 165, lesson: 2, title: "N3 vocab 47·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 切り (limits), 菌 (germ), 近視 (nearsightedness), 群 (group), 刑 (penalty), 経緯 (sequence of events).",
      items: [
        { id: "ja-u165l2-kiri2", type: "vocab", front: "切り", reading: "kiri", meaning: "limits", example: { jp: "このしごとは切りがないです。", en: "There is no end to this work." }, accept: ["place to leave off"], hint: "切り (きり) = a stopping point; 切りがない = endless." },
        { id: "ja-u165l2-kin", type: "vocab", front: "菌", reading: "kin", meaning: "germ", example: { jp: "てに菌がたくさんいます。", en: "There are many germs on my hands." }, accept: ["bacterium"] },
        { id: "ja-u165l2-kinshi2", type: "vocab", front: "近視", reading: "kinshi", meaning: "nearsightedness", example: { jp: "わたしは近視です。", en: "I am nearsighted." }, accept: ["shortsightedness"] },
        { id: "ja-u165l2-gun3", type: "vocab", front: "群", reading: "gun", meaning: "group", example: { jp: "ほしの群がそらにみえます。", en: "A cluster of stars is visible in the sky." }, accept: ["cluster"] },
        { id: "ja-u165l2-kei", type: "vocab", front: "刑", reading: "kei", meaning: "penalty", example: { jp: "おもい刑をうけました。", en: "He received a heavy sentence." }, accept: ["sentence", "punishment"] },
        { id: "ja-u165l2-keii2", type: "vocab", front: "経緯", reading: "keii", meaning: "sequence of events", example: { jp: "ことの経緯をせつめいします。", en: "I will explain the sequence of events." }, accept: ["course"] },
      ],
    },
    {
      id: "ja-u165l3", unit: 165, lesson: 3, title: "N3 vocab 47·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 計器 (meter), 契機 (opportunity), 携帯 (mobile phone), 形態 (form), 血管 (blood vessel), 決行 (carrying out).",
      items: [
        { id: "ja-u165l3-keiki2", type: "vocab", front: "計器", reading: "keiki", meaning: "meter", example: { jp: "ひこうきの計器をみます。", en: "I look at the airplane's gauges." }, accept: ["gauge"], hint: "計器 (けいき) = gauge / meter; same reading as 契機." },
        { id: "ja-u165l3-keiki3", type: "vocab", front: "契機", reading: "keiki", meaning: "opportunity", example: { jp: "これを契機にがんばります。", en: "I will use this as an opportunity to try hard." }, accept: ["chance"], hint: "契機 (けいき) = turning point / trigger; same reading as 計器." },
        { id: "ja-u165l3-keitai", type: "vocab", front: "携帯", reading: "keitai", meaning: "mobile phone", example: { jp: "携帯でメールをおくります。", en: "I send email on my mobile phone." }, accept: ["carrying"], hint: "携帯 (けいたい) = mobile phone / carrying; same reading as 形態." },
        { id: "ja-u165l3-keitai2", type: "vocab", front: "形態", reading: "keitai", meaning: "form", example: { jp: "いろいろな形態があります。", en: "There are various forms." }, accept: ["shape", "figure"], hint: "形態 (けいたい) = form / shape; same reading as 携帯." },
        { id: "ja-u165l3-kekkan2", type: "vocab", front: "血管", reading: "kekkan", meaning: "blood vessel", example: { jp: "血管がほそくなります。", en: "The blood vessels become narrow." }, accept: ["vein"] },
        { id: "ja-u165l3-kekko", type: "vocab", front: "決行", reading: "kekkō", meaning: "carrying out", example: { jp: "あめでも決行します。", en: "We will go through with it even if it rains." }, accept: ["going through with"] },
      ],
    },
    {
      id: "ja-u165l4", unit: 165, lesson: 4, title: "N3 vocab 47·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 減少 (decrease), 公演 (public performance), 後悔 (regret), 航海 (voyage), 拘束 (restriction), 荒廃 (ruin).",
      items: [
        { id: "ja-u165l4-gensho2", type: "vocab", front: "減少", reading: "genshō", meaning: "decrease", example: { jp: "ひとが減少しています。", en: "The population is decreasing." }, accept: ["reduction", "decline"] },
        { id: "ja-u165l4-koen2", type: "vocab", front: "公演", reading: "kōen", meaning: "public performance", example: { jp: "きょうの公演をみました。", en: "I watched today's performance." }, accept: ["performance", "show"] },
        { id: "ja-u165l4-kokai", type: "vocab", front: "後悔", reading: "kōkai", meaning: "regret", example: { jp: "あとで後悔しました。", en: "I regretted it later." }, accept: ["repentance"], hint: "後悔 (こうかい) = regret; same reading as 航海." },
        { id: "ja-u165l4-kokai2", type: "vocab", front: "航海", reading: "kōkai", meaning: "voyage", example: { jp: "ながい航海にでます。", en: "We set out on a long voyage." }, accept: ["sailing"], hint: "航海 (こうかい) = voyage / sailing; same reading as 後悔." },
        { id: "ja-u165l4-kosoku2", type: "vocab", front: "拘束", reading: "kōsoku", meaning: "restriction", example: { jp: "じかんに拘束されます。", en: "I am bound by time." }, accept: ["restraint", "binding"] },
        { id: "ja-u165l4-kohai2", type: "vocab", front: "荒廃", reading: "kōhai", meaning: "ruin", example: { jp: "せんそうでまちが荒廃しました。", en: "The town fell to ruin because of the war." }, accept: ["devastation"] },
      ],
    },
  ],
};
