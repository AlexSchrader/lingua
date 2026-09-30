// HI Unit 23 — परसर्ग ("Postpositions") — A1
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 RETHEMED SLOT, AND FOR A REASON THAT IS NOT COSMETIC. The scaffold called
// this "Grammar 2 — verbs and PARTICLES". A particle is a Japanese word class
// (は・が・を・に・で). Hindi has POSTPOSITIONS: they FOLLOW their noun and force
// the noun in front of them into the OBLIQUE case — a different mechanism with a
// different name. unit1.js §10 flagged the artefact and §6 assigned the slot.
// Retitled in Devanagari; lint hard-errors on the English working title.
//
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 §6's ASSIGNMENT COULD NOT BE CARRIED OUT AS WRITTEN, AND THIS IS THE FINDING
// ─────────────────────────────────────────────────────────────────────────────
// §6 gave this unit "का/के/की (of), को (to), पर (on), तक (until)". FOUR OF THOSE
// SIX FRONTS ARE ALREADY TAKEN — by u3's मātrā SYLLABLE GLYPH CARDS. Measured on
// the merged corpus:
//     का → hi-u3l1-syllkaa (glyph, reading "kaa")
//     की → hi-u3l1-syllkii (glyph, reading "kii")
//     के → hi-u3l2-syllke  (glyph, reading "ke")
//     को → hi-u3l3-syllko  (glyph, reading "ko")
// `contract.js` would NOT catch a second card on those fronts — its
// front-uniqueness map skips `glyph` items — so the validator stays green while
// the learner gets two cards showing का, and the language's measured invariant
// (480 fronts → 480 DISTINCT readings, unit11.js) breaks, because the genitive
// का reads "kaa" exactly as the syllable does.
// Block 2 had already met one corner of this and said so: unit11.js declares कि
// FREE because "कि is a u3l1 MĀTRĀ GLYPH card… two different things that happen
// to be spelled alike". The genitive and dative are the same collision, three
// more times.
// ✅ SO: **का/के/की/को STAY FREE AND ARE TAUGHT AS A PARADIGM, NOT AS CARDS.**
// They are in scope from u1 by unit1.js's FREE line, the learner has met them in
// hundreds of sentences, and every hint in this unit spells the paradigm out —
// which is what §6 asked for ("the oblique as a paradigm"). The alternative was
// renaming a u3 glyph id, and an id change wipes that item's mastery. unit1.js
// §6 and its FREE block are corrected in place to record this.
// पर and तक had no such problem and ARE carded here (l1, l2); they are the two
// members of §6's list that were free.
//
// WHAT THE UNIT TEACHES INSTEAD, AND WHY IT IS STILL THE RIGHT 24 CARDS. Hindi
// has roughly a dozen A1 postpositions, not twenty-four, so padding the slot with
// more of them would have meant inventing synonyms (ओर beside तरफ़, बगैर beside
// बिना). The slot is filled with the three things that genuinely belong to
// "what follows a noun":
//     l1  the six SPATIAL postpositions — पर and the five के-compounds
//     l2  the RELATIONAL ones — how far, without what, towards what, whose
//     l3  the RELATIVE-CORRELATIVE series जो/जहाँ/जैसा/जितना, which is the other
//         way Hindi attaches something to a noun, plus the reflexive खुद
//     l4  the compound postpositions that carry a REASON or an EXCEPTION
//
// THE OBLIQUE IS TAUGHT IN THE HINTS, DELIBERATELY. It has no front of its own —
// it is a shift in the noun before the postposition (कमरा → कमरे में, लड़का →
// लड़के पर, दो घर → दो घरों के बीच) — so §6's "PARADIGM" is carried by l1's
// hints and by every example in the unit, which is what "grammar has no item
// type" means in practice.
//
// LEXEME CALLS MADE BY HAND (check-front.mjs's LEXEME verdict is worthless for
// Devanagari — its stem() strips German suffixes). Each of these is a separate
// dictionary entry and no rule in scope-hi.mjs generates one from the other:
//   • बार (u11l4, "an occasion") / बारे (l4, only ever in के बारे में). Two
//     words. ⚠️ AND A MECHANICAL NOTE: findWholeWord's boundary test uses \p{L},
//     which Devanagari MĀTRĀ are not, so "बारे" DOES satisfy a whole-word search
//     for "बार". It costs nothing here — u11l4's drill does not contain बारे and
//     each card clozes only its own front — but any later seat adding बारे to a
//     बार drill would mis-blank it.
//   • पर (l1, "on") / ऊपर (l1, "above"). ऊपर is not derived from पर and the
//     boundary test blocks it anyway: the character before पर inside ऊपर is ऊ,
//     a LETTER.
//   • तरफ़ (l2) is carded and ओर is NOT — they are true synonyms, and carding
//     both would be two mastery tracks for one meaning.
export const HI_UNIT23 = {
  id: "hi-u23",
  lang: "hi",
  title: "परसर्ग",
  order: 23,
  stage: "a1",
  lessons: [
    {
      id: "hi-u23l1",
      unit: 23,
      lesson: 1,
      title: "Where one thing sits against another",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say exactly where a thing is in relation to another thing — on it, above it, under it, behind it, in front of it or between two of them.",
      items: [
        { id: "hi-u23l1-par", type: "vocab", front: "पर", reading: "par", meaning: "on", accept: ["upon", "on top of", "at"], example: { jp: "मेरी किताब मेज़ पर है।", en: "My book is on the table." }, drill: { jp: "पानी मेज़ पर है", en: "The water is on the table" }, hint: "PAR follows its noun and never leads it: मेज़ पर, on the table. Every Hindi postposition works that way, and the noun in front of it shifts to the OBLIQUE — कमरा becomes कमरे में, लड़का becomes लड़के पर. पर is also one of the words for 'but'." },
        { id: "hi-u23l1-uupar", type: "vocab", front: "ऊपर", reading: "uupar", meaning: "above", accept: ["up", "on top", "overhead"], example: { jp: "मेरा कमरा दुकान के ऊपर है।", en: "My room is above the shop." }, drill: { jp: "बादल हमारे ऊपर हैं", en: "The clouds are above us" }, hint: "UU-PAR needs के in front of whatever it is above: मेज़ के ऊपर. On its own it means up or upstairs — ऊपर जाओ, go up. Note the oblique in हमारे ऊपर: हमारा becomes हमारे before it." },
        { id: "hi-u23l1-niiche", type: "vocab", front: "नीचे", reading: "niiche", meaning: "below", accept: ["under", "down", "underneath"], example: { jp: "बिल्ली कुर्सी के नीचे बैठती है।", en: "The cat sits under the chair." }, drill: { jp: "किताब मेज़ के नीचे है", en: "The book is under the table" }, hint: "NII-CHE takes के before the thing it is under: पेड़ के नीचे, under the tree. Alone it means down or downstairs. Its ending never changes, because it is already an oblique form." },
        { id: "hi-u23l1-biich", type: "vocab", front: "बीच", reading: "biich", meaning: "the middle", accept: ["the centre", "between", "the midst"], example: { jp: "दो दुकानों के बीच एक गली है।", en: "There is a lane between two shops." }, drill: { jp: "मेरा घर बाज़ार के बीच है", en: "My house is in the middle of the market" }, hint: "BIICH, MASCULINE. के बीच is 'between' or 'in the middle of', and what it sits between goes into the PLURAL OBLIQUE — दो घरों के बीच, not दो घर के बीच. That -ओं is the oblique plural." },
        { id: "hi-u23l1-piichhe", type: "vocab", front: "पीछे", reading: "piichhe", meaning: "behind", accept: ["at the back", "to the rear", "after someone"], example: { jp: "बगीचा घर के पीछे है।", en: "The garden is behind the house." }, drill: { jp: "कुत्ता मेरे पीछे चलता है", en: "The dog walks behind me" }, hint: "PII-CHHE with a breathy छ. के पीछे is behind something: दरवाज़े के पीछे — and note दरवाज़ा shifting to दरवाज़े. It also means 'after' in the sense of following. आगे is its opposite." },
        { id: "hi-u23l1-saamne", type: "vocab", front: "सामने", reading: "saamne", meaning: "in front", accept: ["opposite", "facing", "before one's eyes"], example: { jp: "मेरा घर मंदिर के सामने है।", en: "My house is in front of the temple." }, drill: { jp: "वह मेरे सामने बैठता है", en: "He sits in front of me" }, hint: "SAAM-NE means facing, directly across from: स्टेशन के सामने. It is not the same as आगे, which is simply 'ahead' — सामने puts two things face to face." },
      ],
    },
    {
      id: "hi-u23l2",
      unit: 23,
      lesson: 2,
      title: "How far, without what, and the one that",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how far something goes, what you are doing without, which way you are heading, and which one you mean.",
      items: [
        { id: "hi-u23l2-tak", type: "vocab", front: "तक", reading: "tak", meaning: "up to", accept: ["until", "till", "as far as"], example: { jp: "मैं दस बजे तक काम करता हूँ।", en: "I work until ten o'clock." }, drill: { jp: "यह रास्ता नदी तक जाता है", en: "This road goes as far as the river" }, hint: "TAK follows the point you reach, in time or in space: शाम तक, until evening; स्टेशन तक, as far as the station. With a verb it takes the -ने form — जाने तक, until going." },
        { id: "hi-u23l2-binaa", type: "vocab", front: "बिना", reading: "binaa", meaning: "without", accept: ["lacking", "in the absence of", "minus"], example: { jp: "मैं चीनी के बिना चाय पीता हूँ।", en: "I drink tea without sugar." }, drill: { jp: "वह पैसे के बिना बाज़ार जाता है", en: "He goes to the market without money" }, hint: "BI-NAA is the one postposition that works on EITHER side of its noun: चीनी के बिना and बिना चीनी के are both correct and both common. Note पैसा becoming पैसे in front of it." },
        { id: "hi-u23l2-taraf", type: "vocab", front: "तरफ़", reading: "taraf", meaning: "the direction", accept: ["the side", "towards", "one's direction"], example: { jp: "वह नदी की तरफ़ जाता है।", en: "He goes towards the river." }, drill: { jp: "मेरा घर इस तरफ़ है", en: "My house is in this direction" }, hint: "TA-RAF, FEMININE, so it takes की: नदी की तरफ़, towards the river. It is both the direction you move in and the side you are on — मेरी तरफ़ is 'on my side'. ओर is the Sanskrit word for the same thing, and this course teaches only one of the two." },
        { id: "hi-u23l2-vaalaa", type: "vocab", front: "वाला", reading: "vaalaa", meaning: "the one that", accept: ["the one belonging to", "the kind that", "the seller of"], example: { jp: "लाल रंग वाला बैग मेरा है।", en: "The red-coloured bag is mine." }, drill: { jp: "वह चाय वाला यहाँ आता है", en: "That tea seller comes here" }, hint: "VAA-LAA turns anything into 'the one that…': लाल वाला, the red one; चाय वाला, the tea seller; दिल्ली वाली ट्रेन, the Delhi train. It AGREES like every -ा word — वाला, वाली, वाले — with what it describes." },
        { id: "hi-u23l2-had", type: "vocab", front: "हद", reading: "had", meaning: "a limit", accept: ["a boundary", "an extent", "how far it may go"], example: { jp: "इस काम की एक हद है।", en: "There is a limit to this work." }, drill: { jp: "हर काम की एक हद है", en: "Every job has a limit" }, hint: "HAD, FEMININE, so it takes की. हद तक is 'to the extent of', and किसी हद तक is 'to some extent'. हद हो गई! is an everyday complaint — that is the limit. It also means a border on a map." },
        { id: "hi-u23l2-dauraan", type: "vocab", front: "दौरान", reading: "dauraan", meaning: "in the course of", accept: ["during", "while", "over the period of"], example: { jp: "काम के दौरान मैं पानी पीता हूँ।", en: "During the work I drink water." }, drill: { jp: "बारिश के दौरान बाज़ार बंद है", en: "During the rain the market is closed" }, hint: "DAU-RAAN needs के: काम के दौरान, during the work. It is more formal than the everyday बीच में and is what a newspaper uses. Its ending never changes." },
      ],
    },
    {
      id: "hi-u23l3",
      unit: 23,
      lesson: 3,
      title: "The words that point back at a noun",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Build the two-halved Hindi sentence — जो… वह…, जहाँ… वहाँ… — and say you did something yourself.",
      items: [
        { id: "hi-u23l3-jo", type: "vocab", front: "जो", reading: "jo", meaning: "which", accept: ["that which", "whichever", "the thing that"], example: { jp: "जो आदमी यहाँ रहता है, वह मेरा दोस्त है।", en: "The man who lives here is my friend." }, drill: { jp: "जो काम मुश्किल है वह करता हूँ", en: "I do the work which is difficult" }, hint: "JO is the relative pronoun, and Hindi builds the sentence in two halves: जो… वह… , 'the one which… that one…'. English drops the second half; Hindi keeps it. Its oblique form is जिस, which you will meet in reading." },
        { id: "hi-u23l3-jahaan", type: "vocab", front: "जहाँ", reading: "jahaan", meaning: "the place where", accept: ["the location at which", "wherever", "in the place that"], example: { jp: "जहाँ मैं रहता हूँ, वहाँ बहुत पेड़ हैं।", en: "Where I live, there are a lot of trees." }, drill: { jp: "जहाँ काम है वहाँ पैसा है", en: "Where there is work there is money" }, hint: "JA-HAAN is the statement partner of कहाँ and it pairs with वहाँ: जहाँ… वहाँ… . कहाँ asks a question; जहाँ names a place inside a sentence. जहाँ तक means 'as far as'." },
        { id: "hi-u23l3-jaisaa", type: "vocab", front: "जैसा", reading: "jaisaa", meaning: "similar to", accept: ["like", "of the sort that", "the way that"], example: { jp: "मेरा घर आपके घर जैसा है।", en: "My house is like your house." }, drill: { jp: "यह फल आम जैसा मीठा है", en: "This fruit is sweet like a mango" }, hint: "JAI-SAA agrees like any -ा word — जैसा, जैसी, जैसे — with the thing being compared, and it FOLLOWS the noun: आम जैसा, like a mango. ऐसा is 'like this', वैसा is 'like that', जैसा is 'like which': one family, three pointers." },
        { id: "hi-u23l3-jitnaa", type: "vocab", front: "जितना", reading: "jitnaa", meaning: "as much as", accept: ["as many as", "however much", "to the extent that"], example: { jp: "मुझे जितना काम मिलता है, मैं रोज़ करता हूँ।", en: "I do as much work as I get, every day." }, drill: { jp: "मुझे जितना पैसा मिलता है काफ़ी है", en: "As much money as I get is enough" }, hint: "JIT-NAA completes the कितना / इतना / जितना set: कितना asks, इतना answers 'this much', जितना means 'as much as' inside a sentence. It agrees — जितनी चाय, जितने लोग — and its partner उतना, 'that much', is taught at u39l2." },
        { id: "hi-u23l3-kahiin", type: "vocab", front: "कहीं", reading: "kahiin", meaning: "somewhere", accept: ["anywhere", "some place", "somewhere or other"], example: { jp: "मेरी चाबी कहीं है, लेकिन मुझे नहीं मिलती।", en: "My key is somewhere, but I can't find it." }, drill: { jp: "वह कहीं और रहता है", en: "He lives somewhere else" }, hint: "KA-HIIN is the indefinite partner of कहाँ: कहाँ? asks which place, कहीं means some place or other. कहीं नहीं is nowhere and कहीं और is somewhere else. With नहीं it can also warn — कहीं गिर जाओ, mind you don't fall." },
        { id: "hi-u23l3-khud", type: "vocab", front: "खुद", reading: "khud", meaning: "oneself", accept: ["myself", "personally", "in person"], example: { jp: "मैं यह काम खुद करता हूँ।", en: "I do this work myself." }, drill: { jp: "वह खुद यहाँ आता है", en: "He comes here himself" }, hint: "KHUD is the reflexive for every person — मैं खुद, आप खुद, वह खुद — and it never changes. It adds emphasis: 'I myself'. अपना is the possessive reflexive, 'one's own'; the two do different jobs." },
      ],
    },
    {
      id: "hi-u23l4",
      unit: 23,
      lesson: 4,
      title: "Because of it, instead of it, about it",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Give the reason for something, name what you are doing instead, and say what a conversation is about.",
      items: [
        { id: "hi-u23l4-alaavaa", type: "vocab", front: "अलावा", reading: "alaavaa", meaning: "besides", accept: ["apart from", "in addition to", "other than"], example: { jp: "चाय के अलावा यहाँ दूध भी है।", en: "Besides tea there is milk here too." }, drill: { jp: "इस काम के अलावा कुछ नहीं है", en: "Apart from this job there is nothing" }, hint: "A-LAA-VAA needs के in front of it: चाय के अलावा. It covers both 'besides' (there is more) and 'apart from' (this one excepted), and the sentence decides which. Its ending never changes." },
        { id: "hi-u23l4-bajaay", type: "vocab", front: "बजाय", reading: "bajaay", meaning: "instead of", accept: ["in place of", "rather than", "as a substitute for"], example: { jp: "चाय के बजाय मैं दूध पीता हूँ।", en: "Instead of tea I drink milk." }, drill: { jp: "बस के बजाय मैं ट्रेन लेता हूँ", en: "Instead of the bus I take the train" }, hint: "BA-JAAY takes के: चाय के बजाय. With a verb it uses the -ने form — जाने के बजाय, instead of going. It is slightly formal; in speech people often say की जगह instead." },
        { id: "hi-u23l4-vajah", type: "vocab", front: "वजह", reading: "vajah", meaning: "a reason", accept: ["a cause of something", "the grounds", "why it happened"], example: { jp: "इस वजह से मैं आज घर पर हूँ।", en: "For this reason I am at home today." }, drill: { jp: "बारिश की वजह से बाज़ार बंद है", en: "Because of the rain the market is closed" }, hint: "VA-JAH, FEMININE, and it almost always arrives as की वजह से, 'because of': बारिश की वजह से. It is the everyday spoken word; कारण is its formal twin, and that one takes के, not की." },
        { id: "hi-u23l4-kaaran", type: "vocab", front: "कारण", reading: "kaaran", meaning: "a cause", accept: ["a reason in writing", "the source of it", "what brought it about"], example: { jp: "किसी कारण से वह आज नहीं आता।", en: "For some reason he is not coming today." }, drill: { jp: "इस कारण मैं देर से आता हूँ", en: "For this reason I come late" }, hint: "KAA-RAN, MASCULINE, so it takes के: इस कारण, के कारण. Same meaning as वजह but the Sanskrit half of the pair — कारण is what a newspaper prints, वजह is what the street says. Hindi keeps both and so does this course." },
        { id: "hi-u23l4-baare", type: "vocab", front: "बारे", reading: "baare", meaning: "concerning", accept: ["about", "on the subject of", "regarding"], example: { jp: "वह इस किताब के बारे में बताता है।", en: "He tells us about this book." }, drill: { jp: "मैं आपके बारे में सोचता हूँ", en: "I think about you" }, hint: "BAA-RE never stands alone — it is always के बारे में, 'about': इस काम के बारे में. Learn the three words as one unit. Read it carefully against बार, an occasion: बारे carries the े mātrā." },
        { id: "hi-u23l4-zariye", type: "vocab", front: "ज़रिए", reading: "zariye", meaning: "by means of", accept: ["through", "via", "by way of"], example: { jp: "वह इस रास्ते के ज़रिए आता है।", en: "He comes by way of this road." }, drill: { jp: "मैं फ़ोन के ज़रिए काम करता हूँ", en: "I work by means of the telephone" }, hint: "ZA-RI-YE takes के: फ़ोन के ज़रिए, by phone. It marks the MEANS, where से on its own is vaguer. से is what you say in speech; के ज़रिए is what you read." },
      ],
    },
  ],
};
