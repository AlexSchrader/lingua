// Unit 105 — すいそく・あいまい ("Hedging and uncertainty") — B1 / JLPT N3
// A2 (u30, u44) already teaches かもしれません, でしょう, ようです, らしい, みたい, はず —
// the basic guess. This unit is the register above it: the *nouns* of likelihood
// (かのうせい, みこみ, かくりつ), the adverbs that mark how far you'll commit
// (おそらく, どうやら, かならずしも), and the written hedges a B1 learner meets in an
// article (～とおもわれます, ～とみられます). Hedging is what stops a confident
// beginner sounding rude, so it earns a unit of its own.
export const UNIT105 = {
  id: "ja-u105",
  lang: "ja",
  title: "すいそく・あいまい",
  order: 105,
  stage: "b1",
  lessons: [
    {
      id: "ja-u105l1",
      unit: 105,
      lesson: 1,
      title: "How likely it is",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about how likely something is: かのうせい みこみ すいそく そうぞう かくりつ ふたしか.",
      items: [
        { id: "ja-u105l1-kanosei", type: "vocab", front: "かのうせい", reading: "kanōsei", meaning: "possibility", example: { jp: "雨がふるかのうせいがあるので、かさを持って行きます。", en: "There's a possibility it will rain, so I'll take an umbrella." }, accept: ["chance", "likelihood", "potential"], hint: "可能性 = 可能 (possible) + 性 (nature). かのうせいが高い / 低い — the standard way to grade a chance." },
        { id: "ja-u105l1-mikomi", type: "vocab", front: "みこみ", reading: "mikomi", meaning: "prospect", example: { jp: "ことしじゅうにおわるみこみですが、まだわかりません。", en: "It's expected to finish within this year, but we don't know yet." }, accept: ["outlook", "expectation", "forecast"], hint: "見込み = what you can see coming. みこみがある said of a person means 'they show promise'." },
        { id: "ja-u105l1-suisoku", type: "vocab", front: "すいそく", reading: "suisoku", meaning: "conjecture", example: { jp: "それはただのすいそくで、しょうこは何もありません。", en: "That's just conjecture — there's no evidence at all." }, accept: ["guess", "speculation", "to surmise"], hint: "推測 = 推 (infer) + 測 (measure): reasoning your way to a guess. Neutral — not the same as a wild guess." },
        { id: "ja-u105l1-sozo", type: "vocab", front: "そうぞう", reading: "sōzō", meaning: "imagination", example: { jp: "そうぞうしていたより、ずっとおおきい町でした。", en: "It was a much bigger town than I had imagined." }, accept: ["to imagine", "guess", "picture"], hint: "想像 = 想 (think) + 像 (image): making a picture in your head. そうぞうもできない = 'I can't even imagine it'." },
        { id: "ja-u105l1-kakuritsu", type: "vocab", front: "かくりつ", reading: "kakuritsu", meaning: "probability", example: { jp: "あしたの雨のかくりつは六十パーセントだそうです。", en: "They say tomorrow's chance of rain is sixty percent." }, accept: ["chance", "odds", "rate"], hint: "確率 = 確 (certain) + 率 (rate). The number version of かのうせい — weather, tests, dice." },
        { id: "ja-u105l1-futashika", type: "vocab", front: "ふたしか", reading: "futashika", meaning: "uncertain", example: { jp: "その話はふたしかなので、ほかの人にも聞いてみます。", en: "That story is uncertain, so I'll ask other people too." }, accept: ["unsure", "unreliable", "doubtful"], hint: "不確か = 不 (not) + 確か (certain). The 不 prefix negates: ふべん (inconvenient), ふあん (uneasy), ふたしか." },
      ],
    },
    {
      id: "ja-u105l2",
      unit: 105,
      lesson: 2,
      title: "How far you'll commit",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Mark how sure you are: おそらく どうやら なんとなく いちおう かならずしも ひょっとしたら.",
      items: [
        { id: "ja-u105l2-osoraku", type: "vocab", front: "おそらく", reading: "osoraku", meaning: "probably", example: { jp: "おそらくかれはもう知っていると思いますが、いちおう話します。", en: "He probably already knows, but I'll tell him just in case." }, accept: ["likely", "in all probability", "perhaps"], hint: "恐らく is the written, more confident たぶん. It usually pairs with ～でしょう or ～と思います at the end." },
        { id: "ja-u105l2-doyara", type: "vocab", front: "どうやら", reading: "dōyara", meaning: "it seems", example: { jp: "どうやら道をまちがえたようで、駅が見えません。", en: "It seems we took the wrong road — I can't see the station." }, accept: ["apparently", "somehow", "evidently"], hint: "どうやら introduces a conclusion drawn from evidence in front of you. It leans on ～ようだ or ～らしい to finish the sentence." },
        { id: "ja-u105l2-nantonaku", type: "vocab", front: "なんとなく", reading: "nantonaku", meaning: "somehow", example: { jp: "りゆうはありませんが、なんとなくこの店がすきです。", en: "There's no reason, but somehow I like this shop." }, accept: ["for some reason", "vaguely", "without knowing why"], hint: "何となく = 'I couldn't tell you why'. Perfect for feelings you can't justify — and a very natural thing to say in Japanese." },
        { id: "ja-u105l2-ichio", type: "vocab", front: "いちおう", reading: "ichiō", meaning: "just in case", example: { jp: "いちおうよやくしましたが、行けるかどうかわかりません。", en: "I made a reservation just in case, but I don't know whether I can go." }, accept: ["for now", "more or less", "tentatively"], hint: "一応 = 'to the minimum acceptable degree'. It quietly lowers what you're claiming: いちおうできます = 'I can, sort of'." },
        { id: "ja-u105l2-kanarazushimo", type: "vocab", front: "かならずしも", reading: "kanarazushimo", meaning: "not necessarily", example: { jp: "高いものがかならずしもいいとはかぎりません。", en: "Expensive things aren't necessarily good." }, accept: ["not always", "not invariably"], hint: "必ずしも always ends in a negative — かならずしも～ない. Alone it's ungrammatical, exactly like たいして." },
        { id: "ja-u105l2-hyottoshitara", type: "vocab", front: "ひょっとしたら", reading: "hyottoshitara", meaning: "possibly", example: { jp: "ひょっとしたら、あしたは来られないかもしれません。", en: "Possibly I won't be able to come tomorrow." }, accept: ["maybe", "by any chance", "perhaps"], hint: "ひょっとしたら opens a long-shot possibility and closes with かもしれません. Softer and more tentative than おそらく." },
      ],
    },
    {
      id: "ja-u105l3",
      unit: 105,
      lesson: 3,
      title: "Being deliberately vague",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Leave something open on purpose: あいまい とか なんて かどうか いわゆる なんらか.",
      items: [
        { id: "ja-u105l3-aimai", type: "vocab", front: "あいまい", reading: "aimai", meaning: "vague", example: { jp: "へんじがあいまいだったので、もう一どたしかめました。", en: "The reply was vague, so I checked once more." }, accept: ["ambiguous", "unclear", "noncommittal"], hint: "曖昧 = deliberately unclear. In Japanese an あいまいなへんじ is often politeness, not evasion — a soft no." },
        { id: "ja-u105l3-toka", type: "vocab", front: "とか", reading: "toka", meaning: "things like", example: { jp: "しゅうまつはそうじとかせんたくとかで、ゆっくりできません。", en: "At the weekend it's cleaning and laundry and so on, so I can't relax." }, accept: ["and so on", "or something", "such as"], hint: "とか lists examples loosely, implying there are more. Repeat it after each item: AとかBとか. Very common in speech." },
        { id: "ja-u105l3-nante", type: "vocab", front: "なんて", reading: "nante", meaning: "something like", example: { jp: "私になんてできませんよ、むずかしすぎます。", en: "Someone like me couldn't do it — it's too difficult." }, accept: ["such as", "the likes of", "how..."], hint: "なんて dismisses or downplays what comes before it: 私なんて (someone like me). It can also mean 'how ～!' — なんてきれいな." },
        { id: "ja-u105l3-kadoka", type: "vocab", front: "かどうか", reading: "kadōka", meaning: "whether or not", example: { jp: "行けるかどうか、あしたのあされんらくします。", en: "I'll let you know tomorrow morning whether or not I can go." }, accept: ["if or not", "whether"], hint: "かどうか turns a yes/no question into a noun clause: 行くかどうかわかりません. With a question word you drop どうか: いつ来るかわかりません." },
        { id: "ja-u105l3-iwayuru", type: "vocab", front: "いわゆる", reading: "iwayuru", meaning: "so-called", example: { jp: "これがいわゆる日本のおもてなしというものです。", en: "This is what is known as Japanese hospitality." }, accept: ["what is known as", "the so-called"], hint: "いわゆる sits directly before a noun and flags it as the commonly-used label — neutral, not sarcastic as in English." },
        { id: "ja-u105l3-nanraka", type: "vocab", front: "なんらか", reading: "nanraka", meaning: "some kind of", example: { jp: "なんらかのりゆうがあると思いますが、聞いていません。", en: "I think there's some reason or other, but I haven't asked." }, accept: ["some sort of", "one way or another"], hint: "何らか = 'some ～ or other', without saying which. Written register: なんらかのたいおうがひつようです." },
      ],
    },
    {
      id: "ja-u105l4",
      unit: 105,
      lesson: 4,
      title: "Written hedges",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Hedge the way reports do: ちがいない かぎり きがします おもわれます みられます おそれ.",
      items: [
        { id: "ja-u105l4-chigainai", type: "vocab", front: "ちがいない", reading: "chigainai", meaning: "must be", example: { jp: "電気がついているので、家にいるにちがいありません。", en: "The lights are on, so they must be at home." }, accept: ["surely", "no doubt", "certainly"], hint: "～にちがいない = a conclusion you're sure of from evidence. Polite form: ～にちがいありません. Stronger than はず." },
        { id: "ja-u105l4-kagiri", type: "vocab", front: "かぎり", reading: "kagiri", meaning: "as far as", example: { jp: "私が知っているかぎり、その店はまだ開いています。", en: "As far as I know, that shop is still open." }, accept: ["limit", "to the extent that", "unless"], hint: "限り fences your claim to what you actually know: 知っているかぎり, 見たかぎり. The honest hedge." },
        { id: "ja-u105l4-kigashimasu", type: "vocab", front: "きがします", reading: "kigashimasu", meaning: "have a feeling", example: { jp: "だれかによばれたきがして、うしろを見ました。", en: "I had a feeling someone called me, so I looked behind." }, accept: ["to feel like", "sense", "seem"], hint: "気がします = an impression without evidence. ～ような気がします is even softer, and is how you disagree gently." },
        { id: "ja-u105l4-omowaremasu", type: "vocab", front: "おもわれます", reading: "omowaremasu", meaning: "is thought to be", example: { jp: "この方ほうがいちばんいいとおもわれます。", en: "This method is thought to be the best." }, accept: ["it seems", "is considered", "appears"], hint: "思われます is the passive of 思います, and that passive is the hedge: it removes *you* as the one claiming it. The voice of reports." },
        { id: "ja-u105l4-miraremasu", type: "vocab", front: "みられます", reading: "miraremasu", meaning: "is seen as", example: { jp: "らいねんは人がふえるとみられています。", en: "It is expected that the population will increase next year." }, accept: ["is expected", "is regarded as", "is viewed"], hint: "見られます — the news anchor's verb. ～とみられています = 'it is believed that ～', with nobody named as the believer." },
        { id: "ja-u105l4-osore", type: "vocab", front: "おそれ", reading: "osore", meaning: "risk", example: { jp: "大雨のおそれがあるので、あしたの山は中止です。", en: "There's a risk of heavy rain, so tomorrow's hike is cancelled." }, accept: ["fear", "danger", "concern"], hint: "恐れ = the risk of something bad. ～おそれがあります is the exact phrasing of a weather warning or a product caution." },
      ],
    },
  ],
};
