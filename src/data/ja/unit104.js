// Unit 104 — かんじ・しごと (Work and money kanji) — B1 / JLPT N3
// Strand A. The glyphs of employment and trade — the ones on a payslip, a receipt and
// a job advert. Pairs with the thematic work unit at slot 110.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards, the band-standard shape.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT104 = {
  id: "ja-u104",
  lang: "ja",
  title: "かんじ・しごと",
  order: 104,
  stage: "b1",
  lessons: [
    {
      id: "ja-u104l1",
      unit: 104,
      lesson: 1,
      title: "Having a job",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 職 (occupation), 勤 (to serve), 務 (duty), 労 (labour), and the words 勤務 and 労力.",
      items: [
        { id: "ja-u104l1-shoku", type: "kanji", front: "職", reading: "shoku", meaning: "occupation", example: { jp: "新しい 職場は 家から 近くて、毎日 歩いて 行きます。", en: "My new workplace is near home, so I walk there every day." }, accept: ["job", "post", "employment"], hint: "職 = the post you hold. 職場 = workplace, 就職 = getting a job. Not 仕事 (the work itself)." },
        { id: "ja-u104l1-kin", type: "kanji", front: "勤", reading: "kin", meaning: "to serve", example: { jp: "父は 同じ 会社に 長く 勤めて いて、来年 やめます。", en: "My father has served the same company a long time, and retires next year." }, accept: ["to work for", "attendance", "duty"], hint: "勤 = serve at a workplace — 力 (strength) on the right. 通勤 = commuting, 勤める = to be employed at." },
        { id: "ja-u104l1-mu", type: "kanji", front: "務", reading: "mu", meaning: "duty", example: { jp: "その 仕事は 事務の 人が して いますから、ここでは できません。", en: "That work is handled by the office staff, so it can't be done here." }, accept: ["task", "service", "affairs"], hint: "務 = the duties of a role. 事務 = office work, 公務員 = civil servant." },
        { id: "ja-u104l1-ro", type: "kanji", front: "労", reading: "rō", meaning: "labour", example: { jp: "毎日の 労働の あとは、ゆっくり 休むように して います。", en: "After each day of labour I make sure to rest properly." }, accept: ["toil", "effort", "trouble"], hint: "労 = effort spent — 力 (strength) at the bottom. 労働 = labour, 苦労 = hardship, ご苦労さま = thanks for your trouble." },
        { id: "ja-u104l1-kinmu", type: "vocab", front: "勤務", reading: "kinmu", meaning: "duty hours", example: { jp: "父の 勤務は 朝 早くから 始まります。", en: "My father's working hours start early in the morning." }, accept: ["service", "work", "shift"] },
        { id: "ja-u104l1-roryoku", type: "vocab", front: "労力", reading: "rōryoku", meaning: "effort", example: { jp: "この 仕事は 労力が かかりますが、おもしろいです。", en: "This job takes effort, but it's interesting." }, accept: ["labour", "trouble", "exertion"], hint: "労 (toil) + 力 (strength) — the strength a job costs you." },
      ],
    },
    {
      id: "ja-u104l2",
      unit: 104,
      lesson: 2,
      title: "What it costs",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 給 (to supply), 資 (resources), 費 (expense), 税 (tax), and the words 給料 and 学費.",
      items: [
        { id: "ja-u104l2-kyu", type: "kanji", front: "給", reading: "kyū", meaning: "to supply", example: { jp: "今月の 給料が 出たので、少し 買い物を しました。", en: "This month's pay came through, so I did a little shopping." }, accept: ["pay", "wages", "provision"], hint: "給 = hand out — 糸 (thread) + 合 (join). 給料 = salary, 月給 = monthly pay." },
        { id: "ja-u104l2-shi", type: "kanji", front: "資", reading: "shi", meaning: "resources", example: { jp: "会議の 資料を 作って、みんなに 送りました。", en: "I made the materials for the meeting and sent them to everyone." }, accept: ["capital", "materials", "funds"], hint: "資 = what you put in — 貝 (shell = money) at the bottom, as in most money kanji. 資料 = materials, 資本 = capital." },
        { id: "ja-u104l2-hi", type: "kanji", front: "費", reading: "hi", meaning: "expense", example: { jp: "今月は 食費が 高く なって、少し こまって います。", en: "Food costs went up this month, and I'm a bit stuck." }, accept: ["cost", "to spend", "spending"], hint: "費 = money going out — 貝 (money) at the bottom. 食費 = food costs, 交通費 = travel expenses." },
        { id: "ja-u104l2-zei", type: "kanji", front: "税", reading: "zei", meaning: "tax", example: { jp: "この 品物の ねだんには 税金が 入って います。", en: "The price of this item includes tax." }, accept: ["duty", "levy"], hint: "税 = tax — 禾 (grain) on the left, from when tax was paid in rice." },
        { id: "ja-u104l2-kyuryo", type: "vocab", front: "給料", reading: "kyūryō", meaning: "salary", example: { jp: "今月の 給料が 出たので、少し 買い物を しました。", en: "This month's salary came in, so I did a little shopping." }, accept: ["pay", "wages"] },
        { id: "ja-u104l2-gakuhi", type: "vocab", front: "学費", reading: "gakuhi", meaning: "school fees", example: { jp: "学費が 高いので、アルバイトを して います。", en: "School fees are high, so I have a part-time job." }, accept: ["tuition", "cost of study"] },
      ],
    },
    {
      id: "ja-u104l3",
      unit: 104,
      lesson: 3,
      title: "Trade and making things",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 貿 (trade), 商 (commerce), 産 (to produce), 収 (to take in), and the words 商品 and 国産.",
      items: [
        { id: "ja-u104l3-bo", type: "kanji", front: "貿", reading: "bō", meaning: "trade", example: { jp: "この 国は 貿易で 大きく なって、店も ふえました。", en: "This country grew through trade, and its shops multiplied." }, accept: ["commerce", "exchange"], hint: "貿 = trade between countries — again 貝 (money) below. It appears almost only in 貿易." },
        { id: "ja-u104l3-sho", type: "kanji", front: "商", reading: "shō", meaning: "commerce", example: { jp: "駅の 前に 小さな 商店が ならんで いて、いつも にぎやかです。", en: "Small shops line the front of the station, and it's always lively." }, accept: ["business", "merchant", "trade"], hint: "商 = buying and selling. 商品 = goods, 商店 = a shop, 商売 = business." },
        { id: "ja-u104l3-san", type: "kanji", front: "産", reading: "san", meaning: "to produce", example: { jp: "この 町の 主な 産業は 魚を とる 仕事で、秋は とても いそがしいです。", en: "This town's main industry is fishing, and autumn is very busy." }, accept: ["product", "industry", "birth"], hint: "産 = bring forth. 産業 = industry, お産 = childbirth — the same character for making anything new." },
        { id: "ja-u104l3-shu", type: "kanji", front: "収", reading: "shū", meaning: "to take in", example: { jp: "今年は 会社の 収入が ふえて、みんな 喜びました。", en: "The company's income rose this year, and everyone was pleased." }, accept: ["income", "to collect", "harvest"], hint: "収 = gather in. 収入 = income — literally what comes in; its partner is 支出, what goes out." },
        { id: "ja-u104l3-shohin", type: "vocab", front: "商品", reading: "shōhin", meaning: "goods", example: { jp: "その 店の 商品は 高いですが、質が いいです。", en: "That shop's goods are expensive, but the quality is good." }, accept: ["merchandise", "product", "stock"] },
        { id: "ja-u104l3-kokusan", type: "vocab", front: "国産", reading: "kokusan", meaning: "domestically produced", example: { jp: "この 車は 国産で、ねだんも 安いです。", en: "This car is domestically made, and cheap too." }, accept: ["home-produced", "made in this country"], hint: "国 (country) + 産 (produce). Its opposite is 外国産." },
      ],
    },
    {
      id: "ja-u104l4",
      unit: 104,
      lesson: 4,
      title: "Counting the money",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 支 (to pay out), 値 (price), 額 (amount), 募 (to recruit), and the words 支店 and 金額.",
      items: [
        { id: "ja-u104l4-shi", type: "kanji", front: "支", reading: "shi", meaning: "to pay out", example: { jp: "毎月の 支出を ノートに 書いて、お金の 使い方を 考えて います。", en: "I write my monthly outgoings in a notebook and think about how I spend." }, accept: ["branch", "support", "expenditure"], hint: "支 = hold up / branch off. 支出 = expenditure, 支店 = a branch shop." },
        { id: "ja-u104l4-ne", type: "kanji", front: "値", reading: "ne", meaning: "price", example: { jp: "この 服は 値段が 高いですが、とても いい 品です。", en: "These clothes are pricey, but they're a very good product." }, accept: ["value", "worth", "figure"], hint: "値 = what a thing is worth — 亻 (person) + 直 (straight). 値段 = price, 価値 = value." },
        { id: "ja-u104l4-gaku", type: "kanji", front: "額", reading: "gaku", meaning: "amount", example: { jp: "その 金額では 買えませんから、もう少し 考えます。", en: "I can't buy it for that amount, so I'll think about it more." }, accept: ["sum", "forehead", "framed picture"], hint: "額 = a stated sum — 金額 = amount of money. It also means forehead, and a picture frame." },
        { id: "ja-u104l4-bo", type: "kanji", front: "募", reading: "bo", meaning: "to recruit", example: { jp: "その 店は 新しい 人を 募集して いますから、あとで 電話します。", en: "That shop is recruiting new people, so I'll call later." }, accept: ["to invite applications", "to raise", "to gather"], hint: "募 = call for people — 力 (strength) at the bottom. 募集 = recruitment, 応募 = applying." },
        { id: "ja-u104l4-shiten", type: "vocab", front: "支店", reading: "shiten", meaning: "branch shop", example: { jp: "駅の 前に 銀行の 支店が あります。", en: "There's a bank branch in front of the station." }, accept: ["branch office"], hint: "支 (branch off) + 店 (shop) — the shop that branched from the main one. 本店 is the head shop." },
        { id: "ja-u104l4-kingaku", type: "vocab", front: "金額", reading: "kingaku", meaning: "sum of money", example: { jp: "その 金額では 買えませんから、また 今度 にします。", en: "I can't buy it for that sum, so I'll leave it for another time." }, accept: ["amount", "figure"] },
      ],
    },
  ],
};
