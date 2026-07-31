// Unit 152 — ごい・N3・34 ("N3 vocab 34") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (kōsha, kōsei, koeru) disambiguated via hints.
export const UNIT152 = {
  id: "ja-u152", lang: "ja", title: "ごい・N3・34", order: 152, stage: "b1",
  lessons: [
    {
      id: "ja-u152l1", unit: 152, lesson: 1, title: "N3 vocab 34·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 交際 (friendship), 校舎 (school building), 後者 (the latter), 工場 (factory), 公正 (fairness), 構成 (organization).",
      items: [
        { id: "ja-u152l1-kosai", type: "vocab", front: "交際", reading: "kōsai", meaning: "friendship", example: { jp: "二人は三年間交際しています。", en: "The two have been going out for three years." }, accept: ["association", "relationship"] },
        { id: "ja-u152l1-kosha", type: "vocab", front: "校舎", reading: "kōsha", meaning: "school building", example: { jp: "新しい校舎ができました。", en: "A new school building was finished." }, accept: ["schoolhouse"], hint: "校舎 (こうしゃ) = a school building. Same reading as 後者 (the latter)." },
        { id: "ja-u152l1-kosha2", type: "vocab", front: "後者", reading: "kōsha", meaning: "the latter", example: { jp: "わたしは後者をえらびます。", en: "I'll choose the latter." }, accept: ["latter"], hint: "後者 (こうしゃ) = the latter (of two). Same reading as 校舎 (school building)." },
        { id: "ja-u152l1-koba", type: "vocab", front: "工場", reading: "kōba", meaning: "factory", example: { jp: "父はこの工場ではたらいています。", en: "My father works at this factory." }, accept: ["plant", "workshop"], hint: "工場 read こうば = a small factory / workshop." },
        { id: "ja-u152l1-kosei", type: "vocab", front: "公正", reading: "kōsei", meaning: "fairness", example: { jp: "公正なルールがひつようです。", en: "We need fair rules." }, accept: ["justice", "impartial"], hint: "公正 (こうせい) = fairness / justice. Same reading as 構成 (organization)." },
        { id: "ja-u152l1-kosei2", type: "vocab", front: "構成", reading: "kōsei", meaning: "organization", example: { jp: "この本の構成はいいです。", en: "This book's structure is good." }, accept: ["composition", "structure"], hint: "構成 (こうせい) = composition / structure. Same reading as 公正 (fairness)." },
      ],
    },
    {
      id: "ja-u152l2", unit: 152, lesson: 2, title: "N3 vocab 34·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 高速 (high speed), 行動 (action), 強盗 (robbery), 後輩 (junior), 幸福 (happiness), 公平 (fairness).",
      items: [
        { id: "ja-u152l2-kosoku", type: "vocab", front: "高速", reading: "kōsoku", meaning: "high speed", example: { jp: "くるまが高速ではしります。", en: "The car runs at high speed." }, accept: ["fast", "express"] },
        { id: "ja-u152l2-kodo", type: "vocab", front: "行動", reading: "kōdō", meaning: "action", example: { jp: "はやく行動しましょう。", en: "Let's act quickly." }, accept: ["conduct", "behavior"] },
        { id: "ja-u152l2-goto", type: "vocab", front: "強盗", reading: "gōtō", meaning: "robbery", example: { jp: "銀行に強盗がはいりました。", en: "A robber broke into the bank." }, accept: ["burglary", "robber"] },
        { id: "ja-u152l2-kohai", type: "vocab", front: "後輩", reading: "kōhai", meaning: "junior", example: { jp: "かれはわたしの後輩です。", en: "He is my junior." }, accept: ["junior member", "underclassman"] },
        { id: "ja-u152l2-kofuku", type: "vocab", front: "幸福", reading: "kōfuku", meaning: "happiness", example: { jp: "かぞくといて幸福です。", en: "I'm happy being with my family." }, accept: ["blessedness", "bliss"] },
        { id: "ja-u152l2-kohei", type: "vocab", front: "公平", reading: "kōhei", meaning: "fairness", example: { jp: "あのせんせいはとても公平です。", en: "That teacher is very fair." }, accept: ["impartial", "even-handed"] },
      ],
    },
    {
      id: "ja-u152l3", unit: 152, lesson: 3, title: "N3 vocab 34·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 候補 (candidate), 考慮 (consideration), 越える (to cross), 超える (to exceed), 氷 (ice), 凍る (to freeze).",
      items: [
        { id: "ja-u152l3-koho", type: "vocab", front: "候補", reading: "kōho", meaning: "candidate", example: { jp: "かれは社長の候補です。", en: "He is a candidate for president." }, accept: ["candidacy", "nominee"] },
        { id: "ja-u152l3-koryo", type: "vocab", front: "考慮", reading: "kōryo", meaning: "consideration", example: { jp: "みんなの気もちを考慮します。", en: "I'll take everyone's feelings into consideration." }, accept: ["taking into account"] },
        { id: "ja-u152l3-koeru", type: "vocab", front: "越える", reading: "koeru", meaning: "to cross", example: { jp: "山を越えて町へいきます。", en: "I cross the mountain and go to the town." }, accept: ["to cross over", "to go over"], hint: "越える (こえる) = to cross over (a place). Same reading as 超える (to exceed)." },
        { id: "ja-u152l3-koeru2", type: "vocab", front: "超える", reading: "koeru", meaning: "to exceed", example: { jp: "人数が百人を超えました。", en: "The number of people exceeded one hundred." }, accept: ["to surpass", "to go beyond"], hint: "超える (こえる) = to exceed (a number/limit). Same reading as 越える (to cross)." },
        { id: "ja-u152l3-kori", type: "vocab", front: "氷", reading: "kōri", meaning: "ice", example: { jp: "コップに氷をいれました。", en: "I put ice in the glass." }, accept: ["hail"] },
        { id: "ja-u152l3-koru", type: "vocab", front: "凍る", reading: "kōru", meaning: "to freeze", example: { jp: "ふゆに池が凍ります。", en: "The pond freezes in winter." }, accept: ["to be frozen", "to congeal"] },
      ],
    },
    {
      id: "ja-u152l4", unit: 152, lesson: 4, title: "N3 vocab 34·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 誤解 (misunderstanding), 語学 (language study), 呼吸 (breath), 故郷 (hometown), 極 (quite), 国語 (national language).",
      items: [
        { id: "ja-u152l4-gokai", type: "vocab", front: "誤解", reading: "gokai", meaning: "misunderstanding", example: { jp: "それはただの誤解です。", en: "That is just a misunderstanding." }, accept: ["misconception"] },
        { id: "ja-u152l4-gogaku", type: "vocab", front: "語学", reading: "gogaku", meaning: "language study", example: { jp: "わたしは語学がすきです。", en: "I like studying languages." }, accept: ["languages", "linguistics"] },
        { id: "ja-u152l4-kokyu", type: "vocab", front: "呼吸", reading: "kokyū", meaning: "breath", example: { jp: "ゆっくり呼吸してください。", en: "Please breathe slowly." }, accept: ["respiration", "breathing"] },
        { id: "ja-u152l4-kokyo", type: "vocab", front: "故郷", reading: "kokyō", meaning: "hometown", example: { jp: "なつに故郷へかえります。", en: "I return to my hometown in summer." }, accept: ["home town", "birthplace"] },
        { id: "ja-u152l4-goku", type: "vocab", front: "極", reading: "goku", meaning: "quite", example: { jp: "これは極かんたんなもんだいです。", en: "This is a very easy problem." }, accept: ["very", "extremely"] },
        { id: "ja-u152l4-kokugo", type: "vocab", front: "国語", reading: "kokugo", meaning: "national language", example: { jp: "国語のテストはむずかしかったです。", en: "The national-language test was hard." }, accept: ["japanese language", "language arts"] },
      ],
    },
  ],
};
