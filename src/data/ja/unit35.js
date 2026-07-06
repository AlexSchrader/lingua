// Unit 35 — かんじ・ひと・しゃかい ("People & society kanji") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
export const UNIT35 = {
  id: "ja-u35", lang: "ja", title: "かんじ・ひと・しゃかい", order: 35, stage: "a2",
  lessons: [
    {
      id: "ja-u35l1", unit: 35, lesson: 1, title: "People", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 員 客 君 者 主 童.",
      items: [
        { id: "ja-u35l1-in", type: "kanji", front: "員", reading: "in", meaning: "member", example: { jp: "かいしゃいんです。", en: "I'm an office worker." }, accept: ["staff", "employee"], hint: "員 = member / staff. 会社員 (office worker), 店員 (clerk), 駅員 (station staff)." },
        { id: "ja-u35l1-kyaku", type: "kanji", front: "客", reading: "kyaku", meaning: "guest", example: { jp: "おきゃくさんがきます。", en: "A customer is coming." }, accept: ["customer", "visitor"], hint: "客 = guest / customer. お客さん (おきゃくさん). 宀 (roof) radical." },
        { id: "ja-u35l1-kimi", type: "kanji", front: "君", reading: "kimi", meaning: "you (familiar)", example: { jp: "君はだれですか。", en: "Who are you?" }, accept: ["lord", "-kun"], hint: "君 = you (familiar) / lord. 〜君 (くん) after boys' names. 君 (きみ) = you." },
        { id: "ja-u35l1-sha", type: "kanji", front: "者", reading: "sha", meaning: "person", example: { jp: "医者にいきます。", en: "I go to the doctor." }, accept: ["-er (person)"], hint: "者 = person. 医者 (doctor), 学者 (scholar), 若者 (young person)." },
        { id: "ja-u35l1-shu", type: "kanji", front: "主", reading: "shu", meaning: "master", example: { jp: "しゅじんはかいしゃいんです。", en: "My husband is an office worker." }, accept: ["main", "lord", "owner"], hint: "主 = master / main. 主人 (しゅじん, husband/master), 主 (おも, main)." },
        { id: "ja-u35l1-do", type: "kanji", front: "童", reading: "dō", meaning: "child", example: { jp: "どうわをよみます。", en: "I read a fairy tale." }, accept: ["kid"], hint: "童 = child. 児童 (じどう, children), 童話 (どうわ, fairy tale)." },
      ],
    },
    {
      id: "ja-u35l2", unit: 35, lesson: 2, title: "Groups & others", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 族 他 対 代 世 全.",
      items: [
        { id: "ja-u35l2-zoku", type: "kanji", front: "族", reading: "zoku", meaning: "family / tribe", example: { jp: "かぞくがすきです。", en: "I love my family." }, accept: ["clan", "group"], hint: "族 = family group / tribe. 家族 (かぞく, family), 民族 (ethnic group)." },
        { id: "ja-u35l2-hoka", type: "kanji", front: "他", reading: "hoka", meaning: "other", example: { jp: "他のみせにいきます。", en: "I go to another shop." }, accept: ["else", "another"], hint: "他 = other. 亻 (person) + 也. 他 (ほか), 他人 (stranger)." },
        { id: "ja-u35l2-tai", type: "kanji", front: "対", reading: "tai", meaning: "opposite", example: { jp: "はんたいです。", en: "It's the opposite." }, accept: ["versus", "pair"], hint: "対 = opposite / pair / versus. 反対 (opposite), 対話 (dialogue)." },
        { id: "ja-u35l2-dai", type: "kanji", front: "代", reading: "dai", meaning: "generation", example: { jp: "じだいがかわります。", en: "The era changes." }, accept: ["era", "fee", "substitute"], hint: "代 = generation / era / fee. 時代 (era), 電話代 (phone bill), 代わり (substitute)." },
        { id: "ja-u35l2-yo", type: "kanji", front: "世", reading: "yo", meaning: "world", example: { jp: "せかいはひろいです。", en: "The world is vast." }, accept: ["generation", "society"], hint: "世 = world / generation. 世界 (せかい, world), 世話 (care)." },
        { id: "ja-u35l2-zen", type: "kanji", front: "全", reading: "zen", meaning: "all", example: { jp: "ぜんぶたべます。", en: "I eat it all." }, accept: ["whole", "entire"], hint: "全 = all / whole. 全部 (ぜんぶ, all), 全然 (ぜんぜん, not at all), 安全 (safe)." },
      ],
    },
    {
      id: "ja-u35l3", unit: 35, lesson: 3, title: "Work & duty", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 仕 守 係 向 申 商.",
      items: [
        { id: "ja-u35l3-shi", type: "kanji", front: "仕", reading: "shi", meaning: "serve / do", example: { jp: "しごとをします。", en: "I do work." }, accept: ["work", "serve"], hint: "仕 = serve / do. 仕事 (しごと, work). 亻 (person) + 士." },
        { id: "ja-u35l3-mamoru", type: "kanji", front: "守", reading: "mamoru", meaning: "protect", example: { jp: "こどもを守ります。", en: "I protect the child." }, accept: ["guard", "defend"], hint: "守 = protect / guard. 宀 (roof) + 寸. 守ります = protect, お守り (charm)." },
        { id: "ja-u35l3-kakari", type: "kanji", front: "係", reading: "kakari", meaning: "in charge", example: { jp: "かかりのひとです。", en: "It's the person in charge." }, accept: ["relation", "duty"], hint: "係 = relation / person in charge. 関係 (かんけい, relationship), 係員 (staff)." },
        { id: "ja-u35l3-mukau", type: "kanji", front: "向", reading: "mukau", meaning: "face / toward", example: { jp: "えきに向かいます。", en: "I head toward the station." }, accept: ["direction", "suited to"], hint: "向 = face / direction. 向かいます = head toward, 方向 (direction)." },
        { id: "ja-u35l3-mosu", type: "kanji", front: "申", reading: "mōsu", meaning: "say (humble)", example: { jp: "たなかと申します。", en: "I'm called Tanaka." }, accept: ["state", "humbly say"], hint: "申 = say (humble). 申します = (humbly) say / be called. 申し込み (application)." },
        { id: "ja-u35l3-sho", type: "kanji", front: "商", reading: "shō", meaning: "commerce", example: { jp: "しょうてんです。", en: "It's a shop." }, accept: ["trade", "business"], hint: "商 = commerce / trade. 商店 (shop), 商品 (goods), 商売 (business)." },
      ],
    },
    {
      id: "ja-u35l4", unit: 35, lesson: 4, title: "Do & win", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 業 役 勝 乗 拾 植.",
      items: [
        { id: "ja-u35l4-gyo", type: "kanji", front: "業", reading: "gyō", meaning: "business", example: { jp: "じゅぎょうにでます。", en: "I attend class." }, accept: ["occupation", "studies"], hint: "業 = business / occupation / studies. 授業 (じゅぎょう, class), 工業 (industry), 卒業 (graduation)." },
        { id: "ja-u35l4-yaku", type: "kanji", front: "役", reading: "yaku", meaning: "role", example: { jp: "やくしょにいきます。", en: "I go to the city hall." }, accept: ["duty", "part"], hint: "役 = role / duty. 役所 (city hall), 役に立つ (useful), 主役 (lead role)." },
        { id: "ja-u35l4-katsu", type: "kanji", front: "勝", reading: "katsu", meaning: "win", example: { jp: "ゲームに勝ちます。", en: "I win the game." }, accept: ["victory", "beat"], hint: "勝 = win / victory. 勝ちます = win, 勝負 (a match)." },
        { id: "ja-u35l4-noru", type: "kanji", front: "乗", reading: "noru", meaning: "ride", example: { jp: "でんしゃに乗ります。", en: "I ride the train." }, accept: ["board", "get on"], hint: "乗 = ride / board. 乗ります — like のります. 乗車 (boarding)." },
        { id: "ja-u35l4-hiroimasu", type: "kanji", front: "拾", reading: "hiroimasu", meaning: "pick up", example: { jp: "おかねを拾います。", en: "I pick up money." }, accept: ["gather", "find"], hint: "拾 = pick up. 扌 (hand) radical. 拾います = pick up (opposite of 捨てる, throw away)." },
        { id: "ja-u35l4-ueru", type: "kanji", front: "植", reading: "ueru", meaning: "plant", example: { jp: "木を植えます。", en: "I plant a tree." }, accept: ["grow"], hint: "植 = plant (v). 木 (tree) radical. 植えます = plant, 植物 (flora)." },
      ],
    },
  ],
};
