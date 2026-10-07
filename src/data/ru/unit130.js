// RU Unit 130 — Дипломатия и мир ("Diplomacy and peace") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u124–u136). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit87.js §1–§6, and
// ru/unit124.js §1–§5 for this block.
// Probes quoted in this header are reproducible with
// `node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...` — see unit124.js.
//
// THE MEASURED HOLE, AND IT IS A WHOLE CEFR DOMAIN. Across 2,328 cards there is
// NOTHING INTERNATIONAL beyond `граница` (u30l1) and `виза` (u30l1). u51l2 has
// the state looking inward — государство · власть · президент · министр ·
// закон — and nothing at all for how two states deal with each other: no
// ambassador, no treaty, no sanction, no truce, no refugee, no neutrality.
// Twenty-two of the probed seeds were free and two more were added to reach 24.
//
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ BOUNDARY — THIS UNIT OWNS THE TREATY AND NOTHING ELSE. The four-way split
// is set out in unit129.js's boundary block: u102 the constitution and the
// courtroom, u129 the army, u130 the treaty, u131 the crime.
// ⚠️ `переговоры` IS BLOCK 1's (u103) — a business word first, and the lower
// slot owns it. It is NOT a front here, AND IT IS NOT IN AN EXAMPLE EITHER:
// u98–u123 are stubs on this branch, so a word block 1 has not merged yet is
// out of scope for a sentence as well as for a card (`scripts/scope-ru.mjs`
// would flag it, correctly). It is named in `делегация`'s HINT, which no scope
// check reads, so the learner still meets the connection.
// ═════════════════════════════════════════════════════════════════════════════
//
// ⚠️ `посольство` WAS REFUSED AGAINST THIS UNIT'S OWN `посол`, and the embassy
// is the word a diplomacy unit wants most. посол → посольство is the plainest
// -ство derivation in the language, and unit51.js §3 calls a base and its
// derivative inside one unit the worst version of the lexeme fault. CLAUDE.md's
// instruction in that situation is literally "card the base word", which is
// what l1 does; `посольство` is named in `посол`'s hint. The same test killed
// `консульство` (against l1's `консул`) and `миротворец`, which sits on `мир`
// (u5l?) plus творец and would have made a third мир- derivation in one unit
// beside `перемирие`.
//
// ⚠️ `перемирие` IS ALLOWED AND `мир` IS TAUGHT. `мир` (u5l2) is glossed "peace"
// with "the world" in its accept[], so the derivation test has to be applied
// rather than assumed. пере-мир-ие is a PREFIXED derivation, which unit31.js §3
// explicitly allows and which u87 §5 applied to `полуостров` and `побережье`;
// and "a truce" — a pause in a war that both sides sign — is not recoverable
// from "peace" by any learner. One мир- derivation in the unit, not three.
//
// REFUSED, with the reason:
//   `посольство` · `консульство` · `миротворец` — above.
//   `посредничество` — against `посредством` (u62), and `делегация` already
//        carries the "who does the talking" slot.
//   `дипломат` — against `диплом` (u41); the ADJECTIVE дипломатический and the
//        noun дипломатия sit on the same stem and all three were dropped
//        together. The field is carried by `посол` · `консул` · `миссия`.
//   `протокол` TAKEN (u83l1, "a written record") · `нота` TAKEN (u96l2, "a note
//        of music") · `убежище` TAKEN (u97l3, "a refuge") · `виза` TAKEN
//        (u30l1) · `соглашение` against `соглашаться` (u35) and `согласен`
//        (u61) · `гражданство` against `гражданин` (u51) · `конвенция` dropped
//        for count.
//   `примирение` · `уступка` · `компромисс` · `контингент` — all FREE, all
//        dropped for count at 24.
//
// ⚠️ `вето` AND `эмбарго` ARE GLOSSED THE LONG WAY ROUND. Both transliterate to
// the English word, so "a veto" and "an embargo" normalise to exactly the
// card's own reading and are free passes under unit1.js §9 — the same trap
// `генерал` and `танк` hit at u129l1–l2. Neither card's accept[] contains the
// bare English noun.
// ⚠️ BOTH ARE ALSO INDECLINABLE NEUTERS, like `кафе` (u9) and `купе` (u125l2):
// вето, эмбарго, метро, домино (u134) never change their ending.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT130 = {
  id: "ru-u130",
  lang: "ru",
  title: "Дипломатия и мир",
  order: 130,
  stage: "b2",
  lessons: [
    {
      id: "ru-u130l1",
      unit: 130,
      lesson: 1,
      title: "Who speaks for a country",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the people a state sends abroad and what they are sent with — an ambassador, a consul, a delegation, a mission, a summit and a mandate.",
      items: [
        { id: "ru-u130l1-posol", type: "vocab", front: "посол", reading: "posol", meaning: "an ambassador", accept: ["the top representative of one state in another", "a country's chief envoy abroad", "the head of a country's office abroad"], example: { jp: "Посол этой страны живёт здесь уже пять лет и хорошо говорит по-русски.", en: "This country's ambassador has lived here for five years and speaks Russian well." }, drill: { jp: "Этот посол очень опытный", en: "This ambassador is very experienced" }, hint: "pa-SOL — stress on the last syllable, and the first о reduces to a. MASCULINE. ⚠️ Its plural moves the stress onto the ending: послЫ. The BUILDING he works in is посольство, which this course does not card: a base and its own derivative in one unit is the fault unit 51 §3 names, so the base is what you learn." },
        { id: "ru-u130l1-konsul", type: "vocab", front: "консул", reading: "konsul", meaning: "a consul", accept: ["an official who helps his country's people abroad", "the officer who issues papers to travellers", "a state's local officer in a foreign city"], example: { jp: "Консул помог нам, когда мы потеряли все документы.", en: "The consul helped us when we lost all our documents." }, drill: { jp: "Этот консул очень вежливый", en: "This consul is very polite" }, hint: "KON-sul — stress on the first syllable, and the о is clear because it is stressed. MASCULINE. ⚠️ A `посол` is the political head; a консул does the paperwork — visas, lost passports, a citizen in trouble. The office is консульство, which this course does not card." },
        { id: "ru-u130l1-delegatsiya", type: "vocab", front: "делегация", reading: "delegatsiya", meaning: "a delegation", accept: ["a group sent to speak for a country", "a party sent to represent a side", "the people sent to a meeting on behalf of others"], example: { jp: "Делегация приехала утром, и встреча была в этот же день.", en: "The delegation arrived in the morning, and the meeting was the same day." }, drill: { jp: "Эта делегация очень большая", en: "This delegation is very large" }, hint: "di-li-GA-tsi-ya — stress on GA, and both е reduce to i. FEMININE (-я). ⚠️ What a делегация does is вести переговоры, to conduct talks — a word a later unit teaches, so you will meet it as a card there and only in this hint here." },
        { id: "ru-u130l1-missiya", type: "vocab", front: "миссия", reading: "missiya", meaning: "a diplomatic mission", accept: ["a group sent abroad with one task", "an official errand to another country", "a posting sent to do one job"], example: { jp: "Миссия работала в этой стране только месяц, но сделала очень много.", en: "The mission worked in this country for only a month, but did a great deal." }, drill: { jp: "Эта миссия очень важная", en: "This mission is very important" }, hint: "MI-ssi-ya — stress on the first syllable, and the сс is held a beat longer. FEMININE (-я). ⚠️ Also a personal calling: «его миссия», his mission in life. Nothing to do with `мир`, peace, from unit 5 — a Latin loan, not a Russian word." },
        { id: "ru-u130l1-sammit", type: "vocab", front: "саммит", reading: "sammit", meaning: "a summit meeting", accept: ["a meeting of heads of state", "a top-level meeting between countries", "a meeting of presidents"], example: { jp: "Саммит был в этом городе два дня, и улицы были совсем пустые.", en: "The summit was in this city for two days, and the streets were completely empty." }, drill: { jp: "Этот саммит был очень важный", en: "This summit was very important" }, hint: "SA-mmit — stress on the first syllable, and the мм is held a beat longer. MASCULINE. A recent English loan. ⚠️ Only of the top level: two ministers meeting is a встреча, never a саммит." },
        { id: "ru-u130l1-mandat", type: "vocab", front: "мандат", reading: "mandat", meaning: "a mandate given by a body", accept: ["authority given by a body to act", "written power to do something", "the permission a body gives to act in its name"], example: { jp: "Без мандата эта группа не может работать в стране.", en: "Without a mandate this group cannot work in the country." }, drill: { jp: "Этот мандат очень важный", en: "This mandate is very important" }, hint: "man-DAT — stress on the last syllable. MASCULINE. ⚠️ Two more live senses: the seat a deputy holds in a parliament, and the paper that proves it." },
      ],
    },
    {
      id: "ru-u130l2",
      unit: 130,
      lesson: 2,
      title: "The agreement",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what states sign and how they sign it — a pact, an alliance, a coalition, a resolution, ratification and the power to block.",
      items: [
        { id: "ru-u130l2-pakt", type: "vocab", front: "пакт", reading: "pakt", meaning: "a pact", accept: ["a signed agreement between states", "a formal treaty", "a written promise between countries"], example: { jp: "Этот пакт подписали в тридцать девятом году, и через два года его уже не было.", en: "This pact was signed in nineteen thirty-nine, and two years later it was already gone." }, drill: { jp: "Этот пакт был очень важный", en: "This pact was very important" }, hint: "PAKT — one syllable. MASCULINE. ⚠️ Russian keeps пакт for the big political ones and says договор for everything else, from a trade deal to a rental agreement." },
        { id: "ru-u130l2-alyans", type: "vocab", front: "альянс", reading: "alyans", meaning: "a standing alliance", accept: ["a long-term union of states", "a lasting partnership between countries", "a permanent bloc of allies"], example: { jp: "Этот альянс работает уже семьдесят лет, и в нём больше тридцати стран.", en: "This alliance has been working for seventy years, and there are more than thirty countries in it." }, drill: { jp: "Этот альянс очень сильный", en: "This alliance is very strong" }, hint: "a-LYANS — stress on LYANS, with the soft л before я. MASCULINE. A French loan. ⚠️ An альянс is permanent and institutional; a `коалиция` is put together for one purpose and then comes apart. Russian keeps the two apart and so should you." },
        { id: "ru-u130l2-koalitsiya", type: "vocab", front: "коалиция", reading: "koalitsiya", meaning: "a coalition", accept: ["a bloc formed for one purpose", "a temporary union of sides", "parties working together for a time"], example: { jp: "Коалиция была вместе только пока шла война, а потом её не стало.", en: "The coalition was together only while the war went on, and then it was no more." }, drill: { jp: "Эта коалиция очень большая", en: "This coalition is very large" }, hint: "ka-a-LI-tsi-ya — stress on LI, and the first о reduces to a. FEMININE (-я). ⚠️ Used of a government of several parties as much as of a war: коалиционное правительство." },
        { id: "ru-u130l2-rezolyutsiya", type: "vocab", front: "резолюция", reading: "rezolyutsiya", meaning: "a resolution", accept: ["a formal decision voted by a body", "a text a council votes through", "a written decision of a meeting"], example: { jp: "Резолюция была очень короткая, но каждое слово в ней было важное.", en: "The resolution was very short, but every word in it was important." }, drill: { jp: "Эта резолюция очень важная", en: "This resolution is very important" }, hint: "ri-za-LYU-tsi-ya — stress on LYU; the е reduces to i and the о to a. FEMININE (-я). ⚠️ A SECOND, office sense: a резолюция is also the short note a boss writes on a document — «его резолюция на письме»." },
        { id: "ru-u130l2-ratifikatsiya", type: "vocab", front: "ратификация", reading: "ratifikatsiya", meaning: "ratification", accept: ["the formal approval of a treaty", "a parliament's confirming of an agreement", "the step that makes a signed treaty binding"], example: { jp: "Ратификация шла целый год, потому что не все были согласны.", en: "Ratification went on for a whole year, because not everyone agreed." }, drill: { jp: "Эта ратификация шла очень долго", en: "This ratification went on a very long time" }, hint: "ra-ti-fi-KA-tsi-ya — six syllables, stress on KA. FEMININE (-я). ⚠️ Signing is not enough: in Russian as in English a treaty is подписан first and ратифицирован after, and only then does it work." },
        { id: "ru-u130l2-veto", type: "vocab", front: "вето", reading: "veto", meaning: "the power to block a decision", accept: ["a formal refusal that stops a decision", "the right to say no alone", "a block one member can put on a motion"], example: { jp: "У каждой из этих стран есть вето, поэтому решения очень трудные.", en: "Each of these countries has a veto, so decisions are very difficult." }, drill: { jp: "Это вето было очень важное", en: "This block was very important" }, hint: "VE-ta — stress on the first syllable, and the final о reduces to a. NEUTER, and ⚠️ IT NEVER CHANGES: an indeclinable loan like `кафе` from unit 9 and `купе` from unit 125. ⚠️ Glossed the long way round on purpose: the word transliterates to the English one, and unit 1 §9 calls that a free pass. The verb is наложить вето." },
      ],
    },
    {
      id: "ru-u130l3",
      unit: 130,
      lesson: 3,
      title: "Pressure, and standing apart",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how states press on each other and how one stays out — a sanction, a trade ban, a blockade, neutrality, sovereignty and annexation.",
      items: [
        { id: "ru-u130l3-sanktsiya", type: "vocab", front: "санкция", reading: "sanktsiya", meaning: "a sanction", accept: ["a penalty one state puts on another", "a measure taken to punish a country", "a restriction imposed as punishment"], example: { jp: "После этой санкции цены в стране стали очень высокие.", en: "After this sanction prices in the country became very high." }, drill: { jp: "Эта санкция очень сильная", en: "This sanction is very strong" }, hint: "SANK-tsi-ya — stress on the first syllable. FEMININE (-я). ⚠️ A CONFUSING second sense that is the OPPOSITE: санкция also means official PERMISSION — «с санкции суда», with the court's authorisation. Only the plural санкции reliably means the punishment." },
        { id: "ru-u130l3-embargo", type: "vocab", front: "эмбарго", reading: "embargo", meaning: "a ban on trade with a country", accept: ["a trade ban", "a block on buying and selling with a state", "a prohibition on commerce with a country"], example: { jp: "Из-за эмбарго страна не могла продавать нефть много лет.", en: "Because of the trade ban the country could not sell oil for many years." }, drill: { jp: "Это эмбарго было очень долгое", en: "This trade ban was very long" }, hint: "em-BAR-ga — stress on BAR, and the final о reduces to a. NEUTER, and ⚠️ IT NEVER CHANGES, like `вето` in lesson 2. A Spanish loan through French. ⚠️ Glossed the long way round on purpose — unit 1 §9's free pass again." },
        { id: "ru-u130l3-blokada", type: "vocab", front: "блокада", reading: "blokada", meaning: "a blockade", accept: ["the sealing off of a city or a port", "cutting a place off from all supply", "shutting a place in so nothing reaches it"], example: { jp: "Блокада этого города шла девятьсот дней, и люди жили без хлеба.", en: "The blockade of this city went on nine hundred days, and people lived without bread." }, drill: { jp: "Эта блокада была очень долгая", en: "This blockade was very long" }, hint: "bla-KA-da — stress on KA, and the first о reduces to a. FEMININE (-а). ⚠️ In Russian «Блокада» with no other word means Leningrad, 1941–44, and nothing else — the same way «Революция» means 1917 (u92l4). A military surrounding is an `осада`, from u92l3." },
        { id: "ru-u130l3-neytralitet", type: "vocab", front: "нейтралитет", reading: "neytralitet", meaning: "neutrality", accept: ["staying out of a war", "taking no side in a conflict", "the policy of joining neither side"], example: { jp: "Эта страна держала нейтралитет всю войну и не дала никому своих солдат.", en: "This country kept its neutrality throughout the war and gave nobody its soldiers." }, drill: { jp: "Этот нейтралитет был очень важный", en: "This neutrality was very important" }, hint: "ney-tra-li-TET — stress on the LAST syllable, which is where Russian puts every -итет word. MASCULINE. ⚠️ The -итет ending is a small closed group of Latin loans and all of them stress it: нейтралитет, суверенитет, авторитет, приоритет." },
        { id: "ru-u130l3-suverenitet", type: "vocab", front: "суверенитет", reading: "suverenitet", meaning: "sovereignty", accept: ["a state's right to rule itself", "full independence in one's own affairs", "the right of a country to decide for itself"], example: { jp: "Суверенитет этой страны никто не хотел брать под вопрос.", en: "Nobody wanted to call this country's sovereignty into question." }, drill: { jp: "Этот суверенитет очень важный", en: "This sovereignty is very important" }, hint: "su-vi-ri-ni-TET — five syllables, stress on the LAST, and every е before it reduces to i. MASCULINE. ⚠️ Same -итет group as `нейтралитет` above; learn the stress rule once and it covers all of them." },
        { id: "ru-u130l3-anneksiya", type: "vocab", front: "аннексия", reading: "anneksiya", meaning: "annexation", accept: ["one state taking another's land", "the seizing of territory by a state", "the taking over of a region by force"], example: { jp: "Аннексия этой земли была в тридцать девятом году.", en: "The annexation of this land was in nineteen thirty-nine." }, drill: { jp: "Эта аннексия была очень давно", en: "This annexation was a very long time ago" }, hint: "a-NNEK-si-ya — stress on NEK, and the нн is held a beat longer. FEMININE (-я). ⚠️ Taking land by WAR is `завоевание`, from u92l4; аннексия is the legal act of declaring it yours, with or without fighting." },
      ],
    },
    {
      id: "ru-u130l4",
      unit: 130,
      lesson: 4,
      title: "After the fighting",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what follows a war — a truce, an easing of tension, a refugee, repatriation, banishment and humanitarian help.",
      items: [
        { id: "ru-u130l4-peremirie", type: "vocab", front: "перемирие", reading: "peremirie", meaning: "a truce", accept: ["an agreed stop to the fighting", "a pause in a war both sides accept", "a cease-fire"], example: { jp: "Перемирие было только три дня, и за эти дни в городе было тихо.", en: "The truce lasted only three days, and in those days it was quiet in the city." }, drill: { jp: "Это перемирие было очень короткое", en: "This truce was very short" }, hint: "pi-ri-MI-ri-ye — stress on MI, and both е before it reduce to i. NEUTER (-ие). ⚠️ Built on `мир` (unit 5), peace, with пере-: a BREAK in the fighting, not the end of it. The end is мирный договор, a peace treaty." },
        { id: "ru-u130l4-razryadka", type: "vocab", front: "разрядка", reading: "razryadka", meaning: "an easing of tension", accept: ["a thaw between two hostile states", "a lowering of hostility", "a calming of a dangerous situation"], example: { jp: "Эта разрядка шла почти десять лет, и войны не было.", en: "This easing of tension went on for almost ten years, and there was no war." }, drill: { jp: "Эта разрядка шла очень долго", en: "This easing of tension went on a very long time" }, hint: "raz-RYAD-ka — stress on RYAD. FEMININE (-а). ⚠️ This is the Russian word for détente, and in the Cold War it names one period and nothing else. In everyday speech разрядка is any release of pressure, and in a printer's workshop it is letter-spacing." },
        { id: "ru-u130l4-bezhenets", type: "vocab", front: "беженец", reading: "bezhenets", meaning: "a refugee", accept: ["someone who has fled their country", "a person driven from home by war", "someone who has run from danger"], example: { jp: "Этот беженец живёт здесь уже год и хочет вернуться домой.", en: "This refugee has lived here for a year and wants to go home." }, drill: { jp: "Этот беженец совсем молодой", en: "This refugee is quite young" }, hint: "BE-zhe-nets — stress on the first syllable. MASCULINE. From бежать, to run, from unit 27. ⚠️ The е DROPS in every other form: бЕженца, бЕженцы — the same class as `отец` from unit 10. The feminine is беженка." },
        { id: "ru-u130l4-repatriatsiya", type: "vocab", front: "репатриация", reading: "repatriatsiya", meaning: "repatriation", accept: ["sending people back to their own country", "the return of people to their homeland", "bringing a country's own people home"], example: { jp: "Репатриация шла два года, и домой вернулись тысячи людей.", en: "The repatriation went on two years, and thousands of people came home." }, drill: { jp: "Эта репатриация шла очень долго", en: "This repatriation went on a very long time" }, hint: "ri-pat-ri-A-tsi-ya — six syllables, stress on A, and the first е reduces to i. FEMININE (-я). ⚠️ Built on the Latin for fatherland; Russian's own word for that is родина, from unit 8's `родной`." },
        { id: "ru-u130l4-izgnanie", type: "vocab", front: "изгнание", reading: "izgnanie", meaning: "banishment", accept: ["being driven out of a country", "exile forced on someone", "being sent away and not allowed back"], example: { jp: "Он жил в изгнании двадцать лет и писал книги о своей стране.", en: "He lived in banishment for twenty years and wrote books about his country." }, drill: { jp: "Это изгнание было очень долгое", en: "This banishment was very long" }, hint: "iz-GNA-ni-ye — stress on GNA. NEUTER (-ие). From гнать, to drive, with из-, out. ⚠️ A `беженец` leaves because he must; a person in изгнание is PUT out, by a state, and cannot come back." },
        { id: "ru-u130l4-gumanitarnyy", type: "vocab", front: "гуманитарный", reading: "gumanitarnyy", meaning: "humanitarian", accept: ["given to help people in trouble", "to do with relieving suffering", "sent as aid to people in need"], example: { jp: "Гуманитарный груз пришёл в город ночью, и утром хлеб был у всех.", en: "The humanitarian cargo came into the city at night, and in the morning everyone had bread." }, drill: { jp: "Этот гуманитарный груз очень важный", en: "This humanitarian cargo is very important" }, hint: "gu-ma-ni-TAR-nyy — stress on TAR. An ADJECTIVE, masculine singular; feminine гуманитарная, neuter гуманитарное. ⚠️ A SECOND sense that surprises English speakers: in Russian гуманитарные науки means the HUMANITIES — history, languages, literature — and that use is at least as common as the aid one." },
      ],
    },
  ],
};
