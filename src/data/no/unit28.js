// NO Unit 28 — Tid og hyppighet ("Time and how often") — A2
// REVISITS A1 u5 (klokka, en time, en dag, et år, tidlig, sent), u9 (ei uke, en
// måned, en vinter) and u12 (alltid, ofte, sjelden, aldri). A1 can say WHEN on a
// clock and HOW OFTEN in four words. This unit is everything between those two:
// the short spans, the frequency words A1 has no room for, and the four adverbs
// that carry the whole of "already / still / not yet / just now".
//
// THIS UNIT PAYS OFF A DEBT. `om`, `hver` and `mens` were the three commonest
// scope violations in the band — I hit `om` four times in u25 alone and `hver`
// five times across u25 and u26, and every one cost an example rewrite because
// nothing taught them. They are function words A1 genuinely omits and no A2 unit
// had claimed. From u28 on they are available, and that is most of the point of
// the unit; the vocabulary around them is chosen to be worth teaching anyway.
//
// ⚠️ `om` is three words in one: the time sense taught here (om vinteren, om
// kvelden), the sense "about" (en teori om noe) and the conditional "whether"
// (jeg vet ikke om han kommer). The card teaches the TIME sense and the hint
// names the other two, because a learner will meet all three within a unit.
//
// ⚠️ `hel` is the adjective; the definite `hele` is the form a learner actually
// meets ("hele dagen"), and it is derivable from the front by §1's own logic, so
// it is hinted rather than given its own card.
//
// NOT TAKEN, though all screened free: `siden`. Block 2 fronts `ei side` at u33,
// whose definite is also `siden`. Under lower-slot-wins my u28 would take the
// string and leave their card ambiguous — the å skje / ei skje case, except that
// one resolved the other way because cloze blanks the WHOLE front including the
// article and those two never produce the same blank. `siden` and `siden` do.
// Cheaper to not want it.
//
// Subordinators: A1's set is at, fordi, hvis, men, eller, når, and this unit adds
// `mens`. Still NOT `som`, `for` or `der` — untaught, and lint structurally
// cannot see that (lint.js:226 excuses `for` as an inflection of `fordi`). u29
// claims all three.
//   FREE: Erling, Kari, Anna, Jonas, Oslo, Bergen, Norge | telefon | 2000
//   A FREE entry is exempt in EVERY unit, not just this one, so a word this
//   course teaches as a front must NEVER appear here — it would disable the
//   forward-reference check for that word corpus-wide.
export const NO_UNIT28 = {
  id: "no-u28",
  lang: "no",
  title: "Tid og hyppighet",
  order: 28,
  stage: "a2",
  lessons: [
    {
      id: "no-u28l1",
      unit: 28,
      lesson: 1,
      title: "Short and long spans",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Measure time in something other than hours — et sekund, et minutt, et døgn, ei stund, et øyeblikk, en alder, tid.",
      items: [
        { id: "no-u28l1-etsekund", type: "vocab", front: "et sekund", reading: "etsekund", meaning: "second", example: { jp: "Et sekund er kort, men det kan bli langt når du venter på noen.", en: "A second is short, but it can become long when you are waiting for someone." }, accept: ["a second"], drill: { jp: "Et sekund er veldig kort", en: "A second is very short" }, hint: "se-KUND, stress on the end. Neuter: definite sekundet, plural sekunder. Sixty of them make et minutt." },
        { id: "no-u28l1-etminutt", type: "vocab", front: "et minutt", reading: "etminutt", meaning: "minute", example: { jp: "Toget går om ti minutter, og vi rekker det ikke.", en: "The train leaves in ten minutes, and we will not make it." }, accept: ["a minute"], drill: { jp: "Et minutt er ikke lenge", en: "A minute is not long" }, hint: "mi-NUTT, stress on the end. Neuter: definite minuttet, plural minutter. A1 gave you en time; this is the smaller one." },
        { id: "no-u28l1-etdogn", type: "vocab", front: "et døgn", reading: "etdogn", meaning: "24 hours", example: { jp: "Et døgn er en dag og ei natt, og butikken er åpen hele døgnet.", en: "A day-and-night is a day and a night, and the shop is open around the clock." }, accept: ["a day and night", "24 hours", "a full day"], drill: { jp: "Et døgn har mange timer", en: "A day-and-night has many hours" }, hint: "DOYN — ø written o in the reading. Neuter: definite døgnet, plural døgn unchanged. English has no single word for it: a day AND its night, counted together." },
        { id: "no-u28l1-eistund", type: "vocab", front: "ei stund", reading: "eistund", meaning: "while", example: { jp: "Vi satt ei stund i hagen, fordi det var varmt og ingen hadde det travelt.", en: "We sat a while in the garden, because it was warm and nobody was in a hurry." }, accept: ["a while", "a bit", "a spell"], drill: { jp: "Vi venter ei stund til", en: "We wait a while longer" }, hint: "STUNN, the d is silent. Feminine: definite stunda. Vaguer than any clock word — somewhere between minutes and hours." },
        { id: "no-u28l1-etoyeblikk", type: "vocab", front: "et øyeblikk", reading: "etoyeblikk", meaning: "moment", example: { jp: "Et øyeblikk, sa legen, og så kom han tilbake med ei pille.", en: "One moment, said the doctor, and then he came back with a pill." }, accept: ["a moment", "an instant"], drill: { jp: "Et øyeblikk er veldig kort", en: "A moment is very short" }, hint: "OY-e-blikk — øye (eye, A1 u11) plus blikk (a glance). Literally an eye-blink. Neuter: definite øyeblikket." },
        { id: "no-u28l1-enalder", type: "vocab", front: "en alder", reading: "enalder", meaning: "age", example: { jp: "Alderen sier lite, men kroppen orker mindre når du blir gammel.", en: "Age says little, but the body can stand less when you get old." }, accept: ["an age"], drill: { jp: "En alder er bare et tall", en: "An age is only a number" }, hint: "AL-der. Masculine: definite alderen. It is how old a person IS — for asking, A1 gives you hvor gammel er du." },
        { id: "no-u28l1-tid", type: "vocab", front: "tid", reading: "tid", meaning: "time", example: { jp: "Jeg har god tid i dag, så vi kan gå en lang tur.", en: "I have plenty of time today, so we can go for a long walk." }, accept: ["the time"], drill: { jp: "Vi har god tid", en: "We have plenty of time" }, hint: "TEED. No article — a mass noun like vann: god tid, lang tid, definite tida. A1 gave you en time, an hour; this is time itself." },
      ],
    },
    {
      id: "no-u28l2",
      unit: 28,
      lesson: 2,
      title: "How often, how fast",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how often, how fast and how long something happens — om, hver, en gang, av og til, mens, fort, lenge.",
      items: [
        { id: "no-u28l2-om", type: "vocab", front: "om", reading: "om", meaning: "in", example: { jp: "Bjørnen sover om vinteren, og den kommer ut når det blir varmt.", en: "The bear sleeps in the winter, and it comes out when it gets warm." }, accept: ["during", "in the", "at"], drill: { jp: "Vi trener om vinteren", en: "We train in the winter" }, hint: "OM. With a season or a part of the day it means DURING — om vinteren, om kvelden, om natta. ⚠️ It is also `about` (en teori om noe) and `whether` (jeg vet ikke om han kommer). Three words in one string." },
        { id: "no-u28l2-hver", type: "vocab", front: "hver", reading: "hver", meaning: "every", example: { jp: "Hun tar medisinen hver dag, fordi legen sa at hun må.", en: "She takes the medicine every day, because the doctor said she has to." }, accept: ["each"], drill: { jp: "Vi spiser middag hver dag", en: "We eat dinner every day" }, hint: "VAER. Neuter hvert — hvert år, every year. It takes a singular after it: hver dag, never hver dager." },
        { id: "no-u28l2-engang", type: "vocab", front: "en gang", reading: "engang", meaning: "once", example: { jp: "Vi drar til Bergen en gang i året, og barna liker turen.", en: "We go to Bergen once a year, and the children like the trip." }, accept: ["one time", "a time"], drill: { jp: "Vi trener en gang i uka", en: "We exercise once a week" }, hint: "en GANG. Masculine: definite gangen, plural ganger — to ganger, twice. `en gang` alone can also mean `once upon a time`." },
        { id: "no-u28l2-avogtil", type: "vocab", front: "av og til", reading: "avogtil", meaning: "sometimes", example: { jp: "Av og til går vi i skogen, men vanligvis blir vi hjemme.", en: "Sometimes we go into the forest, but usually we stay at home." }, accept: ["now and then", "occasionally", "from time to time"], drill: { jp: "Av og til sover jeg dårlig", en: "Sometimes I sleep badly" }, hint: "av o TIL — three words, one meaning, and all three are already taught separately. It sits between sjelden and ofte. Being an adverbial, it can front the sentence and the verb still comes second: Av og til GÅR vi." },
        { id: "no-u28l2-mens", type: "vocab", front: "mens", reading: "mens", meaning: "while", example: { jp: "Han jobber mens barna sover, fordi huset er rolig.", en: "He works while the children sleep, because the house is quiet." }, accept: ["whilst", "as"], drill: { jp: "Jeg leser mens du sover", en: "I read while you sleep" }, hint: "MENS. A subordinator, so the clause after it keeps subject before verb: mens barna SOVER. It joins A1's at, fordi, hvis, men, eller and når." },
        { id: "no-u28l2-fort", type: "vocab", front: "fort", reading: "fort", meaning: "quickly", example: { jp: "Året går fort når du har mye å gjøre.", en: "The year goes quickly when you have a lot to do." }, accept: ["fast", "rapidly", "soon"], drill: { jp: "Et døgn går fort her", en: "A day-and-night goes quickly here" }, hint: "FORT. An adverb with no -t to add — it already ends in one. A1's raskt is the near-synonym; fort is the everyday one." },
        { id: "no-u28l2-lenge", type: "vocab", front: "lenge", reading: "lenge", meaning: "for a long time", example: { jp: "Vi satt lenge i kafeen og snakket sammen.", en: "We sat in the cafe for a long time and talked together." }, accept: ["a long time", "long"], drill: { jp: "Han sover lenge hver dag", en: "He sleeps a long time every day" }, hint: "LENG-e. Only about duration, never about size — that is lang. Ask with hvor lenge?, and note the comparative lenger, any longer." },
      ],
    },
    {
      id: "no-u28l3",
      unit: 28,
      lesson: 3,
      title: "Already or not yet",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Place an event against now — allerede, fortsatt, ennå, nettopp, endelig, plutselig, ferdig.",
      items: [
        { id: "no-u28l3-allerede", type: "vocab", front: "allerede", reading: "allerede", meaning: "already", example: { jp: "Han er allerede mye bedre, men legen vil se ham en gang til.", en: "He is already much better, but the doctor wants to see him one more time." }, accept: ["by now", "as early as"], drill: { jp: "Barna sover allerede nå", en: "The children are already asleep now" }, hint: "al-le-RE-de, four syllables. It says the thing happened EARLIER than you expected." },
        { id: "no-u28l3-fortsatt", type: "vocab", front: "fortsatt", reading: "fortsatt", meaning: "still", example: { jp: "Hun er fortsatt syk, fordi forkjølelsen tar ei hel uke.", en: "She is still ill, because the cold takes a whole week." }, accept: ["yet", "even now"], drill: { jp: "Vi venter fortsatt på toget", en: "We are still waiting for the train" }, hint: "fort-SATT, from å fortsette (u21). Something that was true then and has not stopped." },
        { id: "no-u28l3-enna", type: "vocab", front: "ennå", reading: "enna", meaning: "yet", example: { jp: "Vi har ikke spist ennå, men middagen er snart ferdig.", en: "We have not eaten yet, but the dinner is ready soon." }, accept: ["still", "as yet"], drill: { jp: "Han er ikke hjemme ennå", en: "He is not home yet" }, hint: "en-NAW — å written a in the reading. It lives with a negative: ikke ... ennå. Pair it with fortsatt and you have both halves of `still`." },
        { id: "no-u28l3-nettopp", type: "vocab", front: "nettopp", reading: "nettopp", meaning: "just now", example: { jp: "Toget gikk nettopp, og det neste kommer om ti minutter.", en: "The train just left, and the next one comes in ten minutes." }, accept: ["just", "a moment ago", "precisely"], drill: { jp: "Legen kom nettopp inn", en: "The doctor just came in" }, hint: "NETT-opp. A very short time ago. On its own as an answer it means `exactly` — Nettopp!" },
        { id: "no-u28l3-endelig", type: "vocab", front: "endelig", reading: "endelig", meaning: "finally", example: { jp: "Endelig kom sola, og alle gikk ut i hagen.", en: "Finally the sun came, and everyone went out into the garden." }, accept: ["at last"], drill: { jp: "Endelig kommer bussen nå", en: "Finally the bus is coming now" }, hint: "EN-de-lig, from en ende (an end). It carries relief — you waited, and it happened. Fronting it keeps the verb second: Endelig KOM sola." },
        { id: "no-u28l3-plutselig", type: "vocab", front: "plutselig", reading: "plutselig", meaning: "suddenly", example: { jp: "Plutselig ble det mørkt, og vi fant ikke veien tilbake.", en: "Suddenly it got dark, and we did not find the way back." }, accept: ["all at once", "abruptly"], drill: { jp: "Plutselig ble det kaldt ute", en: "Suddenly it got cold outside" }, hint: "PLUT-se-lig. Also an adjective — en plutselig skade. Fronting it keeps the verb second: Plutselig BLE det mørkt." },
        { id: "no-u28l3-ferdig", type: "vocab", front: "ferdig", reading: "ferdig", meaning: "finished", example: { jp: "Jeg blir ferdig med boka i kveld, fordi den er kort.", en: "I will be finished with the book tonight, because it is short." }, accept: ["done", "ready", "complete"], drill: { jp: "Nå er jeg ferdig", en: "Now I am finished" }, hint: "FER-di. bli ferdig = to finish, være ferdig = to be done. It takes no -t in the neuter: arbeidet er ferdig." },
      ],
    },
    {
      id: "no-u28l4",
      unit: 28,
      lesson: 4,
      title: "Past and future",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about time as a stretch rather than a point — ei fortid, ei framtid, et tidspunkt, en periode, å vare, hel.",
      items: [
        { id: "no-u28l4-eifortid", type: "vocab", front: "ei fortid", reading: "eifortid", meaning: "past", example: { jp: "Fortida er ikke borte, men vi kan ikke gjøre noe med den.", en: "The past is not gone, but we cannot do anything about it." }, accept: ["a past", "the past"], drill: { jp: "Alle har ei fortid", en: "Everyone has a past" }, hint: "FOR-tid — for (before) plus tid (time). Feminine: definite fortida, per §1. It is also the grammatical past tense." },
        { id: "no-u28l4-eiframtid", type: "vocab", front: "ei framtid", reading: "eiframtid", meaning: "future", example: { jp: "Framtida er lang når du er ung, sa bestemora.", en: "The future is long when you are young, said grandmother." }, accept: ["a future", "the future"], drill: { jp: "Ei framtid er alltid lang", en: "A future is always long" }, hint: "FRAM-tid — fram (forward) plus tid. Feminine: definite framtida. Written fremtid in the more conservative Bokmål; both are correct." },
        { id: "no-u28l4-ettidspunkt", type: "vocab", front: "et tidspunkt", reading: "ettidspunkt", meaning: "point in time", example: { jp: "Vi må finne et tidspunkt, men alle har det travelt.", en: "We have to find a time, but everyone is busy." }, accept: ["a time", "a moment", "a juncture"], drill: { jp: "Et tidspunkt passer alle her", en: "One point in time suits everyone here" }, hint: "TIDS-punkt — tid plus punkt (a point), with the linking s Norwegian puts between compound halves. Neuter: definite tidspunktet." },
        { id: "no-u28l4-enperiode", type: "vocab", front: "en periode", reading: "enperiode", meaning: "period", example: { jp: "Det var en travel periode, men nå er alt rolig igjen.", en: "It was a busy period, but now everything is calm again." }, accept: ["a period", "a phase", "a spell"], drill: { jp: "En periode kan bli lang", en: "A period can become long" }, hint: "pe-ri-O-de, stress on the O. Masculine: definite perioden, plural perioder. Longer and more formal than ei stund." },
        { id: "no-u28l4-avare", type: "vocab", front: "å vare", reading: "avare", meaning: "to last", example: { jp: "Behandlinga varer tre uker, og han kan jobbe mens den varer.", en: "The treatment lasts three weeks, and he can work while it lasts." }, accept: ["last", "to go on", "to endure"], drill: { jp: "Det er tungt å vare lenge", en: "It is hard to last a long time" }, hint: "VAA-re. Present varer, past varte. ⚠️ Do not read `varer` as goods in a shop — that is a different word, and the past `var` (A1 u14) is a third one again." },
        { id: "no-u28l4-hel", type: "vocab", front: "hel", reading: "hel", meaning: "whole", example: { jp: "Han var syk ei hel uke, men nå er han frisk igjen.", en: "He was ill a whole week, but now he is well again." }, accept: ["entire", "complete", "all of"], drill: { jp: "Ei hel uke er lenge", en: "A whole week is a long time" }, hint: "HEL. Neuter helt, definite hele — and `hele` is the form you meet most: hele dagen, hele året. `helt` on its own also means completely." },
      ],
    },
  ],
};
