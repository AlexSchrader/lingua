// NO Unit 14 — Fortid og adjektiv ("The past and the adjective") — A1 GRAMMAR
// Strand C, unit 3 of 3, and the last unit of block 2. Conventions are declared in
// no/unit1.js and bind every unit.
//
// TWO HALVES. Lessons 1–2 are the past tense; lessons 3–4 are adjective agreement.
// That is ja's grammar-3 shape and es/unit14.js's ("El pasado y la concordancia").
//
// ═════════════════════════════════════════════════════════════════════════════
// THE PAST FORMS ARE CARDS ON PURPOSE. READ THIS BEFORE DEDUPING THEM.
// ═════════════════════════════════════════════════════════════════════════════
// `snakket`, `spiste`, `var`, `gikk`, `kom`, `så`, `ble` and the rest are inflected
// forms of verbs taught in blocks 1–2 (å snakke u3, å være u1, å bli u13…). RUNBOOK
// §4 warns against exactly this shape — "compare LEXEMES, not strings" — and it is
// right to, because an ACCIDENTAL infinitive/inflection pair is one word with two
// mastery tracks. These are not accidental. There is no conjugation card type
// available for Norwegian (see unit12.js), so the only way a grammar unit can teach
// the past tense at all is to make the past form the card. **es/unit14.js does
// precisely this and shipped: `hablé`, `habló`, `comí`, `fui` all sit beside the
// infinitives taught earlier in that corpus.** unit1.js §2's "the -r form appears
// in examples, never as a card" is a rule about the PRESENT, which needs no card
// because it is infinitive + -r; the past is not derivable and does.
// MERGE SEAT: do not delete these as duplicate lexemes. If they go, the band has no
// past tense. "And the rest" is not a list, so here are all eleven ids explicitly:
//   no-u14l1-snakket · no-u14l1-jobbet · no-u14l1-spiste · no-u14l1-kjopte
//   no-u14l1-laerte  · no-u14l2-var    · no-u14l2-hadde  · no-u14l2-gikk
//   no-u14l2-kom     · no-u14l2-sa     · no-u14l2-ble
// ⚠️ `npm run check:lexemes` WILL REPORT THESE CLEAN AND THAT IS NOT EVIDENCE — it
// imports JA_UNITS and its variants() is a kana conjugation engine, so it returns
// "free" for any Norwegian input (already recorded at BUILD-CHECKLIST.md:165).
// RUNBOOK §6 step 3 tells you to run it; run it, but do not read a clean result as
// confirmation that these eleven are new words. They are not. They are deliberate.
//
// `i går` MOVED HERE FROM u9. unit1.js §7 pre-authorises it at u9, but Norwegian
// cannot put it in a present-tense sentence, and u9 has no past. It is the first
// card of l1, the way `ayer` is the first card of es-u14l1, and it anchors both
// past-tense lessons.
//
// `så` FOLDS TO "sa", WHICH IS ALSO THE PAST OF å si. Only `så` is taught, so
// nothing collides in the corpus — but the hint names it, because a learner who
// meets both will otherwise assume one is a typo.
//
// ═════════════════════════════════════════════════════════════════════════════
// AGREEMENT IS STATED, NOT JUST SHOWN — lessons 3 and 4.
// ═════════════════════════════════════════════════════════════════════════════
// unit1.js §8(b) reserved this for u14 and kept every earlier neuter either -ig
// (invariant) or pre-given in its -t form. Here the rule is finally spelled out:
//     en/ei noun  →  adjective unchanged      en stor bil, ei ny skjorte
//     et noun     →  adjective + t            et stort hus, et rødt flagg
//     plural      →  adjective + e            store hus, røde flagg, syke barn
// It is carried by the determiners den/denne/dette/disse and alt/alle (l3), which
// are themselves the same three-way split, and then by two complete paradigms in
// l4 — annen/annet/andre and egen/eget/egne. Six cards for two words is the es
// precedent again (otro/otra, todo/toda, mismo/misma): in an agreement unit the
// FORMS are the content, and both words here are new to the corpus.
// EVERY PARADIGM CARD'S `meaning` NAMES ITS SLOT, and that is load-bearing, not
// decoration. `type:produce` prompts with the MEANING and grades against one front,
// so three cards all reading "own" would have three right answers and nothing on the
// card to choose between them — the learner is punished for knowing the other two.
// (`distractors.js` filters also-correct peers out of the multiple-choice cards, but
// it does not reach typed production.) es/unit14.js solved this in the same breath as
// the paradigm — `otro` "another (masculine)", `otra` "another (feminine)" — and this
// unit copies BOTH halves: own (masculine/feminine) · own (neuter) · own (plural), and
// the same for annen/annet/andre, denne/dette and den. Caught by the content gate.
// The same sweep found six meanings colliding with BLOCK 1 rather than within this
// block, all now disambiguated on the block-2 side (lower slot wins, so block 1 keeps
// the plain gloss): fin "nice (of a thing)" vs hyggelig · frisk "healthy" vs bra
// "well" · å vite "to know (a fact)" vs å kjenne · henne "her (object form)" vs
// hennes · dere "you (plural)" vs du · inn "in (movement)" vs i.
//
// One thing pre-empted this and unit1.js flagged it: no-u6l3's `å smake` hint
// already states the adverbial -t ("godt, not god"). That stands; it is the same
// -t seen from the other side.
//
// NOT TAUGHT, AND FLAGGED: the possessives vår/vårt/våre and sin/sitt/sine.
// AN EARLIER DRAFT GAVE A BAD REASON FOR THIS AND IT IS WORTH REPLACING RATHER THAN
// DELETING. It said `vår` "would fold to var" and that the unit "had no room for a
// third paradigm". Both are weak: this block ACCEPTS three ø-fold collisions with a
// hint each (hår→"har", så→"sa", før→"for"), there is no reading-uniqueness rule in
// the contract at all, and "no room" is unit-local reasoning when u12l4 is the
// possessive lesson. truth-agent was right to call the asymmetry out.
// THE REAL REASON is narrower, and it is a measured engine fact the earlier draft
// did not have. `checkProduce` (src/store/answer.js) accepts the raw front OR
// `normalizeReading(item.reading)` whenever the typed answer looks romaji — which
// for Norwegian is always. So `vår` (reading "var") and l2's `var` (reading "var")
// would each grade the OTHER's answer as correct: two cards, one lesson apart, that
// the engine cannot tell apart on typed production. The three collisions this block
// does accept are all against words met as a DIFFERENT front elsewhere; this one
// would sit inside the same unit. That is a real difference, not a convenient one.
// It is still a trade, not a slam dunk — es ships twelve such collisions and files
// them as an engine problem, not a content one, and es/unit14.js teaches
// nuestro/nuestra in the very lesson this unit models itself on. BLOCK 3: if the
// reading-collision ticket lands first, teach vår/vårt/våre; if it does not, take
// the collision anyway rather than shipping an A1 band with four of five possessive
// persons. Also yours: the numbers above ti (see unit9.js), sin/sitt/sine, and
// mer/mest/ganske/helt (unit10.js).
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT14 = {
  id: "no-u14",
  lang: "no",
  title: "Fortid og adjektiv",
  order: 14,
  stage: "a1",
  lessons: [
    // Lesson 1: yesterday, and the two regular past endings.
    {
      id: "no-u14l1",
      unit: 14,
      lesson: 1,
      title: "Yesterday — the regular past",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Say what you did yesterday, using the two regular past endings: -et on snakke and jobbe, -te on spise, kjøpe and lære.",
      items: [
        { id: "no-u14l1-igar", type: "vocab", front: "i går", reading: "igar", meaning: "yesterday", example: { jp: "I går snakket jeg med Erling.", en: "Yesterday I spoke with Erling." }, accept: ["the day before"], hint: "Two words, like i dag and i morgen. It is the anchor for this whole unit — i går forces the past tense, and Norwegian has no present-tense way round it. Note the order: i går is the first element, snakket is second, jeg comes behind it." },
        { id: "no-u14l1-snakket", type: "vocab", front: "snakket", reading: "snakket", meaning: "spoke", example: { jp: "Vi snakket norsk i går.", en: "We spoke Norwegian yesterday." }, accept: ["talked", "did speak", "said"], hint: "The past of å snakke, and the biggest regular class in the language: add -et to the stem and stop. Best of all, it is one form for every person — jeg snakket, du snakket, de snakket." },
        { id: "no-u14l1-jobbet", type: "vocab", front: "jobbet", reading: "jobbet", meaning: "worked", example: { jp: "Kari jobbet på sykehuset.", en: "Kari worked at the hospital." }, accept: ["did work", "had a job"], hint: "The past of å jobbe, the same -et class. Rule of thumb: if the stem ends in two consonants, -et is usually the ending you want." },
        { id: "no-u14l1-spiste", type: "vocab", front: "spiste", reading: "spiste", meaning: "ate", example: { jp: "Vi spiste middag klokka sju.", en: "We ate dinner at seven o'clock." }, accept: ["did eat", "had", "ate up"], hint: "The past of å spise, and the other regular class: -te where snakket took -et. Stems ending in a single consonant usually take -te." },
        { id: "no-u14l1-kjopte", type: "vocab", front: "kjøpte", reading: "kjopte", meaning: "bought", example: { jp: "Jeg kjøpte ei ny skjorte.", en: "I bought a new shirt." }, accept: ["did buy", "purchased", "got"], hint: "The past of å kjøpe, -te class. The thin kj sound is unchanged: HYUP-te." },
        { id: "no-u14l1-laerte", type: "vocab", front: "lærte", reading: "laerte", meaning: "learned", example: { jp: "I går lærte jeg mye norsk.", en: "Yesterday I learned a lot of Norwegian." }, accept: ["learnt", "did learn", "taught"], hint: "The past of å lære, -te class. Norwegian uses one verb for learning and for teaching — jeg lærte norsk, jeg lærte ham norsk — and the second is what a lærer does all day." },
      ],
    },
    // Lesson 2: the six irregular pasts an A1 learner cannot do without.
    {
      id: "no-u14l2",
      unit: 14,
      lesson: 2,
      title: "The irregular past",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Use the six irregular past forms you need every day — var, hadde, gikk, kom, så and ble.",
      items: [
        { id: "no-u14l2-var", type: "vocab", front: "var", reading: "var", meaning: "was", example: { jp: "Været var dårlig i går.", en: "The weather was bad yesterday." }, accept: ["were", "used to be"], hint: "The past of å være — no -et, no -te, a stem of its own. One form for everyone: jeg var, du var, vi var. It is the most used past form in Norwegian by a wide margin." },
        { id: "no-u14l2-hadde", type: "vocab", front: "hadde", reading: "hadde", meaning: "had", example: { jp: "Erling hadde vondt i hodet.", en: "Erling had a headache." }, accept: ["did have", "possessed"], hint: "The past of å ha, said HAD-de with a clear double d. Irregular, and once again identical for every person." },
        { id: "no-u14l2-gikk", type: "vocab", front: "gikk", reading: "gikk", meaning: "went", example: { jp: "Vi gikk til torget i går.", en: "We walked to the square yesterday." }, accept: ["walked", "did go", "left"], hint: "The past of å gå, with the vowel replaced outright — the same trick English plays in go → went. Verbs that do this are called sterke verb, strong verbs, and you learn them one at a time." },
        { id: "no-u14l2-kom", type: "vocab", front: "kom", reading: "kom", meaning: "came", example: { jp: "Kari kom med bussen.", en: "Kari came by bus." }, accept: ["did come", "arrived"], hint: "The past of å komme, and one of the gentler strong verbs — just drop the ending. Watch out: kom is also the imperative, as in Kom inn!" },
        { id: "no-u14l2-sa", type: "vocab", front: "så", reading: "sa", meaning: "saw", example: { jp: "Jeg så Erling på torget.", en: "I saw Erling in the square." }, accept: ["did see", "looked"], hint: "The past of å se, said SAW. Two things to watch. The answer key folds å to a, so it comes out as sa — which is also the past of å si, a different verb. And så has a third life as a word meaning \"then, so\"." },
        { id: "no-u14l2-ble", type: "vocab", front: "ble", reading: "ble", meaning: "became", example: { jp: "Det ble mørkt klokka fire.", en: "It got dark at four o'clock." }, accept: ["did become", "got", "stayed", "was"], hint: "The past of å bli, said BLEH. And look at mørkt — the subject is det, which is neuter, so the adjective takes a -t. Lesson 3 turns that into a rule you can apply yourself." },
      ],
    },
    // Lesson 3: this/that/these — and the agreement rule they carry.
    {
      id: "no-u14l3",
      unit: 14,
      lesson: 3,
      title: "This, that, these — and the -t and -e endings",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Point at things with den, denne, dette and disse, and build the adjective to match: -t after an et word, -e in the plural.",
      items: [
        { id: "no-u14l3-den", type: "vocab", front: "den", reading: "den", meaning: "that (masculine/feminine)", example: { jp: "Den bilen er ny.", en: "That car is new." }, accept: ["that", "it", "the", "that one"], hint: "For en and ei nouns — den bilen, den skjorta. Its neuter twin is det and its plural is de, both already familiar. The rule this lesson is built on: choose the determiner by the gender of the noun. den/denne for en and ei, det/dette for et, de/disse for plurals." },
        { id: "no-u14l3-denne", type: "vocab", front: "denne", reading: "denne", meaning: "this (masculine/feminine)", example: { jp: "Denne skjorta er stygg.", en: "This shirt is ugly." }, accept: ["this", "this one"], hint: "DEN-ne — the \"this\" to den's \"that\", and again for en and ei nouns only. Norwegian doubles up: denne skjorta, with the noun in its definite form as well as the determiner in front." },
        { id: "no-u14l3-dette", type: "vocab", front: "dette", reading: "dette", meaning: "this (neuter)", example: { jp: "Dette huset er stort.", en: "This house is big." }, accept: ["this", "this one", "this thing"], hint: "The neuter of denne: dette huset, dette året. Now look at stort — hus is an et word, so stor takes a -t. That is the first half of the whole agreement system: et word → adjective + t. et stort hus, et rødt flagg, et kaldt rom." },
        { id: "no-u14l3-disse", type: "vocab", front: "disse", reading: "disse", meaning: "these", example: { jp: "Disse husene er store.", en: "These houses are big." }, accept: ["those"], hint: "The plural of denne and dette together. And here is the second half: plural → adjective + e. store hus, røde flagg, kalde dager. Two endings, -t and -e, cover nearly all Norwegian adjective agreement." },
        { id: "no-u14l3-alt", type: "vocab", front: "alt", reading: "alt", meaning: "everything", example: { jp: "Jeg forstår ikke alt.", en: "I do not understand everything." }, accept: ["all", "all of it"], hint: "The neuter of all — and in Norwegian the neuter is what does duty for \"everything\": alt er bra, all is well. Notice its -t is the very same -t the adjectives take." },
        { id: "no-u14l3-alle", type: "vocab", front: "alle", reading: "alle", meaning: "everyone", example: { jp: "Alle barna er syke.", en: "All the children are ill." }, accept: ["all", "everybody", "all of them"], hint: "The plural of all, covering both \"everyone\" and \"all the\". And syke shows the plural -e at work on a real adjective — syk becomes syke because barna is plural." },
      ],
    },
    // Lesson 4: two complete three-form paradigms.
    {
      id: "no-u14l4",
      unit: 14,
      lesson: 4,
      title: "Other and own — a full paradigm",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Run a Norwegian adjective through all three of its forms — annen/annet/andre and egen/eget/egne — and pick the right one for the noun in front of you.",
      items: [
        { id: "no-u14l4-annen", type: "vocab", front: "annen", reading: "annen", meaning: "other (masculine/feminine)", example: { jp: "Erling har en annen bil.", en: "Erling has another car." }, accept: ["other", "another", "different", "second"], hint: "For en and ei nouns alike: en annen bil, ei annen skjorte. This is one of only two adjectives whose feminine can differ — ei anna skjorte is equally correct Bokmål, and the other is liten → lita from unit 10 — so annen is an exception to the rule this unit states, not an example of it. The difference: lita is obligatory, anna is optional. egen, below, is the regular one; between them you get a complete paradigm twice over." },
        { id: "no-u14l4-annet", type: "vocab", front: "annet", reading: "annet", meaning: "other (neuter)", example: { jp: "Dette er et annet hus.", en: "This is another house." }, accept: ["other", "another", "different", "something else"], hint: "The neuter — the lesson-3 -t, sitting on an irregular stem: et annet hus, et annet år. noe annet is \"something else\"." },
        { id: "no-u14l4-andre", type: "vocab", front: "andre", reading: "andre", meaning: "others (plural)", example: { jp: "De andre kommer i morgen.", en: "The others are coming tomorrow." }, accept: ["others", "other", "the others", "second"], hint: "The plural, and thoroughly irregular — andre, not \"anne\". It doubles as \"second\": den andre dagen, the second day. So den andre can be \"the other one\" or \"the second one\", and only context decides." },
        { id: "no-u14l4-egen", type: "vocab", front: "egen", reading: "egen", meaning: "own (masculine/feminine)", example: { jp: "Jeg har min egen bil.", en: "I have my own car." }, accept: ["own", "one's own", "private"], hint: "EH-gen, for en and ei nouns. Learn it as one three-part unit — egen / eget / egne — and you have the pattern for every adjective in the language. Norwegian reaches for it much more often than English does." },
        { id: "no-u14l4-eget", type: "vocab", front: "eget", reading: "eget", meaning: "own (neuter)", example: { jp: "Erling har et eget rom.", en: "Erling has his own room." }, accept: ["own", "one's own", "private"], hint: "The neuter: et eget rom, et eget hus. The same -t as annet and stort — once you can hear where the neuter is, you can build the form instead of memorising it." },
        { id: "no-u14l4-egne", type: "vocab", front: "egne", reading: "egne", meaning: "own (plural)", example: { jp: "De har egne rom.", en: "They have their own rooms." }, accept: ["own", "one's own", "private"], hint: "The plural: egne rom, egne barn. Three forms, one word — and that -e is the same plural -e you saw on store and syke. That is the whole system: nothing in the masculine and feminine, -t in the neuter, -e in the plural." },
      ],
    },
  ],
};
