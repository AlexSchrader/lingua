// Unit 186 — きもち・こまやか (Emotion, subtle and mixed) — B2 / JLPT N2
// Block-2 house rules are documented in unit174.js.
//
// A1 gave うれしい/かなしい; B1 gave なやむ and あやふや. B2 is the band where a
// feeling gets a name precise enough that the listener knows what to do about it —
// きまずい (fix the room) is not ゆううつ (leave them alone) is not もどかしい
// (they want help but can't ask). Every lesson groups by what the feeling is
// pointed AT, because that is what tells the pairs apart.
export const UNIT186 = {
  id: "ja-u186",
  lang: "ja",
  title: "きもち・こまやか",
  order: 186,
  stage: "b2",
  lessons: [
    {
      id: "ja-u186l1",
      unit: 186,
      lesson: 1,
      title: "Low-level unease",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a small discomfort exactly, instead of calling everything しんぱい: きがかり もどかしい あせり きまずい てれくさい きょうしゅく.",
      items: [
        { id: "ja-u186l1-kigakari", type: "vocab", front: "きがかり", reading: "kigakari", meaning: "a nagging worry", example: { jp: "きがかりな ことが 一つ あって、よく ねむれませんでした。", en: "One thing was nagging at me and I didn't sleep well." }, accept: ["something on one's mind", "a lingering concern"] },
        { id: "ja-u186l1-modokashii", type: "vocab", front: "もどかしい", reading: "modokashii", meaning: "frustrating to watch", example: { jp: "言いたい ことが 言えない 人を 見て、もどかしく なりました。", en: "Watching someone unable to say what they meant left me frustrated." }, accept: ["exasperating", "makes you want to step in", "impatient"], hint: "もどかしい is frustration at SLOWNESS — yours or someone else's — when the answer is right there. あせり is the same feeling turned inward, with a clock on it." },
        { id: "ja-u186l1-aseri", type: "vocab", front: "あせり", reading: "aseri", meaning: "a rushed anxiety", example: { jp: "あせりから 出した 答えは、たいてい まちがって います。", en: "An answer given out of anxiety is usually wrong." }, accept: ["impatience", "feeling pressed", "panic to hurry"] },
        { id: "ja-u186l1-kimazui", type: "vocab", front: "きまずい", reading: "kimazui", meaning: "awkward between people", example: { jp: "けんかの あと、しばらく きまずい 空気が 続きました。", en: "After the argument, an awkward atmosphere hung about for a while." }, accept: ["uncomfortable", "strained", "an awkward silence"] },
        { id: "ja-u186l1-terekusai", type: "vocab", front: "てれくさい", reading: "terekusai", meaning: "embarrassing in a shy way", example: { jp: "ほめられるのは うれしいですが、少し てれくさいです。", en: "Being praised is nice, but a little embarrassing." }, accept: ["bashful", "sheepish", "self-conscious"] },
        { id: "ja-u186l1-kyoshuku", type: "vocab", front: "きょうしゅく", reading: "kyōshuku", meaning: "feeling one has imposed", example: { jp: "そこまで して いただいて、きょうしゅくです。", en: "You've gone to such lengths for me — I'm quite overwhelmed." }, accept: ["much obliged", "sorry to trouble you", "feeling small"] },
      ],
    },
    {
      id: "ja-u186l2",
      unit: 186,
      lesson: 2,
      title: "Heavier feeling",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a low mood precisely enough that someone knows how to respond: ゆううつ むなしい わびしい こころぼそい みじめ うしろめたい.",
      items: [
        { id: "ja-u186l2-yuutsu", type: "vocab", front: "ゆううつ", reading: "yūutsu", meaning: "low and heavy", example: { jp: "月曜の 朝は、どうしても ゆううつに なります。", en: "Monday mornings turn low and heavy no matter what." }, accept: ["gloomy", "depressed", "downcast"] },
        { id: "ja-u186l2-munashii", type: "vocab", front: "むなしい", reading: "munashii", meaning: "empty of meaning", example: { jp: "何を しても むなしく なる 時期が ありました。", en: "There was a period when everything I did felt hollow." }, drill: { jp: "きもちが むなしい。", en: "The feeling is empty." }, accept: ["hollow", "futile", "pointless"] },
        { id: "ja-u186l2-wabishii", type: "vocab", front: "わびしい", reading: "wabishii", meaning: "bleakly lonely", example: { jp: "一人で 食べる 夕食は、少し わびしいです。", en: "Dinner eaten alone is a little bleak." }, accept: ["desolate", "forlorn", "cheerless"], hint: "さびしい misses a person; わびしい is the bleakness of the scene itself — a cold room, a thin meal — whether or not anyone is missing." },
        { id: "ja-u186l2-kokorobosoi", type: "vocab", front: "こころぼそい", reading: "kokorobosoi", meaning: "uneasy without support", example: { jp: "知らない 町で 一人に なると、こころぼそく なります。", en: "Left alone in an unfamiliar town, I feel unmoored." }, accept: ["helpless", "anxious and alone", "daunted"] },
        { id: "ja-u186l2-mijime", type: "vocab", front: "みじめ", reading: "mijime", meaning: "wretched", example: { jp: "みんなの 前で できなくて、みじめな 気持ちに なりました。", en: "Failing in front of everyone left me feeling wretched." }, drill: { jp: "みじめに なりました。", en: "I felt wretched." }, accept: ["miserable", "humiliated", "pitiful"] },
        { id: "ja-u186l2-ushirometai", type: "vocab", front: "うしろめたい", reading: "ushirometai", meaning: "guilty about something hidden", example: { jp: "ほんとうの 理ゆうを 言わなかったので、うしろめたいです。", en: "I didn't give the real reason, so I feel guilty about it." }, accept: ["a bad conscience", "furtive", "ashamed"] },
      ],
    },
    {
      id: "ja-u186l3",
      unit: 186,
      lesson: 3,
      title: "Pointed at other people",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name feelings that are ABOUT someone else, including the ones people hide: しっと いきどおり けいべつ ほこらしい こころづよい せつじつ.",
      items: [
        { id: "ja-u186l3-shitto", type: "vocab", front: "しっと", reading: "shitto", meaning: "jealousy", example: { jp: "しっとして いる 自分に 気づいて、少し いやに なりました。", en: "Noticing my own jealousy, I didn't much like myself." }, accept: ["envy of a person", "being jealous"] },
        { id: "ja-u186l3-ikidori", type: "vocab", front: "いきどおり", reading: "ikidōri", meaning: "indignation", example: { jp: "立場の 上の 人が 下の 人を 悪く 言うのを 見て、いきどおりを おぼえました。", en: "Watching someone senior speak ill of a junior, I felt indignation." }, accept: ["righteous anger", "resentment at injustice"], hint: "おこる is anger at what was done to YOU; いきどおり is anger at what was done at all — it works fine when the victim is a stranger." },
        { id: "ja-u186l3-keibetsu", type: "vocab", front: "けいべつ", reading: "keibetsu", meaning: "contempt", example: { jp: "けいべつは 目に 出るので、かくせません。", en: "Contempt shows in the eyes; you can't hide it." }, accept: ["looking down on", "scorn", "disdain"] },
        { id: "ja-u186l3-hokorashii", type: "vocab", front: "ほこらしい", reading: "hokorashii", meaning: "proud on someone's behalf", example: { jp: "子どもの 名前が 読まれた とき、ほこらしく なりました。", en: "When my child's name was read out, I felt proud." }, drill: { jp: "きもちが ほこらしい。", en: "The feeling is proud." }, accept: ["pleased and proud", "swelling with pride"] },
        { id: "ja-u186l3-kokorozuyoi", type: "vocab", front: "こころづよい", reading: "kokorozuyoi", meaning: "reassuring to have", example: { jp: "そばに いて くれるだけで、こころづよいです。", en: "Just having you beside me is a reassurance." }, accept: ["heartening", "a comfort", "encouraging"] },
        { id: "ja-u186l3-setsujitsu", type: "vocab", front: "せつじつ", reading: "setsujitsu", meaning: "keenly felt and urgent", example: { jp: "その 願いは せつじつでしたが、だれにも 言えませんでした。", en: "The wish was keenly felt, but there was no one to tell." }, accept: ["pressing", "acute", "heartfelt"] },
      ],
    },
    {
      id: "ja-u186l4",
      unit: 186,
      lesson: 4,
      title: "What is already past",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about feeling towards something already over, and the judgement it leaves: みれん なごり おしい あんど きょうふ ふんべつ.",
      items: [
        { id: "ja-u186l4-miren", type: "vocab", front: "みれん", reading: "miren", meaning: "lingering attachment", example: { jp: "やめると 決めましたが、まだ みれんが のこって います。", en: "I decided to stop, but an attachment to it still lingers." }, accept: ["regret at letting go", "not being over it"] },
        { id: "ja-u186l4-nagori", type: "vocab", front: "なごり", reading: "nagori", meaning: "traces left behind", example: { jp: "古い かべだけが、むかしの なごりとして のこって います。", en: "Only the old wall remains as a trace of the past." }, drill: { jp: "なごりが のこって います。", en: "Traces remain." }, accept: ["remnants", "the last of it", "parting reluctance"] },
        { id: "ja-u186l4-oshii", type: "vocab", front: "おしい", reading: "oshii", meaning: "a shame to lose", example: { jp: "あと 少しだったので、おしい 気が します。", en: "It was so nearly there — it feels a shame." }, accept: ["regrettable", "a waste", "so close"] },
        { id: "ja-u186l4-ando", type: "vocab", front: "あんど", reading: "ando", meaning: "relief once it is over", example: { jp: "けっかを 聞いて、やっと あんどしました。", en: "Hearing the result, I could finally breathe out." }, accept: ["reassurance", "being able to relax", "a weight lifting"] },
        { id: "ja-u186l4-kyofu", type: "vocab", front: "きょうふ", reading: "kyōfu", meaning: "fear", example: { jp: "あの ときの きょうふは、今でも 体が おぼえて います。", en: "My body still remembers the fear of that moment." }, accept: ["terror", "dread", "being afraid"] },
        { id: "ja-u186l4-funbetsu", type: "vocab", front: "ふんべつ", reading: "funbetsu", meaning: "measured judgement", example: { jp: "年を 取って、少しは ふんべつが つきました。", en: "With age I've come to have a little more judgement." }, accept: ["discretion", "good sense", "knowing better"] },
      ],
    },
  ],
};
