// Unit 26 — からだ・けんこう ("Body & health") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed.
// N4 body & health vocabulary. Introduces いたい (hurts) and わるい (bad) — core
// adjectives that make health talk natural. Examples use only A1 vocab + earlier A2
// draft vocab + A1 grammar. Naturalness queued for the batch native review.
export const UNIT26 = {
  id: "ja-u26",
  lang: "ja",
  title: "からだ・けんこう",
  order: 26,
  stage: "a2",
  lessons: [
    {
      id: "ja-u26l1", unit: 26, lesson: 1, title: "Body", cefr: "A2", dominantMode: "recall",
      canDo: "Name body parts: あたま かお のど かた せなか おなか.",
      items: [
        { id: "ja-u26l1-atama", type: "vocab", front: "あたま", reading: "atama", meaning: "head", example: { jp: "あたまがいたいです。", en: "I have a headache." }, drill: { jp: "あたまをつかいます。", en: "I use my head." }, accept: ["mind", "the head", "brain"], hint: "a-ta-MA — three beats. ⚠️ Like English it also means the MIND — あたまがいい means clever, not big-headed. ⚠️ A headache is あたまがいたい, with が, because Japanese makes the body part the subject." },
        { id: "ja-u26l1-kao", type: "vocab", front: "かお", reading: "kao", meaning: "face", example: { jp: "かおをあらいます。", en: "I wash my face." }, drill: { jp: "かおがあかいです。", en: "My face is red." }, accept: ["the face", "a face", "expression"], hint: "KA-o — two beats, both vowels sounded: ka-o. ⚠️ It also means an EXPRESSION — こわいかお is a frightening look, not an ugly face. かおがひろい, a wide face, means well-connected." },
        { id: "ja-u26l1-nodo", type: "vocab", front: "のど", reading: "nodo", meaning: "throat", example: { jp: "のどがいたいです。", en: "My throat hurts." }, drill: { jp: "のどをしらべます。", en: "The doctor checks my throat." }, accept: ["the throat", "a throat", "gullet"], hint: "NO-do — two beats. ⚠️ のどがかわく, the throat drying, is how Japanese says to be thirsty — there is no separate adjective for it. のどがいたい is the first thing you say at a clinic." },
        { id: "ja-u26l1-kata", type: "vocab", front: "かた", reading: "kata", meaning: "shoulder", example: { jp: "かたがいたいです。", en: "My shoulders hurt." }, drill: { jp: "かたがおもいです。", en: "My shoulders feel heavy." }, accept: ["shoulders", "the shoulder", "a shoulder"], hint: "KA-ta — two beats. ⚠️ かたがこる, stiff shoulders, is a national complaint with its own aisle in the chemist. ⚠️ Said aloud it is also かた, a way of doing something (つかいかた, how to use), and かた, a polite person." },
        { id: "ja-u26l1-senaka", type: "vocab", front: "せなか", reading: "senaka", meaning: "back", example: { jp: "せなかがひろいです。", en: "He has a broad back." }, drill: { jp: "せなかがいたいです。", en: "My back hurts." }, accept: ["one's back", "the back", "upper back"], hint: "se-NA-ka — three beats. せ, back, plus なか, inside — the same なか as u10's inside. ⚠️ It is the body's back only; the back of a room or a queue is うしろ, from u10, and the two are never swapped." },
        { id: "ja-u26l1-onaka", type: "vocab", front: "おなか", reading: "onaka", meaning: "stomach", example: { jp: "おなかがいたいです。", en: "I have a stomachache." }, drill: { jp: "おなかがおおきいです。", en: "My stomach is big." }, accept: ["belly", "tummy", "the stomach"], hint: "o-NA-ka — three beats, with the honorific お built in — nobody says なか for this. ⚠️ おなかがすいた, the stomach emptying, is how Japanese says I'm hungry. The medical organ is a い." },
      ],
    },
    {
      id: "ja-u26l2", unit: 26, lesson: 2, title: "Feeling ill", cefr: "A2", dominantMode: "recall",
      canDo: "Talk about being unwell: びょうき ねつ いたい わるい けが いしゃ.",
      items: [
        { id: "ja-u26l2-byoki", type: "vocab", front: "びょうき", reading: "byōki", meaning: "illness", example: { jp: "ちちはびょうきです。", en: "My father is ill." }, drill: { jp: "びょうきでやすみます。", en: "I take time off for illness." }, accept: ["sickness", "disease", "sick"], hint: "BYOH-ki — three beats: byo-o-ki, びょ a single sound lengthened. ⚠️ It is a NOUN, so being ill is びょうきです, not an adjective. ⚠️ The same びょう as びょういん, hospital, from u10 — and one beat from びよういん, the hair salon." },
        { id: "ja-u26l2-netsu", type: "vocab", front: "ねつ", reading: "netsu", meaning: "fever", example: { jp: "ねつがあります。", en: "I have a fever." }, drill: { jp: "ねつでがっこうをやすみます。", en: "I miss school with a fever." }, accept: ["temperature", "a high temperature", "a fever"], hint: "NE-tsu — two beats, つ is tsu. ⚠️ Japanese HAS a fever with あります: ねつがあります. ⚠️ It also means heat and enthusiasm — ねっしん, from the same root, means keen." },
        { id: "ja-u26l2-itai", type: "vocab", front: "いたい", reading: "itai", meaning: "painful", example: { jp: "あたまがいたいです。", en: "My head hurts." }, drill: { jp: "いたいゆびをみます。", en: "I look at my sore finger." }, accept: ["hurts", "sore", "it hurts"], hint: "i-TAI — three beats. An い-adjective. 🚨 THE BODY PART TAKES が — あたまがいたいです, literally the head is painful. ⚠️ Shouted, いたい！ is ouch, and the casual version is いてっ." },
        { id: "ja-u26l2-warui", type: "vocab", front: "わるい", reading: "warui", meaning: "bad", example: { jp: "てんきがわるいです。", en: "The weather is bad." }, drill: { jp: "わるいゆめをみました。", en: "I had a bad dream." }, accept: ["poor", "not good", "wrong"], hint: "wa-RUI — three beats, tapped r. The opposite of いい. ⚠️ わるい said casually to someone means my bad, an apology. ⚠️ ぐあいがわるい is the normal way to say you feel unwell." },
        { id: "ja-u26l2-kega", type: "vocab", front: "けが", reading: "kega", meaning: "injury", example: { jp: "けがをします。", en: "I get injured." }, drill: { jp: "けがはいたいです。", en: "The injury hurts." }, accept: ["wound", "hurt (oneself)", "an injury"], hint: "KE-ga — two beats, hard g. A NOUN, so getting hurt is けがをします, with を — not a verb of its own. ⚠️ It is a physical wound; being ill is びょうき, and Japanese keeps them firmly apart." },
        { id: "ja-u26l2-isha", type: "vocab", front: "いしゃ", reading: "isha", meaning: "doctor", example: { jp: "いしゃにいきます。", en: "I go to the doctor." }, drill: { jp: "いしゃにしつもんします。", en: "I ask the doctor a question." }, accept: ["physician", "the doctor", "medic"], hint: "I-sha — two beats, しゃ a single sound. ⚠️ ADDRESS a doctor as せんせい, never as いしゃ — いしゃ is the job, せんせい is the title, and the same rule covers teachers and lawyers. The hospital is a びょういん." },
      ],
    },
    {
      id: "ja-u26l3", unit: 26, lesson: 3, title: "How the body feels", cefr: "A2", dominantMode: "recall",
      canDo: "Describe changes: つかれます なおります たおれます ふとります やせます なきます.",
      items: [
        { id: "ja-u26l3-tsukaremasu", type: "vocab", front: "つかれます", reading: "tsukaremasu", meaning: "get tired", example: { jp: "しごとでつかれます。", en: "I get tired from work." }, drill: { jp: "べんきょうでつかれます。", en: "I get tired from studying." }, accept: ["be tired", "wear out", "get worn out"], hint: "tsu-ka-re-MA-su — six beats, つ is tsu, tapped r. Dictionary form つかれる. ⚠️ The CAUSE takes で. ⚠️ Being tired right now is つかれています — つかれます on its own reads as a general truth." },
        { id: "ja-u26l3-naorimasu", type: "vocab", front: "なおります", reading: "naorimasu", meaning: "recover", example: { jp: "びょうきがなおります。", en: "The illness gets better." }, drill: { jp: "けががなおります。", en: "The injury heals." }, accept: ["heal", "get better", "be cured"], hint: "na-o-ri-MA-su — five beats, tapped r. Dictionary form なおる. ⚠️ THE ILLNESS DOES IT, so it takes が — びょうきがなおります. You fixing something is なおします with を, which you met in u22. Same root, two particles." },
        { id: "ja-u26l3-taoremasu", type: "vocab", front: "たおれます", reading: "taoremasu", meaning: "collapse", example: { jp: "ひとがたおれます。", en: "A person collapses." }, drill: { jp: "ビルがたおれます。", en: "The building collapses." }, accept: ["fall over", "faint", "topple"], hint: "ta-o-re-MA-su — five beats, tapped r. Dictionary form たおれる. ⚠️ It happens BY ITSELF, hence が — buildings, trees and people all たおれる. You knocking something over is たおします." },
        { id: "ja-u26l3-futorimasu", type: "vocab", front: "ふとります", reading: "futorimasu", meaning: "gain weight", example: { jp: "すこしふとります。", en: "I gain a little weight." }, drill: { jp: "ケーキでふとります。", en: "Cake makes me gain weight." }, accept: ["get fat", "put on weight", "fill out"], hint: "fu-to-ri-MA-su — six beats, soft blown ふ, tapped r. Dictionary form ふとる. ⚠️ Japanese says ふとっています for being heavy now — ふとります means the gaining. The adjective ふとい means thick, of an object." },
        { id: "ja-u26l3-yasemasu", type: "vocab", front: "やせます", reading: "yasemasu", meaning: "lose weight", example: { jp: "うんどうでやせます。", en: "I lose weight through exercise." }, drill: { jp: "なつにやせます。", en: "I lose weight in summer." }, accept: ["get thin", "slim down", "lose some weight"], hint: "ya-se-MA-su — four beats. Dictionary form やせる, the opposite of ふとります. ⚠️ やせています is being slim now. ⚠️ Not やすみます, to rest, nor やめます, to quit — three verbs, three different second kana." },
        { id: "ja-u26l3-nakimasu", type: "vocab", front: "なきます", reading: "nakimasu", meaning: "cry", example: { jp: "あかちゃんがなきます。", en: "The baby cries." }, drill: { jp: "こどもがなきます。", en: "The child cries." }, accept: ["weep", "sob", "shed tears"], hint: "na-ki-MA-su — four beats. Dictionary form なく. 🚨 THE SAME WORD IS WHAT ANIMALS DO — a cat, a bird or an insect なく, where English needs mew, sing and chirp. ⚠️ Not ないです, there is none." },
      ],
    },
    {
      id: "ja-u26l4", unit: 26, lesson: 4, title: "More of the body", cefr: "A2", dominantMode: "recall",
      canDo: "Name more parts: かみ ゆび つめ こえ ちから ひげ はだ.",
      items: [
        { id: "ja-u26l4-kami", type: "vocab", front: "かみ", reading: "kami", meaning: "hair", example: { jp: "かみをあらいます。", en: "I wash my hair." }, drill: { jp: "かみがくろいです。", en: "My hair is black." }, accept: ["one's hair", "the hair", "head of hair"], hint: "KA-mi — two beats. 🚨 THREE WORDS, ONE SPELLING IN KANA: かみ hair (髪), かみ paper (紙), かみ a god (神). Only the kanji and the context separate them. Hair is often かみのけ to be unambiguous." },
        { id: "ja-u26l4-yubi", type: "vocab", front: "ゆび", reading: "yubi", meaning: "finger", example: { jp: "ゆびがいたいです。", en: "My finger hurts." }, drill: { jp: "ゆびをつかいます。", en: "I use my fingers." }, accept: ["toe", "fingers", "a finger"], hint: "YU-bi — two beats. ⚠️ ONE WORD FOR FINGERS AND TOES — a toe is an あしのゆび, a foot-ゆび. ⚠️ ゆびわ, a finger-ring, is where the word turns up most often." },
        { id: "ja-u26l4-tsume", type: "vocab", front: "つめ", reading: "tsume", meaning: "nail", example: { jp: "つめがきれいです。", en: "The nails are neat." }, drill: { jp: "つめがかたいです。", en: "The nails are hard." }, accept: ["fingernail", "claw", "a nail"], hint: "TSU-me — two beats, つ is tsu. ⚠️ The nail on a finger, and also an animal's CLAW — not the metal nail you hammer, which is a くぎ. つめきり, a nail-cutter, is the clippers." },
        { id: "ja-u26l4-koe", type: "vocab", front: "こえ", reading: "koe", meaning: "voice", example: { jp: "こえがおおきいです。", en: "The voice is loud." }, drill: { jp: "こえがちいさいです。", en: "The voice is quiet." }, accept: ["a voice", "the voice", "vocal sound"], hint: "KO-e — two beats, both vowels sounded: ko-e. ⚠️ Japanese measures a voice by SIZE, not volume — こえがおおきい is loud and こえがちいさい is quiet, exactly as in the drill. ⚠️ A non-human sound is おと." },
        { id: "ja-u26l4-chikara", type: "vocab", front: "ちから", reading: "chikara", meaning: "strength", example: { jp: "ちからがつよいです。", en: "He is strong." }, drill: { jp: "ちからがあります。", en: "He has strength." }, accept: ["power", "force", "might"], hint: "chi-KA-ra — three beats, tapped r. The noun behind つよい, from u23. ⚠️ Its kanji 力 is the one sitting under 田 inside 男, man, from u14 — strength in the fields. ちからをかします means to lend a hand." },
        { id: "ja-u26l4-hige", type: "vocab", front: "ひげ", reading: "hige", meaning: "beard", example: { jp: "ちちはひげがあります。", en: "My father has a beard." }, drill: { jp: "ひげはしろいです。", en: "The beard is white." }, accept: ["moustache", "facial hair", "whiskers"], hint: "HI-ge — two beats, hard g. ⚠️ ONE WORD FOR BEARD, MOUSTACHE AND STUBBLE — Japanese adds a position word when it matters: くちひげ is a moustache, あごひげ a beard. Also a cat's whiskers." },
        { id: "ja-u26l4-hada", type: "vocab", front: "はだ", reading: "hada", meaning: "skin", example: { jp: "はだがしろいです。", en: "Her skin is fair." }, drill: { jp: "はだがやわらかいです。", en: "The skin is soft." }, accept: ["the skin", "complexion", "one's skin"], hint: "HA-da — two beats. ⚠️ Living skin on a body — leather and animal hide are かわ, a different word. はだがきれい, clean skin, is a standard compliment in Japan, and はだざわり is the feel of a fabric." },
      ],
    },
  ],
};
