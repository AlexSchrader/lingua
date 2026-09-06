// FR Unit 27 (file/id) — Les sons ("The sounds of French") — A1, and it runs FIRST.
//
// ⚠️ id number ≠ order, deliberately. The unit id is fr-u27 because it was authored
// last, but `order: 1` puts it at the START of the French climb — the sound-to-spelling
// map has to come before the 545 words that use it. The contract validates unit ORDER
// for contiguity and only cross-checks the id number against `lesson.unit`; the two are
// independent (contract.js:103-118, 237-247). Taking that route instead of renumbering
// fr-u1…u26 means NO item id changes and therefore no mastery wipe — ids are the mastery
// key, so renumbering would have been free only until French ships, and irreversible after.
//
// WHY THIS UNIT EXISTS: French's day-one barrier isn't script — the learner already reads
// Latin letters — it's that those letters lie. `août` is two syllables and neither is
// "ay-oh-oot"; `s'il vous plaît` is "seel-voo-pleh"; final consonants mostly vanish.
// This is the Latin-script counterpart of Japanese's kana units. It is NOT a pre-a1 band
// and it uses NO trace card — see CONTENT.md → "Script policy".
//
// THE CARDS ARE REAL WORDS, NOT LETTERS. Rewritten 2026-09-05: l1 and l2 used to front
// the graphemes themselves (front "é", meaning "é — the 'ay' sound"), which made the
// meaning a DESCRIPTION rather than a translation. Two cards broke on that: type:meaning
// asked the learner to type a definition, and type:produce showed a prompt that contained
// its own answer. Every other language's sounds unit already does this correctly — es-u1
// "Los sonidos" teaches la casa / la mesa / el libro, no-u1 "Lyder og bokstaver" teaches
// å være / å lære / norsk — and RUNBOOK §4 requires it: the sounds unit uses real
// vocabulary, not letter drills. So each card now fronts an everyday word that CARRIES the
// sound, the meaning is an ordinary translation, and the sound explanation lives in the
// hint, which is what a hint is for. l3 was already correct and is untouched.
//
// THE WORDS ARE CONSTRAINED BY THE UNIT'S POSITION. This unit runs first but was authored
// last, so units 1–26 had already claimed almost every obvious exemplar — l'été, la mère,
// la forêt, le garçon, le café, la fenêtre, la sœur, l'eau, trois, oui, la montagne and
// la fille are all taught elsewhere, and front uniqueness is a hard error. The words below
// are the A1 survivors of that search, each picked because its sound is the salient thing
// about it. Do not swap one for a "better" word without re-running `npm run taught -- fr`.
//
// ⚠️ THAT CONSTRAINT IS AN ARTEFACT, NOT A LAW, AND IT IS LOGGED FOR ALEX. RUNBOOK §4:162
// says word ownership goes to the LOWER SLOT NUMBER, and §6:214 says outright that "a
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
// AUDIO — THESE 14 ITEMS ARE DELIBERATELY SILENT, AND MUST BE RE-RECORDED.
// French audio has since been generated (3,111 clips), and clips are keyed by ITEM ID with
// no text hash, so rewriting a front leaves the old clip in place and nothing detects it.
// Every one of these 14 ids had a clip pronouncing the OLD front — the bare letter. Running
// the real dispatcher over them showed all 14 routing to an ear card: 10 to `listen:choice`
// at rung 0-1 and 4 to `listen:type` at rung 2, where the clip says "é" and the graded answer
// is `lebebe`. Unpassable, not merely odd. So the 14 stale mp3s were DELETED from
// public/audio/fr and the manifest regenerated: `hasAudio()` is now false for them, no ear
// card routes, and `itemAudio` 404s into its existing onerror→silence path (it plays by path
// and never consults the manifest, so emptying the manifest alone would NOT have silenced it).
// `generate:audio` skips ids whose mp3 exists, so `npm run generate:audio -- --lang=fr`
// regenerates exactly these 14 and nothing else. Until then the unit teaches through the
// written respellings in each hint — see BUILD-BRIEF-fr-sounds.md.
//
// WHAT LESSON 1 CANNOT TEST. `checkProduce` accepts the accent-stripped spelling for all 7
// l1 fronts (`le bebe`, `la creme`, `la lecon`, `allo`, `la flute`, `l'oeil`…) because
// `normalizeReading` folds diacritics for every non-ja language and `produceAllowsRomaji`
// is true off `stage: a1`. So the lesson titled "The accents" cannot currently require one.
// This is pre-existing engine behaviour, not something this rewrite introduced — the old
// bare-letter cards folded the same way, and `fix/free-pass-cards` names THE ACCENT FOLD as
// one of its three causes. It is logged, not worked around: no card here pretends otherwise.
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
      canDo: "Read and say seven everyday words, and know what each accent does to them: é è ê ç ô û œ.",
      items: [
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
      canDo: "Read seven everyday words built on the multi-letter sounds: eau, au, ai, oi, ui, gn, ill.",
      items: [
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
