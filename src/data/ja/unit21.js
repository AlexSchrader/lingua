// Unit 21 — ぶんぽう・3 ("Grammar: past & adjectives") — A1 / JLPT N5
// The last A1 grammar unit — the pieces that make N5 airtight: the past tense of
// verbs (～ました / ～ませんでした) and the copula (でした), the い-adjective
// conjugation (～くないです / ～かったです), the な-adjectives (すき・きらい + な),
// and ～たいです (want to). Modeled as function-word/suffix vocab whose examples
// carry the pattern; every example uses only earlier vocab.
// NOTE: naturalness-critical — flagged for the batch native review.
// lang/unit/lesson stamped in index.js.
export const UNIT21 = {
  id: "ja-u21",
  lang: "ja",
  title: "ぶんぽう・3",
  order: 21,
  stage: "a1",
  lessons: [
    // Lesson 1: past-tense verbs
    {
      id: "ja-u21l1",
      unit: 21,
      lesson: 1,
      title: "Did / didn't (～ました)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Put ～ます verbs in the past and negative: たべます → たべました / たべません / たべませんでした.",
      items: [
        { id: "ja-u21l1-mashita", type: "vocab", front: "ました", reading: "mashita", meaning: "(did)", example: { jp: "きのう、すしをたべました。", en: "I ate sushi yesterday." }, accept: ["past tense", "-ed"], hint: "～ます → ～ました makes a verb PAST: たべます (eat) → たべました (ate). Polite past." },
        { id: "ja-u21l1-masen", type: "vocab", front: "ません", reading: "masen", meaning: "(don't)", example: { jp: "にくをたべません。", en: "I don't eat meat." }, accept: ["negative", "not", "won't"], hint: "～ます → ～ません makes a verb NEGATIVE (present): たべます → たべません = don't/won't eat." },
        { id: "ja-u21l1-masendeshita", type: "vocab", front: "ませんでした", reading: "masendeshita", meaning: "(didn't)", example: { jp: "あさごはんをたべませんでした。", en: "I didn't eat breakfast." }, accept: ["past negative", "didn't"], hint: "～ません + でした = PAST NEGATIVE: たべませんでした = didn't eat." },
        { id: "ja-u21l1-senshu", type: "vocab", front: "せんしゅう", reading: "senshū", meaning: "last week", example: { jp: "せんしゅう、えいがをみました。", en: "I watched a movie last week." }, accept: ["the last week"] },
        { id: "ja-u21l1-kyonen", type: "vocab", front: "きょねん", reading: "kyonen", meaning: "last year", example: { jp: "きょねん、にほんにいきました。", en: "I went to Japan last year." }, accept: ["the last year"] },
      ],
    },
    // Lesson 2: past copula
    {
      id: "ja-u21l2",
      unit: 21,
      lesson: 2,
      title: "Was / wasn't (でした)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Put です in the past: でした (was) and じゃなかったです (wasn't). Say when with さっき / ゆうべ.",
      items: [
        { id: "ja-u21l2-deshita", type: "vocab", front: "でした", reading: "deshita", meaning: "was", example: { jp: "きのうはやすみでした。", en: "Yesterday was a day off." }, accept: ["were", "it was"], hint: "です → でした is the PAST of 'to be': X は Y でした = 'X was Y'." },
        { id: "ja-u21l2-janakattadesu", type: "vocab", front: "じゃなかったです", reading: "janakattadesu", meaning: "wasn't", example: { jp: "テストじゃなかったです。", en: "It wasn't a test." }, accept: ["weren't", "was not"], hint: "じゃないです → じゃなかったです is the PAST NEGATIVE: 'was not X'." },
        { id: "ja-u21l2-sakki", type: "vocab", front: "さっき", reading: "sakki", meaning: "a moment ago", example: { jp: "さっき、ひるごはんをたべました。", en: "I ate lunch a moment ago." }, accept: ["just now", "earlier"] },
        { id: "ja-u21l2-ototoi", type: "vocab", front: "おととい", reading: "ototoi", meaning: "the day before yesterday", example: { jp: "おとといはあめでした。", en: "It rained the day before yesterday." }, accept: ["day before yesterday"] },
        { id: "ja-u21l2-yube", type: "vocab", front: "ゆうべ", reading: "yūbe", meaning: "last night", example: { jp: "ゆうべ、テレビをみました。", en: "I watched TV last night." }, accept: ["yesterday evening"] },
      ],
    },
    // Lesson 3: い-adjective conjugation
    {
      id: "ja-u21l3",
      unit: 21,
      lesson: 3,
      title: "Adjectives: not / was (～くない・～かった)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Conjugate い-adjectives: さむい → さむくないです (not cold) / さむかったです (was cold).",
      items: [
        { id: "ja-u21l3-kunaidesu", type: "vocab", front: "くないです", reading: "kunaidesu", meaning: "is not (adj)", example: { jp: "きょうはあつくないです。", en: "Today isn't hot." }, accept: ["not (adjective)"], hint: "For an い-adjective, drop the い and add くないです for the NEGATIVE: あつい → あつくないです (not hot). (いい is irregular: よくないです.)" },
        { id: "ja-u21l3-kattadesu", type: "vocab", front: "かったです", reading: "kattadesu", meaning: "was (adj)", example: { jp: "たのしかったです。", en: "It was fun." }, accept: ["was (adjective)"], hint: "For an い-adjective PAST, drop the い and add かったです: たのしい → たのしかったです (was fun)." },
        { id: "ja-u21l3-kunakattadesu", type: "vocab", front: "くなかったです", reading: "kunakattadesu", meaning: "wasn't (adj)", example: { jp: "きのうはさむくなかったです。", en: "Yesterday wasn't cold." }, accept: ["was not (adjective)"], hint: "い-adjective PAST NEGATIVE: drop い, add くなかったです: さむい → さむくなかったです (wasn't cold)." },
        { id: "ja-u21l3-isogashii", type: "vocab", front: "いそがしい", reading: "isogashii", meaning: "busy", example: { jp: "きょうはいそがしいです。", en: "I'm busy today." }, accept: ["hectic"] },
        { id: "ja-u21l3-muzukashii", type: "vocab", front: "むずかしい", reading: "muzukashii", meaning: "difficult", example: { jp: "テストはむずかしかったです。", en: "The test was difficult." }, accept: ["hard"] },
      ],
    },
    // Lesson 4: な-adjectives
    {
      id: "ja-u21l4",
      unit: 21,
      lesson: 4,
      title: "Like & dislike (な-adjectives)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you like with な-adjectives: ねこがすきです. Use な before a noun: きれいなはな.",
      items: [
        { id: "ja-u21l4-suki", type: "vocab", front: "すき", reading: "suki", meaning: "like", example: { jp: "ねこがすきです。", en: "I like cats." }, accept: ["fond of", "favorite"], hint: "すき is a な-adjective: (thing) が すきです = 'I like (thing)'. Note が, not を." },
        { id: "ja-u21l4-kirai", type: "vocab", front: "きらい", reading: "kirai", meaning: "dislike", example: { jp: "やさいがきらいです。", en: "I dislike vegetables." }, accept: ["hate", "don't like"] },
        { id: "ja-u21l4-jozu", type: "vocab", front: "じょうず", reading: "jōzu", meaning: "good at", example: { jp: "りょうりがじょうずです。", en: "I'm good at cooking." }, accept: ["skilled", "skillful"] },
        { id: "ja-u21l4-heta", type: "vocab", front: "へた", reading: "heta", meaning: "bad at", example: { jp: "テニスがへたです。", en: "I'm bad at tennis." }, accept: ["unskilled", "poor at"] },
        { id: "ja-u21l4-na", type: "vocab", front: "な", reading: "na", meaning: "(links な-adj to noun)", example: { jp: "きれいなはなです。", en: "It's a pretty flower." }, accept: ["na-adjective marker"], hint: "A な-adjective needs な before a noun: きれい な はな = a pretty flower. With です the な drops: はなは きれいです." },
      ],
    },
    // Lesson 5: want to / degree
    {
      id: "ja-u21l5",
      unit: 21,
      lesson: 5,
      title: "Want to, very, a little",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you want (みずをのみたいです) and how much (とても / すこし).",
      items: [
        { id: "ja-u21l5-taidesu", type: "vocab", front: "たいです", reading: "taidesu", meaning: "want to~", example: { jp: "みずをのみたいです。", en: "I want to drink water." }, accept: ["would like to"], hint: "verb-stem + たいです = 'want to…': のみます → のみ + たいです = want to drink." },
        { id: "ja-u21l5-hoshii", type: "vocab", front: "ほしい", reading: "hoshii", meaning: "want", example: { jp: "あたらしいくつがほしいです。", en: "I want new shoes." }, accept: ["want (a thing)", "desire"], hint: "ほしい is for wanting a THING: (thing) が ほしいです. For wanting to DO, use verb + たいです." },
        { id: "ja-u21l5-daisuki", type: "vocab", front: "だいすき", reading: "daisuki", meaning: "love", example: { jp: "にほんがだいすきです。", en: "I love Japan." }, accept: ["really like", "adore"] },
        { id: "ja-u21l5-totemo", type: "vocab", front: "とても", reading: "totemo", meaning: "very", example: { jp: "とてもたのしいです。", en: "It's very fun." }, accept: ["really", "so"] },
        { id: "ja-u21l5-sukoshi", type: "vocab", front: "すこし", reading: "sukoshi", meaning: "a little", example: { jp: "すこしさむいです。", en: "It's a little cold." }, accept: ["a bit", "slightly", "some"] },
      ],
    },
  ],
};
