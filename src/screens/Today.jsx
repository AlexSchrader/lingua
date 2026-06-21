import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Flame, BookOpen, RotateCcw, Lock, Check } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { UNITS } from "../data/index.js";
import { C, F } from "../theme.js";
import { VERSION } from "../version.js";

function Step({ icon: Icon, n, title, sub, state, onClick }) {
  // state: "active" | "done" | "locked"
  const done = state === "done";
  const locked = state === "locked";
  const tappable = state === "active" && !!onClick;
  const accent = done ? C.matcha : locked ? C.locked : C.ai;
  return (
    <div
      onClick={tappable ? onClick : undefined}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: 14,
        borderRadius: 16,
        background: locked ? C.lockedBg : C.surface,
        border: `1px solid ${locked ? C.lockedBg : C.line}`,
        opacity: locked ? 0.7 : 1,
        cursor: tappable ? "pointer" : "default",
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 12,
          background: done ? C.matcha : locked ? C.locked : C.aiSoft,
          color: done || locked ? "#fff" : C.aiDeep,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {done ? <Check size={20} /> : locked ? <Lock size={18} /> : <Icon size={20} />}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.5, color: accent }}>
          STEP {n}
        </div>
        <div style={{ fontWeight: 600, fontSize: 15 }}>{title}</div>
        <div style={{ fontSize: 13, color: C.inkSoft }}>{sub}</div>
      </div>
    </div>
  );
}

export default function Today() {
  const navigate = useNavigate();
  // Select STABLE refs (raw state + action fns) and derive in useMemo. Zustand
  // v5 dropped selector memoization, so returning a fresh array straight from a
  // selector (e.g. `s.dueItems()`) makes useSyncExternalStore loop and crash the
  // mount. Computing here keeps the snapshot stable.
  const items = useStore((s) => s.items);
  const daily = useStore((s) => s.daily);
  const streak = useStore((s) => s.streak);
  const stats = useStore((s) => s.stats);
  const ja = useStore((s) => s.languages.ja);
  const dueItemsFn = useStore((s) => s.dueItems);
  const reviewsLockedFn = useStore((s) => s.reviewsLocked);
  const devSeedReviews = useStore((s) => s.devSeedReviews);

  const due = useMemo(() => dueItemsFn(), [items, dueItemsFn]);
  const reviewsLocked = useMemo(() => reviewsLockedFn(), [items, daily, reviewsLockedFn]);

  // All lessons across all units that have item content (ordered).
  const allPlayableLessons = useMemo(
    () => UNITS.flatMap((u) => u.lessons.filter((l) => Array.isArray(l.items))),
    []
  );
  // Advance to the first lesson that still has rung-0 items — natural progression
  // without a separate unlock system. null when all lessons are complete.
  const currentLesson = useMemo(
    () =>
      allPlayableLessons.find((l) => l.items.some((def) => (items[def.id]?.rung ?? 0) < 1)) ??
      null,
    [allPlayableLessons, items]
  );

  const lessonNum = currentLesson
    ? allPlayableLessons.indexOf(currentLesson) + 1
    : allPlayableLessons.length;
  const totalLessons = allPlayableLessons.length;
  // How many rung-0 items remain in the current lesson (for the time estimate).
  const newItemCount = useMemo(
    () => (currentLesson?.items ?? []).filter((def) => (items[def.id]?.rung ?? 0) < 1).length,
    [currentLesson, items]
  );
  // Rough estimate: ~45 s per item × 3 cards each ≈ 0.75 min/item.
  const estMinutes = Math.max(1, Math.ceil(newItemCount * 0.75));

  // Dev affordance is shown in dev builds, or on any build when the URL carries
  // ?dev — so it can be triggered on the deployed Vercel preview for playtesting
  // while staying hidden in normal use.
  const devMode = import.meta.env.DEV || new URLSearchParams(location.search).has("dev");

  // No reviews to clear when the queue is empty — treat as already done.
  const reviewState = daily.reviewsCleared || due.length === 0 ? "done" : "active";
  const lessonState = daily.lessonDone ? "done" : reviewsLocked ? "locked" : "active";

  // Is there still new material to learn? (any lesson has rung-0 items.)
  const hasNew = currentLesson !== null;
  // Daily goal is a FLOOR, not a ceiling: meeting it ticks the streak and shows
  // a marker, but never ends the session or caps how much you can do.
  const goalMet = daily.reviewsCleared && daily.lessonDone;

  const start = () => {
    // Fall back to lesson 1 URL for review-only sessions when all content is done.
    const target = currentLesson ?? allPlayableLessons[0] ?? null;
    if (target) navigate(`/lesson/${target.id}`);
  };

  // Continuous CTA — no "done for today" wall. Locked reviews first; then learn
  // as long as there's new material; otherwise you're genuinely caught up until
  // FSRS surfaces the next review (not a cap).
  let ctaLabel;
  let ctaDisabled = false;
  if (reviewsLocked) ctaLabel = "Start reviews";
  else if (hasNew) ctaLabel = goalMet ? "Keep learning" : "Start lesson";
  else {
    ctaLabel = "All caught up";
    ctaDisabled = true;
  }

  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16, minHeight: "100%" }}>
      {/* Header row: greeting + streak pill */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700 }}>Today</div>
          <div style={{ fontSize: 13, color: C.inkSoft }}>Clear reviews, then learn — go as long as you like</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 12px",
            borderRadius: 999,
            background: C.aiSoft,
            color: C.aiDeep,
            fontWeight: 700,
          }}
        >
          <Flame size={16} color={C.shu} fill={streak.current > 0 ? C.shu : "none"} />
          {streak.current} day{streak.current === 1 ? "" : "s"}
        </div>
      </div>

      {/* Review-debt banner */}
      {reviewsLocked && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: 12,
            borderRadius: 12,
            background: "#FCEEEA",
            border: `1px solid ${C.shu}`,
            color: C.shu,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          <RotateCcw size={18} />
          {due.length} review{due.length === 1 ? "" : "s"} due — clear them to unlock today's lesson.
        </div>
      )}

      {/* The 2-step loop */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Step
          icon={RotateCcw}
          n={1}
          title="Clear reviews"
          sub={
            daily.reviewsCleared
              ? "Reviews cleared"
              : due.length > 0
              ? `${due.length} due today`
              : "Nothing due — you're clear"
          }
          state={reviewState}
          onClick={start}
        />
        <Step
          icon={BookOpen}
          n={2}
          title={`Lesson ${lessonNum}/${totalLessons} · ${currentLesson?.title ?? "—"}`}
          sub={
            lessonState === "locked"
              ? "Locked until reviews are clear"
              : daily.lessonDone
              ? "Lesson complete"
              : currentLesson
              ? `${currentLesson.canDo ?? "Learn new items"} · ~${estMinutes} min`
              : "All lessons complete"
          }
          state={lessonState}
          onClick={start}
        />
      </div>

      {/* Goal-met marker — a floor, not a terminator. */}
      {goalMet && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 12px",
            borderRadius: 12,
            background: "#EAF3EC",
            border: `1px solid ${C.matcha}`,
            color: C.matcha,
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <Check size={16} /> Daily goal met — keep going as long as you like.
        </div>
      )}

      {/* Primary CTA — continuous, no daily wall. */}
      <button
        data-testid="start-session"
        onClick={start}
        disabled={ctaDisabled}
        style={{
          padding: 18,
          borderRadius: 16,
          border: "none",
          background: ctaDisabled ? C.lockedBg : C.ai,
          color: ctaDisabled ? C.locked : "#fff",
          fontSize: 17,
          fontWeight: 700,
          fontFamily: F.body,
          cursor: ctaDisabled ? "default" : "pointer",
          boxShadow: ctaDisabled ? "none" : "0 4px 14px rgba(42,74,123,0.25)",
        }}
      >
        {ctaLabel}
      </button>
      {ctaDisabled && (
        <div style={{ fontSize: 12, color: C.inkSoft, textAlign: "center", marginTop: -6 }}>
          Nothing due right now — your reviews are scheduled for later.
        </div>
      )}

      {/* Quick stats from store */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        <Stat label="Streak" value={streak.current} />
        <Stat label="XP" value={stats.xpTotal} />
        <Stat label="Freezes" value={streak.freezes} />
      </div>
      <div style={{ fontSize: 12, color: C.inkSoft, textAlign: "center" }}>
        {ja.flag} {ja.name} · {ja.level} · {ja.target} goal
      </div>

      {/* Playtest shortcut — shown in dev builds, or on any build via ?dev. */}
      {devMode && (
        <button
          onClick={() => {
            devSeedReviews();
            const target = currentLesson ?? allPlayableLessons[0];
            if (target) navigate(`/lesson/${target.id}`);
          }}
          style={{
            padding: "8px 12px",
            borderRadius: 10,
            border: `1px dashed ${C.locked}`,
            background: "transparent",
            color: C.inkSoft,
            fontSize: 12,
            fontFamily: F.mono,
            cursor: "pointer",
          }}
        >
          DEV: force reviews due → play
        </button>
      )}

      {/* Version watermark */}
      <div
        style={{
          marginTop: "auto",
          textAlign: "right",
          fontFamily: F.mono,
          fontSize: 11,
          color: C.locked,
          opacity: 0.6,
        }}
      >
        🇯🇵 {VERSION}
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div
      style={{
        background: C.surface,
        border: `1px solid ${C.line}`,
        borderRadius: 14,
        padding: "12px 8px",
        textAlign: "center",
      }}
    >
      <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700, color: C.ai }}>{value}</div>
      <div style={{ fontSize: 11, color: C.inkSoft, fontWeight: 600 }}>{label}</div>
    </div>
  );
}
