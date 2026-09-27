// RU Unit 3 — Азбука · 3 ("The alphabet, part 3") — PRE-A1
// The last six letters: я and ю (the y-vowels), ё (always stressed, always
// written here — unit1.js §7), the two signs ь and ъ that have no sound of their
// own, and щ. After this lesson the learner has all 33 letters and can read any
// printed Russian word; units 4–6 teach how to SAY what they can now read.
// Conventions are declared in ru/unit1.js and bind every unit.
//
// ⚠️ `ещё` sits in l4, not l2, purely because of §8 cumulativity: it needs щ.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT3 = {
  id: "ru-u3",
  lang: "ru",
  title: "Азбука · 3",
  order: 3,
  stage: "pre-a1",
  lessons: [
    {
      id: "ru-u3l1",
      unit: 3,
      lesson: 1,
      title: "Я and Ю: the y-vowels",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the two vowels that carry a y in front of them, and name the language you are learning.",
      items: [
        { id: "ru-u3l1-letterya", type: "glyph", front: "я", reading: "ya", meaning: null, example: null, hint: "A backwards R, and it says YA as in yard. After a consonant it drops the y and softens the consonant instead: тя is closer to tya." },
        { id: "ru-u3l1-letteryu", type: "glyph", front: "ю", reading: "yu", meaning: null, example: null, hint: "An и joined to an о, and it says YU as in you. Like я, after a consonant it softens rather than adding a full y." },
        { id: "ru-u3l1-yazyk", type: "vocab", front: "язык", reading: "yazyk", meaning: "a language", accept: ["language", "tongue", "the language"], example: { jp: "Русский язык очень красивый.", en: "The Russian language is very beautiful." }, drill: { jp: "Это очень красивый язык", en: "This is a very beautiful language" }, hint: "ya-ZYK, stress at the end, and it holds both meanings English splits: the language you speak and the tongue in your mouth." },
        { id: "ru-u3l1-imya", type: "vocab", front: "имя", reading: "imya", meaning: "a first name", accept: ["name", "first name", "given name"], example: { jp: "Моё имя очень русское.", en: "My first name is very Russian." }, drill: { jp: "Это очень русское имя", en: "That is a very Russian first name" }, hint: "I-mya, stress first. NEUTER, even though it ends in -я — one of about ten odd neuters in -мя. Surname is фамилия, in unit 8." },
        { id: "ru-u3l1-yug", type: "vocab", front: "юг", reading: "yug", meaning: "the south", accept: ["south"], example: { jp: "На юге очень хорошо.", en: "It is very nice in the south." }, drill: { jp: "Это юг России", en: "This is the south of Russia" }, hint: "YUK — the г goes quiet at the end and says k. Masculine. Russians say на юг for going south and на юге for being there." },
        { id: "ru-u3l1-moya", type: "vocab", front: "моя", reading: "moya", meaning: "my (feminine)", accept: ["my", "mine"], example: { jp: "Моя мама врач, и она хорошо говорит по-русски.", en: "My mum is a doctor, and she speaks Russian well." }, drill: { jp: "Моя школа очень хорошая", en: "My school is very good" }, hint: "ma-YA — the ending agrees with the thing owned, not the owner: моя мама, мой дом, моё имя. The masculine мой is in unit 8." },
      ],
    },
    {
      id: "ru-u3l2",
      unit: 3,
      lesson: 2,
      title: "Ё: always stressed",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read ё, say I and everything, and know that ё is never unstressed.",
      items: [
        { id: "ru-u3l2-letteryo", type: "glyph", front: "ё", reading: "yo", meaning: null, example: null, hint: "е with two dots, and it says YO as in yonder. It is ALWAYS the stressed syllable of its word — so ё tells you where the stress is, free of charge." },
        { id: "ru-u3l2-ya", type: "vocab", front: "я", reading: "ya", meaning: "I", accept: ["me"], example: { jp: "Я тоже говорю по-русски, но только немного.", en: "I also speak Russian, but only a little." }, drill: { jp: "Я часто говорю по-русски", en: "I often speak Russian" }, hint: "One letter, one word, and it is NOT capitalised mid-sentence the way English I is. Say YA." },
        { id: "ru-u3l2-vsyo", type: "vocab", front: "всё", reading: "vsyo", meaning: "everything", accept: ["all", "it all", "that is all"], example: { jp: "Всё хорошо, спасибо.", en: "Everything is fine, thank you." }, drill: { jp: "Всё хорошо здесь", en: "Everything is fine here" }, hint: "FSYO — the в says f in front of с. Neuter. ⚠️ Its е-spelled twin все means everyone, and this course teaches only всё (unit1.js §7)." },
        { id: "ru-u3l2-moyo", type: "vocab", front: "моё", reading: "moyo", meaning: "my (neuter)", accept: ["my", "mine"], example: { jp: "Моё имя очень старое.", en: "My first name is very old." }, drill: { jp: "Моё имя здесь", en: "My first name is here" }, hint: "ma-YO. The third of the three: мой for masculine, моя for feminine, моё for neuter. ё marks the stress, so you never have to guess it." },
        { id: "ru-u3l2-eyo", type: "vocab", front: "её", reading: "eyo", meaning: "her", accept: ["hers", "her own", "its (feminine)"], example: { jp: "Её мама тоже врач.", en: "Her mum is also a doctor." }, drill: { jp: "Её школа очень хорошая", en: "Her school is very good" }, hint: "yi-YO, both syllables carrying a y. Unlike мой it NEVER changes ending: её дом, её мама, её имя. His is его, in unit 6." },
        { id: "ru-u3l2-yolka", type: "vocab", front: "ёлка", reading: "yolka", meaning: "a fir tree", accept: ["fir tree", "Christmas tree", "spruce", "New Year tree"], example: { jp: "Ёлка очень красивая.", en: "The fir tree is very beautiful." }, drill: { jp: "Наша ёлка очень красивая", en: "Our fir tree is very beautiful" }, hint: "YOL-ka, feminine (-а). In Russia the ёлка is a New Year tree, not a Christmas one — it goes up for 31 December." },
      ],
    },
    {
      id: "ru-u3l3",
      unit: 3,
      lesson: 3,
      title: "Ь and Ъ: the letters with no sound",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the soft and hard signs, and use four everyday words that need one.",
      items: [
        { id: "ru-u3l3-lettersoft", type: "glyph", front: "ь", reading: "myagkiyznak", meaning: null, example: null, hint: "The soft sign — мягкий знак. It makes NO sound. It softens the consonant in front of it, as if a tiny y were squeezed in: ден-y, not den. Every Russian infinitive ends in it." },
        { id: "ru-u3l3-letterhard", type: "glyph", front: "ъ", reading: "tverdyyznak", meaning: null, example: null, hint: "The hard sign — твёрдый знак. Also silent, and it does the opposite: it KEEPS the consonant hard and puts a tiny break before the next vowel. Rare — mostly after a prefix, as in объявление." },
        { id: "ru-u3l3-den", type: "vocab", front: "день", reading: "den", meaning: "a day", accept: ["day", "the day", "daytime"], example: { jp: "Это очень хороший день.", en: "It is a very good day." }, drill: { jp: "Это хороший день", en: "It is a good day" }, hint: "DYEN, one syllable, ending soft. MASCULINE even with that -ь — a -ь noun can be either gender and you must learn which. Добрый день is good afternoon, unit 7." },
        { id: "ru-u3l3-ochen", type: "vocab", front: "очень", reading: "ochen", meaning: "very", accept: ["really", "extremely", "a lot"], example: { jp: "Наша школа очень хорошая.", en: "Our school is very good." }, drill: { jp: "Он очень хорошо говорит", en: "He speaks very well" }, hint: "O-chin, stress first. The workhorse intensifier — очень хорошо, очень плохо, очень приятно." },
        { id: "ru-u3l3-zdes", type: "vocab", front: "здесь", reading: "zdes", meaning: "here", accept: ["in this place", "over here"], example: { jp: "Мы здесь, а мама там.", en: "We are here, and mum is there." }, drill: { jp: "Мы здесь каждый день", en: "We are here every day" }, hint: "ZDYES, one syllable — three consonants then a soft ending. The partner of там: здесь is where I am." },
        { id: "ru-u3l3-tolko", type: "vocab", front: "только", reading: "tolko", meaning: "only", accept: ["just", "merely", "nothing but"], example: { jp: "Я говорю только по-русски.", en: "I speak only Russian." }, drill: { jp: "Здесь только моя мама", en: "Only my mum is here" }, hint: "TOL-ka, and the ь is doing real work: without it толко would be a different word shape. Put только in front of whatever you are limiting." },
      ],
    },
    {
      id: "ru-u3l4",
      unit: 3,
      lesson: 4,
      title: "Щ, and all 33 letters",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the last letter of the alphabet band and read any printed Russian word aloud.",
      items: [
        { id: "ru-u3l4-lettershch", type: "glyph", front: "щ", reading: "shch", meaning: null, example: null, hint: "ш with a tail, and it is a LONG soft sh — hold it, and let your tongue rise as if a y follows. Not the shch you may have been taught; modern Russian says a stretched shsh." },
        { id: "ru-u3l4-veshch", type: "vocab", front: "вещь", reading: "veshch", meaning: "a thing", accept: ["thing", "object", "item"], example: { jp: "Это очень хорошая вещь.", en: "That is a very good thing." }, drill: { jp: "Вот очень хорошая вещь", en: "Here is a very good thing" }, hint: "VYESHCH, one syllable, and FEMININE despite the consonant look — the -ь is what makes it so. For an abstract thing Russian prefers это." },
        { id: "ru-u3l4-eshchyo", type: "vocab", front: "ещё", reading: "eshchyo", meaning: "still, yet", accept: ["more", "another", "else", "as well"], example: { jp: "Он ещё здесь? Да, ещё здесь.", en: "Is he still here? Yes, still here." }, drill: { jp: "Наша мама ещё здесь", en: "Our mum is still here" }, hint: "yi-SHCHO, stress on the ё as always. It also asks for more of something: ещё чай, more tea. ⚠️ Never spelled еще in this course." },
        { id: "ru-u3l4-zhenshchina", type: "vocab", front: "женщина", reading: "zhenshchina", meaning: "a woman", accept: ["woman", "lady"], example: { jp: "Эта женщина — наш врач.", en: "This woman is our doctor." }, drill: { jp: "Эта женщина очень хорошо говорит", en: "This woman speaks very well" }, hint: "ZHEN-shchi-na, stress first. Feminine (-а). Note ж and щ side by side — the hardest and the softest hush in one word." },
        { id: "ru-u3l4-muzhchina", type: "vocab", front: "мужчина", reading: "muzhchina", meaning: "a man", accept: ["man", "gentleman"], example: { jp: "Этот мужчина тоже врач.", en: "This man is also a doctor." }, drill: { jp: "Этот мужчина очень хорошо говорит", en: "This man speaks very well" }, hint: "mu-SHCHI-na — the жч is said as one щ sound. MASCULINE although it ends in -а, like папа and дядя: a few male words break the ending rule." },
        { id: "ru-u3l4-bukva", type: "vocab", front: "буква", reading: "bukva", meaning: "a letter (of the alphabet)", accept: ["letter", "character", "alphabet letter"], example: { jp: "Щ — это буква, а не две буквы.", en: "Щ is one letter, not two." }, drill: { jp: "Это очень трудная буква", en: "This is a very difficult letter" }, hint: "BUK-va, feminine. A буква is a written letter; the kind you post is письмо, in unit 5." },
      ],
    },
  ],
};
