// Unit 161 — ニュアンス・ていど (Nuance and degree) — B2 / JLPT N2
// Strand B. B1's u103 gave the blunt comparatives; this is the fine grain — the
// adverbs that decide whether a claim sounds measured or overblown. Most of these
// are function words, so the example sentence carries the meaning, not the gloss.
// Mixed script per the u156 header; all kanji verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT161 = {
  id: "ja-u161",
  lang: "ja",
  title: "ニュアンス・ていど",
  order: 161,
  stage: "b2",
  lessons: [
    {
      id: "ja-u161l1",
      unit: 161,
      lesson: 1,
      title: "Turning it up",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Mark how strong a change or difference is: きわめて ひかくてき いちじるしい きゅうげき じゃっかん たしょう.",
      items: [
        { id: "ja-u161l1-kiwamete", type: "vocab", front: "きわめて", reading: "kiwamete", meaning: "extremely", example: { jp: "きわめて まれな ことですから、ふつうは 考えなくて いいです。", en: "It's an extremely rare case, so normally you needn't consider it." }, accept: ["exceedingly", "highly", "utterly"], hint: "きわめて is written register — reports and news. Say とても in conversation or you sound like a document." },
        { id: "ja-u161l1-hikakuteki", type: "vocab", front: "ひかくてき", reading: "hikakuteki", meaning: "relatively", example: { jp: "この へんは ひかくてき しずかで、住みやすいです。", en: "This area is relatively quiet and easy to live in." }, accept: ["comparatively", "fairly", "on the whole"] },
        { id: "ja-u161l1-ichijirushii", type: "vocab", front: "いちじるしい", reading: "ichijirushii", meaning: "marked", example: { jp: "この 十年で、町の すがたは いちじるしく 変わりました。", en: "Over these ten years the town's appearance has changed markedly." }, drill: { jp: "まちのへんかがいちじるしい。", en: "The change in the town is marked." }, accept: ["striking", "conspicuous", "remarkable"] },
        { id: "ja-u161l1-kyugeki", type: "vocab", front: "きゅうげき", reading: "kyūgeki", meaning: "abrupt", example: { jp: "きゅうげきな へんかには、体が ついて いきません。", en: "The body can't keep up with abrupt change." }, drill: { jp: "きゅうげきに かわりました。", en: "It changed abruptly." }, accept: ["sudden", "sharp", "rapid"] },
        { id: "ja-u161l1-jakkan", type: "vocab", front: "じゃっかん", reading: "jakkan", meaning: "somewhat", example: { jp: "ねだんは じゃっかん 上がりましたが、まだ 買えます。", en: "The price rose somewhat, but it's still affordable." }, accept: ["slightly", "a little", "a certain number"] },
        { id: "ja-u161l1-tasho", type: "vocab", front: "たしょう", reading: "tashō", meaning: "to some extent", example: { jp: "たしょうの ごさは ありますが、けっかは 変わりません。", en: "There's some margin of error, but the result doesn't change." }, accept: ["more or less", "a bit", "somewhat"] },
      ],
    },
    {
      id: "ja-u161l2",
      unit: 161,
      lesson: 2,
      title: "Turning it down",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Keep a claim small and honest: かすか ごくわずか ほどほど てきど かげん たかだか.",
      items: [
        { id: "ja-u161l2-kasuka", type: "vocab", front: "かすか", reading: "kasuka", meaning: "faint", example: { jp: "とおくから かすかな 音が 聞こえて きました。", en: "A faint sound came from far away." }, drill: { jp: "かすかに きこえます。", en: "It is faintly audible." }, accept: ["dim", "slight", "barely there"] },
        { id: "ja-u161l2-gokuwazuka", type: "vocab", front: "ごくわずか", reading: "gokuwazuka", meaning: "the merest fraction", example: { jp: "ごくわずかな 人しか、その 話を 知りません。", en: "Only the merest handful know that story." }, drill: { jp: "ごくわずかに のこりました。", en: "The merest fraction was left." }, accept: ["a tiny amount", "very few", "minimal"] },
        { id: "ja-u161l2-hodohodo", type: "vocab", front: "ほどほど", reading: "hodohodo", meaning: "in moderation", example: { jp: "べんきょうも ほどほどに しないと、体を こわします。", en: "Even studying has to be in moderation, or you'll wreck your health." }, drill: { jp: "ほどほどに します。", en: "I do it in moderation." }, accept: ["moderately", "not overdoing it"] },
        { id: "ja-u161l2-tekido", type: "vocab", front: "てきど", reading: "tekido", meaning: "a moderate amount", example: { jp: "てきどな うんどうは、心にも 体にも いいです。", en: "A moderate amount of exercise is good for mind and body." }, accept: ["moderate", "just right", "appropriate degree"] },
        { id: "ja-u161l2-kagen", type: "vocab", front: "かげん", reading: "kagen", meaning: "the right adjustment", example: { jp: "火の かげんが むずかしくて、なんども しっぱいしました。", en: "Getting the heat right was hard, and I failed several times." }, accept: ["degree", "moderation", "to adjust"], hint: "かげん is the dial, not the amount — 火かげん, 手かげん. 「いいかげん」 is that dial left carelessly anywhere." },
        { id: "ja-u161l2-takadaka", type: "vocab", front: "たかだか", reading: "takadaka", meaning: "at most", example: { jp: "かかっても たかだか 三十分ですから、待ちましょう。", en: "It'll take thirty minutes at most, so let's wait." }, accept: ["at best", "no more than"] },
      ],
    },
    {
      id: "ja-u161l3",
      unit: 161,
      lesson: 3,
      title: "Good enough, or not",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something is passable without praising it: めだつ ややこしい おおまか そこそこ まずまず いまいち.",
      items: [
        { id: "ja-u161l3-medatsu", type: "vocab", front: "めだつ", reading: "medatsu", meaning: "to stand out", example: { jp: "赤い かばんは めだつので、すぐに 見つかります。", en: "A red bag stands out, so it's easy to find." }, accept: ["to be conspicuous", "to catch the eye"] },
        { id: "ja-u161l3-yayakoshii", type: "vocab", front: "ややこしい", reading: "yayakoshii", meaning: "fiddly", example: { jp: "てつづきが ややこしくて、一日 かかりました。", en: "The paperwork was fiddly and took all day." }, accept: ["convoluted", "messy", "complicated"], hint: "ふくざつ is complex by nature; ややこしい is annoying to deal with. A theory is ふくざつ; a form is ややこしい." },
        { id: "ja-u161l3-omaka", type: "vocab", front: "おおまか", reading: "ōmaka", meaning: "broadly", example: { jp: "おおまかな よていだけ 決めて、あとは その 日に 考えます。", en: "We set only a broad plan and decide the rest on the day." }, drill: { jp: "おおまかに きめます。", en: "I decide broadly." }, accept: ["rough", "general", "in outline"] },
        { id: "ja-u161l3-sokosoko", type: "vocab", front: "そこそこ", reading: "sokosoko", meaning: "reasonably", example: { jp: "そこそこ できましたが、まんぞくは して いません。", en: "It went reasonably well, but I'm not satisfied." }, accept: ["fairly", "passably", "so-so"] },
        { id: "ja-u161l3-mazumazu", type: "vocab", front: "まずまず", reading: "mazumazu", meaning: "not bad", example: { jp: "はじめてに しては、まずまずの できでした。", en: "For a first attempt, it was not bad." }, accept: ["tolerable", "acceptable", "all right"] },
        { id: "ja-u161l3-imaichi", type: "vocab", front: "いまいち", reading: "imaichi", meaning: "not quite there", example: { jp: "あじは いまいちでしたが、店の 人は しんせつでした。", en: "The taste wasn't quite there, but the staff were kind." }, accept: ["so-so", "falls short", "underwhelming"], hint: "いまいち is casual and softly negative — literally 'one more (needed)'. Never write it in a report." },
      ],
    },
    {
      id: "ja-u161l4",
      unit: 161,
      lesson: 4,
      title: "Singling out",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Pick one thing out of a set, or do something deliberately: とりわけ なおさら あえて しいて やたら さいてき.",
      items: [
        { id: "ja-u161l4-toriwake", type: "vocab", front: "とりわけ", reading: "toriwake", meaning: "above all", example: { jp: "夏は あついですが、とりわけ 八月が たいへんです。", en: "Summer is hot, but August above all is hard going." }, accept: ["especially", "in particular", "most of all"] },
        { id: "ja-u161l4-naosara", type: "vocab", front: "なおさら", reading: "naosara", meaning: "all the more", example: { jp: "しょうこが 出た 今は、なおさら ひていできません。", en: "Now that evidence has appeared, it's all the more impossible to deny." }, accept: ["even more so", "still more"] },
        { id: "ja-u161l4-aete", type: "vocab", front: "あえて", reading: "aete", meaning: "deliberately (against the grain)", example: { jp: "みんなが さんせいの 中で、あえて はんろんしました。", en: "With everyone in favour, I deliberately argued against." }, accept: ["daringly", "purposely", "going out of one's way"], hint: "あえて marks a choice made AGAINST the easy option — that resistance is the whole meaning." },
        { id: "ja-u161l4-shiite", type: "vocab", front: "しいて", reading: "shiite", meaning: "if pressed", example: { jp: "しいて 言えば、こちらの ほうが 少し いいです。", en: "If pressed, I'd say this one is slightly better." }, accept: ["forcibly", "if I must choose"], hint: "しいて 言えば is the polite way to answer 'which do you prefer?' when you genuinely don't mind." },
        { id: "ja-u161l4-yatara", type: "vocab", front: "やたら", reading: "yatara", meaning: "excessively", example: { jp: "やたらに 買い物を すると、あとで こまります。", en: "Shop excessively and you'll regret it later." }, accept: ["indiscriminately", "randomly", "far too much"] },
        { id: "ja-u161l4-saiteki", type: "vocab", front: "さいてき", reading: "saiteki", meaning: "optimal", example: { jp: "この やり方が、今の じょうきょうでは さいてきです。", en: "This approach is optimal for the current situation." }, accept: ["best suited", "ideal", "most appropriate"] },
      ],
    },
  ],
};
