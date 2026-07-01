import { useState } from "react";
import { useStore } from "../store/useStore.js";
import { C, F } from "../theme.js";

// Shown when the learner arrives via the password-reset email link (Supabase
// fires PASSWORD_RECOVERY → auth.recovery). They set a new password; on success
// updatePassword clears the recovery flag and the gate drops them into the app.
export default function SetPassword() {
  const updatePassword = useStore((s) => s.updatePassword);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();
    if (busy) return;
    setError(null);
    if (password.length < 6) return setError("Password must be at least 6 characters.");
    if (password !== confirm) return setError("Passwords don't match.");
    setBusy(true);
    const res = await updatePassword(password);
    setBusy(false);
    if (res?.error) setError(res.error);
    // success → recovery cleared → gate re-renders into the app.
  }

  return (
    <div style={{ minHeight: "100dvh", background: C.washi, color: C.ink, fontFamily: F.body, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ textAlign: "center" }}>
          <img src="/mascot/lingua-think.png" alt="" aria-hidden style={{ width: 96, height: "auto", margin: "0 auto 8px" }} />
          <div style={{ fontFamily: F.disp, fontSize: 24, fontWeight: 700 }}>Set a new password</div>
          <div style={{ fontSize: 13, color: C.inkSoft, marginTop: 4 }}>Pick something you'll remember — you're logged in already.</div>
        </div>

        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Field label="New password" value={password} onChange={setPassword} autoFocus autoComplete="new-password" />
          <Field label="Confirm password" value={confirm} onChange={setConfirm} autoComplete="new-password" />

          {error && <div style={{ fontSize: 13, color: C.shu, fontWeight: 600 }}>{error}</div>}

          <button
            type="submit"
            disabled={busy}
            style={{ marginTop: 2, padding: 15, borderRadius: 14, border: "none", background: busy ? C.lockedBg : C.ai, color: busy ? C.locked : "#fff", fontSize: 16, fontWeight: 700, fontFamily: F.body, cursor: busy ? "default" : "pointer" }}
          >
            {busy ? "…" : "Save password"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, ...rest }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: C.inkSoft }}>{label}</span>
      <input
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        {...rest}
        style={{ padding: "13px 14px", borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.surface, color: C.ink, fontSize: 16, fontFamily: F.body, outline: "none" }}
      />
    </label>
  );
}
