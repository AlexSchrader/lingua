import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, RotateCcw, Lock, Check, Flame, Zap, Snowflake } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { UNITS, LANGUAGES } from "../data/index.js";
import { isReviewable, isMastered } from "../store/mastery.js";
import { C, F } from "../theme.js";
import { VERSION } from "../version.js";

// Friendly relative time for the next scheduled review.
function fmtWhen(ts) {
  if (!ts) return null;
  const ms = ts - Date.now();
  if (ms <= 0) return "now";
  const hours = ms / 3_600_000;
  if (hours < 24) return hours <= 1 ? "within an hour" : `in ~${Math.round(hours)} h`;
  const days = Math.round(hours / 24);
  return days <= 1 ? "tomorrow" : `in ~${days} days`;
}

// Time-of-day greeting (name folds in later, once onboarding gives us one).
function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

function StatusPill({ icon: Icon, label, value, state }) {
  // state: "active" | "done" | "locked"
  const done = state === "done";
  const locked = state === "locked";
  const color = done ? C.matcha : locked ? C.locked : C.ai;
  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 14px",
        borderRadius: 14,
        background: C.surface,
        border: `1px solid ${C.line}`,
        opacity: locked ? 0.7 : 1,
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 9,
          background: done ? C.matcha : locked ? C.locked : C.aiSoft,
          color: done || locked ? "#fff" : C.aiDeep,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {done ? <Check size={16} /> : locked ? <Lock size={15} /> : <Icon size={16} />}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 11, color: C.inkSoft, fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 700, color, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{value}</div>
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
  const languages = useStore((s) => s.languages);
  const profile = useStore((s) => s.profile);
  // The active language drives everything on Today (falls back to ja for safety).
  const startedLangs = profile.languages?.length ? profile.languages : ["ja"];
  const activeId = profile.activeLang && startedLangs.includes(profile.activeLang) ? profile.activeLang : startedLangs[0];
  const active = { ...LANGUAGES.find((l) => l.id === activeId), ...(languages[activeId] ?? {}) };
  const dueItemsFn = useStore((s) => s.dueItems);
  const reviewsLockedFn = useStore((s) => s.reviewsLocked);
  const devSeedReviews = useStore((s) => s.devSeedReviews);

  const due = useMemo(() => dueItemsFn(), [items, dueItemsFn]);
  const reviewsLocked = useMemo(() => reviewsLockedFn(), [items, daily, reviewsLockedFn]);

  // All lessons across all units that have item content (ordered).
  const allPlayableLessons = useMemo(
    () => UNITS.filter((u) => u.lang === activeId).flatMap((u) => u.lessons.filter((l) => Array.isArray(l.items))),
    [activeId]
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

  // Progress glance + next-review timing (from the data we already track).
  const masteredKana = useMemo(
    () => Object.values(items).filter((it) => it.lang === activeId && it.type === "kana" && isMastered(it)).length,
    [items, activeId]
  );
  const nextReviewAt = useMemo(() => {
    const times = Object.values(items)
      .filter((it) => it.lang === activeId && isReviewable(it) && it.srs?.due)
      .map((it) => new Date(it.srs.due).getTime())
      .filter((t) => t > Date.now());
    return times.length ? Math.min(...times) : null;
  }, [items, activeId]);

  // Mascot pose + a calm, non-nagging line for the current state.
  const mascot = goalMet
    ? { pose: "celebrate", msg: "Nice work today. Come back tomorrow — or keep going if you're in the zone." }
    : reviewsLocked
    ? { pose: "think", msg: "A few reviews are waiting. Clear them and you're set for the day." }
    : hasNew
    ? { pose: "cheer", msg: "Ready when you are. One lesson at a time — no rush." }
    : { pose: "sleepy", msg: "All caught up. Rest up — your reviews will come back around." };

  // The lesson AFTER the current one — a genuine forward look (Step 2 already
  // shows the current lesson, so "Up next" should be the one beyond it).
  const nextLesson = useMemo(() => {
    if (!currentLesson) return null;
    const idx = allPlayableLessons.indexOf(currentLesson);
    return allPlayableLessons[idx + 1] ?? null;
  }, [currentLesson, allPlayableLessons]);
  const nextLessonNum = nextLesson ? allPlayableLessons.indexOf(nextLesson) + 1 : null;

  // Hiragana progress for the fullness strip.
  const kanaTotal = useMemo(() => Object.values(items).filter((it) => it.lang === activeId && it.type === "kana").length, [items, activeId]);
  const kanaLearned = useMemo(
    () => Object.values(items).filter((it) => it.lang === activeId && it.type === "kana" && (it.rung ?? 0) >= 1).length,
    [items, activeId]
  );
  const kanaPct = kanaTotal ? Math.round((kanaLearned / kanaTotal) * 100) : 0;

  const startReview = () => navigate("/review");
  const startLesson = () => {
    const target = currentLesson ?? allPlayableLessons[0] ?? null;
    if (target) navigate(`/lesson/${target.id}`);
  };

  // Primary CTA: reviews first if due; lesson once reviews are clear.
  let ctaLabel;
  let ctaDisabled = false;
  let ctaAction;
  if (due.length > 0 && !daily.reviewsCleared) {
    ctaLabel = "Clear reviews";
    ctaAction = startReview;
  } else if (hasNew) {
    ctaLabel = daily.lessonDone ? "Keep learning" : "Start lesson";
    ctaAction = startLesson;
  } else {
    ctaLabel = "All caught up";
    ctaDisabled = true;
    ctaAction = undefined;
  }

  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16, minHeight: "100%" }}>
      {/* Greeting + mascot in one banner — a single hello, not two. Adaptive size. */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: 14,
          borderRadius: 16,
          background: C.surface,
          border: `1px solid ${C.line}`,
        }}
      >
        <img
          src={`/mascot/lingua-${mascot.pose}.png`}
          alt=""
          aria-hidden
          style={{ width: "clamp(72px, 18vw, 132px)", height: "auto", objectFit: "contain", flexShrink: 0 }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: F.disp, fontSize: 19, fontWeight: 700, marginBottom: 2 }}>{greeting()}</div>
          <div style={{ fontSize: 14, color: C.ink, lineHeight: 1.35, fontWeight: 600 }}>{mascot.msg}</div>
          <div style={{ fontSize: 12, color: C.inkSoft, fontWeight: 600, marginTop: 6 }}>
            {active.flag} {active.name} · {active.level === "pre-A1" ? "Starting out" : active.level} → {active.target} goal
            {nextReviewAt ? ` · next review ${fmtWhen(nextReviewAt)}` : ""}
          </div>
        </div>
      </div>

      {/* Stats trio — with icons to match the Stats screen. */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        <Stat icon={Flame} color={C.shu} label="Streak" value={streak.current} />
        <Stat icon={Zap} color={C.ai} label="XP" value={stats.xpTotal} />
        <Stat icon={Snowflake} color={C.ai} label="Freezes" value={streak.freezes} />
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
            background: C.shuSoft,
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

      {/* Compact status — reviews + lesson at a glance. The button below is the
          single action, so these stay slim indicators, not a second set of CTAs. */}
      <div style={{ display: "flex", gap: 10 }}>
        <StatusPill
          icon={RotateCcw}
          label="Reviews"
          value={daily.reviewsCleared ? "Cleared" : due.length > 0 ? `${due.length} due` : "All clear"}
          state={reviewState}
        />
        <StatusPill
          icon={BookOpen}
          label="Lesson"
          value={daily.lessonDone ? "Done" : lessonState === "locked" ? "Locked" : `${lessonNum}/${totalLessons}`}
          state={lessonState}
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
            background: C.matchaSoft,
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
        onClick={ctaAction}
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
      {ctaDisabled ? (
        <div style={{ fontSize: 12, color: C.inkSoft, textAlign: "center", marginTop: -6 }}>
          Nothing due right now — your reviews are scheduled for later.
        </div>
      ) : ctaLabel !== "Clear reviews" && currentLesson ? (
        <div style={{ fontSize: 12, color: C.inkSoft, textAlign: "center", marginTop: -6 }}>
          {currentLesson.title} · {currentLesson.canDo ?? "Learn new items"} · ~{estMinutes} min
        </div>
      ) : null}

      {/* Up next — the lesson AFTER the current one (Step 2 already shows the
          current lesson, so this is a genuine peek ahead). */}
      <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 16, padding: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.5, color: C.ai, marginBottom: 4 }}>
          {nextLesson ? "UP NEXT" : "AFTER THIS"}
        </div>
        {nextLesson ? (
          <>
            <div style={{ fontFamily: F.jp, fontSize: 15, fontWeight: 700 }}>
              Lesson {nextLessonNum}/{totalLessons} · {nextLesson.title}
            </div>
            <div style={{ fontSize: 13, color: C.inkSoft, marginTop: 2 }}>
              {nextLesson.canDo ?? "Learn new items"}
            </div>
          </>
        ) : (
          <div style={{ fontSize: 13, color: C.inkSoft }}>
            {hasNew
              ? "Last lesson available — more units coming soon."
              : `You've learned every lesson available.${nextReviewAt ? ` Next review ${fmtWhen(nextReviewAt)}.` : ""}`}
          </div>
        )}
      </div>

      {/* Hiragana progress — fills the screen + ties Today to the Ladder. */}
      {kanaTotal > 0 && (
        <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 16, padding: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, marginBottom: 8 }}>
            <span style={{ fontWeight: 700 }}>Hiragana</span>
            <span style={{ color: C.inkSoft }}>
              {kanaLearned}/{kanaTotal} learned{masteredKana > 0 ? ` · ${masteredKana} mastered` : ""}
            </span>
          </div>
          <div style={{ height: 8, borderRadius: 999, background: C.lockedBg, overflow: "hidden" }}>
            <div style={{ width: `${kanaPct}%`, height: "100%", background: C.ai, transition: "width 250ms ease" }} />
          </div>
        </div>
      )}

      {/* Playtest shortcut — shown in dev builds, or on any build via ?dev. */}
      {devMode && (
        <button
          onClick={() => {
            devSeedReviews();
            navigate("/review");
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

function Stat({ label, value, icon: Icon, color }) {
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
      {Icon && <Icon size={18} color={color ?? C.ai} style={{ marginBottom: 2 }} />}
      <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700, color: C.ai }}>{value}</div>
      <div style={{ fontSize: 11, color: C.inkSoft, fontWeight: 600 }}>{label}</div>
    </div>
  );
}
