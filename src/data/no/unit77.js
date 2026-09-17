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
      canDo: "Use the everyday words a course somehow skipped — people, a job, a group, a sort of thing, a morning, and 'difficult'.",
      items: [
        { id: "no-u77l1-folk", type: "vocab", front: "folk", reading: "folk", meaning: "people", example: { jp: "Det er mye folk i butikken på lørdager.", en: "There are a lot of people in the shop on Saturdays." }, accept: ["persons", "folk"], drill: { jp: "Det er mye folk her", en: "There are a lot of people here" }, hint: "Flertall i seg selv — aldri 'en folk', og verbet står i flertall. Et folk (intetkjønn) betyr a nation." },
        { id: "no-u77l1-enjobb", type: "vocab", front: "en jobb", reading: "enjobb", meaning: "job", example: { jp: "Han fikk en ny jobb like ved huset sitt.", en: "He got a new job right by his house." }, accept: ["a position", "work"], drill: { jp: "Hun har en jobb i byen", en: "She has a job in town" }, hint: "en jobb → jobben. Mer uformelt enn et arbeid (u18). Verbet å jobbe er u3 — samme ord, egen oppføring." },
        { id: "no-u77l1-eigruppe", type: "vocab", front: "ei gruppe", reading: "eigruppe", meaning: "group", example: { jp: "Vi jobber i ei lita gruppe på fire personer.", en: "We work in a small group of four people." }, accept: ["a team", "a set"], drill: { jp: "Vi er ei gruppe på fire", en: "We are a group of four" }, hint: "ei gruppe → gruppa. Hunkjønn her; du vil også se gruppen i avisa, og begge er riktige." },
        { id: "no-u77l1-enslags", type: "vocab", front: "en slags", reading: "enslags", meaning: "a kind of", example: { jp: "Det er en slags kaffe som han lager helt selv.", en: "It's a kind of coffee that he makes entirely himself." }, accept: ["a sort of", "a type of"], drill: { jp: "Det er en slags bok", en: "It is a kind of book" }, hint: "Alltid en slags, uansett kjønn på ordet etter: en slags hus, en slags bok." },
        { id: "no-u77l1-enmorgen", type: "vocab", front: "en morgen", reading: "enmorgen", meaning: "morning", example: { jp: "Hver morgen går jeg forbi den samme butikken.", en: "Every morning I walk past the same shop." }, accept: ["a morning"], drill: { jp: "Det var en morgen uten regn", en: "It was a morning without rain" }, hint: "en morgen → morgenen. Om morgenen = in the mornings, i morges = this morning. God morgen (u2) er en fast hilsen, ikke dette ordet alene." },
        { id: "no-u77l1-vanskelig", type: "vocab", front: "vanskelig", reading: "vanskelig", meaning: "difficult", example: { jp: "Det er vanskelig å forstå alt han sier på telefonen.", en: "It's difficult to understand everything he says on the phone." }, accept: ["hard", "tricky"], drill: { jp: "Dette er ganske vanskelig", en: "This is quite difficult" }, hint: "Invariant, som alle -ig-adjektiv. Motsatt av lett (u10). En vanske er a difficulty." },
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
        { id: "no-u77l2-aholde", type: "vocab", front: "å holde", reading: "aholde", meaning: "to hold", example: { jp: "Kan du holde boka mi mens jeg tar på meg jakka?", en: "Can you hold my book while I put my jacket on?" }, accept: ["to keep", "hold"], drill: { jp: "Det er tungt å holde denne", en: "It is heavy to hold this one" }, hint: "å holde → holder, holdt. Også 'to keep': å holde et løfte. Å holde på med noe = to be busy doing something." },
        { id: "no-u77l2-alegge", type: "vocab", front: "å legge", reading: "alegge", meaning: "to lay (put down)", example: { jp: "Hun la nøkkelen på bordet og gikk ut igjen.", en: "She laid the key on the table and went out again." }, accept: ["to put", "to place"], drill: { jp: "Det er lett å legge alt her", en: "It is easy to put everything here" }, hint: "å legge → legger, la, lagt. Flatt ned: legge. Oppreist: sette. Å legge seg = to go to bed." },
        { id: "no-u77l2-asette", type: "vocab", front: "å sette", reading: "asette", meaning: "to set (put upright)", example: { jp: "Sett kofferten ned foran døra, så tar jeg den etterpå.", en: "Put the suitcase down in front of the door, and I'll take it afterwards." }, accept: ["to put", "to place"], drill: { jp: "Vi begynner å sette opp teltet", en: "We are starting to put up the tent" }, hint: "å sette → setter, satte, satt. Paret til å legge: sette står, legge ligger. Å sette seg = to sit down." },
        { id: "no-u77l2-asjekke", type: "vocab", front: "å sjekke", reading: "asjekke", meaning: "to check", example: { jp: "Jeg må sjekke om butikken er åpen i dag.", en: "I have to check whether the shop is open today." }, accept: ["check", "to verify"], drill: { jp: "Det er viktig å sjekke prisen", en: "It is important to check the price" }, hint: "å sjekke → sjekker. Lånt fra engelsk og helt vanlig. Å sjekke ut = to check out." },
        { id: "no-u77l2-abaere", type: "vocab", front: "å bære", reading: "abaere", meaning: "to carry", example: { jp: "Han bar alle sekkene opp trappa selv.", en: "He carried all the bags up the stairs himself." }, accept: ["carry", "to bear"], drill: { jp: "Det er tungt å bære dette", en: "It is heavy to carry this" }, hint: "å bære → bærer, bar, båret. Sterkt verb. Å bære over med noen = to put up with someone." },
        { id: "no-u77l2-atrekke", type: "vocab", front: "å trekke", reading: "atrekke", meaning: "to pull", example: { jp: "Du må trekke i døra her, for den er tung.", en: "You have to pull the door here, because it is heavy." }, accept: ["pull", "to draw"], drill: { jp: "Det er vanskelig å trekke den", en: "It is difficult to pull it" }, hint: "å trekke → trekker, trakk, trukket. Sterkt verb. Også om te: teen trekker." },
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
        { id: "no-u77l3-der", type: "vocab", front: "der", reading: "der", meaning: "there", example: { jp: "Butikken ligger der borte, like ved skolen.", en: "The shop is over there, right by the school." }, accept: ["over there"], drill: { jp: "Han står der borte", en: "He is standing over there" }, hint: "Der = where it is; dit = where it goes. Samme par som ute/ut (u76). Der som konjunksjon betyr where." },
        { id: "no-u77l3-dem", type: "vocab", front: "dem", reading: "dem", meaning: "them", example: { jp: "Jeg så dem utenfor huset i går kveld.", en: "I saw them outside the house last night." }, accept: ["to them"], drill: { jp: "Jeg kjenner dem godt", en: "I know them well" }, hint: "Objektsformen av de (u3), akkurat som ham av han. Det siste ordet som manglet i paradigmet meg, deg, ham, henne, oss, dere." },
        { id: "no-u77l3-selv", type: "vocab", front: "selv", reading: "selv", meaning: "myself (oneself)", example: { jp: "Han vasket bilen helt selv i går.", en: "He washed the car entirely by himself yesterday." }, accept: ["himself", "herself", "even"], drill: { jp: "Jeg gjorde det selv", en: "I did it myself" }, hint: "Etter subjektet: jeg selv, han selv. Foran et ledd betyr det 'even': selv Erling kom." },
        { id: "no-u77l3-begge", type: "vocab", front: "begge", reading: "begge", meaning: "both", example: { jp: "Begge barna bor fremdeles hjemme hos moren sin.", en: "Both children still live at home with their mother." }, accept: ["the two of them"], drill: { jp: "Begge bilene er nye", en: "Both cars are new" }, hint: "Begge + bestemt form: begge bilene. Begge deler = both things. Bruk to when you are counting, begge when you mean the pair." },
        { id: "no-u77l3-slik", type: "vocab", front: "slik", reading: "slik", meaning: "like this (such)", example: { jp: "Du må gjøre det slik som jeg viste deg i går.", en: "You have to do it the way I showed you yesterday." }, accept: ["such", "that way", "so"], drill: { jp: "Gjør det slik hver gang", en: "Do it like this every time" }, hint: "Litt skriftlig. Slik at = so that. Sånn (neste kort) er det samme ordet i tale." },
        { id: "no-u77l3-sann", type: "vocab", front: "sånn", reading: "sann", meaning: "like that (that way)", example: { jp: "Det er sånn vi gjør det her hos oss.", en: "That's how we do it here." }, accept: ["such", "like this", "that way"], drill: { jp: "Det er sånn vi gjør det", en: "That is how we do it" }, hint: "Talemålsformen av slik og mye vanligere i tale. Sånn er det = that's how it is. NB: folder til sann, som betyr true." },
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
        { id: "no-u77l4-dessverre", type: "vocab", front: "dessverre", reading: "dessverre", meaning: "unfortunately", example: { jp: "Dessverre kan jeg ikke komme i kveld likevel.", en: "Unfortunately I can't come tonight after all." }, accept: ["sadly", "I'm afraid"], drill: { jp: "Dessverre kan jeg ikke komme", en: "Unfortunately I cannot come" }, hint: "Det du sier når du sier nei. Alene som svar: Dessverre. Verbet er V2 etter det: dessverre KAN jeg ikke." },
        { id: "no-u77l4-forresten", type: "vocab", front: "forresten", reading: "forresten", meaning: "by the way", example: { jp: "Forresten, har du sett boka mi noe sted?", en: "By the way, have you seen my book anywhere?" }, accept: ["incidentally", "anyway"], drill: { jp: "Forresten kommer Erling i morgen", en: "By the way, Erling is coming tomorrow" }, hint: "For + resten. Markerer at du bytter tema. Kan stå først eller sist i setningen." },
        { id: "no-u77l4-helst", type: "vocab", front: "helst", reading: "helst", meaning: "preferably", example: { jp: "Jeg vil helst gå hjem nå, for jeg er ganske trøtt.", en: "I'd prefer to go home now, because I'm quite tired." }, accept: ["rather", "ideally"], drill: { jp: "Jeg vil helst vente litt", en: "I would rather wait a bit" }, hint: "Superlativ av gjerne (u37): gjerne — heller — helst. Helst vil jeg ... = what I'd most like is ..." },
        { id: "no-u77l4-omsider", type: "vocab", front: "omsider", reading: "omsider", meaning: "finally (at last)", example: { jp: "Bussen kom omsider etter en halv time i regnet.", en: "The bus finally came after half an hour in the rain." }, accept: ["at last", "eventually"], drill: { jp: "Omsider kom bussen", en: "The bus finally came" }, hint: "Bærer utålmodighet — endelig (u28) er nøytralt, omsider sier at det tok for lang tid." },
        { id: "no-u77l4-fremdeles", type: "vocab", front: "fremdeles", reading: "fremdeles", meaning: "still", example: { jp: "Han bor fremdeles i den gamle leiligheten sin i Oslo.", en: "He still lives in his old flat in Oslo." }, accept: ["yet", "as before"], drill: { jp: "Hun jobber fremdeles der", en: "She still works there" }, hint: "Samme betydning som fortsatt (u28), litt mer skriftlig. Begge er helt vanlige." },
        { id: "no-u77l4-stadig", type: "vocab", front: "stadig", reading: "stadig", meaning: "constantly", example: { jp: "Prisene blir stadig høyere her i byen.", en: "Prices are getting constantly higher here in the city." }, accept: ["continually", "ever"], drill: { jp: "Det blir stadig vanskeligere", en: "It is getting constantly more difficult" }, hint: "Stadig + komparativ = ever more: stadig flere, stadig bedre. Stadig vekk = again and again." },
      ],
    },
  ],
};
