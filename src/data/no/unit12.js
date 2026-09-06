// NO Unit 12 — Setning og ordstilling ("The sentence and word order") — A1 GRAMMAR
// Strand C, unit 1 of 3. Conventions are declared in no/unit1.js and bind every unit.
//
// ═════════════════════════════════════════════════════════════════════════════
// THIS UNIT STATES THE V2 RULE OUT LOUD. It is the reason the unit exists.
// ═════════════════════════════════════════════════════════════════════════════
// Norwegian is a V2 language: **in a main clause the finite verb is the second
// element, always.** Not the second word — the second ELEMENT. Whatever opens the
// clause, the verb follows it and the subject is pushed in behind the verb:
//     Jeg spiser nå.            [Jeg]      [spiser] nå.
//     Nå spiser jeg.            [Nå]       [spiser] jeg.
//     I Bergen regner det ofte. [I Bergen] [regner] det ofte.
//     Hvis det regner, kommer Erling ikke.   ← the whole hvis-clause is element one
// English does the opposite ("Now I eat"), which is exactly why an English speaker
// needs the rule stated rather than merely modelled.
//
// unit1.js §4 is explicit that block 1 did NOT deliver the exposure it first
// claimed: of its V2 instances 19 are yes/no questions, which an English speaker
// already inverts, and only one is a clean fronted-XP declarative. So this block
// front-loaded them — u9 alone carries six (I dag er været bra · I morgen kommer
// Erling · På mandag jobber jeg · I helga er vi i Bergen · Neste uke kommer Kari ·
// I august begynner skolen) and u8 and u10 add more. This unit names the pattern
// those sentences have been showing, in the canDo and in the hints on `alltid`,
// `ofte`, `derfor` and `hvis`.
//
// AND IT NAMES THE EXCEPTION. A SUBORDINATE clause is not V2: after fordi, at,
// hvis and når, sentence adverbs move IN FRONT of the verb — fordi jeg ikke er
// sulten, never "fordi jeg er ikke sulten". The `fordi` hint says so. That is
// deliberately taught as a fact to recognise, not a form to derive.
//
// NO CONJUGATION CARDS. `LATIN_LANGS` is ['es','fr'], so conjFormsFor("no") returns
// the JAPANESE form set and verbGroupsFor("no") returns godan/ichidan/irregular —
// a Norwegian conjugation card would be authored against the wrong paradigm.
// Logged in BUILD-CHECKLIST.md → Feature CC backlog. Grammar is modelled here the
// way CLAUDE.md prescribes: as function-word vocab whose examples carry the pattern.
//
// ONE EXAMPLE IS SHAPED BY THE ENGINE, NOT BY STYLE. `derfor`'s example is a
// single clause — "Jeg er sulten og derfor spiser jeg." — because
// `sentenceTokens` (src/store/cardRouting.js:407) returns null for any example
// carrying interior sentence punctuation, and `sentence:build` is the only card
// kind that asks the learner to PRODUCE a word order. It was originally two
// sentences, which made `derfor` the single item in this unit that could never
// reach that card — the one whose own hint calls it "the cleanest test of V2
// there is". Measured: 18 of u12's 19 other items are sentence:build-eligible.
// Caught by truth-agent, who also made the wider point worth recording here:
// content buys ELIGIBILITY, never routing. Selection is an unsalted hash of the
// item id, so no author can choose which cards test V2 — only how many are
// allowed to.
//
// LESSON ORDER: the sentence adverbs and the conjunctions come first (l1, l2)
// because every later example leans on them, and `check-lang-scope.mjs` resolves
// scope per UNIT, never per lesson — nothing would have caught it. See unit7.js.
//
// PRONOUNS IN LESSON 4 close a real block-1 gap: jeg/meg/du/deg/han/hun/de/vi were
// taught, but ham, henne, oss, dere, deres and seg never were.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT12 = {
  id: "no-u12",
  lang: "no",
  title: "Setning og ordstilling",
  order: 12,
  stage: "a1",
  lessons: [
    // Lesson 1: the V2 rule itself, carried by the sentence adverbs that sit around the verb.
    {
      id: "no-u12l1",
      unit: 12,
      lesson: 1,
      title: "The verb comes second",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Apply the one rule that governs every Norwegian main clause — the finite verb is the second element — and place always, never, often, seldom and also correctly around it.",
      items: [
        { id: "no-u12l1-alltid", type: "vocab", front: "alltid", reading: "alltid", meaning: "always", example: { jp: "Erling er alltid hyggelig.", en: "Erling is always nice." }, accept: ["all the time", "ever"], drill: { jp: "Jeg spiser alltid frokost", en: "I always eat breakfast" }, hint: "ALL-tid. Here is the rule this whole unit is about: in a Norwegian main clause the finite verb is the SECOND element, and adverbs like alltid come after it — Erling er alltid hyggelig, never \"Erling alltid er hyggelig\". Count elements, not words: [Erling] [er] alltid hyggelig." },
        { id: "no-u12l1-aldri", type: "vocab", front: "aldri", reading: "aldri", meaning: "never", example: { jp: "Jeg drikker aldri kaffe.", en: "I never drink coffee." }, accept: ["not ever"], drill: { jp: "Han drikker aldri melk", en: "He never drinks milk" }, hint: "AL-dri. It stands exactly where ikke stands — straight after the finite verb: jeg drikker aldri, jeg drikker ikke. You never need both at once; aldri is already negative." },
        { id: "no-u12l1-ofte", type: "vocab", front: "ofte", reading: "ofte", meaning: "often", example: { jp: "I Bergen regner det ofte.", en: "It often rains in Bergen." }, accept: ["frequently"], drill: { jp: "Vi møter ofte Erling", en: "We often meet Erling" }, hint: "OF-te. Watch the rule bite: I Bergen fills the first slot, so regner has to be second, and det — the subject — is pushed in behind it. English would say \"in Bergen it rains\"; Norwegian cannot." },
        { id: "no-u12l1-sjelden", type: "vocab", front: "sjelden", reading: "sjelden", meaning: "seldom", example: { jp: "Det snør sjelden i Oslo.", en: "It seldom snows in Oslo." }, accept: ["rarely", "rare"], drill: { jp: "Kari jobber sjelden på søndager", en: "Kari seldom works on Sundays" }, hint: "The broad hush of sjø and skje: SHEL-den. It doubles as an adjective — en sjelden dag, a rare day." },
        { id: "no-u12l1-ogsa", type: "vocab", front: "også", reading: "ogsa", meaning: "also", example: { jp: "Kari snakker også norsk.", en: "Kari also speaks Norwegian." }, accept: ["too", "as well"], drill: { jp: "Jeg snakker også norsk", en: "I also speak Norwegian" }, hint: "Said OSS-o, with the g silent and the stress at the front. It is built from og but is not og — and like alltid and aldri it follows the finite verb." },
        { id: "no-u12l1-derfor", type: "vocab", front: "derfor", reading: "derfor", meaning: "therefore", example: { jp: "Jeg er sulten og derfor spiser jeg.", en: "I am hungry, and that is why I am eating." }, accept: ["so", "that is why", "for that reason"], drill: { jp: "Derfor spiser jeg nå", en: "That is why I am eating now" }, hint: "DER-for. This is the cleanest test of V2 there is: derfor takes the first slot, spiser must be second, and jeg goes behind it — Derfor spiser jeg, never \"Derfor jeg spiser\". English puts the subject first here, which is precisely why this one is worth drilling." },
      ],
    },
    // Lesson 2: joining clauses — and the subordinate-clause exception.
    {
      id: "no-u12l2",
      unit: 12,
      lesson: 2,
      title: "But, or, that, because, if",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Join two ideas with men, eller, at, fordi and hvis — and know that after fordi and hvis the word order changes.",
      items: [
        { id: "no-u12l2-men", type: "vocab", front: "men", reading: "men", meaning: "but", example: { jp: "Jeg er trøtt, men jeg er ikke syk.", en: "I am tired, but I am not ill." }, accept: ["however", "though"], drill: { jp: "Jeg er sulten men ikke tørst", en: "I am hungry but not thirsty" }, hint: "MEN. It joins two main clauses and leaves both alone — the verb is still second on either side of it. og, men and eller all behave this way." },
        { id: "no-u12l2-eller", type: "vocab", front: "eller", reading: "eller", meaning: "or", example: { jp: "Er det mandag eller tirsdag?", en: "Is it Monday or Tuesday?" }, accept: ["either"], drill: { jp: "Drikker du melk eller vann", en: "Do you drink milk or water" }, hint: "EL-ler. Like og and men, it joins equals and changes no word order. Tacked onto the end of a sentence — ...eller? — it softens the whole thing, the way English adds \"...right?\"" },
        { id: "no-u12l2-at", type: "vocab", front: "at", reading: "at", meaning: "that (conjunction)", example: { jp: "Jeg tror at Erling er norsk.", en: "I think that Erling is Norwegian." }, accept: ["that"], drill: { jp: "Jeg tror at Erling kommer", en: "I believe that Erling is coming" }, hint: "AT — the linking \"that\", never the question word \"what\". Norwegian keeps it where English is happy to drop it: jeg tror at han kommer. It is not the å that marks an infinitive." },
        { id: "no-u12l2-fordi", type: "vocab", front: "fordi", reading: "fordi", meaning: "because", example: { jp: "Jeg spiser fordi jeg er sulten.", en: "I am eating because I am hungry." }, accept: ["since", "as"], drill: { jp: "Jeg drikker fordi jeg er tørst", en: "I drink because I am thirsty" }, hint: "for-DEE, stressed on the second half. It opens a SUBORDINATE clause, and there the V2 rule is switched off: ikke and alltid move in front of the verb — fordi jeg ikke er sulten, not \"fordi jeg er ikke sulten\". This is the one big exception to the rule in lesson 1." },
        { id: "no-u12l2-hvis", type: "vocab", front: "hvis", reading: "hvis", meaning: "if", example: { jp: "Hvis det regner, kommer Erling ikke.", en: "If it rains, Erling is not coming." }, accept: ["in case", "whether"], drill: { jp: "Hvis det snør er det kaldt", en: "If it snows it is cold" }, hint: "Silent h, like hva and hvor: VISS. Look at the main clause — the whole hvis-clause counts as the FIRST element, so kommer comes second and Erling follows it. English says \"Erling is not coming\"; Norwegian will not." },
        { id: "no-u12l2-atro", type: "vocab", front: "å tro", reading: "atro", meaning: "to believe", example: { jp: "Jeg tror at det snør i morgen.", en: "I think it will snow tomorrow." }, accept: ["believe", "think", "to think"], drill: { jp: "Det er lett å tro på noe", en: "It is easy to believe in something" }, hint: "Present tror: TROOR. This is \"think\" as an opinion or a guess — jeg tror det. Thinking hard about something is å tenke, a different verb." },
      ],
    },
    // Lesson 3: asking and answering.
    {
      id: "no-u12l3",
      unit: 12,
      lesson: 3,
      title: "Asking and answering",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask why and which, and say that you are asking, answering, saying or simply do not know.",
      items: [
        { id: "no-u12l3-hvorfor", type: "vocab", front: "hvorfor", reading: "hvorfor", meaning: "why", example: { jp: "Hvorfor er du trøtt?", en: "Why are you tired?" }, accept: ["what for", "how come"], drill: { jp: "Hvorfor jobber du i dag", en: "Why are you working today" }, hint: "Silent h once more: VOR-for. Built from hvor + for, \"where for\" — the same idea as the old English \"wherefore\". Its answer is fordi." },
        { id: "no-u12l3-hvilken", type: "vocab", front: "hvilken", reading: "hvilken", meaning: "which", example: { jp: "Hvilken dag er det i dag?", en: "What day is it today?" }, accept: ["what", "which one"], drill: { jp: "Hvilken buss går til Bergen", en: "Which bus goes to Bergen" }, hint: "VIL-ken. It changes with the noun — hvilken dag, hvilket år, hvilke dager — the same three-way split you meet again in unit 14." },
        { id: "no-u12l3-asporre", type: "vocab", front: "å spørre", reading: "asporre", meaning: "to ask", example: { jp: "Jeg spør legen.", en: "I am asking the doctor." }, accept: ["ask", "to enquire", "enquire", "to inquire"], drill: { jp: "Det er viktig å spørre læreren", en: "It is important to ask the teacher" }, hint: "Irregular: the present is spør, not \"spørrer\" — SPURR. The noun built on it is et spørsmål, a question." },
        { id: "no-u12l3-asvare", type: "vocab", front: "å svare", reading: "asvare", meaning: "to answer", example: { jp: "Erling svarer ikke.", en: "Erling is not answering." }, accept: ["answer", "to reply", "reply", "to respond"], drill: { jp: "Det er viktig å svare henne", en: "It is important to answer her" }, hint: "Present svarer, perfectly regular. The noun is et svar. Notice where ikke goes — straight after the finite verb, every time." },
        { id: "no-u12l3-asi", type: "vocab", front: "å si", reading: "asi", meaning: "to say", example: { jp: "Hva sier du?", en: "What are you saying?" }, accept: ["say", "to tell", "tell"], drill: { jp: "Jeg har noe å si", en: "I have something to say" }, hint: "Present sier, said SEE-er. Hva sier du? is also how you ask someone to say that again. The past is irregular — sa — and worth keeping apart from unit 14's så, which is the past of å se, a different verb." },
        { id: "no-u12l3-avite", type: "vocab", front: "å vite", reading: "avite", meaning: "to know (a fact)", example: { jp: "Jeg vet ikke.", en: "I do not know." }, accept: ["know", "to know", "to know a fact"], drill: { jp: "Det er bra å vite hvor du bor", en: "It is good to know where you live" }, hint: "Irregular present: vet, not \"viter\". Jeg vet ikke earns its keep on day one. This is knowing a FACT — knowing a person or a place is å kjenne, from unit 1." },
      ],
    },
    // Lesson 4: the object pronouns block 1 left out.
    {
      id: "no-u12l4",
      unit: 12,
      lesson: 4,
      title: "Him, her, us, you",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the object pronouns ham, henne, oss and dere, say what belongs to them, and use seg when the object is the subject.",
      items: [
        { id: "no-u12l4-ham", type: "vocab", front: "ham", reading: "ham", meaning: "him", example: { jp: "Jeg kjenner ham.", en: "I know him." }, accept: ["he"], drill: { jp: "Jeg kjenner ham godt", en: "I know him well" }, hint: "The object form of han, exactly as meg is the object form of jeg. In everyday speech Norwegians simply say han for both — jeg kjenner han — but ham is what you will read." },
        { id: "no-u12l4-henne", type: "vocab", front: "henne", reading: "henne", meaning: "her (object form)", example: { jp: "Erling kjenner henne ikke.", en: "Erling does not know her." }, accept: ["her", "she"], drill: { jp: "Vi møter henne i dag", en: "We are meeting her today" }, hint: "HEN-ne, the object form of hun. Notice the order: a pronoun object slips in BEFORE ikke, where a noun object stays after it — Erling kjenner henne ikke, but Erling kjenner ikke Kari." },
        { id: "no-u12l4-oss", type: "vocab", front: "oss", reading: "oss", meaning: "us", example: { jp: "Kari hjelper oss.", en: "Kari is helping us." }, accept: ["we"], drill: { jp: "Erling kjenner oss", en: "Erling knows us" }, hint: "OSS, the object form of vi — vi ser deg, du ser oss. It is also the reflexive for vi: vi liker oss her." },
        { id: "no-u12l4-dere", type: "vocab", front: "dere", reading: "dere", meaning: "you (plural)", example: { jp: "Hva gjør dere i kveld?", en: "What are you doing tonight?" }, accept: ["you", "you all", "you plural", "y'all"], drill: { jp: "Jeg ser dere nå", en: "I see you now" }, hint: "DEH-re — the plural \"you\" that English lost. One form for subject and object both: dere kommer, jeg ser dere. Norwegian has no polite/familiar split at all; du and dere cover everybody, including strangers and the prime minister." },
        { id: "no-u12l4-deres", type: "vocab", front: "deres", reading: "deres", meaning: "their", example: { jp: "Bilen deres er ny.", en: "Their car is new." }, accept: ["theirs", "your", "yours"], drill: { jp: "Huset deres er stort", en: "Their house is big" }, hint: "The possessive of de and of dere at once — bilen deres is \"their car\" or \"your car\", and only the situation decides. It never changes shape: bilen deres, huset deres, barna deres." },
        { id: "no-u12l4-seg", type: "vocab", front: "seg", reading: "seg", meaning: "oneself", example: { jp: "Erling liker seg i Oslo.", en: "Erling is happy in Oslo." }, accept: ["himself", "herself", "themselves", "itself"], drill: { jp: "Han liker seg her", en: "He likes it here" }, hint: "Said SAY, rhyming with meg and deg. It is the object when the object is the same person as the subject — han ser seg, he sees himself — and it covers han, hun, det and de. The other persons simply reuse their own object form: jeg liker meg, du liker deg, vi liker oss, dere liker dere. Norwegian glues seg onto whole verbs far more than English does: å like seg is to be happy somewhere." },
      ],
    },
  ],
};
