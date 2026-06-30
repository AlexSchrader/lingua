import { useState } from "react";
import { useStore } from "../store/useStore.js";
import { C, F } from "../theme.js";

// First-run onboarding — shown once, right after the first login, before the app.
// Kept short and calm (ND-first): a name to greet you by, why you're here, and an
// optional daily nudge. Everything is changeable later; nothing here blocks. The
// fuller ONBOARDING-SPEC (location, self-reference grammar) is collected lazily
// when a lesson actually needs it, not up front.
const REASONS = [
  { key: "travel", label: "Travel", emoji: "✈️" },
  { key: "heritage", label: "Heritage / family", emoji: "🏮" },
  { key: "work", label: "Work or study", emoji: "💼" },
  { key: "fun", label: "For the love of it", emoji: "🌱" },
];

export default function Onboarding() {
  const username = useStore((s) => s.auth.user?.username);
  const completeOnboarding = useStore((s) => s.completeOnboarding);

  const [displayName, setDisplayName] = useState(username ?? "");
  const [reason, setReason] = useState(null);
  const [reminderTime, setReminderTime] = useState("");

  function finish() {
    completeOnboarding({
      displayName: displayName.trim() || username || null,
      reason,
      reminderTime: reminderTime || null,
    });
    // The gate (App.jsx) sees onboarded:true and swaps in the app.
  }

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: C.washi,
        color: C.ink,
        fontFamily: F.body,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div style={{ width: "100%", maxWidth: 380, display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ textAlign: "center" }}>
          <img src="/mascot/lingua-cheer.png" alt="" aria-hidden style={{ width: 110, height: "auto", margin: "0 auto 8px" }} />
          <div style={{ fontFamily: F.disp, fontSize: 24, fontWeight: 700 }}>You're in 🎉</div>
          <div style={{ fontSize: 13, color: C.inkSoft, marginTop: 4 }}>Two quick things, then we start. You can change these any time.</div>
        </div>

        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 700 }}>What should we call you?</span>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Your name"
            autoCapitalize="words"
            autoCorrect="off"
            style={{
              padding: "13px 14px",
              borderRadius: 12,
              border: `1.5px solid ${C.line}`,
              background: C.surface,
              color: C.ink,
              fontSize: 16,
              fontFamily: F.body,
              outline: "none",
            }}
          />
        </label>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 700 }}>What's bringing you to Japanese?</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {REASONS.map((r) => {
              const on = reason === r.key;
              return (
                <button
                  key={r.key}
                  onClick={() => setReason(on ? null : r.key)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 12px",
                    borderRadius: 12,
                    border: `1.5px solid ${on ? C.ai : C.line}`,
                    background: on ? C.aiSoft : C.surface,
                    color: on ? C.aiDeep : C.ink,
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: F.body,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span aria-hidden style={{ fontSize: 16 }}>{r.emoji}</span>
                  {r.label}
                </button>
              );
            })}
          </div>
        </div>

        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 700 }}>Daily reminder <span style={{ color: C.inkSoft, fontWeight: 600 }}>(optional)</span></span>
          <input
            type="time"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            style={{
              padding: "13px 14px",
              borderRadius: 12,
              border: `1.5px solid ${C.line}`,
              background: C.surface,
              color: C.ink,
              fontSize: 16,
              fontFamily: F.body,
              outline: "none",
            }}
          />
        </label>

        <button
          onClick={finish}
          style={{
            padding: 16,
            borderRadius: 14,
            border: "none",
            background: C.ai,
            color: "#fff",
            fontSize: 16,
            fontWeight: 700,
            fontFamily: F.body,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(42,74,123,0.25)",
          }}
        >
          Start learning
        </button>
      </div>
    </div>
  );
}
