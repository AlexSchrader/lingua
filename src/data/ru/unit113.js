// RU Unit 113 — Образование и наука ("Education and research") — B2
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THIS UNIT CLOSES THE ONLY GAP `node scripts/qa/core-inventory.mjs ru`
// REPORTS IN THE WHOLE LANGUAGE. Measured on this branch before authoring:
// Russian scores full marks in 12 of 13 categories, and the thirteenth reads
//     B1/B2 abstractions: 17/18   MISSING: education
// The probe's target is `образование`, and `образование` was FREE — twice
// deferred rather than refused: `unit51.js` §3 records A2 declining it ("the уч-
// family again, AND education is block 2's domain"). It is carded here, l1 item
// 1, and the gap is closed. Re-run the probe to confirm 18/18.
//
// ⚠️ THE SCHOOL AND THE CLASSROOM ARE ALREADY TAUGHT and this unit must not
// re-author them: u41 holds `ученик` · `лекция` · `семинар` · `аудитория` ·
// `конспект` · `диплом` · `семестр` · `правило`; u25 holds `экзамен` · `оценка` ·
// `успех` · `сложный`; u35 `учиться`; u48 `изучать`; u59 `учить`; u54 `наука` ·
// `исследование` · `физика`; u64 `гипотеза`; u74 `рецензия`; u29 `расписание`.
// So this unit is THE INSTITUTION AND THE DEGREE — what a Russian university
// actually is, and what research as a job looks like.
//
// ⚠️ FIVE уч- WORDS ARE ALREADY TAUGHT (учиться u35, ученик u41, изучать u48,
// учить u59, and учебный is reachable from them). A SIXTH уч- NOUN IS THEREFORE
// REFUSED ON unit1.js §D: `учебник` · `обучение` · `училище` · `учёба` ·
// `учёный` all probe FREE and all five are declined — the family is saturated
// and a learner who knows four уч- words will not keep a fifth apart.
// `научный` is refused on §D too, against `наука` (u54).
//
// ⚠️ ALSO REFUSED, each for a reason a front probe cannot see:
//   `защита`     — §D, against `защищать` (u59). The thesis defence is carded
//                  through `диссертация`, whose hint carries the phrase.
//   `публикация` — §D, against `публиковать` (u48) AND `публика` (u45).
//   `исследовать`— §D, against `исследование` (u54). One lexeme.
//   `успевать`   — §D, against `успех` (u25). ⚠️ `успеваемость` IS carded, and
//                  that is a deliberate split: "academic performance" is an
//                  institutional abstraction a learner cannot build from
//                  "success", and it is the word a Russian school report uses.
//   `репетитор`  — against `репетиция` (u74), same root, and the gloss would sit
//                  one step from it.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT113 = {
  id: "ru-u113",
  lang: "ru",
  title: "Образование и наука",
  order: 113,
  stage: "b2",
  lessons: [
    {
      id: "ru-u113l1",
      unit: 113,
      lesson: 1,
      title: "Education itself, and the places that give it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say the word for education, and name a faculty, a university department, a dean's office, an academy and an institute of a lower kind.",
      items: [
        { id: "ru-u113l1-obrazovanie", type: "vocab", front: "образование", reading: "obrazovanie", meaning: "education", accept: ["schooling", "an education", "the education a person has"], example: { jp: "Образование в этой стране бесплатное, но места есть не для всех.", en: "Education in this country is free, but there are not places for everyone." }, drill: { jp: "Образование в этой стране бесплатное", en: "Education in this country is free" }, hint: "ab-ra-za-VA-ni-ye — stress on VA, and all three unstressed о reduce to a. NEUTER (-ие). ⚠️ THE WORD THE WHOLE COURSE WAS MISSING. Built on `образ` (u68, «an image») with об- + -ование: literally «a forming». TWO SENSES, and both are everyday: education as a system, and the education ONE PERSON HAS — «у него высшее образование», he has a higher education. ⚠️ Not reachable from any уч- word, which is why no уч- noun replaces it." },
        { id: "ru-u113l1-fakultet", type: "vocab", front: "факультет", reading: "fakultet", meaning: "a university faculty", accept: ["a university school", "a college within a university", "a big university division"], example: { jp: "Факультет истории здесь самый старый в городе.", en: "The history faculty here is the oldest in the city." }, drill: { jp: "Факультет истории здесь самый старый", en: "The history faculty here is the oldest" }, hint: "fa-kul-TET — stress on the last syllable. MASCULINE. ⚠️ Russian universities are organised by факультет first and `кафедра` second, and the two are not interchangeable: the факультет is the big division (history, physics, law), the кафедра a single subject group inside it. A Russian student says «я на историческом факультете»." },
        { id: "ru-u113l1-kafedra", type: "vocab", front: "кафедра", reading: "kafedra", meaning: "a university subject group", accept: ["a chair in a subject", "a university department", "a teaching chair"], example: { jp: "Кафедра маленькая: пять человек и один компьютер.", en: "The department is small: five people and one computer." }, drill: { jp: "Кафедра здесь очень маленькая", en: "The department here is very small" }, hint: "KA-fed-ra — stress on the FIRST syllable, which is the one learners get wrong. FEMININE (-а). ⚠️ TWO SENSES AND THE OLDER ONE IS PHYSICAL: a кафедра is also the raised LECTERN a lecturer stands at. The institution is named after the furniture. Smaller than `факультет`." },
        { id: "ru-u113l1-dekanat", type: "vocab", front: "деканат", reading: "dekanat", meaning: "the dean's office", accept: ["the faculty office", "the administration office", "where student paperwork is done"], example: { jp: "Деканат работает до пяти, и справку надо брать там.", en: "The dean's office is open until five, and you have to get the certificate there." }, drill: { jp: "Деканат работает до пяти часов", en: "The dean's office is open until five o'clock" }, hint: "de-ka-NAT — stress on the last syllable. MASCULINE. ⚠️ THE WORD A RUSSIAN STUDENT SAYS MOST OFTEN AND NO COURSE TEACHES: every piece of paperwork, every absence, every signature goes through the деканат. The -ат ending names an OFFICE, the way it does in `аппарат` and `интернат`." },
        { id: "ru-u113l1-akademiya", type: "vocab", front: "академия", reading: "akademiya", meaning: "an academy", accept: ["a learned academy", "an academy of sciences", "a specialised higher school"], example: { jp: "Академия наук в Москве очень большая и очень старая.", en: "The academy of sciences in Moscow is very large and very old." }, drill: { jp: "Академия наук в Москве очень старая", en: "The academy of sciences in Moscow is very old" }, hint: "a-ka-DE-mi-ya — stress on DE. FEMININE (-я). ⚠️ TWO VERY DIFFERENT THINGS in Russia: «Академия наук», the national body of senior scientists, and an академия as a TRAINING SCHOOL — military, medical, musical. Both are normal, and the first one has no English equivalent." },
        { id: "ru-u113l1-institut", type: "vocab", front: "институт", reading: "institut", meaning: "an institute", accept: ["a specialised college", "a research institute", "a single-subject higher school"], example: { jp: "Институт готовит инженеров, и работу после него найти легко.", en: "The institute trains engineers, and it is easy to find work after it." }, drill: { jp: "Институт готовит инженеров", en: "The institute trains engineers" }, hint: "in-sti-TUT — stress on the last syllable. MASCULINE. ⚠️ NOT A SYNONYM FOR «university»: a институт teaches ONE field (an engineering институт, a medical институт) while a университет teaches many. A research институт is a separate thing again, under the `академия`. The word a Soviet-era CV is full of." },
      ],
    },
    {
      id: "ru-u113l2",
      unit: 113,
      lesson: 2,
      title: "Getting in, and the degrees you come out with",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a school-leaving certificate, a university applicant, admission, a bachelor, a master's programme and postgraduate study.",
      items: [
        { id: "ru-u113l2-attestat", type: "vocab", front: "аттестат", reading: "attestat", meaning: "a school certificate", accept: ["a leaving certificate", "a school-leaving document", "a secondary-school diploma"], example: { jp: "Аттестат он получил летом, и сразу начал искать работу.", en: "He got his school certificate in the summer and started looking for work at once." }, drill: { jp: "Аттестат он получил летом", en: "He got his school certificate in the summer" }, hint: "at-tes-TAT — stress on the last syllable, with the double т said as one long t. MASCULINE. ⚠️ KEEP IT APART FROM `диплом` (u41): an аттестат closes SCHOOL, a диплом closes university. Russian never swaps them, and the pair is the whole shape of the education system in two words." },
        { id: "ru-u113l2-abiturient", type: "vocab", front: "абитуриент", reading: "abiturient", meaning: "a university applicant", accept: ["an applicant to a university", "someone applying to study", "a prospective student"], example: { jp: "Абитуриент должен сдавать три экзамена, и места дают не всем.", en: "An applicant has to pass three exams, and places are not given to everyone." }, drill: { jp: "Абитуриент должен сдавать три экзамена", en: "An applicant has to pass three exams" }, hint: "a-bi-tu-ri-ENT — stress on the last syllable. MASCULINE. ⚠️ A FALSE FRIEND FOR GERMAN SPEAKERS: German Abiturient is a school-leaver, Russian абитуриент is someone APPLYING to a university — he may be forty. The word exists only for the few months of applying; after that he is a `студент` (u8)." },
        { id: "ru-u113l2-postuplenie", type: "vocab", front: "поступление", reading: "postuplenie", meaning: "getting a university place", accept: ["entry to a university", "being admitted to study", "winning a place to study"], example: { jp: "Поступление в этот институт стоит дорого, и мест очень мало.", en: "Admission to this institute is expensive, and there are very few places." }, drill: { jp: "Поступление в этот институт стоит дорого", en: "Admission to this institute is expensive" }, hint: "pas-tup-LE-ni-ye — stress on LE, and the first о reduces to a. NEUTER (-ие). From поступать, to enter — and ⚠️ `поступок` (u56, «a deed») is a DIFFERENT lexeme from the same root, so do not let one gloss the other. Also used of money: «поступление средств», an incoming payment." },
        { id: "ru-u113l2-bakalavr", type: "vocab", front: "бакалавр", reading: "bakalavr", meaning: "a bachelor", accept: ["a holder of a first degree", "a bachelor's graduate", "someone with a bachelor's degree"], example: { jp: "Бакалавр учится четыре года, а потом может работать.", en: "A bachelor's student studies for four years and can then work." }, drill: { jp: "Бакалавр учится четыре года", en: "A bachelor's student studies for four years" }, hint: "ba-ka-LAVR — stress on the last syllable, ending in the cluster -авр. MASCULINE. ⚠️ THE PERSON, not the degree: Russian says «он бакалавр», he is a bachelor, where English prefers «he has a bachelor's». ⚠️ Nothing to do with being unmarried — that sense of English «bachelor» does not exist in Russian at all." },
        { id: "ru-u113l2-magistratura", type: "vocab", front: "магистратура", reading: "magistratura", meaning: "a master's programme", accept: ["master's study", "the master's course", "the second degree stage"], example: { jp: "Магистратура идёт два года, и там уже надо писать свою работу.", en: "The master's programme runs for two years, and there you already have to write your own paper." }, drill: { jp: "Магистратура идёт два года", en: "The master's programme runs for two years" }, hint: "ma-gis-tra-TU-ra — stress on TU. FEMININE (-а). ⚠️ THE PROGRAMME, not the person — the person is a «магистр». The -атура ending names a STAGE OF STUDY and it does the same job in `аспирантура`, the next card: learn the pair and the system's shape comes with them." },
        { id: "ru-u113l2-aspirantura", type: "vocab", front: "аспирантура", reading: "aspirantura", meaning: "postgraduate study", accept: ["doctoral study", "a doctoral programme", "the research-degree stage"], example: { jp: "Аспирантура — это уже не школа, а работа с одной темой.", en: "Postgraduate study is no longer school but work on a single topic." }, drill: { jp: "Аспирантура это работа с одной темой", en: "Postgraduate study is work on a single topic" }, hint: "as-pi-ran-TU-ra — stress on TU. FEMININE (-а). ⚠️ THREE YEARS AND A `диссертация` AT THE END, and the person doing it is an «аспирант». ⚠️ Note the example says «это уже не учёба» — using a word this course does NOT card (`учёба` is refused on §D, see the header) only inside an English gloss, never as a front." },
      ],
    },
    {
      id: "ru-u113l3",
      unit: 113,
      lesson: 3,
      title: "The people and the money of research",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a rector, an associate professor, a dissertation, a grant, a stipend and an academic title.",
      items: [
        { id: "ru-u113l3-rektor", type: "vocab", front: "ректор", reading: "rektor", meaning: "a vice-chancellor", accept: ["a rector", "the head of a university", "a university's chief"], example: { jp: "Ректор сам читает одну лекцию в год, и зал всегда полный.", en: "The vice-chancellor gives one lecture a year himself, and the hall is always full." }, drill: { jp: "Ректор сам читает одну лекцию в год", en: "The vice-chancellor gives one lecture a year himself" }, hint: "REK-tar — stress on the first syllable, and the final о reduces to a. MASCULINE. ⚠️ The single head of a whole university, above every `факультет`. His deputy is a «проректор», built with про- the way `прораб` and `проректор` both are. English «rector» means something else in most countries, which is why the gloss is \"a vice-chancellor\"." },
        { id: "ru-u113l3-dotsent", type: "vocab", front: "доцент", reading: "dotsent", meaning: "a senior lecturer", accept: ["an associate professor", "a reader", "a rank below professor"], example: { jp: "Доцент читает курс уже двадцать лет и знает его очень хорошо.", en: "The senior lecturer has been giving the course for twenty years and knows it very well." }, drill: { jp: "Доцент читает курс уже двадцать лет", en: "The senior lecturer has been giving the course for twenty years" }, hint: "da-TSENT — stress on the last syllable, with ц as ts and the first о reducing to a. MASCULINE. ⚠️ A RANK, not a job description, and it is ONE STEP BELOW `профессор` (u9's `профессия` is a different word — see unit1.js §D, which records профессор as deliberately not carded against it). Comes with a `звание`, the last card in this lesson." },
        { id: "ru-u113l3-dissertatsiya", type: "vocab", front: "диссертация", reading: "dissertatsiya", meaning: "a dissertation", accept: ["a thesis", "a doctoral thesis", "a long research work"], example: { jp: "Диссертацию он писал шесть лет, и теперь её читают студенты.", en: "He wrote his dissertation for six years, and now students read it." }, drill: { jp: "Диссертация у него была очень большая", en: "His dissertation was very long" }, hint: "di-ser-TA-tsi-ya — stress on TA, and the double с is said as one long s. FEMININE (-я). ⚠️ THE EVENT AT THE END IS «защита диссертации» — literally the DEFENCE of it, in front of a committee, and it is public. The course does not card `защита` on its own (§D, against `защищать` u59), so the phrase lives here." },
        { id: "ru-u113l3-grant", type: "vocab", front: "грант", reading: "grant", meaning: "a research grant", accept: ["funding for research", "money awarded for a project", "a funded research award"], example: { jp: "Грант дали на два года, и работать теперь можно спокойно.", en: "The grant was given for two years, and now it is possible to work calmly." }, drill: { jp: "Грант дали на два года", en: "The grant was given for two years" }, hint: "GRANT — one syllable. MASCULINE. ⚠️ A loan word that kept English spelling and meaning exactly, which makes it easy — but note unit1.js §9: the gloss is \"a research grant\" and not \"grant\", because a card glossed to its own transliteration accepts the prompt as the answer. Do not confuse with `граница` (u30)." },
        { id: "ru-u113l3-stipendiya", type: "vocab", front: "стипендия", reading: "stipendiya", meaning: "a student allowance", accept: ["a stipend", "a monthly student payment", "money paid to a student"], example: { jp: "Стипендия маленькая, но на еду её хватает.", en: "The student allowance is small, but it is enough for food." }, drill: { jp: "Стипендия здесь очень маленькая", en: "The student allowance here is very small" }, hint: "sti-PEN-di-ya — stress on PEN. FEMININE (-я). ⚠️ NOT A PRIZE: in Russia nearly every state-funded student gets a стипендия every month, and losing it is what bad `успеваемость` costs you. `грант` is money for a PROJECT, a стипендия money for a PERSON." },
        { id: "ru-u113l3-zvanie", type: "vocab", front: "звание", reading: "zvanie", meaning: "a formal title", accept: ["an official rank-name", "an academic title", "an honorary title"], example: { jp: "Звание он получил поздно, но был очень рад.", en: "He received the title late, but he was very glad." }, drill: { jp: "Звание он получил поздно", en: "He received the title late" }, hint: "ZVA-ni-ye — stress on the first syllable, and ⚠️ it opens with зв, two consonants and no vowel. NEUTER (-ие). From звать (unit 8, «to call») — a звание is what you are CALLED officially. Used in the army, in sport and in academia alike: «звание доцента», «звание майора»." },
      ],
    },
    {
      id: "ru-u113l4",
      unit: 113,
      lesson: 4,
      title: "Being assessed, and doing the work honestly",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a pass mark, academic performance, plagiarism, a laboratory, an experiment and a methodology.",
      items: [
        { id: "ru-u113l4-zachyot", type: "vocab", front: "зачёт", reading: "zachyot", meaning: "a pass assessment", accept: ["a pass-or-fail test", "an ungraded assessment", "a pass mark with no grade"], example: { jp: "Зачёт он сдавал один раз, а экзамен целых два.", en: "He sat the assessment once, and the exam a full two times." }, drill: { jp: "Зачёт он сдавал один раз", en: "He sat the assessment once" }, hint: "za-CHYOT — stress on the ЧЁТ, which carries the ё and is therefore stressed by definition (unit1.js §7). MASCULINE. ⚠️ THE RUSSIAN SYSTEM HAS TWO KINDS OF TEST and English has one word for both: an `экзамен` (u25) gets a MARK, a зачёт is only «passed / not passed». Do not confuse with `зачем` (u22)." },
        { id: "ru-u113l4-uspevaemost", type: "vocab", front: "успеваемость", reading: "uspevaemost", meaning: "academic performance", accept: ["how well a student is doing", "a student's record of marks", "school attainment figures"], example: { jp: "Успеваемость в классе стала хуже, и учителя начали думать, почему.", en: "Performance in the class got worse, and the teachers began to think about why." }, drill: { jp: "Успеваемость в классе стала хуже очень быстро", en: "Performance in the class got worse very quickly" }, hint: "us-pe-VA-ye-mast — stress on VA, and the final о reduces to a. FEMININE (-ость, as every -ость noun is). ⚠️ AN INSTITUTIONAL ABSTRACTION, not a feeling: успеваемость is the NUMBER a school reports, and that is why it is carded although `успех` (u25) is taught — see the header. The verb успевать is deliberately not carded." },
        { id: "ru-u113l4-plagiat", type: "vocab", front: "плагиат", reading: "plagiat", meaning: "plagiarism", accept: ["copying someone's work", "passing off another's writing", "literary theft"], example: { jp: "Плагиат нашли быстро, и работу не приняли.", en: "The plagiarism was found quickly, and the paper was not accepted." }, drill: { jp: "Плагиат нашли быстро", en: "The plagiarism was found quickly" }, hint: "pla-gi-AT — stress on the last syllable. MASCULINE. ⚠️ The и and the а are TWO syllables, not a diphthong: pla-gi-AT, four sounds at the end. Russian universities check for it with software and the word appears on every submission page. From the Latin for a kidnapper." },
        { id: "ru-u113l4-laboratoriya", type: "vocab", front: "лаборатория", reading: "laboratoriya", meaning: "a laboratory", accept: ["a lab", "a research laboratory", "the lab"], example: { jp: "Лаборатория работает ночью, потому что днём там слишком тепло.", en: "The laboratory works at night because it is too warm there in the daytime." }, drill: { jp: "Лаборатория работает ночью", en: "The laboratory works at night" }, hint: "la-ba-ra-TO-ri-ya — stress on TO, and both unstressed о reduce to a. FEMININE (-я). ⚠️ The short form in speech is «лаба», student slang, which this course does not card. Note it is NOT where `анализ` (u53) is done in a hospital — that is a «лаборатория» too, so the word spans both." },
        { id: "ru-u113l4-eksperiment", type: "vocab", front: "эксперимент", reading: "eksperiment", meaning: "a controlled experiment", accept: ["a scientific test", "a run of a test", "an experimental run"], example: { jp: "Эксперимент повторили десять раз, и результат был тот же.", en: "The experiment was repeated ten times, and the result was the same." }, drill: { jp: "Эксперимент повторили десять раз", en: "The experiment was repeated ten times" }, hint: "eks-pe-ri-MENT — stress on the last syllable, opening with the hard э (unit 2). MASCULINE. ⚠️ Not the same claim as `гипотеза` (u64) or `исследование` (u54): a гипотеза is what you think, an эксперимент is what you do to it, and an исследование is the whole study. The three live together in one sentence constantly." },
        { id: "ru-u113l4-metodika", type: "vocab", front: "методика", reading: "metodika", meaning: "a methodology", accept: ["a method of teaching", "a worked-out procedure", "the methodology"], example: { jp: "Методика простая, и её можно повторить в любой школе.", en: "The methodology is simple, and it can be repeated in any school." }, drill: { jp: "Методика очень простая и понятная", en: "The methodology is very simple and clear" }, hint: "me-TO-di-ka — stress on TO. FEMININE (-а). ⚠️ NARROWER THAN English «methodology»: a методика is a WRITTEN-DOWN, repeatable procedure — a teaching методика, a measuring методика — not a philosophy of method. `метод` (u33) is the single method; the методика is the whole worked-out way of doing it." },
      ],
    },
  ],
};
