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
        { id: "ja-u110l1-tejun", type: "vocab", front: "てじゅん", reading: "tejun", meaning: "procedure", example: { jp: "あたらしい てじゅんを おぼえてから、さぎょうを はじめました。", en: "I learned the new procedure, then started the work." }, drill: { jp: "てじゅんを かくにんします。", en: "I check the procedure." }, accept: ["steps", "process", "the order of things"], hint: "te-JUN — two beats, the ん held. て is a hand and じゅん is an order, so it is the order your hands do things in. ほうほう is HOW; てじゅん is the sequence of steps." },
        { id: "ja-u110l1-sagyo", type: "vocab", front: "さぎょう", reading: "sagyō", meaning: "task", example: { jp: "きょうの さぎょうは ごごからですから、あさは じゅんびを します。", en: "Today's work starts in the afternoon, so I'll prepare in the morning." }, drill: { jp: "さぎょうが おわりました。", en: "The task is finished." }, accept: ["work", "operation", "job"], hint: "さぎょう is a concrete piece of work with hands or a screen; しごと is your job as a whole." },
        { id: "ja-u110l1-shiji", type: "vocab", front: "しじ", reading: "shiji", meaning: "instruction", example: { jp: "かいしゃの しじを まってから、しごとを つづけます。", en: "I'll wait for the company's instructions, then carry on with the work." }, drill: { jp: "しじが わかりません。", en: "I do not understand the instruction." }, accept: ["directions", "order", "to instruct"], hint: "shi-JI — two beats. し is to point and じ is to show, so it is pointing out what to do. めいれい is an order you cannot refuse; しじ is a work instruction from above." },
        { id: "ja-u110l1-kakunin", type: "vocab", front: "かくにん", reading: "kakunin", meaning: "confirmation", example: { jp: "メールを おくる まえに、なまえと じゅうしょを かくにんします。", en: "Before sending the email I confirm the name and address." }, drill: { jp: "かくにんの メールを おくります。", en: "I will send a confirmation email." }, accept: ["checking", "to confirm", "verification"], hint: "ka-ku-NIN — three beats, the ん held. かく is sure and にん is to recognise, so it is making sure for yourself. たしかめる is the verb; かくにん is the noun an office uses." },
        { id: "ja-u110l1-susumeru", type: "vocab", front: "すすめる", reading: "susumeru", meaning: "to move forward", example: { jp: "けいかくを すすめる まえに、みんなの いけんを ききます。", en: "Before moving the plan forward, I'll ask everyone's opinion." }, drill: { jp: "さぎょうを すすめる。", en: "I push the task forward." }, accept: ["to advance", "to carry on with", "to push ahead"], hint: "Transitive: YOU move something forward. Its intransitive partner すすみます (already taught) is the thing moving by itself — 「はなしが すすむ」." },
        { id: "ja-u110l1-tanto", type: "vocab", front: "たんとう", reading: "tantō", meaning: "being in charge", example: { jp: "わたしが この しごとを たんとうして いますから、しつもんは わたしに して ください。", en: "I'm in charge of this job, so please ask me any questions." }, drill: { jp: "たんとうの ひとに ききます。", en: "I will ask the person in charge." }, accept: ["responsibility for", "handling", "in charge"], hint: "tan-TŌ — the ん is held and the last beat is long. たん is to carry and とう is to take on, so it is carrying a job on your own shoulders. 「たんとうの ひと」 is who you ask." },
      ],
    },
    {
      id: "ja-u110l2",
      unit: 110,
      lesson: 2,
      title: "Meetings and paperwork",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle the paperwork around a job: うちあわせ ていしゅつ しゅうせい きょか さんか ちょうせい.",
      items: [
        { id: "ja-u110l2-uchiawase", type: "vocab", front: "うちあわせ", reading: "uchiawase", meaning: "briefing", example: { jp: "あしたの うちあわせで、しりょうを みんなに みせます。", en: "At tomorrow's briefing I'll show everyone the materials." }, drill: { jp: "うちあわせは ごごです。", en: "The briefing is in the afternoon." }, accept: ["planning meeting", "prior discussion", "arrangement"], hint: "かいぎ is a formal meeting; うちあわせ is the short working session where two or three people line up the details." },
        { id: "ja-u110l2-teishutsu", type: "vocab", front: "ていしゅつ", reading: "teishutsu", meaning: "submission", example: { jp: "レポートを きんようびまでに ていしゅつしなければ なりません。", en: "I have to submit the report by Friday." }, drill: { jp: "ていしゅつを します。", en: "I submit it." }, accept: ["handing in", "to submit", "filing"], hint: "tei-SHU-tsu — three beats. てい is to offer up and しゅつ is out, so it is putting something out to be received. It is always TO an authority, which is why だす alone sounds too casual for it." },
        { id: "ja-u110l2-shusei", type: "vocab", front: "しゅうせい", reading: "shūsei", meaning: "revision", example: { jp: "しりょうを すこし しゅうせいしてから、もう いちど おくります。", en: "I'll revise the materials a little, then send them again." }, drill: { jp: "しゅうせいが おわりました。", en: "The revision is finished." }, accept: ["correction", "to amend", "fix"], hint: "shū-SEI — the first beat is long. しゅう is to mend and せい is to correct, so it is fixing what is already there. なおす is the plain verb; しゅうせい is what a document gets." },
        { id: "ja-u110l2-kyoka", type: "vocab", front: "きょか", reading: "kyoka", meaning: "permission", example: { jp: "しゃしんを とる まえに、みせの ひとの きょかを もらいました。", en: "Before taking photos I got the shopkeeper's permission." }, drill: { jp: "きょかを もらいました。", en: "I got permission." }, accept: ["approval", "authorisation", "consent"], hint: "KYO-ka — two beats, きょ is ONE beat. きょ is to permit and か is to allow. It is official permission, so it pairs with もらう and だす — not with いい, which is informal consent." },
        { id: "ja-u110l2-sanka", type: "vocab", front: "さんか", reading: "sanka", meaning: "to take part", example: { jp: "あしたの かいぎに さんかしますが、はやく かえります。", en: "I'll take part in tomorrow's meeting, but I'll leave early." }, drill: { jp: "しあいに さんかします。", en: "I will take part in the match." }, accept: ["to participate", "to attend", "join"], hint: "さんかする takes に: 「かいぎに さんかします」. Using を is the commonest learner slip here." },
        { id: "ja-u110l2-chosei", type: "vocab", front: "ちょうせい", reading: "chōsei", meaning: "adjustment", example: { jp: "みんなの よていを ちょうせいして、あたらしい ひを きめました。", en: "We adjusted everyone's schedules and settled on a new day." }, drill: { jp: "ちょうせいを します。", en: "I make an adjustment." }, accept: ["coordination", "to arrange", "tuning"], hint: "chō-SEI — the first beat is long. ちょう is to tune and せい is to set in order, so it is nudging things until they fit together. A diary clash is settled by ちょうせい, not by きめる." },
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
        { id: "ja-u110l3-kyoryoku", type: "vocab", front: "きょうりょく", reading: "kyōryoku", meaning: "cooperation", example: { jp: "みんなが きょうりょくしたので、しごとは はやく おわりました。", en: "Everyone cooperated, so the work finished early." }, drill: { jp: "きょうりょくが ひつようです。", en: "Cooperation is needed." }, accept: ["collaboration", "working together", "to cooperate"], hint: "kyō-RYO-ku — the first beat is long. きょう is together and りょく is strength, so it is strength pooled. てつだう is one person helping another; きょうりょく is everyone pulling at once." },
        { id: "ja-u110l3-sekinin", type: "vocab", front: "せきにん", reading: "sekinin", meaning: "responsibility", example: { jp: "この しごとの せきにんは わたしに ありますから、さいごまで やります。", en: "The responsibility for this job is mine, so I'll see it to the end." }, drill: { jp: "せきにんが おもいです。", en: "The responsibility is heavy." }, accept: ["accountability", "duty", "liability"], hint: "se-ki-NIN — three beats, the ん held. せき is a duty and にん is to bear it. ⚠️ Japanese says responsibility EXISTS somewhere: 「せきにんは わたしに あります」, rather than I have it." },
        { id: "ja-u110l3-hikiukeru", type: "vocab", front: "ひきうける", reading: "hikiukeru", meaning: "to take on", example: { jp: "あたらしい しごとを ひきうけましたが、じかんが たりません。", en: "I took on a new job, but there isn't enough time." }, drill: { jp: "せきにんを ひきうける。", en: "I take on the responsibility." }, accept: ["to undertake", "to accept (a task)", "to shoulder"], hint: "hi-ki-u-KE-ru — five beats. ひく, to pull, plus うける, to receive: pulling a job toward yourself. It implies you agreed to it, so it is never used of work simply dumped on you." },
        { id: "ja-u110l3-kaizen", type: "vocab", front: "かいぜん", reading: "kaizen", meaning: "improvement", example: { jp: "てじゅんを かいぜんしてから、まちがえる ことが へりました。", en: "After we improved the procedure, mistakes decreased." }, drill: { jp: "かいぜんの けいかくを つくります。", en: "We draw up an improvement plan." }, accept: ["to improve", "betterment", "reform"], hint: "kai-ZEN — two beats, the ん held. かい is to change and ぜん is good, so it is changing for the better. It is the factory-floor word that English borrowed whole as kaizen." },
        { id: "ja-u110l3-noritsu", type: "vocab", front: "のうりつ", reading: "nōritsu", meaning: "efficiency", example: { jp: "あさの ほうが のうりつが いいので、たいせつな しごとは あさに します。", en: "I'm more efficient in the morning, so I do the important work then." }, drill: { jp: "のうりつが いいです。", en: "The efficiency is good." }, accept: ["productivity", "how well it goes", "output per effort"], hint: "nō-RI-tsu — the first beat is long. のう is capacity and りつ is a rate, so it is output per effort. It takes いい and わるい rather than たかい, which is a common slip." },
        { id: "ja-u110l3-tassei", type: "vocab", front: "たっせい", reading: "tassei", meaning: "achievement", example: { jp: "ことしの もくひょうを たっせいして、みんな とても うれしかったです。", en: "We achieved this year's goal, and everyone was very happy." }, drill: { jp: "たっせいが うれしいです。", en: "The achievement is a joy." }, accept: ["attainment", "to accomplish", "reaching a goal"], hint: "tas-SEI — small pause, then sei. たつ is to reach and せい is to complete, so it is arriving at a goal you set. What you achieve takes を, and もくひょう is what you achieve it on." },
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
        { id: "ja-u110l4-kanri", type: "vocab", front: "かんり", reading: "kanri", meaning: "management", example: { jp: "この へやの かぎは わたしが かんりして いますから、つかう ときは いって ください。", en: "I manage the key to this room, so tell me when you want to use it." }, drill: { jp: "かんりの しごとは たいへんです。", en: "Management work is demanding." }, accept: ["administration", "control", "to look after"], hint: "kan-RI — two beats, the ん held. かん is to oversee and り is to put in order, so it is keeping something in good order. It covers keys, data and staff alike." },
        { id: "ja-u110l4-hyoka", type: "vocab", front: "ひょうか", reading: "hyōka", meaning: "evaluation", example: { jp: "せんせいの ひょうかは たかかったですが、わたしは まだ まんぞくして いません。", en: "The teacher's evaluation was high, but I'm still not satisfied." }, drill: { jp: "ひょうかが さがりました。", en: "The evaluation has gone down." }, accept: ["assessment", "rating", "appraisal"], hint: "HYŌ-ka — the first beat is long, ひょ is ONE beat. ひょう is to appraise and か is a price, so it is putting a value on something. 「ひょうかが たかい」 is well regarded." },
        { id: "ja-u110l4-shoshin", type: "vocab", front: "しょうしん", reading: "shōshin", meaning: "promotion", example: { jp: "ちちは ことし しょうしんして、しごとが いそがしく なりました。", en: "My father was promoted this year, and his work got busier." }, drill: { jp: "しょうしんを よろこびました。", en: "He was delighted at the promotion." }, accept: ["advancement", "moving up", "to be promoted"], hint: "shō-SHIN — the first beat is long. しょう is to rise and しん is to advance. Japanese companies traditionally promote by years served, so しょうしん often arrives with age rather than merit." },
        { id: "ja-u110l4-kenshu", type: "vocab", front: "けんしゅう", reading: "kenshū", meaning: "training", example: { jp: "あたらしい ひとは いっしゅうかん けんしゅうを してから、しごとを はじめます。", en: "New people do a week of training, then start work." }, drill: { jp: "けんしゅうは ごごからです。", en: "The training starts in the afternoon." }, accept: ["course", "in-service training", "workshop"], hint: "ken-SHŪ — the ん is held and the last beat is long. けん is to polish and しゅう is to learn, so it is training on the job. べんきょう is study; けんしゅう is what your employer sends you to." },
        { id: "ja-u110l4-noryoku", type: "vocab", front: "のうりょく", reading: "nōryoku", meaning: "ability", example: { jp: "その しごとには たかい のうりょくが ひつようですが、けいけんも たいせつです。", en: "That job needs high ability, but experience matters too." }, drill: { jp: "のうりょくが たかい ひとです。", en: "She is a person of high ability." }, accept: ["capability", "skill", "competence"], hint: "nō-RYO-ku — the first beat is long. のう is capacity and りょく is power, so it is what you are able to do. けいけん is what you have done; のうりょく is what you could do." },
        { id: "ja-u110l4-shokuba", type: "vocab", front: "しょくば", reading: "shokuba", meaning: "workplace", example: { jp: "あたらしい しょくばは いえから ちかくて、まいにち あるいて いきます。", en: "My new workplace is close to home, so I walk there every day." }, drill: { jp: "しょくばの ひとは しんせつです。", en: "The people at my workplace are kind." }, accept: ["place of work", "office", "job site"], hint: "sho-ku-BA — three beats. しょく is an occupation and ば is a place. It means the human environment as much as the building, which is why 「しょくばの ひと」 is such a common phrase." },
      ],
    },
  ],
};
