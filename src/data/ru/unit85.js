// RU Unit 85 — Внешность и облик ("Appearance and looks") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, ru/unit74.js §1–§5.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 2 (B1)` — no subject named; see
// unit84.js's header and unit51.js's for the same problem at A2.
//
// THE MEASURED HOLE. The learner has TWENTY-FOUR body words — u20 Тело и
// здоровье (голова · глаз · нос · рот · ухо · лицо · рука · нога · палец ·
// спина · живот · зуб) and u53 Болезнь и лечение (шея · плечо · колено · горло ·
// кость · мышца · кровь · мозг · нерв · желудок · печень · грудь) — and
// **`волосы` «hair» IS UNTAUGHT.** So are борода · усы · причёска · лысый ·
// стройный, and so is every part of the face above the eyes: лоб · брови ·
// ресницы · щека. A learner could name a liver and not a forehead, and could
// not describe a single person they had met. That is this unit's 24.
//
// ⚠️ `очки` «glasses» IS CARDED HERE, AND IT COST u84 A CARD. очки is the PLURAL
// of `очко` «a point in a game», which u84 Спорт и состязание obviously wanted.
// They are one noun's two numbers, so unit1.js §5 allows only one of them; the
// glasses are worth more to a learner than a second word for a score, so u84
// scores with `балл` instead. Both read as free fronts and the collision is
// invisible to every probe the course owns — recorded in unit74.js §2 as well.
//
// ⚠️ REFUSED on unit1.js §D: `подбородок` «a chin» (против `борода`, carded
//   here) · `веснушки` (против `весна` u16) · `родинка` (the род- root is at
//   родной u8, родственник u59 and рождение u59) · `красавица` (против
//   `красивый` u19) · `полнота` (против `полный` u23) · `блондин` (nothing to
//   refuse it against, but `кудрявый` and `седой` already carry hair colour) ·
//   `загар` (the жар- root is at жара u16, жарко u34 and жарить u58) ·
//   `стрижка` (против `причёска`'s own domain, and `стричь` is not taught).
// ⚠️ TWO KEPT WITH REASONS: `стройный` sits on строить (u57l1) — «slim» is not
//   reachable from «to build» in any direction — and `ноготь` sits on нога
//   (u20l1), where «a nail» is not reachable from «a leg». The hint on each
//   names the look-alike so the learner is not left guessing at a false link.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT85 = {
  id: "ru-u85",
  lang: "ru",
  title: "Внешность и облик",
  order: 85,
  stage: "b1",
  lessons: [
    {
      id: "ru-u85l1",
      unit: 85,
      lesson: 1,
      title: "Hair, at last",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe someone's hair and hairstyle, name a beard and a moustache, and say that a person is bald or grey.",
      items: [
        { id: "ru-u85l1-volosy", type: "vocab", front: "волосы", reading: "volosy", meaning: "hair", accept: ["the hair", "hair on your head", "a head of hair"], example: { jp: "Волосы у неё были такие длинные, что причёску она делала целый час.", en: "Her hair was so long that doing it took her a whole hour." }, drill: { jp: "Волосы у неё очень длинные", en: "Her hair is very long" }, hint: "VO-la-sy — stress on the first syllable, and the unstressed о reduces to a. MASCULINE, and ⚠️ taught in the PLURAL because that is how Russian counts hair: «волосы» is the hair on a head, and the singular волос is ONE strand. ⚠️ A GENUINE A1 GAP — the course taught twenty-four body words before this one." },
        { id: "ru-u85l1-prichyoska", type: "vocab", front: "причёска", reading: "prichyoska", meaning: "a hairstyle", accept: ["a haircut", "the way hair is done", "a hairdo"], example: { jp: "Причёска стоила очень дорого, зато о ней говорили все соседи.", en: "The hairstyle cost a great deal, but all the neighbours talked about it." }, drill: { jp: "Причёска стоила очень дорого", en: "The hairstyle cost a great deal" }, hint: "pri-CHYOS-ka — stress on CHYOS, with the ё always written (unit 1 §7). FEMININE (-а). From чесать, to comb, which is not taught. ⚠️ Covers both the cut and the arrangement — Russian does not separate «haircut» from «hairdo»." },
        { id: "ru-u85l1-boroda", type: "vocab", front: "борода", reading: "boroda", meaning: "a beard", accept: ["the beard", "a full beard", "hair on the chin"], example: { jp: "Борода у дедушки седая, а усы совсем чёрные.", en: "Grandfather's beard is grey and his moustache is quite black." }, drill: { jp: "Борода у дедушки седая", en: "Grandfather's beard is grey" }, hint: "ba-ra-DA — stress on the last syllable, and BOTH о reduce to a. FEMININE (-а), and ⚠️ its stress MOVES to the first syllable in the accusative: бОроду. `подбородок` «a chin» is deliberately not carded against it — unit1.js §D." },
        { id: "ru-u85l1-usy", type: "vocab", front: "усы", reading: "usy", meaning: "a moustache", accept: ["the moustache", "whiskers", "a cat's whiskers"], example: { jp: "Усы он носит с двадцати лет и менять ничего не хочет.", en: "He has worn a moustache since he was twenty and does not want to change anything." }, drill: { jp: "Усы он носит с двадцати лет", en: "He has worn a moustache since he was twenty" }, hint: "u-SY — stress on the last syllable, with the hard ы of unit 5’s и/ы contrast (the glyph itself is unit 2). MASCULINE, and ⚠️ PLURAL — a moustache is «усы», two of them, and the singular ус is one hair of it. Also a cat's or an insect's whiskers. носить from unit 18 is the verb for wearing it." },
        { id: "ru-u85l1-lysyy", type: "vocab", front: "лысый", reading: "lysyy", meaning: "bald", accept: ["bald-headed", "with no hair", "hairless"], example: { jp: "Лысый сосед всегда носит шапку, даже летом.", en: "The bald neighbour always wears a hat, even in summer." }, drill: { jp: "Лысый сосед всегда носит шапку", en: "The bald neighbour always wears a hat" }, hint: "LY-syy — stress on the first syllable, with the hard ы twice. Of a person, and of a hill or a tyre with nothing left on it: «лысая шина». The noun лысина is the bald patch itself." },
        { id: "ru-u85l1-sedoy", type: "vocab", front: "седой", reading: "sedoy", meaning: "grey-haired", accept: ["with grey hair", "white-haired", "going grey"], example: { jp: "Седой он стал очень рано, хотя в семье это у всех так.", en: "He went grey very early, although it is like that for everyone in the family." }, drill: { jp: "Седой он стал очень рано", en: "He went grey very early" }, hint: "se-DOY — stress on the last syllable. ⚠️ ONLY of hair — grey as a COLOUR is серый from unit 16, and the two are never swapped: «серый дом» but «седая борода». «Седая старина» is the distant past." },
      ],
    },
    {
      id: "ru-u85l2",
      unit: 85,
      lesson: 2,
      title: "The face above the eyes",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a forehead, eyebrows, eyelashes, a cheek and a wrinkle, and say that someone wears glasses.",
      items: [
        { id: "ru-u85l2-lob", type: "vocab", front: "лоб", reading: "lob", meaning: "a forehead", accept: ["the forehead", "the brow", "the front of the head"], example: { jp: "Лоб у него высокий, и шапка всегда слишком маленькая.", en: "His forehead is high and a hat is always too small." }, drill: { jp: "Лоб у него очень высокий", en: "His forehead is very high" }, hint: "LOB — one syllable, and the б goes quiet at the end, so it comes out LOP. MASCULINE, and ⚠️ its о DROPS in every other case: лбА, лбУ, на лбУ — the same class as день from unit 3. «В лоб» means straight out, bluntly." },
        { id: "ru-u85l2-brovi", type: "vocab", front: "брови", reading: "brovi", meaning: "eyebrows", accept: ["the eyebrows", "a pair of eyebrows", "brows"], example: { jp: "Брови у неё совсем тёмные, а волосы светлые.", en: "Her eyebrows are quite dark and her hair is fair." }, drill: { jp: "Брови у неё совсем тёмные", en: "Her eyebrows are quite dark" }, hint: "BRO-vi — stress on the first syllable. FEMININE, taught in the PLURAL; the singular бровь is one eyebrow and is itself feminine in -ь. ⚠️ Its genitive plural is бровЕЙ. «Нахмурить брови» is to frown." },
        { id: "ru-u85l2-resnitsy", type: "vocab", front: "ресницы", reading: "resnitsy", meaning: "eyelashes", accept: ["the eyelashes", "lashes", "a set of eyelashes"], example: { jp: "Ресницы у неё очень длинные, и поэтому глаза кажутся больше.", en: "Her eyelashes are very long, so her eyes look bigger." }, drill: { jp: "Ресницы у неё очень длинные", en: "Her eyelashes are very long" }, hint: "res-NI-tsy — stress on NI. FEMININE, PLURAL; the singular ресница is one lash. ⚠️ The example is the standard B1 frame for «look» in the sense of «seem»: кажутся, from казаться (unit 32), and NOT выглядеть, which this course does not teach." },
        { id: "ru-u85l2-shcheka", type: "vocab", front: "щека", reading: "shcheka", meaning: "a cheek", accept: ["the cheek", "one cheek", "the side of the face"], example: { jp: "Щека была красная весь вечер, и он молчал о том, почему.", en: "His cheek was red all evening, and he said nothing about why." }, drill: { jp: "Щека была красная весь вечер", en: "His cheek was red all evening" }, hint: "shche-KA — stress on the last syllable, opening with щ, the long soft sh from unit 3. FEMININE (-а), and ⚠️ its stress MOVES in the accusative and the plural: щЁку, щЁки. «Есть за обе щеки» is to eat heartily." },
        { id: "ru-u85l2-morshchina", type: "vocab", front: "морщина", reading: "morshchina", meaning: "a wrinkle", accept: ["a line on the face", "the wrinkle", "a crease in the skin"], example: { jp: "Морщина у него только одна, зато очень глубокая.", en: "He has only one wrinkle, but it is a very deep one." }, drill: { jp: "Морщина у него только одна", en: "He has only one wrinkle" }, hint: "mar-SHCHI-na — stress on SHCHI, and the о reduces to a. FEMININE (-а). From морщить, to crease, which is not taught. Also of cloth and of a road surface — anything that has folded." },
        { id: "ru-u85l2-ochki", type: "vocab", front: "очки", reading: "ochki", meaning: "glasses", accept: ["spectacles", "eyeglasses", "a pair of glasses"], example: { jp: "Очки он забывает каждый день и ищет их по всей квартире.", en: "He forgets his glasses every day and looks for them all over the flat." }, drill: { jp: "Очки он забывает каждый день", en: "He forgets his glasses every day" }, hint: "ach-KI — stress on the last syllable, and the о reduces to a. MASCULINE, and ⚠️ PLURAL ONLY as «glasses» — because the singular очко means A POINT IN A GAME, which is why unit 84 had to score with `балл` instead: one noun cannot be two cards (unit1.js §5). From око, an old word for an eye." },
      ],
    },
    {
      id: "ru-u85l3",
      unit: 85,
      lesson: 3,
      title: "Build and the impression it makes",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about someone's appearance and figure, and call a person slim, skinny, stooped or pale.",
      items: [
        { id: "ru-u85l3-vneshnost", type: "vocab", front: "внешность", reading: "vneshnost", meaning: "appearance", accept: ["looks", "outward appearance", "how someone looks"], example: { jp: "Внешность для этой работы важна, хотя говорят, что нет.", en: "Appearance matters for that job, although people say it does not." }, drill: { jp: "Внешность для этой работы важна", en: "Appearance matters for that job" }, hint: "VNESH-nast — stress on the first syllable, and the final -ть is said t. ⚠️ FEMININE, like every -ость noun. From внешний, outer, which is not taught. ⚠️ `облик`, the bookish twin in this unit's own title, is deliberately not carded — one word for this is enough." },
        { id: "ru-u85l3-figura", type: "vocab", front: "фигура", reading: "figura", meaning: "a person's build", accept: ["a figure", "a body shape", "the shape of a person"], example: { jp: "Фигура у неё спортивная, потому что она плавает каждый день.", en: "She has an athletic figure because she swims every day." }, drill: { jp: "Фигура у неё спортивная", en: "She has an athletic figure" }, hint: "fi-GU-ra — stress on GU. FEMININE (-а). ⚠️ Glossed «a person's build» because `число` (u37l1) is already prompted as «a figure». ⚠️ THREE SENSES, all live: a person's build, a shape in geometry, and a chess piece — «фигуры на доске», which unit 84's шахматы need. форма from unit 32 is shape in the abstract." },
        { id: "ru-u85l3-stroynyy", type: "vocab", front: "стройный", reading: "stroynyy", meaning: "slim", accept: ["slender", "trim", "well-proportioned"], example: { jp: "Стройный он был всегда, даже когда спортом почти не занимался.", en: "He was always slim, even when he hardly did any sport." }, drill: { jp: "Стройный он был всегда", en: "He was always slim" }, hint: "STROY-nyy — stress on the first syllable. ⚠️ Sits on строить «to build» (unit 57) — stature really is construction in Russian — and «slim» is nothing a learner would reach from «to build», so both are carded. ⚠️ It is a COMPLIMENT, unlike худой in the next card. Also of an argument: «стройная теория», a well-built theory." },
        { id: "ru-u85l3-khudoy", type: "vocab", front: "худой", reading: "khudoy", meaning: "skinny", accept: ["thin of a person", "lean", "underweight"], example: { jp: "Худой и бледный, он всё-таки был совсем здоров.", en: "Skinny and pale, he was nevertheless perfectly healthy." }, drill: { jp: "Он очень худой и бледный", en: "He is very skinny and pale" }, hint: "khu-DOY — stress on the last syllable. ⚠️ GLOSSED «skinny» ON PURPOSE: тонкий from unit 40 is already «thin», of a line or a slice, and the two would be one prompt otherwise. ⚠️ It is NOT a compliment — Russian says стройный when it approves. Its old meaning survives in «худо», meaning badly." },
        { id: "ru-u85l3-sutulyy", type: "vocab", front: "сутулый", reading: "sutulyy", meaning: "stooped", accept: ["round-shouldered", "with a stoop", "hunched"], example: { jp: "Сутулый от компьютера, он стал ходить к врачу каждый месяц.", en: "Stooped from the computer, he began going to the doctor every month." }, drill: { jp: "Сутулый он стал от компьютера", en: "He became stooped from the computer" }, hint: "su-TU-lyy — stress on TU. The shoulders rolled forward and the back rounded. ⚠️ The modern cause is in the example, and the word for it is very old. спина from unit 20 is the back it happens to." },
        { id: "ru-u85l3-blednyy", type: "vocab", front: "бледный", reading: "blednyy", meaning: "pale", accept: ["pale-faced", "wan", "having no colour"], example: { jp: "Бледный после болезни, он всё равно работал весь день.", en: "Pale after his illness, he worked all day anyway." }, drill: { jp: "Бледный он был после болезни", en: "He was pale after his illness" }, hint: "BLED-nyy — stress on the first syllable. Of a face, and of a colour or a copy that has faded — «бледный свет». ⚠️ Not the same as белый from unit 16: белый is the colour white, бледный is the absence of colour where there should be some." },
      ],
    },
    {
      id: "ru-u85l4",
      unit: 85,
      lesson: 4,
      title: "Hands, nails and marks",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a palm, an elbow, a fist, a fingernail and a scar, and call someone curly-haired.",
      items: [
        { id: "ru-u85l4-ladon", type: "vocab", front: "ладонь", reading: "ladon", meaning: "a palm of the hand", accept: ["the palm", "the flat of the hand", "an open hand"], example: { jp: "Ладонь была совсем горячая, и он понял, что у неё температура.", en: "Her palm was quite hot, and he realised she had a temperature." }, drill: { jp: "Ладонь была совсем горячая", en: "Her palm was quite hot" }, hint: "la-DON — stress on the last syllable. ⚠️ FEMININE despite the -ь (unit1.js §3). рука from unit 20 is the whole arm AND hand; ладонь is the inside of the hand only. «Как на ладони» means in plain view." },
        { id: "ru-u85l4-lokot", type: "vocab", front: "локоть", reading: "lokot", meaning: "an elbow", accept: ["the elbow", "one elbow", "the joint of the arm"], example: { jp: "Локоть болит у него уже вторую неделю, а к врачу он не идёт.", en: "His elbow has hurt for a second week, and he is not going to the doctor." }, drill: { jp: "Локоть болит уже вторую неделю", en: "The elbow has hurt for a second week" }, hint: "LO-kat — stress on the first syllable, and the final о reduces to a. MASCULINE despite the -ь, and ⚠️ its о DROPS: лОктя, лОктю — the same class as камень from unit 26. колено from unit 53 is the matching joint in the leg." },
        { id: "ru-u85l4-kulak", type: "vocab", front: "кулак", reading: "kulak", meaning: "a fist", accept: ["the fist", "a clenched hand", "a closed hand"], example: { jp: "Кулак он показал только раз, и больше никто с ним не спорил.", en: "He showed his fist only once, and after that nobody argued with him." }, drill: { jp: "Кулак у него очень большой", en: "His fist is very big" }, hint: "ku-LAK — stress on the last syllable. MASCULINE. ⚠️ A SECOND SENSE THAT IS HISTORY, NOT ANATOMY: in the 1920s and 30s a кулак was a prosperous peasant, and the word is heavy with that. палец from unit 20 is what it is made of." },
        { id: "ru-u85l4-nogot", type: "vocab", front: "ноготь", reading: "nogot", meaning: "a fingernail", accept: ["a nail", "the nail", "a toenail"], example: { jp: "Ноготь у него чёрный после ремонта, и это уже не первый раз.", en: "His nail is black after the repairs, and it is not the first time." }, drill: { jp: "Ноготь у него совсем чёрный", en: "His nail is quite black" }, hint: "NO-gat — stress on the first syllable, and the final о reduces to a. MASCULINE despite the -ь, and ⚠️ its о DROPS: нОгтя, нОгтю. ⚠️ It LOOKS built on нога from unit 20 and it is — but «a nail» is not reachable from «a leg», so both are carded. One word for fingernails and toenails." },
        { id: "ru-u85l4-shram", type: "vocab", front: "шрам", reading: "shram", meaning: "a scar", accept: ["the scar", "a mark from a wound", "a healed cut"], example: { jp: "Шрам на руке остался у него после школы, и он об этом не рассказывает.", en: "He has had the scar on his arm since school days, and he does not talk about it." }, drill: { jp: "Шрам остался у него после школы", en: "He has had the scar since school days" }, hint: "SHRAM — one syllable. MASCULINE. рана from unit 53 is the open wound; a шрам is what it leaves. Figuratively of a person too, exactly as in English." },
        { id: "ru-u85l4-kudryavyy", type: "vocab", front: "кудрявый", reading: "kudryavyy", meaning: "curly-haired", accept: ["with curly hair", "curly", "having curls"], example: { jp: "Кудрявый мальчик в первом ряду читал лучше всех.", en: "The curly-haired boy in the front row read better than anyone." }, drill: { jp: "Кудрявый мальчик читал лучше всех", en: "The curly-haired boy read better than anyone" }, hint: "kud-RYA-vyy — stress on RYA. Of a person, of hair itself and of a tree with a dense crown. The noun кудри «curls» is not carded against it — one word of this root is enough." },
      ],
    },
  ],
};
