import { useEffect } from "react";
import { Award } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { useReduceMotion } from "../store/useReduceMotion.js";
import { sfxMilestone } from "../store/sfx.js";
import { C, F } from "../theme.js";

// A calm, one-time banner when a capability milestone is reached — the celebration
// for honest structural progress. Deliberately NOT the mascot (its clips aren't
// transparent) and NOT confetti: a quiet slide-in, a warm chime, auto-dismiss. It
// carries information ("you can now do X"), it doesn't jackpot. Mounted globally
// (App root) so it covers Review/Lesson too, where most unlocks happen.
export default function MilestoneToast() {
  const toast = useStore((s) => s.milestoneToast);
  const dismiss = useStore((s) => s.dismissMilestoneToast);
  const reduce = useReduceMotion();

  useEffect(() => {
    if (!toast) return;
    sfxMilestone();
    const t = setTimeout(dismiss, 4500);
    return () => clearTimeout(t);
  }, [toast, dismiss]);

  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      onClick={dismiss}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        padding: "12px 16px",
        zIndex: 120,
        pointerEvents: "auto",
        cursor: "pointer",
        animation: reduce ? undefined : "milestone-drop 320ms ease-out",
      }}
    >
      <style>{"@keyframes milestone-drop { from { transform: translateY(-120%); opacity: 0 } to { transform: translateY(0); opacity: 1 } }"}</style>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          maxWidth: 420,
          width: "100%",
          background: C.surface,
          border: `1.5px solid ${C.matcha}`,
          borderRadius: 14,
          padding: "12px 16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
        }}
      >
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: C.matchaSoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Award size={20} color={C.matcha} />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.matcha, textTransform: "uppercase", letterSpacing: 0.5 }}>
            Milestone reached
          </div>
          <div style={{ fontFamily: F.disp, fontSize: 15, fontWeight: 700, lineHeight: 1.25 }}>
            {toast.label}
          </div>
        </div>
      </div>
    </div>
  );
}
