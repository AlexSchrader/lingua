// JA Unit 148 — ごい・N3・7 (がっこうとしけん — school and exams) — B1 / JLPT N3
// Strand D, coverage 7 of 14. A1 taught せんせい, がっこう, しゅくだい and stopped. Anyone
// actually studying in Japanese — or reading about someone who is — needs the machinery
// around that: courses, fees, marks, attendance, deadlines. It is also the domain a
// B1 learner is most likely to be living inside, which is why it earns a coverage slot
// over a more picturable topic.
export const UNIT148 = {
  id: "ja-u148",
  lang: "ja",
  title: "ごい・N3・7",
  order: 148,
  stage: "b1",
  lessons: [
    {
      id: "ja-u148l1",
      unit: 148,
      lesson: 1,
      title: "Courses and costs",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what you're studying and what it costs: せんこう, ゼミ, こうざ, ひっしゅう, がくひ, しんがっき.",
      items: [
        { id: "ja-u148l1-hisshu", type: "vocab", front: "ひっしゅう", reading: "hisshū", meaning: "compulsory (subject)", example: { jp: "このこうざはひっしゅうなので、がくせいはみんなうけます。", en: "This course is compulsory, so all the students take it." }, accept: ["required subject", "mandatory", "core course"], hint: "ひつ (must) + しゅう (study). Its opposite せんたく (optional) works the same way — ひっしゅうかもく and せんたくかもく on every timetable." },
        { id: "ja-u148l1-senko", type: "vocab", front: "せんこう", reading: "senkō", meaning: "one's major, specialism", example: { jp: "だいがくでのせんこうはなんですか。わたしはれきしです。", en: "What's your major at university? Mine is history." }, accept: ["field of study", "specialization", "subject"], hint: "The standard question when meeting a student: ごせんこうは？ Also a verb — にほんごをせんこうしています." },
        { id: "ja-u148l1-zemi", type: "vocab", front: "ゼミ", reading: "zemi", meaning: "seminar class", example: { jp: "きんようびのゼミでは、じぶんのけんきゅうをはっぴょうします。", en: "In Friday's seminar we present our own research." }, accept: ["seminar", "study group", "tutorial"], hint: "Short for ゼミナール, from German. A small discussion class run by one professor — a fixture of Japanese university life." },
        { id: "ja-u148l1-juku", type: "vocab", front: "じゅく", reading: "juku", meaning: "cram school", example: { jp: "がっこうのあと、しゅうに3かいじゅくにかよっています。", en: "After school I go to cram school three times a week." }, accept: ["prep school", "after-school school", "tutoring school"], hint: "A private evening school for exam preparation, and a fixture of Japanese childhood — most secondary students attend one." },
        { id: "ja-u148l1-gakuhi", type: "vocab", front: "がくひ", reading: "gakuhi", meaning: "tuition fees", example: { jp: "がくひがたかいので、アルバイトをしています。", en: "The tuition is expensive, so I'm working part-time." }, accept: ["school fees", "cost of study", "tuition"], hint: "～ひ is the suffix for a cost: こうつうひ (travel costs), しょくひ (food costs). Learn the suffix and you get a dozen words." },
        { id: "ja-u148l1-shingakki", type: "vocab", front: "しんがっき", reading: "shingakki", meaning: "new term, new semester", example: { jp: "しんがっきがはじまって、クラスがにぎやかになりました。", en: "The new term has started and the class has got lively." }, accept: ["new semester", "start of term"], hint: "しん (new) + がっき (term). The Japanese school year starts in April, so しんがっき and cherry blossom arrive together." },
      ],
    },
    {
      id: "ja-u148l2",
      unit: 148,
      lesson: 2,
      title: "Exams and results",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about sitting an exam and how it went: じゅけん, さいてん, てんすう, せいせき, ごうかく, ふごうかく.",
      items: [
        { id: "ja-u148l2-juken", type: "vocab", front: "じゅけん", reading: "juken", meaning: "sitting an exam", example: { jp: "ことしにほんごのしけんをじゅけんするつもりです。", en: "I intend to sit the Japanese exam this year." }, accept: ["taking an examination", "entrance exam", "to sit (an exam)"], hint: "The act of taking it, not the exam itself (しけん). じゅけんせい — an exam candidate — is a whole life stage in Japan." },
        { id: "ja-u148l2-saiten", type: "vocab", front: "さいてん", reading: "saiten", meaning: "marking, grading", example: { jp: "さいてんがおわるまで、けっかはわかりません。", en: "We won't know the results until the marking is finished." }, accept: ["scoring", "correction", "to mark"], hint: "てん (points) is inside it — literally 'taking points'. The teacher さいてんします; the student waits." },
        { id: "ja-u148l2-tensu", type: "vocab", front: "てんすう", reading: "tensū", meaning: "score, marks", example: { jp: "てんすうはよくなかったですが、ごうかくはしました。", en: "My score wasn't good, but I did pass." }, accept: ["points", "mark", "grade (number)"], hint: "The number itself. せいせき is the overall record; てんすう is what you got on the day." },
        { id: "ja-u148l2-seiseki", type: "vocab", front: "せいせき", reading: "seiseki", meaning: "academic record, results", example: { jp: "まいにちふくしゅうしたら、せいせきがあがりました。", en: "I reviewed every day and my grades went up." }, accept: ["grades", "performance", "results"], hint: "Your standing over a term or a year, and also used for sports results: しあいのせいせき." },
        { id: "ja-u148l2-gokaku", type: "vocab", front: "ごうかく", reading: "gōkaku", meaning: "passing (an exam)", example: { jp: "いっしょうけんめいべんきょうして、やっとごうかくしました。", en: "I studied as hard as I could and finally passed." }, accept: ["pass", "success", "to qualify"], hint: "Passing a test or meeting a standard. ごうかくおめでとう is the congratulation you'll hear every March." },
        { id: "ja-u148l2-fugokaku", type: "vocab", front: "ふごうかく", reading: "fugōkaku", meaning: "failing (an exam)", example: { jp: "ふごうかくでしたが、らいねんまたじゅけんします。", en: "I failed, but I'll sit it again next year." }, accept: ["fail", "unsuccessful", "not passing"], hint: "ふ～ negates again (see ふこうへい, ふしぜん). Softer than おちました, which is what you'd actually say to a friend." },
      ],
    },
    {
      id: "ja-u148l3",
      unit: 148,
      lesson: 3,
      title: "Day to day at school",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle attendance and assignments: けっせき, そうたい, たんにん, がくねん, かだい, ていしゅつ.",
      items: [
        { id: "ja-u148l3-sotai", type: "vocab", front: "そうたい", reading: "sōtai", meaning: "leaving early", example: { jp: "よていがあるので、きょうはそうたいします。", en: "I have something on, so I'm leaving early today." }, accept: ["early departure", "to leave early", "going home early"], hint: "The third member of the set with ちこく (arriving late) and けっせき (not coming at all). School and workplace both use all three." },
        { id: "ja-u148l3-kesseki", type: "vocab", front: "けっせき", reading: "kesseki", meaning: "absence", example: { jp: "ねつがあったので、きのうはけっせきしました。", en: "I had a fever, so I was absent yesterday." }, accept: ["being absent", "non-attendance", "to miss (class)"], hint: "けつ～ means 'lacking' — the same element is in けってん (a flaw). Its opposite しゅっせき (attendance) you already have from u90." },
        { id: "ja-u148l3-tannin", type: "vocab", front: "たんにん", reading: "tannin", meaning: "class teacher, teacher in charge", example: { jp: "こまったことがあれば、たんにんのせんせいにそうだんしてください。", en: "If anything's wrong, talk to your class teacher." }, accept: ["homeroom teacher", "form tutor", "person in charge"], hint: "The one teacher responsible for your class as a group — a bigger role in Japan than in most countries." },
        { id: "ja-u148l3-gakunen", type: "vocab", front: "がくねん", reading: "gakunen", meaning: "school year, year group", example: { jp: "がくねんがあがると、じゅぎょうがむずかしくなります。", en: "As you move up a year, the classes get harder." }, accept: ["grade", "year (of study)", "academic year"], hint: "Both the year of study you're in and the cohort you're in it with — おなじがくねん means 'in my year'." },
        { id: "ja-u148l3-bukatsu", type: "vocab", front: "ぶかつ", reading: "bukatsu", meaning: "school club activity", example: { jp: "ぶかつがあるので、まいにちかえりがおそいです。", en: "I have club activities, so I get home late every day." }, accept: ["club", "extracurricular activity", "school society"], hint: "Short for ぶかつどう. Japanese school clubs meet most days including weekends — closer to a team commitment than a hobby." },
        { id: "ja-u148l3-kyushoku", type: "vocab", front: "きゅうしょく", reading: "kyūshoku", meaning: "school lunch", example: { jp: "きゅうしょくは、せいとがじぶんでくばります。", en: "The pupils serve the school lunch themselves." }, accept: ["school meal", "provided lunch", "canteen lunch"], hint: "Everyone eats the same meal in the classroom, and the pupils serve and clear it — part of the curriculum rather than a break from it." },
      ],
    },
    {
      id: "ja-u148l4",
      unit: 148,
      lesson: 4,
      title: "Studying, and what comes after",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about how you study and where it leads: あんき, じょうぎ, ふでばこ, しょうがくきん, しんろ, がくれき.",
      items: [
        { id: "ja-u148l4-anki", type: "vocab", front: "あんき", reading: "anki", meaning: "memorization, learning by heart", example: { jp: "あんきするだけでは、つかえるようになりません。", en: "Just memorizing won't get you to the point of using it." }, accept: ["rote learning", "to memorize", "learning by rote"], hint: "Memorizing without necessarily understanding. おぼえます is neutral remembering; あんき is the deliberate drilling." },
        { id: "ja-u148l4-jogi", type: "vocab", front: "じょうぎ", reading: "jōgi", meaning: "ruler", example: { jp: "じょうぎをつかって、まっすぐなせんをひきました。", en: "I used a ruler to draw a straight line." }, accept: ["straight edge", "measure"], hint: "The drawing tool, not the measurement. じょうぎでせんをひく — you'll meet it in every maths class." },
        { id: "ja-u148l4-fudebako", type: "vocab", front: "ふでばこ", reading: "fudebako", meaning: "pencil case", example: { jp: "ふでばこをわすれたので、ペンをかりました。", en: "I forgot my pencil case, so I borrowed a pen." }, accept: ["pen case", "pencil box"], hint: "ふで (brush) + はこ (box) — the name predates pencils by centuries. The は becomes ば inside a compound, a very regular sound change." },
        { id: "ja-u148l4-shogakukin", type: "vocab", front: "しょうがくきん", reading: "shōgakukin", meaning: "scholarship", example: { jp: "しょうがくきんをもらえたので、りゅうがくできます。", en: "I got a scholarship, so I can study abroad." }, accept: ["grant", "student loan", "bursary"], hint: "Careful — in Japan many しょうがくきん are loans that must be repaid, not gifts. The word covers both." },
        { id: "ja-u148l4-shinro", type: "vocab", front: "しんろ", reading: "shinro", meaning: "future course, career path", example: { jp: "そつぎょうのまえに、しんろについてかんがえなければなりません。", en: "Before graduating, I have to think about my future path." }, accept: ["direction (in life)", "next step", "prospects"], hint: "The path after school — further study or work. しんろそうだん (a careers consultation) is a fixture of the final school year." },
        { id: "ja-u148l4-gakureki", type: "vocab", front: "がくれき", reading: "gakureki", meaning: "educational background", example: { jp: "がくれきよりも、けいけんのほうがたいせつだとおもいます。", en: "I think experience matters more than educational background." }, accept: ["academic history", "qualifications", "schooling"], hint: "What schools you attended, as a line on a CV. がくれきしゃかい — a society that judges by it — is a standing topic of debate." },
      ],
    },
  ],
};
