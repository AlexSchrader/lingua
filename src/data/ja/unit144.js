// Unit 144 — ごい・N3・26 ("N3 vocab 26") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (kanshin 感心/関心, kansō 乾燥/感想, kikai 機械/器械,
// kikan 期間/機関, kigen 期限/機嫌) disambiguated via hints.
export const UNIT144 = {
  id: "ja-u144", lang: "ja", title: "ごい・N3・26", order: 144, stage: "b1",
  lessons: [
    {
      id: "ja-u144l1", unit: 144, lesson: 1, title: "N3 vocab 26·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 感心 (admiration), 関心 (concern), 関する (to concern), 完成 (completion), 完全 (perfect), 乾燥 (dry).",
      items: [
        { id: "ja-u144l1-kanshin", type: "vocab", front: "感心", reading: "kanshin", meaning: "admiration", example: { jp: "かれのちからに感心しました。", en: "I was impressed by his strength." }, accept: ["being impressed"], hint: "感心する (かんしんする) = to be impressed / admire. Same reading as 関心 (interest)." },
        { id: "ja-u144l1-kanshin2", type: "vocab", front: "関心", reading: "kanshin", meaning: "concern", example: { jp: "わたしはおんがくに関心があります。", en: "I have an interest in music." }, accept: ["interest"], hint: "関心がある (かんしんがある) = to have an interest in. Same reading as 感心 (admiration)." },
        { id: "ja-u144l1-kansuru", type: "vocab", front: "関する", reading: "kansuru", meaning: "to concern", example: { jp: "これはしごとに関するはなしです。", en: "This is a talk concerning work." }, accept: ["to be related", "to relate to"], hint: "〜に関する (かんする) = concerning / regarding a topic." },
        { id: "ja-u144l1-kansei", type: "vocab", front: "完成", reading: "kansei", meaning: "completion", example: { jp: "あたらしいビルが完成しました。", en: "The new building was completed." }, accept: ["complete", "perfection"], hint: "完成する (かんせいする) = to be completed / finished." },
        { id: "ja-u144l1-kanzen", type: "vocab", front: "完全", reading: "kanzen", meaning: "perfect", example: { jp: "しゅくだいを完全にわすれました。", en: "I completely forgot my homework." }, accept: ["complete", "completeness"], hint: "完全な (かんぜんな) = perfect / complete; 完全に = completely." },
        { id: "ja-u144l1-kanso", type: "vocab", front: "乾燥", reading: "kansō", meaning: "dry", example: { jp: "ふゆはくうきが乾燥します。", en: "In winter the air gets dry." }, accept: ["arid", "dehydrated"], hint: "乾燥する (かんそうする) = to become dry. Same reading as 感想 (impressions)." },
      ],
    },
    {
      id: "ja-u144l2", unit: 144, lesson: 2, title: "N3 vocab 26·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 感想 (impressions), 感動 (moved), 監督 (supervision), 管理 (control), 完了 (completion), 関連 (relation).",
      items: [
        { id: "ja-u144l2-kanso2", type: "vocab", front: "感想", reading: "kansō", meaning: "impressions", example: { jp: "えいがの感想をおしえてください。", en: "Please tell me your impressions of the movie." }, accept: ["thoughts"], hint: "感想 (かんそう) = one's impressions / thoughts. Same reading as 乾燥 (dry)." },
        { id: "ja-u144l2-kando", type: "vocab", front: "感動", reading: "kandō", meaning: "moved", example: { jp: "そのはなしに感動しました。", en: "I was deeply moved by that story." }, accept: ["being deeply moved", "excitement"], hint: "感動する (かんどうする) = to be deeply moved / touched." },
        { id: "ja-u144l2-kantoku", type: "vocab", front: "監督", reading: "kantoku", meaning: "supervision", example: { jp: "あのえいがの監督はゆうめいです。", en: "The director of that movie is famous." }, accept: ["director", "control"], hint: "監督 (かんとく) = supervision; also a (movie/team) director or coach." },
        { id: "ja-u144l2-kanri", type: "vocab", front: "管理", reading: "kanri", meaning: "control", example: { jp: "てんちょうがみせを管理しています。", en: "The manager manages the shop." }, accept: ["management"], hint: "管理する (かんりする) = to manage / administer." },
        { id: "ja-u144l2-kanryo", type: "vocab", front: "完了", reading: "kanryō", meaning: "completion", example: { jp: "しごとが完了しました。", en: "The work is complete." }, accept: ["conclusion"], hint: "完了する (かんりょうする) = to be completed / finished." },
        { id: "ja-u144l2-kanren", type: "vocab", front: "関連", reading: "kanren", meaning: "relation", example: { jp: "このニュースに関連するしゃしんです。", en: "This is a photo related to the news." }, accept: ["connection", "relevance"], hint: "〜に関連する (かんれんする) = to be related / connected to." },
      ],
    },
    {
      id: "ja-u144l3", unit: 144, lesson: 3, title: "N3 vocab 26·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 議員 (lawmaker), 記憶 (memory), 気温 (temperature), 機械 (machine), 器械 (instrument), 議会 (diet).",
      items: [
        { id: "ja-u144l3-giin", type: "vocab", front: "議員", reading: "giin", meaning: "lawmaker", example: { jp: "かれはゆうめいな議員です。", en: "He is a famous Diet member." }, accept: ["diet member", "legislator"], hint: "議員 (ぎいん) = a member of a legislature (a Diet member)." },
        { id: "ja-u144l3-kioku", type: "vocab", front: "記憶", reading: "kioku", meaning: "memory", example: { jp: "こどものころの記憶があります。", en: "I have memories of my childhood." }, accept: ["recollection", "remembrance"], hint: "記憶 (きおく) = memory / recollection." },
        { id: "ja-u144l3-kion", type: "vocab", front: "気温", reading: "kion", meaning: "temperature", example: { jp: "きょうは気温がたかいです。", en: "The temperature is high today." }, accept: ["air temperature"], hint: "気温 (きおん) = air temperature (weather) — not used for objects." },
        { id: "ja-u144l3-kikai", type: "vocab", front: "機械", reading: "kikai", meaning: "machine", example: { jp: "こうじょうにおおきな機械があります。", en: "The factory has big machines." }, accept: ["machinery"], hint: "機械 (きかい) = machine. Same reading as 器械 (small instrument) and 機会 (chance)." },
        { id: "ja-u144l3-kikai2", type: "vocab", front: "器械", reading: "kikai", meaning: "instrument", example: { jp: "びょういんの器械でけんさします。", en: "They examine me with hospital instruments." }, accept: ["apparatus"], hint: "器械 (きかい) = a small instrument / apparatus. Same reading as 機械 (large machine)." },
        { id: "ja-u144l3-gikai", type: "vocab", front: "議会", reading: "gikai", meaning: "diet", example: { jp: "きょう議会がひらかれます。", en: "The assembly is held today." }, accept: ["congress", "parliament"], hint: "議会 (ぎかい) = a legislative assembly (the Diet / parliament)." },
      ],
    },
    {
      id: "ja-u144l4", unit: 144, lesson: 4, title: "N3 vocab 26·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 期間 (period), 機関 (engine), 企業 (business), 効く (to work), 期限 (deadline), 機嫌 (mood).",
      items: [
        { id: "ja-u144l4-kikan", type: "vocab", front: "期間", reading: "kikan", meaning: "period", example: { jp: "なつやすみの期間はながいです。", en: "The summer vacation period is long." }, accept: ["term", "span"], hint: "期間 (きかん) = a period / span of time. Same reading as 機関 (organization)." },
        { id: "ja-u144l4-kikan2", type: "vocab", front: "機関", reading: "kikan", meaning: "engine", example: { jp: "この機関はけんきゅうをしています。", en: "This organization does research." }, accept: ["institution", "organization"], hint: "機関 (きかん) = an organization / institution; also an engine. Same reading as 期間 (period)." },
        { id: "ja-u144l4-kigyo", type: "vocab", front: "企業", reading: "kigyō", meaning: "business", example: { jp: "おおきな企業ではたらきたいです。", en: "I want to work at a big company." }, accept: ["company", "enterprise"], hint: "企業 (きぎょう) = a company / enterprise / business." },
        { id: "ja-u144l4-kiku", type: "vocab", front: "効く", reading: "kiku", meaning: "to work", example: { jp: "このくすりはよく効きます。", en: "This medicine works well." }, accept: ["to be effective", "effective"], hint: "効く (きく) = to be effective / take effect (medicine, etc.)." },
        { id: "ja-u144l4-kigen", type: "vocab", front: "期限", reading: "kigen", meaning: "deadline", example: { jp: "レポートの期限はあしたです。", en: "The report's deadline is tomorrow." }, accept: ["term", "time limit"], hint: "期限 (きげん) = a deadline / time limit. Same reading as 機嫌 (mood)." },
        { id: "ja-u144l4-kigen2", type: "vocab", front: "機嫌", reading: "kigen", meaning: "mood", example: { jp: "ちちはきょう機嫌がいいです。", en: "My father is in a good mood today." }, accept: ["temper", "humor"], hint: "機嫌がいい/わるい (きげん) = to be in a good / bad mood. Same reading as 期限 (deadline)." },
      ],
    },
  ],
};
