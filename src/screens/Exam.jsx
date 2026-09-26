import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PhaseShell from "../components/PhaseShell.jsx";
import CardBreath from "../components/CardBreath.jsx";
import CardStage from "../components/games/CardStage.jsx";
import { useStore } from "../store/useStore.js";
import { buildExamSandbox } from "../store/dev.js";
import { examPaper, scoreExam, paperKeyFor, EXAM_PASS_PCT, EXAM_POOL_MAX } from "../store/exams.js";
import { langName } from "../data/languages.js";
import { C, F } from "../theme.js";

// Band exam / checkpoint runner. See docs/shipped/BUILD-BRIEF-exams.md.
//
// THE NON-NEGOTIABLE, and it changed shape on 2026-09-25 (Alex: "the exams should
// be helping the user build"). It used to be "an exam writes NOTHING". It is now
// ASYMMETRIC, which is strictly stronger for the learner and no weaker as a
// guarantee:
//
//   * a CORRECT answer is credited — twenty successful retrievals is real practice
//     and the sandboxed version threw all of it away;
//   * a WRONG answer writes NOTHING AT ALL. No rung drop, no interval reset, no
//     lapse, no mistake-log penalty, no record of the miss;
//   * so AN EXAM CAN ONLY EVER MOVE AN ITEM FORWARD. One bad day — tired, anxious,
//     on a train — still costs exactly zero.
//
// How that is built, and why it is structural rather than a promise:
//
//   * the deck the CARDS read is still a THROWAWAY map (buildExamSandbox), never
//     the store's items, so nothing a card mutates can reach real progress;
//   * completeReviews / rollDailyGoal are still no-op'd (runnerWriters(true, …)) —
//     an exam is not a review session and must not close the day's duty;
//   * the ONLY writers in the whole flow are `creditExamAnswer` (asymmetric, and
//     the asymmetry lives in the store, not here) and `recordExam` at the end.
//
// tests/unit/exams.test.mjs pins it with three assertions: an all-wrong run leaves
// `items` byte-identical, a correct answer can only move an item forward, and no
// mix of answers can lower anything.
//
// No timer anywhere. No streak, no XP, no "you beat your best". Leaving mid-exam
// records nothing at all, and taking it again is free and unlimited.

// How many "not yet tested" topics to name before summarising the rest — a band
// can hold a hundred units and a wall of them is the opposite of reassuring.
const UNTESTED_SHOWN = 4;

// How many lessons to offer as "go back to these" before summarising the rest. Alex's
// ask was "review x section(s) x lesson(s)" — but a learner who missed eight questions
// across eight lessons must be handed a next step, not a homework list. Four is the
// short list; the remainder is counted, never enumerated.
const LESSONS_SHOWN = 4;

function Panel({ title, tone, children }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 16, padding: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: tone ?? C.inkSoft, marginBottom: 6, letterSpacing: 0.2 }}>
        {title}
      </div>
      <div style={{ fontSize: 14, color: C.ink, lineHeight: 1.5 }}>{children}</div>
    </div>
  );
}

const joinTopics = (list) => (list.length ? list.join(" · ") : "—");

// A tappable lesson. This is the actionable half of Alex's ask: a unit TITLE is a
// label, a lesson is somewhere you can go. Every band a learner is being examined on
// is already learned, so these are ordinary navigation — nothing is unlocked here.
function LessonChip({ lesson, onGo }) {
  return (
    <button
      data-testid={`go-lesson-${lesson.id}`}
      onClick={() => onGo(lesson.id)}
      style={{
        padding: "5px 10px", borderRadius: 999, border: `1px solid ${C.line}`,
        background: "transparent", color: C.ai, cursor: "pointer",
        fontSize: 12, fontWeight: 700, fontFamily: F.body, textAlign: "left",
      }}
    >
      {lesson.label ? `${lesson.label} · ` : ""}{lesson.title} →
    </button>
  );
}

export default function Exam() {
  const navigate = useNavigate();
  const { examId: id } = useParams();

  const profile = useStore((s) => s.profile);
  const exams = useStore((s) => s.exams);
  const realItems = useStore((s) => s.items);
  const recordExam = useStore((s) => s.recordExam);
  const queuePractice = useStore((s) => s.queuePractice);
  // D6. The pool a CHECKPOINT fills and a BAND EXAM draws from. Read once for the
  // paper; `recordCheckpointMiss` is the only writer and only a checkpoint calls it.
  const missedPool = useStore((s) => s.missedPool);
  const recordCheckpointMiss = useStore((s) => s.recordCheckpointMiss);

  // THE ONLY PER-ANSWER WRITER THIS RUNNER HAS, and the isolation is now structural
  // in the strongest available sense: the session writers (`gradeItem`,
  // `completeReviews`, `rollDailyGoal`) are not imported at all, so this file cannot
  // call them even by accident — an exam is not a review session and must never
  // close the day's review duty or roll the daily goal. `runnerWriters(true, …)`
  // is no longer needed here; there is nothing left to no-op.
  //
  // `creditExamAnswer` is asymmetric by construction (store/useStore.js): a correct
  // answer credits the item forward, a wrong one writes nothing at all.
  const creditExamAnswer = useStore((s) => s.creditExamAnswer);

  // The throwaway deck the cards read from. Real content, zero progress, and not
  // the store's map — so nothing a card does here can reach a real item.
  const items = useMemo(() => buildExamSandbox(), []);

  // Deterministic per (learner, exam, attempt): a reload mid-exam resumes the SAME
  // paper, because both seed terms only move when a run has finished.
  // `missedPool` is read at BUILD TIME and deliberately not a dep: the paper must not
  // rebuild underneath the learner when an answer mid-run empties the pool.
  const paper = useMemo(() => {
    const key = paperKeyFor(exams, id, profile?.displayName ?? "");
    return examPaper(id, { ...key, missedPool });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const [started, setStarted] = useState(false);
  const [idx, setIdx] = useState(0);
  const [grades, setGrades] = useState({});
  const [result, setResult] = useState(null);
  const [practiceQueued, setPracticeQueued] = useState(false);

  const home = "/ladder";

  if (!paper || paper.steps.length === 0) {
    return (
      <PhaseShell title="Check" progress={1} onClose={() => navigate(home)}>
        <div style={{ margin: "auto", textAlign: "center", color: C.inkSoft, maxWidth: 320 }}>
          There isn't enough content for this check yet. Nothing has changed.
          <br />
          <button
            onClick={() => navigate(home)}
            style={{ marginTop: 16, padding: "12px 24px", borderRadius: 12, border: "none", background: C.ai, color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
          >
            Back to the Ladder
          </button>
        </div>
      </PhaseShell>
    );
  }

  const isExam = paper.kind === "exam";
  const isCheckpoint = paper.kind === "checkpoint";
  const title = isExam
    ? `${paper.band} check`
    : isCheckpoint
      ? `Checkpoint · units ${paper.from}–${paper.to}`
      : `${paper.band}½ check`;
  const langLabel = langName(paper.lang) ?? paper.lang;

  // --- the calm intro -------------------------------------------------------
  // What this is, and — far more important for an ND learner about to be tested —
  // what it CANNOT do to them. Said before the first card, not after the last.
  if (!started) {
    return (
      <PhaseShell title={title} progress={0} onClose={() => navigate(home)}>
        <div style={{ margin: "auto", display: "flex", flexDirection: "column", gap: 14, maxWidth: 380 }}>
          <div style={{ fontFamily: F.disp, fontSize: 24, fontWeight: 700, textAlign: "center" }}>
            {langLabel} · {title}
          </div>
          <Panel title="WHAT THIS IS">
            {isExam ? (
              <>
                {paper.steps.length} questions drawn from everything up to {paper.band}. Pass at{" "}
                {EXAM_PASS_PCT}% and {paper.band} shows as <strong>verified</strong>.
              </>
            ) : isCheckpoint ? (
              <>
                {paper.steps.length} quick questions — {paper.steps.length - paper.olderActual} from units{" "}
                {paper.from}–{paper.to}
                {paper.olderActual > 0 ? (
                  <>
                    , and {paper.olderActual} from <strong>earlier on</strong>, so it checks what stuck and
                    not just what you've just done
                  </>
                ) : (
                  <> (there's nothing earlier than this yet, so all {paper.steps.length} are from here)</>
                )}
                . <strong>No pass mark at all.</strong>
              </>
            ) : (
              <>
                {paper.steps.length} questions from around the halfway point between {paper.band} and
                the next band. This is a mirror, not a test — there is <strong>no pass mark at all</strong>.
              </>
            )}
          </Panel>
          {/* HONEST, and it has to stay honest: since 2026-09-25 a right answer DOES
              count. The guarantee is one-directional, not absent, so the copy says
              that in the learner's words rather than promising "nothing changes". */}
          <Panel title="WHAT IT CANNOT DO" tone={C.matcha}>
            <strong>This can't set you back.</strong> Getting one right counts as real practice, exactly
            like a review. Getting one wrong is recorded <strong>nowhere</strong> — no rung drops, your
            review dates don't move, nothing is held against you
            {isExam ? ", including if you don't pass" : ""}.
            {/* HONEST ABOUT THE POOL (D6). A checkpoint now remembers WHICH WORDS were
                missed so a later band check can ask them again a different way. That
                is not a score and it is not held against anyone — but it IS something
                being kept, so the copy says so rather than claiming "nothing is
                saved but the date", which stopped being true on 2026-09-26. */}
            {isExam ? (
              <> Up to {EXAM_POOL_MAX} of these can be words you missed at a checkpoint — asked a
              different way, never the same question twice.</>
            ) : (
              <> No score is saved — just the date, plus <strong>which words</strong> you missed, so a
              later check can come back to them a different way.</>
            )}{" "}
            There's no timer, you can leave at any point, and you can take it again as often as you
            like.
          </Panel>
          <button
            data-testid="exam-begin"
            onClick={() => setStarted(true)}
            style={{ padding: "14px 28px", borderRadius: 14, border: "none", background: C.ai, color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
          >
            Begin
          </button>
        </div>
      </PhaseShell>
    );
  }

  // --- the result -----------------------------------------------------------
  if (result) {
    // D3: the percentage is shown ONLY on a pass. When the answer is "keep going"
    // the number adds nothing the breakdown doesn't, and it is the part that stings.
    const showPct = result.passed === true;
    const headline = !isExam
      ? "Where you are right now"
      : result.passed
        ? `${paper.band} verified`
        : `${paper.band} — not yet verified`;
    const untestedLabel =
      result.untested.length > UNTESTED_SHOWN
        ? `${result.untested.slice(0, UNTESTED_SHOWN).join(" · ")} · and ${result.untested.length - UNTESTED_SHOWN} more`
        : joinTopics(result.untested);
    // Only items the learner has actually been taught can be practised; an untaught
    // word is a lesson's job. Checked against the REAL deck, not the sandbox.
    const practicable = result.shakyIds.filter((sid) => (realItems[sid]?.rung ?? 0) >= 1);

    // WHERE TO GO BACK TO (D6). Present on a PASS as well as a fail — Alex asked about
    // failing, but a 90% pass with two shaky items should still say which two. Capped
    // at LESSONS_SHOWN so a rough run hands over a next step, not a homework list.
    const areas = result.shakyAreas ?? [];
    const allLessons = areas.flatMap((a) => a.lessons.map((l) => ({ ...l, unitTitle: a.unitTitle })));
    const shownLessons = allLessons.slice(0, LESSONS_SHOWN);
    const hiddenLessons = allLessons.length - shownLessons.length;
    const goToLesson = (lessonId) => navigate(`/lesson/${lessonId}`);

    return (
      <PhaseShell title={title} progress={1}>
        <div style={{ margin: "auto", display: "flex", flexDirection: "column", gap: 12, maxWidth: 380, width: "100%" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: F.disp, fontSize: 24, fontWeight: 700 }} data-testid="exam-headline">
              {headline}
            </div>
            <div style={{ fontSize: 13, color: C.inkSoft, marginTop: 4 }}>
              {langLabel}
              {showPct ? ` · ${result.pct}%` : ""}
            </div>
          </div>

          <Panel title="YOU'RE SOLID ON" tone={C.matcha}>{joinTopics(result.solid)}</Panel>

          {/* NO SHAME COPY. "Go back to these", never "you failed" — the learner is
              being pointed at work, not graded. Section AND lesson, because a unit
              title on its own is something you can read and not somewhere you can go. */}
          {areas.length > 0 ? (
            <Panel title="GO BACK TO THESE" tone={C.ai}>
              <div data-testid="exam-goback" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {areas.map((a) => (
                  <div key={a.unitId}>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{a.unitTitle}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {a.lessons
                        .filter((l) => shownLessons.some((sl) => sl.id === l.id))
                        .map((l) => (
                          <LessonChip key={l.id} lesson={l} onGo={goToLesson} />
                        ))}
                    </div>
                  </div>
                ))}
                {hiddenLessons > 0 && (
                  <div style={{ fontSize: 12, color: C.inkSoft }}>
                    …and {hiddenLessons} more lesson{hiddenLessons === 1 ? "" : "s"}. Start with these — the
                    rest will still be there.
                  </div>
                )}
              </div>
            </Panel>
          ) : (
            <Panel title="SHAKY ON" tone={C.ai}>{joinTopics(result.shaky)}</Panel>
          )}
          <Panel title="NOT YET TESTED">{untestedLabel}</Panel>

          <div style={{ fontSize: 12, color: C.inkSoft, textAlign: "center" }} data-testid="exam-no-effect">
            {result.correct > 0
              ? `The ${result.correct} you got right counted as practice. Nothing you missed was held against you.`
              : "Nothing you missed was held against you — your progress is exactly as you left it."}
            {isExam ? "" : " Only the date was saved."}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {/* TWO DISTINCT ACTIONS, and they answer different questions:
                  "Review these lessons" — go back and be TAUGHT it again (the lesson);
                  "Practice the words"   — drill the exact words missed (the SRS queue).
                Alex asked for the first; the second is the one that already existed and
                is kept, because a learner who only needs the words shouldn't have to
                sit through a whole lesson to get them. */}
            {shownLessons.length > 0 && (
              <button
                data-testid="exam-review-lessons"
                onClick={() => goToLesson(shownLessons[0].id)}
                style={{ padding: "14px 24px", borderRadius: 14, border: "none", background: C.ai, color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
              >
                Review {shownLessons.length === 1 ? "this lesson" : "these lessons"}
              </button>
            )}
            {practicable.length > 0 && (
              <button
                data-testid="exam-practice"
                onClick={() => {
                  // The one real write in this flow, and only on a deliberate tap:
                  // this seeds an ORDINARY study session, which does move SRS —
                  // because that is real study, not an exam.
                  queuePractice(practicable);
                  setPracticeQueued(true);
                  navigate("/review?fix=1");
                }}
                disabled={practiceQueued}
                style={{ padding: "14px 24px", borderRadius: 14, border: `1px solid ${C.ai}`, background: "transparent", color: C.ai, fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
              >
                Practice the words
              </button>
            )}
            <button
              data-testid="exam-done"
              onClick={() => navigate(home)}
              style={{ padding: "14px 24px", borderRadius: 14, border: `1px solid ${C.line}`, background: "transparent", color: C.inkSoft, fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
            >
              Done
            </button>
          </div>
        </div>
      </PhaseShell>
    );
  }

  // --- the run --------------------------------------------------------------
  const step = paper.steps[idx];
  const item = items[step.id];

  const onGraded = (grade) => {
    // THE ONE PER-ANSWER WRITE, and it is asymmetric in the store: a correct answer
    // credits the item forward, a wrong one writes nothing at all. See the header.
    creditExamAnswer(step.id, grade, step.kindKey);
    // D6. A CHECKPOINT remembers what was missed, and only a checkpoint does: it is
    // the "where am I right now" touchpoint, and the band exam is the thing that
    // spends the pool. Still no score — the item id and the card kind, nothing else,
    // and a correct answer anywhere later removes it again (see the store).
    if (isCheckpoint && grade === "again") recordCheckpointMiss(step.id, step.kindKey, paper.lang);
    const next = { ...grades, [step.id]: grade };
    setGrades(next);
    if (idx + 1 >= paper.steps.length) {
      const scored = scoreExam(paper, next);
      setResult(scored);
      // Outcome only. A check stores a date and nothing else (D3); a band exam
      // keeps the best result, which can only ever go up.
      recordExam(id, { pct: scored.pct });
    } else {
      setIdx((i) => i + 1);
    }
  };

  return (
    <PhaseShell
      title={`${title} · ${idx + 1}/${paper.steps.length}`}
      progress={idx / paper.steps.length}
      onClose={() => navigate(home)}
    >
      <CardBreath key={`x${idx}`}>
        <CardStage step={step} item={item} items={items} onGraded={onGraded} />
      </CardBreath>
    </PhaseShell>
  );
}
