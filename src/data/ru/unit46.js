// RU Unit 46 — Сложное предложение ("The complex sentence") — A2
// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 2 (u41–u50). Binding: ru/unit1.js §1–§10 and §A–§D, then ru/unit31.js
// §1–§7. The block-wide record is in ru/unit50.js §B1–§B7.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Grammar 4 — compound and linked clauses", AND BLOCK 1
// FLAGGED THIS SLOT AS DOUBLE-BOOKED BY NAME. ru/unit31.js §6's u39 row says:
// "A1's u19l3 owns the connectors (но · или · если · поэтому · значит), and
// block 2's u46 is «compound and linked clauses»" — which is why block 1 rethemed
// its own u39 to о/про/при and opinion nouns rather than take this ground. So the
// THEME here is intact; only the title had to change, because `src/data/lint.js`
// hard-errors on /^Grammar \d+$/ once a unit is authored and ru/unit1.js §10
// requires a Russian title.
//
// ⚠️ AND THE SLOT NAME IS STILL WRONG FOR RUSSIAN, in the way ru/unit1.js §10
// records for u23: "compound" (сложносочинённое) and "linked/subordinate"
// (сложноподчинённое) are two different Russian sentence types, and A1's u19l3
// already taught the COMPOUND one — но, или, поэтому are coordinating. What is
// unwritten is SUBORDINATION: the clause that cannot stand alone. Retitled
// Сложное предложение and rethemed to that.
//
// THE MEASURED HOLE. A learner arriving here has exactly five clause links — но ·
// или · если · поэтому · значит (u19l3) — plus когда · куда · зачем (u22), потому
// что (u19) and который (u11). With that you can chain two statements and give one
// reason. You cannot state a PURPOSE (чтобы), concede anything (хотя), report a
// yes-or-no question (ли), mark a comparison as hypothetical (будто), contrast two
// halves of your own sentence (зато, однако, наоборот), or open a clause with a
// verb that requires one. Those are this unit's 24.
//
// HOW GRAMMAR IS MODELLED HERE, and it is the house rule, not a choice: CLAUDE.md
// says grammar has no item type, so it is authored as FUNCTION-WORD VOCAB whose
// example sentences carry the pattern. Eighteen of these 24 cards are conjunctions
// and particles; the other six are VERBS THAT GOVERN A WHOLE CLAUSE, which is the
// same teaching by the other end.
//
// FIVE CALLS I MADE, with the reasoning:
//   `против` is a SEVENTH GENITIVE PREPOSITION, after the six block 1 taught as a
//        set at u33l1 (из · для · без · до · от · около). That is an extension,
//        not a re-teach: u33's canDo is the set of six and unit1.js §5 lists
//        exactly those six as the A2 lesson. против governs the same case, is
//        needed for contrast, and its hint points back at u33.
//   `пока` COULD NOT BE CARDED and «while» is therefore taught in a hint only.
//        пока is TAKEN at u7l1, glossed "bye" — which is the same word, so a
//        second card would be a duplicate front. `хотя`'s hint carries the
//        temporal «пока» sense instead.
//   `именно` is glossed "precisely", NOT "exactly", because u22 `точно` already
//        holds "exactly" and `normalizeMeaning` would make them one prompt.
//        Measured with the block's own probe before the card was written.
//   `хоть` was REFUSED — it is the short form of `хотя`, carded at l1. One word.
//   `разве` · `неужели` · `поскольку` · `словно` — refused. разве is раз (u6l1)
//        plus -ве; неужели is не + X, which ru/unit38.js's header refuses;
//        поскольку is по + сколько (u11); словно shares слов- with u6 `слово`.
//
// ⚠️ SIX CLAUSE VERBS, AND WHY THESE SIX. Every verb here is an IMPERFECTIVE
// INFINITIVE (unit1.js §4; block 2 needs no perfectives, so ru/unit31.js §1's
// gloss problem never arises). Refused from the same shortlist:
//   `подтверждать` — vs `утверждать` at l4. One prefix apart on one root IN THE
//        SAME LESSON, which is the включать/выключать case (see u43's header).
//   `означать` — vs u19 `значит`, carded. `замечать` — vs u39 `замечание`.
//   `доказывать` — vs u39 `доказательство`. `спорить` — vs u39 `спор`.
//   `оказаться` · `сомневаться` — both TAKEN by block 1 at u35.
//   `сообщать` — vs `сообщение`, which I card at u43l3. Same root, same block.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT46 = {
  id: "ru-u46",
  lang: "ru",
  title: "Сложное предложение",
  order: 46,
  stage: "a2",
  lessons: [
    {
      id: "ru-u46l1",
      unit: 46,
      lesson: 1,
      title: "Saying why, and saying in spite of",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Attach a purpose clause with чтобы, concede a point with хотя, and turn your own sentence around with зато, однако, наоборот or против.",
      items: [
        { id: "ru-u46l1-chtoby", type: "vocab", front: "чтобы", reading: "chtoby", meaning: "in order to", accept: ["so that", "so as to", "in order that"], example: { jp: "Я работаю, чтобы зарабатывать деньги.", en: "I work in order to earn money." }, drill: { jp: "Я читаю чтобы знать больше", en: "I read in order to know more" }, hint: "SHTO-by — stress on the first syllable, and что is said SHTO, not CHTO (unit 6). ⚠️ THE VERB AFTER IT: infinitive when the subject is the same person («я читаю, чтобы знать»), but PAST TENSE when it changes («я хочу, чтобы ты знал»). Russian has no other way to say it." },
        { id: "ru-u46l1-khotya", type: "vocab", front: "хотя", reading: "khotya", meaning: "although", accept: ["even though", "despite the fact that", "albeit"], example: { jp: "Хотя было поздно, он ещё работал.", en: "Although it was late, he was still working." }, drill: { jp: "Он работал хотя было поздно", en: "He was working although it was late" }, hint: "kha-TYA — stress on the last syllable, the о reduces to a. ⚠️ Nothing to do with хотеть (unit 4) despite the letters. Its short form хоть is not taught separately — it is the same word. And note that «while» in the time sense is ПОКА, which unit 7 already carded as «bye»: same word, two jobs." },
        { id: "ru-u46l1-zato", type: "vocab", front: "зато", reading: "zato", meaning: "but on the other hand", accept: ["then again", "to make up for it", "on the plus side"], example: { jp: "Эта работа трудная, зато очень интересная.", en: "This job is hard, but on the other hand it is very interesting." }, drill: { jp: "Это трудно зато очень интересно", en: "It is hard but on the other hand very interesting" }, hint: "za-TO — stress on the last syllable, so the о is NOT reduced. It is не но: но just contrasts, зато says the second half COMPENSATES for the first. Russian reaches for it constantly." },
        { id: "ru-u46l1-odnako", type: "vocab", front: "однако", reading: "odnako", meaning: "however", accept: ["nevertheless", "and yet", "all the same"], example: { jp: "Он обещал, однако ничего не сделал.", en: "He promised; however, he did nothing." }, drill: { jp: "Он обещал однако ничего не сделал", en: "He promised however he did nothing" }, hint: "ad-NA-ka — stress on NA, and both other о reduce to a. More formal than но, and it can stand at the start of a sentence where но usually cannot. Built on один (unit 11), oddly enough." },
        { id: "ru-u46l1-naoborot", type: "vocab", front: "наоборот", reading: "naoborot", meaning: "the other way round", accept: ["on the contrary", "quite the opposite", "vice versa"], example: { jp: "Не холодно, а наоборот очень тепло.", en: "It is not cold — quite the opposite, it is very warm." }, drill: { jp: "Было не холодно а наоборот тепло", en: "It was not cold but on the contrary warm" }, hint: "na-a-ba-ROT — four syllables, stress on ROT, and all three о before it reduce to a. It is one word, built on оборот, a turn. Used alone it means «the other way round!» as a whole reply." },
        { id: "ru-u46l1-protiv", type: "vocab", front: "против", reading: "protiv", meaning: "against", accept: ["opposed to", "facing", "counter to"], example: { jp: "Все были против этого плана.", en: "Everyone was against that plan." }, drill: { jp: "Мы были против этого плана", en: "We were against that plan" }, hint: "PRO-tif — stress on the first syllable, so the о is not reduced, and the в devoices to f. ⚠️ IT GOVERNS THE GENITIVE — против планА, против негО — which makes it the seventh genitive preposition after unit 33's six." },
      ],
    },
    {
      id: "ru-u46l2",
      unit: 46,
      lesson: 2,
      title: "Reporting a question, and hedging",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Report a yes-or-no question with ли, say something looked as if it were so with будто, and colour a statement with именно, вообще, ведь or кстати.",
      items: [
        { id: "ru-u46l2-li", type: "vocab", front: "ли", reading: "li", meaning: "whether", accept: ["if (in a reported question)", "whether or not"], example: { jp: "Я не знаю, будет ли он дома.", en: "I do not know whether he will be at home." }, drill: { jp: "Он спрашивает знаю ли я", en: "He is asking whether I know" }, hint: "Unstressed, and it never takes stress — it leans on the word before it. ⚠️ WORD ORDER IS THE WHOLE LESSON: the thing being questioned goes FIRST, then ли. «Знаешь ли ты» = do you know; «он ли это» = is it him. Not the same word as если (unit 19), which is a real «if»." },
        { id: "ru-u46l2-budto", type: "vocab", front: "будто", reading: "budto", meaning: "as if", accept: ["as though", "like it were", "supposedly"], example: { jp: "Он говорил так, будто всё знал.", en: "He spoke as if he knew everything." }, drill: { jp: "Он говорил будто всё знал", en: "He spoke as if he knew everything" }, hint: "BUT-ta — stress on the first syllable, and the д devoices to t before т. Often doubled as «как будто», which means the same thing. It marks what follows as NOT actually true." },
        { id: "ru-u46l2-imenno", type: "vocab", front: "именно", reading: "imenno", meaning: "precisely", accept: ["exactly this one", "just this", "namely"], example: { jp: "Именно этот сайт был мне нужен.", en: "That is precisely the website I needed." }, drill: { jp: "Именно этот файл был нужен", en: "That is precisely the file that was needed" }, hint: "I-men-na — stress on the FIRST syllable. ⚠️ Glossed «precisely» and not «exactly», because точно at unit 22 already holds that word. It points at one thing out of several: «именно ты» = you and nobody else. Alone it is a whole reply: «Именно!» — exactly so." },
        { id: "ru-u46l2-voobshche", type: "vocab", front: "вообще", reading: "voobshche", meaning: "in general", accept: ["generally", "on the whole", "at all"], example: { jp: "Он вообще не читает газеты.", en: "He does not read newspapers at all." }, drill: { jp: "Она вообще не смотрит телевизор", en: "She does not watch television at all" }, hint: "va-ap-SHCHYE — stress on the LAST syllable; the оо is two separate vowels and щ is one long soft sh. ⚠️ Two opposite-feeling jobs: «вообще» alone means «broadly speaking», but with не it means «not at all»." },
        { id: "ru-u46l2-ved", type: "vocab", front: "ведь", reading: "ved", meaning: "after all", accept: ["you know", "surely", "as you are aware"], example: { jp: "Не спеши, ведь времени ещё много.", en: "Do not hurry — there is plenty of time after all." }, drill: { jp: "Ведь времени ещё очень много", en: "After all there is still plenty of time" }, hint: "One syllable, VYET — the ь softens the д, which also devoices to t. It appeals to something both speakers already know, which is why English has to pick between «after all», «you know» and «surely» to translate it." },
        { id: "ru-u46l2-kstati", type: "vocab", front: "кстати", reading: "kstati", meaning: "by the way", accept: ["incidentally", "come to think of it", "as it happens"], example: { jp: "Кстати, этот обзор был очень полезный.", en: "By the way, that review was very useful." }, drill: { jp: "Кстати эта статья была интересная", en: "By the way that article was interesting" }, hint: "KSTA-ti — stress on the first syllable, and the кс cluster opens the word. From к + стать: «to the point». It also means «handy» — «это кстати» is «that comes in useful»." },
      ],
    },
    {
      id: "ru-u46l3",
      unit: 46,
      lesson: 3,
      title: "Summing up, and adding one more thing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Round off a chain of sentences with итак or впрочем, add a further point with причём or также, and weaken a claim with едва or чуть.",
      items: [
        { id: "ru-u46l3-itak", type: "vocab", front: "итак", reading: "itak", meaning: "so then", accept: ["and so", "to sum up", "right then"], example: { jp: "Итак, все документы уже готовы.", en: "So then, all the documents are ready." }, drill: { jp: "Итак все документы уже готовы", en: "So then all the documents are ready" }, hint: "i-TAK — stress on the last syllable. One word, built from и + так. It opens the sentence that draws the conclusion, which is why Russian lecturers say it before every summary." },
        { id: "ru-u46l3-vprochem", type: "vocab", front: "впрочем", reading: "vprochem", meaning: "though", accept: ["mind you", "then again", "on second thoughts"], example: { jp: "Это дорого, впрочем очень выгодно.", en: "It is expensive — though very much worth it." }, drill: { jp: "Это дорого впрочем очень выгодно", en: "It is expensive though very much worth it" }, hint: "VPRO-chem — stress on the first syllable, so the о is not reduced. It softens what you have just said rather than contradicting it, the way English «mind you» does. Not однако, which is a firmer «however»." },
        { id: "ru-u46l3-prichyom", type: "vocab", front: "причём", reading: "prichyom", meaning: "what is more", accept: ["and moreover", "and at that", "besides which"], example: { jp: "Она работает быстро, причём очень точно.", en: "She works fast, and what is more very accurately." }, drill: { jp: "Она работает быстро причём очень точно", en: "She works fast and what is more very accurately" }, hint: "pri-CHOM — stress on the LAST syllable, where the ё always is. Written as one word in this sense. ⚠️ Two words «при чём» is a different thing entirely: «при чём здесь я?» — what have I got to do with it?" },
        { id: "ru-u46l3-takzhe", type: "vocab", front: "также", reading: "takzhe", meaning: "as well", accept: ["in addition", "likewise", "and also"], example: { jp: "Мы читаем газеты, а также журналы.", en: "We read newspapers, and magazines as well." }, drill: { jp: "Мы читаем газеты а также журналы", en: "We read newspapers and magazines as well" }, hint: "TAK-zhe — stress on the first syllable. ⚠️ Not тоже from unit 5, which is «also» about the SUBJECT («я тоже читаю» — me too). также adds another THING to the same subject, and usually follows а or и." },
        { id: "ru-u46l3-edva", type: "vocab", front: "едва", reading: "edva", meaning: "hardly", accept: ["barely", "scarcely", "only just"], example: { jp: "Я едва понимаю этот текст.", en: "I hardly understand this text." }, drill: { jp: "Он едва знает эти правила", en: "He hardly knows these rules" }, hint: "yed-VA — stress on the last syllable, and the е at the start is ye. It says the thing only just happened or only just holds. «Едва ли» together means «hardly likely»." },
        { id: "ru-u46l3-chut", type: "vocab", front: "чуть", reading: "chut", meaning: "slightly", accept: ["a tiny bit", "just a touch", "barely at all"], example: { jp: "Этот экран чуть больше моего.", en: "This screen is slightly bigger than mine." }, drill: { jp: "Этот файл чуть больше моего", en: "This file is slightly bigger than mine" }, hint: "One syllable, CHUT, with a soft final т. Smaller than немного (unit 7): немного is «a little», чуть is «a hair's breadth». «Чуть не» means «very nearly» — «я чуть не забыл»." },
      ],
    },
    {
      id: "ru-u46l4",
      unit: 46,
      lesson: 4,
      title: "Verbs that need a whole clause after them",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the six verbs that cannot finish a sentence on their own — it depends on, it concerns, to establish, to check a detail, to claim, to discuss — and put a что or ли clause after each.",
      items: [
        { id: "ru-u46l4-zaviset", type: "vocab", front: "зависеть", reading: "zaviset", meaning: "to depend", accept: ["to be conditional on", "to hinge on", "to rest on"], example: { jp: "Всё будет зависеть от цены.", en: "Everything will depend on the price." }, drill: { jp: "Это будет зависеть от цены", en: "That will depend on the price" }, hint: "za-VI-set — stress on VI. Second conjugation: зависит, зависят. ⚠️ IT TAKES от + GENITIVE, always — зависеть ОТ ценЫ, never «зависеть цену». от is unit 33's. «Зависит от того, что…» is how a whole clause is hung off it." },
        { id: "ru-u46l4-kasatsya", type: "vocab", front: "касаться", reading: "kasatsya", meaning: "to concern", accept: ["to be about", "to have to do with", "to touch on"], example: { jp: "Этот вопрос касается всех сотрудников.", en: "That question concerns all the staff." }, drill: { jp: "Это должно касаться всех клиентов", en: "That has to concern all the clients" }, hint: "ka-SA-tsa — stress on SA, and -ться is said -tsa. A reflexive verb of unit 35's class. ⚠️ IT TAKES THE GENITIVE with no preposition: касается сотрудникОВ. «Что касается…» is «as regards…»." },
        { id: "ru-u46l4-vyyasnyat", type: "vocab", front: "выяснять", reading: "vyyasnyat", meaning: "to establish", accept: ["to find out for certain", "to clear up", "to ascertain"], example: { jp: "Нужно выяснять каждую цифру очень точно.", en: "Every figure has to be established very precisely." }, drill: { jp: "Мы будем выяснять эти цифры", en: "We will establish these figures" }, hint: "vy-yas-NYAT — stress on the last syllable, and the two я are separate syllables. First conjugation: выясняю, выясняешь, выясняют. Same root as объяснять (unit 34) but вы- rather than объ-: объяснять is making it clear TO SOMEONE, выяснять is making it clear TO YOURSELF." },
        { id: "ru-u46l4-utochnyat", type: "vocab", front: "уточнять", reading: "utochnyat", meaning: "to check a detail", accept: ["to clarify one point", "to make more precise", "to double-check"], example: { jp: "Я хочу уточнять каждую цифру в договоре.", en: "I want to check every figure in the contract." }, drill: { jp: "Он любит уточнять каждую цифру", en: "He likes to check every figure" }, hint: "u-tach-NYAT — stress on the last syllable, and the о reduces to a. First conjugation. Built on точный (unit 40): to MAKE something accurate. «Уточните, пожалуйста» is what a Russian official says when your answer was vague." },
        { id: "ru-u46l4-utverzhdat", type: "vocab", front: "утверждать", reading: "utverzhdat", meaning: "to claim", accept: ["to assert", "to maintain that", "to approve officially"], example: { jp: "Трудно утверждать это без документов.", en: "It is hard to claim that without documents." }, drill: { jp: "Трудно утверждать такие цифры", en: "It is hard to claim figures like that" }, hint: "ut-verzh-DAT — stress on the last syllable. First conjugation: утверждаю, утверждают. Same root as твёрдый (unit 40), «hard to the touch» — to claim something is to make it firm. In offices it also means to sign something off: «утверждать бюджет»." },
        { id: "ru-u46l4-obsuzhdat", type: "vocab", front: "обсуждать", reading: "obsuzhdat", meaning: "to discuss", accept: ["to talk something over", "to debate", "to go over together"], example: { jp: "Мы будем обсуждать этот договор завтра.", en: "We will discuss that contract tomorrow." }, drill: { jp: "Нужно обсуждать эти условия вместе", en: "These conditions need discussing together" }, hint: "ap-suzh-DAT — stress on the last syllable, and the о reduces to a. First conjugation. It takes a plain ACCUSATIVE object — обсуждать договОР — and a clause with что: «обсуждать, что делать дальше»." },
      ],
    },
  ],
};
