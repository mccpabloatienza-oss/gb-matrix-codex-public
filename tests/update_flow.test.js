import test from "node:test";
import assert from "node:assert/strict";
import { applyMonthlyUpdate, normalizeRows, saveSnapshot } from "../src/update_flow.js";

const base = { periods: ["2025-12"], products: [{ code: "A", name: "A", brand: "Aster", category: "Demo", unitValue: 10, history: [{ period: "2025-12", units: 2, stock: 3 }] }] };

test("monthly update normalizes rows, appends a period and preserves history", () => {
  const result = applyMonthlyUpdate(base, [{ code: " A ", name: "A", brand: "Aster", category: "Demo", units: "4", stock: "5", unitValue: "12" }]);
  assert.equal(result.ok, true); assert.equal(result.summary.period, "2026-01"); assert.equal(result.snapshot.products[0].history.length, 2); assert.equal(result.snapshot.products[0].history.at(-1).units, 4);
});

test("monthly update rejects invalid rows without changing the source snapshot", () => {
  const result = applyMonthlyUpdate(base, [{ code: "A", units: -1, stock: 4, unitValue: 10 }, { code: "A", units: 2, stock: 4, unitValue: 10 }]);
  assert.equal(result.ok, false); assert.equal(base.periods.length, 1); assert.ok(result.validation.errors.length >= 2);
});

test("new product imports are added and rows are normalized", () => {
  const result = applyMonthlyUpdate(base, [{ code: " NEW ", name: "New", brand: "Bruma", category: "Demo", units: "3", stock: "8", unitValue: "9" }]);
  assert.equal(result.summary.added, 1); assert.equal(result.snapshot.products.at(-1).code, "NEW");
  assert.deepEqual(normalizeRows([{ code: " X ", units: "1", stock: "2", unitValue: "3" }])[0], { code: "X", name: "Synthetic product X", brand: "Imported", category: "Imported", units: 1, stock: 2, unitValue: 3 });
});

test("snapshots persist with period metadata", () => {
  const memory = new Map(); const storage = { getItem: (key) => memory.get(key) ?? null, setItem: (key, value) => memory.set(key, value) };
  assert.equal(saveSnapshot(base, storage), true); assert.equal(JSON.parse(memory.get("gb-matrix-snapshots"))[0].period, "2025-12");
});
