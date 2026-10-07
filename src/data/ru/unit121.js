// RU Unit 121 — Сеть и соцсети ("The net and social media") — B2
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 1 (B2)` — NO SUBJECT NAMED. The slot was
// allocated centrally to the measured hole, and the measurement is this:
// u43 Техника и связь is the WHOLE digital corpus of Russian in this course —
// `экран` · `сайт` · `сеть` · `файл` · `пароль` · `приложение` · `ссылка` ·
// `вирус` · `микрофон` — nine words, and ZERO PLATFORM OR SOCIAL WORDS in all
// 2,328. A learner could say «я открыл сайт» and could not say «аккаунт»,
// «подписчик», «лайк», «стрим», «мем», «утечка» or «забанили».
//
// ⚠️ CROSS-BLOCK BOUNDARY, AND IT IS THE DANGEROUS ONE — this unit and u114 are
// BOTH MINE, which is exactly the shape that cost Indonesian 62 cards (two
// generic slots rethemed into one territory). The split is enforced by lesson,
// not merely by unit:
//     u121 OWNS THE PLATFORM AND THE MACHINE — аккаунт · профиль · подписчик ·
//          лайк · репост · стрим · сервер · алгоритм · утечка. Nothing in this
//          unit names a story's shape, a newsroom role or a kind of article.
//     u114 OWNS THE NARRATIVE AND THE NEWSROOM — повествование · рассказчик ·
//          цензура · фейк · корреспондент · рубрика · колонка. Nothing in that
//          unit names a platform or a device.
// ⚠️ `алгоритм` IS THIS UNIT'S BY CENTRAL ALLOCATION — block 1's u104 yields it
// and cards `датчик` instead.
// ⚠️ `фейк` AND `дезинформация` ARE u114's, not this unit's, although l4 is
// about what goes wrong online. Measured and respected.
//
// ⚠️ ONE ALLOWED §D PAIR, RECORDED SO IT IS NOT "FIXED" LATER:
//   `подписчик` alongside `подписка` (u45, «a subscription») and `подписывать`
//   (u49). Assigned centrally as a boundary word. The judgement: this card is
//   glossed "a follower on social media" and NOT "a subscriber" — the social
//   sense is a different thing from a magazine subscription, and the hint says
//   so and names both taught relatives.
//
// ⚠️ FIVE CANDIDATES REFUSED:
//   `обновление` — §D, against `новый` (u19) and `новость` (u39) at once.
//   `подписка`   — TAKEN (u45).
//   `лента`      — TAKEN (u89), as A RIBBON. The news feed sense is therefore
//                  unavailable as a front; `контент` carries that ground.
//   `вирус` · `облако` — TAKEN (u43, u54). Both are the words a seat will reach
//                  for first, so they are named here.
//   `шифрование` · `модерация`… `шифрование` probes free and is DEFERRED;
//                  `модерация` IS carded, at l4.
// ⚠️ A REGISTER NOTE THAT IS NOT A DEFECT: `лайк` · `репост` · `мем` · `бан` ·
// `никнейм` · `стрим` are recent borrowings and they are the words Russians
// actually use. They decline normally (лайка, лайком, лайки) and the verbs
// лайкнуть / забанить / репостнуть are built the ordinary way. A course that
// taught «отметка нравится» instead would be teaching a word nobody says.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT121 = {
  id: "ru-u121",
  lang: "ru",
  title: "Сеть и соцсети",
  order: 121,
  stage: "b2",
  lessons: [
    {
      id: "ru-u121l1",
      unit: 121,
      lesson: 1,
      title: "Your presence on a platform",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name an account, a profile, a follower, a like, a reshare and a username.",
      items: [
        { id: "ru-u121l1-akkaunt", type: "vocab", front: "аккаунт", reading: "akkaunt", meaning: "an online account", accept: ["a user account", "a registered account on a site", "the account you log in to"], example: { jp: "Аккаунт у него есть, но пароль он не помнит.", en: "He has an account, but he does not remember the password." }, drill: { jp: "Аккаунт у него есть", en: "He has an account" }, hint: "a-KA-unt — stress on KA, the double к said as one long k, and the final -унт is two syllables run together. MASCULINE. ⚠️ A RECENT BORROWING THAT FULLY DECLINES: аккаунта, аккаунтом, аккаунты. The older Russian word is «учётная запись», which is what Windows says and nobody says aloud. Works with `пароль` (u43), already taught." },
        { id: "ru-u121l1-profil", type: "vocab", front: "профиль", reading: "profil", meaning: "a user profile", accept: ["your page on a site", "a profile page", "the page about you"], example: { jp: "Профиль у него только для друзей, и больше его никто не видит.", en: "His profile is for friends only, and nobody else sees it." }, drill: { jp: "Профиль у него только для друзей", en: "His profile is for friends only" }, hint: "PRO-fil — stress on the first syllable, with the ь keeping the л soft. ⚠️ MASCULINE despite the -ь (unit1.js §3), like `словарь` and `день`. ⚠️ TWO OLDER SENSES STILL LIVE: a face seen from the side («в профиль»), and a FIELD OF WORK — «это не мой профиль», that is not my line. Do not confuse with `польза` or `профессия` (u8)." },
        { id: "ru-u121l1-podpischik", type: "vocab", front: "подписчик", reading: "podpischik", meaning: "a follower on social media", accept: ["someone who follows your account", "a follower", "a person subscribed to your posts"], example: { jp: "Подписчик у него только один — его собственная мама.", en: "He has only one follower: his own mother." }, drill: { jp: "Подписчик у него только один", en: "He has only one follower" }, hint: "pat-PI-shchik — stress on PI, the д devoicing to t before п, and the сч said as shch. MASCULINE. ⚠️ `подписка` (u45) IS ALREADY TAUGHT AS «a subscription» AND `подписывать` (u49) AS «to sign» — three words from one root, which unit1.js §D would normally refuse. This card is kept because the SOCIAL sense is a separate thing and is glossed as «a follower», never as «a subscriber»; see the header." },
        { id: "ru-u121l1-layk", type: "vocab", front: "лайк", reading: "layk", meaning: "a like on a post", accept: ["a thumbs-up on a post", "a tap to show approval", "a mark of approval on a post"], example: { jp: "Лайк — это ещё не помощь, и он это понимает.", en: "A like is not yet help, and he understands that." }, drill: { jp: "Лайк это ещё не помощь", en: "A like is not yet help" }, hint: "LAYK — one syllable. MASCULINE. ⚠️ FULLY NATURALISED: лайка, лайком, лайки, and the verb is лайкнуть — «он лайкнул фото». ⚠️ The official Russian phrase «отметка нравится» exists in interfaces and nobody says it; this is the word to learn. Built on `нравится` (u8) only in meaning, not in form." },
        { id: "ru-u121l1-repost", type: "vocab", front: "репост", reading: "repost", meaning: "a reshare", accept: ["a shared post", "passing someone's post on", "a repost"], example: { jp: "Репост делают все, и новость знает весь город.", en: "Everyone reshares it, and the whole city knows the news." }, drill: { jp: "Репост делают все", en: "Everyone reshares it" }, hint: "re-POST — stress on the last syllable. MASCULINE. ⚠️ THE VERB IS `делать`: «сделать репост», and the slangier репостнуть also exists. ⚠️ Do not confuse with `репортаж` (u45), a report from the scene — the two look close and share no root at all. In Russia a репост has been enough to bring a criminal case, which is worth knowing." },
        { id: "ru-u121l1-nikneym", type: "vocab", front: "никнейм", reading: "nikneym", meaning: "a username", accept: ["an online handle", "the name you use online", "a screen name"], example: { jp: "Никнейм у него ещё из школы, и менять его он не хочет.", en: "His username is from school days, and he does not want to change it." }, drill: { jp: "Никнейм у него ещё из школы", en: "His username is from school days" }, hint: "nik-NEYM — stress on the last syllable. MASCULINE. ⚠️ Shortened to «ник» in speech, which is what Russians actually say — «какой у тебя ник?». The native alternative «псевдоним» means a pen-name and belongs to literature. ⚠️ The borrowing is complete: никнейма, никнеймом." },
      ],
    },
    {
      id: "ru-u121l2",
      unit: 121,
      lesson: 2,
      title: "What people put online",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a blog, content, a livestream, a podcast, a meme and a chat.",
      items: [
        { id: "ru-u121l2-blog", type: "vocab", front: "блог", reading: "blog", meaning: "a blog", accept: ["an online diary", "a personal site with posts", "a web log"], example: { jp: "Блог он пишет пять лет и денег за это не просит.", en: "He has been writing the blog for five years and does not ask money for it." }, drill: { jp: "Блог он пишет уже пять лет", en: "He has been writing the blog for five years now" }, hint: "BLOG — one syllable. MASCULINE. ⚠️ The person is a «блогер» with ONE г, which is the official Russian spelling and a frequent mistake even among Russians. Declines normally: блога, блогом, блоги. Russian has no native word for it at all." },
        { id: "ru-u121l2-kontent", type: "vocab", front: "контент", reading: "kontent", meaning: "online content", accept: ["material published online", "what a site is filled with", "the content of a platform"], example: { jp: "Контент здесь новый каждый день, и поэтому людям интересно.", en: "The content here is new every day, and that is why people find it interesting." }, drill: { jp: "Контент здесь новый каждый день", en: "The content here is new every day" }, hint: "kan-TENT — stress on the last syllable, the о reducing to a. MASCULINE. ⚠️ UNCOUNTABLE AND SLIGHTLY COMMERCIAL: «делать контент» is what an influencer does for a living, and the word carries a faint whiff of production line. The native `содержание` is the content of a BOOK or a letter and is not interchangeable." },
        { id: "ru-u121l2-strim", type: "vocab", front: "стрим", reading: "strim", meaning: "a livestream", accept: ["a live broadcast online", "streaming live video", "a live stream"], example: { jp: "Стрим идёт три часа, и смотрят его в основном вечером.", en: "The stream runs for three hours, and people mostly watch it in the evening." }, drill: { jp: "Стрим идёт три часа", en: "The stream runs for three hours" }, hint: "STRIM — one syllable. MASCULINE. ⚠️ THE PERSON IS A «стример» and the verb стримить, both fully naturalised. ⚠️ Different from `вещание` (u114), which is institutional broadcasting with a licence: a стрим is one person with a camera. Note the example uses `в основном` from u118 — your own connective, one unit earlier." },
        { id: "ru-u121l2-podkast", type: "vocab", front: "подкаст", reading: "podkast", meaning: "a podcast", accept: ["an audio programme online", "a downloadable talk show", "the podcast"], example: { jp: "Подкаст он слушает в дороге, потому что читать там нельзя.", en: "He listens to the podcast on the way, because it is impossible to read there." }, drill: { jp: "Подкаст он слушает в дороге", en: "He listens to the podcast on the way" }, hint: "pat-KAST — stress on the last syllable, the д devoicing to t before к. MASCULINE. ⚠️ The spelling with а — подкаст, not «подкэст» — is the settled Russian form. The д is written but not heard, which is unit 6's final-devoicing rule applying inside a word." },
        { id: "ru-u121l2-mem", type: "vocab", front: "мем", reading: "mem", meaning: "an internet meme", accept: ["a joke image passed around", "a viral joke format", "a meme"], example: { jp: "Мем про эту историю знают даже те, кто её не читал.", en: "Even people who did not read the story know the meme about it." }, drill: { jp: "Мем про эту историю знают все", en: "Everyone knows the meme about this story" }, hint: "MEM — one syllable. MASCULINE. ⚠️ Declines normally (мема, мемом, мемы) and the adjective мемный exists. ⚠️ Do not confuse with `мемуары` (u73), which are memoirs — one letter apart in the stem and nothing to do with each other. Russian also uses «мемас» as slang, which this course does not card." },
        { id: "ru-u121l2-chat", type: "vocab", front: "чат", reading: "chat", meaning: "a chat thread", accept: ["an online conversation", "a messaging thread", "a group chat"], example: { jp: "Чат на работе никогда не молчит, и это очень мешает.", en: "The chat at work is never silent, and that gets in the way a lot." }, drill: { jp: "Чат на работе никогда не молчит", en: "The chat at work is never silent" }, hint: "CHAT — one syllable. MASCULINE. ⚠️ USUALLY A GROUP, in Russian practice: «рабочий чат», «чат дома», «чат класса» — the shared thread everyone is in, which is where a Russian's day actually happens. A one-to-one exchange is «личка» in slang, which this course does not card. The verb is «писать в чат»." },
      ],
    },
    {
      id: "ru-u121l3",
      unit: 121,
      lesson: 3,
      title: "The machinery underneath",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a server, a browser, an algorithm, traffic, a download and a gadget.",
      items: [
        { id: "ru-u121l3-server", type: "vocab", front: "сервер", reading: "server", meaning: "a server machine", accept: ["a machine that serves a site", "the server computer", "a host machine"], example: { jp: "Сервер не работал два часа, и сайт никто не мог открыть.", en: "The server was down for two hours, and nobody could open the site." }, drill: { jp: "Сервер не работал два часа", en: "The server was down for two hours" }, hint: "SER-ver — stress on the FIRST syllable, which is where learners go wrong. MASCULINE. ⚠️ Nothing to do with a waiter, which English «server» can mean. Works with `сайт` and `сеть`, both taught at u43. Note the spelling has two е and no soft sign." },
        { id: "ru-u121l3-brauzer", type: "vocab", front: "браузер", reading: "brauzer", meaning: "a web browser", accept: ["the program you open sites in", "a browser", "web-browsing software"], example: { jp: "Браузер он не менял никогда, хотя есть и лучше.", en: "He has never changed his browser, although there are better ones." }, drill: { jp: "Браузер он не менял никогда", en: "He has never changed his browser" }, hint: "BRA-u-zer — stress on BRA, with ау said as two separate vowels. MASCULINE. ⚠️ Russian has no native word for it and nobody has tried to invent one. The spelling varies in the wild («браузер» / «броузер»); браузер is the standard one and the only one to learn." },
        { id: "ru-u121l3-algoritm", type: "vocab", front: "алгоритм", reading: "algoritm", meaning: "an algorithm", accept: ["a set of rules a machine follows", "the ranking rules of a feed", "a computational procedure"], example: { jp: "Алгоритм показывает каждому своё, и поэтому все видят разное.", en: "The algorithm shows each person their own thing, and so everyone sees something different." }, drill: { jp: "Алгоритм показывает каждому своё", en: "The algorithm shows each person their own thing" }, hint: "al-ga-RITM — stress on the last syllable, ending in the cluster -итм, and the о reducing to a. MASCULINE. ⚠️ THIS CARD IS THIS UNIT'S BY CENTRAL ALLOCATION — block 1's u104 Science and technology yields it and cards `датчик` instead. ⚠️ TWO REGISTERS: the mathematical sense, and the everyday one about what a feed decides to show you. From the name of the mathematician al-Khwārizmī." },
        { id: "ru-u121l3-trafik", type: "vocab", front: "трафик", reading: "trafik", meaning: "data traffic", accept: ["the volume of visits to a site", "network traffic", "the data a connection uses"], example: { jp: "Трафик здесь дорогой, и поэтому все ищут бесплатный интернет.", en: "Data here is expensive, and so everyone looks for free internet." }, drill: { jp: "Трафик здесь дорогой", en: "Data here is expensive" }, hint: "TRA-fik — stress on the first syllable. MASCULINE. ⚠️ TWO SENSES AND BOTH EVERYDAY IN RUSSIA: the data allowance on your phone plan («трафик закончился»), and the number of visitors a site gets. ⚠️ It does NOT mean road traffic — that is «движение» or «пробка» — which is the trap for an English speaker." },
        { id: "ru-u121l3-zagruzka", type: "vocab", front: "загрузка", reading: "zagruzka", meaning: "the loading of a file", accept: ["downloading or uploading", "the transfer of a file", "a file transfer"], example: { jp: "Загрузка шла всю ночь, потому что интернет был очень слабый.", en: "The download went on all night, because the internet was very weak." }, drill: { jp: "Загрузка шла всю ночь", en: "The download went on all night" }, hint: "za-GRUZ-ka — stress on GRUZ. FEMININE (-а). ⚠️ RUSSIAN USES ONE WORD WHERE ENGLISH USES TWO: загрузка covers both downloading and uploading, and only context separates them («загрузка файла» could be either). It is also the BOOTING of a computer and the LOADING of a lorry. From грузить, to load, which is not carded." },
        { id: "ru-u121l3-gadzhet", type: "vocab", front: "гаджет", reading: "gadzhet", meaning: "a handheld device", accept: ["a small electronic device", "a piece of personal tech", "a gadget you carry"], example: { jp: "Гаджет у ребёнка всегда в руках, и это большая проблема.", en: "The child's gadget is always in his hands, and that is a big problem." }, drill: { jp: "Гаджет у ребёнка всегда в руках", en: "The child's gadget is always in his hands" }, hint: "GA-dzhet — stress on the first syllable, with дж said as a single j sound. MASCULINE. ⚠️ A WORD RUSSIAN PARENTS USE CONSTANTLY: «убери гаджеты», put the devices away. It is broader than «телефон» (u9) and narrower than «техника» — any small screen you carry. The plural гаджеты is the commoner form." },
      ],
    },
    {
      id: "ru-u121l4",
      unit: 121,
      lesson: 4,
      title: "When it goes wrong online",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name spam, a hacker, a data leak, a troll, a ban and moderation.",
      items: [
        { id: "ru-u121l4-spam", type: "vocab", front: "спам", reading: "spam", meaning: "junk messages", accept: ["junk mail online", "unwanted mass messages", "unsolicited advertising mail"], example: { jp: "Спам приходит каждый день, и читать его никто не станет.", en: "Spam arrives every day, and nobody is going to read it." }, drill: { jp: "Спам приходит каждый день", en: "Spam arrives every day" }, hint: "SPAM — one syllable. MASCULINE, and ⚠️ UNCOUNTABLE, so there is no «спамы». The verb спамить exists. ⚠️ Russian uses it of phone calls and messages too, not only of email — «спам-звонки» are the cold calls everyone gets." },
        { id: "ru-u121l4-khaker", type: "vocab", front: "хакер", reading: "khaker", meaning: "a hacker", accept: ["someone who breaks into systems", "a computer intruder", "the hacker"], example: { jp: "Хакер находит старый пароль и читает все письма.", en: "The hacker finds an old password and reads all the letters." }, drill: { jp: "Хакер находит старый пароль очень быстро", en: "The hacker finds an old password very quickly" }, hint: "KHA-ker — stress on the first syllable, opening with the scraping х. MASCULINE. ⚠️ ALWAYS NEGATIVE IN RUSSIAN USE — the admiring English sense of «a clever programmer» did not come across with the word. Works with `пароль` (u43). The verb «взломать» is what a хакер does, and it is not carded." },
        { id: "ru-u121l4-utechka", type: "vocab", front: "утечка", reading: "utechka", meaning: "a data leak", accept: ["a leak of information", "the leaking out of data", "a breach that lets data out"], example: { jp: "Утечка была большая, и об этом писали все газеты.", en: "The leak was a big one, and all the newspapers wrote about it." }, drill: { jp: "Утечка была большая", en: "The leak was a big one" }, hint: "u-TECH-ka — stress on TECH. FEMININE (-а). ⚠️ LITERAL FIRST: «утечка газа» is a gas leak, «утечка воды» a water leak — and the information sense is built on that picture. From течь «to flow», the same root as u117's `в течение`. ⚠️ This card is u121's by allocation: `фейк` and `дезинформация` are u114's, so this unit covers the LEAK and that unit the LIE." },
        { id: "ru-u121l4-troll", type: "vocab", front: "тролль", reading: "troll", meaning: "an online troll", accept: ["someone who posts to provoke", "a provocateur in comments", "a deliberate irritant online"], example: { jp: "Тролль пишет не потому, что ему интересно, а чтобы все спорили.", en: "A troll writes not because he is interested but so that everyone argues." }, drill: { jp: "Тролль пишет только ради спора", en: "A troll writes only for the sake of an argument" }, hint: "TROL — one syllable, with the double лл written and said as one long soft l. MASCULINE. ⚠️ TWO SENSES AND THE FAIRY-TALE ONE CAME FIRST: a Scandinavian troll under a bridge, and the internet kind. The verb троллить is completely standard Russian now — «он тебя троллит», he is winding you up." },
        { id: "ru-u121l4-ban", type: "vocab", front: "бан", reading: "ban", meaning: "a ban from a platform", accept: ["being blocked from a site", "exclusion from a forum", "a block on an account"], example: { jp: "Бан он получает за каждое слово, и больше туда не пишет.", en: "He gets a ban for every word, and no longer writes there." }, drill: { jp: "Бан он получает за каждое слово", en: "He gets a ban for every word" }, hint: "BAN — one syllable. MASCULINE. ⚠️ SPECIFICALLY A PLATFORM BLOCK, not a legal prohibition — a law banning something is a «запрет». The verbs забанить and разбанить are both normal, and «в бане» means banned, which is a joke Russians enjoy because it also means «in the bathhouse». ⚠️ Nothing to do with `банк` (u9) or `банкомат` (u44)." },
        { id: "ru-u121l4-moderatsiya", type: "vocab", front: "модерация", reading: "moderatsiya", meaning: "moderation of a forum", accept: ["the policing of comments", "checking what users post", "editorial control of a comment thread"], example: { jp: "Модерация здесь слабая, и поэтому в чате так много спама.", en: "Moderation here is weak, and that is why there is so much spam in the chat." }, drill: { jp: "Модерация здесь слабая", en: "Moderation here is weak" }, hint: "ma-de-RA-tsi-ya — stress on RA, the first о reducing to a. FEMININE (-я). ⚠️ THE PERSON IS A «модератор», which is the word you meet far more often. ⚠️ Keep it apart from `цензура` (u114): цензура is the STATE deciding what may be said, модерация is a platform deciding what may stay on it — and in Russia the line between them is a live argument." },
      ],
    },
  ],
};
