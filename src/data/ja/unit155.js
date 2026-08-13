// JA Unit 155 — ごい・N3・14 (しゃかいとニュース — society and the news) — B1 / JLPT N3
// Strand D, coverage 14 of 14 — the last unit of the B1 band. The blueprint's B1 spec says
// topics get abstract and the canDo shifts from "order a meal" to "disagree with a proposal
// without giving offence". This unit supplies the nouns that make that possible: the words
// a news bulletin, a town notice or an argument about policy is built from.
// Kept to civic life, emergencies and rights so it does not overlap the u107 news-society
// or u135 relationships slots being written in parallel by blocks 1–2. Where it does
// overlap at merge, lower unit order wins and these items are the ones to drop.
export const UNIT155 = {
  id: "ja-u155",
  lang: "ja",
  title: "ごい・N3・14",
  order: 155,
  stage: "b1",
  lessons: [
    {
      id: "ja-u155l1",
      unit: 155,
      lesson: 1,
      title: "Reporting and arguing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what was reported and where you stand: きじ, ほうどう, ぎろん, さんせい, かいけつ, かつどう.",
      items: [
        { id: "ja-u155l1-katsudo", type: "vocab", front: "かつどう", reading: "katsudō", meaning: "activity, campaign", example: { jp: "まちをきれいにするかつどうを、まいつきてつだっています。", en: "Every month I help with an activity to clean up the town." }, accept: ["operations", "drive", "to be active"], hint: "Organised, purposeful activity — clubs, campaigns, volunteering. Not the same as doing something on your own." },
      ],
    },
    {
      id: "ja-u155l2",
      unit: 155,
      lesson: 2,
      title: "Civic life",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about who runs things and how people take part: こくみん, じちたい, とうひょう, だんたい, そしき, ボランティア.",
      items: [
        { id: "ja-u155l2-jichitai", type: "vocab", front: "じちたい", reading: "jichitai", meaning: "local government", example: { jp: "じちたいによって、ごみのだしかたがちがいます。", en: "How you put out rubbish differs depending on the local authority." }, accept: ["municipality", "local authority", "council"], hint: "じち (self-government) + たい (body). Japanese daily life is governed by these far more than by national law — rubbish rules being the classic case." },
        { id: "ja-u155l2-dantai", type: "vocab", front: "だんたい", reading: "dantai", meaning: "group, organisation", example: { jp: "だんたいでよやくすると、りょうきんがやすくなります。", en: "If you book as a group, the price is lower." }, accept: ["party (of people)", "association", "collective"], hint: "Two senses: a formal association, and simply a group booking. だんたいわりびき is the group discount on every ticket page." },
      ],
    },
    {
      id: "ja-u155l3",
      unit: 155,
      lesson: 3,
      title: "Crime and emergencies",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow an emergency broadcast or a crime report: はんざい, ひがいしゃ, けいさつかん, しょうぼうし, さいがい, ひなん.",
      items: [
        { id: "ja-u155l3-higaisha", type: "vocab", front: "ひがいしゃ", reading: "higaisha", meaning: "victim", example: { jp: "じこのひがいしゃは、びょういんにはこばれました。", en: "The victims of the accident were taken to hospital." }, accept: ["injured party", "sufferer", "casualty"], hint: "ひがい (damage suffered) + しゃ (person) — the ～しゃ of どくしゃ and さくしゃ. Its opposite かがいしゃ is the one who caused it." },
        { id: "ja-u155l3-keisatsukan", type: "vocab", front: "けいさつかん", reading: "keisatsukan", meaning: "police officer", example: { jp: "みちがわからなかったので、けいさつかんにききました。", en: "I didn't know the way, so I asked a police officer." }, accept: ["policeman", "officer of the law", "constable"], hint: "けいさつ (the police) + かん (official). ～かん marks a public official: がいこうかん, さいばんかん." },
        { id: "ja-u155l3-shoboshi", type: "vocab", front: "しょうぼうし", reading: "shōbōshi", meaning: "firefighter", example: { jp: "しょうぼうしがはやくきてくれたので、かじはおおきくなりませんでした。", en: "The firefighters came quickly, so the fire didn't get big." }, accept: ["fireman", "fire officer"], hint: "しょうぼう (fire prevention) + し (professional). The ～し of べんごし and かんごし — a qualified professional." },
      ],
    },
    {
      id: "ja-u155l4",
      unit: 155,
      lesson: 4,
      title: "Rights and responsibilities",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Discuss fairness in society: けんり, ぎむ, せきにん, ふくし, びょうどう, さべつ.",
      items: [
      ],
    },
  ],
};
