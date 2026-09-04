// NO Unit 17 — Hverdag og følelser ("Everyday life and feelings") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded as "Vocabulary 3"; retitled and rethemed per CLAUDE.md → "No
// front language" and the block-3 plan in unit15.js.
//
// ⚠ THIS UNIT WAS RE-AUTHORED. Its first draft was 24 general-purpose verbs on
// the premise that the corpus lacked a verb core. THAT PREMISE WAS FALSE, and
// how it was found matters, because it is the failure mode RUNBOOK §4 calls the
// most expensive one available to a seat.
//   • This seat was briefed that block 2 (u8–u14) "will NOT exist in your tree
//     while you author", and `npm run taught -- no` agreed: it reads the LIVE
//     content, u8–u14 are 0-item stubs on this branch, so it reported only block
//     1's 168 words. Both statements were true, and together they were
//     thoroughly misleading.
//   • Block 2 was in fact fully authored on `content/no-a1-block2`, readable the
//     whole time with `git show content/no-a1-block2:src/data/no/unitN.js`. Its
//     u11 (Kropp og helse), u12 (Setning og ordstilling) and u13 (Verb og
//     partikler) teach the general-purpose verb core outright.
//   • Result: 15 of this unit's 24 fronts collided with block 2 — å gjøre, å ta,
//     å bli, å trenge, å hjelpe, å sove, å sitte, å stå, å ligge, å si, å høre,
//     å spørre, å svare, å tro, å vite. Front-uniqueness is a HARD error in
//     src/data/contract.js, and RUNBOOK §4 gives every one of them to the lower
//     slot. This unit would not have survived merge day.
//   • Nothing local could have caught it. validate:content, lint:curriculum and
//     audit were all GREEN with the collisions present, because the colliding
//     cards are not in this tree. THE ONLY CHECK THAT WORKS IS READING THE OTHER
//     BLOCK'S BRANCH. Later seats: do that first, whatever your brief says. The
//     repo is the source of truth (CLAUDE.md), and a branch you were told is
//     empty is still a branch you can `git show`.
//
// WHAT THE UNIT IS NOW. The nine cards that survived are the ones block 2 did
// not want — the morning routine, and the private verbs of thinking, remembering
// and hoping. Around them this unit takes what a full read of all 336 block-1
// and block-2 fronts shows is genuinely unclaimed: THE FEELINGS. Block 2's u10
// (Store og små ting) is dimension and quality — stor, liten, fin, stygg, ny,
// ren — and its u11 is the body and illness — syk, frisk, vond, trøtt. Nothing
// anywhere in A1 teaches glad, trist, sint or redd, and a learner who cannot say
// how somebody feels cannot hold an A1 conversation.
//
// Conventions are declared in no/unit1.js and bind every unit. Bokmål, not
// Nynorsk.
//
// NO FEMININE NOUN HERE EITHER — the only two nouns are `en vane` and `en
// avtale`, both masculine — so this remains the one block-3 unit with no
// en-/ei-recognition note. The requirement resumes at u18l1 with `ei bok`.
//
// ø: NONE. This is the only unit in block 3 with no hand-folded reading.
//
// V2 is modelled at "Nå hviler jeg i stua." (l1), and l2 and l3 carry the two
// inversion questions ("Er du redd?", "Husker du navnet?"), whose hints state
// outright that Norwegian has NO do-support. English speakers reliably try to
// build "Gjør du huske?", which is exactly the error worth pre-empting.
//
// ADJECTIVE AGREEMENT IS NOT DERIVED HERE (unit1.js §8b). The four feelings
// adjectives appear only in the singular after er, which is the bare form given
// on the card. No example asks the learner to build a -t or -e ending; u14
// (block 2's Fortid og adjektiv) owns that contrast. ONE example has a NEUTER
// subject — "Barnet er trist" — and it is safe for a reason worth writing down:
// `trist` already ends in -t and is invariant in the neuter, so no ending is
// derived. A later seat swapping that subject onto `glad` or `redd` WOULD force
// a -t and break §8b. Leave it, or change the adjective too.
//
// LESSON ORDER: l1's å bruke and l2's adjectives are in place before anything
// leans on them, and no example anywhere reaches forward. Checked by eye AND by
// a per-lesson script — check-lang-scope.mjs resolves scope per UNIT, never per
// LESSON (unit7.js), so this class is invisible to every gate.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT17 = {
  id: "no-u17",
  lang: "no",
  title: "Hverdag og følelser",
  order: 17,
  stage: "a1",
  lessons: [
    // Lesson 1: the shape of a morning, plus the two everyday words the rest of
    // the unit leans on (en vane, å bruke).
    {
      id: "no-u17l1",
      unit: 17,
      lesson: 1,
      title: "Om morgenen",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe an ordinary morning — waking, showering, polishing your shoes — and talk about a habit and about what you use or spend.",
      items: [
        { id: "no-u17l1-avakne", type: "vocab", front: "å våkne", reading: "avakne", meaning: "to wake up", example: { jp: "Jeg våkner tidlig.", en: "I wake up early." }, accept: ["wake", "wake up", "to wake", "to awaken", "awaken"], hint: "VAWK-ne, present våkner. This is waking by yourself; waking somebody ELSE is å vekke. The å folds to a on its own, so this reading needed no hand-work." },
        { id: "no-u17l1-adusje", type: "vocab", front: "å dusje", reading: "adusje", meaning: "to shower", example: { jp: "Erling dusjer på badet.", en: "Erling is showering in the bathroom." }, accept: ["shower", "to take a shower", "take a shower", "have a shower"], hint: "DUE-she, present dusjer — sj is the broad sh of sjø and skjorte. En dusj is the shower itself." },
        { id: "no-u17l1-apusse", type: "vocab", front: "å pusse", reading: "apusse", meaning: "to brush", example: { jp: "Jeg pusser tennene.", en: "I am brushing my teeth." }, accept: ["brush", "to polish", "polish", "to shine", "clean"], hint: "PUS-se, present pusser. To brush or polish something until it shines — å pusse tenner is the one you will say every day, å pusse sko is to polish shoes. Note tennene, \"the teeth\": Norwegian uses the definite where English says \"my\". Not å vaske from unit 15, which is washing something clean." },
        { id: "no-u17l1-ahvile", type: "vocab", front: "å hvile", reading: "ahvile", meaning: "to rest", example: { jp: "Nå hviler jeg i stua.", en: "Now I am resting in the living room." }, accept: ["rest", "to relax", "relax", "to take a rest", "take a rest"], hint: "VEE-le — hv- is a silent h, the same trick as in hva and hvor. Present hviler. And note the order: with nå in front, hviler comes second and jeg falls in behind it. That is Norwegian's V2 rule, not a stylistic choice." },
        { id: "no-u17l1-envane", type: "vocab", front: "en vane", reading: "envane", meaning: "habit", example: { jp: "Det er en god vane.", en: "That is a good habit." }, accept: ["a habit", "custom", "routine", "practice"], hint: "VAH-ne. Masculine: definite vanen, plural vaner. Å ha for vane is to be in the habit of something. Vanlig, \"ordinary\", is built straight on it — the ordinary is what happens by habit." },
        { id: "no-u17l1-abruke", type: "vocab", front: "å bruke", reading: "abruke", meaning: "to use", example: { jp: "Kari bruker mye penger.", en: "Kari spends a lot of money." }, accept: ["use", "to spend", "spend", "to wear", "wear"], hint: "BRUE-ke, present bruker. One verb doing three English jobs: to use a thing, to spend money (bruke penger), and to wear glasses or a clothing size (bruke briller)." },
      ],
    },
    // Lesson 2: the feelings. Nothing in block 1 or block 2 teaches these — u10
    // is dimension and quality, u11 is illness.
    {
      id: "no-u17l2",
      unit: 17,
      lesson: 2,
      title: "Følelser",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how somebody feels — glad, trist, sint, redd — ask whether they are afraid, and say that they are laughing or smiling.",
      items: [
        { id: "no-u17l2-glad", type: "vocab", front: "glad", reading: "glad", meaning: "happy", example: { jp: "Kari er veldig glad.", en: "Kari is very happy." }, accept: ["glad", "pleased", "cheerful", "fond"], hint: "GLAH — the d is silent, like god and sted. Glad i noen means fond of somebody, and it is what Norwegians actually say to the people they love; å elske from unit 4 is kept for something much stronger." },
        { id: "no-u17l2-trist", type: "vocab", front: "trist", reading: "trist", meaning: "sad", example: { jp: "Barnet er trist.", en: "The child is sad." }, accept: ["unhappy", "sorrowful", "gloomy", "miserable"], hint: "TRIST. The everyday word for sad, about a person or about a place. Lei seg is the other one you will hear, and it sits closer to \"upset\"." },
        { id: "no-u17l2-sint", type: "vocab", front: "sint", reading: "sint", meaning: "angry", example: { jp: "Erling er sint på meg.", en: "Erling is angry with me." }, accept: ["cross", "mad", "furious", "annoyed"], hint: "SINT. Note the preposition: å være sint PÅ noen — angry \"on\" somebody, where English says \"with\". Getting på right is more than half the phrase." },
        { id: "no-u17l2-redd", type: "vocab", front: "redd", reading: "redd", meaning: "afraid", example: { jp: "Er du redd?", en: "Are you afraid?" }, accept: ["scared", "frightened", "fearful"], hint: "REDD, with the d sounded — unlike the silent d of glad and god. Å være redd for noe is to be afraid of something. And note the question: the verb comes first, because there is no do-support anywhere in Norwegian." },
        { id: "no-u17l2-ale", type: "vocab", front: "å le", reading: "ale", meaning: "to laugh", example: { jp: "Vi ler sammen.", en: "We are laughing together." }, accept: ["laugh", "to laugh at", "chuckle"], hint: "LEH, present ler — one of the shortest verbs in the language, and its present is just the infinitive plus -r. Å le av noe is to laugh AT something." },
        { id: "no-u17l2-asmile", type: "vocab", front: "å smile", reading: "asmile", meaning: "to smile", example: { jp: "Kari smiler til meg.", en: "Kari is smiling at me." }, accept: ["smile", "to grin", "grin"], hint: "SMEE-le, present smiler. Et smil is a smile. Norwegians smile at strangers far less than the British do, which is exactly why it carries more weight when they do." },
      ],
    },
    // Lesson 3: the private verbs — the three ways Norwegian splits English
    // "think", plus remembering, forgetting and hoping.
    {
      id: "no-u17l3",
      unit: 17,
      lesson: 3,
      title: "Å tenke og å huske",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you are thinking about, what you remember or forget, what you hope, and give an opinion with synes and mene.",
      items: [
        { id: "no-u17l3-atenke", type: "vocab", front: "å tenke", reading: "atenke", meaning: "to think", example: { jp: "Jeg tenker på Norge.", en: "I am thinking about Norway." }, accept: ["think", "to think about", "think about", "to reflect", "reflect"], hint: "TENG-ke, present tenker. This is the mental WORK of thinking — å tenke på, to think about something. It is NOT the \"I think\" of an opinion; that is synes, two cards down." },
        { id: "no-u17l3-ahuske", type: "vocab", front: "å huske", reading: "ahuske", meaning: "to remember", example: { jp: "Husker du navnet?", en: "Do you remember the name?" }, accept: ["remember", "to recall", "recall", "to memorise", "memorize"], hint: "HUES-ke, present husker. Look at the question: Norwegian makes a yes/no question by putting the verb FIRST — Husker du. There is no do-support in the language at all, so \"Gjør du huske?\" is not a sentence." },
        { id: "no-u17l3-aglemme", type: "vocab", front: "å glemme", reading: "aglemme", meaning: "to forget", example: { jp: "Erling glemmer nøkkelen i bilen.", en: "Erling leaves the key in the car." }, accept: ["forget", "to leave behind", "leave behind"], hint: "GLEM-me, hard g, present glemmer. Also for leaving something behind by accident, which is what the example does. The opposite of å huske, and worth learning as a pair with it." },
        { id: "no-u17l3-asynes", type: "vocab", front: "å synes", reading: "asynes", meaning: "to think (opinion)", example: { jp: "Jeg synes norsk er hyggelig.", en: "I think Norwegian is nice." }, accept: ["to think", "think", "to find", "find", "to be of the opinion", "feel", "reckon"], hint: "SUE-nes, present synes — the -s belongs to the verb and never drops. This is your PERSONAL opinion, the \"I think\" of taste: jeg synes filmen er god. Norwegian splits English think four ways — synes for how a thing strikes you, tenke for the mental work, tro for a belief about the facts, and mene, two cards down, for a position you could argue for." },
        { id: "no-u17l3-ahape", type: "vocab", front: "å håpe", reading: "ahape", meaning: "to hope", example: { jp: "Jeg håper Kari kommer.", en: "I hope Kari is coming." }, accept: ["hope", "to hope for", "hope for"], hint: "HAW-pe, present håper — the å folds to a on its own. Et håp is a hope. Jeg håper det is \"I hope so\"." },
        { id: "no-u17l3-amene", type: "vocab", front: "å mene", reading: "amene", meaning: "to mean", example: { jp: "Hva mener du?", en: "What do you mean?" }, accept: ["to be of the opinion", "to hold", "to reckon", "to intend"], hint: "MEH-ne, present mener. Two jobs: what somebody MEANS by what they said (hva mener du?), and holding a considered opinion — which is the shade separating it from synes, a matter of taste. En mening is both a meaning and an opinion." },
      ],
    },
    // Lesson 4: arranging to meet, and the small courtesies around it.
    {
      id: "no-u17l4",
      unit: 17,
      lesson: 4,
      title: "Avtaler og kontakt",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Make and keep an arrangement — phone somebody, greet them, promise something, and say what you are waiting for.",
      items: [
        { id: "no-u17l4-aringe", type: "vocab", front: "å ringe", reading: "aringe", meaning: "to call", example: { jp: "Jeg ringer til Kari.", en: "I am calling Kari." }, accept: ["call", "to phone", "phone", "to ring", "ring", "to telephone"], hint: "RING-e, present ringer. On the telephone, and it takes til: ringe til noen. It is also what a bell does — klokka ringer." },
        { id: "no-u17l4-ahilse", type: "vocab", front: "å hilse", reading: "ahilse", meaning: "to greet", example: { jp: "Jeg hilser på en venn.", en: "I greet a friend." }, accept: ["greet", "to say hello", "say hello", "to send regards", "to shake hands"], hint: "HIL-se, present hilser. Å hilse PÅ noen is to greet somebody or to be introduced to them. The phrase you will actually need is Hils Kari fra meg — say hello to Kari from me." },
        { id: "no-u17l4-enavtale", type: "vocab", front: "en avtale", reading: "enavtale", meaning: "appointment", example: { jp: "Jeg har en avtale nå.", en: "I have an appointment now." }, accept: ["an appointment", "agreement", "an agreement", "arrangement", "a deal"], hint: "AV-tah-le. Masculine: definite avtalen, plural avtaler. An appointment with a person, a loose arrangement, or a signed agreement — one word covers all three. Å avtale is the verb." },
        { id: "no-u17l4-alove", type: "vocab", front: "å love", reading: "alove", meaning: "to promise", example: { jp: "Erling lover å komme.", en: "Erling promises to come." }, accept: ["promise", "to give one's word", "to vow", "vow"], hint: "LOH-ve, present lover. Note å komme keeping its å after the verb — an infinitive stays marked, exactly as it does after viktig in unit 1. Et løfte is the noun, a promise." },
        { id: "no-u17l4-afortelle", type: "vocab", front: "å fortelle", reading: "afortelle", meaning: "to tell", example: { jp: "Kari forteller meg hva hun heter.", en: "Kari is telling me what she is called." }, accept: ["tell", "to narrate", "narrate", "to recount", "recount", "to relate"], hint: "for-TEL-le, present forteller. To tell a story or relate something, and it takes a person: fortelle noen noe. Built from for plus telle, to count. English \"tell\" made the same journey from counting to recounting — and a bank \"teller\" is the OLDER counting sense, kept alive." },
        { id: "no-u17l4-avente", type: "vocab", front: "å vente", reading: "avente", meaning: "to wait", example: { jp: "Vi venter på bussen.", en: "We are waiting for the bus." }, accept: ["wait", "to wait for", "wait for", "to expect", "expect"], hint: "VEN-te, present venter. You wait PÅ something, not \"for\" it. The same verb also means to expect — jeg venter et barn, I am expecting a child — which is why it closes a lesson about arrangements." },
      ],
    },
  ],
};
