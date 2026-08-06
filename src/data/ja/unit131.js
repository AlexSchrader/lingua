// JA Unit 131 — おかね・けいざい (Money and the economy) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js.
//
// Ordered by distance from the learner: your own household first, then the counter
// you pay at, then the company on the other side of it, then the economy as a whole.
// A B1 learner meets these words in that order in real life, and the abstract ones
// land better once the concrete ones are in.
export const UNIT131 = {
  id: "ja-u131",
  lang: "ja",
  title: "おかね・けいざい",
  order: 131,
  stage: "b1",
  lessons: [
    {
      id: "ja-u131l1",
      unit: 131,
      lesson: 1,
      title: "Household money",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about your own budget, spending and what you owe: かけい しゅっぴ よさん せつやく しゃっきん ローン.",
      items: [
        { id: "ja-u131l1-kakei", type: "vocab", front: "かけい", reading: "kakei", meaning: "household finances", example: { jp: "こどもがうまれてから、かけいがくるしくなりました。", en: "Since the child was born, the household finances have got tight." }, accept: ["family budget", "the household purse"] },
        { id: "ja-u131l1-shuppi", type: "vocab", front: "しゅっぴ", reading: "shuppi", meaning: "outgoings", example: { jp: "こんげつはしゅっぴがおおかったので、りょこうはやめました。", en: "The outgoings were high this month, so we cancelled the trip." }, accept: ["expenses", "expenditure", "spending"] },
        { id: "ja-u131l1-yosan", type: "vocab", front: "よさん", reading: "yosan", meaning: "budget", example: { jp: "よさんはきまっていますが、たりないかもしれません。", en: "The budget is set, but it may not be enough." }, accept: ["allowance", "financial plan"] },
        { id: "ja-u131l1-setsuyaku", type: "vocab", front: "せつやく", reading: "setsuyaku", meaning: "saving", example: { jp: "でんきをせつやくすれば、まいつきのおかねがすこしのこります。", en: "If you save on electricity, a little money is left over each month." }, accept: ["economizing", "cutting back", "thrift"] },
        { id: "ja-u131l1-shakkin", type: "vocab", front: "しゃっきん", reading: "shakkin", meaning: "debt", example: { jp: "しゃっきんはぜんぶかえしましたが、まだあんしんできません。", en: "I paid back all the debt, but I still can't relax." }, accept: ["loan owed", "borrowing", "what one owes"] },
        { id: "ja-u131l1-ron", type: "vocab", front: "ローン", reading: "rōn", meaning: "loan", example: { jp: "いえのローンはながいですが、まいつきはらっています。", en: "The house loan is long, but I pay it every month." }, accept: ["mortgage", "instalment plan"] },
      ],
    },
    {
      id: "ja-u131l2",
      unit: 131,
      lesson: 2,
      title: "Paying and being charged",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Deal with a bill: understand what is being charged and at what price: せいきゅう てすうりょう ひよう かかく ばいばい はんばい.",
      items: [
        { id: "ja-u131l2-seikyu", type: "vocab", front: "せいきゅう", reading: "seikyū", meaning: "billing", example: { jp: "せいきゅうがまちがっていたので、でんわでききました。", en: "The billing was wrong, so I asked about it by phone." }, accept: ["invoice", "a claim", "demand for payment"] },
        { id: "ja-u131l2-tesuryo", type: "vocab", front: "てすうりょう", reading: "tesūryō", meaning: "handling fee", example: { jp: "てすうりょうはたかくありませんが、まいかいかかります。", en: "The handling fee isn't high, but it applies every time." }, accept: ["commission", "service charge", "fee"] },
        { id: "ja-u131l2-hiyo", type: "vocab", front: "ひよう", reading: "hiyō", meaning: "cost", example: { jp: "ひようはかいしゃがはらいますので、しんぱいしないでください。", en: "The company pays the cost, so please don't worry." }, accept: ["expense", "outlay", "costs"] },
        { id: "ja-u131l2-kakaku", type: "vocab", front: "かかく", reading: "kakaku", meaning: "price", example: { jp: "かかくはあがりましたが、あじはかわっていません。", en: "The price went up, but the taste hasn't changed." }, accept: ["cost", "the going price"] },
        { id: "ja-u131l2-baibai", type: "vocab", front: "ばいばい", reading: "baibai", meaning: "buying and selling", example: { jp: "とちのばいばいはむずかしいので、せんもんかにききました。", en: "Buying and selling land is difficult, so I asked a specialist." }, accept: ["trading", "dealing", "trade"] },
        { id: "ja-u131l2-hanbai", type: "vocab", front: "はんばい", reading: "hanbai", meaning: "sale", example: { jp: "はんばいはあしたからですが、もうならんでいるひとがいます。", en: "The sale starts tomorrow, but there are already people queuing." }, accept: ["selling", "retail", "on sale"] },
      ],
    },
    {
      id: "ja-u131l3",
      unit: 131,
      lesson: 3,
      title: "Companies",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about how a business runs and whether it is making money: きぎょう けいえい りえき せいさん しょうひ けいひ.",
      items: [
        { id: "ja-u131l3-kigyo", type: "vocab", front: "きぎょう", reading: "kigyō", meaning: "enterprise", example: { jp: "おおきいきぎょうははいりにくいですが、やすみはおおいです。", en: "Big enterprises are hard to get into, but the holidays are plentiful." }, accept: ["company", "corporation", "firm"] },
        { id: "ja-u131l3-keiei", type: "vocab", front: "けいえい", reading: "keiei", meaning: "management", example: { jp: "けいえいがかわってから、みせのふんいきがよくなりました。", en: "Since the management changed, the shop's atmosphere has improved." }, accept: ["running a business", "administration"] },
        { id: "ja-u131l3-rieki", type: "vocab", front: "りえき", reading: "rieki", meaning: "profit", example: { jp: "りえきはすくないですが、おきゃくさんはよろこんでいます。", en: "The profit is small, but the customers are pleased." }, accept: ["gain", "earnings", "return"] },
        { id: "ja-u131l3-seisan", type: "vocab", front: "せいさん", reading: "seisan", meaning: "production", example: { jp: "せいさんがおくれているので、はつばいをのばしました。", en: "Production is behind, so we put back the release." }, accept: ["manufacturing", "output", "making"] },
        { id: "ja-u131l3-shohi", type: "vocab", front: "しょうひ", reading: "shōhi", meaning: "consumption", example: { jp: "でんきのしょうひがふえたので、りょうきんもたかくなりました。", en: "Electricity consumption rose, so the charges went up too." }, accept: ["using up", "consumer spending"] },
        { id: "ja-u131l3-keihi", type: "vocab", front: "けいひ", reading: "keihi", meaning: "business expenses", example: { jp: "でんしゃだいはけいひになりますが、ひるごはんはなりません。", en: "The train fare counts as a business expense, but lunch doesn't." }, accept: ["overheads", "running costs", "expenses"] },
      ],
    },
    {
      id: "ja-u131l4",
      unit: 131,
      lesson: 4,
      title: "The wider economy",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about investing, and and say how the economy is doing: とうし かぶ こうざ しゅうし けいき まずしい.",
      items: [
        { id: "ja-u131l4-toshi", type: "vocab", front: "とうし", reading: "tōshi", meaning: "investment", example: { jp: "とうしはあぶないといわれますが、べんきょうすればこわくありません。", en: "People say investment is risky, but it isn't frightening if you study it." }, accept: ["investing", "putting money in"] },
        { id: "ja-u131l4-kabu", type: "vocab", front: "かぶ", reading: "kabu", meaning: "shares", example: { jp: "かぶがさがったので、みんなしずかになりました。", en: "Share prices fell, so everyone went quiet." }, accept: ["stock", "equities", "a share"] },
        { id: "ja-u131l4-koza", type: "vocab", front: "こうざ", reading: "kōza", meaning: "bank account", example: { jp: "こうざをつくってから、きゅうりょうがふりこまれます。", en: "Once you open a bank account, your salary is paid into it." }, accept: ["account", "an account"] },
        { id: "ja-u131l4-shushi", type: "vocab", front: "しゅうし", reading: "shūshi", meaning: "income and outgoings", example: { jp: "ことしのしゅうしはよかったので、らいねんはひろいみせにします。", en: "This year's income and outgoings were good, so next year we'll take a bigger shop." }, accept: ["the balance", "revenue and expenditure", "the books"] },
        { id: "ja-u131l4-keiki", type: "vocab", front: "けいき", reading: "keiki", meaning: "business conditions", example: { jp: "けいきがよくなりましたが、きゅうりょうはあがりません。", en: "Business conditions have improved, but wages aren't going up." }, accept: ["the economy", "economic climate", "trade"] },
        { id: "ja-u131l4-mazushii", type: "vocab", front: "まずしい", reading: "mazushii", meaning: "poor", example: { jp: "むかしはまずしかったですが、かぞくはいつもげんきでした。", en: "We were poor in the old days, but the family was always cheerful." }, accept: ["impoverished", "needy", "hard up"] },
      ],
    },
  ],
};
