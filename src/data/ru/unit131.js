// RU Unit 131 — Преступление и следствие ("Crime and the investigation") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u124–u136). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit87.js §1–§6, and
// ru/unit124.js §1–§5 for this block.
// Probes quoted in this header are reproducible with
// `node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...` — see unit124.js.
//
// THE MEASURED HOLE. u51l3 gives the OUTCOME — `преступление` · `наказание` ·
// `суд` · `тюрьма` · `штраф` — and that is all 2,328 cards have. So a learner
// can say that someone was punished and cannot name a single crime, a single
// criminal, or one step of an investigation: no theft, no robbery, no bribe, no
// evidence, no interrogation, no search, no arrest, no verdict. Seventeen of
// the probed seeds were free and five more were added to reach 24.
//
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ BOUNDARY — THIS UNIT OWNS THE CRIME AND THE INVESTIGATION AND NOTHING
// ELSE. The four-way split is set out in unit129.js's boundary block.
//   `приговор` and `расследование` are THIS UNIT's and no other slot's.
//   `апелляция` is block 1's u102's and no other slot's — not carded here.
//   u102 keeps the courtroom cast: парламент · конституция · кодекс · иск ·
//   адвокат · прокурор · указ · референдум. No card below reaches for any of
//   them, and none of them appears in an example either: u98–u123 are stubs on
//   this branch, so a sibling block's unmerged word is out of scope for a
//   sentence as much as for a card.
// ═════════════════════════════════════════════════════════════════════════════
//
// ⚠️ `подозреваемый` AND `присяжный` ARE BARRED, and they are the two words a
// crime unit reaches for after `свидетель`. Both are substantivised
// adjectives/participles, so unit1.js §5's last rule and unit51.js §2(b) forbid
// them — the rule that killed `лёгкое` at A2, `пленный` at u129l4 and
// `вселенная` at u124 (unit124.js §1's list). Both probe FREE as strings.
// `подозрение` and `подозревать` are separately TAKEN at u64.
//
// ⚠️ `свидетель` IS ALLOWED ON AN EXPLICIT PRECEDENT. `свидетельство` IS TAUGHT
// (u50), and свидетель is its BASE — exactly the situation u87 §5 settled for
// `водить` (base) vs `водитель` (u8l1, taught derivative), where CLAUDE.md's
// instruction is literally "card the base word". Same shape, same verdict.
//
// ⚠️ TWO след- WORDS IN ONE UNIT, DELIBERATELY, AND HERE IS THE REASONING.
// `след` is taught (u73l1, "a trace") and `следовательно` at u62 ("therefore"),
// so след- is already at two before this unit opens. l3 adds `расследование`
// and `следователь`. Neither is derived from the other: both sit on следовать /
// расследовать, and NEITHER of those verbs is carded anywhere. And nothing in
// "a trace" or "therefore" hands a learner "an investigator", which is §D's
// actual test. The pair is the process and the office, the way English teaches
// investigation and investigator together. ⚠️ If a later seat disagrees,
// `надзор` and `дознание` are the free replacements — both probed.
//
// ⚠️ `розыск` WAS DROPPED FOR `облава`, and not for a rule. `обыск` (l3) and
// `розыск` are both prefixed derivations of `искать`, which unit31.js §3 allows
// one at a time — but two of them in one unit, on top of the taught `искать`
// and block 1's `иск` (u102), is three claims on one root inside one lesson
// pair. `облава` is a different root, fills the same slot in l4, and probes
// free.
//
// REFUSED, with the reason:
//   `подозреваемый` · `присяжный` · `розыск` — above.
//   `убийство` — against `убивать` (u80), WHICH IS TAUGHT. -ство on a taught
//        verb is the shape §D refuses, and its gloss collided with убивать's
//        accept[] as well. `поджог` took the slot in l1 and `взятка` moved to
//        l2. ⚠️ CONSEQUENCE, LEFT NAMED RATHER THAN HIDDEN: this unit names no
//        homicide at all, and the course still has none.
//   `преступник` — against `преступление` (u51l3). -ник on a taught noun hands
//        the learner the agent, which is the shape that killed `спасатель` at
//        B1 (u87 §5). `вор` and `жулик` carry the field.
//   `задержание` — against `задержка` (u38), and its gloss sits one word away
//        from l4's `арест`. Two reasons, so it is out.
//   `отпечаток` TAKEN (u73l1) · `побег` TAKEN (u97l3) · `залог` TAKEN (u81l4) ·
//        `протокол` TAKEN (u83l1) · `контрабанда` dropped for count.
//   `поджог` · `разбой` · `донос` · `надзор` · `засада` · `амнистия` ·
//        `дознание` — all FREE, all dropped for count at 24.
//
// ⚠️ `алиби` IS GLOSSED THE LONG WAY ROUND. It transliterates to the English
// word, so "an alibi" normalises to exactly the card's own reading and is a
// free pass under unit1.js §9 — the same trap `генерал` hit at u129l1 and
// `вето` at u130l2. ⚠️ It is also an INDECLINABLE NEUTER, like `вето` (u130l2),
// `кафе` (u9) and `купе` (u125l2).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT131 = {
  id: "ru-u131",
  lang: "ru",
  title: "Преступление и следствие",
  order: 131,
  stage: "b2",
  lessons: [
    {
      id: "ru-u131l1",
      unit: 131,
      lesson: 1,
      title: "Crimes against property",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what was actually done — a theft, a robbery, a break-in, a car theft, a fraud and a bribe.",
      items: [
        { id: "ru-u131l1-krazha", type: "vocab", front: "кража", reading: "krazha", meaning: "a theft", accept: ["the taking of someone's property", "stealing", "taking a thing that is not yours"], example: { jp: "Кража была ночью, и утром в магазине не было книг.", en: "The theft was at night, and in the morning there were no books in the shop." }, drill: { jp: "Эта кража была очень давно", en: "This theft was a very long time ago" }, hint: "KRA-zha — stress on the first syllable. FEMININE (-а). From красть, to steal, which this course does not card. ⚠️ A кража is quiet and secret; a `грабёж` in this lesson is done in front of the victim." },
        { id: "ru-u131l1-grabyozh", type: "vocab", front: "грабёж", reading: "grabyozh", meaning: "a robbery", accept: ["taking property by force", "a robbery with threats", "stealing with threats or violence"], example: { jp: "Грабёж был прямо на улице, и люди видели всё.", en: "The robbery was right in the street, and people saw everything." }, drill: { jp: "Этот грабёж был очень давно", en: "This robbery was a very long time ago" }, hint: "gra-BYOZH — stress on the last syllable, and the ж is said as sh at the end. MASCULINE. ⚠️ The ё DROPS to е when it inflects: грабежА, грабежИ — unit 1 §7 keeps it in the nominative. Used of prices too: «это просто грабёж», that is daylight robbery." },
        { id: "ru-u131l1-vzlom", type: "vocab", front: "взлом", reading: "vzlom", meaning: "a break-in", accept: ["forcing a door or a lock", "breaking into a building", "getting in by force"], example: { jp: "После взлома в доме поставили новые двери.", en: "After the break-in new doors were put in the house." }, drill: { jp: "Этот взлом был очень давно", en: "This break-in was a very long time ago" }, hint: "VZLOM — one syllable opening with three consonants. MASCULINE. From ломать, to break, from unit 57. ⚠️ The modern computer sense is the same word: взлом сайта, the hacking of a site." },
        { id: "ru-u131l1-ugon", type: "vocab", front: "угон", reading: "ugon", meaning: "a car theft", accept: ["the stealing of a vehicle", "driving off in someone else's car", "taking a car that is not yours"], example: { jp: "Угон был днём, и машину нашли только через месяц.", en: "The car theft was in the daytime, and the car was found only a month later." }, drill: { jp: "Этот угон был очень давно", en: "This car theft was a very long time ago" }, hint: "u-GON — stress on the last syllable. MASCULINE. From гнать, to drive, the same root as `изгнание` at u130l4. ⚠️ Of a VEHICLE: a car, a plane, a boat. A stolen thing you can carry is a `кража`." },
        { id: "ru-u131l1-moshennichestvo", type: "vocab", front: "мошенничество", reading: "moshennichestvo", meaning: "fraud", accept: ["taking money by lying", "cheating someone out of money", "getting money by trickery"], example: { jp: "Это мошенничество было очень большое, и денег потеряли очень много людей.", en: "This fraud was very large, and a great many people lost money." }, drill: { jp: "Это мошенничество было очень давно", en: "This fraud was a very long time ago" }, hint: "ma-SHE-nni-chest-va — five syllables, stress on SHE, and the нн is held a beat longer. NEUTER (-о). From мошенник, a fraudster. ⚠️ The long word is the legal term; in speech people say обман, from unit 56." },
        { id: "ru-u131l1-podzhog", type: "vocab", front: "поджог", reading: "podzhog", meaning: "arson", accept: ["setting a building on fire on purpose", "deliberately starting a fire", "burning a place down deliberately"], example: { jp: "Поджог был ночью, и утром от магазина осталась только одна стена.", en: "The arson was at night, and in the morning only one wall of the shop was left." }, drill: { jp: "Этот поджог был очень давно", en: "This arson was a very long time ago" }, hint: "pad-ZHOG — stress on the last syllable, the о reduces to a, and the г is said as a k. MASCULINE. From жечь, to burn, with под-. ⚠️ Not the same as `пожар` (unit 97), which is a fire that simply happened: a поджог is a fire somebody started on purpose." },
              ],
    },
    {
      id: "ru-u131l2",
      unit: 131,
      lesson: 2,
      title: "The criminal and the intent",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say who did it and why — a thief, a crook, an accomplice, intent, blackmail and a killing.",
      items: [
        { id: "ru-u131l2-vor", type: "vocab", front: "вор", reading: "vor", meaning: "a thief", accept: ["someone who steals", "a person who takes what is not theirs", "a stealer of property"], example: { jp: "Вор работал только ночью и всегда был один.", en: "The thief worked only at night and was always alone." }, drill: { jp: "Этот вор очень опытный", en: "This thief is very experienced" }, hint: "VOR — one syllable. MASCULINE. ⚠️ Its plural moves the stress onto the ending: ворЫ. The most famous Russian proverb with it is «вор у вора дубинку украл», which needs no translating once you know the word." },
        { id: "ru-u131l2-zhulik", type: "vocab", front: "жулик", reading: "zhulik", meaning: "a crook", accept: ["someone who cheats people", "a swindler", "a person who makes money by tricks"], example: { jp: "Этот жулик продавал людям то, чего у него не было.", en: "This crook sold people things he did not have." }, drill: { jp: "Этот жулик очень опасный", en: "This crook is very dangerous" }, hint: "ZHU-lik — stress on the first syllable. MASCULINE. ⚠️ A `вор` TAKES; a жулик TRICKS, and the word is everyday rather than legal — you will hear it about a shopkeeper who short-changed you. Also used almost fondly of a cheeky child." },
        { id: "ru-u131l2-souchastnik", type: "vocab", front: "соучастник", reading: "souchastnik", meaning: "an accomplice", accept: ["someone who helped do the crime", "a partner in a crime", "the second person in a crime"], example: { jp: "Соучастник ждал в машине и не выходил из неё целый час.", en: "The accomplice waited in the car and did not get out of it for a whole hour." }, drill: { jp: "Этот соучастник очень молодой", en: "This accomplice is very young" }, hint: "sa-u-CHAST-nik — four syllables, stress on CHAST, and the first о reduces to a. MASCULINE. From участник, a participant, with со-, together. ⚠️ A legal word with weight: a соучастник is punished, not merely blamed." },
        { id: "ru-u131l2-umysel", type: "vocab", front: "умысел", reading: "umysel", meaning: "criminal intent", accept: ["doing something on purpose", "a deliberate plan to do harm", "the intention behind an act"], example: { jp: "Если был умысел, наказание будет очень большое.", en: "If there was intent, the punishment will be very great." }, drill: { jp: "Этот умысел был совсем ясный", en: "This intent was quite clear" }, hint: "U-my-sel — stress on the FIRST syllable, with the ы from unit 5. MASCULINE. ⚠️ The е DROPS in every other form: Умысла, Умыслы — the same class as `отец` from unit 10. Built on мысль, a thought, from unit 39, and the legal phrase is «без умысла», without intent." },
        { id: "ru-u131l2-shantazh", type: "vocab", front: "шантаж", reading: "shantazh", meaning: "blackmail", accept: ["demanding money with a threat to tell", "forcing someone by threatening to reveal something", "pressing someone with a secret"], example: { jp: "Это был шантаж: он просил денег и обещал всё рассказать.", en: "It was blackmail: he asked for money and promised to tell everything." }, drill: { jp: "Этот шантаж был очень давно", en: "This blackmail was a very long time ago" }, hint: "shan-TAZH — stress on the last syllable, and the ж is said as sh at the end. MASCULINE. A French loan. ⚠️ Used of ordinary pressure too, half-jokingly: «это шантаж!», that's blackmail!, when someone makes an unfair condition." },
        { id: "ru-u131l2-vzyatka", type: "vocab", front: "взятка", reading: "vzyatka", meaning: "a bribe", accept: ["money paid to an official to bend a rule", "a secret payment for a favour", "money given to buy a decision"], example: { jp: "Взятку дали прямо в этой комнате, и об этом узнали только через год.", en: "The bribe was given right in this room, and it came to light only a year later." }, drill: { jp: "Эта взятка была очень большая", en: "This bribe was very large" }, hint: "VZYAT-ka — stress on the first syllable. FEMININE (-а). From взять, to take, from unit 31. ⚠️ A SECOND sense in card games: a взятка is also a trick you win — and unit 134's `колода` is the deck you win it from." },
      ],
    },
    {
      id: "ru-u131l3",
      unit: 131,
      lesson: 3,
      title: "The investigation",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a case is worked — an investigation, the investigator, a piece of evidence, an interrogation, a search and forensic examination.",
      items: [
        { id: "ru-u131l3-rassledovanie", type: "vocab", front: "расследование", reading: "rassledovanie", meaning: "a criminal investigation", accept: ["the official work of finding out what happened", "an inquiry into a crime", "the process of working out who did it"], example: { jp: "Расследование было очень трудное, и потом оказалось, что виноват сосед.", en: "The investigation was very difficult, and later it turned out the neighbour was to blame." }, drill: { jp: "Это расследование было очень долгое", en: "This investigation was very long" }, hint: "ra-SSLE-da-va-ni-ye — six syllables, stress on SLE, and the сс is held a beat longer. NEUTER (-ие). From расследовать, which this course does not card. ⚠️ Also used of journalism: журналистское расследование, an investigative report." },
        { id: "ru-u131l3-sledovatel", type: "vocab", front: "следователь", reading: "sledovatel", meaning: "an investigator", accept: ["the officer who works a criminal case", "the official who questions and gathers evidence", "a detective who runs a case"], example: { jp: "Следователь работал один и никому ничего не говорил.", en: "The investigator worked alone and told nobody anything." }, drill: { jp: "Этот следователь очень опытный", en: "This investigator is very experienced" }, hint: "sli-DO-va-tel — stress on DO, and the first е reduces to i. MASCULINE despite the -ь, so unit 1 §3 says to name it. ⚠️ Nothing in `след` (unit 73) or `следовательно` (unit 62) gives this word away, which is why it is carded: it is a specific legal office, not \"someone who follows\"." },
        { id: "ru-u131l3-ulika", type: "vocab", front: "улика", reading: "ulika", meaning: "an incriminating clue", accept: ["a thing that shows who did it", "proof found at a scene", "something that points to the guilty person"], example: { jp: "Эта улика была очень маленькая, но её хватило для суда.", en: "This clue was very small, but it was enough for the court." }, drill: { jp: "Эта улика очень важная", en: "This clue is very important" }, hint: "u-LI-ka — stress on LI. FEMININE (-а). ⚠️ A улика points at a PERSON — it is incriminating by definition. Neutral evidence in a case is доказательство, which unit 39 already handed the course." },
        { id: "ru-u131l3-dopros", type: "vocab", front: "допрос", reading: "dopros", meaning: "an interrogation", accept: ["formal questioning by an officer", "being questioned about a crime", "an official session of questions"], example: { jp: "Допрос шёл шесть часов, и после него он ничего не сказал.", en: "The interrogation went on six hours, and after it he said nothing." }, drill: { jp: "Этот допрос шёл очень долго", en: "This interrogation went on a very long time" }, hint: "da-PROS — stress on the last syllable, and the first о reduces to a. MASCULINE. From спросить, to ask, with до-. ⚠️ A formal, recorded event, not a chat: «вызвать на допрос», to summon for questioning." },
        { id: "ru-u131l3-obysk", type: "vocab", front: "обыск", reading: "obysk", meaning: "a search of a place", accept: ["an official going through a house", "a legal search of premises", "officers looking through someone's things"], example: { jp: "Обыск был в шесть утра, и в доме были все документы.", en: "The search was at six in the morning, and all the documents were in the house." }, drill: { jp: "Этот обыск был очень долгий", en: "This search was very long" }, hint: "O-bysk — stress on the FIRST syllable, with the ы from unit 5. MASCULINE. From искать, to look for, with об-. ⚠️ Only the OFFICIAL kind, with a warrant. Looking for your keys is искать, never обыск." },
        { id: "ru-u131l3-ekspertiza", type: "vocab", front: "экспертиза", reading: "ekspertiza", meaning: "forensic examination", accept: ["expert testing of evidence", "a specialist's formal examination", "laboratory work on a case"], example: { jp: "Экспертиза показала, что в комнате был ещё один человек.", en: "The examination showed that there had been one more person in the room." }, drill: { jp: "Эта экспертиза была очень важная", en: "This examination was very important" }, hint: "eks-pir-TI-za — stress on TI, and the е reduces to i. FEMININE (-а). ⚠️ Used far outside crime: an экспертиза of a building, a painting, a contract — any formal assessment by a specialist." },
      ],
    },
    {
      id: "ru-u131l4",
      unit: 131,
      lesson: 4,
      title: "The arrest and the verdict",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the end of a case — an arrest, handcuffs, a police round-up, a witness, an alibi and the sentence.",
      items: [
        { id: "ru-u131l4-arest", type: "vocab", front: "арест", reading: "arest", meaning: "an arrest", accept: ["the taking of someone into custody", "being seized by the police", "the moment the police take a person"], example: { jp: "Арест был очень тихий: никто в доме ничего не слышал.", en: "The arrest was very quiet: nobody in the house heard anything." }, drill: { jp: "Этот арест был очень давно", en: "This arrest was a very long time ago" }, hint: "a-REST — stress on the last syllable. MASCULINE. ⚠️ Also used of THINGS and money: «арест счёта», the freezing of an account — and «домашний арест» is house arrest." },
        { id: "ru-u131l4-naruchniki", type: "vocab", front: "наручники", reading: "naruchniki", meaning: "handcuffs", accept: ["metal rings locked on the wrists", "cuffs put on a prisoner", "what the police lock on someone's hands"], example: { jp: "Наручники были такие холодные, что он не мог держать руки спокойно.", en: "The handcuffs were so cold that he could not hold his hands still." }, drill: { jp: "Эти наручники очень холодные", en: "These handcuffs are very cold" }, hint: "na-RUCH-ni-ki — stress on RUCH. MASCULINE PLURAL, and ⚠️ IT HAS NO SINGULAR: a plurale tantum like `обои` (u132) and `нарды` (u134), so the card is in the plural because there is no other form. Built on рука, a hand, from unit 20." },
        { id: "ru-u131l4-oblava", type: "vocab", front: "облава", reading: "oblava", meaning: "a police round-up", accept: ["a sudden sweep by the police", "officers closing in on a place all at once", "a raid that catches many people"], example: { jp: "Облава была в пять утра, и взяли сразу восемь человек.", en: "The round-up was at five in the morning, and eight people were taken at once." }, drill: { jp: "Эта облава была очень большая", en: "This round-up was very large" }, hint: "ab-LA-va — stress on LA, and the first о reduces to a. FEMININE (-а). ⚠️ The word comes from HUNTING, where an облава is the ring of beaters that closes on an animal — and that is exactly the picture it keeps when the police do it." },
        { id: "ru-u131l4-svidetel", type: "vocab", front: "свидетель", reading: "svidetel", meaning: "a witness", accept: ["someone who saw what happened", "a person who tells a court what they saw", "the person whose account is heard"], example: { jp: "Свидетель видел всё из своего окна и рассказал об этом в суде.", en: "The witness saw everything from his window and told the court about it." }, drill: { jp: "Этот свидетель очень важный", en: "This witness is very important" }, hint: "svi-DE-tel — stress on DE. MASCULINE despite the -ь, so unit 1 §3 says to name it. ⚠️ `свидетельство` (unit 50) is the PAPER; this is the PERSON, and it is the base word the course had been missing. Also the best man at a wedding — свидетель на свадьбе." },
        { id: "ru-u131l4-alibi", type: "vocab", front: "алиби", reading: "alibi", meaning: "proof that you were elsewhere", accept: ["evidence that you were somewhere else", "a defence that you were not there", "proof of being in another place"], example: { jp: "У него было алиби: весь вечер он был на работе, и это видели десять человек.", en: "He had proof he was elsewhere: he was at work all evening, and ten people saw it." }, drill: { jp: "Это алиби было очень сильное", en: "This proof of being elsewhere was very strong" }, hint: "A-li-bi — stress on the FIRST syllable, which English speakers get right and Russian learners often do not. NEUTER, and ⚠️ IT NEVER CHANGES: an indeclinable loan like `вето` (u130l2) and `купе` (u125l2). ⚠️ Glossed the long way round on purpose — unit 1 §9's free pass again." },
        { id: "ru-u131l4-prigovor", type: "vocab", front: "приговор", reading: "prigovor", meaning: "a court's sentence", accept: ["the decision a court gives at the end", "the judgment passed on an accused person", "what the court finally rules"], example: { jp: "Приговор читали двадцать минут, и в зале было совсем тихо.", en: "The sentence was read out for twenty minutes, and the hall was completely silent." }, drill: { jp: "Этот приговор был очень тяжёлый", en: "This sentence was very heavy" }, hint: "pri-ga-VOR — stress on the last syllable, and the о before it reduces to a. MASCULINE. From говорить, to speak, with при-: what the court SAYS at the end. ⚠️ Nothing to do with `приготовить`, to cook, from unit 31 — they only look alike for five letters. Used figuratively of anything final: «это приговор»." },
      ],
    },
  ],
};
