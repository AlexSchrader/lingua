// RU Unit 68 — Отвлечённые понятия ("Abstract notions") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 1 (u61–u73). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, and THIS BAND's conventions in ru/unit61.js §1–§8.
//
// THE SLOT TITLE WAS "Abstract ideas" and the domain survives, but A2 spent the
// REASONING half of it and this unit must stay off that: u52 Причина и вывод
// carries довод · следствие · основа · принцип · источник · влияние · задача ·
// метод · система · необходимость · логика, and u39 Мнение и речь carries мнение ·
// смысл · мысль · вывод · взгляд · суть · речь · факт · доказательство. u40
// Качества и признаки carries the quality adjectives and u32/u37 carry качество ·
// форма · количество.
//
// SO THIS UNIT IS THE ONTOLOGY, not the argument: what a thing IS (a phenomenon,
// an image, an object, reality, existence, truth), how it is VALUED (a value, a
// model of perfection, a criterion, a measure, a limit, a scale), how two things
// RELATE (similarity, distinction, interconnection, unity, multitude, a shade of
// meaning), and the abstract/concrete axis itself.
//
// ⚠️ THE TITLE USES `понятие` AND THE UNIT DOES NOT TEACH IT. That is deliberate,
//   not an oversight: `понятие` is §D against `понять` (u31) — "to realise" hands
//   a learner "a notion" — so it may appear in a unit title, which is not a card,
//   and nowhere as a front. ⚠️ `явный` is refused for the mirror-image reason:
//   this unit teaches `явление` at l1, which would then give it away inside the
//   same unit. A derivation test applies to the block's OWN cards, not only to
//   what earlier bands taught.
//
// ⚠️ FOURTEEN REFUSED, and this is the §D-heaviest unit in the block because every
//   abstract noun in Russian sits on a root some earlier band has spent:
//     понятие (понять u31) · суждение (суд u51 AND осуждать, carded by this block
//     at u61l3) · сущность and сущее (существовать u52) · признак (признавать
//     u59) · закономерность (закон u51) · зависимость (зависеть u46) ·
//     условность (условие u34) · норма (нормально u7) · противоположность and
//     противоположный (против u46 AND противоречие u52) · сторонний (сторона u33
//     AND сторонник, this block's u61l1) · характерный (характер u28) ·
//     внутренний (внутри u14) · действительность (действительно, this block's
//     u61l4) · относительность (относительно, this block's u62l4) · исключение
//     (исключать, this block's u64l2) · частица (часть u37) · грань (граница u30).
//   `целое` — NOT §D: it is the substantivised neuter of целый (u24), which
//        unit1.js §5's last rule forbids outright, exactly as `лёгкое` was
//        refused at A2 (unit51.js §2(b)).
//   `скрытый` — a PARTICIPLE, so Grammar 6–8's subject and block 2's to spend.
//
// ★ A FREE-PASS TRAP CAUGHT AT AUTHORING, worth the next seat's attention.
//   `идеал` transliterates to "ideal" under unit1.js §1, so the obvious gloss
//   "an ideal" normalises to "ideal", which IS the reading — `produceIsFreePass`
//   fires and the prompt gives the answer away (unit1.js §9). It is glossed
//   "a model of perfection" instead, and "a perfect model" was kept out of
//   accept[] for the same reason. `объект` · `аспект` · `критерий` · `масштаб` ·
//   `реальность` were all checked the same way and are safe: their readings
//   (obekt · aspekt · kriteriy · masshtab · realnost) are not their English words.
//
// ★ THREE -ь NOUNS, all FEMININE: реальность · ценность · взаимосвязь. The -ость
//   and -зь endings are reliably feminine, which is the one corner of unit1.js §3
//   where the spelling DOES predict the gender — said in each hint anyway.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT68 = {
  id: "ru-u68",
  lang: "ru",
  title: "Отвлечённые понятия",
  order: 68,
  stage: "b1",
  lessons: [
    {
      id: "ru-u68l1",
      unit: 68,
      lesson: 1,
      title: "What a thing is",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about things in the abstract — a phenomenon, an image in the mind, an object of study, reality, existence itself, and an established truth.",
      items: [
        { id: "ru-u68l1-yavlenie", type: "vocab", front: "явление", reading: "yavlenie", meaning: "a phenomenon", accept: ["an occurrence worth noting", "something that occurs", "a manifestation"], example: { jp: "Это редкое явление, и объяснить его наука пока не может.", en: "That is a rare phenomenon, and science cannot yet explain it." }, drill: { jp: "Это очень редкое явление", en: "That is a very rare phenomenon" }, hint: "yav-LE-ni-ye — four syllables, stress on LE. NEUTER (-е). ⚠️ Случай from unit 24 is one occasion; явление is a KIND of thing that happens and can be studied. In a play it also means a scene." },
        { id: "ru-u68l1-obraz", type: "vocab", front: "образ", reading: "obraz", meaning: "an image in the mind", accept: ["a mental picture", "a figure in a book", "the way something appears"], example: { jp: "В книге очень сильный образ города, хотя автор никогда там не жил.", en: "There is a very powerful image of the city in the book, although the author never lived there." }, drill: { jp: "Это очень сильный образ", en: "That is a very powerful image" }, hint: "O-braz — stress on the first syllable. MASCULINE. ⚠️ Образец from unit 50 is a physical sample; образ is a picture in the mind or in a book. ⚠️ And «образ жизни» means a way of life, which is the phrase you will meet most often." },
        { id: "ru-u68l1-obekt", type: "vocab", front: "объект", reading: "obekt", meaning: "an object of study", accept: ["the thing acted upon", "a target of attention", "an installation"], example: { jp: "Объект исследования выбирали очень долго, но метод меняли несколько раз.", en: "The object of the research was chosen over a long time, but the method was changed several times." }, drill: { jp: "Объект исследования выбирали долго", en: "The object of the research was long in the choosing" }, hint: "ab-YEKT — stress on YEKT, and ⚠️ THE ъ IS SILENT AND DROPPED FROM THE READING, so объект → \"obekt\" — unit 1 §1. MASCULINE. In building and industry it also means a site: «строительный объект»." },
        { id: "ru-u68l1-realnost", type: "vocab", front: "реальность", reading: "realnost", meaning: "reality", accept: ["the way things actually are", "what is actually there", "the real world"], example: { jp: "Реальность оказалась сложнее, чем все думали.", en: "Reality turned out to be more complicated than everyone thought." }, drill: { jp: "Реальность оказалась совсем другой", en: "Reality turned out to be quite different" }, hint: "ri-AL-nast — stress on AL. ⚠️ FEMININE, and the -ость ending is one of the few in Russian that reliably predicts it. «В реальности» means in actual fact, and it does the same job as действительно from unit 61." },
        { id: "ru-u68l1-bytie", type: "vocab", front: "бытие", reading: "bytie", meaning: "existence", accept: ["being as a whole", "the fact of existing", "life as it is"], example: { jp: "Бытие это главный вопрос всей науки, и ответа на него нет.", en: "Existence is the main question of all science, and there is no answer to it." }, drill: { jp: "Бытие это главный вопрос науки", en: "Existence is the main question of science" }, hint: "by-ti-YE — three syllables, ⚠️ STRESS ON THE LAST, which almost every learner gets wrong. NEUTER (-е). It is the noun of быть from unit 22 and belongs entirely to philosophy — a person never says it about their own day." },
        { id: "ru-u68l1-istina", type: "vocab", front: "истина", reading: "istina", meaning: "an established truth", accept: ["a truth that holds", "what is really so", "verity"], example: { jp: "Это старая истина, но каждое поколение узнаёт её заново.", en: "That is an old truth, but every generation learns it anew." }, drill: { jp: "Это очень старая истина", en: "That is a very old truth" }, hint: "IS-ti-na — stress on the first syllable. FEMININE (-а). ⚠️ Правда from unit 22 is the truth about a particular matter — what actually happened; истина is a truth that holds generally, and a Russian court deals in правда while philosophy deals in истина." },
      ],
    },
    {
      id: "ru-u68l2",
      unit: 68,
      lesson: 2,
      title: "Judging and valuing it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Judge a thing by its worth — a value, a model of perfection, a criterion, a measure, a limit, and the scale it is on.",
      items: [
        { id: "ru-u68l2-tsennost", type: "vocab", front: "ценность", reading: "tsennost", meaning: "a value", accept: ["worth", "what something is worth", "a thing held precious"], example: { jp: "Главная ценность этой работы не в деньгах, а в опыте, который она даёт.", en: "The main value of that work is not in money but in the experience it gives." }, drill: { jp: "Главная ценность здесь не в деньгах", en: "The main value here is not in money" }, hint: "TSEN-nast — stress on the first syllable, and the нн is held a beat longer. FEMININE (-ость). ⚠️ In the plural «ценности» means valuables in a bank and values in a society, and Russian uses one word for both." },
        { id: "ru-u68l2-ideal", type: "vocab", front: "идеал", reading: "ideal", meaning: "a model of perfection", accept: ["the best imaginable", "a standard to aim at", "what you aspire to"], example: { jp: "У каждого свой идеал, и спорить об этом вряд ли стоит.", en: "Everyone has their own model of perfection, and it is hardly worth arguing about it." }, drill: { jp: "У каждого есть свой идеал", en: "Everyone has their own ideal" }, hint: "i-di-AL — stress on the last syllable. MASCULINE. ⚠️ Glossed the long way round ON PURPOSE: it transliterates to \"ideal\", which is its own English gloss, so the short gloss would give the answer away — the free-pass trap of unit 1 §9." },
        { id: "ru-u68l2-kriteriy", type: "vocab", front: "критерий", reading: "kriteriy", meaning: "a criterion", accept: ["a test for judging", "a yardstick", "the basis of a judgement"], example: { jp: "Какой критерий здесь главный, никто так и не объяснил.", en: "Nobody ever explained which criterion is the main one here." }, drill: { jp: "Этот критерий самый главный", en: "That criterion is the main one" }, hint: "kri-TE-ri-y — four syllables, stress on TE. MASCULINE. ⚠️ Правило from unit 41 tells you what to do; a критерий tells you how to judge whether something passes. Its plural критерии is what a Russian document lists." },
        { id: "ru-u68l2-mera", type: "vocab", front: "мера", reading: "mera", meaning: "a measure taken", accept: ["a step taken officially", "the degree of something", "a standard amount"], example: { jp: "Нужна какая-то мера, потому что затягивать это больше нельзя.", en: "Some measure is needed, because it cannot be dragged out any further." }, drill: { jp: "Здесь нужна какая-то мера", en: "Some measure is needed here" }, hint: "ME-ra — stress on the first syllable. FEMININE (-а). ⚠️ THREE SENSES AND ALL THREE ARE COMMON: a unit of measurement, a degree («в большой мере»), and an official step («принять меры», to take measures)." },
        { id: "ru-u68l2-predel", type: "vocab", front: "предел", reading: "predel", meaning: "a limit", accept: ["the furthest point", "a ceiling", "a boundary of what is possible"], example: { jp: "У терпения есть предел, и в тот день он был уже близко.", en: "Patience has a limit, and that day it was already close." }, drill: { jp: "У терпения есть свой предел", en: "Patience has its own limit" }, hint: "pri-DEL — stress on the last syllable. MASCULINE. ⚠️ Граница from unit 30 is a line on a map; предел is how far a thing can go. «До предела» means to the utmost, and «в пределах» means within the bounds of." },
        { id: "ru-u68l2-masshtab", type: "vocab", front: "масштаб", reading: "masshtab", meaning: "a scale", accept: ["the size of an undertaking", "scope", "proportions"], example: { jp: "Масштаб этой работы стал ясен только тогда, когда приступили к ней.", en: "The scale of that work became clear only when they set about it." }, drill: { jp: "Масштаб работы был очень большой", en: "The scale of the work was very large" }, hint: "mash-TAB — stress on the last syllable, and ⚠️ THE сшт IS SAID shsht, which the spelling hides. MASCULINE. It is the scale of a map AND the scale of an undertaking, exactly as in English." },
      ],
    },
    {
      id: "ru-u68l3",
      unit: 68,
      lesson: 3,
      title: "Same and different",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Relate two things — a similarity, a distinction, a mutual connection, unity, a multitude of them, and a shade of meaning.",
      items: [
        { id: "ru-u68l3-skhodstvo", type: "vocab", front: "сходство", reading: "skhodstvo", meaning: "a similarity", accept: ["a resemblance", "a likeness between things", "what two things share"], example: { jp: "Сходство между этими двумя случаями только внешнее, и оно никого не должно обманывать.", en: "The similarity between those two cases is only outward, and it should deceive nobody." }, drill: { jp: "Сходство здесь только внешнее", en: "The similarity here is only outward" }, hint: "SKHOT-stva — stress on the first syllable, and the дс is said ts. NEUTER (-о). It sits on ходить from unit 36 by a long road — things that go together. Похож from unit 10 is the adjective." },
        { id: "ru-u68l3-razlichie", type: "vocab", front: "различие", reading: "razlichie", meaning: "a distinction", accept: ["a difference", "what sets two things apart", "a point of divergence"], example: { jp: "Различие между этими словами тонкое, но для смысла оно очень важное.", en: "The distinction between those words is subtle, but for the meaning it is very important." }, drill: { jp: "Различие между словами очень тонкое", en: "The distinction between the words is very subtle" }, hint: "raz-LI-chi-ye — four syllables, stress on LI. NEUTER (-е). ⚠️ Разный from unit 40 is the adjective various; различие is the named difference itself, and «в отличие от» is the phrase for unlike." },
        { id: "ru-u68l3-vzaimosvyaz", type: "vocab", front: "взаимосвязь", reading: "vzaimosvyaz", meaning: "a mutual connection", accept: ["an interrelation", "a two-way link", "how two things hang together"], example: { jp: "Взаимосвязь этих двух явлений понял только один специалист, и ему долго не верили.", en: "The mutual connection of those two phenomena was understood by only one specialist, and he was long disbelieved." }, drill: { jp: "Взаимосвязь этих явлений очень важна", en: "The connection of these phenomena is very important" }, hint: "vza-i-ma-SVYAZ — four syllables, stress on the last. ⚠️ FEMININE despite the -ь, like связь from unit 43 which it is built on. Взаимный means mutual, so this is a link that runs BOTH ways — which is the whole point of the word." },
        { id: "ru-u68l3-edinstvo", type: "vocab", front: "единство", reading: "edinstvo", meaning: "unity", accept: ["oneness", "being of one piece", "a single whole"], example: { jp: "Единство группы было важнее, чем мнение каждого, и все это понимали.", en: "The unity of the group was more important than everyone's individual opinion, and they all understood that." }, drill: { jp: "Единство группы было очень важно", en: "The unity of the group was very important" }, hint: "yi-DIN-stva — stress on DIN. NEUTER (-о). Built on один from unit 11. ⚠️ It is a political and a philosophical word; for people simply being together Russian says вместе, from unit 7." },
        { id: "ru-u68l3-mnozhestvo", type: "vocab", front: "множество", reading: "mnozhestvo", meaning: "a multitude", accept: ["a great many", "a set of things", "a large number of them"], example: { jp: "В этом докладе множество разных фактов, но главного вывода в нём нет.", en: "There is a multitude of different facts in that report, but it contains no main conclusion." }, drill: { jp: "Здесь множество разных фактов", en: "There is a multitude of different facts here" }, hint: "MNO-zhist-va — stress on the first syllable. NEUTER (-о). ⚠️ Много from unit 37 is the quantifier a lot; множество is a NOUN and takes the genitive after it. In mathematics it is also the word for a set." },
        { id: "ru-u68l3-ottenok", type: "vocab", front: "оттенок", reading: "ottenok", meaning: "a shade of meaning", accept: ["a nuance", "a tint", "a slight difference of tone"], example: { jp: "У этого слова есть оттенок, которого в словаре нет, и его нужно слышать.", en: "That word has a shade of meaning which is not in the dictionary, and you have to hear it." }, drill: { jp: "У этого слова есть другой оттенок", en: "That word has another shade of meaning" }, hint: "at-TE-nak — stress on TE, and the тт is held longer. MASCULINE. ⚠️ Its stem drops the о: оттенка, оттенку. It is BOTH a shade of colour and a shade of meaning, which is why Russian uses it for тёмный and for двусмысленный alike." },
      ],
    },
    {
      id: "ru-u68l4",
      unit: 68,
      lesson: 4,
      title: "Abstract and concrete",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place a thing on the abstract-concrete axis — abstract, concrete, typical, outward — and talk about its depth and about one aspect of it.",
      items: [
        { id: "ru-u68l4-abstraktnyy", type: "vocab", front: "абстрактный", reading: "abstraktnyy", meaning: "abstract", accept: ["not concrete", "existing only as an idea", "theoretical"], example: { jp: "Это слишком абстрактный довод, и в таком виде он никого не убеждает.", en: "That is too abstract an argument, and in that form it persuades nobody." }, drill: { jp: "Это очень абстрактный вопрос", en: "That is a very abstract question" }, hint: "abs-TRAKT-nyy — stress on TRAKT, and the opening абс takes no vowel between б and с. ⚠️ Its reading is \"abstraktnyy\", which is NOT the English word, so the short gloss is safe here — unlike идеал in lesson 2." },
        { id: "ru-u68l4-konkretnyy", type: "vocab", front: "конкретный", reading: "konkretnyy", meaning: "concrete", accept: ["specific", "definite and particular", "nailed down"], example: { jp: "Нужен конкретный план, а не общие слова о том, как всё будет хорошо.", en: "A concrete plan is needed, not general words about how everything will be fine." }, drill: { jp: "Нужен совсем конкретный план", en: "A quite concrete plan is needed" }, hint: "kan-KRET-nyy — stress on KRET. ⚠️ A RUSSIAN USES IT CONSTANTLY where English would say specific: «конкретно» means precisely, and «давай конкретно» means let us get down to specifics. Простой from unit 40 means plain, not concrete." },
        { id: "ru-u68l4-tipichnyy", type: "vocab", front: "типичный", reading: "tipichnyy", meaning: "typical", accept: ["representative", "just what you would expect", "true to the kind"], example: { jp: "Это типичный случай, и такие дела всегда затягивают на много месяцев.", en: "That is a typical case, and such matters are always dragged out for many months." }, drill: { jp: "Это очень типичный случай", en: "That is a very typical case" }, hint: "ti-PICH-nyy — stress on PICH. It sits on тип from unit 60. ⚠️ Обычный from unit 40 means ordinary, which is a judgement about how often; типичный means representative of a class, which is a judgement about kind." },
        { id: "ru-u68l4-vneshniy", type: "vocab", front: "внешний", reading: "vneshniy", meaning: "outward", accept: ["external", "on the surface", "to do with the outside"], example: { jp: "Внешний вид документа был в порядке, но содержание никто не проверил.", en: "The outward appearance of the document was in order, but nobody checked the contents." }, drill: { jp: "Внешний вид был в порядке", en: "The outward appearance was in order" }, hint: "VNESH-niy — stress on the first syllable. ⚠️ «Внешний вид» is the set phrase for appearance and you will meet it on every form. Its opposite внутренний was REFUSED — §D against внутри from unit 14 — so only this half of the pair is a card." },
        { id: "ru-u68l4-glubina", type: "vocab", front: "глубина", reading: "glubina", meaning: "depth", accept: ["how deep something goes", "profundity", "the deep part"], example: { jp: "Глубина этой мысли стала ясна мне только впоследствии.", en: "The depth of that thought became clear to me only subsequently." }, drill: { jp: "Глубина этого вопроса очень большая", en: "The depth of that question is very great" }, hint: "glu-bi-NA — stress on the LAST syllable, which is unusual for a noun of this shape. FEMININE (-а). It is the noun of глубокий from unit 40, and it works for water, for a thought and for a crisis alike." },
        { id: "ru-u68l4-aspekt", type: "vocab", front: "аспект", reading: "aspekt", meaning: "an aspect", accept: ["one side of a question", "a facet", "a way of looking at it"], example: { jp: "Этот аспект вопроса никто не обсуждал, хотя он был самый важный.", en: "Nobody discussed that aspect of the question, although it was the most important one." }, drill: { jp: "Этот аспект никто не обсуждал", en: "Nobody discussed that aspect" }, hint: "as-PEKT — stress on PEKT. MASCULINE. ⚠️ Сторона from unit 33 is a side in the plain sense; аспект is a side of a QUESTION and belongs to a written argument. Its reading \"aspekt\" is not the English word, so the gloss is safe." },
      ],
    },
  ],
};
