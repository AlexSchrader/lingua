import { useState, useRef, useEffect, useCallback } from "react";
import { Mic } from "lucide-react";
import { C, F } from "../../theme.js";
import { gradeSpoken } from "../../store/answer.js";
import { sfxCorrect, sfxWrong } from "../../store/sfx.js";

// SpeakCard — the SPOKEN-rung review (vocab only). Push-and-hold the mic to record
// a short clip; on release it's transcribed by /api/score-speech (ElevenLabs Scribe)
// and graded LENIENTLY against the target reading (src/store/answer.js gradeSpoken).
//
// ND spine: speaking is bonus depth, never a punishing gate. Retries are unlimited
// and unpenalized (only the grade you Continue with counts); a miss is warm, not a
// red wall; and if the mic/permission/endpoint isn't available it degrades to an
// ungraded "say it" prompt that lets the session continue (generous `good`).

function pickMime() {
  if (typeof MediaRecorder === "undefined") return "";
  for (const m of ["audio/webm", "audio/mp4", "audio/ogg"]) {
    if (MediaRecorder.isTypeSupported?.(m)) return m;
  }
  return "";
}

export default function SpeakCard({ item, onGraded }) {
  const [phase, setPhase] = useState("idle"); // idle | recording | scoring | result | fallback
  const [grade, setGrade] = useState(null); // "good" | "hard" | "again"
  const [heard, setHeard] = useState(""); // STT transcript, for feedback

  const streamRef = useRef(null);
  const recRef = useRef(null);
  const chunksRef = useRef([]);
  const mimeRef = useRef(pickMime());

  useEffect(() => {
    // Reset when the item changes (card reused across the queue).
    setPhase("idle");
    setGrade(null);
    setHeard("");
  }, [item.id]);

  // Score a transcript → grade → result screen. Shared by the real mic path and
  // the test hook, so the grade→advance flow is drivable without a mic/network.
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

  const stopTracks = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => stopTracks, [stopTracks]);

  // Test hook: let Playwright drive the card without a real mic or the endpoint.
  useEffect(() => {
    window.__speak = {
      pass: () => scoreTranscript(item.front),
      miss: () => scoreTranscript("ちがう"),
    };
    return () => { delete window.__speak; };
  }, [item, scoreTranscript]);

  const startRecording = async () => {
    if (phase === "recording" || phase === "scoring") return;
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
      // Permission denied / no device → non-graded fallback, never blocks.
      stopTracks();
      setPhase("fallback");
    }
  };

  const stopRecording = () => {
    if (phase !== "recording") return;
    setPhase("scoring");
    try {
      recRef.current?.stop();
    } catch {
      setPhase("fallback");
    }
  };

  const scoreClip = async () => {
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
      // Endpoint down / offline → ungraded fallback, session never blocks.
      setPhase("fallback");
    }
  };

  const retry = () => {
    setPhase("idle");
    setGrade(null);
    setHeard("");
  };

  const recording = phase === "recording";
  const scoring = phase === "scoring";

  // --- result copy ---
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
      <div style={{ fontSize: 13, color: C.inkSoft, fontWeight: 600 }}>Say it out loud</div>

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
              aria-label="Hold to speak"
              onPointerDown={startRecording}
              onPointerUp={stopRecording}
              onPointerLeave={stopRecording}
              onContextMenu={(e) => e.preventDefault()}
              disabled={scoring}
              style={{
                width: 84,
                height: 84,
                borderRadius: "50%",
                border: "none",
                background: recording ? C.shu : scoring ? C.locked : C.ai,
                color: "#fff",
                cursor: scoring ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                touchAction: "none",
                userSelect: "none",
                transition: "transform 120ms, background 120ms",
                transform: recording ? "scale(1.08)" : "scale(1)",
              }}
            >
              <Mic size={32} />
            </button>
            <div style={{ fontSize: 13, color: recording ? C.shu : C.inkSoft, fontWeight: 600, minHeight: 18 }}>
              {scoring ? "Listening…" : recording ? "Release to check" : "Hold the mic and say it"}
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
          Hold the mic, say the word, release.
        </div>
      )}
    </div>
  );
}
