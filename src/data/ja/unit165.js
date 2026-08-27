// Unit 165 — しょうばい・こうしょう (Business and negotiation) — B2 / JLPT N2
// Strand B. B1's u110 covered working inside a company; this is the company facing
// outward — a deal's terms, the negotiation that sets them, what the business earns,
// and where the money sits.
// Mixed script per the u156 header; all kanji verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT165 = {
  id: "ja-u165",
  lang: "ja",
  title: "しょうばい・こうしょう",
  order: 165,
  stage: "b2",
  lessons: [
    {
      id: "ja-u165l1",
      unit: 165,
      lesson: 1,
      title: "Terms of a deal",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read the terms of a transaction: しじょう たんか のうき しはらい けいやくしょ ざんだか.",
      items: [
        { id: "ja-u165l1-shijo", type: "vocab", front: "しじょう", reading: "shijō", meaning: "a market", example: { jp: "しじょうが 小さいので、ねだんが 下がりにくいです。", en: "The market is small, so prices don't fall easily." }, accept: ["marketplace", "the trade"] },
        { id: "ja-u165l1-tanka", type: "vocab", front: "たんか", reading: "tanka", meaning: "unit price", example: { jp: "たんかは 安いですが、数が 多いので 高く なります。", en: "The unit price is low, but the quantity makes it expensive." }, accept: ["price per unit", "rate"] },
        { id: "ja-u165l1-noki", type: "vocab", front: "のうき", reading: "nōki", meaning: "delivery date", example: { jp: "のうきに まにあわないので、先に れんらくしました。", en: "We won't make the delivery date, so I got in touch first." }, accept: ["deadline", "due date", "lead time"] },
        { id: "ja-u165l1-shiharai", type: "vocab", front: "しはらい", reading: "shiharai", meaning: "payment", example: { jp: "しはらいは 月の 終わりに まとめて します。", en: "Payment is made all at once at the end of the month." }, accept: ["to pay", "settlement", "disbursement"] },
        { id: "ja-u165l1-keiyakusho", type: "vocab", front: "けいやくしょ", reading: "keiyakusho", meaning: "a written contract", example: { jp: "けいやくしょを よく 読まずに 名前を 書いては いけません。", en: "You mustn't sign without reading the contract carefully." }, accept: ["agreement document", "the papers"] },
        { id: "ja-u165l1-zandaka", type: "vocab", front: "ざんだか", reading: "zandaka", meaning: "the balance", example: { jp: "ざんだかを 見てから、買うか どうか 決めます。", en: "I'll check the balance, then decide whether to buy." }, accept: ["remaining amount", "account balance"] },
      ],
    },
    {
      id: "ja-u165l2",
      unit: 165,
      lesson: 2,
      title: "At the table",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Run a negotiation to agreement or breakdown: こうしょう だきょう じょうほ ごうい けつれつ ゆうし.",
      items: [
        { id: "ja-u165l2-kosho", type: "vocab", front: "こうしょう", reading: "kōshō", meaning: "negotiation", example: { jp: "こうしょうは 半年 つづきましたが、まだ 終わりません。", en: "The negotiation has gone on six months and still isn't over." }, accept: ["talks", "to negotiate", "bargaining"] },
        { id: "ja-u165l2-dakyo", type: "vocab", front: "だきょう", reading: "dakyō", meaning: "a compromise", example: { jp: "だきょうしなければ、話は 前に 進みません。", en: "Without compromise the talks won't move forward." }, accept: ["to meet halfway", "concession"], hint: "だきょう is the OUTCOME both sides settle for; じょうほ is the ground one side gives up to get there." },
        { id: "ja-u165l2-joho", type: "vocab", front: "じょうほ", reading: "jōho", meaning: "a concession", example: { jp: "こちらが 少し じょうほすれば、ごういできるでしょう。", en: "If we concede a little, we should be able to reach agreement." }, accept: ["to give ground", "yielding"] },
        { id: "ja-u165l2-goi", type: "vocab", front: "ごうい", reading: "gōi", meaning: "agreement", example: { jp: "ながい 話しあいの あと、ようやく ごういに いたりました。", en: "After long discussion we finally reached agreement." }, accept: ["consensus", "accord", "to agree"] },
        { id: "ja-u165l2-ketsuretsu", type: "vocab", front: "けつれつ", reading: "ketsuretsu", meaning: "a breakdown", example: { jp: "こうしょうが けつれつして、両方が こまって います。", en: "The negotiation broke down and both sides are stuck." }, accept: ["collapse", "rupture", "falling through"] },
        { id: "ja-u165l2-yushi", type: "vocab", front: "ゆうし", reading: "yūshi", meaning: "financing", example: { jp: "銀行の ゆうしが 決まって、工事が 始まりました。", en: "The bank financing came through and the work began." }, accept: ["a loan", "funding", "credit"] },
      ],
    },
    {
      id: "ja-u165l3",
      unit: 165,
      lesson: 3,
      title: "What the business earns",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about takings, stock and what is left over: りじゅん うりあげ ざいこ きょうきゅう ぶんぱい けっさん.",
      items: [
        { id: "ja-u165l3-rijun", type: "vocab", front: "りじゅん", reading: "rijun", meaning: "profit", example: { jp: "うりあげは 大きいのに、りじゅんは 少ないです。", en: "Sales are large, yet the profit is small." }, accept: ["margin", "gain", "return"], hint: "うりあげ is everything that came in; りじゅん is what survives after costs. Confusing them is how a busy shop goes under." },
        { id: "ja-u165l3-uriage", type: "vocab", front: "うりあげ", reading: "uriage", meaning: "sales takings", example: { jp: "夏の うりあげが、一年で いちばん 多いです。", en: "Summer takings are the largest of the year." }, accept: ["turnover", "revenue", "receipts"] },
        { id: "ja-u165l3-zaiko", type: "vocab", front: "ざいこ", reading: "zaiko", meaning: "stock on hand", example: { jp: "ざいこが 多すぎると、場所も お金も むだに なります。", en: "Too much stock wastes both space and money." }, accept: ["inventory", "goods in hand"] },
        { id: "ja-u165l3-kyokyu", type: "vocab", front: "きょうきゅう", reading: "kyōkyū", meaning: "supply", example: { jp: "きょうきゅうが 足りないので、ねだんが 上がって います。", en: "Supply is short, so prices are rising." }, accept: ["provision", "to supply"] },
        { id: "ja-u165l3-bunpai", type: "vocab", front: "ぶんぱい", reading: "bunpai", meaning: "distribution", example: { jp: "りじゅんの ぶんぱいで、会社の 中が もめました。", en: "There was trouble inside the company over how profits were divided." }, accept: ["allocation", "sharing out", "to distribute"] },
        { id: "ja-u165l3-kessan", type: "vocab", front: "けっさん", reading: "kessan", meaning: "closing the accounts", example: { jp: "けっさんの 時期は、どの 会社も いそがしいです。", en: "Every company is busy at the accounting close." }, accept: ["financial results", "settlement of accounts"] },
      ],
    },
    {
      id: "ja-u165l4",
      unit: 165,
      lesson: 4,
      title: "Where the money sits",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a company's money position: しゅっし ふさい とうき はいとう ぜいせい ふくり.",
      items: [
        { id: "ja-u165l4-shusshi", type: "vocab", front: "しゅっし", reading: "shusshi", meaning: "putting up capital", example: { jp: "友だちと しゅっしして、小さな 店を 始めました。", en: "A friend and I put up the money and started a small shop." }, accept: ["investment", "contribution of funds"] },
        { id: "ja-u165l4-fusai", type: "vocab", front: "ふさい", reading: "fusai", meaning: "liabilities", example: { jp: "ふさいが 多い 会社は、ゆうしを うけにくいです。", en: "A company with heavy liabilities struggles to get financing." }, accept: ["debt", "what is owed"] },
        { id: "ja-u165l4-toki", type: "vocab", front: "とうき", reading: "tōki", meaning: "speculation", example: { jp: "とうきで もうけようと すると、大きく そんを する ことも あります。", en: "Try to profit by speculation and you can lose heavily." }, accept: ["speculative trading", "gambling on price"] },
        { id: "ja-u165l4-haito", type: "vocab", front: "はいとう", reading: "haitō", meaning: "a dividend", example: { jp: "ことしは りじゅんが 多いので、はいとうも ふえました。", en: "Profits are high this year, so the dividend rose too." }, accept: ["payout", "share of profits"] },
        { id: "ja-u165l4-zeisei", type: "vocab", front: "ぜいせい", reading: "zeisei", meaning: "the tax system", example: { jp: "ぜいせいが かわると、会社の 計画も かわります。", en: "When the tax system changes, company plans change too." }, accept: ["taxation", "tax regime"] },
        { id: "ja-u165l4-fukuri", type: "vocab", front: "ふくり", reading: "fukuri", meaning: "employee benefits", example: { jp: "きゅうりょうより、ふくりで 会社を 選ぶ 人も います。", en: "Some people choose a company for its benefits rather than its pay." }, accept: ["welfare provision", "perks"] },
      ],
    },
  ],
};
