// JA Unit 124 — けいけん・きおく (Experience and memory) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js.
//
// Lesson 3 is deliberately a cluster of near-synonymous adverbs (ふと・おもわず・
// つい) rather than six unrelated words: at B1 the difference between "it crossed
// my mind", "before I could stop myself" and "I gave in and did it anyway" is a
// real distinction a learner cannot make yet, and teaching them apart makes them
// feel interchangeable. Their example sentences carry the contrast.
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
      canDo: "Place something in the past and contrast it with how things are now: かこ いぜん とうじ かつて げんざい ふりかえります.",
      items: [
        { id: "ja-u124l1-kako", type: "vocab", front: "かこ", reading: "kako", meaning: "the past", example: { jp: "かこのことはかわりませんが、これからはえらべます。", en: "The past doesn't change, but from now on you can choose." }, accept: ["past", "bygone days"] },
        { id: "ja-u124l1-izen", type: "vocab", front: "いぜん", reading: "izen", meaning: "formerly", example: { jp: "いぜんはここにみせがありましたが、いまはこうえんです。", en: "There used to be a shop here, but now it's a park." }, accept: ["previously", "before", "in the past"] },
        { id: "ja-u124l1-toji", type: "vocab", front: "とうじ", reading: "tōji", meaning: "at that time", example: { jp: "とうじはがくせいでしたので、おかねがありませんでした。", en: "I was a student at that time, so I had no money." }, accept: ["back then", "in those days"] },
        { id: "ja-u124l1-katsute", type: "vocab", front: "かつて", reading: "katsute", meaning: "once", example: { jp: "かつてこのまちはしずかでしたが、いまはにぎやかです。", en: "This town was once quiet, but now it's lively." }, accept: ["formerly", "at one time", "in days gone by"] },
        { id: "ja-u124l1-genzai", type: "vocab", front: "げんざい", reading: "genzai", meaning: "the present", example: { jp: "げんざいはとうきょうにすんでいますが、らいねんはひっこします。", en: "At present I live in Tokyo, but next year I'm moving." }, accept: ["now", "currently", "at present"] },
        { id: "ja-u124l1-furikaerimasu", type: "vocab", front: "ふりかえります", reading: "furikaerimasu", meaning: "look back on", example: { jp: "いちねんをふりかえると、いろいろなことがありました。", en: "Looking back on the year, a lot of things happened." }, accept: ["to reflect on", "review", "turn and look back"] },
      ],
    },
    {
      id: "ja-u124l2",
      unit: 124,
      lesson: 2,
      title: "What you remember",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how clearly you remember something, and admit when you don't: きおく たいけん けいけんしゃ ぼんやり なんとなく うっかり.",
      items: [
        { id: "ja-u124l2-kioku", type: "vocab", front: "きおく", reading: "kioku", meaning: "memory", example: { jp: "こどものころのきおくはすくないですが、なつやすみはおぼえています。", en: "I have few memories of childhood, but I remember the summer holidays." }, accept: ["recollection", "what one remembers"] },
        { id: "ja-u124l2-taiken", type: "vocab", front: "たいけん", reading: "taiken", meaning: "first-hand experience", example: { jp: "じしんをたいけんしてから、じゅんびのたいせつさがわかりました。", en: "After experiencing an earthquake first-hand, I understood how important preparation is." }, accept: ["living through", "hands-on experience", "undergoing"] },
        { id: "ja-u124l2-keikensha", type: "vocab", front: "けいけんしゃ", reading: "keikensha", meaning: "someone with experience", example: { jp: "けいけんしゃにきいたので、しごとがはやくおわりました。", en: "I asked someone with experience, so the job finished quickly." }, accept: ["experienced person", "an old hand", "veteran"] },
        { id: "ja-u124l2-bonyari", type: "vocab", front: "ぼんやり", reading: "bonyari", meaning: "vaguely", example: { jp: "かおはぼんやりおぼえていますが、なまえがでてきません。", en: "I vaguely remember the face, but the name won't come to me." }, accept: ["dimly", "absent-mindedly", "hazily"] },
        { id: "ja-u124l2-nantonaku", type: "vocab", front: "なんとなく", reading: "nantonaku", meaning: "somehow", example: { jp: "なんとなくおかしいとおもいましたが、りゆうはいえません。", en: "Somehow I thought it was odd, but I can't say why." }, accept: ["for some reason", "vaguely", "without knowing why"] },
        { id: "ja-u124l2-ukkari", type: "vocab", front: "うっかり", reading: "ukkari", meaning: "carelessly", example: { jp: "うっかりかさをわすれたので、あめにぬれました。", en: "I carelessly forgot my umbrella, so I got wet in the rain." }, accept: ["absent-mindedly", "by mistake", "without thinking"] },
      ],
    },
    {
      id: "ja-u124l3",
      unit: 124,
      lesson: 3,
      title: "Noticing and hitting on",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that something occurred to you, and separate 'it crossed my mind' from 'I couldn't help it': きがつきます おもいつきます そうぞう ふと おもわず つい.",
      items: [
        { id: "ja-u124l3-kigatsukimasu", type: "vocab", front: "きがつきます", reading: "kigatsukimasu", meaning: "notice", example: { jp: "まちがいにきがつきましたが、もうおそかったです。", en: "I noticed the mistake, but it was already too late." }, accept: ["to realize", "become aware", "spot"] },
        { id: "ja-u124l3-omoitsukimasu", type: "vocab", front: "おもいつきます", reading: "omoitsukimasu", meaning: "hit on an idea", example: { jp: "おふろでいいほうほうをおもいつきましたが、あさにはわすれていました。", en: "I hit on a good method in the bath, but by morning I'd forgotten it." }, accept: ["to think of", "come up with", "occur to one"] },
        { id: "ja-u124l3-sozo", type: "vocab", front: "そうぞう", reading: "sōzō", meaning: "imagination", example: { jp: "そうぞうしていたよりひろかったので、おどろきました。", en: "It was wider than I had imagined, so I was surprised." }, accept: ["imagining", "picturing", "supposition"] },
        { id: "ja-u124l3-futo", type: "vocab", front: "ふと", reading: "futo", meaning: "suddenly (of a thought)", example: { jp: "ふとむかしのともだちをおもいだして、でんわをかけました。", en: "An old friend suddenly came to mind, so I gave them a call." }, accept: ["by chance", "it just struck me", "casually"] },
        { id: "ja-u124l3-omowazu", type: "vocab", front: "おもわず", reading: "omowazu", meaning: "in spite of oneself", example: { jp: "はなしがおもしろくて、おもわずわらってしまいました。", en: "The story was funny, and I laughed in spite of myself." }, accept: ["involuntarily", "before I could stop myself", "instinctively"] },
        { id: "ja-u124l3-tsui", type: "vocab", front: "つい", reading: "tsui", meaning: "can't help doing", example: { jp: "やすかったので、ついたくさんかってしまいました。", en: "It was cheap, so I couldn't help buying a lot." }, accept: ["carelessly", "in spite of myself", "unintentionally"] },
      ],
    },
    {
      id: "ja-u124l4",
      unit: 124,
      lesson: 4,
      title: "Getting better at it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe improving at something over time, and mark the point it finally clicked: じょうたつ せいちょう がくしゅう ためします きねん ようやく.",
      items: [
        { id: "ja-u124l4-jotatsu", type: "vocab", front: "じょうたつ", reading: "jōtatsu", meaning: "improvement in a skill", example: { jp: "まいにちれんしゅうすれば、かならずじょうたつします。", en: "If you practise every day, you will certainly improve." }, accept: ["getting better", "progress", "making progress"] },
        { id: "ja-u124l4-seicho", type: "vocab", front: "せいちょう", reading: "seichō", meaning: "growth", example: { jp: "こどものせいちょうははやくて、ふくがすぐちいさくなります。", en: "Children's growth is fast, so their clothes get small right away." }, accept: ["development", "growing up", "maturing"] },
        { id: "ja-u124l4-gakushu", type: "vocab", front: "がくしゅう", reading: "gakushū", meaning: "study", example: { jp: "まいにちのがくしゅうはたいへんですが、やめたくありません。", en: "Studying every day is hard, but I don't want to stop." }, accept: ["learning", "coursework"] },
        { id: "ja-u124l4-tameshimasu", type: "vocab", front: "ためします", reading: "tameshimasu", meaning: "try out", example: { jp: "あたらしいほうほうをためしましたが、けっかはおなじでした。", en: "I tried out a new method, but the result was the same." }, accept: ["to test", "give it a go", "experiment with"] },
        { id: "ja-u124l4-kinen", type: "vocab", front: "きねん", reading: "kinen", meaning: "commemoration", example: { jp: "きねんにしゃしんをとりましたが、うまくうつりませんでした。", en: "We took a photo to commemorate it, but it didn't come out well." }, accept: ["memento", "keepsake", "anniversary"] },
        { id: "ja-u124l4-yoyaku", type: "vocab", front: "ようやく", reading: "yōyaku", meaning: "finally", example: { jp: "ながいあいだれんしゅうして、ようやくおよげるようになりました。", en: "I practised for a long time, and finally I became able to swim." }, accept: ["at last", "after all that", "eventually"] },
      ],
    },
  ],
};
