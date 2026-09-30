// HI Unit 41 — खेल और मुकाबला ("Sport and the contest") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 2 (u41–u50), FIRST UNIT OF THE RANGE. Conventions: unit1.js §1–§11,
// then unit31.js §A1–§A8. Both BIND; nothing below overrides either.
//
// 🚨 RETHEMED SLOT. The scaffold called this "Personality and character", and that
// slot is spent twice over: u27 मन और स्वभाव is the personality unit (दुखी, गुस्सा,
// होशियार, आलसी, ईमानदार, बहादुर, सख्त, चालाक, प्यारा, परेशान, हैरान, नाराज़, गर्व,
// शर्म, दया — 15 cards), and u32 took the reasoning half. Authoring a second one
// would mean inventing 24 cards for a filled shelf.
// THE MEASURED HOLE IT WAS RETHEMED INTO, and it is the biggest single hole unit31.js
// §A8 recorded: **WINNING AND LOSING WAS ZERO OF SIX**. जीतना, हारना, खेल, टीम,
// इनाम and मैच were all absent — u31 wanted जीतना and dropped it because the corpus
// had no object to win: no खेल, no मैच, no इनाम. So the verbs and the nouns had to
// arrive in one unit, and this is it. Cricket is the one game every Hindi learner
// will be talked at about, and the course could not name a bat or a ball.
// ⚠️ SPORT IS NOT "culture and leisure" (u45's old slot, block 3's domain). This unit
// takes the CONTEST — who won, who lost, what was at stake — and leaves music,
// film, dance and festivals alone.
//
// ⚠️ TWO DERIVED NOUNS OF TAUGHT VERBS ARE CARDED HERE, and the precedent is the
// corpus's own, not a new licence: नाप is carded at u40l4 as "the noun of नापना",
// तैयारी at u32l3 from तैयार, बचपन at u24l1 from बच्चा, and सिलाई at u40l3. So
//   खेल      (a game)   from खेलना, taught at u26l3 — a different unit, as every
//   खिलौना   (a toy)    from the same root
// are ordinary authoring. `scripts/scope-hi.mjs` generates no -ल or -औना suffix, so
// neither was in scope before this unit and neither shadows खेलना's own card.
//
// ⚠️ ONE DELIBERATE OMISSION: जीत (victory) and हार (defeat) are NOT carded, even
// though both are useful, because they are the bare stems of this unit's own जीतना
// and हारना. Carding both would put one lexeme on two mastery tracks in one unit —
// the बड़ा/बड़ी defect unit1.js §6 bans. The corpus has never put a verb pair in one
// unit either (उठना u12 / उठाना u31, रुकना u12 / रोकना u31, गिरना u24 / गिराना u31,
// बचना u24 / बचाना u31 — always separated). Both stems ARE in scope from here, via
// derive(), and both appear in sentences: जीत का जश्न, टीम हार गई.
//
// ⚠️ हारना DOES NOT TAKE ने, AND THAT IS NOT A SLIP. unit31.js §A1 rule 1 says the
// DOER of a completed transitive action takes ने; हारना is one of the verbs Hindi
// treats as happening TO you, so it is टीम हारी / टीम हार गई and never टीम ने हारी.
// जीतना in the same lesson DOES take it: उसने खिताब जीता. The pair is taught side by
// side precisely because the contrast is invisible from the English.
//
// ⚠️ ताली (a clap) WAS SCREENED AND DROPPED. Its only natural use is ताली बजाना, and
// बजाना is taught nowhere in Hindi — so the card's example would have had to be
// out of scope or unnatural. खिताब (a title) took the slot. Named here so the next
// block does not rediscover it; whoever cards बजाना can card ताली beside it.
//
// LOANWORD FREE-PASS CHECK (unit1.js §9), measured with the real `checkProduce`:
// टीम tiim ≠ "a team" · क्रिकेट kriket ≠ "cricket" · मैच maich ≠ "a match" ·
// कप्तान kaptaan ≠ "a captain". Zero free passes in this unit.
//
// RETROFLEX/DENTAL (§1b): no new colliding pair. टीम tiim, ताली→dropped, टालना is
// u46's and reads taalnaa against u15's ताला taalaa. जीतना has the DENTAL त and no
// retroflex counterpart exists in the corpus (no जीटना). §1(b)'s doubling hatch
// fires NOWHERE in this unit.
// GEMINATION (§1): बल्ला ballaa and छक्का chhakkaa double, as the spelling requires.
// ⚠️ गुड़िया's plural is गुड़ियाँ, NOT गुड़िये — an -िया noun does not take the -ा
// noun paradigm, and `derive()` generates the wrong form, so the plural is named in
// the hint and used in no sentence.
export const HI_UNIT41 = {
  id: "hi-u41",
  lang: "hi",
  title: "खेल और मुकाबला",
  order: 41,
  stage: "a2",
  lessons: [
    {
      id: "hi-u41l1",
      unit: 41,
      lesson: 1,
      title: "The game, the team and the crowd",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name a game, the people who play it and the people who watch it, and get the gender agreement right on each.",
      items: [
        { id: "hi-u41l1-khel", type: "vocab", front: "खेल", reading: "khel", meaning: "a game", accept: ["sport", "a sport"], example: { jp: "भारत में क्रिकेट सबसे बड़ा खेल है।", en: "Cricket is the biggest sport in India." }, drill: { jp: "यह खेल बहुत पुराना है", en: "This game is very old" }, hint: "KHEL, MASCULINE, plural खेल unchanged — the noun of खेलना, to play, which the activities unit already taught. One word for a children's game and for an Olympic sport; the person who plays it is the खिलाड़ी below." },
        { id: "hi-u41l1-khilaarii", type: "vocab", front: "खिलाड़ी", reading: "khilaarii", meaning: "a player", accept: ["a sportsman", "an athlete"], example: { jp: "इस टीम का हर खिलाड़ी जवान है।", en: "Every player in this team is young." }, drill: { jp: "वह खिलाड़ी बहुत तेज़ है", en: "That player is very fast" }, hint: "KHI-LAA-RII, MASCULINE despite the -ी, like पानी, दर्जी and नाई, and the word does not change for a woman — खिलाड़ी लड़की. The ड़ reads r. Do not read it as खिलाना, to feed: same look, different root." },
        { id: "hi-u41l1-tiim", type: "vocab", front: "टीम", reading: "tiim", meaning: "a team", accept: ["a sports team", "a squad"], example: { jp: "हमारी टीम ने कल का मुकाबला जीता।", en: "Our team won yesterday's contest." }, drill: { jp: "हमारी टीम बहुत मज़बूत है", en: "Our team is very strong" }, hint: "TIIM, ⚠️ FEMININE — हमारी टीम, never हमारा, and the oblique plural is टीमों. Borrowed whole from English and it took the feminine the way स्कर्ट did. The retroflex ट, so tiim and not the dental." },
        { id: "hi-u41l1-darshak", type: "vocab", front: "दर्शक", reading: "darshak", meaning: "a spectator", accept: ["a viewer", "a member of the audience"], example: { jp: "मैदान में हज़ार दर्शक बैठे थे।", en: "A thousand spectators were sitting in the ground." }, drill: { jp: "दर्शक मैदान में बैठते हैं", en: "The spectators sit in the ground" }, hint: "DAR-SHAK, MASCULINE, plural दर्शक unchanged, with र् on the द. The one who watches — from the same root as दिखाना, to show. A television audience is दर्शक too." },
        { id: "hi-u41l1-kaptaan", type: "vocab", front: "कप्तान", reading: "kaptaan", meaning: "a captain", accept: ["a team leader", "a skipper"], example: { jp: "टीम के कप्तान ने पारी शुरू की।", en: "The team's captain started the innings." }, drill: { jp: "कप्तान ने पूरी टीम बुलाई", en: "The captain called the whole team" }, hint: "KAP-TAAN, MASCULINE, with the प् halant of unit 6 — कप्तान, not कैप्टन. He is the खिलाड़ी who decides; a नेता, in the society unit, leads a country instead." },
        { id: "hi-u41l1-mukaablaa", type: "vocab", front: "मुकाबला", reading: "mukaablaa", meaning: "a contest", accept: ["a competition", "a face-off"], example: { jp: "दोनों टीमों का मुकाबला बहुत कड़ा था।", en: "The contest between the two teams was very tight." }, drill: { jp: "आज का मुकाबला बहुत मुश्किल है", en: "Today's contest is very difficult" }, hint: "MU-KAAB-LAA, MASCULINE, plural मुकाबले, with PLAIN क — this course writes no क़ anywhere. Any head-to-head: a मैच, an election, two shops on one street. मुकाबला करना is to take something on." },
      ],
    },
    {
      id: "hi-u41l2",
      unit: 41,
      lesson: 2,
      title: "Winning, losing and what is at stake",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say who won and who lost, and name the prize, the title and the celebration — with ने on जीतना and never on हारना.",
      items: [
        { id: "hi-u41l2-jiitnaa", type: "vocab", front: "जीतना", reading: "jiitnaa", meaning: "to win", accept: ["to be victorious", "to take first place"], example: { jp: "उस लड़की ने शतरंज का मुकाबला जीता।", en: "That girl won the chess contest." }, drill: { jp: "मुकाबला जीतना आसान नहीं है", en: "Winning a contest is not easy" }, hint: "JIIT-NAA, DENTAL त, and it is TRANSITIVE, so its past takes ने: उसने जीता, never वह जीता. जीत जाना, with the vector, is what you will actually hear when the मैच ends. Its bare stem जीत doubles as the noun for victory." },
        { id: "hi-u41l2-haarnaa", type: "vocab", front: "हारना", reading: "haarnaa", meaning: "to be defeated", accept: ["to lose a game", "to go down"], example: { jp: "हमारी टीम कल पहला मैच हार गई।", en: "Our team lost the first match yesterday." }, drill: { jp: "हारना बुरा नहीं होता है", en: "Losing is not a bad thing" }, hint: "HAAR-NAA — and ⚠️ unlike जीतना it does NOT take ने: टीम हारी, never टीम ने हारी. Hindi treats losing as something that happens to you. हार जाना is the everyday form, and the stem हार is the noun for a defeat." },
        { id: "hi-u41l2-inaam", type: "vocab", front: "इनाम", reading: "inaam", meaning: "a prize", accept: ["an award", "a reward"], example: { jp: "पहले इनाम में एक साइकिल मिली।", en: "The first prize was a bicycle." }, drill: { jp: "उसे सबसे बड़ा इनाम मिला", en: "He got the biggest prize" }, hint: "I-NAAM, MASCULINE, plural इनाम unchanged. A competition prize, a school award, or the cash a pleased boss hands over. इनाम देना is to award one, इनाम मिलना to receive one." },
        { id: "hi-u41l2-jashn", type: "vocab", front: "जश्न", reading: "jashn", meaning: "a festivity", accept: ["a celebration party", "revelry"], example: { jp: "जीत का जश्न रात भर चला।", en: "The victory celebration went on all night." }, drill: { jp: "गाँव में बड़ा जश्न हुआ", en: "There was a big celebration in the village" }, hint: "JASHN, MASCULINE, one syllable, with the श्न conjunct — no vowel between the sh and the n. A त्योहार is a festival fixed on the calendar; a जश्न is the party you throw because something happened." },
        { id: "hi-u41l2-khitaab", type: "vocab", front: "खिताब", reading: "khitaab", meaning: "a title", accept: ["a championship", "a trophy won"], example: { jp: "उस खिलाड़ी ने तीसरा खिताब जीता।", en: "That player won his third title." }, drill: { jp: "यह खिताब बहुत बड़ा है", en: "This title is a very big one" }, hint: "KHI-TAAB, MASCULINE, plural खिताब, PLAIN ख. Both the cup on the shelf and the standing that comes with holding it — खिताब जीतना is to take the championship." },
        { id: "hi-u41l2-kamaal", type: "vocab", front: "कमाल", reading: "kamaal", meaning: "a marvel", accept: ["a wonder", "something amazing"], example: { jp: "उसका आखिरी छक्का कमाल था।", en: "His last six was a marvel." }, drill: { jp: "यह खेल कमाल का है", en: "This game is a marvel" }, hint: "KA-MAAL, MASCULINE. कमाल का — 'of marvel' — is how Hindi turns it into an adjective: कमाल का खिलाड़ी, a wonderful player. Read it against कम kam, less, and काम kaam, work: three words, three lengths." },
      ],
    },
    {
      id: "hi-u41l3",
      unit: 41,
      lesson: 3,
      title: "Bat, ball and the cricket ground",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Follow a cricket conversation — the ball, the bat, the innings and the six — which in India is most conversations.",
      items: [
        { id: "hi-u41l3-gend", type: "vocab", front: "गेंद", reading: "gend", meaning: "a ball", accept: ["a cricket ball"], example: { jp: "बच्चे ने गेंद दीवार पर मारी।", en: "The child hit the ball at the wall." }, drill: { jp: "गेंद बहुत दूर गिरी", en: "The ball fell a long way off" }, hint: "GEND, ⚠️ FEMININE — यह गेंद, नई गेंद, plural गेंदें. The ं before द is the DENTAL nasal of unit 5, so it reads gend. Any ball at all: cricket, football, a ball of ऊन." },
        { id: "hi-u41l3-ballaa", type: "vocab", front: "बल्ला", reading: "ballaa", meaning: "a bat", accept: ["a cricket bat"], example: { jp: "उसने बाज़ार से नया बल्ला खरीदा।", en: "He bought a new bat at the market." }, drill: { jp: "यह बल्ला बहुत भारी है", en: "This bat is very heavy" }, hint: "BAL-LAA, MASCULINE, plural बल्ले, with the doubled ल of §1's gemination — the halant sits on the first ल. A cricket bat, and by extension any club you swing." },
        { id: "hi-u41l3-kriket", type: "vocab", front: "क्रिकेट", reading: "kriket", meaning: "cricket", accept: ["the game of cricket"], example: { jp: "भारत में सब बच्चे क्रिकेट खेलते हैं।", en: "In India all the children play cricket." }, drill: { jp: "हम रोज़ क्रिकेट खेलते हैं", en: "We play cricket every day" }, hint: "KRI-KET, MASCULINE, uncountable, opening with the क्र conjunct. ⚠️ The reading is kriket and the English word is cricket — close, but not the same string, so typing the gloss will not pass the dictation card." },
        { id: "hi-u41l3-maich", type: "vocab", front: "मैच", reading: "maich", meaning: "a match", accept: ["a fixture", "a game between two sides"], example: { jp: "कल का मैच बारिश में रुका।", en: "Yesterday's match stopped in the rain." }, drill: { jp: "मैच शाम को शुरू होता है", en: "The match starts in the evening" }, hint: "MAICH, MASCULINE. ⚠️ मैं is main and मैच is maich — the ऐ mātrā, no nasal. A मुकाबला can be any contest; a मैच is a scheduled game with two sides." },
        { id: "hi-u41l3-paarii", type: "vocab", front: "पारी", reading: "paarii", meaning: "an innings", accept: ["a turn at batting", "a stretch of play"], example: { jp: "पहली पारी में उसने सौ बनाए।", en: "In the first innings he made a hundred." }, drill: { jp: "दूसरी पारी अभी बाकी है", en: "The second innings is still to come" }, hint: "PAA-RII, FEMININE — पहली पारी, plural पारियाँ. One side's turn with the bat, and outside cricket any stretch of doing something: उसकी पारी अच्छी रही, his run went well. Read it against पानी paanii." },
        { id: "hi-u41l3-chhakkaa", type: "vocab", front: "छक्का", reading: "chhakkaa", meaning: "a six-run hit", accept: ["a six in cricket", "a sixer"], example: { jp: "उसने आखिरी गेंद पर छक्का मारा।", en: "He hit a six off the last ball." }, drill: { jp: "यह छक्का बहुत ऊँचा था", en: "That six was very high" }, hint: "CHHAK-KAA, MASCULINE, plural छक्के, built on छह, six, with §1's gemination doubling the क. Six runs from one hit. छक्के छुड़ाना, to knock the sixes out of somebody, means to thrash them." },
      ],
    },
    {
      id: "hi-u41l4",
      unit: 41,
      lesson: 4,
      title: "Kites, cards and toys",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the games played on a roof, on a floor and in a child's hands, away from any stadium.",
      items: [
        { id: "hi-u41l4-khilaunaa", type: "vocab", front: "खिलौना", reading: "khilaunaa", meaning: "a toy", accept: ["a plaything"], example: { jp: "बच्चे का नया खिलौना खो गया।", en: "The child's new toy got lost." }, drill: { jp: "यह खिलौना बहुत सस्ता है", en: "This toy is very cheap" }, hint: "KHI-LAU-NAA, MASCULINE, plural खिलौने, with the औ mātrā of unit 3. From खेलना, like खेल itself — the thing you play WITH rather than the playing." },
        { id: "hi-u41l4-patang", type: "vocab", front: "पतंग", reading: "patang", meaning: "a kite", accept: ["a paper kite"], example: { jp: "छत पर बच्चे पतंग लेकर बैठे थे।", en: "The children were sitting on the roof with kites." }, drill: { jp: "उसकी पतंग बहुत ऊँची है", en: "His kite is very high" }, hint: "PA-TANG, ⚠️ FEMININE — मेरी पतंग, plural पतंगें. The ं before ग is the nasal of unit 5. Kite-flying is a January festival across north India, which is why the छत comes with it. Not पतला, thin." },
        { id: "hi-u41l4-shatranj", type: "vocab", front: "शतरंज", reading: "shatranj", meaning: "chess", accept: ["the game of chess"], example: { jp: "दादा शतरंज बहुत अच्छा खेलते हैं।", en: "Grandfather plays chess very well." }, drill: { jp: "शतरंज का खेल पुराना है", en: "The game of chess is old" }, hint: "SHA-TRANJ, MASCULINE, uncountable, with the त्र conjunct of unit 6 and the ं nasal before ज. The Persian name of a game invented in India — the English word chess comes from the same root." },
        { id: "hi-u41l4-taash", type: "vocab", front: "ताश", reading: "taash", meaning: "playing cards", accept: ["a pack of cards", "a card game"], example: { jp: "शाम को सब ताश खेलते थे।", en: "In the evening everyone used to play cards." }, drill: { jp: "ताश का खेल बहुत आसान है", en: "The card game is very easy" }, hint: "TAASH, MASCULINE, uncountable — ताश खेलना, to play cards, never a plural. Read it against ताज taaj, a crown, at the end of this band: one letter apart and nothing to do with each other." },
        { id: "hi-u41l4-guriyaa", type: "vocab", front: "गुड़िया", reading: "guriyaa", meaning: "a doll", accept: ["a rag doll"], example: { jp: "बेटी अपनी गुड़िया साथ लाई।", en: "My daughter brought her doll along." }, drill: { jp: "यह गुड़िया बहुत सुंदर है", en: "This doll is very pretty" }, hint: "GU-RI-YAA, FEMININE, and ⚠️ the plural is गुड़ियाँ, not गुड़िये — an -िया noun does not follow the -ा noun pattern. The ड़ reads r. Also an affectionate name for a small girl." },
        { id: "hi-u41l4-jhuulaa", type: "vocab", front: "झूला", reading: "jhuulaa", meaning: "a swing", accept: ["a garden swing", "a hammock"], example: { jp: "बगीचे में एक पुराना झूला था।", en: "There was an old swing in the garden." }, drill: { jp: "बच्चों को झूला बहुत पसंद है", en: "The children like the swing very much" }, hint: "JHUU-LAA, MASCULINE, plural झूले, from झूलना, to sway, which this course does not card. Read the long uu against झाड़ू jhaaruu, a broom, and झूठ jhuuth, a lie." },
      ],
    },
  ],
};
