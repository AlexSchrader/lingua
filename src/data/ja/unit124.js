// JA Unit 124 — けいけん・きおく (Experience and memory) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js (plain-form verb headwords).
//
// Rewritten against block 1's authored content. The first draft of this unit lost
// ten of its twenty-four items to block 1 in one go — かこ's whole time-adverb set
// (いぜん とうじ かつて げんざい), なんとなく, そうぞう, せいちょう, ようやく,
// ふりかえる, and つい (which collided by READING with block 1's 追, not by front).
// That is what the unit's slot is worth once a lower-numbered block has taken the
// obvious half of it, so this version goes at the topic from the side block 1 did
// not: not "when did it happen" but "how reliable is the memory" — あやふや,
// みおぼえ, おもいこみ, かんちがい. That is the more useful half at B1 anyway,
// because it is the vocabulary for admitting you might be wrong.
export const UNIT124 = {
  id: "ja-u124",
  lang: "ja",
  title: "けいけん・きおく",
  order: 124,
  stage: "b1",
  lessons: [
    {
      id: "ja-u124l1",
      unit: 124,
      lesson: 1,
      title: "Looking back",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about something from your past and how familiar it still feels: かこ かいそう いまさら みおぼえ なじみ きねん.",
      items: [
        { id: "ja-u124l1-kako", type: "vocab", front: "かこ", reading: "kako", meaning: "the past", example: { jp: "かこのことはかわりませんが、これからはえらべます。", en: "The past doesn't change, but from now on you can choose." }, accept: ["past", "bygone days"] },
        { id: "ja-u124l1-kaiso", type: "vocab", front: "かいそう", reading: "kaisō", meaning: "reminiscing", example: { jp: "かいそうにふけっていたら、でんわでわれにかえりました。", en: "I was lost in reminiscence until the phone brought me back to myself." }, accept: ["recollection", "looking back", "reverie"] },
        { id: "ja-u124l1-imasara", type: "vocab", front: "いまさら", reading: "imasara", meaning: "after all this time", example: { jp: "いまさらあやまられても、きもちはもどりません。", en: "Even apologizing after all this time, my feelings won't come back." }, accept: ["at this late stage", "now of all times", "too late now"] },
        { id: "ja-u124l1-mioboe", type: "vocab", front: "みおぼえ", reading: "mioboe", meaning: "recognizing a face", example: { jp: "みおぼえのあるかおでしたので、こえをかけてみました。", en: "It was a face I recognized, so I tried speaking to them." }, accept: ["seeming familiar", "having seen before"] },
        { id: "ja-u124l1-najimi", type: "vocab", front: "なじみ", reading: "najimi", meaning: "something familiar", example: { jp: "なじみのみせがしまったので、すこしさびしいです。", en: "The shop I always went to has closed, so I feel a bit sad." }, accept: ["a regular haunt", "familiarity", "old acquaintance"] },
        { id: "ja-u124l1-kinen", type: "vocab", front: "きねん", reading: "kinen", meaning: "commemoration", example: { jp: "きねんにしゃしんをとって、みんなにおくりました。", en: "We took a photo to commemorate it and sent it to everyone." }, accept: ["memento", "keepsake", "anniversary"] },
      ],
    },
    {
      id: "ja-u124l2",
      unit: 124,
      lesson: 2,
      title: "How well you remember",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how reliable your memory of something is, instead of just claiming it: きおく たいけん けいけんしゃ ぼんやり あやふや うっかり.",
      items: [
        { id: "ja-u124l2-kioku", type: "vocab", front: "きおく", reading: "kioku", meaning: "memory", example: { jp: "こどものころのきおくはすくないので、あねによくききます。", en: "I have few memories of childhood, so I often ask my older sister." }, accept: ["recollection", "what one remembers"] },
        { id: "ja-u124l2-taiken", type: "vocab", front: "たいけん", reading: "taiken", meaning: "first-hand experience", example: { jp: "じしんをたいけんしてから、じゅんびのたいせつさがわかりました。", en: "After experiencing an earthquake first-hand, I understood how important preparation is." }, drill: { jp: "たいけんが たいせつです。", en: "First-hand experience is important." }, accept: ["living through", "hands-on experience", "undergoing"] },
        { id: "ja-u124l2-keikensha", type: "vocab", front: "けいけんしゃ", reading: "keikensha", meaning: "someone with experience", example: { jp: "けいけんしゃにきいたので、しごとがはやくおわりました。", en: "I asked someone with experience, so the job finished quickly." }, accept: ["experienced person", "an old hand", "veteran"] },
        { id: "ja-u124l2-bonyari", type: "vocab", front: "ぼんやり", reading: "bonyari", meaning: "vaguely", example: { jp: "かおはぼんやりおぼえていて、なまえだけがでてきません。", en: "I remember the face dimly, and only the name won't come." }, accept: ["dimly", "absent-mindedly", "hazily"] },
        { id: "ja-u124l2-ayafuya", type: "vocab", front: "あやふや", reading: "ayafuya", meaning: "hazy and uncertain", example: { jp: "きおくがあやふやなのでまちがっているかもしれませんが、たしかあのみせでした。", en: "My memory is hazy so I may be wrong, but I'm fairly sure it was that shop." }, accept: ["vague", "noncommittal", "not sure"] },
        { id: "ja-u124l2-ukkari", type: "vocab", front: "うっかり", reading: "ukkari", meaning: "carelessly", example: { jp: "うっかりかさをわすれたので、あめにぬれました。", en: "I carelessly forgot my umbrella, so I got wet in the rain." }, accept: ["absent-mindedly", "by mistake", "without thinking"] },
      ],
    },
    {
      id: "ja-u124l3",
      unit: 124,
      lesson: 3,
      title: "Noticing — and getting it wrong",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that something occurred to you, and admit when you had it wrong: きがつく おもいつく おもいこみ かんちがい ふと おもわず.",
      items: [
        { id: "ja-u124l3-kigatsuku", type: "vocab", front: "きがつく", reading: "kigatsuku", meaning: "notice", example: { jp: "まちがいにきがついたときには、もうおそかったです。", en: "By the time I noticed the mistake, it was already too late." }, accept: ["to realize", "become aware", "spot"] },
        { id: "ja-u124l3-omoitsuku", type: "vocab", front: "おもいつく", reading: "omoitsuku", meaning: "hit on an idea", example: { jp: "おふろでいいほうほうをおもいついたので、すぐメモをとりました。", en: "I hit on a good method in the bath, so I noted it down at once." }, drill: { jp: "ほうほうをおもいつく。", en: "I hit on a method." }, accept: ["to think of", "come up with", "occur to one"] },
        { id: "ja-u124l3-omoikomi", type: "vocab", front: "おもいこみ", reading: "omoikomi", meaning: "a fixed belief", example: { jp: "それはわたしのおもいこみで、じっさいはちがっていました。", en: "That was just something I'd assumed, and the reality was different." }, accept: ["assumption", "getting an idea into one's head", "preconception"] },
        { id: "ja-u124l3-kanchigai", type: "vocab", front: "かんちがい", reading: "kanchigai", meaning: "getting it wrong", example: { jp: "かんちがいしていましたが、だれもおしえてくれませんでした。", en: "I had it wrong, but nobody told me." }, accept: ["misunderstanding", "mix-up", "mistaken idea"] },
        { id: "ja-u124l3-futo", type: "vocab", front: "ふと", reading: "futo", meaning: "suddenly (of a thought)", example: { jp: "ふとむかしのともだちをおもいだして、でんわをかけました。", en: "An old friend suddenly came to mind, so I gave them a call." }, accept: ["by chance", "it just struck me", "casually"] },
        { id: "ja-u124l3-omowazu", type: "vocab", front: "おもわず", reading: "omowazu", meaning: "in spite of oneself", example: { jp: "はなしがおもしろくて、おもわずわらってしまいました。", en: "The story was funny, and I laughed in spite of myself." }, accept: ["involuntarily", "before I could stop myself", "instinctively"] },
      ],
    },
    {
      id: "ja-u124l4",
      unit: 124,
      lesson: 4,
      title: "Getting better at it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe getting good at something over time, and growing comfortable with it: じょうたつ がくしゅう しゅうとく せいじゅく したしむ ためす.",
      items: [
        { id: "ja-u124l4-jotatsu", type: "vocab", front: "じょうたつ", reading: "jōtatsu", meaning: "improvement in a skill", example: { jp: "まいにちれんしゅうすれば、かならずじょうたつします。", en: "If you practise every day, you will certainly improve." }, accept: ["getting better", "progress", "making progress"] },
        { id: "ja-u124l4-gakushu", type: "vocab", front: "がくしゅう", reading: "gakushū", meaning: "study", example: { jp: "まいにちのがくしゅうをつづけて、やっとよめるようになりました。", en: "I kept up the daily study, and at last I became able to read." }, accept: ["learning", "coursework"] },
        { id: "ja-u124l4-shutoku", type: "vocab", front: "しゅうとく", reading: "shūtoku", meaning: "acquiring a skill", example: { jp: "あたらしいぎじゅつをしゅうとくしたので、しごとがはやくなりました。", en: "I acquired a new skill, so my work got faster." }, accept: ["mastering", "picking up", "attainment"] },
        { id: "ja-u124l4-seijuku", type: "vocab", front: "せいじゅく", reading: "seijuku", meaning: "maturing", example: { jp: "ぎじゅつがせいじゅくするまで、ながいじかんがかかりました。", en: "It took a long time for the technique to mature." }, accept: ["ripening", "coming of age", "maturity"] },
        { id: "ja-u124l4-shitashimu", type: "vocab", front: "したしむ", reading: "shitashimu", meaning: "grow fond of", example: { jp: "こどものころからおんがくにしたしんでいて、いまもまいにちききます。", en: "I've been close to music since childhood, and I still listen every day." }, accept: ["become familiar with", "take to", "get close to"] },
        { id: "ja-u124l4-tamesu", type: "vocab", front: "ためす", reading: "tamesu", meaning: "try out", example: { jp: "あたらしいほうほうをためしたら、けっかはおなじでした。", en: "I tried out a new method, and the result came out the same." }, accept: ["to test", "give it a go", "experiment with"] },
      ],
    },
  ],
};
