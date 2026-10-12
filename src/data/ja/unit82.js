// Unit 82 — ごい・N5 (core N5 vocabulary, coverage-gap fill) — A1 / JLPT N5
// DRILL SHAPE: every drill leads with its own front + a core particle wherever the
// example already earned ja sentence:build, because practice() REPLACES the example
// and ja sentenceTokens only tiles [front][particle][rest] — any other shape would
// take that card away. tests/unit/drill-corpus.test.mjs is what catches it.
export const UNIT82 = {
  id: "ja-u82",
  lang: "ja",
  title: "ごい・N5・1",
  order: 82,
  stage: "a1",
  lessons: [
    {
      id: "ja-u82l1",
      unit: 82,
      lesson: 1,
      title: "N5 vocabulary 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Core JLPT N5 vocabulary: あそこ あちら あと あびる いい よい.",
      items: [
        { id: "ja-u82l1-asoko", type: "vocab", front: "あそこ", reading: "asoko", meaning: "over there (that place)", example: { jp: "トイレはあそこです。", en: "The toilet is over there." }, drill: { jp: "あそこにトイレがあります。", en: "There is a toilet over there." }, accept: ["that place","there","yonder","that spot"], hint: "asoko — the third of the こ/そ/あ place words: ここ (by me), そこ (by you), あそこ (away from us both). Use it when the place is far from BOTH speakers. あちら on the next card is its polite form." },
        { id: "ja-u82l1-achira", type: "vocab", front: "あちら", reading: "achira", meaning: "that way (over there politely)", example: { jp: "あちらへどうぞ。", en: "Please go that way." }, drill: { jp: "あちらがうけつけです。", en: "Reception is that way." }, accept: ["over there","that direction","that side","over yonder"], hint: "achira — the polite あそこ, and also a polite 'that person'. Shop staff and receptionists use it constantly: あちらへどうぞ. Pairs with こちら (this way) and そちら." },
        { id: "ja-u82l1-ato", type: "vocab", front: "あと", reading: "ato", meaning: "later", example: { jp: "あとでいきます。", en: "I'll go later." }, drill: { jp: "あとでそうじします。", en: "I'll clean up later." }, accept: ["after","afterwards","later on","the rest"], hint: "ato — 'later' when followed by で, and 'the remainder' on its own: あとひとつ is 'one more to go'. ⚠️ It also means 'behind' in space, so あとをみる is to look back." },
        { id: "ja-u82l1-abiru", type: "vocab", front: "あびる", reading: "abiru", meaning: "to take (a shower)", example: { jp: "シャワーをあびる。", en: "I take a shower." }, drill: { jp: "よるにシャワーをあびる。", en: "I take a shower at night." }, accept: ["to bathe","to shower","to have a shower","to douse oneself"], hint: "abiru — having water poured OVER you, so it is the verb for a shower, never for a bath (that is おふろにはいる). シャワーをあびる is the fixed pair you will always hear it in." },
        { id: "ja-u82l1-ii", type: "vocab", front: "いい", reading: "ii", meaning: "good (everyday)", example: { jp: "てんきがいいです。", en: "The weather is good." }, drill: { jp: "いいしごとをします。", en: "He does good work." }, accept: ["nice","fine","great","all right"], hint: "ii — the everyday 'good', and irregular: its past is よかった, built on よい from the next card, not on いい. いいです can also politely mean 'no thanks', so tone matters." },
        { id: "ja-u82l1-yoi", type: "vocab", front: "よい", reading: "yoi", meaning: "good (formal)", example: { jp: "よいてんきです。", en: "It's good weather." }, drill: { jp: "よいけいけんをしました。", en: "It was a good experience." }, accept: ["nice","fine", "good","favourable"], hint: "yoi — the formal, written form of いい on the card before. Same word historically, which is why いい borrows よい's past tense: よかった. You will read よい and say いい." },
      ],
    },
    {
      id: "ja-u82l2",
      unit: 82,
      lesson: 2,
      title: "N5 vocabulary 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Core JLPT N5 vocabulary: いかが ゆく いちにち いっしょ いつつ いや.",
      items: [
        { id: "ja-u82l2-ikaga", type: "vocab", front: "いかが", reading: "ikaga", meaning: "how about", example: { jp: "おちゃはいかがですか。", en: "How about some tea?" }, drill: { jp: "ごはんはいかがですか。", en: "How about some food?" }, accept: ["how","how is it","how about it","what do you think"], hint: "ikaga — the polite どう, used to offer something or ask how a thing was. いかがですか is the phrase a waiter or a host uses; どうですか is the casual version." },
        { id: "ja-u82l2-yuku", type: "vocab", front: "ゆく", reading: "yuku", meaning: "to go", example: { jp: "がっこうへゆく。", en: "I go to school." }, drill: { jp: "うみへゆく。", en: "I go to the sea." }, accept: ["go","to go","to head for","to proceed"], hint: "yuku — an older, more literary いく. Identical in meaning; you will meet it in songs, signs and set phrases rather than in speech. Both take へ or に for the destination." },
        { id: "ja-u82l2-ichinichi", type: "vocab", front: "いちにち", reading: "ichinichi", meaning: "one day", example: { jp: "いちにちやすみます。", en: "I rest for one day." }, drill: { jp: "いちにちべんきょうします。", en: "I study for a whole day." }, accept: ["a day","all day","one whole day","a single day"], hint: "ichinichi — いち (one) + にち (day). ⚠️ Read ichinichi for 'one day' as a duration, but ついたち when it means the FIRST of the month — same characters, different word." },
        { id: "ja-u82l2-issho", type: "vocab", front: "いっしょ", reading: "issho", meaning: "together", example: { jp: "いっしょにいきましょう。", en: "Let's go together." }, drill: { jp: "いっしょにりょうりをつくります。", en: "We cook together." }, accept: ["with","together with","alongside","as a group"], hint: "issho — いち (one) + しょ (place), colliding into っし: is-sho. Almost always with に: いっしょに, 'together'. Add と for who with: ともだちといっしょに." },
        { id: "ja-u82l2-itsutsu", type: "vocab", front: "いつつ", reading: "itsutsu", meaning: "five (things)", example: { jp: "りんごをいつつください。", en: "Five apples, please." }, drill: { jp: "たまごをいつつかいます。", en: "I buy five eggs." }, accept: ["five","five of them","five items","5"], hint: "itsutsu — the native counter for five loose objects, as against ご, the Chinese-derived number. One to ten in native counting runs ひとつ ふたつ みっつ よっつ いつつ — this is the fifth." },
        { id: "ja-u82l2-iya", type: "vocab", front: "いや", reading: "iya", meaning: "unpleasant", example: { jp: "いやなてんきです。", en: "It's nasty weather." }, drill: { jp: "いやなしごとはしません。", en: "I don't do unpleasant work." }, accept: ["disagreeable","no","horrible","not nice"], hint: "iya — な-adjective for something you find distasteful. ⚠️ On its own いや！ is a flat refusal, close to 'ugh, no'. Stronger and more personal than きらい, which is simply dislike." },
      ],
    },
    {
      id: "ja-u82l3",
      unit: 82,
      lesson: 3,
      title: "N5 vocabulary 3",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Core JLPT N5 vocabulary: いりぐち いれる いろいろ うまれる エレベーター おおきな.",
      items: [
        { id: "ja-u82l3-iriguchi", type: "vocab", front: "いりぐち", reading: "iriguchi", meaning: "entrance (the way in)", example: { jp: "いりぐちはあそこです。", en: "The entrance is over there." }, drill: { jp: "いりぐちにひとがいます。", en: "There is someone at the entrance." }, accept: ["entry","way in","the entrance","the door in"], hint: "iriguchi — いり (entering) + くち (mouth), with the く voicing to ぐ: the mouth you go in by. Its opposite でぐち, from u3, is the same pattern with で (going out)." },
        { id: "ja-u82l3-ireru", type: "vocab", front: "いれる", reading: "ireru", meaning: "to put in", example: { jp: "かばんにいれる。", en: "I put it in the bag." }, drill: { jp: "れいぞうこにやさいをいれる。", en: "I put the vegetables in the fridge." }, accept: ["to insert","to add","to put inside","to pop in"], hint: "ireru — you putting a thing in, so the container takes に. Its intransitive partner はいる is the thing going in by itself. Also 'to make tea': おちゃをいれる." },
        { id: "ja-u82l3-iroiro", type: "vocab", front: "いろいろ", reading: "iroiro", meaning: "various", example: { jp: "いろいろなくにへいきます。", en: "I go to various countries." }, drill: { jp: "いろいろなほうほうがあります。", en: "There are various methods." }, accept: ["all sorts","many kinds","all kinds of","assorted"], hint: "iroiro — a doubled word built on いろ, colour, from u12: many colours, so many kinds. な-adjective. Japanese loves these doubled forms — いろいろ, ときどき, だんだん." },
        { id: "ja-u82l3-umareru", type: "vocab", front: "うまれる", reading: "umareru", meaning: "to be born", example: { jp: "にほんでうまれる。", en: "I was born in Japan." }, drill: { jp: "あかちゃんがうまれる。", en: "A baby is born." }, accept: ["to be born","born","to come into the world","to arrive"], hint: "umareru — the passive-looking partner of うむ, to give birth: the baby is born by itself, so it takes が. Where you were born takes で: にほんでうまれました." },
        { id: "ja-u82l3-erebeta", type: "vocab", front: "エレベーター", reading: "erebētā", meaning: "elevator", example: { jp: "エレベーターにのります。", en: "I get on the elevator." }, drill: { jp: "エレベーターはあちらです。", en: "The lift is that way." }, accept: ["lift","the elevator","a lift","the lift"], hint: "erebētā — six beats with TWO long vowels: e-re-bē-tā. The escalator is エスカレーター, which looks alarmingly similar in katakana — count the syllables." },
        { id: "ja-u82l3-ookina", type: "vocab", front: "おおきな", reading: "ōkina", meaning: "big (before a noun)", example: { jp: "おおきないぬです。", en: "It's a big dog." }, drill: { jp: "おおきなこうえんであそびます。", en: "I play in a big park." }, accept: ["large","great","sizeable","grand"], hint: "ōkina — ⚠️ a な-form that can ONLY sit before a noun: おおきないぬ is fine, but 'the dog is big' must be いぬはおおきいです with おおきい. One idea, two grammars." },
      ],
    },
    {
      id: "ja-u82l4",
      unit: 82,
      lesson: 4,
      title: "N5 vocabulary 4",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Core JLPT N5 vocabulary: おさら おじさん おてあらい おとこのこ おんなのこ おばさん.",
      items: [
        { id: "ja-u82l4-osara", type: "vocab", front: "おさら", reading: "osara", meaning: "plate (the polite form)", example: { jp: "おさらをあらいます。", en: "I wash the plate." }, drill: { jp: "おさらにりょうりをもります。", en: "I dish the food onto the plate." }, accept: ["dish","plates","a plate","the dish"], hint: "osara — さら (u47) with the polite お, and this is the form you will actually hear: bare さら sounds blunt. The same お fronts おちゃ, おかね and おてあらい two cards along." },
        { id: "ja-u82l4-ojisan", type: "vocab", front: "おじさん", reading: "ojisan", meaning: "uncle", example: { jp: "おじさんにあいます。", en: "I meet my uncle." }, drill: { jp: "おじさんがきました。", en: "My uncle came." }, accept: ["middle-aged man","an uncle","a man of middle age","mister"], hint: "ojisan — your uncle, AND any middle-aged man, used the way English might say 'mister' to a stranger. ⚠️ Hold the じ short: おじいさん, with a long い, is a grandfather." },
        { id: "ja-u82l4-otearai", type: "vocab", front: "おてあらい", reading: "otearai", meaning: "restroom", example: { jp: "おてあらいはどこですか。", en: "Where is the restroom?" }, drill: { jp: "おてあらいをさがします。", en: "I look for the restroom." }, accept: ["toilet","bathroom","the loo","washroom"], hint: "otearai — お + て (hand) + あらい (washing): the hand-washing place. The polite word; トイレ from u10 is the plain one. Use おてあらい in a restaurant or someone's home." },
        { id: "ja-u82l4-otokonoko", type: "vocab", front: "おとこのこ", reading: "otokonoko", meaning: "boy", example: { jp: "おとこのこがいます。", en: "There is a boy." }, drill: { jp: "おとこのこがあそんでいます。", en: "A boy is playing." }, accept: ["a boy","young boy","male child","lad"], hint: "otokonoko — おとこ (male, u8) + の + こ (child): a male child. Its counterpart おんなのこ is the next card, built the same way. Both are for children, not adults." },
        { id: "ja-u82l4-onnanoko", type: "vocab", front: "おんなのこ", reading: "onnanoko", meaning: "girl", example: { jp: "おんなのこがいます。", en: "There is a girl." }, drill: { jp: "おんなのこがうたをうたいます。", en: "A girl sings a song." }, accept: ["a girl","young girl","female child","lass"], hint: "onnanoko — おんな (female, u8) + の + こ (child), the exact mirror of おとこのこ on the card before. Learn one pattern and you have both words." },
        { id: "ja-u82l4-obasan", type: "vocab", front: "おばさん", reading: "obasan", meaning: "aunt", example: { jp: "おばさんにあいます。", en: "I meet my aunt." }, drill: { jp: "おばさんはしんせつです。", en: "My aunt is kind." }, accept: ["auntie","middle-aged woman","an aunt","madam"], hint: "obasan — your aunt, and any middle-aged woman. ⚠️ The same length trap as おじさん: おばあさん, with a long あ, is a grandmother. One mora decides which generation you just addressed." },
      ],
    },
  ],
};
