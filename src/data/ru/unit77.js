// RU Unit 77 — Душевное здоровье ("Mental health") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, ru/unit74.js §1–§5.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Health and wellbeing" AND THE BODY IS SPENT TWICE.
// u20 Тело и здоровье (голова · глаз · рука · нога · болеть · температура ·
// здоровье · лекарство · таблетка · простуда) and u53 Болезнь и лечение (шея ·
// горло · кость · мышца · кровь · мозг · нерв · желудок · печень · болезнь ·
// кашель · рана · операция · рецепт) are 48 cards of physical health. What
// neither touches is the MIND: a learner could describe a cough and a liver and
// had no word for anxiety, a breakdown, despair or a psychologist. That is this
// unit's 24, and it is the narrowing the crew brief measured.
//
// ⚠️ REFUSED on unit1.js §D — the taught word gives them away, and the first two
// were on the brief's own "free" list, which is a FRONT probe and cannot see a
// lexeme:
//   `надежда` (против `надеяться` u28l2) · `терпеть` (против `терпение` u56l2) ·
//   `грусть` (против `грустный` u28l1) · `стыд` (против `стыдно` u34l2) ·
//   `злость` (против `злой` u28l1) · `усталость` (против `устал` u7l3) ·
//   `успокаивать` (против `спокойный` u28l1) · `расслабляться` (против `слабый`
//   u20l4) · `поддержка` (против `держать` u57l1) · `сочувствие` (против
//   `чувство` u28l3) · `зависимость` (против `зависеть` u46l4) · `самооценка`
//   (против `оценка` u25l2) · `бессонница` (без + `сон` u29l4, and u38's header
//   bars без+X) · `обида` (против `обидно` u34l2) · `уверенность` (против
//   `уверен` u24l2) · `спокойствие` (против `спокойный`).
//   ⚠️ ONE OF THOSE REFUSALS IS NOW MOOT, and the line above used to assert the
//   opposite: `сочувствие` IS taught — block 1 carded it at u67l1. The refusal
//   was correct for THIS unit and is kept as the reason this unit does not card
//   it; it is not a claim that the word is absent from the course.
// ⚠️ TAKEN and not available: `давление` (u54l2 — it is the PHYSICS word, which
//   is why «давление на работе» cannot be carded here) · `настроение` (u28l3) ·
//   `страх` (u28l3) · `забота` (u56l1) · `внимание` (u12l3) · `одиночество`
//   (u56l4) · `доверие` (u56l4).
// ⚠️ TWO KEPT WITH REASONS: `переживать` is prefixed from `жить` (u4l2), and
//   unit31.js §3 sets the precedent that a PREFIXED derivation is allowed where
//   не+X is not — and «to take a thing hard» is not reachable from «to live».
//   `вина` is kept and `обвинять` «to accuse» is therefore NOT carded anywhere in
//   this block, to keep the вин- root at one.
//
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ CROSS-BLOCK DEDUPE, 2026-10-06 — 9 of 24 replaced, the second-largest yield.
// ═════════════════════════════════════════════════════════════════════════════
// The MIND narrowing above was sound, but block 1's u67 Тонкие чувства and u70
// Трудность и выход cover the same emotional ground from the other side, and
// block 3's u97 owns alarm. Block 2 yields to both:
//     тоска · раздражение -> u67 · срыв · преодолевать · бороться -> u70 ·
//     вина -> u71 · переживать -> u73 · тревога · паника -> u97
// ⚠️ SO THE TWO KEPT-WITH-REASONS NOTES ABOVE ARE NOW HISTORY, NOT RULES:
// `вина` and `переживать` both moved, and this unit no longer cards either. The
// вин- root argument still holds — nothing here cards обвинять.
// Replaced by: истощение · хандра (l1) · обморок · вспышка (l2) · неприязнь ·
// бремя · смятение (l3) · медитация · режим (l4), all screened against the live
// corpus AND against this header's refusal list — `обида` was the obvious l3
// word and was NOT used, because the line above refuses it against `обидно`.
// ⚠️ `неприязнь` is the one не+X in the set and is kept on a narrow ground: u38's
// bar is on не/без + a TAUGHT stem, and the positive приязнь is not a word
// anyone uses, so there is nothing for a learner to derive it from.
// ⚠️ FOUR SURVIVOR SENTENCES rewritten: апатия's example and drill both leaned on
// тревога, which is now taught at u97 — i.e. LATER than this unit.
//
// ND NOTE, since the subject is the app's own audience: every example here is
// written in the register a person uses about themselves, not a diagnosis
// handed down. The cards name the states; none of them judges one.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT77 = {
  id: "ru-u77",
  lang: "ru",
  title: "Душевное здоровье",
  order: 77,
  stage: "b1",
  lessons: [
    {
      id: "ru-u77l1",
      unit: 77,
      lesson: 1,
      title: "Naming the low states",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that someone has depression, is under stress, is in despair, is completely worn out or is in a low grey mood, and that they are suffering.",
      items: [
        { id: "ru-u77l1-depressiya", type: "vocab", front: "депрессия", reading: "depressiya", meaning: "depression", accept: ["clinical depression", "a depression", "low mood as an illness"], example: { jp: "У него депрессия уже второй год, хотя на работе об этом никто не знает.", en: "He has had depression for a second year now, although nobody at work knows about it." }, drill: { jp: "У него депрессия второй год", en: "He has had depression for a second year" }, hint: "de-PRE-ssi-ya — stress on PRE, and the сс is held. FEMININE (-я). ⚠️ Russian says «У меня депрессия» with у + the genitive, exactly like «у меня простуда» from unit 20 — the illness frame, not «я депрессия»." },
        { id: "ru-u77l1-stress", type: "vocab", front: "стресс", reading: "stress", meaning: "strain on the nerves", accept: ["stress", "the stress", "being under pressure"], example: { jp: "Если стресс продолжается месяцами, голова начинает болеть без причины.", en: "If stress goes on for months, your head begins to ache for no reason." }, drill: { jp: "Это очень сильный стресс", en: "That is very severe stress" }, hint: "STRESS — one syllable, and the сс at the end is held a beat. MASCULINE. ⚠️ GLOSSED «strain on the nerves» rather than «stress»: the English word normalises to this card's own reading, which `produceIsFreePass` would hand the learner for free (unit1.js §9). ⚠️ `давление` cannot be used for this: unit 54 cards it as the PHYSICS word, pressure in a pipe." },
        { id: "ru-u77l1-istoshchenie", type: "vocab", front: "истощение", reading: "istoshchenie", meaning: "complete exhaustion", accept: ["exhaustion", "being worn out completely", "depletion of strength"], example: { jp: "После года без отдыха у него было полное истощение.", en: "After a year without a rest he was completely exhausted." }, drill: { jp: "У него полное истощение", en: "He is completely exhausted" }, hint: "is-ta-SHCHE-ni-ye — stress on SHCHE, and the о reduces to a. NEUTER (-ие). From тощий, gaunt: a body or a mind worn down to nothing. ⚠️ Used of soil and of a country's reserves too — «истощение почвы»." },
        { id: "ru-u77l1-khandra", type: "vocab", front: "хандра", reading: "khandra", meaning: "a low grey mood", accept: ["the doldrums", "the blues", "a flat listless mood"], example: { jp: "Зимой у него всегда хандра, и помогает только работа.", en: "In winter he always has the blues, and only work helps." }, drill: { jp: "Зимой у него всегда хандра", en: "In winter he always has the blues" }, hint: "khan-DRA — stress on the last syllable. FEMININE (-а), and no plural. A grey mood with no clear cause — lighter than депрессия, which is a diagnosis, and more everyday than уныние from unit 67. A nineteenth-century literary word that ordinary Russians still use." },
        { id: "ru-u77l1-otchayanie", type: "vocab", front: "отчаяние", reading: "otchayanie", meaning: "despair", accept: ["desperation", "hopelessness", "being in despair"], example: { jp: "В отчаянии он написал старому другу, которого не видел десять лет.", en: "In despair he wrote to an old friend he had not seen for ten years." }, drill: { jp: "Это было полное отчаяние", en: "That was complete despair" }, hint: "at-CHA-ya-ni-ye — stress on CHA, and the о reduces to a. NEUTER (-ие). ⚠️ Most often in the frame «в отчАянии», in despair. Built on чаять, to expect — a verb no modern Russian uses alone, so nothing gives it away." },
        { id: "ru-u77l1-stradat", type: "vocab", front: "страдать", reading: "stradat", meaning: "to suffer", accept: ["to be in distress", "to suffer from something", "to be suffering"], example: { jp: "Страдать молча он умеет, а говорить об этом почти не может.", en: "He is good at suffering in silence and almost unable to talk about it." }, drill: { jp: "Он не хочет страдать молча", en: "He does not want to suffer in silence" }, hint: "stra-DAT — stress on the last syllable. Imperfective infinitive. ⚠️ Takes от + the genitive for the cause: «страдать от боли». Different root from страх and страшно (unit 28, unit 34) — страд-, not страх-, and the two never meet." },
      ],
    },
    {
      id: "ru-u77l2",
      unit: 77,
      lesson: 2,
      title: "When it tips over",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe tension, hysterics, apathy and an outburst of feeling, say that someone fainted, and say that they are seeing a psychologist.",
      items: [
        { id: "ru-u77l2-napryazhenie", type: "vocab", front: "напряжение", reading: "napryazhenie", meaning: "tension", accept: ["strain", "being tense", "nervous tension"], example: { jp: "Напряжение в семье чувствовали все, хотя никто ничего не говорил.", en: "Everyone felt the tension in the family, although nobody said anything." }, drill: { jp: "Напряжение чувствовали все", en: "Everyone felt the tension" }, hint: "na-prya-ZHE-ni-ye — stress on ZHE. NEUTER (-ие). ⚠️ Also the electrical sense, voltage — «высокое напряжение» on a warning sign. From напрягать, to strain, which is not taught, so nothing gives it away." },
        { id: "ru-u77l2-obmorok", type: "vocab", front: "обморок", reading: "obmorok", meaning: "a fainting fit", accept: ["a blackout", "briefly passing out", "a short loss of consciousness"], example: { jp: "У неё был обморок прямо на улице, но скоро она пришла в себя.", en: "She had a fainting fit right in the street, but soon came round." }, drill: { jp: "У неё был обморок на улице", en: "She had a fainting fit in the street" }, hint: "OB-ma-rok — stress on the first syllable, and both о after it are reduced. MASCULINE. ⚠️ Almost always in the fixed frame «упасть в обморок» — to faint. A short loss of consciousness and nothing more; it is not a collapse of the mind." },
        { id: "ru-u77l2-isterika", type: "vocab", front: "истерика", reading: "isterika", meaning: "hysterics", accept: ["a fit of hysterics", "a meltdown", "an uncontrolled outburst"], example: { jp: "После такого дня истерика почти всегда заканчивается слезами.", en: "After a day like that hysterics almost always end in tears." }, drill: { jp: "Это была настоящая истерика", en: "That was real hysterics" }, hint: "is-TE-ri-ka — stress on TE. FEMININE (-а). ⚠️ Not a clinical word in Russian and not a kind one: it describes a loss of control, so it is what a person says about their own worst evening, not a label for someone else." },
        { id: "ru-u77l2-vspyshka", type: "vocab", front: "вспышка", reading: "vspyshka", meaning: "an outburst", accept: ["a flare-up", "a sudden fit", "a burst of feeling"], example: { jp: "После такой вспышки гнева он всегда сам жалеет.", en: "After an outburst of anger like that he is always sorry himself." }, drill: { jp: "У него была вспышка гнева", en: "He had an outburst of anger" }, hint: "VSPYSH-ka — stress on the first syllable. FEMININE (-а). A sudden flare: of anger, of light, or of an illness in a town — «вспышка гриппа». The verb behind it is вспыхнуть, which is not carded." },
        { id: "ru-u77l2-apatiya", type: "vocab", front: "апатия", reading: "apatiya", meaning: "apathy", accept: ["listlessness", "indifference as a state", "having no energy for anything"], example: { jp: "Апатия хуже отчаяния: когда ничего не нужно, даже встать трудно.", en: "Apathy is worse than despair: when you need nothing, even getting up is hard." }, drill: { jp: "Апатия хуже отчаяния", en: "Apathy is worse than despair" }, hint: "a-PA-ti-ya — stress on PA. FEMININE (-я). ⚠️ `равнодушие` «indifference» is NOT carded: it is built on ровно (unit 37) and душа (unit 28) at once. апатия is the state, not the attitude." },
        { id: "ru-u77l2-psikholog", type: "vocab", front: "психолог", reading: "psikholog", meaning: "a psychologist", accept: ["a therapist", "the psychologist", "a counsellor"], example: { jp: "К психологу он ходил целый год, и об этом знала только сестра.", en: "He went to a psychologist for a whole year, and only his sister knew about it." }, drill: { jp: "Это очень хороший психолог", en: "That is a very good psychologist" }, hint: "psi-KHO-lak — stress on KHO, and the final г goes quiet, so it comes out -lak. MASCULINE. ⚠️ The drill uses the DATIVE психолОгу, because Russian goes К a specialist — unit 34's case. врач from unit 2 is a medical doctor." },
      ],
    },
    {
      id: "ru-u77l3",
      unit: 77,
      lesson: 3,
      title: "The feelings you carry",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name wrath, hatred, remorse, a settled dislike, inner turmoil and a burden someone carries.",
      items: [
        { id: "ru-u77l3-nepriyazn", type: "vocab", front: "неприязнь", reading: "nepriyazn", meaning: "a settled dislike", accept: ["a dislike", "ill feeling", "antipathy"], example: { jp: "Неприязнь между ними началась давно, но никто уже не помнит почему.", en: "The ill feeling between them began long ago, but nobody remembers why any more." }, drill: { jp: "Неприязнь между ними очень старая", en: "The ill feeling between them is very old" }, hint: "ne-pri-YAZN — stress on YAZN, and the знь at the end is one soft cluster. ⚠️ FEMININE despite the -ь (unit1.js §3). A quiet, lasting dislike — weaker than ненависть in this lesson and colder than раздражение from unit 67. ⚠️ Carded despite the не-, because the positive приязнь is not a word anyone uses, so this is not не+X on a taught stem." },
        { id: "ru-u77l3-gnev", type: "vocab", front: "гнев", reading: "gnev", meaning: "wrath", accept: ["rage", "fury", "great anger"], example: { jp: "Гнев был у него минуту, а стыдно ему было ещё неделю.", en: "His wrath lasted a minute, and he was ashamed for another week." }, drill: { jp: "Гнев был только минуту", en: "The wrath lasted only a minute" }, hint: "GNEV — one syllable, and the в goes quiet, so it comes out GNEF. MASCULINE. ⚠️ Heavier and more bookish than English anger — closer to wrath. The everyday adjective is злой from unit 28, which is why `злость` is not carded." },
        { id: "ru-u77l3-nenavist", type: "vocab", front: "ненависть", reading: "nenavist", meaning: "hatred", accept: ["hate", "loathing", "deep dislike"], example: { jp: "Ненависть к этой работе он чувствовал каждое утро, но молчал.", en: "He felt hatred for that job every morning, but said nothing." }, drill: { jp: "Это была чистая ненависть", en: "That was pure hatred" }, hint: "NE-na-vist — stress on the first syllable. ⚠️ FEMININE despite the -ь. Takes к + the dative for its object: «ненависть к работе». It opens with не-, but it is not a не+X formation — there is no «навись»." },
        { id: "ru-u77l3-bremya", type: "vocab", front: "бремя", reading: "bremya", meaning: "a burden you carry", accept: ["a burden", "a weight on someone", "something heavy to carry"], example: { jp: "Вина перед сыном стала для неё настоящим бременем.", en: "Her guilt towards her son became a real burden to her." }, drill: { jp: "Это бремя слишком тяжёлое для неё", en: "That burden is too heavy for her" }, hint: "BRE-mya — stress on the first syllable. ⚠️ NEUTER, and one of the ten -мя nouns that insert -ен- before every ending: бремя but брЕмени, брЕменем — the same pattern as время from unit 11 and имя from unit 3. Always figurative: a duty, a debt or a guilt, never a sack." },
        { id: "ru-u77l3-raskayanie", type: "vocab", front: "раскаяние", reading: "raskayanie", meaning: "remorse", accept: ["repentance", "regret for what you did", "contrition"], example: { jp: "Раскаяние было поздним, зато он сам о нём рассказал.", en: "The remorse was late, but he spoke about it himself." }, drill: { jp: "Раскаяние у него было поздним", en: "His remorse was late" }, hint: "ras-KA-ya-ni-ye — stress on KA. NEUTER (-ие). ⚠️ Different from вина: вина is the state of being guilty, раскаяние is wishing you had not. Same чаять root as отчаяние in lesson 1, which no learner would spot — the hint on each says so." },
        { id: "ru-u77l3-smyatenie", type: "vocab", front: "смятение", reading: "smyatenie", meaning: "inner turmoil", accept: ["confusion of mind", "a state of turmoil", "being thrown into disarray"], example: { jp: "В её словах было смятение, хотя говорила она спокойно.", en: "There was turmoil in her words, although she spoke calmly." }, drill: { jp: "В её словах было смятение", en: "There was turmoil in her words" }, hint: "smya-TE-ni-ye — stress on TE. NEUTER (-ие). From мять, to crumple — a mind that has been crumpled. Confusion and alarm at once; волнение from unit 67 is agitation you can see from outside, смятение is the state within." },
      ],
    },
    {
      id: "ru-u77l4",
      unit: 77,
      lesson: 4,
      title: "What helps",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about therapy, meditation and a daily routine, name a person who is your mainstay, and say that someone comforts you or takes your mind off it.",
      items: [
        { id: "ru-u77l4-terapiya", type: "vocab", front: "терапия", reading: "terapiya", meaning: "therapy", accept: ["treatment", "a course of therapy", "the therapy"], example: { jp: "Терапия помогает медленно, и это нужно знать заранее.", en: "Therapy helps slowly, and that needs to be known in advance." }, drill: { jp: "Терапия помогает очень медленно", en: "Therapy helps very slowly" }, hint: "te-ra-PI-ya — stress on PI. FEMININE (-я). ⚠️ Covers both talking therapy and medical treatment; «лечение» would be the general word but is not carded, because unit 35 teaches лечиться." },
        { id: "ru-u77l4-uteshat", type: "vocab", front: "утешать", reading: "uteshat", meaning: "to comfort", accept: ["to console", "to soothe someone", "to be a comfort to"], example: { jp: "Утешать он умеет молча — просто сидит рядом, пока не станет лучше.", en: "He knows how to comfort in silence — he just sits beside you until it gets better." }, drill: { jp: "Он умеет утешать молча", en: "He knows how to comfort in silence" }, hint: "u-te-SHAT — stress on the last syllable. Imperfective infinitive; the perfective is утешить. ⚠️ Not the same as помогать (unit 20): помогать changes the situation, утешать changes how it feels." },
        { id: "ru-u77l4-meditatsiya", type: "vocab", front: "медитация", reading: "meditatsiya", meaning: "meditation", accept: ["the practice of meditation", "sitting in meditation", "meditative practice"], example: { jp: "Медитация ему помогает больше, чем долгий разговор.", en: "Meditation helps him more than a long conversation." }, drill: { jp: "Медитация помогает ему каждый день", en: "Meditation helps him every day" }, hint: "me-di-TA-tsi-ya — stress on TA. FEMININE (-я). A recent loanword, and in Russian it still means the PRACTICE and not thinking a matter over — that is размышление, which is not carded." },
        { id: "ru-u77l4-rezhim", type: "vocab", front: "режим", reading: "rezhim", meaning: "a set daily routine", accept: ["a daily regime", "a routine of hours", "a regimen"], example: { jp: "Правильный режим дня помогает ему больше, чем любые советы.", en: "A proper daily routine helps him more than any advice." }, drill: { jp: "Правильный режим дня очень помогает", en: "A proper daily routine helps a great deal" }, hint: "re-ZHIM — stress on the last syllable. MASCULINE. «Режим дня» is the fixed phrase: the hours you sleep, eat and work, which Russian medicine treats as treatment in itself. ⚠️ The same word is a political regime and a setting on a machine — three senses, one spelling." },
        { id: "ru-u77l4-opora", type: "vocab", front: "опора", reading: "opora", meaning: "a mainstay", accept: ["a support", "a prop", "someone you lean on"], example: { jp: "Для матери он был главной опорой, и об этом она говорила всем.", en: "For his mother he was the main mainstay, and she told everyone so." }, drill: { jp: "Опора у него только одна", en: "He has only one mainstay" }, hint: "a-PO-ra — stress on PO, and the о reduces to a. FEMININE (-а). Both the physical prop under a bridge and the person who holds a family up. ⚠️ `поддержка` «support» is NOT carded: it is built on держать from unit 57." },
        { id: "ru-u77l4-otvlekat", type: "vocab", front: "отвлекать", reading: "otvlekat", meaning: "to distract", accept: ["to take someone's mind off", "to draw attention away", "to divert"], example: { jp: "Музыка отвлекает лучше, чем разговор, если думать уже трудно.", en: "Music distracts better than conversation when thinking has become hard." }, drill: { jp: "Музыка может отвлекать лучше всего", en: "Music can distract best of all" }, hint: "at-vle-KAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is отвлечь. ⚠️ Two directions in one word: отвлекать кого-то is to interrupt them, отвлекаться is to take your own mind off something. The reflexive is the useful one here." },
      ],
    },
  ],
};
