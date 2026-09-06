// JA Unit 152 — ごい・N3・11 (たびとみち — travel and getting around) — B1 / JLPT N3
// Strand D, coverage 11 of 14. A1/A2 covered えき, きっぷ, ちかてつ and the basic verbs.
// This unit is the layer above: the words printed on the signs and said over the tannoy,
// which a learner needs before any of the polite conversation they've studied is any use —
// かいさつ, しゅうでん, せいさんき, まどがわ, とうじょう.
// Deliberately kept to rail, air, streets and lodging so it does not overlap the
// u129 environment slot or the u116 change-over-time slot being written in parallel.
export const UNIT152 = {
  id: "ja-u152",
  lang: "ja",
  title: "ごい・N3・11",
  order: 152,
  stage: "b1",
  lessons: [
    {
      id: "ja-u152l1",
      unit: 152,
      lesson: 1,
      title: "At the station",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle a Japanese station without English signs: かいさつ, しはつ, しゅうでん, ていきけん, せいさんき, じこくひょう.",
      items: [
        { id: "ja-u152l1-kaisatsu", type: "vocab", front: "かいさつ", reading: "kaisatsu", meaning: "ticket gate", example: { jp: "かいさつのまえでまちあわせましょう。", en: "Let's meet in front of the ticket gate." }, accept: ["ticket barrier", "gates", "turnstile"], hint: "The standard meeting point in any Japanese station, so it doubles as an address: きたぐちのかいさつ." },
        { id: "ja-u152l1-shihatsu", type: "vocab", front: "しはつ", reading: "shihatsu", meaning: "first train of the day", example: { jp: "しはつにのれば、あさのかいぎにまにあいます。", en: "If I take the first train, I'll make the morning meeting." }, accept: ["first departure", "earliest train"], hint: "し (start) + はつ (departure). Its opposite しゅうでん is the last train — the two words that shape a Japanese night out." },
        { id: "ja-u152l1-shuden", type: "vocab", front: "しゅうでん", reading: "shūden", meaning: "last train of the night", example: { jp: "しゅうでんにまにあわなかったので、タクシーでかえりました。", en: "I didn't make the last train, so I went home by taxi." }, accept: ["final train", "last service"], hint: "しゅう (end) + でん (train). しゅうでんまでに is an implicit deadline in every evening conversation in Japan." },
        { id: "ja-u152l1-teikiken", type: "vocab", front: "ていきけん", reading: "teikiken", meaning: "commuter pass", example: { jp: "ていきけんがあれば、まいにちきっぷをかわなくていいです。", en: "With a commuter pass, you don't have to buy a ticket every day." }, accept: ["season ticket", "travel pass"], hint: "ていき (fixed period) + けん (ticket). ～けん is the suffix for any ticket or voucher: にゅうじょうけん, わりびきけん." },
        { id: "ja-u152l1-seisanki", type: "vocab", front: "せいさんき", reading: "seisanki", meaning: "fare adjustment machine", example: { jp: "きっぷがたりないときは、せいさんきをつかってください。", en: "If your ticket is short, please use the fare adjustment machine." }, accept: ["fare settlement machine", "top-up machine"], hint: "Near the gates, for when you travelled further than your ticket covers. Knowing this word turns a small panic into a thirty-second job." },
        { id: "ja-u152l1-jikokuhyo", type: "vocab", front: "じこくひょう", reading: "jikokuhyō", meaning: "timetable", example: { jp: "じこくひょうをみたら、つぎのでんしゃは20ぷんあとでした。", en: "I checked the timetable and the next train was twenty minutes later." }, accept: ["schedule", "departure board"], hint: "じこく (time of day) + ひょう (table). ～ひょう is the suffix for any table or chart." },
      ],
    },
    {
      id: "ja-u152l2",
      unit: 152,
      lesson: 2,
      title: "Seats and flying",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Book a seat and follow an airport announcement: ざせき, まどがわ, つうろがわ, とうじょう, りりく, ちゃくりく.",
      items: [
        { id: "ja-u152l2-zaseki", type: "vocab", front: "ざせき", reading: "zaseki", meaning: "seat (assigned)", example: { jp: "ざせきはまどのちかくがいいです。", en: "I'd like a seat near the window." }, accept: ["assigned seat", "place to sit"], hint: "The formal word on tickets and signs. いす is the physical chair; ざせき is the seat as an allocation." },
        { id: "ja-u152l2-madogawa", type: "vocab", front: "まどがわ", reading: "madogawa", meaning: "window side", example: { jp: "まどがわのせきだったので、そとがよくみえました。", en: "It was a window seat, so I could see outside well." }, accept: ["window seat", "by the window"], hint: "まど (window) + がわ (side). The ～がわ suffix is everywhere: みぎがわ, ひだりがわ, あちらがわ." },
        { id: "ja-u152l2-tsurogawa", type: "vocab", front: "つうろがわ", reading: "tsūrogawa", meaning: "aisle side", example: { jp: "つうろがわのほうが、たちやすいのですきです。", en: "I prefer the aisle side because it's easier to get up." }, accept: ["aisle seat", "by the aisle"], hint: "つうろ (passage) + がわ. The pair of questions at every check-in desk: まどがわとつうろがわ、どちらがよろしいですか." },
        { id: "ja-u152l2-tojo", type: "vocab", front: "とうじょう", reading: "tōjō", meaning: "boarding", example: { jp: "とうじょうは30ぷんまえからはじまります。", en: "Boarding starts thirty minutes beforehand." }, accept: ["to board", "getting on (a plane)"], hint: "Boarding a plane or ship specifically — a train is just のります. とうじょうけん is your boarding pass." },
        { id: "ja-u152l2-ririku", type: "vocab", front: "りりく", reading: "ririku", meaning: "takeoff", example: { jp: "りりくのまえに、シートベルトをしめてください。", en: "Please fasten your seatbelt before takeoff." }, accept: ["taking off", "lift-off"], hint: "り (leave) + りく (land) — leaving the ground. Its mirror ちゃくりく is arriving at it." },
        { id: "ja-u152l2-chakuriku", type: "vocab", front: "ちゃくりく", reading: "chakuriku", meaning: "landing", example: { jp: "ちゃくりくしてから、けいたいをつかってもいいです。", en: "You may use your phone after landing." }, drill: { jp: "ちゃくりくをまちます。", en: "I wait for the landing." }, accept: ["touching down", "to land"], hint: "ちゃく (arrive) + りく (land). The same ちゃく as とうちゃく (arrival) — one element, two useful words." },
      ],
    },
    {
      id: "ja-u152l3",
      unit: 152,
      lesson: 3,
      title: "On foot",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Give and follow walking directions: とほ, ちかみち, とおまわり, まがりかど, おうだんほどう, ほどうきょう.",
      items: [
        { id: "ja-u152l3-toho", type: "vocab", front: "とほ", reading: "toho", meaning: "on foot", example: { jp: "えきからとほ5ふんなので、あるいていきます。", en: "It's five minutes on foot from the station, so I'll walk." }, drill: { jp: "とほでいきます。", en: "I go on foot." }, accept: ["walking (distance)", "by foot"], hint: "とほ5ふん is on every rental listing and restaurant page in Japan — the standard way of stating distance." },
        { id: "ja-u152l3-chikamichi", type: "vocab", front: "ちかみち", reading: "chikamichi", meaning: "shortcut", example: { jp: "ちかみちをとおったので、はやくつきました。", en: "I took a shortcut, so I arrived early." }, accept: ["short way", "quicker route"], hint: "ちかい (near) + みち (road). Also figurative: べんきょうにちかみちはない — there's no shortcut to learning." },
        { id: "ja-u152l3-tomawari", type: "vocab", front: "とおまわり", reading: "tōmawari", meaning: "detour, the long way round", example: { jp: "じこがあったので、とおまわりしなければなりませんでした。", en: "There had been an accident, so we had to go the long way round." }, accept: ["roundabout route", "going the long way"], hint: "とおい (far) + まわる (go around). The opposite of ちかみち, and the two are usually mentioned together." },
        { id: "ja-u152l3-magarikado", type: "vocab", front: "まがりかど", reading: "magarikado", meaning: "corner (in a road)", example: { jp: "つぎのまがりかどをみぎにまがってください。", en: "Please turn right at the next corner." }, drill: { jp: "まがりかどをまがります。", en: "I turn at the corner." }, accept: ["turning", "street corner", "bend"], hint: "まがる (turn) + かど (corner). Also a turning point in life: じんせいのまがりかど." },
        { id: "ja-u152l3-odanhodo", type: "vocab", front: "おうだんほどう", reading: "ōdanhodō", meaning: "pedestrian crossing", example: { jp: "おうだんほどうをわたるまえに、みぎとひだりをみましょう。", en: "Before crossing at the crossing, look right and left." }, accept: ["zebra crossing", "crosswalk"], hint: "おうだん (crossing over) + ほどう (footpath). Long, but it's on every road-safety sign in the country." },
        { id: "ja-u152l3-hodokyo", type: "vocab", front: "ほどうきょう", reading: "hodōkyō", meaning: "pedestrian bridge", example: { jp: "くるまがおおいみちには、ほどうきょうがあります。", en: "On roads with a lot of traffic there are pedestrian bridges." }, accept: ["footbridge", "overpass for walkers"], hint: "ほどう (footpath) + きょう (bridge). Shares ほどう with おうだんほどう — one element, both words." },
      ],
    },
    {
      id: "ja-u152l4",
      unit: 152,
      lesson: 4,
      title: "Staying somewhere",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Check in and manage your things: みんしゅく, フロント, てにもつ, ロッカー, りょうがえ, ガイドブック.",
      items: [
        { id: "ja-u152l4-minshuku", type: "vocab", front: "みんしゅく", reading: "minshuku", meaning: "family-run guesthouse", example: { jp: "ホテルよりやすいので、みんしゅくにとまりました。", en: "It's cheaper than a hotel, so we stayed at a guesthouse." }, drill: { jp: "みんしゅくにとまりました。", en: "I stayed at a guesthouse." }, accept: ["B&B", "guest house", "homestay inn"], hint: "A private home taking guests — cheaper and more personal than a りょかん, and usually including two home-cooked meals." },
        { id: "ja-u152l4-furonto", type: "vocab", front: "フロント", reading: "furonto", meaning: "hotel reception desk", example: { jp: "フロントできいたら、みちをおしえてくれました。", en: "I asked at reception and they showed me the way." }, accept: ["front desk", "reception"], hint: "A loanword narrowed to one meaning: only a hotel's front desk, never 'the front' of anything else." },
        { id: "ja-u152l4-tenimotsu", type: "vocab", front: "てにもつ", reading: "tenimotsu", meaning: "hand luggage", example: { jp: "てにもつがおおいと、でんしゃでつかれます。", en: "If you have a lot of hand luggage, the train is tiring." }, accept: ["carry-on", "baggage you carry", "belongings"], hint: "て (hand) + にもつ (luggage) — the bag you keep with you, as opposed to what you check in." },
        { id: "ja-u152l4-rokka", type: "vocab", front: "ロッカー", reading: "rokkā", meaning: "coin locker", example: { jp: "えきのロッカーににもつをいれて、まちをあるきました。", en: "I put my luggage in a station locker and walked around the town." }, accept: ["storage locker", "left luggage"], hint: "コインロッカー in full. Almost every Japanese station has a bank of them, and knowing the word makes a day trip much lighter." },
        { id: "ja-u152l4-ryogae", type: "vocab", front: "りょうがえ", reading: "ryōgae", meaning: "currency exchange", example: { jp: "くうこうでりょうがえしましたが、レートがよくなかったです。", en: "I exchanged money at the airport, but the rate wasn't good." }, drill: { jp: "りょうがえをしました。", en: "I exchanged currency." }, accept: ["changing money", "money exchange"], hint: "りょう (an old word for money) + かえる (change), with the か voicing to が. Also 'breaking a note into coins'." },
        { id: "ja-u152l4-gaidobukku", type: "vocab", front: "ガイドブック", reading: "gaidobukku", meaning: "guidebook", example: { jp: "ガイドブックにのっていないみせのほうが、おもしろいです。", en: "The shops that aren't in the guidebook are more interesting." }, accept: ["travel guide", "guide book"], hint: "Straight from English. ガイド alone is the human guide; ガイドブック is the book." },
      ],
    },
  ],
};
