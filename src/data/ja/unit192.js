// Unit 192 — こうようぶん・けいじ (Register 4: written, public and institutional voice) — B2 / JLPT N2
// Strand E (register), unit 2 of 2 at B2. u191 teaches 敬語 — the register between two
// PEOPLE. This unit is the register with no person in it at all: the voice of a notice on a
// door, a form, a municipal letter, a closing announcement. It is written by an institution
// to whoever happens to read it, and its whole character is that it never says "I".
//
// Deliberately kept off two neighbours it could have swallowed: u191 owns honorific and
// humble verbs, and u189 (Grammar 10) owns formal written STRUCTURES. What is left, and
// what nothing else in the band covers, is the VOCABULARY of public documents — 展示, 申請,
// 実施, 臨時, 追って — plus the handful of stock phrases (ご了承ください) that a learner meets
// on their first day in Japan and cannot parse for years.
//
// Three fronts in the first draft (きんし, てつづき, しょるい) were already owned by u120, u118
// and u71. My own collision helper had reported them free; the VALIDATOR caught them. The
// helper is an accelerator, not the authority - noted here because that distinction is the
// one this seat was told to get right.
//
// TWO MORE went at the final re-check: けいさい and しゅうりょう both collided with block 2's
// u183, which did not exist when this unit was written and was authored while it was.
// Lower-order-wins, so they were replaced by てんじ and こうかい. That is the entire argument
// for re-measuring before hand-back rather than trusting a measurement taken at claim time.
//
// Script: MIXED, per the B2 convention set in u156 — examples use kanji already taught, and
// `npm run check:glyphs` verifies every one. Only the 568 glyphs taught through B1 are in
// scope here: the B2 character units (u157–u187) belong to blocks 1–2 and were still stubs
// when this block was written, so nothing they will teach is assumed.
export const UNIT192 = {
  id: "ja-u192",
  lang: "ja",
  title: "こうようぶん・けいじ",
  order: 192,
  stage: "b2",
  lessons: [
    {
      id: "ja-u192l1",
      unit: 192,
      lesson: 1,
      title: "On the door",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read a notice taped to a door and know what it is telling you: げんてい, てんじ, りんじ, へいてん, いこう, ごりょうしょう.",
      items: [
        { id: "ja-u192l1-gentei", type: "vocab", front: "げんてい", reading: "gentei", meaning: "limited (edition, period)", example: { jp: "この 商品は 期間げんていで、来月には 売り切れます。", en: "This product is available for a limited period and will sell out next month." }, accept: ["restricted to", "exclusive", "limited-run"], hint: "Attaches straight onto a noun with no particle: 期間げんてい, 数げんてい, 会員げんてい. On a sign it is a sales pitch; in a rule it is a restriction." },
        { id: "ja-u192l1-tenji", type: "vocab", front: "てんじ", reading: "tenji", meaning: "display, exhibition", example: { jp: "新しい 品を 店の 前に てんじして います。", en: "The new items are on display at the front of the shop." }, accept: ["to exhibit", "on show", "to put on display"], hint: "Setting something out for the public to look at — a shop window, a museum case. ならべる is merely arranging; てんじ is arranging in order to be seen." },
        { id: "ja-u192l1-rinji", type: "vocab", front: "りんじ", reading: "rinji", meaning: "temporary, special (unscheduled)", example: { jp: "本日は りんじの 会議の ため、午後は 休みます。", en: "Owing to a special meeting today, we are closed this afternoon." }, accept: ["extraordinary", "one-off", "ad hoc"], hint: "Outside the normal schedule and not permanent — りんじ休業, りんじ列車. Its opposite is 定期. It signals 'this once', which is why it calms people down." },
        { id: "ja-u192l1-heiten", type: "vocab", front: "へいてん", reading: "heiten", meaning: "closing (of a shop)", example: { jp: "へいてんの 時間に なりましたので、お会計を お願いします。", en: "We have reached closing time, so please settle your bill." }, accept: ["shop closing", "closing time", "to shut up shop"], hint: "Two senses that share a word: closing for the night, and closing for good. 本日へいてん is tonight; へいてんします in a letter may be permanent." },
        { id: "ja-u192l1-iko", type: "vocab", front: "いこう", reading: "ikō", meaning: "from ~ onwards", example: { jp: "4月いこう、りょうきんが かわります。", en: "From April onwards, the charges change." }, accept: ["after", "from then on", "subsequent to"], hint: "以 (from) + 降 (down/after). Notices state changes this way: 4月いこう. Its partner いぜん means before that point." },
        { id: "ja-u192l1-goryosho", type: "vocab", front: "ごりょうしょう", reading: "goryōshō", meaning: "your understanding (in advance)", example: { jp: "工事の 音が 出ますので、ごりょうしょうください。", en: "There will be noise from the construction, so we ask for your understanding." }, accept: ["please understand", "kind acceptance", "consent"], hint: "The apology that is not an apology — it announces an inconvenience and treats your acceptance as already given. Learn it as one block: ごりょうしょうください." },
      ],
    },
    {
      id: "ja-u192l2",
      unit: 192,
      lesson: 2,
      title: "Filling in the form",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Get through a counter without guessing: しんせい, きにゅう, とどけで, さくせい, こうふ, ひつどく.",
      items: [
        { id: "ja-u192l2-shinsei", type: "vocab", front: "しんせい", reading: "shinsei", meaning: "application (to an authority)", example: { jp: "しんせいの あとで 気が 変わったら、すぐに 電話して ください。", en: "If you change your mind after applying, please call at once." }, accept: ["to apply for", "formal request", "petition"], hint: "Applying to a body that may say no — a permit, a benefit, a visa. もうしこみ is signing up for something on offer; しんせい asks an authority to grant it." },
        { id: "ja-u192l2-kinyu", type: "vocab", front: "きにゅう", reading: "kinyū", meaning: "filling in (a form)", example: { jp: "この 用紙に お名前と ご住所を きにゅうして ください。", en: "Please fill in your name and address on this form." }, accept: ["to enter (on a form)", "writing in", "completion of a field"], hint: "Only ever onto a form. かきます is writing anything; きにゅう is entering data into a field someone printed for it." },
        { id: "ja-u192l2-todokede", type: "vocab", front: "とどけで", reading: "todokede", meaning: "notification, formal filing", example: { jp: "引っ越しの あとは、やくしょへの とどけでが いります。", en: "After moving house you have to file a notification with the ward office." }, accept: ["to notify (officially)", "declaration", "registration"], hint: "You are informing an authority of a fact, not asking permission — birth, marriage, a change of address. しんせい asks; とどけで tells." },
        { id: "ja-u192l2-sakusei", type: "vocab", front: "さくせい", reading: "sakusei", meaning: "drawing up, preparing (a document)", example: { jp: "会議の 記録は 私が さくせいします。", en: "I will draw up the record of the meeting." }, accept: ["to draft", "to produce (a document)", "creation"], hint: "Making a document or a dataset, never a physical object — つくる covers both. しりょうさくせい is most of an office worker's week." },
        { id: "ja-u192l2-kofu", type: "vocab", front: "こうふ", reading: "kōfu", meaning: "issuance (by an authority)", example: { jp: "こうふまでに 一週間ほど かかると 言われました。", en: "I was told it would take about a week until issuance." }, accept: ["to issue", "granting", "handing over (officially)"], hint: "An authority handing you an official thing — a certificate, a card, a permit. わたします is any handing over; こうふ carries the authority in it." },
        { id: "ja-u192l2-hitsudoku", type: "vocab", front: "ひつどく", reading: "hitsudoku", meaning: "required reading", example: { jp: "この 部分は ひつどくですので、必ず お読み ください。", en: "This section is required reading, so please be sure to read it." }, accept: ["must-read", "compulsory reading"], hint: "必 (must) + 読 (read), and it appears as a red stamp on documents rather than in speech. The same 必 gives you 必要 and 必ず." },
      ],
    },
    {
      id: "ja-u192l3",
      unit: 192,
      lesson: 3,
      title: "The institution speaking",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Recognise who is being referred to when nobody is named: たんとうしゃ, かんけいしゃ, りようしゃ, ほんじつ, さくじつ, とうじつ.",
      items: [
        { id: "ja-u192l3-tantosha", type: "vocab", front: "たんとうしゃ", reading: "tantōsha", meaning: "the person in charge", example: { jp: "くわしい ことは たんとうしゃから ご説明します。", en: "The person in charge will explain the details." }, accept: ["responsible party", "the handler", "point of contact"], hint: "The ～しゃ suffix again (u155's どくしゃ, さくしゃ). Institutions name the ROLE and leave the person anonymous, which is the whole habit this unit teaches." },
        { id: "ja-u192l3-kankeisha", type: "vocab", front: "かんけいしゃ", reading: "kankeisha", meaning: "authorised personnel, those concerned", example: { jp: "ここから 先は かんけいしゃ以外 入れません。", en: "Beyond this point, no entry except for authorised personnel." }, accept: ["persons involved", "staff only", "interested parties"], hint: "かんけいしゃ以外立入禁止 is one of the most common signs in Japan, and it is four of this unit's ideas stacked: role, exclusion, prohibition, no verb." },
        { id: "ja-u192l3-riyosha", type: "vocab", front: "りようしゃ", reading: "riyōsha", meaning: "user, patron", example: { jp: "りようしゃの みなさまに お願いが あります。", en: "We have a request for all users." }, accept: ["service user", "customer (of a facility)"], hint: "How a library, a gym or a bus company refers to you. きゃく implies you are buying; りようしゃ only implies you are using." },
        { id: "ja-u192l3-honjitsu", type: "vocab", front: "ほんじつ", reading: "honjitsu", meaning: "today (formal)", example: { jp: "ほんじつは お集まり いただき、ありがとうございます。", en: "Thank you for gathering here today." }, accept: ["this day", "the present day"], hint: "The written きょう. 本 here means 'this very' — the same 本 gives 本人 (the person themselves) and 本社 (head office)." },
        { id: "ja-u192l3-sakujitsu", type: "vocab", front: "さくじつ", reading: "sakujitsu", meaning: "yesterday (formal)", example: { jp: "さくじつ お送りした しりょうを ごかくにんください。", en: "Please check the materials sent yesterday." }, accept: ["the previous day"], hint: "The written きのう, and it comes as a set with ほんじつ and みょうにち (tomorrow). Saying さくじつ to a friend sounds like reading aloud from a form." },
        { id: "ja-u192l3-tojitsu", type: "vocab", front: "とうじつ", reading: "tōjitsu", meaning: "the day itself, on the day", example: { jp: "とうじつは うけつけが こみますので、早めに お越しください。", en: "Reception will be busy on the day, so please come early." }, accept: ["the day in question", "same-day"], hint: "The day an event happens, spoken about beforehand. 当 means 'the one concerned' — the same element as 担当 in たんとうしゃ two cards ago." },
      ],
    },
    {
      id: "ja-u192l4",
      unit: 192,
      lesson: 4,
      title: "Conditions and exceptions",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read the small print: れいがい, じっし, かいさい, ていきょう, じぜん, おって.",
      items: [
        { id: "ja-u192l4-reigai", type: "vocab", front: "れいがい", reading: "reigai", meaning: "exception", example: { jp: "この きそくには れいがいが ありません。", en: "There are no exceptions to this rule." }, accept: ["special case", "exemption"], hint: "例 (example) + 外 (outside) — the case that falls outside the examples. れいがいなく means 'without exception'." },
        { id: "ja-u192l4-jisshi", type: "vocab", front: "じっし", reading: "jisshi", meaning: "implementation, carrying out", example: { jp: "工事は 来月から じっしする よていです。", en: "The construction is scheduled to be carried out from next month." }, accept: ["to put into effect", "conducting", "enforcement"], hint: "An institution actually doing the thing it announced. します is doing; じっし is executing a decided plan, which is why notices and laws are full of it." },
        { id: "ja-u192l4-kaisai", type: "vocab", front: "かいさい", reading: "kaisai", meaning: "holding (an event)", example: { jp: "天気が 悪い ばあいは、かいさいしません。", en: "In the event of bad weather, it will not be held." }, accept: ["to hold", "staging", "to run (an event)"], hint: "Only for events with an audience — a festival, a meeting, a match. ひらきます can mean the same thing but also opens doors and shops." },
        { id: "ja-u192l4-teikyo", type: "vocab", front: "ていきょう", reading: "teikyō", meaning: "provision, supplying", example: { jp: "この サービスは 無料で ていきょうして います。", en: "This service is provided free of charge." }, accept: ["to provide", "to offer", "to furnish"], hint: "An organisation making something available — a service, data, a sponsorship. あげます is a gift between people; ていきょう has no personal relationship in it." },
        { id: "ja-u192l4-jizen", type: "vocab", front: "じぜん", reading: "jizen", meaning: "in advance, prior", example: { jp: "じぜんに おもうしこみが ひつようです。", en: "Prior application is required." }, accept: ["beforehand", "advance (booking)", "ex ante"], hint: "The formal まえもって. じぜんよやく, じぜんじゅんび — it attaches to nouns freely, and its opposite 事後 works the same way." },
        { id: "ja-u192l4-otte", type: "vocab", front: "おって", reading: "otte", meaning: "in due course, later", example: { jp: "けっかは おって お知らせします。", en: "The results will be announced in due course." }, accept: ["shortly", "subsequently", "we'll be in touch"], hint: "The most quietly frustrating word in institutional Japanese: it promises news and commits to no date. おってれんらくします is 'don't call us'." },
      ],
    },
  ],
};
