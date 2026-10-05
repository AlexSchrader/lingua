// RU Unit 95 — Путь жизни ("The course of a life") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u87–u97). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, and ru/unit87.js §1–§7 for this block.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 12 (B1)` — no subject named. See
// unit87.js §1 and §6.
//
// THE MEASURED HOLE, AND THE LINE AGAINST u59. `u59l3–l4` already owns the
// EVENTS of a life — рождение · смерть · похороны · поколение · родственник ·
// молодёжь — and u10 owns the family tree. `юность` is TAKEN (u38l4, in a TIME
// unit) and `взрослый` is TAKEN (u10l4, as an adjective). So this unit takes the
// STAGES and the LINE: what a person IS at each point of a life, and what the
// life passes on. All eight allocated fronts were free: детство · старость ·
// подросток · младенец · воспитывать · судьба · биография · зрелость.
//
// ⚠️ `старость` IS THE CLOSEST CALL IN THE WHOLE BLOCK AND IT IS KEPT.
// The -ость shape is what got `слабость` (слабый) and `усталость` (устал)
// refused at A2 (unit51.js §3), and `старый` is taught at u19l1. It stays
// because the gloss does not read off the base: it is "the last part of a life",
// so the learner retrieves the word rather than deriving it, and because old age
// is core B1 vocabulary in any language. `молодость` was dropped on the same
// reasoning run the other way — `зрелость` already fills that slot, and three
// -ость life-stages in one unit would be a paradigm lesson, not a vocabulary
// one. unit87.js §5 records both calls.
//
// ⚠️ FIVE MORE CANDIDATES REFUSED, each for a stated reason:
//   `взрослеть` and `стареть` — §D, the taught word (взрослый u10l4, старый
//        u19l1) gives each straight away.
//   `родиться` — §D against `рождение` (u59l4).
//   `наследовать` — a derivative beside `наследство`, which is carded in the
//        SAME unit. unit51.js §3's worst-version fault.
//   `женитьба` — marriage is BLOCK 2's domain this band, and `свадьба` is
//        already taught at u10l4.
//   `род` — §D against `родной` (u8l2).
//
// ⚠️ TWO SILENT-CONSONANT WORDS AND A GENDER ODDITY, all three flagged in their
// own hints because nothing in the spelling gives them away:
//   `сверстник` (l2) — the т of стн is SILENT: SVERS-nik, like местность (u90l4).
//   `путь` (l3) — MASCULINE despite the -ь, and irregular: its genitive путИ
//        looks feminine.
//   `сирота` (l4) — ends in -а and is used of BOTH sexes, taking the gender of
//        the person: он сирота, она сирота. The папа/дядя class of unit1.js §3,
//        used in both directions, which that rule does not cover.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT95 = {
  id: "ru-u95",
  lang: "ru",
  title: "Путь жизни",
  order: 95,
  stage: "b1",
  lessons: [
    {
      id: "ru-u95l1",
      unit: 95,
      lesson: 1,
      title: "The beginning of a life",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the earliest years — a baby, a cradle, a nanny, childhood, a teenager — and say how a child should be brought up.",
      items: [
        { id: "ru-u95l1-mladenets", type: "vocab", front: "младенец", reading: "mladenets", meaning: "a baby in arms", accept: ["a newborn child", "an infant", "a child too young to walk"], example: { jp: "Этот младенец спит очень тихо.", en: "This baby sleeps very quietly." }, drill: { jp: "Младенец спит почти весь день", en: "The baby sleeps almost all day" }, hint: "mla-DE-nets — stress on DE. MASCULINE. ⚠️ The е DROPS in every other form: младенцА, младенцЫ — the отец class from unit 10. `ребёнок` from unit 10 covers any child; a младенец is one still in arms." },
        { id: "ru-u95l1-kolybel", type: "vocab", front: "колыбель", reading: "kolybel", meaning: "a cradle", accept: ["a baby's rocking bed", "a crib", "the bed a newborn sleeps in"], example: { jp: "Эта колыбель очень старая.", en: "This cradle is very old." }, drill: { jp: "Эта колыбель стоит возле кровати", en: "This cradle stands beside the bed" }, hint: "ka-ly-BEL — stress on the last syllable, with the ы from unit 5, and the о reduces to a. FEMININE despite the -ь. ⚠️ Usually figurative in modern Russian: колыбель русской культуры. The object itself is a кроватка." },
        { id: "ru-u95l1-nyanya", type: "vocab", front: "няня", reading: "nyanya", meaning: "a nanny", accept: ["a woman paid to mind a child", "a children's nurse", "someone who looks after small children"], example: { jp: "Эта няня работает в этой семье.", en: "This nanny works for this family." }, drill: { jp: "Эта няня очень добрая", en: "This nanny is very kind" }, hint: "NYA-nya — stress on the first syllable, and both я are soft. FEMININE (-я). ⚠️ Also the word for a hospital auxiliary, and in Pushkin it is the old family nurse — the няня is a Russian literary figure in her own right." },
        { id: "ru-u95l1-detstvo", type: "vocab", front: "детство", reading: "detstvo", meaning: "childhood", accept: ["the years of being a child", "the early part of a life", "the time of being small"], example: { jp: "Его детство было очень счастливое.", en: "His childhood was very happy." }, drill: { jp: "Моё детство было очень счастливое", en: "My childhood was very happy" }, hint: "DET-stva — stress on the first syllable, and the final о reduces to a. NEUTER (-о), no plural. Built on дети, the plural of ребёнок from unit 10. ⚠️ «Впасть в детство» means to go senile, not to be childish." },
        { id: "ru-u95l1-podrostok", type: "vocab", front: "подросток", reading: "podrostok", meaning: "a teenager", accept: ["a young person between child and adult", "an adolescent", "a youth of about fourteen"], example: { jp: "Этот подросток очень высокий.", en: "This teenager is very tall." }, drill: { jp: "Этот подросток уже совсем взрослый", en: "This teenager is already quite grown up" }, hint: "pad-ROS-tak — stress on ROS, and the о before and after it both reduce to a. MASCULINE. ⚠️ The о of the last syllable drops: подросткА, подросткИ. From расти (unit 54) with под-: the one growing up underneath." },
        { id: "ru-u95l1-vospityvat", type: "vocab", front: "воспитывать", reading: "vospityvat", meaning: "to bring a child up", accept: ["to raise a child", "to rear someone", "to teach a child how to behave"], example: { jp: "Детей нужно воспитывать очень спокойно.", en: "Children have to be brought up very calmly." }, drill: { jp: "Детей нужно воспитывать спокойно", en: "Children have to be brought up calmly" }, hint: "vas-PI-ty-vat — stress on PI, and the о reduces to a. Its present is воспитываю, воспитывает. ⚠️ `учить` from unit 59 is to teach a subject; воспитывать is to form a person's character, and Russian keeps the two strictly apart." },
      ],
    },
    {
      id: "ru-u95l2",
      unit: 95,
      lesson: 2,
      title: "Growing into a life",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about coming into your own — maturity, someone your own age, a calling, a life story, a stage of life and the path you take.",
      items: [
        { id: "ru-u95l2-zrelost", type: "vocab", front: "зрелость", reading: "zrelost", meaning: "full maturity", accept: ["being fully grown up", "the prime of life", "ripeness of years"], example: { jp: "Зрелость это очень долгий путь.", en: "Maturity is a very long road." }, drill: { jp: "Зрелость это долгая работа", en: "Maturity is long work" }, hint: "ZRE-last — stress on the first syllable. FEMININE despite the -ь, like every -ость noun. From зрелый, ripe. ⚠️ Used of fruit too, and «аттестат зрелости» was the old name for a school-leaving certificate." },
        { id: "ru-u95l2-sverstnik", type: "vocab", front: "сверстник", reading: "sverstnik", meaning: "someone of your own age", accept: ["a person the same age as you", "a peer in years", "an age-mate"], example: { jp: "Его сверстник уже работает.", en: "Someone his own age is already working." }, drill: { jp: "Этот сверстник учится в школе", en: "This boy of the same age is still at school" }, hint: "SVERST-nik — stress on the first syllable, and ⚠️ the т of стн is SILENT: SVERS-nik, exactly like местность in unit 90. MASCULINE. From верста, an old measure of distance: people who have come the same way." },
        { id: "ru-u95l2-prizvanie", type: "vocab", front: "призвание", reading: "prizvanie", meaning: "a calling", accept: ["the work a person is meant for", "a vocation", "what someone was born to do"], example: { jp: "Это было её призвание.", en: "This was her calling." }, drill: { jp: "Это настоящее призвание для него", en: "This is a real calling for him" }, hint: "priz-VA-ni-ye — stress on VA. NEUTER (-е). From звать, to call, from unit 8: what calls you. ⚠️ Much stronger than `профессия` from unit 8 — a профессия is a job, a призвание is what you were made for." },
        { id: "ru-u95l2-biografiya", type: "vocab", front: "биография", reading: "biografiya", meaning: "a life story", accept: ["an account of someone's life", "a written life", "someone's life as it is told"], example: { jp: "Биография этого человека очень интересная.", en: "This man's life story is very interesting." }, drill: { jp: "Эта биография очень интересная", en: "This life story is very interesting" }, hint: "bi-a-GRA-fi-ya — stress on GRA, and the о reduces to a. FEMININE (-я). ⚠️ In Russian it also means the facts of your own life on a form: «расскажите свою биографию» at a собеседование, from unit 42." },
        { id: "ru-u95l2-etap", type: "vocab", front: "этап", reading: "etap", meaning: "a stage of something", accept: ["one step in a long process", "one phase of a process", "a part of a journey"], example: { jp: "Это самый трудный этап в жизни.", en: "This is the hardest stage in a life." }, drill: { jp: "Это очень трудный этап", en: "This is a very hard stage" }, hint: "e-TAP — stress on the last syllable, and the э at the front is a plain e. MASCULINE. ⚠️ It has a grim second sense in Russian: an этап is also a prisoners' transfer, which is why «идти по этапу» means to be moved between camps." },
        { id: "ru-u95l2-put", type: "vocab", front: "путь", reading: "put", meaning: "a path through life", accept: ["a way someone takes", "a road in the figurative sense", "the course a life runs"], example: { jp: "У каждого человека долгий путь.", en: "Every person has a long road." }, drill: { jp: "Это очень трудный путь", en: "This is a very hard road" }, hint: "PUT — one syllable, and the ь keeps the т soft. ⚠️ MASCULINE despite the -ь, and irregular: путИ, путЁм, with a genitive путИ that LOOKS feminine. `дорога` from unit 4 is the physical road; путь is the one you take through something." },
      ],
    },
    {
      id: "ru-u95l3",
      unit: 95,
      lesson: 3,
      title: "The later part",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the end of a life — old age, a widow, fate, a grave, a cemetery — and mark a big anniversary.",
      items: [
        { id: "ru-u95l3-starost", type: "vocab", front: "старость", reading: "starost", meaning: "the last part of a life", accept: ["old age", "the years of being old", "a person's final years"], example: { jp: "Старость это не болезнь.", en: "Old age is not an illness." }, drill: { jp: "Его старость была очень спокойная", en: "His old age was very peaceful" }, hint: "STA-rast — stress on the first syllable. FEMININE despite the -ь, like every -ость noun. ⚠️ Built on старый from unit 19, and glossed the long way round on purpose so that the prompt does not simply read off the base word." },
        { id: "ru-u95l3-vdova", type: "vocab", front: "вдова", reading: "vdova", meaning: "a widow", accept: ["a woman whose husband has died", "a bereaved wife", "a woman left alone after a death"], example: { jp: "Эта вдова живёт одна.", en: "This widow lives alone." }, drill: { jp: "Эта вдова живёт совсем одна", en: "This widow lives entirely alone" }, hint: "vda-VA — stress on the ending, and the о reduces to a. FEMININE (-а). ⚠️ Its plural moves the stress back: вдОвы. The man is вдовец, with the е dropping: вдовцА." },
        { id: "ru-u95l3-sudba", type: "vocab", front: "судьба", reading: "sudba", meaning: "fate", accept: ["destiny", "what life has decided for someone", "the way a life turns out"], example: { jp: "Судьба этого человека была очень трудная.", en: "This man's fate was very hard." }, drill: { jp: "Его судьба была очень трудная", en: "His fate was very hard" }, hint: "sud-BA — stress on the ending, and the ь keeps the д soft. FEMININE (-а). ⚠️ Its plural moves the stress right back: сУдьбы. Constant in speech: «такая судьба», that is how it goes." },
        { id: "ru-u95l3-mogila", type: "vocab", front: "могила", reading: "mogila", meaning: "someone's grave", accept: ["where a body is buried", "a burial place", "a dug resting place"], example: { jp: "Эта могила очень старая.", en: "This grave is very old." }, drill: { jp: "Эта могила совсем старая", en: "This grave is completely old" }, hint: "ma-GI-la — stress on GI, and the о reduces to a. FEMININE (-а). ⚠️ «Молчать как могила» is to be silent as the grave, and «до могилы» means to the end of one's life." },
        { id: "ru-u95l3-kladbishche", type: "vocab", front: "кладбище", reading: "kladbishche", meaning: "a cemetery", accept: ["a burial ground", "where the dead are buried", "a graveyard"], example: { jp: "Кладбище было за деревней.", en: "The cemetery was beyond the village." }, drill: { jp: "Это кладбище очень старое", en: "This cemetery is very old" }, hint: "KLAD-bi-shche — stress on the FIRST syllable, which learners regularly get wrong, and it ends in the long soft щ. NEUTER (-е). From класть, to lay, from unit 15: the place where people are laid." },
        { id: "ru-u95l3-yubiley", type: "vocab", front: "юбилей", reading: "yubiley", meaning: "a milestone anniversary", accept: ["a round-numbered anniversary", "a jubilee", "a fiftieth or hundredth birthday"], example: { jp: "Его юбилей был в прошлом году.", en: "His big anniversary was last year." }, drill: { jp: "Этот юбилей был очень большой", en: "That anniversary was a very big one" }, hint: "yu-bi-LEY — stress on the last syllable. MASCULINE. ⚠️ ONLY a round number — fifty, sixty, a hundred. An ordinary birthday is день рождения, and calling that a юбилей is simply wrong." },
      ],
    },
    {
      id: "ru-u95l4",
      unit: 95,
      lesson: 4,
      title: "The line and what it leaves",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a family line — an ancestor, a descendant, an inheritance, a will — and about an orphan and who has care of them.",
      items: [
        { id: "ru-u95l4-predok", type: "vocab", front: "предок", reading: "predok", meaning: "an ancestor", accept: ["someone a family comes from", "a forebear", "a person from an earlier generation of a family"], example: { jp: "Его предок жил в этой деревне.", en: "His ancestor lived in this village." }, drill: { jp: "Этот предок жил очень давно", en: "This ancestor lived a very long time ago" }, hint: "PRE-dak — stress on the first syllable, and the final о reduces to a. MASCULINE. ⚠️ The о drops in every other form: предкА, предкИ. In youth slang предки means parents, and it is not polite." },
        { id: "ru-u95l4-potomok", type: "vocab", front: "потомок", reading: "potomok", meaning: "a descendant", accept: ["someone descended from a family", "a person of a later generation", "the one who comes after"], example: { jp: "Он потомок очень старой семьи.", en: "He is a descendant of a very old family." }, drill: { jp: "Он потомок этой семьи", en: "He is a descendant of this family" }, hint: "pa-TO-mak — stress on TO, and the other two о reduce to a. MASCULINE, and the о drops: потомкА, потомкИ. ⚠️ NOT related to `потом`, later, from unit 4, although the two look alike — the same situation as зависть and зависеть at A2." },
        { id: "ru-u95l4-nasledstvo", type: "vocab", front: "наследство", reading: "nasledstvo", meaning: "an inheritance", accept: ["what is left to someone when a person dies", "property passed on at a death", "a legacy"], example: { jp: "Это наследство было очень большое.", en: "This inheritance was very large." }, drill: { jp: "Он получил большое наследство", en: "He received a large inheritance" }, hint: "nas-LED-stva — stress on LED, and the final о reduces to a. NEUTER (-о). From след, a trace. ⚠️ `наследник` from unit 92 is the person; this is the thing. The verb наследовать is deliberately not carded, being a derivative beside its base." },
        { id: "ru-u95l4-zaveshchanie", type: "vocab", front: "завещание", reading: "zaveshchanie", meaning: "a will", accept: ["the paper saying who gets what", "a testament", "written instructions left at a death"], example: { jp: "Завещание лежит в этом банке.", en: "The will is lying in this bank." }, drill: { jp: "Это завещание очень старое", en: "This will is very old" }, hint: "za-vi-SHCHA-ni-ye — stress on SHCHA, with the long soft щ, and the first е reduces to i. NEUTER (-е). From завещать, to bequeath. ⚠️ Also figurative: литературное завещание, a writer's last word." },
        { id: "ru-u95l4-sirota", type: "vocab", front: "сирота", reading: "sirota", meaning: "an orphan", accept: ["a child with no parents", "a child whose mother and father have died", "a parentless child"], example: { jp: "Этот ребёнок сирота.", en: "This child is an orphan." }, drill: { jp: "Он сирота уже много лет", en: "He has been an orphan for many years" }, hint: "si-ra-TA — stress on the ending, and both vowels before it reduce. ⚠️ It ends in -а and is used of BOTH sexes, taking the gender of the person: он сирота, она сирота. The папа/дядя class of unit 1 §3, used in both directions." },
        { id: "ru-u95l4-opeka", type: "vocab", front: "опека", reading: "opeka", meaning: "guardianship", accept: ["legal care of a child by an adult", "being someone's official guardian", "care taken over a person"], example: { jp: "Опека над детьми очень важная работа.", en: "Guardianship of children is very important work." }, drill: { jp: "Опека здесь очень важная", en: "Guardianship here is very important" }, hint: "a-PE-ka — stress on PE, and the о reduces to a. FEMININE (-а). ⚠️ Also used lightly of anyone fussing over you: «он под опекой матери», he is under his mother's wing." },
      ],
    },
  ],
};
