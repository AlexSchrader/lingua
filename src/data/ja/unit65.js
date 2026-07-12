// Unit 65 — ぶんぽう① ("Grammar I — manner, tendency & timing") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 GRAMMAR taught as function-word vocab (the "grammar has no item type" convention):
// each front is a suffix/pattern; its example sentence carries the pattern. Covers
// appearance/tendency endings + time/sequence patterns. ⚠️ HIGHEST naturalness risk —
// flag for native review. Passive/causative drills are NOT here (parked on the engine).
export const UNIT65 = {
  id: "ja-u65", lang: "ja", title: "ぶんぽう①", order: 65, stage: "b1",
  lessons: [
    {
      id: "ja-u65l1", unit: 65, lesson: 1, title: "Manner & tendency", cefr: "B1", dominantMode: "recall",
      canDo: "Describe how things seem: ～っぽい ～がち ～むけ ～だらけ ～ぎみ ～とおり.",
      items: [
        { id: "ja-u65l1-ppoi", type: "vocab", front: "っぽい", reading: "ppoi", meaning: "-ish", example: { jp: "かれはこどもっぽいです。", en: "He is childish." }, accept: ["-like", "tends to be"], hint: "Noun/verb + っぽい = 'has the feel of', often slightly negative: こどもっぽい = childish." },
        { id: "ja-u65l1-gachi", type: "vocab", front: "がち", reading: "gachi", meaning: "tend to", example: { jp: "ふゆはびょうきがちです。", en: "In winter I tend to get sick." }, accept: ["prone to", "apt to"], hint: "～がち = 'tends to (do something unwanted)', e.g. わすれがち = tends to forget." },
        { id: "ja-u65l1-muke", type: "vocab", front: "むけ", reading: "muke", meaning: "aimed at", example: { jp: "こどもむけのほんです。", en: "It's a book aimed at children." }, accept: ["for", "intended for"] },
        { id: "ja-u65l1-darake", type: "vocab", front: "だらけ", reading: "darake", meaning: "full of", example: { jp: "にわはむしだらけです。", en: "The garden is full of bugs." }, accept: ["covered in", "riddled with"], hint: "～だらけ = 'covered in / full of (something unpleasant)'." },
        { id: "ja-u65l1-gimi", type: "vocab", front: "ぎみ", reading: "gimi", meaning: "a touch of", example: { jp: "きょうはかぜぎみです。", en: "I have a touch of a cold today." }, accept: ["slightly", "a bit"], hint: "～ぎみ = 'showing signs of, a slight ~', e.g. つかれぎみ = a bit tired." },
        { id: "ja-u65l1-tori", type: "vocab", front: "とおり", reading: "tōri", meaning: "just as", example: { jp: "かんがえたとおりでした。", en: "It was just as I thought." }, accept: ["in accordance with", "the way that"] },
      ],
    },
    {
      id: "ja-u65l2", unit: 65, lesson: 2, title: "Time & sequence", cefr: "B1", dominantMode: "recall",
      canDo: "Link actions in time: ～ばかり ～うちに ～たびに ～まま ～ところ ～ついでに.",
      items: [
        { id: "ja-u65l2-bakari", type: "vocab", front: "ばかり", reading: "bakari", meaning: "just (did)", example: { jp: "いまたべたばかりです。", en: "I just ate now." }, accept: ["only", "nothing but"], hint: "Verb-た + ばかり = 'just did it'; noun + ばかり = 'only / nothing but'." },
        { id: "ja-u65l2-uchini", type: "vocab", front: "うちに", reading: "uchini", meaning: "while", example: { jp: "わかいうちにべんきょうします。", en: "I study while I'm young." }, accept: ["before it changes", "during"], hint: "～うちに = 'while (a state lasts)', do it before that window closes." },
        { id: "ja-u65l2-tabini", type: "vocab", front: "たびに", reading: "tabini", meaning: "every time", example: { jp: "あうたびにうれしいです。", en: "Every time we meet, I'm happy." }, accept: ["whenever", "each time"] },
        { id: "ja-u65l2-mama", type: "vocab", front: "まま", reading: "mama", meaning: "as is", example: { jp: "まどをあけたままにします。", en: "I leave the window open." }, accept: ["unchanged", "still in that state"] },
        { id: "ja-u65l2-tokoro", type: "vocab", front: "ところ", reading: "tokoro", meaning: "just about to", example: { jp: "いまかえるところです。", en: "I'm just about to go home." }, accept: ["on the verge of", "the point where"], hint: "Verb-dictionary + ところ = about to; Verb-た + ところ = just finished." },
        { id: "ja-u65l2-tsuideni", type: "vocab", front: "ついでに", reading: "tsuideni", meaning: "while you're at it", example: { jp: "かいものついでにゆうびんきょくへいきます。", en: "While shopping, I'll go to the post office." }, accept: ["on the same occasion", "as well"] },
      ],
    },
  ],
};
