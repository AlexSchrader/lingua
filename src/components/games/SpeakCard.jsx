import { useState, useRef, useEffect, useCallback } from "react";
import { Mic, Square, Volume2 } from "lucide-react";
import { C, F } from "../../theme.js";
import { gradeSpoken } from "../../store/answer.js";
import { sfxCorrect, sfxWrong } from "../../store/sfx.js";

// SpeakCard — the SPOKEN-rung review (vocab only). Duolingo-style flow: the app
// SAYS the word (plays its clip), then auto-arms the mic; you say it back and TAP
// to stop. The clip is transcribed by /api/score-speech (ElevenLabs Scribe) and
// graded LENIENTLY against the reading (src/store/answer.js gradeSpoken), which
// accepts kana, romaji, or an English-homophone transcript.
//
// ND spine: speaking is bonus depth, never a punishing gate. Retries are unlimited
// and unpenalized (only the grade you Continue with counts); a miss is warm, not a
// red wall; and if the mic/permission/endpoint isn't available it degrades to an
// ungraded "say it" prompt that lets the session continue (generous `good`).

// Skip audio/mic auto-drive under Playwright so smoke stays fast + deterministic
// (the card is driven through window.__speak in CI).
const IS_WEBDRIVER = typeof navigator !== "undefined" && !!navigator.webdriver;

function pickMime() {
  if (typeof MediaRecorder === "undefined") return "";
  for (const m of ["audio/webm", "audio/mp4", "audio/ogg"]) {
    if (MediaRecorder.isTypeSupported?.(m)) return m;
  }
  return "";
}

export default function SpeakCard({ item, onGraded }) {
  const [phase, setPhase] = useState("prompt"); // prompt | recording | scoring | result | fallback
  const [grade, setGrade] = useState(null); // "good" | "hard" | "again"
  const [heard, setHeard] = useState(""); // STT transcript, for feedback

  const streamRef = useRef(null);
  const recRef = useRef(null);
  const chunksRef = useRef([]);
  const mimeRef = useRef(pickMime());
  const audioRef = useRef(null);

  const stopTracks = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  const scoreTranscript = useCallback(
    (transcript) => {
      const g = gradeSpoken(transcript, item);
      setHeard(transcript);
      setGrade(g);
      setPhase("result");
      if (g === "again") sfxWrong();
      else sfxCorrect();
    },
    [item]
  );

  const scoreClip = useCallback(async () => {
    stopTracks();
    const blob = new Blob(chunksRef.current, { type: mimeRef.current || "audio/webm" });
    if (!blob.size) { setPhase("fallback"); return; }
    try {
      const res = await fetch("/api/score-speech", {
        method: "POST",
        headers: { "Content-Type": blob.type },
        body: blob,
      });
      if (!res.ok) throw new Error(String(res.status));
      const { transcript } = await res.json();
      scoreTranscript(transcript ?? "");
    } catch {
      setPhase("fallback"); // endpoint down / offline → never blocks
    }
  }, [scoreTranscript, stopTracks]);

  // Arm the mic and start recording. Called after the word has finished playing.
  const armMic = useCallback(async () => {
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setPhase("fallback");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const rec = mimeRef.current ? new MediaRecorder(stream, { mimeType: mimeRef.current }) : new MediaRecorder(stream);
      recRef.current = rec;
      chunksRef.current = [];
      rec.ondataavailable = (e) => e.data.size && chunksRef.current.push(e.data);
      rec.onstop = () => scoreClip();
      rec.start();
      setPhase("recording");
    } catch {
      stopTracks();
      setPhase("fallback"); // permission denied → non-graded, never blocks
    }
  }, [scoreClip, stopTracks]);

  // Play the target word, then arm the mic on end (so the mic never records the
  // clip). No clip / play error / autoplay-blocked → arm immediately.
  const playThenArm = useCallback(() => {
    if (IS_WEBDRIVER) { setPhase("prompt"); return; } // CI drives via the hook
    setPhase("prompt");
    try {
      const a = new Audio(`/audio/${item.lang}/${item.id}.mp3`);
      audioRef.current = a;
      a.onended = () => armMic();
      a.onerror = () => armMic();
      a.play().catch(() => armMic());
    } catch {
      armMic();
    }
  }, [item, armMic]);

  const replay = () => {
    audioRef.current?.pause();
    try {
      const a = new Audio(`/audio/${item.lang}/${item.id}.mp3`);
      audioRef.current = a;
      a.play().catch(() => {});
    } catch { /* silent */ }
  };

  const stopAndScore = () => {
    if (phase !== "recording") return;
    setPhase("scoring");
    try {
      recRef.current?.stop();
    } catch {
      setPhase("fallback");
    }
  };

  const retry = () => {
    setGrade(null);
    setHeard("");
    playThenArm();
  };

  // Start the flow on mount / item change; clean up audio + mic on unmount.
  useEffect(() => {
    setGrade(null);
    setHeard("");
    playThenArm();
    return () => { audioRef.current?.pause(); stopTracks(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id]);

  // Test hook: drive the grade→advance path without a real mic or the endpoint.
  useEffect(() => {
    window.__speak = {
      pass: () => scoreTranscript(item.front),
      miss: () => scoreTranscript("banana"),
    };
    return () => { delete window.__speak; };
  }, [item, scoreTranscript]);

  const recording = phase === "recording";
  const scoring = phase === "scoring";

  const verdict =
    grade === "good" ? { color: C.matcha, line: "Nice — that's it!" }
    : grade === "hard" ? { color: C.ai, line: "Close enough — counts!" }
    : { color: C.shu, line: "Not quite — give it another go?" };

  return (
    <div
      data-testid="speak-card"
      data-card-kind="speak"
      data-answer={item.front}
      style={{ display: "flex", flexDirection: "column", flex: 1, gap: 16 }}
    >
      <div style={{ fontSize: 13, color: C.inkSoft, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
        <span>Listen, then say it back</span>
        <button
          onClick={replay}
          aria-label="Play the word again"
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: 999, border: "none", background: C.aiSoft, color: C.aiDeep, cursor: "pointer" }}
        >
          <Volume2 size={15} />
        </button>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          background: C.surface,
          border: `1px solid ${C.line}`,
          borderRadius: 20,
          padding: "24px 16px",
        }}
      >
        <div style={{ fontFamily: F.jp, fontSize: 52, fontWeight: 500 }}>{item.front}</div>
        <div style={{ fontFamily: F.mono, fontSize: 18, color: C.ai }}>{item.reading}</div>

        {phase === "result" ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ color: verdict.color, fontWeight: 700, fontSize: 16 }}>{verdict.line}</div>
            {heard && (
              <div style={{ color: C.inkSoft, fontSize: 14, marginTop: 4 }}>
                I heard <span style={{ fontFamily: F.jp }}>{heard}</span>
              </div>
            )}
          </div>
        ) : phase === "fallback" ? (
          <div style={{ textAlign: "center", color: C.inkSoft, fontSize: 14, maxWidth: 260 }}>
            No mic available — say it out loud anyway, then continue. (Speaking is bonus practice.)
          </div>
        ) : (
          <>
            <button
              data-testid="record"
              aria-label={recording ? "Tap to stop" : "Getting ready"}
              onClick={stopAndScore}
              disabled={!recording}
              style={{
                width: 84,
                height: 84,
                borderRadius: "50%",
                border: "none",
                background: recording ? C.shu : scoring ? C.locked : C.ai,
                color: "#fff",
                cursor: recording ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                touchAction: "manipulation",
                transition: "transform 120ms, background 120ms",
                transform: recording ? "scale(1.06)" : "scale(1)",
                animation: recording ? "speakPulse 1.1s ease-in-out infinite" : "none",
              }}
            >
              {recording ? <Square size={26} fill="#fff" /> : <Mic size={32} />}
            </button>
            <style>{`@keyframes speakPulse{0%,100%{box-shadow:0 0 0 0 rgba(220,80,60,0.45)}50%{box-shadow:0 0 0 12px rgba(220,80,60,0)}}`}</style>
            <div style={{ fontSize: 13, color: recording ? C.shu : C.inkSoft, fontWeight: 600, minHeight: 18 }}>
              {scoring ? "Checking…" : recording ? "Listening — tap when you're done" : "Getting ready…"}
            </div>
          </>
        )}
      </div>

      {/* Actions: retry is always free; Continue commits the current grade. */}
      {phase === "result" ? (
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={retry}
            style={{ flex: 1, padding: 16, borderRadius: 14, border: `1.5px solid ${C.line}`, background: C.surface, color: C.inkSoft, fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
          >
            Try again
          </button>
          <button
            data-testid="speak-continue"
            onClick={() => onGraded(grade)}
            style={{ flex: 2, padding: 16, borderRadius: 14, border: "none", background: C.ai, color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
          >
            Continue
          </button>
        </div>
      ) : phase === "fallback" ? (
        <button
          data-testid="speak-continue"
          onClick={() => onGraded("good")}
          style={{ padding: 16, borderRadius: 14, border: "none", background: C.ai, color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
        >
          Continue
        </button>
      ) : (
        <div style={{ fontSize: 12, color: C.inkSoft, textAlign: "center", minHeight: 20 }}>
          Say the word, then tap the mic to check.
        </div>
      )}
    </div>
  );
}
