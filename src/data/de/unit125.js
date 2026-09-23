// DE Unit 125 — Landschaft und Tier (slot: coverage-b2-15) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Coverage pass — method in u114's header, card count in u115's.
//
// ⚠️ READ THIS BEFORE TRUSTING THE FRONTS: THIS UNIT IS TIER D, NOT MEASURED.
// u114-u124 drew on three measured sources — an external frequency list, words
// the corpus used but never taught, and pairs where the course taught one half.
// Those sources are now EXHAUSTED. The external list is only 2000 words deep and
// every teachable entry in it is either already taught or authored in u114-u124.
// So the fronts below are MY CHOICE, and that is a weaker claim. I am not going
// to dress it up as evidence.
//
// The principle used instead, which is at least checkable: COMPLETE A DOMAIN THE
// COURSE ITSELF OPENED. u26 (Nature and animals) and u65 (Umwelt und Klima) teach
// der Berg, der Wald, die Insel, die Kueste, das Nest, der Fluss — and stop before
// the ordinary landscape and animal-body words a B2 reader needs for any nature
// text. Each front below was checked against all 2714 claimed fronts and each is
// genuinely untaught; what is unproven is that it is the MOST useful untaught
// word, and no probe I have can settle that. Flagged for the lead in the
// hand-back with the exact count: 40 of 264 cards in this block are tier D.
// FREE: gekostet, gesucht
export const DE_UNIT125 = {
  id: "de-u125",
  lang: "de",
  title: "Landschaft und Tier",
  order: 125,
  stage: "b2",
  lessons: [
    {
      id: "de-u125l1",
      unit: 125,
      lesson: 1,
      title: "Gipfel, Hügel und Ufer",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a landscape in the words a walking map uses — a summit, a hill, a desert, a bank and a meadow.",
      items: [
        { id: "de-u125l1-dergipfel", type: "vocab", front: "der Gipfel", reading: "dergipfel", meaning: "the summit", example: { jp: "Auf dem Gipfel liegt auch im Sommer noch Schnee, obwohl es unten sehr warm ist.", en: "On the summit there is still snow even in summer, although down below it is very warm." }, drill: { jp: "Der Gipfel war noch weit weg", en: "The summit was still far away" }, accept: ["summit", "the summit", "peak", "top", "height"], hint: "Tier D. The course teaches der Berg (u26) and stops there. Same in the plural: der Gipfel, die Gipfel. Figuratively it is the height of something — der Gipfel der Frechheit." },
        { id: "de-u125l1-derhuegel", type: "vocab", front: "der Hügel", reading: "derhuegel", meaning: "the hill", example: { jp: "Hinter dem Hügel beginnt der Wald, und danach gibt es zwei Stunden lang kein Haus mehr.", en: "Behind the hill the forest begins, and after that there is no house for two hours." }, drill: { jp: "Der Hügel ist nicht sehr hoch", en: "The hill is not very high" }, accept: ["hill", "the hill", "mound", "knoll"], hint: "Tier D. German separates what English blurs: der Berg is a mountain, der Hügel merely a hill. A walking map uses both precisely." },
        { id: "de-u125l1-diewueste", type: "vocab", front: "die Wüste", reading: "diewueste", meaning: "the desert", example: { jp: "In der Wüste wird es am Abend schnell kalt, und darauf sind viele Gäste nicht vorbereitet.", en: "In the desert it gets cold quickly in the evening, and many visitors are not prepared for that." }, drill: { jp: "Die Wüste ist sehr trocken", en: "The desert is very dry" }, accept: ["desert", "the desert", "wasteland"], hint: "Tier D. From wüst (desolate). ⚠️ Do not confuse with das Wasser or with wüst itself — and it is probably related to English 'waste' after all, via Latin vastus." },
        { id: "de-u125l1-dasufer", type: "vocab", front: "das Ufer", reading: "dasufer", meaning: "the bank (of water)", example: { jp: "Am Ufer stehen alte Bäume, die im Winter fast bis ins Wasser hängen.", en: "On the bank stand old trees that in winter hang almost into the water." }, drill: { jp: "Das Ufer war nach dem Regen nass", en: "The bank was wet after the rain" }, accept: ["bank", "the bank", "shore", "riverbank", "waterside"], hint: "Tier D. The edge of a river or lake. ⚠️ A bank for money is die Bank (u7) — a completely separate word, and German never mixes them." },
        { id: "de-u125l1-dieweide", type: "vocab", front: "die Weide", reading: "dieweide", meaning: "the pasture", example: { jp: "Auf der Weide stehen den ganzen Sommer Tiere, und erst im Herbst kommen sie wieder zurück.", en: "Animals stand in the pasture all summer, and only in autumn do they come back." }, drill: { jp: "Die Weide liegt hinter dem Dorf", en: "The pasture lies behind the village" }, accept: ["pasture", "the pasture", "meadow", "grazing land", "willow"], hint: "Tier D. Pairs with der Bauer (u117). The same word also means a willow tree, which is why a Trauerweide is a weeping willow." },
      ],
    },
    {
      id: "de-u125l2",
      unit: 125,
      lesson: 2,
      title: "Ernte, Saat und Faden",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the work of a farm and a workbasket — a harvest, a sowing, a thread, a button and an umbrella.",
      items: [
        { id: "de-u125l2-dieernte", type: "vocab", front: "die Ernte", reading: "dieernte", meaning: "the harvest", example: { jp: "Die Ernte war dieses Jahr sehr klein, weil es von Mai bis August kein Wasser gab.", en: "The harvest was very small this year, because there was no water from May to August." }, drill: { jp: "Die Ernte beginnt im September", en: "The harvest begins in September" }, accept: ["harvest", "the harvest", "crop", "yield"], hint: "Tier D, and the natural partner of der Bauer (u117). ernten is the verb. In news about climate this word appears constantly." },
        { id: "de-u125l2-diesaat", type: "vocab", front: "die Saat", reading: "diesaat", meaning: "the sowing", example: { jp: "Nach der Saat muss der Boden ein paar Wochen in Ruhe bleiben.", en: "After the sowing the ground has to be left in peace for a few weeks." }, drill: { jp: "Die Saat liegt schon im Boden", en: "The sowing is already in the ground" }, accept: ["sowing", "the sowing", "seed", "the seed", "seedcorn"], hint: "Tier D. Both the act of sowing and the seed itself. säen is the verb; der Samen is the individual seed of a plant." },
        { id: "de-u125l2-derfaden", type: "vocab", front: "der Faden", reading: "derfaden", meaning: "the thread", example: { jp: "Ein Faden hängt aus dem Mantel, aber das sieht man erst, wenn man ganz nahe steht.", en: "A thread is hanging out of the coat, but you only see that when you stand very close." }, drill: { jp: "Der Faden ist viel zu kurz", en: "The thread is much too short" }, accept: ["thread", "the thread", "string", "strand"], hint: "Tier D. Plural Fäden with an umlaut. den Faden verlieren is to lose the thread of what you were saying, exactly as in English." },
        { id: "de-u125l2-derknopf", type: "vocab", front: "der Knopf", reading: "derknopf", meaning: "the button", example: { jp: "Der Knopf am Mantel ist seit dem Winter weg, und bisher hat ihn niemand wieder gesucht.", en: "The button on the coat has been gone since winter, and so far nobody has looked for it." }, drill: { jp: "Der Knopf ist einfach weg", en: "The button is simply gone" }, accept: ["button", "the button", "knob"], hint: "Tier D. Both a clothing button and a button you press. An ordinary clothing word the course never reached. Plural Knöpfe." },
        { id: "de-u125l2-derschirm", type: "vocab", front: "der Schirm", reading: "derschirm", meaning: "the umbrella", example: { jp: "Nimm den Schirm mit, weil das Wetter heute schlecht werden soll.", en: "Take the umbrella with you, because the weather is supposed to turn bad today." }, drill: { jp: "Der Schirm liegt noch im Wagen", en: "The umbrella is still in the car" }, accept: ["umbrella", "the umbrella", "screen", "shade"], hint: "Tier D. Short for der Regenschirm, which is the full word. Also a screen — der Bildschirm is a computer monitor." },
      ],
    },
    {
      id: "de-u125l3",
      unit: 125,
      lesson: 3,
      title: "Feder, Flügel und Fell",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe an animal in detail — a feather, a wing, a tail, a paw and a coat of fur.",
      items: [
        { id: "de-u125l3-diefeder", type: "vocab", front: "die Feder", reading: "diefeder", meaning: "the feather", example: { jp: "Eine Feder lag mitten auf dem Weg, und der Vogel selbst war schon lange weg.", en: "A feather lay in the middle of the path, and the bird itself was long gone." }, drill: { jp: "Die Feder ist sehr leicht", en: "The feather is very light" }, accept: ["feather", "the feather", "quill", "spring", "pen"], hint: "Tier D. Extends u26, which teaches der Vogel and stops. Also a spring in a machine, and historically a pen — hence der Federball, badminton." },
        { id: "de-u125l3-derfluegel", type: "vocab", front: "der Flügel", reading: "derfluegel", meaning: "the wing", example: { jp: "Der Vogel kann mit diesem Flügel im Moment nicht fliegen.", en: "The bird cannot fly with this wing at the moment." }, drill: { jp: "Der Flügel war leider zu schwach", en: "The wing was unfortunately too weak" }, accept: ["wing", "the wing", "grand piano", "blade"], hint: "Tier D. From fliegen (u23). Also the wing of a building, a wing in politics, and — oddly — a grand piano, whose shape gave it the name." },
        { id: "de-u125l3-derschwanz", type: "vocab", front: "der Schwanz", reading: "derschwanz", meaning: "the tail", example: { jp: "Der Hund hält den Schwanz den ganzen Abend hoch.", en: "The dog holds its tail up all evening." }, drill: { jp: "Der Schwanz ist ziemlich lang", en: "The tail is rather long" }, accept: ["tail", "the tail"], hint: "Tier D. Plural Schwänze. ⚠️ Like English 'tail', it has a vulgar secondary sense in casual speech — use it of animals and you will never have a problem." },
        { id: "de-u125l3-diepfote", type: "vocab", front: "die Pfote", reading: "diepfote", meaning: "the paw", example: { jp: "Die Katze hält eine Pfote hoch, weil sie sich am Stein verletzt hat.", en: "The cat is holding up one paw, because it has injured itself on the stone." }, drill: { jp: "Die Pfote war ganz nass", en: "The paw was completely wet" }, accept: ["paw", "the paw"], hint: "Tier D. Only of animals with soft feet — a horse has einen Huf, a bird einen Fuß. Said of a person's hand it is rude but affectionate." },
        { id: "de-u125l3-dasfell", type: "vocab", front: "das Fell", reading: "dasfell", meaning: "the fur", example: { jp: "Das Fell wird im Winter dicker, und im Sommer verliert das Tier es wieder.", en: "The fur gets thicker in winter, and in summer the animal loses it again." }, drill: { jp: "Das Fell ist sehr weich", en: "The fur is very soft" }, accept: ["fur", "the fur", "coat", "hide", "pelt"], hint: "Tier D. The fur ON a living animal; a fur coat as a garment is der Pelz. ein dickes Fell haben is to be thick-skinned." },
      ],
    },
    {
      id: "de-u125l4",
      unit: 125,
      lesson: 4,
      title: "Ekel, Zorn und Gier",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the strong feelings a novel uses — disgust, wrath, greed, humility, and floating free of all of it.",
      items: [
        { id: "de-u125l4-derekel", type: "vocab", front: "der Ekel", reading: "derekel", meaning: "the disgust", example: { jp: "Der Ekel war so stark, dass sie das Zimmer sofort wieder verlassen hat.", en: "The disgust was so strong that she left the room again immediately." }, drill: { jp: "Der Ekel war deutlich zu sehen", en: "The disgust was clearly visible" }, accept: ["disgust", "the disgust", "revulsion", "loathing"], hint: "Tier D, extending the emotion units u57 and u105. ekelhaft is the adjective. Used of a person, ein Ekel is a thoroughly unpleasant individual." },
        { id: "de-u125l4-derzorn", type: "vocab", front: "der Zorn", reading: "derzorn", meaning: "the wrath", example: { jp: "Sein Zorn war nach ein paar Minuten wieder weg, aber die anderen haben den Abend nicht vergessen.", en: "His wrath was gone again after a few minutes, but the others did not forget the evening." }, drill: { jp: "Der Zorn kam ganz plötzlich", en: "The wrath came quite suddenly" }, accept: ["wrath", "the wrath", "anger", "rage", "fury", "ire"], hint: "Tier D. Higher and older than die Wut — Zorn belongs in literature and in the Bible, where Wut belongs in a kitchen argument. zornig is the adjective." },
        { id: "de-u125l4-diegier", type: "vocab", front: "die Gier", reading: "diegier", meaning: "the greed", example: { jp: "Die Gier nach mehr Geld hat am Ende die ganze Firma gekostet.", en: "The greed for more money cost the entire company in the end." }, drill: { jp: "Die Gier war einfach zu groß", en: "The greed was simply too great" }, accept: ["greed", "the greed", "avarice", "craving", "hunger"], hint: "Tier D. Takes nach for what is craved: die Gier nach Geld. gierig is the adjective, and neugierig (curious, u31) is literally 'new-greedy'." },
        { id: "de-u125l4-diedemut", type: "vocab", front: "die Demut", reading: "diedemut", meaning: "the humility", example: { jp: "Nach so vielen Jahren im Beruf spricht er mit einer Demut, die junge Leute oft überrascht.", en: "After so many years in the profession he speaks with a humility that often surprises young people." }, drill: { jp: "Die Demut kam erst viel später", en: "The humility came only much later" }, accept: ["humility", "the humility", "humbleness", "meekness"], hint: "Tier D. Formal and slightly old-fashioned, but standard in writing about character. demütig is the adjective; der Hochmut is its opposite." },
        { id: "de-u125l4-schweben", type: "vocab", front: "schweben", reading: "schweben", meaning: "to float (in air)", example: { jp: "Über dem Wasser schweben am Morgen kleine Wolken, die am Abend wieder weg sind.", en: "In the morning small clouds float above the water, and by evening they are gone again." }, drill: { jp: "Der Vogel kann lange schweben", en: "The bird can float for a long time" }, accept: ["to float", "float", "to hover", "hover", "to glide", "to be suspended"], hint: "Tier D, extending the movement unit u85. In the air or in water, without support — a decision can also schweben, meaning it is still undecided." },
      ],
    },
  ],
};
