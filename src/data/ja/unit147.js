// JA Unit 147 — ごい・N3・6 (ふくし・2 — manner, accident, attitude) — B1 / JLPT N3
// Strand D, coverage 6 of 14. The other half of the adverb gap: not HOW MUCH but HOW.
// Two things make this unit worth its slot. First, the ～り mimetic adverbs (ぐっすり,
// こっそり, ばらばら, ぴったり) are a closed, learnable family that carries an enormous
// amount of everyday meaning and is almost absent below B1. Second, lesson 4 is the
// attitude adverbs — せっかく, わざわざ, どうせ, べつに — which do not translate into single
// English words at all, and which a learner will otherwise never produce.
export const UNIT147 = {
  id: "ja-u147",
  lang: "ja",
  title: "ごい・N3・6",
  order: 147,
  stage: "b1",
  lessons: [
    {
      id: "ja-u147l1",
      unit: 147,
      lesson: 1,
      title: "Carefully, quietly, soundly",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how an action was carried out: きちんと, ちゃんと, そっと, じっと, こっそり, ぐっすり.",
      items: [
        { id: "ja-u147l1-kichinto", type: "vocab", front: "きちんと", reading: "kichinto", meaning: "neatly, properly", example: { jp: "つかったものは、きちんとかたづけてください。", en: "Please put away properly whatever you've used." }, accept: ["tidily", "correctly", "in good order"], hint: "Emphasises the ORDER of the result — things in their right places, buttons done up, papers square." },
        { id: "ja-u147l1-chanto", type: "vocab", front: "ちゃんと", reading: "chanto", meaning: "properly, without cutting corners", example: { jp: "あさごはんをちゃんとたべてから、でかけなさい。", en: "Eat a proper breakfast before you go out." }, accept: ["thoroughly", "as you should", "duly"], hint: "The casual twin of きちんと, and about DOING it right rather than it LOOKING right. Parents and teachers live on this word." },
        { id: "ja-u147l1-sotto", type: "vocab", front: "そっと", reading: "sotto", meaning: "gently, softly", example: { jp: "あかちゃんがねているので、そっとドアをしめました。", en: "The baby was asleep, so I closed the door gently." }, accept: ["quietly", "lightly", "without disturbing"], hint: "Gentleness so as not to disturb. そっとしておく = leave someone alone, which is a kindness rather than neglect." },
        { id: "ja-u147l1-jitto", type: "vocab", front: "じっと", reading: "jitto", meaning: "motionlessly, fixedly", example: { jp: "ねこはじっとこちらをみていました。", en: "The cat was staring fixedly at me." }, accept: ["still", "intently", "patiently"], hint: "No movement, but full attention — staring, or enduring. じっとがまんする is bearing something without flinching." },
        { id: "ja-u147l1-kossori", type: "vocab", front: "こっそり", reading: "kossori", meaning: "secretly, on the quiet", example: { jp: "みんながねているあいだに、こっそりでかけました。", en: "While everyone was asleep, I slipped out quietly." }, accept: ["stealthily", "sneakily", "without telling anyone"], hint: "Hiding the action from people. そっと is about being gentle; こっそり is about not being caught." },
        { id: "ja-u147l1-gussuri", type: "vocab", front: "ぐっすり", reading: "gussuri", meaning: "soundly (asleep)", example: { jp: "つかれていたので、ゆうべはぐっすりねました。", en: "I was tired, so last night I slept soundly." }, accept: ["deeply (sleep)", "like a log", "fast asleep"], hint: "Attaches to sleeping and nothing else. ぐっすりねる is effectively one word — a good night's sleep in two syllables." },
      ],
    },
    {
      id: "ja-u147l2",
      unit: 147,
      lesson: 2,
      title: "Vaguely, exactly, all over the place",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a state rather than an action: ぼんやり, ばらばら, ぴったり, ぺらぺら, あいかわらず, まさに.",
      items: [
        { id: "ja-u147l2-bonyari", type: "vocab", front: "ぼんやり", reading: "bonyari", meaning: "vacantly; blurrily", example: { jp: "つかれていて、いちにちぼんやりしていました。", en: "I was tired and spent the whole day in a daze." }, accept: ["absent-mindedly", "faintly", "vaguely"], hint: "Two senses that share an idea: unfocused. A blurred outline and an unfocused mind take the same word." },
        { id: "ja-u147l2-barabara", type: "vocab", front: "ばらばら", reading: "barabara", meaning: "scattered; in pieces", example: { jp: "みんないけんがばらばらで、なかなかきまりません。", en: "Everyone's opinions are all over the place, so nothing gets decided." }, accept: ["disunited", "apart", "every which way"], hint: "Things that should be together but aren't — papers, families, opinions. The opposite of いっしょ." },
        { id: "ja-u147l2-pittari", type: "vocab", front: "ぴったり", reading: "pittari", meaning: "exactly; a perfect fit", example: { jp: "このふくはサイズがぴったりで、きもちがいいです。", en: "These clothes fit perfectly and feel great." }, accept: ["just right", "snugly", "precisely"], hint: "Clothes, times and matches: 3じぴったり is 'three on the dot'. Also 'ideally suited': あなたにぴったりのしごと." },
        { id: "ja-u147l2-perapera", type: "vocab", front: "ぺらぺら", reading: "perapera", meaning: "fluently", example: { jp: "かのじょはえいごがぺらぺらで、つうやくもできます。", en: "She's fluent in English and can even interpret." }, accept: ["fluent", "flowing (speech)", "glibly"], hint: "The compliment you'll receive long before you deserve it. It can also mean 'talks too freely' — ぺらぺらしゃべる, letting things slip." },
        { id: "ja-u147l2-aikawarazu", type: "vocab", front: "あいかわらず", reading: "aikawarazu", meaning: "as always, same as ever", example: { jp: "あいかわらずいそがしそうですね。おげんきですか。", en: "You look as busy as ever. How are you?" }, accept: ["still", "unchanged", "as usual"], hint: "A warm greeting-word for someone you haven't seen in a while. Depending on tone it's either affectionate or resigned." },
        { id: "ja-u147l2-masani", type: "vocab", front: "まさに", reading: "masani", meaning: "exactly, precisely", example: { jp: "それはまさにわたしがいいたかったことです。", en: "That is exactly what I wanted to say." }, accept: ["just so", "indeed", "truly"], hint: "Confirms an identification: this is the very thing. Stronger and more formal than ちょうど, which is about fit and timing." },
      ],
    },
    {
      id: "ja-u147l3",
      unit: 147,
      lesson: 3,
      title: "By accident, on impulse, suddenly",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Explain that something wasn't planned: うっかり, つい, おもわず, いきなり, ふと, たまたま.",
      items: [
        { id: "ja-u147l3-ukkari", type: "vocab", front: "うっかり", reading: "ukkari", meaning: "carelessly, by mistake", example: { jp: "うっかりして、かさをでんしゃにわすれました。", en: "I wasn't paying attention and left my umbrella on the train." }, accept: ["absent-mindedly", "inadvertently", "without thinking"], hint: "A lapse of attention. Pairs almost automatically with てしまいました — the grammar of regret meets the adverb of regret." },
        { id: "ja-u147l3-tsui", type: "vocab", front: "つい", reading: "tsui", meaning: "in spite of oneself", example: { jp: "おいしかったので、つい３つもたべてしまいました。", en: "It was delicious, so I ended up eating three despite myself." }, accept: ["unintentionally", "just", "before I knew it"], hint: "You knew better and did it anyway — weakness, not carelessness. That's the line between つい and うっかり." },
        { id: "ja-u147l3-omowazu", type: "vocab", front: "おもわず", reading: "omowazu", meaning: "involuntarily, before you can stop yourself", example: { jp: "あまりおかしかったので、おもわずわらってしまいました。", en: "It was so funny I burst out laughing before I could stop." }, accept: ["reflexively", "instinctively", "without meaning to"], hint: "Literally 'without thinking'. The body acted first — laughing, shouting, reaching out. Stronger and more physical than つい." },
        { id: "ja-u147l3-ikinari", type: "vocab", front: "いきなり", reading: "ikinari", meaning: "abruptly, out of nowhere", example: { jp: "いきなりなまえをよばれて、びっくりしました。", en: "My name was called out of nowhere and I was startled." }, accept: ["all of a sudden", "without warning", "point-blank"], hint: "Sudden AND without the usual preparation — skipping steps. とつぜん is merely sudden; いきなり implies it should have been led up to." },
        { id: "ja-u147l3-futo", type: "vocab", front: "ふと", reading: "futo", meaning: "on a sudden impulse", example: { jp: "ふとそらをみたら、にじがでていました。", en: "I happened to look up and there was a rainbow." }, accept: ["by chance", "idly", "it just occurred to me"], hint: "A small, quiet suddenness — a thought arriving, a glance upward. ふとおもいだした = 'it just came back to me'." },
        { id: "ja-u147l3-tamatama", type: "vocab", front: "たまたま", reading: "tamatama", meaning: "as it happened, by chance", example: { jp: "たまたまえきでともだちにあいました。", en: "I happened to run into a friend at the station." }, accept: ["by coincidence", "as luck would have it", "just then"], hint: "Coincidence with no cause behind it. Useful for deflecting credit: たまたまうまくいっただけです — 'I just got lucky'." },
      ],
    },
    {
      id: "ja-u147l4",
      unit: 147,
      lesson: 4,
      title: "The attitude adverbs",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Carry a feeling in one word: せっかく (after all that effort), わざわざ (you went out of your way), どうせ (it won't matter anyway).",
      items: [
        { id: "ja-u147l4-sekkaku", type: "vocab", front: "せっかく", reading: "sekkaku", meaning: "after going to the trouble", example: { jp: "せっかくつくったのに、だれもたべませんでした。", en: "I went to all the trouble of making it, and nobody ate it." }, accept: ["specially", "with effort", "since you've come all this way"], hint: "Marks effort that deserves not to be wasted — with のに it's a lament, with だから it's an invitation: せっかくだから、たべていって." },
        { id: "ja-u147l4-wazawaza", type: "vocab", front: "わざわざ", reading: "wazawaza", meaning: "to go out of one's way", example: { jp: "わざわざきていただいて、ありがとうございます。", en: "Thank you for coming all this way specially." }, accept: ["specially", "took the trouble to", "needlessly"], hint: "Thanking someone (わざわざすみません) or criticizing pointless effort — tone decides which. せっかく is about the value; わざわざ is about the trouble." },
        { id: "ja-u147l4-wazato", type: "vocab", front: "わざと", reading: "wazato", meaning: "on purpose, deliberately", example: { jp: "わざとまけたわけではありません。ほんとうによわかったんです。", en: "It's not that I lost on purpose — I really was worse." }, accept: ["intentionally", "knowingly", "deliberately"], hint: "One syllable apart from わざわざ and quite different: わざと is intent, usually of a bad act. Don't mix them up in an apology." },
        { id: "ja-u147l4-dose", type: "vocab", front: "どうせ", reading: "dōse", meaning: "anyway, in any case (resigned)", example: { jp: "どうせまにあわないから、ゆっくりいきましょう。", en: "We won't make it anyway, so let's take our time." }, accept: ["at any rate", "no matter what", "might as well"], hint: "Resignation baked into the grammar — the outcome is settled and effort is pointless. Said about yourself it sounds gloomy; said to someone else, dismissive." },
        { id: "ja-u147l4-betsuni", type: "vocab", front: "べつに", reading: "betsuni", meaning: "not particularly", example: { jp: "べつにいやなわけではありませんが、いきたくないです。", en: "It's not that I mind especially, but I don't want to go." }, accept: ["nothing special", "not really", "no reason in particular"], hint: "Needs a negative. べつに。 alone is a famously non-committal answer — technically 'nothing in particular', in practice 'I'd rather not say'." },
        { id: "ja-u147l4-chinamini", type: "vocab", front: "ちなみに", reading: "chinamini", meaning: "incidentally, by the way", example: { jp: "かいぎは3じからです。ちなみに、ばしょはかわりました。", en: "The meeting is from three. Incidentally, the venue has changed." }, accept: ["for reference", "as an aside", "by the way"], hint: "Adds a related detail to what you just said. Unlike ところで it does NOT change the subject — it deepens it." },
      ],
    },
  ],
};
