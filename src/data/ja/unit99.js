// Unit 99 — いけん・さんせい (Opinion and agreement) — B1 / JLPT N3
// Strand B, first B1 thematic unit. Opinion language: stating a view, agreeing and
// declining, backing a claim up, and softening a disagreement.
// B1 examples are two clauses joined by the item being taught (blueprint §1).
// NOTE: おもいます is taught here as a VOCAB item. An earlier draft of this header claimed
// nothing below u99 carries "think" — that was FALSE and is corrected here: src/data/ja/
// unit35.js:23 teaches the kanji 思 ("thought", example そう思います。) and its hint even
// glosses 思います. What is genuinely absent below u99 is the typable WORD: 思 is a glyph
// card testing a meaning, and 「～と おもいます」 is the sentence frame every other item in
// this unit needs. Flagged for the merge seat as a near-duplicate the front-uniqueness
// check cannot see (思 vs おもいます are different strings).
// The polite form is the front because the dictionary form おもう reads "omou", which
// src/data/lint.js:56 rejects as an unmacronned long vowel — a false positive for every
// う-verb (omou, sasou, kayou), logged in BUILD-CHECKLIST → Feature CC backlog.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT99 = {
  id: "ja-u99",
  lang: "ja",
  title: "いけん・さんせい",
  order: 99,
  stage: "b1",
  lessons: [
    {
      id: "ja-u99l1",
      unit: 99,
      lesson: 1,
      title: "Giving an opinion",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "State a view of your own and mark how strongly you hold it: おもいます かんがえかた しゅちょう のべる たしかに そのとおり.",
      items: [
        { id: "ja-u99l1-omoimasu", type: "vocab", front: "おもいます", reading: "omoimasu", meaning: "to think", example: { jp: "わたしは この けいかくが いいと おもいますが、りゆうも せつめいします。", en: "I think this plan is good, and I'll explain why as well." }, drill: { jp: "わたしも そう おもいます。", en: "I think so too." }, accept: ["to feel", "to believe", "think"], hint: "～と おもいます is the frame for any opinion: put the whole thought before と, then おもいます. It softens a claim — 「たかいです」 is a fact, 「たかいと おもいます」 is your view." },
        { id: "ja-u99l1-kangaekata", type: "vocab", front: "かんがえかた", reading: "kangaekata", meaning: "way of thinking", example: { jp: "わたしと ちちは かんがえかたが ちがいますが、はなすと よく わかります。", en: "My father and I think differently, but we understand each other when we talk." }, drill: { jp: "かんがえかたが ちがいます。", en: "The way of thinking is different." }, accept: ["outlook", "point of view", "approach"], hint: "かんがえ (thought) + かた (way of doing) — the same かた as つかいかた (how to use)." },
        { id: "ja-u99l1-shucho", type: "vocab", front: "しゅちょう", reading: "shuchō", meaning: "to insist", example: { jp: "ともだちは じぶんの いけんを つよく しゅちょうしましたが、わたしは そう おもいません。", en: "My friend insisted strongly on their own opinion, but I don't think so." }, drill: { jp: "しゅちょうを かえません。", en: "I will not change my position." }, accept: ["to claim", "to assert", "insist"], hint: "shu-CHŌ — the second beat is long. しゅ is principal and ちょう is to stretch out, so it is pushing a claim forward. Stronger than いいます: it implies resistance, which is why it often collides with a が clause." },
        { id: "ja-u99l1-noberu", type: "vocab", front: "のべる", reading: "noberu", meaning: "to state", example: { jp: "かいぎで じぶんの かんがえを のべてから、みんなの しつもんに こたえました。", en: "I stated my own view at the meeting, then answered everyone's questions." }, drill: { jp: "かんがえを のべる。", en: "I state my view." }, accept: ["to express", "to say", "state"], hint: "のべる is the formal cousin of はなします — used for opinions, speeches and reports, not chat." },
        { id: "ja-u99l1-tashikani", type: "vocab", front: "たしかに", reading: "tashikani", meaning: "certainly", example: { jp: "たしかに この みせは やすいですが、あまり おいしくないです。", en: "This shop is certainly cheap, but it isn't very good." }, drill: { jp: "たしかに そう おもいます。", en: "I certainly think so." }, accept: ["admittedly", "indeed", "it's true that"], hint: "In an argument たしかに concedes a point before you push back: たしかに X ですが、Y。 Hearing it, expect a 「が」 next." },
        { id: "ja-u99l1-sonotori", type: "vocab", front: "そのとおり", reading: "sonotōri", meaning: "exactly so", example: { jp: "はい、そのとおりです。わたしも まえから そう おもって いました。", en: "Yes, exactly. I've thought so for a while too." }, drill: { jp: "そのとおりに やりました。", en: "I did it exactly that way." }, accept: ["that's right", "quite so", "just as you say"], hint: "so-no-TŌ-ri — the とお is long. とおり is a way or a course, so it means along that line. 「そのとおりです」 agrees fully; 「そのとおりに」 plus a verb means do it just like that." },
      ],
    },
    {
      id: "ja-u99l2",
      unit: 99,
      lesson: 2,
      title: "Agreeing and declining",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Agree, concede, or turn something down without giving offence: さんせい どうかん なっとく みとめる ことわる ぎもん.",
      items: [
        { id: "ja-u99l2-sansei", type: "vocab", front: "さんせい", reading: "sansei", meaning: "to agree (to be in favour)", example: { jp: "わたしは その けいかくに さんせいしますが、おかねの ことが しんぱいです。", en: "I agree with that plan, but I'm worried about the money." }, drill: { jp: "さんせいの ひとが おおいです。", en: "There are many people in favour." }, accept: ["to approve", "to be in favour", "agree"], hint: "さんせいする takes に, not を: 「いけんに さんせいします」." },
        { id: "ja-u99l2-dokan", type: "vocab", front: "どうかん", reading: "dōkan", meaning: "the same opinion", example: { jp: "せんせいの いけんに どうかんです。わたしも おなじように かんがえて いました。", en: "I share the teacher's opinion. I had been thinking the same way." }, drill: { jp: "みんな どうかんでした。", en: "Everybody felt the same." }, accept: ["agreement", "I feel the same", "sympathy"], hint: "dō-KAN — the first beat is long. どう is same and かん is a feeling, so it is feeling as another does. さんせい backs a PLAN; どうかん shares a FEELING, which is why it sits with いけん and に." },
        { id: "ja-u99l2-nattoku", type: "vocab", front: "なっとく", reading: "nattoku", meaning: "to be convinced", example: { jp: "りゆうを ゆっくり きいて、やっと なっとくしました。", en: "I listened to the reasons carefully, and was finally convinced." }, drill: { jp: "せつめいを きいて なっとくしました。", en: "I heard the explanation and was convinced." }, accept: ["to accept", "to be satisfied", "to understand and accept"], hint: "なっとく is agreement that arrives after an explanation — you can さんせい without it, and なっとく without さんせい." },
        { id: "ja-u99l2-mitomeru", type: "vocab", front: "みとめる", reading: "mitomeru", meaning: "to admit", example: { jp: "じぶんの まちがえた ところを みとめるのは かんたんでは ありませんが、たいせつな ことです。", en: "Admitting where you went wrong isn't easy, but it matters." }, drill: { jp: "わるかったと みとめる。", en: "I admit I was in the wrong." }, accept: ["to acknowledge", "to recognise", "admit"], hint: "mi-to-ME-ru — four beats. みる, to see, plus める: to see something and let it stand. So it covers admitting a fault AND officially recognising something — 「かいしゃが みとめる」 is approval, not confession." },
        { id: "ja-u99l2-kotowaru", type: "vocab", front: "ことわる", reading: "kotowaru", meaning: "to decline", example: { jp: "その ひは いそがしいので、パーティーの さそいを ことわりました。", en: "I was busy that day, so I turned down the invitation to the party." }, drill: { jp: "さそいを ことわる。", en: "I decline the invitation." }, accept: ["to refuse", "to turn down", "decline"], hint: "ことわる is a polite no — you give a reason. It is not the same as だめです." },
        { id: "ja-u99l2-gimon", type: "vocab", front: "ぎもん", reading: "gimon", meaning: "doubt", example: { jp: "その せつめいには ぎもんが のこりますから、もう いちど ききたいです。", en: "Some doubts remain about that explanation, so I'd like to ask again." }, drill: { jp: "ぎもんが のこります。", en: "A doubt remains." }, accept: ["question", "misgiving", "query"], hint: "gi-MON — two beats, the ん held. ぎ is to doubt and もん is a question. ⚠️ It is the doubt itself, not a question you ask — that is しつもん. 「ぎもんが のこる」 means something still does not add up." },
      ],
    },
    {
      id: "ja-u99l3",
      unit: 99,
      lesson: 3,
      title: "Backing it up",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Support an opinion with a reason and sum it up: こんきょ ようするに じっさいに いっぱんに なぜなら ということは.",
      items: [
        { id: "ja-u99l3-konkyo", type: "vocab", front: "こんきょ", reading: "konkyo", meaning: "grounds", example: { jp: "その はなしには こんきょが ないので、まだ しゅちょうしない ほうが いいです。", en: "There are no grounds for that story, so it's better not to assert it yet." }, drill: { jp: "こんきょの ない はなしです。", en: "It is a story with no grounds." }, accept: ["basis", "evidence", "reason"], hint: "kon-KYO — two beats, the ん held. こん is a root and きょ is to rely on, so it is what a claim stands on. りゆう is why you believe it; こんきょ is the evidence that lets anyone else believe it." },
        { id: "ja-u99l3-yosuruni", type: "vocab", front: "ようするに", reading: "yōsuruni", meaning: "in short", example: { jp: "ようするに、この けいかくでは じかんが かかりすぎると いう ことです。", en: "In short, it means this plan takes too much time." }, drill: { jp: "ようするに じかんが ありません。", en: "In short, there is no time." }, accept: ["to sum up", "basically", "in other words"], hint: "ようするに announces your summary of what came before — it usually closes an argument rather than opening one." },
        { id: "ja-u99l3-jissaini", type: "vocab", front: "じっさいに", reading: "jissaini", meaning: "in reality", example: { jp: "ほんで よんだ ことと、じっさいに やって みた ことは ぜんぜん ちがいました。", en: "What I read in the book and what I actually tried were completely different." }, drill: { jp: "じっさいに やって みました。", en: "I actually tried it." }, accept: ["actually", "in practice", "really"], hint: "jis-sai-NI — small pause after ji. じっさい is the actual state of things, plus the adverb に. It sets reality against what was said or expected, so it very often follows a but." },
        { id: "ja-u99l3-ippanni", type: "vocab", front: "いっぱんに", reading: "ippanni", meaning: "generally", example: { jp: "いっぱんに にほんの なつは あついですが、ことしは すずしいです。", en: "Japanese summers are generally hot, but this year is cool." }, drill: { jp: "いっぱんに ねだんは あがって います。", en: "Prices are generally going up." }, accept: ["in general", "as a rule", "commonly"], hint: "ip-pan-NI — small pause, then the ん held. いっぱん is the general case plus に. It marks a statement as usually true, which is exactly the opening a counter-example answers — expect が next." },
        { id: "ja-u99l3-nazenara", type: "vocab", front: "なぜなら", reading: "nazenara", meaning: "because (the reason is)", example: { jp: "わたしは この みせが すきです。なぜなら、しずかで ゆっくり はなせるからです。", en: "I like this shop, because it's quiet and you can talk without hurrying." }, drill: { jp: "なぜなら じかんが ないからです。", en: "The reason is that there is no time." }, accept: ["the reason is", "since", "for"], hint: "なぜなら starts a new sentence and closes with からです — it is the written cousin of ～から." },
        { id: "ja-u99l3-toiukotowa", type: "vocab", front: "ということは", reading: "toiukotowa", meaning: "which means", example: { jp: "でんきが きえて います。ということは、だれも いえに いないと いう ことです。", en: "The lights are off. Which means nobody is home." }, drill: { jp: "ということは もう おわったのですね。", en: "Which means it is already over." }, accept: ["that means", "so", "in other words"], hint: "to-iu-ko-to-WA — five beats. Literally what that says is: it draws a conclusion from what was just stated. It opens a new sentence, and the one before it is the evidence." },
      ],
    },
    {
      id: "ja-u99l4",
      unit: 99,
      lesson: 4,
      title: "Disagreeing gently",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Disagree without giving offence, and show two sides of a question: むしろ どちらかというと というより かならずしも とはいえ いっぽうで.",
      items: [
        { id: "ja-u99l4-mushiro", type: "vocab", front: "むしろ", reading: "mushiro", meaning: "rather", example: { jp: "この ふくは たかくないです。むしろ、やすい ほうだと おもいます。", en: "These clothes aren't expensive. If anything, I'd say they're on the cheap side." }, drill: { jp: "むしろ わたしが わるいです。", en: "If anything, I am the one at fault." }, accept: ["if anything", "on the contrary", "instead"], hint: "むしろ corrects the direction of a claim, not the fact: not 「not X」 but 「actually the opposite of X」." },
        { id: "ja-u99l4-dochiraka", type: "vocab", front: "どちらかというと", reading: "dochirakatoiuto", meaning: "if anything", example: { jp: "どちらかというと、わたしは そとより いえで やすむ ほうが すきです。", en: "If anything, I prefer resting at home to going out." }, drill: { jp: "どちらかというと さかなが すきです。", en: "If anything, I prefer fish." }, accept: ["rather", "on balance", "if I had to choose"], hint: "do-chi-ra-ka-to-iu-TO — seven beats. Literally if one says which of the two: it softens a preference instead of declaring it. It opens the sentence and usually ends with ほう, the side you lean to." },
        { id: "ja-u99l4-toiuyori", type: "vocab", front: "というより", reading: "toiuyori", meaning: "rather than", example: { jp: "あの ひとは しんせつと いうより、とても しずかな ひとです。", en: "That person is quiet rather than kind, really." }, drill: { jp: "きれいというより かわいいです。", en: "Rather than beautiful, she is cute." }, accept: ["more than", "not so much as", "instead of saying"], hint: "to-iu-YO-ri — five beats. It corrects the word someone reached for: not X so much as Y. Both halves are descriptions of the same thing, which is what separates it from むしろ." },
        { id: "ja-u99l4-kanarazushimo", type: "vocab", front: "かならずしも", reading: "kanarazushimo", meaning: "not necessarily", example: { jp: "ねだんが たかい ものが かならずしも いいとは おもいません。", en: "I don't think expensive things are necessarily good." }, drill: { jp: "かならずしも そうでは ありません。", en: "That is not necessarily so." }, accept: ["not always", "not automatically", "not inevitably"], hint: "かならずしも always ends in a negative — ～とは おもいません, ～では ありません. Meeting it, expect the sentence to turn." },
        { id: "ja-u99l4-towaie", type: "vocab", front: "とはいえ", reading: "towaie", meaning: "that said", example: { jp: "もう はるです。とはいえ、あさは まだ さむいです。", en: "It's spring already. That said, the mornings are still cold." }, drill: { jp: "とはいえ まだ しんぱいです。", en: "That said, I am still worried." }, accept: ["even so", "nevertheless", "having said that"], hint: "to-wa-I-e — four beats. Literally although one says so: it concedes the previous sentence and then pushes back. More formal than でも, and it always starts a new sentence." },
        { id: "ja-u99l4-ippode", type: "vocab", front: "いっぽうで", reading: "ippōde", meaning: "on the other hand", example: { jp: "この しごとは たのしいです。いっぽうで、とても つかれます。", en: "This job is enjoyable. On the other hand, it's very tiring." }, drill: { jp: "いっぽうで もんだいも あります。", en: "On the other hand, there are problems too." }, accept: ["meanwhile", "at the same time", "conversely"], hint: "ip-pō-DE — small pause, then a long pou. いっぽう is one side, plus で. It sets a second, equally true fact beside the first — not a contradiction, which is why も so often follows." },
      ],
    },
  ],
};
