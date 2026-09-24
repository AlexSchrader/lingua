import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PhaseShell from "../components/PhaseShell.jsx";
import CardBreath from "../components/CardBreath.jsx";
import CardStage from "../components/games/CardStage.jsx";
import { useStore } from "../store/useStore.js";
import { buildExamSandbox, runnerWriters } from "../store/dev.js";
import { examPaper, scoreExam, paperKeyFor, EXAM_PASS_PCT } from "../store/exams.js";
import { langName } from "../data/languages.js";
import { C, F } from "../theme.js";

// Band exam / half-band check runner. See docs/shipped/BUILD-BRIEF-exams.md.
//
// THE NON-NEGOTIABLE, and the reason this file is short: an exam must NEVER write
// SRS state or a mastery rung. One bad day — tired, anxious, on a train — would
// otherwise rewrite weeks of scheduling and push a pile of items back down the
// rungs, which is the exact anti-pattern this app exists to avoid. So:
//
//   * the deck is a THROWAWAY map (buildExamSandbox), never the store's items;
//   * every store writer is swapped for a no-op (runnerWriters(true, …));
//   * the ONLY store write in the whole flow is recordExam, at the very end, and
//     it records an outcome — never an item, never a schedule.
//
// tests/unit/exams.test.mjs pins that by running a full paper and asserting the
// real items map is byte-identical afterwards.
//
// No timer anywhere. No streak, no XP, no "you beat your best". Leaving mid-exam
// records nothing at all, and taking it again is free and unlimited.

// How many "not yet tested" topics to name before summarising the rest — a band
// can hold a hundred units and a wall of them is the opposite of reassuring.
const UNTESTED_SHOWN = 4;

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

export default function Exam() {
  const navigate = useNavigate();
  const { examId: id } = useParams();

  const profile = useStore((s) => s.profile);
  const exams = useStore((s) => s.exams);
  const realItems = useStore((s) => s.items);
  const recordExam = useStore((s) => s.recordExam);
  const queuePractice = useStore((s) => s.queuePractice);

  // EVERY runner writer is a no-op, wired exactly as Review.jsx wires its sandbox
  // runs — `runnerWriters(true, …)` is the isolation contract, asserted in
  // tests/unit/dev.test.mjs. The grade below is genuinely handed to `gradeItem`,
  // and `gradeItem` is genuinely NOOP: the isolation is structural, not a promise
  // that some future edit could quietly break by adding a call.
  const realWriters = {
    gradeItem: useStore((s) => s.gradeItem),
    completeReviews: useStore((s) => s.completeReviews),
    rollDailyGoal: useStore((s) => s.rollDailyGoal),
  };
  const { gradeItem } = runnerWriters(true, realWriters);

  // The throwaway deck the cards read from. Real content, zero progress, and not
  // the store's map — so nothing a card does here can reach a real item.
  const items = useMemo(() => buildExamSandbox(), []);

  // Deterministic per (learner, exam, attempt): a reload mid-exam resumes the SAME
  // paper, because both seed terms only move when a run has finished.
  const paper = useMemo(() => {
    const key = paperKeyFor(exams, id, profile?.displayName ?? "");
    return examPaper(id, key);
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
  const title = isExam ? `${paper.band} check` : `${paper.band}½ check`;
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
            ) : (
              <>
                {paper.steps.length} questions from around the halfway point between {paper.band} and
                the next band. This is a mirror, not a test — there is <strong>no pass mark at all</strong>.
              </>
            )}
          </Panel>
          <Panel title="WHAT IT CANNOT DO" tone={C.matcha}>
            Nothing here touches your progress. Your review schedule, your mastery bars and your
            rungs are untouched whatever happens — {isExam ? "including if you don't pass" : "and no result is saved"}.
            There's no timer, you can leave at any point, and you can take it again as often as you like.
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
          <Panel title="SHAKY ON" tone={C.ai}>{joinTopics(result.shaky)}</Panel>
          <Panel title="NOT YET TESTED">{untestedLabel}</Panel>

          <div style={{ fontSize: 12, color: C.inkSoft, textAlign: "center" }} data-testid="exam-no-effect">
            {isExam
              ? "Your progress, rungs and review schedule are exactly as you left them."
              : "Nothing was recorded but today's date. Your progress is exactly as you left it."}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
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
                style={{ padding: "14px 24px", borderRadius: 14, border: "none", background: C.ai, color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
              >
                Practice the shaky ones
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
    gradeItem(step.id, grade, step.kindKey); // NOOP by construction — see above
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
