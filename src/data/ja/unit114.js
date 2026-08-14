// Unit 114 — かんがえ・ちゅうしょう (Abstract ideas) — B1 / JLPT N3
// Strand B, the most abstract unit of the block. The words for talking ABOUT ideas
// rather than about things: what an idea is (がいねん／ほんしつ／ようそ), whose view it is
// (かんてん／たちば／しゅかん／きゃっかん), how it hangs together (ろんり／けつろん／ぶんせき),
// and how things get sorted (ぶんるい／くべつ／きょうつう).
// Readings follow the corpus convention for ん + vowel: はんい → "hani", as げんいん →
// "genin" (no apostrophe). lang/unit/lesson are stamped in src/data/index.js.
export const UNIT114 = {
  id: "ja-u114",
  lang: "ja",
  title: "かんがえ・ちゅうしょう",
  order: 114,
  stage: "b1",
  lessons: [
    {
      id: "ja-u114l1",
      unit: 114,
      lesson: 1,
      title: "What an idea is",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about an idea itself, not the thing it describes: がいねん ほんしつ ちゅうしょう ぐたいてき いぎ ようそ.",
      items: [
        { id: "ja-u114l1-gainen", type: "vocab", front: "がいねん", reading: "gainen", meaning: "concept", example: { jp: "じかんと いう がいねんは、くにによって ちがう ことも あります。", en: "The concept of time can differ from country to country." }, accept: ["notion", "idea"] },
        { id: "ja-u114l1-honshitsu", type: "vocab", front: "ほんしつ", reading: "honshitsu", meaning: "essence", example: { jp: "もんだいの ほんしつが わかれば、こたえも みえて きます。", en: "Once you understand the essence of the problem, the answer comes into view too." }, accept: ["the heart of it", "true nature", "substance"] },
        { id: "ja-u114l1-chusho", type: "vocab", front: "ちゅうしょう", reading: "chūshō", meaning: "abstraction", example: { jp: "ちゅうしょうてきな はなしより、ぐたいてきな れいの ほうが わかりやすいです。", en: "A concrete example is easier to follow than an abstract discussion." }, accept: ["abstract", "the abstract"], hint: "ちゅうしょう and ぐたい are a pair, and both usually wear てき: ちゅうしょうてき / ぐたいてき." },
        { id: "ja-u114l1-gutaiteki", type: "vocab", front: "ぐたいてき", reading: "gutaiteki", meaning: "concrete", example: { jp: "ぐたいてきな れいを あげて せつめいすると、みんな よく わかります。", en: "If you explain by giving a concrete example, everyone understands." }, accept: ["specific", "definite", "tangible"] },
        { id: "ja-u114l1-igi", type: "vocab", front: "いぎ", reading: "igi", meaning: "significance", example: { jp: "この しごとには おおきな いぎが ありますから、つづけたいです。", en: "This work has great significance, so I want to carry on with it." }, accept: ["meaning", "point", "value"] },
        { id: "ja-u114l1-yoso", type: "vocab", front: "ようそ", reading: "yōso", meaning: "element", example: { jp: "この けいかくには たいせつな ようそが みっつ あります。", en: "This plan has three important elements." }, accept: ["factor", "component", "part"] },
      ],
    },
    {
      id: "ja-u114l2",
      unit: 114,
      lesson: 2,
      title: "Whose view it is",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Mark an opinion as coming from somewhere: かんてん たちば しゅかん きゃっかん きじゅん はんい.",
      items: [
        { id: "ja-u114l2-kanten", type: "vocab", front: "かんてん", reading: "kanten", meaning: "viewpoint", example: { jp: "こどもの かんてんから かんがえると、この まちは あんぜんでは ありません。", en: "Thought about from a child's viewpoint, this town isn't safe." }, accept: ["perspective", "angle", "point of view"] },
        { id: "ja-u114l2-tachiba", type: "vocab", front: "たちば", reading: "tachiba", meaning: "position", example: { jp: "あいての たちばに なって かんがえると、りゆうが わかります。", en: "If you think from the other person's position, the reason becomes clear." }, accept: ["standpoint", "situation", "where someone stands"], hint: "たちば is where you stand in a situation — your stake in it. かんてん is the angle you look from." },
        { id: "ja-u114l2-shukan", type: "vocab", front: "しゅかん", reading: "shukan", meaning: "subjectivity", example: { jp: "それは しゅかんてきな いけんですから、ほかの ひとは ちがう かもしれません。", en: "That's a subjective opinion, so other people may differ." }, accept: ["subjective", "personal view"] },
        { id: "ja-u114l2-kyakkan", type: "vocab", front: "きゃっかん", reading: "kyakkan", meaning: "objectivity", example: { jp: "きゃっかんてきな とうけいを みてから、はんだんしましょう。", en: "Let's look at objective statistics before judging." }, accept: ["objective", "impartial view"] },
        { id: "ja-u114l2-kijun", type: "vocab", front: "きじゅん", reading: "kijun", meaning: "standard", example: { jp: "この しけんの きじゅんは たかいですが、じゅんびすれば だいじょうぶです。", en: "The standard for this exam is high, but you'll be fine if you prepare." }, accept: ["criterion", "benchmark", "basis"] },
        { id: "ja-u114l2-hani", type: "vocab", front: "はんい", reading: "hani", meaning: "range", example: { jp: "しけんの はんいが ひろいので、まいにち べんきょうして います。", en: "The range of the exam is wide, so I study every day." }, accept: ["scope", "extent", "area covered"] },
      ],
    },
    {
      id: "ja-u114l3",
      unit: 114,
      lesson: 3,
      title: "Following the reasoning",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how a piece of thinking is put together: ろんり けつろん ぶんせき りかい そうぞう しくみ.",
      items: [
        { id: "ja-u114l3-ronri", type: "vocab", front: "ろんり", reading: "ronri", meaning: "logic", example: { jp: "その せつめいは ろんりが はっきりして いて、よく わかりました。", en: "The logic of that explanation was clear, and I understood it well." }, accept: ["reasoning", "the argument"] },
        { id: "ja-u114l3-ketsuron", type: "vocab", front: "けつろん", reading: "ketsuron", meaning: "conclusion", example: { jp: "ながい かいぎの あと、やっと けつろんが でました。", en: "After a long meeting, a conclusion finally came out." }, accept: ["decision", "the upshot", "finding"] },
        { id: "ja-u114l3-bunseki", type: "vocab", front: "ぶんせき", reading: "bunseki", meaning: "analysis", example: { jp: "けっかを ぶんせきしてから、つぎの けいかくを かんがえます。", en: "I'll analyse the results, then think about the next plan." }, accept: ["breakdown", "to analyse", "examination"] },
        { id: "ja-u114l3-rikai", type: "vocab", front: "りかい", reading: "rikai", meaning: "understanding", example: { jp: "せつめいを きいて、もんだいの りかいが ふかく なりました。", en: "I listened to the explanation, and my understanding of the problem deepened." }, accept: ["comprehension", "to understand", "grasp"] },
        { id: "ja-u114l3-sozo", type: "vocab", front: "そうぞう", reading: "sōzō", meaning: "imagination", example: { jp: "じゅうねん あとの せいかつを そうぞうすると、たのしく なります。", en: "Imagining life ten years from now makes me cheerful." }, accept: ["to imagine", "picturing", "supposition"] },
        { id: "ja-u114l3-shikumi", type: "vocab", front: "しくみ", reading: "shikumi", meaning: "how it works", example: { jp: "この きかいの しくみを しらべて、じぶんで なおしました。", en: "I looked into how this machine works and fixed it myself." }, accept: ["mechanism", "structure", "system"] },
      ],
    },
    {
      id: "ja-u114l4",
      unit: 114,
      lesson: 4,
      title: "Sorting things out",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe what kind of thing something is, and how it groups: せいしつ けいしき しつ ぶんるい くべつ きょうつう.",
      items: [
        { id: "ja-u114l4-seishitsu", type: "vocab", front: "せいしつ", reading: "seishitsu", meaning: "nature", example: { jp: "この どうぶつは しずかな せいしつで、こどもにも あんぜんです。", en: "This animal has a quiet nature, and is safe around children too." }, accept: ["character", "property", "disposition"] },
        { id: "ja-u114l4-keishiki", type: "vocab", front: "けいしき", reading: "keishiki", meaning: "form", example: { jp: "レポートの けいしきは たいせつですから、よく かくにんして ください。", en: "The form of the report matters, so please check it carefully." }, accept: ["format", "style", "formality"] },
        { id: "ja-u114l4-shitsu", type: "vocab", front: "しつ", reading: "shitsu", meaning: "quality", example: { jp: "この みせの ふくは ねだんは たかいですが、しつが とても いいです。", en: "The clothes at this shop are expensive, but the quality is very good." }, accept: ["standard", "grade"], hint: "質 — in speech it rarely stands alone: ひんしつ (product quality), しつもん (question). Don't confuse it with しつ = 室 (room), as in きょうしつ." },
        { id: "ja-u114l4-bunrui", type: "vocab", front: "ぶんるい", reading: "bunrui", meaning: "classification", example: { jp: "ほんを ふるい ものと あたらしい ものに ぶんるいして、はこに いれました。", en: "I sorted the books into old and new, and put them in boxes." }, accept: ["sorting", "to classify", "category"] },
        { id: "ja-u114l4-kubetsu", type: "vocab", front: "くべつ", reading: "kubetsu", meaning: "distinction", example: { jp: "ふたつの ことばの くべつが むずかしいので、れいを おぼえます。", en: "The distinction between the two words is difficult, so I memorise examples." }, accept: ["telling apart", "difference", "to distinguish"], hint: "くべつ is telling two things apart; ぶんるい is putting many things into groups." },
        { id: "ja-u114l4-kyotsu", type: "vocab", front: "きょうつう", reading: "kyōtsū", meaning: "in common", example: { jp: "わたしたちには きょうつうの しゅみが あるので、はなしが つづきます。", en: "We have a hobby in common, so the conversation keeps going." }, accept: ["shared", "common", "mutual"] },
      ],
    },
  ],
};
