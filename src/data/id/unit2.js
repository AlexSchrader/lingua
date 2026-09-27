// ID Unit 2 — Sapaan (slot: greetings) — A1
// Greetings, thanks, apologies and goodbyes — the moves a learner needs on day
// one. Indonesian splits its greeting by the TIME OF DAY (four of them, not
// two) and its goodbye by WHO IS LEAVING, and both distinctions are obligatory,
// so each gets its own lesson rather than a line in a hint.
// Conventions are declared in id/unit1.js and bind every id unit. Note §8: this
// unit teaches the fixed phrases (selamat pagi, selamat tinggal); the bare time
// words and the bare verb tinggal are separate cards in later units, which is
// deliberate, not a duplicate.
// lang/unit/lesson are stamped in src/data/index.js.
export const ID_UNIT2 = {
  id: "id-u2",
  lang: "id",
  title: "Sapaan",
  order: 2,
  stage: "a1",
  lessons: [
    {
      id: "id-u2l1",
      unit: 2,
      lesson: 1,
      title: "Dari pagi sampai malam",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Greet someone with the right greeting for the time of day, and pick a casual one when the moment is informal.",
      items: [
        { id: "id-u2l1-selamatpagi", type: "vocab", front: "selamat pagi", reading: "selamatpagi", meaning: "good morning", example: { jp: "Selamat pagi, Budi!", en: "Good morning, Budi!" }, accept: ["morning", "good morning to you"], drill: { jp: "Selamat pagi Budi dan Siti", en: "Good morning Budi and Siti" }, hint: "Used until about eleven. selamat on its own means \"safe\" — every greeting here is literally a wish that your morning, day or evening be a safe one." },
        { id: "id-u2l1-selamatsiang", type: "vocab", front: "selamat siang", reading: "selamatsiang", meaning: "good day (midday)", example: { jp: "Selamat siang, Siti!", en: "Good day, Siti!" }, accept: ["good afternoon", "good day", "hello"], drill: { jp: "Selamat siang Siti dan Budi", en: "Good day Siti and Budi" }, hint: "Roughly eleven to three, when the sun is highest. English has no real equivalent, which is why learners skip it and sound odd at noon." },
        { id: "id-u2l1-selamatsore", type: "vocab", front: "selamat sore", reading: "selamatsore", meaning: "good afternoon (late)", example: { jp: "Selamat sore, Ani!", en: "Good afternoon, Ani!" }, accept: ["good evening", "good late afternoon"], drill: { jp: "Selamat sore Ani dan Rudi", en: "Good afternoon Ani and Rudi" }, hint: "From about three until dark. Indonesia sits on the equator, so sore ends near six all year — there is no long European evening to stretch it into." },
        { id: "id-u2l1-selamatmalam", type: "vocab", front: "selamat malam", reading: "selamatmalam", meaning: "good evening", example: { jp: "Selamat malam, Budi!", en: "Good evening, Budi!" }, accept: ["good night", "evening"], drill: { jp: "Selamat malam Siti dan Ani", en: "Good evening Siti and Ani" }, hint: "After dark. It is both the greeting and the parting — unlike English, you can arrive with it and leave with it." },
        { id: "id-u2l1-halo", type: "vocab", front: "halo", reading: "halo", meaning: "hello", example: { jp: "Halo, saya Budi.", en: "Hello, I'm Budi." }, accept: ["hi there", "hello there"], drill: { jp: "Halo Budi dan Siti", en: "Hello Budi and Siti" }, hint: "HAH-loh. Works at any hour and skips the whole time-of-day problem — but it is informal, so a shop or an office still wants selamat." },
        { id: "id-u2l1-hai", type: "vocab", front: "hai", reading: "hai", meaning: "hi", example: { jp: "Hai, apa kabar?", en: "Hi, how are you?" }, accept: ["hey", "hi there"], drill: { jp: "Hai Siti dan Ani", en: "Hi Siti and Ani" }, hint: "Said HIGH — ai is a true diphthong here, not the ay of English \"hail\". The most casual option: friends and messages, never a stranger." },
      ],
    },
    {
      id: "id-u2l2",
      unit: 2,
      lesson: 2,
      title: "Terima kasih dan maaf",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Thank someone, apologise, ask to get past, and answer when someone does the same to you.",
      items: [
        { id: "id-u2l2-terimakasih", type: "vocab", front: "terima kasih", reading: "terimakasih", meaning: "thank you", example: { jp: "Terima kasih, Budi!", en: "Thank you, Budi!" }, accept: ["thanks", "thank you very much"], drill: { jp: "Terima kasih Budi dan Siti", en: "Thank you Budi and Siti" }, hint: "Literally \"receive love\". Both e's are the swallowed kind: tuh-REE-ma KAH-see. In speech it shortens to makasih, and that is what you will mostly hear." },
        { id: "id-u2l2-samasama", type: "vocab", front: "sama-sama", reading: "samasama", meaning: "you're welcome", example: { jp: "Sama-sama, Budi.", en: "You're welcome, Budi." }, accept: ["not at all", "don't mention it", "likewise"], drill: { jp: "Sama-sama Budi dan Siti", en: "You're welcome Budi and Siti" }, hint: "sama means \"same\", and doubling it gives \"same to you\". This is Indonesian's real plural machinery doing something else: a doubled word is not always a plural, and here it is its own expression." },
        { id: "id-u2l2-maaf", type: "vocab", front: "maaf", reading: "maaf", meaning: "sorry", example: { jp: "Maaf, saya tidak punya uang.", en: "Sorry, I don't have any money." }, accept: ["excuse me", "pardon", "forgive me", "apologies"], drill: { jp: "Maaf saya tidak punya uang", en: "Sorry I do not have any money" }, hint: "MAH-ahf, with both a's sounded separately — a double vowel is two beats in Indonesian, never a long one. An Arabic loan, like much of the politeness vocabulary." },
        { id: "id-u2l2-permisi", type: "vocab", front: "permisi", reading: "permisi", meaning: "excuse me (getting past)", example: { jp: "Permisi, saya pergi sekarang.", en: "Excuse me, I'm going now." }, accept: ["pardon me", "may I pass", "excuse me"], drill: { jp: "Permisi saya pergi sekarang", en: "Excuse me I am going now" }, hint: "For moving through a crowd or entering a room — physical, not an apology. maaf is for having done something wrong; permisi is for being about to." },
        { id: "id-u2l2-tolong", type: "vocab", front: "tolong", reading: "tolong", meaning: "please (asking for help)", example: { jp: "Tolong tunggu saya!", en: "Please wait for me!" }, accept: ["help", "kindly", "please help"], drill: { jp: "Tolong tunggu Budi dan Siti", en: "Please wait for Budi and Siti" }, hint: "On its own it means \"help!\". In front of a verb it turns an order into a request: tunggu is \"wait\", tolong tunggu is \"please wait\"." },
        { id: "id-u2l2-silakan", type: "vocab", front: "silakan", reading: "silakan", meaning: "please (go ahead)", example: { jp: "Silakan duduk.", en: "Please sit down." }, accept: ["go ahead", "help yourself", "be my guest", "after you"], drill: { jp: "Silakan duduk dan tunggu saya", en: "Please sit down and wait for me" }, hint: "The other \"please\", and it is not interchangeable: silakan OFFERS, tolong ASKS. You say silakan duduk to a guest, never to ask them for something." },
      ],
    },
    {
      id: "id-u2l3",
      unit: 2,
      lesson: 3,
      title: "Apa kabar?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask how someone is, answer it yourself, and say you are glad to meet them.",
      items: [
        { id: "id-u2l3-apakabar", type: "vocab", front: "apa kabar", reading: "apakabar", meaning: "how are you", example: { jp: "Hai Budi, apa kabar?", en: "Hi Budi, how are you?" }, accept: ["how are things", "how's it going", "how do you do"], drill: { jp: "Apa kabar Budi dan Siti", en: "How are you Budi and Siti" }, hint: "Literally \"what news\". Unlike the English question it is a real one — people answer it. The expected reply is baik." },
        { id: "id-u2l3-baik", type: "vocab", front: "baik", reading: "baik", meaning: "fine", example: { jp: "Saya baik, terima kasih.", en: "I'm fine, thank you." }, accept: ["well", "kind", "all right", "in good health"], drill: { jp: "Saya baik dan Budi juga", en: "I am fine and Budi is too" }, hint: "BAH-ee', two vowels then the swallowed k. It covers \"fine\" about a person and \"kind\" about a character — orang baik is a good person." },
        { id: "id-u2l3-senang", type: "vocab", front: "senang", reading: "senang", meaning: "glad", example: { jp: "Saya senang bertemu Budi.", en: "I'm glad to meet Budi." }, accept: ["happy", "pleased", "delighted"], drill: { jp: "Saya senang bertemu Siti", en: "I am glad to meet Siti" }, hint: "suh-NAHNG — swallowed e, then the hum. A settled contentment rather than excitement." },
        { id: "id-u2l3-bertemu", type: "vocab", front: "bertemu", reading: "bertemu", meaning: "to meet", example: { jp: "Saya bertemu Budi sekarang.", en: "I am meeting Budi now." }, accept: ["meet", "to run into", "to come across"], drill: { jp: "Saya bertemu Budi dan Siti", en: "I am meeting Budi and Siti" }, hint: "ber- plus the root temu. The prefix makes a verb you do rather than one you do TO something — which is why bertemu needs no word for \"with\"." },
        { id: "id-u2l3-bagaimana", type: "vocab", front: "bagaimana", reading: "bagaimana", meaning: "how", example: { jp: "Bagaimana kucing Budi?", en: "How is Budi's cat?" }, accept: ["in what way", "what about", "how about"], drill: { jp: "Bagaimana kucing Budi dan Siti", en: "How are Budi's and Siti's cats" }, hint: "bah-gigh-MAH-na, five syllables. Spoken Indonesian squeezes it to gimana, which is what you will actually hear on the street." },
        { id: "id-u2l3-sekali", type: "vocab", front: "sekali", reading: "sekali", meaning: "very (after the word)", example: { jp: "Saya senang sekali!", en: "I'm very glad!" }, accept: ["extremely", "really", "so", "a lot"], drill: { jp: "Saya senang sekali bertemu Budi", en: "I am very glad to meet Budi" }, hint: "It FOLLOWS what it intensifies: senang sekali, baik sekali. There is another word for \"very\" that goes in front instead — the two are not interchangeable in position." },
      ],
    },
    {
      id: "id-u2l4",
      unit: 2,
      lesson: 4,
      title: "Selamat tinggal dan sampai jumpa",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "End a conversation with the right goodbye for who is leaving, and say when you will see each other again.",
      items: [
        { id: "id-u2l4-selamattinggal", type: "vocab", front: "selamat tinggal", reading: "selamattinggal", meaning: "goodbye (to the one staying)", example: { jp: "Selamat tinggal, Budi!", en: "Goodbye, Budi!" }, accept: ["farewell", "goodbye"], drill: { jp: "Selamat tinggal Budi dan Siti", en: "Goodbye Budi and Siti" }, hint: "tinggal means \"to stay\", so this is what the person LEAVING says. It is also weighty — for a long parting, not for leaving a shop." },
        { id: "id-u2l4-selamatjalan", type: "vocab", front: "selamat jalan", reading: "selamatjalan", meaning: "goodbye (to the one leaving)", example: { jp: "Selamat jalan, Siti!", en: "Safe travels, Siti!" }, accept: ["safe travels", "bon voyage", "have a good trip"], drill: { jp: "Selamat jalan Siti dan Ani", en: "Safe travels Siti and Ani" }, hint: "jalan means \"to go\", so this is what the person STAYING says. The pair is obligatory and English has no equivalent: whoever walks out of the door decides which one you use." },
        { id: "id-u2l4-sampaijumpa", type: "vocab", front: "sampai jumpa", reading: "sampaijumpa", meaning: "see you", example: { jp: "Sampai jumpa, Budi!", en: "See you, Budi!" }, accept: ["see you soon", "until we meet", "so long"], drill: { jp: "Sampai jumpa Budi dan Ani", en: "See you Budi and Ani" }, hint: "\"Until [we] meet\". The everyday goodbye, with none of the finality of selamat tinggal — use this one for a colleague or a shopkeeper." },
        { id: "id-u2l4-sampainanti", type: "vocab", front: "sampai nanti", reading: "sampainanti", meaning: "see you later", example: { jp: "Sampai nanti, saya pergi sekarang.", en: "See you later, I'm going now." }, accept: ["later", "catch you later", "till later"], drill: { jp: "Sampai nanti Budi dan Siti", en: "See you later Budi and Siti" }, hint: "nanti means \"later\", and it implies LATER TODAY — if you will not see them until tomorrow, sampai jumpa is the safer one." },
        { id: "id-u2l4-hatihati", type: "vocab", front: "hati-hati", reading: "hatihati", meaning: "take care", example: { jp: "Hati-hati, jangan pergi sekarang!", en: "Be careful, don't go now!" }, accept: ["be careful", "careful", "watch out", "mind yourself"], drill: { jp: "Hati-hati Budi dan Siti", en: "Take care Budi and Siti" }, hint: "hati is \"heart\" or \"liver\", and doubling it gives \"carefully\" — another doubled word that is not a plural. Said to anyone walking out into traffic, which in Indonesia is everyone." },
        { id: "id-u2l4-dulu", type: "vocab", front: "dulu", reading: "dulu", meaning: "for now", example: { jp: "Saya pergi dulu, ya!", en: "I'll be off now, all right?" }, accept: ["first", "beforehand", "earlier", "previously"], drill: { jp: "Saya pergi dulu dan Budi tunggu", en: "I will go first and Budi waits" }, hint: "DOO-loo. Tacked onto a verb it softens a departure: saya pergi dulu is \"I'll head off, if that's all right\" — the polite way to leave a group. It also means \"in the past\"." },
      ],
    },
  ],
};
