// Unit 69 — どうし・N4 ("N4 verbs") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// Intermediate N4 verbs (～ます form as the headword), grouped by theme. Modeled
// like the A1/A2 verb units (vocab items). Every example uses only already-taught
// vocab + A1 grammar (が/に/で/を + です/ます), so it slots on top of a finished A1.
// NATURALNESS: checked by the LLM naturalness review (content-auditor) plus Alex's
// Dev-Mode playtest. A human native review is a nice-to-have, NOT a blocker
// (CLAUDE.md, Alex 2026-07-12) — this header used to say the unit was "flagged for
// the batch native review", which read as a gate that does not exist.
// EVERY card in this unit is an INTRANSITIVE verb: the thing does it by itself and
// takes が, never を. The hints name the transitive partner where one exists,
// because that pair is the whole difficulty of the unit.
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
        { id: "ja-u69l1-atsumarimasu", type: "vocab", front: "あつまります", reading: "atsumarimasu", meaning: "to gather (people come together)", example: { jp: "みんながこうえんにあつまります。", en: "Everyone gathers at the park." }, drill: { jp: "えきにひとがあつまります。", en: "People gather at the station." }, accept: ["to assemble", "gather", "come together"], hint: "atsumarimasu — the crowd gathers BY ITSELF, so the people take が and the meeting place takes に. あつめます is you collecting things together. Same pair shape as almost every card in this unit." },
        { id: "ja-u69l1-utsurimasu", type: "vocab", front: "うつります", reading: "utsurimasu", meaning: "to move", example: { jp: "あたらしいまちにうつります。", en: "I move to a new town." }, drill: { jp: "となりのへやにうつります。", en: "I move to the next room." }, accept: ["to move", "relocate", "transfer"], hint: "utsurimasu — moving yourself to a new place: a new flat, a new desk, a new department. Where you move to takes に. For carrying an object there, use はこびます from u45." },
        { id: "ja-u69l1-kawarimasu", type: "vocab", front: "かわります", reading: "kawarimasu", meaning: "to change (it changes itself)", example: { jp: "てんきがかわります。", en: "The weather changes." }, drill: { jp: "よていがかわります。", en: "The plan changes." }, accept: ["to change", "changes", "turn into"], hint: "kawarimasu — the thing changes on its own and takes が. Its partner かえます, you changing a thing, you learned in u45 — one syllable apart, わ versus え, and that syllable is who did it." },
        { id: "ja-u69l1-tsuzukimasu", type: "vocab", front: "つづきます", reading: "tsuzukimasu", meaning: "to continue", example: { jp: "あめがつづきます。", en: "The rain continues." }, drill: { jp: "しごとがつづきます。", en: "The work goes on." }, accept: ["to continue", "go on", "last"], hint: "tsuzukimasu — the thing keeps going by itself (が); つづけます is you keeping it going. Note the two づ-type sounds: tsu-zu-ki. つづき on its own is 'the next part', what you read at the end of a serial." },
        { id: "ja-u69l1-mawarimasu", type: "vocab", front: "まわります", reading: "mawarimasu", meaning: "to go around", example: { jp: "ちきゅうがまわります。", en: "The earth goes around." }, drill: { jp: "せんたくきがまわります。", en: "The washing machine spins." }, accept: ["to turn", "spin", "go around"], hint: "mawarimasu — spinning on the spot or doing a circuit of places. The thing turns itself (が); まわします is you turning it. まわり as a noun is 'the area around'." },
        { id: "ja-u69l1-suberimasu", type: "vocab", front: "すべります", reading: "suberimasu", meaning: "to slip", example: { jp: "みちですべります。", en: "I slip on the road." }, drill: { jp: "こおりですべります。", en: "I slip on the ice." }, accept: ["to slide", "slip", "slips"], hint: "suberimasu — losing your footing, and also sliding on purpose: skiing is すべります too. What you slip ON takes で. Students also use it to mean failing an exam." },
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
        { id: "ja-u69l2-nigemasu", type: "vocab", front: "にげます", reading: "nigemasu", meaning: "to escape", example: { jp: "どうぶつがにげます。", en: "The animal escapes." }, drill: { jp: "ねこがにわににげます。", en: "The cat escapes into the garden." }, accept: ["to run away", "escape", "flee"], hint: "nigemasu — getting away from danger or from something you do not want to face. にげろ is the shout for 'run!'. The place you flee to takes に, the place you flee from takes から." },
        { id: "ja-u69l2-sawagimasu", type: "vocab", front: "さわぎます", reading: "sawagimasu", meaning: "to make noise", example: { jp: "こどもがさわぎます。", en: "The children make noise." }, drill: { jp: "みんながまつりでさわぎます。", en: "Everyone makes a racket at the festival." }, accept: ["to make noise", "be noisy", "make a fuss"], hint: "sawagimasu — people being rowdy, not an object being loud (that is うるさい). Careful: さわります from u45, to touch, differs by one syllable — さわぎ versus さわり." },
        { id: "ja-u69l2-waremasu", type: "vocab", front: "われます", reading: "waremasu", meaning: "to break (it shatters)", example: { jp: "コップがわれます。", en: "The cup breaks." }, drill: { jp: "まどのガラスがわれます。", en: "The window glass shatters." }, accept: ["to break", "shatter", "crack"], hint: "waremasu — specifically for brittle things that CRACK or shatter: glass, an egg, a plate. こわれます from u50 is a machine ceasing to work. Both take が; neither is your fault." },
        { id: "ja-u69l2-oremasu", type: "vocab", front: "おれます", reading: "oremasu", meaning: "to snap", example: { jp: "えだがおれます。", en: "The branch snaps." }, drill: { jp: "えんぴつがおれます。", en: "The pencil snaps." }, accept: ["to break", "snap", "snaps"], hint: "oremasu — for long thin things that snap in two: a pencil, a branch, a bone. おります is you snapping it. Use われます for glass and こわれます for machines — Japanese splits what English calls 'break' three ways." },
        { id: "ja-u69l2-yaburemasu", type: "vocab", front: "やぶれます", reading: "yaburemasu", meaning: "to tear", example: { jp: "シャツがやぶれます。", en: "The shirt tears." }, drill: { jp: "てがみがやぶれます。", en: "The letter tears." }, accept: ["to rip", "tear", "get torn"], hint: "yaburemasu — for sheets and fabric: paper, a shirt, a bag. やぶります is you tearing it. The fourth of the unit's breaking verbs, each one keyed to the material rather than to the force." },
        { id: "ja-u69l2-yogoremasu", type: "vocab", front: "よごれます", reading: "yogoremasu", meaning: "to get dirty", example: { jp: "くつがよごれます。", en: "The shoes get dirty." }, drill: { jp: "ふくがよごれます。", en: "The clothes get dirty." }, accept: ["to get dirty", "become dirty", "get soiled"], hint: "yogoremasu — the thing becomes dirty (が); よごします is you dirtying it. きたない is the adjective for the resulting state, so くつがよごれて、きたないです is the natural sequence." },
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
        { id: "ja-u69l3-mitsukarimasu", type: "vocab", front: "みつかります", reading: "mitsukarimasu", meaning: "to be found", example: { jp: "かぎがみつかります。", en: "The key is found." }, drill: { jp: "かばんがみつかります。", en: "The bag turns up." }, accept: ["to be found", "turn up", "be discovered"], hint: "mitsukarimasu — the lost thing turns up, so it takes が and nobody gets the credit. みつけます is you finding it deliberately. Japanese prefers the が version when the finding was lucky." },
        { id: "ja-u69l3-nakunarimasu", type: "vocab", front: "なくなります", reading: "nakunarimasu", meaning: "to run out", example: { jp: "おかねがなくなります。", en: "The money runs out." }, accept: ["to disappear", "run out", "be gone"], drill: { jp: "くすりがなくなります。", en: "The medicine runs out." }, hint: "nakunarimasu — built from ない (not there) + なります (becomes): becomes not-there. Used for supplies running out and for things going missing. ⚠️ Of a person it is a gentle way of saying they have died." },
        { id: "ja-u69l3-tarimasu", type: "vocab", front: "たります", reading: "tarimasu", meaning: "to be enough", example: { jp: "じかんがたります。", en: "There is enough time." }, drill: { jp: "おかねがたりません。", en: "There is not enough money." }, accept: ["to be enough", "suffice", "be sufficient"], hint: "tarimasu — the thing suffices, so it takes が. You will hear the NEGATIVE far more: たりない / たりません, 'not enough', is the everyday complaint. じかんがたりない is the one you will use most." },
        { id: "ja-u69l3-komimasu", type: "vocab", front: "こみます", reading: "komimasu", meaning: "to be crowded", example: { jp: "でんしゃがこみます。", en: "The train is crowded." }, drill: { jp: "みせがこみます。", en: "The shop gets crowded." }, accept: ["to be crowded", "get crowded", "be packed"], hint: "komimasu — a place filling with people (が). You will usually meet it as こんでいます, 'it is crowded right now', because the state matters more than the moment it filled. Opposite: すいています, empty." },
        { id: "ja-u69l3-akimasu", type: "vocab", front: "あきます", reading: "akimasu", meaning: "to open (it comes open)", example: { jp: "ドアがあきます。", en: "The door opens." }, drill: { jp: "まどがあきます。", en: "The window comes open." }, accept: ["to open", "opens", "come open"], hint: "akimasu — the door opens by itself (が); あけます, which you know from u20, is you opening it. The shop being open for business is あいています." },
        { id: "ja-u69l3-nuremasu", type: "vocab", front: "ぬれます", reading: "nuremasu", meaning: "to get wet", example: { jp: "あめでぬれます。", en: "I get wet in the rain." }, drill: { jp: "くつがぬれます。", en: "The shoes get wet." }, accept: ["to get wet", "become wet", "get soaked"], hint: "nuremasu — becoming wet, with what soaked you marked by で: あめで, in the rain. ぬらします is you wetting something. Compare ほします from u47, drying laundry out — the two run the same chore." },
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
        { id: "ja-u69l4-odorokimasu", type: "vocab", front: "おどろきます", reading: "odorokimasu", meaning: "to be surprised", example: { jp: "ニュースにおどろきます。", en: "I'm surprised at the news." }, drill: { jp: "じしんにおどろきます。", en: "I'm surprised by the earthquake." }, accept: ["to be surprised", "be amazed", "be startled"], hint: "odorokimasu — the formal, written cousin of びっくりします from u48. What surprises you takes に in both. In conversation Japanese reaches for びっくり; in a newspaper it reaches for おどろく." },
        { id: "ja-u69l4-naremasu", type: "vocab", front: "なれます", reading: "naremasu", meaning: "to get used to", example: { jp: "しごとになれます。", en: "I get used to the job." }, drill: { jp: "あたらしいまちになれます。", en: "I get used to the new town." }, accept: ["to get used to", "become accustomed", "get accustomed"], hint: "naremasu — what you get used to takes に, not を. You will mostly say なれました (got used to it) or なれていません (not yet). It is the verb for settling into a new country." },
        { id: "ja-u69l4-hiemasu", type: "vocab", front: "ひえます", reading: "hiemasu", meaning: "to get cold", example: { jp: "ビールがひえます。", en: "The beer gets cold." }, drill: { jp: "のみものがひえます。", en: "The drink gets cold." }, accept: ["to get cold", "chill", "cool down"], hint: "hiemasu — getting PLEASANTLY cold: a beer in the fridge, a room in winter. ひやします is you chilling it. The next card さめます is the unwanted kind, food going cold — the difference is whether you wanted it." },
        { id: "ja-u69l4-samemasu", type: "vocab", front: "さめます", reading: "samemasu", meaning: "to cool down", example: { jp: "コーヒーがさめます。", en: "The coffee cools down." }, drill: { jp: "スープがさめます。", en: "The soup goes cold." }, accept: ["to cool down", "get cold", "go cold"], hint: "samemasu — something hot losing its heat, usually a loss: さめたコーヒー is cold coffee, and nobody wants it. ひえます on the card before is the welcome kind. さめる also describes enthusiasm cooling off." },
        { id: "ja-u69l4-wakimasu", type: "vocab", front: "わきます", reading: "wakimasu", meaning: "to boil", example: { jp: "みずがわきます。", en: "The water boils." }, drill: { jp: "なべがわきます。", en: "The pot comes to a boil." }, accept: ["to boil", "boils", "come to a boil"], hint: "wakimasu — the water boils by itself (が); わかします is you boiling it. おゆをわかす, 'boil the water', is the phrase you need for tea. The noun おゆ is the hot water that results." },
        { id: "ja-u69l4-moemasu", type: "vocab", front: "もえます", reading: "moemasu", meaning: "to burn", example: { jp: "ごみがもえます。", en: "The trash burns." }, drill: { jp: "はやしがもえます。", en: "The woods burn." }, accept: ["to burn", "burns", "be on fire"], hint: "moemasu — the thing burns (が); もやします is you burning it. This is the word on every Japanese bin: もえるごみ, burnable rubbish, versus もえないごみ — so the ごみ card in u47 and this one are a pair." },
      ],
    },
  ],
};
