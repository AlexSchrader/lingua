// DE Unit 10 — Beschreiben (slot: describing) — A1
// Block 2 (u8–u14). Conventions: see de/unit1.js.
// Block 1 spent eight of the obvious describing words on its sound and town units
// — klein, groß, schnell, schön, spät, alt, jung, weit/nah — plus gut/schlecht (u2),
// lecker (u6) and müde (u1). This unit takes what is left, and there was plenty:
// brightness and dimension (l1), weight and fullness (l2), condition and price (l3),
// character (l4).
// Temperature is NOT here: kalt, warm and heiß went to u8, because weather cannot be
// said without them and u8 comes first.
// Rejected as the same lexeme: freundlich (~u4 der Freund — a transparent -lich
// derivation of a taught noun, so no new learning). nett does that job instead.
// Kept deliberately: neu is not a relative of u5's neun, and langweilig, though it
// contains lang, is a lexicalised word a learner of lang would never guess.
// All four lessons use the same frame — X ist ADJECTIVE — on purpose: after ist,
// a German adjective takes no ending at all, and that is the one fact this unit
// most needs to make automatic before endings arrive in u13.
export const DE_UNIT10 = {
  id: "de-u10",
  lang: "de",
  title: "Beschreiben",
  order: 10,
  stage: "a1",
  lessons: [
    {
      id: "de-u10l1",
      unit: 10,
      lesson: 1,
      title: "Hell und dunkel, lang und kurz",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe how bright, how long and how high something is.",
      items: [
        { id: "de-u10l1-hell", type: "vocab", front: "hell", reading: "hell", meaning: "bright / light", example: { jp: "Die Küche ist hell.", en: "The kitchen is bright." }, accept: ["bright", "light"], hint: "About light, never about weight — ein helles Zimmer is a room with a lot of daylight. Its opposite is the next card." },
        { id: "de-u10l1-dunkel", type: "vocab", front: "dunkel", reading: "dunkel", meaning: "dark", example: { jp: "Die Nacht ist dunkel.", en: "The night is dark." }, accept: ["dark"], hint: "DOON-kel. It also does the job of English \"deep\" for colours: dunkelblau is dark blue, hellblau light blue." },
        { id: "de-u10l1-lang", type: "vocab", front: "lang", reading: "lang", meaning: "long", example: { jp: "Der Weg ist lang.", en: "The way is long." }, accept: ["long"], hint: "For distance and for time alike. Do not confuse it with block 1's weit (u7), which is about how far away a thing is, not how long it is." },
        { id: "de-u10l1-kurz", type: "vocab", front: "kurz", reading: "kurz", meaning: "short", example: { jp: "Die Zeit ist kurz.", en: "Time is short." }, accept: ["short", "brief"], hint: "KOORTS — z is ts, as always. The opposite of lang for both length and time." },
        { id: "de-u10l1-hoch", type: "vocab", front: "hoch", reading: "hoch", meaning: "high / tall", example: { jp: "Das Haus ist hoch.", en: "The house is tall." }, accept: ["high", "tall"], hint: "The ch is the throaty one after o, as in Buch (u1). For a person you would use groß (u1), not hoch." },
        { id: "de-u10l1-tief", type: "vocab", front: "tief", reading: "tief", meaning: "deep", example: { jp: "Das Wasser ist tief.", en: "The water is deep." }, accept: ["deep", "low"], hint: "TEEF, with the ie of hier (u1). It covers deep and, for a sound or a price, low." },
      ],
    },
    {
      id: "de-u10l2",
      unit: 10,
      lesson: 2,
      title: "Schwer und leicht, voll und leer",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how heavy, how thick and how full something is.",
      items: [
        { id: "de-u10l2-dick", type: "vocab", front: "dick", reading: "dick", meaning: "thick / fat", example: { jp: "Das Buch ist dick.", en: "The book is thick." }, accept: ["thick", "fat"], hint: "For objects it is simply thick; for a person it is as blunt as English fat, so it is worth knowing and worth avoiding." },
        { id: "de-u10l2-duenn", type: "vocab", front: "dünn", reading: "dunn", meaning: "thin", example: { jp: "Das Brot ist dünn.", en: "The bread is thin." }, accept: ["thin"], hint: "The ü of Tür (u1). Type dünn or dunn — the umlaut folds on its own." },
        { id: "de-u10l2-schwer", type: "vocab", front: "schwer", reading: "schwer", meaning: "heavy / difficult", example: { jp: "Die Tür ist schwer.", en: "The door is heavy." }, accept: ["heavy", "difficult", "hard"], hint: "Two meanings in one word: heavy to lift, and hard to do — Deutsch ist schwer. Context tells you which." },
        { id: "de-u10l2-leicht", type: "vocab", front: "leicht", reading: "leicht", meaning: "light / easy", example: { jp: "Die Karte ist leicht.", en: "The map is light." }, accept: ["light", "easy"], hint: "The mirror of schwer, and it splits the same way: light to carry, easy to do. Not to be confused with hell, which is light as in bright." },
        { id: "de-u10l2-voll", type: "vocab", front: "voll", reading: "voll", meaning: "full", example: { jp: "Der Markt ist voll.", en: "The market is full." }, accept: ["full", "crowded"], hint: "FOLL — v is said as f in native German words, the same f you hear in Vater (u4)." },
        { id: "de-u10l2-leer", type: "vocab", front: "leer", reading: "leer", meaning: "empty", example: { jp: "Die Straße ist leer.", en: "The street is empty." }, accept: ["empty"], hint: "LAYR, one long ee. Do not mix it up with lehren or lernen — this is only the adjective empty." },
      ],
    },
    {
      id: "de-u10l3",
      unit: 10,
      lesson: 3,
      title: "Neu, sauber, teuer",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what condition something is in and whether it costs a lot.",
      items: [
        { id: "de-u10l3-neu", type: "vocab", front: "neu", reading: "neu", meaning: "new", example: { jp: "Das Auto ist neu.", en: "The car is new." }, accept: ["new"], hint: "NOY — eu is said \"oy\", not \"you\". One letter from neun, nine (u5), and completely unrelated to it." },
        { id: "de-u10l3-sauber", type: "vocab", front: "sauber", reading: "sauber", meaning: "clean", example: { jp: "Die Wohnung ist sauber.", en: "The flat is clean." }, accept: ["clean", "tidy"], hint: "ZOW-ber, with the au of blau (u8) and a z at the front. Nothing to do with sour." },
        { id: "de-u10l3-schmutzig", type: "vocab", front: "schmutzig", reading: "schmutzig", meaning: "dirty", example: { jp: "Der Platz ist schmutzig.", en: "The square is dirty." }, accept: ["dirty", "filthy"], hint: "The opposite of sauber. The -ig ending is said like -ich in most of Germany: SHMOOT-tsich." },
        { id: "de-u10l3-kaputt", type: "vocab", front: "kaputt", reading: "kaputt", meaning: "broken", example: { jp: "Die Uhr ist kaputt.", en: "The clock is broken." }, accept: ["broken", "out of order"], hint: "Stress at the end, ka-POOT. Also used of people meaning exhausted, where English would say shattered." },
        { id: "de-u10l3-teuer", type: "vocab", front: "teuer", reading: "teuer", meaning: "expensive", example: { jp: "Das Hotel ist teuer.", en: "The hotel is expensive." }, accept: ["expensive", "dear", "pricey"], hint: "TOY-er — the same eu as neu. It is the word you will want most often on a trip." },
        { id: "de-u10l3-billig", type: "vocab", front: "billig", reading: "billig", meaning: "cheap", example: { jp: "Der Kaffee ist billig.", en: "The coffee is cheap." }, accept: ["cheap", "inexpensive"], hint: "The opposite of teuer, and it carries the same faint insult English cheap does — a shop advertises günstig instead." },
      ],
    },
    {
      id: "de-u10l4",
      unit: 10,
      lesson: 4,
      title: "Wie ist die Person?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe what a person is like, not just what they look like.",
      items: [
        { id: "de-u10l4-nett", type: "vocab", front: "nett", reading: "nett", meaning: "nice / kind", example: { jp: "Meine Tante ist nett.", en: "My aunt is nice." }, accept: ["nice", "kind", "pleasant"], hint: "The everyday compliment for a person. German also has freundlich for this, built straight from der Freund (u4), which is why this unit teaches nett instead." },
        { id: "de-u10l4-ruhig", type: "vocab", front: "ruhig", reading: "ruhig", meaning: "quiet / calm", example: { jp: "Der Park ist ruhig.", en: "The park is quiet." }, accept: ["quiet", "calm", "peaceful"], hint: "ROO-ich. It works for a place and for a person, and it is the opposite of laut." },
        { id: "de-u10l4-lustig", type: "vocab", front: "lustig", reading: "lustig", meaning: "funny / cheerful", example: { jp: "Mein Bruder ist lustig.", en: "My brother is funny." }, accept: ["funny", "cheerful", "amusing"], hint: "Someone who makes you laugh, or a mood that is light. Not the English lusty — a false friend worth knowing." },
        { id: "de-u10l4-langweilig", type: "vocab", front: "langweilig", reading: "langweilig", meaning: "boring", example: { jp: "Das Museum ist langweilig.", en: "The museum is boring." }, accept: ["boring", "dull", "tedious"], hint: "Literally long-while-ish, from lang in lesson 1 — but it is a word of its own now, and knowing lang would never get you to boring." },
        { id: "de-u10l4-traurig", type: "vocab", front: "traurig", reading: "traurig", meaning: "sad", example: { jp: "Die Frau ist sehr traurig.", en: "The woman is very sad." }, accept: ["sad", "unhappy"], hint: "TROW-rich, with the au of blau. The -ig ending again, said -ich." },
        { id: "de-u10l4-gluecklich", type: "vocab", front: "glücklich", reading: "glucklich", meaning: "happy", example: { jp: "Der Vater ist glücklich.", en: "The father is happy." }, accept: ["happy", "fortunate", "glad"], hint: "From das Glück, luck — so it means both happy and lucky, and German does not always separate them. Type glücklich or glucklich." },
      ],
    },
  ],
};
