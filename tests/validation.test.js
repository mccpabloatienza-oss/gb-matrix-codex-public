import test from "node:test";
import assert from "node:assert/strict";
import { validateRows } from "../src/core/indicators.js";
import { parseCsv } from "../src/file_import.js";

test("valid rows pass", () => assert.equal(validateRows([{ code: "A", stock: 2, units: 3, unitValue: 5 }]).valid, true));
test("extreme values create warnings without becoming errors", () => { const result = validateRows([{ code: "A", stock: 2, units: 10001, unitValue: 5 }]); assert.equal(result.valid, true); assert.equal(result.warnings.length, 1); });
test("CSV import parses the synthetic update schema", () => { const rows = parseCsv("code,name,units,stock,unitValue\nA,Demo,4,12,20\n"); assert.deepEqual(rows[0], { code: "A", name: "Demo", units: 4, stock: 12, unitValue: 20 }); });
