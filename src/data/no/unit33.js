// NO Unit 33 — Teknologi og kontakt ("Technology and getting in touch") — A2
// Conventions are declared in no/unit1.js §1-§8 and bind every unit.
//
// Examples and drills draw on A1's 480 plus u31-u33 only. u21-u30 are stubs in this
// worktree, so their vocabulary cannot be verified here — see unit32.js's header.
//
// TWO CANDIDATES WERE CUT ON LEXEME GROUNDS, neither of which a front-uniqueness
// check would have shown:
//   `å søke`  — `en søknad` is taught at the lead's u24. One root, two cards.
//               (u32 held `en søknad` when this was written; it lost the front to
//               u24 on lower-slot-wins, which changes the owner and not the rule.)
//   `en bruker` — A1 u17 teaches `å bruke`.
// And one was cut on learner cost rather than duplication: `å nå`, to reach. Its
// present is `når`, spelled identically to `når` "when" (A1 u5), while the bare stem
// is `nå` "now" (also u5). That is a three-way collision on one short word, and the
// hint would have been longer than the card. `å dele` took the slot instead.
//
// `ei mus` IS DELIBERATELY ONE CARD FOR BOTH SENSES. The animal and the computer
// mouse are the same word in Norwegian, exactly as in English, and A1's animal unit
// (u19) never taught the creature — so there is nothing to collide with and no
// reason to spend two cards.
//
// `et nummer` vs `et tall` (A1 u5) is the pair worth flagging to a learner and its
// hint does: a tall is what you count with, a nummer is what identifies you.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT33 = {
  id: "no-u33",
  lang: "no",
  title: "Teknologi og kontakt",
  order: 33,
  stage: "a2",
  lessons: [
    {
      id: "no-u33l1",
      unit: 33,
      lesson: 1,
      title: "Online",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about being online — the internet, a computer, a screen, a page, a password and a link.",
      items: [
        { id: "no-u33l1-etnett", type: "vocab", front: "et nett", reading: "etnett", meaning: "internet", example: { jp: "Jeg finner nyheter på nettet.", en: "I find news on the internet." }, accept: ["a net", "the net", "network", "the web"], drill: { jp: "Vi bruker et nett i dag", en: "We use a network today" }, hint: "Neuter: et nett → nettet. Literally a net, the same word as a fishing net. På nettet is \"online\", and that is what everyone actually says — internett is the formal word." },
        { id: "no-u33l1-endatamaskin", type: "vocab", front: "en datamaskin", reading: "endatamaskin", meaning: "computer", example: { jp: "Datamaskinen min er ny.", en: "My computer is new." }, accept: ["a computer"], drill: { jp: "En datamaskin koster mange penger", en: "A computer costs a lot of money" }, hint: "Masculine: en datamaskin → datamaskinen. Literally a \"data machine\". In speech most people say PC, but datamaskin is what you will read." },
        { id: "no-u33l1-enskjerm", type: "vocab", front: "en skjerm", reading: "enskjerm", meaning: "screen", example: { jp: "Skjermen er veldig liten.", en: "The screen is very small." }, accept: ["a screen", "monitor", "display"], drill: { jp: "En skjerm viser et bilde", en: "A screen shows a picture" }, hint: "Masculine: en skjerm → skjermen. SHERM — skj is the broad hush of skjorte. It also means a shield, which is where the sense comes from: something you put in front." },
        { id: "no-u33l1-eiside", type: "vocab", front: "ei side", reading: "eiside", meaning: "page", example: { jp: "Denne sida er ikke ny.", en: "This page is not new." }, accept: ["a page", "side", "website"], drill: { jp: "Ei side kan være lang", en: "A page can be long" }, hint: "Feminine: ei side → sida, plural sider. You will also see en side / siden — Bokmål allows both, and this course writes ei so the definite -a stays predictable. One word for a page, a side and a website." },
        { id: "no-u33l1-etpassord", type: "vocab", front: "et passord", reading: "etpassord", meaning: "password", example: { jp: "Jeg glemte passordet mitt.", en: "I forgot my password." }, accept: ["a password"], drill: { jp: "Et passord er ikke et navn", en: "A password is not a name" }, hint: "Neuter: et passord → passordet. From pass plus ord, word — the word that lets you pass. Written as one word in Norwegian, never two." },
        { id: "no-u33l1-eilenke", type: "vocab", front: "ei lenke", reading: "eilenke", meaning: "link", example: { jp: "Kan du sende meg ei lenke?", en: "Can you send me a link?" }, accept: ["a link", "chain"], drill: { jp: "Ei lenke går til ei side", en: "A link goes to a page" }, hint: "Feminine: ei lenke → lenka, plural lenker. Also a chain — made of links, which is exactly the same idea. The verb is å lenke." },
      ],
    },
    {
      id: "no-u33l2",
      unit: 33,
      lesson: 2,
      title: "Working the machine",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Open a program, save or delete a file, and name the mouse and the keyboard.",
      items: [
        { id: "no-u33l2-etprogram", type: "vocab", front: "et program", reading: "etprogram", meaning: "program", example: { jp: "Dette programmet er lett å bruke.", en: "This program is easy to use." }, accept: ["a program", "programme", "show"], drill: { jp: "Et program kan være stort", en: "A program can be big" }, hint: "Neuter: et program → programmet — the m doubles before the ending, like medlem → medlemmet. Plural programmer. It is also a TV programme and the plan for an evening." },
        { id: "no-u33l2-eifil", type: "vocab", front: "ei fil", reading: "eifil", meaning: "file", example: { jp: "Fila er veldig stor.", en: "The file is very big." }, accept: ["a file", "lane"], drill: { jp: "Det ligger ei fil på datamaskinen", en: "There is a file on the computer" }, hint: "Feminine: ei fil → fila, plural filer. Three senses in one short word: a computer file, a lane on a motorway, and the tool you smooth metal with." },
        { id: "no-u33l2-alagre", type: "vocab", front: "å lagre", reading: "alagre", meaning: "to save (a file)", example: { jp: "Husk å lagre filene dine.", en: "Remember to save your files." }, accept: ["to store", "to save"], drill: { jp: "Vi begynner å lagre bilder", en: "We start saving pictures" }, hint: "Present lagrer. From et lager, a store or warehouse — to put something into storage. Saving money is å spare, a different verb entirely." },
        { id: "no-u33l2-aslette", type: "vocab", front: "å slette", reading: "aslette", meaning: "to delete", example: { jp: "Ikke slett bildene mine.", en: "Do not delete my pictures." }, accept: ["delete", "to erase", "erase", "remove"], drill: { jp: "Han begynner å slette gamle filer", en: "He starts deleting old files" }, hint: "Present sletter. Ei slette is a plain — flat, levelled land — and that is the same idea: something wiped smooth." },
        { id: "no-u33l2-eimus", type: "vocab", front: "ei mus", reading: "eimus", meaning: "mouse", example: { jp: "Musa på bordet er svart.", en: "The mouse on the table is black." }, accept: ["a mouse"], drill: { jp: "Det ligger ei mus på et bord", en: "There is a mouse on a table" }, hint: "Feminine: ei mus → musa, and the plural takes no ending at all — mus. The animal and the computer mouse are the same word here too; Norwegian made exactly the same joke English did." },
        { id: "no-u33l2-ettastatur", type: "vocab", front: "et tastatur", reading: "ettastatur", meaning: "keyboard", example: { jp: "Tastaturet mitt er gammelt.", en: "My keyboard is old." }, accept: ["a keyboard"], drill: { jp: "Et tastatur har mange knapper", en: "A keyboard has many buttons" }, hint: "Neuter: et tastatur → tastaturet. From å taste, to press a key. Stress the end: tas-ta-TOOR." },
      ],
    },
    {
      id: "no-u33l3",
      unit: 33,
      lesson: 3,
      title: "Getting in touch",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Reach someone — by email, by number, by address or by letter — and share something with them.",
      items: [
        { id: "no-u33l3-enepost", type: "vocab", front: "en epost", reading: "enepost", meaning: "email", example: { jp: "Jeg sender en epost i dag.", en: "I am sending an email today." }, accept: ["an email", "e-mail", "mail"], drill: { jp: "En epost er ikke et brev", en: "An email is not a letter" }, hint: "Masculine: en epost → eposten, plural eposter. Also written e-post, and both spellings are correct. Post on its own is ordinary paper mail." },
        { id: "no-u33l3-etnummer", type: "vocab", front: "et nummer", reading: "etnummer", meaning: "number (of a phone or house)", example: { jp: "Hva er nummeret ditt?", en: "What is your number?" }, accept: ["a number", "number"], drill: { jp: "Et nummer har mange tall", en: "A number has many digits" }, hint: "Neuter: et nummer → nummeret, plural numre — the e drops and the m un-doubles. Worth keeping apart from et tall (A1 unit 5): a tall is what you count with, a nummer is what identifies you." },
        { id: "no-u33l3-eiadresse", type: "vocab", front: "ei adresse", reading: "eiadresse", meaning: "address", example: { jp: "Jeg finner ikke adressa.", en: "I cannot find the address." }, accept: ["an address"], drill: { jp: "Det står ei adresse på et brev", en: "There is an address on a letter" }, hint: "Feminine: ei adresse → adressa, plural adresser. One d and two s's — the exact opposite of the English spelling, which is the easiest thing in this unit to get backwards." },
        { id: "no-u33l3-etbrev", type: "vocab", front: "et brev", reading: "etbrev", meaning: "letter", example: { jp: "Bestemor sender et brev i desember.", en: "Grandmother sends a letter in December." }, accept: ["a letter"], drill: { jp: "Det ligger et brev på bordet", en: "There is a letter on the table" }, hint: "Neuter: et brev → brevet, and the plural takes no ending — brev. A letter you write and post, never a letter of the alphabet: that is en bokstav." },
        { id: "no-u33l3-ensamtale", type: "vocab", front: "en samtale", reading: "ensamtale", meaning: "conversation", example: { jp: "Vi hadde en lang samtale i går.", en: "We had a long conversation yesterday." }, accept: ["a conversation", "talk", "chat"], drill: { jp: "En samtale er ikke et brev", en: "A conversation is not a letter" }, hint: "Masculine: en samtale → samtalen, plural samtaler. From sam-, together — the same sam as samfunn in unit 32 — plus tale, speech. Speaking together." },
        { id: "no-u33l3-adele", type: "vocab", front: "å dele", reading: "adele", meaning: "to share", example: { jp: "Vil du dele bildet med meg?", en: "Do you want to share the picture with me?" }, accept: ["share", "to divide", "divide"], drill: { jp: "Vi begynner å dele filer", en: "We start sharing files" }, hint: "Present deler. To share and to divide are one verb here — en del is a part. Å dele på regningen is to split the bill." },
      ],
    },
    {
      id: "no-u33l4",
      unit: 33,
      lesson: 4,
      title: "Explaining and repeating",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Explain something, ask for it again, mention an example, translate it, and read a post.",
      items: [
        { id: "no-u33l4-aforklare", type: "vocab", front: "å forklare", reading: "aforklare", meaning: "to explain", example: { jp: "Kan du forklare hvorfor dette skjer?", en: "Can you explain why this is happening?" }, accept: ["explain", "to clarify", "clarify"], drill: { jp: "Læreren begynner å forklare regelen", en: "The teacher starts explaining the rule" }, hint: "Present forklarer. From for- plus klar, clear — to make clear. The noun is en forklaring, an explanation." },
        { id: "no-u33l4-agjenta", type: "vocab", front: "å gjenta", reading: "agjenta", meaning: "to repeat", example: { jp: "Kan du gjenta det, vær så snill?", en: "Can you repeat that, please?" }, accept: ["repeat", "to say again", "say again"], drill: { jp: "Vi prøver å gjenta alt", en: "We try to repeat everything" }, hint: "Present gjentar — gj is a plain y sound: YEN-tar. Built from igjen, again (A1 unit 2), plus ta, to take. To take again." },
        { id: "no-u33l4-anevne", type: "vocab", front: "å nevne", reading: "anevne", meaning: "to mention", example: { jp: "Hun nevner alltid Kari.", en: "She always mentions Kari." }, accept: ["mention", "to name", "name"], drill: { jp: "Vi prøver å nevne et eksempel", en: "We try to mention an example" }, hint: "Present nevner. Built on navn, a name — to put a name to something. Nevn et eksempel is what a teacher says when they want one." },
        { id: "no-u33l4-aoversette", type: "vocab", front: "å oversette", reading: "aoversette", meaning: "to translate", example: { jp: "Jeg kan oversette dette til norsk.", en: "I can translate this into Norwegian." }, accept: ["translate"], drill: { jp: "Hun begynner å oversette boka", en: "She starts translating the book" }, hint: "Present oversetter. From over plus sette, to set — to set across, which is exactly what the Latin behind English \"translate\" means. The noun is en oversettelse." },
        { id: "no-u33l4-etinnlegg", type: "vocab", front: "et innlegg", reading: "etinnlegg", meaning: "post", example: { jp: "Jeg skriver et innlegg på nettet.", en: "I am writing a post on the internet." }, accept: ["a post", "contribution", "comment"], drill: { jp: "Det står et innlegg på ei side", en: "There is a post on a page" }, hint: "Neuter: et innlegg → innlegget, and the plural takes no ending. From inn plus legge, to lay — something laid in. It is a post on a forum and also a speech in a debate." },
        { id: "no-u33l4-ettegn", type: "vocab", front: "et tegn", reading: "ettegn", meaning: "sign", example: { jp: "Det er et godt tegn at han smiler.", en: "It is a good sign that he is smiling." }, accept: ["a sign", "mark", "symbol"], drill: { jp: "Et tegn viser noe viktig", en: "A sign shows something important" }, hint: "Neuter: et tegn → tegnet, plural tegn — no ending. The g is silent: TAIN. Å tegne is to draw, and et tegn is what you draw: a mark, a sign, an omen." },
      ],
    },
  ],
};
