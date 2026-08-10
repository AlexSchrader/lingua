// FR Unit 27 (file/id) — Les sons ("The sounds of French") — A1, and it runs FIRST.
//
// ⚠️ id number ≠ position, deliberately. The unit id is fr-u27 because it was authored
// last; it runs first because it is placed FIRST IN THE `UNITS` ARRAY in src/data/index.js.
// That array position is what Today.jsx actually sequences by — `order: 1` alone does NOT
// move a unit (it is a display field, read only by the Ladder and the unit label), and an
// earlier revision of this file shipped claiming "it runs first" while the array still ran
// it 27th of 27. Keep the array position and `order` in step; tests/unit/unit-order.test.mjs
// fails if they diverge. Going this route instead of renumbering fr-u1…u26 means NO item id
// changes and therefore no mastery wipe — ids are the mastery key, so renumbering would have
// been free only until French ships, and irreversible after.
//
// WHY THIS UNIT EXISTS: French's day-one barrier isn't script — the learner already reads
// Latin letters — it's that those letters lie. `août` is two syllables and neither is
// "ay-oh-oot"; `s'il vous plaît` is "seel-voo-pleh"; final consonants mostly vanish.
// This is the Latin-script counterpart of Japanese's kana units. It is NOT a pre-a1 band
// and it uses NO trace card — see CONTENT.md → "Script policy".
//
// EXEMPLAR WORDS: the examples show words for their SPELLING, not as vocabulary to
// acquire — every one is glossed in English and every one is taught properly in the very
// next unit (Salutations) or soon after. That's how phonics is taught everywhere; it is a
// deliberate exception to the teach-before-use rule, not an oversight.
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
      canDo: "Know what the accents do to a sound: é è ê ç ô û œ.",
      items: [
        { id: "fr-u27l1-eaigu", type: "vocab", front: "é", reading: "e", meaning: "é — the 'ay' sound", example: { jp: "le café", en: "the coffee — \"ka-FAY\"" }, accept: ["e acute", "acute e", "ay"], hint: "The accent is not decoration — it tells you the sound. é is a closed \"ay\", as in café. Without it, a final e is usually silent." },
        { id: "fr-u27l1-egrave", type: "vocab", front: "è", reading: "e", meaning: "è — the open 'eh' sound", example: { jp: "très bien", en: "very good — \"treh bee-AN\"" }, accept: ["e grave", "grave e", "eh"], hint: "è is open, like the e in \"bed\". Compare café (ay) with très (eh) — one accent apart." },
        { id: "fr-u27l1-ecirconflexe", type: "vocab", front: "ê", reading: "e", meaning: "ê — 'eh', and a missing s", example: { jp: "la fenêtre", en: "the window — \"fuh-NET-ruh\"" }, accept: ["e circumflex", "circumflex e"], hint: "The little hat usually marks a letter that fell out of the word centuries ago — often an s. hôtel was hostel, forêt was forest." },
        { id: "fr-u27l1-cedille", type: "vocab", front: "ç", reading: "c", meaning: "ç — c said as 's'", example: { jp: "ça va", en: "how's it going — \"sa va\"" }, accept: ["c cedilla", "cedilla", "s sound"], hint: "c is hard before a/o/u (café = kaf). The cedilla forces it soft: ça = \"sa\", not \"ka\"." },
        { id: "fr-u27l1-ocirconflexe", type: "vocab", front: "ô", reading: "o", meaning: "ô — a long 'oh'", example: { jp: "l'hôtel", en: "the hotel — \"oh-TEL\"" }, accept: ["o circumflex", "circumflex o"] },
        { id: "fr-u27l1-ucirconflexe", type: "vocab", front: "û", reading: "u", meaning: "û — the tight 'u'", example: { jp: "bien sûr", en: "of course — \"bee-an SOOR\"" }, accept: ["u circumflex", "circumflex u"], hint: "French u has no English twin: round your lips for \"oo\" and say \"ee\" instead. (bien sûr = of course — you meet it properly in Unit 10.)" },
        { id: "fr-u27l1-oe", type: "vocab", front: "œ", reading: "oe", meaning: "œ — o and e fused", example: { jp: "la sœur", en: "the sister — \"surr\"" }, accept: ["oe", "o e ligature", "ligature"], hint: "One letter, not two. You can always type it as oe — sœur / soeur are both accepted here." },
      ],
    },
    {
      id: "fr-u27l2",
      unit: 27,
      lesson: 2,
      title: "Letters that team up",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the multi-letter sounds: eau, au, ai, oi, ui, gn, ill.",
      items: [
        { id: "fr-u27l2-eau", type: "vocab", front: "eau", reading: "eau", meaning: "eau — sounds like 'oh'", example: { jp: "l'eau", en: "the water — one syllable, \"oh\"" }, accept: ["oh sound", "o sound"], hint: "Three letters, one sound, and not one of them is o-ish in English. l'eau is simply \"loh\"." },
        { id: "fr-u27l2-au", type: "vocab", front: "au", reading: "au", meaning: "au — also 'oh'", example: { jp: "au revoir", en: "goodbye — \"oh ruh-VWAR\"" }, accept: ["oh sound"] },
        { id: "fr-u27l2-ai", type: "vocab", front: "ai", reading: "ai", meaning: "ai — sounds like 'eh'", example: { jp: "j'ai faim", en: "I'm hungry — \"zhay fam\"" }, accept: ["eh sound", "e sound"] },
        { id: "fr-u27l2-oi", type: "vocab", front: "oi", reading: "oi", meaning: "oi — sounds like 'wah'", example: { jp: "trois", en: "three — \"trwah\"" }, accept: ["wah sound", "wa"], hint: "Always \"wah\", never \"oy\". moi = \"mwah\", trois = \"trwah\", voilà = \"vwah-la\"." },
        { id: "fr-u27l2-ui", type: "vocab", front: "ui", reading: "ui", meaning: "ui — sounds like 'wee'", example: { jp: "oui", en: "yes — \"wee\"" }, accept: ["wee sound"] },
        { id: "fr-u27l2-gn", type: "vocab", front: "gn", reading: "gn", meaning: "gn — sounds like 'ny'", example: { jp: "la montagne", en: "the mountain — \"mon-TAN-yuh\"" }, accept: ["ny sound"], hint: "The same sound as Spanish ñ or the ni in \"onion\"." },
        { id: "fr-u27l2-ill", type: "vocab", front: "ill", reading: "ill", meaning: "ill — sounds like 'ee-y'", example: { jp: "la fille", en: "the girl — \"fee-y\"" }, accept: ["y sound", "ee y"], hint: "Not \"ill\" as in English. la fille is \"fee-y\", la famille is \"fa-MEE-y\"." },
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
        { id: "fr-u27l3-consonnefinale", type: "vocab", front: "la consonne finale", reading: "laconsonnefinale", meaning: "the silent final consonant", example: { jp: "petit, grand, beaucoup", en: "small, big, a lot — the last letter is silent in all three" }, accept: ["final consonant", "silent consonant"], hint: "Most final consonants are silent. The rough rule of thumb: c, r, f and l often DO sound — remember the word CaReFuL." },
        { id: "fr-u27l3-hmuet", type: "vocab", front: "le h muet", reading: "lehmuet", meaning: "the silent h", example: { jp: "l'homme, l'heure, l'hôtel", en: "the man, the hour, the hotel — no h sound at all" }, accept: ["silent h", "mute h"], hint: "French has no h sound. That's why le becomes l' in front of it: l'homme, not \"le homme\"." },
        { id: "fr-u27l3-emuet", type: "vocab", front: "le e muet", reading: "leemuet", meaning: "the silent e", example: { jp: "la table", en: "the table — \"tabl\", not \"tab-luh\"" }, accept: ["silent e", "mute e"], hint: "A final e with no accent is usually silent — which is exactly why é needs its accent to be heard." },
        { id: "fr-u27l3-elision", type: "vocab", front: "l'élision", reading: "lelision", meaning: "elision", example: { jp: "je + ai = j'ai", en: "I have — the e is dropped and replaced by an apostrophe" }, accept: ["the elision"], hint: "You've done this forty times already: j'ai, c'est, l'eau, s'il, d'accord. French refuses to let two vowels collide." },
        { id: "fr-u27l3-liaison", type: "vocab", front: "la liaison", reading: "laliaison", meaning: "liaison", example: { jp: "vous avez", en: "you have — said \"voo-za-vay\", the silent s wakes up" }, accept: ["the liaison", "linking"], hint: "A silent final consonant comes back to life before a vowel: les amis = \"lay-za-mee\", nous avons = \"noo-za-von\". (vous avez = you have — Unit 22.)" },
        { id: "fr-u27l3-accentaigu", type: "vocab", front: "l'accent aigu", reading: "laccentaigu", meaning: "the acute accent", example: { jp: "é dans café", en: "é as in café — the one that rises to the right" }, accept: ["acute accent", "acute"] },
        { id: "fr-u27l3-accentgrave", type: "vocab", front: "l'accent grave", reading: "laccentgrave", meaning: "the grave accent", example: { jp: "è dans très", en: "è as in très — the one that falls to the right" }, accept: ["grave accent", "grave"], hint: "It also separates look-alikes: a/à, ou/où, la/là. Same letters, different words." },
      ],
    },
  ],
};
