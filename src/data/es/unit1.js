// ES Unit 1 — Sounds and spelling (slot: sounds) — A1
// ─────────────────────────────────────────────────────────────────────────────
// First contact with Spanish. Latin-script languages collapse Strand A to ONE
// unit (BUILD-BRIEF-language-blueprint.md §1): not letter drills, but the
// sound-to-spelling map an English reader gets wrong — the five constant vowels,
// silent h, throaty j/g, ñ, ll/y, soft c/z vs hard c/qu, and the rolled rr.
// EVERY rule is taught THROUGH a real word the learner keeps. There is no lesson
// of bare letters in this unit and there must never be one again — see below.
//
// LESSON SHAPE — EACH LETTER SITS WITH THE WORDS THAT USE IT (2026-09-14)
//   This is the SECOND restructure of this unit in one day, and it reverses the
//   first. Read both, because the middle state still reads as a rule elsewhere.
//
//   2026-09-13 added the eight `type: "glyph"` letter cards in FRONT of the word
//   cards, inside the lessons that already held those words — l1 hit 12 items /
//   36 screens. 2026-09-14 (morning) fixed the LENGTH by giving the letters their
//   own lesson: l1 = 8 glyphs, nothing else; l2–l5 = the 25 words.
//
//   ⚠️ THAT FIXED THE WRONG THING. `BUILD-BRIEF-language-blueprint.md:15` is
//   explicit: "each unit teaches a chunk of script and immediately uses it for
//   real words… never 46 characters in a row. The learner is reading actual words
//   in unit 1." A letters-only l1 means a learner's FIRST Spanish session ends
//   having learned NO WORDS AT ALL. Japanese, the reference build, has zero
//   script-only lessons; French was rebuilt to the paired shape the same day
//   (src/data/fr/unit1.js).
//
//   SO THE LETTERS ARE BACK WITH THEIR WORDS, one family per lesson, 5–8 items:
//     l1  á é        + la casa, la mesa, es, de            6 items · 18 screens
//     l2  í ó ú      + el libro, la luna, el museo         6 items · 18 screens
//     l3  (no glyph) + la hora, hay, el hombre,
//                      la mujer, el ojo, la gente          6 items · 18 screens
//     l4  ñ ll       + el año, la mañana, el señor,
//                      la llave, la silla, y               8 items · 24 screens
//     l5  ü          + el coche, el cielo, el lápiz,
//                      qué, el perro, pero                 7 items · 21 screens
//   Glyphs still sit FIRST inside each lesson (teach order is authored order, and
//   every teach runs before any check — buildLearnQueue), so the learner meets the
//   letter one CARD before the word that uses it instead of one LESSON before.
//   Same 33 items throughout: nothing deleted, no `front` changed, no
//   meaning/example/drill/accept/hint rewritten. Only `title` and `canDo`.
//
//   WHY EACH GLYPH LANDED WHERE IT DID — WORKED OUT FROM THE WORDS:
//     ñ, ll → l4. el año / la mañana / el señor carry ñ; la llave / la silla
//       carry ll, and y borrows the ll sound. Three and three — the strongest
//       pairing in the unit, and the reason l4 runs to 8.
//     ü → l5. NO WORD IN THIS UNIT CONTAINS ü, so it has no host and is placed
//       where it READS best rather than where a word forces it. Its rule — "a u
//       written after g and never said, until two dots wake it up" (guitarra /
//       pingüino) — is the SAME rule as the silent u of qu, and qué is in l5.
//       That is the closest host the unit has.
//     á é í ó ú → l1 and l2, BY VOWEL, and this is the honest part: only TWO of
//       the five have a host word here (á in el lápiz, é in qué, both l5), and
//       those two words sit in l5 for their CONSONANTS (z, qu), not their
//       accents — moving them would break the c/z/qu/rr family. So each acute is
//       paired with the word that teaches its BARE vowel, which is exactly what
//       its own hint contrasts against ("Still the open ah of father. The accent
//       never changes the vowel — it only marks which syllable you hit"):
//         á → la casa (CA-sa)     é → la mesa (ME-sa), plus es and de
//         í → el libro (LEE-bro)  ó → el museo (mu-SE-o)  ú → la luna (LOO-na)
//       el lápiz and qué then REUSE á and é four lessons after they are taught,
//       which is the right direction.
//
//   L3 TEACHES AN ABSENCE AND CORRECTLY HAS NO LETTER CARD — unchanged ruling.
//   Silent h has no character to type (you write it and never say it) and the
//   throaty j/g is a sound English lacks, not a sign an English keyboard lacks.
//   Both are only teachable through words. Do not "complete the set" here.
//
//   ⚠️ 10 OF 33 IDS CHANGED, WHICH WIPES THOSE ITEMS' MASTERY. Six glyphs left
//   l1 (í ó ú → l2, ñ ll → l4, ü → l5) and four words left l2 (la casa, la mesa,
//   es, de → l1). The other 23 ids are untouched — all of l3, all six l4 words
//   and all six l5 words. Alex accepted the reset cost for this pass; it is ONE
//   pass, so do not regroup this unit a third time.
//
//   ⚠️ AUDIO: clip filenames ARE item ids, so all 10 changed ids would have
//   orphaned their mp3. They did not — all 10 were `git mv`d in public/audio/es/
//   and `npm run generate:manifest` re-run. es-u1 stays 33/33 voiced, 0 orphans,
//   0 API cost. A clip records the WORD or the LETTER, never the lesson it sits
//   in, so the rename is correct by construction. NOT optional: an orphaned clip
//   does not merely mute a card, it DELETES two card kinds (shouldListen and
//   shouldListenType both begin with hasAudio, cardRouting.js), and
//   tests/unit/card-variety.test.mjs goes red when an item drops to one kind.
//   ⚠️ audioManifest.js is a shared GENERATED file and one very long line. A merge
//   seat must RE-RUN the generator after merging — never hand-resolve it, and
//   never take one side, or another language's clips are silently dropped.
//
//   GLYPH CARD CONTRACT: `meaning` and `example` are null (contract.js ~L226) —
//   a glyph is taught by its SOUND, never a gloss; the sound description lives in
//   `hint`, and `reading` is the ASCII fold the listening card checks (á → "a",
//   ñ → "n", ll → "ll").
//   ch, gu and h were all considered and REJECTED, by one test — does the card
//   teach a sound, a keyboard problem, or a spelling an English reader gets
//   wrong? ch is the ch of "church", identical to English. gu is silent-u before
//   e/i, which English does too (guess, guitar) — its story belongs in ü's hint,
//   where it now lives, rather than in a card of its own. h is an absence, and
//   an absence has no character to type. "Seven letters does not become ten by
//   invention" (RUNBOOK §4). qu and rr were rejected too: they are spellings, not
//   characters an English keyboard lacks.
//
// AUTHORING CONVENTIONS FOR SPANISH (all es units):
//   - `front` is real orthography (accents, ñ, spaces); `reading` is its ASCII
//     fold (the contract requires [a-z]+) — normalizeReading() strips diacritics
//     via NFD and drops spaces, so "el año" folds to "elano" and a learner may
//     type either form.
//     The fold is an ANSWER KEY, never a pronunciation guide, so it must never be
//     displayed. ✅ Satisfied since 2026-08-13: `readingIsInformative()` gates it
//     on the front's script, and this branch now contains that fix (db5e45c) plus
//     the two surfaces it originally missed — the Ladder word-bank row and
//     GlyphDetail, the modal that row opens. Measured before/after: on the old
//     base 17 of 24 Spanish lessons displayed a fold; with the fix, 0 of 24.
//     Any future language must be scaffolded from a base at or after the last
//     shipped fix affecting card rendering — that, not "check for db5e45c", is
//     the durable rule.
//   - `example.jp` holds the SPANISH sentence (the field name is historical —
//     "jp" = target language); `example.en` the English gloss.
//   - Nouns are taught WITH their article (el/la) so gender is learned as part of
//     the word, never as an afterthought. Plurals get los/las.
//   - Examples stay inside vocab taught at or before this unit, plus the free
//     list declared below. Inflected forms of a listed cognate count as the same
//     word (moderno → moderna), as do regular plurals of any taught NOUN
//     (la silla → sillas). Machine-checked by `node scripts/check-lang-scope.mjs
//     es`, which parses the FREE lines directly — so these declarations are the
//     single source of truth and the checker can never allow more than they list.
//     ANY unit may add its own `// FREE:` line and the checker reads them all, so
//     a block declares what IT relies on instead of editing block 1's file.
//     WARNING: blocks 2 and 3 currently declare nothing machine-readable —
//     es/unit7.js names its naturalized borrowings (taxi, cafe, clase, fiesta,
//     festival, concierto, examen) in PROSE only, which is exactly why a checker
//     run reported two of them, clase and examen, as violations. Each of those
//     units should add its own FREE line; the line below is block 1's own words
//     plus the proper names the whole language shares.
//   FREE: Ana, María, Pablo, Carlos, España, México, América, Madrid, Barcelona, Sevilla, Mayor | moderno, moderna, elegante, famoso, enorme, romántico, romántica, fantástico, fantástica, tranquilo, tranquila, histórico, importante, rápido, perfecto, humano, favorito, persona, personas, taxi, música, problema, clase, examen, fiesta, festival, concierto | 2000
//     Extended 2026-08-13 (merge prep). Two additions, both mechanical, no content
//     changed: (a) the FEMININE and plural forms of adjectives already declared
//     free — the checker compares whole tokens and cannot fold moderno→moderna, so
//     "La casa es moderna" was reported against a word this line already allowed;
//     (b) the naturalized borrowings blocks 2 and 3 use, which until now were named
//     only in PROSE in es/unit7.js (this file's own WARNING above predicted the
//     result: clase and examen were reported as violations). The checker reads
//     FREE from unit1.js ONLY, so a per-unit line would not have been read.
//   - DELIBERATE A1 SIMPLIFICATIONS (revisit at A2): (a) only the present tense,
//     and verbs are taught as person-marked chunks (soy, hablo, tengo) rather
//     than infinitives — the infinitive belongs with the grammar units; (b) the
//     ser/estar contrast is not OPENED here: ser is the only copula taught and
//     analysed (es/soy/eres/son), and the grammar block owns the actual contrast.
//     estar is present but unanalysed — `cómo estás` is taught in u2l3 as a fixed
//     greeting chunk, so its 2sg form appears in that lesson's examples and canDo,
//     and `está` appears once inside a hint showing the polite variant (¿cómo está
//     usted?). No hint anywhere misclaims a form of estar as ser, and no
//     estar-obligatory adjective (contento, cansado, enfermo, abierto…) appears in
//     any of the 145 examples — every copular adjective used sits in ser's
//     territory. BLOCK 2/3: do not read this as "estar is untouched";
//     (c) `por` + time of day ("por la mañana") is deferred to the grammar block,
//     so Unit 5 uses "de noche" and plain adverbs instead.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT1 = {
  id: "es-u1",
  lang: "es",
  title: "Los sonidos",
  order: 1,
  stage: "a1",
  lessons: [
    // Lesson 1: the a and the e — the two accents that ride on them, then the
    // words that say those vowels bare. á/é change no vowel sound at all, they
    // only move the stress, so each sits one card ahead of the word that proves
    // it. es and de belong here too: both are short-e words, and every later
    // example in the unit is built on them.
    {
      id: "es-u1l1",
      unit: 1,
      lesson: 1,
      title: "Las vocales a y e",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Type á and é, then read the two vowels they ride on exactly as written — la casa is CA-sa, la mesa is ME-sa — and join two words with es and de.",
      items: [
        { id: "es-u1l1-glyphaacute", type: "glyph", front: "á", reading: "a", meaning: null, example: null, hint: "Still the open \"ah\" of father. The accent never changes the vowel — it only marks which syllable you hit: está, mamá.\nPhone: hold A, then tap á\nSpanish layout: ´ (the key right of Ñ), then A\nWindows: Alt+0225" },
        { id: "es-u1l1-glypheacute", type: "glyph", front: "é", reading: "e", meaning: null, example: null, hint: "Still the short \"eh\" of bed: café, también. Same sound as plain e, different beat.\nPhone: hold E, then tap é\nSpanish layout: ´ (the key right of Ñ), then E\nWindows: Alt+0233" },
        { id: "es-u1l1-lacasa", type: "vocab", front: "la casa", reading: "lacasa", meaning: "house", example: { jp: "La casa es moderna.", en: "The house is modern." }, drill: { jp: "La casa de Ana es enorme", en: "Ana's house is enormous" }, accept: ["the house", "home"], hint: "Spanish a is always the open \"ah\" of father — CA-sa, never the a of cat." },
        { id: "es-u1l1-lamesa", type: "vocab", front: "la mesa", reading: "lamesa", meaning: "table", example: { jp: "La mesa es elegante.", en: "The table is elegant." }, drill: { jp: "La mesa es elegante", en: "The table is elegant" }, accept: ["the table", "desk"], hint: "e is always the short \"eh\" of bed — ME-sa, never may-sa." },
        { id: "es-u1l1-es", type: "vocab", front: "es", reading: "es", meaning: "is", example: { jp: "Ana es fantástica.", en: "Ana is fantastic." }, drill: { jp: "El coche es rápido", en: "The car is fast" }, accept: ["it is", "he is", "she is", "it's"], hint: "The link word: X es Y. Watch the adjective change ending to match — fantástico for a man, fantástica for a woman." },
        { id: "es-u1l1-de", type: "vocab", front: "de", reading: "de", meaning: "of", example: { jp: "La casa de Ana es enorme.", en: "Ana's house is enormous." }, drill: { jp: "La llave de la casa", en: "The key to the house" }, accept: ["from", "belonging to"], hint: "Spanish has no apostrophe-s. \"Ana's house\" is la casa de Ana — the house OF Ana." },
      ],
    },
    // Lesson 2: i, o and u, same shape — the three remaining acutes first, then
    // the words that keep each vowel clean right to the end of the word.
    {
      id: "es-u1l2",
      unit: 1,
      lesson: 2,
      title: "Las vocales i, o y u",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Type í, ó and ú, then say i, o and u the way Spanish always says them — el libro, la luna, el museo — without swallowing a vowel the way English does.",
      items: [
        { id: "es-u1l2-glyphiacute", type: "glyph", front: "í", reading: "i", meaning: null, example: null, hint: "Still \"ee\" — and note the accent REPLACES the dot, so í never carries both: aquí, día.\nPhone: hold I, then tap í\nSpanish layout: ´ (the key right of Ñ), then I\nWindows: Alt+0237" },
        { id: "es-u1l2-glyphoacute", type: "glyph", front: "ó", reading: "o", meaning: null, example: null, hint: "Still a clean \"oh\" right to the end: adiós, canción.\nPhone: hold O, then tap ó\nSpanish layout: ´ (the key right of Ñ), then O\nWindows: Alt+0243" },
        { id: "es-u1l2-glyphuacute", type: "glyph", front: "ú", reading: "u", meaning: null, example: null, hint: "Still \"oo\": menú, número. The mark can also split twins — tú is \"you\", tu is \"your\".\nPhone: hold U, then tap ú\nSpanish layout: ´ (the key right of Ñ), then U\nWindows: Alt+0250" },
        { id: "es-u1l2-ellibro", type: "vocab", front: "el libro", reading: "ellibro", meaning: "book", example: { jp: "El libro es famoso.", en: "The book is famous." }, drill: { jp: "El libro es famoso", en: "The book is famous" }, accept: ["the book"], hint: "i is always \"ee\" and o stays a clean \"oh\" right to the end: LEE-bro, never LEE-bruh." },
        { id: "es-u1l2-laluna", type: "vocab", front: "la luna", reading: "laluna", meaning: "moon", example: { jp: "¡La luna es romántica!", en: "The moon is romantic!" }, drill: { jp: "La luna es romántica", en: "The moon is romantic" }, accept: ["the moon"], hint: "u is always \"oo\" — LOO-na." },
        { id: "es-u1l2-elmuseo", type: "vocab", front: "el museo", reading: "elmuseo", meaning: "museum", example: { jp: "El museo es enorme.", en: "The museum is enormous." }, drill: { jp: "El museo es enorme", en: "The museum is enormous" }, accept: ["the museum"], hint: "Three vowels in a row, every one of them said: mu-SE-o. Spanish never swallows a vowel the way English does." },
      ],
    },
    // Lesson 3: the letters that lie — silent h, throaty j and g. NO GLYPH CARD
    // BELONGS HERE, ON PURPOSE: h is an ABSENCE with no character to type, and
    // the j/g rasp is a sound English lacks, not a sign an English keyboard
    // lacks. Both are only teachable through words, so this lesson is words only
    // and must not gain a letter card.
    {
      id: "es-u1l3",
      unit: 1,
      lesson: 3,
      title: "La h muda y la jota",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the two letters that mislead an English reader — h is written and never pronounced, and j, plus g before e or i, is a rasp at the back of the throat. No new letter to type here: both rules live in the words.",
      items: [
        { id: "es-u1l3-lahora", type: "vocab", front: "la hora", reading: "lahora", meaning: "hour", example: { jp: "¡Es la hora!", en: "It's time!" }, drill: { jp: "Es la hora", en: "It's time" }, accept: ["the hour", "time", "o'clock"], hint: "The h is silent, so it sounds exactly like ora: OH-ra." },
        { id: "es-u1l3-hay", type: "vocab", front: "hay", reading: "hay", meaning: "there is", example: { jp: "Hay gente.", en: "There are people." }, drill: { jp: "Hay gente en el museo", en: "There are people in the museum" }, accept: ["there are", "there's"], hint: "One word for both \"there is\" and \"there are\". Silent h again — it sounds like the English word \"eye\"." },
        { id: "es-u1l3-elhombre", type: "vocab", front: "el hombre", reading: "elhombre", meaning: "man", example: { jp: "El hombre es famoso.", en: "The man is famous." }, drill: { jp: "El hombre es elegante", en: "The man is elegant" }, accept: ["the man", "guy"], hint: "OM-bre. Spanish h is the only letter that is always silent — you write it and never say it." },
        { id: "es-u1l3-lamujer", type: "vocab", front: "la mujer", reading: "lamujer", meaning: "woman", example: { jp: "La mujer es elegante.", en: "The woman is elegant." }, drill: { jp: "La mujer es famosa", en: "The woman is famous" }, accept: ["the woman", "lady", "wife"], hint: "That j is a rasp at the back of the mouth, like clearing your throat: moo-HER." },
        { id: "es-u1l3-elojo", type: "vocab", front: "el ojo", reading: "elojo", meaning: "eye", example: { jp: "El ojo humano es perfecto.", en: "The human eye is perfect." }, drill: { jp: "El ojo humano es perfecto", en: "The human eye is perfect" }, accept: ["the eye"], hint: "OH-ho, with the same rasp. On its own, ¡Ojo! means \"watch out!\"" },
        { id: "es-u1l3-lagente", type: "vocab", front: "la gente", reading: "lagente", meaning: "people", example: { jp: "La gente de México es fantástica.", en: "The people of Mexico are fantastic." }, drill: { jp: "La gente de México es fantástica", en: "The people of Mexico are fantastic" }, accept: ["people", "the people", "folk"], hint: "g before e or i takes that same throaty sound: HEN-te. Before a, o, u it is the hard g of \"go\"." },
      ],
    },
    // Lesson 4: the two letters English does not have, each followed by the words
    // built on it — ñ by año/mañana/señor, ll by llave/silla, and y, which
    // borrows the ll sound. Eight items, the top of the band, because six words
    // genuinely depend on these two letters.
    {
      id: "es-u1l4",
      unit: 1,
      lesson: 4,
      title: "La ñ y la ll",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Type ñ and ll, then say the five everyday words built on them — el año, la mañana, el señor, la llave, la silla — and read y, which borrows the ll sound.",
      items: [
        { id: "es-u1l4-glyphenye", type: "glyph", front: "ñ", reading: "n", meaning: null, example: null, hint: "n with a y glued on — say \"canyon\" and stop at the ny. Its own letter, with its own slot after n in the alphabet.\nPhone: hold N, then tap ñ\nSpanish layout: ñ has its own key, right of L\nWindows: Alt+0241" },
        { id: "es-u1l4-glyphll", type: "glyph", front: "ll", reading: "ll", meaning: null, example: null, hint: "Two l's, one sound: the y of \"yes\", never an English l. Both letters are typed; only one sound comes out." },
        { id: "es-u1l4-elano", type: "vocab", front: "el año", reading: "elano", meaning: "year", example: { jp: "El año 2000 es histórico.", en: "The year 2000 is historic." }, drill: { jp: "El año es histórico", en: "The year is historic" }, accept: ["the year"], hint: "ñ is n with a y glued on: A-nyo. The tilde is not decoration — año is a year, ano is not." },
        { id: "es-u1l4-lamanana", type: "vocab", front: "la mañana", reading: "lamanana", meaning: "morning", example: { jp: "La mañana es tranquila.", en: "The morning is calm." }, drill: { jp: "La mañana es tranquila", en: "The morning is calm" }, accept: ["tomorrow", "the morning"], hint: "ma-NYA-na. With la it is the morning; on its own, mañana means tomorrow." },
        { id: "es-u1l4-elsenor", type: "vocab", front: "el señor", reading: "elsenor", meaning: "sir", example: { jp: "El señor es elegante.", en: "The gentleman is elegant." }, drill: { jp: "El señor es de Madrid", en: "The gentleman is from Madrid" }, accept: ["mister", "mr", "gentleman", "the gentleman"], hint: "se-NYOR — Mr. or sir. Abbreviated Sr. in writing." },
        { id: "es-u1l4-lallave", type: "vocab", front: "la llave", reading: "lallave", meaning: "key", example: { jp: "Es la llave de la casa.", en: "It's the house key." }, drill: { jp: "La llave es de Ana", en: "The key is Ana's" }, accept: ["the key"], hint: "ll is one letter's worth of sound, the y of \"yes\": YA-ve." },
        { id: "es-u1l4-lasilla", type: "vocab", front: "la silla", reading: "lasilla", meaning: "chair", example: { jp: "La silla es elegante.", en: "The chair is elegant." }, drill: { jp: "La silla y la mesa", en: "The chair and the table" }, accept: ["the chair", "seat"], hint: "SEE-ya. The same ll, this time in the middle of the word." },
        { id: "es-u1l4-y", type: "vocab", front: "y", reading: "y", meaning: "and", example: { jp: "La casa y el museo.", en: "The house and the museum." }, drill: { jp: "El museo y la casa", en: "The museum and the house" }, accept: ["plus"], hint: "One letter, one word. Alone it is just the vowel i — \"ee\". Before a vowel it turns into the ll sound: yo (I)." },
      ],
    },
    // Lesson 5: the consonants that shift — hard/soft c, z, qu and the two r's.
    // ü opens it because no word in the unit contains ü, and its rule (a u written
    // after g and never said, until two dots wake it up) is the same rule as the
    // silent u of qué, four cards below.
    {
      id: "es-u1l5",
      unit: 1,
      lesson: 5,
      title: "La c, la z, la qu y la rr",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Type ü, the two dots that wake a silent u, then read the consonants that change with the letter after them — hard c and qu, soft c and z — and hear the rolled rr that separates el perro from pero.",
      items: [
        { id: "es-u1l5-glyphudieresis", type: "glyph", front: "ü", reading: "u", meaning: null, example: null, hint: "In gue and gui the u is written and never said — guitarra is ghee-TA-rra, hard g. Two dots wake it back up: pingüino is peen-GWEE-no. It is the only mark on a VOWEL that changes a sound instead of a stress, and it only ever sits in güe or güi.\nPhone: hold U, then tap ü\nSpanish layout: Shift+´, then U\nWindows: Alt+0252" },
        { id: "es-u1l5-elcoche", type: "vocab", front: "el coche", reading: "elcoche", meaning: "car", example: { jp: "El coche de Ana es rápido.", en: "Ana's car is fast." }, drill: { jp: "El coche de Pablo es rápido", en: "Pablo's car is fast" }, accept: ["the car", "automobile"], hint: "c before a, o, u is a hard k: KO-che. And ch is a single sound, the ch of \"church\". Spain says coche; much of Latin America says carro or auto." },
        { id: "es-u1l5-elcielo", type: "vocab", front: "el cielo", reading: "elcielo", meaning: "sky", example: { jp: "El cielo de la mañana es tranquilo.", en: "The morning sky is calm." }, drill: { jp: "El cielo es enorme", en: "The sky is enormous" }, accept: ["the sky", "heaven"], hint: "But c before e or i goes soft: SYE-lo in Latin America, THYE-lo in most of Spain." },
        { id: "es-u1l5-ellapiz", type: "vocab", front: "el lápiz", reading: "ellapiz", meaning: "pencil", example: { jp: "El lápiz es de Ana.", en: "The pencil is Ana's." }, drill: { jp: "El lápiz es de María", en: "The pencil is María's" }, accept: ["the pencil"], hint: "z is that same soft sound. The accent tells you where to hit: LÁ-piz. With no accent, stress lands on the last syllable — or the second-to-last if the word ends in a vowel, n or s." },
        { id: "es-u1l5-que", type: "vocab", front: "qué", reading: "que", meaning: "what", example: { jp: "¿Qué es?", en: "What is it?" }, drill: { jp: "No sé qué es", en: "I don't know what it is" }, accept: ["which"], hint: "qu is a plain k — the u is silent: KE. Questions open with an upside-down ¿ so you know from the first character that a question is coming." },
        { id: "es-u1l5-elperro", type: "vocab", front: "el perro", reading: "elperro", meaning: "dog", example: { jp: "El perro de Ana es enorme.", en: "Ana's dog is enormous." }, drill: { jp: "El perro de Ana es enorme", en: "Ana's dog is enormous" }, accept: ["the dog"], hint: "rr is the rolled r — trill the tip of your tongue. Worth practising: it is the one sound that changes the word." },
        { id: "es-u1l5-pero", type: "vocab", front: "pero", reading: "pero", meaning: "but", example: { jp: "El museo es enorme, pero es tranquilo.", en: "The museum is enormous, but it's quiet." }, drill: { jp: "El museo es enorme pero tranquilo", en: "The museum is enormous but calm" }, accept: ["however", "though"], hint: "One r, one light tap: PE-ro. The classic trap — perro is a dog, pero is \"but\"." },
      ],
    },
  ],
};
