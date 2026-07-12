// Unit 69 — どうし・N4 ("N4 verbs") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// Intermediate N4 verbs (～ます form as the headword), grouped by theme. Modeled
// like the A1/A2 verb units (vocab items). Every example uses only already-taught
// vocab + A1 grammar (が/に/で/を + です/ます), so it slots on top of a finished A1.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT69 = {
  id: "ja-u69",
  lang: "ja",
  title: "どうし・N4",
  order: 69,
  stage: "a2",
  lessons: [
    // Lesson 1: change & motion
    {
      id: "ja-u69l1",
      unit: 69,
      lesson: 1,
      title: "Change & motion",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe change and movement: あつまります うつります かわります つづきます まわります すべります.",
      items: [
        { id: "ja-u69l1-atsumarimasu", type: "vocab", front: "あつまります", reading: "atsumarimasu", meaning: "to gather", example: { jp: "みんながこうえんにあつまります。", en: "Everyone gathers at the park." }, accept: ["to assemble", "gather", "come together"] },
        { id: "ja-u69l1-utsurimasu", type: "vocab", front: "うつります", reading: "utsurimasu", meaning: "to move", example: { jp: "あたらしいまちにうつります。", en: "I move to a new town." }, accept: ["to move", "relocate", "transfer"] },
        { id: "ja-u69l1-kawarimasu", type: "vocab", front: "かわります", reading: "kawarimasu", meaning: "to change", example: { jp: "てんきがかわります。", en: "The weather changes." }, accept: ["to change", "changes", "turn into"] },
        { id: "ja-u69l1-tsuzukimasu", type: "vocab", front: "つづきます", reading: "tsuzukimasu", meaning: "to continue", example: { jp: "あめがつづきます。", en: "The rain continues." }, accept: ["to continue", "go on", "last"] },
        { id: "ja-u69l1-mawarimasu", type: "vocab", front: "まわります", reading: "mawarimasu", meaning: "to go around", example: { jp: "ちきゅうがまわります。", en: "The earth goes around." }, accept: ["to turn", "spin", "go around"] },
        { id: "ja-u69l1-suberimasu", type: "vocab", front: "すべります", reading: "suberimasu", meaning: "to slip", example: { jp: "みちですべります。", en: "I slip on the road." }, accept: ["to slide", "slip", "slips"] },
      ],
    },
    // Lesson 2: accidents & trouble
    {
      id: "ja-u69l2",
      unit: 69,
      lesson: 2,
      title: "Accidents & trouble",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about mishaps: にげます さわぎます われます おれます やぶれます よごれます.",
      items: [
        { id: "ja-u69l2-nigemasu", type: "vocab", front: "にげます", reading: "nigemasu", meaning: "to escape", example: { jp: "どうぶつがにげます。", en: "The animal escapes." }, accept: ["to run away", "escape", "flee"] },
        { id: "ja-u69l2-sawagimasu", type: "vocab", front: "さわぎます", reading: "sawagimasu", meaning: "to make noise", example: { jp: "こどもがさわぎます。", en: "The children make noise." }, accept: ["to make noise", "be noisy", "make a fuss"] },
        { id: "ja-u69l2-waremasu", type: "vocab", front: "われます", reading: "waremasu", meaning: "to break", example: { jp: "コップがわれます。", en: "The cup breaks." }, accept: ["to break", "shatter", "crack"] },
        { id: "ja-u69l2-oremasu", type: "vocab", front: "おれます", reading: "oremasu", meaning: "to snap", example: { jp: "えだがおれます。", en: "The branch snaps." }, accept: ["to break", "snap", "snaps"] },
        { id: "ja-u69l2-yaburemasu", type: "vocab", front: "やぶれます", reading: "yaburemasu", meaning: "to tear", example: { jp: "シャツがやぶれます。", en: "The shirt tears." }, accept: ["to rip", "tear", "get torn"] },
        { id: "ja-u69l2-yogoremasu", type: "vocab", front: "よごれます", reading: "yogoremasu", meaning: "to get dirty", example: { jp: "くつがよごれます。", en: "The shoes get dirty." }, accept: ["to get dirty", "become dirty", "get soiled"] },
      ],
    },
    // Lesson 3: states & conditions
    {
      id: "ja-u69l3",
      unit: 69,
      lesson: 3,
      title: "States & conditions",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe how things are: みつかります なくなります たります こみます あきます ぬれます.",
      items: [
        { id: "ja-u69l3-mitsukarimasu", type: "vocab", front: "みつかります", reading: "mitsukarimasu", meaning: "to be found", example: { jp: "かぎがみつかります。", en: "The key is found." }, accept: ["to be found", "turn up", "be discovered"] },
        { id: "ja-u69l3-nakunarimasu", type: "vocab", front: "なくなります", reading: "nakunarimasu", meaning: "to run out", example: { jp: "おかねがなくなります。", en: "The money runs out." }, accept: ["to disappear", "run out", "be gone"] },
        { id: "ja-u69l3-tarimasu", type: "vocab", front: "たります", reading: "tarimasu", meaning: "to be enough", example: { jp: "じかんがたります。", en: "There is enough time." }, accept: ["to be enough", "suffice", "be sufficient"] },
        { id: "ja-u69l3-komimasu", type: "vocab", front: "こみます", reading: "komimasu", meaning: "to be crowded", example: { jp: "でんしゃがこみます。", en: "The train is crowded." }, accept: ["to be crowded", "get crowded", "be packed"] },
        { id: "ja-u69l3-akimasu", type: "vocab", front: "あきます", reading: "akimasu", meaning: "to open", example: { jp: "ドアがあきます。", en: "The door opens." }, accept: ["to open", "opens", "come open"] },
        { id: "ja-u69l3-nuremasu", type: "vocab", front: "ぬれます", reading: "nuremasu", meaning: "to get wet", example: { jp: "あめでぬれます。", en: "I get wet in the rain." }, accept: ["to get wet", "become wet", "get soaked"] },
      ],
    },
    // Lesson 4: feelings & temperature
    {
      id: "ja-u69l4",
      unit: 69,
      lesson: 4,
      title: "Feelings & temperature",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "React and describe temperature: おどろきます なれます ひえます さめます わきます もえます.",
      items: [
        { id: "ja-u69l4-odorokimasu", type: "vocab", front: "おどろきます", reading: "odorokimasu", meaning: "to be surprised", example: { jp: "ニュースにおどろきます。", en: "I'm surprised at the news." }, accept: ["to be surprised", "be amazed", "be startled"] },
        { id: "ja-u69l4-naremasu", type: "vocab", front: "なれます", reading: "naremasu", meaning: "to get used to", example: { jp: "しごとになれます。", en: "I get used to the job." }, accept: ["to get used to", "become accustomed", "get accustomed"] },
        { id: "ja-u69l4-hiemasu", type: "vocab", front: "ひえます", reading: "hiemasu", meaning: "to get cold", example: { jp: "ビールがひえます。", en: "The beer gets cold." }, accept: ["to get cold", "chill", "cool down"] },
        { id: "ja-u69l4-samemasu", type: "vocab", front: "さめます", reading: "samemasu", meaning: "to cool down", example: { jp: "コーヒーがさめます。", en: "The coffee cools down." }, accept: ["to cool down", "get cold", "go cold"] },
        { id: "ja-u69l4-wakimasu", type: "vocab", front: "わきます", reading: "wakimasu", meaning: "to boil", example: { jp: "みずがわきます。", en: "The water boils." }, accept: ["to boil", "boils", "come to a boil"] },
        { id: "ja-u69l4-moemasu", type: "vocab", front: "もえます", reading: "moemasu", meaning: "to burn", example: { jp: "ごみがもえます。", en: "The trash burns." }, accept: ["to burn", "burns", "be on fire"] },
      ],
    },
  ],
};
