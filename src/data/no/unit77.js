// NO Unit 77 — Hverdagsord (slot: coverage-b1-4) — B1
// COVERAGE UNIT, block 3. Retitled from the scaffold's "Vocabulary 4 (B1)".
//
// The highest-frequency words the 50-unit corpus never taught. Every front here
// was found by screening the corpus, not by picking a theme: `folk` is used in a
// LESSON TITLE (u16l4 "Hjemme hos folk") and taught nowhere; `en jobb` is absent
// although `å jobbe` is taught at u3; `vanskelig` — the ordinary opposite of
// `lett` (u10) — is absent at A1, A2 and B1; and `dem` is the ONLY missing member
// of an otherwise complete object-pronoun paradigm (meg, deg, ham, henne, oss,
// dere, seg are all taught, at u1 and u12).
//
// Lesson 3 is the pointing words, lesson 4 the sentence adverbs that decide a
// sentence's tone. Both are closed classes where a hole is felt immediately: a
// learner with no `dessverre` cannot decline anything politely.
//
// DELIBERATELY NOT TAUGHT HERE: `hele` (an inflection of `hel`, u28, so it would
// be a lexeme duplicate) and `å finnes` (the s-form of `å finne`, u7 — same
// reason; it also has no natural å-frame for a drill).
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT77 = {
  id: "no-u77",
  lang: "no",
  title: "Hverdagsord",
  order: 77,
  stage: "b1",
  lessons: [
    {
      id: "no-u77l1",
      unit: 77,
      lesson: 1,
      title: "Folk, jobb og ting",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the everyday words a course somehow skipped — people, a job, a sort of thing, a morning, 'simple' and 'difficult'.",
      items: [
        { id: "no-u77l1-folk", type: "vocab", front: "folk", reading: "folk", meaning: "people", example: { jp: "Det er mye folk i butikken på lørdager.", en: "There are a lot of people in the shop on Saturdays." }, accept: ["persons", "folk"], drill: { jp: "Det er mye folk her", en: "There are a lot of people here" }, hint: "Flertall i seg selv — aldri 'en folk', og verbet står i flertall. Et folk (intetkjønn) betyr a nation." },
        { id: "no-u77l1-enjobb", type: "vocab", front: "en jobb", reading: "enjobb", meaning: "job", example: { jp: "Han fikk en ny jobb like ved huset sitt.", en: "He got a new job right by his house." }, accept: ["a position", "work"], drill: { jp: "Hun har en jobb i byen", en: "She has a job in town" }, hint: "en jobb → jobben. Mer uformelt enn et arbeid (u18). Verbet å jobbe er u3 — samme ord, egen oppføring." },
        { id: "no-u77l1-enslags", type: "vocab", front: "en slags", reading: "enslags", meaning: "a kind of", example: { jp: "Det er en slags kaffe som han lager helt selv.", en: "It's a kind of coffee that he makes entirely himself." }, accept: ["a sort of", "a type of"], drill: { jp: "Det er en slags bok", en: "It is a kind of book" }, hint: "Alltid en slags, uansett kjønn på ordet etter: en slags hus, en slags bok." },
        { id: "no-u77l1-enmorgen", type: "vocab", front: "en morgen", reading: "enmorgen", meaning: "morning", example: { jp: "Hver morgen går jeg forbi den samme butikken.", en: "Every morning I walk past the same shop." }, accept: ["a morning"], drill: { jp: "Det var en morgen uten regn", en: "It was a morning without rain" }, hint: "en morgen → morgenen. Om morgenen = in the mornings, i morges = this morning. God morgen (u2) er en fast hilsen, ikke dette ordet alene." },
        { id: "no-u77l1-vanskelig", type: "vocab", front: "vanskelig", reading: "vanskelig", meaning: "difficult", example: { jp: "Det er vanskelig å forstå alt han sier på telefonen.", en: "It's difficult to understand everything he says on the phone." }, accept: ["hard", "tricky"], drill: { jp: "Dette er ganske vanskelig", en: "This is quite difficult" }, hint: "Invariant, som alle -ig-adjektiv. Motsatt av lett (u10). En vanske er a difficulty." },
        { id: "no-u77l1-enkel", type: "vocab", front: "enkel", reading: "enkel", meaning: "simple", example: { jp: "Oppgaven er enkel, og alle klarer den på ti minutter.", en: "The task is simple, and everybody manages it in ten minutes." }, drill: { jp: "Dette er en enkel jobb for oss", en: "This is a simple job for us" }, accept: ["straightforward", "plain", "uncomplicated", "easy (not complex)"], hint: "EN-kel. Neuter enkelt, plural enkle — the e drops before the ending. Lett is easy to do; enkel is simple in its make-up, with few parts. Et enkelt spørsmål can still be hard to answer." },
      ],
    },
    {
      id: "no-u77l2",
      unit: 77,
      lesson: 2,
      title: "Verb alle bruker",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Hold, put down, put up, check, carry and pull — the physical verbs an everyday sentence needs.",
      items: [
        { id: "no-u77l2-alegge", type: "vocab", front: "å legge", reading: "alegge", meaning: "to lay (put down)", example: { jp: "Hun la nøkkelen på bordet og gikk ut igjen.", en: "She laid the key on the table and went out again." }, accept: ["to put", "to place"], drill: { jp: "Det er lett å legge alt her", en: "It is easy to put everything here" }, hint: "å legge → legger, la, lagt. Flatt ned: legge. Oppreist: sette. Å legge seg = to go to bed." },
        { id: "no-u77l2-asette", type: "vocab", front: "å sette", reading: "asette", meaning: "to set (put upright)", example: { jp: "Sett kofferten ned foran døra, så tar jeg den etterpå.", en: "Put the suitcase down in front of the door, and I'll take it afterwards." }, accept: ["to put", "to place"], drill: { jp: "Vi begynner å sette opp teltet", en: "We are starting to put up the tent" }, hint: "å sette → setter, satte, satt. Paret til å legge: sette står, legge ligger. Å sette seg = to sit down." },
        { id: "no-u77l2-asjekke", type: "vocab", front: "å sjekke", reading: "asjekke", meaning: "to check", example: { jp: "Jeg må sjekke om butikken er åpen i dag.", en: "I have to check whether the shop is open today." }, accept: ["check", "to verify"], drill: { jp: "Det er viktig å sjekke prisen", en: "It is important to check the price" }, hint: "å sjekke → sjekker. Lånt fra engelsk og helt vanlig. Å sjekke ut = to check out." },
        { id: "no-u77l2-abaere", type: "vocab", front: "å bære", reading: "abaere", meaning: "to carry", example: { jp: "Han bar alle sekkene opp trappa selv.", en: "He carried all the bags up the stairs himself." }, accept: ["carry", "to bear"], drill: { jp: "Det er tungt å bære dette", en: "It is heavy to carry this" }, hint: "å bære → bærer, bar, båret. Sterkt verb. Å bære over med noen = to put up with someone." },
        { id: "no-u77l2-atrekke", type: "vocab", front: "å trekke", reading: "atrekke", meaning: "to pull", example: { jp: "Du må trekke i døra her, for den er tung.", en: "You have to pull the door here, because it is heavy." }, accept: ["pull", "to draw"], drill: { jp: "Det er vanskelig å trekke den", en: "It is difficult to pull it" }, hint: "å trekke → trekker, trakk, trukket. Sterkt verb. Også om te: teen trekker." },
        { id: "no-u77l2-adytte", type: "vocab", front: "å dytte", reading: "adytte", meaning: "to shove", example: { jp: "Barna dytter hverandre i køen foran døra.", en: "The children are shoving each other in the queue in front of the door." }, drill: { jp: "Det er ikke lov å dytte andre", en: "It is not allowed to shove others" }, accept: ["to push", "to give a shove", "to nudge (hard)"], hint: "DUET-te. Present dytter, past dyttet. The everyday word for pushing a person or a thing away from you — å trekke in this lesson is the other direction." },
      ],
    },
    {
      id: "no-u77l3",
      unit: 77,
      lesson: 3,
      title: "Å peke og vise til",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Point at things and people already mentioned — there, them, myself, both, and 'like this'.",
      items: [
        { id: "no-u77l3-dem", type: "vocab", front: "dem", reading: "dem", meaning: "them", example: { jp: "Jeg så dem utenfor huset i går kveld.", en: "I saw them outside the house last night." }, accept: ["to them"], drill: { jp: "Jeg kjenner dem godt", en: "I know them well" }, hint: "Objektsformen av de (u3), akkurat som ham av han. Det siste ordet som manglet i paradigmet meg, deg, ham, henne, oss, dere." },
        { id: "no-u77l3-selv", type: "vocab", front: "selv", reading: "selv", meaning: "myself (oneself)", example: { jp: "Han vasket bilen helt selv i går.", en: "He washed the car entirely by himself yesterday." }, accept: ["himself", "herself", "even"], drill: { jp: "Jeg gjorde det selv", en: "I did it myself" }, hint: "Etter subjektet: jeg selv, han selv. Foran et ledd betyr det 'even': selv Erling kom." },
        { id: "no-u77l3-begge", type: "vocab", front: "begge", reading: "begge", meaning: "both (of two)", example: { jp: "Begge barna bor fremdeles hjemme hos moren sin.", en: "Both children still live at home with their mother." }, accept: ["the two of them", "both"], drill: { jp: "Begge bilene er nye", en: "Both cars are new" }, hint: "Begge + bestemt form: begge bilene. Begge deler = both things. Bruk to when you are counting, begge when you mean the pair." },
        { id: "no-u77l3-slik", type: "vocab", front: "slik", reading: "slik", meaning: "like this (such)", example: { jp: "Du må gjøre det slik som jeg viste deg i går.", en: "You have to do it the way I showed you yesterday." }, accept: ["such", "that way", "so"], drill: { jp: "Gjør det slik hver gang", en: "Do it like this every time" }, hint: "Litt skriftlig. Slik at = so that. Sånn (neste kort) er det samme ordet i tale." },
        { id: "no-u77l3-sann", type: "vocab", front: "sånn", reading: "sann", meaning: "like that (that way)", example: { jp: "Det er sånn vi gjør det her hos oss.", en: "That's how we do it here." }, accept: ["such", "like this", "that way"], drill: { jp: "Det er sånn vi gjør det", en: "That is how we do it" }, hint: "Talemålsformen av slik og mye vanligere i tale. Sånn er det = that's how it is. NB: folder til sann, som betyr true." },
        { id: "no-u77l3-enhver", type: "vocab", front: "enhver", reading: "enhver", meaning: "each and every one", example: { jp: "Enhver som bor her må betale for strøm.", en: "Each and every person who lives here has to pay for electricity." }, drill: { jp: "Enhver kan søke om denne jobben", en: "Anyone at all can apply for this job" }, accept: ["anyone at all", "every single one", "each one"], hint: "en-VÆR. En plus hver, and the neuter is ethvert: enhver dag, ethvert barn. Alle points at the group; enhver points at them one at a time, which is why rules and laws use it." },
      ],
    },
    {
      id: "no-u77l4",
      unit: 77,
      lesson: 4,
      title: "Ord som farger setningen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Set the tone of a whole sentence — say sorry, change the subject, state a preference, and mark what is still going on.",
      items: [
        { id: "no-u77l4-omsider", type: "vocab", front: "omsider", reading: "omsider", meaning: "finally (at last)", example: { jp: "Bussen kom omsider etter en halv time i regnet.", en: "The bus finally came after half an hour in the rain." }, accept: ["at last", "eventually"], drill: { jp: "Omsider kom bussen", en: "The bus finally came" }, hint: "Bærer utålmodighet — endelig (u28) er nøytralt, omsider sier at det tok for lang tid." },
        { id: "no-u77l4-fremdeles", type: "vocab", front: "fremdeles", reading: "fremdeles", meaning: "still (up to now)", example: { jp: "Han bor fremdeles i den gamle leiligheten sin i Oslo.", en: "He still lives in his old flat in Oslo." }, accept: ["yet", "as before", "still"], drill: { jp: "Hun jobber fremdeles der", en: "She still works there" }, hint: "Samme betydning som fortsatt (u28), litt mer skriftlig. Begge er helt vanlige." },
        { id: "no-u77l4-stadig", type: "vocab", front: "stadig", reading: "stadig", meaning: "constantly", example: { jp: "Prisene blir stadig høyere her i byen.", en: "Prices are getting constantly higher here in the city." }, accept: ["continually", "ever"], drill: { jp: "Det blir stadig vanskeligere", en: "It is getting constantly more difficult" }, hint: "Stadig + komparativ = ever more: stadig flere, stadig bedre. Stadig vekk = again and again." },
        { id: "no-u77l4-riktignok", type: "vocab", front: "riktignok", reading: "riktignok", meaning: "admittedly", example: { jp: "Det er riktignok dyrt, men jeg liker det.", en: "It is admittedly expensive, but I like it." }, accept: ["granted", "it is true that", "to be sure"], drill: { jp: "Det er riktignok dyrt", en: "It is admittedly expensive" }, hint: "riktig + nok. Du innrømmer et poeng før du kommer med ditt eget: riktignok ..., men ..." },
        { id: "no-u77l4-attpatil", type: "vocab", front: "attpåtil", reading: "attpatil", meaning: "on top of that", example: { jp: "Det regnet hele dagen, og attpåtil var det kaldt.", en: "It rained all day, and on top of that it was cold." }, accept: ["moreover", "what is more", "to boot"], drill: { jp: "Og attpåtil var det kaldt", en: "And on top of that it was cold" }, hint: "att + på + til, alt i ett ord. Legger til noe ekstra, nesten alltid noe negativt." },
        { id: "no-u77l4-tilogmed", type: "vocab", front: "til og med", reading: "tilogmed", meaning: "even going so far as", example: { jp: "Han kom til og med på jobb da han var syk.", en: "He even came to work when he was ill." }, drill: { jp: "Hun kom til og med på søndag", en: "She even came on Sunday" }, accept: ["even (surprisingly)", "what is more", "as far as"], hint: "Shortened to t.o.m. in writing. Two jobs: before a word it means \"even\" and marks the surprising case, and between two dates it means \"up to and including\" — mandag til og med fredag counts the Friday in." },
      ],
    },
  ],
};
