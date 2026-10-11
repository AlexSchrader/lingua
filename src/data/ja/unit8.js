// Unit 8 — かぞく ("Family") — A1 thematic
// Names for family members and people. Japanese splits family words into a humble
// set for your OWN family (ちち = my father) and an honorific set for someone
// else's (おとうさん = (your) father) — this unit teaches both, with the
// distinction carried in the meanings (and a hint on the first of each pair).
// Example sentences stay inside known grammar: X は Y です / X が すきです /
// X は おげんきですか. lang/unit/lesson stamped in index.js.
export const UNIT8 = {
  id: "ja-u8",
  lang: "ja",
  title: "かぞく",
  order: 8,
  stage: "a1",
  lessons: [
    // Lesson 1: your own family (humble forms)
    {
      id: "ja-u8l1",
      unit: 8,
      lesson: 1,
      title: "My family",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name your own family with the humble words: ちち はは りょうしん そふ そぼ.",
      items: [
        { id: "ja-u8l1-chichi", type: "vocab", front: "ちち", reading: "chichi", meaning: "my father", example: { jp: "ちちはせんせいです。", en: "My father is a teacher." }, drill: { jp: "ちちとさんぽをします。", en: "I take a walk with my father." }, accept: ["father", "dad", "my dad", "my own father"], hint: "ちち is YOUR OWN father (humble). For someone else's father you say おとうさん — that pair comes back in Lesson 3." },
        { id: "ja-u8l1-haha", type: "vocab", front: "はは", reading: "haha", meaning: "my mother", example: { jp: "ははがすきです。", en: "I love my mother." }, drill: { jp: "はははごはんをつくります。", en: "My mother cooks the meal." }, accept: ["mother", "mom", "mum", "my mom"], hint: "HA-ha — two flat beats, both breathy h. ⚠️ はは is YOUR OWN mother, the humble word. Someone else's is おかあさん, in Lesson 3. ⚠️ Nothing to do with laughing — the h sound is soft, not a bark." },
        { id: "ja-u8l1-ryoshin", type: "vocab", front: "りょうしん", reading: "ryōshin", meaning: "my parents", example: { jp: "こちらはりょうしんです。", en: "These are my parents." }, drill: { jp: "りょうしんはにほんにいます。", en: "My parents are in Japan." }, accept: ["parents", "both parents", "mum and dad", "my folks"], hint: "RYOH-shin — four beats: ryo-o-shi-n, りょ a single sound lengthened by the う. ⚠️ Your own parents, humbly. Someone else's are ごりょうしん, with the honorific ご in front. Always both of them — never one." },
        { id: "ja-u8l1-sofu", type: "vocab", front: "そふ", reading: "sofu", meaning: "my grandfather", example: { jp: "そふはげんきです。", en: "My grandfather is well." }, drill: { jp: "そふのとけいです。", en: "It's my grandfather's watch." }, accept: ["grandfather", "grandpa", "granddad"], hint: "SO-fu — two beats, soft blown ふ. ⚠️ Your own grandfather, humbly. Someone else's is おじいさん, in Lesson 3. ⚠️ Keep it apart from そぼ, grandmother, in this same lesson: ふ for father's side of the pair, ぼ for mother's." },
        { id: "ja-u8l1-sobo", type: "vocab", front: "そぼ", reading: "sobo", meaning: "my grandmother", example: { jp: "そぼがすきです。", en: "I love my grandmother." }, drill: { jp: "そぼとでんわをします。", en: "I call my grandmother." }, accept: ["grandmother", "grandma", "granny"], hint: "SO-bo — two beats, ぼ voiced from ほ. ⚠️ Your own grandmother, humbly; someone else's is おばあさん. The そ is the same そ as in そふ — one syllable decides which grandparent you mean." },
        { id: "ja-u8l1-oya", type: "vocab", front: "おや", reading: "oya", meaning: "parent", example: { jp: "おやとこどもです。", en: "A parent and a child." }, drill: { jp: "おやはしんぱいします。", en: "Parents worry." }, accept: ["a parent", "parents", "one's parent", "mother or father"], hint: "O-ya — two beats. ⚠️ The GENERAL word — a parent, any parent, as a category. Your own two are りょうしん. おや is what you use in おやとこども, parent and child, where no particular family is meant." },
        { id: "ja-u8l1-otto", type: "vocab", front: "おっと", reading: "otto", meaning: "my husband", example: { jp: "おっとがすきです。", en: "I love my husband." }, drill: { jp: "おっとはかいしゃいんです。", en: "My husband is an office worker." }, accept: ["husband", "spouse (male)", "my spouse"], hint: "おっと is YOUR OWN husband (humble). Someone else's husband, politely, is ごしゅじん (Lesson 3)." },
        { id: "ja-u8l1-tsuma", type: "vocab", front: "つま", reading: "tsuma", meaning: "my wife", example: { jp: "つまはせんせいです。", en: "My wife is a teacher." }, drill: { jp: "つまとレストランにいきます。", en: "I go to a restaurant with my wife." }, accept: ["wife", "spouse (female)", "the missus"], hint: "TSU-ma — two beats, つ is tsu. ⚠️ Your own wife, humbly, and the partner of おっと. Someone else's is おくさん, in Lesson 3. ⚠️ Saying おくさん about your own wife sounds like you are praising her to her face." },
      ],
    },
    // Lesson 2: siblings & children
    {
      id: "ja-u8l2",
      unit: 8,
      lesson: 2,
      title: "Brothers, sisters, kids",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name siblings and children: あに あね おとうと いもうと あかちゃん まご.",
      items: [
        { id: "ja-u8l2-ani", type: "vocab", front: "あに", reading: "ani", meaning: "my older brother", example: { jp: "あにはせんせいです。", en: "My older brother is a teacher." }, drill: { jp: "あにはだいがくのがくせいです。", en: "My older brother is a university student." }, accept: ["older brother", "big brother", "elder brother"], hint: "A-ni — two beats. ⚠️ Japanese splits siblings by AGE, with no neutral word for brother at all: あに is older, おとうと younger, and you must know which before you can speak. Your own, humbly; someone else's is おにいさん." },
        { id: "ja-u8l2-ane", type: "vocab", front: "あね", reading: "ane", meaning: "my older sister", example: { jp: "あねがすきです。", en: "I like my older sister." }, drill: { jp: "あねはくるまをかいます。", en: "My older sister buys a car." }, accept: ["older sister", "big sister", "elder sister"], hint: "A-ne — two beats. ⚠️ One kana apart from あに, older brother, in this same lesson — に for him, ね for her. The younger one is いもうと, and the polite version of あね is おねえさん." },
        { id: "ja-u8l2-otouto", type: "vocab", front: "おとうと", reading: "otōto", meaning: "my younger brother", example: { jp: "おとうとはこどもです。", en: "My younger brother is a child." }, drill: { jp: "おとうとはゲームがすきです。", en: "My younger brother likes games." }, accept: ["younger brother", "little brother", "kid brother"], hint: "o-TOH-to — four beats: o-to-o-to, the う lengthening the middle. ⚠️ Three of its four beats are と — hold the long o or it collapses into おとと, which is nothing. Someone else's younger brother is おとうとさん." },
        { id: "ja-u8l2-imouto", type: "vocab", front: "いもうと", reading: "imōto", meaning: "my younger sister", example: { jp: "いもうとがすきです。", en: "I love my little sister." }, drill: { jp: "いもうとはがっこうにいきます。", en: "My younger sister goes to school." }, accept: ["younger sister", "little sister", "kid sister"], hint: "i-MOH-to — four beats: i-mo-o-to, the う lengthening the mo. ⚠️ The partner of おとうと, and it shares the long o — both younger siblings carry it. Someone else's is いもうとさん." },
        { id: "ja-u8l2-akachan", type: "vocab", front: "あかちゃん", reading: "akachan", meaning: "baby", example: { jp: "あかちゃんがすきです。", en: "I like babies." }, drill: { jp: "あかちゃんはちいさいです。", en: "The baby is small." }, accept: ["a baby", "babies", "infant", "newborn"], hint: "a-ka-CHAN — four beats: a-ka-cha-n. あか is red and ちゃん is the affectionate suffix, so a baby is literally little-red-one — Japanese newborns are described as red, not pink. The formal word is あかご." },
        { id: "ja-u8l2-mago", type: "vocab", front: "まご", reading: "mago", meaning: "grandchild", example: { jp: "これはまごです。", en: "This is my grandchild." }, drill: { jp: "まごはかわいいです。", en: "My grandchild is cute." }, accept: ["grandchildren", "a grandchild", "grandkid", "grandson or granddaughter"], hint: "MA-go — two beats, hard g. ⚠️ No gender in it: まご covers grandson and granddaughter, and no plural either. Someone else's is おまごさん, with ご-style politeness built from the honorific お plus さん." },
        { id: "ja-u8l2-musuko", type: "vocab", front: "むすこ", reading: "musuko", meaning: "my son", example: { jp: "むすこはこどもです。", en: "My son is a child." }, drill: { jp: "むすこはテニスをします。", en: "My son plays tennis." }, accept: ["son", "boy (child of mine)", "my boy"], hint: "mu-SU-ko — three beats. ⚠️ Your own son, humbly. Someone else's is むすこさん or ぼっちゃん. ⚠️ One kana from むすめ, daughter, in this same lesson: こ for a boy, め for a girl." },
        { id: "ja-u8l2-musume", type: "vocab", front: "むすめ", reading: "musume", meaning: "my daughter", example: { jp: "むすめがすきです。", en: "I love my daughter." }, drill: { jp: "むすめはえいごをはなします。", en: "My daughter speaks English." }, accept: ["daughter", "girl (child of mine)", "my girl"], hint: "mu-SU-me — three beats. ⚠️ The mirror of むすこ, one kana away. Someone else's daughter is むすめさん or おじょうさん. Both words are humble, so you never use them about another family." },
      ],
    },
    // Lesson 3: someone else's family (honorific forms)
    {
      id: "ja-u8l3",
      unit: 8,
      lesson: 3,
      title: "Someone's family (polite)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the polite family words for other people's relatives: おとうさん おかあさん おにいさん おねえさん.",
      items: [
        { id: "ja-u8l3-otousan", type: "vocab", front: "おとうさん", reading: "otōsan", meaning: "father (someone's)", example: { jp: "おとうさんはおげんきですか。", en: "Is your father well?" }, drill: { jp: "おとうさんはどこですか。", en: "Where is your father?" }, accept: ["father", "your father", "dad", "someone's father"], hint: "おとうさん is the polite word for SOMEONE ELSE's father (or how a child addresses their own dad). Your own father, humbly, is ちち (Lesson 1)." },
        { id: "ja-u8l3-okaasan", type: "vocab", front: "おかあさん", reading: "okāsan", meaning: "mother (someone's)", example: { jp: "おかあさんはせんせいですか。", en: "Is your mother a teacher?" }, drill: { jp: "おかあさんにてがみをかきます。", en: "I write a letter to your mother." }, accept: ["mother", "your mother", "mom", "mum"], hint: "o-KAH-san — five beats: o-ka-a-sa-n, with the doubled あ held. ⚠️ Polite, for SOMEONE ELSE's mother — or how a child addresses their own. Your own, humbly, is はは in Lesson 1. The お and the さん are both doing politeness work." },
        { id: "ja-u8l3-oniisan", type: "vocab", front: "おにいさん", reading: "oniisan", meaning: "older brother (someone's)", example: { jp: "おにいさんはせんせいですか。", en: "Is your older brother a teacher?" }, drill: { jp: "おにいさんもきますか。", en: "Is your older brother coming too?" }, accept: ["older brother", "your older brother", "big brother", "someone's older brother"], hint: "o-NEE-san — five beats: o-ni-i-sa-n, the doubled い held. ⚠️ Polite form of あに. ⚠️ ONE KANA from おねえさん, older sister, in this same lesson — にい for him, ねえ for her. Also used to address a young man you do not know." },
        { id: "ja-u8l3-oneesan", type: "vocab", front: "おねえさん", reading: "onēsan", meaning: "older sister (someone's)", example: { jp: "おねえさんはおげんきですか。", en: "Is your older sister well?" }, drill: { jp: "おねえさんはうんどうがすきですか。", en: "Does your older sister like exercise?" }, accept: ["older sister", "your older sister", "big sister", "someone's older sister"], hint: "o-NEH-san — five beats: o-ne-e-sa-n, the doubled え held. ⚠️ Polite form of あね, and the near-twin of おにいさん — get the vowel wrong and you change the sibling's gender. Also how you address a young woman politely." },
        { id: "ja-u8l3-ojiisan", type: "vocab", front: "おじいさん", reading: "ojiisan", meaning: "grandfather (someone's)", example: { jp: "おじいさんはおげんきですか。", en: "Is your grandfather well?" }, drill: { jp: "おじいさんはまちにすみます。", en: "Your grandfather lives in town." }, accept: ["grandfather", "grandpa", "old man", "elderly man"], hint: "おじいさん is the polite word for SOMEONE ELSE's grandfather (also any elderly man). Your own grandfather, humbly, is そふ (Lesson 1)." },
        { id: "ja-u8l3-obaasan", type: "vocab", front: "おばあさん", reading: "obāsan", meaning: "grandmother (someone's)", example: { jp: "おばあさんはおげんきですか。", en: "Is your grandmother well?" }, drill: { jp: "おばあさんはおちゃをのみます。", en: "Your grandmother drinks tea." }, accept: ["grandmother", "grandma", "old woman", "elderly woman"], hint: "o-BAH-san — five beats: o-ba-a-sa-n, the doubled あ held. ⚠️ Polite for someone else's grandmother, and for any elderly woman. ⚠️ SHORTEN THE VOWEL and おばさん is an aunt — one held beat between grandmother and aunt." },
        { id: "ja-u8l3-goshujin", type: "vocab", front: "ごしゅじん", reading: "goshujin", meaning: "husband (someone's)", example: { jp: "ごしゅじんはせんせいですか。", en: "Is your husband a teacher?" }, drill: { jp: "ごしゅじんはかいしゃいんですか。", en: "Is your husband an office worker?" }, accept: ["husband", "your husband", "someone's husband", "the master of the house"], hint: "ごしゅじん is the polite word for SOMEONE ELSE's husband. Your own husband, humbly, is おっと (Lesson 1)." },
        { id: "ja-u8l3-okusan", type: "vocab", front: "おくさん", reading: "okusan", meaning: "wife (someone's)", example: { jp: "おくさんはおげんきですか。", en: "Is your wife well?" }, drill: { jp: "おくさんはえいごのせんせいですか。", en: "Is your wife an English teacher?" }, accept: ["wife", "your wife", "someone's wife", "the lady of the house"], hint: "o-ku-SAN — four beats. ⚠️ Polite, for SOMEONE ELSE's wife; your own is つま, in Lesson 1. おく means the inner part of a house, which is where the word comes from — and why modern Japanese is quietly moving to つれあい instead." },
      ],
    },
    // Lesson 4: people
    {
      id: "ja-u8l4",
      unit: 8,
      lesson: 4,
      title: "People",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about people: おとこ おんな おとな みんな, and ask だれ (who?).",
      items: [
        { id: "ja-u8l4-otoko", type: "vocab", front: "おとこ", reading: "otoko", meaning: "man", example: { jp: "あのひとはおとこです。", en: "That person is a man." }, drill: { jp: "おとこのひとがいます。", en: "There is a man." }, accept: ["male", "a man", "men", "a male"], hint: "o-TO-ko — three beats. ⚠️ On its own it is blunt, almost a label, so Japanese usually says おとこのひと, a male person, when speaking politely about someone. ⚠️ One kana from おとな, adult, in this same lesson." },
        { id: "ja-u8l4-onna", type: "vocab", front: "おんな", reading: "onna", meaning: "woman", example: { jp: "このひとはおんなです。", en: "This person is a woman." }, drill: { jp: "おんなのひとがきます。", en: "A woman is coming." }, accept: ["female", "a woman", "women", "a female"], hint: "ON-na — three beats, the ん its own held beat: o-n-na. ⚠️ Blunt on its own, exactly like おとこ — say おんなのひと about a person you are being polite about. A girl is おんなのこ, a female child." },
        { id: "ja-u8l4-otona", type: "vocab", front: "おとな", reading: "otona", meaning: "adult", example: { jp: "おとなとこども。", en: "Adults and children." }, drill: { jp: "おとなはひゃくえんです。", en: "Adults are a hundred yen." }, accept: ["a grown-up", "grown-up", "adults", "an adult"], hint: "o-TO-na — three beats. The opposite of こども. ⚠️ One kana from おとこ, man, which sits in this same lesson — な for grown-up, こ for male. おとなしい, from the same root, means well-behaved, not adult." },
        { id: "ja-u8l4-okyaku", type: "vocab", front: "おきゃくさん", reading: "okyakusan", meaning: "guest", example: { jp: "おきゃくさんです。", en: "It's a guest." }, drill: { jp: "おきゃくさんがきます。", en: "A guest is coming." }, accept: ["customer", "visitor", "the customer", "a guest"], hint: "o-kya-ku-SAN — five beats: o-kya-ku-sa-n, きゃ a single sound. Guest AND customer in one word, which is why Japanese shops address you as おきゃくさま — the even politer ending. Never say it without the お and the さん." },
        { id: "ja-u8l4-minna", type: "vocab", front: "みんな", reading: "minna", meaning: "everyone", example: { jp: "みんなともだちです。", en: "Everyone is a friend." }, drill: { jp: "みんなでゲームをします。", en: "We all play a game together." }, accept: ["everybody", "all", "all of them", "the whole group"], hint: "MIN-na — three beats, the ん its own held beat: mi-n-na. Casual. ⚠️ The polite みなさん, in Lesson 5, drops the ん: mi-na-sa-n. Use みんなで to mean all together, as a group." },
        { id: "ja-u8l4-dare", type: "vocab", front: "だれ", reading: "dare", meaning: "who", example: { jp: "あのひとはだれですか。", en: "Who is that person?" }, drill: { jp: "これはだれのかばんですか。", en: "Whose bag is this?" }, accept: ["who?", "whom", "which person", "who is it"], hint: "DA-re — two beats, tapped r. ⚠️ It never changes for whose or whom — だれの is whose, だれに is to whom. The polite version is どなた, which you will hear in shops and on the phone." },
        { id: "ja-u8l4-gakusei", type: "vocab", front: "がくせい", reading: "gakusei", meaning: "student", example: { jp: "あのひとはがくせいです。", en: "That person is a student." }, drill: { jp: "がくせいはほんをよみます。", en: "The student reads a book." }, accept: ["a student", "pupil", "students", "schoolchild"], hint: "ga-ku-SEI — four beats, せい keeps ei as two vowels: ga-ku-se-i. がく is learning — the same がく as がっこう and だいがく — and せい is the one who does it. A university one is a だいがくせい." },
        { id: "ja-u8l4-kaishain", type: "vocab", front: "かいしゃいん", reading: "kaishain", meaning: "office worker", example: { jp: "ちちはかいしゃいんです。", en: "My father is an office worker." }, drill: { jp: "かいしゃいんはバスでいきます。", en: "The office worker goes by bus." }, accept: ["company employee", "employee", "salaryman", "office staff"], hint: "kai-sha-IN — five beats: ka-i-sha-i-n, しゃ a single sound. かいしゃ is a company and いん is a member, so it is literally company-member. The English-looking サラリーマン means the same thing and is a Japanese invention." },
      ],
    },
    // Lesson 5: you & others (pronouns)
    {
      id: "ja-u8l5",
      unit: 8,
      lesson: 5,
      title: "He, she, you",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Refer to people with かれ かのじょ あなた じぶん, and count people (ひとり).",
      items: [
        { id: "ja-u8l5-kare", type: "vocab", front: "かれ", reading: "kare", meaning: "he", example: { jp: "かれはせんせいです。", en: "He is a teacher." }, drill: { jp: "かれはコーヒーをのみます。", en: "He drinks coffee." }, accept: ["him", "boyfriend", "that man", "he is"], hint: "KA-re — two beats, tapped r. ⚠️ It ALSO means boyfriend — かれがいます can be he is here or I have a boyfriend. Japanese drops pronouns whenever context allows, so かれ shows up far less than English he." },
        { id: "ja-u8l5-kanojo", type: "vocab", front: "かのじょ", reading: "kanojo", meaning: "she", example: { jp: "かのじょはともだちです。", en: "She is a friend." }, drill: { jp: "かのじょはえきにいます。", en: "She is at the station." }, accept: ["her", "girlfriend", "that woman", "she is"], hint: "ka-NO-jo — three beats, じょ a single sound. ⚠️ Doubles as girlfriend, the mirror of かれ. ⚠️ It is not かれ plus anything — the words only look related, and かのじょ cannot be shortened." },
        { id: "ja-u8l5-anata", type: "vocab", front: "あなた", reading: "anata", meaning: "you", example: { jp: "あなたはだれですか。", en: "Who are you?" }, drill: { jp: "あなたのなまえはなんですか。", en: "What is your name?" }, accept: ["your", "you singular", "the one addressed"], hint: "a-NA-ta — three beats. 🚨 USE IT ALMOST NEVER. To a Japanese ear あなた is distant or scolding, and from a wife to a husband it means dear. Use the person's name plus さん instead — that is what Japanese actually does." },
        { id: "ja-u8l5-jibun", type: "vocab", front: "じぶん", reading: "jibun", meaning: "oneself", example: { jp: "じぶんでします。", en: "I'll do it myself." }, drill: { jp: "じぶんのへやです。", en: "It's my own room." }, accept: ["myself", "self", "by oneself", "one's own"], hint: "ji-BUN — three beats, the ん held. ⚠️ It takes whichever person the sentence is about: じぶんでします is I'll do it myself, or he'll do it himself. じぶんで means on one's own and じぶんの means one's own." },
        { id: "ja-u8l5-minasan", type: "vocab", front: "みなさん", reading: "minasan", meaning: "everyone (polite)", example: { jp: "みなさん、こんにちは。", en: "Hello, everyone." }, drill: { jp: "みなさんはがくせいですか。", en: "Are you all students?" }, accept: ["everybody", "all of you", "ladies and gentlemen", "you all"], hint: "mi-na-SAN — four beats. ⚠️ The polite みんな, and it DROPS the held ん: mi-na-sa-n, not min-na-san. This is the one you open a speech or a class with: みなさん、こんにちは." },
        { id: "ja-u8l5-hitori", type: "vocab", front: "ひとり", reading: "hitori", meaning: "one person", example: { jp: "ひとりですか。", en: "Are you alone?" }, drill: { jp: "ひとりでいきます。", en: "I go alone." }, accept: ["alone", "by myself", "one (person)", "a single person"], hint: "hi-TO-ri — three beats, tapped r. The counter for people is り after one and two only: ひとり, ふたり, then さんにん, よにん. ⚠️ ひとりで means alone, and ひとりっこ is an only child." },
        { id: "ja-u8l5-watashitachi", type: "vocab", front: "わたしたち", reading: "watashitachi", meaning: "we", example: { jp: "わたしたちはともだちです。", en: "We are friends." }, drill: { jp: "わたしたちはだいがくにいきます。", en: "We go to the university." }, accept: ["us", "we are", "ourselves", "our group"], hint: "wa-ta-shi-TA-chi — five beats. わたし plus たち, the plural-for-people suffix: こどもたち is children, ともだち already contains it. ⚠️ たち only attaches to people, never to things." },
        { id: "ja-u8l5-futari", type: "vocab", front: "ふたり", reading: "futari", meaning: "two people", example: { jp: "ふたりですか。", en: "Are there two of you?" }, drill: { jp: "ふたりでさんぽをします。", en: "The two of us take a walk." }, accept: ["two (people)", "a pair", "couple", "both of them"], hint: "fu-TA-ri — three beats, soft blown ふ. ⚠️ Irregular, like ひとり: two people is ふたり, not にり or にんふ. From three on it is regular — さんにん, よにん, ごにん. Learn these two and the rest follow a rule." },
      ],
    },
  ],
};
