// HI Unit 58 — संगीत और कला ("Music and art") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 3. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 9 (A2)"). MEASURED HOLE: **the arts were
// 5 of 27.** The whole corpus had गाना (u26l3, the VERB to sing), नाचना (u26l3, the
// VERB to dance), खेलना (u26l3), कहानी (u24l4) and किस्सा (u38l3) — five, and three
// of them are verbs in a lesson about moving your body. The corpus had **no music,
// no song, no tune, no note, no rhythm, no instrument of any kind, no art, no
// drawing, no poem, no poet, no writer, no novel, no play, no stage, no singer, no
// audience and no artist.** A learner who had finished 57 units could say "I sing
// every day" and could not name one thing they sang.
//
// ⚠️ WHAT THIS UNIT DELIBERATELY DOES NOT TOUCH. **Film, television, radio and the
// press are MEDIA, and media is not this unit's field** — u43's slot is technology
// and communication and the A2 crew's split puts media with it. So फ़िल्म, रेडियो,
// चैनल and विज्ञापन are NOT here even though they are the commonest way an Indian
// learner meets music. This unit is the LIVE arts: what is played, sung, written,
// recited and performed in front of people. तस्वीर (u38l4) is likewise a photograph
// and stays u38's; चित्र here is a DRAWN image, which is a different thing.
//
// ⚠️ FIVE FRONTS WANTED AND REFUSED:
//   • नाच — refused beside नाचना (u26l3). A learner who knows the verb knows the
//     noun; RUNBOOK §4's lexeme rule, applied the way u57 applied it to सोच.
//   • कहानी (u24l4) and किस्सा (u38l3) — TAKEN. Both are used in this unit's
//     sentences instead, which is what the lower-slot rule is for.
//   • मूर्ति — TAKEN by u51l1, where it is a religious IDOL. Its art sense is the
//     same lexeme, so this unit uses चित्र and कला for the visual arts.
//   • मनोरंजन (entertainment) — no room at 24. NAMED FOR A LATER BLOCK, with सितार,
//     तबला, गज़ल, लोकगीत and चित्रकार.
//
// ⚠️ कवि AND कविता ARE BOTH CARDED, AND THEY ARE PUT IN DIFFERENT LESSONS ON
// PURPOSE (l4 and l3). They are base and derivative, which RUNBOOK §4 permits — a
// learner who knows "poem" does NOT automatically know "poet" — but two cards from
// one root in ONE lesson is the same-lesson pair the cross-block sweep looks for.
// Same reasoning for गायक (l4) beside गाना (u26l3).
// ⚠️ AND THE MĀTRĀ-PREFIX TRAP WAS CHECKED FOR कवि/कविता: `findWholeWord`'s boundary
// test is \p{L}, and the character after कवि inside कविता is त — a LETTER — so the
// router does NOT mis-match here. It is the one pair in this block where the trap
// does not fire, and it was still checked rather than assumed.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: धुन, बाँसुरी, ताली, कविता, लोरी, कला. **धुन is CONSONANT-FINAL**
//   — धुन अच्छी है, not अच्छा — and it is the likeliest one in the unit to be got wrong.
//   MASCULINE: संगीत, गीत, सुर, ताल, ढोल, दर्शक, लेखक, उपन्यास, नाटक, मंच, पर्दा,
//   कवि, गायक, कलाकार, अभिनय, चित्र. **पर्दा looks -ा and is; कवि is masculine
//   despite the -ि, like पानी and हाथी.**
//
// ⚠️ TWO NEAR-PAIRS THAT EARN THEIR HINTS AND WERE CHECKED MECHANICALLY:
//   • ताल taal (a rhythm) against ताला taalaa, a lock (u15l2) AND ताली taalii (a
//     clap, THIS unit l2). Three words, one stem, separated only by the final
//     mātrā. 🚨 **ताल IS A STRICT PREFIX OF BOTH**, and ा/ी are \p{M}, so the router
//     WOULD find ताल inside ताला and ताली. All three drills were checked: none
//     contains either of the others, and a later block editing any of the three
//     must re-run that check.
//   • सुर sur (a musical note) against सूरज suuraj (u16l4) — different vowel length,
//     and सुर is NOT a prefix of सूरज (सु against सू), so the trap cannot fire.
// RETROFLEX/DENTAL (§1b): no new pair. ताल taal, ताली taalii, गीत giit, नाटक naatak
// and चित्र chitra are all DENTAL त with no retroflex counterpart in the corpus;
// ढोल dhol is RETROFLEX ढ with no dental धोल. Checked against all 1128 readings.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT58 = {
  id: "hi-u58",
  lang: "hi",
  title: "संगीत और कला",
  order: 58,
  stage: "a2",
  lessons: [
    {
      id: "hi-u58l1",
      unit: 58,
      lesson: 1,
      title: "Music, and the parts it is made of",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name music, a song, a tune, a note and a rhythm — and say that someone is playing an instrument.",
      items: [
        { id: "hi-u58l1-sangiit", type: "vocab", front: "संगीत", reading: "sangiit", meaning: "music", accept: ["musical art"], example: { jp: "उसे बचपन से संगीत का शौक है।", en: "He has had a keen interest in music since childhood." }, drill: { jp: "उसे बचपन से संगीत पसंद है", en: "He has liked music since childhood" }, hint: "SAN-GIIT, masculine, DENTAL त. The ं before ग is the matching nasal, so it reads san. Music as an ART — the thing you study or listen to. One piece of it is a गीत, the next card." },
        { id: "hi-u58l1-giit", type: "vocab", front: "गीत", reading: "giit", meaning: "a song", accept: ["a lyric"], example: { jp: "शादी में औरतों ने पुराने गीत गाए।", en: "At the wedding the women sang old songs." }, drill: { jp: "उसने एक पुराना गीत गाया", en: "He sang an old song" }, hint: "GIIT, masculine and consonant-final, so the plural is also गीत: पुराने गीत. DENTAL त, long ii. From the same root as गाना, to sing (unit 26) — a गीत is the thing that gets sung, with words." },
        { id: "hi-u58l1-dhun", type: "vocab", front: "धुन", reading: "dhun", meaning: "a tune", accept: ["a melody", "a strain of music"], example: { jp: "यह धुन मैंने कहीं सुनी है लेकिन याद नहीं आ रही।", en: "I have heard this tune somewhere but I cannot remember it." }, drill: { jp: "इस गीत की धुन बहुत अच्छी है", en: "This song's tune is very good" }, hint: "DHUN — ⚠️ FEMININE, consonant-final, and the likeliest gender slip in this unit: धुन अच्छी है, not अच्छा. DENTAL ध with a puff of air. The melody WITHOUT the words, which is why a गीत has a धुन and not the other way round." },
        { id: "hi-u58l1-sur", type: "vocab", front: "सुर", reading: "sur", meaning: "a musical note", accept: ["pitch", "a note in tune"], example: { jp: "उसने पूरा गीत एक ही सुर में गाया।", en: "He sang the whole song on one steady note." }, drill: { jp: "अच्छे गायक का सुर साफ़ होता है", en: "A good singer's pitch is clear" }, hint: "SUR, masculine, three letters, SHORT u. ⚠️ Read it against सूरज suuraj, the sun (unit 16): the length of the u is the only thing shared, and §1's doubling keeps sur and suuraj apart. सुर में गाना is to sing in tune." },
        { id: "hi-u58l1-taal", type: "vocab", front: "ताल", reading: "taal", meaning: "a rhythm", accept: ["the beat in music", "time in music"], example: { jp: "ढोल की ताल पर सब बच्चे नाचने लगे।", en: "All the children began to dance to the drum's rhythm." }, drill: { jp: "सब बच्चे ताल पर नाचने लगे", en: "All the children began to dance to the rhythm" }, hint: "TAAL, masculine, DENTAL त. ⚠️ Read it against ताला taalaa, a lock (unit 15), and ताली taalii, a clap (next lesson): three different words, and the final mātrā is the whole difference. ताल में, in time." },
        { id: "hi-u58l1-bajaanaa", type: "vocab", front: "बजाना", reading: "bajaanaa", meaning: "to play an instrument", accept: ["strike up", "to sound an instrument"], example: { jp: "उसने पूरी रात ढोल बजाया।", en: "He played the drum all night." }, drill: { jp: "मुझे ढोल बजाना नहीं आता", en: "I do not know how to play the drum" }, hint: "BA-JAA-NAA. The transitive twin of बजना, to sound by itself — the -आना pattern unit 31 lesson 2 taught: घंटी बजती है, but आप घंटी बजाते हैं. Its stem ends in a vowel, so the past is बजाया, बजाई, बजाए." },
      ],
    },
    {
      id: "hi-u58l2",
      unit: 58,
      lesson: 2,
      title: "The instruments, and the people listening",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name a drum and a flute, clap, talk about the audience, and say you told a story or sang a lullaby aloud.",
      items: [
        { id: "hi-u58l2-dhol", type: "vocab", front: "ढोल", reading: "dhol", meaning: "a drum", accept: ["a two-headed drum"], example: { jp: "जुलूस के आगे दो आदमी ढोल लेकर चल रहे थे।", en: "Two men were walking in front of the procession carrying drums." }, drill: { jp: "जुलूस के आगे दो ढोल थे", en: "There were two drums in front of the procession" }, hint: "DHOL, masculine and consonant-final, so the plural is also ढोल. ⚠️ RETROFLEX ढ — tongue curled back, then a puff of air — NOT the dental ध of धुन. Carried on a strap and hit on both ends; it walks at the front of every wedding and every procession." },
        { id: "hi-u58l2-baansurii", type: "vocab", front: "बाँसुरी", reading: "baansurii", meaning: "a flute", accept: ["a bamboo flute"], example: { jp: "पेड़ के नीचे बैठकर एक लड़का बाँसुरी बजा रहा था।", en: "Sitting under the tree a boy was playing a flute." }, drill: { jp: "एक लड़का बाँसुरी बजा रहा था", en: "A boy was playing a flute" }, hint: "BAAN-SU-RII — ⚠️ FEMININE, and it looks it. The ँ nasalises the aa without adding a letter (unit 5). Made of bamboo — बाँस — which is where the name comes from. Held sideways, not upright." },
        { id: "hi-u58l2-taalii", type: "vocab", front: "ताली", reading: "taalii", meaning: "a clap", accept: ["clapping", "applause"], example: { jp: "गीत पूरा होने पर सब लोगों ने ताली बजाई।", en: "When the song ended everyone clapped." }, drill: { jp: "सब लोगों ने ताली बजाई", en: "Everyone clapped" }, hint: "TAA-LII — ⚠️ FEMININE. DENTAL त. The verb is बजाना, the same one as for an instrument — ताली बजाना, to clap, literally to play a clap. ⚠️ Read it against ताल (l1) and ताला, a lock (unit 15)." },
        { id: "hi-u58l2-darshak", type: "vocab", front: "दर्शक", reading: "darshak", meaning: "a spectator", accept: ["a member of the audience", "a viewer"], example: { jp: "नाटक देखने के लिए तीन सौ दर्शक आए थे।", en: "Three hundred spectators had come to watch the play." }, drill: { jp: "नाटक देखने तीन सौ दर्शक आए", en: "Three hundred spectators came to watch the play" }, hint: "DAR-SHAK, masculine and consonant-final, so the plural is also दर्शक: तीन सौ दर्शक. र्श is र riding above श. Of a play, a match or a television programme — anyone who WATCHES. A listener is a श्रोता." },
        { id: "hi-u58l2-lorii", type: "vocab", front: "लोरी", reading: "lorii", meaning: "a lullaby", accept: ["a cradle song"], example: { jp: "माँ लोरी गाकर बच्चे को सुलाती है।", en: "Mother sings a lullaby and puts the child to sleep." }, drill: { jp: "दादी रोज़ एक लोरी गाती हैं", en: "Grandmother sings a lullaby every day" }, hint: "LO-RII — ⚠️ FEMININE. A plain र, not the curled-back ड़ of लोमड़ी (unit 55) — compare the two. Sung, so the verb is गाना, and it goes with सुलाना, to put to sleep (unit 31)." },
        { id: "hi-u58l2-sunaanaa", type: "vocab", front: "सुनाना", reading: "sunaanaa", meaning: "to tell aloud", accept: ["read out", "to narrate"], example: { jp: "दादी हर रात हमें एक नई कहानी सुनाती थीं।", en: "Grandmother used to tell us a new story every night." }, drill: { jp: "दादी हमें रोज़ एक कहानी सुनाना चाहती हैं", en: "Grandmother wants to tell us a story every day" }, hint: "SU-NAA-NAA. The transitive twin of सुनना, to hear (unit 12) — the -आना pattern of unit 31 lesson 2: you सुनते हैं, and someone सुनाता है to you. Of a story, a poem or a song; the thing is told, not given." },
      ],
    },
    {
      id: "hi-u58l3",
      unit: 58,
      lesson: 3,
      title: "Words on a page, and on a stage",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name a poem, a novel and a play, say who wrote it, and describe the stage and the curtain it is performed behind.",
      items: [
        { id: "hi-u58l3-kavitaa", type: "vocab", front: "कविता", reading: "kavitaa", meaning: "a poem", accept: ["verse", "poetry"], example: { jp: "कक्षा में हर बच्चे को एक कविता याद करनी थी।", en: "In the class every child had to learn a poem by heart." }, drill: { jp: "हर बच्चे को एक कविता याद करनी थी", en: "Every child had to learn a poem by heart" }, hint: "KA-VI-TAA — ⚠️ FEMININE, and it looks it. DENTAL त. Both one poem and poetry in general. Learning one by heart is what every Indian school child does, which is the sentence this card teaches." },
        { id: "hi-u58l3-lekhak", type: "vocab", front: "लेखक", reading: "lekhak", meaning: "a writer", accept: ["an author"], example: { jp: "इस किस्से का लेखक कौन है यह किसी को पता नहीं।", en: "Nobody knows who the author of this anecdote is." }, drill: { jp: "इस किताब का लेखक अब नहीं है", en: "The author of this book is no longer alive" }, hint: "LE-KHAK, masculine and consonant-final, so the plural is also लेखक. Built off लिखना, to write (unit 6), with the -अक agent suffix — the same one in गायक, a singer, and दर्शक, a spectator. A woman writer is a लेखिका." },
        { id: "hi-u58l3-upanyaas", type: "vocab", front: "उपन्यास", reading: "upanyaas", meaning: "a novel", accept: ["a long work of fiction"], example: { jp: "यह उपन्यास इतना लंबा है कि मैंने आधा ही पढ़ा।", en: "This novel is so long that I have read only half of it." }, drill: { jp: "यह उपन्यास बहुत लंबा है", en: "This novel is very long" }, hint: "U-PAN-YAAS, masculine and consonant-final. The न्या conjunct is न and य stacked plus the ा. A book-length story — a short one is a कहानी (unit 24) and a spoken one is a किस्सा (unit 38)." },
        { id: "hi-u58l3-naatak", type: "vocab", front: "नाटक", reading: "naatak", meaning: "a stage play", accept: ["drama", "a theatre piece"], example: { jp: "स्कूल के बच्चों ने छुट्टी से पहले एक नाटक किया।", en: "The school children put on a play before the holiday." }, drill: { jp: "बच्चों ने स्कूल में एक नाटक किया", en: "The children put on a play at school" }, hint: "NAA-TAK, masculine, RETROFLEX ट — tongue curled back. The verb is करना: नाटक करना, to put on a play. ⚠️ AND IT ALSO MEANS PRETENDING — नाटक मत करो is 'stop acting up', which is how you will hear it most often at home." },
        { id: "hi-u58l3-manch", type: "vocab", front: "मंच", reading: "manch", meaning: "a stage", accept: ["a platform to perform on"], example: { jp: "गाने वाले मंच पर चढ़े और दर्शक चुप हो गए।", en: "The singers went up onto the stage and the audience went quiet." }, drill: { jp: "गाने वाले मंच पर चढ़ गए", en: "The singers went up onto the stage" }, hint: "MANCH, masculine. The ं before च is the matching nasal, so it reads man. The raised platform itself, and by extension any forum where people speak — एक मंच पर आना is to come together on one platform." },
        { id: "hi-u58l3-pardaa", type: "vocab", front: "पर्दा", reading: "pardaa", meaning: "a curtain", accept: ["a stage curtain", "a screen"], example: { jp: "नाटक शुरू होने से पहले पर्दा ऊपर गया।", en: "Before the play began the curtain went up." }, drill: { jp: "नाटक से पहले पर्दा ऊपर गया", en: "Before the play the curtain went up" }, hint: "PAR-DAA, masculine and regular -ा, DENTAL द. र्द is र riding above द. The curtain on a stage AND the one on a window — and, as a social idea, the seclusion of women, which is the English word purdah." },
      ],
    },
    {
      id: "hi-u58l4",
      unit: 58,
      lesson: 4,
      title: "The people who make it",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name a poet, a singer and an artist, talk about acting, and use the words for art and for a drawing.",
      items: [
        { id: "hi-u58l4-kavi", type: "vocab", front: "कवि", reading: "kavi", meaning: "a poet", accept: [], example: { jp: "उस कवि की कविताएँ अब भी स्कूल में पढ़ाई जाती हैं।", en: "That poet's poems are still taught in school." }, drill: { jp: "वह कवि गाँव में रहता था", en: "That poet used to live in the village" }, hint: "KA-VI, ⚠️ MASCULINE despite the -ि, like पानी, हाथी and दर्जी: कवि अच्छा है. A woman poet is a कवयित्री. कविता (l3) is the thing he writes — the two are in different lessons on purpose." },
        { id: "hi-u58l4-gaayak", type: "vocab", front: "गायक", reading: "gaayak", meaning: "a singer", accept: ["a vocalist"], example: { jp: "मंच पर आते ही गायक ने पहला गीत शुरू किया।", en: "As soon as he came onto the stage the singer began the first song." }, drill: { jp: "गायक ने पहला गीत शुरू किया", en: "The singer began the first song" }, hint: "GAA-YAK, masculine and consonant-final. Built off गाना, to sing (unit 26), with the same -अक agent suffix as लेखक and दर्शक. A woman singer is a गायिका. Three cards in this unit share that suffix — notice it once and you have all three." },
        { id: "hi-u58l4-kalaakaar", type: "vocab", front: "कलाकार", reading: "kalaakaar", meaning: "an artist", accept: ["a performer", "an artiste"], example: { jp: "मेले में कई कलाकार अपना काम दिखा रहे थे।", en: "At the fair several artists were showing their work." }, drill: { jp: "मेले में कई कलाकार आए थे", en: "Several artists had come to the fair" }, hint: "KA-LAA-KAAR, masculine and consonant-final. Built off कला, art (this lesson), with the -कार maker suffix — a different suffix from -अक, and it makes 'one who does' rather than 'one who acts'. Of a painter, a dancer or a singer alike: anyone with a कला." },
        { id: "hi-u58l4-abhinay", type: "vocab", front: "अभिनय", reading: "abhinay", meaning: "acting", accept: ["a performance on stage"], example: { jp: "उसका अभिनय इतना अच्छा था कि दर्शक चुप हो गए।", en: "His acting was so good that the audience went quiet." }, drill: { jp: "उसका अभिनय बहुत अच्छा था", en: "His acting was very good" }, hint: "A-BHI-NAY, masculine, with भ and a puff of air. The craft of acting, as against नाटक (l3), the play itself — and as against नाटक's other sense of merely pretending, which अभिनय never has." },
        { id: "hi-u58l4-kalaa", type: "vocab", front: "कला", reading: "kalaa", meaning: "art", accept: ["the arts"], example: { jp: "संगीत और अभिनय दोनों कला हैं।", en: "Music and acting are both art." }, drill: { jp: "संगीत भी एक कला है", en: "Music too is an art" }, hint: "KA-LAA — ⚠️ FEMININE. ⚠️ Read it against कल kal, tomorrow or yesterday (unit 2): ONE MĀTRĀ apart, and kalaa against kal is §1's length-by-doubling doing the work again. Any skill practised as an art, not only the visual arts." },
        { id: "hi-u58l4-chitra", type: "vocab", front: "चित्र", reading: "chitra", meaning: "a drawing", accept: ["a painting", "a sketch"], example: { jp: "बच्चे ने कागज़ पर पहाड़ और नदी का चित्र बनाया।", en: "The child drew a picture of a mountain and a river on the paper." }, drill: { jp: "बच्चे ने कागज़ पर चित्र बनाया", en: "The child drew a picture on the paper" }, hint: "CHIT-RA, masculine, with the त्र conjunct — one of unit 6's three. The final a IS pronounced, like पवित्र (unit 51) and समुद्र (unit 21). ⚠️ NOT तस्वीर (unit 38), which is a PHOTOGRAPH: a चित्र is DRAWN, and the verb is बनाना." },
      ],
    },
  ],
};
