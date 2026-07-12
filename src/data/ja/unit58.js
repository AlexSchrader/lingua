// Unit 58 — ことば・コミュニケーション ("Language & communication") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 layer for talking about language itself and how people communicate — conversation,
// reporting, words and meaning. Examples stay in A1+A2 grammar and reuse A1/A2 vocab where
// possible. Naturalness queued for native review.
export const UNIT58 = {
  id: "ja-u58", lang: "ja", title: "ことば・コミュニケーション", order: 58, stage: "b1",
  lessons: [
    {
      id: "ja-u58l1", unit: 58, lesson: 1, title: "Conversation", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about communicating: かいわ ぎろん ほうこく はつげん つうやく ほんやく.",
      items: [
        { id: "ja-u58l1-kaiwa", type: "vocab", front: "かいわ", reading: "kaiwa", meaning: "conversation", example: { jp: "ともだちとかいわします。", en: "I have a conversation with a friend." }, accept: ["talking", "dialogue"] },
        { id: "ja-u58l1-giron", type: "vocab", front: "ぎろん", reading: "giron", meaning: "discussion", example: { jp: "みんなでぎろんします。", en: "Everyone discusses it together." }, accept: ["debate", "argument"] },
        { id: "ja-u58l1-hokoku", type: "vocab", front: "ほうこく", reading: "hōkoku", meaning: "report", example: { jp: "けっかをほうこくします。", en: "I report the results." }, accept: ["reporting"] },
        { id: "ja-u58l1-hatsugen", type: "vocab", front: "はつげん", reading: "hatsugen", meaning: "remark", example: { jp: "かいぎではつげんします。", en: "I speak up in the meeting." }, accept: ["speaking up", "statement"] },
        { id: "ja-u58l1-tsuyaku", type: "vocab", front: "つうやく", reading: "tsūyaku", meaning: "interpreting", example: { jp: "えいごのつうやくをします。", en: "I interpret English." }, accept: ["interpreter"] },
        { id: "ja-u58l1-honyaku", type: "vocab", front: "ほんやく", reading: "honyaku", meaning: "translation", example: { jp: "てがみをほんやくします。", en: "I translate the letter." }, accept: ["translating"], hint: "ほんやく = written translation; つうやく = spoken interpreting." },
      ],
    },
    {
      id: "ja-u58l2", unit: 58, lesson: 2, title: "Words & meaning", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about words and meaning: ことば いみ ひょうげん はつおん ぶんしょう たんご.",
      items: [
        { id: "ja-u58l2-kotoba", type: "vocab", front: "ことば", reading: "kotoba", meaning: "word", example: { jp: "あたらしいことばをおぼえます。", en: "I learn a new word." }, accept: ["language", "words"] },
        { id: "ja-u58l2-imi", type: "vocab", front: "いみ", reading: "imi", meaning: "meaning", example: { jp: "このことばのいみはなんですか。", en: "What does this word mean?" }, accept: ["sense"] },
        { id: "ja-u58l2-hyogen", type: "vocab", front: "ひょうげん", reading: "hyōgen", meaning: "expression", example: { jp: "いいひょうげんですね。", en: "That's a nice expression." }, accept: ["phrasing", "wording"] },
        { id: "ja-u58l2-hatsuon", type: "vocab", front: "はつおん", reading: "hatsuon", meaning: "pronunciation", example: { jp: "はつおんがきれいです。", en: "The pronunciation is clean." }, accept: ["how it's said"] },
        { id: "ja-u58l2-bunsho", type: "vocab", front: "ぶんしょう", reading: "bunshō", meaning: "text", example: { jp: "ぶんしょうをよみます。", en: "I read the text." }, accept: ["writing", "passage"] },
        { id: "ja-u58l2-tango", type: "vocab", front: "たんご", reading: "tango", meaning: "vocabulary word", example: { jp: "まいにちたんごをべんきょうします。", en: "I study vocabulary every day." }, accept: ["word", "vocab"] },
      ],
    },
  ],
};
