// Unit 68 — ふくし・ひょうげん ("Adverbs & Expressions") — A1 thematic
// Common N5 adverbs (how / how much / how often) plus a set of everyday fixed
// expressions Japanese say without thinking — the "I'm home / dig in / see you
// off" phrases. Taught as vocabulary: the adverbs slot into known sentences,
// the set phrases stand on their own as whole utterances. Examples reuse only
// vocab already introduced. lang/unit/lesson wiring lives in index.js.
export const UNIT68 = {
  id: "ja-u68",
  lang: "ja",
  title: "ふくし・ひょうげん",
  order: 68,
  stage: "a1",
  lessons: [
    // Lesson 1: adverbs of degree & frequency
    {
      id: "ja-u68l1",
      unit: 68,
      lesson: 1,
      title: "Adverbs 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Add degree to a sentence: とうとう (finally), ますます (more and more), わりと (relatively).",
      items: [
        { id: "ja-u68l1-kyuni", type: "vocab", front: "きゅうに", reading: "kyūni", meaning: "suddenly", example: { jp: "きゅうにあめがふります。", en: "It suddenly rains." }, drill: { jp: "きゅうにくるまがとまります。", en: "The car stops suddenly." }, accept: ["all of a sudden", "abruptly", "unexpectedly", "out of nowhere"], hint: "KYŪ-ni — きゅう is the yōon kyu held long, then に: two beats. 急 (urgent) plus the adverb-making に. ⚠️ That に is PART of the word, not the particle — the word is きゅうに, never きゅう." },
        { id: "ja-u68l1-hakkiri", type: "vocab", front: "はっきり", reading: "hakkiri", meaning: "clearly", example: { jp: "はっきりいってください。", en: "Please say it clearly." }, drill: { jp: "はっきりきこえます。", en: "I can hear it clearly." }, accept: ["clear", "plainly", "distinctly", "in plain terms"], hint: "hak-KI-ri — the small っ doubles the k, tapped r: three beats. ⚠️ Clearly — audible, visible, or plainly stated. はっきりいってください asks someone to be blunt." },
        { id: "ja-u68l1-masumasu", type: "vocab", front: "ますます", reading: "masumasu", meaning: "more and more", example: { jp: "ますますさむくなります。", en: "It gets colder and colder." }, drill: { jp: "ますますげんきになります。", en: "I am getting healthier and healthier." }, accept: ["increasingly", "even more", "more than ever", "steadily more"], hint: "ma-su-MA-su — four beats, ます doubled. ⚠️ It marks an increase already underway, so it pairs with なります. Nothing to do with the ます verb ending." },
        { id: "ja-u68l1-toto", type: "vocab", front: "とうとう", reading: "tōtō", meaning: "finally (in the end after all)", example: { jp: "とうとうふゆがきました。", en: "Winter finally came." }, drill: { jp: "とうとうしごとがおわります。", en: "The work is finally ending." }, accept: ["at last", "in the end", "finally after all", "eventually"], hint: "TŌ-TŌ — two LONG beats, both held: toh-toh. ⚠️ Finally, after a long wait, usually with relief. やっと is its close cousin; とうとう carries more of the long haul." },
        { id: "ja-u68l1-warito", type: "vocab", front: "わりと", reading: "warito", meaning: "relatively", example: { jp: "きょうはわりとあついです。", en: "It's relatively hot today." }, drill: { jp: "わりとやすいです。", en: "It is relatively cheap." }, accept: ["comparatively", "fairly", "rather", "quite"], hint: "WA-ri-to — three beats, tapped r. From わり, a proportion, plus と. ⚠️ Relatively — more than you expected, but not a lot. Milder than かなり." },
        { id: "ja-u68l1-sonnani", type: "vocab", front: "そんなに", reading: "sonnani", meaning: "(not) that much", example: { jp: "そんなにたべません。", en: "I don't eat that much." }, drill: { jp: "そんなにたくさんいりません。", en: "I do not need that much." }, accept: ["that much", "so much", "all that much", "particularly"], hint: "son-NA-ni — three beats, the ん held. そんな, that sort of, plus に. ⚠️ It normally pairs with a NEGATIVE: そんなにたべません means not all that much." },
      ],
    },
    // Lesson 2: adverbs of manner & time
    {
      id: "ja-u68l2",
      unit: 68,
      lesson: 2,
      title: "Adverbs 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say when and how: また (again), もうすぐ (soon), いつか (someday).",
      items: [
        { id: "ja-u68l2-zutto", type: "vocab", front: "ずっと", reading: "zutto", meaning: "the whole time", example: { jp: "きょうずっといえにいます。", en: "I'm home the whole day today." }, drill: { jp: "ずっとまちます。", en: "I wait the whole time." }, accept: ["all along", "far", "much", "the whole time through"], hint: "ZUT-to — the small っ doubles the t, buzzing z: two beats. ⚠️ Two jobs: continuously, the whole time, and far more as a comparison — ずっとおおきい is far bigger." },
        { id: "ja-u68l2-mata", type: "vocab", front: "また", reading: "mata", meaning: "again", example: { jp: "またあした。", en: "See you again tomorrow." }, drill: { jp: "またみせにいきます。", en: "I am going to the shop again." }, accept: ["once more", "also", "a second time", "yet again"], hint: "MA-ta — two beats. ⚠️ Again, and also. またあした, see you tomorrow, drops the verb entirely — Japanese does that constantly in parting phrases." },
        { id: "ja-u68l2-itsuka", type: "vocab", front: "いつか", reading: "itsuka", meaning: "someday", example: { jp: "いつかにほんへいきます。", en: "Someday I'll go to Japan." }, drill: { jp: "いつかはやまにのぼります。", en: "Someday I will climb the mountain." }, accept: ["some day", "sometime", "one day", "at some point"], hint: "I-tsu-ka — three beats, つ is tsu. いつ, when, plus か: some when. ⚠️ Careful — いつか also reads as the fifth of the month, written 五日. Context decides." },
        { id: "ja-u68l2-mosugu", type: "vocab", front: "もうすぐ", reading: "mōsugu", meaning: "soon (before long now)", example: { jp: "もうすぐはるです。", en: "It's spring soon." }, accept: ["shortly", "before long", "any minute now", "very soon"], hint: "MŌ-su-gu — the もう is a long o: three beats, hard g. もう, already, plus すぐ, immediately. ⚠️ Closer than すぐ on its own — it is about to happen." },
        { id: "ja-u68l2-sorosoro", type: "vocab", front: "そろそろ", reading: "sorosoro", meaning: "about time", example: { jp: "そろそろかえります。", en: "It's about time I go home." }, drill: { jp: "そろそろいきます。", en: "It is about time I went." }, accept: ["soon", "before long", "it is about time", "nearly time"], hint: "so-ro-SO-ro — four beats, tapped r, そろ doubled. ⚠️ It is the polite way to signal you are leaving: そろそろかえります softens the departure instead of announcing it." },
        { id: "ja-u68l2-shibaraku", type: "vocab", front: "しばらく", reading: "shibaraku", meaning: "for a while", example: { jp: "しばらくまってください。", en: "Please wait a while." }, drill: { jp: "しばらくやすみます。", en: "I will rest for a while." }, accept: ["for a moment", "a little while", "for some time", "a short while"], hint: "shi-BA-ra-ku — four beats, tapped r. ⚠️ A vague stretch of time — a few minutes or a few months. しばらくですね greets someone you have not seen in ages." },
      ],
    },
    // Lesson 3: reaction & emphasis words
    {
      id: "ja-u68l3",
      unit: 68,
      lesson: 3,
      title: "Reactions",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "React in conversation: ぜったい (absolutely), さすが (impressive), まさか (no way).",
      items: [
        { id: "ja-u68l3-zettai", type: "vocab", front: "ぜったい", reading: "zettai", meaning: "absolutely", example: { jp: "ぜったいいきます。", en: "I'll absolutely go." }, drill: { jp: "ぜったいわすれません。", en: "I absolutely will not forget." }, accept: ["definitely", "for sure", "without fail", "no matter what"], hint: "zet-TAI — the small っ doubles the t, buzzing z, たい a diphthong: two beats. 絶 (cut off) + 対 (facing). ⚠️ With a negative it means absolutely not: ぜったいだめ." },
        { id: "ja-u68l3-sasuga", type: "vocab", front: "さすが", reading: "sasuga", meaning: "impressive", example: { jp: "さすがですね。", en: "Impressive, as expected." }, drill: { jp: "さすがすごいですね。", en: "That really is impressive." }, accept: ["as expected", "just as you'd expect", "that's impressive", "true to form"], hint: "SA-su-ga — three beats, hard g. ⚠️ Admiration that something lived up to its reputation. さすがですね is high praise, and さすがに means as you would expect." },
        { id: "ja-u68l3-shoganai", type: "vocab", front: "しょうがない", reading: "shōganai", meaning: "it can't be helped", example: { jp: "あめですね。しょうがない。", en: "It's raining. It can't be helped." }, drill: { jp: "それはしょうがないです。", en: "That cannot be helped." }, accept: ["nothing we can do", "oh well", "no helping it", "that's life"], hint: "SHŌ-ga-nai — しょう is a long o, hard g, ない a diphthong: four beats. Shortened from しようがない, there is no way of doing it. ⚠️ Resignation, not an apology." },
        { id: "ja-u68l3-masaka", type: "vocab", front: "まさか", reading: "masaka", meaning: "no way", example: { jp: "まさか、ほんとうですか。", en: "No way, is it true?" }, drill: { jp: "まさかしりませんでした。", en: "No way — I had no idea." }, accept: ["you're kidding", "surely not", "I can't believe it", "impossible"], hint: "ma-SA-ka — three beats. ⚠️ Disbelief. It often stands alone as a whole reaction, and with a negative it means surely not: まさかこないでしょう." },
        { id: "ja-u68l3-ippai", type: "vocab", front: "いっぱい", reading: "ippai", meaning: "a lot (full to the brim)", example: { jp: "たべものがいっぱいあります。", en: "There's a lot of food." }, drill: { jp: "ひとがいっぱいいます。", en: "There are loads of people." }, accept: ["full", "plenty", "lots", "full to the brim"], hint: "ip-PAI — the small っ doubles the p, ぱい a diphthong: two beats. 一杯, literally one cupful. ⚠️ From that it grew to mean full, and then simply a lot." },
        { id: "ja-u68l3-omedeto", type: "vocab", front: "おめでとう", reading: "omedetō", meaning: "congratulations", example: { jp: "おめでとう。", en: "Congratulations!" }, drill: { jp: "おめでとうといいます。", en: "I say congratulations." }, accept: ["congrats", "well done", "congratulations!", "many congratulations"], hint: "o-me-de-TŌ — the とう is a long o: four beats. ⚠️ The full polite form is おめでとうございます, which is what you say to anyone who is not a close friend." },
      ],
    },
    // Lesson 4: everyday set expressions
    {
      id: "ja-u68l4",
      unit: 68,
      lesson: 4,
      title: "Set expressions",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use daily fixed phrases: いってきます, ただいま, いただきます — the ones Japanese say by reflex.",
      items: [
        { id: "ja-u68l4-ittekimasu", type: "vocab", front: "いってきます", reading: "ittekimasu", meaning: "I'm off", example: { jp: "いってきます。", en: "I'm off (and back later)." }, drill: { jp: "いってきますとげんきにいいます。", en: "I say \"I'm off\" cheerfully." }, accept: ["I'm leaving", "see you later", "I'm heading out", "off I go"], hint: "it-te-ki-MA-su — the small っ is a held stop: five beats. From いく, to go, plus くる, to come: I go and I come back. ⚠️ Said leaving your own home, and it PROMISES a return." },
        { id: "ja-u68l4-itterasshai", type: "vocab", front: "いってらっしゃい", reading: "itterasshai", meaning: "take care", example: { jp: "いってらっしゃい。", en: "Take care (as you head out)." }, drill: { jp: "いってらっしゃいといいます。", en: "I say take care." }, accept: ["have a good day", "see you off", "off you go", "safe trip"], hint: "it-te-ras-SHAI — two held stops, both small っ: six beats. The reply to いってきます. ⚠️ The pair is fixed — one person says いってきます and the other answers with this." },
        { id: "ja-u68l4-tadaima", type: "vocab", front: "ただいま", reading: "tadaima", meaning: "I'm home", example: { jp: "ただいま。", en: "I'm home." }, drill: { jp: "ただいまとおおきいこえでいいます。", en: "I say \"I'm home\" in a loud voice." }, accept: ["I'm back", "just now", "I have returned", "home again"], hint: "ta-da-I-ma — four beats. Literally just now, short for ただいまかえりました, I have just returned. ⚠️ Said walking back in, and おかえりなさい is its answer." },
        { id: "ja-u68l4-okaerinasai", type: "vocab", front: "おかえりなさい", reading: "okaerinasai", meaning: "welcome home", example: { jp: "おかえりなさい。", en: "Welcome home." }, drill: { jp: "おかえりなさいとかぞくがいいます。", en: "My family says \"welcome home\"." }, accept: ["welcome back", "welcome home!", "good to have you back", "you're home"], hint: "o-ka-e-ri-na-SAI — six beats, the え its own. From かえる, to return, in the polite imperative. ⚠️ The reply to ただいま — the same fixed pair as the two above." },
        { id: "ja-u68l4-itadakimasu", type: "vocab", front: "いただきます", reading: "itadakimasu", meaning: "let's eat", example: { jp: "いただきます。", en: "Thanks for the food (before eating)." }, drill: { jp: "いただきますといいます。", en: "I say let's eat." }, accept: ["thanks for the meal", "bon appetit", "let us eat", "before eating"], hint: "i-ta-da-ki-MA-su — five beats. The humble form of もらう, to receive: I humbly receive. ⚠️ Said before eating, by everyone, every time — it thanks the food as much as the cook." },
        { id: "ja-u68l4-gochisosama", type: "vocab", front: "ごちそうさま", reading: "gochisōsama", meaning: "thanks for the meal", example: { jp: "ごちそうさま。", en: "Thanks for the meal (after eating)." }, drill: { jp: "ごちそうさまといいます。", en: "I say thanks for the meal." }, accept: ["that was delicious", "thanks for the food", "thank you for the meal", "after eating"], hint: "go-chi-SŌ-sa-ma — the そう is a long o: five beats, ち is chi. ごちそう, a feast, plus さま, a respectful ending. ⚠️ Said AFTER the meal; いただきます comes before it." },
      ],
    },
  ],
};
