import { useEffect } from "react";
import { Award } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { useReduceMotion } from "../store/useReduceMotion.js";
import { sfxMilestone } from "../store/sfx.js";
import Mascot from "./Mascot.jsx";
import { C, F } from "../theme.js";

// A one-time popup banner when a capability milestone is reached — the celebration
// for honest structural progress. Shows Lingua's "achievement" animation + a
// per-milestone badge image + the milestone text; a warm chime; auto-dismiss.
// Mounted globally (App root) so it covers Review/Lesson too, where most unlocks
// happen. Reduced-motion / missing-asset safe by construction:
//   • <Mascot> uses only alpha WebM/HEVC and falls back to the transparent still
//     (lingua-proud) until the transparent achievement clip lands — no white box.
//   • the badge image hides itself if /milestones/<id>.png isn't there yet, leaving
//     the Award icon — so the framework works today and lights up as assets arrive.
export default function MilestoneToast() {
  const toast = useStore((s) => s.milestoneToast);
  const dismiss = useStore((s) => s.dismissMilestoneToast);
  const reduce = useReduceMotion();

  useEffect(() => {
    if (!toast) return;
    sfxMilestone();
    const t = setTimeout(dismiss, 5000);
    return () => clearTimeout(t);
  }, [toast, dismiss]);

  if (!toast) return null;

  const badge = `/milestones/${toast.id}.png`;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        padding: "12px 16px",
        zIndex: 120,
        // Container ignores pointer events so its full-width band never intercepts
        // taps on the card underneath (a milestone can unlock mid-lesson). Only the
        // banner itself is clickable (to dismiss).
        pointerEvents: "none",
        animation: reduce ? undefined : "milestone-drop 320ms ease-out",
      }}
    >
      <style>{"@keyframes milestone-drop { from { transform: translateY(-120%); opacity: 0 } to { transform: translateY(0); opacity: 1 } }"}</style>
      <div
        onClick={dismiss}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          maxWidth: 440,
          width: "100%",
          pointerEvents: "auto",
          cursor: "pointer",
          background: C.surface,
          border: `1.5px solid ${C.matcha}`,
          borderRadius: 16,
          padding: "12px 16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
        }}
      >
        {/* Lingua's achievement reaction — animates once the transparent clip exists,
            otherwise the transparent "proud" still. Keyed to the milestone so it
            replays per unlock. */}
        <Mascot context="achievement" videoKey={toast.id} size={60} style={{ flexShrink: 0 }} />

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.matcha, textTransform: "uppercase", letterSpacing: 0.5 }}>
            Milestone reached
          </div>
          <div style={{ fontFamily: F.disp, fontSize: 15, fontWeight: 700, lineHeight: 1.25 }}>
            {toast.label}
          </div>
        </div>

        {/* Per-milestone badge image. Hidden until public/milestones/<id>.png exists;
            the Award mark stands in so there's always a badge. */}
        <div style={{ width: 44, height: 44, borderRadius: 12, background: C.matchaSoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden", position: "relative" }}>
          <Award size={20} color={C.matcha} />
          <img
            src={badge}
            alt=""
            aria-hidden
            onError={(e) => { e.currentTarget.style.display = "none"; }}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
