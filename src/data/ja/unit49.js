// Unit 49 — しごと・しゅうしょく ("Work & career") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 working-life layer: job-hunting and the abstract nouns needed to talk about a
// career (ability, responsibility, effort, success). Examples stay in A1+A2 grammar and
// reuse A1/A2 vocab where possible. Naturalness queued for native review.
export const UNIT49 = {
  id: "ja-u49", lang: "ja", title: "しごと・しゅうしょく", order: 49, stage: "b1",
  lessons: [
    {
      id: "ja-u49l1", unit: 49, lesson: 1, title: "Finding a job", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about job-hunting: しゅうしょく めんせつ しかく きゅうりょう のうりょく もくひょう.",
      items: [
        { id: "ja-u49l1-shushoku", type: "vocab", front: "しゅうしょく", reading: "shūshoku", meaning: "finding a job", example: { jp: "しゅうしょくのめんせつです。", en: "It's a job-hunting interview." }, accept: ["getting a job", "employment"], hint: "しゅうしょくする = to find a job / start a career." },
        { id: "ja-u49l1-mensetsu", type: "vocab", front: "めんせつ", reading: "mensetsu", meaning: "interview", example: { jp: "あしためんせつがあります。", en: "I have an interview tomorrow." }, accept: ["job interview"] },
        { id: "ja-u49l1-shikaku", type: "vocab", front: "しかく", reading: "shikaku", meaning: "qualification", example: { jp: "あたらしいしかくをとります。", en: "I'll get a new qualification." }, accept: ["certification", "credential"] },
        { id: "ja-u49l1-kyuryo", type: "vocab", front: "きゅうりょう", reading: "kyūryō", meaning: "salary", example: { jp: "きゅうりょうにまんぞくです。", en: "I'm satisfied with my salary." }, accept: ["pay", "wages"] },
        { id: "ja-u49l1-noryoku", type: "vocab", front: "のうりょく", reading: "nōryoku", meaning: "ability", example: { jp: "のうりょくがたいせつです。", en: "Ability is important." }, accept: ["capability", "skill"] },
        { id: "ja-u49l1-mokuhyo", type: "vocab", front: "もくひょう", reading: "mokuhyō", meaning: "goal", example: { jp: "もくひょうがあります。", en: "I have a goal." }, accept: ["target", "objective"], hint: "もくひょう (a goal you aim for) vs もくてき (the purpose/reason)." },
      ],
    },
    {
      id: "ja-u49l2", unit: 49, lesson: 2, title: "On the job", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about work itself: せきにん やくわり どりょく せいこう しっぱい しめきり.",
      items: [
        { id: "ja-u49l2-sekinin", type: "vocab", front: "せきにん", reading: "sekinin", meaning: "responsibility", example: { jp: "せきにんがあります。", en: "I have a responsibility." }, accept: ["duty", "liability"] },
        { id: "ja-u49l2-yakuwari", type: "vocab", front: "やくわり", reading: "yakuwari", meaning: "role", example: { jp: "たいせつなやくわりです。", en: "It's an important role." }, accept: ["part", "function"] },
        { id: "ja-u49l2-doryoku", type: "vocab", front: "どりょく", reading: "doryoku", meaning: "effort", example: { jp: "まいにちどりょくします。", en: "I make an effort every day." }, accept: ["hard work", "endeavor"], hint: "どりょくする = to make an effort / try hard." },
        { id: "ja-u49l2-seiko", type: "vocab", front: "せいこう", reading: "seikō", meaning: "success", example: { jp: "しごとがせいこうしました。", en: "The work was a success." }, accept: ["succeeding"] },
        { id: "ja-u49l2-shippai", type: "vocab", front: "しっぱい", reading: "shippai", meaning: "failure", example: { jp: "しっぱいはこわくないです。", en: "Failure isn't scary." }, accept: ["mistake", "failing"] },
        { id: "ja-u49l2-shimekiri", type: "vocab", front: "しめきり", reading: "shimekiri", meaning: "deadline", example: { jp: "しめきりはあしたです。", en: "The deadline is tomorrow." }, accept: ["due date", "cutoff"] },
      ],
    },
  ],
};
