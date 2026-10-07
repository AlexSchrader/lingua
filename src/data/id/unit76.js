// ID Unit 76 — Bentang alam dan iklim ("Landscape and climate") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 2 (u64–u76) — the last unit of this block. unit1.js's 12
// conventions, unit21.js's A1–A10, unit69.js's B1–B7 and unit72.js's B8–B11 ALL
// bind this file.
//
// ⛔ **A GENERIC `Vocabulary N (B1)` SLOT, THEMED CENTRALLY BY THE CREW LEAD
// AGAINST A COUNT.** Binding, for the reason set out in unit74.js.
//
// THE HOLE. Three units had already been over this ground and all three stopped
// short of the land itself:
//   u8 took WEATHER YOU FEEL — `panas` `dingin` `hujan` `angin` `musim` `payung`
//     `cerah` `mendung`.
//   u19 took NATURE NOUNS — `pohon` `gunung` `sungai` `pantai` `laut` `hutan`
//     `bunga` `batu`-adjacent words.
//   u46 took DISASTERS — `banjir` `gempa` `kebakaran` `debu` `asap` `tanah`
//     `pulau` `bumi`.
//   SO WHAT WAS MISSING — climate, temperature and landform. Measured against
//   all 1,320 cards standing when this unit was written there was no word for
//   climate, temperature, a degree, the dry season, rainfall, a hill, a valley,
//   a slope, a cliff, a cave, a plain, a lake, a bay, a wave, a waterfall, a
//   swamp, mud, freezing, melting, a desert, barren ground or a bush — and
//   **no word for SNOW**, which the crew lead named as a core-inventory gap by
//   number. ✅ **`salju` IS CARDED HERE, l1.**
//
// ⚠️ SCOPE BOUNDARY WITH MY OWN u65, resolved internally because the lead gave
// this seat both halves on purpose:
//   **u65 OWNS THE ENVIRONMENT AS A PROBLEM** — pollution, waste, emissions,
//   conservation. `pemanasan global` and `udara` are THERE.
//   **THIS UNIT OWNS THE PHYSICAL LANDSCAPE** — landforms, climate, temperature.
//   `iklim` and `suhu` are HERE.
//   The hinge, stated so it can be applied: a word about what humans are DOING
//   to the land is u65's; a word for what the land IS is this unit's. So
//   `pemanasan global` (a problem) is u65's and `suhu` (a measurement) is here,
//   exactly as the lead's allocation specified.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1.js convention 3):
//   membeku    → beku   `beku` is carded in the SAME lesson, adjacent — the
//     adjective and the verb, which is A6's pair test and passes: being frozen
//     is not the act of freezing. ⚠️ A drill containing "membeku" does NOT
//     whole-word-match `beku` (the `m` before it is a letter), so `beku`'s own
//     drill carries the bare adjective. CHECKED.
//   mencair    → cair   root not taught. Its opposite number `membeku` is in the
//     same lesson on purpose.
//   air terjun → air · terjun  ⚠️ `air` (u6) IS TAUGHT — and this is the whole
//     reason the compound is safe to card: the learner already has the head word,
//     `terjun` (to plunge) is untaught, and nobody reads *waterfall* off
//     *water-plunge* without being told. Convention 8. ⚠️ A drill containing
//     "air terjun" whole-word-matches `air` too, which is harmless; that card is
//     u6's and has its own drill. ⚠️ Fold check: "airterjun", unique in the
//     corpus.
//   curah hujan → curah · hujan  ⚠️ `hujan` (u8) IS TAUGHT and its accept[]
//     carries **"rainfall"** — so this card is glossed "how much rain falls",
//     which is also what the phrase literally measures. A4's rule. `curah` never
//     appears alone. ⚠️ Fold: "curahhujan", unique.
//   salju · iklim · suhu · derajat · bukit · lembah · danau · gurun · gua ·
//   ombak · lereng · teluk · tebing · lumpur · rawa · semak · padang · tandus ·
//   kemarau — all roots, no affix, nothing to strip.
//     ⚠️ `beku` is glossed "hard with cold" because `es` (u6, ice) accepts
//     "frozen". A4's rule, caught by hand.
//     ⚠️ `padang` is NOT `panggung` (u35, a stage) — two letters apart and worth
//     keeping separate; the hint says so.
//     ⚠️ `semak` is NOT `sesak` or `sejak` (u36); the hint says so.
//
// ⛔ NOT CARDED:
//   `musim kemarau` as a phrase — `musim` (u8) is taught and `kemarau` alone is
//     carded, so the phrase is readable off the parts. A6's clause.
//   `pemanasan global` · `udara` · `iklim`'s problem side — u65's (see the
//     boundary above).
//   `salju`'s verb `bersalju` (snowy) — a ber- adjective off a root carded in the
//     same lesson, with nothing in it the learner cannot build. Named in the
//     hint.
//   `es` (ice) — already taught at u6.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT76 = {
  id: "id-u76",
  lang: "id",
  title: "Bentang alam dan iklim",
  order: 76,
  stage: "b1",
  lessons: [
    {
      id: "id-u76l1",
      unit: 76,
      lesson: 1,
      title: "Iklim, suhu, dan salju",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about climate rather than today's weather — the temperature in degrees, how much rain falls, the dry season, and snow.",
      items: [
        { id: "id-u76l1-iklim", type: "vocab", front: "iklim", reading: "iklim", meaning: "climate", example: { jp: "Iklim di pulau itu panas dan basah setiap bulan.", en: "The climate on that island is hot and wet every month." }, accept: ["the long-term weather of a place", "weather patterns over years", "a climatic zone"], drill: { jp: "Iklim di gunung itu lebih dingin dan kering", en: "The climate in those mountains is colder and drier" }, hint: "EEK-leem. Arabic in origin. ⚠️ KEEP IT APART FROM cuaca, WHICH YOU KNOW AS WEATHER: cuaca is today, iklim is the pattern over years. Perubahan iklim is climate change, and it is the phrase Indonesian news uses where English says global warming — you met pemanasan global for that in the environment unit." },
        { id: "id-u76l1-suhu", type: "vocab", front: "suhu", reading: "suhu", meaning: "temperature", example: { jp: "Suhu di kota itu turun pada malam hari.", en: "The temperature in that city falls at night." }, accept: ["how hot or cold it is", "a measured heat level", "the heat reading"], drill: { jp: "Suhu air di danau itu sangat dingin", en: "The water temperature in that lake is very cold" }, hint: "SOO-hoo. ⚠️ A MEASUREMENT, not a feeling — panas and dingin, which you know, are how it feels, suhu is the number. Suhu badan is body temperature, which is what a doctor takes; suhu udara, using the udara you met in the environment unit, is the air temperature." },
        { id: "id-u76l1-derajat", type: "vocab", front: "derajat", reading: "derajat", meaning: "a degree", example: { jp: "Suhu di luar tiga puluh dua derajat pagi ini.", en: "The temperature outside is thirty-two degrees this morning." }, accept: ["a unit of temperature", "one degree on a scale", "degrees of heat"], drill: { jp: "Suhu di gunung itu hanya lima derajat", en: "The temperature in those mountains is only five degrees" }, hint: "duh-rah-JAHT. Arabic in origin. ⚠️ It also means a degree of RANK or standing — derajat yang tinggi, high standing — which is its older sense and still common. Indonesian uses Celsius throughout, so thirty-two derajat is a normal Jakarta morning and five would be alarming." },
        { id: "id-u76l1-salju", type: "vocab", front: "salju", reading: "salju", meaning: "snow", example: { jp: "Di negara itu ada salju selama tiga bulan setiap tahun.", en: "In that country there is snow for three months every year." }, accept: ["snowfall", "snow on the ground", "frozen precipitation"], drill: { jp: "Anak itu belum pernah melihat salju", en: "That child has never seen snow" }, hint: "SAHL-joo. Arabic in origin. ⚠️ **THE WORD THIS WHOLE LANGUAGE HAS BEEN MISSING** — and for an obvious reason: Indonesia has almost none. There is permanent snow on exactly one mountain, Puncak Jaya in Papua, and it is shrinking. So salju is a word most Indonesians know from films and from talking about abroad. Bersalju means snowy, and turun salju is it is snowing." },
        { id: "id-u76l1-kemarau", type: "vocab", front: "kemarau", reading: "kemarau", meaning: "the dry season", example: { jp: "Kemarau tahun ini lebih panjang dari biasanya.", en: "This year's dry season is longer than usual." }, accept: ["the season without rain", "the dry half of the year", "a dry spell"], drill: { jp: "Sungai kecil itu kering selama kemarau", en: "That small river dries up during the dry season" }, hint: "kuh-mah-RAU, the au as in HOW. ⚠️ INDONESIA HAS TWO SEASONS, NOT FOUR, and these are their names: musim kemarau, the dry season, and musim hujan, the rainy one — both using the musim you know. Roughly April to October and October to April, though climate change has made them unreliable, which is itself a news story there." },
        { id: "id-u76l1-curahhujan", type: "vocab", front: "curah hujan", reading: "curahhujan", meaning: "how much rain falls", example: { jp: "Curah hujan di daerah itu sangat besar pada bulan Januari.", en: "Rainfall in that region is very heavy in January." }, accept: ["the amount of rain", "precipitation measured", "the rain total"], drill: { jp: "Curah hujan tahun ini lebih kecil dari biasanya", en: "Rainfall this year is lower than usual" }, hint: "CHOO-rah HOO-jan, c as CH. Curah means an outpouring and never appears alone; hujan, rain, is already yours. ⚠️ Glossed how much rain falls because hujan's own card already accepts *rainfall* — two cards may never share one answer. It is a measured quantity, so it goes with besar and kecil rather than banyak." },
      ],
    },
    {
      id: "id-u76l2",
      unit: 76,
      lesson: 2,
      title: "Bukit, lembah, dan tebing",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Describe the shape of the land between a mountain and a plain — hills, valleys, slopes, cliffs, caves and open ground.",
      items: [
        { id: "id-u76l2-bukit", type: "vocab", front: "bukit", reading: "bukit", meaning: "a hill", example: { jp: "Ada rumah kecil di atas bukit itu.", en: "There is a small house on top of that hill." }, accept: ["a rise in the land", "a small elevation", "high ground below a mountain"], drill: { jp: "Kami berjalan ke bukit itu pagi ini", en: "We walked to that hill this morning" }, hint: "BOO-keet. ⚠️ Smaller than gunung, which you know as a mountain — and the line in Indonesian is drawn lower than in English, so a bukit can be substantial. Perbukitan is hill country, using the per-…-an frame you learned in u71. Bukit Tinggi, a town in Sumatra, is literally High Hill." },
        { id: "id-u76l2-lembah", type: "vocab", front: "lembah", reading: "lembah", meaning: "a valley", example: { jp: "Desa itu ada di lembah antara dua gunung.", en: "That village is in a valley between two mountains." }, accept: ["low ground between hills", "a dale", "a hollow in the land"], drill: { jp: "Sungai itu berjalan melalui lembah yang besar", en: "That river runs through a big valley" }, hint: "LUHM-bah, the first e swallowed. ⚠️ Do not confuse it with lembab, damp, which is one letter away and which you will also hear constantly in Indonesia. A lembah is the low ground itself; the sides of it are lereng, two cards along. Lembah Baliem in Papua is one of the country's famous landscapes." },
        { id: "id-u76l2-lereng", type: "vocab", front: "lereng", reading: "lereng", meaning: "a slope", example: { jp: "Petani itu menanam di lereng gunung yang tinggi.", en: "That farmer plants on the high mountain slope." }, accept: ["the side of a hill", "sloping ground", "a hillside"], drill: { jp: "Rumah mereka ada di lereng bukit kecil", en: "Their house is on the slope of a small hill" }, hint: "LUH-rehng, ng as one hum. ⚠️ Specifically the SIDE of a raised piece of land — lereng gunung, a mountainside — and not a gradient in general. Indonesia's volcanic slopes are the most fertile land it has and are farmed right up to dangerous heights, so lereng is a word about agriculture as much as geography." },
        { id: "id-u76l2-tebing", type: "vocab", front: "tebing", reading: "tebing", meaning: "a cliff", example: { jp: "Pantai itu punya tebing tinggi dan batu besar.", en: "That beach has high cliffs and big rocks." }, accept: ["a sheer rock face", "a steep drop", "a precipice"], drill: { jp: "Jalan kecil itu ada di atas tebing", en: "That small road runs along the top of a cliff" }, hint: "TUH-beeng. ⚠️ A STEEP or VERTICAL face, where a lereng merely slopes — the difference matters if somebody is giving you directions. It covers a sea cliff, a river bank cut steep, and a quarry face. Memanjat tebing, using the memanjat you know, is rock climbing." },
        { id: "id-u76l2-gua", type: "vocab", front: "gua", reading: "gua", meaning: "a cave", example: { jp: "Ada gua besar di lereng gunung itu.", en: "There is a big cave on the slope of that mountain." }, accept: ["a cavern", "a hollow in rock", "an underground chamber"], drill: { jp: "Mereka memasuki gua itu dengan lampu kecil", en: "They entered that cave with a small lamp" }, hint: "GOO-a, two syllables. ⚠️ **AND WATCH THE SPELLING AGAINST gue FROM THE SLANG UNIT** — gua with an a is a cave, gue with an e is the Jakarta *I*, and confusingly gua is ALSO sometimes written for the pronoun. Context separates them completely in practice. Indonesia's limestone is full of them: Gua Jomblang, Gua Gong." },
        { id: "id-u76l2-padang", type: "vocab", front: "padang", reading: "padang", meaning: "an open plain", example: { jp: "Di padang itu tidak ada pohon dan tidak ada rumah.", en: "On that plain there are no trees and no houses." }, accept: ["a flat open stretch of land", "a field or grassland", "open country"], drill: { jp: "Pasukan itu berjalan melalui padang yang besar", en: "That force marched across a big plain" }, hint: "PAH-dang. ⚠️ ONE LETTER FROM panggung, A STAGE, WHICH YOU KNOW — keep the single ng. A padang is flat open ground: padang rumput is grassland, padang pasir is literally a sand plain and is the ordinary Indonesian for a desert, which makes the next lesson's gurun the more formal word. Padang is also a city in Sumatra and the name of its famous cuisine." },
      ],
    },
    {
      id: "id-u76l3",
      unit: 76,
      lesson: 3,
      title: "Danau, teluk, dan ombak",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name the water in a landscape — a lake, a bay, the waves, a waterfall — and the wet ground around it.",
      items: [
        { id: "id-u76l3-danau", type: "vocab", front: "danau", reading: "danau", meaning: "a lake", example: { jp: "Danau itu ada di atas gunung dan airnya sangat dingin.", en: "That lake is up on a mountain and its water is very cold." }, accept: ["an inland body of water", "a loch", "still fresh water"], drill: { jp: "Kami melihat danau besar itu dari bukit", en: "We saw that big lake from the hill" }, hint: "DAH-nau, the au as in HOW. ⚠️ Not laut, which you know as the sea — a danau is inland and fresh. Indonesia's Danau Toba in Sumatra is the largest volcanic lake on earth, formed by an eruption that nearly ended the human species, and every Indonesian schoolchild knows it." },
        { id: "id-u76l3-teluk", type: "vocab", front: "teluk", reading: "teluk", meaning: "a bay", example: { jp: "Ada banyak kapal kecil di teluk itu.", en: "There are many small boats in that bay." }, accept: ["an inlet of the sea", "a gulf", "a sheltered curve of coast"], drill: { jp: "Teluk itu aman dari ombak besar", en: "That bay is safe from big waves" }, hint: "TUH-look. ⚠️ Any inward curve of coastline, from a small cove to the Persian Gulf, which Indonesian calls Teluk Persia. It is in dozens of place names — Teluk Jakarta, Teluk Bone — and a teluk is where harbours are built, which is why it matters in an archipelago." },
        { id: "id-u76l3-ombak", type: "vocab", front: "ombak", reading: "ombak", meaning: "a wave", example: { jp: "Ombak di pantai itu terlalu besar untuk anak-anak.", en: "The waves at that beach are too big for children." }, accept: ["a breaker on the sea", "surf", "a swell on the water"], drill: { jp: "Ombak besar itu terdengar dari rumah kami", en: "Those big waves are audible from our house" }, hint: "OM-bak. ⚠️ A wave of WATER only — for a wave of the hand Indonesian says melambaikan tangan, and for a radio wave gelombang. Indonesia's surf is world famous, so ombak besar is on every beach warning sign, along with the bahaya you know." },
        { id: "id-u76l3-airterjun", type: "vocab", front: "air terjun", reading: "airterjun", meaning: "a waterfall", example: { jp: "Air terjun itu ada di hutan dekat desa kecil.", en: "That waterfall is in the forest near a small village." }, accept: ["a falls", "water dropping from a height", "a cascade"], drill: { jp: "Air terjun itu terdengar dari jalan kecil", en: "That waterfall is audible from the small road" }, hint: "AH-eer tuhr-JOON. Air, water, is already yours; terjun means to plunge or dive and is not taught alone — so literally plunging-water. ⚠️ Worth noting the ter- here is NOT the stative ter- you learned in u70: terjun is simply a verb that begins with those letters. Air Terjun Madakaripura in Java falls two hundred metres." },
        { id: "id-u76l3-rawa", type: "vocab", front: "rawa", reading: "rawa", meaning: "a swamp", example: { jp: "Rawa itu penuh lumpur dan air kotor.", en: "That swamp is full of mud and dirty water." }, accept: ["marshland", "boggy ground", "wetland"], drill: { jp: "Mereka tidak bisa berjalan melalui rawa itu", en: "They could not walk through that swamp" }, hint: "RAH-wa. ⚠️ Indonesia has enormous areas of it — the peat swamps of Kalimantan and Sumatra are among the largest on earth and hold vast amounts of the karbon you met in the environment unit, which is why draining them is a climate story. Rawa-rawa, doubled, means swampland generally." },
        { id: "id-u76l3-lumpur", type: "vocab", front: "lumpur", reading: "lumpur", meaning: "mud", example: { jp: "Jalan di desa itu jadi lumpur selama musim hujan.", en: "The road in that village turns to mud during the rainy season." }, accept: ["wet soft earth", "mire", "sludge"], drill: { jp: "Sepatu anak itu penuh lumpur dari rawa", en: "That child's shoes are full of mud from the swamp" }, hint: "LOOM-poor. ⚠️ Not tanah, which you know as soil, and not debu, which you know as dust: lumpur is specifically wet and soft. Indonesia has a famous one — the Lusi mud volcano in East Java has been erupting lumpur continuously since 2006 and has buried whole villages." },
      ],
    },
    {
      id: "id-u76l4",
      unit: 76,
      lesson: 4,
      title: "Beku, mencair, dan tandus",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Describe extremes of land and temperature — frozen and melting, desert and barren ground, and the scrub that grows on it.",
      items: [
        { id: "id-u76l4-beku", type: "vocab", front: "beku", reading: "beku", meaning: "hard with cold", example: { jp: "Air di danau itu beku selama musim dingin.", en: "The water in that lake is frozen through the winter." }, accept: ["solid from cold", "iced over", "frozen stiff"], drill: { jp: "Tanah di gunung tinggi itu beku pada malam", en: "The ground on that high mountain is frozen at night" }, hint: "BUH-koo. ⚠️ Glossed hard with cold because es, which you know as ice, already accepts *frozen* — two cards may never share one answer. Beku is a STATE; membeku, the next card, is the process. It also goes figurative: hubungan beku, a frozen relationship, and dana beku, frozen funds." },
        { id: "id-u76l4-membeku", type: "vocab", front: "membeku", reading: "membeku", meaning: "to freeze", example: { jp: "Air di luar membeku karena suhu turun di bawah nol.", en: "The water outside freezes because the temperature falls below zero." }, accept: ["to turn solid with cold", "to ice over", "to set hard from cold"], drill: { jp: "Air di gua itu membeku setiap malam", en: "The water in that cave freezes every night" }, hint: "muhm-BUH-koo. Beku with the me- prefix, making the process out of the state — so beku is frozen and membeku is to become so. ⚠️ Intransitive: the thing freezes itself. To freeze something is membekukan, with the -kan you learned in u70, and that is also the verb for freezing a bank account." },
        { id: "id-u76l4-mencair", type: "vocab", front: "mencair", reading: "mencair", meaning: "to melt", example: { jp: "Salju di gunung itu mencair karena suhu naik.", en: "The snow on that mountain is melting because the temperature is rising." }, accept: ["to turn liquid", "to thaw", "to run as liquid"], drill: { jp: "Salju itu mencair sebelum sampai ke tanah", en: "That snow melts before it reaches the ground" }, hint: "muhn-CHAH-eer, c as CH. From cair, liquid, not taught alone. ⚠️ The exact opposite number of membeku, which is why the two sit side by side. Indonesia meets the word mostly through news of glaciers and of Puncak Jaya's shrinking snow. Mencairkan, with -kan, is to melt something — or to release funds, the mirror of membekukan." },
        { id: "id-u76l4-gurun", type: "vocab", front: "gurun", reading: "gurun", meaning: "a desert", example: { jp: "Di gurun itu curah hujan hampir tidak ada.", en: "In that desert there is almost no rainfall." }, accept: ["arid land with no water", "a sand waste", "desert country"], drill: { jp: "Pasukan itu berjalan melalui gurun selama dua hari", en: "That force marched through the desert for two days" }, hint: "GOO-roon. ⚠️ Indonesia has no desert at all, so like salju this is a word for talking about elsewhere — and in everyday speech Indonesians more often say padang pasir, sand plain, using the padang you met in l2. Gurun is the geographical term and the one in a textbook. Gurun Sahara." },
        { id: "id-u76l4-tandus", type: "vocab", front: "tandus", reading: "tandus", meaning: "barren", example: { jp: "Tanah di lereng itu tandus karena orang menebang semua pohon.", en: "The soil on that slope is barren because people felled all the trees." }, accept: ["unable to grow anything", "infertile", "stripped of life"], drill: { jp: "Bukit itu tandus setelah kemarau yang panjang", en: "That hill is barren after a long dry season" }, hint: "TAHN-doos. ⚠️ Of LAND, never of a person — and it carries a strong implication of having BECOME so, through erosion, felling or overuse, which ties it straight to the kerusakan you met in the environment unit. Its opposite is subur, fertile, and Indonesians use the pair constantly about their own volcanic soil." },
        { id: "id-u76l4-semak", type: "vocab", front: "semak", reading: "semak", meaning: "a bush", example: { jp: "Ada semak kecil di padang yang tandus itu.", en: "There are small bushes on that barren plain." }, accept: ["scrub", "a low shrub", "bushy growth"], drill: { jp: "Satwa kecil itu tinggal di semak dekat rawa", en: "That small animal lives in the scrub near the swamp" }, hint: "SUH-mak. ⚠️ Keep it apart from two words you know that look close: sejak, ever since, and sesak, cramped. A semak is a low woody plant or the scrub it forms — semak-semak, doubled, is a thicket — and it is what grows back first on land that has gone tandus. Not pohon, a tree, and not tanaman, a cultivated plant." },
      ],
    },
  ],
};
