// Unit 195 — ふくごうどうし・3 (compound verbs: together, arriving, around, back) — B2 / JLPT N2
// Strand D, coverage 3 of 16. The last of the compound-verb set: ～あう (mutually), ～つく
// and ～つける (reaching and attaching), ～まわる (all over), ～かえす (back again). With
// u193 and u194 that is eleven suffixes, which is enough to guess most compounds a learner
// meets rather than look them up — the point of teaching the system instead of the words.
export const UNIT195 = {
  id: "ja-u195",
  lang: "ja",
  title: "ふくごうどうし・3",
  order: 195,
  stage: "b2",
  lessons: [
    {
      id: "ja-u195l1",
      unit: 195,
      lesson: 1,
      title: "～あう: each to the other",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say two or more people did it to each other: はげましあう, しりあう, たすけあう, ゆずりあう, みつめあう, ささえあう.",
      items: [
        { id: "ja-u195l1-hagemashiau", type: "vocab", front: "はげましあう", reading: "hagemashiau", meaning: "to encourage one another", example: { jp: "つらい 時期を、二人で はげましあって 乗りきりました。", en: "The two of them got through the hard times by encouraging each other." }, accept: ["to cheer each other on", "mutual encouragement"], hint: "～あう makes the action mutual, so it needs two sides — はげます is one person doing the encouraging, はげましあう cannot be done alone." },
        { id: "ja-u195l1-shiriau", type: "vocab", front: "しりあう", reading: "shiriau", meaning: "to get to know each other", example: { jp: "二人は 学生の ころに しりあいました。", en: "The two of them got to know each other in their student days." }, accept: ["to become acquainted", "to meet (and know)"], hint: "The noun しりあい is 'an acquaintance' — someone you know, short of a friend." },
        { id: "ja-u195l1-tasukeau", type: "vocab", front: "たすけあう", reading: "tasukeau", meaning: "to help one another", example: { jp: "こまった ときは、たすけあう ことが 大切です。", en: "When things are hard, helping one another matters." }, accept: ["to support each other", "mutual aid"] },
        { id: "ja-u195l1-yuzuriau", type: "vocab", front: "ゆずりあう", reading: "yuzuriau", meaning: "to give way to each other", example: { jp: "せまい 道では、車が ゆずりあって 通ります。", en: "On a narrow road, cars pass by giving way to each other." }, accept: ["to yield mutually", "to compromise"], hint: "The social ideal behind a lot of Japanese public behaviour — neither side insists, both move a little." },
        { id: "ja-u195l1-mitsumeau", type: "vocab", front: "みつめあう", reading: "mitsumeau", meaning: "to look into each other's eyes", example: { jp: "二人は だまって みつめあって いました。", en: "The two of them were silently looking into each other's eyes." }, accept: ["to gaze at one another", "to lock eyes"] },
        { id: "ja-u195l1-sasaeau", type: "vocab", front: "ささえあう", reading: "sasaeau", meaning: "to support each other", example: { jp: "家ぞくが ささえあって、この 時期を 乗りきりました。", en: "The family supported each other and got through this period." }, accept: ["to hold each other up", "to be there for one another"], hint: "ささえる was u155; ～あう makes it reciprocal. たすけあう is helping with tasks, ささえあう is holding each other up." },
      ],
    },
    {
      id: "ja-u195l2",
      unit: 195,
      lesson: 2,
      title: "～つく and ～つける: reaching and fixing on",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something arrived at or attached to something: おいつく, たどりつく, しがみつく, むすびつく, やきつける, ひきつける.",
      items: [
        { id: "ja-u195l2-oitsuku", type: "vocab", front: "おいつく", reading: "oitsuku", meaning: "to catch up with", example: { jp: "急いで 走って、やっと おいつきました。", en: "I hurried and ran, and finally caught up." }, accept: ["to overtake (to level)", "to draw level with"], hint: "おう (chase) + つく (arrive) — the chase ends in arrival. For work and study too: おくれを おいつく." },
        { id: "ja-u195l2-tadoritsuku", type: "vocab", front: "たどりつく", reading: "tadoritsuku", meaning: "to finally reach (after difficulty)", example: { jp: "道に まよって、暗く なってから 宿に たどりつきました。", en: "I got lost and reached the inn only after dark." }, accept: ["to struggle to", "to make it at last"], hint: "The arrival was hard-won. つく alone is neutral; たどりつく has the whole difficult journey inside it." },
        { id: "ja-u195l2-shigamitsuku", type: "vocab", front: "しがみつく", reading: "shigamitsuku", meaning: "to cling on to", example: { jp: "子どもが 母おやに しがみついて 泣いて いました。", en: "The child was clinging to its mother and crying." }, accept: ["to hold on tight", "to cling desperately"], hint: "Physical clinging, and clinging to a job or a position past the point of dignity." },
        { id: "ja-u195l2-musubitsuku", type: "vocab", front: "むすびつく", reading: "musubitsuku", meaning: "to be connected to, to lead to", example: { jp: "毎日の 練習が よい けっかに むすびつきました。", en: "The daily practice led to a good result." }, accept: ["to link up with", "to tie in with", "to result in"], hint: "むすぶ is tying; むすびつく is two things turning out to be tied. Its transitive twin むすびつける is you doing the tying." },
        { id: "ja-u195l2-yakitsukeru", type: "vocab", front: "やきつける", reading: "yakitsukeru", meaning: "to burn into (the memory)", example: { jp: "その けしきを 目に やきつけました。", en: "I burned that scene into my memory." }, accept: ["to sear in", "to fix in the mind", "to print (a photo)"], hint: "やく (burn) + つける (fix on). 目に やきつける is the set phrase for a sight you intend never to lose." },
        { id: "ja-u195l2-hikitsukeru", type: "vocab", front: "ひきつける", reading: "hikitsukeru", meaning: "to attract, to draw in", example: { jp: "その 話は 多くの 人を ひきつけました。", en: "That story drew a lot of people in." }, accept: ["to captivate", "to pull in", "to fascinate"], hint: "ひく (pull) + つける — pulling something toward you and holding it there. Used of speakers, shops and magnets alike." },
      ],
    },
    {
      id: "ja-u195l3",
      unit: 195,
      lesson: 3,
      title: "～まわる: all over the place",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say an action ranged over an area: あるきまわる, さがしまわる, にげまわる, かけまわる, みまわる, とびまわる.",
      items: [
        { id: "ja-u195l3-arukimawaru", type: "vocab", front: "あるきまわる", reading: "arukimawaru", meaning: "to walk about, to wander around", example: { jp: "町を あるきまわって、いい 店を さがしました。", en: "I walked around the town looking for a good shop." }, accept: ["to roam", "to walk all over"], hint: "～まわる spreads the verb over an area with no single destination. あるく goes somewhere; あるきまわる covers ground." },
        { id: "ja-u195l3-sagashimawaru", type: "vocab", front: "さがしまわる", reading: "sagashimawaru", meaning: "to search high and low", example: { jp: "かぎを 家じゅう さがしまわりました。", en: "I searched high and low for the key all over the house." }, accept: ["to hunt everywhere", "to scour"] },
        { id: "ja-u195l3-nigemawaru", type: "vocab", front: "にげまわる", reading: "nigemawaru", meaning: "to run about trying to escape", example: { jp: "犬が よろこんで にげまわって います。", en: "The dog is happily running about out of reach." }, accept: ["to dodge about", "to keep evading"], hint: "Also figurative — にげまわる is what someone does who will not answer your calls." },
        { id: "ja-u195l3-kakemawaru", type: "vocab", front: "かけまわる", reading: "kakemawaru", meaning: "to run around", example: { jp: "子どもたちが 広い 公園を かけまわって います。", en: "The children are running around the big park." }, accept: ["to dash about", "to rush around"] },
        { id: "ja-u195l3-mimawaru", type: "vocab", front: "みまわる", reading: "mimawaru", meaning: "to patrol, to make the rounds", example: { jp: "夜に なると、けいびの 人が みまわります。", en: "At night the security staff make their rounds." }, accept: ["to do a round", "to inspect (on a circuit)"], hint: "Looking with a route — a guard, a nurse, a teacher on duty. The noun みまわり is the round itself." },
        { id: "ja-u195l3-tobimawaru", type: "vocab", front: "とびまわる", reading: "tobimawaru", meaning: "to fly about; to dash about busily", example: { jp: "しごとで 国じゅうを とびまわって います。", en: "Work has me flying all over the country." }, accept: ["to buzz around", "to be constantly on the move"] },
      ],
    },
    {
      id: "ja-u195l4",
      unit: 195,
      lesson: 4,
      title: "～かえす: back the other way",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Send an action back where it came from: おりかえす, ひきかえす, おもいかえす, ききかえす, みかえす, おしかえす.",
      items: [
        { id: "ja-u195l4-orikaesu", type: "vocab", front: "おりかえす", reading: "orikaesu", meaning: "to turn back; to call back", example: { jp: "会議が 終わったら、おりかえし お電話します。", en: "I'll call you back once the meeting is over." }, accept: ["to return (a call)", "to double back", "to fold back"], hint: "おりかえし as an adverb means 'right back' — おりかえしご連絡します is the standard phone promise." },
        { id: "ja-u195l4-hikikaesu", type: "vocab", front: "ひきかえす", reading: "hikikaesu", meaning: "to turn back, to retrace", example: { jp: "雨が つよく なったので、とちゅうで ひきかえしました。", en: "The rain got heavy, so we turned back partway." }, accept: ["to go back", "to about-turn"] },
        { id: "ja-u195l4-omoikaesu", type: "vocab", front: "おもいかえす", reading: "omoikaesu", meaning: "to think back on; to think better of", example: { jp: "あの ころを おもいかえすと、なつかしい 気持ちに なります。", en: "Thinking back on those days makes me nostalgic." }, accept: ["to recall", "to reconsider", "to change one's mind"], hint: "Two directions from one word: sending your mind back over the past, or sending a decision back for review." },
        { id: "ja-u195l4-kikikaesu", type: "vocab", front: "ききかえす", reading: "kikikaesu", meaning: "to ask back, to ask again", example: { jp: "よく 聞こえなかったので、ききかえしました。", en: "I couldn't hear well, so I asked again." }, accept: ["to repeat a question", "to ask in return"], hint: "The single most useful verb in a conversation you are losing — and it describes both 'say that again' and answering a question with one." },
        { id: "ja-u195l4-mikaesu", type: "vocab", front: "みかえす", reading: "mikaesu", meaning: "to look back at; to prove (someone) wrong", example: { jp: "いつか みんなを みかえしたいと 思って います。", en: "One day I want to prove them all wrong." }, accept: ["to look over again", "to get one's own back", "to show them"], hint: "Literally looking back, but the live sense is triumphing over people who doubted you — success as the reply." },
        { id: "ja-u195l4-oshikaesu", type: "vocab", front: "おしかえす", reading: "oshikaesu", meaning: "to push back", example: { jp: "人が 多くて、前に 進めず おしかえされました。", en: "There were so many people that I couldn't move forward and was pushed back." }, accept: ["to shove back", "to repel"] },
      ],
    },
  ],
};
