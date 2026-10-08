// ID Unit 47 — Negara dan masyarakat ("Country and society") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 3 (u41–u50). unit1.js's 12 conventions and unit21.js's 10 A2
// conventions BIND this file. RETITLED AND RETHEMED from "Vocabulary 8 (A2)".
//
// THE HOLE, and it is a startling one. Measured against all 720 merged cards,
// Indonesian had **no word for a country.** Nor for the world, a continent, a
// nation, a border, a region, a province, a population, a citizen, society, a
// bridge, or ANY of the four compass directions. A1's u7 built a town and u23 took
// long-distance travel as far as the terminal; neither ever zoomed out past the
// city limit. A learner could say `saya dari kota besar` and not `saya dari negara
// lain`.
//
// ⚠️ SCOPE BOUNDARY WITH BLOCK 2, STATED EXPLICITLY. Block 2 (u31–u40) owns SOCIAL
// RELATIONS AND POLITENESS. This unit is CIVIC and GEOGRAPHIC, not interpersonal:
// `masyarakat` (society), `warga` (a citizen) and `penduduk` (the population) are
// demographic and institutional words, and nothing here touches how people treat
// one another. `sopan` (polite) and `bahagia` (happy) are on block 1's reserved
// list and are deliberately LEFT for block 2 — they are its domain, not mine.
// Flagged in the hand-back as adjacent rather than taken.
//
// ⚠️ TWO WORDS FROM BLOCK 1's RESERVED LIST ARE TAKEN HERE: `negara` (l1) and
// `jembatan` (l2), plus `aman` and `bahaya` (l4). Flagged in the hand-back.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention 3):
//   perbatasan → batas   root not taught (a per-…-an noun on an untaught root).
//   penduduk   → duduk   ⚠️ `duduk` IS taught ("to sit", u4l2). Carded anyway: no
//     learner who knows to sit would guess the population. Drill-safe — "penduduk"
//     contains "duduk" at index 3, preceded by `n`, so findWholeWord does not
//     match in either direction. Historically the inhabitants are those who sit in
//     a place, which is worth saying in the hint and nothing more.
//   pemerintah → perintah  root not taught.
//   berada     → ada     ⚠️ `ada` IS taught ("there is", u4l1). Carded anyway: ada
//     asserts EXISTENCE, berada asserts a LOCATION or a state — dia berada di
//     Jakarta. Convention 3's test passes. Drill-safe: "berada" contains "ada" at
//     index 3, preceded by `r`.
//   negara · dunia · benua · bangsa · asing · daerah · provinsi · warga ·
//   masyarakat · jembatan · timur · barat · utara · selatan · posisi · hukum ·
//   presiden · tentara · aman · bahaya — all roots.
//
// ⛔ NO ter- FORM IS CARDED. `terletak` (to be situated) was the natural card for
// l3 and A2 convention A5 forbids it — ter- on a root the learner does not have is
// deferred to B1, and `letak` is untaught. `berada` does the same job off a root
// that IS taught, so it is carded instead. This is the deferral doing its job, not
// a gap.
//
// ⛔ ALSO NOT CARDED:
//   `polisi` — front and gloss are near-identical and unit1.js names it by name as
//     one of the copy-task cognates (`televisi`/`polisi`/`bus`).
//   `provinsi` IS carded, because "a province" and "provinsi" differ enough to
//     test — measured through `normalizeMeaning`, which leaves "province".
//   `samping` / `sisi` (a side) — A1's `sebelah` (u7l2) already accepts "beside",
//     "alongside", "side" and "adjacent". Convention 3 forbids the second card and
//     there is no honest alternative gloss left.
//   `keamanan` (security) — a bare ke-…-an nominalisation off `aman`, carded in the
//     same lesson; A6's "adds nothing" clause.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT47 = {
  id: "id-u47",
  lang: "id",
  title: "Negara dan masyarakat",
  order: 47,
  stage: "a2",
  lessons: [
    {
      id: "id-u47l1",
      unit: 47,
      lesson: 1,
      title: "Negara dan dunia",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Zoom out past the city — name a country, a continent, a people, the world, and say where one country stops and another begins.",
      items: [
        { id: "id-u47l1-negara", type: "vocab", front: "negara", reading: "negara", meaning: "a country", example: { jp: "Negara itu ada di benua lain.", en: "That country is on another continent." }, accept: ["a sovereign state", "a nation state", "the country as a whole"], drill: { jp: "Negara ini punya banyak pulau", en: "This country has many islands" }, hint: "nuh-GAH-ra. ⚠️ THE WORD THE COURSE HAS BEEN MISSING ENTIRELY — without it you cannot say which country you are from. Indonesian also has negeri for a land or realm, the older and more literary word — it survives in the fixed phrase luar negeri, abroad. negara is the modern political state, and it is the one you want." },
        { id: "id-u47l1-dunia", type: "vocab", front: "dunia", reading: "dunia", meaning: "the world", example: { jp: "Dunia ini sangat besar.", en: "This world is very big." }, accept: ["the whole world", "everywhere", "the global scene"], drill: { jp: "Dunia sudah berubah sejak tahun lalu", en: "The world has changed since last year" }, hint: "DOO-nee-a, three syllables. The world as a human place — where bumi, which you now know, is the physical planet. Dunia usaha is the business world; seluruh dunia, using seluruh which you know, is the whole world over." },
        { id: "id-u47l1-benua", type: "vocab", front: "benua", reading: "benua", meaning: "a continent", example: { jp: "Ada banyak negara di benua itu.", en: "There are many countries on that continent." }, accept: ["a landmass", "one of the great land areas", "a continental region"], drill: { jp: "Benua itu jauh dari pulau kami", en: "That continent is far from our island" }, hint: "buh-NOO-a, first e swallowed. The seven continents. ⚠️ Note the shape: ben- plus -ua is not an affix, it is simply the word — resist reading a prefix into it. Benua Asia, benua Afrika." },
        { id: "id-u47l1-bangsa", type: "vocab", front: "bangsa", reading: "bangsa", meaning: "a nation", example: { jp: "Bangsa kami punya banyak bahasa.", en: "Our nation has many languages." }, accept: ["a whole people", "an ethnic nation", "a national group"], drill: { jp: "Bangsa itu punya sejarah panjang", en: "That nation has a long history" }, hint: "BAHNG-sa. The PEOPLE, where negara is the STATE they live in — a distinction Indonesian keeps sharply and English blurs. Bahasa Indonesia is literally the language of the nation, so you already know half of it. Kebangsaan is nationality." },
        { id: "id-u47l1-asing", type: "vocab", front: "asing", reading: "asing", meaning: "foreign", example: { jp: "Dia belajar bahasa asing di sekolah.", en: "He studies a foreign language at school." }, accept: ["from abroad", "not local", "alien to a place"], drill: { jp: "Ada banyak turis asing di pantai", en: "There are many foreign tourists on the beach" }, hint: "AH-seeng. Bahasa asing, a foreign language, is the phrase you will meet it in first. It also means unfamiliar in a neutral sense: wajah itu asing bagi saya, that face is strange to me — and there it takes bagi, which you now know." },
        { id: "id-u47l1-perbatasan", type: "vocab", front: "perbatasan", reading: "perbatasan", meaning: "a border", example: { jp: "Perbatasan negara itu jauh dari kota.", en: "That country's border is far from the city." }, accept: ["a frontier", "the boundary line", "the edge of a country"], drill: { jp: "Kami berhenti di perbatasan pagi ini", en: "We stopped at the border this morning" }, hint: "puhr-bah-TAH-san. Built on batas, a limit, in the per-…-an frame that makes a place — the same shape as perpustakaan, a library. Batas on its own means a limit or deadline; perbatasan is specifically the frontier between two territories." },
      ],
    },
    {
      id: "id-u47l2",
      unit: 47,
      lesson: 2,
      title: "Wilayah, bendera, dan pahlawan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name how a country is divided up, the flag that flies over it, whether it rules itself, and the kings and heroes it remembers.",
      items: [
        { id: "id-u47l2-wilayah", type: "vocab", front: "wilayah", reading: "wilayah", meaning: "a territory", example: { jp: "Wilayah negara ini besar sekali.", en: "The territory of this country is very big." }, accept: ["an area under one authority", "a zone", "a tract of land"], drill: { jp: "Ada tiga wilayah di provinsi itu", en: "There are three territories in that province" }, hint: "wee-LAH-yah. A stretch of land belonging to one authority — a country's wilayah, a company's wilayah, a police wilayah. Larger and more official than daerah, which you know as a district: a wilayah is drawn on a map by a government, a daerah is simply the area around somewhere." },
        { id: "id-u47l2-provinsi", type: "vocab", front: "provinsi", reading: "provinsi", meaning: "a province", example: { jp: "Provinsi itu punya dua kota besar.", en: "That province has two big cities." }, accept: ["an administrative region", "a state within a country", "a provincial division"], drill: { jp: "Provinsi ini ada di timur pulau", en: "This province is in the east of the island" }, hint: "proh-VEEN-see. Indonesia's formal top-level division, so it is on every address and news bulletin. Note the spelling: -si, not -ce. Ibu kota provinsi is the provincial capital, literally its mother-city." },
        { id: "id-u47l2-merdeka", type: "vocab", front: "merdeka", reading: "merdeka", meaning: "independent", example: { jp: "Semua bangsa mau merdeka dari negara asing.", en: "Every nation wants to be independent of a foreign country." }, accept: ["free of foreign rule", "self-governing", "free from being ruled"], drill: { jp: "Hari merdeka adalah hari raya di negara ini", en: "Independence day is a public holiday in this country" }, hint: "mer-DEH-ka. Sanskrit in origin, and the single most loaded word in Indonesian public life — it was the shout of the independence struggle and it is still the shout at a rally. Kemerdekaan is independence itself, and 17 August is Hari Kemerdekaan." },
        { id: "id-u47l2-bendera", type: "vocab", front: "bendera", reading: "bendera", meaning: "a flag", example: { jp: "Bendera negara kami merah dan putih.", en: "Our country's flag is red and white." }, accept: ["a national flag", "a banner", "a standard"], drill: { jp: "Ada bendera di depan gedung pemerintah", en: "There is a flag in front of the government building" }, hint: "ben-DEH-ra, from Portuguese bandeira — one of a small set of Portuguese loans that came in with the spice trade. Indonesia's own is called Sang Saka Merah Putih, the red and white. Mengibarkan bendera is to raise one." },
        { id: "id-u47l2-pahlawan", type: "vocab", front: "pahlawan", reading: "pahlawan", meaning: "a national hero", example: { jp: "Pahlawan itu terkenal di semua provinsi.", en: "That hero is famous in every province." }, accept: ["a hero", "someone who fought for the country", "a champion of the nation"], drill: { jp: "Nama pahlawan itu ada di nama jalan kami", en: "That hero's name is on our street name" }, hint: "pah-lah-WAHN. From Persian, and it means specifically someone honoured for what they did FOR the nation — not a hero in a story, which is tokoh. Indonesia names streets after its pahlawan everywhere, so the word is on a sign in every town." },
        { id: "id-u47l2-raja", type: "vocab", front: "raja", reading: "raja", meaning: "a king", example: { jp: "Raja itu tinggal di gedung besar di ibu kota.", en: "That king lives in a big building in the capital city." }, accept: ["a monarch", "a ruler", "a crowned ruler"], drill: { jp: "Raja itu punya wilayah yang sangat besar", en: "That king holds a very large territory" }, hint: "RAH-ja. Sanskrit, the same root as English rajah. Indonesia is a republic with a presiden, but several of its regions still have a raja or a sultan with real standing, so the word is present tense, not history. Kerajaan is a kingdom." },
      ],
    },
    {
      id: "id-u47l3",
      unit: 47,
      lesson: 3,
      title: "Arah mata angin",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Give a direction on the map — north, south, east, west — and say where on it a thing actually sits.",
      items: [
        { id: "id-u47l3-timur", type: "vocab", front: "timur", reading: "timur", meaning: "the east", example: { jp: "Matahari datang dari timur.", en: "The sun comes from the east." }, accept: ["the eastern side", "eastward", "the orient"], drill: { jp: "Ada gunung besar di timur kota", en: "There is a big mountain east of the city" }, hint: "TEE-moor. The four compass words are among the most useful nouns in the language because Indonesian addresses and place names are full of them — Jawa Timur, East Java. Arah mata angin, the wind's eye directions, is the phrase for the compass itself." },
        { id: "id-u47l3-barat", type: "vocab", front: "barat", reading: "barat", meaning: "the west", example: { jp: "Pantai itu ada di barat kota.", en: "That beach is west of the city." }, accept: ["the western side", "westward", "the occident"], drill: { jp: "Angin datang dari barat pagi ini", en: "The wind comes from the west this morning" }, hint: "BAH-rat. Also the West in the cultural sense — orang barat, a Westerner; musik barat, Western music. ⚠️ One letter from berat, heavy, which you already know, and the two are easy to slur; keep the first vowel a clean a." },
        { id: "id-u47l3-utara", type: "vocab", front: "utara", reading: "utara", meaning: "the north", example: { jp: "Gunung itu ada di utara desa.", en: "That mountain is north of the village." }, accept: ["the northern side", "northward", "up the map"], drill: { jp: "Kami menuju utara dengan kereta", en: "We head north by train" }, hint: "oo-TAH-ra. Three syllables with the weight in the middle. Sumatera Utara is North Sumatra. Unlike English, Indonesian puts the direction AFTER the place name in these compounds, so read them right to left." },
        { id: "id-u47l3-selatan", type: "vocab", front: "selatan", reading: "selatan", meaning: "the south", example: { jp: "Laut itu ada di selatan pulau.", en: "That sea is south of the island." }, accept: ["the southern side", "southward", "down the map"], drill: { jp: "Daerah selatan lebih panas dan kering", en: "The southern region is hotter and drier" }, hint: "suh-LAH-tan. ⚠️ The se- at the front is NOT the se- prefix you have met in setengah and selain — selatan is simply a whole word. Jakarta Selatan is South Jakarta, an address you will see constantly." },
        { id: "id-u47l3-posisi", type: "vocab", front: "posisi", reading: "posisi", meaning: "a position", example: { jp: "Posisi rumah itu dekat pasar.", en: "That house's position is near the market." }, accept: ["a place on a map", "where a thing sits", "its standing point"], drill: { jp: "Posisi pulau itu ada di selatan", en: "That island's position is in the south" }, hint: "poh-SEE-see. A location, and also a position in the sense of a job or a stance — posisi saya jelas, my position is clear. Note the spelling with two s's and no t: Indonesian writes the sound, so -tion becomes -si." },
        { id: "id-u47l3-berada", type: "vocab", front: "berada", reading: "berada", meaning: "to be present", example: { jp: "Kami berada di kota itu tahun lalu.", en: "We were in that city last year." }, accept: ["to be located", "to find yourself somewhere", "to be there"], drill: { jp: "Ibu saya berada di pasar sekarang", en: "My mother is at the market now" }, hint: "buh-RAH-da. Built on ada, which you know as there is. ⚠️ The split matters: ada asserts that something EXISTS, berada says WHERE someone or something is. Ada buku means there is a book; saya berada di rumah means I am at home. Berada is the more formal and written of the two." },
      ],
    },
    {
      id: "id-u47l4",
      unit: 47,
      lesson: 4,
      title: "Pemerintah dan hukum",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name who runs a country and by what rules, and say whether a place is safe or dangerous.",
      items: [
        { id: "id-u47l4-pemerintah", type: "vocab", front: "pemerintah", reading: "pemerintah", meaning: "the government", example: { jp: "Pemerintah membuat jalan baru di desa.", en: "The government built a new road in the village." }, accept: ["the authorities", "those who govern", "the administration"], drill: { jp: "Pemerintah kota itu bekerja pelan-pelan", en: "That city's government works slowly" }, hint: "puh-muh-REEN-tah. From perintah, an order or command — the government is the body that gives them. Pemerintahan with the extra -an is the act of governing or a particular administration. Pemerintah pusat is central government." },
        { id: "id-u47l4-hukum", type: "vocab", front: "hukum", reading: "hukum", meaning: "the law", example: { jp: "Hukum di negara ini sangat keras.", en: "The law in this country is very strict." }, accept: ["a statute", "the legal system", "a legal rule"], drill: { jp: "Dia belajar hukum di universitas besar", en: "He studies law at a big university" }, hint: "HOO-koom. The law as a system and a single law alike. Arabic in origin. ⚠️ It is also a VERB, to punish — dihukum, to be punished — so context decides. Ilmu hukum is the study of law, pairing it with ilmu which you now know." },
        { id: "id-u47l4-presiden", type: "vocab", front: "presiden", reading: "presiden", meaning: "a president", example: { jp: "Presiden negara itu masih muda.", en: "That country's president is still young." }, accept: ["the head of state", "the leader of a republic", "the national leader"], drill: { jp: "Presiden baru itu datang ke provinsi", en: "That new president came to the province" }, hint: "pruh-see-DEHN. Spelled without the -t English adds and with an e where English has an i: Indonesian writes what it hears. Indonesia has a president rather than a prime minister, so this is the word you need for the head of government too." },
        { id: "id-u47l4-tentara", type: "vocab", front: "tentara", reading: "tentara", meaning: "the army", example: { jp: "Tentara itu berada di perbatasan.", en: "The army is at the border." }, accept: ["the military", "soldiers", "the armed forces"], drill: { jp: "Tentara datang ke daerah itu kemarin", en: "The army came to that region yesterday" }, hint: "tuhn-TAH-ra. Both the army as an institution and a single soldier — seorang tentara, using seorang which you know, is one soldier. It is not built on tentu, certainly, despite sharing four letters; keep the two apart." },
        { id: "id-u47l4-menteri", type: "vocab", front: "menteri", reading: "menteri", meaning: "a government minister", example: { jp: "Menteri itu datang ke provinsi kami minggu lalu.", en: "That minister came to our province last week." }, accept: ["a cabinet minister", "a secretary of state", "a member of the cabinet"], drill: { jp: "Menteri baru itu bilang hukum akan berubah", en: "That new minister said the law would change" }, hint: "men-TREE, the middle e swallowed. Sanskrit again — the same word behind English mandarin. A perdana menteri is a prime minister, which Indonesia has not had since 1959; its ministers answer to the presiden directly. Kementerian is the ministry as a building and a department." },
        { id: "id-u47l4-pemilu", type: "vocab", front: "pemilu", reading: "pemilu", meaning: "a general election", example: { jp: "Pemilu di negara ini ada setiap lima tahun.", en: "There is a general election in this country every five years." }, accept: ["an election", "a national vote", "polling day"], drill: { jp: "Semua warga ikut pemilu pada hari itu", en: "Every citizen takes part in the election on that day" }, hint: "puh-MEE-loo. A squeeze of pemilihan umum, general choosing — Indonesian shortens long official phrases like this constantly, and ponsel is the same trick. Indonesia's pemilu is one of the largest single-day votes anywhere, so it is a word you will meet in any news report." },
      ],
    },
  ],
};
