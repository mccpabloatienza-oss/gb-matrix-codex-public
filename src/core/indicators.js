export function recencyWeight(monthIndex, totalMonths, halfLife = 4) {
  const age = Math.max(0, totalMonths - 1 - monthIndex);
  return Math.pow(0.5, age / halfLife);
}

export function calculateITD(history, halfLife = 4) {
  if (!Array.isArray(history) || history.length === 0) return null;
  const weights = history.map((_, index) => recencyWeight(index, history.length, halfLife));
  const weightedUnits = history.reduce((sum, row, index) => sum + row.units * weights[index], 0);
  const weightedMonths = weights.reduce((sum, weight) => sum + weight, 0);
  return weightedMonths === 0 ? null : weightedUnits / weightedMonths;
}

export function calculateIRI(latest) {
  if (!latest || latest.stock == null || latest.unitValue == null) return null;
  return Math.log1p(Math.max(0, latest.stock) * Math.max(0, latest.unitValue));
}

export function normalizeScore(value, min, max) {
  if (value == null || max <= min) return null;
  return Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
}

export function quadrant(itd, iri, threshold = 50) {
  if (itd == null || iri == null) return { key: "pending", label: "Pending data" };
  if (itd >= threshold && iri >= threshold) return { key: "growth", label: "Growth engine" };
  if (itd >= threshold) return { key: "efficient", label: "Efficient traction" };
  if (iri >= threshold) return { key: "develop", label: "Inventory to develop" };
  return { key: "tail", label: "Operational tail" };
}

export function scoreProducts(products, periodIndex) {
  const raw = products.map((product) => {
    const history = product.history.slice(0, periodIndex + 1);
    const itdRaw = calculateITD(history);
    const latest = history.at(-1);
    return { product, itdRaw, iriRaw: calculateIRI({ ...latest, unitValue: product.unitValue }) };
  });
  const itdValues = raw.map((row) => row.itdRaw).filter((value) => value != null);
  const iriValues = raw.map((row) => row.iriRaw).filter((value) => value != null);
  const minMax = (values) => [Math.min(...values), Math.max(...values)];
  const [itdMin, itdMax] = minMax(itdValues);
  const [iriMin, iriMax] = minMax(iriValues);
  return raw.map(({ product, itdRaw, iriRaw }) => {
    const itd = normalizeScore(itdRaw, itdMin, itdMax);
    const iri = normalizeScore(iriRaw, iriMin, iriMax);
    return { ...product, latest: product.history[periodIndex], itd, iri, quadrant: quadrant(itd, iri) };
  });
}

export function validateRows(rows) {
  const errors = [];
  const warnings = [];
  const seen = new Set();
  rows.forEach((row, index) => {
    const code = String(row.code ?? "").trim();
    if (!code) errors.push(`Row ${index + 1}: missing code`);
    if (seen.has(code)) errors.push(`Row ${index + 1}: duplicate code ${code}`);
    seen.add(code);
    if (row.stock == null || row.units == null) warnings.push(`Row ${index + 1}: missing stock or units`);
    if (Number(row.stock) < 0 || Number(row.units) < 0) errors.push(`Row ${index + 1}: unexpected negative amount`);
    if (Number(row.unitValue) < 0) errors.push(`Row ${index + 1}: negative value`);
    if (Number(row.units) > 10000) warnings.push(`Row ${index + 1}: extreme units value`);
  });
  return { valid: errors.length === 0, errors, warnings, rows: rows.length };
}
