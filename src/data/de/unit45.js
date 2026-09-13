// DE Unit 45 — Sport und Wettkampf (slot: vocabulary 6 (A2)) — A2
// Block 3 (u41–u50), coverage pass. Conventions: see de/unit1.js.
//
// THEME CHOSEN BY THIS SEAT. The generic slot is "Vocabulary 6 (A2)"; the German
// band already teaches its obvious A2 domains across A1 (27 units) + blocks 1–2
// (travel, work, feelings, school, nature, money are all largely spent — measured,
// not guessed), so the six coverage slots take what is still open. Sport is one
// genuinely-open concrete domain: der Verein, schwimmen, laufen are taken, but the
// game/team/result vocabulary is not. Every front checked at FRONT and LEXEME level
// against A1 + all three A2 blocks (block 2 pulled from its branch — not merged into
// this one). Examples and drills use only vocab introduced at or before u45:
// verified by `node scripts/scope-strict-de.mjs 45 50`, which applies NO inflection
// excuse and reports 0 out-of-scope tokens across u45-u50.
// FREE-STRUCTURAL: Sport — the u23/das Auto case again.
// der Sport is carded HERE but was licensed by u1's FREE list from unit 1, and A1
// uses it before this card (first at u21). check-forward-refs flags that and is
// right to: the word's first appearance is u21, not u45. This is a DELIBERATE late
// formal treatment, not an accidental forward reference — FREE let A1 use a
// transparent cognate untaught, and the cost of that call is that it was never
// reviewable. Carding it here fixes that without invalidating the A1 examples,
// which would break if Sport left the FREE list. Declared rather than silenced.
export const DE_UNIT45 = {
  id: "de-u45",
  lang: "de",
  title: "Sport und Wettkampf",
  order: 45,
  stage: "a2",
  lessons: [
    {
      id: "de-u45l1",
      unit: 45,
      lesson: 1,
      title: "Sport machen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about doing sport: training, exercises, being fit, and starting as a beginner.",
      items: [
        { id: "de-u45l1-dersport", type: "vocab", front: "der Sport", reading: "dersport", meaning: "sport", example: { jp: "Ich mache jeden Tag Sport.", en: "I do a bit of sport every day." }, drill: { jp: "Der Sport ist gut für den Körper", en: "Sport is good for the body" }, accept: ["sport", "sports", "exercise"], hint: "Sport machen = to do sport, do exercise. No plural in this sense." },
        { id: "de-u45l1-trainieren", type: "vocab", front: "trainieren", reading: "trainieren", meaning: "to train", example: { jp: "Sie trainiert zweimal in der Woche.", en: "She trains three times a week." }, drill: { jp: "Wir trainieren am Abend", en: "We train in the evening" }, accept: ["to train", "to practise", "to work out"], hint: "For sport or a skill. The noun is das Training, the next card." },
        { id: "de-u45l1-dastraining", type: "vocab", front: "das Training", reading: "dastraining", meaning: "training", example: { jp: "Das Training ist um sechs Uhr.", en: "The training starts at six o'clock." }, drill: { jp: "Das Training ist heute lang", en: "The training is long today" }, accept: ["training", "the training", "practice", "workout"], hint: "The session itself. Borrowed straight from English, said the German way." },
        { id: "de-u45l1-dieubung", type: "vocab", front: "die Übung", reading: "dieubung", meaning: "exercise", example: { jp: "Die Übung ist für Anfänger leicht.", en: "This exercise is easy for beginners." }, drill: { jp: "Die Übung ist sehr schwer", en: "The exercise is very hard" }, accept: ["exercise", "the exercise", "drill", "practice"], hint: "A single exercise, in sport or in a book. Übung macht den Meister = practice makes perfect." },
        { id: "de-u45l1-fit", type: "vocab", front: "fit", reading: "fit", meaning: "fit", example: { jp: "Er ist sehr fit, weil er viel läuft.", en: "He is very fit, because he runs a lot." }, drill: { jp: "Ich bin heute nicht fit", en: "I am not fit today" }, accept: ["fit", "in shape", "healthy"], hint: "Borrowed from English. sich fit halten = to keep in shape." },
        { id: "de-u45l1-deranfanger", type: "vocab", front: "der Anfänger", reading: "deranfanger", meaning: "the beginner", example: { jp: "Ein Anfänger braucht am Anfang einen Lehrer.", en: "A beginner needs a lot of help at the start." }, drill: { jp: "Der Anfänger lernt schnell", en: "The beginner learns quickly" }, accept: ["beginner", "the beginner", "the novice"], hint: "From der Anfang, the beginning. The opposite is der Profi." },
        { id: "de-u45l1-wichtig", type: "vocab", front: "wichtig", reading: "wichtig", meaning: "important", example: { jp: "Für mich ist der Sport sehr wichtig.", en: "Sport is very important to me." }, drill: { jp: "Das Training ist wichtig", en: "The training is important" }, accept: ["important", "significant"], hint: "wichtig für + accusative. Unwichtig is the opposite." },
      ],
    },
    {
      id: "de-u45l2",
      unit: 45,
      lesson: 2,
      title: "Das Spiel",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe a ball game: the ball, the goal, throwing, catching, and the players.",
      items: [
        { id: "de-u45l2-dasspiel", type: "vocab", front: "das Spiel", reading: "dasspiel", meaning: "the game", example: { jp: "Das Spiel dauert zwei Stunden.", en: "The game lasts ninety minutes." }, drill: { jp: "Das Spiel war gut", en: "The game was good" }, accept: ["game", "the game", "the match"], hint: "From spielen. A match, or any game or play." },
        { id: "de-u45l2-derball", type: "vocab", front: "der Ball", reading: "derball", meaning: "the ball", example: { jp: "Der Ball liegt unter dem Tisch.", en: "The ball is lying under the table." }, drill: { jp: "Der Ball ist rot", en: "The ball is red" }, accept: ["ball", "the ball"], hint: "Also a formal dance — der Ball. Plural: die Bälle." },
        { id: "de-u45l2-dastor", type: "vocab", front: "das Tor", reading: "dastor", meaning: "the goal", example: { jp: "Der Spieler macht ein Tor und wir freuen uns.", en: "The player scores a goal and we are happy." }, drill: { jp: "Das Tor ist groß", en: "The goal is big" }, accept: ["goal", "the goal", "the gate"], hint: "ein Tor machen = to score a goal. The same word also means a large gate." },
        { id: "de-u45l2-werfen", type: "vocab", front: "werfen", reading: "werfen", meaning: "to throw", example: { jp: "Kannst du mir den Ball werfen?", en: "Can you throw me the ball?" }, drill: { jp: "Wir werfen den Ball", en: "We throw the ball" }, accept: ["to throw", "to toss"], hint: "Stem change: er wirft. wegwerfen is to throw away." },
        { id: "de-u45l2-fangen", type: "vocab", front: "fangen", reading: "fangen", meaning: "to catch", example: { jp: "Ich werfe und du fängst.", en: "I throw and you catch." }, drill: { jp: "Wir fangen den Ball", en: "We catch the ball" }, accept: ["to catch"], hint: "Stem change: er fängt. anfangen (to begin) is built on it." },
        { id: "de-u45l2-derspieler", type: "vocab", front: "der Spieler", reading: "derspieler", meaning: "the player", example: { jp: "Der Spieler ist sehr schnell.", en: "The player is very fast." }, drill: { jp: "Der Spieler trainiert viel", en: "The player trains a lot" }, accept: ["player", "the player"], hint: "From spielen. A woman player is die Spielerin." },
      ],
    },
    {
      id: "de-u45l3",
      unit: 45,
      lesson: 3,
      title: "Die Mannschaft",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a team and a match: the opponent, the competition, the stadium, the crowd.",
      items: [
        { id: "de-u45l3-stark", type: "vocab", front: "stark", reading: "stark", meaning: "strong", example: { jp: "Der Spieler ist groß und stark.", en: "The player is big and strong." }, drill: { jp: "Der Wind ist heute stark", en: "The wind is strong today" }, accept: ["strong", "powerful", "heavy"], hint: "Of a person, a wind or a storm. Also 'heavily': es regnet stark. Comparative: stärker." },
        { id: "de-u45l3-diemannschaft", type: "vocab", front: "die Mannschaft", reading: "diemannschaft", meaning: "the team", example: { jp: "Die Mannschaft spielt heute gegen Berlin.", en: "The team is playing against Berlin today." }, drill: { jp: "Die Mannschaft ist sehr stark", en: "The team is very strong" }, accept: ["team", "the team", "the squad"], hint: "The word for a sports team. das Team is also used, borrowed from English." },
        { id: "de-u45l3-dergegner", type: "vocab", front: "der Gegner", reading: "dergegner", meaning: "the opponent", example: { jp: "Der Gegner war heute besser.", en: "The opponent was better today." }, drill: { jp: "Der Gegner ist sehr stark", en: "The opponent is very strong" }, accept: ["opponent", "the opponent", "the rival"], hint: "From gegen, against. In a war or debate too, not only sport." },
        { id: "de-u45l3-derwettkampf", type: "vocab", front: "der Wettkampf", reading: "derwettkampf", meaning: "the competition", example: { jp: "Der Wettkampf ist am Samstag.", en: "The competition is on Saturday." }, drill: { jp: "Der Wettkampf ist morgen", en: "The competition is tomorrow" }, accept: ["competition", "the competition", "the contest"], hint: "der Wett- (bet/contest) + der Kampf (fight). A sporting contest." },
        { id: "de-u45l3-dasstadion", type: "vocab", front: "das Stadion", reading: "dasstadion", meaning: "the stadium", example: { jp: "Im Stadion ist es heute sehr laut.", en: "It is very loud in the stadium today." }, drill: { jp: "Das Stadion ist sehr groß", en: "The stadium is very big" }, accept: ["stadium", "the stadium"], hint: "Plural: die Stadien. Where the crowd sits to watch." },
        { id: "de-u45l3-derzuschauer", type: "vocab", front: "der Zuschauer", reading: "derzuschauer", meaning: "the spectator", example: { jp: "Die Zuschauer rufen sehr laut.", en: "The spectators are shouting very loudly." }, drill: { jp: "Der Zuschauer ist laut", en: "The spectator is loud" }, accept: ["spectator", "the spectator", "the viewer", "the audience"], hint: "From zuschauen, to watch. On TV, der Zuschauer is a viewer." },
        { id: "de-u45l3-diehalbzeit", type: "vocab", front: "die Halbzeit", reading: "diehalbzeit", meaning: "half-time", example: { jp: "In der Halbzeit trinken die Spieler Wasser.", en: "At half-time the players drink water." }, drill: { jp: "Die Halbzeit ist kurz", en: "Half-time is short" }, accept: ["half-time", "the half-time", "the interval"], hint: "halb (half) + die Zeit (time). The break in the middle of a match." },
      ],
    },
    {
      id: "de-u45l4",
      unit: 45,
      lesson: 4,
      title: "Gewinnen und verlieren",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say who won or lost: win, lose, a victory, a defeat, a draw, a medal.",
      items: [
        { id: "de-u45l4-man", type: "vocab", front: "man", reading: "man", meaning: "one — people in general", example: { jp: "In Deutschland trinkt man viel Kaffee.", en: "In Germany people drink a lot of coffee." }, drill: { jp: "Hier kann man gut essen", en: "One can eat well here" }, accept: ["one", "you", "people", "they"], hint: "The impersonal subject — English says 'you' or 'people'. ONE n: der Mann (man, husband) has two." },
        { id: "de-u45l4-gewinnen", type: "vocab", front: "gewinnen", reading: "gewinnen", meaning: "to win", example: { jp: "Wir wollen das Spiel heute gewinnen.", en: "We want to win the game today." }, drill: { jp: "Wir gewinnen oft", en: "We win often" }, accept: ["to win", "to gain"], hint: "Also to gain or earn: Zeit gewinnen, to gain time." },
        { id: "de-u45l4-verlieren", type: "vocab", front: "verlieren", reading: "verlieren", meaning: "to lose", example: { jp: "Man kann nicht immer gewinnen; manchmal muss man verlieren.", en: "You can't always win; sometimes you have to lose." }, drill: { jp: "Wir verlieren das Spiel", en: "We lose the game" }, accept: ["to lose"], hint: "Losing a game, and losing an object: Ich habe meinen Schlüssel verloren." },
        { id: "de-u45l4-dersieg", type: "vocab", front: "der Sieg", reading: "dersieg", meaning: "the victory", example: { jp: "Nach dem Sieg feiern wir zusammen.", en: "After the victory we celebrate together." }, drill: { jp: "Der Sieg war sehr wichtig", en: "The victory was very important" }, accept: ["victory", "the victory", "the win"], hint: "The winner is der Sieger. Don't confuse with sie (she/they)." },
        { id: "de-u45l4-dieniederlage", type: "vocab", front: "die Niederlage", reading: "dieniederlage", meaning: "the defeat", example: { jp: "Nach der Niederlage waren wir sehr traurig.", en: "After the defeat we were very sad." }, drill: { jp: "Die Niederlage war schwer", en: "The defeat was hard" }, accept: ["defeat", "the defeat", "the loss"], hint: "The opposite of der Sieg. Literally a 'laying down'." },
        { id: "de-u45l4-unentschieden", type: "vocab", front: "unentschieden", reading: "unentschieden", meaning: "a draw", example: { jp: "Das Spiel war unentschieden, zwei zu zwei.", en: "The game was a draw, two to two." }, drill: { jp: "Das Spiel ist unentschieden", en: "The game is a draw" }, accept: ["a draw", "a tie", "even", "undecided"], hint: "From entscheiden, to decide — 'not decided'. Neither side won." },
        { id: "de-u45l4-diemedaille", type: "vocab", front: "die Medaille", reading: "diemedaille", meaning: "the medal", example: { jp: "Sie gewinnt eine Medaille und ist sehr stolz.", en: "She wins a medal and is very proud." }, drill: { jp: "Die Medaille ist schön", en: "The medal is beautiful" }, accept: ["medal", "the medal"], hint: "Said 'me-DAL-yeh'. Gold, Silber or Bronze." },
      ],
    },
  ],
};
