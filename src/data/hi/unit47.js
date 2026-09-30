// HI Unit 47 — अगर और काश ("If, and if only") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 2 (u41–u50). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// SLOT KEPT AND RETITLED. The scaffold called it "Grammar 5 — conditionals,
// ability, comparison", and TWO of those three are this unit's:
//   • CONDITIONALS — unit1.js §6's deferred list and unit31.js §A5 both send them
//     here by name, and अगर has been a front since u1l3 with nothing to do.
//   • COMPARISON — unit31.js §A5 sends से ज़्यादा and सबसे here too. सबसे is
//     ALREADY A TAUGHT FRONT, at u22l4 ("most of all"), so this unit teaches the
//     comparative frame and cards the vocabulary of ranking instead.
//   • ABILITY IS NOT. It closed at u32 as a construction with no front
//     (unit31.js §A3), and re-opening it here would put सकना on a second track.
//     ⚠️ THE SLOT TITLE STILL SAYS "ability" AND THAT PART OF IT IS SPENT — named
//     here so the next reader does not go looking for the missing third.
//
// ═════════════════════════════════════════════════════════════════════════════
// THE GRAMMAR THIS UNIT OWES. Four constructions, each taught in the hints and
// examples of the lesson that needs it, and NONE of them has a front — the same
// mechanism §A3 used for सकना and §6 for का/के/की/को.
// ═════════════════════════════════════════════════════════════════════════════
//
// R1. THE SUBJUNCTIVE, AND IT IS THE SPINE OF THE WHOLE UNIT. Hindi has a mood for
//     things that are wanted, asked for, doubted or supposed rather than reported:
//         मैं करूँ · तू करे · वह करे · हम करें · तुम करो · आप करें
//     A consonant stem adds ूँ / े / ें / ो. A VOWEL stem needs the independent
//     letter, because a mātrā cannot follow a mātrā: जाऊँ, जाए, जाएँ, जाओ.
//     ⚠️ IT IS NOT A TENSE AND IT IS NOT THE HABITUAL. करता है reports what
//     happens; करे asks or supposes. Three of this unit's four lessons need it.
//
// R2. अगर … तो — THE REAL CONDITIONAL. अगर opens the condition, तो opens the
//     consequence, and तो is not optional in Hindi the way "then" is in English:
//         अगर कोई दिक्कत हो तो मुझे फ़ोन करो।
//     The अगर clause takes the SUBJUNCTIVE when the thing is merely possible, and
//     the plain perfective when it is treated as settled (अगर बारिश हुई तो…).
//
// R3. काश … होता — THE UNREAL. What did NOT happen takes the -ता form in BOTH
//     halves, never the past: काश यह काम आसान होता — if only this work were easy,
//     said precisely because it is not. यह काम आसान था asserts that it WAS. This
//     is the single distinction lesson 2 exists for, and getting it backwards
//     turns a regret into a claim.
//
// R4. COMPARISON IS A POSTPOSITION, NOT AN ENDING. Hindi has no -er and no -est:
//         X, Y से बड़ा है            X is bigger than Y      (से alone)
//         X, Y से ज़्यादा बड़ा है     the same, made explicit
//         X सबसे बड़ा है             X is the biggest        (सबसे, u22l4)
//     ⚠️ बेहतर IS THE ONE EXCEPTION AND lesson 3 TEACHES IT AS SUCH: it is already
//     a comparative, so it takes से and NEVER ज़्यादा. ज़्यादा बेहतर is not Hindi.
//
// R5. THE CONCESSIVES, all three in lesson 4, and each has a different shape:
//         X के बावजूद        in spite of X        — takes a NOUN, and के comes FIRST
//         भले ही X … फिर भी  even if X … still    — X is SUBJUNCTIVE
//         X, बशर्ते कि Y      X, provided that Y   — Y is SUBJUNCTIVE
//     हालाँकि (u39l1) joins two whole clauses and is the one the learner already
//     has; these three are the ones it could not cover.
//
// ⚠️ scripts/scope-hi.mjs WAS EXTENDED FOR THIS UNIT, AND IT IS A COMPLETION OF A
// PARADIGM RATHER THAN A NEW CLASS. derive() already generated ूँगा and ेगा (A2
// block 1) but neither the subjunctive ूँ / ें nor the other six future forms, so
// करूँगा read as in scope while करें, करेंगे and करोगे did not — and a subjunctive
// unit is unwritable without them. Added: ूँ, ें, ूँगी, ेगी, ेंगे, ेंगी, ोगे, ोगी on a
// consonant stem, and ऊँ, एँ, ऊँगा, ऊँगी, एगा, एगी, एँगे, एँगी, ओगे, ओगी on a vowel
// stem (a mātrā cannot follow a mātrā — जाऊँगा, never जाूँगा). IRREGULAR gained the
// three verbs whose stems the paradigm cannot predict: होना (होगा/होंगे/हूँगा —
// गा attaches straight to हो), लेना (लूँगा but लेगा) and देना (दूँगा but देगा).
// MEASURED BOTH WAYS on the merged corpus, exactly as unit31.js §A6 requires:
//     script band u1–u6   136 → 136
//     A1 u7+                0 →   0    ← the number that must be zero, unmoved
//     sentences checked   2092 → 2092
// So it overturns no existing verdict and licenses nothing but generated forms of
// verbs the course already teaches.
//
// ⚠️ THIRTEEN OF THIS BLOCK'S PLANNED FRONTS WENT TO BLOCK 3 INSTEAD, FOUR OF THEM
// FROM THIS UNIT, and the reason is worth recording because no tool in the repo
// would have caught it. Blocks 2 and 3 author in parallel and cannot see each
// other's trees, so `validate:content` is green on each branch and fails on the
// merge. Measured against block 3's live front list 2026-09-30 and resolved ON
// THEME, not on slot number — the older-unit-wins rule would have handed all
// thirteen to me and forced block 3 to re-author cards it had already finished:
//     फ़ायदा  → block 3's u57 (the abstract-reasoning unit)   this unit's l1
//     अफ़सोस  → block 3's u52 (the emotions unit)             this unit's l2
//     हकीकत  → block 3's u57                                this unit's l2
//     कल्पना  → block 3's u57                                this unit's l2
// अंजाम, भ्रम, वाकई and सूरत took those four slots. All four are new fronts, screened
// against the whole corpus AND against block 3's 216 authored fronts: zero front,
// reading or gloss collisions.
//
// GENDER TRAPS (§4), each named in its own hint:
//   ⚠️ दिक्कत, गुंजाइश, संभावना, किस्मत, सूरत, तुलना, खूबी, मर्ज़ी and गुज़ारिश are
//   FEMININE — and दिक्कत, गुंजाइश and सूरत end in a CONSONANT with nothing in the
//   shape to say so, while संभावना and तुलना end in -ा and are feminine ANYWAY
//   (every -ना abstract noun is), which is the opposite of what §4's -ा rule
//   predicts. यह दिक्कत बड़ी है, never बड़ा.
//   मामला, अंजाम, जोखिम, संयोग, भ्रम and दर्जा are MASCULINE.
//   काश, वाकई, बेहतर, बढ़िया, खराब, बशर्ते, बेहद, बावजूद and भले are INVARIANT and
//   take no gender at all — nine of this unit's 24 cards, because a unit about
//   conditions and degrees is mostly made of words that do not agree.
//
// ⚠️ THREE NOUNS HERE END IN -ना AND ARE NOT INFINITIVES: संभावना and तुलना (plus
// u44's सूचना and घटना). derive() in scope-hi.mjs cannot tell a noun from a verb and
// generates a verb paradigm from each; the strings it makes (संभावें, तुलूँ) are
// harmless because no sentence contains them. Each one's hint says it is not a verb.
//
// ⚠️ MARK-BOUNDARY PAIRS THIS UNIT CREATES, measured with the router's own `\p{L}`
// boundary test and not by eye — every seam below is a `\p{M}` mātrā, halant or
// nukta, which the test does not treat as a word break:
//     मत (u22l1) matches inside किस्मत      ⚠️ AND u43's HEADER CITES मत AS u22l2,
//                                          WHICH IS WRONG — it is u22l1, verified.
//                                          Corrected in that file.
//     जाम (u33l3) matches inside अंजाम
//     कई (u22l4) matches inside वाकई
//     हद (u23l2) matches inside बेहद
//     या (u22l2) matches inside बढ़िया
// None of those older cards' sentences can contain a word this unit introduces, so
// nothing breaks today; the list exists so a later block moving one of those
// practice sentences knows what not to put in it. `selfcheck-hi-a2-block2.mjs`
// checks the direction that CAN break — a block-2 front hiding inside a longer word
// in its own example or drill — mechanically.
//
// ⚠️ ONE SHARED ROOT, AND IT IS TWO LEXEMES: बशर्ते (l4) is the Persian ba- plus
// शर्त, a condition, which is u39l2's front. A NOUN there and a CONJUNCTION here,
// in different units, with different readings — the same shape as u44's पत्रिका
// beside पत्रकार and u41's खेल beside खेलना. शर्त does NOT whole-word-match inside
// बशर्ते (the character before it is ब, a real letter — measured, not assumed).
//
// RETROFLEX/DENTAL (§1b): no new colliding pair, checked against all 1104 readings.
// दिक्कत dikkat, किस्मत kismat, बेहतर behtar and बेहद behad are all DENTAL and no
// retroflex counterpart exists in the corpus. §1(b)'s doubling hatch fires NOWHERE
// in this unit.
// GEMINATION (§1): दिक्कत dikkat doubles its क, as the spelling requires.
// ⚠️ ONE READING WORTH ITS HINT: वाकई is **vaakaii**, three syllables, because the
// क keeps its own inherent a when a full ई follows it — not vaakii. §1's
// inherent-a rule is a PRONUNCIATION rule and this is the case where it adds a
// syllable instead of deleting one.
export const HI_UNIT47 = {
  id: "hi-u47",
  lang: "hi",
  title: "अगर और काश",
  order: 47,
  stage: "a2",
  lessons: [
    {
      id: "hi-u47l1",
      unit: 47,
      lesson: 1,
      title: "अगर … तो — naming what is at stake",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what follows if something is or is not the case, with अगर … तो, and name the snag, the risk and the room you have left.",
      items: [
        { id: "hi-u47l1-dikkat", type: "vocab", front: "दिक्कत", reading: "dikkat", meaning: "a snag", accept: ["a hitch", "what is holding a thing up"], example: { jp: "अगर कोई दिक्कत हो तो मुझे फ़ोन करो।", en: "If there is any snag, phone me." }, drill: { jp: "इस काम में एक दिक्कत है", en: "There is one snag in this job" }, hint: "DIK-KAT, FEMININE, plural दिक्कतें, with the doubled क्क of §1's gemination. मुश्किल says a thing IS hard; a दिक्कत is the particular thing stopping it — दिक्कत क्या है? what is the trouble? Note हो, not है: after अगर the verb goes subjunctive." },
        { id: "hi-u47l1-maamlaa", type: "vocab", front: "मामला", reading: "maamlaa", meaning: "an affair", accept: ["a matter being dealt with", "the business in hand"], example: { jp: "यह मामला अब अदालत में है।", en: "This affair is in court now." }, drill: { jp: "यह मामला बहुत पुराना है", en: "This affair is very old" }, hint: "MAAM-LAA, MASCULINE, plural मामले. Whatever is currently being dealt with — a police मामला, a family मामला, and मामला क्या है? what is going on? बात is something SAID; a मामला is something under way. मुकदमा, from the society unit, is specifically a court case." },
        { id: "hi-u47l1-gunjaaish", type: "vocab", front: "गुंजाइश", reading: "gunjaaish", meaning: "room for something", accept: ["scope left over", "slack in a plan"], example: { jp: "इस कीमत में कोई गुंजाइश नहीं है।", en: "There is no room in this price." }, drill: { jp: "इस काम में गुंजाइश कम है", en: "There is little room in this job" }, hint: "GUN-JAAISH, FEMININE, with the ं before ज read as n. Room LEFT — in a price it is room to bargain, in a plan it is slack, in an argument it is a point still open. जगह is physical space you can point at; गुंजाइश is not." },
        { id: "hi-u47l1-anjaam", type: "vocab", front: "अंजाम", reading: "anjaam", meaning: "the end a thing comes to", accept: ["where a course of action lands", "what it finally came to"], example: { jp: "इस झगड़े का अंजाम बुरा हुआ।", en: "This quarrel turned out badly." }, drill: { jp: "हर काम का अंजाम होता है", en: "Every action has an outcome" }, hint: "AN-JAAM, MASCULINE, ं read as n before ज. The end a thing comes to, and usually a bad one — इसका अंजाम बुरा होगा. नतीजा is the neutral result of a sum or a test; अंजाम is where a course of action lands you. ⚠️ जाम, a traffic jam, hides inside it at the mātrā seam." },
        { id: "hi-u47l1-jokhim", type: "vocab", front: "जोखिम", reading: "jokhim", meaning: "a gamble", accept: ["a risk taken on purpose", "exposure to loss"], example: { jp: "अगर तुम यह जोखिम लो तो नुकसान भी हो सकता है।", en: "If you take this gamble, there can be a loss too." }, drill: { jp: "इस काम में जोखिम ज़्यादा है", en: "There is more risk in this job" }, hint: "JO-KHIM, MASCULINE, with PLAIN ख — §A4 keeps क़ ख़ ग़ out of every Hindi front. A risk you CHOOSE to run: जोखिम लेना, to take a chance. खतरा is a danger that is simply there; a जोखिम is one you walked into." },
        { id: "hi-u47l1-sambhaavnaa", type: "vocab", front: "संभावना", reading: "sambhaavnaa", meaning: "a possibility", accept: ["a likelihood", "how likely a thing is"], example: { jp: "कल बारिश की संभावना ज़्यादा है।", en: "There is a strong likelihood of rain tomorrow." }, drill: { jp: "जीत की संभावना अब कम है", en: "The likelihood of a win is low now" }, hint: "SAM-BHAAV-NAA, ⚠️ FEMININE even though it ends in -ा, because every -ना abstract noun is — and ⚠️ NOT A VERB: there is no संभावना करना. ं before भ reads m and भ is aspirated. मुमकिन says a thing CAN happen; संभावना says how likely." },
      ],
    },
    {
      id: "hi-u47l2",
      unit: 47,
      lesson: 2,
      title: "काश — what did not happen",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what you wish had been so, with काश and the -ता form, and tell the real apart from what was only supposed.",
      items: [
        { id: "hi-u47l2-kaash", type: "vocab", front: "काश", reading: "kaash", meaning: "if only", accept: ["I wish", "would that it were so"], example: { jp: "काश वह आज यहाँ होता।", en: "If only he were here today." }, drill: { jp: "काश यह काम आसान होता", en: "If only this work were easy" }, hint: "KAASH, invariant, and always FIRST in its clause. ⚠️ THE VERB AFTER काश IS THE -ता FORM, NEVER THE PLAIN PAST: काश यह सच होता, if only it were true — said because it is not. यह सच था asserts that it WAS. The whole point of the word is that the thing did not happen." },
        { id: "hi-u47l2-kismat", type: "vocab", front: "किस्मत", reading: "kismat", meaning: "fate", accept: ["the luck a person is born with", "how things were destined"], example: { jp: "उस दिन उसकी किस्मत अच्छी थी।", en: "His luck was good that day." }, drill: { jp: "यह सब किस्मत का खेल है", en: "All this is a game of fate" }, hint: "KIS-MAT, FEMININE. What was written for you — किस्मत में लिखा है, it is written in one's fate. ⚠️ The imperative मत, do not, whole-word-matches INSIDE this word at the mātrā seam, so the two never share a sentence here. नसीब means the same and is deliberately not taught: one word for fate is enough." },
        { id: "hi-u47l2-sanyog", type: "vocab", front: "संयोग", reading: "sanyog", meaning: "a coincidence", accept: ["two things happening to line up", "sheer chance"], example: { jp: "यह सिर्फ़ संयोग था कि हम एक ही दिन वहाँ थे।", en: "It was only a coincidence that we were there on the same day." }, drill: { jp: "यह एक अच्छा संयोग है", en: "This is a happy coincidence" }, hint: "SAN-YOG, MASCULINE, ं read n before य. Things lining up with nothing behind it — संयोग से, by chance. किस्मत is a plan you cannot see; a संयोग is no plan at all, which is exactly the contrast this lesson is built on." },
        { id: "hi-u47l2-bhram", type: "vocab", front: "भ्रम", reading: "bhram", meaning: "a false impression", accept: ["a mistaken belief", "being under an illusion"], example: { jp: "उसे भ्रम था कि सब ठीक है।", en: "He was under the impression that everything was fine." }, drill: { jp: "यह सिर्फ़ एक भ्रम है", en: "This is only an illusion" }, hint: "BHRAM, MASCULINE, one syllable, built on the भ्र conjunct of unit 6 — aspirated भ with र stacked under it. Believing what is not so: भ्रम में रहना, to be under an illusion. झूठ is told to you on purpose; a भ्रम you arrive at by yourself." },
        { id: "hi-u47l2-vaakaii", type: "vocab", front: "वाकई", reading: "vaakaii", meaning: "really and truly", accept: ["in actual reality", "with no exaggeration"], example: { jp: "यह काम वाकई मुश्किल था।", en: "This work was really difficult." }, drill: { jp: "वह वाकई बहुत अच्छा खिलाड़ी है", en: "He really is a very good player" }, hint: "VAA-ka-II, THREE syllables and invariant — the क keeps its own inherent a because a full ई follows it, so it is not vaakii. It confirms that a thing really is so, and on its own वाकई? means really? दरअसल corrects what you thought; वाकई agrees that you were right. ⚠️ कई, several, hides inside it." },
        { id: "hi-u47l2-suurat", type: "vocab", front: "सूरत", reading: "suurat", meaning: "the case one is in", accept: ["the shape a situation has taken", "a set of circumstances"], example: { jp: "ऐसी सूरत में हमें रुकना पड़ेगा।", en: "In that case we will have to stop." }, drill: { jp: "इस सूरत में काम मुश्किल है", en: "In this case the work is difficult" }, hint: "SUU-RAT, FEMININE. Its everyday sense is a face, but after ऐसी or इस it is THE SHAPE A SITUATION HAS TAKEN — ऐसी सूरत में, in that case; किसी सूरत में, in any event. It is how Hindi says 'if it comes to that' without another अगर." },
      ],
    },
    {
      id: "hi-u47l3",
      unit: 47,
      lesson: 3,
      title: "Better, worse, best of all",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Compare two things with से, pick the best of all with सबसे, and say what is first-rate and what has stopped working.",
      items: [
        { id: "hi-u47l3-behtar", type: "vocab", front: "बेहतर", reading: "behtar", meaning: "better", accept: ["preferable", "an improvement on something"], example: { jp: "यह तरीका पहले से बेहतर है।", en: "This method is better than the earlier one." }, drill: { jp: "आज मौसम कल से बेहतर है", en: "The weather is better today than yesterday" }, hint: "BEH-TAR, INVARIANT — no बेहतरा, no बेहतरी, it never agrees with anything. ⚠️ IT IS ALREADY A COMPARATIVE, so it takes से and NEVER ज़्यादा: इससे बेहतर, better than this, and ज़्यादा बेहतर is not Hindi. अच्छा by contrast needs से ज़्यादा to compare at all." },
        { id: "hi-u47l3-barhiyaa", type: "vocab", front: "बढ़िया", reading: "barhiyaa", meaning: "first-rate", accept: ["top quality", "as good as it gets"], example: { jp: "यह कपड़ा बहुत बढ़िया है।", en: "This cloth is very fine." }, drill: { jp: "उसका खाना बढ़िया होता है", en: "His cooking is first-rate" }, hint: "BAR-HI-YAA, ⚠️ INVARIANT despite the -या ending — बढ़िया कपड़ा and बढ़िया चीज़ both, never बढ़िये. ढ़ reads rh under §1(c). It is the word a shopkeeper uses for his best goods, and the flat answer बढ़िया! means excellent. ⚠️ या, or, whole-word-matches inside it." },
        { id: "hi-u47l3-kharaab", type: "vocab", front: "खराब", reading: "kharaab", meaning: "out of order", accept: ["no longer working", "gone off"], example: { jp: "यह मशीन कल से खराब है।", en: "This machine has been out of order since yesterday." }, drill: { jp: "दूध जल्दी खराब होता है", en: "Milk goes off quickly" }, hint: "KHA-RAAB, INVARIANT, PLAIN ख. Two jobs: broken (मशीन खराब है) and gone off (दूध खराब हो गया). बुरा is a moral or emotional judgement — बुरा आदमी, बुरी खबर — while खराब is a thing that has stopped being fit for use. गड़बड़, from the technology unit, is the fault itself." },
        { id: "hi-u47l3-tulnaa", type: "vocab", front: "तुलना", reading: "tulnaa", meaning: "a comparison", accept: ["a weighing of two things", "putting two things side by side"], example: { jp: "इन दोनों की तुलना करना ठीक नहीं है।", en: "Comparing these two is not right." }, drill: { jp: "दोनों शहरों की तुलना मुश्किल है", en: "Comparing the two cities is difficult" }, hint: "TUL-NAA, FEMININE, and ⚠️ NOT A VERB despite the -ना ending — like सूचना and घटना in the media unit. You say तुलना करना, and X की Y से तुलना करना, to compare X with Y. Built on तोलना, to weigh, which is not carded anywhere in this course." },
        { id: "hi-u47l3-darjaa", type: "vocab", front: "दर्जा", reading: "darjaa", meaning: "a rank", accept: ["a grade of quality", "a standing"], example: { jp: "इस होटल का दर्जा ऊँचा है।", en: "This hotel is of high standing." }, drill: { jp: "उसका दर्जा सबसे ऊँचा है", en: "His rank is the highest of all" }, hint: "DAR-JAA, MASCULINE, plural दर्जे, with the र् halant of unit 6. पहला दर्जा is first class on a train and ऊँचा दर्जा is high standing. ⚠️ Do not hear दर्जन, a dozen, from the measuring unit: there the ज is followed by a न." },
        { id: "hi-u47l3-khuubii", type: "vocab", front: "खूबी", reading: "khuubii", meaning: "a good point", accept: ["a merit", "what is admirable in something"], example: { jp: "इस तरीके की एक बड़ी खूबी है।", en: "This method has one great merit." }, drill: { jp: "उसकी सबसे बड़ी खूबी उसकी हिम्मत है", en: "His greatest merit is his courage" }, hint: "KHUU-BII, FEMININE, plural खूबियाँ, PLAIN ख. A quality worth praising — इसकी खूबी यह है कि…, the good thing about it is that… हुनर is a skill somebody learned; a खूबी is a merit a person or a thing simply has." },
      ],
    },
    {
      id: "hi-u47l4",
      unit: 47,
      lesson: 4,
      title: "Even so, provided that",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Ask for something politely with the subjunctive, and concede a point with बावजूद, भले ही and बशर्ते.",
      items: [
        { id: "hi-u47l4-marzii", type: "vocab", front: "मर्ज़ी", reading: "marzii", meaning: "one's own wish", accept: ["what somebody pleases", "a person's own will"], example: { jp: "यह आपकी मर्ज़ी है कि आप क्या करें।", en: "It is your own wish what you do." }, drill: { jp: "यह काम अपनी मर्ज़ी से करो", en: "Do this work of your own accord" }, hint: "MAR-ZII, FEMININE, with the nukta ज़ read z and the र् halant. Somebody's own free choice — अपनी मर्ज़ी से, of one's own accord; जैसी आपकी मर्ज़ी, as you please. ⚠️ Note करें in the example: after कि in a मर्ज़ी sentence the verb is SUBJUNCTIVE, because what is at stake is a choice, not a report. इजाज़त is what somebody else grants you." },
        { id: "hi-u47l4-guzaarish", type: "vocab", front: "गुज़ारिश", reading: "guzaarish", meaning: "a polite request", accept: ["a humble appeal", "asking as a favour"], example: { jp: "मेरी गुज़ारिश है कि आप एक बार सोचें।", en: "My request is that you think it over once." }, drill: { jp: "मेरी एक छोटी गुज़ारिश है", en: "I have one small request" }, hint: "GU-ZAA-RISH, FEMININE, nukta ज़. The most polite way to ask for anything: गुज़ारिश है कि… ⚠️ AND THE VERB IN THAT कि CLAUSE IS THE SUBJUNCTIVE — आप सोचें, not आप सोचते हैं. That contrast is what the subjunctive is FOR: a thing asked for, never a thing reported. माँगना is to ask for an object." },
        { id: "hi-u47l4-basharte", type: "vocab", front: "बशर्ते", reading: "basharte", meaning: "provided that", accept: ["only on condition that", "so long as"], example: { jp: "मैं चलूँगा बशर्ते तुम भी साथ चलो।", en: "I will go, provided you come along too." }, drill: { jp: "मैं आऊँगा बशर्ते मौसम ठीक हो", en: "I will come provided the weather is fine" }, hint: "BA-SHAR-TE, invariant, and it hangs a CONDITION on the rest of the sentence: X, बशर्ते कि Y. ⚠️ The verb after it is SUBJUNCTIVE — बशर्ते तुम आओ, never बशर्ते तुम आते हो. It is the Persian ba-, meaning with, plus शर्त, a condition, from the connectors unit: a noun there, a conjunction here." },
        { id: "hi-u47l4-behad", type: "vocab", front: "बेहद", reading: "behad", meaning: "extremely", accept: ["beyond all limit", "to an enormous degree"], example: { jp: "आज का दिन बेहद मुश्किल था।", en: "Today was extremely difficult." }, drill: { jp: "यह किताब बेहद अच्छी है", en: "This book is extremely good" }, hint: "BE-HAD, invariant. Literally without a हद, a limit — be- is the Persian prefix for without, and हद is a front from the postposition unit. Stronger than बहुत, and used for what is hard to measure: बेहद खुश, बेहद ठंडा. ⚠️ हद whole-word-matches inside it at the mātrā seam." },
        { id: "hi-u47l4-baavjuud", type: "vocab", front: "बावजूद", reading: "baavjuud", meaning: "in spite of", accept: ["despite something", "even with that against it"], example: { jp: "बारिश के बावजूद मैच हुआ।", en: "The match happened in spite of the rain." }, drill: { jp: "उम्र के बावजूद वह तेज़ चलता है", en: "In spite of his age he walks fast" }, hint: "BAAV-JUUD, invariant, and ⚠️ IT ALWAYS FOLLOWS के: X के बावजूद, never बावजूद X. With a verb the के attaches to the oblique infinitive — कोशिश करने के बावजूद, in spite of trying. हालाँकि joins two whole clauses; बावजूद takes a noun and nothing else." },
        { id: "hi-u47l4-bhale", type: "vocab", front: "भले", reading: "bhale", meaning: "even if", accept: ["granted that", "it may well be that"], example: { jp: "भले ही देर हो जाए वह ज़रूर आएगा।", en: "Even if it gets late, he will definitely come." }, drill: { jp: "भले काम मुश्किल हो वह करेगा", en: "Even if the work is hard he will do it" }, hint: "BHA-LE, invariant, almost always भले ही, and the second half answers it with फिर भी: भले ही मुश्किल हो फिर भी करना है. ⚠️ The verb after भले ही is SUBJUNCTIVE — भले ही देर हो, not देर होती है — because you are conceding a possibility, not reporting a fact." },
      ],
    },
  ],
};
