// ID Unit 7 — Kota dan tempat (slot: places) — A1
// The town, where things are in it, how you cross it, and how to ask the way.
// This is block 1's last unit, so it is also where the affix convention gets its
// clearest demonstration: `jalan` (street) and `berjalan` (to walk) are two cards
// because knowing one tells you nothing about the other — id/unit1.js §3. The
// same root also sits inside the goodbye selamat jalan, taught earlier, which is
// three words off one root and no lexeme taught twice.
// lang/unit/lesson are stamped in src/data/index.js.
export const ID_UNIT7 = {
  id: "id-u7",
  lang: "id",
  title: "Kota dan tempat",
  order: 7,
  stage: "a1",
  lessons: [
    {
      id: "id-u7l1",
      unit: 7,
      lesson: 1,
      title: "Di kota",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the places in a town and say which one you are going to.",
      items: [
        { id: "id-u7l1-kota", type: "vocab", front: "kota", reading: "kota", meaning: "city", example: { jp: "Saya tinggal di kota.", en: "I live in the city." }, accept: ["town", "a city", "urban area"], drill: { jp: "Saya tinggal di kota Jakarta", en: "I live in the city of Jakarta" }, hint: "KOH-ta. Put it before a name and it means \"the city of\": kota Jakarta. It covers both town and city — Indonesian does not split them by size." },
        { id: "id-u7l1-pasar", type: "vocab", front: "pasar", reading: "pasar", meaning: "market", example: { jp: "Ibu saya pergi ke pasar pagi.", en: "My mother goes to the market in the morning." }, accept: ["a market", "bazaar", "marketplace"], drill: { jp: "Saya pergi ke pasar sekarang", en: "I am going to the market now" }, hint: "PAH-sar. The same word English borrowed as \"bazaar\", through Persian. A traditional pasar opens before dawn and is finished by mid-morning, which is why pagi keeps turning up beside it." },
        { id: "id-u7l1-sekolah", type: "vocab", front: "sekolah", reading: "sekolah", meaning: "school", example: { jp: "Adik saya belajar di sekolah.", en: "My younger sibling studies at school." }, accept: ["a school", "schooling"], drill: { jp: "Anak saya pergi ke sekolah", en: "My child goes to school" }, hint: "suh-KOH-lah, swallowed e, final h breathed. From Dutch school. The people in it you already know: a pelajar studies there and a guru teaches there." },
        { id: "id-u7l1-kantor", type: "vocab", front: "kantor", reading: "kantor", meaning: "office", example: { jp: "Ayah saya bekerja di kantor.", en: "My father works in an office." }, accept: ["an office", "bureau", "workplace"], drill: { jp: "Saya bekerja di kantor sekarang", en: "I work in the office now" }, hint: "KAHN-tor, from Dutch kantoor. Another of the Dutch borrowings that fill Indonesian's vocabulary for offices, houses and machinery." },
        { id: "id-u7l1-jalan", type: "vocab", front: "jalan", reading: "jalan", meaning: "street", example: { jp: "Rumah saya di jalan Bali.", en: "My house is on Bali Street." }, accept: ["road", "a street", "way", "path"], drill: { jp: "Kucing tidur di jalan", en: "The cat sleeps in the street" }, hint: "JAH-lahn. You have met this root in the goodbye selamat jalan, said to whoever is setting off. As a noun on its own it is a street — and it is abbreviated Jl. on every address in the country." },
        { id: "id-u7l1-toko", type: "vocab", front: "toko", reading: "toko", meaning: "shop", example: { jp: "Saya pesan teh di toko.", en: "I order tea at the shop." }, accept: ["a shop", "store", "outlet"], drill: { jp: "Saya pergi ke toko sekarang", en: "I am going to the shop now" }, hint: "TOH-koh. A proper shop with walls and shelves, where a warung is a small stall — the difference matters when you are asking where to buy something." },
      ],
    },
    {
      id: "id-u7l2",
      unit: 7,
      lesson: 2,
      title: "Di mana tempatnya?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask where a place is and answer with a position word instead of pointing.",
      items: [
        { id: "id-u7l2-tempat", type: "vocab", front: "tempat", reading: "tempat", meaning: "place", example: { jp: "Saya mau pergi ke tempat kamu.", en: "I want to go to your place." }, accept: ["a place", "spot", "location", "venue"], drill: { jp: "Saya pergi ke tempat Budi", en: "I am going to Budi's place" }, hint: "TUHM-pat, swallowed e. The general word for a location, and tempat kamu is \"your place\" exactly as in English. It also means a seat: tempat duduk, a place to sit." },
        { id: "id-u7l2-dekat", type: "vocab", front: "dekat", reading: "dekat", meaning: "near", example: { jp: "Rumah saya dekat pasar.", en: "My house is near the market." }, accept: ["close", "nearby", "close to", "next to"], drill: { jp: "Sekolah saya dekat rumah saya", en: "My school is near my house" }, hint: "DUH-kat, swallowed e, swallowed final k. No preposition needed: dekat pasar is simply \"near the market\"." },
        { id: "id-u7l2-jauh", type: "vocab", front: "jauh", reading: "jauh", meaning: "far", example: { jp: "Kantor saya jauh dari rumah.", en: "My office is far from home." }, accept: ["distant", "a long way", "far away"], drill: { jp: "Pasar jauh dari rumah saya", en: "The market is far from my house" }, hint: "JAH-ooh, two beats and a breathed h. The opposite of dekat, and unlike dekat it usually takes dari: jauh dari rumah." },
        { id: "id-u7l2-sebelah", type: "vocab", front: "sebelah", reading: "sebelah", meaning: "next to", example: { jp: "Toko sebelah warung saya.", en: "The shop is next to my stall." }, accept: ["beside", "alongside", "side", "adjacent"], drill: { jp: "Toko sebelah rumah nenek saya", en: "The shop is next to my grandmother's house" }, hint: "suh-buh-LAH — two swallowed e's in a row, which is very Indonesian. It also means \"side\", so sebelah kiri is \"the left-hand side\"." },
        { id: "id-u7l2-depan", type: "vocab", front: "depan", reading: "depan", meaning: "in front", example: { jp: "Kucing saya tidur di depan pintu.", en: "My cat sleeps in front of the door." }, accept: ["front", "ahead", "in front of"], drill: { jp: "Saya tunggu di depan toko", en: "I will wait in front of the shop" }, hint: "duh-PAHN, swallowed e. It needs di in front of it to mean a position: di depan pintu. On its own with a time word it means \"next\" — as in the week ahead." },
        { id: "id-u7l2-belakang", type: "vocab", front: "belakang", reading: "belakang", meaning: "behind", example: { jp: "Dapur di belakang rumah saya.", en: "The kitchen is behind my house." }, accept: ["back", "rear", "at the back", "behind of"], drill: { jp: "Kucing tidur di belakang kamar", en: "The cat sleeps behind the room" }, hint: "buh-lah-KAHNG — swallowed e, then the hum at the end. The pair to depan, and it works the same way: di belakang rumah." },
      ],
    },
    {
      id: "id-u7l3",
      unit: 7,
      lesson: 3,
      title: "Naik apa?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how you travel to a place, including on foot.",
      items: [
        { id: "id-u7l3-naik", type: "vocab", front: "naik", reading: "naik", meaning: "to ride", example: { jp: "Saya naik kereta ke kantor.", en: "I take the train to the office." }, accept: ["to go up", "to board", "to take", "climb"], drill: { jp: "Saya naik sepeda ke pasar", en: "I ride a bicycle to the market" }, hint: "NAH-ee', two beats then the swallowed k. Literally \"to go up\" — you go UP onto any vehicle in Indonesian, so naik is the verb for taking a bus, a train or a plane alike." },
        { id: "id-u7l3-mobil", type: "vocab", front: "mobil", reading: "mobil", meaning: "car", example: { jp: "Ayah saya punya mobil.", en: "My father has a car." }, accept: ["a car", "automobile", "vehicle"], drill: { jp: "Saya naik mobil ke kota", en: "I go by car to the city" }, hint: "MOH-bil, from Dutch automobiel with the front chopped off. Stress the first syllable, not the second." },
        { id: "id-u7l3-sepeda", type: "vocab", front: "sepeda", reading: "sepeda", meaning: "bicycle", example: { jp: "Adik saya naik sepeda ke sekolah.", en: "My younger sibling rides a bicycle to school." }, accept: ["bike", "a bicycle", "cycle"], drill: { jp: "Saya punya sepeda dan mobil", en: "I have a bicycle and a car" }, hint: "suh-PEH-da — swallowed e first, clear eh second: the two e's side by side in one word. From Dutch velocipede, which is a longer journey than the bicycle itself." },
        { id: "id-u7l3-kereta", type: "vocab", front: "kereta", reading: "kereta", meaning: "train", example: { jp: "Kereta ke Bali jauh.", en: "The train to Bali is a long way." }, accept: ["a train", "carriage", "railway"], drill: { jp: "Saya naik kereta ke Jakarta", en: "I take the train to Jakarta" }, hint: "kuh-REH-ta — again a swallowed e then a clear one. Strictly it means any wheeled carriage; the full name for a train is kereta api, \"fire carriage\"." },
        { id: "id-u7l3-motor", type: "vocab", front: "motor", reading: "motor", meaning: "motorbike", example: { jp: "Banyak orang naik motor di Jakarta.", en: "Many people ride motorbikes in Jakarta." }, accept: ["motorcycle", "scooter", "a motorbike"], drill: { jp: "Budi naik motor ke kantor", en: "Budi rides a motorbike to the office" }, hint: "MOH-tor. In Indonesian it means the whole motorbike, not the engine inside it — so do not read it as English \"motor\". It is how most of the country actually gets to work." },
        { id: "id-u7l3-berjalan", type: "vocab", front: "berjalan", reading: "berjalan", meaning: "to walk", example: { jp: "Saya berjalan ke pasar pagi.", en: "I walk to the market in the morning." }, accept: ["walk", "to go on foot", "to proceed", "to run (of a machine)"], drill: { jp: "Saya berjalan ke sekolah sekarang", en: "I am walking to school now" }, hint: "The root is jalan, the street you met in this unit, and ber- turns it into the thing you do on one. So jalan is a road and berjalan is walking — one root, two words, and neither tells you the other. It also means \"to be running\" of a machine or a plan." },
      ],
    },
    {
      id: "id-u7l4",
      unit: 7,
      lesson: 4,
      title: "Mencari jalan",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Ask for directions and follow a simple answer through a town.",
      items: [
        { id: "id-u7l4-kiri", type: "vocab", front: "kiri", reading: "kiri", meaning: "left", example: { jp: "Toko di kiri jalan.", en: "The shop is on the left of the street." }, accept: ["left side", "on the left", "to the left"], drill: { jp: "Rumah saya di kiri jalan", en: "My house is on the left of the street" }, hint: "KEE-ree, both r's tapped once. Pair it with sebelah for the natural phrase: sebelah kiri, the left-hand side." },
        { id: "id-u7l4-kanan", type: "vocab", front: "kanan", reading: "kanan", meaning: "right", example: { jp: "Pasar di kanan jalan.", en: "The market is on the right of the street." }, accept: ["right side", "on the right", "to the right"], drill: { jp: "Toko di kanan pasar", en: "The shop is to the right of the market" }, hint: "KAH-nahn. Only the direction — Indonesian never uses it for \"correct\" the way English does, so there is no ambiguity to untangle here." },
        { id: "id-u7l4-lurus", type: "vocab", front: "lurus", reading: "lurus", meaning: "straight ahead", example: { jp: "Jalan lurus dan belok kanan.", en: "Go straight and turn right." }, accept: ["straight", "straight on", "direct"], drill: { jp: "Jalan lurus ke pasar", en: "Go straight to the market" }, hint: "LOO-roos. On its own it is an instruction: lurus! means \"keep going straight\", which is most of what you will hear back when you ask the way." },
        { id: "id-u7l4-belok", type: "vocab", front: "belok", reading: "belok", meaning: "to turn", example: { jp: "Belok kiri di depan toko!", en: "Turn left in front of the shop!" }, accept: ["turn", "to bend", "to veer"], drill: { jp: "Belok kanan di depan sekolah", en: "Turn right in front of the school" }, hint: "BEH-lo' — a clear eh, then the swallowed k. Give it the direction straight after, with no preposition: belok kiri, belok kanan." },
        { id: "id-u7l4-masuk", type: "vocab", front: "masuk", reading: "masuk", meaning: "to enter", example: { jp: "Silakan masuk!", en: "Please come in!" }, accept: ["enter", "to go in", "come in", "to get in"], drill: { jp: "Silakan masuk dan duduk", en: "Please come in and sit down" }, hint: "MAH-soo', final k swallowed. silakan masuk is what you will be told at every doorway, and it is the polite invitation rather than a command." },
        { id: "id-u7l4-keluar", type: "vocab", front: "keluar", reading: "keluar", meaning: "to exit", example: { jp: "Saya keluar dari kantor sore.", en: "I leave the office in the afternoon." }, accept: ["to go out", "exit", "to leave", "go out"], drill: { jp: "Saya keluar dari rumah pagi", en: "I leave the house in the morning" }, hint: "kuh-LOO-ar, swallowed e. The pair to masuk, and it takes dari for what you are leaving: keluar dari kantor. Written solid as one word — keep it that way, because the spaced spelling would fold to the same answer key and the two cards would accept each other." },
      ],
    },
  ],
};
