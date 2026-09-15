// PT Unit 1 — Os sons e a escrita (slot: sounds) — A1
// ─────────────────────────────────────────────────────────────────────────────
// First contact with Portuguese. Latin-script languages collapse Strand A to ONE
// unit (BUILD-BRIEF-language-blueprint.md §1): not letter drills, but the
// sound-to-spelling map an English reader gets wrong — the vowels Portugal
// swallows when unstressed, the nasals ão/ã/ãe, lh, nh, ç, and the s/ss/r
// families. Every rule is taught THROUGH a real word the learner keeps, never
// through a bare letter. Modelled on es/unit1.js, NOT on fr's sounds unit.
//
// EUROPEAN PORTUGUESE (pt-PT), not Brazilian. Settled by the companion voice:
// Tiago is from Lisbon. This is a corpus decision, not an accent one — it sets
// the vocabulary (comboio not trem, pequeno-almoço not café da manhã), the
// second person (tu, and você as the polite form), and the spelling. Every unit
// in this language follows it. If a card would be wrong in Portugal, it is wrong.
//
// AUTHORING CONVENTIONS FOR PORTUGUESE (all pt units):
//   - `front` is real orthography (accents, cedilla, hyphens, spaces);
//     `reading` is its ASCII fold, because the contract requires [a-z]+.
//     normalizeReading() runs NFD and drops the combining marks, so Portuguese
//     folds cleanly and losslessly for typing: ação→acao, coração→coracao,
//     não→nao, pequeno-almoço→pequenoalmoco. Verified against src/store/answer.js.
//     The fold is an ANSWER KEY, never a pronunciation guide — it is never shown
//     (readingIsInformative() gates display on the front's script).
//   - `example.jp` holds the PORTUGUESE sentence (the field name is historical —
//     "jp" = target language); `example.en` the English gloss.
//   - Nouns are taught WITH their article (o/a/os/as) so gender is learned as
//     part of the word, never as an afterthought.
//   - Verbs are headworded in the INFINITIVE (falar, comer, morar, ter, ir).
//     Fixed conversational chunks are separate entries glossed as chunks
//     ("chamo-me" = my name is, "como estás" = how are you) — those are phrases,
//     not verb headwords, and the grammar block owns the conjugation.
//   - Examples stay inside vocab taught at or before the unit, plus proper names
//     and transparent cognates. This SOUNDS unit is deliberately exempt from the
//     scope check (src/data/lint.js skips a unit whose title matches /sons/) —
//     it teaches pronunciation through real words and so legitimately runs ahead
//     of the queue, exactly as es/unit1.js does.
//   - FREE (proper names + transparent cognates used across block 1's examples):
//     Ana, Tiago, João, Maria, Pedro, Portugal, Lisboa, Porto, Coimbra, Braga,
//     Europa, Brasil | moderno/moderna, elegante, famoso/famosa, enorme,
//     fantástico/fantástica, importante, rápido/rápida, problema, natural,
//     tranquilo/tranquila, delicioso/deliciosa, os euros, o hotel, o táxi,
//     o chocolate, o telefone, o supermercado, o restaurante.
//     (hospital, banco, farmácia, escola, museu and cidade are TAUGHT cards in
//     u7/u3, not free cognates — they are listed here nowhere on purpose.)
//
//   - THE SPANISH TRAP (this corpus already teaches 3,123 Spanish words, and the
//     two languages are close enough that a seat drifts without noticing). Two
//     opposite failures, both live here:
//       (a) Do not write Spanish with Portuguese spelling. Checked every front in
//           this block against its Spanish counterpart; where they diverge the
//           Portuguese form is used and the hint says so.
//       (b) Do not avoid a correct Portuguese word because it looks Spanish.
//           a casa, o livro, o carro, caro, a laranja, o médico are all simply
//           correct Portuguese and are taught without apology.
//     False friends are taught DELIBERATELY where they fit, not dodged:
//       · o rato — u1l6. PT: mouse. ES "rato": a short while.
//       · a salada / a salsa — u6l4. PT salsa: PARSLEY. ES salsa: sauce.
//     Left for later blocks, where their theme lives (see the block 2/3 briefs):
//       esquisito (weird, not "exquisite") → u10 Describing things;
//       embaraçada (tangled/awkward, not "pregnant") → u16 Feelings;
//       a propina (pt-PT university tuition fee; ES "tip"; pt-BR "bribe" —
//       a three-way trap) → the education slot in block 3.
//
//   - DELIBERATE A1 SIMPLIFICATIONS (revisit at A2, and see the block 2 brief):
//     (a) `é` is taught here as the copula link word, a chunk, not as an analysed
//         form of ser; the ser/estar contrast is NOT opened in block 1 and belongs
//         to u12 Grammar 1. `estou bem` (u2l3) is likewise a fixed answer chunk.
//     (b) REVERSED AT MERGE. `um` and `uma` were originally one card, with the
//         feminine carried in the hint, to avoid spending two cards on one lexeme.
//         That held at 168 cards and did not hold at 480: across the finished band
//         `uma` is used in 11 examples and was the highest-frequency word the
//         corpus never taught. It is now its own card (u1l4), which is also the
//         honest shape — choosing a gender for "a" is a decision the learner makes
//         on every noun. u1l4 therefore carries 7 cards, inside the 5-8 band.
//     (c) contractions (do/da/no/na/ao/à = de/em/a + article) are used in examples
//         from u1 and glossed in hints at first use; they are not carded in block
//         1 — u12 Grammar 1 owns them.
//
//   - ACCENT FOLDS: WHAT THEY DO AND DO NOT BLOCK. `reading` is the NFD fold of
//     `front`, so two fronts that differ only by an accent share a reading. Front-
//     uniqueness is keyed on the RAW front (contract.js frontKey = lang + front, no
//     normalize), so a fold collision does NOT bar the second word — it makes the
//     PAIR indistinguishable to typed answers, because checkReading compares folds
//     and will accept either card's answer for the other. Quality cost and a
//     judgement call, not a hard bar. (A German seat reported the opposite, that a
//     fold collision makes a word permanently unteachable; that was withdrawn after
//     this was checked against a real validate run.)
//     pt SHIPS FOUR SUCH PAIRS ON PURPOSE, each because the contrast IS the lesson:
//       é / e (u1l1)  ·  às / as (u12)  ·  nós / nos (u4, u29)  ·  porque / porquê (u29)
//     THE LOUD VERSION IS THE ID, NOT THE FRONT: porque and porquê fold to one id
//     slug and that IS a hard duplicate-id error. porquê carries an explicit id.
//     WORDS A LATER BAND WILL WANT THAT WOULD DOUBLE UP ON AN ALREADY-TAUGHT FOLD —
//     teachable, but they will read the same as the word in brackets, so decide
//     deliberately rather than discover it at merge:
//       pôr (por, u29) · esta (está, u12) · têm (tem, u13) · más (mas, u21)
//       · dá (da, u12) · sê (se, u13).   pôr is the one that matters — it is a core
//     verb and it will collide with the por taught at u29.
//     Checked across all 1,202 fronts in u1-u50: four fold collisions, all listed
//     above, none unknown. Also checked and CLEAN: no noun taught twice under a
//     different article (o X / a X), and no article-bearing front whose bare
//     headword is a separate card.
//
//
//   - GLYPH CARDS AND THE 6-LESSON SHAPE — EACH LETTER SITS WITH THE WORDS
//     THAT USE IT (rebuilt 2026-09-14, and this REVERSES the split earlier the
//     same day; read both, because the middle state still reads as a rule).
//     `type: "glyph"` items teach an accent or cluster on its own, by SOUND, with
//     meaning: null and example: null.
//
//     2026-09-13 added 13 glyph cards in FRONT of the word cards in l1–l3, taking
//     l1 to 13 items / 39 screens against ~18 for a normal lesson. The morning of
//     2026-09-14 fixed the LENGTH by giving the letters their own lessons:
//     l1–l2 = the 13 letters, nothing else; l3–l6 = the 25 words.
//
//     ⚠️ THAT FIXED THE WRONG THING. `BUILD-BRIEF-language-blueprint.md:15`:
//     "each unit teaches a chunk of script and immediately uses it for real
//     words… never 46 characters in a row. The learner is reading actual words in
//     unit 1." Two letters-only lessons mean a learner's FIRST TWO Portuguese
//     sessions end having learned NO WORDS AT ALL. French (src/data/fr/unit1.js)
//     and Spanish (src/data/es/unit1.js) were both rebuilt to the paired shape
//     the same day.
//     ⚠️ CORRECTION, measured 2026-09-14: an earlier version of this paragraph
//     said "Japanese, the reference build, has zero script-only lessons." That is
//     FALSE — 48 ja lessons teach script with no vocab at all (u11, u13, u14 and
//     u16 are whole runs of them, and unit16.js:8-12 waives the density advisory
//     for yoon on purpose). What IS true is the part that matters here: ja u1-u6,
//     the kana-introduction units, mix script and words in every one of their 30
//     lessons — 3-5 kana plus 5-6 vocab each. Japanese accepts a script-only run
//     LATER, once the learner already has words to hang it on. It never opens
//     with one. Cite the units, not the corpus.
//
//     SO THE LETTERS ARE BACK WITH THEIR WORDS. STILL SIX LESSONS, all inside
//     lint.js's 5–8 band — 7 / 6 / 6 / 7 / 6 / 6 = 21 / 18 / 18 / 21 / 18 / 18
//     screens at 3 screens per item (1 teach + 2 checks, buildLearnQueue):
//       l1  á â ê      + a casa, é, e, de            the a and the e
//       l2  í ó ô ú    + o livro, a rua              the i, the o and the u
//       l3  ão ãe      + o pão, a mão, não, a mãe   the nasal diphthongs
//       l4  ã ç        + a maçã, o preço, sim,
//                       um, uma                   the til, the cedilha, final m
//       l5  lh nh     + a mulher, o trabalho,
//                       a manhã, o dinheiro       the two digraphs
//       l6  (none)    + o carro, caro, o rato,
//                       isso, a coisa, mais       s and r change job by position
//     WITHIN A LESSON, glyphs still sit FIRST in items[], because teach order is
//     authored order (buildLearnQueue runs every teach before any check) — so the
//     learner meets the letter one CARD before the word that uses it, not one
//     LESSON before. 38 items throughout: nothing deleted, no `front` changed, no
//     meaning/example/drill/accept rewritten.
//
//     WHY EACH GLYPH LANDED WHERE IT DID — WORKED OUT FROM THE WORDS:
//       ão → l3 (o pão, a mão, não) and ãe → l3 (a mãe). Exact hosts.
//       ç → l4 (a maçã, o preço) and ã → l4 (a maçã). Exact hosts. sim / um /
//         uma join them because a final m is the OTHER way Portuguese nasalises a
//         vowel, so the lesson is "the til, the cedilha and the final m".
//       lh → l5 (a mulher, o trabalho) and nh → l5 (a manhã, o dinheiro). Exact.
//         a manhã carries BOTH ã and nh, so it sits in l5, the LATER of the two
//         lessons — both its marks are taught before it appears.
//       á â ê → l1 and í ó ô ú → l2, BY VOWEL, and this is the honest part:
//         NOT ONE of the 25 words in this unit carries á, â, ê, í, ó, ô or ú. The
//         only accented word front here is é, which is a WORD (the copula) and
//         deliberately has no glyph twin — see the ruling below. So the seven
//         vowel accents have no host and are paired with the words that teach the
//         same BARE vowel, which is what each hint already contrasts against:
//           á (open a) / â (closed a) → a casa, whose final unstressed a is
//             swallowed to "uh" — the three a's of Portuguese in one lesson
//           ê (closed e) → é (open e, taught here as a word), plus e and de, whose
//             unstressed e reduces to nothing. ê and é are now in the SAME lesson,
//             which is why the ê hint no longer points forward to Lesson 3.
//           í → o livro (LEE-vru)   ú → a rua (ROO-uh)
//           ó / ô → l2 with them. NO WORD IN THIS UNIT CONTAINS ó OR ô, so they
//             have no host at all; l2 is where they read best, next to o livro,
//             whose final unstressed o closes right down to "oo".
//       l2 is glyph-heavy (4 letters, 2 words) and that is the least-bad shape
//       available: the six vowel-quality words are mutually dependent (é/e/de are
//       used by almost every example in the unit) and cannot be spread further
//       without more forward references than the split already costs.
//
//     L6 HAS NO GLYPH CARDS AND MUST NOT GAIN ANY — unchanged ruling. s and r are
//     ordinary letters doing different jobs in different positions; there is no
//     new sign to type, so a glyph card there has nothing to ask.
//
//     TWO LETTERS ARE DELIBERATELY NOT CARDED, and the reason is NOT that the
//     validator stops them. Verified by probe, 2026-09-13: front-uniqueness is
//     keyed only on `vocab` and `kanji` (contract.js vocabFronts loop; lint.js
//     vocabFronts loop), so a glyph front DUPLICATING a vocab front raises zero
//     errors in both gates. The bar is editorial, not mechanical:
//       é — already taught as a WORD in this unit (pt-u1l1-e, the copula). It is
//         one of only three items in the whole corpus that foldWouldEraseAnswer()
//         names (answer.js), so typing it ALREADY requires the real accent on every
//         produce and dictation card. A glyph é would be a second mastery track for
//         the identical keystroke, and would put two "é" rows on the Ladder, one
//         glossed "is" and one glossless. The acute is taught as a CLASS by á í ó ú,
//         and the ê card names é explicitly as its open partner — now one card away
//         in the same lesson. pt-u1l1-e's hint carries the typing instruction the
//         glyph cards use. Do not add a glyph é without reversing this note.
//       à — taught at u12l3 as the crase (a + a). It is not a distinct SOUND: it is
//         an orthographic mark on a fused contraction, so it has nothing to teach in
//         a pronunciation lesson. It stays where the grammar that produces it lives.
//
//     ⚠️ 22 OF THE 38 IDS CHANGED, WHICH WIPES THOSE ITEMS' MASTERY. 16 are
//     untouched: the three l1 glyphs, sim/um/uma in l4, the four l5 words and all
//     six l6 words. An id change is a mastery reset, a cost accepted once — which
//     is why this is ONE pass and the unit must not be regrouped a third time.
//     AUDIO: 19 of the 22 changed ids had a clip, and all 19 were `git mv`-renamed
//     in public/audio/pt/ with `npm run generate:manifest` re-run — 0 orphaned,
//     0 re-voiced, 0 API cost. A clip records the LETTER or the WORD, never the
//     lesson it sits in, so the rename is correct by construction. Four glyph ids
//     remain unvoiced from the 2026-09-13 add and this pass did not change that:
//     pt-u1l1-glyphacircum (â), pt-u1l2-glyphoacute (ó), pt-u1l2-glyphuacute (ú),
//     pt-u1l3-glyphao (ão). pt-u1 is 34/38 voiced, before and after.
//     ⚠️ NOT COSMETIC: an orphaned clip does not merely mute a card, it DELETES
//     two card kinds (shouldListen and shouldListenType both begin with hasAudio,
//     cardRouting.js), and tests/unit/card-variety.test.mjs goes red when an item
//     is left with one kind. Any future id move in a voiced unit must carry its
//     clips for the same reason.
//     ⚠️ audioManifest.js is a shared GENERATED file and one very long line. A
//     merge seat must RE-RUN the generator after merging — never hand-resolve it
//     and never take one side, or another language's clips are silently dropped.
//   - THE ARTICLE TRAP IS ONE CLASS WITH SEVERAL COSTUMES, and it is the single
//     commonest defect in this language. A drill must contain the item's own front
//     as WHOLE WORDS (cardRouting findWholeWord is letter-boundary aware and does
//     NOT fold), and Portuguese fronts carry their article, so:
//       possessive swallows it   "O meu irmão…"  does NOT contain front "o irmão"
//       preposition replaces it  "de metro"      does NOT contain front "o metro"
//       conjugation hides it     "melhorou"      does NOT contain front "melhorar"
//     27 A2 block-1 drills passed lint.js and were refused by the ENGINE on exactly
//     these. lint.js accent-folds and does a plain substring test, so IT IS WEAKER
//     THAN THE ENGINE and will pass drills the engine rejects. Validate every drill
//     against canCloze/canSentence, never against the lint alone.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT1 = {
  id: "pt-u1",
  lang: "pt",
  title: "Os sons e a escrita",
  order: 1,
  stage: "a1",
  lessons: [
    // Lesson 1: the a and the e. á opens the a, â closes it, ê closes the e — and
    // then the words show the same two vowels doing what Portugal does to them
    // when nothing marks them: a casa swallows its final a, é is the open e as a
    // word in its own right, e and de reduce to almost nothing.
    {
      id: "pt-u1l1",
      unit: 1,
      lesson: 1,
      title: "Aberto, fechado, engolido: o a e o e",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Type á, â and ê, then read your first four Portuguese words — a casa, é, e, de — and hear what European Portuguese does to a vowel it does not stress: it swallows it, which is the single biggest difference from Spanish and from Brazil.",
      items: [
        { id: "pt-u1l1-glyphaacute", type: "glyph", front: "á", reading: "a", meaning: null, example: null, hint: "The OPEN a, mouth wide — the a of \"father\". The acute also tells you WHERE the stress falls: rápido is RA-pi-du, not ra-PI-du. Type it: hold A on a phone; on a Portuguese keyboard press the ´ key, then a." },
        { id: "pt-u1l1-glyphacircum", type: "glyph", front: "â", reading: "a", meaning: null, example: null, hint: "The CLOSED a, short and swallowed — câmara is KUH-ma-ra. Same letter as á, opposite mouth: the acute opens the vowel, the hat closes it. Type it: hold A, or press ^ then a." },
        { id: "pt-u1l1-glyphecircum", type: "glyph", front: "ê", reading: "e", meaning: null, example: null, hint: "The CLOSED e — the \"ay\" of \"say\" with no glide on the end: três, você. Its partner é opens the same vowel to the \"eh\" of \"bed\", and you meet é in this very lesson as a word in its own right. Type it: ^ then e." },
        { id: "pt-u1l1-acasa", type: "vocab", front: "a casa", reading: "acasa", meaning: "house", example: { jp: "A casa é moderna.", en: "The house is modern." }, drill: { jp: "A casa de Ana é enorme", en: "Ana's house is enormous" }, accept: ["the house", "home"], hint: "KA-zuh. Two lessons in one word: the s between vowels says z, and the final unstressed a is a swallowed \"uh\" in Portugal — not the clean \"ah\" Spanish or Brazil would give it." },
        { id: "pt-u1l1-e", type: "vocab", front: "é", reading: "e", meaning: "is", example: { jp: "O livro é fantástico.", en: "The book is fantastic." }, drill: { jp: "A rua é tranquila", en: "The street is tranquil" }, accept: ["it is", "he is", "she is", "it's"], hint: "The link word: X é Y. The accent marks an OPEN e — the vowel of \"bed\", said wide. Say it as \"eh\", never \"ay\". The accent is part of the answer here, not optional decoration — type it with ´ then e, or by holding E on a phone." },
        { id: "pt-u1l1-econj", type: "vocab", front: "e", reading: "e", meaning: "and", example: { jp: "A casa e a rua.", en: "The house and the street." }, drill: { jp: "A casa e a rua", en: "The house and the street" }, accept: ["plus"], hint: "Same letter, no accent, different word — and in Portugal it is said \"ee\", because an unstressed e closes all the way to an i sound. é = is, e = and." },
        { id: "pt-u1l1-de", type: "vocab", front: "de", reading: "de", meaning: "of", example: { jp: "A casa de Ana é enorme.", en: "Ana's house is enormous." }, drill: { jp: "É o livro de Ana", en: "It is Ana's book" }, accept: ["from", "belonging to", "'s"], hint: "\"duh\" — the unstressed e reduces to almost nothing. Portuguese has no apostrophe-s: \"Ana's house\" is a casa DE Ana. Watch it fuse with an article later: de + o = do, de + a = da." },
      ],
    },
    // Lesson 2: the other three vowels. í and ú only move the stress; ó and ô are
    // the open and closed o, and neither has a word in this unit — they sit here
    // because o livro's final o closes right down to "oo", which is the contrast
    // they need. Four letters to two words is the heaviest ratio in the unit and
    // the note in the header says why it cannot be spread further.
    {
      id: "pt-u1l2",
      unit: 1,
      lesson: 2,
      title: "As outras vogais: i, o e u",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Type í, ó, ô and ú — the marks that say where the stress falls and how wide the o is — then read o livro and a rua, where the final unstressed o closes right down to an oo.",
      items: [
        { id: "pt-u1l2-glyphiacute", type: "glyph", front: "í", reading: "i", meaning: null, example: null, hint: "A stressed \"ee\" — país is pa-EESH. Portuguese i is ALWAYS \"ee\"; the accent changes nothing about the sound, it only says \"the stress is here\", pulling it off the vowel before. Type it: ´ then i." },
        { id: "pt-u1l2-glyphoacute", type: "glyph", front: "ó", reading: "o", meaning: null, example: null, hint: "The OPEN o — the o of \"hot\", said wide: avó, grandmother. Type it: hold O on a phone, or ´ then o." },
        { id: "pt-u1l2-glyphocircum", type: "glyph", front: "ô", reading: "o", meaning: null, example: null, hint: "The CLOSED o — the \"oh\" of \"go\": avô, grandfather. One accent apart from avó and it changes which grandparent you mean, so the hat is not decoration. Type it: ^ then o." },
        { id: "pt-u1l2-glyphuacute", type: "glyph", front: "ú", reading: "u", meaning: null, example: null, hint: "A stressed \"oo\" — número, açúcar. Like í, it moves the stress rather than the sound: u is always \"oo\" in Portuguese. Type it: ´ then u." },
        { id: "pt-u1l2-olivro", type: "vocab", front: "o livro", reading: "olivro", meaning: "book", example: { jp: "O livro é importante.", en: "The book is important." }, drill: { jp: "O livro de Ana é caro", en: "Ana's book is expensive" }, accept: ["the book"], hint: "LEE-vru. i is always \"ee\". A final unstressed o is not \"oh\" — it closes right down to \"oo\"." },
        { id: "pt-u1l2-arua", type: "vocab", front: "a rua", reading: "arua", meaning: "street", example: { jp: "A rua é enorme.", en: "The street is enormous." }, drill: { jp: "A rua de Lisboa é enorme", en: "The Lisbon street is enormous" }, accept: ["the street", "road"], hint: "ROO-uh. u is always \"oo\". That opening r is a strong sound made at the back of the throat — Lesson 6 comes back to it." },
      ],
    },
    // Lesson 3: the nasal diphthongs, each letter in front of the words that
    // spell it. Nothing in English or Spanish prepares a learner for ão — the
    // sound foreigners are recognised by — so it comes early.
    {
      id: "pt-u1l3",
      unit: 1,
      lesson: 3,
      title: "Pelo nariz: ão e ãe",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Type ão and ãe, then say the words they spell — o pão, a mão, a mãe — and refuse something with não, the word that goes straight in front of the verb.",
      items: [
        { id: "pt-u1l3-glyphao", type: "glyph", front: "ão", reading: "ao", meaning: null, example: null, hint: "Two letters, one nasal sound, and the sound Portuguese is recognised by. Start to say \"ow\" and route it down your nose: pão, não. Type the tilde first (~ then a), then a plain o." },
        { id: "pt-u1l3-glyphae", type: "glyph", front: "ãe", reading: "ae", meaning: null, example: null, hint: "A nasal \"eye\": mãe. One letter away from ão and a completely different word — mão is a hand, mãe is a mother. Type it: ~ then a, then e." },
        { id: "pt-u1l3-opao", type: "vocab", front: "o pão", reading: "opao", meaning: "bread", example: { jp: "O pão é enorme.", en: "The bread is enormous." }, drill: { jp: "O pão de Ana é enorme", en: "Ana's bread is enormous" }, accept: ["the bread", "loaf"], hint: "The tilde means the air goes out through your NOSE. Start to say \"pow\" and let it come down your nose instead: pãw. Plural is os pães — the tilde shifts to ãe. Not every -ão goes that way: a estação → as estações." },
        { id: "pt-u1l3-amao", type: "vocab", front: "a mão", reading: "amao", meaning: "hand", example: { jp: "É a mão de Ana.", en: "It's Ana's hand." }, drill: { jp: "É a mão de Tiago", en: "It is Tiago's hand" }, accept: ["the hand"], hint: "Same nasal ending: mãw. Note the gender trap — mão ends in -o but is FEMININE, so it is A mão, never o mão." },
        { id: "pt-u1l3-nao", type: "vocab", front: "não", reading: "nao", meaning: "no", example: { jp: "Não é a casa de Ana.", en: "It isn't Ana's house." }, drill: { jp: "Não é a casa de Ana", en: "It is not Ana's house" }, accept: ["not", "no!", "don't"], hint: "One word for both \"no\" and \"not\" — it goes straight in front of the verb: não é = it isn't." },
        { id: "pt-u1l3-amae", type: "vocab", front: "a mãe", reading: "amae", meaning: "mother", example: { jp: "A mãe de Ana é fantástica.", en: "Ana's mother is fantastic." }, drill: { jp: "A mãe de Ana é fantástica", en: "Ana's mother is fantastic" }, accept: ["mum", "mom", "the mother"], hint: "ãe is a nasal \"eye\": mãy. Compare mão (hand) — one letter apart and completely different words, so the tilde is not decoration." },
      ],
    },
    // Lesson 4: the two signs that sit ON a letter — the til and the cedilha —
    // with the words that carry them, and then the OTHER way Portuguese nasalises
    // a vowel: a final m that never closes your lips.
    {
      id: "pt-u1l4",
      unit: 1,
      lesson: 4,
      title: "O til, a cedilha e o m final",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Type ã and ç, read a maçã and o preço, and say sim and um — where a final m nasalises the vowel in front of it instead of closing your lips — beside uma, whose m sits between two vowels and stays an ordinary m.",
      items: [
        { id: "pt-u1l4-glyphatilde", type: "glyph", front: "ã", reading: "a", meaning: null, example: null, hint: "The tilde sends the air out through your NOSE. Say \"ah\" and let it come down your nose instead: maçã, irmã. It is not a stress mark — it is a different vowel. Type it: ~ then a, or hold A on a phone." },
        { id: "pt-u1l4-glyphcedilha", type: "glyph", front: "ç", reading: "c", meaning: null, example: null, hint: "The cedilha — the little tail that forces a soft \"s\" where a plain c would go hard: maçã, preço, açúcar. It appears ONLY before a, o or u; before e and i the c is already soft, so ç is never needed there. Type it: on a Portuguese keyboard ç has its own key, right of L; on a phone hold C." },
        { id: "pt-u1l4-amaca", type: "vocab", front: "a maçã", reading: "amaca", meaning: "apple", example: { jp: "A maçã é deliciosa.", en: "The apple is delicious." }, drill: { jp: "A maçã de Ana é deliciosa", en: "Ana's apple is delicious" }, accept: ["the apple"], hint: "ma-SAN. The tail under the c — the cedilha — forces a soft s sound in front of a, o or u, where a plain c would be hard. Then the nasal ã. Two of this unit's rules in five letters." },
        { id: "pt-u1l4-opreco", type: "vocab", front: "o preço", reading: "opreco", meaning: "price", example: { jp: "O preço não é um problema.", en: "The price isn't a problem." }, drill: { jp: "O preço não é caro", en: "The price is not expensive" }, accept: ["the price", "cost"], hint: "PRE-su. Cedilla again before an o. You never need ç before e or i — c is already soft there, as in cidade." },
        { id: "pt-u1l4-sim", type: "vocab", front: "sim", reading: "sim", meaning: "yes", example: { jp: "Sim, é o livro de Ana.", en: "Yes, it's Ana's book." }, drill: { jp: "Sim é o livro de Ana", en: "Yes it is Ana's book" }, accept: ["yeah", "yep"], hint: "A final m does not close your lips — it just nasalises the vowel before it. \"seeng\", but stop before the g." },
        { id: "pt-u1l4-um", type: "vocab", front: "um", reading: "um", meaning: "a", example: { jp: "É um livro.", en: "It's a book." }, drill: { jp: "É um livro caro", en: "It is an expensive book" }, accept: ["an", "one", "a/an"], hint: "Nasal again: \"oong\" without the g. It means both \"a\" and \"one\". With a feminine noun it becomes UMA — um livro, uma casa — so you will meet uma from here on." },
        { id: "pt-u1l4-uma", type: "vocab", front: "uma", reading: "uma", meaning: "a (feminine)", example: { jp: "É uma casa enorme.", en: "It's an enormous house." }, drill: { jp: "Uma casa e uma rua", en: "A house and a street" }, accept: ["a", "an", "one", "a/an (feminine)"], hint: "The feminine of um — but NOT nasal. Here the m sits between two vowels, so it stays an ordinary m and the u is plain: OO-ma. Only a FINAL m nasalises, as in um. Which one you use is decided by the NOUN, not by you — um livro, uma casa. Portuguese makes you choose a gender every time you say \"a\", which is why every noun in this course is taught with its article attached." },
      ],
    },
    // Lesson 5: the two digraphs, each in front of the everyday words that carry
    // it. a manhã lands here rather than in l4 because it carries ã AND nh, so it
    // belongs in the later of the two lessons — both its marks are already taught.
    {
      id: "pt-u1l5",
      unit: 1,
      lesson: 5,
      title: "Palavras com lh e nh",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Type lh and nh, then read the everyday words that carry them — a mulher, o trabalho, a manhã, o dinheiro — and stop guessing at the two spellings English does not have.",
      items: [
        { id: "pt-u1l5-glyphlh", type: "glyph", front: "lh", reading: "lh", meaning: null, example: null, hint: "One sound, never an l followed by an h: the \"lli\" of \"million\". mulher, trabalho, filho. Your tongue goes flat against the roof of your mouth." },
        { id: "pt-u1l5-glyphnh", type: "glyph", front: "nh", reading: "nh", meaning: null, example: null, hint: "The \"ny\" of \"canyon\". Spanish writes this sound ñ, Portuguese writes it nh: manhã, dinheiro. Same two-letter trick as lh, one nose over." },
        { id: "pt-u1l5-amulher", type: "vocab", front: "a mulher", reading: "amulher", meaning: "woman", example: { jp: "A mulher é elegante.", en: "The woman is elegant." }, drill: { jp: "A mulher de Braga é elegante", en: "The woman from Braga is elegant" }, accept: ["the woman", "wife", "lady"], hint: "moo-LYER. lh is the \"lli\" of \"million\" — one sound, never an l followed by an h. The same word also means \"wife\"." },
        { id: "pt-u1l5-otrabalho", type: "vocab", front: "o trabalho", reading: "otrabalho", meaning: "work", example: { jp: "O trabalho é importante.", en: "The work is important." }, drill: { jp: "O trabalho de Ana é importante", en: "Ana's work is important" }, accept: ["the work", "job", "labour", "labor"], hint: "tra-BA-lyu — lh in the middle, and that final o closing to \"oo\" again. It covers both the work you do and the job you hold." },
        { id: "pt-u1l5-amanha", type: "vocab", front: "a manhã", reading: "amanha", meaning: "morning", example: { jp: "A manhã é tranquila.", en: "The morning is tranquil." }, drill: { jp: "A manhã de Lisboa é tranquila", en: "The Lisbon morning is tranquil" }, accept: ["the morning"], hint: "ma-NYAN. nh is the \"ny\" of \"canyon\" — Spanish writes that sound ñ, Portuguese writes it nh. And the ã at the end is nasal, so the word ends down your nose." },
        { id: "pt-u1l5-odinheiro", type: "vocab", front: "o dinheiro", reading: "odinheiro", meaning: "money", example: { jp: "É o dinheiro de Ana.", en: "It's Ana's money." }, drill: { jp: "É o dinheiro de Tiago", en: "It is Tiago's money" }, accept: ["the money", "cash"], hint: "di-NYAY-ru. Same nh, and the ei is a clean \"ay\". One of the few words you will need on day one." },
      ],
    },
    // Lesson 6: the consonant families that shift — s, ss, and the three r's.
    // NO GLYPH CARDS HERE, ON PURPOSE. s and r are ordinary letters doing different
    // jobs in different positions; there is no new sign to type, so there is nothing
    // for a glyph card to ask. A positional rule is taught through the words that
    // show it, and that is the whole lesson. Ends on the Spanish false friend.
    {
      id: "pt-u1l6",
      unit: 1,
      lesson: 6,
      title: "A família do s e os três erres",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Tell the three jobs of the letter s apart — z, hard s, and the \"sh\" that ends most Portuguese words — and hear the difference between caro and carro. No new letters here: these are ordinary letters changing job by position, so the lesson is taught entirely through words.",
      items: [
        { id: "pt-u1l6-ocarro", type: "vocab", front: "o carro", reading: "ocarro", meaning: "car", example: { jp: "O carro de Ana é rápido.", en: "Ana's car is rapid." }, drill: { jp: "O carro de Tiago é rápido", en: "Tiago's car is rapid" }, accept: ["the car", "automobile"], hint: "rr is the strong r, made at the back of the throat — closer to a French r than to a Spanish rolled one. KA-rru." },
        { id: "pt-u1l6-caro", type: "vocab", front: "caro", reading: "caro", meaning: "expensive", example: { jp: "O carro é caro.", en: "The car is expensive." }, drill: { jp: "O livro não é caro", en: "The book is not expensive" }, accept: ["dear", "costly", "pricey"], hint: "One r between vowels is a light tap of the tongue: KA-ru. The pair to learn by heart — caro is expensive, carro is a car." },
        { id: "pt-u1l6-orato", type: "vocab", front: "o rato", reading: "orato", meaning: "mouse", example: { jp: "Não é um rato!", en: "It isn't a mouse!" }, drill: { jp: "O rato não é um problema", en: "The mouse is not a problem" }, accept: ["the mouse", "rat"], hint: "An r at the START of a word gets the strong throaty sound too, even though it is written single: RRA-tu. FALSE FRIEND — Spanish \"un rato\" is a short while; Portuguese o rato has whiskers. It is also the mouse on your desk." },
        { id: "pt-u1l6-isso", type: "vocab", front: "isso", reading: "isso", meaning: "that", example: { jp: "Isso não é um problema.", en: "That isn't a problem." }, drill: { jp: "Isso não é caro", en: "That is not expensive" }, accept: ["that one", "that thing"], hint: "Double ss is always a hard \"ss\" — EE-su. That is exactly why it is doubled: a single s here would say z, as in casa." },
        { id: "pt-u1l6-acoisa", type: "vocab", front: "a coisa", reading: "acoisa", meaning: "thing", example: { jp: "É uma coisa importante.", en: "It's an important thing." }, drill: { jp: "A coisa não é importante", en: "The thing is not important" }, accept: ["the thing", "stuff"], hint: "KOY-za. Single s between two vowels says z — the same rule as casa. Note uma, the feminine of um from Lesson 4." },
        { id: "pt-u1l6-mais", type: "vocab", front: "mais", reading: "mais", meaning: "more", example: { jp: "É mais caro.", en: "It's more expensive." }, drill: { jp: "O carro é mais caro", en: "The car is more expensive" }, accept: ["most", "plus", "any more"], hint: "MAISH. The third job of s: at the END of a word Portugal says \"sh\", not \"s\". This is why spoken European Portuguese sounds full of shushing — every plural ends this way." },
      ],
    },
  ],
};
