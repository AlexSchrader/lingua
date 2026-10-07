// RU Unit 107 — Этика и достоинство ("Ethics and dignity") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 1 (u98–u110). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit61.js §1–§8, and
// ru/unit98.js §1–§7d for this band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Ethics and responsibility" AND THE SECOND HALF OF
// IT IS ENTIRELY SPENT. u71 Долг и запрет owns долг · ответственность · вина ·
// виноват · мораль · справедливый · соблюдать · нарушать · подчиняться; u56
// Личность и поведение owns the NOUNS OF CONDUCT (забота · уважение · терпение ·
// зависть · обман · поведение · поступок · доверие · совесть · щедрый ·
// скромный · грубый · жадный · наглый); u93 Вера и обряд owns `грех`. So u107
// NARROWS to APPLIED ethics — the question itself, feeling for other people, the
// named ways of falling short, and what is owed when harm is done. A learner
// could already say duty, blame and conscience and could not say a dilemma,
// compassion, hypocrisy, cynicism or retribution.
//
// ⚠️ CROSS-BLOCK BOUNDARY: **u107 owns `терпимость`. u109 Принадлежность и
// неравенство takes `дискриминация` · `предрассудок` · `стереотип` instead, and
// u115 Emotion, subtle and mixed (block 2) must not card either.** Tolerance is
// an ETHICAL stance here, not a social-policy word.
//
// ⚠️ FIVE CANDIDATES REFUSED, each for a stated reason:
//   `честность` — `честный` (u28) hands it over outright.
//   `порядочность` — `порядок` (u15) hands it over.
//   `благо` · `благородство` · `добродетель` — `благодарить` (u59) and
//        `благодаря` (u62) are both carded on the благ- root, and `добрый` (u7)
//        on добро-, so all three are composed out of parts the learner has.
//        `милосердие` and `бескорыстие` carry what they would have carried.
//   `предубеждение` — `убеждать` (u49) is taught and unit61.js §6 already
//        refused `убеждение` on it; a prefixed form of a refused word is refused
//        twice over.
//   `равнодушие` — `равнодушный` (u67) hands it over.
//   `безнравственный` — IT IS BARRED BY THIS UNIT'S OWN CARD. unit51.js §3 bars
//        не-/без- + a TAUGHT word, and `нравственность` is carded right here, so
//        the без- form cannot also be a front. Named because it is the first time
//        in this band that a unit's own card closed a door on a later one.
//   Dropped for count at 24, all legal: `попустительство` · `этический` and
//        `нравственный` (both the same lexeme as cards here).
//
// ⚠️ `бескорыстие` AND `беспристрастный` ARE LEGAL FOR THE REASON `безвкусица`
// WAS IN u106: unit51.js §3 bars без + a CARDED word, and neither `корысть` nor
// `пристрастный` is taught anywhere in this course, so in both the без- is frozen
// inside a single lexeme. The three of them plus `неустойка` (u103) are now the
// standing precedent in this language — the test is whether the BASE is carded,
// never whether the word starts with без- or не-.
//
// ⚠️ `нравственность` ALLOWED although `нравится` is TAKEN (u8), and the
// reasoning rather than the verdict: the shared root is нрав-, and "to be
// pleasing" hands a learner nothing at all about a standard of right and wrong.
// The two senses do not touch. unit51.js §3's `одиночество` case.
//
// ⚠️ `терпимость` ALLOWED although `терпение` is TAKEN (u56), and this one is
// genuinely close, so the reasoning is stated rather than assumed: both are
// derived nouns of терпеть, but English keeps patience and tolerance apart and so
// does Russian — терпение is how long you can bear something, терпимость is
// whether you let others differ from you. A learner who knows the first cannot
// produce the second. Had the two shared one sense, §D would have killed it.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT107 = {
  id: "ru-u107",
  lang: "ru",
  title: "Этика и достоинство",
  order: 107,
  stage: "b2",
  lessons: [
    {
      id: "ru-u107l1",
      unit: 107,
      lesson: 1,
      title: "The question itself",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Pose a moral question — the study of right conduct, a person's own standard, a choice with no good branch, the worth a person holds by right, the line between one thing and another, and doing something on purpose.",
      items: [
        { id: "ru-u107l1-etika", type: "vocab", front: "этика", reading: "etika", meaning: "the study of what one ought to do", accept: ["the branch of thought about right conduct", "the reasoned question of how to act", "moral philosophy as a field"], example: { jp: "Этика здесь важнее закона, и юристы это понимают.", en: "Ethics matter more than law here, and the lawyers understand that." }, drill: { jp: "Этика врача это целая наука", en: "A doctor's ethics are a whole science" }, hint: "E-ti-ka — stress on the first syllable. FEMININE (-а). ⚠️ Also a professional code: врачебная этика, medical ethics, and корпоративная этика. ⚠️ Narrower than `мораль` from unit 71: мораль is the rules a society holds, этика is the thinking about them." },
        { id: "ru-u107l1-nravstvennost", type: "vocab", front: "нравственность", reading: "nravstvennost", meaning: "the sense of right and wrong a person lives by", accept: ["a person's inner standard of conduct", "the moral quality of how somebody behaves", "uprightness as a settled trait"], example: { jp: "Нравственность нельзя дать человеку приказом.", en: "A sense of right and wrong cannot be given to a person by order." }, drill: { jp: "Нравственность приказом не дают", en: "A sense of right and wrong is not given by order" }, hint: "NRAV-stven-nast — stress on the first syllable, and the opening нр is said together. FEMININE despite the -ь, like every -ость noun. ⚠️ It only LOOKS like `нравится` from unit 8 — the root нрав- is shared and \"to be pleasing\" tells you nothing about a moral standard. ⚠️ The adjective нравственный is the same lexeme and is not carded, and `безнравственный` is barred by this very card." },
        { id: "ru-u107l1-dilemma", type: "vocab", front: "дилемма", reading: "dilemma", meaning: "a choice where both ways are bad", accept: ["a fork with no good branch", "a situation forcing a choice between two evils", "an unwelcome choice between two options"], example: { jp: "Дилемма здесь настоящая: оба выхода плохие.", en: "The dilemma here is real: both ways out are bad." }, drill: { jp: "Дилемма здесь совершенно настоящая", en: "The dilemma here is entirely real" }, hint: "di-LEM-ma — stress on LEM, and the мм is held a beat longer. FEMININE (-а). ⚠️ Glossed the long way round on purpose: its reading IS the English word, so «a dilemma» would let a learner read the answer off the prompt — unit 1 §9. ⚠️ ONE м IS A SPELLING MISTAKE; the doubled letter is why the reading ends -emma." },
        { id: "ru-u107l1-dostoinstvo", type: "vocab", front: "достоинство", reading: "dostoinstvo", meaning: "the worth a person holds simply as a person", accept: ["the standing every human being has by right", "self-respect that cannot be taken away", "the inherent worth of a human being"], example: { jp: "Достоинство человека не зависит от денег.", en: "A person's dignity does not depend on money." }, drill: { jp: "Достоинство здесь важнее всего", en: "Dignity matters most here" }, hint: "das-TO-in-stva — stress on TO, and both unstressed о reduce to a. NEUTER (-о). From `достойный`, worthy. ⚠️ A SECOND SENSE IN THE PLURAL, and it is the commoner one: достоинства are a thing's merits — «у плана есть свои достоинства». Also the denomination of a banknote." },
        { id: "ru-u107l1-gran", type: "vocab", front: "грань", reading: "gran", meaning: "the line past which a thing becomes another", accept: ["the point at which one thing turns into another", "a dividing edge between two states", "the threshold between one thing and the next"], example: { jp: "Грань между шуткой и обманом очень тонкая.", en: "The line between a joke and a deception is very thin." }, drill: { jp: "Грань здесь очень тонкая", en: "The line here is very thin" }, hint: "GRAN — one syllable. FEMININE despite the -ь, like `площадь` from unit 6. ⚠️ Not the same as `граница` from unit 30, which is a border between places: a грань is the edge between two STATES of a thing, and literally the facet of a cut stone. The phrase на грани means on the verge of." },
        { id: "ru-u107l1-umyshlenno", type: "vocab", front: "умышленно", reading: "umyshlenno", meaning: "on purpose, knowing what would follow", accept: ["deliberately and with intent", "by design rather than by accident", "knowingly and on purpose"], example: { jp: "Он сделал это умышленно, и суд это понял.", en: "He did it deliberately, and the court understood that." }, drill: { jp: "Он сделал это совершенно умышленно", en: "He did it entirely deliberately" }, hint: "u-MYSH-len-na — stress on MYSH, and the final о reduces to a. ADVERB. Built on `мысль` from unit 39, like `домысел` in unit 99. ⚠️ A LEGAL TERM that decides sentences in Russia: умышленное убийство is murder and неумышленное is manslaughter. Sharper than `нарочно` from unit 59, which is simply on purpose." },
      ],
    },
    {
      id: "ru-u107l2",
      unit: 107,
      lesson: 2,
      title: "Feeling for other people",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name regard for others — mercy where harshness was allowed, shared suffering, putting others first, acting with nothing to gain, decency towards the weak, and letting others differ.",
      items: [
        { id: "ru-u107l2-miloserdie", type: "vocab", front: "милосердие", reading: "miloserdie", meaning: "mercy shown to one who could be punished", accept: ["kindness shown where harshness was allowed", "clemency towards somebody in your power", "the sparing of one who deserved worse"], example: { jp: "Милосердие сильнее наказания, однако верят в это не все.", en: "Mercy is stronger than punishment, yet not everybody believes it." }, drill: { jp: "Милосердие сильнее любого наказания", en: "Mercy is stronger than any punishment" }, hint: "mi-la-SER-di-ye — stress on SER, and the о reduces to a. NEUTER (-ие). A compound of милый, unit 82, and сердце, unit 6 — a dear heart. ⚠️ A CHURCH WORD FIRST, which is why it sits so naturally beside u93's vocabulary, and the Russian Red Cross is Красный Крест и Красное Полумесяц with сёстры милосердия, nursing sisters." },
        { id: "ru-u107l2-sostradanie", type: "vocab", front: "сострадание", reading: "sostradanie", meaning: "feeling another's pain as if it were yours", accept: ["fellow-feeling for somebody suffering", "pity that shares in the hurt", "compassion for another's distress"], example: { jp: "Сострадание видно без слов, и объяснять его не надо.", en: "Compassion shows without words, and needs no explaining." }, drill: { jp: "Сострадание видно и без слов", en: "Compassion shows even without words" }, hint: "sa-stra-DA-ni-ye — stress on DA, and the о reduces to a. NEUTER (-ие). Built on `страдать` from unit 77 with со-, the prefix of togetherness — suffering WITH somebody. ⚠️ Stronger than жалость, mere pity, which Russians consider faintly insulting to receive." },
        { id: "ru-u107l2-altruizm", type: "vocab", front: "альтруизм", reading: "altruizm", meaning: "acting for others at your own cost", accept: ["regard for others before oneself", "the putting of other people's good first", "selfless concern for other people"], example: { jp: "Альтруизм встречается реже, чем о нём говорят.", en: "Altruism is met with less often than it is talked about." }, drill: { jp: "Альтруизм встречается очень редко", en: "Altruism is met with very rarely" }, hint: "al-tru-IZM — stress on the last syllable, and the ль is soft. MASCULINE. ⚠️ A BOOKISH word in Russian, and faintly ironic in everyday use — «это чистый альтруизм» can mean somebody is being a fool. Its honest everyday partner is `бескорыстие`, the next card." },
        { id: "ru-u107l2-beskorystie", type: "vocab", front: "бескорыстие", reading: "beskorystie", meaning: "doing good with nothing at all to gain", accept: ["action with no thought of reward", "freedom from any private interest", "disinterested giving"], example: { jp: "Бескорыстие здесь полное: денег он не взял.", en: "The disinterestedness here is complete: he took no money." }, drill: { jp: "Бескорыстие здесь совершенно полное", en: "The disinterestedness here is entirely complete" }, hint: "bis-ka-RYS-ti-ye — stress on RYS, the е reduces to i and the о to a. NEUTER (-ие). From корысть, self-interest, which is NOT taught — and that is exactly why the без- is allowed here: unit 51's rule bars без + a CARDED word. Same ruling as `безвкусица` in unit 106." },
        { id: "ru-u107l2-gumannost", type: "vocab", front: "гуманность", reading: "gumannost", meaning: "treating people decently when you need not", accept: ["humane dealing with others", "decency towards those in your power", "humanity as a principle of conduct"], example: { jp: "Гуманность к слабым была тогда редкостью.", en: "Humane treatment of the weak was a rarity then." }, drill: { jp: "Гуманность здесь была большой редкостью", en: "Humane treatment was a great rarity here" }, hint: "gu-MAN-nast — stress on MAN, and the нн is held. FEMININE despite the -ь. ⚠️ The adjective гуманитарный is a FALSE FRIEND and worth flagging: it means humanitarian in гуманитарная помощь, but гуманитарные науки are the HUMANITIES, and a Russian who says «я гуманитарий» means he is bad at maths." },
        { id: "ru-u107l2-terpimost", type: "vocab", front: "терпимость", reading: "terpimost", meaning: "putting up with what you do not approve of", accept: ["willingness to let others differ", "forbearance towards ways not your own", "tolerance of difference"], example: { jp: "Терпимость к другому мнению приходит не сразу.", en: "Tolerance of another opinion does not come at once." }, drill: { jp: "Терпимость здесь очень нужна", en: "Tolerance is very much needed here" }, hint: "ter-PI-mast — stress on PI. FEMININE despite the -ь. ⚠️ IT IS NOT `терпение` FROM UNIT 56, and the difference decides whether it was allowed to be a card: терпение is how long you can bear something, терпимость is whether you let others be unlike you. Both come from терпеть and neither hands over the other. ⚠️ u109 owns дискриминация and предрассудок; this card is the ethical stance." },
      ],
    },
    {
      id: "ru-u107l3",
      unit: 107,
      lesson: 3,
      title: "The named ways of falling short",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name moral failings — pretending to goodness, two faces, assuming nobody is decent, a mean betrayal, readiness to hurt, and the misuse of entrusted power.",
      items: [
        { id: "ru-u107l3-litsemerie", type: "vocab", front: "лицемерие", reading: "litsemerie", meaning: "pretending to a goodness you do not have", accept: ["the show of virtue without the substance", "professing what one does not practise", "sanctimonious pretence"], example: { jp: "Лицемерие здесь заметно каждому, и верить ему уже никто не хочет.", en: "The hypocrisy here is noticeable to everyone, and nobody wants to believe him any more." }, drill: { jp: "Лицемерие его видели все", en: "Everybody saw his hypocrisy" }, hint: "li-tse-ME-ri-ye — stress on ME, and the е before it reduces to i. NEUTER (-ие). A compound of лицо, unit 20, and мерить, to measure — measuring out a face. ⚠️ The person is a лицемер, and the adjective лицемерный. Stronger than `обман` from unit 56, which is just a lie: a лицемер lies about what sort of man he is." },
        { id: "ru-u107l3-dvulichie", type: "vocab", front: "двуличие", reading: "dvulichie", meaning: "showing one face here and another there", accept: ["saying different things to different people", "duplicity of manner", "being two different men to two audiences"], example: { jp: "Двуличие его стало ясно очень быстро.", en: "His double-dealing became clear very quickly." }, drill: { jp: "Двуличие его стало ясно быстро", en: "His double-dealing became clear quickly" }, hint: "dvu-LI-chi-ye — stress on LI. NEUTER (-ие). A compound of два, unit 11, and лицо, unit 20 — two faces. ⚠️ Narrower than `лицемерие` in this lesson, and the pair is worth holding apart: a лицемер pretends to a virtue, a двуличный man simply tells each audience something else." },
        { id: "ru-u107l3-tsinizm", type: "vocab", front: "цинизм", reading: "tsinizm", meaning: "assuming nobody ever acts from a decent motive", accept: ["a settled disbelief in good faith", "contempt for the idea of principle", "the habit of crediting only base motives"], example: { jp: "Цинизм защищает от обмана, зато мешает верить людям.", en: "Cynicism protects you from deception, but makes it hard to trust people." }, drill: { jp: "Цинизм мешает верить людям", en: "Cynicism makes it hard to trust people" }, hint: "tsi-NIZM — stress on the last syllable. MASCULINE. ⚠️ HARSHER IN RUSSIAN THAN IN ENGLISH: English cynicism can be world-weary and almost charming, while Russian цинизм is a serious charge — «циничное заявление» is an accusation. The person is a циник." },
        { id: "ru-u107l3-podlost", type: "vocab", front: "подлость", reading: "podlost", meaning: "a mean act against somebody who trusted you", accept: ["a low betrayal of trust", "a shabby trick played on the defenceless", "an act of base treachery"], example: { jp: "Подлость он помнил и через двадцать лет.", en: "He remembered the betrayal even twenty years later." }, drill: { jp: "Подлость он помнил очень долго", en: "He remembered the betrayal a very long time" }, hint: "POD-last — stress on the first syllable, and the final о reduces to a. FEMININE despite the -ь. From подлый, base. ⚠️ ONE OF THE HEAVIEST WORDS IN THE LANGUAGE — calling an act a подлость ends a friendship — and it names both the quality and the single act: «он сделал подлость»." },
        { id: "ru-u107l3-zhestokost", type: "vocab", front: "жестокость", reading: "zhestokost", meaning: "the willingness to cause suffering", accept: ["cruelty as a settled trait", "readiness to inflict pain", "hardness towards another's suffering"], example: { jp: "Жестокость здесь никого не удивляла.", en: "Cruelty surprised nobody here." }, drill: { jp: "Такая жестокость удивляет всех", en: "Such cruelty surprises everybody" }, hint: "zhes-TO-kast — stress on TO, and the final о reduces to a. FEMININE despite the -ь. From жестокий, cruel. ⚠️ Distinguish it from `грубый` from unit 56, which is merely rude: грубость hurts feelings, жестокость sets out to hurt. The legal phrase is особая жестокость, aggravating a sentence." },
        { id: "ru-u107l3-zloupotreblenie", type: "vocab", front: "злоупотребление", reading: "zloupotreblenie", meaning: "the misuse of a power you were given", accept: ["the turning of an office to private ends", "an abuse of entrusted power", "the wrongful use of a position"], example: { jp: "Злоупотребление властью здесь трудно проверить.", en: "Abuse of power is hard to check here." }, drill: { jp: "Злоупотребление властью здесь очень частое", en: "Abuse of power here is very frequent" }, hint: "zla-u-pat-re-BLE-ni-ye — seven syllables, stress on BLE, and both о reduce to a. NEUTER (-ие). A compound of зло, evil, and употребление, use. ⚠️ A CRIMINAL-CODE HEADING in Russia — злоупотребление служебным положением — so it belongs with u102's vocabulary as much as with this unit's. Also of drink: злоупотребление алкоголем." },
      ],
    },
    {
      id: "ru-u107l4",
      unit: 107,
      lesson: 4,
      title: "Harm and its reckoning",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about wrong and what follows it — harm done, a standing flaw of character, making good a fault, punishment coming back on the doer, judging without a side, and staying true to your own.",
      items: [
        { id: "ru-u107l4-vred", type: "vocab", front: "вред", reading: "vred", meaning: "harm done to somebody or something", accept: ["damage caused to a person or a thing", "injury brought about by an act", "the hurt that results from something"], example: { jp: "Вред от этого решения виден только через годы.", en: "The harm from this decision shows only years later." }, drill: { jp: "Вред от этого решения большой", en: "The harm from this decision is great" }, hint: "VRED — one syllable, and ⚠️ the oblique forms move the stress onto the ending: вредА. MASCULINE. ⚠️ Distinguish it from `ущерб` from unit 70, which is a measurable loss you can claim for: вред is the harm itself, including to health — вред здоровью. The adjective вредный also means a difficult, awkward person." },
        { id: "ru-u107l4-porok", type: "vocab", front: "порок", reading: "porok", meaning: "a settled flaw of character", accept: ["an ingrained moral fault", "a habitual failing in a person", "a standing defect of character"], example: { jp: "Порок он считал болезнью, а не привычкой.", en: "He considered vice an illness rather than a habit." }, drill: { jp: "Порок он считал настоящей болезнью", en: "He considered vice a real illness" }, hint: "pa-ROK — stress on the last syllable, and the first о reduces to a. MASCULINE. ⚠️ ALSO A MEDICAL TERM, and that is where a learner meets it first: порок сердца is a heart defect, one of the commonest phrases in a Russian hospital. The adjective порочный means both vicious and, of reasoning, circular." },
        { id: "ru-u107l4-iskuplenie", type: "vocab", front: "искупление", reading: "iskuplenie", meaning: "the making good of a wrong done", accept: ["the paying off of a past fault", "atonement for something done", "the working-out of a debt of guilt"], example: { jp: "Искупление здесь идёт очень медленно, зато оно настоящее.", en: "The atonement here goes very slowly, but it is real." }, drill: { jp: "Искупление его было настоящим", en: "His atonement was real" }, hint: "is-kup-LE-ni-ye — stress on LE. NEUTER (-ие). From купить, unit 31 — buying something back. ⚠️ A CHURCH WORD with a Dostoyevskian weight in Russian: «Преступление и наказание» is about искупление, and the phrase искупить вину, to atone for one's guilt, uses `вина` from unit 71." },
        { id: "ru-u107l4-vozmezdie", type: "vocab", front: "возмездие", reading: "vozmezdie", meaning: "punishment coming back on the doer", accept: ["a reckoning visited on the guilty", "retribution for what was done", "the just return for an evil act"], example: { jp: "Возмездие пришло поздно, однако пришло.", en: "Retribution came late, but it came." }, drill: { jp: "Возмездие пришло очень поздно", en: "Retribution came very late" }, hint: "vaz-MEZ-di-ye — stress on MEZ, and the о reduces to a. NEUTER (-ие). ⚠️ HIGH AND LITERARY, and heavier than `наказание` from unit 51: a наказание is what a court hands down, a возмездие is what the world does to a man. It carries no sense of a judge at all." },
        { id: "ru-u107l4-bespristrastnyy", type: "vocab", front: "беспристрастный", reading: "bespristrastnyy", meaning: "judging without taking a side", accept: ["free of favour towards either party", "even-handed in judgement", "unswayed by any interest of his own"], example: { jp: "Беспристрастный суд здесь редкость, и все это знают.", en: "An impartial court is a rarity here, and everyone knows it." }, drill: { jp: "Беспристрастный суд здесь большая редкость", en: "An impartial court is a great rarity here" }, hint: "bis-pri-STRAST-nyy — stress on STRAST, and the е reduces to i. ADJECTIVE. From пристрастный, partial, which is NOT taught — so the без- is legal here for the same reason as in `бескорыстие` in lesson 2. ⚠️ The noun is беспристрастность, and the pairing every Russian legal text uses is независимый и беспристрастный суд." },
        { id: "ru-u107l4-loyalnost", type: "vocab", front: "лояльность", reading: "loyalnost", meaning: "staying true to the side you belong to", accept: ["steadfastness towards one's own side", "faithful adherence to an institution", "reliable allegiance"], example: { jp: "Лояльность здесь важнее знания.", en: "Loyalty matters more than knowledge here." }, drill: { jp: "Лояльность здесь нужна всем", en: "Loyalty is needed by everybody here" }, hint: "la-YAL-nast — stress on YAL, and the о reduces to a. FEMININE despite the -ь. ⚠️ IT HAS A POLITICAL EDGE IN RUSSIAN that the English word lacks: «лояльный» often means compliant towards authority rather than devoted to a friend, and лояльность к власти is a standing phrase. For loyalty to a person Russian prefers верность." },
      ],
    },
  ],
};
