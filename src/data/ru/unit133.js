// RU Unit 133 — Ткань и покрой ("Cloth and cut") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u124–u136). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit87.js §1–§6, and
// ru/unit124.js §1–§5 for this block.
// Probes quoted in this header are reproducible with
// `node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...` — see unit124.js.
//
// THE MEASURED HOLE. u18 Одежда и покупки is THE GARMENT you buy (рубашка ·
// брюки · платье · куртка · карман), u33l4 gives the three raw materials
// (`ткань` · `шерсть` · `кожа`, all BARRED as fronts) and u57 gives `шить`.
// Across 2,328 cards nothing says HOW a garment is made or what it is made of
// beyond those three: no silk, no linen, no cotton, no seam, no sleeve, no
// collar, no button, no lining, no embroidery, no paper pattern. Twenty-three
// of the probed seeds were free and one more was added.
//
// ⚠️ `ткань` IS IN THE TITLE AND IS TAUGHT AT u33l4, which is not a conflict:
// a unit may be NAMED for a word an earlier unit carded. This is the ordinary
// case, not the u92/u124 one where a title names a word NO card may teach.
//
// ⚠️ `крой` WAS REFUSED AGAINST THIS UNIT'S OWN `выкройка`, and for the gloss as
// much as the root. Both sit on кроить, which is carded nowhere — so neither is
// the other's base — but "the cut" and "a cut-out pattern" are one idea to a
// learner, and l2 only needs one of each. `фасон` carries the style and
// `выкройка` the paper pattern; `крой` is named here and nowhere else.
//
// ⚠️ `хлопок` IS A STRESS PAIR WITH ITSELF, and it is the only card in the block
// where the stress changes the WORD rather than just the sound. хлОпок, stress
// on the first syllable, is cotton; хлопОк, stress on the second, is a clap or
// a bang. Same letters, same reading under unit1.js §1 ("khlopok"), two words —
// exactly what unit1.js §6 means by saying the stress is not decoration.
// Nothing collides, because the clap is carded nowhere; the hint states the pair.
//
// REFUSED, with the reason:
//   `крой` — above.
//   `портной` ("a tailor") — a substantivised adjective, barred by unit1.js §5
//        and unit51.js §2(b), the same rule that killed `пожарный` at B1
//        (u87 §4) and `прихожая` at u132. It probes FREE as a string.
//   `швея` — against `шов`, which is carded in l2 of this very unit, and
//        against `шить` (u57); two claims on the ш-root inside one unit.
//   `ткачество` · `ткать` — against `ткань` (u33l4).
//   `шерстяной` · `льняной` · `кожаный` — adjectives of a taught or carded noun.
//   `нитка` · `иголка` · `напёрсток` · `оборка` · `атлас` · `пояс` — all FREE,
//        all dropped for count at 24. `молния` (a zip) is TAKEN at u91l1 as
//        lightning, `карман` at u18l2, `ножницы` at u89.
//
// ⚠️ `воротник` AND `складка` ARE KEPT THOUGH A 5-CHARACTER STEM PROBE FLAGS
// THEM, because they are unrelated words: `воротник` (a collar) beside `ворота`
// (u60l?, gates) and `складка` (a pleat) beside `склад` (u87, a warehouse).
// Each card's hint states the pair so the learner is not surprised. Same
// treatment as `колонна`/`колония` and `смета`/`сметана` at u126.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT133 = {
  id: "ru-u133",
  lang: "ru",
  title: "Ткань и покрой",
  order: 133,
  stage: "b2",
  lessons: [
    {
      id: "ru-u133l1",
      unit: 133,
      lesson: 1,
      title: "What it is made of",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the cloths a garment can be made of — silk, linen, cotton, velvet, suede and knitted fabric.",
      items: [
        { id: "ru-u133l1-shyolk", type: "vocab", front: "шёлк", reading: "shyolk", meaning: "silk", accept: ["the smooth cloth made by insects", "a light shining cloth", "the finest soft cloth"], example: { jp: "Шёлк такой тонкий, что через него видно свет.", en: "Silk is so thin that you can see light through it." }, drill: { jp: "Этот шёлк очень тонкий", en: "This silk is very thin" }, hint: "SHOLK — one syllable, and шё is said sho, not shyo: ш is always hard, which unit 6 teaches. MASCULINE. ⚠️ unit 1 §7 requires the ё, and it DROPS to е when the word inflects: шЕлка, из шЕлка." },
        { id: "ru-u133l1-lyon", type: "vocab", front: "лён", reading: "lyon", meaning: "linen", accept: ["cloth made from a blue-flowered plant", "the cool rough summer cloth", "flax cloth"], example: { jp: "Лён растёт в поле, и его синие цветы видно очень далеко.", en: "Flax grows in a field, and its blue flowers can be seen from a long way off." }, drill: { jp: "Этот лён очень старый", en: "This linen is very old" }, hint: "LYON — one syllable, with the soft л before the ё. MASCULINE. ⚠️ The ё DROPS AND THE VOWEL GOES: льна, изо льна — so лён and льна must be learnt as a pair. The word covers both the plant and the cloth." },
        { id: "ru-u133l1-khlopok", type: "vocab", front: "хлопок", reading: "khlopok", meaning: "cotton", accept: ["the soft white plant fibre", "cloth made from a white boll", "the everyday plant cloth"], example: { jp: "Хлопок дешевле шёлка, но носить его летом гораздо лучше.", en: "Cotton is cheaper than silk, but wearing it in summer is far better." }, drill: { jp: "Этот хлопок очень тонкий", en: "This cotton is very thin" }, hint: "KHLO-pak — stress on the FIRST syllable, and the second о reduces to a. MASCULINE. ⚠️ A STRESS PAIR WITH ITSELF: хлОпок is cotton, but хлопОк — stress on the second syllable — is a clap or a bang, a completely different word spelled identically. unit 1 §6 says the stress is not decoration, and this is why. The о drops when it inflects: хлОпка." },
        { id: "ru-u133l1-barkhat", type: "vocab", front: "бархат", reading: "barkhat", meaning: "velvet", accept: ["thick cloth with a soft raised surface", "the heavy soft cloth of theatre curtains", "deep soft pile cloth"], example: { jp: "Бархат был такой тёмный, что в комнате стало совсем тихо.", en: "The velvet was so dark that the room became completely quiet." }, drill: { jp: "Этот бархат очень тёмный", en: "This velvet is very dark" }, hint: "BAR-khat — stress on the first syllable. MASCULINE. A German loan. ⚠️ Alive as a metaphor for smoothness: «бархатный голос», a velvet voice, and «бархатный сезон», the gentle warm weeks of September on the Black Sea." },
        { id: "ru-u133l1-zamsha", type: "vocab", front: "замша", reading: "zamsha", meaning: "suede", accept: ["soft leather with a brushed surface", "leather that feels like cloth", "the soft rough-surfaced leather of shoes"], example: { jp: "Замша боится воды, поэтому зимой её не носят.", en: "Suede is afraid of water, so it is not worn in winter." }, drill: { jp: "Эта замша очень тёмная", en: "This suede is very dark" }, hint: "ZAM-sha — stress on the first syllable. FEMININE (-а). A German loan. ⚠️ A kind of `кожа` (unit 33) and not a cloth at all, which is why the gloss says leather: замша is skin with the surface brushed up." },
        { id: "ru-u133l1-trikotazh", type: "vocab", front: "трикотаж", reading: "trikotazh", meaning: "knitted fabric", accept: ["cloth made of loops rather than threads", "stretchy machine-knitted cloth", "the cloth a jumper or t-shirt is made of"], example: { jp: "Трикотаж не надо резать ровно, потому что он сам держит форму.", en: "Knitted fabric does not have to be cut straight, because it holds its shape itself." }, drill: { jp: "Этот трикотаж очень тонкий", en: "This knitted fabric is very thin" }, hint: "tri-ka-TAZH — stress on the last syllable, the о reduces to a, and the ж is said as sh at the end. MASCULINE. A French loan. ⚠️ A shop sign word: трикотаж over a door means jumpers, t-shirts and underwear — anything knitted rather than woven." },
      ],
    },
    {
      id: "ru-u133l2",
      unit: 133,
      lesson: 2,
      title: "The cut",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a garment is put together — the style, the paper pattern, a seam, the lining, the hem and a pleat.",
      items: [
        { id: "ru-u133l2-fason", type: "vocab", front: "фасон", reading: "fason", meaning: "the style of a garment", accept: ["the shape a piece of clothing is cut to", "the way a garment is designed", "the particular cut of a coat or dress"], example: { jp: "Фасон этого платья очень старый, но оно опять в моде.", en: "The style of this dress is very old, but it is in fashion again." }, drill: { jp: "Этот фасон очень старый", en: "This style is very old" }, hint: "fa-SON — stress on the last syllable. MASCULINE. A French loan (façon). ⚠️ Also a manner of behaving, slightly mockingly: «держать фасон», to keep up appearances." },
        { id: "ru-u133l2-vykroyka", type: "vocab", front: "выкройка", reading: "vykroyka", meaning: "a paper pattern for cutting cloth", accept: ["the paper shapes a garment is cut from", "a cutting template for cloth", "the drawn shapes you lay on fabric"], example: { jp: "Без выкройки сделать такое платье почти нельзя.", en: "Without a pattern it is almost impossible to make such a dress." }, drill: { jp: "Эта выкройка очень старая", en: "This pattern is very old" }, hint: "VY-kroy-ka — stress on the FIRST syllable, with the ы from unit 5. FEMININE (-а). From кроить, to cut cloth, which this course does not card. ⚠️ `крой` — the cut itself — is named here and is not a card: one idea, one word, and l2 needs the paper." },
        { id: "ru-u133l2-shov", type: "vocab", front: "шов", reading: "shov", meaning: "a seam", accept: ["the line where two pieces of cloth are joined", "a sewn join", "the stitched line in a garment"], example: { jp: "Шов был сделан так хорошо, что его совсем не видно.", en: "The seam was made so well that it cannot be seen at all." }, drill: { jp: "Этот шов очень ровный", en: "This seam is very even" }, hint: "SHOV — one syllable, and the в is said as an f at the end. MASCULINE. From `шить`, to sew, from unit 57. ⚠️ The о DROPS in every other form and the stress moves: швА, швЫ. In a hospital a шов is the stitches in a wound." },
        { id: "ru-u133l2-podkladka", type: "vocab", front: "подкладка", reading: "podkladka", meaning: "the lining of a garment", accept: ["the smooth cloth sewn inside a coat", "the inner layer of a jacket", "what a coat is lined with"], example: { jp: "Подкладка в этом пальто была из шёлка, и поэтому его было легко надеть.", en: "The lining in this coat was of silk, and that made it easy to put on." }, drill: { jp: "Эта подкладка совсем новая", en: "This lining is quite new" }, hint: "pad-KLAD-ka — stress on KLAD, and the о reduces to a. FEMININE (-а). From класть, to lay, with под-, under — the same root as u126l1's `кладка` and u132l2's `кладовка`. ⚠️ Used figuratively of a hidden motive: «с подкладкой», with something behind it." },
        { id: "ru-u133l2-podol", type: "vocab", front: "подол", reading: "podol", meaning: "the hem of a skirt", accept: ["the bottom edge of a dress", "the lower border of a skirt", "where a skirt or dress ends"], example: { jp: "Подол был такой длинный, что он шёл по земле.", en: "The hem was so long that it went along the ground." }, drill: { jp: "Этот подол очень длинный", en: "This hem is very long" }, hint: "pa-DOL — stress on the last syllable, and the first о reduces to a. MASCULINE. ⚠️ Only of a SKIRT or a dress — a long garment's bottom edge. Do not confuse it with `посол` (u130l1), an ambassador: one letter apart and nothing else in common." },
        { id: "ru-u133l2-skladka", type: "vocab", front: "складка", reading: "skladka", meaning: "a pleat", accept: ["a fold sewn into cloth", "a pressed fold in a skirt", "a deliberate fold of fabric"], example: { jp: "Складка на этом платье была сделана очень ровно.", en: "The pleat on this dress was made very evenly." }, drill: { jp: "Эта складка очень ровная", en: "This pleat is very even" }, hint: "SKLAD-ka — stress on the first syllable. FEMININE (-а). ⚠️ Nothing to do with `склад`, a warehouse, from unit 87 — the same old root as класть, but two separate words now. Also a fold of skin, and a fold in the ground in geology." },
      ],
    },
    {
      id: "ru-u133l3",
      unit: 133,
      lesson: 3,
      title: "Parts of a garment",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the pieces of a jacket or shirt — a sleeve, a cuff, a collar, a lapel, a button and the hole it goes through.",
      items: [
        { id: "ru-u133l3-rukav", type: "vocab", front: "рукав", reading: "rukav", meaning: "a sleeve", accept: ["the part of a garment an arm goes in", "the tube of cloth over an arm", "what covers the arm on a shirt"], example: { jp: "Рукав был слишком длинный, и его пришлось делать короче.", en: "The sleeve was too long, and it had to be made shorter." }, drill: { jp: "Этот рукав очень длинный", en: "This sleeve is very long" }, hint: "ru-KAV — stress on the last syllable. MASCULINE. From рука, a hand, from unit 20. ⚠️ Its plural moves the stress onto the ending AND takes -а: рукавА. A branch of a river is also a рукав, and so is a fire hose." },
        { id: "ru-u133l3-manzheta", type: "vocab", front: "манжета", reading: "manzheta", meaning: "a cuff", accept: ["the band at the end of a sleeve", "the stiff edge of a shirt sleeve", "where a sleeve closes at the wrist"], example: { jp: "Манжета была белая, и на ней было видно каждое пятно.", en: "The cuff was white, and every mark showed on it." }, drill: { jp: "Эта манжета совсем новая", en: "This cuff is quite new" }, hint: "man-ZHE-ta — stress on ZHE. FEMININE (-а). A French loan. ⚠️ Also the rubber band of a blood-pressure machine, which is where a doctor will use the word." },
        { id: "ru-u133l3-vorotnik", type: "vocab", front: "воротник", reading: "vorotnik", meaning: "a collar", accept: ["the band of cloth round the neck of a shirt", "what stands up round the neck of a coat", "the part of a garment at the neck"], example: { jp: "Воротник этой рубашки был такой тонкий, что он не стоял.", en: "The collar of this shirt was so thin that it did not stand up." }, drill: { jp: "Этот воротник совсем новый", en: "This collar is quite new" }, hint: "va-rat-NIK — stress on the last syllable, and both о reduce to a. MASCULINE. ⚠️ Nothing to do with `ворота`, gates, from unit 60 — they share an old root meaning a turn, and are two separate words now. A fur one is a меховой воротник." },
        { id: "ru-u133l3-latskan", type: "vocab", front: "лацкан", reading: "latskan", meaning: "a lapel", accept: ["the folded-back front edge of a jacket", "the turned-over flap on a coat front", "where a badge is pinned on a jacket"], example: { jp: "На лацкане у него был маленький знак, и все его видели.", en: "On his lapel he had a small badge, and everyone saw it." }, drill: { jp: "Этот лацкан совсем новый", en: "This lapel is quite new" }, hint: "LATS-kan — stress on the first syllable. MASCULINE. A German loan. ⚠️ A narrow, exact word: only the folded-back front edge of a jacket or coat, and it is where a Russian pins a flower or a medal." },
        { id: "ru-u133l3-pugovitsa", type: "vocab", front: "пуговица", reading: "pugovitsa", meaning: "a sewn-on button", accept: ["the small round fastener on a shirt", "a disc sewn on to fasten clothes", "what you do up a coat with"], example: { jp: "Пуговица была совсем маленькая, и её искали под столом целый час.", en: "The button was quite small, and they looked for it under the table for a whole hour." }, drill: { jp: "Эта пуговица совсем новая", en: "This button is quite new" }, hint: "PU-ga-vi-tsa — four syllables, stress on the FIRST, and the о reduces to a. FEMININE (-а). ⚠️ Only the sewn-on kind. A button you PRESS — on a machine, a lift, a phone — is кнопка, and the two are never swapped." },
        { id: "ru-u133l3-petlya", type: "vocab", front: "петля", reading: "petlya", meaning: "a buttonhole", accept: ["the slit a button goes through", "a loop sewn to hold a button", "the worked hole on the other side of a button"], example: { jp: "Петля была слишком большая, и пуговица из неё выходила.", en: "The buttonhole was too large, and the button came out of it." }, drill: { jp: "Эта петля очень большая", en: "This buttonhole is very large" }, hint: "pit-LYA — stress on the last syllable, and the е reduces to i; you will also hear PET-lya, and both are accepted. FEMININE (-я). ⚠️ THREE more senses, all everyday: a door hinge, a loop of rope, and a loop in flight. Nothing to do with `петь`, to sing, from unit 27." },
      ],
    },
    {
      id: "ru-u133l4",
      unit: 133,
      lesson: 4,
      title: "Ornament and the finished thing",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how cloth is decorated and what it becomes — a pattern, embroidery, lace, a fringe, a heel and a fine outfit.",
      items: [
        { id: "ru-u133l4-uzor", type: "vocab", front: "узор", reading: "uzor", meaning: "a repeating pattern", accept: ["a design that repeats across a surface", "a worked figure on cloth", "an ornament repeated over a fabric"], example: { jp: "Узор на этой ткани такой старый, что его делали ещё при царях.", en: "The pattern on this cloth is so old that it was being made in the time of the tsars." }, drill: { jp: "Этот узор очень красивый", en: "This pattern is very beautiful" }, hint: "u-ZOR — stress on the last syllable. MASCULINE. ⚠️ A узор REPEATS — on cloth, on a window in frost, on a wooden shutter. A one-off drawing is a рисунок, and a paper pattern for cutting is the `выкройка` from lesson 2." },
        { id: "ru-u133l4-vyshivka", type: "vocab", front: "вышивка", reading: "vyshivka", meaning: "embroidery", accept: ["a design sewn onto cloth with thread", "pictures made with a needle", "needlework decoration on fabric"], example: { jp: "Вышивка на рубашке была красная и белая, как делали в деревне.", en: "The embroidery on the shirt was red and white, as they used to do in the village." }, drill: { jp: "Эта вышивка очень красивая", en: "This embroidery is very beautiful" }, hint: "VY-shif-ka — stress on the FIRST syllable, with the ы from unit 5, and the в is said as an f. FEMININE (-а). From `шить`, to sew, with вы-. ⚠️ The red-and-white вышивка on a linen shirt is the single most recognisable piece of Russian folk craft." },
        { id: "ru-u133l4-kruzhevo", type: "vocab", front: "кружево", reading: "kruzhevo", meaning: "lace", accept: ["open patterned cloth full of holes", "fine openwork fabric", "the delicate cloth you can see through"], example: { jp: "Кружево делали руками, и на один метр уходил целый месяц.", en: "The lace was made by hand, and one metre took a whole month." }, drill: { jp: "Это кружево очень тонкое", en: "This lace is very fine" }, hint: "KRU-zhe-va — stress on the FIRST syllable, and the final о reduces to a. NEUTER (-о). From круг, a circle, from unit 36. ⚠️ Its plural moves the stress onto the ending and takes -а: кружевА, which is the form a shop uses." },
        { id: "ru-u133l4-bakhroma", type: "vocab", front: "бахрома", reading: "bakhroma", meaning: "a fringe of hanging threads", accept: ["loose threads hanging from an edge", "a trim of dangling strands", "the hanging border on a shawl"], example: { jp: "Бахрома на этом платке была длинная и очень тонкая.", en: "The fringe on this shawl was long and very fine." }, drill: { jp: "Эта бахрома очень длинная", en: "This fringe is very long" }, hint: "bakh-ra-MA — stress on the LAST syllable, and the о before it reduces to a. FEMININE (-а). A Turkic loan. ⚠️ Only the hanging-thread kind. A fringe of HAIR on a forehead is чёлка, and the two are never confused in Russian the way they are in English." },
        { id: "ru-u133l4-kabluk", type: "vocab", front: "каблук", reading: "kabluk", meaning: "the heel of a shoe", accept: ["the raised block under the back of a shoe", "what makes a shoe higher at the back", "the hard part a shoe stands on at the back"], example: { jp: "Каблук был такой высокий, что идти по камням было нельзя.", en: "The heel was so high that it was impossible to walk on stones." }, drill: { jp: "Этот каблук очень высокий", en: "This heel is very high" }, hint: "kab-LUK — stress on the last syllable. MASCULINE. A Turkic loan. ⚠️ Its oblique forms move the stress onto the ending: каблукА, каблукИ. The heel of your FOOT is пятка, a different word — and «под каблуком» means under someone's thumb." },
        { id: "ru-u133l4-naryad", type: "vocab", front: "наряд", reading: "naryad", meaning: "a fine outfit", accept: ["clothes put on for an occasion", "a dressed-up set of clothes", "what someone wears to be seen in"], example: { jp: "Её наряд был такой красивый, что все смотрели только на неё.", en: "Her outfit was so beautiful that everyone looked only at her." }, drill: { jp: "Этот наряд очень красивый", en: "This outfit is very beautiful" }, hint: "na-RYAD — stress on the last syllable, and the д is said as a t. MASCULINE. ⚠️ `одежда` (unit 18) is clothes as a category; a наряд is a SPECIAL outfit, worn to be looked at. ⚠️ A second, unrelated sense in the army and the police: a наряд is also a detail of men assigned to a duty." },
      ],
    },
  ],
};
