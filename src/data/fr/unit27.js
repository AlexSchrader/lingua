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
// The EXAMPLE sentences still show words for their spelling rather than as vocabulary to
// acquire — that is how phonics is taught everywhere, and it is a deliberate exception to
// the teach-before-use rule, not an oversight.
//
// AUDIO: `listen:choice` and `listen:type` stay dark for French until `generate:audio`
// runs, so today this teaches through written respellings ("é sounds like 'ay'") on the
// teach + choice cards. That is genuinely useful now and considerably better later — see
// BUILD-BRIEF-fr-sounds.md.
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
      canDo: "Say seven everyday words and hear what each accent does to them: é è ê ç ô û œ.",
      items: [
        { id: "fr-u27l1-eaigu", type: "vocab", front: "le bébé", reading: "lebebe", meaning: "baby", example: { jp: "Le bébé est très petit.", en: "The baby is very small — \"bay-BAY\"" }, drill: { jp: "Le bébé est très petit", en: "The baby is very small" }, accept: ["the baby", "baby"], hint: "Two é, two \"ay\" sounds: bébé is \"bay-BAY\". The accent is not decoration — it tells you the e is pronounced at all. A final e with no accent is usually silent." },
        { id: "fr-u27l1-egrave", type: "vocab", front: "la crème", reading: "lacreme", meaning: "cream", example: { jp: "La crème est dans le café.", en: "The cream is in the coffee — \"krem\"" }, drill: { jp: "La crème est très bonne", en: "The cream is very good" }, accept: ["the cream", "cream"], hint: "è is open, like the e in \"bed\": crème is \"krem\". Compare it with é — bébé closes, crème opens. One accent apart." },
        { id: "fr-u27l1-ecirconflexe", type: "vocab", front: "la crêpe", reading: "lacrepe", meaning: "pancake", example: { jp: "La crêpe est chaude.", en: "The pancake is hot — \"krep\"" }, drill: { jp: "La crêpe est très chaude", en: "The pancake is very hot" }, accept: ["a pancake", "the pancake", "crepe", "the crepe"], hint: "ê sounds like è — \"krep\". The little hat marks a letter that fell out of the word centuries ago, usually an s: crêpe was crespe, forêt was forest, hôtel was hostel." },
        { id: "fr-u27l1-cedille", type: "vocab", front: "la leçon", reading: "lalecon", meaning: "lesson", example: { jp: "La leçon est facile.", en: "The lesson is easy — \"luh-SON\"" }, drill: { jp: "La leçon est très facile", en: "The lesson is very easy" }, accept: ["the lesson", "lesson"], hint: "c is hard before a, o and u — without the tail, leçon would be \"luh-KON\". The cedilla forces it soft: \"luh-SON\". Same job in ça and français." },
        { id: "fr-u27l1-ocirconflexe", type: "vocab", front: "allô", reading: "allo", meaning: "hello (on the phone)", example: { jp: "Allô, c'est Marie.", en: "Hello, it's Marie — answering the phone" }, drill: { jp: "Allô c'est Marie", en: "Hello it's Marie" }, accept: ["hello", "hi"], hint: "ô is a long, closed \"oh\". Say allô only on the telephone — face to face it is always bonjour." },
        { id: "fr-u27l1-ucirconflexe", type: "vocab", front: "la flûte", reading: "laflute", meaning: "flute", example: { jp: "La flûte est dans la boîte.", en: "The flute is in the box — \"flewt\"" }, drill: { jp: "La flûte est petite", en: "The flute is small" }, accept: ["the flute", "flute"], hint: "French u has no English twin: round your lips for \"oo\" and say \"ee\" instead. The hat does not change the sound, it just marks a lost letter — flûte was fleute." },
        { id: "fr-u27l1-oe", type: "vocab", front: "l'œil", reading: "loeil", meaning: "eye", example: { jp: "L'œil du chat est vert.", en: "The cat's eye is green — \"luh-y\"" }, drill: { jp: "L'œil du chat est vert", en: "The cat's eye is green" }, accept: ["the eye", "eye"], hint: "œ is one letter, not two — and you can always type it as oe: œil and oeil are both accepted here. The plural is completely irregular: les yeux." },
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
        { id: "fr-u27l2-eau", type: "vocab", front: "la peau", reading: "lapeau", meaning: "skin", example: { jp: "La peau du bébé est douce.", en: "The baby's skin is soft — \"poh\"" }, drill: { jp: "La peau du bébé est douce", en: "The baby's skin is soft" }, accept: ["the skin", "skin"], hint: "Three letters, one sound, and not one of them is o-ish in English: eau is simply \"oh\", so peau is \"poh\"." },
        { id: "fr-u27l2-au", type: "vocab", front: "haut", reading: "haut", meaning: "high", example: { jp: "L'arbre est très haut.", en: "The tree is very high — said \"oh\"" }, drill: { jp: "L'arbre est très haut", en: "The tree is very high" }, accept: ["tall", "high up"], hint: "au is the same \"oh\" as eau. And haut hides a silent letter at each end — the h says nothing and the t says nothing, so the whole word is just \"oh\"." },
        { id: "fr-u27l2-ai", type: "vocab", front: "la fraise", reading: "lafraise", meaning: "strawberry", example: { jp: "La fraise est rouge.", en: "The strawberry is red — \"frez\"" }, drill: { jp: "La fraise est très rouge", en: "The strawberry is very red" }, accept: ["the strawberry", "strawberry"], hint: "ai is the open \"eh\" of è, never \"ay\": fraise is \"frez\", j'ai is \"zhay\" only because of the j." },
        { id: "fr-u27l2-oi", type: "vocab", front: "la poire", reading: "lapoire", meaning: "pear", example: { jp: "La poire est sur la table.", en: "The pear is on the table — \"pwahr\"" }, drill: { jp: "La poire est très bonne", en: "The pear is very good" }, accept: ["the pear", "pear"], hint: "oi is always \"wah\", never \"oy\": poire is \"pwahr\", moi is \"mwah\", trois is \"trwah\"." },
        { id: "fr-u27l2-ui", type: "vocab", front: "la truite", reading: "latruite", meaning: "trout", example: { jp: "La truite est dans la rivière.", en: "The trout is in the river — \"trweet\"" }, drill: { jp: "La truite est dans l'eau", en: "The trout is in the water" }, accept: ["the trout", "trout"], hint: "ui is one quick glide, \"wee\": truite is \"trweet\". Same team as nuit and huit." },
        { id: "fr-u27l2-gn", type: "vocab", front: "l'oignon", reading: "loignon", meaning: "onion", example: { jp: "L'oignon est dans la soupe.", en: "The onion is in the soup — \"oh-NYON\"" }, drill: { jp: "L'oignon est dans la soupe", en: "The onion is in the soup" }, accept: ["the onion", "onion"], hint: "gn is the \"ny\" of Spanish ñ, or the ni in English \"onion\". This word also carries an i that says nothing at all: \"oh-NYON\"." },
        { id: "fr-u27l2-ill", type: "vocab", front: "le papillon", reading: "lepapillon", meaning: "butterfly", example: { jp: "Le papillon est jaune.", en: "The butterfly is yellow — \"pa-pee-YON\"" }, drill: { jp: "Le papillon est jaune", en: "The butterfly is yellow" }, accept: ["the butterfly", "butterfly"], hint: "ill is \"ee-y\", not the English \"ill\": papillon is \"pa-pee-YON\" and fille is \"fee-y\"." },
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
