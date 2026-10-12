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
        { id: "ja-u112l1-hottosuru", type: "vocab", front: "ほっとする", reading: "hottosuru", meaning: "to feel relieved", example: { jp: "しけんが おわって、やっと ほっとしました。", en: "The exam finished, and I was finally relieved." }, drill: { jp: "でんわを もらって ほっとする。", en: "I feel relieved to get the call." }, accept: ["to be relieved", "to breathe easy", "to be reassured"], hint: "ほっと is the sound of letting a breath out — the word is the exhale." },
        { id: "ja-u112l1-ochitsuku", type: "vocab", front: "おちつく", reading: "ochitsuku", meaning: "to calm down", example: { jp: "あたたかい おちゃを のんで、すこし おちつきました。", en: "I drank some warm tea and calmed down a little." }, drill: { jp: "すわって すこし おちつく。", en: "I sit down and calm a little." }, accept: ["to settle", "to compose oneself", "to relax"], hint: "o-chi-TSU-ku — four beats. おちる, to fall, plus つく, to settle: your feelings coming to rest. It also describes a quiet town or a tasteful room — anything that has stopped moving." },
        { id: "ja-u112l1-aseru", type: "vocab", front: "あせる", reading: "aseru", meaning: "to feel rushed", example: { jp: "じかんが ないと あせりますが、あせると まちがえます。", en: "When there's no time I feel rushed, but rushing makes me get things wrong." }, drill: { jp: "ひとが みて いると あせる。", en: "I feel rushed when people are watching." }, accept: ["to be impatient", "to panic", "to be in a hurry"], hint: "あせる is the feeling inside; あわてる is the visible flapping about. You can あせる sitting perfectly still." },
        { id: "ja-u112l1-awateru", type: "vocab", front: "あわてる", reading: "awateru", meaning: "to panic", example: { jp: "でんしゃが きたので、あわてて はしりました。", en: "The train came, so I panicked and ran." }, drill: { jp: "かぎを わすれて あわてる。", en: "I panic when I forget my key." }, accept: ["to be flustered", "to rush around", "to lose one's head"], hint: "a-wa-TE-ru — four beats. あせる is the inner pressure; あわてる is the visible scramble that follows it. 「あわてないで」 is what you say to someone flapping, not to someone merely worried." },
        { id: "ja-u112l1-sowasowa", type: "vocab", front: "そわそわ", reading: "sowasowa", meaning: "restlessly", example: { jp: "けっかを まって いる あいだ、そわそわして いました。", en: "While waiting for the result I was restless." }, drill: { jp: "しけんの まえは そわそわします。", en: "I get restless before an exam." }, accept: ["fidgety", "on edge", "unsettled"], hint: "so-wa-so-wa — four flat beats, one sound said twice. A sound-word for the body giving the nerves away: shifting, glancing at the door. It takes する, because it is behaviour, not a mood." },
        { id: "ja-u112l1-kininaru", type: "vocab", front: "きになる", reading: "kininaru", meaning: "to be on one's mind", example: { jp: "あの ひとの ことばが きに なって、よる ねられませんでした。", en: "What that person said stayed on my mind, and I couldn't sleep at night." }, drill: { jp: "その はなしが きになる。", en: "That remark is on my mind." }, accept: ["to bother one", "to worry about", "to catch one's attention"], hint: "ki-ni-NA-ru — four beats. き is the feeling and なる is to become: a thing becomes your concern. What bothers you takes が. 「きに する」, with する, is to let it bother you deliberately." },
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
        { id: "ja-u112l2-unzari", type: "vocab", front: "うんざり", reading: "unzari", meaning: "fed up", example: { jp: "まいにち おなじ しごとで、すこし うんざりして います。", en: "It's the same work every day, and I'm a bit fed up." }, drill: { jp: "ながい かいぎに うんざりしました。", en: "I got fed up with the long meeting." }, accept: ["sick of it", "tired of", "weary"], hint: "un-ZA-ri — three beats, the ん held. It is weariness from too much of the same thing, so repetition is always implied. つかれた is tired; うんざり is tired OF something." },
        { id: "ja-u112l2-shitsubo", type: "vocab", front: "しつぼう", reading: "shitsubō", meaning: "disappointment", example: { jp: "たのしみに して いた えいがが つまらなくて、しつぼうしました。", en: "The film I'd looked forward to was boring, and I was disappointed." }, drill: { jp: "けっかに しつぼうしました。", en: "I was disappointed with the result." }, accept: ["letdown", "to be disappointed", "dashed hopes"], hint: "しつぼう is disappointment at a thing; がっかり is the feeling in your body. Both fit here — しつぼう is the more formal." },
        { id: "ja-u112l2-ochikomu", type: "vocab", front: "おちこむ", reading: "ochikomu", meaning: "to feel down", example: { jp: "しけんが だめで おちこみましたが、また がんばります。", en: "I felt down about failing the exam, but I'll try again." }, drill: { jp: "まけて おちこむ。", en: "I feel down after losing." }, accept: ["to be depressed", "to be low", "to be discouraged"], hint: "o-chi-KO-mu — four beats. おちる, to fall, plus こむ, inward: sinking into yourself. It is a temporary slump with a cause, not a settled condition — that would be うつ." },
        { id: "ja-u112l2-nasakenai", type: "vocab", front: "なさけない", reading: "nasakenai", meaning: "pathetic", example: { jp: "かんたんな まちがいを して、じぶんが なさけなく なりました。", en: "I made a simple mistake and felt pathetic." }, drill: { jp: "じぶんが なさけない。", en: "I feel pathetic." }, accept: ["ashamed of oneself", "miserable", "sorry"], hint: "na-sa-ke-NA-i — five beats. なさけ is compassion and ない removes it, so literally beyond sympathy. It is aimed at yourself far more often than at others: shame, not contempt." },
        { id: "ja-u112l2-tomadoi", type: "vocab", front: "とまどい", reading: "tomadoi", meaning: "bewilderment", example: { jp: "あたらしい しごとの はじめは とまどいが おおきかったですが、いまは なれました。", en: "At the start of the new job the bewilderment was great, but now I've got used to it." }, drill: { jp: "とまどいが おおきかったです。", en: "The bewilderment was great." }, accept: ["confusion", "being at a loss", "puzzlement"], hint: "to-ma-DO-i — four beats. とまどう is to hesitate at a door, unsure which way, and this is the noun of it. It is not ignorance — you know the facts and still cannot act." },
        { id: "ja-u112l2-iyagaru", type: "vocab", front: "いやがる", reading: "iyagaru", meaning: "to be unwilling", example: { jp: "こどもが やさいを いやがるので、こまって います。", en: "My child won't touch vegetables, and it's a problem." }, drill: { jp: "くすりを いやがる。", en: "The child refuses the medicine." }, accept: ["to dislike", "to hate doing", "to resist"], hint: "～がる turns your feeling into someone else's visible behaviour: いや (I hate it) → いやがる (they act like they hate it)." },
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
        { id: "ja-u112l3-arigatai", type: "vocab", front: "ありがたい", reading: "arigatai", meaning: "grateful for", example: { jp: "ともだちが てつだって くれて、とても ありがたかったです。", en: "My friend helped me, and I was very grateful." }, drill: { jp: "しんせつな ことばが ありがたい。", en: "A kind word is welcome." }, accept: ["thankful", "welcome", "a blessing"], hint: "ありがとう comes from ありがたい — literally \"this is rare and hard to have\"." },
        { id: "ja-u112l3-akogare", type: "vocab", front: "あこがれ", reading: "akogare", meaning: "longing", example: { jp: "こどもの ときから、せんせいに あこがれて いました。", en: "Ever since I was a child I've looked up to teachers." }, drill: { jp: "あこがれの まちに すんで います。", en: "I live in the town I always longed for." }, accept: ["admiration", "yearning", "looking up to"], hint: "a-ko-GA-re — four beats. The noun of あこがれる: wanting to be like something you look up to, and the distance is part of it. 「あこがれの」 before a noun means dreamed-of." },
        { id: "ja-u112l3-hokori", type: "vocab", front: "ほこり", reading: "hokori", meaning: "pride", example: { jp: "じぶんの しごとに ほこりを もって いますから、まいにち たのしいです。", en: "I take pride in my work, so every day is enjoyable." }, drill: { jp: "ほこりが あります。", en: "There is pride in it." }, accept: ["being proud", "honour", "a sense of pride"], hint: "ho-KO-ri — three beats. You HOLD pride in Japanese: 「ほこりを もつ」. ⚠️ Spelled identically to ほこり meaning dust, which is a very different thing to have in your house." },
        { id: "ja-u112l3-nikoniko", type: "vocab", front: "にこにこ", reading: "nikoniko", meaning: "smiling", example: { jp: "あの みせの ひとは いつも にこにこして いて、はなしやすいです。", en: "The person at that shop is always smiling, and easy to talk to." }, drill: { jp: "こどもが にこにこ わらって います。", en: "The child is smiling away." }, accept: ["with a smile", "cheerfully", "beaming"], hint: "ni-ko-ni-ko — four flat beats, doubled. A sound-word for a steady, warm smile, so it describes a manner rather than a moment. A sudden grin is にやり, which reads as sly." },
        { id: "ja-u112l3-kiniiru", type: "vocab", front: "きにいる", reading: "kiniiru", meaning: "to take a liking to", example: { jp: "この かばんが きに いったので、かいました。", en: "I took a liking to this bag, so I bought it." }, drill: { jp: "この ふくが きにいる。", en: "I take a liking to these clothes." }, accept: ["to like", "to be pleased with", "to fancy"], hint: "ki-ni-I-ru — four beats. Literally it enters your feeling, so the thing liked takes が, not を. 「おきにいり」 is a favourite — the same phrase turned into a noun." },
        { id: "ja-u112l3-shimijimi", type: "vocab", front: "しみじみ", reading: "shimijimi", meaning: "deeply", example: { jp: "ふるい しゃしんを みて、しみじみ おもいだしました。", en: "I looked at the old photos and remembered it all deeply." }, drill: { jp: "しみじみ うれしく なりました。", en: "I felt a deep gladness." }, accept: ["keenly", "with feeling", "thoroughly"], hint: "shi-mi-ji-mi — four flat beats, doubled. It marks a feeling that soaks in slowly rather than striking — looking back, realising. It fits memory and gratitude, never excitement." },
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
        { id: "ja-u112l4-moshiwakenai", type: "vocab", front: "もうしわけない", reading: "mōshiwakenai", meaning: "terribly sorry", example: { jp: "おくれて しまって、もうしわけありません。", en: "I'm terribly sorry for being late." }, drill: { jp: "まちがえて もうしわけない。", en: "I am terribly sorry for the mistake." }, accept: ["I apologise", "inexcusable", "very sorry"], hint: "The formal step above すみません — used to a boss, a customer, or in writing. すみません to a friend is enough." },
        { id: "ja-u112l4-haragatatsu", type: "vocab", front: "はらがたつ", reading: "haragatatsu", meaning: "to get angry (to be irritated)", example: { jp: "ともだちが やくそくを わすれたので、はらが たちました。", en: "My friend forgot our promise, so I got angry." }, drill: { jp: "その たいおうに はらがたつ。", en: "That response makes me angry." }, accept: ["to be annoyed", "to lose one's temper", "to be irritated"], hint: "ha-ra-ga-TA-tsu — five beats. はら is the belly and たつ is to rise, so your stomach rises. It is a phrase, not a verb: what angers you takes に. おこる is the outward display of it." },
        { id: "ja-u112l4-tereru", type: "vocab", front: "てれる", reading: "tereru", meaning: "to feel shy", example: { jp: "せんせいが わたしの なまえを よんだ とき、すこし てれました。", en: "When the teacher called my name I felt a bit shy." }, drill: { jp: "しゃしんを とられて てれる。", en: "I feel shy having my photo taken." }, accept: ["to be embarrassed", "to be bashful", "to blush"], hint: "te-RE-ru — three beats. Self-conscious in a pleasant way — being praised, being noticed. はずかしい covers real embarrassment too; てれる is almost always the harmless kind." },
        { id: "ja-u112l4-shinken", type: "vocab", front: "しんけん", reading: "shinken", meaning: "serious (in earnest)", example: { jp: "あの ひとは しんけんな かおで はなしを きいて、ゆっくり こたえました。", en: "That person listened with a serious face, then answered slowly." }, drill: { jp: "しんけんに れんしゅうして います。", en: "I am practising in earnest." }, accept: ["earnest", "in earnest", "sincere"], hint: "shin-KEN — two beats, the ん held. しん is true and けん is a sword, from fighting with a real blade rather than a wooden one. So it means no longer playing — the stakes are real." },
        { id: "ja-u112l4-reisei", type: "vocab", front: "れいせい", reading: "reisei", meaning: "calm", example: { jp: "もんだいが おきた ときは、れいせいに かんがえる ことが たいせつです。", en: "When a problem comes up, thinking calmly is what matters." }, drill: { jp: "れいせいな たいおうが たいせつです。", en: "A calm response matters." }, accept: ["level-headed", "composed", "cool"], hint: "rei-SEI — two beats, both said as written. れい is cool and せい is quiet, so it is cool-headedness under pressure. おちつく is settling down; れいせい is already being settled when it hits." },
        { id: "ja-u112l4-yaruki", type: "vocab", front: "やるき", reading: "yaruki", meaning: "motivation", example: { jp: "あたらしい しごとを もらって、やるきが でて きました。", en: "I was given new work, and my motivation started to come back." }, drill: { jp: "やるきが あります。", en: "I have the motivation." }, accept: ["drive", "willingness", "enthusiasm"], hint: "ya-ru-KI — three beats. やる, to do, plus き, spirit: the will to actually start. It EXISTS or COMES OUT — 「やるきが でる」 — rather than being something you own." },
      ],
    },
  ],
};
