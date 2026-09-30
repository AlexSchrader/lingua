// RU Unit 47 — Сравнение и возможность ("Comparison and possibility") — A2
// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 2 (u41–u50). Binding: ru/unit1.js §1–§10 and §A–§D, then ru/unit31.js
// §1–§7. The block-wide record is in ru/unit50.js §B1–§B7.
//
// ✅ THIS SLOT'S THEME WAS RESERVED FOR IT, DELIBERATELY. The scaffold title was
// "Grammar 5 — conditionals, ability, comparison", and ru/unit31.js §2 records
// block 1 refusing EIGHT fronts so that u46 and u47 would have content: чем ·
// более · менее · самый · мочь · уметь · хотя · чтобы. хотя and чтобы went to
// u46; the other six are here, all six re-probed on this branch before use, as
// ru/unit40.js's header instructs. Retitled to Russian per unit1.js §10.
//
// THE MEASURED HOLE, AND WHAT A1 ALREADY DID WITH IT. A1 carded FOUR comparatives
// at u5 — больше · меньше · лучше · хуже — which are the four SUPPLETIVE ones,
// the irregulars whose positive form is a different word. It carded можно ·
// нельзя · нужно (u5) and должен (u24) as impersonal frames. What is missing is
// the whole SYSTEM: the word for «than», the analytic comparative that goes in
// front of a long adjective, the superlative, the two verbs for «can», and the бы
// that makes a sentence hypothetical. Without them a learner can say «больше» and
// cannot say «more interesting than this one».
//
// ⚠️ THE BIG DECISION IN THIS UNIT, AND IT COST SIX CANDIDATE CARDS. A RUSSIAN
// COMPARATIVE IN -ее/-ше IS AN INFLECTED FORM, AND unit1.js §5's LAST RULE BANS
// CARDING ONE. старше · младше · выше · ниже · дальше · раньше · позже ·
// труднее · скорее were all measured free and ALL WERE REFUSED on that rule:
// each is the comparative of an adjective or adverb, not a lexeme of its own, in
// exactly the way ru/unit31.js §3 refuses утром as the instrumental of утро.
//   * The four A1 carded are not a precedent against this: больше/меньше/
//     лучше/хуже are SUPPLETIVE — there is no «*большее», the form comes from a
//     different stem, and A1 carded them as vocabulary because a learner cannot
//     derive them. A regular -ее form IS derivable, which is the whole point.
//   * So the comparative is taught here the way every other paradigm in this
//     language is taught: through `более` + the long adjective (which is the
//     analytic form, always available and always correct), with the -ее forms
//     appearing in examples and hints. The learner ends the unit able to build
//     any comparative; none of them is a second mastery track.
//
// FOUR MORE CALLS, with the reasoning:
//   `более` and `менее` COULD NOT BE GLOSSED "more" AND "less", which is what they
//        mean. u5l3 `больше` is already "more" and `меньше` "less", and
//        `normalizeMeaning` makes each pair one prompt with two right answers.
//        Measured with the block's probe before either card was written. They are
//        glossed "more so" and "less so", and each hint states the real division
//        of labour: больше/меньше for QUANTITY (больше денег), более/менее in
//        front of a LONG ADJECTIVE (более важный). That division is true Russian,
//        so the forced gloss teaches better than the obvious one would have.
//   `вероятно` is glossed "in all likelihood", not "probably" — u22 `наверное` is
//        already "probably". Same trap, same probe, same fix.
//   `способность` was carded and `способный` was NOT. Both sit beside u32
//        `способ` "a method"; one of the pair is the most a block should take, and
//        the noun is what the unit needs («у неё есть способность к языкам»).
//   `умение` was REFUSED — vs `уметь`, carded in this same lesson. A verb and its
//        own noun in one lesson is the §D case at its sharpest.
//
// ⚠️ ALSO REFUSED HERE:
//   `возможно` and `возможный` — vs u34 `возможность`, carded by block 1, which
//        ru/unit40.js's header already records refusing `возможный` for.
//   `сила` — vs u20 `сильный` and u5 `сильно`. `умелый` — vs `уметь` at l3.
//   `разница` — vs u40 `разный`. `редкий` IS carded and its adverb u22 `редко`
//        "rarely" does not collide with "rare": measured, not assumed.
//   `высокий` IS carded — ru/unit40.js's header lists it as one-of-a-pair with
//        u36 `высота`, available to a later block, and this is that block.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT47 = {
  id: "ru-u47",
  lang: "ru",
  title: "Сравнение и возможность",
  order: 47,
  stage: "a2",
  lessons: [
    {
      id: "ru-u47l1",
      unit: 47,
      lesson: 1,
      title: "More than, less than, the most",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Compare two things with чем, build any comparative with более or менее in front of a long adjective, and pick out the most of something with самый.",
      items: [
        { id: "ru-u47l1-chem", type: "vocab", front: "чем", reading: "chem", meaning: "than", accept: ["compared with", "in comparison to"], example: { jp: "Этот текст труднее, чем первый.", en: "This text is harder than the first one." }, drill: { jp: "Этот курс труднее чем первый", en: "This course is harder than the first one" }, hint: "One syllable, CHEM. ⚠️ A COMMA ALWAYS GOES BEFORE IT in writing: «больше, чем я думал». And there is a second way to say the same thing without чем at all — the genitive: «больше меня» = more than me. Both are correct." },
        { id: "ru-u47l1-bolee", type: "vocab", front: "более", reading: "bolee", meaning: "more so", accept: ["to a greater degree", "more (with a long adjective)", "increasingly"], example: { jp: "Эта статья более интересная, чем первая.", en: "That article is more interesting than the first one." }, drill: { jp: "Эта работа более важная", en: "This job is more important" }, hint: "BO-le-ye — stress on the FIRST syllable, so the о is not reduced. ⚠️ Glossed «more so» because больше at unit 5 already holds «more», and the two really do divide the work: БОЛЬШЕ for quantity — больше денег — and БОЛЕЕ in front of a long adjective — более важный, более интересная. Use более and you never have to know the -ее form of anything." },
        { id: "ru-u47l1-menee", type: "vocab", front: "менее", reading: "menee", meaning: "less so", accept: ["to a lesser degree", "less (with a long adjective)", "not as much"], example: { jp: "Этот вопрос менее важный, чем тот.", en: "That question is less important than the other one." }, drill: { jp: "Этот налог менее важный", en: "This tax is less important" }, hint: "MYE-ne-ye — stress on the first syllable. The mirror of более, and the same division: МЕНЬШЕ денег for quantity, МЕНЕЕ важный in front of an adjective. «Тем не менее» means «nevertheless»." },
        { id: "ru-u47l1-samyy", type: "vocab", front: "самый", reading: "samyy", meaning: "the most", accept: ["the very", "the -est one", "the greatest in degree"], example: { jp: "Это самый важный вопрос в договоре.", en: "That is the most important question in the contract." }, drill: { jp: "Это самый трудный текст", en: "That is the hardest text" }, hint: "SA-myy — stress on the first syllable. An ADJECTIVE, so it AGREES with its noun: самый важный, самая важная, самое важное. Put it in front of any adjective at all and you have a superlative. It also means «the very»: «в самом начале», at the very beginning." },
        { id: "ru-u47l1-sravnenie", type: "vocab", front: "сравнение", reading: "sravnenie", meaning: "a comparison", accept: ["a likening of two things", "a contrast drawn"], example: { jp: "Это сравнение было очень полезное.", en: "That comparison was very useful." }, drill: { jp: "Сравнение было очень полезное", en: "The comparison was very useful" }, hint: "srav-NYE-ni-ye — five syllables, stress on NYE. NEUTER (-е). From равный, equal — a сравнение makes two things equal for a moment so you can see the difference. «По сравнению с…» means «compared with»." },
        { id: "ru-u47l1-stepen", type: "vocab", front: "степень", reading: "stepen", meaning: "a degree", accept: ["an extent", "a level of intensity", "an academic degree"], example: { jp: "В этой работе очень высокая степень точности.", en: "In this work there is a very high degree of accuracy." }, drill: { jp: "Степень точности была другая", en: "The degree of accuracy was different" }, hint: "STYE-pen — stress on the first syllable. ⚠️ FEMININE, and it ends in -ь, so the gender must be learned. Three senses: a degree of something, an academic degree, and a power in maths. «В какой-то степени» is «to some extent»." },
      ],
    },
    {
      id: "ru-u47l2",
      unit: 47,
      lesson: 2,
      title: "High, low, big in scale",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe a thing by its degree rather than its size — a high price, a low wage, a large-scale firm, a small-scale detail, an enormous building, a heavy case.",
      items: [
        { id: "ru-u47l2-vysokiy", type: "vocab", front: "высокий", reading: "vysokiy", meaning: "tall", accept: ["high", "high in degree", "lofty"], example: { jp: "Это очень высокий дом.", en: "That is a very tall building." }, drill: { jp: "Это очень высокий налог", en: "That is a very high tax" }, hint: "vy-SO-kiy — stress on SO, with the tight ы first. An ADJECTIVE: высокая цена, высокое качество. Same root as высота (unit 36), «height». It works for a person's height and for an abstract level alike — высокий доход." },
        { id: "ru-u47l2-nizkiy", type: "vocab", front: "низкий", reading: "nizkiy", meaning: "low", accept: ["low in degree", "not high", "base"], example: { jp: "Это был очень низкий доход.", en: "That was a very low income." }, drill: { jp: "Это очень низкий уровень", en: "That is a very low level" }, hint: "NIZ-kiy — stress on the first syllable. An ADJECTIVE: низкая цена, низкое качество. Its comparative is ниже, «lower», which appears in examples and is not a card of its own — it is an inflected form, and unit 1 §5 keeps those off cards." },
        { id: "ru-u47l2-krupnyy", type: "vocab", front: "крупный", reading: "krupnyy", meaning: "large in scale", accept: ["major", "big as an organisation", "coarse-grained"], example: { jp: "Это очень крупная фирма в городе.", en: "That is a very large firm in the city." }, drill: { jp: "Это очень крупный клиент", en: "That is a very major client" }, hint: "KRUP-nyy — stress on the first syllable. An ADJECTIVE. ⚠️ Not большой from unit 19: большой is physically big, крупный is big in IMPORTANCE or SCALE — крупная фирма, крупный проект. It also means coarse, as of salt or sand." },
        { id: "ru-u47l2-melkiy", type: "vocab", front: "мелкий", reading: "melkiy", meaning: "small in scale", accept: ["minor", "petty", "fine-grained"], example: { jp: "Это был совсем мелкий вопрос.", en: "That was quite a minor question." }, drill: { jp: "Это совсем мелкий налог", en: "That is quite a minor tax" }, hint: "MYEL-kiy — stress on the first syllable. An ADJECTIVE, and the mirror of крупный. Not маленький (unit 19), which is physically small: мелкий is trivial or fine-grained. «Мелкие деньги» is small change." },
        { id: "ru-u47l2-ogromnyy", type: "vocab", front: "огромный", reading: "ogromnyy", meaning: "enormous", accept: ["huge", "vast", "immense"], example: { jp: "Это огромный город на реке.", en: "That is an enormous city on the river." }, drill: { jp: "Это огромный экран в аудитории", en: "That is an enormous screen in the lecture room" }, hint: "a-GROM-nyy — stress on GROM, and the first о reduces to a. An ADJECTIVE. It is much stronger than большой and Russians use it freely in speech: «огромное спасибо» is «thanks enormously»." },
        { id: "ru-u47l2-tyazhyolyy", type: "vocab", front: "тяжёлый", reading: "tyazhyolyy", meaning: "heavy", accept: ["weighing a lot", "hard to bear", "grave"], example: { jp: "Мой чемодан был очень тяжёлый.", en: "My suitcase was very heavy." }, drill: { jp: "Этот чемодан был очень тяжёлый", en: "That suitcase was very heavy" }, hint: "tya-ZHYO-lyy — stress on ZHYO, where the ё always is. An ADJECTIVE. ⚠️ Its second sense is where it differs from трудный (unit 19): трудный is intellectually hard, тяжёлый is hard to BEAR — тяжёлая работа is heavy labour, тяжёлая болезнь a grave illness." },
      ],
    },
    {
      id: "ru-u47l3",
      unit: 47,
      lesson: 3,
      title: "Can, know how, and cope",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Tell apart the two Russian verbs for «can» — мочь for being able to and уметь for having learned how — and talk about an ability, a talent, coping and achieving.",
      items: [
        { id: "ru-u47l3-moch", type: "vocab", front: "мочь", reading: "moch", meaning: "to be able", accept: ["can", "to be in a position to", "to have the chance to"], example: { jp: "Он не может работать сегодня.", en: "He cannot work today." }, drill: { jp: "Хотеть не значит мочь", en: "To want is not to be able" }, hint: "One syllable, MOCH. ⚠️ ITS PRESENT TENSE CHANGES THE STEM: могу, можешь, может, можем, можете, могут — г in the я and они forms, ж everywhere else. This is the verb behind можно (unit 5), which is its impersonal form. Contrast уметь, the next card. ⚠️ THE BARE INFINITIVE IS RARE IN SPEECH — Russian almost always uses a conjugated form — so the drill here is the proverb «Хотеть — не значит мочь», which is where a Russian actually says it." },
        { id: "ru-u47l3-umet", type: "vocab", front: "уметь", reading: "umet", meaning: "to know how", accept: ["to be able through training", "to have the skill to", "to have learned to"], example: { jp: "Она умеет говорить по-русски.", en: "She knows how to speak Russian." }, drill: { jp: "Нужно уметь читать эти цифры", en: "One needs to know how to read these figures" }, hint: "u-MYET — stress on the last syllable. First conjugation: умею, умеешь, умеют. ⚠️ THE DIVISION WITH МОЧЬ IS ABSOLUTE AND RUSSIAN NEVER BLURS IT: уметь is a skill you LEARNED (уметь плавать, уметь читать); мочь is whether you are able RIGHT NOW (не могу, я занят). English says «can» for both." },
        { id: "ru-u47l3-sposobnost", type: "vocab", front: "способность", reading: "sposobnost", meaning: "an ability", accept: ["an aptitude", "a capacity for something", "a faculty"], example: { jp: "У неё есть способность к языкам.", en: "She has an ability for languages." }, drill: { jp: "Эта способность очень полезная", en: "That ability is very useful" }, hint: "spa-SOB-nast — stress on SOB, and the first о reduces to a. FEMININE, ending in -ь. Same root as способ (unit 32), «a method». ⚠️ Not a навык (unit 42): a навык is drilled, a способность is what you were born with. Russian says «способность К чему-то», with the dative from unit 34." },
        { id: "ru-u47l3-talant", type: "vocab", front: "талант", reading: "talant", meaning: "a talent", accept: ["a gift for something", "a flair", "a gifted person"], example: { jp: "У этого автора настоящий талант.", en: "That author has a genuine talent." }, drill: { jp: "У него настоящий талант", en: "He has a genuine talent" }, hint: "ta-LANT — stress on the last syllable. MASCULINE. It also names the gifted person himself: «он большой талант». Stronger than способность." },
        { id: "ru-u47l3-spravlyatsya", type: "vocab", front: "справляться", reading: "spravlyatsya", meaning: "to cope", accept: ["to manage something", "to get on top of it", "to handle it"], example: { jp: "Она хорошо справляется с этой работой.", en: "She copes well with that job." }, drill: { jp: "Трудно справляться с такой работой", en: "It is hard to cope with work like that" }, hint: "sprav-LYA-tsa — stress on LYA, and -ться is said -tsa. A reflexive verb of unit 35's class. ⚠️ IT TAKES с + INSTRUMENTAL — справляться С работОЙ — which is unit 32's case. It also means «to enquire»: «справляться о здоровье»." },
        { id: "ru-u47l3-dobivatsya", type: "vocab", front: "добиваться", reading: "dobivatsya", meaning: "to achieve", accept: ["to attain by effort", "to press for something", "to get what you want"], example: { jp: "Он хочет добиваться этой цели.", en: "He wants to achieve that goal." }, drill: { jp: "Трудно добиваться такой цели", en: "It is hard to achieve a goal like that" }, hint: "da-bi-VA-tsa — stress on VA, and the о reduces to a. A reflexive verb. ⚠️ IT TAKES THE GENITIVE with no preposition — добиваться целИ, добиваться результатА — and it always implies effort against resistance." },
      ],
    },
    {
      id: "ru-u47l4",
      unit: 47,
      lesson: 4,
      title: "What would be, and how likely",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you would do if things were otherwise with бы, say how likely something is, say an effort was wasted, and describe a thing as rare, loud or dense.",
      items: [
        { id: "ru-u47l4-by", type: "vocab", front: "бы", reading: "by", meaning: "would", accept: ["the would-particle", "if it were so", "hypothetically"], example: { jp: "Я хотел бы работать в этой фирме.", en: "I would like to work at that firm." }, drill: { jp: "Я хотел бы новый компьютер", en: "I would like a new computer" }, hint: "Unstressed, and it never takes stress — it leans on the word before it. ⚠️ THE WHOLE RUSSIAN CONDITIONAL IS THIS ONE PARTICLE PLUS A PAST-TENSE VERB. There is no separate tense: «я хотел бы» = I would like, «если бы я знал» = if I had known. The verb is always the past form, whatever time you mean. Note «чтобы» from unit 46 is что + бы." },
        { id: "ru-u47l4-veroyatno", type: "vocab", front: "вероятно", reading: "veroyatno", meaning: "in all likelihood", accept: ["probably", "most likely", "it is likely that"], example: { jp: "Вероятно, он будет дома вечером.", en: "In all likelihood he will be at home in the evening." }, drill: { jp: "Вероятно он будет дома вечером", en: "In all likelihood he will be at home in the evening" }, hint: "ve-ra-YAT-na — stress on YAT, and the о reduces to a. ⚠️ Glossed «in all likelihood» because наверное at unit 22 already holds «probably» — the two are close in Russian too, but вероятно is the more formal, written one. Same root as верить (unit 22)." },
        { id: "ru-u47l4-zrya", type: "vocab", front: "зря", reading: "zrya", meaning: "for nothing", accept: ["in vain", "pointlessly", "to no purpose"], example: { jp: "Мы зря ждали этот ответ.", en: "We waited for that answer for nothing." }, drill: { jp: "Мы зря работали целый день", en: "We worked all day for nothing" }, hint: "One syllable, ZRYA, and the word starts зр with no vowel. An ADVERB, always before the verb. «Ты зря это сделал» is a gentle Russian reproach: you needn't have." },
        { id: "ru-u47l4-redkiy", type: "vocab", front: "редкий", reading: "redkiy", meaning: "rare", accept: ["uncommon", "infrequent", "sparse"], example: { jp: "Это очень редкий экземпляр.", en: "That is a very rare copy." }, drill: { jp: "Это редкий случай в практике", en: "That is a rare case in practice" }, hint: "RYET-kiy — stress on the first syllable, and the д devoices to t before к. An ADJECTIVE: редкая книга, редкое явление. ⚠️ Its adverb редко, «rarely», is unit 22's — this is the adjective for a thing, and the two do not share a gloss." },
        { id: "ru-u47l4-gromkiy", type: "vocab", front: "громкий", reading: "gromkiy", meaning: "loud", accept: ["noisy", "carrying far", "resounding"], example: { jp: "У него очень громкий голос.", en: "He has a very loud voice." }, drill: { jp: "Это был очень громкий концерт", en: "That was a very loud concert" }, hint: "GROM-kiy — stress on the first syllable. An ADJECTIVE, and the opposite of тихий (unit 29). From гром, thunder. Its adverb громко, «loudly», is not taught, so this card carries both." },
        { id: "ru-u47l4-plotnyy", type: "vocab", front: "плотный", reading: "plotnyy", meaning: "dense", accept: ["thick and solid", "closely packed", "tightly booked"], example: { jp: "У нас очень плотный план на завтра.", en: "We have a very packed plan for tomorrow." }, drill: { jp: "Это очень плотный лист бумаги", en: "That is a very dense sheet of paper" }, hint: "PLOT-nyy — stress on the first syllable. An ADJECTIVE. ⚠️ Not толстый (unit 40), which is thick as a book is thick: плотный is dense, closely packed — плотная бумага, плотный график. Russians say «плотный день» of a day with no gaps in it." },
      ],
    },
  ],
};
