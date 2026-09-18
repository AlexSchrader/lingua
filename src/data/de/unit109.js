// DE Unit 109 — Der höfliche Abstand ("Polite distance") — B2 (slot: register-3)
// ⚠ SLOT RETHEMED, and deliberately. The scaffold called this slot "Register 3 — 敬語:
// humble and honorific", which is the Japanese system and names a thing German does not
// have (CLAUDE.md → "No front language": the CEFR band decides the level, the language
// decides the content of the slot). German marks deference with distance instead of with
// a separate verb paradigm: a formal address and closing (l1), a request put at arm's
// length (l2), taking yourself back before you object (l3), and naming what the other
// person did well (l4). The slot number is unchanged.
// u72 owns siezen/duzen/förmlich/die Anrede/sehr geehrte; u73 owns the hedging particles
// and dürfte ich — both are used in examples here and never re-taught.
export const DE_UNIT109 = {
  id: "de-u109",
  lang: "de",
  title: "Der höfliche Abstand",
  order: 109,
  stage: "b2",
  lessons: [
    {
      id: "de-u109l1",
      unit: 109,
      lesson: 1,
      title: "Anrede und Schlussformel",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Open and close a formal German letter correctly, and recognise how much distance each closing formula puts between you and the reader.",
      items: [
        { id: "de-u109l1-verehrt", type: "vocab", front: "verehrt", reading: "verehrt", meaning: "esteemed (in a ceremonial address)", example: { jp: "Verehrte Gäste, ich danke Ihnen, dass Sie den weiten Weg gemacht haben.", en: "Esteemed guests, I thank you for making the long journey." }, drill: { jp: "Dieser Dozent wird sehr verehrt", en: "This lecturer is greatly revered" }, accept: ["esteemed", "honoured", "respected", "dear"], hint: "For a speech or a very formal letter, above sehr geehrte (u72). Verehren alone means to revere." },
        { id: "de-u109l1-geschatzt", type: "vocab", front: "geschätzt", reading: "geschatzt", meaning: "valued (in a formal address)", example: { jp: "Geschätzte Kollegen, wir haben in diesem Jahr mehr geschafft als geplant.", en: "Valued colleagues, we have achieved more this year than planned." }, drill: { jp: "Ihre Arbeit wird hier sehr geschätzt", en: "Her work is greatly valued here" }, accept: ["valued", "esteemed", "respected"], hint: "Common in Switzerland and Austria as the standard formal address; in Germany it reads warmer than sehr geehrte." },
        { id: "de-u109l1-hochachtungsvoll", type: "vocab", front: "hochachtungsvoll", reading: "hochachtungsvoll", meaning: "yours faithfully (coldest closing)", example: { jp: "Der Brief endet mit Hochachtungsvoll, und das ist ein Signal für sich.", en: "The letter ends with Yours faithfully, and that is a signal in itself." }, drill: { jp: "Der Brief endete hochachtungsvoll und sehr kühl", en: "The letter ended faithfully and very coolly" }, accept: ["yours faithfully", "yours sincerely", "respectfully yours"], hint: "Today it is so formal that it reads as cold, even hostile — Germans use it when a lawyer is next. Default to Mit freundlichen Grüßen." },
        { id: "de-u109l1-mitfreundlichengrussen", type: "vocab", front: "mit freundlichen Grüßen", reading: "mitfreundlichengrussen", meaning: "kind regards (standard closing)", example: { jp: "Fast jeder Brief in Deutschland endet mit freundlichen Grüßen.", en: "Almost every letter in Germany ends with kind regards." }, drill: { jp: "Der Brief endet mit freundlichen Grüßen", en: "The letter ends with kind regards" }, accept: ["kind regards", "yours sincerely", "best regards", "yours faithfully"], hint: "The safe default in every professional letter and e-mail. Abbreviated MfG in a hurry — and that abbreviation is read as curt." },
        { id: "de-u109l1-verbleiben", type: "vocab", front: "verbleiben", reading: "verbleiben", meaning: "to remain (in a letter's closing sentence)", example: { jp: "Wir verbleiben mit freundlichen Grüßen und danken für Ihre Geduld.", en: "We remain, with kind regards, and thank you for your patience." }, drill: { jp: "Wir verbleiben mit freundlichen Grüßen", en: "We remain with kind regards" }, accept: ["to remain", "remain"], hint: "Also plain: es verbleibt wenig Zeit — little time remains. In a letter it only ever appears in that closing formula." },
        { id: "de-u109l1-imvoraus", type: "vocab", front: "im Voraus", reading: "imvoraus", meaning: "in advance (thanking beforehand)", example: { jp: "Vielen Dank im Voraus für Ihre Hilfe.", en: "Many thanks in advance for your help." }, drill: { jp: "Vielen Dank im Voraus für alles", en: "Many thanks in advance for everything" }, accept: ["in advance", "beforehand", "ahead of time"], hint: "Note the capital V and the single r — im Voraus, not *im voraus*. Also of payment: im Voraus bezahlen." },
      ],
    },
    {
      id: "de-u109l2",
      unit: 109,
      lesson: 2,
      title: "Ein Anliegen vortragen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Put a request at a formal distance: present it, ask for it in official German, suggest rather than demand, and ask the other side to be patient.",
      items: [
        { id: "de-u109l2-vortragen", type: "vocab", front: "vortragen", reading: "vortragen", meaning: "to present (put a matter formally)", example: { jp: "Sie durfte ihr Anliegen erst nach zwei Stunden vortragen.", en: "She was only allowed to present her request after two hours." }, drill: { jp: "Er möchte sein Anliegen persönlich vortragen", en: "He would like to present his request in person" }, accept: ["to present", "to put forward", "to set out", "to perform"], hint: "Separable: trägt … vor. Also of music and poetry — ein Gedicht vortragen." },
        { id: "de-u109l2-ersuchen", type: "vocab", front: "ersuchen", reading: "ersuchen", meaning: "to request formally (officialese)", example: { jp: "Wir ersuchen Sie, die Unterlagen bis Ende des Monats einzureichen.", en: "We request that you submit the documents by the end of the month." }, drill: { jp: "Wir ersuchen Sie um eine schnelle Antwort", en: "We request a swift answer from you" }, accept: ["to request", "to request formally", "to petition", "to ask"], hint: "Ersuchen um + accusative. Pure officialese — it is bitten wearing a uniform, and it is never used between friends." },
        { id: "de-u109l2-nahelegen", type: "vocab", front: "nahelegen", reading: "nahelegen", meaning: "to urge gently (strongly suggest)", example: { jp: "Der Dozent hat ihr nahegelegt, die Arbeit noch einmal zu schreiben.", en: "The lecturer strongly suggested that she write the paper again." }, drill: { jp: "Man wollte ihr eine lange Pause nahelegen", en: "They wanted to urge a long break on her" }, accept: ["to urge", "to suggest strongly", "to recommend", "to advise"], hint: "Literally to lay something near someone. Careful — in German public life, jemandem den Rücktritt nahelegen means he was pushed." },
        { id: "de-u109l2-umverstandnisbitten", type: "vocab", front: "um Verständnis bitten", reading: "umverstandnisbitten", meaning: "to ask for understanding", example: { jp: "Wir bitten um Verständnis, dass die Bearbeitung derzeit länger dauert.", en: "We ask for your understanding that processing currently takes longer." }, drill: { jp: "Wir müssen um Verständnis bitten", en: "We have to ask for understanding" }, accept: ["to ask for understanding", "to beg indulgence", "to ask for patience"], hint: "The standard apology on a German sign or notice — it asks for understanding rather than admitting a fault." },
        { id: "de-u109l2-sichgedulden", type: "vocab", front: "sich gedulden", reading: "sichgedulden", meaning: "to be patient (wait a while longer)", example: { jp: "Bitte gedulden Sie sich noch einen Moment, der Befund kommt gleich.", en: "Please be patient a moment longer; the findings are coming shortly." }, drill: { jp: "Hier muss man sich gedulden können", en: "Here one has to be able to be patient" }, accept: ["to be patient", "to wait patiently", "to bear with"], hint: "Reflexive, from die Geduld. Warten says wait; sich gedulden asks you to wait gracefully." },
        { id: "de-u109l2-dienen", type: "vocab", front: "dienen", reading: "dienen", meaning: "to serve (be of use to someone)", example: { jp: "Diese alte Formel dient heute nur noch der Höflichkeit.", en: "This old formula today serves only politeness." }, drill: { jp: "Diese Regel soll allen Betrieben dienen", en: "This rule is meant to serve all plants" }, accept: ["to serve", "to be of use", "to be of service"], hint: "Dative: jemandem dienen. Womit kann ich Ihnen dienen? survives only in very formal shops and hotels; Was kann ich für Sie tun? has replaced it everywhere else." },
      ],
    },
    {
      id: "de-u109l3",
      unit: 109,
      lesson: 3,
      title: "Sich zurücknehmen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Disagree without dropping the register: with respect, if I may say so, allowing for the other side's position and asking for a little forbearance.",
      items: [
        { id: "de-u109l3-mitverlaub", type: "vocab", front: "mit Verlaub", reading: "mitverlaub", meaning: "if I may say so (before a blunt remark)", example: { jp: "Mit Verlaub, diese Zahlen kann so niemand ernst nehmen.", en: "If I may say so, nobody can take these figures seriously like that." }, drill: { jp: "Mit Verlaub das halte ich für falsch", en: "If I may say so I consider that wrong" }, accept: ["if I may say so", "with respect", "with your permission", "if you will"], hint: "Der Verlaub is permission, and survives only in this phrase. It announces that something undiplomatic is coming." },
        { id: "de-u109l3-beiallemrespekt", type: "vocab", front: "bei allem Respekt", reading: "beiallemrespekt", meaning: "with all due respect", example: { jp: "Bei allem Respekt, das Institut hat die Frage nie untersucht.", en: "With all due respect, the institute has never investigated the question." }, drill: { jp: "Bei allem Respekt das überzeugt mich nicht", en: "With all due respect that does not convince me" }, accept: ["with all due respect", "with respect", "respectfully"], hint: "Works exactly like its English twin, including the irony: everyone knows the disagreement follows." },
        { id: "de-u109l3-wohlgemerkt", type: "vocab", front: "wohlgemerkt", reading: "wohlgemerkt", meaning: "mind you (note this qualification)", example: { jp: "Die Kosten sind gesunken, wohlgemerkt nur in der Stadt.", en: "The costs have fallen — mind you, only in the city." }, drill: { jp: "Das gilt wohlgemerkt nur für Neubauten", en: "That applies mind you only to new buildings" }, accept: ["mind you", "note that", "be it noted", "let it be said"], hint: "Flags the limit of your own claim before the reader finds it. A hedging word with a formal edge." },
        { id: "de-u109l3-dienachsicht", type: "vocab", front: "die Nachsicht", reading: "dienachsicht", meaning: "forbearance (indulgence towards a fault)", example: { jp: "Wir bitten um Nachsicht, wenn in der ersten Woche noch etwas fehlt.", en: "We ask for forbearance if something is still missing in the first week." }, drill: { jp: "Die Nachsicht der Kollegen war groß", en: "The colleagues showed great forbearance" }, accept: ["forbearance", "indulgence", "leniency", "understanding"], hint: "One step further than Verständnis: Nachsicht assumes there really is a fault. Nachsichtig sein mit jemandem." },
        { id: "de-u109l3-entgegenkommen", type: "vocab", front: "entgegenkommen", reading: "entgegenkommen", meaning: "to accommodate (move towards the other side)", example: { jp: "Die Firma ist uns beim Preis ein Stück entgegengekommen.", en: "The company accommodated us somewhat on the price." }, drill: { jp: "Die Kasse will uns beim Termin entgegenkommen", en: "The insurer wants to accommodate us on the appointment" }, accept: ["to accommodate", "to meet halfway", "to oblige", "to come towards"], hint: "The image is physical: walking towards someone. Dative: jemandem entgegenkommen." },
        { id: "de-u109l3-diekulanz", type: "vocab", front: "die Kulanz", reading: "diekulanz", meaning: "goodwill (help beyond what is owed)", example: { jp: "Die Firma hat aus Kulanz gezahlt, obwohl die Frist längst vorbei war.", en: "The company paid as a gesture of goodwill, although the deadline had long passed." }, drill: { jp: "Die Kulanz der Firma war überraschend groß", en: "The company's goodwill was surprisingly great" }, accept: ["goodwill", "discretionary help", "leniency", "as a gesture"], hint: "Aus Kulanz is the fixed phrase, and it means exactly: we did not have to, and we did." },
      ],
    },
    {
      id: "de-u109l4",
      unit: 109,
      lesson: 4,
      title: "Anerkennen und danken",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give someone credit in formal German: thank them, acknowledge what they did, value it, and say that someone is obliging to deal with.",
      items: [
        { id: "de-u109l4-danken", type: "vocab", front: "danken", reading: "danken", meaning: "to thank (formal verb)", example: { jp: "Wir danken Ihnen für die schnelle Antwort und die klaren Zahlen.", en: "We thank you for the quick reply and the clear figures." }, drill: { jp: "Wir danken Ihnen für Ihre Geduld", en: "We thank you for your patience" }, accept: ["to thank", "thank"], hint: "Dative: jemandem danken, never *jemanden*. Sich bedanken is the everyday reflexive version." },
        { id: "de-u109l4-anerkennen", type: "vocab", front: "anerkennen", reading: "anerkennen", meaning: "to acknowledge (give due recognition)", example: { jp: "Man muss anerkennen, dass die Stadt schneller gebaut hat als versprochen.", en: "One has to acknowledge that the city built faster than promised." }, drill: { jp: "Man muss seine Arbeit wirklich anerkennen", en: "One really has to acknowledge his work" }, accept: ["to acknowledge", "to recognise", "to accept", "to give credit for"], hint: "Two jobs: recognising an achievement, and recognising something officially — ein Diplom anerkennen." },
        { id: "de-u109l4-dieauszeichnung", type: "vocab", front: "die Auszeichnung", reading: "dieauszeichnung", meaning: "award (formal honour)", example: { jp: "Die Auszeichnung ging an ein Team, das jahrelang niemand beachtet hatte.", en: "The award went to a team nobody had paid attention to for years." }, drill: { jp: "Die Auszeichnung ging an ihr Team", en: "The award went to her team" }, accept: ["award", "honour", "distinction", "prize"], hint: "From auszeichnen, to mark out. Mit Auszeichnung bestehen means to pass with distinction." },
        { id: "de-u109l4-wurdigen", type: "vocab", front: "würdigen", reading: "wurdigen", meaning: "to pay tribute to (honour publicly)", example: { jp: "In seiner Rede hat der Dozent vor allem die Arbeit der Fachkräfte gewürdigt.", en: "In his speech the lecturer paid tribute above all to the work of the qualified staff." }, drill: { jp: "Die Rede sollte ihre Arbeit würdigen", en: "The speech was meant to pay tribute to her work" }, accept: ["to pay tribute to", "to honour", "to acknowledge", "to appreciate"], hint: "From würdig, worthy. Its negative is sharp: etwas keines Blickes würdigen — not to deign to look at it." },
        { id: "de-u109l4-diewertschatzung", type: "vocab", front: "die Wertschätzung", reading: "diewertschatzung", meaning: "appreciation (regard for a person)", example: { jp: "Ein Wort der Wertschätzung wirkt oft mehr als mehr Geld.", en: "A word of appreciation often has more effect than more money." }, drill: { jp: "Die Wertschätzung fehlt in vielen Betrieben", en: "Appreciation is missing in many workplaces" }, accept: ["appreciation", "esteem", "regard", "respect"], hint: "Wert + schätzen. The word every German workplace discussion about Kultur eventually reaches." },
        { id: "de-u109l4-zuvorkommend", type: "vocab", front: "zuvorkommend", reading: "zuvorkommend", meaning: "obliging (courteous and helpful)", example: { jp: "Das Personal war zuvorkommend, obwohl die Station völlig überlastet war.", en: "The staff were obliging, although the ward was completely overstretched." }, drill: { jp: "Der Dozent war ausgesprochen zuvorkommend", en: "The lecturer was extremely obliging" }, accept: ["obliging", "courteous", "attentive", "accommodating"], hint: "From zuvorkommen, to get there first: the obliging person meets your wish before you voice it." },
      ],
    },
  ],
};
