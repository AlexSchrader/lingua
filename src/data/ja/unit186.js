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
        { id: "ja-u186l1-kigakari", type: "vocab", front: "きがかり", reading: "kigakari", meaning: "a nagging worry", example: { jp: "きがかりな ことが 一つ あって、よく ねむれませんでした。", en: "One thing was nagging at me and I didn't sleep well." }, drill: { jp: "きがかりが あります。", en: "There is something nagging at me." }, accept: ["something on one's mind", "a lingering concern", "a worry at the back of the mind"], hint: "kigakari — 気 (mind) + がかり from かかる, to catch: something caught on your mind that will not let go. Smaller than しんぱい and more persistent — the thing you keep remembering at night." },
        { id: "ja-u186l1-modokashii", type: "vocab", front: "もどかしい", reading: "modokashii", meaning: "frustrating to watch", example: { jp: "言いたい ことが 言えない 人を 見て、もどかしく なりました。", en: "Watching someone unable to say what they meant left me frustrated." }, drill: { jp: "見て いるのが もどかしいです。", en: "Watching it is frustrating." }, accept: ["exasperating", "makes you want to step in", "impatient"], hint: "もどかしい is frustration at SLOWNESS — yours or someone else's — when the answer is right there. あせり is the same feeling turned inward, with a clock on it." },
        { id: "ja-u186l1-aseri", type: "vocab", front: "あせり", reading: "aseri", meaning: "a rushed anxiety", example: { jp: "あせりから 出した 答えは、たいてい まちがって います。", en: "An answer given out of anxiety is usually wrong." }, drill: { jp: "あせりが 出ました。", en: "The anxiety showed." }, accept: ["impatience", "feeling pressed", "panic to hurry"], hint: "aseri — the noun of あせる, to be flustered by time pressure. Neither fear nor worry: あせり is the feeling of being BEHIND, which is why it produces bad decisions." },
        { id: "ja-u186l1-kimazui", type: "vocab", front: "きまずい", reading: "kimazui", meaning: "awkward between people", example: { jp: "けんかの あと、しばらく きまずい 空気が 続きました。", en: "After the argument, an awkward atmosphere hung about for a while." }, drill: { jp: "きまずい 空気に なりました。", en: "The atmosphere turned awkward." }, accept: ["uncomfortable", "strained", "an awkward silence"], hint: "kimazui — 気 (mood) + まずい (bad): the mood has gone bad. It lives BETWEEN people, so one person alone cannot be きまずい — only the air between them can." },
        { id: "ja-u186l1-terekusai", type: "vocab", front: "てれくさい", reading: "terekusai", meaning: "embarrassing in a shy way", example: { jp: "ほめられるのは うれしいですが、少し てれくさいです。", en: "Being praised is nice, but a little embarrassing." }, drill: { jp: "ほめられて てれくさいです。", en: "Being praised is embarrassing." }, accept: ["bashful", "sheepish", "self-conscious"], hint: "terekusai — てれる (to be bashful) plus くさい, which here means smelling OF rather than smelly; the same くさい builds めんどうくさい. This is shy embarrassment, not shame." },
        { id: "ja-u186l1-kyoshuku", type: "vocab", front: "きょうしゅく", reading: "kyōshuku", meaning: "feeling one has imposed", example: { jp: "そこまで して いただいて、きょうしゅくです。", en: "You've gone to such lengths for me — I'm quite overwhelmed." }, drill: { jp: "きょうしゅくして います。", en: "I feel I have imposed on you." }, accept: ["much obliged", "sorry to trouble you", "feeling small"], hint: "kyōshuku — 恐 (fear) + 縮 (shrink): shrinking in awe. A set politeness formula for when somebody has gone to trouble for you, and きょうしゅくですが softens an awkward request." },
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
        { id: "ja-u186l2-yuutsu", type: "vocab", front: "ゆううつ", reading: "yūutsu", meaning: "low and heavy", example: { jp: "月曜の 朝は、どうしても ゆううつに なります。", en: "Monday mornings turn low and heavy no matter what." }, drill: { jp: "ゆううつに なります。", en: "It turns me low and heavy." }, accept: ["gloomy", "depressed", "downcast"], hint: "yūutsu — 憂 (to grieve) + 鬱 (gloom): a settled heaviness rather than a sharp sadness. かなしい has a cause; ゆううつ often has none, which is what makes it hard to explain." },
        { id: "ja-u186l2-munashii", type: "vocab", front: "むなしい", reading: "munashii", meaning: "empty of meaning", example: { jp: "何を しても むなしく なる 時期が ありました。", en: "There was a period when everything I did felt hollow." }, drill: { jp: "きもちが むなしい。", en: "The feeling is empty." }, accept: ["hollow", "futile", "pointless"], hint: "munashii — written 空しい, from 空, empty: the feeling that an effort came to nothing. さびしい is missing someone; むなしい is finding there was nothing there to begin with." },
        { id: "ja-u186l2-wabishii", type: "vocab", front: "わびしい", reading: "wabishii", meaning: "bleakly lonely", example: { jp: "一人で 食べる 夕食は、少し わびしいです。", en: "Dinner eaten alone is a little bleak." }, drill: { jp: "一人の 夕食は わびしいです。", en: "Dinner alone is bleak." }, accept: ["desolate", "forlorn", "cheerless"], hint: "さびしい misses a person; わびしい is the bleakness of the scene itself — a cold room, a thin meal — whether or not anyone is missing." },
        { id: "ja-u186l2-kokorobosoi", type: "vocab", front: "こころぼそい", reading: "kokorobosoi", meaning: "uneasy without support", example: { jp: "知らない 町で 一人に なると、こころぼそく なります。", en: "Left alone in an unfamiliar town, I feel unmoored." }, drill: { jp: "一人だと こころぼそいです。", en: "On my own I feel unmoored." }, accept: ["helpless", "anxious and alone", "daunted"], hint: "kokorobosoi — 心 (heart) + ほそい (thin): a thin heart, with nothing to lean on. Its mirror こころづよい, two lessons on, is a heart made strong by support." },
        { id: "ja-u186l2-mijime", type: "vocab", front: "みじめ", reading: "mijime", meaning: "wretched", example: { jp: "みんなの 前で できなくて、みじめな 気持ちに なりました。", en: "Failing in front of everyone left me feeling wretched." }, drill: { jp: "みじめに なりました。", en: "I felt wretched." }, accept: ["miserable", "humiliated", "pitiful"], hint: "mijime — 惨め, from 惨, miserable. The sting of being SEEN in your failure, so it has a witness built into it: みじめ is what you feel because somebody watched." },
        { id: "ja-u186l2-ushirometai", type: "vocab", front: "うしろめたい", reading: "ushirometai", meaning: "guilty about something hidden", example: { jp: "ほんとうの 理ゆうを 言わなかったので、うしろめたいです。", en: "I didn't give the real reason, so I feel guilty about it." }, drill: { jp: "かくして いるので うしろめたいです。", en: "Because I am hiding it, I feel guilty." }, accept: ["a bad conscience", "furtive", "ashamed"], hint: "ushirometai — 後ろ (behind) plus an old word for dim: you cannot see what is behind you. It is the guilt of something CONCEALED, so it needs a secret; plain wrongdoing calls for はんせい." },
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
        { id: "ja-u186l3-shitto", type: "vocab", front: "しっと", reading: "shitto", meaning: "jealousy", example: { jp: "しっとして いる 自分に 気づいて、少し いやに なりました。", en: "Noticing my own jealousy, I didn't much like myself." }, drill: { jp: "しっとを かんじました。", en: "I felt jealousy." }, accept: ["envy of a person", "being jealous", "a jealous feeling"], hint: "shitto — 嫉 (to envy) + 妬 (to be jealous), two jealousy kanji doubled. It is aimed at a PERSON who has what you want. うらやましい is the mild, sayable version; しっと you keep to yourself." },
        { id: "ja-u186l3-ikidori", type: "vocab", front: "いきどおり", reading: "ikidōri", meaning: "indignation", example: { jp: "立場の 上の 人が 下の 人を 悪く 言うのを 見て、いきどおりを おぼえました。", en: "Watching someone senior speak ill of a junior, I felt indignation." }, drill: { jp: "いきどおりが あります。", en: "There is indignation." }, accept: ["righteous anger", "resentment at injustice", "indignation at unfairness"], hint: "おこる is anger at what was done to YOU; いきどおり is anger at what was done at all — it works fine when the victim is a stranger." },
        { id: "ja-u186l3-keibetsu", type: "vocab", front: "けいべつ", reading: "keibetsu", meaning: "contempt", example: { jp: "けいべつは 目に 出るので、かくせません。", en: "Contempt shows in the eyes; you can't hide it." }, drill: { jp: "けいべつが 目に 出ます。", en: "Contempt shows in the eyes." }, accept: ["looking down on", "scorn", "disdain"], hint: "keibetsu — 軽 (light) + 蔑 (to despise): treating a person as light, of no weight. Colder and stronger than きらい, and the one feeling on this list Japanese regards as shameful to hold." },
        { id: "ja-u186l3-hokorashii", type: "vocab", front: "ほこらしい", reading: "hokorashii", meaning: "proud on someone's behalf", example: { jp: "子どもの 名前が 読まれた とき、ほこらしく なりました。", en: "When my child's name was read out, I felt proud." }, drill: { jp: "きもちが ほこらしい。", en: "The feeling is proud." }, accept: ["pleased and proud", "swelling with pride", "full of pride"], hint: "hokorashii — from ほこる, to take pride, plus the らしい that turns a feeling into an adjective. It is pride felt ON SOMEONE ELSE'S behalf as often as your own — a parent's word." },
        { id: "ja-u186l3-kokorozuyoi", type: "vocab", front: "こころづよい", reading: "kokorozuyoi", meaning: "reassuring to have", example: { jp: "そばに いて くれるだけで、こころづよいです。", en: "Just having you beside me is a reassurance." }, drill: { jp: "そばに いて くれて こころづよいです。", en: "Having you beside me is reassuring." }, accept: ["heartening", "a comfort", "encouraging"], hint: "kokorozuyoi — 心 (heart) + つよい (strong): your heart made strong by something outside it. The exact mirror of こころぼそい, and it describes the SUPPORT rather than the supporter." },
        { id: "ja-u186l3-setsujitsu", type: "vocab", front: "せつじつ", reading: "setsujitsu", meaning: "keenly felt and urgent", example: { jp: "その 願いは せつじつでしたが、だれにも 言えませんでした。", en: "The wish was keenly felt, but there was no one to tell." }, drill: { jp: "せつじつな ねがいです。", en: "It is a keenly felt wish." }, accept: ["pressing", "acute", "heartfelt"], hint: "setsujitsu — 切 (to cut) + 実 (actual): cutting into the real. It means urgent AND deeply felt at once, which is why it suits a need rather than a wish for something pleasant." },
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
        { id: "ja-u186l4-miren", type: "vocab", front: "みれん", reading: "miren", meaning: "lingering attachment", example: { jp: "やめると 決めましたが、まだ みれんが のこって います。", en: "I decided to stop, but an attachment to it still lingers." }, drill: { jp: "みれんが のこって います。", en: "An attachment still lingers." }, accept: ["regret at letting go", "not being over it", "lingering feelings"], hint: "miren — 未 (not yet) + 練 (polished, resolved): not yet worked through. It is attachment to something you have already given up, which is what separates it from こうかい, regret at the decision." },
        { id: "ja-u186l4-nagori", type: "vocab", front: "なごり", reading: "nagori", meaning: "traces left behind", example: { jp: "古い かべだけが、むかしの なごりとして のこって います。", en: "Only the old wall remains as a trace of the past." }, drill: { jp: "なごりが のこって います。", en: "Traces remain." }, accept: ["remnants", "the last of it", "parting reluctance"], hint: "nagori — 名残: the traces a thing leaves after it has gone, whether a season, a building or a person. なごりおしい, not wanting to part, is where you will meet it most." },
        { id: "ja-u186l4-oshii", type: "vocab", front: "おしい", reading: "oshii", meaning: "a shame to lose", example: { jp: "あと 少しだったので、おしい 気が します。", en: "It was so nearly there — it feels a shame." }, drill: { jp: "もう 少しで できたので おしいです。", en: "It was so nearly done — a shame." }, accept: ["regrettable", "a waste", "so close"], hint: "oshii — 惜しい, from 惜, to begrudge. Two uses: a near miss, and being reluctant to waste something. もったいない is that second sense made into a word of its own." },
        { id: "ja-u186l4-ando", type: "vocab", front: "あんど", reading: "ando", meaning: "relief once it is over", example: { jp: "けっかを 聞いて、やっと あんどしました。", en: "Hearing the result, I could finally breathe out." }, drill: { jp: "あんどしました。", en: "I was relieved." }, accept: ["reassurance", "being able to relax", "a weight lifting"], hint: "ando — 安 (at ease) + 堵 (a wall): safe inside the wall. Relief AFTER the danger has passed, so it cannot describe being calm beforehand — that is あんしん." },
        { id: "ja-u186l4-kyofu", type: "vocab", front: "きょうふ", reading: "kyōfu", meaning: "fear", example: { jp: "あの ときの きょうふは、今でも 体が おぼえて います。", en: "My body still remembers the fear of that moment." }, drill: { jp: "きょうふを かんじました。", en: "I felt fear." }, accept: ["terror", "dread", "being afraid"], hint: "kyōfu — 恐 (to fear) + 怖 (dread), two fear kanji together. Heavier and more formal than こわい, and it names the thing as well as the feeling — きょうふしょう is a phobia." },
        { id: "ja-u186l4-funbetsu", type: "vocab", front: "ふんべつ", reading: "funbetsu", meaning: "measured judgement", example: { jp: "年を 取って、少しは ふんべつが つきました。", en: "With age I've come to have a little more judgement." }, drill: { jp: "ふんべつが つきました。", en: "I have come to have judgement." }, accept: ["discretion", "good sense", "knowing better"], hint: "funbetsu — 分 (divide) + 別 (distinguish), the same pair as ぶんべつ for rubbish but read ふんべつ and used of people. ふんべつが つく means growing up enough to weigh things." },
      ],
    },
  ],
};
