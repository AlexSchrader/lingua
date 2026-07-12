// Unit 64 — どうし② ("N3 verbs II — persisting & interacting") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 action verbs (taught as ～ます-form vocab, the corpus convention). This unit covers
// verbs of persistence and social interaction. Examples stay in A1+A2 grammar and reuse
// A1/A2 vocab where possible. Naturalness queued for native review.
export const UNIT64 = {
  id: "ja-u64", lang: "ja", title: "どうし②", order: 64, stage: "b1",
  lessons: [
    {
      id: "ja-u64l1", unit: 64, lesson: 1, title: "Persisting", cefr: "B1", dominantMode: "recall",
      canDo: "Verbs of keeping on: つづけます まもります なれます あきらめます くりかえします たしかめます.",
      items: [
        { id: "ja-u64l1-tsuzukemasu", type: "vocab", front: "つづけます", reading: "tsuzukemasu", meaning: "continue", example: { jp: "べんきょうをつづけます。", en: "I continue studying." }, accept: ["keep on", "carry on"] },
        { id: "ja-u64l1-mamorimasu", type: "vocab", front: "まもります", reading: "mamorimasu", meaning: "keep/protect", example: { jp: "やくそくをまもります。", en: "I keep my promise." }, accept: ["defend", "obey"] },
        { id: "ja-u64l1-naremasu", type: "vocab", front: "なれます", reading: "naremasu", meaning: "get used to", example: { jp: "あたらしいしごとになれます。", en: "I get used to the new job." }, accept: ["become accustomed"] },
        { id: "ja-u64l1-akiramemasu", type: "vocab", front: "あきらめます", reading: "akiramemasu", meaning: "give up", example: { jp: "ゆめをあきらめません。", en: "I won't give up my dream." }, accept: ["abandon", "quit"] },
        { id: "ja-u64l1-kurikaeshimasu", type: "vocab", front: "くりかえします", reading: "kurikaeshimasu", meaning: "repeat", example: { jp: "ことばをくりかえします。", en: "I repeat the word." }, accept: ["do again", "go over"] },
        { id: "ja-u64l1-tashikamemasu", type: "vocab", front: "たしかめます", reading: "tashikamemasu", meaning: "confirm", example: { jp: "じかんをたしかめます。", en: "I confirm the time." }, accept: ["check", "make sure"] },
      ],
    },
    {
      id: "ja-u64l2", unit: 64, lesson: 2, title: "Interacting", cefr: "B1", dominantMode: "recall",
      canDo: "Verbs with people: ことわります しょうかいします つたえます ゆるします まねきます いわいます.",
      items: [
        { id: "ja-u64l2-kotowarimasu", type: "vocab", front: "ことわります", reading: "kotowarimasu", meaning: "refuse", example: { jp: "ていねいにことわります。", en: "I politely refuse." }, accept: ["decline", "turn down"] },
        { id: "ja-u64l2-shokaishimasu", type: "vocab", front: "しょうかいします", reading: "shōkaishimasu", meaning: "introduce", example: { jp: "ともだちをしょうかいします。", en: "I introduce a friend." }, accept: ["present"] },
        { id: "ja-u64l2-tsutaemasu", type: "vocab", front: "つたえます", reading: "tsutaemasu", meaning: "convey", example: { jp: "きもちをつたえます。", en: "I convey my feelings." }, accept: ["tell", "pass on"] },
        { id: "ja-u64l2-yurushimasu", type: "vocab", front: "ゆるします", reading: "yurushimasu", meaning: "forgive", example: { jp: "かれをゆるします。", en: "I forgive him." }, accept: ["allow", "permit"] },
        { id: "ja-u64l2-manekimasu", type: "vocab", front: "まねきます", reading: "manekimasu", meaning: "invite", example: { jp: "うちにともだちをまねきます。", en: "I invite a friend to my home." }, accept: ["welcome", "have over"] },
        { id: "ja-u64l2-iwaimasu", type: "vocab", front: "いわいます", reading: "iwaimasu", meaning: "celebrate", example: { jp: "そつぎょうをいわいます。", en: "I celebrate the graduation." }, accept: ["congratulate"] },
      ],
    },
  ],
};
