// NO Unit 3 — Om meg selv ("Introducing yourself") — A1
// Name, language, where you live, age, work, and the third-person pronouns.
// Conventions are declared in no/unit1.js and bind every unit.
//
// PREPOSITIONS START HERE. `i` and `fra` are taught in l2 because å bo and å komme
// are unusable without them; `til` and `på` wait for u7, where directions need them
// (unit1.js §8c). Units 1–2 are written to need no preposition at all.
//
// V2 continues to be modelled rather than explained — "Her bor jeg", "Hvor kommer
// du fra?", "Hvor jobber du?" — and the fronted-adverb inversion in `her` is the
// clearest example in the block.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT3 = {
  id: "no-u3",
  lang: "no",
  title: "Om meg selv",
  order: 3,
  stage: "a1",
  lessons: [
    {
      id: "no-u3l1",
      unit: 3,
      lesson: 1,
      title: "My name, my language",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you are called, ask who someone is, and admit how much you understand: Jeg snakker litt norsk.",
      items: [
        { id: "no-u3l1-ahete", type: "vocab", front: "å hete", reading: "ahete", meaning: "to be called", example: { jp: "Jeg heter Erling.", en: "My name is Erling." }, accept: ["be called", "to be named", "be named"], hint: "Norwegian does not say \"my name is\" — it says \"I am called\": jeg heter. Ask it back with hva heter du?" },
        { id: "no-u3l1-etnavn", type: "vocab", front: "et navn", reading: "etnavn", meaning: "name", example: { jp: "Erling er et navn.", en: "Erling is a name." }, accept: ["a name"], drill: { jp: "Hva er et navn", en: "What is a name" }, hint: "Neuter: definite navnet, and the plural is navn — unchanged. Short neuter nouns often do that." },
        { id: "no-u3l1-asnakke", type: "vocab", front: "å snakke", reading: "asnakke", meaning: "to speak", example: { jp: "Jeg snakker norsk.", en: "I speak Norwegian." }, accept: ["speak", "to talk", "talk"], drill: { jp: "Det er viktig å snakke norsk", en: "It is important to speak Norwegian" }, hint: "The everyday word for talking. Present snakker, like every regular verb: infinitive plus r." },
        { id: "no-u3l1-hvem", type: "vocab", front: "hvem", reading: "hvem", meaning: "who", example: { jp: "Hvem er du?", en: "Who are you?" }, accept: ["whom", "who?"], drill: { jp: "Hvem kjenner Erling", en: "Who knows Erling" }, hint: "VEM — the fourth of the silent-h question words, after hva, hvor and hvordan. All four begin hv-, all four drop it." },
        { id: "no-u3l1-aforsta", type: "vocab", front: "å forstå", reading: "aforsta", meaning: "to understand", example: { jp: "Jeg forstår ikke norsk.", en: "I do not understand Norwegian." }, accept: ["understand", "to comprehend", "get"], drill: { jp: "Det er viktig å forstå norsk", en: "It is important to understand Norwegian" }, hint: "Built on å stå, to stand — for-STAW. Present forstår. The single most useful sentence in a new country is jeg forstår ikke." },
        { id: "no-u3l1-litt", type: "vocab", front: "litt", reading: "litt", meaning: "a little", example: { jp: "Jeg snakker litt norsk.", en: "I speak a little Norwegian." }, accept: ["a bit", "little", "some", "slightly"], drill: { jp: "Jeg forstår litt norsk", en: "I understand a little Norwegian" }, hint: "LITT, short and clipped. Jeg snakker litt norsk buys you more patience than any other sentence you can learn today." },
      ],
    },
    {
      id: "no-u3l2",
      unit: 3,
      lesson: 2,
      title: "Where I am from, where I live",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where you are from and where you live, and open a sentence with her — which pushes the verb ahead of the subject: Her bor jeg.",
      items: [
        { id: "no-u3l2-fra", type: "vocab", front: "fra", reading: "fra", meaning: "from", example: { jp: "Hvor er du fra?", en: "Where are you from?" }, accept: ["out of", "away from"], drill: { jp: "Kari kommer fra Bergen", en: "Kari comes from Bergen" }, hint: "It sits at the END in a question: hvor er du fra, never \"fra hvor er du\". Norwegian is happy to leave a preposition stranded." },
        { id: "no-u3l2-i", type: "vocab", front: "i", reading: "i", meaning: "in", example: { jp: "Jeg bor i Oslo.", en: "I live in Oslo." }, accept: ["at", "inside", "within"], drill: { jp: "Erling jobber i en by", en: "Erling works in a city" }, hint: "Said EE. Used for countries, cities and enclosed spaces — i Norge, i Oslo, i et hus." },
        { id: "no-u3l2-etland", type: "vocab", front: "et land", reading: "etland", meaning: "country", example: { jp: "Norge er et land i Europa.", en: "Norway is a country in Europe." }, accept: ["a country", "land", "nation"], drill: { jp: "Norge er et land", en: "Norway is a country" }, hint: "Neuter: definite landet, plural land — unchanged again. It also means \"land\" as opposed to sea." },
        { id: "no-u3l2-abo", type: "vocab", front: "å bo", reading: "abo", meaning: "to live", example: { jp: "Erling bor i en by.", en: "Erling lives in a city." }, accept: ["live", "to reside", "reside", "to dwell"], drill: { jp: "Det er hyggelig å bo her", en: "It is nice to live here" }, hint: "This is living-somewhere, not being-alive. Present bor — a one-syllable verb, so the r just sticks on: BOOR." },
        { id: "no-u3l2-enby", type: "vocab", front: "en by", reading: "enby", meaning: "city", example: { jp: "Bergen er en by i Norge.", en: "Bergen is a city in Norway." }, accept: ["a city", "town", "a town"], drill: { jp: "Bergen er en by", en: "Bergen is a city" }, hint: "BUE, with the tight Norwegian y — say \"ee\" and round your lips. One word for both city and town; Norway has few big enough to argue about." },
        { id: "no-u3l2-her", type: "vocab", front: "her", reading: "her", meaning: "here", example: { jp: "Her bor jeg.", en: "This is where I live." }, accept: ["over here", "in this place"], drill: { jp: "Her jobber Kari", en: "This is where Kari works" }, hint: "Textbook V2: her takes slot one, so bor comes second and jeg is pushed behind it. \"Her jeg bor\" is not Norwegian." },
      ],
    },
    {
      id: "no-u3l3",
      unit: 3,
      lesson: 3,
      title: "Age and work",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask someone's age, say whether they are young or old, and say what they do: Hvor jobber du?",
      items: [
        { id: "no-u3l3-gammel", type: "vocab", front: "gammel", reading: "gammel", meaning: "old", example: { jp: "Hvor gammel er du?", en: "How old are you?" }, accept: ["aged", "elderly", "ancient"], drill: { jp: "En lærer er gammel", en: "A teacher is old" }, hint: "hvor plus an adjective means \"how\" — hvor gammel, how old. That is how every measurement question is built." },
        { id: "no-u3l3-ung", type: "vocab", front: "ung", reading: "ung", meaning: "young", example: { jp: "En elev er ung.", en: "A pupil is young." }, accept: ["youthful"], drill: { jp: "Kari er ung", en: "Kari is young" }, hint: "OONG, with the ng of \"sing\" and no hard g at the end. The opposite of gammel." },
        { id: "no-u3l3-aha", type: "vocab", front: "å ha", reading: "aha", meaning: "to have", example: { jp: "Jeg har en god venn.", en: "I have a good friend." }, accept: ["have", "to own", "own", "to possess"], drill: { jp: "Det er bra å ha en venn", en: "It is good to have a friend" }, hint: "Present har — HAR. Along with er, this is one of the two verbs you will say most often." },
        { id: "no-u3l3-ajobbe", type: "vocab", front: "å jobbe", reading: "ajobbe", meaning: "to work", example: { jp: "Hvor jobber du?", en: "Where do you work?" }, accept: ["work", "to have a job", "to do a job"], drill: { jp: "Det er viktig å jobbe her", en: "It is important to work here" }, hint: "YOB-be — j as y again. There is a formal å arbeide, but jobbe is what people actually say." },
        { id: "no-u3l3-enlaerer", type: "vocab", front: "en lærer", reading: "enlaerer", meaning: "teacher", example: { jp: "Erling er en god lærer.", en: "Erling is a good teacher." }, accept: ["a teacher", "instructor", "tutor"], drill: { jp: "Vi har en lærer fra Bergen", en: "We have a teacher from Bergen" }, hint: "It is å lære, to learn or teach, with -er on the end — the doer ending, like English -er. When you state a profession plainly, Norwegian drops the article: Erling er lærer." },
        { id: "no-u3l3-enelev", type: "vocab", front: "en elev", reading: "enelev", meaning: "pupil", example: { jp: "Jeg har en elev fra Bergen.", en: "I have a pupil from Bergen." }, accept: ["a pupil", "student", "a student", "schoolchild"], drill: { jp: "Erling har en elev i Oslo", en: "Erling has a pupil in Oslo" }, hint: "e-LEV, stress on the second syllable. Used for schoolchildren; a university student is en student." },
      ],
    },
    {
      id: "no-u3l4",
      unit: 3,
      lesson: 4,
      title: "He, she, they",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about other people with han, hun and de, and say what you like: Jeg liker Norge veldig mye.",
      items: [
        { id: "no-u3l4-han", type: "vocab", front: "han", reading: "han", meaning: "he", example: { jp: "Han heter Erling.", en: "He is called Erling." }, accept: ["him", "he/him"], drill: { jp: "Han kommer fra Norge", en: "He comes from Norway" }, hint: "HAN. It doubles as the object form too — jeg kjenner han — though written Norwegian often prefers ham there." },
        { id: "no-u3l4-hun", type: "vocab", front: "hun", reading: "hun", meaning: "she", example: { jp: "Hun bor i Bergen.", en: "She lives in Bergen." }, accept: [], drill: { jp: "Hun snakker litt norsk", en: "She speaks a little Norwegian" }, hint: "HUEN, with the tight u. Object form henne: jeg kjenner henne." },
        { id: "no-u3l4-de", type: "vocab", front: "de", reading: "de", meaning: "they", example: { jp: "De snakker norsk.", en: "They speak Norwegian." }, accept: ["them", "those"], drill: { jp: "De bor i Oslo", en: "They live in Oslo" }, hint: "Said DEE. Do not confuse it with det, which is DEH and means it. Capitalised De is the archaic formal \"you\" nobody uses." },
        { id: "no-u3l4-alike", type: "vocab", front: "å like", reading: "alike", meaning: "to like", example: { jp: "Jeg liker Oslo.", en: "I like Oslo." }, accept: ["like", "to enjoy", "enjoy", "to be fond of"], hint: "LEE-ke, present liker. For stronger feeling there is å elske, to love." },
        { id: "no-u3l4-akomme", type: "vocab", front: "å komme", reading: "akomme", meaning: "to come", example: { jp: "Hvor kommer du fra?", en: "Where do you come from?" }, accept: ["come", "to arrive", "arrive"], drill: { jp: "Det er hyggelig å komme fra Norge", en: "It is nice to come from Norway" }, hint: "Present kommer. Hvor kommer du fra is the friendlier twin of hvor er du fra — both are asked constantly." },
        { id: "no-u3l4-mye", type: "vocab", front: "mye", reading: "mye", meaning: "much", example: { jp: "Jeg liker Norge veldig mye.", en: "I like Norway very much." }, accept: ["a lot", "lots", "greatly"], drill: { jp: "Kari snakker mye norsk", en: "Kari speaks a lot of Norwegian" }, hint: "MUE-e. Use mye for stuff you cannot count and mange for things you can — mye vann, mange venner." },
      ],
    },
  ],
};
