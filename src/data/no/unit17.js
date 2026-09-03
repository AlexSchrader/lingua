// NO Unit 17 — Hva folk gjør ("What people do") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded as "Vocabulary 3"; retitled and rethemed per CLAUDE.md → "No
// front language" and the block-3 plan in unit15.js.
//
// THIS UNIT IS 24 VERBS AND NOTHING ELSE, AND THAT IS THE POINT. Blocks 1 and 2
// teach verbs where a theme happens to need one — å spise in the food unit, å
// kjøre in the town unit. What the corpus then lacks is the general-purpose
// core: the verbs that belong to no theme because they belong to all of them.
// Counted against block 1's 168 fronts, Norwegian A1 was missing å gjøre, å ta,
// å si, å vite, å tro, å høre, å spørre and å svare — eight of the twenty most
// frequent verbs in the language. A coverage unit is where those get taught, so
// this one takes them in four semantic families rather than scattering them as
// filler across the thematic units.
//
// Conventions are declared in no/unit1.js and bind every unit. Bokmål, not
// Nynorsk.
//
// NO NOUNS MEANS NO GENDER, so this is the ONE unit in block 3 with no
// en-/ei-recognition note — there is no feminine noun to hang it on. unit1.js
// asks for the note on the first feminine of each unit; this unit has none, and
// the requirement resumes at u18l1 with `ei bok`, which is the best possible
// card for it (boka / boken is the case every learner meets first).
//
// ⚠ THE PRESENT TENSE IS NOT ALWAYS INFINITIVE + -r. unit1.js §2 says one taught
// form is the whole present tense, and that is true for twenty of these
// twenty-four. FOUR ARE NOT, and each one says so on its own card rather than
// letting the learner derive a wrong form:
//     å gjøre  → gjør   (not "gjører" — the whole -e drops)
//     å spørre → spør   (not "spørrer" — the whole -re drops)
//     å vite   → vet    (irregular outright)
//     å si     → sier   (gains a syllable the infinitive does not hint at)
// This is a correction to nothing — §2's rule is stated as a rule and holds for
// the regular classes — but a unit made entirely of verbs is where the exceptions
// become visible, so they are named here instead of being met in the wild.
//
// ø IS HAND-FOLDED, ø→o (unit1.js §3): å gjøre → "agjore", å høre → "ahore",
// å spørre → "asporre". å folds on its own: å stå → "asta", å våkne → "avakne".
//
// V2 is modelled twice here — "Nå hviler jeg i stua." (l1) fronts an adverb and
// pushes the subject behind the verb, and "Husker du navnet?" (l4) is the
// inversion question, whose hint states outright that Norwegian has NO do-support.
// That second point is worth a card's hint: English speakers reliably try to
// build "Gjør du huske?" out of å gjøre the moment they learn it, which is
// exactly why å gjøre and the question pattern are taught in the same unit.
//
// LESSON ORDER: l1 takes the two workhorses (å gjøre, å ta) plus the four verbs
// the later lessons lean on, so nothing looks forward. Checked by eye —
// check-lang-scope.mjs resolves scope per UNIT, never per LESSON (unit7.js).
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT17 = {
  id: "no-u17",
  lang: "no",
  title: "Hva folk gjør",
  order: 17,
  stage: "a1",
  lessons: [
    // Lesson 1: the general-purpose verbs, first because everything after
    // this uses them.
    {
      id: "no-u17l1",
      unit: 17,
      lesson: 1,
      title: "Å gjøre og å ta",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask what somebody is doing, say what you take, need or become, and offer to help or to rest.",
      items: [
        { id: "no-u17l1-agjore", type: "vocab", front: "å gjøre", reading: "agjore", meaning: "to do", example: { jp: "Hva gjør du i Oslo?", en: "What are you doing in Oslo?" }, accept: ["do", "to make", "make", "to carry out"], hint: "YUR-re — gj is a silent g plus a y sound, and the reading is hand-folded to agjore. ⚠ The present is gjør, not \"gjører\": the -e drops. And it is only the do of \"what are you doing\" — Norwegian never uses it to prop up a question the way English does." },
        { id: "no-u17l1-ata", type: "vocab", front: "å ta", reading: "ata", meaning: "to take", example: { jp: "Jeg tar bussen til skolen.", en: "I take the bus to school." }, accept: ["take", "to grab", "grab", "to catch", "catch"], hint: "TAH, present tar. You take a bus, a picture or a shower — ta bussen, ta et bilde. Ta det med ro is the Norwegian for \"take it easy\"." },
        { id: "no-u17l1-abli", type: "vocab", front: "å bli", reading: "abli", meaning: "to become", example: { jp: "Erling blir lærer.", en: "Erling is becoming a teacher." }, accept: ["become", "to stay", "stay", "to remain", "remain", "get"], hint: "BLEE, present blir. Two jobs in one verb: to become (han blir lærer) and to stay (jeg blir her). Note lærer with no article after blir — a profession takes none in Norwegian." },
        { id: "no-u17l1-atrenge", type: "vocab", front: "å trenge", reading: "atrenge", meaning: "to need", example: { jp: "Jeg trenger ei jakke.", en: "I need a jacket." }, accept: ["need", "to require", "require"], hint: "TRENG-e, present trenger. Nearly always with an object: jeg trenger penger. For \"need TO DO something\" Norwegians reach for må instead — jeg må gå." },
        { id: "no-u17l1-ahjelpe", type: "vocab", front: "å hjelpe", reading: "ahjelpe", meaning: "to help", example: { jp: "Kari hjelper meg i butikken.", en: "Kari is helping me in the shop." }, accept: ["help", "to assist", "assist", "to aid", "aid"], hint: "YEL-pe — hj- is a silent h, the same trick as the hv- of hva and hvor, so it opens on a plain y. Present hjelper. Hjelp! on its own is the shout." },
        { id: "no-u17l1-ahvile", type: "vocab", front: "å hvile", reading: "ahvile", meaning: "to rest", example: { jp: "Nå hviler jeg i stua.", en: "Now I am resting in the living room." }, accept: ["rest", "to relax", "relax", "to take a rest", "take a rest"], hint: "VEE-le — hv- again, that silent h. Present hviler. And note the order: with nå in front, hviler comes second and jeg falls in behind it. That is Norwegian's V2 rule, not a stylistic choice." },
      ],
    },
    // Lesson 2: the body through the day — waking, washing, and the three
    // posture verbs Norwegian uses where English just says "is".
    {
      id: "no-u17l2",
      unit: 17,
      lesson: 2,
      title: "Å våkne og å sove",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe an ordinary day — waking, sleeping, showering — and say whether something is sitting, standing or lying somewhere.",
      items: [
        { id: "no-u17l2-avakne", type: "vocab", front: "å våkne", reading: "avakne", meaning: "to wake up", example: { jp: "Jeg våkner tidlig.", en: "I wake up early." }, accept: ["wake", "wake up", "to wake", "to awaken", "awaken"], hint: "VAWK-ne, present våkner. This is waking by yourself; waking somebody ELSE is å vekke. The å folds to a on its own, so the reading needed no hand-work." },
        { id: "no-u17l2-asove", type: "vocab", front: "å sove", reading: "asove", meaning: "to sleep", example: { jp: "Barnet sover i senga.", en: "The child is sleeping in the bed." }, accept: ["sleep", "to be asleep", "be asleep"], hint: "SOH-ve, present sover. Sov godt is the Norwegian good-night. A bedroom is et soverom — sove welded onto rom." },
        { id: "no-u17l2-adusje", type: "vocab", front: "å dusje", reading: "adusje", meaning: "to shower", example: { jp: "Erling dusjer på badet.", en: "Erling is showering in the bathroom." }, accept: ["shower", "to take a shower", "take a shower", "have a shower"], hint: "DUE-she, present dusjer — sj is the broad sh of sjø and skjorte. En dusj is the shower itself." },
        { id: "no-u17l2-asitte", type: "vocab", front: "å sitte", reading: "asitte", meaning: "to sit", example: { jp: "Jeg sitter på en stol.", en: "I am sitting on a chair." }, accept: ["sit", "to be sitting", "be sitting", "to be seated", "be seated"], hint: "SIT-te, present sitter. Sitting as a STATE, not the act of sitting down. Norwegian keeps sitte, stå and ligge carefully apart and uses them where English would just say \"is\"." },
        { id: "no-u17l2-asta", type: "vocab", front: "å stå", reading: "asta", meaning: "to stand", example: { jp: "Ei lampe står på et bord.", en: "A lamp is standing on a table." }, accept: ["stand", "to be standing", "be standing", "to stand up", "stand up"], hint: "STAW, present står. Used for upright objects as readily as for people — en kopp står på bordet. Å stå opp is to get out of bed." },
        { id: "no-u17l2-aligge", type: "vocab", front: "å ligge", reading: "aligge", meaning: "to lie", example: { jp: "Et håndkle ligger på gulvet.", en: "A towel is lying on the floor." }, accept: ["lie", "to lie down", "lie down", "to be lying", "be lying", "to be situated"], hint: "LIG-ge, present ligger. For flat things — and for places: Oslo ligger i Norge, where English says Oslo \"is\" in Norway. Getting this trio right is one of the fastest ways to stop sounding translated." },
      ],
    },
    // Lesson 3: speech. Note å spørre's irregular present, flagged on the card.
    {
      id: "no-u17l3",
      unit: 17,
      lesson: 3,
      title: "Å si og å høre",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what somebody said, tell someone you cannot hear them, ask a question, answer it, and phone a friend.",
      items: [
        { id: "no-u17l3-asi", type: "vocab", front: "å si", reading: "asi", meaning: "to say", example: { jp: "Hva sier du?", en: "What are you saying?" }, accept: ["say", "to tell", "tell", "to utter"], hint: "SEE — but ⚠ the present is sier, SEE-er, with a syllable the infinitive gives no warning of. One of the four verbs in this unit whose present is not simply the infinitive plus -r." },
        { id: "no-u17l3-ahore", type: "vocab", front: "å høre", reading: "ahore", meaning: "to hear", example: { jp: "Jeg hører ikke hva du sier.", en: "I cannot hear what you are saying." }, accept: ["hear", "to listen", "listen", "to listen to"], hint: "HUR-re, present hører, hand-folded to ahore. Plain å høre is hearing; å høre PÅ is listening on purpose — jeg hører på Kari." },
        { id: "no-u17l3-asporre", type: "vocab", front: "å spørre", reading: "asporre", meaning: "to ask", example: { jp: "Erling spør hvor kirka er.", en: "Erling is asking where the church is." }, accept: ["ask", "to ask a question", "ask a question", "to enquire", "enquire", "inquire"], hint: "SPUR-re, hand-folded to asporre. ⚠ The present is spør, not \"spørrer\" — the whole -re drops. This is asking a QUESTION; asking FOR something is å be." },
        { id: "no-u17l3-asvare", type: "vocab", front: "å svare", reading: "asvare", meaning: "to answer", example: { jp: "Anna svarer ikke.", en: "Anna is not answering." }, accept: ["answer", "to reply", "reply", "to respond", "respond"], hint: "SVAH-re, present svarer — regular, unlike the verb it belongs with. Et svar is an answer, and you answer something with på: å svare på et spørsmål." },
        { id: "no-u17l3-aringe", type: "vocab", front: "å ringe", reading: "aringe", meaning: "to call", example: { jp: "Jeg ringer til Kari.", en: "I am calling Kari." }, accept: ["call", "to phone", "phone", "to ring", "ring", "to telephone"], hint: "RING-e, present ringer. On the telephone, and it takes til: ringe til noen. It is also what a bell does — klokka ringer." },
        { id: "no-u17l3-afortelle", type: "vocab", front: "å fortelle", reading: "afortelle", meaning: "to tell", example: { jp: "Kari forteller meg hva hun gjør.", en: "Kari is telling me what she does." }, accept: ["tell", "to narrate", "narrate", "to recount", "recount", "to relate"], hint: "for-TEL-le, present forteller. To tell a story or relate something, where å si is just to utter words. Built from for plus telle, to count. English \"tell\" made the same journey from counting to recounting — and a bank \"teller\" is the OLDER counting sense, kept alive." },
      ],
    },
    // Lesson 4: the mind. å vente sits here because its second sense is "to
    // expect", which is a mental state, not an activity.
    {
      id: "no-u17l4",
      unit: 17,
      lesson: 4,
      title: "Å tenke og å huske",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you think, believe, know, remember or forget — and ask a yes/no question by putting the verb first.",
      items: [
        { id: "no-u17l4-atenke", type: "vocab", front: "å tenke", reading: "atenke", meaning: "to think", example: { jp: "Jeg tenker på Norge.", en: "I am thinking about Norway." }, accept: ["think", "to think about", "think about", "to reflect", "reflect"], hint: "TENG-ke, present tenker. This is the mental WORK of thinking — å tenke på, to think about something. For an opinion, Norwegians reach for tro instead." },
        { id: "no-u17l4-atro", type: "vocab", front: "å tro", reading: "atro", meaning: "to believe", example: { jp: "Jeg tror han er norsk.", en: "I believe he is Norwegian." }, accept: ["believe", "to think", "think", "to suppose", "suppose", "to reckon"], hint: "TROO, present tror. This is the everyday English \"I think\" — jeg tror det, I think so. Use tro for an opinion and tenke for the thinking itself; getting them the wrong way round is the commonest slip English speakers make here." },
        { id: "no-u17l4-avite", type: "vocab", front: "å vite", reading: "avite", meaning: "to know", example: { jp: "Jeg vet ikke hvor Erling er.", en: "I do not know where Erling is." }, accept: ["know", "to know a fact", "know a fact", "to be aware", "be aware"], hint: "VEE-te — but ⚠ the present is vet, irregular outright. And Norwegian splits English \"know\" in two: å vite is knowing a FACT, å kjenne from unit 1 is knowing a PERSON. Jeg vet det, but jeg kjenner Erling." },
        { id: "no-u17l4-ahuske", type: "vocab", front: "å huske", reading: "ahuske", meaning: "to remember", example: { jp: "Husker du navnet?", en: "Do you remember the name?" }, accept: ["remember", "to recall", "recall", "to memorise", "memorize"], hint: "HUES-ke, present husker. Look at the question: Norwegian makes a yes/no question by putting the verb FIRST — Husker du. There is no do-support anywhere in the language, so \"Gjør du huske?\" is not a sentence." },
        { id: "no-u17l4-aglemme", type: "vocab", front: "å glemme", reading: "aglemme", meaning: "to forget", example: { jp: "Erling glemmer nøkkelen i bilen.", en: "Erling leaves the key in the car." }, accept: ["forget", "to leave behind", "leave behind"], hint: "GLEM-me, hard g, present glemmer. Also for leaving something behind by accident: jeg glemmer veska. The opposite of å huske, and the two are worth learning as a pair." },
        { id: "no-u17l4-avente", type: "vocab", front: "å vente", reading: "avente", meaning: "to wait", example: { jp: "Vi venter på bussen.", en: "We are waiting for the bus." }, accept: ["wait", "to wait for", "wait for", "to expect", "expect"], hint: "VEN-te, present venter. You wait på something, not \"for\" it. It sits with the thinking verbs because its other sense is to expect — jeg venter et barn, I am expecting a child." },
      ],
    },
  ],
};
