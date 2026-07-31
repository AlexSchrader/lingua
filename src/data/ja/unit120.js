// Unit 120 — ごい・N3・2 ("N3 vocab 2") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (shikyū, jiki-family) disambiguated via hints.
export const UNIT120 = {
  id: "ja-u120", lang: "ja", title: "ごい・N3・2", order: 120, stage: "b1",
  lessons: [
    {
      id: "ja-u120l1", unit: 120, lesson: 1, title: "N3 vocab 2·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 時期 (time), 支給 (payment), 至急 (urgent), しきりに (frequently), 刺激 (stimulus), 資源 (resources).",
      items: [
        { id: "ja-u120l1-jiki", type: "vocab", front: "時期", reading: "jiki", meaning: "time", example: { jp: "いまはさくらがさく時期です。", en: "Now is the season when cherry blossoms bloom." }, accept: ["season", "period"], hint: "時期 (じき) = a time / season / period (a span, not a clock time)." },
        { id: "ja-u120l1-shikyu", type: "vocab", front: "支給", reading: "shikyū", meaning: "payment", example: { jp: "かいしゃからおかねが支給されます。", en: "Money is paid out by the company." }, accept: ["allowance"], hint: "支給する (しきゅうする) = to pay out / provide (wages, allowances)." },
        { id: "ja-u120l1-shikyu2", type: "vocab", front: "至急", reading: "shikyū", meaning: "urgent", example: { jp: "このしごとは至急おねがいします。", en: "Please handle this work urgently." }, accept: ["pressing"], hint: "至急 (しきゅう) = urgently — same reading as 支給, different kanji." },
        { id: "ja-u120l1-shikirini", type: "vocab", front: "しきりに", reading: "shikirini", meaning: "frequently", example: { jp: "あかちゃんがしきりにないています。", en: "The baby keeps crying over and over." }, accept: ["repeatedly", "eagerly"], hint: "しきりに = repeatedly / incessantly / eagerly." },
        { id: "ja-u120l1-shigeki", type: "vocab", front: "刺激", reading: "shigeki", meaning: "stimulus", example: { jp: "あたらしいまちは刺激がおおいです。", en: "The new city has a lot of stimulation." }, accept: ["stimulation", "incentive"], hint: "刺激 (しげき) = stimulus / excitement; 刺激する = to stimulate." },
        { id: "ja-u120l1-shigen", type: "vocab", front: "資源", reading: "shigen", meaning: "resources", example: { jp: "にほんは資源がすくないくにです。", en: "Japan is a country with few resources." }, accept: [] },
      ],
    },
    {
      id: "ja-u120l2", unit: 120, lesson: 2, title: "N3 vocab 2·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 事件 (event), 時刻 (time), 自殺 (suicide), 事実 (fact), 支出 (expenditure), 事情 (circumstances).",
      items: [
        { id: "ja-u120l2-jiken", type: "vocab", front: "事件", reading: "jiken", meaning: "incident", example: { jp: "まちでおおきな事件がおきました。", en: "A big incident happened in the town." }, accept: ["event", "affair"], hint: "事件 (じけん) = an incident / affair (often a serious one)." },
        { id: "ja-u120l2-jikoku", type: "vocab", front: "時刻", reading: "jikoku", meaning: "time", example: { jp: "でんしゃの時刻をしらべます。", en: "I'll look up the train times." }, accept: ["hour"], hint: "時刻 (じこく) = a point in time / the clock time (contrast 時期 = a span)." },
        { id: "ja-u120l2-jisatsu", type: "vocab", front: "自殺", reading: "jisatsu", meaning: "suicide", example: { jp: "自殺はかなしいもんだいです。", en: "Suicide is a sad problem." }, accept: [] },
        { id: "ja-u120l2-jijitsu", type: "vocab", front: "事実", reading: "jijitsu", meaning: "fact", example: { jp: "それは事実ではありません。", en: "That is not a fact." }, accept: ["truth", "reality"], hint: "事実 (じじつ) = a fact / the truth." },
        { id: "ja-u120l2-shishutsu", type: "vocab", front: "支出", reading: "shishutsu", meaning: "expenditure", example: { jp: "こんげつは支出がおおかったです。", en: "This month my expenses were high." }, accept: ["expenses"], hint: "支出 (ししゅつ) = expenditure / spending. Opposite: 収入 (income)." },
        { id: "ja-u120l2-jijo", type: "vocab", front: "事情", reading: "jijō", meaning: "circumstances", example: { jp: "かれの事情はよくわかりません。", en: "I don't really understand his circumstances." }, accept: ["situation", "reasons"], hint: "事情 (じじょう) = circumstances / the reasons behind something." },
      ],
    },
    {
      id: "ja-u120l3", unit: 120, lesson: 3, title: "N3 vocab 2·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 詩人 (poet), 自身 (oneself), 沈む (to sink), 自然 (nature), 思想 (thought), 舌 (tongue).",
      items: [
        { id: "ja-u120l3-shijin", type: "vocab", front: "詩人", reading: "shijin", meaning: "poet", example: { jp: "かれはゆうめいな詩人です。", en: "He is a famous poet." }, accept: [] },
        { id: "ja-u120l3-jishin", type: "vocab", front: "自身", reading: "jishin", meaning: "oneself", example: { jp: "じぶん自身をしんじてください。", en: "Please believe in yourself." }, accept: ["myself", "himself"], hint: "自身 (じしん) follows a person word: じぶん自身 = one's very own self." },
        { id: "ja-u120l3-shizumu", type: "vocab", front: "沈む", reading: "shizumu", meaning: "to sink", example: { jp: "たいようがうみに沈みます。", en: "The sun sinks into the sea." }, accept: ["to feel depressed"], hint: "沈む (しずむ) = to sink; also 'to feel down / low'." },
        { id: "ja-u120l3-shizen", type: "vocab", front: "自然", reading: "shizen", meaning: "nature", example: { jp: "このむらは自然がうつくしいです。", en: "This village has beautiful nature." }, accept: ["natural"], hint: "自然 (しぜん) = nature; 自然な = natural." },
        { id: "ja-u120l3-shiso", type: "vocab", front: "思想", reading: "shisō", meaning: "thought", example: { jp: "かれの思想はあたらしいです。", en: "His ideas are new." }, accept: ["idea"], hint: "思想 (しそう) = thought / ideology (a system of ideas)." },
        { id: "ja-u120l3-shita", type: "vocab", front: "舌", reading: "shita", meaning: "tongue", example: { jp: "いぬがあかい舌をだしています。", en: "The dog is sticking out its red tongue." }, accept: [] },
      ],
    },
    {
      id: "ja-u120l4", unit: 120, lesson: 4, title: "N3 vocab 2·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 次第 (order), 従う (to obey), したがって (therefore), 親しい (intimate), 失業 (unemployment), 湿気 (moisture).",
      items: [
        { id: "ja-u120l4-shidai", type: "vocab", front: "次第", reading: "shidai", meaning: "as soon as", example: { jp: "わかり次第、おしえます。", en: "As soon as I know, I'll tell you." }, accept: ["order", "circumstances"], hint: "(verb-stem)次第 (しだい) = 'as soon as…'. Also 次第に = gradually." },
        { id: "ja-u120l4-shitagau", type: "vocab", front: "従う", reading: "shitagau", meaning: "to obey", example: { jp: "せんせいのことばに従います。", en: "I follow what the teacher says." }, accept: ["to abide", "to follow"], hint: "…に従う (したがう) = to obey / follow (rules, orders)." },
        { id: "ja-u120l4-shitagatte", type: "vocab", front: "したがって", reading: "shitagatte", meaning: "therefore", example: { jp: "あめがふりました。したがって、そとであそべません。", en: "It rained. Therefore, we can't play outside." }, accept: ["consequently"], hint: "したがって = therefore / consequently — a formal connector." },
        { id: "ja-u120l4-shitashii", type: "vocab", front: "親しい", reading: "shitashii", meaning: "intimate", example: { jp: "かれはわたしのいちばん親しいともだちです。", en: "He is my closest friend." }, accept: ["close"], hint: "親しい (したしい) = close / intimate (of a relationship)." },
        { id: "ja-u120l4-shitsugyo", type: "vocab", front: "失業", reading: "shitsugyō", meaning: "unemployment", example: { jp: "かれはことし失業しました。", en: "He lost his job this year." }, accept: ["job loss"], hint: "失業する (しつぎょうする) = to lose one's job / become unemployed." },
        { id: "ja-u120l4-shikke", type: "vocab", front: "湿気", reading: "shikke", meaning: "moisture", example: { jp: "なつはへやの湿気がおおいです。", en: "In summer the room is very humid." }, accept: ["humidity", "dampness"], hint: "湿気 (しっけ) = moisture / humidity in the air." },
      ],
    },
  ],
};
