import { loadDemoData } from "./data/demo_loader.js";
import { scoreProducts, validateRows } from "./core/indicators.js";
import { parseCsv } from "./file_import.js";
import { applyMonthlyUpdate, saveSnapshot } from "./update_flow.js";

const state = { data: null, periodIndex: 11, selectedCode: null, scores: [], pendingRows: null };
const $ = (selector) => document.querySelector(selector);

function money(value) { return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value); }

function renderOptions(selector, values, allLabel) {
  $(selector).innerHTML = `<option value="">${allLabel}</option>${values.map((value) => `<option>${value}</option>`).join("")}`;
}

function filteredScores() {
  const brand = $("#brand").value;
  const category = $("#category").value;
  const query = $("#search").value.toLowerCase().trim();
  return state.scores.filter((row) => (!brand || row.brand === brand) && (!category || row.category === category) && (!query || `${row.code} ${row.name}`.toLowerCase().includes(query)));
}

function renderKpis(rows) {
  const review = rows.filter((row) => row.quadrant.key === "develop" || row.quadrant.key === "tail").length;
  const stock = rows.reduce((sum, row) => sum + (row.latest?.stock ?? 0), 0);
  $("#kpis").innerHTML = `<article><span>Products shown</span><strong>${rows.length}</strong></article><article><span>Stock units</span><strong>${stock.toLocaleString()}</strong></article><article><span>Need review</span><strong>${review}</strong></article><article><span>Period</span><strong>${state.data.periods[state.periodIndex]}</strong></article>`;
}

function renderScatter(rows) {
  const canvas = $("#scatter");
  const ctx = canvas.getContext("2d");
  const width = canvas.width = canvas.clientWidth * 2;
  const height = canvas.height = canvas.clientHeight * 2;
  ctx.scale(2, 2);
  const w = width / 2, h = height / 2, pad = 42;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#f8fafc"; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(pad, h / 2); ctx.lineTo(w - pad, h / 2); ctx.moveTo(w / 2, pad); ctx.lineTo(w / 2, h - pad); ctx.stroke();
  ctx.fillStyle = "#64748b"; ctx.font = "12px system-ui"; ctx.fillText("IRI → relevance of inventory", pad, 18); ctx.fillText("ITD → demand traction", w - 150, h - 10);
  const colors = { growth: "#0f766e", efficient: "#2563eb", develop: "#d97706", tail: "#94a3b8", pending: "#dc2626" };
  rows.forEach((row) => { if (row.itd == null || row.iri == null) return; const x = pad + (row.itd / 100) * (w - pad * 2); const y = h - pad - (row.iri / 100) * (h - pad * 2); ctx.fillStyle = colors[row.quadrant.key]; ctx.beginPath(); ctx.arc(x, y, row.code === state.selectedCode ? 6 : 3.2, 0, Math.PI * 2); ctx.fill(); });
}

function renderTable(rows) {
  $("#rows").innerHTML = rows.slice(0, 40).map((row) => `<tr data-code="${row.code}"><td><button class="link-button">${row.name}</button><small>${row.code}</small></td><td>${row.brand}</td><td>${row.category}</td><td>${row.itd?.toFixed(1) ?? "—"}</td><td>${row.iri?.toFixed(1) ?? "—"}</td><td><span class="badge ${row.quadrant.key}">${row.quadrant.label}</span></td></tr>`).join("");
  document.querySelectorAll("#rows tr").forEach((tr) => tr.addEventListener("click", () => showDetail(tr.dataset.code)));
}

function showDetail(code) {
  const row = state.scores.find((item) => item.code === code); if (!row) return;
  state.selectedCode = code;
  $("#detail").innerHTML = `<button id="close-detail" aria-label="Close detail">×</button><p class="eyebrow">PRODUCT DETAIL</p><h2>${row.name}</h2><p>${row.brand} · ${row.category} · ${row.archetype}</p><div class="detail-grid"><div><span>ITD</span><strong>${row.itd?.toFixed(1) ?? "Pending"}</strong></div><div><span>IRI</span><strong>${row.iri?.toFixed(1) ?? "Pending"}</strong></div><div><span>Stock</span><strong>${row.latest.stock}</strong></div><div><span>Unit value</span><strong>${money(row.unitValue)}</strong></div></div><h3>Historical demand and stock</h3><div class="history">${row.history.map((point) => `<div><span>${point.period.slice(5)}</span><b style="height:${Math.min(100, point.units)}%" title="${point.units} units"></b><i style="height:${Math.min(100, point.stock / 3)}%" title="${point.stock} stock"></i></div>`).join("")}</div><p class="interpretation">${row.quadrant.key === "growth" ? "High traction and inventory relevance: a candidate for acceleration." : row.quadrant.key === "develop" ? "Inventory is relevant but demand traction needs development." : row.quadrant.key === "tail" ? "Low observed traction: review availability, assortment or lifecycle." : "Demand traction is visible with a lighter inventory position."}</p>`;
  $("#detail-panel").classList.add("open"); $("#close-detail").addEventListener("click", () => $("#detail-panel").classList.remove("open")); renderScatter(filteredScores());
}

function render() { state.scores = scoreProducts(state.data.products, state.periodIndex); const rows = filteredScores(); renderKpis(rows); renderScatter(rows); renderTable(rows); $("#status").textContent = `${rows.length} synthetic products shown · no real commercial records`; }

function bind() {
  ["#brand", "#category", "#search"].forEach((selector) => $(selector).addEventListener("input", render));
  $("#period").addEventListener("input", (event) => { state.periodIndex = Number(event.target.value); render(); });
  $("#validate").addEventListener("click", () => { const sample = state.data.products.slice(0, 20).map((product) => ({ code: product.code, ...product.history.at(-1), unitValue: product.unitValue })); const result = validateRows(sample); $("#validation").textContent = `Validation passed: ${result.rows} rows checked, ${result.errors.length} errors, ${result.warnings.length} warnings.`; });
  $("#simulate").addEventListener("click", () => { const sample = [{ code: "SYN-IMPORT-001", units: 12, stock: 30, unitValue: 55 }, { code: "SYN-IMPORT-001", units: -2, stock: 30, unitValue: 55 }, { code: "", units: 2, stock: null, unitValue: 55 }]; const result = validateRows(sample); $("#validation").textContent = `Demo import rejected as expected: ${result.errors.length} errors and ${result.warnings.length} warnings. No snapshot was changed.`; });
  $("#csv-file").addEventListener("change", async (event) => { const file = event.target.files[0]; if (!file) return; const rows = parseCsv(await file.text()); const result = validateRows(rows); state.pendingRows = result.valid ? rows : null; $("#apply-update").disabled = !result.valid; $("#validation").textContent = `Import checked: ${result.rows} rows, ${result.errors.length} errors, ${result.warnings.length} warnings.${result.valid ? " Ready to apply a new synthetic period." : " Update rejected; no snapshot was changed."}`; });
  $("#apply-update").addEventListener("click", () => { if (!state.pendingRows) return; const result = applyMonthlyUpdate(state.data, state.pendingRows); if (!result.ok) { $("#validation").textContent = `Update rejected: ${result.validation.errors.length} errors. No snapshot was changed.`; return; } state.data = result.snapshot; state.periodIndex = state.data.periods.length - 1; saveSnapshot(state.data); $("#period").max = state.data.periods.length - 1; $("#period").value = state.periodIndex; $("#period-label").textContent = state.data.periods.at(-1); $("#apply-update").disabled = true; $("#validation").textContent = `Update applied: ${result.summary.updated} updated, ${result.summary.added} added, ${result.summary.preserved} preserved. Snapshot saved for ${result.summary.period}.`; render(); });
}

loadDemoData().then((data) => { state.data = data; renderOptions("#brand", data.brands, "All brands"); renderOptions("#category", data.categories, "All categories"); $("#period").max = data.periods.length - 1; $("#period-label").textContent = data.periods.at(-1); bind(); render(); }).catch((error) => { $("#status").textContent = error.message; });
