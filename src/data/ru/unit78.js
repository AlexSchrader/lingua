// RU Unit 78 — Любовь и брак ("Love and marriage") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, ru/unit74.js §1–§5.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Relationships and society" AND BOTH HALVES ARE
// SPENT. u51 Общество и государство owns society and the state, u59 Слова и
// поступки owns conduct and kinship-at-large (родственник · молодёжь ·
// поколение · собрание · житель), u56 Личность и поведение owns character, and
// u10 Семья owns the family tree (семья · отец · мать · сын · дочь · брат ·
// сестра · муж · жена · внук · свадьба). So this unit narrows to the part of
// close relationships nothing touches: attraction, marriage as an institution,
// conflict between two people, and the kin you acquire rather than are born to.
//
// ⚠️ REFUSED on unit1.js §D:
//   `влюбиться` — против `любить` (u4l4) and `любовь` (u5l1). The в-…-ся
//        derivation is transparent and the meaning is one step away, so a
//        learner who has both WOULD guess it. l1 cards `страсть` and
//        `симпатия` instead, which say what влюбиться cannot.
//   `измена` (против `менять` u24l3) · `женатый` (против `жена` u10l2) ·
//   `разведённый` (против `развод`, carded here) · `невестка` (против
//   `невеста`, carded here) · `мириться` and `примирение` (против `мир` u5l1) ·
//   `обижаться` (против `обидно` u34l2) · `родня` (против `родственник` u59l3) ·
//   `внучка` (против `внук` u10l3) · `одинокий` (против `один` u11l1).
// ⚠️ TAKEN: `свадьба` (u10l4) · `праздник` (u10l4) · `прощать` (u59l1) ·
//   `обман` (u56l3) · `спор` (u39l4) · `против` (u46l1) · `нежный` (u56l1).
// ⚠️ TWO KEPT WITH REASONS:
//   `свидание` «a date» sits on видеть (u4l4) — с+вид+ание — and is kept because
//        «a date» is not reachable from «to see» in any direction. It is the one
//        вид- word this block takes; `вид` «a view/species» was therefore DROPPED
//        from u75 to keep the root at one new item, and `свидетель` «a witness»
//        is refused outright.
//   `поцелуй` sits on целовать, which is not taught; its remote ancestor целый
//        (u24l4) gives nothing away.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT78 = {
  id: "ru-u78",
  lang: "ru",
  title: "Любовь и брак",
  order: 78,
  stage: "b1",
  lessons: [
    {
      id: "ru-u78l1",
      unit: 78,
      lesson: 1,
      title: "Before anything is decided",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Arrange a date, say you like someone, and name attraction, passion, a kiss and an embrace.",
      items: [
        { id: "ru-u78l1-svidanie", type: "vocab", front: "свидание", reading: "svidanie", meaning: "a date with someone", accept: ["a romantic meeting", "a rendezvous", "an appointment to meet"], example: { jp: "На первое свидание он взял книгу, о которой она говорила ещё в школе.", en: "To the first date he took the book she had talked about back at school." }, drill: { jp: "Это было первое свидание", en: "That was the first date" }, hint: "svi-DA-ni-ye — stress on DA. NEUTER (-ие). ⚠️ Built on видеть from unit 4 — с+вид+ание, «a seeing together» — and kept because «a date» is nothing a learner would guess from «to see». «До свидания» from unit 7 is literally «until we meet», the same word." },
        { id: "ru-u78l1-simpatiya", type: "vocab", front: "симпатия", reading: "simpatiya", meaning: "a liking for someone", accept: ["a soft spot", "fondness", "attraction to a person"], example: { jp: "Симпатия была с первого дня, но сказать об этом никто не решался.", en: "There was a liking from the first day, but neither of them dared say so." }, drill: { jp: "Симпатия была с первого дня", en: "There was a liking from the first day" }, hint: "sim-PA-ti-ya — stress on PA. FEMININE (-я). ⚠️ NOT the English «sympathy», which is сочувствие — a Russian симпатия is being drawn to someone. A false friend worth remembering." },
        { id: "ru-u78l1-flirtovat", type: "vocab", front: "флиртовать", reading: "flirtovat", meaning: "to flirt", accept: ["to flirt with someone", "to make eyes at", "to be flirting"], example: { jp: "Флиртовать он умеет с каждым, и это как раз то, что ей не нравится.", en: "He can flirt with anyone, and that is exactly what she does not like." }, drill: { jp: "Он умеет флиртовать с каждым", en: "He can flirt with anyone" }, hint: "flir-ta-VAT — stress on the last syllable. Imperfective infinitive, and ⚠️ it has no perfective worth teaching. Takes с + the INSTRUMENTAL for the person — unit 32's case." },
        { id: "ru-u78l1-strast", type: "vocab", front: "страсть", reading: "strast", meaning: "passion", accept: ["ardour", "a passion for something", "intense feeling"], example: { jp: "Страсть была год, а привычка осталась на двадцать лет.", en: "The passion lasted a year and the habit stayed for twenty." }, drill: { jp: "Страсть у них была только год", en: "Their passion lasted only a year" }, hint: "STRAST — one syllable, and the стьть cluster is said in one go. ⚠️ FEMININE despite the -ь. Of a person and of an interest alike: «страсть к музыке». Different root from страх (unit 28) and страдать (unit 77) — страст-, страх-, страд-, three words that look alike and are not related for a learner's purposes." },
        { id: "ru-u78l1-potseluy", type: "vocab", front: "поцелуй", reading: "potseluy", meaning: "a kiss", accept: ["the kiss", "a peck", "a kiss on the cheek"], example: { jp: "Один поцелуй на вокзале, и поезд уже шёл, а она всё стояла.", en: "One kiss at the station, and the train was already moving while she still stood there." }, drill: { jp: "Это был первый поцелуй", en: "That was the first kiss" }, hint: "pa-tse-LUY — stress on the last syllable, and the о reduces to a. MASCULINE (-й). ⚠️ The same string is also the IMPERATIVE of целовать: «поцелуй меня» means kiss me. Context separates them; the noun is the card." },
        { id: "ru-u78l1-obyatie", type: "vocab", front: "объятие", reading: "obyatie", meaning: "an embrace", accept: ["a hug", "the embrace", "holding someone"], example: { jp: "После такого дня объятие помогает больше, чем любые слова.", en: "After a day like that an embrace helps more than any words." }, drill: { jp: "Объятие помогает больше слов", en: "An embrace helps more than words" }, hint: "ab-YA-ti-ye — stress on YA, and the ъ is the hard sign from unit 3 that keeps б and я apart. NEUTER (-ие). ⚠️ Usually PLURAL in practice: «в объятиях»." },
      ],
    },
    {
      id: "ru-u78l2",
      unit: 78,
      lesson: 2,
      title: "Marriage as an institution",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a marriage, name the bride and the groom, a spouse and a widow, and say that a couple divorced.",
      items: [
        { id: "ru-u78l2-brak", type: "vocab", front: "брак", reading: "brak", meaning: "a marriage", accept: ["matrimony", "wedlock", "being married"], example: { jp: "Брак у них был долгий, хотя первые годы жили почти без денег.", en: "Their marriage was a long one, although in the first years they lived almost without money." }, drill: { jp: "Брак у них был очень долгий", en: "Their marriage was a very long one" }, hint: "BRAK — one syllable. MASCULINE. ⚠️ A SECOND, UNRELATED SENSE: брак also means a defective product — «это брак», that is a reject. The two words are separate in origin and Russians feel no joke in it. свадьба from unit 10 is the wedding day; брак is the state." },
        { id: "ru-u78l2-zhenikh", type: "vocab", front: "жених", reading: "zhenikh", meaning: "a bridegroom", accept: ["a fiancé", "the groom", "a man about to marry"], example: { jp: "Жених был старше на двадцать лет, и в деревне об этом говорили целый месяц.", en: "The groom was twenty years older, and in the village they talked about it for a whole month." }, drill: { jp: "Жених был старше на двадцать лет", en: "The groom was twenty years older" }, hint: "zhe-NIKH — stress on the last syllable, ending in the scraping х from unit 1. MASCULINE. ⚠️ It covers BOTH the fiancé and the bridegroom — Russian does not separate them. Same root as жена (unit 10), which is visible but gives nothing away: a жених has no wife yet." },
        { id: "ru-u78l2-nevesta", type: "vocab", front: "невеста", reading: "nevesta", meaning: "a bride", accept: ["a fiancée", "the bride", "a woman about to marry"], example: { jp: "Невеста сама выбирала платье, хотя мать хотела совсем другое.", en: "The bride picked the dress herself, although her mother wanted a completely different one." }, drill: { jp: "Невеста сама выбирала платье", en: "The bride picked the dress herself" }, hint: "ne-VES-ta — stress on VES. FEMININE (-а). It opens with не-, but this is NOT a не+X word: the root is said to be «the unknown one», brought into a family she did not come from. `невестка`, a daughter-in-law, is deliberately not carded against it." },
        { id: "ru-u78l2-suprug", type: "vocab", front: "супруг", reading: "suprug", meaning: "a spouse", accept: ["a husband formally", "one's partner in law", "a married partner"], example: { jp: "В документе его называют супругом, а дома просто мужем.", en: "In the document he is called a spouse, and at home simply a husband." }, drill: { jp: "Супруг живёт в другом городе", en: "Her spouse lives in another town" }, hint: "su-PRUG — stress on the last syllable, and the г goes quiet, so it comes out su-PRUK. MASCULINE; the feminine is супруга. ⚠️ FORMAL REGISTER — this is the word on a form and in a speech. муж and жена from unit 10 are what people actually say." },
        { id: "ru-u78l2-vdova", type: "vocab", front: "вдова", reading: "vdova", meaning: "a widow", accept: ["the widow", "a woman whose husband died", "a widowed woman"], example: { jp: "Вдова осталась в большой квартире одна, и дети звонили ей каждый день.", en: "The widow was left alone in the big flat, and her children phoned her every day." }, drill: { jp: "Вдова осталась в квартире одна", en: "The widow was left alone in the flat" }, hint: "vda-VA — stress on the last syllable, and the о reduces to a. FEMININE (-а); the masculine is вдовец, a widower. One of the oldest words in the language and unchanged for a thousand years." },
        { id: "ru-u78l2-razvod", type: "vocab", front: "развод", reading: "razvod", meaning: "a divorce", accept: ["the divorce", "a marriage ending", "getting divorced"], example: { jp: "После развода они остались в одном городе, и это оказалось самым трудным.", en: "After the divorce they stayed in the same town, and that turned out to be the hardest part." }, drill: { jp: "Развод оказался самым трудным", en: "The divorce turned out to be the hardest part" }, hint: "raz-VOD — stress on the last syllable, and the д goes quiet, so it comes out raz-VOT. MASCULINE. From разводить, to lead apart. ⚠️ `разведённый` «divorced» is deliberately not carded against it, and neither is `измена`, which sits on менять from unit 24." },
      ],
    },
    {
      id: "ru-u78l3",
      unit: 78,
      lesson: 3,
      title: "When two people collide",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a row, jealousy, a scandal, a conflict and a reproach, and say that someone gave way or that two people were parted.",
      items: [
        { id: "ru-u78l3-ssora", type: "vocab", front: "ссора", reading: "ssora", meaning: "a row between people", accept: ["a quarrel", "a falling-out", "an argument"], example: { jp: "Ссора началась из ничего и продолжалась почти неделю.", en: "The row began out of nothing and went on for almost a week." }, drill: { jp: "Ссора началась из ничего", en: "The row began out of nothing" }, hint: "SSO-ra — stress on the first syllable, and the сс is held a beat. FEMININE (-а). спор from unit 39 is an argument ABOUT something, where both sides have a case; a ссора is personal and needs no subject." },
        { id: "ru-u78l3-revnost", type: "vocab", front: "ревность", reading: "revnost", meaning: "jealousy", accept: ["being jealous", "possessiveness", "jealous feeling"], example: { jp: "Ревность он объясняет любовью, но она объясняет её страхом.", en: "He explains jealousy as love, and she explains it as fear." }, drill: { jp: "Ревность он объясняет любовью", en: "He explains jealousy as love" }, hint: "REV-nast — stress on the first syllable, and the final -ть is said t. ⚠️ FEMININE, like every -ость noun. ⚠️ NOT зависть from unit 56: зависть is envy of what someone HAS, ревность is fear of losing someone you have. Russian keeps them strictly apart and so should you." },
        { id: "ru-u78l3-skandal", type: "vocab", front: "скандал", reading: "skandal", meaning: "a scene in public", accept: ["a scandal", "an uproar", "a public row"], example: { jp: "Скандал был в коридоре, поэтому его слышали все соседи.", en: "The scene was in the corridor, so all the neighbours heard it." }, drill: { jp: "Скандал был в коридоре", en: "The scene was in the corridor" }, hint: "skan-DAL — stress on the last syllable. MASCULINE. ⚠️ TWO SENSES AND THE DOMESTIC ONE IS COMMONER: a scandal in the papers, and a shouting match at home — «устроить скандал», to make a scene." },
        { id: "ru-u78l3-konflikt", type: "vocab", front: "конфликт", reading: "konflikt", meaning: "a conflict", accept: ["the conflict", "a dispute", "a clash"], example: { jp: "Конфликт между ними старый, и дети о нём знают больше, чем думают взрослые.", en: "The conflict between them is an old one, and the children know more about it than the grown-ups think." }, drill: { jp: "Конфликт между ними очень старый", en: "The conflict between them is very old" }, hint: "kan-FLIKT — stress on the last syllable, and the о reduces to a. MASCULINE. Of two people, two countries or two rules. Russian takes между + the INSTRUMENTAL for the parties — unit 32's case." },
        { id: "ru-u78l3-uprek", type: "vocab", front: "упрёк", reading: "uprek", meaning: "a reproach", accept: ["a rebuke", "a criticism of someone", "a word of blame"], example: { jp: "Упрёк был тихий, зато он помнил его много лет.", en: "The reproach was a quiet one, but he remembered it for years." }, drill: { jp: "Упрёк был очень тихий", en: "The reproach was a very quiet one" }, hint: "u-PRYOK — stress on the last syllable, with the ё always written (unit 1 §7). MASCULINE, and ⚠️ its ё becomes е and the stress holds in other cases: упрЁк, упрЕка. ругать from unit 59 is to scold out loud; an упрёк can be one sentence." },
        { id: "ru-u78l3-ustupat", type: "vocab", front: "уступать", reading: "ustupat", meaning: "to give way", accept: ["to yield", "to back down", "to let someone have their way"], example: { jp: "Уступать первым он не хочет, хотя знает, что ссора будет продолжаться.", en: "He does not want to be the one to give way, although he knows the row will go on." }, drill: { jp: "Уступать первым он не хочет", en: "He does not want to be the one to give way" }, hint: "us-tu-PAT — stress on the last syllable. Imperfective infinitive; the perfective is уступить. ⚠️ Takes the DATIVE for the person — «уступать мужу» — unit 34's case. Also the everyday «уступить место», to give up your seat." },
      ],
    },
    {
      id: "ru-u78l4",
      unit: 78,
      lesson: 4,
      title: "The family you end up with",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a mother-in-law, a son-in-law and an orphan, say that someone is pregnant, talk about bringing a child up, and describe a long separation.",
      items: [
        { id: "ru-u78l4-tyoshcha", type: "vocab", front: "тёща", reading: "tyoshcha", meaning: "a wife's mother", accept: ["a mother-in-law", "the mother-in-law", "the wife's mother"], example: { jp: "Тёща живёт рядом, и это, по его словам, и хорошо, и трудно сразу.", en: "His mother-in-law lives nearby, and that, by his account, is both good and hard at once." }, drill: { jp: "Тёща живёт совсем рядом", en: "His mother-in-law lives very near" }, hint: "TYO-shcha — stress on the first syllable, with ё always written and щ the long soft sh from unit 3. FEMININE (-а). ⚠️ RUSSIAN HAS FOUR SEPARATE IN-LAW WORDS and this is the WIFE'S mother specifically; the husband's mother is свекровь. English makes do with one; Russian jokes about this one." },
        { id: "ru-u78l4-zyat", type: "vocab", front: "зять", reading: "zyat", meaning: "a daughter's husband", accept: ["a son-in-law", "the son-in-law", "a brother-in-law"], example: { jp: "Зять помогает с ремонтом, поэтому тёща о нём больше не говорит плохо.", en: "The son-in-law helps with the repairs, so his mother-in-law no longer speaks ill of him." }, drill: { jp: "Зять помогает с ремонтом", en: "The son-in-law helps with the repairs" }, hint: "ZYAT — one syllable, with the ь keeping the т soft. MASCULINE despite the -ь (unit1.js §3: always name it). ⚠️ It covers a son-in-law AND a sister's husband, which no English word does." },
        { id: "ru-u78l4-sirota", type: "vocab", front: "сирота", reading: "sirota", meaning: "an orphan", accept: ["the orphan", "a parentless child", "a child with no parents"], example: { jp: "Сирота он только по документам: его воспитывала тётя, и воспитывала хорошо.", en: "He is an orphan only on paper: his aunt brought him up, and brought him up well indeed." }, drill: { jp: "Сирота он только по документам", en: "He is an orphan only on paper" }, hint: "si-ra-TA — stress on the last syllable, and the о reduces to a. ⚠️ ENDS IN -а BUT TAKES THE GENDER OF THE PERSON: «он сирота» and «она сирота» are both right, like папа and дядя from unit 10 in reverse." },
        { id: "ru-u78l4-beremennaya", type: "vocab", front: "беременная", reading: "beremennaya", meaning: "pregnant", accept: ["expecting a baby", "with child", "pregnant of a woman"], example: { jp: "Беременная сестра живёт теперь у матери, потому что одной было страшно.", en: "His pregnant sister now lives at their mother's because she was frightened on her own." }, drill: { jp: "Беременная сестра живёт у матери", en: "His pregnant sister lives at their mother's" }, hint: "be-RE-men-na-ya — stress on RE, and the нн is held. ⚠️ CARDED IN THE FEMININE because that is the only form the word has a use for, exactly as unit1.js §9 cards «моя» separately. Used as a noun too: «беременным место», seats for pregnant women." },
        { id: "ru-u78l4-vospityvat", type: "vocab", front: "воспитывать", reading: "vospityvat", meaning: "to bring up a child", accept: ["to raise a child", "to rear", "to educate in manners"], example: { jp: "Воспитывать детей одному трудно, но он об этом не говорит.", en: "Bringing children up alone is hard, but he does not talk about it." }, drill: { jp: "Воспитывать детей одному трудно", en: "Bringing children up alone is hard" }, hint: "vas-PI-ty-vat — stress on PI, and the о reduces to a. Imperfective infinitive; the perfective is воспитать. ⚠️ NOT учить from unit 59, which is teaching a subject: воспитывать is manners and character. The noun воспитание is what a Russian means by «good upbringing»." },
        { id: "ru-u78l4-razluka", type: "vocab", front: "разлука", reading: "razluka", meaning: "a long separation", accept: ["being apart", "separation from someone", "time apart"], example: { jp: "Разлука была долгой, зато письма они писали каждую неделю.", en: "The separation was a long one, but they wrote letters every week." }, drill: { jp: "Разлука была очень долгой", en: "The separation was a very long one" }, hint: "raz-LU-ka — stress on LU. FEMININE (-а). ⚠️ Specifically being kept apart from someone you love, not an ordinary parting — Russian songs are full of it. From разлучать, to part, which is not taught." },
      ],
    },
  ],
};
