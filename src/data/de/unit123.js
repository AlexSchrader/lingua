// DE Unit 123 — Menschen und Macht (slot: coverage-b2-13) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Coverage pass — method in u114's header, card count in u115's.
//
// ⚠️ A REGISTER I FIRST FILTERED OUT AND THEN PUT BACK, which is worth stating.
// The external list is film and TV subtitles, so it over-represents weapons,
// ranks, crime and religion. My first pass dropped 86 such entries wholesale.
// That was too blunt: der Mord, die Droge, das Virus, das Volk, die Kirche and
// die Armee are equally NEWS vocabulary, and a B2 learner whose stated goal is
// reading a German newspaper meets them constantly. So the filter was narrowed
// to insults, US-isms and proper names, and these came back. Ranks in the hints.
//
// Self-check, dropped as same-lexeme duplicates: der Koenig KEPT (its near hits
// koennen/konnte/koennte are a false family the checker reaches by stripping
// letters), die Armee KEPT (near hit der Arm u11, false), der Meister KEPT
// (near hit meistens u21, false). Dropped: der Kampf (kaempfen u117),
// die Kontrolle went to u122.
// FREE: gemacht, gesagt, gekommen, gefunden, geschrieben, gewählt, gewahlt, films, gestartet
export const DE_UNIT123 = {
  id: "de-u123",
  lang: "de",
  title: "Menschen und Macht",
  order: 123,
  stage: "b2",
  lessons: [
    {
      id: "de-u123l1",
      unit: 123,
      lesson: 1,
      title: "Doktor, Meister, Präsident",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Address and refer to people by rank or title — a doctor, a master of a trade, a president, a police officer.",
      items: [
        { id: "de-u123l1-derdoktor", type: "vocab", front: "der Doktor", reading: "derdoktor", meaning: "the doctor", example: { jp: "Der Doktor hat gesagt, dass wir in zwei Wochen noch einmal kommen sollen.", en: "The doctor said that we should come again in two weeks." }, drill: { jp: "Der Doktor ist noch im Haus", en: "The doctor is still in the house" }, accept: ["doctor", "the doctor", "physician", "Dr"], hint: "Rank 874. The title and the degree; der Arzt (u11) is the medical profession. Stress shifts in the plural: DOKtor, but dokTOren." },
        { id: "de-u123l1-dermeister", type: "vocab", front: "der Meister", reading: "dermeister", meaning: "the master", example: { jp: "Der Meister muss jede Arbeit noch einmal lesen, bevor sie aus dem Haus geht.", en: "The master craftsman has to read every job again before it leaves the building." }, drill: { jp: "Der Meister kennt jeden Schritt", en: "The master knows every step" }, accept: ["master", "the master", "master craftsman", "champion", "foreman"], hint: "Rank 784. A formal qualification in German trades — der Meisterbrief lets you run a workshop and train apprentices. In sport it is the champion." },
        { id: "de-u123l1-derpraesident", type: "vocab", front: "der Präsident", reading: "derpraesident", meaning: "the president", example: { jp: "Der Präsident spricht heute Abend, und fast jede Zeitung wird morgen darüber schreiben.", en: "The president speaks this evening, and almost every newspaper will write about it tomorrow." }, drill: { jp: "Der Präsident kommt am Montag", en: "The president comes on Monday" }, accept: ["president", "the president", "chairman"], hint: "Rank 915. Weak masculine: den Präsidenten, dem Präsidenten. Also the head of a club or a court, not only of a state." },
        { id: "de-u123l1-derpolizist", type: "vocab", front: "der Polizist", reading: "derpolizist", meaning: "the police officer", example: { jp: "Der Polizist wollte den Brief sehen, aber niemand im Haus konnte ihn so schnell finden.", en: "The police officer wanted to see the letter, but nobody in the house could find it that quickly." }, drill: { jp: "Der Polizist steht an der Tür", en: "The police officer stands at the door" }, accept: ["police officer", "the police officer", "policeman", "constable", "cop"], hint: "Rank 1753. Weak masculine again. die Polizei (u81) is the force as a whole and takes a singular verb — die Polizei kommt." },
        { id: "de-u123l1-derengel", type: "vocab", front: "der Engel", reading: "derengel", meaning: "the angel", example: { jp: "Über der Tür der Kirche steht ein Engel aus Stein, den fast niemand bemerkt.", en: "Above the door of the church stands an angel of stone that almost nobody notices." }, drill: { jp: "Der Engel steht über der Tür", en: "The angel stands above the door" }, accept: ["angel", "the angel"], hint: "Rank 1969. Same in singular and plural — der Engel, die Engel. Du bist ein Engel is an ordinary warm thank-you, with no religious weight at all." },
      ],
    },
    {
      id: "de-u123l2",
      unit: 123,
      lesson: 2,
      title: "Volk, König, Kirche",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read a history or news paragraph about a state and its institutions — a people, a king, a church, an army, a prison.",
      items: [
        { id: "de-u123l2-dasvolk", type: "vocab", front: "das Volk", reading: "dasvolk", meaning: "the people (nation)", example: { jp: "Das Volk hat am Sonntag gewählt, und das Ergebnis war für viele eine Überraschung.", en: "The people voted on Sunday, and the result was a surprise for many." }, drill: { jp: "Das Volk will eine klare Antwort", en: "The people want a clear answer" }, accept: ["people", "the people", "nation", "populace", "folk"], hint: "Rank 1542. A people as a political body, singular and neuter — not die Leute (u10), who are just persons. Plural die Völker for peoples." },
        { id: "de-u123l2-derkoenig", type: "vocab", front: "der König", reading: "derkoenig", meaning: "the king", example: { jp: "Der König durfte damals fast alles, aber Geld nehmen konnte er nur mit Hilfe der Städte.", en: "The king was allowed almost anything back then, but he could take money only with the help of the cities." }, drill: { jp: "Der König wohnte in dieser Stadt", en: "The king lived in this city" }, accept: ["king", "the king", "monarch"], hint: "Rank 887. Feminine die Königin, and das Königreich is the kingdom. Note the -ig ending sounds like -ich in standard pronunciation: KÖ-nich." },
        { id: "de-u123l2-diekirche", type: "vocab", front: "die Kirche", reading: "diekirche", meaning: "the church", example: { jp: "Die Kirche im Dorf ist älter als alle anderen Gebäude.", en: "The church in the village is older than all the other buildings." }, drill: { jp: "Die Kirche steht mitten im Dorf", en: "The church stands in the middle of the village" }, accept: ["church", "the church"], hint: "Rank 1552. The building and the institution alike. In Germany it is also a tax question — die Kirchensteuer is deducted from wages of registered members." },
        { id: "de-u123l2-diearmee", type: "vocab", front: "die Armee", reading: "diearmee", meaning: "the army", example: { jp: "Die Armee war damals im Dorf, und deshalb gibt es aus diesen Jahren fast keine Briefe.", en: "The army was in the village back then, and so there are almost no letters from those years." }, drill: { jp: "Die Armee kam aus einer anderen Stadt", en: "The army came from another city" }, accept: ["army", "the army", "military", "forces"], hint: "Rank 1287. Stress the last syllable: arMEE. The modern German forces are die Bundeswehr; Armee is the general and historical word." },
        { id: "de-u123l2-dasgefaengnis", type: "vocab", front: "das Gefängnis", reading: "dasgefaengnis", meaning: "the prison", example: { jp: "Nach dem Gefängnis hat er keine Arbeit mehr gefunden, obwohl die Sache über zehn Jahre her war.", en: "After prison he found no more work, although the matter was over ten years ago." }, drill: { jp: "Das Gefängnis liegt weit vor der Stadt", en: "The prison lies far outside the city" }, accept: ["prison", "the prison", "jail", "gaol", "penitentiary"], hint: "Rank 933. From fangen (u45, to catch). ins Gefängnis kommen is to go to prison — no article in English, but German keeps it." },
      ],
    },
    {
      id: "de-u123l3",
      unit: 123,
      lesson: 3,
      title: "Mord, Droge, Virus",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a crime or health report — a murder, a drug, a virus, a bomb and the scene of an event.",
      items: [
        { id: "de-u123l3-dermord", type: "vocab", front: "der Mord", reading: "dermord", meaning: "the murder", example: { jp: "Über den Mord wurde lange geschrieben, und trotzdem blieben viele Fragen ohne Antwort.", en: "The murder was written about for a long time, and yet many questions remained unanswered." }, drill: { jp: "Der Mord blieb lange ohne Antwort", en: "The murder long remained without an answer" }, accept: ["murder", "the murder", "homicide", "killing"], hint: "Rank 1316. In German law Mord is the deliberate, aggravated case; Totschlag is manslaughter. der Mörder is the murderer." },
        { id: "de-u123l3-diedroge", type: "vocab", front: "die Droge", reading: "diedroge", meaning: "the drug", example: { jp: "Die Droge ist seit drei Jahren nicht mehr erlaubt, aber man findet sie trotzdem in jeder Stadt.", en: "The drug has not been allowed for three years, but you still find it in every city." }, drill: { jp: "Die Droge ist hier nicht erlaubt", en: "The drug is not allowed here" }, accept: ["drug", "the drug", "narcotic"], hint: "Rank 1314. An illegal drug specifically — a medicine is das Medikament (u25). Usually plural in the news: Drogen." },
        { id: "de-u123l3-dasvirus", type: "vocab", front: "das Virus", reading: "dasvirus", meaning: "the virus", example: { jp: "Das Virus war im Winter in fast jeder Schule, und deshalb blieben viele Kinder zu Hause.", en: "The virus was in almost every school in the winter, and so many children stayed at home." }, drill: { jp: "Das Virus kam sehr schnell zurück", en: "The virus came back very quickly" }, accept: ["virus", "the virus", "bug"], hint: "Rank 1876. Neuter in careful use, though der Virus is common in speech. Plural die Viren. The computer sense is identical." },
        { id: "de-u123l3-diebombe", type: "vocab", front: "die Bombe", reading: "diebombe", meaning: "the bomb", example: { jp: "Eine alte Bombe aus dem Krieg liegt noch im Boden, und deshalb darf dort niemand arbeiten.", en: "An old bomb from the war is still in the ground, and so nobody may work there." }, drill: { jp: "Die Bombe lag tief im Boden", en: "The bomb lay deep in the ground" }, accept: ["bomb", "the bomb", "explosive"], hint: "Rank 1445. Still ordinary news in Germany, where wartime bombs are found in cities every year. As a bare exclamation it means something is great." },
        { id: "de-u123l3-dieszene", type: "vocab", front: "die Szene", reading: "dieszene", meaning: "the scene", example: { jp: "Die Szene am Ende hat fast jeder ganz verschieden verstanden.", en: "Almost everyone understood the scene at the end quite differently." }, drill: { jp: "Die Szene war wirklich sehr kurz", en: "The scene was really very short" }, accept: ["scene", "the scene", "sequence", "milieu"], hint: "Rank 1741. Spelled with Sz but pronounced with a plain s: SZEH-ne. Also a milieu — die Kunstszene, the art scene." },
      ],
    },
    {
      id: "de-u123l4",
      unit: 123,
      lesson: 4,
      title: "Gold, Stein und Ding",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name concrete things at their most basic — gold, stone, a boat, a machine, and the word for a thing you cannot name.",
      items: [
        { id: "de-u123l4-dasgold", type: "vocab", front: "das Gold", reading: "dasgold", meaning: "the gold", example: { jp: "Das Gold im Ring ist alt, aber der Ring selbst wurde erst vor zehn Jahren gemacht.", en: "The gold in the ring is old, but the ring itself was only made ten years ago." }, drill: { jp: "Das Gold ist sehr viel wert", en: "The gold is worth a great deal" }, accept: ["gold", "the gold"], hint: "Rank 1558. No plural. golden is the adjective, and es ist nicht alles Gold was glänzt is the German 'all that glitters is not gold'." },
        { id: "de-u123l4-derstein", type: "vocab", front: "der Stein", reading: "derstein", meaning: "the stone", example: { jp: "Ein Stein liegt mitten auf dem Weg, und im Dunkeln sieht ihn fast niemand.", en: "A stone lies in the middle of the path, and in the dark almost nobody sees it." }, drill: { jp: "Der Stein war viel zu schwer", en: "The stone was much too heavy" }, accept: ["stone", "the stone", "rock"], hint: "Rank 1822. Material and single object alike — aus Stein is 'of stone'. mir fällt ein Stein vom Herzen is 'that's a weight off my mind'." },
        { id: "de-u123l4-dasboot", type: "vocab", front: "das Boot", reading: "dasboot", meaning: "the boat", example: { jp: "Das Boot liegt den ganzen Winter am Wasser, weil das Eis zu hart wäre.", en: "The boat lies by the water all winter, because the ice would be too hard." }, drill: { jp: "Das Boot fährt über den Fluss", en: "The boat goes across the river" }, accept: ["boat", "the boat", "dinghy"], hint: "Rank 1300. Smaller than das Schiff (u23). wir sitzen alle in einem Boot is the same idiom as in English." },
        { id: "de-u123l4-diemaschine", type: "vocab", front: "die Maschine", reading: "diemaschine", meaning: "the machine", example: { jp: "Die Maschine läuft seit dem Morgen, und niemand weiß genau, wer sie gestartet hat.", en: "The machine has been running since the morning, and nobody knows exactly who started it." }, drill: { jp: "Die Maschine steht seit gestern", en: "The machine has been standing since yesterday" }, accept: ["machine", "the machine", "engine", "aircraft"], hint: "Rank 1660. Stress the second syllable: maSCHIne, with sch as English sh. In aviation it also means the aircraft itself." },
        { id: "de-u123l4-dasding", type: "vocab", front: "das Ding", reading: "dasding", meaning: "the thing", example: { jp: "Wie heißt das Ding noch mal, mit dem man die Flasche öffnet?", en: "What's that thing called again, the one you open the bottle with?" }, drill: { jp: "Das Ding liegt noch im Keller", en: "The thing is still in the cellar" }, accept: ["thing", "the thing", "object", "item", "gadget"], hint: "Rank 398 and taught nowhere — the word you reach for when the right noun will not come. Plural Dinge for things in general, Dinger for objects you are dismissing." },
      ],
    },
  ],
};
