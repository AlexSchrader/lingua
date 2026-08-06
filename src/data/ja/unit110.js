// Unit 110 — しごと・てじゅん (Work and process) — B1 / JLPT N3
// Strand B. Work described as a process rather than a place: the steps (てじゅん／
// さぎょう／しじ), the paperwork around them (うちあわせ／ていしゅつ／きょか), working with
// other people (きょうりょく／せきにん／ひきうける), and being assessed (ひょうか／しょうしん).
// かいしゃ, しごと, かいぎ, しりょう, よてい, もくひょう and けいけん are taught below B1 and
// appear here in examples only. lang/unit/lesson are stamped in src/data/index.js.
export const UNIT110 = {
  id: "ja-u110",
  lang: "ja",
  title: "しごと・てじゅん",
  order: 110,
  stage: "b1",
  lessons: [
    {
      id: "ja-u110l1",
      unit: 110,
      lesson: 1,
      title: "Steps and instructions",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow and describe a work procedure step by step: てじゅん さぎょう しじ かくにん すすめる たんとう.",
      items: [
        { id: "ja-u110l1-tejun", type: "vocab", front: "てじゅん", reading: "tejun", meaning: "procedure", example: { jp: "あたらしい てじゅんを おぼえてから、さぎょうを はじめました。", en: "I learned the new procedure, then started the work." }, accept: ["steps", "process", "the order of things"] },
        { id: "ja-u110l1-sagyo", type: "vocab", front: "さぎょう", reading: "sagyō", meaning: "task", example: { jp: "きょうの さぎょうは ごごからですから、あさは じゅんびを します。", en: "Today's work starts in the afternoon, so I'll prepare in the morning." }, accept: ["work", "operation", "job"], hint: "さぎょう is a concrete piece of work with hands or a screen; しごと is your job as a whole." },
        { id: "ja-u110l1-shiji", type: "vocab", front: "しじ", reading: "shiji", meaning: "instruction", example: { jp: "かいしゃの しじを まってから、しごとを つづけます。", en: "I'll wait for the company's instructions, then carry on with the work." }, accept: ["directions", "order", "to instruct"] },
        { id: "ja-u110l1-kakunin", type: "vocab", front: "かくにん", reading: "kakunin", meaning: "confirmation", example: { jp: "メールを おくる まえに、なまえと じゅうしょを かくにんします。", en: "Before sending the email I confirm the name and address." }, accept: ["checking", "to confirm", "verification"] },
        { id: "ja-u110l1-susumeru", type: "vocab", front: "すすめる", reading: "susumeru", meaning: "to move forward", example: { jp: "けいかくを すすめる まえに、みんなの いけんを ききます。", en: "Before moving the plan forward, I'll ask everyone's opinion." }, accept: ["to advance", "to carry on with", "to push ahead"] },
        { id: "ja-u110l1-tanto", type: "vocab", front: "たんとう", reading: "tantō", meaning: "being in charge", example: { jp: "わたしが この しごとを たんとうして いますから、しつもんは わたしに して ください。", en: "I'm in charge of this job, so please ask me any questions." }, accept: ["responsibility for", "handling", "in charge"] },
      ],
    },
    {
      id: "ja-u110l2",
      unit: 110,
      lesson: 2,
      title: "Meetings and paperwork",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle the paperwork around a job: うちあわせ ていしゅつ しゅうせい きょか さんかする ちょうせい.",
      items: [
        { id: "ja-u110l2-uchiawase", type: "vocab", front: "うちあわせ", reading: "uchiawase", meaning: "briefing", example: { jp: "あしたの うちあわせで、しりょうを みんなに みせます。", en: "At tomorrow's briefing I'll show everyone the materials." }, accept: ["planning meeting", "prior discussion", "arrangement"], hint: "かいぎ is a formal meeting; うちあわせ is the short working session where two or three people line up the details." },
        { id: "ja-u110l2-teishutsu", type: "vocab", front: "ていしゅつ", reading: "teishutsu", meaning: "submission", example: { jp: "レポートを きんようびまでに ていしゅつしなければ なりません。", en: "I have to submit the report by Friday." }, accept: ["handing in", "to submit", "filing"] },
        { id: "ja-u110l2-shusei", type: "vocab", front: "しゅうせい", reading: "shūsei", meaning: "revision", example: { jp: "しりょうを すこし しゅうせいしてから、もう いちど おくります。", en: "I'll revise the materials a little, then send them again." }, accept: ["correction", "to amend", "fix"] },
        { id: "ja-u110l2-kyoka", type: "vocab", front: "きょか", reading: "kyoka", meaning: "permission", example: { jp: "しゃしんを とる まえに、みせの ひとの きょかを もらいました。", en: "Before taking photos I got the shopkeeper's permission." }, accept: ["approval", "authorisation", "consent"] },
        { id: "ja-u110l2-sanka", type: "vocab", front: "さんかする", reading: "sankasuru", meaning: "to take part", example: { jp: "あしたの かいぎに さんかしますが、はやく かえります。", en: "I'll take part in tomorrow's meeting, but I'll leave early." }, accept: ["to participate", "to attend", "join"], hint: "さんかする takes に: 「かいぎに さんかします」. Using を is the commonest learner slip here." },
        { id: "ja-u110l2-chosei", type: "vocab", front: "ちょうせい", reading: "chōsei", meaning: "adjustment", example: { jp: "みんなの よていを ちょうせいして、あたらしい ひを きめました。", en: "We adjusted everyone's schedules and settled on a new day." }, accept: ["coordination", "to arrange", "tuning"] },
      ],
    },
    {
      id: "ja-u110l3",
      unit: 110,
      lesson: 3,
      title: "Working with others",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Take on work and share it with a team: きょうりょく せきにん ひきうける かいぜん のうりつ たっせい.",
      items: [
        { id: "ja-u110l3-kyoryoku", type: "vocab", front: "きょうりょく", reading: "kyōryoku", meaning: "cooperation", example: { jp: "みんなが きょうりょくしたので、しごとは はやく おわりました。", en: "Everyone cooperated, so the work finished early." }, accept: ["collaboration", "working together", "to cooperate"] },
        { id: "ja-u110l3-sekinin", type: "vocab", front: "せきにん", reading: "sekinin", meaning: "responsibility", example: { jp: "この しごとの せきにんは わたしに ありますから、さいごまで やります。", en: "The responsibility for this job is mine, so I'll see it to the end." }, accept: ["accountability", "duty", "liability"] },
        { id: "ja-u110l3-hikiukeru", type: "vocab", front: "ひきうける", reading: "hikiukeru", meaning: "to take on", example: { jp: "あたらしい しごとを ひきうけましたが、じかんが たりません。", en: "I took on a new job, but there isn't enough time." }, accept: ["to undertake", "to accept (a task)", "to shoulder"] },
        { id: "ja-u110l3-kaizen", type: "vocab", front: "かいぜん", reading: "kaizen", meaning: "improvement", example: { jp: "てじゅんを かいぜんしてから、まちがえる ことが へりました。", en: "After we improved the procedure, mistakes decreased." }, accept: ["to improve", "betterment", "reform"] },
        { id: "ja-u110l3-noritsu", type: "vocab", front: "のうりつ", reading: "nōritsu", meaning: "efficiency", example: { jp: "あさの ほうが のうりつが いいので、たいせつな しごとは あさに します。", en: "I'm more efficient in the morning, so I do the important work then." }, accept: ["productivity", "how well it goes"] },
        { id: "ja-u110l3-tassei", type: "vocab", front: "たっせい", reading: "tassei", meaning: "achievement", example: { jp: "ことしの もくひょうを たっせいして、みんな とても うれしかったです。", en: "We achieved this year's goal, and everyone was very happy." }, accept: ["attainment", "to accomplish", "reaching a goal"] },
      ],
    },
    {
      id: "ja-u110l4",
      unit: 110,
      lesson: 4,
      title: "Being assessed",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about how work is judged and how a career moves: かんり ひょうか しょうしん けんしゅう のうりょく しょくば.",
      items: [
        { id: "ja-u110l4-kanri", type: "vocab", front: "かんり", reading: "kanri", meaning: "management", example: { jp: "この へやの かぎは わたしが かんりして いますから、つかう ときは いって ください。", en: "I manage the key to this room, so tell me when you want to use it." }, accept: ["administration", "control", "to look after"] },
        { id: "ja-u110l4-hyoka", type: "vocab", front: "ひょうか", reading: "hyōka", meaning: "evaluation", example: { jp: "せんせいの ひょうかは たかかったですが、わたしは まだ まんぞくして いません。", en: "The teacher's evaluation was high, but I'm still not satisfied." }, accept: ["assessment", "rating", "appraisal"] },
        { id: "ja-u110l4-shoshin", type: "vocab", front: "しょうしん", reading: "shōshin", meaning: "promotion", example: { jp: "ちちは ことし しょうしんして、しごとが いそがしく なりました。", en: "My father was promoted this year, and his work got busier." }, accept: ["advancement", "moving up", "to be promoted"] },
        { id: "ja-u110l4-kenshu", type: "vocab", front: "けんしゅう", reading: "kenshū", meaning: "training", example: { jp: "あたらしい ひとは いっしゅうかん けんしゅうを してから、しごとを はじめます。", en: "New people do a week of training, then start work." }, accept: ["course", "in-service training", "workshop"] },
        { id: "ja-u110l4-noryoku", type: "vocab", front: "のうりょく", reading: "nōryoku", meaning: "ability", example: { jp: "その しごとには たかい のうりょくが ひつようですが、けいけんも たいせつです。", en: "That job needs high ability, but experience matters too." }, accept: ["capability", "skill", "competence"] },
        { id: "ja-u110l4-shokuba", type: "vocab", front: "しょくば", reading: "shokuba", meaning: "workplace", example: { jp: "あたらしい しょくばは いえから ちかくて、まいにち あるいて いきます。", en: "My new workplace is close to home, so I walk there every day." }, accept: ["place of work", "office", "job site"] },
      ],
    },
  ],
};
