// Unit 100 — かんじ・こころ (Feeling & quality kanji) — B1 / JLPT N3
// First B1 character unit. 12 new N3 glyphs, NOT 24: the band has 20 character units
// and only 320 untaught glyphs carry KanjiVG stroke data, so 24/unit would need 480
// that do not exist (BUILD-BRIEF-language-blueprint.md puts B1 at "12–15 glyphs per
// unit"). The other 12 cards are companion vocabulary written with the glyphs taught
// in the lesson immediately before — ja's Unit 1 rule, applied to kanji: a chunk of
// script, then real words that use it, never a run of bare characters.
// Glyph budget: this block takes the first 120 untaught glyphs in the canonical
// KANJI_N3 order (scripts/fetch-kanjivg.mjs), leaving the rest for block 2.
export const UNIT100 = {
  id: "ja-u100",
  lang: "ja",
  title: "かんじ・こころ",
  order: 100,
  stage: "b1",
  lessons: [
    // Lesson 1: kanji — the warm feelings
    {
      id: "ja-u100l1",
      unit: 100,
      lesson: 1,
      title: "Feeling kanji",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the feeling kanji: 愛 喜 泣 願 幸 快 (love, joy, cry, wish, happiness, pleasant).",
      items: [
        { id: "ja-u100l1-ai", type: "kanji", front: "愛", reading: "ai", meaning: "love", example: { jp: "かのじょは動物が大すきで、犬もねこも愛しています。", en: "She loves animals, and adores both dogs and cats." }, accept: ["affection", "to love"], hint: "愛 = love. 心 (heart) sits in the middle of it. 愛します = to love; 愛情 = affection." },
        { id: "ja-u100l1-yorokobi", type: "kanji", front: "喜", reading: "yorokobi", meaning: "joy", example: { jp: "しけんにごうかくしたと聞いて、かぞくみんなが喜びました。", en: "Hearing that I'd passed the exam, my whole family was delighted." }, accept: ["delight", "to rejoice", "gladness"], hint: "喜 = joy. 喜びます = to be delighted — the joy you show for someone else's good news, not quiet contentment." },
        { id: "ja-u100l1-naki", type: "kanji", front: "泣", reading: "naki", meaning: "cry", example: { jp: "子どもは泣いていましたが、母のかおを見てすぐにわらいました。", en: "The child was crying, but smiled as soon as they saw their mother's face." }, accept: ["to weep", "weeping"], hint: "泣 = cry. 氵 (water) beside 立 (stand): standing there in tears. 泣きます = to cry." },
        { id: "ja-u100l1-negai", type: "kanji", front: "願", reading: "negai", meaning: "wish", example: { jp: "わたしの願いはひとつだけで、かぞくが元気でいることです。", en: "I have only one wish, and it's that my family stays well." }, accept: ["request", "to wish", "prayer"], hint: "願 = wish / request. You already say it every day — お願いします is literally 'I make a request'." },
        { id: "ja-u100l1-shiawase", type: "kanji", front: "幸", reading: "shiawase", meaning: "happiness", example: { jp: "お金がたくさんなくても、かぞくがいれば幸せです。", en: "Even without a lot of money, I'm happy as long as I have my family." }, accept: ["fortune", "happy", "good luck"], hint: "幸 = happiness / good fortune. 幸せ = shiawase (happy), 幸運 = kōun (good luck)." },
        { id: "ja-u100l1-kokoroyoi", type: "kanji", front: "快", reading: "kokoroyoi", meaning: "pleasant", example: { jp: "あさの風が快くて、さんぽがいつもより長くなりました。", en: "The morning breeze was so pleasant that my walk ran longer than usual." }, accept: ["comfortable", "agreeable", "refreshing"], hint: "快 = pleasant. 忄 (heart) + 夬: the heart running clear. 快適 = kaiteki (comfortable)." },
      ],
    },
    // Lesson 2: the words those glyphs write
    {
      id: "ja-u100l2",
      unit: 100,
      lesson: 2,
      title: "Words with those kanji",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the feeling kanji in real words: あいちゃく よろこび ねがい こううん かいてき なきごえ.",
      items: [
        { id: "ja-u100l2-aichaku", type: "vocab", front: "あいちゃく", reading: "aichaku", meaning: "attachment", example: { jp: "古いじてんしゃですが、あいちゃくがあってすてられません。", en: "It's an old bicycle, but I'm attached to it and can't throw it away." }, accept: ["fondness", "sentimental attachment"], hint: "愛着 = 愛 (love) + 着 (stick to). The fondness that builds up over years of use — for a thing or a place, rarely a person." },
        { id: "ja-u100l2-yorokobi", type: "vocab", front: "よろこび", reading: "yorokobi", meaning: "joy", example: { jp: "しごとのよろこびは、人にありがとうと言われることです。", en: "The joy of the job is being told thank you by someone." }, accept: ["delight", "pleasure", "gladness"], hint: "喜び — the noun from 喜びます. Verb + び / み is a common way Japanese builds a feeling-noun: 楽しみ, 悲しみ, 喜び." },
        { id: "ja-u100l2-negai", type: "vocab", front: "ねがい", reading: "negai", meaning: "wish", example: { jp: "ねがいをことばにすると、ほんとうになりやすいそうです。", en: "They say that if you put a wish into words, it more easily comes true." }, accept: ["request", "hope", "desire"], hint: "願い — the noun. お願い (with the polite お) is the everyday 'a favor to ask': お願いがあります。" },
        { id: "ja-u100l2-koun", type: "vocab", front: "こううん", reading: "kōun", meaning: "good luck", example: { jp: "こううんだったとは思いますが、まいにちれんしゅうもしました。", en: "I do think I was lucky, but I also practiced every day." }, accept: ["fortune", "lucky", "good fortune"], hint: "幸運 = 幸 (fortune) + 運 (carry / fate). こううんをいのります = to wish someone luck." },
        { id: "ja-u100l2-kaiteki", type: "vocab", front: "かいてき", reading: "kaiteki", meaning: "comfortable", example: { jp: "へやはせまいですが、しずかでとてもかいてきです。", en: "The room is small, but it's quiet and very comfortable." }, accept: ["pleasant", "agreeable", "cosy"], hint: "快適 = 快 (pleasant) + 適 (suitable). Used for rooms, trains, temperature — physical comfort, not emotional." },
        { id: "ja-u100l2-nakigoe", type: "vocab", front: "なきごえ", reading: "nakigoe", meaning: "crying voice", example: { jp: "となりのへやからなきごえが聞こえて、心ぱいになりました。", en: "I heard crying from the next room, and I got worried." }, accept: ["cry", "sobbing", "animal call"], hint: "泣き声 = 泣き (crying) + 声 (voice). The same word covers an animal's call — ねこのなきごえ." },
      ],
    },
    // Lesson 3: kanji — qualities and conditions
    {
      id: "ja-u100l3",
      unit: 100,
      lesson: 3,
      title: "Quality kanji",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the quality kanji: 温 暗 寒 若 偉 貴 (warm, dark, cold, young, great, precious).",
      items: [
        { id: "ja-u100l3-atatakai", type: "kanji", front: "温", reading: "atatakai", meaning: "warm", example: { jp: "この地方は冬でも温かくて、ゆきはほとんどふりません。", en: "This region is warm even in winter, and it hardly ever snows." }, accept: ["mild", "warmth", "to warm"], hint: "温 = warm. 氵 (water) + 皿 (dish) under the sun: water warmed in a bowl. 温度 = ondo (temperature)." },
        { id: "ja-u100l3-kurai", type: "kanji", front: "暗", reading: "kurai", meaning: "dark", example: { jp: "そとはもう暗くなりましたが、まだ子どもがあそんでいます。", en: "It's already gone dark outside, but the children are still playing." }, accept: ["gloomy", "darkness", "dim"], hint: "暗 = dark. 日 (sun) + 音 (sound): the hour you hear more than you see. 暗記 = anki (learning by heart — 'in the dark', i.e. without looking)." },
        { id: "ja-u100l3-samui", type: "kanji", front: "寒", reading: "samui", meaning: "cold", example: { jp: "けさはとても寒かったので、あついお茶をのみました。", en: "This morning was very cold, so I drank hot tea." }, accept: ["chilly", "coldness"], hint: "寒 = cold (of weather or a person). Different from つめたい (冷), which is cold to the touch." },
        { id: "ja-u100l3-wakai", type: "kanji", front: "若", reading: "wakai", meaning: "young", example: { jp: "父は若いころ、まいにち山にのぼっていたそうです。", en: "They say my father climbed the mountain every day when he was young." }, accept: ["youthful", "youth"], hint: "若 = young. 若い人 or 若者 (wakamono) = young people. 若いころ = 'back when I was young'." },
        { id: "ja-u100l3-erai", type: "kanji", front: "偉", reading: "erai", meaning: "great", example: { jp: "かれは偉い人になりましたが、はなしかたは前と同じです。", en: "He's become an important person, but the way he talks is the same as before." }, accept: ["admirable", "eminent", "impressive"], hint: "偉 = great / admirable. 偉いですね is everyday praise for someone who did the right, hard thing — including a child." },
        { id: "ja-u100l3-ki", type: "kanji", front: "貴", reading: "ki", meaning: "precious", example: { jp: "これは家族の貴重な写真なので、大切にしています。", en: "This is a precious family photo, so I take good care of it." }, accept: ["valuable", "noble", "esteemed"], hint: "貴 = precious / noble. 貝 (shell — old money) at the bottom: things worth money. 貴重 = kichō (valuable)." },
      ],
    },
    // Lesson 4: the words those glyphs write
    {
      id: "ja-u100l4",
      unit: 100,
      lesson: 4,
      title: "More words with those kanji",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the quality kanji in real words: きおん あんき さむさ わかもの いだい きちょう.",
      items: [
        { id: "ja-u100l4-kion", type: "vocab", front: "きおん", reading: "kion", meaning: "air temperature", example: { jp: "きおんが下がってきたので、まどをしめました。", en: "The temperature has been dropping, so I closed the window." }, accept: ["temperature", "the temperature outside"], hint: "気温 = 気 (air) + 温 (warm) — the temperature *outside*. Rooms take 室温, bodies take たいおん; きおん is the one on the weather forecast." },
        { id: "ja-u100l4-anki", type: "vocab", front: "あんき", reading: "anki", meaning: "memorization", example: { jp: "あんきだけでは足りなくて、いみもりかいするひつようがあります。", en: "Memorization alone isn't enough — you also need to understand the meaning." }, accept: ["learning by heart", "rote learning"], hint: "暗記 = 暗 (dark) + 記 (record): recording it so you can produce it in the dark, without the book." },
        { id: "ja-u100l4-samusa", type: "vocab", front: "さむさ", reading: "samusa", meaning: "the cold", example: { jp: "ことしのさむさはきびしくて、そとに出たくありません。", en: "This year's cold is severe, and I don't want to go outside." }, accept: ["coldness", "chill"], hint: "寒さ — adjective + さ makes a noun for the amount of it: 高さ (height), 大きさ (size), 寒さ (the cold). A pattern worth stealing." },
        { id: "ja-u100l4-wakamono", type: "vocab", front: "わかもの", reading: "wakamono", meaning: "young person", example: { jp: "さいきんのわかものはよく本を読まないと言われますが、それはちがうと思います。", en: "People say young people these days don't read much, but I think that's wrong." }, accept: ["youth", "young people"], hint: "若者 = 若 (young) + 者 (person). 者 is the plain 'person' suffix you already met in 医者." },
        { id: "ja-u100l4-idai", type: "vocab", front: "いだい", reading: "idai", meaning: "great", example: { jp: "かれのけんきゅうはいだいですが、生きているうちはゆうめいではありませんでした。", en: "His research is great, but he wasn't famous while he was alive." }, accept: ["grand", "magnificent", "mighty"], hint: "偉大 = 偉 (great) + 大 (big). Reserved for history-sized greatness — 偉大な人, not your helpful neighbour." },
        { id: "ja-u100l4-kicho", type: "vocab", front: "きちょう", reading: "kichō", meaning: "valuable", example: { jp: "きちょうなごいけんをありがとうございました。", en: "Thank you for your valuable comments." }, accept: ["precious", "priceless"], hint: "貴重 = 貴 (precious) + 重 (heavy / important). きちょうな時間, きちょうなけいけん — worth more than money." },
      ],
    },
  ],
};
