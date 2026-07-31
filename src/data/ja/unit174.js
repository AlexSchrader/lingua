// Unit 174 — ごい・N3・56 ("N3 vocab 56") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (付ける/着ける, 勤め/務め, 出会い/出合い) disambiguated via hints.
export const UNIT174 = {
  id: "ja-u174", lang: "ja", title: "ごい・N3・56", order: 174, stage: "b1",
  lessons: [
    {
      id: "ja-u174l1", unit: 174, lesson: 1, title: "N3 vocab 56·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 次ぐ (to rank next to), 付ける (to attach), 着ける (to put on), 伝わる (to be handed down), 続き (sequel), 包み (package).",
      items: [
        { id: "ja-u174l1-tsugu", type: "vocab", front: "次ぐ", reading: "tsugu", meaning: "to rank next to", example: { jp: "富士山に次ぐたかいやまです。", en: "It is the mountain next highest after Mt. Fuji." }, accept: ["to come after", "to rank next"] },
        { id: "ja-u174l1-tsukeru", type: "vocab", front: "付ける", reading: "tsukeru", meaning: "to attach", example: { jp: "ノートになまえを付けます。", en: "I put my name on the notebook." }, accept: ["to join", "to add"], hint: "付ける（つける）= to attach; same reading as 着ける (to put on)." },
        { id: "ja-u174l1-tsukeru2", type: "vocab", front: "着ける", reading: "tsukeru", meaning: "to put on", example: { jp: "くびにネックレスを着けます。", en: "I put a necklace on my neck." }, accept: ["to wear"], hint: "着ける（つける）= to put on / wear; same reading as 付ける (to attach)." },
        { id: "ja-u174l1-tsutawaru", type: "vocab", front: "伝わる", reading: "tsutawaru", meaning: "to be handed down", example: { jp: "このはなしはむかしから伝わります。", en: "This story has been handed down from long ago." }, accept: ["to be transmitted"] },
        { id: "ja-u174l1-tsuzuki", type: "vocab", front: "続き", reading: "tsuzuki", meaning: "sequel", example: { jp: "この本の続きがよみたいです。", en: "I want to read the sequel to this book." }, accept: ["continuation"] },
        { id: "ja-u174l1-tsutsumi", type: "vocab", front: "包み", reading: "tsutsumi", meaning: "package", example: { jp: "おおきい包みがとどきました。", en: "A big package arrived." }, accept: ["bundle"] },
      ],
    },
    {
      id: "ja-u174l2", unit: 174, lesson: 2, title: "N3 vocab 56·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 勤め (work), 務め (duty), 繋がる (to be connected), 繋ぐ (to tie), 繋げる (to connect), 常に (always).",
      items: [
        { id: "ja-u174l2-tsutome", type: "vocab", front: "勤め", reading: "tsutome", meaning: "work", example: { jp: "あさはやく勤めにでます。", en: "I leave for work early in the morning." }, accept: ["job", "employment"], hint: "勤め（つとめ）= work / job; same reading as 務め (duty)." },
        { id: "ja-u174l2-tsutome2", type: "vocab", front: "務め", reading: "tsutome", meaning: "duty", example: { jp: "これはわたしの務めです。", en: "This is my duty." }, accept: ["obligation"], hint: "務め（つとめ）= duty; same reading as 勤め (work)." },
        { id: "ja-u174l2-tsunagaru", type: "vocab", front: "繋がる", reading: "tsunagaru", meaning: "to be connected", example: { jp: "このみちはうみに繋がります。", en: "This road connects to the sea." }, accept: ["to be linked", "to be related"] },
        { id: "ja-u174l2-tsunagu", type: "vocab", front: "繋ぐ", reading: "tsunagu", meaning: "to tie", example: { jp: "いぬをきに繋ぎます。", en: "I tie the dog to the tree." }, accept: ["to fasten", "to connect"] },
        { id: "ja-u174l2-tsunageru", type: "vocab", front: "繋げる", reading: "tsunageru", meaning: "to connect", example: { jp: "ケーブルをテレビに繋げます。", en: "I connect the cable to the TV." }, accept: ["to link", "to join"] },
        { id: "ja-u174l2-tsuneni", type: "vocab", front: "常に", reading: "tsuneni", meaning: "always", example: { jp: "常にえがおでいます。", en: "I am always smiling." }, accept: ["at all times"], hint: "常に（つねに）= always; a written form of いつも." },
      ],
    },
    {
      id: "ja-u174l3", unit: 174, lesson: 3, title: "N3 vocab 56·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 翼 (wings), 積む (to pile up), 詰める (to pack), 積もる (to accumulate), 梅雨 (rainy season), 辛い (painful).",
      items: [
        { id: "ja-u174l3-tsubasa", type: "vocab", front: "翼", reading: "tsubasa", meaning: "wings", example: { jp: "とりが翼をひろげます。", en: "The bird spreads its wings." }, accept: ["wing"] },
        { id: "ja-u174l3-tsumu", type: "vocab", front: "積む", reading: "tsumu", meaning: "to pile up", example: { jp: "くるまにはこを積みます。", en: "I load boxes onto the car." }, accept: ["to stack", "to load"] },
        { id: "ja-u174l3-tsumeru", type: "vocab", front: "詰める", reading: "tsumeru", meaning: "to pack", example: { jp: "かばんにふくを詰めます。", en: "I pack clothes into the bag." }, accept: ["to stuff", "to shorten"] },
        { id: "ja-u174l3-tsumoru", type: "vocab", front: "積もる", reading: "tsumoru", meaning: "to accumulate", example: { jp: "にわにゆきが積もります。", en: "Snow piles up in the garden." }, accept: ["to pile up"] },
        { id: "ja-u174l3-tsuyu", type: "vocab", front: "梅雨", reading: "tsuyu", meaning: "rainy season", example: { jp: "梅雨はあめがおおいです。", en: "There is a lot of rain in the rainy season." }, accept: ["monsoon season"], hint: "梅雨（つゆ）= the rainy season; an irregular kanji reading." },
        { id: "ja-u174l3-tsurai", type: "vocab", front: "辛い", reading: "tsurai", meaning: "painful", example: { jp: "辛いときもがんばります。", en: "I keep trying even in hard times." }, accept: ["heartbreaking", "hard"], hint: "辛い（つらい）= painful; the same kanji reads からい for spicy." },
      ],
    },
    {
      id: "ja-u174l4", unit: 174, lesson: 4, title: "N3 vocab 56·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 釣 (fishing), 連れ (companion), 出会い (meeting), 出合い (encounter), 出会う (to meet by chance), 提案 (proposal).",
      items: [
        { id: "ja-u174l4-tsuri", type: "vocab", front: "釣", reading: "tsuri", meaning: "fishing", example: { jp: "にちようびに釣にいきます。", en: "I go fishing on Sunday." }, accept: ["angling"] },
        { id: "ja-u174l4-tsure", type: "vocab", front: "連れ", reading: "tsure", meaning: "companion", example: { jp: "ロビーで連れをまちます。", en: "I wait for my companion in the lobby." }, accept: ["company"] },
        { id: "ja-u174l4-deai", type: "vocab", front: "出会い", reading: "deai", meaning: "meeting", example: { jp: "あのひととの出会いはたいせつです。", en: "My meeting with that person is precious." }, accept: ["encounter", "rendezvous"], hint: "出会い（であい）= a meeting of people; same reading as 出合い." },
        { id: "ja-u174l4-deai2", type: "vocab", front: "出合い", reading: "deai", meaning: "encounter", example: { jp: "よい出合いがありました。", en: "I had a good encounter." }, accept: ["meeting"], hint: "出合い（であい）= an encounter (things or paths meeting); same reading as 出会い." },
        { id: "ja-u174l4-deau", type: "vocab", front: "出会う", reading: "deau", meaning: "to meet by chance", example: { jp: "えきでともだちに出会いました。", en: "I ran into a friend at the station." }, accept: ["to come across", "to run into"] },
        { id: "ja-u174l4-teian", type: "vocab", front: "提案", reading: "teian", meaning: "proposal", example: { jp: "かいぎであたらしい提案をします。", en: "I make a new proposal at the meeting." }, accept: ["proposition", "suggestion"] },
      ],
    },
  ],
};
