// JA Unit 142 — ごい・N3・1 (じどうし・たどうし pairs) — B1 / JLPT N3
// Strand D, coverage 1 of 14. Coverage units take the band from "taught" to "usable", and
// the largest hole left after A2 is the transitive/intransitive pair system: the pattern is
// only half-regular, so a learner who has one half cannot derive the other.
//
// Two kinds of card here, and the hint says which is which:
//   • the MISSING HALF of a pair A1/A2 already started — ふやします (ふえる is u92),
//     のこします (のこる u92), もどします (もどる u97), とめます (とまる u22),
//     かたづきます (かたづける u80), かわかします (かわく u92), やぶります (やぶれる u77)
//   • BOTH halves of a pair the corpus doesn't have at all — そろう/そろえる,
//     ちぢむ/ちぢめる, こぼれる/こぼす, ころがる/ころがす, とける/とかす,
//     はずれる/はずす, ぬける/ぬく
// The first draft of this unit taught しまります・もどります・ふえます・あがります・
// さがります・のこります・おちます・かわきます, all of which the corpus already owns in
// dictionary form. The exact-string front check missed it; the content gate did not.
export const UNIT142 = {
  id: "ja-u142",
  lang: "ja",
  title: "ごい・N3・1",
  order: 142,
  stage: "b1",
  lessons: [
    {
      id: "ja-u142l1",
      unit: 142,
      lesson: 1,
      title: "Open it, stop it, put it back",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say who did it rather than that it happened: ひらきます, とめます, もどします, そろえます.",
      items: [
        { id: "ja-u142l1-hirakimasu", type: "vocab", front: "ひらきます", reading: "hirakimasu", meaning: "to open", example: { jp: "みせは10じにひらきますが、ひとはもうならんでいます。", en: "The shop opens at ten, but people are already queuing." }, accept: ["to open up", "opens", "to hold (an event)"], hint: "ひらきます works both ways — はながひらく (it opens by itself) and かいぎをひらく (you hold a meeting). あけます is only ever something you do." },
        { id: "ja-u142l1-tomemasu", type: "vocab", front: "とめます", reading: "tomemasu", meaning: "to stop (something)", example: { jp: "みちがせまいので、くるまはここにとめます。", en: "The road is narrow, so I'll park the car here." }, accept: ["to park", "to halt", "to switch off"], hint: "The transitive half of とまります, which you already have from u22. It also means 'park' — くるまをとめる — which is the use you'll meet first." },
        { id: "ja-u142l1-modoshimasu", type: "vocab", front: "もどします", reading: "modoshimasu", meaning: "to put back", example: { jp: "つかったほんは、たなにもどしてください。", en: "Please put the books you used back on the shelf." }, accept: ["to return (a thing)", "to restore", "puts back"], hint: "The transitive half of もどる (u97): you move yourself back with もどる, a THING back with もどす. Shops say もとのばしょにもどしてください." },
        { id: "ja-u142l1-katazukimasu", type: "vocab", front: "かたづきます", reading: "katazukimasu", meaning: "to get tidy, to be settled", example: { jp: "ものがおおいので、へやがなかなかかたづきません。", en: "There's too much stuff, so the room just won't get tidy." }, accept: ["to be put in order", "gets sorted", "to be resolved"], hint: "The intransitive half of かたづけます: you tidy the room, and the room かたづく. Also used for a problem getting settled." },
        { id: "ja-u142l1-soroimasu", type: "vocab", front: "そろいます", reading: "soroimasu", meaning: "to be all present, to match", example: { jp: "みんなそろいましたので、はじめましょう。", en: "Everyone's here, so let's begin." }, accept: ["to be complete", "to be gathered", "to be in order"], hint: "The set is complete — everyone has arrived, or every piece is there. Neither half of this pair exists below B1." },
        { id: "ja-u142l1-soroemasu", type: "vocab", front: "そろえます", reading: "soroemasu", meaning: "to gather, to make complete", example: { jp: "ひつようなものをそろえてから、りょこうにいきます。", en: "I'll get everything I need together, then go on the trip." }, accept: ["to assemble (a set)", "to line up", "to get ready"], hint: "The transitive twin of そろいます. Also 'to line up neatly': くつをそろえる, which you are expected to do at a Japanese front door." },
      ],
    },
    {
      id: "ja-u142l2",
      unit: 142,
      lesson: 2,
      title: "More, less, smaller",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say you changed an amount rather than that it changed: ふやします, へらします, ちぢめます, のこします.",
      items: [
        { id: "ja-u142l2-fuyashimasu", type: "vocab", front: "ふやします", reading: "fuyashimasu", meaning: "to increase (something)", example: { jp: "みせがいそがしいので、てんいんをふやすことにしました。", en: "The shop is busy, so we've decided to take on more staff." }, accept: ["to add to", "to build up", "increases"], hint: "The transitive half of ふえる, which you have from u92. The し in the middle is the giveaway — a great many transitive verbs carry it: なおします, もどします, ふやします." },
        { id: "ja-u142l2-herimasu", type: "vocab", front: "へります", reading: "herimasu", meaning: "to decrease (by itself)", example: { jp: "さいきんてがみをかくひとがへって、メールばかりになりました。", en: "Fewer people write letters these days — it's all email now." }, accept: ["to go down", "to drop", "diminishes"], hint: "おなかがへる ('be hungry' — literally 'my stomach decreases') is the same verb, and the phrase you'll hear most." },
        { id: "ja-u142l2-herashimasu", type: "vocab", front: "へらします", reading: "herashimasu", meaning: "to reduce (something)", example: { jp: "からだのために、さとうをへらすようにしています。", en: "For my health, I'm making a point of cutting down on sugar." }, accept: ["to cut down", "to lessen", "reduces"], hint: "The transitive へります — and both halves of this pair are new, so learn them as one card each way." },
        { id: "ja-u142l2-chijimimasu", type: "vocab", front: "ちぢみます", reading: "chijimimasu", meaning: "to shrink", example: { jp: "このシャツはあらうとちぢみますから、きをつけてください。", en: "This shirt shrinks when you wash it, so be careful." }, accept: ["to get smaller", "to contract", "shrinks"], hint: "Clothes in hot water, and distances that feel shorter. Note the two ぢ — ちぢみます, one of very few words that keeps ぢ in modern spelling." },
        { id: "ja-u142l2-chijimemasu", type: "vocab", front: "ちぢめます", reading: "chijimemasu", meaning: "to shorten", example: { jp: "じかんがないので、はなしをちぢめてせつめいしました。", en: "There was no time, so I shortened the story and explained." }, accept: ["to cut short", "to reduce (length)", "shortens"], hint: "The transitive ちぢみます — for time, distance and stories as much as for cloth." },
        { id: "ja-u142l2-nokoshimasu", type: "vocab", front: "のこします", reading: "nokoshimasu", meaning: "to leave (something) behind", example: { jp: "おなかがいっぱいだったので、はんぶんのこしました。", en: "I was full, so I left half of it." }, accept: ["to save (for later)", "to leave over", "leaves behind"], hint: "The transitive half of のこる (u92). Leaving food in Japan is worth a word of apology — のこしてすみません." },
      ],
    },
    {
      id: "ja-u142l3",
      unit: 142,
      lesson: 3,
      title: "Spilt, rolled, melted",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say whether it happened or you did it: こぼれます・こぼします, ころがります・ころがします, とけます・とかします.",
      items: [
        { id: "ja-u142l3-koboremasu", type: "vocab", front: "こぼれます", reading: "koboremasu", meaning: "to spill (by itself)", example: { jp: "コップがいっぱいで、みずがこぼれそうです。", en: "The glass is full — the water looks like it'll spill." }, accept: ["overflows", "runs over", "spills"], hint: "The water does it, not you. Add そうです (u44) and you get the warning you'd actually shout." },
        { id: "ja-u142l3-koboshimasu", type: "vocab", front: "こぼします", reading: "koboshimasu", meaning: "to spill (something)", example: { jp: "いそいでいたので、コーヒーをこぼしてしまいました。", en: "I was in a hurry and ended up spilling my coffee." }, accept: ["to knock over", "to slop", "spills"], hint: "Transitive こぼれます, and it pairs almost automatically with てしまいました — spilling is always an accident." },
        { id: "ja-u142l3-korogarimasu", type: "vocab", front: "ころがります", reading: "korogarimasu", meaning: "to roll (by itself)", example: { jp: "ボールがころがって、みちのむこうへいってしまいました。", en: "The ball rolled away and ended up across the road." }, accept: ["to tumble", "to roll along", "rolls"], hint: "Anything round moving on its own. Also 'to lie about': へやにものがころがっている." },
        { id: "ja-u142l3-korogashimasu", type: "vocab", front: "ころがします", reading: "korogashimasu", meaning: "to roll (something)", example: { jp: "おもいはこは、もたないでころがしたほうがらくです。", en: "A heavy box is easier to roll than to carry." }, accept: ["to push along", "to trundle", "rolls it"], hint: "The transitive ころがります — the し again. If you can hear that し, you can guess which half of a pair you're looking at." },
        { id: "ja-u142l3-tokemasu", type: "vocab", front: "とけます", reading: "tokemasu", meaning: "to melt, to dissolve", example: { jp: "あたたかくなって、ゆきがとけはじめました。", en: "It got warmer and the snow started to melt." }, accept: ["to thaw", "to come undone", "melts"], hint: "Snow, ice and sugar in tea. A homophone とけます also means 'to be solved' — もんだいがとける — from a different verb." },
        { id: "ja-u142l3-tokashimasu", type: "vocab", front: "とかします", reading: "tokashimasu", meaning: "to melt (something)", example: { jp: "さとうをみずにとかしてから、まぜてください。", en: "Dissolve the sugar in water, then stir." }, accept: ["to dissolve (something)", "to thaw out", "melts it"], hint: "The transitive とけます. Recipes use it constantly: バターをとかす, さとうをとかす." },
      ],
    },
    {
      id: "ja-u142l4",
      unit: 142,
      lesson: 4,
      title: "Torn, come off, dried out",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about things coming apart: やぶります, はずれます・はずします, ぬけます・ぬきます, かわかします.",
      items: [
        { id: "ja-u142l4-yaburimasu", type: "vocab", front: "やぶります", reading: "yaburimasu", meaning: "to tear; to break (a rule)", example: { jp: "いらないてがみだったので、やぶってすてました。", en: "It was a letter I didn't need, so I tore it up and threw it away." }, accept: ["to rip", "to violate", "tears"], hint: "Paper and promises take the same verb: かみをやぶる, やくそくをやぶる. Its intransitive partner やぶれます you already have." },
        { id: "ja-u142l4-hazuremasu", type: "vocab", front: "はずれます", reading: "hazuremasu", meaning: "to come off, to miss", example: { jp: "ボタンがはずれていますよ。とめたほうがいいです。", en: "Your button has come undone — you should do it up." }, accept: ["comes loose", "falls off", "to be wrong"], hint: "Also 'to miss the mark': よそうがはずれる = the prediction was wrong. Anything that leaves the place it should be in." },
        { id: "ja-u142l4-hazushimasu", type: "vocab", front: "はずします", reading: "hazushimasu", meaning: "to take off, to remove", example: { jp: "へやにはいったら、ぼうしをはずしてください。", en: "Please take your hat off when you come into the room." }, accept: ["to detach", "to step away", "removes"], hint: "The transitive はずれます. せきをはずしております ('he has stepped away from his desk') is the phrase you'll hear on every business phone call." },
        { id: "ja-u142l4-nukemasu", type: "vocab", front: "ぬけます", reading: "nukemasu", meaning: "to come out, to fall out", example: { jp: "としをとると、かみのけがぬけやすくなります。", en: "As you get older, your hair falls out more easily." }, accept: ["slips out", "escapes", "to be missing"], hint: "Hair, teeth, air from a tyre, and names missing from a list all ぬける — something that was in place is now gone." },
        { id: "ja-u142l4-nukimasu", type: "vocab", front: "ぬきます", reading: "nukimasu", meaning: "to pull out, to leave out", example: { jp: "でかけるまえに、テレビのコードをぬきます。", en: "Before going out, I pull out the TV's plug." }, accept: ["to extract", "to omit", "pulls out"], hint: "The transitive ぬけます. Also 'to skip': ちょうしょくをぬく = skip breakfast." },
        { id: "ja-u142l4-kawakashimasu", type: "vocab", front: "かわかします", reading: "kawakashimasu", meaning: "to dry (something)", example: { jp: "あめでぬれたので、かみをかわかしてから、でかけます。", en: "I got wet in the rain, so I'll dry my hair before going out." }, accept: ["to air", "to dry out", "dries"], hint: "The transitive half of かわく (u92) — with し in the middle, like ふやします and ころがします. Compare ほします, which is specifically hanging it in the sun." },
      ],
    },
  ],
};
