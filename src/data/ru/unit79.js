// RU Unit 79 — Причастия и связки ("Participles and linkers") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, ru/unit74.js §1–§5.
//
// ═════════════════════════════════════════════════════════════════════════════
// §1 — THE SLOT IS RIGHT AND ITS SUBJECT IS A DEFERRAL BEING PAID OFF.
// ═════════════════════════════════════════════════════════════════════════════
// The scaffold title was "Grammar 6 — linked and subordinate clauses". Unlike
// every other title in this block, it APPLIES: `ru/unit1.js` §5 defers
// "participles and verbal adverbs" to B1 and `ru/unit31.js` §2 repeats the
// deferral unchanged. Russian reduces a subordinate clause to a PARTICIPLE far
// more readily than English does, so the two subjects are one subject, and this
// unit is the participle half. u80 is the verbal-adverb half.
// ⛔ WHAT THIS UNIT MUST NOT TOUCH: VERBS OF MOTION WITH PREFIXES. unit31.js §2
// defers them to B1 as well, and they are BLOCK 1's, taken at u63 — приходить ·
// уходить · заходить · подходить · приносить · привозить and the rest. Nothing
// here reaches for one, and no example uses one.
//
// ═════════════════════════════════════════════════════════════════════════════
// §2 — ⚠️ WHY A PARTICIPLE CANNOT BE A FRONT, AND HOW THE UNIT TEACHES THEM.
// ═════════════════════════════════════════════════════════════════════════════
// A Russian participle is an INFLECTED FORM OF A VERB — читающий, прочитавший,
// написанный are forms of читать and писать. unit1.js §5's last rule is
// absolute: «AN INFLECTED FORM IS NEVER ITS OWN CARD», which is what keeps
// год/лет and ребёнок/дети from becoming two mastery tracks. So a unit of 24
// participle fronts is not available, and nothing here bends the rule to get
// one. ⚠️ The handful of participles that ARE dictionary words in their own right
// (`открытый` · `любимый` · `известный` · `занятой` · `усталый`) all derive from
// verbs this course already teaches, so every one of them is refused too.
// INSTEAD, exactly as u23 Глаголы и падежи taught the cases and u31 Вид глагола
// taught aspect: the FRONTS are 18 ordinary untaught verbs, and the participle
// is taught in each card's `example` (which uses it), `hint` (which forms it)
// and the lesson's `canDo`. One lesson per formation:
//     l1  -ющий / -ящий   the active PRESENT participle — "the X that is Ving"
//     l2  -вший           the active PAST participle — "the X that Ved"
//     l3  -нный / -тый    the PASSIVE past participle — "the X that was Ved"
//     l4  the six LINKERS a participle competes with, for when it will not fit
// l4's fronts are function words, which is how u22, u23, u33 and u46 all built
// their grammar lessons.
//
// ═════════════════════════════════════════════════════════════════════════════
// §3 — THE SIX LINKERS, AND THE ONE THAT NEEDED A JUDGEMENT.
// ═════════════════════════════════════════════════════════════════════════════
// Russian's clause connectors were largely spent by u19l3 (но · или · если ·
// потому что · поэтому · значит) and u46 (чтобы · хотя · зато · однако · ли ·
// будто · именно · вообще · ведь · кстати · итак · впрочем · причём · также ·
// едва · чуть). What was left and is carded here: `из-за` · `ради` ·
// `поскольку` · `иначе` · `пусть` · `либо`.
// ⚠️ `из-за` IS A COMPOUND OF TWO TAUGHT PREPOSITIONS — из (u33l1) and за
// (u32l1) — and is kept anyway, deliberately. The test is unit1.js §D's: a
// learner who knows «out of» and «behind» does NOT arrive at «because of», which
// is из-за's main sense and is unguessable from either part. It also governs the
// GENITIVE, which neither parent does on its own. The hyphen is dropped from the
// reading (normalizeReading drops hyphens), giving "izza", which collides with
// nothing. Named here so it is a decision and not an oversight.
// ⚠️ REFUSED on the same test: `несмотря на` (смотреть u23) · `благодаря`
// (благодарить u59) · `словно` (слово u6) · `вроде` (the род- root is at
// родной u8, родственник u59 and рождение u59) · `прежде чем` (прежде u38) ·
// `вследствие` and `поскольку`'s cousin `насчёт` (следствие u52, счёт u21) ·
// `тем не менее` (менее u47) · `как только` and `так как` (both built wholly of
// taught words, so neither is a new lexeme).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT79 = {
  id: "ru-u79",
  lang: "ru",
  title: "Причастия и связки",
  order: 79,
  stage: "b1",
  lessons: [
    {
      id: "ru-u79l1",
      unit: 79,
      lesson: 1,
      title: "The -ющий participle: the thing that is doing it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Turn «который + present verb» into a -ющий participle — «проблема, которая возникает» becomes «возникающая проблема» — using six new verbs.",
      items: [
        { id: "ru-u79l1-voznikat", type: "vocab", front: "возникать", reading: "voznikat", meaning: "to arise", accept: ["to come up", "to crop up", "to appear out of nothing"], example: { jp: "Возникающие вопросы он записывает, чтобы потом не искать их снова.", en: "He writes down the questions that come up so as not to look for them again later." }, drill: { jp: "Здесь могут возникать вопросы", en: "Questions may arise here" }, hint: "vaz-ni-KAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is возникнуть. ⚠️ THE -ющий PARTICIPLE: take the THEY form (возникаЮТ), cut the -т, add -щий → возникаЮЩИЙ, «arising». It then agrees like any adjective: возникающАЯ проблема, возникающИЕ вопросы." },
        { id: "ru-u79l1-otrazhat", type: "vocab", front: "отражать", reading: "otrazhat", meaning: "to reflect", accept: ["to mirror", "to throw back", "to show something"], example: { jp: "Цена, отражающая настоящий расход, была бы совсем другой.", en: "A price reflecting the real cost would be quite a different one." }, drill: { jp: "Вода может отражать свет", en: "Water can reflect light" }, hint: "at-ra-ZHAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is отразить. Of light in water and of a fact in a figure alike. ⚠️ Its participle отражаЮЩИЙ is formed exactly as in the card above: отражаЮТ, cut the -т, add -щий." },
        { id: "ru-u79l1-soblyudat", type: "vocab", front: "соблюдать", reading: "soblyudat", meaning: "to comply with", accept: ["to observe a rule", "to keep to", "to abide by"], example: { jp: "Соблюдающий правила водитель платит меньше, и это знает каждая фирма.", en: "A driver who observes the rules pays less, and every firm knows it." }, drill: { jp: "Нужно соблюдать эти правила", en: "These rules have to be observed" }, hint: "sa-blyu-DAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is соблюсти, which is rare. ⚠️ Nothing to do with блюдо from unit 58, which is a dish — the roots look identical and are not related in any way a learner can use." },
        { id: "ru-u79l1-narushat", type: "vocab", front: "нарушать", reading: "narushat", meaning: "to break a rule", accept: ["to violate", "to breach", "to infringe"], example: { jp: "Нарушающий закон знает об этом сам, даже если молчит.", en: "Someone breaking the law knows it himself, even if he says nothing." }, drill: { jp: "Нельзя нарушать этот закон", en: "This law must not be broken" }, hint: "na-ru-SHAT — stress on the last syllable. Imperfective infinitive; the perfective is нарушить. ⚠️ The exact opposite of соблюдать in the card above, and Russian pairs them constantly: «соблюдать или нарушать». Of a rule, a law, a promise or a silence." },
        { id: "ru-u79l1-ugrozhat", type: "vocab", front: "угрожать", reading: "ugrozhat", meaning: "to threaten", accept: ["to menace", "to make threats", "to pose a threat"], example: { jp: "Угрожающий тон он слышал и раньше, поэтому молчал.", en: "He had heard a threatening tone before, so he said nothing." }, drill: { jp: "Он не хотел угрожать соседу", en: "He did not want to threaten his neighbour" }, hint: "ug-ra-ZHAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. ⚠️ Takes the DATIVE for the person threatened — «угрожать соседу» — unit 34's case. Its participle угрожаЮЩИЙ is an everyday adjective: «угрожающая цифра»." },
        { id: "ru-u79l1-prinadlezhat", type: "vocab", front: "принадлежать", reading: "prinadlezhat", meaning: "to belong to", accept: ["to be the property of", "to be a member of", "to be owned by"], example: { jp: "Земля, принадлежащая заводу, стоит дороже всего района.", en: "The land belonging to the factory is worth more than the whole district." }, drill: { jp: "Эта земля может принадлежать заводу", en: "This land may belong to the factory" }, hint: "pri-na-dle-ZHAT — four syllables, stress on the last. Imperfective infinitive, and ⚠️ it has NO perfective at all. Takes the DATIVE: «принадлежать государству». ⚠️ Its participle ends -ащий, not -ющий, because the THEY form is принадлежАТ: cut the -т, add -щий → принадлежАЩИЙ. Same rule, different vowel." },
      ],
    },
    {
      id: "ru-u79l2",
      unit: 79,
      lesson: 2,
      title: "The -вший participle: the thing that did it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Turn «который + past verb» into a -вший participle — «человек, который рисковал» becomes «рисковавший человек» — and say that something was attained, discovered or denied.",
      items: [
        { id: "ru-u79l2-sovershat", type: "vocab", front: "совершать", reading: "sovershat", meaning: "to commit an act", accept: ["to carry out", "to perform an act", "to make a journey"], example: { jp: "Совершивший ошибку сотрудник сам о ней и рассказал.", en: "The employee who had made the mistake was the one who reported it." }, drill: { jp: "Нельзя совершать такую ошибку", en: "A mistake like that must not be made" }, hint: "sa-ver-SHAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is совершить. ⚠️ THE -вший PARTICIPLE comes from the PERFECTIVE past: соверши-л → соверши-ВШИЙ, «having committed». Drop the -л of the past tense and add -вший." },
        { id: "ru-u79l2-dostigat", type: "vocab", front: "достигать", reading: "dostigat", meaning: "to attain", accept: ["to reach a level", "to achieve a level", "to get as far as"], example: { jp: "Достигший такого результата студент учится уже совсем иначе.", en: "A student who has attained a result like that studies quite differently." }, drill: { jp: "Можно достигать хорошего результата", en: "A good result can be attained" }, hint: "das-ti-GAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is достигнуть. ⚠️ Takes the GENITIVE for what is attained — «достигать цели», never «цель» — unit 33's case. добиваться from unit 47 is to get something by pushing; достигать is to arrive at a level." },
        { id: "ru-u79l2-obnaruzhivat", type: "vocab", front: "обнаруживать", reading: "obnaruzhivat", meaning: "to discover", accept: ["to detect", "to find out about", "to reveal"], example: { jp: "Обнаруживший ошибку инженер сразу сказал об этом начальнику.", en: "The engineer who discovered the fault told his boss at once." }, drill: { jp: "Можно обнаруживать такие ошибки", en: "Faults like that can be discovered" }, hint: "ab-na-RU-zhi-vat — stress on RU, and both о reduce to a. Imperfective infinitive; the perfective is обнаружить. ⚠️ From наружу, outside — to bring a thing out where it can be seen. находить from unit 24 is finding what you were looking for; обнаруживать is finding what you were not." },
        { id: "ru-u79l2-otritsat", type: "vocab", front: "отрицать", reading: "otritsat", meaning: "to deny", accept: ["to say it is not so", "to reject a claim", "to deny a fact"], example: { jp: "Отрицавший всё сотрудник через неделю признал каждое слово.", en: "The employee who had denied everything admitted every word a week later." }, drill: { jp: "Он начал отрицать каждое слово", en: "He began denying every word" }, hint: "at-ri-TSAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive, and ⚠️ its perfective is almost never used, so отрицать covers both. Its participle here is from the IMPERFECTIVE past: отрица-л → отрицаВШИЙ, «who was denying»." },
        { id: "ru-u79l2-riskovat", type: "vocab", front: "рисковать", reading: "riskovat", meaning: "to take a risk", accept: ["to risk", "to gamble", "to chance it"], example: { jp: "Рисковавший деньгами сосед теперь живёт в маленькой квартире.", en: "The neighbour who had gambled his money now lives in a small flat." }, drill: { jp: "Он не хочет рисковать деньгами", en: "He does not want to risk his money" }, hint: "ris-ka-VAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is рискнуть. ⚠️ Takes the INSTRUMENTAL for what is risked — «рисковать деньгами», «рисковать жизнью» — unit 32's case." },
        { id: "ru-u79l2-khvatat", type: "vocab", front: "хватать", reading: "khvatat", meaning: "to be enough", accept: ["to suffice", "to grab", "to snatch"], example: { jp: "Денег не хватало всю зиму, зато никто об этом не узнал.", en: "There was not enough money all winter, but nobody found out about it." }, drill: { jp: "Денег может не хватать", en: "There may not be enough money" }, hint: "khva-TAT — stress on the last syllable. Imperfective infinitive; the perfective is хватить. ⚠️ TWO SENSES AND TWO GRAMMARS: «хватать что-то» is to grab a thing, and the far commoner impersonal «не хватает денег» — there is not enough money — takes the GENITIVE and NO subject. достаточно from unit 37 is the adverb «enough»; this is the verb." },
      ],
    },
    {
      id: "ru-u79l3",
      unit: 79,
      lesson: 3,
      title: "The -нный participle: the thing it was done to",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Form the passive past participle — укрепить → укреплённый, напугать → напуганный — and say that a point was emphasised or a line was quoted.",
      items: [
        { id: "ru-u79l3-ukreplyat", type: "vocab", front: "укреплять", reading: "ukreplyat", meaning: "to strengthen", accept: ["to reinforce", "to make stronger", "to fortify"], example: { jp: "Укреплённый мост стоял всю зиму, хотя никто этого не ждал.", en: "The strengthened bridge stood all winter, although nobody expected it to." }, drill: { jp: "Этот мост нужно укреплять", en: "That bridge needs strengthening" }, hint: "uk-rep-LYAT — stress on the last syllable. Imperfective infinitive; the perfective is укрепить. ⚠️ THE -нный PARTICIPLE comes from the PERFECTIVE: укрепи-ть → укреплЁННЫЙ, «strengthened». It is passive — the thing was strengthened by someone — and it agrees like an adjective: укреплённАЯ стена." },
        { id: "ru-u79l3-podchyorkivat", type: "vocab", front: "подчёркивать", reading: "podchyorkivat", meaning: "to emphasise", accept: ["to stress a point", "to underline", "to highlight"], example: { jp: "Подчёркнутое слово в документе было одно, и именно о нём и был спор.", en: "There was one underlined word in the document, and that was exactly what the argument was about." }, drill: { jp: "Это нужно подчёркивать каждый раз", en: "That needs emphasising every time" }, hint: "pat-CHYOR-ki-vat — stress on CHYOR, the ё always written, and the д before ч is said t. Imperfective infinitive; the perfective is подчеркнуть. ⚠️ Its participle is подчЁркнутый, in -тый rather than -нный — the second passive ending, and which one a verb takes has to be learnt verb by verb. Literally to draw a line under; figuratively to make a point." },
        { id: "ru-u79l3-tsitirovat", type: "vocab", front: "цитировать", reading: "tsitirovat", meaning: "to quote", accept: ["to cite", "to quote someone", "to give a quotation"], example: { jp: "Цитируемый автор давно умер, и проверить его слова уже трудно.", en: "The author being quoted died long ago, and checking his words is now hard." }, drill: { jp: "Он любит цитировать этого автора", en: "He likes quoting that author" }, hint: "tsi-TI-ra-vat — stress on TI, and the о reduces to a. Imperfective infinitive; the perfective is процитировать. ⚠️ Its participle цитИруемый is the PRESENT PASSIVE in -емый — «being quoted» — the rarest of the four and the one you only ever need to READ. Unit 83's register is where it lives." },
        { id: "ru-u79l3-pugat", type: "vocab", front: "пугать", reading: "pugat", meaning: "to frighten", accept: ["to scare", "to alarm", "to startle"], example: { jp: "Пугающий шум за окном оказался просто машиной.", en: "The frightening noise outside the window turned out to be just a car." }, drill: { jp: "Не нужно пугать ребёнка", en: "There is no need to frighten the child" }, hint: "pu-GAT — stress on the last syllable. Imperfective infinitive; the perfective is напугать. ⚠️ Its participle напУганный shows the whole point of the form: the AGENT goes in the INSTRUMENTAL — напуганный собакОЙ, frightened BY the dog (unit 32's case). страшно from unit 34 is «it is frightening»; this is the verb that does the frightening." },
        { id: "ru-u79l3-smushchat", type: "vocab", front: "смущать", reading: "smushchat", meaning: "to embarrass", accept: ["to disconcert", "to make someone awkward", "to throw someone"], example: { jp: "Смущённый вопросом студент смотрел в стол и молчал.", en: "The student, embarrassed by the question, looked at the desk and said nothing." }, drill: { jp: "Не нужно смущать студента", en: "There is no need to embarrass the student" }, hint: "smu-SHCHAT — stress on the last syllable, and щ is the long soft sh from unit 3. Imperfective infinitive; the perfective is смутить. ⚠️ Its participle смущЁнный is a plain everyday adjective: «смущённое лицо». The reflexive смущаться is to be shy, which is what a learner says about themselves." },
        { id: "ru-u79l3-muchit", type: "vocab", front: "мучить", reading: "muchit", meaning: "to torment", accept: ["to torture", "to plague", "to give someone no peace"], example: { jp: "Мучимый тревогой, он всю ночь сидел на кухне и слушал радио.", en: "Tormented by anxiety, he sat in the kitchen all night listening to the radio." }, drill: { jp: "Его может мучить тревога", en: "Anxiety can torment him" }, hint: "MU-chit — stress on the first syllable. Imperfective infinitive; the perfective is замучить. ⚠️ Its participle мУчимый is the -имый present passive, the same class as цитируемый above, and it is pure book language — you will read it and never say it. The reflexive мучиться is what people actually use: «я мучаюсь»." },
      ],
    },
    {
      id: "ru-u79l4",
      unit: 79,
      lesson: 4,
      title: "Linking when a participle will not fit",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Join two clauses with because-of, for-the-sake-of, inasmuch-as, otherwise, let-it-be and either-or, and choose between them and a participle.",
      items: [
        { id: "ru-u79l4-izza", type: "vocab", front: "из-за", reading: "izza", meaning: "because of", accept: ["owing to", "on account of", "from behind"], example: { jp: "Из-за тумана сеанс начался только вечером, и никто не возражал.", en: "Because of the fog the showing began only in the evening, and nobody objected." }, drill: { jp: "Из-за тумана мы сидели дома", en: "Because of the fog we sat at home" }, hint: "iz-ZA — two syllables, written with a hyphen and said as one word; the hyphen vanishes from the reading. ⚠️ Governs the GENITIVE: из-за тумАНА, из-за дождЯ. ⚠️ TWO SENSES, and the literal one still works: «из-за дома» means from behind the house. ⚠️ Russian keeps a difference English does not: из-за is for a BAD cause, благодаря for a good one — «из-за дождя» but «благодаря тебе»." },
        { id: "ru-u79l4-radi", type: "vocab", front: "ради", reading: "radi", meaning: "for the sake of", accept: ["for the sake of someone", "out of regard for", "in the name of"], example: { jp: "Ради детей они остались в этом городе ещё на десять лет.", en: "For the children's sake they stayed in that town another ten years." }, drill: { jp: "Ради детей они остались здесь", en: "For the children's sake they stayed here" }, hint: "RA-di — stress on the first syllable. ⚠️ Governs the GENITIVE: ради детЕЙ. ⚠️ NOT для from unit 33, which is a plain «for»: для детей is a thing meant for children, ради детей is a sacrifice made because of them. «Ради бога» is the everyday «for heaven's sake»." },
        { id: "ru-u79l4-poskolku", type: "vocab", front: "поскольку", reading: "poskolku", meaning: "inasmuch as", accept: ["since", "seeing that", "given that"], example: { jp: "Поскольку прибыли не было, премию в этом году не дали.", en: "Inasmuch as there was no profit, no bonus was given this year." }, drill: { jp: "Поскольку прибыли не было премии нет", en: "Inasmuch as there was no profit, there is no bonus" }, hint: "pas-KOL-ku — stress on KOL, and the о reduces to a. ⚠️ BOOKISH, and it is the one Russian uses at the START of a sentence: потому что from unit 19 almost never begins one, поскольку usually does. Same job, different register and position." },
        { id: "ru-u79l4-inache", type: "vocab", front: "иначе", reading: "inache", meaning: "otherwise", accept: ["or else", "differently", "in a different way"], example: { jp: "Записывай вопросы, иначе к вечеру ты их уже не помнишь.", en: "Write the questions down, otherwise by evening you no longer remember them." }, drill: { jp: "Нужно решать сейчас иначе будет поздно", en: "It has to be decided now, otherwise it will be late" }, hint: "i-NA-che — stress on NA. ⚠️ TWO JOBS: the threat-connector «or else» («иначе будет поздно»), and the plain adverb «differently» («он думает иначе»). Both are live and the comma tells you which." },
        { id: "ru-u79l4-pust", type: "vocab", front: "пусть", reading: "pust", meaning: "let it be so", accept: ["let him", "may it", "even if"], example: { jp: "Пусть он думает, что хочет: решение уже принято и менять его поздно.", en: "Let him think what he likes: the decision has been taken and it is too late to change it." }, drill: { jp: "Пусть он думает что хочет", en: "Let him think what he likes" }, hint: "PUST — one syllable, with the ь keeping the т soft. ⚠️ Russian has NO separate let-form: пусть plus an ordinary present verb is the whole third-person imperative — «пусть он придёт», let him come. Second job: concession — «пусть и поздно», late though it is." },
        { id: "ru-u79l4-libo", type: "vocab", front: "либо", reading: "libo", meaning: "either ... or", accept: ["or alternatively", "one or the other", "whichever of two"], example: { jp: "Либо мы платим пошлину, либо товар остаётся на границе.", en: "Either we pay the duty or the goods stay at the border." }, drill: { jp: "Либо мы платим либо молчим", en: "Either we pay or we say nothing" }, hint: "LI-ba — stress on the first syllable, and the final о reduces to a. ⚠️ Doubled for the full «either ... or»: либо … либо. Single, it is a bookish или from unit 19 — same meaning, flatter and more formal. It is also the -либо of кто-либо, anyone at all." },
      ],
    },
  ],
};
