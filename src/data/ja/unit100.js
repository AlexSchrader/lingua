// Unit 100 — かんじ・こころ (Heart and mind kanji) — B1 / JLPT N3
// Strand A, first B1 character unit. N3 glyphs for feeling and mind — nearly all of
// them carry 心 or its standing form 忄, which is the hook the hints lean on.
// 3 lessons x 6/5/5 = 16 glyphs. The band has 20 character units and 320 untaught
// glyphs with stroke data, so 16 per unit is the split that fits (see the crew board).
// lang/unit/lesson are stamped in src/data/index.js.
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
      title: "Feelings 1",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji for the strong feelings: 愛 (love), 喜 (joy), 悲 (sad), 怒 (anger), 泣 (cry), 悩 (worry).",
      items: [
        { id: "ja-u100l1-ai", type: "kanji", front: "愛", reading: "ai", meaning: "love", example: { jp: "家族を愛する気もちは、いつも心の中にあります。", en: "The feeling of loving your family is always there in your heart." }, accept: ["affection", "to love"], hint: "愛 = love. Look in the middle: 心 (heart) is sitting inside the character. 愛情 = affection." },
        { id: "ja-u100l1-yorokobi", type: "kanji", front: "喜", reading: "yorokobi", meaning: "joy", example: { jp: "毎日の小さな喜びを大切にすると、心が明るくなります。", en: "If you value the small joys of each day, your heart grows brighter." }, accept: ["delight", "gladness", "to be glad"], hint: "喜 = joy. 喜ぶ = to be glad; 大喜び = overjoyed." },
        { id: "ja-u100l1-kanashimi", type: "kanji", front: "悲", reading: "kanashimi", meaning: "sadness", example: { jp: "悲しい話を聞いて、みんな だまって いました。", en: "Everyone fell silent after hearing the sad story." }, accept: ["sorrow", "sad", "grief"], hint: "悲 = sad — 非 (not) sitting on 心 (heart): the heart set against how things are. 悲しい = sad." },
        { id: "ja-u100l1-ikari", type: "kanji", front: "怒", reading: "ikari", meaning: "anger", example: { jp: "父は しずかな人で、一度も怒った ことが ありません。", en: "My father is a calm person and has never once got angry." }, accept: ["rage", "to get angry", "fury"], hint: "怒 = anger — 心 (heart) underneath again, this time under pressure. 怒る = to get angry." },
        { id: "ja-u100l1-naku", type: "kanji", front: "泣", reading: "naku", meaning: "to cry", example: { jp: "子どもが泣いて いましたが、母が来ると すぐに 止まりました。", en: "The child was crying, but stopped as soon as their mother came." }, accept: ["to weep", "crying", "tears"], hint: "泣 = cry — the water radical 氵 next to 立 (stand): standing there in tears." },
        { id: "ja-u100l1-nayami", type: "kanji", front: "悩", reading: "nayami", meaning: "worry", example: { jp: "一人で悩まないで、だれかに 話して ください。", en: "Don't worry about it alone — please talk to someone." }, accept: ["trouble", "to be troubled", "distress"], hint: "悩 = a trouble you carry. The 忄 on the left is 心 (heart) stood on its side — it marks most feeling kanji." },
      ],
    },
    {
      id: "ja-u100l2",
      unit: 100,
      lesson: 2,
      title: "Mind and belief",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji of thought and trust: 念 (thought), 想 (imagine), 情 (feeling), 夢 (dream), 信 (trust).",
      items: [
        { id: "ja-u100l2-nen", type: "kanji", front: "念", reading: "nen", meaning: "thought", example: { jp: "もう一度、念の ため たしかめて から 出かけます。", en: "I'll check once more just in case, then head out." }, accept: ["care", "attention", "wish"], hint: "念 = a thought held in mind — 今 (now) over 心 (heart). 記念 = commemoration, 残念 = a shame." },
        { id: "ja-u100l2-so", type: "kanji", front: "想", reading: "sō", meaning: "to imagine", example: { jp: "子どものころの想い出は、今も よく おぼえて います。", en: "I still remember the memories of my childhood well." }, accept: ["idea", "thought", "conception"], hint: "想 = picture in the mind — 相 (each other) over 心. 想像 = imagination, 予想 = forecast." },
        { id: "ja-u100l2-jo", type: "kanji", front: "情", reading: "jō", meaning: "feeling", example: { jp: "あの人は情が あつくて、いつも 人を たすけます。", en: "That person is warm-hearted and always helps people." }, accept: ["emotion", "warmth", "circumstances"], hint: "情 = feeling — 忄 (heart) again. 感情 = emotion; 情報 = information, literally the shape of how things are." },
        { id: "ja-u100l2-yume", type: "kanji", front: "夢", reading: "yume", meaning: "dream", example: { jp: "小さいころの夢は、学校の先生に なる ことでした。", en: "My childhood dream was to become a school teacher." }, accept: ["a dream", "aspiration"], hint: "夢 = dream — both the one you have asleep and the one you work towards, exactly like English." },
        { id: "ja-u100l2-shin", type: "kanji", front: "信", reading: "shin", meaning: "trust", example: { jp: "友だちの ことばを信じて、待つ ことに しました。", en: "I trusted my friend's word and decided to wait." }, accept: ["belief", "to believe", "faith"], hint: "信 = trust — 人 (person) beside 言 (word): someone who stands by what they say." },
      ],
    },
    {
      id: "ja-u100l3",
      unit: 100,
      lesson: 3,
      title: "Spirit and life",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji of respect and spirit: 尊 (respect), 欲 (desire), 神 (god), 精 (spirit), 命 (life).",
      items: [
        { id: "ja-u100l3-son", type: "kanji", front: "尊", reading: "son", meaning: "respect", example: { jp: "あいての 気持ちを尊重する ことが 大切です。", en: "Respecting the other person's feelings is what matters." }, accept: ["to revere", "esteem", "precious"], hint: "尊 = hold in high regard. 尊重する = to respect someone's wishes; 尊敬 = respect for a person." },
        { id: "ja-u100l3-yoku", type: "kanji", front: "欲", reading: "yoku", meaning: "desire", example: { jp: "食欲が ない ときは、あたたかい ものを 食べます。", en: "When I have no appetite I eat something warm." }, accept: ["want", "greed", "appetite"], hint: "欲 = wanting. 食欲 = appetite, 欲しい = wanted. 谷 (valley) + 欠 (lack) — an empty space asking to be filled." },
        { id: "ja-u100l3-kami", type: "kanji", front: "神", reading: "kami", meaning: "god", example: { jp: "山の上に 古い神社が あって、毎年 おまつりが あります。", en: "There's an old shrine up the mountain, and a festival every year." }, accept: ["deity", "spirit", "divine"], hint: "神 = god — the 礻 radical marks anything to do with worship. 神社 = shrine." },
        { id: "ja-u100l3-sei", type: "kanji", front: "精", reading: "sei", meaning: "spirit", example: { jp: "元気に すごすには、精神も 体も 大切です。", en: "To stay well, both mind and body matter." }, accept: ["energy", "refined", "vitality"], hint: "精 = refined energy. 精神 = the mind/spirit, 精一杯 = with everything you have." },
        { id: "ja-u100l3-inochi", type: "kanji", front: "命", reading: "inochi", meaning: "life", example: { jp: "命は 一つ しか ありませんから、体を 大切に して ください。", en: "You only have one life, so please take care of your body." }, accept: ["a life", "fate", "command"], hint: "命 = life. Also 'command' — 命令. The same character carries what you are given and what you are told." },
      ],
    },
  ],
};
