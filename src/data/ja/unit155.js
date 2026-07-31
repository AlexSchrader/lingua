// Unit 155 — ごい・N3・37 ("N3 vocab 37") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. The many さす homographs (刺す/指す/挿す/注す/射す) split across lesson 3.
export const UNIT155 = {
  id: "ja-u155", lang: "ja", title: "ごい・N3・37", order: 155, stage: "b1",
  lessons: [
    {
      id: "ja-u155l1", unit: 155, lesson: 1, title: "N3 vocab 37·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 境 (border), 逆らう (to go against), 盛り (helping), 作業 (work), 裂く (to tear), 作品 (work).",
      items: [
        { id: "ja-u155l1-sakai", type: "vocab", front: "境", reading: "sakai", meaning: "border", example: { jp: "くにとくにの境をあるきました。", en: "I walked along the border between the countries." }, accept: ["boundary", "mental state"] },
        { id: "ja-u155l1-sakarau", type: "vocab", front: "逆らう", reading: "sakarau", meaning: "to go against", example: { jp: "かわのながれに逆らっておよぎました。", en: "I swam against the river's current." }, accept: ["to oppose", "to disobey"] },
        { id: "ja-u155l1-sakari", type: "vocab", front: "盛り", reading: "sakari", meaning: "helping", example: { jp: "このみせはごはんの盛りがおおいです。", en: "This shop gives large helpings of rice." }, accept: ["serving", "portion"] },
        { id: "ja-u155l1-sagyo", type: "vocab", front: "作業", reading: "sagyō", meaning: "work", example: { jp: "きょうの作業はたいへんでした。", en: "Today's work was tough." }, accept: ["operation", "task"] },
        { id: "ja-u155l1-saku", type: "vocab", front: "裂く", reading: "saku", meaning: "to tear", example: { jp: "かみを二つに裂きました。", en: "I tore the paper in two." }, accept: ["to split", "to rip"] },
        { id: "ja-u155l1-sakuhin", type: "vocab", front: "作品", reading: "sakuhin", meaning: "work", example: { jp: "この作品はとてもゆうめいです。", en: "This work of art is very famous." }, accept: ["artwork", "production"] },
      ],
    },
    {
      id: "ja-u155l2", unit: 155, lesson: 2, title: "N3 vocab 37·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 作物 (crops), 桜 (cherry blossom), 叫ぶ (to shout), 避ける (to avoid), 支える (to support), 刺さる (to stick).",
      items: [
        { id: "ja-u155l2-sakumotsu", type: "vocab", front: "作物", reading: "sakumotsu", meaning: "crops", example: { jp: "はたけの作物がよくそだちました。", en: "The crops in the field grew well." }, accept: ["produce", "harvest"] },
        { id: "ja-u155l2-sakura", type: "vocab", front: "桜", reading: "sakura", meaning: "cherry blossom", example: { jp: "はるになると桜がさきます。", en: "When spring comes, the cherry blossoms bloom." }, accept: ["cherry tree"] },
        { id: "ja-u155l2-sakebu", type: "vocab", front: "叫ぶ", reading: "sakebu", meaning: "to shout", example: { jp: "かれはおおきなこえで叫びました。", en: "He shouted in a loud voice." }, accept: ["to cry out", "to yell"] },
        { id: "ja-u155l2-sakeru", type: "vocab", front: "避ける", reading: "sakeru", meaning: "to avoid", example: { jp: "みちのくるまを避けてあるきました。", en: "I walked while avoiding the cars on the road." }, accept: ["to avert", "to ward off"] },
        { id: "ja-u155l2-sasaeru", type: "vocab", front: "支える", reading: "sasaeru", meaning: "to support", example: { jp: "かぞくがいつもわたしを支えています。", en: "My family always supports me." }, accept: ["to hold up", "to sustain"] },
        { id: "ja-u155l2-sasaru", type: "vocab", front: "刺さる", reading: "sasaru", meaning: "to stick", example: { jp: "ゆびにとげが刺さりました。", en: "A thorn stuck into my finger." }, accept: ["to be stuck", "to pierce"] },
      ],
    },
    {
      id: "ja-u155l3", unit: 155, lesson: 3, title: "N3 vocab 37·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 刺す (to sting), 指す (to point), 挿す (to insert), 注す (to pour), 射す (to shine), 座席 (seat).",
      items: [
        { id: "ja-u155l3-sasu", type: "vocab", front: "刺す", reading: "sasu", meaning: "to sting", example: { jp: "はちにうでを刺されました。", en: "I got stung on the arm by a bee." }, accept: ["to bite", "to prick", "to stab"], hint: "刺す (さす) = to sting/prick. Same reading as 指す (point), 挿す (insert)." },
        { id: "ja-u155l3-sasu2", type: "vocab", front: "指す", reading: "sasu", meaning: "to point", example: { jp: "かれはとけいを指しました。", en: "He pointed at the clock." }, accept: ["to indicate", "to point at"], hint: "指す (さす) = to point at. Same reading as 刺す (sting), 挿す (insert)." },
        { id: "ja-u155l3-sasu3", type: "vocab", front: "挿す", reading: "sasu", meaning: "to insert", example: { jp: "はなをびんに挿しました。", en: "I put the flowers into the vase." }, accept: ["to put in", "to graft"], hint: "挿す (さす) = to insert/put in. Same reading as 刺す (sting), 指す (point)." },
        { id: "ja-u155l3-sasu4", type: "vocab", front: "注す", reading: "sasu", meaning: "to pour", example: { jp: "コップにおちゃを注しました。", en: "I poured tea into the cup." }, accept: ["to serve", "to pour a drink"] },
        { id: "ja-u155l3-sasu5", type: "vocab", front: "射す", reading: "sasu", meaning: "to shine", example: { jp: "まどから日が射しています。", en: "Sunlight is shining in through the window." }, accept: ["to strike", "to stream in"] },
        { id: "ja-u155l3-zaseki", type: "vocab", front: "座席", reading: "zaseki", meaning: "seat", example: { jp: "でんしゃの座席にすわりました。", en: "I sat down in the train seat." }, accept: ["place to sit"] },
      ],
    },
    {
      id: "ja-u155l4", unit: 155, lesson: 4, title: "N3 vocab 37·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 誘う (to invite), 札 (bill), 作家 (author), 作曲 (composition), ざっと (roughly), さっぱり (refreshed).",
      items: [
        { id: "ja-u155l4-saso", type: "vocab", front: "誘う", reading: "sasō", meaning: "to invite", example: { jp: "ともだちをえいがに誘いました。", en: "I invited a friend to a movie." }, accept: ["to tempt", "to lure"] },
        { id: "ja-u155l4-satsu", type: "vocab", front: "札", reading: "satsu", meaning: "bill", example: { jp: "さいふにせんえん札があります。", en: "There is a thousand-yen bill in my wallet." }, accept: ["note", "banknote"] },
        { id: "ja-u155l4-sakka", type: "vocab", front: "作家", reading: "sakka", meaning: "author", example: { jp: "かのじょはゆうめいな作家です。", en: "She is a famous author." }, accept: ["writer", "novelist"] },
        { id: "ja-u155l4-sakkyoku", type: "vocab", front: "作曲", reading: "sakkyoku", meaning: "composition", example: { jp: "かれはうつくしい曲を作曲しました。", en: "He composed a beautiful piece of music." }, accept: ["composing", "to compose"] },
        { id: "ja-u155l4-zatto", type: "vocab", front: "ざっと", reading: "zatto", meaning: "roughly", example: { jp: "ほんをざっとよみました。", en: "I read through the book roughly." }, accept: ["briefly", "approximately"] },
        { id: "ja-u155l4-sappari", type: "vocab", front: "さっぱり", reading: "sappari", meaning: "refreshed", example: { jp: "おふろにはいってさっぱりしました。", en: "I felt refreshed after taking a bath." }, accept: ["neat", "feeling refreshed"] },
      ],
    },
  ],
};
