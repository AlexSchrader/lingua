// RU Unit 84 — Спорт и состязание ("Sport and competition") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, ru/unit74.js §1–§5.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 1 (B1)` — NO SUBJECT NAMED, which is the
// same problem A2's block 3 recorded for all ten of its slots (unit51.js's
// header): there is nothing to measure a hole against, so the theming is the
// seat's own invention. `src/data/lint.js` hard-errors on /^Vocabulary \d+ \(B1\)$/
// once a unit is authored, so retitling in Russian was compulsory.
//
// THE MEASURED HOLE, and it is the starkest one in the whole 1,440-word corpus:
// **`спорт` (u9l3) IS THE ONLY SPORTS WORD RUSSIAN TEACHES.** u27 Свободное
// время has играть · плавать · бегать · танцевать, which are activities rather
// than sport, and that is the lot. Probed on this branch: матч · игрок · тренер ·
// тренировка · победа · поражение · соревнование · мяч · стадион · бассейн ·
// судья · очко were all twelve free as FRONTS. A learner could say they liked
// sport and could not name a ball.
//
// ⚠️ FOUR OF THOSE TWELVE WERE STILL REFUSED, and the reasons matter because the
// crew brief listed all twelve as available — a front probe cannot see a lexeme:
//   `игрок` — против `играть` (u27l1). «A player» is exactly what a learner who
//        knows «to play» would guess. l2 cards `соперник` and `чемпион` instead.
//   `тренировка` — против `тренер`, carded in the same lesson. One трен- word per
//        unit; the coach is the more useful of the two.
//   `судья` — против `суд` (u51l3). In Russian the link is transparent: a судья
//        is a judge, in a court or on a pitch. l1 cards `свисток` instead, which
//        is what you actually hear.
//   `очко` «a point» — ⚠️ THE READING/FORM TRAP OF THIS BLOCK. `очки` «glasses»
//        IS THE PLURAL OF `очко`. Both read as free fronts and they are one
//        noun's two numbers, so carding both would be two mastery tracks for one
//        word — unit1.js §5. The glasses are worth more to a learner, so u85l2
//        cards `очки` and this unit scores with `балл`, which is clean. It would
//        have passed every probe the course owns.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT84 = {
  id: "ru-u84",
  lang: "ru",
  title: "Спорт и состязание",
  order: 84,
  stage: "b1",
  lessons: [
    {
      id: "ru-u84l1",
      unit: 84,
      lesson: 1,
      title: "The game itself",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a match, a ball, a goal scored, a mark awarded, a draw and the referee's whistle.",
      items: [
        { id: "ru-u84l1-match", type: "vocab", front: "матч", reading: "match", meaning: "a match", accept: ["a game between two sides", "a fixture", "the match"], example: { jp: "Матч начался в семь и продолжался почти три часа.", en: "The match began at seven and went on for almost three hours." }, drill: { jp: "Матч начался в семь", en: "The match began at seven" }, hint: "MATCH — one syllable, and the тч is said as one ch. MASCULINE. ⚠️ Only of sport. `игра` «a game» is NOT a card in this course — it is built on играть from unit 27 — so матч is the word a learner produces for a fixture." },
        { id: "ru-u84l1-myach", type: "vocab", front: "мяч", reading: "myach", meaning: "a ball", accept: ["the ball", "a ball for football", "a ball to play with"], example: { jp: "Мяч лежал на траве, и никто его не трогал почти час.", en: "The ball lay on the grass and nobody touched it for almost an hour." }, drill: { jp: "Мяч лежал на траве", en: "The ball lay on the grass" }, hint: "MYACH — one syllable, with the я softening the м. MASCULINE. ⚠️ Only a ball you PLAY with. A ball-shaped thing in general is шар, which this course does not teach, and a ball at a palace is бал — one л, and a completely different word." },
        { id: "ru-u84l1-gol", type: "vocab", front: "гол", reading: "gol", meaning: "a goal scored", accept: ["a score in a game", "scoring a goal", "the goal that was scored"], example: { jp: "Гол был один, зато о нём говорили всю неделю.", en: "There was one goal, but it was talked about all week." }, drill: { jp: "Гол был только один", en: "There was only one goal" }, hint: "GOL — one syllable. MASCULINE. ⚠️ GLOSSED «a goal scored» ON PURPOSE: `цель` from unit 25 is already «a goal» in the aim sense, and the grader strips a leading «a», so the two would be one prompt with two answers. A гол is only ever in a game." },
        { id: "ru-u84l1-ball", type: "vocab", front: "балл", reading: "ball", meaning: "a point in scoring", accept: ["a mark awarded", "a scoring point", "a grade point"], example: { jp: "Балл за этот ответ он получил самый низкий, и спорить не стал.", en: "He got the lowest mark for that answer and did not argue." }, drill: { jp: "Балл за ответ был низкий", en: "The mark for the answer was low" }, hint: "BALL — one syllable, and the лл is held a beat. MASCULINE. ⚠️ `очко`, the other word for a point, CANNOT be carded in this course: очки «glasses» is its plural and u85 cards that. Also used of exam marks and of wind force: «ветер семь баллов»." },
        { id: "ru-u84l1-nichya", type: "vocab", front: "ничья", reading: "nichya", meaning: "a drawn game", accept: ["a draw", "a tie", "an even result"], example: { jp: "Ничья здесь хуже поражения: победы хотели все.", en: "A draw here is worse than a defeat: everyone wanted a win." }, drill: { jp: "Ничья здесь хуже поражения", en: "A draw here is worse than a defeat" }, hint: "nich-YA — stress on the last syllable. ⚠️ Glossed «a drawn game» because `рисовать` (u27l1) is prompted as «to draw» and the grader strips the leading «to»/«a». FEMININE (-я), and ⚠️ IT IS AN ADJECTIVE DOING A NOUN'S JOB — literally «nobody's», from ничей. It is the only form you need, so it is carded as it stands, the way `беременная` is in unit 78." },
        { id: "ru-u84l1-svistok", type: "vocab", front: "свисток", reading: "svistok", meaning: "a whistle", accept: ["the whistle", "a blast of a whistle", "a referee's whistle"], example: { jp: "Свисток был такой громкий, что его слышали на улице.", en: "The whistle was so loud that it was heard out in the street." }, drill: { jp: "Свисток был очень громкий", en: "The whistle was very loud" }, hint: "svis-TOK — stress on the last syllable. MASCULINE, and ⚠️ its о DROPS in every other case: свисткА, свисткУ — the same class as кошелёк in unit 44. Both the object and the sound it makes. `судья` is deliberately not carded — see this unit's header." },
      ],
    },
    {
      id: "ru-u84l2",
      unit: 84,
      lesson: 2,
      title: "The people and the contest",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a coach, a rival and a champion, and talk about a contest, a victory and a defeat.",
      items: [
        { id: "ru-u84l2-trener", type: "vocab", front: "тренер", reading: "trener", meaning: "a coach", accept: ["a trainer", "the coach", "a team manager"], example: { jp: "Тренер молчал весь первый час, и это было хуже всего.", en: "The coach said nothing for the whole first hour, and that was the worst part." }, drill: { jp: "Тренер молчал весь час", en: "The coach said nothing for the whole hour" }, hint: "TRE-ner — stress on the first syllable. MASCULINE. ⚠️ `тренировка` «a training session» is NOT carded against it — one трен- word per unit, and the coach is worth more. руководитель from unit 32 leads an organisation; a тренер leads a team." },
        { id: "ru-u84l2-sopernik", type: "vocab", front: "соперник", reading: "sopernik", meaning: "a rival", accept: ["an opponent", "the other side", "a competitor"], example: { jp: "Соперник был сильнее, зато играл очень грубо.", en: "The opponent was stronger, but played very roughly." }, drill: { jp: "Соперник был сильнее", en: "The opponent was stronger" }, hint: "sa-PER-nik — stress on PER, and the о reduces to a. MASCULINE. In sport, in business and in love — «соперник» covers all three. враг «an enemy» is not taught; соперник is competition, not hostility." },
        { id: "ru-u84l2-chempion", type: "vocab", front: "чемпион", reading: "chempion", meaning: "a champion", accept: ["the champion", "a title holder", "the winner of a title"], example: { jp: "Чемпион этого года живёт в соседнем районе и работает инженером.", en: "This year's champion lives in the next district and works as an engineer." }, drill: { jp: "Чемпион живёт в соседнем районе", en: "The champion lives in the next district" }, hint: "chem-pi-ON — stress on the last syllable. MASCULINE; the feminine is чемпионка. ⚠️ Russian also uses it ironically about anyone who is best at something trivial: «чемпион по опозданиям»." },
        { id: "ru-u84l2-sorevnovanie", type: "vocab", front: "соревнование", reading: "sorevnovanie", meaning: "a sporting contest", accept: ["a competition in sport", "a meet", "a tournament"], example: { jp: "Соревнование назначено на январь, если, конечно, будет лёд.", en: "The contest is scheduled for January, if there is ice, of course." }, drill: { jp: "Соревнование назначено на январь", en: "The contest is scheduled for January" }, hint: "sa-rev-na-VA-ni-ye — six syllables, stress on VA, and both о reduce to a. NEUTER (-ие). ⚠️ Same ревн- root as `ревность` from unit 78 — jealousy and competition really are the same word in Russian, and neither gives the other away. конкурс from unit 42 is a competition you APPLY to; соревнование is one you play in." },
        { id: "ru-u84l2-pobeda", type: "vocab", front: "победа", reading: "pobeda", meaning: "a victory", accept: ["a win", "winning", "triumph"], example: { jp: "Победа была нужна всем, даже тем, кто хоккей совсем не любит.", en: "Everyone needed the victory, even those who do not like hockey at all." }, drill: { jp: "Победа была нужна всем", en: "Everyone needed the victory" }, hint: "pa-BE-da — stress on BE, and the о reduces to a. FEMININE (-а). ⚠️ In Russia the word is never only about sport: «Победа» with a capital letter is 1945, and the 9th of May is the biggest day in the calendar. успех from unit 25 is success in general." },
        { id: "ru-u84l2-porazhenie", type: "vocab", front: "поражение", reading: "porazhenie", meaning: "a defeat", accept: ["a lost game", "losing", "being beaten"], example: { jp: "Поражение было тяжёлым, зато тренер никого не ругал.", en: "The defeat was a hard one, but the coach scolded nobody." }, drill: { jp: "Поражение было очень тяжёлым", en: "The defeat was a very hard one" }, hint: "pa-ra-ZHE-ni-ye — stress on ZHE, and both о reduce to a. NEUTER (-ие). ⚠️ Same раж- root as `отражать` from unit 79 — «to reflect» and «a defeat» both come from разить, to strike, and no learner would connect them. Also medical: «поражение нерва»." },
      ],
    },
    {
      id: "ru-u84l3",
      unit: 84,
      lesson: 3,
      title: "Which sport",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name football, ice hockey, chess, skis, skates and the swimming pool — and say which you play ON, IN or AT.",
      items: [
        { id: "ru-u84l3-futbol", type: "vocab", front: "футбол", reading: "futbol", meaning: "football", accept: ["soccer", "the game of football", "a game of football"], example: { jp: "Футбол здесь любят все, хотя стадиона в городе нет.", en: "Everyone here loves football, although the town has no stadium." }, drill: { jp: "Футбол здесь любят все", en: "Everyone here loves football" }, hint: "fut-BOL — stress on the last syllable. MASCULINE. ⚠️ You PLAY it with в + the ACCUSATIVE: «играть В футбол» — a different preposition from an instrument, which takes на (unit 74's гитара). The rule is в for games, на for instruments." },
        { id: "ru-u84l3-khokkey", type: "vocab", front: "хоккей", reading: "khokkey", meaning: "ice hockey", accept: ["hockey", "the game of hockey", "a hockey match"], example: { jp: "Хоккей зимой смотрят даже те, кто спортом совсем не занимается.", en: "In winter even people who do no sport at all watch ice hockey." }, drill: { jp: "Хоккей зимой смотрят все", en: "Everyone watches ice hockey in winter" }, hint: "kha-KKEY — stress on the last syllable, the о reduces to a, and the кк is held. MASCULINE. ⚠️ In Russian it means ICE hockey by default — the field game has to be called «хоккей на траве». Also «играть в хоккей», with в." },
        { id: "ru-u84l3-shakhmaty", type: "vocab", front: "шахматы", reading: "shakhmaty", meaning: "chess", accept: ["a game of chess", "the game of chess", "the chess pieces"], example: { jp: "Шахматы он любит больше, чем любой другой спорт, и это его не удивляет.", en: "He likes chess more than any other sport, and that does not surprise him." }, drill: { jp: "Шахматы он любит больше всего", en: "He likes chess most of all" }, hint: "SHAKH-ma-ty — stress on the first syllable. MASCULINE, and ⚠️ PLURAL ONLY: there is no шахмат. From Persian «shah mat», the king is dead — the same words as English checkmate. In Russia it counts as a sport, not a pastime." },
        { id: "ru-u84l3-lyzhi", type: "vocab", front: "лыжи", reading: "lyzhi", meaning: "skis", accept: ["skiing", "a pair of skis", "cross-country skis"], example: { jp: "Лыжи стоят в шкафу с января и никому не нужны.", en: "The skis have stood in the cupboard since January and nobody wants them." }, drill: { jp: "Лыжи стоят в шкафу", en: "The skis are standing in the cupboard" }, hint: "LY-zhi — stress on the first syllable, with the hard ы from unit 5. FEMININE, and ⚠️ taught in the PLURAL because you never have one. The activity is «ходить на лыжах» — to go ON skis, with на and the prepositional, not «to ski»." },
        { id: "ru-u84l3-konki", type: "vocab", front: "коньки", reading: "konki", meaning: "skates", accept: ["ice skates", "skating", "a pair of skates"], example: { jp: "Коньки ему купили в декабре, а лёд был только в феврале.", en: "They bought him skates in December, and there was ice only in February." }, drill: { jp: "Коньки ему купили в декабре", en: "They bought him skates in December" }, hint: "kan-KI — stress on the last syllable, and the о reduces to a. MASCULINE, taught in the PLURAL for the same reason as лыжи. ⚠️ Literally «little horses», from конь, a steed — because old skates were carved with a horse's head. The activity is «на коньках»." },
        { id: "ru-u84l3-basseyn", type: "vocab", front: "бассейн", reading: "basseyn", meaning: "a swimming pool", accept: ["a pool", "the baths", "a swimming baths"], example: { jp: "Бассейн закрыт на ремонт, поэтому плавать можно только в реке.", en: "The pool is closed for repairs, so the only place to swim is the river." }, drill: { jp: "Бассейн закрыт на ремонт", en: "The pool is closed for repairs" }, hint: "ba-SSEYN — stress on the last syllable and the сс is held. MASCULINE. ⚠️ Also the geographical basin of a river — «бассейн Волги» — which is the older sense. плавать from unit 27 is what you do in it." },
      ],
    },
    {
      id: "ru-u84l4",
      unit: 84,
      lesson: 4,
      title: "Grounds, cups and records",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a stadium, a cup, a medal, a record and a jump, and talk about doing your morning exercises.",
      items: [
        { id: "ru-u84l4-stadion", type: "vocab", front: "стадион", reading: "stadion", meaning: "a stadium", accept: ["a sports ground", "the stadium", "an arena"], example: { jp: "Стадион строили два года, зато дорогу к нему так и не сделали.", en: "The stadium took two years to build, but the road to it was never finished." }, drill: { jp: "Стадион строили два года", en: "The stadium took two years to build" }, hint: "sta-di-ON — stress on the last syllable. MASCULINE. ⚠️ Russian goes НА стадион and is НА стадионе — на, not в, like вокзал and почта from unit 14. The rule is loose, and «на» wins for open places you go to for an event." },
        { id: "ru-u84l4-kubok", type: "vocab", front: "кубок", reading: "kubok", meaning: "a cup trophy", accept: ["a trophy", "the cup", "a cup competition"], example: { jp: "Кубок стоит у тренера дома, и он его никому не показывает.", en: "The cup stands at the coach's house and he shows it to nobody." }, drill: { jp: "Кубок стоит у тренера дома", en: "The cup stands at the coach's house" }, hint: "KU-bak — stress on the first syllable, and the final о reduces to a. MASCULINE, and ⚠️ its о DROPS in other cases: кубкА, кубкУ. Both the object and the competition for it — «Кубок России». A cup you drink from is чашка (unit 6)." },
        { id: "ru-u84l4-medal", type: "vocab", front: "медаль", reading: "medal", meaning: "a medal", accept: ["the medal", "a sporting medal", "a decoration"], example: { jp: "Медаль он получил в двадцать лет, и это была первая в семье.", en: "He got his medal at twenty, and it was the first in the family." }, drill: { jp: "Медаль он получил в двадцать лет", en: "He got his medal at twenty" }, hint: "me-DAL — stress on the last syllable. ⚠️ FEMININE despite the -ь (unit1.js §3). Sporting and military alike, and the set phrase «обратная сторона медали» is the other side of the coin — with сторона from unit 33." },
        { id: "ru-u84l4-rekord", type: "vocab", front: "рекорд", reading: "rekord", meaning: "a record performance", accept: ["a best performance", "the record", "a record result"], example: { jp: "Рекорд держится уже десять лет, и его никто не может повторить.", en: "The record has stood for ten years and nobody can repeat it." }, drill: { jp: "Рекорд держится уже десять лет", en: "The record has stood for ten years" }, hint: "re-KORD — stress on the last syllable, and the д goes quiet, so it comes out re-KORT. MASCULINE. ⚠️ ONLY the best-performance sense: a record you play is a пластинка and a record you keep is a запись, neither of which this course teaches. So the gloss names the sense." },
        { id: "ru-u84l4-pryzhok", type: "vocab", front: "прыжок", reading: "pryzhok", meaning: "a jump", accept: ["a leap", "the jump", "a bound"], example: { jp: "Прыжок был очень хороший, и все это видели.", en: "The jump was a very good one, and everyone saw it." }, drill: { jp: "Прыжок был очень хороший", en: "The jump was a very good one" }, hint: "pry-ZHOK — stress on the last syllable, with the hard ы. MASCULINE, and ⚠️ its о DROPS: прыжкА, прыжкУ. Its verb прыгать is not carded — one word of this root is enough, and the noun is what a sports report uses." },
        { id: "ru-u84l4-zaryadka", type: "vocab", front: "зарядка", reading: "zaryadka", meaning: "morning exercises", accept: ["a warm-up", "keep-fit exercises", "physical jerks"], example: { jp: "Зарядка утром помогает больше, чем кофе, хотя делать её трудно.", en: "Morning exercises help more than coffee, although doing them is hard." }, drill: { jp: "Зарядка утром очень помогает", en: "Morning exercises help a great deal" }, hint: "za-RYAD-ka — stress on RYAD. FEMININE (-а). ⚠️ TWO SENSES AND BOTH ARE EVERYDAY: the ten minutes of exercises a Russian is told to do before breakfast, and CHARGING a phone or a battery — «зарядка для телефона». Same root as ряд from unit 33 and neither gives the other away." },
      ],
    },
  ],
};
