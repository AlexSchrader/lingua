// Unit 80 — かんじ・ひんど ("Kanji — high-frequency N3 kanji") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// A gathering unit for common N3 kanji not yet covered, many hooking onto known vocab:
// 重要→じゅうよう, 必ず→かならず, 財布→さいふ, 貯金→ちょきん, 値段→段, 記録, 普通→ふつう…
// KanjiVG strokes required (KANJI_N3). Naturalness → native review.
export const UNIT80 = {
  id: "ja-u80", lang: "ja", title: "かんじ・ひんど", order: 80, stage: "b1",
  lessons: [
    {
      id: "ja-u80l1", unit: 80, lesson: 1, title: "Need & existence", cefr: "B1", dominantMode: "recall",
      canDo: "Read essential kanji: 存 与 求 要 必 個.",
      items: [
        { id: "ja-u80l1-son", type: "kanji", front: "存", reading: "son", meaning: "exist", example: { jp: "その村はまだ存在します。", en: "That village still exists." }, accept: ["being", "know"], hint: "存 = exist. In 存在 (そんざい, existence), 保存 (ほぞん, preservation)." },
        { id: "ja-u80l1-ataeru", type: "kanji", front: "与", reading: "ataeru", meaning: "give / grant", example: { jp: "チャンスを与えます。", en: "I give a chance." }, accept: ["provide", "impart"], hint: "与 = give / grant. 与える (あたえる). In 給与 (きゅうよ, salary)." },
        { id: "ja-u80l1-motomeru", type: "kanji", front: "求", reading: "motomeru", meaning: "seek / demand", example: { jp: "たすけを求めます。", en: "I seek help." }, accept: ["request", "want"], hint: "求 = seek / demand. 求める (もとめる). In 要求 (ようきゅう, demand)." },
        { id: "ja-u80l1-yo", type: "kanji", front: "要", reading: "yō", meaning: "need / essential", example: { jp: "重要なかいぎです。", en: "It's an important meeting." }, accept: ["important", "require"], hint: "要 = need / essential. In 重要 (じゅうよう, important), 必要 (ひつよう, necessary)." },
        { id: "ja-u80l1-kanarazu", type: "kanji", front: "必", reading: "kanarazu", meaning: "certainly / must", example: { jp: "必ずきます。", en: "I will definitely come." }, accept: ["without fail", "necessary"], hint: "必 = certainly / must. 必ず (かならず) = without fail. In 必要 (ひつよう, necessary)." },
        { id: "ja-u80l1-ko", type: "kanji", front: "個", reading: "ko", meaning: "individual / (counter)", example: { jp: "りんごを三個かいます。", en: "I buy three apples." }, accept: ["piece", "personal"], hint: "個 = individual / counter for objects. In 個人 (こじん, individual), 三個 (three items). 亻 radical." },
      ],
    },
    {
      id: "ja-u80l2", unit: 80, lesson: 2, title: "Seats, grades & money", cefr: "B1", dominantMode: "recall",
      canDo: "Read everyday kanji: 各 段 席 財 貯 券.",
      items: [
        { id: "ja-u80l2-kaku", type: "kanji", front: "各", reading: "kaku", meaning: "each / every", example: { jp: "各自でべんきょうします。", en: "Each person studies on their own." }, accept: ["various"], hint: "各 = each / every. In 各自 (かくじ, each person), 各国 (かっこく, each country)." },
        { id: "ja-u80l2-dan", type: "kanji", front: "段", reading: "dan", meaning: "step / grade", example: { jp: "値段が高いです。", en: "The price is high." }, accept: ["stage", "level"], hint: "段 = step / grade. In 段階 (だんかい, stage), 値段 (ねだん, price), 階段 (かいだん, stairs)." },
        { id: "ja-u80l2-seki", type: "kanji", front: "席", reading: "seki", meaning: "seat", example: { jp: "でんしゃで席にすわります。", en: "I sit in a seat on the train." }, accept: ["place"], hint: "席 = seat. In 座席 (ざせき, seat), 出席 (しゅっせき, attendance)." },
        { id: "ja-u80l2-zai", type: "kanji", front: "財", reading: "zai", meaning: "wealth / assets", example: { jp: "財布をなくしました。", en: "I lost my wallet." }, accept: ["property", "fortune"], hint: "財 = wealth / assets. In 財布 (さいふ, wallet), 財産 (ざいさん, property). 貝 (money) radical." },
        { id: "ja-u80l2-cho", type: "kanji", front: "貯", reading: "cho", meaning: "save up / store", example: { jp: "まいつき貯金します。", en: "I save money every month." }, accept: ["hoard"], hint: "貯 = save up / store. In 貯金 (ちょきん, savings). 貝 (money) radical." },
        { id: "ja-u80l2-ken", type: "kanji", front: "券", reading: "ken", meaning: "ticket / coupon", example: { jp: "航空券をよやくします。", en: "I book an air ticket." }, accept: ["voucher"], hint: "券 = ticket / coupon. In 航空券 (こうくうけん, air ticket), 定期券 (commuter pass)." },
      ],
    },
    {
      id: "ja-u80l3", unit: 80, lesson: 3, title: "Records", cefr: "B1", dominantMode: "recall",
      canDo: "Read record kanji: 録 記 版 副 略 概.",
      items: [
        { id: "ja-u80l3-roku", type: "kanji", front: "録", reading: "roku", meaning: "record", example: { jp: "きろくをのこします。", en: "I keep a record." }, accept: ["log", "register"], hint: "録 = record. In 記録 (きろく, record), 登録 (とうろく, registration). 金 radical." },
        { id: "ja-u80l3-ki", type: "kanji", front: "記", reading: "ki", meaning: "write down / note", example: { jp: "日記を書きます。", en: "I write a diary." }, accept: ["record", "chronicle"], hint: "記 = write down / note. In 日記 (にっき, diary), 記録 (きろく, record). 言 radical." },
        { id: "ja-u80l3-han", type: "kanji", front: "版", reading: "han", meaning: "edition / print", example: { jp: "あたらしい版がでます。", en: "A new edition comes out." }, accept: ["publishing", "plate"], hint: "版 = edition / print. In 出版 (しゅっぱん, publishing), 初版 (first edition)." },
        { id: "ja-u80l3-fuku", type: "kanji", front: "副", reading: "fuku", meaning: "secondary / vice-", example: { jp: "副しゃちょうです。", en: "He's the vice-president." }, accept: ["assistant", "sub-"], hint: "副 = secondary / vice-. In 副社長 (vice-president), 副作用 (side effect)." },
        { id: "ja-u80l3-ryaku", type: "kanji", front: "略", reading: "ryaku", meaning: "abbreviate / omit", example: { jp: "せつめいを略します。", en: "I omit the explanation." }, accept: ["shorten", "strategy"], hint: "略 = abbreviate / omit. In 省略 (しょうりゃく, omission), 略語 (abbreviation). 田 radical." },
        { id: "ja-u80l3-gai", type: "kanji", front: "概", reading: "gai", meaning: "general / outline", example: { jp: "がいねんをせつめいします。", en: "I explain the concept." }, accept: ["approximate", "roughly"], hint: "概 = general / outline. In 概念 (がいねん, concept), 概要 (がいよう, summary). 木 radical." },
      ],
    },
    {
      id: "ja-u80l4", unit: 80, lesson: 4, title: "Influence & spread", cefr: "B1", dominantMode: "recall",
      canDo: "Read abstract kanji: 傾 響 影 及 普 促.",
      items: [
        { id: "ja-u80l4-katamuku", type: "kanji", front: "傾", reading: "katamuku", meaning: "lean / tend", example: { jp: "ねだんがあがる傾向です。", en: "Prices tend to rise." }, accept: ["incline", "trend"], hint: "傾 = lean / tend. 傾く (かたむく). In 傾向 (けいこう, tendency). 亻 radical." },
        { id: "ja-u80l4-hibiku", type: "kanji", front: "響", reading: "hibiku", meaning: "echo / affect", example: { jp: "おおきい音が響きます。", en: "The loud sound echoes." }, accept: ["resound", "influence"], hint: "響 = echo / affect. 響く (ひびく). In 影響 (えいきょう, influence). 音 (sound) at the bottom." },
        { id: "ja-u80l4-kage", type: "kanji", front: "影", reading: "kage", meaning: "shadow", example: { jp: "木の影がみえます。", en: "I can see the tree's shadow." }, accept: ["silhouette"], hint: "影 = shadow. 影 (かげ). In 影響 (えいきょう, influence)." },
        { id: "ja-u80l4-oyobu", type: "kanji", front: "及", reading: "oyobu", meaning: "reach / extend to", example: { jp: "えいきょうが及びます。", en: "The influence reaches (it)." }, accept: ["amount to", "and"], hint: "及 = reach / extend to. 及ぶ (およぶ). In 普及 (ふきゅう, spread)." },
        { id: "ja-u80l4-fu", type: "kanji", front: "普", reading: "fu", meaning: "universal / general", example: { jp: "普通のねだんです。", en: "It's an ordinary price." }, accept: ["ordinary", "widespread"], hint: "普 = universal / general. In 普通 (ふつう, ordinary), 普及 (ふきゅう, widespread)." },
        { id: "ja-u80l4-unagasu", type: "kanji", front: "促", reading: "unagasu", meaning: "urge / prompt", example: { jp: "へんじを促します。", en: "I prompt a reply." }, accept: ["encourage", "spur"], hint: "促 = urge / prompt. 促す (うながす). In 促進 (そくしん, promotion). 亻 radical." },
      ],
    },
  ],
};
