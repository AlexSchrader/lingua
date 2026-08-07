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
      canDo: "Give the cause of something and show how you feel about it: せいで blames, おかげで thanks, したがって concludes.",
      items: [
        { id: "ja-u137l1-seide", type: "vocab", front: "せいで", reading: "seide", meaning: "because of (blame)", example: { jp: "あめのせいで、しあいはできませんでした。", en: "Because of the rain, we couldn't play the match." }, accept: ["due to", "on account of", "thanks to (negative)"], hint: "せいで is BLAME: the cause led to something bad. Noun + の + せいで, or plain verb + せいで. Its positive twin is おかげで." },
        { id: "ja-u137l1-okagede", type: "vocab", front: "おかげで", reading: "okagede", meaning: "thanks to", example: { jp: "せんせいのおかげで、テストはよくできました。", en: "Thanks to my teacher, the test went well." }, accept: ["because of (positive)", "owing to"], hint: "おかげで is CREDIT — the mirror image of せいで. Same slot, opposite feeling: あめのせいで (bad) / せんせいのおかげで (good)." },
        { id: "ja-u137l1-niyotte", type: "vocab", front: "によって", reading: "niyotte", meaning: "depending on", example: { jp: "ひとによって、こたえはちがいます。", en: "The answer differs depending on the person." }, accept: ["according to", "by", "varies with"], hint: "Noun + によって = 'depending on / by means of'. With ちがいます it means the result varies; in a passive sentence it names the doer." },
        { id: "ja-u137l1-sonokekka", type: "vocab", front: "そのけっか", reading: "sonokekka", meaning: "as a result", example: { jp: "まいにちれんしゅうしました。そのけっか、じょうずになりました。", en: "I practiced every day. As a result, I got good at it." }, accept: ["consequently", "and so", "the result was"], hint: "そのけっか starts a NEW sentence and reports the outcome of the one before it. Written and spoken both." },
        { id: "ja-u137l1-shitagatte", type: "vocab", front: "したがって", reading: "shitagatte", meaning: "therefore", example: { jp: "きょうはやすみです。したがって、みせはあいていません。", en: "Today is a holiday. Therefore the shop is not open." }, accept: ["accordingly", "hence", "so"], hint: "したがって is the FORMAL 'therefore' — reports, notices, essays. In conversation you would say だから." },
        { id: "ja-u137l1-nazenara", type: "vocab", front: "なぜなら", reading: "nazenara", meaning: "the reason is", example: { jp: "きょうはいきません。なぜなら、しごとがいそがしいからです。", en: "I'm not going today. The reason is that work is busy." }, accept: ["because", "this is because"], hint: "なぜなら opens the reason as its own sentence, and its clause ends in ～からです. Say the claim first, the reason second." },
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
      canDo: "Concede a point and still hold your position: ても, それなのに, いっぽうで, ただし.",
      items: [
        { id: "ja-u137l2-temo", type: "vocab", front: "ても", reading: "temo", meaning: "even if", example: { jp: "あめがふっても、わたしはいきます。", en: "Even if it rains, I'm going." }, accept: ["even though", "no matter if"], hint: "て-form + も = 'even if'. Compare たら (if — and then it happens) with ても (even if — and it makes no difference)." },
        { id: "ja-u137l2-sorenanoni", type: "vocab", front: "それなのに", reading: "sorenanoni", meaning: "and yet", example: { jp: "たくさんべんきょうしました。それなのに、テストはだめでした。", en: "I studied a lot. And yet the test went badly." }, accept: ["even so", "despite that", "nevertheless"], hint: "それなのに = そ (that) + のに (even though). Use it when the second sentence is unfair or surprising given the first." },
        { id: "ja-u137l2-kawarini", type: "vocab", front: "かわりに", reading: "kawarini", meaning: "instead of", example: { jp: "きょうはでんしゃのかわりに、じてんしゃでいきます。", en: "Today I'll go by bicycle instead of by train." }, accept: ["in place of", "in return", "rather than"], hint: "Noun + の + かわりに, or plain verb + かわりに. It also means 'in return': てつだうかわりに、ばんごはんをおごって." },
        { id: "ja-u137l2-ippode", type: "vocab", front: "いっぽうで", reading: "ippōde", meaning: "on the other hand", example: { jp: "このみせはやすいです。いっぽうで、あまりきれいではありません。", en: "This shop is cheap. On the other hand, it isn't very clean." }, accept: ["meanwhile", "while", "at the same time"], hint: "いっぽうで sets two true things side by side without picking one. Useful the moment you start giving opinions with two sides." },
        { id: "ja-u137l2-mushiro", type: "vocab", front: "むしろ", reading: "mushiro", meaning: "rather", example: { jp: "このほんはむずかしくないです。むしろ、やさしすぎます。", en: "This book isn't difficult. Rather, it's too easy." }, accept: ["if anything", "on the contrary", "sooner"], hint: "むしろ corrects the picture: not just 'no', but 'no — the opposite'. Almost always follows a negative sentence." },
        { id: "ja-u137l2-tadashi", type: "vocab", front: "ただし", reading: "tadashi", meaning: "however (proviso)", example: { jp: "だれでもつかえます。ただし、こどもはおかねがいりません。", en: "Anyone can use it. However, children don't need to pay." }, accept: ["provided that", "with the proviso", "but note"], hint: "ただし adds the small print — an exception or condition to what you just said. Signs and rules use it constantly." },
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
      canDo: "Set the limits of a statement: かぎり, ないと, ように, さえ, としたら, だけでなく.",
      items: [
        { id: "ja-u137l4-kagiri", type: "vocab", front: "かぎり", reading: "kagiri", meaning: "as long as", example: { jp: "げんきなかぎり、はたらきたいです。", en: "As long as I'm healthy, I want to keep working." }, accept: ["so long as", "to the extent that", "as far as"], hint: "かぎり draws a boundary: the statement holds inside it and stops outside. With ない it becomes 'unless': いかないかぎり = unless you go." },
        { id: "ja-u137l4-naito", type: "vocab", front: "ないと", reading: "naito", meaning: "if you don't (you'd better)", example: { jp: "いまでないと、でんしゃにまにあいません。", en: "If we don't leave now, we won't make the train." }, accept: ["unless", "have to", "must"], hint: "ない + と warns of a bad result. In speech the second half is often dropped: もういかないと。 = 'I'd better go.'" },
        { id: "ja-u137l4-yoni", type: "vocab", front: "ように", reading: "yōni", meaning: "so that", example: { jp: "みんながわかるように、ゆっくりはなしてください。", en: "Please speak slowly so that everyone understands." }, accept: ["in order that", "in such a way that", "hoping that"], hint: "ように takes a NON-volitional verb (わかる, できる, なる) — a state you hope for. For a deliberate goal use ために." },
        { id: "ja-u137l4-sae", type: "vocab", front: "さえ", reading: "sae", meaning: "even, if only", example: { jp: "じかんさえあれば、まいにちおよぎたいです。", en: "If only I had the time, I'd swim every day." }, accept: ["so much as", "just", "as long as"], hint: "さえ marks the ONE thing that would settle it. さえ + ば = 'if only X, then everything else is fine'." },
        { id: "ja-u137l4-toshitara", type: "vocab", front: "としたら", reading: "toshitara", meaning: "supposing that", example: { jp: "いま100まんえんもらえるとしたら、なにをかいますか。", en: "Supposing you got a million yen right now, what would you buy?" }, accept: ["if it were the case", "assuming", "hypothetically if"], hint: "としたら sets up a hypothetical you both know isn't true yet. たら alone can be a real plan; としたら is openly imaginary." },
        { id: "ja-u137l4-dakedenaku", type: "vocab", front: "だけでなく", reading: "dakedenaku", meaning: "not only", example: { jp: "かれはえいごだけでなく、フランスごもはなせます。", en: "He can speak not only English but French too." }, accept: ["not just", "as well as", "besides"], hint: "だけでなく…も is a pair — the second half almost always carries も. Dropping the も is the mistake to watch for." },
      ],
    },
  ],
};
