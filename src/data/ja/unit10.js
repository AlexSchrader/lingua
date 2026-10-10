// Unit 10 — まち・ばしょ ("Town & Places") — A1 thematic
// Places around town, parts of a home, position words (right/left/above/below),
// and a first set of describing words (near/far, big/small, new/old). Together
// with Units 7-9 this rounds out a usable A1 vocabulary: the learner can say where
// they're going, where something is, and what it's like — all with the grammar
// they already have (に / で / の / が + です/ます, どこですか, があります).
// lang/unit/lesson stamped in index.js.
export const UNIT10 = {
  id: "ja-u10",
  lang: "ja",
  title: "まち・ばしょ",
  order: 10,
  stage: "a1",
  lessons: [
    // Lesson 1: places in town
    {
      id: "ja-u10l1",
      unit: 10,
      lesson: 1,
      title: "Around town",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name places in town: えき みせ びょういん ぎんこう ゆうびんきょく としょかん.",
      items: [
        { id: "ja-u10l1-eki", type: "vocab", front: "えき", reading: "eki", meaning: "station", example: { jp: "えきにいきます。", en: "I go to the station." }, drill: { jp: "えきのまえにコンビニがあります。", en: "There is a convenience store in front of the station." }, accept: ["train station", "the station", "railway station", "stop"], hint: "E-ki — two beats. A TRAIN station only; a bus stop is a バスてい and a police station is a けいさつしょ. ⚠️ えきまえ, station-front, is a word in its own right — it is where most Japanese town centres actually are." },
        { id: "ja-u10l1-mise", type: "vocab", front: "みせ", reading: "mise", meaning: "shop", example: { jp: "みせはどこですか。", en: "Where is the shop?" }, drill: { jp: "ちいさいみせでかいます。", en: "I buy it at a small shop." }, accept: ["store", "the shop", "shops", "a store"], hint: "MI-se — two beats. The general word for a shop of any size. ⚠️ Politely it takes the honorific お: おみせ, which is what staff and customers both say. A department store is a デパート, a borrowed word." },
        { id: "ja-u10l1-byoin", type: "vocab", front: "びょういん", reading: "byōin", meaning: "hospital", example: { jp: "びょういんにいきます。", en: "I go to the hospital." }, drill: { jp: "びょういんはとおいです。", en: "The hospital is far." }, accept: ["the hospital", "clinic", "hospitals", "infirmary"], hint: "BYOH-in — four beats: byo-o-i-n, びょ a single sound lengthened. 🚨 ONE BEAT FROM びよういん, a HAIR SALON — びょういん is the hospital, びよういん the beauty parlour. Hold the long o and you are in the right building." },
        { id: "ja-u10l1-ginko", type: "vocab", front: "ぎんこう", reading: "ginkō", meaning: "bank", example: { jp: "ぎんこうはどこですか。", en: "Where is the bank?" }, drill: { jp: "ぎんこうはえきのとなりです。", en: "The bank is next to the station." }, accept: ["the bank", "banks", "a bank", "banking hall"], hint: "GIN-koh — four beats: gi-n-ko-o, hard g, the ん held and the final う lengthening the o. ⚠️ Japanese banks close at 15:00 on weekdays and not at all at weekends — the ATM corner stays open." },
        { id: "ja-u10l1-yubinkyoku", type: "vocab", front: "ゆうびんきょく", reading: "yūbinkyoku", meaning: "post office", example: { jp: "ゆうびんきょくにいきます。", en: "I go to the post office." }, drill: { jp: "ゆうびんきょくできってをかいます。", en: "I buy stamps at the post office." }, accept: ["the post office", "post offices", "a post office", "mail office"], hint: "YOO-bin-kyo-ku — six beats: yu-u-bi-n-kyo-ku. ゆうびん is post and きょく is a bureau. ⚠️ The longest word in the lesson, and every beat is sounded — its red 〒 symbol is on every branch." },
        { id: "ja-u10l1-toshokan", type: "vocab", front: "としょかん", reading: "toshokan", meaning: "library", example: { jp: "としょかんでべんきょうします。", en: "I study at the library." }, drill: { jp: "としょかんでほんをよみます。", en: "I read books at the library." }, accept: ["the library", "libraries", "a library", "reading room"], hint: "to-sho-KAN — four beats, しょ a single sound, the ん held. としょ is books-as-a-collection and かん is a hall — the same かん as えいがかん and びじゅつかん in the next lesson." },
        { id: "ja-u10l1-konbini", type: "vocab", front: "コンビニ", reading: "konbini", meaning: "convenience store", example: { jp: "コンビニでかいます。", en: "I buy it at the convenience store." }, drill: { jp: "コンビニでおにぎりをかいます。", en: "I buy a rice ball at the convenience store." }, accept: ["the konbini", "corner shop", "7-eleven", "mini-mart"], hint: "KON-bi-ni — four beats: ko-n-bi-ni. A Japanese clipping of convenience store, so no English speaker will recognise it. ⚠️ A Japanese コンビニ sells hot food, posts parcels and pays your bills — it is a utility, not a kiosk." },
        { id: "ja-u10l1-kuko", type: "vocab", front: "くうこう", reading: "kūkō", meaning: "airport", example: { jp: "くうこうにいきます。", en: "I go to the airport." }, drill: { jp: "くうこうでともだちにあいます。", en: "I meet a friend at the airport." }, accept: ["the airport", "airports", "an airport", "airfield"], hint: "KOO-koh — four beats: ku-u-ko-o, with BOTH vowels lengthened. くう is sky and こう is port — a sky-harbour. ⚠️ Shorten either vowel and the word collapses; it is four beats, not two." },
      ],
    },
    // Lesson 2: more places
    {
      id: "ja-u10l2",
      unit: 10,
      lesson: 2,
      title: "Out and about",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name more places: こうえん えいがかん きっさてん びじゅつかん おてら じんじゃ.",
      items: [
        { id: "ja-u10l2-koen", type: "vocab", front: "こうえん", reading: "kōen", meaning: "park", example: { jp: "こうえんにいきます。", en: "I go to the park." }, drill: { jp: "こうえんでさんぽをします。", en: "I take a walk in the park." }, accept: ["the park", "parks", "a park", "public garden"], hint: "KOH-en — three beats: ko-o-e-n, the う lengthening the first o. ⚠️ Keep it apart from こうばん, a police box, and くうこう, an airport, in this same unit — こう shows up in all three and means something different each time." },
        { id: "ja-u10l2-eigakan", type: "vocab", front: "えいがかん", reading: "eigakan", meaning: "cinema", example: { jp: "えいがかんでみます。", en: "I watch a film at the cinema." }, drill: { jp: "えいがかんはえきのうえです。", en: "The cinema is above the station." }, accept: ["movie theater", "movie theatre", "the cinema", "picture house"], hint: "ei-ga-KAN — five beats: e-i-ga-ka-n. えいが film plus かん hall. ⚠️ The same かん ends としょかん and びじゅつかん — spot it and you can read a building's purpose off its name." },
        { id: "ja-u10l2-kissaten", type: "vocab", front: "きっさてん", reading: "kissaten", meaning: "café", example: { jp: "きっさてんでのみます。", en: "I drink coffee at the café." }, drill: { jp: "きっさてんでケーキをたべます。", en: "I eat cake at the café." }, accept: ["cafe", "coffee shop", "tearoom", "a cafe"], hint: "KIS-sa-ten — five beats, the small っ holding one: ki-s-sa-te-n. ⚠️ An old-fashioned Japanese coffee house with thick toast and no wifi — not a チェーン like スターバックス, which Japanese calls a カフェ instead." },
        { id: "ja-u10l2-bijutsukan", type: "vocab", front: "びじゅつかん", reading: "bijutsukan", meaning: "art museum", example: { jp: "びじゅつかんにいきます。", en: "I go to the art museum." }, drill: { jp: "びじゅつかんはしずかです。", en: "The art museum is quiet." }, accept: ["art gallery", "the art museum", "museum of art", "picture gallery"], hint: "bi-ju-tsu-KAN — five beats, じゅ a single sound. びじゅつ is fine art plus かん, hall. ⚠️ A general museum is a はくぶつかん — same かん, different collection." },
        { id: "ja-u10l2-otera", type: "vocab", front: "おてら", reading: "otera", meaning: "temple", example: { jp: "おてらはしずかです。", en: "The temple is quiet." }, drill: { jp: "おてらのにわはきれいです。", en: "The temple's garden is beautiful." }, accept: ["buddhist temple", "the temple", "temples", "a temple"], hint: "o-TE-ra — three beats, the honorific お built in. ⚠️ BUDDHIST. The Shintō one is a じんじゃ, in the next card, and the two are genuinely different religions — a temple has a graveyard, a shrine has a とりい gate." },
        { id: "ja-u10l2-jinja", type: "vocab", front: "じんじゃ", reading: "jinja", meaning: "shrine", example: { jp: "じんじゃにいきます。", en: "I go to the shrine." }, drill: { jp: "じんじゃはやまのうえです。", en: "The shrine is up the mountain." }, accept: ["shinto shrine", "the shrine", "shrines", "a shrine"], hint: "JIN-ja — three beats: ji-n-ja, the ん held, じゃ a single sound. ⚠️ SHINTŌ, the counterpart to おてら. You can tell one at a glance by its とりい, the red gate. The bigger ones are called じんぐう." },
        { id: "ja-u10l2-dobutsuen", type: "vocab", front: "どうぶつえん", reading: "dōbutsuen", meaning: "zoo", example: { jp: "どうぶつえんにいきます。", en: "I go to the zoo." }, drill: { jp: "どうぶつえんでぶたをみます。", en: "I see pigs at the zoo." }, accept: ["the zoo", "zoos", "a zoo", "zoological garden"], hint: "DOH-bu-tsu-en — six beats: do-o-bu-tsu-e-n. どうぶつ is animal and えん is a garden — the same えん as こうえん, park. An aquarium is a すいぞくかん, water-creature-hall." },
        { id: "ja-u10l2-koban", type: "vocab", front: "こうばん", reading: "kōban", meaning: "police box", example: { jp: "こうばんはどこですか。", en: "Where is the police box?" }, drill: { jp: "こうばんにひとがいます。", en: "There is someone in the police box." }, accept: ["police station", "police post", "the koban", "police booth"], hint: "KOH-ban — four beats: ko-o-ba-n. ⚠️ A こうばん is a two-officer booth on a street corner, not a station — it is where you report a lost wallet or ask directions, and it is usually the best map in the neighbourhood." },
      ],
    },
    // Lesson 3: home
    {
      id: "ja-u10l3",
      unit: 10,
      lesson: 3,
      title: "At home",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name parts of a home: いえ うち へや にわ まど げんかん.",
      items: [
        { id: "ja-u10l3-ie", type: "vocab", front: "いえ", reading: "ie", meaning: "house", example: { jp: "いえにかえります。", en: "I return home." }, drill: { jp: "いえのにわはひろいです。", en: "The house's garden is spacious." }, accept: ["the house", "a house", "houses", "dwelling"], hint: "I-e — two beats, both vowels sounded: i-e, never yeh. ⚠️ THE BUILDING — bricks and a roof. うち, in the next card, is the home you belong to. English says house and home; Japanese keeps them properly apart." },
        { id: "ja-u10l3-uchi", type: "vocab", front: "うち", reading: "uchi", meaning: "home", example: { jp: "うちでねます。", en: "I sleep at home." }, drill: { jp: "うちでりょうりをします。", en: "I cook at home." }, accept: ["my home", "my place", "house", "our place"], hint: "U-chi — two beats. ⚠️ MY home, my household, my side — うちのねこ is our cat. いえ is the structure; うち is the belonging. ⚠️ Also means inside, as in そのうちに, before long." },
        { id: "ja-u10l3-heya", type: "vocab", front: "へや", reading: "heya", meaning: "room", example: { jp: "へやはしずかです。", en: "The room is quiet." }, drill: { jp: "へやのまどをみます。", en: "I look at the room's window." }, accept: ["a room", "the room", "rooms", "bedroom"], hint: "HE-ya — two beats; the へ is he, not the particle's e sound. Any room in a house, and also a room in a hotel. ⚠️ A sumo stable is also a へや, which is why you hear the word on the news." },
        { id: "ja-u10l3-niwa", type: "vocab", front: "にわ", reading: "niwa", meaning: "garden", example: { jp: "にわにはながあります。", en: "There are flowers in the garden." }, drill: { jp: "にわはちいさいです。", en: "The garden is small." }, accept: ["yard", "the garden", "gardens", "a garden"], hint: "NI-wa — two beats. ⚠️ Said aloud it is also にわ meaning two birds — the counter にわ. A Japanese にわ can be a square metre of gravel and moss and still be a proper garden." },
        { id: "ja-u10l3-mado", type: "vocab", front: "まど", reading: "mado", meaning: "window", example: { jp: "まどがあります。", en: "There is a window." }, drill: { jp: "まどはおおきいです。", en: "The window is big." }, accept: ["windows", "a window", "the window", "pane"], hint: "MA-do — two beats. ⚠️ Not the borrowed ウインドウ, which Japanese keeps for a computer window and a shop display. まど is the hole in the wall, and まどぎわ, window-side, is the seat everyone wants on the train." },
        { id: "ja-u10l3-genkan", type: "vocab", front: "げんかん", reading: "genkan", meaning: "entrance", example: { jp: "げんかんにくつがあります。", en: "There are shoes at the entrance." }, drill: { jp: "げんかんにかさがあります。", en: "There is an umbrella in the entrance." }, accept: ["doorway", "foyer", "entryway", "porch"], hint: "GEN-kan — four beats, hard g, both ん held: ge-n-ka-n. ⚠️ Not just a doorway — the げんかん is a sunken floor where shoes come OFF. Step up out of it in your socks and you are properly inside." },
        { id: "ja-u10l3-daidokoro", type: "vocab", front: "だいどころ", reading: "daidokoro", meaning: "kitchen", example: { jp: "だいどころでりょうりします。", en: "I cook in the kitchen." }, drill: { jp: "だいどころはきれいです。", en: "The kitchen is clean." }, accept: ["the kitchen", "kitchens", "a kitchen", "galley"], hint: "dai-do-KO-ro — five beats: da-i-do-ko-ro, tapped r. だい is a stand and ところ is a place. ⚠️ The borrowed キッチン is now just as common, especially in rental ads." },
        { id: "ja-u10l3-toire", type: "vocab", front: "トイレ", reading: "toire", meaning: "toilet", example: { jp: "トイレはどこですか。", en: "Where is the toilet?" }, drill: { jp: "トイレはみぎです。", en: "The toilet is on the right." }, accept: ["bathroom", "restroom", "the toilet", "loo"], hint: "TOI-re — three beats: to-i-re, tapped r. From English toilet, with the final t dropped. ⚠️ Perfectly polite to say out loud in Japan — トイレはどこですか is the normal question, with no euphemism needed. The formal sign says おてあらい." },
      ],
    },
    // Lesson 4: position & direction
    {
      id: "ja-u10l4",
      unit: 10,
      lesson: 4,
      title: "Where is it?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where things are: みぎ ひだり うえ した まえ うしろ.",
      items: [
        { id: "ja-u10l4-migi", type: "vocab", front: "みぎ", reading: "migi", meaning: "right", example: { jp: "みせのみぎです。", en: "It's to the right of the shop." }, drill: { jp: "みぎにぎんこうがあります。", en: "There is a bank on the right." }, accept: ["right side", "the right", "right-hand side", "to the right"], hint: "MI-gi — two beats, hard g. 🚨 IT IS A NOUN, NOT A PREPOSITION — so you need の: みせのみぎ, the shop's right. Every position word in this lesson works that way, and that の is the whole grammar of the lesson." },
        { id: "ja-u10l4-hidari", type: "vocab", front: "ひだり", reading: "hidari", meaning: "left", example: { jp: "えきのひだりです。", en: "It's to the left of the station." }, drill: { jp: "ひだりにえきがあります。", en: "There is a station on the left." }, accept: ["left side", "the left", "left-hand side", "to the left"], hint: "hi-DA-ri — three beats, tapped r. A noun like みぎ, so it needs の: えきのひだり. ⚠️ Japanese drives on the left and stands left on Tokyo escalators — but right in Osaka, which catches out Japanese people too." },
        { id: "ja-u10l4-ue", type: "vocab", front: "うえ", reading: "ue", meaning: "above", example: { jp: "テーブルのうえにあります。", en: "It's on the table." }, drill: { jp: "ほんのうえにペンがあります。", en: "There is a pen on top of the book." }, accept: ["on top", "up", "on", "top"], hint: "U-e — two beats, both vowels sounded: u-e. A noun: テーブルのうえ, the table's top. ⚠️ It covers ON and ABOVE alike — Japanese does not separate touching from hovering. The opposite is した." },
        { id: "ja-u10l4-shita", type: "vocab", front: "した", reading: "shita", meaning: "below", example: { jp: "したにあります。", en: "It's below." }, drill: { jp: "テーブルのしたにねこがいます。", en: "There is a cat under the table." }, accept: ["under", "down", "underneath", "bottom"], hint: "shi-TA — two beats. A noun, so テーブルのした. ⚠️ Written in kana it is identical to した, the past tense of する, and to した, tongue. The の in front is what marks it as a position." },
        { id: "ja-u10l4-mae", type: "vocab", front: "まえ", reading: "mae", meaning: "front", example: { jp: "えきのまえです。", en: "It's in front of the station." }, drill: { jp: "まえにくるまがあります。", en: "There is a car in front." }, accept: ["in front", "before", "the front", "ahead"], hint: "MA-e — two beats, both vowels sounded: ma-e. ⚠️ It is BOTH space and time — えきのまえ is in front of the station, さんじのまえ is before three o'clock. One word, two jobs, and context decides." },
        { id: "ja-u10l4-ushiro", type: "vocab", front: "うしろ", reading: "ushiro", meaning: "behind", example: { jp: "いえのうしろです。", en: "It's behind the house." }, drill: { jp: "うしろにいえがあります。", en: "There is a house behind." }, accept: ["back", "rear", "at the back", "to the rear"], hint: "u-SHI-ro — three beats, tapped r. ⚠️ SPACE ONLY — it is the opposite of まえ for position, but not for time. Behind in time is あと, a different word. いえのうしろ is behind the house." },
        { id: "ja-u10l4-naka", type: "vocab", front: "なか", reading: "naka", meaning: "inside", example: { jp: "かばんのなかにあります。", en: "It's inside the bag." }, drill: { jp: "へやのなかはあついです。", en: "It's hot inside the room." }, accept: ["in", "middle", "within", "interior"], hint: "NA-ka — two beats. A noun: かばんのなか, the bag's inside. ⚠️ It also means the MIDDLE of a group or a range — なかゆび is the middle finger. The outside is そと." },
        { id: "ja-u10l4-tonari", type: "vocab", front: "となり", reading: "tonari", meaning: "next to", example: { jp: "えきのとなりです。", en: "It's next to the station." }, drill: { jp: "となりのひとはせんせいです。", en: "The person next door is a teacher." }, accept: ["beside", "next door", "neighboring", "adjacent"], hint: "to-NA-ri — three beats, tapped r. ⚠️ It means IMMEDIATELY beside, with nothing between — えきのとなり is the next building along. For merely near, use ちかく; となり is a claim about adjacency." },
      ],
    },
    // Lesson 5: describing words
    {
      id: "ja-u10l5",
      unit: 10,
      lesson: 5,
      title: "Describing places",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe places with ちかい とおい おおきい ちいさい あたらしい ふるい.",
      items: [
        { id: "ja-u10l5-chikai", type: "vocab", front: "ちかい", reading: "chikai", meaning: "near", example: { jp: "えきはちかいです。", en: "The station is near." }, drill: { jp: "ちかいみせにいきます。", en: "I go to a nearby shop." }, accept: ["close", "nearby", "close by", "not far"], hint: "chi-KAI — three beats: chi-ka-i. An い-adjective, straight in front of a noun: ちかいみせ. ⚠️ To say near something you need に: えきにちかいです, with に and not の." },
        { id: "ja-u10l5-toi", type: "vocab", front: "とおい", reading: "tōi", meaning: "far", example: { jp: "がっこうはとおいです。", en: "The school is far." }, drill: { jp: "とおいまちにすみます。", en: "I live in a distant town." }, accept: ["distant", "far away", "a long way", "remote"], hint: "TOH-i — three beats: to-o-i, with おお spelled as おお and not おう. ⚠️ ONE OF THE FEW WORDS THAT KEEPS おお — おおきい does too, and both are in this lesson. Most long o's are written おう." },
        { id: "ja-u10l5-okii", type: "vocab", front: "おおきい", reading: "ōkii", meaning: "big", example: { jp: "おおきいいえです。", en: "It's a big house." }, drill: { jp: "おおきいさかながいます。", en: "There is a big fish." }, accept: ["large", "big (size)", "huge", "great"], hint: "OH-kee — four beats: o-o-ki-i, both vowel pairs held. ⚠️ Spelled with おお, like とおい. ⚠️ And it has a second form, おおきな, used only before a noun — おおきなこえ, a loud voice. The opposite is ちいさい." },
        { id: "ja-u10l5-chiisai", type: "vocab", front: "ちいさい", reading: "chiisai", meaning: "small", example: { jp: "ちいさいみせです。", en: "It's a small shop." }, drill: { jp: "ちいさいへやです。", en: "It's a small room." }, accept: ["little", "tiny", "small (size)", "petite"], hint: "CHEE-sai — four beats: chi-i-sa-i, the double い held. ⚠️ It has a ちいさな form too, mirroring おおきな. ⚠️ A SMALL person's age is a different word: ちいさいこ means a young child, not a short adult." },
        { id: "ja-u10l5-atarashii", type: "vocab", front: "あたらしい", reading: "atarashii", meaning: "new", example: { jp: "あたらしいくつです。", en: "They're new shoes." }, drill: { jp: "あたらしいいえにすみます。", en: "I live in a new house." }, accept: ["brand new", "fresh", "recent", "modern"], hint: "a-ta-ra-SHEE — five beats: a-ta-ra-shi-i, tapped r, the しい held. ⚠️ It covers new AND fresh — あたらしいさかな is fresh fish, not a newly invented one. The opposite is ふるい." },
        { id: "ja-u10l5-furui", type: "vocab", front: "ふるい", reading: "furui", meaning: "old", example: { jp: "ふるいおてらです。", en: "It's an old temple." }, drill: { jp: "ふるいとけいがすきです。", en: "I like old clocks." }, accept: ["aged", "old (thing)", "ancient", "second-hand"], hint: "fu-RU-i — three beats, soft blown ふ, tapped r. 🚨 THINGS ONLY. An old PERSON is としより or おとしより — calling someone ふるい is an insult. For a long-standing friend Japanese says ながい つきあい instead." },
        { id: "ja-u10l5-hiroi", type: "vocab", front: "ひろい", reading: "hiroi", meaning: "spacious", example: { jp: "このへやはひろいです。", en: "This room is spacious." }, drill: { jp: "ひろいにわがあります。", en: "There is a spacious garden." }, accept: ["wide", "roomy", "large", "broad"], hint: "hi-RO-i — three beats, tapped r. ⚠️ It is about AREA, not height or volume — a ひろいへや has floor space. The opposite is せまい, cramped. A wide road is also ひろい." },
        { id: "ja-u10l5-kirei", type: "vocab", front: "きれい", reading: "kirei", meaning: "pretty", example: { jp: "まちはきれいです。", en: "The town is pretty." }, drill: { jp: "きれいなはなをかいます。", en: "I buy beautiful flowers." }, accept: ["clean", "beautiful", "tidy", "neat"], hint: "ki-REI — three beats, えい as two vowels: ki-re-i. 🚨 IT ENDS IN い BUT IT IS A な-ADJECTIVE — きれいなはな, never きれいはな. ⚠️ And it means CLEAN as well as pretty: へやがきれい is a tidy room." },
      ],
    },
  ],
};
