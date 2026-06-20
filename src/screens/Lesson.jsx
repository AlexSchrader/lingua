import { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PhaseShell from "../components/PhaseShell.jsx";
import TeachCard from "../components/games/TeachCard.jsx";
import ChoiceCard from "../components/games/ChoiceCard.jsx";
import TypeCard from "../components/games/TypeCard.jsx";
import BuildCard from "../components/games/BuildCard.jsx";
import { useStore } from "../store/useStore.js";
import { getLesson } from "../data/index.js";
import { C, F } from "../theme.js";

// Pick the review card for an item from its mastery rung — the ladder doing its
// job. New (rung 0) items are taught, not tested; that's handled separately.
//   RECOGNIZED (1) → multiple choice
//   RECALLED   (2) → type the meaning (kana: type the rōmaji)
//   PRODUCED+  (3+) → produce the Japanese (vocab: build; kana: type)
function reviewStepFor(item) {
  const rung = item.rung ?? 1;
  if (rung <= 1) return { kind: "choice" };
  if (rung === 2) return { kind: "type", mode: "meaning" };
  return item.type === "vocab" ? { kind: "build" } : { kind: "type", mode: "produce" };
}

// The daily session runner. It plays, in order:
//   1. REVIEW — every due item, app-judged (computes grade → SRS + rung).
//   2. LEARN  — the lesson's fresh items, taught (Teach card, no grading).
// Finishing calls completeReviews + completeLesson + rollDailyGoal, then returns
// to Today with the loop visibly satisfied.
export default function Lesson() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const items = useStore((s) => s.items);
  const dueItems = useStore((s) => s.dueItems);
  const gradeItem = useStore((s) => s.gradeItem);
  const completeReviews = useStore((s) => s.completeReviews);
  const completeLesson = useStore((s) => s.completeLesson);
  const rollDailyGoal = useStore((s) => s.rollDailyGoal);

  const lesson = useMemo(() => getLesson(lessonId), [lessonId]);

  // Snapshot the session queue once on mount so grading (which mutates due/rung)
  // doesn't reshuffle the steps mid-session.
  const steps = useMemo(() => {
    // Reviews first (clear the debt), then teach new material.
    const reviewQueue = dueItems().map((it) => ({
      ...reviewStepFor(it),
      phase: "review",
      id: it.id,
    }));
    const lessonItems = (lesson?.items ?? [])
      .map((def) => items[def.id])
      .filter(Boolean);
    const fresh = lessonItems.filter((it) => (it.rung ?? 0) < 1);
    const learnQueue = fresh.map((it) => ({ kind: "teach", phase: "learn", id: it.id }));
    return [...reviewQueue, ...learnQueue];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  const reviewCount = useMemo(() => steps.filter((s) => s.phase === "review").length, [steps]);

  const [idx, setIdx] = useState(0);
  const [reviewsDone, setReviewsDone] = useState(false);
  const [finished, setFinished] = useState(false);

  // Fire completeReviews exactly once, when we've stepped past every review card
  // (immediately if there were none).
  useEffect(() => {
    if (!reviewsDone && idx >= reviewCount) {
      completeReviews();
      setReviewsDone(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, reviewCount, reviewsDone]);

  const total = steps.length;
  const progress = total === 0 ? 1 : Math.min(idx, total) / total;
  const done = idx >= total;

  // Auto-finish once we've stepped past the last card. Guarded so it's a no-op
  // when the lesson id is unknown. Kept above any early return to satisfy the
  // Rules of Hooks (hooks must run in the same order every render).
  useEffect(() => {
    if (lesson && done && !finished) {
      completeReviews();
      completeLesson(lessonId);
      rollDailyGoal();
      setFinished(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done, lesson]);

  if (!lesson) {
    return (
      <PhaseShell title="Lesson" progress={0} onClose={() => navigate("/")}>
        <div style={{ margin: "auto", color: C.inkSoft }}>Lesson not found.</div>
      </PhaseShell>
    );
  }

  const advance = () => setIdx((i) => i + 1);

  const onGrade = (id, grade) => {
    gradeItem(id, grade);
    advance();
  };

  if (finished || done) {
    return (
      <PhaseShell title={lesson.title} progress={1}>
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
          <div style={{ fontSize: 56 }}>🎉</div>
          <div style={{ fontFamily: F.disp, fontSize: 24, fontWeight: 700 }}>Session complete</div>
          <div style={{ color: C.inkSoft, maxWidth: 280 }}>
            Reviews cleared and {lesson.title} learned. New items are due tomorrow.
          </div>
          <button
            onClick={() => navigate("/")}
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
            Back to Today
          </button>
        </div>
      </PhaseShell>
    );
  }

  const step = steps[idx];
  const item = items[step.id];
  const phaseLabel = step.phase === "review" ? "Review" : "Learn";

  return (
    <PhaseShell
      title={`${phaseLabel} · ${idx + 1}/${total}`}
      progress={progress}
      onClose={() => navigate("/")}
    >
      {step.kind === "teach" && <TeachCard item={item} onAdvance={advance} />}
      {step.kind === "choice" && (
        <ChoiceCard item={item} allItems={items} onGraded={(g) => onGrade(item.id, g)} />
      )}
      {step.kind === "type" && (
        <TypeCard item={item} mode={step.mode} onGraded={(g) => onGrade(item.id, g)} />
      )}
      {step.kind === "build" && <BuildCard item={item} onGraded={(g) => onGrade(item.id, g)} />}
    </PhaseShell>
  );
}
