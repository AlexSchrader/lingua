// Unit 71 — しごと・かいしゃ ("Work & the office") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 workplace / office / business vocab NOT already taught. Every front is verified
// absent from the global exclusion list (かいぎ・しゃちょう・めいし・ざんぎょう・
// きゅうりょう・しゅっちょう etc. are already taught elsewhere, so they are avoided).
// Examples use only already-introduced vocab + A1/A2 grammar (を/に/で/と + です/ます/
// ました), so this slots on top of the finished A1/A2 core. Not registered in index.js.
// NOTE: naturalness-critical — flagged for the batch native review when it goes live.
export const UNIT71 = {
  id: "ja-u71",
  lang: "ja",
  title: "しごと・かいしゃ",
  order: 71,
  stage: "a2",
  lessons: [
    // Lesson 1: people & roles at work
    {
      id: "ja-u71l1",
      unit: 71,
      lesson: 1,
      title: "People at work",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the people at the office: ぶちょう かちょう じょうし ぶか どうりょう ひしょ.",
      items: [
        { id: "ja-u71l1-bucho", type: "vocab", front: "ぶちょう", reading: "buchō", meaning: "department manager", example: { jp: "ぶちょうはかいぎです。", en: "The manager is in a meeting." }, accept: ["manager", "department head"] },
        { id: "ja-u71l1-kacho", type: "vocab", front: "かちょう", reading: "kachō", meaning: "section chief", example: { jp: "かちょうにききます。", en: "I'll ask the section chief." }, accept: ["section manager", "section head"] },
        { id: "ja-u71l1-joshi", type: "vocab", front: "じょうし", reading: "jōshi", meaning: "boss", example: { jp: "じょうしとはなします。", en: "I talk with my boss." }, accept: ["superior", "supervisor"] },
        { id: "ja-u71l1-buka", type: "vocab", front: "ぶか", reading: "buka", meaning: "subordinate", example: { jp: "ぶかをてつだいます。", en: "I help my subordinate." }, accept: ["staff member", "junior staff"] },
        { id: "ja-u71l1-doryo", type: "vocab", front: "どうりょう", reading: "dōryō", meaning: "colleague", example: { jp: "どうりょうとひるごはんをたべます。", en: "I eat lunch with a colleague." }, accept: ["coworker", "co-worker"] },
        { id: "ja-u71l1-hisho", type: "vocab", front: "ひしょ", reading: "hisho", meaning: "secretary", example: { jp: "しゃちょうのひしょです。", en: "She is the president's secretary." }, accept: ["personal assistant", "aide"] },
      ],
    },
    // Lesson 2: documents & communication
    {
      id: "ja-u71l2",
      unit: 71,
      lesson: 2,
      title: "Documents & reports",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle office paperwork: しょるい しりょう ほうこく そうだん けいやく きかく.",
      items: [
        { id: "ja-u71l2-shorui", type: "vocab", front: "しょるい", reading: "shorui", meaning: "documents", example: { jp: "しょるいをおくります。", en: "I send the documents." }, accept: ["paperwork", "papers"] },
        { id: "ja-u71l2-shiryo", type: "vocab", front: "しりょう", reading: "shiryō", meaning: "materials", example: { jp: "かいぎのしりょうをよみます。", en: "I read the meeting materials." }, accept: ["handouts", "reference data"] },
        { id: "ja-u71l2-hokoku", type: "vocab", front: "ほうこく", reading: "hōkoku", meaning: "report", example: { jp: "ぶちょうにほうこくします。", en: "I report to the manager." }, accept: ["to report", "reporting"] },
        { id: "ja-u71l2-sodan", type: "vocab", front: "そうだん", reading: "sōdan", meaning: "consultation", example: { jp: "じょうしにそうだんします。", en: "I consult my boss." }, accept: ["to consult", "discussion"] },
        { id: "ja-u71l2-keiyaku", type: "vocab", front: "けいやく", reading: "keiyaku", meaning: "contract", example: { jp: "あたらしいけいやくです。", en: "It's a new contract." }, accept: ["agreement", "contracts"] },
        { id: "ja-u71l2-kikaku", type: "vocab", front: "きかく", reading: "kikaku", meaning: "plan", example: { jp: "きかくのかいぎです。", en: "It's a planning meeting." }, accept: ["project", "proposal"] },
      ],
    },
    // Lesson 3: getting a job
    {
      id: "ja-u71l3",
      unit: 71,
      lesson: 3,
      title: "Getting a job",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about finding work: しゅうしょく てんしょく たいしょく めんせつ りれきしょ きゅうじん.",
      items: [
        { id: "ja-u71l3-shushoku", type: "vocab", front: "しゅうしょく", reading: "shūshoku", meaning: "getting a job", example: { jp: "にほんでしゅうしょくします。", en: "I get a job in Japan." }, accept: ["finding employment", "to get a job"] },
        { id: "ja-u71l3-tenshoku", type: "vocab", front: "てんしょく", reading: "tenshoku", meaning: "changing jobs", example: { jp: "あにはてんしょくしました。", en: "My older brother changed jobs." }, accept: ["job change", "career change"] },
        { id: "ja-u71l3-taishoku", type: "vocab", front: "たいしょく", reading: "taishoku", meaning: "leaving a job", example: { jp: "ちちはたいしょくしました。", en: "My father left his job." }, accept: ["resignation", "retirement"] },
        { id: "ja-u71l3-mensetsu", type: "vocab", front: "めんせつ", reading: "mensetsu", meaning: "job interview", example: { jp: "あしたはめんせつです。", en: "Tomorrow is the interview." }, accept: ["interview", "job interviews"] },
        { id: "ja-u71l3-rirekisho", type: "vocab", front: "りれきしょ", reading: "rirekisho", meaning: "resume", example: { jp: "りれきしょをかきます。", en: "I write my resume." }, accept: ["CV", "curriculum vitae"] },
        { id: "ja-u71l3-kyujin", type: "vocab", front: "きゅうじん", reading: "kyūjin", meaning: "job opening", example: { jp: "コンビニのきゅうじんをみます。", en: "I look at the convenience store's job listing." }, accept: ["job listing", "help wanted"] },
      ],
    },
    // Lesson 4: pay, hours & leave
    {
      id: "ja-u71l4",
      unit: 71,
      lesson: 4,
      title: "Pay & hours",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about pay and hours: げっきゅう じきゅう しゅうにゅう ボーナス きゅうか しゅっきん.",
      items: [
        { id: "ja-u71l4-gekkyu", type: "vocab", front: "げっきゅう", reading: "gekkyū", meaning: "monthly salary", example: { jp: "げっきゅうはたかいです。", en: "The monthly salary is high." }, accept: ["monthly pay", "monthly wage"] },
        { id: "ja-u71l4-jikyu", type: "vocab", front: "じきゅう", reading: "jikyū", meaning: "hourly wage", example: { jp: "じきゅうはやすいです。", en: "The hourly wage is low." }, accept: ["hourly pay", "hourly rate"] },
        { id: "ja-u71l4-shunyu", type: "vocab", front: "しゅうにゅう", reading: "shūnyū", meaning: "income", example: { jp: "しゅうにゅうがおおいです。", en: "My income is large." }, accept: ["earnings", "revenue"] },
        { id: "ja-u71l4-bonasu", type: "vocab", front: "ボーナス", reading: "bōnasu", meaning: "bonus", example: { jp: "なつにボーナスをもらいます。", en: "I get a bonus in summer." }, accept: ["work bonus", "bonuses"] },
        { id: "ja-u71l4-kyuka", type: "vocab", front: "きゅうか", reading: "kyūka", meaning: "leave", example: { jp: "らいしゅうはきゅうかです。", en: "Next week is my time off." }, accept: ["time off", "holiday"] },
        { id: "ja-u71l4-shukkin", type: "vocab", front: "しゅっきん", reading: "shukkin", meaning: "going to work", example: { jp: "あさはやくしゅっきんします。", en: "I go to work early in the morning." }, accept: ["attendance", "reporting to work"] },
      ],
    },
  ],
};
