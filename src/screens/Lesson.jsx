import { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import PhaseShell from "../components/PhaseShell.jsx";
import TeachCard from "../components/games/TeachCard.jsx";
import ChoiceCard from "../components/games/ChoiceCard.jsx";
import TypeCard from "../components/games/TypeCard.jsx";
import BuildCard from "../components/games/BuildCard.jsx";
import TraceCard from "../components/games/TraceCard.jsx";
import SpeakCard from "../components/games/SpeakCard.jsx";
import CardBreath from "../components/CardBreath.jsx";
import Celebration from "../components/Celebration.jsx";
import Mascot from "../components/Mascot.jsx";
import { useStore } from "../store/useStore.js";
import { getLesson, UNITS } from "../data/index.js";
import { LIVE_CARD_KINDS } from "../data/contract.js";
import { initLearn, currentStep, answerStep, LEARN_OPTS } from "../store/learnQueue.js";
import { isTraceable, isGlyph, hasAudio, lessonChecks } from "../store/cardRouting.js";
import { buildSandboxItems, runnerWriters } from "../store/dev.js";
import { C, F } from "../theme.js";

function assertLiveKind(kindKey) {
  if (!LIVE_CARD_KINDS.includes(kindKey)) {
    throw new Error(
      `Lesson runner routed unlisted card kind "${kindKey}". ` +
        `Add it to LIVE_CARD_KINDS in src/data/contract.js first.`
    );
  }
}

// The recall (check2) card for an item in its learning steps.
function recallMode() {
  return "meaning";
}

// If completing `lessonId` finished the LAST lesson of its unit AND a real next
// unit exists for the same language, return that (now-unlocked) unit — the moment
// the panda celebrates a unit boundary. Content-agnostic (reads the UNITS shape);
// skips locked/empty stub units so we never celebrate a placeholder.
function unitUnlockedBy(lessonId, items) {
  const ui = UNITS.findIndex((u) => u.lessons?.some((l) => l.id === lessonId));
  if (ui < 0) return null;
  const unit = UNITS[ui];
  const last = unit.lessons[unit.lessons.length - 1];
  if (last?.id !== lessonId) return null; // not the unit's final lesson
  // Only a genuinely COMPLETE unit unlocks the next one — every item across the
  // unit must be learned (rung >= 1). Without this, a "?few" micro-session that
  // leaves items behind, or simply re-opening the finished last lesson, would
  // falsely celebrate "Unit complete!". (Skipped in sandbox, where items is null.)
  if (items) {
    const unitItemIds = unit.lessons.flatMap((l) => (l.items ?? []).map((d) => d.id));
    const allLearned = unitItemIds.every((id) => (items[id]?.rung ?? 0) >= 1);
    if (!allLearned) return null;
  }
  return UNITS.slice(ui + 1).find((u) => u.lang === unit.lang && !u.locked && u.lessons?.length) ?? null;
}

// Lesson-only session runner: teaches fresh items from the current lesson,
// then runs interleaved recognition + recall checks until each item graduates.
// Reviews are a separate session (/review). Separated so new and old content
// never mix — you learn a full row of kana, then its vocab; no old material
// interrupts first exposure.
export default function Lesson() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Sandbox (Dev Mode) run: read from a throwaway in-memory items map and route
  // every store writer to a no-op, so launching a lesson from the dev panel never
  // touches real FSRS/mastery/streak/persistence. Isolation is explicit here.
  const sandbox = searchParams.get("sandbox") === "1";
  const home = sandbox ? "/dev" : "/";

  const storeItems = useStore((s) => s.items);
  const sandboxItems = useMemo(
    () => (sandbox ? buildSandboxItems(lessonId, searchParams.get("state") ?? "fresh") : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sandbox, lessonId]
  );
  const items = sandbox ? sandboxItems : storeItems;

  const realWriters = {
    graduateItem: useStore((s) => s.graduateItem),
    completeLesson: useStore((s) => s.completeLesson),
    rollDailyGoal: useStore((s) => s.rollDailyGoal),
  };
  const { graduateItem, completeLesson, rollDailyGoal } = runnerWriters(sandbox, realWriters);

  const lesson = useMemo(
    () => getLesson(lessonId),
    [lessonId, sandbox]
  );

  // Authored order is preserved: kana rows come before vocab in each lesson file,
  // so buildLearnQueue (teaches-first) guarantees kana are introduced before vocab.
  // "Just a few" micro-session: ?few=N caps how many NEW items this run teaches,
  // so a tired day can be 3 items instead of a full lesson. The rest stay rung 0
  // and surface next time — micro-sessions chip away at the lesson.
  const few = parseInt(searchParams.get("few") ?? "", 10);
  const freshIds = useMemo(() => {
    const lessonItems = (lesson?.items ?? []).map((def) => items[def.id]).filter(Boolean);
    const fresh = lessonItems.filter((it) => (it.rung ?? 0) < 1).map((it) => it.id);
    return Number.isFinite(few) && few > 0 ? fresh.slice(0, few) : fresh;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  // A LETTER runs three checks, not two. Alex's unit-1 standard is "listen, speak
  // and type the accent" - hear it, say it, then find it on your keyboard - and
  // two check slots cannot hold three behaviours. Type-level, so the engine stays
  // content-agnostic; every non-glyph item is untouched.
  // A LETTER runs more checks than a word, and a letter you DRAW runs more than a
  // letter you only type. Alex, 2026-09-16: "Ja check 3 is type and check 4 is say
  // it - ja has more cuz of trace, just like Mandarin and Hindi will have."
  //
  //   drawn letter (kana, kanji; later Mandarin, Hindi)  4: hear, TRACE, type, say
  //   typed letter (é, ñ, ß, ä, ø)                       3: hear, say, type
  //   word, unit 2 and later                             3: see, type, SAY
  //   word, unit 1                                       2: see, type
  //
  // Split on whether the script is DRAWN, not on which language it is, so a new
  // drawn script gets the four-check shape the day its stroke data lands.
  //
  // A WORD gets a speaking check too - Alex, 2026-09-16: "vocab should have
  // speaking as well but that can be introduced [later] ... after unit 1." Unit 1
  // is the first thing a learner ever touches and is already the heaviest (its
  // letters run three or four checks each); asking them to talk to the app in the
  // same sitting is a lot. From unit 2 the letters are behind them, so the third
  // slot is free. Needs a clip to imitate - without one there is nothing to say
  // back, so those words stay at two.
  //
  // KANJI ARE THE TRAP HERE. `isGlyph` is kana||glyph and a kanji is NEITHER, so
  // asking it first sent all 792 kanji items down the WORD path and handed every
  // one of them a speak card. gradeSpoken folds the transcript against the FRONT
  // (一), so a learner who says いち perfectly scores `again` - a confidently
  // wrong grade, which answer.js itself calls worse than no grade. So the drawn
  // question is asked FIRST, and a kanji keeps exactly the shape it had before
  // this ladder existed: hear it, then trace it. Extending the ladder to kanji
  // needs gradeSpoken to judge a kanji front, which it cannot yet.
  const checksFor = (id) => lessonChecks(items[id]);
  const [learn, setLearn] = useState(() => initLearn(freshIds, LEARN_OPTS, checksFor));
  const [finished, setFinished] = useState(false);
  // A one-screen "calm breath" before card 1 — what this lesson is, how much, how
  // long — so a new learner isn't dropped cold onto a glyph. One tap to Begin.
  const [started, setStarted] = useState(false);

  const learnStep = currentStep(learn);
  const done = learnStep === null;

  useEffect(() => {
    // Only complete the lesson when it actually had new items to teach. Opening
    // an already-finished lesson yields freshIds=[] → empty queue → done=true on
    // first render; without this guard that would fire completeLesson + the
    // cascade + a streak roll for zero work. The "Nothing new" screen still shows.
    if (lesson && done && !finished && freshIds.length > 0) {
      completeLesson(lessonId);
      rollDailyGoal();
      setFinished(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done, lesson]);

  if (!lesson) {
    return (
      <PhaseShell title="Lesson" progress={0} onClose={() => navigate(home)}>
        <div style={{ margin: "auto", color: C.inkSoft }}>Lesson not found.</div>
      </PhaseShell>
    );
  }

  const total = learn.queue.length;
  const progress = total === 0 ? 1 : Math.min(learn.pos, total) / total;

  if (finished || done) {
    const learned = freshIds.length;
    // Finishing a unit's last lesson unlocks the next unit — a bigger, meaningful
    // moment, so the panda plays its "unit unlock" reaction (falls back to the
    // proud still until the clip exists). Never in a dev-sandbox run.
    const unlockedUnit = sandbox ? null : unitUnlockedBy(lessonId, items);
    return (
      <PhaseShell title={lesson.title} progress={1}>
        <Celebration />
        <div
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            textAlign: "center",
          }}
        >
          <Mascot context={unlockedUnit ? "unitUnlock" : "lessonComplete"} size={150} />
          <div style={{ fontFamily: F.disp, fontSize: 24, fontWeight: 700 }}>
            {unlockedUnit ? "Unit complete!" : "Lesson complete"}
          </div>
          <div style={{ color: C.inkSoft, maxWidth: 300 }}>
            {unlockedUnit
              ? "You've finished this unit — a new one is unlocked. New material is waiting whenever you're ready."
              : learned > 0
              ? `Nice — you learned ${learned} new item${learned === 1 ? "" : "s"}. They'll come back for review in a few days.`
              : "Nothing new in this lesson right now."}
          </div>
          <button
            data-testid="back-to-today"
            onClick={() => navigate(home)}
            style={{
              marginTop: 8,
              padding: "14px 28px",
              borderRadius: 14,
              border: "none",
              background: C.ai,
              color: "#fff",
              fontSize: 16,
              fontWeight: 700,
              fontFamily: F.body,
              cursor: "pointer",
            }}
          >
            {sandbox ? "Back to Dev panel" : "Back to Today"}
          </button>
        </div>
      </PhaseShell>
    );
  }

  // Intro screen — the calm breath before card 1. Only when there's new material
  // (freshIds>0, else `done` already showed the complete screen) and not yet begun.
  // Skipped in sandbox (dev card previews go straight to the card being previewed).
  if (!started && !sandbox) {
    const estMin = Math.max(1, Math.ceil(freshIds.length * 0.75));
    return (
      <PhaseShell title={lesson.title} progress={0} onClose={() => navigate(home)}>
        <div style={{ margin: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center", maxWidth: 340 }}>
          <Mascot context="greeting" size={110} />
          <div style={{ fontFamily: F.disp, fontSize: 24, fontWeight: 700 }}>{lesson.title}</div>
          {lesson.canDo && <div style={{ fontSize: 15, color: C.ink, lineHeight: 1.4 }}>{lesson.canDo}</div>}
          <div style={{ fontSize: 13, color: C.inkSoft, fontWeight: 600 }}>
            {freshIds.length} new item{freshIds.length === 1 ? "" : "s"} · ~{estMin} min · no rush
          </div>
          <button
            data-testid="lesson-begin"
            autoFocus
            onClick={() => setStarted(true)}
            style={{ marginTop: 4, padding: "14px 40px", borderRadius: 14, border: "none", background: C.ai, color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
          >
            Begin
          </button>
        </div>
      </PhaseShell>
    );
  }

  // --- handlers ---
  const advanceTeach = () => setLearn((st) => answerStep(st, null).state);
  // Step back one card to recover from an accidental skip (a double-tapped
  // Continue advances pos twice). VISUAL only: it just re-shows the earlier card —
  // it never rewinds a grade. answerStep's `!graduated` guard means re-answering a
  // card that already graduated can't re-fire graduateItem, so SRS/mastery is safe.
  const back = () => setLearn((st) => ({ ...st, pos: Math.max(0, st.pos - 1) }));
  const onCheck = (grade) => {
    const result = { pass: grade !== "again", clean: grade === "good" || grade === "easy" };
    const { state, graduated } = answerStep(learn, result);
    // setLearn BEFORE graduateItem: graduateItem triggers a Zustand useSyncExternalStore
    // notification that forces a synchronous React re-render. Queuing the learn-state
    // update first ensures React picks up pos+1 in that sync render instead of pos.
    setLearn(state);
    if (graduated) graduateItem(graduated.id, graduated.grade);
  };

  // --- current card ---
  const item = items[learnStep.id];
  const k = `l${learn.pos}`;
  let label;
  let card;
  if (learnStep.step === "teach") {
    assertLiveKind("teach");
    label = "Learn";
    card = <TeachCard item={item} onAdvance={advanceTeach} />;
  } else if (learnStep.step === "check1") {
    // A LETTER is asked by EAR, not by sight. Showing the glyph and asking which
    // sound it is makes the glyph its own hint, and the accent - the whole point
    // of the card - is never tested. Dane hit exactly that in French lesson 1.
    // reviewStepFor already routes glyphs ear-first, but a LESSON never calls it:
    // check1 was hardcoded to the sighted ChoiceCard, so the fix did not reach the
    // first thing a new learner sees. audioFirst is the same prop Review passes.
    //
    // A WORD is asked by ear too. Alex, 2026-09-16: "words have hear it as well,
    // idk if that's under see it" - it was not. check1 was the SIGHTED choice for
    // every word, so a lesson never once asked the learner to recognise a word
    // from its sound. Ear-first costs no extra card: the teach screen already
    // showed the spelling, and check2 (type the meaning) shows it again. So a word
    // now runs hear it > see it > type it > say it across its checks, and the
    // "Can't hear it? Show it" escape turns this back into the old sighted card
    // for anyone muted, deaf, or somewhere noisy.
    const earable = hasAudio(item);
    assertLiveKind(earable ? "listen:choice" : "choice");
    label = "Practice";
    card = <ChoiceCard item={item} allItems={items} onGraded={onCheck} audioFirst={earable} />;
  } else if (isGlyph(item) && learnStep.step !== "check1") {
    // THE LETTER LADDER. check1 (hear it) is handled above and is shared with
    // every other item; checks 2-4 are the letter-only rungs.
    label = "Practice";
    const drawn = isTraceable(item);
    if (drawn && learnStep.step === "check2") {
      // DRAW IT. Every character you write — kana AND kanji — is recalled stroke
      // by stroke. Nothing replaces this for a drawn script, which is exactly why
      // a drawn letter gets a FOURTH check rather than giving this slot away.
      // (Yōon digraphs have no single stroke entry, so they are not drawn.)
      assertLiveKind("trace");
      card = <TraceCard item={item} mode="guided" onGraded={onCheck} />;
    } else if (learnStep.step === "check3") {
      // TYPE IT. Produce the character from its sound. On a Latin keyboard that
      // means finding the accent — Alex's point, and the teach card carries the
      // per-device instructions. On a Japanese one it means the kana, and
      // `checkProduce` accepts rōmaji through A1 so no IME is required to start
      // (Alex, 2026-09-16: "type only accepts rōmaji until A2"); from A2 up
      // production means the real script, which is the rule already in answer.js.
      assertLiveKind("type:produce");
      card = <TypeCard item={item} mode="produce" onGraded={onCheck} />;
    } else {
      // SAY IT — check2 on a typed letter, check4 on a drawn one. The rung the app
      // had never run in a lesson: SpeakCard was built and live in LIVE_CARD_KINDS
      // but only reachable from a rung-4 review, which no unit-1 learner has. It
      // plays the letter, arms the mic and grades leniently; no mic or no endpoint
      // degrades to an ungraded "say it" prompt rather than blocking the lesson.
      assertLiveKind("speak");
      card = <SpeakCard item={item} onGraded={onCheck} />;
    }
  } else if (learnStep.step === "check3") {
    // SAY IT — a WORD's third check, from unit 2 on. (A letter's check3 is the
    // typing card, routed in the glyph branch above.)
    assertLiveKind("speak");
    label = "Practice";
    card = <SpeakCard item={item} onGraded={onCheck} />;
  } else if (isTraceable(item)) {
    // A traceable NON-glyph (kanji vocab) still recalls by writing.
    assertLiveKind("trace");
    label = "Practice";
    card = <TraceCard item={item} mode="guided" onGraded={onCheck} />;
  } else {
    const mode = recallMode(item);
    assertLiveKind(`type:${mode}`);
    label = "Practice";
    card = <TypeCard item={item} mode={mode} onGraded={onCheck} />;
  }

  return (
    <PhaseShell
      title={`${sandbox ? "🧪 Dev · " : ""}${label} · card ${Math.min(learn.pos + 1, total)} of ${total}`}
      progress={progress}
      onClose={() => navigate(home)}
      onBack={learn.pos > 0 ? back : undefined}
    >
      {/* Keyed remount per card drives the entrance "breath" (fade + brief
          input guard) so carried taps don't bleed into the next card. */}
      <CardBreath key={k}>{card}</CardBreath>
    </PhaseShell>
  );
}
