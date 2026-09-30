// HI Unit 59 — जन्म से बुढ़ापे तक ("From birth to old age") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 3. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 10 (A2)"). MEASURED HOLE: **the life
// cycle was 7 of 30, and the extended family was 0 of 8.** u10 परिवार taught the
// household you are born into — माँ, पिता, बेटा, बेटी, पति, पत्नी, भाई, बहन, the
// four uncle-and-aunt pairs, the four grandparents, रिश्तेदार, परिवार — plus शादी,
// जवान and बूढ़ा; u24 added बचपन and जन्म. So the corpus had a wedding and a
// childhood and **no bride, no bridegroom, no engagement, no divorce, no
// daughter-in-law, no son-in-law, no grandson, no nephew, no in-laws' house, no
// life, no death, no mourning, no grave, no will, no inheritance, no old age and
// no word for a relationship.** In Hindi the marriage words are the ones a learner
// hears first and most — an Indian conversation reaches शादी within minutes — so
// the gap was not at the edges of the topic, it was in the middle of it.
//
// ⚠️ WHY THE TITLE IS A PHRASE AND NOT A NOUN. जन्म (u24l4) plus बुढ़ापा (this unit,
// l4) with से…तक, both of which are taught fronts (u8l2, u23l2) — so the title is a
// sentence the learner can already read and it names the unit's arc exactly. The
// same choice as u54 and u56.
//
// ⚠️ NINE FRONTS WANTED AND REFUSED, and every one of the nine is TAKEN by a lower
// slot — the highest TAKEN rate of any unit in this block, because u10 and u24
// between them own the obvious half of this field:
//   शादी (u10l4) · जवान (u10l4) · बूढ़ा (u10l4) · रिश्तेदार (u10l3) · जन्म (u24l4) ·
//   बचपन (u24l1) · उम्र (u11l4) · पीढ़ी (u38l3) · पड़ोसी (u15l4). All nine are used
//   in this unit's sentences instead, which is exactly what the lower-slot rule is
//   for — and the unit is better for it, because a lesson about an engagement wants
//   शादी in the sentence rather than on a second card.
//   AND ONE REFUSED FOR NO ROOM: अनाथ (an orphan). NAMED FOR A LATER BLOCK with
//   पोती, भतीजी, भांजा, सगाई and विधवा.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: ज़िंदगी, जवानी, गोद, मंगनी, दुल्हन, बहू, वसीयत, विरासत, दोस्ती,
//   सालगिरह, कब्र. **गोद, दुल्हन, वसीयत, विरासत, सालगिरह and कब्र are
//   CONSONANT-FINAL**, so nothing in the shape says so — कब्र पुरानी है, not पुराना.
//   MASCULINE: दूल्हा, रिश्ता, बुढ़ापा, शोक, दामाद, पोता, भतीजा, ससुराल. ससुराल and
//   दामाद are consonant-final masculine; तलाक and मौत are the pair below.
//   ⚠️ **मौत IS FEMININE** (मौत आई, not आया) **and तलाक IS MASCULINE** — two
//   consonant-final abstract nouns in the same unit with opposite genders, and
//   nothing distinguishes them but learning it. Both hints say so.
//   पैदा is INVARIANT and only ever appears in पैदा होना — see its card.
//   जीना and पालना are VERBS, headworded -ना per §5.
//
// ⚠️ TWO NEAR-PAIRS AND ONE REAL TRAP:
//   • पालना paalnaa, to bring up, against पालना the NOUN (a cradle). The card is the
//     VERB, because that is what the corpus needs, and its hint names the noun sense
//     so the learner is not surprised by it. The reverse of झरना (u54l1) and बहाना
//     (u57l2), where the card was the noun.
//   • जवानी beside जवान (u10l4) and बुढ़ापा beside बूढ़ा (u10l4) — base and
//     derivative, permitted by RUNBOOK §4, and the derived noun is the new learning
//     (the state, not the adjective). 🚨 **MĀTRĀ-PREFIX TRAP: जवान IS A STRICT PREFIX
//     OF जवानी** and ी is \p{M}, so the router finds जवान inside जवानी. Checked
//     mechanically in both directions: u10l4's जवान drill does not contain जवानी, and
//     this unit's जवानी drill does not contain जवान. बूढ़ा/बुढ़ापा differ in the stem
//     vowel (बू against बु) so that pair cannot fire.
//   • दोस्ती beside दोस्त (u7l4) — same shape, same check, same result.
// RETROFLEX/DENTAL (§1b): no new pair. तलाक talaak, दामाद daamaad, वसीयत vasiiyat
// and विरासत viraasat are all DENTAL with no retroflex counterpart; पोता potaa is
// dental त against no retroflex पोटा. Checked against all 1152 readings.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT59 = {
  id: "hi-u59",
  lang: "hi",
  title: "जन्म से बुढ़ापे तक",
  order: 59,
  stage: "a2",
  lessons: [
    {
      id: "hi-u59l1",
      unit: 59,
      lesson: 1,
      title: "Being born and growing up",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say where and when someone was born, talk about a life and about being alive, and say who brought a child up.",
      items: [
        { id: "hi-u59l1-paidaa", type: "vocab", front: "पैदा", reading: "paidaa", meaning: "born", accept: ["brought into the world"], example: { jp: "मेरे पिता इसी गाँव में पैदा हुए थे।", en: "My father was born in this very village." }, drill: { jp: "मैं इसी शहर में पैदा हुआ", en: "I was born in this very city" }, hint: "PAI-DAA, INVARIANT — पैदा हुआ, पैदा हुई, पैदा हुए, and the पैदा itself never changes. The ऐ is the open vowel of unit 2. ⚠️ It ONLY appears with होना: पैदा होना, to be born, and पैदा करना, to produce." },
        { id: "hi-u59l1-zindagii", type: "vocab", front: "ज़िंदगी", reading: "zindagii", meaning: "a life", accept: ["one's lifetime", "living"], example: { jp: "उसने पूरी ज़िंदगी एक ही शहर में काट दी।", en: "He spent his whole life in one city." }, drill: { jp: "उसकी पूरी ज़िंदगी गाँव में बीती", en: "His whole life passed in the village" }, hint: "ZIN-DA-GII — ⚠️ FEMININE. With ज़ — a z — and the ं before द is the matching dental nasal. The life a person lives, where जान is the life in a body: ज़िंदगी अच्छी है, but जान बची." },
        { id: "hi-u59l1-jiinaa", type: "vocab", front: "जीना", reading: "jiinaa", meaning: "to be alive", accept: ["stay alive", "to get through life"], example: { jp: "इतनी मुश्किल में भी वह हँसकर जीता है।", en: "Even in such difficulty he lives laughing." }, drill: { jp: "अकेले जीना बहुत मुश्किल है", en: "Living alone is very difficult" }, hint: "JII-NAA, long ii. Not रहना (unit 8), which is to live IN a place — जीना is being alive at all: जीना मुश्किल है. Its stem ends in a vowel, so the past is जिया, with a SHORT i." },
        { id: "hi-u59l1-javaanii", type: "vocab", front: "जवानी", reading: "javaanii", meaning: "youth", accept: ["being young", "the young years"], example: { jp: "जवानी में उसने बहुत मेहनत की और अब आराम कर रहा है।", en: "In his youth he worked very hard and now he is resting." }, drill: { jp: "जवानी में मैंने बहुत मेहनत की", en: "In my youth I worked very hard" }, hint: "JA-VAA-NII — ⚠️ FEMININE. Built off जवान, young (unit 10) — the STATE of being young, where जवान is the adjective. बचपन (unit 24) comes before it and बुढ़ापा (lesson 4) after it, so the three make a set." },
        { id: "hi-u59l1-paalnaa", type: "vocab", front: "पालना", reading: "paalnaa", meaning: "to bring up", accept: ["rear", "to raise a child"], example: { jp: "दादी ने हम चारों बच्चों को अकेले पाला।", en: "Grandmother brought up all four of us children alone." }, drill: { jp: "चार बच्चों को पालना आसान नहीं है", en: "Bringing up four children is not easy" }, hint: "PAAL-NAA. ⚠️ There is ALSO a noun पालना, a cradle — this card is the VERB, the mirror of झरना (unit 54) and बहाना (unit 57), where the card was the noun. Of children and of animals alike: कुत्ता पालना, to keep a dog." },
        { id: "hi-u59l1-god", type: "vocab", front: "गोद", reading: "god", meaning: "a lap", accept: ["someone's lap"], example: { jp: "बच्चा माँ की गोद में सो गया।", en: "The child fell asleep in his mother's lap." }, drill: { jp: "बच्चा माँ की गोद में बैठा है", en: "The child is sitting in his mother's lap" }, hint: "GOD — ⚠️ FEMININE, consonant-final, so the shape tells you nothing: गोद खाली है. DENTAL द, tongue on the teeth. गोद लेना means to adopt a child, which is the sense a form asks about." },
      ],
    },
    {
      id: "hi-u59l2",
      unit: 59,
      lesson: 2,
      title: "Getting married",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Talk about an engagement and a wedding — the bride, the bridegroom, the match, the new household — and about a divorce.",
      items: [
        { id: "hi-u59l2-manganii", type: "vocab", front: "मंगनी", reading: "manganii", meaning: "an engagement", accept: ["a betrothal"], example: { jp: "शादी से छह महीने पहले उनकी मंगनी हुई थी।", en: "Their engagement had taken place six months before the wedding." }, drill: { jp: "उनकी मंगनी पिछले साल हुई थी", en: "Their engagement took place last year" }, hint: "MAN-GA-NII — ⚠️ FEMININE. The ं before ग is the matching nasal. The verb is होना: मंगनी होना. The families agree first and the शादी follows, sometimes a year later — so the two are separate events with separate words." },
        { id: "hi-u59l2-dulhan", type: "vocab", front: "दुल्हन", reading: "dulhan", meaning: "a bride", accept: [], example: { jp: "दुल्हन के हाथों पर मेहँदी लगी थी।", en: "There was henna on the bride's hands." }, drill: { jp: "दुल्हन के हाथ पर मेहँदी थी", en: "There was henna on the bride's hand" }, hint: "DUL-HAN — ⚠️ FEMININE, consonant-final — दुल्हन सुंदर लगी. GEMINATION: ल्ह is ल then ह, both heard. Only on the wedding day and for a while after; then she is a बहू (lesson 3) in her new house." },
        { id: "hi-u59l2-duulhaa", type: "vocab", front: "दूल्हा", reading: "duulhaa", meaning: "a bridegroom", accept: ["a groom"], example: { jp: "दूल्हा घोड़े पर बैठकर आया।", en: "The bridegroom came riding on a horse." }, drill: { jp: "दूल्हा घोड़े पर बैठकर आया", en: "The bridegroom came riding on a horse" }, hint: "DUUL-HAA, masculine and regular -ा. ⚠️ Read it against दुल्हन: the bride has a SHORT u and a doubled ल, the groom a LONG uu and a single one — dulhan against duulhaa, and §1's doubling is what carries it." },
        { id: "hi-u59l2-rishtaa", type: "vocab", front: "रिश्ता", reading: "rishtaa", meaning: "a relationship", accept: ["a tie between people", "a match"], example: { jp: "दोनों परिवारों का रिश्ता बहुत पुराना है।", en: "The relationship between the two families is very old." }, drill: { jp: "दोनों परिवारों का रिश्ता पुराना है", en: "The relationship between the two families is old" }, hint: "RISH-TAA, masculine and regular -ा, RETROFLEX ट. रिश्तेदार, a relative (unit 10), is built off its oblique रिश्ते. ⚠️ AND IT MEANS A MARRIAGE PROPOSAL TOO: रिश्ता आया है means a match has been offered." },
        { id: "hi-u59l2-sasuraal", type: "vocab", front: "ससुराल", reading: "sasuraal", meaning: "the in-laws home", accept: ["a married woman's new family home"], example: { jp: "शादी के बाद वह अपने ससुराल चली गई।", en: "After the wedding she went away to her in-laws' home." }, drill: { jp: "शादी के बाद वह ससुराल चली गई", en: "After the wedding she went to her in-laws' home" }, hint: "SA-SU-RAAL, masculine and consonant-final: ससुराल दूर है. ⚠️ It is a PLACE, not the people — the house a woman moves to after marriage, and one of the most used words in Indian family talk. Her own parents' house is मायका." },
        { id: "hi-u59l2-talaak", type: "vocab", front: "तलाक", reading: "talaak", meaning: "a divorce", accept: [], example: { jp: "दो साल बाद उन दोनों का तलाक हो गया।", en: "After two years the two of them got divorced." }, drill: { jp: "दो साल बाद उनका तलाक हो गया", en: "After two years they got divorced" }, hint: "TA-LAAK, ⚠️ MASCULINE and consonant-final — तलाक हुआ, not हुई — and note that मौत (lesson 4), the same shape of word, is FEMININE. Nothing tells you but learning it. DENTAL त, plain क." },
      ],
    },
    {
      id: "hi-u59l3",
      unit: 59,
      lesson: 3,
      title: "The people a marriage brings",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name the relatives u10 left out — a daughter-in-law, a son-in-law, a grandson, a nephew — and talk about friendship and an anniversary.",
      items: [
        { id: "hi-u59l3-bahuu", type: "vocab", front: "बहू", reading: "bahuu", meaning: "a daughter-in-law", accept: ["a son's wife"], example: { jp: "उनकी बहू शहर में काम करती है।", en: "Their daughter-in-law works in the city." }, drill: { jp: "उनकी बहू शहर में काम करती है", en: "Their daughter-in-law works in the city" }, hint: "BA-HUU — ⚠️ FEMININE, long uu. ⚠️ Read it against बहन bahan, a sister (unit 10): two letters shared, completely different relation. The son's wife, and the word an Indian mother-in-law uses constantly." },
        { id: "hi-u59l3-daamaad", type: "vocab", front: "दामाद", reading: "daamaad", meaning: "a son-in-law", accept: ["a daughter's husband"], example: { jp: "उनका दामाद डॉक्टर है और दूसरे शहर में रहता है।", en: "Their son-in-law is a doctor and lives in another city." }, drill: { jp: "उनका दामाद दूसरे शहर में रहता है", en: "Their son-in-law lives in another city" }, hint: "DAA-MAAD, masculine and consonant-final: दामाद आया. Two DENTAL द, tongue on the teeth both times. The mirror of बहू, and in Indian custom the दामाद is the honoured guest where the बहू is family." },
        { id: "hi-u59l3-potaa", type: "vocab", front: "पोता", reading: "potaa", meaning: "a grandson", accept: ["a son's son"], example: { jp: "दादा जी अपने पोते के साथ रोज़ पार्क जाते हैं।", en: "Grandfather goes to the park every day with his grandson." }, drill: { jp: "दादा जी अपने पोते के साथ जाते हैं", en: "Grandfather goes with his grandson" }, hint: "PO-TAA, masculine and regular -ा — पोती is a granddaughter, and that is a different relation, not an agreement form. DENTAL त. ⚠️ SPECIFICALLY THE SON'S son: the daughter's son is a नाती, which Hindi keeps separate the way u10 kept दादा and नाना separate." },
        { id: "hi-u59l3-bhatiijaa", type: "vocab", front: "भतीजा", reading: "bhatiijaa", meaning: "a nephew", accept: ["a brother's son"], example: { jp: "मेरा भतीजा इस साल कक्षा दस में आया।", en: "My nephew reached class ten this year." }, drill: { jp: "मेरा भतीजा इस साल कक्षा दस में है", en: "My nephew is in class ten this year" }, hint: "BHA-TII-JAA, masculine and regular -ा — भतीजी is a niece. भ with a puff of air, DENTAL त. ⚠️ SPECIFICALLY THE BROTHER'S son; the sister's son is a भांजा. Hindi names the exact path of every relation, which is what u10's four uncles were about." },
        { id: "hi-u59l3-dostii", type: "vocab", front: "दोस्ती", reading: "dostii", meaning: "friendship", accept: ["being friends"], example: { jp: "उन दोनों की दोस्ती स्कूल के दिनों से है।", en: "The friendship between those two goes back to their school days." }, drill: { jp: "उन दोनों की दोस्ती बहुत पुरानी है", en: "The friendship between those two is very old" }, hint: "DOS-TII — ⚠️ FEMININE. Built off दोस्त, a friend (unit 7) — the STATE of being friends, the same way जवानी is built off जवान. DENTAL त. दोस्ती करना is to make friends." },
        { id: "hi-u59l3-saalgirah", type: "vocab", front: "सालगिरह", reading: "saalgirah", meaning: "an anniversary", accept: ["a wedding anniversary"], example: { jp: "आज उनकी शादी की पचासवीं सालगिरह है।", en: "Today is their fiftieth wedding anniversary." }, drill: { jp: "आज उनकी शादी की सालगिरह है", en: "Today is their wedding anniversary" }, hint: "SAAL-GI-RAH — ⚠️ FEMININE, consonant-final: सालगिरह अच्छी थी. You know the first half: साल, a year (unit 17). ⚠️ In everyday speech it also means a BIRTHDAY, though जन्मदिन (unit 17) is the clearer word for that." },
      ],
    },
    {
      id: "hi-u59l4",
      unit: 59,
      lesson: 4,
      title: "Old age, and the end of it",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Talk about old age and death without hedging — mourning, a grave, a will, an inheritance — which is what a real family conversation needs.",
      items: [
        { id: "hi-u59l4-burhaapaa", type: "vocab", front: "बुढ़ापा", reading: "burhaapaa", meaning: "old age", accept: ["one's later years"], example: { jp: "बुढ़ापे में सबसे ज़्यादा ज़रूरत साथ की होती है।", en: "In old age what is needed most is company." }, drill: { jp: "बुढ़ापे में सेहत का ध्यान ज़रूरी है", en: "In old age taking care of health is essential" }, hint: "BU-RHAA-PAA, masculine and regular -ा. Built off बूढ़ा, elderly (unit 10), with the -पा suffix — the same job as the -पन of अकेलापन (unit 52). ⚠️ The stem vowel SHORTENS: बूढ़ा has a long uu, बुढ़ापा a short u. ढ़ is the nukta flap, written rh." },
        { id: "hi-u59l4-maut", type: "vocab", front: "मौत", reading: "maut", meaning: "death", accept: ["dying"], example: { jp: "दादा जी की मौत के बाद घर बहुत चुप हो गया।", en: "After grandfather's death the house went very quiet." }, drill: { jp: "उनकी मौत के बाद घर चुप हो गया", en: "After his death the house went quiet" }, hint: "MAUT — ⚠️ FEMININE, consonant-final — मौत आई, not आया — and note तलाक (lesson 2), the same shape, is MASCULINE. The au is the open vowel of औ. DENTAL त. मरना (unit 24) is the verb; this is the event." },
        { id: "hi-u59l4-shok", type: "vocab", front: "शोक", reading: "शोक" ? "shok" : "", meaning: "mourning", accept: ["grieving for the dead"], example: { jp: "परिवार ने तेरह दिन शोक में बिताए।", en: "The family spent thirteen days in mourning." }, drill: { jp: "पूरा परिवार अभी शोक में है", en: "The whole family is in mourning" }, hint: "SHOK, masculine. ⚠️ Read it against शौक shauk, a keen interest (unit 27): शोक has the plain ो, शौक the open ौ, and one mātrā is the whole difference between grief and a hobby. Different from गम (unit 52), which is the feeling — शोक is the observed period." },
        { id: "hi-u59l4-kabr", type: "vocab", front: "कब्र", reading: "kabr", meaning: "a grave", accept: ["a burial place", "a tomb"], example: { jp: "वे हर साल अपने पिता की कब्र पर फूल रखते हैं।", en: "Every year they put flowers on their father's grave." }, drill: { jp: "वे कब्र पर फूल रखते हैं", en: "They put flowers on the grave" }, hint: "KABR — ⚠️ FEMININE, consonant-final: कब्र पुरानी है. The ब्र conjunct is ब and र stacked, said in one breath: kabr, not ka-bar — the same shape as सब्र (unit 52). Plain क." },
        { id: "hi-u59l4-vasiiyat", type: "vocab", front: "वसीयत", reading: "vasiiyat", meaning: "a will", accept: ["a testament"], example: { jp: "उन्होंने अपनी वसीयत में पूरा घर बेटी के नाम लिखा।", en: "In his will he put the whole house in his daughter's name." }, drill: { jp: "उन्होंने वसीयत में घर बेटी को दिया", en: "In his will he gave the house to his daughter" }, hint: "VA-SII-YAT — ⚠️ FEMININE, consonant-final: वसीयत तैयार है. DENTAL त. A written document, so the verbs are लिखना and बनाना. What is left BY it is विरासत, the next card." },
        { id: "hi-u59l4-viraasat", type: "vocab", front: "विरासत", reading: "viraasat", meaning: "an inheritance", accept: ["a legacy", "what is handed down"], example: { jp: "यह दुकान उन्हें अपने पिता से विरासत में मिली।", en: "They got this shop from their father as an inheritance." }, drill: { jp: "यह दुकान उन्हें विरासत में मिली", en: "They got this shop as an inheritance" }, hint: "VI-RAA-SAT — ⚠️ FEMININE, consonant-final: विरासत बड़ी थी. DENTAL स and त. Its frame is विरासत में मिलना, to be got as an inheritance. Of property AND of what a generation hands on — भाषा हमारी विरासत है." },
      ],
    },
  ],
};
