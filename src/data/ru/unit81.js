// RU Unit 81 — Чужая речь и оттенки ("Reported speech and shades of meaning") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, ru/unit74.js §1–§5, ru/unit79.js §2.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Grammar 8 — nuance, evidentiality, nominalization".
// The first two apply to Russian and are this unit. THE THIRD DOES NOT, and the
// reason is worth stating: Russian nominalises with -ние/-ость, and by B1 almost
// every such noun is built on a root the course has already taught, so unit1.js
// §D refuses it — решение (решать u24), знание (знать u4), объяснение
// (объяснять u34), значение (значит u22) and thirty more are already listed as
// refused in unit51.js §3. A lesson of 6 nominalisations is not available
// WITHOUT breaking the derivation rule, so l4 teaches the nuance NOUNS that are
// genuinely free instead, and the -ние pattern is taught in their hints.
// ⛔ NO PREFIXED VERBS OF MOTION — block 1's, u63.
//
// ⚠️ HOW EVIDENTIALITY IS TAUGHT. Russian has no verb form for "I am told that";
// it marks the second-hand with PARTICLES, which is l2's six fronts. `мол` and
// `дескать` are the two true quotatives — they mark the words as somebody
// else's — and `якобы` adds the speaker's doubt. ⚠️ All three are REGISTER-
// MARKED (мол and дескать are spoken, якобы is written) and every hint says so,
// because a learner who uses дескать in an exam paper has said something odd.
//
// ⚠️ REFUSED on unit1.js §D: `намёк` (против `намекать`, carded here — the noun
//   and the verb are one lexeme) · `догадка` (против `догадываться`) ·
//   `подозрение` (против `подозревать`, carded u... not carded; the word was cut
//   when u80 took its slot) · `оговорка` (против `говорить` u4) · `истина`
//   (gloss collision with `правда` u22 — both normalise to "truth") ·
//   `вероятность` (против `вероятно` u47) · `сомнение` (против `сомневаться`
//   u35) · `подтекст` (против `текст` u41) · `словно` (против `слово` u6) ·
//   `пожалуй` (против `пожалуйста` u7 — they share eight characters) ·
//   `наверняка` (против `наверное` u22) · `выдумывать` (против `думать` u22) ·
//   `сочинять` (против `сочинение` u41) · `обманывать` (против `обман` u56) ·
//   `подтверждать` (против `утверждать` u46) · `преувеличивать` (против
//   `увеличивать` u48) · `приписывать` (против `писать` u4) · `ссылаться`
//   (против `ссылка` u43) · `свидетель` (против `видеть` u4).
// ⚠️ TWO KEPT WITH REASONS: `скрывать` is the third -крывать verb in the course
//   (открывать and закрывать are u57l2) and is kept because «to conceal» is not
//   reachable from «to open» or «to shut» in any direction; the hint names both.
//   `притворяться` sits on твор-, which `творчество` (u55l4) also uses, and «to
//   pretend» is not guessable from «creativity».
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT81 = {
  id: "ru-u81",
  lang: "ru",
  title: "Чужая речь и оттенки",
  order: 81,
  stage: "b1",
  lessons: [
    {
      id: "ru-u81l1",
      unit: 81,
      lesson: 1,
      title: "Verbs for what someone said",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report that someone lied, hinted, muttered, boasted, guessed or swore to something, and choose the verb that carries your opinion of it.",
      items: [
        { id: "ru-u81l1-vrat", type: "vocab", front: "врать", reading: "vrat", meaning: "to tell lies", accept: ["to fib", "to be telling lies", "to make things up"], example: { jp: "Врать он не умеет, поэтому просто молчит, когда не хочет давать ответ.", en: "He cannot tell lies, so he just keeps quiet when he does not want to give an answer." }, drill: { jp: "Врать он совсем не умеет", en: "He cannot tell lies at all" }, hint: "VRAT — one syllable. Imperfective infinitive; the perfective is соврать. ⚠️ GLOSSED «to tell lies» ON PURPOSE: `ложь` from unit 39 is already «a lie», and the grader strips a leading «a» and «to», so «to lie» and «a lie» would be ONE string. Its present is врУ, врЁШЬ, врУТ. Colloquial but not rude." },
        { id: "ru-u81l1-namekat", type: "vocab", front: "намекать", reading: "namekat", meaning: "to hint", accept: ["to drop a hint", "to imply", "to suggest indirectly"], example: { jp: "Намекать он начал ещё в январе, но прямо так и не сказал.", en: "He began hinting back in January, but never said it straight out." }, drill: { jp: "Он начал намекать очень рано", en: "He began hinting very early" }, hint: "na-me-KAT — stress on the last syllable. Imperfective infinitive; the perfective is намекнуть. ⚠️ Takes на + the ACCUSATIVE for what is hinted at — «намекать на премию» — unit 23's case. Its noun намёк is deliberately not carded: it is the same lexeme." },
        { id: "ru-u81l1-bormotat", type: "vocab", front: "бормотать", reading: "bormotat", meaning: "to mutter", accept: ["to mumble", "to speak indistinctly", "to say under your breath"], example: { jp: "Бормотать под нос он начал, когда понял, что его никто не слушает.", en: "He began muttering under his breath when he realised nobody was listening to him." }, drill: { jp: "Он начал бормотать под нос", en: "He began muttering under his breath" }, hint: "bar-ma-TAT — stress on the last syllable, and both о reduce to a. Imperfective infinitive; the perfective is пробормотать. ⚠️ Its present mutates: бормочУ, бормОчешь, бормОчут. шептать from unit 80 is deliberate and quiet; бормотать is unclear and usually to yourself." },
        { id: "ru-u81l1-khvastatsya", type: "vocab", front: "хвастаться", reading: "khvastatsya", meaning: "to boast", accept: ["to brag", "to show off", "to blow your own trumpet"], example: { jp: "Хвастаться он не любит, зато о работе брата рассказывает всем.", en: "He does not like boasting, but he tells everyone about his brother's work." }, drill: { jp: "Хвастаться он совсем не любит", en: "He does not like boasting at all" }, hint: "KHVAS-ta-tsya — stress on the first syllable. Imperfective infinitive, reflexive -ся (unit 35's class); the perfective is похвастаться. ⚠️ Takes the INSTRUMENTAL for what is boasted of — «хвастаться деньгами» — unit 32's case. Same root as хвалить from unit 59, which is praising someone ELSE." },
        { id: "ru-u81l1-dogadyvatsya", type: "vocab", front: "догадываться", reading: "dogadyvatsya", meaning: "to guess", accept: ["to work it out", "to suspect the truth", "to have an inkling"], example: { jp: "Догадываться она начала давно, хотя никто ей ничего не говорил.", en: "She began guessing long ago, although nobody told her anything." }, drill: { jp: "Догадываться она начала давно", en: "She began guessing long ago" }, hint: "da-GA-dy-va-tsya — five syllables, stress on GA, and the о reduces to a. Imperfective infinitive, reflexive -ся; the perfective is догадаться. ⚠️ Not guessing at random: it is arriving at the truth without being told. Takes о + the PREPOSITIONAL — «догадываться о цене»." },
        { id: "ru-u81l1-klyastsya", type: "vocab", front: "клясться", reading: "klyastsya", meaning: "to swear an oath", accept: ["to vow", "to give your word", "to swear blind"], example: { jp: "Клясться он готов, а делать то, что обещал, почти никогда.", en: "He is ready to swear to it, and almost never to do what he promised." }, drill: { jp: "Клясться он всегда готов", en: "He is always ready to swear to it" }, hint: "KLYA-stsya — stress on the first syllable, and the стс is one block of consonants. Imperfective infinitive, reflexive -ся; the perfective is поклясться. ⚠️ обещать from unit 30 is an ordinary promise; клясться calls something to witness. Its present is клянУсь, клянЁШЬСЯ — the stem changes outright." },
      ],
    },
    {
      id: "ru-u81l2",
      unit: 81,
      lesson: 2,
      title: "The particles that mark it as someone else's",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Mark a claim as reported with мол or дескать, as doubted with якобы, and ask a rhetorical question with разве or неужели.",
      items: [
        { id: "ru-u81l2-mol", type: "vocab", front: "мол", reading: "mol", meaning: "so he says", accept: ["as he puts it", "he claims", "or so I am told"], example: { jp: "Он сказал, мол, денег нет, и больше об этом говорить не стал.", en: "He said, so he claims, that there is no money, and would not talk about it further." }, drill: { jp: "Он сказал мол денег нет", en: "He said, so he claims, that there is no money" }, hint: "MOL — one syllable. ⚠️ A QUOTATIVE PARTICLE, always inside commas, and it means the words that follow are the OTHER person's — Russian's spoken equivalent of English air quotes. ⚠️ SPOKEN ONLY: it is short for «он молвил», he spoke, and a written report would use `якобы` instead." },
        { id: "ru-u81l2-yakoby", type: "vocab", front: "якобы", reading: "yakoby", meaning: "supposedly", accept: ["allegedly", "so it is claimed", "ostensibly"], example: { jp: "Он якобы болел всю неделю, хотя его видели в кино.", en: "He was supposedly ill all week, although he was seen at the cinema." }, drill: { jp: "Он якобы болел всю неделю", en: "He was supposedly ill all week" }, hint: "YA-ka-by — stress on the first syllable, and the о reduces to a. ⚠️ It does TWO things at once: marks the claim as someone else's AND says the speaker does not believe it. That doubt is not optional, so you cannot use якобы about something you accept. ⚠️ WRITTEN register — this is the word in a newspaper." },
        { id: "ru-u81l2-razve", type: "vocab", front: "разве", reading: "razve", meaning: "surely", accept: ["is it really the case", "can it be that", "surely not"], example: { jp: "Разве можно так говорить с матерью?", en: "Surely you cannot speak to your mother like that?" }, drill: { jp: "Разве можно так говорить", en: "Surely you cannot speak like that" }, hint: "RAZ-ve — stress on the first syllable. ⚠️ Opens a question that EXPECTS the answer no — it is an objection wearing a question's clothes. `ли` from unit 46 asks a neutral yes-or-no; разве already has an opinion." },
        { id: "ru-u81l2-neuzheli", type: "vocab", front: "неужели", reading: "neuzheli", meaning: "can it really be", accept: ["you don't say", "is that really so", "I can hardly believe it"], example: { jp: "Неужели он думал, что никто об этом не узнает?", en: "Can he really have thought that nobody would find out about it?" }, drill: { jp: "Неужели он об этом не знал", en: "Can he really not have known about it" }, hint: "ne-u-ZHE-li — four syllables, stress on ZHE. ⚠️ Surprise rather than objection: разве disputes, неужели is amazed. It opens with не- but is NOT a не+X word — there is no «ужели» in modern Russian." },
        { id: "ru-u81l2-vsyotaki", type: "vocab", front: "всё-таки", reading: "vsyotaki", meaning: "all the same", accept: ["even so", "after all", "in spite of everything"], example: { jp: "Он всё-таки сказал правду, хотя молчал об этом почти год.", en: "He told the truth all the same, although he had said nothing about it for almost a year." }, drill: { jp: "Он всё-таки сказал правду", en: "He told the truth all the same" }, hint: "VSYO-ta-ki — stress on the first syllable, written with a hyphen that the reading drops. ⚠️ Built on всё from unit 3, and kept because «all the same» is nothing a learner would reach from «everything». `однако` from unit 46 contrasts two facts; всё-таки says the thing happened DESPITE everything before it." },
        { id: "ru-u81l2-deskat", type: "vocab", front: "дескать", reading: "deskat", meaning: "so they say", accept: ["as if to say", "by their account", "reportedly"], example: { jp: "Пишут, дескать, экономика растёт, а цены в магазине совсем другие.", en: "They write, so they say, that the economy is growing, and the prices in the shop are quite different." }, drill: { jp: "Пишут дескать экономика растёт", en: "They write, so they say, that the economy is growing" }, hint: "DES-kat — stress on the first syllable. ⚠️ The same job as мол and a shade more sceptical; it is short for «де сказать». ⚠️ SPOKEN AND SLIGHTLY OLD — you will hear it from an older speaker and read it in literature, and it is worth recognising more than using." },
      ],
    },
    {
      id: "ru-u81l3",
      unit: 81,
      lesson: 3,
      title: "Disputing it and dressing it up",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Refute a report, say that facts were distorted or concealed, call out flattery or pretending, and name a piece of gossip.",
      items: [
        { id: "ru-u81l3-oprovergat", type: "vocab", front: "опровергать", reading: "oprovergat", meaning: "to refute", accept: ["to disprove", "to rebut", "to deny a report"], example: { jp: "Опровергать такую новость поздно: её прочитали уже все.", en: "It is too late to refute news like that: everyone has read it already." }, drill: { jp: "Опровергать эту новость поздно", en: "It is too late to refute that news" }, hint: "ap-ra-ver-GAT — four syllables, stress on the last, and both о reduce to a. Imperfective infinitive; the perfective is опровергнуть. ⚠️ Stronger than отрицать from unit 79: отрицать is saying no, опровергать is producing the evidence." },
        { id: "ru-u81l3-iskazhat", type: "vocab", front: "искажать", reading: "iskazhat", meaning: "to distort", accept: ["to twist the facts", "to misrepresent", "to garble"], example: { jp: "Искажать факты он не хотел, но половину просто не сказал.", en: "He did not want to distort the facts, but he simply left half of them out." }, drill: { jp: "Искажать факты он не хотел", en: "He did not want to distort the facts" }, hint: "is-ka-ZHAT — stress on the last syllable. Imperfective infinitive; the perfective is исказить. Of facts, of a face and of sound: «искажённый звук». Its participle искажЁнный is the form you meet most — unit 79's l3 class." },
        { id: "ru-u81l3-skryvat", type: "vocab", front: "скрывать", reading: "skryvat", meaning: "to conceal", accept: ["to hide a fact", "to keep secret", "to cover up"], example: { jp: "Скрывать такое долго очень трудно, и он это знал с самого начала.", en: "Concealing something like that for long is very hard, and he knew it from the start." }, drill: { jp: "Скрывать такое очень трудно", en: "Concealing something like that is very hard" }, hint: "skry-VAT — stress on the last syllable, and the ы is the hard vowel of unit 5’s и/ы contrast (the glyph itself is unit 2). Imperfective infinitive; the perfective is скрыть. ⚠️ THE THIRD -крывать VERB IN THE COURSE, after открывать and закрывать (unit 57), and kept because «to conceal» is not reachable from «to open» or «to shut». прятать from unit 80 hides an OBJECT; скрывать hides a FACT." },
        { id: "ru-u81l3-lstit", type: "vocab", front: "льстить", reading: "lstit", meaning: "to flatter", accept: ["to pay compliments", "to butter someone up", "to flatter someone"], example: { jp: "Льстить начальнику здесь умеют все, и это уже совсем не помогает.", en: "Everyone here knows how to flatter the boss, and it no longer helps at all." }, drill: { jp: "Льстить начальнику умеют все", en: "Everyone knows how to flatter the boss" }, hint: "LSTIT — one syllable, and ⚠️ it opens with льс, which takes practice: say the ль and slide into the с. Imperfective infinitive; the perfective is польстить. Takes the DATIVE for the person — «льстить начальнику» — unit 34's case. хвалить from unit 59 can be honest; льстить cannot." },
        { id: "ru-u81l3-pritvoryatsya", type: "vocab", front: "притворяться", reading: "pritvoryatsya", meaning: "to pretend", accept: ["to feign", "to put it on", "to make believe"], example: { jp: "Притворяться больным он не стал, хотя это было бы очень просто.", en: "He did not pretend to be ill, although that would have been very easy." }, drill: { jp: "Притворяться больным он не стал", en: "He did not pretend to be ill" }, hint: "pri-tva-RYA-tsya — stress on RYA, and the о reduces to a. Imperfective infinitive, reflexive -ся; the perfective is притвориться. ⚠️ Takes the INSTRUMENTAL for what you pretend to be — «притворяться больнЫМ», «притворяться спокойнЫМ» — unit 32's case. Same твор- root as творчество (unit 55), which gives nothing away." },
        { id: "ru-u81l3-spletnya", type: "vocab", front: "сплетня", reading: "spletnya", meaning: "a piece of gossip", accept: ["gossip", "a rumour", "idle talk"], example: { jp: "Сплетня в этой фирме идёт быстрее, чем любой документ.", en: "A piece of gossip travels faster in that firm than any document." }, drill: { jp: "Сплетня идёт быстрее документа", en: "Gossip travels faster than a document" }, hint: "SPLET-nya — stress on the first syllable. FEMININE (-я), and ⚠️ usually PLURAL in real speech: «сплетни». From плести, to weave — gossip is something woven. новость from unit 39 may be true; a сплетня is not claimed to be." },
      ],
    },
    {
      id: "ru-u81l4",
      unit: 81,
      lesson: 4,
      title: "Shades, leanings and pretexts",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a shade of meaning, an inclination, a character trait, a pledge, a pretext and a detail — the abstract nouns a B1 argument needs.",
      items: [
        { id: "ru-u81l4-ottenok", type: "vocab", front: "оттенок", reading: "ottenok", meaning: "a shade of meaning", accept: ["a nuance", "a tint", "a shade of colour"], example: { jp: "В его словах был оттенок упрёка, хотя говорил он совсем спокойно.", en: "There was a shade of reproach in his words, although he spoke quite calmly." }, drill: { jp: "В его словах был оттенок упрёка", en: "There was a shade of reproach in his words" }, hint: "at-TE-nak — stress on TE, the о reduces to a, and the тт is held. MASCULINE, and ⚠️ its о DROPS in other cases: оттенка, оттенку. From тень, a shadow — which u86 cards. Of colour and of meaning alike, exactly as English «shade» works." },
        { id: "ru-u81l4-sklonnost", type: "vocab", front: "склонность", reading: "sklonnost", meaning: "an inclination", accept: ["a tendency", "a leaning", "a bent for something"], example: { jp: "Склонность к спорам у него была всегда, и в школе об этом знали.", en: "He always had an inclination to argue, and they knew it at school." }, drill: { jp: "Склонность к спорам была всегда", en: "The inclination to argue was always there" }, hint: "SKLON-nast — stress on the first syllable, and the final -ть is said t. ⚠️ FEMININE, like every -ость noun. Takes к + the DATIVE for what you lean towards — «склонность к музыке» — unit 34's case. From клонить, to bend, which is not taught, so nothing gives it away." },
        { id: "ru-u81l4-cherta", type: "vocab", front: "черта", reading: "cherta", meaning: "a trait", accept: ["a feature", "a characteristic", "a line drawn"], example: { jp: "Главная черта его характера проста: он никогда не спешит.", en: "The main trait of his character is simple: he never hurries." }, drill: { jp: "Это главная черта его характера", en: "That is the main trait of his character" }, hint: "cher-TA — stress on the last syllable. FEMININE (-а). ⚠️ TWO SENSES: a line you draw, and a feature of a person or thing. свойство from unit 60 is a property of a material; черта is of a character. Different root from чёрный (unit 16)." },
        { id: "ru-u81l4-zalog", type: "vocab", front: "залог", reading: "zalog", meaning: "a pledge", accept: ["security for a loan", "collateral", "a guarantee of something"], example: { jp: "Квартиру он взял в залог, и это оказалось самой большой ошибкой.", en: "He took the flat as security, and that turned out to be the biggest mistake." }, drill: { jp: "Квартиру он взял в залог", en: "He took the flat as security" }, hint: "za-LOG — stress on the last syllable, and the г goes quiet, so it comes out za-LOK. MASCULINE. ⚠️ THREE SENSES, and you have met the third already: collateral for a loan, a guarantee («залог успеха»), and the GRAMMATICAL VOICE — which is the залог in unit 80's own title. One word, three worlds." },
        { id: "ru-u81l4-povod", type: "vocab", front: "повод", reading: "povod", meaning: "a pretext", accept: ["an occasion for something", "grounds", "the reason given"], example: { jp: "Повод был простой: окно осталось открытым, и из-за этого начался спор.", en: "The pretext was a simple one: the window was left open, and because of that an argument began." }, drill: { jp: "Повод был очень простой", en: "The pretext was a very simple one" }, hint: "PO-vat — stress on the first syllable, and the final д goes quiet. MASCULINE. ⚠️ Russian keeps повод and причина (unit 34) strictly apart: причина is the real cause, повод is what was SAID to be the cause. A newspaper sentence often names both." },
        { id: "ru-u81l4-podrobnost", type: "vocab", front: "подробность", reading: "podrobnost", meaning: "a detail", accept: ["a particular", "a point of detail", "a fine point"], example: { jp: "Каждая подробность здесь важна, даже самая мелкая.", en: "Every detail matters here, even the smallest one." }, drill: { jp: "Каждая подробность здесь важна", en: "Every detail matters here" }, hint: "pad-ROB-nast — stress on ROB, the о reduces to a, and the final -ть is said t. ⚠️ FEMININE, like every -ость noun. Usually PLURAL: «подробности», the details. From дробить, to break small, which is not taught. ⚠️ A -ность noun is the standard way Russian turns an adjective into an abstract noun: подробный → подробность, as склонный → склонность above." },
      ],
    },
  ],
};
