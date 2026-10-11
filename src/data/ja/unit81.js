// Unit 81 — せいかつ・N4 ("Daily life") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 daily-life nouns: plans, schedules, deadlines, habits and everyday events.
// Vocab items only; each front is globally unique and absent from the running set.
// Examples use only earlier vocab + A1/A2 grammar so the unit slots in cleanly.
// NATURALNESS: checked by the LLM naturalness review (content-auditor) plus Alex's
// Dev-Mode playtest. A human native review is a nice-to-have, NOT a blocker
// (CLAUDE.md, Alex 2026-07-12).
// DRILL SHAPE: every drill leads with its own front + a core particle, which is what
// ja sentenceTokens tiles. practice() REPLACES the example, so any other shape would
// strip sentence:build off an item whose example had it.
export const UNIT81 = {
  id: "ja-u81",
  lang: "ja",
  title: "せいかつ・N4",
  order: 81,
  stage: "a2",
  lessons: [
    // Lesson 1: plans & appointments
    {
      id: "ja-u81l1",
      unit: 81,
      lesson: 1,
      title: "Plans & appointments",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about plans and getting ready: ちこく じゅんび したく ようじ つごう ちゅうし.",
      items: [
        { id: "ja-u81l1-chikoku", type: "vocab", front: "ちこく", reading: "chikoku", meaning: "being late", example: { jp: "かいしゃにちこくします。", en: "I'm late to work." }, drill: { jp: "ちこくがおおいです。", en: "He is late a lot." }, accept: ["lateness", "tardiness", "turning up late", "arriving late"], hint: "chikoku — ち (late) + こく (time): off the clock. A noun used with します, and what you are late FOR takes に. おくれます from u45 is the plain verb; ちこく is the word on a school record." },
        { id: "ja-u81l1-junbi", type: "vocab", front: "じゅんび", reading: "junbi", meaning: "preparation", example: { jp: "りょこうのじゅんびをします。", en: "I prepare for the trip." }, drill: { jp: "じゅんびがおわりました。", en: "The preparations are finished." }, accept: ["getting ready", "preparations", "setting up", "groundwork"], hint: "junbi — じゅん (in order) + び (equip): getting things in order beforehand. A noun with します. したく on the next card is narrower: getting YOURSELF ready to leave." },
        { id: "ja-u81l1-shitaku", type: "vocab", front: "したく", reading: "shitaku", meaning: "getting ready", example: { jp: "でかけるしたくをします。", en: "I get ready to go out." }, drill: { jp: "したくにじかんがかかります。", en: "Getting ready takes time." }, accept: ["preparation", "readying", "getting yourself ready", "turning out"], hint: "shitaku — getting yourself or a meal ready to go, which is why it is used for leaving the house and for laying a table. Narrower than じゅんび on the card before." },
        { id: "ja-u81l1-yoji", type: "vocab", front: "ようじ", reading: "yōji", meaning: "errand", example: { jp: "きょうはようじがあります。", en: "I have an errand today." }, drill: { jp: "ようじでいえにかえります。", en: "I go home for an errand." }, accept: ["things to do", "business", "something to attend to", "an engagement"], hint: "yōji — よう (business) + じ (matter): a thing you must attend to. Long ō: yō-ji. ようじがあります is the polite, unspecific way to decline an invitation without giving a reason." },
        { id: "ja-u81l1-tsugo", type: "vocab", front: "つごう", reading: "tsugō", meaning: "convenience", example: { jp: "あしたはつごうがわるいです。", en: "Tomorrow is not convenient." }, drill: { jp: "つごうをききます。", en: "I ask what suits them." }, accept: ["availability", "circumstances", "what suits someone", "one's situation"], hint: "tsugō — つ (join) + ごう (fit): whether a time fits your situation. Long ō: tsu-gō. ⚠️ Not the same as べんり from u23, which is a thing being handy — つごう is about a person's schedule." },
        { id: "ja-u81l1-chushi", type: "vocab", front: "ちゅうし", reading: "chūshi", meaning: "cancellation", example: { jp: "あめでしあいがちゅうしです。", en: "The game is cancelled due to rain." }, drill: { jp: "ちゅうしをきめました。", en: "They decided to cancel." }, accept: ["calling off", "suspension", "cancelling", "being called off"], hint: "chūshi — ちゅう (midway) + し (stop): stopping something already planned. Long ū: chū-shi. Used with します or as a bare noun: しあいはちゅうしです." },
      ],
    },
    // Lesson 2: periods & deadlines
    {
      id: "ja-u81l2",
      unit: 81,
      lesson: 2,
      title: "Periods & deadlines",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle time frames: きかん きげん しめきり にってい れんきゅう るす.",
      items: [
        { id: "ja-u81l2-kikan", type: "vocab", front: "きかん", reading: "kikan", meaning: "period", example: { jp: "やすみのきかんはみじかいです。", en: "The holiday period is short." }, drill: { jp: "きかんがながいです。", en: "The period is long." }, accept: ["duration", "term", "a span of time", "a stretch"], hint: "kikan — き (period) + かん (interval): a stretch of time with a start and an end. ⚠️ A same-sounding きかん also means an institution or an engine, so context decides. きげん on the next card is the END of a period, not the period itself." },
        { id: "ja-u81l2-kigen", type: "vocab", front: "きげん", reading: "kigen", meaning: "deadline", example: { jp: "しごとのきげんはきょうです。", en: "The deadline for the work is today." }, drill: { jp: "きげんをまもります。", en: "I meet the deadline." }, accept: ["time limit", "due date", "the cut-off", "expiry"], hint: "kigen — き (period) + げん (limit): the edge of the allowed time. Also the expiry date on food: しょうみきげん. Kept with まもります, the same verb as a rule or a promise." },
        { id: "ja-u81l2-shimekiri", type: "vocab", front: "しめきり", reading: "shimekiri", meaning: "closing date", example: { jp: "しめきりにまにあいます。", en: "I make it in time for the closing date." }, drill: { jp: "しめきりはあしたです。", en: "The closing date is tomorrow." }, accept: ["deadline", "cutoff", "the final date", "last day to apply"], hint: "shimekiri — しめる (close) + きる (cut off): the moment applications shut. Built from しめます, u20. Everyday where きげん on the card before is contractual." },
        { id: "ja-u81l2-nittei", type: "vocab", front: "にってい", reading: "nittei", meaning: "schedule", example: { jp: "りょこうのにっていをきめます。", en: "I decide the trip schedule." }, drill: { jp: "にっていがかわりました。", en: "The schedule has changed." }, accept: ["itinerary", "agenda", "the programme", "day-by-day plan"], hint: "nittei — にち (day) + てい (set), with the ち colliding into っ: nit-tei. A day-by-day plan, so it is more granular than けいかく (u75) and more official than よてい." },
        { id: "ja-u81l2-renkyu", type: "vocab", front: "れんきゅう", reading: "renkyū", meaning: "consecutive holidays", example: { jp: "らいしゅうはれんきゅうです。", en: "Next week is a run of holidays." }, drill: { jp: "れんきゅうにうみへいきます。", en: "I go to the sea during the long holiday." }, accept: ["long weekend", "holiday stretch", "back-to-back holidays", "a string of days off"], hint: "renkyū — れん (consecutive) + きゅう (rest). Long ū: ren-kyū. Japan's public holidays cluster, so a ごがつのれんきゅう (Golden Week) is a fixed part of the year." },
        { id: "ja-u81l2-rusu", type: "vocab", front: "るす", reading: "rusu", meaning: "being out", example: { jp: "ちちはいまるすです。", en: "My father is out right now." }, drill: { jp: "るすにでんわがありました。", en: "A call came while I was out." }, accept: ["absence", "away from home", "being away", "not at home"], hint: "rusu — being away from home, with the sense that someone came and missed you. るすばんでんわ is an answering machine: the phone that minds the house while you are out." },
      ],
    },
    // Lesson 3: habits & condition
    {
      id: "ja-u81l3",
      unit: 81,
      lesson: 3,
      title: "Habits & condition",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe habits and how things are going: くせ ちょうし ぐうぜん ばあい じゅんばん せいり.",
      items: [
        { id: "ja-u81l3-kuse", type: "vocab", front: "くせ", reading: "kuse", meaning: "habit", example: { jp: "わたしはわらうくせがあります。", en: "I have a habit of laughing." }, drill: { jp: "くせがわるいです。", en: "He has a bad habit." }, accept: ["quirk", "mannerism", "a tic", "something one always does"], hint: "kuse — an unconscious habit, usually a slightly bad one: biting nails, a verbal tic. ⚠️ Not a deliberate routine — that is しゅうかん. You HAVE one: くせがあります." },
        { id: "ja-u81l3-choshi", type: "vocab", front: "ちょうし", reading: "chōshi", meaning: "condition (one's form on the day)", example: { jp: "きょうはちょうしがいいです。", en: "I'm in good condition today." }, drill: { jp: "ちょうしをしらべます。", en: "I check the condition." }, accept: ["state", "form", "how one is doing", "tune"], hint: "chōshi — ちょう (tune) + し (manner): how well-tuned you or a machine is TODAY. Long ō: chō-shi. たいちょう from u72 is your health; ちょうし is your form on the day." },
        { id: "ja-u81l3-guzen", type: "vocab", front: "ぐうぜん", reading: "gūzen", meaning: "coincidence", example: { jp: "ぐうぜんともだちにあいました。", en: "I met a friend by coincidence." }, drill: { jp: "ぐうぜんにえきであいました。", en: "I met them at the station by chance." }, accept: ["by chance", "chance", "a coincidence", "happening to"], hint: "gūzen — ぐう (meet by chance) + ぜん (naturally). Long ū: gū-zen. Works bare or with に: ぐうぜんあった and ぐうぜんにあった are both fine. Its opposite ひつぜん means inevitably." },
        { id: "ja-u81l3-baai", type: "vocab", front: "ばあい", reading: "baai", meaning: "case", example: { jp: "あめのばあいはやすみます。", en: "In the case of rain, we rest." }, drill: { jp: "ばあいをせんせいにききます。", en: "I ask the teacher about the case." }, accept: ["situation", "occasion", "the event that", "circumstances"], hint: "baai — ば (place) + あい (meeting): where circumstances meet. Xのばあい means 'in the case of X', which is how Japanese states a condition without a verb. Three beats: ba-a-i." },
        { id: "ja-u81l3-junban", type: "vocab", front: "じゅんばん", reading: "junban", meaning: "turn (one's turn in order)", example: { jp: "じゅんばんにならびます。", en: "We line up in order." }, drill: { jp: "じゅんばんにテストをします。", en: "We do the test in turn." }, accept: ["order", "sequence", "one's turn", "taking turns"], hint: "junban — じゅん (order) + ばん (turn): your turn in the sequence. Shares its じゅん with じゅんび in lesson 1 — じゅん always means things in their proper order." },
        { id: "ja-u81l3-seiri", type: "vocab", front: "せいり", reading: "seiri", meaning: "sorting", example: { jp: "つくえのなかをせいりします。", en: "I sort out the inside of the desk." }, drill: { jp: "せいりをへやでします。", en: "I do the sorting in my room." }, accept: ["tidying", "organizing", "putting in order", "clearing out"], hint: "seiri — せい (arrange) + り (reason): putting things into a sensible order. Used with します. そうじ from u22 is cleaning dirt away; せいり is deciding where things belong." },
      ],
    },
    // Lesson 4: everyday events
    {
      id: "ja-u81l4",
      unit: 81,
      lesson: 4,
      title: "Everyday events",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about outcomes and effort: しっぱい せいこう えんりょ どりょく よしゅう ふくしゅう.",
      items: [
        { id: "ja-u81l4-shippai", type: "vocab", front: "しっぱい", reading: "shippai", meaning: "failure", example: { jp: "テストにしっぱいしました。", en: "I failed the test." }, drill: { jp: "しっぱいがこわいです。", en: "I'm afraid of failing." }, accept: ["mistake", "blunder", "failing", "a flop"], hint: "shippai — しつ (lose) + はい (defeat), colliding into っぱ: ship-pai. Used with します, and what you failed at takes に. Its opposite せいこう is the next card." },
        { id: "ja-u81l4-seiko", type: "vocab", front: "せいこう", reading: "seikō", meaning: "success", example: { jp: "しごとがせいこうしました。", en: "The work succeeded." }, drill: { jp: "せいこうはうれしいです。", en: "Success is a happy thing." }, accept: ["succeeding", "achievement", "success", "pulling it off"], hint: "seikō — せい (accomplish) + こう (merit). Long ō: sei-kō. The exact counterpart of しっぱい on the card before, and what you succeed AT takes に: しごとにせいこうする." },
        { id: "ja-u81l4-enryo", type: "vocab", front: "えんりょ", reading: "enryo", meaning: "reserve", example: { jp: "えんりょしないでください。", en: "Please don't hold back." }, drill: { jp: "えんりょがひつようです。", en: "Some restraint is needed." }, accept: ["restraint", "holding back", "standing on ceremony", "being too polite"], hint: "enryo — えん (distance) + りょ (consider): keeping a polite distance. ⚠️ えんりょしないで, 'don't hold back', is one of the most-heard Japanese invitations — refusing food out of politeness is えんりょ." },
        { id: "ja-u81l4-doryoku", type: "vocab", front: "どりょく", reading: "doryoku", meaning: "effort (hard work put in)", example: { jp: "まいにちどりょくします。", en: "I make an effort every day." }, drill: { jp: "どりょくがたいせつです。", en: "Effort is what matters." }, accept: ["hard work", "endeavor", "trying hard", "putting the work in"], hint: "doryoku — ど (exert) + りょく (strength): putting strength in. Used with します. The noun behind がんばります from u25, and a central virtue word in Japanese school and work culture." },
        { id: "ja-u81l4-yoshu", type: "vocab", front: "よしゅう", reading: "yoshū", meaning: "lesson preparation", example: { jp: "あしたのよしゅうをします。", en: "I prepare for tomorrow's lesson." }, drill: { jp: "よしゅうをよるにします。", en: "I do my lesson prep at night." }, accept: ["preview study", "prep study", "pre-reading", "studying ahead"], hint: "yoshū — よ (beforehand) + しゅう (study): studying the material BEFORE the lesson. Long ū: yo-shū. Its mirror image ふくしゅう, revising afterwards, is the next card." },
        { id: "ja-u81l4-fukushu", type: "vocab", front: "ふくしゅう", reading: "fukushū", meaning: "review", example: { jp: "かんじのふくしゅうをします。", en: "I review the kanji." }, drill: { jp: "ふくしゅうがたりません。", en: "I haven't revised enough." }, accept: ["revision", "going over", "going back over", "revising"], hint: "fukushū — ふく (again) + しゅう (study): studying it again, AFTER the lesson. Its mirror image よしゅう on the card before is studying BEFORE one. Japanese schooling expects both." },
      ],
    },
  ],
};
