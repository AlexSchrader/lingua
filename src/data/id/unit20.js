// ID Unit 20 — Penampilan dan perasaan ("Appearance and feelings") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u15–u20), authored 2026-09-27. **THE LAST UNIT OF INDONESIAN A1 —
// this file takes the language to 20/20.** The 12 conventions in unit1.js BIND it.
// Scaffold slot was "Vocabulary 6" — retitled to what it teaches.
//
// WHY THIS IS THE CLOSING SUBJECT. u10 spent "describing things" and every one of
// its 24 words is about OBJECTS — big, small, tall, new, clean, fast, heavy. So
// through u19 the course could describe a house and not a person, and had **no
// word for angry, sad, afraid, embarrassed, bored, lazy or patient**: a learner
// could say the weather was bad and not that they felt bad. That is the hole this
// unit closes, and it is the right one to close last because every lesson in it
// leans on vocabulary the whole band has built.
//   l1  how someone looks: tua · muda · ganteng · gemuk · kurus · rapi
//   l2  feelings: marah · sedih · takut · malu · bosan · kaget
//   l3  character: rajin · malas · pintar · ramah · sabar · lucu
//   l4  feeling and reacting: merasa · berharap · menangis · tersenyum ·
//       khawatir · kecewa
//
// ⚠️ **CLOTHES — the third theme block 1 reserved for this range — IS IN u16 l4,
// NOT HERE.** Deliberate: you meet clothes while buying them, and `baju`,
// `celana`, `sepatu`, `topi`, `jaket` and `memakai` sit far more naturally in a
// shopping unit than in an abstract "appearance" one. That is one lesson of
// clothes, not a unit of it. Named here so nobody reads the reserved list, finds
// no clothes unit, and authors a second one.
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian — see
// unit1.js convention 3):
//   merasa → rasa · berharap → harap · menangis → tangis · tersenyum → senyum
//     NONE of those four roots is taught anywhere in u1–u20. Each is a root with
//     its own independent meaning (rasa is both a feeling and a taste; senyum is
//     a smile) and each is named in its card's hint, per convention 4.
//   Every other front in this unit is a bare root: tua · muda · ganteng · gemuk ·
//   kurus · rapi · marah · sedih · takut · malu · bosan · kaget · rajin · malas ·
//   pintar · ramah · sabar · lucu · khawatir · kecewa.
//
// ⚠️ `tersenyum` AND u18's `tertawa` BOTH TAKE ter- AND NEITHER IS A SUPERLATIVE.
// u14 built `terlalu` on it and u15 `terakhir`, so by now a learner has seen the
// prefix three ways. On a verb it marks something that simply happens rather than
// something you set out to do, and both hints say so — an over-generalised
// superlative reading is the predictable error here.
//
// ⚠️ `tua` IS GLOSSED "old in years", NOT "old", AND THAT IS MEASURED. u10's
// `lama` is glossed exactly "old", and a parenthetical would NOT have saved it:
// `normalizeMeaning` strips `(...)`, so "old (of a person)" normalises to plain
// "old" and one typed answer would be right for two cards. The gloss therefore
// carries the distinction in words that survive normalisation, no bare "old" sits
// in its accept[], and the hint teaches the split — which is a real one in
// Indonesian and not a workaround: tua is old in YEARS (a person, an animal, a
// tree) and lama is old as in long-standing (a thing).
//
// THREE NEAR-IDENTICAL PAIRS, FLAGGED IN THE HINTS RATHER THAN AVOIDED, because
// avoiding a word does not stop the learner confusing it:
//   `marah` (angry) vs u8's `merah` (red) — one vowel, and this one WILL happen
//   `muda` (young) vs u10's `mudah` (easy) — one h
//   `pintar` (clever) vs u4's `pintu` (a door) · `ramah` (friendly) vs u10's
//     `ramai` (crowded) · `malas` (lazy) vs `malu` (embarrassed), in this unit
//
// TWO CULTURAL NOTES THAT ARE LOAD-BEARING, NOT COLOUR:
//   `gemuk` is much less rude than English "fat" — remarking on someone's build
//     is ordinary small talk in Indonesia, and a learner who does not know that
//     will take offence where none is meant.
//   `malu` is the pivot of Indonesian social life: it is the feeling you go out of
//     your way not to cause in other people, which is why the word covers
//     embarrassed, ashamed and shy all at once.
//
// ⚠️ `pintar`'s accept[] DELIBERATELY DOES NOT CARRY "bright". u8's `terang` is
// glossed exactly "bright", so that entry would have made one typed answer correct
// for two cards. "quick to learn" says the same thing and collides with nothing.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT20 = {
  id: "id-u20",
  lang: "id",
  title: "Penampilan dan perasaan",
  order: 20,
  stage: "a1",
  lessons: [
    {
      id: "id-u20l1",
      unit: 20,
      lesson: 1,
      title: "Tua, muda, dan penampilan",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Describe how someone looks — their age, their build, and whether they are neatly turned out.",
      items: [
        { id: "id-u20l1-tua", type: "vocab", front: "tua", reading: "tua", meaning: "old in years", example: { jp: "Kakek saya sudah tua tetapi masih sangat kuat.", en: "My grandfather is old but still very strong." }, accept: ["elderly", "aged", "old for a person"], drill: { jp: "Nenek Budi sudah sangat tua", en: "Budi's grandmother is very old" }, hint: "TOO-a. ⚠️ Indonesian splits what English calls old, and you have to pick: TUA is old in YEARS — a person, an animal, a tree — while LAMA is old as in long-standing, for a thing. Rumah lama is an old house; orang tua is an old person, and those same two words together are also the ordinary word for parents. Tua is dark of a colour too: biru tua, dark blue." },
        { id: "id-u20l1-muda", type: "vocab", front: "muda", reading: "muda", meaning: "young", example: { jp: "Guru muda itu mengajar di kelas kami.", en: "That young teacher teaches in our class." }, accept: ["youthful", "young in years", "junior"], drill: { jp: "Dokter muda itu sangat ramah", en: "That young doctor is very friendly" }, hint: "MOO-da. The opposite of tua, and it takes the same second job with colours: biru muda is light blue. ⚠️ One letter from mudah, easy — muda has no h on the end, and that h is the whole difference. It is also one letter from kuda, a horse." },
        { id: "id-u20l1-ganteng", type: "vocab", front: "ganteng", reading: "ganteng", meaning: "handsome", example: { jp: "Pacar kakak saya ganteng dan sangat rapi.", en: "My older sibling's boyfriend is handsome and very neat." }, accept: ["a good-looking man", "attractive", "a good looker"], drill: { jp: "Anak laki-laki itu ganteng sekali", en: "That boy is very handsome" }, hint: "GAHN-tehng, hard g and a hum at the end. Used of men and boys only — for a woman the word is cantik, which you already have. Cakep works for either and is a shade more casual." },
        { id: "id-u20l1-gemuk", type: "vocab", front: "gemuk", reading: "gemuk", meaning: "fat", example: { jp: "Kucing tetangga saya gemuk karena makan banyak.", en: "My neighbour's cat is fat because it eats a lot." }, accept: ["plump", "stout", "overweight"], drill: { jp: "Sapi itu gemuk dan sangat besar", en: "That cow is fat and very big" }, hint: "GUH-mook — hard g, swallowed e, final k caught in the throat. ⚠️ Far less rude than fat is in English: remarking on someone's build is ordinary small talk in Indonesia, and Gemuk sekarang, ya? is usually meant kindly. Know that before you take offence." },
        { id: "id-u20l1-kurus", type: "vocab", front: "kurus", reading: "kurus", meaning: "thin", example: { jp: "Kuda itu kurus tetapi masih bisa berjalan jauh.", en: "That horse is thin but can still walk a long way." }, accept: ["skinny", "slim", "slender"], drill: { jp: "Anjing itu kurus dan lelah", en: "That dog is thin and tired" }, hint: "KOO-roos. The opposite of gemuk and, like it, a neutral observation rather than a judgement. Langsing is the flattering word for slim, the one to use as a compliment. Tipis is thin for a THING — paper, a slice — and never for a body. ⚠️ One letter from lurus, straight ahead." },
        { id: "id-u20l1-rapi", type: "vocab", front: "rapi", reading: "rapi", meaning: "neat", example: { jp: "Kamar saya sangat rapi karena saya menyapu setiap pagi.", en: "My room is very neat because I sweep every morning." }, accept: ["tidy", "well turned out", "in order"], drill: { jp: "Baju Budi selalu rapi dan bersih", en: "Budi's shirt is always neat and clean" }, hint: "RAH-pee, a light tap on the r. Neat about a room, a shirt or a person's turnout — and it is real praise in Indonesia, where looking rapi at work or school matters. Merapikan is to tidy something up. Bersih is clean, which is not the same thing. ⚠️ One letter from sapi, a cow." },
      ],
    },
    {
      id: "id-u20l2",
      unit: 20,
      lesson: 2,
      title: "Perasaan",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how you feel — angry, sad, afraid, embarrassed, bored — and give the reason why.",
      items: [
        { id: "id-u20l2-marah", type: "vocab", front: "marah", reading: "marah", meaning: "angry", example: { jp: "Guru marah karena kami terlambat dua kali.", en: "The teacher was angry because we were late twice." }, accept: ["cross", "furious", "mad at someone"], drill: { jp: "Ibu marah karena kamar saya kotor", en: "Mother is angry because my room is dirty" }, hint: "MAH-rah, breathed h. ⚠️ One vowel from merah, red — marah has an a where merah has an e, and you will mix them up at least once. Marah-marah, doubled, is ranting on and on. Showing marah openly is a loss of face in Java, so the word is said of other people more than of oneself." },
        { id: "id-u20l2-sedih", type: "vocab", front: "sedih", reading: "sedih", meaning: "sad", example: { jp: "Saya sedih karena teman saya pulang ke desa.", en: "I am sad because my friend went home to the village." }, accept: ["unhappy", "sorrowful", "down"], drill: { jp: "Siti sedih karena anjing itu sakit", en: "Siti is sad because that dog is ill" }, hint: "suh-DEEH — swallowed first e, breathed h. ⚠️ Keep it apart from sedikit, a little: they open the same way and mean nothing alike. Kesedihan is sadness itself, the noun." },
        { id: "id-u20l2-takut", type: "vocab", front: "takut", reading: "takut", meaning: "afraid", example: { jp: "Anak kecil itu takut karena ada ular di halaman.", en: "That small child is afraid because there is a snake in the yard." }, accept: ["scared", "frightened", "to fear"], drill: { jp: "Saya takut nyamuk dan ular", en: "I am afraid of mosquitoes and snakes" }, hint: "TAH-koot, the final t barely released. Takut can take its object directly, with no preposition: Saya takut nyamuk. Jangan takut! is don't be afraid, and it is what somebody says just before handing you something alive." },
        { id: "id-u20l2-malu", type: "vocab", front: "malu", reading: "malu", meaning: "embarrassed", example: { jp: "Pelajar itu malu karena menjawab dengan salah.", en: "That pupil was embarrassed because he answered wrongly." }, accept: ["ashamed", "shy", "self-conscious"], drill: { jp: "Budi malu karena tidak mengerti", en: "Budi is embarrassed because he does not understand" }, hint: "MAH-loo. One word for embarrassed, ashamed and shy — and the idea carries real weight in Indonesian social life, because malu is the feeling you go out of your way not to cause in other people. Memalukan is embarrassing, said of a situation. ⚠️ One letter from lalu, ago." },
        { id: "id-u20l2-bosan", type: "vocab", front: "bosan", reading: "bosan", meaning: "bored", example: { jp: "Kami bosan karena acara itu terlalu lama.", en: "We were bored because that event was too long." }, accept: ["fed up", "weary of it", "tired of something"], drill: { jp: "Saya bosan makan nasi setiap hari", en: "I am bored of eating rice every day" }, hint: "BOH-sahn, closed o. Bored, and also fed up with something you have had too much of — Saya bosan makan nasi. Membosankan is boring, said of the thing. It is about repetition, where lelah is about being physically tired." },
        { id: "id-u20l2-kaget", type: "vocab", front: "kaget", reading: "kaget", meaning: "startled", example: { jp: "Ibu kaget karena ada semut di gelas air.", en: "Mother was startled because there were ants in the glass of water." }, accept: ["surprised", "shocked", "taken aback"], drill: { jp: "Siti kaget karena melihat ular", en: "Siti was startled because she saw a snake" }, hint: "KAH-geht — hard g, swallowed final e. The jolt of a sudden surprise rather than a pleasant one: Kaget saya! is what you say when someone appears behind you. Terkejut is the more formal word for the same feeling." },
      ],
    },
    {
      id: "id-u20l3",
      unit: 20,
      lesson: 3,
      title: "Sifat orang",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Describe someone's character — hard-working or lazy, clever, friendly, patient — and say why you think so.",
      items: [
        { id: "id-u20l3-rajin", type: "vocab", front: "rajin", reading: "rajin", meaning: "diligent", example: { jp: "Pelajar itu rajin karena belajar setiap malam.", en: "That pupil is diligent because he studies every night." }, accept: ["hard-working", "industrious", "conscientious"], drill: { jp: "Budi rajin dan selalu datang awal", en: "Budi is diligent and always arrives early" }, hint: "RAH-jin, light tap on the r. Hard-working and regular about it — rajin is the highest praise an Indonesian teacher gives, ranked above clever. It also means doing something faithfully: rajin berolahraga." },
        { id: "id-u20l3-malas", type: "vocab", front: "malas", reading: "malas", meaning: "lazy", example: { jp: "Saya malas berolahraga karena cuaca terlalu panas.", en: "I am too lazy to exercise because the weather is too hot." }, accept: ["idle", "not bothered", "unwilling to make an effort"], drill: { jp: "Anak itu malas dan sering terlambat", en: "That child is lazy and often late" }, hint: "MAH-lahs. The opposite of rajin. In everyday speech it often just means not in the mood — Malas, ah, about an errand, is closer to I can't be bothered than to a character flaw. ⚠️ Do not confuse it with malu, embarrassed." },
        { id: "id-u20l3-pintar", type: "vocab", front: "pintar", reading: "pintar", meaning: "clever", example: { jp: "Anak tetangga saya pintar dan selalu menjawab dengan benar.", en: "My neighbour's child is clever and always answers correctly." }, accept: ["smart", "intelligent", "quick to learn"], drill: { jp: "Guru kami pintar dan sabar", en: "Our teacher is clever and patient" }, hint: "PIN-tahr. Clever, and also skilled at something in particular — Pintar bahasa Indonesia means good at Indonesian. Pandai means the same and is the more formal twin. ⚠️ One letter from pintu, a door." },
        { id: "id-u20l3-ramah", type: "vocab", front: "ramah", reading: "ramah", meaning: "friendly", example: { jp: "Kasir di toko itu ramah dan selalu tersenyum.", en: "The cashier at that shop is friendly and always smiling." }, accept: ["warm towards people", "welcoming", "sociable"], drill: { jp: "Orang di desa itu sangat ramah", en: "The people in that village are very friendly" }, hint: "RAH-mah, breathed h. Warm and welcoming towards people — Orang Indonesia ramah is what visitors say and what Indonesians hope to hear. Keramahan is hospitality. ⚠️ One letter from ramai, crowded. It is also one letter from rumah, a house." },
        { id: "id-u20l3-sabar", type: "vocab", front: "sabar", reading: "sabar", meaning: "patient", example: { jp: "Guru kami sabar dan selalu mengulang pelajaran.", en: "Our teacher is patient and always repeats the lesson." }, accept: ["forbearing", "even-tempered", "willing to wait"], drill: { jp: "Dokter itu sabar dengan semua tamu", en: "That doctor is patient with every visitor" }, hint: "SAH-bahr. Sabar! on its own means hold on, be patient, and you will hear it constantly in traffic and in queues. Sabar ya is what you say to someone having a hard time — closer to hang in there than to be patient. Kesabaran is patience itself." },
        { id: "id-u20l3-lucu", type: "vocab", front: "lucu", reading: "lucu", meaning: "funny", example: { jp: "Acara itu sangat lucu dan semua tamu tertawa.", en: "That show was very funny and all the guests laughed." }, accept: ["amusing", "comical", "cute"], drill: { jp: "Bayi Siti sangat lucu dan kecil", en: "Siti's baby is very cute and small" }, hint: "LOO-choo — both c's are CH. Funny, and also CUTE: a baby, a kitten and a joke are all lucu, a range English splits into two words. Melucu is to clown around. ⚠️ One letter from cucu, a grandchild." },
      ],
    },
    {
      id: "id-u20l4",
      unit: 20,
      lesson: 4,
      title: "Merasa dan berharap",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Say what you feel and what you hope for, and describe someone crying, smiling or worrying.",
      items: [
        { id: "id-u20l4-merasa", type: "vocab", front: "merasa", reading: "merasa", meaning: "to feel", example: { jp: "Saya merasa lelah setelah berolahraga pagi ini.", en: "I feel tired after exercising this morning." }, accept: ["feel", "to sense", "to have a feeling"], drill: { jp: "Budi merasa sedih dan bosan", en: "Budi feels sad and bored" }, hint: "muh-RAH-sa. Root rasa, which is a feeling AND a taste — rasa manis is a sweet taste, and perasaan is an emotion. Merasa takes an adjective straight after it: merasa sedih, merasa bosan." },
        { id: "id-u20l4-berharap", type: "vocab", front: "berharap", reading: "berharap", meaning: "to hope", example: { jp: "Kami berharap cuaca besok cerah dan tidak hujan.", en: "We hope tomorrow's weather is clear and it does not rain." }, accept: ["hope", "to wish for", "to look forward to"], drill: { jp: "Saya berharap ujian besok mudah", en: "I hope tomorrow's exam is easy" }, hint: "buhr-HAH-rahp. Root harap, and harapan is hope itself. Semoga is the other way to say it and is far commoner in wishes — Semoga sembuh, get well soon — so learn to recognise both." },
        { id: "id-u20l4-menangis", type: "vocab", front: "menangis", reading: "menangis", meaning: "to cry", example: { jp: "Bayi itu menangis karena lapar dan lelah.", en: "That baby is crying because it is hungry and tired." }, accept: ["cry", "to weep", "to be in tears"], drill: { jp: "Anak kecil itu menangis di halaman", en: "That small child is crying in the yard" }, hint: "muh-NAH-ngis, the ng as one hum. Root tangis, which is crying itself. ⚠️ It has nothing whatever to do with tangan, a hand, however alike they look at speed. Nangis is the everyday spoken form." },
        { id: "id-u20l4-tersenyum", type: "vocab", front: "tersenyum", reading: "tersenyum", meaning: "to smile", example: { jp: "Tamu itu tersenyum karena semua orang ramah.", en: "That guest smiled because everyone was friendly." }, accept: ["smile", "to break into a smile", "to give a smile"], drill: { jp: "Ibu tersenyum karena saya pulang", en: "Mother smiles because I came home" }, hint: "tuhr-suh-NYOOM, ny as one sound. Root senyum, a smile. ⚠️ This ter- is the one from tertawa, not the one from terakhir — on a verb it marks something that simply happens on your face. Senyum alone is the noun, and also the command: Senyum!" },
        { id: "id-u20l4-khawatir", type: "vocab", front: "khawatir", reading: "khawatir", meaning: "worried", example: { jp: "Ibu khawatir karena anak belum pulang dari sekolah.", en: "Mother is worried because the children have not come home from school yet." }, accept: ["anxious", "concerned", "uneasy"], drill: { jp: "Saya khawatir karena Budi sakit", en: "I am worried because Budi is ill" }, hint: "khah-WAH-teer — the kh is a hard, breathy h, one of the few Arabic sounds Indonesian kept. Jangan khawatir! is don't worry. Cemas means much the same and is the plainer Indonesian word for it." },
        { id: "id-u20l4-kecewa", type: "vocab", front: "kecewa", reading: "kecewa", meaning: "disappointed", example: { jp: "Kami kecewa karena harga baju itu terlalu mahal.", en: "We were disappointed because the price of that shirt was too high." }, accept: ["let down", "dissatisfied", "put out"], drill: { jp: "Siti kecewa karena acara itu selesai", en: "Siti is disappointed because the event is over" }, hint: "kuh-CHEH-wa — the c is CH and the first e is swallowed. Disappointed by an outcome or by a person. Mengecewakan is disappointing, said of the thing; kekecewaan is the disappointment itself." },
      ],
    },
  ],
};
