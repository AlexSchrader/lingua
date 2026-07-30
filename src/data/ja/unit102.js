// Unit 102 — ぶんぽう・B1・4 ("Grammar B1·4") — B1 / JLPT N3 — fourth & final core
// N3 grammar unit. Same word-like-grammar model as Units 99–101. Rounds out the
// high-frequency N3 patterns (change, limit, obligation, report, regret) not already
// taught through A2. All 12 fronts collision-checked against the 101-unit corpus.
// Naturalness queued for the batch native-speaker review.
export const UNIT102 = {
  id: "ja-u102", lang: "ja", title: "ぶんぽう・B1・4", order: 102, stage: "b1",
  lessons: [
    {
      id: "ja-u102l1", unit: 102, lesson: 1, title: "Change, limit & obligation", cefr: "B1", dominantMode: "recall",
      canDo: "Track change and duty: につれて かぎり しだい ばかりか ないと ことになる.",
      items: [
        { id: "ja-u102l1-nitsurete", type: "vocab", front: "につれて", reading: "nitsurete", meaning: "as X changes", example: { jp: "あきになるにつれて、さむくなります。", en: "As autumn comes, it gets colder." }, accept: ["along with", "in proportion as"], hint: "(verb dict / noun) につれて = two things change together: Xにつれて、Yも… = 'as X, Y follows'." },
        { id: "ja-u102l1-kagiri", type: "vocab", front: "かぎり", reading: "kagiri", meaning: "as long as / to the extent", example: { jp: "できるかぎり、がんばります。", en: "I'll try as hard as I possibly can." }, accept: ["so far as", "the limit of"], hint: "(verb dict / noun の) かぎり = 'to the limit of…': できるかぎり = as much as one can. Marks the boundary." },
        { id: "ja-u102l1-shidai", type: "vocab", front: "しだい", reading: "shidai", meaning: "depending on / as soon as", example: { jp: "あしたのよていは、てんきしだいです。", en: "Tomorrow's plan depends on the weather." }, accept: ["up to", "the moment that"], hint: "(noun) しだい = 'depends on X'. (verb stem) しだい = 'as soon as…': つきしだい = the moment I arrive." },
        { id: "ja-u102l1-bakarika", type: "vocab", front: "ばかりか", reading: "bakarika", meaning: "not only but also", example: { jp: "かれはえいごばかりか、にほんごもはなせます。", en: "He can speak not only English but also Japanese." }, accept: ["as well as", "on top of"], hint: "(noun / plain) ばかりか = 'not only X — even Y (more so)': the second thing outdoes the first. Pairs with も." },
        { id: "ja-u102l1-naito", type: "vocab", front: "ないと", reading: "naito", meaning: "have to / must", example: { jp: "もうねないと、あしたおきられません。", en: "I have to sleep now, or I won't be able to get up tomorrow." }, accept: ["got to", "otherwise"], hint: "(verb ない) と = 'if I don't…, (trouble)' → 'I have to'. Often left hanging: もうねないと。 = 'I really should sleep.'" },
        { id: "ja-u102l1-kotoninaru", type: "vocab", front: "ことになる", reading: "kotoninaru", meaning: "it's decided that", example: { jp: "らいげつ、にほんではたらくことになりました。", en: "It's been decided that I'll work in Japan next month." }, accept: ["it turns out that", "arranged that"], hint: "(verb dict) ことになる = an OUTSIDE decision/arrangement (not your own choice — that's ことにする)." },
      ],
    },
    {
      id: "ja-u102l2", unit: 102, lesson: 2, title: "Report, hindsight & regret", cefr: "B1", dominantMode: "recall",
      canDo: "Report and reflect: とか っけ わけではない かのように ばよかった べきではない.",
      items: [
        { id: "ja-u102l2-toka", type: "vocab", front: "とか", reading: "toka", meaning: "things like / and such", example: { jp: "あさは、おちゃとかコーヒーをのみます。", en: "In the morning I drink tea, coffee, and the like." }, accept: ["or something", "among other things"], hint: "(noun) とか = loose listing, 'things like X and Y'. Softer/vaguer than と — leaves the list open." },
        { id: "ja-u102l2-kke", type: "vocab", front: "っけ", reading: "kke", meaning: "what was it again?", example: { jp: "あのひとのなまえは、なんだっけ。", en: "What was that person's name again?" }, accept: ["was it?", "let me recall"], hint: "(plain + だ) っけ = digging up a half-remembered fact: なんだっけ = 'what was it again?'. Casual, to self or a friend." },
        { id: "ja-u102l2-wakedewanai", type: "vocab", front: "わけではない", reading: "wakedewanai", meaning: "it's not that…", example: { jp: "にほんごがぜんぶわかるわけではない。", en: "It's not that I understand all of Japanese." }, accept: ["doesn't mean that", "not necessarily"], hint: "(plain) わけではない softly denies a conclusion: 'it's not (the case) that…'. Walks back an overstatement." },
        { id: "ja-u102l2-kanoyoni", type: "vocab", front: "かのように", reading: "kanoyōni", meaning: "as if", example: { jp: "かれは、なんでもしっているかのようにはなします。", en: "He talks as if he knows everything." }, accept: ["as though", "like"], hint: "(plain) かのように = 'as if (it were so)' — but it isn't. Stronger, more literary than みたい/よう." },
        { id: "ja-u102l2-bayokatta", type: "vocab", front: "ばよかった", reading: "bayokatta", meaning: "should have", example: { jp: "はやくくすりをのめばよかった。", en: "I should have taken the medicine sooner." }, accept: ["wish I had", "it would've been good if"], hint: "(verb ば) よかった = regret over the road not taken: のめばよかった = 'I should have taken it.' Looks back with a wish." },
        { id: "ja-u102l2-bekidewanai", type: "vocab", front: "べきではない", reading: "bekidewanai", meaning: "shouldn't", example: { jp: "がっこうをやすむべきではない。", en: "You shouldn't skip school." }, accept: ["ought not to", "must not"], hint: "(verb dict) べきではない = the negative of べき: 'ought not to'. A firm 'shouldn't', stronger than ないほうがいい." },
      ],
    },
  ],
};
