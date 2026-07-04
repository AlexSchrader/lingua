// Unit 25 — しごと・がっこう ("Work & school") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed.
// N4 work/study vocabulary. Examples use only A1 vocab + earlier A2 draft vocab +
// A1 grammar. Naturalness queued for the batch native review when A2 goes live.
export const UNIT25 = {
  id: "ja-u25",
  lang: "ja",
  title: "しごと・がっこう",
  order: 25,
  stage: "a2",
  lessons: [
    {
      id: "ja-u25l1", unit: 25, lesson: 1, title: "At work", cefr: "A2", dominantMode: "recall",
      canDo: "Talk about work: かいしゃ かいぎ しゃちょう めいし しゅっちょう ざんぎょう.",
      items: [
        { id: "ja-u25l1-kaisha", type: "vocab", front: "かいしゃ", reading: "kaisha", meaning: "company", example: { jp: "かいしゃにいきます。", en: "I go to the office." }, accept: ["office", "firm", "the company"] },
        { id: "ja-u25l1-kaigi", type: "vocab", front: "かいぎ", reading: "kaigi", meaning: "meeting", example: { jp: "かいぎがあります。", en: "There's a meeting." }, accept: ["conference"] },
        { id: "ja-u25l1-shacho", type: "vocab", front: "しゃちょう", reading: "shachō", meaning: "company president", example: { jp: "しゃちょうはしんせつです。", en: "The president is kind." }, accept: ["boss", "CEO", "the president"] },
        { id: "ja-u25l1-meishi", type: "vocab", front: "めいし", reading: "meishi", meaning: "business card", example: { jp: "これはめいしです。", en: "This is a business card." }, accept: ["name card"] },
        { id: "ja-u25l1-shutcho", type: "vocab", front: "しゅっちょう", reading: "shutchō", meaning: "business trip", example: { jp: "しゅっちょうにいきます。", en: "I go on a business trip." }, accept: ["work trip"] },
        { id: "ja-u25l1-zangyo", type: "vocab", front: "ざんぎょう", reading: "zangyō", meaning: "overtime", example: { jp: "きょうはざんぎょうです。", en: "I have overtime today." }, accept: ["working late"] },
      ],
    },
    {
      id: "ja-u25l2", unit: 25, lesson: 2, title: "At school", cefr: "A2", dominantMode: "recall",
      canDo: "Talk about school: じゅぎょう しけん せいと きょうしつ こくばん さくぶん.",
      items: [
        { id: "ja-u25l2-jugyo", type: "vocab", front: "じゅぎょう", reading: "jugyō", meaning: "class", example: { jp: "じゅぎょうはたのしいです。", en: "The class is fun." }, accept: ["lesson", "lecture"] },
        { id: "ja-u25l2-shiken", type: "vocab", front: "しけん", reading: "shiken", meaning: "exam", example: { jp: "あしたしけんです。", en: "There's an exam tomorrow." }, accept: ["test", "examination"] },
        { id: "ja-u25l2-seito", type: "vocab", front: "せいと", reading: "seito", meaning: "pupil", example: { jp: "せいとはまじめです。", en: "The pupils are serious." }, accept: ["student", "schoolchild"] },
        { id: "ja-u25l2-kyoshitsu", type: "vocab", front: "きょうしつ", reading: "kyōshitsu", meaning: "classroom", example: { jp: "きょうしつはしずかです。", en: "The classroom is quiet." }, accept: ["the classroom"] },
        { id: "ja-u25l2-kokuban", type: "vocab", front: "こくばん", reading: "kokuban", meaning: "blackboard", example: { jp: "こくばんをみます。", en: "I look at the blackboard." }, accept: ["chalkboard"] },
        { id: "ja-u25l2-sakubun", type: "vocab", front: "さくぶん", reading: "sakubun", meaning: "essay", example: { jp: "さくぶんをかきます。", en: "I write an essay." }, accept: ["composition", "writing"] },
      ],
    },
    {
      id: "ja-u25l3", unit: 25, lesson: 3, title: "Studying", cefr: "A2", dominantMode: "recall",
      canDo: "Study things: おぼえます わすれます しらべます まちがえます せつめいします しつもんします.",
      items: [
        { id: "ja-u25l3-oboemasu", type: "vocab", front: "おぼえます", reading: "oboemasu", meaning: "memorize", example: { jp: "なまえをおぼえます。", en: "I memorize the name." }, accept: ["remember", "learn"] },
        { id: "ja-u25l3-wasuremasu", type: "vocab", front: "わすれます", reading: "wasuremasu", meaning: "forget", example: { jp: "かさをわすれます。", en: "I forget my umbrella." }, accept: ["leave behind"] },
        { id: "ja-u25l3-shirabemasu", type: "vocab", front: "しらべます", reading: "shirabemasu", meaning: "look up", example: { jp: "ちずをしらべます。", en: "I look up the map." }, accept: ["check", "investigate", "research"] },
        { id: "ja-u25l3-machigaemasu", type: "vocab", front: "まちがえます", reading: "machigaemasu", meaning: "make a mistake", example: { jp: "みちをまちがえます。", en: "I take the wrong road." }, accept: ["get wrong", "mistake"] },
        { id: "ja-u25l3-setsumeishimasu", type: "vocab", front: "せつめいします", reading: "setsumeishimasu", meaning: "explain", example: { jp: "みちをせつめいします。", en: "I explain the way." }, accept: ["describe", "give an explanation"] },
        { id: "ja-u25l3-shitsumonshimasu", type: "vocab", front: "しつもんします", reading: "shitsumonshimasu", meaning: "ask a question", example: { jp: "せんせいにしつもんします。", en: "I ask the teacher a question." }, accept: ["question", "inquire"] },
      ],
    },
    {
      id: "ja-u25l4", unit: 25, lesson: 4, title: "Getting things done", cefr: "A2", dominantMode: "recall",
      canDo: "Manage work and school: かよいます やめます まにあいます ちこくします がんばります けいかくします.",
      items: [
        { id: "ja-u25l4-kayoimasu", type: "vocab", front: "かよいます", reading: "kayoimasu", meaning: "commute", example: { jp: "がっこうにかよいます。", en: "I commute to school." }, accept: ["go regularly", "attend"] },
        { id: "ja-u25l4-yamemasu", type: "vocab", front: "やめます", reading: "yamemasu", meaning: "quit", example: { jp: "かいしゃをやめます。", en: "I quit the company." }, accept: ["stop", "resign", "give up"] },
        { id: "ja-u25l4-maniaimasu", type: "vocab", front: "まにあいます", reading: "maniaimasu", meaning: "be in time", example: { jp: "でんしゃにまにあいます。", en: "I make the train in time." }, accept: ["make it", "be on time"] },
        { id: "ja-u25l4-chikokushimasu", type: "vocab", front: "ちこくします", reading: "chikokushimasu", meaning: "be late", example: { jp: "がっこうにちこくします。", en: "I'm late for school." }, accept: ["arrive late", "run late"] },
        { id: "ja-u25l4-ganbarimasu", type: "vocab", front: "がんばります", reading: "ganbarimasu", meaning: "do one's best", example: { jp: "しけんをがんばります。", en: "I do my best on the exam." }, accept: ["try hard", "persevere", "hang in there"] },
        { id: "ja-u25l4-keikakushimasu", type: "vocab", front: "けいかくします", reading: "keikakushimasu", meaning: "plan", example: { jp: "りょこうをけいかくします。", en: "I plan a trip." }, accept: ["make a plan", "organize"] },
      ],
    },
  ],
};
