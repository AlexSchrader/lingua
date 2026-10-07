// HI Unit 103 — निगम और प्रतिस्पर्धा ("The corporation and competition") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 1 (u98–u110). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit98.js §C1–§C9.
//
// 🚨 SLOT RETHEMED. The scaffold title is "Business and negotiation", and
// NEGOTIATION IS SPENT TWICE: u85 इकरारनामा और मोलभाव owns the contract and the
// haggle outright — इकरारनामा, धारा, थोक, फुटकर, दलाल, बीमा, गिरवी, ठेका, वारंटी,
// हर्जाना, संपत्ति, पट्टा — and u76 अर्थव्यवस्था owns the economy — निवेश, शेयर,
// घाटा, पूँजी, लेनदेन, आयात, निर्यात, आपूर्ति, माँग, मज़दूरी, बेरोज़गारी, गरीबी,
// असमानता, उद्योग, खपत, लागत, लाभांश, कारोबार, व्यापार. u37 owns the money
// arithmetic and u18 the market itself.
// **BANKING MEASURED 15 OF 18 TAKEN and is allocated to NOBODY** (unit98.js §C7).
// WHAT u103 OWNS INSTEAD: **THE FIRM AS AN ORGANISM** — what a company IS, who
// owns and runs it, how it grows or dies, and how it reaches a buyer. Measured
// **0 of 24** on that pool. Nothing in u76 or u85 describes a निगम.
//
// ⚠️ THREE WORDS SURRENDERED TO OTHER BLOCKS BY unit98.js §C9, and each was in
// this unit's first draft:
//   • **सर्वेक्षण → u134 ONLY** (§C9.1). This unit cards no survey. लक्षित, aimed
//     at a chosen group, carries the marketing job instead.
//   • **राजस्व → u110 ONLY** (§C9.2), my own administration unit.
//   • **मंडी → u127 ONLY** (§C9.3), block 3's ports-and-trade unit.
//
// ⚠️ SIX MORE CANDIDATES REFUSED, and the उत्पाद one is the general rule:
//   • 🚨 **उत्पाद REFUSED ON THE DERIVATIVE COUNT.** उत्पादन is already carded at
//     u66l2 and this unit cards उत्पादक, the maker. A third card on the उत्पाद
//     root is what unit61.js §B4's derivative rule exists to stop — "a suffixed
//     noun is cardable after counting how many cards the root already carries",
//     and the count was already one. ✅ The two that DO ship are safe by routing
//     as well: उत्पाद is BLOCKED inside both उत्पादन and उत्पादक by the letter
//     that follows it. लक्षित took the freed slot.
//   • **सौदेबाज़ी REFUSED — it is u85's territory** (§C9: u85 owns the haggle) and
//     सौदा is already carded at u37l2.
//   • **कारोबारी REFUSED — कारोबार (u76) FIRES inside it** (the ी is a mātrā) and
//     the two are one lexeme, the businessman and the business.
//   • **बाज़ारू REFUSED — बाज़ार (u14l1) FIRES inside it**, same shape, and the
//     word means "cheap, vulgar" rather than anything commercial.
//   • **ग्राहकी REFUSED — ग्राहक (u18) carries the root** and ग्राहकी is dialectal.
//   • **पैकेजिंग and फ़्रेंचाइज़ी REFUSED as loanwords with no honest gloss** — the
//     only English word for each IS the gloss, and unit1.js §9 forbids a loanword
//     glossing to its own transliteration.
//   • Also drafted and left FREE: खुदरा (⚠️ but फुटकर, u85, is the same gloss
//     space — a later block should not card it either), उपभोग (⚠️ खपत, u76, owns
//     that gloss), माल (**u127's**), साख, खरीदार, विज्ञापनदाता.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4):
//   ⚠️ FEMININE: शाखा · प्रतिस्पर्धा · बिक्री.
//   ⚠️ **शाखा AND प्रतिस्पर्धा ARE FEMININE DESPITE THE -ा** — शाखा खुली, never
//   खुला; प्रतिस्पर्धा कड़ी है, never कड़ा. Same class as आलोचना and चर्चा (u61),
//   संरचना (u100), याचिका (u102).
//   ⚠️ **उपभोक्ता IS MASCULINE DESPITE THE -ा**, like पिता and राजा (unit1.js §4),
//   because it is a -ता AGENT noun and not a -ता ABSTRACT. **That contrast is the
//   trap of this unit**: निर्भरता and जटिलता (u100) are -ता abstracts and
//   feminine; उपभोक्ता is a -ता agent and masculine. The ending looks identical.
//   MASCULINE: निगम · उपक्रम · स्टार्टअप · मुख्यालय · निदेशक · हिस्सेदार ·
//   निवेशक · पूँजीपति · उद्यमी · परिचालन · विलय · अधिग्रहण · एकाधिकार ·
//   संरक्षणवाद · उत्पादक · वितरक · ब्रांड · विपणन · उपभोक्ता.
//   ⚠️ **निदेशक, हिस्सेदार, निवेशक, उद्यमी, उत्पादक AND वितरक DO NOT CHANGE FOR A
//   WOMAN** — the decision unit97.js recorded for कुलपति and u102 for न्यायाधीश.
//   INVARIANT ADJECTIVES: दिवालिया · लक्षित. ⚠️ **दिवालिया IS INVARIANT DESPITE
//   THE -आ**: दिवालिया कंपनी, दिवालिया आदमी — it is a Perso-Arabic loan and does
//   not inflect, which breaks the -आ/-ी rule the learner has used for 100 units.
//   NO VERB IS CARDED. Still ZERO 3rd-person exceptions in the whole language.
//
// ⚠️ SUBSTRING TRAPS, computed with `findWholeWord`'s real boundary test:
//   FIRES — मुख्य(u19l4) inside मुख्यालय · शक(u30l2) inside BOTH निवेशक and
//     निदेशक · देश(u8l2) inside निदेशक · पति(u10l1) inside पूँजीपति ·
//     पर(u23l1) inside परिचालन AND प्रतिस्पर्धा · एक(u2l1) inside एकाधिकार ·
//     या(u22l3) inside दिवालिया · से(u8l2) inside हिस्सेदार ·
//     का(u3, a glyph) inside एकाधिकार.
//   ✅ BLOCKED — निवेश(u76) inside निवेशक · पूँजी(u76) inside पूँजीपति ·
//     संरक्षण(u75) inside संरक्षणवाद · क्रम inside उपक्रम · उत्पाद inside
//     उत्पादक · प्रति(u93) inside प्रतिस्पर्धा · विज्ञापन inside nothing here.
//   **NO u103 FRONT MATCHES INSIDE ANOTHER WORD** — the `traps` probe returned
//   nothing for this unit, so every entry above is the other direction and
//   harmless by construction (each card searches only its own sentence).
export const HI_UNIT103 = {
  id: "hi-u103",
  lang: "hi",
  title: "निगम और प्रतिस्पर्धा",
  order: 103,
  stage: "b2",
  lessons: [
    {
      id: "hi-u103l1",
      unit: 103,
      lesson: 1,
      title: "What a firm is",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe a company as a structure: the corporate body, the undertaking, a newly founded venture, a branch, the head office, and the director at the top.",
      items: [
        { id: "hi-u103l1-nigam", type: "vocab", front: "निगम", reading: "nigam", meaning: "a corporate body", accept: ["a company as a legal person"], example: { jp: "यह निगम सरकार का है, पर उसका परिचालन एक अलग टीम करती है।", en: "This corporate body belongs to the government, but a separate team runs it." }, drill: { jp: "यह निगम सरकार का है", en: "This corporate body belongs to the government" }, hint: "NI-GAM, masculine. ⚠️ Not कंपनी, a company (unit 28): a कंपनी is the everyday word for the people and the work, a निगम is the LEGAL BODY that owns things and can be sued — which is why नगरनिगम, a municipal corporation, uses this word and not कंपनी. 🚨 SUBSTRING NOTE: गम, grief (unit 52), fires inside it — two unrelated words sharing two letters." },
        { id: "hi-u103l1-upakram", type: "vocab", front: "उपक्रम", reading: "upakram", meaning: "a business undertaking", accept: ["an enterprise set up to do something"], example: { jp: "यह उपक्रम दस साल पहले शुरू हुआ और अब उसकी चार शाखाएँ हैं।", en: "This undertaking began ten years ago and now it has four branches." }, drill: { jp: "यह उपक्रम दस साल पहले शुरू हुआ", en: "This undertaking began ten years ago" }, hint: "U-PA-KRAM, masculine. उप- plus क्रम, a sequence — the setting-in-motion of something. ✅ SUBSTRING CHECKED: क्रम cannot fire inside it, because the प before it is a \\p{L} letter. ⚠️ Broader than निगम above: a निगम must be registered, an उपक्रम is any venture someone has undertaken, and सार्वजनिक उपक्रम is how Indian Hindi names a state enterprise." },
        { id: "hi-u103l1-staartap", type: "vocab", front: "स्टार्टअप", reading: "staartap", meaning: "a newly founded venture still finding its feet", accept: ["a young company not yet established"], example: { jp: "उसका स्टार्टअप दो साल चला और फिर दिवालिया हो गया।", en: "His young venture ran two years and then went bust." }, drill: { jp: "उसका स्टार्टअप दो साल चला", en: "His young venture ran two years" }, hint: "STAARTAP, masculine, an English loanword that modern Indian Hindi uses untranslated. ⚠️ Glossed by what it IS rather than as 'a startup', because unit 1 §9 forbids a loanword glossing to its own reading. The स्ट is स with ट stacked (unit 6) and the ट is retroflex (unit 1 §1b)." },
        { id: "hi-u103l1-shaakhaa", type: "vocab", front: "शाखा", reading: "shaakhaa", meaning: "a branch office", accept: ["an arm of a firm in another place"], example: { jp: "बैंक की नई शाखा गाँव में खुली, और लोगों को शहर जाना बंद हुआ।", en: "The bank's new branch opened in the village, and people stopped going to the city." }, drill: { jp: "बैंक की नई शाखा गाँव में खुली", en: "The bank's new branch opened in the village" }, hint: "SHAA-KHAA — ⚠️ FEMININE DESPITE THE -ा: शाखा खुली, never खुला. Plain ख, because unit 1 §7 keeps ख़ uncarded. Literally a branch of a tree, and the same word is used for a branch of knowledge. ⚠️ Not विभाग, a department (unit 97): a विभाग is a division INSIDE one office, a शाखा is the same firm in a different place." },
        { id: "hi-u103l1-mukhyaalay", type: "vocab", front: "मुख्यालय", reading: "mukhyaalay", meaning: "the head office of an organisation", accept: ["the central office everything reports to"], example: { jp: "हर शाखा का हिसाब मुख्यालय जाता है, और वहीं से फ़ैसला आता है।", en: "Every branch's accounts go to the head office, and the decision comes from there." }, drill: { jp: "हर शाखा का हिसाब मुख्यालय जाता है", en: "Every branch's accounts go to the head office" }, hint: "MUKH-YAA-LAY, masculine. मुख्य is chief (unit 19) and -आलय is a house — the same ending as न्यायालय (unit 102), विश्वविद्यालय and पुस्तकालय (unit 97), masculine in every case. 🚨 SUBSTRING NOTE: मुख्य whole-word-FIRES inside it, because the ा that follows is a mātrā." },
        { id: "hi-u103l1-nideshak", type: "vocab", front: "निदेशक", reading: "nideshak", meaning: "a company director", accept: ["a member of a company's board"], example: { jp: "निदेशक ने विलय का प्रस्ताव रखा, पर हिस्सेदारों ने उसे नहीं माना।", en: "The director put the merger proposal, but the shareholders did not accept it." }, drill: { jp: "निदेशक ने विलय का प्रस्ताव रखा", en: "The director put the merger proposal" }, hint: "NI-DE-SHAK, masculine, and it does not change for a woman. 🚨 DO NOT CONFUSE IT WITH निर्देशक, a film director (unit 74) — one र is the whole difference, and the readings differ too: nideshak against nirdeshak. A निदेशक sits on a board; a निर्देशक makes a film. 🚨 TWO FRONTS FIRE INSIDE IT: देश, a country (unit 8), and शक, a doubt (unit 30), both because a mātrā sits before them." },
      ],
    },
    {
      id: "hi-u103l2",
      unit: 103,
      lesson: 2,
      title: "Who owns and runs it",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Separate owning from running: a shareholder, someone who puts money in, an owner of capital, the person who started the venture, the day-to-day running, and the state of being unable to pay.",
      items: [
        { id: "hi-u103l2-hissedaar", type: "vocab", front: "हिस्सेदार", reading: "hissedaar", meaning: "a holder of a share in a firm", accept: ["one who owns a part of a company"], example: { jp: "हर हिस्सेदार को हर साल हिसाब भेजा जाता है, चाहे उसका हिस्सा छोटा हो।", en: "Accounts are sent to every shareholder each year, however small his share is." }, drill: { jp: "हर हिस्सेदार को हिसाब भेजा जाता है", en: "Accounts are sent to every shareholder" }, hint: "HIS-SE-DAAR, masculine, unchanging for a woman. Built on हिस्सा, a part (unit 19) plus -दार, 'one who holds' — the same ending as ठेकेदार and दुकानदार. ⚠️ Not शेयर, a share (unit 76): a शेयर is the THING, a हिस्सेदार is the PERSON — the विरोध / विरोधी relation unit 61 names. 🚨 से (unit 8) fires inside it." },
        { id: "hi-u103l2-niveshak", type: "vocab", front: "निवेशक", reading: "niveshak", meaning: "one who puts money into a venture", accept: ["a backer with money at stake"], example: { jp: "निवेशक ने पैसा लगाया, पर परिचालन में कोई दखल नहीं दिया।", en: "The investor put money in, but gave no interference in the running." }, drill: { jp: "निवेशक ने इस उपक्रम में पैसा लगाया", en: "The investor put money into this undertaking" }, hint: "NI-VE-SHAK, masculine, unchanging for a woman. Built on निवेश, investment (unit 76): निवेश is the ACT, निवेशक the PERSON. ✅ SUBSTRING CHECKED: निवेश CANNOT fire inside it — the क that follows is a \\p{L} letter — but शक, a doubt (unit 30), CAN and does, because the े before it is a mātrā. ⚠️ Not हिस्सेदार above: a निवेशक may hold no हिस्सा at all and simply have lent." },
        { id: "hi-u103l2-puunjiipati", type: "vocab", front: "पूँजीपति", reading: "puunjiipati", meaning: "an owner of capital", accept: ["one whose money is his trade"], example: { jp: "पूँजीपति और मज़दूर की राय इस नियम पर अलग थी, और यही पूरी बहस थी।", en: "The capitalist's and the labourer's opinions on this rule were different, and that was the whole debate." }, drill: { jp: "पूँजीपति की राय इस नियम पर अलग थी", en: "The capitalist's opinion on this rule was different" }, hint: "PUUN-JII-PA-TI, masculine. पूँजी is capital (unit 76) and पति here means 'master of', not 'husband'. ⚠️ THE ँ IS NASALISATION AND IS WRITTEN n (unit 1 §1) — puunjii, not puujii. 🚨 SUBSTRING NOTE: पति, a husband (unit 10), FIRES inside it, because the ी before it is a mātrā — and the meaning really is the same पति, in its older sense. ✅ पूँजी itself is blocked by the प." },
        { id: "hi-u103l2-udyamii", type: "vocab", front: "उद्यमी", reading: "udyamii", meaning: "one who starts a venture and carries the risk", accept: ["a founder who takes the chance"], example: { jp: "अच्छा उद्यमी हार के बाद दूसरा उपक्रम शुरू करता है, और वही फ़र्क है।", en: "A good founder starts a second venture after a defeat, and that is the whole difference." }, drill: { jp: "अच्छा उद्यमी हार के बाद दूसरा उपक्रम शुरू करता है", en: "A good founder starts a second venture after a defeat" }, hint: "UD-YA-MII, masculine despite the -ी, and unchanging for a woman — one of the -ी masculines unit 1 §4 warns about, like पानी. The द्य is द with य stacked (unit 6). ⚠️ Not पूँजीपति above: a पूँजीपति has the money, an उद्यमी has the idea and the risk, and the two are often not the same person — which is why निवेशक exists." },
        { id: "hi-u103l2-parichaalan", type: "vocab", front: "परिचालन", reading: "parichaalan", meaning: "the day-to-day running of a business", accept: ["operations as against ownership"], example: { jp: "मालिक बदल गया, पर परिचालन वैसा ही चलता रहा।", en: "The owner changed, but the running went on just the same." }, drill: { jp: "मालिक बदल गया, पर परिचालन वैसा ही रहा", en: "The owner changed, but the running stayed the same" }, hint: "PA-RI-CHAA-LAN, masculine. परि- is 'around' on चालन, from चलना (unit 12) — keeping the thing going. 🚨 SUBSTRING NOTE: पर, on (unit 23), FIRES inside it, because the ि after it is a mātrā. ⚠️ THE EXAMPLE IS THE LESSON OF THIS WHOLE UNIT: ownership and परिचालन are two different things, and a निगम exists precisely so that they can be separated." },
        { id: "hi-u103l2-divaaliyaa", type: "vocab", front: "दिवालिया", reading: "divaaliyaa", meaning: "unable to pay what is owed", accept: ["gone bust, with debts unpaid"], example: { jp: "कंपनी दिवालिया हो गई और हिस्सेदारों को कुछ नहीं मिला।", en: "The company went bust and the shareholders got nothing." }, drill: { jp: "कंपनी दिवालिया हो गई", en: "The company went bust" }, hint: "DI-VAA-LI-YAA — ⚠️ INVARIANT DESPITE THE -आ: दिवालिया कंपनी, दिवालिया आदमी. It is a Perso-Arabic loan and does not inflect, which breaks the -आ/-ी agreement rule the learner has used since unit 24. The frame is दिवालिया होना. 🚨 या, or (unit 22), fires inside it. ⚠️ Not घाटा, a loss (unit 76): a घाटा is this year's number, दिवालिया is the end of the firm." },
      ],
    },
    {
      id: "hi-u103l3",
      unit: 103,
      lesson: 3,
      title: "Growing, merging, cornering",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe how firms change size and who ends up in charge: a merger, a takeover, sole control of a market, shielding home industry, rivalry itself, and the maker at the start of the chain.",
      items: [
        { id: "hi-u103l3-vilay", type: "vocab", front: "विलय", reading: "vilay", meaning: "a merger of two firms into one", accept: ["the joining of two companies"], example: { jp: "दोनों कंपनियों का विलय हुआ, और नए निगम का एक ही मुख्यालय रखा गया।", en: "The two companies merged, and the new corporate body was given a single head office." }, drill: { jp: "दोनों कंपनियों का विलय हुआ", en: "The two companies merged" }, hint: "VI-LAY, masculine. ⚠️ A विलय IS BY AGREEMENT and अधिग्रहण below is not — that is the whole distinction and Hindi business writing keeps it strictly. Compare एकीकरण, integration (unit 100): एकीकरण joins parts of ONE thing, a विलय joins two separate owners." },
        { id: "hi-u103l3-adhigrahan", type: "vocab", front: "अधिग्रहण", reading: "adhigrahan", meaning: "a takeover of one firm by another", accept: ["the buying-up of a company"], example: { jp: "बड़े निगम ने उस छोटे उपक्रम का अधिग्रहण किया, और उसका ब्रांड बंद कर दिया।", en: "The big corporate body took over that small undertaking, and shut its brand down." }, drill: { jp: "निगम ने उस उपक्रम का अधिग्रहण किया", en: "The corporate body took over that undertaking" }, hint: "A-DHI-GRA-HAN, masculine. अधि- is 'over' and ग्रहण is a seizing. The ग्र is ग with र stacked (unit 6). 🚨 SUBSTRING NOTE: ग्रह, a planet (unit 87), FIRES inside it, because the ि before it is a mātrā — unrelated words, and the planet sense is why ग्रहण also means an eclipse. ⚠️ Not विलय above: a विलय is agreed, an अधिग्रहण can be resisted." },
        { id: "hi-u103l3-ekaadhikaar", type: "vocab", front: "एकाधिकार", reading: "ekaadhikaar", meaning: "sole control of a market", accept: ["a monopoly held by one firm"], example: { jp: "एक ही कंपनी का एकाधिकार होने से कीमत बढ़ी और ग्राहक के पास विकल्प नहीं बचा।", en: "Because one company alone had sole control the price rose and the customer was left no choice." }, drill: { jp: "एक ही कंपनी का एकाधिकार है", en: "One company alone has sole control" }, hint: "E-KAA-DHI-KAAR, masculine. एक, one (unit 2) plus अधिकार, a right (unit 71) — the right held by one and nobody else. 🚨 SUBSTRING NOTE: एक FIRES inside it, because the ा that follows is a mātrā, and so does the glyph card का (unit 3) — harmless, since `canCloze` requires a vocab item. ⚠️ The exact opposite of प्रतिस्पर्धा below." },
        { id: "hi-u103l3-sanrakshanvaad", type: "vocab", front: "संरक्षणवाद", reading: "sanrakshanvaad", meaning: "the shielding of home industry from outside firms", accept: ["protection of one's own producers by policy"], example: { jp: "संरक्षणवाद से घर के उत्पादक बचते हैं, पर ग्राहक को ज़्यादा कीमत देनी पड़ती है।", en: "Home producers are saved by protectionism, but the customer has to pay a higher price." }, drill: { jp: "संरक्षणवाद से घर के उत्पादक बचते हैं", en: "Home producers are saved by protectionism" }, hint: "SAN-RAK-SHAN-VAAD, masculine. संरक्षण, protection (unit 75), plus -वाद, the '-ism' ending — the same -वाद as प्रतिवाद (unit 98) in a different sense. ✅ SUBSTRING CHECKED: संरक्षण cannot fire inside it, because the व that follows is a letter. ⚠️ THE EXAMPLE DELIBERATELY GIVES BOTH SIDES — this is a B2 unit, and a one-sided example would teach the word as a slogan." },
        { id: "hi-u103l3-pratispardhaa", type: "vocab", front: "प्रतिस्पर्धा", reading: "pratispardhaa", meaning: "rivalry between firms in a market", accept: ["commercial competition"], example: { jp: "कड़ी प्रतिस्पर्धा से कीमत कम हुई, और इससे उपभोक्ता को फ़ायदा हुआ।", en: "Fierce competition brought the price down, and the consumer benefited from it." }, drill: { jp: "कड़ी प्रतिस्पर्धा से कीमत कम हुई", en: "Fierce competition brought the price down" }, hint: "PRA-TI-SPAR-DHAA — ⚠️ FEMININE DESPITE THE -ा: कड़ी प्रतिस्पर्धा, never कड़ा. ⚠️ Not मुकाबला, a contest (unit 41): a मुकाबला has a winner and then ends, प्रतिस्पर्धा is the standing condition of a market. ✅ प्रति (unit 93) is blocked inside it by the स; 🚨 पर (unit 23) fires inside it." },
        { id: "hi-u103l3-utpaadak", type: "vocab", front: "उत्पादक", reading: "utpaadak", meaning: "the maker of a product", accept: ["the firm that makes the goods"], example: { jp: "उत्पादक और वितरक अलग कंपनियाँ हैं, इसलिए कीमत दो बार बढ़ती है।", en: "The maker and the distributor are different companies, so the price rises twice." }, drill: { jp: "उत्पादक और वितरक अलग कंपनियाँ हैं", en: "The maker and the distributor are different companies" }, hint: "UT-PAA-DAK, masculine, unchanging for a woman. Built on the same root as उत्पादन, production (unit 66): उत्पादन is the ACT, उत्पादक the one who does it. 🚨 उत्पाद, a product, IS DELIBERATELY NOT CARDED — with उत्पादन already taught, a third card on this root is what unit 61 §B4's derivative rule forbids. उत्पाद is not carded anywhere in Hindi, so this unit's sentences use चीज़ (unit 5) in its place." },
      ],
    },
    {
      id: "hi-u103l4",
      unit: 103,
      lesson: 4,
      title: "Reaching the buyer",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Follow the goods out to the buyer: the brand, the work of marketing, aiming at a chosen group, the consumer, the selling itself, and the distributor in between.",
      items: [
        { id: "hi-u103l4-braand", type: "vocab", front: "ब्रांड", reading: "braand", meaning: "a maker's name sold as a promise", accept: ["a name people pay extra for"], example: { jp: "असली चीज़ और नकली चीज़ एक जैसी थीं, पर ब्रांड की वजह से कीमत दुगुनी थी।", en: "The genuine thing and the counterfeit were alike, but because of the brand the price was double." }, drill: { jp: "ब्रांड की वजह से कीमत दुगुनी थी", en: "Because of the brand the price was double" }, hint: "BRAAND, masculine, an English loanword modern Hindi uses untranslated. The ब्रा is ब with र stacked carrying the ा mātrā — one syllable. ⚠️ Glossed by what it DOES rather than as 'a brand', because unit 1 §9 forbids a loanword glossing to its own reading. ⚠️ Not नाम, a name (unit 7): a नाम identifies, a ब्रांड is a नाम somebody will pay more for." },
        { id: "hi-u103l4-vipanan", type: "vocab", front: "विपणन", reading: "vipanan", meaning: "the work of bringing goods to buyers", accept: ["marketing as a function"], example: { jp: "चीज़ अच्छी थी, पर विपणन कमज़ोर था, इसलिए किसी को उसका पता नहीं चला।", en: "The thing was good but the marketing was weak, so nobody came to know about it." }, drill: { jp: "चीज़ अच्छी थी, पर विपणन कमज़ोर था", en: "The thing was good but the marketing was weak" }, hint: "VI-PA-NAN, masculine, and the ण is retroflex, merged to n in the reading (unit 1 §1b). ⚠️ Not विज्ञापन, an advertisement (unit 44): a विज्ञापन is ONE thing you place, विपणन is the whole job of finding the buyer — pricing, placing and the ब्रांड included. ⚠️ उत्पाद, a product, is not carded anywhere in Hindi (see lesson 3's उत्पादक), so this unit's sentences use चीज़ (unit 5) instead." },
        { id: "hi-u103l4-lakshit", type: "vocab", front: "लक्षित", reading: "lakshit", meaning: "aimed at a chosen group of buyers", accept: ["targeted at a particular set of people"], example: { jp: "यह विज्ञापन नए उपभोक्ता पर लक्षित था, इसलिए पुराने ग्राहक उसे समझ नहीं सके।", en: "This advertisement was aimed at the new consumer, so older customers could not make sense of it." }, drill: { jp: "यह विज्ञापन नए उपभोक्ता पर लक्षित था", en: "This advertisement was aimed at the new consumer" }, hint: "LAK-SHIT, INVARIANT: लक्षित ग्राहक, लक्षित बिक्री. Built on लक्ष्य, an aim — the क्ष is the conjunct of unit 6. The frame is X पर लक्षित होना. ⚠️ सर्वेक्षण, a survey, IS NOT CARDED HERE: unit 98 §C9.1 gives it to u134 alone, and this card does the marketing job in its place." },
        { id: "hi-u103l4-upabhoktaa", type: "vocab", front: "उपभोक्ता", reading: "upabhoktaa", meaning: "the person who uses what is sold", accept: ["the end consumer of a product"], example: { jp: "उपभोक्ता को ब्रांड याद रहता है, उत्पादक का नाम नहीं।", en: "The consumer remembers the brand, not the maker's name." }, drill: { jp: "उपभोक्ता को ब्रांड याद रहता है", en: "The consumer remembers the brand" }, hint: "U-PA-BHOK-TAA — 🚨 MASCULINE DESPITE THE -ा, AND THIS IS THE TRAP OF THE UNIT: it is a -ता AGENT noun, not a -ता ABSTRACT. निर्भरता and जटिलता (unit 100) end identically and are FEMININE; उपभोक्ता is masculine, like पिता and राजा (unit 1 §4). ⚠️ Not ग्राहक, a customer (unit 18): a ग्राहक is whoever is buying today, an उपभोक्ता is the one the thing was made for — and the two can be different people." },
        { id: "hi-u103l4-bikrii", type: "vocab", front: "बिक्री", reading: "bikrii", meaning: "the selling of goods, taken as a figure", accept: ["sales as a quantity"], example: { jp: "विज्ञापन के बाद बिक्री दुगुनी हो गई, पर मुनाफ़ा उतना नहीं बढ़ा।", en: "After the advertisement sales doubled, but the profit did not rise as much." }, drill: { jp: "विज्ञापन के बाद बिक्री दुगुनी हो गई", en: "After the advertisement sales doubled" }, hint: "BIK-RII — FEMININE, -ी agreeing with the rule: बिक्री बढ़ी, never बढ़ा. Built on बिकना, to be sold (unit 46). ⚠️ THE SECOND CLAUSE IS THE REASON THIS WORD IS WORTH A CARD: बिक्री is a COUNT of what went out, and मुनाफ़ा (unit 37) is what was left — a learner who treats them as one word will misread every business report." },
        { id: "hi-u103l4-vitarak", type: "vocab", front: "वितरक", reading: "vitarak", meaning: "one who spreads goods out to sellers", accept: ["the middle firm between maker and shop"], example: { jp: "वितरक हर दुकान तक चीज़ें पहुँचाता है, और उसी काम का उसे हिस्सा मिलता है।", en: "The distributor gets the things to every shop, and for that work he gets a share." }, drill: { jp: "वितरक हर दुकान तक चीज़ें पहुँचाता है", en: "The distributor gets the things to every shop" }, hint: "VI-TA-RAK, masculine, unchanging for a woman. From वितरण, a distributing. ⚠️ Not दलाल, a broker (unit 85): a दलाल brings two parties together and holds nothing, a वितरक actually takes the goods and moves it. ⚠️ माल, goods, IS NOT CARDED ANYWHERE IN HINDI and unit 98 §C9 gives that field to u127, so this unit's sentences use चीज़ें (unit 5) instead." },
      ],
    },
  ],
};
