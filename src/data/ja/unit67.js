// Unit 67 — かんじ・せいじ ("Kanji — politics, economy & law") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// First N3 kanji unit. type:"kanji" — recognition/recall test the meaning, production
// traces (KanjiVG strokes required). Readings/examples deliberately hook onto the B1 vocab
// just authored (政府→せいふ, 経済→けいざい, 税金→ぜいきん, 法律→ほうりつ, 賛成→さんせい…) so
// each kanji attaches to a word the learner already met. Naturalness → native review.
export const UNIT67 = {
  id: "ja-u67", lang: "ja", title: "かんじ・せいじ", order: 67, stage: "b1",
  lessons: [
    {
      id: "ja-u67l1", unit: 67, lesson: 1, title: "Government", cefr: "B1", dominantMode: "recall",
      canDo: "Read government kanji: 政 府 治 民 選 挙.",
      items: [
        { id: "ja-u67l1-sei", type: "kanji", front: "政", reading: "sei", meaning: "politics", example: { jp: "政府のしごとです。", en: "It's government work." }, accept: ["government"], hint: "政 = politics. In 政府 (せいふ, government), 政治 (せいじ, politics)." },
        { id: "ja-u67l1-fu", type: "kanji", front: "府", reading: "fu", meaning: "government office", example: { jp: "政府がきめます。", en: "The government decides." }, accept: ["prefecture", "seat of government"], hint: "府 = government office / prefecture. In 政府 (せいふ, government), 大阪府 (Osaka)." },
        { id: "ja-u67l1-chi", type: "kanji", front: "治", reading: "chi", meaning: "govern / cure", example: { jp: "病院で治療します。", en: "I get treatment at the hospital." }, accept: ["heal", "rule"], hint: "治 = govern / cure. In 治療 (ちりょう, treatment), 政治 (せいじ, politics)." },
        { id: "ja-u67l1-min", type: "kanji", front: "民", reading: "min", meaning: "the people", example: { jp: "市民のこえをききます。", en: "I listen to the citizens' voices." }, accept: ["citizens", "folk"], hint: "民 = people / citizens. In 市民 (しみん, citizen), 国民 (こくみん, the nation's people)." },
        { id: "ja-u67l1-sen", type: "kanji", front: "選", reading: "erabu", meaning: "choose", example: { jp: "プレゼントを選びます。", en: "I choose a present." }, accept: ["select", "elect"], hint: "選 = choose. 選びます = choose; 選挙 (せんきょ) = election. The ⻌ (movement) radical." },
        { id: "ja-u67l1-kyo", type: "kanji", front: "挙", reading: "kyo", meaning: "raise / cite", example: { jp: "らいげつ選挙です。", en: "The election is next month." }, accept: ["raise up", "hold (an event)"], hint: "挙 = raise / cite. In 選挙 (せんきょ, election)." },
      ],
    },
    {
      id: "ja-u67l2", unit: 67, lesson: 2, title: "Economy", cefr: "B1", dominantMode: "recall",
      canDo: "Read economy kanji: 経 済 税 費 産 貿.",
      items: [
        { id: "ja-u67l2-kei", type: "kanji", front: "経", reading: "kei", meaning: "manage / elapse", example: { jp: "日本の経済です。", en: "It's Japan's economy." }, accept: ["pass through", "sutra"], hint: "経 = manage / pass through. In 経済 (けいざい, economy), 経験 (けいけん, experience)." },
        { id: "ja-u67l2-sai", type: "kanji", front: "済", reading: "sai", meaning: "settle / finish", example: { jp: "経済のニュースを見ます。", en: "I watch the economic news." }, accept: ["conclude", "relieve"], hint: "済 = settle / finish. In 経済 (けいざい). Also 済む (すむ) — the root of すみません." },
        { id: "ja-u67l2-zei", type: "kanji", front: "税", reading: "zei", meaning: "tax", example: { jp: "税金をはらいます。", en: "I pay taxes." }, accept: ["taxes", "duty"], hint: "税 = tax. In 税金 (ぜいきん, tax), 消費税 (consumption tax)." },
        { id: "ja-u67l2-hi", type: "kanji", front: "費", reading: "hi", meaning: "expense / spend", example: { jp: "旅行の費用です。", en: "It's the trip's cost." }, accept: ["cost", "consume"], hint: "費 = expense / spend. In 費用 (ひよう, cost), 学費 (がくひ, tuition)." },
        { id: "ja-u67l2-san", type: "kanji", front: "産", reading: "san", meaning: "produce", example: { jp: "日本の産業です。", en: "It's a Japanese industry." }, accept: ["give birth", "product"], hint: "産 = produce / give birth. In 産業 (さんぎょう, industry), 生産 (せいさん, production)." },
        { id: "ja-u67l2-bo", type: "kanji", front: "貿", reading: "bō", meaning: "trade", example: { jp: "貿易のしごとです。", en: "It's a trade job." }, accept: ["commerce"], hint: "貿 = trade. In 貿易 (ぼうえき, foreign trade)." },
      ],
    },
    {
      id: "ja-u67l3", unit: 67, lesson: 3, title: "Society & institutions", cefr: "B1", dominantMode: "recall",
      canDo: "Read society kanji: 社 議 制 権 賛 保.",
      items: [
        { id: "ja-u67l3-sha", type: "kanji", front: "社", reading: "sha", meaning: "company / society", example: { jp: "会社にいきます。", en: "I go to the company." }, accept: ["firm", "shrine"], hint: "社 = company / society / shrine. In 会社 (かいしゃ, company), 社会 (しゃかい, society)." },
        { id: "ja-u67l3-gi", type: "kanji", front: "議", reading: "gi", meaning: "deliberate", example: { jp: "きょう会議があります。", en: "There's a meeting today." }, accept: ["discuss", "debate"], hint: "議 = discuss / deliberate. In 会議 (かいぎ, meeting), 議論 (ぎろん, debate)." },
        { id: "ja-u67l3-sei", type: "kanji", front: "制", reading: "sei", meaning: "system / control", example: { jp: "がっこうの制服です。", en: "It's the school uniform." }, accept: ["regulate", "institution"], hint: "制 = system / control. In 制度 (せいど, system), 制服 (せいふく, uniform)." },
        { id: "ja-u67l3-ken", type: "kanji", front: "権", reading: "ken", meaning: "rights / authority", example: { jp: "みんなの権利です。", en: "It's everyone's right." }, accept: ["power", "privilege"], hint: "権 = rights / authority. In 権利 (けんり, rights), 人権 (じんけん, human rights)." },
        { id: "ja-u67l3-san", type: "kanji", front: "賛", reading: "san", meaning: "approve / support", example: { jp: "その意見に賛成です。", en: "I agree with that opinion." }, accept: ["agree", "praise"], hint: "賛 = approve / support. In 賛成 (さんせい, agreement / approval)." },
        { id: "ja-u67l3-ho", type: "kanji", front: "保", reading: "ho", meaning: "keep / protect", example: { jp: "保険にはいります。", en: "I take out insurance." }, accept: ["maintain", "guarantee"], hint: "保 = keep / protect. In 保険 (ほけん, insurance), 保護 (ほご, protection)." },
      ],
    },
    {
      id: "ja-u67l4", unit: 67, lesson: 4, title: "Law & order", cefr: "B1", dominantMode: "recall",
      canDo: "Read law kanji: 法 律 判 護 察 罪.",
      items: [
        { id: "ja-u67l4-ho", type: "kanji", front: "法", reading: "hō", meaning: "law / method", example: { jp: "新しい法律です。", en: "It's a new law." }, accept: ["rule", "way"], hint: "法 = law / method. In 法律 (ほうりつ, law), 方法 (ほうほう, method)." },
        { id: "ja-u67l4-ritsu", type: "kanji", front: "律", reading: "ritsu", meaning: "law / regulate", example: { jp: "法律をまもります。", en: "I obey the law." }, accept: ["rhythm", "rule"], hint: "律 = law / regulate. In 法律 (ほうりつ, law), 規律 (きりつ, discipline)." },
        { id: "ja-u67l4-han", type: "kanji", front: "判", reading: "han", meaning: "judge / decide", example: { jp: "判断がむずかしいです。", en: "The judgment is difficult." }, accept: ["judgment", "seal"], hint: "判 = judge / decide. In 判断 (はんだん, judgment), 裁判 (さいばん, trial)." },
        { id: "ja-u67l4-go", type: "kanji", front: "護", reading: "go", meaning: "protect / defend", example: { jp: "しぜんを保護します。", en: "We protect nature." }, accept: ["guard", "safeguard"], hint: "護 = protect / defend. In 保護 (ほご, protection), 護る (まもる, to guard)." },
        { id: "ja-u67l4-satsu", type: "kanji", front: "察", reading: "satsu", meaning: "perceive / police", example: { jp: "警察をよびます。", en: "I call the police." }, accept: ["guess", "observe"], hint: "察 = perceive / police. In 警察 (けいさつ, police), 観察 (かんさつ, observation)." },
        { id: "ja-u67l4-zai", type: "kanji", front: "罪", reading: "zai", meaning: "crime / guilt", example: { jp: "はんざいはいけません。", en: "Crime is wrong." }, accept: ["sin", "offense"], hint: "罪 = crime / guilt. In 犯罪 (はんざい, crime). Kun: つみ." },
      ],
    },
  ],
};
