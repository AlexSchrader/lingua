// DE Unit 64 — Medien und Unterhaltung (slot: media) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js. Style note: see de/unit63.js.
//
// THEME: how a programme is made and broadcast, and how it is judged. A2's u33
// "Technik und Kommunikation" owns the devices and u35 "Kultur und Freizeit" owns
// going out (die Buehne, das Publikum, der Zuschauer, der Schauspieler, die
// Werbung, die Zeitschrift are all already taught and are used here in examples).
// Block 1's u55 slot is "News and society", so the NEWS words are theirs: this
// unit stays on broadcast, film and criticism, and takes only die Schlagzeile,
// der Beitrag and die Reportage where they belong to a programme rather than to
// the press.
// FREE: Anna, Thomas, Lena, Berlin, Hamburg, Filme, Fotos, Minuten, Kinder, Musik, Sport, Konzert, Theater, Film, Serien, Folgen
export const DE_UNIT64 = {
  id: "de-u64",
  lang: "de",
  title: "Medien und Unterhaltung",
  order: 64,
  stage: "b1",
  lessons: [
    {
      id: "de-u64l1",
      unit: 64,
      lesson: 1,
      title: "Was im Fernsehen läuft",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what is on and how to get to it: a programme, a channel, an episode, to broadcast, to switch on, the remote.",
      items: [
        { id: "de-u64l1-diesendung", type: "vocab", front: "die Sendung", reading: "diesendung", meaning: "the programme", example: { jp: "Die Sendung über das Meer war sehr interessant.", en: "The programme about the sea was very interesting." }, drill: { jp: "Die Sendung kommt am Abend", en: "The programme is on in the evening" }, accept: ["programme", "the programme", "show", "the show", "broadcast"], hint: "From senden, to send. One show on television or radio." },
        { id: "de-u64l1-dersender", type: "vocab", front: "der Sender", reading: "dersender", meaning: "the station", example: { jp: "Der Sender zeigt am Wochenende immer alte Filme.", en: "The station always shows old films at the weekend." }, drill: { jp: "Der Sender zeigt viele Filme", en: "The station shows a lot of films" }, accept: ["station", "the station", "channel", "the channel", "broadcaster"], hint: "The organisation. der Kanal (l3) is the numbered slot you find it on." },
        { id: "de-u64l1-ausstrahlen", type: "vocab", front: "ausstrahlen", reading: "ausstrahlen", meaning: "to broadcast", example: { jp: "Der Sender will das Konzert am Samstag ausstrahlen.", en: "The station wants to broadcast the concert on Saturday." }, drill: { jp: "Sie wollen das Spiel ausstrahlen", en: "They want to broadcast the game" }, accept: ["to broadcast", "to air", "to transmit"], hint: "Separable: er strahlt es aus. Literally to radiate outwards." },
        { id: "de-u64l1-einschalten", type: "vocab", front: "einschalten", reading: "einschalten", meaning: "to switch on", example: { jp: "Am Abend schalten wir das Radio in der Küche ein.", en: "In the evening we switch the radio on in the kitchen." }, drill: { jp: "Wir wollen das Radio einschalten", en: "We want to switch on the radio" }, accept: ["to switch on", "to turn on"], hint: "Separable: ich schalte ein. The opposite is ausschalten." },
        { id: "de-u64l1-diefernbedienung", type: "vocab", front: "die Fernbedienung", reading: "diefernbedienung", meaning: "the remote control", example: { jp: "Die Fernbedienung liegt wieder unter dem Sofa.", en: "The remote control is under the sofa again." }, drill: { jp: "Die Fernbedienung liegt auf dem Tisch", en: "The remote control is on the table" }, accept: ["remote control", "the remote control", "the remote"], hint: "fern (far) + bedienen (to operate) — the thing that operates from far away." },
        { id: "de-u64l1-dasprogramm", type: "vocab", front: "das Programm", reading: "dasprogramm", meaning: "the schedule of shows", example: { jp: "Im Programm steht heute eine alte Sendung.", en: "There's an old show in the schedule today." }, drill: { jp: "Das Programm ist heute sehr lang", en: "The schedule is very long today" }, accept: ["programme", "the programme", "program", "schedule", "the schedule", "listings", "channel"], hint: "Two m's. The listings, and colloquially the channel itself: Was läuft im ersten Programm? die Sendung in this lesson is one single show." },
      ],
    },
    {
      id: "de-u64l2",
      unit: 64,
      lesson: 2,
      title: "Film und Geschichte",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a film as a made thing: the director, the script, the plot, the hero, a series, a comedy.",
      items: [
        { id: "de-u64l2-derregisseur", type: "vocab", front: "der Regisseur", reading: "derregisseur", meaning: "the director", example: { jp: "Der Regisseur arbeitet seit Jahren mit den gleichen Schauspielern.", en: "The director has worked with the same actors for years." }, drill: { jp: "Der Regisseur wartet auf die Schauspieler", en: "The director is waiting for the actors" }, accept: ["director", "the director", "the film director"], hint: "French word, German ending: Re-gi-SSÖR. The female form is die Regisseurin." },
        { id: "de-u64l2-dasdrehbuch", type: "vocab", front: "das Drehbuch", reading: "dasdrehbuch", meaning: "the screenplay", example: { jp: "Das Drehbuch für den neuen Film ist noch nicht bereit.", en: "The screenplay for the new film is not ready yet." }, drill: { jp: "Das Drehbuch ist sehr gut", en: "The screenplay is very good" }, accept: ["screenplay", "the screenplay", "script", "the script"], hint: "drehen (u44, to shoot a film) + Buch. einen Film drehen = to shoot a film." },
        { id: "de-u64l2-diehandlung", type: "vocab", front: "die Handlung", reading: "diehandlung", meaning: "the plot", example: { jp: "Die Handlung war schwer zu verstehen, aber die Bilder waren schön.", en: "The plot was hard to understand, but the pictures were beautiful." }, drill: { jp: "Die Handlung ist sehr spannend", en: "The plot is very exciting" }, accept: ["plot", "the plot", "the storyline", "the action"], hint: "From handeln (u48, to act). What actually happens in the story." },
        { id: "de-u64l2-derheld", type: "vocab", front: "der Held", reading: "derheld", meaning: "the hero", example: { jp: "Am Ende hilft der Held der ganzen Stadt.", en: "In the end the hero helps the whole city." }, drill: { jp: "Der Held kommt sehr spät nach Hause", en: "The hero comes home very late" }, accept: ["hero", "the hero"], hint: "Weak noun: den Helden, dem Helden. The female form is die Heldin." },
        { id: "de-u64l2-dieserie", type: "vocab", front: "die Serie", reading: "dieserie", meaning: "the series", example: { jp: "Die Serie hat vier Folgen und sie dauern je eine Stunde.", en: "The series has four episodes and they last an hour each." }, drill: { jp: "Die Serie hat viele Folgen", en: "The series has many episodes" }, accept: ["series", "the series", "the show"], hint: "Say it with a long ee: SEH-ri-e, three syllables." },
        { id: "de-u64l2-diekomodie", type: "vocab", front: "die Komödie", reading: "diekomodie", meaning: "the comedy", example: { jp: "Nach der schweren Woche wollten wir gern eine Komödie sehen.", en: "After the hard week we were glad to watch a comedy." }, drill: { jp: "Die Komödie war sehr lustig", en: "The comedy was very funny" }, accept: ["comedy", "the comedy"], hint: "Four syllables: ko-MÖ-di-e. The opposite genre is die Tragödie." },
      ],
    },
    {
      id: "de-u64l3",
      unit: 64,
      lesson: 3,
      title: "Aufnehmen und übertragen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle the recording side: a recording, to record, to transmit, a channel, a listener, a subscription.",
      items: [
        { id: "de-u64l3-dieaufnahme", type: "vocab", front: "die Aufnahme", reading: "dieaufnahme", meaning: "the recording", example: { jp: "Die Aufnahme aus dem Theater ist leider sehr laut.", en: "The recording from the theatre is unfortunately very loud." }, drill: { jp: "Die Aufnahme ist sehr gut", en: "The recording is very good" }, accept: ["recording", "the recording", "the take", "the admission"], hint: "Also the act of taking someone in: die Aufnahme im Krankenhaus." },
        { id: "de-u64l3-aufnehmen", type: "vocab", front: "aufnehmen", reading: "aufnehmen", meaning: "to record", example: { jp: "Wir nehmen das Konzert heute Abend mit dem Handy auf.", en: "We are recording the concert this evening with the phone." }, drill: { jp: "Wir wollen das Lied aufnehmen", en: "We want to record the song" }, accept: ["to record", "to take in", "to pick up"], hint: "Separable: ich nehme es auf. Strong verb: er nimmt auf." },
        { id: "de-u64l3-ubertragen", type: "vocab", front: "übertragen", reading: "ubertragen", meaning: "to transmit", example: { jp: "Der Sender überträgt das Spiel heute direkt aus Hamburg.", en: "The station is transmitting the game live from Hamburg today." }, drill: { jp: "Sie übertragen das Konzert im Radio", en: "They are transmitting the concert on the radio" }, accept: ["to transmit", "to broadcast", "to carry", "to transfer"], hint: "Inseparable, so no ge- in the past: es wurde übertragen." },
        { id: "de-u64l3-derkanal", type: "vocab", front: "der Kanal", reading: "derkanal", meaning: "the channel", example: { jp: "Auf dem neuen Kanal läuft am Abend immer Sport.", en: "There is always sport on the new channel in the evening." }, drill: { jp: "Der Kanal zeigt immer Sport", en: "The channel always shows sport" }, accept: ["channel", "the channel"], hint: "Plural takes an umlaut: die Kanäle. Also a canal in the water sense." },
        { id: "de-u64l3-derzuhorer", type: "vocab", front: "der Zuhörer", reading: "derzuhorer", meaning: "the listener", example: { jp: "Die Zuhörer im Radio waren mit der Sendung sehr zufrieden.", en: "The listeners on the radio were very happy with the programme." }, drill: { jp: "Der Zuhörer wartet auf die Musik", en: "The listener is waiting for the music" }, accept: ["listener", "the listener", "the audience member"], hint: "zuhören (to listen) + er. Its television twin, der Zuschauer, is u35." },
        { id: "de-u64l3-dasabonnement", type: "vocab", front: "das Abonnement", reading: "dasabonnement", meaning: "the subscription", example: { jp: "Das Abonnement für die Zeitschrift kostet im Jahr nicht viel.", en: "The subscription to the magazine does not cost much a year." }, drill: { jp: "Das Abonnement kostet zehn Euro", en: "The subscription costs ten euros" }, accept: ["subscription", "the subscription"], hint: "French spelling, French ending: a-bo-ne-MANG. Short form: das Abo." },
      ],
    },
    {
      id: "de-u64l4",
      unit: 64,
      lesson: 4,
      title: "Kritik und Quelle",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Judge what you watched and say where it came from: a review, to criticise, a source, a headline, a contribution, a report.",
      items: [
        { id: "de-u64l4-kritisieren", type: "vocab", front: "kritisieren", reading: "kritisieren", meaning: "to criticise", example: { jp: "Man kann einen Film kritisieren und ihn trotzdem gern sehen.", en: "You can criticise a film and still enjoy watching it." }, drill: { jp: "Wir kritisieren den neuen Film", en: "We criticise the new film" }, accept: ["to criticise", "to criticize", "to review"], hint: "-ieren verbs never take ge- in the past: kritisiert." },
        { id: "de-u64l4-dieschlagzeile", type: "vocab", front: "die Schlagzeile", reading: "dieschlagzeile", meaning: "the headline", example: { jp: "Die Schlagzeile war groß, aber der Text war sehr kurz.", en: "The headline was big, but the text was very short." }, drill: { jp: "Die Schlagzeile steht ganz oben", en: "The headline is right at the top" }, accept: ["headline", "the headline"], hint: "schlagen (to hit) + Zeile (a line of text) — the line that hits you." },
        { id: "de-u64l4-derbeitrag", type: "vocab", front: "der Beitrag", reading: "derbeitrag", meaning: "the item", example: { jp: "Nach den Nachrichten kommt ein kurzer Beitrag über die Schule.", en: "After the news there is a short item about the school." }, drill: { jp: "Der Beitrag dauert zehn Minuten", en: "The item lasts ten minutes" }, accept: ["item", "the item", "contribution", "the contribution", "piece", "article"], hint: "Anything you contribute: a piece in a programme, or a membership fee." },
        { id: "de-u64l4-diereportage", type: "vocab", front: "die Reportage", reading: "diereportage", meaning: "the news feature", example: { jp: "In der Reportage über die Insel sieht man die Familien bei der Arbeit.", en: "In the report about the island you see the families at work." }, drill: { jp: "Die Reportage kommt heute Abend", en: "The report is on this evening" }, accept: ["report", "the report", "the feature", "the documentary piece", "feature story"], hint: "French again: re-por-TAH-she. Longer and more personal than ein Beitrag." },
        { id: "de-u64l4-glaubwurdig", type: "vocab", front: "glaubwürdig", reading: "glaubwurdig", meaning: "credible", example: { jp: "Die Quelle ist glaubwürdig, deshalb hat die Redaktion den Bericht veröffentlicht.", en: "The source is credible, so the editorial team published the report." }, drill: { jp: "Die Quelle ist sehr glaubwürdig", en: "The source is very credible" }, accept: ["credible", "believable", "trustworthy", "plausible"], hint: "glauben + würdig (worthy): worth believing. The noun is die Glaubwürdigkeit." },
        { id: "de-u64l4-derverlag", type: "vocab", front: "der Verlag", reading: "derverlag", meaning: "the publisher", example: { jp: "Der Verlag hat das Buch veröffentlicht, obwohl der Autor noch sehr jung war.", en: "The publisher published the book, although the author was still very young." }, drill: { jp: "Der Verlag sitzt in München", en: "The publisher is based in Munich" }, accept: ["publisher", "the publisher", "publishing house", "the publishing house"], hint: "From verlegen, to publish. The house that pays for the book; der Autor writes it." },
      ],
    },
  ],
};
