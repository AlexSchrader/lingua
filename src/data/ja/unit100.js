// Unit 100 — ぶんぽう・B1・2 ("Grammar B1·2") — B1 / JLPT N3 — the second B1 unit.
// Continues Unit 99's approach: each N3 pattern is a word-like vocab item whose
// example carries it (the A2 Unit 30 model), kept on noun / plain-form clauses that
// lean only on vocab already taught through A2 — so it adds no new scaffolding.
// Every front collision-checked against the 99-unit corpus (incl. Unit 99).
// Naturalness (register, idiomatic fit) is queued for the batch native-speaker review.
export const UNIT100 = {
  id: "ja-u100", lang: "ja", title: "ぶんぽう・B1・2", order: 100, stage: "b1",
  lessons: [
    {
      id: "ja-u100l1", unit: 100, lesson: 1, title: "Time & manner", cefr: "B1", dominantMode: "recall",
      canDo: "Frame when and how: うちに たびに とおりに さいちゅう ついでに かわりに.",
      items: [
        { id: "ja-u100l1-uchini", type: "vocab", front: "うちに", reading: "uchini", meaning: "while / before (it changes)", example: { jp: "あかるいうちに、かえりましょう。", en: "Let's head home while it's still light." }, accept: ["during", "before it's too late"], hint: "(plain) うちに = do it WHILE a state still holds: あかるいうちに = while it's still light. Beat the change." },
        { id: "ja-u100l1-tabini", type: "vocab", front: "たびに", reading: "tabini", meaning: "every time", example: { jp: "このしゃしんをみるたびに、むかしをおもいだします。", en: "Every time I see this photo, I remember the old days." }, accept: ["each time", "whenever"], hint: "(verb dict / noun の) たびに = 'every time…': みるたびに = every time I see it." },
        { id: "ja-u100l1-torini", type: "vocab", front: "とおりに", reading: "tōrini", meaning: "just as / exactly as", example: { jp: "せつめいのとおりに、つくりました。", en: "I made it exactly as the instructions said." }, accept: ["in the way that", "according to"], hint: "(noun の / plain) とおりに = 'just as…': せつめいのとおりに = just as explained. No deviation." },
        { id: "ja-u100l1-saichu", type: "vocab", front: "さいちゅう", reading: "saichū", meaning: "in the middle of", example: { jp: "しょくじのさいちゅうに、でんわがきました。", en: "Right in the middle of dinner, a call came." }, accept: ["right in the midst of", "while doing"], hint: "(noun の / ~ている) さいちゅう = 'smack in the middle of' an action — more 'interrupted' than plain 中(ちゅう)." },
        { id: "ja-u100l1-tsuideni", type: "vocab", front: "ついでに", reading: "tsuideni", meaning: "while you're at it", example: { jp: "かいもののついでに、ほんやによりました。", en: "While out shopping, I stopped by the bookstore." }, accept: ["on the same occasion", "since you're doing X"], hint: "(noun の / verb) ついでに = do a second thing on the SAME trip: かいもののついでに = while I was out shopping anyway." },
        { id: "ja-u100l1-kawarini", type: "vocab", front: "かわりに", reading: "kawarini", meaning: "instead of / in exchange", example: { jp: "コーヒーのかわりに、おちゃをのみました。", en: "Instead of coffee, I drank tea." }, accept: ["in place of", "to make up for"], hint: "(noun の / plain) かわりに = 'instead of / in return for': Xのかわりにｙ = Y in place of X." },
      ],
    },
    {
      id: "ja-u100l2", unit: 100, lesson: 2, title: "Stance & judgment", cefr: "B1", dominantMode: "recall",
      canDo: "Take a stance: べき について によって として にとって かどうか.",
      items: [
        { id: "ja-u100l2-beki", type: "vocab", front: "べき", reading: "beki", meaning: "should / ought to", example: { jp: "がくせいは、べんきょうするべきです。", en: "Students should study." }, accept: ["must", "ought"], hint: "(verb dict) べき = a strong 'should' — the right thing to do: するべき/すべき. Not for gentle advice (use ほうがいい)." },
        { id: "ja-u100l2-nitsuite", type: "vocab", front: "について", reading: "nitsuite", meaning: "about / concerning", example: { jp: "にほんのれきしについて、はなします。", en: "I'll talk about Japanese history." }, accept: ["regarding", "on the topic of"], hint: "(noun) について = 'about / regarding' — marks the topic of talking, writing, or thinking." },
        { id: "ja-u100l2-niyotte", type: "vocab", front: "によって", reading: "niyotte", meaning: "depending on / by", example: { jp: "ひとによって、かんがえがちがいます。", en: "Opinions differ depending on the person." }, accept: ["according to", "by means of"], hint: "(noun) によって = 'depending on…' (it varies) OR 'by (an agent)'. ひとによって = it varies by person." },
        { id: "ja-u100l2-toshite", type: "vocab", front: "として", reading: "toshite", meaning: "as / in the role of", example: { jp: "りゅうがくせいとして、にほんにきました。", en: "I came to Japan as an exchange student." }, accept: ["in the capacity of", "being"], hint: "(noun) として = 'as / in the role of': りゅうがくせいとして = as an exchange student." },
        { id: "ja-u100l2-nitotte", type: "vocab", front: "にとって", reading: "nitotte", meaning: "for / to (someone)", example: { jp: "わたしにとって、かぞくがいちばんたいせつです。", en: "For me, family is the most important thing." }, accept: ["from the viewpoint of", "as far as X is concerned"], hint: "(noun) にとって = 'for X / from X's standpoint': わたしにとって = for me. About importance/judgment, not benefit." },
        { id: "ja-u100l2-kadoka", type: "vocab", front: "かどうか", reading: "kadōka", meaning: "whether or not", example: { jp: "いくかどうか、まだきめていません。", en: "I haven't decided yet whether or not to go." }, accept: ["if or not", "whether"], hint: "(plain) かどうか = embeds a yes/no question: いくかどうか = whether or not (I) go. Before わかる/きめる/しる." },
      ],
    },
  ],
};
