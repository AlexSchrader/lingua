// NO Unit 110 — Stil 4: den offentlige stemmen (slot: register-4) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot "Register 4 — written, public and institutional voice", retitled.
// Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js C1–C7.
//
// ⚠ THIS IS THE LEXICAL HALF OF A PAIR. u107 "Grammatikk 10" took the STRUCTURE
// of formal Norwegian — hvorav, i henhold til, følgelig, foreliggende. This unit
// takes the INSTITUTION those structures describe: the bodies (l1), what they
// actually do to a case (l2), what you are allowed to do back (l3), and why the
// whole thing is so hard to read (l4). Together they let a learner open a letter
// from the state and understand both the grammar and the machine behind it.
//
// ⚠ u78 "Det offentlige" already owns a lot of this: et vedtak, en saksbehandler,
// å begrunne, å innvilge, et avslag. u75 owns ei innstilling, et vedlegg; u72
// owns en henvendelse; u92 owns en forvaltning, ei lov, en dom; u32 owns et
// skjema, en stat, en kommune. Measured TAKEN before authoring, all of them.
// ⚠ "LEXEME" MEANS INFLECTION, NOT DERIVATION (CLAUDE.md / RUNBOOK §4, corrected
// on main 2026-09-23, commit 5928ca20). A word DERIVED from a taught one is a
// DIFFERENT lexeme and MAY be carded; only the SAME word in another form is
// blocked. `SAME` (article variant) and `TAKEN` from check-front.mjs are still
// hard blocks; `LEXEME` is advisory. The fronts below were left out on MERIT —
// twenty-four slots, and these lost — or because the learner genuinely already
// owns them; they are NOT blocked by the lexeme rule and a later block may card
// any of them:
// `ei begrunnelse` (← å begrunne u78 — a strong B2 card, free for block 3),
// `en klager`. `ei underretning` / `å underrette` and `å formulere` /
// `ei formulering` stay as ONE card each because both halves would land in the
// SAME lesson here, not because they are one lexeme.
//
// GENDER: -else is MASCULINE (en høringsuttalelse), -gang is MASCULINE (en
// klageadgang), -het is MASCULINE (en stivhet), -ing is FEMININE (ei
// saksbehandling, ei kunngjøring, ei utredning, ei formulering, ei tilsløring).
// `en forskrift` is masculine — both en and ei are allowed for skrift-words, and
// en is what the lawbooks print.
// FIRST FEMININE is `ei saksbehandling` (l1) and carries the en-/ei- note.
//
// SCOPE: the frozen base u1–u109 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT110 = {
  id: "no-u110",
  lang: "no",
  title: "Stil 4: den offentlige stemmen",
  order: 110,
  stage: "b2",
  lessons: [
    {
      id: "no-u110l1",
      unit: 110,
      lesson: 1,
      title: "Forvaltningsordene",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the bodies a Norwegian case passes through — and say which of them can actually decide anything.",
      items: [
        { id: "no-u110l1-eninstans", type: "vocab", front: "en instans", reading: "eninstans", meaning: "level of authority", example: { jp: "Saka er bestemt i en instans, men den kan tas videre til to andre over den.", en: "The case has been decided at one level, but it can be taken on to two others above it." }, accept: ["an instance (legal)", "a body (level)"], drill: { jp: "Saka går til en instans over", en: "The case goes to a level above" }, hint: "en instans → instansen, flertall instanser. Et TRINN i systemet, ikke et kontor: første instans, andre instans. Høyesterett er siste instans." },
        { id: "no-u110l1-enetat", type: "vocab", front: "en etat", reading: "enetat", meaning: "government agency", example: { jp: "Etaten svarer for seg selv, og det er nettopp derfor ingen politiker kan love deg noe.", en: "The agency answers for itself, and that is exactly why no politician can promise you anything." }, accept: ["an agency", "a directorate"], drill: { jp: "Han jobber i en etat i Oslo", en: "He works in an agency in Oslo" }, hint: "en etat → etaten, flertall etater. Den delen av staten som UTFØRER; departementet bestemmer. NAV og Skatteetaten er etater." },
        { id: "no-u110l1-etorgan", type: "vocab", front: "et organ", reading: "etorgan", meaning: "public body", example: { jp: "Det er et organ med makt til å si nei, og likevel sier det ja i ni av ti saker.", en: "It is a body with the power to say no, and still it says yes in nine out of ten cases." }, accept: ["a board", "an authority"], drill: { jp: "Dette er et organ under staten", en: "This is a body under the state" }, hint: "et organ → organet, flertall organer. ⚠ Samme ord som kroppsdelen og som musikkinstrumentet — bare sammenhengen skiller." },
        { id: "no-u110l1-etregelverk", type: "vocab", front: "et regelverk", reading: "etregelverk", meaning: "body of rules", example: { jp: "Regelverket er tydelig nok, men det er skrevet for en tid da alle saker kom på papir.", en: "The body of rules is clear enough, but it was written for a time when every case came on paper." }, accept: ["a rulebook", "regulations"], drill: { jp: "De følger et regelverk som er gammelt", en: "They follow a body of rules that is old" }, hint: "et regelverk → regelverket. En regel (u32) + et verk. ALLE reglene til sammen; den enkelte regelen er en regel eller en forskrift." },
        { id: "no-u110l1-enforskrift", type: "vocab", front: "en forskrift", reading: "enforskrift", meaning: "regulation", example: { jp: "Forskriften sier noe annet enn loven, og da er det loven som gjelder.", en: "The regulation says something other than the law, and then it is the law that applies." }, accept: ["a regulation", "a statutory rule"], drill: { jp: "Det kom en forskrift i vår", en: "A regulation came in the spring" }, hint: "en forskrift → forskriften, flertall forskrifter. UNDER loven: loven sier hva, forskriften sier hvordan. Vedtatt av en etat, ikke av Stortinget." },
        { id: "no-u110l1-eisaksbehandling", type: "vocab", front: "ei saksbehandling", reading: "eisaksbehandling", meaning: "case processing", example: { jp: "Saksbehandlinga tar fire måneder, og de tre første går med til å vente på at noen åpner brevet.", en: "Case processing takes four months, and the first three go on waiting for somebody to open the letter." }, accept: ["case handling", "processing"], drill: { jp: "Vi venter på ei saksbehandling som tar tid", en: "We are waiting for a case processing that takes time" }, hint: "ei saksbehandling → saksbehandlinga. Hunkjønnsord kan du også skrive en saksbehandling / saksbehandlingen; -ing er alltid hunkjønn i denne kursen (regel 1). Ei sak (u50) + å behandle (u25)." },
      ],
    },
    {
      id: "no-u110l2",
      unit: 110,
      lesson: 2,
      title: "Å fatte og å iverksette",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe what a public body does to a case — decide it, publish it, put it into effect — using the verb each step actually takes.",
      items: [
        { id: "no-u110l2-afatte", type: "vocab", front: "å fatte", reading: "afatte", meaning: "to make (a formal decision)", example: { jp: "Styret fattet et vedtak i går, og ingen av dem som blir rammet visste at det var et møte.", en: "The board made a decision yesterday, and none of those affected knew there was a meeting." }, accept: ["to pass (a resolution)", "to adopt"], drill: { jp: "Det er vanskelig å fatte et vedtak her", en: "It is hard to make a decision here" }, hint: "å fatte → fatter, fattet. ⚠ TO HELT ULIKE TYDNINGER: å fatte et vedtak er formelt, men «jeg fatter det ikke» betyr jeg skjønner det ikke. Sammenhengen skiller alltid." },
        { id: "no-u110l2-aiverksette", type: "vocab", front: "å iverksette", reading: "aiverksette", meaning: "to implement", example: { jp: "Vedtaket ble fattet i mai, men ingen klarte å iverksette det før hele året var gått.", en: "The decision was made in May, but nobody managed to implement it before the whole year had passed." }, accept: ["to put into effect", "to carry out"], drill: { jp: "Det tar tid å iverksette en ny regel", en: "It takes time to implement a new rule" }, hint: "å iverksette → iverksetter, iverksatte. I + et verk + å sette (u77). Å GJØRE noe som er bestemt; å tre i kraft er at det begynner å gjelde." },
        { id: "no-u110l2-atreikraft", type: "vocab", front: "å tre i kraft", reading: "atreikraft", meaning: "to come into force", example: { jp: "Loven trer i kraft fra første januar, og fram til da gjelder den gamle.", en: "The law comes into force from the first of January, and until then the old one applies." }, accept: ["to take effect"], drill: { jp: "Regelen kommer til å tre i kraft snart", en: "The rule is going to come into force soon" }, hint: "å tre i kraft → trer i kraft, trådte i kraft. Ei kraft (u34). ⚠ Frosset uttrykk: å tre finnes knapt alene i moderne norsk. Om REGELEN, aldri om et menneske." },
        { id: "no-u110l2-eikunngjoring", type: "vocab", front: "ei kunngjøring", reading: "eikunngjoring", meaning: "public notice", example: { jp: "Kunngjøringa sto i avisa i tre dager, og det er alt loven krever av dem.", en: "The public notice was in the paper for three days, and that is all the law requires of them." }, accept: ["an announcement", "a notice"], drill: { jp: "Det kom ei kunngjøring fra staten", en: "A public notice came from the state" }, hint: "ei kunngjøring → kunngjøringa. -ing er hunkjønn. Merk ø-folden: lesinga er eikunngjoring. Kunn (kjent) + å gjøre. Å GJØRE noe kjent er hele poenget — ikke å forklare det." },
        { id: "no-u110l2-eiutredning", type: "vocab", front: "ei utredning", reading: "eiutredning", meaning: "official report (inquiry)", example: { jp: "Utredninga tok to år, og forslaget den kom fram til ble lagt bort på en uke.", en: "The inquiry took two years, and the proposal it arrived at was set aside in a week." }, accept: ["an inquiry", "a study (official)"], drill: { jp: "De ville ha ei utredning til", en: "They wanted one more official report" }, hint: "ei utredning → utredninga. Fra å utrede. ⚠ Norsk politikk svarer på alt med en utredning, og NOU står for Norges offentlige utredninger." },
        { id: "no-u110l2-etrundskriv", type: "vocab", front: "et rundskriv", reading: "etrundskriv", meaning: "circular (official letter)", example: { jp: "Rundskrivet forandrer ingen regel, men det sier hvordan etaten mener regelen skal leses.", en: "The circular changes no rule, but it says how the agency thinks the rule should be read." }, accept: ["a circular"], drill: { jp: "Etaten sendte ut et rundskriv i dag", en: "The agency sent out a circular today" }, hint: "et rundskriv → rundskrivet, flertall rundskriv (ubøyd). Rundt + å skrive. Ikke bindende som en forskrift, men i praksis følger alle det." },
      ],
    },
    {
      id: "no-u110l3",
      unit: 110,
      lesson: 3,
      title: "Å bli hørt og å klage",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what you are entitled to do back — be heard before a decision, and complain about it afterwards.",
      items: [
        { id: "no-u110l3-enhoringsuttalelse", type: "vocab", front: "en høringsuttalelse", reading: "enhoringsuttalelse", meaning: "consultation response", example: { jp: "Vi sendte en høringsuttalelse innen fristen, og ingenting i den kom med i forslaget.", en: "We sent a consultation response within the deadline, and nothing in it made it into the proposal." }, accept: ["a submission", "a response to a hearing"], drill: { jp: "Vi skrev en høringsuttalelse om saka", en: "We wrote a consultation response about the case" }, hint: "en høringsuttalelse → høringsuttalelsen. ⚠ -else er ALLTID hankjønn. Ei høring + ei uttalelse. Merk ø-folden: lesinga er enhoringsuttalelse. Alle norske lovforslag skal ut på høring først." },
        { id: "no-u110l3-enklageadgang", type: "vocab", front: "en klageadgang", reading: "enklageadgang", meaning: "right of appeal", example: { jp: "Brevet nevner en klageadgang til slutt, og de fleste leser ikke så langt ned på sida.", en: "The letter mentions a right of appeal at the end, and most people do not read that far down the page." }, accept: ["the right to complain", "appeal rights"], drill: { jp: "Brevet ga en klageadgang på tre uker", en: "The letter gave a right of appeal of three weeks" }, hint: "en klageadgang → klageadgangen. Å klage (u49) + en adgang. ⚠ Hankjønn fordi -gang er det. Ikke selve klagen — MULIGHETEN til å klage." },
        { id: "no-u110l3-ensoknadsfrist", type: "vocab", front: "en søknadsfrist", reading: "ensoknadsfrist", meaning: "application deadline", example: { jp: "Søknadsfristen gikk ut på en søndag, og systemet var stengt hele helga.", en: "The application deadline fell on a Sunday, and the system was closed the whole weekend." }, accept: ["a deadline for applications"], drill: { jp: "Det er en søknadsfrist i mai", en: "There is an application deadline in May" }, hint: "en søknadsfrist → søknadsfristen, flertall søknadsfrister. En søknad (u24) + en frist (u24). Merk ø-folden: lesinga er ensoknadsfrist." },
        { id: "no-u110l3-aoversende", type: "vocab", front: "å oversende", reading: "aoversende", meaning: "to forward (officially)", example: { jp: "Saka blir oversendt til rett organ, og da begynner fristen å løpe om igjen.", en: "The case is forwarded to the right body, and then the deadline starts running again." }, accept: ["to transmit", "to send on"], drill: { jp: "Vi trenger tid til å oversende papirene", en: "We need time to forward the papers" }, hint: "å oversende → oversender, oversendte. Over + å sende (u20). Bare mellom kontorer, aldri mellom mennesker: du oversender ikke en melding til kjæresten din." },
        { id: "no-u110l3-aunderrette", type: "vocab", front: "å underrette", reading: "aunderrette", meaning: "to notify (formally)", example: { jp: "De skal underrette deg i et brev, og gjør de det ikke, begynner fristen aldri å løpe.", en: "They must notify you in a letter, and if they do not, the deadline never starts running." }, accept: ["to inform (officially)", "to give notice"], drill: { jp: "Det er vanlig å underrette folk først", en: "It is normal to notify people first" }, hint: "å underrette → underretter, underrettet. Under + å rette. Formelt og ensidig: staten underretter deg. Å informere (u72) er nøytralt og går begge veier." },
        { id: "no-u110l3-enmerknad", type: "vocab", front: "en merknad", reading: "enmerknad", meaning: "comment (on the record)", example: { jp: "Hun fikk en merknad inn i saka, og det er grunnen til at noen husker at hun var uenig.", en: "She got a comment into the case papers, and that is the reason anybody remembers she disagreed." }, accept: ["a remark", "a note (formal)"], drill: { jp: "Hun skrev en merknad i brevet", en: "She wrote a comment in the letter" }, hint: "en merknad → merknaden, flertall merknader. Fra å merke (u27). ⚠ En merknad står i DOKUMENTET og blir en del av det; en kommentar er bare noe noen sier." },
      ],
    },
    {
      id: "no-u110l4",
      unit: 110,
      lesson: 4,
      title: "Når språket blir en vegg",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Criticise official language precisely — name the thing that is wrong with the sentence, not just that it is hard.",
      items: [
        { id: "no-u110l4-etbyrakratsprak", type: "vocab", front: "et byråkratspråk", reading: "etbyrakratsprak", meaning: "officialese", example: { jp: "Det er ikke vanskelige ord som gjør et byråkratspråk vanskelig, men lange setninger uten noen som handler.", en: "It is not difficult words that make officialese difficult, but long sentences with nobody acting in them." }, accept: ["bureaucratic language", "officialese"], drill: { jp: "Brevet var skrevet på et byråkratspråk", en: "The letter was written in officialese" }, hint: "et byråkratspråk → byråkratspråket. Merk å-folden: lesinga er etbyrakratsprak. Staten har en egen språkpolitikk mot det, og den heter klarspråk." },
        { id: "no-u110l4-enordlyd", type: "vocab", front: "en ordlyd", reading: "enordlyd", meaning: "exact wording", example: { jp: "Ordlyden er den samme som før, men to ord er flyttet og det forandrer alt.", en: "The exact wording is the same as before, but two words have been moved and that changes everything." }, accept: ["the wording", "the exact text"], drill: { jp: "De forandret en ordlyd i loven", en: "They changed a wording in the law" }, hint: "en ordlyd → ordlyden. Et ord (u18) + en lyd (u1). NØYAKTIG hvordan noe står skrevet — i en tvist er det ordlyden som gjelder, ikke hva noen mente." },
        { id: "no-u110l4-eiformulering", type: "vocab", front: "ei formulering", reading: "eiformulering", meaning: "turn of phrase (as chosen)", example: { jp: "Formuleringa er valgt med hensikt, og den lar dem si nei uten å bruke ordet.", en: "The phrasing is chosen deliberately, and it lets them say no without using the word." }, accept: ["a phrasing", "a formulation"], drill: { jp: "Han valgte ei formulering ingen forsto", en: "He chose a phrasing nobody understood" }, hint: "ei formulering → formuleringa. -ing er hunkjønn. Fra å formulere. En ordlyd er teksten slik den ER; ei formulering er VALGET av å skrive den slik." },
        { id: "no-u110l4-upersonlig", type: "vocab", front: "upersonlig", reading: "upersonlig", meaning: "impersonal", example: { jp: "Brevet er upersonlig med hensikt, for da er det ingen som har gjort noe mot deg.", en: "The letter is impersonal on purpose, because then nobody has done anything to you." }, accept: ["faceless", "detached"], drill: { jp: "Brevet var upersonlig og kort", en: "The letter was impersonal and short" }, hint: "upersonlig → upersonlig, upersonlige. -ig-ord får ikke -t i intetkjønn. U- + personlig (u31). ⚠ Den vanligste måten å lage det på i norsk er s-passiv: «saka behandles» i stedet for «vi behandler saka»." },
        { id: "no-u110l4-eitilsloring", type: "vocab", front: "ei tilsløring", reading: "eitilsloring", meaning: "obfuscation", example: { jp: "Det er ei tilsløring, ikke en feil, og forskjellen er at noen har valgt det.", en: "It is obfuscation, not an error, and the difference is that somebody chose it." }, accept: ["a cover-up (in language)", "veiling"], drill: { jp: "Dette er ei tilsløring av saka", en: "This is an obfuscation of the case" }, hint: "ei tilsløring → tilsløringa. -ing er hunkjønn. Merk ø-folden: lesinga er eitilsloring. Fra et slør. Å skjule noe ved å skrive UTYDELIG — ikke ved å lyve." },
        { id: "no-u110l4-enstivhet", type: "vocab", front: "en stivhet", reading: "enstivhet", meaning: "stiffness (of style)", example: { jp: "Det ligger en stivhet i hver setning, og den forsvinner med en gang de snakker i telefonen i stedet.", en: "There is a stiffness in every sentence, and it disappears the moment they speak on the phone instead." }, accept: ["rigidity", "formality (stiff)"], drill: { jp: "Det er en stivhet i språket her", en: "There is a stiffness in the language here" }, hint: "en stivhet → stivheten. ⚠ -het er ALLTID hankjønn. Fra stiv (u46). Om språk OG om kropp — og i begge tilfeller betyr det at noe ikke bøyer seg." },
      ],
    },
  ],
};
