// Unit 105 — かんじ・N3・3 ("Kanji N3·3") — B1 / JLPT N3 — third N3 kanji unit.
// 24 high-frequency N3 kanji (freq ~155–201), six per lesson. Recognition/recall of
// the glyph's meaning; production is stroke tracing. Examples are written in kana
// (house style) around the kanji's most common everyday word, using only N5/N4 vocab.
// id + reading copied verbatim from the pre-validated N3 slice.
export const UNIT105 = {
  id: "ja-u105", lang: "ja", title: "かんじ・N3・3", order: 105, stage: "b1",
  lessons: [
    {
      id: "ja-u105l1", unit: 105, lesson: 1, title: "N3 kanji 3·1", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 指 (finger), 権 (rights), 支 (support), 産 (products), 点 (point), 報 (report).",
      items: [
        { id: "ja-u105l1-shi2", type: "kanji", front: "指", reading: "shi", meaning: "finger", example: { jp: "ゆびがすこしいたいです。", en: "My finger hurts a little." }, accept: ["point", "indicate"], hint: "ゆび = finger." },
        { id: "ja-u105l1-ken", type: "kanji", front: "権", reading: "ken", meaning: "rights", example: { jp: "こどもにもけんりがあります。", en: "Children have rights too." }, accept: ["authority", "power"], hint: "けんり = rights." },
        { id: "ja-u105l1-shi3", type: "kanji", front: "支", reading: "shi", meaning: "support", example: { jp: "はたらいてかぞくをささえます。", en: "I work and support my family." }, accept: ["branch", "sustain"], hint: "ささえる = to support." },
        { id: "ja-u105l1-san", type: "kanji", front: "産", reading: "san", meaning: "products", example: { jp: "にほんのくるまのさんぎょうはゆうめいです。", en: "Japan's car industry is famous." }, accept: ["industry", "give birth"], hint: "さんぎょう = industry." },
        { id: "ja-u105l1-ten", type: "kanji", front: "点", reading: "ten", meaning: "point", example: { jp: "テストでいいてんをとりました。", en: "I got a good score on the test." }, accept: ["score", "spot", "mark"], hint: "てんすう = score, points." },
        { id: "ja-u105l1-ho2", type: "kanji", front: "報", reading: "hō", meaning: "report", example: { jp: "インターネットでじょうほうをさがします。", en: "I look up information on the internet." }, accept: ["news", "information"], hint: "じょうほう = information." },
      ],
    },
    {
      id: "ja-u105l2", unit: 105, lesson: 2, title: "N3 kanji 3·2", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 済 (settle), 活 (life), 原 (original), 共 (together), 得 (gain), 解 (solve).",
      items: [
        { id: "ja-u105l2-sai2", type: "kanji", front: "済", reading: "sai", meaning: "settle", example: { jp: "けいざいのニュースをまいにちよみます。", en: "I read economic news every day." }, accept: ["economy", "finish"], hint: "けいざい = economy." },
        { id: "ja-u105l2-katsu", type: "kanji", front: "活", reading: "katsu", meaning: "life", example: { jp: "まいにちのせいかつはたのしいです。", en: "My daily life is fun." }, accept: ["lively", "active"], hint: "せいかつ = daily life." },
        { id: "ja-u105l2-gen2", type: "kanji", front: "原", reading: "gen", meaning: "original", example: { jp: "じこのげんいんをしらべます。", en: "I investigate the cause of the accident." }, accept: ["cause", "field"], hint: "げんいん = cause." },
        { id: "ja-u105l2-kyo", type: "kanji", front: "共", reading: "kyō", meaning: "together", example: { jp: "わたしたちにはきょうつうのしゅみがあります。", en: "We have a hobby in common." }, accept: ["common", "both"], hint: "きょうつう = in common." },
        { id: "ja-u105l2-toku", type: "kanji", front: "得", reading: "toku", meaning: "gain", example: { jp: "わたしはすうがくがとくいです。", en: "I'm good at math." }, accept: ["profit", "advantage"], hint: "とくい = one's strong point." },
        { id: "ja-u105l2-kai2", type: "kanji", front: "解", reading: "kai", meaning: "solve", example: { jp: "せんせいのせつめいがよくりかいできました。", en: "I understood the teacher's explanation well." }, accept: ["understand", "unravel"], hint: "りかい = understanding." },
      ],
    },
    {
      id: "ja-u105l3", unit: 105, lesson: 3, title: "N3 kanji 3·3", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 交 (intersect), 資 (assets), 予 (beforehand), 向 (facing), 際 (occasion), 勝 (victory).",
      items: [
        { id: "ja-u105l3-ko", type: "kanji", front: "交", reading: "kō", meaning: "intersect", example: { jp: "このまちはこうつうがべんりです。", en: "This town has convenient transport." }, accept: ["traffic", "exchange", "mingle"], hint: "こうつう = traffic, transport." },
        { id: "ja-u105l3-shi4", type: "kanji", front: "資", reading: "shi", meaning: "assets", example: { jp: "かいぎのしりょうをよういします。", en: "I'll prepare the materials for the meeting." }, accept: ["resources", "materials", "capital"], hint: "しりょう = materials, documents." },
        { id: "ja-u105l3-yo2", type: "kanji", front: "予", reading: "yo", meaning: "beforehand", example: { jp: "あしたのよていをおしえてください。", en: "Please tell me tomorrow's plans." }, accept: ["in advance", "previous"], hint: "よてい = plan, schedule." },
        { id: "ja-u105l3-ko2", type: "kanji", front: "向", reading: "kō", meaning: "facing", example: { jp: "えきのほうこうがわかりません。", en: "I don't know the direction of the station." }, accept: ["toward", "direction"], hint: "ほうこう = direction." },
        { id: "ja-u105l3-sai3", type: "kanji", front: "際", reading: "sai", meaning: "occasion", example: { jp: "このがっこうにはこくさいのがくせいがおおいです。", en: "This school has many international students." }, accept: ["international", "time", "edge"], hint: "こくさい = international." },
        { id: "ja-u105l3-sho2", type: "kanji", front: "勝", reading: "shō", meaning: "victory", example: { jp: "きのうのしあいにかちました。", en: "We won yesterday's match." }, accept: ["win", "prevail"], hint: "かつ = to win; しょうり = victory." },
      ],
    },
    {
      id: "ja-u105l4", unit: 105, lesson: 4, title: "N3 kanji 3·4", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 面 (face), 告 (announce), 反 (anti-), 判 (judgement), 認 (recognize), 参 (participate).",
      items: [
        { id: "ja-u105l4-men", type: "kanji", front: "面", reading: "men", meaning: "face", example: { jp: "あしたかいしゃのめんせつがあります。", en: "I have a company interview tomorrow." }, accept: ["surface", "mask", "aspect"], hint: "めんせつ = interview." },
        { id: "ja-u105l4-koku", type: "kanji", front: "告", reading: "koku", meaning: "announce", example: { jp: "テレビのこうこくをよくみます。", en: "I often see the ads on TV." }, accept: ["tell", "report", "notify"], hint: "こうこく = advertisement." },
        { id: "ja-u105l4-han", type: "kanji", front: "反", reading: "han", meaning: "anti-", example: { jp: "わたしはそのいけんにはんたいです。", en: "I'm against that opinion." }, accept: ["opposite", "against"], hint: "はんたい = opposite, opposition." },
        { id: "ja-u105l4-han2", type: "kanji", front: "判", reading: "han", meaning: "judgement", example: { jp: "じぶんではんだんできません。", en: "I can't decide it by myself." }, accept: ["decision", "stamp"], hint: "はんだん = judgement, decision." },
        { id: "ja-u105l4-nin", type: "kanji", front: "認", reading: "nin", meaning: "recognize", example: { jp: "よやくのじかんをかくにんします。", en: "I'll confirm the reservation time." }, accept: ["confirm", "acknowledge", "admit"], hint: "かくにん = confirmation." },
        { id: "ja-u105l4-san2", type: "kanji", front: "参", reading: "san", meaning: "participate", example: { jp: "あしたのパーティーにさんかします。", en: "I'll take part in tomorrow's party." }, accept: ["visit", "go"], hint: "さんか = participation." },
      ],
    },
  ],
};
