// JA Unit 145 — ごい・N3・4 (けいようし・2 — な-adjectives) — B1 / JLPT N3
// Strand D, coverage 4 of 14. The companion to u144: な-adjectives, kept in their own unit
// so the conjugation stays consistent for a whole lesson (な before a noun, だった in the
// plain past — the two places learners slip after a unit of い-adjectives).
// A cluster worth noticing: おだやか・なごやか・あざやか・ゆるやか・すみやか・ほがらか all
// end in ～か. That is a real derivational family; lesson 2 is built around it, and ほがらか
// sits in lesson 1 with the other character words because that is where a learner needs it.
export const UNIT145 = {
  id: "ja-u145",
  lang: "ja",
  title: "ごい・N3・4",
  order: 145,
  stage: "b1",
  lessons: [
    {
      id: "ja-u145l1",
      unit: 145,
      lesson: 1,
      title: "Character, な-style",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how someone handles themselves: きよう, ぶきよう, のんき, まめ, かって.",
      items: [
        { id: "ja-u145l1-kiyo", type: "vocab", front: "きよう", reading: "kiyō", meaning: "skilful with one's hands", example: { jp: "あねはきようで、なんでもじぶんでなおします。", en: "My older sister is good with her hands and fixes everything herself." }, accept: ["dexterous", "handy", "deft"], hint: "Specifically manual skill — じょうず is being good at an activity, きよう is having clever hands." },
        { id: "ja-u145l1-bukiyo", type: "vocab", front: "ぶきよう", reading: "bukiyō", meaning: "clumsy with one's hands", example: { jp: "ぶきようなので、じをきれいにかくのがへたです。", en: "I'm clumsy, so I'm bad at writing neatly." }, drill: { jp: "ぶきようにつくります。", en: "I make it clumsily." }, accept: ["ham-fisted", "awkward", "unhandy"], hint: "ぶ～ is a negating prefix you'll meet again: ぶきよう, ぶあいそう. It flips the word it's attached to." },
        { id: "ja-u145l1-nonki", type: "vocab", front: "のんき", reading: "nonki", meaning: "easy-going, carefree", example: { jp: "かれはのんきで、テストのまえでもしんぱいしません。", en: "He's easy-going and doesn't worry even before a test." }, drill: { jp: "のんきにくらします。", en: "I live an easy-going life." }, accept: ["laid-back", "happy-go-lucky", "unworried"], hint: "Admiring or exasperated depending on tone — the same trait is calm from inside and irresponsible from outside." },
        { id: "ja-u145l1-mame", type: "vocab", front: "まめ", reading: "mame", meaning: "diligent about small things", example: { jp: "かのじょはまめで、まいにちにっきをかいています。", en: "She's diligent — she writes in her diary every day." }, accept: ["conscientious", "attentive", "assiduous"], hint: "Not hard work in general but faithfulness to small recurring tasks — replying, watering plants, keeping in touch. まめにれんらくする is the classic use." },
        { id: "ja-u145l1-katte", type: "vocab", front: "かって", reading: "katte", meaning: "selfish, as one pleases", example: { jp: "かってにきめないで、わたしにもそうだんしてください。", en: "Don't decide it on your own — talk to me too." }, accept: ["self-centred", "arbitrary", "without asking"], hint: "かってに + verb = 'doing it without asking anyone'. It's one of the sharper criticisms in everyday Japanese." },
        { id: "ja-u145l1-hogaraka", type: "vocab", front: "ほがらか", reading: "hogaraka", meaning: "cheerful, sunny", example: { jp: "てんいんがほがらかなので、このみせはきもちがいいです。", en: "The staff are cheerful, so this shop feels pleasant." }, accept: ["bright (in manner)", "genial", "upbeat"], hint: "A settled, outward cheerfulness — a personality, not a mood. たのしい is how you feel; ほがらか is how you are." },
      ],
    },
    {
      id: "ja-u145l2",
      unit: 145,
      lesson: 2,
      title: "The ～か family: calm, vivid, gentle",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe an atmosphere or a movement: おだやか, なごやか, あざやか, ゆるやか, すみやか.",
      items: [
        { id: "ja-u145l2-odayaka", type: "vocab", front: "おだやか", reading: "odayaka", meaning: "calm, mild", example: { jp: "かぜがなくて、うみはおだやかでした。", en: "There was no wind and the sea was calm." }, accept: ["gentle", "placid", "serene"], hint: "Weather, sea and temperament. おだやかなひと is someone who doesn't raise their voice — high praise in Japanese." },
        { id: "ja-u145l2-nagoyaka", type: "vocab", front: "なごやか", reading: "nagoyaka", meaning: "friendly, harmonious (atmosphere)", example: { jp: "かいぎはなごやかで、はなしがすぐにきまりました。", en: "The meeting was friendly and the discussion was settled quickly." }, accept: ["amiable", "genial", "convivial"], hint: "Describes the ROOM, never one person — なごやかなふんいき is almost a set phrase. おだやか is a person; なごやか is a gathering." },
        { id: "ja-u145l2-azayaka", type: "vocab", front: "あざやか", reading: "azayaka", meaning: "vivid, brilliant", example: { jp: "あきになって、やまのいろがあざやかになりました。", en: "Autumn came and the mountain colours turned vivid." }, drill: { jp: "あざやかになりました。", en: "It became vivid." }, accept: ["bright (colour)", "striking", "masterly"], hint: "Colours first, but also a performance done so cleanly it looks easy: あざやかなうでまえ." },
        { id: "ja-u145l2-yuruyaka", type: "vocab", front: "ゆるやか", reading: "yuruyaka", meaning: "gentle (slope), gradual", example: { jp: "ゆるやかなさかだったので、じてんしゃでのぼれました。", en: "It was a gentle slope, so I could cycle up it." }, accept: ["slow", "easy (gradient)", "loose"], hint: "The written cousin of ゆるい. Slopes, curves, and rates of change: ゆるやかにへっています = declining gradually." },
        { id: "ja-u145l2-sumiyaka", type: "vocab", front: "すみやか", reading: "sumiyaka", meaning: "prompt, without delay", example: { jp: "じしんのときは、すみやかにそとへでてください。", en: "In an earthquake, please get outside without delay." }, accept: ["swift", "immediate", "expeditious"], hint: "Formal and official — announcements, signs and rules. In conversation you'd say すぐに; すみやかに is what the notice says." },
        { id: "ja-u145l2-taira", type: "vocab", front: "たいら", reading: "taira", meaning: "flat, level", example: { jp: "ここはたいらなので、テントをおくのにいいです。", en: "It's flat here, so it's a good spot for a tent." }, drill: { jp: "たいらになりました。", en: "It became flat." }, accept: ["even", "smooth", "horizontal"], hint: "Physically level ground or surface. For a flat, thin object (a plate, a board) you'd say うすい instead." },
      ],
    },
    {
      id: "ja-u145l3",
      unit: 145,
      lesson: 3,
      title: "Fair, obvious, difficult",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Make a judgement about a situation: こうへい, ふこうへい, とうぜん, あきらか, こんなん, きちょう.",
      items: [
        { id: "ja-u145l3-kohei", type: "vocab", front: "こうへい", reading: "kōhei", meaning: "fair, impartial", example: { jp: "だれにもこうへいなルールをつくりましょう。", en: "Let's make rules that are fair to everyone." }, accept: ["even-handed", "just", "equitable"], hint: "Fairness of PROCESS — rules, judging, sharing without bias. びょうどう (u155) is equality of standing between people; こうへい is even-handedness in how a decision gets made." },
        { id: "ja-u145l3-fukohei", type: "vocab", front: "ふこうへい", reading: "fukōhei", meaning: "unfair", example: { jp: "ひとりだけおおくもらうのは、ふこうへいだとおもいます。", en: "I think it's unfair for one person alone to get more." }, drill: { jp: "ふこうへいになります。", en: "It becomes unfair." }, accept: ["biased", "inequitable", "one-sided"], hint: "ふ～ negates, as in ふしぜん and ふゆかい. The adult, arguable version of ずるい — you can say it in a meeting." },
        { id: "ja-u145l3-fushizen", type: "vocab", front: "ふしぜん", reading: "fushizen", meaning: "unnatural, forced", example: { jp: "このぶんはふしぜんなので、いいなおしたほうがいいです。", en: "This sentence sounds unnatural — better to rephrase it." }, drill: { jp: "ふしぜんにきこえます。", en: "It sounds unnatural." }, accept: ["artificial", "awkward", "contrived"], hint: "ふ～ negates again (ふこうへい, ふゆかい). The single most useful word for asking about your own Japanese: ふしぜんですか。" },
        { id: "ja-u145l3-akiraka", type: "vocab", front: "あきらか", reading: "akiraka", meaning: "clear, evident", example: { jp: "しりょうをみれば、げんいんはあきらかです。", en: "If you look at the data, the cause is clear." }, accept: ["obvious", "plain", "manifest"], hint: "Clear because of EVIDENCE, not because it's easy to understand — that would be わかりやすい. あきらかに + verb = 'clearly, demonstrably'." },
        { id: "ja-u145l3-konnan", type: "vocab", front: "こんなん", reading: "konnan", meaning: "difficult (formal)", example: { jp: "ゆきのため、でんしゃのうんてんがこんなんになりました。", en: "Because of the snow, running the trains became difficult." }, drill: { jp: "こんなんになりました。", en: "It became difficult." }, accept: ["hard", "problematic", "arduous"], hint: "The written むずかしい, used for circumstances rather than tasks. Also a noun: こんなんをのりこえる = overcome difficulties." },
        { id: "ja-u145l3-kicho", type: "vocab", front: "きちょう", reading: "kichō", meaning: "precious, valuable", example: { jp: "きちょうなじかんをいただき、ありがとうございました。", en: "Thank you for giving me your valuable time." }, accept: ["invaluable", "treasured", "rare and important"], hint: "Value from rarity, not price — たかい is expensive, きちょう is irreplaceable. The set phrase きちょうなごいけん opens many polite emails." },
      ],
    },
    {
      id: "ja-u145l4",
      unit: 145,
      lesson: 4,
      title: "Easy, plain, luxurious",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe the style of a thing or a life: てがる, きらく, ぜいたく, そぼく, びみょう, ふゆかい.",
      items: [
        { id: "ja-u145l4-tegaru", type: "vocab", front: "てがる", reading: "tegaru", meaning: "easy to do, hassle-free", example: { jp: "このりょうりはてがるなので、いそがしいひでもつくれます。", en: "This dish is hassle-free, so I can make it even on a busy day." }, accept: ["simple", "convenient", "light (effort)"], hint: "About the EFFORT a thing costs, not the skill it needs. かんたん is 'not complicated'; てがる is 'no trouble'." },
        { id: "ja-u145l4-kiraku", type: "vocab", front: "きらく", reading: "kiraku", meaning: "relaxed, free of worry", example: { jp: "ひとりぐらしはきらくですが、ときどきさびしいです。", en: "Living alone is carefree, but sometimes lonely." }, drill: { jp: "きらくにくらします。", en: "I live free of worry." }, accept: ["easy-going", "comfortable", "light-hearted"], hint: "きらくに どうぞ = 'make yourself at home'. It describes a state you're allowed to be in, where のんき describes a personality." },
        { id: "ja-u145l4-zeitaku", type: "vocab", front: "ぜいたく", reading: "zeitaku", meaning: "luxurious, extravagant", example: { jp: "まいにちがいしょくするのは、すこしぜいたくです。", en: "Eating out every day is a bit extravagant." }, drill: { jp: "ぜいたくになりました。", en: "It became luxurious." }, accept: ["lavish", "indulgent", "a treat"], hint: "Half criticism, half pleasure — ぜいたくなじかん is a treat you're glad you took. Note the reading: zei, an い-vowel, not a long e." },
        { id: "ja-u145l4-soboku", type: "vocab", front: "そぼく", reading: "soboku", meaning: "simple, unaffected", example: { jp: "そぼくなあじですが、まいにちたべてもあきません。", en: "The flavour is simple, but you don't tire of it even eating it daily." }, accept: ["plain", "rustic", "naive"], hint: "Simplicity as a virtue — food, houses, people. そぼくなぎもん is an 'innocent question' you feel slightly silly asking." },
        { id: "ja-u145l4-bimyo", type: "vocab", front: "びみょう", reading: "bimyō", meaning: "subtle; iffy", example: { jp: "あじはわるくないですが、びみょうなちがいがあります。", en: "The taste isn't bad, but there's a subtle difference." }, accept: ["delicate", "hard to say", "so-so"], hint: "Formally 'subtle', but in speech it's the polite way to say 'not great' without saying it. びみょう。 alone means 'eh, not really'." },
        { id: "ja-u145l4-fuyukai", type: "vocab", front: "ふゆかい", reading: "fuyukai", meaning: "unpleasant, disagreeable", example: { jp: "しつれいなことをいわれて、ふゆかいでした。", en: "I was told something rude and it was unpleasant." }, accept: ["offensive", "distasteful", "displeasing"], hint: "Formal displeasure, the kind you'd write in a complaint. In speech いやでした is far commoner — ふゆかい sounds like a statement of record." },
      ],
    },
  ],
};
