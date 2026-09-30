// HI Unit 39 — जोड़ने वाले शब्द ("The words that join") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 1. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// WHY THIS SLOT KEPT ITS THEME. u22 वाक्य बनाना carded the first joining words —
// और, या, लेकिन, क्योंकि, इसलिए, जब, तब — and u23 परसर्ग added the correlative half
// (जो, जहाँ, जैसा, जितना, कारण, वजह, अलावा). The probe found connectors at **8 of
// 18**, and what was missing was the whole second tier: the concessive (हालाँकि),
// the contrastive (जबकि), the corrective (बल्कि), the causal-with-a-reason (चूँकि),
// the purposive (ताकि) and the negative-conditional (वरना). Those six are what
// turn two A1 sentences into one A2 sentence.
//
// 🚨 उतना IS CLOSED HERE, AND unit1.js NAMED IT AS A DEFERRED CORRELATIVE. जितना
// has been a front since u23l4 and its partner had nowhere to go, so every
// "as much as … that much" sentence in A1 had to be written around. The pair is
// now complete and lesson 2 teaches all four Hindi correlative sets side by side:
//     जितना … उतना   as much as … that much     (u23l4 + u39l2)
//     जैसा  … वैसा    the way that … that way    (u23l4 + u39l2)
//     जहाँ  … वहाँ    where … there              (u23l2 + u5l2, both already taught)
//     जब   … तब      when … then                (u2l3  + u22l2, both already taught)
// इधर and उधर join them as the near/far pair of place adverbs, which u5's यहाँ/वहाँ
// only half covered — यहाँ is a point, इधर is a direction.
//
// 🚨 मगर WAS DROPPED, AND IT IS A DELIBERATE REFUSAL RATHER THAN AN OVERSIGHT. It is
// the commonest "but" in spoken Hindi and it is an EXACT synonym of लेकिन (u22l2,
// glossed "but", accept "however"/"though"/"and yet"). Carding it would have created
// a second mastery track for one meaning — the same defect §6 bans for बड़ा/बड़ी —
// and any gloss that separated them mechanically would have been a lie about the
// language. वरना moved up into lesson 1 to take the slot. मगर is worth ONE LINE in
// a later unit's hint, never a card.
//
// ⚠️ FOUR GLOSSES ARE PITCHED NARROW SO THEY DO NOT LAND ON AN A1 ITEM (§9):
//   • दलील is "a point made in argument" — बहस (u30l2) is "a heated argument".
//   • खयाल is "a passing thought" and विचार is "an idea" — राय (u30l4) is already
//     "an opinion", and those three are genuinely three different words in Hindi.
//   • तय is "settled" — मंज़ूर (u30l4) is "acceptable", which is agreement given,
//     not a matter closed.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   शर्त, दलील, शिकायत are FEMININE and all three end in a CONSONANT — §4's
//   unpredictable class, so the hint is the only place the learner can get it.
//   विचार, खयाल, सबूत, तर्क, ऐलान, राज़, ज़िक्र are MASCULINE, and every one of them
//   is consonant-final too. मुद्दा and इशारा are MASCULINE -ा, regular.
//   बल्कि, हालाँकि, जबकि, चूँकि, ताकि, वरना, तभी, इधर, उधर never change shape.
//   उतना and वैसा DO agree — उतना पानी, उतनी चीनी — because they are adjectives
//   pretending to be conjunctions. तय is INVARIANT.
//
// RETROFLEX/DENTAL: no new pair, checked against all 936 readings. सबूत sabuut,
// मुद्दा muddaa, तय tay and शर्त shart are all DENTAL and have no retroflex
// counterpart in the corpus. मुद्दा's doubled द is §1's GEMINATION.
// ⚠️ NO क़/ख़/ग़ per unit31.js §A4 — खयाल is written with plain ख.
// ⚠️ AND THE READING CHECK WAS RUN ON EVERY FRONT BEFORE AUTHORING, after u36 and
// u38 each lost a card to a spelling variant. उतना utnaa, वैसा vaisaa, उधर udhar
// and तभी tabhii sit one letter from इतना/जितना, जैसा/ऐसा, उधार and कभी/अभी — all of
// them already taught, and all of them distinct under §1's scheme.
// ─────────────────────────────────────────────────────────────────────────────
// FREE — two particles this unit needs and no unit teaches. Same test as
// unit1.js's list: closed-class grammar, met in a sentence, never produced alone.
// ─────────────────────────────────────────────────────────────────────────────
//   • ही — the emphatic particle. वैसा ही is "exactly that way", आज ही "today
//     of all days". The same class as तो, which unit1.js declared for the same
//     reason, and it is inseparable from the correlatives lesson 2 teaches.
//   • न — the negative used before a subjunctive (ताकि देर न हो). नहीं (u5l2) is
//     the ordinary negative and is a taught front; न is the one a ताकि clause needs,
//     where नहीं would be wrong.
//     ⚠️ DECLARING IT MAKES AN ACCIDENTAL LICENCE EXPLICIT, exactly as unit11.js did
//     for कि: न was already in scope because न is a u1l2 GLYPH card — the LETTER — and
//     `scripts/scope-hi.mjs` cannot tell a letter from a particle spelled the same way.
// FREE: ही | न
export const HI_UNIT39 = {
  id: "hi-u39",
  lang: "hi",
  title: "जोड़ने वाले शब्द",
  order: 39,
  stage: "a2",
  lessons: [
    {
      id: "hi-u39l1",
      unit: 39,
      lesson: 1,
      title: "Join two clauses into one sentence",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Concede a point, contrast two facts, give a purpose and warn what happens otherwise — all inside one sentence.",
      items: [
        { id: "hi-u39l1-balki", type: "vocab", front: "बल्कि", reading: "balki", meaning: "rather", accept: ["but rather", "in fact", "on the contrary"], example: { jp: "वह आलसी नहीं है, बल्कि बहुत काम करता है।", en: "He is not lazy — on the contrary, he works very hard." }, drill: { jp: "यह सस्ता नहीं बल्कि महँगा है", en: "This is not cheap but rather expensive" }, hint: "BAL-KI, invariant. It always follows a NEGATIVE and corrects it: X नहीं, बल्कि Y. लेकिन (u22) just adds a contrast; बल्कि replaces what you just denied." },
        { id: "hi-u39l1-haalaanki", type: "vocab", front: "हालाँकि", reading: "haalaanki", meaning: "although", accept: ["even though", "despite the fact that"], example: { jp: "हालाँकि बारिश हो रही थी, हम बाहर गए।", en: "Although it was raining, we went out." }, drill: { jp: "हालाँकि वह छोटा है वह समझता है", en: "Although he is small he understands" }, hint: "HAA-LAAN-KI, invariant, nasalised aa. It opens the clause you are conceding, and the main clause follows — often with फिर भी, even so. Built on हाल (u38), the state of things." },
        { id: "hi-u39l1-jabki", type: "vocab", front: "जबकि", reading: "jabki", meaning: "whereas", accept: ["while by contrast", "when in fact"], example: { jp: "वह शहर में रहता है जबकि मैं गाँव में रहता हूँ।", en: "He lives in the city whereas I live in the village." }, drill: { jp: "यह सस्ता है जबकि वह महँगा है", en: "This is cheap whereas that is expensive" }, hint: "JAB-KI, invariant — जब (u2) plus कि. It sets two facts against each other without either being wrong. हालाँकि concedes; जबकि just compares." },
        { id: "hi-u39l1-chuunki", type: "vocab", front: "चूँकि", reading: "chuunki", meaning: "since", accept: ["given that", "seeing as", "because at the start"], example: { jp: "चूँकि आज छुट्टी है, दुकान बंद है।", en: "Since it is a holiday today, the shop is shut." }, drill: { jp: "चूँकि देर हो गई हम घर गए", en: "Since it got late we went home" }, hint: "CHUUN-KI, invariant, nasalised uu. क्योंकि (u22) gives the reason AFTER the result; चूँकि gives it FIRST, and the result follows — often with इसलिए. You cannot swap them around." },
        { id: "hi-u39l1-taaki", type: "vocab", front: "ताकि", reading: "taaki", meaning: "so that", accept: ["in order that", "for the purpose that"], example: { jp: "मैं धीरे बोलता हूँ ताकि वह समझे।", en: "I speak slowly so that he understands." }, drill: { jp: "जल्दी चलो ताकि देर न हो", en: "Walk quickly so that we are not late" }, hint: "TAA-KI, invariant, DENTAL त. It gives a PURPOSE, and the verb after it goes into the subjunctive — आएँ, हो, मिले — which is the form A2 meets here and u47 will teach properly. के लिए (u11's FREE लिए) does the same job with a noun." },
        { id: "hi-u39l1-varnaa", type: "vocab", front: "वरना", reading: "varnaa", meaning: "otherwise", accept: ["or else", "if not", "failing that"], example: { jp: "जल्दी निकलो वरना देर हो जाती है।", en: "Leave early, otherwise you end up late." }, drill: { jp: "दवा लो वरना बुखार बढ़ेगा", en: "Take the medicine or else the fever will rise" }, hint: "VAR-NAA, invariant. It always follows an instruction and names the bad outcome: X करो वरना Y. नहीं तो means exactly the same and is more spoken; वरना is one word and easier to place." },
      ],
    },
    {
      id: "hi-u39l2",
      unit: 39,
      lesson: 2,
      title: "The correlative pairs, and here against there",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Complete Hindi's जितना…उतना and जैसा…वैसा pairs, point in a direction, and state a condition.",
      items: [
        { id: "hi-u39l2-utnaa", type: "vocab", front: "उतना", reading: "utnaa", meaning: "that much", accept: ["that many", "to that extent", "as much as that"], example: { jp: "जितना पैसा चाहिए उतना ले लो।", en: "Take as much money as you need." }, drill: { jp: "उतना काम आज मुमकिन नहीं", en: "That much work is not possible today" }, hint: "UT-NAA, and it AGREES: उतना पानी, उतनी चीनी, उतने लोग. It is the second half of जितना (u23), which has waited since A1 for it — जितना … उतना is one sentence, not two. Read the three together: इतना this much, उतना that much, जितना as much as." },
        { id: "hi-u39l2-vaisaa", type: "vocab", front: "वैसा", reading: "vaisaa", meaning: "that way", accept: ["like that", "of that sort", "the same as that"], example: { jp: "जैसा तुम कहते हो वैसा ही होता है।", en: "It happens just the way you say." }, drill: { jp: "मुझे वैसा घर नहीं चाहिए", en: "I do not want a house like that" }, hint: "VAI-SAA, and it agrees like उतना: वैसा घर, वैसी बात. It completes जैसा (u23). Read the set: ऐसा like this (u19), वैसा like that, जैसा like which. Hindi builds all three on the same skeleton." },
        { id: "hi-u39l2-idhar", type: "vocab", front: "इधर", reading: "idhar", meaning: "over this way", accept: ["this way", "over here", "in this direction"], example: { jp: "इधर आओ और यह तस्वीर देखो।", en: "Come over this way and look at this picture." }, drill: { jp: "इधर बहुत भीड़ है", en: "There is a big crowd over here" }, hint: "I-DHAR, invariant, DENTAL ध. यहाँ (u5) is a POINT — right here; इधर is a DIRECTION — this way, over on this side. इधर आओ is the everyday 'come here'." },
        { id: "hi-u39l2-udhar", type: "vocab", front: "उधर", reading: "udhar", meaning: "over that way", accept: ["that way", "over there", "in that direction"], example: { jp: "उधर मत जाओ, वहाँ रास्ता बंद है।", en: "Do not go over that way — the road is shut there." }, drill: { jp: "उधर एक पुरानी दुकान है", en: "There is an old shop over that way" }, hint: "U-DHAR, invariant. The far partner of इधर, exactly as वहाँ is of यहाँ. ⚠️ Read it against उधार udhaar, credit (u37) — one is short and one is long, and §1's doubling is all that separates them." },
        { id: "hi-u39l2-tabhii", type: "vocab", front: "तभी", reading: "tabhii", meaning: "only then", accept: ["at that very moment", "just then", "that is why"], example: { jp: "मेहनत करो, तभी अच्छे अंक आते हैं।", en: "Work hard — only then do good marks come." }, drill: { jp: "तभी मुझे उसकी बात समझ आई", en: "Only then did I understand what he said" }, hint: "TAB-HII, invariant — तब (u22) plus the emphatic ही. Two senses and both common: 'only then, and not before', and 'just at that moment'. Read it against कभी ever and अभी right now (both u30)." },
        { id: "hi-u39l2-shart", type: "vocab", front: "शर्त", reading: "shart", meaning: "a condition", accept: ["a stipulation", "a proviso", "a bet"], example: { jp: "मैं चलूँगा, पर एक शर्त है।", en: "I will come, but there is one condition." }, drill: { jp: "इस सौदे की एक शर्त है", en: "This deal has one condition" }, hint: "SHART, FEMININE despite the consonant ending, plural शर्तें, with र् on the श. शर्त पर is 'on condition that'. It also means a bet — शर्त लगाना, to put money on something." },
      ],
    },
    {
      id: "hi-u39l3",
      unit: 39,
      lesson: 3,
      title: "Reasoning out loud",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the parts of an argument — an idea, a point, proof, the issue — and say whether the logic holds.",
      items: [
        { id: "hi-u39l3-vichaar", type: "vocab", front: "विचार", reading: "vichaar", meaning: "an idea", accept: ["a considered thought", "a notion", "thinking"], example: { jp: "उसका विचार सब को पसंद आया।", en: "Everybody liked his idea." }, drill: { jp: "यह विचार बहुत अच्छा है", en: "This idea is very good" }, hint: "VI-CHAAR, MASCULINE, Sanskrit, plural विचार (unchanged). A thought you have WORKED on — विचार करना is to consider something. राय (u30) is the opinion you then give; खयाल below is the thought that just drifts past." },
        { id: "hi-u39l3-khayaal", type: "vocab", front: "खयाल", reading: "khayaal", meaning: "a passing thought", accept: ["a fancy", "what crosses your mind", "care taken of something"], example: { jp: "मेरे मन में एक खयाल आया।", en: "A thought came into my mind." }, drill: { jp: "उसका खयाल कुछ और था", en: "His idea of it was something else" }, hint: "KHA-YAAL, MASCULINE, plain ख per this band's rule. Lighter than विचार — it arrives rather than being built. And in a second sense it is CARE: खयाल रखना, to look after someone, which you will hear constantly." },
        { id: "hi-u39l3-daliil", type: "vocab", front: "दलील", reading: "daliil", meaning: "a point made in argument", accept: ["a line of reasoning", "a plea", "a case put"], example: { jp: "वकील की दलील बहुत मज़बूत थी।", en: "The lawyer's argument was very strong." }, drill: { jp: "उसकी दलील मुझे समझ आई", en: "I understood his argument" }, hint: "DA-LIIL, FEMININE despite the consonant ending, plural दलीलें, DENTAL द. बहस (u30) is the whole argument as an event; a दलील is one point you put inside it. A वकील (u34) deals in them." },
        { id: "hi-u39l3-sabuut", type: "vocab", front: "सबूत", reading: "sabuut", meaning: "proof", accept: ["evidence", "something that proves it"], example: { jp: "इस बात का कोई सबूत नहीं है।", en: "There is no proof of this." }, drill: { jp: "पुलिस को सबूत नहीं मिला", en: "The police did not find proof" }, hint: "SA-BUUT, MASCULINE, DENTAL त, uncountable in practice. सबूत देना is to produce proof. A दलील is what you argue; a सबूत is what settles it." },
        { id: "hi-u39l3-muddaa", type: "vocab", front: "मुद्दा", reading: "muddaa", meaning: "an issue", accept: ["the matter at hand", "a point at issue", "an agenda item"], example: { jp: "मीटिंग में पैसे का मुद्दा उठा।", en: "The money issue came up at the meeting." }, drill: { jp: "यह मुद्दा बहुत पुराना है", en: "This issue is a very old one" }, hint: "MUD-DAA, MASCULINE, plural मुद्दे, with the doubled DENTAL द of §1's gemination. The thing an argument is ABOUT. बात (u30) is anything said; a मुद्दा is what is actually in dispute." },
        { id: "hi-u39l3-tark", type: "vocab", front: "तर्क", reading: "tark", meaning: "logic", accept: ["reasoning", "the logic of something", "rational argument"], example: { jp: "उसकी बात में कोई तर्क नहीं था।", en: "There was no logic in what he said." }, drill: { jp: "इस दलील में तर्क कम है", en: "There is little logic in this argument" }, hint: "TARK, MASCULINE, one syllable, DENTAL त with र् on it. Sanskrit, and it means reasoning as a THING — the shape an argument has. A दलील can be made without तर्क, which is most of the point of the word." },
      ],
    },
    {
      id: "hi-u39l4",
      unit: 39,
      lesson: 4,
      title: "Announcing, hinting and settling",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Announce something, drop a hint, keep a secret, complain, and say a matter is settled.",
      items: [
        { id: "hi-u39l4-ailaan", type: "vocab", front: "ऐलान", reading: "ailaan", meaning: "an announcement", accept: ["a public declaration", "giving out news"], example: { jp: "स्टेशन पर रेल की देरी का ऐलान हुआ।", en: "There was an announcement about the train's delay at the station." }, drill: { jp: "इस काम का ऐलान कल हुआ", en: "The announcement about this work was yesterday" }, hint: "AI-LAAN, MASCULINE. ऐलान करना is to announce. खबर (u28) is the news itself; an ऐलान is the act of saying it out loud to everybody." },
        { id: "hi-u39l4-ishaaraa", type: "vocab", front: "इशारा", reading: "ishaaraa", meaning: "a hint", accept: ["a gesture", "a sign made with the hand", "a signal"], example: { jp: "उसने हाथ के इशारे से मुझे बुलाया।", en: "He called me over with a gesture of his hand." }, drill: { jp: "उसका इशारा मुझे समझ आया", en: "I understood his hint" }, hint: "I-SHAA-RAA, MASCULINE, plural इशारे. Both meanings at once — a hand signal AND a hint dropped in words. इशारा करना covers both. बुलाया is u31's बुलाना in the perfective." },
        { id: "hi-u39l4-raaz", type: "vocab", front: "राज़", reading: "raaz", meaning: "a secret", accept: ["something kept hidden", "a mystery"], example: { jp: "यह बात एक राज़ है, किसी को मत बताओ।", en: "This is a secret — do not tell anybody." }, drill: { jp: "उसने अपना राज़ मुझे बताया", en: "He told me his secret" }, hint: "RAAZ, MASCULINE, one syllable, ज़ from unit 4. राज़ रखना is to keep a secret. छिपाना (u31) is what you do with one. ⚠️ Not राज, a reign, which drops the nukta and is a different word." },
        { id: "hi-u39l4-zikra", type: "vocab", front: "ज़िक्र", reading: "zikr", meaning: "a mention", accept: ["bringing something up", "a reference to something"], example: { jp: "उसने मीटिंग में मेरा ज़िक्र किया।", en: "He mentioned me at the meeting." }, drill: { jp: "इस किताब में उसका ज़िक्र है", en: "There is a mention of him in this book" }, hint: "ZIKR, MASCULINE, one syllable with the क्र conjunct at the end, ज़ from unit 4. ज़िक्र करना is to mention. An ऐलान is for everybody; a ज़िक्र just brings a name into the conversation." },
        { id: "hi-u39l4-shikaayat", type: "vocab", front: "शिकायत", reading: "shikaayat", meaning: "a complaint", accept: ["a grievance", "complaining about something"], example: { jp: "उसने दुकानदार की शिकायत की।", en: "She made a complaint about the shopkeeper." }, drill: { jp: "मुझे इस काम से कोई शिकायत नहीं", en: "I have no complaint about this work" }, hint: "SHI-KAA-YAT, FEMININE despite the consonant ending, plural शिकायतें. शिकायत करना is to complain — so शिकायत की, with the feminine की, and never शिकायत किया. That agreement is u31's rule doing real work." },
        { id: "hi-u39l4-tay", type: "vocab", front: "तय", reading: "tay", meaning: "settled", accept: ["decided", "fixed", "agreed and closed"], example: { jp: "अब यह मुद्दा तय हो गया।", en: "This issue is settled now." }, drill: { jp: "हमारा जाना कल तय हुआ", en: "Our going was settled yesterday" }, hint: "TAY, INVARIANT — never तयी. तय करना is to decide something, तय होना is for it to be settled. फ़ैसला (u30) is the decision as a thing; तय is the state of being closed. मंज़ूर (u30) is agreement GIVEN, which is a different step." },
      ],
    },
  ],
};
