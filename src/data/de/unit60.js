// DE Unit 60 — Probleme und Lösungen (slot: problems and solutions) — B1
// Block 1 (u51–u62). BAND CONVENTIONS: see the header of de/unit51.js.
//
// THEME: something has gone wrong and you have to deal with it. A2 gives das
// Problem, die Lösung, reparieren, klappen, erledigen, vermeiden, schaffen,
// helfen — the outline. This unit fills it in: naming the fault precisely (l1),
// the words for acting on it (l2), the moment it turns serious (l3), and putting
// it right again (l4).
// ⚠️ `lösen` IS DELIBERATELY NOT TAUGHT HERE and no later block should take it
// either: `die Lösung` is already a taught front, so the verb is the same lexeme
// with a second mastery track and no new learning. The same test removed die
// Reparatur (reparieren taught) and die Hilfe (helfen taught). See u51's header
// §6 for the full rejected list.
// ⚠️ der Fehler is taught; `fehlen` (to be missing) is NOT, and it is a real gap
// in German A1 that block 1 could not close from a B1 slot — flagged to the
// coverage units u76–u87.
// FREE: Männer, Bäume, Gärten
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT60 = {
  id: "de-u60",
  lang: "de",
  title: "Probleme und Lösungen",
  order: 60,
  stage: "b1",
  lessons: [
    {
      id: "de-u60l1",
      unit: 60,
      lesson: 1,
      title: "Es klemmt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a problem exactly instead of just calling it schlecht: the difficulty, the mistake, the shortage, the breakdown, and the moment it all goes wrong.",
      items: [
        { id: "de-u60l1-dieschwierigkeit", type: "vocab", front: "die Schwierigkeit", reading: "dieschwierigkeit", meaning: "the difficulty", example: { jp: "Die größte Schwierigkeit ist bei uns die Zeit und nicht das Geld.", en: "The biggest difficulty for us is time and not money." }, drill: { jp: "Die Schwierigkeit liegt bei der Zeit", en: "The difficulty lies with time" }, accept: ["difficulty", "the difficulty", "problem", "the problem", "trouble", "the trouble", "snag"], hint: "schwierig (difficult) + -keit. Schwierigkeiten haben mit etwas — nearly always plural in that phrase." },
        { id: "de-u60l1-derfehler", type: "vocab", front: "der Fehler", reading: "derfehler", meaning: "the mistake", example: { jp: "Der Fehler war klein, aber er hat uns den ganzen Tag gekostet.", en: "The mistake was small, but it cost us the whole day." }, drill: { jp: "Der Fehler kostet uns den Tag", en: "The mistake costs us the day" }, accept: ["mistake", "the mistake", "error", "the error", "fault", "the fault", "flaw", "bug"], hint: "einen Fehler machen = to make a mistake. Also a fault in a machine: Das Gerät hat einen Fehler." },
        { id: "de-u60l1-dermangel", type: "vocab", front: "der Mangel", reading: "dermangel", meaning: "the lack", example: { jp: "Ein Mangel an Zeit ist bei uns das größte Problem im Herbst.", en: "A lack of time is our biggest problem in autumn." }, drill: { jp: "Der Mangel an Geld bleibt", en: "The lack of money remains" }, accept: ["lack", "the lack", "shortage", "the shortage", "deficiency", "the deficiency", "defect", "the defect"], hint: "Mangel an etwas = a shortage of something. The plural Mängel means something else: defects in a product." },
        { id: "de-u60l1-diepanne", type: "vocab", front: "die Panne", reading: "diepanne", meaning: "the breakdown", example: { jp: "Wir hatten eine Panne auf der Straße, deshalb sind wir zu spät gekommen.", en: "We had a breakdown on the road, so we arrived too late." }, drill: { jp: "Die Panne kostet uns zwei Stunden", en: "The breakdown costs us two hours" }, accept: ["breakdown", "the breakdown", "mishap", "the mishap", "glitch", "the glitch", "hitch"], hint: "A car that stops, and by extension any small disaster: eine Panne haben. Borrowed from French." },
        { id: "de-u60l1-schiefgehen", type: "vocab", front: "schiefgehen", reading: "schiefgehen", meaning: "to go wrong", example: { jp: "Wenn etwas schiefgehen kann, dann geht es meistens auch schief.", en: "If something can go wrong, then it usually does go wrong." }, drill: { jp: "Hier kann sehr viel schiefgehen", en: "A lot can go wrong here" }, accept: ["to go wrong", "go wrong", "to fail", "fail", "to go awry"], hint: "schief (crooked, taught in A2) + gehen. Separable: es geht schief, es ist schiefgegangen." },
        { id: "de-u60l1-kompliziert", type: "vocab", front: "kompliziert", reading: "kompliziert", meaning: "complicated", example: { jp: "Die Anleitung ist viel zu kompliziert, deshalb versteht sie niemand.", en: "The instructions are far too complicated, which is why nobody understands them." }, drill: { jp: "Die Anleitung ist zu kompliziert", en: "The instructions are too complicated" }, accept: ["complicated", "complex", "involved", "intricate"], hint: "Looks English, but the stress falls at the end: kom-pli-ZIERT. Stronger than schwer — it means many moving parts." },
        { id: "de-u60l1-fehlen", type: "vocab", front: "fehlen", reading: "fehlen", meaning: "to be missing", example: { jp: "Auf dem Tisch fehlt noch ein Stuhl für den Gast.", en: "There is still a chair missing at the table for the guest." }, drill: { jp: "Hier darf nichts mehr fehlen", en: "Nothing more may be missing here" }, accept: ["to be missing", "be missing", "to be absent", "to be lacking", "to miss"], hint: "Backwards from English: the thing that is gone is the SUBJECT — mir fehlt ein Stuhl, literally \"a chair is missing to me\". der Fehler in this lesson is a mistake, a different word off the same root." },
      ],
    },
    {
      id: "de-u60l2",
      unit: 60,
      lesson: 2,
      title: "Was tun?",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get at a solution: find the way out, ask for advice, take a measure, clear something away, step in — and know what to do if all else fails.",
      items: [
        { id: "de-u60l2-derausweg", type: "vocab", front: "der Ausweg", reading: "derausweg", meaning: "the way out", example: { jp: "Es gab keinen Ausweg, deshalb haben wir den Termin am Ende abgesagt.", en: "There was no way out, so in the end we cancelled the appointment." }, drill: { jp: "Der Ausweg kommt vom Chef", en: "The way out comes from the boss" }, accept: ["way out", "the way out", "escape", "the escape", "solution", "the solution", "alternative"], hint: "aus + der Weg: the road out of a fix. keinen Ausweg mehr sehen = to see no way out." },
        { id: "de-u60l2-derrat", type: "vocab", front: "der Rat", reading: "derrat", meaning: "the advice", example: { jp: "Der Rat von meiner Mutter war gut, deshalb habe ich ihn genommen.", en: "My mother's advice was good, so I took it." }, drill: { jp: "Der Rat kommt von meiner Mutter", en: "The advice comes from my mother" }, accept: ["advice", "the advice", "counsel", "the counsel", "tip", "council", "the council"], hint: "Singular for advice; the plural Ratschläge is English's 'pieces of advice'. Also a council: der Stadtrat." },
        { id: "de-u60l2-diemassnahme", type: "vocab", front: "die Maßnahme", reading: "diemassnahme", meaning: "the measure", example: { jp: "Die Maßnahme hat geholfen, aber sie war für viele Bürger sehr hart.", en: "The measure helped, but it was very hard for many citizens." }, drill: { jp: "Die Maßnahme hilft den Bürgern", en: "The measure helps the citizens" }, accept: ["measure", "the measure", "step", "the step", "action", "the action", "precaution"], hint: "das Maß + nehmen: to take a measure. It has ß, so the reading is written with ss. Usually plural in the news." },
        { id: "de-u60l2-beseitigen", type: "vocab", front: "beseitigen", reading: "beseitigen", meaning: "to remove", example: { jp: "Wir müssen den Müll beseitigen, bevor am Samstag die Gäste kommen.", en: "We have to clear the rubbish away before the guests come on Saturday." }, drill: { jp: "Wir müssen den Müll beseitigen", en: "We have to clear the rubbish away" }, accept: ["to remove", "remove", "to eliminate", "eliminate", "to clear away", "to get rid of", "to dispose of"], hint: "be- + die Seite: to put a thing off to the side. Of rubbish, of problems and of mistakes." },
        { id: "de-u60l2-eingreifen", type: "vocab", front: "eingreifen", reading: "eingreifen", meaning: "to intervene", example: { jp: "Der Lehrer musste eingreifen, weil der Streit immer größer wurde.", en: "The teacher had to intervene, because the quarrel was getting bigger and bigger." }, drill: { jp: "Hier muss der Chef eingreifen", en: "The boss has to intervene here" }, accept: ["to intervene", "intervene", "to step in", "step in", "to interfere"], hint: "ein + greifen (to grip): to reach into a situation. Separable: er greift ein." },
        { id: "de-u60l2-notfalls", type: "vocab", front: "notfalls", reading: "notfalls", meaning: "if need be", example: { jp: "Notfalls fahren wir mit dem Taxi, auch wenn das ziemlich teuer ist.", en: "If need be we'll take a taxi, even if that's fairly expensive." }, drill: { jp: "Notfalls fahren wir mit dem Taxi", en: "If need be we'll take a taxi" }, accept: ["if need be", "if necessary", "in an emergency", "at a pinch", "if all else fails"], hint: "der Notfall (the emergency), already taught, turned into an adverb. Plan B in a single word." },
        { id: "de-u60l2-losen", type: "vocab", front: "lösen", reading: "losen", meaning: "to solve", example: { jp: "Am besten lösen wir das Problem gleich heute.", en: "We had best solve the problem today." }, drill: { jp: "Wir lösen das Problem zusammen", en: "We solve the problem together" }, accept: ["to solve", "solve", "to resolve", "to loosen", "to undo"], hint: "The verb under die Lösung (u32). It also means to loosen: einen Knoten lösen. eine Aufgabe lösen = to work an exercise out." },
      ],
    },
    {
      id: "de-u60l3",
      unit: 60,
      lesson: 3,
      title: "Wenn es schiefgeht",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle the moment something goes seriously wrong: damage, risk, a warning, a rescue, an accident, and destruction.",
      items: [
        { id: "de-u60l3-dasrisiko", type: "vocab", front: "das Risiko", reading: "dasrisiko", meaning: "the risk", example: { jp: "Das Risiko ist zu hoch, deshalb machen wir es im Herbst lieber nicht.", en: "The risk is too high, so we'd rather not do it in autumn." }, drill: { jp: "Das Risiko ist zu hoch", en: "The risk is too high" }, accept: ["risk", "the risk", "hazard", "the hazard"], hint: "Plural Risiken, not Risikos. ein Risiko eingehen = to take a risk." },
        { id: "de-u60l3-warnen", type: "vocab", front: "warnen", reading: "warnen", meaning: "to warn", example: { jp: "Im Internet haben sie vor dem Sturm gewarnt, aber viele sind trotzdem gefahren.", en: "On the internet they warned about the storm, but many people drove anyway." }, drill: { jp: "Die Zeitungen warnen vor dem Sturm", en: "The newspapers warn about the storm" }, accept: ["to warn", "warn", "to caution", "caution", "to alert"], hint: "vor etwas warnen — the preposition is vor + dative. die Warnung is the warning itself." },
        { id: "de-u60l3-retten", type: "vocab", front: "retten", reading: "retten", meaning: "to rescue", example: { jp: "Der Hund hat das Kind gerettet, und die Presse hat sofort berichtet.", en: "The dog rescued the child, and the press reported it immediately." }, drill: { jp: "Zwei Männer retten das Kind", en: "Two men rescue the child" }, accept: ["to rescue", "rescue", "to save", "save"], hint: "Of people and of situations alike: den Abend retten. die Rettung is the rescue; der Krankenwagen is also der Rettungswagen." },
        { id: "de-u60l3-derunfall", type: "vocab", front: "der Unfall", reading: "derunfall", meaning: "the accident", example: { jp: "Nach dem Unfall hat der Krankenwagen sehr lange gebraucht.", en: "After the accident the ambulance took a very long time." }, drill: { jp: "Der Unfall war am Morgen", en: "The accident was in the morning" }, accept: ["accident", "the accident", "crash", "the crash"], hint: "un- + der Fall: a fall that should not have happened. einen Unfall haben. Not der Notfall, which is any emergency." },
        { id: "de-u60l3-zerstoren", type: "vocab", front: "zerstören", reading: "zerstoren", meaning: "to destroy", example: { jp: "Der Sturm hat den Garten zerstört, und die Bäume liegen immer noch im Gras.", en: "The storm destroyed the garden, and the trees are still lying in the grass." }, drill: { jp: "Stürme zerstören viele Gärten", en: "Storms destroy many gardens" }, accept: ["to destroy", "destroy", "to wreck", "wreck", "to ruin", "ruin", "to demolish"], hint: "zer- is the prefix of breaking apart: zerbrechen, zerschneiden, zerstören. You already know zerbrechlich." },
        { id: "de-u60l3-verletzen", type: "vocab", front: "verletzen", reading: "verletzen", meaning: "to injure", example: { jp: "Bei dem Unfall wurde zum Glück niemand schwer verletzt.", en: "Luckily nobody was badly injured in the accident." }, drill: { jp: "Man kann sich hier leicht verletzen", en: "You can easily hurt yourself here" }, accept: ["to injure", "injure", "to hurt", "to wound", "to violate"], hint: "sich verletzen = to hurt yourself. It also covers breaking a rule: ein Gesetz verletzen — and hurting feelings, like beleidigen (u57)." },
      ],
    },
    {
      id: "de-u60l4",
      unit: 60,
      lesson: 4,
      title: "Wieder in Ordnung",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Put things right again: replace what broke, clear up the confusion, meet somebody halfway, give ground, get past it, and put in real effort.",
      items: [
        { id: "de-u60l4-ersetzen", type: "vocab", front: "ersetzen", reading: "ersetzen", meaning: "to replace", example: { jp: "Wir müssen das alte Gerät ersetzen, weil man es nicht mehr reparieren kann.", en: "We have to replace the old device, because it can't be repaired any more." }, drill: { jp: "Wir müssen das Gerät ersetzen", en: "We have to replace the device" }, accept: ["to replace", "replace", "to substitute", "substitute", "to reimburse", "to make good"], hint: "er- + setzen: to set another one in its place. Also to reimburse: den Schaden ersetzen." },
        { id: "de-u60l4-klaren", type: "vocab", front: "klären", reading: "klaren", meaning: "to clarify", example: { jp: "Wir müssen das Missverständnis klären, bevor der Streit noch größer wird.", en: "We have to clear up the misunderstanding before the quarrel gets even bigger." }, drill: { jp: "Wir wollen das Missverständnis klären", en: "We want to clear up the misunderstanding" }, accept: ["to clarify", "clarify", "to clear up", "clear up", "to sort out", "to settle", "to resolve"], hint: "From klar (clear): to make a thing clear. sich klären = to sort itself out." },
        { id: "de-u60l4-derkompromiss", type: "vocab", front: "der Kompromiss", reading: "derkompromiss", meaning: "the compromise", example: { jp: "Am Ende haben wir einen Kompromiss gefunden, und danach war der Streit vorbei.", en: "In the end we found a compromise, and after that the quarrel was over." }, drill: { jp: "Der Kompromiss war sehr gut", en: "The compromise was very good" }, accept: ["compromise", "the compromise", "middle ground", "the middle ground"], hint: "Double s at the end; the plural is Kompromisse. einen Kompromiss schließen = to reach a compromise." },
        { id: "de-u60l4-nachgeben", type: "vocab", front: "nachgeben", reading: "nachgeben", meaning: "to give in", example: { jp: "Er gibt selten nach, aber am Ende hat er es doch getan.", en: "He rarely gives in, but in the end he did it anyway." }, drill: { jp: "Wir wollen hier nicht nachgeben", en: "We don't want to give in here" }, accept: ["to give in", "give in", "to yield", "yield", "to give way", "to relent", "to back down"], hint: "nach + geben: to give ground backwards. Separable: er gibt nach. Also of a shelf that bends." },
        { id: "de-u60l4-uberwinden", type: "vocab", front: "überwinden", reading: "uberwinden", meaning: "to overcome", example: { jp: "Die Angst vor dem Sprechen kann man überwinden, wenn man oft genug übt.", en: "You can overcome the fear of speaking if you practise often enough." }, drill: { jp: "Die Angst kann man überwinden", en: "You can overcome the fear" }, accept: ["to overcome", "overcome", "to get over", "get over", "to conquer", "to surmount"], hint: "über + winden (to wind): to work yourself over the obstacle. Inseparable: er überwindet die Angst." },
        { id: "de-u60l4-sichbemuhen", type: "vocab", front: "sich bemühen", reading: "sichbemuhen", meaning: "to make an effort", example: { jp: "Er bemüht sich sehr, aber die Sprache ist für ihn sehr schwer.", en: "He makes a great effort, but the language is very hard for him." }, drill: { jp: "Hier muss man sich bemühen", en: "Here you have to make an effort" }, accept: ["to make an effort", "make an effort", "to try hard", "try hard", "to endeavour", "to take trouble"], hint: "die Mühe is the trouble it costs. sich um etwas bemühen = to go to trouble over something." },
      ],
    },
  ],
};
