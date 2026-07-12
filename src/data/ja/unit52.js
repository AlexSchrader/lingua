// Unit 52 — しゃかい・せいかつ ("Society & daily life") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 society & daily-life nouns (+ a few verbs), grouped by theme: public services,
// money/economy, rules, and community. Modeled like the A1/A2 vocab items, front kana,
// ～ます form for verbs. Examples kept short and natural, using earlier vocab + basic
// grammar (を/に/で/は/が + です/ます).
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT52 = {
  id: "ja-u52",
  lang: "ja",
  title: "しゃかい・せいかつ",
  order: 52,
  stage: "a2",
  lessons: [
    // Lesson 1: public services
    {
      id: "ja-u52l1",
      unit: 52,
      lesson: 1,
      title: "Public services",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about public services: やくしょ こうきょう こうむいん ほけん けいさつ しょうぼうしょ.",
      items: [
        { id: "ja-u52l1-yakusho", type: "vocab", front: "やくしょ", reading: "yakusho", meaning: "government office", example: { jp: "やくしょへいきます。", en: "I go to the city office." }, accept: ["public office", "city office", "town hall"] },
        { id: "ja-u52l1-kokyo", type: "vocab", front: "こうきょう", reading: "kōkyō", meaning: "public", example: { jp: "こうきょうのばしょです。", en: "It's a public place." }, accept: ["the public", "communal"], hint: "opposite of private" },
        { id: "ja-u52l1-komuin", type: "vocab", front: "こうむいん", reading: "kōmuin", meaning: "civil servant", example: { jp: "ちちはこうむいんです。", en: "My father is a civil servant." }, accept: ["public servant", "government worker", "government official"] },
        { id: "ja-u52l1-hoken", type: "vocab", front: "ほけん", reading: "hoken", meaning: "insurance", example: { jp: "ほけんはだいじです。", en: "Insurance is important." }, accept: ["health insurance", "the insurance"] },
        { id: "ja-u52l1-keisatsu", type: "vocab", front: "けいさつ", reading: "keisatsu", meaning: "police", example: { jp: "けいさつをよびます。", en: "I call the police." }, accept: ["the police", "police officer"] },
        { id: "ja-u52l1-shobosho", type: "vocab", front: "しょうぼうしょ", reading: "shōbōsho", meaning: "fire station", example: { jp: "しょうぼうしょのまえです。", en: "It's in front of the fire station." }, accept: ["the fire station"] },
      ],
    },
    // Lesson 2: money & economy
    {
      id: "ja-u52l2",
      unit: 52,
      lesson: 2,
      title: "Money & economy",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about money: ぜいきん きゅうりょう けいざい ちょきん ぶっか りょうきん.",
      items: [
        { id: "ja-u52l2-zeikin", type: "vocab", front: "ぜいきん", reading: "zeikin", meaning: "tax", example: { jp: "ぜいきんをはらいます。", en: "I pay tax." }, accept: ["taxes", "the tax"] },
        { id: "ja-u52l2-kyuryo", type: "vocab", front: "きゅうりょう", reading: "kyūryō", meaning: "salary", example: { jp: "きゅうりょうをもらいます。", en: "I receive my salary." }, accept: ["pay", "wages", "wage"] },
        { id: "ja-u52l2-keizai", type: "vocab", front: "けいざい", reading: "keizai", meaning: "economy", example: { jp: "にほんのけいざいです。", en: "It's Japan's economy." }, accept: ["economics", "the economy"] },
        { id: "ja-u52l2-chokin", type: "vocab", front: "ちょきん", reading: "chokin", meaning: "savings", example: { jp: "まいつきちょきんします。", en: "I save money every month." }, accept: ["saving money", "to save money"], hint: "money you keep in the bank" },
        { id: "ja-u52l2-bukka", type: "vocab", front: "ぶっか", reading: "bukka", meaning: "prices", example: { jp: "ぶっかがたかいです。", en: "Prices are high." }, accept: ["cost of living", "the prices"] },
        { id: "ja-u52l2-ryokin", type: "vocab", front: "りょうきん", reading: "ryōkin", meaning: "fee", example: { jp: "でんきのりょうきんです。", en: "It's the electricity bill." }, accept: ["charge", "fare", "the fee"] },
      ],
    },
    // Lesson 3: rules & society
    {
      id: "ja-u52l3",
      unit: 52,
      lesson: 3,
      title: "Rules & society",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about rules and society: きそく ほうりつ せいじ しゃかい じゆう せんきょ.",
      items: [
        { id: "ja-u52l3-kisoku", type: "vocab", front: "きそく", reading: "kisoku", meaning: "rule", example: { jp: "きそくをまもります。", en: "I follow the rules." }, accept: ["rules", "regulation"] },
        { id: "ja-u52l3-horitsu", type: "vocab", front: "ほうりつ", reading: "hōritsu", meaning: "law", example: { jp: "あたらしいほうりつです。", en: "It's a new law." }, accept: ["laws", "the law"] },
        { id: "ja-u52l3-seiji", type: "vocab", front: "せいじ", reading: "seiji", meaning: "politics", example: { jp: "せいじにきょうみがあります。", en: "I'm interested in politics." }, accept: ["political affairs", "government"] },
        { id: "ja-u52l3-shakai", type: "vocab", front: "しゃかい", reading: "shakai", meaning: "society", example: { jp: "しゃかいのもんだいです。", en: "It's a problem of society." }, accept: ["community", "the public"] },
        { id: "ja-u52l3-jiyu", type: "vocab", front: "じゆう", reading: "jiyū", meaning: "freedom", example: { jp: "じゆうがだいじです。", en: "Freedom is important." }, accept: ["liberty", "free"] },
        { id: "ja-u52l3-senkyo", type: "vocab", front: "せんきょ", reading: "senkyo", meaning: "election", example: { jp: "らいしゅうせんきょです。", en: "The election is next week." }, accept: ["the election", "elections", "vote"] },
      ],
    },
    // Lesson 4: community & people
    {
      id: "ja-u52l4",
      unit: 52,
      lesson: 4,
      title: "Community & people",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the community: しみん じんこう ちいき きんじょ こうつう かんきょう.",
      items: [
        { id: "ja-u52l4-shimin", type: "vocab", front: "しみん", reading: "shimin", meaning: "citizen", example: { jp: "とうきょうのしみんです。", en: "I'm a citizen of Tokyo." }, accept: ["citizens", "resident"] },
        { id: "ja-u52l4-jinko", type: "vocab", front: "じんこう", reading: "jinkō", meaning: "population", example: { jp: "じんこうがおおいです。", en: "The population is large." }, accept: ["the population"] },
        { id: "ja-u52l4-chiiki", type: "vocab", front: "ちいき", reading: "chiiki", meaning: "area", example: { jp: "しずかなちいきです。", en: "It's a quiet area." }, accept: ["region", "district", "local area"] },
        { id: "ja-u52l4-kinjo", type: "vocab", front: "きんじょ", reading: "kinjo", meaning: "neighborhood", example: { jp: "きんじょにすんでいます。", en: "I live in the neighborhood." }, accept: ["neighbourhood", "the neighborhood", "vicinity"] },
        { id: "ja-u52l4-kotsu", type: "vocab", front: "こうつう", reading: "kōtsū", meaning: "traffic", example: { jp: "こうつうがおおいです。", en: "There is a lot of traffic." }, accept: ["transport", "transportation"] },
        { id: "ja-u52l4-kankyo", type: "vocab", front: "かんきょう", reading: "kankyō", meaning: "environment", example: { jp: "かんきょうをまもります。", en: "I protect the environment." }, accept: ["the environment", "surroundings"] },
      ],
    },
  ],
};
