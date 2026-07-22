// Unit 99 — ぶんぽう・B1・1 ("Grammar B1·1") — B1 / JLPT N3 — the first B1 unit.
// Registered in index.js (new content lands directly in UNITS). N3 grammar modeled
// the safe word-like way A2's Unit 30 uses: each pattern is a vocab item whose example
// carries it, kept mostly on noun / な-adjective / です clauses; a few lean on the
// plain forms already taught in Unit 44 (わかる, いった) — so it depends on U44, not on
// any new scaffolding. Every front collision-checked against the 98-unit corpus.
// Naturalness (register, idiomatic fit) is queued for the batch native-speaker review.
export const UNIT99 = {
  id: "ja-u99", lang: "ja", title: "ぶんぽう・B1・1", order: 99, stage: "b1",
  lessons: [
    {
      id: "ja-u99l1", unit: 99, lesson: 1, title: "Cause & concession", cefr: "B1", dominantMode: "recall",
      canDo: "Give causes and concessions: せいで せいか おかげで くせに わりに ように.",
      items: [
        { id: "ja-u99l1-seide", type: "vocab", front: "せいで", reading: "seide", meaning: "because of (blame)", example: { jp: "びょうきのせいで、しごとをやすみました。", en: "Because of illness, I took time off work." }, accept: ["due to", "on account of"], hint: "…せいで pins a BAD result on a cause: (noun) の せいで. Its positive twin is おかげで." },
        { id: "ja-u99l1-seika", type: "vocab", front: "せいか", reading: "seika", meaning: "perhaps because", example: { jp: "つかれのせいか、あたまがいたいです。", en: "Maybe because I'm tired, my head hurts." }, accept: ["maybe due to", "possibly because"], hint: "…せいか = せい (cause) + か (uncertainty): 'maybe it's because…'. Softer, guessing, than せいで." },
        { id: "ja-u99l1-okagede", type: "vocab", front: "おかげで", reading: "okagede", meaning: "thanks to", example: { jp: "せんせいのおかげで、にほんごがじょうずになりました。", en: "Thanks to my teacher, my Japanese got good." }, accept: ["owing to", "because of (good)"], hint: "…おかげで credits a GOOD result to a cause — the positive counterpart of せいで." },
        { id: "ja-u99l1-kuseni", type: "vocab", front: "くせに", reading: "kuseni", meaning: "even though (reproach)", example: { jp: "こどものくせに、むずかしいことばをつかいます。", en: "Even though he's a kid, he uses difficult words." }, accept: ["despite", "and yet"], hint: "…くせに = のに with an edge of blame/scorn. (noun) の くせに. Not for neutral 'even though' (use のに)." },
        { id: "ja-u99l1-warini", type: "vocab", front: "わりに", reading: "warini", meaning: "considering / for", example: { jp: "ねだんのわりに、おいしいです。", en: "For the price, it's tasty." }, accept: ["for (a)", "relatively"], hint: "…わりに = 'for / considering': the result is more than the cause would suggest. (noun) の わりに." },
        { id: "ja-u99l1-yoni", type: "vocab", front: "ように", reading: "yōni", meaning: "so that / like", example: { jp: "みんながわかるように、ゆっくりはなします。", en: "I speak slowly so that everyone understands." }, accept: ["in order that", "as"], hint: "(verb) ように = 'so that…': ties an action to its aim. Also このように = 'like this'." },
      ],
    },
    {
      id: "ja-u99l2", unit: 99, lesson: 2, title: "Impression & emphasis", cefr: "B1", dominantMode: "recall",
      canDo: "Add impression and emphasis: っぽい まるで むしろ こそ さえ ものだ.",
      items: [
        { id: "ja-u99l2-ppoi", type: "vocab", front: "っぽい", reading: "ppoi", meaning: "-ish / seems", example: { jp: "このおちゃはみずっぽいです。", en: "This tea is watery (weak)." }, accept: ["like", "tends to"], hint: "(noun) + っぽい = 'has the feel of…': みずっぽい = watery, こどもっぽい = childish." },
        { id: "ja-u99l2-marude", type: "vocab", front: "まるで", reading: "marude", meaning: "just like / as if", example: { jp: "まるでふゆのようにさむいです。", en: "It's cold, just like winter." }, accept: ["as though", "exactly like"], hint: "まるで … よう/みたい = 'just like…'. まるで sets up the comparison; よう finishes it." },
        { id: "ja-u99l2-mushiro", type: "vocab", front: "むしろ", reading: "mushiro", meaning: "rather / if anything", example: { jp: "きょうよりあしたのほうが、むしろさむいです。", en: "If anything, tomorrow is colder than today." }, accept: ["instead", "sooner"], hint: "むしろ = 'rather / if anything' — picks the second option as truer. Pairs with より (than)." },
        { id: "ja-u99l2-koso", type: "vocab", front: "こそ", reading: "koso", meaning: "for sure / precisely", example: { jp: "こんどこそ、がんばります。", en: "This time for sure, I'll give it my all." }, accept: ["indeed", "the very"], hint: "(noun) + こそ emphasizes it: こんど こそ = 'THIS time (for sure)'. Also こちらこそ = 'likewise'." },
        { id: "ja-u99l2-sae", type: "vocab", front: "さえ", reading: "sae", meaning: "even", example: { jp: "せんせいさえ、しりませんでした。", en: "Even the teacher didn't know." }, accept: ["so much as", "not even"], hint: "(noun) + さえ = 'even…' — marks a surprising extreme (even the one you'd least expect). Stronger than も." },
        { id: "ja-u99l2-monoda", type: "vocab", front: "ものだ", reading: "monoda", meaning: "used to (nostalgia)", example: { jp: "むかしは、よくうみへいったものだ。", en: "I used to go to the sea a lot." }, accept: ["would often", "how things were"], hint: "(past verb) ものだ recalls how things used to be: よく…したものだ = 'I used to…'. Warm, reminiscing." },
      ],
    },
  ],
};
