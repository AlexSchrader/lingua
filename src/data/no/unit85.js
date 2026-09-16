// NO Unit 85 — Barn, barnehage og skole (slot: coverage-b1-12) — B1
// COVERAGE UNIT, block 3. Retitled from the scaffold's "Vocabulary 12 (B1)".
//
// u18 and u24 teach school from the LEARNER's side — en elev, en lærer, ei lekse,
// et fag, en karakter, ei utdanning, et vitnemål, å bestå. Nobody teaches the
// SYSTEM a parent has to navigate: en barnehage, et foreldremøte, en rektor, en
// barneskole, en ungdomsskole, videregående, en lærling. `foreldre` itself is
// taught nowhere in 1215 words, and neither is `å studere` — in a corpus that has
// a lesson titled "Studying".
//
// `foreldre` is taught bare, as a plural-only noun (unit1.js rule 1a, the case
// that rule explicitly names for later blocks).
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT85 = {
  id: "no-u85",
  lang: "no",
  title: "Barn, barnehage og skole",
  order: 85,
  stage: "b1",
  lessons: [
    {
      id: "no-u85l1",
      unit: 85,
      lesson: 1,
      title: "Barnehagen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about small children and the people who look after them.",
      items: [
        { id: "no-u85l1-enbarnehage", type: "vocab", front: "en barnehage", reading: "enbarnehage", meaning: "kindergarten", example: { jp: "Begge barna går i den samme barnehagen i gata.", en: "Both children go to the same kindergarten in the street." }, accept: ["a nursery", "a preschool", "a daycare"], drill: { jp: "Barna går i en barnehage her", en: "The children go to a kindergarten here" }, hint: "en barnehage → barnehagen. Et barn (u4) + en hage (u16). Fra ett år til de begynner på skolen." },
        { id: "no-u85l1-enunge", type: "vocab", front: "en unge", reading: "enunge", meaning: "kid", example: { jp: "Det var mange unger i hagen hennes i dag.", en: "There were many kids in her garden today." }, accept: ["a child", "a youngster"], drill: { jp: "Det satt en unge på trappa", en: "A kid was sitting on the stairs" }, hint: "en unge → ungen, flertall unger. Mer uformelt enn et barn (u4), og helt vanlig. Også dyreunger: en bjørnunge." },
        { id: "no-u85l1-enbarnevakt", type: "vocab", front: "en barnevakt", reading: "enbarnevakt", meaning: "babysitter", example: { jp: "Vi må finne en barnevakt før vi kan dra ut.", en: "We have to find a babysitter before we can go out." }, accept: ["a childminder", "a sitter"], drill: { jp: "Vi må finne en barnevakt først", en: "We have to find a babysitter first" }, hint: "en barnevakt → barnevakten. Et barn + en vakt (u87). Å være barnevakt er den vanligste første jobben." },
        { id: "no-u85l1-foreldre", type: "vocab", front: "foreldre", reading: "foreldre", meaning: "parents", example: { jp: "Foreldrene mine bor fremdeles i huset jeg vokste opp i.", en: "My parents still live in the house I grew up in." }, accept: ["mother and father", "the parents"], drill: { jp: "Mange foreldre kom på møtet", en: "Many parents came to the meeting" }, hint: "Flertallsord — det finnes ingen 'en foreldre'. Én av dem er en forelder. Bestemt form: foreldrene." },
        { id: "no-u85l1-etforeldremote", type: "vocab", front: "et foreldremøte", reading: "etforeldremote", meaning: "parents' meeting", example: { jp: "Det er et foreldremøte på skolen i neste uke.", en: "There's a parents' meeting at the school next week." }, accept: ["a parent-teacher meeting", "a PTA meeting"], drill: { jp: "Det er et foreldremøte neste uke", en: "There is a parents' meeting next week" }, hint: "et foreldremøte → foreldremøtet. Foreldre + et møte (u2). To ganger i året, og alle møter opp." },
        { id: "no-u85l1-aleke", type: "vocab", front: "å leke", reading: "aleke", meaning: "to play", example: { jp: "Ungene leker ute helt til det blir mørkt.", en: "The kids play outside right until it gets dark." }, accept: ["play", "to play about"], drill: { jp: "Det er godt å leke ute", en: "It is good to play outside" }, hint: "å leke → leker, lekte. Om barn som leker. Å spille (u19) er om et spill, en kamp eller et instrument." },
      ],
    },
    {
      id: "no-u85l2",
      unit: 85,
      lesson: 2,
      title: "På skolen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a school day from the outside — the class, the break, the head teacher and the walk there.",
      items: [
        { id: "no-u85l2-eiklasse", type: "vocab", front: "ei klasse", reading: "eiklasse", meaning: "class (year group)", example: { jp: "Det er mange elever i klassa til datteren min.", en: "There are many pupils in my daughter's class." }, accept: ["a form", "a grade", "a year"], drill: { jp: "Hun har ei klasse med mange elever", en: "She has a class with many pupils" }, hint: "ei klasse → klassa, flertall klasser. Både gruppa og rommet. Et klasserom er rommet alene." },
        { id: "no-u85l2-etfriminutt", type: "vocab", front: "et friminutt", reading: "etfriminutt", meaning: "break (recess)", example: { jp: "I friminuttene er alle ute, også når det regner.", en: "In the breaks everybody is outside, even when it rains." }, accept: ["a recess", "a playtime"], drill: { jp: "Vi har et friminutt nå", en: "We have a break now" }, hint: "et friminutt → friminuttet, flertall friminutt. Fri + et minutt (u5). Norske skoler sender alle ut uansett vær." },
        { id: "no-u85l2-enrektor", type: "vocab", front: "en rektor", reading: "enrektor", meaning: "head teacher", example: { jp: "Rektoren ringte foreldrene til alle i klassa.", en: "The head teacher called the parents of everybody in the class." }, accept: ["a principal", "a headmaster"], drill: { jp: "Skolen fikk en rektor i august", en: "The school got a head teacher in August" }, hint: "en rektor → rektoren, flertall rektorer. Samme ord på universitetet. Trykket på første stavelse: REK-tor." },
        { id: "no-u85l2-eimappe", type: "vocab", front: "ei mappe", reading: "eimappe", meaning: "folder", example: { jp: "Alle leksene ligger i ei blå mappe i sekken.", en: "All the homework is in a blue folder in the bag." }, accept: ["a file", "a binder"], drill: { jp: "Leksene ligger i ei mappe", en: "The homework is in a folder" }, hint: "ei mappe → mappa, flertall mapper. Både på pulten og på skjermen — samme ord for begge." },
        { id: "no-u85l2-etskolear", type: "vocab", front: "et skoleår", reading: "etskolear", meaning: "school year", example: { jp: "Skoleåret begynner i august hvert år.", en: "The school year starts in August every year." }, accept: ["an academic year"], drill: { jp: "Et skoleår varer i ti måneder", en: "A school year lasts ten months" }, hint: "et skoleår → skoleåret, flertall skoleår. En skole (u18) + et år (u5). August til juni, med lang sommerferie." },
        { id: "no-u85l2-enskolevei", type: "vocab", front: "en skolevei", reading: "enskolevei", meaning: "way to school", example: { jp: "Skoleveien går langs en stor vei, og det liker vi dårlig.", en: "The way to school runs along a big road, and we don't like that." }, accept: ["a school route", "the school run"], drill: { jp: "De har en skolevei som er lang", en: "They have a way to school that is long" }, hint: "en skolevei → skoleveien. En skole + en vei (u7). Trygg skolevei er et fast politisk tema i hver kommune." },
      ],
    },
    {
      id: "no-u85l3",
      unit: 85,
      lesson: 3,
      title: "Skoleløpet",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the stages of Norwegian schooling and say which one somebody is at.",
      items: [
        { id: "no-u85l3-enbarneskole", type: "vocab", front: "en barneskole", reading: "enbarneskole", meaning: "primary school", example: { jp: "En barneskole i Norge varer i sju år.", en: "A primary school in Norway lasts seven years." }, accept: ["an elementary school", "a junior school"], drill: { jp: "Bygda har en barneskole og en butikk", en: "The village has a primary school and a shop" }, hint: "en barneskole → barneskolen. Seks til tolv år. Ingen karakterer før ungdomsskolen." },
        { id: "no-u85l3-enungdomsskole", type: "vocab", front: "en ungdomsskole", reading: "enungdomsskole", meaning: "lower secondary school", example: { jp: "På ungdomsskolen får elevene karakterer for første gang.", en: "At lower secondary school the pupils get grades for the first time." }, accept: ["middle school", "a junior high"], drill: { jp: "Kommunen bygger en ungdomsskole her", en: "The municipality is building a lower secondary school here" }, hint: "en ungdomsskole → ungdomsskolen. En ungdom (u31) + en skole. Tre år, tretten til seksten." },
        { id: "no-u85l3-videregaende", type: "vocab", front: "videregående", reading: "videregaende", meaning: "upper secondary school", example: { jp: "Hun går på videregående og blir ferdig til sommeren.", en: "She is at upper secondary school and finishes by the summer." }, accept: ["a high school", "a sixth form"], drill: { jp: "Hun går på videregående nå", en: "She is at upper secondary school now" }, hint: "Egentlig en videregående skole, men alle sier bare videregående — derfor bart oppslag. Videre + å gå: the school that goes further." },
        { id: "no-u85l3-enskolegang", type: "vocab", front: "en skolegang", reading: "enskolegang", meaning: "schooling", example: { jp: "Han hadde bare fire år med skolegang før han kom til Norge.", en: "He only had four years of schooling before he came to Norway." }, accept: ["education", "school attendance"], drill: { jp: "Han hadde en skolegang uten problemer", en: "He had a schooling without problems" }, hint: "en skolegang → skolegangen. En skole + en gang (u28); sammensetningen arver kjønnet til siste ledd. Hele løpet ditt, ikke en bestemt skole." },
        { id: "no-u85l3-enlaerling", type: "vocab", front: "en lærling", reading: "enlaerling", meaning: "apprentice", example: { jp: "Han er lærling hos en snekker i to år.", en: "He's an apprentice with a carpenter for two years." }, accept: ["a trainee"], drill: { jp: "Vi tok inn en lærling i august", en: "We took on an apprentice in August" }, hint: "en lærling → lærlingen, flertall lærlinger. Fra å lære (u1). To år på skolen og to i bedrift er den vanlige veien." },
        { id: "no-u85l3-etkull", type: "vocab", front: "et kull", reading: "etkull", meaning: "cohort (year group)", example: { jp: "Kullet hans var det største skolen har hatt.", en: "His cohort was the biggest the school has had." }, accept: ["a year group", "an intake", "a class of"], drill: { jp: "Dette er et kull på ti", en: "This is a cohort of ten" }, hint: "et kull → kullet, flertall kull. Alle som begynte samme år. Også et kull med dyreunger — og coal, samme ord." },
      ],
    },
    {
      id: "no-u85l4",
      unit: 85,
      lesson: 4,
      title: "Å studere",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about being a student — the term, the lectures, the reading list, and a year abroad.",
      items: [
        { id: "no-u85l4-astudere", type: "vocab", front: "å studere", reading: "astudere", meaning: "to study", example: { jp: "Hun studerer i Bergen og kommer hjem hver jul.", en: "She studies in Bergen and comes home every Christmas." }, accept: ["study", "to read (a subject)"], drill: { jp: "Det er dyrt å studere i byen", en: "It is expensive to study in the city" }, hint: "å studere → studerer, studerte. Om høyere utdanning. Å lese (u18) brukes også: hun leser jus." },
        { id: "no-u85l4-enstudent", type: "vocab", front: "en student", reading: "enstudent", meaning: "student", example: { jp: "Som student får du billigere billetter over alt.", en: "As a student you get cheaper tickets everywhere." }, accept: ["an undergraduate"], drill: { jp: "Han er en student uten penger", en: "He is a student without money" }, hint: "en student → studenten, flertall studenter. Bare om universitet og høgskole; på skolen er du en elev (u3)." },
        { id: "no-u85l4-etsemester", type: "vocab", front: "et semester", reading: "etsemester", meaning: "term (semester)", example: { jp: "Dette semesteret har hun bare to fag.", en: "This term she only has two subjects." }, accept: ["a semester", "a half-year"], drill: { jp: "Et semester varer i fem måneder", en: "A term lasts five months" }, hint: "et semester → semesteret, flertall semestre. To i året: høst og vår. Trykket på ME: se-MES-ter." },
        { id: "no-u85l4-eiforelesning", type: "vocab", front: "ei forelesning", reading: "eiforelesning", meaning: "lecture", example: { jp: "Forelesninga varte i to timer uten en pause.", en: "The lecture lasted two hours without a break." }, accept: ["a talk", "a class"], drill: { jp: "Vi hadde ei forelesning i går", en: "We had a lecture yesterday" }, hint: "ei forelesning → forelesninga. -ing-ord er hunkjønn. Fra å forelese, fore + å lese." },
        { id: "no-u85l4-pensum", type: "vocab", front: "pensum", reading: "pensum", meaning: "syllabus (reading list)", example: { jp: "Pensum er stort dette semesteret.", en: "The reading list is big this term." }, accept: ["a curriculum", "required reading"], drill: { jp: "Pensum er stort dette semesteret", en: "The reading list is big this term" }, hint: "pensum → pensumet, men står nesten alltid uten artikkel og er derfor bart oppslag: pensum er stort. Latinsk ord, brukt daglig." },
        { id: "no-u85l4-eiutveksling", type: "vocab", front: "ei utveksling", reading: "eiutveksling", meaning: "exchange (study abroad)", example: { jp: "Hun var på utveksling i Europa et helt år.", en: "She was on an exchange in Europe for a whole year." }, accept: ["an exchange programme", "a study exchange"], drill: { jp: "Hun søkte om ei utveksling", en: "She applied for an exchange" }, hint: "ei utveksling → utvekslinga. -ing-ord er hunkjønn. Ut + å veksle: swapping students both ways." },
      ],
    },
  ],
};
