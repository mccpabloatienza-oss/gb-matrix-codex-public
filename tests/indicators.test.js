import test from "node:test";
import assert from "node:assert/strict";
import { calculateIRI, calculateITD, quadrant, scoreProducts, validateRows } from "../src/core/indicators.js";

test("ITD weights recent months more strongly", () => {
  const result = calculateITD([{ units: 10 }, { units: 20 }, { units: 40 }]);
  assert.ok(result > 20 && result < 40);
});

test("IRI is non-negative and transparent", () => assert.equal(calculateIRI({ stock: 10, unitValue: 5 }), Math.log1p(50)));
test("quadrants classify four operating situations", () => {
  assert.equal(quadrant(80, 80).key, "growth");
  assert.equal(quadrant(80, 20).key, "efficient");
  assert.equal(quadrant(20, 80).key, "develop");
  assert.equal(quadrant(20, 20).key, "tail");
});
test("product scores are normalized to 0..100", () => {
  const rows = scoreProducts([{ code: "A", history: [{ units: 1, stock: 2, unitValue: 3 }, { units: 3, stock: 2, unitValue: 3 }] }, { code: "B", history: [{ units: 4, stock: 20, unitValue: 3 }, { units: 8, stock: 20, unitValue: 3 }] }], 1);
  rows.forEach((row) => { assert.ok(row.itd >= 0 && row.itd <= 100); assert.ok(row.iri >= 0 && row.iri <= 100); });
});
test("validation catches duplicates, missing values and negatives", () => {
  const result = validateRows([{ code: "A", units: 2, stock: 1, unitValue: 4 }, { code: "A", units: -1, stock: null, unitValue: -2 }]);
  assert.equal(result.valid, false); assert.ok(result.errors.length >= 3); assert.ok(result.warnings.length >= 1);
});
