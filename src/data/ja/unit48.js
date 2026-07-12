// Unit 48 — せつぞく・ふくし ("Connectives & degree") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// Discourse glue: N3 connectives that link whole sentences + degree adverbs that grade
// intensity — the words that turn A2 sentences into B1 paragraphs. They modify grammar
// the learner already has, so examples stay inside A1+A2. Native review queued.
export const UNIT48 = {
  id: "ja-u48", lang: "ja", title: "せつぞく・ふくし", order: 48, stage: "b1",
  lessons: [
    {
      id: "ja-u48l1", unit: 48, lesson: 1, title: "Connectives", cefr: "B1", dominantMode: "recall",
      canDo: "Link ideas across sentences: けれども また さらに たとえば したがって ただし.",
      items: [
        { id: "ja-u48l1-keredomo", type: "vocab", front: "けれども", reading: "keredomo", meaning: "however", example: { jp: "むずかしいです。けれどもがんばります。", en: "It's hard. However, I'll do my best." }, accept: ["but", "although"], hint: "けれども is a softer, more written 'but' than しかし." },
        { id: "ja-u48l1-mata", type: "vocab", front: "また", reading: "mata", meaning: "also", example: { jp: "また、あしたきます。", en: "Also, I'll come tomorrow." }, accept: ["again", "moreover"] },
        { id: "ja-u48l1-sarani", type: "vocab", front: "さらに", reading: "sarani", meaning: "furthermore", example: { jp: "さらにべんきょうします。", en: "I'll study even more." }, accept: ["moreover", "even more"] },
        { id: "ja-u48l1-tatoeba", type: "vocab", front: "たとえば", reading: "tatoeba", meaning: "for example", example: { jp: "たとえば、すしがすきです。", en: "For example, I like sushi." }, accept: ["for instance"] },
        { id: "ja-u48l1-shitagatte", type: "vocab", front: "したがって", reading: "shitagatte", meaning: "therefore", example: { jp: "あめです。したがっていきません。", en: "It's raining. Therefore I won't go." }, accept: ["thus", "consequently"] },
        { id: "ja-u48l1-tadashi", type: "vocab", front: "ただし", reading: "tadashi", meaning: "however", example: { jp: "いきます。ただし、あしたかえります。", en: "I'll go. However, I'll return tomorrow." }, accept: ["provided that", "but note"], hint: "ただし adds a condition/exception, like 'provided that'." },
      ],
    },
    {
      id: "ja-u48l2", unit: 48, lesson: 2, title: "Degree", cefr: "B1", dominantMode: "recall",
      canDo: "Grade intensity: かなり けっこう ずいぶん じつは たしか おそらく.",
      items: [
        { id: "ja-u48l2-kanari", type: "vocab", front: "かなり", reading: "kanari", meaning: "quite", example: { jp: "かなりむずかしいです。", en: "It's quite difficult." }, accept: ["fairly", "considerably"] },
        { id: "ja-u48l2-kekko", type: "vocab", front: "けっこう", reading: "kekkō", meaning: "fairly", example: { jp: "けっこうたのしいです。", en: "It's fairly fun." }, accept: ["pretty", "quite"], hint: "けっこう also means 'no thank you' when declining — tone tells them apart." },
        { id: "ja-u48l2-zuibun", type: "vocab", front: "ずいぶん", reading: "zuibun", meaning: "considerably", example: { jp: "ずいぶんあるきました。", en: "I walked quite a lot." }, accept: ["a great deal", "very"] },
        { id: "ja-u48l2-jitsuwa", type: "vocab", front: "じつは", reading: "jitsuwa", meaning: "actually", example: { jp: "じつは、たべました。", en: "Actually, I ate it." }, accept: ["to tell the truth", "in fact"] },
        { id: "ja-u48l2-tashika", type: "vocab", front: "たしか", reading: "tashika", meaning: "if I recall", example: { jp: "たしか、あしたです。", en: "If I remember right, it's tomorrow." }, accept: ["I think", "probably"], hint: "たしか (adverb) = 'if I recall correctly'; たしかな (adj) = 'certain'." },
        { id: "ja-u48l2-osoraku", type: "vocab", front: "おそらく", reading: "osoraku", meaning: "probably", example: { jp: "おそらくあめです。", en: "It'll probably rain." }, accept: ["likely", "perhaps"] },
      ],
    },
  ],
};
