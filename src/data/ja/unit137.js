// JA Unit 137 — ぶんぽう・6 (linked and subordinate clauses) — B1 / JLPT N3
// Strand C, grammar 6 of 8. Continues ぶんぽう・4 (u30) and ぶんぽう・5 (u43/u44):
// those taught the A2 connectives (ので・のに・から・まえに・あとで・ながら・たら・ば・なら),
// so this unit takes only what they left — the N3 subordinators that let one sentence
// carry two clauses with a relationship between them.
// Modeled as function-word vocab; the pattern lives in the example, and every example
// here is deliberately TWO clauses (blueprint §1 "B1 and B2", point 3).
// Examples use A1/A2 vocabulary only, so this unit does not depend on blocks 1–2 landing
// first. Fronts were checked against the corpus, but as exact strings — a check that misses
// ます⇄辞書形 pairs, and did so in four sibling units. This unit came through clean; the
// re-check that proved it is lexeme-aware.
export const UNIT137 = {
  id: "ja-u137",
  lang: "ja",
  title: "ぶんぽう・6",
  order: 137,
  stage: "b1",
  lessons: [
    // Lesson 1: why something happened — beyond から / ので
    {
      id: "ja-u137l1",
      unit: 137,
      lesson: 1,
      title: "Because of, thanks to (げんいん)",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Give the cause of something in written register: せいか hedges it, ゆえに concludes formally, おかげさまで thanks, によると cites a source, そのかわり trades one thing for another.",
      items: [
        { id: "ja-u137l1-seika", type: "vocab", front: "せいか", reading: "seika", meaning: "perhaps because", example: { jp: "さむかったせいか、きょうは人がすくないです。", en: "Perhaps because it was cold, there are few people today." }, accept: ["maybe because", "possibly due to"], hint: "せいか is せいで with the blame taken out — it marks a cause you are not sure of." },
        { id: "ja-u137l1-yueni", type: "vocab", front: "ゆえに", reading: "yueni", meaning: "hence", example: { jp: "この道はせまい。ゆえに、車は通れません。", en: "This road is narrow. Hence cars cannot pass." }, accept: ["therefore", "consequently", "for that reason"], hint: "ゆえに is the written, formal end of the cause connectives — notices and academic prose, never conversation." },
        { id: "ja-u137l1-okagesamade", type: "vocab", front: "おかげさまで", reading: "okagesamade", meaning: "thanks to you", example: { jp: "おかげさまで、びょうきはよくなりました。", en: "Thanks to you, my illness has got better." }, accept: ["I'm fine thanks to you", "by your kindness"], hint: "A set phrase of thanks, used even when the listener did nothing — the polite reply to 「おげんきですか」." },
        { id: "ja-u137l1-niyoruto", type: "vocab", front: "によると", reading: "niyoruto", meaning: "according to", example: { jp: "天気よほうによると、あしたは雨だそうです。", en: "According to the forecast, it will rain tomorrow." }, accept: ["going by", "from what X says", "based on"], hint: "によると names where information came from, and usually closes with そうです." },
        { id: "ja-u137l1-sonokawari", type: "vocab", front: "そのかわり", reading: "sonokawari", meaning: "in exchange", example: { jp: "この店は少したかいです。そのかわり、品がとてもいいです。", en: "This shop is a little expensive. In exchange, the goods are very good." }, accept: ["on the other hand", "to make up for it", "but in return"] },
        { id: "ja-u137l1-sonokekka", type: "vocab", front: "そのけっか", reading: "sonokekka", meaning: "as a result", example: { jp: "まいにちれんしゅうしました。そのけっか、じょうずになりました。", en: "I practiced every day. As a result, I got good at it." }, accept: ["consequently", "and so", "the result was"], hint: "そのけっか starts a NEW sentence and reports the outcome of the one before it. Written and spoken both." },
      ],
    },
    // Lesson 2: contrast and concession
    {
      id: "ja-u137l2",
      unit: 137,
      lesson: 2,
      title: "Even if, instead, on the other hand",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Concede a point and still hold your position: ものの, ところが, いっぽう, ても, それなのに, ただし.",
      items: [
        { id: "ja-u137l2-monono", type: "vocab", front: "ものの", reading: "monono", meaning: "although", example: { jp: "やくそくはしたものの、じかんがありません。", en: "Although I promised, I have no time." }, accept: ["even though", "despite the fact that"], hint: "ものの concedes what you just said, then turns — written register, close to 「～が」 but stronger." },
        { id: "ja-u137l2-tokoroga", type: "vocab", front: "ところが", reading: "tokoroga", meaning: "however", example: { jp: "早く家を出ました。ところが、電車がとまっていました。", en: "I left home early. However, the trains had stopped." }, accept: ["but", "and yet", "to my surprise"], hint: "ところが always introduces something you did not expect — it never joins two neutral facts." },
        { id: "ja-u137l2-ippo", type: "vocab", front: "いっぽう", reading: "ippō", meaning: "meanwhile", example: { jp: "兄は本をよみます。いっぽう、弟は外であそびます。", en: "My older brother reads. Meanwhile, my younger brother plays outside." }, accept: ["on the other hand", "by contrast", "for its part"] },
        { id: "ja-u137l2-temo", type: "vocab", front: "ても", reading: "temo", meaning: "even if", example: { jp: "あめがふっても、わたしはいきます。", en: "Even if it rains, I'm going." }, accept: ["even though", "no matter if"], hint: "て-form + も = 'even if'. Compare たら (if — and then it happens) with ても (even if — and it makes no difference)." },
        { id: "ja-u137l2-sorenanoni", type: "vocab", front: "それなのに", reading: "sorenanoni", meaning: "and yet", example: { jp: "たくさんべんきょうしました。それなのに、テストはだめでした。", en: "I studied a lot. And yet the test went badly." }, accept: ["even so", "despite that", "nevertheless"], hint: "それなのに = そ (that) + のに (even though). Use it when the second sentence is unfair or surprising given the first." },
        { id: "ja-u137l2-tadashi", type: "vocab", front: "ただし", reading: "tadashi", meaning: "however (proviso)", example: { jp: "だれでもつかえます。ただし、こどもはおかねがいりません。", en: "Anyone can use it. However, children don't need to pay anything." }, accept: ["provided that", "with the proviso", "but note"], hint: "ただし adds the small print — an exception or condition to what you just said. Signs and rules use it constantly." },
      ],
    },
    // Lesson 3: time relations between two clauses
    {
      id: "ja-u137l3",
      unit: 137,
      lesson: 3,
      title: "While, the moment, every time",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place one event inside another in time: あいだに, うちに, とたん, たびに.",
      items: [
        { id: "ja-u137l3-aidani", type: "vocab", front: "あいだに", reading: "aidani", meaning: "while (during)", example: { jp: "ははがりょうりをしているあいだに、へやをそうじしました。", en: "While my mother was cooking, I cleaned the room." }, accept: ["during", "in the time that", "in the middle of"], hint: "あいだに = something happens ONCE inside a longer stretch. Drop the に (あいだ) and it means the action filled the whole stretch." },
        { id: "ja-u137l3-uchini", type: "vocab", front: "うちに", reading: "uchini", meaning: "while (before it changes)", example: { jp: "あたたかいうちに、たべてください。", en: "Please eat it while it's still warm." }, accept: ["before it becomes", "while still", "in the meantime"], hint: "うちに carries urgency — do it BEFORE the state ends. あいだに is neutral timing; うちに says the window is closing." },
        { id: "ja-u137l3-totan", type: "vocab", front: "とたん", reading: "totan", meaning: "the moment that", example: { jp: "いえをでたとたん、あめがふりはじめました。", en: "The moment I left the house, it started to rain." }, accept: ["as soon as", "just as", "no sooner than"], hint: "Past plain verb + とたん. The second thing is always a surprise, and always already happened — never use it for plans." },
        { id: "ja-u137l3-tabini", type: "vocab", front: "たびに", reading: "tabini", meaning: "every time", example: { jp: "このうたをきくたびに、こどものころをおもいだします。", en: "Every time I hear this song, I remember my childhood." }, accept: ["each time", "whenever", "on every occasion"], hint: "Dictionary-form verb or noun + の + たびに. It says the pairing is reliable: A happens, B always follows." },
        { id: "ja-u137l3-tsuideni", type: "vocab", front: "ついでに", reading: "tsuideni", meaning: "while you're at it", example: { jp: "かいものにいくついでに、てがみもだします。", en: "While I'm out shopping, I'll post the letter too." }, accept: ["on the way", "at the same time", "since you're going"], hint: "ついでに = the second errand is free because you were doing the first anyway. Very common in favours: ついでにこれもおねがい。" },
        { id: "ja-u137l3-saichu", type: "vocab", front: "さいちゅう", reading: "saichū", meaning: "in the middle of", example: { jp: "しょくじのさいちゅうに、でんわがなりました。", en: "The phone rang right in the middle of dinner." }, accept: ["in the midst of", "right when", "at the height of"], hint: "さいちゅう is あいだに with the interruption built in — the second event always cuts across the first. Noun + の or verb + ている + さいちゅうに." },
      ],
    },
    // Lesson 4: condition, purpose, scope
    {
      id: "ja-u137l4",
      unit: 137,
      lesson: 4,
      title: "As long as, unless, so that",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Set the limits of a statement: のみ, にしては, ないと, ように, としたら, だけでなく.",
      items: [
        { id: "ja-u137l4-nomi", type: "vocab", front: "のみ", reading: "nomi", meaning: "only", example: { jp: "この店は日よう日のみ休みます。", en: "This shop closes on Sundays only." }, accept: ["just", "alone", "nothing but"], hint: "のみ is the written form of だけ — signs and documents use it, speech uses だけ." },
        { id: "ja-u137l4-nishitewa", type: "vocab", front: "にしては", reading: "nishitewa", meaning: "for a", example: { jp: "はじめてにしては、じょうずにできました。", en: "For a first attempt, it went well." }, accept: ["considering it's", "given that it is"], hint: "にしては measures something against what its category would lead you to expect." },
        { id: "ja-u137l4-naito", type: "vocab", front: "ないと", reading: "naito", meaning: "if you don't (you'd better)", example: { jp: "いまでないと、でんしゃにまにあいません。", en: "If we don't leave now, we won't make the train." }, accept: ["unless", "have to", "must"], hint: "ない + と warns of a bad result. In speech the second half is often dropped: もういかないと。 = 'I'd better go.'" },
        { id: "ja-u137l4-yoni", type: "vocab", front: "ように", reading: "yōni", meaning: "so that", example: { jp: "みんながわかるように、ゆっくりはなしてください。", en: "Please speak slowly so that everyone understands." }, accept: ["in order that", "in such a way that", "hoping that"], hint: "ように takes a NON-volitional verb (わかる, できる, なる) — a state you hope for. For a deliberate goal use ために." },
        { id: "ja-u137l4-toshitara", type: "vocab", front: "としたら", reading: "toshitara", meaning: "supposing that", example: { jp: "いま100まんえんもらえるとしたら、なにをかいますか。", en: "Supposing you got a million yen right now, what would you buy?" }, accept: ["if it were the case", "assuming", "hypothetically if"], hint: "としたら sets up a hypothetical you both know isn't true yet. たら alone can be a real plan; としたら is openly imaginary." },
        { id: "ja-u137l4-dakedenaku", type: "vocab", front: "だけでなく", reading: "dakedenaku", meaning: "not only", example: { jp: "かれはえいごだけでなく、フランスごもはなせます。", en: "He can speak not only English but French too." }, accept: ["not just", "as well as", "besides"], hint: "だけでなく…も is a pair — the second half almost always carries も. Dropping the も is the mistake to watch for." },
      ],
    },
  ],
};
