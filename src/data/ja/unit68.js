// Unit 68 — かんじ・しぜん ("Kanji — nature, science & information") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 kanji hooking onto the B1 vocab: 自然→しぜん, 環境→かんきょう, 資源→しげん, 災害→さいがい,
// 科学→かがく, 技術→ぎじゅつ, 実験→じっけん, 結果→けっか, 情報→じょうほう, 知識→ちしき…
// KanjiVG strokes required (fetched via KANJI_N3). Naturalness → native review.
export const UNIT68 = {
  id: "ja-u68", lang: "ja", title: "かんじ・しぜん", order: 68, stage: "b1",
  lessons: [
    {
      id: "ja-u68l1", unit: 68, lesson: 1, title: "Nature", cefr: "B1", dominantMode: "recall",
      canDo: "Read nature kanji: 自 然 境 環 星 池.",
      items: [
        { id: "ja-u68l1-ji", type: "kanji", front: "自", reading: "ji", meaning: "self", example: { jp: "自分でします。", en: "I do it myself." }, accept: ["oneself", "-self"], hint: "自 = self. In 自分 (じぶん, oneself), 自然 (しぜん, nature), 自由 (じゆう, freedom)." },
        { id: "ja-u68l1-zen", type: "kanji", front: "然", reading: "zen", meaning: "nature / so", example: { jp: "自然がすきです。", en: "I like nature." }, accept: ["as it is"], hint: "然 = nature / so. In 自然 (しぜん, nature), 全然 (ぜんぜん, not at all)." },
        { id: "ja-u68l1-kyo", type: "kanji", front: "境", reading: "kyō", meaning: "boundary", example: { jp: "環境をまもります。", en: "We protect the environment." }, accept: ["border", "region"], hint: "境 = boundary. In 環境 (かんきょう, environment), 国境 (border). Kun: さかい." },
        { id: "ja-u68l1-kan", type: "kanji", front: "環", reading: "kan", meaning: "ring / cycle", example: { jp: "地球の環境です。", en: "It's the Earth's environment." }, accept: ["loop", "surround"], hint: "環 = ring / cycle. In 環境 (かんきょう, environment), 循環 (じゅんかん, circulation)." },
        { id: "ja-u68l1-hoshi", type: "kanji", front: "星", reading: "hoshi", meaning: "star", example: { jp: "よる、星を見ます。", en: "At night I look at the stars." }, accept: ["stars"], hint: "星 = star. 星 (ほし) = a star. 日 (sun) over 生 (life)." },
        { id: "ja-u68l1-ike", type: "kanji", front: "池", reading: "ike", meaning: "pond", example: { jp: "池にさかながいます。", en: "There are fish in the pond." }, accept: ["ponds"], hint: "池 = pond. 池 (いけ) = a pond. 氵 (water) + 也." },
      ],
    },
    {
      id: "ja-u68l2", unit: 68, lesson: 2, title: "Resources & disasters", cefr: "B1", dominantMode: "recall",
      canDo: "Read environment kanji: 資 源 災 害 石 素.",
      items: [
        { id: "ja-u68l2-shi", type: "kanji", front: "資", reading: "shi", meaning: "resources / capital", example: { jp: "日本の資源です。", en: "It's Japan's resources." }, accept: ["funds", "materials"], hint: "資 = resources / capital. In 資源 (しげん, resources), 資料 (しりょう, materials)." },
        { id: "ja-u68l2-gen", type: "kanji", front: "源", reading: "gen", meaning: "source / origin", example: { jp: "資源をたいせつにします。", en: "We value our resources." }, accept: ["root", "wellspring"], hint: "源 = source / origin. In 資源 (しげん, resources), 起源 (きげん, origin)." },
        { id: "ja-u68l2-sai", type: "kanji", front: "災", reading: "sai", meaning: "disaster", example: { jp: "災害にきをつけます。", en: "I watch out for disasters." }, accept: ["calamity"], hint: "災 = disaster. In 災害 (さいがい, disaster), 火災 (かさい, fire)." },
        { id: "ja-u68l2-gai", type: "kanji", front: "害", reading: "gai", meaning: "harm", example: { jp: "公害がもんだいです。", en: "Pollution is a problem." }, accept: ["damage", "injury"], hint: "害 = harm. In 災害 (さいがい, disaster), 公害 (こうがい, pollution)." },
        { id: "ja-u68l2-ishi", type: "kanji", front: "石", reading: "ishi", meaning: "stone", example: { jp: "大きい石です。", en: "It's a big stone." }, accept: ["rock", "stones"], hint: "石 = stone. 石 (いし) = a stone. In 石油 (せきゆ, petroleum)." },
        { id: "ja-u68l2-so", type: "kanji", front: "素", reading: "so", meaning: "element / plain", example: { jp: "素材をえらびます。", en: "I choose the material." }, accept: ["basic", "raw"], hint: "素 = element / plain. In 素材 (そざい, material), 要素 (ようそ, element)." },
      ],
    },
    {
      id: "ja-u68l3", unit: 68, lesson: 3, title: "Science", cefr: "B1", dominantMode: "recall",
      canDo: "Read science kanji: 科 技 術 験 果 効.",
      items: [
        { id: "ja-u68l3-ka", type: "kanji", front: "科", reading: "ka", meaning: "department / branch", example: { jp: "科学がすきです。", en: "I like science." }, accept: ["subject", "section"], hint: "科 = department / branch. In 科学 (かがく, science), 内科 (ないか, internal medicine)." },
        { id: "ja-u68l3-gi", type: "kanji", front: "技", reading: "gi", meaning: "skill / technique", example: { jp: "新しい技術です。", en: "It's new technology." }, accept: ["craft", "art"], hint: "技 = skill / technique. In 技術 (ぎじゅつ, technology), 競技 (きょうぎ, sports event)." },
        { id: "ja-u68l3-jutsu", type: "kanji", front: "術", reading: "jutsu", meaning: "technique / art", example: { jp: "びょういんで手術をします。", en: "I have surgery at the hospital." }, accept: ["method", "means"], hint: "術 = technique / art. In 技術 (ぎじゅつ, technology), 手術 (しゅじゅつ, surgery), 美術 (びじゅつ, art)." },
        { id: "ja-u68l3-ken", type: "kanji", front: "験", reading: "ken", meaning: "test / verify", example: { jp: "実験の結果です。", en: "It's the experiment's result." }, accept: ["examine", "effect"], hint: "験 = test / verify. In 実験 (じっけん, experiment), 経験 (けいけん, experience), 試験 (しけん, exam)." },
        { id: "ja-u68l3-ka2", type: "kanji", front: "果", reading: "ka", meaning: "fruit / result", example: { jp: "しけんの結果です。", en: "It's the exam result." }, accept: ["outcome", "achieve"], hint: "果 = fruit / result. In 結果 (けっか, result), 効果 (こうか, effect). Kun: 果物 (くだもの, fruit)." },
        { id: "ja-u68l3-ko", type: "kanji", front: "効", reading: "kō", meaning: "effect", example: { jp: "くすりの効果です。", en: "It's the medicine's effect." }, accept: ["efficacy", "valid"], hint: "効 = effect. In 効果 (こうか, effect), 有効 (ゆうこう, valid)." },
      ],
    },
    {
      id: "ja-u68l4", unit: 68, lesson: 4, title: "Knowledge & information", cefr: "B1", dominantMode: "recall",
      canDo: "Read information kanji: 論 識 認 確 報 情.",
      items: [
        { id: "ja-u68l4-ron", type: "kanji", front: "論", reading: "ron", meaning: "theory / argue", example: { jp: "みんなで議論します。", en: "Everyone discusses it." }, accept: ["thesis", "debate"], hint: "論 = theory / argue. In 議論 (ぎろん, debate), 論文 (ろんぶん, thesis)." },
        { id: "ja-u68l4-shiki", type: "kanji", front: "識", reading: "shiki", meaning: "knowledge / discern", example: { jp: "知識があります。", en: "I have knowledge." }, accept: ["awareness"], hint: "識 = knowledge / discern. In 知識 (ちしき, knowledge), 常識 (じょうしき, common sense)." },
        { id: "ja-u68l4-nin", type: "kanji", front: "認", reading: "nin", meaning: "recognize / admit", example: { jp: "じかんを確認します。", en: "I confirm the time." }, accept: ["acknowledge", "approve"], hint: "認 = recognize / admit. In 確認 (かくにん, confirmation), 認める (みとめる, to acknowledge)." },
        { id: "ja-u68l4-kaku", type: "kanji", front: "確", reading: "kaku", meaning: "certain", example: { jp: "あんぜんを確認します。", en: "I check that it's safe." }, accept: ["sure", "definite"], hint: "確 = certain. In 確認 (かくにん, confirmation), 正確 (せいかく, accurate). Kun: たしか." },
        { id: "ja-u68l4-ho", type: "kanji", front: "報", reading: "hō", meaning: "report / news", example: { jp: "新しい情報です。", en: "It's new information." }, accept: ["inform", "reward"], hint: "報 = report / news. In 情報 (じょうほう, information), 報告 (ほうこく, report)." },
        { id: "ja-u68l4-jo", type: "kanji", front: "情", reading: "jō", meaning: "feeling / circumstances", example: { jp: "情報をあつめます。", en: "I gather information." }, accept: ["emotion", "situation"], hint: "情 = feeling / circumstances. In 情報 (じょうほう, information), 感情 (かんじょう, emotion)." },
      ],
    },
  ],
};
