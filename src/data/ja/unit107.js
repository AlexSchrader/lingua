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
        { id: "ja-u107l1-kiji", type: "vocab", front: "きじ", reading: "kiji", meaning: "article", example: { jp: "けさの しんぶんの きじを よんでから、かいしゃに いきました。", en: "I read this morning's newspaper article, then went to the office." }, drill: { jp: "きじを かきました。", en: "I wrote the article." }, accept: ["news story", "piece", "report"], hint: "ki-JI — two beats. き is to record and じ is a matter, so it is one written item in a paper or magazine. みだし is its headline, and ほうどう is the act of reporting it." },
        { id: "ja-u107l1-hodo", type: "vocab", front: "ほうどう", reading: "hōdō", meaning: "news coverage", example: { jp: "テレビは その じけんを ながい じかん ほうどうして いて、まちの ひとも しんぱいして います。", en: "Television has covered that incident at length, and people in town are worried too." }, drill: { jp: "ほうどうは ただしく ありませんでした。", en: "The coverage was not accurate." }, accept: ["reporting", "media coverage", "to report"], hint: "hō-DŌ — two long beats. ほう is to inform and どう is to lead, so it is informing the public. きじ is the piece itself; ほうどう is the whole activity of putting it out." },
        { id: "ja-u107l1-toriageru", type: "vocab", front: "とりあげる", reading: "toriageru", meaning: "to take up (a topic)", example: { jp: "しんぶんは わかい ひとの しごとの もんだいを とりあげて、くわしく せつめいしました。", en: "The paper took up the problem of young people's jobs and explained it in detail." }, drill: { jp: "テレビが この もんだいを とりあげる。", en: "Television takes up this problem." }, accept: ["to cover", "to feature", "to bring up"], hint: "to-ri-a-GE-ru — five beats. とる, to take, plus あげる, to raise: picking a topic up and holding it out. The topic takes を. ⚠️ It also means to confiscate, so context decides." },
        { id: "ja-u107l1-midashi", type: "vocab", front: "みだし", reading: "midashi", meaning: "headline", example: { jp: "いそがしいので みだしだけ よんで、きじは あとで よみます。", en: "I'm busy, so I read only the headlines and save the articles for later." }, drill: { jp: "みだしを よみます。", en: "I read the headline." }, accept: ["heading", "title", "a headline"], hint: "mi-DA-shi — three beats. み is to see and だし is putting out, so it is the bit put out to be seen first. Reading only the みだし is exactly what a busy commuter does." },
        { id: "ja-u107l1-shuzai", type: "vocab", front: "しゅざい", reading: "shuzai", meaning: "news gathering", example: { jp: "しんぶんの ひとが まちに きて、みせの ひとに しゅざいを して いました。", en: "Someone from the newspaper came to town and gathered material from the shopkeepers." }, drill: { jp: "しゅざいを ことわりました。", en: "I declined the interview." }, accept: ["reporting", "interviewing", "research for a story"], hint: "shu-ZA-i — three beats. しゅ is to gather and ざい is material, so it is collecting the raw stuff of a story. 「しゅざいを うける」 is to be interviewed, from the other side." },
        { id: "ja-u107l1-masukomi", type: "vocab", front: "マスコミ", reading: "masukomi", meaning: "the media", example: { jp: "マスコミが つたえる ことが、いつも ただしいとは かぎりません。", en: "What the media reports isn't always correct." }, drill: { jp: "マスコミが あつまりました。", en: "The media gathered." }, accept: ["mass media", "the press", "the news industry"], hint: "マスコミ is clipped from \"mass communication\" — Japanese shortens loanwords to four morae wherever it can." },
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
        { id: "ja-u107l2-kokumin", type: "vocab", front: "こくみん", reading: "kokumin", meaning: "the public", example: { jp: "その ほうりつは こくみんの せいかつに おおきな えいきょうを あたえました。", en: "That law had a big effect on the public's daily life." }, drill: { jp: "こくみんの いけんを ききます。", en: "They listen to the public's views." }, accept: ["citizens", "the nation", "the people"], hint: "ko-ku-MIN — three beats, the ん held. こく is a country and みん is its people, so it is the citizens as a body. ⚠️ Not simply everyone — a foreign resident is not こくみん, which is why じゅうみん also exists." },
        { id: "ja-u107l2-sedai", type: "vocab", front: "せだい", reading: "sedai", meaning: "generation (an age group)", example: { jp: "わかい せだいと うえの せだいでは、かんがえかたが ことなります。", en: "The younger generation and the older generation think differently." }, drill: { jp: "せだいが かわりました。", en: "The generation has changed." }, accept: ["age group", "cohort", "a generation"], hint: "se-DA-i — three beats. せ is an age and だい is a period, so it is the people born in one stretch. 「せだいが ちがう」 is the Japanese way of saying we are from different worlds." },
        { id: "ja-u107l2-soshiki", type: "vocab", front: "そしき", reading: "soshiki", meaning: "organisation", example: { jp: "この そしきは ちいさい まちの こどもたちを たすけて います。", en: "This organisation helps children in small towns." }, drill: { jp: "そしきは ちいさいです。", en: "The organisation is small." }, accept: ["body", "group", "structure"], hint: "so-SHI-ki — three beats. そ is to assemble and しき is a form, so it is people arranged into a structure. かいしゃ is a company; そしき is any organised body, including a charity or a gang." },
        { id: "ja-u107l2-kenri", type: "vocab", front: "けんり", reading: "kenri", meaning: "right (a legal entitlement)", example: { jp: "だれにでも じぶんの いけんを いう けんりが あります。", en: "Everyone has the right to state their own opinion." }, drill: { jp: "けんりを たいせつに します。", en: "We treat rights as important." }, accept: ["entitlement", "claim", "a legal right"], hint: "ken-RI — two beats, the ん held. けん is authority and り is a benefit, so it is a benefit the law backs. Its partner is ぎむ, a duty, and the two are always taught together." },
        { id: "ja-u107l2-fukushi", type: "vocab", front: "ふくし", reading: "fukushi", meaning: "welfare", example: { jp: "この まちは ふくしに おかねを つかって いますから、みんな あんしんです。", en: "This town spends money on welfare, so everyone feels secure." }, drill: { jp: "ふくしの しごとを して います。", en: "I work in social services." }, accept: ["social services", "wellbeing", "public welfare"], hint: "fu-ku-SHI — three beats. ふく is good fortune and し is happiness, so it is the state's work of keeping people well. It covers care for children, the elderly and the disabled alike." },
        { id: "ja-u107l2-tohyo", type: "vocab", front: "とうひょう", reading: "tōhyō", meaning: "voting", example: { jp: "せんきょの ひは あめでしたが、たくさんの ひとが とうひょうしました。", en: "It rained on election day, but a lot of people voted." }, drill: { jp: "とうひょうに いきました。", en: "I went to vote." }, accept: ["a vote", "ballot", "to vote"], hint: "tō-HYŌ — two long beats. とう is to throw and ひょう is a slip, so it is casting a paper. せんきょ is the whole election; とうひょう is the act you personally perform in it." },
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
        { id: "ja-u107l3-hanzai", type: "vocab", front: "はんざい", reading: "hanzai", meaning: "crime", example: { jp: "この まちは はんざいが すくなくて、よるも あんぜんです。", en: "There's little crime in this town, and it's safe at night too." }, drill: { jp: "はんざいが ふえました。", en: "Crime has increased." }, accept: ["offence", "criminal act", "a crime"], hint: "han-ZA-i — three beats, the ん held. はん is to break and ざい is a wrong, so it is breaking the law. The person is はんざいしゃ, and けいさつ is who deals with it." },
        { id: "ja-u107l3-taisaku", type: "vocab", front: "たいさく", reading: "taisaku", meaning: "countermeasure", example: { jp: "まちは じこを ふせぐ たいさくを かんがえて います。", en: "The town is working out measures to prevent accidents." }, drill: { jp: "たいさくを かんがえます。", en: "We think of a countermeasure." }, accept: ["measures", "response plan", "solution"], hint: "tai-SA-ku — three beats. たい is facing something and さく is a plan, so it is a plan drawn up AGAINST a problem. たいおう is how you actually handle it when it arrives." },
        { id: "ja-u107l3-shitsugyo", type: "vocab", front: "しつぎょう", reading: "shitsugyō", meaning: "unemployment", example: { jp: "しつぎょうする ひとが ふえて、まちの みせも こまって います。", en: "More people are unemployed, and the town's shops are struggling too." }, drill: { jp: "しつぎょうの もんだいは おおきいです。", en: "The unemployment problem is large." }, accept: ["losing one's job", "joblessness", "being out of work"], hint: "shi-tsu-GYŌ — the last beat is long. しつ is to lose and ぎょう is an occupation. It is both the state and the event, so 「しつぎょうしました」 means I lost my job." },
        { id: "ja-u107l3-jitai", type: "vocab", front: "じたい", reading: "jitai", meaning: "situation (a state of affairs)", example: { jp: "あめが つよく なって、たいへんな じたいに なりました。", en: "The rain got heavier and it turned into a serious situation." }, drill: { jp: "じたいが かわりました。", en: "The situation changed." }, accept: ["state of affairs", "circumstances", "the position"], hint: "じたい is a situation that has gone somewhere bad — news language. A neutral situation is じょうきょう." },
        { id: "ja-u107l3-taio", type: "vocab", front: "たいおう", reading: "taiō", meaning: "response", example: { jp: "みせの ひとの たいおうが はやくて、もんだいは すぐに おわりました。", en: "The shop staff's response was quick, and the problem ended right away." }, drill: { jp: "たいおうが おそかったです。", en: "The response was slow." }, accept: ["handling", "dealing with", "to respond"], hint: "tai-Ō — two long beats. たい is facing and おう is answering, so it is how you meet a situation as it happens. たいさく is the plan made in advance; たいおう is the handling on the day." },
        { id: "ja-u107l3-fusegu", type: "vocab", front: "ふせぐ", reading: "fusegu", meaning: "to prevent", example: { jp: "かぜを ふせぐ ために、まいばん はやく ねる ことに しました。", en: "To fend off a cold, I decided to go to bed early every night." }, drill: { jp: "じこを ふせぐ。", en: "We prevent accidents." }, accept: ["to protect against", "to stop", "to guard"], hint: "fu-SE-gu — three beats. What you prevent takes を. It is defensive: stopping something bad from reaching you, not stopping something already under way, which is とめる." },
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
        { id: "ja-u107l4-yoron", type: "vocab", front: "よろん", reading: "yoron", meaning: "public opinion", example: { jp: "よろんは その けいかくに はんたいでしたが、せいふは やめませんでした。", en: "Public opinion was against that plan, but the government didn't stop." }, drill: { jp: "よろんが かわりました。", en: "Public opinion has shifted." }, accept: ["popular opinion", "the public mood", "opinion at large"], hint: "yo-RON — two beats, the ん held. よ is the world at large and ろん is argument, so it is what the public collectively holds. A poll of it is よろんちょうさ, built from this plus ちょうさ." },
        { id: "ja-u107l4-chosa", type: "vocab", front: "ちょうさ", reading: "chōsa", meaning: "survey", example: { jp: "まちの ひとに ちょうさを して、けっかを はっぴょうしました。", en: "They surveyed the townspeople and announced the results." }, drill: { jp: "ちょうさを します。", en: "We carry out a survey." }, accept: ["investigation", "study", "research"], hint: "chō-SA — the first beat is long. ちょう is to look into and さ is to examine. It is organised fact-finding — a survey, a police inquiry, a study — not the casual checking of しらべる." },
        { id: "ja-u107l4-tokei", type: "vocab", front: "とうけい", reading: "tōkei", meaning: "statistics", example: { jp: "とうけいに よると、こどもの かずは まいとし へって います。", en: "According to the statistics, the number of children falls every year." }, drill: { jp: "とうけいを しらべました。", en: "I looked up the statistics." }, accept: ["figures", "data", "the numbers"], hint: "とうけいに よると is the standard way to cite a number in Japanese — the same frame as てんきよほうに よると." },
        { id: "ja-u107l4-hoshin", type: "vocab", front: "ほうしん", reading: "hōshin", meaning: "policy", example: { jp: "かいしゃの ほうしんが かわって、みんな とても いそがしく なりました。", en: "The company's policy changed, and everyone got very busy." }, drill: { jp: "ほうしんを せつめいします。", en: "I will explain the policy." }, accept: ["course", "direction", "guideline"], hint: "hō-SHIN — two beats, the ん held. ほう is a direction and しん is a needle, so it is the compass needle an organisation steers by. けいかく is the plan; ほうしん is the direction behind it." },
        { id: "ja-u107l4-kadai", type: "vocab", front: "かだい", reading: "kadai", meaning: "issue", example: { jp: "この まちの いちばん おおきな かだいは、わかい ひとが すくない ことです。", en: "This town's biggest issue is that there are few young people." }, drill: { jp: "かだいが おおいです。", en: "There are many issues." }, accept: ["challenge", "task", "problem to solve"], hint: "ka-DA-i — three beats. か is a lesson set and だい is a topic, so it is a problem you have been handed to solve. もんだい is a problem; かだい is one with your name on it." },
        { id: "ja-u107l4-shien", type: "vocab", front: "しえん", reading: "shien", meaning: "support", example: { jp: "まちは こどもの いる かぞくを しえんして、まいつき おかねを だして います。", en: "The town supports families with children and pays out money every month." }, drill: { jp: "しえんを します。", en: "We give support." }, accept: ["assistance", "backing", "aid"], hint: "shi-EN — two beats, the ん held. し is to prop up and えん is to help, so it is backing someone from behind. てつだう is lending a hand in the moment; しえん is sustained support." },
      ],
    },
  ],
};
