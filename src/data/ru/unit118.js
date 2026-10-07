// RU Unit 118 — Вводные слова и связки ("Parenthetical words and connectives") — B2
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE SCAFFOLD TITLE WAS `Grammar 11 — discourse, cohesion, hedged claims`
// AND THE THEME SURVIVES INTACT — this is the one pre-titled slot in u111–u123
// that needed no retheming and no narrowing of subject. What it DID need is a
// measurement of what is already taught, because the single-word connectives are
// nearly all gone: `однако` · `впрочем` · `итак` · `кстати` · `причём` ·
// `наоборот` · `вообще` · `зато` · `едва` · `будто` · `чтобы` (u46);
// `во-первых` · `отчасти` · `согласен` (u61); `следовательно` · `относительно`
// (u62); `якобы` · `словно` · `пожалуй` · `вряд ли` · `оговорка` (u64);
// `мол` · `дескать` · `авось` (u81); `короче` (u82); `ибо` · `отнюдь` ·
// `весьма` (u83); `иначе` · `поскольку` · `вкупе` · `либо` (u79).
//
// WHAT IS LEFT, and it is almost entirely MULTI-WORD: the phrases a Russian
// essay is actually built out of — `тем не менее` · `таким образом` ·
// `с одной стороны` · `в частности` · `в целом` · `в основном` · `в итоге` ·
// `иными словами` · `то есть` · `по сути` · `как правило` · `более того` ·
// `к тому же` · `при этом` · `между тем` · `а именно` · `в заключение` ·
// `строго говоря` · `грубо говоря` · `если угодно` · `стало быть` ·
// `по-видимому` · `во-вторых` · `в противном случае`. ALL 24 PROBED FREE.
// u117's header argues why a lexicalised multi-word phrase is not refused by
// unit1.js §D against the noun inside it; the same argument carries these.
//
// ⚠️ `в противном случае` CAME TO THIS UNIT FROM u117 ON PURPOSE. It is formally
// a prepositional phrase, but it does a CONNECTIVE's job («or else…»), and
// putting it beside u117's `в случае` would have been one prompt with two right
// answers. Measured and moved, not forgotten.
//
// ⚠️ FIVE CANDIDATES REFUSED, each for a reason a front probe cannot see:
//   `по-видимому` — §D, against `видимо` (u64), which is the SAME word in its
//                   short form and is already glossed "evidently". Caught by
//                   `accept-collisions.mjs`, not by the front probe, which is
//                   exactly the failure mode unit1.js §D warns about. Replaced by
//                   `мягко говоря`, which completes l3's говоря trio instead.
//   `скорее`      — unit1.js §5: it is the COMPARATIVE of скорый/`скоро` (u7),
//                   i.e. an inflected form of a taught word, which is never its
//                   own card. (`короче` at u82 is the documented exception and
//                   was argued there; this is not a second one.)
//   `вообще-то`   — §D, against `вообще` (u46).
//   `собственно`  — §D, against `собственный` (u65).
//   `соответственно` — §D, against `соответствовать` (u61).
//   `подытожить`  — §D, against `итог` (u37), and u117 already cards
//                   `по итогам`.
// ⚠️ `в довершение` and `не говоря о` probe free and are DEFERRED, not refused.
//
// ⚠️ 12 OF THIS UNIT'S 24 DRILLS CARRY A COMMA, AND THAT IS NOT A DEFECT I
// CAN REMOVE. `lint:curriculum` warns "has sentence-internal punctuation —
// sentence:build rejects it", which costs those cards ONE card kind. A вводное
// слово IS SET OFF BY A COMMA IN RUSSIAN — obligatorily, by the rule every
// Russian school teaches — so «Во-вторых денег нет» without the comma would be
// WRONG, and writing it that way to satisfy a lint rule is the thing CLAUDE.md
// forbids: weakening the content to force a check green. The other 12 drills in
// this unit have no comma and route normally.
// ⚠️ SAME SITUATION, SAME REASON, in two other units of this block: u116's
// `допустим` and `по идее` (2 drills) and u119's `сударыня` (1 drill, an
// обращение, which also takes an obligatory comma). 15 drills across u111–u123
// in total; every other one of the 312 was rewritten to 3–8 tokens with no
// internal punctuation, which is the standard B1 ru shipped at.
//
// ⚠️ ID TRAP (measured at u116): an item id must match
// /^[a-z]{2}-u\d+l\d+-[a-z0-9]+$/ and allows NO HYPHEN, so every multi-word
// front's id is its reading run together — `ru-u118l1-sodnoystorony`.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT118 = {
  id: "ru-u118",
  lang: "ru",
  title: "Вводные слова и связки",
  order: 118,
  stage: "b2",
  lessons: [
    {
      id: "ru-u118l1",
      unit: 118,
      lesson: 1,
      title: "Putting an argument in order",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Order an argument: secondly, namely, in particular, on the one hand, thus, and in conclusion.",
      items: [
        { id: "ru-u118l1-vovtorykh", type: "vocab", front: "во-вторых", reading: "vovtorykh", meaning: "secondly", accept: ["in the second place", "and second", "point two"], example: { jp: "Во-вторых, денег на это нет, и никто их не даст.", en: "Secondly, there is no money for this, and nobody will give any." }, drill: { jp: "Во-вторых, денег на это нет", en: "Secondly, there is no money for this" }, hint: "va-fta-RYKH — stress on RYKH, the в of во reducing to a and the в of вторых said as f. ⚠️ WRITTEN WITH A HYPHEN, always, and ⚠️ it is во- not в-, because вторых begins with a consonant cluster — the same rule as «во вторник». `во-первых` is taught at u61; this is its partner, and a Russian who says one is committed to saying the other." },
        { id: "ru-u118l1-aimenno", type: "vocab", front: "а именно", reading: "aimenno", meaning: "and specifically", accept: ["to be precise", "that is to say which", "and these are"], example: { jp: "Нужны три вещи, а именно: время, деньги и люди.", en: "Three things are needed, namely: time, money and people." }, drill: { jp: "А именно время", en: "Namely time" }, hint: "a I-men-na — stress on the I of именно, and the final о reduces to a. ⚠️ ALWAYS FOLLOWED BY A LIST OR A COLON — it announces that you are about to be specific, and a Russian text uses it where English uses a dash. The именно part also lives alone («именно так», exactly so), but that word is not a front in this course." },
        { id: "ru-u118l1-vchastnosti", type: "vocab", front: "в частности", reading: "vchastnosti", meaning: "in particular", accept: ["among other things", "notably", "to take one case"], example: { jp: "В частности, это касается всех, кто работает ночью.", en: "In particular, this concerns everyone who works at night." }, drill: { jp: "В частности, это касается всех, кто работает ночью", en: "In particular this concerns everyone who works at night" }, hint: "f CHAST-nas-ti — the в as f, stress on CHAST, the unstressed о reducing to a. ⚠️ IT NARROWS FROM A GENERAL CLAIM TO ONE INSTANCE, and the general claim must already have been made. ⚠️ Keep it apart from u117's `в части`, which points at a SECTION of a document: в частности is an example, в части is a scope limit." },
        { id: "ru-u118l1-sodnoystorony", type: "vocab", front: "с одной стороны", reading: "sodnoystorony", meaning: "on the one hand", accept: ["looked at one way", "from one point of view", "on one side of it"], example: { jp: "С одной стороны, это дорого. С другой — делать надо.", en: "On the one hand it is expensive. On the other, it has to be done." }, drill: { jp: "С одной стороны", en: "On the one hand it is expensive" }, hint: "s ad-NOY sta-ra-NY — two stresses, on одной and on сторонЫ, with every unstressed о reduced to a. ⚠️ IT COMMITS YOU TO THE SECOND HALF: «с другой стороны», or just «с другой», must follow, and a Russian listener waits for it. Built on `сторона` (u33) and `один` (u11), both taught — the phrase is readable; only the obligation is new." },
        { id: "ru-u118l1-takimobrazom", type: "vocab", front: "таким образом", reading: "takimobrazom", meaning: "in this way", accept: ["by this means", "accordingly", "in this manner it follows"], example: { jp: "Таким образом, вопрос решили без всякого спора.", en: "Thus the question was settled without any argument at all." }, drill: { jp: "Таким образом, вопрос решили без спора", en: "Thus the question was settled without argument" }, hint: "ta-KIM O-bra-zam — stress on КИМ and on the O of образом, with the final о reducing to a. ⚠️ TWO JOBS AND BOTH COMMON: drawing a conclusion («таким образом, мы видим…») and describing a METHOD («таким образом он и живёт», that is how he lives). Built on `образ` (u68) in the instrumental. `следовательно` (u62) is the stricter, logical one." },
        { id: "ru-u118l1-vzaklyuchenie", type: "vocab", front: "в заключение", reading: "vzaklyuchenie", meaning: "in conclusion", accept: ["as a final point", "finally and to finish", "by way of closing"], example: { jp: "В заключение он сказал только одно слово — спасибо.", en: "In conclusion he said only one word: thank you." }, drill: { jp: "В заключение он сказал только одно слово", en: "In conclusion he said only one word" }, hint: "v za-klyu-CHE-ni-ye — stress on CHE. ⚠️ SPELLING TRAP THE SAME SHAPE AS u117's `в течение`: the phrase ends in -ие, while «в заключениИ» with -ии means IN PRISON. One letter, and the two sentences could not be further apart. From заключать, to conclude, which is not carded." },
      ],
    },
    {
      id: "ru-u118l2",
      unit: 118,
      lesson: 2,
      title: "Summing up and restating",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Sum up and restate: on the whole, for the most part, in the end, in other words, that is, and therefore it follows.",
      items: [
        { id: "ru-u118l2-vtselom", type: "vocab", front: "в целом", reading: "vtselom", meaning: "taken as a whole", accept: ["overall", "broadly as a whole", "judged in the round"], example: { jp: "В целом работа хорошая, но две ошибки надо убрать.", en: "On the whole the work is good, but two mistakes have to be removed." }, drill: { jp: "В целом работа хорошая", en: "On the whole the work is good" }, hint: "f TSE-lam — the в as f, stress on TSE, the final о reducing to a. ⚠️ IT JUDGES THE WHOLE THING AT ONCE, and almost always precedes a reservation — «в целом да, но…». Built on целый «whole», which is reachable by stem from the taught corpus. Compare `в основном` in this lesson, which counts PARTS rather than judging the whole." },
        { id: "ru-u118l2-vosnovnom", type: "vocab", front: "в основном", reading: "vosnovnom", meaning: "for the most part", accept: ["mostly", "mainly", "in the main"], example: { jp: "Здесь в основном живут старые люди, молодых почти нет.", en: "For the most part old people live here; there are almost no young ones." }, drill: { jp: "Здесь в основном живут старые люди", en: "For the most part old people live here" }, hint: "v as-nav-NOM — stress on NOM, both unstressed о reducing to a. ⚠️ A STATEMENT ABOUT PROPORTION, not a judgement: «в основном» means most of the cases, and it invites the question «and the rest?». Built on основной «basic», from the same основ- as u117's `на основании`. `главный` (u40) is the adjective for the main one." },
        { id: "ru-u118l2-vitoge", type: "vocab", front: "в итоге", reading: "vitoge", meaning: "as things finally stood", accept: ["in the event", "when all was said and done", "at the finish"], example: { jp: "В итоге он остался дома и ничего не сказал.", en: "In the end he stayed at home and said nothing." }, drill: { jp: "В итоге он остался дома один", en: "In the end he stayed at home alone" }, hint: "v i-TO-ge — stress on TO. ⚠️ NARRATIVE, NOT LOGICAL: в итоге reports how a story finished, where `следовательно` (u62) draws a conclusion from premises. Built on `итог` (u37, «a total»). ⚠️ u117's `по итогам` is the formal cousin — it names the period and treats the result as a basis for action." },
        { id: "ru-u118l2-inymislovami", type: "vocab", front: "иными словами", reading: "inymislovami", meaning: "to put it another way", accept: ["put differently", "restating it", "said another way"], example: { jp: "Иными словами, денег у них нет и работать никто не хочет.", en: "In other words, they have no money and nobody wants to work." }, drill: { jp: "Иными словами, денег у них нет", en: "In other words, they have no money" }, hint: "I-ny-mi sla-VA-mi — stress on the I of иными and the VA of словами, the unstressed о reducing to a. ⚠️ BOTH WORDS ARE IN THE INSTRUMENTAL PLURAL — «by other words» — which is how Russian says «in». `слово` (u39) is taught; иной «other» is not a front, and this phrase is where you meet it." },
        { id: "ru-u118l2-toest", type: "vocab", front: "то есть", reading: "toest", meaning: "that is to say", accept: ["i.e.", "which is to say", "put more exactly"], example: { jp: "Он придёт завтра, то есть в среду, а не сегодня.", en: "He will come tomorrow, that is on Wednesday, not today." }, drill: { jp: "То есть в среду", en: "That is on Wednesday" }, hint: "TO yest — stress on то. ⚠️ THE SINGLE MOST-USED CONNECTIVE IN SPOKEN RUSSIAN, abbreviated «т.е.» in writing exactly as English writes «i.e.». ⚠️ It also works alone as a question — «то есть?» means «meaning what, exactly?». Built on `есть` (u10), and note it corrects or clarifies what you just said; `иными словами` restates a whole thought." },
        { id: "ru-u118l2-stalobyt", type: "vocab", front: "стало быть", reading: "stalobyt", meaning: "therefore it follows", accept: ["which means", "ergo", "it must follow then"], example: { jp: "Света нет, стало быть, дома никого нет.", en: "There is no light on; therefore there is nobody at home." }, drill: { jp: "Света нет, стало быть, дома никого нет", en: "There is no light on, therefore there is nobody at home" }, hint: "STA-la byt — stress on the STA, the final о of стало reducing to a. ⚠️ SLIGHTLY OLD-FASHIONED AND VERY RUSSIAN IN FLAVOUR — a village grandfather's word, and a Chekhov character's. Built on `стать` (u31) and `быть` (u22), both taught. `следовательно` (u62) is the neutral written equivalent and `значит` (u19) the everyday spoken one." },
      ],
    },
    {
      id: "ru-u118l3",
      unit: 118,
      lesson: 3,
      title: "Hedging a claim before you make it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Hedge a claim: to put it mildly, as a general rule, strictly speaking, roughly speaking, if you like, and in essence.",
      items: [
        { id: "ru-u118l3-myagkogovorya", type: "vocab", front: "мягко говоря", reading: "myagkogovorya", meaning: "to put it mildly", accept: ["to say the least", "putting it gently", "and that is the kind version"], example: { jp: "Мягко говоря, он был не очень доволен этим ответом.", en: "To put it mildly, he was not very pleased with that answer." }, drill: { jp: "Мягко говоря, он был не очень доволен", en: "To put it mildly, he was not very pleased" }, hint: "MYAG-ka ga-va-RYA — stress on MYAG and on RYA, the final о of мягко reducing to a. ⚠️ THE THIRD MEMBER OF THIS LESSON'S TRIO and they are taught together on purpose: `строго говоря` tightens a claim, `грубо говоря` loosens it, мягко говоря UNDERSTATES it on purpose so the listener supplies the stronger word. Built on мягкий (u40) and `говорить` (u4). ⚠️ Nearly always ironic — «мягко говоря, не лучший день» means it was a disaster." },
        { id: "ru-u118l3-kakpravilo", type: "vocab", front: "как правило", reading: "kakpravilo", meaning: "as a general rule", accept: ["typically", "in the normal way of things", "usually and predictably"], example: { jp: "Как правило, они приходят рано и уходят поздно.", en: "As a rule they arrive early and leave late." }, drill: { jp: "Как правило, они приходят рано и уходят поздно", en: "As a rule they arrive early and leave late" }, hint: "kak PRA-vi-la — stress on PRA, the final о reducing to a. ⚠️ IT CLAIMS A PATTERN AND ADMITS EXCEPTIONS — which is exactly what makes it a hedge: a Russian who says «как правило» is telling you he is about to be contradicted by one case. Built on `правило` (u41), and note `обычно` (u29) is the plain «usually» with no such admission." },
        { id: "ru-u118l3-strogogovorya", type: "vocab", front: "строго говоря", reading: "strogogovorya", meaning: "strictly speaking", accept: ["to be exact", "if one is being precise", "pedantically speaking"], example: { jp: "Строго говоря, это не ошибка, но писать так не надо.", en: "Strictly speaking this is not a mistake, but one should not write like that." }, drill: { jp: "Строго говоря, это не ошибка", en: "Strictly speaking this is not a mistake" }, hint: "STRO-ga ga-va-RYA — stress on the STRO and on RYA, every unstressed о reducing to a. ⚠️ THE SECOND WORD IS A ДЕЕПРИЧАСТИЕ — a verbal adverb, which u80 teaches — and this is the construction in its most useful everyday form. Built on `строгий` (u56) and `говорить` (u4). It introduces a correction you are making reluctantly." },
        { id: "ru-u118l3-grubogovorya", type: "vocab", front: "грубо говоря", reading: "grubogovorya", meaning: "roughly speaking", accept: ["to put it crudely", "in round terms", "in broad figures"], example: { jp: "Грубо говоря, половина города об этом не знает.", en: "Roughly speaking, half the city does not know about it." }, drill: { jp: "Грубо говоря, половина города об этом не знает", en: "Roughly speaking half the city does not know about it" }, hint: "GRU-ba ga-va-RYA — stress on GRU and on RYA. ⚠️ THE MIRROR OF `строго говоря` AND THEY ARE TAUGHT TOGETHER ON PURPOSE: строго говоря tightens, грубо говоря loosens. ⚠️ TWO SENSES: approximately (a number), and bluntly (a way of putting something) — «грубо говоря, он соврал». From грубый «coarse», reachable by stem." },
        { id: "ru-u118l3-esliugodno", type: "vocab", front: "если угодно", reading: "esliugodno", meaning: "if you like", accept: ["if you will", "one might even say", "if you prefer to put it so"], example: { jp: "Это, если угодно, другая страна, хотя город тот же.", en: "This is, if you like, a different country, although the city is the same." }, drill: { jp: "Это, если угодно, другая страна", en: "This is, if you like, a different country" }, hint: "YES-li u-GOD-na — stress on YES and GOD, the final о reducing to a. ⚠️ IT OFFERS A STRONGER WORD AND LETS THE LISTENER REFUSE IT — polite, bookish, and slightly challenging. Built on `если` (u19); угодно is not a front and appears only inside frames like this. Compare the plainer «можно сказать»." },
        { id: "ru-u118l3-posuti", type: "vocab", front: "по сути", reading: "posuti", meaning: "in essence", accept: ["essentially", "fundamentally", "when you get down to it"], example: { jp: "По сути, они говорят одно и то же разными словами.", en: "In essence they are saying the same thing in different words." }, drill: { jp: "По сути, они говорят одно и то же", en: "In essence they are saying the same thing" }, hint: "pa SU-ti — stress on SU. ⚠️ IT DISMISSES THE SURFACE AND CLAIMS THE CORE, which is a strong move dressed as a hedge: «по сути» often precedes a flat contradiction of what was just said. The full form is «по сути дела». From суть «the essence», which is not a front in this course." },
      ],
    },
    {
      id: "ru-u118l4",
      unit: 118,
      lesson: 4,
      title: "Conceding, adding and warning",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Concede and add: nevertheless, what is more, besides which, at the same time, meanwhile, and otherwise failing that.",
      items: [
        { id: "ru-u118l4-temnemenee", type: "vocab", front: "тем не менее", reading: "temnemenee", meaning: "none the less", accept: ["for all that", "notwithstanding", "and despite all that"], example: { jp: "Погода была плохая. Тем не менее все пришли.", en: "The weather was bad. Nevertheless everyone came." }, drill: { jp: "Тем не менее все пришли", en: "Nevertheless everyone came" }, hint: "tem ne ME-ne-ye — stress on the first ME of менее. ⚠️ THREE WORDS, NO COMMA BETWEEN THEM, and it is the most formal of Russian's concessives. Built on `менее` (u47) and `тем` (the instrumental of то). `однако` (u46) and `впрочем` (u46) are the everyday ones; тем не менее is what you write." },
        { id: "ru-u118l4-boleetogo", type: "vocab", front: "более того", reading: "boleetogo", meaning: "and more than that", accept: ["moreover", "going further", "stronger still"], example: { jp: "Он знал об этом. Более того, он сам всё и начал.", en: "He knew about it. What is more, he started it all himself." }, drill: { jp: "Более того, он сам всё начал", en: "What is more, he started it all himself" }, hint: "BO-le-ye ta-VO — stress on the BO of более and on the VO of того, where ⚠️ THE г IS SAID AS v (unit 6's reading rules: the genitive ending -ого is said -ova). Built on `более` (u47). ⚠️ It ESCALATES — what follows must be stronger than what came before, or a Russian reader feels cheated." },
        { id: "ru-u118l4-ktomuzhe", type: "vocab", front: "к тому же", reading: "ktomuzhe", meaning: "on top of that", accept: ["and in addition", "a separate point besides", "and separately also"], example: { jp: "Дорого, и к тому же очень далеко от дома.", en: "It is expensive, and besides which very far from home." }, drill: { jp: "И к тому же очень далеко от дома", en: "And besides which very far from home" }, hint: "k ta-MU zhe — stress on MU, the unstressed о reducing to a. ⚠️ DIFFERENT FROM `более того`: к тому же adds a SEPARATE point of the same weight, более того adds a STRONGER version of the same point. The же is the emphatic particle and is never stressed. Common in speech as well as writing." },
        { id: "ru-u118l4-prietom", type: "vocab", front: "при этом", reading: "prietom", meaning: "while that is so", accept: ["and yet simultaneously", "all the while", "in the same breath"], example: { jp: "Он много работает и при этом всегда спокойный.", en: "He works a lot and at the same time is always calm." }, drill: { jp: "Он много работает и при этом всегда спокойный", en: "He works a lot" }, hint: "pri E-tam — stress on the E of этом, the final о reducing to a. ⚠️ OFTEN CARRIES A NOTE OF CONTRAST, which English «at the same time» also has: «дорого, при этом плохо» means expensive AND bad, said with a raised eyebrow. Built on `это` (u2), and it is one of the highest-frequency connectives in written Russian." },
        { id: "ru-u118l4-mezhdutem", type: "vocab", front: "между тем", reading: "mezhdutem", meaning: "meanwhile", accept: ["in the meantime", "while that was going on", "and all this time"], example: { jp: "Между тем в городе уже всё знали.", en: "Meanwhile in the city everyone already knew." }, drill: { jp: "Между тем в городе уже всё знали", en: "Meanwhile in the city everyone already knew" }, hint: "MEZH-du tem — stress on MEZH. ⚠️ TWO JOBS: the plain time sense (meanwhile), and a CONCESSIVE one close to «and yet» — «между тем он молчал», and yet he said nothing. Built on `между` (u33). The fuller «между тем как» introduces a whole clause." },
        { id: "ru-u118l4-vprotivnomsluchae", type: "vocab", front: "в противном случае", reading: "vprotivnomsluchae", meaning: "failing that", accept: ["if that does not happen", "should that not be so", "in the contrary case"], example: { jp: "Надо ответить до пятницы. В противном случае место дадут другому.", en: "An answer is needed by Friday. Failing that, the place will be given to someone else." }, drill: { jp: "В противном случае место дадут другому", en: "Failing which the place goes to someone else" }, hint: "f pra-TIV-nam SLU-cha-ye — the в as f, stresses on TIV and SLU, the unstressed о reducing to a. ⚠️ THE FORMAL `иначе` (u79), and the register difference is the whole point: a letter from an office says «в противном случае», a friend says «иначе». ⚠️ It came to this unit from u117 so as not to sit beside `в случае` there — see the header. Built on `случай` (u24) and противный «opposite», which is not carded." },
      ],
    },
  ],
};
