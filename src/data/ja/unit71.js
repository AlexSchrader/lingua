// Unit 71 — しごと・かいしゃ ("Work & the office") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 workplace / office / business vocab NOT already taught. Every front is verified
// absent from the global exclusion list (かいぎ・しゃちょう・めいし・ざんぎょう・
// きゅうりょう・しゅっちょう etc. are already taught elsewhere, so they are avoided).
// Examples use only already-introduced vocab + A1/A2 grammar (を/に/で/と + です/ます/
// ました), so this slots on top of the finished A1/A2 core.
// (This header used to end "Not registered in index.js." It IS registered — the unit
// loads from src/data/ja/index.js and ships. Corrected 2026-10-10.)
// NATURALNESS: checked by the LLM naturalness review (content-auditor) plus Alex's
// Dev-Mode playtest. A human native review is a nice-to-have, NOT a blocker
// (CLAUDE.md, Alex 2026-07-12).
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
        { id: "ja-u71l1-bucho", type: "vocab", front: "ぶちょう", reading: "buchō", meaning: "department manager", example: { jp: "ぶちょうはかいぎです。", en: "The manager is in a meeting." }, drill: { jp: "ぶちょうにしょるいをおくります。", en: "I send the documents to the manager." }, accept: ["manager", "department head", "division head", "head of department"], hint: "buchō — ぶ (department) + ちょう (head). That ちょう ending means 'head of' all through Japanese business: しゃちょう (company), かちょう (section). Long ō: bu-chō. You address them BY the title, not by name." },
        { id: "ja-u71l1-kacho", type: "vocab", front: "かちょう", reading: "kachō", meaning: "section chief", example: { jp: "かちょうにききます。", en: "I'll ask the section chief." }, accept: ["section manager", "section head", "team leader", "unit chief"], drill: { jp: "かちょうとかいぎをします。", en: "I have a meeting with the section chief." }, hint: "kachō — か (section) + ちょう (head), one rung BELOW the ぶちょう on the card before. Japanese ranks are a strict ladder and the words encode it: か inside ぶ inside しゃ." },
        { id: "ja-u71l1-joshi", type: "vocab", front: "じょうし", reading: "jōshi", meaning: "boss", example: { jp: "じょうしとはなします。", en: "I talk with my boss." }, drill: { jp: "じょうしにほうこくします。", en: "I report to my boss." }, accept: ["superior", "supervisor", "the person above you", "one's senior"], hint: "jōshi — じょう (above) + し (person): whoever is above you, with no specific rank. Long ō: jō-shi. The general word; ぶちょう and かちょう are the actual titles. Its opposite ぶか is two cards along." },
        { id: "ja-u71l1-buka", type: "vocab", front: "ぶか", reading: "buka", meaning: "subordinate", example: { jp: "ぶかをてつだいます。", en: "I help my subordinate." }, drill: { jp: "ぶかとひるごはんをたべます。", en: "I eat lunch with my subordinate." }, accept: ["staff member", "junior staff", "someone under you", "a report"], hint: "buka — ぶ (department) + か (below): the staff under you. The exact counterpart of じょうし on the card before. Neutral in Japanese, where English 'subordinate' sounds cold." },
        { id: "ja-u71l1-doryo", type: "vocab", front: "どうりょう", reading: "dōryō", meaning: "colleague", example: { jp: "どうりょうとひるごはんをたべます。", en: "I eat lunch with a colleague." }, drill: { jp: "どうりょうにそうだんします。", en: "I consult a colleague." }, accept: ["coworker", "co-worker", "workmate", "someone at the same level"], hint: "dōryō — どう (same) + りょう (companion): someone at your own level, neither above nor below. Two long vowels: dō-ryō. The one work relationship in Japanese that carries no rank." },
        { id: "ja-u71l1-hisho", type: "vocab", front: "ひしょ", reading: "hisho", meaning: "secretary", example: { jp: "しゃちょうのひしょです。", en: "She is the president's secretary." }, drill: { jp: "ひしょがめいしをわたします。", en: "The secretary hands over a business card." }, accept: ["personal assistant", "aide", "executive assistant", "PA"], hint: "hisho — ひ (secret) + しょ (write): the person trusted with confidential papers. In Japan a ひしょ is attached to one executive, closer to a chief of staff than to general office support." },
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
        { id: "ja-u71l2-shorui", type: "vocab", front: "しょるい", reading: "shorui", meaning: "documents", example: { jp: "しょるいをおくります。", en: "I send the documents." }, drill: { jp: "しょるいをやくしょでもらいます。", en: "I get the documents at the city office." }, accept: ["paperwork", "papers", "official forms", "the file"], hint: "shorui — しょ (write) + るい (kind): written things, as a batch. Always official or formal: contracts, forms, applications. A single sheet of paper is かみ; a note is メモ." },
        { id: "ja-u71l2-shiryo", type: "vocab", front: "しりょう", reading: "shiryō", meaning: "materials", example: { jp: "かいぎのしりょうをよみます。", en: "I read the meeting materials." }, drill: { jp: "しりょうをどうりょうにおくります。", en: "I send the materials to a colleague." }, accept: ["handouts", "reference data", "background material", "the pack"], hint: "shiryō — し (resource) + りょう (material): material you consult, the pack handed round before a meeting. Long ō: shi-ryō. しょるい are papers that bind you; しりょう are papers that inform you." },
        { id: "ja-u71l2-hokoku", type: "vocab", front: "ほうこく", reading: "hōkoku", meaning: "report", example: { jp: "ぶちょうにほうこくします。", en: "I report to the manager." }, drill: { jp: "しごとのほうこくをかきます。", en: "I write a report on the work." }, accept: ["to report", "reporting", "a briefing", "an update"], hint: "hōkoku — telling a superior what happened, so the person reported to takes に. Long ō: hō-koku. It is the ほう of ほうこく・れんらく・そうだん, the three-word mantra of Japanese office conduct." },
        { id: "ja-u71l2-sodan", type: "vocab", front: "そうだん", reading: "sōdan", meaning: "consultation", example: { jp: "じょうしにそうだんします。", en: "I consult my boss." }, drill: { jp: "かぞくとそうだんします。", en: "I talk it over with my family." }, accept: ["to consult", "discussion", "talking it over", "seeking advice"], hint: "sōdan — talking a problem over to get advice. Long ō: sō-dan. ⚠️ Particle shift: に if you are asking someone senior, と if you are deciding together. The third word of ほうこく・れんらく・そうだん." },
        { id: "ja-u71l2-keiyaku", type: "vocab", front: "けいやく", reading: "keiyaku", meaning: "contract", example: { jp: "あたらしいけいやくです。", en: "It's a new contract." }, drill: { jp: "みせとけいやくをします。", en: "I make a contract with the shop." }, accept: ["agreement", "contracts", "a deal", "the terms"], hint: "keiyaku — a binding agreement: a job, a flat, a phone. けいやくしゃいん, a contract employee, is a whole employment category in Japan, as against a permanent せいしゃいん." },
        { id: "ja-u71l2-kikaku", type: "vocab", front: "きかく", reading: "kikaku", meaning: "plan (a project proposal)", example: { jp: "きかくのかいぎです。", en: "It's a planning meeting." }, drill: { jp: "きかくをどうりょうにおくります。", en: "I send the proposal to a colleague." }, accept: ["project", "proposal", "a pitch", "planned initiative"], hint: "kikaku — a proposal you put forward for something new, not a personal schedule (that is よてい). The きかくしょ is the written pitch. Short vowels throughout: ki-ka-ku." },
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
        { id: "ja-u71l3-shushoku", type: "vocab", front: "しゅうしょく", reading: "shūshoku", meaning: "getting a job", example: { jp: "にほんでしゅうしょくします。", en: "I get a job in Japan." }, drill: { jp: "あねはしゅうしょくしました。", en: "My older sister got a job." }, accept: ["finding employment", "to get a job", "starting work", "entering employment"], hint: "shūshoku — しゅう (take up) + しょく (post): taking up a post, meaning your FIRST job. Long ū: shū-shoku. しゅうしょくかつどう, the graduate job hunt, is a season of Japanese life with its own rituals." },
        { id: "ja-u71l3-tenshoku", type: "vocab", front: "てんしょく", reading: "tenshoku", meaning: "changing jobs", example: { jp: "あにはてんしょくしました。", en: "My older brother changed jobs." }, drill: { jp: "てんしょくのそうだんをします。", en: "I have a consultation about changing jobs." }, accept: ["job change", "career change", "moving employer", "switching jobs"], hint: "tenshoku — てん (shift) + しょく (post): moving to another employer. The しょく in all three cards of this half of the lesson is the same 'post', so しゅう・てん・たい tell you take up, shift, step down." },
        { id: "ja-u71l3-taishoku", type: "vocab", front: "たいしょく", reading: "taishoku", meaning: "leaving a job", example: { jp: "ちちはたいしょくしました。", en: "My father left his job." }, drill: { jp: "らいげつたいしょくします。", en: "I leave the job next month." }, accept: ["resignation", "retirement", "quitting", "stepping down"], hint: "taishoku — たい (withdraw) + しょく (post): leaving your post, covering both resigning and retiring. The context tells you which; ていねん is retirement at the set age specifically." },
        { id: "ja-u71l3-mensetsu", type: "vocab", front: "めんせつ", reading: "mensetsu", meaning: "job interview", example: { jp: "あしたはめんせつです。", en: "Tomorrow is the interview." }, drill: { jp: "めんせつできんちょうします。", en: "I get nervous in the interview." }, accept: ["interview", "job interviews", "a hiring interview", "being interviewed"], hint: "mensetsu — めん (face) + せつ (meet): a face-to-face meeting. A journalist's interview is インタビュー; めんせつ is always the one where you are being assessed. Short vowels: men-se-tsu." },
        { id: "ja-u71l3-rirekisho", type: "vocab", front: "りれきしょ", reading: "rirekisho", meaning: "resume", example: { jp: "りれきしょをかきます。", en: "I write my resume." }, drill: { jp: "りれきしょをめんせつにもっていきます。", en: "I take my resume to the interview." }, accept: ["CV", "curriculum vitae", "job application form", "employment history"], hint: "rirekisho — りれき (track record) + しょ (document). ⚠️ Not a free-form CV: the Japanese りれきしょ is a standard printed form you fill in by hand, sold in stationery shops, and traditionally with a photo attached." },
        { id: "ja-u71l3-kyujin", type: "vocab", front: "きゅうじん", reading: "kyūjin", meaning: "job opening", example: { jp: "コンビニのきゅうじんをみます。", en: "I look at the convenience store's job listing." }, accept: ["job listing", "help wanted", "a vacancy", "recruitment ad"], drill: { jp: "みせのきゅうじんをしらべます。", en: "I look up the shop's job openings." }, hint: "kyūjin — きゅう (seek) + じん (person): seeking people, so it is the EMPLOYER'S advert. The flipside きゅうしょく, seeking a post, is what the job-hunter is doing. Long ū: kyū-jin." },
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
        { id: "ja-u71l4-gekkyu", type: "vocab", front: "げっきゅう", reading: "gekkyū", meaning: "monthly salary", example: { jp: "げっきゅうはたかいです。", en: "The monthly salary is high." }, drill: { jp: "げっきゅうでちょきんをします。", en: "I save out of my monthly salary." }, accept: ["monthly pay", "monthly wage", "a month's salary", "salary per month"], hint: "gekkyū — げつ (month) + きゅう (pay), with the つ+き colliding into っき: gek-kyū. Most Japanese salaried work is quoted this way, which is why きゅうりょう from u49 is assumed monthly." },
        { id: "ja-u71l4-jikyu", type: "vocab", front: "じきゅう", reading: "jikyū", meaning: "hourly wage", example: { jp: "じきゅうはやすいです。", en: "The hourly wage is low." }, drill: { jp: "じきゅうをしらべてしごとをさがします。", en: "I check the hourly wage and look for work." }, accept: ["hourly pay", "hourly rate", "pay per hour", "wage per hour"], hint: "jikyū — じ (hour) + きゅう (pay), the same きゅう as げっきゅう on the card before. Long ū: ji-kyū. This is the figure on every part-time ad in Japan, so it is the number students actually compare." },
        { id: "ja-u71l4-shunyu", type: "vocab", front: "しゅうにゅう", reading: "shūnyū", meaning: "income", example: { jp: "しゅうにゅうがおおいです。", en: "My income is large." }, drill: { jp: "しゅうにゅうのぜいきんをはらいます。", en: "I pay the tax on my income." }, accept: ["earnings", "revenue", "what one takes in", "total income"], hint: "shūnyū — しゅう (gather) + にゅう (come in): everything coming in, from all sources — wider than げっきゅう, which is only your salary. Two long vowels: shū-nyū. Its opposite is ししゅつ, outgoings." },
        { id: "ja-u71l4-bonasu", type: "vocab", front: "ボーナス", reading: "bōnasu", meaning: "bonus", example: { jp: "なつにボーナスをもらいます。", en: "I get a bonus in summer." }, drill: { jp: "ボーナスでりょこうにいきます。", en: "I go on a trip with my bonus." }, accept: ["work bonus", "bonuses", "a lump-sum payment", "extra pay"], hint: "bōnasu — long ō: bō-na-su. ⚠️ Not a surprise reward: Japanese companies pay one in summer and one in winter as a routine part of the package, usually a couple of months' げっきゅう each." },
        { id: "ja-u71l4-kyuka", type: "vocab", front: "きゅうか", reading: "kyūka", meaning: "leave (time off work)", example: { jp: "らいしゅうはきゅうかです。", en: "Next week is my time off." }, drill: { jp: "なつにきゅうかをとります。", en: "I take leave in summer." }, accept: ["time off", "holiday", "annual leave", "vacation days"], hint: "kyūka — きゅう (rest) + か (day): paid days off you are entitled to, which you TAKE with とります. やすみ from u2 is any break at all, including a day the shop is shut; きゅうか is formal leave." },
        { id: "ja-u71l4-shukkin", type: "vocab", front: "しゅっきん", reading: "shukkin", meaning: "going to work", example: { jp: "あさはやくしゅっきんします。", en: "I go to work early in the morning." }, drill: { jp: "どようびもしゅっきんします。", en: "I go in to work on Saturday too." }, accept: ["attendance", "reporting to work", "going in", "turning up at work"], hint: "shukkin — しゅつ (go out) + きん (duty), with the collision making っき: shuk-kin. Its opposite たいきん is leaving for the day. Note the same しゅつ as in しゅっぱつ, u52 — both are about setting out." },
      ],
    },
  ],
};
