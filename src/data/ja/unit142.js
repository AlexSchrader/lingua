// JA Unit 142 — ごい・N3・1 (じどうし・たどうし pairs) — B1 / JLPT N3
// Strand D, coverage 1 of 14. Coverage units take the band from "taught" to "usable",
// and the single largest hole left after A2 is the transitive/intransitive pair system:
// A1/A2 taught one half of a dozen pairs (しめます, はいります, つきます, かかります…)
// and left the other half unlearnable by guessing, because the pattern is only
// half-regular. Each lesson here is three pairs, and each example puts BOTH halves in one
// sentence so the contrast — "it happened" vs "someone did it" — is the card.
// Themed away from the u99–136 slots on purpose (this seat ran parallel to blocks 1–2).
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
      title: "It closes / I close it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say whether something happened by itself or someone did it: しまります・ひらきます・もどります against もどします.",
      items: [
        { id: "ja-u142l1-shimarimasu", type: "vocab", front: "しまります", reading: "shimarimasu", meaning: "to close (by itself)", example: { jp: "このドアはかぜでしまりますから、きをつけてください。", en: "This door closes in the wind, so please be careful." }, accept: ["to shut", "closes", "gets closed"], hint: "しまります is the door doing it; しめます (already learned) is you doing it. が marks the thing that closes, を the thing you close." },
        { id: "ja-u142l1-hirakimasu", type: "vocab", front: "ひらきます", reading: "hirakimasu", meaning: "to open", example: { jp: "みせは10じにひらきますが、ひとはもうならんでいます。", en: "The shop opens at ten, but people are already queuing." }, accept: ["to open up", "opens", "to hold (an event)"], hint: "ひらきます works both ways — の花がひらく (it opens) and かいぎをひらく (hold a meeting). あけます is only ever something you do." },
        { id: "ja-u142l1-modorimasu", type: "vocab", front: "もどります", reading: "modorimasu", meaning: "to return, to go back", example: { jp: "わすれものをしたので、いえにもどりました。", en: "I'd forgotten something, so I went back home." }, accept: ["to come back", "returns", "to head back"], hint: "You move yourself back. かえります is going back where you belong; もどります is going back where you just were." },
        { id: "ja-u142l1-modoshimasu", type: "vocab", front: "もどします", reading: "modoshimasu", meaning: "to put back", example: { jp: "つかったほんは、たなにもどしてください。", en: "Please put the books you used back on the shelf." }, accept: ["to return (a thing)", "to restore", "puts back"], hint: "The transitive twin of もどります — you move a THING back. Libraries and shops say もとのばしょにもどしてください." },
        { id: "ja-u142l1-tomemasu", type: "vocab", front: "とめます", reading: "tomemasu", meaning: "to stop (something)", example: { jp: "みちがせまいので、くるまはここにとめます。", en: "The road is narrow, so I'll park the car here." }, accept: ["to park", "to halt", "to switch off"], hint: "The transitive とまります. It also means 'park' — くるまをとめる — which is the use you'll meet first." },
        { id: "ja-u142l1-kimarimasu", type: "vocab", front: "きまります", reading: "kimarimasu", meaning: "to be decided", example: { jp: "かいぎのひがきまりましたので、みなさんにおしらせします。", en: "The date of the meeting has been decided, so I'll let everyone know." }, accept: ["gets settled", "is set", "turns out"], hint: "きめます is you deciding; きまります is the decision arriving. Japanese reaches for きまりました even when a person did choose — it sounds less pushy." },
      ],
    },
    {
      id: "ja-u142l2",
      unit: 142,
      lesson: 2,
      title: "More, less, up, down",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a quantity changing, and say whether you changed it: ふえます・ふやします, へります・へらします, あがります・さがります.",
      items: [
        { id: "ja-u142l2-fuemasu", type: "vocab", front: "ふえます", reading: "fuemasu", meaning: "to increase (by itself)", example: { jp: "このまちはがいこくじんのかんこうきゃくがふえました。", en: "The number of foreign tourists in this town has gone up." }, accept: ["to grow", "goes up", "gets more numerous"], hint: "ふえます needs no agent — the number simply rose. Countable things ふえる; amounts of liquid or money usually ます too." },
        { id: "ja-u142l2-fuyashimasu", type: "vocab", front: "ふやします", reading: "fuyashimasu", meaning: "to increase (something)", example: { jp: "みせがいそがしいので、てんいんをふやすことにしました。", en: "The shop is busy, so we've decided to take on more staff." }, accept: ["to add to", "to build up", "increases"], hint: "The transitive ふえます. The し in the middle is the giveaway — a great many transitive verbs carry it (なおします, おとします, もどします)." },
        { id: "ja-u142l2-herimasu", type: "vocab", front: "へります", reading: "herimasu", meaning: "to decrease (by itself)", example: { jp: "さいきんてがみをかくひとがへって、メールばかりになりました。", en: "Fewer people write letters these days — it's all email now." }, accept: ["to go down", "to drop", "diminishes"], hint: "おなかがへる ('be hungry' — literally 'my stomach decreases') is the same verb, and the phrase you'll hear most." },
        { id: "ja-u142l2-herashimasu", type: "vocab", front: "へらします", reading: "herashimasu", meaning: "to reduce (something)", example: { jp: "からだのために、さとうをへらすようにしています。", en: "For my health, I'm making a point of cutting down on sugar." }, accept: ["to cut down", "to lessen", "reduces"], hint: "Transitive へります. Pairs naturally with ようにしています from u139 — a change you're deliberately making." },
        { id: "ja-u142l2-agarimasu", type: "vocab", front: "あがります", reading: "agarimasu", meaning: "to rise, to go up", example: { jp: "ガソリンのねだんがあがったので、でんしゃでいきます。", en: "The price of petrol has gone up, so I'll take the train." }, accept: ["to climb", "goes up", "to be raised"], hint: "Prices, temperatures and skill levels all あがる. Its transitive partner あげます (to raise) you already know from favours — same verb, wider job." },
        { id: "ja-u142l2-sagarimasu", type: "vocab", front: "さがります", reading: "sagarimasu", meaning: "to fall, to go down", example: { jp: "よるになるときおんがさがるので、うわぎがいります。", en: "The temperature drops at night, so you'll want a jacket." }, accept: ["to drop", "goes down", "to step back"], hint: "The mirror of あがります. On a platform, さがってください means 'please step back' — the same verb pointing at you." },
      ],
    },
    {
      id: "ja-u142l3",
      unit: 142,
      lesson: 3,
      title: "Left behind, dropped, spilt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say something was left, fell or spilt — and whether you were the cause: のこります・のこします, おちます・おとします, こぼれます・こぼします.",
      items: [
        { id: "ja-u142l3-nokorimasu", type: "vocab", front: "のこります", reading: "nokorimasu", meaning: "to remain, to be left", example: { jp: "りょうりがたくさんのこったので、あしたたべます。", en: "A lot of the food was left over, so I'll eat it tomorrow." }, accept: ["is left over", "stays behind", "remains"], hint: "のこります also means staying late: かいしゃにのこってしごとをする. The thing (or person) simply stays." },
        { id: "ja-u142l3-nokoshimasu", type: "vocab", front: "のこします", reading: "nokoshimasu", meaning: "to leave (something) behind", example: { jp: "おなかがいっぱいだったので、はんぶんのこしました。", en: "I was full, so I left half of it." }, accept: ["to save (for later)", "to leave over", "leaves behind"], hint: "Transitive のこります. Leaving food in Japan is worth a word of apology — のこしてすみません." },
        { id: "ja-u142l3-ochimasu", type: "vocab", front: "おちます", reading: "ochimasu", meaning: "to fall, to drop", example: { jp: "かぜがつよくて、たなのほんがおちました。", en: "The wind was strong and the books fell off the shelf." }, accept: ["falls", "comes off", "to fail (an exam)"], hint: "Also 'to fail': しけんにおちる. And しみがおちる = the stain comes out — anything that leaves a surface." },
        { id: "ja-u142l3-otoshimasu", type: "vocab", front: "おとします", reading: "otoshimasu", meaning: "to drop (something)", example: { jp: "さいふをおとしてしまったので、こうばんへいきました。", en: "I dropped my wallet, so I went to the police box." }, accept: ["to let fall", "to lose", "drops"], hint: "The transitive おちます, and the verb for losing something by dropping it. おとしもの = lost property." },
        { id: "ja-u142l3-koboremasu", type: "vocab", front: "こぼれます", reading: "koboremasu", meaning: "to spill (by itself)", example: { jp: "コップがいっぱいで、みずがこぼれそうです。", en: "The glass is full — the water looks like it'll spill." }, accept: ["overflows", "runs over", "spills"], hint: "The water does it. Add そうです (u44) and you get the warning you'd actually shout." },
        { id: "ja-u142l3-koboshimasu", type: "vocab", front: "こぼします", reading: "koboshimasu", meaning: "to spill (something)", example: { jp: "あわててコーヒーをこぼしてしまいました。", en: "I rushed and ended up spilling my coffee." }, accept: ["to knock over", "to slop", "spills"], hint: "Transitive こぼれます, and it pairs almost automatically with てしまいました — spilling is always an accident." },
      ],
    },
    {
      id: "ja-u142l4",
      unit: 142,
      lesson: 4,
      title: "Torn, come off, dried out",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about things coming apart or drying: やぶります, はずれます・はずします, ぬけます, かわきます・かわかします.",
      items: [
        { id: "ja-u142l4-yaburimasu", type: "vocab", front: "やぶります", reading: "yaburimasu", meaning: "to tear, to break (a rule)", example: { jp: "いらないてがみだったので、やぶってすてました。", en: "It was a letter I didn't need, so I tore it up and threw it away." }, accept: ["to rip", "to violate", "tears"], hint: "Paper and promises take the same verb: かみをやぶる, やくそくをやぶる. Its intransitive partner やぶれます you already have." },
        { id: "ja-u142l4-hazuremasu", type: "vocab", front: "はずれます", reading: "hazuremasu", meaning: "to come off, to miss", example: { jp: "ボタンがはずれていますよ。しめたほうがいいです。", en: "Your button has come undone — you should do it up." }, accept: ["comes loose", "falls off", "to be wrong"], hint: "Also 'to miss the mark': よそうがはずれる = the prediction was wrong. Anything that leaves the place it should be in." },
        { id: "ja-u142l4-hazushimasu", type: "vocab", front: "はずします", reading: "hazushimasu", meaning: "to take off, to remove", example: { jp: "へやにはいったら、ぼうしをはずしてください。", en: "Please take your hat off when you come into the room." }, accept: ["to detach", "to step away", "removes"], hint: "The transitive はずれます. せきをはずしております ('he has stepped away from his desk') is the phrase you'll hear on every business phone call." },
        { id: "ja-u142l4-nukemasu", type: "vocab", front: "ぬけます", reading: "nukemasu", meaning: "to come out, to fall out", example: { jp: "としをとると、かみのけがぬけやすくなります。", en: "As you get older, your hair falls out more easily." }, accept: ["slips out", "escapes", "to be missing"], hint: "Hair, teeth, air from a tyre, and names missing from a list all ぬける — something that was in place is now gone." },
        { id: "ja-u142l4-kawakimasu", type: "vocab", front: "かわきます", reading: "kawakimasu", meaning: "to dry, to get dry", example: { jp: "いいてんきなので、せんたくものがすぐかわきます。", en: "The weather is good, so the washing dries quickly." }, accept: ["dries out", "becomes dry", "to be thirsty"], hint: "のどがかわく ('be thirsty' — literally 'my throat dries') is the same verb, and the one you'll need first." },
        { id: "ja-u142l4-kawakashimasu", type: "vocab", front: "かわかします", reading: "kawakashimasu", meaning: "to dry (something)", example: { jp: "あめでぬれたので、かみをかわかしてから、でかけます。", en: "I got wet in the rain, so I'll dry my hair before going out." }, accept: ["to air", "to dry out", "dries"], hint: "Transitive かわきます — again with し in the middle. Compare ほします (hang out to dry), which is about putting it in the sun." },
      ],
    },
  ],
};
