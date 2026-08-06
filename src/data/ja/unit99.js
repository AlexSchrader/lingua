// Unit 99 — いけん・さんせい (Opinion and agreement) — B1 / JLPT N3
// Strand B, first B1 thematic unit. Opinion language: stating a view, agreeing and
// declining, backing a claim up, and softening a disagreement.
// B1 examples are two clauses joined by the item being taught (blueprint §1).
// NOTE: おもう is taught here. It is absent from the whole ja corpus below this unit
// (only the kanji 言 carries "say"), and 「～と おもいます」 is the sentence frame every
// other item in this unit needs — so the opinion unit is its correct home.
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
      canDo: "State a view of your own and mark how strongly you hold it: おもう かんがえかた しゅちょうする のべる たしかに そのとおり.",
      items: [
        { id: "ja-u99l1-omoimasu", type: "vocab", front: "おもいます", reading: "omoimasu", meaning: "to think", example: { jp: "わたしは この けいかくが いいと おもいますが、りゆうも せつめいします。", en: "I think this plan is good, and I'll explain why as well." }, accept: ["to feel", "to believe", "think"], hint: "～と おもいます is the frame for any opinion: put the whole thought before と, then おもいます. It softens a claim — 「たかいです」 is a fact, 「たかいと おもいます」 is your view." },
        { id: "ja-u99l1-kangaekata", type: "vocab", front: "かんがえかた", reading: "kangaekata", meaning: "way of thinking", example: { jp: "わたしと ちちは かんがえかたが ちがいますが、はなすと よく わかります。", en: "My father and I think differently, but we understand each other when we talk." }, accept: ["outlook", "point of view", "approach"], hint: "かんがえ (thought) + かた (way of doing) — the same かた as つかいかた (how to use)." },
        { id: "ja-u99l1-shucho", type: "vocab", front: "しゅちょうする", reading: "shuchōsuru", meaning: "to insist", example: { jp: "ともだちは じぶんの いけんを つよく しゅちょうしましたが、わたしは そう おもいません。", en: "My friend insisted strongly on their own opinion, but I don't think so." }, accept: ["to claim", "to assert", "insist"] },
        { id: "ja-u99l1-noberu", type: "vocab", front: "のべる", reading: "noberu", meaning: "to state", example: { jp: "かいぎで じぶんの かんがえを のべてから、みんなの しつもんに こたえました。", en: "I stated my own view at the meeting, then answered everyone's questions." }, accept: ["to express", "to say", "state"], hint: "のべる is the formal cousin of はなします — used for opinions, speeches and reports, not chat." },
        { id: "ja-u99l1-tashikani", type: "vocab", front: "たしかに", reading: "tashikani", meaning: "certainly", example: { jp: "たしかに この みせは やすいですが、あまり おいしくないです。", en: "This shop is certainly cheap, but it isn't very good." }, accept: ["admittedly", "indeed", "it's true that"], hint: "In an argument たしかに concedes a point before you push back: たしかに X ですが、Y。 Hearing it, expect a 「が」 next." },
        { id: "ja-u99l1-sonotori", type: "vocab", front: "そのとおり", reading: "sonotōri", meaning: "exactly so", example: { jp: "はい、そのとおりです。わたしも まえから そう おもって いました。", en: "Yes, exactly. I've thought so for a while too." }, accept: ["that's right", "quite so", "just as you say"] },
      ],
    },
    {
      id: "ja-u99l2",
      unit: 99,
      lesson: 2,
      title: "Agreeing and declining",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Agree, concede, or turn something down without giving offence: さんせいする どうかん なっとくする みとめる ことわる ぎもん.",
      items: [
        { id: "ja-u99l2-sansei", type: "vocab", front: "さんせいする", reading: "sanseisuru", meaning: "to agree", example: { jp: "わたしは その けいかくに さんせいしますが、おかねの ことが しんぱいです。", en: "I agree with that plan, but I'm worried about the money." }, accept: ["to approve", "to be in favour", "agree"], hint: "さんせいする takes に, not を: 「いけんに さんせいします」." },
        { id: "ja-u99l2-dokan", type: "vocab", front: "どうかん", reading: "dōkan", meaning: "the same opinion", example: { jp: "せんせいの いけんに どうかんです。わたしも おなじように かんがえて いました。", en: "I share the teacher's opinion. I had been thinking the same way." }, accept: ["agreement", "I feel the same", "sympathy"] },
        { id: "ja-u99l2-nattoku", type: "vocab", front: "なっとくする", reading: "nattokusuru", meaning: "to be convinced", example: { jp: "りゆうを ゆっくり きいて、やっと なっとくしました。", en: "I listened to the reasons carefully, and was finally convinced." }, accept: ["to accept", "to be satisfied", "to understand and accept"], hint: "なっとく is agreement that arrives after an explanation — you can さんせい without it, and なっとく without さんせい." },
        { id: "ja-u99l2-mitomeru", type: "vocab", front: "みとめる", reading: "mitomeru", meaning: "to admit", example: { jp: "じぶんの まちがえた ところを みとめるのは かんたんでは ありませんが、たいせつな ことです。", en: "Admitting where you went wrong isn't easy, but it matters." }, accept: ["to acknowledge", "to recognise", "admit"] },
        { id: "ja-u99l2-kotowaru", type: "vocab", front: "ことわる", reading: "kotowaru", meaning: "to decline", example: { jp: "パーティーに さそいましたが、その ひは いそがしいので ことわりました。", en: "They invited me to the party, but I turned it down because I'm busy that day." }, accept: ["to refuse", "to turn down", "decline"], hint: "ことわる is a polite no — you give a reason. It is not the same as だめです." },
        { id: "ja-u99l2-gimon", type: "vocab", front: "ぎもん", reading: "gimon", meaning: "doubt", example: { jp: "その せつめいには ぎもんが のこりますから、もう いちど ききたいです。", en: "Some doubts remain about that explanation, so I'd like to ask again." }, accept: ["question", "misgiving", "query"] },
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
        { id: "ja-u99l3-konkyo", type: "vocab", front: "こんきょ", reading: "konkyo", meaning: "grounds", example: { jp: "その はなしには こんきょが ないので、まだ しゅちょうしない ほうが いいです。", en: "There are no grounds for that story, so it's better not to assert it yet." }, accept: ["basis", "evidence", "reason"] },
        { id: "ja-u99l3-yosuruni", type: "vocab", front: "ようするに", reading: "yōsuruni", meaning: "in short", example: { jp: "ようするに、この けいかくでは じかんが かかりすぎると いう ことです。", en: "In short, it means this plan takes too much time." }, accept: ["to sum up", "basically", "in other words"], hint: "ようするに announces your summary of what came before — it usually closes an argument rather than opening one." },
        { id: "ja-u99l3-jissaini", type: "vocab", front: "じっさいに", reading: "jissaini", meaning: "in reality", example: { jp: "ほんで よんだ ことと、じっさいに やって みた ことは ぜんぜん ちがいました。", en: "What I read in the book and what I actually tried were completely different." }, accept: ["actually", "in practice", "really"] },
        { id: "ja-u99l3-ippanni", type: "vocab", front: "いっぱんに", reading: "ippanni", meaning: "generally", example: { jp: "いっぱんに にほんの なつは あついですが、ことしは すずしいです。", en: "Japanese summers are generally hot, but this year is cool." }, accept: ["in general", "as a rule", "commonly"] },
        { id: "ja-u99l3-nazenara", type: "vocab", front: "なぜなら", reading: "nazenara", meaning: "because", example: { jp: "わたしは この みせが すきです。なぜなら、しずかで ゆっくり はなせるからです。", en: "I like this shop, because it's quiet and you can talk without hurrying." }, accept: ["the reason is", "since", "for"], hint: "なぜなら starts a new sentence and closes with からです — it is the written cousin of ～から." },
        { id: "ja-u99l3-toiukotowa", type: "vocab", front: "ということは", reading: "toiukotowa", meaning: "which means", example: { jp: "でんきが きえて います。ということは、だれも いえに いないと いう ことです。", en: "The lights are off. Which means nobody is home." }, accept: ["that means", "so", "in other words"] },
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
        { id: "ja-u99l4-mushiro", type: "vocab", front: "むしろ", reading: "mushiro", meaning: "rather", example: { jp: "この ふくは たかくないです。むしろ、やすい ほうだと おもいます。", en: "These clothes aren't expensive. If anything, I'd say they're on the cheap side." }, accept: ["if anything", "on the contrary", "instead"], hint: "むしろ corrects the direction of a claim, not the fact: not 「not X」 but 「actually the opposite of X」." },
        { id: "ja-u99l4-dochiraka", type: "vocab", front: "どちらかというと", reading: "dochirakatoiuto", meaning: "if anything", example: { jp: "どちらかというと、わたしは そとより いえで やすむ ほうが すきです。", en: "If anything, I prefer resting at home to going out." }, accept: ["rather", "on balance", "if I had to choose"] },
        { id: "ja-u99l4-toiuyori", type: "vocab", front: "というより", reading: "toiuyori", meaning: "rather than", example: { jp: "あの ひとは しんせつと いうより、とても しずかな ひとです。", en: "That person is quiet rather than kind, really." }, accept: ["more than", "not so much as", "instead of saying"] },
        { id: "ja-u99l4-kanarazushimo", type: "vocab", front: "かならずしも", reading: "kanarazushimo", meaning: "not necessarily", example: { jp: "ねだんが たかい ものが かならずしも いいとは おもいません。", en: "I don't think expensive things are necessarily good." }, accept: ["not always", "not automatically"], hint: "かならずしも always ends in a negative — ～とは おもいません, ～では ありません. Meeting it, expect the sentence to turn." },
        { id: "ja-u99l4-towaie", type: "vocab", front: "とはいえ", reading: "towaie", meaning: "that said", example: { jp: "もう はるです。とはいえ、あさは まだ さむいです。", en: "It's spring already. That said, the mornings are still cold." }, accept: ["even so", "nevertheless", "having said that"] },
        { id: "ja-u99l4-ippode", type: "vocab", front: "いっぽうで", reading: "ippōde", meaning: "on the other hand", example: { jp: "この しごとは たのしいです。いっぽうで、とても つかれます。", en: "This job is enjoyable. On the other hand, it's very tiring." }, accept: ["meanwhile", "at the same time", "conversely"] },
      ],
    },
  ],
};
