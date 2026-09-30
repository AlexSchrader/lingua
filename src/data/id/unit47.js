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
        { id: "id-u47l1-negara", type: "vocab", front: "negara", reading: "negara", meaning: "a country", example: { jp: "Negara itu ada di benua lain.", en: "That country is on another continent." }, accept: ["a sovereign state", "a nation state", "the country as a whole"], drill: { jp: "Negara ini punya banyak pulau", en: "This country has many islands" }, hint: "nuh-GAH-ra. ⚠️ THE WORD THE COURSE HAS BEEN MISSING ENTIRELY — without it you cannot say which country you are from. You already know it hidden inside luar negeri, abroad; negeri is the older sister word, used for a land or realm, and negara is the modern political state." },
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
      title: "Daerah dan penduduk",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about the people of a place — the region and province they live in, the population, the citizens, the community, and what connects them.",
      items: [
        { id: "id-u47l2-daerah", type: "vocab", front: "daerah", reading: "daerah", meaning: "a region", example: { jp: "Daerah itu dingin dan sangat sepi.", en: "That region is cold and very quiet." }, accept: ["an area of a country", "a district", "a locality"], drill: { jp: "Daerah ini punya banyak gunung tinggi", en: "This region has many high mountains" }, hint: "dah-EH-rah, three syllables with the a and e kept apart. Any area smaller than a country and larger than a street. It is the standard word on official signs — pemerintah daerah, local government. Much broader than kota or desa." },
        { id: "id-u47l2-provinsi", type: "vocab", front: "provinsi", reading: "provinsi", meaning: "a province", example: { jp: "Provinsi itu punya dua kota besar.", en: "That province has two big cities." }, accept: ["an administrative region", "a state within a country", "a provincial division"], drill: { jp: "Provinsi ini ada di timur pulau", en: "This province is in the east of the island" }, hint: "proh-VEEN-see. Indonesia's formal top-level division, so it is on every address and news bulletin. Note the spelling: -si, not -ce. Ibu kota provinsi is the provincial capital, literally its mother-city." },
        { id: "id-u47l2-penduduk", type: "vocab", front: "penduduk", reading: "penduduk", meaning: "the population", example: { jp: "Penduduk kota itu sangat banyak.", en: "That city's population is very large." }, accept: ["the inhabitants", "the people living somewhere", "residents"], drill: { jp: "Penduduk desa itu ramah dan sabar", en: "The people of that village are friendly and patient" }, hint: "puhn-DOO-dook. ⚠️ Built on duduk, to sit, which you already know — the inhabitants are the ones who SIT in a place. That is history, not a rule to reuse: you cannot make new words this way. Penduduk asli means the indigenous population." },
        { id: "id-u47l2-warga", type: "vocab", front: "warga", reading: "warga", meaning: "a citizen", example: { jp: "Warga kota itu bekerja di pabrik.", en: "The citizens of that city work at the factory." }, accept: ["a member of the public", "a resident with rights", "one of the citizenry"], drill: { jp: "Semua warga desa datang ke rapat", en: "All the village citizens came to the meeting" }, hint: "WAHR-ga. A member of a community with a stake in it — narrower and more official than penduduk, which is just whoever lives there. Warga negara, citizen-of-the-state, is a national. You will see warga on every neighbourhood notice." },
        { id: "id-u47l2-masyarakat", type: "vocab", front: "masyarakat", reading: "masyarakat", meaning: "society", example: { jp: "Masyarakat di desa itu saling membantu.", en: "The community in that village helps one another." }, accept: ["the community", "the general populace", "people taken together"], drill: { jp: "Masyarakat di kota ini sangat sibuk", en: "The community in this city is very busy" }, hint: "mah-sya-RAH-kat — the sy is one sound, like the sh in ship, and it is one of unit 1's trickier clusters. Society in the abstract and a local community alike. Arabic in origin. It is the word for people-in-general on any official document." },
        { id: "id-u47l2-jembatan", type: "vocab", front: "jembatan", reading: "jembatan", meaning: "a bridge", example: { jp: "Jembatan itu panjang dan sangat tinggi.", en: "That bridge is long and very high." }, accept: ["a crossing over water", "a span", "a road or foot bridge"], drill: { jp: "Kami lewat jembatan itu setiap pagi", en: "We go across that bridge every morning" }, hint: "juhm-BAH-tan, first e swallowed. Any bridge — over a river, a road, or figuratively between people. In a country of islands and rivers it is a high-frequency word, which is why it belongs with the geography rather than with the buildings." },
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
        { id: "id-u47l4-aman", type: "vocab", front: "aman", reading: "aman", meaning: "safe", example: { jp: "Jalan itu aman untuk anak kecil.", en: "That road is safe for small children." }, accept: ["secure", "out of danger", "free of risk"], drill: { jp: "Daerah ini aman pada malam hari", en: "This region is safe at night" }, hint: "AH-man. Arabic in origin and enormously common — aman is the reassurance you give and receive constantly. Keamanan is security, the noun. ⚠️ It describes the SITUATION, not the person's feeling; for a person who feels safe you would say tenang or tidak khawatir." },
        { id: "id-u47l4-bahaya", type: "vocab", front: "bahaya", reading: "bahaya", meaning: "danger", example: { jp: "Ada bahaya di jalan itu.", en: "There is danger on that road." }, accept: ["a hazard", "peril", "a threat of harm"], drill: { jp: "Bahaya itu datang dari mesin lama", en: "That danger comes from the old machine" }, hint: "bah-HAH-ya. A NOUN, the exact opposite of aman: ada bahaya, there is danger. Berbahaya is the adjective, dangerous, and it is what you will read on a warning sign. Awas! is the shouted look out." },
      ],
    },
  ],
};
