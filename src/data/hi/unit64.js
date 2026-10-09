// HI Unit 64 — हो सकता है ("It may be") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 1. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then unit61.js
// §B1–§B9. This unit adds nothing to them.
//
// Slot KEPT, RETITLED **हो सकता है**. Measured 8/18, the second-emptiest slot in
// block 1's range, and the hole is the right shape: A2 gave the learner शायद
// (u22), मुमकिन and नामुमकिन (u32), शक (u30), भ्रम (u57), अंदाज़ा (u45), ज़ाहिर
// (u57), बेशक, संभावना and गुंजाइश (u47) — the WORDS for possibility. What it
// never gave them is the ability to hold a claim at arm's length: to say a thing
// SEEMS so, that the signs point that way, that you are only guessing, that you
// can barely tell. That is the whole unit, and it is the most B1 thing in the
// band (unit61 §B3).
//
// ⚠️ THE REFUSAL THAT MATTERS MOST HERE, because every later block will want it:
//   **मानो ("as if") IS THE FAMILIAR IMPERATIVE OF मानना, to accept (u26).**
//   Same spelling, same reading maano, and `scripts/scope-hi.mjs` GENERATES it
//   from मानना under the -ो imperative rule unit31.js §A6 added. Carding it would
//   put a homograph of a form the learner already owns on its own mastery track,
//   and `contract.js` would not notice — मानना and मानो are different strings.
//   **गोया is carded instead** and carries the same job. This is the third member
//   of a family block 1 has now hit three times: कड़ी beside कड़ा, लड़ी beside
//   लड़ना (both unit62.js), and मानो beside मानना. **THE GENERAL RULE, and a later
//   block should apply it before every front: check your candidate against the
//   -ा/-ी/-े/-ो paradigm of every taught verb and -आ adjective, not just against
//   the front list.** `chk2.mjs` compares strings; it cannot see an inflection.
//
// ⚠️ SIX MORE FRONTS WANTED AND REFUSED:
//   TAKEN: शायद (u22) · मुमकिन, नामुमकिन (u32) · शक (u30) · भ्रम (u57) ·
//     अंदाज़ा (u45) · ज़ाहिर (u57) · संभावना, गुंजाइश (u47) · दरअसल (u30) ·
//     लगभग (u38) · हरगिज़ (u38) · अंदेशा (u48) · झिझक (u52).
//   BANNED BY unit61 §B1 (the visarga): **संभवतः**. मालूम and कतई carry its work.
//   GLOSS-REFUSED through normalizeMeaning: **असंभव** (नामुमकिन u32 is
//     "impossible") · **संभव** (मुमकिन u32 is "possible") · **निःसंदेह** (बेशक is
//     "no doubt", and it carries a visarga anyway) · **अंदाज़न** (the bare adverb
//     of अंदाज़ा u45) · **ज़ाहिरन** (the bare adverb of ज़ाहिर u57).
//   DENSITY NOTE, deliberate and recorded: **l3 carries FOUR notion-words** —
//     अनुमान, धारणा, कयास, गुमान. That is dense on purpose, because the four are
//     exactly what Hindi distinguishes and English blurs into "guess": a
//     calculated surmise, a settled belief you never examined, an open
//     conjecture, and a vague feeling with nothing behind it. Every hint names
//     the other three. unit57.js took the same decision for its judgement lesson.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   ⚠️ FEMININE: आशंका, **धारणा** (-णा, another of the -ना nouns unit 57 lists),
//   and that is all — this unit is mostly adjectives and adverbs.
//   MASCULINE: आभास, अनुमान, कयास, गुमान, एहसास, संदेह. **आसार is MASCULINE AND
//   PLURAL-ONLY** — आसार हैं, never आसार है, and there is no singular आसार in use.
//   That is the one thing in the unit a learner cannot guess.
//   INVARIANT (unit53's rule): अनिश्चित, अस्पष्ट, संदिग्ध, स्पष्ट, संभावित, मालूम,
//   **अटपटा DOES AGREE** — it ends in -आ, so अटपटा सवाल, अटपटी बात. It is the one
//   agreeing adjective in the unit and the hint says so.
//   ADVERBS: गोया, तकरीबन, बमुश्किल, यकीनन, कतई. None agrees with anything.
//   ⚠️ प्रतीत AND मालूम ARE THE होना-ONLY CLASS unit61 §B5 names: the front is the
//   bare word, the frame is in the hint and the drill, and प्रतीत होना could never
//   be the front because a two-word front breaks `findWholeWord`.
// RETROFLEX/DENTAL (unit1.js §1b): **अटपटा atpataa has TWO RETROFLEX ट** and no
// dental twin अतपता exists. संदिग्ध, संदेह and प्रतीत are all DENTAL. Checked
// against all 1,440 readings: 0 collisions.
// LOANWORD FREE-PASS CHECK (unit1.js §9): no loanwords. Zero free passes.
export const HI_UNIT64 = {
  id: "hi-u64",
  lang: "hi",
  title: "हो सकता है",
  order: 64,
  stage: "b1",
  lessons: [
    {
      id: "hi-u64l1",
      unit: 64,
      lesson: 1,
      title: "It seems so",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say a thing seems to be so rather than is so, point to the signs that suggest it, describe a faint sense of something, say it is roughly such-and-such, and say an argument strikes you as right.",
      items: [
        { id: "hi-u64l1-pratiit", type: "vocab", front: "प्रतीत", reading: "pratiit", meaning: "seeming so", accept: ["appearing to be the case", "giving the impression", "apparently so"], example: { jp: "उसकी दलील पहली बार में ठीक प्रतीत होती है, पर सबूत कोई नहीं है।", en: "His argument seems right at first, but there is no proof at all." }, drill: { jp: "यह बात ठीक प्रतीत होती है", en: "This matter seems right" }, hint: "PRA-TIIT, and it NEVER stands alone — the frame is X प्रतीत होना, always with होना. unit 61 §B5 explains why the front is the bare word: प्रतीत होना is two words and the router can only find one. ⚠️ Formal. In speech Hindi says लगता है (unit 22); प्रतीत होता है is what you write." },
        { id: "hi-u64l1-aasaar", type: "vocab", front: "आसार", reading: "aasaar", meaning: "the signs of something", accept: ["the look of things", "indications", "what the signs point to"], example: { jp: "बादल देखकर लगता है कि आज बारिश के आसार हैं।", en: "Looking at the clouds it seems there are signs of rain today." }, drill: { jp: "आज बारिश के आसार हैं", en: "There are signs of rain today" }, hint: "AA-SAAR — ⚠️ MASCULINE AND PLURAL-ONLY: आसार हैं, never आसार है, and no singular is used. **This is the one thing in the unit a learner cannot guess from the shape.** Not निशान, a trace (unit 73), and not इशारा, a hint (unit 39): आसार are the conditions that make you expect something." },
        { id: "hi-u64l1-aabhaas", type: "vocab", front: "आभास", reading: "aabhaas", meaning: "a dawning sense", accept: ["an inkling", "a faint impression", "a hint of something felt"], example: { jp: "मुझे पहले से आभास था कि वह राज़ी नहीं होगा, और वही हुआ।", en: "I had a dawning sense beforehand that he would not agree, and that is what happened." }, drill: { jp: "मुझे किसी खतरे का आभास हुआ", en: "I had a dawning sense of some danger" }, hint: "AA-BHAAS, masculine. Literally a reflection or a glimmer. ⚠️ Weaker than एहसास (lesson 3), which is a sense you are sure of: an आभास is the first flicker, often before you could say why. The frame is मुझे आभास था." },
        { id: "hi-u64l1-goyaa", type: "vocab", front: "गोया", reading: "goyaa", meaning: "as though", accept: ["as if", "as though it were so", "much as if"], example: { jp: "वह ऐसे बोलता है गोया उसने सब कुछ अपनी आँखों से देखा हो।", en: "He speaks as though he had seen everything with his own eyes." }, drill: { jp: "वह बोलता है गोया सब जानता है", en: "He speaks as though he knows everything" }, hint: "GO-YAA, an ADVERB — it agrees with nothing. It opens the unreal comparison clause and the verb after it usually takes the subjunctive (हो, जाने). ⚠️ **मानो was REFUSED for this job: it is the imperative of मानना, to accept (unit 26)** — same spelling, same reading. The header explains it; गोya does the work." },
        { id: "hi-u64l1-takriiban", type: "vocab", front: "तकरीबन", reading: "takriiban", meaning: "roughly speaking", accept: ["approximately", "about that much", "thereabouts"], example: { jp: "वहाँ तकरीबन सौ लोग थे, पर किसी ने ठीक तादाद नहीं गिनी।", en: "There were roughly a hundred people there, but nobody counted the exact number." }, drill: { jp: "काम तकरीबन पूरा हो गया", en: "The work is roughly finished" }, hint: "TAK-RII-BAN, an ADVERB with the Arabic -an ending Hindi borrows, exactly like नतीजतन (unit 62) and यकीनन (lesson 4). ⚠️ Not लगभग, roughly (unit 38): the two are near-twins, and the difference is register — तकरीबन is spoken, लगभग is written." },
        { id: "hi-u64l1-janchnaa", type: "vocab", front: "जँचना", reading: "janchnaa", meaning: "to strike one as right", accept: ["to ring true to someone", "to seem right to one", "to sit well with someone"], example: { jp: "उसकी बात मुझे जँची, इसलिए मैंने उसका समर्थन किया।", en: "What he said rang true to me, so I supported him." }, drill: { jp: "उसकी बात मुझे जँचना चाहिए", en: "What he says ought to ring true to me" }, hint: "JANCH-NAA, a regular -ना verb. The ँ before च reads n (unit 1 §1). ⚠️ The subject is the THING and the person takes को: मुझे यह बात जँचती है, not मैं जँचता हूँ — the same shape as लगना and पसंद आना. Not कायल (unit 61), which is being won over by an argument; जँचना is the quieter feeling that it fits." },
      ],
    },
    {
      id: "hi-u64l2",
      unit: 64,
      lesson: 2,
      title: "Not certain",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say something is uncertain or unclear, name a nagging doubt and an apprehension about what is coming, call a story suspicious-looking, and say you could hardly tell.",
      items: [
        { id: "hi-u64l2-anishchit", type: "vocab", front: "अनिश्चित", reading: "anishchit", meaning: "uncertain", accept: ["not settled either way", "up in the air", "not fixed yet"], example: { jp: "अभी सब अनिश्चित है, क्योंकि सरकार का रुख साफ़ नहीं हुआ।", en: "Everything is uncertain right now, because the government's stance has not become clear." }, drill: { jp: "अभी सब कुछ अनिश्चित है", en: "Everything is uncertain right now" }, hint: "A-NISH-CHIT, INVARIANT: अनिश्चित हालत, अनिश्चित समय. The अ- prefix negates निश्चित, definite (unit 38) — the same prefix that made असहमत from सहमत (unit 61). ⚠️ Not अस्पष्ट below: अनिश्चित is that NOBODY KNOWS YET, अस्पष्ट is that it was said badly." },
        { id: "hi-u64l2-aspasht", type: "vocab", front: "अस्पष्ट", reading: "aspasht", meaning: "unclear", accept: ["hard to make out", "vague", "not clearly put"], example: { jp: "नियम इतना अस्पष्ट था कि आधे लोगों ने उसे दूसरी तरह समझा।", en: "The rule was so unclear that half the people understood it backwards." }, drill: { jp: "यह नियम बहुत अस्पष्ट था", en: "This rule was very unclear" }, hint: "AS-PASHT, INVARIANT. The अ- prefix negates स्पष्ट, clear to see (lesson 4) — both are carded, so the learner gets the pair. ष्ट is ष with ट stacked, read sht. ⚠️ A thing is अस्पष्ट because of HOW IT WAS PUT; it is अनिश्चित because the facts are not in yet." },
        { id: "hi-u64l2-sandeh", type: "vocab", front: "संदेह", reading: "sandeh", meaning: "a nagging doubt", accept: ["a lingering uncertainty", "a misgiving", "a doubt that will not go"], example: { jp: "मुझे उसके इरादे पर संदेह नहीं है, संदेह उसके अंदाज़े पर है।", en: "I have no doubt about his intention; my doubt is about his estimate." }, drill: { jp: "मुझे उसके अंदाज़े पर संदेह है", en: "I have a doubt about his estimate" }, hint: "SAN-DEH, masculine, with DENTAL द and the ं reading n before it (unit 1 §1). ⚠️ Not शक, a doubt (unit 30), and the difference is register and weight: a शक is a suspicion about a PERSON, a संदेह is an unresolved doubt about a CLAIM. संदेह is what a report says." },
        { id: "hi-u64l2-aashankaa", type: "vocab", front: "आशंका", reading: "aashankaa", meaning: "an apprehension", accept: ["a fear of what may come", "an anxious expectation", "a worry about what might happen"], example: { jp: "सबको आशंका थी कि बारिश नहीं होगी, और आखिर में वही आशंका सच निकली।", en: "Everyone had an apprehension that it would not rain, and in the end that apprehension turned out true." }, drill: { jp: "उसके मन में आशंका बनी रही", en: "The apprehension stayed in his mind" }, hint: "AA-SHAN-KAA — FEMININE. The ं before क reads n (unit 1 §1). ⚠️ Not डर, fear (unit 27): डर is the feeling in your body, an आशंका is a reasoned expectation that something bad is coming. The frame is मुझे आशंका है कि…" },
        { id: "hi-u64l2-sandigdh", type: "vocab", front: "संदिग्ध", reading: "sandigdh", meaning: "suspicious-looking", accept: ["open to doubt", "dubious", "looking not quite right"], example: { jp: "वह कागज़ संदिग्ध लग रहा था, इसलिए अफ़सर ने जाँच की।", en: "That paper looked suspicious, so the officer had it checked." }, drill: { jp: "मुझे उसकी बात संदिग्ध लगी", en: "What he said seemed dubious to me" }, hint: "SAN-DIGDH, INVARIANT: संदिग्ध आदमी, संदिग्ध बात. Built on संदेह above. The ग्ध is ग with ध stacked — two voiced sounds in one breath, and the hardest cluster in the unit. ⚠️ It says the THING invites doubt, not that you personally doubt it." },
        { id: "hi-u64l2-bamushkil", type: "vocab", front: "बमुश्किल", reading: "bamushkil", meaning: "hardly", accept: ["only just", "with difficulty", "barely"], example: { jp: "आवाज़ इतनी कम थी कि बमुश्किल सुनाई दी।", en: "The voice was so faint that it could hardly be heard." }, drill: { jp: "आवाज़ बमुश्किल सुनाई दी", en: "The voice could hardly be heard" }, hint: "BA-MUSH-KIL, an ADVERB. Literally ब- ('with') plus मुश्किल, difficult (unit 9) — a Persian pattern Hindi uses freely. ⚠️ It marks the edge of possibility: बमुश्किल दस लोग आए means ten came and barely that. Do not confuse it with मुश्किल से, which is the same idea said the long way." },
      ],
    },
    {
      id: "hi-u64l3",
      unit: 64,
      lesson: 3,
      title: "Four ways to guess",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Tell a calculated surmise from a settled assumption, an open conjecture and a baseless notion — call a figure estimated, and name a sense of something you are sure of.",
      items: [
        { id: "hi-u64l3-anumaan", type: "vocab", front: "अनुमान", reading: "anumaan", meaning: "a surmise", accept: ["a worked-out guess", "a reckoning", "a judgement made without full facts"], example: { jp: "मेरा अनुमान है कि इस काम में तीन दिन लगेंगे, पर यह पक्का नहीं है।", en: "My surmise is that this work will take three days, but this is not certain." }, drill: { jp: "मेरा अनुमान है कि तीन दिन लगेंगे", en: "My surmise is that it will take three days" }, hint: "A-NU-MAAN, masculine. A guess you ARRIVED AT — from the signs, the numbers, experience. ⚠️ Not अंदाज़ा, an estimate (unit 45), which is the spoken everyday word: अनुमान is what a report or a weather bulletin gives. Of the four guess-words in this lesson it is the one with reasoning behind it." },
        { id: "hi-u64l3-anumaanit", type: "vocab", front: "अनुमानित", reading: "anumaanit", meaning: "estimated", accept: ["put at roughly", "reckoned at", "worked out approximately"], example: { jp: "अनुमानित तादाद दो हज़ार थी, पर किसी ने ठीक से नहीं गिना।", en: "The estimated count was two thousand, but nobody counted properly." }, drill: { jp: "अनुमानित समय आधा घंटा है", en: "The estimated time is half an hour" }, hint: "A-NU-MAA-NIT, INVARIANT: अनुमानित तादाद, अनुमानित कीमत. The participle of अनुमान above, which is why it is carded in the SAME lesson and not earlier — it was drafted into unit 63 and moved here, because teaching the derivative before its base is backwards even when nothing complains." },
        { id: "hi-u64l3-dhaarnaa", type: "vocab", front: "धारणा", reading: "dhaarnaa", meaning: "an assumption", accept: ["a settled belief", "a notion one holds", "a belief taken for granted"], example: { jp: "लोगों की धारणा है कि यह काम मुश्किल है, पर किसी ने कोशिश नहीं की।", en: "People's assumption is that this work is difficult, but nobody has tried." }, drill: { jp: "लोगों की धारणा है कि यह मुश्किल है", en: "People's assumption is that this is difficult" }, hint: "DHAAR-NAA — ⚠️ FEMININE despite the -ा, one more of the -ना nouns unit 57 lists (भावना, प्रार्थना, आलोचना, प्रेरणा): धारणा गलत थी, not गलता. DENTAL ध, and the RETROFLEX ण merges to n. A belief you HOLD without having checked it — not reasoned like अनुमान, not offered like कयास." },
        { id: "hi-u64l3-kayaas", type: "vocab", front: "कयास", reading: "kayaas", meaning: "a conjecture", accept: ["speculation put about", "guesswork going round", "a guess with nothing behind it"], example: { jp: "अखबार ने सिर्फ़ कयास छापा, ठीक खबर किसी के पास नहीं थी।", en: "Only conjecture was printed in the newspaper; nobody had confirmed news." }, drill: { jp: "लोग सिर्फ़ कयास लगा रहे थे", en: "People were only making conjectures" }, hint: "KA-YAAS, masculine, often used in the plural: कयास लगाए जा रहे हैं. Plain क (unit 1 §7 keeps क़ uncarded). ⚠️ A guess offered PUBLICLY, with nothing behind it — the word the news uses before the facts arrive. अनुमान is reasoned, कयास is floated." },
        { id: "hi-u64l3-gumaan", type: "vocab", front: "गुमान", reading: "gumaan", meaning: "a vague notion", accept: ["a baseless feeling", "an idle fancy", "a notion with nothing behind it"], example: { jp: "उसे गुमान था कि सब उसकी तारीफ़ कर रहे हैं, पर ऐसा कुछ नहीं था।", en: "He had a vague notion that everyone was praising him, but there was nothing of the sort." }, drill: { jp: "उसे गुमान था कि सब खुश हैं", en: "He had a vague notion that everyone praised him" }, hint: "GU-MAAN, masculine, plain ग. The weakest of the four: a feeling with no reasoning, no evidence and often no truth. ⚠️ It also carries a shade of self-flattery — गुमान करना is to be conceited — which is why this card's example is about someone imagining praise." },
        { id: "hi-u64l3-ehsaas", type: "vocab", front: "एहसास", reading: "ehsaas", meaning: "a sense of something", accept: ["an awareness one feels", "a felt realisation", "the feeling that one knows something"], example: { jp: "मुझे अपनी गलती का एहसास बहुत देर बाद हुआ, और तब कुछ नहीं बचा था।", en: "The sense of my own mistake came to me much later, and by then nothing was left." }, drill: { jp: "मुझे अपनी गलती का एहसास हुआ", en: "I came to a sense of my own mistake" }, hint: "EH-SAAS, masculine. The frame is X का एहसास होना. ⚠️ Stronger than आभास (lesson 1), which is the first flicker: an एहसास is a felt awareness you would not argue with. Not भावना, an emotion (unit 52): a भावना is what you feel ABOUT something, an एहसास is knowing it in your body." },
      ],
    },
    {
      id: "hi-u64l4",
      unit: 64,
      lesson: 4,
      title: "Certainty, and a flat no",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say a thing is certainly so and plainly clear, call an outcome probable, say something feels odd, say a fact is known to you — and rule something out completely.",
      items: [
        { id: "hi-u64l4-yakiinan", type: "vocab", front: "यकीनन", reading: "yakiinan", meaning: "without a doubt", accept: ["assuredly", "certainly", "for sure"], example: { jp: "वह यकीनन आएगा, उसने वादा किया है और वादा कभी नहीं तोड़ता।", en: "He will come without a doubt; he has promised and he never breaks a promise." }, drill: { jp: "वह यकीनन कल आएगा", en: "He will come tomorrow without a doubt" }, hint: "YA-KII-NAN, an ADVERB with the same -an ending as तकरीबन (lesson 1) and नतीजतन (unit 62). Built on यकीन, conviction (unit 57). ⚠️ Not बेशक, no doubt (unit 30), which CONCEDES a point in an argument; यकीनन asserts one." },
        { id: "hi-u64l4-spasht", type: "vocab", front: "स्पष्ट", reading: "spasht", meaning: "clear to see", accept: ["plainly stated", "explicit", "unambiguous"], example: { jp: "नियम अब स्पष्ट है और किसी को कोई संदेह नहीं रहा।", en: "The rule is clear now and nobody has any doubt left." }, drill: { jp: "यह नियम अब स्पष्ट है", en: "This rule is clear now" }, hint: "SPASHT, INVARIANT, one syllable: स with प stacked, then ष with ट stacked (read sht). The positive of अस्पष्ट (lesson 2). ⚠️ Not साफ़, clean (unit 9), which Hindi also uses for 'clear'; स्पष्ट is about a statement or a rule being unambiguous, not about being free of dirt." },
        { id: "hi-u64l4-sambhaavit", type: "vocab", front: "संभावित", reading: "sambhaavit", meaning: "probable", accept: ["expected to happen", "likely", "on the cards"], example: { jp: "संभावित नतीजा यही है, पर एक बात बदल जाए तो सब बदल जाएगा।", en: "The probable result is just this, but if one thing changes everything will change." }, drill: { jp: "संभावित खतरा अब भी है", en: "The probable danger is still there" }, hint: "SAM-BHAA-VIT, INVARIANT: संभावित नतीजा, संभावित तारीख. The ं reads m before भ (unit 1 §1). Built on the same root as संभावना, a possibility (unit 47). ⚠️ Stronger than मुमकिन, possible (unit 32): मुमकिन means it COULD happen, संभावित means it probably will." },
        { id: "hi-u64l4-atpataa", type: "vocab", front: "अटपटा", reading: "atpataa", meaning: "odd-seeming", accept: ["awkward and out of place", "jarring", "oddly out of keeping"], example: { jp: "उसका जवाब थोड़ा अटपटा लगा, जैसे उसने सवाल ठीक से सुना ही न हो।", en: "His answer felt a little odd, as if he had not properly heard the question at all." }, drill: { jp: "यह कपड़ा यहाँ अटपटा लगता है", en: "This cloth looks out of place here" }, hint: "AT-PA-TAA — ⚠️ **THE ONE AGREEING ADJECTIVE IN THIS UNIT**: it ends in -आ, so अटपटा सवाल, अटपटी बात, अटपटे लोग. TWO RETROFLEX ट, both merged to t (unit 1 §1b). Not गलत or बुरा: something अटपटा is not wrong, it just does not sit right." },
        { id: "hi-u64l4-maaluum", type: "vocab", front: "मालूम", reading: "maaluum", meaning: "known to one", accept: ["within one's knowledge", "something one knows", "already known to someone"], example: { jp: "मुझे मालूम है कि वह राज़ी नहीं होगा, पर कोशिश करनी ज़रूरी है।", en: "It is known to me that he will not agree, but trying is necessary." }, drill: { jp: "मुझे यह बात मालूम है", en: "This matter is known to me" }, hint: "MAA-LUUM, INVARIANT, and like प्रतीत (lesson 1) it only works with होना — unit 61 §B5's class. The frame is मुझे मालूम है, with को on the knower. ⚠️ Not जानना, to know (unit 6): जानना takes a subject (मैं जानता हूँ), मालूम takes को. Both are correct Hindi and learners mix the frames up constantly." },
        { id: "hi-u64l4-kataii", type: "vocab", front: "कतई", reading: "kataii", meaning: "not in the least", accept: ["absolutely not", "by no means", "on no account"], example: { jp: "यह बात कतई ठीक नहीं है और मैं इससे असहमत हूँ।", en: "This is not in the least right and I disagree with it." }, drill: { jp: "मैं कतई राज़ी नहीं हूँ", en: "I am not in the least willing" }, hint: "KA-TA-II, an ADVERB, and ⚠️ **IT ALMOST ALWAYS COMES WITH नहीं** — कतई नहीं is the strongest flat no in ordinary Hindi. Plain क. The positive use (कतई ज़रूरी) exists but is rare. Where बमुश्किल (lesson 2) marks the bare edge of possible, कतई rules it out." },
      ],
    },
  ],
};
