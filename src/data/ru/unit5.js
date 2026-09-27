// RU Unit 5 — Твёрдо и мягко ("Hard and soft") — PRE-A1
// Palatalisation, which is the axis the whole Russian consonant system turns on.
// Every Russian consonant has a hard and a soft version, and four things decide
// which you get: a following ь, a following и/е/ё/ю/я, and — for ж ш ц ч щ —
// nothing at all, because those five never change. Conventions are declared in
// ru/unit1.js and bind every unit.
//
// ⚠️ THE SOFT SIGN IS WHY unit1.js §1(b) EXISTS. ь and ъ are dropped from a
// word's `reading`, so `быть` and `быт` would both read "byt" and a dictation
// card would accept either. Everything taught here was checked against that:
// none of дверь · ночь · соль · жизнь · любовь · словарь · письмо · нельзя has a
// sign-less twin anywhere in the corpus.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT5 = {
  id: "ru-u5",
  lang: "ru",
  title: "Твёрдо и мягко",
  order: 5,
  stage: "pre-a1",
  lessons: [
    {
      id: "ru-u5l1",
      unit: 5,
      lesson: 1,
      title: "The soft sign at the end of a noun",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say six nouns that end in a soft sign, and know that the sign does not tell you their gender.",
      items: [
        { id: "ru-u5l1-dver", type: "vocab", front: "дверь", reading: "dver", meaning: "a door", accept: ["door", "the door"], example: { jp: "Дверь здесь очень старая.", en: "The door here is very old." }, drill: { jp: "Вот дверь а вот окно", en: "Here is a door and here is a window" }, hint: "DVYER, one syllable, and the р at the end is SOFT — the ь is what makes it so. FEMININE. Compare день, which looks identical and is masculine." },
        { id: "ru-u5l1-noch", type: "vocab", front: "ночь", reading: "noch", meaning: "night", accept: ["the night", "a night", "night-time"], example: { jp: "Сейчас ночь, и здесь очень тихо.", en: "It is night now, and it is very quiet here." }, drill: { jp: "Ночь очень тихая", en: "The night is very quiet" }, hint: "NOCH, FEMININE. The ь adds nothing to the sound here — ч is already always soft — but it is compulsory in writing, and it is what marks the word feminine." },
        { id: "ru-u5l1-sol", type: "vocab", front: "соль", reading: "sol", meaning: "salt", accept: ["the salt", "some salt"], example: { jp: "Соль здесь очень хорошая.", en: "The salt here is very good." }, drill: { jp: "Вот соль а вот сыр", en: "Here is salt and here is cheese" }, hint: "SOL with a soft l — tongue tip up, almost a y after it. FEMININE. Хлеб и соль is how a Russian house says welcome." },
        { id: "ru-u5l1-zhizn", type: "vocab", front: "жизнь", reading: "zhizn", meaning: "life", accept: ["a life", "the life", "living"], example: { jp: "Он очень любит жизнь.", en: "He loves life very much." }, drill: { jp: "Жизнь здесь очень хорошая", en: "Life here is very good" }, hint: "ZHYZN — ж cannot soften, so жи says zhy and not zhee (unit 6 lesson 3). FEMININE. Built on жить." },
        { id: "ru-u5l1-lyubov", type: "vocab", front: "любовь", reading: "lyubov", meaning: "love (the noun)", accept: ["love", "affection"], example: { jp: "Её любовь очень сильная.", en: "Her love is very strong." }, drill: { jp: "Любовь очень сильная", en: "Love is very strong" }, hint: "lyu-BOF — the в goes quiet at the end and says f. FEMININE. The verb любить is in unit 4; these are two words, and both are worth a card." },
        { id: "ru-u5l1-slovar", type: "vocab", front: "словарь", reading: "slovar", meaning: "a dictionary", accept: ["dictionary", "the dictionary", "vocabulary"], example: { jp: "Мой словарь здесь, и я часто его читаю.", en: "My dictionary is here, and I read it often." }, drill: { jp: "Вот мой словарь", en: "Here is my dictionary" }, hint: "sla-VAR, stress at the end, and MASCULINE — the -ь does not make it feminine. Built on слово, a word." },
      ],
    },
    {
      id: "ru-u5l2",
      unit: 5,
      lesson: 2,
      title: "И softens, Ы does not",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Hear the difference between a hard and a soft consonant, and say four words that depend on it.",
      items: [
        { id: "ru-u5l2-bystro", type: "vocab", front: "быстро", reading: "bystro", meaning: "quickly", accept: ["fast", "quick", "rapidly", "soon"], example: { jp: "Он говорит очень быстро, и я не понимаю.", en: "He speaks very quickly, and I do not understand." }, drill: { jp: "Он очень быстро говорит", en: "He speaks very quickly" }, hint: "BY-stra, with the hard ы — the б stays hard. Compare бистро, with и, where the б softens. Say быстро! and a Russian will hurry." },
        { id: "ru-u5l2-tikho", type: "vocab", front: "тихо", reading: "tikho", meaning: "quietly", accept: ["quiet", "softly", "it is quiet"], example: { jp: "Здесь очень тихо, и это хорошо.", en: "It is very quiet here, and that is good." }, drill: { jp: "Говорите тихо пожалуйста", en: "Speak quietly please" }, hint: "TI-kha — and the и makes that т SOFT, so it is closer to tyee than tee. Hold it against ты, where ы keeps the т hard. Same letter, two sounds." },
        { id: "ru-u5l2-mir", type: "vocab", front: "мир", reading: "mir", meaning: "peace", accept: ["the world", "world", "harmony"], example: { jp: "Этот мир очень старый.", en: "This world is very old." }, drill: { jp: "Это очень старый мир", en: "This is a very old world" }, hint: "MIR with a soft м, because of the и. Masculine. One word for two ideas English keeps apart: peace, and the world." },
        { id: "ru-u5l2-syr", type: "vocab", front: "сыр", reading: "syr", meaning: "cheese", accept: ["the cheese", "some cheese"], example: { jp: "Здесь очень хороший сыр.", en: "The cheese here is very good." }, drill: { jp: "Вот сыр и молоко", en: "Here is cheese and milk" }, hint: "SYR, hard с, hard р, that ы in between. Masculine. Say сыр and your face makes the Russian smile — it is what photographers ask for instead of cheese." },
        { id: "ru-u5l2-ryba", type: "vocab", front: "рыба", reading: "ryba", meaning: "fish", accept: ["a fish", "the fish"], example: { jp: "Рыба здесь очень хорошая.", en: "The fish here is very good." }, drill: { jp: "Это очень хорошая рыба", en: "This is a very good fish" }, hint: "RY-ba, feminine (-а), and the р is hard because ы follows. One word for the animal and the food." },
        { id: "ru-u5l2-silno", type: "vocab", front: "сильно", reading: "silno", meaning: "strongly", accept: ["hard", "a lot", "intensely", "badly"], example: { jp: "Он сильно любит чай.", en: "He likes tea a lot." }, drill: { jp: "Она сильно любит молоко", en: "She likes milk a lot" }, hint: "SIL-na — soft с from the и, and a soft л from the ь. Two soft consonants in one short word. The adjective is сильный, strong." },
      ],
    },
    {
      id: "ru-u5l3",
      unit: 5,
      lesson: 3,
      title: "Ь in the middle of a word",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read a soft sign that is not at the end, and ask how much something costs.",
      items: [
        { id: "ru-u5l3-pismo", type: "vocab", front: "письмо", reading: "pismo", meaning: "a letter (the kind you post)", accept: ["letter", "the letter", "a note"], example: { jp: "Это письмо очень старое.", en: "This letter is very old." }, drill: { jp: "Вот моё письмо", en: "Here is my letter" }, hint: "pis-MO, neuter (-о). The ь softens the с in the middle: pees-MO, not pis-MO. Built on писать. A letter of the alphabet is буква." },
        { id: "ru-u5l3-skolko", type: "vocab", front: "сколько", reading: "skolko", meaning: "how much", accept: ["how many", "what quantity"], example: { jp: "Сколько это стоит?", en: "How much does this cost?" }, drill: { jp: "Сколько здесь молока", en: "How much milk is there here" }, hint: "SKOL-ka, with a soft л from the ь. Сколько это стоит? is the sentence that lets you buy anything in Russia." },
        { id: "ru-u5l3-nelzya", type: "vocab", front: "нельзя", reading: "nelzya", meaning: "it is not allowed", accept: ["you must not", "one cannot", "not allowed", "forbidden"], example: { jp: "Здесь нельзя работать, это не наше место.", en: "You cannot work here, this is not our place." }, drill: { jp: "Здесь нельзя читать", en: "You cannot read here" }, hint: "nil-ZYA, stress at the end. The flat opposite of можно, and it needs no verb to be: нельзя is a whole answer." },
        { id: "ru-u5l3-dengi", type: "vocab", front: "деньги", reading: "dengi", meaning: "money", accept: ["cash", "funds"], example: { jp: "Деньги — это ещё не всё.", en: "Money is not everything yet." }, drill: { jp: "Вот наши деньги", en: "Here is our money" }, hint: "DYEN-gi, stress first. PLURAL ONLY — there is no singular деньга in modern Russian, so it takes plural verbs and plural adjectives: наши деньги." },
        { id: "ru-u5l3-bolshe", type: "vocab", front: "больше", reading: "bolshe", meaning: "more", accept: ["bigger", "greater", "any more"], example: { jp: "Я больше не хочу чай.", en: "I do not want any more tea." }, drill: { jp: "Я больше не работаю", en: "I do not work any more" }, hint: "BOL-she, soft л from the ь, then a hard ш. With не in front it means not any more, which is how you politely stop a host refilling your cup." },
        { id: "ru-u5l3-menshe", type: "vocab", front: "меньше", reading: "menshe", meaning: "less", accept: ["smaller", "fewer"], example: { jp: "Она меньше говорит, но больше знает.", en: "She speaks less but knows more." }, drill: { jp: "Здесь меньше воды", en: "There is less water here" }, hint: "MYEN-she — the exact mirror of больше, and built the same way. Both are comparatives and neither one changes ending." },
      ],
    },
    {
      id: "ru-u5l4",
      unit: 5,
      lesson: 4,
      title: "Ж, Ш and Ц never soften",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say six high-frequency words built on the five consonants that ignore every softening rule.",
      items: [
        { id: "ru-u5l4-tozhe", type: "vocab", front: "тоже", reading: "tozhe", meaning: "also", accept: ["too", "as well", "either"], example: { jp: "Она тоже врач, и она тоже здесь работает.", en: "She is also a doctor, and she also works here." }, drill: { jp: "Мы тоже говорим по-русски", en: "We also speak Russian" }, hint: "TO-zhe, and the же is said zhe with a HARD ж no matter that е follows — ж cannot soften, ever. Put тоже right before what is being added." },
        { id: "ru-u5l4-uzhe", type: "vocab", front: "уже", reading: "uzhe", meaning: "already", accept: ["by now", "yet"], example: { jp: "Я уже понимаю по-русски.", en: "I already understand Russian." }, drill: { jp: "Он уже здесь", en: "He is already here" }, hint: "u-ZHE, stress at the END — that is what separates it from у́же, narrower. Same hard ж as тоже." },
        { id: "ru-u5l4-mozhno", type: "vocab", front: "можно", reading: "mozhno", meaning: "it is allowed", accept: ["may I", "one may", "you can", "it is possible"], example: { jp: "Здесь можно читать и писать.", en: "You can read and write here." }, drill: { jp: "Можно здесь работать", en: "May one work here" }, hint: "MOZH-na. On its own with a question mark it means may I? — Можно? at a door, at a table, anywhere. Its opposite is нельзя." },
        { id: "ru-u5l4-nuzhno", type: "vocab", front: "нужно", reading: "nuzhno", meaning: "it is necessary", accept: ["need to", "must", "one must", "should"], example: { jp: "Нужно больше читать по-русски.", en: "One needs to read more in Russian." }, drill: { jp: "Нужно больше работать", en: "One needs to work more" }, hint: "NUZH-na, built like можно and used the same way: нужно plus an infinitive. For I need, add мне: мне нужно работать." },
        { id: "ru-u5l4-luchshe", type: "vocab", front: "лучше", reading: "luchshe", meaning: "better", accept: ["best", "rather"], example: { jp: "Так лучше, спасибо.", en: "That is better, thank you." }, drill: { jp: "Здесь работать лучше", en: "It is better to work here" }, hint: "LUCH-she — a soft ч straight into a hard ш, which is the hardest cluster in this unit. It is the comparative of хорошо, and nothing about it looks like хорошо." },
        { id: "ru-u5l4-khuzhe", type: "vocab", front: "хуже", reading: "khuzhe", meaning: "worse", accept: ["worst"], example: { jp: "Он говорит хуже, но понимает лучше.", en: "He speaks worse but understands better." }, drill: { jp: "Он хуже говорит по-русски", en: "He speaks Russian worse" }, hint: "KHU-zhe, the mirror of лучше, and the comparative of плохо — which it also does not resemble. Learn the pair together." },
      ],
    },
  ],
};
