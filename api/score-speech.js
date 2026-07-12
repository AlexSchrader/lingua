// Vercel serverless function: transcribe a short spoken clip with ElevenLabs
// Scribe (STT) so the SpeakCard can grade it. The ELEVENLABS_API_KEY lives in the
// server environment and NEVER reaches the browser — the client sends raw audio
// bytes and receives only the transcript. Grading itself is done client-side
// (src/store/answer.js gradeSpoken) so "correct reading" stays one tested notion.
// Mirrors api/convai-session.js (ESM handler, key from env, verdict-only response).
//
// POST /api/score-speech   body: raw audio bytes, Content-Type = the clip's mime
//   -> { transcript: string }

// We read the raw request stream ourselves (forward it to ElevenLabs as multipart),
// so disable Vercel's body parser.
export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "POST only" });
    return;
  }
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "ELEVENLABS_API_KEY is not set in the server environment." });
    return;
  }

  try {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const audio = Buffer.concat(chunks);
    if (!audio.length) {
      res.status(400).json({ error: "No audio received." });
      return;
    }

    const mime = req.headers["content-type"] || "audio/webm";
    const form = new FormData();
    form.append("model_id", "scribe_v1");
    form.append("language_code", "ja");
    form.append("file", new Blob([audio], { type: mime }), "clip");

    const r = await fetch("https://api.elevenlabs.io/v1/speech-to-text", {
      method: "POST",
      headers: { "xi-api-key": apiKey },
      body: form,
    });
    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      res.status(502).json({ error: `ElevenLabs ${r.status}`, detail: detail.slice(0, 200) });
      return;
    }
    const data = await r.json();
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json({ transcript: (data.text ?? "").trim() });
  } catch (err) {
    res.status(500).json({ error: err.message || "Failed to transcribe." });
  }
}
