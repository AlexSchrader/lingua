// NO Unit 18 — Skole og arbeid ("School and work") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded as "Vocabulary 4"; retitled and rethemed per CLAUDE.md → "No
// front language" and the block-3 plan in unit15.js.
//
// WHAT BLOCK 1 ALREADY OWNS HERE, and what is therefore used and never taught:
// en lærer, en elev, å jobbe, å forstå (u3), å lære (u1), å begynne, å slutte,
// en time (u5), en skole (u7). This unit takes what a learner still cannot say: reading
// and writing, the objects on a school desk, the workplace, and six jobs.
//
// Conventions are declared in no/unit1.js and bind every unit. Bokmål, not
// Nynorsk.
//
// FIRST FEMININE OF THE UNIT is `ei bok` (l1) — the best card in the language
// for the en-/ei-recognition note unit1.js requires, because boka / boken is the
// pair every learner meets on their first Norwegian book cover.
//
// MASS NOUN, taught bare under unit1.js §1(b): `arbeid` (l3). unit1.js's own
// header names arbeid in the list of nouns whose indefinite singular is not
// idiomatic, so this is the documented exception applied, not a new judgement.
// Gender in the hint (arbeidet).
//
// TWO NEAR-MISSES DELIBERATELY NOT TAUGHT, recorded so a later seat does not
// "fix" the gap by adding them:
//   • `en jobb` — å jobbe is taught at u3. Noun and verb off one stem is exactly
//     the same-lexeme trap RUNBOOK §4 describes; `arbeid` carries the sense
//     instead, and it is a genuinely different word.
//   • `et spørsmål` / `et svar` — å spørre and å svare are taught one unit
//     earlier (u17l3). Teaching the derived nouns too would be four cards for
//     two concepts. Both nouns appear in u17's hints, where they cost nothing.
// `en selger` IS taught even though it is derived from å selge, because å selge
// is not taught anywhere — there is no pair to duplicate, and the -er ending is
// pointed at en lærer in its hint so the pattern generalises.
//
// ø IS HAND-FOLDED, ø→o (unit1.js §3): `ei lønn` → "eilonn", `en frisør` →
// "enfrisor". `en sjåfør` folds twice, å→a and ø→o, giving "ensjafor" — only the
// ø half needed hand-work.
//
// V2: "Nå skriver Anna et ord på tavla." (l2) is this unit's fronted-XP
// declarative.
//
// LESSON ORDER: l1's å lese, å skrive and et ord are what l2 does on a tavle, so
// nothing looks forward. Checked by eye — check-lang-scope.mjs resolves scope
// per UNIT, never per LESSON (unit7.js).
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT18 = {
  id: "no-u18",
  lang: "no",
  title: "Skole og arbeid",
  order: 18,
  stage: "a1",
  lessons: [
    // Lesson 1: reading, writing, and the things you do it with.
    {
      id: "no-u18l1",
      unit: 18,
      lesson: 1,
      title: "Å lese og å skrive",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that you read and write, name a book, a pen and a sheet of paper, and ask what a word is in Norwegian.",
      items: [
        { id: "no-u18l1-alese", type: "vocab", front: "å lese", reading: "alese", meaning: "to read", example: { jp: "Erling leser veldig mye.", en: "Erling reads a lot." }, accept: ["read", "to study", "study"], drill: { jp: "Det er godt å lese ei bok", en: "It is good to read a book" }, hint: "LEH-se, present leser. Also to study a subject: å lese norsk is to read Norwegian at a university, exactly as English uses \"read\" at Oxford." },
        { id: "no-u18l1-askrive", type: "vocab", front: "å skrive", reading: "askrive", meaning: "to write", example: { jp: "Kari skriver til meg.", en: "Kari is writing to me." }, accept: ["write", "to write down", "write down"], drill: { jp: "Det er lett å skrive et ord", en: "It is easy to write a word" }, hint: "SKREE-ve, present skriver — sk before r is a hard sk, not the sh of skje. En skriver is a printer." },
        { id: "no-u18l1-eibok", type: "vocab", front: "ei bok", reading: "eibok", meaning: "book", example: { jp: "Boka ligger på et bord.", en: "The book is lying on a table." }, accept: ["a book", "volume"], drill: { jp: "Jeg leser ei bok", en: "I am reading a book" }, hint: "BOOK. Feminine: definite boka, plural bøker — the vowel changes in the plural. You will very often see this one written en bok / boken; Bokmål allows both and boken is everywhere in print. This course writes ei, because ei is what predicts the -a definite and en tells you nothing." },
        { id: "no-u18l1-enpenn", type: "vocab", front: "en penn", reading: "enpenn", meaning: "pen", example: { jp: "Det ligger en penn på hylla.", en: "There is a pen lying on the shelf." }, accept: ["a pen", "biro", "ballpoint"], drill: { jp: "Jeg skriver med en penn", en: "I write with a pen" }, hint: "PENN. Masculine: definite pennen, plural penner. A pencil is en blyant — a different word, and the one a Norwegian child starts school with." },
        { id: "no-u18l1-etpapir", type: "vocab", front: "et papir", reading: "etpapir", meaning: "paper", example: { jp: "Jeg skriver på papir.", en: "I write on paper." }, accept: ["a paper", "paper", "a document", "document"], drill: { jp: "Jeg skriver på et papir", en: "I am writing on a piece of paper" }, hint: "pa-PEER, with the stress at the end. Neuter: definite papiret, plural papirer. Bare papir is the MATERIAL, which is why the example has no article; et papir counted out singly is a document or an official form. A single sheet is et ark, and a newspaper is ei avis — never a papir." },
        { id: "no-u18l1-etord", type: "vocab", front: "et ord", reading: "etord", meaning: "word", example: { jp: "Hva er ordet på norsk?", en: "What is the word in Norwegian?" }, accept: ["a word", "term"], drill: { jp: "Vi lærer et ord", en: "We learn a word" }, hint: "OOR — the d is silent, like god and sted. Neuter: definite ordet, and the plural is ord, unchanged. Ei ordbok is a dictionary: ord welded onto bok." },
      ],
    },
    // Lesson 2: the classroom.
    {
      id: "no-u18l2",
      unit: 18,
      lesson: 2,
      title: "På skolen",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about school — homework, a task, a subject, the board, your bag and your grades — and say what the teacher is writing.",
      items: [
        { id: "no-u18l2-eilekse", type: "vocab", front: "ei lekse", reading: "eilekse", meaning: "homework", example: { jp: "Elevene gjør lekser på skolen.", en: "The pupils do homework at school." }, accept: ["a homework assignment", "homework", "assignment", "an assignment"], drill: { jp: "Vi gjør ei lekse sammen", en: "We do homework together" }, hint: "LEK-se. Feminine: definite leksa, plural lekser — and it is the PLURAL that Norwegians actually say for homework. Å gjøre lekser is to do one's homework." },
        { id: "no-u18l2-enoppgave", type: "vocab", front: "en oppgave", reading: "enoppgave", meaning: "task", example: { jp: "Læreren gir elevene en oppgave.", en: "The teacher gives the pupils a task." }, accept: ["a task", "exercise", "an exercise", "assignment", "problem"], drill: { jp: "Vi gjør en oppgave", en: "We do a task" }, hint: "OPP-gah-ve. Masculine: definite oppgaven, plural oppgaver. An exercise in a book or a task at work — built from opp plus gave, a thing handed over to you." },
        { id: "no-u18l2-etfag", type: "vocab", front: "et fag", reading: "etfag", meaning: "subject", example: { jp: "Norsk er et fag på skolen.", en: "Norwegian is a subject at school." }, accept: ["a subject", "field", "discipline", "trade", "a course"], drill: { jp: "Et fag er viktig", en: "A subject is important" }, hint: "FAHG, hard g. Neuter: definite faget, plural fag, unchanged. A school subject — and also a skilled trade: en fagarbeider is a qualified tradesperson." },
        { id: "no-u18l2-eitavle", type: "vocab", front: "ei tavle", reading: "eitavle", meaning: "board", example: { jp: "Nå skriver Anna et ord på tavla.", en: "Now Anna is writing a word on the board." }, accept: ["a blackboard", "blackboard", "whiteboard", "chalkboard", "a board"], drill: { jp: "Læreren skriver på ei tavle", en: "The teacher writes on a board" }, hint: "TAV-le. Feminine: definite tavla, plural tavler. The board at the front of a classroom, whatever colour it is. Note the order: nå at the front sends skriver to second place and Anna behind it." },
        { id: "no-u18l2-ensekk", type: "vocab", front: "en sekk", reading: "ensekk", meaning: "backpack", example: { jp: "Boka er i sekken.", en: "The book is in the backpack." }, accept: ["a backpack", "rucksack", "bag", "sack", "a bag"], drill: { jp: "Ei bok ligger i en sekk", en: "A book lies in a backpack" }, hint: "SEKK. Masculine: definite sekken, plural sekker. En skolesekk is what a child carries; en ryggsekk is the hiking one — the same compound German built as Rucksack, which is the form English actually borrowed." },
        { id: "no-u18l2-enkarakter", type: "vocab", front: "en karakter", reading: "enkarakter", meaning: "grade", example: { jp: "Anna har en god karakter i norsk.", en: "Anna has a good grade in Norwegian." }, accept: ["a grade", "mark", "a mark", "score", "character"], drill: { jp: "En karakter er viktig", en: "A grade is important" }, hint: "ka-rak-TEHR. Masculine: definite karakteren, plural karakterer. Norwegian school marks run from 1 to 6, and 6 is the top — the opposite way round from most of Europe. The same word also means a person's character." },
      ],
    },
    // Lesson 3: the workplace. `arbeid` is the mass-noun exception.
    {
      id: "no-u18l3",
      unit: 18,
      lesson: 3,
      title: "På jobb",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about work — the office, your boss, a colleague, your occupation and your pay — and say where you work.",
      items: [
        { id: "no-u18l3-arbeid", type: "vocab", front: "arbeid", reading: "arbeid", meaning: "work", example: { jp: "Erling har mye arbeid.", en: "Erling has a lot of work." }, accept: ["labour", "labor", "the work", "job"], drill: { jp: "Arbeid er viktig", en: "Work is important" }, hint: "AR-bide. A mass noun, so the front carries no article — the class unit 1 named with vann and melk, and unit 1 named arbeid in it by name. Neuter: definite arbeidet. Å jobbe from unit 3 is the verb; arbeid is the thing itself." },
        { id: "no-u18l3-etkontor", type: "vocab", front: "et kontor", reading: "etkontor", meaning: "office", example: { jp: "Jeg jobber på et kontor i Oslo.", en: "I work in an office in Oslo." }, accept: ["an office"], drill: { jp: "Han jobber på et kontor", en: "He works in an office" }, hint: "kon-TOOR, stress at the end. Neuter: definite kontoret, plural kontorer. Note på et kontor — a workplace takes på, exactly like på en skole in unit 7, where English says \"in\"." },
        { id: "no-u18l3-ensjef", type: "vocab", front: "en sjef", reading: "ensjef", meaning: "boss", example: { jp: "Sjefen min er hyggelig.", en: "My boss is nice." }, accept: ["a boss", "chief", "manager", "head", "supervisor"], drill: { jp: "En sjef kommer i dag", en: "A boss is coming today" }, hint: "SHEHF — sj is the broad sh of sjø. Masculine: definite sjefen, plural sjefer. Borrowed from French chef and respelled the way Norwegian actually says it." },
        { id: "no-u18l3-enkollega", type: "vocab", front: "en kollega", reading: "enkollega", meaning: "colleague", example: { jp: "En kollega hjelper meg på kontoret.", en: "A colleague is helping me at the office." }, accept: ["a colleague", "coworker", "co-worker", "workmate"], drill: { jp: "Jeg møter en kollega", en: "I am meeting a colleague" }, hint: "ko-LEH-ga, hard g. Masculine: definite kollegaen, plural kolleger. Norwegian workplaces are famously flat: you say du to en sjef as readily as to en kollega, and first names go all the way up." },
        { id: "no-u18l3-etyrke", type: "vocab", front: "et yrke", reading: "etyrke", meaning: "occupation", example: { jp: "Hva er yrket til Kari?", en: "What is Kari's occupation?" }, accept: ["an occupation", "profession", "a profession", "trade", "vocation"], drill: { jp: "Et yrke er viktig", en: "An occupation is important" }, hint: "UER-ke. Neuter: definite yrket, plural yrker. The trade you trained for. And note yrket til Kari — til is the everyday way to say \"Kari's\", far commoner in speech than the written -s." },
        { id: "no-u18l3-eilonn", type: "vocab", front: "ei lønn", reading: "eilonn", meaning: "pay", example: { jp: "Lønna er ikke veldig god.", en: "The pay is not very good." }, accept: ["salary", "wage", "wages", "the pay", "income"], drill: { jp: "Ei lønn er ikke alltid høy", en: "A salary is not always high" }, hint: "LONN, hand-folded to eilonn. Feminine: definite lønna. What you are paid — and a subject Norwegians discuss far more openly than the British do, since most tax records are public." },
      ],
    },
    // Lesson 4: six jobs. Medical trades are deliberately absent — the health
    // unit (u11) is block 2's and en lege belongs to it.
    {
      id: "no-u18l4",
      unit: 18,
      lesson: 4,
      title: "Yrker",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what people do for a living — farmer, cook, driver, salesperson, carpenter, hairdresser — and say where each of them works.",
      items: [
        { id: "no-u18l4-enbonde", type: "vocab", front: "en bonde", reading: "enbonde", meaning: "farmer", example: { jp: "En bonde jobber mye.", en: "A farmer works a lot." }, accept: ["a farmer", "peasant"], drill: { jp: "En bonde står opp tidlig", en: "A farmer gets up early" }, hint: "BON-ne — the d is silent. Masculine: definite bonden, and the plural is bønder, with a vowel change. En gård is the farm itself." },
        { id: "no-u18l4-enkokk", type: "vocab", front: "en kokk", reading: "enkokk", meaning: "cook", example: { jp: "En kokk lager middag på en restaurant.", en: "A cook makes dinner at a restaurant." }, accept: ["a cook", "chef"], drill: { jp: "En kokk lager middag på et kjøkken", en: "A cook makes dinner in a kitchen" }, hint: "KOKK. Masculine: definite kokken, plural kokker. Å koke is to boil — the verb the job is named from. Note å lage mat from unit 6 is what a kokk does all day." },
        { id: "no-u18l4-ensjafor", type: "vocab", front: "en sjåfør", reading: "ensjafor", meaning: "driver", example: { jp: "En sjåfør kjører en buss.", en: "A driver drives a bus." }, accept: ["a driver", "chauffeur"], drill: { jp: "En sjåfør kjører en taxi", en: "A driver drives a taxi" }, hint: "sho-FUR — sj is the broad sh again. The reading folds twice, å to a and ø to o, giving ensjafor. Masculine: definite sjåføren, plural sjåfører. French chauffeur, spelled the Norwegian way." },
        { id: "no-u18l4-enselger", type: "vocab", front: "en selger", reading: "enselger", meaning: "salesperson", example: { jp: "En selger jobber i en butikk.", en: "A salesperson works in a shop." }, accept: ["a seller", "salesman", "shop assistant", "sales assistant", "a salesperson"], drill: { jp: "En selger snakker mye", en: "A salesperson talks a lot" }, hint: "SEL-ger, hard g. Masculine: definite selgeren, plural selgere. From å selge, to sell: the -er ending builds a doer out of a verb, exactly as it built en lærer out of å lære in unit 3." },
        { id: "no-u18l4-ensnekker", type: "vocab", front: "en snekker", reading: "ensnekker", meaning: "carpenter", example: { jp: "En snekker lager et bord.", en: "A carpenter makes a table." }, accept: ["a carpenter", "joiner", "woodworker"], drill: { jp: "En snekker jobber med tre", en: "A carpenter works with wood" }, hint: "SNEK-ker. Masculine: definite snekkeren, plural snekkere. Wood is what Norway builds with, so this is one of the commonest trades in the country." },
        { id: "no-u18l4-enfrisor", type: "vocab", front: "en frisør", reading: "enfrisor", meaning: "hairdresser", example: { jp: "En frisør er dyr i Norge.", en: "A hairdresser is expensive in Norway." }, accept: ["a hairdresser", "barber", "stylist"], drill: { jp: "En frisør jobber med hår", en: "A hairdresser works with hair" }, hint: "fri-SUR, hand-folded to enfrisor. Masculine: definite frisøren, plural frisører. Unlike sjåfør this one is NOT straight from French — French for a hairdresser is coiffeur. Norwegian took it via German Friseur, which was itself built on French friser, to curl." },
      ],
    },
  ],
};
