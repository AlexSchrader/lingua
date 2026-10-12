// Unit 22 — かつどう ("Daily activities") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// ─────────────────────────────────────────────────────────────────────────────
// This is the FIRST A2 unit and is intentionally NOT registered in index.js — it is
// NOT seeded, NOT on the Ladder, and does NOT affect A1. A2 is being built ahead of
// time but stays off the app until A1 is native-reviewed and signed off. To activate
// (once A1 is clean): import it in src/data/index.js and add UNIT22 to the UNITS
// array — then it joins the normal gate. Until then, validate it in isolation with a
// node one-liner that runs validateContent over [...A1 units, UNIT22].
// ─────────────────────────────────────────────────────────────────────────────
// N4 everyday verbs, grouped by theme. Modeled like A1 verbs (vocab items, the ～ます
// form as the headword). Every example uses only A1 vocab + A1 grammar (を/に/で/と/
// まで + です/ます), so it slots directly on top of a finished A1.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT22 = {
  id: "ja-u22",
  lang: "ja",
  title: "かつどう",
  order: 22,
  stage: "a2",
  lessons: [
    // Lesson 1: getting around
    {
      id: "ja-u22l1",
      unit: 22,
      lesson: 1,
      title: "Getting around",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about moving around: あるきます はしります およぎます のぼります わたります とまります.",
      items: [
        { id: "ja-u22l1-arukimasu", type: "vocab", front: "あるきます", reading: "arukimasu", meaning: "walk", example: { jp: "まいにち、あるきます。", en: "I walk every day." }, drill: { jp: "えきまであるきます。", en: "I walk to the station." }, accept: ["to walk", "walks", "go on foot"], hint: "a-ru-ki-MA-su — five beats, tapped r. Dictionary form あるく. ⚠️ The route walked takes を — こうえんをあるきます, walk THROUGH the park — because を marks the ground covered, not an object. あるいて means on foot." },
        { id: "ja-u22l1-hashirimasu", type: "vocab", front: "はしります", reading: "hashirimasu", meaning: "run", example: { jp: "こうえんをはしります。", en: "I run in the park." }, drill: { jp: "いぬとはしります。", en: "I run with the dog." }, accept: ["to run", "runs", "go fast"], hint: "ha-shi-ri-MA-su — six beats, tapped r. Dictionary form はしる. ⚠️ Takes を for the route, like あるきます. ⚠️ It is also what a train or a car does — くるまがはしる is the car is running along." },
        { id: "ja-u22l1-oyogimasu", type: "vocab", front: "およぎます", reading: "oyogimasu", meaning: "swim", example: { jp: "プールでおよぎます。", en: "I swim in the pool." }, drill: { jp: "なつにおよぎます。", en: "I swim in summer." }, accept: ["to swim", "swims", "go swimming"], hint: "o-yo-gi-MA-su — five beats, hard g. Dictionary form およぐ. ⚠️ The water takes で, the place of the action — プールでおよぎます. A swimsuit is a みずぎ, a water-garment." },
        { id: "ja-u22l1-noborimasu", type: "vocab", front: "のぼります", reading: "noborimasu", meaning: "climb", example: { jp: "やまにのぼります。", en: "I climb the mountain." }, drill: { jp: "たかいやまにのぼります。", en: "I climb a high mountain." }, accept: ["to climb", "go up", "climbs"], hint: "no-bo-ri-MA-su — six beats, tapped r. Dictionary form のぼる. ⚠️ The thing climbed takes に, not を — やまにのぼります. ⚠️ It also covers the sun RISING: ひがのぼる. Going down is おります or くだります." },
        { id: "ja-u22l1-watarimasu", type: "vocab", front: "わたります", reading: "watarimasu", meaning: "cross", example: { jp: "はしをわたります。", en: "I cross the bridge." }, drill: { jp: "ふたりではしをわたります。", en: "The two of us cross the bridge." }, accept: ["to cross", "go across", "crosses"], hint: "wa-ta-ri-MA-su — six beats, tapped r. Dictionary form わたる. ⚠️ The thing crossed takes を — はしをわたります. ⚠️ Not わたし, I. ⚠️ And はし here is the bridge, not the chopsticks you met in u2." },
        { id: "ja-u22l1-tomarimasu", type: "vocab", front: "とまります", reading: "tomarimasu", meaning: "stay", example: { jp: "ホテルにとまります。", en: "I stay at a hotel." }, drill: { jp: "ともだちのいえにとまります。", en: "I stay at my friend's house." }, accept: ["to stay", "stop", "stays"], hint: "to-ma-ri-MA-su — six beats, tapped r. Dictionary form とまる. 🚨 TWO MEANINGS, SAME KANA: to stay the night (ホテルにとまります) and to come to a stop (でんしゃがとまります). Different kanji, 泊 and 止, and only the context tells you." },
      ],
    },
    // Lesson 2: chores at home
    {
      id: "ja-u22l2",
      unit: 22,
      lesson: 2,
      title: "Chores at home",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Do the housework: そうじします せんたくします あらいます かたづけます すてます なおします.",
      items: [
        { id: "ja-u22l2-sojishimasu", type: "vocab", front: "そうじします", reading: "sōjishimasu", meaning: "clean", example: { jp: "へやをそうじします。", en: "I clean the room." }, drill: { jp: "だいどころをそうじします。", en: "I clean the kitchen." }, accept: ["to clean", "tidy", "cleans"], hint: "SOH-ji-shi-ma-su — six beats: so-o-ji-shi-ma-su. そうじ is a NOUN plus します, so you can also say そうじをします with を — both are right. School cleaning time, done by the pupils, is おそうじ." },
        { id: "ja-u22l2-sentakushimasu", type: "vocab", front: "せんたくします", reading: "sentakushimasu", meaning: "do laundry", example: { jp: "まいにちせんたくします。", en: "I do laundry every day." }, drill: { jp: "どようびにせんたくします。", en: "I do the laundry on Saturday." }, accept: ["to do the washing", "wash clothes", "launder"], hint: "sen-ta-ku-shi-MA-su — seven beats. せんたく, laundry, plus します. ⚠️ Clothes only — washing a car or your hands is あらいます, the next card. A washing machine is a せんたくき." },
        { id: "ja-u22l2-araimasu", type: "vocab", front: "あらいます", reading: "araimasu", meaning: "wash", example: { jp: "くるまをあらいます。", en: "I wash the car." }, drill: { jp: "てをあらいます。", en: "I wash my hands." }, accept: ["to wash", "washes", "rinse"], hint: "a-ra-i-MA-su — five beats, tapped r. Dictionary form あらう. ⚠️ Hands, dishes, cars — anything but clothes, which take せんたくします. The thing washed takes を." },
        { id: "ja-u22l2-katazukemasu", type: "vocab", front: "かたづけます", reading: "katazukemasu", meaning: "tidy up", example: { jp: "へやをかたづけます。", en: "I tidy up the room." }, drill: { jp: "ノートをかたづけます。", en: "I put the notebook away." }, accept: ["to tidy", "put away", "clear up"], hint: "ka-ta-zu-ke-MA-su — six beats, ず buzzed. Dictionary form かたづける. ⚠️ It means putting things BACK where they belong, so it is narrower than そうじします, which is cleaning dirt. Note the づ, not ず — one of the few words that keeps it." },
        { id: "ja-u22l2-sutemasu", type: "vocab", front: "すてます", reading: "sutemasu", meaning: "throw away", example: { jp: "ふるいものをすてます。", en: "I throw away old things." }, drill: { jp: "ふるいくつをすてます。", en: "I throw away old shoes." }, accept: ["to throw out", "discard", "dispose of"], hint: "su-te-MA-su — four beats. Dictionary form すてる. ⚠️ Japan sorts its rubbish hard, so すてます usually comes with a category — もえるごみ, burnable. ⚠️ Not すみます, to live, from u20." },
        { id: "ja-u22l2-naoshimasu", type: "vocab", front: "なおします", reading: "naoshimasu", meaning: "fix", example: { jp: "くるまをなおします。", en: "I fix the car." }, drill: { jp: "とけいをなおします。", en: "I fix the clock." }, accept: ["to repair", "mend", "correct"], hint: "na-o-shi-MA-su — five beats. Dictionary form なおす. ⚠️ It also means to CORRECT — まちがいをなおします, fix a mistake — and なおります, the intransitive partner, is what an illness does when you get better." },
      ],
    },
    // Lesson 3: dealing with people
    {
      id: "ja-u22l3",
      unit: 22,
      lesson: 3,
      title: "With other people",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Interact with people: おくります こたえます てつだいます さがします おしえます ならびます.",
      items: [
        { id: "ja-u22l3-okurimasu", type: "vocab", front: "おくります", reading: "okurimasu", meaning: "send", example: { jp: "てがみをおくります。", en: "I send a letter." }, drill: { jp: "ともだちにきってをおくります。", en: "I send my friend a stamp." }, accept: ["to send", "see off", "sends"], hint: "o-ku-ri-MA-su — six beats, tapped r. Dictionary form おくる. ⚠️ The recipient takes に, the thing を. ⚠️ A SECOND おくります means to see someone off — えきまでおくります, walk them to the station." },
        { id: "ja-u22l3-kotaemasu", type: "vocab", front: "こたえます", reading: "kotaemasu", meaning: "answer", example: { jp: "せんせいにこたえます。", en: "I answer the teacher." }, drill: { jp: "でんわにこたえます。", en: "I answer the phone." }, accept: ["to answer", "reply", "respond"], hint: "ko-ta-e-MA-su — five beats, the え sounded on its own. Dictionary form こたえる. ⚠️ THE THING ANSWERED TAKES に, not を — せんせいにこたえます. The noun こたえ is an answer, and it is what a test asks for." },
        { id: "ja-u22l3-tetsudaimasu", type: "vocab", front: "てつだいます", reading: "tetsudaimasu", meaning: "help", example: { jp: "ともだちをてつだいます。", en: "I help my friend." }, drill: { jp: "ははをてつだいます。", en: "I help my mother." }, accept: ["to help", "assist", "helps", "give a hand"], hint: "te-tsu-da-i-MA-su — six beats, つ is tsu. Dictionary form てつだう. ⚠️ It is helping with a TASK and takes を. For rescuing someone Japanese uses たすけます, and the two are not swappable." },
        { id: "ja-u22l3-sagashimasu", type: "vocab", front: "さがします", reading: "sagashimasu", meaning: "look for", example: { jp: "かぎをさがします。", en: "I look for the key." }, drill: { jp: "みせでくつをさがします。", en: "I look for shoes in the shop." }, accept: ["to search", "search for", "seek"], hint: "sa-ga-shi-MA-su — six beats, hard g. Dictionary form さがす. ⚠️ It is the SEARCHING, not the finding — finding is みつけます. So かぎをさがしました says you looked, not that you got it back." },
        { id: "ja-u22l3-oshiemasu", type: "vocab", front: "おしえます", reading: "oshiemasu", meaning: "teach", example: { jp: "えいごをおしえます。", en: "I teach English." }, drill: { jp: "がっこうでおしえます。", en: "I teach at school." }, accept: ["to teach", "tell", "show"], hint: "o-shi-e-MA-su — five beats. Dictionary form おしえる. ⚠️ It ALSO means to tell someone a fact — なまえをおしえてください is please tell me your name, not teach me it. The person taught takes に." },
        { id: "ja-u22l3-narabimasu", type: "vocab", front: "ならびます", reading: "narabimasu", meaning: "line up", example: { jp: "みせのまえにならびます。", en: "I line up in front of the shop." }, drill: { jp: "えきでならびます。", en: "I queue at the station." }, accept: ["to queue", "stand in line", "form a line", "queue up"], hint: "na-ra-bi-MA-su — six beats, tapped r. Dictionary form ならぶ. ⚠️ This is the one that happens by itself — you line UP. Putting things in a row is ならべます, and the pair あらわす/あらわれる works the same way." },
      ],
    },
    // Lesson 4: free time
    {
      id: "ja-u22l4",
      unit: 22,
      lesson: 4,
      title: "Free time",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about leisure: うたいます おどります りょこうします とります あつめます いそぎます.",
      items: [
        { id: "ja-u22l4-utaimasu", type: "vocab", front: "うたいます", reading: "utaimasu", meaning: "sing", example: { jp: "みんなでうたいます。", en: "We all sing together." }, drill: { jp: "クラスでうたいます。", en: "We sing in class." }, accept: ["to sing", "sings", "sing a song"], hint: "u-ta-i-MA-su — five beats. Dictionary form うたう. ⚠️ The noun うた is a song, so うたをうたいます, sing a song, repeats the word on purpose and is perfectly normal Japanese. Karaoke is カラオケ." },
        { id: "ja-u22l4-odorimasu", type: "vocab", front: "おどります", reading: "odorimasu", meaning: "dance (to dance)", example: { jp: "ともだちとおどります。", en: "I dance with a friend." }, drill: { jp: "おんがくでおどります。", en: "I dance to music." }, accept: ["to dance", "dances", "do a dance"], hint: "o-do-ri-MA-su — five beats, tapped r. Dictionary form おどる. ⚠️ The native verb; ダンスをします, from u6, is the borrowed way to say the same thing. The noun おどり is a traditional dance." },
        { id: "ja-u22l4-ryokoshimasu", type: "vocab", front: "りょこうします", reading: "ryokōshimasu", meaning: "travel", example: { jp: "にほんをりょこうします。", en: "I travel around Japan." }, drill: { jp: "かぞくとりょこうします。", en: "I travel with my family." }, accept: ["to travel", "take a trip", "tour"], hint: "ryo-KOH-shi-ma-su — seven beats: ryo-ko-o-shi-ma-su, りょ a single sound. りょこう, a trip, plus します. ⚠️ The destination takes を for travelling AROUND somewhere, に for going there. A traveller is a りょこうしゃ." },
        { id: "ja-u22l4-torimasu", type: "vocab", front: "とります", reading: "torimasu", meaning: "take", example: { jp: "メモをとります。", en: "I take a memo." }, drill: { jp: "ほんをとります。", en: "I take the book." }, accept: ["to take", "take (a photo)", "takes"], hint: "to-ri-MA-su — four beats, tapped r. Dictionary form とる. 🚨 ITS JOBS ARE MANY: take an object, take a PHOTO (しゃしんをとる), take notes, take a holiday, even to catch a cold's reading. ⚠️ Not とまります from Lesson 1." },
        { id: "ja-u22l4-atsumemasu", type: "vocab", front: "あつめます", reading: "atsumemasu", meaning: "collect", example: { jp: "コインをあつめます。", en: "I collect coins." }, drill: { jp: "きってをあつめます。", en: "I collect stamps." }, accept: ["to collect", "gather", "collects"], hint: "a-tsu-me-MA-su — five beats, つ is tsu. Dictionary form あつめる. ⚠️ This is the one YOU do, so it takes を. People gathering by themselves is あつまります — ひとがあつまります, a crowd forms." },
        { id: "ja-u22l4-isogimasu", type: "vocab", front: "いそぎます", reading: "isogimasu", meaning: "hurry", example: { jp: "えきまでいそぎます。", en: "I hurry to the station." }, drill: { jp: "あさはいそぎます。", en: "I'm in a hurry in the morning." }, accept: ["to hurry", "rush", "hurries"], hint: "i-so-gi-MA-su — five beats, hard g. Dictionary form いそぐ. ⚠️ It is the adjective いそがしい's verb cousin, from u21 — いそがしい is being busy, いそぎます is rushing. いそいで！ is hurry up!" },
      ],
    },
  ],
};
