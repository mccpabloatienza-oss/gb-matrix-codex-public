import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const seed = 20261026;
let state = seed;
function random() {
  state = (1664525 * state + 1013904223) >>> 0;
  return state / 4294967296;
}
function pick(values) { return values[Math.floor(random() * values.length)]; }
function between(min, max) { return Math.round(min + random() * (max - min)); }

const brands = ["Aster", "Bruma", "Cobalto", "Delta", "Nimbo"];
const categories = ["Mobility", "Outdoor", "Workshop", "Protection", "Travel", "Everyday"];
const periods = Array.from({ length: 12 }, (_, index) => `2025-${String(index + 1).padStart(2, "0")}`);
const products = [];
for (let index = 0; index < 800; index += 1) {
  const archetype = index % 8;
  const seasonality = archetype === 5 ? 1.8 : archetype === 6 ? 0.25 : 1;
  const trend = archetype === 2 ? 1.05 : archetype === 3 ? 0.88 : 1;
  const base = archetype === 0 ? 70 : archetype === 1 ? 28 : archetype === 7 ? 0 : between(8, 48);
  const unitValue = between(18, 240);
  const history = periods.map((period, monthIndex) => {
    const seasonal = monthIndex % 4 === 0 ? seasonality : 1;
    const noise = 0.75 + random() * 0.5;
    const units = Math.max(0, Math.round(base * seasonal * Math.pow(trend, monthIndex) * noise));
    const stock = archetype === 4 ? between(80, 230) : Math.max(0, Math.round(units * (1.5 + random() * 3)));
    return { period, units, stock };
  });
  products.push({
    code: `SYN-${String(index + 1).padStart(4, "0")}`,
    name: `Synthetic product ${String(index + 1).padStart(4, "0")}`,
    brand: brands[index % brands.length],
    category: categories[index % categories.length],
    archetype: ["high rotation", "mid rotation", "rising trend", "declining trend", "overstocked", "seasonal", "new product", "no sales"][archetype],
    unitValue,
    history
  });
}
const payload = { schema: "gb-matrix-demo/v1", synthetic: true, seed, generatedAt: "2026-10-26", periods, brands, categories, products };
const output = path.join(__dirname, "..", "public", "demo-data", "matrix-demo.json");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(payload, null, 2) + "\n");
const latest = products.map((product) => { const row = product.history.at(-1); return `${product.code},${product.name},${product.brand},${product.category},${row.units},${row.stock},${product.unitValue}`; });
fs.writeFileSync(path.join(path.dirname(output), "monthly_update.csv"), ["code,name,brand,category,units,stock,unitValue", ...latest].join("\n") + "\n");
console.log(JSON.stringify({ output, products: products.length, periods: periods.length, seed }));
