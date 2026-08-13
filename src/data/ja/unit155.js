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
        { id: "ja-u155l1-kiji", type: "vocab", front: "きじ", reading: "kiji", meaning: "article (in a paper)", example: { jp: "そのきじをよんでから、かんがえがかわりました。", en: "After reading that article, my thinking changed." }, accept: ["news item", "piece (of writing)", "report"], hint: "One piece of writing in a paper or on a site. ニュース is the news as a whole; きじ is a single item." },
        { id: "ja-u155l1-hodo", type: "vocab", front: "ほうどう", reading: "hōdō", meaning: "news coverage, reporting", example: { jp: "ほうどうによると、じこのげんいんはまだわからないそうです。", en: "According to reports, the cause of the accident is still unknown." }, accept: ["media coverage", "to report (news)", "broadcast report"], hint: "The activity of reporting, by the press as an institution. ほうどうによると is the standard way to attribute a claim." },
        { id: "ja-u155l1-giron", type: "vocab", front: "ぎろん", reading: "giron", meaning: "discussion, debate", example: { jp: "ながいぎろんのあと、けっきょくけつろんはでませんでした。", en: "After a long debate, no conclusion was reached in the end." }, accept: ["argument (reasoned)", "deliberation", "to debate"], hint: "Reasoned disagreement, not a row — that's けんか. ぎろんする is something colleagues do on purpose." },
        { id: "ja-u155l1-sansei", type: "vocab", front: "さんせい", reading: "sansei", meaning: "agreement, being in favour", example: { jp: "そのいけんにさんせいですが、すこししんぱいもあります。", en: "I'm in favour of that opinion, though I have some concerns too." }, accept: ["to agree", "approval", "support"], hint: "The formal counterpart of はんたい. さんせいのひと、てをあげてください — the show of hands at any meeting." },
        { id: "ja-u155l1-kaiketsu", type: "vocab", front: "かいけつ", reading: "kaiketsu", meaning: "resolution, solving", example: { jp: "はなしあいで、もんだいがかいけつしました。", en: "The problem was resolved through discussion." }, accept: ["to solve", "settlement", "working out"], hint: "かい (undo) + けつ (settle) — untying a knot. Both a noun and a verb: もんだいをかいけつする." },
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
        { id: "ja-u155l2-kokumin", type: "vocab", front: "こくみん", reading: "kokumin", meaning: "the people of a country, citizens", example: { jp: "このほうりつは、こくみんみんなにたいせつなものです。", en: "This law matters to every citizen of the country." }, accept: ["nationals", "the public", "populace"], hint: "こく (country) + みん (people). しみん is the people of a city; こくみん is the people of the nation." },
        { id: "ja-u155l2-jichitai", type: "vocab", front: "じちたい", reading: "jichitai", meaning: "local government", example: { jp: "じちたいによって、ごみのだしかたがちがいます。", en: "How you put out rubbish differs depending on the local authority." }, accept: ["municipality", "local authority", "council"], hint: "じち (self-government) + たい (body). Japanese daily life is governed by these far more than by national law — rubbish rules being the classic case." },
        { id: "ja-u155l2-tohyo", type: "vocab", front: "とうひょう", reading: "tōhyō", meaning: "voting, casting a ballot", example: { jp: "18さいになったら、とうひょうできるようになります。", en: "Once you turn eighteen you become able to vote." }, accept: ["to vote", "ballot", "poll"], hint: "とう (throw) + ひょう (slip) — throwing your slip in. せんきょ is the election; とうひょう is the act of voting in it." },
        { id: "ja-u155l2-dantai", type: "vocab", front: "だんたい", reading: "dantai", meaning: "group, organisation", example: { jp: "だんたいでよやくすると、りょうきんがやすくなります。", en: "If you book as a group, the price is lower." }, accept: ["party (of people)", "association", "collective"], hint: "Two senses: a formal association, and simply a group booking. だんたいわりびき is the group discount on every ticket page." },
        { id: "ja-u155l2-soshiki", type: "vocab", front: "そしき", reading: "soshiki", meaning: "organisation, structure", example: { jp: "おおきいそしきでは、はなしがきまるまでにじかんがかかります。", en: "In a large organisation, it takes time for anything to be settled." }, accept: ["body (institution)", "system", "setup"], hint: "The structure rather than the people — how a body is put together. Also the biological sense: tissue." },
        { id: "ja-u155l2-borantia", type: "vocab", front: "ボランティア", reading: "borantia", meaning: "volunteer, volunteering", example: { jp: "さいがいのあと、おおくのひとがボランティアをしました。", en: "After the disaster, many people did volunteer work." }, accept: ["voluntary work", "unpaid helper"], hint: "Both the person and the activity, like English. ボランティアをする is what you'd normally say." },
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
        { id: "ja-u155l3-hanzai", type: "vocab", front: "はんざい", reading: "hanzai", meaning: "crime", example: { jp: "このまちははんざいがすくないので、よるもあんしんです。", en: "There's little crime in this town, so even at night it feels safe." }, accept: ["criminal act", "offence"], hint: "Crime as a category. じけん is a particular incident; はんざい is the wrongdoing itself." },
        { id: "ja-u155l3-higaisha", type: "vocab", front: "ひがいしゃ", reading: "higaisha", meaning: "victim", example: { jp: "じこのひがいしゃは、びょういんにはこばれました。", en: "The victims of the accident were taken to hospital." }, accept: ["injured party", "sufferer", "casualty"], hint: "ひがい (damage suffered) + しゃ (person) — the ～しゃ of どくしゃ and さくしゃ. Its opposite かがいしゃ is the one who caused it." },
        { id: "ja-u155l3-keisatsukan", type: "vocab", front: "けいさつかん", reading: "keisatsukan", meaning: "police officer", example: { jp: "みちがわからなかったので、けいさつかんにききました。", en: "I didn't know the way, so I asked a police officer." }, accept: ["policeman", "officer of the law", "constable"], hint: "けいさつ (the police) + かん (official). ～かん marks a public official: がいこうかん, さいばんかん." },
        { id: "ja-u155l3-shoboshi", type: "vocab", front: "しょうぼうし", reading: "shōbōshi", meaning: "firefighter", example: { jp: "しょうぼうしがはやくきてくれたので、かじはおおきくなりませんでした。", en: "The firefighters came quickly, so the fire didn't get big." }, accept: ["fireman", "fire officer"], hint: "しょうぼう (fire prevention) + し (professional). The ～し of べんごし and かんごし — a qualified professional." },
        { id: "ja-u155l3-saigai", type: "vocab", front: "さいがい", reading: "saigai", meaning: "disaster", example: { jp: "さいがいのときのために、みずをよういしておきましょう。", en: "Let's keep water ready in case of a disaster." }, accept: ["calamity", "catastrophe", "natural disaster"], hint: "The general category — earthquake, typhoon, flood. さいがいたいさく (disaster preparedness) is a normal part of Japanese life." },
        { id: "ja-u155l3-hinan", type: "vocab", front: "ひなん", reading: "hinan", meaning: "evacuation", example: { jp: "おおきいじしんのあとは、すぐにひなんしてください。", en: "After a big earthquake, please evacuate immediately." }, accept: ["taking shelter", "to evacuate", "escape to safety"], hint: "ひ (avoid) + なん (trouble). ひなんじょ is the designated shelter — every Japanese neighbourhood has one signposted." },
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
        { id: "ja-u155l4-kenri", type: "vocab", front: "けんり", reading: "kenri", meaning: "a right (entitlement)", example: { jp: "だれにでも、いけんをいうけんりがあります。", en: "Everyone has the right to voice an opinion." }, accept: ["entitlement", "claim", "legal right"], hint: "Always paired with ぎむ in Japanese civics: けんりとぎむ. One implies the other." },
        { id: "ja-u155l4-gimu", type: "vocab", front: "ぎむ", reading: "gimu", meaning: "duty, obligation", example: { jp: "ぜいきんをはらうのは、こくみんのぎむです。", en: "Paying taxes is a duty of every citizen." }, accept: ["obligation", "compulsory duty"], hint: "A duty imposed from outside — law or role. ぎむきょういく is compulsory education, the duty to be schooled." },
        { id: "ja-u155l4-sekinin", type: "vocab", front: "せきにん", reading: "sekinin", meaning: "responsibility", example: { jp: "じぶんできめたことなので、せきにんはわたしにあります。", en: "I decided it myself, so the responsibility is mine." }, accept: ["accountability", "onus", "liability"], hint: "せきにんをとる means to take responsibility — and in Japanese working life it often means resigning over it." },
        { id: "ja-u155l4-fukushi", type: "vocab", front: "ふくし", reading: "fukushi", meaning: "welfare, social services", example: { jp: "ふくしがしっかりしていると、あんしんしてせいかつできます。", en: "When welfare provision is solid, you can live without worry." }, accept: ["social welfare", "public support", "care services"], hint: "The system supporting those who need it — care for the elderly and disabled especially. ふくしし is a qualified welfare worker." },
        { id: "ja-u155l4-byodo", type: "vocab", front: "びょうどう", reading: "byōdō", meaning: "equality", example: { jp: "きかいはみんなにびょうどうであるべきだとおもいます。", en: "I think opportunities should be equal for everyone." }, accept: ["equal treatment", "parity", "evenness"], hint: "Equality of outcome or standing. こうへい (u145) is fairness of PROCESS — the two are argued about separately, in Japanese as in English." },
        { id: "ja-u155l4-sabetsu", type: "vocab", front: "さべつ", reading: "sabetsu", meaning: "discrimination", example: { jp: "くにやことばによるさべつは、あってはならないことです。", en: "Discrimination on grounds of country or language must not happen." }, accept: ["unfair treatment", "prejudice (in practice)"], hint: "さ (difference) + べつ (separate) — treating people as separate categories. くべつ, one character apart, is neutral 'distinction'." },
      ],
    },
  ],
};
