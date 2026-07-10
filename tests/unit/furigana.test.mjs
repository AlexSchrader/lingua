import { test } from "node:test";
import assert from "node:assert/strict";
import { parseFurigana, hasKanji, hasInlineFurigana } from "../../src/store/furigana.js";

test("hasKanji: kanji yes, kana/latin no", () => {
  assert.equal(hasKanji("車"), true);
  assert.equal(hasKanji("電車で行きます"), true);
  assert.equal(hasKanji("ねこ"), false);
  assert.equal(hasKanji("neko"), false);
  assert.equal(hasKanji(""), false);
  assert.equal(hasKanji(undefined), false);
});

test("unannotated text is one plain segment (no regression)", () => {
  assert.deepEqual(parseFurigana("ねこがいます"), [{ base: "ねこがいます" }]);
  assert.deepEqual(parseFurigana("電車で行きます"), [{ base: "電車で行きます" }]);
  assert.equal(hasInlineFurigana("電車で行きます"), false);
});

test("inline 漢字(かな) splits into rubied + plain segments", () => {
  assert.equal(hasInlineFurigana("電車(でんしゃ)で行(い)きます"), true);
  assert.deepEqual(parseFurigana("電車(でんしゃ)で行(い)きます"), [
    { base: "電車", rt: "でんしゃ" },
    { base: "で" },
    { base: "行", rt: "い" },
    { base: "きます" },
  ]);
});

test("concatenating bases is lossless (plain render strips readings only)", () => {
  const s = "私(わたし)は学生(がくせい)です";
  const plain = parseFurigana(s).map((seg) => seg.base).join("");
  assert.equal(plain, "私は学生です");
});

test("full-width and ASCII parens both parse", () => {
  assert.deepEqual(parseFurigana("行(い)く"), [{ base: "行", rt: "い" }, { base: "く" }]);
  assert.deepEqual(parseFurigana("行（い）く"), [{ base: "行", rt: "い" }, { base: "く" }]);
});

test("leading plain run before first annotation is kept", () => {
  assert.deepEqual(parseFurigana("お茶(ちゃ)"), [{ base: "お" }, { base: "茶", rt: "ちゃ" }]);
});
