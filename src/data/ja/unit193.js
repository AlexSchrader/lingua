// Unit 193 — ごい・N3・75 ("N3 vocab 75") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (tsugu ×2, dōshi ×2, narasu ×2) disambiguated via hints.
export const UNIT193 = {
  id: "ja-u193", lang: "ja", title: "ごい・N3・75", order: 193, stage: "b1",
  lessons: [
    {
      id: "ja-u193l1", unit: 193, lesson: 1, title: "N3 vocab 75·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 例え (example), 挑戦 (challenge), 治療 (treatment), 接ぐ (to join), 継ぐ (to inherit), 摘む (to pluck).",
      items: [
        { id: "ja-u193l1-tatoe", type: "vocab", front: "例え", reading: "tatoe", meaning: "example", example: { jp: "わかりやすい例えをつかいます。", en: "I use an easy-to-understand example." }, accept: ["analogy", "simile"] },
        { id: "ja-u193l1-chosen", type: "vocab", front: "挑戦", reading: "chōsen", meaning: "challenge", example: { jp: "あたらしいことに挑戦します。", en: "I take on something new." }, accept: ["attempt"] },
        { id: "ja-u193l1-chiryo", type: "vocab", front: "治療", reading: "chiryō", meaning: "treatment", example: { jp: "びょういんで治療をうけます。", en: "I receive treatment at the hospital." }, accept: ["medical treatment", "cure"] },
        { id: "ja-u193l1-tsugu2", type: "vocab", front: "接ぐ", reading: "tsugu", meaning: "to join", example: { jp: "いしゃがおれたほねを接ぎます。", en: "The doctor sets the broken bone." }, accept: ["to piece together", "to set (bones)"], hint: "接ぐ (つぐ) = to join / set bones; same reading as 継ぐ (to inherit)." },
        { id: "ja-u193l1-tsugu3", type: "vocab", front: "継ぐ", reading: "tsugu", meaning: "to inherit", example: { jp: "ちちのしごとを継ぎます。", en: "I take over my father's work." }, accept: ["to succeed to", "to take over"], hint: "継ぐ (つぐ) = to inherit / succeed to; same reading as 接ぐ (to join)." },
        { id: "ja-u193l1-tsumu2", type: "vocab", front: "摘む", reading: "tsumu", meaning: "to pluck", example: { jp: "にわのはなを摘みます。", en: "I pick the flowers in the garden." }, accept: ["to pick", "to trim"] },
      ],
    },
    {
      id: "ja-u193l2", unit: 193, lesson: 2, title: "N3 vocab 75·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 露 (dew), 強まる (to intensify), 強める (to strengthen), 転校 (transfer schools), 伝言 (message), 問う (to ask).",
      items: [
        { id: "ja-u193l2-tsuyu2", type: "vocab", front: "露", reading: "tsuyu", meaning: "dew", example: { jp: "あさ、はっぱに露がつきます。", en: "In the morning, dew forms on the leaves." }, accept: ["dewdrop"] },
        { id: "ja-u193l2-tsuyomaru", type: "vocab", front: "強まる", reading: "tsuyomaru", meaning: "to intensify", example: { jp: "よるになってかぜが強まります。", en: "The wind grows stronger at night." }, accept: ["to grow stronger", "to gain strength"], hint: "強まる (つよまる) = intransitive (something grows stronger); 強める is the transitive pair." },
        { id: "ja-u193l2-tsuyomeru", type: "vocab", front: "強める", reading: "tsuyomeru", meaning: "to strengthen", example: { jp: "もっとちからを強めます。", en: "I increase the force even more." }, accept: ["to emphasize", "to intensify"], hint: "強める (つよめる) = transitive (make something stronger); 強まる is the intransitive pair." },
        { id: "ja-u193l2-tenko2", type: "vocab", front: "転校", reading: "tenkō", meaning: "transfer schools", example: { jp: "あたらしいまちに転校します。", en: "I transfer to a school in a new town." }, accept: ["change schools", "school transfer"] },
        { id: "ja-u193l2-dengon", type: "vocab", front: "伝言", reading: "dengon", meaning: "message", example: { jp: "ともだちに伝言をつたえます。", en: "I pass a message to my friend." }, accept: ["verbal message"] },
        { id: "ja-u193l2-to3", type: "vocab", front: "問う", reading: "tō", meaning: "to ask", example: { jp: "せんせいにりゆうを問います。", en: "I ask the teacher the reason." }, accept: ["to question"] },
      ],
    },
    {
      id: "ja-u193l3", unit: 193, lesson: 3, title: "N3 vocab 75·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 棟 (building), 倒産 (bankruptcy), 同士 (one another), 同志 (comrade), 当然 (natural), 動揺 (agitation).",
      items: [
        { id: "ja-u193l3-to4", type: "vocab", front: "棟", reading: "tō", meaning: "building", example: { jp: "びょういんのひがしの棟にいきます。", en: "I go to the east wing of the hospital." }, accept: ["wing", "block"] },
        { id: "ja-u193l3-tosan", type: "vocab", front: "倒産", reading: "tōsan", meaning: "bankruptcy", example: { jp: "ちいさいかいしゃが倒産しました。", en: "The small company went bankrupt." }, accept: ["insolvency"] },
        { id: "ja-u193l3-doshi2", type: "vocab", front: "同士", reading: "dōshi", meaning: "one another", example: { jp: "ともだち同士でたすけあいます。", en: "The friends help one another." }, accept: ["companion", "comrade"], hint: "同士 (どうし) = one another / fellow ~; same reading as 同志 (comrade in a cause)." },
        { id: "ja-u193l3-doshi3", type: "vocab", front: "同志", reading: "dōshi", meaning: "comrade", example: { jp: "かれはわたしの同志です。", en: "He is my comrade." }, accept: ["kindred soul", "ally"], hint: "同志 (どうし) = comrade sharing an ideal; same reading as 同士 (one another)." },
        { id: "ja-u193l3-tozen", type: "vocab", front: "当然", reading: "tōzen", meaning: "natural", example: { jp: "それは当然のことです。", en: "That is a natural thing." }, accept: ["obvious", "of course"] },
        { id: "ja-u193l3-doyo3", type: "vocab", front: "動揺", reading: "dōyō", meaning: "agitation", example: { jp: "わるいしらせをきいて動揺しました。", en: "I was upset when I heard the bad news." }, accept: ["disturbance", "upset"] },
      ],
    },
    {
      id: "ja-u193l4", unit: 193, lesson: 4, title: "N3 vocab 75·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 説く (to explain), 綴じる (to bind), 並 (average), 慣らす (to accustom), 馴らす (to tame), 年鑑 (yearbook).",
      items: [
        { id: "ja-u193l4-toku3", type: "vocab", front: "説く", reading: "toku", meaning: "to explain", example: { jp: "せんせいがだいじなことを説きます。", en: "The teacher explains an important thing." }, accept: ["to advocate", "to preach"] },
        { id: "ja-u193l4-tojiru2", type: "vocab", front: "綴じる", reading: "tojiru", meaning: "to bind", example: { jp: "たくさんのかみを綴じます。", en: "I bind many sheets of paper together." }, accept: ["to file"] },
        { id: "ja-u193l4-nami2", type: "vocab", front: "並", reading: "nami", meaning: "average", example: { jp: "みせで並のおすしをたのみます。", en: "I order the regular-size sushi at the shop." }, accept: ["medium", "ordinary"] },
        { id: "ja-u193l4-narasu2", type: "vocab", front: "慣らす", reading: "narasu", meaning: "to accustom", example: { jp: "からだをさむさに慣らします。", en: "I accustom my body to the cold." }, accept: ["to acclimate"], hint: "慣らす (ならす) = to accustom (get used to); same reading as 馴らす (to tame an animal)." },
        { id: "ja-u193l4-narasu3", type: "vocab", front: "馴らす", reading: "narasu", meaning: "to tame", example: { jp: "のらいぬをすこしずつ馴らします。", en: "I gradually tame the stray dog." }, accept: ["to domesticate"], hint: "馴らす (ならす) = to tame / domesticate; same reading as 慣らす (to accustom)." },
        { id: "ja-u193l4-nenkan2", type: "vocab", front: "年鑑", reading: "nenkan", meaning: "yearbook", example: { jp: "まいとしこの年鑑をかいます。", en: "I buy this yearbook every year." }, accept: ["almanac"] },
      ],
    },
  ],
};
