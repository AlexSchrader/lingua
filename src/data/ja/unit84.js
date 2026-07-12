// Unit 84 — ぶんぽう⑤ りゆう・けいしきめいし ("Grammar V — reason, formal nouns & obligation") — B1 / N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 reason/result patterns, こと／もの／わけ／はず formal-noun patterns, and the
// obligation/permission set. Function-word/pattern vocab. HIGHEST naturalness risk → native review.
export const UNIT84 = {
  id: "ja-u84", lang: "ja", title: "ぶんぽう⑤", order: 84, stage: "b1",
  lessons: [
    {
      id: "ja-u84l1", unit: 84, lesson: 1, title: "Reason & result", cefr: "B1", dominantMode: "recall",
      canDo: "Recognize reason patterns: ～おかげで ～せいで ～ことから ～だけに ～あまりに ～ものだから.",
      items: [
        { id: "ja-u84l1-okagede", type: "vocab", front: "おかげで", reading: "okagede", meaning: "thanks to", example: { jp: "先生のおかげで、ごうかくしました。", en: "Thanks to the teacher, I passed." }, accept: ["owing to (good)"], hint: "～おかげで = thanks to (a positive cause / good result)." },
        { id: "ja-u84l1-seide", type: "vocab", front: "せいで", reading: "seide", meaning: "because of (blame)", example: { jp: "あめのせいで、おくれました。", en: "Because of the rain, I was late." }, accept: ["due to (bad)", "on account of"], hint: "～せいで = because of (a negative cause / blame). ⇄ おかげで." },
        { id: "ja-u84l1-kotokara", type: "vocab", front: "ことから", reading: "kotokara", meaning: "from the fact that", example: { jp: "まちがいがおおいことから、ちゅういされました。", en: "Because there were many mistakes, I was warned." }, accept: ["because", "judging from"], hint: "～ことから = from the fact that / because (leads to a conclusion)." },
        { id: "ja-u84l1-dakeni", type: "vocab", front: "だけに", reading: "dakeni", meaning: "precisely because", example: { jp: "プロだけに、じょうずです。", en: "Being a pro, he's skilled (as you'd expect)." }, accept: ["as expected of"], hint: "～だけに = precisely because / as one would expect of." },
        { id: "ja-u84l1-amarini", type: "vocab", front: "あまりに", reading: "amarini", meaning: "too / excessively", example: { jp: "あまりにさむくて、そとに出ません。", en: "It's so cold that I won't go outside." }, accept: ["so much that"], hint: "あまりに～ = too / excessively (so much that a result follows)." },
        { id: "ja-u84l1-monodakara", type: "vocab", front: "ものだから", reading: "monodakara", meaning: "because (excuse)", example: { jp: "いそがしかったものだから、れんらくできませんでした。", en: "Because I was busy, I couldn't get in touch." }, accept: ["the reason is"], hint: "～ものだから = because (giving an excuse or explanation)." },
      ],
    },
    {
      id: "ja-u84l2", unit: 84, lesson: 2, title: "こと patterns", cefr: "B1", dominantMode: "recall",
      canDo: "Recognize こと patterns: ～ことがある ～ことにする ～ことになる ～ことができる ～ことだ ～ということ.",
      items: [
        { id: "ja-u84l2-kotogaaru", type: "vocab", front: "ことがある", reading: "kotogaaru", meaning: "have done / there are times", example: { jp: "日本にいったことがあります。", en: "I have been to Japan." }, accept: ["experience of", "sometimes"], hint: "～たことがある = have done before (experience); ～ことがある = there are times when." },
        { id: "ja-u84l2-kotonisuru", type: "vocab", front: "ことにする", reading: "kotonisuru", meaning: "decide to", example: { jp: "まいにちはしることにします。", en: "I've decided to run every day." }, accept: ["make a decision"], hint: "～ことにする = decide to (your own choice). ⇄ ことになる." },
        { id: "ja-u84l2-kotoninaru", type: "vocab", front: "ことになる", reading: "kotoninaru", meaning: "it's decided that", example: { jp: "らいげつ、てんきんすることになりました。", en: "It's been decided that I'll transfer next month." }, accept: ["turn out that", "arranged"], hint: "～ことになる = it's decided / arranged that (by circumstances or others)." },
        { id: "ja-u84l2-kotogadekiru", type: "vocab", front: "ことができる", reading: "kotogadekiru", meaning: "can / be able to", example: { jp: "かんじを読むことができます。", en: "I can read kanji." }, accept: ["be capable of"], hint: "～ことができる = can / be able to (formal potential)." },
        { id: "ja-u84l2-kotoda", type: "vocab", front: "ことだ", reading: "kotoda", meaning: "should / best to (advice)", example: { jp: "けんこうのためには、よく寝ることだ。", en: "For your health, you should sleep well." }, accept: ["the thing to do is"], hint: "～ことだ = should / the best thing is to (direct advice)." },
        { id: "ja-u84l2-toiukoto", type: "vocab", front: "ということ", reading: "toiukoto", meaning: "the fact that / that", example: { jp: "休みだということをわすれました。", en: "I forgot that it was a holiday." }, accept: ["it means that"], hint: "～ということ = the fact that / that (turns a statement into a noun)." },
      ],
    },
    {
      id: "ja-u84l3", unit: 84, lesson: 3, title: "もの・わけ・はず", cefr: "B1", dominantMode: "recall",
      canDo: "Recognize noun patterns: ～ものだ ～ものではない ～わけではない ～わけがない ～はずだ ～どころか.",
      items: [
        { id: "ja-u84l3-monoda", type: "vocab", front: "ものだ", reading: "monoda", meaning: "general truth / used to", example: { jp: "むかしはよくあそんだものだ。", en: "I used to play a lot back then." }, accept: ["how things are"], hint: "～ものだ = a general truth, or nostalgic 'used to'." },
        { id: "ja-u84l3-monodewanai", type: "vocab", front: "ものではない", reading: "monodewanai", meaning: "shouldn't (social norm)", example: { jp: "そんなことをいうものではない。", en: "You shouldn't say such things." }, accept: ["it's not done"], hint: "～ものではない = shouldn't (goes against a social norm)." },
        { id: "ja-u84l3-wakedewanai", type: "vocab", front: "わけではない", reading: "wakedewanai", meaning: "it's not that ~", example: { jp: "きらいなわけではない。", en: "It's not that I dislike it." }, accept: ["not necessarily"], hint: "～わけではない = it's not that ~ / not necessarily (softens a denial)." },
        { id: "ja-u84l3-wakeganai", type: "vocab", front: "わけがない", reading: "wakeganai", meaning: "there's no way that ~", example: { jp: "かれが知らないわけがない。", en: "There's no way he doesn't know." }, accept: ["impossible that"], hint: "～わけがない = there's no way that ~ (it's impossible)." },
        { id: "ja-u84l3-hazuda", type: "vocab", front: "はずだ", reading: "hazuda", meaning: "should be / expected", example: { jp: "もうついたはずです。", en: "They should have arrived by now." }, accept: ["ought to be", "supposed to"], hint: "～はずだ = should be / expected to be (a logical expectation)." },
        { id: "ja-u84l3-dokoroka", type: "vocab", front: "どころか", reading: "dokoroka", meaning: "far from ~ / on the contrary", example: { jp: "やすむどころか、もっといそがしくなった。", en: "Far from resting, I got even busier." }, accept: ["let alone", "much less"], hint: "～どころか = far from ~ / on the contrary (the opposite happened)." },
      ],
    },
    {
      id: "ja-u84l4", unit: 84, lesson: 4, title: "Obligation & permission", cefr: "B1", dominantMode: "recall",
      canDo: "Recognize obligation patterns: ～なければならない ～なくてもいい ～てもいい ～てはいけない ～ないといけない ～ずに.",
      items: [
        { id: "ja-u84l4-nakerebanaranai", type: "vocab", front: "なければならない", reading: "nakerebanaranai", meaning: "must / have to", example: { jp: "宿題をしなければなりません。", en: "I have to do my homework." }, accept: ["obliged to"], hint: "～なければならない = must / have to. Casual: ～なきゃ." },
        { id: "ja-u84l4-nakutemoii", type: "vocab", front: "なくてもいい", reading: "nakutemoii", meaning: "don't have to", example: { jp: "あした来なくてもいいです。", en: "You don't have to come tomorrow." }, accept: ["need not"], hint: "～なくてもいい = don't have to / need not." },
        { id: "ja-u84l4-temoii", type: "vocab", front: "てもいい", reading: "temoii", meaning: "may / it's OK to", example: { jp: "ここにすわってもいいですか。", en: "May I sit here?" }, accept: ["allowed to"], hint: "～てもいい = may / it's OK to (permission)." },
        { id: "ja-u84l4-tewaikenai", type: "vocab", front: "てはいけない", reading: "tewaikenai", meaning: "must not", example: { jp: "ここでたばこをすってはいけません。", en: "You must not smoke here." }, accept: ["not allowed to", "forbidden"], hint: "～てはいけない = must not / not allowed. Casual: ～ちゃだめ." },
        { id: "ja-u84l4-naitoikenai", type: "vocab", front: "ないといけない", reading: "naitoikenai", meaning: "have to / must", example: { jp: "くすりをのまないといけません。", en: "I have to take medicine." }, accept: ["should", "need to"], hint: "～ないといけない = have to / must (≈ なければならない, more conversational)." },
        { id: "ja-u84l4-zuni", type: "vocab", front: "ずに", reading: "zuni", meaning: "without doing", example: { jp: "あさごはんを食べずに、出かけました。", en: "I went out without eating breakfast." }, accept: ["instead of doing"], hint: "～ずに = without doing (formal ～ないで). する → せずに." },
      ],
    },
  ],
};
