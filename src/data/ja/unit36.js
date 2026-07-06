// Unit 36 — かんじ・べんきょう ("Study & culture kanji") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
export const UNIT36 = {
  id: "ja-u36", lang: "ja", title: "かんじ・べんきょう", order: 36, stage: "a2",
  lessons: [
    {
      id: "ja-u36l1", unit: 36, lesson: 1, title: "Study 1", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 漢 期 究 級 研 詩.",
      items: [
        { id: "ja-u36l1-kan", type: "kanji", front: "漢", reading: "kan", meaning: "Chinese (characters)", example: { jp: "漢字をならいます。", en: "I learn kanji." }, accept: ["China", "Han"], hint: "漢 = China / Chinese characters. 漢字 (かんじ, kanji). 氵 (water) radical." },
        { id: "ja-u36l1-ki", type: "kanji", front: "期", reading: "ki", meaning: "period", example: { jp: "がっきがはじまります。", en: "The term begins." }, accept: ["term", "time"], hint: "期 = period / term. 学期 (school term), 期間 (period), 期待 (expectation)." },
        { id: "ja-u36l1-kyu", type: "kanji", front: "究", reading: "kyū", meaning: "research", example: { jp: "けんきゅうします。", en: "I do research." }, accept: ["investigate"], hint: "究 = research / investigate. 研究 (けんきゅう, research). 穴 (hole) radical." },
        { id: "ja-u36l1-kyu2", type: "kanji", front: "級", reading: "kyū", meaning: "grade", example: { jp: "じょうきゅうのクラスです。", en: "It's an advanced class." }, accept: ["rank", "class"], hint: "級 = grade / rank / class. 初級 (beginner), 上級 (advanced), 学級 (class)." },
        { id: "ja-u36l1-ken", type: "kanji", front: "研", reading: "ken", meaning: "sharpen / study", example: { jp: "けんきゅうしつにいます。", en: "I'm in the lab." }, accept: ["polish", "research"], hint: "研 = sharpen / study. 石 (stone) radical. 研究 (research), 研究室 (lab)." },
        { id: "ja-u36l1-shi", type: "kanji", front: "詩", reading: "shi", meaning: "poem", example: { jp: "詩をかきます。", en: "I write a poem." }, accept: ["poetry"], hint: "詩 = poem / poetry. 言 (words) + 寺. 詩人 (poet)." },
      ],
    },
    {
      id: "ja-u36l2", unit: 36, lesson: 2, title: "Study 2", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 式 実 写 章 調 帳.",
      items: [
        { id: "ja-u36l2-shiki", type: "kanji", front: "式", reading: "shiki", meaning: "ceremony", example: { jp: "そつぎょうしきです。", en: "It's the graduation ceremony." }, accept: ["formula", "style"], hint: "式 = ceremony / formula / style. 結婚式 (wedding), 卒業式 (graduation), 数式 (formula)." },
        { id: "ja-u36l2-jitsu", type: "kanji", front: "実", reading: "jitsu", meaning: "reality", example: { jp: "じっさいにみます。", en: "I see it in reality." }, accept: ["truth", "fruit"], hint: "実 = reality / fruit. 宀 (roof) radical. 実 (み, fruit), 実際 (actually), 事実 (fact)." },
        { id: "ja-u36l2-sha", type: "kanji", front: "写", reading: "sha", meaning: "copy", example: { jp: "しゃしんをとります。", en: "I take a photo." }, accept: ["photograph", "reproduce"], hint: "写 = copy / photograph. 写真 (しゃしん, photo), 写します = copy." },
        { id: "ja-u36l2-sho", type: "kanji", front: "章", reading: "shō", meaning: "chapter", example: { jp: "だいいっしょうをよみます。", en: "I read chapter one." }, accept: ["badge"], hint: "章 = chapter / badge. 文章 (writing), 第一章 (chapter 1)." },
        { id: "ja-u36l2-shiraberu", type: "kanji", front: "調", reading: "shiraberu", meaning: "investigate", example: { jp: "ちずを調べます。", en: "I look up the map." }, accept: ["tune", "check"], hint: "調 = investigate / tune. 言 (words) radical. 調べます — like しらべます. 調子 (condition)." },
        { id: "ja-u36l2-cho", type: "kanji", front: "帳", reading: "chō", meaning: "notebook", example: { jp: "てちょうをつかいます。", en: "I use a planner." }, accept: ["register", "book"], hint: "帳 = notebook / register. 手帳 (planner), 通帳 (bankbook)." },
      ],
    },
    {
      id: "ja-u36l3", unit: 36, lesson: 3, title: "Culture", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 談 笛 曲 祭 号 昭.",
      items: [
        { id: "ja-u36l3-dan", type: "kanji", front: "談", reading: "dan", meaning: "talk", example: { jp: "そうだんします。", en: "I consult (someone)." }, accept: ["discussion"], hint: "談 = talk / discussion. 言 (words) radical. 相談 (consultation), 会談." },
        { id: "ja-u36l3-fue", type: "kanji", front: "笛", reading: "fue", meaning: "flute", example: { jp: "笛をつかいます。", en: "I use a whistle." }, accept: ["whistle"], hint: "笛 = flute / whistle. 竹 (bamboo) on top. 口笛 (whistle)." },
        { id: "ja-u36l3-kyoku", type: "kanji", front: "曲", reading: "kyoku", meaning: "tune", example: { jp: "この曲がすきです。", en: "I like this song." }, accept: ["song", "bend"], hint: "曲 = tune / song / bend. 名曲 (famous song), 曲がる (まがる, to bend)." },
        { id: "ja-u36l3-matsuri", type: "kanji", front: "祭", reading: "matsuri", meaning: "festival", example: { jp: "おまつりにいきます。", en: "I go to the festival." }, accept: ["celebration"], hint: "祭 = festival. お祭り (おまつり), 文化祭 (culture festival)." },
        { id: "ja-u36l3-go", type: "kanji", front: "号", reading: "gō", meaning: "number", example: { jp: "ばんごうをかきます。", en: "I write the number." }, accept: ["issue", "name"], hint: "号 = number / issue. 番号 (ばんごう, number), 記号 (symbol), 〜号." },
        { id: "ja-u36l3-sho2", type: "kanji", front: "昭", reading: "shō", meaning: "Shōwa / bright", example: { jp: "しょうわのじだいです。", en: "It's the Shōwa era." }, accept: ["bright"], hint: "昭 = bright / the Shōwa era (1926–1989). 日 (sun) + 召." },
      ],
    },
    {
      id: "ja-u36l4", unit: 36, lesson: 4, title: "Things & order", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 昔 練 表 具 品 整.",
      items: [
        { id: "ja-u36l4-mukashi", type: "kanji", front: "昔", reading: "mukashi", meaning: "long ago", example: { jp: "昔、にほんにいました。", en: "Long ago, I was in Japan." }, accept: ["the past", "olden days"], hint: "昔 = long ago / the past. 昔々 (once upon a time)." },
        { id: "ja-u36l4-ren", type: "kanji", front: "練", reading: "ren", meaning: "practice", example: { jp: "れんしゅうします。", en: "I practice." }, accept: ["train", "knead"], hint: "練 = practice / train. 糸 (thread) radical. 練習 (れんしゅう, practice)." },
        { id: "ja-u36l4-omote", type: "kanji", front: "表", reading: "omote", meaning: "surface / chart", example: { jp: "表をみます。", en: "I look at the chart." }, accept: ["front", "table (chart)"], hint: "表 = surface / front / chart. 表 (おもて, front side), 表 (ひょう, table), 発表 (presentation)." },
        { id: "ja-u36l4-gu", type: "kanji", front: "具", reading: "gu", meaning: "tool", example: { jp: "かぐをかいます。", en: "I buy furniture." }, accept: ["equipment", "ingredient"], hint: "具 = tool / equipment. 道具 (tool), 家具 (かぐ, furniture), 具体的 (concrete)." },
        { id: "ja-u36l4-shina", type: "kanji", front: "品", reading: "shina", meaning: "goods", example: { jp: "しなものをえらびます。", en: "I choose an item." }, accept: ["article", "quality"], hint: "品 = goods / article / quality. 品物 (しなもの, goods), 食品 (food), 作品 (work)." },
        { id: "ja-u36l4-sei", type: "kanji", front: "整", reading: "sei", meaning: "arrange", example: { jp: "へやをせいりします。", en: "I tidy the room." }, accept: ["put in order", "organize"], hint: "整 = arrange / put in order. 整理 (organizing), 調整 (adjustment)." },
      ],
    },
  ],
};
