// Unit 50 — じょうほう・メディア ("Information & media") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 information layer: news, media, and how information moves online — the vocabulary
// a B1 learner needs to talk about what they read, watch, and search. Examples stay in
// A1+A2 grammar and reuse A1/A2 vocab where possible. Naturalness queued for native review.
export const UNIT50 = {
  id: "ja-u50", lang: "ja", title: "じょうほう・メディア", order: 50, stage: "b1",
  lessons: [
    {
      id: "ja-u50l1", unit: 50, lesson: 1, title: "News & media", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about media: じょうほう しんぶん きじ こうこく ばんぐみ メディア.",
      items: [
        { id: "ja-u50l1-joho", type: "vocab", front: "じょうほう", reading: "jōhō", meaning: "information", example: { jp: "あたらしいじょうほうです。", en: "It's new information." }, accept: ["intel", "data"] },
        { id: "ja-u50l1-shinbun", type: "vocab", front: "しんぶん", reading: "shinbun", meaning: "newspaper", example: { jp: "しんぶんをよみます。", en: "I read the newspaper." }, accept: ["the paper", "press"] },
        { id: "ja-u50l1-kiji", type: "vocab", front: "きじ", reading: "kiji", meaning: "article", example: { jp: "あさ、きじをよみます。", en: "I read an article in the morning." }, accept: ["news story", "write-up"] },
        { id: "ja-u50l1-kokoku", type: "vocab", front: "こうこく", reading: "kōkoku", meaning: "advertisement", example: { jp: "テレビのこうこくです。", en: "It's a TV advertisement." }, accept: ["ad", "commercial"] },
        { id: "ja-u50l1-bangumi", type: "vocab", front: "ばんぐみ", reading: "bangumi", meaning: "TV program", example: { jp: "すきなばんぐみをみます。", en: "I watch my favorite program." }, accept: ["show", "broadcast"] },
        { id: "ja-u50l1-media", type: "vocab", front: "メディア", reading: "media", meaning: "media", example: { jp: "メディアのちからはおおきいです。", en: "The power of the media is big." }, accept: ["the press"] },
      ],
    },
    {
      id: "ja-u50l2", unit: 50, lesson: 2, title: "Online & communication", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about information online: つうしん インターネット けんさく とうこう はっぴょう うわさ.",
      items: [
        { id: "ja-u50l2-tsushin", type: "vocab", front: "つうしん", reading: "tsūshin", meaning: "communication", example: { jp: "つうしんはべんりです。", en: "Communication is convenient." }, accept: ["telecom", "correspondence"] },
        { id: "ja-u50l2-internet", type: "vocab", front: "インターネット", reading: "intānetto", meaning: "internet", example: { jp: "インターネットでしらべます。", en: "I look it up on the internet." }, accept: ["the net", "online"] },
        { id: "ja-u50l2-kensaku", type: "vocab", front: "けんさく", reading: "kensaku", meaning: "search", example: { jp: "なまえをけんさくします。", en: "I search for the name." }, accept: ["lookup", "searching"], hint: "けんさくする = to search (esp. online / in a database)." },
        { id: "ja-u50l2-toko", type: "vocab", front: "とうこう", reading: "tōkō", meaning: "posting", example: { jp: "まいにちとうこうします。", en: "I post every day." }, accept: ["uploading", "submission"], hint: "とうこうする = to post / upload (online)." },
        { id: "ja-u50l2-happyo", type: "vocab", front: "はっぴょう", reading: "happyō", meaning: "announcement", example: { jp: "けっかをはっぴょうします。", en: "They announce the results." }, accept: ["presentation", "release"] },
        { id: "ja-u50l2-uwasa", type: "vocab", front: "うわさ", reading: "uwasa", meaning: "rumor", example: { jp: "うわさをききました。", en: "I heard a rumor." }, accept: ["gossip", "hearsay"] },
      ],
    },
  ],
};
