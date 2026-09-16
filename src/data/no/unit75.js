// NO Unit 75 — Nett og teknologi · 2 ("Net and technology 2") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 2 (B1)" — a free slot, themed here per CLAUDE.md →
// "No front language", and NUMBERED · 2 because u33 "Teknologi og kontakt"
// carries the A2 version. Conventions are unit1.js §1–§9.
//
// ⚠ u33 OWNS THE BASICS AND NONE OF THEM ARE REPEATED: et nett, en datamaskin,
// en skjerm, ei side, et passord, ei lenke, et program, ei fil, å lagre,
// å slette, ei mus, et tastatur, en epost, et nummer, ei adresse, et brev,
// en samtale, å dele, et innlegg, et tegn. This unit is the layer a B1 learner
// actually needs to live in Norway, where nearly everything public is digital:
// logging in, uploading, backups, privacy, consent, and the fraud warnings every
// Norwegian bank sends.
//
// ⚠ LEXEME PAIRS AVOIDED: å svindle (en svindel, same lesson) · et søk
// (å søke u24) · ei oppdatering (å oppdatere u48) · å bruke/en bruker (u17) ·
// ei tjeneste (å tjene u24). Where the corpus already has one member, this unit
// takes the other, once, or leaves it alone.
// ⚠ `kunstig` is a KNOWN NEAR-MISS and is authored deliberately: it is derived
// from en kunst (u35) but is a separate adjective with an unrelated everyday
// meaning ("artificial", never "artistic"). Flagged here so the merge seat does
// not read it as an accidental duplicate.
//
// GENDER: ei nettside · ei mappe · ei opplysning · ei innstilling are feminine;
// ⚠ en sikkerhetskopi is MASCULINE (en kopi), even though en sikkerhet inside it
// is a -het — both halves land on masculine anyway. et nettverk, et varsel,
// et vedlegg, et personvern, et samtykke, et verktøy, et system are neuter.
// FIRST FEMININE is `ei nettside` (l1) and carries the en-/ei- note §1 wants.
//
// SCOPE: frozen base u1–u50 plus u63–u74 plus this unit's earlier cards.
// LAST UNIT OF BLOCK 2.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT75 = {
  id: "no-u75",
  lang: "no",
  title: "Nett og teknologi · 2",
  order: 75,
  stage: "b1",
  lessons: [
    // Lesson 1: getting online and staying there.
    {
      id: "no-u75l1",
      unit: 75,
      lesson: 1,
      title: "På nettet",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Find your way around a Norwegian website — log in, read a notification, say what is wrong with the connection.",
      items: [
        { id: "no-u75l1-nettside", type: "vocab", front: "ei nettside", reading: "einettside", meaning: "a website", example: { jp: "Nettsida til kommunen er ny og grei.", en: "The municipality's website is new and straightforward." }, accept: ["website", "web page", "site"], drill: { jp: "Kommunen har ei nettside som er ny", en: "The municipality has a website that is new" }, hint: "et nett (u33) + ei side (u33). Feminine: nettsida — print also writes nettsiden. This course marks ei so the definite -a stays predictable." },
        { id: "no-u75l1-nettverk", type: "vocab", front: "et nettverk", reading: "etnettverk", meaning: "a network", example: { jp: "Nettverket på skolen er dårlig i dag.", en: "The network at school is bad today." }, accept: ["network", "wifi", "connection"], drill: { jp: "Skolen har et nettverk som er dårlig", en: "The school has a network that is bad" }, hint: "et nett + et verk. Neuter: nettverket. Both the wifi and the people you know — et godt nettverk means contacts, exactly as in English." },
        { id: "no-u75l1-app", type: "vocab", front: "en app", reading: "enapp", meaning: "an app", example: { jp: "Appen viser når bussen kommer.", en: "The app shows when the bus is coming." }, accept: ["app", "application"], drill: { jp: "Vi bruker en app hver dag", en: "We use an app every day" }, hint: "Masculine: appen, flere apper. A completely ordinary Norwegian noun now, said with a Norwegian a." },
        { id: "no-u75l1-loggeinn", type: "vocab", front: "å logge inn", reading: "aloggeinn", meaning: "to log in", example: { jp: "Du må logge inn med passordet.", en: "You have to log in with the password." }, accept: ["log in", "to sign in", "to log on"], drill: { jp: "Det er lett å logge inn her", en: "It is easy to log in here" }, hint: "English \"log in\" with a Norwegian particle: logger inn, logget inn. The opposite is å logge ut, and the particle never moves." },
        { id: "no-u75l1-nettleser", type: "vocab", front: "en nettleser", reading: "ennettleser", meaning: "a browser", example: { jp: "Nettleseren åpner sida med det samme.", en: "The browser opens the page right away." }, accept: ["browser", "web browser"], drill: { jp: "Vi bruker en nettleser hver dag", en: "We use a browser every day" }, hint: "et nett + en leser, from å lese (u18) — literally a net-reader. Masculine: nettleseren." },
        { id: "no-u75l1-varsel", type: "vocab", front: "et varsel", reading: "etvarsel", meaning: "a notification", example: { jp: "Telefonen ga et varsel om uvær.", en: "The phone gave a warning about a storm." }, accept: ["notification", "alert", "warning"], drill: { jp: "Telefonen ga et varsel om uvær", en: "The phone gave a warning about a storm" }, hint: "From å varsle (u43). Neuter: varselet, flere varsler. One word covers the phone notification and the storm warning on the radio." },
      ],
    },
    // Lesson 2: files.
    {
      id: "no-u75l2",
      unit: 75,
      lesson: 2,
      title: "Filer og lagring",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Move files around — download, upload, attach, install and back up.",
      items: [
        { id: "no-u75l2-mappe", type: "vocab", front: "ei mappe", reading: "eimappe", meaning: "a folder", example: { jp: "Bildene ligger i ei mappe på nettet.", en: "The pictures are in a folder online." }, accept: ["folder", "directory", "file (cardboard)"], drill: { jp: "Bildene ligger i ei mappe", en: "The pictures are in a folder" }, hint: "Feminine: mappa. The same word for the folder on a screen and the cardboard one on a desk." },
        { id: "no-u75l2-lastened", type: "vocab", front: "å laste ned", reading: "alastened", meaning: "to download", example: { jp: "Jeg lastet ned fila i går.", en: "I downloaded the file yesterday." }, accept: ["download"], drill: { jp: "Det er lett å laste ned ei fil", en: "It is easy to download a file" }, hint: "å laste (to load) + ned (u13). laster ned, lastet ned — and the particle stays put." },
        { id: "no-u75l2-lasteopp", type: "vocab", front: "å laste opp", reading: "alasteopp", meaning: "to upload", example: { jp: "Han lastet opp bildene fra turen.", en: "He uploaded the pictures from the trip." }, accept: ["upload"], drill: { jp: "Det er lett å laste opp bilder", en: "It is easy to upload pictures" }, hint: "The mirror of the last card, with opp (u13). The ned/opp pair works exactly as English down/up does here." },
        { id: "no-u75l2-installere", type: "vocab", front: "å installere", reading: "ainstallere", meaning: "to install", example: { jp: "Vi installerer programmet på alle maskinene.", en: "We install the program on all the machines." }, accept: ["install", "to set up"], drill: { jp: "Vi pleier å installere programmet her", en: "We usually install the program here" }, hint: "installerer, installerte — another regular -ere verb. Norwegian uses it for software and for a dishwasher alike." },
        { id: "no-u75l2-vedlegg", type: "vocab", front: "et vedlegg", reading: "etvedlegg", meaning: "an attachment", example: { jp: "Eposten hadde et vedlegg på ti sider.", en: "The e-mail had a ten-page attachment." }, accept: ["attachment", "enclosure", "appendix"], drill: { jp: "Eposten hadde et vedlegg på ti sider", en: "The e-mail had a ten-page attachment" }, hint: "ved + å legge — the same ved- as vedlagt (u72), which is this word as an adjective. Neuter and unchanged in the plural: et vedlegg, vedlegget." },
        { id: "no-u75l2-sikkerhetskopi", type: "vocab", front: "en sikkerhetskopi", reading: "ensikkerhetskopi", meaning: "a backup", example: { jp: "Han tok en sikkerhetskopi av alle filene.", en: "He took a backup of all the files." }, accept: ["backup", "backup copy"], drill: { jp: "Han tok en sikkerhetskopi i går", en: "He took a backup yesterday" }, hint: "en sikkerhet (sikker, u22, + the masculine -het from u71) + en kopi. ⚠ Masculine: sikkerhetskopien — a compound takes the gender of its LAST part, and kopi is masculine." },
      ],
    },
    // Lesson 3: the half of Norwegian digital life that is about being careful.
    {
      id: "no-u75l3",
      unit: 75,
      lesson: 3,
      title: "Personvern og svindel",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle your own data safely — consent, settings, and spotting a scam message.",
      items: [
        { id: "no-u75l3-personvern", type: "vocab", front: "et personvern", reading: "etpersonvern", meaning: "a data protection", example: { jp: "Personvernet er viktig når du deler noe på nettet.", en: "Data protection matters when you share something online." }, accept: ["data protection", "privacy"], drill: { jp: "Loven gir oss et personvern", en: "The law gives us a data protection" }, hint: "en person + et vern (u65). Neuter: personvernet. The Norwegian word for privacy in the legal sense, and it is in the news constantly." },
        { id: "no-u75l3-opplysning", type: "vocab", front: "ei opplysning", reading: "eiopplysning", meaning: "a piece of information", example: { jp: "De ba om opplysninger om saken.", en: "They asked for information about the case." }, accept: ["information", "detail", "data"], drill: { jp: "De ba om ei opplysning til", en: "They asked for one more piece of information" }, hint: "å opplyse (u72) + -ning → feminine: opplysninga. ⚠ In the plural it simply means \"information\" — personopplysninger is what the personvern law protects." },
        { id: "no-u75l3-svindel", type: "vocab", front: "en svindel", reading: "ensvindel", meaning: "a fraud", example: { jp: "Meldinga var en svindel, ikke en regning.", en: "The message was a fraud, not a bill." }, accept: ["fraud", "scam", "swindle"], drill: { jp: "Meldinga var en svindel fra nettet", en: "The message was a fraud from the internet" }, hint: "Masculine: svindelen. The verb å svindle exists but is not taught separately — one word, one mastery track. Norwegian banks warn about svindel on every page." },
        { id: "no-u75l3-blokkere", type: "vocab", front: "å blokkere", reading: "ablokkere", meaning: "to block", example: { jp: "Hun blokkerte nummeret etter meldinga.", en: "She blocked the number after the message." }, accept: ["block", "to bar"], drill: { jp: "Det er lett å blokkere et nummer", en: "It is easy to block a number" }, hint: "blokkerer, blokkerte. For phone numbers, people and roads alike — veien er blokkert." },
        { id: "no-u75l3-innstilling", type: "vocab", front: "ei innstilling", reading: "eiinnstilling", meaning: "a setting", example: { jp: "Innstillingene på telefonen er lette å finne.", en: "The settings on the phone are easy to find." }, accept: ["setting", "attitude", "configuration"], drill: { jp: "Du finner ei innstilling på telefonen", en: "You will find a setting on the phone" }, hint: "inn + å stille + -ing → feminine: innstillinga. It also means an attitude — ei god innstilling til arbeid — and ei holdning (u50) is its close cousin." },
        { id: "no-u75l3-samtykke", type: "vocab", front: "et samtykke", reading: "etsamtykke", meaning: "a consent", example: { jp: "Ingen kan dele bildet uten et samtykke.", en: "Nobody can share the picture without consent." }, accept: ["consent", "permission", "agreement"], drill: { jp: "Ingen kan dele bildet uten et samtykke", en: "Nobody can share the picture without consent" }, hint: "sam- (together) + å tykke, an old verb for \"to think\". Neuter: samtykket. The legal word you click past on every website in Norway." },
      ],
    },
    // Lesson 4: what the machines are doing now.
    {
      id: "no-u75l4",
      unit: 75,
      lesson: 4,
      title: "Digitale verktøy",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about digital tools and what they are replacing.",
      items: [
        { id: "no-u75l4-digital", type: "vocab", front: "digital", reading: "digital", meaning: "digital", example: { jp: "Alt er digitalt i Norge nå.", en: "Everything is digital in Norway now." }, accept: ["electronic", "online"], drill: { jp: "Vi trenger en digital løsning", en: "We need a digital solution" }, hint: "Neuter digitalt, plural digitale. Norway is further down this road than most countries — digitalt is the default and paper is the exception." },
        { id: "no-u75l4-verktoy", type: "vocab", front: "et verktøy", reading: "etverktoy", meaning: "a tool", example: { jp: "Dette programmet er et godt verktøy.", en: "This program is a good tool." }, accept: ["tool", "instrument", "tools"], drill: { jp: "Dette er et verktøy vi bruker", en: "This is a tool we use" }, hint: "et verk + tøy (stuff, material). Neuter and unchanged in the plural: et verktøy, verktøyet, flere verktøy. The hammer and the software share the word." },
        { id: "no-u75l4-robot", type: "vocab", front: "en robot", reading: "enrobot", meaning: "a robot", example: { jp: "En robot gjør arbeidet på en time.", en: "A robot does the work in an hour." }, accept: ["robot", "machine"], drill: { jp: "En robot gjør arbeidet på en time", en: "A robot does the work in an hour" }, hint: "Masculine: roboten. Said ro-BOT, with the stress at the end." },
        { id: "no-u75l4-erstatte", type: "vocab", front: "å erstatte", reading: "aerstatte", meaning: "to replace", example: { jp: "Maskiner erstatter mange gamle yrker.", en: "Machines are replacing many old trades." }, accept: ["replace", "to substitute", "to compensate"], drill: { jp: "Det er lett å erstatte et ord", en: "It is easy to replace a word" }, hint: "erstatter, erstattet. It takes med: erstatte noe med noe annet. The noun en erstatning means compensation as well as a replacement." },
        { id: "no-u75l4-system", type: "vocab", front: "et system", reading: "etsystem", meaning: "a system", example: { jp: "Systemet på skolen er nytt i år.", en: "The system at school is new this year." }, accept: ["system", "scheme", "setup"], drill: { jp: "Skolen har et system som er nytt", en: "The school has a system that is new" }, hint: "Neuter: systemet, flere systemer. Said sys-TEM." },
        { id: "no-u75l4-kunstig", type: "vocab", front: "kunstig", reading: "kunstig", meaning: "artificial", example: { jp: "Kunstig lys er ikke det samme som sol.", en: "Artificial light is not the same as sunlight." }, accept: ["man-made", "synthetic", "fake"], drill: { jp: "Kunstig lys er ikke sol", en: "Artificial light is not sunlight" }, hint: "en kunst (u35) + -ig — made by art rather than grown. ⚠ It never means \"artistic\". -ig, so no -t in the neuter: et kunstig språk. Kunstig intelligens is the phrase you will now meet daily." },
      ],
    },
  ],
};
