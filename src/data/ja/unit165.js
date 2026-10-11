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
        { id: "ja-u165l1-shijo", type: "vocab", front: "しじょう", reading: "shijō", meaning: "a market", example: { jp: "しじょうが 小さいので、ねだんが 下がりにくいです。", en: "The market is small, so prices don't fall easily." }, drill: { jp: "しじょうが 大きく なりました。", en: "The market has grown." }, accept: ["marketplace", "the trade", "the market"], hint: "shijō — 市 (market) + 場 (place), in the economic sense rather than the building. A fish market you walk into is いちば, written with those same two kanji but read differently." },
        { id: "ja-u165l1-tanka", type: "vocab", front: "たんか", reading: "tanka", meaning: "unit price", example: { jp: "たんかは 安いですが、数が 多いので 高く なります。", en: "The unit price is low, but the quantity makes it expensive." }, drill: { jp: "たんかを 下げて もらいました。", en: "We got the unit price lowered." }, accept: ["price per unit", "rate", "the unit price"], hint: "tanka — 単 (single) + 価 (value): the price of one of them. Multiply by the 数 for the total. A negotiation is nearly always about the たんか rather than the total." },
        { id: "ja-u165l1-noki", type: "vocab", front: "のうき", reading: "nōki", meaning: "delivery date", example: { jp: "のうきに まにあわないので、先に れんらくしました。", en: "We won't make the delivery date, so I got in touch first." }, drill: { jp: "のうきを まもりました。", en: "We met the delivery date." }, accept: ["deadline", "due date", "lead time"], hint: "nōki — 納 (deliver) + 期 (a term): the date goods are due to arrive. きげん is any deadline; のうき is specifically the delivery one, and missing it is a contract matter." },
        { id: "ja-u165l1-shiharai", type: "vocab", front: "しはらい", reading: "shiharai", meaning: "payment", example: { jp: "しはらいは 月の 終わりに まとめて します。", en: "Payment is made all at once at the end of the month." }, drill: { jp: "しはらいが おくれました。", en: "The payment was late." }, accept: ["to pay", "settlement", "disbursement"], hint: "shiharai — the noun of 支払う, to pay out. 払う is the act; しはらい is the arrangement, which is why しはらい方法, payment method, is on every checkout screen." },
        { id: "ja-u165l1-keiyakusho", type: "vocab", front: "けいやくしょ", reading: "keiyakusho", meaning: "a written contract", example: { jp: "けいやくしょを よく 読まずに 名前を 書いては いけません。", en: "You mustn't sign without reading the contract carefully." }, drill: { jp: "けいやくしょに 名前を 書きます。", en: "I sign my name on the contract." }, accept: ["agreement document", "the papers", "the contract document"], hint: "keiyakusho — けいやく (contract) + 書 (document): the PAPER, not the agreement. You can have a けいやく with no けいやくしょ, which is exactly the situation the word exists to warn you about." },
        { id: "ja-u165l1-zandaka", type: "vocab", front: "ざんだか", reading: "zandaka", meaning: "the balance", example: { jp: "ざんだかを 見てから、買うか どうか 決めます。", en: "I'll check the balance, then decide whether to buy." }, drill: { jp: "ざんだかが 足りません。", en: "The balance is not enough." }, accept: ["remaining amount", "account balance", "the balance left"], hint: "zandaka — 残 (remaining) + 高 (amount): what is left in the account, and the word on the cash-machine screen. のこり is anything left over; ざんだか is money specifically." },
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
        { id: "ja-u165l2-kosho", type: "vocab", front: "こうしょう", reading: "kōshō", meaning: "negotiation", example: { jp: "こうしょうは 半年 つづきましたが、まだ 終わりません。", en: "The negotiation has gone on six months and still isn't over." }, drill: { jp: "こうしょうを 始めます。", en: "We begin the negotiation." }, accept: ["talks", "to negotiate", "bargaining"], hint: "kōshō — 交 (exchange) + 渉 (wade across): wading across to the other side to deal. Formal, two-sided, with something at stake. 話しあい is merely discussion." },
        { id: "ja-u165l2-dakyo", type: "vocab", front: "だきょう", reading: "dakyō", meaning: "a compromise", example: { jp: "だきょうしなければ、話は 前に 進みません。", en: "Without compromise the talks won't move forward." }, drill: { jp: "だきょうが ひつようです。", en: "Compromise is necessary." }, accept: ["to meet halfway", "concession", "compromise"], hint: "だきょう is the OUTCOME both sides settle for; じょうほ is the ground one side gives up to get there." },
        { id: "ja-u165l2-joho", type: "vocab", front: "じょうほ", reading: "jōho", meaning: "a concession", example: { jp: "こちらが 少し じょうほすれば、ごういできるでしょう。", en: "If we concede a little, we should be able to reach agreement." }, drill: { jp: "じょうほを もとめられました。", en: "We were asked for a concession." }, accept: ["to give ground", "yielding", "a step back"], hint: "jōho — 譲 (yield) + 歩 (a step): yielding a step. One-sided, which is what separates it from だきょう, where both parties move. ゆずる is its everyday verb." },
        { id: "ja-u165l2-goi", type: "vocab", front: "ごうい", reading: "gōi", meaning: "agreement", example: { jp: "ながい 話しあいの あと、ようやく ごういに いたりました。", en: "After long discussion we finally reached agreement." }, drill: { jp: "ごういが できました。", en: "We reached agreement." }, accept: ["consensus", "accord", "to agree"], hint: "gōi — 合 (match) + 意 (intention): the intentions line up. It names the RESULT, so ごういする is to come to agreement, while さんせい is agreeing with someone else's view." },
        { id: "ja-u165l2-ketsuretsu", type: "vocab", front: "けつれつ", reading: "ketsuretsu", meaning: "a breakdown", example: { jp: "こうしょうが けつれつして、両方が こまって います。", en: "The negotiation broke down and both sides are stuck." }, drill: { jp: "けつれつに なりました。", en: "It ended in a breakdown." }, accept: ["collapse", "rupture", "falling through"], hint: "ketsuretsu — 決 (settle) + 裂 (split): the settling splits apart. Used of talks and never of objects. こうしょうが けつれつする is the newspaper phrase for walking away from the table." },
        { id: "ja-u165l2-yushi", type: "vocab", front: "ゆうし", reading: "yūshi", meaning: "financing", example: { jp: "銀行の ゆうしが 決まって、工事が 始まりました。", en: "The bank financing came through and the work began." }, drill: { jp: "ゆうしを うけました。", en: "We received financing." }, accept: ["a loan", "funding", "credit"], hint: "yūshi — 融 (circulate) + 資 (funds): money made to flow to you. It is a LOAN from a bank — not a gift, and not しゅっし, which buys a share of the business." },
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
        { id: "ja-u165l3-rijun", type: "vocab", front: "りじゅん", reading: "rijun", meaning: "profit (the margin made)", example: { jp: "うりあげは 大きいのに、りじゅんは 少ないです。", en: "Sales are large, yet the profit is small." }, drill: { jp: "りじゅんが すくないです。", en: "The profit is small." }, accept: ["margin", "gain", "return"], hint: "うりあげ is everything that came in; りじゅん is what survives after costs. Confusing them is how a busy shop goes under." },
        { id: "ja-u165l3-uriage", type: "vocab", front: "うりあげ", reading: "uriage", meaning: "sales takings", example: { jp: "夏の うりあげが、一年で いちばん 多いです。", en: "Summer takings are the largest of the year." }, drill: { jp: "うりあげが ふえました。", en: "Takings have increased." }, accept: ["turnover", "revenue", "receipts"], hint: "uriage — the noun of 売り上げる: the money that came in from selling, before costs. りじゅん is what survives them, so a shop can post record うりあげ and no りじゅん at all." },
        { id: "ja-u165l3-zaiko", type: "vocab", front: "ざいこ", reading: "zaiko", meaning: "stock on hand", example: { jp: "ざいこが 多すぎると、場所も お金も むだに なります。", en: "Too much stock wastes both space and money." }, drill: { jp: "ざいこが あります。", en: "We have it in stock." }, accept: ["inventory", "goods in hand", "what is in the warehouse"], hint: "zaiko — 在 (be present) + 庫 (a storehouse): what is actually sitting in the warehouse. ざいこぎれ, out of stock, is the form you will meet most often." },
        { id: "ja-u165l3-kyokyu", type: "vocab", front: "きょうきゅう", reading: "kyōkyū", meaning: "supply", example: { jp: "きょうきゅうが 足りないので、ねだんが 上がって います。", en: "Supply is short, so prices are rising." }, drill: { jp: "きょうきゅうが 止まりました。", en: "Supply has stopped." }, accept: ["provision", "to supply", "what is supplied"], hint: "kyōkyū — 供 (offer) + 給 (grant): putting goods into the market. Its partner じゅよう is demand, and the pair is the first thing any economics text sets out." },
        { id: "ja-u165l3-bunpai", type: "vocab", front: "ぶんぱい", reading: "bunpai", meaning: "distribution", example: { jp: "りじゅんの ぶんぱいで、会社の 中が もめました。", en: "There was trouble inside the company over how profits were divided." }, drill: { jp: "ぶんぱいを 決めます。", en: "We decide the distribution." }, accept: ["allocation", "sharing out", "to distribute"], hint: "bunpai — 分 (divide) + 配 (hand out): dividing something up and giving out the shares — profits, work, food. はいとう is the narrow case of profit paid to owners." },
        { id: "ja-u165l3-kessan", type: "vocab", front: "けっさん", reading: "kessan", meaning: "closing the accounts", example: { jp: "けっさんの 時期は、どの 会社も いそがしいです。", en: "Every company is busy at the accounting close." }, drill: { jp: "けっさんが 終わりました。", en: "The accounting close is finished." }, accept: ["financial results", "settlement of accounts", "the accounts"], hint: "kessan — 決 (settle) + 算 (calculate): settling the sums for a period. It is an EVENT, so けっさん期 is the reporting season and けっさん書 is the statement it produces." },
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
        { id: "ja-u165l4-shusshi", type: "vocab", front: "しゅっし", reading: "shusshi", meaning: "putting up capital", example: { jp: "友だちと しゅっしして、小さな 店を 始めました。", en: "A friend and I put up the money and started a small shop." }, drill: { jp: "しゅっしを 決めました。", en: "We decided on the investment." }, accept: ["investment", "contribution of funds", "putting up money"], hint: "shusshi — 出 (put out) + 資 (funds): putting your own money in and taking a share in return. ゆうし is borrowed and has to come back; しゅっし buys part of the thing." },
        { id: "ja-u165l4-fusai", type: "vocab", front: "ふさい", reading: "fusai", meaning: "liabilities", example: { jp: "ふさいが 多い 会社は、ゆうしを うけにくいです。", en: "A company with heavy liabilities struggles to get financing." }, drill: { jp: "ふさいが ふえました。", en: "Liabilities have grown." }, accept: ["debt", "what is owed", "liabilities on the books"], hint: "fusai — 負 (bear) + 債 (a debt): what the business carries on its back. An accounting term, so it covers every obligation and not only bank loans. しゃっきん is the everyday word." },
        { id: "ja-u165l4-toki", type: "vocab", front: "とうき", reading: "tōki", meaning: "speculation", example: { jp: "とうきで もうけようと すると、大きく そんを する ことも あります。", en: "Try to profit by speculation and you can lose heavily." }, drill: { jp: "とうきは きけんです。", en: "Speculation is dangerous." }, accept: ["speculative trading", "gambling on price", "betting on price moves"], hint: "tōki — 投 (throw) + 機 (an opportunity): throwing money at a chance, and always disapproving. とうし 投資 is investing on a judgement; とうき is a bet on the price moving." },
        { id: "ja-u165l4-haito", type: "vocab", front: "はいとう", reading: "haitō", meaning: "a dividend", example: { jp: "ことしは りじゅんが 多いので、はいとうも ふえました。", en: "Profits are high this year, so the dividend rose too." }, drill: { jp: "はいとうを もらいました。", en: "I received a dividend." }, accept: ["payout", "share of profits", "a shareholder payment"], hint: "haitō — 配 (hand out) + 当 (the due amount): the share of profit handed to each owner. It comes out of りじゅん, so no profit means no はいとう." },
        { id: "ja-u165l4-zeisei", type: "vocab", front: "ぜいせい", reading: "zeisei", meaning: "the tax system", example: { jp: "ぜいせいが かわると、会社の 計画も かわります。", en: "When the tax system changes, company plans change too." }, drill: { jp: "ぜいせいが きびしく なりました。", en: "The tax system has tightened." }, accept: ["taxation", "tax regime", "the tax rules"], hint: "zeisei — 税 (tax) + 制 (system): the whole framework rather than one tax. ぜいきん is the money you hand over; ぜいせい is the set of rules that decides how much." },
        { id: "ja-u165l4-fukuri", type: "vocab", front: "ふくり", reading: "fukuri", meaning: "employee benefits", example: { jp: "きゅうりょうより、ふくりで 会社を 選ぶ 人も います。", en: "Some people choose a company for its benefits rather than its pay." }, drill: { jp: "ふくりで えらびます。", en: "I choose by the benefits." }, accept: ["welfare provision", "perks", "non-pay benefits"], hint: "fukuri — 福 (good fortune) + 利 (benefit): the non-pay side of a job — housing help, health checks, holidays. The full term is ふくりこうせい, and job adverts list it beside the salary." },
      ],
    },
  ],
};
