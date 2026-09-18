// DE Unit 107 — Die Schriftsprache ("Written German") — B2 (slot: grammar-10, formal written structures)
// THEME CONTRACT (block 2, u101–u113): grammar as function-word vocab again. This unit
// owns the written register's MACHINERY — genitive prepositions (l1), fixed frames and
// Funktionsverbgefüge (l2), the passive substitutes that let German avoid werden (l3),
// and the nouns the Nominalstil is built from (l4).
// u71 already teaches aufgrund, infolge, anhand, hinsichtlich and the genitive itself;
// u70 owns werden/worden and the -bar adjectives. Neither is re-taught here.
// ⚠ Drill rule (see u106's header): a drill must contain its front verbatim, so every
// front below is either one word or a chunk that stays contiguous in a main clause.
// Conventions: front = real orthography, reading = its ASCII fold (ä→a, ö→o, ü→u, ß→ss).
export const DE_UNIT107 = {
  id: "de-u107",
  lang: "de",
  title: "Die Schriftsprache",
  order: 107,
  stage: "b2",
  lessons: [
    {
      id: "de-u107l1",
      unit: 107,
      lesson: 1,
      title: "Präpositionen der Amtssprache",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read and write the prepositions that only appear on paper: concerning, in accordance with, according to, by means of, on the part of, notwithstanding.",
      items: [
        { id: "de-u107l1-bezuglich", type: "vocab", front: "bezüglich", reading: "bezuglich", meaning: "concerning (with regard to)", example: { jp: "Bezüglich Ihrer Anfrage vom 3. Mai teilen wir Ihnen Folgendes mit.", en: "Concerning your enquiry of 3 May, we inform you of the following." }, drill: { jp: "Bezüglich der Frist gibt es Neuigkeiten", en: "Concerning the deadline there is news" }, accept: ["concerning", "regarding", "with regard to", "in respect of"], hint: "Takes the genitive. The spoken equivalent is wegen or the plain phrase es geht um." },
        { id: "de-u107l1-gemass", type: "vocab", front: "gemäß", reading: "gemass", meaning: "in accordance with", example: { jp: "Gemäß den neuen Vorgaben muss jeder Betrieb die Werte selbst melden.", en: "In accordance with the new requirements, every plant must report the values itself." }, drill: { jp: "Gemäß dem Vertrag zahlt die Firma alles", en: "In accordance with the contract the company pays everything" }, accept: ["in accordance with", "according to", "pursuant to", "as per"], hint: "Dative, and it may stand after its noun: dem Vertrag gemäß. Laut is the lighter everyday version." },
        { id: "de-u107l1-laut", type: "vocab", front: "laut", reading: "laut", meaning: "according to (as a source says)", example: { jp: "Laut dem Bericht sind die Zahlen seit drei Jahren gleich.", en: "According to the report the figures have been the same for three years." }, drill: { jp: "Laut dem Bericht sinken die Zahlen", en: "According to the report the figures are falling" }, accept: ["according to", "as stated by", "per"], hint: "Same spelling as laut = loud, and nothing to do with it. Attributes a claim to a source: laut Polizei, laut Vertrag." },
        { id: "de-u107l1-mittels", type: "vocab", front: "mittels", reading: "mittels", meaning: "by means of", example: { jp: "Die Werte werden mittels eines einfachen Gerätes gemessen.", en: "The values are measured by means of a simple device." }, drill: { jp: "Mittels einer Kamera wird alles überwacht", en: "By means of a camera everything is monitored" }, accept: ["by means of", "using", "via", "through"], hint: "Genitive, and unmistakably written German: in speech you would just say mit." },
        { id: "de-u107l1-seitens", type: "vocab", front: "seitens", reading: "seitens", meaning: "on the part of (by)", example: { jp: "Seitens der Behörde gab es bis heute keine Antwort.", en: "On the part of the authority there has been no answer to date." }, drill: { jp: "Seitens der Firma kam bisher nichts", en: "On the part of the company nothing has come so far" }, accept: ["on the part of", "from the side of", "by"], hint: "From die Seite. Beloved of officials because it names an actor without making it the subject." },
        { id: "de-u107l1-ungeachtet", type: "vocab", front: "ungeachtet", reading: "ungeachtet", meaning: "notwithstanding (in spite of)", example: { jp: "Ungeachtet der Kosten hat die Stadt das Gebäude gekauft.", en: "Notwithstanding the costs, the city bought the building." }, drill: { jp: "Ungeachtet der Kosten geht es weiter", en: "Notwithstanding the costs it continues" }, accept: ["notwithstanding", "in spite of", "regardless of", "despite"], hint: "Genitive. Trotz (u62) says the same thing in one everyday syllable — keep ungeachtet for writing." },
      ],
    },
    {
      id: "de-u107l2",
      unit: 107,
      lesson: 2,
      title: "Feste Wendungen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the fixed frames that carry formal German: within the framework of, in the course of, with a view to, and the noun-plus-verb pairs that replace a plain verb.",
      items: [
        { id: "de-u107l2-imrahmen", type: "vocab", front: "im Rahmen", reading: "imrahmen", meaning: "as part of (within the framework of)", example: { jp: "Im Rahmen der Fortbildung haben alle auch eine Stunde über Sicherheit gehört.", en: "As part of the training everyone also heard an hour about safety." }, drill: { jp: "Im Rahmen des Projekts entstand ein Bericht", en: "As part of the project a report was produced" }, accept: ["as part of", "within the framework of", "in the context of", "under"], hint: "Der Rahmen is the picture frame. Im Rahmen + genitive puts an event inside a bigger one — the commonest frame in German officialese." },
        { id: "de-u107l2-imzuge", type: "vocab", front: "im Zuge", reading: "imzuge", meaning: "in the course of (as part of a process)", example: { jp: "Im Zuge der Umbauten wurde auch die alte Heizung ersetzt.", en: "In the course of the rebuilding the old heating was also replaced." }, drill: { jp: "Im Zuge der Prüfung fiel alles auf", en: "In the course of the inspection everything was noticed" }, accept: ["in the course of", "as part of", "during", "in the wake of"], hint: "Der Zug here is the pull or the run of something, not the train. Im Zuge + genitive." },
        { id: "de-u107l2-imhinblickauf", type: "vocab", front: "im Hinblick auf", reading: "imhinblickauf", meaning: "with a view to (with regard to)", example: { jp: "Im Hinblick auf den Winter hat die Klinik mehr Personal eingestellt.", en: "With a view to the winter the clinic hired more staff." }, drill: { jp: "Im Hinblick auf den Winter wurde geplant", en: "With a view to the winter it was planned" }, accept: ["with a view to", "with regard to", "in view of", "in light of"], hint: "Takes the accusative because of auf. Two jobs: looking ahead to something, or looking at it as an aspect." },
        { id: "de-u107l2-zurverfugungstellen", type: "vocab", front: "zur Verfügung stellen", reading: "zurverfugungstellen", meaning: "to make available (place at someone's disposal)", example: { jp: "Die Stadt will der Schule zwei Räume zur Verfügung stellen.", en: "The city wants to make two rooms available to the school." }, drill: { jp: "Wir können Ihnen Räume zur Verfügung stellen", en: "We can make rooms available to you" }, accept: ["to make available", "to provide", "to place at someone's disposal", "to supply"], hint: "A Funktionsverbgefüge: the noun carries the meaning, stellen only carries the grammar. Its partner is zur Verfügung stehen — to be available." },
        { id: "de-u107l2-inanspruchnehmen", type: "vocab", front: "in Anspruch nehmen", reading: "inanspruchnehmen", meaning: "to make use of (claim a service or right)", example: { jp: "Wer die Beratung in Anspruch nehmen will, meldet sich bis Freitag.", en: "Anyone wanting to make use of the advice service signs up by Friday." }, drill: { jp: "Viele wollen die Beratung in Anspruch nehmen", en: "Many want to make use of the advice service" }, accept: ["to make use of", "to take advantage of", "to claim", "to use"], hint: "Der Anspruch is the claim or entitlement. Also of time: die Arbeit nimmt mich sehr in Anspruch — it takes a lot out of me." },
        { id: "de-u107l2-bezugnehmen", type: "vocab", front: "Bezug nehmen", reading: "bezugnehmen", meaning: "to refer (make reference to)", example: { jp: "Der zweite Brief nimmt Bezug auf ein Gespräch vom letzten Herbst.", en: "The second letter refers to a conversation from last autumn." }, drill: { jp: "Wir möchten auf Ihr Schreiben Bezug nehmen", en: "We would like to refer to your letter" }, accept: ["to refer", "to make reference", "to refer to"], hint: "Always Bezug nehmen auf + accusative. The opening line of a German business letter is built from it." },
      ],
    },
    {
      id: "de-u107l3",
      unit: 107,
      lesson: 3,
      title: "Passiversatz und Vorschrift",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what can and must be done without using the passive: it can be done, it is to be noted, the rules provide for it, the law comes into force.",
      items: [
        { id: "de-u107l3-lasstsich", type: "vocab", front: "lässt sich", reading: "lasstsich", meaning: "can be (done) — passive with lassen", example: { jp: "Der Fehler lässt sich in zwei Minuten beheben.", en: "The error can be fixed in two minutes." }, drill: { jp: "Das Problem lässt sich schnell lösen", en: "The problem can be solved quickly" }, accept: ["can be", "can be done", "is able to be", "it is possible to"], hint: "The commonest passive substitute in German: lässt sich + infinitive = kann … werden, but shorter and less heavy." },
        { id: "de-u107l3-istzubeachten", type: "vocab", front: "ist zu beachten", reading: "istzubeachten", meaning: "is to be observed (must be noted)", example: { jp: "Bei der Anmeldung ist die Frist zu beachten, sonst wird der Antrag nicht bearbeitet.", en: "When registering, the deadline is to be observed, otherwise the application is not processed." }, drill: { jp: "Die Frist ist zu beachten", en: "The deadline is to be observed" }, accept: ["is to be observed", "must be noted", "is to be noted", "must be observed"], hint: "sein + zu + infinitive is a passive with an obligation baked in: das ist zu tun = that has to be done." },
        { id: "de-u107l3-vorsehen", type: "vocab", front: "vorsehen", reading: "vorsehen", meaning: "to provide for (stipulate in advance)", example: { jp: "Der Vertrag sieht vor, dass beide Seiten jedes Jahr neu verhandeln.", en: "The contract provides that both sides renegotiate every year." }, drill: { jp: "Das Gesetz soll harte Sanktionen vorsehen", en: "The law is to provide for tough sanctions" }, accept: ["to provide for", "to stipulate", "to envisage", "to plan for"], hint: "Separable: sieht … vor. Of people it means to earmark someone: er ist für die Stelle vorgesehen." },
        { id: "de-u107l3-vorliegen", type: "vocab", front: "vorliegen", reading: "vorliegen", meaning: "to be on hand (exist as a fact or document)", example: { jp: "Der Befund liegt seit gestern vor, aber niemand hat ihn gelesen.", en: "The findings have been on hand since yesterday, but nobody has read them." }, drill: { jp: "Die Zahlen sollen morgen endlich vorliegen", en: "The figures should finally be available tomorrow" }, accept: ["to be available", "to be on hand", "to exist", "to be present"], hint: "Officialese for something that exists and can be looked at: es liegt kein Grund vor = there is no reason." },
        { id: "de-u107l3-inkrafttreten", type: "vocab", front: "in Kraft treten", reading: "inkrafttreten", meaning: "to come into force", example: { jp: "Die neuen Grenzwerte treten im Januar in Kraft.", en: "The new limit values come into force in January." }, drill: { jp: "Das Gesetz wird im Januar in Kraft treten", en: "The law will come into force in January" }, accept: ["to come into force", "to take effect", "to enter into force"], hint: "Its opposite is außer Kraft treten — to cease to apply. Die Kraft (u34) is the force being entered." },
        { id: "de-u107l3-vornehmen", type: "vocab", front: "vornehmen", reading: "vornehmen", meaning: "to carry out (an official act)", example: { jp: "Die Behörde nimmt die Prüfung ohne Anmeldung vor.", en: "The authority carries out the inspection without notice." }, drill: { jp: "Die Behörde will eine Prüfung vornehmen", en: "The authority wants to carry out an inspection" }, accept: ["to carry out", "to perform", "to undertake", "to conduct"], hint: "Separable: nimmt … vor. Reflexively it is a resolution: ich habe mir vorgenommen, früher aufzustehen." },
      ],
    },
    {
      id: "de-u107l4",
      unit: 107,
      lesson: 4,
      title: "Der Nominalstil",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Handle the heavy abstract nouns German writing prefers to verbs — the matter, the facts, the wording — and say what a text covers or rests on.",
      items: [
        { id: "de-u107l4-dieangelegenheit", type: "vocab", front: "die Angelegenheit", reading: "dieangelegenheit", meaning: "matter (affair being dealt with)", example: { jp: "Die Angelegenheit ist seit dem Brief vom Mai nicht weitergekommen.", en: "The matter has not moved on since the letter of May." }, drill: { jp: "Die Angelegenheit liegt jetzt beim Amt", en: "The matter now lies with the office" }, accept: ["matter", "affair", "business", "issue"], hint: "The formal die Sache. Also personal: das ist meine Angelegenheit = that is my business." },
        { id: "de-u107l4-dersachverhalt", type: "vocab", front: "der Sachverhalt", reading: "dersachverhalt", meaning: "facts of the case (the state of affairs)", example: { jp: "Der Sachverhalt ist klar, nur die Folgen sind es nicht.", en: "The facts of the case are clear; only the consequences are not." }, drill: { jp: "Der Sachverhalt war schnell geklärt", en: "The facts of the case were clarified quickly" }, accept: ["facts of the case", "state of affairs", "circumstances", "the facts"], hint: "Sache + Verhalt (how things stand). A legal and administrative word: den Sachverhalt schildern." },
        { id: "de-u107l4-derwortlaut", type: "vocab", front: "der Wortlaut", reading: "derwortlaut", meaning: "wording (exact text as written)", example: { jp: "Im Wortlaut steht etwas anderes, als die Zeitung berichtet hat.", en: "The wording says something different from what the paper reported." }, drill: { jp: "Der Wortlaut der Regel ist eindeutig", en: "The wording of the rule is unambiguous" }, accept: ["wording", "exact wording", "text", "literal text"], hint: "Wort + Laut. Im Wortlaut means verbatim: eine Rede im Wortlaut abdrucken." },
        { id: "de-u107l4-umfassen", type: "vocab", front: "umfassen", reading: "umfassen", meaning: "to comprise (cover in extent)", example: { jp: "Der Bericht umfasst achtzig Seiten und drei Jahre.", en: "The report comprises eighty pages and three years." }, drill: { jp: "Der Bericht soll achtzig Seiten umfassen", en: "The report is to comprise eighty pages" }, accept: ["to comprise", "to cover", "to include", "to encompass"], hint: "Inseparable here — umfasst, umfasste, umfasst. Beinhalten is its close cousin: to have inside it." },
        { id: "de-u107l4-beruhen", type: "vocab", front: "beruhen", reading: "beruhen", meaning: "to rest on (be based on)", example: { jp: "Die ganze Rechnung beruht auf Zahlen aus dem Jahr 2019.", en: "The whole calculation rests on figures from 2019." }, drill: { jp: "Die Kritik kann auf einem Irrtum beruhen", en: "The criticism may rest on an error" }, accept: ["to rest on", "to be based on", "to be founded on", "to derive from"], hint: "Always with auf + dative, and the auf-phrase comes first: auf einem Fehler beruhen. Never used alone." },
        { id: "de-u107l4-verfugen", type: "vocab", front: "verfügen", reading: "verfugen", meaning: "to have at one's disposal (über + accusative)", example: { jp: "Die Klinik verfügt über zwei eigene Stationen und ein kleines Institut.", en: "The clinic has two wards of its own and a small institute at its disposal." }, drill: { jp: "Das Institut kann über eigene Mittel verfügen", en: "The institute can draw on its own funds" }, accept: ["to have at one's disposal", "to have", "to possess", "to command"], hint: "Accusative after über. Alone, verfügen means to decree — die Behörde hat verfügt, dass …" },
      ],
    },
  ],
};
