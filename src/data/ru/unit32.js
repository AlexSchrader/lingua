// RU Unit 32 — Творительный падеж ("The instrumental case") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Conventions: ru/unit1.js §1–§10 and §A–§D, plus ru/unit31.js §1–§7 for the A2
// band. This unit CLOSES unit1.js §5's "INSTRUMENTAL — DEFERRED TO A2. Nothing in
// u1–u30 teaches it."
//
// ⚠️ THE SCAFFOLD TITLE WAS "Feelings and states" AND A1 ALREADY WROTE THAT UNIT —
// u28 Чувства и характер (грустный · злой · спокойный · довольный · гордый ·
// странный · характер · чувство · настроение · страх · мечта · душа). Rethemed to
// the instrumental, which keeps the slot honest rather than abandoning it: the
// instrumental IS how Russian says the state you are in with respect to something
// — гордиться сыном, интересоваться музыкой, казаться усталым. unit31.js §6 has
// the whole retheme table.
//
// WHAT THE CASE DOES, in the order the four lessons take it:
//   l1  the five prepositions that GOVERN it — над · под · перед · между · за
//   l2  the verbs that take it with NO preposition at all
//   l3  быть / стать + instrumental: what someone IS or BECOMES
//   l4  the instrumental of MEANS — by what, with what, of what kind
//
// ⚠️ THE BARE INSTRUMENTAL OF TIME IS TAUGHT HERE AND HAS NO CARD, deliberately.
// утром · вечером · днём · ночью · летом · зимой · весной · осенью are the most
// common instrumentals in the language and every one of them reads as a free
// front — but every one is also the bare instrumental of a noun A1 already taught
// (утро u11, вечер u11, день u3, ночь u5, and all four seasons u16), and
// unit1.js §5's last rule is that an inflected form is never its own card. So
// they are taught in this unit's examples and hints (весной in `становиться`,
// утром already planted at u31l4) and nowhere as a front. unit31.js §3 records
// the refusal in full.
//
// ⚠️ TWO FRONTS REFUSED IN THIS UNIT, both for reasons a later block would
// otherwise re-discover:
//   `вес` (a weight) — was refused here on a §1(b) soft-sign reading collision
//        with `весь`, both being "ves" because §1 drops ь. ✅ THAT REASONING WAS
//        SUPERSEDED WHILE u37 WAS BEING WRITTEN AND `вес` IS NOW CARDED, at u37l3.
//        `весь` turned out not to be cardable at all: it is the masculine of the
//        same lexeme as `всё`, which A1 carded at u3l2, so carding it would give
//        one word two mastery tracks — unit1.js §5's "an inflected form is never
//        its own card". With весь out of the language there is no pair left for
//        вес to collide with, and it is the only "ves" a learner ever types.
//        Recorded here rather than deleted because the §1(b) test itself was
//        applied correctly; only one of its two members changed.
//   `тип` (a type) — REFUSED as redundant beside `вид`, which is not carded
//        either: `вид` is the metalinguistic word this band uses for ASPECT
//        (u31's title is Вид глагола), and carding it as "a kind" while теaching
//        it as "aspect" three units earlier is a trap. Neither is carded; both
//        are available to block 2 if it wants one, but not both.
//
// ⚠️ ONE LEXEME CALL RECORDED (unit1.js §D — a judgement, not a measurement):
//   `гордиться` beside u28 `гордый` — SAME ROOT, and §D's test ("would a learner
//        who knows one already know the other?") leans yes on the surface. Carded
//        anyway, and the reason is that the verb's CONTENT here is not its meaning
//        but its CASE GOVERNMENT: гордиться takes the bare instrumental, which is
//        this unit's entire subject and which the adjective гордый teaches nothing
//        about. Gloss collision checked, not assumed: гордый normalises to
//        "proud", гордиться to "be proud of".
//   AVOIDED on the same test: `гордость` (vs both of the above) · `сторона` is
//        NOT avoided but is deferred to u33, where с той стороны makes it a
//        genitive card · `помощь` (vs u20 помогать, the same shape as u20's own
//        refusal of боль beside болеть) · `встреча` (vs u23 встречать) ·
//        `работник` (vs u4 работать, which §D already refused as работа).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT32 = {
  id: "ru-u32",
  lang: "ru",
  title: "Творительный падеж",
  order: 32,
  stage: "a2",
  lessons: [
    {
      id: "ru-u32l1",
      unit: 32,
      lesson: 1,
      title: "Above, under, behind: the five prepositions",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say where something sits in relation to something else, putting the second noun into the instrumental the preposition demands.",
      items: [
        { id: "ru-u32l1-nad", type: "vocab", front: "над", reading: "nad", meaning: "above", accept: ["over", "on top of", "higher than"], example: { jp: "Лампа над столом очень старая.", en: "The lamp above the table is very old." }, drill: { jp: "Небо над городом тёмное", en: "The sky above the town is dark" }, hint: "One syllable, NAD, and the д goes quiet to t before a pause. It takes the INSTRUMENTAL: над столОМ, над городОМ. Masculine and neuter nouns end -ом or -ем; feminine end -ой or -ей." },
        { id: "ru-u32l1-pod", type: "vocab", front: "под", reading: "pod", meaning: "under", accept: ["underneath", "below", "beneath"], example: { jp: "Твоя сумка под кроватью.", en: "Your bag is under the bed." }, drill: { jp: "Кошка под этим стулом", en: "The cat is under this chair" }, hint: "One syllable, POD, said POT at the end of a breath. Instrumental again — под столОМ. Note кроватью: a feminine noun in -ь takes -ью, not -ой." },
        { id: "ru-u32l1-pered", type: "vocab", front: "перед", reading: "pered", meaning: "in front of", accept: ["before", "ahead of", "outside"], example: { jp: "Перед моим домом маленький сад.", en: "In front of my house there is a small garden." }, drill: { jp: "Автобус перед нашим домом", en: "The bus is in front of our house" }, hint: "PE-ret — stress on the first syllable, and the final д says t. Instrumental: перед домОМ. It also means «before» in time — перед обедом, before lunch." },
        { id: "ru-u32l1-mezhdu", type: "vocab", front: "между", reading: "mezhdu", meaning: "between", accept: ["in between", "among two", "halfway between"], example: { jp: "Аптека между банком и почтой.", en: "The chemist is between the bank and the post office." }, drill: { jp: "Между городом и морем лес", en: "Between the town and the sea there is a forest" }, hint: "MEZH-du — stress on the first syllable. It needs TWO instrumentals joined by и: между банкОМ и почтОЙ. Watch the second one — почта is feminine, so it ends -ой." },
        { id: "ru-u32l1-za", type: "vocab", front: "за", reading: "za", meaning: "behind", accept: ["round the back of", "beyond", "past"], example: { jp: "Наш новый дом за парком и школой.", en: "Our new house is behind the park and the school." }, drill: { jp: "За домом маленький сад", en: "Behind the house is a small garden" }, hint: "One syllable, ZA. Behind something, with the instrumental — за домОМ. ⚠️ The same за takes the ACCUSATIVE when it means «for» or names a stretch of time: спасибо за письмо, за час. One word, two cases, two jobs." },
        { id: "ru-u32l1-krysha", type: "vocab", front: "крыша", reading: "krysha", meaning: "a roof", accept: ["roof", "the roof", "a rooftop"], example: { jp: "Под крышей нашего дома живут птицы.", en: "Birds live under the roof of our house." }, drill: { jp: "Крыша нашего дома старая", en: "The roof of our house is old" }, hint: "KRY-sha — stress on the first syllable, and ы is the tight back vowel from unit 5. Feminine (-а). Instrumental крышей — after ш the ending is -ей, never -ой." },
      ],
    },
    {
      id: "ru-u32l2",
      unit: 32,
      lesson: 2,
      title: "Verbs that take it with no preposition",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you use, study, take an interest in or are proud of, using the bare instrumental with no preposition at all.",
      items: [
        { id: "ru-u32l2-polzovatsya", type: "vocab", front: "пользоваться", reading: "polzovatsya", meaning: "to make use of", accept: ["to use", "to go by way of", "to have the use of"], example: { jp: "Я не люблю пользоваться этим телефоном.", en: "I do not like using this phone." }, drill: { jp: "Можно пользоваться твоим компьютером", en: "May I use your computer" }, hint: "POL-za-vat-sya — stress on the first syllable. It takes the INSTRUMENTAL and nothing else: пользоваться телефонОМ. No preposition — the bare case already means «by means of»." },
        { id: "ru-u32l2-zanimatsya", type: "vocab", front: "заниматься", reading: "zanimatsya", meaning: "to be busy with", accept: ["to study", "to practise", "to be occupied with"], example: { jp: "Моя сестра занимается музыкой каждый день.", en: "My sister does music every day." }, drill: { jp: "Он хочет заниматься спортом", en: "He wants to take up sport" }, hint: "za-ni-MAT-sya — stress on MAT. Instrumental: заниматься спортОМ, музыкОЙ. One verb covering «to study», «to practise» and «to be occupied with»." },
        { id: "ru-u32l2-interesovatsya", type: "vocab", front: "интересоваться", reading: "interesovatsya", meaning: "to take an interest in", accept: ["to be interested in", "to care about", "to follow"], example: { jp: "Мой брат интересуется историей и музыкой.", en: "My brother takes an interest in history and music." }, drill: { jp: "Он хочет интересоваться спортом", en: "He wants to take an interest in sport" }, hint: "in-te-re-so-VAT-sya — six syllables, stress on VAT. Instrumental: интересоваться спортОМ. Its root is интерес, so интересный has already given you half the word." },
        { id: "ru-u32l2-gorditsya", type: "vocab", front: "гордиться", reading: "gorditsya", meaning: "to be proud of", accept: ["to take pride in", "to be pleased with", "to boast of"], example: { jp: "Отец гордится моей сестрой и мной.", en: "Father is proud of my sister and of me." }, drill: { jp: "Можно гордиться этой работой", en: "One can be proud of this work" }, hint: "gar-DIT-sya — stress on DIT. Instrumental: гордиться сынОМ, сестрОЙ, мнОЙ. The adjective гордый is the same root; the verb is what you do with the pride, and the case is the point." },
        { id: "ru-u32l2-kazatsya", type: "vocab", front: "казаться", reading: "kazatsya", meaning: "to seem", accept: ["to appear", "to come across as", "to look like"], example: { jp: "Эта книга кажется мне очень трудной.", en: "This book seems very hard to me." }, drill: { jp: "Он хочет казаться умным", en: "He wants to seem clever" }, hint: "ka-ZAT-sya — stress on ZAT, and the з is said z. Instrumental for what someone seems: казаться умнЫМ. Everyday «мне кажется», it seems to me, adds the dative of the person — unit 34." },
        { id: "ru-u32l2-stanovitsya", type: "vocab", front: "становиться", reading: "stanovitsya", meaning: "to be turning into", accept: ["to be becoming", "to be getting", "to grow into"], example: { jp: "Весной погода становится тёплой.", en: "In spring the weather turns warm." }, drill: { jp: "Я не хочу становиться злым", en: "I do not want to turn into an angry person" }, hint: "sta-na-VIT-sya — stress on VIT. The imperfective partner of стать (unit 31): стать is the change finished, становиться is the change under way. Both take the instrumental. Note весной in the example — a bare instrumental doing the work of «in the»." },
      ],
    },
    {
      id: "ru-u32l3",
      unit: 32,
      lesson: 3,
      title: "What someone is and what they become",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name someone's role in a group or a workplace, and say what they have become, with быть or стать plus the instrumental.",
      items: [
        { id: "ru-u32l3-spetsialist", type: "vocab", front: "специалист", reading: "spetsialist", meaning: "an expert", accept: ["a specialist", "an authority", "a trained professional"], example: { jp: "Наш новый специалист очень хороший.", en: "Our new expert is very good." }, drill: { jp: "Этот специалист работает в фирме", en: "This expert works at the firm" }, hint: "spe-tsi-a-LIST — four syllables, stress on the last. Masculine (consonant ending). After быть or стать it goes into the instrumental: стать специалистОМ." },
        { id: "ru-u32l3-chlen", type: "vocab", front: "член", reading: "chlen", meaning: "a member", accept: ["member", "one of the members", "a participant"], example: { jp: "Каждый член нашей семьи говорит по-русски.", en: "Every member of our family speaks Russian." }, drill: { jp: "Он новый член нашей группы", en: "He is a new member of our group" }, hint: "One syllable, CHLEN. Masculine. A member of a family, a club or a team. With стать: стать членОМ клуба." },
        { id: "ru-u32l3-gruppa", type: "vocab", front: "группа", reading: "gruppa", meaning: "a group", accept: ["a class of students", "a band", "a party of people"], example: { jp: "Наша группа очень большая и весёлая.", en: "Our group is very big and cheerful." }, drill: { jp: "Наша группа работает вместе", en: "Our group works together" }, hint: "GRUP-pa — stress on the first syllable, and the double пп is held a beat longer than one п. Feminine (-а). Instrumental группОЙ." },
        { id: "ru-u32l3-komanda", type: "vocab", front: "команда", reading: "komanda", meaning: "a team", accept: ["team", "a crew", "an order given"], example: { jp: "Наша команда играет каждую субботу.", en: "Our team plays every Saturday." }, drill: { jp: "Наша команда играет очень хорошо", en: "Our team plays very well" }, hint: "ka-MAN-da — stress on MAN. Feminine (-а). A team, and also a command someone gives. Instrumental командОЙ." },
        { id: "ru-u32l3-rukovoditel", type: "vocab", front: "руководитель", reading: "rukovoditel", meaning: "a manager", accept: ["a head", "a leader", "the person in charge"], example: { jp: "Наш руководитель работает в этом офисе.", en: "Our manager works in this office." }, drill: { jp: "Кто ваш новый руководитель", en: "Who is your new manager" }, hint: "ru-ka-va-DI-tel — stress on DI. MASCULINE even though it ends in -ь, like учитель. Its root is the verb for leading, and it is a step more formal than начальник." },
        { id: "ru-u32l3-sotrudnik", type: "vocab", front: "сотрудник", reading: "sotrudnik", meaning: "a member of staff", accept: ["an employee", "a staff member", "someone on the payroll"], example: { jp: "Каждый сотрудник этой фирмы знает директора.", en: "Every member of staff at this firm knows the director." }, drill: { jp: "Он новый сотрудник нашей фирмы", en: "He is a new member of staff at our firm" }, hint: "sa-TRUD-nik — stress on TRUD. Masculine. Where коллега is the person you sit beside, сотрудник is anyone the firm employs. Instrumental сотрудникОМ." },
      ],
    },
    {
      id: "ru-u32l4",
      unit: 32,
      lesson: 4,
      title: "By what means, and of what kind",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what a thing is made of and what it is done with, using the instrumental of means.",
      items: [
        { id: "ru-u32l4-instrument", type: "vocab", front: "инструмент", reading: "instrument", meaning: "a tool", accept: ["an implement", "a musical instrument", "a piece of equipment"], example: { jp: "Этот инструмент очень старый и плохой.", en: "This tool is very old and bad." }, drill: { jp: "Этот инструмент очень хороший", en: "This tool is very good" }, hint: "in-stru-MENT — stress on the last syllable. Masculine. A tool, and also a musical instrument. The thing you work WITH goes into the instrumental: работать этим инструментОМ." },
        { id: "ru-u32l4-sredstvo", type: "vocab", front: "средство", reading: "sredstvo", meaning: "a means", accept: ["a way of doing it", "a remedy", "a resource"], example: { jp: "Метро — быстрое средство в городе.", en: "The metro is a fast means of getting about town." }, drill: { jp: "Какое средство ты выбираешь", en: "Which means do you choose" }, hint: "SRED-stva — stress on the first syllable, and the final о says a. Neuter (-о). A means or a way; in a chemist's shop it is a remedy. Instrumental средствОМ." },
        { id: "ru-u32l4-sposob", type: "vocab", front: "способ", reading: "sposob", meaning: "a way of doing something", accept: ["a method", "an approach", "a technique"], example: { jp: "Есть другой способ решить эту проблему.", en: "There is another way to solve this problem." }, drill: { jp: "Это хороший способ работать", en: "This is a good way to work" }, hint: "SPO-sap — stress on the first syllable, and the final б says p. Masculine. A way or a method. Russian says «таким способОМ» — by that means — in the instrumental." },
        { id: "ru-u32l4-material", type: "vocab", front: "материал", reading: "material", meaning: "raw material", accept: ["a material", "what it is made of", "fabric"], example: { jp: "Дерево — хороший материал в доме.", en: "Wood is a good material in a house." }, drill: { jp: "Какой это материал", en: "What material is this" }, hint: "ma-te-ri-AL — four syllables, stress on the last. Masculine. What a thing is made of: wood, stone, cloth. Also the material of a lesson or a book." },
        { id: "ru-u32l4-kachestvo", type: "vocab", front: "качество", reading: "kachestvo", meaning: "a quality", accept: ["the standard of something", "how good it is", "a good point"], example: { jp: "Качество этой одежды очень хорошее.", en: "The quality of these clothes is very good." }, drill: { jp: "Качество этой работы плохое", en: "The quality of this work is bad" }, hint: "KA-chest-va — stress on the first syllable, and the final о says a. Neuter (-о). How good a thing is, and also a quality a person has." },
        { id: "ru-u32l4-forma", type: "vocab", front: "форма", reading: "forma", meaning: "a shape", accept: ["a form", "an outline", "a uniform"], example: { jp: "У этого стола странная форма.", en: "This table has a strange shape." }, drill: { jp: "Какая форма у этого стола", en: "What shape is this table" }, hint: "FOR-ma — stress on the first syllable. Feminine (-а). A shape, and also the uniform you wear for work or school. Instrumental формОЙ." },
      ],
    },
  ],
};
