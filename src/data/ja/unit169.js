// Unit 169 — かんじ・ていどと くらし — B2 / JLPT N2
// Strand A. N2 glyphs for measure and living — rate and loss, degree and rival,
// virtue and printing, poverty and wealth. Slot new[80:96] of the deduped N2 list.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards; every compound kanji is taught
// at or before this unit — verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT169 = {
  id: "ja-u169",
  lang: "ja",
  title: "かんじ・ていどと くらし",
  order: 169,
  stage: "b2",
  lessons: [
    {
      id: "ja-u169l1",
      unit: 169,
      lesson: 1,
      title: "Rate and attitude",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 率 (rate), 損 (loss), 態 (condition), 提 (to submit), and the words 態度 and 提出.",
      items: [
        { id: "ja-u169l1-7387", type: "kanji", front: "率", reading: "ritsu", meaning: "rate", example: { jp: "もっと 効率よく はたらきたいと 思って います。", en: "I want to work more efficiently." }, accept: ["proportion", "ratio", "to lead (率いる)"], hint: "率 = a rate or proportion: 効率 = efficiency, 成功率 = success rate. Read hikiiru, 率いる = to lead a group." },
        { id: "ja-u169l1-640d", type: "kanji", front: "損", reading: "son", meaning: "loss", example: { jp: "その とりひきで 会社は 大きな 損を しました。", en: "The company took a big loss on that deal." }, accept: ["damage", "disadvantage"], hint: "損する (sonsuru) = to lose out; the opposite is 得する (to gain). 損害 = damage." },
        { id: "ja-u169l1-614b", type: "kanji", front: "態", reading: "tai", meaning: "condition", example: { jp: "きかいは いま、あぶない 状態に あります。", en: "The machine is now in a dangerous state." }, accept: ["state", "attitude", "form"], hint: "態 = the state or manner of a thing. 状態 = condition, 態度 = attitude, 事態 = the situation." },
        { id: "ja-u169l1-63d0", type: "kanji", front: "提", reading: "tei", meaning: "to submit", example: { jp: "レポートを 期限までに かならず 提出します。", en: "I'll be sure to submit the report by the deadline." }, accept: ["to present", "to put forward"], hint: "提 = to hold out and present. 提出 = submission, 提案 = a proposal, 前提 = a premise." },
        { id: "ja-u169l1-taido", type: "vocab", front: "態度", reading: "taido", meaning: "attitude", example: { jp: "めんせつでは、話し方も 態度も 大切です。", en: "In an interview, both how you speak and your attitude matter." }, accept: ["manner", "bearing"] },
        { id: "ja-u169l1-teishutsu", type: "vocab", front: "提出", reading: "teishutsu", meaning: "submission", example: { jp: "しゅくだいを 朝までに 提出しました。", en: "I submitted my homework by the morning." }, accept: ["handing in", "presentation"] },
      ],
    },
    {
      id: "ja-u169l2",
      unit: 169,
      lesson: 2,
      title: "Degree and rival",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 程 (extent), 敵 (enemy), 銅 (copper), 導 (to guide), and the words 程度 and 導入.",
      items: [
        { id: "ja-u169l2-7a0b", type: "kanji", front: "程", reading: "tei", meaning: "extent", example: { jp: "その 話は ある 程度 わかりました。", en: "I understood that story to some extent." }, accept: ["degree", "about", "process"], hint: "程 (hodo) = extent or 'about'. 程度 = degree, 日程 = a schedule, ～ほど = to the extent that." },
        { id: "ja-u169l2-6575", type: "kanji", front: "敵", reading: "teki", meaning: "enemy", example: { jp: "むかし、となりの 国は とても 強い 敵でした。", en: "Long ago the neighbouring country was a very strong enemy." }, accept: ["rival", "foe"], hint: "敵 (kataki/teki) = an enemy or rival. 敵味方 = friend and foe; 強敵 = a formidable opponent." },
        { id: "ja-u169l2-9285", type: "kanji", front: "銅", reading: "dō", meaning: "copper", example: { jp: "この ふるい ぞうは 銅で できて います。", en: "This old statue is made of copper." }, accept: ["bronze"], hint: "銅 = the 金 (metal) radical beside 同. 銅メダル = a bronze medal, 青銅 = bronze." },
        { id: "ja-u169l2-5c0e", type: "kanji", front: "導", reading: "dō", meaning: "to guide", example: { jp: "先生は せいとを ゆっくり 導いて いきます。", en: "The teacher guides the students along slowly." }, accept: ["to lead", "to conduct"], hint: "導く (michibiku) = to lead the way. 指導 = guidance, 導入 = introduction, 半導体 = a semiconductor." },
        { id: "ja-u169l2-teido", type: "vocab", front: "程度", reading: "teido", meaning: "degree", example: { jp: "日本語が ある 程度 話せるように なりました。", en: "I've become able to speak Japanese to some degree." }, accept: ["extent", "level"] },
        { id: "ja-u169l2-donyu", type: "vocab", front: "導入", reading: "dōnyū", meaning: "introduction", example: { jp: "工場に 新しい きかいを 導入しました。", en: "They introduced new machinery into the factory." }, accept: ["bringing in", "adoption"] },
      ],
    },
    {
      id: "ja-u169l3",
      unit: 169,
      lesson: 3,
      title: "Virtue and printing",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 徳 (virtue), 版 (edition), 肥 (fertile), 俵 (straw bag), and the words 道徳 and 肥料.",
      items: [
        { id: "ja-u169l3-5fb3", type: "kanji", front: "徳", reading: "toku", meaning: "virtue", example: { jp: "かれは とても 徳の 高い 人だと いわれて います。", en: "He is said to be a man of great virtue." }, accept: ["moral goodness", "grace"], hint: "徳 = moral goodness. 道徳 = morality, 人徳 = one's natural virtue, 徳川 = the Tokugawa family name." },
        { id: "ja-u169l3-7248", type: "kanji", front: "版", reading: "han", meaning: "edition", example: { jp: "この 本の 新しい 版が 先月 出ました。", en: "A new edition of this book came out last month." }, accept: ["printing", "a printing block"], hint: "版 = a printing block or edition. 出版 = publishing, 初版 = the first edition, 新版 = a new edition." },
        { id: "ja-u169l3-80a5", type: "kanji", front: "肥", reading: "hi", meaning: "fertile", example: { jp: "畑に 肥料を まいて、やさいを そだてます。", en: "I spread fertiliser on the field and grow vegetables." }, accept: ["fat", "to fatten"], hint: "肥える (koeru) = to grow fat or fertile; 肥料 = fertiliser. The 月 radical marks flesh." },
        { id: "ja-u169l3-4ff5", type: "kanji", front: "俵", reading: "hyō", meaning: "straw bag", example: { jp: "むかしは 米を 俵に 入れて はこびました。", en: "Long ago rice was carried in straw bags." }, accept: ["a bale", "a sack"], hint: "俵 = a straw bale, and the counter for them. 米俵 = a bag of rice, 土俵 = the sumo ring." },
        { id: "ja-u169l3-dotoku", type: "vocab", front: "道徳", reading: "dōtoku", meaning: "morality", example: { jp: "小学校で 道徳の じゅぎょうが あります。", en: "There are morality classes in primary school." }, accept: ["morals", "ethics"] },
        { id: "ja-u169l3-hiryo", type: "vocab", front: "肥料", reading: "hiryō", meaning: "fertiliser", example: { jp: "この 肥料は 花を 大きく そだてます。", en: "This fertiliser makes flowers grow big." }, accept: ["manure", "nutrient"] },
      ],
    },
    {
      id: "ja-u169l4",
      unit: 169,
      lesson: 4,
      title: "Poverty and wealth",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 貧 (poor), 婦 (married woman), 布 (cloth), 富 (wealth), and the words 主婦 and 豊富.",
      items: [
        { id: "ja-u169l4-8ca7", type: "kanji", front: "貧", reading: "hin", meaning: "poor", example: { jp: "むかし、その 国は とても 貧しかったです。", en: "Long ago, that country was very poor." }, accept: ["poverty-stricken", "needy"], hint: "貧しい (mazushii) = poor. 貧 = 分 (splitting) over 貝 (money) — money divided until little is left." },
        { id: "ja-u169l4-5a66", type: "kanji", front: "婦", reading: "fu", meaning: "married woman", example: { jp: "母は 長い 間、主婦として はたらいて きました。", en: "My mother has long worked as a housewife." }, accept: ["woman", "wife", "lady"], hint: "婦 = an adult woman. 主婦 = a housewife, 夫婦 = a married couple, 婦人 = a lady." },
        { id: "ja-u169l4-5e03", type: "kanji", front: "布", reading: "fu", meaning: "cloth", example: { jp: "この 布で 子どもの ふくを 作ります。", en: "I'll make children's clothes from this cloth." }, accept: ["fabric", "textile"], hint: "布 (nuno) = cloth. 財布 = a wallet (a fold of cloth for money), 毛布 = a blanket." },
        { id: "ja-u169l4-5bcc", type: "kanji", front: "富", reading: "fu", meaning: "wealth", example: { jp: "この 国は うつくしい 自然に 富んで います。", en: "This country is rich in beautiful nature." }, accept: ["riches", "to be rich in"], hint: "富む (tomu) = to be rich in something. 富 (tomi) = wealth, 豊富 = abundant, 富士山 = Mt. Fuji." },
        { id: "ja-u169l4-shufu", type: "vocab", front: "主婦", reading: "shufu", meaning: "a housewife", example: { jp: "さいきんは 男性の 主婦も ふえて います。", en: "Recently the number of male homemakers is also increasing." }, accept: ["homemaker"] },
        { id: "ja-u169l4-hofu", type: "vocab", front: "豊富", reading: "hōfu", meaning: "abundant", example: { jp: "この 図書館は 本の しゅるいが 豊富です。", en: "This library has an abundant variety of books." }, accept: ["plentiful", "rich"] },
      ],
    },
  ],
};
