// DE Unit 116 — Charakter und Gefühl (slot: coverage-b2-6) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Coverage pass — see u114's header for the method and u115's for why five cards.
// Evidence: every front is tier A (top-2000 external frequency, untaught across
// all 2714 claimed fronts) unless the hint says otherwise.
//
// Self-check, dropped as same-lexeme duplicates of something already taught:
//   froh (fröhlich u40), schuldig (die Schuld u61), verantwortlich (die
//   Verantwortung u61), die Lust (lustig u10), der Mut (mutig u22), die Hoffnung
//   (hoffen u29), gefährlich (die Gefahr u81), entschuldigen (die Entschuldigung
//   u2), die Verzeihung (verzeihen u73), besorgt (besorgen, taught in u114 of
//   this very block).
// ⚠️ That list is the finding, not an apology: ten ordinary feeling-words are
// permanently unteachable in German because the course already owns their root.
// froh in particular is a measured hole — its partner traurig is taught (u10) —
// and it still cannot be a card. Raised for the lead, not worked around.
// (no FREE declarations needed)
export const DE_UNIT116 = {
  id: "de-u116",
  lang: "de",
  title: "Charakter und Gefühl",
  order: 116,
  stage: "b2",
  lessons: [
    {
      id: "de-u116l1",
      unit: 116,
      lesson: 1,
      title: "Böse, ernst, verrückt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe someone's state of mind or character sharply — angry, serious, out of their mind, slow-witted or cowardly.",
      items: [
        { id: "de-u116l1-boese", type: "vocab", front: "böse", reading: "boese", meaning: "angry", example: { jp: "Sie war böse auf mich, weil ich den Termin vergessen hatte.", en: "She was angry at me because I had forgotten the appointment." }, drill: { jp: "Der Chef war gestern sehr böse", en: "The boss was very angry yesterday" }, accept: ["angry", "cross", "mad", "evil", "wicked", "bad"], hint: "Two quite different senses: böse auf jemanden is simply cross with someone, while ein böser Mensch is evil. The preposition tells you which." },
        { id: "de-u116l1-ernst", type: "vocab", front: "ernst", reading: "ernst", meaning: "serious", example: { jp: "Das Problem ist ernst, auch wenn im Moment noch niemand die Folgen genau kennt.", en: "The problem is serious, even if at the moment nobody knows the consequences exactly." }, drill: { jp: "Meinst du das wirklich ernst", en: "Do you really mean that seriously" }, accept: ["serious", "earnest", "grave", "in earnest"], hint: "jemanden ernst nehmen is to take someone seriously — the standard phrase. Also a man's first name, which is why capitalisation matters here." },
        { id: "de-u116l1-verrueckt", type: "vocab", front: "verrückt", reading: "verrueckt", meaning: "crazy", example: { jp: "Der Plan ist verrückt, aber er kann wirklich gelingen.", en: "The plan is crazy, but it really can succeed." }, drill: { jp: "Diese Sache ist völlig verrückt", en: "This matter is completely crazy" }, accept: ["crazy", "mad", "insane", "nuts", "wild"], hint: "Literally 'moved out of place' — from verrücken, to shift something. verrückt nach etwas means crazy ABOUT something, a compliment rather than a diagnosis." },
        { id: "de-u116l1-dumm", type: "vocab", front: "dumm", reading: "dumm", meaning: "stupid", example: { jp: "Die Frage war nicht dumm, sondern sie zeigt genau das Problem.", en: "The question wasn't stupid; it shows exactly the problem." }, drill: { jp: "So dumm ist der Junge nicht", en: "The boy is not that stupid" }, accept: ["stupid", "dumb", "foolish", "silly", "daft"], hint: "Harsher than blöd (u115) when used of a person. dummerweise means 'unfortunately' — literally 'stupidly', of the situation rather than anyone in it." },
        { id: "de-u116l1-feige", type: "vocab", front: "feige", reading: "feige", meaning: "cowardly", example: { jp: "Es wäre feige, jetzt nichts zu sagen, obwohl alle im Raum genau wissen, was hier falsch läuft.", en: "It would be cowardly to say nothing now, although everyone in the room knows exactly what is going wrong here." }, drill: { jp: "Sein Schweigen war einfach feige", en: "His silence was simply cowardly" }, accept: ["cowardly", "craven", "gutless", "spineless"], hint: "Tier C — a measured hole rather than a frequency one: its partner mutig (brave) is taught in u22 and this half was missing. der Feigling is the coward himself." },
        { id: "de-u116l1-eingebildet", type: "vocab", front: "eingebildet", reading: "eingebildet", meaning: "conceited", example: { jp: "Seit der Beförderung ist er ziemlich eingebildet geworden.", en: "Since the promotion he has become rather conceited." }, drill: { jp: "Seit damals ist er ziemlich eingebildet", en: "Since then he has been rather conceited" }, accept: ["conceited", "arrogant", "stuck up", "big headed", "vain"], hint: "From sich etwas einbilden, to imagine something about yourself. Careful: eingebildete Schmerzen are imaginary pains — same word, other sense." },
      ],
    },
    {
      id: "de-u116l2",
      unit: 116,
      lesson: 2,
      title: "Höflich, geschickt, persönlich",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Judge how someone handles other people — rude or skilful, blunt or ordinary — and say when something is meant personally.",
      items: [
        { id: "de-u116l2-unhoeflich", type: "vocab", front: "unhöflich", reading: "unhoeflich", meaning: "rude", example: { jp: "Es wirkt unhöflich, wenn man bei dem Essen ständig auf das Handy sieht.", en: "It comes across as rude to keep looking at your phone during a meal." }, drill: { jp: "Seine Antwort war ziemlich unhöflich", en: "His answer was rather rude" }, accept: ["rude", "impolite", "discourteous", "bad-mannered"], hint: "Tier C: höflich is taught in u31, this half was not. German builds the opposite of most adjectives with un-, and the stress moves onto it — UNhöflich." },
        { id: "de-u116l2-geschickt", type: "vocab", front: "geschickt", reading: "geschickt", meaning: "skilful", example: { jp: "Sie antwortet geschickt und sagt dabei nichts Falsches.", en: "She answers skilfully and says nothing wrong in the process." }, drill: { jp: "Der Schritt war wirklich geschickt", en: "The move was really skilful" }, accept: ["skilful", "skillful", "clever", "adept", "deft", "adroit"], hint: "Identical in form to the participle of schicken (to send), so geschickt can mean 'sent' — context separates them without effort." },
        { id: "de-u116l2-persoenlich", type: "vocab", front: "persönlich", reading: "persoenlich", meaning: "personal", example: { jp: "Nimm die Kritik nicht persönlich, denn sie meint die Arbeit und nicht dich.", en: "Don't take the criticism personally, because it means the work and not you." }, drill: { jp: "Ich möchte mit ihr persönlich sprechen", en: "I would like to speak with her personally" }, accept: ["personal", "personally", "in person", "private"], hint: "Both 'personal' and 'in person' — persönlich erscheinen is to turn up yourself rather than send someone." },
        { id: "de-u116l2-normal", type: "vocab", front: "normal", reading: "normal", meaning: "ordinary", example: { jp: "Es ist völlig normal, dass man am Anfang mehr Zeit braucht als später.", en: "It is completely normal to need more time at the beginning than later on." }, drill: { jp: "Der Preis ist eigentlich ganz normal", en: "The price is actually quite normal" }, accept: ["normal", "ordinary", "usual", "standard"], hint: "Tier B — a word the course was already USING in its own example sentences with no card behind it, found by sweeping every example against the taught list. normalerweise is the adverb, 'normally'." },
        { id: "de-u116l2-direkt", type: "vocab", front: "direkt", reading: "direkt", meaning: "direct", example: { jp: "Sag es ihm direkt, weil er sonst gar nichts versteht.", en: "Tell him directly, because otherwise he understands nothing at all." }, drill: { jp: "Der Weg zum Bahnhof ist ganz direkt", en: "The way to the station is quite direct" }, accept: ["direct", "directly", "straight", "immediate", "right"], hint: "Tier B, like normal above. Also a plain intensifier of place and time: direkt neben dem Haus, right next to the house." },
        { id: "de-u116l2-offen", type: "vocab", front: "offen", reading: "offen", meaning: "open (frank)", example: { jp: "Sie hat mir ganz offen gesagt, was sie von dem Plan hält.", en: "She told me quite openly what she thinks of the plan." }, drill: { jp: "Sie spricht offen über das Problem", en: "She speaks openly about the problem" }, accept: ["open", "frank", "candid", "openly", "unlocked"], hint: "Open in both senses: die Tür ist offen, and offen reden = to speak frankly. öffnen (u114) is the verb; offen gesagt = to be honest." },
      ],
    },
    {
      id: "de-u116l3",
      unit: 116,
      lesson: 3,
      title: "Hassen, fürchten, lachen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the strong reactions — hating, fearing, laughing, shouting, falling in love and imagining — as verbs rather than as adjectives.",
      items: [
        { id: "de-u116l3-hassen", type: "vocab", front: "hassen", reading: "hassen", meaning: "to hate", example: { jp: "Ich hasse es zu warten, wenn niemand etwas sagt.", en: "I hate waiting when nobody says anything." }, drill: { jp: "Viele Leute hassen langes Warten", en: "Many people hate long waiting" }, accept: ["to hate", "hate", "to loathe", "loathe", "to detest"], hint: "Tier C: its partner lieben is taught in u4 and this half was missing. der Hass is the noun." },
        { id: "de-u116l3-fuerchten", type: "vocab", front: "fürchten", reading: "fuerchten", meaning: "to be afraid of", example: { jp: "Wir fürchten, dass die Antwort zu spät kommt.", en: "We fear that the answer will come too late." }, drill: { jp: "Sie muss die Wahrheit nicht fürchten", en: "She does not have to fear the truth" }, accept: ["to fear", "fear", "to dread", "dread", "to be afraid of"], hint: "Ich fürchte, … is the polite way to deliver bad news, exactly like English 'I'm afraid…'. Reflexive sich fürchten vor is to be frightened of." },
        { id: "de-u116l3-lachen", type: "vocab", front: "lachen", reading: "lachen", meaning: "to laugh", example: { jp: "Alle mussten lachen, obwohl die Sache gar nicht lustig war.", en: "Everyone had to laugh, although the matter wasn't funny at all." }, drill: { jp: "Die Kinder lachen über den Hund", en: "The children are laughing at the dog" }, accept: ["to laugh", "laugh", "to chuckle"], hint: "Tier C: weinen (to cry) is taught in u57 and this half was missing. über etwas lachen is to laugh AT it — the preposition is über, never an." },
        { id: "de-u116l3-schreien", type: "vocab", front: "schreien", reading: "schreien", meaning: "to shout", example: { jp: "Du musst nicht schreien, ich höre dich auch so.", en: "You don't have to shout; I can hear you anyway." }, drill: { jp: "Das Kind beginnt laut zu schreien", en: "The child begins to shout loudly" }, accept: ["to shout", "shout", "to scream", "scream", "to yell", "to cry out"], hint: "Stronger than rufen — schreien is raw volume, whether from anger, pain or fear. Strong verb: schrie, geschrien." },
        { id: "de-u116l3-verlieben", type: "vocab", front: "sich verlieben", reading: "sichverlieben", meaning: "to fall in love", example: { jp: "Die zwei haben sich im Sommer verliebt und wohnen heute zusammen.", en: "The two fell in love in the summer and live together today." }, drill: { jp: "Man kann sich verlieben ohne es zu merken", en: "One can fall in love without noticing it" }, accept: ["to fall in love", "fall in love", "to become infatuated"], hint: "Always reflexive, and it takes in + accusative: sich in jemanden verlieben. verliebt sein is the resulting state — to be in love." },
        { id: "de-u116l3-vorstellen", type: "vocab", front: "sich vorstellen", reading: "sichvorstellen", meaning: "to imagine", example: { jp: "Ich kann mir gut vorstellen, dass die Sache noch einmal von vorne beginnt.", en: "I can well imagine that the matter will begin again from the start." }, drill: { jp: "Das kann man sich vorstellen", en: "One can imagine that" }, accept: ["to imagine", "imagine", "to picture", "to introduce oneself", "to envisage"], hint: "With the DATIVE (sich etwas vorstellen) it means to imagine; with the accusative it means to introduce yourself. Same verb, and the case decides." },
      ],
    },
    {
      id: "de-u116l4",
      unit: 116,
      lesson: 4,
      title: "Die Lüge und der Feind",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the things feelings produce — a lie, grief, an enemy, madness and a joke — as nouns you can use in an argument.",
      items: [
        { id: "de-u116l4-dieluege", type: "vocab", front: "die Lüge", reading: "dieluege", meaning: "the lie", example: { jp: "Die Lüge war klein, aber sie stand an der falschen Stelle.", en: "The lie was small, but it stood in the wrong place." }, drill: { jp: "Die Lüge war schnell klar", en: "The lie was quickly clear" }, accept: ["lie", "the lie", "falsehood", "untruth"], hint: "Tier C: die Wahrheit is taught in u58 and its opposite was missing. Pairs with lügen, the verb taught in u114 of this block." },
        { id: "de-u116l4-dietrauer", type: "vocab", front: "die Trauer", reading: "dietrauer", meaning: "the mourning", example: { jp: "Die Trauer kommt oft erst Wochen später.", en: "Grief often only comes weeks later." }, drill: { jp: "Die Trauer dauerte viele Monate", en: "The grief lasted many months" }, accept: ["grief", "the grief", "mourning", "sorrow", "sadness"], hint: "Tier C: die Freude (joy) is taught in u22 and this half was missing. Not related to sich trauen (to dare, u48) despite the spelling — a false family the checker flags and a reader should dismiss." },
        { id: "de-u116l4-derfeind", type: "vocab", front: "der Feind", reading: "derfeind", meaning: "the enemy", example: { jp: "Der Feind von gestern sitzt heute an diesem Tisch.", en: "Yesterday's enemy sits at this table today." }, drill: { jp: "Der Feind stand vor der Stadt", en: "The enemy stood before the city" }, accept: ["enemy", "the enemy", "foe", "adversary"], hint: "Tier C: der Freund is taught in u4. Note how close the two look — Freund and Feind differ by one letter and mean opposites." },
        { id: "de-u116l4-derwahnsinn", type: "vocab", front: "der Wahnsinn", reading: "derwahnsinn", meaning: "the madness", example: { jp: "Es ist Wahnsinn, wie viel Zeit hier jeden Monat vergeht.", en: "It is madness how much time passes here every month." }, drill: { jp: "Der Wahnsinn hat endlich ein Ende", en: "The madness has finally come to an end" }, accept: ["madness", "the madness", "insanity", "lunacy", "craziness"], hint: "As a bare exclamation — Wahnsinn! — it is pure admiration, closer to English 'incredible!' than to anything clinical." },
        { id: "de-u116l4-derwitz", type: "vocab", front: "der Witz", reading: "derwitz", meaning: "the joke", example: { jp: "Der Witz war alt, aber die Gäste fanden ihn trotzdem gut.", en: "The joke was old, but the guests liked it anyway." }, drill: { jp: "Der Witz war überhaupt nicht lustig", en: "The joke was not funny at all" }, accept: ["joke", "the joke", "gag", "wit", "point"], hint: "Also 'the point' of something: der Witz an der Sache ist… — the clever thing about it is… Pairs with witzig, taught in u115." },
        { id: "de-u116l4-derhass", type: "vocab", front: "der Hass", reading: "derhass", meaning: "the hatred", example: { jp: "Aus dem alten Streit ist mit den Jahren echter Hass geworden.", en: "Over the years the old quarrel has turned into real hatred." }, drill: { jp: "Der Hass war größer als die Angst", en: "The hatred was greater than the fear" }, accept: ["hatred", "the hatred", "hate", "the hate"], hint: "No plural. hassen is the verb. Type the ß as ss: derhass. The opposite pole to die Liebe, and stronger than der Zorn (u125)." },
      ],
    },
  ],
};
