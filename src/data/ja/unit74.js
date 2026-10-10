// Unit 74 — りょこう・こうつう ("Travel & transport") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 travel, transport & places vocab NOT already taught. Modeled like the other
// A2 units: vocab items whose example sentences use only previously-introduced
// vocab + A1 grammar (を/に/で/へ/と/です/ます).
// (This header used to say the unit was "Not registered in index.js until A1 is
// native-reviewed and signed off". BOTH halves were false: it IS registered and
// shipping, and CLAUDE.md (Alex, 2026-07-12) makes a human native review a
// nice-to-have, not a gate. Corrected 2026-10-10.)
// NATURALNESS: checked by the LLM naturalness review (content-auditor) plus Alex's
// Dev-Mode playtest.
// DRILL SHAPE: every drill leads with its own front + a core particle, which is what
// ja sentenceTokens tiles. `practice()` REPLACES the example, so any other shape
// would strip sentence:build off an item whose example had it.
export const UNIT74 = {
  id: "ja-u74",
  lang: "ja",
  title: "りょこう・こうつう・N4",
  order: 74,
  stage: "a2",
  lessons: [
    // Lesson 1: trains & tickets
    {
      id: "ja-u74l1",
      unit: 74,
      lesson: 1,
      title: "Trains & tickets",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Buy tickets and pick trains: かたみち おうふく していせき じゆうせき きゅうこう とっきゅう.",
      items: [
        { id: "ja-u74l1-katamichi", type: "vocab", front: "かたみち", reading: "katamichi", meaning: "one-way trip", example: { jp: "かたみちのきっぷをかいます。", en: "I buy a one-way ticket." }, drill: { jp: "かたみちでいきます。", en: "I go one way." }, accept: ["one way", "one-way", "a single", "single journey"], hint: "katamichi — かた (one side) + みち (road, u24): one side of the road only. Its opposite おうふく is the next card. At a ticket machine you choose between exactly these two words." },
        { id: "ja-u74l1-ofuku", type: "vocab", front: "おうふく", reading: "ōfuku", meaning: "round trip", example: { jp: "おうふくでおねがいします。", en: "Round trip, please." }, drill: { jp: "おうふくはべんりです。", en: "A round trip is convenient." }, accept: ["return trip", "round-trip", "a return", "there and back"], hint: "ōfuku — おう (go) + ふく (come back): going and returning. Long ō at the start: ō-fuku. The counterpart of かたみち on the card before, and usually a little cheaper than two singles." },
        { id: "ja-u74l1-shiteiseki", type: "vocab", front: "していせき", reading: "shiteiseki", meaning: "reserved seat", example: { jp: "していせきにすわります。", en: "I sit in the reserved seat." }, drill: { jp: "していせきはしずかです。", en: "The reserved seats are quiet." }, accept: ["reserved seating", "assigned seat", "a booked seat", "allocated seat"], hint: "shiteiseki — してい (designated) + せき (seat): a seat with your number on it. Its opposite じゆうせき is the next card, built on じゆう (freedom) from u49 — free seating, not free of charge." },
        { id: "ja-u74l1-jiyuseki", type: "vocab", front: "じゆうせき", reading: "jiyūseki", meaning: "unreserved seat", example: { jp: "じゆうせきをさがします。", en: "I look for an unreserved seat." }, drill: { jp: "じゆうせきがこみます。", en: "The unreserved seats get crowded." }, accept: ["non-reserved seat", "open seat", "free seating", "sit anywhere"], hint: "jiyūseki — じゆう (free, u49) + せき (seat): sit where you like. Long ū: ji-yū-seki. ⚠️ 'Free' means unallocated, NOT free of charge — you still pay, you just queue for a seat." },
        { id: "ja-u74l1-kyuko", type: "vocab", front: "きゅうこう", reading: "kyūkō", meaning: "express train", example: { jp: "きゅうこうにのります。", en: "I take the express." }, drill: { jp: "きゅうこうがえきにきます。", en: "The express comes into the station." }, accept: ["express", "express service", "a fast train", "limited-stop train"], hint: "kyūkō — きゅう (hurry) + こう (go). Long ō: kyū-kō. It skips small stations. One rung faster again is とっきゅう on the next card, and Japanese timetables stack several of these grades." },
        { id: "ja-u74l1-tokkyu", type: "vocab", front: "とっきゅう", reading: "tokkyū", meaning: "limited express", example: { jp: "とっきゅうははやいです。", en: "The limited express is fast." }, drill: { jp: "とっきゅうでうみへいきます。", en: "I go to the sea by limited express." }, accept: ["limited express train", "super express", "the fastest service", "premium express"], hint: "tokkyū — とく (special) + きゅう, the same きゅう as きゅうこう on the card before, with the く colliding into っき: tok-kyū. Faster, fewer stops, and it charges an extra とっきゅうけん fee." },
      ],
    },
    // Lesson 2: cars & roads
    {
      id: "ja-u74l2",
      unit: 74,
      lesson: 2,
      title: "Cars & roads",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about driving and traffic: うんてん じゅうたい うんちん ガソリン じこ つうきん.",
      items: [
        { id: "ja-u74l2-unten", type: "vocab", front: "うんてん", reading: "unten", meaning: "driving", example: { jp: "くるまをうんてんします。", en: "I drive a car." }, drill: { jp: "うんてんはむずかしいです。", en: "Driving is difficult." }, accept: ["operating (a car)", "to drive", "being at the wheel", "motoring"], hint: "unten — うん (move) + てん (turn): making a machine run, so it covers driving a car AND operating a train. The driver is うんてんしゅ. Short vowels: un-ten." },
        { id: "ja-u74l2-jutai", type: "vocab", front: "じゅうたい", reading: "jūtai", meaning: "traffic jam", example: { jp: "みちがじゅうたいです。", en: "The road is jammed." }, drill: { jp: "じゅうたいがおおいです。", en: "There are a lot of traffic jams." }, accept: ["congestion", "traffic congestion", "a tailback", "gridlock"], hint: "jūtai — じゅう (heavy) + たい (stagnate): heavy and not moving. Long ū: jū-tai. Japanese says the ROAD is じゅうたい, where English says there is a jam on it." },
        { id: "ja-u74l2-unchin", type: "vocab", front: "うんちん", reading: "unchin", meaning: "fare", example: { jp: "でんしゃのうんちんをはらいます。", en: "I pay the train fare." }, drill: { jp: "うんちんをしらべます。", en: "I look up the fare." }, accept: ["train fare", "transport fare", "the fare", "passenger charge"], hint: "unchin — うん (transport) + ちん (wage, charge): the charge for being carried. Narrower than りょうきん from u49, which is any service fee; うんちん is specifically transport." },
        { id: "ja-u74l2-gasorin", type: "vocab", front: "ガソリン", reading: "gasorin", meaning: "gasoline", example: { jp: "ガソリンをかいます。", en: "I buy gasoline." }, drill: { jp: "ガソリンがたりません。", en: "There isn't enough petrol." }, accept: ["petrol", "gas", "fuel", "motor fuel"], hint: "gasorin — four beats, every vowel sounded: ga-so-ri-n. The filling station is ガソリンスタンド, which is Japanese-made English — no English speaker says it." },
        { id: "ja-u74l2-jiko", type: "vocab", front: "じこ", reading: "jiko", meaning: "accident", example: { jp: "くるまのじこをみました。", en: "I saw a car accident." }, drill: { jp: "じこがみちでありました。", en: "There was an accident on the road." }, accept: ["crash", "traffic accident", "an incident", "a collision"], hint: "jiko — じ (matter) + こ (cause): an unwanted happening. Two light beats, ji-ko. Accidents take あります, not きます: じこがありました. ⚠️ An identical-sounding じこ also means 'oneself'." },
        { id: "ja-u74l2-tsukin", type: "vocab", front: "つうきん", reading: "tsūkin", meaning: "commuting to work", example: { jp: "でんしゃでつうきんします。", en: "I commute by train." }, drill: { jp: "つうきんはたいへんです。", en: "Commuting is tough." }, accept: ["commute", "commuting", "the journey to work", "travelling in"], hint: "tsūkin — つう (pass through) + きん (duty): passing through to your duty. Long ū: tsū-kin. The school version is つうがく, same つう. Japanese commutes are long, so this word carries weight." },
      ],
    },
    // Lesson 3: going abroad
    {
      id: "ja-u74l3",
      unit: 74,
      lesson: 3,
      title: "Going abroad",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about trips near and far: かいがい こくない こくさい にもつ あんない けんぶつ.",
      items: [
        { id: "ja-u74l3-kaigai", type: "vocab", front: "かいがい", reading: "kaigai", meaning: "overseas", example: { jp: "かいがいへいきます。", en: "I go overseas." }, drill: { jp: "かいがいのニュースをよみます。", en: "I read overseas news." }, accept: ["abroad", "foreign countries", "outside Japan", "international"], hint: "kaigai — かい (sea) + がい (outside): outside the sea. From an island country, 'abroad' literally means across the water. Its opposite こくない is the next card." },
        { id: "ja-u74l3-kokunai", type: "vocab", front: "こくない", reading: "kokunai", meaning: "domestic", example: { jp: "こくないをりょこうします。", en: "I travel domestically." }, drill: { jp: "こくないのひこうきにのります。", en: "I take a domestic flight." }, accept: ["within the country", "inside the country", "home (not abroad)", "national"], hint: "kokunai — こく (country) + ない (inside). The counterpart of かいがい above. Airports split everything this way: こくないせん for domestic flights, こくさいせん for international." },
        { id: "ja-u74l3-kokusai", type: "vocab", front: "こくさい", reading: "kokusai", meaning: "international", example: { jp: "こくさいでんわをかけます。", en: "I make an international call." }, drill: { jp: "こくさいのかいぎにいきます。", en: "I go to an international meeting." }, accept: ["global", "cross-border", "between countries", "worldwide"], hint: "kokusai — こく (country) + さい (between): between countries. Same こく as こくない on the card before. It attaches straight to a noun: こくさいでんわ, こくさいくうこう." },
        { id: "ja-u74l3-nimotsu", type: "vocab", front: "にもつ", reading: "nimotsu", meaning: "luggage", example: { jp: "にもつがおもいです。", en: "The luggage is heavy." }, drill: { jp: "にもつをホテルにおくります。", en: "I send the luggage to the hotel." }, accept: ["baggage", "bags", "a parcel", "what you're carrying"], hint: "nimotsu — に (load) + もつ (thing): the thing you are loaded with. Covers suitcases AND a delivered parcel. Like English 'luggage' it has no plural: one にもつ or ten look the same." },
        { id: "ja-u74l3-annai", type: "vocab", front: "あんない", reading: "annai", meaning: "guidance", example: { jp: "ともだちをあんないします。", en: "I show my friend around." }, drill: { jp: "あんないをうけつけでききます。", en: "I ask for directions at reception." }, accept: ["showing around", "information", "directions", "a guided tour"], hint: "annai — あん (plan) + ない (inside): leading someone through. Both showing a visitor around and the information desk itself: あんないじょ. The person doing it is a ガイド, lesson 4." },
        { id: "ja-u74l3-kenbutsu", type: "vocab", front: "けんぶつ", reading: "kenbutsu", meaning: "sightseeing (going to see the sights)", example: { jp: "おてらをけんぶつします。", en: "I go sightseeing at the temple." }, drill: { jp: "けんぶつをまちでします。", en: "I go sightseeing in the town." }, accept: ["seeing the sights", "visiting", "looking round", "taking in the sights"], hint: "kenbutsu — けん (see) + ぶつ (thing): going to look at things. More casual than かんこう, the tourism-industry word. What you look at takes を." },
      ],
    },
    // Lesson 4: lodging & tourism
    {
      id: "ja-u74l4",
      unit: 74,
      lesson: 4,
      title: "Lodging & tourism",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle a stay and the sights: しゅくはく うけつけ めいしょ ガイド りょひ ホームステイ.",
      items: [
        { id: "ja-u74l4-shukuhaku", type: "vocab", front: "しゅくはく", reading: "shukuhaku", meaning: "overnight stay", example: { jp: "ホテルにしゅくはくします。", en: "I stay overnight at a hotel." }, drill: { jp: "しゅくはくのりょうきんをはらいます。", en: "I pay the accommodation charge." }, accept: ["lodging", "staying the night", "accommodation", "a night's stay"], hint: "shukuhaku — しゅく (lodge) + はく (night spent): a night spent away. The formal booking word; とまります is what you actually say in conversation. しゅくはくりょう is the room rate." },
        { id: "ja-u74l4-uketsuke", type: "vocab", front: "うけつけ", reading: "uketsuke", meaning: "reception desk", example: { jp: "うけつけでなまえをかきます。", en: "I write my name at reception." }, drill: { jp: "うけつけにひとがいます。", en: "There is someone at reception." }, accept: ["front desk", "reception", "the desk", "check-in counter"], hint: "uketsuke — うける (receive) + つける (attach): where you are received. It means the DESK and the act of taking applications, so うけつけちゅう on a sign means 'now accepting'." },
        { id: "ja-u74l4-meisho", type: "vocab", front: "めいしょ", reading: "meisho", meaning: "famous place", example: { jp: "にほんのめいしょへいきます。", en: "I go to Japan's famous places." }, drill: { jp: "めいしょをけんぶつします。", en: "I go sightseeing at the famous spots." }, accept: ["famous spot", "sight", "a landmark", "a noted place"], hint: "meisho — めい (name) + しょ (place): a place with a name, i.e. one worth going to. Same めい as ゆうめい (famous, u23) and めいぶつ (local speciality, u41) — one element, three cards." },
        { id: "ja-u74l4-gaido", type: "vocab", front: "ガイド", reading: "gaido", meaning: "tour guide", example: { jp: "ガイドとまちをあるきます。", en: "I walk around town with a guide." }, drill: { jp: "ガイドがあんないします。", en: "The guide shows us around." }, accept: ["guide", "guidebook", "a tour leader", "a guided tour"], hint: "gaido — the PERSON, and also a guidebook (ガイドブック). What they do is あんない, from lesson 3. Three beats: ga-i-do, with the i sounded." },
        { id: "ja-u74l4-ryohi", type: "vocab", front: "りょひ", reading: "ryohi", meaning: "travel expenses", example: { jp: "りょひをはらいます。", en: "I pay the travel expenses." }, drill: { jp: "りょひをちょきんします。", en: "I save up for travel expenses." }, accept: ["travel costs", "trip cost", "fares and expenses", "travel allowance"], hint: "ryohi — りょ (travel) + ひ (expense). Short and easy to mishear: ryo-hi, two beats, no long vowels. That ひ names a cost all over Japanese: がくひ (tuition), いりょうひ (medical costs)." },
        { id: "ja-u74l4-homusutei", type: "vocab", front: "ホームステイ", reading: "hōmusutei", meaning: "homestay", example: { jp: "アメリカでホームステイします。", en: "I do a homestay in America." }, drill: { jp: "ホームステイはたのしいです。", en: "A homestay is fun." }, accept: ["home stay", "staying with a host family", "living with a family", "host-family stay"], hint: "hōmusutei — long ō at the start: hō-mu-su-te-i, five beats. The host family is ホストファミリー. It is the standard route for a student exchange in Japan, so the word is common there." },
      ],
    },
  ],
};
