// RU Unit 127 — Растения и деревья ("Plants and trees") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u124–u136). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit87.js §1–§6, and
// ru/unit124.js §1–§5 for this block.
// Probes quoted in this header are reproducible with
// `node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...` — see unit124.js.
//
// THE MEASURED HOLE, AND IT IS THE STARKEST ONE IN THE BAND: across 2,328 cards
// there is NOT ONE NAMED PLANT. u26l2 gives the generic four — `трава` · `ветка` ·
// `лист` · `цветок`, all BARRED as fronts — plus `лес` and `дерево`; u54l3 gives
// `корень`, also taken. So a learner can say "a tree" and cannot say oak, birch,
// pine, rose, mushroom or moss, and cannot name a stem, a petal or bark.
// Eighteen of the probed seeds were free; `корень` is u54's and is used in
// examples here, never as a front, and `ель` fell to the ёлка collision below.
//
// ⚠️ `ель` WAS REFUSED AND IT IS THE OBVIOUS SECOND CONIFER.
// `ёлка` IS TAUGHT AT u3l2 AND IS GLOSSED "a fir tree" WITH `spruce` IN ITS
// accept[] — so `ель` glossed "a spruce" is one prompt with two right answers
// once `normalizeMeaning` is finished (the fault unit1.js §9 and §B name), AND ёлка
// is the DIMINUTIVE of ель, so a learner who has had the A1 word since unit 3
// does not need the base. `кедр` is the card l2 ships instead, and l2's `сосна`
// hint points at ёлка by name.
// ⚠️ WHAT MADE THE PROBE WORTH RUNNING, recorded because the next seat will spot
// it: `ель` READS "el" under unit1.js §1 because ь drops, and so would `ел`, the
// masculine past of `есть` (u10l3). That one is NOT a collision — a past-tense
// form is never its own card (unit1.js §5) — but it is the быть/быт shape, and
// looking at it is what surfaced the ёлка problem that actually killed the word.
//
// ⚠️ `крона` WAS REFUSED FOR A NEAR-COLLISION WITH `корона` (u92l1, "a crown").
// The readings differ (krona / korona) so it is not barred by §1 — but the
// glosses are a tree's crown and a crown, which is one keystroke and one idea
// apart, and a learner meeting both inside the same course will mix them for
// good. `ствол` and `ветка` (u26) carry the field; `жёлудь` took the slot.
//
// ⚠️ `семечко` IS CARDED AND `семя` CANNOT BE. `семя` reads "semya", WHICH IS
// ALREADY `семья`'s (u10l1, "a family") — the collision unit51.js §2(a) found
// and dropped, and the reason u54l3 cards `зерно` for a grain. The diminutive
// `семечко` reads "semechko", which is free, and is the word Russians actually
// use of a plant seed in the hand. Its gloss is kept clear of `зерно`'s.
//
// REFUSED, with the reason:
//   `крона` — above.  `семя` — above.
//   `растение` — ALREADY REFUSED AT A2 against `расти` (unit51.js §3's list),
//        and the refusal stands; this unit teaches named plants instead of the
//        category word.
//   `цветение` · `озеленение` — against `цветок` (u26) and `зелёный` (u16).
//   `заросли` · `рябина` · `осина` · `верба` · `сирень` · `камыш` · `бутон` ·
//        `пень` · `плющ` — all FREE, all dropped for count at 24. Named so the
//        next seat finds a list rather than a gap.
// ⚠️ BOUNDARY — THIS UNIT OWNS THE ORGANISM, block 2's u111 owns the GLOBAL
// PROBLEM (выброс · потепление · вырубка · заповедник · биоразнообразие), and
// `экология` · `отходы` · `загрязнение` · `ресурс` are ALL TAKEN at u75. No
// card here reaches for any of them.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT127 = {
  id: "ru-u127",
  lang: "ru",
  title: "Растения и деревья",
  order: 127,
  stage: "b2",
  lessons: [
    {
      id: "ru-u127l1",
      unit: 127,
      lesson: 1,
      title: "Trees you can name",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the broadleaf trees of a Russian wood or street — an oak, a birch, a maple, a lime, a poplar and a willow.",
      items: [
        { id: "ru-u127l1-dub", type: "vocab", front: "дуб", reading: "dub", meaning: "an oak", accept: ["an oak tree", "a big hard-wooded tree", "the tree acorns grow on"], example: { jp: "Этот дуб стоит здесь уже триста лет, и его корень очень глубоко в земле.", en: "This oak has stood here for three hundred years, and its root is very deep in the ground." }, drill: { jp: "Этот дуб очень старый", en: "This oak is very old" }, hint: "DUB — one syllable, and the б is said as a p. MASCULINE. ⚠️ Its oblique forms move the stress onto the ending: дубА, дубЫ. Said of a person it means a blockhead, and that use is common." },
        { id: "ru-u127l1-beryoza", type: "vocab", front: "берёза", reading: "beryoza", meaning: "a birch", accept: ["a birch tree", "the white-barked tree", "the tree with white bark and small leaves"], example: { jp: "Берёза растёт быстро, и её белый ствол видно даже ночью.", en: "A birch grows quickly, and its white trunk is visible even at night." }, drill: { jp: "Эта берёза очень красивая", en: "This birch is very beautiful" }, hint: "bi-RYO-za — stress on RYO, and the first е reduces to i. FEMININE (-а). ⚠️ unit 1 §7 requires the ё to be written, and it must be: берёза, not береза. This is the tree of Russian songs and paintings — the national tree in everything but law." },
        { id: "ru-u127l1-klyon", type: "vocab", front: "клён", reading: "klyon", meaning: "a maple", accept: ["a maple tree", "the tree with hand-shaped leaves", "the tree whose leaves turn red"], example: { jp: "Осенью лист этого клёна становится совсем красный.", en: "In autumn the leaf of this maple turns completely red." }, drill: { jp: "Этот клён очень большой", en: "This maple is very large" }, hint: "KLYON — one syllable, with the soft л before the ё. MASCULINE. ⚠️ The ё DROPS to е in every other form: клЕна, клЕны — so the nominative is the only place you see it written." },
        { id: "ru-u127l1-lipa", type: "vocab", front: "липа", reading: "lipa", meaning: "a lime tree", accept: ["a linden tree", "the tree with sweet-smelling flowers", "the street tree bees work in June"], example: { jp: "Когда липа цветёт, вся улица пахнет очень сильно.", en: "When the lime is in flower, the whole street smells very strongly." }, drill: { jp: "Эта липа очень старая", en: "This lime tree is very old" }, hint: "LI-pa — stress on the first syllable. FEMININE (-а). ⚠️ A SECOND, slangy sense you will hear far more often in a city: липа means a fake or a forgery — «это липа», that's a fake." },
        { id: "ru-u127l1-topol", type: "vocab", front: "тополь", reading: "topol", meaning: "a poplar", accept: ["a poplar tree", "the tall narrow street tree", "the tree that drops white fluff in June"], example: { jp: "Тополь растёт очень быстро, поэтому его часто можно видеть в новых городах.", en: "A poplar grows very fast, so you can often see it in the new cities." }, drill: { jp: "Этот тополь очень высокий", en: "This poplar is very tall" }, hint: "TO-pal — stress on the first syllable, and the second о reduces to a. MASCULINE despite the -ь, so unit 1 §3 says to name it. ⚠️ Its plural moves the stress and takes -я: тополЯ." },
        { id: "ru-u127l1-iva", type: "vocab", front: "ива", reading: "iva", meaning: "a willow", accept: ["a willow tree", "the tree that leans over water", "the tree with long hanging branches"], example: { jp: "Ива стоит у самой воды, и её ветка лежит на реке.", en: "The willow stands right at the water, and its branch lies on the river." }, drill: { jp: "Эта ива очень красивая", en: "This willow is very beautiful" }, hint: "I-va — stress on the first syllable. FEMININE (-а). ⚠️ A short word with no tricks, and the one tree in this lesson that is ALWAYS near water in a Russian sentence." },
      ],
    },
    {
      id: "ru-u127l2",
      unit: 127,
      lesson: 2,
      title: "Conifers, trunk and bark",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the evergreen trees and the outside of a tree — a pine, a cedar, needles, a cone, the trunk and the bark.",
      items: [
        { id: "ru-u127l2-sosna", type: "vocab", front: "сосна", reading: "sosna", meaning: "a pine", accept: ["a pine tree", "the tall evergreen with long needles", "the tree that smells of resin"], example: { jp: "Сосна растёт даже там, где другие деревья не могут жить.", en: "A pine grows even where other trees cannot live." }, drill: { jp: "Эта сосна очень высокая", en: "This pine is very tall" }, hint: "sas-NA — stress on the last syllable, and the first о reduces to a. FEMININE (-а). ⚠️ Its plural moves the stress forward: сОсны. Most of northern Russia's forest is сосна and `ёлка` (unit 3) together." },
        { id: "ru-u127l2-kedr", type: "vocab", front: "кедр", reading: "kedr", meaning: "a cedar", accept: ["a cedar tree", "the big Siberian conifer", "the tree whose cones hold edible nuts"], example: { jp: "Кедр растёт очень медленно, но живёт пятьсот лет.", en: "A cedar grows very slowly, but lives for five hundred years." }, drill: { jp: "Этот кедр очень старый", en: "This cedar is very old" }, hint: "KEDR — one syllable. MASCULINE. ⚠️ In Russia кедр almost always means the Siberian pine, whose cones hold the nuts sold in every market — not the Lebanese cedar of the Bible. Its oblique forms keep the stress: кЕдра, кЕдры." },
        { id: "ru-u127l2-khvoya", type: "vocab", front: "хвоя", reading: "khvoya", meaning: "pine needles", accept: ["the needles of an evergreen", "the needle leaves of a conifer", "what a pine has instead of leaves"], example: { jp: "Хвоя лежала на земле так, что под ней не было травы.", en: "The needles lay on the ground in such a way that there was no grass under them." }, drill: { jp: "Эта хвоя совсем сухая", en: "These needles are quite dry" }, hint: "KHVO-ya — stress on the first syllable. FEMININE (-я), and ⚠️ IT IS A MASS NOUN: one хвоя means the whole covering of needles, not one needle. A single needle is иголка." },
        { id: "ru-u127l2-shishka", type: "vocab", front: "шишка", reading: "shishka", meaning: "a pine cone", accept: ["the woody fruit of a conifer", "what holds a pine's seeds", "the scaly thing a pine drops"], example: { jp: "Дети собирали шишки в лесу целый день.", en: "The children gathered cones in the forest all day." }, drill: { jp: "Эта шишка совсем сухая", en: "This cone is quite dry" }, hint: "SHISH-ka — stress on the first syllable. FEMININE (-а). ⚠️ TWO more live senses: a bump on the head, and an important person — «большая шишка», a big shot. All three are everyday." },
        { id: "ru-u127l2-stvol", type: "vocab", front: "ствол", reading: "stvol", meaning: "a tree trunk", accept: ["the main stem of a tree", "the thick upright body of a tree", "the woody column a tree stands on"], example: { jp: "Ствол этого дерева очень широкий, и кора на нём совсем сухая.", en: "The trunk of this tree is very wide, and the bark on it is quite dry." }, drill: { jp: "Этот ствол очень широкий", en: "This trunk is very wide" }, hint: "STVOL — one syllable opening with three consonants. MASCULINE. ⚠️ Its oblique forms move the stress onto the ending: стволА, стволЫ. The barrel of a gun is also a ствол, and unit 129 leaves that sense to this card." },
        { id: "ru-u127l2-kora", type: "vocab", front: "кора", reading: "kora", meaning: "bark", accept: ["the outer skin of a tree", "the hard covering of a trunk", "what a tree is wrapped in"], example: { jp: "Кора на этом дереве такая толстая, что её можно резать ножом.", en: "The bark on this tree is so thick that you can cut it with a knife." }, drill: { jp: "Эта кора совсем сухая", en: "This bark is quite dry" }, hint: "ka-RA — stress on the last syllable, and the first о reduces to a. FEMININE (-а). ⚠️ Do not confuse it with `корень`, a root, from unit 54: кора is the outside, корень is underground. Both are old words from the same family and neither gives the other away." },
      ],
    },
    {
      id: "ru-u127l3",
      unit: 127,
      lesson: 3,
      title: "The parts of a plant",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the parts a plant is built of — a stem, a petal, pollen, a seed, an acorn — and say what a bush is.",
      items: [
        { id: "ru-u127l3-stebel", type: "vocab", front: "стебель", reading: "stebel", meaning: "a stem", accept: ["the stalk of a plant", "the thin upright part of a flower", "what a flower head sits on"], example: { jp: "Стебель был такой тонкий, что цветок почти лежал на земле.", en: "The stem was so thin that the flower almost lay on the ground." }, drill: { jp: "Этот стебель совсем тонкий", en: "This stem is quite thin" }, hint: "STE-bel — stress on the first syllable. MASCULINE despite the -ь, so unit 1 §3 says to name it. ⚠️ The е DROPS in every other form: стеблЯ, стеблИ — the same class as `отец` from unit 10." },
        { id: "ru-u127l3-lepestok", type: "vocab", front: "лепесток", reading: "lepestok", meaning: "a petal", accept: ["one leaf of a flower head", "one of the coloured parts of a flower", "a single soft part of a bloom"], example: { jp: "Ветер взял один лепесток, и он долго летел над водой.", en: "The wind took one petal, and it flew over the water for a long time." }, drill: { jp: "Этот лепесток совсем белый", en: "This petal is quite white" }, hint: "li-pis-TOK — stress on the last syllable, and both е reduce to i. MASCULINE. ⚠️ The о DROPS in every other form: лепесткА, лепесткИ. Built on the same old root as `лист`, from unit 26." },
        { id: "ru-u127l3-pyltsa", type: "vocab", front: "пыльца", reading: "pyltsa", meaning: "pollen", accept: ["the fine dust a flower makes", "the yellow powder inside a flower", "what bees carry between flowers"], example: { jp: "Весной в воздухе так много пыльцы, что некоторые люди не могут дышать.", en: "In spring there is so much pollen in the air that some people cannot breathe." }, drill: { jp: "Эта пыльца очень лёгкая", en: "This pollen is very light" }, hint: "pyl-TSA — stress on the last syllable, with the ы from unit 5. FEMININE (-а). ⚠️ From пыль, dust, which it is not: do not let the shared root make you gloss it as dust. A MASS NOUN, so there is no natural plural." },
        { id: "ru-u127l3-semechko", type: "vocab", front: "семечко", reading: "semechko", meaning: "a plant seed", accept: ["the small thing a plant grows from", "what you put in the ground to grow a plant", "a pip"], example: { jp: "Это семечко очень маленькое, но из него будет большой цветок.", en: "This seed is very small, but a big flower will come out of it." }, drill: { jp: "Это семечко совсем маленькое", en: "This seed is quite small" }, hint: "SE-mech-ka — stress on the first syllable, and the final о reduces to a. NEUTER (-о). ⚠️ The plain word `семя` CANNOT be carded: it reads \"semya\", which is already `семья`'s (unit 10), and unit 51 §2 dropped it for that. This diminutive is free and is what Russians actually say. The plural семечки means sunflower seeds you eat." },
        { id: "ru-u127l3-zhyolud", type: "vocab", front: "жёлудь", reading: "zhyolud", meaning: "an acorn", accept: ["the seed of an oak", "the nut an oak drops", "what grows into an oak"], example: { jp: "Осенью под дубом лежало столько жёлудей, что земли не было видно.", en: "In autumn there were so many acorns under the oak that the ground was not visible." }, drill: { jp: "Этот жёлудь совсем маленький", en: "This acorn is quite small" }, hint: "ZHO-lud — stress on the first syllable, and жё is said zho, not zhyo: ж is always hard, which unit 6 teaches. MASCULINE despite the -ь. ⚠️ Its plural moves the stress onto the ending: жёлудЕй." },
        { id: "ru-u127l3-kust", type: "vocab", front: "куст", reading: "kust", meaning: "a bush", accept: ["a low woody plant", "a shrub", "a plant with many stems and no trunk"], example: { jp: "За домом растёт куст, и летом на нём много маленьких цветов.", en: "A bush grows behind the house, and in summer there are many small flowers on it." }, drill: { jp: "Этот куст очень большой", en: "This bush is very large" }, hint: "KUST — one syllable. MASCULINE. ⚠️ Its oblique forms move the stress onto the ending: кустА, кустЫ. A `дерево` has one trunk; a куст has many stems and no trunk at all." },
      ],
    },
    {
      id: "ru-u127l4",
      unit: 127,
      lesson: 4,
      title: "Low growth",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what grows close to the ground — a rose, a daisy, a mushroom, moss, a fern and a weed.",
      items: [
        { id: "ru-u127l4-roza", type: "vocab", front: "роза", reading: "roza", meaning: "a rose", accept: ["the flower with thorns", "a rose flower", "the flower people give in bunches"], example: { jp: "Эту розу купили утром, а вечером она уже стояла в воде на столе.", en: "This rose was bought in the morning, and by the evening it was already standing in water on the table." }, drill: { jp: "Эта роза очень красивая", en: "This rose is very beautiful" }, hint: "RO-za — stress on the first syllable. FEMININE (-а). ⚠️ In Russian the colour is розовый, pink, not rose — and a bunch of them is a букет." },
        { id: "ru-u127l4-romashka", type: "vocab", front: "ромашка", reading: "romashka", meaning: "a daisy", accept: ["the white field flower with a yellow middle", "a camomile flower", "the flower petals are pulled off one by one"], example: { jp: "Ромашка растёт в поле, и летом там всё белое.", en: "A daisy grows in a field, and in summer everything there is white." }, drill: { jp: "Эта ромашка совсем белая", en: "This daisy is quite white" }, hint: "ra-MASH-ka — stress on MASH, and the first о reduces to a. FEMININE (-а). ⚠️ The same word is the TEA: ромашка is what a Russian drinks for a cold, and the flower and the drink are not distinguished." },
        { id: "ru-u127l4-grib", type: "vocab", front: "гриб", reading: "grib", meaning: "a mushroom", accept: ["a fungus you can pick", "what grows in a wood after rain", "a toadstool"], example: { jp: "После дождя в лесу стало очень много грибов, и мы собирали их два часа.", en: "After the rain there were a great many mushrooms in the forest, and we gathered them for two hours." }, drill: { jp: "Этот гриб совсем маленький", en: "This mushroom is quite small" }, hint: "GRIB — one syllable, and the б is said as a p. MASCULINE. ⚠️ Its oblique forms move the stress onto the ending: грибА, грибЫ. Picking them is a national pastime, and «идти по грибы» is the fixed phrase for going to do it." },
        { id: "ru-u127l4-mokh", type: "vocab", front: "мох", reading: "mokh", meaning: "moss", accept: ["the soft green growth on stones", "a low soft plant on wet ground", "the green that covers old wood"], example: { jp: "На этом старом дереве мох растёт уже много лет.", en: "Moss has been growing on this old tree for many years." }, drill: { jp: "Этот мох совсем сухой", en: "This moss is quite dry" }, hint: "MOKH — one syllable. MASCULINE. ⚠️ The о DROPS in every other form and the stress moves: мхА, мхИ — a short word with a hard paradigm, so learn мох / мха together. A MASS NOUN in practice." },
        { id: "ru-u127l4-paporotnik", type: "vocab", front: "папоротник", reading: "paporotnik", meaning: "a fern", accept: ["the plant with feather-shaped leaves", "a shade plant with no flowers", "the old plant that never flowers"], example: { jp: "Папоротник растёт там, где всегда тень и земля сырая.", en: "A fern grows where there is always shade and the ground is damp." }, drill: { jp: "Этот папоротник очень большой", en: "This fern is very large" }, hint: "PA-pa-rat-nik — four syllables, stress on the FIRST, and all three following о reduce. MASCULINE. ⚠️ In Russian folk belief its flower blooms one night a year and finds treasure — which is the joke in it, because a папоротник never flowers at all." },
        { id: "ru-u127l4-sornyak", type: "vocab", front: "сорняк", reading: "sornyak", meaning: "a weed", accept: ["a plant nobody wanted", "an unwanted plant in a garden", "a plant that grows where it should not"], example: { jp: "Этот сорняк растёт очень быстро, и его трудно убрать.", en: "This weed grows very fast, and it is hard to clear away." }, drill: { jp: "Этот сорняк очень высокий", en: "This weed is very tall" }, hint: "sar-NYAK — stress on the last syllable, and the first о reduces to a. MASCULINE. From сор, rubbish. ⚠️ Its oblique forms move the stress onto the ending: сорнякА, сорнякИ." },
      ],
    },
  ],
};
