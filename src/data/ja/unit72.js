// Unit 72 — けんこう・びょうき ("Health, illness & medical") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 health/illness/medical vocab, grouped by theme. Modeled like the A2 vocab
// units (vocab items). Every example uses only A1 + A2 vocab already introduced
// (です/ます, を/に/で/が particles, かかります/よびます/かいます/します/でます etc.),
// so it slots directly on top of the finished A1/A2 track.
// NATURALNESS: checked by the LLM naturalness review (content-auditor) plus Alex's
// Dev-Mode playtest. A human native review is a nice-to-have, NOT a blocker
// (CLAUDE.md, Alex 2026-07-12).
// EVERY drill here LEADS WITH ITS OWN FRONT + a core particle, because ja
// sentenceTokens only tiles [front][particle][rest] — and `practice()` REPLACES the
// example, so a drill in any other shape would STRIP sentence:build from the item.
// tests/unit/drill-corpus.test.mjs is what catches that; keep the shape.
export const UNIT72 = {
  id: "ja-u72",
  lang: "ja",
  title: "けんこう・びょうき",
  order: 72,
  stage: "a2",
  lessons: [
    // Lesson 1: symptoms
    {
      id: "ja-u72l1",
      unit: 72,
      lesson: 1,
      title: "Symptoms",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe how you feel when sick: しょうじょう くしゃみ はなみず めまい はきけ さむけ.",
      items: [
        { id: "ja-u72l1-shojo", type: "vocab", front: "しょうじょう", reading: "shōjō", meaning: "symptoms", example: { jp: "しょうじょうがあります。", en: "I have symptoms." }, drill: { jp: "しょうじょうがつづきます。", en: "The symptoms continue." }, accept: ["symptom", "symptoms", "how the illness shows", "signs of illness"], hint: "shōjō — two long vowels, both ō: shō-jō. The medical word for what the illness is DOING to you, as against びょうき, the illness itself. The doctor will ask しょうじょうは？" },
        { id: "ja-u72l1-kushami", type: "vocab", front: "くしゃみ", reading: "kushami", meaning: "sneeze", example: { jp: "くしゃみがでます。", en: "I sneeze." }, drill: { jp: "くしゃみをします。", en: "I sneeze." }, accept: ["a sneeze", "sneezing", "to sneeze", "a sneezing fit"], hint: "kushami — a noun, not a verb, so Japanese says the sneeze COMES OUT (くしゃみがでる) or you DO one (くしゃみをする). Both are normal; English has no equivalent of the first." },
        { id: "ja-u72l1-hanamizu", type: "vocab", front: "はなみず", reading: "hanamizu", meaning: "runny nose", example: { jp: "はなみずがでます。", en: "I have a runny nose." }, drill: { jp: "はなみずがつらいです。", en: "The runny nose is hard to bear." }, accept: ["runny nose", "nasal mucus", "a streaming nose", "snot"], hint: "hanamizu — はな (nose) + みず (water): nose water, which is exactly what it is. Note はな is also 'flower' (u2), so only the compound tells you which. Like くしゃみ it でます rather than being had." },
        { id: "ja-u72l1-memai", type: "vocab", front: "めまい", reading: "memai", meaning: "dizziness", example: { jp: "めまいがします。", en: "I feel dizzy." }, drill: { jp: "めまいがあさからします。", en: "I've been dizzy since the morning." }, accept: ["dizzy spell", "vertigo", "feeling dizzy", "light-headedness"], hint: "memai — め (eye) + まい (spin): the eyes spinning. Used with します, like the next two cards: めまいがします is the whole sentence for 'I feel dizzy'. There is no adjective for it." },
        { id: "ja-u72l1-hakike", type: "vocab", front: "はきけ", reading: "hakike", meaning: "nausea", example: { jp: "はきけがします。", en: "I feel nauseous." }, drill: { jp: "はきけでごはんをたべません。", en: "I don't eat because of the nausea." }, accept: ["feeling sick", "queasiness", "wanting to be sick", "an upset stomach"], hint: "hakike — はく (to be sick) + け (a hint of): the sense that it is coming. The け ending means 'a trace of a feeling' and gives you the next card too, さむけ. Said with します." },
        { id: "ja-u72l1-samuke", type: "vocab", front: "さむけ", reading: "samuke", meaning: "chills", example: { jp: "さむけがします。", en: "I have chills." }, drill: { jp: "さむけがよるにします。", en: "I get the chills at night." }, accept: ["a chill", "the chills", "shivers", "feeling cold with fever"], hint: "samuke — さむい (cold) + け, the same け as はきけ above: a trace of cold. ⚠️ Not the weather being cold — it is your body feeling cold with a fever, which is why it takes します." },
      ],
    },
    // Lesson 2: illness & condition
    {
      id: "ja-u72l2",
      unit: 72,
      lesson: 2,
      title: "Illness & condition",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about health and sickness: けんこう たいちょう ぐあい インフルエンザ かふんしょう きず.",
      items: [
        { id: "ja-u72l2-kenko", type: "vocab", front: "けんこう", reading: "kenkō", meaning: "health", example: { jp: "けんこうがいちばんです。", en: "Health is number one." }, drill: { jp: "けんこうをまもります。", en: "I protect my health." }, accept: ["good health", "being healthy", "wellbeing", "fitness"], hint: "kenkō — health as a state you keep. Long ō: ken-kō. けんこうな is the adjective, 'healthy'. It is the けん of けんこうほけん, the national health insurance you met in u49." },
        { id: "ja-u72l2-taicho", type: "vocab", front: "たいちょう", reading: "taichō", meaning: "physical condition", example: { jp: "たいちょうがわるいです。", en: "My physical condition is bad." }, drill: { jp: "たいちょうはいいです。", en: "My condition is good." }, accept: ["physical condition", "state of health", "how one's body is", "form"], hint: "taichō — たい (body) + ちょう (tune): how your body is tuned today. Long ō: tai-chō. たいちょうがわるい is the standard, face-saving reason for calling in sick in Japan." },
        { id: "ja-u72l2-guai", type: "vocab", front: "ぐあい", reading: "guai", meaning: "condition", example: { jp: "ぐあいはどうですか。", en: "How are you feeling?" }, drill: { jp: "ぐあいをいしゃにききます。", en: "I ask the doctor about my condition." }, accept: ["state", "how one feels", "the way something is", "shape"], hint: "guai — how a thing is going, bodies included, and broader than たいちょう: a machine has a ぐあい too. ぐあいはどうですか is what you ask someone who was unwell." },
        { id: "ja-u72l2-infuruenza", type: "vocab", front: "インフルエンザ", reading: "infuruenza", meaning: "flu", example: { jp: "インフルエンザにかかりました。", en: "I caught the flu." }, drill: { jp: "インフルエンザがふゆにおおいです。", en: "Flu is common in winter." }, accept: ["influenza", "the flu", "seasonal flu", "a flu infection"], hint: "infuruenza — six beats, every one pronounced: in-fu-ru-en-za. Shortened to インフル in speech. You CATCH it with にかかります, a verb that takes に, not を." },
        { id: "ja-u72l2-kafunsho", type: "vocab", front: "かふんしょう", reading: "kafunshō", meaning: "hay fever", example: { jp: "はるはかふんしょうです。", en: "In spring I get hay fever." }, drill: { jp: "かふんしょうがはるにつらいです。", en: "Hay fever is hard to bear in spring." }, accept: ["hay fever", "pollen allergy", "seasonal allergy", "pollinosis"], hint: "kafunshō — かふん (pollen) + しょう (ailment). Long ō at the end: ka-fun-shō. Japan's cedar pollen season makes this close to a national condition every spring, which is why the word is everyday." },
        { id: "ja-u72l2-kizu", type: "vocab", front: "きず", reading: "kizu", meaning: "wound", example: { jp: "てにきずがあります。", en: "I have a wound on my hand." }, drill: { jp: "きずがあしにあります。", en: "I have a wound on my leg." }, accept: ["cut", "scratch", "an injury", "a graze"], hint: "kizu — any break in the surface, from a scratch to a real wound, and it works on objects too: a scratch on a phone is also きず. The place it is on takes に." },
      ],
    },
    // Lesson 3: treatment
    {
      id: "ja-u72l3",
      unit: 72,
      lesson: 3,
      title: "Treatment",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about medical care: ちゅうしゃ しゅじゅつ ちりょう しんさつ けんさ たいおん.",
      items: [
        { id: "ja-u72l3-chusha", type: "vocab", front: "ちゅうしゃ", reading: "chūsha", meaning: "injection", example: { jp: "びょういんでちゅうしゃをします。", en: "I get an injection at the hospital." }, drill: { jp: "ちゅうしゃはいたいです。", en: "The injection hurts." }, accept: ["a shot", "injection", "a jab", "a vaccination"], hint: "chūsha — ちゅう (pour in) + しゃ (shoot): shooting liquid in. Long ū: chū-sha. ⚠️ A same-sounding ちゅうしゃ with other kanji means car PARKING, so ちゅうしゃじょう is a car park, not a clinic." },
        { id: "ja-u72l3-shujutsu", type: "vocab", front: "しゅじゅつ", reading: "shujutsu", meaning: "surgery", example: { jp: "あした、しゅじゅつです。", en: "The surgery is tomorrow." }, drill: { jp: "しゅじゅつがおわりました。", en: "The surgery has finished." }, accept: ["operation", "surgery", "an operation", "a procedure"], hint: "shujutsu — しゅ (hand) + じゅつ (technique): work done by hand. Four tight beats, shu-ju-tsu, and the two じゅ/しゅ sounds in a row are what makes it hard to say. Done with します or うけます (to undergo)." },
        { id: "ja-u72l3-chiryo", type: "vocab", front: "ちりょう", reading: "chiryō", meaning: "treatment", example: { jp: "びょういんでちりょうをします。", en: "I get treatment at the hospital." }, drill: { jp: "ちりょうがつづきます。", en: "The treatment continues." }, accept: ["medical treatment", "therapy", "care", "a course of treatment"], hint: "chiryō — ち (heal) + りょう (cure): the whole course of care, not one procedure. Long ō: chi-ryō. しゅじゅつ is one operation inside a ちりょう." },
        { id: "ja-u72l3-shinsatsu", type: "vocab", front: "しんさつ", reading: "shinsatsu", meaning: "medical examination", example: { jp: "しんさつはごごです。", en: "The examination is in the afternoon." }, drill: { jp: "しんさつのじかんをききます。", en: "I ask about the examination time." }, accept: ["medical examination", "checkup", "a consultation", "seeing the doctor"], hint: "shinsatsu — the doctor LOOKING AT you: the consultation itself. しんさつしつ is the consulting room. Distinguish from けんさ on the next card, which is the tests they then order." },
        { id: "ja-u72l3-kensa", type: "vocab", front: "けんさ", reading: "kensa", meaning: "examination", example: { jp: "びょういんでけんさをします。", en: "I have a test at the hospital." }, drill: { jp: "けんさがあしたあります。", en: "The test is tomorrow." }, accept: ["test", "inspection", "a medical test", "screening"], hint: "kensa — a TEST that produces a result: blood, X-ray, a factory inspection. しんさつ on the card before is the doctor talking to you; けんさ is the machine measuring you. Short vowels: ken-sa." },
        { id: "ja-u72l3-taion", type: "vocab", front: "たいおん", reading: "taion", meaning: "body temperature", example: { jp: "たいおんがたかいです。", en: "My temperature is high." }, drill: { jp: "たいおんをしらべます。", en: "I check my body temperature." }, accept: ["body temperature", "temperature", "one's temperature", "fever reading"], hint: "taion — たい (body) + おん (warmth), so it is specifically YOUR temperature; the room's is おんど, from u51. たいおんけい is the thermometer. Short vowels: ta-i-on." },
      ],
    },
    // Lesson 4: hospital & medical people
    {
      id: "ja-u72l4",
      unit: 72,
      lesson: 4,
      title: "At the hospital",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle a hospital visit: にゅういん たいいん きゅうきゅうしゃ かんごし はいしゃ やっきょく.",
      items: [
        { id: "ja-u72l4-nyuin", type: "vocab", front: "にゅういん", reading: "nyūin", meaning: "hospitalization", example: { jp: "あにがにゅういんしました。", en: "My older brother was hospitalized." }, drill: { jp: "にゅういんはながいです。", en: "The hospital stay is long." }, accept: ["being hospitalized", "hospital admission", "a hospital stay", "going into hospital"], hint: "nyūin — にゅう (enter) + いん (institution): going INTO the hospital as a patient. Long ū: nyū-in. Its exact opposite たいいん is the next card, and the pair runs every Japanese hospital conversation." },
        { id: "ja-u72l4-taiin", type: "vocab", front: "たいいん", reading: "taiin", meaning: "leaving hospital", example: { jp: "あした、たいいんします。", en: "I leave the hospital tomorrow." }, drill: { jp: "たいいんをしてうちにかえります。", en: "I leave the hospital and go home." }, accept: ["hospital discharge", "being discharged", "coming out of hospital", "checking out"], hint: "taiin — たい (withdraw) + いん (institution), the counterpart of にゅういん above. The same たい as たいしょく in u71, leaving a job: たい always means stepping out of something you were inside." },
        { id: "ja-u72l4-kyukyusha", type: "vocab", front: "きゅうきゅうしゃ", reading: "kyūkyūsha", meaning: "ambulance", example: { jp: "きゅうきゅうしゃをよびます。", en: "I call an ambulance." }, drill: { jp: "きゅうきゅうしゃがきます。", en: "The ambulance is coming." }, accept: ["an ambulance", "emergency vehicle", "the ambulance service"], hint: "kyūkyūsha — きゅうきゅう (emergency aid) + しゃ (vehicle), with BOTH ū long: kyū-kyū-sha. The number to dial in Japan is 119, not 911. It is free to call." },
        { id: "ja-u72l4-kangoshi", type: "vocab", front: "かんごし", reading: "kangoshi", meaning: "nurse", example: { jp: "かのじょはかんごしです。", en: "She is a nurse." }, drill: { jp: "かんごしはしんせつです。", en: "The nurse is kind." }, accept: ["a nurse", "nursing staff", "registered nurse"], hint: "kangoshi — かんご (nursing care) + し (qualified professional). That し ending marks a licensed trade, the same one in びようし (hairdresser). It replaced the older female-only かんごふ, so かんごし covers any gender." },
        { id: "ja-u72l4-haisha", type: "vocab", front: "はいしゃ", reading: "haisha", meaning: "dentist", example: { jp: "はいしゃにいきます。", en: "I go to the dentist." }, drill: { jp: "はいしゃはえきのとなりです。", en: "The dentist is next to the station." }, accept: ["a dentist", "dentist's office", "the dental clinic", "dental surgery"], hint: "haisha — は (tooth) + いしゃ (doctor): the tooth doctor. Like English 'the dentist', it names the person AND the place, so はいしゃにいきます means going to the clinic." },
        { id: "ja-u72l4-yakkyoku", type: "vocab", front: "やっきょく", reading: "yakkyoku", meaning: "pharmacy", example: { jp: "やっきょくでくすりをかいます。", en: "I buy medicine at the pharmacy." }, drill: { jp: "やっきょくはみせのとなりです。", en: "The pharmacy is next to the shop." }, accept: ["drugstore", "chemist", "the chemist's", "dispensary"], hint: "yakkyoku — やく (medicine) + きょく (bureau), with the collision making っき: yak-kyo-ku. It is the dispensing counter specifically; a ドラッグストア sells shampoo and snacks alongside." },
      ],
    },
  ],
};
