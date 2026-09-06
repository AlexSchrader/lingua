// DE Unit 33 — Technik und Kommunikation (slot: technology) — A2
// Block 2 (u31–u40). Conventions: see de/unit1.js.
//
// SEPARABLE VERBS ARE DRILLABLE HERE, and this is the first unit in German where
// that is true. herunterladen and anrufen split in a finite main clause (ich lade
// herunter, ich rufe an), so their infinitive never surfaces — which is why seven
// A1 items have no drill at all. This unit has modals (u20) and u29's subordinators,
// so both drills use a modal and the front stands whole: "Ich will die Datei
// herunterladen". Same trick is available to every later block.
// FREE: Fotos, Geräte, Tasten
//   Plurals of this unit's own fronts (and of the A1 free cognate Foto) that its
//   examples use. Declared per the unit1.js rule: nothing folds a German plural.
// die E-Mail was deliberately NOT taught: the hyphen cannot survive the reading
// contract ([a-z]+) and hand-folding it to "dieemail" would mark a learner wrong for
// typing the correct spelling. das Netz and die Nachricht cover the ground instead.
export const DE_UNIT33 = {
  id: "de-u33",
  lang: "de",
  title: "Technik und Kommunikation",
  order: 33,
  stage: "a2",
  lessons: [
    {
      id: "de-u33l1",
      unit: 33,
      lesson: 1,
      title: "Geräte",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the device in front of you and its parts — phone, screen, key, battery, camera.",
      items: [
        { id: "de-u33l1-dashandy", type: "vocab", front: "das Handy", reading: "dashandy", meaning: "mobile phone", example: { jp: "Mein Handy ist alt, aber es funktioniert noch.", en: "My phone is old, but it still works." }, drill: { jp: "Das Handy liegt auf dem Tisch", en: "The phone is lying on the table" }, accept: ["mobile phone", "mobile", "cell phone", "phone"], hint: "A German invention that looks English: no English speaker calls a phone a handy. HEN-dee, and it is neuter — das Handy." },
        { id: "de-u33l1-derbildschirm", type: "vocab", front: "der Bildschirm", reading: "derbildschirm", meaning: "screen", example: { jp: "Der Bildschirm ist zu hell, deshalb sehe ich nichts.", en: "The screen is too bright, therefore I cannot see anything." }, drill: { jp: "Der Bildschirm ist sehr groß", en: "The screen is very big" }, accept: ["screen", "monitor", "display"], hint: "das Bild (u15) plus der Schirm, a shield or umbrella — a picture-shield. The last piece sets the gender, so it is der." },
        { id: "de-u33l1-dietaste", type: "vocab", front: "die Taste", reading: "dietaste", meaning: "key / button", example: { jp: "Die Taste ist kaputt, weil ich zu oft tippe.", en: "The key is broken because I type too often." }, drill: { jp: "Die Taste hier ist kaputt", en: "The key here is broken" }, accept: ["key", "button"], hint: "The key you press on a keyboard or a machine. Not der Schlüssel (u15), which is the key that opens a door — German keeps the two quite separate." },
        { id: "de-u33l1-dasgeraet", type: "vocab", front: "das Gerät", reading: "dasgerat", meaning: "device / appliance", example: { jp: "Das Gerät ist neu, aber niemand versteht es.", en: "The device is new, but nobody understands it." }, drill: { jp: "Das Gerät kostet sehr viel", en: "The device costs a great deal" }, accept: ["device", "appliance", "machine", "gadget"], hint: "The general word for any machine you operate — a phone, a drill, a washing machine. ge-RÄT, stress at the end." },
        { id: "de-u33l1-derakku", type: "vocab", front: "der Akku", reading: "derakku", meaning: "battery (rechargeable)", example: { jp: "Der Akku ist leer, deshalb kann ich nicht anrufen.", en: "The battery is flat, therefore I cannot call." }, drill: { jp: "Der Akku ist heute leer", en: "The battery is flat today" }, accept: ["battery", "rechargeable battery"], hint: "Short for Akkumulator. It is the one you recharge; a throwaway battery is die Batterie, and Germans do not mix them up." },
        { id: "de-u33l1-diekamera", type: "vocab", front: "die Kamera", reading: "diekamera", meaning: "camera", example: { jp: "Die Kamera von dem Handy macht gute Fotos.", en: "The phone's camera takes good photos." }, drill: { jp: "Die Kamera macht gute Fotos", en: "The camera takes good photos" }, accept: ["camera"], hint: "KA-me-ra, stress at the front. German says ein Foto machen, to make a photo, where English takes one." },
      ],
    },
    {
      id: "de-u33l2",
      unit: 33,
      lesson: 2,
      title: "Im Internet",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Do the four things you do online: open a page, use an app, download a file, save it.",
      items: [
        { id: "de-u33l2-dasinternet", type: "vocab", front: "das Internet", reading: "dasinternet", meaning: "the internet", example: { jp: "Im Internet finde ich, was ich suche.", en: "On the internet I find what I am looking for." }, drill: { jp: "Das Internet ist heute schlecht", en: "The internet is bad today" }, accept: ["internet", "the internet", "the net"], hint: "Always with the article and always im, not auf: im Internet, on the internet. IN-ter-net, stress at the front." },
        { id: "de-u33l2-dieseite", type: "vocab", front: "die Seite", reading: "dieseite", meaning: "page / site", example: { jp: "Die Seite ist neu, deshalb finde ich sie nicht.", en: "The site is new, therefore I cannot find it." }, drill: { jp: "Die Seite ist nicht gut", en: "The page is not good" }, accept: ["page", "site", "website", "side"], hint: "One word for a page of a book, a website, and a side of anything. Do not confuse it with seit (u14), since — no e on the end." },
        { id: "de-u33l2-dieapp", type: "vocab", front: "die App", reading: "dieapp", meaning: "app", example: { jp: "Die App ist gut, obwohl sie viel Geld kostet.", en: "The app is good, although it costs a lot of money." }, drill: { jp: "Die App funktioniert heute nicht", en: "The app is not working today" }, accept: ["app", "application"], hint: "Said the English way, EPP, and feminine because die Applikation is. One of the newest words in the language." },
        { id: "de-u33l2-herunterladen", type: "vocab", front: "herunterladen", reading: "herunterladen", meaning: "to download", example: { jp: "Ich möchte die Datei herunterladen, bevor ich gehe.", en: "I would like to download the file before I leave." }, drill: { jp: "Ich will die Datei herunterladen", en: "I want to download the file" }, accept: ["to download", "download"], hint: "A separable verb: in a normal sentence it breaks apart — ich lade die Datei herunter. It only stands whole after a modal, which is exactly what the drill does." },
        { id: "de-u33l2-speichern", type: "vocab", front: "speichern", reading: "speichern", meaning: "to save (a file)", example: { jp: "Du musst die Datei speichern, sonst ist sie weg.", en: "You have to save the file, otherwise it is gone." }, drill: { jp: "Wir speichern die Datei jetzt", en: "We are saving the file now" }, accept: ["to save", "to store", "save"], hint: "From der Speicher, a storehouse or attic. Not to be confused with sparen, to save money — German uses two different verbs." },
        { id: "de-u33l2-diedatei", type: "vocab", front: "die Datei", reading: "diedatei", meaning: "file", example: { jp: "Die Datei ist zu groß für das Handy.", en: "The file is too big for the phone." }, drill: { jp: "Die Datei ist sehr groß", en: "The file is very big" }, accept: ["file", "computer file"], hint: "da-TIE, stress at the end, built from Daten plus the ending of Kartei. It is the file on a computer, never a paper folder." },
      ],
    },
    {
      id: "de-u33l3",
      unit: 33,
      lesson: 3,
      title: "Nachrichten schicken",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Send a message, ring someone, type, and delete what you did not mean to send.",
      items: [
        { id: "de-u33l3-dienachricht", type: "vocab", front: "die Nachricht", reading: "dienachricht", meaning: "message", example: { jp: "Ich lese eine Nachricht, während ich arbeite.", en: "I read a message while I am working." }, drill: { jp: "Die Nachricht kommt von dem Chef", en: "The message is from the boss" }, accept: ["message", "news", "text"], hint: "In the plural, die Nachrichten means the news on television. Singular is one message; plural is the broadcast." },
        { id: "de-u33l3-schicken", type: "vocab", front: "schicken", reading: "schicken", meaning: "to send", example: { jp: "Ich schicke dir das Foto, sobald ich hier bin.", en: "I will send you the photo as soon as I am here." }, drill: { jp: "Wir schicken dir die Datei", en: "We are sending you the file" }, accept: ["to send", "send"], hint: "Takes a dative person and an accusative thing: ich schicke DIR das Foto. senden means the same and sounds more formal." },
        { id: "de-u33l3-anrufen", type: "vocab", front: "anrufen", reading: "anrufen", meaning: "to call / ring up", example: { jp: "Ich muss den Arzt anrufen, weil ich krank bin.", en: "I have to call the doctor because I am ill." }, drill: { jp: "Ich will den Chef anrufen", en: "I want to call the boss" }, accept: ["to call", "to ring", "to phone", "call"], hint: "Separable, like herunterladen: ich rufe dich an. It takes an ACCUSATIVE person — ich rufe dich an, never dir — which surprises most learners." },
        { id: "de-u33l3-loeschen", type: "vocab", front: "löschen", reading: "loschen", meaning: "to delete", example: { jp: "Du kannst die Nachricht löschen, falls sie falsch ist.", en: "You can delete the message in case it is wrong." }, drill: { jp: "Wir löschen die Datei", en: "We are deleting the file" }, accept: ["to delete", "to erase", "delete"], hint: "The same verb puts out a fire — ein Feuer löschen. Both senses are about making something stop existing." },
        { id: "de-u33l3-tippen", type: "vocab", front: "tippen", reading: "tippen", meaning: "to type", example: { jp: "Er tippt sehr schnell, obwohl er nicht auf die Tasten sieht.", en: "He types very fast, although he does not look at the keys." }, drill: { jp: "Die Kinder tippen sehr schnell", en: "The children type very fast" }, accept: ["to type", "type", "to tap"], hint: "Also to tap a screen, and to bet — ich tippe auf Deutschland. Schreiben (u19) is to write in general; tippen is on a keyboard." },
        { id: "de-u33l3-dasnetz", type: "vocab", front: "das Netz", reading: "dasnetz", meaning: "network / net", example: { jp: "Hier ist kein Netz, deshalb kann ich nicht anrufen.", en: "There is no signal here, therefore I cannot call." }, drill: { jp: "Hier ist das Netz sehr schlecht", en: "The signal is very bad here" }, accept: ["network", "net", "signal", "coverage"], hint: "A fishing net, a phone network, and casually the internet itself — im Netz. Kein Netz haben is to have no signal." },
      ],
    },
    {
      id: "de-u33l4",
      unit: 33,
      lesson: 4,
      title: "Digital leben",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Manage an account: password, log-in, connection, and saying whether a thing works at all.",
      items: [
        { id: "de-u33l4-digital", type: "vocab", front: "digital", reading: "digital", meaning: "digital", example: { jp: "Die Zeitung ist jetzt digital, obwohl das nicht gut ist.", en: "The newspaper is digital now, although that is not good." }, drill: { jp: "Die Zeitung ist heute digital", en: "The newspaper is digital today" }, accept: ["digital"], hint: "di-gi-TAHL, stress at the end and a hard g. The opposite Germans reach for is analog, not paper." },
        { id: "de-u33l4-daspasswort", type: "vocab", front: "das Passwort", reading: "daspasswort", meaning: "password", example: { jp: "Ich weiß das Passwort nicht, deshalb komme ich nicht in das Konto.", en: "I do not know the password, therefore I cannot get into the account." }, drill: { jp: "Das Passwort ist zu kurz", en: "The password is too short" }, accept: ["password"], hint: "der Pass (u18) plus das Wort (u19), and the last piece makes it neuter. Note the double s, which is why there is no ß." },
        { id: "de-u33l4-daskonto", type: "vocab", front: "das Konto", reading: "daskonto", meaning: "account", example: { jp: "Das Konto ist neu, weil das Handy kaputt ist.", en: "The account is new because the phone is broken." }, drill: { jp: "Das Konto ist noch sehr neu", en: "The account is still very new" }, accept: ["account", "bank account"], hint: "A bank account and an online account alike. Its plural is Italian and irregular: die Konten." },
        { id: "de-u33l4-online", type: "vocab", front: "online", reading: "online", meaning: "online", example: { jp: "Ich bin online, sobald das Netz gut ist.", en: "I am online as soon as the signal is good." }, drill: { jp: "Ich bin heute nicht online", en: "I am not online today" }, accept: ["online"], hint: "Said the English way and written as one word. Online sein, online kaufen — it works as an adjective and an adverb but never takes an ending." },
        { id: "de-u33l4-funktionieren", type: "vocab", front: "funktionieren", reading: "funktionieren", meaning: "to work / function", example: { jp: "Das Gerät funktioniert nicht, obwohl der Akku voll ist.", en: "The device does not work, although the battery is full." }, drill: { jp: "Die Geräte funktionieren heute nicht", en: "The devices are not working today" }, accept: ["to work", "to function", "work"], hint: "For machines only. A person who works is arbeiten (u3) — saying a person funktioniert is a joke, and not a kind one." },
        { id: "de-u33l4-dieverbindung", type: "vocab", front: "die Verbindung", reading: "dieverbindung", meaning: "connection", example: { jp: "Die Verbindung ist schlecht, deshalb höre ich dich nicht.", en: "The connection is bad, therefore I cannot hear you." }, drill: { jp: "Die Verbindung ist heute schlecht", en: "The connection is bad today" }, accept: ["connection", "link", "service"], hint: "From verbinden, to join. It covers a phone line, an internet connection and a train connection — eine gute Verbindung nach Berlin." },
      ],
    },
  ],
};
