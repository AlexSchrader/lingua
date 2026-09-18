// DE Unit 108 — Den Text zusammenhalten ("Holding a text together") — B2 (slot: grammar-11, discourse, cohesion, hedged claims)
// THEME CONTRACT (block 2, u101–u113): grammar as function-word vocab. This unit owns
// what holds a longer text together — consequence and addition (l1), contrast and
// exception (l2), signposting your own text (l3), and hedging a claim so it survives
// (l4). u36 already owns zwar/allerdings/dennoch/einerseits/andererseits, u52 folglich,
// u54 the probability adverbs, u84 the Partikeln (ohnehin, gleichwohl, durchaus,
// letztlich, vielmehr) — all used in examples here, none re-taught.
// ⚠ Drill rule (u106/u107 headers): the drill must contain the front verbatim, so verb
// fronts get a modal and nothing is used that the Satzklammer would split.
export const DE_UNIT108 = {
  id: "de-u108",
  lang: "de",
  title: "Den Text zusammenhalten",
  order: 108,
  stage: "b2",
  lessons: [
    {
      id: "de-u108l1",
      unit: 108,
      lesson: 1,
      title: "Folge und Ergänzung",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Carry an argument forward in writing: therefore, accordingly, in addition, furthermore — without repeating also and deshalb in every sentence.",
      items: [
        { id: "de-u108l1-somit", type: "vocab", front: "somit", reading: "somit", meaning: "thus (and therefore)", example: { jp: "Die Frist ist abgelaufen, somit gilt der alte Vertrag weiter.", en: "The deadline has passed, thus the old contract continues to apply." }, drill: { jp: "Die Frist ist abgelaufen somit gilt alles weiter", en: "The deadline has passed thus everything still applies" }, accept: ["thus", "therefore", "hence", "consequently"], hint: "Draws the consequence from what was just said, and takes position 1 with the verb straight after: somit gilt …" },
        { id: "de-u108l1-dementsprechend", type: "vocab", front: "dementsprechend", reading: "dementsprechend", meaning: "accordingly (in line with that)", example: { jp: "Die Zahlen sind schlechter geworden, dementsprechend vorsichtig war der Bericht.", en: "The figures have got worse; the report was correspondingly cautious." }, drill: { jp: "Die Kosten steigen dementsprechend steigt der Preis", en: "The costs are rising accordingly the price rises" }, accept: ["accordingly", "correspondingly", "in line with that", "as a result"], hint: "Longer and more precise than also: it says the second thing matches the first in degree, not just that it follows." },
        { id: "de-u108l1-demnach", type: "vocab", front: "demnach", reading: "demnach", meaning: "according to that (as that would mean)", example: { jp: "Laut dem Institut sinkt der Verbrauch; demnach wäre das Ziel bald erreicht.", en: "According to the institute, consumption is falling; that would mean the goal is soon reached." }, drill: { jp: "Demnach wäre das Ziel bald erreicht", en: "According to that the goal would soon be reached" }, accept: ["according to that", "accordingly", "so", "that would mean"], hint: "Refers back to a source or a premise, not to a cause — the written twin of laut (u107) pointing backwards." },
        { id: "de-u108l1-zudem", type: "vocab", front: "zudem", reading: "zudem", meaning: "moreover (in addition to that)", example: { jp: "Der Zug war teuer; zudem hatte er zwei Stunden Verspätung.", en: "The train was expensive; moreover it was two hours late." }, drill: { jp: "Es war teuer zudem war es langsam", en: "It was expensive moreover it was slow" }, accept: ["moreover", "in addition", "besides", "furthermore"], hint: "The everyday written also-noch: shorter than außerdem and at home in a newspaper sentence." },
        { id: "de-u108l1-ferner", type: "vocab", front: "ferner", reading: "ferner", meaning: "furthermore (in a list of points)", example: { jp: "Ferner ist zu beachten, dass die Zuzahlung jedes Jahr neu festgelegt wird.", en: "Furthermore, it is to be noted that the co-payment is set anew each year." }, drill: { jp: "Ferner ist die Frist unbedingt zu beachten", en: "Furthermore the deadline is to be observed" }, accept: ["furthermore", "moreover", "in addition", "also"], hint: "Strictly a list word in official prose; as an adjective it still means more distant — in ferner Zukunft." },
        { id: "de-u108l1-insbesondere", type: "vocab", front: "insbesondere", reading: "insbesondere", meaning: "in particular (especially this one)", example: { jp: "Die Regel gilt für alle Betriebe, insbesondere für die großen.", en: "The rule applies to all plants, in particular to the large ones." }, drill: { jp: "Das gilt insbesondere für große Betriebe", en: "That applies in particular to large plants" }, accept: ["in particular", "especially", "particularly", "above all"], hint: "Picks one case out of a set you have just named. Besonders is its shorter, spoken form." },
      ],
    },
    {
      id: "de-u108l2",
      unit: 108,
      lesson: 2,
      title: "Gegensatz und Ausnahme",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Set two things against each other in writing, and mark what is left out: by contrast, on the other hand, apart from that, let alone.",
      items: [
        { id: "de-u108l2-hingegen", type: "vocab", front: "hingegen", reading: "hingegen", meaning: "by contrast (whereas)", example: { jp: "In der Stadt sind die Wartezeiten lang, auf dem Dorf hingegen fehlt der Arzt ganz.", en: "In the city the waiting times are long; in the village, by contrast, the doctor is missing entirely." }, drill: { jp: "Der Bericht war kurz die Debatte hingegen lang", en: "The report was short the debate by contrast long" }, accept: ["by contrast", "whereas", "on the other hand", "however"], hint: "Likes the middle of the clause, after the element it contrasts: die Kosten hingegen steigen. Dagegen (u69) does the same job in speech." },
        { id: "de-u108l2-demgegenuber", type: "vocab", front: "demgegenüber", reading: "demgegenuber", meaning: "as against that (set beside it)", example: { jp: "Die Kosten sind hoch. Demgegenüber steht ein Nutzen, den man erst in zehn Jahren sieht.", en: "The costs are high. Set against that is a benefit you only see in ten years." }, drill: { jp: "Demgegenüber steht ein klarer Nutzen", en: "Set against that is a clear benefit" }, accept: ["as against that", "in contrast", "set against that", "on the other hand"], hint: "Almost always with stehen: demgegenüber steht … It weighs two things, where hingegen merely contrasts them." },
        { id: "de-u108l2-imgegensatzdazu", type: "vocab", front: "im Gegensatz dazu", reading: "imgegensatzdazu", meaning: "in contrast to that", example: { jp: "Frankreich hat früh entschieden. Im Gegensatz dazu wird bei uns noch diskutiert.", en: "France decided early. In contrast, here it is still being discussed." }, drill: { jp: "Im Gegensatz dazu wird bei uns diskutiert", en: "In contrast here it is still being discussed" }, accept: ["in contrast to that", "by contrast", "unlike that", "as opposed to that"], hint: "The explicit version, useful when the contrast spans a paragraph. With a noun: im Gegensatz zu den Nachbarn." },
        { id: "de-u108l2-abgesehendavon", type: "vocab", front: "abgesehen davon", reading: "abgesehendavon", meaning: "apart from that (leaving that aside)", example: { jp: "Der Ton war hart. Abgesehen davon war das Gespräch nützlich.", en: "The tone was harsh. Apart from that the conversation was useful." }, drill: { jp: "Abgesehen davon war der Abend schön", en: "Apart from that the evening was nice" }, accept: ["apart from that", "aside from that", "other than that", "besides that"], hint: "From absehen, to look away from. With a clause: abgesehen davon, dass … — apart from the fact that." },
        { id: "de-u108l2-geschweigedenn", type: "vocab", front: "geschweige denn", reading: "geschweigedenn", meaning: "let alone (never mind)", example: { jp: "Er hat den Bericht nicht gelesen, geschweige denn verstanden.", en: "He has not read the report, let alone understood it." }, drill: { jp: "Niemand liest das geschweige denn versteht es", en: "Nobody reads that let alone understands it" }, accept: ["let alone", "never mind", "much less", "still less"], hint: "Only after a negative, and the second item is always the bigger one. Schweigen is to be silent — literally *not to speak of*." },
        { id: "de-u108l2-unteranderem", type: "vocab", front: "unter anderem", reading: "unteranderem", meaning: "among other things", example: { jp: "Die Stadt hat unter anderem zwei Schulen und ein Institut finanziert.", en: "The city financed, among other things, two schools and an institute." }, drill: { jp: "Wir haben unter anderem darüber gesprochen", en: "We spoke about that among other things" }, accept: ["among other things", "amongst others", "inter alia", "including"], hint: "Abbreviated u. a. in writing — the same shorthand you will meet in any German article." },
      ],
    },
    {
      id: "de-u108l3",
      unit: 108,
      lesson: 3,
      title: "Den eigenen Text führen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Steer a reader through your own text: as mentioned, in the following, to conclude — and name what you are doing with a source as you do it.",
      items: [
        { id: "de-u108l3-eingangs", type: "vocab", front: "eingangs", reading: "eingangs", meaning: "at the outset (earlier in this text)", example: { jp: "Wie eingangs gesagt, geht es hier nur um die Kosten.", en: "As said at the outset, this is only about the costs." }, drill: { jp: "Der Bericht nennt eingangs drei Punkte", en: "The report names three points at the outset" }, accept: ["at the outset", "at the beginning", "initially", "earlier"], hint: "Only ever about a text or a speech, never about time in general: wie eingangs erwähnt." },
        { id: "de-u108l3-imfolgenden", type: "vocab", front: "im Folgenden", reading: "imfolgenden", meaning: "in what follows", example: { jp: "Im Folgenden wird gezeigt, warum die Zahlen so schwer zu vergleichen sind.", en: "In what follows it is shown why the figures are so hard to compare." }, drill: { jp: "Im Folgenden werden drei Punkte erklärt", en: "In what follows three points are explained" }, accept: ["in what follows", "below", "in the following", "hereafter"], hint: "Announces your own structure — the opening move of a German essay or report. Note the capital F." },
        { id: "de-u108l3-erwahnen", type: "vocab", front: "erwähnen", reading: "erwahnen", meaning: "to mention (say in passing)", example: { jp: "Der Bericht erwähnt die Kosten nur in einer Fußnote.", en: "The report mentions the costs only in a footnote." }, drill: { jp: "Man sollte die Kosten wenigstens erwähnen", en: "One should at least mention the costs" }, accept: ["to mention", "mention", "to note", "to bring up"], hint: "In passing, without developing it. Erwähnenswert — worth mentioning — is the adjective you will meet in reviews." },
        { id: "de-u108l3-erlautern", type: "vocab", front: "erläutern", reading: "erlautern", meaning: "to explain in detail (set out)", example: { jp: "Die Dozentin hat den Unterschied an zwei Beispielen erläutert.", en: "The lecturer explained the difference using two examples." }, drill: { jp: "Sie wird den Unterschied genauer erläutern", en: "She will explain the difference in more detail" }, accept: ["to explain", "to set out", "to elucidate", "to expound"], hint: "Heavier than erklären: erläutern means walking through something step by step, usually in writing or a talk." },
        { id: "de-u108l3-anfuhren", type: "vocab", front: "anführen", reading: "anfuhren", meaning: "to cite (bring forward as support)", example: { jp: "Beide Seiten führen denselben Bericht an und kommen zu verschiedenen Schlüssen.", en: "Both sides cite the same report and reach different conclusions." }, drill: { jp: "Er kann dafür kein einziges Beispiel anführen", en: "He cannot cite a single example for it" }, accept: ["to cite", "to bring forward", "to adduce", "to quote"], hint: "Separable: führt … an. It also means to lead a group — der Anführer is the ringleader." },
        { id: "de-u108l3-abschliessend", type: "vocab", front: "abschließend", reading: "abschliessend", meaning: "in conclusion (as a final point)", example: { jp: "Abschließend bleibt festzuhalten, dass niemand die Zahlen wirklich prüft.", en: "In conclusion it remains to be noted that nobody really checks the figures." }, drill: { jp: "Abschließend möchte ich zwei Punkte nennen", en: "In conclusion I would like to name two points" }, accept: ["in conclusion", "finally", "to conclude", "lastly"], hint: "From abschließen, to close. Careful with the ß: abschließend, but abgeschlossen." },
      ],
    },
    {
      id: "de-u108l4",
      unit: 108,
      lesson: 4,
      title: "Vorsichtig behaupten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Make a claim you can defend: largely, as a rule, there is evidence for, this suggests — instead of stating everything flatly.",
      items: [
        { id: "de-u108l4-weitgehend", type: "vocab", front: "weitgehend", reading: "weitgehend", meaning: "largely (to a great extent)", example: { jp: "Die alten Regeln gelten weitgehend weiter, nur die Fristen sind kürzer.", en: "The old rules largely continue to apply; only the deadlines are shorter." }, drill: { jp: "Die alten Regeln gelten weitgehend weiter", en: "The old rules largely still apply" }, accept: ["largely", "to a great extent", "for the most part", "broadly"], hint: "Weit + gehend: it goes far, but not all the way. The honest word when something is almost but not quite true." },
        { id: "de-u108l4-tendenziell", type: "vocab", front: "tendenziell", reading: "tendenziell", meaning: "on the whole (as a tendency)", example: { jp: "Jüngere Leute lesen tendenziell weniger Zeitung, aber der Unterschied ist kleiner als gedacht.", en: "Younger people read the paper less on the whole, but the difference is smaller than assumed." }, drill: { jp: "Die Zahlen gehen tendenziell nach unten", en: "The figures tend to go downwards" }, accept: ["on the whole", "tends to", "as a tendency", "generally"], hint: "Marks a trend, not a rule, and immunises a claim against the one counter-example everybody will raise." },
        { id: "de-u108l4-inderregel", type: "vocab", front: "in der Regel", reading: "inderregel", meaning: "as a rule (usually)", example: { jp: "In der Regel dauert die Bearbeitung vier Wochen, im Sommer länger.", en: "As a rule the processing takes four weeks, longer in summer." }, drill: { jp: "In der Regel dauert es vier Wochen", en: "As a rule it takes four weeks" }, accept: ["as a rule", "usually", "normally", "generally"], hint: "Slightly more formal than normalerweise, and it quietly leaves room for exceptions." },
        { id: "de-u108l4-grosstenteils", type: "vocab", front: "größtenteils", reading: "grosstenteils", meaning: "for the most part", example: { jp: "Die Wohnungen sind größtenteils leer, obwohl sie fertig sind.", en: "The flats are for the most part empty, although they are finished." }, drill: { jp: "Die Wohnungen stehen größtenteils leer", en: "The flats are for the most part empty" }, accept: ["for the most part", "mostly", "largely", "in the main"], hint: "About quantity, where weitgehend is about degree: größtenteils counts, weitgehend measures." },
        { id: "de-u108l4-daraufhindeuten", type: "vocab", front: "darauf hindeuten", reading: "daraufhindeuten", meaning: "to suggest (point to a conclusion)", example: { jp: "Alles deutet darauf hin, dass die Zahlen aus zwei verschiedenen Jahren stammen.", en: "Everything suggests that the figures come from two different years." }, drill: { jp: "Vieles kann darauf hindeuten", en: "Much may point to that" }, accept: ["to suggest", "to point to", "to indicate", "to be a sign of"], hint: "The careful way to make a claim from evidence: it points, it does not prove. Separable: deutet darauf hin." },
        { id: "de-u108l4-mutmasslich", type: "vocab", front: "mutmaßlich", reading: "mutmasslich", meaning: "presumed (not yet established)", example: { jp: "Der mutmaßliche Fehler liegt in der Rechnung, geprüft hat sie aber noch niemand.", en: "The presumed error is in the calculation, but nobody has checked it yet." }, drill: { jp: "Er hat mutmaßlich davon gewusst", en: "He presumably knew about it" }, accept: ["presumed", "alleged", "suspected", "putative"], hint: "The word German news uses before a court has decided: der mutmaßliche Täter. Vermeintlich (u106) doubts the claim; mutmaßlich merely suspends it." },
      ],
    },
  ],
};
