// NO Unit 32 — Samfunn og hverdag ("Society and daily life") — A2
// Conventions are declared in no/unit1.js §1-§8 and bind every unit.
//
// THE LINE THIS UNIT HOLDS: CIVIC LIFE, NOT WORK / SHOPPING / HOME. The crew lead
// owns u24 Work and school, u27 Shopping and money and u30 Home and household, so
// a "daily life" unit that reached for a job, a price or a kitchen would collide
// with three of their slots at once. What is left — and what an A2 learner in
// Norway actually needs — is the civic layer: the kommune, a lov, a skatt, a
// skjema, a krav and a kontrakt. That is the whole design.
//
// TWO FRONTS WERE SURRENDERED AFTER AUTHORING, both to lower slots, and both were
// invisible to validate:content because en/ei/et makes one word look like two:
//   `en kø`     -> the lead's u23 (which first had `ei kø`, itself a gender error;
//                 kø is masculine. Fixing theirs made the collision exact.)
//   `en søknad` -> the lead's u24.
// Replaced by `et krav` and `en kontrakt`. The lesson was retitled with them: a
// paperwork lesson named after a queue it no longer teaches is its own defect.
//
// EXAMPLES AND DRILLS DRAW ON A1's 480 PLUS THIS BLOCK ONLY. u21-u30 are stubs in
// this worktree, so a word from them cannot be verified here and would break if the
// lead revised it. `en følelse` was in a first draft of u31's drill and pulled
// exactly that way. The cost is small and the alternative is unverifiable content.
//
// TWO HOMOGRAPHS ARE CREATED HERE ON PURPOSE, and both are cross-referenced:
//   `å skje` (to happen)  vs  `ei skje` (a spoon, A1 u1l3)  — same spelling, near
//     enough the same sound; hva skjer? is too useful to route around.
//   `en lov` (a law)      vs  `å love` (to promise, A1 u17) — same letters, and the
//     v of lov is silent, so they diverge in speech.
// Both hints name the other word. Neither collides as a front or as a reading.
//
// `et valg` WAS CUT for `et parti`: valg/velge (A1 u15) is one root with two cards,
// the lexeme-duplicate shape RUNBOOK §4 warns about, and a green front-uniqueness
// check would not have shown it. `å bety` was cut for `å gjelde` because no natural
// å-frame puts `å bety` in a drill, and a bad sentence to satisfy the router is
// what unit1.js §5 tells you not to write.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT32 = {
  id: "no-u32",
  lang: "no",
  title: "Samfunn og hverdag",
  order: 32,
  stage: "a2",
  lessons: [
    {
      id: "no-u32l1",
      unit: 32,
      lesson: 1,
      title: "The society",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the parts of a society — the state, the local council, its inhabitants — and say what the laws and rules are.",
      items: [
        { id: "no-u32l1-etsamfunn", type: "vocab", front: "et samfunn", reading: "etsamfunn", meaning: "society", example: { jp: "Norge er et samfunn med mange regler.", en: "Norway is a society with many rules." }, accept: ["a society", "community"], drill: { jp: "Et samfunn trenger gode lover", en: "A society needs good laws" }, hint: "Neuter: et samfunn → samfunnet. From sam-, together — the same sam as sammen — plus funn, a finding. People found together." },
        { id: "no-u32l1-enstat", type: "vocab", front: "en stat", reading: "enstat", meaning: "state", example: { jp: "Staten betaler for skolen og sykehuset.", en: "The state pays for the school and the hospital." }, accept: ["a state", "the state"], drill: { jp: "En stat har mange innbyggere", en: "A state has many inhabitants" }, hint: "Masculine: en stat → staten. Norway is a small country with a very large state inside it: staten owns the oil fund, the hospitals and most of the roads." },
        { id: "no-u32l1-enkommune", type: "vocab", front: "en kommune", reading: "enkommune", meaning: "municipality", example: { jp: "Kommunen min har en ny skole.", en: "My municipality has a new school." }, accept: ["a municipality", "council", "local council"], drill: { jp: "En kommune har mange skoler", en: "A municipality has many schools" }, hint: "Masculine: en kommune → kommunen. Probably the most useful administrative word in the language — your kommune runs your school, assigns your doctor and collects your rubbish." },
        { id: "no-u32l1-eninnbygger", type: "vocab", front: "en innbygger", reading: "eninnbygger", meaning: "inhabitant", example: { jp: "Oslo har mange innbyggere.", en: "Oslo has many inhabitants." }, accept: ["an inhabitant", "resident", "citizen"], drill: { jp: "En innbygger betaler skatt", en: "An inhabitant pays tax" }, hint: "Masculine: en innbygger → innbyggeren, plural innbyggere. Literally an \"in-dweller\", from inn plus bygge, to build." },
        { id: "no-u32l1-enlov", type: "vocab", front: "en lov", reading: "enlov", meaning: "law", example: { jp: "Det er en lov at alle barn skal gå på skole.", en: "There is a law that all children must go to school." }, accept: ["a law", "act"], drill: { jp: "En lov gjelder i Norge", en: "A law applies in Norway" }, hint: "Masculine: en lov → loven, plural lover. Careful — å love, to promise, from A1 unit 17, is spelled from the same letters but keeps its v and is a different word." },
        { id: "no-u32l1-enregel", type: "vocab", front: "en regel", reading: "enregel", meaning: "rule", example: { jp: "Det er en viktig regel at alle er høflige.", en: "It is an important rule that everyone is polite." }, accept: ["a rule", "regulation"], drill: { jp: "En regel er ikke en lov", en: "A rule is not a law" }, hint: "Masculine: en regel → regelen, plural regler — the second e drops in the plural, which is what -el nouns do (en nøkkel → nøkler)." },
      ],
    },
    {
      id: "no-u32l2",
      unit: 32,
      lesson: 2,
      title: "Rights and duties",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about rights, duties and tax, and say which party you vote for.",
      items: [
        { id: "no-u32l2-enrett", type: "vocab", front: "en rett", reading: "enrett", meaning: "right (an entitlement)", example: { jp: "Alle har rett til å gå på skole.", en: "Everyone has a right to go to school." }, accept: ["a right", "entitlement"], drill: { jp: "Dette er en rett alle har", en: "This is a right everyone has" }, hint: "Masculine: en rett → retten. Three senses in one word — a right, a dish of food, and a court of law. Here it is the entitlement, and it takes til: å ha rett til." },
        { id: "no-u32l2-enplikt", type: "vocab", front: "en plikt", reading: "enplikt", meaning: "duty", example: { jp: "Det er en plikt å betale skatt.", en: "It is a duty to pay tax." }, accept: ["a duty", "obligation"], drill: { jp: "En plikt er ikke en rett", en: "A duty is not a right" }, hint: "Masculine: en plikt → plikten, plural plikter. Rights and duties travel as a pair in Norwegian civics — rettigheter og plikter — and you will meet the phrase constantly." },
        { id: "no-u32l2-enskatt", type: "vocab", front: "en skatt", reading: "enskatt", meaning: "tax", example: { jp: "Vi betaler skatt fordi staten trenger penger.", en: "We pay tax because the state needs money." }, accept: ["tax", "taxation"], drill: { jp: "En skatt er ikke billig", en: "A tax is not cheap" }, hint: "Masculine: en skatt → skatten. It also means treasure, which Norwegians enjoy pointing out on the way to the tax office. Everyone's tax return is public — you can look up what your neighbour earns." },
        { id: "no-u32l2-astemme", type: "vocab", front: "å stemme", reading: "astemme", meaning: "to vote", example: { jp: "Jeg skal stemme i dag.", en: "I am going to vote today." }, accept: ["vote"], drill: { jp: "Han begynner å stemme i år", en: "He starts voting this year" }, hint: "Present stemmer. It also means \"to be correct\" — det stemmer is how a Norwegian agrees with you. And ei stemme is a voice, which is what you are giving when you vote." },
        { id: "no-u32l2-etparti", type: "vocab", front: "et parti", reading: "etparti", meaning: "party", example: { jp: "Hvilket parti stemmer du på?", en: "Which party do you vote for?" }, accept: ["a party", "political party"], drill: { jp: "Et parti trenger mange medlemmer", en: "A party needs many members" }, hint: "Neuter: et parti → partiet, plural partier. Norway has a lot of them and they govern in coalitions, so no single parti normally wins on its own." },
        { id: "no-u32l2-enpolitiker", type: "vocab", front: "en politiker", reading: "enpolitiker", meaning: "politician", example: { jp: "En politiker må være ærlig.", en: "A politician has to be honest." }, accept: ["a politician"], drill: { jp: "En politiker snakker mye", en: "A politician talks a lot" }, hint: "Masculine: en politiker → politikeren, plural politikere. Stress the second syllable: po-LI-ti-ker. Watch the near-miss — politi without the -ker is the police." },
      ],
    },
    {
      id: "no-u32l3",
      unit: 32,
      lesson: 3,
      title: "News and reasons",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read a piece of news and say what happened, what still applies, and why.",
      items: [
        { id: "no-u32l3-eiavis", type: "vocab", front: "ei avis", reading: "eiavis", meaning: "newspaper", example: { jp: "Jeg leser avisa i dag.", en: "I am reading the newspaper today." }, accept: ["a newspaper", "paper"], drill: { jp: "Ei avis koster mange kroner", en: "A newspaper costs many kroner" }, hint: "Feminine: ei avis → avisa, plural aviser. You will also see en avis / avisen — Bokmål allows both, and this course writes ei so the definite -a stays predictable." },
        { id: "no-u32l3-ennyhet", type: "vocab", front: "en nyhet", reading: "ennyhet", meaning: "news item", example: { jp: "Det er en nyhet at skolen er stengt.", en: "It is news that the school is closed." }, accept: ["news", "a news item", "a piece of news"], drill: { jp: "En nyhet kan være dårlig", en: "A piece of news can be bad" }, hint: "Masculine: en nyhet → nyheten, plural nyheter. Built from ny plus -het, the same ending as personlighet. Norwegian counts news — én nyhet, mange nyheter — where English cannot." },
        { id: "no-u32l3-askje", type: "vocab", front: "å skje", reading: "askje", meaning: "to happen", example: { jp: "Hva skjer i Oslo i dag?", en: "What is happening in Oslo today?" }, accept: ["happen", "to occur", "occur"], drill: { jp: "Det begynner å skje noe", en: "Something is starting to happen" }, hint: "Present skjer, said SHAIR — the broad hush of skjorte. Same spelling as ei skje, the spoon from unit 1, and close in sound too; only the sentence separates them. Hva skjer? is the everyday \"what's up?\"" },
        { id: "no-u32l3-agjelde", type: "vocab", front: "å gjelde", reading: "agjelde", meaning: "to apply (to be valid)", example: { jp: "Denne regelen gjelder i dag.", en: "This rule applies today." }, accept: ["to be valid", "to apply", "to hold"], drill: { jp: "Loven begynner å gjelde nå", en: "The law starts to apply now" }, hint: "Present gjelder — gj is a plain y sound, as in gjøre: YEL-ler. It is what a rule or a ticket does: regelen gjelder, billetten gjelder i to timer." },
        { id: "no-u32l3-engrunn", type: "vocab", front: "en grunn", reading: "engrunn", meaning: "reason", example: { jp: "Det er en god grunn til at han kommer sent.", en: "There is a good reason that he is coming late." }, accept: ["a reason", "ground", "cause"], drill: { jp: "Det er en grunn til alt", en: "There is a reason for everything" }, hint: "Masculine: en grunn → grunnen. It is also the ground you stand on, and that is where the idiom comes from: på grunn av, \"because of\", is literally \"on the ground of\"." },
        { id: "no-u32l3-eteksempel", type: "vocab", front: "et eksempel", reading: "eteksempel", meaning: "example", example: { jp: "Kan du gi meg et eksempel?", en: "Can you give me an example?" }, accept: ["an example", "instance"], drill: { jp: "Et eksempel gjør alt lettere", en: "An example makes everything easier" }, hint: "Neuter: et eksempel → eksempelet, plural eksempler — the second e drops, exactly like regel → regler. Spelled with ks and never x; Norwegian has almost no x of its own." },
      ],
    },
    {
      id: "no-u32l4",
      unit: 32,
      lesson: 4,
      title: "Paperwork and requirements",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle the paperwork side of daily life — a form, an offer, a requirement, a contract and a membership.",
      items: [
        { id: "no-u32l4-etkrav", type: "vocab", front: "et krav", reading: "etkrav", meaning: "requirement", example: { jp: "Det er et krav at alle betaler skatt.", en: "It is a requirement that everyone pays tax." }, accept: ["a requirement", "demand", "claim"], drill: { jp: "Det står et krav i loven", en: "There is a requirement in the law" }, hint: "Neuter: et krav → kravet, and the plural takes no ending — krav. From å kreve, to demand. Å stille krav is to make demands of someone." },
        { id: "no-u32l4-ettilbud", type: "vocab", front: "et tilbud", reading: "ettilbud", meaning: "offer", example: { jp: "Butikken har et godt tilbud i dag.", en: "The shop has a good offer today." }, accept: ["an offer", "deal", "special offer"], drill: { jp: "Et tilbud er ikke alltid billig", en: "An offer is not always cheap" }, hint: "Neuter: et tilbud → tilbudet, and the indefinite plural takes no ending — tilbud — like et bein. From til plus by, to offer. På tilbud means \"on sale\"." },
        { id: "no-u32l4-enkontrakt", type: "vocab", front: "en kontrakt", reading: "enkontrakt", meaning: "contract", example: { jp: "Vi har en kontrakt med kommunen.", en: "We have a contract with the municipality." }, accept: ["a contract", "agreement"], drill: { jp: "En kontrakt gjelder i et år", en: "A contract is valid for a year" }, hint: "Masculine: en kontrakt → kontrakten, plural kontrakter. kon-TRAKT, with the stress at the end. Å skrive under en kontrakt is to sign one — literally to write under it." },
        { id: "no-u32l4-etskjema", type: "vocab", front: "et skjema", reading: "etskjema", meaning: "form", example: { jp: "Jeg har et nytt skjema.", en: "I have a new form." }, accept: ["a form", "template", "scheme"], drill: { jp: "Et skjema er ofte kjedelig", en: "A form is often boring" }, hint: "Neuter: et skjema → skjemaet, plural skjemaer. SHEH-ma, with the broad hush of skjorte. The form you fill in — Norway runs on them, though nearly all are online now." },
        { id: "no-u32l4-etmedlem", type: "vocab", front: "et medlem", reading: "etmedlem", meaning: "member", example: { jp: "Han er medlem i et parti.", en: "He is a member of a party." }, accept: ["a member"], drill: { jp: "Et medlem betaler penger", en: "A member pays money" }, hint: "Neuter: et medlem → medlemmet, plural medlemmer — the m doubles before the ending. From med, with, plus lem, a limb: a limb of the body." },
        { id: "no-u32l4-enborger", type: "vocab", front: "en borger", reading: "enborger", meaning: "citizen", example: { jp: "En borger har rett til å stemme.", en: "A citizen has the right to vote." }, accept: ["a citizen"], drill: { jp: "En borger betaler skatt", en: "A citizen pays tax" }, hint: "Masculine: en borger → borgeren, plural borgere. From borg, a fortified town — originally the people who lived inside the walls. The same root as English burgher and every German -burg." },
      ],
    },
  ],
};
