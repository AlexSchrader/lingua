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
//       · o rato — u1l4. PT: mouse. ES "rato": a short while.
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
//         corpus never taught. It is now its own card (u1l2), which is also the
//         honest shape — choosing a gender for "a" is a decision the learner makes
//         on every noun. u1l2 therefore carries 7 cards, inside the 5-8 band.
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
    // Lesson 1: the vowels — and the thing that makes Portugal sound like Portugal.
    // Spanish keeps every unstressed vowel; European Portuguese eats them.
    {
      id: "pt-u1l1",
      unit: 1,
      lesson: 1,
      title: "The vowels Portugal swallows",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the Portuguese vowels — and hear what European Portuguese does to the unstressed ones, which is the single biggest difference from Spanish and from Brazil.",
      items: [
        { id: "pt-u1l1-acasa", type: "vocab", front: "a casa", reading: "acasa", meaning: "house", example: { jp: "A casa é moderna.", en: "The house is modern." }, drill: { jp: "A casa de Ana é enorme", en: "Ana's house is enormous" }, accept: ["the house", "home"], hint: "KA-zuh. Two lessons in one word: the s between vowels says z, and the final unstressed a is a swallowed \"uh\" in Portugal — not the clean \"ah\" Spanish or Brazil would give it." },
        { id: "pt-u1l1-olivro", type: "vocab", front: "o livro", reading: "olivro", meaning: "book", example: { jp: "O livro é importante.", en: "The book is important." }, drill: { jp: "O livro de Ana é caro", en: "Ana's book is expensive" }, accept: ["the book"], hint: "LEE-vru. i is always \"ee\". A final unstressed o is not \"oh\" — it closes right down to \"oo\"." },
        { id: "pt-u1l1-arua", type: "vocab", front: "a rua", reading: "arua", meaning: "street", example: { jp: "A rua é enorme.", en: "The street is enormous." }, drill: { jp: "A rua de Lisboa é enorme", en: "The Lisbon street is enormous" }, accept: ["the street", "road"], hint: "ROO-uh. u is always \"oo\". That opening r is a strong sound made at the back of the throat — Lesson 4 comes back to it." },
        { id: "pt-u1l1-e", type: "vocab", front: "é", reading: "e", meaning: "is", example: { jp: "O livro é fantástico.", en: "The book is fantastic." }, drill: { jp: "A rua é tranquila", en: "The street is tranquil" }, accept: ["it is", "he is", "she is", "it's"], hint: "The link word: X é Y. The accent marks an OPEN e — the vowel of \"bed\", said wide. Say it as \"eh\", never \"ay\"." },
        { id: "pt-u1l1-econj", type: "vocab", front: "e", reading: "e", meaning: "and", example: { jp: "A casa e a rua.", en: "The house and the street." }, drill: { jp: "A casa e a rua", en: "The house and the street" }, accept: ["plus"], hint: "Same letter, no accent, different word — and in Portugal it is said \"ee\", because an unstressed e closes all the way to an i sound. é = is, e = and." },
        { id: "pt-u1l1-de", type: "vocab", front: "de", reading: "de", meaning: "of", example: { jp: "A casa de Ana é enorme.", en: "Ana's house is enormous." }, drill: { jp: "É o livro de Ana", en: "It is Ana's book" }, accept: ["from", "belonging to", "'s"], hint: "\"duh\" — the unstressed e reduces to almost nothing. Portuguese has no apostrophe-s: \"Ana's house\" is a casa DE Ana. Watch it fuse with an article later: de + o = do, de + a = da." },
      ],
    },
    // Lesson 2: the nasals. Nothing in English or Spanish prepares a learner for
    // ão — it is the sound foreigners are recognised by, so it comes early.
    {
      id: "pt-u1l2",
      unit: 1,
      lesson: 2,
      title: "Through the nose: ão, ã, ãe",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read and say the Portuguese nasal vowels — ão, ã, ãe and the -m endings — which no other language you know has, and say yes and no.",
      items: [
        { id: "pt-u1l2-opao", type: "vocab", front: "o pão", reading: "opao", meaning: "bread", example: { jp: "O pão é enorme.", en: "The bread is enormous." }, drill: { jp: "O pão de Ana é enorme", en: "Ana's bread is enormous" }, accept: ["the bread", "loaf"], hint: "The tilde means the air goes out through your NOSE. Start to say \"pow\" and let it come down your nose instead: pãw. Plural swaps it for the õe spelling — os pães." },
        { id: "pt-u1l2-amao", type: "vocab", front: "a mão", reading: "amao", meaning: "hand", example: { jp: "É a mão de Ana.", en: "It's Ana's hand." }, drill: { jp: "É a mão de Tiago", en: "It is Tiago's hand" }, accept: ["the hand"], hint: "Same nasal ending: mãw. Note the gender trap — mão ends in -o but is FEMININE, so it is A mão, never o mão." },
        { id: "pt-u1l2-nao", type: "vocab", front: "não", reading: "nao", meaning: "no", example: { jp: "Não é a casa de Ana.", en: "It isn't Ana's house." }, drill: { jp: "Não é a casa de Ana", en: "It is not Ana's house" }, accept: ["not", "no!", "don't"], hint: "One word for both \"no\" and \"not\" — it goes straight in front of the verb: não é = it isn't." },
        { id: "pt-u1l2-amae", type: "vocab", front: "a mãe", reading: "amae", meaning: "mother", example: { jp: "A mãe de Ana é fantástica.", en: "Ana's mother is fantastic." }, drill: { jp: "A mãe de Ana é fantástica", en: "Ana's mother is fantastic" }, accept: ["mum", "mom", "the mother"], hint: "ãe is a nasal \"eye\": mãy. Compare mão (hand) — one letter apart and completely different words, so the tilde is not decoration." },
        { id: "pt-u1l2-sim", type: "vocab", front: "sim", reading: "sim", meaning: "yes", example: { jp: "Sim, é o livro de Ana.", en: "Yes, it's Ana's book." }, drill: { jp: "Sim é o livro de Ana", en: "Yes it is Ana's book" }, accept: ["yeah", "yep"], hint: "A final m does not close your lips — it just nasalises the vowel before it. \"seeng\", but stop before the g." },
        { id: "pt-u1l2-um", type: "vocab", front: "um", reading: "um", meaning: "a", example: { jp: "É um livro.", en: "It's a book." }, drill: { jp: "É um livro caro", en: "It is an expensive book" }, accept: ["an", "one", "a/an"], hint: "Nasal again: \"oong\" without the g. It means both \"a\" and \"one\". With a feminine noun it becomes UMA — um livro, uma casa — so you will meet uma from here on." },
        { id: "pt-u1l2-uma", type: "vocab", front: "uma", reading: "uma", meaning: "a (feminine)", example: { jp: "É uma casa enorme.", en: "It's an enormous house." }, drill: { jp: "Uma casa e uma rua", en: "A house and a street" }, accept: ["a", "an", "one", "a/an (feminine)"], hint: "The feminine of um, and just as nasal: OO-ma. Which one you use is decided by the NOUN, not by you — um livro, uma casa. Portuguese makes you choose a gender every time you say \"a\", which is why every noun in this course is taught with its article attached." },
      ],
    },
    // Lesson 3: the three spellings English has no equivalent for.
    {
      id: "pt-u1l3",
      unit: 1,
      lesson: 3,
      title: "lh, nh and the cedilla",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the three spellings Portuguese uses that English does not have — lh, nh and ç — and stop guessing at words like mulher and dinheiro.",
      items: [
        { id: "pt-u1l3-amulher", type: "vocab", front: "a mulher", reading: "amulher", meaning: "woman", example: { jp: "A mulher é elegante.", en: "The woman is elegant." }, drill: { jp: "A mulher de Braga é elegante", en: "The woman from Braga is elegant" }, accept: ["the woman", "wife", "lady"], hint: "moo-LYER. lh is the \"lli\" of \"million\" — one sound, never an l followed by an h. The same word also means \"wife\"." },
        { id: "pt-u1l3-otrabalho", type: "vocab", front: "o trabalho", reading: "otrabalho", meaning: "work", example: { jp: "O trabalho é importante.", en: "The work is important." }, drill: { jp: "O trabalho de Ana é importante", en: "Ana's work is important" }, accept: ["the work", "job", "labour", "labor"], hint: "tra-BA-lyu — lh in the middle, and that final o closing to \"oo\" again. It covers both the work you do and the job you hold." },
        { id: "pt-u1l3-amanha", type: "vocab", front: "a manhã", reading: "amanha", meaning: "morning", example: { jp: "A manhã é tranquila.", en: "The morning is tranquil." }, drill: { jp: "A manhã de Lisboa é tranquila", en: "The Lisbon morning is tranquil" }, accept: ["the morning"], hint: "ma-NYAN. nh is the \"ny\" of \"canyon\" — Spanish writes that sound ñ, Portuguese writes it nh. And the ã at the end is nasal, so the word ends down your nose." },
        { id: "pt-u1l3-odinheiro", type: "vocab", front: "o dinheiro", reading: "odinheiro", meaning: "money", example: { jp: "É o dinheiro de Ana.", en: "It's Ana's money." }, drill: { jp: "É o dinheiro de Tiago", en: "It is Tiago's money" }, accept: ["the money", "cash"], hint: "di-NYAY-ru. Same nh, and the ei is a clean \"ay\". One of the few words you will need on day one." },
        { id: "pt-u1l3-amaca", type: "vocab", front: "a maçã", reading: "amaca", meaning: "apple", example: { jp: "A maçã é deliciosa.", en: "The apple is delicious." }, drill: { jp: "A maçã de Ana é deliciosa", en: "Ana's apple is delicious" }, accept: ["the apple"], hint: "ma-SAN. The tail under the c — the cedilha — forces a soft s sound in front of a, o or u, where a plain c would be hard. Then the nasal ã. Two of this unit's rules in five letters." },
        { id: "pt-u1l3-opreco", type: "vocab", front: "o preço", reading: "opreco", meaning: "price", example: { jp: "O preço não é um problema.", en: "The price isn't a problem." }, drill: { jp: "O preço não é caro", en: "The price is not expensive" }, accept: ["the price", "cost"], hint: "PRE-su. Cedilla again before an o. You never need ç before e or i — c is already soft there, as in cidade." },
      ],
    },
    // Lesson 4: the consonant families that shift — s, ss, and the three r's.
    // Ends on the Spanish false friend, which is the point of the whole unit.
    {
      id: "pt-u1l4",
      unit: 1,
      lesson: 4,
      title: "The s family and the three r's",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Tell the three jobs of the letter s apart — z, hard s, and the \"sh\" that ends most Portuguese words — and hear the difference between caro and carro.",
      items: [
        { id: "pt-u1l4-ocarro", type: "vocab", front: "o carro", reading: "ocarro", meaning: "car", example: { jp: "O carro de Ana é rápido.", en: "Ana's car is rapid." }, drill: { jp: "O carro de Tiago é rápido", en: "Tiago's car is rapid" }, accept: ["the car", "automobile"], hint: "rr is the strong r, made at the back of the throat — closer to a French r than to a Spanish rolled one. KA-rru." },
        { id: "pt-u1l4-caro", type: "vocab", front: "caro", reading: "caro", meaning: "expensive", example: { jp: "O carro é caro.", en: "The car is expensive." }, drill: { jp: "O livro não é caro", en: "The book is not expensive" }, accept: ["dear", "costly", "pricey"], hint: "One r between vowels is a light tap of the tongue: KA-ru. The pair to learn by heart — caro is expensive, carro is a car." },
        { id: "pt-u1l4-orato", type: "vocab", front: "o rato", reading: "orato", meaning: "mouse", example: { jp: "Não é um rato!", en: "It isn't a mouse!" }, drill: { jp: "O rato não é um problema", en: "The mouse is not a problem" }, accept: ["the mouse", "rat"], hint: "An r at the START of a word gets the strong throaty sound too, even though it is written single: RRA-tu. FALSE FRIEND — Spanish \"un rato\" is a short while; Portuguese o rato has whiskers. It is also the mouse on your desk." },
        { id: "pt-u1l4-isso", type: "vocab", front: "isso", reading: "isso", meaning: "that", example: { jp: "Isso não é um problema.", en: "That isn't a problem." }, drill: { jp: "Isso não é caro", en: "That is not expensive" }, accept: ["that one", "that thing"], hint: "Double ss is always a hard \"ss\" — EE-su. That is exactly why it is doubled: a single s here would say z, as in casa." },
        { id: "pt-u1l4-acoisa", type: "vocab", front: "a coisa", reading: "acoisa", meaning: "thing", example: { jp: "É uma coisa importante.", en: "It's an important thing." }, drill: { jp: "A coisa não é importante", en: "The thing is not important" }, accept: ["the thing", "stuff"], hint: "KOY-za. Single s between two vowels says z — the same rule as casa. Note uma, the feminine of um from Lesson 2." },
        { id: "pt-u1l4-mais", type: "vocab", front: "mais", reading: "mais", meaning: "more", example: { jp: "É mais caro.", en: "It's more expensive." }, drill: { jp: "O carro é mais caro", en: "The car is more expensive" }, accept: ["most", "plus", "any more"], hint: "MAISH. The third job of s: at the END of a word Portugal says \"sh\", not \"s\". This is why spoken European Portuguese sounds full of shushing — every plural ends this way." },
      ],
    },
  ],
};
