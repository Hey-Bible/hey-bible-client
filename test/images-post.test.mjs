// Tests for the generated imagesPost call. They run against the built client
// (typescript/dist) with a fake fetch, so they never reach the real API.
import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { Configuration, HeyBibleApi } = require("../typescript/dist/index.js");

function fakeFetch(status, body) {
  const calls = [];
  const fetchApi = async (url, init) => {
    calls.push({ url, init });
    return new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  };
  return { calls, fetchApi };
}

function apiWith(fetchApi) {
  return new HeyBibleApi(
    new Configuration({ apiKey: "test-key", basePath: "http://api.test", fetchApi }),
  );
}

test("imagesPost sends POST /images with the API key and snake_case body", async () => {
  const { calls, fetchApi } = fakeFetch(200, {
    image: {
      id: 42,
      verse_id: 7,
      storage_path: "user/42.png",
      signed_url: "https://example.test/42.png?token=abc",
      created_at: "2026-11-22T00:00:00Z",
      quote: "But those who wait for Yahweh will renew their strength.",
      source: "Isaiah 40:31 (WEB)",
      copyright: null,
      fums_token: null,
    },
    credits_charged: 4,
  });

  const result = await apiWith(fetchApi).imagesPost({
    generateImageRequest: {
      book: "Isaiah",
      chapter: 40,
      startVerse: 31,
      bibleId: "web",
      theme: "watercolor",
      themeContent: undefined,
      size: "landscape",
    },
  });

  assert.equal(calls.length, 1);
  const { url, init } = calls[0];
  assert.equal(url, "http://api.test/images");
  assert.equal(init.method, "POST");
  assert.equal(init.headers["X-Hey-Bible-Api-Key"], "test-key");
  assert.equal(init.headers["Content-Type"], "application/json");
  assert.deepEqual(JSON.parse(init.body), {
    book: "Isaiah",
    chapter: 40,
    start_verse: 31,
    bible_id: "web",
    theme: "watercolor",
    size: "landscape",
  });

  assert.equal(result.creditsCharged, 4);
  assert.equal(result.image.id, 42);
  assert.equal(result.image.verseId, 7);
  assert.equal(result.image.signedUrl, "https://example.test/42.png?token=abc");
  assert.ok(result.image.createdAt instanceof Date);
});

test("imagesPost accepts a verse_id instead of a passage", async () => {
  const { calls, fetchApi } = fakeFetch(200, { image: { id: 1 }, credits_charged: 3 });
  await apiWith(fetchApi).imagesPost({ generateImageRequest: { verseId: 9 } });
  assert.deepEqual(JSON.parse(calls[0].init.body), { verse_id: 9 });
});

for (const [status, message] of [
  [400, "Provide verse_id, or book and chapter"],
  [402, "Insufficient credits. This model requires 4 credits."],
]) {
  test(`imagesPost throws a ResponseError carrying the ${status} body`, async () => {
    const { fetchApi } = fakeFetch(status, { error: message });
    const error = await apiWith(fetchApi)
      .imagesPost({ generateImageRequest: {} })
      .then(() => assert.fail("expected imagesPost to throw"), (e) => e);
    // The client compiles to ES5, so instanceof ResponseError is false; check the name.
    assert.equal(error.name, "ResponseError");
    assert.equal(error.response.status, status);
    assert.deepEqual(await error.response.json(), { error: message });
  });
}
