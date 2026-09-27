// RU Unit 24 — Прошедшее время ("The past tense") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here. Last
// of Russian's three grammar units. The slot title was "Grammar 3 — past tense
// and agreement", and unlike u23's it DID apply: the Russian past tense IS an
// agreement system, which is the one thing that makes it easy and the one thing
// that makes it foreign.
//
// ⚠️ HOW A PAST TENSE GETS TAUGHT WHEN AN INFLECTED FORM CANNOT BE A CARD.
// unit1.js §5: "AN INFLECTED FORM IS NEVER ITS OWN CARD." был is an inflection of
// быть (u22), and читал of читать (u4), so not one past-tense form in Russian can
// be a front. The unit therefore teaches the tense the way CLAUDE.md says grammar
// is always taught here — structurally:
//     * l1's six fronts are the TIME WORDS that force a past tense, and every one
//       of their sentences is in it (прошлый · тогда · давно · история · сначала ·
//       наконец)
//     * l2's six are SHORT-FORM ADJECTIVES that agree exactly as the past tense
//       does — должен/должна/должно/должны is был/была/было/были with a different
//       stem, so learning one teaches the other
//     * l3's six are new imperfective verbs whose examples are all past
//     * l4 places the event in time and looks forward
// The rule itself is stated in full on the `быть` card at u22l4 and in `должен`'s
// hint here: -л for a man, -ла for a woman, -ло for a neuter thing, -ли for more
// than one — and NO change for person, so я читал and ты читал are the same word.
//
// ⚠️ `должен` · `готов` · `занят` · `уверен` ARE SHORT FORMS AND THE FRONT IS THE
// MASCULINE, exactly as block 1 already did with `рад` (u7), `устал` (u7) and
// `похож` (u10). The hint on each names the other three endings. This is not a
// §5 violation: a short form is a separate grammatical word, not a case of the
// long adjective, and Russian has no long form of должен at all.
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT — hand-checked, since `normalizeMeaning` strips
// articles and parentheticals before comparing:
//     `прошлый` takes "previous" and u21 `последний` keeps "last". English uses
//             "last" for both last-in-time and last-in-a-row; Russian never does,
//             and giving both cards "last" would have been one prompt, two answers.
//     `должен` takes "must" and leaves "it is necessary" to u5 `нужно` — and
//             `надо` is not carded at all, for the same reason.
//     `уверен` takes "sure" · u22 `точно` "exactly" · u6 `конечно` "of course" ·
//             u6 `правильно` "correctly". Four kinds of certainty, four words.
//     `счастливый` takes "happy" and u7 `рад` keeps "glad (masculine form)".
//     `менять` takes "to change" — nothing else in ru normalises to "change"
//             (`сдача` was considered for u21 and dropped for exactly this).
//     `начало` "the beginning" — `конец` was considered for u30 and dropped,
//             partly because наконец's hint leans on конец not being taught.
//
// ⚠️ LEXEME CALLS RECORDED (unit1.js §D — judgements, not measurements):
//   `прошлый` beside u21 `последний` — different roots, different senses. Allowed.
//   `сначала` beside `начало` in this same unit — сначала is a frozen ADVERB and
//        начало a noun; начинать, the verb they both come from, is not taught
//        anywhere in A1, so neither card is derivable from the other. Allowed, and
//        both hints say so.
//   `будущее` beside u22 `быть` — etymologically the future participle of быть, and
//        completely opaque to a learner. Allowed.
//   `голодный` beside u20 `голова` and u16 `голубой` — three unrelated words that
//        merely start alike. The hint on голодный names all three on purpose.
//   AVOIDED on the same test: `раньше` (vs u11 рано — a bare comparative, exactly
//        the больше/много shape block 1 refused) · `недавно` (vs `давно` in this
//        same lesson — не+давно, which the learner already has) · `вовремя` (vs
//        u11 время — во+время, transparent) · `навсегда` (vs u11 всегда) ·
//        `опаздывать` (vs u11 поздно) · `начинать` (vs `начало`) · `прав` (vs u6
//        правильно and u22 правда — three from one root is two too many) ·
//        `отвечать` (vs u7 ответ) · `снова` (chose u22's опять).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT24 = {
  id: "ru-u24",
  lang: "ru",
  title: "Прошедшее время",
  order: 24,
  stage: "a1",
  lessons: [
    {
      id: "ru-u24l1",
      unit: 24,
      lesson: 1,
      title: "Put the sentence into the past",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Tell a short story in order: last month, back then, long ago, at first, and finally.",
      items: [
        { id: "ru-u24l1-proshlyy", type: "vocab", front: "прошлый", reading: "proshlyy", meaning: "previous", accept: ["last (in time)", "the previous one", "past"], example: { jp: "В прошлом месяце было очень холодно.", en: "Last month it was very cold." }, drill: { jp: "Прошлый год был очень трудный", en: "Last year was very hard" }, hint: "PROSH-lyy, stress first. ⚠️ It is last in TIME — прошлый год, last year — where unit 21's последний is last in a ROW. English packs both into one word and Russian never does. For time ahead Russian says будущий, from the same root as lesson 4's будущее." },
        { id: "ru-u24l1-togda", type: "vocab", front: "тогда", reading: "togda", meaning: "at that time", accept: ["then", "back then", "in that case"], example: { jp: "Тогда здесь не было магазина, только дорога.", en: "Back then there was no shop here, only a road." }, drill: { jp: "Тогда мы были очень молодые", en: "Back then we were very young" }, hint: "tag-DA, stress at the end. Two jobs: back THEN in the past, and in that case in an argument — Тогда не нужно. It is unit 22's когда with т for к, exactly the pair тот and кто make." },
        { id: "ru-u24l1-davno", type: "vocab", front: "давно", reading: "davno", meaning: "long ago", accept: ["a long time ago", "for ages", "long since"], example: { jp: "Это было очень давно, когда я был маленький.", en: "That was a very long time ago, when I was small." }, drill: { jp: "Это было очень давно здесь", en: "That was a very long time ago here" }, hint: "dav-NO, stress at the end. ⚠️ WITH A PRESENT TENSE it means for ages and still going: Я давно здесь живу — I have lived here a long time. English needs a perfect tense there and Russian just uses the present. With a past tense it is plain long ago." },
        { id: "ru-u24l1-istoriya", type: "vocab", front: "история", reading: "istoriya", meaning: "a story", accept: ["story", "a tale", "history"], example: { jp: "Это очень старая история, и я её помню.", en: "That is a very old story, and I remember it." }, drill: { jp: "Эта история очень старая и интересная", en: "This story is very old and interesting" }, hint: "is-TO-ri-ya, stress on TO. Feminine (-я). ⚠️ ONE WORD FOR TWO ENGLISH ONES: a story you tell, and history as a subject. So Это длинная история is both a long story and a long history, and only context decides." },
        { id: "ru-u24l1-snachala", type: "vocab", front: "сначала", reading: "snachala", meaning: "at first", accept: ["first of all", "to begin with", "from the start"], example: { jp: "Сначала мы работали, а потом отдыхали.", en: "At first we worked, and then we rested." }, drill: { jp: "Сначала мы работали а потом спали", en: "At first we worked and then we slept" }, hint: "sna-CHA-la, stress on CHA. It opens the sequence сначала… потом… наконец. It also means all over again — начни сначала, start from the beginning. Lesson 4's начало is the noun it is frozen out of." },
        { id: "ru-u24l1-nakonets", type: "vocab", front: "наконец", reading: "nakonets", meaning: "finally", accept: ["at last", "in the end", "eventually"], example: { jp: "Наконец мы дома, и это очень приятно.", en: "Finally we are home, and that is very pleasant." }, drill: { jp: "Наконец мы дома и всё хорошо", en: "Finally we are home and all is well" }, hint: "na-ka-NETS, stress at the end. It closes the sequence сначала… потом… наконец. On its own with feeling — Наконец-то! — it is the English At last! ⚠️ Do not try to read the -конец: конец, an end, is not taught anywhere in this course." },
      ],
    },
    {
      id: "ru-u24l2",
      unit: 24,
      lesson: 2,
      title: "Make the word agree with who you mean",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say you must, are ready, are busy, are sure, are hungry or are happy — and change the ending to match who you are.",
      items: [
        { id: "ru-u24l2-dolzhen", type: "vocab", front: "должен", reading: "dolzhen", meaning: "must", accept: ["have to", "obliged to", "ought to"], example: { jp: "Я должен работать сегодня, и это трудно.", en: "I must work today, and that is hard." }, drill: { jp: "Я должен работать сегодня утром", en: "I must work this morning" }, hint: "DOL-zhen, stress first. ⚠️ THE WHOLE LESSON IS IN THIS CARD: it AGREES with who must, like an adjective and quite unlike English — я должен (a man), я должна (a woman), оно должно, мы должны. The past tense does exactly the same: был, была, было, были. The verb after it is an infinitive: должен работать. Unit 5's нужно is impersonal and agrees with nobody." },
        { id: "ru-u24l2-gotov", type: "vocab", front: "готов", reading: "gotov", meaning: "ready", accept: ["prepared", "all set"], example: { jp: "Наш ужин готов, и мы очень голодные.", en: "Our supper is ready, and we are very hungry." }, drill: { jp: "Наш ужин уже готов сегодня", en: "Our supper is already ready today" }, hint: "ga-TOV, stress at the end. Agrees like должен: готов, готова, готово, готовы. Наш ужин готов, supper is ready; я готов, I am ready. A waiter who asks Вы готовы? wants your order." },
        { id: "ru-u24l2-zanyat", type: "vocab", front: "занят", reading: "zanyat", meaning: "busy", accept: ["occupied", "taken", "engaged"], example: { jp: "Он всегда занят, и мы редко его видим.", en: "He is always busy, and we rarely see him." }, drill: { jp: "Он всегда занят в декабре", en: "He is always busy in December" }, hint: "ZA-nyat, stress first. Agrees: занят, занята, занято, заняты. ⚠️ Of a PERSON it is busy; of a seat or a cubicle it is taken — Занято is the sign on a Russian toilet door that unit 12 did not show you. Its opposite is unit 23's свободный." },
        { id: "ru-u24l2-uveren", type: "vocab", front: "уверен", reading: "uveren", meaning: "sure", accept: ["certain", "confident", "convinced"], example: { jp: "Я уверен, что она уже дома.", en: "I am sure that she is home already." }, drill: { jp: "Я уверен что это правда", en: "I am sure that this is the truth" }, hint: "u-VE-ren, stress on VE. Agrees: уверен, уверена, уверены. It takes что for what you are sure of, with a comma, always. Unit 22's точно is certainty about a fact; уверен is a person's own confidence." },
        { id: "ru-u24l2-golodnyy", type: "vocab", front: "голодный", reading: "golodnyy", meaning: "hungry", accept: ["starving", "in need of food"], example: { jp: "Я очень голодный, и наш ужин уже готов.", en: "I am very hungry, and our supper is already ready." }, drill: { jp: "Я очень голодный и уже устал", en: "I am very hungry and already tired" }, hint: "ga-LOD-nyy, stress on LOD. A FULL adjective, so it agrees the long way — голодный, голодная, голодное — not the short way должен does. ⚠️ THREE WORDS THAT MERELY START ALIKE: голодный hungry, голова a head (unit 20), голубой light blue (unit 16). Nothing connects them." },
        { id: "ru-u24l2-schastlivyy", type: "vocab", front: "счастливый", reading: "schastlivyy", meaning: "happy", accept: ["fortunate", "lucky", "a happy one"], example: { jp: "Он счастливый человек, потому что у него есть семья.", en: "He is a happy man, because he has a family." }, drill: { jp: "Он очень счастливый человек сегодня", en: "He is a very happy man today" }, hint: "schis-LI-vyy, stress on LI — and the т of счаст- is silent, so it starts SCHIS-, not SCHAST-. ⚠️ A BIG word in Russian, not the everyday cheerful of English happy; unit 7's рад is closer to that. Счастливого пути! is what you say to someone setting off on a journey." },
      ],
    },
    {
      id: "ru-u24l3",
      unit: 24,
      lesson: 3,
      title: "Tell what you did: six new verbs in the past",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say you decided, lost, found, changed, left something behind, or went out for a walk.",
      items: [
        { id: "ru-u24l3-reshat", type: "vocab", front: "решать", reading: "reshat", meaning: "to decide", accept: ["to resolve", "to solve", "to make up your mind"], example: { jp: "Мы долго решали, куда идти вечером.", en: "We took a long time deciding where to go in the evening." }, drill: { jp: "Нужно решать этот вопрос сегодня", en: "One must decide this question today" }, hint: "ri-SHAT, stress at the end: я решаю, ты решаешь. Past: решал, решала, решали. TWO senses — to decide, and to solve: решать задачу is to work through a maths problem, which is what a Russian schoolchild does all day." },
        { id: "ru-u24l3-teryat", type: "vocab", front: "терять", reading: "teryat", meaning: "to lose", accept: ["to mislay", "to lose track of"], example: { jp: "Я часто теряю ключи, и это очень плохо.", en: "I often lose my keys, and that is very bad." }, drill: { jp: "Не нужно терять этот ключ", en: "One should not lose this key" }, hint: "ti-RYAT, stress at the end: я теряю, ты теряешь. Past: терял, теряла. It loses a THING, in the accusative. Losing a MATCH is a different verb altogether, проиграть, which A2 teaches." },
        { id: "ru-u24l3-nakhodit", type: "vocab", front: "находить", reading: "nakhodit", meaning: "to find", accept: ["to come across", "to locate", "to discover"], example: { jp: "Я всегда находил ключи в сумке.", en: "I always found the keys in the bag." }, drill: { jp: "Здесь можно находить всё быстро", en: "Here one can find everything quickly" }, hint: "na-kha-DIT, stress at the end, and the д becomes ж in the я form: я нахожу, ты находишь. Past: находил, находила. It is the answer to unit 15's искать — искать is to look for, находить is to actually find. Block 2 cut находиться, to be located: same root, different word, A2's job." },
        { id: "ru-u24l3-menyat", type: "vocab", front: "менять", reading: "menyat", meaning: "to change", accept: ["to swap", "to exchange", "to alter"], example: { jp: "Я не хочу менять этот старый телефон.", en: "I do not want to change this old telephone." }, drill: { jp: "Нужно менять эту старую лампу", en: "One must change this old lamp" }, hint: "mi-NYAT, stress at the end: я меняю, ты меняешь. Past: менял, меняла. ⚠️ ONE SOUND FROM меня, me (unit 4) — mi-NYAT and mi-NYA — and the two are unrelated. It swaps one thing for another: менять деньги, to change money." },
        { id: "ru-u24l3-ostavlyat", type: "vocab", front: "оставлять", reading: "ostavlyat", meaning: "to leave behind", accept: ["to leave", "to abandon", "to leave somewhere"], example: { jp: "Я всегда оставляю сумку на столе.", en: "I always leave my bag on the table." }, drill: { jp: "Не нужно оставлять сумку здесь", en: "One should not leave a bag here" }, hint: "as-tav-LYAT, stress at the end: я оставляю, ты оставляешь. Past: оставлял, оставляла. ⚠️ It leaves a THING somewhere — not a place. Leaving a place needs a prefixed verb of motion, which unit1.js §5 defers to B1. Оставь меня! is Leave me alone!" },
        { id: "ru-u24l3-gulyat", type: "vocab", front: "гулять", reading: "gulyat", meaning: "to go for a walk", accept: ["to walk", "to stroll", "to be out and about"], example: { jp: "Летом мы гуляли в парке каждый вечер.", en: "In summer we went for a walk in the park every evening." }, drill: { jp: "Летом можно гулять в парке", en: "In summer one can walk in the park" }, hint: "gu-LYAT, stress at the end: я гуляю, ты гуляешь. Past: гулял, гуляла. ⚠️ NOT walking somewhere — гулять is walking for pleasure with no destination at all. Russian parents send a child гулять the way English ones say go and play outside." },
      ],
    },
    {
      id: "ru-u24l4",
      unit: 24,
      lesson: 4,
      title: "Place the event in time",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say it lasted a whole day, that it is time to go, that it happened suddenly, and what is still to come.",
      items: [
        { id: "ru-u24l4-tselyy", type: "vocab", front: "целый", reading: "tselyy", meaning: "whole", accept: ["entire", "a whole one", "all of it"], example: { jp: "Я работал целый день, и очень устал.", en: "I worked the whole day, and got very tired." }, drill: { jp: "Я работал целый день сегодня", en: "I worked the whole day today" }, hint: "TSE-lyy, stress first. It stresses the LENGTH of a thing: целый день, a whole day; целый год. ⚠️ Not to be confused with цель, a goal (unit 25) — the same three letters, a different word, and the readings differ: tselyy and tsel." },
        { id: "ru-u24l4-pora", type: "vocab", front: "пора", reading: "pora", meaning: "it is time", accept: ["time to go", "high time", "the moment has come"], example: { jp: "Уже поздно, и детям пора спать.", en: "It is late already, and it is time for the children to sleep." }, drill: { jp: "Уже поздно и пора спать", en: "It is late already and time to sleep" }, hint: "pa-RA, stress at the end. Feminine (-а) as a noun, but you will meet it as a one-word sentence: Пора! With an infinitive after it — пора спать — and a dative person in front: нам пора, it is time for us to go." },
        { id: "ru-u24l4-sluchay", type: "vocab", front: "случай", reading: "sluchay", meaning: "an occasion", accept: ["a case", "an instance", "a chance event"], example: { jp: "Это был очень трудный случай, и мы решали долго.", en: "That was a very hard case, and we were a long time deciding." }, drill: { jp: "Это очень трудный случай сегодня", en: "This is a very hard case today" }, hint: "SLU-chay, stress first. Masculine — the й counts as a consonant ending (unit1.js §3). THREE everyday uses: a case (в этом случае), an occasion, and a chance — случайно means by accident. На всякий случай, just in case, is the one you will hear most." },
        { id: "ru-u24l4-vdrug", type: "vocab", front: "вдруг", reading: "vdrug", meaning: "suddenly", accept: ["all of a sudden", "unexpectedly", "out of the blue"], example: { jp: "Вдруг был очень сильный дождь.", en: "Suddenly there was very heavy rain." }, drill: { jp: "Вдруг был очень сильный ветер", en: "Suddenly there was a very strong wind" }, hint: "VDRUG, one syllable, and the final г goes quiet to k: VDRUK. It is THE storytelling word — a Russian folk tale turns on Вдруг… where English turns on Suddenly… ⚠️ It also asks a what-if: А вдруг он дома?" },
        { id: "ru-u24l4-nachalo", type: "vocab", front: "начало", reading: "nachalo", meaning: "the beginning", accept: ["the start", "a beginning", "the opening"], example: { jp: "Начало этого фильма очень интересное.", en: "The beginning of this film is very interesting." }, drill: { jp: "Начало этой истории очень трудное", en: "The beginning of this story is very hard" }, hint: "na-CHA-la, stress on CHA. Neuter (-о). В начале means at the beginning. ⚠️ Nothing in A1 teaches начинать, to begin — that verb is A2 — so начало arrives as a noun on its own, and lesson 1's сначала is the adverb frozen out of it." },
        { id: "ru-u24l4-budushchee", type: "vocab", front: "будущее", reading: "budushchee", meaning: "the future", accept: ["future", "the time ahead", "what is to come"], example: { jp: "Я не знаю, какое будет наше будущее.", en: "I do not know what our future will be." }, drill: { jp: "Наше будущее это наш новый дом", en: "Our future is our new house" }, hint: "BU-du-shche-ye, stress first. Neuter, and grammatically an ADJECTIVE used as a noun — the future thing — so it declines like новое: в будущем, in the future. It is built on быть (unit 22) and is the opposite of lesson 1's прошлый." },
      ],
    },
  ],
};
