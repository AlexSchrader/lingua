# server/

Server-side config and (eventually) functions for the Brief D tutor backend.

**Nothing here is wired or shipped yet.** Files in `server/` live outside `src/`
so they're never imported into or bundled with the frontend — persona text and
any future server logic stay server-side.

- `companions.js` — one voice/persona companion per language (Haruki / Nacho /
  Mathieu). The Brief D tutor function will pick `COMPANIONS[activeLang]`, run
  Claude with `persona` as the system prompt, and synthesize the reply with
  ElevenLabs using `voiceId`.

Voice IDs are config (not secret). The Claude and ElevenLabs **API keys are
secrets** — server env vars only, never committed, never in the frontend.
