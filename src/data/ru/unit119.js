// RU Unit 119 — Обращение и учтивость ("Address and courtesy") — B2
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️⚠️ THE SCAFFOLD TITLE WAS `Register 3 — 敬語: humble and honorific` — A
// JAPANESE KEIGO SLOT, WRITTEN IN JAPANESE, AND RUSSIAN HAS NO KEIGO.
// Russian marks politeness LEXICALLY and with the ты/вы choice, which is
// already carded at u2. There is no humble register, no honorific verb system
// and nothing for this slot to teach as written. It is the same scaffold
// artefact as two that were caught before it, and the precedent is settled:
//     u23  "Grammar 2 — verbs and particles"  → `Глаголы и падежи`   (A1, block 3)
//     u82  "Register 1 — polite vs plain"     → rethemed at B1
//     u119 "Register 3 — 敬語"                → `Обращение и учтивость` (here)
// See unit1.js §10, which records the whole programme of five retheme decisions
// and the reasoning. Retitling a scaffold slot is ordinary authoring, not a
// decision to escalate (CLAUDE.md, "No front language").
//
// WHAT THE RETHEMED SLOT TEACHES, and it is a real hole: HOW YOU ADDRESS A
// RUSSIAN AND WHAT COUNTS AS COURTESY. `отчество` — the PATRONYMIC, which is
// Russia's actual address system and the single most consequential politeness
// fact in the language — appears NOWHERE in 2,328 words. Neither does the
// salutation `уважаемый`, nor a single word for deference or its excess.
//
// ⚠️ TWO FRONTS ARE EXPLICITLY OFF-LIMITS AND NEITHER IS CARDED:
//   `вежливость` — BARRED on unit1.js §D against `вежливый` (u28).
//   `господин`   — TAKEN at u7l1.
// ⚠️ ALSO REFUSED:
//   `уважение` is TAKEN (u56), so only the ADJECTIVE `уважаемый` is carded —
//     see the §D note below.
//   `благодарность` (§D, against `благодарить` u59 AND `благодаря` u62) ·
//   `признательность` (§D, against `признавать` u59) ·
//   `обратиться` (one lexeme with `обращение`, carded) ·
//   `обходительный` (§D, against `обходить` u63) ·
//   `бестактный` (one lexeme with `тактичный`, carded) ·
//   `просьба` is TAKEN (u34) and `наглый` is TAKEN (u56).
//   `сударь` · `барышня` · `милостивый` · `чопорный` · `дерзкий` · `манеры` ·
//   `церемония` probe free and are DEFERRED, not refused — `церемония` in
//   particular belongs to u120, next door, and is carded there.
//
// ⚠️ ONE ALLOWED §D PAIR, RECORDED SO IT IS NOT "FIXED" LATER:
//   `уважаемый` alongside `уважение` (u56). The judgement: this card is not the
//   adjective «respected» but the FIXED SALUTATION that opens every formal
//   Russian letter and every public announcement — «Уважаемые пассажиры!» — and
//   that convention is not reachable from the noun. Its gloss is therefore
//   "esteemed in a salutation", not "respected", and the hint teaches the
//   letter-opening rather than the adjective.
//
// ⚠️ `такт` IS TAKEN at u96 — as A BAR OF MUSIC. `тактичный` here is a HOMONYM's
// relative, not that lexeme: the musical такт and the social такт are separate
// words in Russian usage, and «tactful» is unreachable from «a bar of music».
// Stated because the front probe reports такт TAKEN and a seat might stop there.
// ⚠️ A TOOLING GAP FOUND HERE AND DELIBERATELY NOT "FIXED" BY ME, because it
// would move a baseline another block owns. `scripts/scope-ru.mjs` cannot reach
// `имени`/`именем` from the taught front `имя` (u8): stem("имя") breaks at under
// 3 characters and stays "имя", which "имени" does not begin with. It is the
// same class as the PARADIGM entries (e) and (l) already in that file. Three
// sentences in this unit were rewritten to use `фамилия` instead, which is
// reachable — but a later band that needs «по имени и отчеству» should add
//     имя: ["имени", "именем", "имена", "имён", "именам", "именами", "именах"]
// to PARADIGM and re-measure the three documented baselines first.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT119 = {
  id: "ru-u119",
  lang: "ru",
  title: "Обращение и учтивость",
  order: 119,
  stage: "b2",
  lessons: [
    {
      id: "ru-u119l1",
      unit: 119,
      lesson: 1,
      title: "How you address a Russian",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the patronymic, a form of address, the salutation for a letter, a title, the old word for madam, and say to address someone by their full title.",
      items: [
        { id: "ru-u119l1-otchestvo", type: "vocab", front: "отчество", reading: "otchestvo", meaning: "a patronymic", accept: ["a father's name used as a middle name", "the middle name from the father", "the patronymic"], example: { jp: "Отчество у него трудное, и поэтому все зовут его просто по фамилии.", en: "His patronymic is difficult, and so everyone calls him simply by his surname." }, drill: { jp: "Отчество у него трудное, и его зовут по фамилии", en: "His patronymic is difficult, and he is called by his surname" }, hint: "OT-chest-va — stress on the first syllable, and the final о reduces to a. NEUTER (-о). ⚠️ THE MOST IMPORTANT POLITENESS FACT IN RUSSIAN AND IT IS NOWHERE ELSE IN THIS COURSE. Built from `отец` (u10, «father») — Иван's son is Иванович, his daughter Ивановна. ⚠️ Name + отчество IS the polite address: «Иван Петрович» to a teacher, a doctor, a boss. Using the first name alone to an older person is a real rudeness, and no amount of `пожалуйста` repairs it." },
        { id: "ru-u119l1-obrashchenie", type: "vocab", front: "обращение", reading: "obrashchenie", meaning: "a form of address", accept: ["how you address someone", "the way of addressing a person", "an address to someone"], example: { jp: "Обращение здесь очень простое: имя и отчество, и всё.", en: "The form of address here is very simple: name and patronymic, and that is all." }, drill: { jp: "Обращение здесь очень простое: имя и отчество", en: "The form of address here is very simple: name and patronymic" }, hint: "ab-ra-SHCHE-ni-ye — stress on SHCHE, with щ the long soft sh of unit 3, and both unstressed о reducing to a. NEUTER (-ие). ⚠️ THREE SENSES AND ALL THREE ARE LIVE: a form of address, a PUBLIC ADDRESS («обращение президента»), and how you TREAT someone or something («жестокое обращение», cruel treatment). The verb обратиться is not carded — it is this word's own lexeme." },
        { id: "ru-u119l1-uvazhaemyy", type: "vocab", front: "уважаемый", reading: "uvazhaemyy", meaning: "esteemed in a salutation", accept: ["dear in a formal letter", "the salutation word of a Russian letter", "honoured sir or madam"], example: { jp: "Уважаемые пассажиры, поезд будет через десять минут.", en: "Esteemed passengers, the train will arrive in ten minutes." }, drill: { jp: "Уважаемый Иван Петрович, спасибо за письмо", en: "Dear Ivan Petrovich, thank you for the letter" }, hint: "u-va-ZHA-ye-myy — stress on ZHA, and the о reduces to a. ⚠️ THIS CARD IS A CONVENTION, NOT AN ADJECTIVE. A Russian formal letter opens «Уважаемый Иван Петрович!» with an EXCLAMATION MARK, not a comma, and a station announcement opens «Уважаемые пассажиры!». ⚠️ `уважение` «respect» is already taught at u56 and this is the same root — the course keeps the pair because the LETTER-OPENING is unreachable from the noun; see the header. ⚠️ «Дорогой» is for people you actually know." },
        { id: "ru-u119l1-titul", type: "vocab", front: "титул", reading: "titul", meaning: "a title of rank", accept: ["a hereditary title", "a title such as count or prince", "a formal designation of rank"], example: { jp: "Титул у этой семьи был старый, но денег уже не осталось.", en: "This family's title was an old one, but no money was left." }, drill: { jp: "Титул у этой семьи был старый, но денег не осталось", en: "This family's title was old, but no money was left" }, hint: "TI-tul — stress on the first syllable. MASCULINE. ⚠️ NOT THE TITLE OF A BOOK — that is `название` (u45). A титул is a rank: count, prince, champion. Russian also uses it in sport («титул чемпиона»), which is the sense you will meet most often today. `звание` (u113) is the academic or military one, awarded rather than inherited." },
        { id: "ru-u119l1-sudarynya", type: "vocab", front: "сударыня", reading: "sudarynya", meaning: "madam in the old style", accept: ["my lady", "the pre-revolutionary word for madam", "an archaic polite address to a woman"], example: { jp: "Сударыня, у меня к вам только один вопрос, и он простой.", en: "Madam, I have only one question for you, and it is a simple one." }, drill: { jp: "Сударыня, у меня к вам один вопрос", en: "Madam, I have one question for you" }, hint: "SU-da-ry-nya — stress on the first syllable. FEMININE (-я). ⚠️ PRE-REVOLUTIONARY AND DELIBERATELY SO: Russian lost its neutral «madam» in 1917 and never replaced it, which is why a modern Russian addressing a stranger says «извините» (u7) and nothing else. ⚠️ Used today only in jest or in period drama — and knowing THAT is the lesson: the gap in modern Russian is real and this card names it." },
        { id: "ru-u119l1-velichat", type: "vocab", front: "величать", reading: "velichat", meaning: "to address by full title", accept: ["to style someone grandly", "to call someone by an honorific", "to dignify with a name"], example: { jp: "Его величали по фамилии и отчеству, хотя он был ещё молодой.", en: "They addressed him by surname and patronymic, although he was still young." }, drill: { jp: "Величать его по фамилии и отчеству было правилом", en: "Addressing him by surname and patronymic was the rule" }, hint: "ve-li-CHAT — stress on the last syllable. Imperfective infinitive. ⚠️ ALWAYS A SHADE GRAND, and often ironic: «как вас величать?» is a half-joking «and what are we to call you?». From великий «great», which this course does not card. The plain verb is `звать` (u8), and the difference between звать and величать is the whole of this lesson in one pair." },
      ],
    },
    {
      id: "ru-u119l2",
      unit: 119,
      lesson: 2,
      title: "Courtesy as a quality a person has",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Call someone punctiliously polite, obliging, tactful or delicate in handling people, and name propriety and etiquette.",
      items: [
        { id: "ru-u119l2-uchtivyy", type: "vocab", front: "учтивый", reading: "uchtivyy", meaning: "punctiliously polite", accept: ["well-mannered in an old-fashioned way", "courtly in manner", "formally correct and polite"], example: { jp: "Учтивый ответ он написал сразу, хотя письмо было грубое.", en: "He wrote a courteous reply at once, although the letter was rude." }, drill: { jp: "Учтивый ответ он написал сразу", en: "He wrote a courteous reply at once" }, hint: "uch-TI-vyy — stress on TI. ⚠️ ONE STEP MORE FORMAL AND MORE OLD-FASHIONED THAN `вежливый` (u28, «polite»): вежливый is the everyday virtue, учтивый is the courtliness of a letter or of an old man. ⚠️ Note that `вежливость`, the noun, is BARRED in this course on unit1.js §D — so this adjective is how the course says «courteous» at all." },
        { id: "ru-u119l2-lyubeznyy", type: "vocab", front: "любезный", reading: "lyubeznyy", meaning: "obliging", accept: ["gracious", "kindly helpful", "amiable towards someone"], example: { jp: "Любезный человек всегда найдёт время для просьбы другого.", en: "An obliging person will always find time for another person's request." }, drill: { jp: "Любезный человек найдёт время для просьбы другого", en: "An obliging person will find time for another person's request" }, hint: "lyu-BEZ-nyy — stress on BEZ. ⚠️ THE FIXED PHRASE IS «будьте любезны» — «would you be so kind» — which is a shade more formal than `пожалуйста` (u7) and is what you say to a stranger behind a counter. ⚠️ A SECOND, OLDER USE as a form of address to an inferior («любезный!») is now purely literary and faintly insulting. Built on `любить` (u4)." },
        { id: "ru-u119l2-taktichnyy", type: "vocab", front: "тактичный", reading: "taktichnyy", meaning: "tactful", accept: ["careful of other people's feelings", "discreet", "able to avoid giving offence"], example: { jp: "Тактичный человек не станет говорить такое при людях.", en: "A tactful person will not say such a thing in front of people." }, drill: { jp: "Тактичный человек не станет говорить такое при людях", en: "A tactful person will not say such a thing in front of people" }, hint: "tak-TICH-nyy — stress on TICH. ⚠️ `такт` IS ALREADY TAUGHT AT u96 — as A BAR OF MUSIC. These are two separate words in Russian use, and «tactful» is unreachable from «a bar», so the pair is allowed; see the header. ⚠️ Its negative бестактный is NOT carded (one lexeme) — you build it with без- the ordinary way, and «бестактный вопрос» is the phrase you will need." },
        { id: "ru-u119l2-delikatnyy", type: "vocab", front: "деликатный", reading: "delikatnyy", meaning: "delicate in handling people", accept: ["sensitive in approach", "handled with care", "requiring tact"], example: { jp: "Деликатный вопрос лучше решать не сразу, а потом.", en: "A delicate question is better settled not at once but later." }, drill: { jp: "Деликатный вопрос лучше решать не сразу", en: "A delicate question is better not settled at once" }, hint: "de-li-KAT-nyy — stress on KAT. ⚠️ TWO DIRECTIONS, AND RUSSIAN USES BOTH: a деликатный PERSON handles others carefully, and a деликатный SUBJECT needs handling carefully. ⚠️ It does NOT mean physically fragile — that is «хрупкий», which this course does not card. Compare `тактичный`, which is only ever about a person." },
        { id: "ru-u119l2-prilichie", type: "vocab", front: "приличие", reading: "prilichie", meaning: "propriety", accept: ["decency of behaviour", "what is proper", "good form"], example: { jp: "Приличие здесь простое: на письмо надо ответить, даже если ответ короткий.", en: "Propriety here is simple: a letter must be answered, even if the answer is short." }, drill: { jp: "Приличие здесь простое: на письмо надо ответить", en: "Propriety here is simple: a letter must be answered" }, hint: "pri-LI-chi-ye — stress on LI. NEUTER (-ие). ⚠️ USUALLY PLURAL IN THE FIXED PHRASES: «соблюдать приличия», to observe the proprieties, «для приличия», for form's sake. The adjective приличный means both «decent» and, in speech, «quite large» — «приличная сумма», a tidy sum." },
        { id: "ru-u119l2-etiket", type: "vocab", front: "этикет", reading: "etiket", meaning: "etiquette", accept: ["the rules of polite conduct", "formal good manners", "a code of courtesy"], example: { jp: "Этикет в каждой стране свой, и учить его надо на месте.", en: "Etiquette is different in every country, and it has to be learnt on the spot." }, drill: { jp: "Этикет в каждой стране свой", en: "Etiquette is different in every country" }, hint: "e-ti-KET — stress on the last syllable, opening with the hard э (unit 2). MASCULINE. ⚠️ THE WRITTEN-DOWN RULES, where `приличие` is the unwritten sense of what is proper — a diplomatic этикет exists on paper, приличия do not. Do not confuse with этикетка, which is a LABEL on a bottle." },
      ],
    },
    {
      id: "ru-u119l3",
      unit: 119,
      lesson: 3,
      title: "Deference, and its gestures",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Call someone respectful, submissive, condescending or fawning, and name a bow and a handshake.",
      items: [
        { id: "ru-u119l3-pochtitelnyy", type: "vocab", front: "почтительный", reading: "pochtitelnyy", meaning: "respectful", accept: ["deferential", "showing proper respect", "reverent towards an elder"], example: { jp: "Почтительный тон он держал всегда, если человек был старше.", en: "He always kept a respectful tone if the person was older." }, drill: { jp: "Почтительный тон он держал всегда, если человек старше", en: "He always kept a respectful tone if the person was older" }, hint: "pach-TI-tel-nyy — stress on TI, and the о reduces to a. From почтение «deference», which is not carded, and the same root as «почта» is NOT involved — that is a coincidence of spelling. ⚠️ ALWAYS UPWARDS: you are почтительный to someone above or older, never to an equal, which is what separates it from `вежливый` (u28)." },
        { id: "ru-u119l3-pokornyy", type: "vocab", front: "покорный", reading: "pokornyy", meaning: "submissive", accept: ["obedient without protest", "meekly compliant", "yielding to another's will"], example: { jp: "Покорный ответ его не спас, и всё стало только хуже.", en: "His submissive answer did not save him, and everything only got worse." }, drill: { jp: "Покорный ответ его не спас", en: "His submissive answer did not save him" }, hint: "pa-KOR-nyy — stress on KOR, the first о reducing to a. ⚠️ THE OLD LETTER-CLOSING IS «ваш покорный слуга» — your obedient servant — and a Russian still says it ironically about himself. ⚠️ Different from `смирение` (u115): смирение is acceptance of your lot and is approving; покорный is submission to a PERSON and usually is not." },
        { id: "ru-u119l3-sniskhoditelnyy", type: "vocab", front: "снисходительный", reading: "sniskhoditelnyy", meaning: "condescending", accept: ["patronising", "indulgent from above", "talking down to someone"], example: { jp: "Снисходительный тон людям не нравится, и это понятно.", en: "People do not like a condescending tone, and that is understandable." }, drill: { jp: "Снисходительный тон людям не нравится", en: "People do not like a condescending tone" }, hint: "snis-kha-DI-tel-nyy — stress on DI, with the scraping х and the о reducing to a. ⚠️ TWO SIDES IN ONE WORD: «снисходительный судья» is a LENIENT judge, which is a compliment, while «снисходительный тон» is patronising, which is not. Built on сходить «to come down» — the picture is of stooping towards someone." },
        { id: "ru-u119l3-podobostrastnyy", type: "vocab", front: "подобострастный", reading: "podobostrastnyy", meaning: "fawning", accept: ["obsequious", "grovelling", "servilely eager to please"], example: { jp: "Подобострастный голос он слышал каждый день и уже не слушал.", en: "He heard the fawning voice every day and no longer listened to it." }, drill: { jp: "Подобострастный голос он слышал каждый день", en: "He heard the fawning voice every day" }, hint: "pa-da-ba-STRAS-nyy — five syllables, stress on STRAS, and ⚠️ THE т IS NOT PRONOUNCED in -стн-, exactly as in «честный» (unit 6's reading rules). Every unstressed о reduces to a. ⚠️ THE STRONGEST WORD IN THIS LESSON and purely contemptuous: deference so excessive it is degrading. Bookish; a Russian would more often say «лизать» in speech." },
        { id: "ru-u119l3-poklon", type: "vocab", front: "поклон", reading: "poklon", meaning: "a bow", accept: ["a bow of the head or body", "a respectful inclination", "a bow of greeting"], example: { jp: "Поклон здесь никому не нужен, достаточно просто сказать здравствуйте.", en: "A bow is needed by nobody here; it is enough simply to say hello." }, drill: { jp: "Поклон здесь никому не нужен", en: "A bow is needed by nobody here" }, hint: "pa-KLON — stress on the last syllable, the first о reducing to a. MASCULINE. ⚠️ A SECOND SENSE IS A GREETING SENT AT A DISTANCE: «передай ему поклон» means give him my regards — a letter-writing formula, not a physical bow. Do not confuse with `поклонник` (u74), which is a fan or an admirer." },
        { id: "ru-u119l3-rukopozhatie", type: "vocab", front: "рукопожатие", reading: "rukopozhatie", meaning: "a handshake", accept: ["the shaking of hands", "a shake of the hand", "a hand-clasp in greeting"], example: { jp: "Рукопожатие здесь обычное, но только между мужчинами.", en: "A handshake is ordinary here, but only between men." }, drill: { jp: "Рукопожатие здесь обычное между мужчинами", en: "A handshake is ordinary here between men" }, hint: "ru-ka-pa-ZHA-ti-ye — stress on ZHA, every unstressed о reducing to a. NEUTER (-ие). ⚠️ A TRANSPARENT COMPOUND of `рука` (u20) and жать «to press» — «hand-pressing». ⚠️ AND A REAL CUSTOM TO KNOW: in Russia men shake hands with men and usually not with women, and never across a threshold — the superstition is live." },
      ],
    },
    {
      id: "ru-u119l4",
      unit: 119,
      lesson: 4,
      title: "Where courtesy fails",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Call someone over-familiar, intrusive, free-and-easy or haughty, and name back-slapping familiarity and rudeness.",
      items: [
        { id: "ru-u119l4-familyarnyy", type: "vocab", front: "фамильярный", reading: "familyarnyy", meaning: "over-familiar", accept: ["taking liberties", "too informal for the situation", "presumptuously friendly"], example: { jp: "Фамильярный тон с начальником здесь не поймут.", en: "An over-familiar tone with the boss will not be understood here." }, drill: { jp: "Фамильярный тон с начальником здесь не поймут", en: "An over-familiar tone with the boss will not be understood here" }, hint: "fa-mil-YAR-nyy — stress on YAR. ⚠️ A FALSE FRIEND: English «familiar» usually means well known, Russian фамильярный ALWAYS means taking a liberty, and it is a criticism every time. ⚠️ It is the word for using ты to someone who expects вы (u2) — which is why this unit exists and the keigo slot did not." },
        { id: "ru-u119l4-panibratstvo", type: "vocab", front: "панибратство", reading: "panibratstvo", meaning: "back-slapping familiarity", accept: ["hail-fellow-well-met manners", "undue chumminess", "treating a superior as a mate"], example: { jp: "Панибратство на работе он не любил и сразу это показал.", en: "He did not like back-slapping familiarity at work and showed it straight away." }, drill: { jp: "Панибратство на работе он не любил", en: "He did not like back-slapping familiarity at work" }, hint: "pa-ni-BRAT-stva — stress on BRAT, and the final о reduces to a. NEUTER (-о). ⚠️ LOOK AT WHAT IT IS MADE OF: pan (the Polish «sir») + `брат` (u10, «brother») — treating a gentleman as your brother. ⚠️ The NOUN for a whole style of behaviour, where `фамильярный` is the adjective for one act of it." },
        { id: "ru-u119l4-razvyaznyy", type: "vocab", front: "развязный", reading: "razvyaznyy", meaning: "free and easy", accept: ["unbuttoned in manner", "swaggeringly casual", "lacking all restraint"], example: { jp: "Развязный смех в такой комнате слышат все и никто не рад.", en: "Free-and-easy laughter in a room like that is heard by everyone and pleases nobody." }, drill: { jp: "Развязный смех в такой комнате слышат все", en: "Free-and-easy laughter in a room like that is heard by everyone" }, hint: "raz-VYAZ-nyy — stress on VYAZ. ⚠️ THE PICTURE IS OF SOMETHING UNTIED: the same развяз- as u114's `развязка`, a knot coming undone — a развязный person has let go of all restraint. Stronger and coarser than `фамильярный`, which is only about rank." },
        { id: "ru-u119l4-navyazchivyy", type: "vocab", front: "навязчивый", reading: "navyazchivyy", meaning: "intrusive", accept: ["pushy", "impossible to get rid of", "forcing itself on you"], example: { jp: "Навязчивый гость сидел до утра, хотя все уже хотели спать.", en: "The intrusive guest sat until morning, although everyone already wanted to sleep." }, drill: { jp: "Навязчивый гость сидел до утра", en: "The intrusive guest sat until morning" }, hint: "na-VYAZ-chi-vyy — stress on VYAZ. ⚠️ A THIRD вяз- WORD IN THIS UNIT (развязный, and u114's завязка/развязка): here it is TYING ONTO someone. ⚠️ ALSO OF THOUGHTS AND TUNES: «навязчивая мысль» is an obsessive thought, «навязчивая мелодия» a song stuck in your head. `настойчивый` (u56) is persistent and can be a compliment; навязчивый never is." },
        { id: "ru-u119l4-vysokomernyy", type: "vocab", front: "высокомерный", reading: "vysokomernyy", meaning: "arrogant in manner", accept: ["looking down on people", "superior in manner", "full of your own importance"], example: { jp: "Высокомерный взгляд говорит больше, чем любые слова.", en: "A haughty look says more than any words." }, drill: { jp: "Высокомерный взгляд говорит больше любых слов", en: "A haughty look says more than any words" }, hint: "vy-sa-ka-MER-nyy — stress on MER, every unstressed о reducing to a. ⚠️ A TRANSPARENT COMPOUND of `высокий` (u47, «tall») and мера «measure» — «measuring yourself high». ⚠️ Different from `гордый` (u28), which can be a virtue: высокомерный is the vice of looking down, and it is the opposite of `снисходительный` only in direction, not in kind — both look down, one pretends to stoop." },
        { id: "ru-u119l4-grubost", type: "vocab", front: "грубость", reading: "grubost", meaning: "rudeness", accept: ["a rude remark", "coarseness of manner", "an act of incivility"], example: { jp: "Грубость в ответ он не сказал, хотя очень хотел.", en: "He did not say anything rude in reply, although he very much wanted to." }, drill: { jp: "Грубость в ответ он не сказал, хотя хотел", en: "He did not say anything rude in reply, although he wanted to" }, hint: "GRU-bast — stress on the first syllable, and the final о reduces to a. FEMININE (-ость). ⚠️ COUNTABLE AS WELL AS ABSTRACT, which English resists: «сказать грубость» is to say ONE rude thing, «грубости» are rude remarks in the plural. ⚠️ Shares a root with u118's `грубо говоря` «roughly speaking» — the same «coarse», applied to a figure instead of to a person." },
      ],
    },
  ],
};
