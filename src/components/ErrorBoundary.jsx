import React from "react";

// Catches any render/lifecycle error in the tree so a bad persisted state or a
// runtime throw shows a recovery screen instead of a blank page — the PWA
// white-screen a returning user with stale localStorage or a half-updated
// service worker can otherwise hit. "Reset" clears local data and unregisters
// the service worker so the next load is clean; progress is safe in the cloud
// for signed-in learners.
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // Never swallow silently — surface for debugging, and keep the component
    // stack so the on-screen details can name the failing component (there's no
    // dev console on a phone).
    console.error("App crashed:", error, info);
    this.setState({ info });
  }

  async reset() {
    try {
      localStorage.clear();
    } catch {
      /* private mode / blocked storage — nothing to clear */
    }
    try {
      const regs = (await navigator.serviceWorker?.getRegistrations?.()) ?? [];
      await Promise.all(regs.map((r) => r.unregister()));
    } catch {
      /* no SW / unsupported — fine */
    }
    location.reload();
  }

  render() {
    if (!this.state.error) return this.props.children;
    const wrap = {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      padding: 24,
      textAlign: "center",
      // Self-contained colors — the theme object may be unpopulated when the app
      // crashes this early, so don't depend on it here.
      background: "#faf7f0",
      color: "#2b2b2b",
      fontFamily: "system-ui, sans-serif",
    };
    const btn = {
      padding: "12px 20px",
      fontSize: 16,
      borderRadius: 10,
      border: "none",
      background: "#2b6cb0",
      color: "#fff",
      cursor: "pointer",
    };
    return (
      <div style={wrap}>
        <h1 style={{ fontSize: 22, margin: 0 }}>Something went wrong</h1>
        <p style={{ maxWidth: 340, lineHeight: 1.5, opacity: 0.85 }}>
          The app hit an error while loading. Resetting your local data usually
          fixes it. If you&apos;re signed in, your progress is safe in the cloud
          and will come back on the next sign-in.
        </p>
        <button style={btn} onClick={() => this.reset()}>
          Reset and reload
        </button>
        {/* Safari's error.stack does NOT include the message, so print it
            explicitly and first — it's the line that names the actual failure. */}
        <div
          style={{
            marginTop: 10,
            maxWidth: "92vw",
            fontSize: 14,
            fontWeight: 700,
            color: "#8a2b2b",
            wordBreak: "break-word",
          }}
        >
          {String(this.state.error?.name || "Error")}: {String(this.state.error?.message || this.state.error)}
        </div>
        <pre
          style={{
            marginTop: 8,
            maxWidth: "92vw",
            maxHeight: 220,
            overflow: "auto",
            textAlign: "left",
            fontSize: 11,
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            color: "#8a2b2b",
            background: "#f3e9e0",
            border: "1px solid #e0cfc0",
            borderRadius: 8,
            padding: "10px 12px",
          }}
        >
          {String(this.state.error?.stack || this.state.error?.message || this.state.error)}
          {this.state.info?.componentStack
             ? "\n--- component stack ---" + this.state.info.componentStack
            : ""}
        </pre>
      </div>
    );
  }
}
