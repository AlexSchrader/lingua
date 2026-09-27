// RU Unit 2 — Азбука · 2 ("The alphabet, part 2") — PRE-A1
// Letters 18–27: the four new consonant shapes (г з ф) plus э, then the four
// hushers ж ш ц ч, and finally ы and й — the two letters English has no letter
// for at all. Conventions are declared in ru/unit1.js and bind every unit.
//
// The glyph band is cumulative (unit1.js §8): every exemplar word here is
// spellable with letters from units 1–2 only. That is why `спасибо` waits for
// unit 7 and `хорошо` could not appear until ш existed.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT2 = {
  id: "ru-u2",
  lang: "ru",
  title: "Азбука · 2",
  order: 2,
  stage: "pre-a1",
  lessons: [
    {
      id: "ru-u2l1",
      unit: 2,
      lesson: 1,
      title: "Г, З, Ф, Э",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read four more letters and say yes and this is in Russian.",
      items: [
        { id: "ru-u2l1-letterg", type: "glyph", front: "г", reading: "g", meaning: null, example: null, hint: "A flag on a pole, and it says a hard g as in go — never the g of gem. At the end of a word it goes quiet and says k." },
        { id: "ru-u2l1-letterz", type: "glyph", front: "з", reading: "z", meaning: null, example: null, hint: "Looks like the digit 3, says z as in zoo. At the end of a word it goes quiet and says s." },
        { id: "ru-u2l1-letterf", type: "glyph", front: "ф", reading: "f", meaning: null, example: null, hint: "A circle on a stick, and it says f. Almost every Russian word with ф is borrowed from somewhere else." },
        { id: "ru-u2l1-lettere", type: "glyph", front: "э", reading: "e", meaning: null, example: null, hint: "A backwards Э, and it says a flat E as in bed. This is е without the y-glide, and it never softens the consonant before it." },
        { id: "ru-u2l1-da", type: "vocab", front: "да", reading: "da", meaning: "yes", accept: ["yeah", "yep", "indeed"], example: { jp: "Да, это наш дом.", en: "Yes, that is our house." }, drill: { jp: "Да это мой дом", en: "Yes that is my house" }, hint: "DA, one clear syllable. Russian also drops it into the middle of a sentence to soften a request, the way English says do come in." },
        { id: "ru-u2l1-eto", type: "vocab", front: "это", reading: "eto", meaning: "this is", accept: ["this", "that", "that is", "it is"], example: { jp: "Это наш дом, а там наша школа.", en: "This is our house, and our school is over there." }, drill: { jp: "Это моя мама", en: "This is my mum" }, hint: "E-ta, stress on the first syllable, so the final о reduces to a. Russian has no verb to be in the present, so это дом is a whole sentence: this is a house." },
      ],
    },
    {
      id: "ru-u2l2",
      unit: 2,
      lesson: 2,
      title: "Ж and Ш: the hushing letters",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read and type the two hushing letters, and say that something is good.",
      items: [
        { id: "ru-u2l2-letterzh", type: "glyph", front: "ж", reading: "zh", meaning: null, example: null, hint: "A beetle with six legs, and it buzzes: the s of pleasure or the g of beige. Always hard — it never softens, whatever vowel follows." },
        { id: "ru-u2l2-lettersh", type: "glyph", front: "ш", reading: "sh", meaning: null, example: null, hint: "Three posts on a bar, and it says SH as in shoe — but flatter and further back than English. Always hard." },
        { id: "ru-u2l2-khorosho", type: "vocab", front: "хорошо", reading: "khorosho", meaning: "well", accept: ["good", "fine", "okay", "nicely", "all right"], example: { jp: "Он хорошо говорит по-русски.", en: "He speaks Russian well." }, drill: { jp: "Мама хорошо говорит по-русски", en: "Mum speaks Russian well" }, hint: "kha-ra-SHO — stress on the last syllable, so the first two о both reduce to a. It answers как дела? on its own: хорошо." },
        { id: "ru-u2l2-shkola", type: "vocab", front: "школа", reading: "shkola", meaning: "a school", accept: ["school", "the school"], example: { jp: "Наша школа там, и она очень старая.", en: "Our school is over there, and it is very old." }, drill: { jp: "Это наша школа", en: "This is our school" }, hint: "SHKO-la, stress on the first syllable. Feminine (-а). Say the шк cluster with no vowel between them." },
        { id: "ru-u2l2-nash", type: "vocab", front: "наш", reading: "nash", meaning: "our", accept: ["ours", "our own"], example: { jp: "Наш дом там, а наша школа здесь.", en: "Our house is there, and our school is here." }, drill: { jp: "Вот наш дом", en: "Here is our house" }, hint: "NASH for a masculine noun; наша for feminine, наше for neuter. The ending agrees with the thing owned, never with the owner." },
        { id: "ru-u2l2-vash", type: "vocab", front: "ваш", reading: "vash", meaning: "your (formal or plural)", accept: ["yours", "your"], example: { jp: "Ваш дом очень хороший.", en: "Your house is very nice." }, drill: { jp: "Вот ваш дом", en: "Here is your house" }, hint: "VASH — the polite or plural your, the one that goes with вы. Its informal partner твой is in unit 8." },
      ],
    },
    {
      id: "ru-u2l3",
      unit: 2,
      lesson: 3,
      title: "Ц and Ч",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the ts and ch letters, and ask what and why.",
      items: [
        { id: "ru-u2l3-letterts", type: "glyph", front: "ц", reading: "ts", meaning: null, example: null, hint: "One letter for two sounds pressed together: the ts of cats, said as fast as one sound. Always hard." },
        { id: "ru-u2l3-letterch", type: "glyph", front: "ч", reading: "ch", meaning: null, example: null, hint: "A little chair, and it says CH as in cheese. The opposite of ж and ш — ч is ALWAYS soft, whatever follows it." },
        { id: "ru-u2l3-chto", type: "vocab", front: "что", reading: "chto", meaning: "what", accept: ["that (conjunction)", "which thing"], example: { jp: "Что это? Это наша школа.", en: "What is this? This is our school." }, drill: { jp: "Что это такое", en: "What is this thing" }, hint: "Written что, SAID shto — the ч is pronounced ш here, one of a handful of words where it is. Unit 6 lesson 2 collects the rest." },
        { id: "ru-u2l3-pochemu", type: "vocab", front: "почему", reading: "pochemu", meaning: "why", accept: ["what for", "how come"], example: { jp: "Почему он не говорит по-русски?", en: "Why does he not speak Russian?" }, drill: { jp: "Почему это так важно", en: "Why is this so important" }, hint: "pa-chi-MU, stress right at the end, and both of the first vowels reduce. Answer it with потому что — because." },
        { id: "ru-u2l3-vrach", type: "vocab", front: "врач", reading: "vrach", meaning: "a doctor", accept: ["doctor", "physician", "medic"], example: { jp: "Наша мама врач, и она работает там.", en: "Our mum is a doctor, and she works there." }, drill: { jp: "Наша мама хороший врач", en: "Our mum is a good doctor" }, hint: "VRACH, one syllable, and the вр cluster starts it with no vowel. Masculine grammatically even when the doctor is a woman." },
        { id: "ru-u2l3-chasto", type: "vocab", front: "часто", reading: "chasto", meaning: "often", accept: ["frequently", "a lot"], example: { jp: "Он часто говорит о школе.", en: "He often talks about school." }, drill: { jp: "Мы часто говорим по-русски", en: "We often speak Russian" }, hint: "CHA-sta, stress first. The ч softens, so it is closer to CHYA than CHA." },
      ],
    },
    {
      id: "ru-u2l4",
      unit: 2,
      lesson: 4,
      title: "Ы and Й: the last two shapes",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read ы and й, and say you, we and tea — three words you cannot write without them.",
      items: [
        { id: "ru-u2l4-letterih", type: "glyph", front: "ы", reading: "ih", meaning: null, example: null, hint: "English has no such vowel. Say the i of bit, then pull your tongue back and down without moving your lips. It never begins a word." },
        { id: "ru-u2l4-lettery", type: "glyph", front: "й", reading: "y", meaning: null, example: null, hint: "It is и wearing a little hat, and it is a consonant: the y of boy. It never stands alone — it always leans on the vowel beside it." },
        { id: "ru-u2l4-ty", type: "vocab", front: "ты", reading: "ty", meaning: "you (informal)", accept: ["you", "thou"], example: { jp: "Ты хорошо говоришь по-русски.", en: "You speak Russian well." }, drill: { jp: "Ты часто здесь", en: "You are here often" }, hint: "TY, with that new ы vowel. One person you know well — a friend, a child, family. Use вы for anyone else or you will sound rude." },
        { id: "ru-u2l4-my", type: "vocab", front: "мы", reading: "my", meaning: "we", accept: ["us"], example: { jp: "Мы тоже говорим по-русски.", en: "We also speak Russian." }, drill: { jp: "Мы часто говорим по-русски", en: "We often speak Russian" }, hint: "MY — us. Same ы vowel as ты. Russian normally drops nothing: the pronoun stays even though the verb ending already says we." },
        { id: "ru-u2l4-vy", type: "vocab", front: "вы", reading: "vy", meaning: "you (formal or plural)", accept: ["you all", "you"], example: { jp: "Вы врач? Да, я врач.", en: "Are you a doctor? Yes, I am a doctor." }, drill: { jp: "Вы часто здесь", en: "You are here often" }, hint: "VY — one stranger, or several people. This is the safe default with anyone you have just met, and it is capitalised in letters as Вы." },
        { id: "ru-u2l4-chay", type: "vocab", front: "чай", reading: "chay", meaning: "tea", accept: ["a tea", "the tea"], example: { jp: "Вот чай, а вот вода.", en: "Here is tea, and here is water." }, drill: { jp: "Вот наш чай", en: "Here is our tea" }, hint: "CHAY, rhyming with English shy. Masculine (consonant ending — й counts as a consonant). Offering чай is how a Russian house says hello." },
      ],
    },
  ],
};
