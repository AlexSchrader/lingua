// Unit 113 — かんじ・N3・11 — B1 / JLPT N3 kanji, frequency band ~667–731.
// Kanji-item contract: each item teaches one N3 kanji via a short, natural example
// that contains the glyph in a real, correctly-read word (no spaces; the target
// compound in kanji, surrounding everyday words in kana — matching the N3 arc).
// ids + readings copied verbatim from the graded slice; meaning/example/hint authored.
// Naturalness queued for the batch native-speaker review.
export const UNIT113 = {
  id: "ja-u113", lang: "ja", title: "かんじ・N3・11", order: 113, stage: "b1",
  lessons: [
    {
      id: "ja-u113l1", unit: 113, lesson: 1, title: "N3 kanji 11·1", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 冷 (cold), 適 (suitable), 婦 (lady), 寄 (drop by), 込 (crowded), 顔 (face).",
      items: [
        { id: "ja-u113l1-rei2", type: "kanji", front: "冷", reading: "rei", meaning: "cold", example: { jp: "冷たいおちゃがおいしいです。", en: "The cold tea is delicious." }, accept: ["cool", "chill"], hint: "冷たい（つめたい）= cold." },
        { id: "ja-u113l1-teki", type: "kanji", front: "適", reading: "teki", meaning: "suitable", example: { jp: "このしごとはかれに適しています。", en: "This job suits him." }, accept: ["fitting", "suited"], hint: "適する（てきする）= to suit." },
        { id: "ja-u113l1-fu5", type: "kanji", front: "婦", reading: "fu", meaning: "lady", example: { jp: "あの婦人はとてもやさしいです。", en: "That lady is very kind." }, accept: ["woman", "wife"], hint: "婦人（ふじん）= lady." },
        { id: "ja-u113l1-ki6", type: "kanji", front: "寄", reading: "ki", meaning: "drop by", example: { jp: "かえりにみせに寄ります。", en: "I stop by the shop on the way home." }, accept: ["stop in", "draw near"], hint: "寄る（よる）= drop by." },
        { id: "ja-u113l1-ko10", type: "kanji", front: "込", reading: "ko", meaning: "crowded", example: { jp: "あさのでんしゃはとても込んでいます。", en: "The morning train is very crowded." }, accept: ["packed"], hint: "込む（こむ）= be crowded." },
        { id: "ja-u113l1-gan", type: "kanji", front: "顔", reading: "gan", meaning: "face", example: { jp: "まいあさ顔をあらいます。", en: "I wash my face every morning." }, accept: ["expression"], hint: "顔（かお）= face." },
      ],
    },
    {
      id: "ja-u113l2", unit: 113, lesson: 2, title: "N3 kanji 11·2", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 類 (kind), 余 (left over), 王 (king), 返 (return), 妻 (wife), 背 (height).",
      items: [
        { id: "ja-u113l2-rui", type: "kanji", front: "類", reading: "rui", meaning: "kind", example: { jp: "この書類をよんでください。", en: "Please read these documents." }, accept: ["sort", "variety"], hint: "書類（しょるい）= documents." },
        { id: "ja-u113l2-yo7", type: "kanji", front: "余", reading: "yo", meaning: "surplus", example: { jp: "ごはんがすこし余りました。", en: "A little rice was left over." }, accept: ["left over", "remainder"], hint: "余る（あまる）= be left over." },
        { id: "ja-u113l2-o2", type: "kanji", front: "王", reading: "ō", meaning: "king", example: { jp: "むかしこのくにに王さまがいました。", en: "Long ago there was a king in this country." }, accept: ["ruler", "monarch"], hint: "王さま（おうさま）= king." },
        { id: "ja-u113l2-hen2", type: "kanji", front: "返", reading: "hen", meaning: "return", example: { jp: "としょかんにほんを返します。", en: "I return the book to the library." }, accept: ["give back"], hint: "返す（かえす）= give back." },
        { id: "ja-u113l2-sai5", type: "kanji", front: "妻", reading: "sai", meaning: "wife", example: { jp: "わたしの妻はいしゃです。", en: "My wife is a doctor." }, accept: ["spouse"], hint: "妻（つま）= wife." },
        { id: "ja-u113l2-hai3", type: "kanji", front: "背", reading: "hai", meaning: "height", example: { jp: "おとうとは背がたかいです。", en: "My little brother is tall." }, accept: ["back", "stature"], hint: "背（せ）= height / back." },
      ],
    },
    {
      id: "ja-u113l3", unit: 113, lesson: 3, title: "N3 kanji 11·3", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 熱 (fever), 宿 (inn), 薬 (medicine), 険 (steep), 頼 (request), 覚 (memorize).",
      items: [
        { id: "ja-u113l3-netsu", type: "kanji", front: "熱", reading: "netsu", meaning: "fever", example: { jp: "きのうから熱があります。", en: "I've had a fever since yesterday." }, accept: ["heat", "temperature"], hint: "熱（ねつ）= fever." },
        { id: "ja-u113l3-shuku", type: "kanji", front: "宿", reading: "shuku", meaning: "inn", example: { jp: "おんせんの宿にとまりました。", en: "We stayed at a hot-spring inn." }, accept: ["lodging"], hint: "宿（やど）= inn." },
        { id: "ja-u113l3-yaku3", type: "kanji", front: "薬", reading: "yaku", meaning: "medicine", example: { jp: "この薬をのんでください。", en: "Please take this medicine." }, accept: ["drug", "chemical"], hint: "薬（くすり）= medicine." },
        { id: "ja-u113l3-ken3", type: "kanji", front: "険", reading: "ken", meaning: "steep", example: { jp: "このやまみちはとても険しいです。", en: "This mountain path is very steep." }, accept: ["precipitous"], hint: "険しい（けわしい）= steep." },
        { id: "ja-u113l3-rai", type: "kanji", front: "頼", reading: "rai", meaning: "request", example: { jp: "ともだちにてつだいを頼みました。", en: "I asked my friend for help." }, accept: ["rely", "trust"], hint: "頼む（たのむ）= ask a favor." },
        { id: "ja-u113l3-kaku3", type: "kanji", front: "覚", reading: "kaku", meaning: "memorize", example: { jp: "あたらしいことばを覚えます。", en: "I memorize new words." }, accept: ["learn", "remember"], hint: "覚える（おぼえる）= memorize." },
      ],
    },
    {
      id: "ja-u113l4", unit: 113, lesson: 4, title: "N3 kanji 11·4", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 船 (ship), 途 (way), 許 (permit), 抜 (pull out), 便 (convenient), 留 (stay).",
      items: [
        { id: "ja-u113l4-sen3", type: "kanji", front: "船", reading: "sen", meaning: "ship", example: { jp: "船でしまへいきます。", en: "I go to the island by ship." }, accept: ["boat"], hint: "船（ふね）= ship." },
        { id: "ja-u113l4-to7", type: "kanji", front: "途", reading: "to", meaning: "way", example: { jp: "かえる途中であめがふりました。", en: "It rained on the way home." }, accept: ["route", "road"], hint: "途中（とちゅう）= on the way." },
        { id: "ja-u113l4-kyo3", type: "kanji", front: "許", reading: "kyo", meaning: "permit", example: { jp: "せんせいはそれを許してくれました。", en: "The teacher allowed it." }, accept: ["forgive", "approve"], hint: "許す（ゆるす）= permit." },
        { id: "ja-u113l4-batsu", type: "kanji", front: "抜", reading: "batsu", meaning: "pull out", example: { jp: "はいしゃではを抜きました。", en: "I had a tooth pulled at the dentist." }, accept: ["extract", "remove"], hint: "抜く（ぬく）= pull out." },
        { id: "ja-u113l4-ben", type: "kanji", front: "便", reading: "ben", meaning: "convenient", example: { jp: "ちかてつはとても便利です。", en: "The subway is very convenient." }, accept: ["convenience", "mail"], hint: "便利（べんり）= convenient." },
        { id: "ja-u113l4-ryu2", type: "kanji", front: "留", reading: "ryū", meaning: "stay", example: { jp: "らいねんアメリカに留学します。", en: "Next year I'll study abroad in America." }, accept: ["detain", "halt"], hint: "留学（りゅうがく）= study abroad." },
      ],
    },
  ],
};
