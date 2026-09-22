// DE Unit 114 — Bekommen und behalten (slot: coverage-b2-4) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
//
// ⚠️ WHAT THIS SLOT IS FOR, and it is not "more B2 words".
// The scaffold titled u111-u126 "Vocabulary 1-16 (B2)", which is the scaffold
// admitting it does not know what is missing. Measured before authoring:
//   - de teaches 2081 words on main, +633 authored by B2 blocks 1 and 2 = 2714.
//   - Of the 2500 commonest German words (Wiktionary subtitle frequency,
//     scripts/data/de-freq-subtitles-2009.tsv via scripts/gaps-de.mjs), 325 are
//     taught NOWHERE once blocks 1 and 2 are counted in.
//   - The holes are not exotic. They are ordinary verbs and adjectives the
//     course stepped over on its way to abstraction: it teaches die Bluetezeit
//     and die Herrschaft (u95) but never bekommen, kennen, beginnen or oeffnen.
//     It teaches schnell (u1) and never langsam.
// So u114-u126 are a COVERAGE PASS over that measured list, not a 14th themed
// band. Every front below is a word the corpus was already using or assuming.
//
// Already taught, used here but not re-taught: die Antwort (u21), die Behoerde
// (u76), die Frist (u79), der Schluessel (u30), der Zettel (u83), die Tuer (u15),
// der Vertrag (u79), der Zug (u18), die Gelegenheit (u62), der Eindruck (u86).
//
// Self-check, dropped as same-lexeme duplicates (verb vs its nominalisation,
// checked against all 2714 claimed fronts, not just main):
//   bedeuten (die Bedeutung u74), bewegen (die Bewegung u71), erfahren (die
//   Erfahrung u24), anfangen (der Anfang u28) — so this unit uses beginnen,
//   which is free. Also dropped: abgeben (geben u16), der Laden (einladen u40),
//   das Zeug (der Zeuge u75), schliessen (abschliessen u79).
// ⚠️ NOTE FOR THE LEAD — a real policy question, not a complaint. Those first
// four are high-frequency VERBS the learner cannot be taught, because the course
// already owns their NOUN. The learner ends the band holding die Bedeutung with
// no bedeuten, die Bewegung with no bewegen. That is four measured cases, not a
// sweeping pattern (entscheiden, sich erinnern and hoffen are all taught as
// verbs), but it is a class the lexeme rule closes permanently. Flagged, not
// worked around.
// PRECEDENT USED: aufhoeren is kept although hoeren (u1) is taught, because the
// course already teaches zuhoeren (u86) — a separable-prefix sibling of the same
// stem. The precedent is the course's own, not one invented here.
export const DE_UNIT114 = {
  id: "de-u114",
  lang: "de",
  title: "Bekommen und behalten",
  order: 114,
  stage: "b2",
  lessons: [
    {
      id: "de-u114l1",
      unit: 114,
      lesson: 1,
      title: "Bekommen, besorgen, behalten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how something came to you and whether you still have it — receive it, get hold of it, keep it, or miss it entirely.",
      items: [
        { id: "de-u114l1-bekommen", type: "vocab", front: "bekommen", reading: "bekommen", meaning: "to get", example: { jp: "Nach drei Wochen hat sie endlich eine Antwort von der Behörde bekommen, aber die Frist war da schon vorbei.", en: "After three weeks she finally got an answer from the authority, but by then the deadline had already passed." }, drill: { jp: "Wir wollen eine klare Antwort bekommen", en: "We want to get a clear answer" }, accept: ["to get", "get", "to receive", "receive", "to obtain", "obtain"], hint: "The ordinary everyday word — erhalten is its formal twin and kriegen its casual one, both below. Careful: bekommen never means 'to become'; that is werden." },
        { id: "de-u114l1-erhalten", type: "vocab", front: "erhalten", reading: "erhalten", meaning: "to receive (formally)", example: { jp: "Alle Bewerber erhalten in den nächsten Tagen eine schriftliche Nachricht, unabhängig davon wie die Entscheidung ausgefallen ist.", en: "All applicants will receive written notification in the next few days, regardless of how the decision turned out." }, drill: { jp: "Sie wird morgen den Vertrag erhalten", en: "She will receive the contract tomorrow" }, accept: ["to receive", "receive", "to be sent", "to get (formal)", "obtain"], hint: "Letters, forms and officials use erhalten where speech uses bekommen. Its second sense is 'to preserve' — ein Gebäude erhalten keeps a building standing." },
        { id: "de-u114l1-kriegen", type: "vocab", front: "kriegen", reading: "kriegen", meaning: "to get (casually)", example: { jp: "Wenn du jetzt nicht losgehst, kriegst du den Zug nicht mehr und musst eine Stunde warten.", en: "If you don't set off now you won't get the train and will have to wait an hour." }, drill: { jp: "Ich will auch ein Stück kriegen", en: "I want to get a piece too" }, accept: ["to get", "get", "to get hold of", "to land", "to catch"], hint: "Spoken German only — extremely common in speech, and out of place in anything written. Unrelated to der Krieg (war, u95) despite the spelling." },
        { id: "de-u114l1-besorgen", type: "vocab", front: "besorgen", reading: "besorgen", meaning: "to get hold of", example: { jp: "Kannst du bis Freitag die Unterlagen besorgen, damit wir den Antrag nicht noch einmal verschieben müssen?", en: "Can you get hold of the documents by Friday so that we don't have to postpone the application again?" }, drill: { jp: "Ich muss noch zwei Karten besorgen", en: "I still have to get hold of two tickets" }, accept: ["to get hold of", "to obtain", "to procure", "to arrange", "to fetch", "to source"], hint: "Not just receiving but going and sorting it out. From die Sorge (worry) — you take the worry off someone's hands." },
        { id: "de-u114l1-behalten", type: "vocab", front: "behalten", reading: "behalten", meaning: "to keep", example: { jp: "Du kannst den Schlüssel ruhig behalten, wir haben inzwischen sowieso ein neues Schloss einbauen lassen.", en: "You're welcome to keep the key; we've had a new lock fitted in the meantime anyway." }, drill: { jp: "Du darfst das Buch behalten", en: "You may keep the book" }, accept: ["to keep", "keep", "to retain", "retain", "to hold on to"], hint: "halten (to hold) with be-: to go on holding. Also used of memory — etwas im Kopf behalten is to remember it." },
        { id: "de-u114l1-verpassen", type: "vocab", front: "verpassen", reading: "verpassen", meaning: "to miss", example: { jp: "Er hat die Gelegenheit verpasst, weil er zu lange überlegt hat, und danach war die Stelle vergeben.", en: "He missed the opportunity because he thought about it too long, and afterwards the position was taken." }, drill: { jp: "Wir werden den letzten Zug verpassen", en: "We are going to miss the last train" }, accept: ["to miss", "miss", "to miss out on", "to let slip"], hint: "A train, a chance, a deadline — something that passed while you were not ready. Not the same as vermissen, which is to miss someone you are fond of." },
      ],
    },
    {
      id: "de-u114l2",
      unit: 114,
      lesson: 2,
      title: "Verlassen, verfolgen, beschützen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe someone leaving, running, hiding or being caught — and say who is chasing and who is protecting.",
      items: [
        { id: "de-u114l2-verlassen", type: "vocab", front: "verlassen", reading: "verlassen", meaning: "to leave (behind)", example: { jp: "Als die Zahlen schlechter wurden, haben mehrere Mitarbeiter die Firma verlassen, ohne eine neue Stelle zu haben.", en: "When the figures got worse, several employees left the company without having a new job." }, drill: { jp: "Sie will die Stadt endgültig verlassen", en: "She wants to leave the city for good" }, accept: ["to leave", "leave", "to abandon", "abandon", "to leave behind", "to desert"], hint: "Leaving a place or a person behind, with finality — not the neutral gehen. Reflexively, sich verlassen auf means to rely on, which is a different thought entirely." },
        { id: "de-u114l2-entkommen", type: "vocab", front: "entkommen", reading: "entkommen", meaning: "to escape", example: { jp: "Zwei der Tiere sind aus dem Gehege entkommen, und erst am Abend hat man sie in einem Garten wiedergefunden.", en: "Two of the animals escaped from the enclosure, and only in the evening were they found again in a garden." }, drill: { jp: "Niemand konnte dem Feuer entkommen", en: "Nobody could escape the fire" }, accept: ["to escape", "escape", "to get away", "get away", "to flee"], hint: "Takes the dative of what you escape: dem Feuer, der Polizei. The ent- prefix means away-from, and it runs through a whole family — entlassen, entfernen, entlaufen." },
        { id: "de-u114l2-verstecken", type: "vocab", front: "verstecken", reading: "verstecken", meaning: "to hide", example: { jp: "Sie hat den Zettel ganz hinten in der Schublade versteckt, weil sie ihn selbst erst später lesen wollte.", en: "She hid the note right at the back of the drawer because she wanted to read it herself only later." }, drill: { jp: "Er will den Schlüssel im Garten verstecken", en: "He wants to hide the key in the garden" }, accept: ["to hide", "hide", "to conceal", "conceal", "to stash"], hint: "Hiding a thing. For hiding yourself German uses it reflexively — sich verstecken. The children's game is das Versteckspiel." },
        { id: "de-u114l2-erwischen", type: "vocab", front: "erwischen", reading: "erwischen", meaning: "to catch (in the act)", example: { jp: "Der Lehrer hat ihn beim Abschreiben erwischt, und deshalb zählt die Arbeit in diesem Halbjahr gar nicht.", en: "The teacher caught him copying, and for that reason the paper does not count at all this term." }, drill: { jp: "Die Polizei hat den Fahrer erwischt", en: "The police caught the driver" }, accept: ["to catch", "catch", "to catch out", "to nab", "to catch red-handed"], hint: "Catching someone doing something they should not — the reproach is built in. Also used of catching a train or a cold, where it simply means you managed it." },
        { id: "de-u114l2-verfolgen", type: "vocab", front: "verfolgen", reading: "verfolgen", meaning: "to pursue", example: { jp: "Die Zeitung verfolgt den Fall seit Monaten und veröffentlicht jede Woche neue Einzelheiten aus den Akten.", en: "The newspaper has been following the case for months and publishes new details from the files every week." }, drill: { jp: "Wir verfolgen das Ziel seit Jahren", en: "We have been pursuing the goal for years" }, accept: ["to pursue", "pursue", "to follow", "follow", "to track", "to chase"], hint: "Three ranges at once: chasing a person, following a news story, and pursuing a goal. In a political context it also means to persecute — context decides, and it decides sharply." },
        { id: "de-u114l2-beschuetzen", type: "vocab", front: "beschützen", reading: "beschuetzen", meaning: "to protect", example: { jp: "Der Zaun soll die jungen Bäume beschützen, bis sie kräftig genug sind, um den Wind allein auszuhalten.", en: "The fence is meant to protect the young trees until they are strong enough to withstand the wind alone." }, drill: { jp: "Eltern wollen ihre Kinder beschützen", en: "Parents want to protect their children" }, accept: ["to protect", "protect", "to shield", "shield", "to guard", "to defend"], hint: "Standing between someone and a danger. Distinguish schützen vor (to protect against a thing) — beschützen takes a person as its object and needs no preposition." },
      ],
    },
    {
      id: "de-u114l3",
      unit: 114,
      lesson: 3,
      title: "Anfangen, weitermachen, aufhören",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Put an activity on a timeline — start it, carry it on, open it up, bring it to an end, and stop.",
      items: [
        { id: "de-u114l3-beginnen", type: "vocab", front: "beginnen", reading: "beginnen", meaning: "to begin", example: { jp: "Die Sitzung beginnt pünktlich um neun, auch wenn noch nicht alle Unterlagen verteilt worden sind.", en: "The meeting begins punctually at nine, even if not all the documents have been handed out yet." }, drill: { jp: "Der Kurs wird im Herbst beginnen", en: "The course will begin in the autumn" }, accept: ["to begin", "begin", "to start", "start", "to commence"], hint: "Slightly more formal than anfangen and, unlike it, not separable — so it keeps its shape in every position. Strong verb: begann, begonnen." },
        { id: "de-u114l3-beenden", type: "vocab", front: "beenden", reading: "beenden", meaning: "to finish (something)", example: { jp: "Wir sollten das Gespräch beenden, bevor beide Seiten Dinge sagen, die sich später nicht mehr zurücknehmen lassen.", en: "We should end the conversation before both sides say things that can't be taken back later." }, drill: { jp: "Er will das Projekt heute beenden", en: "He wants to finish the project today" }, accept: ["to finish", "finish", "to end", "end", "to conclude", "to terminate"], hint: "Transitive: you beenden a thing. The intransitive 'it ends' is enden, which this course does not teach separately — das Ende (u28) already owns that root." },
        { id: "de-u114l3-fortsetzen", type: "vocab", front: "fortsetzen", reading: "fortsetzen", meaning: "to continue", example: { jp: "Nach der Pause wollen wir die Verhandlung fortsetzen, allerdings nur wenn beide Seiten neue Vorschläge mitbringen.", en: "After the break we want to continue the negotiation, but only if both sides bring new proposals." }, drill: { jp: "Wir werden die Arbeit morgen fortsetzen", en: "We will continue the work tomorrow" }, accept: ["to continue", "continue", "to carry on", "carry on", "to resume", "to keep going"], hint: "Separable: setzt fort in a main clause, so the halves come apart. die Fortsetzung is the next episode of a series." },
        { id: "de-u114l3-starten", type: "vocab", front: "starten", reading: "starten", meaning: "to launch", example: { jp: "Die Firma startet im Frühjahr eine neue Reihe, obwohl die letzte Reihe die Erwartungen deutlich verfehlt hat.", en: "The company is launching a new line in spring, although the last line clearly fell short of expectations." }, drill: { jp: "Wir starten das Programm nächste Woche", en: "We are launching the programme next week" }, accept: ["to launch", "launch", "to start", "start", "to set off", "to take off"], hint: "Used for machines, programmes, campaigns and aircraft rather than for meetings or lessons — for those, beginnen. A plane starts (takes off) and lands." },
        { id: "de-u114l3-oeffnen", type: "vocab", front: "öffnen", reading: "oeffnen", meaning: "to open", example: { jp: "Bitte öffnen Sie das Fenster nicht, solange die Maschine läuft, weil der Staub sonst durch den ganzen Raum zieht.", en: "Please don't open the window while the machine is running, because otherwise the dust spreads through the whole room." }, drill: { jp: "Können Sie bitte die Tür öffnen", en: "Could you please open the door" }, accept: ["to open", "open", "to unlock", "to open up"], hint: "The written and formal word; speech often prefers aufmachen. offen (the adjective, taught in u121) belongs to it, and die Öffnung is the opening itself." },
        { id: "de-u114l3-aufhoeren", type: "vocab", front: "aufhören", reading: "aufhoeren", meaning: "to stop (doing)", example: { jp: "Der Regen hat endlich aufgehört, sodass wir den Rest des Weges trocken zurücklegen konnten.", en: "The rain finally stopped, so that we could cover the rest of the way dry." }, drill: { jp: "Du sollst mit dem Lärm aufhören", en: "You should stop with the noise" }, accept: ["to stop", "stop", "to cease", "cease", "to quit", "to end"], hint: "Separable, and it takes mit for what you stop doing: mit dem Rauchen aufhören. Nothing to do with listening, despite sharing a stem with hören (u1) and zuhören (u86)." },
      ],
    },
    {
      id: "de-u114l4",
      unit: 114,
      lesson: 4,
      title: "Kennen, nennen, begreifen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what you know, what you call a thing, what you have worked out — and admit when you are guessing or not telling the truth.",
      items: [
        { id: "de-u114l4-kennen", type: "vocab", front: "kennen", reading: "kennen", meaning: "to know (be familiar with)", example: { jp: "Ich kenne die Gegend gut, deshalb weiß ich auch, welche Straßen man am Abend besser meidet.", en: "I know the area well, which is why I also know which streets are better avoided in the evening." }, drill: { jp: "Wir kennen den neuen Kollegen kaum", en: "We hardly know the new colleague" }, accept: ["to know", "know", "to be familiar with", "to be acquainted with"], hint: "German splits English 'know' in two: kennen is knowing a person, place or thing by acquaintance; wissen (u20) is knowing a fact. You kennen a city, you wissen its population." },
        { id: "de-u114l4-nennen", type: "vocab", front: "nennen", reading: "nennen", meaning: "to call (by a name)", example: { jp: "Die Forscher nennen diesen Zeitraum eine Übergangsphase, weil sich die Ursachen bis heute nicht sauber trennen lassen.", en: "Researchers call this period a transitional phase, because the causes cannot be cleanly separated even today." }, drill: { jp: "Alle nennen ihn nur den Chef", en: "Everyone just calls him the boss" }, accept: ["to call", "call", "to name", "name", "to term", "to refer to as"], hint: "Two accusatives: man nennt ihn einen Fachmann. Irregular — nannte, genannt. For calling on the telephone the word is anrufen (u33)." },
        { id: "de-u114l4-begreifen", type: "vocab", front: "begreifen", reading: "begreifen", meaning: "to grasp (mentally)", example: { jp: "Erst nach dem zweiten Bericht hat die Leitung begriffen, wie groß der Schaden tatsächlich gewesen ist.", en: "Only after the second report did the management grasp how great the damage had actually been." }, drill: { jp: "Langsam begreife ich das Problem", en: "Slowly I am grasping the problem" }, accept: ["to grasp", "grasp", "to comprehend", "comprehend", "to understand", "to realise", "to realize"], hint: "Stronger than verstehen (u12): the moment a thing finally lands. From greifen, to seize — the metaphor is the same as English 'grasp'. der Begriff is the concept." },
        { id: "de-u114l4-herausfinden", type: "vocab", front: "herausfinden", reading: "herausfinden", meaning: "to find out", example: { jp: "Wir müssen zuerst herausfinden, wer den Antrag bearbeitet hat, sonst schicken wir die Unterlagen wieder an die falsche Stelle.", en: "We first have to find out who processed the application, otherwise we'll send the documents to the wrong place again." }, drill: { jp: "Ich möchte die Wahrheit herausfinden", en: "I would like to find out the truth" }, accept: ["to find out", "find out", "to discover", "discover", "to ascertain", "to work out"], hint: "Separable, and long: findet heraus in a main clause. Everyday speech often shortens heraus to raus — rausfinden — which is spoken only." },
        { id: "de-u114l4-luegen", type: "vocab", front: "lügen", reading: "luegen", meaning: "to lie (tell untruths)", example: { jp: "Er hat bei der Befragung gelogen, und genau das hat ihm am Ende mehr geschadet als der ursprüngliche Fehler.", en: "He lied during the questioning, and that is precisely what harmed him in the end more than the original mistake." }, drill: { jp: "Kinder lügen manchmal aus Angst", en: "Children sometimes lie out of fear" }, accept: ["to lie", "lie", "to tell lies", "to tell a lie", "to fib"], hint: "Never confuse with liegen (to lie down, u44) — lügen/log/gelogen against liegen/lag/gelegen. die Lüge is the lie itself." },
        { id: "de-u114l4-wetten", type: "vocab", front: "wetten", reading: "wetten", meaning: "to bet", example: { jp: "Ich wette, dass die Entscheidung noch einmal verschoben wird, obwohl alle Beteiligten das Gegenteil versprechen.", en: "I bet the decision will be postponed once again, although everyone involved is promising the opposite." }, drill: { jp: "Ich wette auf den zweiten Läufer", en: "I am betting on the second runner" }, accept: ["to bet", "bet", "to wager", "wager", "to gamble"], hint: "Ich wette, dass… is the everyday way to say 'I bet' about anything at all, with no money involved. die Wette is the bet." },
      ],
    },
  ],
};
