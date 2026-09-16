// DE Unit 73 — Höflich und vorsichtig (slot: register 2) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js. Style note: see de/unit63.js.
//
// RETHEMED SLOT, and its boundary matters. The scaffold calls this "Register 2 —
// softening and formality"; block 1's u54 slot is "Hedging and uncertainty". Those
// two would collide if this unit took the epistemic words (vielleicht, vermutlich,
// wahrscheinlich, moeglicherweise) — so it does not. Block 1 owns HOW SURE you
// are; this unit owns HOW YOU SOUND while saying it: the Modalpartikeln that
// English has no word for, the polite request, and the tact vocabulary.
// If the two units still overlap on merge, lower slot wins and block 1 keeps it.
//
// l1 is the hardest lesson in the block to gloss, because a Modalpartikel has no
// meaning you can translate — mal, bloss, wohl and schon change the ATTITUDE of a
// sentence, not its content. Each meaning is therefore the effect, and each hint
// names the mistake: these words are unstressed, and stressing them turns them
// back into their ordinary selves (schon = already, eben = flat).
// NOT taken, already taught: doch (u12), ruhig (u22), vorsichtig (u19), zoegern
// (u48), leider (u12), hoeflich (u12). Pairs inside the unit: only verzeihen (not
// die Verzeihung), only zurueckhaltend (not die Zurueckhaltung) is carded.
// FREE: Anna, Thomas, Lena, Max, Schmidt, Berlin, Hamburg, Kollegen, Jahre, sein
export const DE_UNIT73 = {
  id: "de-u73",
  lang: "de",
  title: "Höflich und vorsichtig",
  order: 73,
  stage: "b1",
  lessons: [
    {
      id: "de-u73l1",
      unit: 73,
      lesson: 1,
      title: "Die Modalpartikeln",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Change the attitude of a sentence without changing its words: just, only, probably, don't worry, at all, actually.",
      items: [
        { id: "de-u73l1-mal", type: "vocab", front: "mal", reading: "mal", meaning: "just", example: { jp: "Warte mal einen Moment, ich hole das Geld aus dem Zimmer.", en: "Just wait a moment, I will fetch the money from the room." }, drill: { jp: "Warte mal einen Moment", en: "Just wait a moment" }, accept: ["just", "for a moment", "would you", "once"], hint: "Short for einmal. Put it in an order and the order turns into a request." },
        { id: "de-u73l1-bloss", type: "vocab", front: "bloß", reading: "bloss", meaning: "only", example: { jp: "Mach das bloß nicht, der Chef wartet schon auf die Antwort.", en: "Just don't do that, the boss is already waiting for the answer." }, drill: { jp: "Mach das bloß nicht", en: "Just do not do that" }, accept: ["only", "just", "whatever you do", "merely"], hint: "In a warning it means 'whatever you do'; elsewhere it is the same as nur. ß, so the reading is written with ss." },
        { id: "de-u73l1-wohl", type: "vocab", front: "wohl", reading: "wohl", meaning: "probably", example: { jp: "Der Zug hat wohl wegen des Sturms eine Stunde Verspätung.", en: "The train is probably an hour late because of the storm." }, drill: { jp: "Das ist wohl richtig", en: "That is probably right" }, accept: ["probably", "I suppose", "presumably", "no doubt"], hint: "Unstressed it means 'probably'. Stressed and alone it means 'well': mir ist wohl." },
        { id: "de-u73l1-schon", type: "vocab", front: "schon", reading: "schon", meaning: "don't worry", example: { jp: "Es ist schon gut, wir machen die Arbeit morgen.", en: "It is all right, we will do the work tomorrow." }, drill: { jp: "Es ist schon gut", en: "It is all right" }, accept: ["don't worry", "all right", "already", "surely", "it's fine"], hint: "Two lives: stressed it is 'already' (schon um acht), unstressed it calms the hearer down." },
        { id: "de-u73l1-uberhaupt", type: "vocab", front: "überhaupt", reading: "uberhaupt", meaning: "at all", example: { jp: "Der Preis ist überhaupt nicht gut, wir kaufen das Auto nicht.", en: "The price is not good at all, we are not buying the car." }, drill: { jp: "Das ist überhaupt nicht gut", en: "That is not good at all" }, accept: ["at all", "in general", "anyway", "whatsoever"], hint: "With nicht or kein it sharpens the no. On its own in a question: Willst du überhaupt?" },
        { id: "de-u73l1-eigentlich", type: "vocab", front: "eigentlich", reading: "eigentlich", meaning: "actually", example: { jp: "Eigentlich wollten wir bleiben, aber der Zug fährt um zehn.", en: "We actually wanted to stay, but the train goes at ten." }, drill: { jp: "Eigentlich wollten wir bleiben", en: "We actually wanted to stay" }, accept: ["actually", "really", "as a matter of fact", "in fact"], hint: "Flags that what follows did not happen, or softens a question: Wie alt bist du eigentlich?" },
      ],
    },
    {
      id: "de-u73l2",
      unit: 73,
      lesson: 2,
      title: "Höflich fragen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Ask for something without pressing: may I, would you have time, to enquire, to follow up, to forgive, to offend.",
      items: [
        { id: "de-u73l2-durfteich", type: "vocab", front: "dürfte ich", reading: "durfteich", meaning: "may I", example: { jp: "Dürfte ich kurz fragen, wie lange die Therapie dauert?", en: "Might I briefly ask how long the therapy takes?" }, drill: { jp: "Dürfte ich kurz fragen", en: "Might I briefly ask" }, accept: ["may I", "might I", "could I", "would I be allowed to"], hint: "Built on dürfte (u70). Softer than Kann ich and much softer than Ich will." },
        { id: "de-u73l2-hattensiezeit", type: "vocab", front: "hätten Sie Zeit", reading: "hattensiezeit", meaning: "would you have time", example: { jp: "Hätten Sie Zeit für einen kurzen Termin am Montag?", en: "Would you have time for a short appointment on Monday?" }, drill: { jp: "Hätten Sie Zeit am Montag", en: "Would you have time on Monday" }, accept: ["would you have time", "do you have time", "have you got time", "are you free"], hint: "The Konjunktiv hätten is what makes it a request instead of a demand." },
        { id: "de-u73l2-sicherkundigen", type: "vocab", front: "sich erkundigen", reading: "sicherkundigen", meaning: "to enquire", example: { jp: "Vor der Reise erkundigt sich mein Vater immer nach dem Wetter.", en: "Before the trip my father always enquires about the weather." }, drill: { jp: "Der Kunde will sich erkundigen", en: "The customer wants to enquire" }, accept: ["to enquire", "to inquire", "to ask about", "to find out"], hint: "sich nach etwas erkundigen. More careful than fragen, and always about information." },
        { id: "de-u73l2-nachfragen", type: "vocab", front: "nachfragen", reading: "nachfragen", meaning: "to follow up", example: { jp: "Auf die Anfrage kam keine Antwort, also fragen wir noch mal nach.", en: "No answer came to the enquiry, so we are following up once more." }, drill: { jp: "Wir wollen morgen noch nachfragen", en: "We want to follow up tomorrow" }, accept: ["to follow up", "to ask again", "to check", "to enquire"], hint: "Separable: ich frage nach. Asking a SECOND time, politely." },
        { id: "de-u73l2-verzeihen", type: "vocab", front: "verzeihen", reading: "verzeihen", meaning: "to forgive", example: { jp: "Bitte verzeihen Sie die Verspätung bei der Antwort von gestern.", en: "Please forgive the delay with yesterday's answer." }, drill: { jp: "Bitte verzeihen Sie die Verspätung", en: "Please forgive the delay" }, accept: ["to forgive", "to pardon", "to excuse"], hint: "Verzeihung! is a formal 'sorry' or 'excuse me'. Warmer than Entschuldigung." },
        { id: "de-u73l2-beleidigen", type: "vocab", front: "beleidigen", reading: "beleidigen", meaning: "to offend", example: { jp: "Ein saloppes Wort kann einen alten Kollegen schnell beleidigen.", en: "A casual word can quickly offend an old colleague." }, drill: { jp: "Das Wort kann Kollegen beleidigen", en: "The word can offend colleagues" }, accept: ["to offend", "to insult", "to hurt someone's feelings"], hint: "beleidigt sein = to be in a huff. Stronger than ärgern." },
      ],
    },
    {
      id: "de-u73l3",
      unit: 73,
      lesson: 3,
      title: "Vorsichtig sagen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say something difficult gently: possibly, if need be, reluctantly, to hint at, to tone down, reserved.",
      items: [
        { id: "de-u73l3-eventuell", type: "vocab", front: "eventuell", reading: "eventuell", meaning: "possibly", example: { jp: "Wir kommen eventuell später, weil der Zug Verspätung hat.", en: "We may possibly come later, because the train is delayed." }, drill: { jp: "Wir kommen eventuell später", en: "We may possibly come later" }, accept: ["possibly", "perhaps", "maybe", "if necessary"], hint: "⚠️ Not English 'eventually'. It means MAYBE, and getting this wrong is the classic error." },
        { id: "de-u73l3-gegebenenfalls", type: "vocab", front: "gegebenenfalls", reading: "gegebenenfalls", meaning: "if need be", example: { jp: "Gegebenenfalls schreiben wir Ihnen noch eine kurze Mitteilung.", en: "If need be we will write you another short notice." }, drill: { jp: "Gegebenenfalls schreiben wir Ihnen morgen", en: "If need be we will write to you tomorrow" }, accept: ["if need be", "if necessary", "where applicable", "should the case arise"], hint: "Five syllables of pure officialese; letters shorten it to ggf." },
        { id: "de-u73l3-ungern", type: "vocab", front: "ungern", reading: "ungern", meaning: "reluctantly", example: { jp: "Ich sage das sehr ungern, aber die Arbeit ist nicht gut.", en: "I say this very reluctantly, but the work is not good." }, drill: { jp: "Ich sage das sehr ungern", en: "I say this very reluctantly" }, accept: ["reluctantly", "unwillingly", "not gladly"], hint: "The plain opposite of gern (u3), and a soft way to open bad news." },
        { id: "de-u73l3-andeuten", type: "vocab", front: "andeuten", reading: "andeuten", meaning: "to hint at", example: { jp: "Der Chef wollte etwas andeuten, aber er sagte es nicht genau.", en: "The boss wanted to hint at something, but he did not say it precisely." }, drill: { jp: "Der Chef wollte etwas andeuten", en: "The boss wanted to hint at something" }, accept: ["to hint at", "to suggest", "to indicate", "to imply"], hint: "Separable: er deutet es an. Saying it without saying it." },
        { id: "de-u73l3-abschwachen", type: "vocab", front: "abschwächen", reading: "abschwachen", meaning: "to tone down", example: { jp: "Vor dem Termin wollen wir die harte Kritik noch abschwächen.", en: "Before the appointment we want to tone the harsh criticism down." }, drill: { jp: "Wir wollen die Kritik abschwächen", en: "We want to tone down the criticism" }, accept: ["to tone down", "to soften", "to weaken", "to play down"], hint: "Separable, from schwach. Its opposite is verstärken." },
        { id: "de-u73l3-zuruckhaltend", type: "vocab", front: "zurückhaltend", reading: "zuruckhaltend", meaning: "reserved", example: { jp: "Der neue Kollege ist zurückhaltend, aber er arbeitet sehr genau.", en: "The new colleague is reserved, but he works very precisely." }, drill: { jp: "Der neue Kollege ist zurückhaltend", en: "The new colleague is reserved" }, accept: ["reserved", "restrained", "cautious", "held back"], hint: "zurück + halten: holding yourself back. A compliment in German, not a criticism." },
      ],
    },
    {
      id: "de-u73l4",
      unit: 73,
      lesson: 4,
      title: "Takt und Rücksicht",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how someone handles other people: tactful, considerate, gentle, discreet, pushy, non-binding.",
      items: [
        { id: "de-u73l4-taktvoll", type: "vocab", front: "taktvoll", reading: "taktvoll", meaning: "tactful", example: { jp: "Die Antwort vom Arzt war sehr taktvoll und trotzdem genau.", en: "The doctor's answer was very tactful and precise all the same." }, drill: { jp: "Die Antwort war sehr taktvoll", en: "The answer was very tactful" }, accept: ["tactful", "tactfully", "sensitive", "diplomatic"], hint: "der Takt + voll. Its opposite, taktlos, is a hard word to hear about yourself." },
        { id: "de-u73l4-rucksichtsvoll", type: "vocab", front: "rücksichtsvoll", reading: "rucksichtsvoll", meaning: "considerate", example: { jp: "Der Nachbar über uns ist am Abend immer rücksichtsvoll.", en: "The neighbour above us is always considerate in the evening." }, drill: { jp: "Der Nachbar ist immer rücksichtsvoll", en: "The neighbour is always considerate" }, accept: ["considerate", "thoughtful", "mindful of others"], hint: "die Rücksicht (u68) + voll. The opposite is rücksichtslos." },
        { id: "de-u73l4-behutsam", type: "vocab", front: "behutsam", reading: "behutsam", meaning: "gentle", example: { jp: "Die Schwester ist mit alten Patienten sehr behutsam.", en: "The nurse is very gentle with old patients." }, drill: { jp: "Die Schwester ist sehr behutsam", en: "The nurse is very gentle" }, accept: ["gentle", "gently", "careful", "cautious", "tender"], hint: "From hüten, to watch over. Of hands and of words alike." },
        { id: "de-u73l4-diskret", type: "vocab", front: "diskret", reading: "diskret", meaning: "discreet", example: { jp: "Der Arzt ist diskret und sagt nichts über die Diagnose.", en: "The doctor is discreet and says nothing about the diagnosis." }, drill: { jp: "Der Arzt ist immer diskret", en: "The doctor is always discreet" }, accept: ["discreet", "discreetly", "confidential", "tactful"], hint: "Stress the end: dis-KRET. Close to vertraulich (u72) but about a person." },
        { id: "de-u73l4-aufdringlich", type: "vocab", front: "aufdringlich", reading: "aufdringlich", meaning: "pushy", example: { jp: "Die Werbung vor der Sendung ist laut und sehr aufdringlich.", en: "The advertising before the programme is loud and very pushy." }, drill: { jp: "Die Werbung ist sehr aufdringlich", en: "The advertising is very pushy" }, accept: ["pushy", "intrusive", "obtrusive", "insistent"], hint: "auf + dringen, to press in. Of people, of smells and of adverts." },
        { id: "de-u73l4-unverbindlich", type: "vocab", front: "unverbindlich", reading: "unverbindlich", meaning: "non-binding", example: { jp: "Das Angebot von der Firma ist ganz unverbindlich und kostet nichts.", en: "The offer from the firm is entirely non-binding and costs nothing." }, drill: { jp: "Das Angebot ist ganz unverbindlich", en: "The offer is entirely non-binding" }, accept: ["non-binding", "without obligation", "free of commitment", "noncommittal"], hint: "un + verbindlich, from verbinden (to bind together) - NOT from der Vertrag, which is from vertragen. On a quote it means you can still say no." },
      ],
    },
  ],
};
