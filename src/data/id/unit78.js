// ID Unit 78 — Watak dan budi ("Character and moral sense") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u77–u87). The 12 conventions in unit1.js and the 10 A2 conventions
// in unit21.js BIND this file. Read both before editing.
//
// THE HOLE THIS FILLS, counted against all 1200 A1+A2 cards. The A2 band spent
// its emotional vocabulary on STATES — `marah` · `sedih` · `senang` · `malu` ·
// `kesal` · `kecewa` · `bangga` · `cemburu` · `gugup` · `khawatir` — and taught
// exactly FOUR stable character traits in 1200 words: `rajin` · `malas` ·
// `sabar` · `jujur`. A learner could say "I am angry" twenty ways and could not
// say that someone IS arrogant, loyal, greedy or cruel.
//
// THE BOUNDARY THAT DEFINES THIS UNIT, and it is the one a seat will cross:
// **a trait is what someone IS; an emotion is what someone FEELS right now.**
//   • THIS UNIT: stable dispositions. sombong · setia · tulus · licik · pelit.
//     You would put them on a reference letter.
//   • NOT this unit: transient states, which are the FELT-EMOTION slot's. If a
//     word answers "how are you today", it is not a watak.
//   • NOT this unit either: how people BEHAVE TOWARDS each other as a bond —
//     trust, rivalry, obligation. `setia` (loyal) is here because it describes
//     the PERSON; `kesetiaan` as an abstract quality of a relationship is not a
//     second card and is not taught.
//
// THE TRAIT/EMOTION SPLIT IS CARDED TWICE ON PURPOSE, because it is the thing
// being taught and a learner meets it best as a contrast:
//   `pemarah` (hot-tempered, the disposition)  vs taught `marah` (angry, now)
//   `pemalu`  (a shy person, the disposition)  vs taught `malu`  (embarrassed, now)
// Both are pe- derivations of a taught root, both pass convention 3's test (a
// learner who knows "angry" does not know "hot-tempered"), and both are named in
// their hints against the root. `check-front.mjs` reported both FREE — of course
// it did; it strips German suffixes and Indonesian derives by prefix.
//
// `budi` IS IN THE TITLE AND IS DELIBERATELY NOT A CARD. The whole id corpus uses
// **Budi** as its standing male person name, in hundreds of examples. A lowercase
// front `budi` would fold to the identical reading as the name and make the
// dictation card a coin-toss, which is exactly the fold collision unit1.js §9
// names. The title keeps the word because "watak dan budi" is the ordinary
// Indonesian phrase for this theme.
//
// DECLINED, EACH FOR A NAMED REASON:
//   `angkuh`  near-synonym of this unit's `sombong`; two cards, one gloss space.
//   `kikir`   same, against `pelit` and `serakah`. Three stinginess words is a bin.
//   `sifat`   TAKEN at u31. `watak` is carded instead and the hint pairs them.
//   `berani`  TAKEN at u21.
//   `kesetiaan` second card off `setia` with no new meaning. See the boundary above.
//
// GLOSSES REWRITTEN BECAUSE THE GRADER COLLIDED THEM (invisible to lint, which
// compares exact strings):
//   `tegas`   "firm" -> `kuat` owns it. Carded as "assertive".
//   `pemalu`  "shy"  -> `malu` owns it. Carded as "a shy person".
//
// ROOT NOTE, flagged per convention 3: `teliti` is the root of taught `meneliti`
// (to research). Two cards off root `teliti`, well under A6's ceiling of three,
// and the hint names the relationship. `kejam` is NOT built on `jam` (hour) —
// the probe's prefix-stripper produced that, and it is wrong.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT78 = {
  id: "id-u78",
  lang: "id",
  title: "Watak dan budi",
  order: 78,
  stage: "b1",
  lessons: [
    {
      id: "id-u78l1",
      unit: 78,
      lesson: 1,
      title: "Tulus atau licik",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say whether someone is straight with you or working an angle, and name a person's character as a settled thing rather than a mood.",
      items: [
        { id: "id-u78l1-watak", type: "vocab", front: "watak", reading: "watak", meaning: "a person's nature", example: { jp: "Watak orang tidak mudah berubah.", en: "A person's nature does not change easily." }, accept: ["someone's settled character", "inborn character"], drill: { jp: "Watak orang tidak mudah berubah", en: "A person's nature does not change easily" }, hint: "WA-tahk. The settled character underneath the moods. You already know sifat, which is a quality or property of anything at all, including an object; watak belongs only to people." },
        { id: "id-u78l1-tulus", type: "vocab", front: "tulus", reading: "tulus", meaning: "sincere", example: { jp: "Dia membantu saya dengan hati yang tulus.", en: "He helps me with a sincere heart." }, accept: ["genuine in intention", "heartfelt"], drill: { jp: "Dia membantu saya dengan hati tulus", en: "He helps me with a sincere heart" }, hint: "TOO-loos. Meaning what you say with no second purpose. Indonesians pair it with hati constantly: dengan hati yang tulus." },
        { id: "id-u78l1-ikhlas", type: "vocab", front: "ikhlas", reading: "ikhlas", meaning: "wholehearted", example: { jp: "Saya ikhlas memberi uang itu, jadi jangan khawatir.", en: "I give that money wholeheartedly, so do not worry." }, accept: ["giving without expecting anything back", "accepting without resentment"], drill: { jp: "Saya ikhlas memberi uang itu", en: "I give that money wholeheartedly" }, hint: "EEK-lahs, kh as one breathy sound. A borrowed word with a very Indonesian job: giving or letting go WITHOUT wanting anything back, and also accepting a loss without bitterness. tulus is about honesty of motive; ikhlas is about having no strings." },
        { id: "id-u78l1-setia", type: "vocab", front: "setia", reading: "setia", meaning: "loyal", example: { jp: "Pegawai itu setia pada perusahaan selama dua puluh tahun.", en: "That employee has been loyal to the company for twenty years." }, accept: ["faithful to someone", "staying true"], drill: { jp: "Pegawai itu setia pada perusahaan", en: "That employee is loyal to the company" }, hint: "suh-TEE-a. Staying with a person, a team or a country over time. It takes pada or kepada for what you are loyal TO." },
        { id: "id-u78l1-licik", type: "vocab", front: "licik", reading: "licik", meaning: "cunning", example: { jp: "Pedagang yang licik itu menipu banyak pembeli.", en: "That cunning trader cheated many buyers." }, accept: ["sly and dishonest", "underhanded"], drill: { jp: "Pedagang licik itu menipu banyak pembeli", en: "That cunning trader cheated many buyers" }, hint: "LEE-cheek — c is CH. Clever AND dishonest, always an insult. Hold it against the next card: cerdik is clever and admired." },
        { id: "id-u78l1-cerdik", type: "vocab", front: "cerdik", reading: "cerdik", meaning: "shrewd", example: { jp: "Anak itu cerdik dan cepat menemukan jalan keluar.", en: "That child is shrewd and quickly finds a way out." }, accept: ["quick-witted and resourceful", "canny"], drill: { jp: "Anak itu cerdik dan cepat", en: "That child is shrewd and quick" }, hint: "chur-DEEK. Clever at getting around a problem, and a compliment — where licik is the same quickness turned dishonest. You already know pintar, which is clever at learning; cerdik is clever at scheming your way out." },
      ],
    },
    {
      id: "id-u78l2",
      unit: 78,
      lesson: 2,
      title: "Sombong atau rendah hati",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Place someone on the scale from arrogant to humble, and judge a person or an act as noble or contemptible.",
      items: [
        { id: "id-u78l2-sombong", type: "vocab", front: "sombong", reading: "sombong", meaning: "arrogant", example: { jp: "Dia pintar tetapi sombong, jadi tidak punya teman.", en: "He is clever but arrogant, so he has no friends." }, accept: ["stuck-up", "full of oneself"], drill: { jp: "Dia pintar tetapi sombong", en: "He is clever but arrogant" }, hint: "SOM-bong, with the ng hum at the end. The single commonest character criticism in Indonesian, and a strong one — a culture that prizes modesty uses it a lot. bangga (proud of something) is fine; sombong is the version that shows." },
        { id: "id-u78l2-rendahhati", type: "vocab", front: "rendah hati", reading: "rendahhati", meaning: "humble", example: { jp: "Dosen itu terkenal tetapi tetap rendah hati.", en: "That lecturer is famous but still humble." }, accept: ["modest about oneself", "unassuming"], drill: { jp: "Dosen itu terkenal tetapi rendah hati", en: "That lecturer is famous but humble" }, hint: "Literally \"low heart\", and both halves are words you know: rendah (low) and hati (heart). Two words, one meaning, and the exact opposite of sombong. Do not confuse it with rendah diri, \"low self\", which is an inferiority complex and not a compliment." },
        { id: "id-u78l2-mulia", type: "vocab", front: "mulia", reading: "mulia", meaning: "noble", example: { jp: "Membantu orang miskin adalah pekerjaan yang mulia.", en: "Helping poor people is noble work." }, accept: ["honourable", "worthy of high respect"], drill: { jp: "Membantu orang miskin pekerjaan yang mulia", en: "Helping poor people is noble work" }, hint: "MOO-lee-a. High in moral worth, said of a person, an aim or a job. It is also the respectful word for gold and for holy things, so it carries real weight." },
        { id: "id-u78l2-hina", type: "vocab", front: "hina", reading: "hina", meaning: "lowly and despicable", example: { jp: "Menipu orang tua itu sangat hina.", en: "Cheating an old person is utterly despicable." }, accept: ["contemptible", "beneath respect"], drill: { jp: "Menipu orang tua itu hina", en: "Cheating an old person is despicable" }, hint: "HEE-na. The floor that mulia is the ceiling of. It describes the ACT or the standing of a person, never a passing mood." },
        { id: "id-u78l2-egois", type: "vocab", front: "egois", reading: "egois", meaning: "selfish", example: { jp: "Jangan egois, kita harus berbagi dengan yang lain.", en: "Do not be selfish, we have to share with the others." }, accept: ["thinking only of oneself", "self-centred"], drill: { jp: "Jangan egois kita harus berbagi", en: "Do not be selfish we have to share" }, hint: "eh-GO-ees, three syllables, stress on the GO. Borrowed from Dutch, so the spelling does not match the English word. It is an adjective in Indonesian: dia egois, \"he is selfish\"." },
        { id: "id-u78l2-dermawan", type: "vocab", front: "dermawan", reading: "dermawan", meaning: "generous", example: { jp: "Orang dermawan itu memberi uang untuk sekolah desa.", en: "That generous person gave money for the village school." }, accept: ["open-handed", "giving freely to others"], drill: { jp: "Orang dermawan itu memberi uang", en: "That generous person gave money" }, hint: "dur-ma-WAHN. Generous specifically with MONEY and goods, and it works as a noun too: seorang dermawan is a philanthropist. The next lesson's pelit is its opposite." },
      ],
    },
    {
      id: "id-u78l3",
      unit: 78,
      lesson: 3,
      title: "Pelit, serakah, dan kejam",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the hard faults in someone's character — meanness, greed, cruelty, a short temper, cowardice, carelessness — and tell a trait apart from a passing mood.",
      items: [
        { id: "id-u78l3-pelit", type: "vocab", front: "pelit", reading: "pelit", meaning: "stingy", example: { jp: "Dia kaya tetapi pelit, jadi tidak mau membayar.", en: "He is rich but stingy, so he will not pay." }, accept: ["tight with money", "unwilling to spend"], drill: { jp: "Dia kaya tetapi pelit sekali", en: "He is rich but very stingy" }, hint: "puh-LEET. Unwilling to spend or give, and the direct opposite of dermawan. Used freely and bluntly among friends in Indonesia." },
        { id: "id-u78l3-serakah", type: "vocab", front: "serakah", reading: "serakah", meaning: "greedy", example: { jp: "Orang yang serakah itu ingin menguasai semua pasar.", en: "That greedy person wants to control every market." }, accept: ["grasping for more", "insatiable"], drill: { jp: "Orang serakah itu ingin menguasai pasar", en: "That greedy person wants to control the market" }, hint: "suh-RA-kah. Wanting MORE, where pelit is refusing to let go of what you already have. Said of people, companies and governments alike." },
        { id: "id-u78l3-kejam", type: "vocab", front: "kejam", reading: "kejam", meaning: "cruel", example: { jp: "Hukuman itu terlalu kejam untuk anak kecil.", en: "That punishment is too cruel for a small child." }, accept: ["callous and harsh", "taking no pity"], drill: { jp: "Hukuman itu terlalu kejam", en: "That punishment is too cruel" }, hint: "kuh-JAHM. Causing pain and not caring. jahat is \"evil\" in general; kejam is specifically about having no mercy. It shares no root with jam, the hour — they only look alike." },
        { id: "id-u78l3-pemarah", type: "vocab", front: "pemarah", reading: "pemarah", meaning: "hot-tempered", example: { jp: "Atasan saya pemarah, jadi semua pegawai gugup.", en: "My boss is hot-tempered, so all the staff are nervous." }, accept: ["quick to anger", "short-fused by nature"], drill: { jp: "Atasan saya pemarah dan sering kesal", en: "My boss is hot-tempered and often upset" }, hint: "puh-MA-rah. THIS IS THE LESSON OF THE UNIT. You know marah, \"angry\" — that is a mood, true for an hour. pe- plus marah makes it a PERMANENT TRAIT: someone who is always ready to be angry. Indonesian builds a lot of character words this way." },
        { id: "id-u78l3-penakut", type: "vocab", front: "penakut", reading: "penakut", meaning: "cowardly", example: { jp: "Dia penakut, jadi tidak mau naik pesawat.", en: "He is cowardly, so he will not get on a plane." }, accept: ["a coward", "fearful by nature"], drill: { jp: "Dia penakut dan tidak mau naik pesawat", en: "He is cowardly and will not board a plane" }, hint: "puh-NA-koot. The same pe- machinery on takut, \"afraid\": takut is being frightened now, penakut is being the sort of person who always is. Works as a noun too: dia seorang penakut." },
        { id: "id-u78l3-ceroboh", type: "vocab", front: "ceroboh", reading: "ceroboh", meaning: "careless", example: { jp: "Sopir yang ceroboh itu menabrak mobil saya.", en: "That careless driver hit my car." }, accept: ["slapdash", "not taking care"], drill: { jp: "Sopir ceroboh itu menabrak mobil saya", en: "That careless driver hit my car" }, hint: "chuh-ROH-boh. Doing things without checking, as a habit. You already know hati-hati, \"careful\" as an instruction; ceroboh is the person who never follows it. The opposite trait, teliti, is in the next lesson." },
      ],
    },
    {
      id: "id-u78l4",
      unit: 78,
      lesson: 4,
      title: "Tabah, tegas, dan dewasa",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Praise the character a person shows under pressure — steadiness, firmness, maturity, judgement, care — and describe a shy person without calling them embarrassed.",
      items: [
        { id: "id-u78l4-tabah", type: "vocab", front: "tabah", reading: "tabah", meaning: "steadfast", example: { jp: "Ibu itu tabah meskipun suami dia sudah mati.", en: "That woman is steadfast even though her husband has died." }, accept: ["enduring hardship calmly", "resilient under loss"], drill: { jp: "Ibu itu tabah meskipun sudah kehilangan semua", en: "That woman is steadfast although she has lost everything" }, hint: "TA-bah. Holding up under grief or hardship without breaking. sabar is patience with a delay or an annoyance; tabah is for something much heavier. Indonesians say yang tabah ya at a funeral." },
        { id: "id-u78l4-tegas", type: "vocab", front: "tegas", reading: "tegas", meaning: "assertive", example: { jp: "Guru itu tegas, jadi anak di kelas tidak berani mengganggu.", en: "That teacher is assertive, so the children in class do not dare cause trouble." }, accept: ["taking a clear and firm line", "decisive and unbending"], drill: { jp: "Guru itu tegas dan tidak mudah berubah", en: "That teacher is assertive and not easily swayed" }, hint: "tuh-GAHS. Saying clearly what you want and not wavering — a compliment, not the same as kejam. You already know menegaskan, \"to emphasise\", which is built on this same root: to make something tegas is to make it unmistakable." },
        { id: "id-u78l4-dewasa", type: "vocab", front: "dewasa", reading: "dewasa", meaning: "mature", example: { jp: "Dia masih muda tetapi cara dia berbicara dewasa.", en: "He is still young but the way he speaks is mature." }, accept: ["grown-up in behaviour", "adult"], drill: { jp: "Dia masih muda tetapi sudah dewasa", en: "He is still young but already mature" }, hint: "deh-WA-sa. Both the legal sense (an adult, orang dewasa) and the character sense (acting like one). muda and tua are about age; dewasa is about whether the behaviour has caught up." },
        { id: "id-u78l4-bijaksana", type: "vocab", front: "bijaksana", reading: "bijaksana", meaning: "wise", example: { jp: "Kakek saya bijaksana dan selalu tahu jalan keluar.", en: "My grandfather is wise and always knows a way out." }, accept: ["having sound judgement", "prudent"], drill: { jp: "Kakek saya bijaksana dan selalu tenang", en: "My grandfather is wise and always calm" }, hint: "bee-jahk-SA-na, four syllables. Good at JUDGING what to do, which is not the same as pintar, good at learning. Reserved for decisions and for people with authority." },
        { id: "id-u78l4-teliti", type: "vocab", front: "teliti", reading: "teliti", meaning: "meticulous", example: { jp: "Kasir itu teliti, jadi tidak pernah salah menghitung.", en: "That cashier is meticulous, so she never miscounts." }, accept: ["painstaking and exact", "checking every detail"], drill: { jp: "Kasir itu teliti dan tidak pernah salah", en: "That cashier is meticulous and never wrong" }, hint: "tuh-LEE-tee. Checking everything, the opposite of ceroboh. This is the ROOT of meneliti, \"to research\", which you already know — research is just being teliti about a question." },
        { id: "id-u78l4-pemalu", type: "vocab", front: "pemalu", reading: "pemalu", meaning: "a shy person", example: { jp: "Anak saya pemalu, jadi dia diam di depan tamu.", en: "My child is shy, so he keeps quiet in front of guests." }, accept: ["someone shy by nature", "retiring"], drill: { jp: "Anak saya pemalu dan diam di depan tamu", en: "My child is shy and quiet in front of guests" }, hint: "puh-MA-loo. The pe- trait again, on malu. malu is feeling embarrassed at one moment; pemalu is the kind of person who always will be. The gloss says \"a shy person\" rather than just \"shy\" because the grader already gives \"shy\" to malu." },
      ],
    },
  ],
};
