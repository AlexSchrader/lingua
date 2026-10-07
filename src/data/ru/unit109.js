// RU Unit 109 — Принадлежность и неравенство ("Belonging and inequality") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 1 (u98–u110). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit61.js §1–§8, and
// ru/unit98.js §1–§7d for this band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Identity and society" AND THE SECOND HALF IS SPENT.
// u51 Общество и государство owns общество · народ · население · гражданин ·
// государство · власть · организация; u59 Слова и поступки owns the COLLECTIVE
// NOUNS (родственник · молодёжь · поколение · толпа · собрание · житель ·
// событие); u82 owns the register of ordinary people. So u109 NARROWS to
// IDENTITY AND INEQUALITY — where a person is from, who counts as one of us, how
// a society ranks itself, and how a group is kept down. A learner could already
// say society and a citizen and could not say a minority, an outsider, an elite,
// a privilege or discrimination.
//
// ⚠️ CROSS-BLOCK BOUNDARY, three ways:
//   **u100 owns the STRUCTURAL `слой` and `иерархия`. u109 owns the SOCIAL
//        stratum — `сословие` · `прослойка` · `расслоение`.** Three slots want
//        the word "layer" and this is the line.
//   **u107 owns `терпимость`.** u109 takes `дискриминация` · `предрассудок` ·
//        `стереотип` instead; tolerance is an ethical stance, not a policy word.
//   **u115 Emotion, subtle and mixed (block 2) must not card a prejudice word** —
//        all three above are u109's.
//
// ⚠️ SIX CANDIDATES REFUSED, AND THE FIRST TWO ARE BARRED BY CARDS IN THIS BAND,
// which is the shape unit107.js first recorded:
//   `неравенство` — не + `равенство`, AND равенство is carded IN THIS UNIT.
//        unit51.js §3 bars не + a taught word, so the unit's own lesson 4 closes
//        the door on it. ⚠️ THE UNIT IS NEVERTHELESS TITLED WITH IT, which is
//        legal: a title is not a card (the u92 `прошлое` split, and u102's
//        `правосудие`). `расслоение` is what carries the concept.
//   `этнический` — the same lexeme as `этнос`, carded at u105 in this block.
//   `обособленность` — the same lexeme as `обособление`, carded at u100.
//   `самоопределение` — само + `определение`, and определение was itself refused
//        at u100 against `определять` (u48): composed out of a refused word.
//   `гражданство` — `гражданин` (u51) hands it over.
//   `происхождение` — `происходить` (u52) hands it over.
//   `уравнивать` · `уравниловка` — both sit on the same равн- root as the carded
//        `равенство`; one lexeme family gets one card.
//   Dropped for count at 24, all legal: `миграция` (same lexeme as `мигрант`) ·
//        `изгнание`.
//
// ⚠️ `меньшинство` AND `большинство` ALLOWED although `меньше` and `больше` are
// TAKEN (u5), and the reasoning rather than the verdict: the -инство suffix is
// dead in modern Russian, the two are POLITICAL nouns rather than quantities, and
// both are measured gaps — "minority" and "majority" are taught in six of the
// eight complete languages in this corpus and in neither case by Russian. Their
// glosses stay away from the bare words more and less, so no prompt collides.
//
// ⚠️ `мигрант` AND `диаспора` ARE EXACT FREE PASSES IF GLOSSED AS THEMSELVES —
// their readings ARE "migrant" and "diaspora". Both reglossed as descriptions,
// accept entries included. unit98.js §7c.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT109 = {
  id: "ru-u109",
  lang: "ru",
  title: "Принадлежность и неравенство",
  order: 109,
  stage: "b2",
  lessons: [
    {
      id: "ru-u109l1",
      unit: 109,
      lesson: 1,
      title: "Where a person is from",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say where somebody belongs — descent as a category, a native of a place, a fellow countryman, a people scattered abroad, an incomer, and the losing of a separate identity.",
      items: [
        { id: "ru-u109l1-natsionalnost", type: "vocab", front: "национальность", reading: "natsionalnost", meaning: "the people a person belongs to by descent", accept: ["the ethnic group somebody is counted as", "what a person is by origin rather than by passport", "descent treated as an official category"], example: { jp: "Национальность в паспорте больше не пишут.", en: "Descent is no longer written in the passport." }, drill: { jp: "Национальность в паспорте не пишут", en: "Descent is not written in the passport" }, hint: "na-tsi-a-NAL-nast — five syllables, stress on NAL. FEMININE despite the -ь, like every -ость noun. ⚠️ A FALSE FRIEND AND THE DIFFERENCE MATTERS IN RUSSIA: English nationality means citizenship, Russian национальность means ETHNIC descent, and `гражданство` is the citizenship word. The famous fifth line of the Soviet passport recorded this, and the example says so." },
        { id: "ru-u109l1-urozhenets", type: "vocab", front: "уроженец", reading: "urozhenets", meaning: "somebody born in a particular place", accept: ["a native of a given place", "a person whose birthplace is somewhere named", "one born and bred in a place"], example: { jp: "Уроженец этого города знает каждую улицу.", en: "A native of this city knows every street." }, drill: { jp: "Уроженец этого города знает всё", en: "A native of this city knows everything" }, hint: "u-ra-ZHE-nits — stress on ZHE, and the о reduces to a. MASCULINE, and ⚠️ the е DROPS in every other form: уроженцА — the `отец` class from unit 10. From `рождение` in unit 59. ⚠️ Nearly always followed by a place in the genitive: уроженец Москвы." },
        { id: "ru-u109l1-sootechestvennik", type: "vocab", front: "соотечественник", reading: "sootechestvennik", meaning: "somebody from the same country as you", accept: ["a fellow countryman", "a person of one's own country met abroad", "a compatriot"], example: { jp: "Соотечественник за границей помогает быстрее.", en: "A fellow countryman abroad helps you faster." }, drill: { jp: "Здесь каждый второй его соотечественник", en: "Here every second person is his fellow countryman" }, hint: "sa-a-TE-chist-ven-nik — six syllables, stress on TE, and both о reduce to a. MASCULINE. A compound of со-, together, and отечество, the fatherland — which is built on `отец` from unit 10. ⚠️ A warm and slightly formal word; the everyday equivalent is «свой»." },
        { id: "ru-u109l1-diaspora", type: "vocab", front: "диаспора", reading: "diaspora", meaning: "a people living scattered outside its homeland", accept: ["a community settled far from its country of origin", "a scattered population living abroad", "those of a people who live away from home"], example: { jp: "Диаспора здесь большая, и язык в ней ещё помнят.", en: "The expatriate community here is large, and the language is still remembered in it." }, drill: { jp: "Диаспора здесь очень большая", en: "The expatriate community here is very large" }, hint: "di-AS-pa-ra — stress on AS, and the unstressed о reduces to a. FEMININE (-а). ⚠️ Glossed the long way round on purpose: its reading IS the English word — unit 1 §9. ⚠️ In Russian it takes the people's name in the genitive: армянская диаспора, русская диаспора." },
        { id: "ru-u109l1-migrant", type: "vocab", front: "мигрант", reading: "migrant", meaning: "somebody who has moved country to live", accept: ["a person who has come from abroad to settle", "one who has left his own country for another", "an incomer from another land"], example: { jp: "Мигрант работает больше, а получает меньше.", en: "An incomer works more and earns less." }, drill: { jp: "Мигрант работает больше всех", en: "An incomer works more than anybody" }, hint: "mi-GRANT — stress on the last syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: its reading IS the English word. ⚠️ A heavily loaded word in Russian news — трудовой мигрант is the standard phrase for a guest worker — and the `патент` from unit 104 is the permit he buys." },
        { id: "ru-u109l1-assimilyatsiya", type: "vocab", front: "ассимиляция", reading: "assimilyatsiya", meaning: "the merging of newcomers into the host people", accept: ["the absorbing of incomers until they are indistinguishable", "the dissolving of one group into another", "the losing of a separate identity into a majority"], example: { jp: "Ассимиляция идёт за два поколения, и языка уже никто не знает.", en: "Assimilation takes two generations, and nobody knows the language any more." }, drill: { jp: "Ассимиляция здесь идёт очень быстро", en: "Assimilation here goes very fast" }, hint: "as-si-mi-LYA-tsi-ya — stress on LYA, and the сс is held. FEMININE (-я). ⚠️ NOT THE SAME AS `интеграция` in lesson 2, and the pair is the whole political argument: интеграция takes a group into the common life while it stays itself, ассимиляция ends with the group gone." },
      ],
    },
    {
      id: "ru-u109l2",
      unit: 109,
      lesson: 2,
      title: "Us and them",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about who counts as one of us — the smaller and the greater part of a people, an outsider, somebody cast out, how tightly a group holds, and the taking in of newcomers.",
      items: [
        { id: "ru-u109l2-menshinstvo", type: "vocab", front: "меньшинство", reading: "menshinstvo", meaning: "the smaller part of a people", accept: ["a group outnumbered by the rest", "those who are fewer in a population", "a minority group in a society"], example: { jp: "Меньшинство здесь говорит на другом языке.", en: "The minority here speaks a different language." }, drill: { jp: "Меньшинство здесь говорит иначе", en: "The minority here speaks differently" }, hint: "min-shin-STVO — stress on the last syllable, and the е reduces to i. NEUTER (-о). ⚠️ Built on `меньше` from unit 5, but the -инство suffix is dead in modern Russian and this is a POLITICAL noun, not a quantity — which is why it is a card and «меньше» does not hand it over. The standard phrase is национальное меньшинство." },
        { id: "ru-u109l2-bolshinstvo", type: "vocab", front: "большинство", reading: "bolshinstvo", meaning: "the greater part of a people", accept: ["the group that outnumbers the others", "those who are more numerous", "the preponderant part of a population"], example: { jp: "Большинство было против, однако решили иначе.", en: "The majority were against, yet it was decided otherwise." }, drill: { jp: "Большинство здесь было против", en: "The majority here were against" }, hint: "bal-shin-STVO — stress on the last syllable, and both о before it reduce. NEUTER (-о). ⚠️ The companion of `меньшинство` and the commoner of the two: «в большинстве случаев», in most cases, is one of the most useful phrases in formal Russian. ⚠️ unit 101 dropped `подавляющий` because its only idiomatic partner is this word, one unit later." },
        { id: "ru-u109l2-chuzhak", type: "vocab", front: "чужак", reading: "chuzhak", meaning: "somebody treated as not belonging", accept: ["an outsider the group will not take in", "a stranger in a place that is not his", "one regarded as foreign to a group"], example: { jp: "Чужак в этой деревне остаётся чужаком годами.", en: "An outsider in this village stays an outsider for years." }, drill: { jp: "Чужак здесь остаётся чужаком годами", en: "An outsider here stays an outsider for years" }, hint: "chu-ZHAK — stress on the last syllable. MASCULINE, and ⚠️ its oblique forms keep the stress on the ending: чужакА, чужакОм. From чужой, somebody else's. ⚠️ The FEELING is the point: a чужак is not foreign by law, only by how the group treats him." },
        { id: "ru-u109l2-izgoy", type: "vocab", front: "изгой", reading: "izgoy", meaning: "somebody cast out by his own people", accept: ["a person the group has rejected", "an outcast driven from his community", "one shut out by those he belonged to"], example: { jp: "Изгой в школе страдает один, и помочь ему трудно.", en: "An outcast at school suffers alone, and is hard to help." }, drill: { jp: "Изгой здесь всегда один", en: "An outcast here is always alone" }, hint: "iz-GOY — stress on the last syllable. MASCULINE. ⚠️ Stronger than `чужак` in this lesson, and the difference is who decides: a чужак never belonged, an изгой belonged and was thrown out. An old word — in Kievan Rus an изгой was a prince with no inheritance." },
        { id: "ru-u109l2-splochyonnost", type: "vocab", front: "сплочённость", reading: "splochyonnost", meaning: "how tightly a group holds together", accept: ["the closeness of a group's bonds", "unity within a body of people", "how well a group sticks together"], example: { jp: "Сплочённость этого отдела удивляет всех.", en: "The cohesion of this department surprises everybody." }, drill: { jp: "Сплочённость этого отдела очень большая", en: "The cohesion of this department is very great" }, hint: "spla-CHON-nast — stress on CHON, with the ё always written as unit 1 §7 requires, and the о reduces to a. FEMININE despite the -ь. From сплотить, to close ranks. ⚠️ A word of praise, used of teams and armies: сплочённый коллектив." },
        { id: "ru-u109l2-integratsiya", type: "vocab", front: "интеграция", reading: "integratsiya", meaning: "the taking of newcomers into the common life", accept: ["the drawing of incomers into a society as equals", "the bringing of a group into the main body", "the fitting of newcomers into a shared life"], example: { jp: "Интеграция идёт через школу и работу.", en: "Integration happens through school and work." }, drill: { jp: "Интеграция здесь идёт очень медленно", en: "Integration here goes very slowly" }, hint: "in-te-GRA-tsi-ya — stress on GRA. FEMININE (-я). ⚠️ THE OPPOSITE POLE FROM `ассимиляция` in lesson 1, and the two are the whole argument about incomers: интеграция keeps the group itself, ассимиляция dissolves it. ⚠️ Also economic: европейская интеграция." },
      ],
    },
    {
      id: "ru-u109l3",
      unit: 109,
      lesson: 3,
      title: "Ranked by birth or by money",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a society ranks itself — an inherited estate, a closed group, the few at the top, a right others lack, a layer in between, and a society drifting apart.",
      items: [
        { id: "ru-u109l3-soslovie", type: "vocab", front: "сословие", reading: "soslovie", meaning: "an inherited rank in an old society", accept: ["an estate of the realm", "a hereditary class with its own rights", "a legally fixed social order"], example: { jp: "Сословие тогда решало всё, и денег это не меняло.", en: "One's estate decided everything then, and money did not change that." }, drill: { jp: "Сословие тогда решало почти всё", en: "One's estate decided almost everything then" }, hint: "sas-LO-vi-ye — stress on LO, and the first о reduces to a. NEUTER (-ие). ⚠️ A HISTORICAL term and the right one for u92's world: imperial Russia had дворянство, духовенство, купечество and крестьянство as сословия, and `крестьянин` from unit 92 was one of them. For a modern class Russian says класс." },
        { id: "ru-u109l3-kasta", type: "vocab", front: "каста", reading: "kasta", meaning: "a closed group nobody enters or leaves", accept: ["a sealed hereditary grouping", "a rank you are born into and cannot leave", "a group that admits nobody from outside"], example: { jp: "Каста здесь закрыта, и новых людей в ней нет.", en: "The caste here is closed, and there are no new people in it." }, drill: { jp: "Каста здесь совершенно закрыта", en: "The caste here is entirely closed" }, hint: "KAS-ta — stress on the first syllable. FEMININE (-а). ⚠️ USED FIGURATIVELY IN RUSSIAN far more often than of India: «врачи — это каста» means doctors are a closed shop, and «кастовость» is the standing complaint about any closed profession. Harder than `сословие`, which at least had a law." },
        { id: "ru-u109l3-elita", type: "vocab", front: "элита", reading: "elita", meaning: "the few at the top of a society", accept: ["the small group holding the best of everything", "those at the summit of a field", "the topmost layer of a society"], example: { jp: "Элита живёт отдельно, и школы у неё свои.", en: "The elite live apart, and have schools of their own." }, drill: { jp: "Элита живёт совсем отдельно", en: "The elite live quite apart" }, hint: "e-LI-ta — stress on LI. FEMININE (-а). ⚠️ The adjective элитный is a MARKETING word in Russia and you will see it everywhere — элитное жильё, элитный алкоголь — where it simply means expensive. The disparaging noun for a member is элитарий; the neutral one is just «из элиты»." },
        { id: "ru-u109l3-privilegiya", type: "vocab", front: "привилегия", reading: "privilegiya", meaning: "a right somebody has and others do not", accept: ["an advantage granted to some only", "a special right held by a few", "an exemption that others are denied"], example: { jp: "Привилегия эта маленькая, зато её все видят.", en: "This privilege is small, but everybody can see it." }, drill: { jp: "Привилегия эта очень маленькая", en: "This privilege is very small" }, hint: "pri-vi-LE-gi-ya — stress on LE. FEMININE (-я). ⚠️ Narrower than `льгота` from unit 71 and the difference is tone: a льгота is a legal concession a state grants openly (to pensioners, to veterans), a привилегия is something a few have and probably should not. The plural привилегии is the political word." },
        { id: "ru-u109l3-prosloyka", type: "vocab", front: "прослойка", reading: "prosloyka", meaning: "a layer of society between two bigger ones", accept: ["an intermediate social group", "a thin stratum between larger ones", "a middling social layer"], example: { jp: "Прослойка между богатыми и бедными здесь тонкая.", en: "The layer between rich and poor here is thin." }, drill: { jp: "Прослойка здесь очень тонкая", en: "The layer here is very thin" }, hint: "pra-SLOY-ka — stress on SLOY, and the о reduces to a. FEMININE (-а). Built on `слой`, which unit 100 carded as the STRUCTURAL layer — and this is the social one, which is the boundary this unit's header states. ⚠️ A Soviet term of art: интеллигенция was officially a прослойка rather than a class. Also literal, of a cake filling." },
        { id: "ru-u109l3-rassloenie", type: "vocab", front: "расслоение", reading: "rassloenie", meaning: "the drifting apart of a society into layers", accept: ["the splitting of a people into unequal strata", "the opening of gaps between social groups", "the stratifying of a society"], example: { jp: "Расслоение в обществе растёт каждый год.", en: "Stratification in society grows every year." }, drill: { jp: "Расслоение в обществе растёт быстро", en: "Stratification in society grows fast" }, hint: "ras-sla-YE-ni-ye — stress on YE, the о reduces to a, and the сс is held. NEUTER (-ие). ⚠️ THIS IS THE CARD THAT CARRIES THE UNIT'S TITLE WORD: `неравенство` cannot be a front at all, because равенство is carded in lesson 4 and unit 51's rule bars не + a taught word. A title may use it; a card may not." },
      ],
    },
    {
      id: "ru-u109l4",
      unit: 109,
      lesson: 4,
      title: "Being kept down",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name how a group is held back — worse treatment by category, an unexamined bad opinion, a fixed picture of a whole people, enforced separation, the cutting down of rights — and what is claimed instead.",
      items: [
        { id: "ru-u109l4-diskriminatsiya", type: "vocab", front: "дискриминация", reading: "diskriminatsiya", meaning: "treating people worse for what they are", accept: ["worse treatment on grounds of origin or sex", "the singling out of a group for disadvantage", "unequal treatment by category"], example: { jp: "Дискриминация здесь есть, однако проверить её почти нельзя.", en: "There is discrimination here, yet it is almost impossible to check." }, drill: { jp: "Такая дискриминация здесь обычна", en: "Such discrimination is ordinary here" }, hint: "dis-kri-mi-NA-tsi-ya — stress on NA. FEMININE (-я). ⚠️ It governs по + the dative for the ground: дискриминация ПО возрасту, by age; по полу, by sex. ⚠️ Unlike `предрассудок`, the next card, this names the TREATMENT rather than the opinion behind it." },
        { id: "ru-u109l4-predrassudok", type: "vocab", front: "предрассудок", reading: "predrassudok", meaning: "a settled bad opinion held without reason", accept: ["an opinion about a group with no grounds at all", "an inherited bias nobody examines", "a received piece of unreason"], example: { jp: "Предрассудок живёт дольше закона, и бороться с ним трудно.", en: "A prejudice outlives a law, and is hard to fight." }, drill: { jp: "Предрассудок живёт дольше любого закона", en: "A prejudice outlives any law" }, hint: "prid-ras-SU-dak — stress on SU, the е reduces to i, the final о to a, and the сс is held. MASCULINE, and ⚠️ the о DROPS in every other form: предрассудкА. A compound of пред- and рассудок, reason — a judgement made before the reasoning. ⚠️ `предубеждение` is the near synonym and is BARRED: убеждать from unit 49 hands it over." },
        { id: "ru-u109l4-stereotip", type: "vocab", front: "стереотип", reading: "stereotip", meaning: "a fixed picture of a whole group", accept: ["a ready-made image applied to everybody in a category", "a standard notion of what a group is like", "a set idea about a type of person"], example: { jp: "Стереотип мешает видеть человека, и ломать его очень трудно.", en: "A stereotype makes it hard to see the person, and is very hard to break." }, drill: { jp: "Любой стереотип мешает понимать людей", en: "Any stereotype makes it hard to understand people" }, hint: "ste-re-a-TIP — stress on the last syllable, and the о reduces to a. MASCULINE. ⚠️ ALSO A NEUTRAL PSYCHOLOGICAL TERM in Russian — стереотип поведения is simply a habitual pattern of behaviour, with no criticism at all. Context decides, and the social sense is this card's." },
        { id: "ru-u109l4-segregatsiya", type: "vocab", front: "сегрегация", reading: "segregatsiya", meaning: "the keeping of groups apart by rule", accept: ["enforced separation of one group from another", "the legal holding apart of peoples", "systematic separation by category"], example: { jp: "Сегрегация была законом, и школы были разные.", en: "Segregation was the law, and the schools were separate." }, drill: { jp: "Сегрегация была здесь настоящим законом", en: "Segregation here was a real law" }, hint: "se-gre-GA-tsi-ya — stress on GA. FEMININE (-я). ⚠️ A word Russian uses almost entirely about OTHER countries' histories, which is worth knowing: a learner will meet it in writing about America and South Africa far more often than about Russia. Harsher than `дискриминация` because it is written into law." },
        { id: "ru-u109l4-ushchemlyat", type: "vocab", front: "ущемлять", reading: "ushchemlyat", meaning: "to cut down somebody's rights", accept: ["to curtail what somebody is entitled to", "to encroach on another's rights", "to narrow a person's entitlements"], example: { jp: "Нельзя ущемлять права одних ради других.", en: "The rights of some must not be curtailed for the sake of others." }, drill: { jp: "Нельзя ущемлять права других людей", en: "Other people's rights must not be curtailed" }, hint: "u-shchim-LYAT — stress on the last syllable, with the long soft щ from unit 3, and the е reduces to i. IMPERFECTIVE; the perfective is ущемить. ⚠️ ALSO PHYSICAL — ущемить нерв is to pinch a nerve — and the legal sense is a metaphor on it. It takes the accusative: ущемлять права." },
        { id: "ru-u109l4-ravenstvo", type: "vocab", front: "равенство", reading: "ravenstvo", meaning: "the having of the same rights as everybody", accept: ["the standing of all on one footing", "sameness of rights across people", "parity of standing between people"], example: { jp: "Равенство перед законом здесь только на бумаге.", en: "Equality before the law here is only on paper." }, drill: { jp: "Равенство здесь только на бумаге", en: "Equality here is only on paper" }, hint: "RA-vin-stva — stress on the first syllable, and the final о reduces to a. NEUTER (-о). From равный, equal. ⚠️ THIS CARD IS WHY `неравенство` CANNOT BE ONE: unit 51's rule bars не + a taught word, so the unit's own title word has no card and `расслоение` in lesson 3 carries the concept instead. Also a mathematical equality." },
      ],
    },
  ],
};
