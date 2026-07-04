// Unit 16 — ようおん ("Yōon", combination kana) — Pre-A1 (the writing system)
// The contracted sounds: a consonant-i kana + a small ゃ/ゅ/ょ. These aren't new
// glyphs — they're a RULE: the small ゃゅょ shrink the i-kana's vowel into ya/yu/yo
// (き → きゃ/きゅ/きょ). `type: "kana"` with a two-glyph front; taught reading-based
// (no trace — they have no single stroke). They already turn up in known words
// (きょう, じゅう, ニュース), so this makes the pattern explicit.
//
// NOTE: `order: 16` is this unit's permanent slot (after the kanji units). Lesson 6
// carries only 3 cards (one ゃ/ゅ/ょ triple) — the lint density advisory there is
// WAIVED on purpose: yōon come in ゃゅょ triples, and 33 kana split cleanly as
// 6/6/6/6/6/3. Keeping triples intact, the only alternative is a 9-card lesson,
// which is worse, so the trailing 3-card lesson stays.
export const UNIT16 = {
  id: "ja-u16",
  lang: "ja",
  title: "ようおん",
  order: 16,
  stage: "pre-a1",
  lessons: [
    // Lesson 1: k + s rows
    {
      id: "ja-u16l1",
      unit: 16,
      lesson: 1,
      title: "きゃ・しゃ rows",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the yōon きゃきゅきょ and しゃしゅしょ — a kana + small ゃゅょ makes one contracted sound.",
      items: [
        { id: "ja-u16l1-kya", type: "kana", front: "きゃ", reading: "kya", meaning: null, example: null, hint: "き + small ゃ = kya. The small ゃ shrinks the き's vowel — き(ki) + や(ya) blend into one beat, kya." },
        { id: "ja-u16l1-kyu", type: "kana", front: "きゅ", reading: "kyu", meaning: null, example: null, hint: "き + small ゅ = kyu (one beat)." },
        { id: "ja-u16l1-kyo", type: "kana", front: "きょ", reading: "kyo", meaning: null, example: null, hint: "き + small ょ = kyo. You've seen it in きょう (today)." },
        { id: "ja-u16l1-sha", type: "kana", front: "しゃ", reading: "sha", meaning: null, example: null, hint: "し + small ゃ = sha (not 'shi-ya')." },
        { id: "ja-u16l1-shu", type: "kana", front: "しゅ", reading: "shu", meaning: null, example: null, hint: "し + small ゅ = shu." },
        { id: "ja-u16l1-sho", type: "kana", front: "しょ", reading: "sho", meaning: null, example: null, hint: "し + small ょ = sho." },
      ],
    },
    // Lesson 2: ch + n rows
    {
      id: "ja-u16l2",
      unit: 16,
      lesson: 2,
      title: "ちゃ・にゃ rows",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read ちゃちゅちょ and にゃにゅにょ.",
      items: [
        { id: "ja-u16l2-cha", type: "kana", front: "ちゃ", reading: "cha", meaning: null, example: null, hint: "ち + small ゃ = cha (as in お茶, ocha)." },
        { id: "ja-u16l2-chu", type: "kana", front: "ちゅ", reading: "chu", meaning: null, example: null, hint: "ち + small ゅ = chu." },
        { id: "ja-u16l2-cho", type: "kana", front: "ちょ", reading: "cho", meaning: null, example: null, hint: "ち + small ょ = cho (as in ちょっと, chotto)." },
        { id: "ja-u16l2-nya", type: "kana", front: "にゃ", reading: "nya", meaning: null, example: null, hint: "に + small ゃ = nya." },
        { id: "ja-u16l2-nyu", type: "kana", front: "にゅ", reading: "nyu", meaning: null, example: null, hint: "に + small ゅ = nyu (as in ニュース, nyūsu)." },
        { id: "ja-u16l2-nyo", type: "kana", front: "にょ", reading: "nyo", meaning: null, example: null, hint: "に + small ょ = nyo." },
      ],
    },
    // Lesson 3: h + m rows
    {
      id: "ja-u16l3",
      unit: 16,
      lesson: 3,
      title: "ひゃ・みゃ rows",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read ひゃひゅひょ and みゃみゅみょ.",
      items: [
        { id: "ja-u16l3-hya", type: "kana", front: "ひゃ", reading: "hya", meaning: null, example: null, hint: "ひ + small ゃ = hya (as in ひゃく, hyaku, 100)." },
        { id: "ja-u16l3-hyu", type: "kana", front: "ひゅ", reading: "hyu", meaning: null, example: null, hint: "ひ + small ゅ = hyu." },
        { id: "ja-u16l3-hyo", type: "kana", front: "ひょ", reading: "hyo", meaning: null, example: null, hint: "ひ + small ょ = hyo." },
        { id: "ja-u16l3-mya", type: "kana", front: "みゃ", reading: "mya", meaning: null, example: null, hint: "み + small ゃ = mya (rare)." },
        { id: "ja-u16l3-myu", type: "kana", front: "みゅ", reading: "myu", meaning: null, example: null, hint: "み + small ゅ = myu (rare)." },
        { id: "ja-u16l3-myo", type: "kana", front: "みょ", reading: "myo", meaning: null, example: null, hint: "み + small ょ = myo." },
      ],
    },
    // Lesson 4: r + g(voiced) rows
    {
      id: "ja-u16l4",
      unit: 16,
      lesson: 4,
      title: "りゃ・ぎゃ rows",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read りゃりゅりょ and the voiced ぎゃぎゅぎょ.",
      items: [
        { id: "ja-u16l4-rya", type: "kana", front: "りゃ", reading: "rya", meaning: null, example: null, hint: "り + small ゃ = rya." },
        { id: "ja-u16l4-ryu", type: "kana", front: "りゅ", reading: "ryu", meaning: null, example: null, hint: "り + small ゅ = ryu (as in りゅう, dragon)." },
        { id: "ja-u16l4-ryo", type: "kana", front: "りょ", reading: "ryo", meaning: null, example: null, hint: "り + small ょ = ryo (as in りょうり, ryōri, cooking)." },
        { id: "ja-u16l4-gya", type: "kana", front: "ぎゃ", reading: "gya", meaning: null, example: null, hint: "ぎ + small ゃ = gya. The dakuten on ぎ carries through." },
        { id: "ja-u16l4-gyu", type: "kana", front: "ぎゅ", reading: "gyu", meaning: null, example: null, hint: "ぎ + small ゅ = gyu (as in ぎゅうにゅう, milk)." },
        { id: "ja-u16l4-gyo", type: "kana", front: "ぎょ", reading: "gyo", meaning: null, example: null, hint: "ぎ + small ょ = gyo (as in ぎょうざ, gyōza)." },
      ],
    },
    // Lesson 5: j + b(voiced) rows
    {
      id: "ja-u16l5",
      unit: 16,
      lesson: 5,
      title: "じゃ・びゃ rows",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read じゃじゅじょ and びゃびゅびょ.",
      items: [
        { id: "ja-u16l5-ja", type: "kana", front: "じゃ", reading: "ja", meaning: null, example: null, hint: "じ + small ゃ = ja (as in じゃあ, well then)." },
        { id: "ja-u16l5-ju", type: "kana", front: "じゅ", reading: "ju", meaning: null, example: null, hint: "じ + small ゅ = ju (as in じゅう, ten, and ジュース)." },
        { id: "ja-u16l5-jo", type: "kana", front: "じょ", reading: "jo", meaning: null, example: null, hint: "じ + small ょ = jo (as in じょうず, skillful)." },
        { id: "ja-u16l5-bya", type: "kana", front: "びゃ", reading: "bya", meaning: null, example: null, hint: "び + small ゃ = bya (rare; as in さんびゃく, 300)." },
        { id: "ja-u16l5-byu", type: "kana", front: "びゅ", reading: "byu", meaning: null, example: null, hint: "び + small ゅ = byu (rare)." },
        { id: "ja-u16l5-byo", type: "kana", front: "びょ", reading: "byo", meaning: null, example: null, hint: "び + small ょ = byo (as in びょういん, hospital)." },
      ],
    },
    // Lesson 6: p(handakuten) row — the last three yōon
    {
      id: "ja-u16l6",
      unit: 16,
      lesson: 6,
      title: "ぴゃ row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the handakuten yōon ぴゃぴゅぴょ — that completes the set.",
      items: [
        { id: "ja-u16l6-pya", type: "kana", front: "ぴゃ", reading: "pya", meaning: null, example: null, hint: "ぴ + small ゃ = pya (the handakuten ゜ keeps the P; as in ろっぴゃく, 600)." },
        { id: "ja-u16l6-pyu", type: "kana", front: "ぴゅ", reading: "pyu", meaning: null, example: null, hint: "ぴ + small ゅ = pyu (often a sound effect — a whoosh)." },
        { id: "ja-u16l6-pyo", type: "kana", front: "ぴょ", reading: "pyo", meaning: null, example: null, hint: "ぴ + small ょ = pyo (as in ぴょんぴょん, hopping)." },
      ],
    },
  ],
};
