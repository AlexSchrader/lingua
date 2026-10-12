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
        { id: "ja-u131l1-kakei", type: "vocab", front: "かけい", reading: "kakei", meaning: "household finances", example: { jp: "こどもがうまれてから、かけいがくるしくなりました。", en: "Since the child was born, the household finances have got tight." }, drill: { jp: "かけいがくるしいです。", en: "The household finances are tight." }, accept: ["family budget", "the household purse", "domestic finances"], hint: "ka-KEI — two beats, kei said as written. か is a household and けい is accounting. 「かけいぼ」 is the household account book, a thing many Japanese homes genuinely keep." },
        { id: "ja-u131l1-shuppi", type: "vocab", front: "しゅっぴ", reading: "shuppi", meaning: "outgoings", example: { jp: "こんげつはしゅっぴがおおかったので、りょこうはやめました。", en: "The outgoings were high this month, so we cancelled the trip." }, drill: { jp: "しゅっぴをへらします。", en: "I will cut my outgoings." }, accept: ["expenses", "expenditure", "spending"], hint: "SHUP-pi — small pause, then pi. しゅつ is out and ひ is expense, so it is money going out. The money coming in is しゅうにゅう, and both sit in a しゅうし." },
        { id: "ja-u131l1-yosan", type: "vocab", front: "よさん", reading: "yosan", meaning: "budget", example: { jp: "よさんはきまっていますが、たりないかもしれません。", en: "The budget is set, but it may not be enough." }, drill: { jp: "よさんをきめました。", en: "We set the budget." }, accept: ["allowance", "financial plan", "the budget"], hint: "yo-SAN — two beats, the ん held. よ is beforehand and さん is to calculate, so it is money counted in advance. It is both a household figure and a national one." },
        { id: "ja-u131l1-setsuyaku", type: "vocab", front: "せつやく", reading: "setsuyaku", meaning: "saving", example: { jp: "でんきをせつやくすれば、まいつきのおかねがすこしのこります。", en: "If you save on electricity, a little money is left over each month." }, drill: { jp: "せつやくをはじめました。", en: "I started economising." }, accept: ["economizing", "cutting back", "thrift"], hint: "se-tsu-YA-ku — four beats. せつ is to moderate and やく is to restrain. It is spending less on purpose, so it is a virtue word — ちょきん is putting the saved money away." },
        { id: "ja-u131l1-shakkin", type: "vocab", front: "しゃっきん", reading: "shakkin", meaning: "debt", example: { jp: "しゃっきんをぜんぶかえしてから、やっとよくねむれます。", en: "Since I paid back all the debt, I finally sleep well." }, drill: { jp: "しゃっきんがのこっています。", en: "The debt is still outstanding." }, accept: ["loan owed", "borrowing", "what one owes"], hint: "SHAK-kin — small pause, then the ん held. しゃく is to borrow and きん is money. ローン is a formal arranged loan; しゃっきん carries a shadow of trouble." },
        { id: "ja-u131l1-ron", type: "vocab", front: "ローン", reading: "rōn", meaning: "loan", example: { jp: "いえのローンがながいので、まいつきすこしずつはらっています。", en: "The house loan runs a long time, so I pay it off little by little each month." }, drill: { jp: "ローンがのこっています。", en: "The loan is still outstanding." }, accept: ["mortgage", "instalment plan", "a loan"], hint: "RŌN — one long beat and a held ん. Borrowed, and neutral in a way しゃっきん is not: a house ローン is ordinary. The verb it takes is くむ, to arrange." },
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
        { id: "ja-u131l2-seikyu", type: "vocab", front: "せいきゅう", reading: "seikyū", meaning: "billing", example: { jp: "せいきゅうがまちがっていたので、でんわでききました。", en: "The billing was wrong, so I asked about it by phone." }, drill: { jp: "せいきゅうがとどきました。", en: "The bill arrived." }, accept: ["invoice", "a claim", "demand for payment"], hint: "sei-KYŪ — the last beat is long, きゅ is ONE beat. せい is to request and きゅう is to seek, so it is formally asking to be paid. The paper itself is せいきゅうしょ." },
        { id: "ja-u131l2-tesuryo", type: "vocab", front: "てすうりょう", reading: "tesūryō", meaning: "handling fee", example: { jp: "てすうりょうはたかくないので、あまりきにしていません。", en: "The handling fee isn't high, so I don't worry about it much." }, drill: { jp: "てすうりょうをはらいました。", en: "I paid the handling fee." }, accept: ["commission", "service charge", "fee"], hint: "te-sū-RYŌ — the すう and りょう are long. て is a hand, すう is a number of them, りょう is a charge — a fee for the labour of handling it. Banks and cash machines charge it." },
        { id: "ja-u131l2-hiyo", type: "vocab", front: "ひよう", reading: "hiyō", meaning: "cost", example: { jp: "ひようはかいしゃがはらいますので、しんぱいしないでください。", en: "The company pays the cost, so please don't worry." }, drill: { jp: "ひようをしらべます。", en: "I will look into the cost." }, accept: ["expense", "outlay", "costs"], hint: "hi-YŌ — the second beat is long. ひ is an expense and よう is a use. ねだん is the price on a tag; ひよう is everything the thing ends up costing you." },
        { id: "ja-u131l2-kakaku", type: "vocab", front: "かかく", reading: "kakaku", meaning: "price (the going price)", example: { jp: "かかくがあがったのに、あじはかわっていません。", en: "The price went up, but the taste hasn't changed." }, drill: { jp: "かかくをくらべました。", en: "I compared the prices." }, accept: ["cost", "the going price", "price level"], hint: "ka-KA-ku — three beats. か is a price and かく is a standard, so it is the established market price. ねだん is what this shop asks; かかく is what the thing goes for." },
        { id: "ja-u131l2-baibai", type: "vocab", front: "ばいばい", reading: "baibai", meaning: "buying and selling", example: { jp: "とちのばいばいはむずかしいので、せんもんかにききました。", en: "Buying and selling land is difficult, so I asked a specialist." }, drill: { jp: "ばいばいはむずかしいです。", en: "Buying and selling is difficult." }, accept: ["trading", "dealing", "trade"], hint: "bai-BA-i — three beats. ばい is to sell and ばい is to buy — the same sound, two different kanji. So the word holds both sides of a deal, which is why it means trading." },
        { id: "ja-u131l2-hanbai", type: "vocab", front: "はんばい", reading: "hanbai", meaning: "sale (selling as a business)", example: { jp: "はんばいはあしたからなので、もうならんでいるひとがいます。", en: "The sale starts tomorrow, so there are already people queuing." }, drill: { jp: "はんばいをはじめます。", en: "Sales will begin." }, accept: ["selling", "retail", "on sale"], hint: "han-BA-i — three beats, the ん held. はん is to deal and ばい is to sell, so it is selling as a business. セール is a discount event; はんばい is simply putting it on the market." },
      ],
    },
    {
      id: "ja-u131l3",
      unit: 131,
      lesson: 3,
      title: "Companies",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about how a business runs and whether it is making money: きぎょう けいえい りえき とりひき しょうひ けいひ.",
      items: [
        { id: "ja-u131l3-kigyo", type: "vocab", front: "きぎょう", reading: "kigyō", meaning: "enterprise", example: { jp: "おおきいきぎょうははいりにくいですが、やすみはおおいです。", en: "Big enterprises are hard to get into, but the holidays are plentiful." }, drill: { jp: "きぎょうではたらいています。", en: "I work at a company." }, accept: ["company", "corporation", "firm"], hint: "ki-GYŌ — the last beat is long. き is to undertake and ぎょう is a business. かいしゃ is the company you go to; きぎょう is the firm as an economic entity." },
        { id: "ja-u131l3-keiei", type: "vocab", front: "けいえい", reading: "keiei", meaning: "management (running a business)", example: { jp: "けいえいがかわってから、みせのふんいきがよくなりました。", en: "Since the management changed, the shop's atmosphere has improved." }, drill: { jp: "けいえいをまかされました。", en: "I was put in charge of running it." }, accept: ["running a business", "administration", "business management"], hint: "kei-E-i — three beats, each vowel its own. けい is to plan and えい is to run, so it is steering a business. かんり is keeping things in order; けいえい decides where they go." },
        { id: "ja-u131l3-rieki", type: "vocab", front: "りえき", reading: "rieki", meaning: "profit", example: { jp: "りえきがすくなくても、おきゃくさんがよろこべばいいです。", en: "Even if the profit is small, it's enough that the customers are pleased." }, drill: { jp: "りえきがふえました。", en: "Profits have increased." }, accept: ["gain", "earnings", "return"], hint: "ri-E-ki — three beats. り is a benefit and えき is a gain, so it is what is left after costs. そんがい is its opposite, and a company's books show both." },
        { id: "ja-u131l3-torihiki", type: "vocab", front: "とりひき", reading: "torihiki", meaning: "a business deal", example: { jp: "とりひきがまとまったので、しゃいんみんなでいわいました。", en: "The deal came together, so the whole staff celebrated." }, drill: { jp: "とりひきをやめました。", en: "We ended the dealings." }, accept: ["transaction", "trade", "dealings"], hint: "to-ri-HI-ki — four beats. とる plus ひく, to take and to draw: things moving both ways. It means an ongoing business relationship as much as one deal." },
        { id: "ja-u131l3-shohi", type: "vocab", front: "しょうひ", reading: "shōhi", meaning: "consumption", example: { jp: "でんきのしょうひがふえたので、りょうきんもたかくなりました。", en: "Electricity consumption rose, so the charges went up too." }, drill: { jp: "しょうひがふえました。", en: "Consumption increased." }, accept: ["using up", "consumer spending", "spending"], hint: "shō-HI — the first beat is long. しょう is to vanish and ひ is to spend, so the thing is used up. せいさん is production at the other end, and しょうひしゃ is the consumer." },
        { id: "ja-u131l3-keihi", type: "vocab", front: "けいひ", reading: "keihi", meaning: "business expenses", example: { jp: "でんしゃだいはけいひになるので、あとでもどってきます。", en: "The train fare counts as a business expense, so it comes back later." }, drill: { jp: "けいひでかいました。", en: "I bought it on expenses." }, accept: ["overheads", "running costs", "expenses"], hint: "KEI-hi — two beats, kei said as written. けい is to manage and ひ is an expense, so it is a cost the business carries. If it is けいひ, the company pays, not you." },
      ],
    },
    {
      id: "ja-u131l4",
      unit: 131,
      lesson: 4,
      title: "The wider economy",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about investing, and say how the economy is doing: とうし かぶ こうざ しゅうし けいき まずしい.",
      items: [
        { id: "ja-u131l4-toshi", type: "vocab", front: "とうし", reading: "tōshi", meaning: "investment", example: { jp: "とうしもべんきょうすれば、そんなにこわくありません。", en: "If you study it, investment isn't all that frightening." }, drill: { jp: "とうしをはじめました。", en: "I started investing." }, accept: ["investing", "putting money in", "an investment"], hint: "TŌ-shi — the first beat is long. とう is to throw in and し is capital, so it is money thrown in to grow. ちょきん sits safe; とうし takes a risk." },
        { id: "ja-u131l4-kabu", type: "vocab", front: "かぶ", reading: "kabu", meaning: "shares", example: { jp: "かぶがさがったので、みんなしずかになりました。", en: "Share prices fell, so everyone went quiet." }, drill: { jp: "かぶをかいました。", en: "I bought shares." }, accept: ["stock", "equities", "a share"], hint: "KA-bu — two beats. The plain sense is a tree stump, and a share grew out of it as a root you hold. The market is かぶしきしじょう, and a company is a かぶしきがいしゃ." },
        { id: "ja-u131l4-koza", type: "vocab", front: "こうざ", reading: "kōza", meaning: "bank account", example: { jp: "こうざをつくってから、きゅうりょうがふりこまれます。", en: "Once you open a bank account, your salary is paid into it." }, drill: { jp: "こうざをつくりました。", en: "I opened an account." }, accept: ["account", "an account", "deposit account"], hint: "KŌ-za — two beats, the first long. こう is a mouth or opening and ざ is a seat, so it is a slot where money sits. ⚠️ A different こうざ with other kanji means a lecture course." },
        { id: "ja-u131l4-shushi", type: "vocab", front: "しゅうし", reading: "shūshi", meaning: "income and outgoings", example: { jp: "ことしのしゅうしはよかったので、らいねんはひろいみせにします。", en: "This year's income and outgoings were good, so next year we'll take a bigger shop." }, drill: { jp: "しゅうしをしらべます。", en: "I will check the balance." }, accept: ["the balance", "revenue and expenditure", "the books"], hint: "SHŪ-shi — the first beat is long. しゅう is to take in and し is to pay out, so it is both directions at once. If しゅうし is positive, you ended the year ahead." },
        { id: "ja-u131l4-keiki", type: "vocab", front: "けいき", reading: "keiki", meaning: "business conditions", example: { jp: "けいきがよくなったのに、きゅうりょうはあがりません。", en: "Business conditions have improved, but wages aren't going up." }, drill: { jp: "けいきがわるくなりました。", en: "Business conditions have worsened." }, accept: ["the economy", "economic climate", "trade"], hint: "KEI-ki — two beats, kei said as written. けい is the economy and き is the mood, so it is the climate of trade. It takes いい and わるい, like weather." },
        { id: "ja-u131l4-mazushii", type: "vocab", front: "まずしい", reading: "mazushii", meaning: "poor", example: { jp: "むかしはまずしかったですが、かぞくはいつもげんきでした。", en: "We were poor in the old days, but the family was always cheerful." }, drill: { jp: "まずしいせいかつでした。", en: "It was a poor life." }, accept: ["impoverished", "needy", "hard up"], hint: "ma-zu-SHĪ — four beats, the last long. ⚠️ It also means thin or lacking in a general sense: 「ないようが まずしい」 is a thin, unsubstantial piece of writing." },
      ],
    },
  ],
};
