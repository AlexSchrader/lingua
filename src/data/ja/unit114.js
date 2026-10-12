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
        { id: "ja-u114l1-gainen", type: "vocab", front: "がいねん", reading: "gainen", meaning: "concept", example: { jp: "じかんと いう がいねんは、くにによって ちがう ことも あります。", en: "The concept of time can differ from country to country." }, drill: { jp: "がいねんが むずかしいです。", en: "The concept is difficult." }, accept: ["notion", "idea", "a general idea"], hint: "GAI-nen — two beats. がい is an outline and ねん is a thought, so it is the shape of an idea before the detail. いみ is what a word means; がいねん is the thing the word points at." },
        { id: "ja-u114l1-honshitsu", type: "vocab", front: "ほんしつ", reading: "honshitsu", meaning: "essence", example: { jp: "もんだいの ほんしつが わかれば、こたえも みえて きます。", en: "Once you understand the essence of the problem, the answer comes into view too." }, drill: { jp: "ほんしつを りかいします。", en: "I grasp the essence of it." }, accept: ["the heart of it", "true nature", "substance"], hint: "hon-SHI-tsu — three beats, the ん held. ほん is the root and しつ is substance, so it is what a thing really is under the surface. The surface itself is ひょうめん." },
        { id: "ja-u114l1-chusho", type: "vocab", front: "ちゅうしょう", reading: "chūshō", meaning: "abstraction", example: { jp: "ちゅうしょうてきな はなしより、ぐたいてきな れいの ほうが わかりやすいです。", en: "A concrete example is easier to follow than an abstract discussion." }, drill: { jp: "ちゅうしょうの はなしは むずかしいです。", en: "Abstract talk is difficult." }, accept: ["abstract", "the abstract", "abstractness"], hint: "ちゅうしょう and ぐたい are a pair, and both usually wear てき: ちゅうしょうてき / ぐたいてき." },
        { id: "ja-u114l1-gutaiteki", type: "vocab", front: "ぐたいてき", reading: "gutaiteki", meaning: "concrete", example: { jp: "ぐたいてきな れいを あげて せつめいすると、みんな よく わかります。", en: "If you explain by giving a concrete example, everyone understands." }, drill: { jp: "ぐたいてきに せつめいします。", en: "I explain it concretely." }, accept: ["specific", "definite", "tangible"], hint: "gu-tai-TE-ki — four beats. ぐたい is a concrete body plus ～てき, the ～ic suffix. It is the opposite of ちゅうしょうてき, and 「ぐたいてきに」 is what a listener asks for when your point is too vague." },
        { id: "ja-u114l1-igi", type: "vocab", front: "いぎ", reading: "igi", meaning: "significance", example: { jp: "この しごとには おおきな いぎが ありますから、つづけたいです。", en: "This work has great significance, so I want to carry on with it." }, drill: { jp: "いぎが あります。", en: "It has significance." }, accept: ["meaning", "point", "value"], hint: "I-gi — two beats. い is meaning and ぎ is sense, so it is why something is worth doing. ⚠️ Keep it apart from いぎ meaning an objection, which is a separate word with the same sound." },
        { id: "ja-u114l1-yoso", type: "vocab", front: "ようそ", reading: "yōso", meaning: "element", example: { jp: "この けいかくには たいせつな ようそが みっつ あります。", en: "This plan has three important elements." }, drill: { jp: "ようそが おおいです。", en: "There are many elements." }, accept: ["factor", "component", "part"], hint: "YŌ-so — the first beat is long. よう is essential and そ is a basis, so it is one necessary part of a whole. In chemistry the same word means a chemical element." },
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
        { id: "ja-u114l2-kanten", type: "vocab", front: "かんてん", reading: "kanten", meaning: "viewpoint", example: { jp: "こどもの かんてんから かんがえると、この まちは あんぜんでは ありません。", en: "Thought about from a child's viewpoint, this town isn't safe." }, drill: { jp: "かんてんを かえて みます。", en: "I will try changing my viewpoint." }, accept: ["perspective", "angle", "point of view"], hint: "kan-TEN — two beats, the ん held. かん is to observe and てん is a point, so it is the point you observe FROM. たちば is where you stand socially; かんてん is the angle you look from." },
        { id: "ja-u114l2-tachiba", type: "vocab", front: "たちば", reading: "tachiba", meaning: "position", example: { jp: "あいての たちばに なって かんがえると、りゆうが わかります。", en: "If you think from the other person's position, the reason becomes clear." }, drill: { jp: "たちばが ちがいます。", en: "Our positions differ." }, accept: ["standpoint", "situation", "where someone stands"], hint: "たちば is where you stand in a situation — your stake in it. かんてん is the angle you look from." },
        { id: "ja-u114l2-shukan", type: "vocab", front: "しゅかん", reading: "shukan", meaning: "subjectivity", example: { jp: "それは しゅかんてきな いけんですから、ほかの ひとは ちがう かもしれません。", en: "That's a subjective opinion, so other people may differ." }, drill: { jp: "しゅかんで きめては いけません。", en: "You must not decide on personal feeling." }, accept: ["subjective", "personal view", "one's own view"], hint: "shu-KAN — two beats, the ん held. しゅ marks the one doing the looking and かん is a view, so it is the view from inside you. Its exact opposite is きゃっかん, and both usually appear with ～てき." },
        { id: "ja-u114l2-kyakkan", type: "vocab", front: "きゃっかん", reading: "kyakkan", meaning: "objectivity", example: { jp: "きゃっかんてきな とうけいを みてから、はんだんしましょう。", en: "Let's look at objective statistics before judging." }, drill: { jp: "きゃっかんてきに みましょう。", en: "Let us look at it objectively." }, accept: ["objective", "impartial view", "detachment"], hint: "KYAK-kan — small pause, then the ん held; きゃ is ONE beat. きゃく is a guest, as in おきゃく, so it is the view of an outsider looking in. しゅかん is the view from inside." },
        { id: "ja-u114l2-kijun", type: "vocab", front: "きじゅん", reading: "kijun", meaning: "standard", example: { jp: "この しけんの きじゅんは たかいですが、じゅんびすれば だいじょうぶです。", en: "The standard for this exam is high, but you'll be fine if you prepare." }, drill: { jp: "きじゅんを きめます。", en: "We set the standard." }, accept: ["criterion", "benchmark", "basis"], hint: "ki-JUN — two beats, the ん held. き is a base and じゅん is to follow, so it is the line everything is measured against. こんきょ is evidence for a claim; きじゅん is the bar it must clear." },
        { id: "ja-u114l2-hani", type: "vocab", front: "はんい", reading: "hani", meaning: "range", example: { jp: "しけんの はんいが ひろいので、まいにち べんきょうして います。", en: "The range of the exam is wide, so I study every day." }, drill: { jp: "はんいを せつめいします。", en: "I will explain the range." }, accept: ["scope", "extent", "area covered"], hint: "HA-n-i — three beats, and the ん is its own beat: ha-n-i. はん is a boundary and い is to surround. It is the area something covers — an exam syllabus, a search, a map." },
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
        { id: "ja-u114l3-ronri", type: "vocab", front: "ろんり", reading: "ronri", meaning: "logic", example: { jp: "その せつめいは ろんりが はっきりして いて、よく わかりました。", en: "The logic of that explanation was clear, and I understood it well." }, drill: { jp: "ろんりを たいせつに します。", en: "I treat logic as important." }, accept: ["reasoning", "the argument", "logical structure"], hint: "ron-RI — two beats, the ん held. ろん is argument and り is reason, so it is how the steps of an argument hold together. こんきょ is the evidence; ろんり is the joinery." },
        { id: "ja-u114l3-ketsuron", type: "vocab", front: "けつろん", reading: "ketsuron", meaning: "conclusion", example: { jp: "ながい かいぎの あと、やっと けつろんが でました。", en: "After a long meeting, a conclusion finally came out." }, drill: { jp: "けつろんは まだ でません。", en: "No conclusion has come yet." }, accept: ["decision", "the upshot", "finding"], hint: "ke-tsu-RON — three beats, the ん held. けつ is to conclude and ろん is argument. ⚠️ Japanese says a conclusion COMES OUT: 「けつろんが でる」, not that you reach it." },
        { id: "ja-u114l3-bunseki", type: "vocab", front: "ぶんせき", reading: "bunseki", meaning: "analysis", example: { jp: "けっかを ぶんせきしてから、つぎの けいかくを かんがえます。", en: "I'll analyse the results, then think about the next plan." }, drill: { jp: "ぶんせきの けっかを みます。", en: "I look at the analysis results." }, accept: ["breakdown", "to analyse", "examination"], hint: "bun-SE-ki — three beats, the ん held. ぶん is to divide and せき is to break apart, so it is taking a thing to pieces to see it. ちょうさ gathers the facts; ぶんせき makes sense of them." },
        { id: "ja-u114l3-rikai", type: "vocab", front: "りかい", reading: "rikai", meaning: "understanding", example: { jp: "せつめいを きいて、もんだいの りかいが ふかく なりました。", en: "I listened to the explanation, and my understanding of the problem deepened." }, drill: { jp: "りかいが ふかく なりました。", en: "My understanding got deeper." }, accept: ["comprehension", "to understand", "grasp"], hint: "ri-KA-i — three beats. り is reason and かい is to untangle, so it is working something out rather than being told. 「りかいが ふかい」 is deep understanding — it has depth, not size." },
        { id: "ja-u114l3-sozo", type: "vocab", front: "そうぞう", reading: "sōzō", meaning: "imagination", example: { jp: "じゅうねん あとの せいかつを そうぞうすると、たのしく なります。", en: "Imagining life ten years from now makes me cheerful." }, drill: { jp: "そうぞうも できません。", en: "I cannot even imagine it." }, accept: ["to imagine", "picturing", "supposition"], hint: "sō-ZŌ — two long beats. そう is to picture and ぞう is an image, so it is forming a picture inside. ⚠️ そうぞう with different kanji means creation — identical sound, opposite act." },
        { id: "ja-u114l3-shikumi", type: "vocab", front: "しくみ", reading: "shikumi", meaning: "how it works", example: { jp: "この きかいの しくみを しらべて、じぶんで なおしました。", en: "I looked into how this machine works and fixed it myself." }, drill: { jp: "しくみを せつめいします。", en: "I will explain how it works." }, accept: ["mechanism", "structure", "system"], hint: "shi-ku-MI — three beats. しくむ is to put together, so it is the way the parts fit. It covers a machine, a tax system and a trick alike — anything with moving pieces." },
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
        { id: "ja-u114l4-seishitsu", type: "vocab", front: "せいしつ", reading: "seishitsu", meaning: "nature (an animal's temperament)", example: { jp: "この どうぶつは しずかな せいしつで、こどもにも あんぜんです。", en: "This animal has a quiet nature, and is safe around children too." }, drill: { jp: "せいしつが しずかです。", en: "Its nature is quiet." }, accept: ["character", "property", "disposition"], hint: "sei-SHI-tsu — three beats. せい is a nature and しつ is substance, so it is what something is LIKE by nature. かお or からだ can change; せいしつ is supposed not to." },
        { id: "ja-u114l4-keishiki", type: "vocab", front: "けいしき", reading: "keishiki", meaning: "form", example: { jp: "レポートの けいしきは たいせつですから、よく かくにんして ください。", en: "The form of the report matters, so please check it carefully." }, drill: { jp: "けいしきは たいせつです。", en: "The form is important." }, accept: ["format", "style", "formality"], hint: "kei-SHI-ki — three beats. けい is a shape and しき is a form, so it is the agreed outer shape of a thing. ないよう is what it says; けいしき is how it has to look." },
        { id: "ja-u114l4-shitsu", type: "vocab", front: "しつ", reading: "shitsu", meaning: "quality", example: { jp: "この みせの ふくは ねだんは たかいですが、しつが とても いいです。", en: "The clothes at this shop are expensive, but the quality is very good." }, drill: { jp: "しつが わるく なりました。", en: "The quality has got worse." }, accept: ["standard", "grade", "how good it is"], hint: "質 — in speech it rarely stands alone: ひんしつ (product quality), しつもん (question). Don't confuse it with しつ = 室 (room), as in きょうしつ." },
        { id: "ja-u114l4-bunrui", type: "vocab", front: "ぶんるい", reading: "bunrui", meaning: "classification", example: { jp: "ほんを ふるい ものと あたらしい ものに ぶんるいして、はこに いれました。", en: "I sorted the books into old and new, and put them in boxes." }, drill: { jp: "ぶんるいが むずかしいです。", en: "The classification is difficult." }, accept: ["sorting", "to classify", "category"], hint: "bun-RU-i — three beats, the ん held. ぶん is to divide and るい is a kind, so it is sorting things into kinds. くべつ tells two apart; ぶんるい builds the whole set of boxes." },
        { id: "ja-u114l4-kubetsu", type: "vocab", front: "くべつ", reading: "kubetsu", meaning: "distinction", example: { jp: "ふたつの ことばの くべつが むずかしいので、れいを おぼえます。", en: "The distinction between the two words is difficult, so I memorise examples." }, drill: { jp: "くべつを せつめいします。", en: "I will explain the distinction." }, accept: ["telling apart", "difference", "to distinguish"], hint: "くべつ is telling two things apart; ぶんるい is putting many things into groups." },
        { id: "ja-u114l4-kyotsu", type: "vocab", front: "きょうつう", reading: "kyōtsū", meaning: "in common", example: { jp: "わたしたちには きょうつうの しゅみが あるので、はなしが つづきます。", en: "We have a hobby in common, so the conversation keeps going." }, drill: { jp: "きょうつうの もくひょうが あります。", en: "We have a shared goal." }, accept: ["shared", "common", "mutual"], hint: "kyō-TSŪ — two long beats. きょう is together and つう is to pass through, so it is what runs through both parties. おなじ means identical; きょうつう means held in common." },
      ],
    },
  ],
};
