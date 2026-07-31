// Unit 197 — ごい・N3・カタカナ・2 ("N3 loanwords 2") — B1 / JLPT N3 katakana loanwords.
// type:"vocab" — recognition/recall test the meaning. The target loanword is written in
// its katakana form; everything else is basic N5/N4 kana, です/ます register, no spaces.
// Multi-word meanings carry an accept synonym so type cards don't reject valid answers.
export const UNIT197 = {
  id: "ja-u197", lang: "ja", title: "ごい・N3・カタカナ・2", order: 197, stage: "b1",
  lessons: [
    {
      id: "ja-u197l1", unit: 197, lesson: 1, title: "N3 loanwords 2·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: サービス (service), ママ (mama), ミス (mistake), メンバー (member), ユーモア (humor), ヨーロッパ (Europe).",
      items: [
        { id: "ja-u197l1-sabisu", type: "vocab", front: "サービス", reading: "sābisu", meaning: "service", example: { jp: "このみせのサービスはいいです。", en: "This shop's service is good." }, accept: ["free", "on the house"], hint: "サービス = service; also means something given free (サービスします = 'it's on the house')." },
        { id: "ja-u197l1-mama", type: "vocab", front: "ママ", reading: "mama", meaning: "mama", example: { jp: "こどもがママをよびます。", en: "The child calls for mama." }, accept: ["mom", "mommy"] },
        { id: "ja-u197l1-misu", type: "vocab", front: "ミス", reading: "misu", meaning: "mistake", example: { jp: "しごとでミスをしました。", en: "I made a mistake at work." }, accept: ["error", "miss"] },
        { id: "ja-u197l1-menba", type: "vocab", front: "メンバー", reading: "menbā", meaning: "member", example: { jp: "クラブのメンバーがふえました。", en: "The club's members increased." }, accept: [] },
        { id: "ja-u197l1-yumoa", type: "vocab", front: "ユーモア", reading: "yūmoa", meaning: "humor", example: { jp: "せんせいはユーモアがあります。", en: "The teacher has a sense of humor." }, accept: ["humour", "wit"] },
        { id: "ja-u197l1-yoroppa", type: "vocab", front: "ヨーロッパ", reading: "yōroppa", meaning: "europe", example: { jp: "なつやすみにヨーロッパへいきます。", en: "I go to Europe over summer vacation." }, accept: [] },
      ],
    },
    {
      id: "ja-u197l2", unit: 197, lesson: 2, title: "N3 loanwords 2·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: ライター (lighter), ラケット (racket), レベル (level), ロケット (rocket), アップ (up), アンケート (survey).",
      items: [
        { id: "ja-u197l2-raita", type: "vocab", front: "ライター", reading: "raitā", meaning: "lighter", example: { jp: "タバコにライターでひをつけます。", en: "I light a cigarette with a lighter." }, accept: ["writer"], hint: "ライター = a lighter (for fire); the same word also means a writer." },
        { id: "ja-u197l2-raketto", type: "vocab", front: "ラケット", reading: "raketto", meaning: "racket", example: { jp: "テニスのラケットをかいました。", en: "I bought a tennis racket." }, accept: ["racquet"] },
        { id: "ja-u197l2-reberu", type: "vocab", front: "レベル", reading: "reberu", meaning: "level", example: { jp: "にほんごのレベルがあがりました。", en: "My Japanese level went up." }, accept: ["standard"] },
        { id: "ja-u197l2-roketto", type: "vocab", front: "ロケット", reading: "roketto", meaning: "rocket", example: { jp: "ロケットがそらへとびます。", en: "The rocket flies into the sky." }, accept: ["locket"] },
        { id: "ja-u197l2-appu", type: "vocab", front: "アップ", reading: "appu", meaning: "up", example: { jp: "テレビのおんりょうをアップします。", en: "I turn up the TV volume." }, accept: ["increase"], hint: "アップ = up / raise (アップする = to raise, increase). Opposite: ダウン." },
        { id: "ja-u197l2-anketo", type: "vocab", front: "アンケート", reading: "ankēto", meaning: "survey", example: { jp: "おきゃくさまにアンケートをおねがいします。", en: "I ask the customers to fill out a survey." }, accept: ["questionnaire"], hint: "アンケート (from French 'enquête') = a survey / questionnaire." },
      ],
    },
    {
      id: "ja-u197l3", unit: 197, lesson: 3, title: "N3 loanwords 2·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: コンテスト (contest), センター (center), ソファー (sofa), タイプライター (typewriter), ダイヤ (diamond), チーム (team).",
      items: [
        { id: "ja-u197l3-kontesuto", type: "vocab", front: "コンテスト", reading: "kontesuto", meaning: "contest", example: { jp: "うたのコンテストにでます。", en: "I enter a singing contest." }, accept: ["competition"] },
        { id: "ja-u197l3-senta", type: "vocab", front: "センター", reading: "sentā", meaning: "center", example: { jp: "しやくしょはまちのセンターにあります。", en: "City hall is in the center of town." }, accept: ["centre"] },
        { id: "ja-u197l3-sofa", type: "vocab", front: "ソファー", reading: "sofā", meaning: "sofa", example: { jp: "ソファーにすわってテレビをみます。", en: "I sit on the sofa and watch TV." }, accept: ["couch"] },
        { id: "ja-u197l3-taipuraita", type: "vocab", front: "タイプライター", reading: "taipuraitā", meaning: "typewriter", example: { jp: "むかしはタイプライターでてがみをかきました。", en: "Long ago I wrote letters with a typewriter." }, accept: [] },
        { id: "ja-u197l3-daiya", type: "vocab", front: "ダイヤ", reading: "daiya", meaning: "diamond", example: { jp: "このゆびわのダイヤはたかいです。", en: "The diamond on this ring is expensive." }, accept: ["railway schedule", "train timetable"], hint: "ダイヤ = a diamond; it also means a railway timetable (short for ダイヤグラム)." },
        { id: "ja-u197l3-chimu", type: "vocab", front: "チーム", reading: "chīmu", meaning: "team", example: { jp: "わたしたちのチームがかちました。", en: "Our team won." }, accept: [] },
      ],
    },
    {
      id: "ja-u197l4", unit: 197, lesson: 4, title: "N3 loanwords 2·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: チャンス (chance), デモ (demo), テント (tent), トップ (top), ドライブ (drive), ドラマ (drama).",
      items: [
        { id: "ja-u197l4-chansu", type: "vocab", front: "チャンス", reading: "chansu", meaning: "chance", example: { jp: "これはいいチャンスです。", en: "This is a good chance." }, accept: ["opportunity"] },
        { id: "ja-u197l4-demo", type: "vocab", front: "デモ", reading: "demo", meaning: "demo", example: { jp: "まちでおおきなデモがありました。", en: "There was a big demonstration in town." }, accept: ["demonstration", "protest"] },
        { id: "ja-u197l4-tento", type: "vocab", front: "テント", reading: "tento", meaning: "tent", example: { jp: "やまでテントをはります。", en: "I pitch a tent in the mountains." }, accept: [] },
        { id: "ja-u197l4-toppu", type: "vocab", front: "トップ", reading: "toppu", meaning: "top", example: { jp: "かれはクラスでトップです。", en: "He is at the top of the class." }, accept: ["first"] },
        { id: "ja-u197l4-doraibu", type: "vocab", front: "ドライブ", reading: "doraibu", meaning: "drive", example: { jp: "にちようびにうみへドライブします。", en: "On Sunday I go for a drive to the sea." }, accept: ["driving"] },
        { id: "ja-u197l4-dorama", type: "vocab", front: "ドラマ", reading: "dorama", meaning: "drama", example: { jp: "よるにテレビのドラマをみます。", en: "I watch a TV drama at night." }, accept: ["TV show"] },
      ],
    },
  ],
};
