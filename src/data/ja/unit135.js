// JA Unit 135 — かんけい・しゃかい (Relationships and society) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js (plain-form verb headwords).
//
// The blueprint's B1 note asks for canDo statements like "disagree without giving
// offence" rather than "order a meal", so lesson 2 is built around exactly that:
// たちば・かちかん・ごかい・ぎろん are the words a learner needs to disagree with a
// person while staying on good terms with them.
export const UNIT135 = {
  id: "ja-u135",
  lang: "ja",
  title: "かんけい・しゃかい",
  order: 135,
  stage: "b1",
  lessons: [
    {
      id: "ja-u135l1",
      unit: 135,
      lesson: 1,
      title: "People you are close to",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how close you are to someone and how you look out for each other: つきあう しりあい ささえる おもいやり きょうかん そんちょう.",
      items: [
        { id: "ja-u135l1-tsukiau", type: "vocab", front: "つきあう", reading: "tsukiau", meaning: "keep company with", example: { jp: "だいがくのときからつきあっていて、いまもよくあいます。", en: "We've been close since university, and we still see each other often." }, drill: { jp: "ながいあいだつきあう。", en: "We keep company for a long time." }, accept: ["to associate with", "go out with", "spend time with"], hint: "tsu-ki-A-u — four beats. つく plus あう: sticking together. Who you keep company with takes と. ⚠️ Of a couple it means going out, so the particle does not disambiguate it." },
        { id: "ja-u135l1-shiriai", type: "vocab", front: "しりあい", reading: "shiriai", meaning: "acquaintance (someone one knows)", example: { jp: "かれはともだちではなくしりあいですが、こまったときはたすけてくれます。", en: "He's an acquaintance rather than a friend, but he helps when I'm stuck." }, drill: { jp: "しりあいがふえました。", en: "My circle of acquaintances has grown." }, accept: ["someone I know", "contact", "connection"], hint: "shi-ri-A-i — four beats. しる plus あう: mutual knowing. It is deliberately cooler than ともだち, and Japanese draws that line carefully — ともだち is a real claim." },
        { id: "ja-u135l1-sasaeru", type: "vocab", front: "ささえる", reading: "sasaeru", meaning: "support (to hold someone up)", example: { jp: "かぞくがささえてくれたので、さいごまでつづけられました。", en: "My family supported me, so I could keep going to the end." }, drill: { jp: "かぞくをささえる。", en: "I support my family." }, accept: ["to back up", "hold up", "stand by"], hint: "sa-sa-E-ru — four beats. Who or what you hold up takes を. It is weight-bearing rather than encouraging — てつだう helps with a task, ささえる keeps someone standing." },
        { id: "ja-u135l1-omoiyari", type: "vocab", front: "おもいやり", reading: "omoiyari", meaning: "consideration for others", example: { jp: "おもいやりのあるひとにあうと、こちらもやさしくなれます。", en: "When you meet someone considerate, it makes you kinder too." }, drill: { jp: "おもいやりのあることばです。", en: "They are considerate words." }, accept: ["thoughtfulness", "compassion", "kindness"], hint: "o-mo-i-ya-RI — five beats. おもう plus やる, to send: sending your thought over to someone. It is the quality Japanese social life most openly prizes." },
        { id: "ja-u135l1-kyokan", type: "vocab", front: "きょうかん", reading: "kyōkan", meaning: "empathy", example: { jp: "はなしをきいてきょうかんして、なみだがでました。", en: "I listened, felt for them, and the tears came." }, drill: { jp: "きょうかんがあります。", en: "There is empathy." }, accept: ["sympathy", "relating to", "fellow feeling"], hint: "KYŌ-kan — the first beat is long, the ん held; きょ is ONE beat. きょう is together and かん is feeling, so it is feeling the same thing. どうじょう pities; きょうかん shares." },
        { id: "ja-u135l1-soncho", type: "vocab", front: "そんちょう", reading: "sonchō", meaning: "respect (regard for another's view)", example: { jp: "いけんがちがっても、あいてをそんちょうします。", en: "Even when our opinions differ, I respect the other person." }, drill: { jp: "いけんをそんちょうします。", en: "I respect the opinion." }, accept: ["esteem", "regard", "respecting"], hint: "son-CHŌ — the ん is held and the last beat is long. そん is to honour and ちょう is to value, so it is treating something as worth more than your own convenience." },
      ],
    },
    {
      id: "ja-u135l2",
      unit: 135,
      lesson: 2,
      title: "Disagreeing well",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Disagree with someone without giving offence — hear the gap between what is said and what is meant: ごかい ぎろん ほんね かちかん たてまえ へんけん.",
      items: [
        { id: "ja-u135l2-gokai", type: "vocab", front: "ごかい", reading: "gokai", meaning: "misunderstanding", example: { jp: "ごかいがあったので、すぐはなしてときました。", en: "There was a misunderstanding, so we talked it through at once." }, drill: { jp: "ごかいをふせぎます。", en: "We head off misunderstandings." }, accept: ["misreading", "getting the wrong idea", "a misunderstanding"], hint: "go-KA-i — three beats. ご is an error and かい is to understand, so you understood it wrongly. かんちがい is your own slip; ごかい is between two people." },
        { id: "ja-u135l2-giron", type: "vocab", front: "ぎろん", reading: "giron", meaning: "debate", example: { jp: "ぎろんがながくなって、みんなつかれてしまいました。", en: "The debate dragged on, and everyone ended up worn out." }, drill: { jp: "ぎろんをはじめました。", en: "We began the debate." }, accept: ["discussion", "argument", "arguing"], hint: "gi-RON — two beats, the ん held. ぎ is to deliberate and ろん is argument. It is reasoned disagreement, not a row — a quarrel is けんか." },
                { id: "ja-u135l2-honne", type: "vocab", front: "ほんね", reading: "honne", meaning: "what someone really thinks", example: { jp: "かいぎではだれもほんねをいわないで、あとでみんなはなしました。", en: "Nobody said what they really thought in the meeting, and everyone talked about it afterwards." }, drill: { jp: "ほんねをいいません。", en: "Nobody says what they really think." }, accept: ["true feelings", "real intention", "what they actually mean"], hint: "HON-ne — two beats, the ん held. ほん is true and ね is a sound, so it is the sound you really make. Its partner is たてまえ, and the pair describes how Japanese conversation works." },
        { id: "ja-u135l2-kachikan", type: "vocab", front: "かちかん", reading: "kachikan", meaning: "values", example: { jp: "かちかんはちがいますが、いっしょにはたらけます。", en: "Our values differ, but we can work together." }, drill: { jp: "かちかんがあいません。", en: "Our values do not match." }, accept: ["sense of values", "what someone values", "value system"], hint: "ka-chi-KAN — three beats, the ん held. かち is worth and かん is a view, so it is your view of what is worth having. 「かちかんが ちがう」 ends many relationships politely." },
                { id: "ja-u135l2-tatemae", type: "vocab", front: "たてまえ", reading: "tatemae", meaning: "the official line", example: { jp: "それはたてまえですが、じっさいはちがいます。", en: "That is the official line, but the reality is different." }, drill: { jp: "たてまえはちがいます。", en: "The official line is different." }, accept: ["the public position", "what one says publicly", "form"], hint: "ta-te-MA-e — four beats. たてる plus まえ: the front you put up. It is not a lie — it is the position everyone agrees to work with. ほんね is what sits behind it." },
        { id: "ja-u135l2-henken", type: "vocab", front: "へんけん", reading: "henken", meaning: "prejudice", example: { jp: "へんけんはきづきにくいので、はなしをきくことがたいせつです。", en: "Prejudice is hard to notice in yourself, so listening matters." }, drill: { jp: "へんけんをなくしたいです。", en: "I want to be rid of my prejudices." }, accept: ["bias", "preconception", "a prejudiced view"], hint: "hen-KEN — two beats, the ん held. へん is one-sided and けん is a view, so it is a view tilted to one side. さべつ is prejudice acted on; へんけん is prejudice held." },
      ],
    },
    {
      id: "ja-u135l3",
      unit: 135,
      lesson: 3,
      title: "In the community",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about groups you belong to and what people do together: じゅうみん じもと しゅうだん こじん ボランティア こうりゅう.",
      items: [
        { id: "ja-u135l3-jumin", type: "vocab", front: "じゅうみん", reading: "jūmin", meaning: "residents", example: { jp: "じゅうみんがはんたいしたので、けんせつはとまりました。", en: "The residents objected, so the construction stopped." }, drill: { jp: "じゅうみんがあつまりました。", en: "The residents gathered." }, accept: ["local people", "inhabitants", "the residents"], hint: "jū-MIN — the first beat is long, the ん held. じゅう is to dwell and みん is the people. こくみん is citizens of a country; じゅうみん is whoever lives here, nationality aside." },
                { id: "ja-u135l3-jimoto", type: "vocab", front: "じもと", reading: "jimoto", meaning: "one's local area", example: { jp: "じもとをはなれてじゅうねんたっても、ことばはかわりません。", en: "Even ten years after leaving my home area, my accent hasn't changed." }, drill: { jp: "じもとのみせがすきです。", en: "I like the local shops." }, accept: ["home town", "locally", "where one is from"], hint: "ji-MO-to — three beats. じ is the ground and もと is the base, so it is the ground you come from. It carries belonging — 「じもとの ひと」 is one of us." },
        { id: "ja-u135l3-shudan", type: "vocab", front: "しゅうだん", reading: "shūdan", meaning: "a group", example: { jp: "しゅうだんでうごくと、じゆうはすくなくなります。", en: "When you move as a group, your freedom shrinks." }, drill: { jp: "しゅうだんでうごきます。", en: "We move as a group." }, accept: ["collective", "the group", "a body of people"], hint: "shū-DAN — the first beat is long, the ん held. しゅう is to gather and だん is a body. こじん is its opposite, and the pair frames a great deal of Japanese social comment." },
        { id: "ja-u135l3-kojin", type: "vocab", front: "こじん", reading: "kojin", meaning: "the individual", example: { jp: "こじんのじゆうもまわりへのちゅういも、どちらもたいせつです。", en: "Individual freedom and consideration for those around you both matter." }, drill: { jp: "こじんのじゆうをまもります。", en: "We protect individual freedom." }, accept: ["a private person", "personal", "individual"], hint: "ko-JIN — two beats, the ん held. こ is single and じん is a person, so it is one person as against the group. こじんじょうほう is personal data — a phrase on every form." },
        { id: "ja-u135l3-borantia", type: "vocab", front: "ボランティア", reading: "borantia", meaning: "volunteering", example: { jp: "しゅうまつにボランティアをしていて、まいかいたのしみです。", en: "I volunteer at weekends, and I look forward to it every time." }, drill: { jp: "ボランティアにさんかします。", en: "I will join the volunteering." }, accept: ["volunteer", "voluntary work", "unpaid help"], hint: "bo-ran-TI-a — five beats, the ん held. Borrowed, and it covers both the person and the activity. Japanese disaster response leans on ボランティア heavily." },
                { id: "ja-u135l3-koryu", type: "vocab", front: "こうりゅう", reading: "kōryū", meaning: "exchange between people", example: { jp: "まちのこうりゅうかいにでたのに、しりあいはできませんでした。", en: "I went to the town exchange meeting, but I did not make any acquaintances." }, drill: { jp: "こうりゅうがふえました。", en: "Exchange between people has grown." }, accept: ["interaction", "mixing", "getting to know each other"], hint: "kō-RYŪ — two long beats, りゅ is ONE beat. こう is to cross and りゅう is to flow, so it is two streams mixing. こくさいこうりゅう is international exchange." },
      ],
    },
    {
      id: "ja-u135l4",
      unit: 135,
      lesson: 4,
      title: "A changing society",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the young, the old, and fairness between them: かくさ わかもの こうれいしゃ びょうどう さべつ じんけん.",
      items: [
                { id: "ja-u135l4-kakusa", type: "vocab", front: "かくさ", reading: "kakusa", meaning: "a gap between groups", example: { jp: "しゅうにゅうのかくさがひろがっているのに、はなすひとはすくないです。", en: "The income gap is widening, but few people talk about it." }, drill: { jp: "かくさがひろがっています。", en: "The gap is widening." }, accept: ["disparity", "inequality", "the divide"], hint: "ka-ku-SA — three beats. かく is a rank and さ is a difference, so it is a gap between levels. ちがい is any difference; かくさ is a difference that is unfair." },
        { id: "ja-u135l4-wakamono", type: "vocab", front: "わかもの", reading: "wakamono", meaning: "young people", example: { jp: "わかものがまちをでていくので、みせもへっています。", en: "Young people are leaving the town, so the shops are decreasing too." }, drill: { jp: "わかものがあつまるまちです。", en: "It is a town where young people gather." }, accept: ["youth", "the young", "a young person"], hint: "wa-ka-MO-no — four beats. わかい is young and もの is a person here, not a thing. It is slightly distant, the word an older speaker or a newspaper uses." },
        { id: "ja-u135l4-koreisha", type: "vocab", front: "こうれいしゃ", reading: "kōreisha", meaning: "elderly people", example: { jp: "こうれいしゃがおおいちほうなので、バスがよくはしっています。", en: "It's a region with many elderly people, so the buses run often." }, drill: { jp: "こうれいしゃがふえています。", en: "The number of elderly people is rising." }, accept: ["senior citizens", "the elderly", "older people"], hint: "kō-rei-SHA — the first beat is long. こうれい is advanced age plus ～しゃ, the person suffix. It is the respectful official term, which is why forms use it rather than ろうじん." },
        { id: "ja-u135l4-byodo", type: "vocab", front: "びょうどう", reading: "byōdō", meaning: "equality", example: { jp: "きかいはびょうどうですが、けっかはおなじになりません。", en: "The opportunities are equal, but the results don't come out the same." }, drill: { jp: "びょうどうがたいせつです。", en: "Equality matters." }, accept: ["equal", "fairness", "being equal"], hint: "byō-DŌ — two long beats, びょ is ONE beat. びょう is level and どう is same, so everyone stands at one height. こうへい is fairness of process; びょうどう is sameness of standing." },
        { id: "ja-u135l4-sabetsu", type: "vocab", front: "さべつ", reading: "sabetsu", meaning: "discrimination", example: { jp: "さべつをなくすのはかんたんではないので、まずしることからはじめます。", en: "Getting rid of discrimination isn't simple, so we start by learning about it." }, drill: { jp: "さべつをなくします。", en: "We will do away with discrimination." }, accept: ["prejudice in practice", "unfair treatment", "discriminating"], hint: "sa-BE-tsu — three beats. さ is a difference and べつ is to separate, so it is treating people apart. へんけん is the belief; さべつ is the act it produces." },
        { id: "ja-u135l4-jinken", type: "vocab", front: "じんけん", reading: "jinken", meaning: "human rights", example: { jp: "じんけんはだれにでもあるので、まもらなければなりません。", en: "Everyone has human rights, so they have to be protected." }, drill: { jp: "じんけんをまもります。", en: "We protect human rights." }, accept: ["rights", "civil rights", "the rights of a person"], hint: "jin-KEN — two beats, the ん held. じん is a person and けん is a right, the same けん as in けんり. So it is the rights you hold simply by being one." },
      ],
    },
  ],
};
