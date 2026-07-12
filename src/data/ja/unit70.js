// Unit 70 — かんじ・しごと ("Kanji — work, education & communication") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 kanji hooking onto the B1 vocab: 就職→しゅうしょく, 給料→きゅうりょう, 責任→せきにん,
// 努力→どりょく, 成功→せいこう, 失敗→しっぱい, 教育→きょういく, 卒業→そつぎょう, 専門→せんもん,
// 連絡→れんらく… KanjiVG strokes required (KANJI_N3). Naturalness → native review.
export const UNIT70 = {
  id: "ja-u70", lang: "ja", title: "かんじ・しごと", order: 70, stage: "b1",
  lessons: [
    {
      id: "ja-u70l1", unit: 70, lesson: 1, title: "Work", cefr: "B1", dominantMode: "recall",
      canDo: "Read work kanji: 職 就 給 料 責 任.",
      items: [
        { id: "ja-u70l1-shoku", type: "kanji", front: "職", reading: "shoku", meaning: "job / occupation", example: { jp: "しゅうしょくの職業です。", en: "It's a career job." }, accept: ["employment", "post"], hint: "職 = job / occupation. In 職業 (しょくぎょう, occupation), 就職 (しゅうしょく, finding a job)." },
        { id: "ja-u70l1-shu", type: "kanji", front: "就", reading: "shū", meaning: "take up (a post)", example: { jp: "らいねん就職します。", en: "I'll get a job next year." }, accept: ["settle into", "concerning"], hint: "就 = take up (a post). In 就職 (しゅうしょく, finding a job)." },
        { id: "ja-u70l1-kyu", type: "kanji", front: "給", reading: "kyū", meaning: "salary / supply", example: { jp: "給料にまんぞくです。", en: "I'm satisfied with my salary." }, accept: ["provide", "pay"], hint: "給 = salary / supply. In 給料 (きゅうりょう, salary), 給食 (school lunch)." },
        { id: "ja-u70l1-ryo", type: "kanji", front: "料", reading: "ryō", meaning: "fee / materials", example: { jp: "給料をもらいます。", en: "I receive my salary." }, accept: ["charge", "ingredients"], hint: "料 = fee / materials. In 給料 (きゅうりょう, salary), 料理 (りょうり, cooking), 料金 (fee)." },
        { id: "ja-u70l1-seki", type: "kanji", front: "責", reading: "seki", meaning: "responsibility / blame", example: { jp: "責任があります。", en: "I have a responsibility." }, accept: ["duty", "censure"], hint: "責 = responsibility / blame. In 責任 (せきにん, responsibility)." },
        { id: "ja-u70l1-nin", type: "kanji", front: "任", reading: "nin", meaning: "duty / entrust", example: { jp: "しごとを任せます。", en: "I entrust the work to someone." }, accept: ["appoint", "leave to"], hint: "任 = duty / entrust. In 責任 (せきにん, responsibility), 任せる (まかせる, to entrust)." },
      ],
    },
    {
      id: "ja-u70l2", unit: 70, lesson: 2, title: "Effort & outcome", cefr: "B1", dominantMode: "recall",
      canDo: "Read effort kanji: 努 成 功 失 敗 績.",
      items: [
        { id: "ja-u70l2-do", type: "kanji", front: "努", reading: "do", meaning: "make an effort", example: { jp: "まいにち努力します。", en: "I make an effort every day." }, accept: ["strive", "endeavor"], hint: "努 = make an effort. In 努力 (どりょく, effort). 努める (つとめる, to strive)." },
        { id: "ja-u70l2-sei", type: "kanji", front: "成", reading: "sei", meaning: "become / achieve", example: { jp: "しごとが成功しました。", en: "The work was a success." }, accept: ["form", "grow"], hint: "成 = become / achieve. In 成功 (せいこう, success), 成長 (せいちょう, growth), 賛成 (さんせい, agreement)." },
        { id: "ja-u70l2-ko", type: "kanji", front: "功", reading: "kō", meaning: "achievement / merit", example: { jp: "せいこうの功です。", en: "It's the merit of success." }, accept: ["success", "credit"], hint: "功 = achievement / merit. In 成功 (せいこう, success), 功績 (こうせき, achievements)." },
        { id: "ja-u70l2-shitsu", type: "kanji", front: "失", reading: "shitsu", meaning: "lose / mistake", example: { jp: "失敗はこわくないです。", en: "Failure isn't scary." }, accept: ["fault", "miss"], hint: "失 = lose / mistake. In 失敗 (しっぱい, failure), 失礼 (しつれい, rudeness)." },
        { id: "ja-u70l2-hai", type: "kanji", front: "敗", reading: "hai", meaning: "defeat / failure", example: { jp: "しあいに敗れました。", en: "I lost the match." }, accept: ["lose", "be beaten"], hint: "敗 = defeat / failure. In 失敗 (しっぱい, failure), 勝敗 (しょうはい, win-or-lose)." },
        { id: "ja-u70l2-seki", type: "kanji", front: "績", reading: "seki", meaning: "achievements / results", example: { jp: "せいせきがいいです。", en: "My grades are good." }, accept: ["merit", "record"], hint: "績 = achievements / results. In 成績 (せいせき, grades), 業績 (ぎょうせき, performance)." },
      ],
    },
    {
      id: "ja-u70l3", unit: 70, lesson: 3, title: "Education", cefr: "B1", dominantMode: "recall",
      canDo: "Read education kanji: 教 授 卒 専 門 講.",
      items: [
        { id: "ja-u70l3-oshieru", type: "kanji", front: "教", reading: "oshieru", meaning: "teach", example: { jp: "えいごを教えます。", en: "I teach English." }, accept: ["instruct", "religion"], hint: "教 = teach. 教えます = teach. In 教育 (きょういく, education), 教室 (きょうしつ, classroom)." },
        { id: "ja-u70l3-ju", type: "kanji", front: "授", reading: "ju", meaning: "grant / instruct", example: { jp: "きょう授業があります。", en: "There's a class today." }, accept: ["confer", "teach"], hint: "授 = grant / instruct. In 授業 (じゅぎょう, class), 教授 (きょうじゅ, professor)." },
        { id: "ja-u70l3-sotsu", type: "kanji", front: "卒", reading: "sotsu", meaning: "graduate", example: { jp: "がっこうを卒業します。", en: "I graduate from school." }, accept: ["finish school"], hint: "卒 = graduate. In 卒業 (そつぎょう, graduation)." },
        { id: "ja-u70l3-sen", type: "kanji", front: "専", reading: "sen", meaning: "exclusive / specialize", example: { jp: "わたしの専門です。", en: "It's my specialty." }, accept: ["special", "sole"], hint: "専 = exclusive / specialize. In 専門 (せんもん, specialty), 専用 (exclusive use)." },
        { id: "ja-u70l3-mon", type: "kanji", front: "門", reading: "mon", meaning: "gate", example: { jp: "だいがくの専門です。", en: "It's a university specialty." }, accept: ["gateway", "field"], hint: "門 = gate. In 専門 (せんもん, specialty), 入門 (にゅうもん, introduction). Kun: かど." },
        { id: "ja-u70l3-ko", type: "kanji", front: "講", reading: "kō", meaning: "lecture", example: { jp: "だいがくの講義です。", en: "It's a university lecture." }, accept: ["study", "speak on"], hint: "講 = lecture. In 講義 (こうぎ, lecture), 講演 (こうえん, talk)." },
      ],
    },
    {
      id: "ja-u70l4", unit: 70, lesson: 4, title: "Communication", cefr: "B1", dominantMode: "recall",
      canDo: "Read communication kanji: 義 訳 連 絡 告 招.",
      items: [
        { id: "ja-u70l4-gi", type: "kanji", front: "義", reading: "gi", meaning: "meaning / duty", example: { jp: "だいがくの講義です。", en: "It's a university lecture." }, accept: ["righteousness", "justice"], hint: "義 = meaning / duty. In 講義 (こうぎ, lecture), 意義 (いぎ, significance), 主義 (-ism)." },
        { id: "ja-u70l4-yaku", type: "kanji", front: "訳", reading: "yaku", meaning: "translate / reason", example: { jp: "えいごの通訳をします。", en: "I interpret English." }, accept: ["interpretation", "reason"], hint: "訳 = translate / reason. In 通訳 (つうやく, interpreting), 翻訳 (translation). Kun: わけ (reason)." },
        { id: "ja-u70l4-ren", type: "kanji", front: "連", reading: "ren", meaning: "connect / take along", example: { jp: "ともだちに連絡します。", en: "I contact my friend." }, accept: ["link", "series"], hint: "連 = connect / take along. In 連絡 (れんらく, contact), 連続 (れんぞく, in a row). ⻌ radical." },
        { id: "ja-u70l4-raku", type: "kanji", front: "絡", reading: "raku", meaning: "connect / entwine", example: { jp: "でんわで連絡します。", en: "I contact them by phone." }, accept: ["get in touch", "coil"], hint: "絡 = connect / entwine. In 連絡 (れんらく, contact). 糸 (thread) radical." },
        { id: "ja-u70l4-koku", type: "kanji", front: "告", reading: "koku", meaning: "announce / tell", example: { jp: "けっかを報告します。", en: "I report the results." }, accept: ["notify", "inform"], hint: "告 = announce / tell. In 報告 (ほうこく, report), 広告 (こうこく, advertisement)." },
        { id: "ja-u70l4-sho", type: "kanji", front: "招", reading: "shō", meaning: "invite / beckon", example: { jp: "ともだちを招待します。", en: "I invite a friend." }, accept: ["summon", "cause"], hint: "招 = invite / beckon. In 招待 (しょうたい, invitation). 招く (まねく, to invite)." },
      ],
    },
  ],
};
