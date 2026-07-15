// Unit 72 — けんこう・びょうき ("Health, illness & medical") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 health/illness/medical vocab, grouped by theme. Modeled like the A2 vocab
// units (vocab items). Every example uses only A1 + A2 vocab already introduced
// (です/ます, を/に/で/が particles, かかります/よびます/かいます/します/でます etc.),
// so it slots directly on top of the finished A1/A2 track.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
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
        { id: "ja-u72l1-shojo", type: "vocab", front: "しょうじょう", reading: "shōjō", meaning: "symptoms", example: { jp: "しょうじょうがあります。", en: "I have symptoms." }, accept: ["symptom", "symptoms"] },
        { id: "ja-u72l1-kushami", type: "vocab", front: "くしゃみ", reading: "kushami", meaning: "sneeze", example: { jp: "くしゃみがでます。", en: "I sneeze." }, accept: ["a sneeze", "sneezing"] },
        { id: "ja-u72l1-hanamizu", type: "vocab", front: "はなみず", reading: "hanamizu", meaning: "runny nose", example: { jp: "はなみずがでます。", en: "I have a runny nose." }, accept: ["runny nose", "nasal mucus"] },
        { id: "ja-u72l1-memai", type: "vocab", front: "めまい", reading: "memai", meaning: "dizziness", example: { jp: "めまいがします。", en: "I feel dizzy." }, accept: ["dizzy spell", "vertigo"] },
        { id: "ja-u72l1-hakike", type: "vocab", front: "はきけ", reading: "hakike", meaning: "nausea", example: { jp: "はきけがします。", en: "I feel nauseous." }, accept: ["feeling sick", "queasiness"] },
        { id: "ja-u72l1-samuke", type: "vocab", front: "さむけ", reading: "samuke", meaning: "chills", example: { jp: "さむけがします。", en: "I have chills." }, accept: ["a chill", "the chills"] },
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
        { id: "ja-u72l2-kenko", type: "vocab", front: "けんこう", reading: "kenkō", meaning: "health", example: { jp: "けんこうがいちばんです。", en: "Health is number one." }, accept: ["good health"] },
        { id: "ja-u72l2-taicho", type: "vocab", front: "たいちょう", reading: "taichō", meaning: "physical condition", example: { jp: "たいちょうがわるいです。", en: "My physical condition is bad." }, accept: ["physical condition", "state of health"] },
        { id: "ja-u72l2-guai", type: "vocab", front: "ぐあい", reading: "guai", meaning: "condition", example: { jp: "ぐあいはどうですか。", en: "How are you feeling?" }, accept: ["state", "how one feels"] },
        { id: "ja-u72l2-infuruenza", type: "vocab", front: "インフルエンザ", reading: "infuruenza", meaning: "flu", example: { jp: "インフルエンザにかかりました。", en: "I caught the flu." }, accept: ["influenza", "the flu"] },
        { id: "ja-u72l2-kafunsho", type: "vocab", front: "かふんしょう", reading: "kafunshō", meaning: "hay fever", example: { jp: "はるはかふんしょうです。", en: "In spring I get hay fever." }, accept: ["hay fever", "pollen allergy"] },
        { id: "ja-u72l2-kizu", type: "vocab", front: "きず", reading: "kizu", meaning: "wound", example: { jp: "てにきずがあります。", en: "I have a wound on my hand." }, accept: ["cut", "scratch"] },
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
        { id: "ja-u72l3-chusha", type: "vocab", front: "ちゅうしゃ", reading: "chūsha", meaning: "injection", example: { jp: "びょういんでちゅうしゃをします。", en: "I get an injection at the hospital." }, accept: ["a shot", "injection"] },
        { id: "ja-u72l3-shujutsu", type: "vocab", front: "しゅじゅつ", reading: "shujutsu", meaning: "surgery", example: { jp: "あした、しゅじゅつです。", en: "The surgery is tomorrow." }, accept: ["operation", "surgery"] },
        { id: "ja-u72l3-chiryo", type: "vocab", front: "ちりょう", reading: "chiryō", meaning: "treatment", example: { jp: "びょういんでちりょうをします。", en: "I get treatment at the hospital." }, accept: ["medical treatment"] },
        { id: "ja-u72l3-shinsatsu", type: "vocab", front: "しんさつ", reading: "shinsatsu", meaning: "medical examination", example: { jp: "しんさつはごごです。", en: "The examination is in the afternoon." }, accept: ["medical examination", "checkup"] },
        { id: "ja-u72l3-kensa", type: "vocab", front: "けんさ", reading: "kensa", meaning: "examination", example: { jp: "びょういんでけんさをします。", en: "I have a test at the hospital." }, accept: ["test", "inspection"] },
        { id: "ja-u72l3-taion", type: "vocab", front: "たいおん", reading: "taion", meaning: "body temperature", example: { jp: "たいおんがたかいです。", en: "My temperature is high." }, accept: ["body temperature", "temperature"] },
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
        { id: "ja-u72l4-nyuin", type: "vocab", front: "にゅういん", reading: "nyūin", meaning: "hospitalization", example: { jp: "あにがにゅういんしました。", en: "My older brother was hospitalized." }, accept: ["being hospitalized", "hospital admission"] },
        { id: "ja-u72l4-taiin", type: "vocab", front: "たいいん", reading: "taiin", meaning: "leaving hospital", example: { jp: "あした、たいいんします。", en: "I leave the hospital tomorrow." }, accept: ["hospital discharge", "being discharged"] },
        { id: "ja-u72l4-kyukyusha", type: "vocab", front: "きゅうきゅうしゃ", reading: "kyūkyūsha", meaning: "ambulance", example: { jp: "きゅうきゅうしゃをよびます。", en: "I call an ambulance." }, accept: ["an ambulance"] },
        { id: "ja-u72l4-kangoshi", type: "vocab", front: "かんごし", reading: "kangoshi", meaning: "nurse", example: { jp: "かのじょはかんごしです。", en: "She is a nurse." }, accept: ["a nurse"] },
        { id: "ja-u72l4-haisha", type: "vocab", front: "はいしゃ", reading: "haisha", meaning: "dentist", example: { jp: "はいしゃにいきます。", en: "I go to the dentist." }, accept: ["a dentist", "dentist's office"] },
        { id: "ja-u72l4-yakkyoku", type: "vocab", front: "やっきょく", reading: "yakkyoku", meaning: "pharmacy", example: { jp: "やっきょくでくすりをかいます。", en: "I buy medicine at the pharmacy." }, accept: ["drugstore", "chemist"] },
      ],
    },
  ],
};
