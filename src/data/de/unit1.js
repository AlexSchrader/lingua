// DE Unit 1 — Sounds and spelling (slot: sounds) — A1
// ─────────────────────────────────────────────────────────────────────────────
// First contact with German. Latin-script languages collapse Strand A to ONE
// unit (BUILD-BRIEF-language-blueprint.md §1): not letter drills, but the
// sound-to-spelling map an English reader gets wrong — ei vs ie, the three
// umlauts, ch/sch/z, w said as v, v said as f, and ß. Every rule is taught
// THROUGH a real word the learner keeps, never through a bare letter.
//
// AUTHORING CONVENTIONS FOR GERMAN (all de units — block 1 settled these):
//   - `front` is real orthography; `reading` is its ASCII fold (the contract
//     requires [a-z]+). normalizeReading() lowercases, drops spaces and
//     apostrophes, then strips combining diacritics via NFD — so umlauts fold on
//     their own ("die Tür" → "dietur", "schön" → "schon") and a learner may type
//     either form.
//   - ⚠️ ß DOES NOT FOLD. It is a base letter, not a diacritic, so NFD leaves it
//     standing and the contract rejects the reading as non-latin. normalizeReading
//     maps œ→oe and æ→ae but has NO ß rule. So every ß front gets its reading
//     WRITTEN BY HAND with ss: "die Straße" → "diestrasse", "groß" → "gross".
//     Six fronts in this block need it (die Straße, groß, heißen, der Großvater,
//     die Großmutter, die Großeltern). CONSEQUENCE FOR THE LEARNER, and it is a
//     real one: a learner who types the correct ß spelling is marked wrong,
//     because their input normalizes to "straße" and the key says "strasse".
//     ✅ FIXED 2026-09-03, with Alex's authorization: normalizeReading now maps
//     ß→ss alongside œ→oe and æ→ae, so "Straße" and "Strasse" both normalize to
//     "strasse" and a learner may type either. The hand-written ss readings below
//     stay correct and are still REQUIRED — the contract rejects a stored reading
//     containing ß, so keep writing them with ss. Regression-locked by
//     tests/unit/answer.test.mjs. scripts/check-lang-scope.mjs was fixed in the
//     same commit to compare through normalizeReading instead of its own NFD-only
//     fold, which had been demanding the exact reading validate:content rejects.
//   - `example.jp` holds the GERMAN sentence (the field name is historical —
//     "jp" = target language); `example.en` the English gloss.
//   - NOUNS ARE TAUGHT WITH THEIR ARTICLE (der/die/das) and CAPITALIZED, as
//     German writes them. Gender is learned as part of the word or it is not
//     learned at all. Plurals get die.
//   - DELIBERATE A1 SIMPLIFICATIONS (blocks 2 and 3 must know these):
//     (a) EVERYTHING IN u1–u7 IS NOMINATIVE. No accusative, no dative, no
//         two-way prepositions — the case system is u12–u14's and opening it
//         early would teach der/den/dem as if they were unrelated words. This is
//         why u7 "Die Stadt" teaches `dort`, `der Weg`, `nah` and NOT `neben`,
//         `hinter`, `vor`, `zwischen`: those are exactly the two-way prepositions
//         whose whole point is the case contrast.
//     (b) Verbs are headworded in the INFINITIVE (wohnen, kommen, essen), with
//         person-marked forms shown in examples and hints. `sein` is the one
//         exception: its forms are so irregular and so early that ist/bin/bist/
//         sind are taught as separate fronts (u1l1, u3l1, u3l3).
//     (c) No plural noun forms are taught as separate fronts at A1 — die Eltern,
//         die Geschwister, die Großeltern and die Nudeln are lexical plurals that
//         have no singular in normal use, not a plural rule being taught.
//   FREE: Anna, Thomas, Lena, Max, Berlin, München, Hamburg, Köln, Wien, Deutschland, Österreich, Europa | modern, elegant, interessant, fantastisch, perfekt, super, praktisch, international, laut, blond, direkt, ideal, normal, aktiv, privat, total, exakt, Musik, Foto, Sport, Film, Computer, Adresse, Telefon, Konzert, Theater, Zentrum, Universität, Auto | Bücher, Kinder, Minuten, Stunden, Tage, Türen, Äpfel, Häuser, Eier | 2000
//     ⚠️ TWO THINGS THE NEXT SEAT MUST COPY, both learned from a checker run:
//     (a) List cognates WITHOUT their article. check-lang-scope.mjs splits this
//         line on commas and compares WHOLE TOKENS, so "das Auto" never matches
//         the token "auto" in a sentence and the cognate is reported anyway.
//     (b) German plurals are NOT foldable by the checker. Spanish gets away with
//         it because its plural is a regular +s; German umlauts the stem
//         (Buch→Bücher, Apfel→Äpfel) or changes it outright, so every plural you
//         USE in an example must be declared here even though its singular is
//         taught. The nine above are the ones block 1 uses.
//     Verb conjugations are NOT declared here and are not meant to be: ich komme,
//     du kommst and er kommt are forms of a TAUGHT infinitive, not free words, and
//     the checker's hits on them are the documented morphology class RUNBOOK §4
//     tells you to expect. Block 1 leaves 27 such hits; that is the floor, not a
//     defect.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT1 = {
  id: "de-u1",
  lang: "de",
  title: "Laute und Buchstaben",
  order: 1,
  stage: "a1",
  lessons: [
    // Lesson 1: ei vs ie — the single biggest win in German spelling. Plus the
    // copula and the pointing word, so the learner can build a sentence at all.
    {
      id: "de-u1l1",
      unit: 1,
      lesson: 1,
      title: "ei und ie",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read ei and ie the German way — ei says \"eye\", ie says \"ee\" — and point at something and say what it is: Das ist Berlin.",
      items: [
        { id: "de-u1l1-ist", type: "vocab", front: "ist", reading: "ist", meaning: "is", example: { jp: "Berlin ist fantastisch.", en: "Berlin is fantastic." }, accept: ["is", "it is", "he is", "she is", "it's"], hint: "The link word: X ist Y. From sein, to be — its forms are so irregular that German learners meet them one at a time." },
        { id: "de-u1l1-das", type: "vocab", front: "das", reading: "das", meaning: "that / this", example: { jp: "Das ist Anna.", en: "That is Anna." }, accept: ["that", "this", "that is", "the"], hint: "Das ist… is how you point at anything, whatever its gender. It is also the article for neuter nouns — same word, two jobs." },
        { id: "de-u1l1-diezeit", type: "vocab", front: "die Zeit", reading: "diezeit", meaning: "time", example: { jp: "Die Zeit hier ist perfekt.", en: "The time here is perfect." }, accept: ["time", "the time"], hint: "ei is said like English \"eye\": TSYTE. The rule of thumb — ei and ie are pronounced as the SECOND letter names it." },
        { id: "de-u1l1-klein", type: "vocab", front: "klein", reading: "klein", meaning: "small", example: { jp: "Das Foto ist klein.", en: "The photo is small." }, accept: ["small", "little", "tiny"], hint: "Rhymes with English \"line\", not \"lean\". Same ei as in Zeit." },
        { id: "de-u1l1-hier", type: "vocab", front: "hier", reading: "hier", meaning: "here", example: { jp: "Hier ist das Auto.", en: "Here is the car." }, accept: ["here"], hint: "ie is a long \"ee\": HEER. Compare hier (here) with the ei of klein — swap the letters and you swap the sound." },
        { id: "de-u1l1-nein", type: "vocab", front: "nein", reading: "nein", meaning: "no", example: { jp: "Nein, das ist München.", en: "No, that is Munich." }, accept: ["no"], hint: "NINE, not \"nane\". Careful with its neighbour nein/ein — both ei, both said \"eye\"." },
      ],
    },
    // Lesson 2: the three umlauts. They fold away in `reading`, so the learner
    // may type either form — but the SOUND is a real distinction and the hints
    // carry it.
    {
      id: "de-u1l2",
      unit: 1,
      lesson: 2,
      title: "ä, ö und ü",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Recognise and say the three umlauts, and describe something as beautiful, late or tired.",
      items: [
        { id: "de-u1l2-dietur", type: "vocab", front: "die Tür", reading: "dietur", meaning: "door", example: { jp: "Die Tür ist klein.", en: "The door is small." }, accept: ["door", "the door"], hint: "ü is the trick one: say \"ee\" and round your lips as if for \"oo\". You may type tur or tür — both are accepted." },
        { id: "de-u1l2-schon", type: "vocab", front: "schön", reading: "schon", meaning: "beautiful", example: { jp: "Die Musik ist schön.", en: "The music is beautiful." }, accept: ["beautiful", "lovely", "nice"], hint: "ö is \"eh\" with rounded lips. Do not confuse schön (beautiful) with schon (already) — the two dots are the whole difference." },
        { id: "de-u1l2-spat", type: "vocab", front: "spät", reading: "spat", meaning: "late", example: { jp: "Anna ist spät.", en: "Anna is late." }, accept: ["late"], hint: "ä is close to the e of \"bed\", held long: SHPAYT. Note sp- at the start of a word is said \"shp\"." },
        { id: "de-u1l2-horen", type: "vocab", front: "hören", reading: "horen", meaning: "to hear", example: { jp: "Anna und Thomas hören die Musik.", en: "Anna and Thomas hear the music." }, accept: ["to hear", "to listen", "hear"], hint: "Same ö as schön. Verbs are given in the infinitive, which almost always ends in -en." },
        { id: "de-u1l2-diekuche", type: "vocab", front: "die Küche", reading: "diekuche", meaning: "kitchen", example: { jp: "Die Küche ist modern.", en: "The kitchen is modern." }, accept: ["kitchen", "the kitchen"], hint: "KÜ-che, with the ü of Tür. Its neighbour der Kuchen, without the dots, is cake." },
        { id: "de-u1l2-mude", type: "vocab", front: "müde", reading: "mude", meaning: "tired", example: { jp: "Anna ist müde.", en: "Anna is tired." }, accept: ["tired", "sleepy"], hint: "MÜ-de, two syllables, the final -e clearly said. German never swallows a final e the way English does." },
      ],
    },
    // Lesson 3: the consonant clusters an English reader guesses wrong.
    {
      id: "de-u1l3",
      unit: 1,
      lesson: 3,
      title: "ch, sch und z",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say the three clusters English has no match for — ch, sch and z — and talk about a book, a school and a newspaper.",
      items: [
        { id: "de-u1l3-dasbuch", type: "vocab", front: "das Buch", reading: "dasbuch", meaning: "book", example: { jp: "Das Buch ist interessant.", en: "The book is interesting." }, accept: ["book", "the book"], hint: "After a, o or u, ch is a throaty rasp at the back — like Scottish \"loch\". BOOKH, never BOOK." },
        { id: "de-u1l3-sprechen", type: "vocab", front: "sprechen", reading: "sprechen", meaning: "to speak", example: { jp: "Anna und Thomas sprechen zusammen.", en: "Anna and Thomas speak together." }, accept: ["to speak", "to talk", "speak"], hint: "The OTHER ch: after e or i it is soft, like a hissed h in \"huge\". Also note spr- is said \"shpr\"." },
        { id: "de-u1l3-dieschule", type: "vocab", front: "die Schule", reading: "dieschule", meaning: "school", example: { jp: "Die Schule ist groß.", en: "The school is big." }, accept: ["school", "the school"], hint: "sch is always the English \"sh\", one sound: SHOO-le." },
        { id: "de-u1l3-schnell", type: "vocab", front: "schnell", reading: "schnell", meaning: "fast", example: { jp: "Das Auto ist schnell.", en: "The car is fast." }, accept: ["fast", "quick", "quickly"], hint: "SHNELL. German is happy to start a word with shn-, shm-, shl- and shv- where English is not." },
        { id: "de-u1l3-zusammen", type: "vocab", front: "zusammen", reading: "zusammen", meaning: "together", example: { jp: "Hier sprechen Anna und Thomas zusammen.", en: "Here Anna and Thomas talk together." }, accept: ["together"], hint: "German z is always \"ts\", never English z: tsu-ZA-men. This one catches every English reader." },
        { id: "de-u1l3-diezeitung", type: "vocab", front: "die Zeitung", reading: "diezeitung", meaning: "newspaper", example: { jp: "Die Zeitung hier ist interessant.", en: "The newspaper here is interesting." }, accept: ["newspaper", "the newspaper", "paper"], hint: "Both rules at once: TSY-tung, with the z of zusammen and the ei of Zeit. Nouns ending -ung are always die." },
      ],
    },
    // Lesson 4: w/v, and ß — the letter that forces a hand-written reading.
    {
      id: "de-u1l4",
      unit: 1,
      lesson: 4,
      title: "w, v und ß",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say w as v, read the letter ß, say that several things ARE something, and ask what something is: Was ist das?",
      items: [
        { id: "de-u1l4-wohnen", type: "vocab", front: "wohnen", reading: "wohnen", meaning: "to live (somewhere)", example: { jp: "Anna und Thomas wohnen hier.", en: "Anna and Thomas live here." }, accept: ["to live", "to reside", "live"], hint: "German w is the English V: VOH-nen. The h after a vowel is silent and just makes it long." },
        { id: "de-u1l4-was", type: "vocab", front: "was", reading: "was", meaning: "what", example: { jp: "Was ist das?", en: "What is that?" }, accept: ["what"], hint: "VASS. Was ist das? is the most useful question you will learn this week." },
        { id: "de-u1l4-sind", type: "vocab", front: "sind", reading: "sind", meaning: "are", example: { jp: "Anna und Thomas sind hier.", en: "Anna and Thomas are here." }, accept: ["are", "they are", "we are"], hint: "The plural of ist. Two or more of anything takes sind: Anna und Thomas sind…" },
        { id: "de-u1l4-und", type: "vocab", front: "und", reading: "und", meaning: "and", example: { jp: "Das Buch und die Zeitung sind hier.", en: "The book and the newspaper are here." }, accept: ["and"], hint: "OONT — a d at the end of a German word hardens to t. The same happens to b (→p) and g (→k)." },
        { id: "de-u1l4-diestrasse", type: "vocab", front: "die Straße", reading: "diestrasse", meaning: "street", example: { jp: "Die Straße hier ist laut.", en: "The street here is loud." }, accept: ["street", "the street", "road"], hint: "ß is a double s after a LONG vowel: SHTRAH-se. Type it as ss — strasse — which is also how German writes it where ß is unavailable." },
        { id: "de-u1l4-gross", type: "vocab", front: "groß", reading: "gross", meaning: "big", example: { jp: "Die Schule ist groß und schön.", en: "The school is big and beautiful." }, accept: ["big", "large", "tall", "great"], hint: "GROHSS, long o. Same ß as Straße, and the same rule for typing it: gross." },
      ],
    },
  ],
};
