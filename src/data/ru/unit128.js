// RU Unit 128 — Животный мир ("The animal world") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u124–u136). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit87.js §1–§6, and
// ru/unit124.js §1–§5 for this block.
// Probes quoted in this header are reproducible with
// `node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...` — see unit124.js.
//
// THE MEASURED HOLE. u26l2 gives `птица`; u75 gives `хищник` · `зверь` ·
// `вымирать`; A1 gives `кошка` (u8l4) and the farm animals. So the course can
// say "a bird" and "a predator" and CANNOT NAME A SINGLE PART OF AN ANIMAL and
// cannot name a group of them: no paw, no claw, no beak, no horn, no wing, no
// scale, no flock, no herd, no burrow, no nest, no young. Sixteen of the probed
// seeds were free; `шерсть` is u33l4's ("wool", with "fur" in its accept[]) and
// is the reason no card here reaches for a hide or a pelt.
//
// ⚠️ `самка` WAS REFUSED AGAINST THIS UNIT'S OWN `самец`. They are the
// masculine/feminine pair off one root, in one lesson, and unit51.js §3 calls a
// base and its partner inside the same unit the worst version of the lexeme
// fault — a learner who has самец does not need to retrieve самка, they derive
// it. l1 cards `самец` and names the feminine in its hint; `логово` took the
// freed slot. ⚠️ unit1.js §D's муж/жена precedent does NOT cover this: those are
// two unrelated roots that happen to mean husband and wife, not one root with
// two endings.
//
// ⚠️ `насекомое` · `млекопитающее` · `пресмыкающееся` ARE ALL BARRED and they
// are the three category words a zoology unit reaches for first. Every one is a
// substantivised neuter adjective or participle, so unit1.js §5's last rule and
// unit51.js §2(b) forbid them — the rule that killed `лёгкое` at A2 and
// `вселенная` at u124 (unit124.js §1). All three probe FREE as strings. The
// unit teaches the PARTS and the GROUPS instead, which is also the hole.
//
// REFUSED, with the reason:
//   `самка` · `насекомое` · `млекопитающее` · `пресмыкающееся` — above.
//   `шкура` — against `шерсть` (u33l4), whose accept[] already carries "fur",
//        and against `кожа` (u33l4, "skin" with "hide" in its accept[]). Two
//        collisions, so the hide has no card at all in this course.
//   `оперение` — against `перо`, which is carded in l2 of this very unit.
//   `хищный` — against `хищник` (u75), the shape unit51.js §3 refuses.
//   `зверёк` — the diminutive of `зверь` (u75).
//   `вымя` · `жабры` · `щупальце` · `личинка` · `улей` · `берлога` · `кокон` —
//        all FREE, all dropped for count at 24. Named so the next seat finds a
//        list rather than a gap.
// ⚠️ BOUNDARY — THIS UNIT OWNS THE ORGANISM, block 2's u111 owns the GLOBAL
// PROBLEM (выброс · потепление · вырубка · заповедник · биоразнообразие), and
// `экология` · `отходы` · `загрязнение` · `ресурс` · `хищник` · `зверь` ·
// `вымирать` are ALL TAKEN at u75. No card here reaches for any of them.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT128 = {
  id: "ru-u128",
  lang: "ru",
  title: "Животный мир",
  order: 128,
  stage: "b2",
  lessons: [
    {
      id: "ru-u128l1",
      unit: 128,
      lesson: 1,
      title: "Groups and kinds",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about animals in numbers and in kinds — a flock, a herd, a breed, a rodent, the male of a species and its young.",
      items: [
        { id: "ru-u128l1-staya", type: "vocab", front: "стая", reading: "staya", meaning: "a flock", accept: ["a group of birds flying together", "a pack of animals moving together", "a band of wolves or birds"], example: { jp: "Осенью стая птиц летит на юг, а весной она опять здесь.", en: "In autumn a flock of birds flies south, and in spring it is here again." }, drill: { jp: "Эта стая очень большая", en: "This flock is very large" }, hint: "STA-ya — stress on the first syllable. FEMININE (-я). ⚠️ Used of BIRDS, WOLVES and FISH — anything that moves together and hunts or flies together. Cows and sheep make a `стадо`, never a стая." },
        { id: "ru-u128l1-stado", type: "vocab", front: "стадо", reading: "stado", meaning: "a herd of grazing animals", accept: ["a group of cattle together", "a grazing group of animals", "all the cows kept together"], example: { jp: "Стадо идёт по дороге так медленно, что машины стоят полчаса.", en: "The herd goes along the road so slowly that the cars stand still for half an hour." }, drill: { jp: "Это стадо очень большое", en: "This herd is very large" }, hint: "STA-da — stress on the first syllable, and the final о reduces to a. NEUTER (-о). ⚠️ Its plural moves the stress onto the ending and takes -а: стадА. Of grazing animals; birds and wolves make a `стая`." },
        { id: "ru-u128l1-poroda", type: "vocab", front: "порода", reading: "poroda", meaning: "a breed of animal", accept: ["a kind of dog or horse bred by people", "a strain people have bred", "the particular sort an animal belongs to"], example: { jp: "Эта порода собак очень старая, и её держали ещё при царях.", en: "This breed of dog is very old, and it was kept in the time of the tsars." }, drill: { jp: "Эта порода очень старая", en: "This breed is very old" }, hint: "pa-RO-da — stress on RO, and the first о reduces to a. FEMININE (-а). ⚠️ A SECOND, unrelated sense in geology: порода is also rock — горная порода, and u87's mining words use it that way." },
        { id: "ru-u128l1-gryzun", type: "vocab", front: "грызун", reading: "gryzun", meaning: "a rodent", accept: ["a small gnawing animal", "an animal with front teeth for gnawing", "a mouse or a rat or a squirrel"], example: { jp: "Этот грызун живёт в поле и всю зиму спит в земле.", en: "This rodent lives in a field and sleeps in the ground all winter." }, drill: { jp: "Этот грызун очень маленький", en: "This rodent is very small" }, hint: "gry-ZUN — stress on the last syllable, with the ы from unit 5. MASCULINE. From грызть, to gnaw, which this course does not card. ⚠️ A big group in Russian: мышь, крыса and белка are all грызуны." },
        { id: "ru-u128l1-samets", type: "vocab", front: "самец", reading: "samets", meaning: "the male of an animal", accept: ["a male beast", "the he-animal of a pair", "the male one of a species"], example: { jp: "Самец этой птицы очень красивый, а его подруга совсем серая.", en: "The male of this bird is very beautiful, and his mate is quite grey." }, drill: { jp: "Этот самец очень большой", en: "This male is very large" }, hint: "sa-METS — stress on the last syllable. MASCULINE. ⚠️ The е DROPS in every other form: самцА, самцЫ — the same class as `отец` from unit 10. The female is самка, which this course does NOT card: one root with two endings inside one lesson is the lexeme fault unit 51 §3 names." },
        { id: "ru-u128l1-detyonysh", type: "vocab", front: "детёныш", reading: "detyonysh", meaning: "a young animal", accept: ["the baby of an animal", "a cub or a kitten or a calf", "an animal's offspring"], example: { jp: "Детёныш не уходит от матери целый год.", en: "The young one does not leave its mother for a whole year." }, drill: { jp: "Этот детёныш совсем маленький", en: "This young animal is quite small" }, hint: "di-TYO-nysh — stress on TYO, and the first е reduces to i. MASCULINE. Built on the same root as `ребёнок` and `дети`, from unit 10. ⚠️ Only of ANIMALS: a human baby is a ребёнок and never a детёныш." },
      ],
    },
    {
      id: "ru-u128l2",
      unit: 128,
      lesson: 2,
      title: "Limbs, wings and tails",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what an animal moves and holds with — a paw, a hoof, a claw, a wing, a feather and a tail.",
      items: [
        { id: "ru-u128l2-lapa", type: "vocab", front: "лапа", reading: "lapa", meaning: "a paw", accept: ["the foot of a four-legged animal", "an animal's foot with soft pads", "a beast's foot"], example: { jp: "Кошка держала хлеб лапой и не давала его никому.", en: "The cat held the bread with its paw and would not give it to anyone." }, drill: { jp: "Эта лапа совсем мокрая", en: "This paw is quite wet" }, hint: "LA-pa — stress on the first syllable. FEMININE (-а). ⚠️ A human `нога` is never a лапа unless you are being rude; and «попасть в лапы» means to fall into someone's clutches." },
        { id: "ru-u128l2-kopyto", type: "vocab", front: "копыто", reading: "kopyto", meaning: "a hoof", accept: ["the hard foot of a horse", "the horn-covered foot of a horse or cow", "what a horse stands on"], example: { jp: "Копыто у этой лошади было больное, и она не могла идти.", en: "This horse's hoof was sore, and it could not walk." }, drill: { jp: "Это копыто совсем сухое", en: "This hoof is quite dry" }, hint: "ka-PY-ta — stress on PY, with the ы from unit 5; the first and last о both reduce. NEUTER (-о). ⚠️ The sound of them is the Russian phrase «стук копыт», the clatter of hooves." },
        { id: "ru-u128l2-kogot", type: "vocab", front: "коготь", reading: "kogot", meaning: "a claw", accept: ["the sharp nail of an animal", "a hooked nail on a paw", "what a cat scratches with"], example: { jp: "У кошки на каждой лапе есть коготь, и он очень острый.", en: "A cat has a claw on each paw, and it is very sharp." }, drill: { jp: "Этот коготь очень острый", en: "This claw is very sharp" }, hint: "KO-gat — stress on the first syllable, and the second о reduces to a. MASCULINE despite the -ь, so unit 1 §3 says to name it. ⚠️ The о DROPS in every other form: кОгтя, кОгти — so the nominative is the only place both vowels appear." },
        { id: "ru-u128l2-krylo", type: "vocab", front: "крыло", reading: "krylo", meaning: "a wing", accept: ["what a bird flies with", "the flying limb of a bird", "the part of a plane that holds it up"], example: { jp: "Птица не могла летать, потому что одно крыло было больное.", en: "The bird could not fly, because one wing was hurt." }, drill: { jp: "Это крыло совсем белое", en: "This wing is quite white" }, hint: "kry-LO — stress on the last syllable, with the ы from unit 5. NEUTER (-о). ⚠️ Its plural moves the stress forward AND adds -ья: крЫлья — the rare class of `друзья`. Also a wing of a building and of a party." },
        { id: "ru-u128l2-pero", type: "vocab", front: "перо", reading: "pero", meaning: "a feather", accept: ["one of the light things a bird is covered in", "what a bird's wing is made of", "a quill"], example: { jp: "На земле лежало одно белое перо, и его взял ветер.", en: "One white feather lay on the ground, and the wind took it." }, drill: { jp: "Это перо совсем белое", en: "This feather is quite white" }, hint: "pi-RO — stress on the last syllable, and the е reduces to i. NEUTER (-о). ⚠️ Its plural moves the stress forward: пЕрья, the same -ья class as крылья above. The OLD writing pen is also a перо, which is why «перо писателя» means an author's style." },
        { id: "ru-u128l2-khvost", type: "vocab", front: "хвост", reading: "khvost", meaning: "a tail", accept: ["the long end of an animal", "what a dog wags", "the back end of a beast or a bird"], example: { jp: "У этой собаки хвост очень длинный, и она никогда не стоит тихо.", en: "This dog's tail is very long, and it never stands still." }, drill: { jp: "Этот хвост очень длинный", en: "This tail is very long" }, hint: "KHVOST — one syllable. MASCULINE. ⚠️ Its oblique forms move the stress onto the ending: хвостА, хвостЫ. Alive everywhere: the tail of a queue, the tail of a comet (u124's `комета`), and an unpassed exam is also a хвост." },
      ],
    },
    {
      id: "ru-u128l3",
      unit: 128,
      lesson: 3,
      title: "Head and mouth",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the parts of an animal's head — a beak, a fang, a maw, a horn, a mane and a trunk.",
      items: [
        { id: "ru-u128l3-klyuv", type: "vocab", front: "клюв", reading: "klyuv", meaning: "a beak", accept: ["the hard mouth of a bird", "what a bird eats with", "a bird's bill"], example: { jp: "Птица держала в клюве маленький лист и несла его на дерево.", en: "The bird held a small leaf in its beak and was carrying it to a tree." }, drill: { jp: "Этот клюв очень длинный", en: "This beak is very long" }, hint: "KLYUV — one syllable, with the soft л before the ю. MASCULINE. ⚠️ Only of a BIRD. A person's nose called a клюв is an insult about its size." },
        { id: "ru-u128l3-klyk", type: "vocab", front: "клык", reading: "klyk", meaning: "a fang", accept: ["the long sharp tooth of an animal", "a tusk", "a pointed tooth for tearing"], example: { jp: "У этого зверя клык был такой большой, что его было видно всегда.", en: "This beast's fang was so large that it was always visible." }, drill: { jp: "Этот клык очень острый", en: "This fang is very sharp" }, hint: "KLYK — one syllable, with the ы from unit 5. MASCULINE. ⚠️ Its oblique forms move the stress onto the ending: клыкА, клыкИ. An elephant's tusk is also a клык, and so is a human canine tooth." },
        { id: "ru-u128l3-past", type: "vocab", front: "пасть", reading: "past", meaning: "the open mouth of a beast", accept: ["an animal's jaws", "the maw of a big animal", "the mouth of a wild animal"], example: { jp: "Пасть у этого зверя очень большая, и зубы в ней острые.", en: "This beast's maw is very large, and the teeth in it are sharp." }, drill: { jp: "Эта пасть очень большая", en: "This maw is very large" }, hint: "PAST — one syllable. FEMININE despite the -ь, so unit 1 §3 says to name it. ⚠️ There is an IDENTICAL verb `пасть`, to fall, which this course does not card — same letters, two words, and only the sentence tells you which. A person's mouth is `рот`; a пасть belongs to a beast." },
        { id: "ru-u128l3-rog", type: "vocab", front: "рог", reading: "rog", meaning: "a horn", accept: ["the hard point on an animal's head", "what a bull has on its head", "a bony spike on a head"], example: { jp: "У этой коровы один рог был совсем короткий.", en: "One of this cow's horns was quite short." }, drill: { jp: "Этот рог очень острый", en: "This horn is very sharp" }, hint: "ROG — one syllable, and the г is said as a k. MASCULINE. ⚠️ Its plural moves the stress onto the ending and takes -а: рогА. The musical instrument is also a рог, and «рог изобилия» is the horn of plenty." },
        { id: "ru-u128l3-griva", type: "vocab", front: "грива", reading: "griva", meaning: "a mane", accept: ["the long hair on a horse's neck", "the hair along an animal's neck", "a lion's neck hair"], example: { jp: "Грива у этой лошади была такая длинная, что её резали два раза в год.", en: "This horse's mane was so long that it was cut twice a year." }, drill: { jp: "Эта грива очень длинная", en: "This mane is very long" }, hint: "GRI-va — stress on the first syllable. FEMININE (-а). ⚠️ Said of a person's hair it means a great untidy mass of it, and it is not quite a compliment." },
        { id: "ru-u128l3-khobot", type: "vocab", front: "хобот", reading: "khobot", meaning: "an elephant's trunk", accept: ["the long nose of an elephant", "what an elephant drinks with", "the long grasping nose of a big animal"], example: { jp: "Этот зверь может взять воду хоботом и держать его над головой.", en: "This animal can take water with its trunk and hold it above its head." }, drill: { jp: "Этот хобот очень длинный", en: "This trunk is very long" }, hint: "KHO-bat — stress on the first syllable, and the second о reduces to a. MASCULINE. ⚠️ Nothing to do with a tree's trunk, which is `ствол` from unit 127: Russian keeps the two completely apart." },
      ],
    },
    {
      id: "ru-u128l4",
      unit: 128,
      lesson: 4,
      title: "Scales, shells and homes",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what covers an animal and where it lives — scales, a fin, a shell, a burrow, a nest and a lair.",
      items: [
        { id: "ru-u128l4-cheshuya", type: "vocab", front: "чешуя", reading: "cheshuya", meaning: "scales", accept: ["the small hard plates on a fish", "what covers a fish or a snake", "the overlapping plates of a fish"], example: { jp: "Чешуя этой рыбы была как маленькие окна на солнце.", en: "The scales of this fish were like little windows in the sun." }, drill: { jp: "Эта чешуя очень твёрдая", en: "These scales are very hard" }, hint: "chi-shu-YA — stress on the LAST syllable, and both е reduce. FEMININE (-я), and ⚠️ IT IS A MASS NOUN: one чешуя is the whole covering, not one scale. A single scale is чешуйка." },
        { id: "ru-u128l4-plavnik", type: "vocab", front: "плавник", reading: "plavnik", meaning: "a fin", accept: ["what a fish swims with", "the flat limb of a fish", "a fish's steering blade"], example: { jp: "У этой рыбы плавник очень большой, и она плавает очень быстро.", en: "This fish's fin is very large, and it swims very fast." }, drill: { jp: "Этот плавник очень большой", en: "This fin is very large" }, hint: "plav-NIK — stress on the last syllable. MASCULINE. From плавать, to swim, from unit 27. ⚠️ Its oblique forms move the stress onto the ending: плавникА, плавникИ." },
        { id: "ru-u128l4-pantsir", type: "vocab", front: "панцирь", reading: "pantsir", meaning: "a shell on an animal's back", accept: ["the hard cover a turtle carries", "a bony plate over an animal's body", "an animal's natural armour"], example: { jp: "Панцирь у этого зверя такой твёрдый, что его не может взять никто.", en: "This animal's shell is so hard that nobody can get through it." }, drill: { jp: "Этот панцирь очень твёрдый", en: "This shell is very hard" }, hint: "PAN-tsir — stress on the first syllable. MASCULINE despite the -ь, so unit 1 §3 says to name it. A German loan. ⚠️ The same word is a knight's armour, which is how u92's `рыцарь` wears it — and the modern military plate is `броня`, in unit 129." },
        { id: "ru-u128l4-nora", type: "vocab", front: "нора", reading: "nora", meaning: "a burrow", accept: ["a hole an animal digs to live in", "an animal's hole in the ground", "a dug-out home in the earth"], example: { jp: "Нора была такая глубокая, что внизу было совсем темно.", en: "The burrow was so deep that at the bottom it was completely dark." }, drill: { jp: "Эта нора очень глубокая", en: "This burrow is very deep" }, hint: "na-RA — stress on the last syllable, and the first о reduces to a. FEMININE (-а). ⚠️ Its plural moves the stress forward: нОры. Said of a flat it means a cramped little place." },
        { id: "ru-u128l4-gnezdo", type: "vocab", front: "гнездо", reading: "gnezdo", meaning: "a nest", accept: ["what a bird builds to lay eggs in", "a bird's home of sticks", "the cup a bird sits in"], example: { jp: "Гнездо было на самой высокой ветке, и никто не мог его видеть.", en: "The nest was on the highest branch, and nobody could see it." }, drill: { jp: "Это гнездо совсем маленькое", en: "This nest is quite small" }, hint: "gniz-DO — stress on the last syllable, and the е reduces to i. NEUTER (-о). ⚠️ Its plural moves the stress forward AND changes the vowel: гнЁзда — and unit 1 §7 requires that ё to be written. A socket in a wall is also a гнездо." },
        { id: "ru-u128l4-logovo", type: "vocab", front: "логово", reading: "logovo", meaning: "a lair", accept: ["the den of a big animal", "where a wolf or a bear lies up", "a wild animal's resting place"], example: { jp: "Логово было между камнями, и рядом лежала старая кость.", en: "The lair was between the stones, and an old bone lay beside it." }, drill: { jp: "Это логово совсем пустое", en: "This lair is quite empty" }, hint: "LO-ga-va — stress on the FIRST syllable, and both following о reduce to a. NEUTER (-о). From лежать, to lie, from unit 27. ⚠️ A `нора` is dug; a логово is just the place a big animal lies. Used of people's hideouts too, always with menace." },
      ],
    },
  ],
};
