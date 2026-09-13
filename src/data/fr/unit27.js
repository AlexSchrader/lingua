// FR Unit 27 (file/id) — Les sons ("The sounds of French") — A1, and it runs FIRST.
//
// ⚠️ id number ≠ order, deliberately. The unit id is fr-u27 because it was authored
// last, but `order: 1` puts it at the START of the French climb — the sound-to-spelling
// map has to come before the 545 words that use it. The contract validates unit ORDER
// for contiguity and only cross-checks the id number against `lesson.unit`; the two are
// independent (contract.js:125-126, 283-291 for order contiguity; :137, 169-170 for the id/lesson.unit cross-check — the old citation here pointed at the language unlock check and the kana stroke rule). Taking that route instead of renumbering
// fr-u1…u26 means NO item id changes and therefore no mastery wipe — ids are the mastery
// key, so renumbering would have been free only until French ships, and irreversible after.
//
// WHY THIS UNIT EXISTS: French's day-one barrier isn't script — the learner already reads
// Latin letters — it's that those letters lie. `août` is two syllables and neither is
// "ay-oh-oot"; `s'il vous plaît` is "seel-voo-pleh"; final consonants mostly vanish.
// This is the Latin-script counterpart of Japanese's kana units. It is NOT a pre-a1 band
// and it uses NO trace card — see CONTENT.md → "Script policy".
//
// THE CARDS ARE REAL WORDS **AND** LETTERS — both, since 2026-09-13.
//
// History, because the file has now swung twice and the middle state still reads as a rule.
// 2026-09-05: l1 and l2 used to front the graphemes themselves as VOCAB items (front "é",
// meaning "é — the 'ay' sound"), which made the meaning a DESCRIPTION rather than a
// translation. Two cards broke on that: type:meaning asked the learner to type a definition,
// and type:produce showed a prompt containing its own answer. So every letter card was
// REPLACED by an everyday word carrying the sound, and the comment here concluded that "the
// sounds unit uses real vocabulary, not letter drills".
//
// ⚠ THAT CONCLUSION IS NO LONGER THE RULE, AND IT WAS NEVER THE WHOLE PROBLEM. The 2026-09-05
// defect was the ITEM TYPE, not the idea of teaching a letter: a letter modelled as vocab
// needs a meaning, and a letter has none. `type: "glyph"` (contract.js:220-231) fixes exactly
// that at the schema level — meaning and example must both be null, so no meaning card and no
// reverse card can route, and the sound lives in the hint. Alex, 2026-09-13: "unit one gets
// users able to pronounce the accents before ever given a word", and the accent lessons are
// "listen, speak and type the accent, not the definition — the user has to find it on their
// keyboard." So each glyph hint below carries the phone / Mac / Windows keystroke.
//
// THE SHAPE IS **ADD, NEVER REPLACE** (RUNBOOK §4). The glyph cards sit FIRST in items[] —
// teach order is authored order, so the learner meets é è ê ô û ï ç œ before a single word — and
// all 21 original word cards are untouched. That is not politeness: every one of those 21
// fronts is taught in exactly ONE place in the whole 3,111-word French corpus (checked with
// `npm run taught -- fr`), so replacing a word card deletes that word from the course.
//
// ⚠ à HAS NO GLYPH CARD. Its front is already taught by fr-u6l2-a (vocab, "to/at"), and a
// second card would be one lexeme with two mastery tracks. â, î and ù have none either, and
// that is a judgement rather than an oversight: neither the circumflex on a/i nor the grave
// on u changes the sound, so an ear card has nothing to grade and the learner meets no new
// rule — they are taught inside the ê and è hints instead. ï DOES earn its own card, because
// the tréma is a distinct rule (it splits a vowel pair) and it is audible.
//
// THE WORDS ARE CONSTRAINED BY THE UNIT'S POSITION. This unit runs first but was authored
// last, so units 1–26 had already claimed almost every obvious exemplar — l'été, la mère,
// la forêt, le garçon, le café, la fenêtre, la sœur, l'eau, trois, oui, la montagne and
// la fille are all taught elsewhere, and front uniqueness is a hard error. The words below
// are the A1 survivors of that search, each picked because its sound is the salient thing
// about it. Do not swap one for a "better" word without re-running `npm run taught -- fr`.
//
// ⚠️ THAT CONSTRAINT IS AN ARTEFACT, NOT A LAW, AND IT IS LOGGED FOR ALEX. RUNBOOK-new-language.md:373
// says word ownership goes to the LOWER SLOT NUMBER, and RUNBOOK-new-language.md:495 says outright that "a
// sounds/script unit owning ordinary words is correct, not a bug". This unit is order 1, so
// under the repo's own rule it has the higher claim on l'été (15), la mère (4), le café (6),
// la fille (4) and the rest — they should defer to it, not the other way round. They cannot
// be reclaimed from inside this unit: front uniqueness is a hard validate error, so taking
// them means editing units 3-18 too, which is a different job. Two things made the inversion
// easy to miss: the unit's id number (27) is not its order (1), and `npm run taught -- fr`
// reports this unit as u27 because taught-words.mjs parses the id, while lint and
// TAUGHT-WORDS.md sort by order. Same unit, two slot numbers, 26 apart.
//
// The EXAMPLE sentences still show words for their spelling rather than as vocabulary to
// acquire — that is how phonics is taught everywhere, and it is a deliberate exception to
// the teach-before-use rule, not an oversight.
//
// AUDIO — THE 14 WORD CARDS HAVE CLIPS; THE 15 NEW GLYPH CARDS DO NOT, YET.
//
// ⚠ This block used to read "THESE 14 ITEMS ARE DELIBERATELY SILENT, AND MUST BE RE-RECORDED",
// and that is now WRONG — it was true only between 2026-09-05 and 2026-09-08. The history:
// clips are keyed by ITEM ID with no text hash, so the 2026-09-05 front rewrite left 14 mp3s
// in place still pronouncing the OLD bare letters, and all 14 routed to an ear card where the
// clip said "é" and the graded answer was `lebebe`. They were deleted — and then RE-GENERATED
// in 51072a45 (2026-09-08, "fr 14"). Verified on this branch: all 14 mp3s exist in
// public/audio/fr and all 14 ids are in src/data/audioManifest.js. Nothing here is silent.
//
// The NEW glyph ids are the silent ones, and only because they have never been recorded. They
// go into the single cross-language glyph audio run. Until it runs, `hasAudio()` is false for
// them, teach/listen/speak do not route, and the cards work through type:produce plus the
// written respelling in each hint.
//
// ⚠ WHEN THAT RUN HAPPENS, GENERATE THE FRENCH GLYPHS AS THE LETTER'S NAME, NOT ITS BARE SOUND.
// è and ê are homophones in modern French, and so are au and eau; a clip of the bare sound
// leaves listen:type ungradeable, because the learner hears "eh" and cannot know which of the
// two to type. "e accent grave" / "e accent circonflexe" / "o e collés" are distinguishable
// by ear. That is an audio-run decision, logged here rather than worked around in content.
//
// WHAT THE WORD CARDS STILL CANNOT TEST — AND WHAT THE GLYPH CARDS NOW DO.
//
// Unchanged, and deliberate: `checkProduce` still accepts the accent-stripped spelling of the
// seven l1 WORD fronts (`le bebe`, `la creme`, `la lecon`, `allo`, `la flute`, `l'oeil`…),
// because `normalizeReading` folds diacritics for every non-ja language and
// `produceAllowsRomaji` is true off `stage: a1`. On a word card the accent is incidental to a
// word the learner is actually there to learn.
//
// ⚠ BUT THE CLAIM THAT USED TO FOLLOW — "so the lesson titled 'The accents' cannot currently
// require one" — IS NO LONGER TRUE, and neither is "the old bare-letter cards folded the same
// way". `foldWouldEraseAnswer` (src/store/answer.js:86) fires on any ONE-CHARACTER front whose
// fold differs from itself, and then both `checkReading` and `checkProduce` demand the exact
// front. That is precisely the eight glyph cards in l1. Measured on this branch for front "é":
// `checkProduce("e")` false, `checkReading("e")` false, `checkProduce("é")` true. The accents
// lesson now requires the accent — which is the point of Alex's "the user has to find it on
// their keyboard".
//
// ⚠ UNRESOLVED, AND NOT A FRENCH PROBLEM: `reading` IS ASKED TO DO TWO INCOMPATIBLE JOBS.
// The contract calls a glyph's `reading` its ASCII fold; RUNBOOK §4 calls the same field "the
// SOUND, and it is what the listening card checks". Those are different things, and the engine
// uses it for both: `listen:type` GRADES against it while `type:produce` PROMPTS with it. So é,
// è and ê — three letters, one ASCII fold — give one identical prompt "e" with three different
// correct answers, and the learner guesses 1 in 3. Portuguese is worse (á â ã à all fold to a).
// No value of `reading` fixes it: è and ê are TRUE homophones in modern French, so a field that
// must equal the sound cannot separate them, and a field that separates them is not the sound.
// Naming the letters ("e accent aigu") separates all three and is what the audio run needs
// anyway — but it redefines the field for all five languages at once, so it is not one seat's
// call to make. ✅ `e86c0df9` (2026-09-13) settled HALF of this: `reading` stays the ASCII fold,
// and the Latin-glyph recall card now compares readings instead of the fold-hijacked
// `checkReading`, so the card no longer rejects the answer it prints. The COLLISION is untouched,
// and so is its mirror image: because a multigraph's ASCII fold IS its front, that same card
// shows `eau` and accepts `eau` — a copy task on 7 of these 15. LOGGED, not worked around here:
// Feature CC backlog, BUILD-CHECKLIST.md.
// œ counts as ONE character (U+0153), so it is strict too: on its glyph card only œ passes, and
// the hint says so. The l2 clusters (eau, au, ai, oi, ui, gn, ill) are multi-character, so they
// fall through to the fold — but their `reading` IS their own ASCII fold, so typing the cluster
// is still exact. Verified for all 15 new fronts before authoring.
export const FR_UNIT27 = {
  id: "fr-u27",
  lang: "fr",
  title: "Les sons",
  order: 1,
  stage: "a1",
  lessons: [
    {
      id: "fr-u27l1",
      unit: 27,
      lesson: 1,
      title: "The accents",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read, say and type the eight French accent letters — é è ê ô û ï ç œ — then read seven everyday words built on them.",
      items: [
        { id: "fr-u27l1-glypheaigu", type: "glyph", front: "é", reading: "e", meaning: null, example: null, hint: "The closed \"ay\" of café — and the accent is what makes the letter sound at all: chanté is \"shon-TAY\", chante is \"shont\". Type it: hold E on a phone, Option+e then e on a Mac, Alt+0233 on Windows." },
        { id: "fr-u27l1-glyphegrave", type: "glyph", front: "è", reading: "e", meaning: null, example: null, hint: "The open \"eh\" of \"bed\": très is \"treh\". One accent apart from é — é closes the mouth, è opens it. The same grave rides on à and où too, where it changes no sound at all and only separates look-alikes. Type it: hold E on a phone, Option+` then e on a Mac, Alt+0232 on Windows." },
        { id: "fr-u27l1-glyphecirc", type: "glyph", front: "ê", reading: "e", meaning: null, example: null, hint: "Sounds the same as è — open \"eh\". The hat marks a letter that fell out of the word centuries ago, usually an s: forêt was forest, hôtel was hostel. Type it: hold E on a phone, Option+i then e on a Mac, Alt+0234 on Windows." },
        { id: "fr-u27l1-glyphocirc", type: "glyph", front: "ô", reading: "o", meaning: null, example: null, hint: "A long, closed \"oh\": hôpital, bientôt. Same lost s as ê — hôpital was hospital. Type it: hold O on a phone, Option+i then o on a Mac, Alt+0244 on Windows." },
        { id: "fr-u27l1-glyphucirc", type: "glyph", front: "û", reading: "u", meaning: null, example: null, hint: "The French u, which has no English twin: round your lips for \"oo\", then say \"ee\" without moving them. The hat does not change that sound — sûr and sur are said alike. Type it: hold U on a phone, Option+i then u on a Mac, Alt+0251 on Windows." },
        { id: "fr-u27l1-glyphitrema", type: "glyph", front: "ï", reading: "i", meaning: null, example: null, hint: "The tréma is the one mark that is not an accent: it splits a vowel pair that would otherwise fuse into one sound. maïs is \"ma-EES\" in two pieces, not the \"eh\" of mais, and naïf is \"na-EEF\". The same mark rides on other vowels too — Noël, aigüe — but ï is the one you meet most. Type it: hold I on a phone, Option+u then i on a Mac, Alt+0239 on Windows." },
        { id: "fr-u27l1-glyphcedille", type: "glyph", front: "ç", reading: "c", meaning: null, example: null, hint: "c is hard before a, o and u — without the tail, leçon would be \"luh-KON\". The cedilla forces the soft \"s\": ça, garçon, français. It never appears before e or i, where c is already soft. Type it: hold C on a phone, Option+c on a Mac, Alt+0231 on Windows." },
        { id: "fr-u27l1-glypholigature", type: "glyph", front: "œ", reading: "oe", meaning: null, example: null, hint: "One letter, not two — o and e fused, said \"uh\": sœur, cœur, l'œil. On this card you must type the real œ; inside an ordinary word oe is still accepted. Type it: hold O on a phone, Option+q on a Mac, Alt+0156 on Windows." },
        { id: "fr-u27l1-eaigu", type: "vocab", front: "le bébé", reading: "lebebe", meaning: "baby", example: { jp: "Le bébé est très petit.", en: "The baby is very small — \"bay-BAY\"" }, drill: { jp: "Le bébé est très petit", en: "The baby is very small" }, accept: ["the baby", "baby"], hint: "Two é, two \"ay\" sounds: bébé is \"bay-BAY\". The accent is not decoration — it tells you the e is pronounced at all. A final e with no accent is usually silent." },
        { id: "fr-u27l1-lacreme", type: "vocab", front: "la crème", reading: "lacreme", meaning: "cream", example: { jp: "La crème est dans le café.", en: "The cream is in the coffee — \"krem\"" }, drill: { jp: "La crème est très bonne", en: "The cream is very good" }, accept: ["the cream", "cream"], hint: "è is open, like the e in \"bed\": crème is \"krem\". Compare it with é — bébé closes, crème opens. One accent apart." },
        { id: "fr-u27l1-ecirconflexe", type: "vocab", front: "la crêpe", reading: "lacrepe", meaning: "pancake", example: { jp: "La crêpe est chaude.", en: "The pancake is hot — \"krep\"" }, drill: { jp: "La crêpe est très chaude", en: "The pancake is very hot" }, accept: ["a pancake", "crepe"], hint: "ê sounds like è — \"krep\". The little hat usually marks a letter that fell out of the word centuries ago, most often an s: crêpe was crespe, forêt was forest, hôtel was hostel." },
        { id: "fr-u27l1-lalecon", type: "vocab", front: "la leçon", reading: "lalecon", meaning: "lesson", example: { jp: "La leçon est facile.", en: "The lesson is easy — \"luh-SON\"" }, drill: { jp: "La leçon est très facile", en: "The lesson is very easy" }, accept: ["the lesson", "lesson"], hint: "c is hard before a, o and u — without the tail, leçon would be \"luh-KON\". The cedilla forces it soft. And that final -on is NASAL: send it through your nose and never let the n touch your tongue." },
        { id: "fr-u27l1-ocirconflexe", type: "vocab", front: "allô", reading: "allo", meaning: "hello on the phone", example: { jp: "Allô, c'est Marie.", en: "Hello, it's Marie — answering the telephone" }, drill: { jp: "Allô c'est Marie", en: "Hello it's Marie" }, accept: [], hint: "ô is a long, closed \"oh\". allô belongs to the telephone and nowhere else — face to face it is always bonjour, which is why this card's meaning spells out the phone." },
        { id: "fr-u27l1-ucirconflexe", type: "vocab", front: "la flûte", reading: "laflute", meaning: "flute", example: { jp: "Elle joue de la flûte.", en: "She plays the flute — jouer DE for an instrument" }, drill: { jp: "Elle joue de la flûte", en: "She plays the flute" }, accept: ["the flute", "flute"], hint: "French u has no English twin and no English respelling can show it: round your lips as if for \"oo\", then say \"ee\" without moving them. The hat does not change that sound — here it marks a vowel that contracted centuries ago, not a lost s." },
        { id: "fr-u27l1-oe", type: "vocab", front: "l'œil", reading: "loeil", meaning: "one eye", example: { jp: "J'ai quelque chose dans l'œil.", en: "I have something in my eye — one syllable, \"luhy\"" }, drill: { jp: "J'ai quelque chose dans l'œil", en: "I have something in my eye" }, accept: [], hint: "œ is one letter, not two — and here you can always type it as oe: œil and oeil both pass. One eye is l'œil, said \"luhy\" in a single syllable; two are les yeux, which is completely irregular." },
      ],
    },
    {
      id: "fr-u27l2",
      unit: 27,
      lesson: 2,
      title: "Letters that team up",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read, say and type the seven multi-letter sounds — eau, au, ai, oi, ui, gn, ill — then read seven everyday words built on them.",
      items: [
        { id: "fr-u27l2-glypheau", type: "glyph", front: "eau", reading: "eau", meaning: null, example: null, hint: "Three letters, one sound, and not one of them is o-ish in English: eau is simply \"oh\". l'eau is \"loh\", and le bureau ends \"-ROH\" — its first vowel is the flûte u, not an English \"boo\"." },
        { id: "fr-u27l2-glyphau", type: "glyph", front: "au", reading: "au", meaning: null, example: null, hint: "The same \"oh\" as eau, one letter shorter: au revoir, jaune, chaud. Wherever you see au, stop reading the a and the u separately." },
        { id: "fr-u27l2-glyphai", type: "glyph", front: "ai", reading: "ai", meaning: null, example: null, hint: "The open \"eh\" of è, not \"ay\": le lait is \"leh\" and la maison is \"meh-ZON\". Two things change it: the verb ending -ai says \"ay\" (j'ai, j'irai), and ai before m or n turns NASAL — le pain and la main rhyme with each other, not with fraise." },
        { id: "fr-u27l2-glyphoi", type: "glyph", front: "oi", reading: "oi", meaning: null, example: null, hint: "\"wah\", never \"oy\": moi is \"mwah\", trois is \"trwah\", le soir is \"swahr\". One famous exception: oignon is said \"o-NYON\" — that oi is not an oi at all." },
        { id: "fr-u27l2-glyphui", type: "glyph", front: "ui", reading: "ui", meaning: null, example: null, hint: "A single glide, and it starts with the flûte u, not an English w: set your lips for \"oo\" and run straight into \"ee\". That is exactly what separates lui from Louis. huit, la nuit, aujourd'hui." },
        { id: "fr-u27l2-glyphgn", type: "glyph", front: "gn", reading: "gn", meaning: null, example: null, hint: "One sound, the \"ny\" of English \"onion\" or Spanish ñ: la montagne, magnifique, l'Espagne. A handful of learned words keep the g and n separate (diagnostic, stagner) — rare enough to meet one at a time." },
        { id: "fr-u27l2-glyphill", type: "glyph", front: "ill", reading: "ill", meaning: null, example: null, hint: "\"ee-y\", not the English \"ill\": la fille is \"fee-y\" and travailler is \"tra-va-YAY\". Learn the exceptions early — in ville, mille and tranquille it really is \"eel\"." },
        { id: "fr-u27l2-eau", type: "vocab", front: "la peau", reading: "lapeau", meaning: "skin", example: { jp: "La peau du bébé est douce.", en: "The baby's skin is soft — \"poh\"" }, drill: { jp: "La peau du bébé est douce", en: "The baby's skin is soft" }, accept: ["the skin"], hint: "Three letters, one sound, and not one of them is o-ish in English: eau is simply \"oh\", so peau is \"poh\"." },
        { id: "fr-u27l2-au", type: "vocab", front: "haut", reading: "haut", meaning: "high", example: { jp: "L'arbre est très haut.", en: "The tree is very high — the whole word is just \"oh\"" }, drill: { jp: "L'arbre est très haut", en: "The tree is very high" }, accept: ["high up"], hint: "au is the same \"oh\" as eau, and haut is silent at both ends — no h, no t, just \"oh\". But that h still blocks elision and liaison: le haut, en haut, never l'haut. It is an h aspiré, not the silent h of lesson 3." },
        { id: "fr-u27l2-ai", type: "vocab", front: "la fraise", reading: "lafraise", meaning: "strawberry", example: { jp: "La fraise est rouge.", en: "The strawberry is red — \"frez\"" }, drill: { jp: "La fraise est très rouge", en: "The strawberry is very red" }, accept: ["the strawberry", "strawberry"], hint: "ai is usually the open \"eh\" of è: fraise is \"frez\" and le lait is \"leh\". The verb ending -ai is the exception and says \"ay\" — j'ai, je serai, j'irai." },
        { id: "fr-u27l2-oi", type: "vocab", front: "la poire", reading: "lapoire", meaning: "pear", example: { jp: "La poire est très bonne.", en: "The pear is very good — \"pwahr\"" }, drill: { jp: "La poire est sur la table", en: "The pear is on the table" }, accept: ["the pear", "pear"], hint: "oi is always \"wah\", never \"oy\": poire is \"pwahr\", moi is \"mwah\", trois is \"trwah\"." },
        { id: "fr-u27l2-ui", type: "vocab", front: "le biscuit", reading: "lebiscuit", meaning: "biscuit", example: { jp: "Le biscuit est très bon.", en: "The biscuit is very good — ui is one glide" }, drill: { jp: "Le biscuit est très bon", en: "The biscuit is very good" }, accept: ["cookie"], hint: "ui is a single glide, and it starts with the flûte u, not an English w: set your lips for \"oo\" and run straight into \"ee\". That is exactly what separates lui from Louis. The final t is silent." },
        { id: "fr-u27l2-gn", type: "vocab", front: "espagnol", reading: "espagnol", meaning: "Spanish", example: { jp: "Mon ami est espagnol.", en: "My friend is Spanish — \"es-pa-NYOL\"" }, drill: { jp: "Mon ami est espagnol", en: "My friend is Spanish" }, accept: [], hint: "gn is one sound, the \"ny\" of Spanish ñ or the ni in English \"onion\" — never a g followed by an n." },
        { id: "fr-u27l2-ill", type: "vocab", front: "le papillon", reading: "lepapillon", meaning: "butterfly", example: { jp: "Le papillon est jaune.", en: "The butterfly is yellow — \"pa-pee-YON\"" }, drill: { jp: "Le papillon est jaune", en: "The butterfly is yellow" }, accept: ["the butterfly", "butterfly"], hint: "ill is \"ee-y\", not the English \"ill\": papillon is \"pa-pee-YON\" and fille is \"fee-y\". Learn the exceptions early though — in ville, mille and village it really is \"eel\"." },
      ],
    },
    {
      id: "fr-u27l3",
      unit: 27,
      lesson: 3,
      title: "What you don't say",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Handle silent French: silent final consonants, silent h, the e muet, liaison and elision.",
      items: [
        { id: "fr-u27l3-consonnefinale", type: "vocab", front: "la consonne finale", reading: "laconsonnefinale", meaning: "the silent final consonant", example: { jp: "petit, grand, beaucoup", en: "small, big, a lot — the last letter is silent in all three" }, drill: { jp: "La consonne finale dans petit", en: "The final consonant in petit" }, accept: ["final consonant", "silent consonant"], hint: "Most final consonants are silent. The rough rule of thumb: c, r, f and l often DO sound — remember the word CaReFuL." },
        { id: "fr-u27l3-hmuet", type: "vocab", front: "le h muet", reading: "lehmuet", meaning: "the silent h", example: { jp: "l'homme, l'heure, l'hôtel", en: "the man, the hour, the hotel — no h sound at all" }, drill: { jp: "Le h muet dans l'homme", en: "The silent h in l'homme" }, accept: ["silent h", "mute h"], hint: "French has no h sound. That's why le becomes l' in front of it: l'homme, not \"le homme\"." },
        { id: "fr-u27l3-emuet", type: "vocab", front: "le e muet", reading: "leemuet", meaning: "the silent e", example: { jp: "la table", en: "the table — \"tabl\", not \"tab-luh\"" }, drill: { jp: "Le e muet dans la table", en: "The silent e in la table" }, accept: ["silent e", "mute e"], hint: "A final e with no accent is usually silent — which is exactly why é needs its accent to be heard." },
        { id: "fr-u27l3-elision", type: "vocab", front: "l'élision", reading: "lelision", meaning: "elision", example: { jp: "je + ai = j'ai", en: "I have — the e is dropped and replaced by an apostrophe" }, drill: { jp: "L'élision dans j'ai", en: "Elision in j'ai" }, accept: ["the elision"], hint: "You've done this forty times already: j'ai, c'est, l'eau, s'il, d'accord. French refuses to let two vowels collide." },
        { id: "fr-u27l3-liaison", type: "vocab", front: "la liaison", reading: "laliaison", meaning: "liaison", example: { jp: "vous avez", en: "you have — said \"voo-za-vay\", the silent s wakes up" }, drill: { jp: "La liaison dans vous avez", en: "Liaison in vous avez" }, accept: ["the liaison", "linking"], hint: "A silent final consonant comes back to life before a vowel: les amis = \"lay-za-mee\", nous avons = \"noo-za-von\"." },
        { id: "fr-u27l3-accentaigu", type: "vocab", front: "l'accent aigu", reading: "laccentaigu", meaning: "the acute accent", example: { jp: "é dans café", en: "é as in café — the one that rises to the right" }, drill: { jp: "L'accent aigu dans café", en: "The acute accent in café" }, accept: ["acute accent", "acute"] },
        { id: "fr-u27l3-accentgrave", type: "vocab", front: "l'accent grave", reading: "laccentgrave", meaning: "the grave accent", example: { jp: "è dans très", en: "è as in très — the one that falls to the right" }, drill: { jp: "L'accent grave dans très", en: "The grave accent in très" }, accept: ["grave accent", "grave"], hint: "It also separates look-alikes: a/à, ou/où, la/là. Same letters, different words." },
      ],
    },
  ],
};
