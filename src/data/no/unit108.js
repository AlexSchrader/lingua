// NO Unit 108 — Grammatikk 11: å veie og ta forbehold — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Grammar 11 — discourse, cohesion, hedged claims". Retitled in
// Norwegian per CLAUDE.md → "No front language". Conventions are unit1.js §1–§9.
//
// ⚠ READ THIS BEFORE ADDING A CONNECTIVE. Same hazard as u106 and worse: the
// ordinary discourse connectives are ALL spent before B2. Measured while authoring:
//   u29 Bindeord — dessuten · i tillegg · samt · nemlig · deretter · til slutt ·
//       altså · dermed · slik at · siden · likevel · imidlertid · derimot ·
//       tvert imot · enda · ellers · heller
//   u69l3 Å binde avsnitt sammen — videre · for øvrig · således · først og fremst ·
//       på den annen side · med andre ord
//   u36 · u52 · u54 · u73 — på grunn av · takket være · det vil si · i så fall ·
//       stort sett · forresten · nokså · forholdsvis · relativt · snarere
// So a B2 unit cannot teach "how to link two sentences" — that is done. What is
// NOT done, and what this unit teaches, is the WRITTEN register of the same moves
// plus the thing B1 never reaches: hedging a claim so it survives being checked.
//
// ⚠ ONE MORE CONSTRAINT THAT SHAPED THIS UNIT, AND BLOCK 1 SHOULD KNOW. Block 1
// (u88–u100) was authoring `argument`, `evidence`, `nuance-degree` and
// `risk-uncertainty` in parallel with this, and their fronts did not exist in the
// corpus while this was written — nothing can check for a collision that has not
// been committed yet. This unit therefore stays deliberately on the STRUCTURAL
// side of the line: fixed adverbial frames, not the lexicon of argument (no words
// for claim, proof, doubt, probability). If block 1 has nonetheless landed any of
// these eighteen fronts, they are the overlap to resolve, and this unit should
// yield — the thematic slot owns the argument lexicon, this one owns the frames.
//
// ⚠ `alt tyder på` (l3) CONTAINS `å tyde på`, WHICH IS TAUGHT (u54). That is
// deliberate and it is the established pattern for this category rather than a
// §7 violation: the corpus already teaches `så vidt jeg vet` (u54) over `å vite`,
// `det vil si` (u36) over `å si`, and `med andre ord` (u69) over `et ord`. A fixed
// adverbial frame is one thing in the mouth, and the frame is what is being
// taught, not the verb inside it.
//
// GENDER: no nouns are taught in this unit — four lessons of adverbial frames.
// ⚠ EVERY CARD HERE FRONTS ITS CLAUSE, SO EVERY CARD IS A V2 DRILL (§4). That is
// the grammatical payload hiding inside what looks like a vocabulary unit: put any
// of these eighteen phrases first and the subject MUST move behind the verb.
// unit1.js §4 records that block 1 left the corpus with essentially one clean
// fronted-XP demonstration; this unit adds eighteen, in both example and drill.
//
// SCOPE: frozen base u1–u87 plus u101–u107 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT108 = {
  id: "no-u108",
  lang: "no",
  title: "Grammatikk 11: å veie og ta forbehold",
  order: 108,
  stage: "b2",
  lessons: [
    // Lesson 1: the written register of linking. Each has a spoken twin the
    // learner already owns, and the hint names it.
    {
      id: "no-u108l1",
      unit: 108,
      lesson: 1,
      title: "Bindeord i skrift",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Link two written sentences in a formal register — consequently, nonetheless, seeing as.",
      items: [
        { id: "no-u108l1-folgelig", type: "vocab", front: "følgelig", reading: "folgelig", meaning: "consequently", example: { jp: "Prisen øker, og følgelig synker forbruket.", en: "The price rises, and consequently consumption falls." }, accept: ["therefore", "accordingly", "hence"], drill: { jp: "Prisen øker og følgelig synker forbruket", en: "The price rises and consequently consumption falls" }, hint: "From ei følge, a consequence (cf. som følge av, u107). ⚠ ITS SPOKEN TWIN IS dermed (u29) — same meaning, entirely different register. Note the V2 in both sentences: følgelig SYNKER forbruket, subject behind the verb (§4)." },
        { id: "no-u108l1-ikkedestomindre", type: "vocab", front: "ikke desto mindre", reading: "ikkedestomindre", meaning: "nonetheless", example: { jp: "Saken er vanskelig. Ikke desto mindre må vi svare.", en: "The case is difficult. Nonetheless we have to answer." }, accept: ["nevertheless", "all the same", "even so"], drill: { jp: "Ikke desto mindre må vi svare", en: "Nonetheless we have to answer" }, hint: "Literally \"not by that less\" — desto is an old comparative particle surviving only in fixed phrases. ⚠ ITS SPOKEN TWIN IS likevel (u29). This is the heaviest concessive Norwegian has and belongs in writing only." },
        { id: "no-u108l1-tilgjengjeld", type: "vocab", front: "til gjengjeld", reading: "tilgjengjeld", meaning: "in return", example: { jp: "Arbeidet er tungt, men til gjengjeld lærer du mye.", en: "The work is hard, but in return you learn a lot." }, accept: ["on the other hand (compensating)", "by way of compensation"], drill: { jp: "Til gjengjeld er den billig", en: "In return it is cheap" }, hint: "en gjengjeld is a requital. ⚠ NOT A PLAIN CONTRAST — it means the second thing COMPENSATES for the first. Where derimot (u29) merely opposes, til gjengjeld pays you back, so it needs a downside in front of it." },
        { id: "no-u108l1-iogmedat", type: "vocab", front: "i og med at", reading: "iogmedat", meaning: "seeing as", example: { jp: "I og med at fristen er ute, må vi vente.", en: "Seeing as the deadline has passed, we have to wait." }, accept: ["given that", "since (reason)", "in view of the fact that"], drill: { jp: "I og med at fristen er ute", en: "Seeing as the deadline has passed" }, hint: "⚠ ITS SPOKEN TWINS ARE siden (u29) and ettersom (u36). Marks a reason the reader is expected to accept as already known — not new evidence, but a fact both parties share. Drops the at before a noun: i og med fristen." },
        { id: "no-u108l1-hvaangar", type: "vocab", front: "hva angår", reading: "hvaangar", meaning: "as regards", example: { jp: "Hva angår prisen, er vi enige.", en: "As regards the price, we are agreed." }, accept: ["as for", "concerning", "with respect to"], drill: { jp: "Hva angår prisen er alt klart", en: "As regards the price everything is clear" }, hint: "Built on å angå (u107l4). ⚠ THE MOST FORMAL OF THE THREE TOPIC-SHIFTERS: når det gjelder (u107) is neutral, med hensyn til (u107) is official, hva angår is close to legal. Same job, three registers." },
        { id: "no-u108l1-ikkeminst", type: "vocab", front: "ikke minst", reading: "ikkeminst", meaning: "not least", example: { jp: "Mange var uenige, ikke minst de unge.", en: "Many disagreed, not least the young." }, accept: ["especially", "above all", "particularly"], drill: { jp: "Ikke minst de unge var uenige", en: "Not least the young disagreed" }, hint: "minst is the irregular superlative of liten (u53) — liten, mindre, minst. Singles out the most important member of a group you have just named, and is one of the commonest phrases in Norwegian public writing." },
      ],
    },
    // Lesson 2: weighing. The moves that let a writer hold two sides at once
    // without committing — which is what a drøfting (u103) is made of.
    {
      id: "no-u108l2",
      unit: 108,
      lesson: 2,
      title: "Å veie to sider",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Weigh two sides in writing — on the one hand, taken as a whole, for my part — without settling it too early.",
      items: [
        { id: "no-u108l2-padenenesiden", type: "vocab", front: "på den ene siden", reading: "padenenesiden", meaning: "on the one hand", example: { jp: "På den ene siden er tiltaket dyrt.", en: "On the one hand the measure is expensive." }, accept: ["from one side", "one view is"], drill: { jp: "På den ene siden er det dyrt", en: "On the one hand it is expensive" }, hint: "⚠ THE OPENING HALF OF A PAIR — its partner på den annen side is already yours from u69l3. Norwegian keeps the archaic annen in the second half while the first says den ene, and swapping them sounds wrong. Fronting forces V2: … siden ER tiltaket dyrt (§4)." },
        { id: "no-u108l2-settunderett", type: "vocab", front: "sett under ett", reading: "settunderett", meaning: "taken as a whole", example: { jp: "Sett under ett er resultatet godt.", en: "Taken as a whole the result is good." }, accept: ["all things considered", "viewed together"], drill: { jp: "Sett under ett er dette bra", en: "Taken as a whole this is good" }, hint: "sett is the participle of å se (u2) — \"seen under one\". Signals that the writer is stepping back from the details to give a single verdict, and is the standard closing move of a Norwegian report." },
        { id: "no-u108l2-idengrad", type: "vocab", front: "i den grad", reading: "idengrad", meaning: "to the extent that", example: { jp: "Tiltaket virker i den grad folk følger det.", en: "The measure works to the extent that people follow it." }, accept: ["insofar as", "to the degree that"], drill: { jp: "Vi hjelper i den grad vi kan", en: "We help to the extent that we can" }, hint: "⚠ MAKES A CLAIM CONDITIONAL RATHER THAN WEAKER. Unlike til en viss grad (u106), which softens, i den grad ties the claim to a condition: the thing is true exactly as far as the condition holds, and no further." },
        { id: "no-u108l2-omikkeannet", type: "vocab", front: "om ikke annet", reading: "omikkeannet", meaning: "if nothing else", example: { jp: "Om ikke annet lærte vi noe nytt.", en: "If nothing else, we learned something new." }, accept: ["at any rate", "at the very least"], drill: { jp: "Om ikke annet lærte vi noe", en: "If nothing else, we learned something" }, hint: "Rescues a minimum from something that mostly failed. ⚠ SIGNALS THE REST WAS A DISAPPOINTMENT — a Norwegian who says om ikke annet has already conceded the main point, politely." },
        { id: "no-u108l2-formindel", type: "vocab", front: "for min del", reading: "formindel", meaning: "for my part", example: { jp: "For min del er dette helt greit.", en: "For my part this is completely fine." }, accept: ["as far as I am concerned", "speaking personally"], drill: { jp: "For min del er dette greit", en: "For my part this is fine" }, hint: "en del, a part. Inflects for the person: for hans del, for vår del. ⚠ QUIETLY MARKS DISTANCE — it says the speaker is content while implying others may not be, which is a very Norwegian way to decline to speak for the group." },
        { id: "no-u108l2-avdengrunn", type: "vocab", front: "av den grunn", reading: "avdengrunn", meaning: "for that reason", example: { jp: "Prisen er høy. Av den grunn sier vi nei.", en: "The price is high. For that reason we say no." }, accept: ["on that account", "which is why"], drill: { jp: "Av den grunn sier vi nei", en: "For that reason we say no" }, hint: "en grunn (u34). ⚠ ITS SPOKEN TWIN IS derfor (u12), and the difference is weight: derfor is the ordinary word, av den grunn points back at a reason already stated and treats it as settled." },
      ],
    },
    // Lesson 3: the hedge. Claiming something while leaving yourself room — the
    // single most B2 thing in this unit.
    {
      id: "no-u108l3",
      unit: 108,
      lesson: 3,
      title: "Forbehold i påstanden",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Make a claim with a hedge built into it — it may be that, everything indicates, strictly speaking.",
      items: [
        { id: "no-u108l3-detkantenkes", type: "vocab", front: "det kan tenkes", reading: "detkantenkes", meaning: "it may be that", example: { jp: "Det kan tenkes at prisen øker igjen.", en: "It may be that the price rises again." }, accept: ["possibly", "it is conceivable", "it might be"], drill: { jp: "Det kan tenkes at han kommer", en: "It may be that he comes" }, hint: "An s-passive of å tenke (u22) — literally \"it can be thought\" — built on the pattern from u70l1. ⚠ THE WRITER DISAPPEARS: nobody is doing the thinking, so nobody owns the claim. That is exactly what a hedge is for." },
        { id: "no-u108l3-alttyderpa", type: "vocab", front: "alt tyder på", reading: "alttyderpa", meaning: "everything indicates", example: { jp: "Alt tyder på at avtalen holder.", en: "Everything indicates that the agreement holds." }, accept: ["all the signs suggest", "it all points to"], drill: { jp: "Alt tyder på at han kommer", en: "Everything indicates that he comes" }, hint: "A fixed frame on å tyde på (u54). ⚠ STRONGER THAN IT LOOKS — it claims the evidence is unanimous, so it is a hedge only in form. Its formal twin is alt tilsier (u107l4); its weak cousin is visstnok (u54)." },
        { id: "no-u108l3-etteraltadomme", type: "vocab", front: "etter alt å dømme", reading: "etteraltadomme", meaning: "by all appearances", example: { jp: "Etter alt å dømme kommer han ikke.", en: "By all appearances he is not coming." }, accept: ["to all appearances", "as far as one can judge"], drill: { jp: "Etter alt å dømme blir det dyrt", en: "By all appearances it will be expensive" }, hint: "å dømme, to judge — one of the few frames that keeps its å (§5), which is why it can carry a drill. Two ø folds in the reading (§3): etteraltadomme. Compare tilsynelatende (u54), which hints the appearance may be false; this one does not." },
        { id: "no-u108l3-strengttatt", type: "vocab", front: "strengt tatt", reading: "strengttatt", meaning: "strictly speaking", example: { jp: "Strengt tatt er svaret feil.", en: "Strictly speaking the answer is wrong." }, accept: ["technically", "in the strict sense"], drill: { jp: "Strengt tatt er dette feil", en: "Strictly speaking this is wrong" }, hint: "streng (strict) + tatt, the participle of å ta (u13). ⚠ ALMOST ALWAYS INTRODUCES AN OBJECTION THE SPEAKER CONSIDERS PEDANTIC — including their own. It concedes that the strict reading differs from the useful one." },
        { id: "no-u108l3-isamate", type: "vocab", front: "i så måte", reading: "isamate", meaning: "in that respect", example: { jp: "Tiltaket er nytt. I så måte er det viktig.", en: "The measure is new. In that respect it is important." }, accept: ["in that regard", "on that score"], drill: { jp: "I så måte er det viktig", en: "In that respect it is important" }, hint: "en måte (u73), a way. ⚠ NARROWS THE CLAIM TO ONE DIMENSION — the thing is important in THIS respect and the writer says nothing about any other. A favourite of careful Norwegian prose for exactly that reason." },
        { id: "no-u108l3-inoengrad", type: "vocab", front: "i noen grad", reading: "inoengrad", meaning: "to some degree", example: { jp: "Prisen har økt i noen grad.", en: "The price has risen to some degree." }, accept: ["somewhat", "partly", "in some measure"], drill: { jp: "Dette stemmer i noen grad", en: "This is true to some degree" }, hint: "⚠ WEAKER THAN til en viss grad (u106), which concedes a real amount before a but. i noen grad concedes as little as possible while still admitting the thing happened — the smallest honest yes in the language." },
      ],
    },
    // Lesson 4: theory against practice. Six frames that set an official version
    // beside the real one, which is how Norwegian public argument is conducted.
    {
      id: "no-u108l4",
      unit: 108,
      lesson: 4,
      title: "Teori og praksis",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Set the official version against the real one — in theory, in practice, on paper, when all is said and done.",
      items: [
        { id: "no-u108l4-iteorien", type: "vocab", front: "i teorien", reading: "iteorien", meaning: "in theory", example: { jp: "I teorien er alt klart.", en: "In theory everything is clear." }, accept: ["theoretically", "in principle (abstractly)"], drill: { jp: "I teorien er dette lett", en: "In theory this is easy" }, hint: "⚠ ALWAYS DEFINITE — i teorien, never i en teori. Sets up i praksis below; a Norwegian who opens with i teorien is about to tell you it does not work. Compare i prinsippet (u73), which concedes a principle rather than doubting a plan." },
        { id: "no-u108l4-ipraksis", type: "vocab", front: "i praksis", reading: "ipraksis", meaning: "in practice", example: { jp: "I praksis går det ikke så bra.", en: "In practice it does not go so well." }, accept: ["in reality (in operation)", "actually", "when it comes down to it"], drill: { jp: "I praksis er det vanskelig", en: "In practice it is difficult" }, hint: "⚠ BARE HERE, DEFINITE ABOVE — i praksis takes no article at all while i teorien must have one. There is no rule; the pair simply froze that way, and getting it wrong is an audible learner error." },
        { id: "no-u108l4-irealiteten", type: "vocab", front: "i realiteten", reading: "irealiteten", meaning: "in reality", example: { jp: "I realiteten betaler vi mer.", en: "In reality we pay more." }, accept: ["in actual fact", "effectively"], drill: { jp: "I realiteten er prisen høy", en: "In reality the price is high" }, hint: "⚠ NOT THE SAME AS i praksis. i praksis is about how something WORKS when tried; i realiteten says the official description is false — it is the stronger accusation, and it contradicts rather than qualifies." },
        { id: "no-u108l4-papapiret", type: "vocab", front: "på papiret", reading: "papapiret", meaning: "on paper", example: { jp: "På papiret ser alt bra ut.", en: "On paper everything looks fine." }, accept: ["formally", "nominally", "as written"], drill: { jp: "På papiret er alt i orden", en: "On paper everything is in order" }, hint: "Definite, like i teorien. ⚠ ALWAYS IMPLIES A GAP — the sentence after it says what is actually the case. Note the reading doubles the pa (§3): papapiret, from på + papiret." },
        { id: "no-u108l4-isolertsett", type: "vocab", front: "isolert sett", reading: "isolertsett", meaning: "viewed in isolation", example: { jp: "Isolert sett er tiltaket billig.", en: "Viewed in isolation the measure is cheap." }, accept: ["on its own", "considered alone"], drill: { jp: "Isolert sett er dette godt", en: "Viewed in isolation this is good" }, hint: "The mirror of sett under ett (l2): both use sett, the participle of å se, but this one narrows where the other widens. ⚠ SIGNALS A BUT — isolert sett concedes a point about one part before objecting about the whole." },
        { id: "no-u108l4-naraltkommertilalt", type: "vocab", front: "når alt kommer til alt", reading: "naraltkommertilalt", meaning: "when all is said and done", example: { jp: "Når alt kommer til alt er dette et godt svar.", en: "When all is said and done this is a good answer." }, accept: ["at the end of the day", "ultimately", "in the final analysis"], drill: { jp: "Når alt kommer til alt er vi enige", en: "When all is said and done we agree" }, hint: "Literally \"when everything comes to everything\". The closing move of the whole unit: after all the weighing and hedging, this is the one that finally commits. Longest front in the corpus, and it still fronts its clause and forces V2 (§4)." },
      ],
    },
  ],
};
