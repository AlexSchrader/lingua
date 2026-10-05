// RUSSIAN example/drill vocabulary scope — the check no gate runs.
//
// WHY THIS FILE EXISTS. `src/data/lint.js` gates example scope behind
// `isLatinLang()`, which requires >50% Latin fronts. Every Russian front is
// Cyrillic, so `exampleScopeWarnings` returns SILENTLY for ru: the rule RUNBOOK
// §4 calls "the one most likely to bite you in block 2 or 3" is unchecked for
// this language. Nothing will catch a seat that uses a word before it is taught.
//
// HOW IT CHECKS. Russian inflects far too heavily for the exact-string match
// lint uses (вода/воды/воду, говорить/говорю/говорит), so every taught front
// contributes a STEM — the front with its inflecting tail stripped — and a token
// is in scope when it starts with a stem taught at or before its unit. That
// over-accepts (a 3-letter stem matches a lot) and under-reports rather than
// crying wolf; it is a review list, not a gate.
//
// ESCAPE HATCH. A unit file may declare words it deliberately uses without
// teaching them — proper nouns, and the handful of function words a natural
// sentence cannot avoid — with a line of the form
//     // FREE: по-русски | каждый | старый
// A FREE word is in scope for that unit and every later one, exactly like a
// taught front. Declaring one is a CLAIM: it means "a learner meets this word in
// a sentence and is never asked to produce it."
//
//   node scripts/scope-ru.mjs          every authored ru unit
//   node scripts/scope-ru.mjs 7,8,9,10 only those units
import { readFileSync } from "node:fs";
import { RU_UNITS } from "../src/data/ru/index.js";

// Longest-first so "ами" is tried before "а". Three passes, and never strip
// below 3 characters — a 2-letter stem matches half the language.
const TAIL =
  /(ами|ями|ого|его|ому|ему|ыми|ими|ешь|ёшь|ите|ете|ёте|ая|яя|ое|ее|ой|ей|ый|ий|ую|юю|ам|ям|ах|ях|ов|ев|ые|ие|ем|ём|им|ут|ют|ат|ят|ла|ло|ли|ть|ти|шь|а|я|о|е|ы|и|у|ю|й|ь)$/;
const norm = (w) => String(w).toLowerCase().replace(/ё/g, "е");
function stem(word) {
  let s = norm(word);
  for (let i = 0; i < 3; i++) {
    const next = s.replace(TAIL, "");
    if (next === s || next.length < 3) break;
    s = next;
  }
  return s.length >= 3 ? s : norm(word);
}

// IRREGULAR PARADIGMS — the forms a suffix-stripper cannot reach from the front.
// Each key is a taught front; its values are surfaces that belong to that same
// lexeme and are therefore in scope wherever the front is. Russian pronouns
// change root outright (я → меня/мне/мной) and several core verbs mutate their
// stem (хотеть → хочу, видеть → вижу), so without this table every correct
// sentence in the corpus reads as a scope violation.
const PARADIGM = {
  я: ["меня", "мне", "мной"],
  ты: ["тебя", "тебе", "тобой"],
  он: ["его", "ему", "им", "нём", "него", "нему"],
  она: ["её", "ей", "неё", "ней"],
  мы: ["нас", "нам", "нами"],
  вы: ["вас", "вам", "вами"],
  // A2 block 1: `они` (u19l4) was the one pronoun with no entry — its oblique forms
  // change root like every other pronoun's, and `их` is carded separately as the
  // possessive, which left них/им/ними unreachable.
  они: ["их", "им", "ими", "них", "ним", "ними"],
  // EXTENDED BY BLOCK 3, 2026-09-27: `быть` is carded at u22 and u24 is the
  // past-tense unit, so был/была/было/были and буду/будет are unavoidable in
  // u22-u30 sentences. The stripper cannot reach any of them from "быть"
  // (its stem is "быть" itself), so without this every correct past-tense
  // sentence in the last third of the language read as a scope violation.
  быть: ["был", "была", "было", "были", "буду", "будешь", "будет", "будем", "будете", "будут"],
  // Two more whose stem mutates outright and which the -ся rule below still cannot
  // reach: бояться -> боюсь (the я vanishes), петь -> пою (the whole stem changes).
  бояться: ["боюсь", "боишься", "боится", "боимся", "боитесь", "боятся"],
  петь: ["пою", "поёшь", "поёт", "поём", "поёте", "поют", "пел", "пела", "пели"],
  хотеть: ["хочу", "хочешь", "хочет", "хотим", "хотите", "хотят"],
  видеть: ["вижу", "видишь", "видит", "видим", "видите", "видят"],
  жить: ["живу", "живёшь", "живет", "живём", "живете", "живут", "жил", "жила", "жило", "жили"],
  спать: ["сплю", "спишь", "спит", "спим", "спите", "спят", "спал", "спала", "спали"],
  любить: ["люблю", "любишь", "любит", "любим", "любите", "любят"],
  писать: ["пишу", "пишешь", "пишет", "пишем", "пишете", "пишут"],
  звать: ["зовут", "зову", "зовёшь", "зовём"],
  год: ["лет", "года", "году", "годы"],
  чай: ["чая", "чаю", "чаем"],
  ребёнок: ["дети", "детей", "детям", "детях", "детьми", "ребёнка", "ребенка", "ребёнку", "ребенку", "ребёнке", "ребенке"],
  мать: ["матери", "матерью"],
  дочь: ["дочери", "дочерью"],
  это: ["эта", "этот", "эти", "этом", "этой", "эту", "этого", "этому", "этим", "этими", "этих"],
  // Added by A2 block 1: `что` (u2l3) changes root outright in the oblique cases,
  // and "в чём", "о чём", "чего" are unavoidable once o + prepositional is taught
  // at u39. A generated paradigm, like every other entry here.
  что: ["чего", "чему", "чём", "чем"],
  // `человек` (u4l2) has an irregular plural on a different root entirely. люди
  // reads as a free front and must never be carded — it is this word's plural.
  человек: ["человека", "человеку", "человеком", "люди", "людей", "людям", "людьми", "людях"],
  мой: ["моего", "моему", "моём", "мои", "моих", "моим"],
  моя: ["моей", "мою"],
  твой: ["твоего", "твоему", "твоём", "твои", "твоих", "твоя", "твою", "твоей", "твоё", "твоим", "твоими"],
  // EXTENDED BY A2 BLOCK 1, 2026-09-29. Three classes, and all of them are
  // GENERATED INFLECTIONS in the standard paradigm — no lexical guesses. The
  // proof this is a fix and not a loosening is that the documented u1-u30 figure
  // does NOT move: 107 of 1374 sentences flagged, every one in u1-u6, before and
  // after. See ru/unit31.js §7.
  //
  // (a) A SHORT ADJECTIVE IN -ой IS UNREACHABLE FROM ITS OWN FRONT. TAIL strips
  //     "ой", and for a short stem that leaves under 3 characters, so the loop
  //     breaks and the stem stays the whole word: злой -> "злой", which none of
  //     злого/злым/злая starts with. Long ones are fine (большой -> "больш",
  //     другой -> "друг", плохой -> "плох"), which is why this only surfaced now.
  злой: ["злого", "злому", "злом", "злым", "злые", "злых", "злыми", "злая", "злую", "злой", "злое"],
  // (b) казаться MUTATES з -> ж THROUGHOUT THE PRESENT TENSE, so the -ся rule
  //     added by A1's block 3 reaches "каз" and nothing conjugated starts with it.
  //     ⚠️ Note this is the verb unit1.js §4 records block 3 as REFUSING as a
  //     third 3rd-person exception. Carding the INFINITIVE (u32l2) is legal and
  //     needs no exception; only the bare `кажется` front would have.
  казаться: ["кажусь", "кажешься", "кажется", "кажемся", "кажетесь", "кажутся", "казался", "казалась", "казалось", "казались"],
  // (c) THE TWO MOTION VERBS A1 TAUGHT AT u14l4 HAVE UNREACHABLE PRESENT TENSES.
  //     stem("идти") strips "ти" to "ид", which is under 3 characters, so the stem
  //     stayed "идти" and NOTHING it inflects into starts with it. ехать strips to
  //     "еха", which едет/еду do not start with either. A1 scored 0 out-of-scope
  //     across u11-u30 because it wrote AROUND both verbs' present tense, which is
  //     not the same as them being in scope — and an A2 band that teaches
  //     directional motion (u36) cannot write around them.
  идти: ["иду", "идёшь", "идет", "идёт", "идём", "идем", "идёте", "идете", "идут", "шёл", "шел", "шла", "шли"],
  ехать: ["еду", "едешь", "едет", "едем", "едете", "едут", "ехал", "ехала", "ехали"],
  друг: ["друга", "другу", "друге", "друзья", "друзей", "друзьям", "друзьями", "друзьях"],
  // (d) `один` AGREES LIKE AN ADJECTIVE and none of its forms is reachable: TAIL
  //     has no "н", so stem("один") stays "один" and одна/одно/одни start with
  //     "одн" instead. A2 needs the neuter and feminine constantly ("одно
  //     условие", "одна причина").
  один: ["одна", "одно", "одни", "одного", "одному", "одном", "одним", "одной", "одну", "одних"],
  // (e) TWO NOUNS WHOSE STEM DROPS A VOWEL. день -> дня and цветок -> цветы lose
  //     the е/о of the last syllable, so the front's stem ("ден", "цветок") is not
  //     a prefix of the inflected form. Both are A1 fronts (u3l3, u26l2) used
  //     constantly from here on.
  день: ["дня", "дню", "днём", "днем", "дни", "дней", "дням", "днями", "днях"],
  цветок: ["цветка", "цветку", "цветком", "цветы", "цветов", "цветам", "цветами"],
  // (f) THE SHORT-FORM ADJECTIVE CLASS. A1 carded these in the MASCULINE (u7l3,
  //     u24l2), and a short form has no stem the stripper can cut back to: TAIL
  //     has no "н", so stem("должен") stays "должен" and должна/должно/должны all
  //     start with "должн" instead. The feminine, neuter and plural are
  //     unavoidable in any sentence whose subject is not a single male.
  должен: ["должна", "должно", "должны"],
  рад: ["рада", "рады"],
  готов: ["готова", "готово", "готовы"],
  занят: ["занята", "занято", "заняты"],
  устал: ["устала", "устало", "устали"],
  уверен: ["уверена", "уверено", "уверены"],
  похож: ["похожа", "похоже", "похожи"],
  // (g) `всё` (u3l2) IS ONE LEXEME WITH весь/вся/все, and A2 cannot avoid its
  //     other forms (всю книгу, всех сотрудников). Keyed on the authored ё
  //     spelling, which the NORM_KEY lookup resolves. ⚠️ This entry is also the
  //     reason `весь` is NOT carded anywhere — see ru/unit32.js's header.
  "всё": ["все", "вся", "всю", "всего", "всему", "всем", "всех", "всеми", "весь"],
  // (h) `нужно` (u5l4) is carded as the neuter/adverbial form; its other short
  //     forms are what any sentence with a real subject needs.
  нужно: ["нужен", "нужна", "нужны"],
  ходить: ["хожу", "ходишь", "ходит", "ходим", "ходите", "ходят", "ходил", "ходила", "ходили"],
  // EXTENDED BY A2 BLOCK 2, 2026-09-29. Five entries, every one a GENERATED
  // INFLECTION in the standard paradigm of a front that IS carded — no lexical
  // guesses, same discipline as block 1's (a)-(h) above. The proof they are a fix
  // and not a loosening is that neither documented figure moves: u1-u30 stays at
  // 107 of 1374, every one still in u1-u6, and u31-u40 stays at 0 of 480.
  //
  // (i) THE -давать FAMILY DROPS -ава- IN THE PRESENT TENSE, so nothing it
  //     inflects into starts with the stem the stripper reaches. stem("давать")
  //     is "дав" and даю/даёшь/дают start with "да". u48l2 TEACHES that drop as
  //     its whole lesson, so it cannot be written around — the same position
  //     block 1 was in with идти/ехать at u36.
  давать: ["даю", "даёшь", "даешь", "даёт", "дает", "даём", "даем", "даёте", "даете", "дают", "давал", "давала", "давали"],
  сдавать: ["сдаю", "сдаёшь", "сдаешь", "сдаёт", "сдает", "сдаём", "сдаем", "сдаёте", "сдаете", "сдают", "сдавал", "сдавала", "сдавали"],
  создавать: ["создаю", "создаёшь", "создаешь", "создаёт", "создает", "создаём", "создаем", "создаёте", "создаете", "создают"],
  // (j) `дать` (u31l2) is the perfective of the same family and mutates further:
  //     stem("дать") is "дать" itself, which дам/дашь/дал start with none of.
  дать: ["дам", "дашь", "даст", "дадим", "дадите", "дадут", "дал", "дала", "дало", "дали", "дай", "дайте"],
  // (k) `мочь` (u47l3) mutates ч -> г/ж throughout. stem("мочь") is "моч" and
  //     могу/можешь/могут start with "мог"/"мож". Note "может" was already
  //     reachable, but only by accident — it is a piece of the u22l3 front
  //     `может быть`, which the exact-surface registration splits on whitespace.
  мочь: ["могу", "можешь", "может", "можем", "можете", "могут", "мог", "могла", "могло", "могли"],
  // (l) FOUR MORE NOUNS WHOSE STEM DROPS A VOWEL, the same class as день and
  //     цветок in (e) above. The last syllable's ё/е/о vanishes in every case but
  //     the nominative, so the front's stem is not a prefix of any inflected form:
  //     stem("кошелёк") is "кошелек" and кошелькА starts "кошельк". All four are
  //     block 2 fronts and all four have the drop stated in their own hint, so
  //     writing around them would contradict the card.
  "кошелёк": ["кошелька", "кошельку", "кошельком", "кошельке", "кошельки", "кошельков", "кошелькам", "кошельками"],
  образец: ["образца", "образцу", "образцом", "образце", "образцы", "образцов", "образцам", "образцами"],
  список: ["списка", "списку", "списком", "списке", "списки", "списков", "спискам", "списками"],
  заголовок: ["заголовка", "заголовку", "заголовком", "заголовке", "заголовки", "заголовков"],
  ездить: ["езжу", "ездишь", "ездит", "ездим", "ездите", "ездят", "ездил", "ездила", "ездили"],
  // (i) EXTENDED BY A2 BLOCK 3, 2026-09-29. The same class as (e): a noun whose
  //     LAST-SYLLABLE VOWEL DROPS, so its oblique and plural forms do not begin
  //     with the front's stem and every correct sentence using one reads as a
  //     violation. `камень` was already taught at u26l4 and its plural камни had
  //     been unreachable since; the other four are carded in u53–u57. EVERY FORM
  //     HERE IS A GENERATED INFLECTION IN THE STANDARD PARADIGM — no lexical
  //     guesses. The proof this is a fix and not a loosening is the u1–u30 figure,
  //     which must stay at block 1's documented 107: measured 107 before these
  //     entries and 107 after. See ru/unit60.js §7.
  камень: ["камня", "камню", "камнем", "камни", "камней", "камням", "камнями", "камнях"],
  отец: ["отца", "отцу", "отцом", "отце", "отцы", "отцов", "отцам", "отцами"],
  перец: ["перца", "перцу", "перцем", "перце"],
  корень: ["корня", "корню", "корнем", "корни", "корней", "корням", "корнями", "корнях"],
  кашель: ["кашля", "кашлю", "кашлем", "кашле"],
  поступок: ["поступка", "поступку", "поступком", "поступке", "поступки", "поступков", "поступкам"],
  //     And three whose PLURAL writes a ё or moves the stem, same reasoning.
  ведро: ["вёдра", "ведра", "вёдер", "ведер", "ведру", "ведром", "ведре"],
  облако: ["облака", "облаку", "облаком", "облаке", "облаков", "облакам", "облаками"],
  "лёд": ["льда", "льду", "льдом", "льде", "лёдом"],
  // (m) EXTENDED BY B1 BLOCK 1, 2026-10-05. Two entries, both GENERATED
  //     INFLECTIONS in the standard paradigm of a front that IS carded — no
  //     lexical guesses, same discipline as (a)–(l). The proof they are a fix and
  //     not a loosening is that neither documented figure moves: u1–u30 stays at
  //     107 of 1374 and u31–u60 stays at 0 of 1440, measured before and after.
  //
  //     `тот` (u22l4) AGREES AND DECLINES LIKE AN ADJECTIVE and not one of its
  //     forms is reachable: TAIL has no "т", so stem("тот") stays "тот" and
  //     та/то/те/того/тому/том all start with "т" + a different letter. ⚠️ THIS IS
  //     THE ONE THAT MATTERS AT B1, and it would have bitten all three blocks:
  //     «то, что …» is the backbone of Russian subordination, so a band whose
  //     whole job is relating clauses (unit61.js §1) cannot write around it the
  //     way A1 and A2 did.
  тот: ["та", "то", "те", "того", "тому", "том", "тем", "той", "ту", "тех", "теми", "тою"],
  //     `довольный` (u28l1) short forms, the same class as (f). The feminine and
  //     plural are what any sentence with a real subject needs, and the long
  //     form's stem "довольн" does not prefix "доволен" — the е is inserted.
  //     ⚠️ The ADVERB `довольно` "quite" is deliberately NOT listed: it is a
  //     different, untaught word, and putting it here would quietly make it
  //     in-scope everywhere, which is the loosening this table must never do.
  "довольный": ["доволен", "довольна", "довольны"],
  //     `сеть` (u43l2) is the same shape as (e)'s день: TAIL strips "ть" to "се",
  //     which is under 3 characters, so the loop breaks and the stem stays "сеть"
  //     — which сети/сетью/сетей do not start with.
  сеть: ["сети", "сетью", "сетей", "сетям", "сетями", "сетях"],
  //     `ждать` (u14l1) mutates its stem in the present tense: three passes take
  //     "ждать" down to "жда", which жду/ждёшь/ждут do not start with.
  ждать: ["жду", "ждёшь", "ждешь", "ждёт", "ждет", "ждём", "ждем", "ждёте", "ждете", "ждут", "ждал", "ждала", "ждали"],
  //     `никто` (u23l4) declines like кто and its stem loses the т: stem("никто")
  //     is "никт" and никого/никому/никем all run "нико" + a consonant.
  никто: ["никого", "никому", "никем", "ником"],
  //     And one form missing from (e)-class `ребёнок`, which already has an entry
  //     above: the PREPOSITIONAL singular. Added for completeness, not for a flag.
};

// norm(key) -> the authored PARADIGM key, so a front spelled with ё finds its own
// entry (see the lookup below).
const NORM_KEY = new Map(Object.keys(PARADIGM).map((k) => [norm(k), k]));

const items = [];
for (const u of RU_UNITS)
  for (const l of u.lessons ?? [])
    for (const it of l.items ?? []) items.push({ ...it, u: u.order, l: l.lesson });

// stem → earliest unit teaching it; and the exact surface of every front.
const born = new Map();
const exact = new Map();
const remember = (map, key, unit) => {
  const prev = map.get(key);
  if (prev === undefined || unit < prev) map.set(key, unit);
};
for (const it of items) {
  if (typeof it.front !== "string") continue;
  // A hyphenated front (по-русски) is ONE token in a sentence, so register the
  // whole string as well as its pieces — otherwise the card's own example flags.
  remember(exact, norm(it.front), it.u);
  for (const piece of norm(it.front).split(/[\s-]+/).filter(Boolean)) {
    remember(exact, piece, it.u);
    remember(born, stem(piece), it.u);
    // ⚠️ A REFLEXIVE INFINITIVE ALSO CONTRIBUTES ITS BARE STEM. The stripper stops
    // at -ся, so stem("смеяться") was "смеятьс" and NOTHING it inflects into —
    // смеюсь, смеялись, улыбается, надеюсь, ложусь — started with it. Every
    // correct reflexive sentence in the corpus read as a scope violation, which is
    // why block 2 wrote around them. Added by block 3, 2026-09-27: strip the
    // reflexive ending and register that stem too.
    if (/(ся|сь)$/.test(piece) && piece.length > 4)
      remember(born, stem(piece.slice(0, -2)), it.u);
    // ⚠️ PARADIGM is keyed on the AUTHORED spelling, so look it up with BOTH the
    // normalised piece and the raw one: `ребёнок` folds to "ребенок" here, which
    // never matched the "ребёнок" key, so дети/детей/детям were silently outside
    // the table for the whole of block 2. Found by block 3, 2026-09-27.
    for (const form of PARADIGM[piece] ?? PARADIGM[NORM_KEY.get(piece)] ?? [])
      remember(exact, norm(form), it.u);
  }
}

// FREE declarations, parsed out of the unit files.
const free = new Map(); // unit order → Set(word)
for (const u of RU_UNITS) {
  let src = "";
  try {
    src = readFileSync(`src/data/ru/unit${u.order}.js`, "utf8");
  } catch {
    continue;
  }
  const set = new Set();
  for (const m of src.matchAll(/^\/\/\s*FREE:\s*(.+)$/gm))
    m[1].split("|").map((s) => s.trim()).filter(Boolean).forEach((w) => set.add(norm(w)));
  if (set.size) free.set(u.order, set);
}

const tokenize = (s) => String(s ?? "").split(/[^\p{L}-]+/u).filter(Boolean);
// UNIT FILTER. Accepts a comma list (`41,42,43`), a range (`41..60`), or a mix
// (`3,41..60`). No argument means every unit.
//
// IT USED TO ACCEPT ONLY A COMMA LIST, AND A RANGE SILENTLY CHECKED NOTHING:
// `41..60` split to one token, Number("41..60") is NaN, no unit ever matched, and
// the script printed "0 sentence(s) checked · 0 carrying an out-of-scope token"
// — which reads as a pass. Two A2 seats reported a clean range on that output.
// Their content turned out to be clean when re-run correctly (960 · 0), so no bad
// content shipped, but the next seat would not have been so lucky.
//
// So: ranges parse, AND an argument that selects no real unit is a hard error
// rather than a quiet zero. A check that cannot reach the content must not be
// able to look like a check that passed.
function parseUnitFilter(arg) {
  if (!arg) return null;
  const orders = new Set(RU_UNITS.map((u) => u.order));
  const want = new Set();
  for (const part of String(arg).split(",").map((s) => s.trim()).filter(Boolean)) {
    const range = /^(\d+)\.\.(\d+)$/.exec(part);
    if (range) {
      const [a, b] = [Number(range[1]), Number(range[2])];
      if (a > b) throw new Error(`scope-ru: range "${part}" runs backwards`);
      for (let i = a; i <= b; i++) want.add(i);
      continue;
    }
    if (!/^\d+$/.test(part)) throw new Error(`scope-ru: "${part}" is not a unit number or a N..M range`);
    want.add(Number(part));
  }
  const real = [...want].filter((n) => orders.has(n));
  if (!real.length) throw new Error(`scope-ru: filter "${arg}" selects no existing ru unit (have ${Math.min(...orders)}..${Math.max(...orders)})`);
  const missing = [...want].filter((n) => !orders.has(n));
  if (missing.length) console.warn(`scope-ru: note — no such ru unit: ${missing.join(", ")}`);
  return new Set(real);
}
const only = parseUnitFilter(process.argv[2]);

let checked = 0;
let flagged = 0;
for (const it of items) {
  if (only && !only.has(it.u)) continue;
  // A FREE word inflects like any other, so it contributes its STEM too — a
  // declared `старый` covers старая, старое, старую without twelve entries.
  const allowed = new Set();
  const allowedStems = new Set();
  for (const [order, words] of free)
    if (order <= it.u)
      for (const w of words) {
        allowed.add(w);
        allowedStems.add(stem(w));
      }
  for (const [kind, text] of [
    ["example", it.example?.jp],
    ["drill", it.drill?.jp],
  ]) {
    if (!text) continue;
    checked += 1;
    const miss = [];
    for (const raw of tokenize(text)) {
      const n = norm(raw);
      if (allowed.has(n)) continue;
      const e = exact.get(n);
      if (e !== undefined && e <= it.u) continue;
      const s = stem(n);
      let ok = false;
      for (const as of allowedStems) if (as.length >= 3 && (s === as || n.startsWith(as))) { ok = true; break; }
      if (ok) continue;
      for (const [bornStem, bornUnit] of born) {
        if (bornUnit <= it.u && bornStem.length >= 3 && (s === bornStem || n.startsWith(bornStem))) {
          ok = true;
          break;
        }
      }
      if (!ok) miss.push(raw);
    }
    if (miss.length) {
      flagged += 1;
      console.log(`u${it.u}l${it.l} ${it.id} ${kind}: ${[...new Set(miss)].join(", ")}   « ${text}`);
    }
  }
}
console.log(`\n${checked} sentence(s) checked · ${flagged} carrying an out-of-scope token`);
