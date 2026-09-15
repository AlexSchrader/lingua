// NO Unit 21 — Rutiner og planer ("Activities and routine") — A2
// FIRST UNIT OF THE A2 BAND, so it sets the register blocks 2 and 3 match.
//
// WHAT CHANGES AT A2, and it is only this: the EXAMPLE grows. A1 examples were
// one clause; A2 examples take a subordinate clause — fordi, at, men, hvis, når —
// because that is the comprehension step the band is for. The DRILL does not
// grow: it stays 3-8 tokens, because its job is to be tokenizable, not to teach.
// Two sentences per card doing two different jobs.
//
// A1 conventions are unchanged and binding (src/data/no/unit1.js §1-§8): noun
// fronts are the indefinite with en/ei/et, feminine marked `ei`; verbs are
// headworded `å + infinitive`; ø is written o in `reading` (the engine folds it
// now — answer.js:43 — but the readings stay as authored and both spellings pass).
//
// THE DEFINITENESS EFFECT applies here as it did in A1: an indefinite subject
// cannot front an existential or locative clause. "Ei bok ligger på bordet" is
// wrong; "Det ligger ei bok på bordet" is right and keeps the front. This class
// survived two audit rounds in A1 — it is the easiest error to write in this
// language and the hardest to see.
//
// ═══ CROSS-BLOCK COLLISION LEDGER — all three A2 seats read THIS list ═══
// Kept by block 1 (crew lead) because no single seat can see two other branches
// at once. `et resultat` survived FOUR separate sweeps for exactly that reason:
// block 3 reported two collisions to me, I fixed one and never relayed the list,
// and block 2 then re-found them and reported them as unreported. That is a
// STRUCTURAL gap, not a communication lapse — hence one shared list.
// Send finds here rather than resolving silently. Lower slot wins unless noted.
//
//   front           holder        loser        resolution
//   ei kø           b1 u23        b2 u32       b2 reserved. Mine was ALSO a gender
//                                              error (kø is masculine) — fixing it
//                                              turned a hidden collision into an
//                                              exact one, which is strictly better.
//   en søknad       b1 u24        b2 u32       b2 reserved (et krav, en kontrakt)
//   et resultat     b1 u24        b3 u44       b3 to reserve. Found by b2's sweep.
//   ei retning      b1 u23        b3 u45       b3 reserved (framover). Written `en`
//                                              at first on a false "retning is
//                                              masculine-only" note; Bokmålsordboka
//                                              gives it hankjønn ELLER hunkjønn, so
//                                              it is `ei` like the rest of the class.
//   å svinge        b1 u23        b3 u45       b3 reserved (å vende)
//   en innbygger    b2 u32        b3 u45       b3 reserved (en landsdel)
//   å underholde    b2 u35        b3 u48       b3 to reserve
//   en skikk        b2 u35        b3 u50       b3 to reserve
//   et krav         b2 u32        b3 u50       b3 to reserve
//   ei samling      b2 u35        b3 u47       RESOLVED — b2 never shipped the card, so
//                                              b3's `å samle` (u47l4) stands alone. The
//                                              row stays as the worked example: a LEXEME
//                                              pair, not an exact one, which no string
//                                              screen on any branch would have shown.
//   ei utvikling /  b1 u24        b2 u34       BOTH STAND, cross-referenced. Noun and
//   å utvikle                                  verb of one lexeme, the same shape as
//                                              tre/et tre and dyr/et dyr, which A1 ships
//                                              on purpose. Found by the content-auditor
//                                              after the merge; re-authoring either would
//                                              cost more than it buys.
//   ei øving /      b1 u25        b3 u44       BOTH STAND, same call. `ei øving` is the
//   en øvelse                                  activity of practising, `en øvelse` a
//                                              single exercise you do. The two genders
//                                              are not a choice either: -ing takes both,
//                                              -else has no feminine at all.
//   ei slette /     b3 u45        b2 u33       NOT A COLLISION — both stand, cross-
//   å slette                                   referenced. A noun (a plain) and a
//                                              verb (to delete) sharing a headword,
//                                              same shape as tre/et tre and dyr/et
//                                              dyr, which A1 ships deliberately.
//   nine nature fronts            b2 declined  blomst, blad, himmel, stjerne, is,
//   (b3 u43/u45/u47)                           temperatur, grad, hav, vekt. b2 WON
//                                              all nine on slot and took none, so
//                                              b3 does not reserve against them.
//
// TWO CLASSES NO CHECKER IN THIS PROJECT CAN SEE, both found by block 3:
//   SAME NOUN, DIFFERENT ARTICLE — `ei kø` and `en kø` are one word and two
//   strings. validate:content passes; every string-diff screen passes. Strip the
//   article and compare HEADWORDS.
//   AN UNCOMMITTED SIBLING BRANCH — twelve of fourteen fronts in b3's u48 came
//   back "free" to b2's screen because u48 is not committed. Clearing a list
//   against branches is not clearing it; the lead cross-checks by hand.
//
// SCOPE: A1's 480 words are all available. Every front here was screened against
// them with scripts/free.mjs before authoring, exact AND lexeme.
//   FREE: Erling, Kari, Anna, Jonas, Oslo, Bergen, Norge, Europa | kafé, kaffe, taxi, telefon, restaurant, museum, hotell, bank, park, problem, person | 2000
//   A FREE entry is exempt in EVERY unit, not just this one, so a word this
//   course teaches as a front must NEVER appear here — it would disable the
//   forward-reference check for that word corpus-wide.
export const NO_UNIT21 = {
  id: "no-u21",
  lang: "no",
  title: "Rutiner og planer",
  order: 21,
  stage: "a2",
  lessons: [
    {
      id: "no-u21l1",
      unit: 21,
      lesson: 1,
      title: "The shape of a day",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you usually do and in what order — vanligvis, å pleie, etterpå, samtidig — instead of only what you are doing now.",
      items: [
        { id: "no-u21l1-enrutine", type: "vocab", front: "en rutine", reading: "enrutine", meaning: "routine", example: { jp: "En rutine gjør at dagen begynner tidlig og slutter sent.", en: "A routine means the day starts early and ends late." }, accept: ["a routine", "habit"], drill: { jp: "Vi har en rutine", en: "We have a routine" }, hint: "ru-TEE-ne. Masculine: definite rutinen. A1 taught en vane for a personal habit; a rutine is the fixed shape of a day." },
        { id: "no-u21l1-vanligvis", type: "vocab", front: "vanligvis", reading: "vanligvis", meaning: "usually", example: { jp: "Vanligvis står jeg opp tidlig, men i helga sover jeg mye.", en: "Usually I get up early, but at the weekend I sleep a lot." }, accept: ["normally", "as a rule", "generally"], drill: { jp: "Vanligvis jobber jeg mye", en: "Usually I work a lot" }, hint: "VAN-li-vis, with the silent -ig g from A1 unit 1. Fronting it inverts the verb: vanligvis STÅR jeg, never \"vanligvis jeg står\"." },
        { id: "no-u21l1-apleie", type: "vocab", front: "å pleie", reading: "apleie", meaning: "to usually do", example: { jp: "Jeg pleier å spise frokost tidlig, fordi jeg begynner å jobbe klokka åtte.", en: "I usually eat breakfast early, because I start work at eight o'clock." }, accept: ["to tend to", "to be in the habit of", "usually do"], drill: { jp: "Det er fint å pleie å spise sammen", en: "It is nice to usually eat together" }, hint: "PLAY-e. It takes another verb with å after it: jeg pleier å spise. It has no good English one-word twin — \"I usually eat\" is what it means." },
        { id: "no-u21l1-etterpa", type: "vocab", front: "etterpå", reading: "etterpa", meaning: "afterwards", example: { jp: "Vi spiser middag klokka fem, og etterpå går vi en tur i parken.", en: "We eat dinner at five, and afterwards we go for a walk in the park." }, accept: ["after that", "later", "then"], drill: { jp: "Vi spiser og går etterpå", en: "We eat and leave afterwards" }, hint: "ET-ter-paw. Built from etter (A1 u13) plus på. It points forward in time; etter needs an object, etterpå stands alone." },
        { id: "no-u21l1-samtidig", type: "vocab", front: "samtidig", reading: "samtidig", meaning: "at the same time", example: { jp: "Han hører på musikk og lager middag samtidig.", en: "He listens to music and makes dinner at the same time." }, accept: ["simultaneously", "meanwhile"], drill: { jp: "Han leser og spiser samtidig", en: "He reads and eats at the same time" }, hint: "SAM-ti-di — sam (together) plus tid (time), and the silent -ig g again. It sits at the end of the clause, or fronts it and pulls the verb along: Samtidig lager han middag." },
        { id: "no-u21l1-straks", type: "vocab", front: "straks", reading: "straks", meaning: "right away", example: { jp: "Jeg kommer straks, men du må vente litt fordi jeg snakker i telefonen.", en: "I am coming right away, but you have to wait a little because I am on the phone." }, accept: ["immediately", "at once", "in a moment"], drill: { jp: "Han kommer straks til Oslo", en: "He is coming to Oslo right away" }, hint: "STRAKS. Sooner than snart, which A1 taught — snart is \"soon\", straks is \"this minute\"." },
      ],
    },
    {
      id: "no-u21l2",
      unit: 21,
      lesson: 2,
      title: "Making a plan",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Make and change a plan with someone — foreslå, bestemme, en beskjed, ordne — and say what you have decided.",
      items: [
        { id: "no-u21l2-enplan", type: "vocab", front: "en plan", reading: "enplan", meaning: "plan", example: { jp: "Vi har en plan, men vi vet ikke hva været blir.", en: "We have a plan, but we do not know what the weather will be." }, accept: ["a plan", "scheme"], drill: { jp: "Vi lager en plan sammen", en: "We make a plan together" }, hint: "PLAAN. Masculine: definite planen, plural planer. Norwegian LAYS a plan where English makes one: å legge en plan." },
        { id: "no-u21l2-aplanlegge", type: "vocab", front: "å planlegge", reading: "aplanlegge", meaning: "to plan", example: { jp: "Kari planlegger en tur til Bergen, fordi hun vil besøke en venn.", en: "Kari is planning a trip to Bergen, because she wants to visit a friend." }, accept: ["plan", "to arrange", "arrange"], drill: { jp: "Kari liker å planlegge turer", en: "Kari likes to plan trips" }, hint: "plan + legge, \"to lay a plan\". Present planlegger. The past is planla, which A2 grammar will get to." },
        { id: "no-u21l2-abestemme", type: "vocab", front: "å bestemme", reading: "abestemme", meaning: "to decide", example: { jp: "Vi må bestemme i dag hva vi skal gjøre på lørdag.", en: "We have to decide today what we are going to do on Saturday." }, accept: ["decide", "to determine", "to make up one's mind"], drill: { jp: "Det er lett å bestemme seg", en: "It is easy to make up your mind" }, hint: "be-STEM-me. With seg it means to make up your own mind: jeg bestemmer meg." },
        { id: "no-u21l2-aforesla", type: "vocab", front: "å foreslå", reading: "aforesla", meaning: "to suggest", example: { jp: "Jeg foreslår at vi spiser på en kafé, fordi det regner nå.", en: "I suggest that we eat at a café, because it is raining now." }, accept: ["suggest", "to propose", "propose"], drill: { jp: "Det er lett å foreslå noe", en: "It is easy to suggest something" }, hint: "FOR-e-shlaw — built on å slå, to strike. It takes at plus a clause: jeg foreslår at vi …" },
        { id: "no-u21l2-enbeskjed", type: "vocab", front: "en beskjed", reading: "enbeskjed", meaning: "message (passed on)", example: { jp: "Han sender meg en beskjed, og så kommer han snart.", en: "He sends me word, and then he is coming soon." }, accept: ["a message", "word", "note"], drill: { jp: "Han sender en beskjed", en: "He sends a message" }, hint: "be-SHEH — the silent d again, and the skj hush from A1 unit 1. A1's ei melding is a written message; en beskjed is the information itself, often spoken." },
        { id: "no-u21l2-aordne", type: "vocab", front: "å ordne", reading: "aordne", meaning: "to sort out", example: { jp: "Jeg skal ordne billettene, så du trenger ikke gjøre noe.", en: "I will sort out the tickets, so you do not need to do anything." }, accept: ["sort out", "to arrange", "arrange", "to fix", "fix"], drill: { jp: "Det er lett å ordne billetten", en: "It is easy to sort out the ticket" }, hint: "ORD-ne, from et ord? No — from orden, order. Det ordner seg is the standard Norwegian reassurance: it will work out." },
      ],
    },
    {
      id: "no-u21l3",
      unit: 21,
      lesson: 3,
      title: "Busy, free, out of energy",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say whether you have time or energy for something — travel, ledig, å rekke, å orke — and ask someone to hurry.",
      items: [
        { id: "no-u21l3-travel", type: "vocab", front: "travel", reading: "travel", meaning: "busy", example: { jp: "Jeg er travel i dag, men på lørdag er jeg ledig.", en: "I am busy today, but on Saturday I am free." }, accept: ["occupied", "hectic"], drill: { jp: "Erling er travel i dag", en: "Erling is busy today" }, hint: "TRAA-vel. Nothing to do with English \"travel\" — that is A1's å reise. A common alternative is å ha det travelt." },
        { id: "no-u21l3-ledig", type: "vocab", front: "ledig", reading: "ledig", meaning: "free", example: { jp: "Er du ledig i morgen, eller må du jobbe?", en: "Are you free tomorrow, or do you have to work?" }, accept: ["available", "vacant", "unoccupied"], drill: { jp: "Er du ledig i kveld", en: "Are you free tonight" }, hint: "LEH-di, silent -ig g. Free as in unoccupied — a ledig stol, a ledig kveld. Not free of charge, which is gratis." },
        { id: "no-u21l3-enpause", type: "vocab", front: "en pause", reading: "enpause", meaning: "break", example: { jp: "Vi tar en pause nå, fordi vi har jobbet i tre timer.", en: "We are taking a break now, because we have worked for three hours." }, accept: ["a break", "pause", "rest"], drill: { jp: "En pause er viktig", en: "A break is important" }, hint: "PAU-se, two syllables. You TAKE one: å ta en pause." },
        { id: "no-u21l3-arekke", type: "vocab", front: "å rekke", reading: "arekke", meaning: "to make it in time", example: { jp: "Hvis vi skynder oss, rekker vi bussen klokka ti.", en: "If we hurry, we will catch the bus at ten o'clock." }, accept: ["to catch", "catch", "to have time for", "to manage in time"], drill: { jp: "Det er lett å rekke bussen", en: "It is easy to catch the bus" }, hint: "REK-ke. Specifically about TIME — rekke bussen is to catch it before it goes. Note the V2: hvis-clause first, so the verb rekker comes straight after it." },
        { id: "no-u21l3-aorke", type: "vocab", front: "å orke", reading: "aorke", meaning: "to have the energy", example: { jp: "Jeg orker ikke å lage middag i kveld, så vi spiser på en restaurant.", en: "I do not have the energy to make dinner tonight, so we are eating at a restaurant." }, accept: ["to manage", "to be up to", "to bear", "to face"], drill: { jp: "Det er tungt å orke alt", en: "It is hard to have energy for everything" }, hint: "OR-ke. Almost always negative — jeg orker ikke. There is no tidy English word; \"I can't face it\" is the feeling." },
        { id: "no-u21l3-askyndeseg", type: "vocab", front: "å skynde seg", reading: "askyndeseg", meaning: "to hurry", example: { jp: "Du må skynde deg, fordi toget går klokka ti.", en: "You have to hurry, because the train leaves at ten." }, accept: ["hurry", "to hurry up", "to rush", "rush"], drill: { jp: "Det er lett å skynde seg", en: "It is easy to hurry" }, hint: "SHUEN-ne seg — sk before y is the sh sound, and the d is silent. The seg changes with the person: jeg skynder MEG, du skynder DEG." },
      ],
    },
    {
      id: "no-u21l4",
      unit: 21,
      lesson: 4,
      title: "Keeping at it",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about starting, continuing and giving up an activity — å trene, å fortsette, å avslutte, å klare, å delta.",
      items: [
        { id: "no-u21l4-atrene", type: "vocab", front: "å trene", reading: "atrene", meaning: "to exercise", example: { jp: "Erling trener tre dager i uka, fordi han vil bli sterk.", en: "Erling exercises three days a week, because he wants to get strong." }, accept: ["exercise", "to train", "train", "to work out"], drill: { jp: "Erling liker å trene mye", en: "Erling likes to exercise a lot" }, hint: "TREH-ne. Covers sport and practice both. En gang is \"one time\" — tre ganger i uka, three times a week." },
        { id: "no-u21l4-aslappeav", type: "vocab", front: "å slappe av", reading: "aslappeav", meaning: "to relax", example: { jp: "Etter en lang dag vil jeg bare slappe av og høre på musikk.", en: "After a long day I just want to relax and listen to music." }, accept: ["relax", "to unwind", "to take it easy", "chill"], drill: { jp: "Det er godt å slappe av", en: "It is good to relax" }, hint: "SLAP-pe AV. The av is part of the verb and moves in a sentence: jeg slapper av. Slapp av! on its own means calm down." },
        { id: "no-u21l4-afortsette", type: "vocab", front: "å fortsette", reading: "afortsette", meaning: "to continue", example: { jp: "Vi fortsetter å lese boka, men den er lang.", en: "We continue reading the book, but it is long." }, accept: ["continue", "to carry on", "carry on", "to go on"], drill: { jp: "Det er viktig å fortsette å lese", en: "It is important to continue reading" }, hint: "FORT-set-te. Takes å plus a verb: fortsette å lese. It also takes a plain object: vi fortsetter turen." },
        { id: "no-u21l4-aavslutte", type: "vocab", front: "å avslutte", reading: "aavslutte", meaning: "to finish off", example: { jp: "Han avslutter alltid dagen med en tur, når været er bra.", en: "He always finishes the day with a walk, when the weather is good." }, accept: ["finish", "to conclude", "conclude", "to end"], drill: { jp: "Det er godt å avslutte dagen", en: "It is good to finish the day" }, hint: "AV-slut-te. A1 taught å slutte, to stop. å avslutte takes an OBJECT — you finish SOMETHING off, where å slutte is what you yourself do." },
        { id: "no-u21l4-aklare", type: "vocab", front: "å klare", reading: "aklare", meaning: "to manage", example: { jp: "Jeg klarer ikke å svare, fordi jeg ikke forstår det.", en: "I cannot manage to answer, because I do not understand it." }, accept: ["manage", "to cope", "cope", "to be able to"], drill: { jp: "Det er lett å klare oppgaven", en: "It is easy to manage the task" }, hint: "KLAA-re. Managing something hard: jeg klarer det. Past klarte. Different from å kunne, which is knowing how." },
        { id: "no-u21l4-adelta", type: "vocab", front: "å delta", reading: "adelta", meaning: "to take part", example: { jp: "Mange elever deltar på turen, men noen kan ikke.", en: "Many pupils take part in the trip, but some cannot." }, accept: ["take part", "to participate", "participate", "to join in"], drill: { jp: "Det er hyggelig å delta på turen", en: "It is nice to take part in the trip" }, hint: "DEL-taa — del (part) plus ta (take), literally \"take part\", the same picture as English. You take part PÅ something in Norwegian." },
      ],
    },
  ],
};
