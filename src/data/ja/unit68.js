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
        { id: "ja-u68l1-kyuni", type: "vocab", front: "きゅうに", reading: "kyūni", meaning: "suddenly", example: { jp: "きゅうにあめがふります。", en: "It suddenly rains." }, accept: ["all of a sudden", "abruptly"] },
        { id: "ja-u68l1-hakkiri", type: "vocab", front: "はっきり", reading: "hakkiri", meaning: "clearly", example: { jp: "はっきりいってください。", en: "Please say it clearly." }, accept: ["clear", "plainly"] },
        { id: "ja-u68l1-masumasu", type: "vocab", front: "ますます", reading: "masumasu", meaning: "more and more", example: { jp: "ますますさむくなります。", en: "It gets colder and colder." }, accept: ["increasingly", "even more"] },
        { id: "ja-u68l1-toto", type: "vocab", front: "とうとう", reading: "tōtō", meaning: "finally", example: { jp: "とうとうふゆがきました。", en: "Winter finally came." }, accept: ["at last", "in the end"] },
        { id: "ja-u68l1-warito", type: "vocab", front: "わりと", reading: "warito", meaning: "relatively", example: { jp: "きょうはわりとあついです。", en: "It's relatively hot today." }, accept: ["comparatively", "fairly"] },
        { id: "ja-u68l1-sonnani", type: "vocab", front: "そんなに", reading: "sonnani", meaning: "(not) that much", example: { jp: "そんなにたべません。", en: "I don't eat that much." }, accept: ["that much", "so much"] },
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
        { id: "ja-u68l2-zutto", type: "vocab", front: "ずっと", reading: "zutto", meaning: "the whole time", example: { jp: "きょうずっといえにいます。", en: "I'm home the whole day today." }, accept: ["all along", "far", "much"] },
        { id: "ja-u68l2-mata", type: "vocab", front: "また", reading: "mata", meaning: "again", example: { jp: "またあした。", en: "See you again tomorrow." }, accept: ["once more", "also"] },
        { id: "ja-u68l2-itsuka", type: "vocab", front: "いつか", reading: "itsuka", meaning: "someday", example: { jp: "いつかにほんへいきます。", en: "Someday I'll go to Japan." }, accept: ["some day", "sometime"] },
        { id: "ja-u68l2-mosugu", type: "vocab", front: "もうすぐ", reading: "mōsugu", meaning: "soon", example: { jp: "もうすぐはるです。", en: "It's spring soon." }, accept: ["shortly", "before long"] },
        { id: "ja-u68l2-sorosoro", type: "vocab", front: "そろそろ", reading: "sorosoro", meaning: "about time", example: { jp: "そろそろかえります。", en: "It's about time I go home." }, accept: ["soon", "before long"] },
        { id: "ja-u68l2-shibaraku", type: "vocab", front: "しばらく", reading: "shibaraku", meaning: "for a while", example: { jp: "しばらくまってください。", en: "Please wait a while." }, accept: ["for a moment", "a little while"] },
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
        { id: "ja-u68l3-zettai", type: "vocab", front: "ぜったい", reading: "zettai", meaning: "absolutely", example: { jp: "ぜったいいきます。", en: "I'll absolutely go." }, accept: ["definitely", "for sure"] },
        { id: "ja-u68l3-sasuga", type: "vocab", front: "さすが", reading: "sasuga", meaning: "impressive", example: { jp: "さすがですね。", en: "Impressive, as expected." }, accept: ["as expected", "just as you'd expect"] },
        { id: "ja-u68l3-shoganai", type: "vocab", front: "しょうがない", reading: "shōganai", meaning: "it can't be helped", example: { jp: "あめですね。しょうがない。", en: "It's raining. It can't be helped." }, accept: ["nothing we can do", "oh well"] },
        { id: "ja-u68l3-masaka", type: "vocab", front: "まさか", reading: "masaka", meaning: "no way", example: { jp: "まさか、ほんとうですか。", en: "No way, is it true?" }, accept: ["you're kidding", "surely not"] },
        { id: "ja-u68l3-ippai", type: "vocab", front: "いっぱい", reading: "ippai", meaning: "a lot", example: { jp: "たべものがいっぱいあります。", en: "There's a lot of food." }, accept: ["full", "plenty"] },
        { id: "ja-u68l3-omedeto", type: "vocab", front: "おめでとう", reading: "omedetō", meaning: "congratulations", example: { jp: "おめでとう。", en: "Congratulations!" }, accept: ["congrats", "well done"] },
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
        { id: "ja-u68l4-ittekimasu", type: "vocab", front: "いってきます", reading: "ittekimasu", meaning: "I'm off", example: { jp: "いってきます。", en: "I'm off (and back later)." }, accept: ["I'm leaving", "see you later"] },
        { id: "ja-u68l4-itterasshai", type: "vocab", front: "いってらっしゃい", reading: "itterasshai", meaning: "take care", example: { jp: "いってらっしゃい。", en: "Take care (as you head out)." }, accept: ["have a good day", "see you off"] },
        { id: "ja-u68l4-tadaima", type: "vocab", front: "ただいま", reading: "tadaima", meaning: "I'm home", example: { jp: "ただいま。", en: "I'm home." }, accept: ["I'm back", "just now"] },
        { id: "ja-u68l4-okaerinasai", type: "vocab", front: "おかえりなさい", reading: "okaerinasai", meaning: "welcome home", example: { jp: "おかえりなさい。", en: "Welcome home." }, accept: ["welcome back", "welcome home!"] },
        { id: "ja-u68l4-itadakimasu", type: "vocab", front: "いただきます", reading: "itadakimasu", meaning: "let's eat", example: { jp: "いただきます。", en: "Thanks for the food (before eating)." }, accept: ["thanks for the meal", "bon appetit"] },
        { id: "ja-u68l4-gochisosama", type: "vocab", front: "ごちそうさま", reading: "gochisōsama", meaning: "thanks for the meal", example: { jp: "ごちそうさま。", en: "Thanks for the meal (after eating)." }, accept: ["that was delicious", "thanks for the food"] },
      ],
    },
  ],
};
