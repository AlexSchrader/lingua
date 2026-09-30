// RU Unit 33 — Родительный падеж ("The genitive case") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Conventions: ru/unit1.js §1–§10 and §A–§D, plus ru/unit31.js §1–§7 for the A2
// band.
//
// ★ THIS UNIT CLOSES unit1.js §5's NAMED GAP, in the exact words §5 used:
//   "⚠️ SIX PREPOSITIONS A1 OBVIOUSLY WANTS WERE REFUSED BECAUSE THEY ALL GOVERN
//   THE GENITIVE … `из` · `для` · `без` · `до` · `от` · `около`. They are an A2
//   lesson as a set, behind the genitive paradigm."
// They are l1, and they are a set of exactly six because that is what §5 named.
// l2 adds six more of the same kind that §5 did not list but which sit behind the
// same wall — кроме · вместо · среди · мимо · вдоль · напротив.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Travel and transport" AND A1 ALREADY WROTE IT — u30
// Путешествие (самолёт · поезд · виза · граница · чемодан · очередь · карта ·
// экскурсия · гид) on top of u9's internationalisms of transport and u14's town.
// Rethemed to the genitive, and the slot's domain survives rather than being
// thrown away: из · от · до · около ARE the source, goal and proximity words a
// traveller needs, so every example in l1 is still about getting somewhere.
// unit31.js §6 has the whole retheme table.
//
// WHAT A1 ALREADY HAD, so this unit does not re-teach it: u23/u24 gave the
// genitive TWO jobs and only two — `у меня` for possession and нет + genitive for
// negation. §5 was explicit that carding these prepositions at A1 "would add a
// third, fourth and fifth genitive job by the back door". Those jobs are now open.
// The genitive PLURAL as a paradigm is the other half and is u37's, not this
// unit's — here the noun after the preposition is singular throughout, so a
// learner meets one ending at a time.
//
// l4 IS THE GENITIVE OF MATERIAL, which is why it is materials and not more
// prepositions: `из` + genitive is how Russian says what a thing is made of, and
// after u32 carded `материал` the learner had the word for the category and not
// one word for a material. Measured against TAUGHT-WORDS.md: A1 taught камень
// (u26) and песок (u26) and бумага (u25) and nothing else — no glass, no metal,
// no cloth, no leather, no gold, no wool.
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT — hand-checked against `normalizeMeaning`,
// because four of A1's spatial adverbs sit in this semantic field:
//   `около` takes "close to". It could NOT take "near", "nearby" or "close by":
//        u10 рядом is "nearby" and u23 близко is "close by", and "near" is in
//        both of their accept lists. "close to" normalises to "close to", which
//        collides with neither.
//   `возле` takes "beside" — the one remaining natural English word.
//   `после` takes "after"; u4 потом is "later", so they do not meet.
//   `мимо` takes "past"; u24 прошлый's MEANING is "previous" (only its accept
//        list carries "past", and an accept overlap is leniency, not a prompt).
//   `середина` takes "the middle"; u24 начало is "the beginning".
//   `край` "an edge" · `сторона` "a side" · `ряд` "a row" — all three checked
//        against each other and against u4 место.
//
// ⚠️ ONE LEXEME NOTE (unit1.js §D — a judgement): `сторона` is carded here rather
// than at u32, where it would have read as an instrumental card. It is a genitive
// card because the phrase a learner actually needs is «с этой стороны» — genitive.
// AVOIDED in this unit on §D's test: `далеко`/`недалеко` (u14 далеко is taught and
// недалеко is не + it, the same one-way derivation §5 of unit31.js records for
// много/немного, but here the taught member is the BASE, so the derived form gives
// the learner nothing new) · `конец` (vs u24 наконец and u6 конечно, refused by
// u30 for the same reason and still refused).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT33 = {
  id: "ru-u33",
  lang: "ru",
  title: "Родительный падеж",
  order: 33,
  stage: "a2",
  lessons: [
    {
      id: "ru-u33l1",
      unit: 33,
      lesson: 1,
      title: "The six that take the genitive",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say where you have come from, how far it is to somewhere, what you want something without, and who a thing is for.",
      items: [
        { id: "ru-u33l1-iz", type: "vocab", front: "из", reading: "iz", meaning: "out of", accept: ["out from", "made of", "out of the inside of"], example: { jp: "Моя мама из другого города.", en: "My mum is from another town." }, drill: { jp: "Этот стол из дерева", en: "This table is made of wood" }, hint: "One syllable, IZ, said IS before a quiet consonant. Everything after из goes into the GENITIVE: из городА, из деревА. Out of a place — and also what a thing is made of, which is lesson 4." },
        { id: "ru-u33l1-ot", type: "vocab", front: "от", reading: "ot", meaning: "away from", accept: ["off", "sent by a person", "away from the edge of"], example: { jp: "Аптека далеко от нашего дома.", en: "The chemist is a long way from our house." }, drill: { jp: "Это письмо от моей сестры", en: "This letter is from my sister" }, hint: "One syllable, OT. Genitive: от домА, от сестрЫ. Away from the outside of something, and «from» whoever sent it. Keep it apart from из: из is out of the inside, от is away from the edge." },
        { id: "ru-u33l1-do", type: "vocab", front: "до", reading: "do", meaning: "as far as", accept: ["up to", "until", "before"], example: { jp: "От нашего дома до вокзала далеко.", en: "From our house to the station is a long way." }, drill: { jp: "До вокзала очень далеко", en: "It is very far to the station" }, hint: "One syllable, DO. Genitive: до вокзалА. As far as a place, and «until» a time — до вечера. You have said it since unit 7 without knowing: до свидания is literally «until the meeting»." },
        { id: "ru-u33l1-bez", type: "vocab", front: "без", reading: "bez", meaning: "without", accept: ["with no", "lacking", "minus"], example: { jp: "Он любит чай без сахара.", en: "He likes tea without sugar." }, drill: { jp: "Кофе без молока пожалуйста", en: "Coffee without milk please" }, hint: "One syllable, BEZ, said BES before a quiet consonant. Genitive: без сахарА, без молокА. It is the exact mirror of с plus the instrumental — с молоком, без молока." },
        { id: "ru-u33l1-dlya", type: "vocab", front: "для", reading: "dlya", meaning: "for", accept: ["for the sake of", "intended for", "meant for"], example: { jp: "Это письмо для моего брата.", en: "This letter is for my brother." }, drill: { jp: "Это подарок для моей мамы", en: "This is a present for my mum" }, hint: "One syllable, DLYA. Genitive: для братА, для мамЫ. Who or what something is FOR. ⚠️ Not the за of «спасибо за письмо»: для is the beneficiary, за is what you are thanking someone for." },
        { id: "ru-u33l1-okolo", type: "vocab", front: "около", reading: "okolo", meaning: "close to", accept: ["near", "by", "approximately", "round about"], example: { jp: "Наш дом около парка и школы.", en: "Our house is close to the park and the school." }, drill: { jp: "Около вокзала есть аптека", en: "There is a chemist near the station" }, hint: "OH-ka-la — stress on the first syllable, where the о is the full rounded OH; the other two say a. Genitive: около паркА. It also means «about» in front of a number — около часа, about an hour." },
      ],
    },
    {
      id: "ru-u33l2",
      unit: 33,
      lesson: 2,
      title: "Six more of the same kind",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Make an exception, offer a substitute, and describe going past or along something — all with the genitive.",
      items: [
        { id: "ru-u33l2-krome", type: "vocab", front: "кроме", reading: "krome", meaning: "except", accept: ["apart from", "other than", "besides"], example: { jp: "Все работают, кроме нашего директора.", en: "Everyone is working except our director." }, drill: { jp: "Все здесь кроме моей сестры", en: "Everyone is here except my sister" }, hint: "KRO-me — stress on the first syllable. Genitive: кроме директорА. Except, apart from. «Кроме того» is the everyday way to say «besides that»." },
        { id: "ru-u33l2-vmesto", type: "vocab", front: "вместо", reading: "vmesto", meaning: "instead of", accept: ["in place of", "rather than", "as a substitute for"], example: { jp: "Я хочу чай вместо кофе.", en: "I want tea instead of coffee." }, drill: { jp: "Вместо кофе он любит чай", en: "Instead of coffee he likes tea" }, hint: "VMES-ta — stress on the first syllable, and the final о says a. Genitive: вместо кофЕ. Built out of место, a place: literally «in the place of»." },
        { id: "ru-u33l2-sredi", type: "vocab", front: "среди", reading: "sredi", meaning: "among", accept: ["amongst", "in the middle of a group", "surrounded by"], example: { jp: "Среди наших сотрудников есть хороший специалист.", en: "Among our staff there is a good expert." }, drill: { jp: "Среди этих книг есть новая", en: "Among these books there is a new one" }, hint: "sre-DI — stress on the last syllable. It takes the GENITIVE PLURAL: среди книГ, среди сотрудникОВ. Among a group of several — where между is between exactly two." },
        { id: "ru-u33l2-mimo", type: "vocab", front: "мимо", reading: "mimo", meaning: "past", accept: ["by", "going past", "straight past"], example: { jp: "Автобус едет мимо нашего дома.", en: "The bus drives past our house." }, drill: { jp: "Мы идём мимо этого парка", en: "We are walking past this park" }, hint: "MI-ma — stress on the first syllable, and the final о says a. Genitive: мимо домА. Past something, going by without stopping." },
        { id: "ru-u33l2-vdol", type: "vocab", front: "вдоль", reading: "vdol", meaning: "along", accept: ["alongside", "down the length of", "following"], example: { jp: "Мы гуляем вдоль реки каждый вечер.", en: "We walk along the river every evening." }, drill: { jp: "Мы гуляем вдоль моря", en: "We walk along the sea" }, hint: "One syllable, VDOL, with a soft l you make by pressing the tongue to the roof of the mouth. Genitive: вдоль рекИ. Along the length of a river, a street or a wall." },
        { id: "ru-u33l2-naprotiv", type: "vocab", front: "напротив", reading: "naprotiv", meaning: "opposite", accept: ["facing", "across from", "over the road from"], example: { jp: "Аптека напротив нашего дома.", en: "The chemist is opposite our house." }, drill: { jp: "Напротив вокзала есть отель", en: "Opposite the station there is a hotel" }, hint: "na-PRO-tif — stress on PRO, and the final в says f. Genitive: напротив домА. Directly facing something across a street or a room." },
      ],
    },
    {
      id: "ru-u33l3",
      unit: 33,
      lesson: 3,
      title: "After it, beside it, and the edge of it",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Order two events in time with до and после, and point to a part of something — its edge, its side, its middle.",
      items: [
        { id: "ru-u33l3-posle", type: "vocab", front: "после", reading: "posle", meaning: "after", accept: ["afterwards", "following", "once ... is over"], example: { jp: "После обеда мы идём в парк.", en: "After lunch we go to the park." }, drill: { jp: "После работы он идёт домой", en: "After work he goes home" }, hint: "POS-le — stress on the first syllable. Genitive: после обедА, после работЫ. Its exact opposite is до, from lesson 1 — до обеда, после обеда." },
        { id: "ru-u33l3-vozle", type: "vocab", front: "возле", reading: "vozle", meaning: "beside", accept: ["right next to", "at the side of", "hard by"], example: { jp: "Возле нашего дома есть маленький магазин.", en: "Beside our house there is a small shop." }, drill: { jp: "Возле окна мой стол", en: "My table is beside the window" }, hint: "VOZ-le — stress on the first syllable. Genitive: возле окнА. Right up against something. It is около's close cousin, but возле never means «about a number»." },
        { id: "ru-u33l3-kray", type: "vocab", front: "край", reading: "kray", meaning: "an edge", accept: ["a rim", "the far edge", "a region"], example: { jp: "Твоя книга на краю стола.", en: "Your book is on the edge of the table." }, drill: { jp: "Это край нашего города", en: "This is the edge of our town" }, hint: "One syllable, KRAY. Masculine. An edge or a rim — and in its other life a region of a country. ⚠️ Its prepositional is на краю, with the stress thrown onto the ending." },
        { id: "ru-u33l3-storona", type: "vocab", front: "сторона", reading: "storona", meaning: "a side", accept: ["a direction", "one side of it", "a party in an argument"], example: { jp: "С этой стороны улицы новый магазин.", en: "On this side of the street there is a new shop." }, drill: { jp: "Это моя сторона стола", en: "This is my side of the table" }, hint: "sta-ra-NA — stress on the LAST syllable, and both о reduce to a. Feminine (-а). ⚠️ The stress MOVES in the accusative: сто́рону. The phrase to learn whole is «с этой стороны»." },
        { id: "ru-u33l3-ryad", type: "vocab", front: "ряд", reading: "ryad", meaning: "a row", accept: ["a line of things", "a rank", "a series"], example: { jp: "Наши места в первом ряду.", en: "Our seats are in the first row." }, drill: { jp: "Это первый ряд в зале", en: "This is the first row in the hall" }, hint: "One syllable, RYAD, and the д says t at the end. Masculine. A row of seats, or a series of things. Like край it throws the stress onto the ending: в рядУ." },
        { id: "ru-u33l3-seredina", type: "vocab", front: "середина", reading: "seredina", meaning: "the middle", accept: ["the centre of it", "halfway", "the midpoint"], example: { jp: "Стол в середине комнаты.", en: "The table is in the middle of the room." }, drill: { jp: "Это середина нашей книги", en: "This is the middle of our book" }, hint: "se-re-DI-na — stress on DI. Feminine (-а). Genitive after it: середина книгИ. Russian says «в середине» where English says «in the middle of»." },
      ],
    },
    {
      id: "ru-u33l4",
      unit: 33,
      lesson: 4,
      title: "What it is made of",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what an object is made of, using из plus the genitive of the material.",
      items: [
        { id: "ru-u33l4-steklo", type: "vocab", front: "стекло", reading: "steklo", meaning: "glass as a material", accept: ["glass", "a pane of glass", "window glass"], example: { jp: "Это окно из старого стекла.", en: "This window is made of old glass." }, drill: { jp: "Стекло в этом окне старое", en: "The glass in this window is old" }, hint: "stek-LO — stress on the LAST syllable. Neuter (-о). The material, and also one pane in a window. Out of glass is из стеклА, stress still on the ending." },
        { id: "ru-u33l4-metall", type: "vocab", front: "металл", reading: "metall", meaning: "metal", accept: ["a metal", "the metal", "metalwork"], example: { jp: "Этот инструмент из хорошего металла.", en: "This tool is made of good metal." }, drill: { jp: "Металл в этом столе старый", en: "The metal in this table is old" }, hint: "me-TALL — stress on the last syllable, and the double лл is held a beat longer than one л. Masculine. Out of metal is из металлА." },
        { id: "ru-u33l4-tkan", type: "vocab", front: "ткань", reading: "tkan", meaning: "cloth", accept: ["fabric", "material for clothes", "textile"], example: { jp: "Эта одежда из хорошей ткани.", en: "These clothes are made of good cloth." }, drill: { jp: "Эта ткань очень дорогая", en: "This cloth is very expensive" }, hint: "One syllable, TKAN, with a soft n at the end. FEMININE — it ends in -ь, and an -ь noun's gender has to be learned rather than guessed. Out of cloth is из ткани." },
        { id: "ru-u33l4-kozha", type: "vocab", front: "кожа", reading: "kozha", meaning: "skin", accept: ["leather", "hide", "the skin"], example: { jp: "Эта сумка из хорошей кожи.", en: "This bag is made of good leather." }, drill: { jp: "Кожа этой сумки хорошая", en: "The leather of this bag is good" }, hint: "KO-zha — stress on the first syllable. Feminine (-а). ⚠️ ONE WORD FOR TWO THINGS English splits: the skin on your body AND leather. из кожи is «out of leather»." },
        { id: "ru-u33l4-zoloto", type: "vocab", front: "золото", reading: "zoloto", meaning: "gold", accept: ["the gold", "gold as a metal", "bullion"], example: { jp: "Эти часы из старого золота.", en: "This watch is made of old gold." }, drill: { jp: "Золото очень дорогой металл", en: "Gold is a very expensive metal" }, hint: "ZO-la-ta — stress on the first syllable, and both unstressed о say a. Neuter (-о). Out of gold is из золотА." },
        { id: "ru-u33l4-sherst", type: "vocab", front: "шерсть", reading: "sherst", meaning: "wool", accept: ["an animal's coat", "woollen cloth", "fur"], example: { jp: "Этот шарф из хорошей шерсти.", en: "This scarf is made of good wool." }, drill: { jp: "Эта шерсть очень тёплая", en: "This wool is very warm" }, hint: "One syllable, SHERST. FEMININE — another -ь noun, so learn the gender with the word. Wool, and also the coat an animal grows. Out of wool is из шерсти." },
      ],
    },
  ],
};
