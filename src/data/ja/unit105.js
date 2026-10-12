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
        { id: "ja-u105l1-yoda", type: "vocab", front: "ようだ", reading: "yōda", meaning: "it seems", example: { jp: "みせは あいて いない ようです。だれも いません。", en: "The shop doesn't seem to be open. There's nobody there." }, drill: { jp: "あめが ふる ようだ。", en: "It looks like rain." }, accept: ["appears to be", "looks like", "seems"], hint: "ようだ is a guess you made from something you saw yourself; らしい is a guess from what you heard." },
        { id: "ja-u105l1-chigainai", type: "vocab", front: "ちがいない", reading: "chigainai", meaning: "must be", example: { jp: "でんきが ついて いますから、いえに いるに ちがいありません。", en: "The lights are on, so they must be home." }, drill: { jp: "かれが わるいに ちがいない。", en: "He must be the one at fault." }, accept: ["no doubt", "certainly", "surely"], hint: "chi-ga-i-NA-i — five beats. Literally there is no mistake, so it is a conclusion you are sure of from evidence — not a guess. It follows に after a noun, and the polite form is ちがいありません." },
        { id: "ja-u105l1-osoraku", type: "vocab", front: "おそらく", reading: "osoraku", meaning: "probably (in all likelihood)", example: { jp: "おそらく あしたも さむいでしょうから、コートを もって いきます。", en: "It'll probably be cold tomorrow too, so I'll take a coat." }, drill: { jp: "おそらく だれも しらないでしょう。", en: "Probably nobody knows." }, accept: ["most likely", "presumably", "in all likelihood"], hint: "おそらく is written and formal where たぶん is everyday — same strength, different register." },
        { id: "ja-u105l1-doyara", type: "vocab", front: "どうやら", reading: "dōyara", meaning: "apparently", example: { jp: "どうやら みちを まちがえた ようです。もう いちど ちずを みましょう。", en: "Apparently we took the wrong road. Let's look at the map again." }, drill: { jp: "どうやら みんな かえった ようです。", en: "Apparently everybody has gone home." }, accept: ["it seems", "somehow", "evidently"], hint: "dō-ya-RA — three beats, the first long. It reports a conclusion drawn from what you can see, so it nearly always ends with ようです or らしい. It is softer than ちがいない — the evidence is thin." },
        { id: "ja-u105l1-hyottosuruto", type: "vocab", front: "ひょっとすると", reading: "hyottosuruto", meaning: "possibly", example: { jp: "ひょっとすると せんせいは まだ しらないかもしれません。", en: "The teacher possibly doesn't know yet." }, drill: { jp: "ひょっとすると もう おわったかもしれません。", en: "Possibly it is already over." }, accept: ["maybe", "by any chance", "it could be that"], hint: "hyot-to-su-ru-TO — small pause after hyo, ひょ is ONE beat. The weakest guess in this lesson: it floats an idea you have not checked. It pairs with かもしれません and never with ちがいない." },
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
        { id: "ja-u105l2-aimai", type: "vocab", front: "あいまい", reading: "aimai", meaning: "vague", example: { jp: "その へんじは あいまいで、いくのか いかないのか わかりませんでした。", en: "That answer was vague, and I couldn't tell whether they were going or not." }, drill: { jp: "あいまいな へんじは こまります。", en: "A vague answer is a problem." }, accept: ["ambiguous", "unclear", "noncommittal"], hint: "ai-MA-i — three beats. あい is dim and まい is unclear, so it is deliberately not pinned down. ⚠️ In Japanese it is not always a criticism: an あいまい refusal is a polite one." },
        { id: "ja-u105l2-nantonaku", type: "vocab", front: "なんとなく", reading: "nantonaku", meaning: "somehow", example: { jp: "りゆうは わかりませんが、なんとなく いやな きが します。", en: "I don't know why, but somehow I have a bad feeling." }, drill: { jp: "なんとなく つかれて います。", en: "Somehow I feel tired." }, accept: ["vaguely", "for some reason", "without knowing why"], hint: "nan-to-na-KU — four beats, the ん held. Literally without anything in particular: the reason exists but you cannot name it. どうして と きかれても こたえられない — that is exactly the feeling it marks." },
        { id: "ja-u105l2-ichio", type: "vocab", front: "いちおう", reading: "ichiō", meaning: "for now", example: { jp: "いちおう じゅんびは しましたが、まだ しんぱいです。", en: "I've prepared, more or less, but I'm still worried." }, drill: { jp: "いちおう きいて みます。", en: "I will ask, just in case." }, accept: ["more or less", "just in case", "tentatively"], hint: "いちおう takes the edge off a claim: 「できました」 is done, 「いちおう できました」 is done-but-don't-look-too-closely." },
        { id: "ja-u105l2-toriaezu", type: "vocab", front: "とりあえず", reading: "toriaezu", meaning: "first of all (for the time being)", example: { jp: "とりあえず メールを おくってから、でんわを します。", en: "First of all I'll send an email, then I'll call." }, drill: { jp: "とりあえず すわって ください。", en: "For now, please have a seat." }, accept: ["for the time being", "to start with", "anyway"], hint: "to-ri-a-E-zu — five beats. It means do this much first and sort the rest out later, so it flags the action as provisional. まず orders real steps; とりあえず admits you have no plan yet." },
        { id: "ja-u105l2-kigasuru", type: "vocab", front: "きがする", reading: "kigasuru", meaning: "to have a feeling", example: { jp: "どこかで あった ような きが しますが、なまえを おもいだせません。", en: "I have a feeling we've met somewhere, but I can't remember the name." }, drill: { jp: "そんな きがする。", en: "I have that kind of feeling." }, accept: ["to feel like", "to get the impression", "to sense"], hint: "ki-ga-su-ru — four beats. き is a feeling or spirit and する makes it happen, so a feeling comes over you. It reports a hunch, which is why 「ような」 so often sits in front of it." },
        { id: "ja-u105l2-mikomi", type: "vocab", front: "みこみ", reading: "mikomi", meaning: "prospect", example: { jp: "あしたは あめの みこみですから、しあいは ないでしょう。", en: "Rain is expected tomorrow, so there probably won't be a match." }, drill: { jp: "みこみは あまり よく ありません。", en: "The prospects are not very good." }, accept: ["outlook", "likelihood", "expectation"], hint: "mi-ko-MI — three beats. みる, to see, plus こむ, into: looking ahead into something. It is a forecast you can act on — a business or weather word, more solid than かのうせい." },
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
        { id: "ja-u105l3-kanosei", type: "vocab", front: "かのうせい", reading: "kanōsei", meaning: "possibility", example: { jp: "その けいかくが かわる かのうせいも ありますから、きを つけて ください。", en: "There's a possibility that plan will change, so please be careful." }, drill: { jp: "かのうせいは ひくいです。", en: "The possibility is low." }, accept: ["chance", "likelihood", "potential"], hint: "ka-nō-SE-i — four beats, the のう long. かのう is possible plus ～せい, the ～ity suffix. It is measurable, so it takes たかい and ひくい rather than おおきい and ちいさい." },
        { id: "ja-u105l3-utagau", type: "vocab", front: "うたがう", reading: "utagau", meaning: "to doubt", example: { jp: "はじめは その はなしを うたがいましたが、じっさいに みて しんじました。", en: "At first I doubted that story, but I believed it once I actually saw it." }, drill: { jp: "はなしを うたがう。", en: "I doubt the story." }, accept: ["to suspect", "to question", "doubt"], hint: "u-ta-GA-u — four beats. What you doubt takes を. ⚠️ Doubting a PERSON means suspecting them of something, which is far stronger in Japanese than merely questioning what they said." },
        { id: "ja-u105l3-yoso", type: "vocab", front: "よそう", reading: "yosō", meaning: "expectation (a forecast)", example: { jp: "けっかは よそうと ちがいましたが、みんな よく がんばりました。", en: "The result was different from expectations, but everyone did well." }, drill: { jp: "よそうが ちがいました。", en: "My prediction was wrong." }, accept: ["forecast", "prediction", "anticipation"], hint: "yo-SŌ — the second beat is long. よ is ahead and そう is to imagine, so it is a guess made before the fact. 「よそうどおり」 is as expected; 「よそうがい」 is outside what you expected." },
        { id: "ja-u105l3-shinjiru", type: "vocab", front: "しんじる", reading: "shinjiru", meaning: "to believe", example: { jp: "わたしは ともだちの ことばを しんじて いますから、しんぱいして いません。", en: "I believe what my friend said, so I'm not worried." }, drill: { jp: "ことばを しんじる。", en: "I believe the words." }, accept: ["to trust", "to have faith in", "believe"], hint: "shin-JI-ru — three beats. What you believe takes を. It covers believing a statement AND having faith in a person, so 「ともだちを しんじる」 is loyalty rather than fact-checking." },
        { id: "ja-u105l3-tashikameru", type: "vocab", front: "たしかめる", reading: "tashikameru", meaning: "to check (to make sure)", example: { jp: "でかける まえに、まどが あいて いないか たしかめます。", en: "Before going out I check whether the windows are open." }, drill: { jp: "じかんを もう いちど たしかめる。", en: "I check the time once more." }, accept: ["to make sure", "to verify", "to confirm"], hint: "たしか (certain) → たしかめる (make certain). The verb is the act of turning a guess into a fact." },
        { id: "ja-u105l3-kakujitsu", type: "vocab", front: "かくじつ", reading: "kakujitsu", meaning: "certain", example: { jp: "かくじつな じょうほうでは ありませんが、みせは やすみの ようです。", en: "It isn't certain information, but the shop seems to be closed." }, drill: { jp: "かくじつな こたえが ほしいです。", en: "I want a definite answer." }, accept: ["reliable", "sure", "definite"], hint: "ka-ku-ji-TSU — four beats. かく is sure and じつ is the real state, so it is sure because it has been checked. たしか is you feeling sure; かくじつ is the thing itself being solid." },
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
        { id: "ja-u105l4-machigainaku", type: "vocab", front: "まちがいなく", reading: "machigainaku", meaning: "without a doubt", example: { jp: "あの ひとは まちがいなく くると おもいますから、もう すこし まちましょう。", en: "That person will come without a doubt, so let's wait a little longer." }, drill: { jp: "まちがいなく かれの こえでした。", en: "It was without a doubt his voice." }, accept: ["definitely", "certainly", "for sure"], hint: "ma-chi-ga-i-na-KU — six beats. The adverb of まちがいない, no mistake: it marks your own certainty. ちがいない concludes FROM evidence; まちがいなく simply asserts you are sure." },
        { id: "ja-u105l4-hobo", type: "vocab", front: "ほぼ", reading: "hobo", meaning: "almost (roughly all of it)", example: { jp: "じゅんびは ほぼ おわりましたが、まだ すこし のこって います。", en: "The preparation is almost finished, but a little is still left." }, drill: { jp: "しごとは ほぼ おなじです。", en: "The work is almost the same." }, accept: ["nearly", "roughly", "practically"], hint: "HO-bo — two flat beats. Almost all of it, with a small remainder left over. だいたい is roughly, with vaguer edges; ほぼ is nearly complete and is the word a report uses." },
        { id: "ja-u105l4-towakagiranai", type: "vocab", front: "とはかぎらない", reading: "towakagiranai", meaning: "isn't necessarily", example: { jp: "たかい ものが いつも いいとは かぎりませんから、よく ひかくして ください。", en: "Expensive things aren't always good, so compare them carefully." }, drill: { jp: "やすい ものが わるいとはかぎらない。", en: "A cheap thing is not necessarily bad." }, accept: ["not always", "not necessarily", "it does not follow that"], hint: "The B1 way to push back on a generalisation without calling it wrong: 「Xとは かぎりません」 = X isn't a rule." },
        { id: "ja-u105l4-nantomo", type: "vocab", front: "なんとも", reading: "nantomo", meaning: "can't say either way", example: { jp: "けっかは なんとも いえませんが、できる ことは しました。", en: "I can't say either way what the result will be, but I did what I could." }, drill: { jp: "なんとも こたえられません。", en: "I cannot say either way." }, accept: ["nothing definite", "not at all", "hard to say"], hint: "nan-to-MO — three beats, the ん held. Literally nothing at all can be said, so it needs a negative. ⚠️ With a positive verb it flips to meaning extremely — 「なんとも うつくしい」, how beautiful." },
        { id: "ja-u105l4-masani", type: "vocab", front: "まさに", reading: "masani", meaning: "exactly (precisely this)", example: { jp: "これは まさに わたしが さがして いた ほんです。", en: "This is exactly the book I was looking for." }, drill: { jp: "まさに その とおりです。", en: "That is exactly right." }, accept: ["precisely", "just", "truly"], hint: "ma-sa-NI — three beats. It points at a perfect match between a thing and its description, so it is emphatic agreement. ちょうど measures amounts; まさに confirms identity." },
        { id: "ja-u105l4-angai", type: "vocab", front: "あんがい", reading: "angai", meaning: "unexpectedly", example: { jp: "しけんは あんがい かんたんでしたから、はやく おわりました。", en: "The exam was unexpectedly easy, so I finished early." }, drill: { jp: "しごとは あんがい はやく おわりました。", en: "The work finished unexpectedly early." }, accept: ["surprisingly", "more than expected", "contrary to expectation"], hint: "an-GA-i — three beats, the ん held. あん is a thought and がい is outside it, so it is outside what you had in mind. It usually carries relief: the surprise was in your favour." },
      ],
    },
  ],
};
