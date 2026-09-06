// Unit 105 — すいそく・たしかさ (Hedging and uncertainty) — B1 / JLPT N3
// Strand B. How sure you are, and how to say so: guessing (かもしれない／ようだ／
// ちがいない), deliberately vague answers (あいまい／なんとなく／とりあえず), checking a
// claim (たしかめる／うたがう), and the adverbs that fix a statement's confidence.
// たぶん, きっと, はず, らしい and みたい are taught below B1 and appear here in examples.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT105 = {
  id: "ja-u105",
  lang: "ja",
  title: "すいそく・たしかさ",
  order: 105,
  stage: "b1",
  lessons: [
    {
      id: "ja-u105l1",
      unit: 105,
      lesson: 1,
      title: "Guessing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you think is true without claiming to know it: かもしれない ようだ ちがいない おそらく どうやら ひょっとすると.",
      items: [
        { id: "ja-u105l1-kamoshirenai", type: "vocab", front: "かもしれない", reading: "kamoshirenai", meaning: "might be", example: { jp: "そらが くらいですから、あめが ふるかもしれません。", en: "The sky is dark, so it might rain." }, drill: { jp: "あめが ふるかもしれない。", en: "It might rain." }, accept: ["may be", "perhaps", "possibly"], hint: "かもしれない is the weakest guess — maybe 50%. でしょう is stronger, に ちがいない stronger still." },
        { id: "ja-u105l1-yoda", type: "vocab", front: "ようだ", reading: "yōda", meaning: "it seems", example: { jp: "みせは あいて いない ようです。だれも いません。", en: "The shop doesn't seem to be open. There's nobody there." }, accept: ["appears to be", "looks like", "seems"], hint: "ようだ is a guess you made from something you saw yourself; らしい is a guess from what you heard." },
        { id: "ja-u105l1-chigainai", type: "vocab", front: "ちがいない", reading: "chigainai", meaning: "must be", example: { jp: "でんきが ついて いますから、いえに いるに ちがいありません。", en: "The lights are on, so they must be home." }, accept: ["no doubt", "certainly", "surely"] },
        { id: "ja-u105l1-osoraku", type: "vocab", front: "おそらく", reading: "osoraku", meaning: "probably", example: { jp: "おそらく あしたも さむいでしょうから、コートを もって いきます。", en: "It'll probably be cold tomorrow too, so I'll take a coat." }, accept: ["most likely", "presumably", "in all likelihood"], hint: "おそらく is written and formal where たぶん is everyday — same strength, different register." },
        { id: "ja-u105l1-doyara", type: "vocab", front: "どうやら", reading: "dōyara", meaning: "apparently", example: { jp: "どうやら みちを まちがえた ようです。もう いちど ちずを みましょう。", en: "Apparently we took the wrong road. Let's look at the map again." }, accept: ["it seems", "somehow", "evidently"] },
        { id: "ja-u105l1-hyottosuruto", type: "vocab", front: "ひょっとすると", reading: "hyottosuruto", meaning: "possibly", example: { jp: "ひょっとすると せんせいは まだ しらないかもしれません。", en: "The teacher possibly doesn't know yet." }, accept: ["maybe", "by any chance", "it could be that"] },
      ],
    },
    {
      id: "ja-u105l2",
      unit: 105,
      lesson: 2,
      title: "Staying vague",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Answer without committing yourself: あいまい なんとなく いちおう とりあえず きがする みこみ.",
      items: [
        { id: "ja-u105l2-aimai", type: "vocab", front: "あいまい", reading: "aimai", meaning: "vague", example: { jp: "その へんじは あいまいで、いくのか いかないのか わかりませんでした。", en: "That answer was vague, and I couldn't tell whether they were going or not." }, accept: ["ambiguous", "unclear", "noncommittal"] },
        { id: "ja-u105l2-nantonaku", type: "vocab", front: "なんとなく", reading: "nantonaku", meaning: "somehow", example: { jp: "りゆうは わかりませんが、なんとなく いやな きが します。", en: "I don't know why, but somehow I have a bad feeling." }, accept: ["vaguely", "for some reason", "without knowing why"] },
        { id: "ja-u105l2-ichio", type: "vocab", front: "いちおう", reading: "ichiō", meaning: "for now", example: { jp: "いちおう じゅんびは しましたが、まだ しんぱいです。", en: "I've prepared, more or less, but I'm still worried." }, accept: ["more or less", "just in case", "tentatively"], hint: "いちおう takes the edge off a claim: 「できました」 is done, 「いちおう できました」 is done-but-don't-look-too-closely." },
        { id: "ja-u105l2-toriaezu", type: "vocab", front: "とりあえず", reading: "toriaezu", meaning: "first of all", example: { jp: "とりあえず メールを おくってから、でんわを します。", en: "First of all I'll send an email, then I'll call." }, accept: ["for the time being", "to start with", "anyway"] },
        { id: "ja-u105l2-kigasuru", type: "vocab", front: "きがする", reading: "kigasuru", meaning: "to have a feeling", example: { jp: "どこかで あった ような きが しますが、なまえを おもいだせません。", en: "I have a feeling we've met somewhere, but I can't remember the name." }, drill: { jp: "そんな きがする。", en: "I have that kind of feeling." }, accept: ["to feel like", "to get the impression", "to sense"] },
        { id: "ja-u105l2-mikomi", type: "vocab", front: "みこみ", reading: "mikomi", meaning: "prospect", example: { jp: "あしたは あめの みこみですから、しあいは ないでしょう。", en: "Rain is expected tomorrow, so there probably won't be a match." }, accept: ["outlook", "likelihood", "expectation"] },
      ],
    },
    {
      id: "ja-u105l3",
      unit: 105,
      lesson: 3,
      title: "Checking what's true",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Test a claim instead of accepting it: かのうせい うたがう よそう しんじる たしかめる かくじつ.",
      items: [
        { id: "ja-u105l3-kanosei", type: "vocab", front: "かのうせい", reading: "kanōsei", meaning: "possibility", example: { jp: "その けいかくが かわる かのうせいも ありますから、きを つけて ください。", en: "There's a possibility that plan will change, so please be careful." }, accept: ["chance", "likelihood", "potential"] },
        { id: "ja-u105l3-utagau", type: "vocab", front: "うたがう", reading: "utagau", meaning: "to doubt", example: { jp: "はじめは その はなしを うたがいましたが、じっさいに みて しんじました。", en: "At first I doubted that story, but I believed it once I actually saw it." }, drill: { jp: "はなしを うたがう。", en: "I doubt the story." }, accept: ["to suspect", "to question", "doubt"] },
        { id: "ja-u105l3-yoso", type: "vocab", front: "よそう", reading: "yosō", meaning: "expectation", example: { jp: "けっかは よそうと ちがいましたが、みんな よく がんばりました。", en: "The result was different from expectations, but everyone did well." }, accept: ["forecast", "prediction", "anticipation"] },
        { id: "ja-u105l3-shinjiru", type: "vocab", front: "しんじる", reading: "shinjiru", meaning: "to believe", example: { jp: "わたしは ともだちの ことばを しんじて いますから、しんぱいして いません。", en: "I believe what my friend said, so I'm not worried." }, drill: { jp: "ことばを しんじる。", en: "I believe the words." }, accept: ["to trust", "to have faith in", "believe"] },
        { id: "ja-u105l3-tashikameru", type: "vocab", front: "たしかめる", reading: "tashikameru", meaning: "to check", example: { jp: "でかける まえに、まどが あいて いないか たしかめます。", en: "Before going out I check whether the windows are open." }, accept: ["to make sure", "to verify", "to confirm"], hint: "たしか (certain) → たしかめる (make certain). The verb is the act of turning a guess into a fact." },
        { id: "ja-u105l3-kakujitsu", type: "vocab", front: "かくじつ", reading: "kakujitsu", meaning: "certain", example: { jp: "かくじつな じょうほうでは ありませんが、みせは やすみの ようです。", en: "It isn't certain information, but the shop seems to be closed." }, accept: ["reliable", "sure", "definite"] },
      ],
    },
    {
      id: "ja-u105l4",
      unit: 105,
      lesson: 4,
      title: "How sure, exactly",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Set the confidence of a statement precisely: まちがいなく ほぼ とはかぎらない なんとも まさに あんがい.",
      items: [
        { id: "ja-u105l4-machigainaku", type: "vocab", front: "まちがいなく", reading: "machigainaku", meaning: "without a doubt", example: { jp: "あの ひとは まちがいなく くると おもいますから、もう すこし まちましょう。", en: "That person will come without a doubt, so let's wait a little longer." }, accept: ["definitely", "certainly", "for sure"] },
        { id: "ja-u105l4-hobo", type: "vocab", front: "ほぼ", reading: "hobo", meaning: "almost", example: { jp: "じゅんびは ほぼ おわりましたが、まだ すこし のこって います。", en: "The preparation is almost finished, but a little is still left." }, accept: ["nearly", "roughly", "practically"] },
        { id: "ja-u105l4-towakagiranai", type: "vocab", front: "とはかぎらない", reading: "towakagiranai", meaning: "isn't necessarily", example: { jp: "たかい ものが いつも いいとは かぎりませんから、よく ひかくして ください。", en: "Expensive things aren't always good, so compare them carefully." }, accept: ["not always", "not necessarily"], hint: "The B1 way to push back on a generalisation without calling it wrong: 「Xとは かぎりません」 = X isn't a rule." },
        { id: "ja-u105l4-nantomo", type: "vocab", front: "なんとも", reading: "nantomo", meaning: "can't say either way", example: { jp: "けっかは なんとも いえませんが、できる ことは しました。", en: "I can't say either way what the result will be, but I did what I could." }, accept: ["nothing definite", "not at all", "hard to say"] },
        { id: "ja-u105l4-masani", type: "vocab", front: "まさに", reading: "masani", meaning: "exactly", example: { jp: "これは まさに わたしが さがして いた ほんです。", en: "This is exactly the book I was looking for." }, accept: ["precisely", "just", "truly"] },
        { id: "ja-u105l4-angai", type: "vocab", front: "あんがい", reading: "angai", meaning: "unexpectedly", example: { jp: "しけんは あんがい かんたんでしたから、はやく おわりました。", en: "The exam was unexpectedly easy, so I finished early." }, accept: ["surprisingly", "more than expected", "contrary to expectation"] },
      ],
    },
  ],
};
