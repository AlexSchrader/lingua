// HI Unit 17 — दिन और महीने ("Days and months") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot kept, retitled in Devanagari. THE SPLIT WITH u11: u11 is the CLOCK (समय,
// घंटा, मिनट, बजे), u17 is the CALENDAR (दिन, हफ़्ता, महीना, साल, all seven days,
// the months). Neither re-teaches the other's words, and block 1's reservation —
// "शाम, सुबह, रात, कल … u11 and u17 own the rest" — is honoured: शाम, सुबह, रात and
// कल are NOT re-carded here.
//
// ⚠️ आज IS NOT HERE — IT IS u16l3. Block 1 never carded "today" at all (it uses आज
// in examples from u1l2 under the §8 band exemption), and the natural home for it
// looked like this calendar unit. It could not stay: scope is measured per UNIT, so
// a u17 card left eight u15–u16 weather sentences forward-referencing it. Measured,
// not assumed — `node scripts/scope-hi.mjs 15,16,17` flagged exactly those eight.
// So आज went to the weather lesson that first needs it and this slot took तारीख.
//
// FOUR MONTHS, NOT TWELVE, AND THAT IS A DECISION. Every Hindi month name is an
// English loan in Devanagari, so the MEANING is nearly free and only the spelling
// is work — the same logic block 1 used to build u9 out of loanwords. Four cards
// buy the reading pattern; जनवरी's hint lists all twelve so the learner has the
// set without twelve mastery tracks competing with the days of the week, which are
// genuinely new words.
//
// ⚠️ होना IS STILL DEFERRED (§5) AND THAT COSTS THIS UNIT SOMETHING. The natural
// Hindi for "it rains on Wednesday" is बुधवार को बारिश होती है, and होती is a form
// of an untaught verb. Every example here is rebuilt around रहना, आना and the
// copula instead. Recorded so u22–u24 knows the constraint was felt, not missed.
//
// LEXEME CALLS MADE BY HAND (check-front.mjs's LEXEME verdict is worthless for
// Devanagari — its stem() strips German suffixes). Each of these is a separate
// dictionary entry and no rule in scope-hi.mjs generates one from the other:
//   • आगे (u14l4, "ahead") / अगला (here, "next") — related through अग्र, but two
//     words, and Hindi speakers do not feel one as an inflection of the other.
//   • दिन (l1) / जन्मदिन (l4) — a transparent compound, kept because जन्मदिन is
//     the word a learner needs whole. The router cannot mis-blank दिन inside it:
//     the character before द is म, a LETTER, so the whole-word check blocks it.
export const HI_UNIT17 = {
  id: "hi-u17",
  lang: "hi",
  title: "दिन और महीने",
  order: 17,
  stage: "a1",
  lessons: [
    {
      id: "hi-u17l1",
      unit: 17,
      lesson: 1,
      title: "Days, weeks, months, years",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what day it is today and how far off something is in weeks or months.",
      items: [
        { id: "hi-u17l1-din", type: "vocab", front: "दिन", reading: "din", meaning: "a day", accept: ["daytime", "daylight hours"], example: { jp: "आज का दिन बहुत अच्छा है।", en: "Today is a very good day." }, drill: { jp: "इस हफ़्ते का पहला दिन सोमवार है", en: "The first day of this week is Monday" }, hint: "DIN, masculine, unchanged in the plural (दस दिन). The daylight day and the calendar day both. दिन भर means 'all day long'. Keep it apart from दिल dil (the heart, unit 20)." },
        { id: "hi-u17l1-taariikh", type: "vocab", front: "तारीख", reading: "taariikh", meaning: "a date", accept: ["the date", "a calendar date"], example: { jp: "आज की तारीख क्या है?", en: "What is today's date?" }, drill: { jp: "इस तारीख को छुट्टी है", en: "There is a holiday on this date" }, hint: "TAA-RIIKH, feminine, plural तारीखें — the date on a calendar. Standard Hindi writes it with a PLAIN ख. You will also meet तारीख़ with a nukta, which is the Perso-Arabic spelling of the same word said the same way; unit 1 §7 explains why the plain letter is the one this course uses." },
        { id: "hi-u17l1-haftaa", type: "vocab", front: "हफ़्ता", reading: "haftaa", meaning: "a week", accept: ["a seven-day week"], example: { jp: "इस हफ़्ते मैं बाज़ार जाता हूँ।", en: "This week I am going to the market." }, drill: { jp: "एक हफ़्ता बहुत कम समय है", en: "One week is very little time" }, hint: "HAF-TAA, masculine, oblique हफ़्ते — from Persian haft, seven, with फ़ as an f. सप्ताह is the Sanskrit equivalent you meet in writing and on official forms." },
        { id: "hi-u17l1-mahiinaa", type: "vocab", front: "महीना", reading: "mahiinaa", meaning: "a month", accept: ["a calendar month", "a moon"], example: { jp: "इस महीने मौसम अच्छा है।", en: "The weather is good this month." }, drill: { jp: "यह महीना बहुत अच्छा है", en: "This month is very good" }, hint: "MA-HII-NAA, masculine, oblique महीने — which is the form in the example, because a time expression goes oblique. From मास, and tied to the moon: an Indian month was originally lunar." },
        { id: "hi-u17l1-saal", type: "vocab", front: "साल", reading: "saal", meaning: "a year", accept: ["a twelvemonth", "years"], example: { jp: "मेरा बेटा दस साल का है।", en: "My son is ten years old." }, drill: { jp: "इस साल बारिश बहुत कम है", en: "There is very little rain this year" }, hint: "SAAL, masculine, unchanged in the plural (दस साल). वर्ष is the formal Sanskrit word on documents. Age uses it directly: आप कितने साल के हैं, 'how many years are you'." },
        { id: "hi-u17l1-parson", type: "vocab", front: "परसों", reading: "parson", meaning: "the day after tomorrow", accept: ["the day before yesterday", "two days from now"], example: { jp: "परसों मेरा जन्मदिन है।", en: "The day after tomorrow is my birthday." }, drill: { jp: "परसों बाज़ार बंद है", en: "The market is closed the day after tomorrow" }, hint: "PAR-SON — and like कल it points BOTH WAYS: the day after tomorrow and the day before yesterday. Hindi measures DISTANCE from today, not direction, and the verb tense tells you which side you are on. ों is a nasalised o." },
      ],
    },
    {
      id: "hi-u17l2",
      unit: 17,
      lesson: 2,
      title: "Monday to Saturday",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the six working days of the week and say what you do on each.",
      items: [
        { id: "hi-u17l2-somvaar", type: "vocab", front: "सोमवार", reading: "somvaar", meaning: "Monday", accept: ["Mon"], example: { jp: "सोमवार को मैं स्कूल जाता हूँ।", en: "On Monday I go to school." }, drill: { jp: "सोमवार को बाज़ार बंद रहता है", en: "On Monday the market stays closed" }, hint: "SOM-VAAR — सोम is the moon and वार is a day, so Monday is 'moon-day', exactly as in English. All seven Hindi days end in -वार and all seven are named for a planet. Masculine, and the day takes को." },
        { id: "hi-u17l2-mangalvaar", type: "vocab", front: "मंगलवार", reading: "mangalvaar", meaning: "Tuesday", accept: ["Tues"], example: { jp: "मंगलवार को मंदिर में भीड़ है।", en: "On Tuesday there is a crowd at the temple." }, drill: { jp: "मंगलवार को मैं काम करता हूँ", en: "On Tuesday I work" }, hint: "MAN-GAL-VAAR — मंगल is Mars, and the same word means 'auspicious', so Tuesday carries a faint sense of good fortune. Masculine, like every -वार day." },
        { id: "hi-u17l2-budhvaar", type: "vocab", front: "बुधवार", reading: "budhvaar", meaning: "Wednesday", accept: ["Weds"], example: { jp: "बुधवार को मैं आराम करता हूँ।", en: "On Wednesday I rest." }, drill: { jp: "बुधवार हफ़्ते का तीसरा दिन है", en: "Wednesday is the third day of the week" }, hint: "BUDH-VAAR — बुध is Mercury. Mind the dental ध with its puff of air: budh, not but. Masculine." },
        { id: "hi-u17l2-guruvaar", type: "vocab", front: "गुरुवार", reading: "guruvaar", meaning: "Thursday", accept: ["Thurs"], example: { jp: "गुरुवार को मैं हिंदी सीखता हूँ।", en: "On Thursday I learn Hindi." }, drill: { jp: "गुरुवार को यह दुकान बंद है", en: "On Thursday this shop is closed" }, hint: "GU-RU-VAAR — गुरु is Jupiter, and also the teacher, which is why Thursday is the day you honour a guru. बृहस्पतिवार is the longer, more formal name for the same day." },
        { id: "hi-u17l2-shukravaar", type: "vocab", front: "शुक्रवार", reading: "shukravaar", meaning: "Friday", accept: ["Fri"], example: { jp: "शुक्रवार को मस्जिद में भीड़ है।", en: "On Friday there is a crowd at the mosque." }, drill: { jp: "शुक्रवार को मैं जल्दी लौटता हूँ", en: "On Friday I return early" }, hint: "SHUK-RA-VAAR — शुक्र is Venus. ⚠️ Do not confuse it with शुक्रिया shukriyaa (thanks, unit 7): they share their first two letters and come from completely different languages, Sanskrit and Arabic." },
        { id: "hi-u17l2-shanivaar", type: "vocab", front: "शनिवार", reading: "shanivaar", meaning: "Saturday", accept: ["Sat"], example: { jp: "शनिवार को बाज़ार में बहुत भीड़ है।", en: "On Saturday there is a big crowd in the market." }, drill: { jp: "शनिवार को मैं देर से उठता हूँ", en: "On Saturday I get up late" }, hint: "SHA-NI-VAAR — शनि is Saturn, and in Indian astrology the planet you would rather not annoy, which gives Saturday a cautious feel. Masculine." },
      ],
    },
    {
      id: "hi-u17l3",
      unit: 17,
      lesson: 3,
      title: "Sunday and the months",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name Sunday and enough months to give a date.",
      items: [
        { id: "hi-u17l3-ravivaar", type: "vocab", front: "रविवार", reading: "ravivaar", meaning: "Sunday", accept: ["Sun"], example: { jp: "रविवार को सब लोग घर पर हैं।", en: "On Sunday everybody is at home." }, drill: { jp: "रविवार को मैं देर तक सोता हूँ", en: "On Sunday I sleep late" }, hint: "RA-VI-VAAR — रवि is the sun. It is the day off across India, and इतवार, the Persian-derived name for it, is just as common in speech as रविवार. Masculine." },
        { id: "hi-u17l3-janvarii", type: "vocab", front: "जनवरी", reading: "janvarii", meaning: "January", accept: ["Jan"], example: { jp: "जनवरी में बहुत सर्दी है।", en: "There is a lot of cold in January." }, drill: { jp: "जनवरी साल का पहला महीना है", en: "January is the first month of the year" }, hint: "JAN-VA-RII, feminine — and like every month name it is an English loan written in Devanagari, so the meaning is free and only the spelling is work. All twelve: जनवरी, फ़रवरी, मार्च, अप्रैल, मई, जून, जुलाई, अगस्त, सितंबर, अक्तूबर, नवंबर, दिसंबर." },
        { id: "hi-u17l3-maarch", type: "vocab", front: "मार्च", reading: "maarch", meaning: "March", accept: ["Mar"], example: { jp: "मार्च में मौसम गरम रहता है।", en: "In March the weather stays hot." }, drill: { jp: "मार्च साल का तीसरा महीना है", en: "March is the third month of the year" }, hint: "MAARCH, masculine — र्च is र riding above च as a hook. The Indian financial year ends in मार्च, which makes it the busiest month in any office." },
        { id: "hi-u17l3-julaaii", type: "vocab", front: "जुलाई", reading: "julaaii", meaning: "July", accept: ["Jul"], example: { jp: "जुलाई में बहुत बारिश है।", en: "There is a lot of rain in July." }, drill: { jp: "जुलाई में मौसम बहुत गरम रहता है", en: "In July the weather stays very hot" }, hint: "JU-LAA-II, feminine — and the final ई is a full vowel LETTER, as in रसोई, because nothing precedes it in its syllable. July is the heart of the monsoon across most of India." },
        { id: "hi-u17l3-aktuubar", type: "vocab", front: "अक्तूबर", reading: "aktuubar", meaning: "October", accept: ["Oct"], example: { jp: "अक्तूबर में मौसम अच्छा रहता है।", en: "In October the weather stays good." }, drill: { jp: "अक्तूबर में बारिश कम है", en: "There is little rain in October" }, hint: "AK-TUU-BAR, masculine. ⚠️ Hindi spells it with a DENTAL त — अक्तूबर, not अक्टूबर — which is the standard Devanagari form even though English has a hard t there. October is when the rains stop and the festival season starts." },
        { id: "hi-u17l3-disambar", type: "vocab", front: "दिसंबर", reading: "disambar", meaning: "December", accept: ["Dec"], example: { jp: "दिसंबर में मौसम बहुत ठंडा है।", en: "In December the weather is very cold." }, drill: { jp: "दिसंबर में सर्दी बहुत ज़्यादा है", en: "There is a lot of cold in December" }, hint: "DI-SAM-BAR, masculine. ⚠️ The ं before ब is the LABIAL nasal, so it reads m and not n: disambar. That is unit 1 §1's homorganic rule doing its job — the nasal always matches the letter that follows it." },
      ],
    },
    {
      id: "hi-u17l4",
      unit: 17,
      lesson: 4,
      title: "Holidays and birthdays",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say when a holiday or a birthday falls, and whether something happens always, next time or last time.",
      items: [
        { id: "hi-u17l4-chhuttii", type: "vocab", front: "छुट्टी", reading: "chhuttii", meaning: "a holiday", accept: ["a day off", "leave", "a vacation"], example: { jp: "रविवार को छुट्टी है।", en: "Sunday is a holiday." }, drill: { jp: "इस हफ़्ते मुझे छुट्टी नहीं है", en: "I have no holiday this week" }, hint: "CHHUT-TII, feminine, with a DOUBLED retroflex ट — hold it, tongue curled back throughout. A public holiday, a day off work and the school holidays are all this one word. छुट्टी लेना is 'to take leave'." },
        { id: "hi-u17l4-tyohaar", type: "vocab", front: "त्योहार", reading: "tyohaar", meaning: "a festival", accept: ["a feast day", "a celebration"], example: { jp: "मार्च में एक बड़ा त्योहार है।", en: "There is a big festival in March." }, drill: { jp: "इस त्योहार पर बाज़ार में भीड़ है", en: "At this festival there is a crowd in the market" }, hint: "TYO-HAAR, masculine — त्य is त glued straight onto य, one push. India runs on त्योहार: होली, दिवाली, ईद, and every one of them is a छुट्टी as well." },
        { id: "hi-u17l4-janmadin", type: "vocab", front: "जन्मदिन", reading: "janmadin", meaning: "a birthday", accept: ["a day of birth", "a birth anniversary"], example: { jp: "मेरा जन्मदिन जुलाई में है।", en: "My birthday is in July." }, drill: { jp: "आज मीना का जन्मदिन है", en: "Today is Meena's birthday" }, hint: "JAN-MA-DIN, masculine — जन्म (birth) plus दिन (day), a compound you can take apart on sight. जन्मदिन मुबारक is 'happy birthday'. The न्म cluster is न glued onto म." },
        { id: "hi-u17l4-aglaa", type: "vocab", front: "अगला", reading: "aglaa", meaning: "next", accept: ["the following", "coming", "the one after"], example: { jp: "अगला महीना अक्तूबर है।", en: "Next month is October." }, drill: { jp: "अगला त्योहार मार्च में है", en: "The next festival is in March" }, hint: "AG-LAA, masculine — अगली, अगले. It shares a root with आगे (ahead, unit 14), though Hindi treats them as two separate words rather than one inflected. अगले हफ़्ते is 'next week', oblique because it is a time expression." },
        { id: "hi-u17l4-pichhlaa", type: "vocab", front: "पिछला", reading: "pichhlaa", meaning: "previous", accept: ["last", "the one before", "former"], example: { jp: "पिछला प्रश्न बहुत मुश्किल है।", en: "The previous question is very difficult." }, drill: { jp: "पिछला कमरा बहुत छोटा है", en: "The previous room is very small" }, hint: "PICHH-LAA, masculine — पिछली, पिछले. Built on पीछे (behind), so 'previous' is literally 'the behind one' — the exact mirror of अगला. पिछले साल is 'last year'." },
        { id: "hi-u17l4-hameshaa", type: "vocab", front: "हमेशा", reading: "hameshaa", meaning: "always", accept: ["forever", "every time", "constantly"], example: { jp: "मैं हमेशा जल्दी उठता हूँ।", en: "I always get up early." }, drill: { jp: "यह दुकान हमेशा बंद रहती है", en: "This shop is always closed" }, hint: "HA-ME-SHAA — an adverb, never inflected, and it sits before the verb: मैं हमेशा काम करता हूँ. ⚠️ It OPENS with the two letters of हम ham (we, unit 1) and has nothing whatever to do with it; read past the मे." },
      ],
    },
  ],
};
