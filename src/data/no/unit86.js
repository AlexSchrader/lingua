// NO Unit 86 — Høytider og tradisjoner (slot: coverage-b1-13) — B1
// COVERAGE UNIT, block 3. Retitled from the scaffold's "Vocabulary 13 (B1)".
//
// u9 teaches `ei jul` as a point on the calendar and u35 teaches the arts. The
// calendar a person actually lives by is missing: ei påske, en julaften, en
// nasjonaldag, en nyttårsaften, et bryllup, en begravelse, en bursdag. So is the
// vocabulary that is specifically Norwegian rather than general — en dugnad, en
// bunad, en russ, koselig — none of which translate cleanly and all of which a
// learner meets in their first year here.
//
// Not a "culture" unit in the museum sense (u35 has that); this is the social
// calendar, which is a practical register: you are invited to these things.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT86 = {
  id: "no-u86",
  lang: "no",
  title: "Høytider og tradisjoner",
  order: 86,
  stage: "b1",
  lessons: [
    {
      id: "no-u86l1",
      unit: 86,
      lesson: 1,
      title: "Jul og påske",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the two big holidays — when they are, what happens, who turns up with the presents, and what you call the day itself.",
      items: [
        { id: "no-u86l1-enjulaften", type: "vocab", front: "en julaften", reading: "enjulaften", meaning: "Christmas Eve", example: { jp: "Vi feirer på julaften, ikke dagen etter.", en: "We celebrate on Christmas Eve, not the day after." }, accept: ["the night before Christmas"], drill: { jp: "Det var en julaften uten snø", en: "It was a Christmas Eve without snow" }, hint: "en julaften → julaftenen. Ei jul (u9) + en aften, an evening. Den 24. er den store dagen i Norge, ikke den 25." },
        { id: "no-u86l1-etjuletre", type: "vocab", front: "et juletre", reading: "etjuletre", meaning: "Christmas tree", example: { jp: "Juletreet står inne i to uker.", en: "The Christmas tree stays indoors for two weeks." }, accept: ["a fir tree (Christmas)"], drill: { jp: "Vi kjøpte et juletre i går", en: "We bought a Christmas tree yesterday" }, hint: "et juletre → juletreet, flertall juletrær. Ei jul + et tre (u19). Folk går rundt det og synger, bokstavelig talt." },
        { id: "no-u86l1-eipaske", type: "vocab", front: "ei påske", reading: "eipaske", meaning: "Easter", example: { jp: "I påska drar halve landet på hytta for å gå på ski.", en: "At Easter half the country goes to the cabin to ski." }, accept: ["Eastertide"], drill: { jp: "Det blir ei påske uten snø", en: "It will be an Easter without snow" }, hint: "ei påske → påska. Fem fridager på rad, og den største skiuka i året. Påskekrim er en egen tradisjon." },
        { id: "no-u86l1-enhoytid", type: "vocab", front: "en høytid", reading: "enhoytid", meaning: "public holiday (festival)", example: { jp: "Butikkene er stengt på alle de store høytidene.", en: "The shops are closed on all the big public holidays." }, accept: ["a feast day", "a holy day"], drill: { jp: "Jul er en høytid for alle", en: "Christmas is a public holiday for everybody" }, hint: "en høytid → høytiden, flertall høytider. Høy (u10) + ei tid (u28). En ferie (u9) tar du selv; en høytid gjelder alle." },
        { id: "no-u86l1-etjulebord", type: "vocab", front: "et julebord", reading: "etjulebord", meaning: "office Christmas party", example: { jp: "Vi skal på julebord med jobben neste fredag.", en: "We're going to the office Christmas party with work next Friday." }, accept: ["Christmas party", "Christmas dinner"], drill: { jp: "Vi skal på et julebord med jobben", en: "We're going to an office Christmas party with work" }, hint: "jul + et bord. Ikke et møbel, men festen jobben holder i desember — nesten alle norske arbeidsplasser har et." },
        { id: "no-u86l1-ennisse", type: "vocab", front: "en nisse", reading: "ennisse", meaning: "a Christmas gnome", example: { jp: "Barna venter på en nisse med gaver på julaften.", en: "The children are waiting for a Christmas gnome with presents on Christmas Eve." }, drill: { jp: "En nisse kommer med gaver til barna", en: "A gnome comes with presents for the children" }, accept: ["a Christmas elf", "a gnome (Christmas figure)", "Father Christmas (Norwegian)"], hint: "NIS-se. Masculine: definite nissen, plural nisser. Not quite Santa: the old nisse is a small farm creature you leave porridge for, and julenissen who brings the gaver grew out of him." },
      ],
    },
    {
      id: "no-u86l2",
      unit: 86,
      lesson: 2,
      title: "Syttende mai og nyttår",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Take part in the national day and New Year — the dress, the greeting, the party.",
      items: [
        { id: "no-u86l2-ennasjonaldag", type: "vocab", front: "en nasjonaldag", reading: "ennasjonaldag", meaning: "national day", example: { jp: "Nasjonaldagen er i mai, og da går alle i tog.", en: "The national day is in May, and then everybody walks in a parade." }, accept: ["a national holiday", "independence day"], drill: { jp: "Hvert land har en nasjonaldag", en: "Every country has a national day" }, hint: "en nasjonaldag → nasjonaldagen. Barnetoget, ikke militæret, er hovedsaken — uvanlig i Europa." },
        { id: "no-u86l2-enbunad", type: "vocab", front: "en bunad", reading: "enbunad", meaning: "national costume", example: { jp: "Bunaden hennes kommer fra samme bygd som moren.", en: "Her national costume comes from the same village as her mother." }, accept: ["a folk costume", "traditional dress"], drill: { jp: "Hun kjøpte en bunad i mai", en: "She bought a national costume in May" }, hint: "en bunad → bunaden, flertall bunader. Hver bygd har sin egen, og den koster like mye som en bil." },
        { id: "no-u86l2-ennyttarsaften", type: "vocab", front: "en nyttårsaften", reading: "ennyttarsaften", meaning: "New Year's Eve", example: { jp: "På nyttårsaften står alle ute og ser på himmelen.", en: "On New Year's Eve everybody stands outside looking at the sky." }, accept: ["New Year's night"], drill: { jp: "Det var en nyttårsaften uten regn", en: "It was a New Year's Eve without rain" }, hint: "en nyttårsaften → nyttårsaftenen. Ny + et år + en aften; hankjønn fra aften, som i julaften. Nyttårsdagen er den første januar." },
        { id: "no-u86l2-eipinse", type: "vocab", front: "ei pinse", reading: "eipinse", meaning: "Whitsun (Pentecost)", example: { jp: "I pinsa er butikkene stengt noen dager i mai.", en: "At Whitsun the shops are closed for a few days in May." }, accept: ["Pentecost", "Whitsuntide"], drill: { jp: "Det blir ei pinse med sol", en: "It will be a Whitsun with sun" }, hint: "ei pinse → pinsa. Den tredje store høytida etter jul og påske. Mange vet bare at det er fri." },
        { id: "no-u86l2-agratulere", type: "vocab", front: "å gratulere", reading: "agratulere", meaning: "to congratulate", example: { jp: "Alle gratulerte henne med den nye jobben.", en: "Everybody congratulated her on the new job." }, accept: ["congratulate", "to wish well"], drill: { jp: "Det er hyggelig å gratulere noen", en: "It is nice to congratulate somebody" }, hint: "å gratulere → gratulerer. Gratulere MED noe. Gratulerer med dagen! er det du sier på en bursdag." },
        { id: "no-u86l2-etselskap", type: "vocab", front: "et selskap", reading: "etselskap", meaning: "party (gathering)", example: { jp: "Det er et stort selskap hjemme hos naboen i kveld.", en: "There's a big party at the neighbour's tonight." }, accept: ["a gathering", "a company", "a do"], drill: { jp: "De har et selskap i kveld", en: "They are having a party tonight" }, hint: "et selskap → selskapet, flertall selskaper. Sitte til bords og spise — en fest er løsere. Betyr også a company i forretning." },
      ],
    },
    {
      id: "no-u86l3",
      unit: 86,
      lesson: 3,
      title: "Livets store dager",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Attend a wedding, a funeral or a birthday, and know what to call each one.",
      items: [
        { id: "no-u86l3-enbegravelse", type: "vocab", front: "en begravelse", reading: "enbegravelse", meaning: "funeral", example: { jp: "Begravelsen er på fredag i kirka.", en: "The funeral is on Friday in the church." }, accept: ["a burial", "a memorial service"], drill: { jp: "Det er en begravelse på fredag", en: "There is a funeral on Friday" }, hint: "-else-ord er hankjønn (regel 1), aldri ei: en begravelse → begravelsen. Fra å begrave, be + en grav." },
        { id: "no-u86l3-enbursdag", type: "vocab", front: "en bursdag", reading: "enbursdag", meaning: "birthday", example: { jp: "Det er bursdagen hans på tirsdag, men han vil ikke feire.", en: "It's his birthday on Tuesday, but he doesn't want to celebrate." }, accept: ["a birth day", "an anniversary of birth"], drill: { jp: "Han har en bursdag på tirsdag", en: "He has a birthday on Tuesday" }, hint: "en bursdag → bursdagen. Kortform av fødselsdag, og det vanligste ordet. Barnebursdag er et eget prosjekt." },
        { id: "no-u86l3-eibrud", type: "vocab", front: "ei brud", reading: "eibrud", meaning: "bride", example: { jp: "Bruda kom ti minutter for sent, som seg hør og bør.", en: "The bride arrived ten minutes late, as is only proper." }, accept: ["a bride"], drill: { jp: "Det satt ei brud i bilen", en: "A bride was sitting in the car" }, hint: "ei brud → bruda, flertall bruder. En brudgom er mannen." },
        { id: "no-u86l3-etjubileum", type: "vocab", front: "et jubileum", reading: "etjubileum", meaning: "anniversary", example: { jp: "Skolen har jubileum i år og feirer stort.", en: "The school has an anniversary this year and is celebrating." }, accept: ["a jubilee", "a centenary"], drill: { jp: "Skolen har et jubileum i år", en: "The school has an anniversary this year" }, hint: "et jubileum → jubileet, flertall jubileer. Merk den uvanlige bestemte formen. Om år som er runde: 50, 100." },
        { id: "no-u86l3-ainvitere", type: "vocab", front: "å invitere", reading: "ainvitere", meaning: "to invite", example: { jp: "De inviterte alle naboene til kaffe etterpå.", en: "They invited all the neighbours for coffee afterwards." }, accept: ["invite", "to ask (somebody over)"], drill: { jp: "Det er hyggelig å invitere naboene", en: "It is nice to invite the neighbours" }, hint: "å invitere → inviterer. Invitere noen TIL noe, men I et bryllup. En invitasjon er substantivet." },
        { id: "no-u86l3-enbrudgom", type: "vocab", front: "en brudgom", reading: "enbrudgom", meaning: "a bridegroom", example: { jp: "En brudgom venter utenfor kirka mens gjestene kommer.", en: "A bridegroom waits outside the church while the guests arrive." }, drill: { jp: "Hun så en brudgom i kirka", en: "She saw a bridegroom in the church" }, accept: ["a groom", "the man getting married"], hint: "BRUD-gom. Masculine: definite brudgommen, plural brudgommer — the m doubles. Ei brud plus gom, an old word for man. The pair together are brudeparet." },
      ],
    },
    {
      id: "no-u86l4",
      unit: 86,
      lesson: 4,
      title: "Norske skikker",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Understand four Norwegian things that do not translate — the dugnad, koselig, the russ, and an arrangement.",
      items: [
        { id: "no-u86l4-endugnad", type: "vocab", front: "en dugnad", reading: "endugnad", meaning: "communal work day", example: { jp: "Det er dugnad i borettslaget i mai hvert år.", en: "There's a communal work day in the housing cooperative in May every year." }, accept: ["voluntary work", "a working bee"], drill: { jp: "Vi har en dugnad i mai", en: "We have a communal work day in May" }, hint: "en dugnad → dugnaden. Alle møter opp og jobber gratis for fellesskapet. Ordet finnes ikke på engelsk, og å ikke møte blir lagt merke til." },
        { id: "no-u86l4-koselig", type: "vocab", front: "koselig", reading: "koselig", meaning: "cosy (pleasant)", example: { jp: "Det var veldig koselig hos dere i går kveld.", en: "It was very nice at your place last night." }, accept: ["nice", "pleasant", "snug"], drill: { jp: "Det var veldig koselig i går", en: "It was very nice yesterday" }, hint: "koselig → invariant, som alle -ig-ord. Brukes om alt hyggelig: folk, rom, kvelder, vær. Det norske ordet for hygge." },
        { id: "no-u86l4-russen", type: "vocab", front: "russen", reading: "russen", meaning: "graduating student (russ)", example: { jp: "Russen feirer i tre uker før de tar eksamen.", en: "The graduating students celebrate for three weeks before they take their exams." }, accept: ["a school leaver", "a final-year student"], drill: { jp: "Russen feirer i tre uker", en: "The graduating students celebrate for three weeks" }, hint: "russen — står alltid i bestemt form som kollektiv, som allemannsretten (u83). Røde bukser, egen buss, og feiringa kommer FØR eksamen." },
        { id: "no-u86l4-eifeiring", type: "vocab", front: "ei feiring", reading: "eifeiring", meaning: "celebration", example: { jp: "Feiringa varte til langt ut i natta.", en: "The celebration lasted far into the night." }, accept: ["festivities", "a celebration"], drill: { jp: "Det blir ei feiring i kveld", en: "There will be a celebration tonight" }, hint: "ei feiring → feiringa. -ing-ord er hunkjønn. Fra å feire (l1)." },
        { id: "no-u86l4-etarrangement", type: "vocab", front: "et arrangement", reading: "etarrangement", meaning: "an organised event", example: { jp: "Kommunen har et gratis arrangement for barn i parken.", en: "The municipality has a free event for children in the park." }, accept: ["an occasion", "a function", "event"], drill: { jp: "Kommunen har et arrangement i parken", en: "The municipality has an event in the park" }, hint: "et arrangement → arrangementet. Stum t til slutt, som i abonnement (u79). Å arrangere er verbet." },
        { id: "no-u86l4-eisamling", type: "vocab", front: "ei samling", reading: "eisamling", meaning: "gathering", example: { jp: "Vi har ei lita samling hjemme etter begravelsen.", en: "We're having a small gathering at home after the funeral." }, accept: ["a meeting", "a collection"], drill: { jp: "Vi har ei samling hjemme etterpå", en: "We are having a gathering at home afterwards" }, hint: "ei samling → samlinga. -ing-ord er hunkjønn. Fra å samle (u47). Betyr også a collection of things." },
      ],
    },
  ],
};
