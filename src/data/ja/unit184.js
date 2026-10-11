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
        { id: "ja-u184l1-kyakuhon", type: "vocab", front: "きゃくほん", reading: "kyakuhon", meaning: "a script", example: { jp: "きゃくほんを 読んだ ときから、いい 作品に なると 思いました。", en: "From the moment I read the script I thought it would be a good piece." }, drill: { jp: "きゃくほんを 読みました。", en: "I read the script." }, accept: ["screenplay", "the book (of a play)", "the script"], hint: "kyakuhon — 脚 (a leg) + 本 (a book), the old theatre term for the book the actors stand on. きゃくほんか is the screenwriter; シナリオ is the loanword used alongside it in film." },
        { id: "ja-u184l1-kosei", type: "vocab", front: "こうせい", reading: "kōsei", meaning: "structure (how it is put together)", example: { jp: "話の こうせいを 変えただけで、ずっと 分かりやすく なりました。", en: "Just changing the structure of the story made it far clearer." }, drill: { jp: "こうせいを 変えました。", en: "We changed the structure." }, accept: ["composition", "how it is put together", "arrangement"], hint: "kōsei — the same こうせい taught as 構成 in the kanji band: which parts there are and in what order. Of a story it is the shape — opening, turn, ending." },
        { id: "ja-u184l1-tenkai", type: "vocab", front: "てんかい", reading: "tenkai", meaning: "how it unfolds", example: { jp: "後半の てんかいが 早すぎて、少し ついて 行けませんでした。", en: "The second half unfolds too fast, and I couldn't quite keep up." }, drill: { jp: "てんかいが 早いです。", en: "It unfolds fast." }, accept: ["development", "the way it progresses", "turn of events"], hint: "tenkai — 展 (unfold) + 開 (open): the story opening out as it goes. こうせい is the plan on paper; てんかい is what it feels like to be carried along by it." },
        { id: "ja-u184l1-ketsumatsu", type: "vocab", front: "けつまつ", reading: "ketsumatsu", meaning: "the ending", example: { jp: "けつまつを 知って いても、何度でも 見たく なります。", en: "Even knowing the ending, I want to watch it again and again." }, drill: { jp: "けつまつを 知って います。", en: "I know the ending." }, accept: ["conclusion", "how it turns out", "the outcome"], hint: "ketsumatsu — 結 (tie up) + 末 (the end): the knot tied at the end. おわり is merely where it stops; けつまつ is how everything resolves, which is what a spoiler gives away." },
        { id: "ja-u184l1-bamen", type: "vocab", front: "ばめん", reading: "bamen", meaning: "a scene", example: { jp: "あの ばめんだけは、今でも はっきり おぼえて います。", en: "That one scene I still remember clearly even now." }, drill: { jp: "ばめんが 変わりました。", en: "The scene changed." }, accept: ["a moment in the story", "sequence", "the setting"], hint: "bamen — 場 (a place) + 面 (an aspect): one continuous place in the telling. It works outside fiction too — こういう ばめんでは, in a situation like this." },
        { id: "ja-u184l1-fukusen", type: "vocab", front: "ふくせん", reading: "fukusen", meaning: "a plant laid earlier", example: { jp: "はじめの ふくせんに 気づくと、二回目が もっと おもしろく なります。", en: "Once you notice the setup laid early on, a second viewing gets better." }, drill: { jp: "ふくせんに きづきます。", en: "I notice the plant laid earlier." }, accept: ["foreshadowing", "groundwork in a plot", "a seed planted"], hint: "ふくせん is laid EARLY and paid off LATER — you often only see it the second time through. That delay is the whole point of the word." },
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
        { id: "ja-u184l2-shujinko", type: "vocab", front: "しゅじんこう", reading: "shujinkō", meaning: "the protagonist", example: { jp: "しゅじんこうが あまり 話さないので、まわりの 人が 語ります。", en: "The protagonist barely speaks, so the people around them carry the telling." }, drill: { jp: "しゅじんこうが 話しません。", en: "The protagonist does not speak." }, accept: ["main character", "the lead", "hero"], hint: "shujinkō — 主 (principal) + 人 (person) + 公, an old honorific: the central figure, hero or not. しゅやく is the lead ROLE an actor plays; しゅじんこう belongs to the story." },
        { id: "ja-u184l2-katarite", type: "vocab", front: "かたりて", reading: "katarite", meaning: "the narrator", example: { jp: "かたりてが 子どもなので、大人の 事じょうは 分かりません。", en: "The narrator is a child, so the adults' circumstances stay unclear." }, drill: { jp: "かたりてが 子どもです。", en: "The narrator is a child." }, accept: ["the voice telling it", "storyteller", "the one narrating"], hint: "katarite — 語り (telling) + 手 (hand, agent): the one doing the telling. That 手 ending names agents — うたいて a singer, ききて a listener. The narrator need not be the しゅじんこう." },
        { id: "ja-u184l2-buntai", type: "vocab", front: "ぶんたい", reading: "buntai", meaning: "writing style", example: { jp: "この 人の ぶんたいは みじかくて、読むのが 速く なります。", en: "This writer's style is clipped, and it makes you read faster." }, drill: { jp: "ぶんたいが みじかいです。", en: "The writing style is short." }, accept: ["prose style", "the way it is written", "the style of writing"], hint: "buntai — 文 (writing) + 体 (a form): the form the writing takes. It covers register as well — です・ます体 against だ・である体, a choice every Japanese writer makes on line one." },
        { id: "ja-u184l2-byosha", type: "vocab", front: "びょうしゃ", reading: "byōsha", meaning: "depiction", example: { jp: "町の びょうしゃが 細かくて、行った ことが ある 気に なります。", en: "The depiction of the town is so detailed you feel you've been there." }, drill: { jp: "びょうしゃが こまかいです。", en: "The depiction is detailed." }, accept: ["portrayal", "描写 in prose", "rendering"], hint: "byōsha — 描 (draw) + 写 (copy): drawing something as it is, whether a place, a feeling or a character. せつめい explains it; びょうしゃ makes you see it." },
        { id: "ja-u184l2-gensaku", type: "vocab", front: "げんさく", reading: "gensaku", meaning: "the original work", example: { jp: "げんさくを 先に 読むか どうかで、見え方が 変わります。", en: "Whether you read the original first changes how it looks." }, drill: { jp: "げんさくを 読みました。", en: "I read the original work." }, accept: ["source material", "the book it came from", "the original"], hint: "gensaku — 原 (origin) + 作 (a work): the work an adaptation came from. げんさくしゃ is its author, and げんさくに 近い is the compliment a faithful adaptation gets." },
        { id: "ja-u184l2-media", type: "vocab", front: "メディア", reading: "media", meaning: "the media (a single outlet)", example: { jp: "同じ 話でも、メディアに よって 見え方が ちがいます。", en: "Even the same story looks different depending on the outlet." }, drill: { jp: "メディアに よって ちがいます。", en: "It differs by media outlet." }, accept: ["press", "outlets", "a medium"], hint: "media — the English loan, and in Japanese it names one outlet as readily as the industry: メディアに よって ちがう means it differs by outlet. マスコミ is the older word for the press as a bloc." },
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
        { id: "ja-u184l3-satsuei", type: "vocab", front: "さつえい", reading: "satsuei", meaning: "filming", example: { jp: "さつえいは 三か月 かかりましたが、出来た ものは 二時間です。", en: "Filming took three months, and what came out of it is two hours." }, drill: { jp: "さつえいが 始まりました。", en: "Filming has begun." }, accept: ["shooting", "photography (of a production)", "the shoot"], hint: "satsuei — 撮 (take a picture) + 影 (an image): capturing the image. It covers film and photography alike, so さつえいきんし on a sign means no photographs." },
        { id: "ja-u184l3-eizo", type: "vocab", front: "えいぞう", reading: "eizō", meaning: "footage", example: { jp: "古い えいぞうが 出て きて、むかしの 町が 分かりました。", en: "Old footage turned up, and we could see the town as it was." }, drill: { jp: "えいぞうが 出て きました。", en: "Footage turned up." }, accept: ["video", "the images", "picture"], hint: "eizō — 映 (project) + 像 (an image): a projected moving image. えいが is a film as a work; えいぞう is the material itself, which is why security footage is かんしえいぞう." },
        { id: "ja-u184l3-shichoritsu", type: "vocab", front: "しちょうりつ", reading: "shichōritsu", meaning: "viewing figures", example: { jp: "しちょうりつは 低かったですが、今でも 話す 人が います。", en: "The viewing figures were low, but people still talk about it." }, drill: { jp: "しちょうりつが 低いです。", en: "The viewing figures are low." }, accept: ["ratings", "audience share", "the ratings figure"], hint: "shichōritsu — 視聴 (watching and listening) + 率 (rate): the percentage watching. The 率 ending again, as in かくりつ and こうりつ. For radio alone it is ちょうしゅりつ." },
        { id: "ja-u184l3-kohyo", type: "vocab", front: "こうひょう", reading: "kōhyō", meaning: "a warm reception", example: { jp: "こうひょうだったので、二作目を 作る ことに なりました。", en: "It was well received, so a second one is being made." }, drill: { jp: "こうひょうでした。", en: "It was well received." }, accept: ["favourable reviews", "going down well", "well received"], hint: "kōhyō — 好 (favourable) + 評 (evaluation): a good verdict from the public, with ふひょう as its opposite. Careful — こうひょう also spells 公表, making something public." },
        { id: "ja-u184l3-kaku", type: "vocab", front: "かくう", reading: "kakū", meaning: "made up", example: { jp: "この 町は かくうですが、元に なった 場所が あります。", en: "This town is fictional, but there is a real place behind it." }, drill: { jp: "かくうの 町です。", en: "It is a fictional town." }, accept: ["fictional", "imaginary", "invented"], hint: "kakū — 架 (to span, to put up) + 空 (empty): built over nothing. It means INVENTED, not false — a かくうの まち is a legitimate device, where a ねつぞう is a lie." },
        { id: "ja-u184l3-shinso", type: "vocab", front: "しんそう", reading: "shinsō", meaning: "the true state of things", example: { jp: "しんそうは 分かりませんが、話は 一人 歩きして います。", en: "The truth of it isn't known, but the story has taken on a life of its own." }, drill: { jp: "しんそうが 分かりません。", en: "The truth of it is not known." }, accept: ["the real facts", "what actually happened", "the truth of it"], hint: "shinsō — 真 (true) + 相 (an aspect): the true face of a matter. しんじつ is truth in the abstract; しんそう is specifically what really happened in THIS affair." },
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
        { id: "ja-u184l4-kakusan", type: "vocab", front: "かくさん", reading: "kakusan", meaning: "spreading widely", example: { jp: "一日で かくさんして、知らない 人にも とどきました。", en: "It spread in a day and reached people who had never heard of it." }, drill: { jp: "かくさんが 早いです。", en: "It spreads fast." }, accept: ["going round", "diffusion", "being shared on"], hint: "kakusan — 拡 (widen) + 散 (scatter): widening out and scattering. It is the physics word for diffusion, and now the standard one for something going round online — かくさんされる." },
        { id: "ja-u184l4-sokuho", type: "vocab", front: "そくほう", reading: "sokuhō", meaning: "a breaking bulletin", example: { jp: "そくほうが 出た ときは、まだ 何も 分かって いませんでした。", en: "When the bulletin went out, nothing was known yet." }, drill: { jp: "そくほうが 出ました。", en: "A bulletin went out." }, accept: ["news flash", "first report", "a bulletin"], hint: "sokuhō — 速 (fast) + 報 (a report): the first fast report, issued before the facts have settled. On Japanese television そくほう appears as a banner across whatever is on." },
        { id: "ja-u184l4-teisei", type: "vocab", front: "ていせい", reading: "teisei", meaning: "a correction", example: { jp: "ていせいは 小さく 出ましたが、はじめの 記事ほど 読まれません。", en: "The correction ran small, and nothing like as many people read it as the first piece." }, drill: { jp: "ていせいが 出ました。", en: "A correction was issued." }, accept: ["retraction", "putting right", "amendment"], hint: "teisei — 訂 (revise) + 正 (correct): revising to the correct version, publicly. なおす is fixing anything at all; ていせい goes on the record." },
        { id: "ja-u184l4-dedokoro", type: "vocab", front: "でどころ", reading: "dedokoro", meaning: "where it came from", example: { jp: "でどころが はっきりしない 話は、そのまま 人に 送りません。", en: "I don't pass on a story whose source isn't clear." }, drill: { jp: "でどころが はっきりしません。", en: "The source is not clear." }, accept: ["the source", "provenance", "where it originated"], hint: "dedokoro — 出 (come out) + 所 (a place): the place a thing came out of. Plainer and more suspicious in tone than しゅってん — you ask after a でどころ when you doubt the story." },
        { id: "ja-u184l4-netsuzo", type: "vocab", front: "ねつぞう", reading: "netsuzō", meaning: "fabrication", example: { jp: "ねつぞうだと 分かるまで、二年 かかりました。", en: "It took two years for it to be recognised as a fabrication." }, drill: { jp: "ねつぞうが 分かりました。", en: "The fabrication came to light." }, accept: ["making it up", "a fake", "invented evidence"], hint: "かくう is fiction that never pretended to be true; ねつぞう is a claim about the real world that was invented. The difference is the lie, not the invention." },
        { id: "ja-u184l4-boto", type: "vocab", front: "ぼうとう", reading: "bōtō", meaning: "the opening part", example: { jp: "ぼうとうの 一文で、読む か どうか 決まって しまいます。", en: "The first sentence decides whether it gets read at all." }, drill: { jp: "ぼうとうの 一文です。", en: "It is the opening sentence." }, accept: ["the start", "opening lines", "beginning"], hint: "bōtō — 冒 (to begin) + 頭 (a head): the very head of a text, with 末尾 as its tail end. In journalism the ぼうとう has to carry the whole story in one sentence." },
      ],
    },
  ],
};
