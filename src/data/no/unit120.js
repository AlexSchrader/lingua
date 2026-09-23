// NO Unit 120 — Mengdeord i formell stil (slot: coverage-b2-10) — B2
// COVERAGE UNIT, block 3. Scaffolded "Vocabulary 10 (B2)"; retitled per
// CLAUDE.md "No front language".
//
// MEASURED. Screened all 2025 taught `no` fronts against the formal quantifier
// and determiner set: 0 of 11 taught. Not one of enhver, ethvert, samtlige,
// diverse, intet, øvrig, vedkommende, ytterligere, utallige, atskillig,
// respektive is a front anywhere. The everyday half of the class IS taught —
// alle, alt, noen, ingen, mange, mye, hver, få, nok (u14, u28, u53) — so this is
// not "quantifiers are missing", it is that the REGISTER half is missing:
// precisely the words a B2 learner meets in a letter from the council, a
// contract or a newspaper, and nowhere else.
//
// That makes this the most B2-appropriate of my thirteen slots and the one least
// likely to belong lower in the band. Numbers (u114) and months (u117) are
// retrofits that should sit at A1; these words would be wrong at A1.
//
// Lessons 3 and 4 extend the same idea to proportions (mindretall, majoritet,
// overvekt) and to approximations (om lag, i overkant av, henholdsvis) — both
// verified absent, both formal-register, and both chosen by me as the natural
// companions rather than screened as a closed class of their own.
//
// FREE: Samene
//
// Conventions per no/unit1.js. Determiners are bare fronts. Readings are
// hand-written ASCII folds, spaces dropped.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT120 = {
  id: "no-u120",
  lang: "no",
  title: "Mengdeord i formell stil",
  order: 120,
  stage: "b2",
  lessons: [
    {
      id: "no-u120l1",
      unit: 120,
      lesson: 1,
      title: "Hver og enhver",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the formal words for every, all and none that official Norwegian is written in.",
      items: [
        { id: "no-u120l1-enhver", type: "vocab", front: "enhver", reading: "enhver", meaning: "each and every one", example: { jp: "Enhver har rett til å klage på vedtaket.", en: "Everyone has the right to complain about the decision." }, accept: ["everyone", "anyone", "every single"], drill: { jp: "Enhver har rett til å klage", en: "Everyone has the right to complain" }, hint: "en + hver, one word. Formal for hver (u28) and unlike it can stand alone as a pronoun: enhver vet det." },
        { id: "no-u120l1-ethvert", type: "vocab", front: "ethvert", reading: "ethvert", meaning: "every (neuter)", example: { jp: "Ethvert barn skal ha plass i barnehagen.", en: "Every child is to have a place in the nursery." }, accept: ["each (neuter)", "any (neuter)"], drill: { jp: "Ethvert barn skal ha plass", en: "Every child is to have a place" }, hint: "The neuter of enhver, and you need it because et barn is neuter. Enhver elev, ethvert barn — the determiner agrees, as always." },
        { id: "no-u120l1-samtlige", type: "vocab", front: "samtlige", reading: "samtlige", meaning: "all of them without exception", example: { jp: "Samtlige elever besto eksamen i år.", en: "All the pupils without exception passed the exam this year." }, accept: ["every one of", "the entire", "all (formal)"], drill: { jp: "Samtlige elever besto eksamen", en: "All the pupils passed the exam" }, hint: "Always plural, and it insists nobody was left out — that emphasis is the whole reason to use it over alle." },
        { id: "no-u120l1-diverse", type: "vocab", front: "diverse", reading: "diverse", meaning: "sundry (various)", example: { jp: "Vi kjøpte diverse ting til leiligheten.", en: "We bought various things for the flat." }, accept: ["various", "assorted", "miscellaneous"], drill: { jp: "Vi kjøpte diverse ting til leiligheten", en: "We bought various things for the flat" }, hint: "di-VER-se, and it never changes form. On an invoice, diverse is the line for everything that did not get its own line." },
        { id: "no-u120l1-intet", type: "vocab", front: "intet", reading: "intet", meaning: "nothing (formal)", example: { jp: "Intet i svaret hans var sikkert.", en: "Nothing in his answer was certain." }, accept: ["no (neuter, formal)", "not a thing"], drill: { jp: "Intet i svaret var sikkert", en: "Nothing in the answer was certain" }, hint: "The old neuter of ingen (u14), now confined to written and legal style. Everyday Norwegian says ingenting — use intet to read, not to speak." },
        { id: "no-u120l1-ovrig", type: "vocab", front: "øvrig", reading: "ovrig", meaning: "remaining (the other)", example: { jp: "Den øvrige delen av boka kommer senere.", en: "The remaining part of the book is coming later." }, accept: ["other", "rest of", "further"], drill: { jp: "For øvrig kommer boka senere", en: "Incidentally the book is coming later" }, hint: "The rest of a set already introduced. For øvrig, as a fixed phrase, means 'incidentally' and opens a great many Norwegian sentences." },
      ],
    },
    {
      id: "no-u120l2",
      unit: 120,
      lesson: 2,
      title: "Mer eller mindre, formelt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say more, a great deal, countless, and respectively — in written register.",
      items: [
        { id: "no-u120l2-ytterligere", type: "vocab", front: "ytterligere", reading: "ytterligere", meaning: "further (additional)", example: { jp: "Vi trenger ytterligere opplysninger før vi svarer.", en: "We need further information before we answer." }, accept: ["additional", "more (formal)", "extra"], drill: { jp: "Vi trenger ytterligere opplysninger nå", en: "We need further information now" }, hint: "From ytre, outer. Never changes form, and it is what a letter says where speech would say mer." },
        { id: "no-u120l2-utallige", type: "vocab", front: "utallige", reading: "utallige", meaning: "countless", example: { jp: "Han har lest boka utallige ganger.", en: "He has read the book countless times." }, accept: ["innumerable", "numberless", "endless"], drill: { jp: "Han har lest boka utallige ganger", en: "He has read the book countless times" }, hint: "u- + tall + -ige, literally un-numberable. Always plural — the singular does not exist." },
        { id: "no-u120l2-atskillig", type: "vocab", front: "atskillig", reading: "atskillig", meaning: "a good deal of", example: { jp: "Det tok atskillig lengre tid enn vi trodde.", en: "It took a good deal longer than we thought." }, accept: ["considerably", "quite a lot", "substantially"], drill: { jp: "Det tok atskillig lengre tid", en: "It took a good deal longer" }, hint: "Also spelt adskillig; both are correct. In front of a comparative it is the formal 'much': atskillig bedre." },
        { id: "no-u120l2-respektive", type: "vocab", front: "respektive", reading: "respektive", meaning: "respective", example: { jp: "De dro hjem til sine respektive byer.", en: "They went home to their respective towns." }, accept: ["each their own", "corresponding"], drill: { jp: "De dro til sine respektive byer", en: "They went to their respective towns" }, hint: "Pairs each member of one list with the matching member of another. Its adverb, respektive, also means 'or alternatively' in very formal prose." },
        { id: "no-u120l2-vedkommende", type: "vocab", front: "vedkommende", reading: "vedkommende", meaning: "the person in question", example: { jp: "Vedkommende har ikke svart på brevet.", en: "The person in question has not answered the letter." }, accept: ["said person", "the individual", "he or she"], drill: { jp: "Vedkommende har ikke svart ennå", en: "The person in question has not answered yet" }, hint: "The bureaucratic way to name a person without naming them — and conveniently genderless. It is also a preposition, concerning, in the oldest letters." },
        { id: "no-u120l2-hvereneste", type: "vocab", front: "hver eneste", reading: "hvereneste", meaning: "every last one", example: { jp: "Hun leste hver eneste side i boka.", en: "She read every last page of the book." }, accept: ["every single", "each and every"], drill: { jp: "Hun leste hver eneste side", en: "She read every last page" }, hint: "hver with eneste added for force — the spoken counterpart of samtlige. The neuter is hvert eneste." },
      ],
    },
    {
      id: "no-u120l3",
      unit: 120,
      lesson: 3,
      title: "Flertall og mindretall",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a group splits — a majority, a minority, a preponderance.",
      items: [
        { id: "no-u120l3-etmindretall", type: "vocab", front: "et mindretall", reading: "etmindretall", meaning: "minority (the smaller number)", example: { jp: "Bare et mindretall stemte mot forslaget.", en: "Only a minority voted against the proposal." }, accept: ["the few", "a minority"], drill: { jp: "Bare et mindretall stemte mot forslaget", en: "Only a minority voted against the proposal" }, hint: "mindre + tall, the partner of et flertall (u53). Both are neuter and both take a singular verb." },
        { id: "no-u120l3-enmajoritet", type: "vocab", front: "en majoritet", reading: "enmajoritet", meaning: "majority (the larger group)", example: { jp: "En klar majoritet ønsket den nye ordningen.", en: "A clear majority wanted the new arrangement." }, accept: ["the majority", "most of them"], drill: { jp: "En majoritet ønsket den nye ordningen", en: "A majority wanted the new arrangement" }, hint: "The Latin twin of flertall, and slightly more formal. In politics both are used; in arithmetic Norwegian prefers flertall." },
        { id: "no-u120l3-enminoritet", type: "vocab", front: "en minoritet", reading: "enminoritet", meaning: "minority group", example: { jp: "Samene er en minoritet med egne rettigheter.", en: "The Sami are a minority with rights of their own." }, accept: ["a minority group", "minority people"], drill: { jp: "Samene er en minoritet i Norge", en: "The Sami are a minority in Norway" }, hint: "Almost always about PEOPLE — a minority group. For the smaller number in a vote, Norwegian says mindretall." },
        { id: "no-u120l3-enovervekt", type: "vocab", front: "en overvekt", reading: "enovervekt", meaning: "preponderance", example: { jp: "Det var en overvekt av unge på møtet.", en: "There was a preponderance of young people at the meeting." }, accept: ["predominance", "a majority of", "excess"], drill: { jp: "Det var en overvekt av unge", en: "There was a preponderance of young people" }, hint: "over + vekt, more weight on one side. ⚠️ In health writing the same word means excess body weight, so context decides." },
        { id: "no-u120l3-opptil", type: "vocab", front: "opptil", reading: "opptil", meaning: "up to (as many as)", example: { jp: "Kurset tar opptil tjue elever.", en: "The course takes up to twenty pupils." }, accept: ["as many as", "no more than", "up to"], drill: { jp: "Kurset tar opptil tjue elever", en: "The course takes up to twenty pupils" }, hint: "Names a ceiling. Written as two words, opp til, it is the literal 'up to' of movement: opp til hytta." },
        { id: "no-u120l3-tilsammen", type: "vocab", front: "til sammen", reading: "tilsammen", meaning: "in total", example: { jp: "Regninga kom på tre tusen kroner til sammen.", en: "The bill came to three thousand kroner in total." }, accept: ["altogether", "all told", "combined"], drill: { jp: "Regninga kom på tre tusen til sammen", en: "The bill came to three thousand in total" }, hint: "Always two words, and it ends the sentence far more often than it opens it. Sammenlagt is the tighter written alternative." },
      ],
    },
    {
      id: "no-u120l4",
      unit: 120,
      lesson: 4,
      title: "Omtrent hvor mye",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give a number you are not sure of, in the register a report is written in.",
      items: [
        { id: "no-u120l4-omlag", type: "vocab", front: "om lag", reading: "omlag", meaning: "approximately", example: { jp: "Om lag femti personer møtte opp.", en: "Approximately fifty people turned up." }, accept: ["about", "roughly", "some"], drill: { jp: "Om lag femti personer møtte opp", en: "Approximately fifty people turned up" }, hint: "Two words, and the standard hedge in Norwegian news writing. Omtrent (u37) is its everyday twin." },
        { id: "no-u120l4-ioverkantav", type: "vocab", front: "i overkant av", reading: "ioverkantav", meaning: "slightly more than", example: { jp: "Turen tok i overkant av to timer.", en: "The trip took slightly more than two hours." }, accept: ["a little over", "just above", "in excess of"], drill: { jp: "Turen tok i overkant av to timer", en: "The trip took slightly more than two hours" }, hint: "en overkant is the upper edge. ⚠️ Alone, i overkant means 'excessively': det var i overkant dyrt." },
        { id: "no-u120l4-iunderkantav", type: "vocab", front: "i underkant av", reading: "iunderkantav", meaning: "slightly less than", example: { jp: "Vi solgte i underkant av hundre billetter.", en: "We sold slightly less than a hundred tickets." }, accept: ["a little under", "just below", "not quite"], drill: { jp: "Vi solgte i underkant av hundre billetter", en: "We sold slightly less than a hundred tickets" }, hint: "The exact mirror of i overkant av, and the two together are how a Norwegian report avoids committing to a figure." },
        { id: "no-u120l4-henholdsvis", type: "vocab", front: "henholdsvis", reading: "henholdsvis", meaning: "respectively (in that order)", example: { jp: "De to barna er henholdsvis ni og tolv år.", en: "The two children are nine and twelve respectively." }, accept: ["in that order", "correspondingly"], drill: { jp: "Barna er henholdsvis ni og tolv", en: "The children are nine and twelve respectively" }, hint: "Abbreviated hhv. It matches two lists in order, so it only works when both lists are already on the page." },
        { id: "no-u120l4-samlet", type: "vocab", front: "samlet", reading: "samlet", meaning: "aggregate (taken together)", example: { jp: "Samlet kostnad for prosjektet blir høy.", en: "The aggregate cost of the project will be high." }, accept: ["total", "combined", "collective"], drill: { jp: "Samlet kostnad for prosjektet blir høy", en: "The aggregate cost of the project will be high" }, hint: "The past participle of å samle (u47) doing duty as an adjective — a very common move in formal Norwegian." },
        { id: "no-u120l4-enbokstav", type: "vocab", front: "en bokstav", reading: "enbokstav", meaning: "letter of the alphabet", example: { jp: "Det norske språket har tjueni bokstaver.", en: "The Norwegian language has twenty-nine letters." }, accept: ["a letter", "character"], drill: { jp: "Æ er en bokstav i norsk", en: "Æ is a letter in Norwegian" }, hint: "bok + stav, a book-staff — the runic name that survived. It closes the counting set: et tall, et siffer, en bokstav." },
      ],
    },
  ],
};
