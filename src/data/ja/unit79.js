// Unit 79 — かんじ・がいねん ("Kanji — cause, production & value") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 kanji for abstract nouns, many hooking onto known vocab: 結果→けっか, 結婚→けっこん,
// 原因→げんいん, 準備→じゅんび, 価格→かかく, 値段→ねだん, 例→たとえば, 種類→しゅるい…
// KanjiVG strokes required (KANJI_N3). Naturalness → native review.
export const UNIT79 = {
  id: "ja-u79", lang: "ja", title: "かんじ・がいねん", order: 79, stage: "b1",
  lessons: [
    {
      id: "ja-u79l1", unit: 79, lesson: 1, title: "Cause & result", cefr: "B1", dominantMode: "recall",
      canDo: "Read cause kanji: 例 因 原 結 課 案.",
      items: [
        { id: "ja-u79l1-rei", type: "kanji", front: "例", reading: "rei", meaning: "example", example: { jp: "例をあげます。", en: "I give an example." }, accept: ["instance", "custom"], hint: "例 = example. In 例 (れい, example), 例えば (たとえば, for example). 亻 radical." },
        { id: "ja-u79l1-in", type: "kanji", front: "因", reading: "in", meaning: "cause", example: { jp: "じこの原因をしらべます。", en: "I investigate the cause of the accident." }, accept: ["factor"], hint: "因 = cause. In 原因 (げんいん, cause), 原因と結果 (cause and effect)." },
        { id: "ja-u79l1-gen", type: "kanji", front: "原", reading: "gen", meaning: "origin / field", example: { jp: "原因がわかりません。", en: "I don't know the cause." }, accept: ["primary", "plain"], hint: "原 = origin / field. In 原因 (げんいん, cause), 原料 (げんりょう, raw material)." },
        { id: "ja-u79l1-ketsu", type: "kanji", front: "結", reading: "ketsu", meaning: "tie / conclude", example: { jp: "しけんの結果です。", en: "It's the exam result." }, accept: ["bind", "form"], hint: "結 = tie / conclude. In 結果 (けっか, result), 結婚 (けっこん, marriage). 糸 radical." },
        { id: "ja-u79l1-ka", type: "kanji", front: "課", reading: "ka", meaning: "section / lesson", example: { jp: "きょうの課題です。", en: "It's today's assignment." }, accept: ["task", "division"], hint: "課 = section / lesson. In 課題 (かだい, assignment), 第一課 (Lesson 1). 言 radical." },
        { id: "ja-u79l1-an", type: "kanji", front: "案", reading: "an", meaning: "plan / idea", example: { jp: "いい案があります。", en: "I have a good idea." }, accept: ["proposal", "draft"], hint: "案 = plan / idea. In 案内 (あんない, guidance), 提案 ( ていあん, proposal)." },
      ],
    },
    {
      id: "ja-u79l2", unit: 79, lesson: 2, title: "Prepare & build", cefr: "B1", dominantMode: "recall",
      canDo: "Read building kanji: 準 備 設 建 造 構.",
      items: [
        { id: "ja-u79l2-jun", type: "kanji", front: "準", reading: "jun", meaning: "standard / semi-", example: { jp: "りょこうの準備をします。", en: "I prepare for the trip." }, accept: ["level", "prepare"], hint: "準 = standard / semi-. In 準備 (じゅんび, preparation), 標準 (ひょうじゅん, standard)." },
        { id: "ja-u79l2-sonaeru", type: "kanji", front: "備", reading: "sonaeru", meaning: "prepare / equip", example: { jp: "さいがいに備えます。", en: "I prepare for disasters." }, accept: ["provide for"], hint: "備 = prepare / equip. 備える (そなえる). In 準備 (じゅんび), 設備 (せつび, facilities). 亻 radical." },
        { id: "ja-u79l2-setsu", type: "kanji", front: "設", reading: "setsu", meaning: "establish / set up", example: { jp: "あたらしい設備です。", en: "It's new equipment." }, accept: ["found", "install"], hint: "設 = establish / set up. In 設備 (せつび, facilities), 建設 (けんせつ, construction). 言 radical." },
        { id: "ja-u79l2-tateru", type: "kanji", front: "建", reading: "tateru", meaning: "build", example: { jp: "いえを建てます。", en: "I build a house." }, accept: ["erect", "construct"], hint: "建 = build. 建てる (たてる). In 建物 (たてもの, building), 建設 (けんせつ, construction)." },
        { id: "ja-u79l2-zo", type: "kanji", front: "造", reading: "zō", meaning: "make / create", example: { jp: "くるまを製造します。", en: "They manufacture cars." }, accept: ["build", "structure"], hint: "造 = make / create. In 製造 (せいぞう, manufacturing), 構造 (こうぞう, structure). ⻌ radical." },
        { id: "ja-u79l2-ko", type: "kanji", front: "構", reading: "kō", meaning: "structure / construct", example: { jp: "ビルの構造です。", en: "It's the building's structure." }, accept: ["frame", "mind"], hint: "構 = structure / construct. 構う (かまう) = to mind. In 構造 (こうぞう, structure), 結構 (けっこう, fine). 木 radical." },
      ],
    },
    {
      id: "ja-u79l3", unit: 79, lesson: 3, title: "Products & value", cefr: "B1", dominantMode: "recall",
      canDo: "Read product kanji: 製 質 価 値 類 象.",
      items: [
        { id: "ja-u79l3-sei", type: "kanji", front: "製", reading: "sei", meaning: "manufacture", example: { jp: "日本製の車です。", en: "It's a Japanese-made car." }, accept: ["made in", "product"], hint: "製 = manufacture. In 製品 (せいひん, product), 製造 (せいぞう, manufacturing). 衣 (clothing) at the bottom." },
        { id: "ja-u79l3-shitsu", type: "kanji", front: "質", reading: "shitsu", meaning: "quality / nature", example: { jp: "この品の質はいいです。", en: "The quality of this item is good." }, accept: ["substance", "pawn"], hint: "質 = quality / nature. In 品質 (ひんしつ, quality), 質問 (しつもん, question)." },
        { id: "ja-u79l3-ka", type: "kanji", front: "価", reading: "ka", meaning: "value / price", example: { jp: "価格をしらべます。", en: "I check the price." }, accept: ["worth", "cost"], hint: "価 = value / price. In 価格 (かかく, price), 価値 (かち, value). 亻 radical." },
        { id: "ja-u79l3-ne", type: "kanji", front: "値", reading: "ne", meaning: "value / price", example: { jp: "値段が高いです。", en: "The price is high." }, accept: ["worth", "number"], hint: "値 = value / price. 値段 (ねだん) = price. 価値 (かち) = value. 亻 radical." },
        { id: "ja-u79l3-rui", type: "kanji", front: "類", reading: "rui", meaning: "kind / type", example: { jp: "花の種類がおおいです。", en: "There are many kinds of flowers." }, accept: ["category", "sort"], hint: "類 = kind / type. In 種類 (しゅるい, type), 人類 (じんるい, humankind)." },
        { id: "ja-u79l3-sho", type: "kanji", front: "象", reading: "shō", meaning: "phenomenon / elephant", example: { jp: "いい印象です。", en: "It's a good impression." }, accept: ["image", "symbol"], hint: "象 = phenomenon / image. In 印象 (いんしょう, impression), 現象 (げんしょう, phenomenon). Also 象 (ぞう, elephant)." },
      ],
    },
    {
      id: "ja-u79l4", unit: 79, lesson: 4, title: "Gain & difference", cefr: "B1", dominantMode: "recall",
      canDo: "Read abstract kanji: 印 益 損 得 差 混.",
      items: [
        { id: "ja-u79l4-in", type: "kanji", front: "印", reading: "in", meaning: "mark / seal", example: { jp: "たいせつなところに印をつけます。", en: "I mark the important part." }, accept: ["stamp", "sign"], hint: "印 = mark / seal. In 印象 (いんしょう, impression), 目印 (めじるし, landmark)." },
        { id: "ja-u79l4-eki", type: "kanji", front: "益", reading: "eki", meaning: "benefit / profit", example: { jp: "かいしゃの利益です。", en: "It's the company's profit." }, accept: ["gain", "advantage"], hint: "益 = benefit / profit. In 利益 (りえき, profit), 有益 (ゆうえき, beneficial)." },
        { id: "ja-u79l4-son", type: "kanji", front: "損", reading: "son", meaning: "loss / disadvantage", example: { jp: "それは損です。", en: "That's a loss." }, accept: ["damage"], hint: "損 = loss / disadvantage. ⇄ 得. In 損害 (そんがい, damage). 扌 radical." },
        { id: "ja-u79l4-toku", type: "kanji", front: "得", reading: "toku", meaning: "gain / advantage", example: { jp: "セールで得をします。", en: "I come out ahead at the sale." }, accept: ["profit", "obtain"], hint: "得 = gain / advantage. ⇄ 損. 得る (える) = to obtain. 彳 radical." },
        { id: "ja-u79l4-sa", type: "kanji", front: "差", reading: "sa", meaning: "difference", example: { jp: "ねだんに差があります。", en: "There's a difference in price." }, accept: ["gap", "vary"], hint: "差 = difference. In 差 (さ, difference), 時差 (じさ, time difference). 差す (さす) = to hold up." },
        { id: "ja-u79l4-mazeru", type: "kanji", front: "混", reading: "mazeru", meaning: "mix / crowded", example: { jp: "みずと油を混ぜます。", en: "I mix water and oil." }, accept: ["blend", "confuse"], hint: "混 = mix / crowded. 混ぜる (まぜる) = to mix; 混む (こむ) = be crowded. 氵 radical." },
      ],
    },
  ],
};
