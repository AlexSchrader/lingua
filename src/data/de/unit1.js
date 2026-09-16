// DE Unit 1 — Sounds and spelling (slot: sounds) — A1
// ─────────────────────────────────────────────────────────────────────────────
// First contact with German. Latin-script languages collapse Strand A to ONE
// unit (BUILD-BRIEF-language-blueprint.md §1): not letter drills, but the
// sound-to-spelling map an English reader gets wrong — ei vs ie, the three
// umlauts, ch/sch/z, w said as v, v said as f, and ß.
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
//         sind are taught as separate fronts (u1l1, u1l2, u3l1, u3l3).
//     (c) No plural noun forms are taught as separate fronts at A1 — die Eltern,
//         die Geschwister, die Großeltern and die Nudeln are lexical plurals that
//         have no singular in normal use, not a plural rule being taught.
//   FREE: Anna, Thomas, Lena, Max, Berlin, München, Hamburg, Köln, Wien, Deutschland, Österreich, Europa | modern, elegant, interessant, fantastisch, perfekt, super, praktisch, international, laut, blond, direkt, ideal, normal, aktiv, privat, total, exakt, Musik, Foto, Sport, Film, Filme, Computer, Adresse, Telefon, Konzert, Theater, Zentrum, Universität, Auto | Bücher, Kinder, Minuten, Stunden, Tage, Türen, Äpfel, Häuser, Eier | 2000
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
//
//   - ⚠️⚠️ THE SHAPE OF THIS UNIT — READ THIS BEFORE MOVING ANY CARD.
//     ⚠️ THE 2026-09-14 "LETTERS FIRST, IN THEIR OWN LESSON" SPLIT IS REVERSED, and
//     the paragraph that used to sit here argued FOR it. Do not author from that
//     argument; it is recorded below only so nobody re-derives it a third time.
//     What it said: glyph cards had been placed at the head of whichever lesson
//     already owned each letter, which pushed l2 and l3 to 9 items / 27 screens,
//     so the fix was to give the letters a lesson of their own (l1 = 8 glyphs, no
//     words) and run four word-only lessons after it.
//     ⚠️ THAT FIX TRADED ONE DEFECT FOR A WORSE ONE, and the cost nobody costed is
//     this: a learner's FIRST SESSION ENDED HAVING LEARNED NO WORDS AT ALL. Eight
//     bare letters, then goodbye. BUILD-BRIEF-language-blueprint.md:15 is explicit
//     that this is not the model — "each unit teaches a chunk of script and
//     immediately uses it for real words… never 46 characters in a row. The learner
//     is reading actual words in unit 1." ⚠️ AND CITE JAPANESE PRECISELY — an earlier
//     draft of this paragraph said "ja has ZERO script-only lessons", which is FALSE and
//     was caught by the fact-checker: ja has 48 of them. What is true, measured, is that
//     none of them is in a KANA unit — ja u1–u6 run ~5 kana + 5–6 words in EVERY lesson
//     (u1 is 25 kana / 29 words) and have zero script-only lessons between them. The 48
//     sit in the kanji and yōon units (u11, u13–18, u31–42), hundreds of cards later, to
//     a learner who already reads — which is the pattern the blueprint calls "woven
//     between vocab units", not the pattern for unit 1.
//     French was rebuilt the right way first (src/data/fr/unit1.js, five lessons, every
//     one of them letters-then-the-words-that-use-them); German and Norwegian followed on
//     2026-09-14, branch content/de-no-u1-align, and Spanish and Portuguese the same
//     morning on main (03c14bb6). No all-glyph lesson survives outside ja.
//     ✅ THE SHAPE NOW: EVERY LESSON IS A SOUND FAMILY — its letters FIRST, then the
//     words of this unit that carry them. The learner meets a letter one CARD before
//     the word that needs it, never one LESSON before, and finishes lesson 1 able to
//     say "Was ist das? Das ist hier. Nein."
//         l1  ei · ie          + ist, das, nein, hier, was          (7 items)
//         l2  z · ch           + die Zeit, die Zeitung, das Buch, und, sind   (7)
//         l3  sch · ß          + die Straße, die Schule, schnell, sprechen, zusammen  (7)
//         l4  ü · ö            + die Tür, die Küche, müde, hören, wohnen      (7)
//         l5  ä                + spät, klein, schön, groß                     (5)
//     Nothing was deleted and no front changed: 33 items before, 33 after, and every
//     lesson sits inside the lint's 5–8 band (src/data/lint.js:444-447, which counts
//     glyph cards too). 21 screens a lesson, 15 for l5 — against 24 for the old
//     glyph lesson and 27 for the shape before that.
//     ✅ THE INVARIANT WORTH PROTECTING: **NO WORD IN THIS UNIT PRECEDES ITS OWN
//     LETTER.** Checked card by card — klein's ei is l1, zusammen's z is l2, groß's ß
//     and schön's sch are l3, schön's ö and müde's ü are l4, spät's ä is its own
//     lesson. Move a card and you have to re-check this by hand; there is no lint rule
//     for it. ⚠️ THE INVARIANT IS ABOUT CARDS, NOT HINTS, and an earlier draft here
//     overclaimed ("every reference a hint makes to a letter points backward"). It does
//     not: the ü card's KEYBOARD note names all three umlauts together — "the same
//     long-press finds ö on o and ä on a" — and ä is l5. That is deliberate. One
//     long-press gesture finds all three, and splitting the instruction across three
//     lessons to satisfy a rule about cards would make it worse, not better.
//     ⚠️ WHY ß IS IN l3 — and the old argument for keeping it out of the glyph set is
//     now MOOT, not merely overruled. It used to be excluded from the all-glyph l1 on
//     the grounds that its card teaches a DISTRIBUTION RULE (ß after a long vowel or a
//     diphthong — Straße, groß, heißen; ss after a short one — essen, Wasser) which is
//     only visible in words, and a glyph card has no example field to show it in. That
//     objection was an objection to the all-glyph lesson, and the all-glyph lesson is
//     gone: ß now sits in l3 one card ahead of die Straße, which is exactly the word
//     that makes the rule visible, and groß meets it again in l5. It is an ordinary
//     member of the set of nine, with no exception to explain.
//     GERMAN'S SET, NINE CARDS: ei · ie (the digraph pair English reads backwards);
//     z · ch (the two consonants English has no match for); sch · ß; ü · ö · ä.
//     DELIBERATELY NOT GLYPH CARDS: sp and st, because they are only "shp"/"sht" at
//     the START of a word or stem (Fenster and Wespe keep a plain s), and a glyph
//     card has no example field in which to show that condition — the hints on spät,
//     sprechen and die Straße teach it in the word, where the condition is visible,
//     and the sch card names it. eu and äu, because no word in unit 1 carries either,
//     and a sound card with nothing in the unit to anchor it is padding. w and v,
//     because they are ordinary ASCII keys: there is nothing to FIND, and their
//     pronunciation trap is taught through was, wohnen and die Zeitung.
//     ⚠️ ä, ö and ü ARE GRADED STRICTLY on their own cards: answer.js
//     foldWouldEraseAnswer() fires on a single-character front whose fold changes it,
//     so on those three the learner must actually find the key. Inside a whole word
//     (die Tür) the fold still applies and "tur" passes. Same for ß: on its card only
//     ß passes, while "Strasse" is still accepted for die Straße.
//     ⚠️ THE REGROUPING CHANGED IDS. A lesson number is part of an item id, so every
//     card that changed lesson changed its id — which wipes that item's mastery
//     (accepted by Alex, once, pre-users) and would have orphaned its audio clip,
//     because clip filenames ARE item ids. 24 of this unit's 33 ids changed; those
//     clips under public/audio/de were `git mv`-ed with their items in this same
//     change and src/data/audioManifest.js was regenerated, so nothing here went
//     silent. All 33 ids resolve to a clip, before and after. DO NOT REGROUP AGAIN —
//     the mastery cost has been paid once and it is not free a second time.
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
    // Lesson 1: ei and ie — the one pair every English reader gets backwards —
    // and the five little words that make a sentence possible at all. The learner
    // meets the two letters, then ist and das so a sentence exists to put them in,
    // then nein and hier which carry them, then was — and walks out of their FIRST
    // lesson able to point at something and say what it is. Nothing here is a noun;
    // every later lesson leans on this set.
    // ⚠️ nein SITS BEFORE hier ON PURPOSE. hier's hint compares it with "the ei of
    // nein", so nein has to be the card behind it, not the card after it. That was
    // wrong in the first draft of this regrouping and is the kind of thing only
    // reading the items in order catches — no check enforces it.
    {
      id: "de-u1l1",
      unit: 1,
      lesson: 1,
      title: "Ei und ie — was ist das?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read ei and ie the way German does — nein rhymes with \"nine\", hier with \"here\" — then point at something and say what it is: Das ist Berlin. Was ist das? Nein.",
      items: [
        { id: "de-u1l1-ei", type: "glyph", front: "ei", reading: "ei", meaning: null, example: null, hint: "Two letters, one sound, and the SECOND letter names it: ei is the English \"eye\". Zeit, klein, nein." },
        { id: "de-u1l1-ie", type: "glyph", front: "ie", reading: "ie", meaning: null, example: null, hint: "Same rule, other way round: ie is a long \"ee\". hier, die Zeit, die Tür. Swap the two letters and you swap the sound — that is the whole lesson." },
        { id: "de-u1l1-ist", type: "vocab", front: "ist", reading: "ist", meaning: "is", example: { jp: "Berlin ist fantastisch.", en: "Berlin is fantastic." }, drill: { jp: "Max ist müde und Anna ist spät", en: "Max is tired and Anna is late" }, accept: ["is", "it is", "he is", "she is", "it's"], hint: "The link word: X ist Y. From sein, to be — its forms are so irregular that German learners meet them one at a time." },
        { id: "de-u1l1-das", type: "vocab", front: "das", reading: "das", meaning: "that / this", example: { jp: "Das ist Anna.", en: "That is Anna." }, drill: { jp: "Das ist die Schule", en: "That is the school" }, accept: ["that", "this", "that is", "the"], hint: "Das ist… is how you point at anything, whatever its gender. It is also the article for neuter nouns — same word, two jobs." },
        { id: "de-u1l1-nein", type: "vocab", front: "nein", reading: "nein", meaning: "no", example: { jp: "Nein, das ist München.", en: "No, that is Munich." }, drill: { jp: "Nein das Buch ist klein", en: "No the book is small" }, accept: ["no"], hint: "NINE, not \"nane\". Careful with its neighbour nein/ein — both ei, both said \"eye\"." },
        { id: "de-u1l1-hier", type: "vocab", front: "hier", reading: "hier", meaning: "here", example: { jp: "Hier ist das Auto.", en: "Here is the car." }, drill: { jp: "Die Straße ist hier", en: "The street is here" }, accept: ["here"], hint: "ie is a long \"ee\": HEER. Compare hier (here) with the ei of nein — swap the letters and you swap the sound." },
        { id: "de-u1l1-was", type: "vocab", front: "was", reading: "was", meaning: "what", example: { jp: "Was ist das?", en: "What is that?" }, drill: { jp: "Was hören Anna und Thomas", en: "What are Anna and Thomas listening to" }, accept: ["what"], hint: "VASS — German w is the English v, every time. Was ist das? is the most useful question you will learn this week." },
      ],
    },
    // Lesson 2: z and ch, the two consonants English has no match for, and the
    // three nouns that carry them — die Zeit and die Zeitung for z (and for ei
    // again), das Buch for the back-of-the-throat ch. und arrives immediately
    // after the two things its own example joins ("Das Buch und die Zeitung sind
    // hier"), and sind closes the lesson because that sentence needs it.
    {
      id: "de-u1l2",
      unit: 1,
      lesson: 2,
      title: "Z und ch — die Zeit und das Buch",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say z as \"ts\" and hear both sounds of ch, then name three everyday things with the right article and join two of them: Das Buch und die Zeitung sind hier.",
      items: [
        { id: "de-u1l2-z", type: "glyph", front: "z", reading: "z", meaning: null, example: null, hint: "German z is always \"ts\", never the English z: zusammen = tsu-ZA-men, Zeit = TSYTE. The buzzing English z sound is what German spells with a plain s." },
        { id: "de-u1l2-ch", type: "glyph", front: "ch", reading: "ch", meaning: null, example: null, hint: "One spelling, two sounds, decided by the letter in front of it: after a, o or u it rasps at the back of the throat (Buch, auch); after e or i it hisses at the front, like the h of English \"huge\" (sprechen, ich). Never the ch of \"chair\"." },
        { id: "de-u1l2-diezeit", type: "vocab", front: "die Zeit", reading: "diezeit", meaning: "time", example: { jp: "Die Zeit hier ist perfekt.", en: "The time here is perfect." }, drill: { jp: "Die Zeit ist schön", en: "Time is beautiful" }, accept: ["time", "the time"], hint: "ei is said like English \"eye\": TSYTE. The rule of thumb — ei and ie are pronounced as the SECOND letter names it." },
        { id: "de-u1l2-diezeitung", type: "vocab", front: "die Zeitung", reading: "diezeitung", meaning: "newspaper", example: { jp: "Die Zeitung hier ist interessant.", en: "The newspaper here is interesting." }, drill: { jp: "Die Zeitung ist klein", en: "The newspaper is small" }, accept: ["newspaper", "the newspaper", "paper"], hint: "Both rules at once: TSY-tung, with the z of die Zeit and the ei of nein. Nouns ending -ung are always die." },
        { id: "de-u1l2-dasbuch", type: "vocab", front: "das Buch", reading: "dasbuch", meaning: "book", example: { jp: "Das Buch ist interessant.", en: "The book is interesting." }, drill: { jp: "Das Buch ist groß und schön", en: "The book is big and beautiful" }, accept: ["book", "the book"], hint: "After a, o or u, ch is a throaty rasp at the back — like Scottish \"loch\". BOOKH, never BOOK." },
        { id: "de-u1l2-und", type: "vocab", front: "und", reading: "und", meaning: "and", example: { jp: "Das Buch und die Zeitung sind hier.", en: "The book and the newspaper are here." }, drill: { jp: "Anna und Lena sind müde", en: "Anna and Lena are tired" }, accept: ["and"], hint: "OONT — a d at the end of a German word hardens to t. The same happens to b (→p) and g (→k)." },
        { id: "de-u1l2-sind", type: "vocab", front: "sind", reading: "sind", meaning: "are", example: { jp: "Anna und Thomas sind hier.", en: "Anna and Thomas are here." }, drill: { jp: "Die Bücher sind hier", en: "The books are here" }, accept: ["are", "they are", "we are"], hint: "The plural of ist. Two or more of anything takes sind: Anna und Thomas sind…" },
      ],
    },
    // Lesson 3: the sch-sound in all three of its spellings — sch itself, and the
    // sp-/st- that turn into it at the start of a word — plus ß, which leads
    // straight into die Straße because its card teaches WHEN German writes ß rather
    // than ss, and that rule is only visible in a word. die Straße carries both at
    // once (SHTRAH-se), which is why it is the first word card here. groß meets ß
    // again in l5. ⚠️ ß's reading is hand-written "ss" — the contract rejects a
    // reading containing ß (see header) — and unlike the word cards its own card
    // demands the character itself: foldWouldEraseAnswer() fires on it, so typing
    // "ss" is wrong HERE while "Strasse" still passes for die Straße. That is the
    // point of the card. sprechen keeps its position ahead of zusammen — their
    // examples reference each other, and this is the order that was playtested.
    {
      id: "de-u1l3",
      unit: 1,
      lesson: 3,
      title: "Sch, sp, st — und das ß",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Hear the English \"sh\" in all the places German hides it — sch, and sp- and st- at the start of a word — type the letter ß, and say what happens on the street and at school.",
      items: [
        { id: "de-u1l3-sch", type: "glyph", front: "sch", reading: "sch", meaning: null, example: null, hint: "Three letters, one sound: the English \"sh\". Schule, schnell, schön. Put an s in front of p or t at the start of a word and you get the same sound — spät is SHPAYT and Straße is SHTRAH-se." },
        { id: "de-u1l3-eszett", type: "glyph", front: "ß", reading: "ss", meaning: null, example: null, hint: "The sharp s — one sound, a hissed s, never the buzz of English z. When German writes it: ß after a LONG vowel or a diphthong (Straße, groß, heißen), ss after a short one (essen, Wasser). It has no capital, and Switzerland writes ss everywhere. On this card type ß itself, not ss. \nPhone: hold S, then tap ß\nGerman keyboard: the key right of 0" },
        { id: "de-u1l3-diestrasse", type: "vocab", front: "die Straße", reading: "diestrasse", meaning: "street", example: { jp: "Die Straße hier ist laut.", en: "The street here is loud." }, drill: { jp: "Die Straße ist klein", en: "The street is small" }, accept: ["street", "the street", "road"], hint: "Both of this lesson's rules in one word: st- at the start is \"sht\", and ß is a double s after a LONG vowel — SHTRAH-se. Type it as ss — strasse — which is also how German writes it where ß is unavailable." },
        { id: "de-u1l3-dieschule", type: "vocab", front: "die Schule", reading: "dieschule", meaning: "school", example: { jp: "Die Schule ist groß.", en: "The school is big." }, drill: { jp: "Die Schule hier ist schön", en: "The school here is beautiful" }, accept: ["school", "the school"], hint: "sch is always the English \"sh\", one sound: SHOO-le." },
        { id: "de-u1l3-schnell", type: "vocab", front: "schnell", reading: "schnell", meaning: "fast", example: { jp: "Das Auto ist schnell.", en: "The car is fast." }, drill: { jp: "Anna und Thomas sprechen schnell", en: "Anna and Thomas speak fast" }, accept: ["fast", "quick", "quickly"], hint: "SHNELL. German is happy to start a word with shn-, shm-, shl- and shv- where English is not." },
        { id: "de-u1l3-sprechen", type: "vocab", front: "sprechen", reading: "sprechen", meaning: "to speak", example: { jp: "Anna und Thomas sprechen zusammen.", en: "Anna and Thomas speak together." }, drill: { jp: "Die Kinder sprechen laut", en: "The children speak loudly" }, accept: ["to speak", "to talk", "speak"], hint: "spr- is said \"shpr\", the same sh you have just met. And this is the OTHER ch from the last lesson: after e or i it is soft, like a hissed h in \"huge\"." },
        { id: "de-u1l3-zusammen", type: "vocab", front: "zusammen", reading: "zusammen", meaning: "together", example: { jp: "Hier sprechen Anna und Thomas zusammen.", en: "Here Anna and Thomas talk together." }, drill: { jp: "Anna und Lena hören zusammen Musik", en: "Anna and Lena listen to music together" }, accept: ["together"], hint: "German z is always \"ts\", never English z: tsu-ZA-men. This one catches every English reader." },
      ],
    },
    // Lesson 4: ü and ö, the two umlauts that have no English sound at all, and
    // the four words that carry them — die Tür, die Küche and müde for ü, hören
    // for ö. wohnen closes the lesson: it has no umlaut, but it belongs to the
    // same little world (a door, a kitchen, living somewhere, hearing the music)
    // and it is where the "German w is the English v" rule gets its second word
    // after was.
    {
      id: "de-u1l4",
      unit: 1,
      lesson: 4,
      title: "Ü und ö — die Tür und die Küche",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Make the two sounds English does not have — ü and ö — and use them: die Tür, die Küche, müde, hören. Then say where somebody lives with wohnen.",
      items: [
        { id: "de-u1l4-ue", type: "glyph", front: "ü", reading: "u", meaning: null, example: null, hint: "Say \"ee\", then round your lips as if for \"oo\". Tür, müde, Küche. On this card the two dots ARE the answer, so type ü itself — inside a whole word like die Tür the app still accepts tur. The same long-press finds ö on o and ä on a. \nPhone: hold U, then tap ü\nGerman keyboard: its own key, right of P" },
        { id: "de-u1l4-oe", type: "glyph", front: "ö", reading: "o", meaning: null, example: null, hint: "Say \"eh\" as in \"bed\", then round your lips as if for \"oh\" and hold them there. schön, hören. English has no such sound — the rounding is the whole trick." },
        { id: "de-u1l4-dietur", type: "vocab", front: "die Tür", reading: "dietur", meaning: "door", example: { jp: "Die Tür ist klein.", en: "The door is small." }, drill: { jp: "Die Tür ist groß und schön", en: "The door is big and beautiful" }, accept: ["door", "the door"], hint: "ü is the trick one: say \"ee\" and round your lips as if for \"oo\". You may type tur or tür — both are accepted." },
        { id: "de-u1l4-diekuche", type: "vocab", front: "die Küche", reading: "diekuche", meaning: "kitchen", example: { jp: "Die Küche ist modern.", en: "The kitchen is modern." }, drill: { jp: "Die Küche ist klein und schön", en: "The kitchen is small and beautiful" }, accept: ["kitchen", "the kitchen"], hint: "KÜ-che, with the ü of Tür. Its neighbour der Kuchen, without the dots, is cake." },
        { id: "de-u1l4-mude", type: "vocab", front: "müde", reading: "mude", meaning: "tired", example: { jp: "Anna ist müde.", en: "Anna is tired." }, drill: { jp: "Lena und Max sind müde", en: "Lena and Max are tired" }, accept: ["tired", "sleepy"], hint: "MÜ-de, two syllables, the final -e clearly said. German never swallows a final e the way English does." },
        { id: "de-u1l4-horen", type: "vocab", front: "hören", reading: "horen", meaning: "to hear", example: { jp: "Anna und Thomas hören die Musik.", en: "Anna and Thomas hear the music." }, drill: { jp: "Die Kinder hören Musik", en: "The children listen to music" }, accept: ["to hear", "to listen", "hear"], hint: "The ö from the letter card at the top of this lesson: \"eh\" with rounded lips. Verbs are given in the infinitive, which almost always ends in -en." },
        { id: "de-u1l4-wohnen", type: "vocab", front: "wohnen", reading: "wohnen", meaning: "to live (somewhere)", example: { jp: "Anna und Thomas wohnen hier.", en: "Anna and Thomas live here." }, drill: { jp: "Die Kinder wohnen zusammen", en: "The children live together" }, accept: ["to live", "to reside", "live"], hint: "German w is the English V: VOH-nen — the same rule as was. The h after a vowel is silent and just makes it long." },
      ],
    },
    // Lesson 5: ä, the last of the three umlauts, with spät — and then the unit
    // closes on the describing words, every one of which re-uses a letter the
    // learner already owns: klein the ei of l1, schön the sch of l3 and the ö of
    // l4, groß the ß of l3. Nothing new to decode, everything to say. schön sits
    // before groß because groß's example ("Die Schule ist groß und schön") uses it.
    {
      id: "de-u1l5",
      unit: 1,
      lesson: 5,
      title: "Ä — groß, klein, schön, spät",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Type the third umlaut, ä, and describe anything you have learned to name — klein and groß, schön, spät: Die Schule ist groß und schön.",
      items: [
        { id: "de-u1l5-ae", type: "glyph", front: "ä", reading: "a", meaning: null, example: null, hint: "Not the a of Mann. ä is the e of English \"bed\", held long: spät = SHPAYT. Same long-press as ü and ö. \nPhone: hold A, then tap ä\nGerman keyboard: its own key, two right of L" },
        { id: "de-u1l5-spat", type: "vocab", front: "spät", reading: "spat", meaning: "late", example: { jp: "Anna ist spät.", en: "Anna is late." }, drill: { jp: "Thomas und Lena sind spät", en: "Thomas and Lena are late" }, accept: ["late"], hint: "ä is close to the e of \"bed\", held long: SHPAYT. Note sp- at the start of a word is said \"shp\", exactly as in sprechen." },
        { id: "de-u1l5-klein", type: "vocab", front: "klein", reading: "klein", meaning: "small", example: { jp: "Das Foto ist klein.", en: "The photo is small." }, drill: { jp: "Die Häuser hier sind klein", en: "The houses here are small" }, accept: ["small", "little", "tiny"], hint: "Rhymes with English \"line\", not \"lean\". Same ei as in Zeit." },
        { id: "de-u1l5-schon", type: "vocab", front: "schön", reading: "schon", meaning: "beautiful", example: { jp: "Die Musik ist schön.", en: "The music is beautiful." }, drill: { jp: "Die Schule und die Küche sind schön", en: "The school and the kitchen are beautiful" }, accept: ["beautiful", "lovely", "nice"], hint: "ö is \"eh\" with rounded lips. Do not confuse schön (beautiful) with schon (already) — the two dots are the whole difference." },
        { id: "de-u1l5-gross", type: "vocab", front: "groß", reading: "gross", meaning: "big", example: { jp: "Die Schule ist groß und schön.", en: "The school is big and beautiful." }, drill: { jp: "Die Türen sind groß", en: "The doors are big" }, accept: ["big", "large", "tall", "great"], hint: "GROHSS, long o. Same ß as Straße, and the same rule for typing it: gross." },
      ],
    },
  ],
};
