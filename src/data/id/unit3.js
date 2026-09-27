// ID Unit 3 — Memperkenalkan diri (slot: self) — A1
// Introducing yourself: your name, the pronoun problem, where you are from, what
// you do, and what you like. This is where the AFFIX SYSTEM first earns its own
// cards — bekerja/pekerjaan and belajar/mengajar are taught as separate words
// under id/unit1.js §3, because a learner who knows one genuinely does not know
// the other.
// ⚠️ PRONOUNS ARE A REGISTER DECISION, NOT A PARADIGM (unit1.js §7). Indonesian
// has no neutral "you": Anda is formal, kamu is informal, and using either wrongly
// is the mistake a learner actually makes. Both are taught here, with the choice
// spelled out; aku and the Jakarta colloquial layer are deferred.
// lang/unit/lesson are stamped in src/data/index.js.
export const ID_UNIT3 = {
  id: "id-u3",
  lang: "id",
  title: "Memperkenalkan diri",
  order: 3,
  stage: "a1",
  lessons: [
    {
      id: "id-u3l1",
      unit: 3,
      lesson: 1,
      title: "Nama saya…",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Give your name, ask for someone else's, and choose between the formal and the informal word for you.",
      items: [
        { id: "id-u3l1-nama", type: "vocab", front: "nama", reading: "nama", meaning: "name", example: { jp: "Nama saya Budi.", en: "My name is Budi." }, accept: ["a name", "first name"], drill: { jp: "Siapa nama kamu", en: "What is your name" }, hint: "NAH-ma. Indonesian has no verb here at all: nama saya Budi is literally \"name my Budi\". The possessor follows the noun, so \"my name\" is nama saya, never saya nama." },
        { id: "id-u3l1-siapa", type: "vocab", front: "siapa", reading: "siapa", meaning: "who", example: { jp: "Siapa dia?", en: "Who is he?" }, accept: ["whom", "who is"], drill: { jp: "Siapa nama dia", en: "What is his name" }, hint: "see-AH-pa. Watch the idiom: to ask a name Indonesian asks siapa, \"who\", not apa, \"what\" — siapa nama kamu. Asking apa nama kamu sounds like you are asking about an object." },
        { id: "id-u3l1-anda", type: "vocab", front: "Anda", reading: "anda", meaning: "you (formal)", example: { jp: "Nama Anda Budi?", en: "Is your name Budi?" }, accept: ["you", "yourself"], drill: { jp: "Anda punya kucing juga", en: "You have a cat too" }, hint: "Always written with a capital A, even mid-sentence — the capital is part of the respect. For strangers, officials and writing. In real conversation Indonesians often avoid a pronoun entirely and use your name or title instead." },
        { id: "id-u3l1-kamu", type: "vocab", front: "kamu", reading: "kamu", meaning: "you (informal)", example: { jp: "Kamu punya kucing?", en: "Do you have a cat?" }, accept: ["you"], drill: { jp: "Kamu punya banyak uang", en: "You have a lot of money" }, hint: "KAH-moo. For friends, children and people your own age you know. Aimed at a stranger or someone senior it is rude, so when in doubt use Anda or their name." },
        { id: "id-u3l1-dia", type: "vocab", front: "dia", reading: "dia", meaning: "he or she", example: { jp: "Dia orang Indonesia.", en: "He is Indonesian." }, accept: ["he", "she", "him", "her", "that person"], drill: { jp: "Dia punya kucing dan uang", en: "He has a cat and money" }, hint: "DEE-a. One word for he, she and him or her — Indonesian marks no gender anywhere in the language, so you never have to guess. It is also the polite singular \"they\"." },
        { id: "id-u3l1-panggil", type: "vocab", front: "panggil", reading: "panggil", meaning: "to call (by a name)", example: { jp: "Panggil saya Budi!", en: "Call me Budi!" }, accept: ["call", "to summon", "to address as"], drill: { jp: "Panggil dia Budi", en: "Call him Budi" }, hint: "PAHNG-gil — the ngg you met as the hum plus a hard g. Panggil saya Budi is how Indonesians hand you the short form of their name, and it is normal to offer it immediately." },
      ],
    },
    {
      id: "id-u3l2",
      unit: 3,
      lesson: 2,
      title: "Dari mana?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where you come from, where you live now, and which language you are learning.",
      items: [
        { id: "id-u3l2-dari", type: "vocab", front: "dari", reading: "dari", meaning: "from", example: { jp: "Saya dari Indonesia.", en: "I am from Indonesia." }, accept: ["out of", "coming from", "since"], drill: { jp: "Budi dari Jakarta dan Siti dari Bali", en: "Budi is from Jakarta and Siti is from Bali" }, hint: "DAH-ree. It leads its place, unlike English question order: dari mana, \"from where\", not \"where from\"." },
        { id: "id-u3l2-ke", type: "vocab", front: "ke", reading: "ke", meaning: "to (a place)", example: { jp: "Saya pergi ke Jakarta.", en: "I am going to Jakarta." }, accept: ["to", "towards", "into"], drill: { jp: "Budi pergi ke Bali sekarang", en: "Budi is going to Bali now" }, hint: "One swallowed syllable, kuh. Only for DESTINATIONS — never for giving something to a person, which Indonesian handles a different way." },
        { id: "id-u3l2-di", type: "vocab", front: "di", reading: "di", meaning: "in", example: { jp: "Saya tinggal di Jakarta.", en: "I live in Jakarta." }, accept: ["at", "on", "inside"], drill: { jp: "Siti tinggal di Bali sekarang", en: "Siti lives in Bali now" }, hint: "DEE. Covers in, at and on all at once — Indonesian does not split them the way English does, so di rumah is \"at home\" and di kamar is \"in the room\"." },
        { id: "id-u3l2-mana", type: "vocab", front: "mana", reading: "mana", meaning: "where", example: { jp: "Kamu dari mana?", en: "Where are you from?" }, accept: ["which", "which one", "whereabouts"], drill: { jp: "Budi tinggal di mana sekarang", en: "Where does Budi live now" }, hint: "MAH-na. It never stands alone: pair it with di for \"where\", ke for \"where to\", dari for \"where from\". The preposition carries the direction and mana only asks the question." },
        { id: "id-u3l2-tinggal", type: "vocab", front: "tinggal", reading: "tinggal", meaning: "to live (reside)", example: { jp: "Dia tinggal di Bali.", en: "He lives in Bali." }, accept: ["to reside", "to stay", "live", "stay"], drill: { jp: "Saya tinggal di Jakarta sekarang", en: "I live in Jakarta now" }, hint: "You have already met this word hiding inside the goodbye selamat tinggal, said to whoever stays behind. On its own it is the ordinary verb for residing somewhere — the ngg is the hum plus a hard g." },
        { id: "id-u3l2-bahasa", type: "vocab", front: "bahasa", reading: "bahasa", meaning: "language", example: { jp: "Saya belajar bahasa Indonesia.", en: "I am learning Indonesian." }, accept: ["a language", "tongue", "speech"], drill: { jp: "Saya suka bahasa Indonesia", en: "I like the Indonesian language" }, hint: "bah-HAH-sa. Indonesians call their own language bahasa Indonesia and never just \"bahasa\" — on its own the word only means \"language\", so \"I speak bahasa\" says nothing." },
      ],
    },
    {
      id: "id-u3l3",
      unit: 3,
      lesson: 3,
      title: "Pekerjaan",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you do for a living or what you are studying, and ask someone the same.",
      items: [
        { id: "id-u3l3-apa", type: "vocab", front: "apa", reading: "apa", meaning: "what", example: { jp: "Apa pekerjaan Anda?", en: "What is your job?" }, accept: ["which", "what is"], drill: { jp: "Apa pekerjaan Budi sekarang", en: "What is Budi's job now" }, hint: "AH-pa. You have met it inside apa kabar. Put it at the front of a statement and the whole thing becomes a yes-or-no question, which is the cheapest question-making trick the language has." },
        { id: "id-u3l3-bekerja", type: "vocab", front: "bekerja", reading: "bekerja", meaning: "to work", example: { jp: "Saya bekerja di Jakarta.", en: "I work in Jakarta." }, accept: ["work", "to have a job", "to be employed"], drill: { jp: "Budi bekerja di Bali sekarang", en: "Budi works in Bali now" }, hint: "The root is kerja, and ber- turns it into something you DO: buh-KUHR-ja. Indonesian builds most of its vocabulary this way, so learn to spot the prefix and the root separately." },
        { id: "id-u3l3-pekerjaan", type: "vocab", front: "pekerjaan", reading: "pekerjaan", meaning: "job", example: { jp: "Pekerjaan saya guru.", en: "My job is teaching." }, accept: ["work", "occupation", "employment", "a job"], drill: { jp: "Pekerjaan dia guru di Jakarta", en: "His job is a teacher in Jakarta" }, hint: "Same root kerja, wrapped this time in pe- and -an, which together make a NOUN. So bekerja is what you do and pekerjaan is the thing itself — one root, two words, and you need both." },
        { id: "id-u3l3-guru", type: "vocab", front: "guru", reading: "guru", meaning: "teacher", example: { jp: "Dia guru bahasa Indonesia.", en: "She is an Indonesian teacher." }, accept: ["a teacher", "instructor", "tutor"], drill: { jp: "Guru saya tinggal di Bali", en: "My teacher lives in Bali" }, hint: "GOO-roo. The same word English borrowed as \"guru\", by way of Sanskrit — but in Indonesian it is completely ordinary and means a schoolteacher." },
        { id: "id-u3l3-mahasiswa", type: "vocab", front: "mahasiswa", reading: "mahasiswa", meaning: "university student", example: { jp: "Siti mahasiswa di Jakarta.", en: "Siti is a university student in Jakarta." }, accept: ["student", "undergraduate", "college student"], drill: { jp: "Siti mahasiswa di Jakarta sekarang", en: "Siti is a university student in Jakarta now" }, hint: "maha is Sanskrit for \"great\" and siswa is a pupil — so literally a \"great pupil\". Indonesian keeps university and school students strictly apart, and calling a professor's student a pelajar is a small insult." },
        { id: "id-u3l3-pelajar", type: "vocab", front: "pelajar", reading: "pelajar", meaning: "school pupil", example: { jp: "Budi pelajar di Bali.", en: "Budi is a school pupil in Bali." }, accept: ["pupil", "schoolchild", "school student"], drill: { jp: "Pelajar dan mahasiswa belajar bahasa", en: "Pupils and university students learn languages" }, hint: "Root ajar, \"teaching\", plus pe- for the person who does it. The same root gives the verb for studying and the verb for teaching — a family of four words you will meet across this unit." },
      ],
    },
    {
      id: "id-u3l4",
      unit: 3,
      lesson: 4,
      title: "Suka, mau dan bisa",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Say what you like, what you want to do, and what you are able to do.",
      items: [
        { id: "id-u3l4-suka", type: "vocab", front: "suka", reading: "suka", meaning: "to like", example: { jp: "Saya suka kucing.", en: "I like cats." }, accept: ["like", "to enjoy", "to be fond of", "enjoy"], drill: { jp: "Saya suka bahasa Indonesia sekarang", en: "I like the Indonesian language now" }, hint: "SOO-ka. The everyday \"like\" — for food, places and things. The deep, romantic cinta you met earlier is not a stronger version of this; they are used about different things." },
        { id: "id-u3l4-mau", type: "vocab", front: "mau", reading: "mau", meaning: "to want", example: { jp: "Saya mau pergi ke Bali.", en: "I want to go to Bali." }, accept: ["want", "would like", "to intend", "going to"], drill: { jp: "Budi mau belajar bahasa Indonesia", en: "Budi wants to learn Indonesian" }, hint: "MAH-oo, two beats. It doubles as a future marker: saya mau pergi is both \"I want to go\" and \"I'm about to go\", and context alone decides." },
        { id: "id-u3l4-bisa", type: "vocab", front: "bisa", reading: "bisa", meaning: "can", example: { jp: "Saya bisa bahasa Indonesia.", en: "I can speak Indonesian." }, accept: ["to be able to", "able", "may", "could"], drill: { jp: "Dia bisa mengajar bahasa Indonesia", en: "He can teach Indonesian" }, hint: "BEE-sa. With a language it means \"can speak\" with no verb needed: saya bisa bahasa Indonesia. Bisa apa? is the useful question \"what can you do?\"" },
        { id: "id-u3l4-belajar", type: "vocab", front: "belajar", reading: "belajar", meaning: "to study", example: { jp: "Saya belajar bahasa Indonesia di Jakarta.", en: "I study Indonesian in Jakarta." }, accept: ["to learn", "learn", "study"], drill: { jp: "Siti belajar bahasa Indonesia sekarang", en: "Siti is studying Indonesian now" }, hint: "The root ajar plus ber-, worn down to bel- over time. It is what the LEARNER does. Its partner, what the teacher does, is a different word built on the same root." },
        { id: "id-u3l4-mengajar", type: "vocab", front: "mengajar", reading: "mengajar", meaning: "to teach", example: { jp: "Guru saya mengajar bahasa Indonesia.", en: "My teacher teaches Indonesian." }, accept: ["teach", "to instruct", "instruct"], drill: { jp: "Dia mengajar pelajar di Bali", en: "She teaches pupils in Bali" }, hint: "Same root ajar, this time with meng-. So belajar is to study and mengajar is to teach — two opposite jobs from one root, told apart only by the prefix. This is the single most useful pattern in Indonesian." },
        { id: "id-u3l4-sangat", type: "vocab", front: "sangat", reading: "sangat", meaning: "very (before the word)", example: { jp: "Saya sangat suka kucing.", en: "I like cats very much." }, accept: ["extremely", "really", "highly", "much"], drill: { jp: "Budi sangat suka bahasa Indonesia", en: "Budi likes Indonesian very much" }, hint: "SAHNG-at. It goes IN FRONT of what it intensifies, where sekali goes after: sangat senang and senang sekali mean the same thing. Using both at once is a beginner tell." },
      ],
    },
  ],
};
