// ID Unit 4 — Keluarga (slot: family) — A1
// The family, the extended family, partners and friends, and the home they live
// in. Kinship is where Indonesian's SENIORITY system shows: kakak and adik split
// siblings by age rather than by sex, so there is no word for "brother" — that is
// a real gap in the learner's English intuition and it gets said out loud.
// ⚠️ REDUPLICATION IS HANDLED HERE, PER id/unit1.js §5. `anak` is a card and
// `anak-anak` is NOT — the plural is inflection, one lexeme, and it lives in the
// hint. The doubled words that DO get cards (sama-sama, hati-hati) are the ones
// that are not plurals.
// lang/unit/lesson are stamped in src/data/index.js.
export const ID_UNIT4 = {
  id: "id-u4",
  lang: "id",
  title: "Keluarga",
  order: 4,
  stage: "a1",
  lessons: [
    {
      id: "id-u4l1",
      unit: 4,
      lesson: 1,
      title: "Ibu, ayah dan anak",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the people in your immediate family and say which sibling is older.",
      items: [
        { id: "id-u4l1-ibu", type: "vocab", front: "ibu", reading: "ibu", meaning: "mother", example: { jp: "Ibu saya tinggal di Bali.", en: "My mother lives in Bali." }, accept: ["mum", "mom", "mother of"], drill: { jp: "Ibu saya bekerja di Jakarta", en: "My mother works in Jakarta" }, hint: "EE-boo. It is also the polite way to address any adult woman, the way English once used \"ma'am\" — so Ibu Siti is roughly \"Mrs Siti\", and you will hear it constantly in shops." },
        { id: "id-u4l1-ayah", type: "vocab", front: "ayah", reading: "ayah", meaning: "father", example: { jp: "Ayah saya guru.", en: "My father is a teacher." }, accept: ["dad", "papa", "father of"], drill: { jp: "Ayah saya mengajar di Jakarta", en: "My father teaches in Jakarta" }, hint: "AH-yah, with y as a consonant. This is the plain kinship word. The word bapak covers father too but is mainly a respectful \"sir\", which is a different job." },
        { id: "id-u4l1-anak", type: "vocab", front: "anak", reading: "anak", meaning: "child", example: { jp: "Anak saya suka kucing.", en: "My child likes cats." }, accept: ["son", "daughter", "kid", "offspring"], drill: { jp: "Anak saya belajar bahasa Indonesia", en: "My child is learning Indonesian" }, hint: "AH-na', final k swallowed. No gender, so anak is a son or a daughter. Number is unmarked too — and when you must insist on more than one, Indonesian DOUBLES the word: anak-anak, children. That doubling is the only plural the language has." },
        { id: "id-u4l1-kakak", type: "vocab", front: "kakak", reading: "kakak", meaning: "older sibling", example: { jp: "Kakak saya mahasiswa.", en: "My older sibling is a university student." }, accept: ["big brother", "big sister", "older brother", "older sister"], drill: { jp: "Kakak saya tinggal di Bali", en: "My older sibling lives in Bali" }, hint: "KAH-ka'. Indonesian splits siblings by AGE, not by sex — so there is no word for \"brother\". If the sex matters you add it, but usually nobody does, because seniority is the part that decides how you speak to them." },
        { id: "id-u4l1-adik", type: "vocab", front: "adik", reading: "adik", meaning: "younger sibling", example: { jp: "Adik saya pelajar.", en: "My younger sibling is a school pupil." }, accept: ["little brother", "little sister", "younger brother", "younger sister"], drill: { jp: "Adik saya suka kucing juga", en: "My younger sibling likes cats too" }, hint: "AH-di', the pair to kakak. Both are also used for people outside the family who are simply older or younger than you — a friendly way to address a stranger whose name you do not know." },
        { id: "id-u4l1-saudara", type: "vocab", front: "saudara", reading: "saudara", meaning: "relative", example: { jp: "Saya punya banyak saudara.", en: "I have a lot of relatives." }, accept: ["sibling", "brother or sister", "kin", "family member"], drill: { jp: "Saudara saya tinggal di Jakarta", en: "My relative lives in Jakarta" }, hint: "sow-DAH-ra. The catch-all for kin when age is not the point, and the word you reach for when English would say \"siblings\". In formal address it also means \"sir or madam\"." },
      ],
    },
    {
      id: "id-u4l2",
      unit: 4,
      lesson: 2,
      title: "Nenek, kakek dan keluarga",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about relatives beyond your own household and say where each of them lives.",
      items: [
        { id: "id-u4l2-keluarga", type: "vocab", front: "keluarga", reading: "keluarga", meaning: "family", example: { jp: "Keluarga saya tinggal di Bali.", en: "My family lives in Bali." }, accept: ["a family", "household", "relatives"], drill: { jp: "Keluarga Budi tinggal di Jakarta", en: "Budi's family lives in Jakarta" }, hint: "kuh-loo-AR-ga, with the first e swallowed. In Indonesia it normally means the extended family, not just the people under one roof — the assumption runs the other way from English." },
        { id: "id-u4l2-nenek", type: "vocab", front: "nenek", reading: "nenek", meaning: "grandmother", example: { jp: "Nenek saya sangat baik.", en: "My grandmother is very kind." }, accept: ["granny", "grandma", "old woman"], drill: { jp: "Nenek saya tinggal di Bali", en: "My grandmother lives in Bali" }, hint: "NEH-nay', and this time the first e is the OTHER e — a clear eh, not a swallowed uh. Indonesian spells both the same way and gives you no clue which is which; this is the word to remember that by." },
        { id: "id-u4l2-kakek", type: "vocab", front: "kakek", reading: "kakek", meaning: "grandfather", example: { jp: "Kakek saya punya kucing.", en: "My grandfather has a cat." }, accept: ["grandpa", "granddad", "old man"], drill: { jp: "Kakek saya bekerja di Jakarta", en: "My grandfather works in Jakarta" }, hint: "KAH-kay', ending in the swallowed k. Careful with kakak, the older sibling — one vowel apart and a generation apart." },
        { id: "id-u4l2-paman", type: "vocab", front: "paman", reading: "paman", meaning: "uncle", example: { jp: "Paman saya guru bahasa Indonesia.", en: "My uncle is an Indonesian teacher." }, accept: ["an uncle"], drill: { jp: "Paman saya mengajar di Bali", en: "My uncle teaches in Bali" }, hint: "PAH-mahn. In everyday speech many Indonesians use om instead, borrowed from Dutch — paman is the standard word you will meet in writing." },
        { id: "id-u4l2-bibi", type: "vocab", front: "bibi", reading: "bibi", meaning: "aunt", example: { jp: "Bibi saya mahasiswa.", en: "My aunt is a university student." }, accept: ["an aunt", "auntie"], drill: { jp: "Bibi saya suka kucing juga", en: "My aunt likes cats too" }, hint: "BEE-bee, the pair to paman. The Dutch-borrowed everyday alternative is tante. Neither word cares which side of the family the aunt is on." },
        { id: "id-u4l2-cucu", type: "vocab", front: "cucu", reading: "cucu", meaning: "grandchild", example: { jp: "Nenek saya punya banyak cucu.", en: "My grandmother has many grandchildren." }, accept: ["grandson", "granddaughter", "grandchildren"], drill: { jp: "Kakek punya cucu di Jakarta", en: "Grandfather has a grandchild in Jakarta" }, hint: "CHOO-choo — both c's are CH, so this is the word that drills the trap twice in four letters. No gender, like every kinship word except the parents." },
      ],
    },
    {
      id: "id-u4l3",
      unit: 4,
      lesson: 3,
      title: "Suami, istri dan teman",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say whether someone is married, introduce your partner or a friend, and say whether you live alone.",
      items: [
        { id: "id-u4l3-suami", type: "vocab", front: "suami", reading: "suami", meaning: "husband", example: { jp: "Suami saya bekerja di Jakarta.", en: "My husband works in Jakarta." }, accept: ["a husband", "spouse"], drill: { jp: "Suami Siti guru bahasa Indonesia", en: "Siti's husband is an Indonesian teacher" }, hint: "soo-AH-mee, three beats. Indonesians ask about marriage very early in a conversation — it is small talk, not an intrusion, so expect the question." },
        { id: "id-u4l3-istri", type: "vocab", front: "istri", reading: "istri", meaning: "wife", example: { jp: "Istri saya guru.", en: "My wife is a teacher." }, accept: ["a wife", "spouse"], drill: { jp: "Istri Budi tinggal di Bali", en: "Budi's wife lives in Bali" }, hint: "IS-tree, with the r tapped once. The pair suami-istri is also the ordinary phrase for \"a married couple\"." },
        { id: "id-u4l3-teman", type: "vocab", front: "teman", reading: "teman", meaning: "friend", example: { jp: "Teman saya tinggal di Bali.", en: "My friend lives in Bali." }, accept: ["a friend", "companion", "mate", "pal"], drill: { jp: "Teman saya belajar bahasa Indonesia", en: "My friend is learning Indonesian" }, hint: "tuh-MAHN, first e swallowed. It stretches further than English \"friend\" — a colleague and a classmate are both teman, and teman is not a claim of closeness." },
        { id: "id-u4l3-menikah", type: "vocab", front: "menikah", reading: "menikah", meaning: "to marry", example: { jp: "Kakak saya menikah di Bali.", en: "My older sibling got married in Bali." }, accept: ["to get married", "marry", "to wed", "be married"], drill: { jp: "Budi dan Siti menikah sekarang", en: "Budi and Siti are getting married now" }, hint: "Root nikah, \"marriage\", plus me-. With no tense marker it covers \"is marrying\", \"got married\" and \"is married\" — the sentence around it decides, and there is nothing to conjugate." },
        { id: "id-u4l3-sendiri", type: "vocab", front: "sendiri", reading: "sendiri", meaning: "alone", example: { jp: "Saya tinggal sendiri di Jakarta.", en: "I live alone in Jakarta." }, accept: ["by oneself", "on my own", "oneself", "myself"], drill: { jp: "Nenek saya tinggal sendiri sekarang", en: "My grandmother lives alone now" }, hint: "suhn-DEE-ree. It follows the verb, and it also does duty for \"-self\": saya sendiri is \"I myself\". Living sendiri is unusual enough in Indonesia that the word often draws a follow-up question." },
        { id: "id-u4l3-bersama", type: "vocab", front: "bersama", reading: "bersama", meaning: "together", example: { jp: "Saya belajar bersama teman saya.", en: "I study together with my friend." }, accept: ["along with", "jointly", "together with"], drill: { jp: "Saya bekerja bersama teman saya", en: "I work together with my friend" }, hint: "Root sama, \"same\", plus ber-. You have already met that root doubled as sama-sama, \"you're welcome\" — one root, two completely different words, which is the affix system working exactly as advertised." },
      ],
    },
    {
      id: "id-u4l4",
      unit: 4,
      lesson: 4,
      title: "Di rumah",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Name the rooms of your home and say where in the house someone is.",
      items: [
        { id: "id-u4l4-rumah", type: "vocab", front: "rumah", reading: "rumah", meaning: "house", example: { jp: "Rumah saya di Jakarta.", en: "My house is in Jakarta." }, accept: ["home", "a house", "building"], drill: { jp: "Rumah nenek saya di Bali", en: "My grandmother's house is in Bali" }, hint: "ROO-mah. di rumah means \"at home\" with no extra word needed. Indonesian needs no verb to say where something is: rumah saya di Jakarta has no \"is\" in it at all." },
        { id: "id-u4l4-kamar", type: "vocab", front: "kamar", reading: "kamar", meaning: "room", example: { jp: "Saya tidur di kamar saya.", en: "I sleep in my room." }, accept: ["a room", "bedroom", "chamber"], drill: { jp: "Adik saya tidur di kamar", en: "My younger sibling sleeps in the room" }, hint: "KAH-mar, from Dutch kamer — Indonesian took a great deal of its house vocabulary from Dutch, so this whole lesson will feel oddly familiar if you know any." },
        { id: "id-u4l4-pintu", type: "vocab", front: "pintu", reading: "pintu", meaning: "door", example: { jp: "Kucing saya tidur di pintu.", en: "My cat sleeps at the door." }, accept: ["a door", "gate", "doorway"], drill: { jp: "Kucing tidur di pintu kamar", en: "The cat sleeps at the bedroom door" }, hint: "PIN-too. Also used for a gate and for an airport boarding gate, so it is worth more than its size suggests." },
        { id: "id-u4l4-dapur", type: "vocab", front: "dapur", reading: "dapur", meaning: "kitchen", example: { jp: "Ibu saya bekerja di dapur.", en: "My mother works in the kitchen." }, accept: ["a kitchen", "cookhouse"], drill: { jp: "Ibu saya di dapur sekarang", en: "My mother is in the kitchen now" }, hint: "DAH-poor, second vowel swallowed towards uh in speech. In many Indonesian homes the dapur opens to the outside, so \"in the kitchen\" can mean half outdoors." },
        { id: "id-u4l4-tidur", type: "vocab", front: "tidur", reading: "tidur", meaning: "to sleep", example: { jp: "Saya tidur di rumah nenek saya.", en: "I sleep at my grandmother's house." }, accept: ["sleep", "to go to bed", "to be asleep", "asleep"], drill: { jp: "Kakek saya tidur sekarang", en: "My grandfather is sleeping now" }, hint: "TEE-door. No prefix needed — it is something you do, not something you do to anything, so it stays bare. kamar tidur is a bedroom, literally a \"sleep room\"." },
        { id: "id-u4l4-bangun", type: "vocab", front: "bangun", reading: "bangun", meaning: "to wake up", example: { jp: "Saya bangun dan pergi bekerja.", en: "I wake up and go to work." }, accept: ["wake up", "to get up", "get up", "to rise"], drill: { jp: "Saya bangun dan pergi sekarang", en: "I wake up and go now" }, hint: "BAHNG-oon, a single hum in the middle. The same word also means \"to build\" — waking up and standing a house up are one verb in Indonesian, and only the sentence tells you which." },
      ],
    },
  ],
};
