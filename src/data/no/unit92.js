// NO Unit 92 — Politikk og jus (slot: politics-law) — B2
// Retitled from the scaffold's English placeholder "Politics and law".
// B2 band conventions live in no/unit88.js's header; language-wide in unit1.js.
//
// This is the INSTITUTIONS unit (unit88.js B1, test c): every front here is a
// thing a learner in Norway actually meets in a newspaper or a letter. B1's u61
// "Regler, lov og plikt" taught the learner's own duties — en lov, en rett, ei
// plikt, en norm, å krenke, å advare. It did not name a single institution.
// A learner who can say "det er ikke lov" and cannot say Stortinget, en
// høring, en domstol or å anke cannot follow one day of Norwegian news.
//
// ⚠️ Deliberately NOT taught here: å dømme and å stemme. `en dommer` (u55) and
// `å stemme` (u32) are already in the corpus and the lower slot owns them
// (RUNBOOK §4). Both are used freely in the examples below. `en dom` IS taught
// — it is the verdict, a different word from the person, and the learner needs
// both.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT92 = {
  id: "no-u92",
  lang: "no",
  title: "Politikk og jus",
  order: 92,
  stage: "b2",
  lessons: [
    {
      id: "no-u92l1",
      unit: 92,
      lesson: 1,
      title: "Storting og regjering",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a Norwegian news item about national politics — who sits where, who decides, and what a vote settled.",
      items: [
        { id: "no-u92l1-etstorting", type: "vocab", front: "et storting", reading: "etstorting", meaning: "parliament (the national assembly)", example: { jp: "Saken går videre til Stortinget, og der kan den ligge lenge.", en: "The matter goes on to the Storting, and there it can lie for a long time." }, accept: ["a national assembly", "a legislature"], drill: { jp: "Norge har et storting i Oslo", en: "Norway has a parliament in Oslo" }, hint: "et storting → stortinget. Stor + et ting, den gamle forsamlinga. Nesten alltid i bestemt form: Stortinget, med stor S." },
        { id: "no-u92l1-enrepresentant", type: "vocab", front: "en representant", reading: "enrepresentant", meaning: "representative (somebody elected to speak for others)", example: { jp: "Hun er en representant fra nord, og det ser vi på hva hun tar opp.", en: "She is a representative from the north, and we can tell from what she raises." }, accept: ["an elected member", "a delegate"], drill: { jp: "Han er en representant for oss", en: "He is a representative for us" }, hint: "en representant → representanten, flertall representanter. Å representere er verbet. Brukes om Stortinget, men også i borettslag og på jobb." },
        { id: "no-u92l1-etdepartement", type: "vocab", front: "et departement", reading: "etdepartement", meaning: "ministry (a government office for one field)", example: { jp: "Brevet kom fra et departement, og ingen på kontoret forstår helt hva de vil.", en: "The letter came from a ministry, and nobody at the office quite understands what they want." }, accept: ["a government department", "a ministry office"], drill: { jp: "Svaret kom fra et departement", en: "The answer came from a ministry" }, hint: "et departement → departementet, flertall departementer. Fransk opphav, uttalt -mang. Hvert departement har en statsråd øverst." },
        { id: "no-u92l1-enstatsminister", type: "vocab", front: "en statsminister", reading: "enstatsminister", meaning: "prime minister (the head of government)", example: { jp: "En statsminister kan ikke bestemme på egen hånd, og det er hele poenget med systemet.", en: "A prime minister cannot decide on their own, and that is the whole point of the system." }, accept: ["a head of government", "a premier"], drill: { jp: "Norge har en statsminister nå", en: "Norway has a prime minister now" }, hint: "en statsminister → statsministeren. En stat + en minister. NB: statsministeren leder regjeringa (u55); kongen er noe helt annet." },
        { id: "no-u92l1-etmindretall", type: "vocab", front: "et mindretall", reading: "etmindretall", meaning: "minority (the smaller side in a vote)", example: { jp: "De var et mindretall, men de fikk likevel gjort noe med den viktige delen.", en: "They were a minority, but they still got something done about the important part." }, accept: ["the smaller group", "the losing side of a vote"], drill: { jp: "Vi er et mindretall her", en: "We are a minority here" }, hint: "et mindretall → mindretallet. Mindre + et tall, motsatt av et flertall (u53). NB: dette er om STEMMER, ikke om folkegrupper." },
        { id: "no-u92l1-eiavstemning", type: "vocab", front: "ei avstemning", reading: "eiavstemning", meaning: "a vote taken (the act of counting who is for and against)", example: { jp: "Etter ei lang avstemning var alle for, bortsett fra to som gikk ut.", en: "After a long vote everybody was in favour, apart from two who walked out." }, accept: ["a ballot", "a division"], drill: { jp: "Vi tar ei avstemning nå", en: "We are taking a vote now" }, hint: "ei avstemning → avstemninga. -ning er hunkjønn (unit88 regel B3). Fra å stemme (u32). Et valg (u50) velger folk; ei avstemning avgjør en sak." },
      ],
    },
    {
      id: "no-u92l2",
      unit: 92,
      lesson: 2,
      title: "Fra forslag til lov",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a proposal through the system — the hearing, the decision, and the day it starts to apply to you.",
      items: [
        { id: "no-u92l2-etlovforslag", type: "vocab", front: "et lovforslag", reading: "etlovforslag", meaning: "bill (a proposed law not yet passed)", example: { jp: "Et lovforslag er ikke en lov, og mange glemmer den forskjellen når de leser avisa.", en: "A bill is not a law, and many forget that difference when they read the newspaper." }, accept: ["a draft law", "a proposed statute"], drill: { jp: "De la et lovforslag på bordet", en: "They put a bill on the table" }, hint: "et lovforslag → lovforslaget. En lov (u61) + et forslag (u40). Så lenge det heter forslag, gjelder det ingen." },
        { id: "no-u92l2-eihoring", type: "vocab", front: "ei høring", reading: "eihoring", meaning: "public consultation (the round where anybody may comment)", example: { jp: "Alle kan svare på ei høring, også du, og de fleste vet ikke at de kan det.", en: "Anybody can respond to a consultation, you too, and most people do not know they can." }, accept: ["a consultation round", "a call for comments"], drill: { jp: "Forslaget ligger ute på ei høring", en: "The proposal is out for consultation" }, hint: "ei høring → høringa. -ing er hunkjønn (unit88 regel B3). Fra å høre (u11). NB: ø folder til o, så lesinga er eihoring." },
        { id: "no-u92l2-avedta", type: "vocab", front: "å vedta", reading: "avedta", meaning: "to pass (adopt a proposal so it becomes binding)", example: { jp: "De vedtar det i dag, men ingen merker noe før til neste år.", en: "They pass it today, but nobody notices anything until next year." }, accept: ["to adopt formally", "to carry a motion"], drill: { jp: "Det er lett å vedta en plan", en: "It is easy to pass a plan" }, hint: "å vedta → vedtar, vedtok. Ved + å ta. Et vedtak (u78) er resultatet. Å vedta er noe en forsamling gjør, aldri én person." },
        { id: "no-u92l2-atreikraft", type: "vocab", front: "å tre i kraft", reading: "atreikraft", meaning: "to come into force (start applying from a given date)", example: { jp: "De vedtar loven nå, men den skal tre i kraft først om et år.", en: "They are passing the law now, but it is only to come into force in a year." }, accept: ["to take effect", "to begin to apply"], drill: { jp: "Loven kommer til å tre i kraft snart", en: "The law is going to come into force soon" }, hint: "Fast uttrykk, tre ord. Å tre + ei kraft. ⚠️ Vedtatt og i kraft er IKKE samme dag, og det er ofte hele poenget i en nyhet." },
        { id: "no-u92l2-enparagraf", type: "vocab", front: "en paragraf", reading: "enparagraf", meaning: "section of a law (the numbered piece you are pointed to)", example: { jp: "De viser til en paragraf ingen har lest, og så blir det stille i rommet.", en: "They refer to a section of the law nobody has read, and then the room goes quiet." }, accept: ["a clause of a statute", "a numbered provision"], drill: { jp: "Dette står i en paragraf her", en: "This is in a section of the law here" }, hint: "en paragraf → paragrafen, flertall paragrafer. Tegnet er §. En klausul (u93) står i en avtale; en paragraf står i loven." },
        { id: "no-u92l2-engrunnlov", type: "vocab", front: "en grunnlov", reading: "engrunnlov", meaning: "constitution (the law all other laws must obey)", example: { jp: "En grunnlov er vanskelig å gjøre om på, og det er derfor den virker.", en: "A constitution is hard to change, and that is why it works." }, accept: ["a basic law", "a founding charter"], drill: { jp: "Landet fikk en grunnlov for lenge siden", en: "The country got a constitution long ago" }, hint: "en grunnlov → grunnloven. En grunn (u27) + en lov. Den norske Grunnloven er fra 1814 og er blant de eldste som fortsatt gjelder." },
      ],
    },
    {
      id: "no-u92l3",
      unit: 92,
      lesson: 3,
      title: "I retten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a court case — who brings it, who is charged, what was decided, and what happens if you disagree.",
      items: [
        { id: "no-u92l3-endomstol", type: "vocab", front: "en domstol", reading: "endomstol", meaning: "court (the institution that decides cases)", example: { jp: "En domstol skal ikke være rask, den skal være riktig, og det koster tid.", en: "A court is not meant to be fast, it is meant to be right, and that costs time." }, accept: ["a court of law", "a tribunal"], drill: { jp: "Saken går til en domstol nå", en: "The case is going to a court now" }, hint: "en domstol → domstolen, flertall domstoler. En dom + en stol: stolen det dømmes fra. Ordet for institusjonen, ikke for rommet." },
        { id: "no-u92l3-endom", type: "vocab", front: "en dom", reading: "endom", meaning: "verdict (the decision a court hands down)", example: { jp: "Ingen ble glade for den dommen, men begge sier de kan godta den.", en: "Nobody was happy with that verdict, but both say they can accept it." }, accept: ["a judgment", "a ruling"], drill: { jp: "Vi venter på en dom her", en: "We are waiting for a verdict here" }, hint: "en dom → dommen, flertall dommer. NB: en dommer (u55) er PERSONEN, en dom er AVGJØRELSEN. Flertall av dom og entall av dommer ser like ut." },
        { id: "no-u92l3-enadvokat", type: "vocab", front: "en advokat", reading: "enadvokat", meaning: "lawyer (the one who argues your side)", example: { jp: "Du har rett til en advokat, og staten betaler hvis du ikke kan.", en: "You have a right to a lawyer, and the state pays if you cannot." }, accept: ["an attorney", "legal counsel"], drill: { jp: "Hun snakket med en advokat først", en: "She spoke with a lawyer first" }, hint: "en advokat → advokaten, flertall advokater. Trykk på siste stavelse: advoKAT. En advokat argumenterer (u88); en dommer avgjør." },
        { id: "no-u92l3-entiltale", type: "vocab", front: "en tiltale", reading: "entiltale", meaning: "criminal charge (the formal accusation brought against somebody)", example: { jp: "Det tok tre år fra saken kom opp til det ble en tiltale av den.", en: "It took three years from the matter coming up to a charge being made of it." }, accept: ["an indictment", "a formal accusation"], drill: { jp: "Han fikk en tiltale mot seg", en: "He had a charge brought against him" }, hint: "en tiltale → tiltalen, flertall tiltaler. Til + å tale. En tiltale er ikke en dom — den sier hva som PÅSTÅS, ikke hva som er bevist." },
        { id: "no-u92l3-aanke", type: "vocab", front: "å anke", reading: "aanke", meaning: "to appeal (take a decision up to a higher court)", example: { jp: "De anker med det samme, for de mener retten har lest loven feil.", en: "They are appealing straight away, because they think the court has read the law wrongly." }, accept: ["to take to a higher court", "to challenge a ruling"], drill: { jp: "Du har rett til å anke dommen", en: "You have a right to appeal the verdict" }, hint: "å anke → anker, anket. Substantivet er en anke. Du anker en DOM, ikke en sak, og du har som regel kort tid på deg." },
        { id: "no-u92l3-asaksoke", type: "vocab", front: "å saksøke", reading: "asaksoke", meaning: "to sue (start a civil case against somebody)", example: { jp: "Hun vil heller snakke med dem enn å saksøke noen hun kjenner godt.", en: "She would rather talk to them than sue somebody she knows well." }, accept: ["to bring a civil action against", "to take to court"], drill: { jp: "Det koster mye å saksøke noen", en: "It costs a lot to sue somebody" }, hint: "å saksøke → saksøker, saksøkte. Ei sak (u50) + å søke (u24). Dette er SIVILT: privatfolk mot hverandre, ikke staten mot deg. ø folder til o." },
      ],
    },
    {
      id: "no-u92l4",
      unit: 92,
      lesson: 4,
      title: "Rettsstat og frihet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say why the system is built the way it is — split powers, free speech, and settling instead of fighting it out.",
      items: [
        { id: "no-u92l4-etdemokrati", type: "vocab", front: "et demokrati", reading: "etdemokrati", meaning: "democracy (rule decided by those it applies to)", example: { jp: "Et demokrati er ikke bare valg, det er også hva som skjer mellom dem.", en: "A democracy is not only elections, it is also what happens between them." }, accept: ["popular rule", "government by the people"], drill: { jp: "Norge er et demokrati i dag", en: "Norway is a democracy today" }, hint: "et demokrati → demokratiet, flertall demokratier. Gresk: folk + makt. Adjektivet er demokratisk." },
        { id: "no-u92l4-enrettsstat", type: "vocab", front: "en rettsstat", reading: "enrettsstat", meaning: "state under the rule of law (where the state must obey the law too)", example: { jp: "I en rettsstat må også staten følge loven, og det er hele forskjellen.", en: "In a state under the rule of law the state too must follow the law, and that is the whole difference." }, accept: ["a law-governed state", "the rule of law"], drill: { jp: "Dette er ikke en rettsstat nå", en: "This is not a state under the rule of law now" }, hint: "en rettsstat → rettsstaten. En rett (u32) + en stat. NB: tre s-er på rad i skrift: retts-stat. Et demokrati kan velge; en rettsstat setter grenser for hva det kan velge." },
        { id: "no-u92l4-enytringsfrihet", type: "vocab", front: "en ytringsfrihet", reading: "enytringsfrihet", meaning: "freedom of expression (the right to say what others dislike)", example: { jp: "En ytringsfrihet som bare gjelder det andre liker å høre, er ingen frihet.", en: "A freedom of expression that only covers what others like to hear is no freedom." }, accept: ["free speech", "liberty of expression"], drill: { jp: "Vi har en ytringsfrihet i loven", en: "We have a freedom of expression in the law" }, hint: "en ytringsfrihet → ytringsfriheten. -het er HANKJØNN (unit88 regel B3), aldri ei. Ei ytring + ei frihet. Står i Grunnloven § 100." },
        { id: "no-u92l4-eimaktfordeling", type: "vocab", front: "ei maktfordeling", reading: "eimaktfordeling", meaning: "separation of powers (splitting authority so no part holds it all)", example: { jp: "Ei maktfordeling gjør alt tregere, og det er nettopp hensikten med den.", en: "A separation of powers makes everything slower, and that is exactly its purpose." }, accept: ["division of authority", "checks and balances"], drill: { jp: "Her savner vi ei maktfordeling", en: "Here we lack a separation of powers" }, hint: "ei maktfordeling → maktfordelinga. -ing er hunkjønn (unit88 regel B3). Makt (u55) + ei fordeling. Storting, regjering og domstol holder hverandre i sjakk." },
        { id: "no-u92l4-etforlik", type: "vocab", front: "et forlik", reading: "etforlik", meaning: "settlement (an agreed end to a case, with no verdict)", example: { jp: "De kom til et forlik dagen før, og derfor fikk vi aldri vite hvem som hadde rett.", en: "They came to a settlement the day before, and that is why we never got to know who was right." }, accept: ["an out-of-court agreement", "a negotiated end"], drill: { jp: "De to kom til et forlik her", en: "The two came to a settlement here" }, hint: "et forlik → forliket, flertall forlik (likt i flertall). Å forlike seg. Et kompromiss (u68) er om en sak; et forlik avslutter en RETTSSAK." },
        { id: "no-u92l4-etmandat", type: "vocab", front: "et mandat", reading: "etmandat", meaning: "mandate (the authority somebody has been given to act)", example: { jp: "Utvalget har et mandat, og alt utenfor det kan de ikke gjøre noe med.", en: "The committee has a mandate, and anything outside it they can do nothing about." }, accept: ["a remit", "authority to act"], drill: { jp: "Gruppa har et mandat fra oss", en: "The group has a mandate from us" }, hint: "et mandat → mandatet, flertall mandater. NB: to betydninger — oppdraget en gruppe får, OG en plass på Stortinget." },
      ],
    },
  ],
};
