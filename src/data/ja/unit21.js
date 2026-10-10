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
      canDo: "Put ～ます verbs in the past and negative: たべます → たべました / たべません / たべませんでした, and say when with せんしゅう / きょねん / このまえ.",
      items: [
        { id: "ja-u21l1-mashita", type: "vocab", front: "ました", reading: "mashita", meaning: "past tense marker", example: { jp: "きのう、すしをたべました。", en: "I ate sushi yesterday." }, drill: { jp: "えいがをみました。", en: "I watched a film." }, accept: ["past tense", "-ed", "did"], hint: "～ます → ～ました makes a verb PAST: たべます (eat) → たべました (ate). Polite past." },
        { id: "ja-u21l1-masen", type: "vocab", front: "ません", reading: "masen", meaning: "negative form", example: { jp: "にくをたべません。", en: "I don't eat meat." }, drill: { jp: "さかなをたべません。", en: "I don't eat fish." }, accept: ["negative", "not", "won't"], hint: "～ます → ～ません makes a verb NEGATIVE (present): たべます → たべません = don't/won't eat." },
        { id: "ja-u21l1-masendeshita", type: "vocab", front: "ませんでした", reading: "masendeshita", meaning: "past negative form", example: { jp: "あさごはんをたべませんでした。", en: "I didn't eat breakfast." }, drill: { jp: "ひるごはんをたべませんでした。", en: "I didn't eat lunch." }, accept: ["past negative", "didn't", "did not"], hint: "～ません + でした = PAST NEGATIVE: たべませんでした, didn't eat. ⚠️ The でした is the only part that moves to the past — ません itself never changes. ⚠️ And this is the VERB past negative; an い-adjective takes くなかったです instead, in Lesson 3." },
        { id: "ja-u21l1-senshu", type: "vocab", front: "せんしゅう", reading: "senshū", meaning: "last week", example: { jp: "せんしゅう、えいがをみました。", en: "I watched a movie last week." }, drill: { jp: "せんしゅうはいそがしかったです。", en: "Last week was busy." }, accept: ["the last week", "the previous week", "a week ago"], hint: "sen-SHOO — four beats: se-n-shu-u, しゅ a single sound lengthened. せん, before, plus しゅう, week. ⚠️ The family is こんしゅう this week, せんしゅう last, らいしゅう next — and the SAME せん/こん/らい set builds the months and years." },
        { id: "ja-u21l1-kyonen", type: "vocab", front: "きょねん", reading: "kyonen", meaning: "last year", example: { jp: "きょねん、にほんにいきました。", en: "I went to Japan last year." }, drill: { jp: "きょねんはさむかったです。", en: "Last year was cold." }, accept: ["the last year", "the previous year", "a year ago"], hint: "kyo-NEN — three beats: kyo-ne-n, きょ a single sound. ⚠️ IT BREAKS THE PATTERN: this week is こんしゅう but this YEAR is ことし, not こんねん — らいねん next year is regular again. きょねん is the only last- form that uses きょ." },
        { id: "ja-u21l1-konomae", type: "vocab", front: "このまえ", reading: "konomae", meaning: "last time", example: { jp: "このまえ、えいがをみました。", en: "I saw a film the other day." }, drill: { jp: "このまえおちゃをのみました。", en: "Last time I drank tea." }, accept: ["the other day", "recently", "a while back", "the time before"], hint: "Literally “this before” — the most recent time, without naming it. せんしゅう and きょねん name the period; このまえ does not." },
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
      canDo: "Put です in the past: でした (was) and じゃなかったです (wasn't). Say when with さっき / ゆうべ / あのとき.",
      items: [
        { id: "ja-u21l2-deshita", type: "vocab", front: "でした", reading: "deshita", meaning: "was", example: { jp: "きのうはやすみでした。", en: "Yesterday was a day off." }, drill: { jp: "きのうはあめでした。", en: "Yesterday was rainy." }, accept: ["were", "it was", "used to be"], hint: "です → でした is the PAST of to be: X は Y でした. ⚠️ It attaches to NOUNS and な-adjectives — きのうはやすみでした. An い-adjective does not take it: たのしいでした is wrong, and the form you want is たのしかったです, in Lesson 3." },
        { id: "ja-u21l2-janakattadesu", type: "vocab", front: "じゃなかったです", reading: "janakattadesu", meaning: "wasn't", example: { jp: "テストじゃなかったです。", en: "It wasn't a test." }, drill: { jp: "やすみじゃなかったです。", en: "It wasn't a day off." }, accept: ["weren't", "was not", "were not"], hint: "じゃないです → じゃなかったです, the PAST NEGATIVE of to be: was not X. ⚠️ Nouns and な-adjectives only. The written form is ではありませんでした, which is four beats longer and means exactly the same thing." },
        { id: "ja-u21l2-sakki", type: "vocab", front: "さっき", reading: "sakki", meaning: "a moment ago", example: { jp: "さっき、ひるごはんをたべました。", en: "I ate lunch a moment ago." }, drill: { jp: "さっきおちゃをのみました。", en: "I drank tea a moment ago." }, accept: ["just now", "earlier", "a short while ago"], hint: "SAK-ki — three beats, the small っ holding one: sa-k-ki. ⚠️ Minutes ago, not hours — for earlier today use きょうのあさ. ⚠️ It takes no particle: さっきたべました, never さっきにたべました." },
        { id: "ja-u21l2-ototoi", type: "vocab", front: "おととい", reading: "ototoi", meaning: "the day before yesterday", example: { jp: "おとといはあめでした。", en: "It rained the day before yesterday." }, drill: { jp: "おとといはテストでした。", en: "The day before yesterday was a test." }, accept: ["day before yesterday", "two days ago", "the day before last"], hint: "o-to-TOI — four beats: o-to-to-i. ⚠️ It contains no きのう at all — the mirror word あさって, two days ahead, is equally unrelated to あした. Japanese has single words for both, where English needs five." },
        { id: "ja-u21l2-yube", type: "vocab", front: "ゆうべ", reading: "yūbe", meaning: "last night", example: { jp: "ゆうべ、テレビをみました。", en: "I watched TV last night." }, drill: { jp: "ゆうべはさむかったです。", en: "Last night was cold." }, accept: ["yesterday evening", "last evening", "yesternight"], hint: "YOO-be — three beats: yu-u-be, the う lengthening the first vowel. ⚠️ YESTERDAY evening, not tonight — tonight is こんばん. ⚠️ Also written and said ゆうべ for just evening in older usage; さくや is the formal version." },
        { id: "ja-u21l2-anotoki", type: "vocab", front: "あのとき", reading: "anotoki", meaning: "back then", example: { jp: "あのときはあめでした。", en: "It was raining back then." }, drill: { jp: "あのときはやすみでした。", en: "Back then it was a day off." }, accept: ["at that time","then","in those days","that time"], hint: "あの points at a time you and your listener both remember. そのとき points at one just mentioned." },
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
      canDo: "Conjugate い-adjectives: さむい → さむくないです or さむくありません (not cold) / さむかったです (was cold).",
      items: [
        { id: "ja-u21l3-kunaidesu", type: "vocab", front: "くないです", reading: "kunaidesu", meaning: "is not (adj)", example: { jp: "きょうはあつくないです。", en: "Today isn't hot." }, drill: { jp: "きょうはさむくないです。", en: "Today isn't cold." }, accept: ["not (adjective)", "is not", "isn't"], hint: "For an い-adjective, drop the い and add くないです for the NEGATIVE: あつい → あつくないです (not hot). (いい is irregular: よくないです.)" },
        { id: "ja-u21l3-kattadesu", type: "vocab", front: "かったです", reading: "kattadesu", meaning: "was (adj)", example: { jp: "たのしかったです。", en: "It was fun." }, drill: { jp: "テストはむずかしかったです。", en: "The test was difficult." }, accept: ["was (adjective)", "were", "past adjective"], hint: "For an い-adjective PAST, drop the い and add かったです: たのしい → たのしかったです (was fun)." },
        { id: "ja-u21l3-kunakattadesu", type: "vocab", front: "くなかったです", reading: "kunakattadesu", meaning: "wasn't (adj)", example: { jp: "きのうはさむくなかったです。", en: "Yesterday wasn't cold." }, drill: { jp: "きのうはいそがしくなかったです。", en: "Yesterday wasn't busy." }, accept: ["was not (adjective)", "wasn't", "were not"], hint: "い-adjective PAST NEGATIVE: drop い, add くなかったです: さむい → さむくなかったです (wasn't cold)." },
        { id: "ja-u21l3-isogashii", type: "vocab", front: "いそがしい", reading: "isogashii", meaning: "busy", example: { jp: "きょうはいそがしいです。", en: "I'm busy today." }, drill: { jp: "ちちはいそがしいです。", en: "My father is busy." }, accept: ["hectic", "busy with work", "swamped"], hint: "i-so-ga-SHEE — five beats: i-so-ga-shi-i, hard g, the しい held. An い-adjective. ⚠️ It is busy with WORK — a busy street is にぎやか. ⚠️ Saying いそがしいです to decline an invitation is the standard polite no." },
        { id: "ja-u21l3-muzukashii", type: "vocab", front: "むずかしい", reading: "muzukashii", meaning: "difficult", example: { jp: "テストはむずかしかったです。", en: "The test was difficult." }, drill: { jp: "えいごはむずかしいです。", en: "English is difficult." }, accept: ["hard", "tough", "tricky"], hint: "mu-zu-ka-SHEE — five beats, ず buzzed, the しい held. An い-adjective. ⚠️ Its opposite is やさしい, easy — which ALSO means kind, so やさしいせんせい is a gentle teacher, not a soft marker." },
        { id: "ja-u21l3-kuarimasen", type: "vocab", front: "くありません", reading: "kuarimasen", meaning: "is not (adjective, polite)", example: { jp: "きょうはさむくありません。", en: "It isn’t cold today." }, drill: { jp: "テストはむずかしくありません。", en: "The test isn’t difficult." }, accept: ["is not","isn't","not (formal)"], hint: "The same meaning as ～くないです, one step more formal. さむくないです is what you say; さむくありません is what you write." },
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
      canDo: "Say what you like and hate with な-adjectives: ねこがすきです, やさいがだいきらいです. Use な before a noun: きれいなはな.",
      items: [
        { id: "ja-u21l4-suki", type: "vocab", front: "すき", reading: "suki", meaning: "like", example: { jp: "ねこがすきです。", en: "I like cats." }, drill: { jp: "いぬがすきです。", en: "I like dogs." }, accept: ["fond of", "favorite", "to like"], hint: "すき is a な-adjective: (thing) が すきです = 'I like (thing)'. Note が, not を." },
        { id: "ja-u21l4-kirai", type: "vocab", front: "きらい", reading: "kirai", meaning: "dislike", example: { jp: "やさいがきらいです。", en: "I dislike vegetables." }, drill: { jp: "にくがきらいです。", en: "I dislike meat." }, accept: ["hate", "don't like", "not fond of"], hint: "ki-RAI — three beats, tapped r. 🚨 A な-ADJECTIVE THAT ENDS IN い — きらいなやさい, never きらいやさい. The thing disliked takes が, exactly like すき. Stronger than English dislike; だいきらい is outright hate." },
        { id: "ja-u21l4-jozu", type: "vocab", front: "じょうず", reading: "jōzu", meaning: "good at", example: { jp: "りょうりがじょうずです。", en: "I'm good at cooking." }, drill: { jp: "えいごがじょうずです。", en: "I'm good at English." }, accept: ["skilled", "skillful", "proficient"], hint: "JOH-zu — three beats: jo-o-zu, じょ lengthened, ず buzzed. A な-adjective; the skill takes が. 🚨 NEVER SAY IT ABOUT YOURSELF — じょうずです about your own Japanese sounds boastful. Use とくい or まだまだです instead." },
        { id: "ja-u21l4-heta", type: "vocab", front: "へた", reading: "heta", meaning: "bad at", example: { jp: "テニスがへたです。", en: "I'm bad at tennis." }, drill: { jp: "ゴルフがへたです。", en: "I'm bad at golf." }, accept: ["unskilled", "poor at", "clumsy"], hint: "HE-ta — two beats. A な-adjective, the opposite of じょうず, and the skill takes が. ⚠️ THIS one IS used about yourself — へたです is the modest thing to say, and saying it about someone else is rude." },
        { id: "ja-u21l4-na", type: "vocab", front: "な", reading: "na", meaning: "links a な-adjective to a noun", example: { jp: "きれいなはなです。", en: "It's a pretty flower." }, accept: ["na-adjective marker", "adjective link", "the na link"], hint: "A な-adjective needs な before a noun: きれい な はな = a pretty flower. With です the な drops: はなは きれいです." },
        { id: "ja-u21l4-daikirai", type: "vocab", front: "だいきらい", reading: "daikirai", meaning: "hate", example: { jp: "わたしはやさいがだいきらいです。", en: "I really hate vegetables." }, drill: { jp: "むしがだいきらいです。", en: "I hate bugs." }, accept: ["really hate", "detest", "can't stand", "really dislike"], hint: "だい (big) in front of きらい. It pairs with だいすき the same way — one prefix, two opposite ends of the scale." },
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
      canDo: "Say what you want (みずをのみたいです) and how much (とても / すこし / ぐらい).",
      items: [
        { id: "ja-u21l5-taidesu", type: "vocab", front: "たいです", reading: "taidesu", meaning: "want to~", example: { jp: "みずをのみたいです。", en: "I want to drink water." }, drill: { jp: "にほんにいきたいです。", en: "I want to go to Japan." }, accept: ["would like to", "want", "wish to"], hint: "verb-stem + たいです = 'want to…': のみます → のみ + たいです = want to drink." },
        { id: "ja-u21l5-hoshii", type: "vocab", front: "ほしい", reading: "hoshii", meaning: "want", example: { jp: "あたらしいくつがほしいです。", en: "I want new shoes." }, drill: { jp: "あたらしいかばんがほしいです。", en: "I want a new bag." }, accept: ["want (a thing)", "desire", "would like"], hint: "ほしい is for wanting a THING: (thing) が ほしいです. For wanting to DO, use verb + たいです." },
        { id: "ja-u21l5-daisuki", type: "vocab", front: "だいすき", reading: "daisuki", meaning: "love", example: { jp: "にほんがだいすきです。", en: "I love Japan." }, drill: { jp: "すしがだいすきです。", en: "I love sushi." }, accept: ["really like", "adore", "love dearly"], hint: "dai-SU-ki — four beats. だい, big, plus すき — and it is the ordinary word for loving a food or a band. ⚠️ あいしてる is the romantic love, used far less than English I love you. The thing loved still takes が." },
        { id: "ja-u21l5-totemo", type: "vocab", front: "とても", reading: "totemo", meaning: "very", example: { jp: "とてもたのしいです。", en: "It's very fun." }, drill: { jp: "とてもむずかしいです。", en: "It's very difficult." }, accept: ["really", "so", "extremely"], hint: "to-TE-mo — three beats. It goes in FRONT of the adjective: とてもたのしい. ⚠️ With a negative it means not at all — とてもできません is I absolutely cannot. The casual spoken version is すごく." },
        { id: "ja-u21l5-sukoshi", type: "vocab", front: "すこし", reading: "sukoshi", meaning: "a little (a small amount)", example: { jp: "すこしさむいです。", en: "It's a little cold." }, drill: { jp: "すこしいそがしいです。", en: "I'm a little busy." }, accept: ["a bit", "slightly", "some"], hint: "su-KO-shi — three beats. ⚠️ A small AMOUNT or a small degree: すこしさむい, a little cold. ⚠️ ちょっと means the same thing and is far commoner in speech; すこし is the one you write, and the politer of the two." },
        { id: "ja-u21l5-gurai", type: "vocab", front: "ぐらい", reading: "gurai", meaning: "about (approximately)", example: { jp: "いちじかんぐらいべんきょうします。", en: "I study for about an hour." }, drill: { jp: "すこしぐらいほしいです。", en: "I want a little at least." }, accept: ["approximately","around","or so","roughly"], hint: "ぐらい measures an AMOUNT or a LENGTH — いちじかんぐらい, about an hour. くらい is the same word and equally correct." },
      ],
    },
  ],
};
