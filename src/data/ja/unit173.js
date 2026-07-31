// Unit 173 — ごい・N3・55 ("N3 vocab 55") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (通過/通貨, 付く/就く/突く) disambiguated via hints.
export const UNIT173 = {
  id: "ja-u173", lang: "ja", title: "ごい・N3・55", order: 173, stage: "b1",
  lessons: [
    {
      id: "ja-u173l1", unit: 173, lesson: 1, title: "N3 vocab 55·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: ちょうだい (please give me), 貯金 (savings), 直接 (direct), 著者 (author), 散らす (to scatter), 散る (to fall).",
      items: [
        { id: "ja-u173l1-chodai", type: "vocab", front: "ちょうだい", reading: "chōdai", meaning: "please give me", example: { jp: "そのペンをちょうだい。", en: "Give me that pen." }, accept: ["give me", "please"], hint: "ちょうだい = a casual form of ください, common with children." },
        { id: "ja-u173l1-chokin", type: "vocab", front: "貯金", reading: "chokin", meaning: "savings", example: { jp: "まいつき貯金します。", en: "I save money every month." }, accept: ["bank savings"] },
        { id: "ja-u173l1-chokusetsu", type: "vocab", front: "直接", reading: "chokusetsu", meaning: "direct", example: { jp: "直接はなしたいです。", en: "I want to speak directly." }, accept: ["immediate", "firsthand"] },
        { id: "ja-u173l1-chosha", type: "vocab", front: "著者", reading: "chosha", meaning: "author", example: { jp: "この本の著者はゆうめいです。", en: "The author of this book is famous." }, accept: ["writer"] },
        { id: "ja-u173l1-chirasu", type: "vocab", front: "散らす", reading: "chirasu", meaning: "to scatter", example: { jp: "かぜがはっぱを散らします。", en: "The wind scatters the leaves." }, accept: ["to disperse", "to distribute"] },
        { id: "ja-u173l1-chiru", type: "vocab", front: "散る", reading: "chiru", meaning: "to fall", example: { jp: "さくらが散ります。", en: "The cherry blossoms fall." }, accept: ["to scatter"] },
      ],
    },
    {
      id: "ja-u173l2", unit: 173, lesson: 2, title: "N3 vocab 55·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 遂に (finally), 通過 (passing through), 通貨 (currency), 通学 (commuting to school), 通勤 (commuting to work), 通行 (passage).",
      items: [
        { id: "ja-u173l2-tsuini", type: "vocab", front: "遂に", reading: "tsuini", meaning: "finally", example: { jp: "遂にしゅくだいがおわりました。", en: "I finally finished my homework." }, accept: ["at last"] },
        { id: "ja-u173l2-tsuka", type: "vocab", front: "通過", reading: "tsūka", meaning: "passing through", example: { jp: "きゅうこうはこのえきを通過します。", en: "The express passes through this station." }, accept: ["passage", "passing"], hint: "通過（つうか）= passing through; same reading as 通貨 (currency)." },
        { id: "ja-u173l2-tsuka2", type: "vocab", front: "通貨", reading: "tsūka", meaning: "currency", example: { jp: "この国の通貨はえんです。", en: "This country's currency is the yen." }, accept: ["money"], hint: "通貨（つうか）= currency; same reading as 通過 (passing through)." },
        { id: "ja-u173l2-tsugaku", type: "vocab", front: "通学", reading: "tsūgaku", meaning: "commuting to school", example: { jp: "まいにちバスで通学します。", en: "I commute to school by bus every day." }, accept: ["school commute"] },
        { id: "ja-u173l2-tsukin", type: "vocab", front: "通勤", reading: "tsūkin", meaning: "commuting to work", example: { jp: "でんしゃで通勤します。", en: "I commute to work by train." }, accept: ["work commute"] },
        { id: "ja-u173l2-tsuko", type: "vocab", front: "通行", reading: "tsūkō", meaning: "passage", example: { jp: "この道は通行できません。", en: "You cannot pass through this road." }, accept: ["passing"] },
      ],
    },
    {
      id: "ja-u173l3", unit: 173, lesson: 3, title: "N3 vocab 55·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 通じる (to lead to), 通信 (communication), 通訳 (interpreter), 捕まる (to be caught), 掴む (to grab), 疲れ (tiredness).",
      items: [
        { id: "ja-u173l3-tsujiru", type: "vocab", front: "通じる", reading: "tsūjiru", meaning: "to lead to", example: { jp: "この道はえきに通じます。", en: "This road leads to the station." }, accept: ["to communicate", "to run to"] },
        { id: "ja-u173l3-tsushin", type: "vocab", front: "通信", reading: "tsūshin", meaning: "communication", example: { jp: "山では通信がわるいです。", en: "The connection is bad in the mountains." }, accept: ["correspondence"] },
        { id: "ja-u173l3-tsuyaku", type: "vocab", front: "通訳", reading: "tsūyaku", meaning: "interpreter", example: { jp: "かいぎで通訳します。", en: "I interpret at the meeting." }, accept: ["interpretation"] },
        { id: "ja-u173l3-tsukamaru", type: "vocab", front: "捕まる", reading: "tsukamaru", meaning: "to be caught", example: { jp: "どろぼうがけいさつに捕まりました。", en: "The thief was caught by the police." }, accept: ["to be arrested"] },
        { id: "ja-u173l3-tsukamu", type: "vocab", front: "掴む", reading: "tsukamu", meaning: "to grab", example: { jp: "つよくロープを掴みます。", en: "I grip the rope tightly." }, accept: ["to seize", "to grasp"] },
        { id: "ja-u173l3-tsukare", type: "vocab", front: "疲れ", reading: "tsukare", meaning: "tiredness", example: { jp: "疲れがとれません。", en: "I cannot shake off the tiredness." }, accept: ["fatigue"] },
      ],
    },
    {
      id: "ja-u173l4", unit: 173, lesson: 4, title: "N3 vocab 55·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 付き合い (friendship), 付合う (to associate with), 次々 (one after another), 付く (to stick), 就く (to take up), 突く (to thrust).",
      items: [
        { id: "ja-u173l4-tsukiai", type: "vocab", front: "付き合い", reading: "tsukiai", meaning: "friendship", example: { jp: "かれとの付き合いはながいです。", en: "My relationship with him is long." }, accept: ["socializing", "association"] },
        { id: "ja-u173l4-tsukiau", type: "vocab", front: "付合う", reading: "tsukiau", meaning: "to associate with", example: { jp: "かのじょと付合います。", en: "I go out with her." }, accept: ["to go out with", "to keep company with"] },
        { id: "ja-u173l4-tsugitsugi", type: "vocab", front: "次々", reading: "tsugitsugi", meaning: "one after another", example: { jp: "きゃくが次々にきます。", en: "Customers come one after another." }, accept: ["in succession", "one by one"] },
        { id: "ja-u173l4-tsuku", type: "vocab", front: "付く", reading: "tsuku", meaning: "to stick", example: { jp: "ふくにどろが付きました。", en: "Mud got on my clothes." }, accept: ["to be attached", "to adhere"], hint: "付く（つく）= to stick; same reading as 就く and 突く." },
        { id: "ja-u173l4-tsuku2", type: "vocab", front: "就く", reading: "tsuku", meaning: "to take up (a post)", example: { jp: "あたらしいしごとに就きます。", en: "I take up a new job." }, accept: ["to take a post", "to assume"], hint: "就く（つく）= to take up a position; same reading as 付く and 突く." },
        { id: "ja-u173l4-tsuku3", type: "vocab", front: "突く", reading: "tsuku", meaning: "to thrust", example: { jp: "ぼうでじめんを突きます。", en: "I poke the ground with a stick." }, accept: ["to poke", "to strike"], hint: "突く（つく）= to thrust / poke; same reading as 付く and 就く." },
      ],
    },
  ],
};
