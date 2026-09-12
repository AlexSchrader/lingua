// Unit 112 — きもち・くわしく (Emotion, finer shades) — B1 / JLPT N3
// Strand B. A2 taught the broad feelings (うれしい, かなしい, しんぱい); B1 splits them:
// the difference between あせる and あわてる, between しつぼう and おちこむ, and the
// vocabulary for saying how you feel to someone else rather than just naming it.
// ふあん, あんしん, きんちょう, いらいら, がっかり and まんぞく are taught below B1 and appear
// here in examples only. lang/unit/lesson are stamped in src/data/index.js.
export const UNIT112 = {
  id: "ja-u112",
  lang: "ja",
  title: "きもち・くわしく",
  order: 112,
  stage: "b1",
  lessons: [
    {
      id: "ja-u112l1",
      unit: 112,
      lesson: 1,
      title: "Nerves and relief",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe being on edge and calming down again: ほっとする おちつく あせる あわてる そわそわ きになる.",
      items: [
        { id: "ja-u112l1-hottosuru", type: "vocab", front: "ほっとする", reading: "hottosuru", meaning: "to feel relieved", example: { jp: "しけんが おわって、やっと ほっとしました。", en: "The exam finished, and I was finally relieved." }, accept: ["to be relieved", "to breathe easy"], hint: "ほっと is the sound of letting a breath out — the word is the exhale." },
        { id: "ja-u112l1-ochitsuku", type: "vocab", front: "おちつく", reading: "ochitsuku", meaning: "to calm down", example: { jp: "あたたかい おちゃを のんで、すこし おちつきました。", en: "I drank some warm tea and calmed down a little." }, accept: ["to settle", "to compose oneself", "to relax"] },
        { id: "ja-u112l1-aseru", type: "vocab", front: "あせる", reading: "aseru", meaning: "to feel rushed", example: { jp: "じかんが ないと あせりますが、あせると まちがえます。", en: "When there's no time I feel rushed, but rushing makes me get things wrong." }, accept: ["to be impatient", "to panic", "to be in a hurry"], hint: "あせる is the feeling inside; あわてる is the visible flapping about. You can あせる sitting perfectly still." },
        { id: "ja-u112l1-awateru", type: "vocab", front: "あわてる", reading: "awateru", meaning: "to panic", example: { jp: "でんしゃが きたので、あわてて はしりました。", en: "The train came, so I panicked and ran." }, accept: ["to be flustered", "to rush around", "to lose one's head"] },
        { id: "ja-u112l1-sowasowa", type: "vocab", front: "そわそわ", reading: "sowasowa", meaning: "restlessly", example: { jp: "けっかを まって いる あいだ、そわそわして いました。", en: "While waiting for the result I was restless." }, accept: ["fidgety", "on edge", "unsettled"] },
        { id: "ja-u112l1-kininaru", type: "vocab", front: "きになる", reading: "kininaru", meaning: "to be on one's mind", example: { jp: "あの ひとの ことばが きに なって、よる ねられませんでした。", en: "What that person said stayed on my mind, and I couldn't sleep at night." }, accept: ["to bother one", "to worry about", "to catch one's attention"] },
      ],
    },
    {
      id: "ja-u112l2",
      unit: 112,
      lesson: 2,
      title: "When it goes badly",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Separate the shades of feeling bad about something: うんざり しつぼう おちこむ なさけない とまどい いやがる.",
      items: [
        { id: "ja-u112l2-unzari", type: "vocab", front: "うんざり", reading: "unzari", meaning: "fed up", example: { jp: "まいにち おなじ しごとで、すこし うんざりして います。", en: "It's the same work every day, and I'm a bit fed up." }, accept: ["sick of it", "tired of", "weary"] },
        { id: "ja-u112l2-shitsubo", type: "vocab", front: "しつぼう", reading: "shitsubō", meaning: "disappointment", example: { jp: "たのしみに して いた えいがが つまらなくて、しつぼうしました。", en: "The film I'd looked forward to was boring, and I was disappointed." }, accept: ["letdown", "to be disappointed"], hint: "しつぼう is disappointment at a thing; がっかり is the feeling in your body. Both fit here — しつぼう is the more formal." },
        { id: "ja-u112l2-ochikomu", type: "vocab", front: "おちこむ", reading: "ochikomu", meaning: "to feel down", example: { jp: "しけんが だめで おちこみましたが、また がんばります。", en: "I felt down about failing the exam, but I'll try again." }, accept: ["to be depressed", "to be low", "to be discouraged"] },
        { id: "ja-u112l2-nasakenai", type: "vocab", front: "なさけない", reading: "nasakenai", meaning: "pathetic", example: { jp: "かんたんな まちがいを して、じぶんが なさけなく なりました。", en: "I made a simple mistake and felt pathetic." }, drill: { jp: "じぶんが なさけない。", en: "I feel pathetic." }, accept: ["ashamed of oneself", "miserable", "sorry"] },
        { id: "ja-u112l2-tomadoi", type: "vocab", front: "とまどい", reading: "tomadoi", meaning: "bewilderment", example: { jp: "あたらしい しごとの はじめは とまどいが おおきかったですが、いまは なれました。", en: "At the start of the new job the bewilderment was great, but now I've got used to it." }, drill: { jp: "とまどいが おおきかったです。", en: "The bewilderment was great." }, accept: ["confusion", "being at a loss", "puzzlement"] },
        { id: "ja-u112l2-iyagaru", type: "vocab", front: "いやがる", reading: "iyagaru", meaning: "to be unwilling", example: { jp: "こどもが やさいを いやがるので、こまって います。", en: "My child won't touch vegetables, and it's a problem." }, accept: ["to dislike", "to hate doing", "to resist"], hint: "～がる turns your feeling into someone else's visible behaviour: いや (I hate it) → いやがる (they act like they hate it)." },
      ],
    },
    {
      id: "ja-u112l3",
      unit: 112,
      lesson: 3,
      title: "Warm feelings",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you value and admire: ありがたい あこがれ ほこり にこにこ きにいる しみじみ.",
      items: [
        { id: "ja-u112l3-arigatai", type: "vocab", front: "ありがたい", reading: "arigatai", meaning: "grateful for", example: { jp: "ともだちが てつだって くれて、とても ありがたかったです。", en: "My friend helped me, and I was very grateful." }, accept: ["thankful", "welcome", "a blessing"], hint: "ありがとう comes from ありがたい — literally \"this is rare and hard to have\"." },
        { id: "ja-u112l3-akogare", type: "vocab", front: "あこがれ", reading: "akogare", meaning: "longing", example: { jp: "こどもの ときから、せんせいに あこがれて いました。", en: "Ever since I was a child I've looked up to teachers." }, accept: ["admiration", "yearning", "looking up to"] },
        { id: "ja-u112l3-hokori", type: "vocab", front: "ほこり", reading: "hokori", meaning: "pride", example: { jp: "じぶんの しごとに ほこりを もって いますから、まいにち たのしいです。", en: "I take pride in my work, so every day is enjoyable." }, accept: ["being proud", "honour"] },
        { id: "ja-u112l3-nikoniko", type: "vocab", front: "にこにこ", reading: "nikoniko", meaning: "smiling", example: { jp: "あの みせの ひとは いつも にこにこして いて、はなしやすいです。", en: "The person at that shop is always smiling, and easy to talk to." }, accept: ["with a smile", "cheerfully", "beaming"] },
        { id: "ja-u112l3-kiniiru", type: "vocab", front: "きにいる", reading: "kiniiru", meaning: "to take a liking to", example: { jp: "この かばんが きに いったので、かいました。", en: "I took a liking to this bag, so I bought it." }, accept: ["to like", "to be pleased with", "to fancy"] },
        { id: "ja-u112l3-shimijimi", type: "vocab", front: "しみじみ", reading: "shimijimi", meaning: "deeply", example: { jp: "ふるい しゃしんを みて、しみじみ おもいだしました。", en: "I looked at the old photos and remembered it all deeply." }, accept: ["keenly", "with feeling", "thoroughly"] },
      ],
    },
    {
      id: "ja-u112l4",
      unit: 112,
      lesson: 4,
      title: "Saying how you feel",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Tell someone else how you feel, in the right register: もうしわけない はらがたつ てれる しんけん れいせい やるき.",
      items: [
        { id: "ja-u112l4-moshiwakenai", type: "vocab", front: "もうしわけない", reading: "mōshiwakenai", meaning: "terribly sorry", example: { jp: "おくれて しまって、もうしわけありません。", en: "I'm terribly sorry for being late." }, accept: ["I apologise", "inexcusable", "very sorry"], hint: "The formal step above すみません — used to a boss, a customer, or in writing. すみません to a friend is enough." },
        { id: "ja-u112l4-haragatatsu", type: "vocab", front: "はらがたつ", reading: "haragatatsu", meaning: "to get angry", example: { jp: "ともだちが やくそくを わすれたので、はらが たちました。", en: "My friend forgot our promise, so I got angry." }, accept: ["to be annoyed", "to lose one's temper", "to be irritated"] },
        { id: "ja-u112l4-tereru", type: "vocab", front: "てれる", reading: "tereru", meaning: "to feel shy", example: { jp: "せんせいが わたしの なまえを よんだ とき、すこし てれました。", en: "When the teacher called my name I felt a bit shy." }, accept: ["to be embarrassed", "to be bashful", "to blush"] },
        { id: "ja-u112l4-shinken", type: "vocab", front: "しんけん", reading: "shinken", meaning: "serious", example: { jp: "あの ひとは しんけんな かおで はなしを きいて、ゆっくり こたえました。", en: "That person listened with a serious face, then answered slowly." }, accept: ["earnest", "in earnest", "sincere"] },
        { id: "ja-u112l4-reisei", type: "vocab", front: "れいせい", reading: "reisei", meaning: "calm", example: { jp: "もんだいが おきた ときは、れいせいに かんがえる ことが たいせつです。", en: "When a problem comes up, thinking calmly is what matters." }, accept: ["level-headed", "composed", "cool"] },
        { id: "ja-u112l4-yaruki", type: "vocab", front: "やるき", reading: "yaruki", meaning: "motivation", example: { jp: "あたらしい しごとを もらって、やるきが でて きました。", en: "I was given new work, and my motivation started to come back." }, accept: ["drive", "willingness", "enthusiasm"] },
      ],
    },
  ],
};
