// NO Unit 84 — Telefon og nett (slot: coverage-b1-11) — B1
// COVERAGE UNIT, block 3. Retitled from the scaffold's "Vocabulary 11 (B1)".
//
// u33 "Teknologi og kontakt" teaches the OBJECTS — en skjerm, ei fil, et passord,
// et tastatur, et program, en samtale, ei adresse — and u20 teaches ei melding
// and å ringe. What is missing is everything that happens when the technology
// misbehaves: et anrop, dekning, en lader, å lade, ei feilmelding, en kode.
// A learner can name a screen and cannot say "I have no signal".
//
// ⚠ RE-SCOPED ON MERGE DAY (2026-09-17). This unit and u75 "Nett og teknologi · 2"
// were built as the same unit by two different blocks — 8 shared fronts, and two
// lesson titles that were near-duplicates of u75's. Per RUNBOOK §6.3 a duplicated
// THEME moves whole to the unit whose title names it, so the INTERNET half went to
// u75 and this unit kept the TELEPHONE half. `å laste ned`, `å laste opp`, `å logge
// inn`, `et nettverk`, `å installere`, `ei innstilling`, `en svindel` and `en app`
// are therefore taught at u75, not here — earlier drafts of this header listed some
// of them as this unit's own. l3 was retitled "Når det ikke virker" (troubleshooting)
// and l4 "Sikkerhet på telefonen"; both were refilled to six cards.
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
        { id: "no-u84l1-aleggepa", type: "vocab", front: "å legge på", reading: "aleggepa", meaning: "to hang up (a phone)", example: { jp: "Hun la på uten å si noe.", en: "She hung up without saying anything." }, accept: ["to put the phone down", "to end the call", "to hang up"], drill: { jp: "Det er dumt å legge på sånn", en: "It is silly to hang up like that" }, hint: "å legge (u77) + på. Fra den tida røret ble lagt på gaffelen. Ikke å legge seg, to go to bed." },
        { id: "no-u84l1-dekning", type: "vocab", front: "dekning", reading: "dekning", meaning: "signal (coverage)", example: { jp: "Det er ingen dekning inne i fjellet her.", en: "There's no signal inside the mountains here." }, accept: ["reception", "network coverage"], drill: { jp: "Det er ingen dekning her", en: "There is no signal here" }, hint: "dekning → dekninga. -ing-ord er hunkjønn, men dette er massesubstantiv og står bart (regel 1b). Fra å dekke. Det vanligste å si på fjellet i Norge." },
        { id: "no-u84l1-ataste", type: "vocab", front: "å taste", reading: "ataste", meaning: "to key in", example: { jp: "Du må taste koden to ganger her.", en: "You have to key in the code twice here." }, accept: ["to type in", "to punch in", "to dial"], drill: { jp: "Husk å taste koden riktig", en: "Remember to key in the code correctly" }, hint: "å taste → taster, tastet. Fra et tastatur (u33). Å skrive (u18) er om tekst, å taste om tall og koder." },
        { id: "no-u84l1-aslaav", type: "vocab", front: "å slå av", reading: "aslaav", meaning: "to switch off", example: { jp: "Slå av telefonen før filmen begynner.", en: "Switch the phone off before the film starts." }, accept: ["to turn off", "to shut off"], drill: { jp: "Husk å slå av telefonen", en: "Remember to switch off the phone" }, hint: "å slå (u44) + av. Paret til å slå på. Å skru av (u48) betyr det samme og brukes like ofte." },
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
        { id: "no-u84l2-aslapa", type: "vocab", front: "å slå på", reading: "aslapa", meaning: "to switch on", example: { jp: "Slå på lyset, for jeg ser ingenting her inne.", en: "Switch the light on, because I can't see anything in here." }, accept: ["to turn on", "to start"], drill: { jp: "Husk å slå på lyset", en: "Remember to switch on the light" }, hint: "å slå (u44) + på. Paret til å slå av (l1). Å slå på betyr også 'to strike at' i andre sammenhenger." },
        { id: "no-u84l2-treg", type: "vocab", front: "treg", reading: "treg", meaning: "slow (sluggish)", example: { jp: "Telefonen er så treg at jeg vurderer en ny.", en: "The phone is so slow that I'm considering a new one." }, accept: ["sluggish", "slow-moving"], drill: { jp: "Telefonen er veldig treg", en: "The phone is very slow" }, hint: "treg → tregt, trege. Sein (om tid) er noe annet: en treg maskin, et seint tog. Også om folk som ikke skjønner." },
      ],
    },
    {
      id: "no-u84l3",
      unit: 84,
      lesson: 3,
      title: "Når det ikke virker",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get a phone working again — say it has frozen, read the error message, connect it, restart it or reset it.",
      items: [
        { id: "no-u84l3-eifeilmelding", type: "vocab", front: "ei feilmelding", reading: "eifeilmelding", meaning: "error message", example: { jp: "Det kom ei feilmelding som ingen forstår.", en: "An error message came up that nobody understands." }, accept: ["an error", "an error notice"], drill: { jp: "Det kom ei feilmelding igjen", en: "An error message came up again" }, hint: "ei feilmelding → feilmeldinga. En feil (u50) + ei melding (u20). -ing-ord er hunkjønn." },
        { id: "no-u84l3-astartepanytt", type: "vocab", front: "å starte på nytt", reading: "astartepanytt", meaning: "to restart", example: { jp: "Prøv å starte på nytt, for det hjelper ofte.", en: "Try restarting, because that often helps." }, accept: ["to reboot", "to start over"], drill: { jp: "Prøv å starte på nytt først", en: "Try restarting first" }, hint: "Å starte + på nytt (ny, u10). Det første alle spør om når noe ikke virker." },
        { id: "no-u84l3-afungere", type: "vocab", front: "å fungere", reading: "afungere", meaning: "to work (function)", example: { jp: "Telefonen fungerer ikke i dag.", en: "The phone does not work today." }, accept: ["to function", "to operate"], drill: { jp: "Telefonen ser ut til å fungere igjen", en: "The phone seems to be working again" }, hint: "å fungere → fungerer, fungerte. Om maskiner og ordninger. Om en person som jobber sier du å jobbe, ikke å fungere." },
        { id: "no-u84l3-ahengeseg", type: "vocab", front: "å henge seg", reading: "ahengeseg", meaning: "to freeze (crash)", example: { jp: "Telefonen hang seg, så jeg måtte starte på nytt.", en: "The phone froze, so I had to restart it." }, accept: ["to hang", "to crash", "to lock up"], drill: { jp: "Telefonen pleier å henge seg her", en: "The phone usually freezes here" }, hint: "å henge seg → henger seg, hang seg. Refleksivt: det er telefonen som henger SEG. ⚠ BARE om maskiner. Om et MENNESKE betyr å henge seg to hang oneself — si heller at noen er treg." },
        { id: "no-u84l3-atilbakestille", type: "vocab", front: "å tilbakestille", reading: "atilbakestille", meaning: "to reset", example: { jp: "Hvis ingenting hjelper, kan du tilbakestille telefonen helt.", en: "If nothing helps, you can reset the phone completely." }, accept: ["to factory reset", "to restore"], drill: { jp: "Du kan prøve å tilbakestille telefonen", en: "You can try to reset the phone" }, hint: "tilbake + å stille. Sterkere enn å starte på nytt: alt du har lagt inn blir borte, og alt blir som nytt." },
        { id: "no-u84l3-akobletil", type: "vocab", front: "å koble til", reading: "akobletil", meaning: "to connect", example: { jp: "Du må koble telefonen til laderen nå.", en: "You have to connect the phone to the charger now." }, accept: ["to plug in", "to hook up", "to attach"], drill: { jp: "Du må huske å koble til laderen", en: "You have to remember to connect the charger" }, hint: "å koble til → kobler til, koblet til. Motsatt: å koble fra. Om strøm, lader og nett." },
      ],
    },
    {
      id: "no-u84l4",
      unit: 84,
      lesson: 4,
      title: "Kode og svindel",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Keep a phone safe — unlock it with a code, install an update, block it if it is lost, and spot a suspicious message.",
      items: [
        { id: "no-u84l4-eioppdatering", type: "vocab", front: "ei oppdatering", reading: "eioppdatering", meaning: "update", example: { jp: "Ei stor oppdatering tar nesten en time på dette nettverket.", en: "A big update takes almost an hour on this network." }, accept: ["an upgrade", "a patch"], drill: { jp: "Det kom ei oppdatering i går", en: "An update came yesterday" }, hint: "ei oppdatering → oppdateringa. -ing-ord er hunkjønn. Fra å oppdatere (u48)." },
        { id: "no-u84l4-enkode", type: "vocab", front: "en kode", reading: "enkode", meaning: "code (PIN)", example: { jp: "Jeg glemte koden, og nå kan jeg ikke logge inn.", en: "I forgot the code, and now I cannot log in." }, accept: ["a PIN", "a passcode"], drill: { jp: "Du må taste en kode her", en: "You have to key in a code here" }, hint: "en kode → koden, flertall koder. Et passord (u33) er ord og tegn; en kode er som regel tall." },
        { id: "no-u84l4-astenge", type: "vocab", front: "å stenge", reading: "astenge", meaning: "to close (shut for the day)", example: { jp: "Butikken stenger klokka ni i dag.", en: "The shop closes at nine today." }, accept: ["to shut", "to shut off", "to close down"], drill: { jp: "Butikken pleier å stenge klokka ni", en: "The shop usually closes at nine" }, hint: "å stenge → stenger, stengte. Å lukke: en butikk stenger, en vei blir stengt. ⚠ IKKE å sperre i samme leksjon — det er å blokkere tilgangen til noe som er ditt." },
        { id: "no-u84l4-asperre", type: "vocab", front: "å sperre", reading: "asperre", meaning: "to block (bar)", example: { jp: "Jeg måtte sperre telefonen med en gang.", en: "I had to block the phone straight away." }, accept: ["to bar", "to disable", "to freeze (an account)"], drill: { jp: "Det er lurt å sperre telefonen", en: "It is wise to block the phone" }, hint: "å sperre → sperrer, sperret. Å stenge tilgangen til noe som er DITT, så ingen andre kan bruke det — telefonen, kontoen. Du gjør det selv eller ber banken gjøre det. ⚠ IKKE å stenge i samme leksjon — det er å lukke for dagen." },
        { id: "no-u84l4-alaseopp", type: "vocab", front: "å låse opp", reading: "alaseopp", meaning: "to unlock", example: { jp: "Du låser opp telefonen med koden din.", en: "You unlock the phone with your code." }, accept: ["to open (unlock)", "to unblock"], drill: { jp: "Du må huske å låse opp telefonen", en: "You have to remember to unlock the phone" }, hint: "å låse opp → låser opp, låste opp. Motsatt av å låse. Merk: opp, ikke av." },
        { id: "no-u84l4-mistenkelig", type: "vocab", front: "mistenkelig", reading: "mistenkelig", meaning: "suspicious", example: { jp: "Hvis ei melding ser mistenkelig ut, skal du ikke svare.", en: "If a message looks suspicious, you should not answer." }, accept: ["dodgy", "fishy", "suspect"], drill: { jp: "Meldinga ser mistenkelig ut", en: "The message looks suspicious" }, hint: "å mistenke + -lig. Om noe som ser ut som svindel. En PERSON som mistenker er mistenksom — ikke samme ord." },
      ],
    },
  ],
};
