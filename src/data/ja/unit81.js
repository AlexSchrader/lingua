// Unit 81 — せいかつ・N4 ("Daily life") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 daily-life nouns: plans, schedules, deadlines, habits and everyday events.
// Vocab items only; each front is globally unique and absent from the running set.
// Examples use only earlier vocab + A1/A2 grammar so the unit slots in cleanly.
// NOTE: naturalness-critical — flagged for the batch native review when it goes live.
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
        { id: "ja-u81l1-chikoku", type: "vocab", front: "ちこく", reading: "chikoku", meaning: "being late", example: { jp: "かいしゃにちこくします。", en: "I'm late to work." }, accept: ["lateness", "tardiness"] },
        { id: "ja-u81l1-junbi", type: "vocab", front: "じゅんび", reading: "junbi", meaning: "preparation", example: { jp: "りょこうのじゅんびをします。", en: "I prepare for the trip." }, accept: ["getting ready", "preparations"] },
        { id: "ja-u81l1-shitaku", type: "vocab", front: "したく", reading: "shitaku", meaning: "getting ready", example: { jp: "でかけるしたくをします。", en: "I get ready to go out." }, accept: ["preparation", "readying"] },
        { id: "ja-u81l1-yoji", type: "vocab", front: "ようじ", reading: "yōji", meaning: "errand", example: { jp: "きょうはようじがあります。", en: "I have an errand today." }, accept: ["things to do", "business"] },
        { id: "ja-u81l1-tsugo", type: "vocab", front: "つごう", reading: "tsugō", meaning: "convenience", example: { jp: "あしたはつごうがわるいです。", en: "Tomorrow is not convenient." }, accept: ["availability", "circumstances"] },
        { id: "ja-u81l1-chushi", type: "vocab", front: "ちゅうし", reading: "chūshi", meaning: "cancellation", example: { jp: "あめでしあいがちゅうしです。", en: "The game is cancelled due to rain." }, accept: ["calling off", "suspension"] },
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
        { id: "ja-u81l2-kikan", type: "vocab", front: "きかん", reading: "kikan", meaning: "period", example: { jp: "やすみのきかんはみじかいです。", en: "The holiday period is short." }, accept: ["duration", "term"] },
        { id: "ja-u81l2-kigen", type: "vocab", front: "きげん", reading: "kigen", meaning: "deadline", example: { jp: "しごとのきげんはきょうです。", en: "The deadline for the work is today." }, accept: ["time limit", "due date"] },
        { id: "ja-u81l2-shimekiri", type: "vocab", front: "しめきり", reading: "shimekiri", meaning: "closing date", example: { jp: "しめきりにまにあいます。", en: "I make it in time for the closing date." }, accept: ["deadline", "cutoff"] },
        { id: "ja-u81l2-nittei", type: "vocab", front: "にってい", reading: "nittei", meaning: "schedule", example: { jp: "りょこうのにっていをきめます。", en: "I decide the trip schedule." }, accept: ["itinerary", "agenda"] },
        { id: "ja-u81l2-renkyu", type: "vocab", front: "れんきゅう", reading: "renkyū", meaning: "consecutive holidays", example: { jp: "らいしゅうはれんきゅうです。", en: "Next week is a run of holidays." }, accept: ["long weekend", "holiday stretch"] },
        { id: "ja-u81l2-rusu", type: "vocab", front: "るす", reading: "rusu", meaning: "being out", example: { jp: "ちちはいまるすです。", en: "My father is out right now." }, accept: ["absence", "away from home"] },
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
        { id: "ja-u81l3-kuse", type: "vocab", front: "くせ", reading: "kuse", meaning: "habit", example: { jp: "わたしはわらうくせがあります。", en: "I have a habit of laughing." }, accept: ["quirk", "mannerism"] },
        { id: "ja-u81l3-choshi", type: "vocab", front: "ちょうし", reading: "chōshi", meaning: "condition", example: { jp: "きょうはちょうしがいいです。", en: "I'm in good condition today." }, accept: ["state", "form"] },
        { id: "ja-u81l3-guzen", type: "vocab", front: "ぐうぜん", reading: "gūzen", meaning: "coincidence", example: { jp: "ぐうぜんともだちにあいました。", en: "I met a friend by coincidence." }, accept: ["by chance", "chance"] },
        { id: "ja-u81l3-baai", type: "vocab", front: "ばあい", reading: "baai", meaning: "case", example: { jp: "あめのばあいはやすみます。", en: "In the case of rain, we rest." }, accept: ["situation", "occasion"] },
        { id: "ja-u81l3-junban", type: "vocab", front: "じゅんばん", reading: "junban", meaning: "turn", example: { jp: "じゅんばんにならびます。", en: "We line up in order." }, accept: ["order", "sequence"] },
        { id: "ja-u81l3-seiri", type: "vocab", front: "せいり", reading: "seiri", meaning: "sorting", example: { jp: "つくえのなかをせいりします。", en: "I sort out the inside of the desk." }, accept: ["tidying", "organizing"] },
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
        { id: "ja-u81l4-shippai", type: "vocab", front: "しっぱい", reading: "shippai", meaning: "failure", example: { jp: "テストにしっぱいしました。", en: "I failed the test." }, accept: ["mistake", "blunder"] },
        { id: "ja-u81l4-seiko", type: "vocab", front: "せいこう", reading: "seikō", meaning: "success", example: { jp: "しごとがせいこうしました。", en: "The work succeeded." }, accept: ["succeeding", "achievement"] },
        { id: "ja-u81l4-enryo", type: "vocab", front: "えんりょ", reading: "enryo", meaning: "reserve", example: { jp: "えんりょしないでください。", en: "Please don't hold back." }, accept: ["restraint", "holding back"] },
        { id: "ja-u81l4-doryoku", type: "vocab", front: "どりょく", reading: "doryoku", meaning: "effort", example: { jp: "まいにちどりょくします。", en: "I make an effort every day." }, accept: ["hard work", "endeavor"] },
        { id: "ja-u81l4-yoshu", type: "vocab", front: "よしゅう", reading: "yoshū", meaning: "lesson preparation", example: { jp: "あしたのよしゅうをします。", en: "I prepare for tomorrow's lesson." }, accept: ["preview study", "prep study"] },
        { id: "ja-u81l4-fukushu", type: "vocab", front: "ふくしゅう", reading: "fukushū", meaning: "review", example: { jp: "かんじのふくしゅうをします。", en: "I review the kanji." }, accept: ["revision", "going over"] },
      ],
    },
  ],
};
