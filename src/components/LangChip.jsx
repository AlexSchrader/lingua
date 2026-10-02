import { C, F } from "../theme.js";

// The pill used to scope a screen to one language. Lived inside Stats until
// Achievements needed the same control; shared so the two switchers can't drift
// apart visually. Callers decide when to SHOW a row of these — a single chip for a
// single-language learner is clutter, so both screens hide the row below 2.
export default function LangChip({ label, on, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={on}
      style={{
        padding: "7px 12px",
        borderRadius: 999,
        border: `1.5px solid ${on ? C.ai : C.line}`,
        background: on ? C.aiSoft : C.surface,
        color: on ? C.aiDeep : C.inkSoft,
        fontSize: 12,
        fontWeight: 700,
        fontFamily: F.body,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}
