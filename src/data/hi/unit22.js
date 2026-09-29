// HI Unit 22 — वाक्य बनाना ("Building a sentence") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot KEPT — the scaffold's "Grammar 1 — basic sentence" names something Hindi
// really has. Retitled in Devanagari as `src/data/lint.js` requires (the English
// working title is in SCAFFOLD_TITLES and hard-errors once the unit is authored).
//
// WHAT THIS UNIT IS AND IS NOT. Hindi's basic sentence was mostly BUILT by
// blocks 1 and 2: SOV order, the four present copula forms (हूँ/है/हैं/हो), नहीं,
// the question words क्या/कौन/कब/कहाँ/क्यों/कैसे/कितना/किसका, से and में. This
// unit adds the pieces a sentence still cannot be made without — the verbs of
// SAYING and THINKING, the negative IMPERATIVE, the hedges, the four
// CONJUNCTIONS, the necessity frame, and the quantifiers.
//
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 THE THREE DEFERRALS BLOCK 1 LEFT TO BLOCK 3, AND WHAT I DID WITH THEM
// ─────────────────────────────────────────────────────────────────────────────
//
// 1. होना — **CARDED HERE (l1), AS "to happen". unit1.js §5's deferral is
//    OVERTURNED and its text is corrected in place.** §5 deferred the infinitive
//    so it would not become a fourth mastery track for है/हूँ/हैं/हो, and that
//    reasoning holds for the COPULA sense. It does not hold for the EVENT sense,
//    which is a different dictionary meaning with no card anywhere in the
//    language: बारिश होती है (it rains), क्या हुआ? (what happened?), आज छुट्टी
//    होती है (today is a holiday). The gloss is "to happen" precisely so it does
//    not collide with है's "is".
//    ✅ AND IT CLOSES A GAP TWO EARLIER UNITS RECORDED. unit17.js said "होना IS
//    STILL DEFERRED AND THAT COSTS THIS UNIT SOMETHING" — बुधवार को बारिश होती है
//    had to be rebuilt on रहना and आना — and unit20.js recorded the same loss for
//    health. Both notes are now false and are corrected in place. From u22 on,
//    `scripts/scope-hi.mjs` generates होती/होते/होकर/होने from this front, so the
//    natural weather and event idioms are in scope for the rest of the language.
//
// 2. सकना — **STILL DEFERRED, and now deferred with a reason strong enough that
//    nobody need re-open it.** Block 2 applied §5's test and found मैं सकना हूँ
//    ungrammatical. It is worse than that: सकना is an AUXILIARY that only ever
//    follows another verb's stem (कर सकता हूँ, जा सकते हैं), so there is no
//    natural Hindi sentence of ANY length containing the bare string सकना — which
//    means it cannot carry a legal `drill` under RUNBOOK §4 and cannot be a front
//    at all without a 3rd-person exception §5 forbids. ABILITY is therefore
//    deferred to A2 as a construction, and unit1.js §6's deferred list now says
//    so. (u1l4's example "अब हम हिंदी पढ़ सकते हैं" stands — u1–u6 sentences are
//    §8 band-exempt and are read TO the learner.)
//
// 3. तब — **CARDED HERE (l2).** It was untaught across all 480 cards and block 1
//    had already removed the hint that promised it, so it was genuinely free. It
//    is carded as the partner of जब (u2), because जब… तब… is a correlative pair
//    Hindi uses far more than English uses "when… then…", and जब shipped without
//    it. जितना/जहाँ/जैसा complete the set in unit23.js.
//
// ⚠️ चाहिए IS NOT CARDABLE AND THAT IS WHY ज़रूरत CARRIES NECESSITY HERE.
// चाहिए was the obvious front for "is needed", and it is a HARD BLOCK:
// `scripts/scope-hi.mjs`'s derive() generates चाह + िए = चाहिए from चाहना (u12l4),
// so it is an inflection of a taught front — the one thing the lexeme rule
// forbids outright. Measured, not guessed. l3 teaches the X की ज़रूरत है frame
// instead, which is the other half of necessity and has no such problem.
//
// FIRST-PERSON EXAMPLES STAY MASCULINE (-ता हूँ), following blocks 1 and 2;
// feminine agreement is shown through मीना, the name unit11.js declared FREE.
//
// ─────────────────────────────────────────────────────────────────────────────
// FREE — the two words block 3 adds. Same test as unit1.js: closed-class grammar
// or a proper name, met in a sentence and never asked for as production.
// ─────────────────────────────────────────────────────────────────────────────
//   • किसी | किसे — the obliques of कोई, which unit1.js already declared FREE.
//     No suffix rule generates them from कोई and no unit teaches them; they are
//     the same class as the उसे | उन्हें | इसे | इन्हें block 2 declared, and
//     "someone needs it" cannot be written without किसी को.
// FREE: किसी | किसे
export const HI_UNIT22 = {
  id: "hi-u22",
  lang: "hi",
  title: "वाक्य बनाना",
  order: 22,
  stage: "a1",
  lessons: [
    {
      id: "hi-u22l1",
      unit: 22,
      lesson: 1,
      title: "Saying what happens, what you think, and what not to do",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Report what someone said, say what you think, tell someone not to do something, and hedge a claim you are unsure of.",
      items: [
        { id: "hi-u22l1-honaa", type: "vocab", front: "होना", reading: "honaa", meaning: "to happen", accept: ["to occur", "to take place", "to become"], example: { jp: "बारिश रोज़ शाम को होती है।", en: "It rains every evening." }, drill: { jp: "ऐसा होना अच्छा नहीं है", en: "It is not good for this to happen" }, hint: "HO-NAA is the infinitive behind है, हूँ, हैं and हो — but as a word in its own right it means to HAPPEN, and that is the sense this card asks for. बारिश होती है is how Hindi says it rains; क्या हुआ? is what happened?" },
        { id: "hi-u22l1-kahnaa", type: "vocab", front: "कहना", reading: "kahnaa", meaning: "to say", accept: ["say", "to state", "to remark"], example: { jp: "वह कहता है कि यह काम मुश्किल है।", en: "He says that this job is difficult." }, drill: { jp: "सच कहना बहुत मुश्किल है", en: "Saying the truth is very difficult" }, hint: "KAH-NAA is the verb Hindi reports speech with: वह कहता है कि… . Keep it apart from बताना, to tell someone something — कहना is the words that came out, बताना is the information that got across." },
        { id: "hi-u22l1-sochnaa", type: "vocab", front: "सोचना", reading: "sochnaa", meaning: "to think", accept: ["think", "to ponder", "to consider"], example: { jp: "मैं सोचता हूँ कि यह रास्ता ठीक है।", en: "I think that this way is right." }, drill: { jp: "ज़्यादा सोचना अच्छा नहीं है", en: "Thinking too much is not good" }, hint: "SOCH-NAA. With कि it carries an opinion: मैं सोचता हूँ कि… . Hindi also uses it for planning — सोच रहा हूँ, I'm thinking of doing it — but keep this card to plain thinking." },
        { id: "hi-u22l1-mat", type: "vocab", front: "मत", reading: "mat", meaning: "do not", accept: ["don't", "do not do it"], example: { jp: "यहाँ मत बोलो, बच्चा सोता है।", en: "Don't talk here, the child is sleeping." }, drill: { jp: "अब यहाँ मत बैठो", en: "Don't sit here now" }, hint: "MAT is the negative that goes with an ORDER, and it sits right before the verb: मत जाओ, don't go. नहीं negates a statement, मत negates a command — swap them and you are wrong in both directions." },
        { id: "hi-u22l1-shaayad", type: "vocab", front: "शायद", reading: "shaayad", meaning: "perhaps", accept: ["maybe", "possibly", "probably"], example: { jp: "शायद यह रास्ता ठीक नहीं है।", en: "Perhaps this way is not right." }, drill: { jp: "शायद वह आज घर पर है", en: "Perhaps he is at home today" }, hint: "SHAA-YAD goes at the front of the sentence: शायद यह ठीक है. Careful written Hindi follows it with a verb form you meet at A2; with a plain statement, as here, it simply means perhaps." },
        { id: "hi-u22l1-bilkul", type: "vocab", front: "बिलकुल", reading: "bilkul", meaning: "absolutely", accept: ["completely", "entirely", "quite so"], example: { jp: "इस नदी का पानी बिलकुल साफ़ है।", en: "This river's water is absolutely clean." }, drill: { jp: "यह बिलकुल ठीक नहीं है", en: "This is absolutely not right" }, hint: "BIL-KUL goes all the way in either direction: बिलकुल ठीक is perfectly fine, बिलकुल नहीं is absolutely not. Said on its own it is an emphatic yes. It is also spelled बिल्कुल; both are current." },
      ],
    },
    {
      id: "hi-u22l2",
      unit: 22,
      lesson: 2,
      title: "Joining two ideas in one sentence",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Join two clauses into one sentence — offering a choice, contrasting, giving a reason, and giving the result.",
      items: [
        { id: "hi-u22l2-yaa", type: "vocab", front: "या", reading: "yaa", meaning: "or", accept: ["or else", "either or"], example: { jp: "आप चाय या दूध पीते हैं?", en: "Do you drink tea or milk?" }, drill: { jp: "मैं चाय या दूध पीता हूँ", en: "I drink tea or milk" }, hint: "YAA joins two choices: चाय या दूध. For 'either… or…' Hindi doubles it — या चाय या दूध. Do not reach for और there: और is 'and', and it turns the choice into a list." },
        { id: "hi-u22l2-lekin", type: "vocab", front: "लेकिन", reading: "lekin", meaning: "but", accept: ["however", "though", "and yet"], example: { jp: "काम मुश्किल है, लेकिन मैं रोज़ करता हूँ।", en: "The work is difficult, but I do it every day." }, drill: { jp: "यह छोटा लेकिन बहुत अच्छा है", en: "This is small but very good" }, hint: "LE-KIN opens the second half of the sentence, exactly like English 'but'. मगर means the same and is commoner in speech. पर is a third option — and that one is also the word for 'on', so watch which you have read." },
        { id: "hi-u22l2-kyonki", type: "vocab", front: "क्योंकि", reading: "kyonki", meaning: "because", accept: ["since", "as", "for the reason that"], example: { jp: "मैं घर पर हूँ क्योंकि बाहर बारिश है।", en: "I am at home because it is raining outside." }, drill: { jp: "मैं नहीं जाता क्योंकि काम है", en: "I don't go because there is work" }, hint: "KYON-KI is क्यों plus कि, and it answers क्यों. It always STARTS the reason clause and never ends the sentence, so there is no Hindi equivalent of trailing 'because of that'." },
        { id: "hi-u22l2-isliye", type: "vocab", front: "इसलिए", reading: "isliye", meaning: "therefore", accept: ["so", "that is why", "for this reason"], example: { jp: "काम बहुत है, इसलिए मैं जल्दी उठता हूँ।", en: "There is a lot of work, so I get up early." }, drill: { jp: "वह बीमार है इसलिए नहीं आता", en: "He is ill so he does not come" }, hint: "IS-LI-YE is the mirror of क्योंकि — क्योंकि puts the reason first, इसलिए puts the result first. Hindi happily uses both in one sentence, which doubles up in English but is normal here." },
        { id: "hi-u22l2-tab", type: "vocab", front: "तब", reading: "tab", meaning: "at that time", accept: ["then", "at that moment", "back then"], example: { jp: "जब बारिश होती है, तब मैं घर पर रहता हूँ।", en: "When it rains, then I stay at home." }, drill: { jp: "जब शाम होती है तब मैं पढ़ता हूँ", en: "When evening comes then I read" }, hint: "TAB is the partner of जब: जब… तब… , 'when… then…'. Hindi uses these pairs far more than English does and expects both halves. अब is now, तब is then — one letter apart, and the rhyme is on purpose." },
        { id: "hi-u22l2-itnaa", type: "vocab", front: "इतना", reading: "itnaa", meaning: "this much", accept: ["so much", "this many", "to this extent"], example: { jp: "इतना काम एक दिन में मुश्किल है।", en: "This much work in one day is difficult." }, drill: { jp: "इतना पानी मेरे लिए बहुत है", en: "This much water is a lot for me" }, hint: "IT-NAA is the answer to कितना: कितना? — इतना. It agrees like any -ा word: इतनी चाय, इतने लोग. जितना, 'as much as', is the third member of the set and comes in the next unit." },
      ],
    },
    {
      id: "hi-u22l3",
      unit: 22,
      lesson: 3,
      title: "Saying what is needed",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you need, ask for help and attention, admit a mistake, and say when something is enough.",
      items: [
        { id: "hi-u22l3-zaruurat", type: "vocab", front: "ज़रूरत", reading: "zaruurat", meaning: "a requirement", accept: ["a need", "necessity", "something needed"], example: { jp: "मुझे एक नई किताब की ज़रूरत है।", en: "I need a new book." }, drill: { jp: "मुझे पानी की ज़रूरत है", en: "I need water" }, hint: "ZA-RUU-RAT, FEMININE, and it arrives in one frame: X की ज़रूरत है, literally 'there is a need OF X'. The thing needed takes की, never को. ज़रूरी, important, is the adjective from the same root." },
        { id: "hi-u22l3-madad", type: "vocab", front: "मदद", reading: "madad", meaning: "help", accept: ["assistance", "aid", "a helping hand"], example: { jp: "मेरा भाई रोज़ घर में मदद करता है।", en: "My brother helps at home every day." }, drill: { jp: "मेरी बहन मेरी मदद करती है", en: "My sister helps me" }, hint: "MA-DAD, FEMININE, and it works through करना: मदद करना, to help. The person helped takes की — मेरी मदद करो, help me. Shouted alone, मदद! is 'help!'." },
        { id: "hi-u22l3-koshish", type: "vocab", front: "कोशिश", reading: "koshish", meaning: "an attempt", accept: ["an effort", "a try", "trying"], example: { jp: "मैं रोज़ हिंदी बोलने की कोशिश करता हूँ।", en: "I try to speak Hindi every day." }, drill: { jp: "कोशिश करना बहुत अच्छा है", en: "Making an attempt is very good" }, hint: "KO-SHISH, FEMININE, and like मदद it pairs with करना: कोशिश करना, to try. What you are trying to do goes into the -ने की form: पढ़ने की कोशिश, an attempt to read." },
        { id: "hi-u22l3-galtii", type: "vocab", front: "गलती", reading: "galtii", meaning: "a mistake", accept: ["an error", "a fault", "a slip"], example: { jp: "इस काम में एक बड़ी गलती है।", en: "There is one big mistake in this work." }, drill: { jp: "यह मेरी गलती नहीं है", en: "This is not my mistake" }, hint: "GAL-TII, FEMININE, plural गलतियाँ. गलती करना is to make one. Written with plain ग: Hindi has a ग़ for Persian and Arabic words but Standard Hindi says them the same, so this course spells them plain throughout." },
        { id: "hi-u22l3-kaafii", type: "vocab", front: "काफ़ी", reading: "kaafii", meaning: "enough", accept: ["sufficient", "plenty", "quite a lot"], example: { jp: "मेरे लिए इतना खाना काफ़ी है।", en: "This much food is enough for me." }, drill: { jp: "यहाँ जगह काफ़ी नहीं है", en: "There is not enough room here" }, hint: "KAA-FII never changes its ending — काफ़ी चाय, काफ़ी लोग. Before an adjective it means 'quite': काफ़ी अच्छा, pretty good. The coffee you drink is कॉफ़ी, a different word with a different vowel." },
        { id: "hi-u22l3-dhyaan", type: "vocab", front: "ध्यान", reading: "dhyaan", meaning: "attention", accept: ["care", "notice", "concentration"], example: { jp: "बच्चे अपने काम पर ध्यान नहीं देते।", en: "The children do not pay attention to their work." }, drill: { jp: "रास्ते पर ध्यान दो", en: "Pay attention to the road" }, hint: "DHYAAN, MASCULINE, written with the ध्य conjunct — ध and य stacked. It goes with देना: ध्यान देना, to pay attention; ध्यान रखना is to look after something. On its own ध्यान is also meditation." },
      ],
    },
    {
      id: "hi-u22l4",
      unit: 22,
      lesson: 4,
      title: "Every, all, only and the rest",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how much of something you mean — every one, all of them, the most, several, only that, or whatever is left.",
      items: [
        { id: "hi-u22l4-har", type: "vocab", front: "हर", reading: "har", meaning: "every", accept: ["each", "every single"], example: { jp: "हर सुबह मैं जल्दी उठता हूँ।", en: "Every morning I get up early." }, drill: { jp: "हर आदमी यह काम करता है", en: "Every man does this work" }, hint: "HAR never changes and always takes a SINGULAR noun: हर दिन, हर आदमी — never हर दिनों. हर एक is 'every single one'. Where English says 'all the days', Hindi prefers हर दिन." },
        { id: "hi-u22l4-sabhii", type: "vocab", front: "सभी", reading: "sabhii", meaning: "all of them", accept: ["everyone", "every one of them", "all together"], example: { jp: "घर में सभी लोग खुश हैं।", en: "Everyone in the house is happy." }, drill: { jp: "सभी बच्चे यहाँ बैठते हैं", en: "All the children sit here" }, hint: "SA-BHII is सब with an emphatic ही fused onto it, and Hindi feels it as its own word: सब is 'all', सभी is 'all of them, every one'. It takes a PLURAL noun — सभी लोग, सभी किताबें." },
        { id: "hi-u22l4-sabse", type: "vocab", front: "सबसे", reading: "sabse", meaning: "most of all", accept: ["the most", "above all", "more than all"], example: { jp: "यह शहर का सबसे बड़ा बाज़ार है।", en: "This is the city's biggest market." }, drill: { jp: "यह सबसे अच्छा रास्ता है", en: "This is the best way" }, hint: "SAB-SE is सब plus से, 'than all' — and it is the ONLY way Hindi makes a superlative: सबसे बड़ा, the biggest; सबसे अच्छा, the best. There is no -est ending anywhere in the language." },
        { id: "hi-u22l4-kaii", type: "vocab", front: "कई", reading: "kaii", meaning: "several", accept: ["a number of", "many", "various"], example: { jp: "मेरे कई दोस्त इस शहर में रहते हैं।", en: "Several of my friends live in this city." }, drill: { jp: "यहाँ कई दुकानें बंद हैं", en: "Several shops here are closed" }, hint: "KA-II takes a PLURAL noun: कई लोग, कई दिन. It means an indefinite few-to-many, where बहुत means a great deal. Its own ending never changes." },
        { id: "hi-u22l4-sirf", type: "vocab", front: "सिर्फ़", reading: "sirf", meaning: "only", accept: ["merely", "nothing but", "no more than"], example: { jp: "मेरे पास सिर्फ़ दस रुपये हैं।", en: "I have only ten rupees." }, drill: { jp: "मैं सिर्फ़ हिंदी बोलता हूँ", en: "I speak only Hindi" }, hint: "SIRF with the Persian फ़ — an f, not an aspirated p. It goes immediately before whatever it limits: सिर्फ़ मैं, only me; मैं सिर्फ़ चाय पीता हूँ, I drink only tea. Move it and you limit something else." },
        { id: "hi-u22l4-baakii", type: "vocab", front: "बाकी", reading: "baakii", meaning: "what is left over", accept: ["the remainder", "the others", "remaining"], example: { jp: "आज का काम पूरा है, बाकी कल है।", en: "Today's work is finished, the rest is tomorrow." }, drill: { jp: "बाकी पैसा मेरे पास है", en: "The remaining money is with me" }, hint: "BAA-KII keeps its ending whatever follows: बाकी काम, बाकी लोग. It is both an adjective (the remaining work) and a noun (the rest of it). In a shop बाकी is your change." },
      ],
    },
  ],
};
