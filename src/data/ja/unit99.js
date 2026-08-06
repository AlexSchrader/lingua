// Unit 99 — いけん・さんせい ("Opinion and agreement") — B1 / JLPT N3
// First B1 thematic unit. A2 already teaches いけん, りゆう and the basic connectives
// (u30, u75), so this unit is the level above that: the words for *holding* a position
// (しゅちょう, たちば, みかた), *responding* to someone else's (さんせい, はんろん, どうい),
// and *closing* a discussion (けつろん, ていあん, けんとう). Per the B1 spec in
// BUILD-BRIEF-language-blueprint.md, examples are built as two clauses joined by a
// connective wherever the word allows it — the sentence is the lesson, not decoration
// around the word. A minority (a two-turn exchange, a set phrase) are single-clause
// because forcing a second clause onto them would be worse Japanese.
export const UNIT99 = {
  id: "ja-u99",
  lang: "ja",
  title: "いけん・さんせい",
  order: 99,
  stage: "b1",
  lessons: [
    // Lesson 1: holding and stating a position
    {
      id: "ja-u99l1",
      unit: 99,
      lesson: 1,
      title: "Stating a position",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what your position is and where you are looking at it from: しゅちょう のべます かんがえかた みかた たちば ぎろん.",
      items: [
        { id: "ja-u99l1-shucho", type: "vocab", front: "しゅちょう", reading: "shuchō", meaning: "assertion", example: { jp: "この本のしゅちょうはおもしろいですが、少しむずかしいです。", en: "This book's argument is interesting, but it's a little difficult." }, accept: ["claim", "argument", "insistence"], hint: "しゅちょう = the point you are pushing. 主 (main) + 張 (stretch): stretching your main idea out in front of people." },
        { id: "ja-u99l1-nobemasu", type: "vocab", front: "のべます", reading: "nobemasu", meaning: "state", example: { jp: "じぶんのいけんをのべるときは、りゆうもいっしょに話します。", en: "When you state your own opinion, you give the reason along with it." }, accept: ["to state", "express", "say"], hint: "のべます = state / set out — more formal than 言います. Used for opinions and reports, not for chatting." },
        { id: "ja-u99l1-kangaekata", type: "vocab", front: "かんがえかた", reading: "kangaekata", meaning: "way of thinking", example: { jp: "国によってかんがえかたがちがうので、話すとおもしろいです。", en: "Ways of thinking differ from country to country, so it's interesting to talk." }, accept: ["mindset", "approach", "outlook"], hint: "かんがえかた = 考え (thought) + かた (way of doing). The ～かた ending makes any verb into 'the way of ～ing': 話しかた, 読みかた." },
        { id: "ja-u99l1-mikata", type: "vocab", front: "みかた", reading: "mikata", meaning: "viewpoint", example: { jp: "みかたをかえたら、その問題はかんたんになりました。", en: "When I changed my viewpoint, the problem became easy." }, accept: ["point of view", "perspective", "way of seeing"], hint: "みかた = 見 (see) + かた (way): the way you look at something. Careful — the same sound also means 味方 (an ally); context tells you which." },
        { id: "ja-u99l1-tachiba", type: "vocab", front: "たちば", reading: "tachiba", meaning: "standpoint", example: { jp: "先生のたちばもわかりますが、学生のきもちも考えてほしいです。", en: "I understand the teacher's position too, but I want them to consider the students' feelings as well." }, accept: ["position", "situation", "point of view"], hint: "たちば = 立 (stand) + 場 (place): the place you are standing. Both literal ('a difficult position') and social ('as a teacher')." },
        { id: "ja-u99l1-giron", type: "vocab", front: "ぎろん", reading: "giron", meaning: "discussion", example: { jp: "ぎろんが長くなりましたが、いいけつろんは出ませんでした。", en: "The discussion went on a long time, but no good conclusion came out of it." }, accept: ["debate", "argument", "discourse"], hint: "ぎろん = a reasoned discussion or debate, not a fight. ぎろんします = to debate something out." },
      ],
    },
    // Lesson 2: agreeing and disagreeing
    {
      id: "ja-u99l2",
      unit: 99,
      lesson: 2,
      title: "Agreeing and disagreeing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Agree, back someone up, or push back: さんせい はんろん どうい いっち しじ そのとおり.",
      items: [
        { id: "ja-u99l2-sansei", type: "vocab", front: "さんせい", reading: "sansei", meaning: "agreement", example: { jp: "その考えにはさんせいですが、お金がかかりすぎます。", en: "I agree with that idea, but it costs too much." }, accept: ["approval", "support", "being in favor"], hint: "さんせい ⇄ はんたい is the standard yes/no pair in a meeting or a vote. さんせいします = to vote for / be in favor." },
        { id: "ja-u99l2-hanron", type: "vocab", front: "はんろん", reading: "hanron", meaning: "counterargument", example: { jp: "かれのはんろんはつよくて、だれも何も言えませんでした。", en: "His counterargument was so strong that nobody could say anything." }, accept: ["rebuttal", "objection", "reply"], hint: "はんろん = 反 (against) + 論 (argument): the argument back. Stronger and more structured than just saying no." },
        { id: "ja-u99l2-doi", type: "vocab", front: "どうい", reading: "dōi", meaning: "consent", example: { jp: "みんなのどういがもらえたので、あしたから始めます。", en: "We got everyone's consent, so we'll start tomorrow." }, accept: ["agreement", "assent", "approval"], hint: "どうい = 同 (same) + 意 (intention): our intentions are the same. More formal than さんせい — it's the word for signing off on something." },
        { id: "ja-u99l2-itchi", type: "vocab", front: "いっち", reading: "itchi", meaning: "match", example: { jp: "二人のいけんがいっちしたので、ぎろんはすぐにおわりました。", en: "The two people's opinions matched, so the discussion ended quickly." }, accept: ["agreement", "accord", "coincidence"], hint: "いっち = 一 (one) + 致 (reach): two things arriving at one point. Used for opinions matching and for facts lining up." },
        { id: "ja-u99l2-shiji", type: "vocab", front: "しじ", reading: "shiji", meaning: "support", example: { jp: "あたらしいけいかくをしじする人がふえています。", en: "The number of people supporting the new plan is increasing." }, accept: ["backing", "endorsement", "to support"], hint: "しじ = 支 (prop up) + 持 (hold): holding something up. Used for backing a plan, a party or a person — not for physical support." },
        { id: "ja-u99l2-sonotori", type: "vocab", front: "そのとおり", reading: "sonotōri", meaning: "exactly so", example: { jp: "「じかんが足りませんね。」「そのとおりです。」", en: "\"There isn't enough time, is there.\" \"Exactly.\"" }, accept: ["that's right", "precisely", "just so"], hint: "そのとおり = 'just as you said'. とおり (通り) = 'the way / as'. そのとおりです is the natural full agreement in a discussion." },
      ],
    },
    // Lesson 3: accepting and doubting
    {
      id: "ja-u99l3",
      unit: 99,
      lesson: 3,
      title: "Accepting and doubting",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Accept a point, or say honestly that you doubt it: みとめます うたがいます なっとく ぎもん かくしん ひはん.",
      items: [
        { id: "ja-u99l3-mitomemasu", type: "vocab", front: "みとめます", reading: "mitomemasu", meaning: "acknowledge", example: { jp: "じぶんのまちがいをみとめたら、みんなはゆるしてくれました。", en: "When I acknowledged my own mistake, everyone forgave me." }, accept: ["to admit", "recognize", "accept"], hint: "みとめます = admit / recognize. 認 = to see something and grant that it is so — used for admitting a mistake and for officially approving." },
        { id: "ja-u99l3-utagaimasu", type: "vocab", front: "うたがいます", reading: "utagaimasu", meaning: "doubt", example: { jp: "その話はうますぎるので、少しうたがっています。", en: "That story is too good, so I doubt it a little." }, accept: ["to doubt", "suspect", "be suspicious of"], hint: "うたがいます = doubt / suspect. Takes を: 話をうたがう (doubt a story), 人をうたがう (suspect a person)." },
        { id: "ja-u99l3-nattoku", type: "vocab", front: "なっとく", reading: "nattoku", meaning: "being convinced", example: { jp: "せつめいを聞いてから、やっとなっとくしました。", en: "After hearing the explanation, I was finally convinced." }, accept: ["understanding", "acceptance", "satisfaction"], hint: "なっとく = the click when an explanation finally satisfies you. なっとくできません = 'I'm not satisfied with that' — a very common polite pushback." },
        { id: "ja-u99l3-gimon", type: "vocab", front: "ぎもん", reading: "gimon", meaning: "doubt", example: { jp: "その方ほうにはぎもんがありますが、ほかにいい考えもありません。", en: "I have doubts about that method, but I don't have a better idea either." }, accept: ["question", "query", "misgiving"], hint: "ぎもん = 疑 (doubt) + 問 (question): an open question in your mind. ぎもんに思う = to find something questionable." },
        { id: "ja-u99l3-kakushin", type: "vocab", front: "かくしん", reading: "kakushin", meaning: "conviction", example: { jp: "何度もたしかめたので、けっかにはかくしんがあります。", en: "I checked it many times, so I'm confident about the result." }, accept: ["certainty", "confidence", "firm belief"], hint: "かくしん = 確 (certain) + 信 (believe): belief you have checked. Stronger than 思います — you would bet on it." },
        { id: "ja-u99l3-hihan", type: "vocab", front: "ひはん", reading: "hihan", meaning: "criticism", example: { jp: "ひはんされましたが、いい勉強になりました。", en: "I was criticized, but it turned out to be a good lesson." }, accept: ["critique", "to criticize", "censure"], hint: "ひはん = reasoned criticism of an idea or a work. Not the same as ひなん (非難), which is blaming a person." },
      ],
    },
    // Lesson 4: reaching a conclusion
    {
      id: "ja-u99l4",
      unit: 99,
      lesson: 4,
      title: "Reaching a conclusion",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Close a discussion: けつろん ていあん けんとう りかい たしかに まったく.",
      items: [
        { id: "ja-u99l4-ketsuron", type: "vocab", front: "けつろん", reading: "ketsuron", meaning: "conclusion", example: { jp: "みんなで長く話しましたが、けつろんは来週まで待ちます。", en: "We talked for a long time, but we'll wait until next week for a conclusion." }, accept: ["ending", "final decision", "upshot"], hint: "けつろん = 結 (tie up) + 論 (argument): the argument tied off. けつろんから言うと… = 'to start from the conclusion…'" },
        { id: "ja-u99l4-teian", type: "vocab", front: "ていあん", reading: "teian", meaning: "proposal", example: { jp: "あたらしいていあんが出ましたが、時間がなくて話せませんでした。", en: "A new proposal came up, but there was no time to discuss it." }, accept: ["suggestion", "offer", "to propose"], hint: "ていあん = 提 (present) + 案 (plan): a plan you put forward. ていあんします = to propose." },
        { id: "ja-u99l4-kento", type: "vocab", front: "けんとう", reading: "kentō", meaning: "consideration", example: { jp: "そのけんはけんとうしてから、またおへんじします。", en: "I'll consider that matter and then reply to you again." }, accept: ["examination", "review", "to look into"], hint: "けんとう = looking a proposal over properly before deciding. けんとうします is also the polite way to say 'let me think about it' without saying no." },
        { id: "ja-u99l4-rikai", type: "vocab", front: "りかい", reading: "rikai", meaning: "understanding", example: { jp: "せつめいが長かったので、りかいするのに時間がかかりました。", en: "The explanation was long, so it took time to understand it." }, accept: ["comprehension", "to understand", "grasp"], hint: "りかい = 理 (reason) + 解 (unravel): unravelling the logic. Deeper than わかります — りかい is understanding *why*." },
        { id: "ja-u99l4-tashikani", type: "vocab", front: "たしかに", reading: "tashikani", meaning: "certainly", example: { jp: "たしかにねだんは高いですが、ながく使えると思います。", en: "Admittedly the price is high, but I think you can use it for a long time." }, accept: ["admittedly", "indeed", "surely"], hint: "たしかに… が… is the standard 'yes, but' shape: you grant the other person's point first, then make yours. Very useful for polite disagreement." },
        { id: "ja-u99l4-mattaku", type: "vocab", front: "まったく", reading: "mattaku", meaning: "entirely", example: { jp: "その話はまったく知りませんでしたが、とてもおどろきました。", en: "I didn't know about that at all, and I was very surprised." }, accept: ["completely", "totally", "at all"], hint: "まったく = completely. With a negative it means 'not at all': まったくわかりません. On its own, まったく… is also a muttered 'honestly…'" },
      ],
    },
  ],
};
