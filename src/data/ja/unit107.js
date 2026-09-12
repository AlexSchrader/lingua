// Unit 107 — ニュース・しゃかい (News and society) — B1 / JLPT N3
// Strand B. The vocabulary of a news story and the society it reports on: how news
// is made (きじ／ほうどう／しゅざい), who it is about (こくみん／せだい／そしき), what goes
// wrong (はんざい／しつぎょう／じたい), and how it is argued about (よろん／ちょうさ／かだい).
// しゃかい, せいじ, せんきょ, ほうりつ, ぜいきん, けいざい and じけん are taught below B1 and
// appear here in examples only. NOTE: the taught きしゃ (u96) is 汽車 "steam train", NOT
// 記者 "reporter" — so this unit says しんぶんの ひと instead. lang/unit/lesson are stamped in src/data/index.js.
export const UNIT107 = {
  id: "ja-u107",
  lang: "ja",
  title: "ニュース・しゃかい",
  order: 107,
  stage: "b1",
  lessons: [
    {
      id: "ja-u107l1",
      unit: 107,
      lesson: 1,
      title: "How news is made",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a news story and where it came from: きじ ほうどう とりあげる みだし しゅざい マスコミ.",
      items: [
        { id: "ja-u107l1-kiji", type: "vocab", front: "きじ", reading: "kiji", meaning: "article", example: { jp: "けさの しんぶんの きじを よんでから、かいしゃに いきました。", en: "I read this morning's newspaper article, then went to the office." }, accept: ["news story", "piece", "report"] },
        { id: "ja-u107l1-hodo", type: "vocab", front: "ほうどう", reading: "hōdō", meaning: "news coverage", example: { jp: "テレビは その じけんを ながい じかん ほうどうして いて、まちの ひとも しんぱいして います。", en: "Television has covered that incident at length, and people in town are worried too." }, accept: ["reporting", "media coverage", "to report"] },
        { id: "ja-u107l1-toriageru", type: "vocab", front: "とりあげる", reading: "toriageru", meaning: "to take up (a topic)", example: { jp: "しんぶんは わかい ひとの しごとの もんだいを とりあげて、くわしく せつめいしました。", en: "The paper took up the problem of young people's jobs and explained it in detail." }, accept: ["to cover", "to feature", "to bring up"] },
        { id: "ja-u107l1-midashi", type: "vocab", front: "みだし", reading: "midashi", meaning: "headline", example: { jp: "いそがしいので みだしだけ よんで、きじは あとで よみます。", en: "I'm busy, so I read only the headlines and save the articles for later." }, drill: { jp: "みだしを よみます。", en: "I read the headline." }, accept: ["heading", "title"] },
        { id: "ja-u107l1-shuzai", type: "vocab", front: "しゅざい", reading: "shuzai", meaning: "news gathering", example: { jp: "しんぶんの ひとが まちに きて、みせの ひとに しゅざいを して いました。", en: "Someone from the newspaper came to town and gathered material from the shopkeepers." }, accept: ["reporting", "interviewing", "research for a story"] },
        { id: "ja-u107l1-masukomi", type: "vocab", front: "マスコミ", reading: "masukomi", meaning: "the media", example: { jp: "マスコミが つたえる ことが、いつも ただしいとは かぎりません。", en: "What the media reports isn't always correct." }, accept: ["mass media", "the press"], hint: "マスコミ is clipped from \"mass communication\" — Japanese shortens loanwords to four morae wherever it can." },
      ],
    },
    {
      id: "ja-u107l2",
      unit: 107,
      lesson: 2,
      title: "People and institutions",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the groups a news story is about: こくみん せだい そしき けんり ふくし とうひょう.",
      items: [
        { id: "ja-u107l2-kokumin", type: "vocab", front: "こくみん", reading: "kokumin", meaning: "the public", example: { jp: "その ほうりつは こくみんの せいかつに おおきな えいきょうを あたえました。", en: "That law had a big effect on the public's daily life." }, accept: ["citizens", "the nation", "the people"] },
        { id: "ja-u107l2-sedai", type: "vocab", front: "せだい", reading: "sedai", meaning: "generation", example: { jp: "わかい せだいと うえの せだいでは、かんがえかたが ことなります。", en: "The younger generation and the older generation think differently." }, accept: ["age group", "cohort"] },
        { id: "ja-u107l2-soshiki", type: "vocab", front: "そしき", reading: "soshiki", meaning: "organisation", example: { jp: "この そしきは ちいさい まちの こどもたちを たすけて います。", en: "This organisation helps children in small towns." }, drill: { jp: "そしきは ちいさいです。", en: "The organisation is small." }, accept: ["body", "group", "structure"] },
        { id: "ja-u107l2-kenri", type: "vocab", front: "けんり", reading: "kenri", meaning: "right", example: { jp: "だれにでも じぶんの いけんを いう けんりが あります。", en: "Everyone has the right to state their own opinion." }, accept: ["entitlement", "claim"] },
        { id: "ja-u107l2-fukushi", type: "vocab", front: "ふくし", reading: "fukushi", meaning: "welfare", example: { jp: "この まちは ふくしに おかねを つかって いますから、みんな あんしんです。", en: "This town spends money on welfare, so everyone feels secure." }, accept: ["social services", "wellbeing"] },
        { id: "ja-u107l2-tohyo", type: "vocab", front: "とうひょう", reading: "tōhyō", meaning: "voting", example: { jp: "せんきょの ひは あめでしたが、たくさんの ひとが とうひょうしました。", en: "It rained on election day, but a lot of people voted." }, accept: ["a vote", "ballot", "to vote"] },
      ],
    },
    {
      id: "ja-u107l3",
      unit: 107,
      lesson: 3,
      title: "When things go wrong",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report a problem in the news and what is being done about it: はんざい たいさく しつぎょう じたい たいおう ふせぐ.",
      items: [
        { id: "ja-u107l3-hanzai", type: "vocab", front: "はんざい", reading: "hanzai", meaning: "crime", example: { jp: "この まちは はんざいが すくなくて、よるも あんぜんです。", en: "There's little crime in this town, and it's safe at night too." }, accept: ["offence", "criminal act"] },
        { id: "ja-u107l3-taisaku", type: "vocab", front: "たいさく", reading: "taisaku", meaning: "countermeasure", example: { jp: "まちは じこを ふせぐ たいさくを かんがえて います。", en: "The town is working out measures to prevent accidents." }, drill: { jp: "たいさくを かんがえます。", en: "We think of a countermeasure." }, accept: ["measures", "response plan", "solution"] },
        { id: "ja-u107l3-shitsugyo", type: "vocab", front: "しつぎょう", reading: "shitsugyō", meaning: "unemployment", example: { jp: "しつぎょうする ひとが ふえて、まちの みせも こまって います。", en: "More people are unemployed, and the town's shops are struggling too." }, accept: ["losing one's job", "joblessness"] },
        { id: "ja-u107l3-jitai", type: "vocab", front: "じたい", reading: "jitai", meaning: "situation", example: { jp: "あめが つよく なって、たいへんな じたいに なりました。", en: "The rain got heavier and it turned into a serious situation." }, drill: { jp: "じたいが かわりました。", en: "The situation changed." }, accept: ["state of affairs", "circumstances"], hint: "じたい is a situation that has gone somewhere bad — news language. A neutral situation is じょうきょう." },
        { id: "ja-u107l3-taio", type: "vocab", front: "たいおう", reading: "taiō", meaning: "response", example: { jp: "みせの ひとの たいおうが はやくて、もんだいは すぐに おわりました。", en: "The shop staff's response was quick, and the problem ended right away." }, accept: ["handling", "dealing with", "to respond"] },
        { id: "ja-u107l3-fusegu", type: "vocab", front: "ふせぐ", reading: "fusegu", meaning: "to prevent", example: { jp: "かぜを ふせぐ ために、まいばん はやく ねる ことに しました。", en: "To fend off a cold, I decided to go to bed early every night." }, accept: ["to protect against", "to stop", "to guard"] },
      ],
    },
    {
      id: "ja-u107l4",
      unit: 107,
      lesson: 4,
      title: "The public argument",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow a public debate and cite what supports it: よろん ちょうさ とうけい ほうしん かだい しえん.",
      items: [
        { id: "ja-u107l4-yoron", type: "vocab", front: "よろん", reading: "yoron", meaning: "public opinion", example: { jp: "よろんは その けいかくに はんたいでしたが、せいふは やめませんでした。", en: "Public opinion was against that plan, but the government didn't stop." }, accept: ["popular opinion", "the public mood"] },
        { id: "ja-u107l4-chosa", type: "vocab", front: "ちょうさ", reading: "chōsa", meaning: "survey", example: { jp: "まちの ひとに ちょうさを して、けっかを はっぴょうしました。", en: "They surveyed the townspeople and announced the results." }, drill: { jp: "ちょうさを します。", en: "We carry out a survey." }, accept: ["investigation", "study", "research"] },
        { id: "ja-u107l4-tokei", type: "vocab", front: "とうけい", reading: "tōkei", meaning: "statistics", example: { jp: "とうけいに よると、こどもの かずは まいとし へって います。", en: "According to the statistics, the number of children falls every year." }, accept: ["figures", "data"], hint: "とうけいに よると is the standard way to cite a number in Japanese — the same frame as てんきよほうに よると." },
        { id: "ja-u107l4-hoshin", type: "vocab", front: "ほうしん", reading: "hōshin", meaning: "policy", example: { jp: "かいしゃの ほうしんが かわって、みんな とても いそがしく なりました。", en: "The company's policy changed, and everyone got very busy." }, accept: ["course", "direction", "guideline"] },
        { id: "ja-u107l4-kadai", type: "vocab", front: "かだい", reading: "kadai", meaning: "issue", example: { jp: "この まちの いちばん おおきな かだいは、わかい ひとが すくない ことです。", en: "This town's biggest issue is that there are few young people." }, accept: ["challenge", "task", "problem to solve"] },
        { id: "ja-u107l4-shien", type: "vocab", front: "しえん", reading: "shien", meaning: "support", example: { jp: "まちは こどもの いる かぞくを しえんして、まいつき おかねを だして います。", en: "The town supports families with children and pays out money every month." }, drill: { jp: "しえんを します。", en: "We give support." }, accept: ["assistance", "backing", "aid"] },
      ],
    },
  ],
};
