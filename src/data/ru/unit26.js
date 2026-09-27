// RU Unit 26 — Природа и животные ("Nature and animals") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here.
// "Vocabulary 2" was a scaffold counter title, so the theme was block 3's choice.
// Measured against `src/data/ru/TAUGHT-WORDS.md` on this branch, the whole natural
// world was two words: `животное` (u6) and `кошка` (u8), with `земля` (u4) and
// `солнце` (u6) arriving from the alphabet band as reading exercises. No dog, no
// tree, no river, no sea, no sky. u16 gave the WEATHER; this unit gives the place
// the weather happens in.
//
// ★ THIS UNIT IS WHERE RUSSIAN'S -ь NOUNS GET TAUGHT PROPERLY. unit1.js §3 makes
// the gender compulsory on every -ь noun because it is genuinely unpredictable,
// and u1–u25 had only a handful. l1 carries THREE in one lesson — лошадь (f),
// медведь (m), мышь (f) — and l4 adds камень (m). Four nouns whose ending gives
// the learner nothing, side by side, with the gender named on each hint. That is
// deliberate interleaving, not an accident of the theme.
//
// ⚠️ LEXEME CALLS RECORDED (unit1.js §D — judgements, not measurements):
//   `цветок` beside u16 `цвет` — one root, цвет-. An English speaker gets no help
//        at all from colour → flower, so the word is not derivable. Allowed, and
//        the hint names the connection so it becomes a memory hook rather than a
//        trap.
//   `ветка` beside u16 `ветер` — they merely start alike; вет- here is a branch,
//        there a wind. Unrelated, and the hint says so.
//   `поле` beside u15 `полка` and u23 `полный` — three unrelated words. Named
//        together in поле's hint on purpose.
//   `море` beside u16 `мороз` — no relation. Named in море's hint.
//   `лес` · `сад` · `берег` (u30) all take the special masculine -у locative
//        (в лесу, в саду, на берегу); лес's hint introduces it and u30's берег
//        refers back.
//   AVOIDED on the same test: `животное` is already u6's and is NOT re-carded ·
//        `зелень` (vs u16 зелёный) · `водный`/`река` is fine but `вода` stays u4's
//        and is not re-carded · `небесный` (vs `небо`) · `каменный` (vs `камень`) ·
//        `песочный` (vs `песок`) · `звёздный` (vs `звезда`).
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT — hand-checked against `normalizeMeaning`:
//     `мышь` "a mouse" — and the hint says it is the computer mouse too, so no
//             second card was ever needed.
//     `лист` "a leaf" — NOT "a sheet", which would have collided with u25
//             `бумага`'s accept entry "a sheet of paper" after normalisation.
//     `небо` "the sky" — u16 `голубой` keeps "light blue" and there is no clash.
//     `луна` "the moon" — u17 `месяц` keeps "a month"; the hint explains that
//             Russian uses месяц for a crescent moon as well, which is exactly why
//             луна could not be glossed "a month".
//     `дерево` "a tree" — "wood" is in accept[] only, so it never prompts against
//             anything.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT26 = {
  id: "ru-u26",
  lang: "ru",
  title: "Природа и животные",
  order: 26,
  stage: "a1",
  lessons: [
    {
      id: "ru-u26l1",
      unit: 26,
      lesson: 1,
      title: "Name the animals — and four genders you cannot guess",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name six animals, and say which of them are masculine and which feminine when the ending will not tell you.",
      items: [
        { id: "ru-u26l1-sobaka", type: "vocab", front: "собака", reading: "sobaka", meaning: "a dog", accept: ["dog", "a hound"], example: { jp: "Наша собака очень большая, но добрая.", en: "Our dog is very big, but kind." }, drill: { jp: "Эта собака живёт рядом с нами", en: "This dog lives next door to us" }, hint: "sa-BA-ka, stress on BA. Feminine (-а) — and it stays feminine for a male dog too. ⚠️ Russian has no polite everyday word for a female dog, so собака covers both. With unit 8's кошка it makes the standard Russian pair in sayings." },
        { id: "ru-u26l1-ptitsa", type: "vocab", front: "птица", reading: "ptitsa", meaning: "a bird", accept: ["bird", "a fowl"], example: { jp: "Эта птица очень красивая и белая.", en: "This bird is very beautiful and white." }, drill: { jp: "Эта маленькая птица очень красивая", en: "This small bird is very beautiful" }, hint: "PTI-tsa, stress first. Feminine (-а). ⚠️ THE HARD PART IS STARTING IT: птиц- has no vowel before the т, so English speakers insert one. Push it out as a single unit — PTEE-tsa, never puh-TEE-tsa." },
        { id: "ru-u26l1-loshad", type: "vocab", front: "лошадь", reading: "loshad", meaning: "a horse", accept: ["horse", "a mare"], example: { jp: "Эта лошадь очень старая, и она уже не работает.", en: "This horse is very old, and it does not work any more." }, drill: { jp: "Эта лошадь уже не работает", en: "This horse does not work any more" }, hint: "LO-shad, stress first. ⚠️ FEMININE, and a -ь noun so the ending tells you nothing (unit1.js §3): эта лошадь, старая лошадь. Russian also has конь, a masculine horse — the one in chess and in poetry." },
        { id: "ru-u26l1-korova", type: "vocab", front: "корова", reading: "korova", meaning: "a cow", accept: ["cow", "a milk cow"], example: { jp: "Эта корова давала нам молоко каждый день.", en: "This cow gave us milk every day." }, drill: { jp: "Эта корова очень большая и белая", en: "This cow is very big and white" }, hint: "ka-RO-va, stress on RO. Feminine (-а). Unit 4's молоко and unit 13's мясо both come from her, and Russian names them from different roots than the animal — exactly as English does with cow and beef." },
        { id: "ru-u26l1-medved", type: "vocab", front: "медведь", reading: "medved", meaning: "a bear", accept: ["bear", "a brown bear"], example: { jp: "Этот медведь спал целую зиму.", en: "This bear slept the whole winter." }, drill: { jp: "Этот медведь очень большой и сильный", en: "This bear is very big and strong" }, hint: "mid-VED, stress at the end. ⚠️ MASCULINE, and a -ь noun: этот медведь (unit1.js §3). It literally means honey-eater — мёд, honey, plus an old verb for eating. Russians called it that because saying the animal's real name was thought to summon it." },
        { id: "ru-u26l1-mysh", type: "vocab", front: "мышь", reading: "mysh", meaning: "a mouse", accept: ["mouse", "a computer mouse"], example: { jp: "Эта мышь очень маленькая, и она живёт в шкафу.", en: "This mouse is very small, and it lives in the cupboard." }, drill: { jp: "Эта мышь очень маленькая и серая", en: "This mouse is very small and grey" }, hint: "MYSH, one syllable. ⚠️ FEMININE, a -ь noun: эта мышь (unit1.js §3). It is ALSO the computer mouse, exactly as in English — компьютерная мышь, so no second word is needed. The ы is the hard part: not MEESH but MYSH." },
      ],
    },
    {
      id: "ru-u26l2",
      unit: 26,
      lesson: 2,
      title: "Trees, flowers and the garden",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe what is growing around you: the tree, the flower, the grass, a leaf, a branch, the garden.",
      items: [
        { id: "ru-u26l2-derevo", type: "vocab", front: "дерево", reading: "derevo", meaning: "a tree", accept: ["tree", "wood", "timber"], example: { jp: "Это дерево очень старое и большое.", en: "This tree is very old and big." }, drill: { jp: "Это большое дерево очень старое", en: "This big tree is very old" }, hint: "DE-re-va, stress first. Neuter (-о). ⚠️ It means BOTH the living tree and the material wood, so деревянный is wooden. Its plural is irregular — деревья — and you will read it long before you need to say it." },
        { id: "ru-u26l2-tsvetok", type: "vocab", front: "цветок", reading: "tsvetok", meaning: "a flower", accept: ["flower", "a bloom", "a blossom"], example: { jp: "Этот цветок очень красивый, и он красный.", en: "This flower is very beautiful, and it is red." }, drill: { jp: "Этот цветок очень красивый и белый", en: "This flower is very beautiful and white" }, hint: "tsvi-TOK, stress at the end. Masculine, and the о is fleeting — цветок but цветка. ⚠️ Same root as unit 16's цвет, a colour, which is a good memory hook and no help at all in guessing. Its plural is цветы, and Russians give them in ODD numbers only: an even bunch is for a funeral." },
        { id: "ru-u26l2-trava", type: "vocab", front: "трава", reading: "trava", meaning: "grass", accept: ["a herb", "green grass"], example: { jp: "Летом трава здесь очень зелёная.", en: "In summer the grass here is very green." }, drill: { jp: "Летом трава в парке зелёная", en: "In summer the grass in the park is green" }, hint: "tra-VA, stress at the end. Feminine (-а). It is grass AND a herb — лечебные травы are medicinal herbs, which is where a lot of unit 20's лекарство comes from. No plural in the grass sense." },
        { id: "ru-u26l2-list", type: "vocab", front: "лист", reading: "list", meaning: "a leaf", accept: ["leaf", "a sheet", "a page"], example: { jp: "Этот лист уже жёлтый, потому что осень.", en: "This leaf is already yellow, because it is autumn." }, drill: { jp: "Этот лист уже жёлтый и старый", en: "This leaf is already yellow and old" }, hint: "LIST, one syllable. Masculine. ⚠️ TWO SENSES AND TWO DIFFERENT PLURALS, which is rare: листья are leaves on a tree, листы are sheets of paper. One singular, and the meaning picks the plural." },
        { id: "ru-u26l2-vetka", type: "vocab", front: "ветка", reading: "vetka", meaning: "a branch", accept: ["a twig", "a bough", "a branch line"], example: { jp: "Эта ветка очень большая, и на ней птица.", en: "This branch is very big, and there is a bird on it." }, drill: { jp: "Эта ветка очень большая и старая", en: "This branch is very big and old" }, hint: "VET-ka, stress first. Feminine (-а). It is also a branch LINE — ветка метро is an underground line, which is how a Muscovite describes the network. ⚠️ Unit 16's ветер, wind, merely starts the same way and is a different word." },
        { id: "ru-u26l2-sad", type: "vocab", front: "сад", reading: "sad", meaning: "a garden", accept: ["garden", "an orchard"], example: { jp: "В нашем саду очень тихо и красиво.", en: "It is very quiet and beautiful in our garden." }, drill: { jp: "Наш сад очень большой и красивый", en: "Our garden is very big and beautiful" }, hint: "SAD, one syllable, and the д goes quiet at the end — SAT. Masculine. ⚠️ В садУ, not в саде: a few masculine place nouns keep a special -у ending, and лес is the next lesson's example. Детский сад, a children's garden, is what Russian calls a nursery school." },
      ],
    },
    {
      id: "ru-u26l3",
      unit: 26,
      lesson: 3,
      title: "Describe a landscape",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where you are in the country: the forest, the river, the sea, a mountain, a field, the sky.",
      items: [
        { id: "ru-u26l3-les", type: "vocab", front: "лес", reading: "les", meaning: "a forest", accept: ["forest", "a wood", "woodland"], example: { jp: "В этом лесу очень тихо, даже летом.", en: "It is very quiet in this forest, even in summer." }, drill: { jp: "Этот лес очень большой и старый", en: "This forest is very big and old" }, hint: "LES, one syllable. Masculine. ⚠️ Russian does NOT distinguish a wood from a forest — лес is both, from a copse to Siberia. And в лесУ takes the same special -у ending as в садУ: a short list of masculine place nouns keeps it." },
        { id: "ru-u26l3-reka", type: "vocab", front: "река", reading: "reka", meaning: "a river", accept: ["river", "a stream"], example: { jp: "Эта река очень большая, и здесь есть мост.", en: "This river is very big, and there is a bridge here." }, drill: { jp: "Эта река очень большая и красивая", en: "This river is very big and beautiful" }, hint: "ri-KA, stress at the end. Feminine (-а). ⚠️ MOBILE STRESS, exactly like unit 20's рука and нога: рекА but в рЕку. Russians call the Volga Волга-матушка, mother Volga — rivers are family in this language." },
        { id: "ru-u26l3-more", type: "vocab", front: "море", reading: "more", meaning: "the sea", accept: ["sea", "the ocean"], example: { jp: "Море здесь очень большое и красивое.", en: "The sea here is very big and beautiful." }, drill: { jp: "Море здесь очень большое и синее", en: "The sea here is very big and blue" }, hint: "MO-re, stress first. Neuter (-е). ⚠️ Nothing to do with unit 16's мороз, a hard frost, which only starts alike. На море means at the seaside — and for a Russian that means the Black Sea unless told otherwise." },
        { id: "ru-u26l3-gora", type: "vocab", front: "гора", reading: "gora", meaning: "a mountain", accept: ["mountain", "a hill"], example: { jp: "Эта гора очень большая, и там всегда снег.", en: "This mountain is very big, and there is always snow there." }, drill: { jp: "Эта гора очень большая и белая", en: "This mountain is very big and white" }, hint: "ga-RA, stress at the end. Feminine (-а). ⚠️ MOBILE STRESS like река: горА but на гОру. It is a mountain AND a hill — Russian has холм for a small one but reaches for гора nearly always." },
        { id: "ru-u26l3-pole", type: "vocab", front: "поле", reading: "pole", meaning: "a field", accept: ["field", "open country"], example: { jp: "Это поле очень большое, и здесь только трава.", en: "This field is very big, and there is only grass here." }, drill: { jp: "Это поле очень большое и зелёное", en: "This field is very big and green" }, hint: "PO-le, stress first. Neuter (-е). ⚠️ THREE UNRELATED WORDS THAT START ALIKE: поле a field, unit 15's полка a shelf, unit 23's полный full. Nothing connects them. Поле also does the abstract job English field does, as in a field of study." },
        { id: "ru-u26l3-nebo", type: "vocab", front: "небо", reading: "nebo", meaning: "the sky", accept: ["sky", "heaven", "the heavens"], example: { jp: "Небо сегодня очень синее, и это хорошо.", en: "The sky is very blue today, and that is good." }, drill: { jp: "Небо здесь всегда очень синее", en: "The sky here is always very blue" }, hint: "NE-ba, stress first. Neuter (-о). ⚠️ It is BOTH the sky and heaven, and Russian does not separate them — на небе is up there either way. Unit 16's голубой is the colour of a clear one." },
      ],
    },
    {
      id: "ru-u26l4",
      unit: 26,
      lesson: 4,
      title: "What the ground and the sky are made of",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about the air, a stone, sand, an island, a star and the moon.",
      items: [
        { id: "ru-u26l4-vozdukh", type: "vocab", front: "воздух", reading: "vozdukh", meaning: "air", accept: ["the air", "fresh air"], example: { jp: "Воздух в этом лесу очень хороший.", en: "The air in this forest is very good." }, drill: { jp: "Воздух здесь всегда очень хороший", en: "The air here is always very good" }, hint: "VOZ-dukh, stress first. Masculine, and it has no plural. На свежем воздухе means out of doors — literally in the fresh air — and it is what a Russian doctor prescribes for very nearly everything." },
        { id: "ru-u26l4-kamen", type: "vocab", front: "камень", reading: "kamen", meaning: "a stone", accept: ["stone", "a rock"], example: { jp: "Этот камень очень большой и серый.", en: "This stone is very big and grey." }, drill: { jp: "Этот серый камень очень большой", en: "This grey stone is very big" }, hint: "KA-men, stress first. ⚠️ MASCULINE, and a -ь noun: этот камень (unit1.js §3). Its plural drops the е — камни — the same pattern as день and дни. Каменный means made of stone." },
        { id: "ru-u26l4-pesok", type: "vocab", front: "песок", reading: "pesok", meaning: "sand", accept: ["the sand", "grit"], example: { jp: "Здесь только песок и камень.", en: "There is only sand and stone here." }, drill: { jp: "Здесь только песок и трава", en: "There is only sand and grass here" }, hint: "pi-SOK, stress at the end. Masculine, no plural, and the о is a FLEETING VOWEL: песок but в песке, with the о simply gone. Сахарный песок is granulated sugar — unit 13's сахар sold loose." },
        { id: "ru-u26l4-ostrov", type: "vocab", front: "остров", reading: "ostrov", meaning: "an island", accept: ["island", "an isle"], example: { jp: "Этот остров очень маленький, и здесь никто не живёт.", en: "This island is very small, and nobody lives here." }, drill: { jp: "Этот остров очень маленький и красивый", en: "This island is very small and beautiful" }, hint: "OS-trav, stress first. Masculine, and its plural throws the stress right to the end: островА. It is built on an old word for water flowing round — the same picture English keeps in the is- of island." },
        { id: "ru-u26l4-zvezda", type: "vocab", front: "звезда", reading: "zvezda", meaning: "a star", accept: ["star", "a star performer"], example: { jp: "Эта звезда очень яркая, и я вижу её каждую ночь.", en: "This star is very bright, and I see it every night." }, drill: { jp: "Эта звезда очень яркая сегодня", en: "This star is very bright today" }, hint: "zviz-DA, stress at the end. Feminine (-а). ⚠️ The plural moves the stress AND changes the vowel: звёзды — and because ё is always stressed, the spelling tells you for free (unit1.js §7). It means a star performer too, exactly as in English." },
        { id: "ru-u26l4-luna", type: "vocab", front: "луна", reading: "luna", meaning: "the moon", accept: ["moon", "a full moon"], example: { jp: "Луна сегодня очень большая и яркая.", en: "The moon is very big and bright today." }, drill: { jp: "Луна здесь очень большая ночью", en: "The moon here is very big at night" }, hint: "lu-NA, stress at the end. Feminine (-а). ⚠️ RUSSIAN HAS TWO WORDS: луна is the moon in the sky, and unit 17's месяц is both a month AND a crescent moon. So a Russian month is literally a moon — which is why луна could not simply be glossed a month." },
      ],
    },
  ],
};
