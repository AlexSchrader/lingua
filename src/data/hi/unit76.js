// HI Unit 76 — अर्थव्यवस्था ("The economy") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8, then
// unit79.js §B1–§B6.
//
// 🚨 RETHEMED SLOT (scaffold: "Money and the economy") — lint hard-errors on that
// title. THE "MONEY" HALF IS GONE and the measurement says so plainly: A2 u37
// (bills, credit, saving, spending) and A1 u18 (the market) between them card
// पैसा, रुपया, कीमत, दाम, हिसाब, बिल, उधार, किस्त, जमा, शुल्क, बचत, बजट, खर्च,
// कर्ज़, ब्याज, सिक्का, महँगाई, मुनाफ़ा, नुकसान, सौदा, ग्राहक, दुकानदार, खरीदना,
// बेचना. **Twenty-four of them** — one whole unit's worth. A learner can shop,
// borrow, save and keep accounts.
// What the corpus cannot do is talk about the economy as a SYSTEM: it has no word
// for an economy, an industry, production, investment, capital, demand, supply,
// a recession, employment or poverty. That is this unit, and the B1 step is
// exactly the one the band asks for — the learner stops naming what he pays and
// starts relating what a country produces to what it consumes.
//
// ⚠️ BOUNDARIES HONOURED, both issued centrally:
//   • QUANTITY ABSTRACTION (औसत, अनुपात, दर, स्तर, पैमाना, मात्रा, बहुमत,
//     अल्पमत) IS BLOCK 1's, in u63. This unit wanted **दर** ("a rate") badly —
//     an economy unit without "the rate of inflation" is thinner than it should
//     be — and did not take it. `check-front.mjs` reports दर FREE; it is left
//     free on purpose. The gap is named, not filled.
//   • u85 अनुबंध और मोलभाव (this block) owns the DEAL: थोक, फुटकर, रकम, भुगतान,
//     छूट, मोलभाव. This unit stays macro, that one stays at the counter.
//
// ⚠️ TWO FRONTS WANTED AND REFUSED, and both refusals are worth copying:
//   • कर ("a tax") — FREE as a front and REFUSED ANYWAY. कर is the BARE STEM of
//     करना, which `scope-hi.mjs` generates and which appears in hundreds of
//     sentences across the corpus ("कर सकता हूँ", "काम कर लो"). Carding it would
//     put a `type:produce` prompt reading "a tax" in front of a learner whose
//     every other sighting of कर has been the verb — the सोना-for-gold problem
//     (unit60.js) in a new place. ⚠️ AND IT WOULD NOT BREAK SCOPE: checked in
//     `scope-hi.mjs`, the precedence rule has an explicit `d !== bareStem` escape
//     so an explicit front equal to a verb's bare stem does NOT un-licence the
//     stem. So this is a PEDAGOGIC refusal, not a mechanical one, and a later
//     seat may overturn it. TAX IS TAUGHT NOWHERE IN HINDI — named as a gap.
//   • आमदनी ("income") — refused on GLOSS: कमाई (u37) is "earnings" and
//     **accepts "income"**. आय took the slot instead and is glossed "revenue",
//     which is a third word.
//
// 🚨 THREE SUBSTRING TRAPS, AND THE FIRST IS THE REASON TWO CARDS SIT IN
// DIFFERENT LESSONS. `isLetter` is /\p{L}/ only (src/store/cardRouting.js), so a
// MĀTRĀ does NOT block a `findWholeWord` match:
//   • **आयात ⊃ आय** — आय followed by ा, which is \p{M}. Both are this unit's own
//     fronts, so they are deliberately split: आय is l1, आयात is l3, and NEITHER
//     sentence in either card contains the other word. A same-lesson pair here
//     would have been a cloze with two right answers.
//   • **बेरोज़गारी ⊃ रोज़गार** — े and ी are both \p{M}. Split the same way:
//     रोज़गार is l3, बेरोज़गारी is l4.
//   • **मज़दूरी ⊃ मज़दूर (u28) and गरीबी ⊃ गरीब (u42)** — cross-unit, same shape.
//     Checked both directions: no u28 or u42 drill contains the derived form, and
//     neither of this unit's drills contains the base.
//   NOT A TRAP, checked rather than assumed: अर्थव्यवस्था ⊃ nothing taught;
//   कारोबार ⊃ बार? (not a front); लेनदेन ⊃ neither लेन nor देन is a front.
//
// ⚠️ TWO DERIVED NOUNS OF TAUGHT WORDS, both legal and both in a different unit
// from their base — the corpus's own precedent (खेल/खेलना u41/u26, नाप/नापना,
// तैयारी/तैयार): **मज़दूरी** from मज़दूर (u28l?) and **गरीबी** from गरीब (u42l?).
// Each is a genuinely different concept, not a second mastery track for the base:
// a मज़दूर is a person and मज़दूरी is what he is paid.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: अर्थव्यवस्था, आय, लागत, समृद्धि, पूँजी, मुद्रा, माँग, आपूर्ति,
//   मंदी, बेरोज़गारी, मज़दूरी, गरीबी, खपत. **आय, लागत, माँग and खपत are
//   CONSONANT-FINAL**, so nothing in the shape says so — माँग बढ़ी, not बढ़ा — and
//   those four are the ones in the unit a learner cannot predict.
//   MASCULINE: उद्योग, उत्पादन, निवेश, शेयर, लेनदेन, घाटा, व्यापार, निर्यात,
//   आयात, रोज़गार, कारोबार. **निर्यात, आयात and रोज़गार are consonant-final
//   masculine and their plural is the bare form** — दो उद्योग, तीन निर्यात.
// RETROFLEX/DENTAL (§1b): no new collision. उत्पादन utpaadan, लागत laagat,
// निर्यात niryaat, आयात aayaat and खपत khapat are all DENTAL त with no retroflex
// twin anywhere in the corpus (no उत्पाडन, no लागट). The doubling hatch fires
// nowhere in this unit. समृद्धि carries ृ (read **ri**) and the द्धि conjunct.
// LOANWORD FREE-PASS CHECK (§9), measured with the real `checkProduce`:
//   शेयर sheyar → glossed "a stake in a company", never "a share" — हिस्सा
//   (u19l?) already ACCEPTS "a share", so the gloss had to move anyway. Zero free
//   passes in this unit.
export const HI_UNIT76 = {
  id: "hi-u76",
  lang: "hi",
  title: "अर्थव्यवस्था",
  order: 76,
  stage: "b1",
  lessons: [
    {
      id: "hi-u76l1",
      unit: 76,
      lesson: 1,
      title: "What a country earns",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about an economy, an industry and production — and about revenue, the cost of making something, and prosperity.",
      items: [
        { id: "hi-u76l1-arthavyavasthaa", type: "vocab", front: "अर्थव्यवस्था", reading: "arthavyavasthaa", meaning: "an economy", accept: ["a country's economic system", "how a country's money works as a whole"], example: { jp: "किसी देश की अर्थव्यवस्था एक दिन में नहीं बनती।", en: "A country's economy is not built in a day." }, drill: { jp: "इस देश की अर्थव्यवस्था बड़ी है", en: "This country's economy is large" }, hint: "AR-THA-VYA-VAS-THAA — ⚠️ FEMININE: अर्थव्यवस्था बड़ी है. Two words joined: अर्थ (wealth) plus व्यवस्था (an arrangement). Both थ are DENTAL. The र् is र with a halant, drawn as the hook over the next letter." },
        { id: "hi-u76l1-udyog", type: "vocab", front: "उद्योग", reading: "udyog", meaning: "an industry", accept: ["a whole branch of manufacture", "the trade of making one kind of thing"], example: { jp: "इस शहर का कपड़ा उद्योग सौ साल पुराना है।", en: "This city's cloth industry is a hundred years old." }, drill: { jp: "इस शहर का कपड़ा उद्योग पुराना है", en: "This city's cloth industry is old" }, hint: "UD-YOG, masculine, consonant-final: दो उद्योग. The द्य is DENTAL द and य stacked. Not कारखाना (unit 60), which is ONE factory — an उद्योग is every factory making the same thing." },
        { id: "hi-u76l1-utpaadan", type: "vocab", front: "उत्पादन", reading: "utpaadan", meaning: "production", accept: ["the making of goods", "output"], example: { jp: "बारिश कम हुई इसलिए दूध का उत्पादन घट गया।", en: "There was less rain, so milk production fell." }, drill: { jp: "इस साल दूध का उत्पादन कम हुआ", en: "Milk production was low this year" }, hint: "UT-PAA-DAN, masculine. The त् is a DENTAL त with the halant. ⚠️ Not बनाना, to make (unit 31) — उत्पादन is the quantity a country or a factory makes, counted up." },
        { id: "hi-u76l1-aay", type: "vocab", front: "आय", reading: "aay", meaning: "revenue", accept: ["the money a state or a business takes in", "receipts"], example: { jp: "सरकार की आय हर साल बढ़ती जाती है।", en: "A government's revenue goes on rising every year." }, drill: { jp: "सरकार की आय इस साल बढ़ी", en: "The government's revenue rose this year" }, hint: "AAY — ⚠️ FEMININE and CONSONANT-FINAL: आय बढ़ी, not बढ़ा. ⚠️ NOT कमाई (unit 37), which is 'earnings' and ACCEPTS 'income' — आय is the formal word a government or a company uses. ⚠️ And it hides inside आयात (l3), so the two are taught in different lessons." },
        { id: "hi-u76l1-laagat", type: "vocab", front: "लागत", reading: "laagat", meaning: "the cost of producing something", accept: ["what it costs to make a thing", "production cost"], example: { jp: "लागत बढ़ने से चीज़ों की कीमत भी बढ़ती है।", en: "When the cost of production rises, the price of things rises too." }, drill: { jp: "लागत बढ़ने से कीमत भी बढ़ती है", en: "When cost rises, price rises too" }, hint: "LAA-GAT — ⚠️ FEMININE and CONSONANT-FINAL: लागत ज़्यादा है. DENTAL त. ⚠️ Three money words, three jobs: लागत is what it cost YOU to make, कीमत (unit 18) is what the buyer pays, खर्च (unit 37) is what you spent on anything." },
        { id: "hi-u76l1-samriddhi", type: "vocab", front: "समृद्धि", reading: "samriddhi", meaning: "prosperity", accept: ["a time of plenty", "being well off as a country"], example: { jp: "उद्योग से गाँवों में समृद्धि आई।", en: "Industry brought prosperity to the villages." }, drill: { jp: "उद्योग से गाँवों में समृद्धि आई", en: "Industry brought prosperity to the villages" }, hint: "SA-MRID-DHI — ⚠️ FEMININE. It carries ृ, ऋ's MĀTRĀ, read **ri** — your fourth sighting after कृपया, दृश्य and प्राकृतिक. The द्धि is द and ध stacked, both DENTAL. Not अमीर, rich (unit 42), which is one person." },
      ],
    },
    {
      id: "hi-u76l2",
      unit: 76,
      lesson: 2,
      title: "Putting money in",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about capital, investment, a stake in a company, a currency, dealings and a deficit.",
      items: [
        { id: "hi-u76l2-puunjii", type: "vocab", front: "पूँजी", reading: "puunjii", meaning: "capital", accept: ["money put into a business to start it", "the fund a business runs on"], example: { jp: "नया कारोबार शुरू करने के लिए पूँजी चाहिए।", en: "Capital is needed to start a new line of trade." }, drill: { jp: "नया काम शुरू करने के लिए पूँजी चाहिए", en: "Capital is needed to start new work" }, hint: "PUUN-JII — ⚠️ FEMININE, long uu with ँ over it: the ँ is written **n** (§1). Not पैसा, money (unit 18): पूँजी is money that has been SET ASIDE to make more money." },
        { id: "hi-u76l2-nivesh", type: "vocab", front: "निवेश", reading: "nivesh", meaning: "investment", accept: ["money put in to earn a return", "the putting in of capital"], example: { jp: "सरकार ने इस इलाके में बड़ा निवेश किया।", en: "The government made a large investment in this area." }, drill: { jp: "सरकार ने इस इलाके में निवेश किया", en: "The government made an investment in this area" }, hint: "NI-VESH, masculine, consonant-final: दो निवेश. Its verb is करना — निवेश करना. Not बचत (unit 37), savings: बचत sits still, निवेश is put to work." },
        { id: "hi-u76l2-sheyar", type: "vocab", front: "शेयर", reading: "sheyar", meaning: "a stake in a company", accept: ["a holding in a company", "a unit of ownership traded on the market"], example: { jp: "उसने कंपनी के शेयर खरीदे और बेचे।", en: "He bought and sold the company's shares." }, drill: { jp: "उसने कंपनी के शेयर खरीदे", en: "He bought the company's shares" }, hint: "SHE-YAR, masculine, consonant-final: दो शेयर. ⚠️ Glossed 'a stake in a company' because हिस्सा (unit 19) already ACCEPTS 'a share' — and a loanword may not gloss to its own reading (§9) either. English in, Hindi grammar: शेयर बाज़ार is the stock market." },
        { id: "hi-u76l2-mudraa", type: "vocab", front: "मुद्रा", reading: "mudraa", meaning: "a currency", accept: ["the money a country uses", "a national unit of money"], example: { jp: "हर देश की अपनी मुद्रा होती है।", en: "Every country has its own currency." }, drill: { jp: "हर देश की अपनी मुद्रा होती है", en: "Every country has its own currency" }, hint: "MUD-RAA — ⚠️ FEMININE despite the -ा, like आपदा and गुफ़ा (unit 75). DENTAL द with a halant. Not रुपया (unit 18), which is ONE currency — मुद्रा is the class." },
        { id: "hi-u76l2-lenden", type: "vocab", front: "लेनदेन", reading: "lenden", meaning: "dealings", accept: ["a transaction", "the giving and taking of money"], example: { jp: "इन दोनों कंपनियों का लेनदेन बहुत पुराना है।", en: "The dealings between these two companies are very old." }, drill: { jp: "इन दोनों का लेनदेन बहुत पुराना है", en: "The dealings between these two are very old" }, hint: "LEN-DEN, masculine, consonant-final. Literally 'taking-giving', built from लेना and देना (unit 18) — and neither लेन nor देन is a card of its own, so the compound needed one. Also used of a relationship: उनसे कोई लेनदेन नहीं है." },
        { id: "hi-u76l2-ghaataa", type: "vocab", front: "घाटा", reading: "ghaataa", meaning: "a shortfall in the books", accept: ["a deficit", "running at less than you spend"], example: { jp: "इस साल कंपनी को बड़ा घाटा हुआ।", en: "The company ran a large deficit this year." }, drill: { jp: "इस साल कंपनी को घाटा हुआ", en: "The company ran a deficit this year" }, hint: "GHAA-TAA, masculine, regular -ा, RETROFLEX ट. घ is gh with a puff of air. ⚠️ Not नुकसान (unit 37), which is 'a loss' and accepts 'damage' — a घाटा is the arithmetic, the gap between what came in and what went out." },
      ],
    },
    {
      id: "hi-u76l3",
      unit: 76,
      lesson: 3,
      title: "Demand, supply and trade",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about demand and supply, about commerce, about what a country exports and imports, and about the work available in it.",
      items: [
        { id: "hi-u76l3-maang", type: "vocab", front: "माँग", reading: "maang", meaning: "demand", accept: ["how much people want to buy", "the call for a thing"], example: { jp: "गरमी में ठंडे पानी की माँग बढ़ जाती है।", en: "In the heat the demand for cold water goes up." }, drill: { jp: "गरमी में ठंडे पानी की माँग बढ़ती है", en: "In the heat the demand for cold water rises" }, hint: "MAANG — ⚠️ FEMININE and CONSONANT-FINAL: माँग बढ़ी, not बढ़ा. The ँ is written n (§1). ⚠️ The verb माँगना, to ask for (unit 18), is the same root, and this is the NOUN of the market: कीमत माँग से तय होती है." },
        { id: "hi-u76l3-aapuurti", type: "vocab", front: "आपूर्ति", reading: "aapuurti", meaning: "supply", accept: ["how much is available to buy", "the delivering of goods to a market"], example: { jp: "माँग ज़्यादा थी और आपूर्ति कम।", en: "Demand was high and supply low." }, drill: { jp: "इस साल आपूर्ति बहुत कम रही", en: "Supply was very low this year" }, hint: "AA-PUUR-TI — ⚠️ FEMININE. Long uu with र् stacked over the त. DENTAL त. The pair माँग और आपूर्ति is how a Hindi newspaper says 'supply and demand', in the opposite order from English." },
        { id: "hi-u76l3-vyaapaar", type: "vocab", front: "व्यापार", reading: "vyaapaar", meaning: "commerce", accept: ["buying and selling as an activity", "trade between places"], example: { jp: "दोनों देशों के बीच व्यापार बढ़ रहा है।", en: "Commerce between the two countries is growing." }, drill: { jp: "दोनों देशों के बीच व्यापार बढ़ रहा है", en: "Commerce between the two countries is growing" }, hint: "VYAA-PAAR, masculine, consonant-final. The व्य is व and य stacked. ⚠️ Glossed 'commerce' because बेचना (unit 18) ACCEPTS 'to trade'. व्यापार is the activity in the abstract; कारोबार (l4) is the particular trade one person is in." },
        { id: "hi-u76l3-niryaat", type: "vocab", front: "निर्यात", reading: "niryaat", meaning: "export", accept: ["goods sent out of the country", "the sending of goods abroad"], example: { jp: "भारत से कपड़े का निर्यात बहुत होता है।", en: "A great deal of cloth is exported from India." }, drill: { jp: "यहाँ से कपड़े का निर्यात बहुत होता है", en: "A great deal of cloth is exported from here" }, hint: "NIR-YAAT, masculine, consonant-final, DENTAL त. The र् is the hook over the य. निर् means 'out' — so निर्यात is the going-out and आयात (l4) the coming-in. Verb: निर्यात करना." },
        { id: "hi-u76l3-khapat", type: "vocab", front: "खपत", reading: "khapat", meaning: "consumption", accept: ["how much of a thing gets used up", "the using up of goods"], example: { jp: "शहर में बिजली की खपत गाँव से ज़्यादा है।", en: "Electricity consumption in the city is higher than in the village." }, drill: { jp: "शहर में बिजली की खपत ज़्यादा है", en: "Electricity consumption is high in the city" }, hint: "KHA-PAT — ⚠️ FEMININE and CONSONANT-FINAL: खपत बढ़ी. Plain ख — unit 1 §7 keeps ख़ uncarded. DENTAL त. From खपना, to be used up, which this course does not card." },
        { id: "hi-u76l3-rozgaar", type: "vocab", front: "रोज़गार", reading: "rozgaar", meaning: "the work available in a country", accept: ["a livelihood", "the means of earning open to people"], example: { jp: "नए उद्योग से गाँव में रोज़गार मिला।", en: "The new industry brought work to the village." }, drill: { jp: "नए उद्योग से गाँव में रोज़गार मिला", en: "The new industry brought work to the village" }, hint: "ROZ-GAAR, masculine, consonant-final, with ज़ — a z. ⚠️ NOT नौकरी (unit 8), which is 'a job' and ACCEPTS 'employment' — a नौकरी is one post, रोज़गार is whether there are any. ⚠️ It hides inside बेरोज़गारी (l4), so the two sit in different lessons." },
      ],
    },
    {
      id: "hi-u76l4",
      unit: 76,
      lesson: 4,
      title: "When the economy turns",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about imports, a line of trade, a recession, unemployment, wages and poverty.",
      items: [
        { id: "hi-u76l4-aayaat", type: "vocab", front: "आयात", reading: "aayaat", meaning: "import", accept: ["goods brought into the country", "the bringing in of goods from abroad"], example: { jp: "तेल का आयात हर साल बढ़ता जाता है।", en: "The import of oil goes on rising every year." }, drill: { jp: "तेल का आयात हर साल बढ़ता है", en: "Oil imports rise every year" }, hint: "AA-YAAT, masculine, consonant-final, DENTAL त. The opposite of निर्यात (l3) and the two are always said together: आयात-निर्यात. ⚠️ It CONTAINS आय, revenue (l1), because the ा after it is a mātrā and does not block the match — which is why those two cards are in different lessons." },
        { id: "hi-u76l4-kaarobaar", type: "vocab", front: "कारोबार", reading: "kaarobaar", meaning: "a line of trade", accept: ["the trade somebody is in", "one's commercial dealings"], example: { jp: "उसका कारोबार कपड़े का है और अच्छा चलता है।", en: "His line of trade is cloth and it goes well." }, drill: { jp: "उसका कारोबार कपड़े का है", en: "His line of trade is cloth" }, hint: "KAA-RO-BAAR, masculine, consonant-final. ⚠️ Glossed 'a line of trade' because कंपनी (unit 28) ACCEPTS 'a business'. कारोबार is what a person DOES for money, company or no company — and कारोबार चलाना is to run it." },
        { id: "hi-u76l4-mandii", type: "vocab", front: "मंदी", reading: "mandii", meaning: "a recession", accept: ["a slump in trade", "a time when business is slow"], example: { jp: "मंदी के समय लोग कम खर्च करते हैं।", en: "In a recession people spend less." }, drill: { jp: "मंदी के समय लोग कम खर्च करते हैं", en: "In a recession people spend less" }, hint: "MAN-DII — ⚠️ FEMININE: मंदी आई. From मंद, slow, which this course does not card. Its ं comes before द, a DENTAL stop, so §1's homorganic rule still gives n. The opposite is तेज़ी, which is also uncarded — named as a gap." },
        { id: "hi-u76l4-berozgaarii", type: "vocab", front: "बेरोज़गारी", reading: "berozgaarii", meaning: "unemployment", accept: ["having no work to be had", "the state of there being no jobs"], example: { jp: "मंदी में बेरोज़गारी बहुत बढ़ जाती है।", en: "In a recession unemployment rises a great deal." }, drill: { jp: "मंदी में बेरोज़गारी बहुत बढ़ती है", en: "Unemployment rises a great deal in a recession" }, hint: "BE-ROZ-GAA-RII — ⚠️ FEMININE. बे- is the prefix that reverses (unit 81 teaches it as a class) on रोज़गार (l3), plus -ी. ⚠️ It CONTAINS रोज़गार, so the two cards sit in different lessons and neither sentence uses the other word." },
        { id: "hi-u76l4-mazduurii", type: "vocab", front: "मज़दूरी", reading: "mazduurii", meaning: "wages", accept: ["a day's pay for manual work", "what a labourer is paid"], example: { jp: "खेत में काम की मज़दूरी रोज़ मिलती है।", en: "The wages for work in the field are paid daily." }, drill: { jp: "खेत में काम की मज़दूरी रोज़ मिलती है", en: "The wages for field work are paid daily" }, hint: "MAZ-DUU-RII — ⚠️ FEMININE, with ज़ — a z. The noun of मज़दूर, a labourer (unit 28), in a different unit — the नाप/नापना precedent. A मज़दूर is the person, मज़दूरी is the money, so they are two words and not two mastery tracks." },
        { id: "hi-u76l4-gariibii", type: "vocab", front: "गरीबी", reading: "gariibii", meaning: "poverty", accept: ["being poor as a condition", "having nothing, as a state of a place"], example: { jp: "रोज़गार मिलने से गाँव की गरीबी कम हुई।", en: "Poverty in the village fell when work became available." }, drill: { jp: "रोज़गार मिलने से गरीबी कम हुई", en: "Poverty fell when work became available" }, hint: "GA-RII-BII — ⚠️ FEMININE. The noun of गरीब, poor (unit 42), and plain ग — unit 1 §7 keeps ग़ uncarded. गरीब describes a person; गरीबी is the condition a whole place can be in." },
      ],
    },
  ],
};
