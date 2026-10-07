// RU Unit 134 — Игра и азарт ("Games and gambling") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u124–u136). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit87.js §1–§6, and
// ru/unit124.js §1–§5 for this block.
// Probes quoted in this header are reproducible with
// `node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...` — see unit124.js.
//
// THE MEASURED HOLE. u27 Свободное время owns the PASTIME (играть · петь ·
// плавать · рисовать) and u84 Спорт и состязание owns the club match plus
// `шахматы` and `ничья`, both BARRED as fronts. Across 2,328 cards nothing
// names a game's MECHANICS and nothing at all names gambling: no dice, no
// counter, no deck, no trump, no lots, no bet, no casino, no stake, no bluff.
// Twenty-one of the probed seeds were usable and four more were added.
//
// ⚠️ `карты` WAS REFUSED, and it is the obvious word for a card game. It is the
// PLURAL of `карта` (u30l1, "a map"), and unit1.js §5's last rule bars an
// inflected form of a taught word outright — the rule that also killed `права`
// at B1 (u87 §4). Russian really does use карты for playing cards, so the gap
// is genuine; `колода` (the deck) and `козырь` (the trump) carry the field, and
// колода's hint names карты in Russian so the learner meets the word.
//
// ⚠️ THREE игр- WORDS WOULD HAVE BEEN TOO MANY, SO IT IS TWO. `играть` is
// taught (u27l?), and l4 cards `выигрыш` and `проигрыш` — both PREFIXED
// derivations, which unit31.js §3 explicitly allows and which u87 §5 applied to
// `полуостров`. They are an antonym pair and are taught together for that
// reason. `игрушка` ("a toy") WAS DROPPED to keep the root at two: unit51.js §3
// refused `образование` partly for "the уч- family again", and the same
// arithmetic applies here. `игрок` and `очко` probe FREE but belong to u84's
// club match by the central allocation and were not taken.
//
// ⚠️ `ставка` WAS REFUSED FOR TWO REASONS AT ONCE: it sits on `ставить` (u57),
// and its gloss lands on top of l3's `пари`. One idea needs one word, and пари
// is the one that is unambiguously a wager.
//
// REFUSED, with the reason:
//   `карты` · `игрушка` · `ставка` — above.
//   `головоломка` — against `голова` (u20), and l2's `загадка` already fills
//        the puzzle slot.
//   `обман` TAKEN (u56l3) · `ход` TAKEN (u66l1, "the course of something") —
//        and ход is the word for a MOVE in a game, so that gap is named too.
//   `игральный` · `азартный` — adjectives of a carded noun.
//   `ферзь` · `прятки` · `джекпот` · `бильярд` · `тотализатор` · `масть` ·
//        `кегли` · `волчок` · `жетон` — all FREE, all dropped for count at 24.
//
// ⚠️ `домино` IS GLOSSED THE LONG WAY ROUND. It transliterates to the English
// word, so "a domino" normalises to exactly the card's own reading and is a
// free pass under unit1.js §9 — the same trap `генерал` hit at u129l1, `вето`
// at u130l2, `алиби` at u131l4 and `линолеум` at u132l4.
// ⚠️ THREE INDECLINABLE NEUTERS IN ONE UNIT: `домино` (l1), `казино` and `пари`
// (l3) never change their ending, like `кафе` (u9), `купе` (u125l2), `вето`
// (u130l2) and `алиби` (u131l4). Each hint says so, because a learner who
// declines them produces something no Russian has ever said.
// ⚠️ ONE PLURALE TANTUM: `нарды` (l2) has no singular, like `обои` (u132l4),
// `наручники` (u131l4) and `шахматы` (u84).
// ⚠️ `качели` AND `прятки` WERE BOTH REFUSED, and only a probe against the
// LIVE corpus found out why: `качать` IS TAUGHT (u80, "to rock", with "a swing"
// in its accept[]) and so is `прятать` (u80, "to hide something"). Both nouns are
// derivations of a taught verb AND the first collided on the gloss outright.
// `бильярд` took l2's slot. The playground swing therefore has no card in
// this course, which is a real gap and is left named.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT134 = {
  id: "ru-u134",
  lang: "ru",
  title: "Игра и азарт",
  order: 134,
  stage: "b2",
  lessons: [
    {
      id: "ru-u134l1",
      unit: 134,
      lesson: 1,
      title: "What you play with",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the pieces a game is played with — a dice, a counter, a deck, a trump, a pawn and the tile game.",
      items: [
        { id: "ru-u134l1-kubik", type: "vocab", front: "кубик", reading: "kubik", meaning: "a dice", accept: ["the small six-sided block you throw", "a numbered cube for games", "what you roll to get a number"], example: { jp: "Кубик показал шесть, и он играл первым.", en: "The dice showed a six, and he played first." }, drill: { jp: "Этот кубик совсем маленький", en: "This dice is quite small" }, hint: "KU-bik — stress on the first syllable. MASCULINE. The diminutive of куб, a cube. ⚠️ Also a child's building block and a stock cube: Russian uses кубик for any small cube, and the game sense is just the commonest." },
        { id: "ru-u134l1-fishka", type: "vocab", front: "фишка", reading: "fishka", meaning: "a playing counter", accept: ["a small round piece moved on a board", "a chip used in a game", "the token that stands for a player"], example: { jp: "Фишка была совсем маленькая, но на поле её было хорошо видно.", en: "The counter was quite small, but it was clearly visible on the board." }, drill: { jp: "Эта фишка совсем маленькая", en: "This counter is quite small" }, hint: "FISH-ka — stress on the first syllable. FEMININE (-а). A German loan. ⚠️ MODERN SLANG you will hear constantly: a фишка is also the clever point of something — «в чём фишка?», what's the trick of it?" },
        { id: "ru-u134l1-koloda", type: "vocab", front: "колода", reading: "koloda", meaning: "a deck of playing cards", accept: ["a full set of cards for a game", "the pack a dealer holds", "all the cards of one game together"], example: { jp: "В колоде было тридцать шесть карт, и двух не хватало.", en: "There were thirty-six cards in the deck, and two were missing." }, drill: { jp: "Эта колода совсем новая", en: "This deck is quite new" }, hint: "ka-LO-da — stress on LO, and the first о reduces to a. FEMININE (-а). ⚠️ Playing cards are карты in Russian — the plural of `карта`, a map (unit 30), which is why this course cannot card it: unit 1 §5 bars an inflected form. You will still meet the word everywhere. A Russian deck is 36 cards, not 52. A SECOND sense: a колода is also a log." },
        { id: "ru-u134l1-kozyr", type: "vocab", front: "козырь", reading: "kozyr", meaning: "a trump card", accept: ["the suit that beats all the others", "a card that wins over any other", "the strongest card in a hand"], example: { jp: "У него был последний козырь, и он ждал очень долго.", en: "He had the last trump, and he waited a very long time." }, drill: { jp: "Этот козырь очень сильный", en: "This trump is very strong" }, hint: "KO-zyr — stress on the first syllable, with the ы from unit 5. MASCULINE despite the -ь, so unit 1 §3 says to name it. ⚠️ Its plural moves the stress onto the ending and takes -и: козырИ. Alive in argument: «его главный козырь», his strongest argument." },
        { id: "ru-u134l1-peshka", type: "vocab", front: "пешка", reading: "peshka", meaning: "a pawn", accept: ["the smallest piece on a chess board", "the weakest chess piece", "the piece that moves one square forward"], example: { jp: "Пешка — это самая слабая фигура в игре.", en: "The pawn is the weakest piece in the game." }, drill: { jp: "Эта пешка совсем маленькая", en: "This pawn is quite small" }, hint: "PESH-ka — stress on the first syllable. FEMININE (-а). From пеший, on foot. ⚠️ Used of people constantly and never kindly: «он здесь пешка», he counts for nothing here. The game itself is `шахматы`, from unit 84." },
        { id: "ru-u134l1-domino", type: "vocab", front: "домино", reading: "domino", meaning: "the game of numbered tiles", accept: ["a tile game played on a table", "the game with black tiles and dots", "the tile game played in courtyards"], example: { jp: "В домино здесь играют во дворе каждый вечер, и всегда громко.", en: "They play the tile game in the courtyard here every evening, and always loudly." }, drill: { jp: "Это домино совсем новое", en: "This tile game is quite new" }, hint: "da-mi-NO — stress on the last syllable, and the first о reduces to a. NEUTER, and ⚠️ IT NEVER CHANGES: в домино, из домино, два домино — an indeclinable loan like `кафе` from unit 9. ⚠️ Glossed the long way round on purpose — unit 1 §9's free pass again." },
      ],
    },
    {
      id: "ru-u134l2",
      unit: 134,
      lesson: 2,
      title: "Puzzles, boards and tables",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about games that are not gambling — a riddle, a crossword, backgammon, billiards, a tournament and a prize.",
      items: [
        { id: "ru-u134l2-zagadka", type: "vocab", front: "загадка", reading: "zagadka", meaning: "a riddle", accept: ["a question asked as a puzzle", "a puzzle in words", "something said in a way you must work out"], example: { jp: "Эту загадку дети знают, но взрослые думают над ней очень долго.", en: "Children know this riddle, but adults think about it for a very long time." }, drill: { jp: "Эта загадка очень трудная", en: "This riddle is very hard" }, hint: "za-GAD-ka — stress on GAD. FEMININE (-а). From гадать, to guess. ⚠️ Also any mystery at all: «это загадка для всех», it is a mystery to everybody — and that use is at least as common as the children's one." },
        { id: "ru-u134l2-krossvord", type: "vocab", front: "кроссворд", reading: "krossvord", meaning: "a crossword", accept: ["the word puzzle in squares", "a grid of words to fill in", "a puzzle where words cross"], example: { jp: "Кроссворд в этой газете такой трудный, что его никто не может решить.", en: "The crossword in this paper is so hard that nobody can solve it." }, drill: { jp: "Этот кроссворд очень трудный", en: "This crossword is very hard" }, hint: "kra-SSVORD — stress on SVORD, the first о reduces to a, and the сс is held a beat longer. MASCULINE. An English loan taken whole. ⚠️ A fixture of Russian trains and waiting rooms; the verb is решать кроссворд, to solve one." },
        { id: "ru-u134l2-nardy", type: "vocab", front: "нарды", reading: "nardy", meaning: "backgammon", accept: ["the board game with two dice and flat pieces", "the old eastern board game of dice", "the game played on a folding wooden board"], example: { jp: "В нарды играют на улице, и старые люди сидят за этой игрой часами.", en: "They play backgammon in the street, and old people sit at this game for hours." }, drill: { jp: "Эти нарды совсем новые", en: "These backgammon pieces are quite new" }, hint: "NAR-dy — stress on the first syllable. MASCULINE PLURAL, and ⚠️ IT HAS NO SINGULAR: a plurale tantum like `обои` (u132) and `наручники` (u131), so the card is in the plural because there is no other form — exactly like шахматы at unit 84." },
        { id: "ru-u134l2-bilyard", type: "vocab", front: "бильярд", reading: "bilyard", meaning: "billiards", accept: ["the table game of balls and a stick", "the game where balls are hit into pockets", "pool played on a cloth table"], example: { jp: "Бильярд здесь стоит в большой комнате, и играть можно до утра.", en: "The billiard table here stands in a big room, and you can play until morning." }, drill: { jp: "Этот бильярд совсем новый", en: "This billiard table is quite new" }, hint: "bi-LYARD — stress on LYARD, with the soft л before я. MASCULINE. A French loan. ⚠️ The word is the GAME and also the TABLE: «играть в бильярд», to play billiards, but «купить бильярд» is to buy the table. The Russian game is русский бильярд, with bigger balls and tighter pockets than the English one." },
        { id: "ru-u134l2-turnir", type: "vocab", front: "турнир", reading: "turnir", meaning: "a tournament played in rounds", accept: ["a competition played in rounds", "a series of games to find a winner", "a contest with many players over several days"], example: { jp: "Турнир шёл три дня, и потом остались только два человека.", en: "The tournament went on three days, and then only two people were left." }, drill: { jp: "Этот турнир был очень большой", en: "This tournament was very large" }, hint: "tur-NIR — stress on the last syllable. MASCULINE. A German loan, and originally the knights' kind — u92's `рыцарь` rode in one. ⚠️ Used of chess, cards and sport alike; a single game inside it is a `матч`, from unit 84." },
        { id: "ru-u134l2-priz", type: "vocab", front: "приз", reading: "priz", meaning: "a prize for winning", accept: ["what the winner is given", "the thing you get for coming first", "an award handed to a winner"], example: { jp: "Приз был маленький, но его хотели все.", en: "The prize was small, but everyone wanted it." }, drill: { jp: "Этот приз очень большой", en: "This prize is very large" }, hint: "PRIZ — one syllable, and the з is said as s at the end. MASCULINE. A French loan. ⚠️ A `приз` is won in a game; `премия` (unit 42) is a bonus paid at work, and `медаль` (unit 84) is hung round a neck. Russian keeps the three apart." },
      ],
    },
    {
      id: "ru-u134l3",
      unit: 134,
      lesson: 3,
      title: "Gambling",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about playing for money — the thrill of it, a casino, roulette, a lottery, a wager and the person who runs the table.",
      items: [
        { id: "ru-u134l3-azart", type: "vocab", front: "азарт", reading: "azart", meaning: "a reckless thrill", accept: ["the heat that makes a player keep going", "the excitement of risking something", "the fever of play"], example: { jp: "Азарт был такой сильный, что он не мог встать от стола.", en: "The thrill was so strong that he could not get up from the table." }, drill: { jp: "Этот азарт очень сильный", en: "This thrill is very strong" }, hint: "a-ZART — stress on the last syllable. MASCULINE. A French loan through the Arabic for a dice. ⚠️ THE KEY WORD OF THE UNIT: азартные игры is the legal term for games of chance, and «войти в азарт» means to get carried away — at cards, at work, in an argument." },
        { id: "ru-u134l3-kazino", type: "vocab", front: "казино", reading: "kazino", meaning: "a casino", accept: ["a house where people play for money", "a gambling hall", "the place roulette is played"], example: { jp: "Казино в этом городе уже не работает, и теперь там магазин.", en: "The casino in this city no longer works, and now there is a shop there." }, drill: { jp: "Это казино совсем новое", en: "This casino is quite new" }, hint: "ka-zi-NO — stress on the last syllable, and the first а is clear. NEUTER, and ⚠️ IT NEVER CHANGES: в казино, из казино, два казино — like `домино` in lesson 1. ⚠️ Banned across most of Russia since 2009, which is why you will meet the word mostly in the past tense." },
        { id: "ru-u134l3-ruletka", type: "vocab", front: "рулетка", reading: "ruletka", meaning: "roulette", accept: ["the spinning wheel game of numbers", "the game where a ball drops into a number", "the wheel game played for money"], example: { jp: "В рулетке можно получить много денег, но обычно люди только теряют.", en: "At roulette you can get a lot of money, but usually people only lose." }, drill: { jp: "Эта рулетка совсем новая", en: "This roulette wheel is quite new" }, hint: "ru-LET-ka — stress on LET. FEMININE (-а). A French loan. ⚠️ A SECOND, completely everyday sense: a рулетка is also a tape measure, the kind that rolls back into its case — and u89's tool lesson would have used that one." },
        { id: "ru-u134l3-lotereya", type: "vocab", front: "лотерея", reading: "lotereya", meaning: "a lottery", accept: ["a draw where numbers win money", "a game of chance with tickets", "a prize draw by numbers"], example: { jp: "Лотерея идёт каждую неделю, и билет стоит совсем мало.", en: "The lottery runs every week, and a ticket costs very little." }, drill: { jp: "Эта лотерея очень большая", en: "This lottery is very large" }, hint: "la-ti-RE-ya — stress on RE; the о reduces to a and the е to i. FEMININE (-я). ⚠️ Used of anything unpredictable: «это лотерея», it's a lottery, said of an exam or a job application." },
        { id: "ru-u134l3-pari", type: "vocab", front: "пари", reading: "pari", meaning: "a wager", accept: ["an agreement that the loser pays", "a bet made between two people", "money staked on who is right"], example: { jp: "Они держали пари на сто рублей, и он проиграл.", en: "They had a wager of a hundred roubles, and he lost." }, drill: { jp: "Это пари было очень большое", en: "This wager was very large" }, hint: "pa-RI — stress on the last syllable. NEUTER, and ⚠️ IT NEVER CHANGES: это пари, два пари — like `домино` and `казино`. A French loan. ⚠️ The verb is держать пари, to hold a wager — not делать, which is the mistake every learner makes once." },
        { id: "ru-u134l3-krupe", type: "vocab", front: "крупье", reading: "krupe", meaning: "a croupier", accept: ["the person who runs a gambling table", "the dealer at a casino table", "whoever spins the wheel and pays out"], example: { jp: "Крупье работал всю ночь и за это время ничего не сказал.", en: "The croupier worked all night and said nothing in that time." }, drill: { jp: "Этот крупье очень молодой", en: "This croupier is very young" }, hint: "krup-YE — stress on the last syllable, and the ь keeps п and е apart. MASCULINE by meaning, and ⚠️ IT NEVER CHANGES EITHER: этот крупье, у этого крупье. A French loan, and the third indeclinable in this unit." },
      ],
    },
    {
      id: "ru-u134l4",
      unit: 134,
      lesson: 4,
      title: "Winning, losing, and the catch",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how a game ends and what is hidden in it — a win, a loss, the drawing of lots, the way the cards fall, a bluff and a hidden catch.",
      items: [
        { id: "ru-u134l4-vyigrysh", type: "vocab", front: "выигрыш", reading: "vyigrysh", meaning: "winnings from a game", accept: ["what you take when you come first", "winnings", "the money or thing won"], example: { jp: "Выигрыш был такой большой, что он не сказал об этом никому.", en: "The winnings were so large that he told nobody about it." }, drill: { jp: "Этот выигрыш очень большой", en: "These winnings are very large" }, hint: "VY-ig-rysh — stress on the FIRST syllable, with the ы from unit 5, and the final ш said sh. MASCULINE. From `играть` (unit 27) with вы-, out. ⚠️ Used of any advantage: «это выигрыш во времени», that is a gain in time." },
        { id: "ru-u134l4-proigrysh", type: "vocab", front: "проигрыш", reading: "proigrysh", meaning: "a loss at a game", accept: ["coming out behind in a game", "what you give up when you lose", "the losing of a contest"], example: { jp: "Проигрыш был очень тяжёлый, и после него он больше не играл.", en: "The loss was very hard, and after it he did not play again." }, drill: { jp: "Этот проигрыш очень тяжёлый", en: "This loss is very hard" }, hint: "PRO-ig-rysh — stress on the FIRST syllable. MASCULINE. From `играть` with про-, through — the exact antonym of `выигрыш`, and the pair is why both are carded. ⚠️ A SECOND sense in music: a проигрыш is the instrumental passage between two verses." },
        { id: "ru-u134l4-zhrebiy", type: "vocab", front: "жребий", reading: "zhrebiy", meaning: "the drawing of lots", accept: ["deciding by chance who goes where", "choosing by pulling a hidden marker", "letting chance decide the order"], example: { jp: "Кто играет первым, решил жребий, и все были согласны.", en: "Who played first was decided by lot, and everyone agreed." }, drill: { jp: "Этот жребий был очень трудный", en: "This draw was very hard" }, hint: "ZHRE-biy — stress on the first syllable. MASCULINE. ⚠️ A high, old word, and it also means FATE: «такой его жребий», such is his lot. The sporting version is `жеребьёвка`, which unit 136 cards, built on the same root." },
        { id: "ru-u134l4-rasklad", type: "vocab", front: "расклад", reading: "rasklad", meaning: "the way the cards have fallen", accept: ["how the hands have come out", "the layout of a deal", "how things stand at this point"], example: { jp: "Расклад был совсем плохой, и он сразу всё понял.", en: "The way the cards had fallen was quite bad, and he understood everything at once." }, drill: { jp: "Этот расклад совсем плохой", en: "This layout of cards is quite bad" }, hint: "ras-KLAD — stress on the last syllable, and the д is said as a t. MASCULINE. From класть, to lay, with рас- — the same root as u133l2's `подкладка`. ⚠️ ALIVE FAR OUTSIDE CARDS, and this is how you will mostly hear it: «такой расклад», that's how things are — of politics, money, a plan." },
        { id: "ru-u134l4-blef", type: "vocab", front: "блеф", reading: "blef", meaning: "a bluff", accept: ["pretending to hold more than you do", "acting strong when you are weak", "a show of strength that is empty"], example: { jp: "Это был блеф, и все за столом это знали.", en: "It was a bluff, and everyone at the table knew it." }, drill: { jp: "Этот блеф был очень сильный", en: "This bluff was very strong" }, hint: "BLEF — one syllable. MASCULINE. An English loan taken whole. ⚠️ Standard in Russian political writing, not only at cards: «это чистый блеф», that is pure bluff. The verb is блефовать." },
        { id: "ru-u134l4-podvokh", type: "vocab", front: "подвох", reading: "podvokh", meaning: "a hidden catch", accept: ["a trap hidden in something that looks fair", "the trick inside an offer", "something sly you are not told about"], example: { jp: "В этой игре есть подвох, и новые люди его не видят.", en: "There is a catch in this game, and new people do not see it." }, drill: { jp: "Этот подвох очень трудный", en: "This catch is very hard to spot" }, hint: "pad-VOKH — stress on the last syllable, and the о reduces to a. MASCULINE. ⚠️ `обман` (unit 56) is an outright deception; a подвох is the SLY BIT hidden inside something that looks honest — a question, a deal, a rule. «Тут какой-то подвох» is the standard way to say something smells wrong." },
      ],
    },
  ],
};
