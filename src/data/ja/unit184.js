// Unit 184 — メディア・ものがたり (Media and narrative) — B2 / JLPT N2
// Block-2 house rules are documented in unit174.js.
//
// B1's media unit (u126) taught the industry — はいゆう, かんとく, ばんぐみ. B2 is
// about how a story is BUILT and how a claim about the world gets carried: the
// parts of a narrative, and the distance between what happened and what was told.
export const UNIT184 = {
  id: "ja-u184",
  lang: "ja",
  title: "メディア・ものがたり",
  order: 184,
  stage: "b2",
  lessons: [
    {
      id: "ja-u184l1",
      unit: 184,
      lesson: 1,
      title: "How a story is built",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the parts of a narrative well enough to talk about craft: きゃくほん こうせい てんかい けつまつ ばめん ふくせん.",
      items: [
        { id: "ja-u184l1-kyakuhon", type: "vocab", front: "きゃくほん", reading: "kyakuhon", meaning: "a script", example: { jp: "きゃくほんを 読んだ ときから、いい 作品に なると 思いました。", en: "From the moment I read the script I thought it would be a good piece." }, accept: ["screenplay", "the book (of a play)"] },
        { id: "ja-u184l1-kosei", type: "vocab", front: "こうせい", reading: "kōsei", meaning: "structure", example: { jp: "話の こうせいを 変えただけで、ずっと 分かりやすく なりました。", en: "Just changing the structure of the story made it far clearer." }, accept: ["composition", "how it is put together", "arrangement"] },
        { id: "ja-u184l1-tenkai", type: "vocab", front: "てんかい", reading: "tenkai", meaning: "how it unfolds", example: { jp: "後半の てんかいが 早すぎて、少し ついて 行けませんでした。", en: "The second half unfolds too fast, and I couldn't quite keep up." }, accept: ["development", "the way it progresses", "turn of events"] },
        { id: "ja-u184l1-ketsumatsu", type: "vocab", front: "けつまつ", reading: "ketsumatsu", meaning: "the ending", example: { jp: "けつまつを 知って いても、何度でも 見たく なります。", en: "Even knowing the ending, I want to watch it again and again." }, accept: ["conclusion", "how it turns out", "the outcome"] },
        { id: "ja-u184l1-bamen", type: "vocab", front: "ばめん", reading: "bamen", meaning: "a scene", example: { jp: "あの ばめんだけは、今でも はっきり おぼえて います。", en: "That one scene I still remember clearly even now." }, accept: ["a moment in the story", "sequence", "the setting"] },
        { id: "ja-u184l1-fukusen", type: "vocab", front: "ふくせん", reading: "fukusen", meaning: "a plant laid earlier", example: { jp: "はじめの ふくせんに 気づくと、二回目が もっと おもしろく なります。", en: "Once you notice the setup laid early on, a second viewing gets better." }, accept: ["foreshadowing", "groundwork in a plot", "a seed planted"], hint: "ふくせん is laid EARLY and paid off LATER — you often only see it the second time through. That delay is the whole point of the word." },
      ],
    },
    {
      id: "ja-u184l2",
      unit: 184,
      lesson: 2,
      title: "Who tells it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about voice and point of view: しゅじんこう かたりて ぶんたい びょうしゃ げんさく メディア.",
      items: [
        { id: "ja-u184l2-shujinko", type: "vocab", front: "しゅじんこう", reading: "shujinkō", meaning: "the protagonist", example: { jp: "しゅじんこうが あまり 話さないので、まわりの 人が 語ります。", en: "The protagonist barely speaks, so the people around them carry the telling." }, accept: ["main character", "the lead", "hero"] },
        { id: "ja-u184l2-katarite", type: "vocab", front: "かたりて", reading: "katarite", meaning: "the narrator", example: { jp: "かたりてが 子どもなので、大人の 事じょうは 分かりません。", en: "The narrator is a child, so the adults' circumstances stay unclear." }, accept: ["the voice telling it", "storyteller"] },
        { id: "ja-u184l2-buntai", type: "vocab", front: "ぶんたい", reading: "buntai", meaning: "writing style", example: { jp: "この 人の ぶんたいは みじかくて、読むのが 速く なります。", en: "This writer's style is clipped, and it makes you read faster." }, accept: ["prose style", "the way it is written"] },
        { id: "ja-u184l2-byosha", type: "vocab", front: "びょうしゃ", reading: "byōsha", meaning: "depiction", example: { jp: "町の びょうしゃが 細かくて、行った ことが ある 気に なります。", en: "The depiction of the town is so detailed you feel you've been there." }, accept: ["portrayal", "描写 in prose", "rendering"] },
        { id: "ja-u184l2-gensaku", type: "vocab", front: "げんさく", reading: "gensaku", meaning: "the original work", example: { jp: "げんさくを 先に 読むか どうかで、見え方が 変わります。", en: "Whether you read the original first changes how it looks." }, accept: ["source material", "the book it came from"] },
        { id: "ja-u184l2-media", type: "vocab", front: "メディア", reading: "media", meaning: "the media", example: { jp: "同じ 話でも、メディアに よって 見え方が ちがいます。", en: "Even the same story looks different depending on the outlet." }, accept: ["press", "outlets", "a medium"] },
      ],
    },
    {
      id: "ja-u184l3",
      unit: 184,
      lesson: 3,
      title: "Making it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about production and how a piece reaches an audience: さつえい えいぞう しちょうりつ こうひょう かくう しんそう.",
      items: [
        { id: "ja-u184l3-satsuei", type: "vocab", front: "さつえい", reading: "satsuei", meaning: "filming", example: { jp: "さつえいは 三か月 かかりましたが、出来た ものは 二時間です。", en: "Filming took three months, and what came out of it is two hours." }, accept: ["shooting", "photography (of a production)"] },
        { id: "ja-u184l3-eizo", type: "vocab", front: "えいぞう", reading: "eizō", meaning: "footage", example: { jp: "古い えいぞうが 出て きて、むかしの 町が 分かりました。", en: "Old footage turned up, and we could see the town as it was." }, accept: ["video", "the images", "picture"] },
        { id: "ja-u184l3-shichoritsu", type: "vocab", front: "しちょうりつ", reading: "shichōritsu", meaning: "viewing figures", example: { jp: "しちょうりつは 低かったですが、今でも 話す 人が います。", en: "The viewing figures were low, but people still talk about it." }, accept: ["ratings", "audience share"] },
        { id: "ja-u184l3-kohyo", type: "vocab", front: "こうひょう", reading: "kōhyō", meaning: "a warm reception", example: { jp: "こうひょうだったので、二作目を 作る ことに なりました。", en: "It was well received, so a second one is being made." }, accept: ["favourable reviews", "going down well"] },
        { id: "ja-u184l3-kaku", type: "vocab", front: "かくう", reading: "kakū", meaning: "made up", example: { jp: "この 町は かくうですが、元に なった 場所が あります。", en: "This town is fictional, but there is a real place behind it." }, accept: ["fictional", "imaginary", "invented"] },
        { id: "ja-u184l3-shinso", type: "vocab", front: "しんそう", reading: "shinsō", meaning: "the true state of things", example: { jp: "しんそうは 分かりませんが、話は 一人 歩きして います。", en: "The truth of it isn't known, but the story has taken on a life of its own." }, accept: ["the real facts", "what actually happened"] },
      ],
    },
    {
      id: "ja-u184l4",
      unit: 184,
      lesson: 4,
      title: "What gets carried",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how a version of events travels, and how much of it to trust: かくさん そくほう ていせい でどころ ねつぞう ぼうとう.",
      items: [
        { id: "ja-u184l4-kakusan", type: "vocab", front: "かくさん", reading: "kakusan", meaning: "spreading widely", example: { jp: "一日で かくさんして、知らない 人にも とどきました。", en: "It spread in a day and reached people who had never heard of it." }, accept: ["going round", "diffusion", "being shared on"] },
        { id: "ja-u184l4-sokuho", type: "vocab", front: "そくほう", reading: "sokuhō", meaning: "a breaking bulletin", example: { jp: "そくほうが 出た ときは、まだ 何も 分かって いませんでした。", en: "When the bulletin went out, nothing was known yet." }, accept: ["news flash", "first report"] },
        { id: "ja-u184l4-teisei", type: "vocab", front: "ていせい", reading: "teisei", meaning: "a correction", example: { jp: "ていせいは 小さく 出ましたが、はじめの 記事ほど 読まれません。", en: "The correction ran small, and nothing like as many people read it as the first piece." }, accept: ["retraction", "putting right", "amendment"] },
        { id: "ja-u184l4-dedokoro", type: "vocab", front: "でどころ", reading: "dedokoro", meaning: "where it came from", example: { jp: "でどころが はっきりしない 話は、そのまま 人に 送りません。", en: "I don't pass on a story whose source isn't clear." }, accept: ["the source", "provenance", "where it originated"] },
        { id: "ja-u184l4-netsuzo", type: "vocab", front: "ねつぞう", reading: "netsuzō", meaning: "fabrication", example: { jp: "ねつぞうだと 分かるまで、二年 かかりました。", en: "It took two years for it to be recognised as a fabrication." }, accept: ["making it up", "a fake", "invented evidence"], hint: "かくう is fiction that never pretended to be true; ねつぞう is a claim about the real world that was invented. The difference is the lie, not the invention." },
        { id: "ja-u184l4-boto", type: "vocab", front: "ぼうとう", reading: "bōtō", meaning: "the opening part", example: { jp: "ぼうとうの 一文で、読む か どうか 決まって しまいます。", en: "The first sentence decides whether it gets read at all." }, accept: ["the start", "opening lines", "beginning"] },
      ],
    },
  ],
};
