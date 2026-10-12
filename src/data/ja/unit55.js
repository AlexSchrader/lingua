// Unit 55 — けいようし・N5 ("N5 Adjectives") — A1 thematic
// A batch of common JLPT N5 い- and な-adjectives not yet taught, grouped by
// theme: dimensions, state, quality/ease, and impression/taste. Each pairs
// naturally with opposites already learned (ながい↔みじかい, はやい↔おそい).
// Examples reuse only known nouns + particles + です. No new grammar — the
// adjectives are taught as vocabulary. lang/unit/lesson wired in index.js.
export const UNIT55 = {
  id: "ja-u55",
  lang: "ja",
  title: "けいようし・N5",
  order: 55,
  stage: "a1",
  lessons: [
    // Lesson 1: dimensions & shape
    {
      id: "ja-u55l1",
      unit: 55,
      lesson: 1,
      title: "Dimensions",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe size and shape: ながい みじかい ふとい ほそい せまい ひくい.",
      items: [
        { id: "ja-u55l1-nagai", type: "vocab", front: "ながい", reading: "nagai", meaning: "long", example: { jp: "このみちはながいです。", en: "This road is long." }, drill: { jp: "このかわはながいです。", en: "This river is long." }, accept: ["lengthy", "long (in length)", "elongated"], hint: "na-GA-i — three beats, hard g. ⚠️ ながい is LENGTH only. For tall, Japanese uses たかい, which it treats as a different idea. Its opposite みじかい is right below." },
        { id: "ja-u55l1-mijikai", type: "vocab", front: "みじかい", reading: "mijikai", meaning: "short", example: { jp: "このえんぴつはみじかいです。", en: "This pencil is short." }, drill: { jp: "なつのよるはみじかいです。", en: "Summer nights are short." }, accept: ["brief", "short (in length)", "not long"], hint: "mi-ji-KA-i — four beats. ⚠️ Short in LENGTH, the opposite of ながい above. For short in HEIGHT Japanese uses ひくい, further down this same lesson." },
        { id: "ja-u55l1-futoi", type: "vocab", front: "ふとい", reading: "futoi", meaning: "thick", example: { jp: "このペンはふといです。", en: "This pen is thick." }, drill: { jp: "このきはふといです。", en: "This tree is thick." }, accept: ["fat", "thick (round things)", "broad"], hint: "fu-TO-i — three beats, ふ is a soft fu. ⚠️ For ROUND things: pens, trees, arms. A thick book is あつい, never ふとい. Its opposite ほそい is next." },
        { id: "ja-u55l1-hosoi", type: "vocab", front: "ほそい", reading: "hosoi", meaning: "thin", example: { jp: "ゆびがほそいです。", en: "The fingers are thin." }, drill: { jp: "ほそいペンをつかいます。", en: "I use a thin pen." }, accept: ["slender", "narrow", "fine", "thin (round things)"], hint: "ho-SO-i — three beats. ⚠️ The opposite of ふとい above, and only for round or long things. A thin BOOK is うすい, not ほそい." },
        { id: "ja-u55l1-semai", type: "vocab", front: "せまい", reading: "semai", meaning: "narrow", example: { jp: "このへやはせまいです。", en: "This room is narrow." }, drill: { jp: "このみちはせまいです。", en: "This street is narrow." }, accept: ["cramped", "small", "tight", "confined"], hint: "se-MA-i — three beats. ⚠️ It is about SPACE — a room, a street, a seat — never about a thin object. For a thin thing use ほそい, just above." },
        { id: "ja-u55l1-hikui", type: "vocab", front: "ひくい", reading: "hikui", meaning: "low", example: { jp: "このやまはひくいです。", en: "This mountain is low." }, drill: { jp: "このいすはひくいです。", en: "This chair is low." }, accept: ["short (height)", "low-lying", "not tall"], hint: "hi-KU-i — three beats. ⚠️ The opposite of たかい. Japanese uses one word for low AND short-in-height, so a short person is せがひくいです." },
      ],
    },
    // Lesson 2: state & quantity
    {
      id: "ja-u55l2",
      unit: 55,
      lesson: 2,
      title: "State & quantity",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe state and amount: くらい きたない わかい おおい すくない まるい.",
      items: [
        { id: "ja-u55l2-kurai", type: "vocab", front: "くらい", reading: "kurai", meaning: "dark", example: { jp: "へやがくらいです。", en: "The room is dark." }, drill: { jp: "そとはもうくらいです。", en: "It is already dark outside." }, accept: ["dim", "gloomy", "unlit"], hint: "ku-RA-i — three beats, tapped r. ⚠️ It describes a MOOD too, exactly as English gloomy does. Its opposite is あかるい." },
        { id: "ja-u55l2-kitanai", type: "vocab", front: "きたない", reading: "kitanai", meaning: "dirty", example: { jp: "くつがきたないです。", en: "The shoes are dirty." }, drill: { jp: "まどがきたないです。", en: "The window is dirty." }, accept: ["messy", "filthy", "unclean"], hint: "ki-ta-NA-i — four beats. ⚠️ Its opposite きれい means clean AND pretty, which is why きたない also carries the sense of ugly." },
        { id: "ja-u55l2-wakai", type: "vocab", front: "わかい", reading: "wakai", meaning: "young", example: { jp: "せんせいはわかいです。", en: "The teacher is young." }, drill: { jp: "このひとはとてもわかいです。", en: "This person is very young." }, accept: ["youthful", "young-looking", "junior"], hint: "wa-KA-i — three beats. ⚠️ Only for living things and their age. A NEW object is あたらしい — never わかい." },
        { id: "ja-u55l2-ooi", type: "vocab", front: "おおい", reading: "ōi", meaning: "many", example: { jp: "ひとがおおいです。", en: "There are many people." }, drill: { jp: "しごとがおおいです。", en: "There is a lot of work." }, accept: ["a lot", "numerous", "plentiful", "abundant"], hint: "Ō-i — the おお is ONE long o, so two beats, not three. ⚠️ It cannot sit in front of a noun: say ひとがおおいです, never おおいひと. Its opposite すくない is next." },
        { id: "ja-u55l2-sukunai", type: "vocab", front: "すくない", reading: "sukunai", meaning: "few", example: { jp: "おかねがすくないです。", en: "There is little money." }, drill: { jp: "きょうはひとがすくないです。", en: "There are few people today." }, accept: ["little", "scarce", "not many", "a small amount"], hint: "su-ku-NA-i — four beats. ⚠️ The opposite of おおい above, with the same restriction: it goes after が, not in front of a noun. It is not すこし, a little." },
        { id: "ja-u55l2-marui", type: "vocab", front: "まるい", reading: "marui", meaning: "round", example: { jp: "つきはまるいです。", en: "The moon is round." }, drill: { jp: "たまごはまるいです。", en: "An egg is round." }, accept: ["circular", "spherical", "rounded"], hint: "ma-RU-i — three beats, tapped r. ⚠️ From まる, a circle — the same まる a Japanese teacher draws beside a correct answer." },
      ],
    },
    // Lesson 3: quality & ease
    {
      id: "ja-u55l3",
      unit: 55,
      lesson: 3,
      title: "Quality & ease",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe speed, ease, and impression: はやい おそい すごい やさしい かんたん ひま.",
      items: [
        { id: "ja-u55l3-hayai", type: "vocab", front: "はやい", reading: "hayai", meaning: "fast", example: { jp: "でんしゃははやいです。", en: "The train is fast." }, drill: { jp: "くるまははやいです。", en: "The car is fast." }, accept: ["quick", "early", "rapid", "speedy"], hint: "ha-YA-i — three beats. ⚠️ One word, two meanings: fast in SPEED and early in TIME. Context decides, and おそい below mirrors both senses." },
        { id: "ja-u55l3-osoi", type: "vocab", front: "おそい", reading: "osoi", meaning: "slow", example: { jp: "バスはおそいです。", en: "The bus is slow." }, drill: { jp: "このとけいはおそいです。", en: "This clock is slow." }, accept: ["late", "slow-moving", "sluggish"], hint: "o-SO-i — three beats. ⚠️ The mirror of はやい above: it covers slow AND late. バスはおそいです can be either, so listen for the context." },
        { id: "ja-u55l3-sugoi", type: "vocab", front: "すごい", reading: "sugoi", meaning: "amazing", example: { jp: "このえいがはすごいです。", en: "This movie is amazing." }, drill: { jp: "このみせはすごいです。", en: "This shop is amazing." }, accept: ["great", "incredible", "awesome", "impressive"], hint: "su-GO-i — three beats, hard g. ⚠️ It swings both ways: すごい can praise or mean dreadful. In speech it is also used the way English uses really." },
        { id: "ja-u55l3-yasashii", type: "vocab", front: "やさしい", reading: "yasashii", meaning: "easy", example: { jp: "このテストはやさしいです。", en: "This test is easy." }, drill: { jp: "このほんはやさしいです。", en: "This book is easy." }, accept: ["gentle", "kind", "simple", "not difficult"], hint: "ya-sa-SHI-i — four beats, the final い its own beat. ⚠️ Two senses, easy and kind. For the easy sense its opposite is むずかしい." },
        { id: "ja-u55l3-kantan", type: "vocab", front: "かんたん", reading: "kantan", meaning: "simple", example: { jp: "しごとはかんたんです。", en: "The work is simple." }, drill: { jp: "このりょうりはかんたんです。", en: "This dish is simple." }, accept: ["easy", "straightforward", "uncomplicated"], hint: "kan-TAN — two heavy beats, both ん held. ⚠️ A な-adjective, so before a noun it needs な: かんたんなしごと. Compare やさしい above, which is an い-adjective." },
        { id: "ja-u55l3-hima", type: "vocab", front: "ひま", reading: "hima", meaning: "free", example: { jp: "きょうはひまです。", en: "I'm free today." }, drill: { jp: "あしたのよるはひまです。", en: "I am free tomorrow night." }, accept: ["free time", "idle", "not busy", "spare time"], hint: "HI-ma — two beats. ⚠️ Not free of charge — that is ただ. ひま is having nothing booked, the opposite of いそがしい." },
      ],
    },
    // Lesson 4: impressions & taste
    {
      id: "ja-u55l4",
      unit: 55,
      lesson: 4,
      title: "Impressions & taste",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Give impressions: おもしろい つまらない まずい しょっぱい ひどい おなじ.",
      items: [
        { id: "ja-u55l4-omoshiroi", type: "vocab", front: "おもしろい", reading: "omoshiroi", meaning: "interesting", example: { jp: "このえいがはおもしろいです。", en: "This movie is interesting." }, drill: { jp: "にほんごはおもしろいです。", en: "Japanese is interesting." }, accept: ["fun", "funny", "entertaining", "amusing"], hint: "o-mo-shi-RO-i — five beats, the longest word in this lesson. ⚠️ It covers interesting AND funny. Its opposite つまらない is right below." },
        { id: "ja-u55l4-tsumaranai", type: "vocab", front: "つまらない", reading: "tsumaranai", meaning: "boring (dull and trivial)", example: { jp: "このばんぐみはつまらないです。", en: "This program is boring." }, drill: { jp: "このえいがはつまらないです。", en: "This film is boring." }, accept: ["dull", "trivial", "uninteresting", "not worth it"], hint: "tsu-ma-ra-NA-i — five beats, つ is tsu. ⚠️ It looks like a negative verb but behaves as an adjective. The opposite of おもしろい above." },
        { id: "ja-u55l4-mazui", type: "vocab", front: "まずい", reading: "mazui", meaning: "bad-tasting", example: { jp: "このりょうりはまずいです。", en: "This food tastes bad." }, drill: { jp: "このコーヒーはまずいです。", en: "This coffee tastes bad." }, accept: ["unappetizing", "awful", "tastes bad", "horrible"], hint: "ma-ZU-i — three beats, a buzzing z. ⚠️ The opposite of おいしい. It also means awkward, as in a まずい situation." },
        { id: "ja-u55l4-shoppai", type: "vocab", front: "しょっぱい", reading: "shoppai", meaning: "salty", example: { jp: "このスープはしょっぱいです。", en: "This soup is salty." }, drill: { jp: "このみそはしょっぱいです。", en: "This miso is salty." }, accept: ["salty-tasting", "too salty", "over-salted"], hint: "shop-PAI — the small っ is a held stop, doubling the p, exactly like すっぱい in the food unit. ⚠️ Built on しお, salt, and only about taste." },
        { id: "ja-u55l4-hidoi", type: "vocab", front: "ひどい", reading: "hidoi", meaning: "terrible", example: { jp: "てんきがひどいです。", en: "The weather is terrible." }, drill: { jp: "あめがひどいです。", en: "The rain is terrible." }, accept: ["awful", "cruel", "severe", "harsh"], hint: "hi-DO-i — three beats. ⚠️ Stronger than わるい: ひどい is for weather, injuries and unkind behaviour — what English calls brutal." },
        { id: "ja-u55l4-onaji", type: "vocab", front: "おなじ", reading: "onaji", meaning: "same", example: { jp: "これはおなじです。", en: "This is the same." }, drill: { jp: "わたしとおなじです。", en: "It is the same as me." }, accept: ["identical", "the same", "alike"], hint: "o-NA-ji — three beats. ⚠️ Unlike other な-adjectives it takes NO な before a noun: おなじひと, not おなじなひと. What it matches takes と." },
      ],
    },
  ],
};
