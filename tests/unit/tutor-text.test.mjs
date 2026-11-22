// /api/tutor-text — the text tutor for Doodle's study window. No network: the
// Claude call is a stub, so these check the gates around it (switch, origin,
// body, daily cap) and that the request it would send is text only.
import { test, beforeEach } from "node:test";
import assert from "node:assert/strict";
import handler, { parseBody, toClaudeMessages, resetDailyCap, allowedOrigins, tokenMatches } from "../../api/tutor-text.js";

const ORIGIN = "https://lingua.invalid";
const TOKEN = "test-shared-secret-0123456789";
const ON = { TUTOR_TEXT_ON: "1", ANTHROPIC_API_KEY: "test-key", TUTOR_TEXT_TOKEN: TOKEN };

function mockRes() {
  return {
    statusCode: 0,
    headers: {},
    body: undefined,
    setHeader(k, v) {
      this.headers[k.toLowerCase()] = v;
    },
    status(c) {
      this.statusCode = c;
      return this;
    },
    json(b) {
      this.body = b;
      return this;
    },
    end() {
      return this;
    },
  };
}

const req = (over = {}) => ({
  method: "POST",
  headers: { origin: ORIGIN, "x-tutor-token": TOKEN },
  body: { lang: "ja", messages: [{ from: "you", text: "こんにちは" }] },
  ...over,
});

function okFetch(calls) {
  return async (url, init) => {
    calls.push({ url, init, body: JSON.parse(init.body) });
    return { ok: true, status: 200, json: async () => ({ stop_reason: "end_turn", content: [{ type: "thinking", thinking: "" }, { type: "text", text: "やあ！ Hi!" }] }) };
  };
}

beforeEach(() => resetDailyCap());

test("preflight from Doodle's origin is allowed; any other origin is not", async () => {
  const a = mockRes();
  await handler(req({ method: "OPTIONS" }), a, { env: ON });
  assert.equal(a.statusCode, 204);
  assert.equal(a.headers["access-control-allow-origin"], ORIGIN);
  const b = mockRes();
  await handler(req({ method: "OPTIONS", headers: { origin: "https://evil.example" } }), b, { env: ON });
  assert.equal(b.statusCode, 403);
  assert.equal(b.headers["access-control-allow-origin"], undefined);
});

test("off unless TUTOR_TEXT_ON=1 — no Claude call is made", async () => {
  const calls = [];
  const res = mockRes();
  await handler(req(), res, { env: { ANTHROPIC_API_KEY: "k" }, fetchImpl: okFetch(calls) });
  assert.equal(res.statusCode, 503);
  assert.equal(calls.length, 0);
});

test("a request without the allowed Origin is refused before anything else", async () => {
  const calls = [];
  const res = mockRes();
  await handler(req({ headers: {} }), res, { env: ON, fetchImpl: okFetch(calls) });
  assert.equal(res.statusCode, 403);
  assert.equal(calls.length, 0);
});

test("THE LOCK: a faked Origin without the right token spends nothing", async () => {
  const calls = [];
  for (const headers of [{ origin: ORIGIN }, { origin: ORIGIN, "x-tutor-token": "wrong" }, { origin: ORIGIN, "x-tutor-token": TOKEN.slice(0, -1) }, { origin: ORIGIN, "x-tutor-token": TOKEN + "x" }]) {
    const res = mockRes();
    await handler(req({ headers }), res, { env: ON, fetchImpl: okFetch(calls) });
    assert.equal(res.statusCode, 401);
  }
  assert.equal(calls.length, 0);
});

test("refuses to run at all without a long-enough TUTOR_TEXT_TOKEN on the deployment", async () => {
  const calls = [];
  for (const tok of [undefined, "short"]) {
    const res = mockRes();
    await handler(req({ headers: { origin: ORIGIN, "x-tutor-token": tok } }), res, { env: { ...ON, TUTOR_TEXT_TOKEN: tok }, fetchImpl: okFetch(calls) });
    assert.equal(res.statusCode, 503);
  }
  assert.equal(calls.length, 0);
  assert.equal(tokenMatches("short", "short"), false);
  assert.equal(tokenMatches(TOKEN, TOKEN), true);
});

test("one turn: text in, text out, sent to the Messages API with the companion's persona", async () => {
  const calls = [];
  const res = mockRes();
  await handler(req(), res, { env: ON, fetchImpl: okFetch(calls) });
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { reply: "やあ！ Hi!" });
  assert.equal(calls.length, 1);
  const { url, init, body } = calls[0];
  assert.equal(url, "https://api.anthropic.com/v1/messages");
  assert.equal(init.headers["x-api-key"], "test-key");
  assert.equal(body.model, "claude-opus-5-5");
  assert.match(body.system, /Haruki/);
  assert.match(body.system, /TEXT, NOT VOICE/);
  assert.deepEqual(body.messages, [{ role: "user", content: "こんにちは" }]);
  assert.equal(JSON.stringify(body).includes("elevenlabs"), false);
});

test("the daily cap: the 11th message of a day is refused (default cap 10)", async () => {
  const calls = [];
  for (let i = 0; i < 10; i++) {
    const r = mockRes();
    await handler(req(), r, { env: ON, fetchImpl: okFetch(calls) });
    assert.equal(r.statusCode, 200);
  }
  const r = mockRes();
  await handler(req(), r, { env: ON, fetchImpl: okFetch(calls) });
  assert.equal(r.statusCode, 429);
  assert.equal(calls.length, 10);
});

test("a refusal is reported, not passed off as a reply", async () => {
  const res = mockRes();
  await handler(req(), res, { env: ON, fetchImpl: async () => ({ ok: true, status: 200, json: async () => ({ stop_reason: "refusal", content: [] }) }) });
  assert.equal(res.statusCode, 502);
});

test("parseBody: bounded history, plain lines, last line is the learner's", () => {
  assert.ok(parseBody({ messages: [{ from: "you", text: "hi" }] }).messages);
  assert.match(parseBody({ messages: [] }).error, /No messages/);
  assert.match(parseBody({ messages: [{ from: "tutor", text: "hi" }] }).error, /last message/);
  assert.match(parseBody({ messages: [{ from: "you", text: "x".repeat(2001) }] }).error, /2000/);
  assert.match(parseBody({ messages: Array.from({ length: 21 }, () => ({ from: "you", text: "a" })) }).error, /20/);
  assert.match(parseBody("{not json").error, /JSON/);
});

test("toClaudeMessages drops a leading tutor line so the API sees the user first", () => {
  assert.deepEqual(
    toClaudeMessages([{ from: "tutor", text: "hi" }, { from: "you", text: "yo" }]),
    [{ role: "user", content: "yo" }]
  );
});

test("allowedOrigins defaults to Doodle's fake origin", () => {
  assert.deepEqual(allowedOrigins({}), [ORIGIN]);
  assert.deepEqual(allowedOrigins({ TUTOR_ALLOWED_ORIGINS: "https://a.example, https://b.example" }), ["https://a.example", "https://b.example"]);
});
