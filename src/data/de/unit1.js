// DE Unit 1 — Sounds and spelling (slot: sounds) — A1
// ─────────────────────────────────────────────────────────────────────────────
// First contact with German. Latin-script languages collapse Strand A to ONE
// unit (BUILD-BRIEF-language-blueprint.md §1): not letter drills, but the
// sound-to-spelling map an English reader gets wrong — ei vs ie, the three
// umlauts, ch/sch/z, w said as v, v said as f, and ß. Since the 2026-09-14 split
// the LETTERS come first, in a lesson of their own (l1); every rule is then taught
// again THROUGH a real word the learner keeps (l2–l5).
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
//         sind are taught as separate fronts (u1l2, u3l1, u3l3).
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
//   - GLYPH CARDS (added 2026-09-13, `type: "glyph"`) — AND THE 2026-09-14 SPLIT.
//     Unit 1's job is that the learner can PRONOUNCE German's letters before being
//     handed a word. When the glyph cards first landed they were placed at the head
//     of whichever lesson already owned each letter, and nobody costed the result:
//     every item is one teach + two checks, so l2 and l3 became 9 items = 27 screens
//     against ~18 for a normal lesson. (French's worst was 15 items / 45 screens —
//     that is the one Alex caught.) THE FIX, APPLIED HERE: THE LETTERS GET THEIR OWN
//     LESSON. l1 is now nothing but glyph cards; l2–l5 are the word cards, regrouped
//     by what they DO rather than by which letter they happened to carry — that
//     grouping lost its reason the moment the letters left. Nothing was deleted and
//     no front changed: 33 items before, 33 after, in 5 lessons of 8/6/6/7/6.
//     GERMAN'S SET: ei · ie — the digraph pair English reads backwards; ä · ö · ü —
//     the three umlauts; ch · sch · z — the clusters English has no match for; and
//     ß, which is the one exception to "l1 is the letters" and is argued below.
//     ⚠️ WHY ß IS NOT IN l1. It is a judgement call and it went the other way twice
//     before landing here, so the reasoning is on the record. Three things decided
//     it. (1) The other eight cards teach a SOUND — how do I say this, how do I type
//     it. ß's card teaches a DISTRIBUTION RULE: ß after a long vowel or a diphthong
//     (Straße, groß, heißen), ss after a short one (essen, Wasser). That rule is only
//     visible in words, and a glyph card has no example field to show it in, so the
//     card wants a word next to it. (2) Keeping it here holds every lesson inside the
//     lint's 5–8 band: l1 is 8, this lesson is 7. Putting ß in l1 makes l1 nine cards
//     = 27 screens, which leaves German's WORST lesson exactly as long as it was
//     before the split — the one number this whole change exists to move. (3) It is
//     taught immediately before die Straße, and groß meets it again in l5, so the
//     letter still precedes both words that carry it. The cost, stated plainly: l1's
//     canDo promises eight letters, not "all of German's special letters", because
//     ä ö ü ß is a set of four and only three of them are up there.
//     DELIBERATELY NOT GLYPH CARDS: sp and st, because they are only "shp"/"sht" at
//     the START of a word or stem (Fenster and Wespe keep a plain s), and a glyph
//     card has no example field in which to show that condition — the hints on spät
//     and sprechen teach it in the word, where the condition is visible. eu and äu,
//     because no word in unit 1 carries either, and a sound card with nothing in the
//     unit to anchor it is padding. w and v, because they are ordinary ASCII keys:
//     there is nothing to FIND, and their pronunciation trap is taught through
//     wohnen and was.
//     ⚠️ THE SPLIT CHANGED IDS. A lesson number is part of an item id, so every card
//     that changed lesson changed its id — which wipes that item's mastery (accepted
//     by Alex, once, pre-users) and would have orphaned its audio clip, because clip
//     filenames ARE item ids. 26 of this unit's 33 ids changed; those clips under
//     public/audio/de were renamed with their items in this same change and
//     src/data/audioManifest.js was regenerated, so nothing in this unit went silent.
//     ⚠️ Glyph hints name words the learner has not met yet (Zeit, Schule, Straße…).
//     That is deliberate — a hint is a preview, not a card — and hints are not in
//     scope for the lint's teach-before-use check, which works per UNIT, not per
//     lesson. Regrouping inside unit 1 therefore adds no scope warnings.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT1 = {
  id: "de-u1",
  lang: "de",
  title: "Laute und Buchstaben",
  order: 1,
  stage: "a1",
  lessons: [
    // Lesson 1: THE LETTERS, and nothing else. Eight cards, no words — the learner
    // meets the sounds German spells differently from English before a single
    // vocabulary item is handed to them. ß is the deliberate omission and it is in
    // l4, next to die Straße; the header says why. ⚠️ ä, ö and ü are graded
    // STRICTLY here: answer.js foldWouldEraseAnswer() fires on a single-character
    // front whose fold changes it, so on those three the learner must actually find
    // the key. Inside a whole word (die Tür) the fold still applies and tur passes.
    {
      id: "de-u1l1",
      unit: 1,
      lesson: 1,
      title: "ei, ie, ä, ö, ü, ch, sch, z",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say and type the eight letters and letter-pairs English reads wrong — ei, ie, ä, ö, ü, ch, sch and z — before you meet a single German word.",
      items: [
        { id: "de-u1l1-ei", type: "glyph", front: "ei", reading: "ei", meaning: null, example: null, hint: "Two letters, one sound, and the SECOND letter names it: ei is the English \"eye\". Zeit, klein, nein." },
        { id: "de-u1l1-ie", type: "glyph", front: "ie", reading: "ie", meaning: null, example: null, hint: "Same rule, other way round: ie is a long \"ee\". hier, die Zeit, die Tür. Swap the two letters and you swap the sound — that is the whole lesson." },
        { id: "de-u1l1-ae", type: "glyph", front: "ä", reading: "a", meaning: null, example: null, hint: "Not the a of Mann. ä is the e of English \"bed\", held long: spät = SHPAYT. To type it: long-press a on a phone keyboard — the same long-press finds ö on o and ü on u. (A German keyboard gives all three their own keys.)" },
        { id: "de-u1l1-oe", type: "glyph", front: "ö", reading: "o", meaning: null, example: null, hint: "Say \"eh\" as in \"bed\", then round your lips as if for \"oh\" and hold them there. schön, hören. English has no such sound — the rounding is the whole trick." },
        { id: "de-u1l1-ue", type: "glyph", front: "ü", reading: "u", meaning: null, example: null, hint: "Say \"ee\", then round your lips as if for \"oo\". Tür, müde, Küche. On this card the two dots ARE the answer, so type ü itself — inside a whole word like die Tür the app still accepts tur." },
        { id: "de-u1l1-ch", type: "glyph", front: "ch", reading: "ch", meaning: null, example: null, hint: "One spelling, two sounds, decided by the letter in front of it: after a, o or u it rasps at the back of the throat (Buch, auch); after e or i it hisses at the front, like the h of English \"huge\" (sprechen, ich). Never the ch of \"chair\"." },
        { id: "de-u1l1-sch", type: "glyph", front: "sch", reading: "sch", meaning: null, example: null, hint: "Three letters, one sound: the English \"sh\". Schule, schnell, schön. Put an s in front of p or t at the start of a word and you get the same sound — spät is SHPAYT." },
        { id: "de-u1l1-z", type: "glyph", front: "z", reading: "z", meaning: null, example: null, hint: "German z is always \"ts\", never the English z: zusammen = tsu-ZA-men, Zeit = TSYTE. The buzzing English z sound is what German spells with a plain s." },
      ],
    },
    // Lesson 2: the little words that make a sentence possible at all. ist and sind
    // (the two forms of sein the learner needs first), das to point with, hier to
    // place things, was to ask with, nein to answer with. Nothing here is a noun,
    // and every later lesson's examples lean on this set.
    {
      id: "de-u1l2",
      unit: 1,
      lesson: 2,
      title: "ist, das, hier — und was?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Point at something and say what it is (Das ist Berlin), say where it is, ask Was ist das?, answer Nein — and switch from ist to sind for two or more.",
      items: [
        { id: "de-u1l2-ist", type: "vocab", front: "ist", reading: "ist", meaning: "is", example: { jp: "Berlin ist fantastisch.", en: "Berlin is fantastic." }, accept: ["is", "it is", "he is", "she is", "it's"], hint: "The link word: X ist Y. From sein, to be — its forms are so irregular that German learners meet them one at a time." },
        { id: "de-u1l2-das", type: "vocab", front: "das", reading: "das", meaning: "that / this", example: { jp: "Das ist Anna.", en: "That is Anna." }, accept: ["that", "this", "that is", "the"], hint: "Das ist… is how you point at anything, whatever its gender. It is also the article for neuter nouns — same word, two jobs." },
        { id: "de-u1l2-hier", type: "vocab", front: "hier", reading: "hier", meaning: "here", example: { jp: "Hier ist das Auto.", en: "Here is the car." }, accept: ["here"], hint: "ie is a long \"ee\": HEER. Compare hier (here) with the ei of klein — swap the letters and you swap the sound." },
        { id: "de-u1l2-was", type: "vocab", front: "was", reading: "was", meaning: "what", example: { jp: "Was ist das?", en: "What is that?" }, accept: ["what"], hint: "VASS. Was ist das? is the most useful question you will learn this week." },
        { id: "de-u1l2-nein", type: "vocab", front: "nein", reading: "nein", meaning: "no", example: { jp: "Nein, das ist München.", en: "No, that is Munich." }, accept: ["no"], hint: "NINE, not \"nane\". Careful with its neighbour nein/ein — both ei, both said \"eye\"." },
        { id: "de-u1l2-sind", type: "vocab", front: "sind", reading: "sind", meaning: "are", example: { jp: "Anna und Thomas sind hier.", en: "Anna and Thomas are here." }, accept: ["are", "they are", "we are"], hint: "The plural of ist. Two or more of anything takes sind: Anna und Thomas sind…" },
      ],
    },
    // Lesson 3: five everyday nouns, each carrying its article — gender is learned
    // as part of the word or it is not learned at all — plus und, introduced
    // immediately AFTER the two nouns its own example joins ("Das Buch und die
    // Zeitung sind hier"), so the joiner arrives with something to join.
    {
      id: "de-u1l3",
      unit: 1,
      lesson: 3,
      title: "Dinge und Zeit",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name five everyday things with the right article — das Buch, die Zeitung, die Tür, die Küche, die Zeit — and join two of them with und.",
      items: [
        { id: "de-u1l3-dasbuch", type: "vocab", front: "das Buch", reading: "dasbuch", meaning: "book", example: { jp: "Das Buch ist interessant.", en: "The book is interesting." }, accept: ["book", "the book"], hint: "After a, o or u, ch is a throaty rasp at the back — like Scottish \"loch\". BOOKH, never BOOK." },
        { id: "de-u1l3-diezeitung", type: "vocab", front: "die Zeitung", reading: "diezeitung", meaning: "newspaper", example: { jp: "Die Zeitung hier ist interessant.", en: "The newspaper here is interesting." }, accept: ["newspaper", "the newspaper", "paper"], hint: "Both rules at once: TSY-tung, with the z of zusammen and the ei of Zeit. Nouns ending -ung are always die." },
        { id: "de-u1l3-und", type: "vocab", front: "und", reading: "und", meaning: "and", example: { jp: "Das Buch und die Zeitung sind hier.", en: "The book and the newspaper are here." }, accept: ["and"], hint: "OONT — a d at the end of a German word hardens to t. The same happens to b (→p) and g (→k)." },
        { id: "de-u1l3-dietur", type: "vocab", front: "die Tür", reading: "dietur", meaning: "door", example: { jp: "Die Tür ist klein.", en: "The door is small." }, accept: ["door", "the door"], hint: "ü is the trick one: say \"ee\" and round your lips as if for \"oo\". You may type tur or tür — both are accepted." },
        { id: "de-u1l3-diekuche", type: "vocab", front: "die Küche", reading: "diekuche", meaning: "kitchen", example: { jp: "Die Küche ist modern.", en: "The kitchen is modern." }, accept: ["kitchen", "the kitchen"], hint: "KÜ-che, with the ü of Tür. Its neighbour der Kuchen, without the dots, is cake." },
        { id: "de-u1l3-diezeit", type: "vocab", front: "die Zeit", reading: "diezeit", meaning: "time", example: { jp: "Die Zeit hier ist perfekt.", en: "The time here is perfect." }, accept: ["time", "the time"], hint: "ei is said like English \"eye\": TSYTE. The rule of thumb — ei and ie are pronounced as the SECOND letter names it." },
      ],
    },
    // Lesson 4: the two public places, what people do in them — and ß, the one
    // letter that is NOT in l1. It leads the lesson and die Straße follows it
    // immediately, because ß's card teaches WHEN German writes ß rather than ss,
    // and that rule is only visible in a word. groß meets it again in l5.
    // ⚠️ ß's reading is hand-written "ss" — the contract rejects a reading
    // containing ß (see header) — and unlike the word cards this one demands the
    // character itself: foldWouldEraseAnswer() fires on it, so typing "ss" is wrong
    // HERE while "Strasse" still passes for die Straße. That is the point of the
    // card. sprechen keeps its original position ahead of zusammen — their examples
    // reference each other, and this is the order that was already playtested.
    {
      id: "de-u1l4",
      unit: 1,
      lesson: 4,
      title: "Die Straße, die Schule — und das ß",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read and type the letter ß, name the street and the school, and say what people do there — wohnen, sprechen, hören, zusammen.",
      items: [
        { id: "de-u1l4-eszett", type: "glyph", front: "ß", reading: "ss", meaning: null, example: null, hint: "The sharp s — one sound, a hissed s, never the buzz of English z. When German writes it: ß after a LONG vowel or a diphthong (Straße, groß, heißen), ss after a short one (essen, Wasser). It has no capital, and Switzerland writes ss everywhere. On this card type the letter itself — long-press s on a phone keyboard." },
        { id: "de-u1l4-diestrasse", type: "vocab", front: "die Straße", reading: "diestrasse", meaning: "street", example: { jp: "Die Straße hier ist laut.", en: "The street here is loud." }, accept: ["street", "the street", "road"], hint: "ß is a double s after a LONG vowel: SHTRAH-se. Type it as ss — strasse — which is also how German writes it where ß is unavailable." },
        { id: "de-u1l4-dieschule", type: "vocab", front: "die Schule", reading: "dieschule", meaning: "school", example: { jp: "Die Schule ist groß.", en: "The school is big." }, accept: ["school", "the school"], hint: "sch is always the English \"sh\", one sound: SHOO-le." },
        { id: "de-u1l4-wohnen", type: "vocab", front: "wohnen", reading: "wohnen", meaning: "to live (somewhere)", example: { jp: "Anna und Thomas wohnen hier.", en: "Anna and Thomas live here." }, accept: ["to live", "to reside", "live"], hint: "German w is the English V: VOH-nen. The h after a vowel is silent and just makes it long." },
        { id: "de-u1l4-sprechen", type: "vocab", front: "sprechen", reading: "sprechen", meaning: "to speak", example: { jp: "Anna und Thomas sprechen zusammen.", en: "Anna and Thomas speak together." }, accept: ["to speak", "to talk", "speak"], hint: "The OTHER ch: after e or i it is soft, like a hissed h in \"huge\". Also note spr- is said \"shpr\"." },
        { id: "de-u1l4-zusammen", type: "vocab", front: "zusammen", reading: "zusammen", meaning: "together", example: { jp: "Hier sprechen Anna und Thomas zusammen.", en: "Here Anna and Thomas talk together." }, accept: ["together"], hint: "German z is always \"ts\", never English z: tsu-ZA-men. This one catches every English reader." },
        { id: "de-u1l4-horen", type: "vocab", front: "hören", reading: "horen", meaning: "to hear", example: { jp: "Anna und Thomas hören die Musik.", en: "Anna and Thomas hear the music." }, accept: ["to hear", "to listen", "hear"], hint: "Same ö as schön. Verbs are given in the infinitive, which almost always ends in -en." },
      ],
    },
    // Lesson 5: six adjectives, and the unit closes with the learner able to
    // describe anything they have just been taught to name. schön sits before groß
    // because groß's example ("Die Schule ist groß und schön") uses it.
    {
      id: "de-u1l5",
      unit: 1,
      lesson: 5,
      title: "Groß, klein, schnell, müde",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe anything with six everyday adjectives — klein and groß, schön, schnell, spät and müde: Die Schule ist groß und schön.",
      items: [
        { id: "de-u1l5-klein", type: "vocab", front: "klein", reading: "klein", meaning: "small", example: { jp: "Das Foto ist klein.", en: "The photo is small." }, accept: ["small", "little", "tiny"], hint: "Rhymes with English \"line\", not \"lean\". Same ei as in Zeit." },
        { id: "de-u1l5-schon", type: "vocab", front: "schön", reading: "schon", meaning: "beautiful", example: { jp: "Die Musik ist schön.", en: "The music is beautiful." }, accept: ["beautiful", "lovely", "nice"], hint: "ö is \"eh\" with rounded lips. Do not confuse schön (beautiful) with schon (already) — the two dots are the whole difference." },
        { id: "de-u1l5-gross", type: "vocab", front: "groß", reading: "gross", meaning: "big", example: { jp: "Die Schule ist groß und schön.", en: "The school is big and beautiful." }, accept: ["big", "large", "tall", "great"], hint: "GROHSS, long o. Same ß as Straße, and the same rule for typing it: gross." },
        { id: "de-u1l5-schnell", type: "vocab", front: "schnell", reading: "schnell", meaning: "fast", example: { jp: "Das Auto ist schnell.", en: "The car is fast." }, accept: ["fast", "quick", "quickly"], hint: "SHNELL. German is happy to start a word with shn-, shm-, shl- and shv- where English is not." },
        { id: "de-u1l5-spat", type: "vocab", front: "spät", reading: "spat", meaning: "late", example: { jp: "Anna ist spät.", en: "Anna is late." }, accept: ["late"], hint: "ä is close to the e of \"bed\", held long: SHPAYT. Note sp- at the start of a word is said \"shp\"." },
        { id: "de-u1l5-mude", type: "vocab", front: "müde", reading: "mude", meaning: "tired", example: { jp: "Anna ist müde.", en: "Anna is tired." }, accept: ["tired", "sleepy"], hint: "MÜ-de, two syllables, the final -e clearly said. German never swallows a final e the way English does." },
      ],
    },
  ],
};
