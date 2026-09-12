// Unit 198 — よじじゅくご (four-character idioms) — B2 / JLPT N2
// Strand D, coverage 6 of 16. 四字熟語 are four kanji that behave as one word and mean
// something none of the four says. They are ordinary in newspapers, speeches and everyday
// advice, and they are invisible to a learner who has only ever met kanji as parts of
// compounds — you can know all four characters and still have no idea what the phrase means.
// Fronts are kana, because the phrase is learned as a sound before it is read; the kanji are
// given in the hint where the makeup actually explains the sense.
export const UNIT198 = {
  id: "ja-u198",
  lang: "ja",
  title: "よじじゅくご",
  order: 198,
  stage: "b2",
  lessons: [
    {
      id: "ja-u198l1",
      unit: 198,
      lesson: 1,
      title: "Getting it right and getting it wrong",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the four-character idioms for method and outcome: いっせきにちょう, しこうさくご, じごうじとく, りんきおうへん, ゆうげんじっこう, ふげんじっこう.",
      items: [
        { id: "ja-u198l1-issekinicho", type: "vocab", front: "いっせきにちょう", reading: "issekinichō", meaning: "killing two birds with one stone", example: { jp: "歩いて 会社に 行けば、お金も かからず 体にも いい。いっせきにちょうです。", en: "Walking to work costs nothing and is good for you — two birds with one stone." }, drill: { jp: "いっせきにちょうに なります。", en: "It kills two birds with one stone." }, accept: ["two birds one stone", "doubly effective"], hint: "一石二鳥 — one stone, two birds. The English idiom is the same image, which makes this the easiest of the set to keep." },
        { id: "ja-u198l1-shikosakugo", type: "vocab", front: "しこうさくご", reading: "shikōsakugo", meaning: "trial and error", example: { jp: "何度も しこうさくごを くりかえして、やっと できました。", en: "After a lot of trial and error, I finally managed it." }, accept: ["by trial and error", "feeling one's way"], hint: "試行錯誤 — trying and erring. Neutral and extremely common in work and research writing." },
        { id: "ja-u198l1-jigojitoku", type: "vocab", front: "じごうじとく", reading: "jigōjitoku", meaning: "you brought it on yourself", example: { jp: "練習を しなかったのだから、まけたのは じごうじとくです。", en: "He didn't practise, so losing was his own doing." }, drill: { jp: "じごうじとくに なりました。", en: "He brought it on himself." }, accept: ["one's own fault", "just deserts", "reaping what you sow"], hint: "自業自得 — your own act, your own gain. Said about yourself it is rueful; about someone else it is unkind." },
        { id: "ja-u198l1-rinkiohen", type: "vocab", front: "りんきおうへん", reading: "rinkiōhen", meaning: "adapting flexibly to the situation", example: { jp: "計画どおりに いかない ときは、りんきおうへんに 動きましょう。", en: "When things don't go to plan, let's adapt as we go." }, accept: ["playing it by ear", "flexibly", "as circumstances require"], hint: "臨機応変 — meeting the moment, answering the change. High praise for a colleague." },
        { id: "ja-u198l1-yugenjikko", type: "vocab", front: "ゆうげんじっこう", reading: "yūgenjikkō", meaning: "doing what you said you'd do", example: { jp: "あの 人は ゆうげんじっこうで、言った ことは かならず やります。", en: "He's as good as his word — whatever he says, he does." }, drill: { jp: "ゆうげんじっこうの ひとです。", en: "He is a man of his word." }, accept: ["true to one's word", "suiting the action to the word"], hint: "有言実行 — words spoken, deeds done. A modern reversal of the older 不言実行 in the next card." },
        { id: "ja-u198l1-fugenjikko", type: "vocab", front: "ふげんじっこう", reading: "fugenjikkō", meaning: "acting without talking about it", example: { jp: "父は ふげんじっこうの 人で、何も 言わずに やって くれました。", en: "My father was a man of few words and just did it without saying anything." }, accept: ["deeds not words", "quietly getting on with it"], hint: "不言実行 — no words, deeds done. The older ideal; ゆうげんじっこう was coined later as its answer." },
      ],
    },
    {
      id: "ja-u198l2",
      unit: 198,
      lesson: 2,
      title: "People, and how they differ",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe people and understanding between them: じゅうにんといろ, いしんでんしん, いちごいちえ, ゆうじゅうふだん, じがじさん, たんとうちょくにゅう.",
      items: [
        { id: "ja-u198l2-junintoiro", type: "vocab", front: "じゅうにんといろ", reading: "jūnintoiro", meaning: "everyone is different", example: { jp: "考え方は じゅうにんといろですから、話しあう ことが 大切です。", en: "Everyone thinks differently, so talking it over matters." }, drill: { jp: "じゅうにんといろに なります。", en: "Everyone turns out different." }, accept: ["to each their own", "so many people so many minds"], hint: "十人十色 — ten people, ten colours. Used to close an argument gently rather than to win it." },
        { id: "ja-u198l2-ishindenshin", type: "vocab", front: "いしんでんしん", reading: "ishindenshin", meaning: "understanding without words", example: { jp: "長い つきあいなので、いしんでんしんで 分かりあえます。", en: "We've known each other so long that we understand without speaking." }, accept: ["tacit understanding", "heart to heart", "unspoken communication"], hint: "以心伝心 — by the heart, transmitting the heart. Originally a Zen term for teaching that cannot be put in words." },
        { id: "ja-u198l2-ichigoichie", type: "vocab", front: "いちごいちえ", reading: "ichigoichie", meaning: "this meeting will never come again", example: { jp: "いちごいちえの 気持ちで、今日の 会を 楽しみましょう。", en: "Let's enjoy today's gathering as something that won't come again." }, accept: ["once in a lifetime meeting", "treasure this moment"], hint: "一期一会 — one lifetime, one meeting. From the tea ceremony, and probably the best-loved 四字熟語 in the language." },
        { id: "ja-u198l2-yujufudan", type: "vocab", front: "ゆうじゅうふだん", reading: "yūjūfudan", meaning: "chronically indecisive", example: { jp: "ゆうじゅうふだんで、なかなか きめられません。", en: "I'm hopelessly indecisive and can never make up my mind." }, accept: ["dithering", "wishy-washy", "unable to decide"], hint: "優柔不断 — soft and not cut. The 断 is the 断 of 決断, deciding: this is the failure to make the cut." },
        { id: "ja-u198l2-jigajisan", type: "vocab", front: "じがじさん", reading: "jigajisan", meaning: "blowing one's own trumpet", example: { jp: "じがじさんですが、この 料理は うまく できました。", en: "I say it myself, but this dish came out well." }, accept: ["self-praise", "if I say so myself"], hint: "自画自賛 — praising your own painting. じがじさんですが is the standard apology you put in FRONT of the boast." },
        { id: "ja-u198l2-tantochokunyu", type: "vocab", front: "たんとうちょくにゅう", reading: "tantōchokunyū", meaning: "getting straight to the point", example: { jp: "たんとうちょくにゅうに 言いますが、この 考えには 反対です。", en: "To put it bluntly, I'm against this proposal." }, accept: ["blunt", "straight to it", "without preamble"], hint: "単刀直入 — one sword, straight in. Announcing it first is what makes the bluntness acceptable." },
      ],
    },
    {
      id: "ja-u198l3",
      unit: 198,
      lesson: 3,
      title: "Trouble, effort and turning it around",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a hard situation and the way out: しめんそか, あくせんくとう, きしかいせい, むがむちゅう, いちぶしじゅう, たいきばんせい.",
      items: [
        { id: "ja-u198l3-shimensoka", type: "vocab", front: "しめんそか", reading: "shimensoka", meaning: "surrounded by enemies, no allies left", example: { jp: "みんなが 反対して、しめんそかの 状きょうに なりました。", en: "Everyone objected and I was left without a single ally." }, accept: ["isolated", "beset on all sides", "no one on your side"], hint: "四面楚歌 — on all four sides, the songs of Chu. From a Chinese general who heard his enemy's homeland songs and knew his own troops had gone over." },
        { id: "ja-u198l3-akusenkuto", type: "vocab", front: "あくせんくとう", reading: "akusenkutō", meaning: "a hard, uphill struggle", example: { jp: "人が たりず、毎日 あくせんくとうして います。", en: "We're short-staffed and it's an uphill struggle every day." }, accept: ["desperate fight", "hard slog", "battling against odds"], hint: "悪戦苦闘 — bad battle, bitter fight. Used of work and study far more often than of anything literally dangerous." },
        { id: "ja-u198l3-kishikaisei", type: "vocab", front: "きしかいせい", reading: "kishikaisei", meaning: "turning a hopeless situation around", example: { jp: "さいごの 一点で、きしかいせいの 勝利を おさめました。", en: "With the final point they pulled off a remarkable turnaround." }, accept: ["dramatic comeback", "snatching victory", "reversal of fortune"], hint: "起死回生 — raising the dead, returning to life. Sports reporting runs on it." },
        { id: "ja-u198l3-mugamuchu", type: "vocab", front: "むがむちゅう", reading: "mugamuchū", meaning: "so absorbed you forget yourself", example: { jp: "むがむちゅうで 走って いたら、もう ゴールでした。", en: "I ran so absorbed in it that suddenly I was at the finish." }, accept: ["lost in it", "utterly engrossed", "carried away"], hint: "無我夢中 — no self, inside a dream. It can mean flow, or panic — both are states where you stop noticing yourself." },
        { id: "ja-u198l3-ichibushiju", type: "vocab", front: "いちぶしじゅう", reading: "ichibushijū", meaning: "the whole story from start to finish", example: { jp: "何が あったのか、いちぶしじゅう 話して ください。", en: "Please tell me the whole story of what happened." }, accept: ["all the details", "the full account", "from beginning to end"], hint: "一部始終 — every part, beginning to end. Almost always the object of 話す or 見る." },
        { id: "ja-u198l3-taikibansei", type: "vocab", front: "たいきばんせい", reading: "taikibansei", meaning: "great talent takes long to mature", example: { jp: "たいきばんせいと 言うので、あせらないで ください。", en: "They say great talent matures late, so don't rush yourself." }, accept: ["a late bloomer", "slow to ripen"], hint: "大器晩成 — a great vessel, late completed. Said as consolation to someone whose progress looks slow." },
      ],
    },
    {
      id: "ja-u198l4",
      unit: 198,
      lesson: 4,
      title: "Judgement, value and wishful thinking",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Weigh things and see through them: にそくさんもん, せんさばんべつ, おんこちしん, がでんいんすい, はんしんはんぎ, いっきいちゆう.",
      items: [
        { id: "ja-u198l4-nisokusanmon", type: "vocab", front: "にそくさんもん", reading: "nisokusanmon", meaning: "dirt cheap, worth almost nothing", example: { jp: "古い 車は にそくさんもんで 売れました。", en: "The old car sold for next to nothing." }, accept: ["for a song", "next to nothing", "dirt cheap"], hint: "二束三文 — two bundles for three mon, an old coin of tiny value. Always about being sold too cheaply." },
        { id: "ja-u198l4-sensabanbetsu", type: "vocab", front: "せんさばんべつ", reading: "sensabanbetsu", meaning: "endlessly varied", example: { jp: "答えは せんさばんべつで、正しい ものは 一つでは ありません。", en: "The answers vary endlessly; there isn't one right one." }, accept: ["all different", "infinite variety", "no two alike"], hint: "千差万別 — a thousand differences, ten thousand distinctions. Stronger and more formal than じゅうにんといろ, and used of things as well as people." },
        { id: "ja-u198l4-onkochishin", type: "vocab", front: "おんこちしん", reading: "onkochishin", meaning: "learning something new from the old", example: { jp: "おんこちしんで、ふるい やり方を もう 一度 しらべて みます。", en: "In the spirit of learning from the past, I'll look into the old method again." }, accept: ["new insight from old learning", "review the old to know the new"], hint: "温故知新 — warming the old, knowing the new. From the Analects of Confucius, and still used unironically in schools." },
        { id: "ja-u198l4-gadeninsui", type: "vocab", front: "がでんいんすい", reading: "gadeninsui", meaning: "arranging things to suit yourself", example: { jp: "その せつめいは がでんいんすいだと 思います。", en: "I think that explanation is self-serving." }, accept: ["self-serving", "special pleading", "twisting it your way"], hint: "我田引水 — drawing the water to your own field. The image is a farmer diverting an irrigation channel; the use is always critical." },
        { id: "ja-u198l4-hanshinhangi", type: "vocab", front: "はんしんはんぎ", reading: "hanshinhangi", meaning: "half believing, half doubting", example: { jp: "はんしんはんぎで 聞いて いましたが、ほんとうでした。", en: "I listened half believing it, but it turned out to be true." }, accept: ["not sure whether to believe", "in two minds"], hint: "半信半疑 — half trust, half doubt. The pattern 半～半～ generates several of these." },
        { id: "ja-u198l4-ikkiichiyu", type: "vocab", front: "いっきいちゆう", reading: "ikkiichiyū", meaning: "swinging between hope and despair", example: { jp: "けっかを 待つ 間、いっきいちゆうして いました。", en: "While waiting for the result I was up and down with every scrap of news." }, accept: ["alternating joy and worry", "riding every high and low"], hint: "一喜一憂 — one joy, one grief. Usually advice not to do it: いっきいちゆうしないほうが いい." },
      ],
    },
  ],
};
