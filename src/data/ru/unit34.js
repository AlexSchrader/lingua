// RU Unit 34 — Дательный падеж ("The dative case") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Conventions: ru/unit1.js §1–§10 and §A–§D, plus ru/unit31.js §1–§7 for the A2
// band. This unit closes unit1.js §5's "DATIVE — FIXED FRAMES ONLY — мне
// нравится, сколько тебе лет. Not taught as a paradigm at A1."
//
// ⚠️ THE SCAFFOLD TITLE WAS "Work and school" AND A1 ALREADY WROTE IT — u25
// Работа и учёба (офис · начальник · коллега · зарплата · отпуск · фирма · урок ·
// экзамен · задание · класс · тетрадь · оценка). Rethemed to the dative, with the
// workplace kept as the CARRIER rather than the subject: every verb in l1 is one
// you use at work (звонить начальнику, объяснять группе, отправлять письма) and
// the nouns in l4 are what people ask of each other. unit31.js §6 has the table.
//
// FREE: к
// ⚠️ THAT FREE LINE IS LOAD-BEARING AND HERE IS WHY. `к` is THE dative
// preposition — просьба к тебе, идти к врачу — and it is ONE LETTER, so
// unit1.js §5's mechanical limit applies: `canCloze` needs a front of at least
// two characters, so к can never be a card in this course. It is declared FREE,
// which is the same treatment §5 records for в · с · у · о: a learner meets it in
// sentences and is never asked to produce it in isolation. Declaring it is a
// CLAIM and this is the claim — к appears in examples and hints from here on and
// has no card anywhere.
//
// HOW THE FOUR LESSONS DIVIDE THE CASE:
//   l1  verbs where the dative is the PERSON ADDRESSED — you tell/send/explain TO
//   l2  the subjectless dative + adverb — мне больно, ему страшно. Russian's way
//       of saying how someone feels, and it has no subject at all
//   l3  `по`, the dative preposition, and the verbs that demand the case
//   l4  the nouns of asking and needing, where the dative is who is asked
//
// ⚠️ FOUR VERBS REFUSED, and every one of them for unit1.js §D's reason — the
// noun or adjective is already taught and the derived word gives the learner
// nothing. Named so a later block does not spend a slot rediscovering it:
//   `советовать` — REFUSED beside u30 `совет` ("advice"). This is exactly the
//        работа/работать and разговор/говорить shape §D already refused, and it
//        was refused here for consistency even though it cost a genuinely useful
//        dative verb. `отправлять` took its place in l1. A later block that wants
//        to revisit it has the whole argument here.
//   `радоваться` — REFUSED beside u7 `рад` ("glad"). Same shape.
//   `доверять` — REFUSED beside u22 `верить` ("to believe", whose accept list
//        already carries "to trust").
//   `принадлежать` — REFUSED for a DIFFERENT and more interesting reason, and it
//        is the §4 test: its infinitive has no natural short sentence a learner
//        will ever say, so it could carry no legal `drill` (3–8 tokens, the front
//        verbatim, grammatical). That is precisely the test unit1.js §4 uses to
//        justify a 3rd-person exception — and §4 says the A1 count of TWO is
//        final and a third "is not authorised". So the verb is not carded at all
//        rather than smuggled in as `принадлежит`. `предлагать` took its place.
//   ALSO REFUSED: `польза` (vs u25 полезный) · `отказ` and `согласие` (the nouns
//        of u35's отказываться and соглашаться — one of each pair, not both) ·
//        `разрешение` and `запрет` (the nouns of l3's verbs, same rule).
//
// ⚠️ THREE SAME-ROOT PAIRS ALLOWED ON PURPOSE, so nobody "fixes" them. §D's test
// is whether knowing one hands you the other, and for these three it does not:
//   `разрешать` beside u24 `решать` — one root -реш-, and раз- turns deciding into
//        permitting. A learner who knows "to decide" does not reach "to allow".
//        The same invisibility u30 recorded for памятник beside помнить.
//   `скучать` beside u6 `скучно` — "boring" does not hand you "to miss someone".
//        Genuinely different feelings on one root, and the hint says so.
//   `нужный` beside u5 `нужно` — the adjective/adverb pair unit1.js §B settled,
//        and the glosses differ by WORD as §B demands: нужно is "it is necessary",
//        нужный is "needed".
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT34 = {
  id: "ru-u34",
  lang: "ru",
  title: "Дательный падеж",
  order: 34,
  stage: "a2",
  lessons: [
    {
      id: "ru-u34l1",
      unit: 34,
      lesson: 1,
      title: "Telling and sending to someone",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say who you are ringing, explaining something to, or sending something to, putting that person into the dative.",
      items: [
        { id: "ru-u34l1-zvonit", type: "vocab", front: "звонить", reading: "zvonit", meaning: "to ring someone up", accept: ["to phone", "to call someone", "to give someone a ring"], example: { jp: "Я хочу звонить маме каждый вечер.", en: "I want to ring my mum every evening." }, drill: { jp: "Кто хочет звонить директору", en: "Who wants to ring the director" }, hint: "zva-NIT — stress on the last syllable. ★ THE dative verb: you ring TO someone — звонить мамЕ, звонить директорУ, never маму. Masculine nouns take -у, feminine -е." },
        { id: "ru-u34l1-obyasnyat", type: "vocab", front: "объяснять", reading: "obyasnyat", meaning: "to explain", accept: ["to make clear", "to spell out", "to account for"], example: { jp: "Учитель хочет объяснять это нашей группе.", en: "The teacher wants to explain this to our group." }, drill: { jp: "Кто хочет объяснять это детям", en: "Who wants to explain this to the children" }, hint: "ab-yas-NYAT — stress on the last syllable, and the ъ makes no sound: it just keeps б from swallowing я. Dative for the listener — объяснять детЯМ, объяснять мнЕ — while what you explain stays accusative." },
        { id: "ru-u34l1-otpravlyat", type: "vocab", front: "отправлять", reading: "otpravlyat", meaning: "to send off", accept: ["to dispatch", "to post", "to send away"], example: { jp: "Я хочу отправлять письма бабушке каждый месяц.", en: "I want to send letters off to my grandmother every month." }, drill: { jp: "Он хочет отправлять деньги брату", en: "He wants to send money off to his brother" }, hint: "at-prav-LYAT — stress on the last syllable. Dative for who it goes to: отправлять бабушкЕ, братУ. The thing sent stays accusative — письмо, деньги." },
        { id: "ru-u34l1-rasskazyvat", type: "vocab", front: "рассказывать", reading: "rasskazyvat", meaning: "to tell a story", accept: ["to recount", "to relate", "to tell at length"], example: { jp: "Бабушка любит рассказывать детям старые сказки.", en: "Grandmother likes telling the children old stories." }, drill: { jp: "Он хочет рассказывать нам сказку", en: "He wants to tell us a story" }, hint: "ras-KA-zy-vat — stress on KA, and the double сс is held a beat longer. Dative for the listener: рассказывать детЯМ. Three verbs, three jobs — говорить is to speak, сказать is to say one thing, рассказывать is to tell at length." },
        { id: "ru-u34l1-povtoryat", type: "vocab", front: "повторять", reading: "povtoryat", meaning: "to repeat", accept: ["to say again", "to go over again", "to revise"], example: { jp: "Учитель должен повторять это каждому студенту.", en: "The teacher has to repeat this to every student." }, drill: { jp: "Он хочет повторять каждое слово", en: "He wants to repeat every word" }, hint: "pav-ta-RYAT — stress on the last syllable, and both о reduce to a. Dative for the person you repeat it to: повторять студентУ. It is also what you do with a lesson before an exam." },
        { id: "ru-u34l1-meshat", type: "vocab", front: "мешать", reading: "meshat", meaning: "to get in the way of", accept: ["to disturb", "to bother", "to hinder"], example: { jp: "Телевизор мешает моей сестре работать.", en: "The television is getting in my sister's way while she works." }, drill: { jp: "Я не хочу мешать тебе", en: "I do not want to get in your way" }, hint: "me-SHAT — stress on the last syllable. Dative for whoever is hindered: мешать сестрЕ, мешать тебЕ. ⚠️ Its other life is «to stir» a cup of tea, and there it takes the accusative instead." },
      ],
    },
    {
      id: "ru-u34l2",
      unit: 34,
      lesson: 2,
      title: "How it feels to someone",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how someone feels using Russian's subjectless pattern — a person in the dative and an adverb, with no verb and no I at all.",
      items: [
        { id: "ru-u34l2-bolno", type: "vocab", front: "больно", reading: "bolno", meaning: "it hurts", accept: ["painful", "it is painful", "sore"], example: { jp: "Мне больно, когда я долго работаю.", en: "It hurts me when I work for a long time." }, drill: { jp: "Сегодня ей больно", en: "Today it hurts her" }, hint: "BOL-na — stress on the first syllable, and the ь softens the l. ★ NO SUBJECT, JUST A DATIVE: мнЕ больно, емУ больно. Russian has no «I hurt» — the person goes into the dative and the adverb does the rest." },
        { id: "ru-u34l2-strashno", type: "vocab", front: "страшно", reading: "strashno", meaning: "it is frightening", accept: ["scary", "frightened", "it is scary"], example: { jp: "Мне страшно, когда я один в доме.", en: "I feel frightened when I am alone in the house." }, drill: { jp: "Ему страшно в этом лесу", en: "He feels frightened in this forest" }, hint: "STRASH-na — stress on the first syllable. Dative again: мнЕ страшно means I am frightened. The noun страх is unit 28's; this is the state." },
        { id: "ru-u34l2-grustno", type: "vocab", front: "грустно", reading: "grustno", meaning: "it is sad", accept: ["sad", "I feel sad", "miserable"], example: { jp: "Ей грустно, и она не хочет говорить.", en: "She feels sad, and she does not want to talk." }, drill: { jp: "Нам грустно без тебя", en: "We feel sad without you" }, hint: "GRUS-na — stress on the first syllable, and ⚠️ the т is SILENT: say GROOS-na, never GROOST-na. Dative: емУ грустно. The adjective грустный is unit 28's." },
        { id: "ru-u34l2-stydno", type: "vocab", front: "стыдно", reading: "stydno", meaning: "it is shameful", accept: ["ashamed", "I feel ashamed", "embarrassing"], example: { jp: "Ему стыдно за эту плохую работу.", en: "He is ashamed of this bad work." }, drill: { jp: "Мне стыдно перед тобой", en: "I feel ashamed in front of you" }, hint: "STYD-na — stress on the first syllable, with the tight ы from unit 5. Dative: мнЕ стыдно. Add за plus the accusative for what you are ashamed OF." },
        { id: "ru-u34l2-obidno", type: "vocab", front: "обидно", reading: "obidno", meaning: "it is hurtful", accept: ["it feels unfair", "I feel hurt", "galling"], example: { jp: "Ей обидно, когда никто не звонит.", en: "She feels hurt when nobody rings." }, drill: { jp: "Мне обидно и очень грустно", en: "I feel hurt and very sad" }, hint: "a-BID-na — stress on BID. Dative: мнЕ обидно. Not pain (больно) and not sadness (грустно) but the sting of being treated unfairly — the feeling of being let down." },
        { id: "ru-u34l2-zharko", type: "vocab", front: "жарко", reading: "zharko", meaning: "it is hot", accept: ["hot", "I am hot", "swelteringly hot"], example: { jp: "Летом в этом городе очень жарко.", en: "In summer it is very hot in this town." }, drill: { jp: "Мне жарко в этой куртке", en: "I am hot in this jacket" }, hint: "ZHAR-ka — stress on the first syllable. Dative for the person: мнЕ жарко. Note летом in the example — a bare instrumental meaning «in summer», straight from unit 32." },
      ],
    },
    {
      id: "ru-u34l3",
      unit: 34,
      lesson: 3,
      title: "По, and the verbs that demand the case",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use по to say where you wander and how you make contact, and use the verbs that take a dative object where English takes a direct one.",
      items: [
        { id: "ru-u34l3-po", type: "vocab", front: "по", reading: "po", meaning: "around", accept: ["along", "over the surface of", "by means of", "according to"], example: { jp: "Мы гуляем по городу каждый вечер.", en: "We walk around the town every evening." }, drill: { jp: "Я звоню по телефону", en: "I am ringing on the phone" }, hint: "One syllable, PO. ★ THE dative preposition. Around or along a surface — по городУ, по улицЕ. Also «by means of» — по телефону, по интернету. And it is the «for» that скучать needs." },
        { id: "ru-u34l3-udivlyatsya", type: "vocab", front: "удивляться", reading: "udivlyatsya", meaning: "to be surprised at", accept: ["to be amazed by", "to wonder at", "to be taken aback by"], example: { jp: "Все удивляются нашему новому дому.", en: "Everyone is surprised at our new house." }, drill: { jp: "Можно удивляться этой цене", en: "One may well be surprised at this price" }, hint: "u-div-LYAT-sya — stress on LYAT. ★ Dative, never accusative: удивляться домУ, удивляться ценЕ. The -ся says the surprise happens TO you rather than being something you do." },
        { id: "ru-u34l3-skuchat", type: "vocab", front: "скучать", reading: "skuchat", meaning: "to miss someone", accept: ["to long for", "to pine for", "to be bored"], example: { jp: "Я скучаю по моей сестре и по маме.", en: "I miss my sister and my mum." }, drill: { jp: "Я не хочу скучать по дому", en: "I do not want to miss home" }, hint: "sku-CHAT — stress on the last syllable. ★ It needs по plus the DATIVE: скучать по сестрЕ, по домУ. Same root as скучно, boring — but a completely different feeling, and knowing one does not give you the other." },
        { id: "ru-u34l3-predlagat", type: "vocab", front: "предлагать", reading: "predlagat", meaning: "to offer", accept: ["to propose", "to suggest", "to put forward"], example: { jp: "Наш руководитель хочет предлагать нам новую работу.", en: "Our manager wants to offer us new work." }, drill: { jp: "Он хочет предлагать нам чай", en: "He wants to offer us tea" }, hint: "pred-la-GAT — stress on the last syllable. Dative for the person offered something: предлагать нам, предлагать сестрЕ. The thing offered stays accusative." },
        { id: "ru-u34l3-razreshat", type: "vocab", front: "разрешать", reading: "razreshat", meaning: "to allow", accept: ["to permit", "to let someone", "to give leave"], example: { jp: "Мама не разрешает детям смотреть телевизор.", en: "Mum does not allow the children to watch television." }, drill: { jp: "Я не хочу разрешать это", en: "I do not want to allow this" }, hint: "raz-re-SHAT — stress on the last syllable. Dative for the person allowed: разрешать детЯМ. Same root as решать, to decide, but раз- turns deciding into permitting — a link English hides completely." },
        { id: "ru-u34l3-zapreshchat", type: "vocab", front: "запрещать", reading: "zapreshchat", meaning: "to forbid", accept: ["to prohibit", "to ban", "to rule out"], example: { jp: "Здесь запрещают курить и есть.", en: "Smoking and eating are forbidden here." }, drill: { jp: "Нельзя запрещать детям играть", en: "One must not forbid children to play" }, hint: "za-pre-SHCHAT — stress on the last syllable, and щ is one long soft sh, not sh plus ch. Dative for the person forbidden: запрещать детЯМ. It is the verb behind every Russian sign that says НЕЛЬЗЯ." },
      ],
    },
    {
      id: "ru-u34l4",
      unit: 34,
      lesson: 4,
      title: "What someone needs and asks for",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Make a request of someone and state a condition or a reason, naming who the request is made of with к plus the dative.",
      items: [
        { id: "ru-u34l4-nuzhnyy", type: "vocab", front: "нужный", reading: "nuzhnyy", meaning: "needed", accept: ["necessary", "the one you need", "required"], example: { jp: "Это очень нужный инструмент для работы.", en: "This is a very necessary tool for the work." }, drill: { jp: "Это нужный и хороший план", en: "This is a needed and good plan" }, hint: "NUZH-nyy — stress on the first syllable. The ADJECTIVE beside the adverb нужно from unit 5: нужно is «it is necessary», нужный is «needed». Its short form takes the dative — нам нужен этот дом." },
        { id: "ru-u34l4-prosba", type: "vocab", front: "просьба", reading: "prosba", meaning: "a request", accept: ["a favour to ask", "an appeal", "something asked"], example: { jp: "У меня есть просьба к тебе.", en: "I have a request for you." }, drill: { jp: "Это моя последняя просьба", en: "This is my last request" }, hint: "PROZ-ba — stress on the first syllable, and сь in front of б is said z. Feminine (-а). A request, made к plus the DATIVE: просьба к тебЕ, к директорУ." },
        { id: "ru-u34l4-trebovanie", type: "vocab", front: "требование", reading: "trebovanie", meaning: "a demand", accept: ["a requirement", "a condition insisted on", "what is asked"], example: { jp: "Это новое требование нашего начальника.", en: "This is our boss's new demand." }, drill: { jp: "Это требование очень трудное", en: "This demand is very hard" }, hint: "TRE-ba-va-ni-ye — stress on the first syllable. Neuter, like every noun in -ие. Russian says «требование к кому» — the demand made OF someone — with the dative." },
        { id: "ru-u34l4-vozmozhnost", type: "vocab", front: "возможность", reading: "vozmozhnost", meaning: "a chance", accept: ["an opportunity", "a possibility", "the option"], example: { jp: "У меня есть возможность работать дома.", en: "I have the chance to work at home." }, drill: { jp: "Это хорошая возможность для нас", en: "This is a good chance for us" }, hint: "vaz-MOZH-nast — stress on MOZH. FEMININE, and this one you can trust: every noun ending -ость is feminine, which is one of the few endings in Russian that never lies." },
        { id: "ru-u34l4-uslovie", type: "vocab", front: "условие", reading: "uslovie", meaning: "a condition", accept: ["a term of an agreement", "a stipulation", "a proviso"], example: { jp: "У нас одно условие: работать вместе.", en: "We have one condition: to work together." }, drill: { jp: "Это очень трудное условие", en: "This is a very hard condition" }, hint: "us-LO-vi-ye — stress on LO. Neuter (-ие). One term of an agreement. In the plural, условия, it means the conditions you live or work in." },
        { id: "ru-u34l4-prichina", type: "vocab", front: "причина", reading: "prichina", meaning: "a reason", accept: ["a cause", "the why of it", "grounds"], example: { jp: "Какая причина этой большой проблемы?", en: "What is the reason for this big problem?" }, drill: { jp: "Это очень важная причина", en: "This is a very important reason" }, hint: "pri-CHI-na — stress on CHI. Feminine (-а). A reason or a cause. What it is the reason OF goes into the genitive: причина проблемЫ." },
      ],
    },
  ],
};
