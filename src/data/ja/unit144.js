// JA Unit 144 — ごい・N3・3 (けいようし・1 — い-adjectives) — B1 / JLPT N3
// Strand D, coverage 3 of 14. A1/A2 gave the learner about forty adjectives, almost all
// of them physical (あつい, たかい, おおきい). What is missing at B1 is the layer that
// describes PEOPLE and SITUATIONS — the words you need to say why someone annoyed you or
// why a plan felt wrong. Those are the adjectives a learner reaches for and can't find.
// い-adjectives only here; な-adjectives are the next unit, so the conjugation stays
// consistent across a whole lesson.
export const UNIT144 = {
  id: "ja-u144",
  lang: "ja",
  title: "ごい・N3・3",
  order: 144,
  stage: "b1",
  lessons: [
    {
      id: "ja-u144l1",
      unit: 144,
      lesson: 1,
      title: "What people are like",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe someone's character, kindly or not: かしこい, たくましい, たのもしい, そそっかしい, なさけない, ずうずうしい.",
      items: [
        { id: "ja-u144l1-kashikoi", type: "vocab", front: "かしこい", reading: "kashikoi", meaning: "clever, wise", example: { jp: "このいぬはとてもかしこくて、なんでもおぼえます。", en: "This dog is very clever and learns anything." }, accept: ["smart", "bright", "sensible"], hint: "かしこい is practical good sense — it fits animals and children as easily as adults. あたまがいい is about ability; かしこい is about judgement." },
        { id: "ja-u144l1-takumashii", type: "vocab", front: "たくましい", reading: "takumashii", meaning: "sturdy, tough-minded", example: { jp: "ひとりでせいかつして、かれはたくましくなりました。", en: "Living alone has made him tougher." }, accept: ["robust", "resilient", "strapping"], hint: "Physical strength and strength of character at once. Always admiring — you cannot use it as an insult." },
        { id: "ja-u144l1-tanomoshii", type: "vocab", front: "たのもしい", reading: "tanomoshii", meaning: "reliable, dependable", example: { jp: "こまったときにたすけてくれる、たのもしいともだちです。", en: "He's a dependable friend who helps when you're in trouble." }, accept: ["trustworthy", "promising", "someone you can count on"], hint: "From たのむ (to rely on) — someone you can put weight on. The highest ordinary compliment for a colleague." },
        { id: "ja-u144l1-darashinai", type: "vocab", front: "だらしない", reading: "darashinai", meaning: "sloppy, unkempt", example: { jp: "シャツがでていますよ。だらしなくみえます。", en: "Your shirt is untucked — it looks sloppy." }, accept: ["slovenly", "undisciplined", "messy"], hint: "About self-management showing on the outside — dress, money, timekeeping. みっともない is how it looks to others; だらしない is the habit behind it." },
        { id: "ja-u144l1-sosokkashii", type: "vocab", front: "そそっかしい", reading: "sosokkashii", meaning: "careless, scatterbrained", example: { jp: "わたしはそそっかしいので、よくかさをわすれます。", en: "I'm scatterbrained, so I often forget my umbrella." }, accept: ["absent-minded", "hasty", "slapdash"], hint: "A fond, self-deprecating word for someone who rushes and drops things. Much warmer than ふちゅうい (careless)." },
        { id: "ja-u144l1-zuzushii", type: "vocab", front: "ずうずうしい", reading: "zūzūshii", meaning: "shameless, brazen", example: { jp: "ならんでいるひとのまえにはいるなんて、ずうずうしいです。", en: "Cutting in front of people who are queuing is brazen." }, accept: ["cheeky", "pushy", "nervy"], hint: "Someone who takes what isn't theirs and doesn't blush. Note the two long vowels — ずうずうしい, not ずずしい." },
      ],
    },
    {
      id: "ja-u144l2",
      unit: 144,
      lesson: 2,
      title: "Sharp, dull, suspicious",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Judge the quality of a thing or an impression: するどい, にぶい, あらい, まぶしい, あやしい, くだらない.",
      items: [
        { id: "ja-u144l2-surudoi", type: "vocab", front: "するどい", reading: "surudoi", meaning: "sharp, keen", example: { jp: "かれのしつもんはするどくて、こたえられませんでした。", en: "His question was sharp and I couldn't answer it." }, accept: ["acute", "incisive", "pointed"], hint: "Knives, questions and eyes are all するどい. Applied to a person's remark it is a compliment with an edge." },
        { id: "ja-u144l2-nibui", type: "vocab", front: "にぶい", reading: "nibui", meaning: "dull, slow to notice", example: { jp: "かれはにぶいので、ヒントをいってもわかりません。", en: "He's slow on the uptake — even a hint doesn't get through." }, accept: ["blunt", "sluggish", "insensitive"], hint: "The exact opposite of するどい, for blades and for people. Saying someone is にぶい about feelings is a gentle complaint." },
        { id: "ja-u144l2-arai", type: "vocab", front: "あらい", reading: "arai", meaning: "rough, coarse", example: { jp: "このかみはあらいので、じがきれいにかけません。", en: "This paper is coarse, so you can't write neatly on it." }, accept: ["harsh", "crude", "rough-textured"], hint: "Texture, waves and manners. ことばがあらい = someone's language is rough. Don't confuse it with あらいます (to wash)." },
        { id: "ja-u144l2-mabushii", type: "vocab", front: "まぶしい", reading: "mabushii", meaning: "dazzling, too bright", example: { jp: "たいようがまぶしいので、ぼうしをかぶります。", en: "The sun is dazzling, so I'll wear a hat." }, accept: ["glaring", "blinding", "radiant"], hint: "Light so bright it hurts. Used of people it means someone shines in a way that makes you feel small — a compliment tinged with envy." },
        { id: "ja-u144l2-ayashii", type: "vocab", front: "あやしい", reading: "ayashii", meaning: "suspicious, dubious", example: { jp: "そらがあやしいので、かさをもっていったほうがいいです。", en: "The sky looks doubtful, so you'd better take an umbrella." }, accept: ["fishy", "shady", "doubtful"], hint: "Anything you don't quite trust — a person, a website, or the weather. あやしいメール is the standard phrase for a scam email." },
        { id: "ja-u144l2-kudaranai", type: "vocab", front: "くだらない", reading: "kudaranai", meaning: "worthless, silly", example: { jp: "くだらないばんぐみですが、みているとわらってしまいます。", en: "It's a silly programme, but it makes me laugh when I watch it." }, accept: ["trivial", "pointless", "rubbish"], hint: "Dismissive but not angry — often affectionate about something you enjoy anyway. Harsher than つまらない." },
      ],
    },
    {
      id: "ja-u144l3",
      unit: 144,
      lesson: 3,
      title: "How a situation feels",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a situation rather than a thing: あわただしい, みっともない, ものたりない, おそろしい, けわしい.",
      items: [
        { id: "ja-u144l3-awatadashii", type: "vocab", front: "あわただしい", reading: "awatadashii", meaning: "hectic, rushed", example: { jp: "しけんのまえは、まいにちあわただしかったです。", en: "The days before the exam were hectic." }, accept: ["frantic", "busy and rushed", "hurried"], hint: "いそがしい is having a lot to do; あわただしい is the feeling of not having time to breathe between things." },
        { id: "ja-u144l3-mittomonai", type: "vocab", front: "みっともない", reading: "mittomonai", meaning: "unseemly, embarrassing", example: { jp: "おおきなこえでけんかするのはみっともないです。", en: "Arguing loudly in public is unseemly." }, accept: ["shameful", "not a good look", "disgraceful"], hint: "About how it LOOKS to others, not how wrong it is. That outside-eye judgement is what separates it from わるい." },
        { id: "ja-u144l3-monotarinai", type: "vocab", front: "ものたりない", reading: "monotarinai", meaning: "not quite enough", example: { jp: "あじはいいですが、すこしものたりないです。", en: "The taste is good, but it's not quite enough." }, accept: ["unsatisfying", "lacking something", "leaves you wanting"], hint: "Not 'bad' — 'almost'. The most useful polite complaint in the language, because it criticizes without condemning." },
        { id: "ja-u144l3-osoroshii", type: "vocab", front: "おそろしい", reading: "osoroshii", meaning: "dreadful, frightening", example: { jp: "じしんのニュースをみて、おそろしくなりました。", en: "I watched the news about the earthquake and became frightened." }, accept: ["terrible", "fearsome", "appalling"], hint: "Heavier and more formal than こわい — こわい is your feeling, おそろしい is a quality of the thing itself." },
        { id: "ja-u144l3-kewashii", type: "vocab", front: "けわしい", reading: "kewashii", meaning: "steep; grim (expression)", example: { jp: "みちがけわしかったので、やまにのぼるのに5じかんかかりました。", en: "The path was steep, so climbing the mountain took five hours." }, accept: ["rugged", "harsh", "severe"], hint: "Mountains and faces: けわしいかお is a hard, forbidding expression. Both senses mean 'difficult to get past'." },
        { id: "ja-u144l3-mendokusai", type: "vocab", front: "めんどうくさい", reading: "mendōkusai", meaning: "too much trouble", example: { jp: "りょうりはすきですが、あとのかたづけがめんどうくさいです。", en: "I like cooking, but the cleaning up afterwards is a pain." }, accept: ["a hassle", "bothersome", "can't be bothered"], hint: "The most-used adjective in casual Japanese, often shortened to めんどい. It's not that the task is hard — it's that you don't want to." },
      ],
    },
    {
      id: "ja-u144l4",
      unit: 144,
      lesson: 4,
      title: "Everyday judgements",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "React to how something turned out: きつい, ゆるい, えらい, ずるい, ありがたい, もうしわけない.",
      items: [
        { id: "ja-u144l4-kitsui", type: "vocab", front: "きつい", reading: "kitsui", meaning: "tight; tough", example: { jp: "このくつはきついので、あるくとあしがいたくなります。", en: "These shoes are tight, so my feet hurt when I walk." }, accept: ["demanding", "harsh", "snug"], hint: "Clothes, schedules and words: きついしごと is gruelling work, きついことをいう is saying something harsh." },
        { id: "ja-u144l4-yurui", type: "vocab", front: "ゆるい", reading: "yurui", meaning: "loose, lax", example: { jp: "ベルトがゆるいので、あたらしいのをかいます。", en: "My belt is loose, so I'll buy a new one." }, accept: ["slack", "lenient", "baggy"], hint: "The opposite of きつい in both senses — ゆるいきそく are lax rules. Also a compliment for relaxed, low-pressure things." },
        { id: "ja-u144l4-erai", type: "vocab", front: "えらい", reading: "erai", meaning: "admirable; high-ranking", example: { jp: "まいにちはやくおきて、べんきょうしてえらいですね。", en: "Getting up early and studying every day — that's impressive." }, accept: ["great", "commendable", "important (person)"], hint: "Two jobs: praising effort (usually to someone younger) and marking rank — えらいひと means a big shot. Said to a superior it can sound patronising." },
        { id: "ja-u144l4-zurui", type: "vocab", front: "ずるい", reading: "zurui", meaning: "unfair, sly", example: { jp: "じぶんだけおおくとるのはずるいですよ。", en: "Taking more just for yourself isn't fair." }, accept: ["cunning", "not fair", "cheating"], hint: "The playground protest word, and adults use it too — half accusation, half envy. ずるい！ on its own means 'no fair!'." },
        { id: "ja-u144l4-tondemonai", type: "vocab", front: "とんでもない", reading: "tondemonai", meaning: "outrageous; not at all", example: { jp: "そんなたかいものは、とんでもないです。", en: "Something that expensive is out of the question." }, accept: ["absurd", "no way", "don't mention it"], hint: "Two lives: 'absurd' about a thing, and a modest 'not at all!' when someone thanks or praises you. The second is the one you will use." },
        { id: "ja-u144l4-monosugoi", type: "vocab", front: "ものすごい", reading: "monosugoi", meaning: "tremendous, terrific", example: { jp: "ものすごいひとで、まえにすすめませんでした。", en: "The crowd was tremendous — I couldn't move forward." }, accept: ["enormous", "incredible", "awful"], hint: "Sheer scale, good or bad — a crowd, a noise, a talent. Adverbially ものすごく just means 'really': ものすごくおいしい." },
      ],
    },
  ],
};
