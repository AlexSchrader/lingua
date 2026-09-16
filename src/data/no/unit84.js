// NO Unit 84 — Telefon og nett (slot: coverage-b1-11) — B1
// COVERAGE UNIT, block 3. Retitled from the scaffold's "Vocabulary 11 (B1)".
//
// u33 "Teknologi og kontakt" teaches the OBJECTS — en skjerm, ei fil, et passord,
// et tastatur, et program, en samtale, ei adresse — and u20 teaches ei melding
// and å ringe. What is missing is everything that happens when the technology
// misbehaves or costs money: et anrop, ei dekning, en lader, å lade, å laste ned,
// å logge inn, ei feilmelding, en svindel. A learner can name a screen and cannot
// say "I have no signal".
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT84 = {
  id: "no-u84",
  lang: "no",
  title: "Telefon og nett",
  order: 84,
  stage: "b1",
  lessons: [
    {
      id: "no-u84l1",
      unit: 84,
      lesson: 1,
      title: "Å ringe",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Make and end a call, and say why it did not get through.",
      items: [
        { id: "no-u84l1-etanrop", type: "vocab", front: "et anrop", reading: "etanrop", meaning: "call (incoming)", example: { jp: "Jeg hadde tre anrop fra et nummer jeg ikke kjenner.", en: "I had three calls from a number I don't know." }, accept: ["a phone call", "a ring"], drill: { jp: "Jeg fikk et anrop fra banken", en: "I got a call from the bank" }, hint: "et anrop → anropet, flertall anrop. An + å rope, to shout. En samtale (u33) er praten; et anrop er selve ringinga." },
        { id: "no-u84l1-aringeopp", type: "vocab", front: "å ringe opp", reading: "aringeopp", meaning: "to call back (ring up)", example: { jp: "Jeg skal ringe opp igjen når jeg er hjemme.", en: "I'll ring back again when I'm at home." }, accept: ["to ring up", "to phone"], drill: { jp: "Jeg lovte å ringe opp i kveld", en: "I promised to ring up tonight" }, hint: "å ringe (u17) + opp. Partikkelen betyr at du tar initiativet. Å ringe tilbake er svaret på et tapt anrop." },
        { id: "no-u84l1-aleggepa", type: "vocab", front: "å legge på", reading: "aleggepa", meaning: "to hang up", example: { jp: "Hun la på uten å si noe.", en: "She hung up without saying anything." }, accept: ["to put the phone down", "to end the call"], drill: { jp: "Det er dumt å legge på sånn", en: "It is silly to hang up like that" }, hint: "å legge (u77) + på. Fra den tida røret ble lagt på gaffelen. Ikke å legge seg, to go to bed." },
        { id: "no-u84l1-dekning", type: "vocab", front: "dekning", reading: "dekning", meaning: "signal (coverage)", example: { jp: "Det er ingen dekning inne i fjellet her.", en: "There's no signal inside the mountains here." }, accept: ["reception", "network coverage"], drill: { jp: "Det er ingen dekning her", en: "There is no signal here" }, hint: "dekning → dekninga. -ing-ord er hunkjønn, men dette er massesubstantiv og står bart (regel 1b). Fra å dekke. Det vanligste å si på fjellet i Norge." },
        { id: "no-u84l1-ataste", type: "vocab", front: "å taste", reading: "ataste", meaning: "to key in", example: { jp: "Du må taste koden to ganger her.", en: "You have to key in the code twice here." }, accept: ["to type in", "to punch in", "to dial"], drill: { jp: "Husk å taste koden riktig", en: "Remember to key in the code correctly" }, hint: "å taste → taster, tastet. Fra et tastatur (u33). Å skrive (u18) er om tekst, å taste om tall og koder." },
        { id: "no-u84l1-aslaav", type: "vocab", front: "å slå av", reading: "aslaav", meaning: "to switch off", example: { jp: "Slå av telefonen før filmen begynner.", en: "Switch the phone off before the film starts." }, accept: ["to turn off", "to shut off"], drill: { jp: "Husk å slå av telefonen", en: "Remember to switch off the phone" }, hint: "å slå (u13) + av. Paret til å slå på. Å skru av (u48) betyr det samme og brukes like ofte." },
      ],
    },
    {
      id: "no-u84l2",
      unit: 84,
      lesson: 2,
      title: "Telefonen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Keep a phone alive — the battery, the charger, the apps, and what to do when it is slow.",
      items: [
        { id: "no-u84l2-etbatteri", type: "vocab", front: "et batteri", reading: "etbatteri", meaning: "battery", example: { jp: "Batteriet holder ikke en hel dag lenger.", en: "The battery doesn't last a whole day any more." }, accept: ["a cell"], drill: { jp: "Vi trenger et batteri til dette", en: "We need a battery for this" }, hint: "et batteri → batteriet, flertall batterier. Trykket på siste stavelse: batte-RI." },
        { id: "no-u84l2-enlader", type: "vocab", front: "en lader", reading: "enlader", meaning: "charger", example: { jp: "Har du en lader jeg kan låne en time?", en: "Do you have a charger I can borrow for an hour?" }, accept: ["a power adapter"], drill: { jp: "Har du en lader jeg kan låne", en: "Do you have a charger I can borrow" }, hint: "en lader → laderen, flertall ladere. Fra å lade. En ladestasjon er for elbiler, som er over alt her." },
        { id: "no-u84l2-alade", type: "vocab", front: "å lade", reading: "alade", meaning: "to charge", example: { jp: "Jeg må lade telefonen før vi drar på tur.", en: "I have to charge the phone before we go on the trip." }, accept: ["to recharge", "charge"], drill: { jp: "Det er lurt å lade i kveld", en: "It is sensible to charge tonight" }, hint: "å lade → lader, ladet. Om batteri og bil. Ikke det samme som å laste (neste leksjon), to load." },
        { id: "no-u84l2-enapp", type: "vocab", front: "en app", reading: "enapp", meaning: "app", example: { jp: "Kommunen har en app for alt du trenger å melde fra om.", en: "The municipality has an app for everything you need to report." }, accept: ["an application"], drill: { jp: "Kommunen har en app for dette", en: "The municipality has an app for this" }, hint: "en app → appen, flertall apper. Lånord, helt innarbeidet. Uttales som på engelsk." },
        { id: "no-u84l2-aslapa", type: "vocab", front: "å slå på", reading: "aslapa", meaning: "to switch on", example: { jp: "Slå på lyset, for jeg ser ingenting her inne.", en: "Switch the light on, because I can't see anything in here." }, accept: ["to turn on", "to start"], drill: { jp: "Husk å slå på lyset", en: "Remember to switch on the light" }, hint: "å slå (u13) + på. Paret til å slå av (l1). Å slå på betyr også 'to strike at' i andre sammenhenger." },
        { id: "no-u84l2-treg", type: "vocab", front: "treg", reading: "treg", meaning: "slow (sluggish)", example: { jp: "Telefonen er så treg at jeg vurderer en ny.", en: "The phone is so slow that I'm considering a new one." }, accept: ["sluggish", "slow-moving"], drill: { jp: "Telefonen er veldig treg", en: "The phone is very slow" }, hint: "treg → tregt, trege. Sein (om tid) er noe annet: en treg maskin, et seint tog. Også om folk som ikke skjønner." },
      ],
    },
    {
      id: "no-u84l3",
      unit: 84,
      lesson: 3,
      title: "På nett",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Download, upload, log in — and read the error message when it fails.",
      items: [
        { id: "no-u84l3-alastened", type: "vocab", front: "å laste ned", reading: "alastened", meaning: "to download", example: { jp: "Du må laste ned appen før du kan logge inn.", en: "You have to download the app before you can log in." }, accept: ["download", "to get (a file)"], drill: { jp: "Husk å laste ned appen først", en: "Remember to download the app first" }, hint: "å laste (to load) + ned. Paret til å laste opp. Partikkelen er retningen filen går." },
        { id: "no-u84l3-alasteopp", type: "vocab", front: "å laste opp", reading: "alasteopp", meaning: "to upload", example: { jp: "Jeg lastet opp alle vedleggene i går kveld.", en: "I uploaded all the attachments last night." }, accept: ["upload", "to put up (a file)"], drill: { jp: "Det tar tid å laste opp alt", en: "It takes time to upload everything" }, hint: "Motsatt av å laste ned. Et vedlegg (u78) lastes opp i et skjema." },
        { id: "no-u84l3-etnettverk", type: "vocab", front: "et nettverk", reading: "etnettverk", meaning: "network", example: { jp: "Kafeen har et nettverk du kan bruke gratis.", en: "The café has a network you can use for free." }, accept: ["a net", "a wifi network"], drill: { jp: "Kafeen har et nettverk du kan bruke", en: "The café has a network you can use" }, hint: "et nettverk → nettverket, flertall nettverk. Et nett + et verk. Også om folk: et godt nettverk hjelper deg med jobb." },
        { id: "no-u84l3-aloggeinn", type: "vocab", front: "å logge inn", reading: "aloggeinn", meaning: "to log in", example: { jp: "Du kan ikke logge inn uten personnummeret ditt.", en: "You can't log in without your national ID number." }, accept: ["to sign in", "log in"], drill: { jp: "Det er lett å logge inn her", en: "It is easy to log in here" }, hint: "å logge inn → logger inn, logget inn. Å logge ut er motsatt. Nesten alt offentlig i Norge krever det." },
        { id: "no-u84l3-eifeilmelding", type: "vocab", front: "ei feilmelding", reading: "eifeilmelding", meaning: "error message", example: { jp: "Det kom ei feilmelding som ingen forstår.", en: "An error message came up that nobody understands." }, accept: ["an error", "an error notice"], drill: { jp: "Det kom ei feilmelding igjen", en: "An error message came up again" }, hint: "ei feilmelding → feilmeldinga. En feil (u50) + ei melding (u20). -ing-ord er hunkjønn." },
        { id: "no-u84l3-astartepanytt", type: "vocab", front: "å starte på nytt", reading: "astartepanytt", meaning: "to restart", example: { jp: "Prøv å starte på nytt, for det hjelper ofte.", en: "Try restarting, because that often helps." }, accept: ["to reboot", "to start over"], drill: { jp: "Prøv å starte på nytt først", en: "Try restarting first" }, hint: "Å starte + på nytt (ny, u10). Det første alle spør om når noe ikke virker." },
      ],
    },
    {
      id: "no-u84l4",
      unit: 84,
      lesson: 4,
      title: "Innstillinger og svindel",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Change a setting, install an update, and recognise a scam.",
      items: [
        { id: "no-u84l4-eioppdatering", type: "vocab", front: "ei oppdatering", reading: "eioppdatering", meaning: "update", example: { jp: "Ei stor oppdatering tar nesten en time på dette nettverket.", en: "A big update takes almost an hour on this network." }, accept: ["an upgrade", "a patch"], drill: { jp: "Det kom ei oppdatering i går", en: "An update came yesterday" }, hint: "ei oppdatering → oppdateringa. -ing-ord er hunkjønn. Fra å oppdatere (u48)." },
        { id: "no-u84l4-ainstallere", type: "vocab", front: "å installere", reading: "ainstallere", meaning: "to install", example: { jp: "Vi måtte installere hele programmet en gang til.", en: "We had to install the whole program one more time." }, accept: ["to set up", "install"], drill: { jp: "Det tar tid å installere alt", en: "It takes time to install everything" }, hint: "å installere → installerer. Både om et program og om en vaskemaskin. En installasjon er jobben." },
        { id: "no-u84l4-eiinnstilling", type: "vocab", front: "ei innstilling", reading: "eiinnstilling", meaning: "setting", example: { jp: "Du finner denne innstillinga inne i appen.", en: "You'll find this setting inside the app." }, accept: ["a configuration", "an attitude"], drill: { jp: "Vi fant ei innstilling som hjalp", en: "We found a setting that helped" }, hint: "ei innstilling → innstillinga. -ing-ord er hunkjønn. Betyr også 'an attitude': han har ei god innstilling." },
        { id: "no-u84l4-enkode", type: "vocab", front: "en kode", reading: "enkode", meaning: "code (PIN)", example: { jp: "Jeg glemte koden, og nå kan jeg ikke bruke kortet.", en: "I forgot the code, and now I cannot use the card." }, accept: ["a PIN", "a passcode"], drill: { jp: "Du må taste en kode her", en: "You have to key in a code here" }, hint: "en kode → koden, flertall koder. Et passord (u33) er ord og tegn; en kode er som regel tall." },
        { id: "no-u84l4-ensvindel", type: "vocab", front: "en svindel", reading: "ensvindel", meaning: "scam (fraud)", example: { jp: "Det var en svindel, og banken ringte meg med en gang.", en: "It was a scam, and the bank called me immediately." }, accept: ["a fraud", "a con"], drill: { jp: "Det var en svindel", en: "It was a scam" }, hint: "en svindel → svindelen. Å svindle er verbet, en svindler er personen. Ingen seriøs bank spør om koden din." },
        { id: "no-u84l4-astenge", type: "vocab", front: "å stenge", reading: "astenge", meaning: "to close (shut off)", example: { jp: "Banken stengte kortet før noen rakk å bruke det.", en: "The bank closed the card before anybody managed to use it." }, accept: ["to shut", "to block", "to close down"], drill: { jp: "Det er lurt å stenge kortet nå", en: "It is sensible to block the card now" }, hint: "å stenge → stenger, stengte. Butikken stenger klokka sju; banken stenger et kort. Å lukke (u16) er om ei dør." },
      ],
    },
  ],
};
