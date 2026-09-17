// NO Unit 87 — Nødsituasjoner og sikkerhet (slot: coverage-b1-14) — B1
// COVERAGE UNIT, block 3. Retitled from the scaffold's "Vocabulary 14 (B1)".
//
// The last coverage slot, and the one with the clearest argument for existing.
// u11 and u25 teach illness and the doctor; u50 teaches ei ulykke as an abstract
// noun. Nothing in the 1215-word A1/A2 base teaches en brann, en ambulanse, et
// nødnummer, førstehjelp or en rømningsvei. A learner who can discuss a headache
// and cannot report a fire has a gap that is not a matter of fluency.
//
// ⚠ MERGE DAY 2026-09-17: this list used to include `et politi` and `å redde`.
// Both are still gaps in the A1/A2 base, but they are no longer filled HERE —
// other B1 blocks taught them first and the dedupe kept the lower slot, so
// `et politi` is u61l3 and `å redde` is u52l4 (as is `en risiko`, u52l3). This
// unit uses all three freely in its examples; it just does not introduce them.
// `politiet` was also dropped from l1: it is a DEFINITE form, and unit1.js rule 1
// makes the INDEFINITE form the front.
//
// The three Norwegian emergency numbers are named in the hints because they are
// the fact the vocabulary exists to deliver: 110 brann, 112 politi, 113 ambulanse.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT87 = {
  id: "no-u87",
  lang: "no",
  title: "Nødsituasjoner og sikkerhet",
  order: 87,
  stage: "b1",
  lessons: [
    {
      id: "no-u87l1",
      unit: 87,
      lesson: 1,
      title: "Nødnummer",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Call for help in Norway — reach the fire service, the police or an ambulance, and say what is happening.",
      items: [
        { id: "no-u87l1-enbrann", type: "vocab", front: "en brann", reading: "enbrann", meaning: "fire (blaze)", example: { jp: "Det var en brann i huset ved siden av i natt.", en: "There was a fire in the house next door last night." }, accept: ["a blaze", "a conflagration"], drill: { jp: "Det var en brann i natt", en: "There was a fire last night" }, hint: "en brann → brannen, flertall branner. Ilden du ikke vil ha; et bål (u83) er den du tenner selv. Ring 110." },
        { id: "no-u87l1-enambulanse", type: "vocab", front: "en ambulanse", reading: "enambulanse", meaning: "ambulance", example: { jp: "De sendte en ambulanse med en gang jeg forklarte det.", en: "They sent an ambulance immediately when I explained it." }, accept: ["an emergency vehicle"], drill: { jp: "De sendte en ambulanse med en gang", en: "They sent an ambulance immediately" }, hint: "en ambulanse → ambulansen, flertall ambulanser. Uttales -se som i garasje. Ring 113." },
        { id: "no-u87l1-etnodnummer", type: "vocab", front: "et nødnummer", reading: "etnodnummer", meaning: "emergency number", example: { jp: "Barna lærer nødnumrene allerede på barneskolen.", en: "Children learn the emergency numbers as early as primary school." }, accept: ["an emergency line"], drill: { jp: "Hvert land har et nødnummer", en: "Every country has an emergency number" }, hint: "et nødnummer → nødnummeret, flertall nødnumre. Ei nød, distress, + et nummer (u33). Tre i Norge: 110, 112, 113." },
        { id: "no-u87l1-enalarm", type: "vocab", front: "en alarm", reading: "enalarm", meaning: "alarm", example: { jp: "Alarmen går hver gang noen lager mat på kjøkkenet.", en: "The alarm goes off every time somebody cooks in the kitchen." }, accept: ["an alert", "a siren"], drill: { jp: "Vi har en alarm i huset", en: "We have an alarm in the house" }, hint: "en alarm → alarmen, flertall alarmer. Verbet er å gå: alarmen GÅR. Røykvarsler er påbudt i hver bolig." },
        { id: "no-u87l1-aromme", type: "vocab", front: "å rømme", reading: "aromme", meaning: "to flee (escape)", example: { jp: "Alle rakk å rømme ut før det ble for varmt.", en: "Everybody managed to get out before it got too hot." }, accept: ["to escape", "to run away"], drill: { jp: "Det er viktig å rømme fort", en: "It is important to escape quickly" }, hint: "å rømme → rømmer, rømte. Ut av fare eller fra fengsel. NB: rømme er også sour cream — samme skrivemåte." },
      ],
    },
    {
      id: "no-u87l2",
      unit: 87,
      lesson: 2,
      title: "Skade og førstehjelp",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say somebody is hurt, describe how, and start helping before the ambulance arrives.",
      items: [
        { id: "no-u87l2-forstehjelp", type: "vocab", front: "førstehjelp", reading: "forstehjelp", meaning: "first aid", example: { jp: "Alle på jobben har hatt kurs i førstehjelp.", en: "Everybody at work has had a course in first aid." }, accept: ["emergency aid"], drill: { jp: "Alle har hatt kurs i førstehjelp", en: "Everybody has had a course in first aid" }, hint: "førstehjelp → førstehjelpa. Først (u29) + ei hjelp. Står alltid uten artikkel og er derfor bart oppslag (regel 1b): kurs i førstehjelp." },
        { id: "no-u87l2-askadeseg", type: "vocab", front: "å skade seg", reading: "askadeseg", meaning: "to get hurt", example: { jp: "Han skadet seg i armen da han bar sekken.", en: "He hurt his arm when he was carrying the bag." }, accept: ["to injure oneself", "to hurt oneself"], drill: { jp: "Det er lett å skade seg her", en: "It is easy to get hurt here" }, hint: "En skade (u25) + seg (u12). Refleksivt: jeg skadet meg, han skadet seg. Å skade noen andre dropper seg." },
        { id: "no-u87l2-eiblodning", type: "vocab", front: "ei blødning", reading: "eiblodning", meaning: "bleeding", example: { jp: "Ei stor blødning må du stoppe med en gang.", en: "A big bleed you have to stop immediately." }, accept: ["a haemorrhage", "a bleed"], drill: { jp: "Han hadde ei blødning i armen", en: "He had a bleed in his arm" }, hint: "ei blødning → blødninga. -ing-ord er hunkjønn. Fra å blø (u25). NB: ø folder til o, så lesinga er blodning." },
        { id: "no-u87l2-abesvime", type: "vocab", front: "å besvime", reading: "abesvime", meaning: "to faint", example: { jp: "Hun besvimte i varmen og våknet like etterpå.", en: "She fainted in the heat and woke up right afterwards." }, accept: ["to pass out", "to black out"], drill: { jp: "Det er lett å besvime i varmen", en: "It is easy to faint in the heat" }, hint: "å besvime → besvimer, besvimte. Å dåne er det gamle ordet. Legg personen ned med beina høyt." },
        { id: "no-u87l2-enbandasje", type: "vocab", front: "en bandasje", reading: "enbandasje", meaning: "bandage", example: { jp: "Vi har ikke ei bandasje igjen i skapet.", en: "We do not have a bandage left in the cupboard." }, accept: ["a dressing", "a wrap"], drill: { jp: "Vi har ikke en bandasje igjen", en: "We do not have a bandage left" }, hint: "en bandasje → bandasjen, flertall bandasjer. Uttales -sje. Et plaster er det lille du setter på et kutt." },
      ],
    },
    {
      id: "no-u87l3",
      unit: 87,
      lesson: 3,
      title: "Å passe på",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about keeping people safe — the risk, the warning, the guard and the feeling of safety.",
      items: [
        { id: "no-u87l3-sikkerhet", type: "vocab", front: "sikkerhet", reading: "sikkerhet", meaning: "safety", example: { jp: "Sikkerheten på jobben går alltid foran alt annet.", en: "Safety at work always comes before everything else." }, accept: ["security", "certainty"], drill: { jp: "Sikkerhet går foran alt annet", en: "Safety comes before everything else" }, hint: "sikkerhet → sikkerheten. -het-ord er hankjønn (regel 1), aldri ei; massesubstantiv, derfor bart oppslag. Fra sikker (u22)." },
        { id: "no-u87l3-envakt", type: "vocab", front: "en vakt", reading: "envakt", meaning: "guard (shift)", example: { jp: "Det står en vakt ved døra hele natta.", en: "There's a guard by the door all night." }, accept: ["a watchman", "a shift", "a duty"], drill: { jp: "Det står en vakt ved døra", en: "There is a guard by the door" }, hint: "en vakt → vakten, flertall vakter. To liv: personen som passer på, og skiftet ditt — jeg har vakt i kveld." },
        { id: "no-u87l3-apassepa", type: "vocab", front: "å passe på", reading: "apassepa", meaning: "to look after", example: { jp: "Kan du passe på sekkene mens jeg går inn?", en: "Can you look after the bags while I go in?" }, accept: ["to watch over", "to mind", "to make sure"], drill: { jp: "Husk å passe på barna", en: "Remember to look after the children" }, hint: "Å passe (u15) + på. Også 'to make sure that': pass på at døra er låst." },
        { id: "no-u87l3-enadvarsel", type: "vocab", front: "en advarsel", reading: "enadvarsel", meaning: "warning", example: { jp: "Vi fikk en advarsel om dårlig vær på fjellet.", en: "We got a warning about bad weather in the mountains." }, accept: ["a caution", "an alert"], drill: { jp: "Vi fikk en advarsel om været", en: "We got a warning about the weather" }, hint: "en advarsel → advarselen, flertall advarsler. Fra å advare. Merk at flertallet mister en e." },
        { id: "no-u87l3-entrygghet", type: "vocab", front: "en trygghet", reading: "entrygghet", meaning: "sense of safety", example: { jp: "Det gir en trygghet å vite at noen er hjemme.", en: "It gives a sense of safety to know that somebody is at home." }, accept: ["security", "reassurance"], drill: { jp: "Det gir en trygghet å vite det", en: "It gives a sense of safety to know it" }, hint: "en trygghet → tryggheten. -het-ord er hankjønn (regel 1), aldri ei. Fra trygg (u57). Trygghet er følelsen, sikkerhet er tilstanden." },
      ],
    },
    {
      id: "no-u87l4",
      unit: 87,
      lesson: 4,
      title: "Når det brenner",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get out of a burning building and use what is on the wall to put a fire out.",
      items: [
        { id: "no-u87l4-eiflamme", type: "vocab", front: "ei flamme", reading: "eiflamme", meaning: "flame", example: { jp: "Flammene sto ut av vinduet da vi kom.", en: "The flames were coming out of the window when we arrived." }, accept: ["a blaze", "a tongue of fire"], drill: { jp: "Det sto ei flamme ut av vinduet", en: "A flame was coming out of the window" }, hint: "ei flamme → flamma, flertall flammer. Den synlige delen av en brann. Nesten alltid i flertall." },
        { id: "no-u87l4-enroyk", type: "vocab", front: "røyk", reading: "royk", meaning: "smoke", example: { jp: "Røyken er verre enn flammene i et hus.", en: "The smoke is worse than the flames in a house." }, accept: ["fumes", "smoke"], drill: { jp: "Det kom røyk fra kjelleren", en: "Smoke came from the basement" }, hint: "røyk → røyken. Hankjønn, massesubstantiv i denne betydninga, derfor bart oppslag. ⚠ EN røyk er en SIGARETT: ta en røyk. Å røyke er verbet, for begge betydningene." },
        { id: "no-u87l4-aslukke", type: "vocab", front: "å slukke", reading: "aslukke", meaning: "to put out (extinguish)", example: { jp: "De klarte å slukke brannen før den ble for stor.", en: "They managed to put the fire out before it got too big." }, accept: ["to extinguish", "to switch off"], drill: { jp: "De klarte å slukke brannen", en: "They managed to put out the fire" }, hint: "å slukke → slukker, slukket. Både om en brann og om et lys. Motsatt av å fyre opp (u83)." },
        { id: "no-u87l4-etslukkeapparat", type: "vocab", front: "et slukkeapparat", reading: "etslukkeapparat", meaning: "fire extinguisher", example: { jp: "Det henger et slukkeapparat i gangen ved heisen.", en: "There's a fire extinguisher hanging in the hallway by the lift." }, accept: ["an extinguisher"], drill: { jp: "Det henger et slukkeapparat i gangen", en: "There is a fire extinguisher in the hallway" }, hint: "et slukkeapparat → slukkeapparatet. Å slukke + et apparat. Påbudt i hver bolig, sammen med en røykvarsler." },
        { id: "no-u87l4-enromningsvei", type: "vocab", front: "en rømningsvei", reading: "enromningsvei", meaning: "escape route", example: { jp: "Hver leilighet må ha to rømningsveier ut.", en: "Every flat has to have two escape routes out." }, accept: ["a fire exit", "an emergency exit"], drill: { jp: "Hver leilighet må ha en rømningsvei", en: "Every flat must have an escape route" }, hint: "en rømningsvei → rømningsveien, flertall rømningsveier. Å rømme (l1) + en vei (u20). Et vindu teller som én." },
        { id: "no-u87l4-enbrannalarm", type: "vocab", front: "en brannalarm", reading: "enbrannalarm", meaning: "fire alarm", example: { jp: "Brannalarmen gikk under forelesninga i går.", en: "The fire alarm went off during the lecture yesterday." }, accept: ["a smoke alarm", "a fire bell"], drill: { jp: "Hvert hus må ha en brannalarm", en: "Every house must have a fire alarm" }, hint: "en brannalarm → brannalarmen. En brann + en alarm (l1). Når den går, går alle ut — også om det er mat." },
      ],
    },
  ],
};
