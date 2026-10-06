// RU Unit 71 — Долг и запрет ("Duty and prohibition") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 1 (u61–u73). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, and THIS BAND's conventions in ru/unit61.js §1–§8.
//
// THE SLOT TITLE WAS "Rules, permission, obligation" and the domain survives, but
// A1 and A2 already carded the PRIMITIVES of it and this unit must not repeat
// them: нельзя · можно · нужно (u5) · должен (u24) · разрешать · запрещать ·
// требование · просьба · нужный · условие (u34) · правило (u41) · обязанность
// (u42) · официальный · личный · инструкция · пропуск (u50) · закон · право ·
// суд · преступление · наказание · штраф · тюрьма (u51) · порядок (u15).
//
// SO THIS UNIT IS THE LAYER ABOVE: the duty you accept, the fault you carry, the
// document that imposes the rule, the limits and penalties short of a court, and
// the free-will / fairness axis that decides whether any of it is just.
//
// ⚠️ EIGHTEEN REFUSED, almost all on unit1.js §D:
//   AGAINST A1/A2: `обязательство` and `обязательный` and `обязан` (обязанность
//     u42) · `свобода` (свободный u23) · `строгость` (строгий u40) · `законный`
//     and `незаконный` and `правомерный` and `правовой` (закон u51 · право u51) ·
//     `разрешено` and `разрешаться` and `разрешение` (разрешать u34) · `запрет`
//     (запрещать u34) · `наказывать` (наказание u51) · `честность` (честный
//     u28) · `порядочный` (порядок u15) · `поручение` (поручать u49) ·
//     `проверка` (проверять u59).
//   ⚠️ AGAINST THIS BLOCK'S OWN CARDS: `объективный` (объект, u68l1) · `судить`
//     (осуждать, u61l3 — and суд at u51 as well, so two taught relatives).
//   `положено` — a PAST PASSIVE PARTICIPLE used impersonally, so it is both
//     Grammar 6–8's subject and an inflected form under unit1.js §5. `вправе` is
//     refused with it: it is в + the prepositional of право (u51) written solid.
//
// ★ TWO ALLOWED THAT LOOK REFUSABLE, with the §D DIRECTION test rather than the
//   verdict (unit51.js §3):
//   `ответственность` vs `ответ` (u7) — three derivational steps, and "an answer"
//        does not hand a learner "responsibility" in either direction.
//   `предписание` vs `писать` (u4) — the same shape A2 used to REFUSE `писатель`,
//        and the difference is the prefix: пред+пис+ание has travelled from
//        writing to a binding directive, where писатель is simply one who writes.
//        Named here because a seat will otherwise read the two decisions as
//        inconsistent.
//
// ★ A GLOSS COLLISION DESIGNED AROUND, and it is the subtler kind. `долг` wanted
//   the gloss "a duty" and `обязанность` (u42) already has it. It is glossed
//   "a debt" instead — which is also its commonest sense — with the duty reading
//   moved into accept[]. ⚠️ AND IN THE SAME LESSON `вина` and `виноват` nearly
//   collided through accept[]: "blame" and "to blame" both normalise to "blame",
//   because normalizeMeaning strips a leading "to ". виноват's accept[] therefore
//   carries "guilty" and not "to blame". See unit61.js §7b.
//
// ★ THREE -ь NOUNS AND THEY DO NOT AGREE: ответственность and мораль are
//   FEMININE, `контроль` is MASCULINE. unit1.js §3 exactly — nothing in the
//   spelling predicts it, so all three hints name the gender.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT71 = {
  id: "ru-u71",
  lang: "ru",
  title: "Долг и запрет",
  order: 71,
  stage: "b1",
  lessons: [
    {
      id: "ru-u71l1",
      unit: 71,
      lesson: 1,
      title: "What you owe and what you carry",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about duty and fault — a debt, responsibility, the fault itself, being at fault — and say that someone abides by a rule or breaks it.",
      items: [
        { id: "ru-u71l1-dolg", type: "vocab", front: "долг", reading: "dolg", meaning: "a debt", accept: ["a moral duty", "what you owe", "an obligation you accept"], example: { jp: "Он считал это своим долгом, хотя никто его об этом не просил.", en: "He considered it his debt of honour, although nobody had asked him to." }, drill: { jp: "Это был его главный долг", en: "That was his main duty" }, hint: "DOLG — one syllable. MASCULINE. ⚠️ TWO SENSES IN ONE WORD: money you owe, and a duty you accept. Обязанность from unit 42 is a duty somebody GAVE you; долг is one you took on yourself, which is why it is glossed «a debt» here." },
        { id: "ru-u71l1-otvetstvennost", type: "vocab", front: "ответственность", reading: "otvetstvennost", meaning: "answerability", accept: ["being the one who has to answer", "liability", "the duty to account for something"], example: { jp: "Ответственность за это решение никто брать не хотел, и поэтому его откладывали.", en: "Nobody wanted to take responsibility for that decision, and so it was postponed." }, drill: { jp: "Ответственность здесь очень большая", en: "The responsibility here is very great" }, hint: "at-VET-stvin-nast — stress on VET, and the нн is held longer. FEMININE (-ость). ⚠️ «Брать на себя ответственность» is the standard phrase. It is three steps from ответ at unit 7, which is why §D allows it — see this unit's header." },
        { id: "ru-u71l1-vina", type: "vocab", front: "вина", reading: "vina", meaning: "fault", accept: ["blame", "guilt", "being the one who caused it"], example: { jp: "Вина была не только его, но говорить об этом никто не стал.", en: "The fault was not only his, but nobody said so aloud." }, drill: { jp: "Вина здесь была общая", en: "The fault here was shared" }, hint: "vi-NA — stress on the last syllable. FEMININE (-а). ⚠️ Do not confuse it with вино from unit 13, wine — the readings differ (vina and vino), which is exactly the check unit 51 §2 asks for. Обвинять from unit 61 is its verb." },
        { id: "ru-u71l1-vinovat", type: "vocab", front: "виноват", reading: "vinovat", meaning: "at fault", accept: ["guilty", "the one who did it", "in the wrong"], example: { jp: "Он виноват в этом не больше, чем все остальные, и это надо признавать.", en: "He is at fault in this no more than everyone else, and that has to be admitted." }, drill: { jp: "Он виноват не больше остальных", en: "He is at fault no more than the others" }, hint: "vi-na-VAT — stress on the last syllable. ⚠️ A SHORT-FORM ADJECTIVE, the class of должен and уверен at unit 24: a woman says виновата, a group виноваты. ⚠️ Its accept[] says «guilty» and NOT «to blame», because normalizeMeaning would reduce that to «blame» — вина's own gloss." },
        { id: "ru-u71l1-soblyudat", type: "vocab", front: "соблюдать", reading: "soblyudat", meaning: "to abide by", accept: ["to keep to a rule", "to observe a regulation", "to comply with"], example: { jp: "Соблюдать это правило трудно, но нарушать его ещё дороже.", en: "Abiding by that rule is hard, but breaking it is dearer still." }, drill: { jp: "Нужно соблюдать это правило", en: "This rule must be abided by" }, hint: "sa-blyu-DAT — stress on the last syllable. IMPERFECTIVE; the perfective is соблюсти, which is rare. ⚠️ It goes with правило · закон · порядок · сроки · тишину, and it is the formal verb a notice uses: «соблюдайте тишину»." },
        { id: "ru-u71l1-narushat", type: "vocab", front: "нарушать", reading: "narushat", meaning: "to break a rule", accept: ["to violate", "to infringe", "to go against a regulation"], example: { jp: "Нарушать закон здесь не стоит, потому что штраф очень большой.", en: "It is not worth breaking the law here, because the fine is very large." }, drill: { jp: "Нельзя нарушать этот закон", en: "This law must not be broken" }, hint: "na-ru-SHAT — stress on the last syllable. IMPERFECTIVE; the perfective is нарушить. It is the exact opposite of соблюдать and the pair is learnt together. ⚠️ «Нарушить тишину» also means simply to break a silence." },
      ],
    },
    {
      id: "ru-u71l2",
      unit: 71,
      lesson: 2,
      title: "The document that imposes it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the paper behind a rule — a charter, an order, an instruction from above, a directive — and talk about authority granted and oversight exercised.",
      items: [
        { id: "ru-u71l2-ustav", type: "vocab", front: "устав", reading: "ustav", meaning: "a charter", accept: ["the rules of an organisation", "statutes", "a founding document"], example: { jp: "Устав фирмы никто не читал, пока не возник первый серьёзный спор.", en: "Nobody read the firm's charter until the first serious argument arose." }, drill: { jp: "Устав был очень строгий", en: "The charter was very strict" }, hint: "us-TAV — stress on the last syllable. MASCULINE. ⚠️ Do not confuse it with устал from unit 7, tired — the readings are ustav and ustal. Every Russian company, school and army has an устав, and «по уставу» means by the book." },
        { id: "ru-u71l2-prikaz", type: "vocab", front: "приказ", reading: "prikaz", meaning: "a written order", accept: ["a command in writing", "an official command", "what a superior signs"], example: { jp: "Приказ был подписан вчера, но в отделе о нём узнали только через неделю.", en: "The order was signed yesterday, but the department found out about it only a week later." }, drill: { jp: "Приказ был очень ясный", en: "The order was very clear" }, hint: "pri-KAZ — stress on the last syllable. MASCULINE. ⚠️ IN RUSSIA AN приказ IS ALWAYS A PIECE OF PAPER with a number and a date — «приказ номер пять». A spoken command is simply «он сказал»." },
        { id: "ru-u71l2-rasporyazhenie", type: "vocab", front: "распоряжение", reading: "rasporyazhenie", meaning: "an instruction from above", accept: ["a ruling", "a direction given by authority", "an administrative decision"], example: { jp: "Это было распоряжение начальника, и соблюдать его пришлось всем.", en: "That was an instruction from the boss, and everyone had to abide by it." }, drill: { jp: "Распоряжение было совсем ясное", en: "The instruction was quite clear" }, hint: "ras-pa-rya-ZHE-ni-ye — six syllables, stress on ZHE. NEUTER (-е). ⚠️ Softer and lower than приказ: a распоряжение tells you how to do a thing, an приказ tells you to do it. «В моём распоряжении» means at my disposal." },
        { id: "ru-u71l2-predpisanie", type: "vocab", front: "предписание", reading: "predpisanie", meaning: "a directive", accept: ["a written requirement", "what you are instructed to do", "a prescribed procedure"], example: { jp: "Предписание было ясное, и нарушать его никто не собирался.", en: "The directive was clear, and nobody intended to break it." }, drill: { jp: "Предписание было совсем ясное", en: "The directive was quite clear" }, hint: "prit-pi-SA-ni-ye — five syllables, stress on SA. NEUTER (-е). ⚠️ ALLOWED against писать from unit 4 although A2 refused `писатель` on the same root — the prefix has moved the sense all the way from writing to a binding requirement. See this unit's header." },
        { id: "ru-u71l2-polnomochie", type: "vocab", front: "полномочие", reading: "polnomochie", meaning: "an authority granted", accept: ["a power given to someone", "a mandate", "the right to act for another"], example: { jp: "У него нет такого полномочия, поэтому подписывать договор он не может.", en: "He has no such authority, so he cannot sign the contract." }, drill: { jp: "Это было его полномочие", en: "That was his authority" }, hint: "pal-na-MO-chi-ye — five syllables, stress on MO. NEUTER (-е). Built from полный and мочь — full power. ⚠️ It is nearly always PLURAL in use: «его полномочия», his powers, and «превысить полномочия» means to exceed them." },
        { id: "ru-u71l2-kontrol", type: "vocab", front: "контроль", reading: "kontrol", meaning: "oversight", accept: ["supervision", "keeping a check on something", "inspection"], example: { jp: "Контроль был только предварительный, и поэтому ошибки накапливались годами.", en: "The oversight was only preliminary, and so mistakes built up for years." }, drill: { jp: "Контроль здесь очень строгий", en: "The oversight here is very strict" }, hint: "kan-TROL — stress on the last syllable. ⚠️ MASCULINE despite the -ь, and it is the odd one out in this unit: ответственность and мораль are both feminine. Проверять from unit 59 is the single act; контроль is the standing arrangement." },
      ],
    },
    {
      id: "ru-u71l3",
      unit: 71,
      lesson: 3,
      title: "Limits, pressure and penalties",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what is held back and what is exacted — a restriction, coercion, arbitrary rule, a reprimand — and name an entitlement and call a thing lawful.",
      items: [
        { id: "ru-u71l3-ogranichenie", type: "vocab", front: "ограничение", reading: "ogranichenie", meaning: "a restriction", accept: ["a limit set by a rule", "a curb on something", "a cap"], example: { jp: "Ограничение было на один год, но отменять его никто не стал.", en: "The restriction was for one year, but nobody called it off." }, drill: { jp: "Ограничение было очень строгое", en: "The restriction was very strict" }, hint: "ag-ra-ni-CHE-ni-ye — six syllables, stress on CHE. NEUTER (-е). It sits on граница from unit 30 — a boundary put round something. ⚠️ Предел at unit 68 is how far a thing CAN go; ограничение is how far somebody has DECIDED it may go." },
        { id: "ru-u71l3-prinuzhdenie", type: "vocab", front: "принуждение", reading: "prinuzhdenie", meaning: "coercion", accept: ["being made to do something", "force applied to a person", "compulsion"], example: { jp: "Это было принуждение, хотя формально все подписали договор добровольно.", en: "That was coercion, although formally everyone signed the contract of their own free will." }, drill: { jp: "Это было настоящее принуждение", en: "That was genuine coercion" }, hint: "pri-nuzh-DE-ni-ye — five syllables, stress on DE. NEUTER (-е). It sits on нужно from unit 5 — making a thing necessary for somebody. ⚠️ It is a legal word: «под принуждением» means under duress, and it is what добровольно in lesson 4 denies." },
        { id: "ru-u71l3-proizvol", type: "vocab", front: "произвол", reading: "proizvol", meaning: "arbitrary rule", accept: ["high-handedness", "doing as one pleases with others", "rule without rules"], example: { jp: "Это уже не порядок, а произвол, и спорить здесь вряд ли есть смысл.", en: "That is no longer order but arbitrary rule, and there is hardly any sense in arguing." }, drill: { jp: "Это уже не порядок а произвол", en: "That is no longer order but arbitrary rule" }, hint: "pra-iz-VOL — stress on the last syllable. MASCULINE. It is built on воля from unit 56, will — one person's will in place of a rule. ⚠️ A heavy political word in Russian, and «чиновничий произвол» is a standing complaint." },
        { id: "ru-u71l3-vygovor", type: "vocab", front: "выговор", reading: "vygovor", meaning: "an official telling-off", accept: ["a formal rebuke", "a black mark", "a dressing-down on record"], example: { jp: "Ему дали выговор, но увольнять его никто не собирался.", en: "He was given a reprimand, but nobody intended to dismiss him." }, drill: { jp: "Ему дали строгий выговор", en: "He was given a strict reprimand" }, hint: "VY-ga-var — stress on the first syllable. MASCULINE. ⚠️ IT IS AN OFFICIAL ACT that goes in your file, unlike ругать from unit 59, which is simply telling somebody off. ⚠️ Its other sense is an accent in speech: «у него южный выговор»." },
        { id: "ru-u71l3-lgota", type: "vocab", front: "льгота", reading: "lgota", meaning: "a benefit granted by law", accept: ["a reduced rate you qualify for", "a privilege in the rules", "a statutory allowance"], example: { jp: "У них есть льгота на транспорт, но оформлять её надо каждый год.", en: "They have an entitlement on transport, but it has to be drawn up every year." }, drill: { jp: "Эта льгота очень важная", en: "That entitlement is very important" }, hint: "LGO-ta — stress on the first syllable, and ⚠️ THE OPENING ль TAKES NO VOWEL: l + a soft l, then GO. FEMININE (-а). ⚠️ Glossed «an entitlement» and not «a concession», because уступка at unit 61 holds that word." },
        { id: "ru-u71l3-legalnyy", type: "vocab", front: "легальный", reading: "legalnyy", meaning: "lawful", accept: ["permitted by law", "above board", "not against the rules"], example: { jp: "Этот способ вполне легальный, хотя людям он кажется странным.", en: "That method is perfectly lawful, although to people it seems strange." }, drill: { jp: "Это совсем легальный способ", en: "That is a quite lawful method" }, hint: "li-GAL-nyy — stress on GAL. ⚠️ Its native twin `законный` was REFUSED on §D against закон from unit 51, so this loanword is the only way the course can card the idea — which is why it is here rather than the more obvious word." },
      ],
    },
    {
      id: "ru-u71l4",
      unit: 71,
      lesson: 4,
      title: "Free will and fairness",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say whether an act was free or forced — of one's own free will, on one's own initiative, submitting to authority, interfering — and judge it fair or moral.",
      items: [
        { id: "ru-u71l4-dobrovolno", type: "vocab", front: "добровольно", reading: "dobrovolno", meaning: "of one's own free will", accept: ["voluntarily", "without being made to", "by choice"], example: { jp: "Он сделал это добровольно, и никакого принуждения здесь не было.", en: "He did it of his own free will, and there was no coercion here at all." }, drill: { jp: "Он пришёл сюда добровольно", en: "He came here of his own free will" }, hint: "da-bra-VOL-na — four syllables, stress on VOL. Built from добрый and воля: good-will. ⚠️ It is the word a form uses to deny принуждение from lesson 3, and the two are usually set against each other." },
        { id: "ru-u71l4-samostoyatelno", type: "vocab", front: "самостоятельно", reading: "samostoyatelno", meaning: "on one's own initiative", accept: ["independently", "without being told", "off one's own bat"], example: { jp: "Он разобрался в этом самостоятельно, хотя объяснять ему никто не хотел.", en: "He got to grips with it on his own initiative, although nobody wanted to explain it to him." }, drill: { jp: "Он работает совсем самостоятельно", en: "He works quite independently" }, hint: "sa-ma-sta-YA-til-na — six syllables, stress on YA. Built from сам and стоять: standing by oneself. ⚠️ Сам means unaided in the moment; самостоятельно means habitually independent, and it is what a Russian school report says about a child." },
        { id: "ru-u71l4-podchinyatsya", type: "vocab", front: "подчиняться", reading: "podchinyatsya", meaning: "to submit to authority", accept: ["to obey", "to be subordinate to", "to do as one is told"], example: { jp: "Подчиняться такому распоряжению было трудно, но оспаривать его никто не решился.", en: "Submitting to such an instruction was hard, but nobody brought themselves to contest it." }, drill: { jp: "Трудно подчиняться такому распоряжению", en: "It is hard to submit to such an instruction" }, hint: "pat-chi-NYAT-sya — stress on NYAT. IMPERFECTIVE and REFLEXIVE; the perfective is подчиниться. It takes the DATIVE: подчиняться приказу. ⚠️ Соблюдать in lesson 1 keeps to a rule; подчиняться submits to a PERSON or a body." },
        { id: "ru-u71l4-vmeshivatsya", type: "vocab", front: "вмешиваться", reading: "vmeshivatsya", meaning: "to interfere", accept: ["to butt in", "to meddle", "to step into someone else's business"], example: { jp: "Вмешиваться в этот спор он не стал, и, пожалуй, был прав.", en: "He did not interfere in that argument, and he was probably right." }, drill: { jp: "Не надо вмешиваться в этот спор", en: "There is no need to interfere in this argument" }, hint: "VME-shi-vat-sya — stress on the first syllable. IMPERFECTIVE and REFLEXIVE; the perfective is вмешаться. It takes в + the ACCUSATIVE. ⚠️ Мешать from unit 34 is getting in the way; вмешиваться is entering a matter that is not yours." },
        { id: "ru-u71l4-spravedlivyy", type: "vocab", front: "справедливый", reading: "spravedlivyy", meaning: "even-handed", accept: ["just in judgement", "giving everyone their due", "equitable"], example: { jp: "Решение было справедливое, но понравилось оно далеко не всем.", en: "The decision was fair, but it was far from pleasing to everyone." }, drill: { jp: "Это был справедливый суд", en: "That was a fair court" }, hint: "spra-vid-LI-vyy — four syllables, stress on LI. ⚠️ It is the central ethical word in Russian and «справедливость» is its noun. Правильный from unit 40 means correct, which is a matter of fact; справедливый is a matter of justice." },
        { id: "ru-u71l4-moral", type: "vocab", front: "мораль", reading: "moral", meaning: "morality", accept: ["the moral of a story", "ethics as a standard", "right and wrong"], example: { jp: "Мораль здесь одна: соблюдать правила дешевле, чем нарушать их.", en: "The morality here is one thing: abiding by the rules is cheaper than breaking them." }, drill: { jp: "Мораль здесь совсем одна", en: "The morality here is just one thing" }, hint: "ma-RAL — stress on the last syllable. ⚠️ FEMININE despite the -ь, unlike контроль in lesson 2, which is masculine — unit 1 §3 again. ⚠️ Glossed «morality» and not «moral»: its reading IS \"moral\", so the short gloss would be the answer (unit 1 §9). Its other sense is the lesson at the end of a fable." },
      ],
    },
  ],
};
