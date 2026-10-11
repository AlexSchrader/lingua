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
        { id: "ja-u124l1-kako", type: "vocab", front: "かこ", reading: "kako", meaning: "the past", example: { jp: "かこのことはかわりませんが、これからはえらべます。", en: "The past doesn't change, but from now on you can choose." }, drill: { jp: "かこのしゃしんをみました。", en: "I looked at old photographs." }, accept: ["past", "bygone days", "what is past"], hint: "KA-ko — two beats. か is to pass and こ is gone by, so it is what has already gone. げんざい is now and みらい is ahead — the three together name the whole timeline." },
        { id: "ja-u124l1-kaiso", type: "vocab", front: "かいそう", reading: "kaisō", meaning: "reminiscing", example: { jp: "かいそうにふけっていたら、でんわでわれにかえりました。", en: "I was lost in reminiscence until the phone brought me back to myself." }, drill: { jp: "かいそうをたのしみました。", en: "I enjoyed reminiscing." }, accept: ["recollection", "looking back", "reverie"], hint: "kai-SŌ — the second beat is long. かい is to turn back and そう is to think, so it is turning the mind backwards. おもいだす is one act of recall; かいそう is sitting in the memory." },
        { id: "ja-u124l1-imasara", type: "vocab", front: "いまさら", reading: "imasara", meaning: "after all this time", example: { jp: "いまさらあやまられても、きもちはもどりません。", en: "Even apologizing after all this time, my feelings won't come back." }, drill: { jp: "いまさらかえられません。", en: "It cannot be changed at this late stage." }, accept: ["at this late stage", "now of all times", "too late now"], hint: "i-ma-SA-ra — four beats. いま is now and さら is afresh, so it is starting afresh too late. It always carries reproach or regret — never a neutral statement of time." },
        { id: "ja-u124l1-mioboe", type: "vocab", front: "みおぼえ", reading: "mioboe", meaning: "recognizing a face", example: { jp: "みおぼえのあるかおでしたので、こえをかけてみました。", en: "It was a face I recognized, so I tried speaking to them." }, drill: { jp: "みおぼえのないひとでした。", en: "It was a person I did not recognise." }, accept: ["seeming familiar", "having seen before", "a vague recognition"], hint: "mi-o-BO-e — four beats. みる plus おぼえ, memory: a memory held in the eyes. It is used of faces and places, and almost always with ある or ない." },
        { id: "ja-u124l1-najimi", type: "vocab", front: "なじみ", reading: "najimi", meaning: "something familiar", example: { jp: "なじみのみせがしまったので、すこしさびしいです。", en: "The shop I always went to has closed, so I feel a bit sad." }, drill: { jp: "なじみのみちをあるきました。", en: "I walked the familiar street." }, accept: ["a regular haunt", "familiarity", "old acquaintance"], hint: "na-JI-mi — three beats. The noun of なじむ, to grow accustomed. 「なじみの みせ」 is the place where they know your order; it implies time spent, not just liking." },
        { id: "ja-u124l1-kinen", type: "vocab", front: "きねん", reading: "kinen", meaning: "commemoration", example: { jp: "きねんにしゃしんをとって、みんなにおくりました。", en: "We took a photo to commemorate it and sent it to everyone." }, drill: { jp: "きねんにのこしたいです。", en: "I want to keep it as a memento." }, accept: ["memento", "keepsake", "anniversary"], hint: "ki-NEN — two beats, the ん held. き is to record and ねん is a thought, so it is a thought kept on purpose. きねんび is an anniversary and きねんひん a souvenir." },
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
        { id: "ja-u124l2-kioku", type: "vocab", front: "きおく", reading: "kioku", meaning: "memory (what one remembers)", example: { jp: "こどものころのきおくはすくないので、あねによくききます。", en: "I have few memories of childhood, so I often ask my older sister." }, drill: { jp: "きおくがもどりました。", en: "The memory came back." }, accept: ["recollection", "what one remembers", "one's memory"], hint: "ki-O-ku — three beats. き is to record and おく is to remember, so it is the record itself. おもいで is a fond memory you treasure; きおく is the neutral contents of your head." },
        { id: "ja-u124l2-taiken", type: "vocab", front: "たいけん", reading: "taiken", meaning: "first-hand experience", example: { jp: "じしんをたいけんしてから、じゅんびのたいせつさがわかりました。", en: "After experiencing an earthquake first-hand, I understood how important preparation is." }, drill: { jp: "たいけんが たいせつです。", en: "First-hand experience is important." }, accept: ["living through", "hands-on experience", "undergoing"], hint: "tai-KEN — two beats, the ん held. たい is the body and けん is to see, so you went through it yourself. けいけん can be learned on the job; たいけん means it happened TO you." },
        { id: "ja-u124l2-keikensha", type: "vocab", front: "けいけんしゃ", reading: "keikensha", meaning: "someone with experience", example: { jp: "けいけんしゃにきいたので、しごとがはやくおわりました。", en: "I asked someone with experience, so the job finished quickly." }, drill: { jp: "けいけんしゃのはなしはやくにたちます。", en: "An experienced person's account is useful." }, accept: ["experienced person", "an old hand", "veteran"], hint: "kei-ken-SHA — three beats, the ん held. けいけん plus ～しゃ, the person suffix. The same ～しゃ gives きしゃ, a reporter, and しちょうしゃ, a viewer — one suffix, a hundred words." },
        { id: "ja-u124l2-bonyari", type: "vocab", front: "ぼんやり", reading: "bonyari", meaning: "vaguely", example: { jp: "かおはぼんやりおぼえていて、なまえだけがでてきません。", en: "I remember the face dimly, and only the name won't come." }, drill: { jp: "ぼんやりそらをみていました。", en: "I was gazing vaguely at the sky." }, accept: ["dimly", "absent-mindedly", "hazily"], hint: "bon-YA-ri — three beats, the ん held. It covers a blurred memory AND a person staring into space, because both are a lack of focus. あやふや is only about facts." },
        { id: "ja-u124l2-ayafuya", type: "vocab", front: "あやふや", reading: "ayafuya", meaning: "hazy and uncertain", example: { jp: "きおくがあやふやなのでまちがっているかもしれませんが、たしかあのみせでした。", en: "My memory is hazy so I may be wrong, but I'm fairly sure it was that shop." }, drill: { jp: "あやふやなへんじでした。", en: "It was a noncommittal answer." }, accept: ["vague", "noncommittal", "not sure"], hint: "a-ya-FU-ya — four beats. Unreliable because it is not pinned down. あいまい can be deliberate politeness; あやふや suggests the speaker genuinely does not know." },
        { id: "ja-u124l2-ukkari", type: "vocab", front: "うっかり", reading: "ukkari", meaning: "carelessly", example: { jp: "うっかりかさをわすれたので、あめにぬれました。", en: "I carelessly forgot my umbrella, so I got wet in the rain." }, drill: { jp: "うっかりまちがえました。", en: "I made a careless mistake." }, accept: ["absent-mindedly", "by mistake", "without thinking"], hint: "UK-ka-ri — small pause, then ka-ri. It marks an action done with your attention elsewhere, so it excuses as much as it admits. 「うっかりして いました」 is a standard apology." },
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
        { id: "ja-u124l3-kigatsuku", type: "vocab", front: "きがつく", reading: "kigatsuku", meaning: "notice", example: { jp: "まちがいにきがついたときには、もうおそかったです。", en: "By the time I noticed the mistake, it was already too late." }, drill: { jp: "においにきがつく。", en: "I notice the smell." }, accept: ["to realize", "become aware", "spot"], hint: "ki-ga-tsu-KU — four beats. き is awareness and つく is to attach, so the awareness lands on you. What you notice takes に, and it is involuntary — you did not go looking." },
        { id: "ja-u124l3-omoitsuku", type: "vocab", front: "おもいつく", reading: "omoitsuku", meaning: "hit on an idea", example: { jp: "おふろでいいほうほうをおもいついたので、すぐメモをとりました。", en: "I hit on a good method in the bath, so I noted it down at once." }, drill: { jp: "ほうほうをおもいつく。", en: "I hit on a method." }, accept: ["to think of", "come up with", "occur to one"], hint: "o-mo-i-tsu-KU — five beats. おもい is a thought and つく is to arrive, so the idea comes to you. What you think of takes を, and the suddenness is built in." },
        { id: "ja-u124l3-omoikomi", type: "vocab", front: "おもいこみ", reading: "omoikomi", meaning: "a fixed belief", example: { jp: "それはわたしのおもいこみで、じっさいはちがっていました。", en: "That was just something I'd assumed, and the reality was different." }, drill: { jp: "おもいこみがつよいひとです。", en: "He is a man of fixed ideas." }, accept: ["assumption", "getting an idea into one's head", "preconception"], hint: "o-mo-i-ko-MI — five beats. おもう plus こむ, inward: a belief pushed in and left there. It is always wrong in practice — nobody calls a correct belief an おもいこみ." },
        { id: "ja-u124l3-kanchigai", type: "vocab", front: "かんちがい", reading: "kanchigai", meaning: "getting it wrong", example: { jp: "かんちがいしていましたが、だれもおしえてくれませんでした。", en: "I had it wrong, but nobody told me." }, drill: { jp: "かんちがいをあやまりました。", en: "I apologised for the misunderstanding." }, accept: ["misunderstanding", "mix-up", "mistaken idea"], hint: "kan-chi-GA-i — four beats, the ん held. かん is a sense and ちがい is a difference, so your sense of it was off. まちがい is a wrong result; かんちがい is a wrong assumption." },
        { id: "ja-u124l3-futo", type: "vocab", front: "ふと", reading: "futo", meaning: "suddenly (of a thought)", example: { jp: "ふとむかしのともだちをおもいだして、でんわをかけました。", en: "An old friend suddenly came to mind, so I gave them a call." }, drill: { jp: "ふとかおをあげました。", en: "I suddenly looked up." }, accept: ["by chance", "it just struck me", "casually"], hint: "FU-to — two beats. Only for things that happen without intent: a thought arriving, your eyes lifting. きゅうに is any sudden event; ふと is specifically unwilled." },
        { id: "ja-u124l3-omowazu", type: "vocab", front: "おもわず", reading: "omowazu", meaning: "in spite of oneself", example: { jp: "はなしがおもしろくて、おもわずわらってしまいました。", en: "The story was funny, and I laughed in spite of myself." }, drill: { jp: "おもわずこえがでました。", en: "A sound escaped me." }, accept: ["involuntarily", "before I could stop myself", "instinctively"], hint: "o-mo-WA-zu — four beats. おもう plus ～ず, without: without thinking about it. It reports an action your body took before you agreed to it — laughing, shouting, reaching out." },
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
        { id: "ja-u124l4-jotatsu", type: "vocab", front: "じょうたつ", reading: "jōtatsu", meaning: "improvement in a skill", example: { jp: "まいにちれんしゅうすれば、かならずじょうたつします。", en: "If you practise every day, you will certainly improve." }, drill: { jp: "じょうたつがはやいです。", en: "He improves quickly." }, accept: ["getting better", "progress", "making progress"], hint: "jō-TA-tsu — the first beat is long. じょう is upward and たつ is to reach. It is only for SKILLS — a language, an instrument, cooking. A situation improving is かいぜん." },
        { id: "ja-u124l4-gakushu", type: "vocab", front: "がくしゅう", reading: "gakushū", meaning: "study (coursework done)", example: { jp: "まいにちのがくしゅうをつづけて、やっとよめるようになりました。", en: "I kept up the daily study, and at last I became able to read." }, drill: { jp: "がくしゅうのじかんをふやします。", en: "I will increase my study time." }, accept: ["learning", "coursework", "studying"], hint: "ga-ku-SHŪ — the last beat is long. がく is study and しゅう is to practise repeatedly. べんきょう is what you do at your desk; がくしゅう is the word a syllabus uses." },
        { id: "ja-u124l4-shutoku", type: "vocab", front: "しゅうとく", reading: "shūtoku", meaning: "acquiring a skill", example: { jp: "あたらしいぎじゅつをしゅうとくしたので、しごとがはやくなりました。", en: "I acquired a new skill, so my work got faster." }, drill: { jp: "しゅうとくにじかんがかかります。", en: "Acquiring it takes time." }, accept: ["mastering", "picking up", "attainment"], hint: "shū-TO-ku — the first beat is long. しゅう is to gather in and とく is to obtain, so the skill becomes yours to keep. ならう is to be taught; しゅうとく is to have it." },
        { id: "ja-u124l4-seijuku", type: "vocab", front: "せいじゅく", reading: "seijuku", meaning: "maturing", example: { jp: "ぎじゅつがせいじゅくするまで、ながいじかんがかかりました。", en: "It took a long time for the technique to mature." }, drill: { jp: "せいじゅくをまちます。", en: "We wait for it to mature." }, accept: ["ripening", "coming of age", "maturity"], hint: "sei-JU-ku — three beats. せい is to grow and じゅく is to ripen, from fruit. Used of a person, a technology or an industry — anything that needed time rather than effort." },
        { id: "ja-u124l4-shitashimu", type: "vocab", front: "したしむ", reading: "shitashimu", meaning: "grow fond of", example: { jp: "こどものころからおんがくにしたしんでいて、いまもまいにちききます。", en: "I've been close to music since childhood, and I still listen every day." }, drill: { jp: "ほんにしたしむ。", en: "I grow fond of books." }, accept: ["become familiar with", "take to", "get close to"], hint: "shi-ta-shi-MU — four beats. したしい is close or intimate, so this is becoming close to something. What you grow fond of takes に, and it takes years rather than days." },
        { id: "ja-u124l4-tamesu", type: "vocab", front: "ためす", reading: "tamesu", meaning: "try out", example: { jp: "あたらしいほうほうをためしたら、けっかはおなじでした。", en: "I tried out a new method, and the result came out the same." }, drill: { jp: "あたらしいくすりをためす。", en: "I try out the new medicine." }, accept: ["to test", "give it a go", "experiment with"], hint: "ta-ME-su — three beats. What you try takes を. It means testing to find out, so the outcome is genuinely unknown — やってみる is looser and more casual." },
      ],
    },
  ],
};
