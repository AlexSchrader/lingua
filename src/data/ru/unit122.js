// RU Unit 122 — Числа и расчёт ("Numbers and calculation") — B2
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 2 (B2)` — NO SUBJECT NAMED. The slot was
// allocated centrally to the measured hole, and the measurement is this: the
// course has NUMBERS and it has QUANTITY, and it has nothing at all for
// ARITHMETIC OR FOR A FIGURE ON A PAGE.
//   u21 Числа и цифры — `цифра` · `процент` · `счёт` · `последний`
//   u37 quantity and units — `число` · `итог` · `примерно` · `километр` ·
//       `литр` · `килограмм` · `ровно`
//   u54 — `объём`; u6 — `площадь`; u12 — `угол`; u48 — `делить`
// Not one word for multiplying, subtracting, rounding, an equation, a formula,
// a fraction, a width, a thickness, a scale, a set of scales, a margin of error
// or a chart. That is the hole this unit fills.
//
// ⚠️ CROSS-BLOCK BOUNDARY: `погрешность` AND `диаграмма` ARE THIS UNIT'S BY
// CENTRAL ALLOCATION — block 1's u99 Evidence and sources must not card them
// and does not. Conversely u99 OWNS `статистика` · `достоверный` ·
// `достоверность` · `верификация`, and this unit cards none of them even though
// l4 is about measurement error.
//
// ⚠️ SEVEN CANDIDATES REFUSED, each for a reason a front probe cannot see:
//   `вычисление` — unit1.js §D, against `число` (u37), and a near-duplicate
//     prompt for `подсчёт`, which is carded. `знак` took its place in l2.
//   `сложение`   — §D, against `сложный` (u25), which shares the stem.
//   `расчёт`     — §D, against `счёт` (u21) and `рассчитывать` (u72).
//   `среднее`    — unit51.js §2(b): a SUBSTANTIVISED ADJECTIVE is barred. The
//     mean has to wait for a band willing to card «средний» as an adjective.
//   `равный`     — §D, against `ровно` (u37) and `равнодушный` (u67); the = sign
//     is taught inside `знак`'s hint instead.
//   `отнимать`   — a duplicate prompt for `вычитать`, which is carded.
//   `множитель`  — one lexeme with `умножать`, which is carded.
//   `ось` · `радиус` · `диаметр` · `миллиметр` · `нуль` probe free and are
//     DEFERRED, not refused.
//
// ⚠️ TWO SEEDS FROM THE CREW BRIEF NOT CARDED, AND WHY: `сантиметр` and
// `гектар`. The course already teaches `километр` · `литр` · `килограмм` (u37),
// so a fourth and fifth metric unit buys very little, while `единица` ·
// `шкала` · `весы` · `градус` · `тонна` teach the SYSTEM of measurement, which
// is the thing that was missing. Both are named in `единица`'s and `градус`'s
// hints. 21 of the brief's 23 seeds are carded; these two are the exceptions.
//
// ⚠️ A READING HAZARD CHECKED AND CLEARED: `подсчёт` reads "podschyot",
// `зачёт` (u113) reads "zachyot" and u117's `за счёт` reads "zaschyot" — three
// -чёт words across my range, all three distinct as readings, and each one's
// hint points at the other two.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT122 = {
  id: "ru-u122",
  lang: "ru",
  title: "Числа и расчёт",
  order: 122,
  stage: "b2",
  lessons: [
    {
      id: "ru-u122l1",
      unit: 122,
      lesson: 1,
      title: "Doing the sum",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say to multiply, to subtract, to add on and to round off, and name a tally and a remainder.",
      items: [
        { id: "ru-u122l1-umnozhat", type: "vocab", front: "умножать", reading: "umnozhat", meaning: "to multiply", accept: ["to multiply one number by another", "to times two numbers", "to increase many times over"], example: { jp: "Умножать в голове он умеет лучше всех в классе.", en: "He can multiply in his head better than anyone in the class." }, drill: { jp: "Умножать в голове он умеет лучше всех", en: "He can multiply in his head better than anyone" }, hint: "um-na-ZHAT — stress on the last syllable, the о reducing to a. Imperfective infinitive; the perfective is умножить. ⚠️ TAKES на + the ACCUSATIVE: «умножить пять НА три». ⚠️ Built on `много` — «to make many» — and that is why the FIGURATIVE sense works too: «умножить усилия», to multiply one's efforts. `делить` (u48) is already taught as its opposite." },
        { id: "ru-u122l1-vychitat", type: "vocab", front: "вычитать", reading: "vychitat", meaning: "to subtract", accept: ["to take one number from another", "to deduct a number", "to work out the difference"], example: { jp: "Вычитать он не любит, потому что всегда делает ошибку.", en: "He does not like subtracting, because he always makes a mistake." }, drill: { jp: "Вычитать он не любит", en: "He does not like subtracting" }, hint: "vy-chi-TAT — stress on the last syllable. Imperfective infinitive; the perfective is вычесть. ⚠️ IT LOOKS LIKE `читать` (u4, «to read») AND IS NOT THAT WORD — the root here is чёт «a count», the same one inside `счёт` (u21). ⚠️ A second, unrelated sense does exist — «вычитать текст», to proofread — and the stress moves there (VY-chi-tat). Takes из + the genitive: «вычесть ИЗ суммы»." },
        { id: "ru-u122l1-pribavlyat", type: "vocab", front: "прибавлять", reading: "pribavlyat", meaning: "to add on", accept: ["to add a number to another", "to increase by an amount", "to put more on top"], example: { jp: "Прибавлять надо не только дни, но и часы.", en: "You have to add on not only the days but the hours too." }, drill: { jp: "Прибавлять надо не только дни", en: "You have to add on not only the days" }, hint: "pri-bav-LYAT — stress on the last syllable. Imperfective infinitive; the perfective is прибавить. ⚠️ TAKES к + the DATIVE: «прибавить к сумме». ⚠️ USED FAR BEYOND ARITHMETIC, which is why it is carded rather than a pure maths word: «прибавить шаг» is to walk faster, «прибавить в весе» is to put on weight, and «прибавьте громкости» is turn it up." },
        { id: "ru-u122l1-okruglyat", type: "vocab", front: "округлять", reading: "okruglyat", meaning: "to round off", accept: ["to round a number up or down", "to give a round figure", "to make a number even"], example: { jp: "Округлять лучше вниз, если речь идёт о деньгах.", en: "It is better to round down when it is a question of money." }, drill: { jp: "Округлять лучше вниз", en: "It is better to round down" }, hint: "ak-rug-LYAT — stress on the last syllable, the first о reducing to a. Imperfective infinitive; the perfective is округлить. ⚠️ Built on круглый «round», which this course does not card — the picture is of making a number «round». ⚠️ «Округлить до целого» is to round to a whole number, and «округлённо» means approximately, which is how a Russian report hedges a figure." },
        { id: "ru-u122l1-podschyot", type: "vocab", front: "подсчёт", reading: "podschyot", meaning: "a counting-up", accept: ["a count of things", "a working-out of a total", "a reckoning"], example: { jp: "Подсчёт показал, что денег не хватает на целый месяц.", en: "The tally showed that the money is short by a whole month." }, drill: { jp: "Подсчёт показал очень большую ошибку", en: "The tally showed a very large error" }, hint: "pat-SCHYOT — stress on the СЧЁТ, which carries the ё and is therefore stressed (unit1.js §7), and the д devoices to t. MASCULINE. ⚠️ THREE -чёт WORDS ACROSS THIS BAND AND ALL THREE DIFFER AS READINGS: подсчёт \"podschyot\" here, `зачёт` \"zachyot\" at u113, and u117's `за счёт` \"zaschyot\". ⚠️ Built on `счёт` (u21, «a bill») and it is the ACT of counting, not the bill. Often plural: «по моим подсчётам», by my reckoning." },
        { id: "ru-u122l1-ostatok", type: "vocab", front: "остаток", reading: "ostatok", meaning: "a remainder", accept: ["what is left over", "the rest of an amount", "a residue"], example: { jp: "Остаток на счёте он смотрит каждый день.", en: "He looks at the balance in his account every day." }, drill: { jp: "Остаток на счёте он смотрит каждый день", en: "He looks at the balance in his account every day" }, hint: "as-TA-tak — stress on TA, both unstressed о reducing to a. MASCULINE, and ⚠️ THE о DROPS in every other form: остаток → остатка, остатком. ⚠️ THREE SENSES AND ALL THREE ARE DAILY: the remainder in division, the BALANCE on a bank account or phone, and the leftovers of anything («остатки еды»). Built on `остаться` (u35), and this is the noun of that verb's result." },
      ],
    },
    {
      id: "ru-u122l2",
      unit: 122,
      lesson: 2,
      title: "Writing it down on paper",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name an equation, a formula, a coefficient, a fraction, a mathematical sign and a chart.",
      items: [
        { id: "ru-u122l2-uravnenie", type: "vocab", front: "уравнение", reading: "uravnenie", meaning: "an equation", accept: ["a mathematical equation", "a statement that two sides are equal", "the equation"], example: { jp: "Уравнение он решил за минуту, и это было очень быстро.", en: "He solved the equation in a minute, and that was very fast." }, drill: { jp: "Уравнение он решил за минуту", en: "He solved the equation in a minute" }, hint: "u-rav-NE-ni-ye — stress on NE. NEUTER (-ие). ⚠️ Built on ровный / `ровно` (u37, «evenly») in its older form равн- — «a making-equal», which is literally what an equation is. ⚠️ THE VERB IS `решать`, exactly as for a problem: «решить уравнение». The adjective равный «equal» is NOT carded (§D — see the header), so the = sign lives in `знак`'s hint." },
        { id: "ru-u122l2-formula", type: "vocab", front: "формула", reading: "formula", meaning: "a formula", accept: ["a written rule for calculating", "the formula", "a set expression in symbols"], example: { jp: "Формула простая, но помнить её надо точно.", en: "The formula is simple, but it has to be remembered exactly." }, drill: { jp: "Формула очень простая и короткая", en: "The formula is very simple and short" }, hint: "FOR-mu-la — stress on the FIRST syllable, which English speakers get right and Spanish speakers do not. FEMININE (-а). ⚠️ ALSO FIGURATIVE AND COMMON: «формула успеха», the formula for success, and «формула вежливости», a politeness formula — which is exactly what u119's `уважаемый` is. Built on `форма` (u32)." },
        { id: "ru-u122l2-koeffitsient", type: "vocab", front: "коэффициент", reading: "koeffitsient", meaning: "a coefficient", accept: ["a multiplying factor", "a ratio used in a calculation", "the coefficient"], example: { jp: "Коэффициент здесь меньше единицы, и поэтому число становится меньше.", en: "The coefficient here is less than one, and so the number becomes smaller." }, drill: { jp: "Коэффициент здесь меньше единицы", en: "The coefficient here is less than one" }, hint: "ka-e-fi-tsi-ENT — six syllables, stress on the last, with ⚠️ THE э IN THE MIDDLE OF A WORD, which Russian almost never does — коэффициент is one of the few words where it happens, because the о and the э are separate vowels. The double фф is said as one long f. MASCULINE." },
        { id: "ru-u122l2-drob", type: "vocab", front: "дробь", reading: "drob", meaning: "a fraction", accept: ["a number written as one over another", "a vulgar fraction", "a decimal fraction"], example: { jp: "Дробь он писать умеет, а считать с ней ещё нет.", en: "He can write a fraction, but he cannot calculate with one yet." }, drill: { jp: "Дробь он писать умеет", en: "He can write a fraction" }, hint: "DROB — one syllable, with the ь keeping the б soft. ⚠️ FEMININE despite the -ь (unit1.js §3). ⚠️ THREE SENSES AND THEY ARE FAR APART: a fraction, the FORWARD SLASH character («адрес через дробь»), and a DRUM ROLL or the rattle of shot — «барабанная дробь». The maths sense is the one to hold on to. From дробить, to break up." },
        { id: "ru-u122l2-znak", type: "vocab", front: "знак", reading: "znak", meaning: "a written symbol", accept: ["a sign on paper", "a mathematical symbol", "a character or mark"], example: { jp: "Знак в этой формуле самый важный, и писать его надо точно.", en: "The sign in this formula is the most important one, and it must be written exactly." }, drill: { jp: "Знак в этой формуле самый важный", en: "The sign in this formula is the most important one" }, hint: "ZNAK — one syllable, opening with зн. MASCULINE. ⚠️ Built on `знать` (u4) and NOT on `знакомый` (u56) — a знак is a MARK that stands for something: + − = , a road sign, a zodiac sign, a punctuation mark («знак вопроса»). ⚠️ THE = SIGN IS «знак равенства», which is how this course teaches equality at all, since равный is refused on §D." },
        { id: "ru-u122l2-diagramma", type: "vocab", front: "диаграмма", reading: "diagramma", meaning: "a chart of figures", accept: ["a graph of figures", "a bar or pie chart", "a visual display of numbers"], example: { jp: "Диаграмма показывает всё лучше, чем длинный текст.", en: "A chart shows everything better than a long text." }, drill: { jp: "Диаграмма показывает всё лучше", en: "A chart shows everything better" }, hint: "di-ag-RA-mma — stress on RA, with the double мм said as one long m. FEMININE (-а). ⚠️ THIS CARD IS THIS UNIT'S BY CENTRAL ALLOCATION — block 1's u99 Evidence and sources must not card it. ⚠️ Narrower than English «diagram»: a диаграмма shows NUMBERS. A diagram that explains a mechanism is a «схема», which is not carded here." },
      ],
    },
    {
      id: "ru-u122l3",
      unit: 122,
      lesson: 3,
      title: "Shape and size",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name geometry, a square, a triangle, a perimeter, a width and a thickness.",
      items: [
        { id: "ru-u122l3-geometriya", type: "vocab", front: "геометрия", reading: "geometriya", meaning: "geometry", accept: ["the geometry of shapes", "the study of figures and space", "geometry as a subject"], example: { jp: "Геометрия ему нравится больше, чем все другие предметы.", en: "He likes geometry more than all the other subjects." }, drill: { jp: "Геометрия ему нравится больше других предметов", en: "He likes geometry more than the other subjects" }, hint: "ge-a-MET-ri-ya — stress on MET, the о reducing to a. FEMININE (-я). ⚠️ THE г IS HARD, as it always is in Russian — ge-, never je-, which is the trap for a speaker of English or Spanish. In Russian schools геометрия is a separate subject from алгебра, each with its own textbook and its own mark." },
        { id: "ru-u122l3-kvadrat", type: "vocab", front: "квадрат", reading: "kvadrat", meaning: "a square figure", accept: ["a four-sided equal figure", "the square shape", "a square in geometry"], example: { jp: "Квадрат рисовать легко, а круг гораздо труднее.", en: "A square is easy to draw, but a circle is much harder." }, drill: { jp: "Квадрат рисовать легко", en: "A square is easy to draw" }, hint: "kvad-RAT — stress on the last syllable, opening with the cluster кв. MASCULINE. ⚠️ ALSO THE POWER: «два в квадрате» is two squared, and «метр квадратный» is a square metre. ⚠️ The SHAPE and the AREA UNIT are the same word in Russian, which English splits into square and squared." },
        { id: "ru-u122l3-treugolnik", type: "vocab", front: "треугольник", reading: "treugolnik", meaning: "a triangle", accept: ["a three-sided figure", "the triangle shape", "a triangle in geometry"], example: { jp: "Треугольник может быть разный, и это зависит от сторон.", en: "A triangle can be of different kinds, and that depends on its sides." }, drill: { jp: "Треугольник может быть разный", en: "A triangle can be of different kinds" }, hint: "tre-u-GOL-nik — stress on GOL. MASCULINE. ⚠️ A TRANSPARENT COMPOUND of три (u11) and `угол` (u12, «a corner») — «three-corner», which is also exactly what the Greek word means. ⚠️ Note `уголь` «coal» is deliberately NOT taught anywhere in this course because its reading folds onto угол's; see u111's header." },
        { id: "ru-u122l3-perimetr", type: "vocab", front: "периметр", reading: "perimetr", meaning: "a perimeter", accept: ["the distance round a shape", "the boundary length", "the outside edge measured"], example: { jp: "Периметр найти легко, если знать все четыре стороны.", en: "The perimeter is easy to find if you know all four sides." }, drill: { jp: "Периметр найти легко", en: "The perimeter is easy to find" }, hint: "pe-RI-metr — stress on RI, and the word ends in the cluster -метр with no vowel after it. MASCULINE. ⚠️ ALSO MILITARY AND SECURITY RUSSIAN: «охрана по периметру» is perimeter security, which is where you will meet the word outside a classroom. `площадь` (u6) is the AREA inside; периметр is the line round it." },
        { id: "ru-u122l3-shirina", type: "vocab", front: "ширина", reading: "shirina", meaning: "a width", accept: ["how wide something is", "the breadth", "the measurement across"], example: { jp: "Ширина двери здесь меньше, чем нужно для этого шкафа.", en: "The width of the door here is less than is needed for this cupboard." }, drill: { jp: "Ширина двери здесь меньше", en: "The width of the door here is less" }, hint: "shi-ri-NA — stress on the LAST syllable, which is the pattern for this whole family of nouns (ширина, длина, глубина, толщина). FEMININE (-а). ⚠️ Built on широкий «wide», reachable from the taught corpus. ⚠️ Also GEOGRAPHICAL LATITUDE — «северная широта» uses a related form — but ширина itself is the measurement across a thing." },
        { id: "ru-u122l3-tolshchina", type: "vocab", front: "толщина", reading: "tolshchina", meaning: "a thickness", accept: ["how thick something is", "the depth of a layer", "the measurement through"], example: { jp: "Толщина стены здесь почти метр, и поэтому в доме тихо.", en: "The thickness of the wall here is almost a metre, and so the house is quiet." }, drill: { jp: "Толщина стены здесь почти метр", en: "The thickness of the wall here is almost a metre" }, hint: "tal-shchi-NA — stress on the last syllable, with щ the long soft sh of unit 3 and the о reducing to a. FEMININE (-а). ⚠️ SAME FAMILY AND SAME STRESS PATTERN AS `ширина` — learn the two together, and note Russian builds all of these from an adjective + -ина. Built on толстый «thick», reachable from the corpus." },
      ],
    },
    {
      id: "ru-u122l4",
      unit: 122,
      lesson: 4,
      title: "Measuring, and how far out you are",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a unit of measurement, a scale, a set of scales, a degree, a tonne and a margin of error.",
      items: [
        { id: "ru-u122l4-edinitsa", type: "vocab", front: "единица", reading: "edinitsa", meaning: "a unit of measurement", accept: ["one unit", "a single unit of a system", "the unit used to measure"], example: { jp: "Единица здесь не метр, а километр, и это важно.", en: "The unit here is not the metre but the kilometre, and that matters." }, drill: { jp: "Единица здесь не метр", en: "The unit here is not the metre" }, hint: "ye-di-NI-tsa — stress on NI, with ц as ts. FEMININE (-а). ⚠️ THREE SENSES AND THE SECOND WILL SURPRISE YOU: a unit of measurement; the DIGIT ONE; and the WORST SCHOOL MARK in the Russian five-point system — «получить единицу» is a disaster. ⚠️ The course teaches `километр` · `литр` · `килограмм` at u37, and `сантиметр` and `гектар` are deliberately not carded — this word is the system they belong to." },
        { id: "ru-u122l4-shkala", type: "vocab", front: "шкала", reading: "shkala", meaning: "a graded scale", accept: ["a scale of values", "a graduated range", "the markings you read a value off"], example: { jp: "Шкала здесь от одного до десяти, и десять — это лучше всего.", en: "The scale here is from one to ten, and ten is the best." }, drill: { jp: "Шкала здесь от одного до десяти", en: "The scale here is from one to ten" }, hint: "shka-LA — stress on the last syllable. FEMININE (-а). ⚠️ THE RANGE OF VALUES, not the weighing machine — the machine is `весы`, the next card but one, and English uses «scale» for both. ⚠️ Used of marks, of earthquakes, of prices: «по шкале от одного до пяти». From the Latin for a ladder." },
        { id: "ru-u122l4-vesy", type: "vocab", front: "весы", reading: "vesy", meaning: "a set of scales", accept: ["a weighing machine", "the scales you weigh on", "a balance for weighing"], example: { jp: "Весы в магазине показывают больше, чем дома.", en: "The scales in the shop show more than the ones at home." }, drill: { jp: "Весы в магазине показывают больше", en: "The scales in the shop show more" }, hint: "ve-SY — stress on the last syllable. ⚠️ PLURAL ONLY — there is no «вес*а*» for one machine, and the verb agrees in the plural: «весы показывают». ⚠️ ALSO THE ZODIAC SIGN LIBRA, capitalised. From вес «weight», which is reachable from the corpus, and the plural is because old scales had two pans." },
        { id: "ru-u122l4-gradus", type: "vocab", front: "градус", reading: "gradus", meaning: "a degree of temperature or angle", accept: ["one step on a graded measure", "a degree on a thermometer", "a degree of an angle"], example: { jp: "Градус здесь считают по Цельсию, а не по Фаренгейту.", en: "Degrees here are counted in Celsius, not in Fahrenheit." }, drill: { jp: "Градус здесь считают по Цельсию", en: "Degrees here are counted in Celsius" }, hint: "GRA-dus — stress on the first syllable. MASCULINE. ⚠️ THREE MEASURES IN ONE WORD: temperature, the angle of a `треугольник`, and the strength of alcohol («сколько градусов?»). ⚠️ Do not confuse with `град` (u91), which is HAIL — one letter shorter and a completely different word. `степень` (u47) is a degree in the abstract sense." },
        { id: "ru-u122l4-tonna", type: "vocab", front: "тонна", reading: "tonna", meaning: "a tonne", accept: ["a metric ton", "a thousand kilograms", "the unit of a tonne"], example: { jp: "Тонна бумаги стоит здесь столько же, сколько месяц работы.", en: "A tonne of paper costs as much here as a month's work." }, drill: { jp: "Тонна стоит здесь столько же", en: "A tonne costs as much as that here" }, hint: "TON-na — stress on the first syllable, the double н said as one long n. FEMININE (-а). ⚠️ ALWAYS METRIC — 1,000 kg — so there is no Russian equivalent of the long or short ton. ⚠️ Used in speech for «an enormous amount»: «тонна работы», a ton of work, exactly as in English." },
        { id: "ru-u122l4-pogreshnost", type: "vocab", front: "погрешность", reading: "pogreshnost", meaning: "a margin of error", accept: ["measurement error", "the tolerance of a measurement", "how far out a figure may be"], example: { jp: "Погрешность здесь большая, и поэтому числу верить нельзя.", en: "The margin of error here is large, and so the figure cannot be trusted." }, drill: { jp: "Погрешность здесь большая", en: "The margin of error here is large" }, hint: "pa-GRESH-nast — stress on GRESH, both unstressed о reducing to a. FEMININE (-ость). ⚠️ THIS CARD IS THIS UNIT'S BY CENTRAL ALLOCATION — block 1's u99 must not card it. ⚠️ LOOK AT THE ROOT: it is `грех` (u93, «a sin») — a погрешность is literally a little sinning, which is a good hook for «error». ⚠️ u99 owns `достоверность`, which this unit does not card even here." },
      ],
    },
  ],
};
