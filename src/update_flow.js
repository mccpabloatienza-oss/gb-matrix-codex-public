import { validateRows } from "./core/indicators.js";

export function normalizeRows(rows) {
  return rows.map((row) => {
    const code = String(row.code ?? "").trim();
    return {
    code,
    name: String(row.name ?? `Synthetic product ${code}`).trim(),
    brand: String(row.brand ?? "Imported").trim(),
    category: String(row.category ?? "Imported").trim(),
    units: Number(row.units),
    stock: Number(row.stock),
    unitValue: Number(row.unitValue)
    };
  });
}

function nextPeriod(period) {
  const [year, month] = period.split("-").map(Number);
  const nextMonth = month === 12 ? 1 : month + 1;
  return `${month === 12 ? year + 1 : year}-${String(nextMonth).padStart(2, "0")}`;
}

export function applyMonthlyUpdate(snapshot, inputRows) {
  const rows = normalizeRows(inputRows);
  const validation = validateRows(rows);
  if (!validation.valid) return { ok: false, validation };
  const period = nextPeriod(snapshot.periods.at(-1));
  const byCode = new Map(rows.map((row) => [row.code, row]));
  const products = snapshot.products.map((product) => {
    const update = byCode.get(product.code);
    if (!update) return product;
    return { ...product, name: update.name || product.name, brand: update.brand || product.brand, category: update.category || product.category, unitValue: update.unitValue, history: [...product.history, { period, units: update.units, stock: update.stock }] };
  });
  const updatedCodes = new Set(products.filter((product) => product.history.at(-1)?.period === period).map((product) => product.code));
  const added = rows.filter((row) => !snapshot.products.some((product) => product.code === row.code));
  for (const row of added) products.push({ code: row.code, name: row.name, brand: row.brand, category: row.category, archetype: "monthly import", unitValue: row.unitValue, history: [{ period, units: row.units, stock: row.stock }] });
  return { ok: true, snapshot: { ...snapshot, periods: [...snapshot.periods, period], products }, summary: { period, rows: rows.length, updated: updatedCodes.size, added: added.length, preserved: snapshot.products.length - updatedCodes.size } };
}

export function saveSnapshot(snapshot, storage = globalThis.localStorage) {
  if (!storage) return false;
  const snapshots = JSON.parse(storage.getItem("gb-matrix-snapshots") || "[]");
  snapshots.push({ savedAt: new Date().toISOString(), period: snapshot.periods.at(-1), snapshot });
  storage.setItem("gb-matrix-snapshots", JSON.stringify(snapshots));
  return true;
}

