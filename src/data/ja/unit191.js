// Unit 191 — ごい・N3・73 ("N3 vocab 73") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (jitai ×2, shibō ×2, shiyō ×2, joshi ×3, shinkō ×3)
// disambiguated via hints.
export const UNIT191 = {
  id: "ja-u191", lang: "ja", title: "ごい・N3・73", order: 191, stage: "b1",
  lessons: [
    {
      id: "ja-u191l1", unit: 191, lesson: 1, title: "N3 vocab 73·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 磁器 (porcelain), 自己 (self), 字体 (font), 辞退 (refusal), 視点 (viewpoint), 脂肪 (fat).",
      items: [
        { id: "ja-u191l1-jiki3", type: "vocab", front: "磁器", reading: "jiki", meaning: "porcelain", example: { jp: "この磁器のさらはたかいです。", en: "This porcelain plate is expensive." }, accept: ["china"] },
        { id: "ja-u191l1-jiko", type: "vocab", front: "自己", reading: "jiko", meaning: "self", example: { jp: "自己のいけんをいいます。", en: "I state my own opinion." }, accept: ["oneself", "one's own"] },
        { id: "ja-u191l1-jitai", type: "vocab", front: "字体", reading: "jitai", meaning: "font", example: { jp: "この字体はよみやすいです。", en: "This font is easy to read." }, accept: ["lettering", "typeface"], hint: "字体 (じたい) = font / typeface; same reading as 辞退 (refusal)." },
        { id: "ja-u191l1-jitai2", type: "vocab", front: "辞退", reading: "jitai", meaning: "refusal", example: { jp: "さそいを辞退しました。", en: "I declined the invitation." }, accept: ["declining", "turning down"], hint: "辞退 (じたい) = to decline politely; same reading as 字体 (font)." },
        { id: "ja-u191l1-shiten2", type: "vocab", front: "視点", reading: "shiten", meaning: "viewpoint", example: { jp: "あたらしい視点でかんがえます。", en: "I think from a new viewpoint." }, accept: ["point of view", "perspective"] },
        { id: "ja-u191l1-shibo2", type: "vocab", front: "脂肪", reading: "shibō", meaning: "fat", example: { jp: "このにくは脂肪がおおいです。", en: "This meat has a lot of fat." }, accept: ["grease", "body fat"], hint: "脂肪 (しぼう) = body fat; same reading as 志望 (aspiration)." },
      ],
    },
    {
      id: "ja-u191l2", unit: 191, lesson: 2, title: "N3 vocab 73·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 志望 (wish), 衆 (masses), 修飾 (ornamentation), 私用 (personal use), 仕様 (specification), 生涯 (lifetime).",
      items: [
        { id: "ja-u191l2-shibo3", type: "vocab", front: "志望", reading: "shibō", meaning: "wish", example: { jp: "いしゃになるのが志望です。", en: "My ambition is to become a doctor." }, accept: ["desire", "ambition"], hint: "志望 (しぼう) = aspiration / career wish; same reading as 脂肪 (fat)." },
        { id: "ja-u191l2-shu2", type: "vocab", front: "衆", reading: "shū", meaning: "masses", example: { jp: "おおくの衆があつまりました。", en: "A large crowd gathered." }, accept: ["people", "crowd"] },
        { id: "ja-u191l2-shushoku2", type: "vocab", front: "修飾", reading: "shūshoku", meaning: "modification", example: { jp: "この字が名詞を修飾します。", en: "This word modifies the noun." }, accept: ["ornamentation", "embellishment"] },
        { id: "ja-u191l2-shiyo2", type: "vocab", front: "私用", reading: "shiyō", meaning: "personal use", example: { jp: "私用でかいしゃをやすみました。", en: "I took the day off work for personal reasons." }, accept: ["private use", "private business"], hint: "私用 (しよう) = personal / private use; same reading as 仕様 (specification)." },
        { id: "ja-u191l2-shiyo3", type: "vocab", front: "仕様", reading: "shiyō", meaning: "specification", example: { jp: "この仕様はふくざつです。", en: "This specification is complicated." }, accept: ["method", "way"], hint: "仕様 (しよう) = spec / way of doing; same reading as 私用 (personal use)." },
        { id: "ja-u191l2-shogai2", type: "vocab", front: "生涯", reading: "shōgai", meaning: "lifetime", example: { jp: "このことは生涯わすれません。", en: "I will never forget this my whole life." }, accept: ["one's life", "lifelong"] },
      ],
    },
    {
      id: "ja-u191l3", unit: 191, lesson: 3, title: "N3 vocab 73·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 上司 (boss), 正体 (true form), 照明 (lighting), 女史 (ms.), 助詞 (particle), 進行 (progress).",
      items: [
        { id: "ja-u191l3-joshi2", type: "vocab", front: "上司", reading: "jōshi", meaning: "boss", example: { jp: "上司にそうだんします。", en: "I consult my boss." }, accept: ["superior", "one's boss"], hint: "上司 (じょうし) = one's superior; longer vowel than 女史・助詞 (じょし)." },
        { id: "ja-u191l3-shotai", type: "vocab", front: "正体", reading: "shōtai", meaning: "true form", example: { jp: "かれの正体をしりました。", en: "I found out his true identity." }, accept: ["true identity", "true character"] },
        { id: "ja-u191l3-shomei3", type: "vocab", front: "照明", reading: "shōmei", meaning: "lighting", example: { jp: "へやの照明をつけます。", en: "I turn on the room's lighting." }, accept: ["illumination"] },
        { id: "ja-u191l3-joshi3", type: "vocab", front: "女史", reading: "joshi", meaning: "ms.", example: { jp: "たなか女史がきました。", en: "Ms. Tanaka came." }, accept: ["madam"], hint: "女史 (じょし) = Ms. (honorific for a woman); same reading as 助詞 (particle)." },
        { id: "ja-u191l3-joshi4", type: "vocab", front: "助詞", reading: "joshi", meaning: "particle", example: { jp: "にほんごの助詞はむずかしいです。", en: "Japanese particles are difficult." }, accept: ["postposition"], hint: "助詞 (じょし) = grammatical particle; same reading as 女史 (Ms.)." },
        { id: "ja-u191l3-shinko2", type: "vocab", front: "進行", reading: "shinkō", meaning: "progress", example: { jp: "しごとが進行しています。", en: "The work is progressing." }, accept: ["advance", "proceeding"], hint: "進行 (しんこう) = progress / advance; same reading as 新興・振興." },
      ],
    },
    {
      id: "ja-u191l4", unit: 191, lesson: 4, title: "N3 vocab 73·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 新興 (rising), 振興 (promotion), 申告 (declaration), 真理 (truth), 水洗 (flushing), 擦る (to rub).",
      items: [
        { id: "ja-u191l4-shinko3", type: "vocab", front: "新興", reading: "shinkō", meaning: "rising", example: { jp: "新興のかいしゃがおおいです。", en: "There are many emerging companies." }, accept: ["developing", "emergent"], hint: "新興 (しんこう) = newly rising; same reading as 進行・振興." },
        { id: "ja-u191l4-shinko4", type: "vocab", front: "振興", reading: "shinkō", meaning: "promotion", example: { jp: "まちのかんこうを振興します。", en: "We promote the town's tourism." }, accept: ["encouragement", "fostering"], hint: "振興 (しんこう) = promotion (of industry etc.); same reading as 進行・新興." },
        { id: "ja-u191l4-shinkoku2", type: "vocab", front: "申告", reading: "shinkoku", meaning: "declaration", example: { jp: "けっかを申告します。", en: "I report the result." }, accept: ["report", "statement"] },
        { id: "ja-u191l4-shinri2", type: "vocab", front: "真理", reading: "shinri", meaning: "truth", example: { jp: "これはじんせいの真理です。", en: "This is a truth of life." }, accept: ["verity"] },
        { id: "ja-u191l4-suisen2", type: "vocab", front: "水洗", reading: "suisen", meaning: "flushing", example: { jp: "水洗トイレをつかいます。", en: "I use a flush toilet." }, accept: ["water washing"] },
        { id: "ja-u191l4-suru3", type: "vocab", front: "擦る", reading: "suru", meaning: "to rub", example: { jp: "さむいのでてを擦ります。", en: "It's cold, so I rub my hands." }, accept: ["to chafe", "to scrub"], hint: "擦る (する) = to rub; same reading as する (to do)." },
      ],
    },
  ],
};
