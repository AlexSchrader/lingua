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
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ CROSS-BLOCK DEDUPE, 2026-10-06 — 5 of 24 replaced.
// ═════════════════════════════════════════════════════════════════════════════
//     этап -> u66 · призвание -> u72 · предок · потомок · юбилей -> u73
// All five are block 1's, which is the earlier range, so block 3 yields — even
// though the arc-of-a-life theme is this unit's and was allocated centrally.
// The theme survives; these five particular words had homes already.
// Replaced by: наставник · совершеннолетие (l2) · траур (l3) · племянник ·
// реликвия (l4).
// ⚠️ `племянник` closes a measured hole: the course taught дядя and тётя at u10
// and had no word for what they call YOU.
// ⚠️ `совершеннолетие` is kept against a §D objection (`совершать`, u79l2): the
// derivation is совершенный + лет and «coming of age» is not reachable from «to
// commit an act» in either direction.
// ⚠️ l3 was deliberately NOT given a third death word. могила and кладбище are
// already there, and `похороны` is taken (u59l4) — `траур` is the public state,
// which is a different card and a lighter lesson.
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
      canDo: "Talk about coming into your own — maturity, someone your own age, coming of age, a life story, a mentor and the path you take.",
      items: [
        { id: "ru-u95l2-zrelost", type: "vocab", front: "зрелость", reading: "zrelost", meaning: "full maturity", accept: ["being fully grown up", "the prime of life", "ripeness of years"], example: { jp: "Зрелость это очень долгий путь.", en: "Maturity is a very long road." }, drill: { jp: "Зрелость это долгая работа", en: "Maturity is long work" }, hint: "ZRE-last — stress on the first syllable. FEMININE despite the -ь, like every -ость noun. From зрелый, ripe. ⚠️ Used of fruit too, and «аттестат зрелости» was the old name for a school-leaving certificate." },
        { id: "ru-u95l2-sverstnik", type: "vocab", front: "сверстник", reading: "sverstnik", meaning: "someone of your own age", accept: ["a person the same age as you", "a peer in years", "an age-mate"], example: { jp: "Его сверстник уже работает.", en: "Someone his own age is already working." }, drill: { jp: "Этот сверстник учится в школе", en: "This boy of the same age is still at school" }, hint: "SVERST-nik — stress on the first syllable, and ⚠️ the т of стн is SILENT: SVERS-nik, exactly like местность in unit 90. MASCULINE. From верста, an old measure of distance: people who have come the same way." },
        { id: "ru-u95l2-sovershennoletie", type: "vocab", front: "совершеннолетие", reading: "sovershennoletie", meaning: "coming of age", accept: ["legal adulthood", "reaching full age", "the age of majority"], example: { jp: "Совершеннолетие здесь наступает в восемнадцать лет.", en: "Coming of age here happens at eighteen." }, drill: { jp: "Совершеннолетие наступает в восемнадцать лет", en: "Coming of age happens at eighteen" }, hint: "sa-ver-shen-na-LE-ti-ye — stress on LE, and the first two о reduce to a. NEUTER (-ие). Literally the full count of years — совершенный «complete» plus лет. ⚠️ It is the LEGAL threshold, eighteen in Russia, not the feeling of growing up, which is зрелость in this lesson. ⚠️ Carded although совершать is taught at u79: «coming of age» is not reachable from «to commit an act» in any direction." },
        { id: "ru-u95l2-biografiya", type: "vocab", front: "биография", reading: "biografiya", meaning: "a life story", accept: ["an account of someone's life", "a written life", "someone's life as it is told"], example: { jp: "Биография этого человека очень интересная.", en: "This man's life story is very interesting." }, drill: { jp: "Эта биография очень интересная", en: "This life story is very interesting" }, hint: "bi-a-GRA-fi-ya — stress on GRA, and the о reduces to a. FEMININE (-я). ⚠️ In Russian it also means the facts of your own life on a form: «расскажите свою биографию» at a собеседование, from unit 42." },
        { id: "ru-u95l2-nastavnik", type: "vocab", front: "наставник", reading: "nastavnik", meaning: "a mentor", accept: ["a mentor figure", "someone who guides you", "a master to an apprentice"], example: { jp: "Хороший наставник важнее любого диплома, и это понимают поздно.", en: "A good mentor matters more than any certificate, and people understand that late." }, drill: { jp: "Хороший наставник важнее диплома", en: "A good mentor matters more than a certificate" }, hint: "nas-TAV-nik — stress on TAV, and the а before it reduces. MASCULINE; the feminine is наставница. From наставлять, to set somebody on a path. ⚠️ NOT учитель from unit 8, who teaches a subject to a class: a наставник takes ONE person through a craft or a life." },
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
      canDo: "Talk about the end of a life — old age, a widow, fate, a grave, a cemetery — and say that mourning was declared.",
      items: [
        { id: "ru-u95l3-starost", type: "vocab", front: "старость", reading: "starost", meaning: "the last part of a life", accept: ["old age", "the years of being old", "a person's final years"], example: { jp: "Старость это не болезнь.", en: "Old age is not an illness." }, drill: { jp: "Его старость была очень спокойная", en: "His old age was very peaceful" }, hint: "STA-rast — stress on the first syllable. FEMININE despite the -ь, like every -ость noun. ⚠️ Built on старый from unit 19, and glossed the long way round on purpose so that the prompt does not simply read off the base word." },
        { id: "ru-u95l3-vdova", type: "vocab", front: "вдова", reading: "vdova", meaning: "a widow", accept: ["a woman whose husband has died", "a bereaved wife", "a woman left alone after a death"], example: { jp: "Эта вдова живёт одна.", en: "This widow lives alone." }, drill: { jp: "Эта вдова живёт совсем одна", en: "This widow lives entirely alone" }, hint: "vda-VA — stress on the ending, and the о reduces to a. FEMININE (-а). ⚠️ Its plural moves the stress back: вдОвы. The man is вдовец, with the е dropping: вдовцА." },
        { id: "ru-u95l3-sudba", type: "vocab", front: "судьба", reading: "sudba", meaning: "fate", accept: ["destiny", "what life has decided for someone", "the way a life turns out"], example: { jp: "Судьба этого человека была очень трудная.", en: "This man's fate was very hard." }, drill: { jp: "Его судьба была очень трудная", en: "His fate was very hard" }, hint: "sud-BA — stress on the ending, and the ь keeps the д soft. FEMININE (-а). ⚠️ Its plural moves the stress right back: сУдьбы. Constant in speech: «такая судьба», that is how it goes." },
        { id: "ru-u95l3-mogila", type: "vocab", front: "могила", reading: "mogila", meaning: "someone's grave", accept: ["where a body is buried", "a burial place", "a dug resting place"], example: { jp: "Эта могила очень старая.", en: "This grave is very old." }, drill: { jp: "Эта могила совсем старая", en: "This grave is completely old" }, hint: "ma-GI-la — stress on GI, and the о reduces to a. FEMININE (-а). ⚠️ «Молчать как могила» is to be silent as the grave, and «до могилы» means to the end of one's life." },
        { id: "ru-u95l3-kladbishche", type: "vocab", front: "кладбище", reading: "kladbishche", meaning: "a cemetery", accept: ["a burial ground", "where the dead are buried", "a graveyard"], example: { jp: "Кладбище было за деревней.", en: "The cemetery was beyond the village." }, drill: { jp: "Это кладбище очень старое", en: "This cemetery is very old" }, hint: "KLAD-bi-shche — stress on the FIRST syllable, which learners regularly get wrong, and it ends in the long soft щ. NEUTER (-е). From класть, to lay, from unit 15: the place where people are laid." },
        { id: "ru-u95l3-traur", type: "vocab", front: "траур", reading: "traur", meaning: "mourning", accept: ["public mourning", "a period of mourning", "the outward signs of grief"], example: { jp: "В городе объявили траур, и все концерты отменили.", en: "Mourning was declared in the city, and all the concerts were called off." }, drill: { jp: "В городе объявили траур", en: "Mourning was declared in the city" }, hint: "TRA-ur — stress on the first syllable, and the two vowels are said separately, TRA-oor. MASCULINE. From German Trauer. ⚠️ It is the OUTWARD state — black clothes, a day declared, flags down — where горе from unit 67 is the grief itself." },
      ],
    },
    {
      id: "ru-u95l4",
      unit: 95,
      lesson: 4,
      title: "The line and what it leaves",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a family line — a nephew, a family heirloom, an inheritance, a will — and about an orphan and who has care of them.",
      items: [
        { id: "ru-u95l4-plemyannik", type: "vocab", front: "племянник", reading: "plemyannik", meaning: "a nephew", accept: ["a brother's son", "a sister's son", "the son of your brother or sister"], example: { jp: "Племянник приезжает каждое лето, и дети его очень любят.", en: "My nephew comes every summer, and the children love him very much." }, drill: { jp: "Племянник приезжает каждое лето", en: "My nephew comes every summer" }, hint: "ple-MYAN-nik — stress on MYAN, and the нн is held a beat. MASCULINE; the niece is племянница. Built on the племя root (unit 92) — the old word for kin. ⚠️ The course taught дядя and тётя at unit 10 and had no word for what they call YOU; this closes it." },
        { id: "ru-u95l4-relikviya", type: "vocab", front: "реликвия", reading: "relikviya", meaning: "a family heirloom", accept: ["an heirloom", "a treasured keepsake", "an object kept for its history"], example: { jp: "Эти часы — семейная реликвия, и продавать их никто не хочет.", en: "That watch is a family heirloom, and nobody wants to sell it." }, drill: { jp: "Эти часы семейная реликвия", en: "That watch is a family heirloom" }, hint: "re-LIK-vi-ya — stress on LIK. FEMININE (-я). A thing kept for WHOSE it was, not for what it is worth — «семейная реликвия». In a church it is a holy relic, which is the same word. ⚠️ наследство in this lesson is everything inherited; a реликвия is the one piece nobody sells." },
        { id: "ru-u95l4-nasledstvo", type: "vocab", front: "наследство", reading: "nasledstvo", meaning: "an inheritance", accept: ["what is left to someone when a person dies", "property passed on at a death", "a legacy"], example: { jp: "Это наследство было очень большое.", en: "This inheritance was very large." }, drill: { jp: "Он получил большое наследство", en: "He received a large inheritance" }, hint: "nas-LED-stva — stress on LED, and the final о reduces to a. NEUTER (-о). From след, a trace. ⚠️ `наследник` from unit 92 is the person; this is the thing. The verb наследовать is deliberately not carded, being a derivative beside its base." },
        { id: "ru-u95l4-zaveshchanie", type: "vocab", front: "завещание", reading: "zaveshchanie", meaning: "a will", accept: ["the paper saying who gets what", "a testament", "written instructions left at a death"], example: { jp: "Завещание лежит в этом банке.", en: "The will is lying in this bank." }, drill: { jp: "Это завещание очень старое", en: "This will is very old" }, hint: "za-vi-SHCHA-ni-ye — stress on SHCHA, with the long soft щ, and the first е reduces to i. NEUTER (-е). From завещать, to bequeath. ⚠️ Also figurative: литературное завещание, a writer's last word." },
        { id: "ru-u95l4-sirota", type: "vocab", front: "сирота", reading: "sirota", meaning: "an orphan", accept: ["a child with no parents", "a child whose mother and father have died", "a parentless child"], example: { jp: "Этот ребёнок сирота.", en: "This child is an orphan." }, drill: { jp: "Он сирота уже много лет", en: "He has been an orphan for many years" }, hint: "si-ra-TA — stress on the ending, and both vowels before it reduce. ⚠️ It ends in -а and is used of BOTH sexes, taking the gender of the person: он сирота, она сирота. The папа/дядя class of unit 1 §3, used in both directions." },
        { id: "ru-u95l4-opeka", type: "vocab", front: "опека", reading: "opeka", meaning: "guardianship", accept: ["legal care of a child by an adult", "being someone's official guardian", "care taken over a person"], example: { jp: "Опека над детьми очень важная работа.", en: "Guardianship of children is very important work." }, drill: { jp: "Опека здесь очень важная", en: "Guardianship here is very important" }, hint: "a-PE-ka — stress on PE, and the о reduces to a. FEMININE (-а). ⚠️ Also used lightly of anyone fussing over you: «он под опекой матери», he is under his mother's wing." },
      ],
    },
  ],
};
