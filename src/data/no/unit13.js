// NO Unit 13 — Verb og partikler ("Verbs and particles") — A1 GRAMMAR
// Strand C, unit 2 of 3. Conventions are declared in no/unit1.js and bind every unit.
//
// THE SLOT IS RETHEMED, PER CLAUDE.md → "No front language". The scaffold title
// "Grammar 2 — verbs and particles" is Japanese's shape: が・を・に・で are case
// particles, and Norwegian has none. What Norwegian has under the same heading is
// three things an A1 learner genuinely cannot do without:
//   l1  six more PREPOSITIONS (block 1 taught only i, fra, til, på)
//   l2  the six MODAL VERBS — kan, vil, skal, må, bør, får
//   l3  the six directional PARTICLES that build partikkelverb — ut, inn, opp,
//       ned, bort, tilbake
//   l4  six everyday verbs for those particles to attach to
// The Norwegian "particle" is the second half of a particle verb (gå ut, stå opp,
// komme tilbake), not a case marker — so it is taught as a word with a direction,
// and the verbs it hangs on arrive in the same unit.
//
// MODALS ARE HEADWORDED å kunne / å ville / å skulle / å måtte / å burde, per
// unit1.js §2, EVEN THOUGH the payoff that rule was written for does not apply to
// them. The rule earns its keep because present = infinitive + -r, and no modal
// does that (kunne → kan, ikke "kunner"). Block 1 already met this on å være → er
// and settled it the same way: keep the dictionary citation form as the front and
// name the present in the hint. Doing anything else here would put six irregular
// bare stems into a corpus where every other verb card carries å.
// Every modal example uses the present form, which is what the learner produces.
//
// PARTICLE VERBS ARE NOT AUTHORED AS FRONTS. `å gå ut` would put a taught verb
// (å gå, u1) inside a new front, which unit1.js §7 reserves for the frozen greeting
// formulas and the four time adverbials and explicitly forbids extending. The
// particle is the card; the particle verb lives in the example and the hint.
//
// ⚠️ EVERY VERB CARD IN THIS BLOCK IS DARK TO `sentence:build`, AND THAT IS THE
// §2 CONVENTION'S PRICE, NOT A DEFECT IN THESE EXAMPLES. Measured: **0 of block 2's
// 25 `å`-verb cards** can reach the card, against 35 of the 143 non-verb cards.
// `sentenceTokens` requires the front as a whole word inside its own example
// (cardRouting.js:400-401), and a §2 infinitive front never appears in a natural
// example — the sentence shows the -r present (regner, sover, tar). Block 1 found
// the same thing independently and has recorded it in unit1.js.
// THE WORKAROUND IS NARROWER THAN IT LOOKS, AND BLOCK 1'S HEADER STATES IT TOO
// BROADLY. It says a bare infinitive "after a modal or a second verb" restores
// reachability. A modal does NOT: Norwegian drops the å after kan/vil/skal/må/bør,
// so "Jeg kan lære norsk" has no "å lære" in it and stays unreachable. Verified by
// running sentenceTokens on both. Only the å-TAKING frames work — adjective + å
// (Det er viktig å lære norsk), aspectual verb + å (Det begynner å regne), noun + å
// (Jeg har noe å si). Block 1's own worked example is one of these; the rule above
// it is not. BLOCK 3: use the frames, not the modals.
// These 25 examples were deliberately NOT rewritten to chase the card. The present
// tense is what an A1 learner actually produces, it is the whole payoff of §2, and
// three of these examples are the block's fronted-XP V2 demonstrations. Converting
// them would trade real teaching for a card that is hash-gated to 25% anyway.
// Routed to Feature CC via the hand-back; block 1 owns the Norwegian backlog entries.
//
// ø: `før` folds to "for", which is NOT the same word as for — the før hint says so.
// No other card in the corpus reads "for" TODAY, so nothing collides today. That is
// a fact about the current corpus, not a guarantee: `for` is high-frequency and an
// A2 band will want it, at which point this becomes the es reading-collision class
// (BUILD-CHECKLIST.md → Feature CC backlog). Whoever teaches `for` inherits it.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT13 = {
  id: "no-u13",
  lang: "no",
  title: "Verb og partikler",
  order: 13,
  stage: "a1",
  lessons: [
    // Lesson 1: the prepositions block 1 did not need. Function words first — unit7.js.
    {
      id: "no-u13l1",
      unit: 13,
      lesson: 1,
      title: "Six more prepositions",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Place things and events with six more prepositions — with, of, after, before, over and under.",
      items: [
        { id: "no-u13l1-med", type: "vocab", front: "med", reading: "med", meaning: "with", example: { jp: "Jeg kommer med bussen.", en: "I am coming by bus." }, accept: ["along with", "by"], drill: { jp: "Jeg reiser med buss til Bergen", en: "I travel by bus to Bergen" }, hint: "The d is silent: MEH. It covers company (med Erling), instrument (med en kniv) and transport — and Norwegian says med bussen, med tog, where English says \"by bus\", \"by train\"." },
        { id: "no-u13l1-av", type: "vocab", front: "av", reading: "av", meaning: "of", example: { jp: "Erling er en av oss.", en: "Erling is one of us." }, accept: ["off", "by", "from"], drill: { jp: "Et hus av tre er fint", en: "A house of wood is nice" }, hint: "AAV, with a soft v. This is \"of\" in the sense of belonging to a group — en av oss — and also \"off\": ta av deg skjorta. It is not the \"of\" of ownership; Norwegian does that with -s or with til." },
        { id: "no-u13l1-etter", type: "vocab", front: "etter", reading: "etter", meaning: "after", example: { jp: "Etter middagen går vi på kino.", en: "After dinner we are going to the cinema." }, accept: ["afterwards", "behind"], drill: { jp: "Etter middag går vi ut", en: "After dinner we go out" }, hint: "ET-ter, in time and in space both — etter middagen, etter deg. And look at the order: the etter-phrase is the first element, so går is second and vi comes behind it." },
        { id: "no-u13l1-for", type: "vocab", front: "før", reading: "for", meaning: "before", example: { jp: "Jeg spiser før jeg går.", en: "I eat before I leave." }, accept: ["earlier", "previously", "until"], drill: { jp: "Før frokost drikker jeg vann", en: "Before breakfast I drink water" }, hint: "FURR — the ø is folded to o in the answer key, so the key looks like for. They are different words and they sound different: før is FURR, for is FORR." },
        { id: "no-u13l1-over", type: "vocab", front: "over", reading: "over", meaning: "over", example: { jp: "Sola er over husene.", en: "The sun is above the houses." }, accept: ["above", "across", "more than"], drill: { jp: "Det er ei sky over en by", en: "There is a cloud over a city" }, hint: "AW-ver. It also means \"more than\" in front of a number — over ti — and \"finished\": Nå er det over." },
        { id: "no-u13l1-under", type: "vocab", front: "under", reading: "under", meaning: "under", example: { jp: "Katten sover under bordet.", en: "The cat is sleeping under the table." }, accept: ["below", "beneath", "during"], drill: { jp: "En katt er under et bord", en: "A cat is under a table" }, hint: "UN-der, with the tight u of gul rather than an English \"oo\". Also \"during\" — under middagen — and \"less than\" with a number: under ti." },
      ],
    },
    // Lesson 2: the modals. Headworded in the infinitive; the hint carries the present.
    {
      id: "no-u13l2",
      unit: 13,
      lesson: 2,
      title: "Can, want, shall, must, should",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you can, want to, are going to, have to or should do — and drop the å from the verb that follows.",
      items: [
        { id: "no-u13l2-akunne", type: "vocab", front: "å kunne", reading: "akunne", meaning: "to be able to", example: { jp: "Jeg kan snakke litt norsk.", en: "I can speak a little Norwegian." }, accept: ["can", "be able to", "to be able", "to can"], drill: { jp: "Det er bra å kunne norsk", en: "It is good to know Norwegian" }, hint: "The present is kan — irregular, and nothing like the infinitive. Modals are the one class where infinitive + -r fails, so learn each present form on its own. After a modal the next verb drops its å: jeg kan snakke, never \"jeg kan å snakke\"." },
        { id: "no-u13l2-aville", type: "vocab", front: "å ville", reading: "aville", meaning: "to want to", example: { jp: "Vil du ha kaffe?", en: "Would you like some coffee?" }, accept: ["want", "to want", "will", "would like"], drill: { jp: "Det er lett å ville reise", en: "It is easy to want to travel" }, hint: "Present vil. It is \"want\" first and \"will\" second. Vil du ha...? is how Norwegians offer you anything at all. No å after it either: jeg vil gå." },
        { id: "no-u13l2-askulle", type: "vocab", front: "å skulle", reading: "askulle", meaning: "shall", example: { jp: "Vi skal reise i morgen.", en: "We are going to travel tomorrow." }, accept: ["will", "should", "to be going to", "going to"], drill: { jp: "Det er tungt å skulle reise", en: "It is hard to be going to travel" }, hint: "Present skal. Norwegian has no future TENSE at all, and skal + infinitive is the commonest way to talk about what is going to happen — though it carries intention, and the plain present (jeg reiser i morgen) and vil both do future work too. At A1, skal is the one to reach for." },
        { id: "no-u13l2-amatte", type: "vocab", front: "å måtte", reading: "amatte", meaning: "must", example: { jp: "Nå må jeg gå.", en: "Now I have to go." }, accept: ["have to", "to have to", "to must"], drill: { jp: "Det er tungt å måtte jobbe", en: "It is hard to have to work" }, hint: "Present må, said MAW. Plainer than English \"must\" — jeg må gå is simply \"I have to go\". Its negative is genuinely ambiguous and worth care: du må ikke gjøre det is normally heard as a prohibition, \"you must not\", though context can pull it toward \"you need not\". When you mean \"I don't have to\", say jeg trenger ikke instead. And note nå in the first slot, må second, jeg behind it." },
        { id: "no-u13l2-aburde", type: "vocab", front: "å burde", reading: "aburde", meaning: "should", example: { jp: "Du bør sove nå.", en: "You should sleep now." }, accept: ["ought to", "to ought to", "ought"], hint: "Present bør, BURR — the ø shows up in the present, not the infinitive. It is advice, where må is obligation: du bør sove is a suggestion; du må sove is not." },
        { id: "no-u13l2-afa", type: "vocab", front: "å få", reading: "afa", meaning: "to get", example: { jp: "Barna får en kake.", en: "The children are getting a cake." }, accept: ["get", "to receive", "receive", "may", "to be allowed to"], drill: { jp: "Det er hyggelig å få noe", en: "It is nice to get something" }, hint: "Present får, said FAWR — and keep it apart from før, which you met in lesson 1. It is a full verb meaning \"get\", and a modal meaning \"be allowed to\": Får jeg gå? May I go? Note barna — et barn takes -a in the definite plural." },
      ],
    },
    // Lesson 3: the six directional particles that build Norwegian's particle verbs.
    {
      id: "no-u13l3",
      unit: 13,
      lesson: 3,
      title: "Out, in, up, down, away, back",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Hang a direction on a verb — gå ut, kom inn, stå opp, gå ned, gå bort, komme tilbake.",
      items: [
        { id: "no-u13l3-ut", type: "vocab", front: "ut", reading: "ut", meaning: "out", example: { jp: "Vi går ut nå.", en: "We are going out now." }, accept: ["outside", "outward"], drill: { jp: "Vi går ut i dag", en: "We are going out today" }, hint: "The tight u of gul, held long. Norwegian builds verbs by hanging a direction on the end — gå ut, komme ut, ta ut — and the particle carries most of the meaning, so six of them buy you dozens of verbs. ut is movement outward; already being outside is ute." },
        { id: "no-u13l3-inn", type: "vocab", front: "inn", reading: "inn", meaning: "in (movement)", example: { jp: "Kom inn!", en: "Come in!" }, accept: ["in", "inside", "inward", "into"], drill: { jp: "Kari kommer inn nå", en: "Kari is coming in now" }, hint: "INN, the movement partner of ut. Already being inside is inne — the same pattern both ways round: ut/ute, inn/inne." },
        { id: "no-u13l3-opp", type: "vocab", front: "opp", reading: "opp", meaning: "up", example: { jp: "Bussen kjører opp til sykehuset.", en: "The bus drives up to the hospital." }, accept: ["upward", "upwards"], drill: { jp: "Jeg står opp tidlig", en: "I get up early" }, hint: "OPP. å stå opp is \"to get up\" in the morning, and one of the commonest particle verbs in the language. Already being up is oppe." },
        { id: "no-u13l3-ned", type: "vocab", front: "ned", reading: "ned", meaning: "down", example: { jp: "Vi går ned til torget.", en: "We are walking down to the square." }, accept: ["downward", "downwards"], drill: { jp: "Han går ned til butikken", en: "He goes down to the shop" }, hint: "NEH — silent d, like god and med. Sett deg ned is \"sit down\". Already being down is nede." },
        { id: "no-u13l3-bort", type: "vocab", front: "bort", reading: "bort", meaning: "away", example: { jp: "Erling reiser bort i morgen.", en: "Erling is going away tomorrow." }, accept: ["off"], drill: { jp: "De reiser bort i dag", en: "They are travelling away today" }, hint: "BORT: movement away from here. Already being away is borte — which is also how Norwegian says something is lost or gone: telefonen er borte." },
        { id: "no-u13l3-tilbake", type: "vocab", front: "tilbake", reading: "tilbake", meaning: "back", example: { jp: "Vi kommer tilbake i morgen.", en: "We are coming back tomorrow." }, accept: ["backward", "backwards", "return"], drill: { jp: "Vi kommer tilbake i kveld", en: "We are coming back tonight" }, hint: "til-BAA-ke, built from til + bake, \"to the back\". It is the particle of returning: komme tilbake, gå tilbake, ta tilbake." },
      ],
    },
    // Lesson 4: the verbs those particles attach to.
    {
      id: "no-u13l4",
      unit: 13,
      lesson: 4,
      title: "Take, stand, sit, lie, become, need",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use six everyday verbs — ta, stå, sitte, ligge, bli, trenge — and pick the right one for where a thing is.",
      items: [
        { id: "no-u13l4-ata", type: "vocab", front: "å ta", reading: "ata", meaning: "to take", example: { jp: "Jeg tar bussen til skolen.", en: "I take the bus to school." }, accept: ["take", "to catch", "catch"], drill: { jp: "Det er lett å ta bussen", en: "It is easy to take the bus" }, hint: "Present tar. As broad as English \"take\" — ta bussen, ta en kopp kaffe — and it multiplies with particles: ta på, ta av, ta ut, ta med (to bring along)." },
        { id: "no-u13l4-asta", type: "vocab", front: "å stå", reading: "asta", meaning: "to stand", example: { jp: "Bilen står i gata.", en: "The car is standing in the street." }, accept: ["stand", "to be standing"], drill: { jp: "Det er lett å stå her", en: "It is easy to stand here" }, hint: "Present står, STAWR. Norwegian is fussy where English just says \"is\": a car står, a knife ligger, a person sitter. Choosing the right one is one of the fastest ways to sound less foreign." },
        { id: "no-u13l4-asitte", type: "vocab", front: "å sitte", reading: "asitte", meaning: "to sit", example: { jp: "Vi sitter og spiser.", en: "We are sitting eating." }, accept: ["sit", "to be sitting"], drill: { jp: "Det er godt å sitte her", en: "It is good to sit here" }, hint: "Present sitter. Norwegian loves the frame sitte og + verb — sitter og spiser, sitter og snakker — where English uses a plain continuous. It is one action described from the posture, not two." },
        { id: "no-u13l4-aligge", type: "vocab", front: "å ligge", reading: "aligge", meaning: "to lie", example: { jp: "Bergen ligger i Norge.", en: "Bergen is in Norway." }, accept: ["lie", "to be lying", "to be situated", "be located"], drill: { jp: "Det er godt å ligge her", en: "It is good to lie here" }, hint: "Present ligger. It is where things lie flat — kniven ligger på bordet — and it is also the idiomatic way to say where a PLACE is: Bergen ligger i Norge. Bergen er i Norge is grammatical too, but a Norwegian reaches for ligger." },
        { id: "no-u13l4-abli", type: "vocab", front: "å bli", reading: "abli", meaning: "to become", example: { jp: "Erling blir lege.", en: "Erling is becoming a doctor." }, accept: ["become", "to stay", "stay", "to get", "get"], drill: { jp: "Det er hyggelig å bli lege", en: "It is nice to become a doctor" }, hint: "Present blir, said BLEER. Two jobs in one word — to become (han blir lege) and to stay (jeg blir her) — and what follows it tells you which." },
        { id: "no-u13l4-atrenge", type: "vocab", front: "å trenge", reading: "atrenge", meaning: "to need", example: { jp: "Jeg trenger en ny bil.", en: "I need a new car." }, accept: ["need", "to require", "require"], drill: { jp: "Vi begynner å trenge penger", en: "We are starting to need money" }, hint: "Present trenger. It nearly always takes a noun after it — jeg trenger tid, jeg trenger en lege. For \"need to do something\", Norwegian usually reaches for må instead." },
      ],
    },
  ],
};
