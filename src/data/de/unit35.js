// DE Unit 35 — Kultur und Freizeit (slot: culture) — A2
// Block 2 (u31–u40). Conventions: see de/unit1.js.
//
// BOUNDARIES. u21 "Activities and routine" is the lead's, so this unit is not about
// what you do on a Tuesday — it is about the ARTS and the organised leisure around
// them. And u40, which is mine, takes celebration and festivals, so nothing here is
// about a party: the split is art you go and look at (u35) against an occasion you
// are invited to (u40).
// Rejected as the same lexeme: der Künstler (~die Kunst in this same lesson — a
// transparent -er agent noun, and the base word is the more useful card); die
// Vorstellung (~sich vorstellen, which u39 teaches).
// auftreten is separable, so its drill uses a modal to keep the infinitive whole —
// the same device u33 used for herunterladen and anrufen.
export const DE_UNIT35 = {
  id: "de-u35",
  lang: "de",
  title: "Kultur und Freizeit",
  order: 35,
  stage: "a2",
  lessons: [
    {
      id: "de-u35l1",
      unit: 35,
      lesson: 1,
      title: "Kunst",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about art and where you go to see it — painting, an exhibition, a gallery, an instrument.",
      items: [
        { id: "de-u35l1-diekunst", type: "vocab", front: "die Kunst", reading: "diekunst", meaning: "art", example: { jp: "Die Kunst in dem Museum ist sehr alt.", en: "The art in the museum is very old." }, drill: { jp: "Die Kunst ist sehr alt", en: "The art is very old" }, accept: ["art"], hint: "From können (u20) — art as something you CAN do. The plural die Künste means the arts as a set of fields." },
        { id: "de-u35l1-malen", type: "vocab", front: "malen", reading: "malen", meaning: "to paint", example: { jp: "Die Kinder malen gern, wenn es kalt ist.", en: "The children like painting when it is cold." }, drill: { jp: "Die Kinder malen sehr gern", en: "The children very much like painting" }, accept: ["to paint", "paint", "to draw"], hint: "For pictures only. Painting a wall is streichen — a German would not malen a room, and the mistake is instantly audible." },
        { id: "de-u35l1-dieausstellung", type: "vocab", front: "die Ausstellung", reading: "dieausstellung", meaning: "exhibition", example: { jp: "Die Ausstellung ist gut, obwohl sie sehr klein ist.", en: "The exhibition is good, although it is very small." }, drill: { jp: "Die Ausstellung ist heute zu", en: "The exhibition is closed today" }, accept: ["exhibition", "show", "display"], hint: "From ausstellen, to put out on show. In a museum it is the temporary show, as against the permanent collection." },
        { id: "de-u35l1-diegalerie", type: "vocab", front: "die Galerie", reading: "diegalerie", meaning: "gallery", example: { jp: "Die Galerie ist neben dem Bahnhof.", en: "The gallery is next to the station." }, drill: { jp: "Die Galerie ist neben dem Museum", en: "The gallery is next to the museum" }, accept: ["gallery", "art gallery"], hint: "ga-le-REE, stress at the end and a hard g. A Galerie sells; a Museum keeps — the distinction matters in German too." },
        { id: "de-u35l1-beruehmt", type: "vocab", front: "berühmt", reading: "beruhmt", meaning: "famous", example: { jp: "Der Autor ist berühmt, obwohl er wenig schreibt.", en: "The author is famous, although he writes little." }, drill: { jp: "Der Roman ist sehr berühmt", en: "The novel is very famous" }, accept: ["famous", "renowned", "well-known"], hint: "be-RÜHMT, from der Ruhm, fame. Berühmt für etwas sein is to be famous for something." },
        { id: "de-u35l1-dasinstrument", type: "vocab", front: "das Instrument", reading: "dasinstrument", meaning: "instrument", example: { jp: "Sie spielt ein Instrument, seit sie klein ist.", en: "She has played an instrument since she was small." }, drill: { jp: "Das Instrument ist sehr teuer", en: "The instrument is very expensive" }, accept: ["instrument", "musical instrument"], hint: "in-stru-MENT, stress at the end. German says ein Instrument spielen with no article before the instrument's name: Klavier spielen." },
      ],
    },
    {
      id: "de-u35l2",
      unit: 35,
      lesson: 2,
      title: "Lesen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about what you are reading — a novel, its author, a chapter, whether it is gripping.",
      items: [
        { id: "de-u35l2-derroman", type: "vocab", front: "der Roman", reading: "derroman", meaning: "novel", example: { jp: "Der Roman ist lang, aber er ist sehr gut.", en: "The novel is long, but it is very good." }, drill: { jp: "Der Roman ist sehr lang", en: "The novel is very long" }, accept: ["novel"], hint: "ro-MAHN, stress at the end. A false friend for readers of English: it is a novel, never a romance." },
        { id: "de-u35l2-derautor", type: "vocab", front: "der Autor", reading: "derautor", meaning: "author", example: { jp: "Der Autor schreibt, während er in dem Park sitzt.", en: "The author writes while he sits in the park." }, drill: { jp: "Der Autor schreibt sehr gut", en: "The author writes very well" }, accept: ["author", "writer"], hint: "OW-tor, with the au of blau (u8). A woman writer is die Autorin — the same -in as die Freundin (u4)." },
        { id: "de-u35l2-diezeitschrift", type: "vocab", front: "die Zeitschrift", reading: "diezeitschrift", meaning: "magazine", example: { jp: "Die Zeitschrift kostet wenig, deshalb kaufe ich sie oft.", en: "The magazine costs little, therefore I buy it often." }, drill: { jp: "Die Zeitschrift kostet sehr wenig", en: "The magazine costs very little" }, accept: ["magazine", "journal", "periodical"], hint: "die Zeit (u1) plus die Schrift, writing — time-writing, something that comes out on a schedule. Not die Zeitung (u1), which is a newspaper." },
        { id: "de-u35l2-spannend", type: "vocab", front: "spannend", reading: "spannend", meaning: "gripping / exciting", example: { jp: "Das Buch ist spannend, deshalb lese ich es schnell.", en: "The book is gripping, therefore I read it quickly." }, drill: { jp: "Der Roman ist sehr spannend", en: "The novel is very gripping" }, accept: ["gripping", "exciting", "thrilling", "interesting"], hint: "The exact opposite of langweilig (u10), and the highest praise a German gives a book or a film." },
        { id: "de-u35l2-daskapitel", type: "vocab", front: "das Kapitel", reading: "daskapitel", meaning: "chapter", example: { jp: "Das Kapitel ist kurz, obwohl das Buch dick ist.", en: "The chapter is short, although the book is thick." }, drill: { jp: "Das Kapitel ist sehr kurz", en: "The chapter is very short" }, accept: ["chapter"], hint: "ka-PI-tel, stress in the middle. Its plural does not change: ein Kapitel, zwei Kapitel." },
        { id: "de-u35l2-daswerk", type: "vocab", front: "das Werk", reading: "daswerk", meaning: "work — a created piece", example: { jp: "Das Werk ist berühmt, obwohl niemand es liest.", en: "The work is famous, although nobody reads it." }, drill: { jp: "Das Werk ist sehr berühmt", en: "The work is very famous" }, accept: ["work", "piece", "opus"], hint: "One created thing — a book, a painting, a symphony. It also means a factory: das Werk in Stuttgart." },
      ],
    },
    {
      id: "de-u35l3",
      unit: 35,
      lesson: 3,
      title: "Bühne und Publikum",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe a performance from both sides — the stage, the audience, the actor, going on.",
      items: [
        { id: "de-u35l3-diebuehne", type: "vocab", front: "die Bühne", reading: "diebuhne", meaning: "stage", example: { jp: "Die Bühne ist klein, obwohl das Theater groß ist.", en: "The stage is small, although the theatre is big." }, drill: { jp: "Die Bühne ist sehr klein", en: "The stage is very small" }, accept: ["stage"], hint: "BÜ-ne, with the ü of Tür (u1). Auf der Bühne stehen is to be on stage — German stands on it where English is on it." },
        { id: "de-u35l3-daspublikum", type: "vocab", front: "das Publikum", reading: "daspublikum", meaning: "audience", example: { jp: "Das Publikum ist ruhig, weil die Oper lang ist.", en: "The audience is quiet because the opera is long." }, drill: { jp: "Das Publikum ist heute ruhig", en: "The audience is quiet today" }, accept: ["audience", "crowd", "public"], hint: "A collective singular: das Publikum IST, never sind. It covers a theatre audience and a sports crowd alike." },
        { id: "de-u35l3-derschauspieler", type: "vocab", front: "der Schauspieler", reading: "derschauspieler", meaning: "actor", example: { jp: "Der Schauspieler spricht laut, damit das Publikum ihn hört.", en: "The actor speaks loudly so that the audience hears him." }, drill: { jp: "Der Schauspieler spricht sehr laut", en: "The actor speaks very loudly" }, accept: ["actor", "performer"], hint: "schauen, to look, plus spielen (u20) — a show-player. die Schauspielerin for a woman." },
        { id: "de-u35l3-dieoper", type: "vocab", front: "die Oper", reading: "dieoper", meaning: "opera", example: { jp: "Die Oper dauert lang, deshalb gehen wir spät nach Hause.", en: "The opera lasts a long time, therefore we go home late." }, drill: { jp: "Die Oper ist heute Abend", en: "The opera is this evening" }, accept: ["opera", "opera house"], hint: "OH-per, two syllables. It means both the work and the building it is performed in." },
        { id: "de-u35l3-derchor", type: "vocab", front: "der Chor", reading: "derchor", meaning: "choir", example: { jp: "Der Chor singt gut, obwohl er klein ist.", en: "The choir sings well, although it is small." }, drill: { jp: "Der Chor singt sehr gut", en: "The choir sings very well" }, accept: ["choir", "chorus"], hint: "KOHR — the ch is a hard k here, as in Charakter (u31), because the word is Greek. Not the sh of ich." },
        { id: "de-u35l3-auftreten", type: "vocab", front: "auftreten", reading: "auftreten", meaning: "to perform / appear", example: { jp: "Der Chor will heute auftreten, obwohl er wenig Zeit hat.", en: "The choir wants to perform today, although it has little time." }, drill: { jp: "Der Chor will heute auftreten", en: "The choir wants to perform today" }, accept: ["to perform", "to appear", "to go on", "perform"], hint: "Separable — er tritt heute auf — so the infinitive only stands whole after a modal, which is what both sentences here do." },
      ],
    },
    {
      id: "de-u35l4",
      unit: 35,
      lesson: 4,
      title: "Freizeit",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you do with your free time and what it costs to join in.",
      items: [
        { id: "de-u35l4-diefreizeit", type: "vocab", front: "die Freizeit", reading: "diefreizeit", meaning: "free time / leisure", example: { jp: "In der Freizeit lese ich gern.", en: "In my free time I like reading." }, drill: { jp: "Die Freizeit ist sehr kurz", en: "The free time is very short" }, accept: ["free time", "leisure", "spare time"], hint: "frei plus die Zeit (u1). Always in der Freizeit, with in and the dative — never auf." },
        { id: "de-u35l4-dashobby", type: "vocab", front: "das Hobby", reading: "dashobby", meaning: "hobby", example: { jp: "Mein Hobby ist Musik, seit ich klein bin.", en: "My hobby has been music since I was small." }, drill: { jp: "Das Hobby kostet viel Geld", en: "The hobby costs a lot of money" }, accept: ["hobby", "pastime"], hint: "Borrowed whole from English and neuter: das Hobby, plural die Hobbys with a y and no ie." },
        { id: "de-u35l4-sammeln", type: "vocab", front: "sammeln", reading: "sammeln", meaning: "to collect", example: { jp: "Er sammelt alte Bücher, obwohl er wenig Platz hat.", en: "He collects old books, although he has little space." }, drill: { jp: "Wir sammeln alte Bücher", en: "We collect old books" }, accept: ["to collect", "to gather", "collect"], hint: "Note the -eln ending: ich sammle, dropping the middle e. die Sammlung is the collection that results." },
        { id: "de-u35l4-dasmitglied", type: "vocab", front: "das Mitglied", reading: "dasmitglied", meaning: "member", example: { jp: "Er ist Mitglied in dem Verein, seit er hier wohnt.", en: "He has been a member of the club since he has lived here." }, drill: { jp: "Das Mitglied bezahlt sehr wenig", en: "The member pays very little" }, accept: ["member"], hint: "mit plus das Glied, a limb — a limb of the body of the group. Neuter even when the member is a person." },
        { id: "de-u35l4-dereintritt", type: "vocab", front: "der Eintritt", reading: "dereintritt", meaning: "admission (fee)", example: { jp: "Der Eintritt kostet wenig, deshalb kommen viele Kinder.", en: "Admission costs little, therefore many children come." }, drill: { jp: "Der Eintritt kostet zehn Euro", en: "Admission costs ten euros" }, accept: ["admission", "entry", "entrance fee"], hint: "From eintreten, to step in. Eintritt frei on a sign means entry is free — the phrase you look for outside a museum." },
        { id: "de-u35l4-daslied", type: "vocab", front: "das Lied", reading: "daslied", meaning: "song", example: { jp: "Das Lied ist alt, aber der Chor singt es gern.", en: "The song is old, but the choir likes singing it." }, drill: { jp: "Das Lied ist sehr alt", en: "The song is very old" }, accept: ["song", "tune"], hint: "LEET, with the ie of hier (u1) and a hardened d. English borrowed it for art song — a Lied recital." },
      ],
    },
  ],
};
