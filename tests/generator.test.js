import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("generated demo is reproducible and fully synthetic", () => {
  const payload = JSON.parse(fs.readFileSync("public/demo-data/matrix-demo.json", "utf8"));
  assert.equal(payload.synthetic, true); assert.equal(payload.seed, 20261026); assert.equal(payload.products.length, 800); assert.equal(payload.periods.length, 12); assert.equal(new Set(payload.products.map((p) => p.brand)).size, 5); assert.equal(new Set(payload.products.map((p) => p.category)).size, 6);
});
