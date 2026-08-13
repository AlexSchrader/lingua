// Unit 100 — かんじ・こころ (Heart and mind kanji) — B1 / JLPT N3
// Strand A, first B1 character unit. N3 glyphs for feeling and mind — nearly all of
// them carry 心 or its standing form 忄, which is the hook the hints lean on.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards, the band-standard shape.
// The compounds are built from glyphs this unit teaches, so the word is the payoff
// for the four cards before it. lang/unit/lesson are stamped in src/data/index.js.
export const UNIT100 = {
  id: "ja-u100",
  lang: "ja",
  title: "かんじ・こころ",
  order: 100,
  stage: "b1",
  lessons: [
    {
      id: "ja-u100l1",
      unit: 100,
      lesson: 1,
      title: "Feelings",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 愛 (love), 喜 (joy), 悲 (sadness), 怒 (anger), and the words 愛情 and 同情.",
      items: [
        { id: "ja-u100l1-ai", type: "kanji", front: "愛", reading: "ai", meaning: "love", example: { jp: "家族を 愛する 気持ちは、いつも 心の 中に あります。", en: "The feeling of loving your family is always there in your heart." }, accept: ["affection", "to love"], hint: "愛 = love. Look in the middle: 心 (heart) is sitting inside the character. 愛情 = affection." },
        { id: "ja-u100l1-yorokobi", type: "kanji", front: "喜", reading: "yorokobi", meaning: "joy", example: { jp: "毎日の 小さな 喜びを 大切に すると、心が 明るく なります。", en: "If you value the small joys of each day, your heart grows brighter." }, accept: ["delight", "gladness", "to be glad"], hint: "喜 = joy. 喜ぶ = to be glad; 大喜び = overjoyed." },
        { id: "ja-u100l1-kanashimi", type: "kanji", front: "悲", reading: "kanashimi", meaning: "sadness", example: { jp: "悲しい 話を 聞いて、みんな しずかに なりました。", en: "Everyone went quiet after hearing the sad story." }, accept: ["sorrow", "sad", "grief"], hint: "悲 = sad — 非 (not) sitting on 心 (heart): the heart set against how things are. 悲しい = sad." },
        { id: "ja-u100l1-ikari", type: "kanji", front: "怒", reading: "ikari", meaning: "anger", example: { jp: "父は しずかな 人で、一度も 怒った ことが ありません。", en: "My father is a calm person and has never once got angry." }, accept: ["rage", "to get angry", "fury"], hint: "怒 = anger — 心 (heart) underneath again, this time under pressure. 怒る = to get angry." },
        { id: "ja-u100l1-aijo", type: "vocab", front: "愛情", reading: "aijō", meaning: "affection", example: { jp: "母の 愛情は、いつも 心の 中に あります。", en: "My mother's affection is always there in my heart." }, accept: ["love", "warm feeling"], hint: "愛 + 情 — the two heart-words of this lesson, joined." },
        { id: "ja-u100l1-dojo", type: "vocab", front: "同情", reading: "dōjō", meaning: "sympathy", example: { jp: "その 話を 聞いて、みんな 同情しました。", en: "Everyone sympathised when they heard that story." }, accept: ["compassion", "pity", "fellow feeling"] },
      ],
    },
    {
      id: "ja-u100l2",
      unit: 100,
      lesson: 2,
      title: "Tears and worry",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 泣 (to cry), 悩 (worry), 念 (thought), 想 (to imagine), and the words 夢中 and 悪夢.",
      items: [
        { id: "ja-u100l2-naku", type: "kanji", front: "泣", reading: "naku", meaning: "to cry", example: { jp: "子どもが 泣いて いましたが、母が 来ると すぐに 元気に なりました。", en: "The child was crying, but cheered up as soon as their mother came." }, accept: ["to weep", "crying", "tears"], hint: "泣 = cry — the water radical 氵 next to 立 (stand): standing there in tears." },
        { id: "ja-u100l2-nayami", type: "kanji", front: "悩", reading: "nayami", meaning: "worry", example: { jp: "一人で 悩まないで、だれかに 話して ください。", en: "Don't worry about it alone — please talk to someone." }, accept: ["trouble", "to be troubled", "distress"], hint: "悩 = a trouble you carry. The 忄 on the left is 心 (heart) stood on its side — it marks most feeling kanji." },
        { id: "ja-u100l2-nen", type: "kanji", front: "念", reading: "nen", meaning: "thought", example: { jp: "もう 一度、念の ため たしかめて から 出かけます。", en: "I'll check once more just in case, then head out." }, accept: ["care", "attention", "wish"], hint: "念 = a thought held in mind — 今 (now) over 心 (heart). 記念 = commemoration, 残念 = a shame." },
        { id: "ja-u100l2-so", type: "kanji", front: "想", reading: "sō", meaning: "to imagine", example: { jp: "その 話は 私の 想像とは ぜんぜん ちがいました。", en: "That story was completely different from what I had imagined." }, accept: ["idea", "thought", "conception"], hint: "想 = picture in the mind — 相 (each other) over 心. 想像 = imagination, 予想 = forecast." },
        { id: "ja-u100l2-muchu", type: "vocab", front: "夢中", reading: "muchū", meaning: "absorbed in", example: { jp: "弟は ゲームに 夢中で、私の 話を 聞いて いません。", en: "My younger brother is absorbed in his game and isn't listening to me." }, accept: ["engrossed", "crazy about", "lost in"], hint: "夢 (dream) + 中 (inside) — you are inside a dream, i.e. you notice nothing else." },
        { id: "ja-u100l2-akumu", type: "vocab", front: "悪夢", reading: "akumu", meaning: "nightmare", example: { jp: "ひどい 悪夢を 見て、夜中に 起きました。", en: "I had a frightening nightmare and woke in the night." }, accept: ["bad dream"] },
      ],
    },
    {
      id: "ja-u100l3",
      unit: 100,
      lesson: 3,
      title: "Mind and belief",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 情 (feeling), 夢 (dream), 信 (trust), 尊 (respect), and the words 信用 and 信念.",
      items: [
        { id: "ja-u100l3-jo", type: "kanji", front: "情", reading: "jō", meaning: "feeling", example: { jp: "あの 人は 情に あつくて、いつも 人を たすけます。", en: "That person is warm-hearted and always helps people." }, accept: ["emotion", "warmth", "circumstances"], hint: "情 = feeling — 忄 (heart) again. 感情 = emotion, 情に あつい = warm-hearted; 情報 = information." },
        { id: "ja-u100l3-yume", type: "kanji", front: "夢", reading: "yume", meaning: "dream", example: { jp: "小さい ころの 夢は、学校の 先生に なる ことでした。", en: "My childhood dream was to become a school teacher." }, accept: ["a dream", "aspiration"], hint: "夢 = dream — both the one you have asleep and the one you work towards, exactly like English." },
        { id: "ja-u100l3-shin", type: "kanji", front: "信", reading: "shin", meaning: "trust", example: { jp: "友だちの ことばを 信じて、待つ ことに しました。", en: "I trusted my friend's word and decided to wait." }, accept: ["belief", "to believe", "faith"], hint: "信 = trust — 人 (person) beside 言 (word): someone who stands by what they say." },
        { id: "ja-u100l3-son", type: "kanji", front: "尊", reading: "son", meaning: "respect", example: { jp: "あいての 気持ちを 尊重するのは、とても 大切な ことです。", en: "Respecting the other person's feelings is what matters." }, accept: ["to revere", "esteem", "precious"], hint: "尊 = hold in high regard. 尊重する = to respect someone's wishes; 尊敬 = respect for a person." },
        { id: "ja-u100l3-shinyo", type: "vocab", front: "信用", reading: "shinyō", meaning: "credit", example: { jp: "一度 うそを つくと、信用を なくします。", en: "Tell one lie and you lose people's trust." }, accept: ["trust", "confidence", "reliance"] },
        { id: "ja-u100l3-shinnen", type: "vocab", front: "信念", reading: "shinnen", meaning: "conviction", example: { jp: "自分の 信念を 持って いる 人は、強いです。", en: "A person who holds their own convictions is strong." }, accept: ["belief", "firm belief", "principle"], hint: "信 (trust) + 念 (thought) — a thought you trust enough to stand on." },
      ],
    },
    {
      id: "ja-u100l4",
      unit: 100,
      lesson: 4,
      title: "Spirit and life",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 欲 (desire), 神 (god), 精 (spirit), 命 (life), and the words 神話 and 生命.",
      items: [
        { id: "ja-u100l4-yoku", type: "kanji", front: "欲", reading: "yoku", meaning: "desire", example: { jp: "食欲が ない ときは、あたたかい ものを 食べます。", en: "When I have no appetite I eat something warm." }, accept: ["want", "greed", "appetite"], hint: "欲 = wanting. 食欲 = appetite, 欲しい = wanted. 谷 (valley) + 欠 (lack) — an empty space asking to be filled." },
        { id: "ja-u100l4-kami", type: "kanji", front: "神", reading: "kami", meaning: "god", example: { jp: "山の 上に 古い 神社が あって、毎年 おまつりが あります。", en: "There's an old shrine up the mountain, and a festival every year." }, accept: ["deity", "spirit", "divine"], hint: "神 = god — the 礻 radical marks anything to do with worship. 神社 = shrine." },
        { id: "ja-u100l4-sei", type: "kanji", front: "精", reading: "sei", meaning: "spirit", example: { jp: "毎日 元気で いるには、精神も 体も 大切です。", en: "To stay well day to day, both mind and body matter." }, accept: ["energy", "refined", "vitality"], hint: "精 = refined energy. 精神 = the mind/spirit, 精一杯 = with everything you have." },
        { id: "ja-u100l4-inochi", type: "kanji", front: "命", reading: "inochi", meaning: "life", example: { jp: "命は 一つ しか ありませんから、体を 大切に して ください。", en: "You only have one life, so please take care of your body." }, accept: ["a life", "fate", "command"], hint: "命 = life. Also 'command' — 命令. The same character carries what you are given and what you are told." },
        { id: "ja-u100l4-shinwa", type: "vocab", front: "神話", reading: "shinwa", meaning: "myth", example: { jp: "この 山には 古い 神話が のこって います。", en: "An old myth survives about this mountain." }, accept: ["legend", "mythology"] },
        { id: "ja-u100l4-seimei", type: "vocab", front: "生命", reading: "seimei", meaning: "life (biological)", example: { jp: "生命は 一つ しか ありませんから、大切に します。", en: "You only have one life, so I look after it." }, accept: ["a life", "living things"], hint: "生命 is life as a thing that exists; 命 alone is the life you were given." },
      ],
    },
  ],
};
