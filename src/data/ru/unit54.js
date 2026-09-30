// RU Unit 54 — Наука и природа ("Science and the natural world") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u51–u60). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 5 (A2)` — no subject named. See unit51.js.
//
// ⚠️ A DEDUPE HOTSPOT. Block 2's u44 is titled "Nature and science" and block 2
// authored it CONCURRENTLY, unseen. unit51.js §1 names all four such collisions
// and the line block 3 drew; this unit's half of it is: block 3 took SCIENCE AS A
// SUBJECT (наука · исследование · физика · химия · биология · математика), MATTER
// AND FORCE (вещество · энергия · электричество · давление · объём · измерять),
// and the ground-and-sky words A1 missed. If u44 also holds any of those 24, the
// lower slot number owns it and this unit is the one to cut.
//
// THE MEASURED HOLE. A1's u26 Природа и животные is the natural world as a
// learner SEES it — собака · птица · лошадь · корова · медведь · мышь · дерево ·
// цветок · трава · лист · ветка · сад · лес · река · море · гора · поле · небо ·
// воздух · камень · песок · остров · звезда · луна — and u16 holds the weather
// (погода · дождь · снег · ветер · мороз · жара). Block 1's u36 took движение and
// скорость for the motion unit. So what was missing is not nature but SCIENCE: not
// one school subject was nameable, there was no word for a substance, energy,
// electricity, pressure or a volume, no verb for to measure or to grow, and no
// word for soil, a root, a grain, an insect, a planet, a climate, a cloud, ice, a
// wave or fog.
//
// ★ NOTE ON `насекомое`. It declines like an ADJECTIVE (насекомое · насекомого ·
//   насекомых) and its hint says so. unit51.js §2(b) refuses a substantivised
//   adjective when the adjective itself is TAUGHT — `лёгкое` is the neuter of
//   `лёгкий` (u19l2) and was refused on exactly that ground. `насекомый` is taught
//   nowhere and is not a living Russian adjective, so no second mastery track
//   exists and the rule does not reach this word. The distinction is worth having
//   in writing because it will come up again.
//
// ⚠️ REFUSED IN THIS UNIT:
//   `семя` "a seed" — its reading is "semya", WHICH IS ALREADY `семья`'s (u10l1,
//        "a family"), because unit1.js §1 drops the ь. `зерно` "a grain" took the
//        slot. The whole case is in unit51.js §2(a).
//   `растение` (vs `расти`, carded at l3) · `светлый` (vs `свет` u15) · `круглый`
//        (vs `круг` u36) — all unit1.js §D.
//   `учёный` "a scientist" — the уч- root already carries учитель (u8), учиться
//        (u35) and учить (u59l2), and it is a substantivised adjective besides.
//        `математика` took the slot instead.
//   `сила` "force" — §D against `сильный` (u20). This cost the unit its physics
//        word for force and there is no natural substitute; it is a real gap and
//        B1's to close, probably through `усилие`.
//   `температура` was already carded at u20l3, so l2 measures `давление` instead.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT54 = {
  id: "ru-u54",
  lang: "ru",
  title: "Наука и природа",
  order: 54,
  stage: "a2",
  lessons: [
    {
      id: "ru-u54l1",
      unit: 54,
      lesson: 1,
      title: "Science as a subject",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the school subjects and say which science you studied, found hard, or liked best.",
      items: [
        { id: "ru-u54l1-nauka", type: "vocab", front: "наука", reading: "nauka", meaning: "science", accept: ["a science", "a branch of learning", "scholarship"], example: { jp: "Наука сегодня очень важная для нас.", en: "Science today is very important for us." }, drill: { jp: "Это очень старая наука", en: "That is a very old science" }, hint: "na-U-ka — stress on the U in the middle. FEMININE (-а). Broader than English «science»: any field of learning is a наука, history included." },
        { id: "ru-u54l1-issledovanie", type: "vocab", front: "исследование", reading: "issledovanie", meaning: "a piece of research", accept: ["a study", "an investigation", "research work"], example: { jp: "Это исследование было очень трудное.", en: "That piece of research was very difficult." }, drill: { jp: "Наше исследование уже готово", en: "Our research is ready already" }, hint: "is-SLE-da-va-ni-ye — six syllables, stress on SLE, and the сс is held. NEUTER (-е). ⚠️ Glossed «a piece of research» and not «a study», because учиться from unit 35 already holds «to study» and the grader would treat the two as one answer." },
        { id: "ru-u54l1-fizika", type: "vocab", front: "физика", reading: "fizika", meaning: "physics", accept: ["the physics of it", "physical science", "physics at school"], example: { jp: "Физика очень трудная, но интересная.", en: "Physics is very hard but interesting." }, drill: { jp: "Физика здесь очень трудная", en: "Physics here is very hard" }, hint: "FI-zi-ka — stress on the first syllable. FEMININE (-а), and singular — Russian treats the subject as one thing, so «физика трудная», never «трудные»." },
        { id: "ru-u54l1-khimiya", type: "vocab", front: "химия", reading: "khimiya", meaning: "chemistry", accept: ["the chemistry of it", "chemical science", "chemistry at school"], example: { jp: "Химия была моя любимая наука.", en: "Chemistry was my favourite science." }, drill: { jp: "Химия очень интересная наука", en: "Chemistry is a very interesting science" }, hint: "KHI-mi-ya — stress on the first syllable, and the х is the scraping sound from unit 1. FEMININE (-я). In speech «химия» also means anything artificial in food." },
        { id: "ru-u54l1-biologiya", type: "vocab", front: "биология", reading: "biologiya", meaning: "biology", accept: ["life science", "biology at school", "the study of living things"], example: { jp: "Биология очень интересная и трудная.", en: "Biology is very interesting and very hard." }, drill: { jp: "Мне нравится эта биология", en: "I like this biology" }, hint: "bi-a-LO-gi-ya — five syllables, stress on LO, and the о before it reduces to a. FEMININE (-я). Like логика in unit 52, the -логия ending always takes the stress on its LO." },
        { id: "ru-u54l1-matematika", type: "vocab", front: "математика", reading: "matematika", meaning: "mathematics", accept: ["maths", "math", "arithmetic"], example: { jp: "Математика в школе была очень трудная.", en: "Mathematics at school was very hard." }, drill: { jp: "Эта математика очень трудная", en: "This mathematics is very hard" }, hint: "ma-ti-MA-ti-ka — five syllables, stress on the THIRD, and both unstressed а reduce. FEMININE (-а). Russians shorten it to матеша in school slang, never to «мат» — that word means something quite different." },
      ],
    },
    {
      id: "ru-u54l2",
      unit: 54,
      lesson: 2,
      title: "Matter, force and energy",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a substance, energy, electricity and pressure, give the volume of something, and say you need to measure it.",
      items: [
        { id: "ru-u54l2-veshchestvo", type: "vocab", front: "вещество", reading: "veshchestvo", meaning: "a substance", accept: ["matter", "a chemical", "stuff in the physical sense"], example: { jp: "Это вещество очень опасное.", en: "That substance is very dangerous." }, drill: { jp: "Здесь есть опасное вещество", en: "There is a dangerous substance here" }, hint: "vi-shchist-VO — four syllables, stress on the LAST. NEUTER (-о). материал from unit 32 is raw material you build with; вещество is matter as a chemist means it." },
        { id: "ru-u54l2-energiya", type: "vocab", front: "энергия", reading: "energiya", meaning: "energy", accept: ["power in the physical sense", "drive", "get-up-and-go"], example: { jp: "Энергия воды очень сильная.", en: "The energy of water is very strong." }, drill: { jp: "Эта энергия очень сильная", en: "That energy is very strong" }, hint: "e-NER-gi-ya — stress on NER, and the first letter is э, not е — one of the few places the two are told apart, as unit 1 §1 warned. FEMININE (-я). Also a person's energy: «у неё много энергии»." },
        { id: "ru-u54l2-elektrichestvo", type: "vocab", front: "электричество", reading: "elektrichestvo", meaning: "electricity", accept: ["electric power", "the mains", "the electrics"], example: { jp: "Электричество здесь очень дорогое.", en: "Electricity here is very expensive." }, drill: { jp: "Электричество уже работает здесь", en: "The electricity is working here already" }, hint: "e-lik-TRI-chist-va — five syllables, stress on TRI, and again it opens with э. NEUTER (-о). In a flat Russians just say «свет» — «включи свет» for the light and the power both." },
        { id: "ru-u54l2-davlenie", type: "vocab", front: "давление", reading: "davlenie", meaning: "pressure", accept: ["the pressure", "blood pressure", "force pressing down"], example: { jp: "Давление воды здесь очень сильное.", en: "The water pressure here is very strong." }, drill: { jp: "Здесь очень сильное давление", en: "The pressure here is very strong" }, hint: "dav-LE-ni-ye — stress on LE. NEUTER (-е). ⚠️ In everyday Russian it means BLOOD pressure nine times out of ten: «у меня давление» is a complaint, not a physics statement." },
        { id: "ru-u54l2-obyom", type: "vocab", front: "объём", reading: "obyom", meaning: "a volume", accept: ["how much it holds", "capacity", "the size of a space"], example: { jp: "Объём этой бутылки один литр.", en: "The volume of this bottle is one litre." }, drill: { jp: "Это очень большой объём", en: "That is a very large volume" }, hint: "ab-YOM — stress on the last syllable. ⚠️ The ъ is SILENT — it just keeps the б and the ё apart, so the reading drops it (unit 1 §1), and the ё is always written. MASCULINE. Not длина or вес from unit 37 — this is how much a space HOLDS." },
        { id: "ru-u54l2-izmeryat", type: "vocab", front: "измерять", reading: "izmeryat", meaning: "to measure", accept: ["to take a measurement", "to gauge", "to check a reading"], example: { jp: "Здесь нужно измерять температуру каждый день.", en: "The temperature has to be measured here every day." }, drill: { jp: "Мне нужно измерять давление", en: "I need to measure the pressure" }, hint: "iz-mi-RYAT — stress on the last syllable. Imperfective infinitive. Built on мера, a measure, which is also inside примерно from unit 38 — roughly, by approximate measure." },
      ],
    },
    {
      id: "ru-u54l3",
      unit: 54,
      lesson: 3,
      title: "Things that grow",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about nature and growing things — a root, a grain, an insect, the soil — and say that something will grow here.",
      items: [
        { id: "ru-u54l3-priroda", type: "vocab", front: "природа", reading: "priroda", meaning: "nature", accept: ["the natural world", "the countryside", "the way things naturally are"], example: { jp: "Природа здесь очень красивая.", en: "Nature here is very beautiful." }, drill: { jp: "Русская природа очень красивая", en: "Russian nature is very beautiful" }, hint: "pri-RO-da — stress on RO. FEMININE (-а). «На природе» means out in the countryside, away from town, and is what a Russian weekend is for." },
        { id: "ru-u54l3-koren", type: "vocab", front: "корень", reading: "koren", meaning: "a root", accept: ["the root", "a root of a plant", "the root of a word"], example: { jp: "Корень этого дерева очень большой.", en: "The root of this tree is very large." }, drill: { jp: "Этот корень очень большой", en: "This root is very large" }, hint: "KO-rin — stress on the first syllable. ⚠️ MASCULINE despite the -ь, and its е DROPS in every other case: корня, корню. Both senses are live — a plant's root and a word's root, the thing these hints keep pointing at." },
        { id: "ru-u54l3-zerno", type: "vocab", front: "зерно", reading: "zerno", meaning: "a grain", accept: ["corn", "a seed of grain", "grain as a crop"], example: { jp: "Это зерно уже старое.", en: "That grain is old already." }, drill: { jp: "Зерно здесь очень хорошее", en: "The grain here is very good" }, hint: "zir-NO — stress on the last syllable, and the е reduces to i. NEUTER (-о). ⚠️ Russian's word for a seed, семя, could not be taught here: it transliterates exactly as семья, «a family», does. зерно covers the grain sense." },
        { id: "ru-u54l3-nasekomoe", type: "vocab", front: "насекомое", reading: "nasekomoe", meaning: "an insect", accept: ["a bug", "a creepy-crawly", "one insect"], example: { jp: "Это насекомое очень маленькое.", en: "That insect is very small." }, drill: { jp: "Здесь живёт маленькое насекомое", en: "A small insect lives here" }, hint: "na-si-KO-ma-ye — five syllables, stress on KO. ⚠️ It is a NOUN that declines like an ADJECTIVE: насекомое, насекомого, насекомых. A handful of Russian nouns do this and they are always neuter or animate-adjectival in shape." },
        { id: "ru-u54l3-rasti", type: "vocab", front: "расти", reading: "rasti", meaning: "to grow", accept: ["to get bigger", "to be growing", "to grow up"], example: { jp: "Здесь будут расти новые цветы.", en: "New flowers will grow here." }, drill: { jp: "Здесь будет расти дерево", en: "A tree will grow here" }, hint: "ras-TI — stress on the last syllable. Imperfective infinitive. ⚠️ Its stem mutates outright when conjugated — расту, растёшь — and the past is рос, росла, with no с-т at all. It is intransitive: a thing grows, you do not grow a thing." },
        { id: "ru-u54l3-pochva", type: "vocab", front: "почва", reading: "pochva", meaning: "soil", accept: ["the soil", "earth you dig", "ground you plant in"], example: { jp: "Почва здесь очень хорошая для сада.", en: "The soil here is very good for a garden." }, drill: { jp: "Эта почва очень хорошая", en: "This soil is very good" }, hint: "POCH-va — stress on the first syllable. FEMININE (-а). земля from unit 4 is the earth as a place and a planet; почва is the stuff you put a plant in." },
      ],
    },
    {
      id: "ru-u54l4",
      unit: 54,
      lesson: 4,
      title: "Earth, sky and water",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe the sky and the weather beyond A1 — a planet, a climate, a cloud, ice, a wave and fog.",
      items: [
        { id: "ru-u54l4-planeta", type: "vocab", front: "планета", reading: "planeta", meaning: "a planet", accept: ["the planet", "a world in space", "the Earth as a planet"], example: { jp: "Наша планета очень старая и красивая.", en: "Our planet is very old and very beautiful." }, drill: { jp: "Это очень старая планета", en: "That is a very old planet" }, hint: "pla-NE-ta — stress on NE. FEMININE (-а). луна and звезда from unit 26 are the moon and a star; планета is the third thing in that sky." },
        { id: "ru-u54l4-klimat", type: "vocab", front: "климат", reading: "klimat", meaning: "a climate", accept: ["the climate", "what the weather is usually like", "the general weather"], example: { jp: "Климат здесь очень тёплый.", en: "The climate here is very warm." }, drill: { jp: "Здесь очень тёплый климат", en: "The climate here is very warm" }, hint: "KLI-mat — stress on the FIRST syllable, unlike English. MASCULINE. погода from unit 16 is today's weather; климат is what it is always like." },
        { id: "ru-u54l4-oblako", type: "vocab", front: "облако", reading: "oblako", meaning: "a cloud", accept: ["the cloud", "one cloud", "cloud in the sky"], example: { jp: "Это облако очень большое и белое.", en: "That cloud is very large and very white." }, drill: { jp: "Облако сегодня очень белое", en: "The cloud today is very white" }, hint: "OB-la-ka — stress on the first syllable. NEUTER (-о). ⚠️ Its plural moves the stress to the end and changes the ending: облакА. небо from unit 26 is the sky it sits in." },
        { id: "ru-u54l4-lyod", type: "vocab", front: "лёд", reading: "lyod", meaning: "ice", accept: ["the ice", "ice on the road", "frozen water"], example: { jp: "Зимой здесь всегда лёд.", en: "There is always ice here in winter." }, drill: { jp: "Здесь уже есть лёд", en: "There is ice here already" }, hint: "LYOD — one syllable, the ё always written (unit 1 §7), and the д goes quiet, so it comes out LYOT. MASCULINE. ⚠️ The ё VANISHES in every other case: льда, льду, на льду." },
        { id: "ru-u54l4-volna", type: "vocab", front: "волна", reading: "volna", meaning: "a wave", accept: ["the wave", "one wave", "a wave on the sea"], example: { jp: "Эта волна была очень большая.", en: "That wave was very large." }, drill: { jp: "Волна здесь очень большая", en: "The wave here is very large" }, hint: "val-NA — stress on the last syllable, and the о reduces to a. FEMININE (-а). ⚠️ The plural pulls the stress back to the front: VOL-ny, волны. Also a radio wave." },
        { id: "ru-u54l4-tuman", type: "vocab", front: "туман", reading: "tuman", meaning: "fog", accept: ["mist", "the fog", "haze"], example: { jp: "Утром здесь часто туман.", en: "There is often fog here in the morning." }, drill: { jp: "Сегодня утром был туман", en: "There was fog this morning" }, hint: "tu-MAN — stress on the last syllable. MASCULINE. Fog and mist are one word. «В тумане» also means confused, unable to think straight." },
      ],
    },
  ],
};
