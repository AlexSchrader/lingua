import { useEffect } from "react";
import { CircleCheck, CloudAlert } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { useReduceMotion } from "../store/useReduceMotion.js";
import { C, F } from "../theme.js";

// "Is it actually saved?" — answered, once, for the changes big enough to worry
// about: a finished lesson, a cleared review session, a full progress reset.
//
// It deliberately does NOT narrate routine syncing. A status light that blinks on
// every debounced upload teaches you to ignore it, and then it is worth nothing on
// the day it matters. So the store's `markImportantChange` arms it, the sync layer's
// `resolveSyncNotice` fires it, and everything else stays quiet.
//
// It also tells the truth when the answer is no: an upload that failed says so and
// stays armed, so a later retry can still deliver the "saved" — rather than the
// learner being told their reset landed when it is sitting on the device alone.
//
// Bottom-anchored (the milestone toast owns the top), above the nav, non-blocking.
export default function SyncToast() {
  const notice = useStore((s) => s.syncNotice);
  const dismiss = useStore((s) => s.dismissSyncNotice);
  const reduce = useReduceMotion();

  const at = notice?.at;
  useEffect(() => {
    if (!notice) return;
    // A warning gets longer on screen than a confirmation: "saved" is a glance,
    // "not saved yet" is something the learner may want to act on.
    const t = setTimeout(dismiss, notice.tone === "warn" ? 6000 : 3200);
    return () => clearTimeout(t);
  }, [notice, at, dismiss]);

  if (!notice) return null;

  const warn = notice.tone === "warn";
  const accent = warn ? C.shu : C.matcha; // shu is the palette's "attention", used for wrong answers
  const Icon = warn ? CloudAlert : CircleCheck;

  return (
    <div
      role="status"
      aria-live="polite"
      data-testid="sync-toast"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        // Clear of the bottom nav (and its safe-area inset) so it never sits under
        // the tabs on a phone with a home indicator.
        bottom: "calc(78px + env(safe-area-inset-bottom))",
        display: "flex",
        justifyContent: "center",
        padding: "0 16px",
        zIndex: 115,
        pointerEvents: "none",
        animation: reduce ? undefined : "sync-rise 240ms ease-out",
      }}
    >
      <style>{"@keyframes sync-rise { from { transform: translateY(60%); opacity: 0 } to { transform: translateY(0); opacity: 1 } }"}</style>
      <div
        onClick={dismiss}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          maxWidth: 440,
          pointerEvents: "auto",
          cursor: "pointer",
          background: C.surface,
          border: `1.5px solid ${accent}`,
          borderRadius: 999,
          padding: "9px 16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.16)",
        }}
      >
        <Icon size={18} color={accent} style={{ flexShrink: 0 }} />
        <span style={{ fontFamily: F.body, fontSize: 13, fontWeight: 600, color: C.ink, lineHeight: 1.3 }}>
          {notice.text}
        </span>
      </div>
    </div>
  );
}
