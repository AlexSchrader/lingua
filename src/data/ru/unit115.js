// RU Unit 115 — Смешанные чувства ("Mixed feelings") — B2
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE SCAFFOLD TITLE WAS `Emotion, subtle and mixed` AND THE SUBTLE EMOTIONS
// ALREADY SHIPPED — 24 of them, at u67 Тонкие чувства: `восторг` ·
// `восхищение` · `облегчение` · `умиление` · `волнение` · `сочувствие` ·
// `тоска` · `печаль` · `уныние` · `горе` · `досада` · `разочарование` ·
// `ярость` · `раздражение` · `негодование` · `смущение` · `отвращение` ·
// `презрение` · `ужас` · `изумление` · `недоумение` · `сожаление` ·
// `равнодушный` · `мрачный`. u77 adds `отчаяние` · `хандра` · `смятение` ·
// `раскаяние` · `гнев` · `ненависть` · `апатия` · `неприязнь` · `бремя`;
// u28 the basic set (`грустный` · `злой` · `гордый` · `страх` · `чувство` ·
// `настроение` · `душа`); u56 `зависть` · `совесть` · `наглый`; u78 `ревность`;
// u73 `ностальгия`; u61 `упрёк`; u86 the senses.
// So "emotion" is spent three times over. This unit is narrowed to the ONE
// shape none of them has: A FEELING THAT IS TWO THINGS AT ONCE — pleasure with
// an edge, pain with a sweetness, and the feelings a person will not own up to.
//
// ⚠️ CROSS-BLOCK: `терпимость` IS BLOCK 1's u107 and `дискриминация` ·
// `предрассудок` · `стереотип` ARE BLOCK 1's u109. This unit cards NONE of
// them, although l3 ("feelings you would rather not admit") is exactly where a
// seat would reach for them.
//
// ⚠️ TEN CANDIDATES REFUSED ON unit1.js §D — the adverb or adjective is already
// taught and the noun is what it names:
//   `стыд` (vs `стыдно` u34) · `обида` (vs `обидно` u34) · `жалость` (vs `жаль`
//   u7) · `злость` (vs `злой` u28) · `гордость` (vs `гордый` u28) ·
//   `сострадание` (vs `страдать` u77) · `смесь` (vs `мешать` u34) ·
//   `противоречивый` (vs `противоречие` u52) · `трогательный` (vs `трогать`
//   u49) · `скука` (vs `скучно` u6 AND `скучать` u34).
// ⚠️ ALSO REFUSED: `покорность` and `снисхождение`, because u119 (also mine)
//   cards `покорный` and `снисходительный` — one lexeme each, and the ADJECTIVE
//   is the form a learner actually produces. `уязвимый` was dropped as a
//   duplicate prompt for `ранимый`; it is free for block 1's u108 if risk wants
//   it. `смешанный` was dropped as a participle of a verb the course teaches.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT115 = {
  id: "ru-u115",
  lang: "ru",
  title: "Смешанные чувства",
  order: 115,
  stage: "b2",
  lessons: [
    {
      id: "ru-u115l1",
      unit: 115,
      lesson: 1,
      title: "Pleasure that is not simple",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name bliss, a settled peace, tenderness towards someone, a tremor of awe, a languid yearning and euphoria.",
      items: [
        { id: "ru-u115l1-blazhenstvo", type: "vocab", front: "блаженство", reading: "blazhenstvo", meaning: "bliss", accept: ["perfect contentment", "a state of bliss", "utter well-being"], example: { jp: "Блаженство — это горячий чай после долгой дороги.", en: "Bliss is hot tea after a long journey." }, drill: { jp: "Блаженство это горячий чай после долгой дороги", en: "Bliss is hot tea after a long journey" }, hint: "bla-ZHEN-stva — stress on ZHEN, and the final о reduces to a. NEUTER (-о). ⚠️ HALF-IRONIC IN EVERYDAY USE: a Russian says «блаженство!» about a hot bath, not about heaven, and the religious sense («блаженный», blessed) is the older one underneath. `восторг` (u67) is rapture and loud; блаженство is quiet." },
        { id: "ru-u115l1-umirotvorenie", type: "vocab", front: "умиротворение", reading: "umirotvorenie", meaning: "a settled peace", accept: ["serenity", "being at peace", "a calm that has settled"], example: { jp: "Умиротворение пришло только к вечеру, когда стало тихо.", en: "A settled peace came only towards evening, when it became quiet." }, drill: { jp: "Умиротворение пришло только к вечеру", en: "A settled peace came only towards evening" }, hint: "u-mi-ra-tva-RE-ni-ye — seven syllables, stress on RE, every unstressed о reducing to a. NEUTER (-ие). Built on `мир` (u30) — «a making-peaceful». ⚠️ DIFFERENT FROM `спокойный` (u28): спокойный is a temperament, умиротворение is a state that ARRIVED after something was resolved. A slightly literary word, and the right one for the end of a hard day." },
        { id: "ru-u115l1-nezhnost", type: "vocab", front: "нежность", reading: "nezhnost", meaning: "tenderness towards someone", accept: ["gentle affection", "a tender feeling for a person", "tenderness for a loved one"], example: { jp: "Нежность к детям у него есть, но говорить о ней он не умеет.", en: "He has tenderness towards children, but he does not know how to talk about it." }, drill: { jp: "Нежность к детям у него есть", en: "He has tenderness towards children" }, hint: "NEZH-nast — stress on the first syllable, and the final о reduces to a. FEMININE (-ость, as every -ость noun is). ⚠️ KEEP IT APART FROM `умиление` (u67): умиление is what a kitten does to you, нежность is what you feel TOWARDS a person you love. Also used of food and fabric — «нежное мясо», tender meat." },
        { id: "ru-u115l1-trepet", type: "vocab", front: "трепет", reading: "trepet", meaning: "a tremor of awe", accept: ["a thrill of fear and reverence", "trembling awe", "an awed flutter"], example: { jp: "Трепет перед этим человеком был у всех, даже у его друзей.", en: "Everyone felt awe before this man, even his friends." }, drill: { jp: "Трепет перед этим человеком был у всех", en: "Everyone felt awe before this man" }, hint: "TRE-pet — stress on the first syllable. MASCULINE. ⚠️ TWO THINGS AT ONCE, which is why it is in this unit: fear and admiration in the same feeling. «С трепетом» means with a fluttering heart. Related to `дрожать` (u80) in sense but not in root, so it is a separate lexeme." },
        { id: "ru-u115l1-tomlenie", type: "vocab", front: "томление", reading: "tomlenie", meaning: "a languid yearning", accept: ["listless longing", "a sweet restlessness", "a drowsy ache of wanting"], example: { jp: "Томление в такие дни знакомо каждому, кто ждёт письма.", en: "On days like these the languid yearning is familiar to anyone waiting for a letter." }, drill: { jp: "Томление в такие дни знакомо каждому", en: "On days like these the languid yearning is familiar to everyone" }, hint: "tam-LE-ni-ye — stress on LE, and the о reduces to a. NEUTER (-ие). ⚠️ KEEP IT APART FROM `тоска` (u67), which is a deep ache for something lost: томление is softer, aimless and faintly pleasant — the feeling of a hot afternoon with nothing to do. Its verb томиться also means «to simmer» in a kitchen, which is exactly the picture." },
        { id: "ru-u115l1-eyforiya", type: "vocab", front: "эйфория", reading: "eyforiya", meaning: "euphoria", accept: ["elation out of proportion", "an unreasonable elation", "a giddy high"], example: { jp: "Эйфория после победы прошла за три дня.", en: "The euphoria after the victory passed within three days." }, drill: { jp: "Эйфория после победы прошла за три дня", en: "The euphoria after the victory passed within three days" }, hint: "ey-fa-RI-ya — stress on RI, opening with the hard э (unit 2) and the о reducing to a. FEMININE (-я). ⚠️ ALWAYS SLIGHTLY DISAPPROVING IN RUSSIAN: an эйфория is a joy that has lost touch with the facts and will not last — which `восторг` (u67) does not imply. The news uses it of markets and of politics." },
      ],
    },
    {
      id: "ru-u115l2",
      unit: 115,
      lesson: 2,
      title: "Pain that is not simple",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name bitterness, an aching sweetness, emotional over-strain, melancholy, a sense of doom and being hollowed out.",
      items: [
        { id: "ru-u115l2-gorech", type: "vocab", front: "горечь", reading: "gorech", meaning: "bitterness of feeling", accept: ["a bitter aftertaste of an experience", "rancour", "a bitter feeling left behind"], example: { jp: "Горечь осталась на годы, хотя говорить о ней было нельзя.", en: "The bitterness remained for years, although it was impossible to speak of it." }, drill: { jp: "Горечь осталась на годы", en: "The bitterness remained for years" }, hint: "GO-rech — stress on the first syllable, with the ь keeping the ч soft. ⚠️ FEMININE despite the -ь (unit1.js §3). ⚠️ THREE NEIGHBOURS AND THE GLOSSES ARE KEPT APART BY HAND: `горький` (u58) is bitter of TASTE, `горе` (u67) is grief, `гореть` (u48) is to burn. This card is the bitterness an experience LEAVES — «с горечью», bitterly." },
        { id: "ru-u115l2-shchemyashchiy", type: "vocab", front: "щемящий", reading: "shchemyashchiy", meaning: "achingly sweet", accept: ["poignant", "bittersweet and tight in the chest", "that makes the heart ache"], example: { jp: "Щемящий звук старой песни он помнит с детства.", en: "He has remembered the aching sound of the old song since childhood." }, drill: { jp: "Щемящий звук старой песни он помнит с детства", en: "He has remembered the aching sound of the old song since childhood" }, hint: "shche-MYA-shchiy — stress on MYA, and ⚠️ IT HAS щ TWICE, the long soft sh of unit 3: shche…shchiy. From щемить, to pinch, which this course does not card. ⚠️ THE EXACT WORD FOR BITTERSWEET and Russian's best one: a щемящее чувство is sweet and painful in the same breath, and it is almost always about memory." },
        { id: "ru-u115l2-nadryv", type: "vocab", front: "надрыв", reading: "nadryv", meaning: "emotional over-strain", accept: ["a hysterical pitch", "strained intensity", "feeling pushed past its limit"], example: { jp: "Надрыв в её голосе слышали все, и поэтому никто не спорил.", en: "Everyone heard the strain in her voice, and so nobody argued." }, drill: { jp: "Надрыв в её голосе слышали все", en: "Everyone heard the strain in her voice" }, hint: "nad-RYV — stress on the last syllable. MASCULINE. ⚠️ A WORD RUSSIAN CRITICISM USES ABOUT DOSTOEVSKY and it has no single English equivalent: feeling worked up past the point where it is bearable, and performed as well as felt. «С надрывом» describes a voice. `напряжение` (u77) is neutral tension; надрыв is tension that has torn." },
        { id: "ru-u115l2-melankholiya", type: "vocab", front: "меланхолия", reading: "melankholiya", meaning: "a melancholic temper", accept: ["a settled low mood", "a pensive sadness", "melancholy as a temperament"], example: { jp: "Меланхолия у него осенью каждый год, и он к ней привык.", en: "He has melancholy every autumn, and he has got used to it." }, drill: { jp: "Меланхолия у него осенью каждый год", en: "He has melancholy every autumn" }, hint: "me-lan-KHO-li-ya — stress on KHO, with the scraping х. FEMININE (-я). ⚠️ FOUR LOW MOODS NOW EXIST IN THE COURSE AND THEY ARE DIFFERENT: `печаль` (u67) sorrow with a cause, `уныние` (u67) despondency, `хандра` (u77) a grey mood you cannot explain, and меланхолия a TEMPERAMENT — a person can simply be melancholic. The bookish one of the four." },
        { id: "ru-u115l2-obrechyonnost", type: "vocab", front: "обречённость", reading: "obrechyonnost", meaning: "a sense of doom", accept: ["feeling that nothing can be changed", "fatalism", "the feeling of being doomed"], example: { jp: "Обречённость в его словах была такая, что спорить никто не стал.", en: "There was such a sense of doom in his words that nobody began to argue." }, drill: { jp: "Обречённость в его словах была очень сильная", en: "The sense of doom in his words was very strong" }, hint: "ab-re-CHYON-nast — stress on the ЧЁН, which carries the ё and is therefore the stressed syllable (unit1.js §7). FEMININE (-ость). From обречь, to doom, which is not carded. ⚠️ DIFFERENT FROM `отчаяние` (u77): despair still struggles, обречённость has stopped — it is the calm of having given up." },
        { id: "ru-u115l2-opustoshenie", type: "vocab", front: "опустошение", reading: "opustoshenie", meaning: "being hollowed out", accept: ["emptiness after an effort", "feeling drained", "an inner emptying"], example: { jp: "Опустошение пришло не сразу, а через неделю после работы.", en: "The hollowed-out feeling came not at once but a week after the work." }, drill: { jp: "Опустошение пришло не сразу", en: "The hollowed-out feeling came not at once" }, hint: "a-pus-ta-SHE-ni-ye — stress on SHE, every unstressed о reducing to a. NEUTER (-ие). Built on пустой (unit 33, «empty»). ⚠️ DIFFERENT FROM `истощение` (u77), which is physical exhaustion: опустошение is the FEELING of having nothing left inside, which can arrive when you are perfectly rested. Also used literally of a landscape after a war." },
      ],
    },
    {
      id: "ru-u115l3",
      unit: 115,
      lesson: 3,
      title: "Feelings you would rather not admit",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name malicious glee, squeamishness, vanity, touchy self-regard, the thrill of a gamble, and call a feeling two-sided.",
      items: [
        { id: "ru-u115l3-zloradstvo", type: "vocab", front: "злорадство", reading: "zloradstvo", meaning: "malicious glee", accept: ["taking pleasure in another's trouble", "spiteful delight", "gloating"], example: { jp: "Злорадство у него на лице, и это видели все.", en: "His malicious glee was on his face, and everyone saw it." }, drill: { jp: "Злорадство у него на лице", en: "His malicious glee was on his face" }, hint: "zla-RAD-stva — stress on RAD, and both unstressed о reduce to a. NEUTER (-о). ⚠️ A TRANSPARENT COMPOUND OF TWO WORDS YOU HAVE: `злой` (u28, «angry, evil») + `рад` (u7, «glad») — «evil-gladness». Russian has the single word German has as Schadenfreude and English does not. Its verb злорадствовать is not carded." },
        { id: "ru-u115l3-brezglivost", type: "vocab", front: "брезгливость", reading: "brezglivost", meaning: "squeamishness", accept: ["fastidious distaste", "being easily disgusted", "a fussy revulsion"], example: { jp: "Брезгливость мешает ему работать там, где грязно.", en: "Squeamishness stops him working anywhere dirty." }, drill: { jp: "Брезгливость мешает ему работать там", en: "Squeamishness stops him working anywhere dirty" }, hint: "brez-GLI-vast — stress on GLI, and the final о reduces to a. FEMININE (-ость). ⚠️ WEAKER AND FUSSIER THAN `отвращение` (u67, «revulsion»): отвращение is moral and total, брезгливость is about a dirty cup — and when used of PEOPLE it is a reproach, because it means you find someone beneath you." },
        { id: "ru-u115l3-tshcheslavie", type: "vocab", front: "тщеславие", reading: "tshcheslavie", meaning: "vanity", accept: ["love of praise", "craving admiration", "vainglory"], example: { jp: "Тщеславие у него большое, и он сам об этом знает.", en: "His vanity is great, and he knows it himself." }, drill: { jp: "Тщеславие у него большое", en: "His vanity is great" }, hint: "tshche-SLA-vi-ye — stress on SLA, and ⚠️ THE OPENING IS THE HARDEST CLUSTER IN THIS COURSE: тщ = t + the long soft sh of щ, said together. NEUTER (-ие). A compound of тщетный «vain, futile» and слава «glory»: craving glory that is empty. `гордый` (u28) can be a virtue; тщеславие never is." },
        { id: "ru-u115l3-samolyubie", type: "vocab", front: "самолюбие", reading: "samolyubie", meaning: "touchy self-regard", accept: ["wounded pride", "amour propre", "a sensitive sense of one's own worth"], example: { jp: "Самолюбие ему мешает просить помощи даже у друзей.", en: "His self-regard stops him asking for help even from friends." }, drill: { jp: "Самолюбие ему мешает просить помощи у друзей", en: "His self-regard stops him asking friends for help" }, hint: "sa-ma-LYU-bi-ye — stress on LYU, and both unstressed о reduce to a. NEUTER (-ие). A compound of сам «self» and `любить` (u4): self-love. ⚠️ NOT A VICE LIKE `тщеславие`: самолюбие is the part of you that can be OFFENDED — «задеть самолюбие», to wound someone's pride — and Russian treats having some as normal." },
        { id: "ru-u115l3-azart", type: "vocab", front: "азарт", reading: "azart", meaning: "the thrill of a gamble", accept: ["reckless excitement", "a gambling fever", "being carried away by a risk"], example: { jp: "Азарт у игрока такой, что он не видит времени.", en: "A gambler's thrill is such that he does not notice the time." }, drill: { jp: "Азарт у игрока такой", en: "A gambler's thrill is such" }, hint: "a-ZART — stress on the last syllable. MASCULINE. ⚠️ TWO SIDES IN ONE WORD, which is why it is in this unit: «работать с азартом» is a compliment — working with real fire — while «игорный азарт» is an addiction. «Азартные игры» is the legal term for gambling. From the French for chance." },
        { id: "ru-u115l3-dvoystvennyy", type: "vocab", front: "двойственный", reading: "dvoystvennyy", meaning: "two-sided", accept: ["ambivalent", "of two minds", "pulling in two directions"], example: { jp: "Двойственный ответ никому не помог, и вопрос остался.", en: "The two-sided answer helped nobody, and the question remained." }, drill: { jp: "Двойственный ответ никому не помог", en: "The two-sided answer helped nobody" }, hint: "DVOY-stven-nyy — stress on the first syllable. From два / `двое` — «double-natured». ⚠️ THE ADJECTIVE THIS WHOLE UNIT IS ABOUT: «двойственное чувство», a feeling that is two feelings. Also of a person's position or an answer that faces both ways, where it is a criticism." },
      ],
    },
    {
      id: "ru-u115l4",
      unit: 115,
      lesson: 4,
      title: "How you hold yourself in front of others",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name awkwardness, shyness in company, a fluster and humility, and say that someone is easily hurt or unflappable.",
      items: [
        { id: "ru-u115l4-nelovkost", type: "vocab", front: "неловкость", reading: "nelovkost", meaning: "awkwardness", accept: ["social awkwardness", "an awkward moment", "clumsiness in company"], example: { jp: "Неловкость была такая, что все сразу начали говорить о погоде.", en: "The awkwardness was such that everyone immediately started talking about the weather." }, drill: { jp: "Неловкость была такая", en: "The awkwardness was such" }, hint: "ne-LOV-kast — stress on LOV, and the final о reduces to a. FEMININE (-ость). ⚠️ TWO SENSES AND BOTH ARE USED: physical clumsiness, and the SOCIAL moment nobody knows what to say. «Мне неловко» is the everyday form — I feel awkward — and it is the phrase you will need most." },
        { id: "ru-u115l4-stesnenie", type: "vocab", front: "стеснение", reading: "stesnenie", meaning: "shyness in company", accept: ["self-consciousness", "diffidence with strangers", "feeling constrained with people"], example: { jp: "Стеснение прошло только тогда, когда все стали смеяться.", en: "The shyness passed only when everyone began to laugh." }, drill: { jp: "Стеснение прошло только тогда", en: "The shyness passed only" }, hint: "stes-NE-ni-ye — stress on NE. NEUTER (-ие). ⚠️ DIFFERENT FROM `смущение` (u67, «embarrassment»), which is caused by one event: стеснение is the standing reluctance of a shy person — «не стесняйся» means don't be shy, and it is what a Russian host says to you at the table. Literally a «being squeezed»." },
        { id: "ru-u115l4-zameshatelstvo", type: "vocab", front: "замешательство", reading: "zameshatelstvo", meaning: "a fluster", accept: ["momentary confusion", "being thrown off balance", "a flustered pause"], example: { jp: "Замешательство было видно по лицу, хотя он ничего не сказал.", en: "The fluster was visible on his face, although he said nothing." }, drill: { jp: "Замешательство было видно по лицу", en: "The fluster was visible on his face" }, hint: "za-me-SHA-tel-stva — stress on SHA, and the final о reduces to a. NEUTER (-о). ⚠️ THREE CONFUSION WORDS NOW EXIST AND THE GLOSSES ARE KEPT APART BY HAND: `недоумение` (u67) is not understanding, `смятение` (u77) is inner turmoil, замешательство is the SHORT PUBLIC MOMENT of being thrown — «привести в замешательство», to throw someone." },
        { id: "ru-u115l4-smirenie", type: "vocab", front: "смирение", reading: "smirenie", meaning: "humility", accept: ["meek acceptance", "quiet submission to what is", "humbleness"], example: { jp: "Смирение не слабость, и он понял это очень поздно.", en: "Humility is not weakness, and he understood that very late." }, drill: { jp: "Смирение не слабость", en: "Humility is not weakness" }, hint: "smi-RE-ni-ye — stress on RE. NEUTER (-ие). ⚠️ A RELIGIOUS WORD FIRST, from `мир` (u30) in its older sense of «quiet»: the central virtue of Russian Orthodox writing, and still approving in ordinary speech. `покорный` (u119) is submissive to a PERSON; смирение is acceptance of your lot." },
        { id: "ru-u115l4-ranimyy", type: "vocab", front: "ранимый", reading: "ranimyy", meaning: "easily hurt", accept: ["thin-skinned", "sensitive to slights", "quick to be wounded"], example: { jp: "Ранимый человек слышит в простом вопросе упрёк.", en: "A thin-skinned person hears a reproach in a simple question." }, drill: { jp: "Ранимый человек слышит в простом вопросе упрёк", en: "A thin-skinned person hears a reproach in a simple question" }, hint: "ra-NI-myy — stress on NI. From рана «a wound», which this course does not card. ⚠️ OF FEELINGS ONLY, never of a body — a ранимый person is not fragile, he is quick to take offence. Said with sympathy as often as with impatience, which is the Russian attitude to the trait." },
        { id: "ru-u115l4-nevozmutimyy", type: "vocab", front: "невозмутимый", reading: "nevozmutimyy", meaning: "unflappable", accept: ["imperturbable", "impossible to rattle", "calm whatever happens"], example: { jp: "Невозмутимый вид он держал даже тогда, когда всё было плохо.", en: "He kept an unflappable look even when everything was going badly." }, drill: { jp: "Невозмутимый вид он держал даже тогда", en: "He kept an unflappable look even then" }, hint: "ne-vaz-mu-TI-myy — stress on TI, and both unstressed о reduce to a. From возмутить, to stir up, with the negative не-: «un-stir-up-able». ⚠️ DIFFERENT FROM `спокойный` (u28): спокойный is simply calm, невозмутимый is calm UNDER PROVOCATION, and it is the exact opposite of `ранимый` in this lesson." },
      ],
    },
  ],
};
