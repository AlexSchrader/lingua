// DE Unit 111 — Entwicklung und Verlauf ("Change over time") — B2 (slot: coverage-b2-1)
// SLOT RETITLED per RUNBOOK §4: the scaffold's "Vocabulary 1 (B2)" marks the slot, not
// the theme. This coverage unit takes the language of CHANGE OVER TIME — rising and
// falling (l1), starting, lasting and stopping (l2), size and extent (l3), what is
// beginning to show (l4). It is the vocabulary every B2 text about figures needs and
// that no thematic unit owns.
// ⚠ Deliberately NOT here: degree adverbs (erheblich, geringfügig, marginal) and the
// abstraction nouns — block 1 owns u90 "Systems and abstraction" and u91 "Nuance and
// degree", and lower slot wins. This unit stays on movement and extent.
// u53 owns steigen/sinken/zunehmen/abnehmen, u59 allmählich/langfristig, u87 die Quote/
// der Durchschnitt/jeweils/knapp — all used in examples here, none re-taught.
export const DE_UNIT111 = {
  id: "de-u111",
  lang: "de",
  title: "Entwicklung und Verlauf",
  order: 111,
  stage: "b2",
  lessons: [
    {
      id: "de-u111l1",
      unit: 111,
      lesson: 1,
      title: "Steigen und sinken",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a curve in words: the rise, the fall, the ups and downs, and whether the movement is steady, jumpy or stuck.",
      items: [
        { id: "de-u111l1-deranstieg", type: "vocab", front: "der Anstieg", reading: "deranstieg", meaning: "rise (increase in a figure)", example: { jp: "Der Anstieg bei den Emissionen kam vor allem aus dem Verkehr.", en: "The rise in emissions came above all from traffic." }, drill: { jp: "Der Anstieg war stärker als erwartet", en: "The rise was stronger than expected" }, accept: ["rise", "increase", "growth", "climb"], hint: "From ansteigen. Careful with the pair: der Anstieg is the movement, der Höchststand the level reached." },
        { id: "de-u111l1-derruckgang", type: "vocab", front: "der Rückgang", reading: "derruckgang", meaning: "decline (fall in a figure)", example: { jp: "Nach dem Rückgang im Frühling sind die Zahlen wieder gestiegen.", en: "After the decline in spring the figures rose again." }, drill: { jp: "Der Rückgang hielt nur drei Monate", en: "The decline lasted only three months" }, accept: ["decline", "fall", "decrease", "drop"], hint: "zurück + gehen. The standard word in any German statistic: ein Rückgang um zehn Prozent." },
        { id: "de-u111l1-rucklaufig", type: "vocab", front: "rückläufig", reading: "rucklaufig", meaning: "falling (on a downward trend)", example: { jp: "Die Zahl der Anträge ist seit zwei Jahren rückläufig.", en: "The number of applications has been falling for two years." }, drill: { jp: "Die Zahlen sind seit Jahren rückläufig", en: "The figures have been falling for years" }, accept: ["falling", "declining", "on the decline", "decreasing"], hint: "The adjective to der Rückgang, and pure statistics register: rückläufige Tendenz." },
        { id: "de-u111l1-stetig", type: "vocab", front: "stetig", reading: "stetig", meaning: "steady (continuous and even)", example: { jp: "Der Verbrauch sinkt stetig, aber viel zu langsam für das Ziel.", en: "Consumption is falling steadily, but far too slowly for the target." }, drill: { jp: "Die Kosten steigen stetig weiter", en: "The costs keep rising steadily" }, accept: ["steady", "steadily", "continuous", "constant"], hint: "Even and without breaks. Ständig, which looks similar, means constantly in the sense of annoyingly often." },
        { id: "de-u111l1-sprunghaft", type: "vocab", front: "sprunghaft", reading: "sprunghaft", meaning: "erratic (in sudden jumps)", example: { jp: "Die Preise haben sich sprunghaft verändert, erst nach oben, dann in einer Woche zurück.", en: "The prices changed erratically, first upwards, then back within a week." }, drill: { jp: "Die Preise stiegen sprunghaft an", en: "The prices rose in sudden jumps" }, accept: ["erratic", "in jumps", "abrupt", "sharply"], hint: "From der Sprung. Of a person it is a criticism: ein sprunghafter Mensch cannot stay with one thing." },
        { id: "de-u111l1-stagnieren", type: "vocab", front: "stagnieren", reading: "stagnieren", meaning: "to stagnate (stop moving either way)", example: { jp: "Seit drei Jahren stagnieren die Zahlen auf hohem Niveau.", en: "For three years the figures have stagnated at a high level." }, drill: { jp: "Die Zahlen stagnieren seit drei Jahren", en: "The figures have stagnated for three years" }, accept: ["to stagnate", "stagnate", "to stall", "to flatline"], hint: "Neither up nor down. Die Stagnation is the noun, and in economic German it is always a complaint." },
      ],
    },
    {
      id: "de-u111l2",
      unit: 111,
      lesson: 2,
      title: "Anfangen, anhalten, aufhören",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say when something starts, how long it keeps going, when it weakens and when it simply fails to happen.",
      items: [
        { id: "de-u111l2-einsetzen", type: "vocab", front: "einsetzen", reading: "einsetzen", meaning: "to set in (begin, of a process)", example: { jp: "Der Regen hat am Nachmittag eingesetzt und bis zum Abend nicht aufgehört.", en: "The rain set in in the afternoon and did not stop until evening." }, drill: { jp: "Der Winter kann früh einsetzen", en: "Winter can set in early" }, accept: ["to set in", "to begin", "to start", "to commence"], hint: "Three senses worth keeping apart: a process sets in, a person is deployed (jemanden einsetzen), and reflexively you campaign — sich für etwas einsetzen." },
        { id: "de-u111l2-anhalten", type: "vocab", front: "anhalten", reading: "anhalten", meaning: "to persist (keep going)", example: { jp: "Wenn die Kälte anhält, reicht die Kapazität der Kliniken nicht.", en: "If the cold persists, the capacity of the clinics will not be enough." }, drill: { jp: "Der Regen wird bis morgen anhalten", en: "The rain will persist until tomorrow" }, accept: ["to persist", "to continue", "to last", "to hold"], hint: "Two lives: a state persists, and a vehicle stops — der Bus hält an. The adjective anhaltend means sustained." },
        { id: "de-u111l2-nachlassen", type: "vocab", front: "nachlassen", reading: "nachlassen", meaning: "to ease off (weaken gradually)", example: { jp: "Erst gegen Abend hat der Wind nachgelassen.", en: "Only towards evening did the wind ease off." }, drill: { jp: "Die Schmerzen werden langsam nachlassen", en: "The pain will slowly ease off" }, accept: ["to ease off", "to let up", "to abate", "to decline"], hint: "Of wind, pain, attention and quality alike: seine Leistung lässt nach. Der Nachlass is something else — a discount, or an estate." },
        { id: "de-u111l2-ausbleiben", type: "vocab", front: "ausbleiben", reading: "ausbleiben", meaning: "to fail to materialise (not happen)", example: { jp: "Der erwartete Anstieg ist ausgeblieben, und niemand kann genau sagen warum.", en: "The expected rise failed to materialise, and nobody can say exactly why." }, drill: { jp: "Die erwartete Reaktion kann auch ausbleiben", en: "The expected reaction may also fail to come" }, accept: ["to fail to materialise", "to fail to happen", "not to happen", "to be absent"], hint: "For something expected that simply does not come. The fixed phrase: die Reaktion ließ nicht lange auf sich warten — the opposite case." },
        { id: "de-u111l2-vorubergehend", type: "vocab", front: "vorübergehend", reading: "vorubergehend", meaning: "temporary (for the time being)", example: { jp: "Die Station ist vorübergehend geschlossen, weil Personal fehlt.", en: "The ward is temporarily closed because staff are missing." }, drill: { jp: "Die Station bleibt vorübergehend geschlossen", en: "The ward remains temporarily closed" }, accept: ["temporary", "temporarily", "for the time being", "passing"], hint: "vorüber + gehen: it walks past. On a German shop door, vorübergehend geschlossen is the standard notice." },
        { id: "de-u111l2-derhohepunkt", type: "vocab", front: "der Höhepunkt", reading: "derhohepunkt", meaning: "peak (highest point of a development)", example: { jp: "Auf dem Höhepunkt der Debatte hat niemand mehr zugehört.", en: "At the peak of the debate nobody was listening any more." }, drill: { jp: "Der Höhepunkt war schon im Sommer", en: "The peak was already in summer" }, accept: ["peak", "climax", "high point", "culmination"], hint: "Both the statistical peak and the high point of an evening. Its opposite is der Tiefpunkt." },
      ],
    },
    {
      id: "de-u111l3",
      unit: 111,
      lesson: 3,
      title: "Ausmaß und Umfang",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how big something is without a number: its extent, its order of magnitude, the range it moves in and where its centre of gravity lies.",
      items: [
        { id: "de-u111l3-dasausmass", type: "vocab", front: "das Ausmaß", reading: "dasausmass", meaning: "extent (scale of something bad)", example: { jp: "Das Ausmaß der Schäden war erst nach Wochen klar.", en: "The extent of the damage was only clear after weeks." }, drill: { jp: "Das Ausmaß war erst später klar", en: "The extent was only clear later" }, accept: ["extent", "scale", "magnitude", "dimensions"], hint: "Almost always about something unwelcome: das Ausmaß der Krise, der Zerstörung. Plural die Ausmaße also means an object's dimensions." },
        { id: "de-u111l3-diegrossenordnung", type: "vocab", front: "die Größenordnung", reading: "diegrossenordnung", meaning: "order of magnitude (rough scale)", example: { jp: "Die Kosten liegen in der Größenordnung von zwei Millionen.", en: "The costs are in the order of two million." }, drill: { jp: "Die Größenordnung ist noch völlig unklar", en: "The order of magnitude is still completely unclear" }, accept: ["order of magnitude", "ballpark", "rough scale", "magnitude"], hint: "The honest word for a number you do not know exactly: in der Größenordnung von …" },
        { id: "de-u111l3-derumfang", type: "vocab", front: "der Umfang", reading: "derumfang", meaning: "scope (how much a thing covers)", example: { jp: "Der Umfang der Prüfung war größer, als die Behörde angekündigt hatte.", en: "The scope of the inspection was larger than the authority had announced." }, drill: { jp: "Der Umfang der Arbeit war enorm", en: "The scope of the work was enormous" }, accept: ["scope", "extent", "volume", "size"], hint: "Literally the circumference. In vollem Umfang means in full — the standard phrase in a German judgment or apology." },
        { id: "de-u111l3-diespanne", type: "vocab", front: "die Spanne", reading: "diespanne", meaning: "range (gap between two values)", example: { jp: "Die Spanne zwischen den Angeboten war größer als der Preis selbst.", en: "The range between the offers was larger than the price itself." }, drill: { jp: "Die Spanne zwischen beiden ist groß", en: "The range between the two is large" }, accept: ["range", "spread", "margin", "gap"], hint: "Also of time — eine kurze Spanne — and of money: die Gewinnspanne, the profit margin." },
        { id: "de-u111l3-derschwerpunkt", type: "vocab", front: "der Schwerpunkt", reading: "derschwerpunkt", meaning: "main focus (centre of gravity)", example: { jp: "Der Schwerpunkt des Berichts liegt auf den Kosten, nicht auf der Versorgung.", en: "The main focus of the report is on the costs, not on care provision." }, drill: { jp: "Der Schwerpunkt liegt klar auf Prävention", en: "The main focus is clearly on prevention" }, accept: ["main focus", "focus", "centre of gravity", "emphasis"], hint: "In physics it really is the centre of gravity. Einen Schwerpunkt setzen — to set a priority." },
        { id: "de-u111l3-dieschwankung", type: "vocab", front: "die Schwankung", reading: "dieschwankung", meaning: "fluctuation (movement up and down)", example: { jp: "Kleine Schwankungen sind normal, erst der Trend sagt etwas.", en: "Small fluctuations are normal; only the trend says anything." }, drill: { jp: "Die Schwankung war völlig normal", en: "The fluctuation was completely normal" }, accept: ["fluctuation", "variation", "swing", "oscillation"], hint: "From schwanken, to sway — a drunk person schwankt too. In figures it is always the noise around the trend." },
      ],
    },
    {
      id: "de-u111l4",
      unit: 111,
      lesson: 4,
      title: "Was sich abzeichnet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what is coming: what is emerging, what can be foreseen, what is a real trend, and where the turning point lies.",
      items: [
        { id: "de-u111l4-sichabzeichnen", type: "vocab", front: "sich abzeichnen", reading: "sichabzeichnen", meaning: "to emerge (become visible in outline)", example: { jp: "Im Ausschuss zeichnet sich eine Mehrheit für die strengere Richtlinie ab.", en: "In the committee a majority for the stricter guideline is emerging." }, drill: { jp: "Hier kann sich abzeichnen was kommt", en: "Here what is coming can emerge" }, accept: ["to emerge", "to take shape", "to become apparent", "to loom"], hint: "The image is a drawing appearing against a background. Reflexive and separable: zeichnet sich … ab." },
        { id: "de-u111l4-absehbar", type: "vocab", front: "absehbar", reading: "absehbar", meaning: "foreseeable (visible from here)", example: { jp: "In absehbarer Zeit wird sich daran nichts ändern.", en: "Nothing will change about that in the foreseeable future." }, drill: { jp: "In absehbarer Zeit ändert sich nichts", en: "Nothing changes in the foreseeable future" }, accept: ["foreseeable", "in sight", "predictable"], hint: "From absehen, to see to the end of. Its negative is the useful one: nicht absehbar — there is no telling." },
        { id: "de-u111l4-dertrend", type: "vocab", front: "der Trend", reading: "dertrend", meaning: "trend (direction over time)", example: { jp: "Ein Jahr macht noch keinen Trend, sagen die Leute im Institut.", en: "One year does not yet make a trend, the people at the institute say." }, drill: { jp: "Der Trend zeigt seit Jahren nach unten", en: "The trend has pointed downwards for years" }, accept: ["trend", "tendency", "direction"], hint: "English loan, fully at home. Im Trend liegen means to be fashionable — the other, lighter sense." },
        { id: "de-u111l4-derwendepunkt", type: "vocab", front: "der Wendepunkt", reading: "derwendepunkt", meaning: "turning point", example: { jp: "Der Bericht war der Wendepunkt: danach hat niemand mehr von einem Einzelfall gesprochen.", en: "The report was the turning point: after it nobody spoke of an isolated case any more." }, drill: { jp: "Der Wendepunkt kam mit dem Bericht", en: "The turning point came with the report" }, accept: ["turning point", "watershed", "tipping point"], hint: "Wende (u101) + Punkt. In a story it is the moment everything changes; in a curve, where it bends." },
        { id: "de-u111l4-abflachen", type: "vocab", front: "abflachen", reading: "abflachen", meaning: "to flatten off (of a curve)", example: { jp: "Die Kurve flacht ab, aber sie sinkt noch nicht.", en: "The curve is flattening off, but it is not falling yet." }, drill: { jp: "Die Kurve wird bald abflachen", en: "The curve will soon flatten off" }, accept: ["to flatten", "to level off", "to flatten out", "to tail off"], hint: "From flach, flat. Separable: flacht … ab. Of an argument or a film it means it gets shallower." },
        { id: "de-u111l4-dauerhaft", type: "vocab", front: "dauerhaft", reading: "dauerhaft", meaning: "lasting (built to hold over time)", example: { jp: "Eine dauerhafte Lösung kostet mehr, hält aber länger als zwei Wahlperioden.", en: "A lasting solution costs more but holds longer than two electoral terms." }, drill: { jp: "Eine dauerhafte Lösung ist teurer", en: "A lasting solution is more expensive" }, accept: ["lasting", "permanent", "durable", "long-term"], hint: "From dauern. Langfristig (u59) is about the time horizon you plan over; dauerhaft is about the thing actually holding." },
      ],
    },
  ],
};
