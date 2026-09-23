// NO Unit 95 — Historie og kultur (slot: history-culture) — B2
// Retitled from the scaffold's English placeholder "History and culture".
// B2 band conventions live in no/unit88.js's header; language-wide in unit1.js.
//
// u86 "Høytider og tradisjoner" (B1) covers what Norwegians DO — the holidays,
// the food, the year. It does not give a learner the words to talk about the
// past as a subject: et tiår, en epoke, ei samtid, en arv, ei utvandring.
// u59 "Endring over tid" owns et århundre and et vendepunkt, and u63 owns en
// tradisjon — all three are used here and none re-taught.
//
// ⚠️ NORWEGIAN-SPECIFIC CONTENT, and it is why this slot is worth a unit rather
// than a coverage row. The facts a learner in Norway actually needs are the
// 1814 constitution (u92l2), the union with Sweden, the 1905 selvstendighet,
// the 1940-45 okkupasjon and motstandsbevegelse, and the utvandring to America
// that took roughly 800 000 people. Those are the words in lessons 3 and 4.
// The examples here stay inside taught vocabulary, so the DATES live in the
// hints, where scope does not bind and where they can be stated plainly.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT95 = {
  id: "no-u95",
  lang: "no",
  title: "Historie og kultur",
  order: 95,
  stage: "b2",
  lessons: [
    {
      id: "no-u95l1",
      unit: 95,
      lesson: 1,
      title: "Tid og epoker",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place events in time the way a Norwegian newspaper does — by decade and era, and from the point of view of now or later.",
      items: [
        { id: "no-u95l1-ettiar", type: "vocab", front: "et tiår", reading: "ettiar", meaning: "decade (a run of ten years)", example: { jp: "Det tok et helt tiår før noen tok dette opp igjen.", en: "It took a whole decade before anybody took this up again." }, accept: ["a ten-year period", "ten years"], drill: { jp: "Dette tok et tiår hos oss", en: "This took a decade with us" }, hint: "et tiår → tiåret, flertall tiår (likt i flertall). Ti + et år. Et århundre (u59) er hundre; et tiår er ti." },
        { id: "no-u95l1-enepoke", type: "vocab", front: "en epoke", reading: "enepoke", meaning: "era (a stretch of time with its own character)", example: { jp: "Ingen vet at de er i en epoke før den er over.", en: "Nobody knows that they are in an era until it is over." }, accept: ["an age", "a period with its own feel"], drill: { jp: "Dette var en epoke for seg", en: "This was an era of its own" }, hint: "en epoke → epoken, flertall epoker. Et tiår er et TALL; en epoke er en epoke fordi noe henger sammen i den." },
        { id: "no-u95l1-eisamtid", type: "vocab", front: "ei samtid", reading: "eisamtid", meaning: "contemporary age (the time somebody was actually alive in)", example: { jp: "Hun var for tydelig for si samtid, og derfor ble hun lest først lenge etter.", en: "She was too outspoken for her own age, and that is why she was read only long afterwards." }, accept: ["one's own time", "the present age"], drill: { jp: "Han skrev om ei samtid han kjente", en: "He wrote about an age he knew" }, hint: "ei samtid → samtida. Sammen + ei tid. Nesten alltid med eiendomsord: si samtid, vår samtid. Motsatt av ei fortid (u28)." },
        { id: "no-u95l1-eiettertid", type: "vocab", front: "ei ettertid", reading: "eiettertid", meaning: "posterity (the people who come after and judge)", example: { jp: "Ettertida har vært mildere mot ham enn de som bodde her da.", en: "Posterity has been gentler towards him than those who lived here at the time." }, accept: ["later generations", "those who come after"], drill: { jp: "De skrev for ei ettertid de aldri så", en: "They wrote for a posterity they never saw" }, hint: "ei ettertid → ettertida. Etter + ei tid. Nesten alltid i bestemt form: ettertida. Et fast uttrykk er «i ettertid», som betyr i etterkant." },
        { id: "no-u95l1-entidsalder", type: "vocab", front: "en tidsalder", reading: "entidsalder", meaning: "age of history (a very long era named after what defined it)", example: { jp: "De kaller det en ny tidsalder hver gang det kommer noe nytt.", en: "They call it a new age every time something new comes along." }, accept: ["a historical age", "a named era"], drill: { jp: "Vi er inne i en tidsalder nå", en: "We are in an age now" }, hint: "en tidsalder → tidsalderen, flertall tidsaldre. Ei tid + en alder (u22). Større enn en epoke: steinalderen, jernalderen, vikingtida." },
        { id: "no-u95l1-enhistoriker", type: "vocab", front: "en historiker", reading: "enhistoriker", meaning: "historian (somebody whose work is finding out what happened)", example: { jp: "En historiker leter ikke etter en god historie, men etter en kilde.", en: "A historian is not looking for a good story, but for a source." }, accept: ["a scholar of history", "a student of the past"], drill: { jp: "Hun er en historiker ved skolen", en: "She is a historian at the school" }, hint: "en historiker → historikeren, flertall historikere. Fra ei historie (u18). NB: ei historie kan bety både story og history — historikeren jobber med den siste." },
      ],
    },
    {
      id: "no-u95l2",
      unit: 95,
      lesson: 2,
      title: "Arv og minne",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what gets handed down — what a place is known for, what is dug up, and what is deliberately remembered.",
      items: [
        { id: "no-u95l2-enarv", type: "vocab", front: "en arv", reading: "enarv", meaning: "inheritance (what one generation leaves the next)", example: { jp: "De fikk en arv de ikke hadde ønsket seg, og nå må de gjøre noe med den.", en: "They received an inheritance they had not wished for, and now they have to do something with it." }, accept: ["a legacy", "what is handed down"], drill: { jp: "Dette er en arv fra før", en: "This is an inheritance from before" }, hint: "en arv → arven, flertall arver. Å arve er verbet. Brukes både om penger etter en død og om noe åndelig: en tung arv." },
        { id: "no-u95l2-etminnesmerke", type: "vocab", front: "et minnesmerke", reading: "etminnesmerke", meaning: "memorial (a thing put up so people do not forget)", example: { jp: "Det står et minnesmerke i parken, og de fleste går forbi uten å se opp.", en: "There is a memorial in the park, and most people walk past without looking up." }, accept: ["a monument of remembrance", "a commemorative marker"], drill: { jp: "Byen fikk et minnesmerke her", en: "The town got a memorial here" }, hint: "et minnesmerke → minnesmerket, flertall minnesmerker. Et minne (u63) + et merke. Et minnesmerke er et VALG om hva som skal huskes." },
        { id: "no-u95l2-aminnes", type: "vocab", front: "å minnes", reading: "aminnes", meaning: "to commemorate (remember together, on purpose)", example: { jp: "Hver vår minnes de dem som aldri kom hjem igjen.", en: "Every spring they commemorate those who never came home again." }, accept: ["to remember formally", "to mark in memory"], drill: { jp: "Det er viktig å minnes slikt", en: "It is important to commemorate such things" }, hint: "å minnes → minnes, mintes. ⚠️ S-VERB: formen ender på -s i alle tider, som å finnes (u70). Å huske (u12) er privat; å minnes er noe folk gjør SAMMEN." },
        { id: "no-u95l2-etsaerpreg", type: "vocab", front: "et særpreg", reading: "etsaerpreg", meaning: "distinctive character (what makes a place unlike others)", example: { jp: "Hvert sted har et særpreg, og det forsvinner fortest når alle bygger likt.", en: "Every place has a distinctive character, and it disappears fastest when everybody builds the same way." }, accept: ["a distinctive stamp", "what sets it apart"], drill: { jp: "Stedet har et særpreg vi liker", en: "The place has a distinctive character we like" }, hint: "et særpreg → særpreget. Særlig (u45) + et preg. Et kjennetegn (u90) lar deg KJENNE noe igjen; et særpreg er det som gjør det SPESIELT. æ folder til ae." },
        { id: "no-u95l2-enkulturarv", type: "vocab", front: "en kulturarv", reading: "enkulturarv", meaning: "cultural heritage (what a people keeps because of what it means)", example: { jp: "En kulturarv koster penger å ta vare på, og det er alltid noen som spør hvorfor.", en: "A cultural heritage costs money to look after, and there is always somebody who asks why." }, accept: ["heritage of a people", "inherited culture"], drill: { jp: "Dette er en kulturarv for landet", en: "This is a cultural heritage for the country" }, hint: "en kulturarv → kulturarven. En kultur (u35) + en arv. Stavkirkene og Bryggen i Bergen står på lista til Unesco." },
        { id: "no-u95l2-eiutgraving", type: "vocab", front: "ei utgraving", reading: "eiutgraving", meaning: "excavation (digging to find out what is underneath)", example: { jp: "Ei utgraving tar år, og ingenting kan gå fort når den først er i gang.", en: "An excavation takes years, and nothing can go fast once it is under way." }, accept: ["an archaeological dig", "a digging-out"], drill: { jp: "De begynner ei utgraving nå", en: "They are starting an excavation now" }, hint: "ei utgraving → utgravinga, flertall utgravinger. -ing er hunkjønn (unit88 regel B3). Ut + å grave. I Norge stopper all bygging om det dukker opp funn." },
      ],
    },
    {
      id: "no-u95l3",
      unit: 95,
      lesson: 3,
      title: "Folk i bevegelse",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about people moving — who came, who left, where they settled, and how mixed a society ends up being.",
      items: [
        { id: "no-u95l3-eninnvandrer", type: "vocab", front: "en innvandrer", reading: "eninnvandrer", meaning: "immigrant (somebody who moved into this country)", example: { jp: "Hun kom som en innvandrer, og nå er barna hennes mer norske enn henne.", en: "She came as an immigrant, and now her children are more Norwegian than she is." }, accept: ["somebody who moved here", "an incomer"], drill: { jp: "Han er en innvandrer fra Europa", en: "He is an immigrant from Europe" }, hint: "en innvandrer → innvandreren, flertall innvandrere. Inn + å vandre. Ordet er nøytralt i norsk, men det er tungt i politikk — bruk det om FAKTA." },
        { id: "no-u95l3-eiutvandring", type: "vocab", front: "ei utvandring", reading: "eiutvandring", meaning: "emigration (people leaving a country in numbers)", example: { jp: "Ei utvandring så stor at hver person i landet kjente noen, forandret alt.", en: "An emigration so large that everybody in the country knew somebody changed everything." }, accept: ["a movement out of a country", "mass departure"], drill: { jp: "Landet hadde ei utvandring da", en: "The country had an emigration then" }, hint: "ei utvandring → utvandringa. -ing er hunkjønn (unit88 regel B3). Ut + å vandre. ⚠️ Norsk historie: rundt 800 000 dro til Amerika mellom 1825 og 1925." },
        { id: "no-u95l3-eibosetting", type: "vocab", front: "ei bosetting", reading: "eibosetting", meaning: "settlement (where a group of people were placed and stayed)", example: { jp: "Den første bosettinga lå ved sjøen, for der kom båtene inn.", en: "The first settlement lay by the sea, because that is where the boats came in." }, accept: ["a settling of people", "a place people settled"], drill: { jp: "Her lå ei bosetting for lenge siden", en: "Here lay a settlement long ago" }, hint: "ei bosetting → bosettinga, flertall bosettinger. -ing er hunkjønn. Å bo (u3) + å sette. Både om oldtid og om dagens politikk." },
        { id: "no-u95l3-eifolkegruppe", type: "vocab", front: "ei folkegruppe", reading: "eifolkegruppe", meaning: "ethnic group (a people sharing origin and often language)", example: { jp: "Norge har ei folkegruppe som har vært her lenge før staten selv.", en: "Norway has an ethnic group that has been here long before the state itself." }, accept: ["a people", "an ethnic community"], drill: { jp: "Dette gjelder ei folkegruppe her", en: "This concerns an ethnic group here" }, hint: "ei folkegruppe → folkegruppa. Folk (u30) + ei gruppe (u21). Samene er urfolk i Norge og har egne rettigheter (u32) i loven." },
        { id: "no-u95l3-etmangfold", type: "vocab", front: "et mangfold", reading: "etmangfold", meaning: "diversity (many different kinds within one whole)", example: { jp: "Et mangfold er ikke det samme som at alle er enige, og det er nettopp poenget.", en: "Diversity is not the same as everybody agreeing, and that is exactly the point." }, accept: ["variety of kinds", "plurality"], drill: { jp: "Byen har et mangfold vi liker", en: "The town has a diversity we like" }, hint: "et mangfold → mangfoldet. Mange + å folde. Brukes om folk, om natur og om meninger. Ofte i festtaler — se etter om det står noe bak." },
        { id: "no-u95l3-etoppror", type: "vocab", front: "et opprør", reading: "etoppror", meaning: "uprising (people rising against those who rule them)", example: { jp: "Det begynner som et opprør om brød, og slutter et helt annet sted.", en: "It begins as an uprising about bread, and ends somewhere completely different." }, accept: ["a revolt", "a rising against power"], drill: { jp: "Det ble et opprør mot dem", en: "It became an uprising against them" }, hint: "et opprør → opprøret, flertall opprør (likt i flertall). Opp + å røre. Også om ungdom: et opprør mot foreldra. ø folder til o." },
      ],
    },
    {
      id: "no-u95l4",
      unit: 95,
      lesson: 4,
      title: "Union og frihet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow the story Norway tells about itself — union, independence, occupation, and the people who refused.",
      items: [
        { id: "no-u95l4-enkonge", type: "vocab", front: "en konge", reading: "enkonge", meaning: "king (a head of state who inherits the role)", example: { jp: "En konge i Norge bestemmer lite, men han betyr mer enn mange tror.", en: "A king in Norway decides little, but he means more than many think." }, accept: ["a monarch", "a hereditary ruler"], drill: { jp: "Landet har en konge fortsatt", en: "The country still has a king" }, hint: "en konge → kongen, flertall konger. Norge har hatt konge siden 1905 igjen. Kongen har ingen makt (u55) — han har en rolle (u35)." },
        { id: "no-u95l4-enunion", type: "vocab", front: "en union", reading: "enunion", meaning: "union of states (two countries joined under one crown or treaty)", example: { jp: "En union kan se lik ut fra den sida og helt ulik fra den andre.", en: "A union can look the same from one side and completely different from the other." }, accept: ["a joining of countries", "a federation"], drill: { jp: "De var i en union før", en: "They were in a union before" }, hint: "en union → unionen, flertall unioner. -ion er hankjønn (unit88 regel B3). ⚠️ Norsk historie: union med Danmark til 1814, så med Sverige til 1905." },
        { id: "no-u95l4-enselvstendighet", type: "vocab", front: "en selvstendighet", reading: "enselvstendighet", meaning: "independence (standing as a state in your own right)", example: { jp: "En selvstendighet er lett å feire og tung å bruke godt.", en: "Independence is easy to celebrate and hard to use well." }, accept: ["sovereignty", "standing on one's own"], drill: { jp: "Landet fikk en selvstendighet da", en: "The country gained independence then" }, hint: "en selvstendighet → selvstendigheten. -het er HANKJØNN (unit88 regel B3), aldri ei. Selv + å stå. Norge i 1905, uten krig." },
        { id: "no-u95l4-eifrigjoring", type: "vocab", front: "ei frigjøring", reading: "eifrigjoring", meaning: "liberation (being freed from somebody else's control)", example: { jp: "Ei frigjøring er en dag, men det som kommer etter tar mange år.", en: "A liberation is one day, but what comes afterwards takes many years." }, accept: ["a freeing", "release from control"], drill: { jp: "De feirer ei frigjøring hvert år", en: "They celebrate a liberation every year" }, hint: "ei frigjøring → frigjøringa. -ing er hunkjønn (unit88 regel B3). Fri + å gjøre. 8. mai 1945 heter frigjøringsdagen. ø folder til o." },
        { id: "no-u95l4-enmotstandsbevegelse", type: "vocab", front: "en motstandsbevegelse", reading: "enmotstandsbevegelse", meaning: "resistance movement (an organised refusal under occupation)", example: { jp: "En motstandsbevegelse må være liten for å være trygg, og stor for å virke.", en: "A resistance movement has to be small to be safe, and large to have an effect." }, accept: ["an underground resistance", "organised opposition under occupation"], drill: { jp: "Landet hadde en motstandsbevegelse da", en: "The country had a resistance movement then" }, hint: "en motstandsbevegelse → motstandsbevegelsen. -else er HANKJØNN (unit88 regel B3). En motstander (u88) + ei bevegelse (u71). I Norge: Milorg og gutta på skauen." },
        { id: "no-u95l4-enokkupasjon", type: "vocab", front: "en okkupasjon", reading: "enokkupasjon", meaning: "occupation by a foreign power (holding a country by force)", example: { jp: "Under en okkupasjon blir hver lille ting du gjør et valg.", en: "Under an occupation every little thing you do becomes a choice." }, accept: ["foreign military control", "being held by another country"], drill: { jp: "Det skjer under en okkupasjon", en: "It happens during an occupation" }, hint: "en okkupasjon → okkupasjonen, flertall okkupasjoner. -sjon er hankjønn (unit88 regel B3). ⚠️ Norsk historie: 9. april 1940 til 8. mai 1945." },
      ],
    },
  ],
};
