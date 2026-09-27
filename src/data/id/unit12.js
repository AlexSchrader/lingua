// ID Unit 12 — Tata bahasa 1 — kalimat dasar ("Grammar 1 — the basic sentence") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u8–u14), authored 2026-09-27. The 12 conventions in unit1.js BIND
// this file. Slot title translated, NOT rethemed — "basic sentence" is a slot
// Indonesian genuinely has (unlike u13's and u14's; see those files).
//
// GRAMMAR HAS NO ITEM TYPE, so every one of these 24 is a `vocab` card whose
// EXAMPLE carries the pattern (CLAUDE.md). That is not a workaround here — it is
// the right model for Indonesian specifically, because Indonesian grammar IS
// function words. There is no case, no gender, no agreement and no conjugation
// to drill; what a learner has to acquire is which little word goes where.
//   l1  ini / itu / adalah / bukan / sini / sana — point at it, name it, deny it
//   l2  ada plus the quantifiers — semua, beberapa, lain, sama, berbeda
//   l3  the connectives — yang, atau, tetapi, karena, kalau, untuk
//   l4  stance — harus, boleh, mungkin, pasti, tentu, saja
//
// ⚠️ `boleh` IS GLOSSED "allowed to", NOT "may" — a caught defect, not a style
// choice. `Mei` (u9l3) is glossed "May", `lint:curriculum` folds case when it
// checks gloss uniqueness, and "may"/"May" is therefore ONE prompt for two
// items: the produce card would show it and accept only one. "allowed to" is
// also the clearer prompt, since English "may" is ambiguous between permission
// and possibility — and `mungkin` in this same lesson owns the possibility half.
//
// 🚨 THE TWO NEGATIVES ARE THE MOST IMPORTANT THING IN THIS UNIT. `tidak` (u1)
// kills a VERB or an ADJECTIVE; `bukan` kills a NOUN. They do not overlap and
// they are not interchangeable, and putting `tidak` in front of a noun is the
// commonest beginner error in the language. `bukan` is therefore glossed **"not
// a"**, not "not" — partly so the gloss itself carries the noun restriction, and
// partly because "not" is already `tidak`'s gloss and two cards with one gloss
// is a collision.
//
// ⚠️ `ada` AND `adalah` ARE BOTH CARDED, IN DIFFERENT LESSONS, AND THE DRILL
// TRAP IS REAL. They are separate words — `ada` is existence ("there is"),
// `adalah` is the copula between two nouns — so convention 3 licenses both, and
// block 1 reserved both for this slot. But `lint:curriculum` tests the drill with
// a SUBSTRING match, so a drill containing only "adalah" would satisfy front
// `ada` in lint and then fail `tests/unit/drill-corpus.test.mjs`, which uses
// `findWholeWord`. `ada`'s drill here carries `ada` as a standalone word.
//
// `sama` IS CARDED AND THAT IS DELIBERATE. `sama-sama` (u2) and `bersama` (u4)
// are already taught, so the temptation is to treat the root as covered. That is
// exactly the German failure convention 3 names — shipping *survey*, *enquiry*
// and *demand* while never teaching **question**. `sama` (same) is the plain word
// underneath both derivations and a learner who knows only the derivations cannot
// produce it.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT12 = {
  id: "id-u12",
  lang: "id",
  title: "Tata bahasa 1 — kalimat dasar",
  order: 12,
  stage: "a1",
  lessons: [
    {
      id: "id-u12l1",
      unit: 12,
      lesson: 1,
      title: "Ini dan itu — menunjuk dan menyangkal",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Point at something and say what it is with no verb at all, then deny it with bukan rather than tidak.",
      items: [
        { id: "id-u12l1-ini", type: "vocab", front: "ini", reading: "ini", meaning: "this", example: { jp: "Ini rumah saya dan itu rumah Budi.", en: "This is my house and that is Budi's house." }, accept: ["this one", "these", "here is"], drill: { jp: "Ini obat batuk untuk Budi", en: "This is cough medicine for Budi" }, hint: "EE-nee. It does \"this\" and \"this is\" in one — Ini rumah saya is a complete sentence with no verb anywhere in it. It points at what is NEAR you. Put it AFTER the noun and it means \"this house\": rumah ini." },
        { id: "id-u12l1-itu", type: "vocab", front: "itu", reading: "itu", meaning: "that", example: { jp: "Itu rumah sakit dan sangat besar.", en: "That is the hospital and it is very big." }, accept: ["that one", "those", "there is"], drill: { jp: "Itu rumah sakit di kota Bali", en: "That is the hospital in Bali" }, hint: "EE-too — the far one to ini's near one, with the same double job: Itu apa? is \"what's that?\", no verb required. After a noun it does the work of English \"the\" as much as \"that\": orang itu is \"that person\" or simply \"the person\"." },
        { id: "id-u12l1-adalah", type: "vocab", front: "adalah", reading: "adalah", meaning: "is", example: { jp: "Bahasa Indonesia adalah bahasa saya.", en: "Indonesian is my language." }, accept: ["to be", "equals", "namely"], drill: { jp: "Budi adalah guru di sekolah saya", en: "Budi is a teacher at my school" }, hint: "AH-dah-lah. Indonesian normally has NO word for \"is\" at all — rumah saya besar needs none. Adalah turns up only between two NOUNS, mostly in writing and formal speech: Budi adalah guru. Never put it before an adjective; rumah saya adalah besar is simply wrong." },
        { id: "id-u12l1-bukan", type: "vocab", front: "bukan", reading: "bukan", meaning: "not a", example: { jp: "Saya bukan guru, saya mahasiswa.", en: "I am not a teacher, I am a university student." }, accept: ["is not", "not (for nouns)", "no"], drill: { jp: "Budi bukan guru di sekolah saya", en: "Budi is not a teacher at my school" }, hint: "BOO-kahn. Indonesian has TWO negatives and they never trade places: tidak kills a VERB or an ADJECTIVE (tidak pergi, tidak besar), bukan kills a NOUN (bukan guru, bukan rumah saya). Putting tidak in front of a noun is the single commonest beginner mistake in the language. Tacked onto the end of a sentence, bukan? means \"right?\"." },
        { id: "id-u12l1-sini", type: "vocab", front: "sini", reading: "sini", meaning: "here", example: { jp: "Apotek di sini dan rumah sakit di sana.", en: "The pharmacy is here and the hospital is over there." }, accept: ["this place", "over here", "right here"], drill: { jp: "Apotek di sini dan sangat bersih", en: "The pharmacy is here and very clean" }, hint: "SEE-nee. It nearly always carries di, ke or dari in front of it: di sini (here), ke sini (to here), dari sini (from here). Bare sini shouted on its own is a blunt \"come here\"." },
        { id: "id-u12l1-sana", type: "vocab", front: "sana", reading: "sana", meaning: "over there", example: { jp: "Pasar di sana dan toko di sini.", en: "The market is over there and the shop is here." }, accept: ["there", "that place", "yonder"], drill: { jp: "Pasar di sana dan sangat ramai", en: "The market is over there and very crowded" }, hint: "SAH-na — the far partner to sini, taking the same di / ke / dari. There is a middle one as well, situ, meaning \"there near you\", but these two will get you understood anywhere." },
      ],
    },
    {
      id: "id-u12l2",
      unit: 12,
      lesson: 2,
      title: "Ada — semua, beberapa, sama",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say that something exists or is in stock, and quantify it with semua, beberapa or lain.",
      items: [
        { id: "id-u12l2-ada", type: "vocab", front: "ada", reading: "ada", meaning: "there is", example: { jp: "Ada obat batuk di apotek.", en: "There is cough medicine at the pharmacy." }, accept: ["there are", "to exist", "available", "have"], drill: { jp: "Ada obat demam di apotek kota", en: "There is fever medicine at the city pharmacy" }, hint: "AH-da — \"there is\", \"there are\" and \"available\", all one word, and it answers a question by itself: Ada? — Ada. It is also how you ask in a shop: Ada obat batuk? Keep it clear of adalah, which links two nouns and is a different word entirely." },
        { id: "id-u12l2-semua", type: "vocab", front: "semua", reading: "semua", meaning: "all", example: { jp: "Semua anak di sekolah sehat sekarang.", en: "All the children at the school are healthy now." }, accept: ["everyone", "everything", "the whole", "all of it"], drill: { jp: "Semua anak di rumah sakit sehat", en: "All the children at the hospital are healthy" }, hint: "suh-MOO-ah — swallowed e, then two clear vowels. It goes in FRONT of what it counts: semua orang, semua anak. Semuanya, with an ending you have not met yet, is \"all of it\" standing alone." },
        { id: "id-u12l2-beberapa", type: "vocab", front: "beberapa", reading: "beberapa", meaning: "several", example: { jp: "Beberapa orang di apotek mau obat batuk.", en: "Several people at the pharmacy want cough medicine." }, accept: ["some", "a few", "a number of"], drill: { jp: "Beberapa orang di pasar mau obat", en: "Several people at the market want medicine" }, hint: "buh-buh-RAH-pa. Look closely: it is berapa, \"how many\", with its first syllable doubled — the question made into an answer. More than two, fewer than many, and it never takes a number after it." },
        { id: "id-u12l2-lain", type: "vocab", front: "lain", reading: "lain", meaning: "other", example: { jp: "Hari lain saya pergi ke pasar.", en: "Another day I will go to the market." }, accept: ["another", "different one", "else"], drill: { jp: "Hari lain Budi pergi ke pasar", en: "Another day Budi will go to the market" }, hint: "LAH-in — two syllables, and the ai does NOT run together the way it does in ramai. It follows its noun: orang lain is \"someone else\", hari lain \"another day\". Lain kali is \"next time\"." },
        { id: "id-u12l2-sama", type: "vocab", front: "sama", reading: "sama", meaning: "same", example: { jp: "Nama saya sama dengan nama ayah saya.", en: "My name is the same as my father's name." }, accept: ["alike", "identical", "the same as"], drill: { jp: "Nama Budi sama dengan nama ayah", en: "Budi's name is the same as his father's" }, hint: "SAH-ma, and it takes dengan: sama dengan, \"the same as\". This is the ROOT that sama-sama (you're welcome) and bersama (together) are both built on. You already know those two — this is the plain word sitting underneath them." },
        { id: "id-u12l2-berbeda", type: "vocab", front: "berbeda", reading: "berbeda", meaning: "different", example: { jp: "Warna rumah saya berbeda dengan rumah Budi.", en: "My house's colour is different from Budi's house." }, accept: ["differing", "not the same", "distinct"], drill: { jp: "Warna rumah Budi berbeda dengan rumah saya", en: "Budi's house colour is different from mine" }, hint: "buhr-buh-DA. Built with ber- on the root beda, difference. It takes dengan just as sama does: berbeda dengan. Bedanya apa? is \"what's the difference?\"." },
      ],
    },
    {
      id: "id-u12l3",
      unit: 12,
      lesson: 3,
      title: "Yang, kalau, karena — merangkai kalimat",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Join two ideas into one sentence, and hook a description onto a noun with yang.",
      items: [
        { id: "id-u12l3-yang", type: "vocab", front: "yang", reading: "yang", meaning: "which", example: { jp: "Orang yang sakit pergi ke rumah sakit.", en: "The person who is ill goes to the hospital." }, accept: ["that", "who", "the one that", "the one who"], drill: { jp: "Orang yang sakit pergi ke dokter", en: "The person who is ill goes to the doctor" }, hint: "YAHNG — y is a consonant, hum on the end. Arguably the most useful word in the language: it hooks a description onto a noun, as in rumah yang besar, \"the house that is big\". It also stands alone to mean \"the one\" — yang merah, \"the red one\" — which is how you point at things in a shop without knowing their names." },
        { id: "id-u12l3-atau", type: "vocab", front: "atau", reading: "atau", meaning: "or", example: { jp: "Saya mau teh atau kopi.", en: "I want tea or coffee." }, accept: ["either", "or else", "alternatively"], drill: { jp: "Budi mau teh atau kopi panas", en: "Budi wants tea or hot coffee" }, hint: "AH-tow — the au is one sound, rhyming with \"cow\". It joins CHOICES where dan joins additions. Atau apa? closing a question is \"…or what?\"." },
        { id: "id-u12l3-tetapi", type: "vocab", front: "tetapi", reading: "tetapi", meaning: "but", example: { jp: "Kamar saya kecil tetapi bersih dan terang.", en: "My room is small but clean and bright." }, accept: ["however", "although", "yet"], drill: { jp: "Kamar Budi kecil tetapi bersih sekali", en: "Budi's room is small but very clean" }, hint: "tuh-TAH-pee. Tapi is the short spoken form and it is what you will hear nine times in ten; tetapi is the full written one. Identical in meaning, so pick either." },
        { id: "id-u12l3-karena", type: "vocab", front: "karena", reading: "karena", meaning: "because", example: { jp: "Saya tidak pergi karena hujan.", en: "I am not going because it is raining." }, accept: ["since", "as", "due to"], drill: { jp: "Budi tidak pergi karena hujan sekarang", en: "Budi is not going because it is raining now" }, hint: "KAH-ruh-na — the middle e is the swallowed one. It takes a whole clause, or just a noun: karena hujan, \"because of rain\". A question with kenapa is answered with karena." },
        { id: "id-u12l3-kalau", type: "vocab", front: "kalau", reading: "kalau", meaning: "if", example: { jp: "Kalau hujan, saya tidak pergi ke pasar.", en: "If it rains, I am not going to the market." }, accept: ["if so", "in case", "supposing", "provided that"], drill: { jp: "Kalau hujan Budi tidak pergi", en: "If it rains Budi is not going" }, hint: "KAH-low — au rhyming with \"cow\", same as atau. Jika is the formal written twin. It also means \"as for\": kalau saya, \"as for me\", which is how Indonesians change the subject politely." },
        { id: "id-u12l3-untuk", type: "vocab", front: "untuk", reading: "untuk", meaning: "for", example: { jp: "Obat ini untuk anak saya.", en: "This medicine is for my child." }, accept: ["in order to", "meant for", "to"], drill: { jp: "Obat batuk untuk anak Budi", en: "Cough medicine for Budi's child" }, hint: "OON-took. It marks a purpose or a recipient: untuk saya, untuk anak. Put a VERB after it and it becomes \"in order to\": untuk belajar." },
      ],
    },
    {
      id: "id-u12l4",
      unit: 12,
      lesson: 4,
      title: "Harus, boleh, mungkin — sikap",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say what you must do, what you are allowed to do, and how sure you are about it.",
      items: [
        { id: "id-u12l4-harus", type: "vocab", front: "harus", reading: "harus", meaning: "must", example: { jp: "Saya harus pergi ke dokter hari Senin.", en: "I must go to the doctor on Monday." }, accept: ["have to", "ought to", "need to", "should"], drill: { jp: "Budi harus pergi ke dokter sekarang", en: "Budi must go to the doctor now" }, hint: "HAH-roos. It sits in front of the verb, just like bisa and mau: harus pergi, harus makan. Careful with the negative — tidak harus is \"don't have to\", NOT \"must not\". For that you need jangan or tidak boleh." },
        { id: "id-u12l4-boleh", type: "vocab", front: "boleh", reading: "boleh", meaning: "allowed to", example: { jp: "Anak saya boleh makan nasi kuning.", en: "My child may eat yellow rice." }, accept: ["may", "allowed", "permitted", "be allowed to", "may I"], drill: { jp: "Budi boleh makan nasi kuning sekarang", en: "Budi may eat yellow rice now" }, hint: "BOH-leh — swallowed final e. This is PERMISSION where bisa is ABILITY: boleh masuk is \"you may come in\", bisa masuk is \"it fits\". Boleh? alone asks \"may I?\", and tidak boleh is a firm \"not allowed\"." },
        { id: "id-u12l4-mungkin", type: "vocab", front: "mungkin", reading: "mungkin", meaning: "maybe", example: { jp: "Mungkin Budi sakit karena dia tidak bekerja.", en: "Maybe Budi is ill because he is not working." }, accept: ["perhaps", "possibly", "it is possible"], drill: { jp: "Mungkin Budi sakit dan tidak bekerja", en: "Maybe Budi is ill and not working" }, hint: "MOONG-kin, hum in the middle. It goes at the FRONT of the sentence, not inside it. It is also the polite way to soften a refusal — mungkin tidak lands far more gently than a bare tidak." },
        { id: "id-u12l4-pasti", type: "vocab", front: "pasti", reading: "pasti", meaning: "certainly", example: { jp: "Obat ini pasti bagus untuk batuk.", en: "This medicine is certainly good for a cough." }, accept: ["definitely", "surely", "for sure", "certain"], drill: { jp: "Obat itu pasti bagus untuk demam", en: "That medicine is certainly good for a fever" }, hint: "PAHS-tee — the far end of the scale from mungkin, and placed the same way, in front of the verb or the adjective. Pasti! on its own is an emphatic \"absolutely\"." },
        { id: "id-u12l4-tentu", type: "vocab", front: "tentu", reading: "tentu", meaning: "of course", example: { jp: "Tentu saya mau teh panas.", en: "Of course I want hot tea." }, accept: ["naturally", "sure", "obviously", "of course yes"], drill: { jp: "Tentu Budi mau teh panas sekarang", en: "Of course Budi wants hot tea now" }, hint: "TUHN-too — swallowed first vowel. Tentu saja is the fuller everyday form and means the same thing. It AGREES warmly, where pasti STATES a fact — answer a favour with Tentu! and you sound generous." },
        { id: "id-u12l4-saja", type: "vocab", front: "saja", reading: "saja", meaning: "just", example: { jp: "Saya mau air saja, tidak kopi.", en: "I just want water, not coffee." }, accept: ["merely", "simply", "that's all", "nothing more"], drill: { jp: "Saya mau air saja sekarang", en: "I just want water now" }, hint: "SAH-ja — J of judge. It FOLLOWS what it limits, where hanya goes in front: air saja and hanya air both mean \"only water\". It also softens an offer — duduk saja is a relaxed \"do sit down\"." },
      ],
    },
  ],
};
