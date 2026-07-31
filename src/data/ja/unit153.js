// Unit 153 — ごい・N3・35 ("N3 vocab 35") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (越す/超す) disambiguated via hints.
export const UNIT153 = {
  id: "ja-u153", lang: "ja", title: "ごい・N3・35", order: 153, stage: "b1",
  lessons: [
    {
      id: "ja-u153l1", unit: 153, lesson: 1, title: "N3 vocab 35·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 国籍 (nationality), 黒板 (blackboard), 克服 (overcoming), 国民 (citizen), 穀物 (grain), 腰 (hip).",
      items: [
        { id: "ja-u153l1-kokuseki", type: "vocab", front: "国籍", reading: "kokuseki", meaning: "nationality", example: { jp: "かれの国籍はにほんです。", en: "His nationality is Japanese." }, accept: ["citizenship"] },
        { id: "ja-u153l1-kokuban", type: "vocab", front: "黒板", reading: "kokuban", meaning: "blackboard", example: { jp: "せんせいが黒板にかきます。", en: "The teacher writes on the blackboard." }, accept: ["chalkboard"] },
        { id: "ja-u153l1-kokufuku", type: "vocab", front: "克服", reading: "kokufuku", meaning: "overcoming", example: { jp: "かれはびょうきを克服しました。", en: "He overcame his illness." }, accept: ["conquest", "overcome"], hint: "克服する (こくふくする) = to overcome / get over (a hardship, illness)." },
        { id: "ja-u153l1-kokumin", type: "vocab", front: "国民", reading: "kokumin", meaning: "citizen", example: { jp: "おおくの国民がテレビをみました。", en: "Many citizens watched the television." }, accept: ["people", "national"] },
        { id: "ja-u153l1-kokumotsu", type: "vocab", front: "穀物", reading: "kokumotsu", meaning: "grain", example: { jp: "このくにはたくさんの穀物をつくります。", en: "This country produces a lot of grain." }, accept: ["cereal", "corn"] },
        { id: "ja-u153l1-koshi", type: "vocab", front: "腰", reading: "koshi", meaning: "hip", example: { jp: "けさから腰がいたいです。", en: "My lower back has hurt since this morning." }, accept: ["waist", "lower back"] },
      ],
    },
    {
      id: "ja-u153l2", unit: 153, lesson: 2, title: "N3 vocab 35·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 胡椒 (pepper), 個人 (individual), 越す (to cross over), 超す (to exceed), 国家 (state), 国会 (parliament).",
      items: [
        { id: "ja-u153l2-kosho", type: "vocab", front: "胡椒", reading: "koshō", meaning: "pepper", example: { jp: "スープに胡椒をいれます。", en: "I put pepper in the soup." }, accept: ["black pepper"] },
        { id: "ja-u153l2-kojin", type: "vocab", front: "個人", reading: "kojin", meaning: "individual", example: { jp: "これは個人のいけんです。", en: "This is an individual's opinion." }, accept: ["person", "private person"] },
        { id: "ja-u153l2-kosu", type: "vocab", front: "越す", reading: "kosu", meaning: "to cross over", example: { jp: "たかいやまを越すのはたいへんです。", en: "Crossing over the high mountain is hard." }, accept: ["to move house", "to go over"], hint: "越す (こす) = to cross over / move house. Same reading as 超す (to exceed)." },
        { id: "ja-u153l2-kosu2", type: "vocab", front: "超す", reading: "kosu", meaning: "to exceed", example: { jp: "きおんが三十どを超しました。", en: "The temperature exceeded thirty degrees." }, accept: ["to pass", "to cross"], hint: "超す (こす) = to exceed / go beyond a number. Same reading as 越す (to cross over)." },
        { id: "ja-u153l2-kokka", type: "vocab", front: "国家", reading: "kokka", meaning: "state", example: { jp: "にほんはひとつの国家です。", en: "Japan is one nation." }, accept: ["country", "nation"] },
        { id: "ja-u153l2-kokkai", type: "vocab", front: "国会", reading: "kokkai", meaning: "parliament", example: { jp: "国会でだいじなはなしをします。", en: "They discuss important matters in parliament." }, accept: ["the diet", "congress"] },
      ],
    },
    {
      id: "ja-u153l3", unit: 153, lesson: 3, title: "N3 vocab 35·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 国境 (border), 骨折 (fracture), 小包 (parcel), 琴 (koto), 異なる (to differ), 諺 (proverb).",
      items: [
        { id: "ja-u153l3-kokkyo", type: "vocab", front: "国境", reading: "kokkyō", meaning: "border", example: { jp: "くるまで国境をこえました。", en: "We crossed the border by car." }, accept: ["frontier", "national border"] },
        { id: "ja-u153l3-kossetsu", type: "vocab", front: "骨折", reading: "kossetsu", meaning: "fracture", example: { jp: "スキーであしを骨折しました。", en: "I fractured my leg skiing." }, accept: ["broken bone", "bone fracture"] },
        { id: "ja-u153l3-kozutsumi", type: "vocab", front: "小包", reading: "kozutsumi", meaning: "parcel", example: { jp: "ゆうびんきょくで小包をおくりました。", en: "I sent a parcel at the post office." }, accept: ["package"] },
        { id: "ja-u153l3-koto", type: "vocab", front: "琴", reading: "koto", meaning: "harp", example: { jp: "かのじょは琴をきれいにひきます。", en: "She plays the koto beautifully." }, accept: ["koto", "japanese harp"], hint: "琴 (こと) = the koto, a Japanese string instrument." },
        { id: "ja-u153l3-kotonaru", type: "vocab", front: "異なる", reading: "kotonaru", meaning: "to differ", example: { jp: "ふたりのいけんは異なります。", en: "The two people's opinions differ." }, accept: ["to vary", "to be different"] },
        { id: "ja-u153l3-kotowaza", type: "vocab", front: "諺", reading: "kotowaza", meaning: "proverb", example: { jp: "にほんの諺をひとつならいました。", en: "I learned one Japanese proverb." }, accept: ["saying"] },
      ],
    },
    {
      id: "ja-u153l4", unit: 153, lesson: 4, title: "N3 vocab 35·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 断る (to refuse), 粉 (flour), 好み (preference), 好む (to prefer), こぼす (to spill), こぼれる (to overflow).",
      items: [
        { id: "ja-u153l4-kotowaru", type: "vocab", front: "断る", reading: "kotowaru", meaning: "to refuse", example: { jp: "わたしはそのさそいを断りました。", en: "I declined that invitation." }, accept: ["to decline"] },
        { id: "ja-u153l4-kona", type: "vocab", front: "粉", reading: "kona", meaning: "flour", example: { jp: "パンをつくるために粉をかいました。", en: "I bought flour to make bread." }, accept: ["powder"] },
        { id: "ja-u153l4-konomi", type: "vocab", front: "好み", reading: "konomi", meaning: "preference", example: { jp: "このいろはわたしの好みです。", en: "This color is to my taste." }, accept: ["liking", "taste"], hint: "好み (このみ) = one's liking / taste. Noun from 好む." },
        { id: "ja-u153l4-konomu", type: "vocab", front: "好む", reading: "konomu", meaning: "to prefer", example: { jp: "かれはしずかなばしょを好みます。", en: "He prefers quiet places." }, accept: ["to like"] },
        { id: "ja-u153l4-kobosu", type: "vocab", front: "こぼす", reading: "kobosu", meaning: "to spill", example: { jp: "テーブルにみずをこぼしました。", en: "I spilled water on the table." }, accept: ["to drop"], hint: "こぼす = to spill something (transitive). Pair: こぼれる = it spills." },
        { id: "ja-u153l4-koboreru", type: "vocab", front: "こぼれる", reading: "koboreru", meaning: "to overflow", example: { jp: "コップからみずがこぼれました。", en: "Water spilled out of the cup." }, accept: ["to spill"], hint: "こぼれる = something spills by itself (intransitive). Pair: こぼす = to spill it." },
      ],
    },
  ],
};
