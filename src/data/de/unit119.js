// DE Unit 119 — Zeit, Zahl und Maß (slot: coverage-b2-9) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Coverage pass — method in u114's header, card count in u115's.
//
// Self-check, dropped as same-lexeme duplicates: die Zahl (zaehlen u5),
// die Messung (messen u47), letzter (letztlich u84), die Wiederholung
// (wiederholen u21). die Reihe moved here from u118 when der Brief took its slot.
// FREE: gesetzt, gesprochen, zweite, einzige
export const DE_UNIT119 = {
  id: "de-u119",
  lang: "de",
  title: "Zeit, Zahl und Maß",
  order: 119,
  stage: "b2",
  lessons: [
    {
      id: "de-u119l1",
      unit: 119,
      lesson: 1,
      title: "Bereits, niemals, nochmal",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place an event on a timeline with one word — already, never, ever, again, or this time round.",
      items: [
        { id: "de-u119l1-bereits", type: "vocab", front: "bereits", reading: "bereits", meaning: "already (formal)", example: { jp: "Die Antwort liegt bereits vor, aber sie darf vor dem Montag niemand lesen.", en: "The answer is already available, but nobody may read it before Monday." }, drill: { jp: "Der Brief ist bereits im Haus", en: "The letter is already in the house" }, accept: ["already", "as early as", "by now", "previously"], hint: "Rank 720. The written twin of schon (u12): identical in meaning, but bereits belongs in a report and schon in speech. Never stressed the way schon can be." },
        { id: "de-u119l1-niemals", type: "vocab", front: "niemals", reading: "niemals", meaning: "never (emphatic)", example: { jp: "So etwas würde sie niemals sagen, auch dann nicht, wenn man sie sehr lange fragt.", en: "She would never say a thing like that, not even if you question her for a very long time." }, drill: { jp: "Das darf niemals wieder passieren", en: "That must never happen again" }, accept: ["never", "not ever", "at no time"], hint: "Rank 642. nie (u12) with -mals added for weight — the difference is emphasis, not meaning. Niemals! on its own is a flat refusal." },
        { id: "de-u119l1-jemals", type: "vocab", front: "jemals", reading: "jemals", meaning: "ever", example: { jp: "Wenn das Haus jemals verkauft wird, dann sicher nicht zu diesem Preis.", en: "If the house is ever sold, then certainly not at this price." }, drill: { jp: "Hat er jemals davon erzählt", en: "Has he ever told anyone about it" }, accept: ["ever", "at any time", "at any point"], hint: "Rank 1011. The positive counterpart of niemals, and it lives in questions and conditions — exactly where English uses 'ever'. In a plain statement German drops it." },
        { id: "de-u119l1-nochmal", type: "vocab", front: "nochmal", reading: "nochmal", meaning: "once more", example: { jp: "Du kannst den Text nochmal lesen, weil in der Mitte etwas Wichtiges steht.", en: "You can read the text once more, because something important is in the middle." }, drill: { jp: "Sag das bitte nochmal langsam", en: "Please say that once more slowly" }, accept: ["once more", "again", "one more time", "over again"], hint: "Rank 772. A spoken contraction of noch einmal, and written as one word. In anything formal, write noch einmal out." },
        { id: "de-u119l1-diesmal", type: "vocab", front: "diesmal", reading: "diesmal", meaning: "this time", example: { jp: "Diesmal beginnt die Gruppe früher, und deshalb ist am Abend fast alles fertig.", en: "This time the group begins earlier, and so by the evening almost everything is finished." }, drill: { jp: "Diesmal machen wir es besser", en: "This time we will do it better" }, accept: ["this time", "on this occasion"], hint: "Rank 1891. dieses Mal written as one word. The family runs on: letztes Mal, nächstes Mal, jedes Mal — those stay two words." },
      ],
    },
    {
      id: "de-u119l2",
      unit: 119,
      lesson: 2,
      title: "Zuvor, vorhin, unterwegs",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say when something happened relative to now — earlier today, before that, sooner, on the way, or as far as you know.",
      items: [
        { id: "de-u119l2-zuvor", type: "vocab", front: "zuvor", reading: "zuvor", meaning: "previously", example: { jp: "Kurz zuvor wusste niemand im Raum von diesem Ergebnis.", en: "Shortly beforehand nobody in the room knew of this result." }, drill: { jp: "Wir haben uns zuvor kurz gesprochen", en: "We spoke briefly beforehand" }, accept: ["beforehand", "before", "previously", "prior to that", "earlier"], hint: "Rank 1768. Points back from a moment in the past, not from now — for 'before now' German uses vorher or früher. nie zuvor is 'never before'." },
        { id: "de-u119l2-vorhin", type: "vocab", front: "vorhin", reading: "vorhin", meaning: "just now", example: { jp: "Vorhin stand noch ein Wagen vor dem Haus, und jetzt ist die Straße wieder leer.", en: "A car was standing in front of the house just now, and now the street is empty again." }, drill: { jp: "Vorhin war der Laden noch auf", en: "Just now the shop was still open" }, accept: ["just now", "a moment ago", "earlier on", "a short while ago"], hint: "Rank 1843. A narrow window — earlier today, within hours. Not interchangeable with vorher (u28), which is 'before' relative to some other event." },
        { id: "de-u119l2-eher", type: "vocab", front: "eher", reading: "eher", meaning: "more likely", example: { jp: "Das Problem ist eher die Zeit als das Geld.", en: "The problem is rather the time than the money." }, drill: { jp: "Ich bleibe eher zu Hause", en: "I would rather stay at home" }, accept: ["rather", "sooner", "more likely", "instead", "earlier"], hint: "Rank 1062. Literally the comparative of früh, so it can mean 'earlier' — but in modern use it almost always means 'rather' or 'more likely'. je eher, desto besser: the sooner the better." },
        { id: "de-u119l2-unterwegs", type: "vocab", front: "unterwegs", reading: "unterwegs", meaning: "on the way", example: { jp: "Der Wagen ist seit einer Stunde unterwegs und sollte bald bei euch sein.", en: "The van has been on the way for an hour and should be with you soon." }, drill: { jp: "Die Antwort ist schon unterwegs", en: "The answer is already on the way" }, accept: ["on the way", "en route", "out and about", "travelling", "traveling"], hint: "Rank 1144. Also 'out and about' generally — viel unterwegs sein is to travel a lot for work. Never takes an article." },
        { id: "de-u119l2-soweit", type: "vocab", front: "soweit", reading: "soweit", meaning: "as far as", example: { jp: "Soweit ich weiß, ist die Sache seit dem Sommer in Ordnung.", en: "As far as I know, the matter has been in order since the summer." }, drill: { jp: "Soweit ich sehe ist alles fertig", en: "As far as I can see everything is finished" }, accept: ["as far as", "so far as", "in so far as", "to that extent"], hint: "Rank 1734. Soweit ich weiß is the standard hedge — 'as far as I know'. Written apart, so weit, it is literal distance: so weit wie möglich." },
      ],
    },
    {
      id: "de-u119l3",
      unit: 119,
      lesson: 3,
      title: "Sekunde, Prozent, Meter",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read a figure out of a report — a second, a million, a percentage, a metre, and a rate per unit.",
      items: [
        { id: "de-u119l3-diesekunde", type: "vocab", front: "die Sekunde", reading: "diesekunde", meaning: "the second", example: { jp: "Eine Sekunde später war der Zug schon weg.", en: "A second later the train was already gone." }, drill: { jp: "Die Sekunde war viel zu kurz", en: "The second was far too short" }, accept: ["second", "the second", "moment", "instant"], hint: "Rank 1006. The time unit and, like English, a casual 'just a moment' — eine Sekunde, bitte. ⚠️ The course taught die Minute and die Stunde in u5 and skipped this one." },
        { id: "de-u119l3-diemillion", type: "vocab", front: "die Million", reading: "diemillion", meaning: "the million", example: { jp: "Über eine Million Menschen leben in dieser Stadt, aber nur wenige arbeiten auch dort.", en: "Over a million people live in this city, but only a few also work there." }, drill: { jp: "Die Million war schnell weg", en: "The million was quickly gone" }, accept: ["million", "the million", "a million"], hint: "Rank 893. A noun, unlike hundert and tausend — so it is capitalised and takes a plural: zwei Millionen. ⚠️ u16 and u87 both cover numbers and neither reached this far." },
        { id: "de-u119l3-dasprozent", type: "vocab", front: "das Prozent", reading: "dasprozent", meaning: "the percent", example: { jp: "Nur zwei Prozent der Leser kommen bis zum Ende, und trotzdem wird der Text immer länger.", en: "Only two percent of readers get to the end, and yet the text keeps getting longer." }, drill: { jp: "Das Prozent macht hier viel aus", en: "The percent makes a big difference here" }, accept: ["percent", "per cent", "the percent", "percentage point"], hint: "Tier B — the corpus was already using this word with no card behind it. After a number it stays singular: zehn Prozent, never 'Prozente'." },
        { id: "de-u119l3-dermeter", type: "vocab", front: "der Meter", reading: "dermeter", meaning: "the metre", example: { jp: "Der Weg ist keine hundert Meter lang, trotzdem dauert er bei diesem Wetter lange genug.", en: "The path is not a hundred metres long; even so it takes long enough in this weather." }, drill: { jp: "Der Meter kostet zehn Euro", en: "The metre costs ten euros" }, accept: ["metre", "meter", "the metre", "the meter"], hint: "Tier B, like Prozent. Masculine in standard German, though many speakers say das Meter. After a number it stays singular: drei Meter." },
        { id: "de-u119l3-pro", type: "vocab", front: "pro", reading: "pro", meaning: "per", example: { jp: "Pro Woche kommen etwa dreißig Briefe an.", en: "About thirty letters arrive per week." }, drill: { jp: "Wir zahlen zehn Euro pro Stunde", en: "We pay ten euros per hour" }, accept: ["per", "a", "each", "for every"], hint: "Rank 1688. Takes no article at all — pro Tag, pro Person. Also stands alone as 'for': das Pro und Contra, the pros and cons." },
      ],
    },
    {
      id: "de-u119l4",
      unit: 119,
      lesson: 4,
      title: "Der zweite und der einzige",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Put things in order and pick one out — the second, a further one, the only one, a row and a list.",
      items: [
        { id: "de-u119l4-zweiter", type: "vocab", front: "zweiter", reading: "zweiter", meaning: "second (in order)", example: { jp: "Der zweite Weg ist länger, aber er führt nicht durch die Stadt und ist deshalb oft schneller.", en: "The second route is longer, but it doesn't go through the city and is therefore often faster." }, drill: { jp: "Ein zweiter Versuch war besser", en: "A second attempt was better" }, accept: ["second", "the second"], hint: "Rank 1703. Ordinals below 20 take -t on the number (zwei → zweit-) and then an adjective ending; from 20 up it is -st (zwanzigste). Written as a figure with a full stop: der 2. Mai." },
        { id: "de-u119l4-weiterer", type: "vocab", front: "weiterer", reading: "weiterer", meaning: "further (additional)", example: { jp: "Ein weiterer Grund ist das Geld, aber darüber will im Moment niemand sprechen.", en: "A further reason is the money, but nobody wants to speak about that at the moment." }, drill: { jp: "Ein weiterer Tag ging vorbei", en: "A further day went by" }, accept: ["further", "additional", "another", "more"], hint: "Rank 1290. The adjective from weiter (u21). ohne weiteres means 'without further ado' — one of the commonest set phrases in written German." },
        { id: "de-u119l4-einziger", type: "vocab", front: "einziger", reading: "einziger", meaning: "only (sole)", example: { jp: "Der einzige Zug am Morgen fährt um sechs, und wer ihn nicht nimmt, wartet sehr lange.", en: "The only train in the morning leaves at six, and whoever doesn't take it waits a very long time." }, drill: { jp: "Das war mein einziger Fehler", en: "That was my only mistake" }, accept: ["only", "sole", "single", "one and only"], hint: "Rank 579. From eins. Careful with the near-twin einzeln, which means 'individual' or 'separate' — einzige is 'the only', einzelne 'the individual ones'." },
        { id: "de-u119l4-diereihe", type: "vocab", front: "die Reihe", reading: "diereihe", meaning: "the row", example: { jp: "In der ersten Reihe war kein Platz mehr frei, deshalb haben wir uns nach hinten gesetzt.", en: "In the first row there was no seat left free, so we sat at the back." }, drill: { jp: "Die Reihe war schon ganz voll", en: "The row was already completely full" }, accept: ["row", "the row", "line", "series", "queue"], hint: "Rank 1948. A row of seats and also a series — eine Reihe von Fragen. Ich bin an der Reihe means 'it is my turn'." },
        { id: "de-u119l4-dieliste", type: "vocab", front: "die Liste", reading: "dieliste", meaning: "the list", example: { jp: "Auf der Liste stehen mehr Namen als Plätze, und deshalb muss jemand die Sache noch einmal lesen.", en: "On the list there are more names than places, and so somebody has to read the matter again." }, drill: { jp: "Die Liste hängt an der Tür", en: "The list hangs on the door" }, accept: ["list", "the list", "roster", "register"], hint: "Rank 908. auf der Liste stehen is to be on the list — auf, not 'in'. ⚠️ Untaught despite u76 (Auf dem Amt) and u83 (Post und Lieferung), both of which are full of lists." },
      ],
    },
  ],
};
