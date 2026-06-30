import { useState } from "react";
import { useStore } from "../store/useStore.js";
import { C, F } from "../theme.js";

// Username + email + password auth (no third-party sign-in). Three modes share
// one screen: log in (username + password), sign up (all three), and forgot
// (email → reset link). On success the auth-state listener takes over — the gate
// in App.jsx swaps this screen for onboarding or the app.
export default function Auth() {
  const signIn = useStore((s) => s.signIn);
  const signUp = useStore((s) => s.signUp);
  const requestPasswordReset = useStore((s) => s.requestPasswordReset);

  const [mode, setMode] = useState("login"); // "login" | "signup" | "forgot"
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [notice, setNotice] = useState(null);

  function switchMode(next) {
    setMode(next);
    setError(null);
    setNotice(null);
    setPassword("");
  }

  async function submit(e) {
    e.preventDefault();
    if (busy) return;
    setError(null);
    setNotice(null);

    // Light client-side checks before hitting the network.
    if (mode !== "forgot" && !username.trim()) return setError("Pick a username.");
    if (mode === "signup" && !email.trim()) return setError("Email is needed for password resets.");
    if (mode === "forgot" && !email.trim()) return setError("Enter your email.");
    if (mode !== "forgot" && password.length < 6) return setError("Password must be at least 6 characters.");

    setBusy(true);
    let res;
    if (mode === "login") res = await signIn({ username, password });
    else if (mode === "signup") res = await signUp({ username, email, password });
    else res = await requestPasswordReset(email);
    setBusy(false);

    if (res?.error) return setError(res.error);
    if (mode === "forgot") {
      setNotice("If that email has an account, a reset link is on its way.");
      setMode("login");
    }
    // login / signup success → the gate re-renders us away; nothing to do here.
  }

  const title = mode === "login" ? "Welcome back" : mode === "signup" ? "Create your account" : "Reset password";
  const cta = mode === "login" ? "Log in" : mode === "signup" ? "Sign up" : "Send reset link";

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
      <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ textAlign: "center" }}>
          <img src="/mascot/lingua-wave.png" alt="" aria-hidden style={{ width: 96, height: "auto", margin: "0 auto 8px" }} />
          <div style={{ fontFamily: F.disp, fontSize: 24, fontWeight: 700 }}>{title}</div>
          <div style={{ fontSize: 13, color: C.inkSoft, marginTop: 4 }}>
            {mode === "forgot" ? "We'll email you a link to set a new one." : "Lingua — pick up where you left off."}
          </div>
        </div>

        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {mode !== "forgot" && (
            <Field
              label="Username"
              value={username}
              onChange={setUsername}
              autoComplete="username"
              autoCapitalize="none"
              autoFocus
            />
          )}
          {(mode === "signup" || mode === "forgot") && (
            <Field
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              autoComplete="email"
              autoCapitalize="none"
              autoFocus={mode === "forgot"}
            />
          )}
          {mode !== "forgot" && (
            <Field
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
          )}

          {error && <div style={{ fontSize: 13, color: C.shu, fontWeight: 600 }}>{error}</div>}
          {notice && <div style={{ fontSize: 13, color: C.matcha, fontWeight: 600 }}>{notice}</div>}

          <button
            type="submit"
            disabled={busy}
            style={{
              marginTop: 2,
              padding: 15,
              borderRadius: 14,
              border: "none",
              background: busy ? C.lockedBg : C.ai,
              color: busy ? C.locked : "#fff",
              fontSize: 16,
              fontWeight: 700,
              fontFamily: F.body,
              cursor: busy ? "default" : "pointer",
            }}
          >
            {busy ? "…" : cta}
          </button>
        </form>

        {/* Mode switches */}
        <div style={{ textAlign: "center", fontSize: 13, color: C.inkSoft, display: "flex", flexDirection: "column", gap: 6 }}>
          {mode === "login" && (
            <>
              <button style={linkStyle} onClick={() => switchMode("forgot")}>Forgot password?</button>
              <span>
                New here?{" "}
                <button style={linkStyle} onClick={() => switchMode("signup")}>Create an account</button>
              </span>
            </>
          )}
          {mode === "signup" && (
            <span>
              Already have an account?{" "}
              <button style={linkStyle} onClick={() => switchMode("login")}>Log in</button>
            </span>
          )}
          {mode === "forgot" && (
            <button style={linkStyle} onClick={() => switchMode("login")}>Back to log in</button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", ...rest }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: C.inkSoft }}>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoCorrect="off"
        spellCheck={false}
        {...rest}
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
  );
}

const linkStyle = {
  border: "none",
  background: "transparent",
  color: C.ai,
  fontWeight: 700,
  fontSize: 13,
  fontFamily: "inherit",
  cursor: "pointer",
  padding: 0,
};
