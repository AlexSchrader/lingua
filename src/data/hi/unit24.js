// HI Unit 24 — बीता समय और मेल ("Time gone by, and making words agree") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot KEPT. unit1.js §10 already ruled on this one: "Grammar 3 — past tense and
// AGREEMENT does apply to Hindi, but the agreement it names is GENDER agreement,
// which Hindi has and the scaffold's source language does not. Keep the slot,
// write it for Hindi." That is what this unit is. Retitled in Devanagari as lint
// requires.
//
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 §6 CONTRADICTED ITSELF ABOUT THE ने-ERGATIVE, AND THIS UNIT RESOLVES IT
// ─────────────────────────────────────────────────────────────────────────────
// unit1.js §6 said BOTH of these:
//     "Past/perfective and the ने-ergative: u24"
//     "DEFERRED PAST A1 ENTIRELY … the ने ergative construction"
// One of them had to go, and it is the first. **THE ने-ERGATIVE IS DEFERRED TO
// A2; u24 TEACHES THE PAST COPULA AND THE INTRANSITIVE PERFECTIVE.** §6 is
// corrected in place. The reason is not taste:
//   • The ergative needs the subject in the oblique WITH ने, the verb agreeing
//     with the OBJECT instead of the subject, and the direct object sometimes
//     taking को. That is three interacting rules at once, and every Hindi
//     syllabus puts it after A1.
//   • The deferral has a clean consequence that shapes l3: **only INTRANSITIVE
//     verbs can be put into the past at A1**, because those are the ones that
//     take no ने. So l3's six verbs — गिरना, बढ़ना, मरना, बचना, हँसना, रोना —
//     are all intransitive ON PURPOSE, and every one of them has a legal
//     perfective the learner can produce today (पत्ता गिरा, बच्चे हँसे). The
//     transitive verbs blocks 1 and 2 taught stay in the present until A2.
//
// THE PAST COPULA IS CARDED IN ALL FOUR FORMS, AND THAT IS §5's EXCEPTION, NOT A
// BREACH OF IT. §5: "THE COPULA IS THE ONE PLACE FORMS ARE CARDED SEPARATELY" —
// block 1 carded है, हूँ, हैं and हो for exactly this reason. था/थी/थे/थीं is the
// same decision for the past, and it is the tighter case, because the past copula
// is where Hindi's gender agreement first becomes something the learner must
// PRODUCE rather than recognise. ⚠️ MEASURED AND WORTH STATING PLAINLY:
// `scripts/scope-hi.mjs`'s derive() generates थी and थे from था (a -ा front takes
// -ी and -े), so the tool reads them as inflections of one lexeme. They are. The
// copula exception is the reason they are four cards anyway, and each gloss names
// its own gender and number so no two cards accept one answer.
//
// AGREEMENT IS l2's JOB AND IT IS BUILT AS A 3-AGAINST-3 CONTRAST. §6 headwords
// every adjective MASCULINE SINGULAR and forbids carding both बड़ा and बड़ी, so
// agreement cannot be taught by pairing forms. It is taught by pairing CLASSES:
//     -ा, AGREES          बुरा · गीला · सूखा
//     NEVER CHANGES       आसान (consonant) · तेज़ (consonant) · नकली (-ी but
//                         already derived, like u16's गुलाबी and u19's भारी)
// The examples show the feminine and plural forms in use; the DRILLS all carry
// the masculine headword, because the router matches the front as an exact string
// and an inflected drill silently loses cloze and sentence:build (unit19.js lost
// three drafts to exactly that).
//
// LEXEME CALLS MADE BY HAND:
//   • बचना (l3, "to survive") / बच्चा (u6l2, "a child") — one root बच्, two
//     dictionary entries, and no rule generates either from the other.
//   • कहानी (l4) / कहना (u22l1, "to say") — derivation, not inflection: a
//     learner who knows कहना does not thereby know कहानी. RUNBOOK §4's clarified
//     rule (fragen / die Frage) allows the pair, and derive() generates
//     कहा/कही/कहे/कहने from कहना, never कहानी.
//   • जन्म (l4, "a birth") / जन्मदिन (u17l4, "a birthday") — the compound was
//     taught first, the base is taught here; u17's own header already reasoned
//     the pair through. The router cannot mis-blank जन्म inside जन्मदिन: the
//     next character द is a LETTER, so the boundary test blocks it.
//   • बचपन (l1) / बच्चा — the -पन abstract-noun suffix makes a separate entry.
//
// ─────────────────────────────────────────────────────────────────────────────
// FREE — three forms block 3 adds, all one irregular perfective.
// ─────────────────────────────────────────────────────────────────────────────
//   • हुआ | हुई | हुए — the perfective of होना (carded in unit22.js l1). It is
//     irregular, so derive() cannot reach it from the -ना front, and a unit about
//     the past cannot write मेरा जन्म हुआ without it. Same class as the इस/इन/उस/
//     उन unit1.js declared: inflections of a taught front that no suffix rule
//     generates. Met in sentences, never asked for as production at A1 — the
//     forms the learner PRODUCES here are था/थी/थे/थीं.
// FREE: हुआ | हुई | हुए
export const HI_UNIT24 = {
  id: "hi-u24",
  lang: "hi",
  title: "बीता समय और मेल",
  order: 24,
  stage: "a1",
  lessons: [
    {
      id: "hi-u24l1",
      unit: 24,
      lesson: 1,
      title: "Saying it was, not is",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what something was rather than is, picking the right one of था, थी, थे and थीं, and talk about a memory from childhood.",
      items: [
        { id: "hi-u24l1-thaa", type: "vocab", front: "था", reading: "thaa", meaning: "was, of a man or a masculine thing", accept: ["was masculine", "he was"], example: { jp: "कल मौसम बहुत अच्छा था।", en: "The weather was very good yesterday." }, drill: { jp: "वह कमरा बहुत बड़ा था", en: "That room was very big" }, hint: "THAA is the past of है — and unlike है it changes for GENDER: था for a masculine subject, थी for a feminine one. Notice the adjective agrees too: अच्छा था. There is no separate past for 'am': मैं था is 'I was', if you are male." },
        { id: "hi-u24l1-thii", type: "vocab", front: "थी", reading: "thii", meaning: "was, of a woman or a feminine thing", accept: ["was feminine", "she was"], example: { jp: "कल रात बहुत ठंडी थी।", en: "Last night was very cold." }, drill: { jp: "वह किताब बहुत पुरानी थी", en: "That book was very old" }, hint: "THII is था's feminine partner — रात थी, किताब थी — and the adjective in front turns feminine with it: ठंडी थी, पुरानी थी. For more than one feminine subject Hindi uses थीं." },
        { id: "hi-u24l1-the", type: "vocab", front: "थे", reading: "the", meaning: "were, of masculine subjects", accept: ["were masculine", "they were, of men"], example: { jp: "कल बाज़ार में बहुत लोग थे।", en: "There were a lot of people in the market yesterday." }, drill: { jp: "वे बच्चे बहुत खुश थे", en: "Those children were very happy" }, hint: "THE is था's plural — बच्चे थे, लोग थे — and it is ALSO the polite singular: आप कहाँ थे? asks one person where they were, because आप always takes a plural verb. The reading really is 'the'; that is how थे sounds." },
        { id: "hi-u24l1-thiin", type: "vocab", front: "थीं", reading: "thiin", meaning: "were, of feminine subjects", accept: ["were feminine", "they were, of women"], example: { jp: "कल शाम को सब दुकानें बंद थीं।", en: "All the shops were closed yesterday evening." }, drill: { jp: "वे लड़कियाँ यहाँ नहीं थीं", en: "Those girls were not here" }, hint: "THIIN is the feminine plural: लड़कियाँ थीं, दुकानें थीं. The ीं is a long ii with the nasal dot on top — say thee and hum at the end. Four forms in all, था थी थे थीं, and the subject picks one." },
        { id: "hi-u24l1-bachpan", type: "vocab", front: "बचपन", reading: "bachpan", meaning: "childhood", accept: ["one's early years", "boyhood", "when one was a child"], example: { jp: "मेरा बचपन इस गाँव में था।", en: "My childhood was in this village." }, drill: { jp: "बचपन में मेरा घर छोटा था", en: "In childhood my house was small" }, hint: "BACH-PAN, MASCULINE, built on बच्चा with the -पन ending that makes abstract nouns out of concrete ones. बचपन में means 'in childhood' — the में turns it into a time rather than a place." },
        { id: "hi-u24l1-yaad", type: "vocab", front: "याद", reading: "yaad", meaning: "a memory", accept: ["a recollection", "remembrance", "what one remembers"], example: { jp: "मुझे वह दिन आज भी याद है।", en: "I still remember that day today." }, drill: { jp: "मुझे यह रास्ता याद है", en: "I remember this road" }, hint: "YAAD, FEMININE, and the FRAME is what to learn: मुझे X याद है, literally 'X is in memory to me' — that is how Hindi says I remember. याद करना is to call something to mind on purpose; याद आना is when it comes back on its own." },
      ],
    },
    {
      id: "hi-u24l2",
      unit: 24,
      lesson: 2,
      title: "Words that change their ending to match, and words that don't",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe a thing and get the describing word right — knowing which adjectives change their ending for gender and which never do.",
      items: [
        { id: "hi-u24l2-buraa", type: "vocab", front: "बुरा", reading: "buraa", meaning: "bad", accept: ["evil", "nasty", "poor in quality"], example: { jp: "उस दुकान की चाय बहुत बुरी है।", en: "That shop's tea is very bad." }, drill: { jp: "यह रास्ता बहुत बुरा है", en: "This road is very bad" }, hint: "BU-RAA is an -ा word, so it AGREES: बुरा आदमी, बुरी औरत, बुरे लोग. बुरा मानना is to take offence. अच्छा is its opposite and behaves exactly the same way." },
        { id: "hi-u24l2-giilaa", type: "vocab", front: "गीला", reading: "giilaa", meaning: "wet", accept: ["damp", "soaked", "moist"], example: { jp: "बारिश में मेरे कपड़े गीले हैं।", en: "In the rain my clothes are wet." }, drill: { jp: "यह तौलिया बहुत गीला है", en: "This towel is very wet" }, hint: "GII-LAA agrees: गीला तौलिया, गीली चादर, गीले कपड़े. Its opposite सूखा is the next card, and the two are the everyday pair for laundry, weather and hands." },
        { id: "hi-u24l2-suukhaa", type: "vocab", front: "सूखा", reading: "suukhaa", meaning: "dry", accept: ["dried out", "arid", "not wet"], example: { jp: "इस साल यहाँ ज़मीन बिलकुल सूखी है।", en: "This year the ground here is completely dry." }, drill: { jp: "यह पत्ता अब सूखा है", en: "This leaf is dry now" }, hint: "SUU-KHAA agrees — सूखा पत्ता, सूखी ज़मीन, सूखे कपड़े. As a noun on its own सूखा is a drought. Keep the ू long: सूखा, not सुखा." },
        { id: "hi-u24l2-aasaan", type: "vocab", front: "आसान", reading: "aasaan", meaning: "easy", accept: ["simple", "straightforward", "not hard"], example: { jp: "यह काम मेरे लिए बहुत आसान है।", en: "This job is very easy for me." }, drill: { jp: "हिंदी पढ़ना आसान नहीं है", en: "Reading Hindi is not easy" }, hint: "AA-SAAN ends in a CONSONANT, so it never changes: आसान काम, आसान किताब, आसान रास्ते. That is the other adjective class — only -ा words agree. मुश्किल is its opposite and is also invariant." },
        { id: "hi-u24l2-tez", type: "vocab", front: "तेज़", reading: "tez", meaning: "fast", accept: ["quick", "sharp", "strong in flavour"], example: { jp: "यह गाड़ी बहुत तेज़ चलती है।", en: "This car goes very fast." }, drill: { jp: "यहाँ हवा बहुत तेज़ है", en: "The wind here is very strong" }, hint: "TEZ with the Persian ज़ — a z, not a j — and it never changes: तेज़ गाड़ी, तेज़ हवा. It stretches a long way: fast, sharp (a knife), strong (tea), loud (a voice) and bright (light) are all तेज़." },
        { id: "hi-u24l2-naklii", type: "vocab", front: "नकली", reading: "naklii", meaning: "counterfeit", accept: ["fake", "an imitation", "not real"], example: { jp: "यह घड़ी नकली है, असली नहीं।", en: "This watch is fake, not genuine." }, drill: { jp: "बाज़ार में नकली सामान है", en: "There is counterfeit merchandise in the market" }, hint: "NAK-LII ends in -ी and STILL does not change, because it is already built off a noun (नकल, a copy) — the same reason गुलाबी and भारी stay put. असली is its opposite: असली सोना, नकली सोना." },
      ],
    },
    {
      id: "hi-u24l3",
      unit: 24,
      lesson: 3,
      title: "Verbs you can put in the past today",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what happened to someone or something — that it fell, grew, died, survived, laughed or cried — with the verb agreeing with the subject.",
      items: [
        { id: "hi-u24l3-girnaa", type: "vocab", front: "गिरना", reading: "girnaa", meaning: "to fall", accept: ["fall", "to drop down", "to tumble"], example: { jp: "पेड़ से एक पत्ता गिरा।", en: "A leaf fell from the tree." }, drill: { jp: "यहाँ गिरना बहुत आसान है", en: "Falling here is very easy" }, hint: "GIR-NAA is INTRANSITIVE — things गिरना by themselves — so its past needs no ने at all: पत्ता गिरा, the leaf fell. The verb agrees with the subject: लड़का गिरा, लड़की गिरी. To make something else fall you need गिराना." },
        { id: "hi-u24l3-barhnaa", type: "vocab", front: "बढ़ना", reading: "barhnaa", meaning: "to grow", accept: ["to increase", "to rise", "to advance"], example: { jp: "बारिश में नदी का पानी बढ़ा।", en: "In the rain the river's water rose." }, drill: { jp: "बच्चों का बढ़ना अच्छा है", en: "Children growing is a good thing" }, hint: "BARH-NAA with ढ़ — a flapped r with a puff of air after it. Intransitive: things grow, prices rise, a queue lengthens, all बढ़ना. Read it slowly against पढ़ना, to read: प against ब, and nothing else." },
        { id: "hi-u24l3-marnaa", type: "vocab", front: "मरना", reading: "marnaa", meaning: "to die", accept: ["die", "to pass away", "to perish"], example: { jp: "बारिश के बिना पेड़ मरते हैं।", en: "Without rain the trees die." }, drill: { jp: "ऐसे मरना बहुत बुरा है", en: "Dying like that is very bad" }, hint: "MAR-NAA is intransitive and takes no ने in the past: वह मरा, he died. Hindi uses it far more loosely than English — मैं भूख से मर रहा हूँ is 'I'm starving'. मारना, with a long आ, is to kill: a different verb." },
        { id: "hi-u24l3-bachnaa", type: "vocab", front: "बचना", reading: "bachnaa", meaning: "to survive", accept: ["to be saved", "to escape", "to be left over"], example: { jp: "तूफ़ान में सिर्फ़ एक पेड़ बचा।", en: "Only one tree survived the storm." }, drill: { jp: "इस तूफ़ान में बचना मुश्किल है", en: "Surviving this storm is difficult" }, hint: "BACH-NAA is intransitive: to be saved, to get away, and also to be left over — पैसा बच गया, the money was left over. बचाना, to save someone else, is its causative pair. Keep it apart from बच्चा, a child." },
        { id: "hi-u24l3-hansnaa", type: "vocab", front: "हँसना", reading: "hansnaa", meaning: "to laugh", accept: ["laugh", "to smile broadly", "to be amused"], example: { jp: "यह सुनकर सभी बच्चे हँसे।", en: "Hearing this, all the children laughed." }, drill: { jp: "इतना हँसना अच्छा नहीं है", en: "Laughing this much is not good" }, hint: "HANS-NAA — the ँ hums right through the a, so hans, not han-sa. Intransitive, so no ने: बच्चे हँसे. हँसी is the noun, laughter, and किसी पर हँसना is to laugh AT someone." },
        { id: "hi-u24l3-ronaa", type: "vocab", front: "रोना", reading: "ronaa", meaning: "to cry", accept: ["weep", "to shed tears", "to complain"], example: { jp: "छोटा बच्चा रात में रोता है।", en: "The small child cries at night." }, drill: { jp: "बच्चों के सामने रोना मुश्किल है", en: "Crying in front of children is difficult" }, hint: "RO-NAA, intransitive: वह रोया, he cried. Hindi also uses it for grumbling — वह हमेशा रोता है, he's always complaining. Read it against होना and सोना: the first letter is the whole difference." },
      ],
    },
    {
      id: "hi-u24l4",
      unit: 24,
      lesson: 4,
      title: "Stories, habits and the way things were",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Tell someone about how things used to be — a story, a habit you have, where you were born, and an age that is over.",
      items: [
        { id: "hi-u24l4-kahaanii", type: "vocab", front: "कहानी", reading: "kahaanii", meaning: "a story", accept: ["a tale", "a narrative", "a yarn"], example: { jp: "माँ रोज़ रात को एक कहानी कहती हैं।", en: "Mother tells a story every night." }, drill: { jp: "यह कहानी बहुत पुरानी है", en: "This story is very old" }, hint: "KA-HAA-NII, FEMININE, plural कहानियाँ. It is built on कहना, to say — a कहानी is a thing told. Note माँ takes the PLURAL verb कहती हैं: mothers get the honorific in Hindi, always." },
        { id: "hi-u24l4-itihaas", type: "vocab", front: "इतिहास", reading: "itihaas", meaning: "history", accept: ["the past of a place", "a historical record", "what happened before"], example: { jp: "इस शहर का इतिहास बहुत पुराना है।", en: "This city's history is very old." }, drill: { jp: "मैं रोज़ इतिहास पढ़ता हूँ", en: "I read history every day" }, hint: "I-TI-HAAS, MASCULINE. It is both the subject you study and the past of a place. The Sanskrit is इति-ह-आस, 'so it was' — the word carries its own definition inside it." },
        { id: "hi-u24l4-aadat", type: "vocab", front: "आदत", reading: "aadat", meaning: "a habit", accept: ["a custom", "one's way", "what one always does"], example: { jp: "मुझे सुबह जल्दी उठने की आदत है।", en: "I have the habit of getting up early." }, drill: { jp: "यह मेरी पुरानी आदत है", en: "This is an old habit of mine" }, hint: "AA-DAT, FEMININE, and the frame is X की आदत है. Note the verb takes its -ने form in front of की: उठने की आदत, the habit of getting up. आदत डालना is to get into a habit." },
        { id: "hi-u24l4-janm", type: "vocab", front: "जन्म", reading: "janm", meaning: "a birth", accept: ["being born", "one's birth", "a lifetime"], example: { jp: "मेरा जन्म इस गाँव में हुआ।", en: "My birth took place in this village." }, drill: { jp: "उसका जन्म यहाँ नहीं हुआ", en: "His birth did not happen here" }, hint: "JANM, MASCULINE, and the म carries no vowel after it — one syllable ending in a hum. जन्म होना is how Hindi says to be born: मेरा जन्म हुआ. जन्मदिन, your birthday, is this word plus दिन." },
        { id: "hi-u24l4-zamaanaa", type: "vocab", front: "ज़माना", reading: "zamaanaa", meaning: "an era", accept: ["a long stretch of years", "the times", "a period of years"], example: { jp: "उस ज़माने में यहाँ बाज़ार नहीं था।", en: "In those days there was no market here." }, drill: { jp: "वह ज़माना बहुत अलग था", en: "That era was very different" }, hint: "ZA-MAA-NAA, MASCULINE, with the Persian ज़. उस ज़माने में is 'in those days', and note ज़माना shifting to ज़माने before में. Said with a sigh — ज़माना बदल गया — it means the world has moved on." },
        { id: "hi-u24l4-sapnaa", type: "vocab", front: "सपना", reading: "sapnaa", meaning: "a dream", accept: ["a vision in sleep", "an ambition", "what one dreams"], example: { jp: "मेरा सपना अच्छी हिंदी बोलना है।", en: "My dream is to speak good Hindi." }, drill: { jp: "यह सपना बहुत अच्छा था", en: "That dream was very good" }, hint: "SAP-NAA, MASCULINE, plural सपने. Both the dream you have while asleep and the one you work towards, exactly as in English. सपना देखना is to dream — Hindi SEES a dream rather than having one." },
      ],
    },
  ],
};
