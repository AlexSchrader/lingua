// RU Unit 53 — Болезнь и лечение ("Illness and treatment") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u51–u60). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 4 (A2)` — no subject named. See unit51.js.
//
// THE MEASURED HOLE. A1's u20 Тело и здоровье is the body unit and it is the
// OUTSIDE of a person plus four illness words: голова · глаз · нос · рот · ухо ·
// лицо · рука · нога · палец · спина · живот · зуб, then болеть · температура ·
// здоровье · лекарство · таблетка · простуда. Block 1's u35 added лечиться and
// простудиться as reflexive verbs. Against that, a learner could not name a neck,
// a shoulder, a knee, a throat, a bone or a muscle; could not name a single organ
// except сердце (u6l2); could not say illness, cough, wound or flu; and could not
// ask for an injection, a lab test, a prescription or an appointment. Those are
// this unit's 24 — the INSIDE of the body and the clinic.
//
// ★ THIS IS THE UNIT WHERE -ь GENDER MATTERS MOST. Seven of its 24 fronts end in
//   -ь and unit1.js §3 makes naming the gender compulsory on every one, because
//   the ending predicts nothing. They split four ways and the hints say so:
//        FEMININE: кость · кровь · печень · грудь · болезнь
//        MASCULINE: кашель  ⚠️ — the one masculine -ь in the unit, and its е
//             drops in every oblique case (кашля, кашлю), which no other card here
//             does.
//   Two more are -ость nouns elsewhere in the block (обязанность u51l4,
//   необходимость u52l2) and those ARE predictable: -ость is always feminine.
//
// ⚠️ REFUSED IN THIS UNIT, and each is a rule rather than a taste:
//   `лёгкое` "a lung" — it IS the neuter singular of `лёгкий` (u19l2), so carding
//        it breaks unit1.js §5's "an inflected form is never its own card". The
//        whole argument is in unit51.js §2(b). `печень` took the slot.
//   `боль` "pain" — §D. Knowing `болеть` (u20) and `больно` (u34) gives it away.
//        `болезнь` is carded because the -знь suffix is dead and the sense moves
//        from hurting to a named disease.
//   `лечение` (vs `лечиться` u35) · `здоровый` (vs `здоровье` u20) · `слабость`
//        (vs `слабый` u20) · `усталость` (vs `устал` u7) — all §D.
//   `больной` "a patient" — the same substantivised-adjective fault as `лёгкое`.
//   `вирус`'s gloss is "an infection" and NOT "a virus", and no accept[] entry is
//        the bare word: `вирус` transliterates to "virus", so "a virus" in accept
//        would make checkProduce pass on the prompt — the free-pass fault
//        unit1.js §9 names. Same reason `грипп` is glossed "the flu".
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT53 = {
  id: "ru-u53",
  lang: "ru",
  title: "Болезнь и лечение",
  order: 53,
  stage: "a2",
  lessons: [
    {
      id: "ru-u53l1",
      unit: 53,
      lesson: 1,
      title: "The rest of the body",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Point at the parts of the body A1 left out — the neck, shoulder, knee, throat — and say which one hurts.",
      items: [
        { id: "ru-u53l1-sheya", type: "vocab", front: "шея", reading: "sheya", meaning: "a neck", accept: ["the neck", "the back of the neck", "a throat from outside"], example: { jp: "У меня очень болит шея.", en: "My neck hurts a lot." }, drill: { jp: "Моя шея очень болит", en: "My neck hurts a lot" }, hint: "SHE-ya — stress on the first syllable. FEMININE (-я). The neck as seen from outside; горло two cards on is the throat inside it." },
        { id: "ru-u53l1-plecho", type: "vocab", front: "плечо", reading: "plecho", meaning: "a shoulder", accept: ["the shoulder", "one shoulder", "the top of the arm"], example: { jp: "У него очень широкие плечи.", en: "He has very broad shoulders." }, drill: { jp: "Моё плечо уже болит", en: "My shoulder hurts already" }, hint: "pli-CHO — stress on the LAST syllable, and the е reduces to i. NEUTER (-о). ⚠️ Its plural moves the stress forward and shortens: PLE-chi, плечи." },
        { id: "ru-u53l1-koleno", type: "vocab", front: "колено", reading: "koleno", meaning: "a knee", accept: ["the knee", "one knee", "the joint in the leg"], example: { jp: "У меня сегодня болит колено.", en: "My knee hurts today." }, drill: { jp: "Это колено очень болит", en: "This knee hurts a lot" }, hint: "ka-LE-na — stress on LE, with the first о reducing to a and the last too. NEUTER (-о). ⚠️ Plural колени, with the same forward stress as плечи." },
        { id: "ru-u53l1-gorlo", type: "vocab", front: "горло", reading: "gorlo", meaning: "a throat", accept: ["the throat", "inside the neck", "where you swallow"], example: { jp: "У меня болит горло и голова.", en: "My throat and my head hurt." }, drill: { jp: "Сегодня горло очень болит", en: "My throat hurts a lot today" }, hint: "GOR-la — stress on the first syllable. NEUTER (-о). The inside of the neck, where a cold settles. «Горло болит» is how a Russian says «I have a sore throat»." },
        { id: "ru-u53l1-kost", type: "vocab", front: "кость", reading: "kost", meaning: "a bone", accept: ["the bone", "one bone", "a bone in the body"], example: { jp: "Эта кость очень твёрдая и белая.", en: "That bone is very hard and white." }, drill: { jp: "Кость здесь очень твёрдая", en: "The bone here is very hard" }, hint: "KOST — one syllable, with the ь keeping the т soft. ⚠️ FEMININE, and the -ь does not tell you so — unit 1 §3 is why every -ь noun here names its gender. твёрдый from unit 40 is the adjective for it." },
        { id: "ru-u53l1-myshtsa", type: "vocab", front: "мышца", reading: "myshtsa", meaning: "a muscle", accept: ["the muscle", "one muscle", "muscle tissue"], example: { jp: "После работы болит каждая мышца.", en: "After work every muscle hurts." }, drill: { jp: "Эта мышца очень сильная", en: "This muscle is very strong" }, hint: "MYSH-tsa — stress on the first syllable, with the tight ы from unit 5. FEMININE (-а). ⚠️ Not мышь, «a mouse», from unit 26 — the two share a root by accident of history and nothing else." },
      ],
    },
    {
      id: "ru-u53l2",
      unit: 53,
      lesson: 2,
      title: "What is inside",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what is inside a body — blood, the brain, a nerve, the stomach, the liver — and say where the pain is.",
      items: [
        { id: "ru-u53l2-krov", type: "vocab", front: "кровь", reading: "krov", meaning: "blood", accept: ["the blood", "blood in the body", "bloodshed"], example: { jp: "Кровь всегда очень красная.", en: "Blood is always very red." }, drill: { jp: "Кровь очень красная и тёплая", en: "Blood is very red and warm" }, hint: "KROV — one syllable, and the в goes quiet at the end, so it comes out KROF. ⚠️ FEMININE despite the -ь: красная кровь, never красный." },
        { id: "ru-u53l2-mozg", type: "vocab", front: "мозг", reading: "mozg", meaning: "a brain", accept: ["the brain", "brains", "the mind as an organ"], example: { jp: "Мозг человека очень сложный.", en: "The human brain is very complex." }, drill: { jp: "Наш мозг работает всегда", en: "Our brain works all the time" }, hint: "MOZG — one syllable, and the зг at the end devoices to sk, so it comes out MOSK. MASCULINE. The organ, not the mind: for the mind Russian says ум, from умный in unit 28." },
        { id: "ru-u53l2-nerv", type: "vocab", front: "нерв", reading: "nerv", meaning: "a nerve", accept: ["the nerve", "one nerve", "a nerve in the body"], example: { jp: "Этот нерв очень тонкий.", en: "That nerve is very thin." }, drill: { jp: "Здесь очень тонкий нерв", en: "There is a very thin nerve here" }, hint: "NERV — one syllable. MASCULINE. In the plural, нервы, it means «nerves» in the English sense of temper: «мои нервы» is what a tired Russian parent says." },
        { id: "ru-u53l2-zheludok", type: "vocab", front: "желудок", reading: "zheludok", meaning: "the stomach organ", accept: ["the digestive stomach", "the gut", "where food goes"], example: { jp: "У меня болит желудок после обеда.", en: "My stomach hurts after lunch." }, drill: { jp: "Мой желудок уже болит", en: "My stomach hurts already" }, hint: "zhi-LU-dak — stress on LU. MASCULINE. ⚠️ живот from unit 20 is the BELLY you see from outside; желудок is the organ inside it, the one a doctor asks about." },
        { id: "ru-u53l2-pechen", type: "vocab", front: "печень", reading: "pechen", meaning: "a liver", accept: ["the liver", "liver as an organ", "what alcohol damages"], example: { jp: "Печень человека очень важная.", en: "The human liver is very important." }, drill: { jp: "Его печень уже здоровая", en: "His liver is healthy again" }, hint: "PE-chin — stress on the first syllable. ⚠️ FEMININE despite the -ь: больная печень. «В печени» for «in the liver» — the stress stays on the first syllable throughout." },
        { id: "ru-u53l2-grud", type: "vocab", front: "грудь", reading: "grud", meaning: "a chest", accept: ["the chest", "the breast", "the front of the body"], example: { jp: "У него болит грудь и спина.", en: "His chest and his back hurt." }, drill: { jp: "Моя грудь очень болит", en: "My chest hurts a lot" }, hint: "GRUD — one syllable, and the д goes quiet, so it comes out GRUT. ⚠️ FEMININE despite the -ь. It covers both the chest and the breast; спина from unit 20 is the other side of the same body." },
      ],
    },
    {
      id: "ru-u53l3",
      unit: 53,
      lesson: 3,
      title: "Being ill",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe being ill — name the illness, a cough, a runny nose, a wound — and say that something is going round.",
      items: [
        { id: "ru-u53l3-bolezn", type: "vocab", front: "болезнь", reading: "bolezn", meaning: "an illness", accept: ["a disease", "a sickness", "a named condition"], example: { jp: "Это очень серьёзная болезнь.", en: "That is a very serious illness." }, drill: { jp: "Эта болезнь очень серьёзная", en: "That illness is very serious" }, hint: "ba-LEZN — stress on the last syllable, and the о reduces to a. ⚠️ FEMININE despite the -ь. Three words share this root and each has its own job: болеть from unit 20 is to hurt, больно from unit 34 is «it hurts», болезнь is the named illness." },
        { id: "ru-u53l3-kashel", type: "vocab", front: "кашель", reading: "kashel", meaning: "a cough", accept: ["the cough", "coughing", "a bad cough"], example: { jp: "У ребёнка сильный кашель и температура.", en: "The child has a bad cough and a temperature." }, drill: { jp: "У меня сильный кашель", en: "I have a bad cough" }, hint: "KA-shil — stress on the first syllable. ⚠️ MASCULINE, the one masculine -ь noun in this unit — and its е DROPS in every other case: кашля, кашлю, о кашле. A Russian says «у меня кашель», not «я кашляю», when reporting it." },
        { id: "ru-u53l3-nasmork", type: "vocab", front: "насморк", reading: "nasmork", meaning: "a runny nose", accept: ["a head cold in the nose", "a blocked nose", "the sniffles"], example: { jp: "У меня насморк и болит голова.", en: "I have a runny nose and a headache." }, drill: { jp: "Сегодня у меня насморк", en: "I have a runny nose today" }, hint: "NAS-mark — stress on the first syllable. MASCULINE. Built on нос from unit 20 with the vowel changed. простуда from unit 20 is the whole cold; насморк is just the nose part of it." },
        { id: "ru-u53l3-rana", type: "vocab", front: "рана", reading: "rana", meaning: "a wound", accept: ["the wound", "a cut", "an injury that bleeds"], example: { jp: "Эта рана уже не болит.", en: "That wound does not hurt any more." }, drill: { jp: "Рана на руке уже маленькая", en: "The wound on my hand is small already" }, hint: "RA-na — stress on the first syllable. FEMININE (-а). Something that broke the skin and bled, as against a болезнь, which is inside." },
        { id: "ru-u53l3-virus", type: "vocab", front: "вирус", reading: "virus", meaning: "an infection", accept: ["a bug you catch", "a virus that is going round", "the germ"], example: { jp: "Этот вирус очень опасный для детей.", en: "That infection is very dangerous for children." }, drill: { jp: "Вирус здесь очень опасный", en: "The infection here is very dangerous" }, hint: "VI-rus — stress on the first syllable. MASCULINE. ⚠️ Glossed «an infection» on purpose: this word transliterates to the English one, and a prompt you can read the answer off is not a card. Unit 9 taught that trap." },
        { id: "ru-u53l3-gripp", type: "vocab", front: "грипп", reading: "gripp", meaning: "the flu", accept: ["influenza", "a dose of flu", "the flu bug"], example: { jp: "Зимой у нас часто грипп.", en: "In winter we often have the flu." }, drill: { jp: "У него уже грипп", en: "He has the flu already" }, hint: "GRIPP — one syllable, and the double пп is held a beat longer. MASCULINE. From the French, not the English, which is why it has no -e. «Я болею гриппом» uses the instrumental from unit 32." },
      ],
    },
    {
      id: "ru-u53l4",
      unit: 53,
      lesson: 4,
      title: "Getting treated",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Get yourself treated — arrange an appointment, ask about an operation, an injection, a lab test or a prescription, and say that something is harmful.",
      items: [
        { id: "ru-u53l4-operatsiya", type: "vocab", front: "операция", reading: "operatsiya", meaning: "an operation", accept: ["surgery", "a procedure", "going under the knife"], example: { jp: "Эта операция была очень трудная.", en: "That operation was very difficult." }, drill: { jp: "Операция была уже вчера", en: "The operation was yesterday already" }, hint: "a-pi-RA-tsi-ya — five syllables, stress on RA, and the о at the front reduces to a. FEMININE (-я). Another -ция noun, and the stress is always on the syllable before it, as with организация in unit 51." },
        { id: "ru-u53l4-ukol", type: "vocab", front: "укол", reading: "ukol", meaning: "an injection", accept: ["a jab", "a shot", "a needle"], example: { jp: "Этот укол совсем не больно.", en: "That injection does not hurt at all." }, drill: { jp: "Мне нужен один укол", en: "I need one injection" }, hint: "u-KOL — stress on the last syllable. MASCULINE. Literally «a prick» — it also means a pointed remark. «Сделать укол» is what a nurse does." },
        { id: "ru-u53l4-analiz", type: "vocab", front: "анализ", reading: "analiz", meaning: "a lab test", accept: ["an analysis", "blood work", "a sample they test"], example: { jp: "Мой анализ будет готов завтра.", en: "My lab test will be ready tomorrow." }, drill: { jp: "Этот анализ уже готов", en: "That lab test is ready already" }, hint: "a-NA-liz — stress on NA. MASCULINE. In a clinic it is nearly always plural — «сдать анализы», to give samples. Glossed «a lab test» rather than «analysis» because that is what a Russian means by it." },
        { id: "ru-u53l4-retsept", type: "vocab", front: "рецепт", reading: "retsept", meaning: "a prescription", accept: ["a doctor's note for medicine", "a recipe", "what the chemist needs"], example: { jp: "Мне нужен новый рецепт от врача.", en: "I need a new prescription from the doctor." }, drill: { jp: "Рецепт уже готов сегодня", en: "The prescription is ready today" }, hint: "ri-TSEPT — stress on the last syllable. MASCULINE. ⚠️ One word for two things English separates: a рецепт from a врач is a prescription, a рецепт in a book is a cooking recipe." },
        { id: "ru-u53l4-priyom", type: "vocab", front: "приём", reading: "priyom", meaning: "an appointment", accept: ["a consultation", "surgery hours", "a reception"], example: { jp: "Приём у врача будет завтра утром.", en: "The appointment with the doctor is tomorrow morning." }, drill: { jp: "Мой приём будет завтра", en: "My appointment is tomorrow" }, hint: "pri-YOM — stress on the last syllable, and the ё is always written, as unit 1 §7 requires. MASCULINE. The doctor's appointment, the hotel reception, and a formal reception — all one word." },
        { id: "ru-u53l4-vrednyy", type: "vocab", front: "вредный", reading: "vrednyy", meaning: "harmful", accept: ["bad for you", "damaging", "unhealthy"], example: { jp: "Сахар очень вредный для зубов.", en: "Sugar is very harmful to the teeth." }, drill: { jp: "Этот сахар очень вредный", en: "This sugar is very harmful" }, hint: "VRED-nyy — stress on the first syllable. полезный from unit 25 is its exact opposite. ⚠️ Of a PERSON it means something else entirely — spiteful, awkward on purpose." },
      ],
    },
  ],
};
