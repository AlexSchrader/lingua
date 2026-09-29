// HI Unit 37 — पैसे का हिसाब ("Keeping account of the money") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 1. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// WHY THIS SLOT KEPT ITS THEME. u18 बाज़ार और पैसा owns the SHOP — पैसा, रुपया,
// कीमत, हिसाब, ग्राहक, दुकानदार, महँगा, मुफ़्त, खरीदना, बेचना, किलो, थैला, सामान.
// The probe still found money at **4 of 16**: the course could buy something and
// could not describe a bill, a receipt, cash, credit, a debt, savings, interest,
// spending, a profit, a loss, a discount or tax. u18 is the transaction; this unit
// is what happens to the money afterwards.
//
// 🚨 खाता WAS DROPPED, AND IT IS THE BEST WARNING IN THIS BAND. "A bank account"
// is खाता — and खाता is ALSO the habitual of खाना, "eats". Carding it would have
// been legal by every mechanical check (no front duplicate, no reading duplicate,
// lint green) and it would have BROKEN FOUR EARLIER SENTENCES, because unit31.js
// §A6's precedence rule licenses a front from its OWN unit: u12l2's मैं रोज़ फल
// खाता हूँ, u13l2's, u13l3's and u21l2's would all have read as out of scope from
// u37 backwards. Measured before carding it, not after. जमा took its place.
// ⚠️ THE GENERAL RULE FOR BLOCKS 2 AND 3: **before you card a front, check whether
// the string is already an inflection of a taught verb.** `node -e` over HI_UNITS
// takes ten seconds and the four candidates most likely to bite are खाता (खाना),
// आता (आना), जाता (जाना) and करता (करना).
//
// ⚠️ THREE GLOSSES ARE LONGER THAN THE OBVIOUS ONE, TO CLEAR AN A1 accept[] ENTRY
// (§9 — `normalizeMeaning` strips parentheses, so the discriminator is a WORD):
//   • बिल is "a printed bill" — हिसाब (u18l4) IS "a bill", with "an account" in
//     its accept[].
//   • सिक्का is "a metal coin" — पैसा (u18l1) carries "a coin".
//   • नकद is "payment in cash" — पैसा also carries "cash".
// AND ONE SYNONYM WAS DROPPED: दाम, because कीमत (u18l2) is already "a price".
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   रसीद, किस्त, बचत, छूट, कमी are FEMININE — every one of them ends in a
//   CONSONANT, which is §4's unpredictable class, so this unit is the place the
//   rule gets drilled hardest. महँगाई and कमाई are FEMININE and look it.
//   बिल, नकद, नोट, उधार, कर्ज़, ब्याज, खर्च, बजट, टैक्स, मोल, भाव are MASCULINE,
//   and उधार, कर्ज़, ब्याज and खर्च end in consonants too — so the ending tells you
//   nothing here and the hint tells you everything.
//   सिक्का, बटुआ, मुनाफ़ा, सौदा, फ़ायदा are MASCULINE -ा, regular. जमा is INVARIANT.
//
// RETROFLEX/DENTAL: no new pair, checked against all 888 readings. रसीद rasiid
// (DENTAL द), नोट not, छूट chhuut, किस्त kist and सिक्का sikkaa have no counterpart
// in the corpus — no रसीड, नोत, छूत, किस्थ or सिक्खा — so §1(b)'s hatch fires
// nowhere new. सिक्का's doubled क is §1's GEMINATION, not the hatch.
//
// LOANWORD FREE-PASS CHECK (§9), measured with checkProduce: बिल bil ≠ "bill" ·
// नोट not ≠ "banknote" · टैक्स taiks ≠ "tax" · बजट bajat ≠ "budget". Zero passes.
export const HI_UNIT37 = {
  id: "hi-u37",
  lang: "hi",
  title: "पैसे का हिसाब",
  order: 37,
  stage: "a2",
  lessons: [
    {
      id: "hi-u37l1",
      unit: 37,
      lesson: 1,
      title: "Paying, and what you pay with",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Ask for the bill, pay in cash and keep the receipt.",
      items: [
        { id: "hi-u37l1-bil", type: "vocab", front: "बिल", reading: "bil", meaning: "a printed bill", accept: ["an invoice", "the paper you pay against", "a tab"], example: { jp: "होटल का बिल बहुत ज़्यादा था।", en: "The hotel bill was very high." }, drill: { jp: "मुझे इस काम का बिल चाहिए", en: "I need the bill for this work" }, hint: "BIL, MASCULINE, one syllable. हिसाब (u18) is the reckoning — what is owed, worked out. A बिल is the piece of paper it is written on, which is why a restaurant asks बिल लाऊँ? and not हिसाब लाऊँ?" },
        { id: "hi-u37l1-rasiid", type: "vocab", front: "रसीद", reading: "rasiid", meaning: "a receipt", accept: ["proof of payment", "a slip showing you paid"], example: { jp: "पैसे देने के बाद रसीद ले लो।", en: "Take the receipt after paying." }, drill: { jp: "यह रसीद अपने पास रखो", en: "Keep this receipt with you" }, hint: "RA-SIID, FEMININE, plural रसीदें, and the last letter is a DENTAL द. A बिल says what you owe; a रसीद says you have paid. पर्ची (u35) is any small slip; a रसीद is the one that proves something." },
        { id: "hi-u37l1-nakad", type: "vocab", front: "नकद", reading: "nakad", meaning: "payment in cash", accept: ["cash payment", "paying with notes", "hard cash"], example: { jp: "इस दुकान में सब काम नकद होता है।", en: "Everything at this shop is done in cash." }, drill: { jp: "मैंने यह सामान नकद खरीदा", en: "I bought these goods with cash" }, hint: "NA-KAD, MASCULINE, plain क. पैसा (u18) is money as a thing; नकद is money as a METHOD — cash rather than credit. नकद देना is to pay cash." },
        { id: "hi-u37l1-not", type: "vocab", front: "नोट", reading: "not", meaning: "a banknote", accept: ["a currency note", "a paper note of money"], example: { jp: "उसने मुझे सौ रुपये का नोट दिया।", en: "He gave me a hundred-rupee note." }, drill: { jp: "यह नोट बहुत पुराना है", en: "This note is very old" }, hint: "NOT, MASCULINE, retroflex ट, one syllable. A paper note of money — and also a written note, exactly as in English. सिक्का below is the metal one." },
        { id: "hi-u37l1-sikkaa", type: "vocab", front: "सिक्का", reading: "sikkaa", meaning: "a metal coin", accept: ["a coin of metal", "loose change", "small change"], example: { jp: "मेरे बटुए में तीन सिक्के थे।", en: "There were three coins in my wallet." }, drill: { jp: "यह सिक्का बहुत छोटा है", en: "This coin is very small" }, hint: "SIK-KAA, MASCULINE, plural सिक्के, with the doubled क of §1's gemination. पैसा (u18) already accepts 'a coin' as a loose sense, so this card is the metal object itself." },
        { id: "hi-u37l1-batuaa", type: "vocab", front: "बटुआ", reading: "batuaa", meaning: "a wallet", accept: ["a purse", "a money pouch"], example: { jp: "भीड़ में उसका बटुआ खो गया।", en: "His wallet was lost in the crowd." }, drill: { jp: "मेरा बटुआ मेज़ पर है", en: "My wallet is on the table" }, hint: "BA-TU-AA, MASCULINE, plural बटुए, three syllables and a retroflex ट. Small, soft and for notes and coins — a थैला (u18) is a shopping bag and an अटैची (u33) is a suitcase." },
      ],
    },
    {
      id: "hi-u37l2",
      unit: 37,
      lesson: 2,
      title: "Owing, saving and the bank",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about buying on credit, paying in instalments, and what you have put aside.",
      items: [
        { id: "hi-u37l2-udhaar", type: "vocab", front: "उधार", reading: "udhaar", meaning: "credit", accept: ["borrowing", "buying on tick", "on account"], example: { jp: "दुकानदार ने मुझे उधार दिया।", en: "The shopkeeper gave me credit." }, drill: { jp: "मैं उधार पर कुछ नहीं खरीदता", en: "I do not buy anything on credit" }, hint: "U-DHAAR, MASCULINE, uncountable, DENTAL ध. उधार लेना is to borrow, उधार देना is to lend — the same noun with either verb, which is how Hindi handles the pair English splits." },
        { id: "hi-u37l2-karz", type: "vocab", front: "कर्ज़", reading: "karz", meaning: "a debt", accept: ["a loan you owe", "money owed", "being in debt"], example: { jp: "उस पर बैंक का बड़ा कर्ज़ है।", en: "He has a big bank debt." }, drill: { jp: "उसका कर्ज़ अभी पूरा नहीं हुआ", en: "His debt is not fully paid yet" }, hint: "KARZ, MASCULINE, one syllable, with र् on the क and the ज़ of unit 4. उधार is the arrangement; कर्ज़ is the weight of it. उस पर कर्ज़ है — Hindi puts a debt ON a person." },
        { id: "hi-u37l2-kist", type: "vocab", front: "किस्त", reading: "kist", meaning: "an instalment", accept: ["a part payment", "one payment of many", "an EMI"], example: { jp: "गाड़ी की पहली किस्त कल देनी है।", en: "The car's first instalment is due tomorrow." }, drill: { jp: "हर महीने एक किस्त देते हैं", en: "We pay one instalment every month" }, hint: "KIST, FEMININE despite the consonant ending, plural किस्तें, with the स्त conjunct. किस्त देना or किस्त भरना is to pay one. Almost everything in India is bought this way." },
        { id: "hi-u37l2-bachat", type: "vocab", front: "बचत", reading: "bachat", meaning: "savings", accept: ["what you have put aside", "a saving made", "thrift"], example: { jp: "हर महीने थोड़ी बचत करना अच्छा है।", en: "Saving a little every month is good." }, drill: { jp: "इस साल हमारी बचत कम रही", en: "Our savings were low this year" }, hint: "BA-CHAT, FEMININE despite the consonant ending. From बचना (u24), to be left over — savings are what is LEFT, which is exactly how Hindi thinks about it. बचत करना is to save." },
        { id: "hi-u37l2-byaaj", type: "vocab", front: "ब्याज", reading: "byaaj", meaning: "interest on money", accept: ["bank interest", "what a loan costs you"], example: { jp: "इस कर्ज़ पर ब्याज बहुत ज़्यादा है।", en: "The interest on this loan is very high." }, drill: { jp: "बैंक हमें ब्याज देता है", en: "The bank gives us interest" }, hint: "BYAAJ, MASCULINE, uncountable, with the ब्य conjunct of unit 6. ⚠️ Nothing to do with being interested in something — that is दिलचस्पी, which Hindi keeps completely separate." },
        { id: "hi-u37l2-jamaa", type: "vocab", front: "जमा", reading: "jamaa", meaning: "deposited", accept: ["paid in", "put into an account", "collected up"], example: { jp: "मैंने बैंक में पैसे जमा किए।", en: "I deposited money at the bank." }, drill: { jp: "यह पैसा कल जमा करना है", en: "This money has to be deposited tomorrow" }, hint: "JA-MAA, INVARIANT — never जमी. जमा करना is to deposit or to collect together; जमा होना is to pile up. ⚠️ खाता, a bank account, is deliberately NOT taught in Hindi: it is also the everyday 'eats', from खाना (u12)." },
      ],
    },
    {
      id: "hi-u37l3",
      unit: 37,
      lesson: 3,
      title: "Spending, earning and what it comes to",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say what you spend, what you earn, and whether you made or lost on it.",
      items: [
        { id: "hi-u37l3-kharch", type: "vocab", front: "खर्च", reading: "kharch", meaning: "expenditure", accept: ["spending", "an expense", "the cost of running something"], example: { jp: "शहर में घर का खर्च बहुत है।", en: "The cost of running a house in the city is high." }, drill: { jp: "इस महीने हमारा खर्च ज़्यादा था", en: "Our spending was higher this month" }, hint: "KHARCH, MASCULINE, plain ख, with र् on the ख. खर्च करना is to spend. कीमत (u18) is what one thing costs; खर्च is what your whole month costs." },
        { id: "hi-u37l3-kamaaii", type: "vocab", front: "कमाई", reading: "kamaaii", meaning: "earnings", accept: ["income", "what you bring in", "takings"], example: { jp: "दुकान की कमाई इस साल अच्छी थी।", en: "The shop's earnings were good this year." }, drill: { jp: "उसकी कमाई से पूरा घर चलता है", en: "The whole household runs on her earnings" }, hint: "KA-MAA-II, FEMININE, uncountable — the noun of कमाना (u31l4). वेतन (u28) is a fixed monthly salary; कमाई is whatever comes in, which for most of India is the more useful word." },
        { id: "hi-u37l3-munaafaa", type: "vocab", front: "मुनाफ़ा", reading: "munaafaa", meaning: "a profit", accept: ["a gain on a sale", "margin", "what you make on it"], example: { jp: "उसने इस सौदे में अच्छा मुनाफ़ा कमाया।", en: "He made a good profit on this deal." }, drill: { jp: "इस काम में मुनाफ़ा कम है", en: "There is little profit in this work" }, hint: "MU-NAA-FAA, MASCULINE, plural मुनाफ़े, with the फ़ of unit 4. Strictly commercial — money made over what you paid. फ़ायदा in lesson 4 is the general benefit." },
        { id: "hi-u37l3-nuksaan", type: "vocab", front: "नुकसान", reading: "nuksaan", meaning: "a loss", accept: ["damage", "harm", "being out of pocket"], example: { jp: "बारिश से किसान का बड़ा नुकसान हुआ।", en: "The farmer suffered a big loss from the rain." }, drill: { jp: "इस सौदे में सिर्फ़ नुकसान हुआ", en: "There was only a loss on this deal" }, hint: "NUK-SAAN, MASCULINE, plain क. It covers money lost AND physical damage AND harm to a person — नुकसान होना is the all-purpose 'something bad happened'. The opposite of both मुनाफ़ा and फ़ायदा." },
        { id: "hi-u37l3-bajat", type: "vocab", front: "बजट", reading: "bajat", meaning: "a budget", accept: ["a spending plan", "what you have allowed for"], example: { jp: "यह गाड़ी मेरे बजट से बाहर है।", en: "This car is outside my budget." }, drill: { jp: "हमारा बजट इस साल छोटा है", en: "Our budget is small this year" }, hint: "BA-JAT, MASCULINE, retroflex ट. बजट से बाहर is 'over budget' — literally outside it, using बाहर from u5. The government's annual one is also called the बजट." },
        { id: "hi-u37l3-mahangaaii", type: "vocab", front: "महँगाई", reading: "mahangaaii", meaning: "the high cost of living", accept: ["inflation", "rising prices", "things being dear"], example: { jp: "आज महँगाई की वजह से खर्च बढ़ा है।", en: "Spending has gone up because of the high cost of living." }, drill: { jp: "शहर में महँगाई बहुत ज़्यादा है", en: "The cost of living in the city is very high" }, hint: "MA-HAN-GAA-II, FEMININE, uncountable — the noun of महँगा (u18), expensive. It is the word Indian newspapers and Indian kitchens both use daily, and it means inflation as felt, not as measured." },
      ],
    },
    {
      id: "hi-u37l4",
      unit: 37,
      lesson: 4,
      title: "Bargaining, tax and what runs short",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Ask for a discount, talk about the asking price, and say something is in short supply.",
      items: [
        { id: "hi-u37l4-chhuut", type: "vocab", front: "छूट", reading: "chhuut", meaning: "a discount", accept: ["a reduction", "money off", "a concession"], example: { jp: "इस कपड़े पर आज छूट है।", en: "There is a discount on this cloth today." }, drill: { jp: "इस दुकान में रोज़ छूट मिलती है", en: "You get a discount at this shop every day" }, hint: "CHHUUT, FEMININE despite the consonant ending, retroflex ट. छूट देना is to give a discount, छूट मिलना is to get one. It also means an exemption from a rule — the same idea of being let off." },
        { id: "hi-u37l4-mol", type: "vocab", front: "मोल", reading: "mol", meaning: "the asking price", accept: ["what is being asked for it", "a quoted price", "the going rate"], example: { jp: "दुकानदार ने इस थैले का मोल बताया।", en: "The shopkeeper told me the asking price of this bag." }, drill: { jp: "इस चीज़ का मोल बहुत ज़्यादा है", en: "The asking price of this thing is very high" }, hint: "MOL, MASCULINE, one syllable. कीमत (u18) is what a thing costs as a fact; मोल is what the seller SAYS, before you argue. मोल-भाव करना is to haggle, and it is expected." },
        { id: "hi-u37l4-saudaa", type: "vocab", front: "सौदा", reading: "saudaa", meaning: "a deal", accept: ["a bargain struck", "a transaction", "an agreement to buy"], example: { jp: "हमने अच्छे भाव पर सौदा किया।", en: "We struck a deal at a good rate." }, drill: { jp: "यह सौदा दोनों के लिए अच्छा है", en: "This deal is good for both sides" }, hint: "SAU-DAA, MASCULINE, plural सौदे, DENTAL द. सौदा करना is to close a deal; सौदा the same word also means the shopping you bring home from it. वादा (u30) is a promise, which a सौदा is not." },
        { id: "hi-u37l4-bhaav", type: "vocab", front: "भाव", reading: "bhaav", meaning: "the market rate", accept: ["the going rate", "the rate of the day", "how much it is trading at"], example: { jp: "आज बाज़ार में आटे का भाव कम है।", en: "The rate for flour in the market is low today." }, drill: { jp: "सब्ज़ी का भाव रोज़ बदलता है", en: "The rate for vegetables changes every day" }, hint: "BHAAV, MASCULINE, aspirated भ. The rate the whole market is running at today, which is why it changes daily and a कीमत does not. ⚠️ भाव also means a feeling or mood, in a completely different register." },
        { id: "hi-u37l4-taiks", type: "vocab", front: "टैक्स", reading: "taiks", meaning: "tax", accept: ["a tax", "duty paid to the government", "what you pay the state"], example: { jp: "हर दुकान को टैक्स देना होता है।", en: "Every shop has to pay tax." }, drill: { jp: "इस बिल में टैक्स भी है", en: "This bill includes tax too" }, hint: "TAIKS, MASCULINE, retroflex ट, one syllable with the क्स conjunct at the end. कर is the Hindi word and is used in writing; टैक्स is what a shopkeeper says. देना होता है means 'has to pay' — an obligation, u32's theme." },
        { id: "hi-u37l4-kamii", type: "vocab", front: "कमी", reading: "kamii", meaning: "a shortage", accept: ["a lack", "a shortfall", "something missing"], example: { jp: "गाँव में पानी की कमी है।", en: "There is a water shortage in the village." }, drill: { jp: "इस काम में पैसे की कमी है", en: "There is a shortage of money for this work" }, hint: "KA-MII, FEMININE, plural कमियाँ — the noun of कम (u1l2), less. X की कमी है is 'there is not enough X', and it is one of the most useful frames in Hindi. It also means a flaw in something." },
      ],
    },
  ],
};
