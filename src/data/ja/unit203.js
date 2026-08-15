// Unit 203 — せつびご・1 (suffixes: 性 化 的 感) — B2 / JLPT N2
// Strand D, coverage 11 of 16. The other end of the word from u202. These four suffixes
// turn nouns into abstractions, processes, adjectives and feelings, and between them they
// account for a large share of the vocabulary in any B2 text. Learn the suffix and the
// words stop needing to be learned one at a time.
export const UNIT203 = {
  id: "ja-u203",
  lang: "ja",
  title: "せつびご・1",
  order: 203,
  stage: "b2",
  lessons: [
    {
      id: "ja-u203l1",
      unit: 203,
      lesson: 1,
      title: "～せい: the quality of being",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Turn a quality into a noun: きけんせい, あんぜんせい, じつようせい, しんらいせい, しゅたいせい, せっきょくせい.",
      items: [
        { id: "ja-u203l1-kikensei", type: "vocab", front: "きけんせい", reading: "kikensei", meaning: "the risk (of something happening)", example: { jp: "同じ ことが 起こる きけんせいが あります。", en: "There is a risk of the same thing happening." }, accept: ["likelihood of danger", "riskiness"], hint: "～せい names the PROPERTY. きけん is dangerous; きけんせい is the degree to which something is. ～せいがある is the frame you will meet most." },
        { id: "ja-u203l1-anzensei", type: "vocab", front: "あんぜんせい", reading: "anzensei", meaning: "safety (as a property)", example: { jp: "新しい 車の あんぜんせいを しらべて います。", en: "They are testing the safety of the new car." }, accept: ["how safe it is", "safety level"] },
        { id: "ja-u203l1-jitsuyosei", type: "vocab", front: "じつようせい", reading: "jitsuyōsei", meaning: "practicality", example: { jp: "デザインは いいですが、じつようせいが 低いです。", en: "The design is good, but it isn't very practical." }, accept: ["usefulness", "practical value"] },
        { id: "ja-u203l1-shinraisei", type: "vocab", front: "しんらいせい", reading: "shinraisei", meaning: "reliability", example: { jp: "この 数字の しんらいせいは 高いと 思います。", en: "I think these figures are highly reliable." }, accept: ["trustworthiness", "dependability"] },
        { id: "ja-u203l1-shutaisei", type: "vocab", front: "しゅたいせい", reading: "shutaisei", meaning: "acting on one's own initiative", example: { jp: "しゅたいせいを 持って 動いて ほしいです。", en: "I'd like you to act on your own initiative." }, accept: ["independence of action", "self-direction"], hint: "A word Japanese workplaces and schools use constantly, and one English has no single word for — being the subject of your own actions." },
        { id: "ja-u203l1-sekkyokusei", type: "vocab", front: "せっきょくせい", reading: "sekkyokusei", meaning: "proactiveness", example: { jp: "もう 少し せっきょくせいが ほしいと 言われました。", en: "I was told they'd like to see a bit more initiative." }, accept: ["drive", "willingness to act"], hint: "せっきょくてき (B1 u155) is the adjective; ～せい makes it the measurable quality. Same root, different job." },
      ],
    },
    {
      id: "ja-u203l2",
      unit: 203,
      lesson: 2,
      title: "～か: becoming",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a process of change: きかいか, こくさいか, じどうか, たようか, きんだいか.",
      items: [
        { id: "ja-u203l2-kikaika", type: "vocab", front: "きかいか", reading: "kikaika", meaning: "mechanisation", example: { jp: "きかいかが 進んで、しごとの ないようが 変わりました。", en: "Mechanisation advanced and the nature of the work changed." }, accept: ["automating (by machine)", "becoming mechanised"], hint: "～か is 'becoming' — the same 化 as 変化. It attaches to a noun and makes it a process, always with する available." },
        { id: "ja-u203l2-kokusaika", type: "vocab", front: "こくさいか", reading: "kokusaika", meaning: "internationalisation", example: { jp: "こくさいかに よって、外国の 人が ふえました。", en: "With internationalisation, the number of people from abroad has grown." }, accept: ["going international", "globalising"] },
        { id: "ja-u203l2-jidoka", type: "vocab", front: "じどうか", reading: "jidōka", meaning: "automation", example: { jp: "受け入れの てつづきが じどうかされました。", en: "The intake procedure has been automated." }, accept: ["automating", "made automatic"] },
        { id: "ja-u203l2-tayoka", type: "vocab", front: "たようか", reading: "tayōka", meaning: "diversification", example: { jp: "はたらき方の たようかが 進んで います。", en: "Ways of working are diversifying." }, accept: ["becoming diverse", "broadening out"] },
        { id: "ja-u203l2-kindaika", type: "vocab", front: "きんだいか", reading: "kindaika", meaning: "modernisation", example: { jp: "この 国の きんだいかは 早かったです。", en: "This country's modernisation was rapid." }, accept: ["becoming modern", "modernising"], hint: "Five cards rather than six here, because ～か words that are not already owned by a thematic unit are genuinely scarce — the lesson band is 5–8 and five is honest." },
      ],
    },
    {
      id: "ja-u203l3",
      unit: 203,
      lesson: 3,
      title: "～てき: turning a noun into an adjective",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a way of being or seeing: きほんてき, いっぱんてき, でんとうてき, しゅかんてき, きゃっかんてき, ひかくてき.",
      items: [
        { id: "ja-u203l3-kihonteki", type: "vocab", front: "きほんてき", reading: "kihonteki", meaning: "basic, fundamental", example: { jp: "きほんてきな 考え方は 変わって いません。", en: "The basic way of thinking hasn't changed." }, accept: ["fundamental", "in essence"], hint: "きほんてきに at the start of a sentence means 'basically, as a rule' — one of the most-used hedges in spoken Japanese." },
        { id: "ja-u203l3-ippanteki", type: "vocab", front: "いっぱんてき", reading: "ippanteki", meaning: "general, common", example: { jp: "それが いっぱんてきな やり方です。", en: "That's the general way of doing it." }, accept: ["typical", "widespread"] },
        { id: "ja-u203l3-dentoteki", type: "vocab", front: "でんとうてき", reading: "dentōteki", meaning: "traditional", example: { jp: "でんとうてきな 作り方を 守って います。", en: "They keep to the traditional method." }, accept: ["in the traditional way", "time-honoured"] },
        { id: "ja-u203l3-shukanteki", type: "vocab", front: "しゅかんてき", reading: "shukanteki", meaning: "subjective", example: { jp: "しゅかんてきな 意見ですが、私は こちらが すきです。", en: "It's a subjective view, but I prefer this one." }, accept: ["personal (view)", "from one's own angle"], hint: "しゅかんてき flags your own opinion as opinion — a hedge, and a polite one. Its pair きゃっかんてき is the next card." },
        { id: "ja-u203l3-kyakkanteki", type: "vocab", front: "きゃっかんてき", reading: "kyakkanteki", meaning: "objective", example: { jp: "きゃっかんてきな 数字で 見て みましょう。", en: "Let's look at it with objective figures." }, accept: ["impartial", "from outside"] },
        { id: "ja-u203l3-hikakuteki", type: "vocab", front: "ひかくてき", reading: "hikakuteki", meaning: "comparatively, relatively", example: { jp: "今日は ひかくてき すずしいです。", en: "It's relatively cool today." }, accept: ["fairly", "on the whole"], hint: "The odd one out: it works as an ADVERB straight onto an adjective, with no に. ひかくてき やすい, ひかくてき はやい." },
      ],
    },
    {
      id: "ja-u203l4",
      unit: 203,
      lesson: 4,
      title: "～かん: the sense of something",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a feeling as a noun: きんちょうかん, せきにんかん, まんぞくかん, いわかん, きたいかん, きょりかん.",
      items: [
        { id: "ja-u203l4-kinchokan", type: "vocab", front: "きんちょうかん", reading: "kinchōkan", meaning: "a sense of tension", example: { jp: "しあいの 前は、いい きんちょうかんが あります。", en: "Before a match there's a good kind of tension." }, accept: ["tension (felt)", "edge"], hint: "～かん names the FELT sense of something, not the thing. きんちょう is being tense; きんちょうかん is the atmosphere of it." },
        { id: "ja-u203l4-sekininkan", type: "vocab", front: "せきにんかん", reading: "sekininkan", meaning: "a sense of responsibility", example: { jp: "せきにんかんが 強い 人だと 思います。", en: "I think he has a strong sense of responsibility." }, accept: ["conscientiousness", "feeling of duty"] },
        { id: "ja-u203l4-manzokukan", type: "vocab", front: "まんぞくかん", reading: "manzokukan", meaning: "a feeling of satisfaction", example: { jp: "終わった あとの まんぞくかんが 大きかったです。", en: "The sense of satisfaction afterwards was considerable." }, accept: ["fulfilment", "sense of having done it"] },
        { id: "ja-u203l4-iwakan", type: "vocab", front: "いわかん", reading: "iwakan", meaning: "a sense that something is off", example: { jp: "その 説明には 少し いわかんが あります。", en: "There's something slightly off about that explanation." }, accept: ["feeling of wrongness", "discomfort", "doesn't sit right"], hint: "The most useful of the four: it lets you object to something without being able to say why yet." },
        { id: "ja-u203l4-kitaikan", type: "vocab", front: "きたいかん", reading: "kitaikan", meaning: "a sense of expectation", example: { jp: "新しい 店に きたいかんが 高まって います。", en: "Expectations are rising for the new shop." }, accept: ["anticipation", "buzz"] },
        { id: "ja-u203l4-kyorikan", type: "vocab", front: "きょりかん", reading: "kyorikan", meaning: "a sense of distance (between people)", example: { jp: "きょりかんを 大切に する 人です。", en: "She's someone who values keeping a proper distance." }, accept: ["personal distance", "how close you get"], hint: "Social rather than physical — how much closeness a relationship is meant to have. Getting it wrong is a common complaint about foreigners and about colleagues alike." },
      ],
    },
  ],
};
